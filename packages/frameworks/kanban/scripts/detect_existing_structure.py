#!/usr/bin/env python3
"""
Detection Utility for Existing Kanban Structures

Scans a project directory to detect existing Kanban (Epic/Story/Task) structures
and generates a detection report.

Part of Epic 4, Story 7, Task 1 (BR-006): Detection/analysis utilities for existing structures.

Usage:
    python3 detect_existing_structure.py [--kanban-path PATH] [--output OUTPUT_FILE]

Arguments:
    --kanban-path PATH    Path to Kanban directory (default: docs/project-management/kanban)
    --output OUTPUT_FILE  Output file for detection report (default: detection_report.json)
    --verbose             Enable verbose output
"""

import argparse
import json
import os
import re
from pathlib import Path
from typing import Dict, List, Optional, Set
from datetime import datetime


class KanbanStructureDetector:
    """Detects existing Kanban structures in a project."""
    
    def __init__(self, kanban_path: Path, verbose: bool = False):
        self.kanban_path = Path(kanban_path)
        self.verbose = verbose
        self.epics: List[Dict] = []
        self.stories: List[Dict] = []
        self.tasks: List[Dict] = []
        self.conflicts: List[Dict] = []
        
    def detect(self) -> Dict:
        """Main detection method. Returns detection report."""
        if not self.kanban_path.exists():
            return {
                "status": "no_structure",
                "message": f"Kanban path not found: {self.kanban_path}",
                "epics": [],
                "stories": [],
                "tasks": [],
                "conflicts": []
            }
        
        self._detect_epics()
        self._detect_stories()
        self._detect_tasks()
        self._identify_conflicts()
        
        return {
            "status": "detected",
            "detection_date": datetime.now().isoformat(),
            "kanban_path": str(self.kanban_path),
            "epics": self.epics,
            "stories": self.stories,
            "tasks": self.tasks,
            "conflicts": self.conflicts,
            "summary": {
                "epic_count": len(self.epics),
                "story_count": len(self.stories),
                "task_count": len(self.tasks),
                "conflict_count": len(self.conflicts)
            }
        }
    
    def _detect_epics(self):
        """Detect epic directories and documents."""
        epics_dir = self.kanban_path / "epics"
        
        if not epics_dir.exists():
            if self.verbose:
                print(f"Epics directory not found: {epics_dir}")
            return
        
        # Look for Epic-X directories
        epic_pattern = re.compile(r'^Epic-(\d+)(?:-.*)?$', re.IGNORECASE)
        
        for item in epics_dir.iterdir():
            if not item.is_dir():
                continue
                
            match = epic_pattern.match(item.name)
            if match:
                epic_num = int(match.group(1))
                epic_doc = self._find_epic_document(item, epic_num)
                
                epic_info = {
                    "epic_number": epic_num,
                    "directory": str(item.relative_to(self.kanban_path)),
                    "epic_document": epic_doc,
                    "stories_found": 0,
                    "tasks_found": 0
                }
                
                self.epics.append(epic_info)
                
                if self.verbose:
                    print(f"Detected Epic {epic_num}: {item.name}")
    
    def _find_epic_document(self, epic_dir: Path, epic_num: int) -> Optional[str]:
        """Find the epic document in an epic directory."""
        # Look for Epic-X.md or Epic-X-*.md
        patterns = [
            f"Epic-{epic_num}.md",
            f"Epic-{epic_num}-*.md"
        ]
        
        for pattern in patterns:
            matches = list(epic_dir.glob(pattern))
            if matches:
                return str(matches[0].relative_to(self.kanban_path))
        
        return None
    
    def _detect_stories(self):
        """Detect story documents within epic directories."""
        for epic in self.epics:
            epic_dir = self.kanban_path / epic["directory"]
            
            # Look for Story-XXX-*.md files
            story_pattern = re.compile(r'^Story-(\d+)(?:-.*)?\.md$', re.IGNORECASE)
            
            for item in epic_dir.iterdir():
                if not item.is_file() or not item.suffix == '.md':
                    continue
                
                match = story_pattern.match(item.name)
                if match:
                    story_num = int(match.group(1))
                    
                    story_info = {
                        "epic_number": epic["epic_number"],
                        "story_number": story_num,
                        "file": str(item.relative_to(self.kanban_path)),
                        "tasks_found": 0
                    }
                    
                    self.stories.append(story_info)
                    epic["stories_found"] += 1
                    
                    if self.verbose:
                        print(f"  Detected Story {story_num} in Epic {epic['epic_number']}")
    
    def _detect_tasks(self):
        """Detect task files and task references in stories."""
        for story in self.stories:
            story_path = self.kanban_path / story["file"]
            
            if not story_path.exists():
                continue
            
            # Read story file to find task references
            try:
                content = story_path.read_text(encoding='utf-8')
                
                # Look for task patterns: EXX:SXX:TXX or TXX or Task XX
                task_patterns = [
                    r'E(\d+):S(\d+):T(\d+)',  # Full format
                    r'T(\d+)',  # Short format (assumes current epic/story)
                    r'Task\s+(\d+)',  # Text format
                ]
                
                found_tasks = set()
                for pattern in task_patterns:
                    matches = re.finditer(pattern, content, re.IGNORECASE)
                    for match in matches:
                        if len(match.groups()) == 3:
                            # Full format
                            task_info = {
                                "epic_number": int(match.group(1)),
                                "story_number": int(match.group(2)),
                                "task_number": int(match.group(3)),
                                "format": "full"
                            }
                        else:
                            # Short format - assume current epic/story
                            task_info = {
                                "epic_number": story["epic_number"],
                                "story_number": story["story_number"],
                                "task_number": int(match.group(1)),
                                "format": "short"
                            }
                        
                        task_key = f"{task_info['epic_number']}:{task_info['story_number']}:{task_info['task_number']}"
                        if task_key not in found_tasks:
                            found_tasks.add(task_key)
                            task_info["story_file"] = story["file"]
                            self.tasks.append(task_info)
                            story["tasks_found"] += 1
                
                # Also look for task files in story subdirectories
                story_dir = story_path.parent
                task_file_pattern = re.compile(r'^T(\d+)(?:-.*)?\.md$', re.IGNORECASE)
                
                for item in story_dir.iterdir():
                    if item.is_dir() and item.name.startswith("Story-"):
                        # Look for task files in story subdirectory
                        for task_file in item.glob("T*.md"):
                            match = task_file_pattern.match(task_file.name)
                            if match:
                                task_num = int(match.group(1))
                                task_info = {
                                    "epic_number": story["epic_number"],
                                    "story_number": story["story_number"],
                                    "task_number": task_num,
                                    "format": "file",
                                    "file": str(task_file.relative_to(self.kanban_path)),
                                    "story_file": story["file"]
                                }
                                task_key = f"{task_info['epic_number']}:{task_info['story_number']}:{task_info['task_number']}"
                                if task_key not in found_tasks:
                                    found_tasks.add(task_key)
                                    self.tasks.append(task_info)
                                    story["tasks_found"] += 1
                                
            except Exception as e:
                if self.verbose:
                    print(f"Error reading story {story['file']}: {e}")
    
    def _identify_conflicts(self):
        """Identify potential conflicts with canonical framework epics."""
        # Canonical framework epics (1-8 are core, 9-21+ are ancillary)
        canonical_core_epics = set(range(1, 9))
        canonical_ancillary_epics = set(range(9, 22))
        
        detected_epic_numbers = {epic["epic_number"] for epic in self.epics}
        
        # Check for conflicts with core epics
        core_conflicts = detected_epic_numbers & canonical_core_epics
        if core_conflicts:
            self.conflicts.append({
                "type": "core_epic_conflict",
                "severity": "high",
                "message": f"Detected epics conflict with canonical core epics: {sorted(core_conflicts)}",
                "epic_numbers": sorted(core_conflicts),
                "recommendation": "Consider renumbering project epics or using hybrid installation mode"
            })
        
        # Check for missing epic documents
        for epic in self.epics:
            if not epic["epic_document"]:
                self.conflicts.append({
                    "type": "missing_epic_document",
                    "severity": "medium",
                    "message": f"Epic {epic['epic_number']} directory found but no epic document detected",
                    "epic_number": epic["epic_number"],
                    "directory": epic["directory"]
                })
        
        # Check for duplicate epic numbers
        epic_numbers = [epic["epic_number"] for epic in self.epics]
        duplicates = [num for num in epic_numbers if epic_numbers.count(num) > 1]
        if duplicates:
            self.conflicts.append({
                "type": "duplicate_epic_numbers",
                "severity": "high",
                "message": f"Duplicate epic numbers detected: {sorted(set(duplicates))}",
                "epic_numbers": sorted(set(duplicates))
            })


def main():
    parser = argparse.ArgumentParser(
        description="Detect existing Kanban structures in a project"
    )
    parser.add_argument(
        "--kanban-path",
        type=str,
        default="docs/project-management/kanban",
        help="Path to Kanban directory (default: docs/project-management/kanban)"
    )
    parser.add_argument(
        "--output",
        type=str,
        default="detection_report.json",
        help="Output file for detection report (default: detection_report.json)"
    )
    parser.add_argument(
        "--verbose",
        action="store_true",
        help="Enable verbose output"
    )
    
    args = parser.parse_args()
    
    # Resolve kanban path relative to current working directory
    kanban_path = Path(args.kanban_path).resolve()
    
    if args.verbose:
        print(f"Scanning for Kanban structures in: {kanban_path}")
    
    detector = KanbanStructureDetector(kanban_path, verbose=args.verbose)
    report = detector.detect()
    
    # Write report to file
    output_path = Path(args.output)
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(report, f, indent=2, ensure_ascii=False)
    
    # Print summary
    print(f"\n{'='*60}")
    print("Detection Report Summary")
    print(f"{'='*60}")
    print(f"Status: {report['status']}")
    if report['status'] == 'detected':
        summary = report['summary']
        print(f"Epics found: {summary['epic_count']}")
        print(f"Stories found: {summary['story_count']}")
        print(f"Tasks found: {summary['task_count']}")
        print(f"Conflicts identified: {summary['conflict_count']}")
        
        if summary['conflict_count'] > 0:
            print(f"\n⚠️  Conflicts detected! Review report for details.")
    print(f"\nFull report written to: {output_path}")
    print(f"{'='*60}\n")
    
    return 0 if report['status'] == 'detected' or report['status'] == 'no_structure' else 1


if __name__ == "__main__":
    exit(main())

