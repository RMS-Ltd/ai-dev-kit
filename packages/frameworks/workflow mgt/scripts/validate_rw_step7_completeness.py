#!/usr/bin/env python3
"""
RW Step 7 Stage-Set Completeness Validator (BR-070, FR-092 Wave 5).

Purpose
-------
RW Step 7 mutates a known set of "touched surfaces" (task doc + FR/BR/UXR
doc(s) + kboard.md + fbuboard.md, plus auxiliary Story/Epic docs). Step 8
("Stage Files") is contractually required to stage every Step-7 output before
commit. BR-070 captured a real-world failure where a partial manual staging
path bypassed this invariant: Step 7 modified `kboard.md` and `Epic-2.md` but
Step 8 staged only a subset, producing a release commit that omitted Step-7
outputs.

This validator enforces the BR-070 invariant at the Step 8 / Step 11 boundary:

    For every path declared as "touched" in the most recent RW Step 7
    four-surface report (or supplied via --touched-files), git must consider
    that path either (a) staged for commit, or (b) unchanged on disk.

Any path that is modified-but-unstaged or untracked is treated as a stage-set
completeness violation and the validator exits non-zero (RW MUST BLOCK).

The validator also emits a "touched surfaces + why" report into
`docs/changelog-and-release-notes/changelog-archive/four-surface-reports/`
covering staging coverage, missing files, and per-surface verdicts. This
report is the BR-070 audit artefact and complements the FR-092 Wave 3
four-surface reconciliation report produced by `update_kanban_docs.py`.

Usage
-----
    # Auto-discover the most recent four-surface report and validate
    python validate_rw_step7_completeness.py --auto

    # Validate against a specific report
    python validate_rw_step7_completeness.py \
        --four-surface-report docs/.../rw-step7-four-surface-report-...json

    # Validate an explicit set of paths (CI / unit-test mode)
    python validate_rw_step7_completeness.py \
        --touched-files path/to/kboard.md path/to/fbuboard.md

Exit codes
----------
    0 — All Step-7 touched files are properly staged or unchanged.
    1 — Stage-set completeness violation (BR-070); RW MUST BLOCK.
    2 — Invalid invocation (missing report, no project root, etc.).

Cross-references
----------------
- FR-092 (canonical RW/UKW kanban consistency program, meta)
- BR-070 (RW-k Stage Files completeness gap)
- FR-091 (RW Step 7 self-sufficient scoped kanban reconciliation)
- FR-084 (IPP post-run governance reconciliation ownership)
"""

from __future__ import annotations

import argparse
import json
import re
import subprocess
import sys
from dataclasses import dataclass, field
from datetime import datetime
from pathlib import Path
from typing import Dict, Iterable, List, Optional, Set, Tuple


DEFAULT_REPORT_DIR_REL = (
    "docs/changelog-and-release-notes/changelog-archive/four-surface-reports"
)


@dataclass
class StagingVerdict:
    """Per-path staging verdict."""

    path: str
    surface: str
    git_status: str  # "unchanged" | "staged" | "modified-unstaged" | "untracked" | "missing"
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
class CompletenessReport:
    """
    Aggregate stage-set completeness report (BR-070 / FR-092 Wave 5).

    Persisted alongside the four-surface reconciliation report so that the
    "touched surfaces + why" audit trail covers both the reconciliation
    outcome (which surfaces RW Step 7 touched and why) and the staging
    enforcement outcome (which surfaces RW Step 8 actually staged).
    """

    contract: str = (
        "BR-070 / FR-092 Wave 5 (RW Step 7 stage-set completeness invariant)"
    )
    timestamp_utc: str = ""
    project_root: str = ""
    four_surface_report_path: Optional[str] = None
    invocation_context: str = "rw_step_7_stage_completeness"
    release_scope: Dict[str, object] = field(default_factory=dict)
    verdicts: List[StagingVerdict] = field(default_factory=list)

    def as_dict(self) -> Dict[str, object]:
        violations = [v for v in self.verdicts if v.is_violation]
        return {
            "contract": self.contract,
            "timestamp_utc": self.timestamp_utc,
            "project_root": self.project_root,
            "four_surface_report_path": self.four_surface_report_path,
            "invocation_context": self.invocation_context,
            "release_scope": self.release_scope,
            "summary": {
                "total_touched_paths": len(self.verdicts),
                "staged": sum(1 for v in self.verdicts if v.git_status == "staged"),
                "unchanged": sum(1 for v in self.verdicts if v.git_status == "unchanged"),
                "violations": len(violations),
                "verdict": "BLOCK" if violations else "PASS",
            },
            "verdicts": [v.as_dict() for v in self.verdicts],
        }

    def to_markdown(self) -> str:
        d = self.as_dict()
        lines: List[str] = []
        lines.append("# RW Step 7 stage-set completeness report (BR-070)")
        lines.append("")
        lines.append(f"- **Contract:** {d['contract']}")
        lines.append(f"- **Invocation:** {d['invocation_context']}")
        lines.append(f"- **Timestamp (UTC):** {d['timestamp_utc']}")
        lines.append(f"- **Project root:** `{d['project_root']}`")
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
        lines.append(f"- Total touched paths examined: **{summary['total_touched_paths']}**")
        lines.append(f"- Staged: **{summary['staged']}**")
        lines.append(f"- Unchanged on disk: **{summary['unchanged']}**")
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
            lines.append("## Recovery (BR-070)")
            lines.append("")
            lines.append(
                "RW MUST BLOCK before commit. To recover:"
            )
            lines.append("")
            lines.append("1. Re-run `git status` and confirm the listed paths are still modified.")
            lines.append(
                "2. Stage the missing files with `git add -A` (preferred) or "
                "explicit `git add <path>` for each violation row."
            )
            lines.append(
                "3. Re-run this validator. Exit code 0 is required before "
                "advancing to RW Step 11 (Commit)."
            )
            lines.append(
                "4. If a touched path is intentionally excluded from the release "
                "commit, document the rationale in the four-surface report's "
                "`notes` field for that surface and re-run with the explicit "
                "exclusion list (out of scope for this validator's BR-070 fix)."
            )
            lines.append("")
        return "\n".join(lines).rstrip() + "\n"


def discover_project_root(starting_point: Optional[Path] = None) -> Path:
    """
    Discover the git project root from a starting point. Falls back to the
    directory of this script's parent-of-parent if no .git is found.
    """
    cwd = (starting_point or Path.cwd()).resolve()
    for candidate in [cwd, *cwd.parents]:
        if (candidate / ".git").exists():
            return candidate
    return cwd


def find_latest_four_surface_report(project_root: Path) -> Optional[Path]:
    """
    Return the most recent JSON four-surface report under the canonical
    archive directory (by mtime), or None when none exists.
    """
    report_dir = project_root / DEFAULT_REPORT_DIR_REL
    if not report_dir.exists():
        return None
    json_reports = sorted(
        (p for p in report_dir.glob("rw-step7-four-surface-report-*.json")),
        key=lambda p: p.stat().st_mtime,
        reverse=True,
    )
    return json_reports[0] if json_reports else None


def extract_touched_paths_from_report(
    report_path: Path,
) -> Tuple[Dict[str, str], Dict[str, object]]:
    """
    Return (path -> surface) mapping for surfaces with touched=True (or which
    enumerate paths regardless of touched, since those paths are still
    Step-7 outputs subject to the staging contract), plus the release_scope
    dict for downstream reporting.
    """
    data = json.loads(report_path.read_text(encoding="utf-8"))
    release_scope = data.get("release_scope", {})
    path_to_surface: Dict[str, str] = {}
    for section_name in ("surfaces", "auxiliary_surfaces"):
        section = data.get(section_name, {})
        for surface_name, surface_data in section.items():
            for raw_path in surface_data.get("paths", []):
                if raw_path:
                    path_to_surface.setdefault(raw_path, surface_name)
    return path_to_surface, release_scope


def collect_git_status(project_root: Path) -> Dict[str, str]:
    """
    Run `git status --porcelain=v1` and translate the output into
    {absolute_path: classification}. Classifications:
      - "unchanged" (default for any path NOT reported by git status)
      - "staged"
      - "modified-unstaged"
      - "untracked"

    A path can be both staged AND modified-unstaged (e.g. `MM`); in that case
    we report "modified-unstaged" because the staged snapshot does not
    include the on-disk delta — that is the BR-070 violation pattern.
    """
    try:
        result = subprocess.run(
            ["git", "status", "--porcelain=v1", "--untracked-files=all"],
            cwd=str(project_root),
            check=True,
            capture_output=True,
            text=True,
        )
    except (subprocess.CalledProcessError, FileNotFoundError) as exc:
        raise RuntimeError(f"git status failed: {exc}") from exc

    classifications: Dict[str, str] = {}
    for line in result.stdout.splitlines():
        if len(line) < 4:
            continue
        index_status = line[0]
        worktree_status = line[1]
        path_part = line[3:]
        if " -> " in path_part:
            _, _, path_part = path_part.partition(" -> ")
        path_part = path_part.strip().strip('"')
        abs_path = str((project_root / path_part).resolve())
        if index_status == "?" and worktree_status == "?":
            classifications[abs_path] = "untracked"
        elif worktree_status != " ":
            classifications[abs_path] = "modified-unstaged"
        elif index_status != " ":
            classifications[abs_path] = "staged"
    return classifications


def evaluate_touched_paths(
    project_root: Path,
    path_to_surface: Dict[str, str],
) -> List[StagingVerdict]:
    """
    For each touched path declared by RW Step 7, classify staging status and
    decide whether the path constitutes a BR-070 stage-set completeness
    violation.
    """
    git_classifications = collect_git_status(project_root)
    verdicts: List[StagingVerdict] = []
    for raw_path, surface in path_to_surface.items():
        path_obj = Path(raw_path)
        if not path_obj.is_absolute():
            path_obj = (project_root / path_obj).resolve()
        else:
            path_obj = path_obj.resolve()
        path_str = str(path_obj)
        if not path_obj.exists():
            verdicts.append(
                StagingVerdict(
                    path=path_str,
                    surface=surface,
                    git_status="missing",
                    is_violation=True,
                    detail=(
                        "Step-7 surface path does not exist on disk; staging "
                        "cannot reach it. Likely Step 7 declared a surface that "
                        "was never written, or the path was deleted before "
                        "commit. Investigate before proceeding."
                    ),
                )
            )
            continue
        status = git_classifications.get(path_str, "unchanged")
        is_violation = status in {"modified-unstaged", "untracked"}
        detail = ""
        if status == "modified-unstaged":
            detail = (
                "Step 7 mutated this file but Step 8 did not stage the "
                "change. BR-070 stage-set completeness violation — RW MUST "
                "BLOCK. Stage with `git add -A` and re-run."
            )
        elif status == "untracked":
            detail = (
                "Step 7 produced this file but git considers it untracked. "
                "Stage with `git add` (release artefacts are required to be "
                "tracked)."
            )
        elif status == "staged":
            detail = "Step 7 mutation is staged for commit (Step 8 honoured)."
        else:
            detail = (
                "Path unchanged on disk relative to HEAD; Step 7 was an "
                "idempotent no-op for this surface."
            )
        verdicts.append(
            StagingVerdict(
                path=path_str,
                surface=surface,
                git_status=status,
                is_violation=is_violation,
                detail=detail,
            )
        )
    return verdicts


def build_completeness_report(
    project_root: Path,
    verdicts: List[StagingVerdict],
    *,
    four_surface_report_path: Optional[Path],
    release_scope: Dict[str, object],
    invocation_context: str,
) -> CompletenessReport:
    return CompletenessReport(
        timestamp_utc=datetime.utcnow().strftime("%Y-%m-%d %H:%M UTC"),
        project_root=str(project_root),
        four_surface_report_path=(
            str(four_surface_report_path) if four_surface_report_path else None
        ),
        invocation_context=invocation_context,
        release_scope=release_scope,
        verdicts=verdicts,
    )


def write_completeness_report(
    report: CompletenessReport,
    output_dir: Path,
) -> List[Path]:
    """
    Persist the completeness report next to the four-surface reports.

    File-naming convention:
      rw-step7-stage-completeness-{version_or_timestamp}-{e?s?t?}.{json|md}

    When release_scope information is unavailable (e.g. ad-hoc validator run
    in a unit test), the timestamp is used instead.
    """
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
        str(version_string).replace("+", "plus").replace(".", "-").replace(" ", "_").replace(":", "-")
    )
    base = f"rw-step7-stage-completeness-{sanitized_version}-{scope_token}"
    json_path = output_dir / f"{base}.json"
    md_path = output_dir / f"{base}.md"
    json_path.write_text(json.dumps(report.as_dict(), indent=2, sort_keys=True) + "\n")
    md_path.write_text(report.to_markdown())
    return [json_path, md_path]


def parse_args(argv: Optional[List[str]] = None) -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description=(
            "Validate RW Step 7 stage-set completeness (BR-070, FR-092 Wave 5)."
        )
    )
    src = parser.add_mutually_exclusive_group()
    src.add_argument(
        "--four-surface-report",
        type=Path,
        default=None,
        help="Path to the FR-092 Wave 3 four-surface report JSON to validate against.",
    )
    src.add_argument(
        "--touched-files",
        type=Path,
        nargs="+",
        default=None,
        help="Explicit list of Step-7 touched files (alternative to --four-surface-report).",
    )
    parser.add_argument(
        "--auto",
        action="store_true",
        help="Auto-discover the most recent four-surface report under the changelog archive.",
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
        help=(
            "Directory to write the completeness report into "
            "(default: docs/changelog-and-release-notes/changelog-archive/four-surface-reports/)."
        ),
    )
    parser.add_argument(
        "--no-emit-report",
        action="store_true",
        help="Skip writing the completeness report (useful in unit tests).",
    )
    parser.add_argument(
        "--quiet",
        "-q",
        action="store_true",
        help="Suppress non-summary stdout output.",
    )
    return parser.parse_args(argv)


def _surface_for_explicit_path(path: Path) -> str:
    """
    Best-effort surface classification for paths supplied via
    --touched-files (when no four-surface report is available).
    """
    text = str(path).lower()
    if "kboard" in text or "kanban-board" in text:
        return "kboard"
    if "fbuboard" in text or "fr-br-uxr-board" in text:
        return "fbuboard"
    if "/fr-br/" in text or re.search(r"/(fr|br|uxr)-\d+", text):
        return "fbu_doc"
    if "/epics/" in text and "epic-" in text and "story-" not in text:
        return "epic_doc"
    if "story-" in text and ".md" in text and "/epic" in text:
        return "story_doc"
    if "/epics/" in text and ".md" in text:
        return "task_doc"
    return "unclassified"


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
                "INFO: no touched paths declared by Step 7; stage-set "
                "completeness vacuously satisfied."
            )
        return 0

    verdicts = evaluate_touched_paths(project_root, path_to_surface)
    report = build_completeness_report(
        project_root,
        verdicts,
        four_surface_report_path=four_surface_report_path,
        release_scope=release_scope,
        invocation_context="rw_step_7_stage_completeness",
    )

    if not args.no_emit_report:
        report_dir = (args.report_dir or (project_root / DEFAULT_REPORT_DIR_REL)).resolve()
        written = write_completeness_report(report, report_dir)
        if not args.quiet:
            for p in written:
                print(f"wrote stage-completeness report: {p}")

    summary = report.as_dict()["summary"]
    if not args.quiet:
        print("RW Step 7 stage-set completeness:")
        print(f"  contract:        {report.contract}")
        print(f"  paths examined:  {summary['total_touched_paths']}")
        print(f"  staged:          {summary['staged']}")
        print(f"  unchanged:       {summary['unchanged']}")
        print(f"  violations:      {summary['violations']}")
        print(f"  verdict:         {summary['verdict']}")

    if summary["violations"]:
        if not args.quiet:
            print("", file=sys.stderr)
            print(
                "BR-070 VIOLATION: RW Step 7 mutations were not fully staged "
                "by Step 8. RW MUST BLOCK until violations are resolved.",
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
