#!/usr/bin/env python3
"""Append workflow trigger sections to .cursorrules (FR-135-F3)."""

from __future__ import annotations

from pathlib import Path
from typing import Iterable, List

FRAMEWORK_ROOT = Path(__file__).resolve().parent.parent
UKW_TEMPLATE = FRAMEWORK_ROOT / "cursorrules-ukw-trigger-section.md"
DELIVERY_TEMPLATE = FRAMEWORK_ROOT / "cursorrules-delivery-trigger-section.md"

MARKER_UKW = "UPDATE KANBAN WORKFLOW (UKW) TRIGGER"
MARKER_DELIVERY = "IMPLEMENTATION PLANNING (IPW)"


def _extract_body(template_path: Path) -> str:
    text = template_path.read_text(encoding="utf-8")
    # Skip YAML frontmatter if present
    if text.startswith("---"):
        end = text.find("---", 3)
        if end != -1:
            text = text[end + 3 :].lstrip("\n")
    return text.strip() + "\n"


def _has_marker(content: str, marker: str) -> bool:
    return marker in content


def append_sections(
    cursorrules_path: Path,
    *,
    include_ukw: bool,
    include_delivery: bool,
    dry_run: bool = False,
) -> List[str]:
    """Append missing trigger sections. Returns list of actions taken."""
    actions: List[str] = []
    if not cursorrules_path.is_file():
        return actions

    content = cursorrules_path.read_text(encoding="utf-8")
    additions: List[str] = []

    if include_ukw and UKW_TEMPLATE.is_file() and not _has_marker(content, MARKER_UKW):
        additions.append(_extract_body(UKW_TEMPLATE))
        actions.append("appended UKW trigger section")

    if include_delivery and DELIVERY_TEMPLATE.is_file() and not _has_marker(
        content, MARKER_DELIVERY
    ):
        additions.append(_extract_body(DELIVERY_TEMPLATE))
        actions.append("appended IPW/IDW/MWF delivery stubs")

    if not additions or dry_run:
        return actions

    new_content = content.rstrip() + "\n\n" + "\n\n".join(additions)
    cursorrules_path.write_text(new_content, encoding="utf-8")
    return actions


def bundle_for_trigger(trigger_bundle: str) -> tuple[bool, bool]:
    if trigger_bundle == "rw":
        return False, False
    if trigger_bundle == "rw_ukw":
        return True, False
    if trigger_bundle == "rw_ukw_delivery":
        return True, True
    return True, False
