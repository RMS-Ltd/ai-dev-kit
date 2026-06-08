#!/usr/bin/env python3
"""RW Step 9.7 — GitHub Actions CI parity gate (E08:S03:T15 / FR-112).

Runs local checks that mirror required GitHub Actions workflows so RW commits
(and optional push) have high confidence CI will pass on dev/main.
"""

from __future__ import annotations

import argparse
import fnmatch
import subprocess
import sys
from dataclasses import dataclass
from pathlib import Path

try:
    import yaml
except ImportError:  # pragma: no cover
    yaml = None  # type: ignore

_REPO_ROOT = Path(__file__).resolve().parents[5]

_DEFAULT_CHECKS: list[dict] = [
    {
        "id": "tests",
        "paths": [
            "tests/**",
            "src/**",
            "packages/**",
            "pyproject.toml",
            "setup.py",
            "setup.cfg",
        ],
        "command": [
            "bash",
            "packages/frameworks/workflow-mgt/scripts/validation/run_tests_ci_parity.sh",
        ],
        "cwd": None,
    },
    {
        "id": "docusaurus",
        "paths": [
            "portal/**",
            "docs/guides/**",
            "docs/documentation/**",
            "docs/developer-tools/ide-whitelist-guide.md",
        ],
        "command": ["npm", "run", "build"],
        "cwd": "portal",
    },
    {
        "id": "greenfield-install",
        "paths": [
            "greenfield-install/**",
            "packages/frameworks/**",
            "scripts/sync_greenfield_install.py",
            "scripts/greenfield-install-manifest.yaml",
            "scripts/test_sync_greenfield_install.py",
            "scripts/test_greenfield_container.py",
        ],
        "command": [sys.executable, "scripts/sync_greenfield_install.py", "--check"],
        "cwd": None,
    },
    {
        "id": "workflow-scripts-pytest",
        "paths": ["packages/frameworks/workflow-mgt/**"],
        "command": [
            "bash",
            "packages/frameworks/workflow-mgt/scripts/validation/run_workflow_scripts_ci_pytest.sh",
        ],
        "cwd": None,
    },
]


@dataclass
class Check:
    id: str
    paths: list[str]
    command: list[str]
    cwd: Path | None


def _load_config(config_path: Path) -> dict:
    if not config_path.is_file() or yaml is None:
        return {}
    with config_path.open(encoding="utf-8") as fh:
        data = yaml.safe_load(fh) or {}
    return data if isinstance(data, dict) else {}


def _parse_checks(raw: list[dict] | None) -> list[Check]:
    source = raw if raw else _DEFAULT_CHECKS
    checks: list[Check] = []
    for item in source:
        cwd_raw = item.get("cwd")
        cwd = (_REPO_ROOT / cwd_raw) if cwd_raw else None
        checks.append(
            Check(
                id=str(item["id"]),
                paths=[str(p) for p in item.get("paths", [])],
                command=[str(c) for c in item["command"]],
                cwd=cwd,
            )
        )
    return checks


def _changed_paths(*, staged_only: bool) -> set[str]:
    diff_arg = ["--cached"] if staged_only else []
    result = subprocess.run(
        ["git", "diff", "--name-only", *diff_arg, "HEAD"],
        cwd=_REPO_ROOT,
        capture_output=True,
        text=True,
        check=False,
    )
    if result.returncode != 0:
        return set()
    return {line.strip() for line in result.stdout.splitlines() if line.strip()}


def _path_touches_check(path: str, patterns: list[str]) -> bool:
    normalized = path.replace("\\", "/")
    return any(fnmatch.fnmatch(normalized, pattern) for pattern in patterns)


def _select_checks(checks: list[Check], changed: set[str], run_all: bool) -> list[Check]:
    if run_all:
        return checks
    if not changed:
        return []
    selected: list[Check] = []
    for check in checks:
        if any(_path_touches_check(p, check.paths) for p in changed):
            selected.append(check)
    return selected


def _run_check(check: Check) -> int:
    print(f"=== actions_ci_parity: {check.id} ===", flush=True)
    proc = subprocess.run(
        check.command,
        cwd=check.cwd or _REPO_ROOT,
        check=False,
    )
    if proc.returncode == 0:
        print(f"PASS: {check.id}", flush=True)
    else:
        print(f"FAIL: {check.id} (exit {proc.returncode})", file=sys.stderr, flush=True)
    return proc.returncode


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(
        description="RW Step 9.7 — GitHub Actions CI parity gate (blocking with --strict)"
    )
    parser.add_argument("--strict", action="store_true", help="Fail on check failure")
    parser.add_argument(
        "--all",
        action="store_true",
        help="Run all parity checks (required before --push or operator batch push)",
    )
    parser.add_argument(
        "--staged-only",
        action="store_true",
        help="Use staged diff only (default: staged + unstaged vs HEAD)",
    )
    parser.add_argument(
        "--config",
        type=Path,
        default=_REPO_ROOT / "rw-config.yaml",
        help="rw-config.yaml path",
    )
    args = parser.parse_args(argv)

    cfg = _load_config(args.config).get("actions_ci_parity") or {}
    if cfg.get("enabled") is False:
        print("SKIP: actions_ci_parity.enabled is false")
        return 0

    checks = _parse_checks(cfg.get("checks"))
    changed = _changed_paths(staged_only=args.staged_only)
    selected = _select_checks(checks, changed, args.all)

    if not selected:
        print("SKIP: no parity checks matched changed paths (use --all for push gate)")
        return 0

    failures = 0
    for check in selected:
        failures += _run_check(check) != 0

    if failures:
        if args.strict or args.all:
            print(
                f"FAIL: {failures} Actions CI parity check(s) failed",
                file=sys.stderr,
            )
            return 1
        print(f"ADVISORY: {failures} check(s) failed (use --strict to block RW)")
        return 0

    print(f"OK: {len(selected)} Actions CI parity check(s) passed")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
