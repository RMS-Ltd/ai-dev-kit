#!/usr/bin/env python3
"""Pre-push no-red-ship gate — remote GitHub Actions status (E02:S16:T05 / BR-104).

Fails when required workflows on a branch HEAD have failure/cancelled/timed_out
conclusions. Use before RW --push or operator batch push.
"""

from __future__ import annotations

import argparse
import json
import subprocess
import sys
from pathlib import Path

try:
    import yaml
except ImportError:  # pragma: no cover
    yaml = None  # type: ignore

_REPO_ROOT = Path(__file__).resolve().parents[5]

_DEFAULT_WORKFLOW_NAMES = [
    "Tests",
    "Docusaurus site build",
    "Greenfield install",
    "Workflow scripts pytest",
]

_BAD_CONCLUSIONS = frozenset({"failure", "cancelled", "timed_out", "action_required"})


def _load_config(config_path: Path) -> dict:
    if not config_path.is_file() or yaml is None:
        return {}
    with config_path.open(encoding="utf-8") as fh:
        data = yaml.safe_load(fh) or {}
    return data if isinstance(data, dict) else {}


def _branch_head_sha(branch: str, repo_root: Path) -> str | None:
    result = subprocess.run(
        ["git", "rev-parse", branch],
        cwd=repo_root,
        capture_output=True,
        text=True,
        check=False,
    )
    if result.returncode != 0:
        return None
    return result.stdout.strip() or None


def _fetch_runs(
    *,
    branch: str,
    repo: str,
    limit: int = 30,
) -> list[dict]:
    proc = subprocess.run(
        [
            "gh",
            "run",
            "list",
            "--repo",
            repo,
            "--branch",
            branch,
            "--limit",
            str(limit),
            "--json",
            "name,conclusion,status,headSha,workflowName",
        ],
        capture_output=True,
        text=True,
        check=False,
    )
    if proc.returncode != 0:
        raise RuntimeError(proc.stderr.strip() or "gh run list failed")
    data = json.loads(proc.stdout or "[]")
    return data if isinstance(data, list) else []


def latest_conclusions_for_head(
    runs: list[dict],
    *,
    head_sha: str,
    workflow_names: list[str],
) -> dict[str, str | None]:
    """Return latest conclusion per workflow name for the given HEAD SHA."""
    wanted = set(workflow_names)
    found: dict[str, str | None] = {name: None for name in workflow_names}
    for run in runs:
        if run.get("headSha") != head_sha:
            continue
        name = str(run.get("name") or run.get("workflowName") or "")
        if name not in wanted or found[name] is not None:
            continue
        conclusion = run.get("conclusion")
        found[name] = str(conclusion) if conclusion else None
    return found


def evaluate_remote_status(
    conclusions: dict[str, str | None],
) -> tuple[list[str], list[str]]:
    """Return (failures, missing) lists of workflow display names."""
    failures: list[str] = []
    missing: list[str] = []
    for name, conclusion in conclusions.items():
        if conclusion is None:
            missing.append(name)
        elif conclusion in _BAD_CONCLUSIONS:
            failures.append(f"{name} ({conclusion})")
        elif conclusion == "success":
            continue
        elif conclusion in ("", "skipped"):
            continue
        else:
            failures.append(f"{name} ({conclusion})")
    return failures, missing


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(
        description="Remote GitHub Actions no-red-ship gate (pre-push)"
    )
    parser.add_argument("--branch", default="dev", help="Branch to inspect (default: dev)")
    parser.add_argument(
        "--repo",
        default=None,
        help="GITHUB_REPOSITORY owner/repo (default: gh repo view or env)",
    )
    parser.add_argument("--strict", action="store_true", help="Non-zero on red/missing")
    parser.add_argument(
        "--workflows",
        default=None,
        help="Comma-separated workflow display names (default: required set)",
    )
    parser.add_argument(
        "--config",
        type=Path,
        default=_REPO_ROOT / "rw-config.yaml",
        help="rw-config.yaml path",
    )
    parser.add_argument(
        "--head-sha",
        default=None,
        help="Override HEAD SHA (default: git rev-parse --branch)",
    )
    args = parser.parse_args(argv)

    cfg = _load_config(args.config).get("actions_ci_parity") or {}
    if cfg.get("remote_check") is False:
        print("SKIP: actions_ci_parity.remote_check is false")
        return 0

    workflow_names = (
        [w.strip() for w in args.workflows.split(",") if w.strip()]
        if args.workflows
        else list(cfg.get("remote_workflows") or _DEFAULT_WORKFLOW_NAMES)
    )

    repo = args.repo
    if not repo:
        proc = subprocess.run(
            ["gh", "repo", "view", "--json", "nameWithOwner", "-q", ".nameWithOwner"],
            cwd=_REPO_ROOT,
            capture_output=True,
            text=True,
            check=False,
        )
        repo = proc.stdout.strip() if proc.returncode == 0 else None
    if not repo:
        print("ERROR: could not resolve GitHub repository (--repo or gh auth)", file=sys.stderr)
        return 1 if args.strict else 0

    head_sha = args.head_sha or _branch_head_sha(args.branch, _REPO_ROOT)
    if not head_sha:
        print(f"ERROR: could not resolve HEAD for branch {args.branch!r}", file=sys.stderr)
        return 1 if args.strict else 0

    print(f"Remote Actions check: repo={repo} branch={args.branch} head={head_sha[:12]}")

    try:
        runs = _fetch_runs(branch=args.branch, repo=repo)
    except RuntimeError as exc:
        print(f"ERROR: {exc}", file=sys.stderr)
        return 1 if args.strict else 0

    conclusions = latest_conclusions_for_head(
        runs, head_sha=head_sha, workflow_names=workflow_names
    )
    failures, missing = evaluate_remote_status(conclusions)

    for name, conclusion in conclusions.items():
        label = conclusion if conclusion else "no run on HEAD"
        print(f"  {name}: {label}")

    if failures:
        print(f"FAIL: red workflows on HEAD: {', '.join(failures)}", file=sys.stderr)
        return 1 if args.strict else 0
    if missing and args.strict:
        print(
            f"ADVISORY: no run yet on HEAD for: {', '.join(missing)} "
            "(push may trigger first CI)",
            file=sys.stderr,
        )
        return 0

    print("OK: remote Actions no-red-ship check passed")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
