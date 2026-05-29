#!/usr/bin/env python3
"""
Intake Dependency Wiring Component

Extracts dependencies from FR/BR/UXR content and wires them automatically,
including Blocked By, Blocks, and Related Work references.

Part of Epic 2, Story 11, Task 5: Implement Dependency and Reference Wiring.

Usage:
    from intake_dependency_wiring import IntakeDependencyWiring
    
    wiring = IntakeDependencyWiring(config)
    result = wiring.wire_dependencies(fr_br_path, created_tasks)
"""

import sys
import re
from pathlib import Path
from typing import Dict, List, Optional, Set, Tuple
from dataclasses import dataclass

# Import intake components
try:
    scripts_path = Path(__file__).parent
    if str(scripts_path) not in sys.path:
        sys.path.insert(0, str(scripts_path))
except ImportError as e:
    print(f"⚠️  Warning: Could not import required modules: {e}")
    raise


@dataclass
class DependencyReference:
    """A dependency reference found in content."""
    type: str  # 'fr', 'br', 'uxr', 'epic_story', 'task'
    identifier: str  # e.g., 'FR-019', 'E2:S11', 'E2:S11:T05'
    context: str  # The section where it was found (e.g., 'Blocked By', 'Blocks', 'Related Work')
    line_number: Optional[int] = None


@dataclass
class IntakeDependencyWiringResult:
    """Result from dependency wiring."""
    success: bool
    extracted_dependencies: List[DependencyReference]
    wired_dependencies: Dict[str, List[str]]  # 'blocked_by', 'blocks', 'related_work'
    cross_references: List[str]  # List of cross-reference updates made
    errors: List[str]
    warnings: List[str]
    explanation: str


class IntakeDependencyWiring:
    """Dependency wiring component for intake workflow."""
    
    def __init__(self, config: Optional[Dict] = None, kanban_path: Optional[Path] = None):
        """
        Initialize dependency wiring.
        
        Args:
            config: Configuration dict (from intake-workflow.yaml)
            kanban_path: Path to Kanban structure (for validation)
        """
        self.config = config or {}
        self.kanban_path = Path(kanban_path) if kanban_path else None
        
        # Configuration
        dependency_config = self.config.get('dependency_patterns', {})
        self.patterns = {
            'fr': dependency_config.get('fr', r'FR-\d+'),
            'br': dependency_config.get('br', r'BR-\d+'),
            'uxr': dependency_config.get('uxr', r'UXR-\d+'),
            'epic_story': dependency_config.get('epic_story', r'E\d+:S\d+'),
            'task': dependency_config.get('task', r'E\d+:S\d+:T\d+'),
        }
        
        validation_config = self.config.get('validation', {})
        self.check_existence = validation_config.get('check_existence', True)
        self.check_circular = validation_config.get('check_circular', True)
        self.strict_mode = validation_config.get('strict_mode', False)
    
    def wire_dependencies(
        self,
        fr_br_path: Path,
        created_tasks: List  # List of CreatedTask objects from T03
    ) -> IntakeDependencyWiringResult:
        """
        Extract and wire dependencies from FR/BR/UXR document.
        
        Args:
            fr_br_path: Path to FR/BR/UXR document
            created_tasks: List of created tasks (for cross-referencing)
        
        Returns:
            IntakeDependencyWiringResult with wiring status
        """
        errors = []
        warnings = []
        explanation_parts = []
        
        if not fr_br_path.exists():
            errors.append(f"FR/BR/UXR document not found: {fr_br_path}")
            return IntakeDependencyWiringResult(
                success=False,
                extracted_dependencies=[],
                wired_dependencies={},
                cross_references=[],
                errors=errors,
                warnings=warnings,
                explanation="❌ Document not found"
            )
        
        try:
            # Read document
            content = fr_br_path.read_text(encoding='utf-8')
            
            explanation_parts.append(f"🔗 Extracting dependencies from: {fr_br_path.name}")
            
            # Extract dependencies
            extracted_deps = self._extract_dependencies(content)
            explanation_parts.append(f"✅ Found {len(extracted_deps)} dependency reference(s)")
            
            # Categorize dependencies based on context
            blocked_by = []
            blocks = []
            related_work = []
            
            for dep in extracted_deps:
                context_lower = dep.context.lower()
                if context_lower == 'blocked_by' or 'blocked by' in context_lower or 'depends on' in context_lower:
                    blocked_by.append(dep.identifier)
                elif context_lower == 'blocks' or ('blocks' in context_lower and 'blocked' not in context_lower):
                    blocks.append(dep.identifier)
                elif context_lower == 'related_work' or 'related work' in context_lower:
                    related_work.append(dep.identifier)
                else:
                    # Default to related_work for general references
                    related_work.append(dep.identifier)
            
            wired_deps = {
                'blocked_by': blocked_by,
                'blocks': blocks,
                'related_work': related_work
            }
            
            # Validate dependencies
            validation_errors, validation_warnings = self._validate_dependencies(
                extracted_deps,
                fr_br_path
            )
            
            if validation_errors:
                if self.strict_mode:
                    errors.extend(validation_errors)
                else:
                    warnings.extend(validation_errors)
            
            if validation_warnings:
                warnings.extend(validation_warnings)
            
            # Check for circular dependencies
            if self.check_circular:
                circular = self._check_circular_dependencies(blocked_by, blocks)
                if circular:
                    warnings.append(f"Circular dependency detected: {', '.join(circular)}")
                    explanation_parts.append(f"⚠️  Circular dependency detected: {', '.join(circular)}")
            
            # Update document with dependencies
            updated_content, cross_refs = self._update_document_dependencies(
                content,
                wired_deps,
                created_tasks
            )
            
            if updated_content != content:
                fr_br_path.write_text(updated_content, encoding='utf-8')
                explanation_parts.append("✅ Document updated with dependency wiring")
            else:
                explanation_parts.append("ℹ️  No dependency updates needed")
            
            # Update created tasks with dependencies
            task_updates = self._update_task_dependencies(created_tasks, wired_deps)
            if task_updates:
                explanation_parts.append(f"✅ Updated {len(task_updates)} task(s) with dependencies")
            
            success = len(errors) == 0
            
            return IntakeDependencyWiringResult(
                success=success,
                extracted_dependencies=extracted_deps,
                wired_dependencies=wired_deps,
                cross_references=cross_refs,
                errors=errors,
                warnings=warnings,
                explanation="\n".join(explanation_parts)
            )
            
        except Exception as e:
            errors.append(f"Dependency wiring failed: {str(e)}")
            explanation_parts.append(f"❌ Wiring exception: {str(e)}")
            import traceback
            traceback.print_exc()
            
            return IntakeDependencyWiringResult(
                success=False,
                extracted_dependencies=[],
                wired_dependencies={},
                cross_references=[],
                errors=errors,
                warnings=warnings,
                explanation="\n".join(explanation_parts)
            )
    
    def _extract_dependencies(self, content: str) -> List[DependencyReference]:
        """Extract dependency references from content."""
        dependencies = []
        
        # Split content into lines for context tracking
        lines = content.split('\n')
        
        # Find Dependencies section
        deps_section_start = None
        for i, line in enumerate(lines):
            if re.match(r'^##\s+Dependencies', line, re.IGNORECASE):
                deps_section_start = i
                break
        
            # Extract from Dependencies section
        if deps_section_start is not None:
            deps_section = '\n'.join(lines[deps_section_start:])
            
            # Look for Blocks subsection
            blocks_match = re.search(
                r'\*\*Blocks?:\*\*\s*\n(.*?)(?=\n\*\*|\n##|\Z)',
                deps_section,
                re.DOTALL | re.IGNORECASE
            )
            if blocks_match:
                deps_text = blocks_match.group(1)
                deps = self._extract_references_from_text(deps_text, 'blocks')
                dependencies.extend(deps)
            
            # Look for Blocked By subsection
            blocked_by_match = re.search(
                r'\*\*Blocked\s+By:\*\*\s*\n(.*?)(?=\n\*\*|\n##|\Z)',
                deps_section,
                re.DOTALL | re.IGNORECASE
            )
            if blocked_by_match:
                deps_text = blocked_by_match.group(1)
                deps = self._extract_references_from_text(deps_text, 'blocked_by')
                dependencies.extend(deps)
            
            # Look for Related Work subsection
            related_match = re.search(
                r'\*\*Related\s+Work:\*\*\s*\n(.*?)(?=\n\*\*|\n##|\Z)',
                deps_section,
                re.DOTALL | re.IGNORECASE
            )
            if related_match:
                deps_text = related_match.group(1)
                deps = self._extract_references_from_text(deps_text, 'related_work')
                dependencies.extend(deps)
        
        # Also search entire content for references
        all_refs = self._extract_references_from_text(content, 'general')
        dependencies.extend(all_refs)
        
        # Deduplicate
        seen = set()
        unique_deps = []
        for dep in dependencies:
            key = (dep.type, dep.identifier, dep.context)
            if key not in seen:
                seen.add(key)
                unique_deps.append(dep)
        
        return unique_deps
    
    def _extract_references_from_text(self, text: str, context: str) -> List[DependencyReference]:
        """Extract references from text using patterns."""
        references = []
        
        # Try each pattern
        for ref_type, pattern in self.patterns.items():
            matches = re.finditer(pattern, text, re.IGNORECASE)
            for match in matches:
                ref = DependencyReference(
                    type=ref_type,
                    identifier=match.group(0),
                    context=context
                )
                references.append(ref)
        
        return references
    
    def _validate_dependencies(
        self,
        dependencies: List[DependencyReference],
        fr_br_path: Path
    ) -> Tuple[List[str], List[str]]:
        """Validate that dependencies exist."""
        errors = []
        warnings = []
        
        if not self.check_existence:
            return errors, warnings
        
        if not self.kanban_path:
            warnings.append("Kanban path not provided - skipping dependency validation")
            return errors, warnings
        
        for dep in dependencies:
            exists = self._check_dependency_exists(dep, fr_br_path)
            if not exists:
                msg = f"Dependency {dep.identifier} ({dep.type}) not found"
                if self.strict_mode:
                    errors.append(msg)
                else:
                    warnings.append(msg)
        
        return errors, warnings
    
    def _check_dependency_exists(
        self,
        dep: DependencyReference,
        fr_br_path: Path
    ) -> bool:
        """Check if a dependency reference exists."""
        if dep.type in ['fr', 'br', 'uxr']:
            # Check FR/BR/UXR file exists
            fr_br_dir = fr_br_path.parent
            expected_file = fr_br_dir / f"{dep.identifier}.md"
            return expected_file.exists()
        
        elif dep.type == 'epic_story':
            # Check Epic/Story exists
            # Format: E2:S11 -> Epic-2/Story-011-*.md
            match = re.match(r'E(\d+):S(\d+)', dep.identifier, re.IGNORECASE)
            if match:
                epic_num = match.group(1)
                story_num = match.group(2)
                epic_dir = self.kanban_path / "epics" / f"Epic-{epic_num}"
                story_pattern = f"Story-{story_num.zfill(3)}-*.md"
                if epic_dir.exists():
                    story_files = list(epic_dir.glob(story_pattern))
                    return len(story_files) > 0
            return False
        
        elif dep.type == 'task':
            # Check Task exists
            # Format: E2:S11:T05 -> Epic-2/Story-011-*/Task-005-*.md
            match = re.match(r'E(\d+):S(\d+):T(\d+)', dep.identifier, re.IGNORECASE)
            if match:
                epic_num = match.group(1)
                story_num = match.group(2)
                task_num = match.group(3)
                epic_dir = self.kanban_path / "epics" / f"Epic-{epic_num}"
                story_pattern = f"Story-{story_num.zfill(3)}-*.md"
                if epic_dir.exists():
                    story_files = list(epic_dir.glob(story_pattern))
                    if story_files:
                        # Task references are in story doc, not separate files
                        # For now, assume task exists if story exists
                        return True
            return False
        
        return False
    
    def _check_circular_dependencies(
        self,
        blocked_by: List[str],
        blocks: List[str]
    ) -> List[str]:
        """Check for circular dependencies."""
        circular = []
        
        # Simple check: if A blocks B and B blocks A
        blocked_by_set = set(blocked_by)
        blocks_set = set(blocks)
        
        intersection = blocked_by_set & blocks_set
        if intersection:
            circular.extend(list(intersection))
        
        return circular
    
    def _update_document_dependencies(
        self,
        content: str,
        wired_deps: Dict[str, List[str]],
        created_tasks: List
    ) -> Tuple[str, List[str]]:
        """Update document with dependency wiring."""
        cross_refs = []
        
        # Find or create Dependencies section
        deps_pattern = r'(##\s+Dependencies\s*\n\n.*?)(?=\n##|\n---|\Z)'
        match = re.search(deps_pattern, content, re.DOTALL | re.IGNORECASE)
        
        if match:
            # Update existing section
            deps_section = match.group(1)
            updated_section = self._format_dependencies_section(wired_deps, created_tasks)
            updated_content = content[:match.start()] + updated_section + content[match.end():]
        else:
            # Add new section before Intake Decision or at end
            intake_pattern = r'(##\s+Intake\s+Decision)'
            match = re.search(intake_pattern, content, re.IGNORECASE)
            if match:
                deps_section = "\n\n## Dependencies\n\n" + self._format_dependencies_section(wired_deps, created_tasks)
                updated_content = content[:match.start()] + deps_section + "\n\n" + content[match.start():]
            else:
                deps_section = "\n\n## Dependencies\n\n" + self._format_dependencies_section(wired_deps, created_tasks)
                updated_content = content.rstrip() + deps_section + "\n"
        
        # Track cross-references
        if wired_deps['blocked_by']:
            cross_refs.append(f"Blocked By: {', '.join(wired_deps['blocked_by'])}")
        if wired_deps['blocks']:
            cross_refs.append(f"Blocks: {', '.join(wired_deps['blocks'])}")
        if wired_deps['related_work']:
            cross_refs.append(f"Related Work: {', '.join(wired_deps['related_work'])}")
        
        return updated_content, cross_refs
    
    def _format_dependencies_section(
        self,
        wired_deps: Dict[str, List[str]],
        created_tasks: List
    ) -> str:
        """Format dependencies section content."""
        lines = []
        
        if wired_deps['blocked_by']:
            lines.append("**Blocked By:**")
            for dep in wired_deps['blocked_by']:
                lines.append(f"- {dep}")
            lines.append("")
        
        if wired_deps['blocks']:
            lines.append("**Blocks:**")
            for dep in wired_deps['blocks']:
                lines.append(f"- {dep}")
            lines.append("")
        
        if wired_deps['related_work']:
            lines.append("**Related Work:**")
            for dep in wired_deps['related_work']:
                lines.append(f"- {dep}")
            lines.append("")
        
        # Add created task references
        if created_tasks:
            lines.append("**Created Tasks:**")
            for task in created_tasks:
                task_id = getattr(task, 'task_id', None)
                task_path = getattr(task, 'task_path', None)
                if task_id:
                    if task_path:
                        lines.append(f"- [{task_id}]({task_path})")
                    else:
                        lines.append(f"- {task_id}")
            lines.append("")
        
        return "\n".join(lines)
    
    def _update_task_dependencies(
        self,
        created_tasks: List,
        wired_deps: Dict[str, List[str]]
    ) -> List[str]:
        """Update created tasks with dependencies."""
        updated_tasks = []
        
        # For now, this is a placeholder
        # In a full implementation, we would update task documents with dependencies
        # This would require reading and updating task markdown files
        
        return updated_tasks


def main():
    """CLI entry point for testing."""
    import argparse
    
    parser = argparse.ArgumentParser(description="Intake Dependency Wiring")
    parser.add_argument('fr_br_path', type=Path, help='Path to FR/BR/UXR document')
    parser.add_argument('--kanban-path', type=Path, default=Path('docs/project-management/kanban'),
                       help='Path to Kanban structure')
    parser.add_argument('--config', type=Path, help='Path to intake-config.yaml')
    args = parser.parse_args()
    
    # Load config if provided
    config = {}
    if args.config and args.config.exists():
        import yaml
        config = yaml.safe_load(args.config.read_text())
    
    # Mock created tasks (in real usage, these come from T03)
    created_tasks = []
    
    # Initialize dependency wiring
    wiring = IntakeDependencyWiring(config, args.kanban_path)
    
    # Wire dependencies
    try:
        result = wiring.wire_dependencies(args.fr_br_path, created_tasks)
        
        print("✅ Intake Dependency Wiring")
        print("=" * 80)
        print(f"Success: {result.success}")
        print(f"Extracted Dependencies: {len(result.extracted_dependencies)}")
        print(f"Wired Dependencies:")
        print(f"  - Blocked By: {len(result.wired_dependencies.get('blocked_by', []))}")
        print(f"  - Blocks: {len(result.wired_dependencies.get('blocks', []))}")
        print(f"  - Related Work: {len(result.wired_dependencies.get('related_work', []))}")
        print(f"Cross-References: {len(result.cross_references)}")
        if result.errors:
            print(f"Errors: {len(result.errors)}")
            for error in result.errors:
                print(f"  - {error}")
        if result.warnings:
            print(f"Warnings: {len(result.warnings)}")
            for warning in result.warnings:
                print(f"  - {warning}")
        print("\nExplanation:")
        print(result.explanation)
        
        return 0 if result.success else 1
    except Exception as e:
        print(f"❌ Error: {e}", file=sys.stderr)
        import traceback
        traceback.print_exc()
        return 1


if __name__ == "__main__":
    sys.exit(main())
