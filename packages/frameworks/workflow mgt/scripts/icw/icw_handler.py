#!/usr/bin/env python3
"""
Implementation Planning Workflow — optional Python helper (legacy package name: ICW).

Canonical agent-facing workflow is IPW (Implementation Planning Workflow, FR-042 / E5:S01:T42).
The Cursor/agent trigger ICW is a deprecated alias of IPW — same phases. Prefer documenting IPW;
this handler remains for CLI/tests and adopters. See:
  KB: .../vwmp/implementation-planning-workflow-agent-execution.md

REQUIRES PLAN MODE: Planning must run in planning mode for proper agent-guided elicitation.
REQUIRES TASK IDENTIFIER: Sessions must be bound to a specific Kanban task.
"""

import os
import sys
import yaml
import json
import argparse
import re
from datetime import datetime
from pathlib import Path
from typing import Dict, Any, List, Optional, Tuple

class ICWHandler:
    """Main handler for Implementation Cycle Workflow"""
    
    def __init__(self, config_path: str = None):
        """Initialize ICW handler with configuration"""
        self.config_path = config_path or self._find_config()
        self.config = self._load_config()
        self.cycle_state = {}
        self.current_phase = None
        self.task_identifier = None
        self.task_context = None
        
    def _detect_execution_mode(self) -> str:
        """Detect if running in planning mode or implementation mode"""
        # Check for planning mode indicators
        planning_indicators = [
            os.environ.get('PLANNING_MODE', '').lower() == 'true',
        ]
        
        # Check for implementation mode indicators  
        impl_indicators = [
            os.environ.get('IMPLEMENTATION_MODE', '').lower() == 'true',
        ]
        
        # Only use explicit environment variables for mode detection
        # Avoid path-based detection which can be unreliable
        
        if any(planning_indicators):
            return 'planning'
        elif any(impl_indicators):
            return 'implementation'
        else:
            # Default to requiring planning mode
            return 'unknown'
        
    def parse_task_identifier(self, task_id: str) -> Dict[str, int]:
        """Parse task identifier into Epic/Story/Task components
        
        Supports formats:
        - E5:S01:T47 (full Epic:Story:Task)
        - E5S01T47 (compact format)
        - T47 (task-only, assumes current context)
        """
        task_id = task_id.strip()
        
        # Full format: E5:S01:T47
        full_pattern = r'^E(\d+):S(\d+):T(\d+)$'
        match = re.match(full_pattern, task_id, re.IGNORECASE)
        if match:
            return {
                'epic': int(match.group(1)),
                'story': int(match.group(2)),
                'task': int(match.group(3))
            }
        
        # Compact format: E5S01T47
        compact_pattern = r'^E(\d+)S(\d+)T(\d+)$'
        match = re.match(compact_pattern, task_id, re.IGNORECASE)
        if match:
            return {
                'epic': int(match.group(1)),
                'story': int(match.group(2)),
                'task': int(match.group(3))
            }
        
        # Task-only format: T47
        task_only_pattern = r'^T(\d+)$'
        match = re.match(task_only_pattern, task_id, re.IGNORECASE)
        if match:
            # For task-only, we'll need to determine epic/story from context
            # For now, return just the task and let validation handle context
            return {
                'epic': None,
                'story': None,
                'task': int(match.group(1))
            }
        
        raise ValueError(f"Invalid task identifier format: {task_id}")
    
    def validate_task_exists(self, task_components: Dict[str, int]) -> Tuple[bool, str]:
        """Check if task exists in Kanban framework
        
        Returns:
            Tuple of (exists, error_message)
        """
        try:
            # Get Kanban root from config
            kanban_root = Path(self.config.get('paths', {}).get('kanban_root', 'docs/project-management/kanban'))
            
            epic = task_components['epic']
            story = task_components['story']
            task = task_components['task']
            
            # If epic/story are None, we need to infer from context or current directory
            if epic is None or story is None:
                return False, f"Task-only format T{task} requires Epic/Story context. Use full format like E5:S01:T{task}"
            
            # Check if task document exists
            task_doc_path = kanban_root / f"epics/Epic-{epic}/Story-{story:03d}-*/T{task}-*.md"
            task_docs = list(Path.cwd().glob(str(task_doc_path)))
            
            if not task_docs:
                return False, f"Task E{epic}:S{story}:T{task} not found in Kanban"
            
            # Load task document for context
            task_doc = task_docs[0]
            with open(task_doc, 'r') as f:
                content = f.read()
            
            return True, content
            
        except Exception as e:
            return False, f"Error validating task: {str(e)}"
    
    def get_available_tasks(self, epic: int = None) -> List[str]:
        """Get list of available tasks for user guidance"""
        try:
            kanban_root = Path(self.config.get('paths', {}).get('kanban_root', 'docs/project-management/kanban'))
            
            if epic:
                # Get tasks for specific epic
                epic_dir = kanban_root / f"epics/Epic-{epic}"
                if epic_dir.exists():
                    task_files = list(epic_dir.glob("**/T*-*.md"))
                    return [f.name for f in task_files if f.name.startswith('T')]
            else:
                # Get all tasks
                task_files = list(kanban_root.glob("**/T*-*.md"))
                return [f.name for f in task_files if f.name.startswith('T')]
                
        except Exception:
            return []
        
    def validate_task_identifier(self, task_id: str) -> Tuple[bool, str, Dict[str, Any]]:
        """Validate task identifier and return task context
        
        Returns:
            Tuple of (is_valid, error_message, task_context)
        """
        try:
            # Parse the task identifier
            task_components = self.parse_task_identifier(task_id)
            
            # Validate task exists
            exists, result = self.validate_task_exists(task_components)
            
            if not exists:
                # Get available tasks for helpful error message
                available_tasks = self.get_available_tasks(task_components.get('epic'))
                
                error_msg = f"{result}"
                if available_tasks:
                    error_msg += f"\nAvailable tasks: {', '.join(available_tasks[:5])}"
                    if len(available_tasks) > 5:
                        error_msg += f" and {len(available_tasks) - 5} more..."
                
                return False, error_msg, {}
            
            # Get the task document path for context
            kanban_root = Path(self.config.get('paths', {}).get('kanban_root', 'docs/project-management/kanban'))
            epic = task_components['epic']
            story = task_components['story']
            task = task_components['task']
            
            task_doc_path = kanban_root / f"epics/Epic-{epic}/Story-{story:03d}-*/T{task}-*.md"
            task_docs = list(Path.cwd().glob(str(task_doc_path)))
            task_doc = task_docs[0] if task_docs else None
            
            # Parse task document content for context
            task_context = {
                'task_id': task_id,
                'components': task_components,
                'document_content': result,
                'document_path': str(task_doc) if task_doc else None
            }
            
            return True, "", task_context
            
        except ValueError as e:
            # Get available tasks for format guidance
            available_tasks = self.get_available_tasks()
            
            error_msg = f"{str(e)}\nExpected formats:\n"
            error_msg += "  - E5:S01:T47 (full Epic:Story:Task)\n"
            error_msg += "  - E5S01T47 (compact format)\n"
            error_msg += "  - T47 (task-only, requires context)\n"
            
            if available_tasks:
                error_msg += f"\nExample tasks: {', '.join(available_tasks[:3])}"
            
            return False, error_msg, {}
        
    def _find_config(self) -> str:
        """Find ICW configuration file"""
        # Look in standard workflow locations
        possible_paths = [
            "packages/frameworks/workflow mgt/workflows/implementation-cycle-workflow/icw-config.yaml",
            "workflows/implementation-cycle-workflow/icw-config.yaml",
            "icw-config.yaml"
        ]
        
        for path in possible_paths:
            if os.path.exists(path):
                return path
                
        raise FileNotFoundError("ICW configuration file not found")
    
    def _load_config(self) -> Dict[str, Any]:
        """Load ICW configuration"""
        with open(self.config_path, 'r') as f:
            return yaml.safe_load(f)
    
    def validate_execution_mode(self) -> bool:
        """Validate that ICW is running in the correct mode"""
        mode = self._detect_execution_mode()
        
        if mode == 'planning':
            print("✅ ICW running in PLANNING MODE - Correct mode for intelligent agent guidance")
            return True
        elif mode == 'implementation':
            print("🚫 ERROR: ICW detected IMPLEMENTATION MODE")
            print("🚫 ICW requires PLANNING MODE for proper intelligent agent guidance")
            print("🚫 Implementation mode bypasses the intelligent agent guidance that ICW provides")
            print("🚫 Please switch to planning mode to execute ICW properly")
            print("")
            print("💡 To fix this:")
            print("   1. Set PLANNING_MODE=true environment variable")
            print("   2. Or run from a planning context")
            print("   3. Or use planning-specific execution method")
            return False
        else:
            print("🚫 ERROR: ICW cannot determine execution mode")
            print("🚫 ICW requires explicit PLANNING MODE for proper execution")
            print("🚫 Please ensure you're running in planning mode")
            print("")
            print("💡 To fix this:")
            print("   1. Set PLANNING_MODE=true environment variable")
            print("   2. Ensure planning context is detected")
            print("   3. Or use planning-specific execution method")
            return False
    
    def validate_execution_mode_with_task(self, task_id: str) -> bool:
        """Validate both planning mode and task identifier
        
        Returns:
            bool: True if both validations pass
        """
        # First validate execution mode
        if not self.validate_execution_mode():
            return False
        
        # Then validate task identifier
        print(f"🔍 Validating task identifier: {task_id}")
        
        is_valid, error_msg, task_context = self.validate_task_identifier(task_id)
        
        if not is_valid:
            print("🚫 ERROR: Invalid task identifier")
            print(f"🚫 {error_msg}")
            print("")
            print("💡 To fix this:")
            print("   1. Use a valid task identifier format")
            print("   2. Ensure the task exists in the Kanban framework")
            print("   3. Check the task identifier spelling")
            return False
        
        # Store task context
        self.task_identifier = task_id
        self.task_context = task_context
        
        print(f"✅ Task identifier validated: {task_id}")
        print(f"✅ Task context loaded from: {task_context.get('document_path', 'Unknown')}")
        
        return True
    
    def initialize_cycle(self, params: Dict[str, Any]) -> Dict[str, Any]:
        """Initialize implementation cycle (Step 1)"""
        # Extract task_id from params
        task_id = params.get('task_id')
        if not task_id:
            return {
                'success': False,
                'error': 'Task identifier is required for ICW execution'
            }
        
        # First validate execution mode and task identifier
        if not self.validate_execution_mode_with_task(task_id):
            return {
                'success': False,
                'error': 'ICW requires planning mode and valid task identifier for execution',
                'mode_detected': self._detect_execution_mode()
            }
        
        print("🚀 Initializing Implementation Cycle...")
        
        # Create cycle ID
        cycle_id = f"ICW-{datetime.now().strftime('%Y%m%d-%H%M%S')}"
        
        # Create output directory
        output_dir = Path("/Users/rms/Documents/projects/ai-dev-kit/docs/implementation-cycles")
        output_dir.mkdir(parents=True, exist_ok=True)
        
        # Initialize cycle state with task context
        self.cycle_state = {
            'cycle_id': cycle_id,
            'start_time': datetime.now().isoformat(),
            'task_identifier': task_id,
            'task_context': self.task_context,
            'params': params,
            'phases': {
                'specification': {'status': 'pending', 'output': None},
                'test_design': {'status': 'pending', 'output': None},
                'implementation_planning': {'status': 'pending', 'output': None}
            },
            'output_dir': str(output_dir)
        }
        
        # Save cycle state
        self._save_cycle_state()
        
        return {
            'success': True,
            'cycle_id': cycle_id,
            'output_dir': str(output_dir),
            'message': f"Implementation cycle {cycle_id} initialized successfully"
        }
    
    def specification_definition(self, params: Dict[str, Any]) -> Dict[str, Any]:
        """Phase 1: Specification Definition (Step 2)"""
        print("📋 Phase 1: Specification Definition")
        
        if not self.cycle_state:
            return {'success': False, 'error': 'Cycle not initialized'}
        
        self.current_phase = 'specification'
        
        # Load specification template
        template_path = os.path.join(
            self.config['paths']['templates_dir'],
            self.config['templates']['specification']['file']
        )
        
        with open(template_path, 'r') as f:
            template_content = f.read()
        
        # Process template with parameters
        processed_content = self._process_template(template_content, params)
        
        # Save specification document
        spec_filename = f"{self.cycle_state['cycle_id']}-specification.md"
        spec_path = Path(self.cycle_state['output_dir']) / spec_filename
        
        with open(spec_path, 'w') as f:
            f.write(processed_content)
        
        # Update cycle state
        self.cycle_state['phases']['specification'] = {
            'status': 'completed',
            'output': str(spec_path),
            'completed_time': datetime.now().isoformat()
        }
        
        self._save_cycle_state()
        
        return {
            'success': True,
            'phase': 'specification',
            'output_file': str(spec_path),
            'message': "Specification document created successfully"
        }
    
    def test_design(self, params: Dict[str, Any]) -> Dict[str, Any]:
        """Phase 2: Test Design (Step 3)"""
        print("🧪 Phase 2: Test Design")
        
        if not self.cycle_state or self.cycle_state['phases']['specification']['status'] != 'completed':
            return {'success': False, 'error': 'Specification phase not completed'}
        
        self.current_phase = 'test_design'
        
        # Load test design template
        template_path = os.path.join(
            self.config['paths']['templates_dir'],
            self.config['templates']['test_design']['file']
        )
        
        with open(template_path, 'r') as f:
            template_content = f.read()
        
        # Add specification reference
        params['specification_link'] = self.cycle_state['phases']['specification']['output']
        
        # Process template
        processed_content = self._process_template(template_content, params)
        
        # Save test design document
        test_filename = f"{self.cycle_state['cycle_id']}-test-design.md"
        test_path = Path(self.cycle_state['output_dir']) / test_filename
        
        with open(test_path, 'w') as f:
            f.write(processed_content)
        
        # Update cycle state
        self.cycle_state['phases']['test_design'] = {
            'status': 'completed',
            'output': str(test_path),
            'completed_time': datetime.now().isoformat()
        }
        
        self._save_cycle_state()
        
        return {
            'success': True,
            'phase': 'test_design',
            'output_file': str(test_path),
            'message': "Test design document created successfully"
        }
    
    def implementation_planning(self, params: Dict[str, Any]) -> Dict[str, Any]:
        """Phase 3: Implementation Planning (Step 4)"""
        print("🔧 Phase 3: Implementation Planning")
        
        if not self.cycle_state or self.cycle_state['phases']['test_design']['status'] != 'completed':
            return {'success': False, 'error': 'Test design phase not completed'}
        
        self.current_phase = 'implementation_planning'
        
        # Load implementation plan template
        template_path = os.path.join(
            self.config['paths']['templates_dir'],
            self.config['templates']['implementation_plan']['file']
        )
        
        with open(template_path, 'r') as f:
            template_content = f.read()
        
        # Add references to previous phases
        params['specification_link'] = self.cycle_state['phases']['specification']['output']
        params['test_design_link'] = self.cycle_state['phases']['test_design']['output']
        
        # Process template
        processed_content = self._process_template(template_content, params)
        
        # Save implementation plan document
        plan_filename = f"{self.cycle_state['cycle_id']}-implementation-plan.md"
        plan_path = Path(self.cycle_state['output_dir']) / plan_filename
        
        with open(plan_path, 'w') as f:
            f.write(processed_content)
        
        # Update cycle state
        self.cycle_state['phases']['implementation_planning'] = {
            'status': 'completed',
            'output': str(plan_path),
            'completed_time': datetime.now().isoformat()
        }
        
        self._save_cycle_state()
        
        return {
            'success': True,
            'phase': 'implementation_planning',
            'output_file': str(plan_path),
            'message': "Implementation plan document created successfully"
        }
    
    def generate_package(self, params: Dict[str, Any]) -> Dict[str, Any]:
        """Generate implementation package (Step 5)"""
        print("📦 Generating Implementation Package")
        
        if not self._all_phases_completed():
            return {'success': False, 'error': 'Not all phases completed'}
        
        # Create package summary
        package_summary = self._create_package_summary()
        
        # Save package summary
        summary_filename = f"{self.cycle_state['cycle_id']}-package-summary.md"
        summary_path = Path(self.cycle_state['output_dir']) / summary_filename
        
        with open(summary_path, 'w') as f:
            f.write(package_summary)
        
        return {
            'success': True,
            'package_summary': str(summary_path),
            'phases_completed': list(self.cycle_state['phases'].keys()),
            'message': "Implementation package generated successfully"
        }
    
    def kanban_update(self, params: Dict[str, Any]) -> Dict[str, Any]:
        """Update kanban integration (Step 6)"""
        print("📋 Updating Kanban Integration")
        
        # This would integrate with the kanban system
        # For now, return success
        return {
            'success': True,
            'message': "Kanban integration updated (placeholder implementation)"
        }
    
    def validate_quality(self, params: Dict[str, Any]) -> Dict[str, Any]:
        """Quality validation (Step 7)"""
        print("✅ Quality Validation")
        
        validation_results = {
            'specification_complete': self.cycle_state['phases']['specification']['status'] == 'completed',
            'test_design_complete': self.cycle_state['phases']['test_design']['status'] == 'completed',
            'implementation_plan_complete': self.cycle_state['phases']['implementation_planning']['status'] == 'completed',
            'all_phases_complete': self._all_phases_completed()
        }
        
        return {
            'success': all(validation_results.values()),
            'validation_results': validation_results,
            'message': "Quality validation completed"
        }
    
    def archive_cycle(self, params: Dict[str, Any]) -> Dict[str, Any]:
        """Archive implementation cycle (Step 8)"""
        print("📚 Archiving Implementation Cycle")
        
        # Mark cycle as completed
        self.cycle_state['status'] = 'completed'
        self.cycle_state['end_time'] = datetime.now().isoformat()
        
        self._save_cycle_state()
        
        return {
            'success': True,
            'cycle_id': self.cycle_state['cycle_id'],
            'status': 'completed',
            'message': "Implementation cycle archived successfully"
        }
    
    def _process_template(self, template: str, params: Dict[str, Any]) -> str:
        """Process template with parameters"""
        # Add current date and cycle ID
        params['current_date'] = datetime.now().strftime('%Y-%m-%d')
        params['cycle_id'] = self.cycle_state.get('cycle_id', 'ICW-UNKNOWN')
        
        # Simple template processing (replace {{var}} with values)
        for key, value in params.items():
            template = template.replace(f"{{{{{key}}}}}", str(value))
        
        return template
    
    def _save_cycle_state(self):
        """Save cycle state to file"""
        if not self.cycle_state:
            return
        
        state_file = Path(self.cycle_state['output_dir']) / f"{self.cycle_state['cycle_id']}-state.json"
        
        with open(state_file, 'w') as f:
            json.dump(self.cycle_state, f, indent=2)
    
    def _all_phases_completed(self) -> bool:
        """Check if all phases are completed"""
        if not self.cycle_state:
            return False
        
        return all(
            phase['status'] == 'completed' 
            for phase in self.cycle_state['phases'].values()
        )
    
    def _create_package_summary(self) -> str:
        """Create package summary document"""
        summary = f"""# Implementation Package Summary

**Cycle ID:** {self.cycle_state['cycle_id']}  
**Created:** {self.cycle_state['start_time']}  
**Status:** Completed  

## Phase Outputs

### 1. Specification Definition
- **File:** {self.cycle_state['phases']['specification']['output']}
- **Status:** {self.cycle_state['phases']['specification']['status']}
- **Completed:** {self.cycle_state['phases']['specification']['completed_time']}

### 2. Test Design
- **File:** {self.cycle_state['phases']['test_design']['output']}
- **Status:** {self.cycle_state['phases']['test_design']['status']}
- **Completed:** {self.cycle_state['phases']['test_design']['completed_time']}

### 3. Implementation Planning
- **File:** {self.cycle_state['phases']['implementation_planning']['output']}
- **Status:** {self.cycle_state['phases']['implementation_planning']['status']}
- **Completed:** {self.cycle_state['phases']['implementation_planning']['completed_time']}

## Next Steps

1. Review all generated documents
2. Begin implementation following the implementation plan
3. Execute tests as defined in test design
4. Track progress against specifications

---
**Generated by:** Implementation Cycle Workflow (ICW)  
**Date:** {datetime.now().strftime('%Y-%m-%d')}
"""
        return summary

def main():
    """Main entry point for ICW handler"""
    parser = argparse.ArgumentParser(
        description='Implementation Cycle Workflow (ICW) Handler',
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  icw_handler.py --task E5:S01:T47 initialize
  icw_handler.py --task E5S01T47 initialize
  icw_handler.py --task T47 initialize
  
Available commands:
  initialize               Initialize implementation cycle
  specification           Phase 1: Specification Definition
  test_design             Phase 2: Test Design
  implementation_planning Phase 3: Implementation Planning
  generate_package        Generate complete package
  kanban_update           Update Kanban status
  validate_quality        Validate quality
  archive                  Archive completed cycle
        """
    )
    
    parser.add_argument('--task', required=True, 
                       help='Task identifier (e.g., E5:S01:T47, E5S01T47, T47)')
    parser.add_argument('command', choices=[
        'initialize', 'specification', 'test_design', 
        'implementation_planning', 'generate_package', 
        'kanban_update', 'validate_quality', 'archive'
    ], help='ICW command to execute')
    parser.add_argument('params', nargs='?', 
                       help='JSON parameters for the command')
    
    args = parser.parse_args()
    
    handler = ICWHandler()
    
    # Parse parameters (simple JSON for now)
    params = {'task_id': args.task}
    if args.params:
        try:
            additional_params = json.loads(args.params)
            params.update(additional_params)
        except json.JSONDecodeError:
            print("Error: Invalid JSON parameters")
            sys.exit(1)
    
    # Execute command
    commands = {
        'initialize': handler.initialize_cycle,
        'specification': handler.specification_definition,
        'test_design': handler.test_design,
        'implementation_planning': handler.implementation_planning,
        'generate_package': handler.generate_package,
        'kanban_update': handler.kanban_update,
        'validate_quality': handler.validate_quality,
        'archive': handler.archive_cycle
    }
    
    result = commands[args.command](params)
    
    if result['success']:
        print(f"✅ {result.get('message', 'Command completed successfully')}")
    else:
        print(f"❌ {result.get('error', 'Command failed')}")
        sys.exit(1)

if __name__ == "__main__":
    main()
