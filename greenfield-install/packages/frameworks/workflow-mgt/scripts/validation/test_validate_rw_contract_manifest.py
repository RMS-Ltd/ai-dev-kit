"""Tests for validate_rw_contract_manifest (FR-122 Wave 4)."""

from __future__ import annotations

import sys
from pathlib import Path

import pytest

_val_dir = Path(__file__).resolve().parent
_pkg = _val_dir.parents[1]
if str(_val_dir) not in sys.path:
    sys.path.insert(0, str(_val_dir))

import validate_rw_contract_manifest as vrcm  # noqa: E402


def test_manifest_validates_against_package():
    ok, lines = vrcm.validate_rw_contract_manifest(pkg_root=_pkg)
    assert ok, lines
    assert any("OK" in line for line in lines)


def test_missing_manifest_fails(tmp_path):
    ok, lines = vrcm.validate_rw_contract_manifest(pkg_root=tmp_path)
    assert not ok
    assert any("missing" in line for line in lines)
