#!/usr/bin/env python3
"""
FR/BR Content Analyzer

Analyzes Feature Request (FR) and Bug Report (BR) documents to extract
structured content for intelligent task creation.

Part of Epic 4, Story 10, Task 2: Implement intelligent epic/story mapping.

Usage:
    from fr_br_analyzer import FRBRAnalyzer
    
    analyzer = FRBRAnalyzer()
    analysis = analyzer.analyze_fr_br(fr_br_path)
"""

import re
from pathlib import Path
from typing import Dict, List, Optional, Set
from dataclasses import dataclass


@dataclass
class FRBRAnalysis:
    """Structured analysis of an FR/BR document."""
    document_type: str  # 'FR' or 'BR'
    document_id: str  # e.g., 'FR-012'
    title: str
    summary: str
    description: str
    requirements: List[str]
    acceptance_criteria: List[str]
    affected_areas: List[str]
    dependencies: List[str]
    priority: Optional[str]
    severity: Optional[str]
    use_cases: List[str]
    technical_requirements: List[str]
    scope: str
    key_concepts: Set[str]
    complexity_indicators: List[str]


class FRBRAnalyzer:
    """Analyzes FR/BR documents to extract structured content."""
    
    def __init__(self):
        """Initialize the FR/BR analyzer."""
        self.stop_words = {
            'a', 'an', 'and', 'are', 'as', 'at', 'be', 'by', 'for', 'from',
            'has', 'he', 'in', 'is', 'it', 'its', 'of', 'on', 'that', 'the',
            'to', 'was', 'will', 'with', 'this', 'but', 'they', 'have',
            'had', 'what', 'said', 'each', 'which', 'their', 'time', 'if',
            'up', 'out', 'many', 'then', 'them', 'these', 'so', 'some', 'her',
            'would', 'make', 'like', 'into', 'him', 'has', 'two', 'more',
            'very', 'after', 'words', 'long', 'than', 'first', 'been', 'call',
            'who', 'oil', 'sit', 'now', 'find', 'down', 'day', 'did', 'get',
            'come', 'made', 'may', 'part'
        }
    
    def analyze_fr_br(self, fr_br_path: Path) -> FRBRAnalysis:
        """
        Analyze an FR/BR document and extract structured content.
        
        Args:
            fr_br_path: Path to FR/BR Markdown file
        
        Returns:
            FRBRAnalysis object with extracted content
        """
        if not fr_br_path.exists():
            raise FileNotFoundError(f"FR/BR document not found: {fr_br_path}")
        
        content = fr_br_path.read_text(encoding='utf-8')
        
        # Determine document type
        document_type = self._determine_type(fr_br_path, content)
        document_id = self._extract_id(fr_br_path, content)
        
        # Extract structured fields
        title = self._extract_title(content)
        summary = self._extract_summary(content)
        description = self._extract_description(content)
        requirements = self._extract_requirements(content)
        acceptance_criteria = self._extract_acceptance_criteria(content)
        affected_areas = self._extract_affected_areas(content)
        dependencies = self._extract_dependencies(content)
        priority = self._extract_priority(content)
        severity = self._extract_severity(content)
        use_cases = self._extract_use_cases(content)
        technical_requirements = self._extract_technical_requirements(content)
        scope = self._extract_scope(content)
        
        # Analyze content
        key_concepts = self._extract_key_concepts(content)
        complexity_indicators = self._identify_complexity_indicators(content)
        
        return FRBRAnalysis(
            document_type=document_type,
            document_id=document_id,
            title=title,
            summary=summary,
            description=description,
            requirements=requirements,
            acceptance_criteria=acceptance_criteria,
            affected_areas=affected_areas,
            dependencies=dependencies,
            priority=priority,
            severity=severity,
            use_cases=use_cases,
            technical_requirements=technical_requirements,
            scope=scope,
            key_concepts=key_concepts,
            complexity_indicators=complexity_indicators
        )
    
    def _determine_type(self, path: Path, content: str) -> str:
        """Determine if document is FR or BR."""
        filename = path.name.upper()
        if filename.startswith('FR-') or 'FEATURE REQUEST' in content.upper():
            return 'FR'
        elif filename.startswith('BR-') or 'BUG REPORT' in content.upper():
            return 'BR'
        elif filename.startswith('UXR-'):
            return 'UXR'
        else:
            # Default to FR if unclear
            return 'FR'
    
    def _extract_id(self, path: Path, content: str) -> str:
        """Extract document ID (e.g., FR-012)."""
        # Try from filename
        match = re.search(r'(FR|BR|UXR)-(\d+)', path.name.upper())
        if match:
            return f"{match.group(1)}-{match.group(2)}"
        
        # Try from content
        match = re.search(r'(FR|BR|UXR)-(\d+)', content.upper())
        if match:
            return f"{match.group(1)}-{match.group(2)}"
        
        return path.stem
    
    def _extract_title(self, content: str) -> str:
        """Extract title from document."""
        # Look for # Title or ## Summary
        match = re.search(r'^#\s+(.+)$', content, re.MULTILINE)
        if match:
            return match.group(1).strip()
        
        # Look for title in frontmatter
        match = re.search(r'^title:\s*(.+)$', content, re.MULTILINE | re.IGNORECASE)
        if match:
            return match.group(1).strip()
        
        return ""
    
    def _extract_summary(self, content: str) -> str:
        """Extract summary from document."""
        # Look for ## Summary section
        match = re.search(r'##\s+Summary\s*\n\n(.+?)(?=\n##|\n---|\Z)', content, re.DOTALL)
        if match:
            return match.group(1).strip()
        
        return ""
    
    def _extract_description(self, content: str) -> str:
        """Extract description from document."""
        # Look for ## Description section
        match = re.search(r'##\s+Description\s*\n\n(.+?)(?=\n##|\n---|\Z)', content, re.DOTALL)
        if match:
            return match.group(1).strip()
        
        return ""
    
    def _extract_requirements(self, content: str) -> List[str]:
        """Extract requirements from document."""
        requirements = []
        
        # Look for ## Requirements or ## Functional Requirements
        match = re.search(
            r'##\s+(?:Functional\s+)?Requirements\s*\n\n(.+?)(?=\n##|\n---|\Z)',
            content,
            re.DOTALL | re.IGNORECASE
        )
        if match:
            req_text = match.group(1)
            # Extract list items
            items = re.findall(r'^\d+\.\s+(.+)$', req_text, re.MULTILINE)
            requirements.extend(items)
            
            # Also extract bullet points
            items = re.findall(r'^[-*]\s+(.+)$', req_text, re.MULTILINE)
            requirements.extend(items)
        
        return [r.strip() for r in requirements if r.strip()]
    
    def _extract_acceptance_criteria(self, content: str) -> List[str]:
        """Extract acceptance criteria from document."""
        criteria = []
        
        # Look for ## Acceptance Criteria
        match = re.search(
            r'##\s+Acceptance\s+Criteria\s*\n\n(.+?)(?=\n##|\n---|\Z)',
            content,
            re.DOTALL | re.IGNORECASE
        )
        if match:
            criteria_text = match.group(1)
            # Extract list items
            items = re.findall(r'^\d+\.\s+(.+)$', criteria_text, re.MULTILINE)
            criteria.extend(items)
            
            # Also extract checkboxes
            items = re.findall(r'^[-*]\s+\[[ x]\]\s+(.+)$', criteria_text, re.MULTILINE)
            criteria.extend(items)
        
        return [c.strip() for c in criteria if c.strip()]
    
    def _extract_affected_areas(self, content: str) -> List[str]:
        """Extract affected areas from document."""
        areas = []
        
        # Look for ## Affected Areas or checkboxes
        match = re.search(
            r'##\s+Affected\s+Areas\s*\n\n(.+?)(?=\n##|\n---|\Z)',
            content,
            re.DOTALL | re.IGNORECASE
        )
        if match:
            areas_text = match.group(1)
            # Extract checked items
            items = re.findall(r'^[-*]\s+\[x\]\s+(.+)$', areas_text, re.MULTILINE | re.IGNORECASE)
            areas.extend(items)
        
        return [a.strip() for a in areas if a.strip()]
    
    def _extract_dependencies(self, content: str) -> List[str]:
        """Extract dependencies from document."""
        dependencies = []
        
        # Look for ## Dependencies
        match = re.search(
            r'##\s+Dependencies\s*\n\n(.+?)(?=\n##|\n---|\Z)',
            content,
            re.DOTALL | re.IGNORECASE
        )
        if match:
            deps_text = match.group(1)
            # Extract list items
            items = re.findall(r'^\d+\.\s+(.+)$', deps_text, re.MULTILINE)
            dependencies.extend(items)
            
            # Also extract bullet points
            items = re.findall(r'^[-*]\s+(.+)$', deps_text, re.MULTILINE)
            dependencies.extend(items)
        
        return [d.strip() for d in dependencies if d.strip()]
    
    def _extract_priority(self, content: str) -> Optional[str]:
        """Extract priority from document."""
        # Look for Priority field
        match = re.search(r'^\*\*Priority:\*\*\s*(.+)$', content, re.MULTILINE | re.IGNORECASE)
        if match:
            return match.group(1).strip()
        
        # Look in frontmatter
        match = re.search(r'^priority:\s*(.+)$', content, re.MULTILINE | re.IGNORECASE)
        if match:
            return match.group(1).strip()
        
        return None
    
    def _extract_severity(self, content: str) -> Optional[str]:
        """Extract severity from document."""
        # Look for Severity field
        match = re.search(r'^\*\*Severity:\*\*\s*(.+)$', content, re.MULTILINE | re.IGNORECASE)
        if match:
            return match.group(1).strip()
        
        # Look in frontmatter
        match = re.search(r'^severity:\s*(.+)$', content, re.MULTILINE | re.IGNORECASE)
        if match:
            return match.group(1).strip()
        
        return None
    
    def _extract_use_cases(self, content: str) -> List[str]:
        """Extract use cases from document."""
        use_cases = []
        
        # Look for ## Use Cases
        match = re.search(
            r'##\s+Use\s+Cases\s*\n\n(.+?)(?=\n##|\n---|\Z)',
            content,
            re.DOTALL | re.IGNORECASE
        )
        if match:
            cases_text = match.group(1)
            # Extract numbered use cases
            items = re.findall(r'^\d+\.\s+(.+)$', cases_text, re.MULTILINE)
            use_cases.extend(items)
        
        return [uc.strip() for uc in use_cases if uc.strip()]
    
    def _extract_technical_requirements(self, content: str) -> List[str]:
        """Extract technical requirements from document."""
        tech_reqs = []
        
        # Look for technical keywords
        tech_keywords = ['api', 'database', 'backend', 'frontend', 'integration', 'performance', 'security']
        
        # Search in requirements section
        requirements = self._extract_requirements(content)
        for req in requirements:
            req_lower = req.lower()
            if any(keyword in req_lower for keyword in tech_keywords):
                tech_reqs.append(req)
        
        return tech_reqs
    
    def _extract_scope(self, content: str) -> str:
        """Extract scope from document."""
        # Look for ## Scope
        match = re.search(
            r'##\s+Scope\s*\n\n(.+?)(?=\n##|\n---|\Z)',
            content,
            re.DOTALL | re.IGNORECASE
        )
        if match:
            return match.group(1).strip()
        
        # Infer from description if no explicit scope
        description = self._extract_description(content)
        if description:
            return description[:500]  # First 500 chars as scope
        
        return ""
    
    def _extract_key_concepts(self, content: str) -> Set[str]:
        """Extract key concepts from content."""
        # Combine all text
        all_text = f"{self._extract_title(content)} {self._extract_description(content)} {' '.join(self._extract_requirements(content))}"
        
        # Tokenize and filter
        words = re.findall(r'\b[a-z]{3,}\b', all_text.lower())
        concepts = {w for w in words if w not in self.stop_words}
        
        # Filter common words
        common_words = {'the', 'this', 'that', 'with', 'from', 'when', 'where', 'what', 'how', 'why'}
        concepts = concepts - common_words
        
        return concepts
    
    def _identify_complexity_indicators(self, content: str) -> List[str]:
        """Identify complexity indicators in content."""
        indicators = []
        
        complexity_keywords = [
            'complex', 'multiple', 'integration', 'refactor', 'migration',
            'architecture', 'performance', 'scalability', 'security',
            'multiple systems', 'cross-cutting', 'breaking change'
        ]
        
        content_lower = content.lower()
        for keyword in complexity_keywords:
            if keyword in content_lower:
                indicators.append(keyword)
        
        return indicators

