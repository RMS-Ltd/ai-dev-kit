"""
Kanban v3.5.0 packaged catalog — bootstrap stories E04–E08 + perpetual/task docs.

Ratified: docs/knowledge/analysis/kanban-v2/12-v35-catalog-delta-bootstrap-stories.md
"""

from __future__ import annotations

import re
from pathlib import Path
from typing import Dict, List, Tuple

from kanban_v34_catalog import V34_FRESH_EPICS, V34_EPIC_TEMPLATE_SLUGS  # noqa: F401

V35_FRESH_EPICS: List[int] = list(V34_FRESH_EPICS)

V35_FRESH_STORY_FILES: Dict[Tuple[int, int], str] = {
    (1, 1): "story-01-perpetual-operations.md",
    (1, 2): "story-02-versioning-and-release-numbering.md",
    (1, 3): "story-03-test-harness-and-gates.md",
    (2, 1): "story-01-Workflow-Definitions-and-Patterns.md",
    (2, 2): "story-02-repository-bootstrap.md",
    (3, 1): "story-01-Kanban-Board-Setup.md",
    (3, 2): "story-02-fr-implementation.md",
    (3, 3): "story-03-br-implementation.md",
    (3, 4): "story-04-uxr-implementation.md",
    (4, 1): "story-01-adr-scaffold-and-architecture-layout.md",
    (5, 1): "story-01-documentation-scaffold.md",
    (6, 1): "story-01-ci-cd-pipeline-scaffold.md",
    (7, 1): "story-01-security-baseline.md",
    (8, 1): "story-01-code-quality-scaffold.md",
    (8, 2): "story-02-review-and-upkeep.md",
}

V35_FRESH_STORIES: List[Tuple[int, int]] = list(V35_FRESH_STORY_FILES.keys())

# Stories that ship discrete task docs on fresh install (templates/tasks/epic-NN/story-NN/)
V35_FRESH_TASK_STORIES: List[Tuple[int, int]] = [
    (1, 1),
    (1, 2),
    (1, 3),
    (4, 1),
    (5, 1),
    (6, 1),
    (7, 1),
    (8, 1),
    (8, 2),
]

from kanban_v34_catalog import (  # noqa: E402
    V1_FINGERPRINT_FAIL_PATTERNS,
    V32_VERSIONING_EPIC_FAIL,
    V33_TESTING_EPIC_FAIL,
)

V35_EPIC_TEMPLATE_SLUGS = V34_EPIC_TEMPLATE_SLUGS


def fresh_epic_list() -> List[int]:
    return list(V35_FRESH_EPICS)


def _assert_v34_base(kanban_path: Path) -> List[str]:
    """v3.4 fingerprint checks (shared base for v3.5)."""
    kanban_path = Path(kanban_path)
    errors: List[str] = []

    for pattern in V1_FINGERPRINT_FAIL_PATTERNS:
        for epic_md in (kanban_path / "epics").rglob("epic-*.md"):
            if epic_md.is_file():
                text = epic_md.read_text(encoding="utf-8", errors="replace")
                if pattern.search(text):
                    errors.append(f"v1 catalog marker in {epic_md.relative_to(kanban_path)}")
                    break

    e03_epic = kanban_path / "epics" / "epic-03" / "epic-03.md"
    if e03_epic.is_file():
        e03_text = e03_epic.read_text(encoding="utf-8", errors="replace")
        if V32_VERSIONING_EPIC_FAIL.search(e03_text):
            errors.append(f"E03 is v3.2 Versioning epic (expected Kanban): {e03_epic}")
        if not re.search(r"Kanban", e03_text, re.IGNORECASE):
            errors.append(f"E03 missing Kanban marker: {e03_epic}")
    else:
        errors.append(f"E03 epic doc missing: {e03_epic}")

    e07_epic = kanban_path / "epics" / "epic-07" / "epic-07.md"
    if e07_epic.is_file():
        e07_text = e07_epic.read_text(encoding="utf-8", errors="replace")
        if V33_TESTING_EPIC_FAIL.search(e07_text):
            errors.append(f"E07 is v3.3 Testing epic (expected Security): {e07_epic}")
        if not re.search(r"Security", e07_text, re.IGNORECASE):
            errors.append(f"E07 missing Security marker: {e07_epic}")
    else:
        errors.append(f"E07 epic doc missing: {e07_epic}")

    e01_s02 = list((kanban_path / "epics" / "epic-01").glob("story-02*.md"))
    if not e01_s02:
        errors.append("E01:S02 story missing under epics/epic-01/")
    else:
        s02_text = e01_s02[0].read_text(encoding="utf-8", errors="replace")
        if not re.search(r"Versioning", s02_text, re.IGNORECASE):
            errors.append(f"E01:S02 missing Versioning marker: {e01_s02[0]}")

    e01_s03 = list((kanban_path / "epics" / "epic-01").glob("story-03*.md"))
    if not e01_s03:
        errors.append("E01:S03 story missing under epics/epic-01/")
    else:
        s03_text = e01_s03[0].read_text(encoding="utf-8", errors="replace")
        if not re.search(r"Test", s03_text, re.IGNORECASE):
            errors.append(f"E01:S03 missing Test marker: {e01_s03[0]}")

    fr_story = list((kanban_path / "epics" / "epic-03").glob("story-02*.md"))
    if not fr_story:
        errors.append("E03:S02 FR story missing under epics/epic-03/")
    else:
        fr_text = fr_story[0].read_text(encoding="utf-8", errors="replace")
        if not re.search(r"FR\s+Implementation", fr_text, re.IGNORECASE):
            errors.append(f"E03:S02 story missing FR Implementation marker: {fr_story[0]}")

    e04 = kanban_path / "epics" / "epic-04" / "epic-04.md"
    if e04.is_file():
        e04_text = e04.read_text(encoding="utf-8", errors="replace")
        if not re.search(r"Project\s+Architecture", e04_text, re.IGNORECASE):
            errors.append(f"E04 missing Project Architecture title: {e04}")
    else:
        errors.append(f"E04 epic doc missing: {e04}")

    e08 = kanban_path / "epics" / "epic-08" / "epic-08.md"
    if e08.is_file():
        e08_text = e08.read_text(encoding="utf-8", errors="replace")
        if not re.search(r"Code\s+Quality", e08_text, re.IGNORECASE):
            errors.append(f"E08 missing Code Quality title: {e08}")
    else:
        errors.append(f"E08 epic doc missing: {e08}")

    return errors


def assert_v35_fingerprint(kanban_path: Path) -> Tuple[bool, List[str]]:
    """Return (ok, errors) for post-fresh-install v3.5 catalog fingerprint."""
    kanban_path = Path(kanban_path)
    errors = _assert_v34_base(kanban_path)

    e05 = list((kanban_path / "epics" / "epic-05").glob("story-01*.md"))
    if not e05:
        errors.append("E05:S01 documentation scaffold story missing")
    elif not re.search(r"Documentation", e05[0].read_text(encoding="utf-8", errors="replace"), re.I):
        errors.append("E05:S01 missing Documentation marker")

    perp_tasks = list(
        (kanban_path / "epics" / "epic-01").glob("story-01-perpetual-operations/T*.md")
    )
    if not perp_tasks:
        errors.append("E01:S01 perpetual task docs missing (story-01-perpetual-operations/T*.md)")

    e05_tasks = list(
        (kanban_path / "epics" / "epic-05").glob("story-01-documentation-scaffold/T*.md")
    )
    if not e05_tasks:
        errors.append("E05:S01 task docs missing")

    bootstrap_s01 = [
        (4, "adr"),
        (6, "ci"),
        (7, "security"),
        (8, "scaffold"),
    ]
    for epic_num, marker in bootstrap_s01:
        en = f"{epic_num:02d}"
        stories = list((kanban_path / "epics" / f"epic-{en}").glob("story-01*.md"))
        if not stories:
            errors.append(f"E{epic_num:02d}:S01 bootstrap story missing")
        elif not re.search(marker, stories[0].read_text(encoding="utf-8", errors="replace"), re.I):
            errors.append(f"E{epic_num:02d}:S01 missing {marker} marker")

    e08_s01_tasks = list(
        (kanban_path / "epics" / "epic-08").glob("story-01-code-quality-scaffold/T*.md")
    )
    if not e08_s01_tasks:
        errors.append("E08:S01 CodeQL scaffold task docs missing")

    e08_s02 = list((kanban_path / "epics" / "epic-08").glob("story-02*.md"))
    if not e08_s02:
        errors.append("E08:S02 review and upkeep story missing")
    elif not re.search(r"review", e08_s02[0].read_text(encoding="utf-8", errors="replace"), re.I):
        errors.append("E08:S02 missing review marker")

    return (len(errors) == 0, errors)
