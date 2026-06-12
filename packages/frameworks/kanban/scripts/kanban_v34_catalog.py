"""
Kanban v3.4.0 packaged catalog — single source for fresh-install epic/story lists.

Ratified: docs/knowledge/analysis/kanban-v2/11-v34-catalog-delta-testing-under-e01s03.md
Small tier: E01–E08 (testing at E01:S03; E08–E09 renumbered to E07–E08).
"""

from __future__ import annotations

import re
from pathlib import Path
from typing import Dict, List, Tuple

# v1 / v3.2 / v3.3 — retained for fingerprint rejection only
V1_FRESH_EPICS = [1, 2, 3, 4, 5, 6, 7, 8, 10, 18, 22, 23]
V32_FRESH_EPICS: List[int] = list(range(1, 11))
V33_FRESH_EPICS: List[int] = list(range(1, 10))

V1_FINGERPRINT_FAIL_PATTERNS = [
    re.compile(r"^#\s*Epic\s+5:\s*FR\s+Implementation\s*$", re.MULTILINE | re.IGNORECASE),
    re.compile(r"^#\s*Epic\s+6:\s*BR\s+Implementation\s*$", re.MULTILINE | re.IGNORECASE),
    re.compile(r"^#\s*Epic\s+7:\s*UXR", re.MULTILINE | re.IGNORECASE),
]

V32_VERSIONING_EPIC_FAIL = re.compile(
    r"^#\s*Epic\s+3:\s*Numbering\s*&\s*Versioning", re.MULTILINE | re.IGNORECASE
)

# v3.4 Small tier — default for --mode fresh
V34_FRESH_EPICS: List[int] = list(range(1, 9))

V34_FRESH_STORY_FILES: Dict[Tuple[int, int], str] = {
    (1, 1): "story-01-perpetual-operations.md",
    (1, 2): "story-02-versioning-and-release-numbering.md",
    (1, 3): "story-03-test-harness-and-gates.md",
    (2, 1): "story-01-Workflow-Definitions-and-Patterns.md",
    (2, 2): "story-02-repository-bootstrap.md",
    (3, 1): "story-01-Kanban-Board-Setup.md",
    (3, 2): "story-02-fr-implementation.md",
    (3, 3): "story-03-br-implementation.md",
    (3, 4): "story-04-uxr-implementation.md",
}

V34_FRESH_STORIES: List[Tuple[int, int]] = [
    (1, 1),  # E01:S01 Perpetual Operations
    (1, 2),  # E01:S02 Versioning & release numbering
    (1, 3),  # E01:S03 Test harness & gates
    (2, 1),  # E02:S01 Workflow Definitions & Patterns
    (2, 2),  # E02:S02 Repository Bootstrap
    (3, 1),  # E03:S01 Board setup & governance
    (3, 2),  # E03:S02 FR Implementation
    (3, 3),  # E03:S03 BR Implementation
    (3, 4),  # E03:S04 UXR Implementation
]

V34_EPIC_TEMPLATE_SLUGS: Dict[int, str] = {
    1: "epic-01-Repository-Infrastructure-and-Maintenance",
    2: "epic-02-Workflow-Management",
    3: "epic-03-Kanban-Framework",
    4: "epic-04-Project-Architecture",
    5: "epic-05-Documentation",
    6: "epic-06-Process-Automation-and-CICD",
    7: "epic-07-Security",
    8: "epic-08-Code-Quality",
}

# v3.3 standalone Testing epic must not appear on fresh v3.4 installs
V33_TESTING_EPIC_FAIL = re.compile(
    r"^#\s*Epic\s+7:\s*Testing\s*&\s*Quality\s*Assurance",
    re.MULTILINE | re.IGNORECASE,
)


def fresh_epic_list() -> List[int]:
    """Epic numbers installed by --mode fresh (delegates to v3.5 catalog)."""
    from kanban_v35_catalog import fresh_epic_list as _v35_fresh_epic_list

    return _v35_fresh_epic_list()


def assert_v34_fingerprint(kanban_path: Path) -> Tuple[bool, List[str]]:
    """Return (ok, errors) for post-fresh-install catalog (delegates to v3.5)."""
    from kanban_v35_catalog import assert_v35_fingerprint

    return assert_v35_fingerprint(kanban_path)
