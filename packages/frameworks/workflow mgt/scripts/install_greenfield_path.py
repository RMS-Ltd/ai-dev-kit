#!/usr/bin/env python3
"""
Greenfield Installation Orchestrator (FR-080 / E6:S09:T01).

Hybrid orchestration model:
- Deterministic default path (RW-first, then Kanban)
- Explicit user checkpoint with override option
- Thin wrapper around existing installers (no duplicate install logic)
"""

from __future__ import annotations

import argparse
import subprocess
import sys
from pathlib import Path


def run_step(command: list[str], project_root: Path, dry_run: bool) -> int:
    printable = " ".join(command)
    print(f"\n▶ {printable}")
    if dry_run:
        print("   [dry-run] skipped execution")
        return 0
    result = subprocess.run(command, cwd=project_root, check=False)
    return int(result.returncode)


def choose_order(non_interactive: bool, requested_order: str) -> str:
    if requested_order != "rw-first":
        return requested_order

    if non_interactive:
        return "rw-first"

    print("\nCritical checkpoint: installation order")
    print("Default: RW -> Kanban")
    print("Why default: RW installer establishes rw-config.yaml;")
    print("Kanban installer can consume kanban_root from that config.")
    print("Override available: Kanban -> RW")

    choice = input("Use default order? [Y/n]: ").strip().lower()
    if choice in ("", "y", "yes"):
        return "rw-first"

    override = input("Override to Kanban -> RW? [y/N]: ").strip().lower()
    if override in ("y", "yes"):
        reason = input("Enter brief override reason for run notes: ").strip()
        if reason:
            print(f"Override reason recorded: {reason}")
        return "kanban-first"

    return "rw-first"


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Run canonical greenfield installation path with explicit checkpoint."
    )
    parser.add_argument(
        "--project-root",
        default=".",
        help="Target project root (default: current directory).",
    )
    parser.add_argument(
        "--order",
        choices=("rw-first", "kanban-first"),
        default="rw-first",
        help="Preferred order. rw-first is the recommended default.",
    )
    parser.add_argument(
        "--non-interactive",
        action="store_true",
        help="Skip checkpoint prompts and use --order directly.",
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Print steps without executing.",
    )
    parser.add_argument(
        "--rw-mode",
        default="c",
        help="Mode forwarded to install_release_workflow.py (default: c).",
    )
    parser.add_argument(
        "--kanban-mode",
        default="fresh",
        help="Mode forwarded to install_kanban_framework.py (default: fresh).",
    )
    args = parser.parse_args()

    project_root = Path(args.project_root).resolve()
    if not project_root.exists():
        print(f"Project root not found: {project_root}")
        return 1

    chosen_order = choose_order(args.non_interactive, args.order)
    print(f"\nChosen order: {chosen_order}")

    rw_cmd = [
        sys.executable,
        "packages/frameworks/workflow mgt/scripts/install_release_workflow.py",
        "--mode",
        args.rw_mode,
        "--project-root",
        str(project_root),
    ]
    kanban_cmd = [
        sys.executable,
        "packages/frameworks/kanban/scripts/install_kanban_framework.py",
        "--mode",
        args.kanban_mode,
    ]

    ordered_steps = [rw_cmd, kanban_cmd] if chosen_order == "rw-first" else [kanban_cmd, rw_cmd]

    for step in ordered_steps:
        code = run_step(step, project_root, args.dry_run)
        if code != 0:
            print(f"\nInstallation halted due to step failure (exit {code}).")
            return code

    print("\nGreenfield orchestration finished.")
    print("Next: run manual verification gates from INSTALL_IN_YOUR_PROJECT.md.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

