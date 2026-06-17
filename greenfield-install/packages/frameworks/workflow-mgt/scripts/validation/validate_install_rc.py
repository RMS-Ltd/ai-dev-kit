#!/usr/bin/env python3
"""
Evaluate Install RC checklist for adopter install-complete gate.

Loads packages/frameworks/workflow-mgt/config/install-rc-checklist.yaml
and runs profile-scoped checks in the adopter project root.

Usage:
  validate_install_rc.py --project-root PATH --profile arm-b
  validate_install_rc.py --project-root PATH --profile greenfield --strict
  validate_install_rc.py --project-root PATH --profile arm-b --report-json out.json
"""

from __future__ import annotations

import argparse
import json
import subprocess
import sys
from dataclasses import asdict, dataclass, field
from pathlib import Path
from typing import Any, List, Optional, Sequence

try:
    import yaml
except ImportError:
    yaml = None  # type: ignore

SCRIPT_DIR = Path(__file__).resolve().parent
WORKFLOW_ROOT = SCRIPT_DIR.parent
CONTRACT_PATH = WORKFLOW_ROOT / "config" / "install-rc-checklist.yaml"
KANBAN_SCRIPTS = WORKFLOW_ROOT.parent / "kanban" / "scripts"


@dataclass
class RowResult:
    id: str
    label: str
    blocking: bool
    passed: bool
    skipped: bool
    detail: str = ""
    skip_reason: str = ""


@dataclass
class ProfileReport:
    profile: str
    passed: bool
    strict_passed: bool
    rows: List[RowResult] = field(default_factory=list)


def _load_contract(path: Path) -> dict[str, Any]:
    if yaml is None:
        raise RuntimeError("PyYAML required: pip install pyyaml")
    with open(path, encoding="utf-8") as handle:
        data = yaml.safe_load(handle)
    if not isinstance(data, dict):
        raise ValueError(f"invalid contract: {path}")
    return data


def _read_rw_config(project_root: Path) -> dict[str, Any]:
    cfg_path = project_root / "rw-config.yaml"
    if not cfg_path.is_file():
        return {}
    with open(cfg_path, encoding="utf-8") as handle:
        data = yaml.safe_load(handle) or {}
    return data if isinstance(data, dict) else {}


def _expand_args(args: Sequence[str], project_root: Path) -> List[str]:
    return [
        a.format(
            project_root=str(project_root),
            workflow_scripts=str(SCRIPT_DIR),
            kanban_scripts=str(KANBAN_SCRIPTS),
        )
        for a in args
    ]


def _kanban_root(project_root: Path, config: dict[str, Any]) -> Path:
    root = config.get("kanban_root", "docs/kanban")
    p = Path(str(root))
    if not p.is_absolute():
        p = project_root / p
    return p


def _when_applies(project_root: Path, config: dict[str, Any], when: Any) -> bool:
    if not when:
        return True
    if not isinstance(when, dict):
        return True

    if "path_exists" in when:
        rel = when["path_exists"]
        return (project_root / str(rel)).exists()

    key = when.get("rw_config_key")
    if key is not None:
        expected = when.get("equals")
        actual = config.get(key)
        if expected is True:
            return bool(actual)
        if expected is False:
            return not bool(actual)
        return actual == expected

    return True


def _resolve_rw_path(
    project_root: Path, config: dict[str, Any], spec: dict[str, Any]
) -> Optional[Path]:
    key = spec.get("rw_config_key")
    if not key:
        return None
    rel = config.get(key)
    if not rel:
        return None
    path = Path(str(rel))
    if spec.get("under_kanban_root"):
        base = _kanban_root(project_root, config)
        if not path.is_absolute():
            path = base / path
    elif not path.is_absolute():
        path = project_root / path
    return path


def _run_check(
    project_root: Path, config: dict[str, Any], contract: dict[str, Any], spec: dict[str, Any]
) -> tuple[bool, str]:
    ctype = str(spec.get("type", ""))

    if ctype == "rw_config_exists":
        cfg = project_root / "rw-config.yaml"
        if cfg.is_file() and cfg.stat().st_size > 0:
            return True, "rw-config.yaml OK"
        return False, "rw-config.yaml missing or empty"

    if ctype == "rw_config_key":
        key = str(spec.get("key", ""))
        if config.get(key):
            return True, f"{key}={config.get(key)!r}"
        return False, f"rw-config missing {key}"

    if ctype == "file_exists":
        path = _resolve_rw_path(project_root, config, spec)
        if path is None:
            return False, "could not resolve path from rw-config"
        if path.is_file():
            return True, f"exists: {path.relative_to(project_root)}"
        return False, f"not found: {path}"

    if ctype == "sqlite_release_state":
        backend = str(config.get("release_state_backend", "legacy")).strip().lower()
        if backend != "sqlite":
            return True, "release_state_backend not sqlite — skipped requirement"
        db = project_root / ".adk" / "release-state.db"
        if db.is_file():
            return True, f"exists: {db.relative_to(project_root)}"
        return False, ".adk/release-state.db missing (run init_release_state_db or import_legacy)"

    if ctype == "documentation_surfaces":
        if isinstance(config.get("documentation_surfaces"), dict):
            return True, "documentation_surfaces in rw-config"
        schema_rel = str(contract.get("documentation_schema_rel", ""))
        schema = project_root / schema_rel
        if schema.is_file():
            return True, f"schema doc: {schema_rel}"
        return False, "documentation_surfaces missing and DOCUMENTATION_SCHEMA.md not found"

    if ctype == "path_exists":
        paths = spec.get("path_any") or [spec.get("path")]
        for rel in paths:
            if rel and (project_root / str(rel)).exists():
                return True, f"found: {rel}"
        return False, f"none of {paths!r} exist"

    if ctype == "path_not_exists":
        rel = spec.get("path")
        if not rel:
            return False, "no path in spec"
        p = project_root / str(rel)
        if p.exists():
            return False, f"forbidden path exists: {rel}"
        return True, f"absent: {rel}"

    if ctype == "glob_count_max":
        globs = list(spec.get("globs") or [])
        exclude = list(spec.get("exclude_kit_paths") or [])
        count = 0
        hits: List[str] = []
        for pattern in globs:
            for match in project_root.glob(pattern):
                rel = str(match.relative_to(project_root))
                if any(rel.startswith(ex) for ex in exclude):
                    continue
                if match.is_file():
                    count += 1
                    hits.append(rel)
        max_allowed = int(spec.get("max", 0))
        if count <= max_allowed:
            return True, f"glob matches {count} <= {max_allowed}"
        sample = hits[0] if hits else "?"
        return False, f"{count} ad-hoc script(s) > {max_allowed}, e.g. {sample}"

    if ctype == "sqlite_kanban_completed":
        kc = config.get("kanban_completed")
        if not isinstance(kc, dict):
            return True, "kanban_completed not configured — skipped"
        db_rel = kc.get("db", ".adk/kanban-completed.db")
        db_path = project_root / str(db_rel)
        if db_path.is_file():
            return True, f"exists: {db_path.relative_to(project_root)}"
        return False, f"{db_rel} missing (run init_kanban_completed_db.py)"

    if ctype == "file_contains":
        rel = spec.get("path", ".cursorrules")
        p = project_root / str(rel)
        if not p.is_file():
            return False, f"not found: {rel}"
        needles = [str(s) for s in (spec.get("require_any_substrings") or [])]
        text = p.read_text(encoding="utf-8", errors="replace")
        if any(n in text for n in needles):
            return True, f"marker in {rel}"
        return False, f"{rel} missing required substring(s)"

    if ctype == "comprehension_marker":
        paths = spec.get("path_any") or []
        needles = [str(s).lower() for s in (spec.get("require_any_substrings") or [])]
        for rel in paths:
            p = project_root / str(rel)
            if not p.is_file():
                continue
            text = p.read_text(encoding="utf-8", errors="replace").lower()
            if any(n in text for n in needles):
                return True, f"marker in {rel}"
        return False, f"comprehension file missing or lacks markers in {paths!r}"

    if ctype == "command":
        cmd = spec.get("command")
        args = _expand_args(spec.get("args") or [], project_root)
        if not cmd:
            return False, "no command"
        try:
            proc = subprocess.run(
                [cmd, *args],
                cwd=project_root,
                capture_output=True,
                text=True,
                timeout=180,
            )
        except (OSError, subprocess.TimeoutExpired) as exc:
            return False, str(exc)
        if proc.returncode != 0:
            err = (proc.stderr or proc.stdout or "").strip()[:400]
            return False, f"exit {proc.returncode}: {err}"
        return True, "exit 0"

    return False, f"unknown check type: {ctype}"


def _profile_section(profile: str) -> str:
    return profile.replace("-", "_")


def evaluate_profile(
    project_root: Path,
    contract: dict[str, Any],
    profile: str,
    *,
    strict: bool,
) -> ProfileReport:
    config = _read_rw_config(project_root)
    rows: List[RowResult] = []

    sections = ["cross_cutting"]
    section = _profile_section(profile)
    if profile != "cross_cutting":
        sections.append(section)

    for section in sections:
        for entry in contract.get("profiles", {}).get(section, []) or []:
            row_id = str(entry.get("id", ""))
            label = str(entry.get("label", row_id))
            blocking = bool(entry.get("blocking", True))
            when = entry.get("when")
            check = entry.get("check") or {}

            if not _when_applies(project_root, config, when):
                rows.append(
                    RowResult(
                        id=row_id,
                        label=label,
                        blocking=blocking,
                        passed=True,
                        skipped=True,
                        skip_reason="when clause not applicable",
                    )
                )
                continue

            ok, detail = _run_check(project_root, config, contract, check)
            rows.append(
                RowResult(
                    id=row_id,
                    label=label,
                    blocking=blocking,
                    passed=ok,
                    skipped=False,
                    detail=detail,
                )
            )

    blocking_fail = [r for r in rows if r.blocking and not r.skipped and not r.passed]
    any_fail = [r for r in rows if not r.skipped and not r.passed]

    return ProfileReport(
        profile=profile,
        passed=len(any_fail) == 0,
        strict_passed=len(blocking_fail) == 0 if strict else len(any_fail) == 0,
        rows=rows,
    )


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description="Validate Install RC checklist.")
    parser.add_argument("--project-root", default=".", help="Adopter project root.")
    parser.add_argument(
        "--profile",
        choices=("greenfield", "arm-a", "arm-b", "strangler", "cross_cutting"),
        default="greenfield",
        help="Adoption path profile (default: greenfield).",
    )
    parser.add_argument(
        "--contract",
        type=Path,
        default=CONTRACT_PATH,
        help="Checklist YAML path.",
    )
    parser.add_argument(
        "--strict",
        action="store_true",
        help="Fail only on blocking rows (default: fail on any non-skipped row).",
    )
    parser.add_argument("--report-json", type=Path, default=None, help="Write JSON report.")
    args = parser.parse_args(argv)

    project_root = Path(args.project_root).resolve()
    if not project_root.is_dir():
        print(f"validate_install_rc: project root not found: {project_root}", file=sys.stderr)
        return 1

    contract = _load_contract(args.contract.resolve())
    report = evaluate_profile(project_root, contract, args.profile, strict=args.strict)

    passed_n = sum(1 for r in report.rows if r.passed and not r.skipped)
    skipped_n = sum(1 for r in report.rows if r.skipped)
    failed_n = sum(1 for r in report.rows if not r.skipped and not r.passed)
    total = len(report.rows)

    print(f"Install RC — profile={args.profile} project={project_root}")
    for row in report.rows:
        status = "SKIP" if row.skipped else ("PASS" if row.passed else "FAIL")
        block = " [blocking]" if row.blocking and not row.skipped else ""
        print(f"  [{status}]{block} {row.id}: {row.label}")
        if row.detail and not row.skipped:
            print(f"         {row.detail}")
        if row.skip_reason:
            print(f"         ({row.skip_reason})")

    print(f"\nSummary: {passed_n}/{total} passed, {skipped_n} skipped, {failed_n} failed")
    overall = report.strict_passed if args.strict else report.passed
    print(f"Result: {'PASS' if overall else 'FAIL'}")

    if args.report_json:
        payload = {
            "profile": report.profile,
            "passed": report.passed,
            "strict_passed": report.strict_passed,
            "rows": [asdict(r) for r in report.rows],
        }
        args.report_json.parent.mkdir(parents=True, exist_ok=True)
        args.report_json.write_text(json.dumps(payload, indent=2), encoding="utf-8")
        print(f"Report: {args.report_json}")

    return 0 if overall else 1


if __name__ == "__main__":
    raise SystemExit(main())
