"""
Deliverable Processing Intelligence for Release Workflow

This module implements intelligent deliverable processing that can identify
deliverable types, determine appropriate actions, and integrate deliverables
into the Release Workflow. It follows a hybrid approach: type registry for
known deliverable types, with agentic analysis for unknown types.

Epic: Epic 2 (Workflow Management Framework)
Story: Story 7 (Trigger-Aware Release Workflow)
Task: Task 4 (Implement deliverable processing intelligence)
"""

import logging
from typing import Dict, List, Optional, Any, Callable
from dataclasses import dataclass
from enum import Enum
from pathlib import Path


class DeliverableType(Enum):
    """Types of deliverables that can be processed."""
    KANBAN_TASKS = "kanban_tasks"
    DOCUMENTATION = "documentation"
    CODE_CHANGES = "code_changes"
    CONFIGURATION = "configuration"
    UNKNOWN = "unknown"


@dataclass
class Action:
    """Represents an action to take with a deliverable."""
    name: str
    priority: int
    handler: Callable
    description: str
    dependencies: List[str] = None


@dataclass
class Deliverable:
    """Represents a deliverable from a sub-workflow."""
    type: DeliverableType
    data: Dict[str, Any]
    source_workflow: str
    metadata: Optional[Dict[str, Any]] = None


@dataclass
class ProcessingResult:
    """Result of deliverable processing."""
    deliverable: Deliverable
    actions_taken: List[str]
    integration_status: str
    errors: List[str] = None


# Deliverable Type Registry
DELIVERABLE_REGISTRY: Dict[str, Dict] = {
    'kanban_tasks': {
        'type': DeliverableType.KANBAN_TASKS,
        'detection': lambda d: d.get('type') == 'kanban_tasks' or 'tasks' in d.get('data', {}),
        'actions': [
            {
                'name': 'update_kanban_board',
                'priority': 1,
                'description': 'Update Kanban board with new tasks',
                'handler': 'update_kanban_board'
            },
            {
                'name': 'update_versioning',
                'priority': 2,
                'description': 'Update versioning to reflect new tasks',
                'handler': 'update_versioning'
            },
            {
                'name': 'update_changelog',
                'priority': 3,
                'description': 'Update changelog with task creation',
                'handler': 'update_changelog'
            }
        ],
        'integration_points': [
            'docs/project-management/kanban/',
            'CHANGELOG.md',
            'src/*/version.py'
        ]
    },
    'documentation': {
        'type': DeliverableType.DOCUMENTATION,
        'detection': lambda d: d.get('type') == 'documentation' or 'docs' in d.get('data', {}),
        'actions': [
            {
                'name': 'update_changelog',
                'priority': 1,
                'description': 'Update changelog with documentation changes',
                'handler': 'update_changelog'
            },
            {
                'name': 'validate_format',
                'priority': 2,
                'description': 'Validate documentation format',
                'handler': 'validate_documentation'
            }
        ],
        'integration_points': [
            'docs/documentation/',
            'CHANGELOG.md'
        ]
    },
    'code_changes': {
        'type': DeliverableType.CODE_CHANGES,
        'detection': lambda d: d.get('type') == 'code_changes' or 'files' in d.get('data', {}),
        'actions': [
            {
                'name': 'validate_code',
                'priority': 1,
                'description': 'Validate code changes',
                'handler': 'validate_code'
            },
            {
                'name': 'update_changelog',
                'priority': 2,
                'description': 'Update changelog with code changes',
                'handler': 'update_changelog'
            }
        ],
        'integration_points': [
            'CHANGELOG.md',
            'src/'
        ]
    },
}


class DeliverableProcessor:
    """Processor for intelligently handling deliverables from sub-workflows."""
    
    def __init__(self, project_root: Optional[Path] = None):
        """
        Initialize the deliverable processor.
        
        Args:
            project_root: Root directory of the project
        """
        self.project_root = project_root or Path.cwd()
        self.registry = DELIVERABLE_REGISTRY.copy()
        self.logger = logging.getLogger(__name__)
        self.action_handlers: Dict[str, Callable] = {}
    
    def register_action_handler(self, action_name: str, handler: Callable) -> None:
        """
        Register an action handler.
        
        Args:
            action_name: Name of the action
            handler: Function to handle the action
        """
        self.action_handlers[action_name] = handler
        self.logger.info(f"Registered action handler: {action_name}")
    
    def process_deliverable(
        self,
        deliverable: Deliverable,
        rw_context: Optional[Dict[str, Any]] = None
    ) -> ProcessingResult:
        """
        Process a deliverable intelligently.
        
        Uses type registry for known types, agentic analysis for unknown types.
        
        Args:
            deliverable: Deliverable to process
            rw_context: Optional Release Workflow context
        
        Returns:
            ProcessingResult with actions taken and integration status
        """
        rw_context = rw_context or {}
        
        self.logger.info(f"Processing deliverable: {deliverable.type.value} from {deliverable.source_workflow}")
        
        # Identify deliverable type
        deliverable_type = self._identify_deliverable_type(deliverable)
        
        # Determine actions
        actions = self._determine_actions(deliverable_type, deliverable, rw_context)
        
        # Execute actions
        actions_taken = []
        errors = []
        
        for action in sorted(actions, key=lambda a: a.priority):
            try:
                self.logger.info(f"Executing action: {action.name} (priority: {action.priority})")
                self._execute_action(action, deliverable, rw_context)
                actions_taken.append(action.name)
            except Exception as e:
                error_msg = f"Action {action.name} failed: {str(e)}"
                self.logger.error(error_msg)
                errors.append(error_msg)
        
        # Integrate deliverable into RW
        integration_status = self._integrate_deliverable(deliverable, actions_taken, rw_context)
        
        return ProcessingResult(
            deliverable=deliverable,
            actions_taken=actions_taken,
            integration_status=integration_status,
            errors=errors if errors else None
        )
    
    def _identify_deliverable_type(self, deliverable: Deliverable) -> DeliverableType:
        """
        Identify the type of a deliverable.
        
        Uses registry first, then agentic analysis if needed.
        
        Args:
            deliverable: Deliverable to identify
        
        Returns:
            DeliverableType enum
        """
        # Try registry first
        for type_id, type_def in self.registry.items():
            detection_func = type_def.get('detection')
            if detection_func and detection_func(deliverable.data):
                self.logger.info(f"Identified deliverable type: {type_id} (via registry)")
                return type_def['type']
        
        # Agentic analysis for unknown types
        self.logger.info("Deliverable type not found in registry, using agentic analysis")
        return self._agentic_identify_type(deliverable)
    
    def _agentic_identify_type(self, deliverable: Deliverable) -> DeliverableType:
        """
        Use agentic intelligence to identify deliverable type.
        
        Args:
            deliverable: Deliverable to identify
        
        Returns:
            DeliverableType enum
        """
        # Placeholder for agentic implementation
        # In full implementation, this would:
        # 1. Analyze deliverable data structure
        # 2. Understand content and context
        # 3. Determine appropriate type
        # 4. Provide explanation
        
        # For now, return UNKNOWN and let action determination handle it
        self.logger.warning("Agentic type identification not yet implemented, defaulting to UNKNOWN")
        return DeliverableType.UNKNOWN
    
    def _determine_actions(
        self,
        deliverable_type: DeliverableType,
        deliverable: Deliverable,
        rw_context: Dict[str, Any]
    ) -> List[Action]:
        """
        Determine appropriate actions for a deliverable.
        
        Uses registry for known types, agentic analysis for unknown types.
        
        Args:
            deliverable_type: Type of deliverable
            deliverable: Deliverable data
            rw_context: Release Workflow context
        
        Returns:
            List of Action objects
        """
        # Try registry first
        type_id = deliverable_type.value
        if type_id in self.registry:
            type_def = self.registry[type_id]
            actions = []
            
            for action_def in type_def.get('actions', []):
                actions.append(Action(
                    name=action_def['name'],
                    priority=action_def['priority'],
                    handler=self.action_handlers.get(action_def['handler']),
                    description=action_def['description'],
                    dependencies=action_def.get('dependencies', [])
                ))
            
            # Agentic validation of actions
            validated_actions = self._agentic_validate_actions(actions, deliverable, rw_context)
            
            self.logger.info(f"Determined {len(validated_actions)} actions for {type_id} (via registry)")
            return validated_actions
        
        # Agentic analysis for unknown types
        self.logger.info("Deliverable type unknown, using agentic analysis for actions")
        return self._agentic_determine_actions(deliverable, rw_context)
    
    def _agentic_validate_actions(
        self,
        actions: List[Action],
        deliverable: Deliverable,
        rw_context: Dict[str, Any]
    ) -> List[Action]:
        """
        Use agentic intelligence to validate actions from registry.
        
        Args:
            actions: Actions from registry
            deliverable: Deliverable data
            rw_context: Release Workflow context
        
        Returns:
            Validated list of actions
        """
        # Placeholder for agentic validation
        # In full implementation, this would:
        # 1. Analyze deliverable and context
        # 2. Validate each action is appropriate
        # 3. Add or remove actions as needed
        # 4. Provide explanation
        
        # For now, return actions as-is
        return actions
    
    def _agentic_determine_actions(
        self,
        deliverable: Deliverable,
        rw_context: Dict[str, Any]
    ) -> List[Action]:
        """
        Use agentic intelligence to determine actions for unknown deliverable types.
        
        Args:
            deliverable: Deliverable data
            rw_context: Release Workflow context
        
        Returns:
            List of Action objects
        """
        # Placeholder for agentic implementation
        # In full implementation, this would:
        # 1. Analyze deliverable structure and content
        # 2. Understand context and requirements
        # 3. Determine appropriate actions
        # 4. Provide explanation
        
        self.logger.warning("Agentic action determination not yet implemented")
        return []
    
    def _execute_action(
        self,
        action: Action,
        deliverable: Deliverable,
        rw_context: Dict[str, Any]
    ) -> None:
        """
        Execute an action on a deliverable.
        
        Args:
            action: Action to execute
            deliverable: Deliverable data
            rw_context: Release Workflow context
        """
        if not action.handler:
            raise ValueError(f"Action handler not found: {action.name}")
        
        # Execute handler
        action.handler(deliverable, rw_context)
    
    def _integrate_deliverable(
        self,
        deliverable: Deliverable,
        actions_taken: List[str],
        rw_context: Dict[str, Any]
    ) -> str:
        """
        Integrate deliverable into Release Workflow.
        
        Args:
            deliverable: Deliverable data
            actions_taken: List of actions that were executed
            rw_context: Release Workflow context
        
        Returns:
            Integration status string
        """
        # Determine integration points from registry
        type_id = deliverable.type.value
        if type_id in self.registry:
            integration_points = self.registry[type_id].get('integration_points', [])
            self.logger.info(f"Integrating deliverable into: {integration_points}")
        
        # Update RW context with deliverable information
        if 'deliverables' not in rw_context:
            rw_context['deliverables'] = []
        
        rw_context['deliverables'].append({
            'type': deliverable.type.value,
            'source': deliverable.source_workflow,
            'actions': actions_taken
        })
        
        return "integrated"
    
    def register_deliverable_type(self, type_id: str, type_def: Dict) -> None:
        """
        Register a new deliverable type in the registry.
        
        Args:
            type_id: Unique identifier for the type
            type_def: Type definition dictionary
        """
        self.registry[type_id] = type_def
        self.logger.info(f"Registered deliverable type: {type_id}")


# Default action handlers (placeholders - to be implemented)
def update_kanban_board(deliverable: Deliverable, rw_context: Dict[str, Any]) -> None:
    """Update Kanban board with new tasks."""
    # Placeholder - to be implemented
    logging.getLogger(__name__).info("Updating Kanban board with tasks")


def update_versioning(deliverable: Deliverable, rw_context: Dict[str, Any]) -> None:
    """Update versioning to reflect new tasks."""
    # Placeholder - to be implemented
    logging.getLogger(__name__).info("Updating versioning")


def update_changelog(deliverable: Deliverable, rw_context: Dict[str, Any]) -> None:
    """Update changelog with deliverable information."""
    # Placeholder - to be implemented
    logging.getLogger(__name__).info("Updating changelog")


def validate_documentation(deliverable: Deliverable, rw_context: Dict[str, Any]) -> None:
    """Validate documentation format."""
    # Placeholder - to be implemented
    logging.getLogger(__name__).info("Validating documentation")


def validate_code(deliverable: Deliverable, rw_context: Dict[str, Any]) -> None:
    """Validate code changes."""
    # Placeholder - to be implemented
    logging.getLogger(__name__).info("Validating code")

