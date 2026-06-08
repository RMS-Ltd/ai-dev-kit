"""Tests for Phase 1 UK/US locale content corpus (E21:S01:T04 / FR-006)."""

import re
from pathlib import Path

import pytest
import yaml

REPO_ROOT = Path(__file__).resolve().parent.parent
KANBAN_LOCALES = REPO_ROOT / "packages" / "frameworks" / "kanban" / "locales"
WF_LOCALES = REPO_ROOT / "packages" / "frameworks" / "workflow-mgt" / "locales"
CANONICAL_FR = REPO_ROOT / "packages" / "frameworks" / "kanban" / "templates" / "FR_TEMPLATE.md"

LOCALES = ("en-GB", "en-US")
TEMPLATE_KEYS = ("fr", "br", "uxr", "fb", "task", "story", "epic", "plan_doc")


@pytest.fixture
def kanban_manifest():
    with open(KANBAN_LOCALES / "manifest.yaml", encoding="utf-8") as handle:
        return yaml.safe_load(handle)


@pytest.fixture
def wf_manifest():
    with open(WF_LOCALES / "manifest.yaml", encoding="utf-8") as handle:
        return yaml.safe_load(handle)


def _headings(text: str) -> list[str]:
    return [line.strip() for line in text.splitlines() if line.startswith("#")]


def test_t1_manifest_keys_both_locales(kanban_manifest):
    """T1: Every seed key present under both en-GB and en-US."""
    for locale in LOCALES:
        templates = kanban_manifest["locales"][locale]["templates"]
        for key in TEMPLATE_KEYS:
            assert key in templates, f"missing {key} in {locale}"


def test_t2_manifest_paths_exist(kanban_manifest):
    """T2: Referenced paths exist on disk."""
    for locale in LOCALES:
        locale_root = KANBAN_LOCALES / locale
        for rel in kanban_manifest["locales"][locale]["templates"].values():
            assert (locale_root / rel).is_file(), f"{locale}/{rel}"
        setup = kanban_manifest["locales"][locale]["docs"]["setup_index"]
        assert (locale_root / setup).is_file()


def test_t3_en_gb_uk_markers():
    """T3: en-GB FR_TEMPLATE contains UK marker tokens."""
    text = (KANBAN_LOCALES / "en-GB" / "templates" / "FR_TEMPLATE.md").read_text(
        encoding="utf-8"
    )
    assert re.search(r"colour|organise", text, re.IGNORECASE)


def test_t4_en_us_us_markers():
    """T4: en-US FR_TEMPLATE contains US marker tokens."""
    text = (KANBAN_LOCALES / "en-US" / "templates" / "FR_TEMPLATE.md").read_text(
        encoding="utf-8"
    )
    assert re.search(r"color|organize", text, re.IGNORECASE)


def test_t5_template_heading_parity():
    """T5: en-GB/en-US pairs share same section headings."""
    for name in (
        "FR_TEMPLATE.md",
        "BR_TEMPLATE.md",
        "TASK_TEMPLATE.md",
    ):
        gb = (KANBAN_LOCALES / "en-GB" / "templates" / name).read_text(encoding="utf-8")
        us = (KANBAN_LOCALES / "en-US" / "templates" / name).read_text(encoding="utf-8")
        assert _headings(gb) == _headings(us), name


def test_t6_workflow_scaffolds_both_locales(wf_manifest):
    """T6: Workflow-mgt locale scaffolds exist for both locales."""
    for locale in LOCALES:
        locale_root = WF_LOCALES / locale
        for rel in wf_manifest["locales"][locale]["scaffolds"].values():
            assert (locale_root / rel).is_file(), f"{locale}/{rel}"


def test_t7_canonical_fr_unchanged():
    """T7: Canonical FR_TEMPLATE.md unchanged (fallback preserved)."""
    canonical = CANONICAL_FR.read_text(encoding="utf-8")
    assert "**Locale (en-GB):**" not in canonical
    assert "**Locale (en-US):**" not in canonical
