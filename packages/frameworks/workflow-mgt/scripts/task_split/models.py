"""Data models for FR-011 multi-epic task split plans."""

from __future__ import annotations

from dataclasses import dataclass, field
from typing import Dict, List, Optional, Tuple


@dataclass
class TaskAssignment:
    """One source task mapped to a canonical epic target."""

    source_epic: int
    source_story: int
    source_task: int
    target_epic: int
    target_story: int
    target_task: int
    confidence: float
    rationale: str
    signals: List[str] = field(default_factory=list)
    tie_break: Optional[str] = None
    match_type: str = "partial"

    @property
    def source_id(self) -> str:
        return f"E{self.source_epic}:S{self.source_story:02d}:T{self.source_task:02d}"

    @property
    def target_id(self) -> str:
        return f"E{self.target_epic}:S{self.target_story:02d}:T{self.target_task:02d}"


@dataclass
class SplitPlan:
    """Migration split plan with explainability and remap outputs."""

    source_epic: int
    is_split_candidate: bool
    candidate_epics: List[Tuple[int, float, str]]
    assignments: List[TaskAssignment] = field(default_factory=list)
    id_remap: Dict[str, str] = field(default_factory=dict)
    reference_updates: Dict[str, str] = field(default_factory=dict)
    unresolved_references: List[str] = field(default_factory=list)
    summary: str = ""
    detection_rationale: str = ""

    def to_dict(self) -> Dict:
        """Serialize for CLI JSON output."""
        return {
            "source_epic": self.source_epic,
            "is_split_candidate": self.is_split_candidate,
            "candidate_epics": [
                {"epic": e, "confidence": c, "match_type": m}
                for e, c, m in self.candidate_epics
            ],
            "assignments": [
                {
                    "source_id": a.source_id,
                    "target_id": a.target_id,
                    "confidence": a.confidence,
                    "rationale": a.rationale,
                    "signals": a.signals,
                    "tie_break": a.tie_break,
                }
                for a in self.assignments
            ],
            "id_remap": self.id_remap,
            "reference_updates": self.reference_updates,
            "unresolved_references": self.unresolved_references,
            "summary": self.summary,
            "detection_rationale": self.detection_rationale,
        }
