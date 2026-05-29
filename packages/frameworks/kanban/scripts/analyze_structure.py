#!/usr/bin/env python3
"""
Analysis Utility for Existing Kanban Structures

Analyzes detected Kanban structures and maps them to canonical E/S/T format,
identifying conflicts and generating migration plans.

Part of Epic 4, Story 7, Task 1 (BR-006): Detection/analysis utilities for existing structures.

Usage:
    python3 analyze_structure.py [--detection-report REPORT] [--output OUTPUT_FILE]

Arguments:
    --detection-report REPORT  Path to detection report JSON (default: detection_report.json)
    --output OUTPUT_FILE       Output file for analysis report (default: analysis_report.json)
    --verbose                  Enable verbose output
"""

import argparse
import json
import sys
from pathlib import Path
from typing import Dict, List, Optional, Set, Tuple
from datetime import datetime

# Import semantic matcher from same directory
sys.path.insert(0, str(Path(__file__).parent))
from semantic_matcher import SemanticMatcher, load_canonical_epic_definitions


class KanbanStructureAnalyzer:
    """Analyzes detected Kanban structures and generates migration plan."""
    
    # Canonical framework epics
    CANONICAL_CORE_EPICS = set(range(1, 9))  # Epics 1-8 are core
    CANONICAL_ANCILLARY_EPICS = set(range(9, 22))  # Epics 9-21 are ancillary
    CANONICAL_CORE_PLUS_EPICS = {10, 18, 22, 23}  # Core+ recommended epics
    
    def __init__(self, detection_report: Dict, verbose: bool = False, framework_path: Optional[Path] = None):
        self.detection_report = detection_report
        self.verbose = verbose
        self.framework_path = framework_path or Path(__file__).parent.parent
        self.semantic_matcher = SemanticMatcher()
        self.canonical_epics = load_canonical_epic_definitions(self.framework_path)
        self.epic_mappings: List[Dict] = []
        self.story_mappings: List[Dict] = []
        self.task_mappings: List[Dict] = []
        self.conflicts: List[Dict] = []
        self.gaps: List[Dict] = []
        self.migration_plan: Dict = {}
        self.semantic_matches: List[Dict] = []
        
    def analyze(self) -> Dict:
        """Main analysis method. Returns analysis report."""
        if self.detection_report.get("status") != "detected":
            return {
                "status": "no_structure_to_analyze",
                "message": "No Kanban structure detected. Cannot analyze.",
                "detection_status": self.detection_report.get("status")
            }
        
        self._analyze_epics()
        self._analyze_stories()
        self._analyze_tasks()
        self._identify_gaps()
        self._generate_migration_plan()
        
        return {
            "status": "analyzed",
            "analysis_date": datetime.now().isoformat(),
            "epic_mappings": self.epic_mappings,
            "story_mappings": self.story_mappings,
            "task_mappings": self.task_mappings,
            "conflicts": self.conflicts,
            "gaps": self.gaps,
            "semantic_matches": self.semantic_matches,
            "migration_plan": self.migration_plan,
            "summary": {
                "epics_to_migrate": len(self.epic_mappings),
                "stories_to_migrate": len(self.story_mappings),
                "tasks_to_migrate": len(self.task_mappings),
                "conflict_count": len(self.conflicts),
                "gap_count": len(self.gaps),
                "semantic_match_count": len(self.semantic_matches),
                "migration_complexity": self._assess_complexity()
            }
        }
    
    def _analyze_epics(self):
        """Analyze epics and map to canonical format with semantic matching."""
        detected_epics = self.detection_report.get("epics", [])
        kanban_path = Path(self.detection_report.get("kanban_path", "."))
        
        for epic in detected_epics:
            epic_num = epic["epic_number"]
            
            # Determine if this conflicts with canonical epics (number-based)
            is_canonical_core = epic_num in self.CANONICAL_CORE_EPICS
            is_canonical_ancillary = epic_num in self.CANONICAL_ANCILLARY_EPICS
            is_canonical_core_plus = epic_num in self.CANONICAL_CORE_PLUS_EPICS
            
            # Extract epic content for semantic matching
            epic_doc_path = None
            if epic.get("epic_document"):
                epic_doc_path = kanban_path / epic["epic_document"]
            
            user_epic_content = self.semantic_matcher.extract_text_content(epic_doc_path)
            
            # Perform semantic matching against canonical epics
            semantic_match = None
            if self.canonical_epics:
                semantic_match = self.semantic_matcher.find_best_canonical_match(
                    user_epic_content,
                    self.canonical_epics
                )
            
            # Build mapping with semantic match information
            mapping = {
                "source_epic_number": epic_num,
                "source_directory": epic["directory"],
                "source_epic_document": epic.get("epic_document"),
                "source_epic_title": user_epic_content.get("title", ""),
                "is_canonical": is_canonical_core or is_canonical_ancillary,
                "is_canonical_core": is_canonical_core,
                "is_canonical_ancillary": is_canonical_ancillary,
                "is_canonical_core_plus": is_canonical_core_plus,
                "stories_count": epic.get("stories_found", 0),
                "tasks_count": epic.get("tasks_found", 0),
                "migration_action": self._determine_epic_migration_action(
                    epic_num, is_canonical_core, is_canonical_ancillary, semantic_match
                ),
                "target_epic_number": self._determine_target_epic_number(
                    epic_num, is_canonical_core, is_canonical_ancillary
                )
            }
            
            # Add semantic match information
            if semantic_match:
                canonical_epic_num, similarity_score, match_details = semantic_match
                mapping["semantic_match"] = {
                    "canonical_epic_number": canonical_epic_num,
                    "similarity_score": similarity_score,
                    "match_type": match_details["match_type"],
                    "field_scores": match_details["field_scores"]
                }
                
                # Record semantic match
                self.semantic_matches.append({
                    "user_epic_number": epic_num,
                    "user_epic_title": user_epic_content.get("title", ""),
                    "canonical_epic_number": canonical_epic_num,
                    "similarity_score": similarity_score,
                    "match_type": match_details["match_type"],
                    "recommendation": self._get_semantic_match_recommendation(
                        similarity_score, epic_num, canonical_epic_num
                    )
                })
            
            self.epic_mappings.append(mapping)
            
            # Record conflicts (number-based and semantic)
            if is_canonical_core:
                self.conflicts.append({
                    "type": "epic_conflict_core",
                    "severity": "high",
                    "epic_number": epic_num,
                    "message": f"Epic {epic_num} conflicts with canonical core epic. "
                              f"Recommendation: Renumber to {mapping['target_epic_number']} or use hybrid mode.",
                    "recommended_action": mapping["migration_action"]
                })
            
            # Add semantic match conflict if high similarity but different numbers
            if semantic_match and semantic_match[1] >= 70 and not is_canonical_core:
                canonical_epic_num, similarity_score, match_details = semantic_match
                if epic_num != canonical_epic_num:
                    self.conflicts.append({
                        "type": "semantic_match_conflict",
                        "severity": "medium",
                        "epic_number": epic_num,
                        "canonical_epic_number": canonical_epic_num,
                        "similarity_score": similarity_score,
                        "message": f"Epic {epic_num} semantically matches Canonical Epic {canonical_epic_num} "
                                  f"({similarity_score:.1f}% similarity). Consider merging or adopting canonical structure.",
                        "recommended_action": "adopt_canonical"  # All semantic matches recommended for adoption (threshold removed per BR-008/FR-010)
                    })
    
    def _determine_epic_migration_action(
        self, 
        epic_num: int, 
        is_canonical_core: bool, 
        is_canonical_ancillary: bool,
        semantic_match: Optional[Tuple] = None
    ) -> str:
        """Determine migration action for an epic."""
        # If semantic match exists, recommend adopting canonical (threshold removed per BR-008/FR-010)
        if semantic_match:
            return "adopt_canonical_structure"
        
        if is_canonical_core:
            return "preserve_as_project_epic"  # Keep as project-specific, renumber if needed
        elif is_canonical_ancillary:
            return "preserve_as_project_epic"  # Keep as project-specific
        else:
            return "preserve_as_is"  # Project-specific epic, no conflict
    
    def _get_semantic_match_recommendation(
        self,
        similarity_score: float,
        user_epic_num: int,
        canonical_epic_num: int
    ) -> str:
        """Get recommendation text for semantic match."""
        if similarity_score >= 90:
            return f"Exact match detected. Strongly recommend adopting Canonical Epic {canonical_epic_num}."
        elif similarity_score >= 80:
            return f"High semantic match ({similarity_score:.1f}%). Recommend adopting Canonical Epic {canonical_epic_num}."
        elif similarity_score >= 70:
            return f"Semantic match ({similarity_score:.1f}%). Consider merging with Canonical Epic {canonical_epic_num}."
        elif similarity_score >= 40:
            return f"Partial match ({similarity_score:.1f}%). Review for potential overlap with Canonical Epic {canonical_epic_num}."
        else:
            return f"Low similarity ({similarity_score:.1f}%). No strong match with Canonical Epic {canonical_epic_num}."
    
    def _determine_target_epic_number(
        self,
        epic_num: int,
        is_canonical_core: bool,
        is_canonical_ancillary: bool
    ) -> Optional[int]:
        """Determine target epic number for migration."""
        if is_canonical_core:
            # Suggest renumbering to avoid conflict
            # Find next available epic number starting from 24 (after canonical range)
            return None  # Will be determined during migration
        elif is_canonical_ancillary:
            return None  # Keep as is, or renumber if desired
        else:
            return epic_num  # No change needed
    
    def _analyze_stories(self):
        """Analyze stories and map to canonical format."""
        detected_stories = self.detection_report.get("stories", [])
        
        for story in detected_stories:
            epic_num = story["epic_number"]
            story_num = story["story_number"]
            
            # Find corresponding epic mapping
            epic_mapping = next(
                (e for e in self.epic_mappings if e["source_epic_number"] == epic_num),
                None
            )
            
            mapping = {
                "source_epic_number": epic_num,
                "source_story_number": story_num,
                "source_story_file": story["file"],
                "target_epic_number": epic_mapping["target_epic_number"] if epic_mapping else epic_num,
                "target_story_number": story_num,  # Keep same story number within epic
                "tasks_count": story.get("tasks_found", 0),
                "migration_action": "preserve_and_convert_format",
                "requires_format_conversion": True
            }
            
            self.story_mappings.append(mapping)
    
    def _analyze_tasks(self):
        """Analyze tasks and map to canonical format."""
        detected_tasks = self.detection_report.get("tasks", [])
        
        for task in detected_tasks:
            epic_num = task["epic_number"]
            story_num = task["story_number"]
            task_num = task["task_number"]
            
            # Find corresponding story mapping
            story_mapping = next(
                (s for s in self.story_mappings 
                 if s["source_epic_number"] == epic_num 
                 and s["source_story_number"] == story_num),
                None
            )
            
            mapping = {
                "source_epic_number": epic_num,
                "source_story_number": story_num,
                "source_task_number": task_num,
                "source_format": task.get("format", "unknown"),
                "source_task_file": task.get("file"),
                "target_epic_number": story_mapping["target_epic_number"] if story_mapping else epic_num,
                "target_story_number": story_mapping["target_story_number"] if story_mapping else story_num,
                "target_task_number": task_num,  # Keep same task number within story
                "migration_action": "preserve_and_convert_format",
                "requires_format_conversion": task.get("format") != "full"
            }
            
            self.task_mappings.append(mapping)
    
    def _identify_gaps(self):
        """Identify gaps in the structure (missing canonical epics, etc.)."""
        detected_epic_numbers = {
            epic["source_epic_number"] for epic in self.epic_mappings
        }
        
        # Check for missing canonical core epics
        missing_core_epics = self.CANONICAL_CORE_EPICS - detected_epic_numbers
        if missing_core_epics:
            self.gaps.append({
                "type": "missing_canonical_core_epics",
                "severity": "high",
                "message": f"Missing canonical core epics: {sorted(missing_core_epics)}",
                "epic_numbers": sorted(missing_core_epics),
                "recommendation": "Install canonical core epics during migration"
            })
        
        # Check for missing epic documents
        for epic in self.epic_mappings:
            if not epic["source_epic_document"]:
                self.gaps.append({
                    "type": "missing_epic_document",
                    "severity": "medium",
                    "epic_number": epic["source_epic_number"],
                    "message": f"Epic {epic['source_epic_number']} missing epic document",
                    "recommendation": "Create epic document from template during migration"
                })
    
    def _generate_migration_plan(self):
        """Generate migration plan based on analysis."""
        # Determine recommended installation mode
        has_conflicts = any(c["severity"] == "high" for c in self.conflicts)
        has_project_epics = any(
            not e["is_canonical"] for e in self.epic_mappings
        )
        has_semantic_matches = len(self.semantic_matches) > 0
        
        # Check if structure was actually detected (not just empty)
        structure_detected = len(self.epic_mappings) > 0
        
        # If we have semantic matches, recommend canonical adoption (threshold removed per BR-008/FR-010)
        if has_semantic_matches:
            recommended_mode = "canonical_adoption"
            recommendation_rationale = f"Canonical adoption recommended: {len(high_similarity_matches)} high similarity semantic matches found."
        elif has_conflicts and has_project_epics:
            recommended_mode = "hybrid"
            recommendation_rationale = "Hybrid mode recommended: Conflicts detected with existing project epics."
        elif has_project_epics:
            recommended_mode = "migration"
            recommendation_rationale = f"Migration mode recommended: {len(self.epic_mappings)} existing epics detected."
        elif structure_detected:
            # Structure detected but all epics are canonical - use update mode
            recommended_mode = "update"
            recommendation_rationale = f"Update mode recommended: Existing canonical structure detected ({len(self.epic_mappings)} epics)."
        else:
            recommended_mode = "fresh"
            recommendation_rationale = "Fresh install recommended: No existing Kanban structure detected."
        
        self.migration_plan = {
            "recommended_mode": recommended_mode,
            "modes_available": ["fresh", "migration", "update", "hybrid", "canonical_adoption"],
            "recommendation_rationale": recommendation_rationale,
            "steps": [
                {
                    "step": 1,
                    "action": "backup_existing_structure",
                    "description": "Create backup of existing Kanban structure",
                    "required": True
                },
                {
                    "step": 2,
                    "action": "resolve_conflicts",
                    "description": "Resolve epic numbering conflicts",
                    "required": has_conflicts,
                    "conflicts_to_resolve": len([c for c in self.conflicts if c["severity"] == "high"])
                },
                {
                    "step": 3,
                    "action": "install_canonical_epics",
                    "description": "Install canonical core epics (1-8)",
                    "required": True,
                    "epics_to_install": sorted(self.CANONICAL_CORE_EPICS)
                },
                {
                    "step": 4,
                    "action": "migrate_project_epics",
                    "description": "Migrate project-specific epics to canonical format",
                    "required": has_project_epics,
                    "epics_to_migrate": len([e for e in self.epic_mappings if not e["is_canonical"]])
                },
                {
                    "step": 5,
                    "action": "migrate_stories",
                    "description": "Migrate stories to canonical format",
                    "required": True,
                    "stories_to_migrate": len(self.story_mappings)
                },
                {
                    "step": 6,
                    "action": "migrate_tasks",
                    "description": "Migrate tasks to canonical format",
                    "required": True,
                    "tasks_to_migrate": len(self.task_mappings)
                },
                {
                    "step": 7,
                    "action": "validate_migration",
                    "description": "Validate migrated structure",
                    "required": True
                }
            ],
            "estimated_complexity": self._assess_complexity(),
            "warnings": self._generate_warnings()
        }
    
    def _assess_complexity(self) -> str:
        """Assess migration complexity."""
        conflict_count = len([c for c in self.conflicts if c["severity"] == "high"])
        epic_count = len(self.epic_mappings)
        story_count = len(self.story_mappings)
        task_count = len(self.task_mappings)
        
        if conflict_count > 3 or epic_count > 10 or task_count > 100:
            return "high"
        elif conflict_count > 0 or epic_count > 5 or task_count > 50:
            return "medium"
        else:
            return "low"
    
    def _generate_warnings(self) -> List[str]:
        """Generate migration warnings."""
        warnings = []
        
        if any(c["severity"] == "high" for c in self.conflicts):
            warnings.append(
                "High-severity conflicts detected. Manual intervention required for epic renumbering."
            )
        
        if len(self.gaps) > 0:
            warnings.append(
                f"{len(self.gaps)} gaps identified. Review gaps section for details."
            )
        
        epic_count = len(self.epic_mappings)
        if epic_count > 10:
            warnings.append(
                f"Large number of epics ({epic_count}) detected. Migration may take significant time."
            )
        
        return warnings
    
    def _generate_recommendation_rationale(
        self,
        recommended_mode: str,
        has_semantic_matches: bool,
        high_similarity_matches: List[Dict]
    ) -> str:
        """Generate rationale for recommended migration mode."""
        if recommended_mode == "canonical_adoption":
            return (
                f"Canonical adoption recommended: {len(high_similarity_matches)} high-similarity semantic matches "
                f"detected. Adopting canonical structure will provide optimal organization while preserving your work "
                f"through intelligent task mapping."
            )
        elif recommended_mode == "hybrid":
            return (
                "Hybrid mode recommended: Conflicts detected between project epics and canonical epics. "
                "Hybrid mode preserves your project epics while installing canonical framework epics."
            )
        elif recommended_mode == "migration":
            return (
                "Migration mode recommended: Existing project epics detected. Migration mode will convert "
                "your structure to canonical format while preserving all work items."
            )
        else:
            return (
                "Fresh install recommended: No existing Kanban structure detected. Fresh install will "
                "set up canonical framework structure."
            )


def main():
    parser = argparse.ArgumentParser(
        description="Analyze detected Kanban structures and generate migration plan"
    )
    parser.add_argument(
        "--detection-report",
        type=str,
        default="detection_report.json",
        help="Path to detection report JSON (default: detection_report.json)"
    )
    parser.add_argument(
        "--output",
        type=str,
        default="analysis_report.json",
        help="Output file for analysis report (default: analysis_report.json)"
    )
    parser.add_argument(
        "--verbose",
        action="store_true",
        help="Enable verbose output"
    )
    
    args = parser.parse_args()
    
    # Load detection report
    detection_path = Path(args.detection_report)
    if not detection_path.exists():
        print(f"Error: Detection report not found: {detection_path}")
        return 1
    
    with open(detection_path, 'r', encoding='utf-8') as f:
        detection_report = json.load(f)
    
    if args.verbose:
        print(f"Analyzing structure from detection report: {detection_path}")
    
    # Determine framework path (parent of scripts directory)
    framework_path = Path(__file__).parent.parent
    
    analyzer = KanbanStructureAnalyzer(detection_report, verbose=args.verbose, framework_path=framework_path)
    analysis_report = analyzer.analyze()
    
    # Write report to file
    output_path = Path(args.output)
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(analysis_report, f, indent=2, ensure_ascii=False)
    
    # Print summary
    print(f"\n{'='*60}")
    print("Analysis Report Summary")
    print(f"{'='*60}")
    if analysis_report.get("status") == "analyzed":
        summary = analysis_report["summary"]
        plan = analysis_report["migration_plan"]
        
        print(f"Epics to migrate: {summary['epics_to_migrate']}")
        print(f"Stories to migrate: {summary['stories_to_migrate']}")
        print(f"Tasks to migrate: {summary['tasks_to_migrate']}")
        print(f"Conflicts: {summary['conflict_count']}")
        print(f"Gaps: {summary['gap_count']}")
        print(f"Semantic matches: {summary.get('semantic_match_count', 0)}")
        print(f"\nRecommended mode: {plan['recommended_mode']}")
        if plan.get('recommendation_rationale'):
            print(f"Rationale: {plan['recommendation_rationale']}")
        print(f"Complexity: {summary['migration_complexity']}")
        
        if plan.get("warnings"):
            print(f"\n⚠️  Warnings:")
            for warning in plan["warnings"]:
                print(f"  - {warning}")
    else:
        print(f"Status: {analysis_report.get('status')}")
        print(f"Message: {analysis_report.get('message')}")
    
    print(f"\nFull report written to: {output_path}")
    print(f"{'='*60}\n")
    
    return 0 if analysis_report.get("status") == "analyzed" else 1


if __name__ == "__main__":
    exit(main())

