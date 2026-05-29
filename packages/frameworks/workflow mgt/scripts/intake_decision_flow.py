#!/usr/bin/env python3
"""
Intake Decision Flow Analysis Component

Analyzes FR/BR/UXR content to determine Epic/Story/Task placement for intake workflow.
Leverages E4:S10's EpicStoryMapper for semantic matching and adds intake-specific logic.

Part of Epic 2, Story 11, Task 2: Implement Decision Flow Analysis.

Usage:
    from intake_decision_flow import IntakeDecisionFlow
    
    decision_flow = IntakeDecisionFlow(kanban_path, framework_path, config)
    decision = decision_flow.analyze(fr_br_path, existing_epics, existing_stories)
"""

import sys
from pathlib import Path
from typing import Dict, List, Optional, Tuple
from dataclasses import dataclass

# Import E4:S10 components
try:
    # Add Kanban framework scripts to path
    kanban_scripts_path = Path(__file__).parent.parent.parent / "kanban" / "scripts"
    if str(kanban_scripts_path) not in sys.path:
        sys.path.insert(0, str(kanban_scripts_path))
    
    from fr_br_analyzer import FRBRAnalyzer, FRBRAnalysis
    from epic_story_mapper import EpicStoryMapper, EpicStoryMapping
except ImportError as e:
    print(f"⚠️  Warning: Could not import E4:S10 components: {e}")
    print("   E4:S10 (Agentic Task Creation) must be available for intake workflow")
    raise


@dataclass
class IntakeDecision:
    """Decision result from intake decision flow analysis."""
    # Epic/Story/Task placement
    epic_number: int
    story_number: Optional[int]  # None if new story recommended
    task_number: Optional[int]  # None if new task recommended
    new_story_recommended: bool
    new_task_recommended: bool
    
    # Confidence and matching
    epic_confidence: float
    epic_match_type: str  # 'exact', 'semantic', 'partial', 'no_match'
    story_match_confidence: Optional[float]
    
    # Decision rationale
    explanation: str
    reasoning: List[str]
    
    # Intake-specific decisions
    intake_status: str  # 'ACCEPTED', 'PENDING', 'REJECTED', 'DEFERRED'
    version_marker: Optional[str]  # Assigned in Step 6, but determined here
    requires_manual_review: bool
    
    # Source mapping (from E4:S10)
    epic_story_mapping: EpicStoryMapping


class IntakeDecisionFlow:
    """Decision flow analysis for intake workflow."""
    
    def __init__(
        self,
        kanban_path: Path,
        framework_path: Path,
        config: Optional[Dict] = None
    ):
        """
        Initialize intake decision flow.
        
        Args:
            kanban_path: Path to project's Kanban structure
            framework_path: Path to Kanban framework
            config: Configuration dict (from intake-workflow.yaml)
        """
        self.kanban_path = Path(kanban_path)
        self.framework_path = Path(framework_path)
        self.config = config or {}
        
        # Initialize E4:S10 components
        self.analyzer = FRBRAnalyzer()
        self.mapper = EpicStoryMapper(kanban_path, framework_path)
        
        # Configuration
        self.semantic_threshold = self.config.get('semantic_matching', {}).get('threshold', 0.7)
        self.auto_create_epic = self.config.get('epic_assignment', {}).get('auto_create_epic', False)
        self.default_status = self.config.get('intake_status', {}).get('default', 'ACCEPTED')
    
    def analyze(
        self,
        fr_br_path: Path,
        existing_epics: Optional[List[Dict]] = None,
        existing_stories: Optional[List[Dict]] = None
    ) -> IntakeDecision:
        """
        Analyze FR/BR/UXR and determine intake decision.
        
        Args:
            fr_br_path: Path to FR/BR/UXR document
            existing_epics: Optional list of existing project epics
            existing_stories: Optional list of existing project stories
        
        Returns:
            IntakeDecision with placement and rationale
        """
        # Step 1: Analyze FR/BR content (using E4:S10)
        fr_br_analysis = self.analyzer.analyze_fr_br(fr_br_path)
        
        # Step 2: Map to epic/story (using E4:S10)
        epic_story_mapping = self.mapper.map_fr_br_to_epic_story(
            fr_br_analysis,
            existing_epics,
            existing_stories
        )
        
        # Step 3: Determine intake-specific decisions
        intake_status = self._determine_intake_status(fr_br_analysis, epic_story_mapping)
        requires_manual_review = self._requires_manual_review(epic_story_mapping, fr_br_analysis)
        
        # Step 4: Determine story/task placement
        story_number, task_number, new_story_recommended, new_task_recommended = \
            self._determine_story_task_placement(epic_story_mapping, existing_stories)
        
        # Step 5: Generate decision rationale
        explanation, reasoning = self._generate_decision_rationale(
            fr_br_analysis,
            epic_story_mapping,
            intake_status,
            new_story_recommended,
            new_task_recommended
        )
        
        return IntakeDecision(
            epic_number=epic_story_mapping.primary_epic,
            story_number=story_number,
            task_number=task_number,
            new_story_recommended=new_story_recommended,
            new_task_recommended=new_task_recommended,
            epic_confidence=epic_story_mapping.primary_epic_confidence,
            epic_match_type=epic_story_mapping.primary_epic_match_type,
            story_match_confidence=epic_story_mapping.story_match.get('similarity_score') if epic_story_mapping.story_match else None,
            explanation=explanation,
            reasoning=reasoning,
            intake_status=intake_status,
            version_marker=None,  # Assigned in Step 6
            requires_manual_review=requires_manual_review,
            epic_story_mapping=epic_story_mapping
        )
    
    def _determine_intake_status(
        self,
        fr_br_analysis: FRBRAnalysis,
        epic_story_mapping: EpicStoryMapping
    ) -> str:
        """
        Determine intake status based on analysis and mapping.
        
        Logic:
        - If epic match confidence is low (< threshold) → PENDING (requires review)
        - If no epic match found → PENDING (requires manual epic assignment)
        - If epic match is good but story ambiguous → ACCEPTED (can proceed)
        - Default: Use config default (usually ACCEPTED)
        """
        # Low confidence epic match → PENDING
        if epic_story_mapping.primary_epic_confidence < (self.semantic_threshold * 100):
            return 'PENDING'
        
        # No epic match → PENDING (unless auto_create_epic enabled)
        if epic_story_mapping.primary_epic_match_type == 'no_match':
            if self.auto_create_epic:
                return 'ACCEPTED'  # Can create new epic
            else:
                return 'PENDING'  # Requires manual epic creation
        
        # Ambiguous placement → PENDING
        if epic_story_mapping.primary_epic_match_type == 'partial':
            return 'PENDING'
        
        # Good match → Use default status
        return self.default_status
    
    def _requires_manual_review(
        self,
        epic_story_mapping: EpicStoryMapping,
        fr_br_analysis: FRBRAnalysis
    ) -> bool:
        """
        Determine if manual review is required.
        
        Returns True if:
        - Low confidence epic match
        - No epic match found (and auto_create_epic disabled)
        - Multiple secondary epic matches (multi-epic FR/BR)
        - Ambiguous story placement
        """
        # Low confidence
        if epic_story_mapping.primary_epic_confidence < (self.semantic_threshold * 100):
            return True
        
        # No epic match
        if epic_story_mapping.primary_epic_match_type == 'no_match' and not self.auto_create_epic:
            return True
        
        # Multiple secondary epics (multi-epic FR/BR)
        if len(epic_story_mapping.secondary_epics) > 2:
            return True
        
        # Ambiguous story placement (story match exists but confidence is low)
        if epic_story_mapping.story_match:
            story_confidence = epic_story_mapping.story_match.get('similarity_score', 0)
            if story_confidence < 50.0:  # Low story match confidence
                return True
        
        return False
    
    def _determine_story_task_placement(
        self,
        epic_story_mapping: EpicStoryMapping,
        existing_stories: Optional[List[Dict]]
    ) -> Tuple[Optional[int], Optional[int], bool, bool]:
        """
        Determine story and task placement.
        
        Returns:
            (story_number, task_number, new_story_recommended, new_task_recommended)
        """
        story_number = None
        task_number = None
        new_story_recommended = False
        new_task_recommended = False
        
        # If story match exists, use it
        if epic_story_mapping.story_match:
            story_number = epic_story_mapping.story_match.get('story_number')
            # For existing story, recommend new task
            new_task_recommended = True
        else:
            # No story match → new story recommended
            new_story_recommended = True
            # New story → new task recommended (T00 for story creation)
            new_task_recommended = True
            task_number = 0  # T00 for story creation
        
        return story_number, task_number, new_story_recommended, new_task_recommended
    
    def _generate_decision_rationale(
        self,
        fr_br_analysis: FRBRAnalysis,
        epic_story_mapping: EpicStoryMapping,
        intake_status: str,
        new_story_recommended: bool,
        new_task_recommended: bool
    ) -> Tuple[str, List[str]]:
        """
        Generate decision rationale and explanation.
        
        Returns:
            (explanation_string, list_of_reasoning_points)
        """
        explanation_parts = []
        reasoning = []
        
        # Epic placement
        if epic_story_mapping.primary_epic > 0:
            explanation_parts.append(
                f"Epic {epic_story_mapping.primary_epic} "
                f"({epic_story_mapping.primary_epic_match_type} match, "
                f"{epic_story_mapping.primary_epic_confidence:.1f}% confidence)"
            )
            reasoning.append(
                f"Epic assignment: Epic {epic_story_mapping.primary_epic} "
                f"({epic_story_mapping.primary_epic_match_type}, {epic_story_mapping.primary_epic_confidence:.1f}%)"
            )
        else:
            explanation_parts.append("No epic match found")
            reasoning.append("No matching epic found - requires manual epic assignment or creation")
        
        # Story placement
        if epic_story_mapping.story_match:
            story_num = epic_story_mapping.story_match.get('story_number')
            story_confidence = epic_story_mapping.story_match.get('similarity_score', 0)
            explanation_parts.append(
                f"Existing Story {story_num} matches ({story_confidence:.1f}% similarity)"
            )
            reasoning.append(f"Story match: Story {story_num} ({story_confidence:.1f}% similarity)")
        elif new_story_recommended:
            explanation_parts.append("New story recommended")
            reasoning.append("No existing story match - new story recommended")
        
        # Task placement
        if new_task_recommended:
            if new_story_recommended:
                explanation_parts.append("New task T00 recommended (story creation)")
                reasoning.append("New story → new task T00 for story creation")
            else:
                explanation_parts.append("New task recommended")
                reasoning.append("Existing story → new task recommended")
        
        # Intake status
        if intake_status == 'PENDING':
            explanation_parts.append("Status: PENDING (requires manual review)")
            reasoning.append("Intake status set to PENDING - requires manual review")
        else:
            explanation_parts.append(f"Status: {intake_status}")
            reasoning.append(f"Intake status: {intake_status}")
        
        explanation = ". ".join(explanation_parts) + "."
        
        return explanation, reasoning


def main():
    """CLI entry point for testing."""
    import argparse
    
    parser = argparse.ArgumentParser(description="Intake Decision Flow Analysis")
    parser.add_argument('fr_br_path', type=Path, help='Path to FR/BR/UXR document')
    parser.add_argument('--kanban-path', type=Path, default=Path('docs/project-management/kanban'),
                       help='Path to Kanban structure')
    parser.add_argument('--framework-path', type=Path,
                       default=Path('packages/frameworks/kanban'),
                       help='Path to Kanban framework')
    parser.add_argument('--config', type=Path, help='Path to intake-config.yaml')
    args = parser.parse_args()
    
    # Load config if provided
    config = {}
    if args.config and args.config.exists():
        import yaml
        config = yaml.safe_load(args.config.read_text())
    
    # Initialize decision flow
    decision_flow = IntakeDecisionFlow(
        args.kanban_path,
        args.framework_path,
        config
    )
    
    # Analyze
    try:
        decision = decision_flow.analyze(args.fr_br_path)
        
        print("✅ Intake Decision Flow Analysis")
        print("=" * 80)
        print(f"Epic: {decision.epic_number} ({decision.epic_match_type}, {decision.epic_confidence:.1f}%)")
        if decision.story_number:
            print(f"Story: {decision.story_number} (existing)")
        elif decision.new_story_recommended:
            print("Story: New story recommended")
        if decision.task_number is not None:
            print(f"Task: T{decision.task_number:02d}")
        elif decision.new_task_recommended:
            print("Task: New task recommended")
        print(f"Status: {decision.intake_status}")
        print(f"Requires Review: {decision.requires_manual_review}")
        print("\nExplanation:")
        print(decision.explanation)
        print("\nReasoning:")
        for point in decision.reasoning:
            print(f"  - {point}")
        
        return 0
    except Exception as e:
        print(f"❌ Error: {e}", file=sys.stderr)
        import traceback
        traceback.print_exc()
        return 1


if __name__ == "__main__":
    sys.exit(main())
