"""
Bridge to install_ux_version for CLI commands (UXR-016).

Locates packages/frameworks/workflow-mgt/scripts/install_ux_version.py
relative to the repository root or an installed framework tree.
"""

from __future__ import annotations

import sys
from pathlib import Path
from typing import TYPE_CHECKING, Optional

if TYPE_CHECKING:
    pass  # pragma: no cover

_MODULE = None


def _candidate_script_dirs() -> list[Path]:
    here = Path(__file__).resolve()
    repo_root = here.parents[1]
    dirs = [
        repo_root / "packages" / "frameworks" / "workflow-mgt" / "scripts",
    ]
    cwd = Path.cwd()
    for base in (cwd, repo_root):
        cfg = base / "rw-config.yaml"
        if cfg.is_file():
            dirs.append(base / "packages" / "frameworks" / "workflow-mgt" / "scripts")
    return dirs


def _load_install_ux_version():
    global _MODULE
    if _MODULE is not None:
        return _MODULE
    for scripts_dir in _candidate_script_dirs():
        module_path = scripts_dir / "install_ux_version.py"
        if not module_path.is_file():
            continue
        scripts_str = str(scripts_dir)
        if scripts_str not in sys.path:
            sys.path.insert(0, scripts_str)
        import install_ux_version  # type: ignore[import-untyped]

        _MODULE = install_ux_version
        return _MODULE
    raise ImportError("install_ux_version module not found")


def resolve_install_adk_version(project_root: Optional[Path] = None, *, verbose: bool = False):
    return _load_install_ux_version().resolve_install_adk_version(project_root, verbose=verbose)


def print_session_banner(project_root: Optional[Path] = None, *, verbose: bool = False, file=None):
    return _load_install_ux_version().print_session_banner(project_root, verbose=verbose, file=file)


def print_legacy_framework_layout_warning(
    frameworks_root: Optional[Path] = None,
    *,
    project_root: Optional[Path] = None,
    file=None,
) -> bool:
    return _load_install_ux_version().print_legacy_framework_layout_warning(
        frameworks_root=frameworks_root,
        project_root=project_root,
        file=file,
    )


def print_section_header(title: str, project_root: Optional[Path] = None, *, verbose: bool = False, file=None):
    return _load_install_ux_version().print_section_header(title, project_root, verbose=verbose, file=file)


def version_fields(info) -> tuple:
    return _load_install_ux_version().version_fields(info)


def get_cli_version_string(project_root: Optional[Path] = None) -> str:
    info = resolve_install_adk_version(project_root)
    if info.semver:
        return f"ai-dev-kit v{info.semver}"
    return info.label
