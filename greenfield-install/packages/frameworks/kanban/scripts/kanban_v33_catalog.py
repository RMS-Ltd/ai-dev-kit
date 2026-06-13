"""
Kanban v3.3.0 catalog — superseded by v3.5 (kanban_v35_catalog.py).

Retained for brownfield fingerprint checks and import compatibility.
"""

from __future__ import annotations

from pathlib import Path
from typing import List, Tuple

from kanban_v34_catalog import (
    V34_EPIC_TEMPLATE_SLUGS,
    V34_FRESH_EPICS,
    V34_FRESH_STORIES,
    V34_FRESH_STORY_FILES,
    assert_v34_fingerprint,
)

V33_FRESH_EPICS = V34_FRESH_EPICS
V33_FRESH_STORIES = V34_FRESH_STORIES
V33_FRESH_STORY_FILES = V34_FRESH_STORY_FILES
V33_EPIC_TEMPLATE_SLUGS = V34_EPIC_TEMPLATE_SLUGS


def assert_v33_fingerprint(kanban_path: Path) -> Tuple[bool, List[str]]:
    """Delegate to v3.4 fingerprint."""
    return assert_v34_fingerprint(kanban_path)
