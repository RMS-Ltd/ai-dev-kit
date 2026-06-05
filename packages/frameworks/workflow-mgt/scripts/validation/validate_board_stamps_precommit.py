#!/usr/bin/env python3
"""
Pre-commit guard for kboard.md row stamps (FR-097).

1. Homogeneity: block when ≥N rows share identical `Last modified` (default N=3).
2. Stamp diff: block unevidenced row stamp changes vs HEAD (same rules as
   validate_board_stamp_diff.py).

Recovery commits: stage a backfill report under
docs/changelog-and-release-notes/changelog-archive/four-surface-reports/
matching *backfill*report*.json to allow FR-097 backfill-only stamp rewrites.
"""

from __future__ import annotations

import argparse
import subprocess
import sys
from pathlib import Path
from typing import List, Optional, Tuple

_SCRIPT_DIR = Path(__file__).resolve().parent
_KANBAN_DIR = _SCRIPT_DIR.parent / "kanban"
if str(_KANBAN_DIR) not in sys.path:
    sys.path.insert(0, str(_KANBAN_DIR))

from stamp_authority import (  # noqa: E402
    homogeneity_clusters_blocking,
    homogeneity_threshold_from_config,
    kanban_root_from_config,
    load_evidence_manifest,
    load_rw_config,
    validate_stamp_diff,
)

BOARD_REL_PATHS = (
    "docs/project-management/kanban/kboard.md",
)


def _git(*args: str, cwd: Path) -> subprocess.CompletedProcess:
    return subprocess.run(
        ["git", *args],
        cwd=cwd,
        capture_output=True,
        text=True,
        check=False,
    )


def staged_files(project_root: Path) -> List[str]:
    result = _git("diff", "--cached", "--name-only", "--diff-filter=ACM", cwd=project_root)
    if result.returncode != 0:
        return []
    return [line.strip() for line in result.stdout.splitlines() if line.strip()]


def staged_backfill_report(staged: List[str]) -> bool:
    for path in staged:
        if "four-surface-reports" in path and "backfill" in path.lower() and path.endswith(".json"):
            return True
    return False


def staged_structure_prune_manifest(project_root: Path, staged: List[str]) -> Optional[dict]:
    """Load UKW/RW structure-prune evidence (row removals) from staged four-surface JSON."""
    candidates = [
        p
        for p in staged
        if "four-surface-reports" in p
        and p.endswith(".json")
        and (
            "archive-proof" in p.lower()
            or "structure-prune" in p.lower()
            or "structure_prune" in p.lower()
        )
    ]
    for rel in sorted(candidates):
        path = project_root / rel
        if path.is_file():
            return load_evidence_manifest(path)
    return None


def read_staged_content(project_root: Path, rel_path: str) -> Optional[str]:
    result = _git("show", f":{rel_path}", cwd=project_root)
    if result.returncode != 0:
        return None
    return result.stdout


def read_head_content(project_root: Path, rel_path: str) -> Optional[str]:
    result = _git("show", f"HEAD:{rel_path}", cwd=project_root)
    if result.returncode != 0:
        return None
    return result.stdout


def check_board(
    project_root: Path,
    rel_path: str,
    *,
    kroot: Path,
    threshold: int,
    allow_backfill: bool,
    evidence_manifest: Optional[dict] = None,
) -> Tuple[bool, List[str]]:
    errors: List[str] = []
    staged_content = read_staged_content(project_root, rel_path)
    if staged_content is None:
        return True, errors

    clusters = homogeneity_clusters_blocking(
        staged_content,
        project_root,
        kroot,
        threshold=threshold,
    )
    for stamp, row_ids in clusters.items():
        errors.append(
            f"{rel_path}: homogeneity FAIL — stamp '{stamp}' on {len(row_ids)} rows "
            f"(threshold {threshold}, not git-single-commit exempt): "
            f"{row_ids[:8]}{'...' if len(row_ids) > 8 else ''}"
        )

    head_content = read_head_content(project_root, rel_path)
    if head_content is not None and head_content != staged_content:
        passed, denied = validate_stamp_diff(
            head_content,
            staged_content,
            project_root=project_root,
            board_path=project_root / rel_path,
            evidence_manifest=evidence_manifest,
        )
        if not passed and not allow_backfill:
            for d in denied:
                errors.append(f"{rel_path}: stamp diff FAIL — {d}")

    return (not errors, errors)


def main(argv: Optional[List[str]] = None) -> int:
    parser = argparse.ArgumentParser(description="Pre-commit board stamp guard (FR-097).")
    parser.add_argument("--project-root", type=Path, default=Path.cwd())
    args = parser.parse_args(argv)

    project_root = args.project_root.resolve()
    config = load_rw_config(project_root)
    threshold = homogeneity_threshold_from_config(project_root, config)
    kroot = kanban_root_from_config(project_root, config)

    staged = staged_files(project_root)
    boards = [p for p in BOARD_REL_PATHS if p in staged]
    if not boards:
        return 0

    allow_backfill = staged_backfill_report(staged)
    prune_manifest = staged_structure_prune_manifest(project_root, staged)
    all_errors: List[str] = []
    for rel_path in boards:
        ok, errs = check_board(
            project_root,
            rel_path,
            kroot=kroot,
            threshold=threshold,
            allow_backfill=allow_backfill,
            evidence_manifest=prune_manifest,
        )
        if not ok:
            all_errors.extend(errs)

    if all_errors:
        print("validate_board_stamps_precommit: BLOCKED", file=sys.stderr)
        for err in all_errors:
            print(f"  - {err}", file=sys.stderr)
        print(
            "\nFix: preserve row stamps on hygiene; use backfill_board_row_stamps.py "
            "with a four-surface-reports backfill JSON report staged in the same commit.",
            file=sys.stderr,
        )
        return 1

    print(
        f"validate_board_stamps_precommit: OK ({len(boards)} board(s), "
        f"homogeneity threshold={threshold})"
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
