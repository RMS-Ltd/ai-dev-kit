#!/usr/bin/env python3
"""
Task Template Generator

Generates task template files from the canonical E/S/T structure document.
Can optionally use agentic generator for richer content.

Part of: E4:S15:T03 - Implement generator and validate against concrete templates

Usage:
    python generate_task_templates.py [OPTIONS]

Examples:
    python generate_task_templates.py
    python generate_task_templates.py --epic 1
    python generate_task_templates.py --dry-run
    python generate_task_templates.py --validate
    python generate_task_templates.py --agentic --provider openai
"""

import argparse
import re
import sys
from pathlib import Path
from typing import Dict, List, Optional, Tuple
from datetime import datetime
import json


class TaskTemplateGenerator:
    """Generates task templates from canonical structure document."""
    
    def __init__(
        self,
        structure_file: Path,
        template_file: Path,
        output_dir: Path,
        overwrite: bool = False,
        dry_run: bool = False,
        use_agentic: bool = False,
        agentic_provider: Optional[str] = None,
        agentic_config: Optional[Dict] = None
    ):
        """
        Initialize generator.
        
        Args:
            structure_file: Path to COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md
            template_file: Path to TASK_TEMPLATE.md
            output_dir: Output directory for generated templates
            overwrite: Allow overwriting existing files
            dry_run: Show what would be generated without creating files
            use_agentic: Use agentic generator for richer content
            agentic_provider: LLM provider for agentic generation (openai, anthropic, etc.)
            agentic_config: Additional agentic configuration
        """
        self.structure_file = structure_file
        self.template_file = template_file
        self.output_dir = output_dir
        self.overwrite = overwrite
        self.dry_run = dry_run
        self.use_agentic = use_agentic
        self.agentic_provider = agentic_provider
        self.agentic_config = agentic_config or {}
        
        self.tasks = []  # List of (epic, story, task_num, task_desc) tuples
        self.generated_files = []
        self.skipped_files = []
        self.errors = []
        
        # Initialize agentic generator if requested
        self.agentic_generator = None
        if self.use_agentic:
            try:
                from agentic_template_generator import AgenticTemplateGenerator, LLMConfig
                template_dir = template_file.parent
                llm_config = LLMConfig(
                    provider=agentic_provider or "none",
                    **self.agentic_config
                )
                self.agentic_generator = AgenticTemplateGenerator(
                    structure_file=structure_file,
                    template_dir=template_dir,
                    output_dir=output_dir,
                    llm_config=llm_config,
                    overwrite=overwrite,
                    dry_run=dry_run
                )
                if not self.agentic_generator.parse_structure():
                    print("⚠️  Warning: Failed to initialize agentic generator, falling back to procedural")
                    self.agentic_generator = None
            except ImportError:
                print("⚠️  Warning: Agentic generator not available, falling back to procedural")
                self.use_agentic = False
            except Exception as e:
                print(f"⚠️  Warning: Agentic generator initialization failed: {e}, falling back to procedural")
                self.use_agentic = False
    
    def parse_structure(self) -> bool:
        """
        Parse the canonical structure document.
        
        Returns:
            True if parsing succeeded, False otherwise
        """
        try:
            content = self.structure_file.read_text(encoding='utf-8')
        except Exception as e:
            self.errors.append(f"Failed to read structure file: {e}")
            return False
        
        # Parse epics, stories, and tasks
        current_epic = None
        current_story = None
        
        # Epic pattern: ### Epic N: {Name}
        epic_pattern = r'^### Epic (\d+):\s*(.+)$'
        # Story pattern: #### Story N: {Name}
        story_pattern = r'^#### Story (\d+):\s*(.+)$'
        # Task pattern: - TNN: {Description}
        task_pattern = r'^-\s+T(\d+):\s*(.+)$'
        
        for line in content.split('\n'):
            # Check for epic
            epic_match = re.match(epic_pattern, line)
            if epic_match:
                current_epic = int(epic_match.group(1))
                current_story = None
                continue
            
            # Check for story
            story_match = re.match(story_pattern, line)
            if story_match:
                current_story = int(story_match.group(1))
                continue
            
            # Check for task
            task_match = re.match(task_pattern, line)
            if task_match and current_epic and current_story:
                task_num = int(task_match.group(1))
                task_desc = task_match.group(2).strip()
                self.tasks.append((current_epic, current_story, task_num, task_desc))
        
        return True
    
    def sanitize_filename(self, text: str) -> str:
        """Sanitize text for use in filename - removes/replaces problematic characters."""
        # Replace problematic characters with safe alternatives
        text = text.replace('/', '-')
        text = text.replace('\\', '-')
        text = text.replace('(', '')
        text = text.replace(')', '')
        text = text.replace('[', '')
        text = text.replace(']', '')
        text = text.replace('{', '')
        text = text.replace('}', '')
        text = text.replace(':', '-')
        text = text.replace(';', '-')
        text = text.replace(',', '')
        text = text.replace('.', '')
        text = text.replace('?', '')
        text = text.replace('!', '')
        text = text.replace("'", '')
        text = text.replace('"', '')
        # Replace multiple spaces/hyphens with single hyphen
        text = re.sub(r'[-\s]+', '-', text)
        # Remove leading/trailing hyphens
        text = text.strip('-')
        return text
    
    def kebab_case(self, text: str) -> str:
        """Convert text to kebab-case for filename."""
        # Remove special characters, convert to lowercase, replace spaces with hyphens
        text = re.sub(r'[^\w\s-]', '', text)
        text = re.sub(r'[-\s]+', '-', text)
        return text.strip('-').lower()
    
    def title_case(self, text: str) -> str:
        """Convert text to Title Case for filename."""
        # First sanitize to remove problematic characters
        text = self.sanitize_filename(text)
        # Split by hyphens and capitalize each word
        words = text.split('-')
        return '-'.join(word.capitalize() for word in words if word)
    
    def get_task_file_path(self, epic: int, story: int, task_num: int, task_desc: str) -> Path:
        """Generate file path for task template."""
        # Sanitize and create filename-safe version
        sanitized_desc = self.sanitize_filename(task_desc)
        title_desc = self.title_case(sanitized_desc)
        filename = f"T{task_num:02d}-{title_desc}.md"
        return self.output_dir / f"Epic-{epic}" / f"Story-{story}" / filename
    
    def generate_task_content(
        self,
        epic: int,
        story: int,
        task_num: int,
        task_desc: str
    ) -> str:
        """Generate task template content."""
        # Read template structure
        try:
            template_content = self.template_file.read_text(encoding='utf-8')
        except Exception as e:
            self.errors.append(f"Failed to read template file: {e}")
            return ""
        
        # Generate task-specific content
        task_id_short = f"E{epic}:S{story}:T{task_num}"
        task_id_full = f"E{epic:02d}:S{story:02d}:T{task_num:02d}"
        code = f"E{epic:02d}S{story:02d}T{task_num:02d}"
        version = f"v0.{epic}.{story}.{task_num}+0"
        
        # Replace template placeholders
        content = template_content
        
        # Replace header placeholders
        content = content.replace("Epic X, Story Y, Task Z: [Task Title]", 
                                 f"Epic {epic}, Story {story}, Task {task_num}: {task_desc}")
        content = content.replace("EXXSYYTZZ", code)
        content = content.replace("vX.Y.Z.T+B", version)
        content = content.replace("[YYYY-MM-DD]", "[YYYY-MM-DD]")
        content = content.replace("YYYY-MM-DDTHH:MM:SSZ", "[YYYY-MM-DD]")
        
        # Replace Task ID placeholders
        content = content.replace("E{epic}:S{story}:T{task}", task_id_short)
        content = content.replace("EXX:SYY:TZZ", task_id_full)
        content = content.replace("E{epic}:S{story}:T{task}", task_id_short)
        
        # Generate scope from task description
        scope = f"{task_desc} for the {{PROJECT_NAME}} project."
        content = re.sub(
            r'\[Clear description of what this task accomplishes\. What problem does it solve\? What value does it deliver\?\]',
            scope,
            content
        )
        
        # Generate basic input (generic)
        input_content = f"- Requirements and specifications\n- {task_desc.lower()} requirements\n- {{PROJECT_NAME}} project context"
        content = re.sub(
            r'\[What is required to start this task\? Dependencies, prerequisites, inputs from other tasks or external sources\.\]',
            input_content,
            content
        )
        
        # Generate basic deliverable (generic)
        deliverable_content = f"- {task_desc.lower()} completed\n- Documentation and artifacts\n- Verification and validation"
        content = re.sub(
            r'\[What is produced by this task\? Specific artifacts, documents, code, or outcomes\.\]',
            deliverable_content,
            content
        )
        
        # Generate basic acceptance criteria (3 items)
        criteria = [
            f"- [ ] {task_desc} completed successfully",
            f"- [ ] Documentation and artifacts created",
            f"- [ ] Verification and validation completed"
        ]
        criteria_text = '\n'.join(criteria)
        content = re.sub(
            r'- \[ \] Criterion one \(measurable, testable\)\n- \[ \] Criterion two \(measurable, testable\)\n- \[ \] Criterion three \(measurable, testable\)',
            criteria_text,
            content
        )
        
        # Generate basic approach (5 steps)
        approach_steps = [
            f"1. Analyze requirements for {task_desc.lower()}",
            f"2. Design approach and plan",
            f"3. Implement {task_desc.lower()}",
            f"4. Test and validate",
            f"5. Document and deliver"
        ]
        approach_text = '\n'.join(approach_steps)
        content = re.sub(
            r'1\. Step one\n2\. Step two\n3\. Step three',
            approach_text,
            content
        )
        
        # Generate dependencies
        prev_task = f"E{epic}:S{story}:T{task_num-1:02d}" if task_num > 1 else None
        next_task = f"E{epic}:S{story}:T{task_num+1:02d}"
        
        depends_on = f"- E{epic}:S{story}:T{task_num-1:02d}" if task_num > 1 else "- None"
        blocks = f"- E{epic}:S{story}:T{task_num+1:02d}"
        
        content = re.sub(
            r'\*\*Depends On:\*\*\n- \[Epic, Story, Task, or external dependency\]\n- \[Another dependency\]',
            f"**Depends On:**\n{depends_on}",
            content
        )
        content = re.sub(
            r'\*\*Blocks:\*\*\n- \[What this task blocks\]',
            f"**Blocks:**\n{blocks}",
            content
        )
        
        return content
    
    def generate_templates(
        self,
        epic_filter: Optional[int] = None,
        story_filter: Optional[int] = None
    ) -> bool:
        """
        Generate task templates.
        
        Args:
            epic_filter: Generate templates for specific epic only
            story_filter: Generate templates for specific story only (requires epic_filter)
        
        Returns:
            True if generation succeeded, False otherwise
        """
        if not self.parse_structure():
            return False
        
        # Filter tasks if needed
        tasks_to_generate = self.tasks
        if epic_filter:
            tasks_to_generate = [t for t in tasks_to_generate if t[0] == epic_filter]
            if story_filter:
                tasks_to_generate = [t for t in tasks_to_generate if t[1] == story_filter]
        
        # Generate templates
        for epic, story, task_num, task_desc in tasks_to_generate:
            file_path = self.get_task_file_path(epic, story, task_num, task_desc)
            
            # Check if file exists
            if file_path.exists() and not self.overwrite:
                self.skipped_files.append(file_path)
                continue
            
            # Generate content (use agentic if available, otherwise procedural)
            if self.use_agentic and self.agentic_generator:
                try:
                    result = self.agentic_generator.generate_task_template(epic, story, task_num)
                    if result.success and result.generated_content:
                        content = result.generated_content
                        print(f"🤖 Generated with agentic intelligence: {file_path}")
                    else:
                        # Fallback to procedural
                        content = self.generate_task_content(epic, story, task_num, task_desc)
                        if result.errors:
                            print(f"⚠️  Agentic generation failed, using procedural: {', '.join(result.errors)}")
                except Exception as e:
                    # Fallback to procedural
                    content = self.generate_task_content(epic, story, task_num, task_desc)
                    print(f"⚠️  Agentic generation error, using procedural: {e}")
            else:
                content = self.generate_task_content(epic, story, task_num, task_desc)
            
            if self.dry_run:
                print(f"[DRY RUN] Would generate: {file_path}")
                continue
            
            # Create directory if needed
            file_path.parent.mkdir(parents=True, exist_ok=True)
            
            # Write file
            try:
                file_path.write_text(content, encoding='utf-8')
                self.generated_files.append(file_path)
                print(f"Generated: {file_path}")
            except Exception as e:
                self.errors.append(f"Failed to write {file_path}: {e}")
        
        return len(self.errors) == 0
    
    def validate(self) -> Dict:
        """
        Validate generated templates against concrete templates.
        
        Returns:
            Dictionary with validation results
        """
        results = {
            'coverage': {'total': len(self.tasks), 'generated': 0, 'missing': []},
            'paths': {'correct': 0, 'incorrect': []},
            'structure': {'valid': 0, 'invalid': []}
        }
        
        # Check coverage
        for epic, story, task_num, task_desc in self.tasks:
            file_path = self.get_task_file_path(epic, story, task_num, task_desc)
            if file_path.exists():
                results['coverage']['generated'] += 1
            else:
                results['coverage']['missing'].append({
                    'epic': epic,
                    'story': story,
                    'task': task_num,
                    'description': task_desc
                })
        
        # Check paths (basic validation)
        for file_path in self.generated_files:
            if file_path.exists():
                results['paths']['correct'] += 1
            else:
                results['paths']['incorrect'].append(str(file_path))
        
        return results


def main():
    """Main entry point."""
    parser = argparse.ArgumentParser(
        description='Generate task templates from canonical structure document'
    )
    parser.add_argument(
        '--structure-file',
        type=Path,
        default=Path('packages/frameworks/kanban/templates/COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md'),
        help='Path to structure document'
    )
    parser.add_argument(
        '--template-file',
        type=Path,
        default=Path('packages/frameworks/kanban/templates/TASK_TEMPLATE.md'),
        help='Path to task template structure'
    )
    parser.add_argument(
        '--output-dir',
        type=Path,
        default=Path('packages/frameworks/kanban/templates/tasks'),
        help='Output directory for generated templates'
    )
    parser.add_argument(
        '--epic',
        type=int,
        help='Generate templates for specific epic only'
    )
    parser.add_argument(
        '--story',
        type=int,
        help='Generate templates for specific story only (requires --epic)'
    )
    parser.add_argument(
        '--overwrite',
        action='store_true',
        help='Allow overwriting existing files'
    )
    parser.add_argument(
        '--dry-run',
        action='store_true',
        help='Show what would be generated without creating files'
    )
    parser.add_argument(
        '--validate',
        action='store_true',
        help='Validate generated templates against concrete templates'
    )
    parser.add_argument(
        '--agentic',
        action='store_true',
        help='Use agentic generator for richer content (requires LLM provider)'
    )
    parser.add_argument(
        '--agentic-provider',
        choices=['openai', 'anthropic', 'local', 'none'],
        default='none',
        help='LLM provider for agentic generation (default: none)'
    )
    parser.add_argument(
        '--agentic-model',
        default='gpt-4',
        help='LLM model name for agentic generation (default: gpt-4)'
    )
    parser.add_argument(
        '--agentic-api-key',
        help='API key for agentic generation (or set OPENAI_API_KEY/ANTHROPIC_API_KEY env var)'
    )
    parser.add_argument(
        '--verbose',
        action='store_true',
        help='Verbose output'
    )
    
    args = parser.parse_args()
    
    # Validate arguments
    if args.story and not args.epic:
        parser.error("--story requires --epic")
    
    # Create generator
    generator = TaskTemplateGenerator(
        structure_file=args.structure_file,
        template_file=args.template_file,
        output_dir=args.output_dir,
        overwrite=args.overwrite,
        dry_run=args.dry_run,
        use_agentic=args.agentic,
        agentic_provider=args.agentic_provider if args.agentic else None,
        agentic_config={
            "model": args.agentic_model,
            "api_key": args.agentic_api_key
        } if args.agentic else None
    )
    
    # Generate templates
    success = generator.generate_templates(
        epic_filter=args.epic,
        story_filter=args.story
    )
    
    # Report results
    print(f"\n{'='*60}")
    print(f"Generated: {len(generator.generated_files)} files")
    print(f"Skipped: {len(generator.skipped_files)} files")
    print(f"Errors: {len(generator.errors)}")
    
    if generator.errors:
        print("\nErrors:")
        for error in generator.errors:
            print(f"  - {error}")
    
    if generator.skipped_files and args.verbose:
        print("\nSkipped files (use --overwrite to regenerate):")
        for file_path in generator.skipped_files[:10]:  # Show first 10
            print(f"  - {file_path}")
        if len(generator.skipped_files) > 10:
            print(f"  ... and {len(generator.skipped_files) - 10} more")
    
    # Validate if requested
    if args.validate:
        print("\n" + "="*60)
        print("Validation Results:")
        results = generator.validate()
        print(f"Coverage: {results['coverage']['generated']}/{results['coverage']['total']} templates generated")
        if results['coverage']['missing']:
            print(f"Missing: {len(results['coverage']['missing'])} templates")
        print(f"Paths: {results['paths']['correct']} correct")
    
    sys.exit(0 if success else 1)


if __name__ == '__main__':
    main()

