#!/usr/bin/env python3
"""
Kanban Framework Installation Script

Provides interactive installation with mode selection (Fresh, Migration, Update, Hybrid)
and integrates detection, analysis, and migration utilities.

Part of Epic 4, Story 7, Task 2 (FR-007): Migration utilities and installation modes.

Usage:
    python3 install_kanban_framework.py [--mode MODE] [--kanban-path PATH] [--dry-run]

Arguments:
    --mode MODE               Installation mode: fresh, migration, update, hybrid, auto
    --kanban-path PATH        Path to Kanban directory (default: docs/project-management/kanban)
    --dry-run                 Preview changes without modifying files
    --force                   Skip confirmation prompts
"""

import argparse
import json
import os
import subprocess
import sys
from datetime import datetime
from pathlib import Path
from typing import Optional

# Import validation module
try:
    from validate_installation import InstallationValidator
except ImportError:
    # Fallback if running from different directory
    import importlib.util
    validate_path = Path(__file__).parent / "validate_installation.py"
    if validate_path.exists():
        spec = importlib.util.spec_from_file_location("validate_installation", validate_path)
        validate_module = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(validate_module)
        InstallationValidator = validate_module.InstallationValidator
    else:
        InstallationValidator = None


# Import canonical epic installer helper (fresh consumer installs)
try:
    from migrate_structure import install_canonical_epics_only  # type: ignore[attr-defined]
except ImportError:
    # Fallback if running from different directory
    import importlib.util
    migrate_path = Path(__file__).parent / "migrate_structure.py"
    if migrate_path.exists():
        spec = importlib.util.spec_from_file_location("migrate_structure", migrate_path)
        migrate_module = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(migrate_module)
        install_canonical_epics_only = getattr(migrate_module, "install_canonical_epics_only", None)
    else:
        install_canonical_epics_only = None


INSTALL_LOGGER = None
_ENV_LOG_FH = None
_ENV_LOG_PATH_ENV_VAR = "AI_DEV_KIT_INSTALL_LOG_PATH"


def _log(level: str, message: str) -> None:
    """
    Lightweight logger used by this script.

    Prefers delegating to an external logger callback (INSTALL_LOGGER) when provided.
    Falls back to appending to the log file path exposed via AI_DEV_KIT_INSTALL_LOG_PATH
    so that CLI-driven installs can capture structured output in the same per-run log.
    """
    global INSTALL_LOGGER, _ENV_LOG_FH

    # Delegate to external logger callback if provided
    if INSTALL_LOGGER is not None:
        try:
            INSTALL_LOGGER(level, "kanban.install", message)
            return
        except Exception:
            # Fall back to env-based logging if the callback fails
            pass

    # Fallback: append to env-configured log file if present
    log_path = os.getenv(_ENV_LOG_PATH_ENV_VAR)
    if not log_path:
        return

    try:
        if _ENV_LOG_FH is None:
            _ENV_LOG_FH = open(log_path, "a", encoding="utf-8")
        ts = datetime.utcnow().isoformat(timespec="seconds") + "Z"
        _ENV_LOG_FH.write(f"[{ts}] [{level}] kanban.install {message}\n")
        _ENV_LOG_FH.flush()
    except Exception:
        # Logging should never break installation script behaviour
        pass


def run_command(cmd: list, cwd: Optional[Path] = None) -> tuple[int, str, str]:
    """Run a command and return exit code, stdout, stderr."""
    try:
        result = subprocess.run(
            cmd,
            cwd=cwd,
            capture_output=True,
            text=True,
            check=False
        )
        return result.returncode, result.stdout, result.stderr
    except Exception as e:
        _log("ERROR", f"Subprocess failed for command {cmd}: {e}")
        return 1, "", str(e)


def load_rw_kanban_root(project_root: Path) -> Optional[str]:
    """Read kanban_root from rw-config.yaml when present and enabled."""
    rw_config = project_root / "rw-config.yaml"
    if not rw_config.exists():
        return None

    try:
        import yaml  # Optional dependency in this script context
    except Exception:
        return None

    try:
        with open(rw_config, "r", encoding="utf-8") as fh:
            config = yaml.safe_load(fh) or {}
    except Exception:
        return None

    if not config.get("use_kanban"):
        return None
    kanban_root = config.get("kanban_root")
    if not isinstance(kanban_root, str) or not kanban_root.strip():
        return None
    return kanban_root.strip()


def resolve_kanban_path_arg(project_root: Path, provided_kanban_path: str) -> tuple[Path, bool]:
    """
    Resolve effective kanban path.

    If caller uses default path and rw-config.yaml has kanban_root, adopt config path.
    Returns (resolved_path, sourced_from_rw_config).
    """
    default_path = "docs/project-management/kanban"
    if provided_kanban_path != default_path:
        return Path(provided_kanban_path).resolve(), False

    rw_root = load_rw_kanban_root(project_root)
    if rw_root:
        return (project_root / rw_root).resolve(), True
    return Path(provided_kanban_path).resolve(), False


def _get_project_name(project_root: Path) -> str:
    """Infer project name from project root."""
    name = project_root.name
    # Strip common suffixes
    return name.replace("-dev-kit", "").replace("-kit", "")


def create_consumer_board_skeleton(
    kanban_path: Path,
    project_root: Path,
    dry_run: bool = False,
) -> None:
    """
    Create a clean consumer Kanban board skeleton from templates.

    - Creates `kboard.md` from `templates/KANBAN_BOARD_TEMPLATE.md`
    - Creates `kanban-structure.md` from `templates/KANBAN_STRUCTURE_TEMPLATE.md` (if exists)
    - Creates `kanban-board-guide.md` from `templates/KANBAN_BOARD_GUIDE_TEMPLATE.md`
    """
    script_dir = Path(__file__).parent
    templates_dir = script_dir.parent / "templates"

    board_template = templates_dir / "KANBAN_BOARD_TEMPLATE.md"
    guide_template = templates_dir / "KANBAN_BOARD_GUIDE_TEMPLATE.md"

    project_name = _get_project_name(project_root)
    today = datetime.utcnow().strftime("%Y-%m-%d")
    version_placeholder = "v0.0.0.0+0"

    kanban_path = Path(kanban_path)

    if dry_run:
        print("🔍 [DRY RUN] Would create consumer board skeleton:")
        print(f"  - Board: {kanban_path / 'kboard.md'}")
        print(f"  - Structure: {kanban_path / 'kanban-structure.md'}")
        print(f"  - Guide: {kanban_path / 'kanban-board-guide.md'}")
        return

    kanban_path.mkdir(parents=True, exist_ok=True)

    # Create board from template
    if board_template.exists():
        content = board_template.read_text(encoding="utf-8")
        content = content.replace("{Project Name}", project_name)
        content = content.replace("{Date}", today)
        content = content.replace("{Version}", version_placeholder)
        (kanban_path / "kboard.md").write_text(content, encoding="utf-8")
        print(f"  ✅ Created consumer board: {kanban_path / 'kboard.md'}")
    else:
        print(f"  ⚠️  Board template not found: {board_template}")

    # Create structure from template (if exists)
    structure_template = templates_dir / "KANBAN_STRUCTURE_TEMPLATE.md"
    if structure_template.exists():
        content = structure_template.read_text(encoding="utf-8")
        content = content.replace("{Project Name}", project_name)
        content = content.replace("{Date}", today)
        content = content.replace("{Version}", version_placeholder)
        (kanban_path / "kanban-structure.md").write_text(content, encoding="utf-8")
        print(f"  ✅ Created consumer structure: {kanban_path / 'kanban-structure.md'}")
    else:
        print(f"  ⚠️  Structure template not found: {structure_template}")

    # Create board guide from template
    if guide_template.exists():
        content = guide_template.read_text(encoding="utf-8")
        content = content.replace("{Project Name}", project_name)
        content = content.replace("{project name}", project_name)
        content = content.replace("{Date}", today)
        content = content.replace("{Version}", version_placeholder)
        content = content.replace("{kanban_path}", str(kanban_path.relative_to(project_root)))
        # Local policy path default – can be customized later by consumers
        local_policy_path = "docs/project-management/kanban/policies/local-kanban-policy.md"
        content = content.replace("{local_policy_path}", local_policy_path)
        (kanban_path / "kanban-board-guide.md").write_text(content, encoding="utf-8")
        print(f"  ✅ Created consumer board guide: {kanban_path / 'kanban-board-guide.md'}")
    else:
        print(f"  ⚠️  Board guide template not found: {guide_template}")


def detect_structure(kanban_path: Path, verbose: bool = False) -> Optional[Path]:
    """Run detection utility and return path to detection report."""
    print("🔍 Step 1: Detecting existing Kanban structure...")
    _log("INFO", f"[KANBAN_DETECT] Detecting existing Kanban structure at {kanban_path}")
    
    detection_report = Path("detection_report.json")
    cmd = [
        sys.executable,
        "packages/frameworks/kanban/scripts/detect_existing_structure.py",
        "--kanban-path", str(kanban_path),
        "--output", str(detection_report)
    ]
    
    if verbose:
        cmd.append("--verbose")
    
    exit_code, stdout, stderr = run_command(cmd)
    
    if exit_code != 0:
        print(f"❌ Detection failed: {stderr}")
        _log("ERROR", f"[KANBAN_DETECT] Detection failed: {stderr}")
        return None
    
    print(stdout)
    if stdout:
        _log("INFO", f"[KANBAN_DETECT] {stdout.strip()}")
    
    if detection_report.exists():
        return detection_report
    return None


def analyze_structure(detection_report: Path, verbose: bool = False) -> Optional[Path]:
    """Run analysis utility and return path to analysis report."""
    print("\n📊 Step 2: Analyzing structure and generating migration plan...")
    _log("INFO", f"[KANBAN_ANALYZE] Analyzing structure from detection report {detection_report}")
    
    analysis_report = Path("analysis_report.json")
    cmd = [
        sys.executable,
        "packages/frameworks/kanban/scripts/analyze_structure.py",
        "--detection-report", str(detection_report),
        "--output", str(analysis_report)
    ]
    
    if verbose:
        cmd.append("--verbose")
    
    exit_code, stdout, stderr = run_command(cmd)
    
    if exit_code != 0:
        print(f"❌ Analysis failed: {stderr}")
        _log("ERROR", f"[KANBAN_ANALYZE] Analysis failed: {stderr}")
        return None
    
    print(stdout)
    if stdout:
        _log("INFO", f"[KANBAN_ANALYZE] {stdout.strip()}")
    
    if analysis_report.exists():
        return analysis_report
    return None


def select_installation_mode(analysis_report_path: Optional[Path], requested_mode: Optional[str]) -> str:
    """Select installation mode interactively or from analysis report."""
    if requested_mode and requested_mode != "auto":
        return requested_mode
    
    # If we have an analysis report, read recommended mode
    recommended_mode = None
    if analysis_report_path and analysis_report_path.exists():
        import json
        try:
            with open(analysis_report_path, 'r', encoding='utf-8') as f:
                analysis = json.load(f)
            recommended_mode = analysis.get("migration_plan", {}).get("recommended_mode")
        except Exception:
            pass
    
    print("\n🔧 Step 3: Select installation mode")
    _log("INFO", "[KANBAN_MODE] Selecting installation mode")
    print("=" * 60)
    print("Available modes:")
    print("  1. fresh              - Clean install (no existing structure)")
    print("  2. migration          - Migrate existing structure to canonical format")
    print("  3. update             - Update existing framework installation")
    print("  4. hybrid             - Preserve project epics, install framework epics")
    print("  5. canonical_adoption - Adopt canonical structure with intelligent task mapping (RECOMMENDED)")
    
    if recommended_mode:
        rationale = None
        if analysis_report_path and analysis_report_path.exists():
            import json
            try:
                with open(analysis_report_path, 'r', encoding='utf-8') as f:
                    analysis = json.load(f)
                rationale = analysis.get("migration_plan", {}).get("recommendation_rationale")
            except Exception:
                pass
        
        print(f"\n💡 Recommended mode: {recommended_mode}")
        if rationale:
            print(f"   Rationale: {rationale}")
    
    if requested_mode == "auto" and recommended_mode:
        response = input(f"\nUse recommended mode '{recommended_mode}'? (Y/n): ").strip().lower()
        if response in ['', 'y', 'yes']:
            return recommended_mode
    
    while True:
        choice = input("\nSelect mode (1-5) or mode name: ").strip().lower()
        
        mode_map = {
            '1': 'fresh',
            '2': 'migration',
            '3': 'update',
            '4': 'hybrid',
            '5': 'canonical_adoption',
            'fresh': 'fresh',
            'migration': 'migration',
            'update': 'update',
            'hybrid': 'hybrid',
            'canonical_adoption': 'canonical_adoption',
            'canonical': 'canonical_adoption',
            'adopt': 'canonical_adoption'
        }
        
        if choice in mode_map:
            return mode_map[choice]
        
        print("❌ Invalid choice. Please enter 1-5 or mode name.")


def present_migration_plan(analysis_report_path: Path):
    """Present migration plan with recommendations and trade-offs."""
    if not analysis_report_path.exists():
        return
    
    try:
        with open(analysis_report_path, 'r', encoding='utf-8') as f:
            analysis = json.load(f)
        
        plan = analysis.get("migration_plan", {})
        semantic_matches = analysis.get("semantic_matches", [])
        conflicts = analysis.get("conflicts", [])
        
        print("\n📋 Migration Plan Preview")
        print("=" * 60)
        
        # Show semantic matches (all matches shown, no threshold filtering per BR-008/FR-010)
        if semantic_matches:
            print("\n🔍 Semantic Matches Found (all matches processed, no threshold):")
            # Display all matches, categorized for information only (not blocking)
            for match in semantic_matches[:10]:  # Show first 10
                match_type = match.get("match_type", "unknown")
                score = match.get("similarity_score", 0)
                print(f"     Epic {match['user_epic_number']} → Canonical Epic {match['canonical_epic_number']} "
                      f"({score:.1f}%, {match_type})")
            if len(semantic_matches) > 10:
                print(f"     ... and {len(semantic_matches) - 10} more matches")
            
            if len(semantic_matches) > 0:
                print(f"  ℹ️  All {len(semantic_matches)} semantic matches will be processed (threshold removed per BR-008/FR-010)")
                for match in medium_matches[:3]:  # Show first 3
                    print(f"     Epic {match['user_epic_number']} → Canonical Epic {match['canonical_epic_number']} "
                          f"({match['similarity_score']:.1f}%)")
        
        # Show conflicts
        if conflicts:
            high_conflicts = [c for c in conflicts if c.get("severity") == "high"]
            if high_conflicts:
                print(f"\n⚠️  {len(high_conflicts)} high-severity conflicts detected")
        
        # Show recommendation
        recommended_mode = plan.get("recommended_mode")
        rationale = plan.get("recommendation_rationale", "")
        
        if recommended_mode:
            print(f"\n💡 Recommended Mode: {recommended_mode}")
            if rationale:
                print(f"   {rationale}")
        
        # Show trade-offs
        print("\n📊 Mode Comparison:")
        print("  canonical_adoption: Optimal organization, intelligent task mapping, preserves work")
        print("  hybrid:              Preserves project epics, installs framework epics")
        print("  migration:           Converts structure, preserves all work items")
        print("  fresh:               Clean slate, no existing structure")
        
        print("\n" + "=" * 60)
        
    except Exception as e:
        print(f"⚠️  Could not load migration plan: {e}")


def validate_installation(kanban_path: Path, project_root: Path, force: bool = False) -> tuple[bool, str]:
    """Run installation validation and return (should_continue, status)."""
    if InstallationValidator is None:
        print("⚠️  Warning: Validation module not available. Skipping validation.")
        return True, "PARTIAL"
    
    print("\n🔍 Step 3.5: Validating installation...")
    _log("INFO", f"[KANBAN_VALIDATE] Validating installation at {kanban_path}")
    print("=" * 60)
    
    validator = InstallationValidator(kanban_path, project_root)
    is_valid, errors, warnings = validator.validate_all()
    
    if warnings:
        print("\n⚠️  WARNINGS (should be reviewed):")
        for warning in warnings:
            print(f"  {warning}")
    
    if errors:
        print("\n❌ ERRORS (must be fixed before installation):")
        for error in errors:
            print(f"  {error}")
        
        if not force:
            print("\n🚨 Validation failed. Fix errors above or use --force to proceed anyway.")
            response = input("\nProceed despite errors? (yes/no): ").strip().lower()
            if response not in ['yes', 'y']:
                print("Installation cancelled.")
                _log("ERROR", "[KANBAN_VALIDATE] Validation failed before migration/install (user cancelled)")
                print("Final status: CANCELLED")
                return False, "CANCELLED"
        else:
            print("\n⚠️  --force flag set: Proceeding despite validation errors.")
            _log("WARNING", "[KANBAN_VALIDATE] Proceeding despite validation errors due to --force")
            return True, "PARTIAL"
    
    if is_valid and not warnings:
        print("\n✅ Validation passed - no issues found")
        return True, "SUCCESS"
    elif is_valid:
        print("\n✅ Validation passed with warnings")
        _log("INFO", "[KANBAN_VALIDATE] Validation passed with warnings")
        return True, "PARTIAL"
    
    # errors were present and user opted to continue
    return True, "PARTIAL"


def migrate_structure(
    analysis_report: Path,
    kanban_path: Path,
    mode: str,
    dry_run: bool = False,
    force: bool = False
) -> bool:
    """Run migration utility."""
    print(f"\n🔄 Step 4: Migrating structure (mode: {mode})...")
    _log("INFO", f"[KANBAN_MIGRATE] Migrating structure in mode '{mode}'")
    
    cmd = [
        sys.executable,
        "packages/frameworks/kanban/scripts/migrate_structure.py",
        "--analysis-report", str(analysis_report),
        "--kanban-path", str(kanban_path),
        "--mode", mode
    ]
    
    if dry_run:
        cmd.append("--dry-run")
    
    if force:
        cmd.append("--force")
    
    exit_code, stdout, stderr = run_command(cmd)
    
    print(stdout)
    
    if exit_code != 0:
        print(f"❌ Migration failed: {stderr}")
        _log("ERROR", f"[KANBAN_MIGRATE] Migration failed: {stderr}")
        return False
    
    return True


def main():
    parser = argparse.ArgumentParser(
        description="Install Kanban framework with migration support",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  # Interactive installation (recommended)
  python3 install_kanban_framework.py

  # Fresh install (no existing structure)
  python3 install_kanban_framework.py --mode fresh

  # Migration install (with existing structure)
  python3 install_kanban_framework.py --mode migration

  # Dry run (preview changes)
  python3 install_kanban_framework.py --mode migration --dry-run
        """
    )
    parser.add_argument(
        "--mode",
        choices=["fresh", "migration", "update", "hybrid", "canonical_adoption", "auto"],
        default="auto",
        help="Installation mode (default: auto-detect, canonical_adoption recommended for semantic matches)"
    )
    parser.add_argument(
        "--kanban-path",
        type=str,
        default="docs/project-management/kanban",
        help="Path to Kanban directory (default: docs/project-management/kanban)"
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Preview changes without modifying files"
    )
    parser.add_argument(
        "--force",
        action="store_true",
        help="Skip confirmation prompts"
    )
    parser.add_argument(
        "--skip-detection",
        action="store_true",
        help="Skip detection step (use existing detection_report.json)"
    )
    parser.add_argument(
        "--skip-analysis",
        action="store_true",
        help="Skip analysis step (use existing analysis_report.json)"
    )
    
    args = parser.parse_args()
    
    project_root = Path.cwd()
    kanban_path, sourced_from_rw = resolve_kanban_path_arg(project_root, args.kanban_path)
    final_status = "SUCCESS"
    
    print("=" * 60)
    print("Kanban Framework Installation")
    print("=" * 60)
    print(f"📁 Project root: {project_root}")
    print(f"📁 Kanban path: {kanban_path}")
    if sourced_from_rw:
        print("ℹ️  Kanban path sourced from rw-config.yaml kanban_root")
    print(f"🔧 Mode: {args.mode}")
    if args.dry_run:
        print("🔍 DRY RUN MODE - No files will be modified")
    print("=" * 60)
    _log("INFO", f"[KANBAN_MODE] Kanban install starting (mode={args.mode}, kanban_path={kanban_path}, dry_run={args.dry_run})")
    
    # Step 1: Detect existing structure (unless fresh mode or skipped)
    detection_report = None
    if args.mode != "fresh" and not args.skip_detection:
        detection_report = detect_structure(kanban_path, verbose=True)
        if not detection_report:
            print("⚠️  Detection failed or no structure found. Proceeding with fresh install...")
            args.mode = "fresh"
    
    # Step 2: Analyze structure (unless fresh mode or skipped)
    analysis_report = None
    if args.mode != "fresh" and not args.skip_analysis:
        if detection_report:
            analysis_report = analyze_structure(detection_report, verbose=True)
        else:
            # Try to use existing analysis report
            existing_analysis = Path("analysis_report.json")
            if existing_analysis.exists():
                analysis_report = existing_analysis
                print(f"📋 Using existing analysis report: {analysis_report}")
    
    # Step 3: Present migration plan and select installation mode
    if analysis_report and analysis_report.exists():
        present_migration_plan(analysis_report)
    
    if args.mode == "auto":
        args.mode = select_installation_mode(analysis_report, None)
    
    # Step 3.5: Validate installation (before migration)
    should_continue, validation_status = validate_installation(kanban_path, project_root, force=args.force)
    if validation_status == "PARTIAL":
        final_status = "PARTIAL"
    if not should_continue:
        _log("ERROR", "[KANBAN_VALIDATE] Validation failed before migration/install")
        return 1
    
    # Step 4: Migrate/Install
    if args.mode == "fresh":
        print("\n🆕 Fresh install mode: Installing canonical epics and consumer board skeleton...")
        _log("INFO", "[KANBAN_FRESH_INSTALL] Fresh install mode: installing canonical epics and consumer board skeleton")
        # Create a clean consumer board and guide from templates
        create_consumer_board_skeleton(kanban_path, project_root, dry_run=args.dry_run)
        # Install canonical core epics from templates (if helper is available)
        if install_canonical_epics_only is not None:
            result = install_canonical_epics_only(
                kanban_path,
                dry_run=args.dry_run,
                force=args.force,
            )
            if result.get("status") != "completed":
                print("❌ Canonical epic installation did not complete successfully.")
                _log("ERROR", f"[KANBAN_FRESH_INSTALL] Canonical epic installation did not complete successfully: {result}")
                return 1
        else:
            print("⚠️  install_canonical_epics_only helper not available; skipping canonical epic installation.")
            _log("WARNING", "[KANBAN_FRESH_INSTALL] install_canonical_epics_only helper not available; skipping canonical epic installation")
        print("✅ Fresh install complete (canonical epics and consumer board skeleton installed)")
        _log("INFO", "[KANBAN_FRESH_INSTALL] Fresh install complete (canonical epics and consumer board skeleton installed)")
    else:
        if not analysis_report:
            print("❌ Error: Analysis report required for migration/update/hybrid modes")
            return 1
        
        success = migrate_structure(
            analysis_report,
            kanban_path,
            args.mode,
            dry_run=args.dry_run,
            force=args.force
        )
        
        if not success:
            return 1
        
        # Step 5: Post-installation validation
        if not args.dry_run:
            print("\n🔍 Step 5: Post-installation validation...")
            should_continue, validation_status = validate_installation(kanban_path, project_root, force=args.force)
            if validation_status == "PARTIAL":
                final_status = "PARTIAL"
            if not should_continue:
                print("⚠️  Post-installation validation found issues. Please review warnings/errors above.")
                final_status = "FAILED"
                return 1
    
    print("\n" + "=" * 60)
    if final_status == "SUCCESS":
        print("✅ Installation complete!")
    else:
        print("⚠️  Installation completed with follow-up items.")
    print(f"Final status: {final_status}")
    print("=" * 60)
    
    if args.mode != "fresh":
        print("\n📋 Next steps:")
        print("  1. Review migration log in analysis_report.json")
        print("  2. Verify migrated structure")
        print("  3. Continue using Kanban framework")
    
    return 0


if __name__ == "__main__":
    exit(main())

