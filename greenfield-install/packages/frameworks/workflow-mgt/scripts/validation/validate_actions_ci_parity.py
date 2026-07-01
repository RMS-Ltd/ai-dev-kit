#!/usr/bin/env python3
"""RW Step 9.7 — GitHub Actions CI parity gate (E08:S03:T15 / FR-112).

Runs local checks that mirror required GitHub Actions workflows so RW commits
(and optional push) have high confidence CI will pass on dev/main.
"""

from __future__ import annotations

import argparse
import fnmatch
import os
import subprocess
import sys
from dataclasses import dataclass
from pathlib import Path

try:
    import yaml
except ImportError:  # pragma: no cover
    yaml = None  # type: ignore

_SCRIPTS_DIR = Path(__file__).resolve().parent.parent
if str(_SCRIPTS_DIR) not in sys.path:
    sys.path.insert(0, str(_SCRIPTS_DIR))

from rw_config_loader import find_project_root  # noqa: E402

_REPO_ROOT = find_project_root(Path(__file__).resolve())

_DEFAULT_CHECKS: list[dict] = [
    {
        "id": "tests",
        "paths": [
            "tests/**",
            "src/**",
            "cli/**",
            "scripts/**",
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
        "id": "cli-coverage",
        "paths": [
            "cli/**",
            "tests/cli/**",
            "pytest-cli-cov.ini",
            "scripts/run_cli_pytest_coverage.sh",
        ],
        "command": [
            "bash",
            "scripts/run_cli_pytest_coverage.sh",
        ],
        "cwd": None,
    },
    {
        "id": "portal-publish-scope",
        "paths": [
            "docs/guides/**",
            "docs/documentation/**",
            "docs/developer-tools/ide-whitelist-guide.md",
        ],
        "command": [
            sys.executable,
            "-m",
            "pytest",
            "tests/test_portal_br068_monorepo_links.py",
            "tests/test_portal_fr114_allowlist.py",
            "-q",
            "--tb=line",
        ],
        "cwd": None,
    },
    {
        "id": "docusaurus",
        "paths": [
            "portal/**",
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


# Map production paths → fast pytest scope (avoid full-suite on framework-only edits).
_SCOPED_TEST_PREFIXES: tuple[tuple[str, str], ...] = (
    ("packages/frameworks/workflow-mgt/scripts/release_state/", "tests/release_state/"),
    ("packages/frameworks/workflow-mgt/scripts/release_metadata/", "tests/release_metadata/"),
    ("packages/frameworks/workflow-mgt/scripts/kanban/", "tests/workflow_mgt/"),
)


def _scoped_workflow_pytest_targets(changed: set[str]) -> list[str] | None:
    """Fast path: only new/changed validation unit tests under workflow-mgt."""
    tests = sorted(
        p
        for p in changed
        if p.startswith("packages/frameworks/workflow-mgt/scripts/validation/test_")
        and p.endswith(".py")
    )
    return tests or None


def _scoped_pytest_targets(changed: set[str]) -> list[str] | None:
    """Derive minimal pytest paths from diff.

    Returns None when the diff does not warrant any pytest (e.g. version-only bump).
    --all / pre-push still runs the full tests/ suite.
    """
    test_files = sorted(
        p.replace("\\", "/")
        for p in changed
        if p.replace("\\", "/").startswith("tests/") and p.endswith(".py")
    )
    if test_files:
        return test_files

    targets: set[str] = set()
    broad = False
    for path in changed:
        normalized = path.replace("\\", "/")
        if normalized.endswith("/version.py"):
            continue
        if normalized.startswith(("src/", "cli/", "scripts/")):
            broad = True
            continue
        for prefix, test_dir in _SCOPED_TEST_PREFIXES:
            if normalized.startswith(prefix):
                targets.add(test_dir)
    if broad:
        return ["tests/"]
    if targets:
        return sorted(targets)
    return None


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


def _run_check(check: Check, *, changed: set[str] | None = None) -> int:
    print(f"=== actions_ci_parity: {check.id} ===", flush=True)
    command = list(check.command)
    if check.id == "tests" and changed is not None:
        scoped = _scoped_pytest_targets(changed)
        if scoped is None:
            print("SKIP: tests (no pytest scope for this diff)", flush=True)
            return 0
        command.extend(scoped)
        if any("tests/release_state/" in p for p in scoped):
            command.append(
                "--ignore=tests/release_state/test_sqlite_mode_rw_ac.py"
            )
        print(f"  pytest scope: {' '.join(scoped)}", flush=True)
    elif check.id == "workflow-scripts-pytest" and changed is not None:
        scoped = _scoped_workflow_pytest_targets(changed)
        if scoped is not None:
            command = [
                sys.executable,
                "-m",
                "pytest",
                "-p",
                "pytest",
                "-p",
                "no:pytest_django",
                "-c",
                "packages/frameworks/workflow-mgt/scripts/validation/pytest.ini",
                *scoped,
            ]
            print(f"  workflow-scripts scope: {' '.join(scoped)}", flush=True)
    env = os.environ.copy()
    env["ACTIONS_CI_PARITY_RUNNING"] = "1"
    if check.id == "workflow-scripts-pytest":
        env["PYTEST_DISABLE_PLUGIN_AUTOLOAD"] = "1"
    proc = subprocess.run(
        command,
        cwd=check.cwd or _REPO_ROOT,
        env=env,
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
    parser.add_argument(
        "--allow-path-skip",
        action="store_true",
        help="Allow exit 0 when no checks match (RW -d docs-only only)",
    )
    args = parser.parse_args(argv)

    cfg = _load_config(args.config).get("actions_ci_parity") or {}
    if cfg.get("enabled") is False:
        print("SKIP: actions_ci_parity.enabled is false")
        return 0

    checks = _parse_checks(cfg.get("checks"))
    changed = _changed_paths(staged_only=args.staged_only)
    if args.all:
        selected = checks
    else:
        selected = _select_checks(checks, changed, False)

    if not selected:
        if args.strict and not args.allow_path_skip:
            print(
                "FAIL: --strict requires Actions CI parity checks but none matched "
                "(use --all for push gate or --allow-path-skip for RW -d docs-only)",
                file=sys.stderr,
            )
            return 1
        print("SKIP: no parity checks matched changed paths (use --all for push gate)")
        return 0

    failures = 0
    for check in selected:
        failures += _run_check(check, changed=changed if not args.all else None) != 0

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
