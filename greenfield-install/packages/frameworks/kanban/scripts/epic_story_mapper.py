#!/usr/bin/env python3
"""
Intelligent Epic/Story Mapper for FR/BR

Maps Feature Requests and Bug Reports to appropriate canonical epics and stories
using semantic matching and agentic intelligence.

Part of Epic 4, Story 10, Task 2: Implement intelligent epic/story mapping.

Usage:
    from epic_story_mapper import EpicStoryMapper
    
    mapper = EpicStoryMapper(kanban_path, framework_path)
    mapping = mapper.map_fr_br_to_epic_story(fr_br_analysis)
"""

import json
from pathlib import Path
from typing import Dict, List, Optional, Tuple
from dataclasses import dataclass

from fr_br_analyzer import FRBRAnalysis
from semantic_matcher import SemanticMatcher, load_canonical_epic_definitions
from agentic_mapper import AgenticTaskMapper


@dataclass
class EpicStoryMapping:
    """Mapping of FR/BR to epic and story."""
    primary_epic: int
    primary_epic_confidence: float
    primary_epic_match_type: str  # 'exact', 'semantic', 'partial', 'no_match'
    secondary_epics: List[Tuple[int, float, str]]  # [(epic_num, confidence, match_type), ...]
    story_match: Optional[Dict]  # Existing story match or None
    new_story_recommended: bool
    new_story_characteristics: Optional[Dict]
    explanation: str
    reasoning: List[str]


class EpicStoryMapper:
    """Maps FR/BR to appropriate canonical epics and stories."""
    
    def __init__(self, kanban_path: Path, framework_path: Path):
        """
        Initialize the epic/story mapper.
        
        Args:
            kanban_path: Path to project's Kanban structure
            framework_path: Path to Kanban framework
        """
        self.kanban_path = Path(kanban_path)
        self.framework_path = Path(framework_path)
        self.semantic_matcher = SemanticMatcher()
        self.canonical_epics = load_canonical_epic_definitions(framework_path)
    
    def map_fr_br_to_epic_story(
        self,
        fr_br_analysis: FRBRAnalysis,
        existing_epics: Optional[List[Dict]] = None,
        existing_stories: Optional[List[Dict]] = None
    ) -> EpicStoryMapping:
        """
        Map FR/BR to appropriate epic and story.
        
        Args:
            fr_br_analysis: Analyzed FR/BR content
            existing_epics: Optional list of existing project epics
            existing_stories: Optional list of existing project stories
        
        Returns:
            EpicStoryMapping with mapping details
        """
        # Prepare FR/BR content for semantic matching
        fr_br_content = self._prepare_fr_br_content(fr_br_analysis)
        
        # Find best canonical epic match
        primary_match = self.semantic_matcher.find_best_canonical_match(
            fr_br_content,
            self.canonical_epics
        )
        
        # Find secondary epic matches (if multi-epic)
        secondary_matches = self._find_secondary_epic_matches(
            fr_br_content,
            primary_match
        )
        
        # Search for existing story match
        story_match = None
        if existing_stories and primary_match:
            story_match = self._find_existing_story_match(
                fr_br_analysis,
                primary_match[0],
                existing_stories
            )
        
        # Determine if new story needed
        new_story_recommended = story_match is None
        new_story_characteristics = None
        if new_story_recommended:
            new_story_characteristics = self._determine_new_story_characteristics(
                fr_br_analysis,
                primary_match
            )
        
        # Generate explanation
        explanation = self._generate_explanation(
            fr_br_analysis,
            primary_match,
            secondary_matches,
            story_match,
            new_story_recommended
        )
        
        # Generate reasoning
        reasoning = self._generate_reasoning(
            fr_br_analysis,
            primary_match,
            secondary_matches,
            story_match
        )
        
        return EpicStoryMapping(
            primary_epic=primary_match[0] if primary_match else 0,
            primary_epic_confidence=primary_match[1] if primary_match else 0.0,
            primary_epic_match_type=primary_match[2]["match_type"] if primary_match else "no_match",
            secondary_epics=secondary_matches,
            story_match=story_match,
            new_story_recommended=new_story_recommended,
            new_story_characteristics=new_story_characteristics,
            explanation=explanation,
            reasoning=reasoning
        )
    
    def _prepare_fr_br_content(self, analysis: FRBRAnalysis) -> Dict[str, str]:
        """Prepare FR/BR content for semantic matching."""
        # Combine all relevant text
        full_text = f"{analysis.title} {analysis.summary} {analysis.description} {' '.join(analysis.requirements)}"
        
        return {
            "title": analysis.title,
            "description": analysis.description,
            "purpose": analysis.summary,
            "scope": analysis.scope,
            "full_text": full_text
        }
    
    def _find_secondary_epic_matches(
        self,
        fr_br_content: Dict[str, str],
        primary_match: Optional[Tuple]
    ) -> List[Tuple[int, float, str]]:
        """Find secondary epic matches (for multi-epic FR/BR)."""
        secondary_matches = []
        
        if not primary_match:
            return secondary_matches
        
        primary_epic_num = primary_match[0]
        primary_score = primary_match[1]
        
        # Find other epics with good matches (within 20% of primary)
        threshold = primary_score * 0.8
        
        for canonical_epic in self.canonical_epics:
            epic_num = canonical_epic["epic_number"]
            
            # Skip primary epic
            if epic_num == primary_epic_num:
                continue
            
            # Calculate similarity
            canonical_content = canonical_epic.get("content", {})
            score = self.semantic_matcher.calculate_weighted_epic_similarity(
                fr_br_content,
                canonical_content
            )
            
            # If score is high enough, add as secondary
            if score >= threshold and score >= 30.0:  # Minimum 30% similarity
                match_type = self.semantic_matcher.classify_match(score)
                secondary_matches.append((epic_num, score, match_type))
        
        # Sort by score descending
        secondary_matches.sort(key=lambda x: x[1], reverse=True)
        
        return secondary_matches
    
    def _find_existing_story_match(
        self,
        analysis: FRBRAnalysis,
        epic_num: int,
        existing_stories: List[Dict]
    ) -> Optional[Dict]:
        """Find existing story that matches FR/BR."""
        # Filter stories for this epic
        epic_stories = [
            s for s in existing_stories
            if s.get("epic_number") == epic_num
        ]
        
        if not epic_stories:
            return None
        
        # Prepare FR/BR content for story matching
        fr_br_text = f"{analysis.title} {analysis.summary} {' '.join(analysis.requirements)}"
        
        best_match = None
        best_score = 0.0
        
        for story in epic_stories:
            # Get story content
            story_content = self._get_story_content(story)
            if not story_content:
                continue
            
            # Calculate similarity
            score = self.semantic_matcher.calculate_similarity(
                fr_br_text,
                story_content
            )
            
            if score > best_score:
                best_score = score
                best_match = {
                    "epic_number": epic_num,
                    "story_number": story.get("story_number"),
                    "story_title": story.get("story_title", ""),
                    "similarity_score": score,
                    "match_type": self.semantic_matcher.classify_match(score)
                }
        
        # Only return if similarity is good enough (>= 40%)
        if best_match and best_match["similarity_score"] >= 40.0:
            return best_match
        
        return None
    
    def _get_story_content(self, story: Dict) -> Optional[str]:
        """Get story content for matching."""
        story_path = story.get("story_document")
        if not story_path:
            return story.get("story_title", "")
        
        full_path = self.kanban_path / story_path
        if not full_path.exists():
            return story.get("story_title", "")
        
        try:
            content = full_path.read_text(encoding='utf-8')
            # Extract title and description
            title_match = re.search(r'^#\s+(.+)$', content, re.MULTILINE)
            desc_match = re.search(r'##\s+(?:Overview|Description)\s*\n\n(.+?)(?=\n##|\Z)', content, re.DOTALL)
            
            title = title_match.group(1) if title_match else story.get("story_title", "")
            description = desc_match.group(1) if desc_match else ""
            
            return f"{title} {description}"
        except Exception:
            return story.get("story_title", "")
    
    def _determine_new_story_characteristics(
        self,
        analysis: FRBRAnalysis,
        primary_match: Optional[Tuple]
    ) -> Dict:
        """Determine characteristics for a new story."""
        # Determine story type based on FR/BR type and content
        story_type = "Feature Implementation" if analysis.document_type == "FR" else "Bug Fix"
        
        # Determine story scope
        if len(analysis.requirements) > 5 or analysis.complexity_indicators:
            story_scope = "Large"
        elif len(analysis.requirements) > 2:
            story_scope = "Medium"
        else:
            story_scope = "Small"
        
        # Determine story priority
        priority = analysis.priority or "MEDIUM"
        if analysis.severity and analysis.document_type == "BR":
            # High severity bugs get high priority
            if "HIGH" in analysis.severity.upper() or "CRITICAL" in analysis.severity.upper():
                priority = "HIGH"
        
        return {
            "story_type": story_type,
            "story_scope": story_scope,
            "story_priority": priority,
            "story_title": analysis.title,
            "story_description": analysis.summary or analysis.description[:200]
        }
    
    def _generate_explanation(
        self,
        analysis: FRBRAnalysis,
        primary_match: Optional[Tuple],
        secondary_matches: List[Tuple],
        story_match: Optional[Dict],
        new_story_recommended: bool
    ) -> str:
        """Generate explanation for the mapping."""
        parts = []
        
        if primary_match:
            epic_num, score, match_details = primary_match
            match_type = match_details["match_type"]
            
            parts.append(
                f"Mapped to Canonical Epic {epic_num} "
                f"({match_type} match, {score:.1f}% similarity)"
            )
        else:
            parts.append("No canonical epic match found")
        
        if secondary_matches:
            parts.append(f"Also relevant to {len(secondary_matches)} other epic(s)")
        
        if story_match:
            parts.append(
                f"Existing Story {story_match['story_number']} matches "
                f"({story_match['similarity_score']:.1f}% similarity)"
            )
        elif new_story_recommended:
            parts.append("New story recommended")
        
        return ". ".join(parts) + "."
    
    def _generate_reasoning(
        self,
        analysis: FRBRAnalysis,
        primary_match: Optional[Tuple],
        secondary_matches: List[Tuple],
        story_match: Optional[Dict]
    ) -> List[str]:
        """Generate reasoning for the mapping."""
        reasoning = []
        
        if primary_match:
            epic_num, score, match_details = primary_match
            field_scores = match_details.get("field_scores", {})
            
            reasoning.append(f"Primary epic match: Epic {epic_num} (similarity: {score:.1f}%)")
            
            if field_scores:
                best_field = max(field_scores.items(), key=lambda x: x[1])
                reasoning.append(f"Strongest match in: {best_field[0]} ({best_field[1]:.1f}%)")
        
        if secondary_matches:
            reasoning.append(f"Secondary epic matches: {len(secondary_matches)} epic(s) identified")
        
        if story_match:
            reasoning.append(
                f"Story match found: Story {story_match['story_number']} "
                f"({story_match['similarity_score']:.1f}% similarity)"
            )
        else:
            reasoning.append("No existing story match - new story recommended")
        
        # Add key concepts that influenced matching
        if analysis.key_concepts:
            top_concepts = list(analysis.key_concepts)[:5]
            reasoning.append(f"Key concepts: {', '.join(top_concepts)}")
        
        return reasoning


import re

