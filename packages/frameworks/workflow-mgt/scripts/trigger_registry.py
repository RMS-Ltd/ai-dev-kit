"""
Trigger Registry for Release Workflow

This module implements the trigger registry system for detecting triggers in commits,
files, and context. It follows a hybrid approach: pattern registry for fast detection
of common patterns, with agentic analysis as a fallback for complex cases.

Epic: Epic 2 (Workflow Management Framework)
Story: Story 7 (Trigger-Aware Release Workflow)
Task: Task 2 (Implement trigger registry)
"""

import re
import fnmatch
from typing import Dict, List, Optional, Tuple
from dataclasses import dataclass
from enum import Enum


class TriggerType(Enum):
    """Types of triggers supported by the registry."""
    COMMIT_MESSAGE = "commit_message"
    FILE_PATH = "file_path"
    MANUAL = "manual"


class ConfidenceLevel(Enum):
    """Confidence levels for trigger detection."""
    HIGH = "high"
    MEDIUM = "medium"
    LOW = "low"


@dataclass
class TriggerMatch:
    """Represents a single match for a trigger pattern."""
    pattern: str
    match_type: TriggerType
    matched_text: str
    position: Optional[Tuple[int, int]] = None


@dataclass
class Trigger:
    """Represents a detected trigger."""
    id: str
    name: str
    description: str
    workflow: str
    confidence: ConfidenceLevel
    source: str  # 'pattern_registry' or 'agentic_analysis'
    matches: List[TriggerMatch]
    priority: int = 1


# Trigger Registry Definition
TRIGGER_REGISTRY: Dict[str, Dict] = {
    'fr_commit': {
        'name': 'Feature Request Commit',
        'description': 'Detects Feature Request commits',
        'type': TriggerType.COMMIT_MESSAGE,
        'patterns': [
            r'FR\d+',           # Matches FR012, FR-012, FR123 (dash is optional in pattern)
            r'\[FR\d+\]',       # Matches [FR012], [FR-012]
            r'FR-\d+',          # Explicit dash format
        ],
        'file_patterns': [
            'fr-br/FR-*.md',
            'docs/project-management/kanban/fr-br/FR-*.md',
        ],
        'workflow': 'intake_workflow',  # Use intake workflow (E2:S11) instead of agentic_task_creation
        'confidence': ConfidenceLevel.HIGH,
        'priority': 1,
    },
    'br_commit': {
        'name': 'Bug Report Commit',
        'description': 'Detects Bug Report commits',
        'type': TriggerType.COMMIT_MESSAGE,
        'patterns': [
            r'BR\d+',           # Matches BR007, BR-007, BR456 (dash is optional in pattern)
            r'\[BR\d+\]',       # Matches [BR007], [BR-007]
            r'BR-\d+',          # Explicit dash format
        ],
        'file_patterns': [
            'fr-br/BR-*.md',
            'docs/project-management/kanban/fr-br/BR-*.md',
        ],
        'workflow': 'intake_workflow',  # Use intake workflow (E2:S11) instead of agentic_task_creation
        'confidence': ConfidenceLevel.HIGH,
        'priority': 1,
    },
    'uxr_commit': {
        'name': 'User Experience Research Commit',
        'description': 'Detects UXR commits',
        'type': TriggerType.COMMIT_MESSAGE,
        'patterns': [
            r'UXR\d+',          # Matches UXR001, UXR-001, UXR789 (dash is optional in pattern)
            r'\[UXR\d+\]',      # Matches [UXR001], [UXR-001]
            r'UXR-\d+',          # Explicit dash format
        ],
        'file_patterns': [
            'fr-br/UXR-*.md',
            'docs/project-management/kanban/fr-br/UXR-*.md',
        ],
        'workflow': 'intake_workflow',  # Use intake workflow (E2:S11) instead of agentic_task_creation
        'confidence': ConfidenceLevel.HIGH,
        'priority': 1,
    },
}


class TriggerRegistry:
    """Registry for managing and detecting triggers."""
    
    def __init__(self, registry: Optional[Dict[str, Dict]] = None):
        """
        Initialize the trigger registry.
        
        Args:
            registry: Optional custom registry. If None, uses default TRIGGER_REGISTRY.
        """
        self.registry = registry or TRIGGER_REGISTRY.copy()
    
    def register_trigger(self, trigger_id: str, trigger_def: Dict) -> None:
        """
        Register a new trigger in the registry.
        
        Args:
            trigger_id: Unique identifier for the trigger
            trigger_def: Trigger definition dictionary
        """
        self.registry[trigger_id] = trigger_def
    
    def detect_triggers(
        self,
        commit_message: str,
        changed_files: List[str],
        context: Optional[Dict] = None
    ) -> List[Trigger]:
        """
        Detect triggers from commit message, changed files, and context.
        
        Uses pattern matching (fast path) first, with agentic analysis as fallback.
        
        Args:
            commit_message: Git commit message
            changed_files: List of changed file paths
            context: Optional additional context (branch, tags, etc.)
        
        Returns:
            List of detected triggers, sorted by priority and confidence
        """
        triggers = []
        context = context or {}
        
        # Fast path: Pattern matching
        for trigger_id, trigger_def in self.registry.items():
            matches = []
            
            # Test commit message patterns
            for pattern in trigger_def.get('patterns', []):
                pattern_matches = re.finditer(pattern, commit_message, re.IGNORECASE)
                for match in pattern_matches:
                    matches.append(TriggerMatch(
                        pattern=pattern,
                        match_type=TriggerType.COMMIT_MESSAGE,
                        matched_text=match.group(0),
                        position=(match.start(), match.end())
                    ))
            
            # Test file patterns
            for file_pattern in trigger_def.get('file_patterns', []):
                for file_path in changed_files:
                    if fnmatch.fnmatch(file_path, file_pattern):
                        matches.append(TriggerMatch(
                            pattern=file_pattern,
                            match_type=TriggerType.FILE_PATH,
                            matched_text=file_path
                        ))
            
            if matches:
                # Convert confidence string to enum if needed
                confidence = trigger_def.get('confidence', ConfidenceLevel.HIGH)
                if isinstance(confidence, str):
                    confidence = ConfidenceLevel(confidence)
                
                triggers.append(Trigger(
                    id=trigger_id,
                    name=trigger_def.get('name', trigger_id),
                    description=trigger_def.get('description', ''),
                    workflow=trigger_def.get('workflow', ''),
                    confidence=confidence,
                    source='pattern_registry',
                    matches=matches,
                    priority=trigger_def.get('priority', 1)
                ))
        
        # Sort by priority (lower = higher priority) and confidence
        triggers.sort(key=lambda t: (
            t.priority,
            t.confidence.value if isinstance(t.confidence, ConfidenceLevel) else t.confidence
        ))
        
        return triggers
    
    def get_trigger(self, trigger_id: str) -> Optional[Dict]:
        """
        Get trigger definition by ID.
        
        Args:
            trigger_id: Trigger identifier
        
        Returns:
            Trigger definition dictionary or None if not found
        """
        return self.registry.get(trigger_id)
    
    def list_triggers(self) -> List[str]:
        """
        List all registered trigger IDs.
        
        Returns:
            List of trigger IDs
        """
        return list(self.registry.keys())


# Global registry instance
_default_registry = TriggerRegistry()


def detect_triggers(
    commit_message: str,
    changed_files: List[str],
    context: Optional[Dict] = None
) -> List[Trigger]:
    """
    Convenience function to detect triggers using the default registry.
    
    Args:
        commit_message: Git commit message
        changed_files: List of changed file paths
        context: Optional additional context
    
    Returns:
        List of detected triggers
    """
    return _default_registry.detect_triggers(commit_message, changed_files, context)


def register_trigger(trigger_id: str, trigger_def: Dict) -> None:
    """
    Convenience function to register a trigger in the default registry.
    
    Args:
        trigger_id: Unique identifier for the trigger
        trigger_def: Trigger definition dictionary
    """
    _default_registry.register_trigger(trigger_id, trigger_def)


def get_trigger(trigger_id: str) -> Optional[Dict]:
    """
    Convenience function to get a trigger definition from the default registry.
    
    Args:
        trigger_id: Trigger identifier
    
    Returns:
        Trigger definition dictionary or None if not found
    """
    return _default_registry.get_trigger(trigger_id)

