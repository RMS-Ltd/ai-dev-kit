#!/usr/bin/env python3
"""
Workflow Template Generator

Generates workflow YAML files based on templates and user input.
Supports creating new workflows following the agent-driven execution pattern.

Usage:
    python generate_workflow.py --type <workflow_type> --name <workflow_name> [options]

Examples:
    python generate_workflow.py --type refactor --name "Custom Refactor" --output custom-refactor-workflow.yaml
    python generate_workflow.py --type testing --name "Integration Tests" --steps 10
"""

import argparse
import json
import sys
from pathlib import Path
from typing import Dict, List, Optional
from datetime import datetime

# Common workflow step templates
STEP_TEMPLATES = {
    "analysis": {
        "type": "analysis",
        "handler": "{workflow_type}.analyze",
        "required": True,
        "dependencies": [],
        "config": {
            "target_paths": [],
            "analysis_depth": "full",
            "include_dependencies": True
        }
    },
    "planning": {
        "type": "planning",
        "handler": "{workflow_type}.plan",
        "required": True,
        "dependencies": [1],
        "config": {
            "create_plan_doc": True
        }
    },
    "execution": {
        "type": "execution",
        "handler": "{workflow_type}.execute",
        "required": True,
        "dependencies": [2],
        "config": {
            "incremental": True
        }
    },
    "validation": {
        "type": "validation",
        "handler": "{workflow_type}.validate",
        "required": True,
        "dependencies": [3],
        "config": {
            "strict_mode": True
        }
    },
    "documentation": {
        "type": "documentation",
        "handler": "{workflow_type}.update_docs",
        "required": True,
        "dependencies": [3],
        "config": {
            "update_readme": True
        }
    },
    "git_stage": {
        "type": "git_stage",
        "handler": "git.stage_all",
        "required": True,
        "dependencies": [3, 4],
        "config": {
            "paths": ["*"]
        }
    },
    "git_commit": {
        "type": "git_commit",
        "handler": "git.commit",
        "required": True,
        "dependencies": [5],
        "config": {
            "message_template": "{workflow_type}: {summary}\n\n{detailed_changes}"
        }
    },
    "git_push": {
        "type": "git_push",
        "handler": "git.push",
        "required": False,
        "enabled": True,
        "dependencies": [6],
        "config": {
            "remote": "origin",
            "push_tags": False
        }
    }
}

# Workflow type configurations
WORKFLOW_TYPES = {
    "refactor": {
        "description": "Systematic code refactoring workflow with validation and documentation",
        "branch_prefix": "refactor/",
        "common_steps": ["analysis", "planning", "execution", "validation", "documentation", "git_stage", "git_commit", "git_push"],
        "config": {
            "refactor_branch_prefix": "refactor/",
            "test_command": "pytest",
            "lint_command": "ruff check",
            "type_check_command": "mypy"
        }
    },
    "migration": {
        "description": "Systematic migration workflow for code, data, or infrastructure with validation and rollback support",
        "branch_prefix": "migration/",
        "common_steps": ["analysis", "planning", "execution", "validation", "documentation", "git_stage", "git_commit", "git_push"],
        "config": {
            "migration_branch_prefix": "migration/",
            "backup_enabled": True,
            "rollback_enabled": True,
            "test_command": "pytest",
            "validation_command": "custom"
        }
    },
    "testing": {
        "description": "Systematic testing workflow for creating, updating, and validating tests with coverage and documentation",
        "branch_prefix": "test/",
        "common_steps": ["analysis", "planning", "execution", "validation", "documentation", "git_stage", "git_commit", "git_push"],
        "config": {
            "test_branch_prefix": "test/",
            "test_command": "pytest",
            "coverage_command": "pytest --cov",
            "coverage_threshold": 80,
            "lint_command": "ruff check",
            "type_check_command": "mypy"
        }
    },
    "implementation-cycle": {
        "description": "Systematic implementation workflow following agent-driven execution pattern (ANALYZE → DETERMINE → EXECUTE → VALIDATE → PROCEED)",
        "branch_prefix": "implement/",
        "common_steps": ["analysis", "planning", "execution", "validation", "documentation"],
        "config": {
            "implementation_branch_prefix": "implement/",
            "analysis_depth": "full",
            "planning_required": True,
            "validation_strict": True,
            "documentation_comprehensive": True,
            "agent_driven": True,
            "phases": ["specification", "test_design", "implementation_planning"]
        }
    },
    "custom": {
        "description": "Custom workflow following agent-driven execution pattern",
        "branch_prefix": "workflow/",
        "common_steps": ["analysis", "planning", "execution", "validation", "documentation", "git_stage", "git_commit", "git_push"],
        "config": {}
    }
}


def generate_step(step_template: Dict, step_number: int, workflow_type: str, step_name: Optional[str] = None, previous_steps: Optional[List[int]] = None) -> Dict:
    """Generate a workflow step from a template."""
    step_id = f"step-{step_number}"
    
    # Get step name from template or use provided name
    name = step_name or step_template.get("name", f"Step {step_number}")
    
    # Build step configuration
    step = {
        "id": step_id,
        "name": name,
        "type": step_template["type"],
        "handler": step_template["handler"].format(workflow_type=workflow_type),
        "required": step_template.get("required", True),
        "dependencies": [],
        "config": step_template.get("config", {}).copy()
    }
    
    # Add enabled flag if present
    if "enabled" in step_template:
        step["enabled"] = step_template["enabled"]
    
    # Update dependencies based on template or previous steps
    if step_template.get("dependencies"):
        # Template dependencies are step numbers (1-based), convert to step IDs
        step["dependencies"] = [f"step-{dep}" for dep in step_template["dependencies"]]
    elif previous_steps:
        # Use previous step if no explicit dependencies
        step["dependencies"] = [f"step-{previous_steps[-1]}"] if previous_steps else []
    
    return step


def generate_workflow_yaml(
    workflow_type: str,
    workflow_name: str,
    description: Optional[str] = None,
    steps: Optional[List[str]] = None,
    custom_config: Optional[Dict] = None,
    parameters: Optional[List[Dict]] = None,
    version: str = "1.0.0"
) -> Dict:
    """Generate a workflow YAML structure."""
    
    # Get workflow type configuration
    type_config = WORKFLOW_TYPES.get(workflow_type, WORKFLOW_TYPES["custom"])
    
    # Use provided description or default
    workflow_description = description or type_config["description"]
    
    # Use provided steps or default
    step_list = steps or type_config["common_steps"]
    
    # Build workflow structure
    workflow = {
        "name": workflow_name,
        "version": version,
        "type": workflow_type,
        "description": workflow_description,
        "config": custom_config or type_config["config"].copy(),
        "steps": []
    }
    
    # Generate steps
    previous_step_numbers = []
    for i, step_key in enumerate(step_list, start=1):
        if step_key in STEP_TEMPLATES:
            step_template = STEP_TEMPLATES[step_key].copy()
            step = generate_step(step_template, i, workflow_type, previous_steps=previous_step_numbers)
            workflow["steps"].append(step)
            previous_step_numbers.append(i)
        else:
            # Custom step - create basic structure
            step = {
                "id": f"step-{i}",
                "name": step_key.replace("_", " ").title(),
                "type": "custom",
                "handler": f"{workflow_type}.{step_key}",
                "required": True,
                "dependencies": [f"step-{i-1}"] if i > 1 else [],
                "config": {}
            }
            workflow["steps"].append(step)
            previous_step_numbers.append(i)
    
    # Add parameters if provided
    if parameters:
        workflow["parameters"] = parameters
    
    return workflow


def format_yaml(workflow: Dict) -> str:
    """Format workflow dictionary as YAML string."""
    import yaml
    
    # Custom YAML representer for better formatting
    class WorkflowDumper(yaml.SafeDumper):
        def represent_dict(self, data):
            return self.represent_mapping('tag:yaml.org,2002:map', data.items())
    
    WorkflowDumper.add_representer(dict, WorkflowDumper.represent_dict)
    
    return yaml.dump(workflow, Dumper=WorkflowDumper, default_flow_style=False, sort_keys=False, indent=2)


def main():
    parser = argparse.ArgumentParser(
        description="Generate workflow YAML files from templates",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog=__doc__
    )
    
    parser.add_argument(
        "--type",
        required=True,
        choices=list(WORKFLOW_TYPES.keys()),
        help="Workflow type (refactor, migration, testing, implementation-cycle, custom)"
    )
    
    parser.add_argument(
        "--name",
        required=True,
        help="Workflow name"
    )
    
    parser.add_argument(
        "--description",
        help="Workflow description (optional)"
    )
    
    parser.add_argument(
        "--output",
        help="Output file path (default: <workflow-name-lowercase>-workflow.yaml)"
    )
    
    parser.add_argument(
        "--steps",
        nargs="+",
        help="Custom step list (optional, uses default for workflow type if not provided)"
    )
    
    parser.add_argument(
        "--config",
        help="Custom config JSON file (optional)"
    )
    
    parser.add_argument(
        "--parameters",
        help="Parameters JSON file (optional)"
    )
    
    parser.add_argument(
        "--version",
        default="1.0.0",
        help="Workflow version (default: 1.0.0)"
    )
    
    args = parser.parse_args()
    
    # Load custom config if provided
    custom_config = None
    if args.config:
        with open(args.config, 'r') as f:
            custom_config = json.load(f)
    
    # Load parameters if provided
    parameters = None
    if args.parameters:
        with open(args.parameters, 'r') as f:
            parameters = json.load(f)
    
    # Generate workflow
    workflow = generate_workflow_yaml(
        workflow_type=args.type,
        workflow_name=args.name,
        description=args.description,
        steps=args.steps,
        custom_config=custom_config,
        parameters=parameters,
        version=args.version
    )
    
    # Format as YAML
    try:
        yaml_output = format_yaml(workflow)
    except ImportError:
        print("Error: PyYAML is required. Install with: pip install pyyaml", file=sys.stderr)
        sys.exit(1)
    
    # Determine output file
    if args.output:
        output_file = Path(args.output)
    else:
        workflow_name_slug = args.name.lower().replace(" ", "-")
        output_file = Path(f"{workflow_name_slug}-workflow.yaml")
    
    # Write output
    output_file.write_text(yaml_output)
    print(f"✅ Workflow generated: {output_file}")
    print(f"   Type: {args.type}")
    print(f"   Steps: {len(workflow['steps'])}")
    print(f"   Version: {args.version}")


if __name__ == "__main__":
    main()

