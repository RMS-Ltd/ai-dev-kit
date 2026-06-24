"""Tests for MWF delivery Phase 0 RW intent preflight (FR-137 / E02:S03:T13)."""

from __future__ import annotations

import importlib.util
import subprocess
import sys
from pathlib import Path

import pytest

_REPO = Path(__file__).resolve().parents[2]
_VALIDATION = _REPO / "packages" / "frameworks" / "workflow-mgt" / "scripts" / "validation"
_PREFLIGHT = _VALIDATION / "validate_mwf_delivery_preflight.py"
_VERSION = _REPO / "src" / "ai_dev_kit" / "version.py"


def _run_preflight(*args: str) -> subprocess.CompletedProcess[str]:
    cmd = [sys.executable, str(_PREFLIGHT), *args]
    return subprocess.run(cmd, capture_output=True, text=True, cwd=_REPO)


def _load_intent_mod():
    spec = importlib.util.spec_from_file_location(
        "validate_rw_task_intent",
        _VALIDATION / "validate_rw_task_intent.py",
    )
    mod = importlib.util.module_from_spec(spec)
    assert spec.loader is not None
    spec.loader.exec_module(mod)
    return mod


@pytest.fixture(scope="module")
def intent_mod():
    return _load_intent_mod()


def test_preflight_passes_with_art_on_mismatch(intent_mod):
    """AC2: --art on MWF preflight passes when version.py differs."""
    vc = intent_mod.get_version_components(_VERSION)
    assert vc is not None
    ve, vs, vt, _ = vc[1], vc[2], vc[3], vc[4]
    # Pick a task unlikely to match current version.py E:S:T
    other_epic = ve + 1 if ve < 23 else ve - 1
    token = f"E{other_epic}:S{vs:02d}:T{vt:02d}"
    proc = _run_preflight("--requested", token, "--art")
    assert proc.returncode == 0, proc.stdout + proc.stderr
    assert "proceed to MWF legs" in proc.stdout


def test_preflight_aborts_without_art_on_mismatch(intent_mod):
    """AC1: mismatch without --art aborts with delivery --art hint."""
    vc = intent_mod.get_version_components(_VERSION)
    assert vc is not None
    ve, vs, vt, _ = vc[1], vc[2], vc[3], vc[4]
    other_epic = ve + 1 if ve < 23 else ve - 1
    token = f"E{other_epic}:S{vs:02d}:T{vt:02d}"
    proc = _run_preflight("--requested", token)
    assert proc.returncode == 1, proc.stdout + proc.stderr
    assert "MWF ABORTED (preflight: RW intent)" in proc.stdout
    assert "delivery --art" in proc.stdout


def test_preflight_passes_when_version_aligns(intent_mod):
    """AC3: aligned version.py → exit 0 without --art."""
    vc = intent_mod.get_version_components(_VERSION)
    assert vc is not None
    ve, vs, vt, _ = vc[1], vc[2], vc[3], vc[4]
    token = f"E{ve}:S{vs:02d}:T{vt:02d}"
    proc = _run_preflight("--requested", token)
    assert proc.returncode == 0, proc.stdout + proc.stderr


def test_e03s02t15_style_scenario_documented():
    """AC5: regression scenario token documented in FR-137 / task."""
    fr137 = (_REPO / "docs/kanban/fbu/FR-137-mwf-delivery-rw-intent-preflight-art-forwarding.md").read_text()
    assert "E03:S02:T15" in fr137
    task = (
        _REPO
        / "docs/kanban/epics/epic-02/story-03-additional-workflows-and-examples"
        / "T13-mwf-delivery-rw-intent-preflight-fr137.md"
    ).read_text()
    assert "E03:S02:T15" in task
