#!/usr/bin/env python3
"""
Adopter install manifest helpers (FR-129 / E06:S09:T33).

Reads and writes `.ai-dev-kit.yaml` with optional vendor block for package updates.
"""

from __future__ import annotations

from datetime import datetime, timezone
from pathlib import Path
from typing import Any, Mapping, Optional, Sequence

import yaml

MANIFEST_VERSION = "1.1.0"
ADOPTER_MARKER = ".ai-dev-kit.yaml"
DEFAULT_VENDOR_ROOT = "vendor/ai-dev-kit"
DEFAULT_PACKAGES: Sequence[str] = ("workflow-mgt", "kanban")


def utc_now_iso() -> str:
    return datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")


def find_adopter_project_root(start: Optional[Path] = None) -> Optional[Path]:
    current = (start or Path.cwd()).resolve()
    for candidate in (current, *current.parents):
        if (candidate / ADOPTER_MARKER).is_file():
            return candidate
    return None


def default_packages_block() -> dict[str, dict[str, str]]:
    return {
        name: {"path": f"packages/frameworks/{name}"} for name in DEFAULT_PACKAGES
    }


def default_manifest(
    *,
    vendor_root: str = DEFAULT_VENDOR_ROOT,
    channel: str = "git",
    pinned_semver: str = "",
    pinned_internal: str = "",
) -> dict[str, Any]:
    payload: dict[str, Any] = {
        "version": MANIFEST_VERSION,
        "default_backend": "git-submodule",
        "frameworks": {},
        "packages": default_packages_block(),
    }
    if pinned_semver or channel:
        payload["vendor"] = {
            "root": vendor_root,
            "channel": channel,
            "pinned_semver": pinned_semver,
            "pinned_internal": pinned_internal,
            "installed_at": utc_now_iso(),
        }
    return payload


def load_manifest(project_root: Path) -> dict[str, Any]:
    path = project_root / ADOPTER_MARKER
    if not path.is_file():
        raise FileNotFoundError(f"missing {ADOPTER_MARKER} under {project_root}")
    with path.open(encoding="utf-8") as handle:
        data = yaml.safe_load(handle) or {}
    if not isinstance(data, dict):
        raise ValueError(f"{ADOPTER_MARKER} must be a mapping")
    return data


def save_manifest(project_root: Path, data: Mapping[str, Any]) -> Path:
    path = project_root / ADOPTER_MARKER
    payload = dict(data)
    payload.setdefault("version", MANIFEST_VERSION)
    with path.open("w", encoding="utf-8") as handle:
        yaml.dump(payload, handle, default_flow_style=False, sort_keys=False)
        handle.write("\n")
    return path


def vendor_block(manifest: Mapping[str, Any]) -> dict[str, Any]:
    vendor = manifest.get("vendor")
    if isinstance(vendor, dict):
        return dict(vendor)
    return {}


def resolve_vendor_root(project_root: Path, manifest: Mapping[str, Any]) -> Path:
    rel = vendor_block(manifest).get("root", DEFAULT_VENDOR_ROOT)
    return (project_root / str(rel)).resolve()


def package_names(manifest: Mapping[str, Any]) -> list[str]:
    packages = manifest.get("packages")
    if isinstance(packages, dict) and packages:
        return sorted(str(name) for name in packages.keys())
    return list(DEFAULT_PACKAGES)


def update_vendor_pins(
    manifest: dict[str, Any],
    *,
    pinned_semver: str,
    pinned_internal: str = "",
    channel: Optional[str] = None,
) -> dict[str, Any]:
    out = dict(manifest)
    vendor = dict(vendor_block(out))
    vendor["pinned_semver"] = pinned_semver
    if pinned_internal:
        vendor["pinned_internal"] = pinned_internal
    if channel:
        vendor["channel"] = channel
    vendor["installed_at"] = utc_now_iso()
    out["vendor"] = vendor
    out["version"] = MANIFEST_VERSION
    return out


def ensure_manifest(
    project_root: Path,
    *,
    vendor_root: str = DEFAULT_VENDOR_ROOT,
    channel: str = "git",
    pinned_semver: str = "",
    pinned_internal: str = "",
    write: bool = True,
) -> dict[str, Any]:
    marker = project_root / ADOPTER_MARKER
    if marker.is_file():
        data = load_manifest(project_root)
    else:
        data = default_manifest(
            vendor_root=vendor_root,
            channel=channel,
            pinned_semver=pinned_semver,
            pinned_internal=pinned_internal,
        )
    if write:
        save_manifest(project_root, data)
    return data
