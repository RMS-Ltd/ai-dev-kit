"""
FR/BR/UXR Commit Trigger Integration for Release Workflow

This module integrates the trigger detection system with the Release Workflow,
detecting FR/BR/UXR commits and automatically triggering the agentic Kanban
task creation workflow.

Epic: Epic 2 (Workflow Management Framework)
Story: Story 7 (Trigger-Aware Release Workflow)
Task: Task 5 (Implement FR/BR/UXR commit trigger)
Task: Task 6 (Integrate with agentic task creation workflow)
"""

import subprocess
import logging
from typing import List, Dict, Optional, Any
from pathlib import Path
from trigger_registry import detect_triggers, Trigger
from workflow_executor import WorkflowExecutor, WorkflowDefinition, WorkflowStatus
from deliverable_processor import DeliverableProcessor, Deliverable, DeliverableType


class TriggerIntegration:
    """Integration layer for triggers in Release Workflow."""
    
    def __init__(self, project_root: Optional[Path] = None):
        """
        Initialize trigger integration.
        
        Args:
            project_root: Root directory of the project
        """
        self.project_root = project_root or Path.cwd()
        self.workflow_executor = WorkflowExecutor(project_root)
        self.deliverable_processor = DeliverableProcessor(project_root)
        self.logger = logging.getLogger(__name__)
        
        # Register agentic task creation workflow (placeholder - will be implemented in E4:S10)
        self._register_workflows()
    
    def _register_workflows(self) -> None:
        """Register workflows that can be triggered."""
        # Agentic task creation workflow (E4:S10 - now integrated)
        task_creation_workflow = WorkflowDefinition(
            id='agentic_task_creation',
            name='Agentic Kanban Task Creation',
            description='Creates Kanban tasks from FR/BR/UXR content using agentic intelligence',
            entry_point='function:agentic_task_workflow_integration.create_tasks',
            parameters={},
            timeout=300  # 5 minutes timeout
        )
        self.workflow_executor.register_workflow(task_creation_workflow)
        
        # Intake workflow (E2:S11 - complete intake workflow)
        intake_workflow = WorkflowDefinition(
            id='intake_workflow',
            name='Intake Workflow Automation',
            description='Complete intake workflow: decision flow, task creation, documentation updates, dependency wiring, version assignment',
            entry_point='function:intake_workflow_trigger_handler.execute_intake_workflow',
            parameters={},
            timeout=600  # 10 minutes timeout (more comprehensive workflow)
        )
        self.workflow_executor.register_workflow(intake_workflow)
    
    def check_triggers(
        self,
        commit_message: Optional[str] = None,
        changed_files: Optional[List[str]] = None,
        context: Optional[Dict[str, Any]] = None
    ) -> List[Trigger]:
        """
        Check for triggers in the current commit or context.
        
        Args:
            commit_message: Optional commit message (if None, gets from git)
            changed_files: Optional list of changed files (if None, gets from git)
            context: Optional additional context
        
        Returns:
            List of detected triggers
        """
        # Get commit message and changed files from git if not provided
        if commit_message is None:
            commit_message = self._get_commit_message()
        
        if changed_files is None:
            changed_files = self._get_changed_files()
        
        context = context or {}
        
        # Detect triggers using trigger registry
        triggers = detect_triggers(commit_message, changed_files, context)
        
        if triggers:
            self.logger.info(f"Detected {len(triggers)} trigger(s): {[t.id for t in triggers]}")
        else:
            self.logger.info("No triggers detected")
        
        return triggers
    
    def execute_triggered_workflows(
        self,
        triggers: List[Trigger],
        rw_context: Optional[Dict[str, Any]] = None
    ) -> List[Dict[str, Any]]:
        """
        Execute workflows triggered by detected triggers.
        
        Args:
            triggers: List of detected triggers
            rw_context: Optional Release Workflow context
        
        Returns:
            List of workflow execution results
        """
        rw_context = rw_context or {}
        results = []
        
        for trigger in triggers:
            self.logger.info(f"Executing workflow for trigger: {trigger.id} - {trigger.name}")
            
            # Get workflow ID from trigger
            workflow_id = trigger.workflow
            
            # Get changed files
            changed_files = self._get_changed_files()
            commit_message = self._get_commit_message()
            
            # Prepare workflow context
            workflow_context = {
                'trigger': {
                    'id': trigger.id,
                    'name': trigger.name,
                    'matches': [m.matched_text for m in trigger.matches]
                },
                'commit_message': commit_message,
                'changed_files': changed_files,
                'project_root': str(self.project_root),
                **rw_context
            }
            
            # Execute workflow
            try:
                result = self.workflow_executor.execute_workflow(
                    workflow_id,
                    context=workflow_context
                )
                
                # Process deliverables if workflow completed
                if result.status == WorkflowStatus.COMPLETED:
                    for deliverable_data in result.deliverables:
                        deliverable = Deliverable(
                            type=DeliverableType.UNKNOWN,  # Will be determined by processor
                            data=deliverable_data,
                            source_workflow=workflow_id
                        )
                        
                        # Process deliverable
                        processing_result = self.deliverable_processor.process_deliverable(
                            deliverable,
                            rw_context
                        )
                        
                        self.logger.info(
                            f"Processed deliverable: {processing_result.integration_status}, "
                            f"actions: {processing_result.actions_taken}"
                        )
                
                results.append({
                    'trigger': trigger.id,
                    'workflow': workflow_id,
                    'status': result.status.value,
                    'deliverables_count': len(result.deliverables),
                    'error': result.error
                })
                
            except Exception as e:
                self.logger.error(f"Failed to execute workflow for trigger {trigger.id}: {str(e)}")
                results.append({
                    'trigger': trigger.id,
                    'workflow': workflow_id,
                    'status': 'failed',
                    'error': str(e)
                })
        
        return results
    
    def _get_commit_message(self) -> str:
        """
        Get the current commit message from git.
        
        Returns:
            Commit message string
        """
        try:
            result = subprocess.run(
                ['git', 'log', '-1', '--pretty=%B'],
                cwd=self.project_root,
                capture_output=True,
                text=True
            )
            return result.stdout.strip() if result.returncode == 0 else ""
        except Exception as e:
            self.logger.warning(f"Failed to get commit message: {e}")
            return ""
    
    def _get_changed_files(self) -> List[str]:
        """
        Get list of changed files from git.
        
        Returns:
            List of changed file paths
        """
        try:
            # Get staged files
            result = subprocess.run(
                ['git', 'diff', '--cached', '--name-only'],
                cwd=self.project_root,
                capture_output=True,
                text=True
            )
            
            if result.returncode == 0 and result.stdout.strip():
                return result.stdout.strip().split('\n')
            
            # If no staged files, get modified files
            result = subprocess.run(
                ['git', 'diff', '--name-only'],
                cwd=self.project_root,
                capture_output=True,
                text=True
            )
            
            if result.returncode == 0 and result.stdout.strip():
                return result.stdout.strip().split('\n')
            
            # If no modified files, get files from last commit
            result = subprocess.run(
                ['git', 'diff', '--name-only', 'HEAD~1', 'HEAD'],
                cwd=self.project_root,
                capture_output=True,
                text=True
            )
            
            if result.returncode == 0 and result.stdout.strip():
                return result.stdout.strip().split('\n')
            
            return []
            
        except Exception as e:
            self.logger.warning(f"Failed to get changed files: {e}")
            return []
    
    def integrate_with_rw(
        self,
        rw_context: Optional[Dict[str, Any]] = None
    ) -> Dict[str, Any]:
        """
        Integrate trigger detection and execution with Release Workflow.
        
        This is the main entry point for RW to check and execute triggers.
        
        Args:
            rw_context: Optional Release Workflow context
        
        Returns:
            Dictionary with trigger detection and execution results
        """
        rw_context = rw_context or {}
        
        self.logger.info("Checking for triggers in Release Workflow")
        
        # Check for triggers
        triggers = self.check_triggers(context=rw_context)
        
        if not triggers:
            return {
                'triggers_detected': False,
                'triggers': [],
                'workflows_executed': []
            }
        
        # Execute triggered workflows
        workflow_results = self.execute_triggered_workflows(triggers, rw_context)
        
        return {
            'triggers_detected': True,
            'triggers': [{'id': t.id, 'name': t.name, 'workflow': t.workflow} for t in triggers],
            'workflows_executed': workflow_results
        }


# Convenience function for RW integration
def check_and_execute_triggers(rw_context: Optional[Dict[str, Any]] = None) -> Dict[str, Any]:
    """
    Convenience function for Release Workflow to check and execute triggers.
    
    Args:
        rw_context: Optional Release Workflow context
    
    Returns:
        Dictionary with trigger detection and execution results
    """
    integration = TriggerIntegration()
    return integration.integrate_with_rw(rw_context)

