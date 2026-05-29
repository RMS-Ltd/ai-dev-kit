#!/usr/bin/env python3
"""
Canonical Steps Validation Script

This script validates that all references to RW steps across the codebase
match the canonical definition, preventing drift and duplication.

Usage:
    python validate_canonical_steps.py [--verbose] [--fix]
"""

import sys
import argparse
import re
from pathlib import Path
from typing import List, Dict, Any, Tuple, Optional
from dataclasses import dataclass

from canonical_steps import (
    get_canonical_steps, get_execution_paths, get_step_name,
    get_step_description, list_triggers
)


@dataclass
class ValidationIssue:
    """Represents a validation issue found."""
    file_path: str
    line_number: int
    issue_type: str
    description: str
    severity: str  # "error", "warning", "info"
    suggested_fix: Optional[str] = None


class CanonicalStepsValidator:
    """Validates canonical steps consistency across the codebase."""
    
    def __init__(self, project_root: Path):
        self.project_root = project_root
        self.issues: List[ValidationIssue] = []
        self.canonical_steps = get_canonical_steps()
        self.execution_paths = get_execution_paths()
    
    def validate_all(self) -> List[ValidationIssue]:
        """Run all validation checks."""
        self.issues = []
        
        # Validate workflow orchestrator
        self._validate_workflow_orchestrator()
        
        # Validate cursor rules
        self._validate_cursor_rules()
        
        # Validate README
        self._validate_readme()
        
        # Validate release workflow YAML
        self._validate_release_workflow_yaml()
        
        # Validate test files
        self._validate_test_files()
        
        return self.issues
    
    def _validate_workflow_orchestrator(self):
        """Validate workflow orchestrator uses canonical steps."""
        file_path = self.project_root / "packages/frameworks/workflow mgt/scripts/workflow_orchestrator.py"
        
        if not file_path.exists():
            self.issues.append(ValidationIssue(
                str(file_path), 0, "missing_file",
                "workflow_orchestrator.py not found",
                "error"
            ))
            return
        
        content = file_path.read_text(encoding='utf-8')
        
        # Check for canonical steps import
        if "from canonical_steps import" not in content:
            self.issues.append(ValidationIssue(
                str(file_path), 1, "missing_import",
                "workflow_orchestrator.py should import from canonical_steps",
                "error",
                "Add: from canonical_steps import ..."
            ))
        
        # Check for hardcoded step lists
        if "list(range(1, 18))" in content or "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]" in content:
            self.issues.append(ValidationIssue(
                str(file_path), 1, "hardcoded_steps",
                "Found hardcoded step list, should use canonical definition",
                "error",
                "Replace with get_execution_path_for_trigger()"
            ))
    
    def _validate_cursor_rules(self):
        """Validate cursor rules match canonical steps."""
        file_path = self.project_root / "packages/frameworks/workflow mgt/cursorrules-rw-trigger-section.md"
        
        if not file_path.exists():
            return
        
        content = file_path.read_text(encoding='utf-8')
        lines = content.split('\n')
        
        # Check step 13 definition
        step_13_pattern = r'Step 13[:\s]+([^\n]+)'
        for i, line in enumerate(lines, 1):
            match = re.search(step_13_pattern, line, re.IGNORECASE)
            if match:
                step_def = match.group(1).strip()
                canonical_def = get_step_name(13)
                if "Housekeeping" not in step_def:
                    self.issues.append(ValidationIssue(
                        str(file_path), i, "step_definition_mismatch",
                        f"Step 13 definition missing 'Housekeeping': '{step_def}'",
                        "error",
                        f"Should be: {canonical_def}"
                    ))
    
    def _validate_readme(self):
        """Validate README matches canonical steps."""
        file_path = self.project_root / "packages/frameworks/workflow mgt/README.md"
        
        if not file_path.exists():
            return
        
        content = file_path.read_text(encoding='utf-8')
        lines = content.split('\n')
        
        # Check for step 13 definition
        for i, line in enumerate(lines, 1):
            if "Step 13:" in line:
                if "Housekeeping" not in line:
                    self.issues.append(ValidationIssue(
                        str(file_path), i, "step_definition_mismatch",
                        "README Step 13 missing 'Housekeeping'",
                        "warning",
                        "Update to include 'Housekeeping'"
                    ))
        
        # Check total step count references
        if "17 steps" not in content and "13 steps" in content:
            self.issues.append(ValidationIssue(
                str(file_path), 1, "step_count_mismatch",
                "README may reference old step count (13 instead of 17)",
                "warning",
                "Update step count references to 17"
            ))
    
    def _validate_release_workflow_yaml(self):
        """Validate release-workflow.yaml matches canonical steps."""
        file_path = self.project_root / "packages/frameworks/workflow mgt/workflows/release-workflow/release-workflow.yaml"
        
        if not file_path.exists():
            return
        
        content = file_path.read_text(encoding='utf-8')
        
        # Check that all canonical steps are represented
        for step_num, step_def in self.canonical_steps.items():
            step_pattern = f"step-{step_num}:"
            if step_pattern not in content:
                self.issues.append(ValidationIssue(
                    str(file_path), 1, "missing_step",
                    f"Step {step_num} ({step_def.name}) not found in release-workflow.yaml",
                    "warning",
                    f"Add step-{step_num} definition"
                ))
    
    def _validate_test_files(self):
        """Validate test files use canonical steps."""
        test_dir = self.project_root / "packages/frameworks/workflow mgt/scripts"
        
        if not test_dir.exists():
            return
        
        for test_file in test_dir.glob("test_*.py"):
            content = test_file.read_text(encoding='utf-8')
            
            # Check for hardcoded step lists
            if "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]" in content:
                self.issues.append(ValidationIssue(
                    str(test_file), 1, "hardcoded_steps",
                    "Test file contains hardcoded step list",
                    "warning",
                    "Use canonical_steps module instead"
                ))
    
    def generate_report(self, verbose: bool = False) -> str:
        """Generate validation report."""
        if not self.issues:
            return "✅ All validations passed! No issues found.\n"
        
        report = []
        report.append(f"🔍 Validation Report - {len(self.issues)} issues found\n")
        
        # Group by severity
        errors = [i for i in self.issues if i.severity == "error"]
        warnings = [i for i in self.issues if i.severity == "warning"]
        infos = [i for i in self.issues if i.severity == "info"]
        
        if errors:
            report.append(f"❌ ERRORS ({len(errors)}):")
            for issue in errors:
                report.append(f"  📁 {issue.file_path}:{issue.line_number}")
                report.append(f"     {issue.description}")
                if issue.suggested_fix:
                    report.append(f"     💡 Fix: {issue.suggested_fix}")
                report.append("")
        
        if warnings:
            report.append(f"⚠️  WARNINGS ({len(warnings)}):")
            for issue in warnings:
                report.append(f"  📁 {issue.file_path}:{issue.line_number}")
                report.append(f"     {issue.description}")
                if issue.suggested_fix:
                    report.append(f"     💡 Fix: {issue.suggested_fix}")
                report.append("")
        
        if infos and verbose:
            report.append(f"ℹ️  INFO ({len(infos)}):")
            for issue in infos:
                report.append(f"  📁 {issue.file_path}:{issue.line_number}")
                report.append(f"     {issue.description}")
                if issue.suggested_fix:
                    report.append(f"     💡 Fix: {issue.suggested_fix}")
                report.append("")
        
        return "\n".join(report)
    
    def fix_issues(self):
        """Attempt to automatically fix issues."""
        fixed_count = 0
        
        for issue in self.issues:
            if issue.issue_type == "step_definition_mismatch" and "Housekeeping" in issue.suggested_fix:
                # Fix step 13 definition
                file_path = Path(issue.file_path)
                if file_path.exists():
                    content = file_path.read_text(encoding='utf-8')
                    lines = content.split('\n')
                    
                    # Update the line with correct definition
                    if issue.line_number <= len(lines):
                        lines[issue.line_number - 1] = issue.suggested_fix
                        file_path.write_text('\n'.join(lines), encoding='utf-8')
                        fixed_count += 1
        
        return fixed_count


def main():
    """Main validation entry point."""
    parser = argparse.ArgumentParser(description="Validate canonical steps consistency")
    parser.add_argument("--verbose", "-v", action="store_true", help="Show detailed output")
    parser.add_argument("--fix", action="store_true", help="Attempt to fix issues automatically")
    parser.add_argument("--project-root", type=Path, default=Path.cwd(), 
                       help="Project root directory (default: current directory)")
    
    args = parser.parse_args()
    
    # Run validation
    validator = CanonicalStepsValidator(args.project_root)
    issues = validator.validate_all()
    
    # Generate report
    report = validator.generate_report(args.verbose)
    print(report)
    
    # Fix issues if requested
    if args.fix:
        print("🔧 Attempting to fix issues...")
        fixed_count = validator.fix_issues()
        if fixed_count > 0:
            print(f"✅ Fixed {fixed_count} issues automatically")
        else:
            print("ℹ️  No issues could be fixed automatically")
    
    # Exit with error code if there are errors
    error_count = len([i for i in issues if i.severity == "error"])
    if error_count > 0:
        print(f"\n❌ Validation failed with {error_count} error(s)")
        return 1
    else:
        print("\n✅ Validation completed successfully")
        return 0


if __name__ == "__main__":
    sys.exit(main())
