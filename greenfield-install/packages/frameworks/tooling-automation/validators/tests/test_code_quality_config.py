"""Tests for CQG config and CodeQL suite resolution."""

from __future__ import annotations

import sys
from pathlib import Path

_VALIDATORS = Path(__file__).resolve().parents[1]
if str(_VALIDATORS) not in sys.path:
    sys.path.insert(0, str(_VALIDATORS))

from code_quality.config import resolve_query_pack_spec  # noqa: E402


def test_security_and_quality_maps_to_python_qls():
    spec = resolve_query_pack_spec("python", "security-and-quality")
    assert spec == "codeql/python-queries:codeql-suites/python-security-and-quality.qls"


def test_explicit_qls_passthrough():
    spec = resolve_query_pack_spec("python", "python-code-scanning.qls")
    assert spec == "codeql/python-queries:codeql-suites/python-code-scanning.qls"
