"""
Canonical on-disk directory names for framework packages (adopter installs).

Source tree under ai-dev-kit may use legacy names with spaces and '&';
release archives and consumer projects must use lowercase hyphenated slugs.
"""

from __future__ import annotations

import re
from pathlib import Path
from typing import Dict

# Legacy maintainer source directory name → adopter install slug
LEGACY_SOURCE_DIR_TO_SLUG: Dict[str, str] = {
    "workflow mgt": "workflow-mgt",
    "numbering & versioning": "numbering-versioning",
    "tooling & automation": "tooling-automation",
}


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
