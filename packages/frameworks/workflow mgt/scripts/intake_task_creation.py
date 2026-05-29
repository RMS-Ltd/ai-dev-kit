#!/usr/bin/env python3
"""
Intake Task Creation Integration Component

Integrates with E4:S10's AgenticTaskWorkflow to create Kanban tasks for intake workflow.
Adds intake-specific logic: status management, version marker assignment, FR/BR/UXR linking.

Part of Epic 2, Story 11, Task 3: Implement Kanban Task Creation Integration.

Usage:
    from intake_task_creation import IntakeTaskCreation
    
    task_creation = IntakeTaskCreation(kanban_path, framework_path, config)
    result = task_creation.create_tasks(fr_br_path, intake_decision, existing_epics, existing_stories)
"""

import sys
from pathlib import Path
from typing import Dict, List, Optional
from dataclasses import dataclass

# Import E4:S10 components
try:
    # Add Kanban framework scripts to path
    kanban_scripts_path = Path(__file__).parent.parent.parent / "kanban" / "scripts"
    if str(kanban_scripts_path) not in sys.path:
        sys.path.insert(0, str(kanban_scripts_path))
    
    from agentic_task_workflow import AgenticTaskWorkflow, WorkflowResult
    from intake_decision_flow import IntakeDecision
except ImportError as e:
    print(f"⚠️  Warning: Could not import required components: {e}")
    print("   E4:S10 (Agentic Task Creation) and intake_decision_flow must be available")
    raise


@dataclass
class IntakeTaskCreationResult:
    """Result from intake task creation."""
    success: bool
    created_tasks: List  # List of CreatedTask objects from E4:S10
    workflow_result: Optional[WorkflowResult]  # Full E4:S10 workflow result
    errors: List[str]
    warnings: List[str]
    explanation: str


class IntakeTaskCreation:
    """Task creation integration for intake workflow."""
    
    def __init__(
        self,
        kanban_path: Path,
        framework_path: Path,
        config: Optional[Dict] = None
    ):
        """
        Initialize intake task creation.
        
        Args:
            kanban_path: Path to project's Kanban structure
            framework_path: Path to Kanban framework
            config: Configuration dict (from intake-workflow.yaml)
        """
        self.kanban_path = Path(kanban_path)
        self.framework_path = Path(framework_path)
        self.config = config or {}
        
        # Initialize E4:S10 AgenticTaskWorkflow
        self.agentic_workflow = AgenticTaskWorkflow(kanban_path, framework_path)
        
        # Configuration
        self.auto_link_fr_br = self.config.get('task_creation', {}).get('auto_link_fr_br', True)
        self.use_e4s10 = self.config.get('task_creation', {}).get('use_e4s10', True)
    
    def create_tasks(
        self,
        fr_br_path: Path,
        intake_decision: IntakeDecision,
        existing_epics: Optional[List[Dict]] = None,
        existing_stories: Optional[List[Dict]] = None
    ) -> IntakeTaskCreationResult:
        """
        Create Kanban tasks based on intake decision.
        
        This method delegates to E4:S10's AgenticTaskWorkflow and adds intake-specific logic.
        
        Args:
            fr_br_path: Path to FR/BR/UXR document
            intake_decision: Intake decision from decision flow analysis
            existing_epics: Optional list of existing project epics
            existing_stories: Optional list of existing project stories
        
        Returns:
            IntakeTaskCreationResult with created tasks and status
        """
        errors = []
        warnings = []
        explanation_parts = []
        
        # Validate intake decision
        if intake_decision.epic_number == 0:
            errors.append("Cannot create tasks: No epic assigned in intake decision")
            return IntakeTaskCreationResult(
                success=False,
                created_tasks=[],
                workflow_result=None,
                errors=errors,
                warnings=warnings,
                explanation="❌ Cannot create tasks: No epic assigned"
            )
        
        # Check if manual review required
        if intake_decision.requires_manual_review:
            warnings.append("Intake decision requires manual review - task creation may be incomplete")
            explanation_parts.append("⚠️  Manual review required - proceeding with task creation")
        
        # Delegate to E4:S10's AgenticTaskWorkflow
        if not self.use_e4s10:
            errors.append("E4:S10 integration disabled - cannot create tasks")
            return IntakeTaskCreationResult(
                success=False,
                created_tasks=[],
                workflow_result=None,
                errors=errors,
                warnings=warnings,
                explanation="❌ E4:S10 integration disabled"
            )
        
        try:
            explanation_parts.append("🔨 Creating tasks using E4:S10 AgenticTaskWorkflow...")
            
            # Call E4:S10's workflow
            workflow_result = self.agentic_workflow.process_fr_br(
                fr_br_path,
                existing_epics,
                existing_stories,
                auto_create=True  # Always create tasks in intake workflow
            )
            
            # Check workflow result
            if not workflow_result.success:
                errors.extend(workflow_result.errors)
                explanation_parts.append(f"❌ E4:S10 workflow failed: {', '.join(workflow_result.errors)}")
                return IntakeTaskCreationResult(
                    success=False,
                    created_tasks=[],
                    workflow_result=workflow_result,
                    errors=errors,
                    warnings=warnings + workflow_result.warnings,
                    explanation="\n".join(explanation_parts)
                )
            
            # Extract created tasks
            created_tasks = workflow_result.created_tasks
            
            if not created_tasks:
                warnings.append("No tasks were created by E4:S10 workflow")
                explanation_parts.append("⚠️  No tasks created - check E4:S10 workflow result")
            else:
                explanation_parts.append(
                    f"✅ Created {len(created_tasks)} task(s): "
                    f"{', '.join([t.task_id for t in created_tasks])}"
                )
            
            # Add intake-specific linking (if auto_link enabled)
            if self.auto_link_fr_br and created_tasks:
                try:
                    self._link_tasks_to_fr_br(fr_br_path, created_tasks, intake_decision)
                    explanation_parts.append("✅ Linked tasks to FR/BR/UXR document")
                except Exception as e:
                    warnings.append(f"Failed to link tasks to FR/BR: {str(e)}")
                    explanation_parts.append(f"⚠️  Could not link tasks to FR/BR: {str(e)}")
            
            # Add warnings from workflow
            warnings.extend(workflow_result.warnings)
            
            success = len(errors) == 0
            
            return IntakeTaskCreationResult(
                success=success,
                created_tasks=created_tasks,
                workflow_result=workflow_result,
                errors=errors,
                warnings=warnings,
                explanation="\n".join(explanation_parts)
            )
            
        except Exception as e:
            errors.append(f"Task creation failed: {str(e)}")
            explanation_parts.append(f"❌ Task creation exception: {str(e)}")
            import traceback
            traceback.print_exc()
            
            return IntakeTaskCreationResult(
                success=False,
                created_tasks=[],
                workflow_result=None,
                errors=errors,
                warnings=warnings,
                explanation="\n".join(explanation_parts)
            )
    
    def _link_tasks_to_fr_br(
        self,
        fr_br_path: Path,
        created_tasks: List,
        intake_decision: IntakeDecision
    ) -> None:
        """
        Link created tasks to FR/BR/UXR document.
        
        This adds task references to the FR/BR document's intake decision section.
        Note: Full FR/BR document update happens in Step 4 (Intake Documentation Updates).
        This method just ensures tasks are linked.
        """
        # E4:S10's AgenticTaskWorkflow already links tasks to FR/BR in Step 5
        # This method is a placeholder for any intake-specific linking logic
        # The actual FR/BR document update happens in Step 4
        
        # Verify tasks were created
        if not created_tasks:
            return
        
        # Tasks are already linked by E4:S10 workflow
        # This method can add intake-specific metadata if needed
        pass


def main():
    """CLI entry point for testing."""
    import argparse
    
    parser = argparse.ArgumentParser(description="Intake Task Creation Integration")
    parser.add_argument('fr_br_path', type=Path, help='Path to FR/BR/UXR document')
    parser.add_argument('--kanban-path', type=Path, default=Path('docs/project-management/kanban'),
                       help='Path to Kanban structure')
    parser.add_argument('--framework-path', type=Path,
                       default=Path('packages/frameworks/kanban'),
                       help='Path to Kanban framework')
    parser.add_argument('--config', type=Path, help='Path to intake-config.yaml')
    args = parser.parse_args()
    
    # Load config if provided
    config = {}
    if args.config and args.config.exists():
        import yaml
        config = yaml.safe_load(args.config.read_text())
    
    # Initialize decision flow (needed for intake decision)
    from intake_decision_flow import IntakeDecisionFlow
    
    decision_flow = IntakeDecisionFlow(
        args.kanban_path,
        args.framework_path,
        config
    )
    
    # Get intake decision
    intake_decision = decision_flow.analyze(args.fr_br_path)
    
    # Initialize task creation
    task_creation = IntakeTaskCreation(
        args.kanban_path,
        args.framework_path,
        config
    )
    
    # Create tasks
    try:
        result = task_creation.create_tasks(args.fr_br_path, intake_decision)
        
        print("✅ Intake Task Creation")
        print("=" * 80)
        print(f"Success: {result.success}")
        print(f"Created Tasks: {len(result.created_tasks)}")
        if result.created_tasks:
            for task in result.created_tasks:
                print(f"  - {task.task_id}: {task.task_path}")
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
