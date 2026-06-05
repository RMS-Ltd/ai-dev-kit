"""Static check: emit_install_error only uses registered codes (FR-108)."""

from __future__ import annotations

import importlib.util
import re
from pathlib import Path

_REPO = Path(__file__).resolve().parents[2]
_MOD_PATH = _REPO / "packages/frameworks/workflow-mgt/scripts/adk_install_errors.py"
_spec = importlib.util.spec_from_file_location("adk_install_errors", _MOD_PATH)
mod = importlib.util.module_from_spec(_spec)
assert _spec.loader is not None
_spec.loader.exec_module(mod)

EMIT_RE = re.compile(r'emit_install_error\s*\(\s*["\'](ADK-[^"\']+)["\']')
SCAN_PATHS = [
    _REPO / "packages/frameworks/workflow-mgt/scripts",
    _REPO / "packages/frameworks/kanban/scripts",
    _REPO / "cli",
]


def test_emit_install_error_literals_are_registered():
    registered = mod.registered_codes()
    found: set[str] = set()
    for root in SCAN_PATHS:
        for path in root.rglob("*.py"):
            if path.name in ("adk_install_errors.py", "generate_install_error_docs.py"):
                continue
            text = path.read_text(encoding="utf-8")
            for match in EMIT_RE.finditer(text):
                found.add(match.group(1))
    assert found, "expected at least one emit_install_error call in codebase"
    unknown = found - set(registered)
    assert not unknown, f"unregistered codes emitted: {unknown}"
