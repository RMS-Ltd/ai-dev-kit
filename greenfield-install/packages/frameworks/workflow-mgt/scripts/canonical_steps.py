"""
Canonical RW Steps Loader

This module provides functions to load and access the canonical Release Workflow step definitions
from the single source of truth YAML file. This prevents duplication and drift across the codebase.

Usage:
    from canonical_steps import get_canonical_steps, get_execution_path, get_step_definition
    
    steps = get_canonical_steps()
    full_path = get_execution_path("full_release")
    step_13 = get_step_definition(13)
"""

import yaml
from pathlib import Path
from typing import Dict, List, Any, Optional
from dataclasses import dataclass


@dataclass
class StepDefinition:
    """Definition of a single RW step."""
    number: float
    name: str
    description: str
    mandatory: bool
    blocking: bool
    category: str
    recommended: bool = False


@dataclass
class ExecutionPath:
    """Definition of an execution path for a trigger type."""
    trigger: str
    steps: List[float]
    description: str
    category: str
    step_modifications: Optional[Dict[str, Any]] = None
    skips: Optional[List[str]] = None


class CanonicalStepsLoader:
    """Loads and provides access to canonical RW step definitions."""
    
    def __init__(self, canonical_file: Optional[Path] = None):
        """
        Initialize the loader.
        
        Args:
            canonical_file: Path to canonical-rw-steps.yaml. If None, uses default location.
        """
        if canonical_file is None:
            # Default location relative to this script
            canonical_file = Path(__file__).parent.parent / "canonical-rw-steps.yaml"
        
        self.canonical_file = canonical_file
        self._data = None
        self._steps = None
        self._execution_paths = None
    
    def _load_data(self) -> Dict[str, Any]:
        """Load the canonical YAML data."""
        if self._data is None:
            if not self.canonical_file.exists():
                raise FileNotFoundError(f"Canonical steps file not found: {self.canonical_file}")
            
            with open(self.canonical_file, 'r', encoding='utf-8') as f:
                self._data = yaml.safe_load(f)
        
        return self._data
    
    def get_steps(self) -> Dict[float, StepDefinition]:
        """Get all step definitions."""
        if self._steps is None:
            data = self._load_data()
            self._steps = {}
            
            for step_key, step_data in data['canonical_rw_steps'].items():
                step_def = StepDefinition(
                    number=step_data['number'],
                    name=step_data['name'],
                    description=step_data['description'],
                    mandatory=step_data.get('mandatory', False),
                    blocking=step_data.get('blocking', False),
                    category=step_data.get('category', 'general'),
                    recommended=step_data.get('recommended', False)
                )
                self._steps[step_def.number] = step_def
        
        return self._steps
    
    def get_step_definition(self, step_number: float) -> Optional[StepDefinition]:
        """Get a specific step definition by number."""
        steps = self.get_steps()
        return steps.get(step_number)
    
    def get_execution_paths(self) -> Dict[str, ExecutionPath]:
        """Get all execution path definitions."""
        if self._execution_paths is None:
            data = self._load_data()
            self._execution_paths = {}
            
            for path_key, path_data in data['execution_paths'].items():
                path_def = ExecutionPath(
                    trigger=path_data['trigger'],
                    steps=path_data['steps'],
                    description=path_data['description'],
                    category=path_data.get('category', 'general'),
                    step_modifications=path_data.get('step_modifications'),
                    skips=path_data.get('skips')
                )
                self._execution_paths[path_key] = path_def
        
        return self._execution_paths
    
    def get_execution_path(self, trigger: str) -> Optional[ExecutionPath]:
        """Get execution path by trigger type."""
        paths = self.get_execution_paths()
        
        # Find path by trigger
        for path in paths.values():
            if path.trigger == trigger:
                return path
        
        return None
    
    def get_steps_for_trigger(self, trigger: str) -> List[float]:
        """Get step numbers for a specific trigger."""
        path = self.get_execution_path(trigger)
        return path.steps if path else []
    
    def should_execute_step(self, step_number: float, trigger: str) -> bool:
        """Check if a step should execute for a given trigger."""
        steps = self.get_steps_for_trigger(trigger)
        return step_number in steps
    
    def get_step_modifications(self, step_number: float, trigger: str) -> Dict[str, Any]:
        """Get step-specific modifications for a trigger."""
        path = self.get_execution_path(trigger)
        if not path or not path.step_modifications:
            return {}

        mods = path.step_modifications
        # YAML may load step keys as int; callers may pass int or float (e.g. 7 vs 7.0)
        if step_number in mods:
            return mods[step_number]
        if step_number == int(step_number) and int(step_number) in mods:
            return mods[int(step_number)]
        return mods.get(str(step_number), {})
    
    def get_metadata(self) -> Dict[str, Any]:
        """Get metadata from the canonical file."""
        data = self._load_data()
        return data.get('metadata', {})
    
    def validate_step_number(self, step_number: float) -> bool:
        """Validate that a step number exists in the canonical definition."""
        return step_number in self.get_steps()
    
    def get_mandatory_steps(self) -> List[float]:
        """Get list of mandatory step numbers."""
        steps = self.get_steps()
        return [num for num, step in steps.items() if step.mandatory]
    
    def get_recommended_steps(self) -> List[float]:
        """Get list of recommended step numbers."""
        steps = self.get_steps()
        return [num for num, step in steps.items() if step.recommended]


# Global loader instance
_loader = None


def get_loader() -> CanonicalStepsLoader:
    """Get the global canonical steps loader instance."""
    global _loader
    if _loader is None:
        _loader = CanonicalStepsLoader()
    return _loader


def get_canonical_steps() -> Dict[float, StepDefinition]:
    """Get all canonical step definitions."""
    return get_loader().get_steps()


def get_step_definition(step_number: float) -> Optional[StepDefinition]:
    """Get a specific step definition."""
    return get_loader().get_step_definition(step_number)


def get_execution_paths() -> Dict[str, ExecutionPath]:
    """Get all execution path definitions."""
    return get_loader().get_execution_paths()


def get_execution_path(trigger: str) -> Optional[ExecutionPath]:
    """Get execution path by trigger type."""
    return get_loader().get_execution_path(trigger)


def get_steps_for_trigger(trigger: str) -> List[float]:
    """Get step numbers for a specific trigger."""
    return get_loader().get_steps_for_trigger(trigger)


def should_execute_step(step_number: float, trigger: str) -> bool:
    """Check if a step should execute for a given trigger."""
    return get_loader().should_execute_step(step_number, trigger)


def get_step_modifications(step_number: float, trigger: str) -> Dict[str, Any]:
    """Get step-specific modifications for a trigger."""
    return get_loader().get_step_modifications(step_number, trigger)


def get_step_name(step_number: float) -> str:
    """Get step name by number."""
    step = get_step_definition(step_number)
    return step.name if step else f"Step {step_number}"


def get_step_description(step_number: float) -> str:
    """Get step description by number."""
    step = get_step_definition(step_number)
    return step.description if step else f"Description for step {step_number}"


def list_all_steps() -> List[str]:
    """Get a list of all step names in order."""
    steps = get_canonical_steps()
    return [step.name for num, step in sorted(steps.items())]


def list_triggers() -> List[str]:
    """Get list of available trigger types."""
    paths = get_execution_paths()
    return [path.trigger for path in paths.values()]


if __name__ == "__main__":
    # Demo functionality
    print("Canonical RW Steps Loader Demo")
    print("=" * 40)
    
    # List all steps
    print("All Steps:")
    for num, step in get_canonical_steps().items():
        status = "MANDATORY" if step.mandatory else "Optional"
        if step.recommended:
            status += " (Recommended)"
        print(f"  {num:4}: {step.name} - {status}")
    
    print("\nExecution Paths:")
    for path in get_execution_paths().values():
        print(f"  {path.trigger}: {path.description}")
        print(f"    Steps: {path.steps}")
    
    print(f"\nStep 13 Definition:")
    step_13 = get_step_definition(13)
    if step_13:
        print(f"  Name: {step_13.name}")
        print(f"  Description: {step_13.description}")
        print(f"  Mandatory: {step_13.mandatory}")
        print(f"  Recommended: {step_13.recommended}")
