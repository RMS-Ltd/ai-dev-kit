"""
Contamination detector for Kanban installs in consumer projects.

E6:S01:T37 – Kanban Install Consumer Board Contamination

This module walks a consumer project's `docs/project-management/kanban/`
tree and classifies files as:

- template: canonical consumer templates that are expected after a clean install
- devkit_reference: ai-dev-kit reference material (allowed only in the framework repo)
- contaminated: dev-kit project/backlog artefacts that must not live in consumers
- unknown: files that don't match any rule
"""

from dataclasses import dataclass
from pathlib import Path
from typing import List, Literal


Classification = Literal["template", "devkit_reference", "contaminated", "unknown"]


@dataclass
class Finding:
    path: Path
    classification: Classification
    reason: str


CANONICAL_EPIC_PREFIXES = {
    "Epic-1": "Core",
    "Epic-2": "Workflow",
    "Epic-3": "Numbering",
    "Epic-4": "Kanban",
}


def scan_kanban_tree(root: Path) -> List[Finding]:
    """
    Scan the docs/project-management/kanban tree rooted at `root` and classify files.
    """
    findings: List[Finding] = []
    if not root.exists():
        return findings

    for path in root.rglob("*.md"):
        rel = path.relative_to(root)
        text = path.read_text(encoding="utf-8", errors="ignore")
        classification, reason = _classify_md(rel, text)
        findings.append(Finding(path=rel, classification=classification, reason=reason))

    return findings


def _classify_md(rel: Path, text: str) -> tuple[Classification, str]:
    rel_str = str(rel).replace("\\", "/")

    # Board file
    if rel_str.endswith("kboard.md"):
        if "AI Dev Kit – Kanban Board" in text:
            return "contaminated", "dev-kit board title present"
        return "template", "consumer board"

    # FR/BR repos – these should never live in consumer kanban trees
    if "/fr-br/" in rel_str:
        if "Bug Report:" in text or "Feature Request:" in text:
            return "contaminated", "FR/BR repo document"

    # Dev-kit epic/story patterns (Epic-5+, Epic-6 BR repo, etc.)
    if "Epic-6/Story-001-br-repo" in rel_str or "Story-006-feature-requests" in rel_str:
        return "contaminated", "dev-kit BR/FR repository story"

    # Canonical epic overviews (consumer templates)
    if rel_str.startswith("epics/Epic-"):
        # Epic overview
        parts = rel_str.split("/")
        if len(parts) >= 2 and parts[1].startswith("Epic-"):
            epic_dir = parts[1]
            if epic_dir in CANONICAL_EPIC_PREFIXES:
                return "template", "canonical consumer epic overview/template"
            # Higher-numbered epics are usually dev-kit-specific in consumers
            return "contaminated", "non-canonical epic copied from dev-kit"

    # Default
    return "unknown", "no matching contamination rule"

