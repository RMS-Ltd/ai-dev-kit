"""
Kanban v3.2.0 packaged catalog — single source for fresh-install epic/story lists.

Ratified: docs/knowledge/analysis/kanban-v2/09-ultimate-canonical-kanban-structure-v3.md
Small tier: E01–E10 (FR/BR/UXR as E04:S02–S04 stories, not standalone epics).
"""

from __future__ import annotations

import re
from pathlib import Path
from typing import Dict, List, Sequence, Tuple

# v1 fresh list (pre-T27) — retained for fingerprint rejection only
V1_FRESH_EPICS = [1, 2, 3, 4, 5, 6, 7, 8, 10, 18, 22, 23]

# v3.2 Small tier — default for --mode fresh after E06:S09:T27
V32_FRESH_EPICS: List[int] = list(range(1, 11))

# Core stories installed alongside epics on fresh (epic, story)
V32_FRESH_STORIES: List[Tuple[int, int]] = [
    (1, 1),  # E01:S01 Perpetual Operations
    (2, 1),  # E02:S01 Workflow Definitions & Patterns
    (2, 2),  # E02:S02 Repository Bootstrap
    (4, 1),  # E04:S01 Board setup & governance
    (4, 2),  # E04:S02 FR Implementation (ex-v1 E05)
    (4, 3),  # E04:S03 BR Implementation (ex-v1 E06)
    (4, 4),  # E04:S04 UXR Implementation (ex-v1 E07)
]

# v3.2 primary epic template slugs under templates/epics/ (search order per epic)
V32_EPIC_TEMPLATE_SLUGS: Dict[int, str] = {
    1: "epic-01-Repository-Infrastructure-and-Maintenance",
    2: "epic-02-Workflow-Management",
    3: "epic-03-Versioning",
    4: "epic-04-Kanban-Framework",
    5: "epic-05-Project-Architecture",
    6: "epic-06-Documentation",
    7: "epic-07-Process-Automation-and-CICD",
    8: "epic-08-Testing-and-Quality-Assurance",
    9: "epic-09-Security",
    10: "epic-10-Code-Quality",
}

V1_FINGERPRINT_FAIL_PATTERNS = [
    re.compile(r"^#\s*Epic\s+5:\s*FR\s+Implementation\s*$", re.MULTILINE | re.IGNORECASE),
    re.compile(r"^#\s*Epic\s+6:\s*BR\s+Implementation\s*$", re.MULTILINE | re.IGNORECASE),
    re.compile(r"^#\s*Epic\s+7:\s*UXR", re.MULTILINE | re.IGNORECASE),
]

V32_REQUIRED_MARKERS = [
    ("epic-05", re.compile(r"Project\s+Architecture", re.IGNORECASE)),
    ("epic-04", re.compile(r"Kanban", re.IGNORECASE)),
]


def fresh_epic_list() -> List[int]:
    """Epic numbers installed by --mode fresh (v3.2 Small tier)."""
    return list(V32_FRESH_EPICS)


def assert_v32_fingerprint(kanban_path: Path) -> Tuple[bool, List[str]]:
    """
    Return (ok, errors) for post-fresh-install v3.2 catalog fingerprint.

    PASS: no v1 FR/BR/UXR standalone epic titles; E04:S02 story present.
    """
    kanban_path = Path(kanban_path)
    errors: List[str] = []

    for pattern in V1_FINGERPRINT_FAIL_PATTERNS:
        for epic_md in (kanban_path / "epics").rglob("epic-*.md"):
            if epic_md.is_file():
                text = epic_md.read_text(encoding="utf-8", errors="replace")
                if pattern.search(text):
                    errors.append(f"v1 catalog marker in {epic_md.relative_to(kanban_path)}")
                    break

    e05 = kanban_path / "epics" / "epic-05" / "epic-05.md"
    if e05.is_file():
        e05_text = e05.read_text(encoding="utf-8", errors="replace")
        if not re.search(r"Project\s+Architecture", e05_text, re.IGNORECASE):
            errors.append(f"E05 missing Project Architecture title: {e05}")
    else:
        errors.append(f"E05 epic doc missing: {e05}")

    fr_story = list((kanban_path / "epics" / "epic-04").glob("story-02*.md"))
    if not fr_story:
        errors.append("E04:S02 story missing under epics/epic-04/")
    else:
        fr_text = fr_story[0].read_text(encoding="utf-8", errors="replace")
        if not re.search(r"FR\s+Implementation", fr_text, re.IGNORECASE):
            errors.append(f"E04:S02 story missing FR Implementation marker: {fr_story[0]}")

    return (len(errors) == 0, errors)
