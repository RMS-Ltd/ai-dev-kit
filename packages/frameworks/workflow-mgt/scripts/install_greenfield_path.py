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
from typing import List, Optional

_SCRIPTS_DIR = Path(__file__).resolve().parent
if str(_SCRIPTS_DIR) not in sys.path:
    sys.path.insert(0, str(_SCRIPTS_DIR))
try:
    from install_ux_version import print_session_banner
except ImportError:
    def print_session_banner(project_root=None, *, verbose=False, file=None):  # type: ignore[misc]
        return None

try:
    from adk_install_errors import emit_install_error
except ImportError:
    def emit_install_error(code, *, detail=None, file=None):  # type: ignore[misc]
        print(f"ERROR [{code}]", file=file or sys.stderr)

try:
    from verify_vendor_tree import run_verify
except ImportError:
    def run_verify(vendor_root, *, tarball=None, sha256=None, emit=True):  # type: ignore[misc]
        return 0, None


def resolve_frameworks_base(project_root: Path, vendor_root: Path) -> Path:
    """
    Directory whose ``packages/frameworks/`` tree hosts installer scripts.

    Project-root ``packages/frameworks`` wins when present; otherwise use
    ``vendor_root`` when it contains the lean vendor layout (UXR-025 F5).
    """
    project_fw = project_root / "packages" / "frameworks"
    if project_fw.is_dir():
        return project_root
    vendor_fw = vendor_root / "packages" / "frameworks"
    if vendor_fw.is_dir():
        return vendor_root
    return project_root


def build_rw_command(
    frameworks_base: Path,
    *,
    project_root: Path,
    rw_mode: str,
    config: Optional[Path],
    non_interactive: bool,
    maintainer_editor_profile: Optional[str] = None,
) -> List[str]:
    rw_script = (
        frameworks_base
        / "packages"
        / "frameworks"
        / "workflow-mgt"
        / "scripts"
        / "install_release_workflow.py"
    )
    cmd = [
        sys.executable,
        str(rw_script),
        "--mode",
        rw_mode,
        "--project-root",
        str(project_root),
    ]
    if config is not None:
        cmd.extend(["--config", str(config)])
    if non_interactive:
        cmd.append("--non-interactive")
    if maintainer_editor_profile is not None:
        cmd.extend(["--maintainer-editor-profile", maintainer_editor_profile])
    return cmd


def build_kanban_command(
    frameworks_base: Path,
    *,
    kanban_mode: str,
    non_interactive: bool,
) -> List[str]:
    kanban_script = (
        frameworks_base
        / "packages"
        / "frameworks"
        / "kanban"
        / "scripts"
        / "install_kanban_framework.py"
    )
    cmd = [
        sys.executable,
        str(kanban_script),
        "--mode",
        kanban_mode,
    ]
    if non_interactive:
        cmd.append("--force")
    return cmd


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
        help="Skip checkpoint prompts; forward non-interactive flags to child installers.",
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
    parser.add_argument(
        "--config",
        default=None,
        help="RW install config YAML forwarded to install_release_workflow.py.",
    )
    parser.add_argument(
        "--vendor-root",
        default=None,
        help="Lean vendor tree root for preflight and installer script resolution.",
    )
    parser.add_argument(
        "--no-verify-vendor",
        action="store_true",
        help="Skip ADK-I05 vendor tree preflight (FR-111).",
    )
    parser.add_argument(
        "--maintainer-editor-profile",
        type=str,
        choices=("none", "obsidian-personal", "obsidian-team"),
        default=None,
        help="Forward maintainer editor profile to RW installer (FR-121 / E05:S08:T07).",
    )
    args = parser.parse_args()

    project_root = Path(args.project_root).resolve()
    if not project_root.exists():
        print(f"Project root not found: {project_root}")
        return 1

    print_session_banner(project_root)

    vendor_root = Path(args.vendor_root).resolve() if args.vendor_root else project_root
    if not args.dry_run and not args.no_verify_vendor:
        vcode, _ = run_verify(vendor_root, emit=True)
        if vcode != 0:
            print("\nVendor preflight failed. Fix acquisition before running installers.")
            print("See framework-dependency-troubleshooting-guide.md § Install error codes (ADK-*).")
            return vcode

    frameworks_base = resolve_frameworks_base(project_root, vendor_root)
    if frameworks_base == vendor_root and vendor_root != project_root:
        print(f"\nFramework scripts resolved under vendor tree: {vendor_root}")

    config_path = Path(args.config).resolve() if args.config else None
    if config_path is not None and not config_path.is_file():
        print(f"RW config file not found: {config_path}")
        return 1

    chosen_order = choose_order(args.non_interactive, args.order)
    print(f"\nChosen order: {chosen_order}")

    rw_cmd = build_rw_command(
        frameworks_base,
        project_root=project_root,
        rw_mode=args.rw_mode,
        config=config_path,
        non_interactive=args.non_interactive,
        maintainer_editor_profile=args.maintainer_editor_profile,
    )
    kanban_cmd = build_kanban_command(
        frameworks_base,
        kanban_mode=args.kanban_mode,
        non_interactive=args.non_interactive,
    )

    ordered_steps = [rw_cmd, kanban_cmd] if chosen_order == "rw-first" else [kanban_cmd, rw_cmd]

    for step in ordered_steps:
        code = run_step(step, project_root, args.dry_run)
        if code != 0:
            is_rw = "install_release_workflow" in step[1]
            err = "ADK-I01.S01" if is_rw else "ADK-I01.S02"
            emit_install_error(err, detail=f"subprocess exit {code}")
            print(f"\nInstallation halted due to step failure (exit {code}).")
            print("See subprocess output above for ADK-I02.* or ADK-I03.* detail codes.")
            return code

    print("\nGreenfield orchestration finished.")
    print("Next: run manual verification gates from INSTALL_IN_YOUR_PROJECT.md.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
