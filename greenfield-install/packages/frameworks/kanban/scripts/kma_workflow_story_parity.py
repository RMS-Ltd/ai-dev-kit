#!/usr/bin/env python3
"""
KMA workflow story parity — registry vs E02 TSP story shells (FR-143 / E06:S09:T44).

Compares workflow-registry.yaml entry count to unique E02 story headings in
TARGET-EST-TREE.md. Optional E02-WORKFLOW-STORY-MAP.md enriches rubric matching.
"""

from __future__ import annotations

import re
from dataclasses import dataclass, field
from pathlib import Path
from typing import Any, Dict, List, Optional, Set

import yaml

_E02_STORY_HEADING_RE = re.compile(
    r"^#{2,3}\s+E0?2[:\-]S(\d{1,3})\b", re.IGNORECASE | re.MULTILINE
)
_E02_TOKEN_RE = re.compile(
    r"\bE0?2[:\-]S(\d{1,3})[:\-]T", re.IGNORECASE
)
_STORY_MAP_ROW_RE = re.compile(
    r"^\|\s*S(\d{1,3})\s*\|\s*([^|]+)\|", re.IGNORECASE
)
_AMENDMENT_HOOK_RE = re.compile(
    r"^\s*amended:\s*(.+)$", re.IGNORECASE | re.MULTILINE
)

DEFAULT_WORKFLOW_EPIC = 2


@dataclass
class WorkflowRegistryInfo:
    workflow_keys: List[str] = field(default_factory=list)
    abbreviations: List[str] = field(default_factory=list)
    count: int = 0


@dataclass
class E02StoryInventory:
    story_numbers: Set[int] = field(default_factory=set)
    headings: Set[int] = field(default_factory=set)
    tokens: Set[int] = field(default_factory=set)

    @property
    def count(self) -> int:
        return len(self.story_numbers)


@dataclass
class WorkflowStoryMapInfo:
    story_numbers: Set[int] = field(default_factory=set)
    workflow_labels: List[str] = field(default_factory=list)
    amended_from: Optional[str] = None


def load_workflow_registry(path: Path) -> WorkflowRegistryInfo:
    with path.open(encoding="utf-8") as f:
        data = yaml.safe_load(f) or {}
    workflows = (data.get("workflow_registry") or data).get("workflows") or {}
    keys = sorted(workflows.keys())
    abbrevs: List[str] = []
    for key in keys:
        entry = workflows[key] or {}
        abbr = entry.get("abbreviation")
        if abbr:
            abbrevs.append(str(abbr).upper())
    return WorkflowRegistryInfo(
        workflow_keys=keys,
        abbreviations=abbrevs,
        count=len(keys),
    )


def parse_e02_stories_from_tsp_text(text: str) -> E02StoryInventory:
    inv = E02StoryInventory()
    for m in _E02_STORY_HEADING_RE.finditer(text):
        num = int(m.group(1))
        inv.headings.add(num)
        inv.story_numbers.add(num)
    for m in _E02_TOKEN_RE.finditer(text):
        num = int(m.group(1))
        inv.tokens.add(num)
        inv.story_numbers.add(num)
    return inv


def parse_e02_stories_from_tsp(path: Path) -> E02StoryInventory:
    return parse_e02_stories_from_tsp_text(
        path.read_text(encoding="utf-8", errors="replace")
    )


def parse_workflow_story_map(path: Path) -> WorkflowStoryMapInfo:
    text = path.read_text(encoding="utf-8", errors="replace")
    info = WorkflowStoryMapInfo()
    amend = _AMENDMENT_HOOK_RE.search(text)
    if amend:
        info.amended_from = amend.group(1).strip()
    for line in text.splitlines():
        m = _STORY_MAP_ROW_RE.match(line.strip())
        if not m:
            continue
        num = int(m.group(1))
        label = m.group(2).strip()
        if label.lower() in ("workflow", "story", "---"):
            continue
        info.story_numbers.add(num)
        info.workflow_labels.append(label)
    return info


def _normalize_label(label: str) -> str:
    return re.sub(r"[^a-z0-9]+", "", label.lower())


def compute_parity_score(
    registry: WorkflowRegistryInfo,
    e02: E02StoryInventory,
    story_map: Optional[WorkflowStoryMapInfo] = None,
) -> float:
    if registry.count == 0:
        return 1.0
    if story_map and story_map.story_numbers:
        # Story map rows should cover registry workflows (S15 bootstrap + S16 perpetual
        # are extras beyond registry count — score by registry floor).
        covered = min(len(story_map.story_numbers), registry.count)
        if len(story_map.story_numbers) >= registry.count:
            return 1.0
        return covered / registry.count
    if e02.count == 0:
        return 0.0
    return min(e02.count, registry.count) / registry.count


def check_workflow_story_parity(
    *,
    registry_path: Path,
    tsp_path: Path,
    story_map_path: Optional[Path] = None,
    mode: str = "guided",
) -> Dict[str, Any]:
    registry = load_workflow_registry(registry_path)
    e02 = parse_e02_stories_from_tsp(tsp_path)
    story_map = (
        parse_workflow_story_map(story_map_path) if story_map_path and story_map_path.is_file() else None
    )
    parity_score = compute_parity_score(registry, e02, story_map)
    gap = registry.count - e02.count
    map_covers_registry = bool(
        story_map and len(story_map.story_numbers) >= registry.count
    )

    messages: List[str] = []
    severity = "ok"
    if registry.count > e02.count and not map_covers_registry:
        severity = "major"
        messages.append(
            f"workflow-registry has {registry.count} workflows but TSP E02 has "
            f"{e02.count} story shell(s) (gap {gap})."
        )
        messages.append(
            "Add E02-WORKFLOW-STORY-MAP.md or expand TARGET-EST-TREE.md E02 headings "
            "(≥1 story per registry workflow)."
        )
    if story_map and story_map.amended_from:
        messages.append(f"TSP amended via hook: {story_map.amended_from}")

    blocking = mode in ("guided", "score", "score_only") and severity == "major"
    passed = severity == "ok" or map_covers_registry

    return {
        "mode": mode,
        "registry_path": str(registry_path),
        "tsp_path": str(tsp_path),
        "story_map_path": str(story_map_path) if story_map_path else None,
        "registry_count": registry.count,
        "registry_workflows": registry.workflow_keys,
        "registry_abbreviations": registry.abbreviations,
        "e02_story_count": e02.count,
        "e02_story_numbers": sorted(e02.story_numbers),
        "story_map_count": len(story_map.story_numbers) if story_map else 0,
        "parity_score": round(parity_score, 4),
        "gap": gap,
        "severity": severity,
        "passed": passed,
        "blocking": blocking,
        "messages": messages,
    }
