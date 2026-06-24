#!/usr/bin/env python3
"""
Greenfield Installation Orchestrator (FR-080 / E6:S09:T01).

Hybrid orchestration model:
- Deterministic default path (RW-first, then Kanban)
- Explicit user checkpoint with override option
- Thin wrapper around existing installers (no duplicate install logic)

Phase 0 extensions (T36 / #52):
- --adoption-path for profile-aware guidance and Install RC
- --init-sqlite before RW when config declares sqlite backend
- --run-install-rc post-install gate

Guided orchestrator v2 (FR-135 / E06:S09:T38):
- install-profile.yaml via --config (schema_version 1.x)
- Phases A–F: path, release authority, trigger bundle, ledgers, KMA offer, RC
"""

from __future__ import annotations

import argparse
import json
import subprocess
import sys
from datetime import datetime, timezone
from pathlib import Path
from typing import List, Optional, Tuple

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

try:
    from install_profile import (
        InstallProfile,
        load_config_file,
        profile_summary_dict,
        resolve_interactive,
        write_temp_rw_config,
    )
except ImportError:
    InstallProfile = None  # type: ignore[misc,assignment]
    load_config_file = None  # type: ignore[misc,assignment]

try:
    from install_cursorrules_bundle import append_sections, bundle_for_trigger
except ImportError:
    append_sections = None  # type: ignore[misc,assignment]
    bundle_for_trigger = None  # type: ignore[misc,assignment]

_RELEASE_STATE_SCRIPT = (
    _SCRIPTS_DIR / "release_state" / "init_release_state_db.py"
)
_IMPORT_LEGACY_SCRIPT = _SCRIPTS_DIR / "release_state" / "import_legacy.py"
_INIT_KANBAN_COMPLETED = _SCRIPTS_DIR / "kanban" / "init_kanban_completed_db.py"
_IMPORT_KANBAN_COMPLETED = _SCRIPTS_DIR / "kanban" / "import_kanban_completed_md.py"
_VALIDATE_RC_SCRIPT = _SCRIPTS_DIR / "validation" / "validate_install_rc.py"
_COMPREHENSION_TEMPLATE = (
    _SCRIPTS_DIR.parent / "templates" / "COMPREHENSION_TEMPLATE.md"
)
_DEFAULT_RW_INPUT_REL = Path("config") / "greenfield-rw-install-input.yaml"

_LAYERED_SEQUENCE = """
Layered install sequence (Path 2 / full-stack brownfield target):
  0  vendor + venv
  1  rw-config skeleton (via RW installer or --config)
  2  sqlite — import_legacy.py or init_release_state_db.py
  3  RW installer scaffold
  3½ documentation schema — DOCUMENTATION_SCHEMA.md / documentation_surfaces
  3c UKW / cursorrules wiring (orchestrated in Phase C)
  4  kanban fresh --catalog v4
  5  KMA — kit first pass on archived legacy only (no pre-authored target E/S tree)
  5b post-KMA scoring / tweaks — after kit output (eval programmes only)
  6  sign-off + Install RC checklist
  7  first domain RW
"""


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
    catalog: str,
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
        "--catalog",
        catalog,
    ]
    if non_interactive:
        cmd.append("--force")
    return cmd


def build_init_sqlite_command(
    project_root: Path,
    *,
    import_mode: str = "auto",
    skip_changelog_import: bool = True,
) -> List[str]:
    """Prefer import_legacy when semver-registry.yaml exists; else empty DB init."""
    yaml_path = project_root / "semver-registry.yaml"
    mode = import_mode
    if mode == "auto":
        mode = "import" if yaml_path.is_file() else "fresh"
    if mode == "legacy_yaml":
        return []
    if mode == "import" and yaml_path.is_file() and _IMPORT_LEGACY_SCRIPT.is_file():
        cmd = [
            sys.executable,
            str(_IMPORT_LEGACY_SCRIPT),
            "--yaml",
            str(yaml_path),
            "--validate",
        ]
        if skip_changelog_import:
            cmd.append("--skip-changelog")
        return cmd
    if _RELEASE_STATE_SCRIPT.is_file():
        return [
            sys.executable,
            str(_RELEASE_STATE_SCRIPT),
            "--project-root",
            str(project_root),
        ]
    return []


def build_kanban_completed_init_command(project_root: Path) -> List[str]:
    if not _INIT_KANBAN_COMPLETED.is_file():
        return []
    return [sys.executable, str(_INIT_KANBAN_COMPLETED), "--project-root", str(project_root)]


def build_kanban_completed_import_command(project_root: Path) -> List[str]:
    md = project_root / "docs" / "kanban" / "kanban-completed.md"
    if not md.is_file() or not _IMPORT_KANBAN_COMPLETED.is_file():
        return []
    return [
        sys.executable,
        str(_IMPORT_KANBAN_COMPLETED),
        "--project-root",
        str(project_root),
        "--markdown",
        str(md),
    ]


def resolve_rw_input_config(
    project_root: Path, explicit: Optional[Path]
) -> Optional[Path]:
    """Return explicit config or conventional ``config/greenfield-rw-install-input.yaml``."""
    if explicit is not None:
        return explicit
    conventional = project_root / _DEFAULT_RW_INPUT_REL
    if conventional.is_file():
        return conventional
    return None


def ensure_rw_config_sqlite_backend(project_root: Path, *, dry_run: bool) -> None:
    """Ensure rw-config declares sqlite backend after RW when --init-sqlite is used."""
    rw_cfg = project_root / "rw-config.yaml"
    if not rw_cfg.is_file():
        return
    try:
        import yaml
    except ImportError:
        return
    data = yaml.safe_load(rw_cfg.read_text(encoding="utf-8")) or {}
    if not isinstance(data, dict):
        return
    if str(data.get("release_state_backend", "")).strip().lower() == "sqlite":
        return
    data["release_state_backend"] = "sqlite"
    data.setdefault("release_state_db", ".adk/release-state.db")
    if dry_run:
        print("\n[dry-run] Would set release_state_backend: sqlite in rw-config.yaml")
        return
    rw_cfg.write_text(
        yaml.dump(data, sort_keys=False, default_flow_style=False),
        encoding="utf-8",
    )
    print("\n✅ Set release_state_backend: sqlite in rw-config.yaml")


def scaffold_comprehension_legacy(
    project_root: Path, adoption_path: str, dry_run: bool
) -> None:
    """Scaffold COMPREHENSION.md on legacy orchestrator paths that need Install RC."""
    if adoption_path not in ("arm-a", "arm-b", "strangler"):
        return
    dest = project_root / "COMPREHENSION.md"
    if dest.is_file():
        print(f"\nCOMPREHENSION.md already exists: {dest}")
        return
    if not _COMPREHENSION_TEMPLATE.is_file():
        print("\n⚠️  COMPREHENSION template not found — skip scaffold")
        return
    text = _COMPREHENSION_TEMPLATE.read_text(encoding="utf-8")
    if text.startswith("---"):
        end = text.find("---", 3)
        if end != -1:
            text = text[end + 3 :].lstrip("\n")
    header = (
        f"<!-- Generated by install_greenfield_path.py — adoption_path={adoption_path} -->\n\n"
    )
    if dry_run:
        print("\n[dry-run] Would scaffold COMPREHENSION.md from template")
        return
    dest.write_text(header + text, encoding="utf-8")
    print(f"\n✅ Scaffolded COMPREHENSION.md from template")


def build_install_rc_command(project_root: Path, profile: str, *, strict: bool) -> List[str]:
    cmd = [
        sys.executable,
        str(_VALIDATE_RC_SCRIPT),
        "--project-root",
        str(project_root),
        "--profile",
        profile,
    ]
    if strict:
        cmd.append("--strict")
    return cmd


def _read_sqlite_backend(project_root: Path, config_path: Optional[Path]) -> bool:
    try:
        import yaml
    except ImportError:
        return False
    paths = []
    if config_path and config_path.is_file():
        paths.append(config_path)
    rw_cfg = project_root / "rw-config.yaml"
    if rw_cfg.is_file():
        paths.append(rw_cfg)
    for p in paths:
        data = yaml.safe_load(p.read_text(encoding="utf-8")) or {}
        if str(data.get("release_state_backend", "")).strip().lower() == "sqlite":
            return True
    return False


def run_step(command: list[str], project_root: Path, dry_run: bool) -> int:
    if not command:
        return 0
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


def _rc_profile_for_adoption(adoption_path: str) -> str:
    mapping = {
        "greenfield": "greenfield",
        "arm-a": "arm-a",
        "arm-b": "arm-b",
        "strangler": "strangler",
    }
    return mapping.get(adoption_path, "greenfield")


def print_adoption_guidance(adoption_path: str) -> None:
    print(f"\nAdoption path: {adoption_path}")
    if adoption_path == "arm-b":
        print("Path 2 — shell + selective migration. Archive legacy PM before KMA.")
        print(_LAYERED_SEQUENCE)
    elif adoption_path == "arm-a":
        print("Path 1 — brownfield in-place. KMA only when legacy topology is compatible.")
    elif adoption_path == "strangler":
        print("Path 3 — strangler coexist. Declare canonical kanban_root; time-box eliminate phase.")
    else:
        print("Greenfield — empty/template repo (FR-080).")


def scaffold_comprehension(project_root: Path, profile: "InstallProfile", dry_run: bool) -> None:
    if not profile.scaffold_comprehension:
        return
    dest = project_root / "COMPREHENSION.md"
    if dest.is_file():
        print(f"\nCOMPREHENSION.md already exists: {dest}")
        return
    if not _COMPREHENSION_TEMPLATE.is_file():
        print("\n⚠️  COMPREHENSION template not found — skip scaffold")
        return
    text = _COMPREHENSION_TEMPLATE.read_text(encoding="utf-8")
    if text.startswith("---"):
        end = text.find("---", 3)
        if end != -1:
            text = text[end + 3 :].lstrip("\n")
    header = (
        f"<!-- Generated by install_greenfield_path.py — adoption_path={profile.adoption_path} -->\n\n"
    )
    if dry_run:
        print(f"\n[dry-run] Would scaffold COMPREHENSION.md from template")
        return
    dest.write_text(header + text, encoding="utf-8")
    print(f"\n✅ Scaffolded COMPREHENSION.md from template")


def emit_kma_handoff(profile: "InstallProfile") -> None:
    if profile.kma_offer == "skip":
        return
    print("\n--- Phase E — KMA handoff (no auto-run) ---")
    if profile.kma_offer == "blind_l1":
        print("Next: run KMA for blind L1 migration on archived legacy only.")
        print("  Command: KMA /path/to/archived/legacy/kanban")
        print("  Guide: packages/frameworks/kanban/guides/ADK_KANBAN_MIGRATION_FOR_ADOPTER_AGENTS.md")
    elif profile.kma_offer == "guided":
        print("Next: guided KMA kit mode when target-structure pack is available (FR-136).")
        print("  See: https://github.com/RMS-Ltd/ai-dev-kit/issues/85")


def write_guided_receipt(project_root: Path, profile: "InstallProfile", *, dry_run: bool) -> None:
    receipt_dir = project_root / "logs" / "ai-dev-kit" / "install"
    payload = {
        "receipt_type": "guided_install_orchestrator",
        "schema_version": profile.schema_version,
        "timestamp_utc": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
        "choices": profile_summary_dict(profile),
    }
    if dry_run:
        print(f"\n[dry-run] Install receipt: {json.dumps(payload, indent=2)}")
        return
    receipt_dir.mkdir(parents=True, exist_ok=True)
    out = receipt_dir / f"guided-install-{payload['timestamp_utc'].replace(':', '')}.json"
    out.write_text(json.dumps(payload, indent=2) + "\n", encoding="utf-8")
    print(f"\nInstall receipt: {out.relative_to(project_root)}")


def run_phase_c_cursorrules(project_root: Path, profile: "InstallProfile", dry_run: bool) -> None:
    if append_sections is None or bundle_for_trigger is None:
        return
    include_ukw, include_delivery = bundle_for_trigger(profile.trigger_bundle)
    if not include_ukw and not include_delivery:
        return
    path = project_root / ".cursorrules"
    actions = append_sections(
        path,
        include_ukw=include_ukw,
        include_delivery=include_delivery,
        dry_run=dry_run,
    )
    for action in actions:
        print(f"  Phase C: {action}")


def run_guided_install(
    project_root: Path,
    vendor_root: Path,
    profile: "InstallProfile",
    *,
    frameworks_base: Path,
    config_path: Optional[Path],
    dry_run: bool,
    maintainer_editor_profile: Optional[str],
) -> int:
    """Execute FR-135 phases A–F on a resolved InstallProfile."""
    ni = profile.non_interactive
    print("\n=== Guided install orchestrator v2 (FR-135) ===")
    print_adoption_guidance(profile.adoption_path)

    pre_sqlite = profile.release_state_backend == "sqlite"
    if pre_sqlite:
        sqlite_cmd = build_init_sqlite_command(
            project_root,
            import_mode=profile.release_state_import,
            skip_changelog_import=profile.skip_changelog_import,
        )
        code = run_step(sqlite_cmd, project_root, dry_run)
        if code != 0:
            emit_install_error("ADK-I01.S00", detail="sqlite init before RW failed")
            return code

    rw_config_path = config_path
    if profile.rw_config or profile.release_state_backend:
        merged = profile.to_rw_install_dict(project_root)
        if not dry_run:
            rw_config_path = write_temp_rw_config(project_root, merged)
        elif config_path is None:
            rw_config_path = project_root / ".adk-install-rw-config.yaml"

    chosen_order = profile.install_order or choose_order(ni, "rw-first")
    print(f"\nChosen order: {chosen_order}")

    rw_cmd = build_rw_command(
        frameworks_base,
        project_root=project_root,
        rw_mode=profile.rw_mode,
        config=rw_config_path,
        non_interactive=ni,
        maintainer_editor_profile=maintainer_editor_profile,
    )
    kanban_cmd = build_kanban_command(
        frameworks_base,
        kanban_mode=profile.kanban_mode,
        catalog=profile.kanban_catalog,
        non_interactive=ni,
    )
    ordered = [rw_cmd, kanban_cmd] if chosen_order == "rw-first" else [kanban_cmd, rw_cmd]

    for step in ordered:
        code = run_step(step, project_root, dry_run)
        if code != 0:
            is_rw = "install_release_workflow" in step[1]
            err = "ADK-I01.S01" if is_rw else "ADK-I01.S02"
            emit_install_error(err, detail=f"subprocess exit {code}")
            return code

    run_phase_c_cursorrules(project_root, profile, dry_run)

    if profile.init_kanban_completed:
        code = run_step(build_kanban_completed_init_command(project_root), project_root, dry_run)
        if code != 0:
            emit_install_error("ADK-I01.S04", detail="kanban-completed db init failed")
            return code
    if profile.import_kanban_completed_md:
        code = run_step(
            build_kanban_completed_import_command(project_root), project_root, dry_run
        )
        if code != 0:
            emit_install_error("ADK-I01.S05", detail="kanban-completed md import failed")
            return code

    scaffold_comprehension(project_root, profile, dry_run)
    emit_kma_handoff(profile)

    rc_passed = True
    if profile.run_install_rc:
        rc_profile = _rc_profile_for_adoption(profile.adoption_path)
        rc_cmd = build_install_rc_command(
            project_root, rc_profile, strict=profile.install_rc_strict
        )
        code = run_step(rc_cmd, project_root, dry_run)
        if code != 0:
            emit_install_error("ADK-I01.S03", detail="Install RC checklist failed")
            rc_passed = False
            if profile.install_rc_strict:
                return code

    write_guided_receipt(project_root, profile, dry_run=dry_run)

    print("\n=== Install phase summary (FR-135-F7) ===")
    print(f"  Adoption path: {profile.adoption_path}")
    print(f"  Release backend: {profile.release_state_backend}")
    print(f"  Trigger bundle: {profile.trigger_bundle}")
    print(f"  Kanban completed DB: {'yes' if profile.init_kanban_completed else 'no'}")
    print(f"  Install RC: {'PASS' if rc_passed else 'FAIL (see above)'}")
    if rc_passed:
        print("\nNext step: run your first domain RW when ready (not executed by installer).")
    else:
        print("\nResolve Install RC failures before first domain RW.")
    return 0 if rc_passed else 1


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
        "--catalog",
        default="v4",
        help="Kanban catalogue for fresh install (default: v4).",
    )
    parser.add_argument(
        "--config",
        default=None,
        help="Install profile YAML (schema_version 1.x) or legacy RW install input.",
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
    parser.add_argument(
        "--adoption-path",
        choices=("greenfield", "arm-a", "arm-b", "strangler"),
        default=None,
        help="Adopter path profile for guidance and Install RC (ADR-030).",
    )
    parser.add_argument(
        "--init-sqlite",
        action="store_true",
        help="Initialize SQLite release state before RW (legacy flag; profile preferred).",
    )
    parser.add_argument(
        "--run-install-rc",
        action="store_true",
        help="Run validate_install_rc.py after installers complete.",
    )
    parser.add_argument(
        "--install-rc-strict",
        action="store_true",
        help="Pass --strict to validate_install_rc (blocking rows only).",
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

    config_path = (
        Path(args.config).resolve() if args.config else None
    )
    config_path = resolve_rw_input_config(project_root, config_path)
    if config_path is not None:
        try:
            rel = config_path.relative_to(project_root)
        except ValueError:
            rel = config_path
        print(f"\nRW install config: {rel}")
    if config_path is not None and not config_path.is_file():
        emit_install_error("ADK-I01.S06", detail=f"config not found: {config_path}")
        return 1

    # Guided v2 path when install-profile.yaml is supplied
    if config_path and load_config_file is not None and InstallProfile is not None:
        try:
            kind, loaded = load_config_file(config_path)
        except ValueError as exc:
            emit_install_error("ADK-I01.S07", detail=str(exc))
            return 1
        if kind == "install_profile":
            profile: InstallProfile = loaded
            if args.non_interactive:
                profile.non_interactive = True
            if args.adoption_path:
                profile.adoption_path = args.adoption_path
            profile = resolve_interactive(
                profile,
                cli_adoption_path=args.adoption_path,
                cli_non_interactive=args.non_interactive,
            )
            return run_guided_install(
                project_root,
                vendor_root,
                profile,
                frameworks_base=frameworks_base,
                config_path=config_path,
                dry_run=args.dry_run,
                maintainer_editor_profile=args.maintainer_editor_profile,
            )

    # Legacy orchestrator path (pre FR-135)
    adoption_path = args.adoption_path or "greenfield"
    print_adoption_guidance(adoption_path)

    if config_path is not None and not config_path.is_file():
        print(f"RW config file not found: {config_path}")
        return 1

    pre_rw_sqlite = args.init_sqlite or _read_sqlite_backend(project_root, config_path)
    if pre_rw_sqlite and config_path is not None:
        sqlite_cmd = build_init_sqlite_command(project_root)
        code = run_step(sqlite_cmd, project_root, args.dry_run)
        if code != 0:
            emit_install_error("ADK-I01.S00", detail="sqlite init before RW failed")
            return code

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
        catalog=args.catalog,
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
            return code

    if pre_rw_sqlite and config_path is None:
        sqlite_cmd = build_init_sqlite_command(project_root)
        code = run_step(sqlite_cmd, project_root, args.dry_run)
        if code != 0:
            emit_install_error("ADK-I01.S00", detail="sqlite init after RW failed")
            return code

    if args.init_sqlite:
        ensure_rw_config_sqlite_backend(project_root, dry_run=args.dry_run)

    scaffold_comprehension_legacy(project_root, adoption_path, args.dry_run)

    if adoption_path in ("arm-b", "strangler"):
        print("\nPost-install manual steps (until fully orchestrated):")
        print("  • KMA — kit first pass on archived legacy only")
    else:
        print("\nPost-install manual steps (until fully orchestrated):")
        print("  • Apply DOCUMENTATION_SCHEMA.md profile (documentation_surfaces in rw-config)")
        print("  • UKW / cursorrules wiring if not emitted by RW installer")

    if args.run_install_rc:
        rc_profile = _rc_profile_for_adoption(adoption_path)
        rc_cmd = build_install_rc_command(
            project_root, rc_profile, strict=args.install_rc_strict
        )
        code = run_step(rc_cmd, project_root, args.dry_run)
        if code != 0:
            emit_install_error("ADK-I01.S03", detail="Install RC checklist failed")
            return code

    print("\nGreenfield orchestration finished.")
    print("Tip: use install-profile.example.yaml with --config for guided v2 (FR-135).")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
