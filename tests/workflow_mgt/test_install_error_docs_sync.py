"""Troubleshooting appendix must match generate_install_error_docs output (FR-111)."""

from __future__ import annotations

import importlib.util
import sys
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
    adk_path = _SCRIPTS / "adk_install_errors.py"
    adk_spec = importlib.util.spec_from_file_location("adk_install_errors", adk_path)
    adk_mod = importlib.util.module_from_spec(adk_spec)
    assert adk_spec.loader is not None
    sys.modules["adk_install_errors"] = adk_mod
    adk_spec.loader.exec_module(adk_mod)

    path = _SCRIPTS / "generate_install_error_docs.py"
    spec = importlib.util.spec_from_file_location("generate_install_error_docs", path)
    mod = importlib.util.module_from_spec(spec)
    assert spec.loader is not None
    spec.loader.exec_module(mod)
    return mod


def test_adk_markers_are_mdx_safe():
    guide = _TROUBLESHOOTING.read_text(encoding="utf-8")
    assert "<!-- ADK-ERROR-CODES" not in guide, (
        "HTML comment ADK markers break Docusaurus MDX — use {/* ADK-ERROR-CODES:* */}"
    )


def test_troubleshooting_adk_section_matches_generator():
    gen = _load_generator()
    expected = gen.render_markdown()
    guide = _TROUBLESHOOTING.read_text(encoding="utf-8")
    actual = gen.extract_marked_section(guide)
    assert actual == expected, (
        "troubleshooting ADK section drift — run generate_install_error_docs.py "
        "and update the marked block"
    )
