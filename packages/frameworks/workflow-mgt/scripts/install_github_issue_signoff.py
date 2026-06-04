#!/usr/bin/env python3
"""
Evaluate GitHub Issue install sign-off triggers and optionally close ready issues.

Loads packages/frameworks/workflow-mgt/config/github-issue-install-signoff-contract.yaml
and runs declarative checks in the adopter project root. Never closes issues unless
--close-github-issues is set and `gh` succeeds.

Usage:
  python install_github_issue_signoff.py --project-root PATH [--report-json PATH]
  python install_github_issue_signoff.py --project-root PATH --close-github-issues
  python install_github_issue_signoff.py --list-open-awaiting
"""

from __future__ import annotations

import argparse
import json
import re
import subprocess
import sys
from dataclasses import dataclass, field
from pathlib import Path
from typing import Any, Dict, List, Optional, Sequence

try:
    import yaml
except ImportError:
    yaml = None  # type: ignore

SCRIPT_DIR = Path(__file__).resolve().parent
WORKFLOW_ROOT = SCRIPT_DIR.parent
CONTRACT_PATH = WORKFLOW_ROOT / "config" / "github-issue-install-signoff-contract.yaml"
KANBAN_SCRIPTS = WORKFLOW_ROOT.parent / "kanban" / "scripts"


@dataclass
class CheckResult:
    check_type: str
    passed: bool
    detail: str


@dataclass
class IssueEvaluation:
    issue_id: str
    number: Optional[int]
    title: str
    ready: bool
    skipped: bool
    skip_reason: str = ""
    checks: List[CheckResult] = field(default_factory=list)
    depends_on: List[str] = field(default_factory=list)


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


def _kanban_epics_root(project_root: Path, config: dict[str, Any]) -> Optional[Path]:
    if not config.get("use_kanban"):
        return None
    root = config.get("kanban_root", "docs/project-management/kanban")
    p = Path(root)
    if not p.is_absolute():
        p = project_root / p
    epics = p / "epics"
    return epics if epics.is_dir() else None


def _expand_args(args: Sequence[str], project_root: Path) -> List[str]:
    workflow_scripts = str(SCRIPT_DIR)
    kanban_scripts = str(KANBAN_SCRIPTS)
    out: List[str] = []
    for a in args:
        out.append(
            a.format(
                project_root=str(project_root),
                workflow_scripts=workflow_scripts,
                kanban_scripts=kanban_scripts,
            )
        )
    return out


def _run_check_rw_config_patterns(
    project_root: Path, spec: dict[str, Any]
) -> CheckResult:
    config = _read_rw_config(project_root)
    if not config:
        return CheckResult("rw_config_patterns", False, "rw-config.yaml missing or empty")

    errors: List[str] = []
    for key in spec.get("require_keys") or []:
        if key not in config:
            errors.append(f"missing key {key}")

    for key, needle in (
        ("epic_doc_pattern", spec.get("epic_doc_pattern_contains")),
        ("story_doc_pattern", spec.get("story_doc_pattern_contains")),
        ("task_doc_pattern", spec.get("task_doc_pattern_contains")),
    ):
        if not needle:
            continue
        val = str(config.get(key, ""))
        if needle not in val:
            errors.append(f"{key} does not contain {needle!r} (got {val!r})")

    for key, needles in (
        ("epic_doc_pattern", spec.get("epic_doc_pattern_contains_any")),
        ("story_doc_pattern", spec.get("story_doc_pattern_contains_any")),
        ("task_doc_pattern", spec.get("task_doc_pattern_contains_any")),
    ):
        if not needles:
            continue
        val = str(config.get(key, ""))
        if not any(str(n) in val for n in needles):
            errors.append(
                f"{key} does not contain any of {needles!r} (got {val!r})"
            )

    if errors:
        return CheckResult("rw_config_patterns", False, "; ".join(errors))
    return CheckResult("rw_config_patterns", True, "rw-config.yaml patterns OK")


def _run_check_version_file_exists(
    project_root: Path, spec: dict[str, Any]
) -> CheckResult:
    config = _read_rw_config(project_root)
    key = str(spec.get("rw_config_key") or "version_file")
    rel = config.get(key)
    if not rel:
        return CheckResult("version_file_exists", False, f"rw-config missing {key}")
    path = Path(str(rel))
    if not path.is_absolute():
        path = project_root / path
    if path.is_file():
        return CheckResult("version_file_exists", True, f"{key} exists: {rel}")
    return CheckResult("version_file_exists", False, f"{key} not found: {rel}")


def _run_check_command(project_root: Path, spec: dict[str, Any]) -> CheckResult:
    cmd = spec.get("command")
    args = _expand_args(spec.get("args") or [], project_root)
    if not cmd:
        return CheckResult("command", False, "no command")
    try:
        proc = subprocess.run(
            [cmd, *args],
            cwd=project_root,
            capture_output=True,
            text=True,
            timeout=120,
        )
    except (OSError, subprocess.TimeoutExpired) as exc:
        return CheckResult("command", False, str(exc))
    if proc.returncode != 0:
        err = (proc.stderr or proc.stdout or "").strip()[:500]
        return CheckResult("command", False, f"exit {proc.returncode}: {err}")
    return CheckResult("command", True, "exit 0")


def _run_check_no_capitalised(project_root: Path, _: dict[str, Any]) -> CheckResult:
    config = _read_rw_config(project_root)
    epics = _kanban_epics_root(project_root, config)
    if epics is None:
        return CheckResult(
            "no_capitalised_kanban_segments",
            False,
            "kanban epics/ not found (install kanban first)",
        )
    bad: List[str] = []
    for path in epics.rglob("*"):
        name = path.name
        if name.startswith("Epic-") or name.startswith("Story-"):
            bad.append(str(path.relative_to(epics.parent.parent)))
    if bad:
        return CheckResult(
            "no_capitalised_kanban_segments",
            False,
            f"{len(bad)} capitalised segment(s), e.g. {bad[0]}",
        )
    return CheckResult("no_capitalised_kanban_segments", True, "no Epic-/Story- path segments")


def _run_check_kanban_padding(project_root: Path, spec: dict[str, Any]) -> CheckResult:
    config = _read_rw_config(project_root)
    epics = _kanban_epics_root(project_root, config)
    if epics is None:
        return CheckResult("kanban_paths_padding", False, "kanban epics/ not found")

    if str(KANBAN_SCRIPTS) not in sys.path:
        sys.path.insert(0, str(KANBAN_SCRIPTS))
    import kanban_paths as kp  # noqa: E402

    violations = kp.padding_violations(epics)
    capitalised = [v for v in violations if "Epic-" in v or "Story-" in v]
    padding_only = [v for v in violations if v not in capitalised]

    if padding_only:
        sample = ", ".join(padding_only[:3])
        return CheckResult(
            "kanban_paths_padding",
            False,
            f"{len(padding_only)} padding violation(s): {sample}",
        )

    if spec.get("strict") and capitalised:
        return CheckResult(
            "kanban_paths_padding",
            False,
            f"{len(capitalised)} capitalised segment(s)",
        )

    if spec.get("ignore_duplicate_tasks"):
        validator = (
            WORKFLOW_ROOT
            / "scripts"
            / "validation"
            / "validate_kanban_naming.py"
        )
        if validator.is_file():
            proc = subprocess.run(
                [sys.executable, str(validator), "--strict", "--epics-root", str(epics)],
                cwd=project_root,
                capture_output=True,
                text=True,
                timeout=120,
            )
            if proc.returncode != 0 and "Duplicate task" in (proc.stdout + proc.stderr):
                return CheckResult(
                    "kanban_paths_padding",
                    True,
                    "padding OK (duplicate tasks ignored per contract)",
                )
            if proc.returncode != 0:
                err = (proc.stdout + proc.stderr)[:400]
                return CheckResult("kanban_paths_padding", False, f"validator: {err}")

    return CheckResult("kanban_paths_padding", True, "canonical padding")


def _run_check_note(_: Path, spec: dict[str, Any]) -> CheckResult:
    return CheckResult("note", False, spec.get("message", "manual sign-off only"))


def _evaluate_issue(
    project_root: Path,
    entry: dict[str, Any],
    completed_ids: set[str],
) -> IssueEvaluation:
    issue_id = str(entry.get("id", ""))
    number = entry.get("number")
    num = int(number) if number is not None else None
    title = str(entry.get("title", issue_id))
    depends = list(entry.get("depends_on") or [])

    if entry.get("scope") == "kit_only":
        return IssueEvaluation(
            issue_id=issue_id,
            number=num,
            title=title,
            ready=False,
            skipped=True,
            skip_reason="kit_only — not evaluated on adopter install",
            depends_on=depends,
        )

    for dep in depends:
        if dep not in completed_ids:
            return IssueEvaluation(
                issue_id=issue_id,
                number=num,
                title=title,
                ready=False,
                skipped=True,
                skip_reason=f"blocked by dependency {dep}",
                depends_on=depends,
            )

    checks: List[CheckResult] = []
    for spec in entry.get("when_all") or []:
        if not isinstance(spec, dict):
            continue
        ctype = spec.get("type", "")
        if ctype == "rw_config_patterns":
            checks.append(_run_check_rw_config_patterns(project_root, spec))
        elif ctype == "command":
            checks.append(_run_check_command(project_root, spec))
        elif ctype == "no_capitalised_kanban_segments":
            checks.append(_run_check_no_capitalised(project_root, spec))
        elif ctype == "kanban_paths_padding":
            checks.append(_run_check_kanban_padding(project_root, spec))
        elif ctype == "note":
            checks.append(_run_check_note(project_root, spec))
        elif ctype == "version_file_exists":
            checks.append(_run_check_version_file_exists(project_root, spec))
        else:
            checks.append(CheckResult(ctype or "unknown", False, f"unknown check type {ctype!r}"))

    ready = bool(checks) and all(c.passed for c in checks)
    return IssueEvaluation(
        issue_id=issue_id,
        number=num,
        title=title,
        ready=ready,
        skipped=False,
        checks=checks,
        depends_on=depends,
    )


def evaluate_all(project_root: Path, contract_path: Path) -> dict[str, Any]:
    contract = _load_contract(contract_path)
    completed: set[str] = set()
    evaluations: List[IssueEvaluation] = []

    for entry in contract.get("issues") or []:
        if not isinstance(entry, dict):
            continue
        ev = _evaluate_issue(project_root, entry, completed)
        evaluations.append(ev)
        if ev.ready:
            completed.add(ev.issue_id)

    return {
        "schema_version": contract.get("schema_version", "1.0.0"),
        "project_root": str(project_root.resolve()),
        "default_repo": contract.get("default_repo"),
        "awaiting_label": contract.get("awaiting_label"),
        "issues": [
            {
                "id": e.issue_id,
                "number": e.number,
                "title": e.title,
                "ready": e.ready,
                "skipped": e.skipped,
                "skip_reason": e.skip_reason,
                "checks": [
                    {"type": c.check_type, "passed": c.passed, "detail": c.detail}
                    for c in e.checks
                ],
            }
            for e in evaluations
        ],
    }


def _gh_available() -> bool:
    try:
        proc = subprocess.run(
            ["gh", "--version"],
            capture_output=True,
            timeout=10,
        )
        return proc.returncode == 0
    except (OSError, subprocess.TimeoutExpired):
        return False


def list_open_awaiting(repo: str, label: str) -> List[dict[str, Any]]:
    if not _gh_available():
        return []
    proc = subprocess.run(
        [
            "gh",
            "issue",
            "list",
            "--repo",
            repo,
            "--label",
            label,
            "--state",
            "open",
            "--json",
            "number,title,labels,url",
        ],
        capture_output=True,
        text=True,
        timeout=30,
    )
    if proc.returncode != 0:
        return []
    try:
        return json.loads(proc.stdout or "[]")
    except json.JSONDecodeError:
        return []


def _issue_comment_body(entry: dict[str, Any], report: dict[str, Any]) -> str:
    template = entry.get("close_comment") or "Installer sign-off checks passed."
    return template.strip() + f"\n\n---\n_Sign-off report project:_ `{report.get('project_root')}`"


def close_ready_issues(
    contract: dict[str, Any],
    report: dict[str, Any],
    *,
    dry_run: bool,
) -> List[str]:
    repo = str(contract.get("default_repo", "RMS-Ltd/ai-dev-kit"))
    by_id = {str(e.get("id")): e for e in contract.get("issues") or [] if isinstance(e, dict)}
    actions: List[str] = []

    for item in report.get("issues") or []:
        if not item.get("ready") or not item.get("number"):
            continue
        num = int(item["number"])
        entry = by_id.get(item.get("id", ""), {})
        body = _issue_comment_body(entry, report)
        if dry_run:
            actions.append(f"[dry-run] would comment and close #{num} ({item.get('id')})")
            continue
        if not _gh_available():
            actions.append(f"skip #{num}: gh CLI not available")
            continue
        comment = subprocess.run(
            ["gh", "issue", "comment", str(num), "--repo", repo, "--body", body],
            capture_output=True,
            text=True,
            timeout=30,
        )
        if comment.returncode != 0:
            actions.append(f"fail #{num} comment: {(comment.stderr or '')[:200]}")
            continue
        close = subprocess.run(
            [
                "gh",
                "issue",
                "close",
                str(num),
                "--repo",
                repo,
                "--comment",
                "Closed via ADK installer automated sign-off (maintainer may reopen if replay fails).",
            ],
            capture_output=True,
            text=True,
            timeout=30,
        )
        if close.returncode == 0:
            actions.append(f"closed #{num} ({item.get('id')})")
        else:
            actions.append(f"fail #{num} close: {(close.stderr or '')[:200]}")
    return actions


def print_report(report: dict[str, Any], open_awaiting: List[dict[str, Any]]) -> None:
    print("GitHub Issue install sign-off")
    print(f"  Project: {report.get('project_root')}")
    print(f"  Contract: {CONTRACT_PATH.name}")
    if open_awaiting:
        print(f"  Open issues with label (GH): {len(open_awaiting)}")
        for issue in open_awaiting[:10]:
            print(f"    #{issue.get('number')} {issue.get('title')}")
    print()
    for item in report.get("issues") or []:
        status = "READY" if item.get("ready") else ("SKIP" if item.get("skipped") else "NOT READY")
        num = item.get("number")
        label = f"#{num}" if num else "—"
        print(f"  [{status}] {item.get('id')} {label} — {item.get('title')}")
        if item.get("skip_reason"):
            print(f"           {item['skip_reason']}")
        for chk in item.get("checks") or []:
            mark = "✓" if chk.get("passed") else "✗"
            print(f"           {mark} {chk.get('type')}: {chk.get('detail')}")


def run_signoff(
    project_root: Path,
    *,
    close: bool,
    dry_run: bool,
    report_json: Optional[Path],
    list_open: bool,
) -> int:
    if not CONTRACT_PATH.is_file():
        print(f"ERROR: contract not found: {CONTRACT_PATH}", file=sys.stderr)
        return 1

    contract = _load_contract(CONTRACT_PATH)
    report = evaluate_all(project_root, CONTRACT_PATH)

    open_awaiting: List[dict[str, Any]] = []
    if list_open:
        open_awaiting = list_open_awaiting(
            str(contract.get("default_repo", "RMS-Ltd/ai-dev-kit")),
            str(contract.get("awaiting_label", "awaiting-adopter-signoff")),
        )

    print_report(report, open_awaiting)

    if report_json:
        report_json.parent.mkdir(parents=True, exist_ok=True)
        with open(report_json, "w", encoding="utf-8") as handle:
            json.dump(report, handle, indent=2)
            handle.write("\n")
        print(f"\nReport written: {report_json}")

    ready_without_number = [
        i for i in report.get("issues") or [] if i.get("ready") and not i.get("number")
    ]
    if ready_without_number:
        print("\n⚠️  Ready but no GitHub issue number in contract (cannot auto-close):")
        for i in ready_without_number:
            print(f"    {i.get('id')}")

    if close:
        actions = close_ready_issues(contract, report, dry_run=dry_run)
        for line in actions:
            print(line)

    # Orphan hint: open GH issues not in contract
    if open_awaiting:
        contracted = {int(e["number"]) for e in report.get("issues") or [] if e.get("number")}
        orphans = [i for i in open_awaiting if i.get("number") not in contracted]
        if orphans:
            print("\n⚠️  Open awaiting-adopter-signoff issues without contract entry (risk orphan):")
            for i in orphans:
                print(f"    #{i.get('number')} {i.get('title')}")

    return 0


def post_install_signoff(
    project_root: Path,
    *,
    install_dry_run: bool = False,
    close_github_issues: bool = False,
    close_dry_run: bool = False,
) -> int:
    """Called by RW/kanban installers after install. Report-only unless close_github_issues."""
    if install_dry_run:
        return 0
    if not CONTRACT_PATH.is_file():
        print("\n⚠️  GitHub issue sign-off contract missing; skipping.", file=sys.stderr)
        return 0
    print("\n" + "=" * 60)
    print("GitHub Issue install sign-off (contract-driven)")
    print("=" * 60)
    report_path = project_root / "logs" / "ai-dev-kit" / "install" / "signoff-report.json"
    return run_signoff(
        project_root.resolve(),
        close=close_github_issues,
        dry_run=close_dry_run,
        report_json=report_path,
        list_open=True,
    )


def main() -> int:
    parser = argparse.ArgumentParser(description="Evaluate GitHub issue install sign-off triggers.")
    parser.add_argument(
        "--project-root",
        type=Path,
        default=Path.cwd(),
        help="Adopter project root (contains rw-config.yaml)",
    )
    parser.add_argument(
        "--report-json",
        type=Path,
        default=None,
        help="Write machine-readable report (e.g. logs/ai-dev-kit/install/signoff-report.json)",
    )
    parser.add_argument(
        "--close-github-issues",
        action="store_true",
        help="Comment and close ready issues via gh (requires auth)",
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="With --close-github-issues, print actions only",
    )
    parser.add_argument(
        "--list-open-awaiting",
        action="store_true",
        help="Also list open issues with awaiting-adopter-signoff label",
    )
    args = parser.parse_args()

    if yaml is None:
        print("ERROR: PyYAML required", file=sys.stderr)
        return 1

    return run_signoff(
        args.project_root.resolve(),
        close=args.close_github_issues,
        dry_run=args.dry_run,
        report_json=args.report_json,
        list_open=args.list_open_awaiting or args.close_github_issues,
    )


if __name__ == "__main__":
    sys.exit(main())
