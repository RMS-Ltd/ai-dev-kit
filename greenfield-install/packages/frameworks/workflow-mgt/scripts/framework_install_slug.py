"""
Canonical on-disk directory names for framework packages (adopter installs).

Source tree under ai-dev-kit may use legacy names with spaces and '&';
release archives and consumer projects must use lowercase hyphenated slugs.
"""

from __future__ import annotations

import re
from pathlib import Path
from typing import Dict, List

# Legacy maintainer source directory name → adopter install slug
LEGACY_SOURCE_DIR_TO_SLUG: Dict[str, str] = {
    "workflow mgt": "workflow-mgt",
    "numbering & versioning": "numbering-versioning",
    "tooling & automation": "tooling-automation",
}

WORKFLOW_MGT_LEGACY_DIR_NAME = "workflow mgt"
WORKFLOW_MGT_INSTALL_SLUG = LEGACY_SOURCE_DIR_TO_SLUG[WORKFLOW_MGT_LEGACY_DIR_NAME]


def workflow_mgt_package_dir(project_root: Path) -> Path:
    """
    Resolve Workflow Management package directory under packages/frameworks/.

    Prefer canonical install slug (workflow-mgt); fall back to legacy name with space.
    When neither exists, return the canonical path for stable error reporting.
    """
    root = project_root.resolve()
    frameworks = root / "packages" / "frameworks"
    canonical = frameworks / WORKFLOW_MGT_INSTALL_SLUG
    legacy = frameworks / WORKFLOW_MGT_LEGACY_DIR_NAME
    if canonical.is_dir():
        return canonical
    if legacy.is_dir():
        return legacy
    return canonical


def workflow_mgt_package_dir_missing_hint(project_root: Path) -> str:
    """Human-readable hint listing canonical and legacy expected paths."""
    root = project_root.resolve()
    frameworks = root / "packages" / "frameworks"
    return (
        f"expected {frameworks / WORKFLOW_MGT_INSTALL_SLUG} "
        f"or legacy {frameworks / WORKFLOW_MGT_LEGACY_DIR_NAME!r}"
    )


def framework_install_slug(name: str) -> str:
    """Return canonical install directory slug (lowercase, hyphenated, no spaces or &)."""
    key = name.strip()
    if key in LEGACY_SOURCE_DIR_TO_SLUG:
        return LEGACY_SOURCE_DIR_TO_SLUG[key]

    s = key.lower()
    s = s.replace(" & ", "-").replace("&", "-")
    s = s.replace(" ", "-")
    s = re.sub(r"[^a-z0-9-]+", "-", s)
    s = re.sub(r"-+", "-", s).strip("-")
    return s or key


def archive_root_install_slug(archive_root: str) -> str:
    """Map tarball root directory name to install slug."""
    return LEGACY_SOURCE_DIR_TO_SLUG.get(archive_root, framework_install_slug(archive_root))


def detect_legacy_framework_dir_names(frameworks_root: Path) -> List[str]:
    """Return legacy directory names present under frameworks_root (spaces or &)."""
    root = frameworks_root.resolve()
    if not root.is_dir():
        return []
    found: List[str] = []
    for legacy_name in LEGACY_SOURCE_DIR_TO_SLUG:
        if (root / legacy_name).is_dir():
            found.append(legacy_name)
    return sorted(found)


def ensure_frameworks_slug_layout(
    frameworks_root: Path,
    *,
    dry_run: bool = False,
) -> int:
    """
    Rename legacy framework directories to install slugs under frameworks_root.

    Returns count of directories renamed.
    """
    root = frameworks_root.resolve()
    if not root.is_dir():
        return 0
    changed = 0
    for legacy_name, slug in sorted(LEGACY_SOURCE_DIR_TO_SLUG.items()):
        src = root / legacy_name
        dst = root / slug
        if not src.is_dir():
            continue
        if dst.exists():
            continue
        if dry_run:
            changed += 1
            continue
        src.rename(dst)
        changed += 1
    return changed


def format_legacy_framework_dirs_warning(frameworks_root: Path) -> str:
    """Human-readable warning when legacy framework directory names are detected."""
    legacy = detect_legacy_framework_dir_names(frameworks_root)
    if not legacy:
        return ""
    names = ", ".join(repr(n) for n in legacy)
    script = frameworks_root / "workflow-mgt" / "scripts" / "relocate_legacy_framework_dirs.py"
    if not script.is_file():
        script = frameworks_root / "workflow mgt" / "scripts" / "relocate_legacy_framework_dirs.py"
    cmd = (
        f'python "{script}" --frameworks-root {frameworks_root}'
        if script.is_file()
        else f"relocate_legacy_framework_dirs.py --frameworks-root {frameworks_root}"
    )
    return (
        f"WARNING: Legacy framework directory names detected under {frameworks_root}: {names}.\n"
        f"Run migration (idempotent):\n  {cmd}\n"
        "Then set rw-config scripts_path to packages/frameworks/workflow-mgt/scripts/..."
    )


def relocate_legacy_framework_dir(install_dir: Path, archive_root: str, slug: str) -> Path:
    """
    After tar extract, ensure framework files live under install_dir/slug.

    Renames legacy archive roots (e.g. 'workflow mgt') to slug when needed.
    """
    install_dir = install_dir.resolve()
    extracted = install_dir / archive_root
    target = install_dir / slug

    if archive_root == slug:
        return target

    if not extracted.exists():
        return target if target.exists() else extracted

    if target.exists():
        return target

    extracted.rename(target)
    return target
