#!/usr/bin/env python3
"""
Workflow Orchestrator for Release Workflow

This script orchestrates the execution of the Release Workflow (RW) with support for
multiple trigger types. It loads canonical step definitions from the single source
of truth to prevent duplication and drift.

Usage:
    python workflow_orchestrator.py --workflow release --trigger RW
    python workflow_orchestrator.py --workflow release --trigger "RW -k"
    python workflow_orchestrator.py --workflow release --trigger "RW -d"
"""

import argparse
import json
import sys
from pathlib import Path
from typing import Dict, List, Optional, Any
from enum import Enum
from dataclasses import dataclass

import logging

# Import canonical steps loader
from canonical_steps import (
    get_canonical_steps, get_execution_path, should_execute_step,
    get_step_modifications, get_step_name, get_step_description,
    list_triggers
)
from workflow_executor import WorkflowExecutor, WorkflowDefinition, WorkflowResult, WorkflowStatus
from deliverable_processor import DeliverableProcessor, Deliverable, DeliverableType


class ExecutionPlanStatus(Enum):
    """Status of an execution plan."""
    PENDING = "pending"
    VALIDATED = "validated"
    EXECUTING = "executing"
    COMPLETED = "completed"
    FAILED = "failed"


@dataclass
class ExecutionPlan:
    """Execution plan for chaining multiple workflows."""
    
    workflows: List[str]
    dependencies: Dict[str, List[str]]
    status: ExecutionPlanStatus
    results: Optional[Dict[str, WorkflowResult]] = None


class TriggerType(Enum):
    """RW trigger types - now loaded from canonical definition."""
    RW = "RW"
    RW_K = "RW -k"
    RW_D = "RW -d"
    
    @classmethod
    def from_string(cls, trigger_str: str):
        """Create TriggerType from string trigger."""
        for member in cls:
            if member.value == trigger_str:
                return member
        raise ValueError(f"Unknown trigger: {trigger_str}")


def parse_rw_trigger(trigger_str: str) -> TriggerType:
    """Parse RW trigger string (with optional args) and return TriggerType enum."""
    normalized = trigger_str.strip().upper()
    if not normalized:
        raise ValueError("Unknown trigger: empty")

    # Accept task token / extra args after trigger, e.g.:
    # "RW E2:S01:T13", "RW -k E2S01T13 --art", "RW -d E2:S16:T03"
    if normalized.startswith("RW -K"):
        return TriggerType.RW_K
    if normalized.startswith("RW -D"):
        return TriggerType.RW_D
    if normalized.startswith("RW"):
        # Guard against malformed compact flags like RW-k / RW-d.
        if normalized.startswith("RW-"):
            raise ValueError(f"Unknown trigger: {trigger_str}")
        return TriggerType.RW

    raise ValueError(f"Unknown trigger: {trigger_str}")


def get_execution_path_for_trigger(trigger_type: TriggerType) -> List[float]:
    """Get execution path for a trigger type using canonical definition."""
    from canonical_steps import get_execution_path as get_canonical_execution_path
    path = get_canonical_execution_path(trigger_type.value)
    return path.steps if path else []


def should_execute_step_for_trigger(step_number: float, trigger_type: TriggerType) -> bool:
    """Check if a step should execute for a given trigger using canonical definition."""
    from canonical_steps import should_execute_step as canonical_should_execute_step
    return canonical_should_execute_step(step_number, trigger_type.value)


def get_step_modifications_for_trigger(step_number: float, trigger_type: TriggerType) -> Dict[str, Any]:
    """Get step modifications for a trigger using canonical definition."""
    from canonical_steps import get_step_modifications as canonical_get_step_modifications
    return canonical_get_step_modifications(step_number, trigger_type.value)


# Dependency Graph for Known Workflows
WORKFLOW_DEPENDENCIES: Dict[str, Dict] = {
    'agentic_task_creation': {
        'depends_on': [],
        'produces': ['kanban_tasks'],
        'estimated_duration': '2-5min',
        'description': 'Creates Kanban tasks from FR/BR/UXR content'
    },
    'documentation_generation': {
        'depends_on': ['agentic_task_creation'],
        'produces': ['documentation'],
        'estimated_duration': '1-3min',
        'description': 'Generates documentation from tasks'
    },
    'code_generation': {
        'depends_on': ['agentic_task_creation'],
        'produces': ['code_changes'],
        'estimated_duration': '3-7min',
        'description': 'Generates code from tasks'
    },
}


class WorkflowOrchestrator:
    """Orchestrator for chaining and executing multiple workflows."""
    
    def __init__(self, project_root: Optional[Path] = None):
        """
        Initialize the workflow orchestrator.
        
        Args:
            project_root: Root directory of the project
        """
        self.project_root = project_root or Path.cwd()
        self.workflow_executor = WorkflowExecutor(project_root)
        self.deliverable_processor = DeliverableProcessor(project_root)
        self.dependency_graph = WORKFLOW_DEPENDENCIES.copy()
        self.logger = logging.getLogger(__name__)
        self.execution_plans: List[ExecutionPlan] = []
    
    def register_workflow_dependency(
        self,
        workflow_id: str,
        depends_on: List[str],
        produces: List[str],
        estimated_duration: Optional[str] = None
    ) -> None:
        """
        Register a workflow dependency in the dependency graph.
        
        Args:
            workflow_id: ID of the workflow
            depends_on: List of workflow IDs this workflow depends on
            produces: List of deliverable types this workflow produces
            estimated_duration: Optional estimated duration
        """
        self.dependency_graph[workflow_id] = {
            'depends_on': depends_on,
            'produces': produces,
            'estimated_duration': estimated_duration,
            'description': f'Workflow: {workflow_id}'
        }
        self.logger.info(f"Registered workflow dependency: {workflow_id}")
    
    def plan_workflow_execution(
        self,
        workflow_ids: List[str],
        user_request: Optional[str] = None,
        rw_context: Optional[Dict[str, Any]] = None
    ) -> ExecutionPlan:
        """
        Plan workflow execution order based on dependencies.
        
        Uses dependency graph for known workflows, agentic planning for complex scenarios.
        
        Args:
            workflow_ids: List of workflow IDs to execute
            user_request: Optional user request for agentic planning
            rw_context: Optional Release Workflow context
        
        Returns:
            ExecutionPlan with workflows in correct execution order
        """
        rw_context = rw_context or {}
        
        self.logger.info(f"Planning execution for workflows: {workflow_ids}")
        
        # Check if all workflows are in dependency graph
        known_workflows = [w for w in workflow_ids if w in self.dependency_graph]
        unknown_workflows = [w for w in workflow_ids if w not in self.dependency_graph]
        
        # Use dependency graph for known workflows
        if known_workflows and not unknown_workflows and not self._is_complex(user_request):
            execution_order = self._build_execution_order(known_workflows)
            plan = ExecutionPlan(
                workflows=execution_order,
                dependencies=self._get_dependencies(execution_order),
                status=ExecutionPlanStatus.PENDING
            )
        else:
            # Agentic planning for complex/novel scenarios
            plan = self._agentic_plan_workflows(workflow_ids, user_request, rw_context)
        
        # Validate plan
        validated_plan = self._validate_plan(plan, rw_context)
        
        self.execution_plans.append(validated_plan)
        return validated_plan
    
    def _build_execution_order(self, workflow_ids: List[str]) -> List[str]:
        """
        Build execution order from dependency graph using topological sort.
        
        Args:
            workflow_ids: List of workflow IDs to order
        
        Returns:
            List of workflow IDs in execution order
        """
        # Build dependency map
        deps = {}
        for wf_id in workflow_ids:
            if wf_id in self.dependency_graph:
                deps[wf_id] = self.dependency_graph[wf_id].get('depends_on', [])
            else:
                # Unknown workflows (like release-step-X) have no dependencies
                deps[wf_id] = []
        
        # Topological sort
        execution_order = []
        remaining = set(workflow_ids)
        processed = set()
        
        while remaining:
            # Find workflows with no unprocessed dependencies
            ready = [
                wf for wf in remaining
                if all(dep in processed or dep not in workflow_ids for dep in deps.get(wf, []))
            ]
            
            if not ready:
                # Circular dependency or missing dependency
                self.logger.warning(f"Circular or missing dependencies detected, using original order")
                return workflow_ids
            
            # Process ready workflows
            for wf_id in sorted(ready):
                execution_order.append(wf_id)
                processed.add(wf_id)
                remaining.remove(wf_id)
        
        return execution_order
    
    def _get_dependencies(self, workflow_ids: List[str]) -> Dict[str, List[str]]:
        """
        Get dependency map for workflows.
        
        Args:
            workflow_ids: List of workflow IDs
        
        Returns:
            Dictionary mapping workflow_id to list of dependency IDs
        """
        dependencies = {}
        for wf_id in workflow_ids:
            if wf_id in self.dependency_graph:
                deps = self.dependency_graph[wf_id].get('depends_on', [])
                # Only include dependencies that are in the workflow list
                dependencies[wf_id] = [d for d in deps if d in workflow_ids]
            else:
                dependencies[wf_id] = []
        return dependencies
    
    def _is_complex(self, user_request: Optional[str] = None) -> bool:
        """
        Determine if a user request is complex enough to require agentic planning.
        
        Args:
            user_request: Optional user request
        
        Returns:
            True if complex, False otherwise
        """
        if not user_request:
            return False
        
        # Simple heuristics for complexity
        complex_keywords = ['and', 'then', 'after', 'before', 'multiple', 'chain']
        return any(keyword in user_request.lower() for keyword in complex_keywords)
    
    def _agentic_plan_workflows(
        self,
        workflow_ids: List[str],
        user_request: Optional[str],
        rw_context: Dict[str, Any]
    ) -> ExecutionPlan:
        """
        Use agentic intelligence to plan workflow execution.
        
        Args:
            workflow_ids: List of workflow IDs to execute
            user_request: Optional user request
            rw_context: Release Workflow context
        
        Returns:
            ExecutionPlan with workflows in execution order
        """
        # Placeholder for agentic implementation
        # In full implementation, this would:
        # 1. Analyze user request and context
        # 2. Understand workflow dependencies and requirements
        # 3. Determine optimal execution order
        # 4. Provide explanation
        
        self.logger.info("Using agentic planning for workflow execution")
        
        # For now, use simple ordering (will be enhanced with agentic intelligence)
        # Try to use dependency graph where possible
        execution_order = self._build_execution_order(workflow_ids)
        
        return ExecutionPlan(
            workflows=execution_order,
            dependencies=self._get_dependencies(execution_order),
            status=ExecutionPlanStatus.PENDING
        )
    
    def _validate_plan(
        self,
        plan: ExecutionPlan,
        rw_context: Dict[str, Any]
    ) -> ExecutionPlan:
        """
        Validate execution plan using agentic intelligence.
        
        Args:
            plan: Execution plan to validate
            rw_context: Release Workflow context
        
        Returns:
            Validated execution plan
        """
        # Placeholder for agentic validation
        # In full implementation, this would:
        # 1. Check for circular dependencies
        # 2. Verify all dependencies are available
        # 3. Validate workflow order makes sense
        # 4. Provide explanation
        
        # Basic validation
        for wf_id in plan.workflows:
            deps = plan.dependencies.get(wf_id, [])
            for dep in deps:
                if dep not in plan.workflows:
                    self.logger.warning(f"Workflow {wf_id} depends on {dep} which is not in execution plan")
        
        plan.status = ExecutionPlanStatus.VALIDATED
        return plan
    
    def execute_plan(
        self,
        plan: ExecutionPlan,
        rw_context: Optional[Dict[str, Any]] = None
    ) -> ExecutionPlan:
        """
        Execute an execution plan.
        
        Args:
            plan: Execution plan to execute
            rw_context: Optional Release Workflow context
        
        Returns:
            Execution plan with results
        """
        rw_context = rw_context or {}
        plan.status = ExecutionPlanStatus.EXECUTING
        plan.results = {}
        
        self.logger.info(f"Executing plan with {len(plan.workflows)} workflows")
        
        for workflow_id in plan.workflows:
            self.logger.info(f"Executing workflow: {workflow_id}")
            
            # Prepare context with deliverables from previous workflows
            workflow_context = self._prepare_workflow_context(
                workflow_id,
                plan,
                rw_context
            )
            
            # Execute workflow
            try:
                result = self.workflow_executor.execute_workflow(
                    workflow_id,
                    context=workflow_context
                )
                
                plan.results[workflow_id] = result
                
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
                            f"Processed deliverable from {workflow_id}: "
                            f"{processing_result.integration_status}"
                        )
                
                # Check if workflow failed
                if result.status == WorkflowStatus.FAILED:
                    self.logger.error(f"Workflow {workflow_id} failed: {result.error}")
                    plan.status = ExecutionPlanStatus.FAILED
                    break
                    
            except Exception as e:
                self.logger.error(f"Error executing workflow {workflow_id}: {str(e)}")
                plan.status = ExecutionPlanStatus.FAILED
                break
        
        if plan.status == ExecutionPlanStatus.EXECUTING:
            plan.status = ExecutionPlanStatus.COMPLETED
        
        return plan
    
    def _prepare_workflow_context(
        self,
        workflow_id: str,
        plan: ExecutionPlan,
        rw_context: Dict[str, Any]
    ) -> Dict[str, Any]:
        """
        Prepare context for workflow execution, including deliverables from dependencies.
        
        Args:
            workflow_id: ID of workflow to execute
            plan: Execution plan
            rw_context: Release Workflow context
        
        Returns:
            Workflow context dictionary
        """
        context = rw_context.copy()
        
        # Get dependencies for this workflow
        dependencies = plan.dependencies.get(workflow_id, [])
        
        # Collect deliverables from dependency workflows
        dependency_deliverables = []
        for dep_id in dependencies:
            if dep_id in plan.results:
                dep_result = plan.results[dep_id]
                if dep_result.status == WorkflowStatus.COMPLETED:
                    dependency_deliverables.extend(dep_result.deliverables)
        
        # Add dependency deliverables to context
        if dependency_deliverables:
            context['dependency_deliverables'] = dependency_deliverables
        
        return context
    
    def chain_workflows(
        self,
        workflow_ids: List[str],
        user_request: Optional[str] = None,
        rw_context: Optional[Dict[str, Any]] = None
    ) -> ExecutionPlan:
        """
        Chain multiple workflows together and execute them.
        
        This is the main entry point for workflow chaining.
        
        Args:
            workflow_ids: List of workflow IDs to chain
            user_request: Optional user request
            rw_context: Optional Release Workflow context
        
        Returns:
            Execution plan with results
        """
        # Plan execution
        plan = self.plan_workflow_execution(workflow_ids, user_request, rw_context)
        
        # Execute plan
        executed_plan = self.execute_plan(plan, rw_context)
        
        return executed_plan


# Convenience function for RW integration
def chain_workflows(
    workflow_ids: List[str],
    user_request: Optional[str] = None,
    rw_context: Optional[Dict[str, Any]] = None
) -> ExecutionPlan:
    """
    Convenience function for chaining workflows.
    
    Args:
        workflow_ids: List of workflow IDs to chain
        user_request: Optional user request
        rw_context: Optional Release Workflow context
    
    Returns:
        Execution plan with results
    """
    orchestrator = WorkflowOrchestrator()
    return orchestrator.chain_workflows(workflow_ids, user_request, rw_context)


def execute_rw_with_trigger(trigger_input: str, **kwargs) -> ExecutionPlan:
    """
    Execute Release Workflow with specific trigger type.
    
    Args:
        trigger_input: RW trigger input ('RW', 'RW -k', 'RW -d')
        **kwargs: Additional arguments for workflow execution
    
    Returns:
        Execution plan with results
    """
    try:
        # Parse trigger type
        trigger_type = parse_rw_trigger(trigger_input)
        
        # Get execution path using canonical definition
        execution_path = get_execution_path_for_trigger(trigger_type)
        
        # Create workflow list based on execution path
        workflow_ids = [f"release-step-{step}" for step in execution_path]
        
        # Prepare RW context with trigger information and task ID
        rw_context = kwargs.get('rw_context', {})
        rw_context.update({
            'trigger_type': trigger_type.value,
            'trigger_input': trigger_input,
            'execution_path': execution_path,
            'task_id': kwargs.get('task_id'),
            'user_request': kwargs.get('user_request')
        })
        
        # Execute workflows
        return chain_workflows(workflow_ids, kwargs.get('user_request'), rw_context)
        
    except ValueError as e:
        # Create failed execution plan for invalid trigger
        plan = ExecutionPlan(
            workflows=[],
            dependencies={},
            status=ExecutionPlanStatus.FAILED
        )
        plan.results = {'error': str(e)}
        return plan


if __name__ == "__main__":
    import argparse
    import sys
    
    parser = argparse.ArgumentParser(description="Workflow Orchestrator for Release Workflow")
    parser.add_argument(
        "--workflow",
        type=str,
        help="Workflow to execute (release, intake, update-kanban)"
    )
    parser.add_argument(
        "--trigger",
        type=str,
        help="RW trigger type (RW, RW -k, RW -d)"
    )
    parser.add_argument(
        "--task",
        type=str,
        help="Task ID for RW execution (optional, will infer if not provided)"
    )
    parser.add_argument(
        "--user-request",
        type=str,
        help="User request context"
    )
    
    args = parser.parse_args()
    
    if args.trigger:
        # Execute RW with specific trigger
        plan = execute_rw_with_trigger(
            trigger_input=args.trigger,
            user_request=args.user_request,
            task_id=args.task
        )
        
        if plan.status == ExecutionPlanStatus.COMPLETED:
            print(f"✅ RW execution completed successfully")
            sys.exit(0)
        else:
            print(f"❌ RW execution failed: {plan.results.get('error', 'Unknown error')}")
            sys.exit(1)
    
    elif args.workflow:
        # Execute specific workflow
        orchestrator = WorkflowOrchestrator()
        plan = orchestrator.chain_workflows([args.workflow], args.user_request)
        
        if plan.status == ExecutionPlanStatus.COMPLETED:
            print(f"✅ Workflow {args.workflow} completed successfully")
            sys.exit(0)
        else:
            print(f"❌ Workflow {args.workflow} failed")
            sys.exit(1)
    
    else:
        print("❌ Must specify either --workflow or --trigger")
        sys.exit(1)

