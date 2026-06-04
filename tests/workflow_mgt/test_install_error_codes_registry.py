"""Registry integrity tests for install-error-codes.yaml (FR-108)."""

from __future__ import annotations

import re
from pathlib import Path

import pytest
import yaml

REGISTRY_PATH = (
    Path(__file__).resolve().parents[2]
    / "packages"
    / "frameworks"
    / "workflow-mgt"
    / "config"
    / "install-error-codes.yaml"
)
CODE_RE = re.compile(r"^ADK-[IVR]\d{2}(\.[A-Z]\d{2})+(:[WR]\d{2})?$")
FR_BR_ROOT = Path(__file__).resolve().parents[2] / "docs" / "project-management" / "kanban" / "fr-br"


@pytest.fixture
def registry():
    data = yaml.safe_load(REGISTRY_PATH.read_text(encoding="utf-8"))
    assert isinstance(data, dict)
    return data


def test_registry_has_processes_i01_through_i04(registry):
    processes = registry.get("processes") or {}
    for pid in ("I01", "I02", "I03", "I04"):
        assert pid in processes


def test_all_code_keys_match_pattern(registry):
    codes = registry.get("codes") or {}
    assert len(codes) >= 8
    for key in codes:
        assert CODE_RE.match(key), f"invalid code key: {key}"


def test_see_also_references_exist(registry):
    codes = registry.get("codes") or {}
    for key, entry in codes.items():
        for ref in entry.get("see_also") or []:
            if ref.startswith("ADK-"):
                assert ref in codes
                continue
            # BR-082 or FR-080 style
            matches = list(FR_BR_ROOT.glob(f"{ref}*.md"))
            assert matches, f"{key} see_also missing doc for {ref}"
