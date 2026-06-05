"""
CLI entry point for browsing RW journals and recovery reports.

Usage:
    python -m journal list
    python -m journal view  <run-id>
    python -m journal report <run-id>
"""

from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path
from typing import Optional

from .rw_journal import RWJournal
from .recovery_report import RecoveryReport


def _find_journal_file(run_id: str, journal_dir: Path) -> Optional[Path]:
    for path in journal_dir.glob("rw-*.json"):
        if run_id in path.name and not path.name.endswith("-recovery.json"):
            return path
    return None


def cmd_list(args: argparse.Namespace) -> int:
    journal_dir = Path(args.dir)
    runs = RWJournal.list_runs(journal_dir)
    if not runs:
        print("No journal files found.", file=sys.stderr)
        return 1
    print(f"{'Run ID':<36} {'Task':<15} {'Status':<10} {'Started'}")
    print("-" * 80)
    for path in runs[: args.limit]:
        try:
            run = RWJournal.load(path)
            print(f"{run.run_id:<36} {run.task_id:<15} {run.status:<10} {run.started_at}")
        except Exception:
            continue
    return 0


def cmd_view(args: argparse.Namespace) -> int:
    journal_dir = Path(args.dir)
    path = _find_journal_file(args.run_id, journal_dir)
    if path is None:
        print(f"Journal not found for run ID: {args.run_id}", file=sys.stderr)
        return 1
    run = RWJournal.load(path)
    print(json.dumps(run.to_dict(), indent=2, ensure_ascii=False))
    return 0


def cmd_report(args: argparse.Namespace) -> int:
    journal_dir = Path(args.dir)
    path = _find_journal_file(args.run_id, journal_dir)
    if path is None:
        print(f"Journal not found for run ID: {args.run_id}", file=sys.stderr)
        return 1
    run = RWJournal.load(path)
    report = RecoveryReport.from_run_entry(run)
    if args.json:
        print(report.to_json())
    else:
        print(report.to_markdown())
    return 0


def main(argv: Optional[list[str]] = None) -> int:
    parser = argparse.ArgumentParser(prog="journal", description="RW journal browser")
    parser.add_argument(
        "--dir",
        default="docs/journals",
        help="Directory containing journal files (default: docs/journals)",
    )
    sub = parser.add_subparsers(dest="command", required=True)

    p_list = sub.add_parser("list", help="List recent journal runs")
    p_list.add_argument("--limit", type=int, default=20, help="Maximum runs to show")
    p_list.set_defaults(func=cmd_list)

    p_view = sub.add_parser("view", help="View a raw journal file by run ID")
    p_view.add_argument("run_id", help="UUID of the run")
    p_view.set_defaults(func=cmd_view)

    p_report = sub.add_parser("report", help="Generate recovery report for a run")
    p_report.add_argument("run_id", help="UUID of the run")
    p_report.add_argument("--json", action="store_true", help="Output JSON instead of Markdown")
    p_report.set_defaults(func=cmd_report)

    args = parser.parse_args(argv)
    return args.func(args)


if __name__ == "__main__":
    sys.exit(main())
