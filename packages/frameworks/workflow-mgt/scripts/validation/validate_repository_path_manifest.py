#!/usr/bin/env python3
"""Validate repository path manifest drift vs on-disk tree (FR-140-F5)."""

from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path

SCRIPT_DIR = Path(__file__).resolve().parent
MAINTENANCE = SCRIPT_DIR.parent / "maintenance"
WF_SCRIPTS = SCRIPT_DIR.parent
for p in (WF_SCRIPTS, MAINTENANCE):
    if str(p) not in sys.path:
        sys.path.insert(0, str(p))

from generate_repository_path_manifest import (  # noqa: E402
    build_manifest,
    manifest_for_compare,
)

try:
    from rw_config_loader import load_rw_config
except ImportError:
    load_rw_config = None  # type: ignore

DEFAULT_MANIFEST = "docs/maintenance/repository-path-manifest.json"
DEFAULT_AUDIT = "docs/maintenance/REPOSITORY-DIRECTORY-AUDIT.md"


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


def main() -> int:
    parser = argparse.ArgumentParser(description="Validate repository path manifest drift")
    parser.add_argument("--project-root", type=Path, default=None)
    parser.add_argument("--manifest", type=Path, default=None)
    parser.add_argument("--audit", type=Path, default=None)
    parser.add_argument("--strict", action="store_true", help="Blocking mode (exit 1 on drift)")
    args = parser.parse_args()

    root = (args.project_root or _find_project_root(Path.cwd())).resolve()
    manifest_file = (args.manifest or _manifest_path(root)).resolve()
    audit_file = (args.audit or root / DEFAULT_AUDIT).resolve()

    if not manifest_file.is_file():
        msg = f"Manifest missing: {manifest_file.relative_to(root)}"
        if args.strict:
            print(f"ERROR: {msg}", file=sys.stderr)
            return 1
        print(f"WARNING: {msg}", file=sys.stderr)
        return 0

    committed = json.loads(manifest_file.read_text(encoding="utf-8"))
    fresh = build_manifest(root, audit_file)

    committed_paths = {e["path"] for e in committed.get("entries", [])}
    fresh_paths = {e["path"] for e in fresh.get("entries", [])}
    added = sorted(fresh_paths - committed_paths)
    removed = sorted(committed_paths - fresh_paths)

    stale = bool(added or removed) or manifest_for_compare(committed) != manifest_for_compare(fresh)

    if stale:
        details: list[str] = []
        if added:
            details.append(f"added ({len(added)}): " + ", ".join(added[:10]))
        if removed:
            details.append(f"removed ({len(removed)}): " + ", ".join(removed[:10]))
        if not added and not removed:
            details.append("metadata mismatch — regenerate manifest")
        msg = "Manifest drift detected. Run generate_repository_path_manifest.py --write. " + "; ".join(
            details
        )
        if args.strict:
            print(f"ERROR: {msg}", file=sys.stderr)
            return 1
        print(f"WARNING: {msg}", file=sys.stderr)
        return 0

    print("OK: repository path manifest matches on-disk tree")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
