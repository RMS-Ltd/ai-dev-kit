#!/usr/bin/env python3
"""
Install/setup UX version display (UXR-016 / E06:S09:T15).

Resolves AI Dev Kit internal version to external SemVer for interactive
install and setup feedback. Read-only conversion (finalize=False).
"""

from __future__ import annotations

import importlib.util
import re
import sys
from dataclasses import dataclass
from functools import lru_cache
from pathlib import Path
from typing import Optional, Tuple

UNKNOWN_LABEL = "AI Dev Kit (version unknown)"

_SCRIPTS_DIR = Path(__file__).resolve().parent
_VERSION_DIR = _SCRIPTS_DIR / "version"
if str(_VERSION_DIR) not in sys.path:
    sys.path.insert(0, str(_VERSION_DIR))

try:
    import yaml
except ImportError:
    yaml = None  # type: ignore[assignment,misc]

from rw_config_loader import load_rw_config_from_path

try:
    from semver_converter import convert_version_string
except ImportError:
    convert_version_string = None  # type: ignore[assignment,misc]


@dataclass(frozen=True)
class InstallVersionInfo:
    internal: Optional[str]
    semver: Optional[str]
    label: str


def _walk_up_for_file(start: Path, name: str, *, max_depth: int = 32) -> Optional[Path]:
    current = start.resolve()
    for _ in range(max_depth):
        candidate = current / name
        if candidate.is_file():
            return candidate
        if current.parent == current:
            break
        current = current.parent
    return None


def _load_rw_config(project_root: Path) -> Optional[dict]:
    cfg_path = _walk_up_for_file(project_root, "rw-config.yaml")
    if cfg_path is None:
        return None
    return load_rw_config_from_path(cfg_path)


def _read_version_string_from_file(version_file: Path) -> Optional[str]:
    if not version_file.is_file():
        return None
    try:
        spec = importlib.util.spec_from_file_location("adk_version_module", version_file)
        if spec is None or spec.loader is None:
            raise ImportError("unable to load version module")
        mod = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(mod)
        version_string = getattr(mod, "VERSION_STRING", None)
        if version_string:
            return str(version_string)
    except Exception as _suppressed_exc:
        del _suppressed_exc
    try:
        content = version_file.read_text(encoding="utf-8")
    except OSError:
        return None
    match = re.search(
        r"VERSION_RC\s*=\s*(\d+).*?VERSION_EPIC\s*=\s*(\d+).*?"
        r"VERSION_STORY\s*=\s*(\d+).*?VERSION_TASK\s*=\s*(\d+).*?"
        r"VERSION_BUILD\s*=\s*(\d+)",
        content,
        re.DOTALL,
    )
    if match:
        return (
            f"{match.group(1)}.{match.group(2)}.{match.group(3)}."
            f"{match.group(4)}+{match.group(5)}"
        )
    return None


def _load_internal_from_rw_config(project_root: Path) -> Optional[str]:
    config = _load_rw_config(project_root)
    version_rel = config.get("version_file") if config else None
    if not version_rel:
        return None
    version_file = project_root / str(version_rel)
    if not version_file.is_file():
        cfg_path = _walk_up_for_file(project_root, "rw-config.yaml")
        if cfg_path is not None:
            version_file = cfg_path.parent / str(version_rel)
    return _read_version_string_from_file(version_file)


def _load_internal_from_cli_package() -> Optional[str]:
    try:
        from cli import __version__ as cli_version  # type: ignore[import-untyped]

        if cli_version:
            return str(cli_version)
    except Exception as _suppressed_exc:
        del _suppressed_exc
    return None


def _find_registry_root(start: Path) -> Path:
    cfg = _walk_up_for_file(start, "rw-config.yaml")
    if cfg is not None:
        return cfg.parent
    reg = _walk_up_for_file(start, "semver-registry.yaml")
    if reg is not None:
        return reg.parent
    return start.resolve()


def _convert_to_semver(internal: str, project_root: Path) -> Optional[str]:
    if convert_version_string is None or not internal:
        return None
    registry_root = _find_registry_root(project_root)
    previous_cwd = Path.cwd()
    try:
        import os

        os.chdir(registry_root)
        return convert_version_string(internal, finalize=False)
    except Exception:
        return None
    finally:
        try:
            import os

            os.chdir(previous_cwd)
        except Exception as _suppressed_exc:
            del _suppressed_exc
def _resolve_internal(project_root: Optional[Path]) -> Optional[str]:
    start = (project_root or Path.cwd()).resolve()
    internal = _load_internal_from_rw_config(start)
    if internal:
        return internal
    return _load_internal_from_cli_package()


@lru_cache(maxsize=8)
def _resolve_cached(project_root_key: str, verbose: bool) -> InstallVersionInfo:
    project_root = Path(project_root_key) if project_root_key else Path.cwd()
    internal = _resolve_internal(project_root)
    semver: Optional[str] = None
    if internal:
        semver = _convert_to_semver(internal, project_root)
    if semver:
        label = f"AI Dev Kit v{semver}"
        if verbose and internal:
            label = f"{label} (internal: {internal})"
    else:
        label = UNKNOWN_LABEL
    return InstallVersionInfo(internal=internal, semver=semver, label=label)


def resolve_install_adk_version(
    project_root: Optional[Path] = None,
    *,
    verbose: bool = False,
) -> InstallVersionInfo:
    key = str((project_root or Path.cwd()).resolve())
    return _resolve_cached(key, verbose)


def format_session_banner(info: InstallVersionInfo, *, verbose: bool = False) -> str:
    if verbose and info.semver and info.internal:
        return f"AI Dev Kit v{info.semver} (internal: {info.internal})"
    return info.label


def format_section_header(title: str, info: InstallVersionInfo) -> str:
    return f"[{info.label}] {title}"


def print_legacy_framework_layout_warning(
    frameworks_root: Optional[Path] = None,
    *,
    project_root: Optional[Path] = None,
    file=None,
) -> bool:
    """Print UXR-016 A2 warning when legacy framework directory names exist. Returns True if warned."""
    import sys

    try:
        from framework_install_slug import (
            detect_legacy_framework_dir_names,
            format_legacy_framework_dirs_warning,
        )
    except ImportError:
        return False

    root = frameworks_root
    if root is None:
        base = (project_root or Path.cwd()).resolve()
        root = base / "packages" / "frameworks"
        if not root.is_dir():
            return False
    if not detect_legacy_framework_dir_names(root):
        return False
    msg = format_legacy_framework_dirs_warning(root)
    if msg:
        print(msg, file=file or sys.stderr)
    return True


def print_session_banner(
    project_root: Optional[Path] = None,
    *,
    verbose: bool = False,
    file=None,
) -> InstallVersionInfo:
    import sys

    out = file or sys.stdout
    info = resolve_install_adk_version(project_root, verbose=verbose)
    print(format_session_banner(info, verbose=verbose), file=out)
    frameworks_root = (project_root or Path.cwd()).resolve() / "packages" / "frameworks"
    if frameworks_root.is_dir():
        print_legacy_framework_layout_warning(
            frameworks_root=frameworks_root,
            file=sys.stderr,
        )
    return info


def print_section_header(
    title: str,
    project_root: Optional[Path] = None,
    *,
    verbose: bool = False,
    file=None,
) -> None:
    import sys

    out = file or sys.stdout
    info = resolve_install_adk_version(project_root, verbose=verbose)
    print(format_section_header(title, info), file=out)


def version_fields(info: InstallVersionInfo) -> Tuple[Optional[str], Optional[str]]:
    """Return (adk_semver, adk_internal_version) for telemetry payloads."""
    return info.semver, info.internal


def clear_version_cache() -> None:
    """Test helper — reset per-process resolver cache."""
    _resolve_cached.cache_clear()
