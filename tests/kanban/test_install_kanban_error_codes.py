"""Kanban installer error code helper (FR-108)."""

from __future__ import annotations

import importlib.util
import sys
from pathlib import Path

SCRIPT = (
    Path(__file__).resolve().parents[2]
    / "packages"
    / "frameworks"
    / "kanban"
    / "scripts"
    / "install_kanban_framework.py"
)


def _load_module():
    scripts_dir = SCRIPT.parent
    wf_scripts = scripts_dir.parents[1] / "workflow-mgt" / "scripts"
    for p in (str(wf_scripts), str(scripts_dir)):
        if p not in sys.path:
            sys.path.insert(0, p)
    spec = importlib.util.spec_from_file_location("install_kanban_framework", SCRIPT)
    mod = importlib.util.module_from_spec(spec)
    assert spec.loader is not None
    spec.loader.exec_module(mod)
    return mod


def test_kanban_failure_code_contamination():
    mod = _load_module()
    assert mod._kanban_failure_code(["contaminated Kanban file"]) == "ADK-I02.E08"
    assert mod._kanban_failure_code(["other error"]) == "ADK-I02.E01"
