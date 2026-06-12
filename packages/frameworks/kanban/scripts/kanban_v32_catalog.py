"""
Kanban v3.2.0 catalog — superseded by v3.3 (kanban_v33_catalog.py).

Retained for brownfield fingerprint checks and import compatibility.
"""

from __future__ import annotations

import re
from pathlib import Path
from typing import List, Tuple

from kanban_v34_catalog import assert_v34_fingerprint, fresh_epic_list
from kanban_v33_catalog import (  # noqa: F401
    V1_FRESH_EPICS,
    V33_FRESH_EPICS,
    V33_FRESH_STORIES,
    V33_EPIC_TEMPLATE_SLUGS,
    V34_FRESH_EPICS,
    V1_FINGERPRINT_FAIL_PATTERNS,
    assert_v33_fingerprint,
)

# v3.2 names — alias v3.4 for callers not yet updated
V32_FRESH_EPICS = V34_FRESH_EPICS
V32_FRESH_STORIES = V33_FRESH_STORIES
V32_EPIC_TEMPLATE_SLUGS = V33_EPIC_TEMPLATE_SLUGS

V32_REQUIRED_MARKERS = [
    ("epic-04", re.compile(r"Project\s+Architecture", re.IGNORECASE)),
    ("epic-03", re.compile(r"Kanban", re.IGNORECASE)),
]


def assert_v32_fingerprint(kanban_path: Path) -> Tuple[bool, List[str]]:
    """Delegate to v3.4 fingerprint."""
    return assert_v34_fingerprint(kanban_path)
