#!/usr/bin/env python3
"""
Intake Version Assignment Component

Assigns version markers for intake workflow, integrating with Release Workflow
versioning logic. Uses doc-init build (+0) for new Story/Task creation per FR-020.

Part of Epic 2, Story 11, Task 6: Integrate with Release Workflow.

Usage:
    from intake_version_assignment import IntakeVersionAssignment
    
    version_assignment = IntakeVersionAssignment(config, version_file_path)
    result = version_assignment.assign_version(intake_decision, created_tasks, is_new_story, is_new_task)
"""

import sys
import re
from pathlib import Path
from typing import Dict, List, Optional, Tuple
from dataclasses import dataclass

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
class IntakeVersionAssignmentResult:
    """Result from version assignment."""
    success: bool
    version_marker: Optional[str]  # e.g., "v0.2.11.6+0" or "v0.2.11.6+1"
    version_components: Dict[str, int]  # {'rc': 0, 'epic': 2, 'story': 11, 'task': 6, 'build': 0}
    errors: List[str]
    warnings: List[str]
    explanation: str


class IntakeVersionAssignment:
    """Version assignment component for intake workflow."""
    
    def __init__(
        self,
        config: Optional[Dict] = None,
        version_file_path: Optional[Path] = None
    ):
        """
        Initialize version assignment.
        
        Args:
            config: Configuration dict (from intake-workflow.yaml)
            version_file_path: Path to version.py file
        """
        self.config = config or {}
        self.version_file_path = Path(version_file_path) if version_file_path else None
        
        # Configuration
        self.version_schema = self.config.get('version_schema', 'RC.EPIC.STORY.TASK+BUILD')
        self.intake_build = self.config.get('intake_build', 0)  # Doc-init build for new Story/Task
        
        # Default version file if not provided
        if not self.version_file_path:
            self.version_file_path = Path('src/fynd_deals/version.py')
    
    def assign_version(
        self,
        intake_decision: IntakeDecision,
        created_tasks: List,  # List of CreatedTask objects from T03
        is_new_story: bool = False,
        is_new_task: bool = False
    ) -> IntakeVersionAssignmentResult:
        """
        Assign version marker for intake action.
        
        Args:
            intake_decision: Intake decision from decision flow analysis
            created_tasks: List of created tasks (for determining task number)
            is_new_story: Whether a new story was created
            is_new_task: Whether a new task was created
        
        Returns:
            IntakeVersionAssignmentResult with assigned version marker
        """
        errors = []
        warnings = []
        explanation_parts = []
        
        # Extract version components from intake decision
        epic_num = intake_decision.epic_number
        story_num = intake_decision.story_number
        task_num = intake_decision.task_number
        
        if epic_num == 0:
            errors.append("Cannot assign version: No epic assigned in intake decision")
            return IntakeVersionAssignmentResult(
                success=False,
                version_marker=None,
                version_components={},
                errors=errors,
                warnings=warnings,
                explanation="❌ Cannot assign version: No epic assigned"
            )
        
        if not story_num:
            errors.append("Cannot assign version: No story assigned in intake decision")
            return IntakeVersionAssignmentResult(
                success=False,
                version_marker=None,
                version_components={},
                errors=errors,
                warnings=warnings,
                explanation="❌ Cannot assign version: No story assigned"
            )
        
        # Determine task number if not provided
        if not task_num and created_tasks:
            # Use first created task's task number
            first_task = created_tasks[0]
            task_id = getattr(first_task, 'task_id', None)
            if task_id:
                # Extract task number from task_id (e.g., "E2:S11:T06" -> 6)
                match = re.search(r'T(\d+)', task_id)
                if match:
                    task_num = int(match.group(1))
        
        if not task_num:
            errors.append("Cannot assign version: No task number available")
            return IntakeVersionAssignmentResult(
                success=False,
                version_marker=None,
                version_components={},
                errors=errors,
                warnings=warnings,
                explanation="❌ Cannot assign version: No task number available"
            )
        
        # Determine build number
        # For new Story/Task: use doc-init build (+0) per FR-020
        # For existing Task: determine next build number
        if is_new_story or is_new_task:
            build_num = self.intake_build  # Usually 0 for doc-init
            explanation_parts.append(f"📌 New Story/Task → Using doc-init build (+{build_num})")
        else:
            # Determine next build number for existing task
            build_num = self._determine_next_build_number(epic_num, story_num, task_num)
            explanation_parts.append(f"📌 Existing Task → Using next build number (+{build_num})")
        
        # Read RC from version file
        rc_num = self._read_version_component('VERSION_RC', default=0)
        
        # Build version components
        version_components = {
            'rc': rc_num,
            'epic': epic_num,
            'story': story_num,
            'task': task_num,
            'build': build_num
        }
        
        # Generate version marker
        version_marker = f"v{rc_num}.{epic_num}.{story_num}.{task_num}+{build_num}"
        
        explanation_parts.append(f"✅ Assigned version marker: {version_marker}")
        
        success = len(errors) == 0
        
        return IntakeVersionAssignmentResult(
            success=success,
            version_marker=version_marker,
            version_components=version_components,
            errors=errors,
            warnings=warnings,
            explanation="\n".join(explanation_parts)
        )
    
    def _read_version_component(self, component_name: str, default: int = 0) -> int:
        """Read a version component from version.py file."""
        if not self.version_file_path or not self.version_file_path.exists():
            return default
        
        try:
            content = self.version_file_path.read_text(encoding='utf-8')
            # Pattern: VERSION_RC = 0
            pattern = rf'{component_name}\s*=\s*(\d+)'
            match = re.search(pattern, content)
            if match:
                return int(match.group(1))
        except Exception as e:
            # Return default on error
            pass
        
        return default
    
    def _determine_next_build_number(
        self,
        epic_num: int,
        story_num: int,
        task_num: int
    ) -> int:
        """
        Determine next build number for existing task.
        
        This reads the story document to find the highest build number
        for the given task, then returns next build number.
        """
        # Try to read from story document
        kanban_path = Path('docs/project-management/kanban')
        story_pattern = f"Epic-{epic_num}/Story-{str(story_num).zfill(3)}-*.md"
        story_files = list(kanban_path.glob(f"epics/{story_pattern}"))
        
        if story_files:
            story_path = story_files[0]
            try:
                content = story_path.read_text(encoding='utf-8')
                # Look for task completion markers: ✅ COMPLETE (v0.2.11.6+1)
                pattern = rf'✅\s+COMPLETE\s+\(v\d+\.{epic_num}\.{story_num}\.{task_num}\+(\d+)\)'
                matches = re.findall(pattern, content)
                if matches:
                    # Find highest build number
                    build_numbers = [int(m) for m in matches]
                    max_build = max(build_numbers)
                    return max_build + 1
            except Exception:
                pass
        
        # Default: start at build 1 for existing task
        return 1


def main():
    """CLI entry point for testing."""
    import argparse
    
    parser = argparse.ArgumentParser(description="Intake Version Assignment")
    parser.add_argument('--epic', type=int, required=True, help='Epic number')
    parser.add_argument('--story', type=int, required=True, help='Story number')
    parser.add_argument('--task', type=int, required=True, help='Task number')
    parser.add_argument('--new-story', action='store_true', help='Is new story')
    parser.add_argument('--new-task', action='store_true', help='Is new task')
    parser.add_argument('--version-file', type=Path, help='Path to version.py')
    parser.add_argument('--config', type=Path, help='Path to intake-config.yaml')
    args = parser.parse_args()
    
    # Load config if provided
    config = {}
    if args.config and args.config.exists():
        import yaml
        config = yaml.safe_load(args.config.read_text())
    
    # Create mock intake decision
    from intake_decision_flow import IntakeDecision
    
    intake_decision = IntakeDecision(
        epic_number=args.epic,
        story_number=args.story,
        task_number=args.task,
        new_story_recommended=args.new_story,
        new_task_recommended=args.new_task,
        epic_confidence=0.9,
        epic_match_type='exact',
        story_match_confidence=0.8,
        explanation="Test decision",
        reasoning=["Test reasoning"],
        intake_status='ACCEPTED',
        version_marker=None,
        requires_manual_review=False,
        epic_story_mapping=None
    )
    
    # Initialize version assignment
    version_assignment = IntakeVersionAssignment(config, args.version_file)
    
    # Assign version
    try:
        result = version_assignment.assign_version(
            intake_decision,
            [],
            args.new_story,
            args.new_task
        )
        
        print("✅ Intake Version Assignment")
        print("=" * 80)
        print(f"Success: {result.success}")
        print(f"Version Marker: {result.version_marker}")
        print(f"Version Components: {result.version_components}")
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
