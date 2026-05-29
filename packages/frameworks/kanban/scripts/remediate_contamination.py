"""
Remediation tooling for Kanban contamination (E6:S01:T37).

This script is designed to run in consumer projects. It:
- scans the kanban tree with `contamination_detector`
- prints a summary table
- optionally archives or deletes contaminated files

Archive strategy:
- contaminated files are moved under `docs/project-management/kanban/.contaminated/`
  preserving relative structure
"""

import argparse
import os
import shutil
from pathlib import Path
from typing import List

from contamination_detector import Finding, scan_kanban_tree


def _default_kanban_root(cwd: Path) -> Path:
    return cwd / "docs" / "project-management" / "kanban"


def _archive_path(root: Path, rel: Path) -> Path:
    return root / ".contaminated" / rel


def _print_findings(findings: List[Finding]) -> None:
    if not findings:
        print("No Kanban files found under docs/project-management/kanban/")
        return

    print("Path,Classification,Reason")
    for f in findings:
        print(f"{f.path.as_posix()},{f.classification},{f.reason}")


def remediate(
    kanban_root: Path,
    dry_run: bool = True,
    mode: str = "archive",
) -> int:
    findings = scan_kanban_tree(kanban_root)
    contaminated = [f for f in findings if f.classification == "contaminated"]

    _print_findings(findings)

    if not contaminated:
        print("No contaminated files detected.")
        return 0

    print()
    print(f"Detected {len(contaminated)} contaminated file(s).")
    print(f"Mode: {mode} | Dry-run: {dry_run}")

    if dry_run:
        for f in contaminated:
            target = _archive_path(kanban_root, f.path)
            if mode == "archive":
                print(f"DRY-RUN archive: {f.path.as_posix()} -> {target.as_posix()}")
            elif mode == "delete":
                print(f"DRY-RUN delete: {f.path.as_posix()}")
        return 0

    for f in contaminated:
        src = kanban_root / f.path
        if not src.exists():
            continue
        if mode == "archive":
            dst = _archive_path(kanban_root, f.path)
            dst.parent.mkdir(parents=True, exist_ok=True)
            shutil.move(str(src), str(dst))
            print(f"Archived {f.path.as_posix()} -> {dst.relative_to(kanban_root).as_posix()}")
        elif mode == "delete":
            src.unlink()
            print(f"Deleted {f.path.as_posix()}")

    return 0


def main(argv=None) -> int:
    parser = argparse.ArgumentParser(
        description="Detect and remediate Kanban contamination in consumer projects.",
    )
    parser.add_argument(
        "--kanban-root",
        type=str,
        help="Path to kanban root (default: docs/project-management/kanban relative to CWD)",
    )
    parser.add_argument(
        "--delete",
        action="store_true",
        help="Delete contaminated files instead of archiving them (still respects --dry-run).",
    )
    parser.add_argument(
        "--no-dry-run",
        dest="dry_run",
        action="store_false",
        help="Apply changes instead of just printing planned actions.",
    )
    parser.set_defaults(dry_run=True)

    args = parser.parse_args(argv)
    cwd = Path(os.getcwd())
    kanban_root = Path(args.kanban_root) if args.kanban_root else _default_kanban_root(cwd)
    mode = "delete" if args.delete else "archive"

    return remediate(kanban_root, dry_run=args.dry_run, mode=mode)


if __name__ == "__main__":
    raise SystemExit(main())

