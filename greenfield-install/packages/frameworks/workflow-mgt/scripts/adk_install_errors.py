#!/usr/bin/env python3
"""
Install/setup error code registry and emission (FR-108 / ADR-016).

Loads packages/frameworks/workflow-mgt/config/install-error-codes.yaml
and provides stderr banners plus FR-078 result extras.
"""

from __future__ import annotations

import re
import sys
from functools import lru_cache
from pathlib import Path
from typing import Any, Dict, Optional, TextIO

try:
    import yaml
except ImportError:
    yaml = None  # type: ignore[assignment,misc]

_CODE_PATTERN = re.compile(
    r"^ADK-[IVR]\d{2}(\.[A-Z]\d{2})+(:[WR]\d{2})?$"
)

_CONFIG_NAME = "install-error-codes.yaml"
_SCRIPTS_DIR = Path(__file__).resolve().parent
_CONFIG_PATH = _SCRIPTS_DIR.parent / "config" / _CONFIG_NAME


class InstallErrorCodeError(ValueError):
    """Raised when an unknown or malformed ADK error code is used."""


@lru_cache(maxsize=1)
def load_registry() -> Dict[str, Any]:
    if yaml is None:
        raise InstallErrorCodeError(
            "PyYAML is required to load install error codes. pip install 'pyyaml>=6.0'"
        )
    if not _CONFIG_PATH.is_file():
        raise InstallErrorCodeError(f"Registry not found: {_CONFIG_PATH}")
    with _CONFIG_PATH.open(encoding="utf-8") as fh:
        data = yaml.safe_load(fh)
    if not isinstance(data, dict):
        raise InstallErrorCodeError("Registry root must be a mapping")
    return data


def registry_version() -> str:
    return str(load_registry().get("registry_version") or "0.0.0")


def normalize_code(code: str) -> str:
    code = code.strip()
    if not _CODE_PATTERN.match(code):
        raise InstallErrorCodeError(f"Malformed install error code: {code!r}")
    return code


def is_registered(code: str) -> bool:
    try:
        code = normalize_code(code)
    except InstallErrorCodeError:
        return False
    codes = load_registry().get("codes") or {}
    return code in codes


def get_code_entry(code: str) -> Dict[str, Any]:
    code = normalize_code(code)
    codes = load_registry().get("codes") or {}
    entry = codes.get(code)
    if not isinstance(entry, dict):
        raise InstallErrorCodeError(f"Unregistered install error code: {code}")
    return entry


def format_banner(code: str, *, detail: Optional[str] = None) -> str:
    entry = get_code_entry(code)
    summary = str(entry.get("summary") or "Install error")
    line = f"ERROR [{code}] {summary}"
    if detail:
        line = f"{line} — {detail}"
    remediation = entry.get("remediation") or []
    if remediation:
        line = f"{line}\n  → {remediation[0]}"
    return line


def emit_install_error(
    code: str,
    *,
    detail: Optional[str] = None,
    file: Optional[TextIO] = None,
) -> None:
    """Print canonical stderr banner for a registered ADK install error code."""
    out = file or sys.stderr
    print(format_banner(code, detail=detail), file=out)


def build_result_extras(code: str) -> Dict[str, str]:
    """FR-078 optional fields for event_contract.result on failure."""
    code = normalize_code(code)
    if not is_registered(code):
        raise InstallErrorCodeError(f"Unregistered install error code: {code}")
    return {
        "adk_error_code": code,
        "error_registry_version": registry_version(),
    }


def registered_codes() -> frozenset[str]:
    codes = load_registry().get("codes") or {}
    return frozenset(str(k) for k in codes.keys())
