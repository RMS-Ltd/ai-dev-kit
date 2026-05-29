#!/usr/bin/env python3
"""
Reference Updater for Task ID References

Updates task ID references in changelogs, documentation, and story files
based on task mapping changes during migration.

Part of Epic 4, Story 8, Task 4 (FR-009): Automatic reference updating.

Usage:
    from reference_updater import ReferenceUpdater
    
    updater = ReferenceUpdater(task_mappings)
    updater.update_references(project_root)
"""

import re
from pathlib import Path
from typing import Dict, List, Optional, Tuple


class ReferenceUpdater:
    """Updates task ID references in project files."""
    
    # Pattern to match task IDs: E{epic}:S{story}:T{task}
    TASK_ID_PATTERN = re.compile(r'\bE(\d+):S(\d+):T(\d+)\b')
    
    def __init__(self, task_mappings: List[Dict]):
        """
        Initialize with task mappings from analysis report.
        
        task_mappings should contain:
        - source_epic_number, source_story_number, source_task_number
        - target_epic_number, target_story_number, target_task_number
        """
        self.task_mappings = task_mappings
        self.reference_map = self._build_reference_map()
        self.updated_files: List[Dict] = []
        self.unupdatable_references: List[Dict] = []
    
    def _build_reference_map(self) -> Dict[Tuple[int, int, int], Tuple[int, int, int]]:
        """Build mapping from old task IDs to new task IDs."""
        ref_map = {}
        
        for mapping in self.task_mappings:
            old_id = (
                mapping["source_epic_number"],
                mapping["source_story_number"],
                mapping["source_task_number"]
            )
            new_id = (
                mapping.get("target_epic_number") or mapping["source_epic_number"],
                mapping.get("target_story_number") or mapping["source_story_number"],
                mapping.get("target_task_number") or mapping["source_task_number"]
            )
            
            if old_id != new_id:
                ref_map[old_id] = new_id
        
        return ref_map
    
    def update_references(self, project_root: Path) -> Dict:
        """
        Update all task ID references in the project.
        
        Returns:
            {
                "files_updated": int,
                "references_updated": int,
                "unupdatable_references": List[Dict],
                "updated_files": List[Dict]
            }
        """
        project_root = Path(project_root)
        
        # Files to search for task ID references
        search_paths = [
            project_root / "CHANGELOG.md",
            project_root / "README.md",
            project_root / "KB",
            project_root / "docs",
            project_root / "documentation"
        ]
        
        total_references = 0
        
        for search_path in search_paths:
            if not search_path.exists():
                continue
            
            if search_path.is_file():
                refs_updated = self._update_file_references(search_path)
                total_references += refs_updated
            elif search_path.is_dir():
                refs_updated = self._update_directory_references(search_path)
                total_references += refs_updated
        
        return {
            "files_updated": len(self.updated_files),
            "references_updated": total_references,
            "unupdatable_references": self.unupdatable_references,
            "updated_files": self.updated_files
        }
    
    def _update_directory_references(self, directory: Path) -> int:
        """Update references in all files in a directory."""
        total_refs = 0
        
        # Search for markdown files and common documentation files
        for file_path in directory.rglob("*.md"):
            refs = self._update_file_references(file_path)
            total_refs += refs
        
        return total_refs
    
    def _update_file_references(self, file_path: Path) -> int:
        """Update task ID references in a single file."""
        if not file_path.exists():
            return 0
        
        try:
            content = file_path.read_text(encoding='utf-8')
            original_content = content
            references_updated = 0
            
            # Find all task ID references
            matches = list(self.TASK_ID_PATTERN.finditer(content))
            
            for match in matches:
                epic_num = int(match.group(1))
                story_num = int(match.group(2))
                task_num = int(match.group(3))
                
                old_id = (epic_num, story_num, task_num)
                
                if old_id in self.reference_map:
                    new_id = self.reference_map[old_id]
                    new_ref = f"E{new_id[0]}:S{new_id[1]}:T{new_id[2]}"
                    content = content[:match.start()] + new_ref + content[match.end():]
                    references_updated += 1
                else:
                    # Reference not in mapping - might be unupdatable
                    self.unupdatable_references.append({
                        "file": str(file_path),
                        "line": content[:match.start()].count('\n') + 1,
                        "old_reference": match.group(0),
                        "reason": "Task ID not found in migration mapping"
                    })
            
            # Write updated content if changes were made
            if content != original_content:
                file_path.write_text(content, encoding='utf-8')
                self.updated_files.append({
                    "file": str(file_path),
                    "references_updated": references_updated
                })
            
            return references_updated
        
        except Exception as e:
            self.unupdatable_references.append({
                "file": str(file_path),
                "reason": f"Error updating file: {e}"
            })
            return 0
    
    def generate_migration_report(self) -> Dict:
        """Generate a report of all reference updates."""
        return {
            "summary": {
                "files_updated": len(self.updated_files),
                "total_references_updated": sum(
                    f["references_updated"] for f in self.updated_files
                ),
                "unupdatable_references": len(self.unupdatable_references)
            },
            "updated_files": self.updated_files,
            "unupdatable_references": self.unupdatable_references,
            "reference_mappings": {
                f"E{old[0]}:S{old[1]}:T{old[2]}": f"E{new[0]}:S{new[1]}:T{new[2]}"
                for old, new in self.reference_map.items()
            }
        }


if __name__ == "__main__":
    # Test reference updater
    test_mappings = [
        {
            "source_epic_number": 1,
            "source_story_number": 1,
            "source_task_number": 1,
            "target_epic_number": 8,
            "target_story_number": 1,
            "target_task_number": 1
        }
    ]
    
    updater = ReferenceUpdater(test_mappings)
    print(f"Reference map: {updater.reference_map}")

