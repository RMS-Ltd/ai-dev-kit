#!/usr/bin/env python3
"""
Kanban Framework Installation Validation

Validates installation to prevent Epic mashup, canonical conflicts, and other issues.

Part of E6:S06:T07 - Framework Hardening (Phase 2: Installer Validation)

Usage:
    python3 validate_installation.py --kanban-path PATH [--project-root ROOT]
"""

import argparse
import json
import sys
from pathlib import Path
from typing import Dict, List, Optional, Tuple

from contamination_detector import scan_kanban_tree


# Canonical epic range: 1-23
CANONICAL_EPIC_MIN = 1
CANONICAL_EPIC_MAX = 23
PROJECT_SPECIFIC_EPIC_MIN = 24

# Known project-specific epics that should not be in canonical range
KNOWN_PROJECT_SPECIFIC_CONTENT = {
    9: "Book Related Work",  # Epic 9 is canonical "User Management and Authentication"
}


class InstallationValidator:
    """Validates Kanban installation to prevent issues."""
    
    def __init__(self, kanban_path: Path, project_root: Optional[Path] = None):
        self.kanban_path = Path(kanban_path).resolve()
        self.project_root = Path(project_root).resolve() if project_root else self.kanban_path.parent.parent
        self.errors: List[str] = []
        self.warnings: List[str] = []
        
    def validate_all(self) -> Tuple[bool, List[str], List[str]]:
        """Run all validations. Returns (is_valid, errors, warnings)."""
        self.errors = []
        self.warnings = []
        
        # Run all validations
        self.validate_epic_numbering()
        self.validate_epic_mashup()
        self.validate_canonical_conflicts()
        self.validate_version_file_path()
        self.validate_kb_structure()
        self.check_ai_dev_kit_kanban_copy()
        
        is_valid = len(self.errors) == 0
        return is_valid, self.errors, self.warnings
    
    def validate_epic_numbering(self) -> None:
        """Validate Epic numbering (Epic 1-23 canonical, Epic 24+ project-specific)."""
        epic_dirs = list(self.kanban_path.glob("epics/Epic-*"))
        
        for epic_dir in epic_dirs:
            try:
                epic_num_str = epic_dir.name.replace("Epic-", "")
                epic_num = int(epic_num_str)
                
                # Check if epic is in canonical range but contains project-specific content
                if CANONICAL_EPIC_MIN <= epic_num <= CANONICAL_EPIC_MAX:
                    # Validate this is actually canonical content
                    epic_doc = epic_dir / f"Epic-{epic_num}.md"
                    if epic_doc.exists():
                        content = epic_doc.read_text(encoding='utf-8')
                        # Check for known project-specific content patterns
                        if epic_num in KNOWN_PROJECT_SPECIFIC_CONTENT:
                            expected_canonical = KNOWN_PROJECT_SPECIFIC_CONTENT[epic_num]
                            if expected_canonical in content:
                                # This is a known project-specific epic in canonical range - ERROR
                                self.errors.append(
                                    f"❌ CRITICAL: Epic {epic_num} '{expected_canonical}' is in canonical range (1-23) "
                                    f"but contains project-specific content. Canonical Epic {epic_num} is "
                                    f"'User Management and Authentication'. This epic must be renamed to Epic 24+ "
                                    f"(project-specific range)."
                                )
                            # Check for "Book Related Work" which is the wrong Epic 9
                            if "Book Related Work" in content and epic_num == 9:
                                self.errors.append(
                                    f"❌ CRITICAL: Epic 9 contains 'Book Related Work' but canonical Epic 9 is "
                                    f"'User Management and Authentication'. This is the root cause of Epic mashup. "
                                    f"Rename Epic 9 to Epic 24+ (project-specific range)."
                                )
                
                # Validate project-specific epics are >= 24
                if epic_num < PROJECT_SPECIFIC_EPIC_MIN and epic_num > CANONICAL_EPIC_MAX:
                    # This shouldn't happen, but check anyway
                    self.warnings.append(
                        f"⚠️  Epic {epic_num} is outside canonical range (1-23) but below project-specific minimum (24). "
                        f"This may indicate an error."
                    )
                    
            except ValueError:
                # Epic number not parseable, skip
                continue
    
    def validate_epic_mashup(self) -> None:
        """Detect Epic mashup (copying ai-dev-kit's actual Kanban instead of templates)."""
        epic_dirs = list(self.kanban_path.glob("epics/Epic-*"))
        
        # Check for Epic 24 "Book Related Work" which indicates ai-dev-kit's actual Kanban was copied
        for epic_dir in epic_dirs:
            try:
                epic_num_str = epic_dir.name.replace("Epic-", "")
                epic_num = int(epic_num_str)
                
                if epic_num == 24:
                    epic_doc = epic_dir / f"Epic-{epic_num}.md"
                    if epic_doc.exists():
                        content = epic_doc.read_text(encoding='utf-8')
                        if "Book Related Work" in content:
                            self.warnings.append(
                                f"⚠️  WARNING: Epic 24 'Book Related Work' detected. This suggests ai-dev-kit's actual "
                                f"Kanban was copied. Projects should use canonical templates from "
                                f"`packages/frameworks/kanban/templates/`, not copy ai-dev-kit's actual Kanban structure. "
                                f"This may cause confusion with project-specific vs canonical epics."
                            )
                
                # Check for Epic 9 with wrong content (should have been fixed, but validate anyway)
                if epic_num == 9:
                    epic_doc = epic_dir / f"Epic-{epic_num}.md"
                    if epic_doc.exists():
                        content = epic_doc.read_text(encoding='utf-8')
                        if "Book Related Work" in content:
                            self.errors.append(
                                f"❌ CRITICAL: Epic 9 contains 'Book Related Work'. This indicates Epic mashup. "
                                f"Canonical Epic 9 is 'User Management and Authentication'. "
                                f"This epic must be renamed to Epic 24+ (project-specific range)."
                            )
                            
            except ValueError:
                continue
    
    def validate_canonical_conflicts(self) -> None:
        """Validate canonical vs project-specific epic conflicts."""
        epic_dirs = list(self.kanban_path.glob("epics/Epic-*"))
        epic_numbers = []
        
        for epic_dir in epic_dirs:
            try:
                epic_num_str = epic_dir.name.replace("Epic-", "")
                epic_num = int(epic_num_str)
                epic_numbers.append(epic_num)
            except ValueError:
                continue
        
        # Check for duplicates
        if len(epic_numbers) != len(set(epic_numbers)):
            duplicates = [e for e in epic_numbers if epic_numbers.count(e) > 1]
            self.errors.append(
                f"❌ Duplicate Epic numbers detected: {set(duplicates)}. Each Epic number must be unique."
            )
        
        # Check for project-specific epic in canonical range conflicts
        canonical_epics = [e for e in epic_numbers if CANONICAL_EPIC_MIN <= e <= CANONICAL_EPIC_MAX]
        project_epics = [e for e in epic_numbers if e >= PROJECT_SPECIFIC_EPIC_MIN]
        
        # Warn if mixing canonical and project-specific without clear separation
        if canonical_epics and project_epics:
            # This is fine, but check that canonical epics don't have project-specific content
            for epic_num in canonical_epics:
                epic_dir = self.kanban_path / f"epics/Epic-{epic_num}"
                epic_doc = epic_dir / f"Epic-{epic_num}.md"
                if epic_doc.exists():
                    content = epic_doc.read_text(encoding='utf-8')
                    # Check for project-specific indicators
                    if any(project_content in content for project_content in ["Book Related Work", "ai-dev-kit specific"]):
                        self.errors.append(
                            f"❌ Epic {epic_num} is in canonical range but contains project-specific content. "
                            f"Rename to Epic 24+ (project-specific range)."
                        )
    
    def validate_version_file_path(self) -> None:
        """Validate version file path follows canonical structure."""
        # Check for legacy paths that should be migrated
        legacy_paths = [
            self.project_root / "src" / "fynd_deals" / "version.py",
        ]
        
        canonical_paths = [
            self.project_root / "src" / "{project}" / "version.py",  # Template
        ]
        
        # Check if version file exists
        version_files = list(self.project_root.glob("**/version.py"))
        
        if not version_files:
            self.warnings.append(
                "⚠️  No version.py file found. Version file should be at canonical path: "
                "src/{project}/version.py"
            )
        else:
            for version_file in version_files:
                # Check if it's a legacy path
                if any(legacy_path.parent == version_file.parent for legacy_path in legacy_paths if legacy_path.parent.exists()):
                    self.warnings.append(
                        f"⚠️  Version file at legacy path: {version_file.relative_to(self.project_root)}. "
                        f"Consider migrating to canonical path: src/{{project}}/version.py"
                    )
    
    def validate_kb_structure(self) -> None:
        """Validate KB structure follows canonical format."""
        # Check for required directories
        required_dirs = [
            "epics",
        ]
        
        for req_dir in required_dirs:
            dir_path = self.kanban_path / req_dir
            if not dir_path.exists():
                self.errors.append(
                    f"❌ Required directory missing: {dir_path.relative_to(self.kanban_path)}"
                )
        
        # Check for kanban board files
        board_files = [
            "kboard.md",
            "kanban-structure.md",
            "_index.md",
        ]
        
        found_boards = [f for f in board_files if (self.kanban_path / f).exists()]
        if not found_boards:
            self.warnings.append(
                "⚠️  No kanban board files found (kboard.md, kanban-structure.md, or _index.md). "
                "Board files are recommended for project management."
            )
    
    def check_ai_dev_kit_kanban_copy(self) -> None:
        """Check if ai-dev-kit's actual Kanban was copied (should use templates instead)."""
        # Check for indicators that ai-dev-kit's actual Kanban was copied
        indicators = [
            ("Epic-24", "Book Related Work"),  # Epic 24 is ai-dev-kit specific
        ]
        
        for epic_pattern, content_pattern in indicators:
            epic_dirs = list(self.kanban_path.glob(f"epics/{epic_pattern}"))
            for epic_dir in epic_dirs:
                epic_doc = epic_dir / f"{epic_pattern.replace('Epic-', 'Epic-')}.md"
                if epic_doc.exists():
                    content = epic_doc.read_text(encoding='utf-8')
                    if content_pattern in content:
                        self.warnings.append(
                            f"⚠️  WARNING: Detected potential copy of ai-dev-kit's actual Kanban (Epic 24 'Book Related Work'). "
                            f"Projects should use canonical templates from `packages/frameworks/kanban/templates/` instead of "
                            f"copying ai-dev-kit's actual Kanban structure. The actual Kanban contains project-specific epics "
                            f"that may not be relevant to your project."
                        )

        # Integrate with contamination detector for BR-037
        findings = scan_kanban_tree(self.kanban_path)
        contaminated = [f for f in findings if f.classification == "contaminated"]
        if contaminated:
            self.errors.append(
                f"❌ Detected {len(contaminated)} contaminated Kanban file(s). "
                f"Run remediate_contamination.py to archive or delete them safely."
            )


def main():
    parser = argparse.ArgumentParser(
        description="Validate Kanban framework installation",
        formatter_class=argparse.RawDescriptionHelpFormatter
    )
    parser.add_argument(
        "--kanban-path",
        type=str,
        default="docs/project-management/kanban",
        help="Path to Kanban directory"
    )
    parser.add_argument(
        "--project-root",
        type=str,
        help="Path to project root (default: parent of kanban-path parent)"
    )
    parser.add_argument(
        "--json",
        action="store_true",
        help="Output results as JSON"
    )
    
    args = parser.parse_args()
    
    kanban_path = Path(args.kanban_path).resolve()
    project_root = Path(args.project_root).resolve() if args.project_root else None
    
    if not kanban_path.exists():
        print(f"❌ Error: Kanban path does not exist: {kanban_path}", file=sys.stderr)
        return 1
    
    validator = InstallationValidator(kanban_path, project_root)
    is_valid, errors, warnings = validator.validate_all()
    
    if args.json:
        output = {
            "valid": is_valid,
            "errors": errors,
            "warnings": warnings,
            "kanban_path": str(kanban_path),
            "project_root": str(validator.project_root),
        }
        print(json.dumps(output, indent=2))
    else:
        print("=" * 60)
        print("Kanban Framework Installation Validation")
        print("=" * 60)
        print(f"📁 Kanban path: {kanban_path}")
        print(f"📁 Project root: {validator.project_root}")
        print()
        
        if errors:
            print("❌ ERRORS (must be fixed):")
            for error in errors:
                print(f"  {error}")
            print()
        
        if warnings:
            print("⚠️  WARNINGS (should be reviewed):")
            for warning in warnings:
                print(f"  {warning}")
            print()
        
        if is_valid:
            if warnings:
                print("✅ Validation passed with warnings")
                return 0
            else:
                print("✅ Validation passed - no issues found")
                return 0
        else:
            print("❌ Validation failed - errors must be fixed")
            return 1
    
    return 0 if is_valid else 1


if __name__ == "__main__":
    exit(main())

