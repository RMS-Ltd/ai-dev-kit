"""
Sub-Workflow Execution Engine for Release Workflow

This module implements the sub-workflow execution engine that can dynamically
execute workflows based on triggers, handle workflow parameters, and manage
error handling and rollback.

Epic: Epic 2 (Workflow Management Framework)
Story: Story 7 (Trigger-Aware Release Workflow)
Task: Task 3 (Implement sub-workflow execution engine)
"""

import json
import logging
import subprocess
import time
from dataclasses import dataclass
from enum import Enum
from pathlib import Path
from typing import Any, Dict, List, Optional

from journal import checkpoint_store
from journal.forensic_log import run_subprocess_logged


class WorkflowStatus(Enum):
    """Status of workflow execution."""
    PENDING = "pending"
    RUNNING = "running"
    COMPLETED = "completed"
    FAILED = "failed"
    CANCELLED = "cancelled"


class FailureType(Enum):
    """Types of workflow failures."""
    TRANSIENT = "transient"  # Network, timeout - can retry
    CRITICAL = "critical"   # Data corruption, state inconsistency - rollback
    AMBIGUOUS = "ambiguous"  # Requires human judgment


@dataclass
class WorkflowResult:
    """Result of workflow execution."""
    workflow_id: str
    status: WorkflowStatus
    deliverables: List[Dict[str, Any]]
    error: Optional[str] = None
    failure_type: Optional[FailureType] = None
    execution_time: Optional[float] = None
    checkpoint: Optional[str] = None


@dataclass
class WorkflowDefinition:
    """Definition of a workflow."""
    id: str
    name: str
    description: str
    entry_point: str  # Script or function to execute
    parameters: Dict[str, Any]
    dependencies: List[str] = None
    timeout: Optional[int] = None
    retry_config: Optional[Dict[str, Any]] = None


class WorkflowExecutor:
    """Engine for executing sub-workflows."""
    
    def __init__(self, project_root: Optional[Path] = None):
        """
        Initialize the workflow executor.
        
        Args:
            project_root: Root directory of the project
        """
        self.project_root = project_root or Path.cwd()
        self.journal_root = self.project_root / "docs" / "journals"
        self.workflows: Dict[str, WorkflowDefinition] = {}
        self.execution_history: List[WorkflowResult] = []
        self._command_records: List[Dict[str, Any]] = []
        self.logger = logging.getLogger(__name__)

    def get_command_records(self) -> List[Dict[str, Any]]:
        """Forensic command records from the current/last execution path."""
        return list(self._command_records)
    
    def register_workflow(self, workflow_def: WorkflowDefinition) -> None:
        """
        Register a workflow definition.
        
        Args:
            workflow_def: Workflow definition
        """
        self.workflows[workflow_def.id] = workflow_def
        self.logger.info(f"Registered workflow: {workflow_def.id} - {workflow_def.name}")
    
    def execute_workflow(
        self,
        workflow_id: str,
        context: Optional[Dict[str, Any]] = None,
        checkpoint: Optional[str] = None
    ) -> WorkflowResult:
        """
        Execute a workflow.
        
        Args:
            workflow_id: ID of the workflow to execute
            context: Optional context to pass to workflow
            checkpoint: Optional checkpoint ID for rollback
        
        Returns:
            WorkflowResult with execution status and deliverables
        """
        if workflow_id not in self.workflows:
            raise ValueError(f"Workflow not found: {workflow_id}")
        
        workflow_def = self.workflows[workflow_id]
        context = context or {}
        
        self.logger.info(f"Executing workflow: {workflow_id} - {workflow_def.name}")
        self._command_records = []

        # Create checkpoint if provided
        if checkpoint:
            self._create_checkpoint(checkpoint)
        
        try:
            # Merge workflow parameters with context
            params = {**workflow_def.parameters, **context}
            
            # Execute workflow based on entry point type
            if workflow_def.entry_point.endswith('.py'):
                # Python script
                result = self._execute_python_script(workflow_def, params)
            elif workflow_def.entry_point.startswith('function:'):
                # Function call
                result = self._execute_function(workflow_def, params)
            else:
                # External command
                result = self._execute_command(workflow_def, params)
            
            # Parse deliverables from result
            deliverables = self._parse_deliverables(result)
            
            workflow_result = WorkflowResult(
                workflow_id=workflow_id,
                status=WorkflowStatus.COMPLETED,
                deliverables=deliverables,
                execution_time=result.get('execution_time', 0)
            )
            
            self.execution_history.append(workflow_result)
            self.logger.info(f"Workflow completed: {workflow_id}")
            
            return workflow_result
            
        except subprocess.TimeoutExpired:
            self.logger.error(f"Workflow timeout: {workflow_id}")
            return WorkflowResult(
                workflow_id=workflow_id,
                status=WorkflowStatus.FAILED,
                failure_type=FailureType.TRANSIENT,
                error="Workflow execution timeout"
            )
            
        except Exception as e:
            self.logger.error(f"Workflow failed: {workflow_id} - {str(e)}")
            
            # Determine failure type
            failure_type = self._determine_failure_type(e, workflow_def)
            
            return WorkflowResult(
                workflow_id=workflow_id,
                status=WorkflowStatus.FAILED,
                failure_type=failure_type,
                error=str(e),
                checkpoint=checkpoint
            )
    
    def _execute_python_script(
        self,
        workflow_def: WorkflowDefinition,
        params: Dict[str, Any]
    ) -> Dict[str, Any]:
        """Execute a Python script workflow."""
        script_path = self.project_root / workflow_def.entry_point
        
        if not script_path.exists():
            raise FileNotFoundError(f"Workflow script not found: {script_path}")
        
        # Prepare command
        cmd = ['python3', str(script_path)]
        
        # Add parameters as JSON
        if params:
            cmd.extend(['--params', json.dumps(params)])
        
        # Execute with timeout if specified
        timeout = workflow_def.timeout
        
        result, record = run_subprocess_logged(
            cmd,
            cwd=self.project_root,
            timeout=timeout,
        )
        self._command_records.append(record.to_dict())

        if result.returncode != 0:
            raise RuntimeError(f"Workflow script failed: {result.stderr}")
        
        # Parse output as JSON if possible
        try:
            return json.loads(result.stdout)
        except json.JSONDecodeError:
            return {'output': result.stdout, 'execution_time': 0}
    
    def _execute_function(
        self,
        workflow_def: WorkflowDefinition,
        params: Dict[str, Any]
    ) -> Dict[str, Any]:
        """Execute a function workflow."""
        # Extract function path (e.g., "function:module.function")
        func_path = workflow_def.entry_point.replace('function:', '')
        module_path, func_name = func_path.rsplit('.', 1)
        
        # Import module and get function
        import importlib
        module = importlib.import_module(module_path)
        func = getattr(module, func_name)
        
        # Execute function
        return func(**params)
    
    def _execute_command(
        self,
        workflow_def: WorkflowDefinition,
        params: Dict[str, Any]
    ) -> Dict[str, Any]:
        """Execute an external command workflow."""
        # Parse command and arguments
        cmd_parts = workflow_def.entry_point.split()
        cmd = cmd_parts[0]
        args = cmd_parts[1:] if len(cmd_parts) > 1 else []
        
        result, record = run_subprocess_logged(
            [cmd] + args,
            cwd=self.project_root,
            timeout=workflow_def.timeout,
        )
        self._command_records.append(record.to_dict())

        if result.returncode != 0:
            raise RuntimeError(f"Workflow command failed: {result.stderr}")
        
        return {'output': result.stdout, 'execution_time': 0}
    
    def _parse_deliverables(self, result: Dict[str, Any]) -> List[Dict[str, Any]]:
        """
        Parse deliverables from workflow result.
        
        Args:
            result: Workflow execution result
        
        Returns:
            List of deliverable dictionaries
        """
        # Check if result has explicit deliverables
        if 'deliverables' in result:
            return result['deliverables']
        
        # Otherwise, infer deliverables from result
        deliverables = []
        
        if 'kanban_tasks' in result:
            deliverables.append({
                'type': 'kanban_tasks',
                'data': result['kanban_tasks']
            })
        
        if 'documentation' in result:
            deliverables.append({
                'type': 'documentation',
                'data': result['documentation']
            })
        
        return deliverables
    
    def _determine_failure_type(
        self,
        error: Exception,
        workflow_def: WorkflowDefinition
    ) -> FailureType:
        """
        Determine the type of failure for error handling.
        
        Args:
            error: Exception that occurred
            workflow_def: Workflow definition
        
        Returns:
            FailureType enum
        """
        error_str = str(error).lower()
        
        # Transient failures (network, timeout)
        transient_keywords = ['timeout', 'network', 'connection', 'temporary']
        if any(keyword in error_str for keyword in transient_keywords):
            return FailureType.TRANSIENT
        
        # Critical failures (data corruption, state inconsistency)
        critical_keywords = ['corruption', 'inconsistent', 'invalid state', 'data loss']
        if any(keyword in error_str for keyword in critical_keywords):
            return FailureType.CRITICAL
        
        # Default to ambiguous (requires human judgment)
        return FailureType.AMBIGUOUS
    
    def _create_checkpoint(self, checkpoint_id: str) -> None:
        """
        Create a checkpoint for rollback.
        
        Args:
            checkpoint_id: Unique checkpoint identifier
        """
        checkpoint_store.create_checkpoint(
            self.journal_root,
            checkpoint_id,
            project_root=self.project_root,
        )
        self.logger.info(f"Checkpoint created: {checkpoint_id}")
    
    def rollback_to_checkpoint(self, checkpoint_id: str) -> bool:
        """
        Rollback to a checkpoint.
        
        Args:
            checkpoint_id: Checkpoint identifier to rollback to
        
        Returns:
            True if rollback successful, False otherwise
        """
        ok = checkpoint_store.rollback_to_checkpoint(
            self.journal_root,
            checkpoint_id,
            project_root=self.project_root,
        )
        if ok:
            self.logger.info(f"Rollback hint written for checkpoint: {checkpoint_id}")
        else:
            self.logger.warning(f"Checkpoint not found: {checkpoint_id}")
        return ok
    
    def retry_workflow(
        self,
        workflow_id: str,
        max_retries: int = 3,
        backoff: str = 'exponential'
    ) -> WorkflowResult:
        """
        Retry a failed workflow.
        
        Args:
            workflow_id: ID of workflow to retry
            max_retries: Maximum number of retry attempts
            backoff: Backoff strategy ('exponential', 'linear', 'fixed')
        
        Returns:
            WorkflowResult from final attempt
        """
        # Find last execution result
        last_result = None
        for result in reversed(self.execution_history):
            if result.workflow_id == workflow_id:
                last_result = result
                break
        
        if not last_result or last_result.status != WorkflowStatus.FAILED:
            raise ValueError(f"No failed workflow found to retry: {workflow_id}")
        
        if last_result.failure_type != FailureType.TRANSIENT:
            raise ValueError(f"Workflow failure is not transient, cannot retry: {workflow_id}")
        
        # Retry with backoff
        for attempt in range(max_retries):
            if attempt > 0:
                if backoff == 'exponential':
                    wait_time = 2 ** attempt
                elif backoff == 'linear':
                    wait_time = attempt * 2
                else:
                    wait_time = 2
                
                self.logger.info(f"Retrying workflow {workflow_id} (attempt {attempt + 1}/{max_retries}) after {wait_time}s")
                time.sleep(wait_time)
            
            # Re-execute workflow
            self.workflows[workflow_id]
            result = self.execute_workflow(workflow_id, checkpoint=last_result.checkpoint)
            
            if result.status == WorkflowStatus.COMPLETED:
                self.logger.info(f"Workflow retry successful: {workflow_id}")
                return result
        
        # All retries failed
        self.logger.error(f"Workflow retry exhausted: {workflow_id}")
        return result

