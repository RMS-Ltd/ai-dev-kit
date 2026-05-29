#!/usr/bin/env python3
"""
Agentic Template Generator for Epic/Story/Task Templates

Uses AI/LLM to generate rich, contextual templates for Epics, Stories, and Tasks
based on the canonical structure document and reference templates.

Part of: E4:S15 - Procedural Task Template Generation and Hybrid Strategy

Usage:
    python agentic_template_generator.py --type epic --epic 1
    python agentic_template_generator.py --type story --epic 1 --story 1
    python agentic_template_generator.py --type task --epic 1 --story 1 --task 1
    python agentic_template_generator.py --all --provider openai
"""

import argparse
import json
import os
import re
import sys
from pathlib import Path
from typing import Dict, List, Optional, Tuple
from datetime import datetime
from dataclasses import dataclass, asdict


@dataclass
class LLMConfig:
    """Configuration for LLM provider."""
    provider: str = "openai"  # openai, anthropic, local, none
    model: str = "gpt-4"
    api_key: Optional[str] = None
    temperature: float = 0.3
    max_tokens: int = 2000
    cache_enabled: bool = True


@dataclass
class TemplateGenerationResult:
    """Result of template generation."""
    success: bool
    template_type: str  # epic, story, task
    epic: Optional[int] = None
    story: Optional[int] = None
    task: Optional[int] = None
    generated_content: Optional[str] = None
    file_path: Optional[Path] = None
    reasoning: Optional[str] = None
    confidence: float = 0.0
    errors: List[str] = None
    warnings: List[str] = None
    
    def __post_init__(self):
        if self.errors is None:
            self.errors = []
        if self.warnings is None:
            self.warnings = []


class LLMClient:
    """LLM client abstraction for different providers."""
    
    def __init__(self, config: LLMConfig):
        self.config = config
        self.client = None
        self._initialize_client()
    
    def _initialize_client(self):
        """Initialize LLM client based on provider."""
        if self.config.provider == "none":
            return
        
        try:
            if self.config.provider == "openai":
                try:
                    import openai
                    self.client = openai.OpenAI(api_key=self.config.api_key or os.getenv("OPENAI_API_KEY"))
                except ImportError:
                    raise ImportError("openai package not installed. Install with: pip install openai")
            
            elif self.config.provider == "anthropic":
                try:
                    import anthropic
                    self.client = anthropic.Anthropic(api_key=self.config.api_key or os.getenv("ANTHROPIC_API_KEY"))
                except ImportError:
                    raise ImportError("anthropic package not installed. Install with: pip install anthropic")
            
            elif self.config.provider == "local":
                # Placeholder for local model integration
                self.client = None
                raise NotImplementedError("Local model integration not yet implemented")
            
        except Exception as e:
            print(f"⚠️  Warning: LLM client initialization failed: {e}")
            print("   Falling back to procedural generation")
            self.client = None
    
    def generate_content(self, prompt: str, system_prompt: Optional[str] = None) -> Optional[str]:
        """
        Generate content using LLM.
        
        Args:
            prompt: User prompt
            system_prompt: Optional system prompt
            
        Returns:
            Generated content or None if LLM unavailable
        """
        if not self.client:
            return None
        
        try:
            if self.config.provider == "openai":
                messages = []
                if system_prompt:
                    messages.append({"role": "system", "content": system_prompt})
                messages.append({"role": "user", "content": prompt})
                
                response = self.client.chat.completions.create(
                    model=self.config.model,
                    messages=messages,
                    temperature=self.config.temperature,
                    max_tokens=self.config.max_tokens
                )
                return response.choices[0].message.content
            
            elif self.config.provider == "anthropic":
                messages = []
                if system_prompt:
                    messages.append({"role": "user", "content": system_prompt})
                messages.append({"role": "user", "content": prompt})
                
                response = self.client.messages.create(
                    model=self.config.model,
                    messages=messages,
                    temperature=self.config.temperature,
                    max_tokens=self.config.max_tokens
                )
                return response.content[0].text
            
        except Exception as e:
            print(f"⚠️  Warning: LLM generation failed: {e}")
            return None
        
        return None


class AgenticTemplateGenerator:
    """Agentic generator for Epic/Story/Task templates."""
    
    def __init__(
        self,
        structure_file: Path,
        template_dir: Path,
        output_dir: Path,
        llm_config: Optional[LLMConfig] = None,
        overwrite: bool = False,
        dry_run: bool = False
    ):
        """
        Initialize agentic template generator.
        
        Args:
            structure_file: Path to COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md
            template_dir: Directory containing EPIC_TEMPLATE.md, STORY_TEMPLATE.md, TASK_TEMPLATE.md
            output_dir: Output directory for generated templates
            llm_config: Optional LLM configuration
            overwrite: Allow overwriting existing files
            dry_run: Show what would be generated without creating files
        """
        self.structure_file = structure_file
        self.template_dir = template_dir
        self.output_dir = output_dir
        self.overwrite = overwrite
        self.dry_run = dry_run
        
        self.llm_config = llm_config or LLMConfig(provider="none")
        self.llm_client = LLMClient(self.llm_config)
        
        self.structure_data = {}
        self.results: List[TemplateGenerationResult] = []
    
    def parse_structure(self) -> bool:
        """Parse the canonical structure document."""
        try:
            content = self.structure_file.read_text(encoding='utf-8')
        except Exception as e:
            print(f"❌ Failed to read structure file: {e}")
            return False
        
        # Parse structure into hierarchical data
        self.structure_data = self._parse_structure_content(content)
        return True
    
    def _parse_structure_content(self, content: str) -> Dict:
        """Parse structure document content into structured data."""
        data = {
            "epics": {}
        }
        
        current_epic = None
        current_story = None
        
        epic_pattern = r'^### Epic (\d+):\s*(.+)$'
        story_pattern = r'^#### Story (\d+):\s*(.+)$'
        task_pattern = r'^-\s+T(\d+):\s*(.+)$'
        
        for line in content.split('\n'):
            # Epic
            epic_match = re.match(epic_pattern, line)
            if epic_match:
                epic_num = int(epic_match.group(1))
                epic_name = epic_match.group(2).strip()
                current_epic = epic_num
                current_story = None
                data["epics"][epic_num] = {
                    "number": epic_num,
                    "name": epic_name,
                    "stories": {}
                }
                continue
            
            # Story
            story_match = re.match(story_pattern, line)
            if story_match and current_epic:
                story_num = int(story_match.group(1))
                story_name = story_match.group(2).strip()
                current_story = story_num
                data["epics"][current_epic]["stories"][story_num] = {
                    "number": story_num,
                    "name": story_name,
                    "tasks": {}
                }
                continue
            
            # Task
            task_match = re.match(task_pattern, line)
            if task_match and current_epic and current_story:
                task_num = int(task_match.group(1))
                task_desc = task_match.group(2).strip()
                data["epics"][current_epic]["stories"][current_story]["tasks"][task_num] = {
                    "number": task_num,
                    "description": task_desc
                }
        
        return data
    
    def generate_epic_template(self, epic_num: int) -> TemplateGenerationResult:
        """Generate Epic template using agentic intelligence."""
        result = TemplateGenerationResult(
            success=False,
            template_type="epic",
            epic=epic_num
        )
        
        if epic_num not in self.structure_data.get("epics", {}):
            result.errors.append(f"Epic {epic_num} not found in structure document")
            return result
        
        epic_data = self.structure_data["epics"][epic_num]
        epic_name = epic_data["name"]
        stories = epic_data.get("stories", {})
        
        # Load Epic template
        epic_template_file = self.template_dir / "EPIC_TEMPLATE.md"
        if not epic_template_file.exists():
            result.errors.append(f"Epic template not found: {epic_template_file}")
            return result
        
        template_content = epic_template_file.read_text(encoding='utf-8')
        
        # Generate content using LLM or procedural fallback
        generated_content = self._generate_epic_content_agentic(
            epic_num, epic_name, stories, template_content
        )
        
        if not generated_content:
            result.errors.append("Failed to generate Epic content")
            return result
        
        # Determine output path
        output_path = self.output_dir / f"Epic-{epic_num}" / f"Epic-{epic_num}.md"
        
        if not self.dry_run:
            output_path.parent.mkdir(parents=True, exist_ok=True)
            if output_path.exists() and not self.overwrite:
                result.warnings.append(f"File exists, skipping: {output_path}")
                result.success = False
                return result
            
            output_path.write_text(generated_content, encoding='utf-8')
        
        result.success = True
        result.generated_content = generated_content
        result.file_path = output_path
        result.confidence = 0.9 if self.llm_client.client else 0.7
        
        return result
    
    def generate_story_template(self, epic_num: int, story_num: int) -> TemplateGenerationResult:
        """Generate Story template using agentic intelligence."""
        result = TemplateGenerationResult(
            success=False,
            template_type="story",
            epic=epic_num,
            story=story_num
        )
        
        if epic_num not in self.structure_data.get("epics", {}):
            result.errors.append(f"Epic {epic_num} not found")
            return result
        
        epic_data = self.structure_data["epics"][epic_num]
        if story_num not in epic_data.get("stories", {}):
            result.errors.append(f"Story {story_num} not found in Epic {epic_num}")
            return result
        
        story_data = epic_data["stories"][story_num]
        story_name = story_data["name"]
        tasks = story_data.get("tasks", {})
        
        # Load Story template
        story_template_file = self.template_dir / "STORY_TEMPLATE.md"
        if not story_template_file.exists():
            result.errors.append(f"Story template not found: {story_template_file}")
            return result
        
        template_content = story_template_file.read_text(encoding='utf-8')
        
        # Generate content
        generated_content = self._generate_story_content_agentic(
            epic_num, story_num, story_name, tasks, template_content, epic_data
        )
        
        if not generated_content:
            result.errors.append("Failed to generate Story content")
            return result
        
        # Determine output path
        output_path = self.output_dir / f"Epic-{epic_num}" / f"Story-{story_num:03d}-{self._slugify(story_name)}.md"
        
        if not self.dry_run:
            output_path.parent.mkdir(parents=True, exist_ok=True)
            if output_path.exists() and not self.overwrite:
                result.warnings.append(f"File exists, skipping: {output_path}")
                result.success = False
                return result
            
            output_path.write_text(generated_content, encoding='utf-8')
        
        result.success = True
        result.generated_content = generated_content
        result.file_path = output_path
        result.confidence = 0.9 if self.llm_client.client else 0.7
        
        return result
    
    def generate_task_template(self, epic_num: int, story_num: int, task_num: int) -> TemplateGenerationResult:
        """Generate Task template using agentic intelligence."""
        result = TemplateGenerationResult(
            success=False,
            template_type="task",
            epic=epic_num,
            story=story_num,
            task=task_num
        )
        
        if epic_num not in self.structure_data.get("epics", {}):
            result.errors.append(f"Epic {epic_num} not found")
            return result
        
        epic_data = self.structure_data["epics"][epic_num]
        if story_num not in epic_data.get("stories", {}):
            result.errors.append(f"Story {story_num} not found")
            return result
        
        story_data = epic_data["stories"][story_num]
        if task_num not in story_data.get("tasks", {}):
            result.errors.append(f"Task {task_num} not found")
            return result
        
        task_data = story_data["tasks"][task_num]
        task_desc = task_data["description"]
        
        # Load Task template
        task_template_file = self.template_dir / "TASK_TEMPLATE.md"
        if not task_template_file.exists():
            result.errors.append(f"Task template not found: {task_template_file}")
            return result
        
        template_content = task_template_file.read_text(encoding='utf-8')
        
        # Generate content
        generated_content = self._generate_task_content_agentic(
            epic_num, story_num, task_num, task_desc, template_content,
            epic_data, story_data
        )
        
        if not generated_content:
            result.errors.append("Failed to generate Task content")
            return result
        
        # Determine output path
        output_path = self.output_dir / f"Epic-{epic_num}" / f"Story-{story_num:03d}" / f"T{task_num:02d}-{self._slugify(task_desc)}.md"
        
        if not self.dry_run:
            output_path.parent.mkdir(parents=True, exist_ok=True)
            if output_path.exists() and not self.overwrite:
                result.warnings.append(f"File exists, skipping: {output_path}")
                result.success = False
                return result
            
            output_path.write_text(generated_content, encoding='utf-8')
        
        result.success = True
        result.generated_content = generated_content
        result.file_path = output_path
        result.confidence = 0.9 if self.llm_client.client else 0.7
        
        return result
    
    def _generate_epic_content_agentic(
        self,
        epic_num: int,
        epic_name: str,
        stories: Dict,
        template: str
    ) -> Optional[str]:
        """Generate Epic content using agentic intelligence."""
        # Build context
        stories_list = [f"Story {s['number']}: {s['name']}" for s in stories.values()]
        stories_text = "\n".join(f"- {s}" for s in stories_list)
        
        # Try LLM generation first
        if self.llm_client.client:
            prompt = f"""Generate a comprehensive Epic template for:

Epic {epic_num}: {epic_name}

Stories in this Epic:
{stories_text}

Use the following template structure and fill it with rich, contextual content:
{template[:2000]}  # Truncated for prompt

Generate:
1. Overview: One paragraph describing the epic's purpose, scope, and motivation
2. Goals: 3-5 high-level goals for this epic
3. Story summaries: Brief 1-2 sentence summaries for each story

Ensure all placeholders are replaced with contextual content specific to this epic.
Preserve the template structure and formatting."""
            
            system_prompt = """You are an expert technical writer creating project management documentation.
Generate comprehensive, contextual Epic templates that are:
- Clear and actionable
- Specific to the epic's purpose
- Well-structured and professional
- Ready for use in project management"""
            
            generated = self.llm_client.generate_content(prompt, system_prompt)
            if generated:
                return self._post_process_template(generated, epic_num, None, None, "epic")
        
        # Fallback to procedural generation
        return self._generate_epic_content_procedural(epic_num, epic_name, stories, template)
    
    def _generate_story_content_agentic(
        self,
        epic_num: int,
        story_num: int,
        story_name: str,
        tasks: Dict,
        template: str,
        epic_data: Dict
    ) -> Optional[str]:
        """Generate Story content using agentic intelligence."""
        tasks_list = [f"Task {t['number']}: {t['description']}" for t in tasks.values()]
        tasks_text = "\n".join(f"- {t}" for t in tasks_list)
        
        if self.llm_client.client:
            prompt = f"""Generate a comprehensive Story template for:

Epic {epic_num}: {epic_data['name']}
Story {story_num}: {story_name}

Tasks in this Story:
{tasks_text}

Use the following template structure:
{template[:2000]}

Generate:
1. Overview: One sentence describing what this story accomplishes
2. Goals: 3-5 goals for this story
3. Task summaries: Brief summaries for each task

Ensure all placeholders are replaced with contextual content."""
            
            system_prompt = """You are an expert technical writer creating project management documentation.
Generate comprehensive Story templates that are clear, actionable, and specific."""
            
            generated = self.llm_client.generate_content(prompt, system_prompt)
            if generated:
                return self._post_process_template(generated, epic_num, story_num, None, "story")
        
        # Fallback
        return self._generate_story_content_procedural(epic_num, story_num, story_name, tasks, template)
    
    def _generate_task_content_agentic(
        self,
        epic_num: int,
        story_num: int,
        task_num: int,
        task_desc: str,
        template: str,
        epic_data: Dict,
        story_data: Dict
    ) -> Optional[str]:
        """Generate Task content using agentic intelligence."""
        if self.llm_client.client:
            prompt = f"""Generate a comprehensive Task template for:

Epic {epic_num}: {epic_data['name']}
Story {story_num}: {story_data['name']}
Task {task_num}: {task_desc}

Use the following template structure:
{template[:2000]}

Generate:
1. Scope: Clear description of what this task accomplishes
2. Input: What is required to start this task
3. Deliverable: What is produced by this task
4. Acceptance Criteria: 3-5 measurable, testable criteria
5. Approach: Step-by-step approach (5-7 steps)

Ensure all placeholders are replaced with contextual, specific content."""
            
            system_prompt = """You are an expert technical writer creating project management documentation.
Generate comprehensive Task templates that are:
- Specific and actionable
- Clear about inputs and deliverables
- Include measurable acceptance criteria
- Provide a logical approach"""
            
            generated = self.llm_client.generate_content(prompt, system_prompt)
            if generated:
                return self._post_process_template(generated, epic_num, story_num, task_num, "task")
        
        # Fallback
        return self._generate_task_content_procedural(epic_num, story_num, task_num, task_desc, template)
    
    def _post_process_template(
        self,
        content: str,
        epic: int,
        story: Optional[int],
        task: Optional[int],
        template_type: str
    ) -> str:
        """Post-process generated template to ensure proper formatting and placeholders."""
        # Replace placeholders
        content = content.replace("{PROJECT_NAME}", "{PROJECT_NAME}")
        content = content.replace("{PROJECT_TYPE}", "{PROJECT_TYPE}")
        
        # Ensure proper task ID format
        if task:
            task_id_short = f"E{epic}:S{story}:T{task}"
            task_id_full = f"E{epic:02d}:S{story:02d}:T{task:02d}"
            content = re.sub(r'E\{epic\}:S\{story\}:T\{task\}', task_id_short, content)
            content = re.sub(r'EXX:SYY:TZZ', task_id_full, content)
        
        # Ensure proper frontmatter
        if "---" not in content[:100]:
            frontmatter = f"""---
lifecycle: evergreen
ttl_days: null
created_at: {datetime.utcnow().strftime('%Y-%m-%dT%H:%M:%SZ')}
expires_at: null
housekeeping_policy: keep
---

"""
            content = frontmatter + content
        
        return content
    
    def _generate_epic_content_procedural(
        self,
        epic_num: int,
        epic_name: str,
        stories: Dict,
        template: str
    ) -> str:
        """Procedural fallback for Epic generation with rich content."""
        content = template
        
        # Replace basic placeholders
        content = content.replace("Epic X", f"Epic {epic_num}")
        content = content.replace("[Title]", epic_name)
        content = content.replace("EXX", f"E{epic_num:02d}")
        
        # Generate Overview from epic name and purpose
        # Clean epic name - preserve {PROJECT_NAME} placeholder but normalize
        epic_name_clean = epic_name.replace("{project_name}", "{PROJECT_NAME}")
        epic_name_lower = epic_name_clean.lower().replace("{project_name}", "{PROJECT_NAME}")
        overview = f"This epic encompasses {epic_name_lower} for the {{PROJECT_NAME}} project. "
        overview += f"It provides the foundational structure and capabilities needed to support "
        overview += f"the project's core objectives and enables other epics to build upon this foundation."
        
        content = re.sub(
            r'\[One paragraph\. The epic\'s purpose, scope, and motivation\.\]',
            overview,
            content
        )
        
        # Generate Goals (3-5 goals based on epic purpose)
        # Preserve {PROJECT_NAME} placeholder while lowercasing rest
        epic_name_clean = epic_name.replace("{project_name}", "{PROJECT_NAME}")
        epic_name_for_goals = epic_name_clean.replace("{PROJECT_NAME}", "{PROJECT_NAME_PLACEHOLDER}")
        epic_name_lower = epic_name_for_goals.lower().replace("{project_name_placeholder}", "{PROJECT_NAME}")
        goals = [
            f"Establish {epic_name_lower} infrastructure and foundational components",
            f"Define and implement core {epic_name_lower} patterns and standards",
            f"Create reusable {epic_name_lower} components and utilities",
            f"Document {epic_name_lower} architecture and best practices",
            f"Enable integration with other project epics and systems"
        ]
        goals_text = "\n".join([f"{i+1}. {goal}" for i, goal in enumerate(goals[:5])])
        
        content = re.sub(
            r'1\. Goal headline with brief description\n2\. Goal headline with brief description\n3\. Goal headline with brief description',
            goals_text,
            content
        )
        
        # Generate Story Checklist entries
        story_checklist = []
        for story_num, story_data in sorted(stories.items()):
            story_name = story_data.get('name', f'Story {story_num}')
            story_checklist.append(f"- [ ] **E{epic_num:02d}:S{story_num:02d} – {story_name}** - TODO")
        
        if story_checklist:
            # Find and replace Story Checklist section
            checklist_pattern = r'(- \[ \] \*\*EXX:S\d+.*?\n)+'
            if re.search(checklist_pattern, content):
                content = re.sub(
                    checklist_pattern,
                    '\n'.join(story_checklist) + '\n',
                    content
                )
            else:
                # Try alternative pattern
                content = re.sub(
                    r'- \[ \] \*\*EXX:S01.*?\n- \[ \] \*\*EXX:S02.*?\n- \[ \] \*\*EXX:S03.*?\n',
                    '\n'.join(story_checklist) + '\n',
                    content
                )
        
        # Generate Story summaries
        story_summaries = []
        for story_num, story_data in sorted(stories.items()):
            story_name = story_data.get('name', f'Story {story_num}')
            summary_text = f"{story_name.lower()} for the {{PROJECT_NAME}} project, establishing the necessary components and processes to support the epic's objectives."
            summary = f"### Story {story_num}: {story_name}\n\n**Brief Summary:** {summary_text}\n\n**Story Document:** [`Story-{story_num:03d}-{self._slugify(story_name)}.md`](Story-{story_num:03d}-{self._slugify(story_name)}.md)\n"
            story_summaries.append(summary)
        
        # Add story summaries if Stories section exists
        if "## Stories" in content and story_summaries:
            stories_section_pattern = r'(## Stories.*?)(### Story Y:.*?---)'
            if re.search(stories_section_pattern, content, re.DOTALL):
                stories_content = '\n'.join(story_summaries) + '\n---\n'
                content = re.sub(
                    stories_section_pattern,
                    r'\1' + stories_content,
                    content,
                    flags=re.DOTALL
                )
        
        return content
    
    def _generate_story_content_procedural(
        self,
        epic_num: int,
        story_num: int,
        story_name: str,
        tasks: Dict,
        template: str
    ) -> str:
        """Procedural fallback for Story generation with rich content."""
        content = template
        
        # Replace basic placeholders
        content = content.replace("Epic X, Story Y", f"Epic {epic_num}, Story {story_num}")
        content = content.replace("[Title]", story_name)
        content = content.replace("EXX", f"E{epic_num:02d}")
        content = content.replace("SYY", f"S{story_num:02d}")
        content = content.replace("EXXSYY", f"E{epic_num:02d}S{story_num:02d}")
        
        # Generate Overview
        overview = f"Establish {story_name.lower()} for the {{PROJECT_NAME}} project, "
        overview += f"providing the necessary components and capabilities to support "
        overview += f"the epic's objectives."
        
        content = re.sub(
            r'\[One sentence\. What this story accomplishes\.\]',
            overview,
            content
        )
        
        # Generate Goals (3-5 goals)
        goals = [
            f"Complete {story_name.lower()} implementation",
            f"Ensure {story_name.lower()} meets quality standards",
            f"Document {story_name.lower()} for maintainability",
            f"Integrate {story_name.lower()} with existing systems"
        ]
        goals_text = "\n".join([f"- [ ] {goal}" for goal in goals[:5]])
        
        content = re.sub(
            r'- \[ \] Goal one\n- \[ \] Goal two\n- \[ \] Goal three',
            goals_text,
            content
        )
        
        # Generate Task Checklist
        task_checklist = []
        for task_num, task_data in sorted(tasks.items()):
            task_desc = task_data.get('description', f'Task {task_num}')
            task_checklist.append(f"- [ ] **E{epic_num:02d}:S{story_num:02d}:T{task_num:02d} – {task_desc}**")
        
        if task_checklist:
            # Replace Task Checklist
            checklist_pattern = r'(- \[ \] \*\*EXX:SYY:T\d+.*?\n)+'
            if re.search(checklist_pattern, content):
                content = re.sub(
                    checklist_pattern,
                    '\n'.join(task_checklist) + '\n',
                    content
                )
            else:
                # Try alternative pattern
                content = re.sub(
                    r'- \[ \] \*\*EXX:SYY:T01.*?\n- \[ \] \*\*EXX:SYY:T02.*?\n- \[ \] \*\*EXX:SYY:T03.*?\n',
                    '\n'.join(task_checklist) + '\n',
                    content
                )
        
        # Generate task summaries in Tasks section
        task_summaries = []
        for task_num, task_data in sorted(tasks.items()):
            task_desc = task_data.get('description', f'Task {task_num}')
            task_summary = f"**E{epic_num:02d}:S{story_num:02d}:T{task_num:02d} – {task_desc}**\n\n**Brief Summary:** {task_desc.lower()} for the {{PROJECT_NAME}} project.\n"
            task_summaries.append(task_summary)
        
        # Replace task summary placeholders in example sections
        # This is in the template example, so we'll replace it with actual task summaries
        for task_num, task_data in sorted(tasks.items()):
            task_desc = task_data.get('description', f'Task {task_num}')
            task_summary_text = f"{task_desc.lower()} for the {{PROJECT_NAME}} project."
            # Replace in example section
            content = re.sub(
                r'\*\*Brief Summary:\*\* \[One sentence description of what this task accomplishes\]',
                f"**Brief Summary:** {task_summary_text}",
                content,
                count=1  # Only replace first occurrence (the example)
            )
        
        return content
    
    def _generate_task_content_procedural(
        self,
        epic_num: int,
        story_num: int,
        task_num: int,
        task_desc: str,
        template: str
    ) -> str:
        """Procedural fallback for Task generation with rich content."""
        content = template
        
        # Replace basic placeholders
        content = content.replace("Epic X, Story Y, Task Z", f"Epic {epic_num}, Story {story_num}, Task {task_num}")
        content = content.replace("[Task Title]", task_desc)
        content = content.replace("EXX", f"E{epic_num:02d}")
        content = content.replace("SYY", f"S{story_num:02d}")
        content = content.replace("TZZ", f"T{task_num:02d}")
        content = content.replace("EXXSYYTZZ", f"E{epic_num:02d}S{story_num:02d}T{task_num:02d}")
        
        # Generate Scope
        scope = f"{task_desc} for the {{PROJECT_NAME}} project. "
        scope += f"This task establishes the necessary components and processes to support "
        scope += f"the story's objectives and enables subsequent work."
        
        content = re.sub(
            r'\[Clear description of what this task accomplishes\. What problem does it solve\? What value does it deliver\?\]',
            scope,
            content
        )
        
        # Generate Input
        input_content = f"- Project requirements and specifications\n- {task_desc.lower()} requirements\n- {{PROJECT_NAME}} project context and constraints\n- Related documentation and reference materials"
        
        content = re.sub(
            r'\[What is required to start this task\? Dependencies, prerequisites, inputs from other tasks or external sources\.\]',
            input_content,
            content
        )
        
        # Generate Deliverable
        deliverable = f"- {task_desc.lower()} completed and verified\n- Documentation and artifacts created\n- Integration with existing systems verified\n- Quality checks and validation completed"
        
        content = re.sub(
            r'\[What is produced by this task\? Specific artifacts, documents, code, or outcomes\.\]',
            deliverable,
            content
        )
        
        # Generate Acceptance Criteria (3-5 criteria)
        criteria = [
            f"{task_desc} completed successfully",
            f"Documentation and artifacts created and reviewed",
            f"Integration with existing systems verified",
            f"Quality standards met and validated",
            f"Stakeholder approval obtained (if required)"
        ]
        criteria_text = "\n".join([f"- [ ] {c} (measurable, testable)" for c in criteria[:5]])
        
        content = re.sub(
            r'- \[ \] Criterion one \(measurable, testable\)\n- \[ \] Criterion two \(measurable, testable\)\n- \[ \] Criterion three \(measurable, testable\)',
            criteria_text,
            content
        )
        
        # Generate Approach (5-7 steps)
        approach_steps = [
            f"Review requirements and specifications for {task_desc.lower()}",
            f"Design and plan the implementation approach",
            f"Implement {task_desc.lower()} components",
            f"Test and validate the implementation",
            f"Document the implementation and usage",
            f"Review and refine based on feedback",
            f"Finalize and prepare for integration"
        ]
        approach_text = "\n".join([f"{i+1}. {step}" for i, step in enumerate(approach_steps[:7])])
        
        content = re.sub(
            r'1\. Step one\n2\. Step two\n3\. Step three',
            approach_text,
            content
        )
        
        # Update created_at timestamp
        current_time = datetime.utcnow().strftime('%Y-%m-%dT%H:%M:%SZ')
        content = re.sub(
            r'created_at: YYYY-MM-DDTHH:MM:SSZ',
            f'created_at: {current_time}',
            content
        )
        
        return content
    
    def _slugify(self, text: str) -> str:
        """Convert text to URL-friendly slug."""
        text = text.lower()
        text = re.sub(r'[^\w\s-]', '', text)
        text = re.sub(r'[-\s]+', '-', text)
        return text[:50]


def main():
    """CLI interface for agentic template generator."""
    parser = argparse.ArgumentParser(
        description="Agentic template generator for Epic/Story/Task templates"
    )
    
    parser.add_argument(
        "--structure-file",
        type=Path,
        default=Path("packages/frameworks/kanban/templates/COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md"),
        help="Path to structure document"
    )
    
    parser.add_argument(
        "--template-dir",
        type=Path,
        default=Path("packages/frameworks/kanban/templates"),
        help="Directory containing template files"
    )
    
    parser.add_argument(
        "--output-dir",
        type=Path,
        default=Path("packages/frameworks/kanban/templates"),
        help="Output directory for generated templates"
    )
    
    parser.add_argument(
        "--type",
        choices=["epic", "story", "task", "all"],
        required=True,
        help="Type of template to generate"
    )
    
    parser.add_argument(
        "--epic",
        type=int,
        help="Epic number (required for epic/story/task)"
    )
    
    parser.add_argument(
        "--story",
        type=int,
        help="Story number (required for story/task)"
    )
    
    parser.add_argument(
        "--task",
        type=int,
        help="Task number (required for task)"
    )
    
    parser.add_argument(
        "--provider",
        choices=["openai", "anthropic", "local", "none"],
        default="none",
        help="LLM provider (default: none, uses procedural fallback)"
    )
    
    parser.add_argument(
        "--model",
        default="gpt-4",
        help="LLM model name"
    )
    
    parser.add_argument(
        "--api-key",
        help="API key (or set OPENAI_API_KEY/ANTHROPIC_API_KEY env var)"
    )
    
    parser.add_argument(
        "--overwrite",
        action="store_true",
        help="Overwrite existing files"
    )
    
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Show what would be generated without creating files"
    )
    
    parser.add_argument(
        "--verbose",
        action="store_true",
        help="Verbose output"
    )
    
    args = parser.parse_args()
    
    # Validate arguments
    if args.type in ["epic", "story", "task"] and not args.epic:
        parser.error(f"--epic required for --type {args.type}")
    
    if args.type in ["story", "task"] and not args.story:
        parser.error(f"--story required for --type {args.type}")
    
    if args.type == "task" and not args.task:
        parser.error("--task required for --type task")
    
    # Initialize LLM config
    llm_config = LLMConfig(
        provider=args.provider,
        model=args.model,
        api_key=args.api_key
    )
    
    # Initialize generator
    generator = AgenticTemplateGenerator(
        structure_file=args.structure_file,
        template_dir=args.template_dir,
        output_dir=args.output_dir,
        llm_config=llm_config,
        overwrite=args.overwrite,
        dry_run=args.dry_run
    )
    
    # Parse structure
    if not generator.parse_structure():
        print("❌ Failed to parse structure document")
        sys.exit(1)
    
    # Generate templates
    results = []
    
    if args.type == "epic":
        result = generator.generate_epic_template(args.epic)
        results.append(result)
    
    elif args.type == "story":
        result = generator.generate_story_template(args.epic, args.story)
        results.append(result)
    
    elif args.type == "task":
        result = generator.generate_task_template(args.epic, args.story, args.task)
        results.append(result)
    
    elif args.type == "all":
        # Generate all templates
        for epic_num, epic_data in generator.structure_data.get("epics", {}).items():
            print(f"📦 Generating templates for Epic {epic_num}...")
            
            # Epic
            epic_result = generator.generate_epic_template(epic_num)
            results.append(epic_result)
            
            # Stories
            for story_num in epic_data.get("stories", {}).keys():
                story_result = generator.generate_story_template(epic_num, story_num)
                results.append(story_result)
                
                # Tasks
                for task_num in epic_data["stories"][story_num].get("tasks", {}).keys():
                    task_result = generator.generate_task_template(epic_num, story_num, task_num)
                    results.append(task_result)
    
    # Report results
    successful = [r for r in results if r.success]
    failed = [r for r in results if not r.success]
    
    print(f"\n✅ Generated: {len(successful)} templates")
    if failed:
        print(f"❌ Failed: {len(failed)} templates")
        for r in failed:
            print(f"   {r.template_type} E{r.epic or '?'}:S{r.story or '?'}:T{r.task or '?'} - {', '.join(r.errors)}")
    
    if args.verbose:
        for r in successful:
            print(f"\n✅ {r.template_type.upper()} E{r.epic or '?'}:S{r.story or '?'}:T{r.task or '?'}")
            print(f"   File: {r.file_path}")
            print(f"   Confidence: {r.confidence:.1%}")
            if r.reasoning:
                print(f"   Reasoning: {r.reasoning}")


if __name__ == "__main__":
    main()

