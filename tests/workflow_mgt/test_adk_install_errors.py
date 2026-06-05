"""Tests for adk_install_errors module (FR-108)."""

from __future__ import annotations

import importlib.util
import re
import sys
from io import StringIO
from pathlib import Path

import pytest

_MOD_PATH = (
    Path(__file__).resolve().parents[2]
    / "packages"
    / "frameworks"
    / "workflow-mgt"
    / "scripts"
    / "adk_install_errors.py"
)
_spec = importlib.util.spec_from_file_location("adk_install_errors", _MOD_PATH)
mod = importlib.util.module_from_spec(_spec)
assert _spec.loader is not None
sys.modules["adk_install_errors"] = mod
_spec.loader.exec_module(mod)


def test_registry_version():
    assert re.match(r"\d+\.\d+\.\d+", mod.registry_version())


def test_is_registered_seed_codes():
    assert mod.is_registered("ADK-I03.E04")
    assert mod.is_registered("ADK-I01.S01")
    assert not mod.is_registered("ADK-I99.E99")


def test_format_banner_includes_code_and_summary():
    text = mod.format_banner("ADK-I03.E04")
    assert "ADK-I03.E04" in text
    assert "dependencies" in text.lower()


def test_emit_install_error_writes_stderr():
    buf = StringIO()
    mod.emit_install_error("ADK-I03.E04", file=buf)
    out = buf.getvalue()
    assert "ADK-I03.E04" in out
    assert "ERROR" in out


def test_build_result_extras():
    extras = mod.build_result_extras("ADK-I02.E01")
    assert extras["adk_error_code"] == "ADK-I02.E01"
    assert extras["error_registry_version"] == mod.registry_version()


def test_unregistered_code_raises():
    with pytest.raises(mod.InstallErrorCodeError):
        mod.get_code_entry("ADK-I99.E99")
