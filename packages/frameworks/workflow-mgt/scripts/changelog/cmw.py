#!/usr/bin/env python3
"""
Changelog Management Workflow (CMW) - Main Orchestration Script

Deterministic workflow for automated changelog maintenance:
1. Analyze changelog state
2. Validate format and ordering
3. Detect and remove duplicates
3.5. Fix ordering (sort by canonical version number)
4. Identify entries for archival
5. Archive entries
6. Validate remaining changelog
7. Stage files (optional, via git)
8. Report summary

Usage:
    python cmw.py [--dry-run] [--no-git] [--config <config_file>]
"""

import argparse
import sys
import subprocess
from pathlib import Path
from typing import Dict, Optional

# Add scripts directory to path
scripts_path = Path(__file__).parent.parent
if str(scripts_path) not in sys.path:
    sys.path.insert(0, str(scripts_path))

from changelog.changelog_utils import load_rw_config, get_main_changelog_path, get_archive_changelog_path, get_archival_policy, extract_changelog_entries
from changelog.analyze_changelog_state import analyze_changelog_state
from changelog.remove_duplicates import remove_duplicates
from changelog.identify_archival_entries import identify_archival_entries
from changelog.archive_entries import archive_entries


def run_git_stage(changelog_path: Path, archive_path: Path) -> bool:
    """Stage changelog files in git."""
    try:
        subprocess.run(['git', 'add', str(changelog_path)], check=True, capture_output=True)
        if archive_path.exists():
            subprocess.run(['git', 'add', str(archive_path)], check=True, capture_output=True)
        return True
    except subprocess.CalledProcessError as e:
        print(f"⚠️  Warning: Failed to stage files in git: {e}", file=sys.stderr)
        return False




def main():
    """Main CMW orchestration function."""
    parser = argparse.ArgumentParser(description="Changelog Management Workflow (CMW)")
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Show what would be done without modifying files"
    )
    parser.add_argument(
        "--no-git",
        action="store_true",
        help="Skip git staging step"
    )
    parser.add_argument(
        "--config",
        type=Path,
        help="Path to rw-config.yaml (optional)"
    )
    args = parser.parse_args()
    
    try:
        project_root = Path.cwd()
        config = None
        if args.config:
            import yaml
            with open(args.config, 'r') as f:
                config = yaml.safe_load(f)
        else:
            config = load_rw_config(project_root)
        
        main_changelog_path = get_main_changelog_path(config)
        archive_changelog_path = get_archive_changelog_path(config)
        
        print("📋 Changelog Management Workflow (CMW)")
        print("=" * 60)
        
        # Step 1: Analyze changelog state
        print("\n📊 Step 1: Analyzing changelog state...")
        analysis = analyze_changelog_state(config)
        print(f"  Line count: {analysis['line_count']}")
        print(f"  Entry count: {analysis['entry_count']}")
        print(f"  Format: {analysis['format_compliance']['format_type']}")
        
        # Step 2: Validate format and ordering
        print("\n✅ Step 2: Validating format and ordering...")
        try:
            from validation.validate_changelog_format import validate_changelog_file
            is_valid, errors, warnings = validate_changelog_file(main_changelog_path)
            if not is_valid:
                print(f"  ⚠️  Format/ordering issues found: {len(errors)}")
                for error in errors[:3]:
                    print(f"    - {error}")
                if len(errors) > 3:
                    print(f"    ... and {len(errors) - 3} more")
            else:
                print("  ✅ Format and ordering valid")
        except Exception as e:
            print(f"  ⚠️  Could not validate: {e}")
        
        # Step 3: Detect and remove duplicates
        print("\n🔍 Step 3: Detecting and removing duplicates...")
        if not main_changelog_path.exists():
            print(f"  ❌ Changelog file not found: {main_changelog_path}")
            return 1
        
        main_content = main_changelog_path.read_text(encoding='utf-8')
        new_content, removed_versions, removed_count = remove_duplicates(main_content, keep_first=True)
        
        if removed_count > 0:
            print(f"  🔍 Found {removed_count} duplicate(s): {', '.join(removed_versions[:5])}")
            if not args.dry_run:
                main_changelog_path.write_text(new_content, encoding='utf-8')
                main_content = new_content
                print(f"  ✅ Removed duplicates")
            else:
                print(f"  🔍 DRY RUN: Would remove duplicates")
        else:
            print("  ✅ No duplicates found")
        
        # Step 3.5: Fix ordering
        print("\n🔧 Step 3.5: Fixing changelog ordering...")
        if not args.dry_run:
            from changelog.fix_ordering import fix_changelog_ordering
            from validation.validate_changelog_format import detect_changelog_format
            
            format_type = detect_changelog_format(main_content)
            fixed_content = fix_changelog_ordering(main_content, format_type)
            
            if fixed_content != main_content:
                main_changelog_path.write_text(fixed_content, encoding='utf-8')
                main_content = fixed_content
                print("  ✅ Fixed changelog ordering")
            else:
                print("  ✅ Changelog already correctly ordered")
        else:
            print("  🔍 DRY RUN: Would fix ordering")
        
        # Step 4: Identify entries for archival
        print("\n📦 Step 4: Identifying entries for archival...")
        entries = extract_changelog_entries(main_content)
        policy = get_archival_policy(config)
        total_lines = len(main_content.split('\n'))
        
        entries_to_archive, metadata = identify_archival_entries(entries, policy, total_lines)
        
        if entries_to_archive:
            print(f"  📦 {len(entries_to_archive)} entries eligible for archival")
            print(f"  Criteria met: {', '.join(metadata['criteria_met'])}")
        else:
            print("  ✅ No entries need archiving")
        
        # Step 5: Archive entries
        if entries_to_archive:
            print("\n📦 Step 5: Archiving entries...")
            if not args.dry_run:
                # Ensure archive directory exists
                archive_changelog_path.parent.mkdir(parents=True, exist_ok=True)
                
                archive_content = archive_changelog_path.read_text(encoding='utf-8') if archive_changelog_path.exists() else ""
                new_main_content, new_archive_content = archive_entries(
                    entries_to_archive,
                    main_content,
                    archive_content
                )
                
                main_changelog_path.write_text(new_main_content, encoding='utf-8')
                archive_changelog_path.write_text(new_archive_content, encoding='utf-8')
                print(f"  ✅ Archived {len(entries_to_archive)} entries")
            else:
                print(f"  🔍 DRY RUN: Would archive {len(entries_to_archive)} entries")
        else:
            print("\n📦 Step 5: Skipping archival (no entries to archive)")
        
        # Step 6: Validate remaining changelog
        print("\n✅ Step 6: Validating remaining changelog...")
        if not args.dry_run:
            try:
                from validation.validate_changelog_format import validate_changelog_file
                is_valid, errors, warnings = validate_changelog_file(main_changelog_path)
                if is_valid:
                    print("  ✅ Remaining changelog valid")
                else:
                    print(f"  ⚠️  Validation issues: {len(errors)}")
            except Exception as e:
                print(f"  ⚠️  Could not validate: {e}")
        else:
            print("  🔍 DRY RUN: Skipping validation")
        
        # Step 7: Stage files (if not dry-run and git enabled)
        if not args.dry_run and not args.no_git:
            print("\n📝 Step 7: Staging files...")
            if run_git_stage(main_changelog_path, archive_changelog_path):
                print("  ✅ Files staged")
            else:
                print("  ⚠️  Failed to stage files (non-fatal)")
        elif args.dry_run:
            print("\n📝 Step 7: DRY RUN: Would stage files")
        else:
            print("\n📝 Step 7: Skipping git staging (--no-git)")
        
        # Step 8: Report summary
        print("\n📊 Step 8: Summary")
        print("=" * 60)
        print(f"  Original line count: {analysis['line_count']}")
        if not args.dry_run and entries_to_archive:
            new_analysis = analyze_changelog_state(config)
            print(f"  New line count: {new_analysis['line_count']}")
            print(f"  Reduction: {analysis['line_count'] - new_analysis['line_count']} lines")
        print(f"  Duplicates removed: {removed_count}")
        print(f"  Entries archived: {len(entries_to_archive)}")
        print(f"  Status: {'DRY RUN' if args.dry_run else 'COMPLETE'}")
        
        print("\n✅ CMW execution complete!")
        return 0
    
    except Exception as e:
        print(f"\n❌ Error: {e}", file=sys.stderr)
        import traceback
        traceback.print_exc()
        return 1


if __name__ == "__main__":
    sys.exit(main())

