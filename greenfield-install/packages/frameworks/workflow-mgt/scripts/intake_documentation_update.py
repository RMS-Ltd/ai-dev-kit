#!/usr/bin/env python3
"""
Intake Documentation Update Component

Updates FR/BR/UXR documents with intake decision results, status, version markers, and Kanban links.

Part of Epic 2, Story 11, Task 4: Implement Intake Documentation Updates.

Usage:
    from intake_documentation_update import IntakeDocumentationUpdate
    
    doc_update = IntakeDocumentationUpdate(config)
    result = doc_update.update_document(fr_br_path, intake_decision, created_tasks, version_marker)
"""

import sys
import re
from pathlib import Path
from typing import Dict, List, Optional, Tuple
from dataclasses import dataclass
from datetime import datetime

# Import intake components
try:
    scripts_path = Path(__file__).parent
    if str(scripts_path) not in sys.path:
        sys.path.insert(0, str(scripts_path))
    
    from intake_decision_flow import IntakeDecision
except ImportError as e:
    print(f"⚠️  Warning: Could not import intake_decision_flow: {e}")
    raise


@dataclass
class IntakeDocumentationUpdateResult:
    """Result from intake documentation update."""
    success: bool
    updated_fields: List[str]  # List of fields that were updated
    errors: List[str]
    warnings: List[str]
    explanation: str


class IntakeDocumentationUpdate:
    """Documentation update component for intake workflow."""
    
    def __init__(self, config: Optional[Dict] = None):
        """
        Initialize intake documentation update.
        
        Args:
            config: Configuration dict (from intake-workflow.yaml)
        """
        self.config = config or {}
        
        # Configuration
        intake_status_config = self.config.get('intake_status', {})
        self.default_status = intake_status_config.get('default', 'ACCEPTED')
        self.allowed_statuses = intake_status_config.get('allowed_values', 
            ['ACCEPTED', 'PENDING', 'REJECTED', 'DEFERRED'])
        
        version_config = self.config.get('version_marker', {})
        self.version_format = version_config.get('format', 'v{rc}.{epic}.{story}.{task}+{build}')
        self.build_zero_for_intake = version_config.get('build_zero_for_intake', True)
    
    def update_document(
        self,
        fr_br_path: Path,
        intake_decision: IntakeDecision,
        created_tasks: List,  # List of CreatedTask objects from E4:S10
        version_marker: Optional[str] = None
    ) -> IntakeDocumentationUpdateResult:
        """
        Update FR/BR/UXR document with intake decision results.
        
        Args:
            fr_br_path: Path to FR/BR/UXR document
            intake_decision: Intake decision from decision flow analysis
            created_tasks: List of created tasks (from T03)
            version_marker: Version marker assigned (from Step 6)
        
        Returns:
            IntakeDocumentationUpdateResult with update status
        """
        errors = []
        warnings = []
        explanation_parts = []
        updated_fields = []
        
        if not fr_br_path.exists():
            errors.append(f"FR/BR/UXR document not found: {fr_br_path}")
            return IntakeDocumentationUpdateResult(
                success=False,
                updated_fields=[],
                errors=errors,
                warnings=warnings,
                explanation="❌ Document not found"
            )
        
        try:
            # Read document
            content = fr_br_path.read_text(encoding='utf-8')
            original_content = content
            
            explanation_parts.append(f"📄 Updating document: {fr_br_path.name}")
            
            # Update Status field (in frontmatter or header)
            content, status_updated = self._update_status_field(content, intake_decision.intake_status)
            if status_updated:
                updated_fields.append('Status')
                explanation_parts.append(f"✅ Updated Status: {intake_decision.intake_status}")
            
            # Update or create Intake Decision section
            content, decision_updated = self._update_intake_decision_section(
                content,
                intake_decision,
                created_tasks,
                version_marker
            )
            if decision_updated:
                updated_fields.append('Intake Decision')
                explanation_parts.append("✅ Updated Intake Decision section")
            
            # Update Kanban links
            if created_tasks:
                content, links_updated = self._update_kanban_links(content, created_tasks)
                if links_updated:
                    updated_fields.append('Kanban Links')
                    explanation_parts.append(f"✅ Updated Kanban links ({len(created_tasks)} tasks)")
            
            # Write updated content
            if content != original_content:
                fr_br_path.write_text(content, encoding='utf-8')
                explanation_parts.append("✅ Document updated successfully")
            else:
                warnings.append("No changes made to document")
                explanation_parts.append("⚠️  No changes detected")
            
            success = len(errors) == 0
            
            return IntakeDocumentationUpdateResult(
                success=success,
                updated_fields=updated_fields,
                errors=errors,
                warnings=warnings,
                explanation="\n".join(explanation_parts)
            )
            
        except Exception as e:
            errors.append(f"Document update failed: {str(e)}")
            explanation_parts.append(f"❌ Update exception: {str(e)}")
            import traceback
            traceback.print_exc()
            
            return IntakeDocumentationUpdateResult(
                success=False,
                updated_fields=updated_fields,
                errors=errors,
                warnings=warnings,
                explanation="\n".join(explanation_parts)
            )
    
    def _update_status_field(self, content: str, intake_status: str) -> Tuple[str, bool]:
        """
        Update Status field in document.
        
        Returns:
            (updated_content, was_updated)
        """
        # Validate status
        if intake_status not in self.allowed_statuses:
            # Use default if invalid
            intake_status = self.default_status
        
        # Pattern 1: Status in frontmatter
        frontmatter_status_pattern = r'(\*\*Status:\*\*)\s+(\w+)'
        match = re.search(frontmatter_status_pattern, content)
        if match:
            updated_content = content[:match.start()] + \
                f"{match.group(1)} {intake_status}" + \
                content[match.end():]
            return updated_content, True
        
        # Pattern 2: Status in header section (after frontmatter)
        header_status_pattern = r'(\*\*Status:\*\*)\s+(\w+)'
        match = re.search(header_status_pattern, content, re.MULTILINE)
        if match:
            updated_content = content[:match.start()] + \
                f"{match.group(1)} {intake_status}" + \
                content[match.end():]
            return updated_content, True
        
        # Pattern 3: Add Status field if missing (after Type field)
        type_pattern = r'(\*\*Type:\*\*.*?\n)'
        match = re.search(type_pattern, content)
        if match:
            updated_content = content[:match.end()] + \
                f"**Status:** {intake_status}  \n" + \
                content[match.end():]
            return updated_content, True
        
        return content, False
    
    def _update_intake_decision_section(
        self,
        content: str,
        intake_decision: IntakeDecision,
        created_tasks: List,
        version_marker: Optional[str]
    ) -> Tuple[str, bool]:
        """
        Update or create Intake Decision section.
        
        Returns:
            (updated_content, was_updated)
        """
        intake_date = datetime.now().strftime('%Y-%m-%d')
        
        # Build assigned epic/story/task string
        assigned_parts = []
        if intake_decision.epic_number > 0:
            assigned_parts.append(f"Epic {intake_decision.epic_number}")
        if intake_decision.story_number:
            assigned_parts.append(f"Story {intake_decision.story_number}")
        if intake_decision.task_number:
            assigned_parts.append(f"Task {intake_decision.task_number}")
        assigned_str = ", ".join(assigned_parts) if assigned_parts else "TBD"
        
        # Build task links
        task_links = []
        for task in created_tasks:
            task_id = getattr(task, 'task_id', None)
            task_path = getattr(task, 'task_path', None)
            if task_id and task_path:
                # Create relative path
                rel_path = task_path
                task_links.append(f"- [{task_id}]({rel_path})")
        
        # Build version marker string
        version_str = version_marker if version_marker else intake_decision.version_marker or "TBD"
        
        # Build decision section content
        decision_section = f"""## Intake Decision

**Intake Status:** {intake_decision.intake_status}  
**Intake Date:** {intake_date}  
**Assigned Epic/Story/Task:** {assigned_str}  
**Version Marker:** {version_str}  

**Decision Flow:**
{intake_decision.explanation}

**Reasoning:**
"""
        for reason in intake_decision.reasoning:
            decision_section += f"- {reason}\n"
        
        if task_links:
            decision_section += "\n**Kanban Links:**\n"
            decision_section += "\n".join(task_links) + "\n"
        
        if intake_decision.requires_manual_review:
            decision_section += "\n**⚠️ Manual Review Required:** This intake decision requires manual review.\n"
        
        # Check if Intake Decision section exists
        intake_decision_pattern = r'(## Intake Decision\n.*?)(?=\n##|\n---|\Z)'
        match = re.search(intake_decision_pattern, content, re.DOTALL)
        
        if match:
            # Update existing section
            updated_content = content[:match.start()] + decision_section.rstrip() + "\n\n" + content[match.end():]
            return updated_content, True
        else:
            # Add new section before Dependencies or at end
            dependencies_pattern = r'(## Dependencies)'
            match = re.search(dependencies_pattern, content)
            if match:
                updated_content = content[:match.start()] + decision_section + "\n\n" + content[match.start():]
            else:
                # Add at end
                updated_content = content.rstrip() + "\n\n" + decision_section + "\n"
            return updated_content, True
    
    def _update_kanban_links(self, content: str, created_tasks: List) -> Tuple[str, bool]:
        """
        Update Kanban links in document.
        
        Returns:
            (updated_content, was_updated)
        """
        # Kanban links are handled in _update_intake_decision_section
        # This method is a placeholder for any additional link updates
        return content, False


def main():
    """CLI entry point for testing."""
    import argparse
    
    parser = argparse.ArgumentParser(description="Intake Documentation Update")
    parser.add_argument('fr_br_path', type=Path, help='Path to FR/BR/UXR document')
    parser.add_argument('--config', type=Path, help='Path to intake-config.yaml')
    parser.add_argument('--version-marker', type=str, help='Version marker (e.g., v0.2.11.4+1)')
    args = parser.parse_args()
    
    # Load config if provided
    config = {}
    if args.config and args.config.exists():
        import yaml
        config = yaml.safe_load(args.config.read_text())
    
    # Initialize decision flow (needed for intake decision)
    from intake_decision_flow import IntakeDecisionFlow
    
    kanban_path = Path('docs/project-management/kanban')
    framework_path = Path('packages/frameworks/kanban')
    
    decision_flow = IntakeDecisionFlow(kanban_path, framework_path, config)
    intake_decision = decision_flow.analyze(args.fr_br_path)
    
    # Mock created tasks (in real usage, these come from T03)
    created_tasks = []
    
    # Initialize documentation update
    doc_update = IntakeDocumentationUpdate(config)
    
    # Update document
    try:
        result = doc_update.update_document(
            args.fr_br_path,
            intake_decision,
            created_tasks,
            args.version_marker
        )
        
        print("✅ Intake Documentation Update")
        print("=" * 80)
        print(f"Success: {result.success}")
        print(f"Updated Fields: {', '.join(result.updated_fields)}")
        if result.errors:
            print(f"Errors: {len(result.errors)}")
            for error in result.errors:
                print(f"  - {error}")
        if result.warnings:
            print(f"Warnings: {len(result.warnings)}")
            for warning in result.warnings:
                print(f"  - {warning}")
        print("\nExplanation:")
        print(result.explanation)
        
        return 0 if result.success else 1
    except Exception as e:
        print(f"❌ Error: {e}", file=sys.stderr)
        import traceback
        traceback.print_exc()
        return 1


if __name__ == "__main__":
    sys.exit(main())
