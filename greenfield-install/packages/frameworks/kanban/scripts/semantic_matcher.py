#!/usr/bin/env python3
"""
Semantic Matching Utility for Epic and Task Matching

Provides semantic similarity analysis for matching user epics/tasks to canonical epics/stories.

Part of Epic 4, Story 8, Task 1 (FR-009): Semantic epic matching implementation.

Usage:
    from semantic_matcher import SemanticMatcher
    
    matcher = SemanticMatcher()
    similarity = matcher.calculate_similarity(text1, text2)
"""

import re
from typing import Dict, List, Optional, Set, Tuple
from pathlib import Path
import json


class SemanticMatcher:
    """Calculates semantic similarity between texts using word-based analysis."""
    
    def __init__(self):
        self.stop_words = {
            'a', 'an', 'and', 'are', 'as', 'at', 'be', 'by', 'for', 'from',
            'has', 'he', 'in', 'is', 'it', 'its', 'of', 'on', 'that', 'the',
            'to', 'was', 'will', 'with', 'the', 'this', 'but', 'they', 'have',
            'had', 'what', 'said', 'each', 'which', 'their', 'time', 'if',
            'up', 'out', 'many', 'then', 'them', 'these', 'so', 'some', 'her',
            'would', 'make', 'like', 'into', 'him', 'has', 'two', 'more',
            'very', 'after', 'words', 'long', 'than', 'first', 'been', 'call',
            'who', 'oil', 'sit', 'now', 'find', 'down', 'day', 'did', 'get',
            'come', 'made', 'may', 'part'
        }
    
    def extract_text_content(self, epic_doc_path: Optional[Path]) -> Dict[str, str]:
        """Extract text content from an epic document."""
        content = {
            "title": "",
            "description": "",
            "purpose": "",
            "scope": "",
            "full_text": ""
        }
        
        if not epic_doc_path or not epic_doc_path.exists():
            return content
        
        try:
            text = epic_doc_path.read_text(encoding='utf-8')
            content["full_text"] = text
            
            # Extract title (first # heading)
            title_match = re.search(r'^#\s+(.+)$', text, re.MULTILINE)
            if title_match:
                content["title"] = title_match.group(1).strip()
            
            # Extract purpose section
            purpose_match = re.search(r'\*\*Purpose:\*\*\s*(.+?)(?:\n|$)', text, re.MULTILINE | re.DOTALL)
            if purpose_match:
                content["purpose"] = purpose_match.group(1).strip()
            
            # Extract scope section
            scope_match = re.search(r'\*\*Scope:\*\*\s*(.+?)(?:\n|$)', text, re.MULTILINE | re.DOTALL)
            if scope_match:
                content["scope"] = scope_match.group(1).strip()
            
            # Extract description (text after title, before first ##)
            desc_match = re.search(r'^#\s+.+?\n\n(.+?)(?=\n##|\Z)', text, re.DOTALL)
            if desc_match:
                content["description"] = desc_match.group(1).strip()
            
        except Exception as e:
            print(f"Warning: Error reading epic document {epic_doc_path}: {e}")
        
        return content
    
    def tokenize(self, text: str) -> Set[str]:
        """Tokenize text into words, removing stop words and normalizing."""
        if not text:
            return set()
        
        # Normalize: lowercase, remove punctuation, split
        normalized = re.sub(r'[^\w\s]', ' ', text.lower())
        words = normalized.split()
        
        # Remove stop words and short words
        tokens = {w for w in words if len(w) > 2 and w not in self.stop_words}
        
        return tokens
    
    def calculate_similarity(self, text1: str, text2: str) -> float:
        """
        Calculate semantic similarity between two texts (0-100%).
        
        Uses Jaccard similarity on word tokens, weighted by text length.
        """
        if not text1 or not text2:
            return 0.0
        
        tokens1 = self.tokenize(text1)
        tokens2 = self.tokenize(text2)
        
        if not tokens1 or not tokens2:
            return 0.0
        
        # Jaccard similarity: intersection / union
        intersection = len(tokens1 & tokens2)
        union = len(tokens1 | tokens2)
        
        if union == 0:
            return 0.0
        
        jaccard = intersection / union
        
        # Weight by text length similarity (longer texts with more overlap score higher)
        len_ratio = min(len(tokens1), len(tokens2)) / max(len(tokens1), len(tokens2))
        
        # Combined score (Jaccard weighted by length similarity)
        similarity = jaccard * (0.7 + 0.3 * len_ratio)
        
        return min(100.0, similarity * 100.0)
    
    def calculate_epic_similarity(
        self,
        user_epic_content: Dict[str, str],
        canonical_epic_content: Dict[str, str]
    ) -> Dict[str, float]:
        """Calculate similarity scores for different epic content fields."""
        scores = {}
        
        # Title similarity (weight: 30%)
        if user_epic_content.get("title") and canonical_epic_content.get("title"):
            scores["title"] = self.calculate_similarity(
                user_epic_content["title"],
                canonical_epic_content["title"]
            )
        
        # Purpose similarity (weight: 40%)
        if user_epic_content.get("purpose") and canonical_epic_content.get("purpose"):
            scores["purpose"] = self.calculate_similarity(
                user_epic_content["purpose"],
                canonical_epic_content["purpose"]
            )
        
        # Scope similarity (weight: 20%)
        if user_epic_content.get("scope") and canonical_epic_content.get("scope"):
            scores["scope"] = self.calculate_similarity(
                user_epic_content["scope"],
                canonical_epic_content["scope"]
            )
        
        # Full text similarity (weight: 10%)
        if user_epic_content.get("full_text") and canonical_epic_content.get("full_text"):
            scores["full_text"] = self.calculate_similarity(
                user_epic_content["full_text"],
                canonical_epic_content["full_text"]
            )
        
        return scores
    
    def calculate_weighted_epic_similarity(
        self,
        user_epic_content: Dict[str, str],
        canonical_epic_content: Dict[str, str]
    ) -> float:
        """Calculate weighted overall similarity score for epic matching."""
        scores = self.calculate_epic_similarity(user_epic_content, canonical_epic_content)
        
        if not scores:
            return 0.0
        
        # Weighted average
        weights = {
            "title": 0.30,
            "purpose": 0.40,
            "scope": 0.20,
            "full_text": 0.10
        }
        
        weighted_sum = sum(scores.get(key, 0) * weight for key, weight in weights.items())
        weight_sum = sum(weights.get(key, 0) for key in scores.keys())
        
        if weight_sum == 0:
            return 0.0
        
        return weighted_sum / weight_sum
    
    def classify_match(self, similarity_score: float) -> str:
        """Classify match type based on similarity score."""
        if similarity_score >= 90:
            return "exact_match"
        elif similarity_score >= 70:
            return "semantic_match"
        elif similarity_score >= 40:
            return "partial_match"
        else:
            return "no_match"
    
    def find_best_canonical_match(
        self,
        user_epic_content: Dict[str, str],
        canonical_epics: List[Dict]
    ) -> Optional[Tuple[int, float, Dict]]:
        """
        Find the best matching canonical epic for a user epic.
        
        Returns: (canonical_epic_number, similarity_score, match_details) or None
        """
        best_match = None
        best_score = 0.0
        
        for canonical_epic in canonical_epics:
            canonical_content = canonical_epic.get("content", {})
            score = self.calculate_weighted_epic_similarity(
                user_epic_content,
                canonical_content
            )
            
            if score > best_score:
                best_score = score
                best_match = (
                    canonical_epic["epic_number"],
                    score,
                    {
                        "match_type": self.classify_match(score),
                        "similarity_score": score,
                        "field_scores": self.calculate_epic_similarity(
                            user_epic_content,
                            canonical_content
                        )
                    }
                )
        
        return best_match


def load_canonical_epic_definitions(framework_path: Path) -> List[Dict]:
    """
    Load canonical epic definitions from the framework.
    
    Returns list of canonical epic definitions with content.
    """
    canonical_epics = []
    
    # Path to canonical epics template
    canonical_file = framework_path / "templates" / "COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md"
    
    if not canonical_file.exists():
        print(f"Warning: Canonical epics file not found: {canonical_file}")
        return canonical_epics
    
    try:
        matcher = SemanticMatcher()
        text = canonical_file.read_text(encoding='utf-8')
        
        # Parse epic definitions from the comprehensive structure document
        # Look for "### Epic N:" patterns
        epic_pattern = re.compile(
            r'### Epic (\d+):\s*(.+?)\n\n\*\*Purpose:\*\*\s*(.+?)(?:\n|$)'
            r'(?:\*\*Scope:\*\*\s*(.+?)(?:\n|$))?'
            r'(?:\*\*Status:\*\*\s*(.+?)(?:\n|$))?'
            r'(?:\*\*Description:\*\*\s*(.+?)(?=\n###|\Z))?',
            re.MULTILINE | re.DOTALL
        )
        
        for match in epic_pattern.finditer(text):
            epic_num = int(match.group(1))
            epic_title = match.group(2).strip()
            epic_purpose = match.group(3).strip()
            # Check if optional groups exist before accessing
            # Check if optional groups exist before accessing (use try/except for safety)
            try:
                epic_scope = match.group(4).strip() if match.group(4) else ""
            except IndexError:
                epic_scope = ""
            try:
                epic_description = match.group(7).strip() if match.group(7) else ""
            except IndexError:
                epic_description = ""
            
            # Extract full epic section
            epic_start = match.start()
            epic_end = match.end()
            epic_section = text[epic_start:epic_end]
            
            canonical_epics.append({
                "epic_number": epic_num,
                "title": epic_title,
                "content": {
                    "title": epic_title,
                    "purpose": epic_purpose,
                    "scope": epic_scope,
                    "description": epic_description,
                    "full_text": epic_section
                }
            })
    
    except Exception as e:
        print(f"Error loading canonical epic definitions: {e}")
    
    return canonical_epics


if __name__ == "__main__":
    # Test semantic matching
    matcher = SemanticMatcher()
    
    text1 = "Tool Management and Maintenance"
    text2 = "Codebase Maintenance and Review"
    
    similarity = matcher.calculate_similarity(text1, text2)
    print(f"Similarity between '{text1}' and '{text2}': {similarity:.1f}%")
    print(f"Match type: {matcher.classify_match(similarity)}")

