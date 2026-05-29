#!/usr/bin/env python3
"""
Intake Workflow Trigger Handler

Handler function for executing intake workflow when triggered by FR/BR/UXR commits.
Integrates with trigger-aware RW (E2:S07) to automatically run intake workflow.

Part of Epic 2, Story 11, Task 7: Add Trigger-Aware Execution Support.

Usage:
    from intake_workflow_trigger_handler import execute_intake_workflow
    
    result = execute_intake_workflow(changed_files, project_root, **kwargs)
"""

import sys
from pathlib import Path
from typing import Dict, List, Optional, Any

# Add scripts to path
scripts_path = Path(__file__).parent
if str(scripts_path) not in sys.path:
    sys.path.insert(0, str(scripts_path))

# Import intake components
try:
    from intake_decision_flow import IntakeDecisionFlow
    from intake_task_creation import IntakeTaskCreation
    from intake_documentation_update import IntakeDocumentationUpdate
    from intake_dependency_wiring import IntakeDependencyWiring
    from intake_version_assignment import IntakeVersionAssignment
except ImportError as e:
    print(f"⚠️  Warning: Could not import intake components: {e}")
    raise


def execute_intake_workflow(
    changed_files: List[str],
    project_root: Optional[str] = None,
    kanban_path: Optional[str] = None,
    framework_path: Optional[str] = None,
    config: Optional[Dict] = None,
    **kwargs
) -> Dict[str, Any]:
    """
    Execute intake workflow for FR/BR/UXR files detected in changed files.
    
    This function is called by the trigger-aware RW system when FR/BR/UXR commits
    are detected. It runs the complete intake workflow:
    1. Decision Flow Analysis
    2. Task Creation
    3. Documentation Updates
    4. Dependency Wiring
    5. Version Assignment
    
    Args:
        changed_files: List of changed file paths (relative or absolute)
        project_root: Root directory of the project
        kanban_path: Path to Kanban structure
        framework_path: Path to Kanban framework
        config: Optional configuration dict
        **kwargs: Additional context from trigger system
    
    Returns:
        Dict with workflow execution results:
        {
            'success': bool,
            'processed_files': List[str],
            'created_tasks': List[str],
            'errors': List[str],
            'warnings': List[str],
            'explanation': str
        }
    """
    project_root = Path(project_root) if project_root else Path.cwd()
    kanban_path = Path(kanban_path) if kanban_path else project_root / "docs/project-management/kanban"
    framework_path = Path(framework_path) if framework_path else project_root / "packages/frameworks/kanban"
    config = config or {}
    
    # Extract FR/BR/UXR files from changed files
    fr_br_files = _extract_fr_br_files(changed_files, project_root)
    
    if not fr_br_files:
        return {
            'success': True,
            'processed_files': [],
            'created_tasks': [],
            'errors': [],
            'warnings': ['No FR/BR/UXR files found in changed files'],
            'explanation': 'No FR/BR/UXR files to process'
        }
    
    processed_files = []
    created_tasks = []
    all_errors = []
    all_warnings = []
    explanation_parts = []
    
    explanation_parts.append(f"🔍 Processing {len(fr_br_files)} FR/BR/UXR file(s)")
    
    # Process each FR/BR/UXR file
    for fr_br_path in fr_br_files:
        try:
            explanation_parts.append(f"\n📄 Processing: {fr_br_path.name}")
            
            # Step 1: Decision Flow Analysis
            decision_flow = IntakeDecisionFlow(kanban_path, framework_path, config)
            intake_decision = decision_flow.analyze(fr_br_path)
            
            if intake_decision.epic_number == 0:
                all_warnings.append(f"{fr_br_path.name}: No epic match found - skipping")
                explanation_parts.append(f"⚠️  Skipped: No epic match")
                continue
            
            # Step 2: Task Creation
            task_creation = IntakeTaskCreation(kanban_path, framework_path, config)
            task_result = task_creation.create_tasks(fr_br_path, intake_decision)
            
            if not task_result.success:
                all_errors.extend([f"{fr_br_path.name}: {e}" for e in task_result.errors])
                all_warnings.extend([f"{fr_br_path.name}: {w}" for w in task_result.warnings])
                explanation_parts.append(f"❌ Task creation failed")
                continue
            
            created_tasks.extend([t.task_id for t in task_result.created_tasks])
            
            # Step 3: Version Assignment
            version_assignment = IntakeVersionAssignment(config)
            is_new_story = intake_decision.new_story_recommended
            is_new_task = intake_decision.new_task_recommended
            version_result = version_assignment.assign_version(
                intake_decision,
                task_result.created_tasks,
                is_new_story,
                is_new_task
            )
            
            if not version_result.success:
                all_warnings.extend([f"{fr_br_path.name}: {w}" for w in version_result.warnings])
            
            # Step 4: Documentation Updates
            doc_update = IntakeDocumentationUpdate(config)
            doc_result = doc_update.update_document(
                fr_br_path,
                intake_decision,
                task_result.created_tasks,
                version_result.version_marker
            )
            
            if not doc_result.success:
                all_warnings.extend([f"{fr_br_path.name}: {w}" for w in doc_result.warnings])
            
            # Step 5: Dependency Wiring
            dependency_wiring = IntakeDependencyWiring(config, kanban_path)
            dep_result = dependency_wiring.wire_dependencies(fr_br_path, task_result.created_tasks)
            
            if not dep_result.success:
                all_warnings.extend([f"{fr_br_path.name}: {w}" for w in dep_result.warnings])
            
            processed_files.append(str(fr_br_path))
            explanation_parts.append(f"✅ Processed successfully")
            
        except Exception as e:
            error_msg = f"{fr_br_path.name}: {str(e)}"
            all_errors.append(error_msg)
            explanation_parts.append(f"❌ Error: {error_msg}")
            import traceback
            traceback.print_exc()
    
    success = len(all_errors) == 0
    
    return {
        'success': success,
        'processed_files': processed_files,
        'created_tasks': created_tasks,
        'errors': all_errors,
        'warnings': all_warnings,
        'explanation': '\n'.join(explanation_parts)
    }


def _extract_fr_br_files(changed_files: List[str], project_root: Path) -> List[Path]:
    """
    Extract FR/BR/UXR file paths from changed files.
    
    Args:
        changed_files: List of changed file paths
        project_root: Root directory of the project
    
    Returns:
        List of Path objects for FR/BR/UXR files
    """
    fr_br_files = []
    
    for file_path_str in changed_files:
        # Convert to Path
        file_path = Path(file_path_str)
        
        # Make relative to project root if absolute
        if file_path.is_absolute():
            try:
                file_path = file_path.relative_to(project_root)
            except ValueError:
                # File is outside project root, skip
                continue
        
        # Check if it's an FR/BR/UXR file
        filename = file_path.name.upper()
        if (filename.startswith('FR-') or filename.startswith('BR-') or 
            filename.startswith('UXR-')):
            full_path = project_root / file_path
            if full_path.exists() and full_path.suffix == '.md':
                fr_br_files.append(full_path)
    
    return fr_br_files


# Convenience function for workflow executor
def create_intake_workflow(**params) -> Dict[str, Any]:
    """
    Convenience function for workflow executor.
    
    This function signature matches what workflow_executor expects.
    """
    return execute_intake_workflow(**params)
