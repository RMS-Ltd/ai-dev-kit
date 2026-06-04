"""RW installer emits ADK error codes (FR-108)."""

from __future__ import annotations

import importlib.util
import sys
from io import StringIO
from pathlib import Path
from unittest.mock import patch

import pytest

SCRIPT = (
    Path(__file__).resolve().parents[1]
    / "packages"
    / "frameworks"
    / "workflow-mgt"
    / "scripts"
    / "install_release_workflow.py"
)


def _load_module():
    spec = importlib.util.spec_from_file_location("install_release_workflow", SCRIPT)
    mod = importlib.util.module_from_spec(spec)
    assert spec.loader is not None
    sys.modules["install_release_workflow"] = mod
    spec.loader.exec_module(mod)
    return mod


def test_require_dependencies_emits_adk_i03_e04():
    mod = _load_module()
    stderr = StringIO()
    with patch.object(mod, "check_dependencies", return_value=(False, ["pyyaml"])):
        with patch.object(mod.sys, "stderr", stderr):
            with pytest.raises(SystemExit) as exc:
                mod.require_dependencies()
    assert exc.value.code == 1
    assert "ADK-I03.E04" in stderr.getvalue()
