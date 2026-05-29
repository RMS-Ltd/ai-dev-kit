#!/usr/bin/env python3
"""
Migration Utility for Kanban Structures

Migrates existing Kanban structures to canonical ai-dev-kit format, preserving
all work items and forensic markers.

Part of Epic 4, Story 7, Task 2 (FR-007): Migration utilities and installation modes.

Usage:
    python3 migrate_structure.py [--analysis-report REPORT] [--mode MODE] [--dry-run] [--backup-dir DIR]

Arguments:
    --analysis-report REPORT  Path to analysis report JSON (default: analysis_report.json)
    --mode MODE               Installation mode: fresh, migration, update, hybrid (default: auto-detect)
    --dry-run                 Preview changes without modifying files
    --backup-dir DIR          Directory for backups (default: docs/project-management/kanban/_backup-{timestamp})
    --force                   Skip confirmation prompts
"""

import argparse
import json
import shutil
import sys
from pathlib import Path
from typing import Dict, List, Optional
from datetime import datetime
import re

# Import reference updater from same directory
sys.path.insert(0, str(Path(__file__).parent))
from reference_updater import ReferenceUpdater
from agentic_mapper import AgenticTaskMapper


class KanbanStructureMigrator:
    """Migrates Kanban structures to canonical format."""
    
    def __init__(
        self,
        analysis_report: Dict,
        kanban_path: Path,
        mode: str = "auto",
        backup_dir: Optional[Path] = None,
        dry_run: bool = False,
        force: bool = False
    ):
        self.analysis_report = analysis_report
        self.kanban_path = Path(kanban_path)
        self.mode = mode if mode != "auto" else analysis_report.get("migration_plan", {}).get("recommended_mode", "migration")
        self.backup_dir = backup_dir
        self.dry_run = dry_run
        self.force = force
        self.migration_log: List[Dict] = []
        
    def migrate(self) -> Dict:
        """Main migration method. Returns migration report."""
        if self.analysis_report.get("status") != "analyzed":
            return {
                "status": "error",
                "message": "Analysis report status is not 'analyzed'. Cannot proceed with migration.",
                "analysis_status": self.analysis_report.get("status")
            }
        
        # Step 1: Create backup
        backup_path = self._create_backup()
        if not backup_path and not self.dry_run:
            return {
                "status": "error",
                "message": "Backup creation failed or was cancelled."
            }
        
        # Step 2: Resolve conflicts (if needed)
        if self.mode in ["migration", "hybrid", "canonical_adoption"]:
            self._resolve_conflicts()
        
        # Step 3: Install canonical epics (if needed)
        if self.mode in ["fresh", "migration", "hybrid", "canonical_adoption"]:
            self._install_canonical_epics()
        
        # Step 4: Migrate project epics (or adopt canonical structure)
        if self.mode == "canonical_adoption":
            self._adopt_canonical_structure()
        elif self.mode in ["migration", "hybrid"]:
            self._migrate_project_epics()
        
        # Step 5: Migrate stories
        self._migrate_stories()
        
        # Step 6: Migrate tasks
        self._migrate_tasks()
        
        # Step 7: Update task ID references
        reference_update_result = self._update_task_references()
        
        # Step 8: Validate migration
        validation_result = self._validate_migration()
        
        return {
            "status": "completed" if validation_result["valid"] else "completed_with_warnings",
            "migration_date": datetime.now().isoformat(),
            "mode": self.mode,
            "backup_path": str(backup_path) if backup_path else None,
            "migration_log": self.migration_log,
            "reference_updates": reference_update_result,
            "validation": validation_result,
            "summary": {
                "epics_migrated": len([e for e in self.migration_log if e["type"] == "epic"]),
                "stories_migrated": len([s for s in self.migration_log if s["type"] == "story"]),
                "tasks_migrated": len([t for t in self.migration_log if t["type"] == "task"]),
                "files_created": len([f for f in self.migration_log if f["action"] == "created"]),
                "files_updated": len([f for f in self.migration_log if f["action"] == "updated"]),
                "references_updated": reference_update_result.get("references_updated", 0)
            }
        }
    
    def _update_task_references(self) -> Dict:
        """Update task ID references in changelogs, docs, and story files."""
        print("🔗 Updating task ID references...")
        
        task_mappings = self.analysis_report.get("task_mappings", [])
        if not task_mappings:
            return {"references_updated": 0, "files_updated": 0}
        
        updater = ReferenceUpdater(task_mappings)
        project_root = self.kanban_path.parent.parent.parent  # Go up from docs/project-management/kanban
        
        if self.dry_run:
            print("  🔍 [DRY RUN] Would update task ID references...")
            return {"references_updated": 0, "files_updated": 0, "dry_run": True}
        
        result = updater.update_references(project_root)
        
        print(f"  ✅ Updated {result['references_updated']} references in {result['files_updated']} files")
        
        if result["unupdatable_references"]:
            print(f"  ⚠️  {len(result['unupdatable_references'])} references could not be updated")
        
        return result
    
    def _create_backup(self) -> Optional[Path]:
        """Create backup of existing structure."""
        if self.dry_run:
            print("🔍 [DRY RUN] Would create backup...")
            return Path("/tmp/backup-dry-run")
        
        if not self.backup_dir:
            timestamp = datetime.now().strftime("%Y%m%d-%H%M%S")
            self.backup_dir = self.kanban_path.parent / f"_backup-{timestamp}"
        
        backup_path = Path(self.backup_dir)
        
        if backup_path.exists():
            if not self.force:
                response = input(f"⚠️  Backup directory exists: {backup_path}. Overwrite? (y/N): ")
                if response.lower() != 'y':
                    return None
            shutil.rmtree(backup_path)
        
        print(f"📦 Creating backup: {backup_path}")
        shutil.copytree(self.kanban_path, backup_path)
        
        self.migration_log.append({
            "type": "backup",
            "action": "created",
            "path": str(backup_path),
            "timestamp": datetime.now().isoformat()
        })
        
        return backup_path
    
    def _resolve_conflicts(self):
        """Resolve epic numbering conflicts."""
        conflicts = self.analysis_report.get("conflicts", [])
        epic_conflicts = [c for c in conflicts if c.get("type") == "epic_conflict_core"]
        
        if not epic_conflicts:
            return
        
        print(f"⚠️  Found {len(epic_conflicts)} epic conflicts. Resolving...")
        
        # For hybrid mode, we'll preserve project epics but renumber them
        # For migration mode, we'll renumber to avoid conflicts
        epic_mappings = self.analysis_report.get("epic_mappings", [])
        
        for epic_mapping in epic_mappings:
            if epic_mapping.get("is_canonical_core"):
                # This epic conflicts with canonical core - needs renumbering
                source_epic_num = epic_mapping["source_epic_number"]
                # Find next available epic number (starting from 24)
                target_epic_num = self._find_next_available_epic_number()
                epic_mapping["target_epic_number"] = target_epic_num
                
                self.migration_log.append({
                    "type": "conflict_resolution",
                    "action": "renumber",
                    "source_epic": source_epic_num,
                    "target_epic": target_epic_num,
                    "reason": "Conflicts with canonical core epic"
                })
    
    def _find_next_available_epic_number(self, start_from: Optional[int] = None) -> int:
        """Find next available epic number dynamically (not hardcoded to 24)."""
        existing_epics = set()
        for epic_mapping in self.analysis_report.get("epic_mappings", []):
            existing_epics.add(epic_mapping.get("target_epic_number") or epic_mapping["source_epic_number"])
        
        # Find the highest existing epic number
        max_epic = max(existing_epics) if existing_epics else 0
        
        # Canonical epics go up to 23, so start from max(max_epic + 1, 24)
        # But if user has epics beyond 23, start from their max + 1
        start_num = start_from or max(max_epic + 1, 24)
        
        for num in range(start_num, 1000):
            if num not in existing_epics:
                return num
        return 1000  # Fallback
    
    def _get_project_name(self) -> str:
        """Detect project name from repository root or kanban path."""
        # Try to get project name from repository root
        # Walk up from kanban_path to find repository root (look for .git or project root indicators)
        current = Path(self.kanban_path).resolve()
        max_depth = 10  # Prevent infinite loops
        depth = 0
        
        while depth < max_depth and current != current.parent:
            # Check if this looks like a project root (has .git, setup.py, package.json, etc.)
            if (current / ".git").exists() or (current / "setup.py").exists() or (current / "package.json").exists():
                # Use directory name as project name
                project_name = current.name
                # Clean up common suffixes
                project_name = project_name.replace("-dev-kit", "").replace("-kit", "")
                return project_name
            current = current.parent
            depth += 1
        
        # Fallback: try to infer from kanban path structure
        # If kanban_path is like "docs/project-management/kanban", try to get repo root
        if "KB" in str(self.kanban_path):
            # Try to find repo root by going up from KB
            kb_path = Path(self.kanban_path)
            while kb_path != kb_path.parent and kb_path.name != "KB":
                kb_path = kb_path.parent
            if kb_path.parent != kb_path:
                return kb_path.parent.name.replace("-dev-kit", "").replace("-kit", "")
        
        # Last resort: use a generic name
        return "Project"
    
    def _get_template_path(self) -> Path:
        """Get path to canonical epic templates directory."""
        # This script is in packages/frameworks/kanban/scripts/
        # Templates are in packages/frameworks/kanban/templates/epics/
        script_dir = Path(__file__).parent
        template_dir = script_dir.parent / "templates" / "epics"
        return template_dir
    
    def _get_epic_template_file(self, epic_num: int) -> Optional[Path]:
        """Get path to epic template file for given epic number."""
        template_dir = self._get_template_path()
        # Template files are named like "Epic-1-Project-Core.md", "Epic-2-Workflow-Management.md", etc.
        # Try to find matching template
        pattern = f"Epic-{epic_num}-*.md"
        matches = list(template_dir.glob(pattern))
        if matches:
            return matches[0]  # Return first match
        return None
    
    def _contextualize_template(self, content: str, project_name: str) -> str:
        """Replace placeholders in template content with project-specific values."""
        # Replace {PROJECT_NAME} placeholder
        content = content.replace("{PROJECT_NAME}", project_name)
        # Replace {project-slug} with slugified project name
        project_slug = project_name.lower().replace(" ", "-").replace("_", "-")
        content = content.replace("{project-slug}", project_slug)
        return content
    
    def _install_canonical_epics(self):
        """Install canonical core epics (1-8, 10, 18, 22, 23) from templates."""
        if self.mode == "hybrid":
            print("🔧 Hybrid mode: Installing canonical core epics alongside project epics...")
        elif self.mode == "canonical_adoption":
            print("🔧 Canonical adoption mode: Installing canonical core epics...")
        else:
            print("🔧 Installing canonical core epics from templates...")
        
        # Canonical core epics: 1-8, 10, 18, 22, 23
        canonical_core_epics = [1, 2, 3, 4, 5, 6, 7, 8, 10, 18, 22, 23]
        
        # Get project name for contextualization
        project_name = self._get_project_name()
        template_dir = self._get_template_path()
        
        if not template_dir.exists():
            print(f"  ⚠️  Warning: Template directory not found: {template_dir}")
            print(f"  ⚠️  Falling back to placeholder epic creation")
        
        for epic_num in canonical_core_epics:
            epic_dir = self.kanban_path / "epics" / f"Epic-{epic_num}"
            
            # In canonical_adoption mode, check if we should skip based on semantic matches
            if self.mode == "canonical_adoption":
                # Check if user epic semantically matches this canonical epic
                semantic_matches = self.analysis_report.get("semantic_matches", [])
                # Find best matching user epic (no threshold - process all matches)
                matching_user_epic = next(
                    (m for m in semantic_matches if m["canonical_epic_number"] == epic_num),
                    None
                )
                if matching_user_epic:
                    print(f"  ℹ️  Epic {epic_num} matches user Epic {matching_user_epic['user_epic_number']} "
                          f"({matching_user_epic['similarity_score']:.1f}% similarity). Will adopt canonical structure.")
            
            if epic_dir.exists() and self.mode != "fresh":
                print(f"  ⚠️  Epic {epic_num} already exists, skipping...")
                continue
            
            # Try to get template file
            template_file = self._get_epic_template_file(epic_num)
            template_used = False
            
            if not self.dry_run:
                epic_dir.mkdir(parents=True, exist_ok=True)
                epic_doc = epic_dir / f"Epic-{epic_num}.md"
                
                # Try to copy from template
                if template_file and template_file.exists():
                    # Read template content
                    template_content = template_file.read_text(encoding='utf-8')
                    # Contextualize (especially important for Epic 1)
                    contextualized_content = self._contextualize_template(template_content, project_name)
                    # Write to epic directory
                    epic_doc.write_text(contextualized_content, encoding='utf-8')
                    template_used = True
                    print(f"  ✅ Epic {epic_num} installed from template: {template_file.name}")
                else:
                    # Fallback: create placeholder if template not found
                    if not epic_doc.exists():
                        epic_doc.write_text(
                            f"# Epic {epic_num}: [Canonical Epic]\n\n"
                            f"*This epic was installed from canonical framework.*\n"
                            f"*Template file not found: Epic-{epic_num}-*.md*\n"
                        )
                        print(f"  ⚠️  Epic {epic_num} created with placeholder (template not found)")
            
            self.migration_log.append({
                "type": "epic",
                "action": "installed",
                "epic_number": epic_num,
                "path": str(epic_dir.relative_to(self.kanban_path)),
                "source": "canonical_template" if template_used else "canonical_framework"
            })
    
    def _adopt_canonical_structure(self):
        """Adopt canonical structure by intelligently mapping user epics/tasks to canonical epics."""
        print("🎯 Adopting canonical structure with intelligent task mapping...")
        
        semantic_matches = self.analysis_report.get("semantic_matches", [])
        epic_mappings = self.analysis_report.get("epic_mappings", [])
        
        # Map user epics to canonical epics based on semantic matches
        # NOTE: Threshold removed per BR-008/FR-010. All semantic matches are processed.
        # Full agentic intelligence (T06) will provide context-aware decision making.
        for match in semantic_matches:
            user_epic_num = match["user_epic_number"]
            canonical_epic_num = match["canonical_epic_number"]
            similarity_score = match.get("similarity_score", 0)
            match_type = match.get("match_type", "unknown")
            
            print(f"  📍 Mapping Epic {user_epic_num} → Canonical Epic {canonical_epic_num} "
                  f"({similarity_score:.1f}% similarity, {match_type})")
            
            # Update epic mapping to point to canonical epic
            epic_mapping = next(
                (e for e in epic_mappings if e["source_epic_number"] == user_epic_num),
                None
            )
            if epic_mapping:
                epic_mapping["target_epic_number"] = canonical_epic_num
                epic_mapping["migration_action"] = "adopt_canonical_structure"
                
                # Map stories and tasks from user epic to canonical epic
                self._map_tasks_to_canonical_epic(user_epic_num, canonical_epic_num)
        
        # For epics without high similarity matches, install at next available number
        unmatched_epics = [
            e for e in epic_mappings
            if e.get("migration_action") != "adopt_canonical_structure"
            and not e.get("is_canonical")
        ]
        
        for epic_mapping in unmatched_epics:
            source_epic_num = epic_mapping["source_epic_number"]
            # Find next available epic number after canonical range
            target_epic_num = self._find_next_available_epic_number(start_from=24)
            epic_mapping["target_epic_number"] = target_epic_num
            self._renumber_epic(source_epic_num, target_epic_num)
    
    def _map_tasks_to_canonical_epic(self, user_epic_num: int, canonical_epic_num: int):
        """Map tasks from user epic to canonical epic using agentic intelligence."""
        print(f"  🤖 Using agentic intelligence to map tasks from Epic {user_epic_num} to Canonical Epic {canonical_epic_num}...")
        
        # Use agentic mapper for intelligent task mapping
        try:
            mapper = AgenticTaskMapper(
                self.analysis_report,
                self.kanban_path,
                llm_provider=None  # Currently using enhanced content analysis, LLM integration pending
            )
            
            # Get intelligent mappings
            agentic_mappings = mapper.map_tasks_to_canonical_stories()
            explanations = mapper.generate_explanations()
            
            # Filter mappings for this epic
            epic_mappings = [m for m in agentic_mappings if m.get("source_epic") == user_epic_num]
            
            if epic_mappings:
                print(f"    ✅ Mapped {len(epic_mappings)} tasks using agentic intelligence")
                for mapping in epic_mappings[:3]:  # Show first 3
                    print(f"       {mapping.get('reasoning', 'No reasoning')}")
                if len(epic_mappings) > 3:
                    print(f"       ... and {len(epic_mappings) - 3} more mappings")
                
                # Update task mappings based on agentic analysis
                task_mappings = self.analysis_report.get("task_mappings", [])
                for agentic_mapping in epic_mappings:
                    # Find corresponding task mapping
                    for task_mapping in task_mappings:
                        if (task_mapping.get("source_epic_number") == agentic_mapping.get("source_epic") and
                            task_mapping.get("source_story_number") == agentic_mapping.get("source_story") and
                            task_mapping.get("source_task_number") == agentic_mapping.get("source_task")):
                            # Update with agentic mapping
                            task_mapping["target_epic_number"] = agentic_mapping.get("target_epic")
                            task_mapping["target_story_number"] = agentic_mapping.get("target_story")
                            task_mapping["migration_action"] = "agentic_mapping"
                            task_mapping["agentic_reasoning"] = agentic_mapping.get("reasoning")
                            task_mapping["agentic_confidence"] = agentic_mapping.get("confidence", 0.0)
                            break
            else:
                # Fallback to simple epic renumbering if no agentic mappings
                print(f"    ⚠️  No agentic mappings found - using simple epic renumbering")
                task_mappings = self.analysis_report.get("task_mappings", [])
                story_mappings = self.analysis_report.get("story_mappings", [])
                
                # Update story mappings
                for story_mapping in story_mappings:
                    if story_mapping["source_epic_number"] == user_epic_num:
                        story_mapping["target_epic_number"] = canonical_epic_num
                
                # Update task mappings
                for task_mapping in task_mappings:
                    if task_mapping["source_epic_number"] == user_epic_num:
                        task_mapping["target_epic_number"] = canonical_epic_num
        
        except Exception as e:
            print(f"    ⚠️  Agentic mapping failed: {e} - falling back to simple mapping")
            # Fallback to simple mapping
            task_mappings = self.analysis_report.get("task_mappings", [])
            story_mappings = self.analysis_report.get("story_mappings", [])
            
            # Update story mappings
            for story_mapping in story_mappings:
                if story_mapping["source_epic_number"] == user_epic_num:
                    story_mapping["target_epic_number"] = canonical_epic_num
            
            # Update task mappings
            for task_mapping in task_mappings:
                if task_mapping["source_epic_number"] == user_epic_num:
                    task_mapping["target_epic_number"] = canonical_epic_num
    
    def _migrate_project_epics(self):
        """Migrate project-specific epics to canonical format."""
        print("🔄 Migrating project epics...")
        
        epic_mappings = self.analysis_report.get("epic_mappings", [])
        project_epics = [e for e in epic_mappings if not e.get("is_canonical")]
        
        for epic_mapping in project_epics:
            source_epic_num = epic_mapping["source_epic_number"]
            target_epic_num = epic_mapping.get("target_epic_number") or source_epic_num
            
            if source_epic_num == target_epic_num:
                # No renumbering needed, just ensure format is canonical
                self._ensure_epic_format_canonical(source_epic_num)
            else:
                # Renumber epic
                self._renumber_epic(source_epic_num, target_epic_num)
    
    def _ensure_epic_format_canonical(self, epic_num: int):
        """Ensure epic document follows canonical format."""
        epic_dir = self.kanban_path / "epics" / f"Epic-{epic_num}"
        epic_doc = epic_dir / f"Epic-{epic_num}.md"
        
        if not epic_doc.exists():
            if not self.dry_run:
                epic_doc.write_text(f"# Epic {epic_num}: [Project Epic]\n\n*Migrated from existing structure.*\n")
            
            self.migration_log.append({
                "type": "epic",
                "action": "created",
                "epic_number": epic_num,
                "path": str(epic_doc.relative_to(self.kanban_path)),
                "reason": "Missing epic document"
            })
    
    def _renumber_epic(self, source_epic_num: int, target_epic_num: int):
        """Renumber an epic and update all references."""
        if self.dry_run:
            print(f"  🔍 [DRY RUN] Would renumber Epic {source_epic_num} → Epic {target_epic_num}")
            return
        
        source_dir = self.kanban_path / "epics" / f"Epic-{source_epic_num}"
        target_dir = self.kanban_path / "epics" / f"Epic-{target_epic_num}"
        
        if not source_dir.exists():
            return
        
        # Move directory
        if target_dir.exists():
            print(f"  ⚠️  Target epic directory exists: {target_dir}. Skipping renumber...")
            return
        
        shutil.move(str(source_dir), str(target_dir))
        
        # Update epic document name
        old_epic_doc = target_dir / f"Epic-{source_epic_num}.md"
        new_epic_doc = target_dir / f"Epic-{target_epic_num}.md"
        if old_epic_doc.exists():
            shutil.move(str(old_epic_doc), str(new_epic_doc))
            # Update epic number in document content
            content = new_epic_doc.read_text(encoding='utf-8')
            content = content.replace(f"Epic {source_epic_num}", f"Epic {target_epic_num}")
            content = re.sub(r'Epic-{}\.md'.format(source_epic_num), f'Epic-{target_epic_num}.md', content)
            new_epic_doc.write_text(content, encoding='utf-8')
        
        # Update story files
        for story_file in target_dir.glob("Story-*.md"):
            content = story_file.read_text(encoding='utf-8')
            # Update epic references in story content
            content = re.sub(rf'E{source_epic_num}:S(\d+):T(\d+)', rf'E{target_epic_num}:S\1:T\2', content)
            content = re.sub(rf'Epic {source_epic_num}', f'Epic {target_epic_num}', content)
            story_file.write_text(content, encoding='utf-8')
        
        self.migration_log.append({
            "type": "epic",
            "action": "renumbered",
            "source_epic": source_epic_num,
            "target_epic": target_epic_num,
            "path": str(target_dir.relative_to(self.kanban_path))
        })
    
    def _migrate_stories(self):
        """Migrate stories to canonical format."""
        print("🔄 Migrating stories...")
        
        story_mappings = self.analysis_report.get("story_mappings", [])
        
        for story_mapping in story_mappings:
            source_epic = story_mapping["source_epic_number"]
            target_epic = story_mapping.get("target_epic_number") or source_epic
            story_num = story_mapping["source_story_number"]
            story_file = Path(story_mapping["source_story_file"])
            
            # Update epic references in story if needed
            if source_epic != target_epic:
                if not self.dry_run:
                    full_path = self.kanban_path / story_file
                    if full_path.exists():
                        content = full_path.read_text(encoding='utf-8')
                        content = re.sub(rf'E{source_epic}:S{story_num}:T(\d+)', rf'E{target_epic}:S{story_num}:T\1', content)
                        content = re.sub(rf'Epic {source_epic}', f'Epic {target_epic}', content)
                        full_path.write_text(content, encoding='utf-8')
            
            # Ensure story follows canonical format
            self._ensure_story_format_canonical(target_epic, story_num, story_file)
            
            self.migration_log.append({
                "type": "story",
                "action": "migrated",
                "epic_number": target_epic,
                "story_number": story_num,
                "path": str(story_file)
            })
    
    def _ensure_story_format_canonical(self, epic_num: int, story_num: int, story_file: Path):
        """Ensure story document follows canonical format."""
        # In real implementation, would validate/update story format
        # For now, just log
        pass
    
    def _migrate_tasks(self):
        """Migrate tasks to canonical format."""
        print("🔄 Migrating tasks...")
        
        task_mappings = self.analysis_report.get("task_mappings", [])
        
        for task_mapping in task_mappings:
            source_epic = task_mapping["source_epic_number"]
            target_epic = task_mapping.get("target_epic_number") or source_epic
            source_story = task_mapping["source_story_number"]
            target_story = task_mapping.get("target_story_number") or source_story
            task_num = task_mapping["source_task_number"]
            
            # Update task references if epic/story changed
            if source_epic != target_epic or source_story != target_story:
                # Find story file and update task references
                story_mappings = self.analysis_report.get("story_mappings", [])
                story_mapping = next(
                    (s for s in story_mappings 
                     if s["source_epic_number"] == source_epic 
                     and s["source_story_number"] == source_story),
                    None
                )
                
                if story_mapping and not self.dry_run:
                    story_file = self.kanban_path / story_mapping["source_story_file"]
                    if story_file.exists():
                        content = story_file.read_text(encoding='utf-8')
                        # Update task reference format
                        old_pattern = rf'E{source_epic}:S{source_story}:T{task_num}'
                        new_pattern = f'E{target_epic}:S{target_story}:T{task_num}'
                        content = content.replace(old_pattern, new_pattern)
                        story_file.write_text(content, encoding='utf-8')
            
            # Ensure task format is canonical (EXX:SXX:TXX)
            if task_mapping.get("requires_format_conversion"):
                self._convert_task_format(target_epic, target_story, task_num, task_mapping)
            
            self.migration_log.append({
                "type": "task",
                "action": "migrated",
                "epic_number": target_epic,
                "story_number": target_story,
                "task_number": task_num
            })
    
    def _convert_task_format(self, epic_num: int, story_num: int, task_num: int, task_mapping: Dict):
        """Convert task format to canonical EXX:SXX:TXX format."""
        # In real implementation, would update task references in story files
        # For now, just log
        pass
    
    def _validate_migration(self) -> Dict:
        """Validate migrated structure."""
        print("✅ Validating migration...")
        
        issues = []
        
        # Check that all epics have documents
        epic_mappings = self.analysis_report.get("epic_mappings", [])
        for epic_mapping in epic_mappings:
            target_epic = epic_mapping.get("target_epic_number") or epic_mapping["source_epic_number"]
            epic_dir = self.kanban_path / "epics" / f"Epic-{target_epic}"
            epic_doc = epic_dir / f"Epic-{target_epic}.md"
            
            if not epic_doc.exists():
                issues.append({
                    "type": "missing_epic_document",
                    "epic_number": target_epic,
                    "severity": "medium"
                })
        
        return {
            "valid": len(issues) == 0,
            "issues": issues,
            "issues_count": len(issues)
        }


def main():
    parser = argparse.ArgumentParser(
        description="Migrate existing Kanban structures to canonical format"
    )
    parser.add_argument(
        "--analysis-report",
        type=str,
        default="analysis_report.json",
        help="Path to analysis report JSON (default: analysis_report.json)"
    )
    parser.add_argument(
        "--mode",
        choices=["fresh", "migration", "update", "hybrid", "canonical_adoption", "auto"],
        default="auto",
        help="Installation mode (default: auto-detect from analysis report)"
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Preview changes without modifying files"
    )
    parser.add_argument(
        "--backup-dir",
        type=str,
        help="Directory for backups (default: auto-generated)"
    )
    parser.add_argument(
        "--kanban-path",
        type=str,
        default="docs/project-management/kanban",
        help="Path to Kanban directory (default: docs/project-management/kanban)"
    )
    parser.add_argument(
        "--force",
        action="store_true",
        help="Skip confirmation prompts"
    )
    
    args = parser.parse_args()
    
    # Load analysis report
    analysis_path = Path(args.analysis_report)
    if not analysis_path.exists():
        print(f"❌ Error: Analysis report not found: {analysis_path}")
        return 1
    
    with open(analysis_path, 'r', encoding='utf-8') as f:
        analysis_report = json.load(f)
    
    kanban_path = Path(args.kanban_path).resolve()
    backup_dir = Path(args.backup_dir) if args.backup_dir else None
    
    if args.dry_run:
        print("🔍 DRY RUN MODE - No files will be modified\n")
    
    print(f"📁 Kanban path: {kanban_path}")
    print(f"📋 Analysis report: {analysis_path}")
    print(f"🔧 Mode: {args.mode}\n")
    
    migrator = KanbanStructureMigrator(
        analysis_report=analysis_report,
        kanban_path=kanban_path,
        mode=args.mode,
        backup_dir=backup_dir,
        dry_run=args.dry_run,
        force=args.force
    )
    
    migration_report = migrator.migrate()
    
    # Print summary
    print(f"\n{'='*60}")
    print("Migration Report Summary")
    print(f"{'='*60}")
    print(f"Status: {migration_report['status']}")
    if migration_report['status'].startswith('completed'):
        summary = migration_report['summary']
        print(f"Epics migrated: {summary['epics_migrated']}")
        print(f"Stories migrated: {summary['stories_migrated']}")
        print(f"Tasks migrated: {summary['tasks_migrated']}")
        print(f"Files created: {summary['files_created']}")
        print(f"Files updated: {summary['files_updated']}")
        
        if migration_report.get('backup_path'):
            print(f"\n📦 Backup created: {migration_report['backup_path']}")
        
        validation = migration_report.get('validation', {})
        if not validation.get('valid'):
            print(f"\n⚠️  Validation found {validation.get('issues_count', 0)} issues. Review migration log.")
    else:
        print(f"Error: {migration_report.get('message')}")
    
    print(f"{'='*60}\n")
    
    return 0 if migration_report['status'].startswith('completed') else 1


if __name__ == "__main__":
    exit(main())


def install_canonical_epics_only(
    kanban_path: Path,
    dry_run: bool = False,
    force: bool = False,
) -> Dict:
    """
    Install canonical core epics into the given Kanban path without performing a full migration.

    This helper is intended for **fresh installs** in consumer projects. It:
    - Instantiates a KanbanStructureMigrator with a minimal \"analyzed\" report
    - Skips backup creation and conflict resolution
    - Invokes the canonical epic installation routine directly

    Returns a summary dictionary:
    - status: \"completed\"
    - epics_installed: number of canonical epics installed
    - files_created: number of epic entries recorded in the migration log
    - kanban_path: string path to the Kanban root
    """
    kanban_path = Path(kanban_path)
    if not dry_run:
        kanban_path.mkdir(parents=True, exist_ok=True)

    # Minimal analysis report sufficient for fresh installation
    analysis_report: Dict = {
        "status": "analyzed",
        "migration_plan": {},
        "epic_mappings": [],
        "story_mappings": [],
        "task_mappings": [],
    }

    migrator = KanbanStructureMigrator(
        analysis_report=analysis_report,
        kanban_path=kanban_path,
        mode="fresh",
        backup_dir=None,
        dry_run=dry_run,
        force=force,
    )

    # Directly install canonical epics without full migrate() pipeline
    migrator._install_canonical_epics()

    epics_installed = len([e for e in migrator.migration_log if e.get("type") == "epic"])
    files_created = len([e for e in migrator.migration_log if e.get("action") == "installed"])

    return {
        "status": "completed",
        "epics_installed": epics_installed,
        "files_created": files_created,
        "kanban_path": str(kanban_path),
    }

