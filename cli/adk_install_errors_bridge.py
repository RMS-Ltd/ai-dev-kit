"""Bridge to adk_install_errors for CLI install telemetry (FR-108)."""

from __future__ import annotations

import sys
from pathlib import Path
from typing import Any, Dict, Optional

_MODULE = None


def _candidate_script_dirs() -> list[Path]:
    here = Path(__file__).resolve()
    repo_root = here.parents[1]
    dirs = [repo_root / "packages" / "frameworks" / "workflow-mgt" / "scripts"]
    cwd = Path.cwd()
    for base in (cwd, repo_root):
        if (base / "rw-config.yaml").is_file():
            candidate = base / "packages" / "frameworks" / "workflow-mgt" / "scripts"
            if candidate not in dirs:
                dirs.append(candidate)
    return dirs


def _load_module():
    global _MODULE
    if _MODULE is not None:
        return _MODULE
    for scripts_dir in _candidate_script_dirs():
        module_path = scripts_dir / "adk_install_errors.py"
        if not module_path.is_file():
            continue
        scripts_str = str(scripts_dir)
        if scripts_str not in sys.path:
            sys.path.insert(0, scripts_str)
        import adk_install_errors  # type: ignore[import-untyped]

        _MODULE = adk_install_errors
        return _MODULE
    raise ImportError("adk_install_errors module not found")


def build_result_extras(code: str) -> Dict[str, str]:
    return _load_module().build_result_extras(code)


def emit_install_error(code: str, *, detail: Optional[str] = None, file=None) -> None:
    return _load_module().emit_install_error(code, detail=detail, file=file)


def registry_version() -> str:
    return _load_module().registry_version()


def merge_error_into_event(event: Dict[str, Any], code: str) -> Dict[str, Any]:
    """Attach FR-108 fields to event_contract.result when status is error/failed."""
    extras = build_result_extras(code)
    result = dict(event.get("result") or {})
    status = str(result.get("status", "")).lower()
    if status in ("error", "failed"):
        result.update(extras)
    event = dict(event)
    event["result"] = result
    return event
