#!/usr/bin/env python3
"""
RW Step 7 Post-Commit Verification Validator (BR-070 AC4, FR-092 Wave 8).

Purpose
-------
Belt-and-suspenders check that the release commit actually contains every
Step-7 output declared in the four-surface report. This validator runs
*after* `git commit` (RW Step 11) and before `git tag` (RW Step 12).

It catches the race-condition / partial-stage scenario that the pre-commit
gate (`validate_rw_step7_completeness.py`) might miss if the index is
manipulated between staging and commit, or if a commit-amend scenario leaves
Step-7 outputs behind.

Core contract
-------------
For every surface with `touched=True` in the four-surface report:
    - The path MUST exist in the commit tree.
    - The path MUST NOT have uncommitted working-tree modifications relative
to the commit (i.e. the commit must contain the Step-7 changes, not just HEAD).

Exit codes
----------
    0 — All Step-7 touched paths are accounted for in the commit.
    1 — One or more touched paths missing from commit tree or dirty in
        working tree. RW MUST NOT tag or push.
    2 — Invalid invocation (missing report, no project root, etc.).

Cross-references
----------------
- BR-070 (RW-k Stage Files completeness gap)
- validate_rw_step7_completeness.py (pre-commit gate, FR-092 Wave 5)
- FR-092 (canonical RW/UKW kanban consistency program, meta)
"""

from __future__ import annotations

import argparse
import importlib.util
import json
import subprocess
import sys
from dataclasses import dataclass, field
from datetime import datetime
from pathlib import Path
from typing import Dict, List, Optional, Set, Tuple


# ---------------------------------------------------------------------------
# Import shared helpers from the pre-commit validator (FR-092 Wave 5)
# ---------------------------------------------------------------------------

_THIS_DIR = Path(__file__).resolve().parent
_PRE_COMMIT_PATH = _THIS_DIR / "validate_rw_step7_completeness.py"


_spec = importlib.util.spec_from_file_location(
    "_pre_commit", _PRE_COMMIT_PATH
)
_pre_commit = importlib.util.module_from_spec(_spec)
sys.modules["_pre_commit"] = _pre_commit
_spec.loader.exec_module(_pre_commit)

discover_project_root = _pre_commit.discover_project_root
find_latest_four_surface_report = _pre_commit.find_latest_four_surface_report
extract_touched_paths_from_report = _pre_commit.extract_touched_paths_from_report
_surface_for_explicit_path = _pre_commit._surface_for_explicit_path
DEFAULT_REPORT_DIR_REL = _pre_commit.DEFAULT_REPORT_DIR_REL


# ---------------------------------------------------------------------------
# Data model
# ---------------------------------------------------------------------------

@dataclass
class PostCommitVerdict:
    """Per-path post-commit verdict."""

    path: str
    surface: str
    git_status: str  # "committed" | "idempotent_no_op" | "missing_from_tree" | "working_tree_dirty" | "in_tree"
    is_violation: bool
    detail: str = ""

    def as_dict(self) -> Dict[str, object]:
        return {
            "path": self.path,
            "surface": self.surface,
            "git_status": self.git_status,
            "is_violation": self.is_violation,
            "detail": self.detail,
        }


@dataclass
class PostCommitReport:
    """Aggregate post-commit verification report (BR-070 AC4 / FR-092 Wave 8)."""

    contract: str = (
        "BR-070 AC4 / FR-092 Wave 8 (RW Step 7 post-commit verification invariant)"
    )
    timestamp_utc: str = ""
    project_root: str = ""
    commit_ref: str = ""
    four_surface_report_path: Optional[str] = None
    invocation_context: str = "rw_step_7_post_commit_verification"
    release_scope: Dict[str, object] = field(default_factory=dict)
    verdicts: List[PostCommitVerdict] = field(default_factory=list)

    def as_dict(self) -> Dict[str, object]:
        violations = [v for v in self.verdicts if v.is_violation]
        return {
            "contract": self.contract,
            "timestamp_utc": self.timestamp_utc,
            "project_root": self.project_root,
            "commit_ref": self.commit_ref,
            "four_surface_report_path": self.four_surface_report_path,
            "invocation_context": self.invocation_context,
            "release_scope": self.release_scope,
            "summary": {
                "total_touched_paths": len(self.verdicts),
                "committed": sum(1 for v in self.verdicts if v.git_status == "committed"),
                "idempotent_no_op": sum(
                    1 for v in self.verdicts if v.git_status == "idempotent_no_op"
                ),
                "missing_from_tree": sum(
                    1 for v in self.verdicts if v.git_status == "missing_from_tree"
                ),
                "working_tree_dirty": sum(
                    1 for v in self.verdicts if v.git_status == "working_tree_dirty"
                ),
                "violations": len(violations),
                "verdict": "BLOCK" if violations else "PASS",
            },
            "verdicts": [v.as_dict() for v in self.verdicts],
        }

    def to_markdown(self) -> str:
        d = self.as_dict()
        lines: List[str] = []
        lines.append("# RW Step 7 post-commit verification report (BR-070 AC4)")
        lines.append("")
        lines.append(f"- **Contract:** {d['contract']}")
        lines.append(f"- **Invocation:** {d['invocation_context']}")
        lines.append(f"- **Timestamp (UTC):** {d['timestamp_utc']}")
        lines.append(f"- **Project root:** `{d['project_root']}`")
        lines.append(f"- **Commit ref:** `{d['commit_ref']}`")
        if d["four_surface_report_path"]:
            lines.append(
                f"- **Four-surface report:** `{d['four_surface_report_path']}`"
            )
        scope = d["release_scope"] or {}
        if scope:
            lines.append(
                "- **Release scope:** "
                f"{scope.get('task_id', '?')} ({scope.get('version_string', '?')})"
            )
        lines.append("")
        summary = d["summary"]
        verdict_marker = "PASS" if summary["verdict"] == "PASS" else "BLOCK"
        lines.append(f"## Summary — {verdict_marker}")
        lines.append("")
        lines.append(
            f"- Total touched paths examined: **{summary['total_touched_paths']}**"
        )
        lines.append(f"- Committed in this release: **{summary['committed']}**")
        lines.append(f"- Idempotent (unchanged): **{summary['idempotent_no_op']}**")
        lines.append(
            f"- Missing from commit tree: **{summary['missing_from_tree']}**"
        )
        lines.append(
            f"- Working-tree dirty (uncommitted): **{summary['working_tree_dirty']}**"
        )
        lines.append(f"- Violations: **{summary['violations']}**")
        lines.append("")
        if d["verdicts"]:
            lines.append("## Per-path verdicts")
            lines.append("")
            lines.append("| Path | Surface | Git status | Violation | Detail |")
            lines.append("| ---- | ---- | ---- | ---- | ---- |")
            for v in d["verdicts"]:
                violation_cell = "YES" if v["is_violation"] else "no"
                detail = v["detail"].replace("|", "\\|")
                lines.append(
                    f"| `{v['path']}` | `{v['surface']}` | `{v['git_status']}` | "
                    f"{violation_cell} | {detail} |"
                )
            lines.append("")
        if summary["violations"]:
            lines.append("## Recovery (BR-070 AC4)")
            lines.append("")
            lines.append(
                "RW MUST NOT tag or push. To recover:"
            )
            lines.append("")
            lines.append(
                "1. Inspect the violation rows above. Identify why each path is "
                "missing or dirty."
            )
            lines.append(
                "2. If the path was accidentally omitted from staging, amend the "
                "commit: `git commit --amend --no-edit` after staging the missing "
                "files."
            )
            lines.append(
                "3. If the working tree is dirty with additional changes, decide: "
                "stage and amend, or stash and retry."
            )
            lines.append(
                "4. Re-run this validator. Exit code 0 is required before "
                "advancing to RW Step 12 (Create Git Tag)."
            )
            lines.append("")
        return "\n".join(lines).rstrip() + "\n"


# ---------------------------------------------------------------------------
# Git helpers
# ---------------------------------------------------------------------------


def _git(cmd: list, cwd: Path) -> str:
    result = subprocess.run(
        ["git", *cmd],
        cwd=str(cwd),
        check=True,
        capture_output=True,
        text=True,
    )
    return result.stdout


def collect_commit_tree_paths(project_root: Path, commit_ref: str = "HEAD") -> Set[str]:
    """Return every repo-relative path present in the commit tree."""
    try:
        out = _git(["ls-tree", "-r", "--name-only", commit_ref], project_root)
    except subprocess.CalledProcessError as exc:
        raise RuntimeError(f"git ls-tree failed for {commit_ref}: {exc}") from exc
    return {line.strip() for line in out.splitlines() if line.strip()}


def collect_commit_diff_paths(project_root: Path, commit_ref: str = "HEAD") -> Set[str]:
    """Return repo-relative paths that were *changed* in the commit (diff vs parent)."""
    try:
        out = _git(["show", "--name-only", "--pretty=format:", commit_ref], project_root)
    except subprocess.CalledProcessError as exc:
        raise RuntimeError(f"git show failed for {commit_ref}: {exc}") from exc
    return {line.strip() for line in out.splitlines() if line.strip()}


def collect_working_tree_diff(project_root: Path, commit_ref: str = "HEAD") -> Set[str]:
    """Return repo-relative paths with uncommitted working-tree modifications.

    When commit_ref is not HEAD, we subtract paths that were changed in commits
    between commit_ref and HEAD so that only truly uncommitted changes are
    reported.
    """
    try:
        all_changes = _git(["diff", "--name-only", commit_ref], project_root)
    except subprocess.CalledProcessError as exc:
        raise RuntimeError(f"git diff failed for {commit_ref}: {exc}") from exc

    all_set = {line.strip() for line in all_changes.splitlines() if line.strip()}

    if commit_ref == "HEAD":
        return all_set

    # Subtract paths that were committed between commit_ref and HEAD
    try:
        committed_after = _git(["diff", "--name-only", commit_ref, "HEAD"], project_root)
    except subprocess.CalledProcessError as exc:
        raise RuntimeError(f"git diff {commit_ref}..HEAD failed: {exc}") from exc

    committed_set = {line.strip() for line in committed_after.splitlines() if line.strip()}
    return all_set - committed_set


# ---------------------------------------------------------------------------
# Core logic
# ---------------------------------------------------------------------------


def evaluate_post_commit_paths(
    project_root: Path,
    path_to_surface: Dict[str, str],
    commit_ref: str = "HEAD",
) -> List[PostCommitVerdict]:
    """
    For every path declared as "touched" by Step 7, verify it is present in
    the commit tree and not dirty in the working tree.
    """
    tree_paths = collect_commit_tree_paths(project_root, commit_ref)
    diff_paths = collect_commit_diff_paths(project_root, commit_ref)
    working_dirty = collect_working_tree_diff(project_root, commit_ref)

    verdicts: List[PostCommitVerdict] = []
    for raw_path, surface in path_to_surface.items():
        path_obj = Path(raw_path)
        if not path_obj.is_absolute():
            path_obj = (project_root / path_obj).resolve()
        else:
            path_obj = path_obj.resolve()

        # Compute repo-relative path for git comparisons
        try:
            rel_path = str(path_obj.relative_to(project_root))
        except ValueError:
            # Path outside project root — treat as absolute in git terms
            rel_path = str(path_obj)

        path_str = str(path_obj)

        if rel_path in working_dirty:
            verdicts.append(
                PostCommitVerdict(
                    path=path_str,
                    surface=surface,
                    git_status="working_tree_dirty",
                    is_violation=True,
                    detail=(
                        "Step-7 touched this file, it was committed, but the "
                        "working tree has additional uncommitted modifications. "
                        "These changes are NOT in the release commit. "
                        "Stage and amend, or stash and retry."
                    ),
                )
            )
        elif rel_path in diff_paths:
            verdicts.append(
                PostCommitVerdict(
                    path=path_str,
                    surface=surface,
                    git_status="committed",
                    is_violation=False,
                    detail="Step-7 touched file is present in the commit diff.",
                )
            )
        elif rel_path in tree_paths:
            verdicts.append(
                PostCommitVerdict(
                    path=path_str,
                    surface=surface,
                    git_status="idempotent_no_op",
                    is_violation=False,
                    detail=(
                        "Step-7 touched file is in the commit tree but was not "
                        "modified by this commit (idempotent touch)."
                    ),
                )
            )
        else:
            verdicts.append(
                PostCommitVerdict(
                    path=path_str,
                    surface=surface,
                    git_status="missing_from_tree",
                    is_violation=True,
                    detail=(
                        "Step-7 touched file is NOT in the commit tree. "
                        "It was either never staged, or the commit omitted it. "
                        "BR-070 AC4 violation — amend the commit and re-run."
                    ),
                )
            )
    return verdicts


def build_post_commit_report(
    project_root: Path,
    verdicts: List[PostCommitVerdict],
    commit_ref: str,
    *,
    four_surface_report_path: Optional[Path],
    release_scope: Dict[str, object],
) -> PostCommitReport:
    return PostCommitReport(
        timestamp_utc=datetime.utcnow().strftime("%Y-%m-%d %H:%M UTC"),
        project_root=str(project_root),
        commit_ref=commit_ref,
        four_surface_report_path=(
            str(four_surface_report_path) if four_surface_report_path else None
        ),
        invocation_context="rw_step_7_post_commit_verification",
        release_scope=release_scope,
        verdicts=verdicts,
    )


def write_post_commit_report(
    report: PostCommitReport,
    output_dir: Path,
) -> List[Path]:
    """Persist the post-commit report next to the four-surface reports."""
    output_dir.mkdir(parents=True, exist_ok=True)
    scope = report.release_scope or {}
    version_string = str(scope.get("version_string", "")) or report.timestamp_utc
    epic = scope.get("epic")
    story = scope.get("story")
    task = scope.get("task")
    if epic is not None and story is not None and task is not None:
        scope_token = f"e{epic}s{story}t{task}"
    else:
        scope_token = "adhoc"
    sanitized_version = (
        str(version_string)
        .replace("+", "plus")
        .replace(".", "-")
        .replace(" ", "_")
        .replace(":", "-")
    )
    base = f"rw-step7-post-commit-verification-{sanitized_version}-{scope_token}"
    json_path = output_dir / f"{base}.json"
    md_path = output_dir / f"{base}.md"
    json_path.write_text(json.dumps(report.as_dict(), indent=2, sort_keys=True) + "\n")
    md_path.write_text(report.to_markdown())
    return [json_path, md_path]


# ---------------------------------------------------------------------------
# CLI
# ---------------------------------------------------------------------------


def parse_args(argv: Optional[List[str]] = None) -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description=(
            "Validate RW Step 7 post-commit completeness (BR-070 AC4, FR-092 Wave 8)."
        )
    )
    src = parser.add_mutually_exclusive_group()
    src.add_argument(
        "--four-surface-report",
        type=Path,
        default=None,
        help="Path to the FR-092 Wave 3 four-surface report JSON.",
    )
    src.add_argument(
        "--touched-files",
        type=Path,
        nargs="+",
        default=None,
        help="Explicit list of Step-7 touched files.",
    )
    parser.add_argument(
        "--auto",
        action="store_true",
        help="Auto-discover the most recent four-surface report.",
    )
    parser.add_argument(
        "--commit-ref",
        type=str,
        default="HEAD",
        help="Git commit reference to verify against (default: HEAD).",
    )
    parser.add_argument(
        "--project-root",
        type=Path,
        default=None,
        help="Project root (default: discovered from git).",
    )
    parser.add_argument(
        "--report-dir",
        type=Path,
        default=None,
        help="Directory to write the report into.",
    )
    parser.add_argument(
        "--no-emit-report",
        action="store_true",
        help="Skip writing the report (useful in unit tests).",
    )
    parser.add_argument(
        "--quiet",
        "-q",
        action="store_true",
        help="Suppress non-summary stdout output.",
    )
    return parser.parse_args(argv)


def main(argv: Optional[List[str]] = None) -> int:
    args = parse_args(argv)
    project_root = (args.project_root or discover_project_root()).resolve()

    four_surface_report_path: Optional[Path] = None
    release_scope: Dict[str, object] = {}
    path_to_surface: Dict[str, str] = {}

    if args.four_surface_report:
        four_surface_report_path = args.four_surface_report.resolve()
        if not four_surface_report_path.exists():
            print(
                f"ERROR: four-surface report not found: {four_surface_report_path}",
                file=sys.stderr,
            )
            return 2
        path_to_surface, release_scope = extract_touched_paths_from_report(
            four_surface_report_path
        )
    elif args.touched_files:
        for p in args.touched_files:
            abs_p = p if p.is_absolute() else (project_root / p).resolve()
            path_to_surface[str(abs_p)] = _surface_for_explicit_path(abs_p)
    elif args.auto:
        latest = find_latest_four_surface_report(project_root)
        if latest is None:
            print(
                "ERROR: --auto specified but no four-surface report found under "
                f"{project_root / DEFAULT_REPORT_DIR_REL}",
                file=sys.stderr,
            )
            return 2
        four_surface_report_path = latest
        path_to_surface, release_scope = extract_touched_paths_from_report(latest)
    else:
        print(
            "ERROR: must supply one of --four-surface-report, --touched-files, "
            "or --auto.",
            file=sys.stderr,
        )
        return 2

    if not path_to_surface:
        if not args.quiet:
            print(
                "INFO: no touched paths declared by Step 7; post-commit "
                "verification vacuously satisfied."
            )
        return 0

    verdicts = evaluate_post_commit_paths(
        project_root, path_to_surface, commit_ref=args.commit_ref
    )
    report = build_post_commit_report(
        project_root,
        verdicts,
        commit_ref=args.commit_ref,
        four_surface_report_path=four_surface_report_path,
        release_scope=release_scope,
    )

    if not args.no_emit_report:
        report_dir = (
            args.report_dir or (project_root / DEFAULT_REPORT_DIR_REL)
        ).resolve()
        written = write_post_commit_report(report, report_dir)
        if not args.quiet:
            for p in written:
                print(f"wrote post-commit report: {p}")

    summary = report.as_dict()["summary"]
    if not args.quiet:
        print("RW Step 7 post-commit verification:")
        print(f"  contract:              {report.contract}")
        print(f"  commit ref:            {report.commit_ref}")
        print(f"  paths examined:        {summary['total_touched_paths']}")
        print(f"  committed:             {summary['committed']}")
        print(f"  idempotent:            {summary['idempotent_no_op']}")
        print(f"  missing_from_tree:     {summary['missing_from_tree']}")
        print(f"  working_tree_dirty:    {summary['working_tree_dirty']}")
        print(f"  violations:            {summary['violations']}")
        print(f"  verdict:               {summary['verdict']}")

    if summary["violations"]:
        if not args.quiet:
            print("", file=sys.stderr)
            print(
                "BR-070 AC4 VIOLATION: RW Step 7 outputs are not fully "
                "represented in the release commit. RW MUST NOT tag or push.",
                file=sys.stderr,
            )
            for v in verdicts:
                if v.is_violation:
                    print(
                        f"  - {v.surface}: {v.path} ({v.git_status}) — {v.detail}",
                        file=sys.stderr,
                    )
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
