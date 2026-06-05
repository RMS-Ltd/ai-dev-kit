"""Troubleshooting appendix must match generate_install_error_docs output (FR-111)."""

from __future__ import annotations

import importlib.util
from pathlib import Path

_REPO = Path(__file__).resolve().parents[2]
_SCRIPTS = _REPO / "packages" / "frameworks" / "workflow-mgt" / "scripts"
_TROUBLESHOOTING = (
    _REPO
    / "docs"
    / "documentation"
    / "user-docs"
    / "framework-dependency-troubleshooting-guide.md"
)


def _load_generator():
    path = _SCRIPTS / "generate_install_error_docs.py"
    spec = importlib.util.spec_from_file_location("generate_install_error_docs", path)
    mod = importlib.util.module_from_spec(spec)
    assert spec.loader is not None
    spec.loader.exec_module(mod)
    return mod


def test_troubleshooting_adk_section_matches_generator():
    gen = _load_generator()
    expected = gen.render_markdown()
    guide = _TROUBLESHOOTING.read_text(encoding="utf-8")
    actual = gen.extract_marked_section(guide)
    assert actual == expected, (
        "troubleshooting ADK section drift — run generate_install_error_docs.py "
        "and update the marked block"
    )
