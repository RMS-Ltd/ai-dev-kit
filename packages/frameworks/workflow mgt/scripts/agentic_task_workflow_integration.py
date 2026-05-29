"""
Agentic Task Creation Workflow Integration

This module provides the integration layer between the trigger-aware Release Workflow
and the agentic task creation workflow. It extracts FR/BR/UXR documents from commits
and processes them to create Kanban tasks automatically.

Epic: Epic 2 (Workflow Management Framework)
Story: Story 7 (Trigger-Aware Release Workflow)
Task: Task 6 (Integrate with agentic task creation workflow)
"""

import sys
import logging
from pathlib import Path
from typing import Dict, List, Optional, Any

# Add kanban scripts to path
kanban_scripts_path = Path(__file__).parent.parent.parent / "kanban" / "scripts"
sys.path.insert(0, str(kanban_scripts_path))

from agentic_task_workflow import AgenticTaskWorkflow, WorkflowResult


logger = logging.getLogger(__name__)


def create_tasks_from_commit(
    changed_files: List[str],
    project_root: Optional[str] = None,
    kanban_path: Optional[str] = None,
    framework_path: Optional[str] = None,
    **kwargs
) -> Dict[str, Any]:
    """
    Create Kanban tasks from FR/BR/UXR files in a commit.
    
    This function is called by the workflow executor when FR/BR/UXR commits
    are detected. It processes each FR/BR/UXR file and creates tasks.
    
    Args:
        changed_files: List of changed file paths from the commit
        project_root: Root directory of the project (defaults to current directory)
        kanban_path: Path to project's Kanban structure (defaults to docs/project-management/kanban)
        framework_path: Path to Kanban framework (defaults to packages/frameworks/kanban)
        **kwargs: Additional context from trigger (commit_message, trigger info, etc.)
    
    Returns:
        Dictionary with workflow results and deliverables:
        {
            'success': bool,
            'tasks_created': int,
            'deliverables': [
                {
                    'type': 'kanban_tasks',
                    'data': {
                        'tasks': [...],
                        'epic': int,
                        'story': int,
                        'fr_br_id': str
                    }
                }
            ],
            'errors': List[str],
            'warnings': List[str],
            'explanation': str
        }
    """
    project_root = Path(project_root) if project_root else Path.cwd()
    
    # Determine paths
    if kanban_path:
        kanban_path = Path(kanban_path)
    else:
        kanban_path = project_root / "KB" / "Project_Management" / "kanban"
    
    if framework_path:
        framework_path = Path(framework_path)
    else:
        framework_path = project_root / "packages" / "frameworks" / "kanban"
    
    logger.info(f"Processing FR/BR/UXR files from commit")
    logger.info(f"Project root: {project_root}")
    logger.info(f"Kanban path: {kanban_path}")
    logger.info(f"Framework path: {framework_path}")
    
    # Filter FR/BR/UXR files
    fr_br_files = _extract_fr_br_files(changed_files, project_root)
    
    if not fr_br_files:
        logger.warning("No FR/BR/UXR files found in changed files")
        return {
            'success': False,
            'tasks_created': 0,
            'deliverables': [],
            'errors': ['No FR/BR/UXR files found in commit'],
            'warnings': [],
            'explanation': 'No FR/BR/UXR files detected in changed files'
        }
    
    logger.info(f"Found {len(fr_br_files)} FR/BR/UXR file(s) to process")
    
    # Initialize workflow
    workflow = AgenticTaskWorkflow(kanban_path, framework_path)
    
    # Process each FR/BR/UXR file
    all_deliverables = []
    all_errors = []
    all_warnings = []
    total_tasks = 0
    explanations = []
    
    for fr_br_file in fr_br_files:
        logger.info(f"Processing {fr_br_file.name}")
        
        try:
            # Process FR/BR/UXR
            result: WorkflowResult = workflow.process_fr_br(
                fr_br_file,
                auto_create=True
            )
            
            if result.success:
                # Create deliverables for each created task
                for task in result.created_tasks:
                    deliverable = {
                        'type': 'kanban_tasks',
                        'data': {
                            'task_id': task.task_id,
                            'task_path': str(task.task_path),
                            'epic': result.epic_story_mapping.primary_epic if result.epic_story_mapping else 0,
                            'story': result.epic_story_mapping.primary_story if result.epic_story_mapping else 0,
                            'fr_br_id': result.fr_br_analysis.document_id if result.fr_br_analysis else 'unknown',
                            'fr_br_type': result.fr_br_analysis.document_type if result.fr_br_analysis else 'unknown',
                            'title': task.title,
                            'description': task.description,
                            'priority': task.priority,
                            'status': task.status
                        }
                    }
                    all_deliverables.append(deliverable)
                    total_tasks += 1
                
                explanations.append(f"✅ {fr_br_file.name}: {result.explanation}")
                
            else:
                all_errors.extend(result.errors)
                all_warnings.extend(result.warnings)
                explanations.append(f"❌ {fr_br_file.name}: Failed - {', '.join(result.errors)}")
                
        except Exception as e:
            error_msg = f"Failed to process {fr_br_file.name}: {str(e)}"
            logger.error(error_msg, exc_info=True)
            all_errors.append(error_msg)
            explanations.append(f"❌ {fr_br_file.name}: {error_msg}")
    
    success = len(all_errors) == 0 and total_tasks > 0
    
    return {
        'success': success,
        'tasks_created': total_tasks,
        'deliverables': all_deliverables,
        'errors': all_errors,
        'warnings': all_warnings,
        'explanation': '\n\n'.join(explanations),
        'execution_time': 0  # Could track actual time if needed
    }


def _extract_fr_br_files(changed_files: List[str], project_root: Path) -> List[Path]:
    """
    Extract FR/BR/UXR file paths from changed files.
    
    Args:
        changed_files: List of changed file paths (relative or absolute)
        project_root: Root directory of the project
    
    Returns:
        List of Path objects for FR/BR/UXR files
    """
    fr_br_files = []
    
    # Patterns for FR/BR/UXR files
    patterns = [
        '**/fr-br/FR-*.md',
        '**/fr-br/BR-*.md',
        '**/fr-br/UXR-*.md',
        '**/FR-*.md',
        '**/BR-*.md',
        '**/UXR-*.md',
    ]
    
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
        
        # Check if it matches any pattern
        file_path_str_lower = str(file_path).lower()
        
        if any(
            'fr-' in file_path_str_lower or
            'br-' in file_path_str_lower or
            'uxr-' in file_path_str_lower
            for pattern in patterns
        ):
            full_path = project_root / file_path
            if full_path.exists() and full_path.suffix == '.md':
                # Check filename pattern more precisely
                filename = file_path.name.upper()
                if filename.startswith('FR-') or filename.startswith('BR-') or filename.startswith('UXR-'):
                    fr_br_files.append(full_path)
    
    return fr_br_files


# Convenience function for workflow executor
def create_tasks(**params) -> Dict[str, Any]:
    """
    Convenience function for workflow executor to call.
    
    This is the entry point specified in the workflow definition.
    
    Args:
        **params: Parameters from workflow executor (changed_files, project_root, etc.)
    
    Returns:
        Dictionary with workflow results and deliverables
    """
    return create_tasks_from_commit(**params)

