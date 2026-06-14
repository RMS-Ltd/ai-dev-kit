#!/usr/bin/env python3
"""Validate Kanban v4 epic/story template completeness against kanban_v4_catalog.py."""

from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path

_SCRIPT_DIR = Path(__file__).resolve().parent
if str(_SCRIPT_DIR) not in sys.path:
    sys.path.insert(0, str(_SCRIPT_DIR))

from kanban_v4_catalog import (  # noqa: E402
    V4_EPICS,
    V4_TEMPLATE_ROOT,
    epic_template_dir,
)

EPIC_SECTIONS = (
    "## Purpose",
    "## Scope",
    "## Excludes / wrong homes",
    "## Overview",
    "## Stories",
    "## Dependencies",
    "## References",
)

STORY_SECTIONS = (
    "## Overview",
    "## Goals",
    "## Acceptance criteria",
    "## Out of scope",
    "## Dependencies",
    "## References",
)

ALLOWED_PLACEHOLDERS = frozenset(
    {
        "PROJECT_NAME",
        "REPO_ROOT",
        "KANBAN_ROOT",
        "DOMAIN_NAME",
        "domain-slug",
        "PRIMARY_LOCALE",
        "HOSTING_PLATFORM",
        "REGULATORY_REGIME",
    }
)

PLACEHOLDER_RE = re.compile(r"\{([A-Za-z0-9_-]+)\}")


def _unknown_placeholders(text: str) -> list[str]:
    bad = []
    for m in PLACEHOLDER_RE.finditer(text):
        token = m.group(1)
        if token not in ALLOWED_PLACEHOLDERS and not token.startswith("YYYY"):
            bad.append(token)
    return bad


def validate_v4_templates(*, strict: bool = False) -> list[str]:
    errors: list[str] = []
    if not V4_TEMPLATE_ROOT.is_dir():
        return ["v4 template root missing: " + str(V4_TEMPLATE_ROOT)]

    for epic in V4_EPICS:
        epic_dir = epic_template_dir(epic)
        epic_path = epic_dir / f"epic-{epic.epic_num:02d}.md"
        if not epic_path.is_file():
            errors.append(f"Missing epic template: {epic_path.relative_to(V4_TEMPLATE_ROOT)}")
            continue
        epic_text = epic_path.read_text(encoding="utf-8")
        for sec in EPIC_SECTIONS:
            if sec not in epic_text:
                errors.append(f"{epic_path.name}: missing section {sec}")
        if "{PROJECT_NAME}" not in epic_text:
            errors.append(f"{epic_path.name}: missing {{PROJECT_NAME}} in narrative")
        for bad in _unknown_placeholders(epic_text):
            errors.append(f"{epic_path.name}: unknown placeholder {{{bad}}}")

        for story in epic.stories:
            sp = epic_dir / "stories" / f"story-{story.story_num:02d}-{story.story_slug}.md"
            if not sp.is_file():
                errors.append(f"Missing story template: {sp.relative_to(V4_TEMPLATE_ROOT)}")
                continue
            st = sp.read_text(encoding="utf-8")
            for sec in STORY_SECTIONS:
                if sec not in st:
                    errors.append(f"{sp.name}: missing section {sec}")
            if "{PROJECT_NAME}" not in st:
                errors.append(f"{sp.name}: missing {{PROJECT_NAME}} in Overview")
            for bad in _unknown_placeholders(st):
                errors.append(f"{sp.name}: unknown placeholder {{{bad}}}")

    return errors


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--strict", action="store_true")
    args = parser.parse_args()
    errors = validate_v4_templates(strict=args.strict)
    if errors:
        for e in errors:
            print(e, file=sys.stderr)
        return 1
    print("validate_v4_template_completeness: OK")
    return 0


if __name__ == "__main__":
    sys.exit(main())
