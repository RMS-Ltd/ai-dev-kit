#!/usr/bin/env python3
"""Validate top-level directories against repository IA allowlist (FR-140-F4)."""

from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path

SCRIPT_DIR = Path(__file__).resolve().parent
WF_SCRIPTS = SCRIPT_DIR.parent
MAINTENANCE = WF_SCRIPTS / "maintenance"
for p in (WF_SCRIPTS, MAINTENANCE):
    if str(p) not in sys.path:
        sys.path.insert(0, str(p))

from repository_ia_exclusions import path_is_excluded  # noqa: E402

try:
    from rw_config_loader import load_rw_config
except ImportError:
    load_rw_config = None  # type: ignore

DEFAULT_MANIFEST = "docs/maintenance/repository-path-manifest.json"


def _find_project_root(start: Path) -> Path:
    for parent in [start, *start.parents]:
        if (parent / "rw-config.yaml").is_file():
            return parent
    return start


def _manifest_path(root: Path) -> Path:
    rel = DEFAULT_MANIFEST
    if load_rw_config:
        cfg = load_rw_config(project_root=root)
        ia = cfg.get("repository_ia") or {}
        if isinstance(ia, dict) and ia.get("manifest_path"):
            rel = str(ia["manifest_path"])
    return root / rel


def _top_level_on_disk(root: Path) -> set[str]:
    names: set[str] = set()
    for child in root.iterdir():
        if not child.is_dir():
            continue
        rel = child.name
        if path_is_excluded(rel):
            continue
        names.add(rel)
    return names


def _allowed_top_level(manifest: dict) -> set[str]:
    allowed: set[str] = set()
    for row in manifest.get("top_level_allowlist", []):
        path = str(row.get("path", "")).strip("/")
        if path:
            allowed.add(path.split("/")[0])
    return allowed


def main() -> int:
    parser = argparse.ArgumentParser(description="Validate top-level directory allowlist")
    parser.add_argument("--project-root", type=Path, default=None)
    parser.add_argument("--manifest", type=Path, default=None)
    parser.add_argument("--strict", action="store_true")
    args = parser.parse_args()

    root = (args.project_root or _find_project_root(Path.cwd())).resolve()
    manifest_file = (args.manifest or _manifest_path(root)).resolve()

    if not manifest_file.is_file():
        msg = f"Manifest missing: {manifest_file.relative_to(root)}"
        if args.strict:
            print(f"ERROR: {msg}", file=sys.stderr)
            return 1
        print(f"WARNING: {msg}", file=sys.stderr)
        return 0

    manifest = json.loads(manifest_file.read_text(encoding="utf-8"))
    allowed = _allowed_top_level(manifest)
    on_disk = _top_level_on_disk(root)
    unexpected = sorted(on_disk - allowed)

    if unexpected:
        msg = (
            "Top-level directories not in manifest allowlist: "
            + ", ".join(unexpected)
            + ". Update policy + regenerate manifest or remove directory."
        )
        if args.strict:
            print(f"ERROR: {msg}", file=sys.stderr)
            return 1
        print(f"WARNING: {msg}", file=sys.stderr)
        return 0

    print(f"OK: top-level directories match allowlist ({len(allowed)} allowed)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
