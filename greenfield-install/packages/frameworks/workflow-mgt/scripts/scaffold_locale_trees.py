#!/usr/bin/env python3
"""
Scaffold locale directory trees by copying en-GB (E21:S03:T02).

Copies whole-file assets and key catalogs from source locale to target locales,
rewrites _meta.locale in YAML key files, and registers manifest locales blocks.

Usage:
    python scaffold_locale_trees.py [--dry-run] [--package kanban|workflow-mgt|all]
"""

from __future__ import annotations

import argparse
import copy
import shutil
import sys
from pathlib import Path
from typing import Any, Dict, Iterable, List, Tuple

import yaml

SOURCE_LOCALE = "en-GB"
SKIP_LOCALES = frozenset({"en-GB", "en-US"})
DEFAULT_TARGETS = (
    "es",
    "fr",
    "de",
    "zh-CN",
    "zh-TW",
    "ja",
    "pt-BR",
    "pt-PT",
    "ru",
    "ar",
)

PACKAGES = {
    "kanban": "packages/frameworks/kanban/locales",
    "workflow-mgt": "packages/frameworks/workflow-mgt/locales",
}


def _load_yaml(path: Path) -> Dict[str, Any]:
    with open(path, encoding="utf-8") as handle:
        return yaml.safe_load(handle) or {}


def _dump_yaml(path: Path, data: Dict[str, Any]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    with open(path, "w", encoding="utf-8") as handle:
        yaml.dump(data, handle, default_flow_style=False, sort_keys=False, allow_unicode=True)


def _copy_tree(source_root: Path, target_root: Path, *, dry_run: bool) -> int:
    """Copy source locale tree to target; return files written."""
    if not source_root.is_dir():
        raise FileNotFoundError(f"Source locale missing: {source_root}")
    written = 0
    if target_root.exists() and not dry_run:
        shutil.rmtree(target_root)
    for src in sorted(source_root.rglob("*")):
        if not src.is_file():
            continue
        rel = src.relative_to(source_root)
        dest = target_root / rel
        if dry_run:
            written += 1
            continue
        dest.parent.mkdir(parents=True, exist_ok=True)
        if src.suffix in (".yaml", ".yml"):
            data = _load_yaml(src)
            if isinstance(data.get("_meta"), dict):
                data["_meta"]["locale"] = target_root.name
            _dump_yaml(dest, data)
        else:
            shutil.copy2(src, dest)
        written += 1
    return written


def _ensure_manifest_locales(
    manifest_path: Path,
    targets: Iterable[str],
    *,
    dry_run: bool,
) -> List[str]:
    """Add locales.{code} blocks mirroring en-GB; return codes added or updated."""
    manifest = _load_yaml(manifest_path)
    locales = manifest.setdefault("locales", {})
    if SOURCE_LOCALE not in locales:
        raise ValueError(f"{manifest_path}: missing source locale {SOURCE_LOCALE}")
    template = copy.deepcopy(locales[SOURCE_LOCALE])
    changed: List[str] = []
    for code in targets:
        if code in SKIP_LOCALES:
            continue
        if locales.get(code) != template:
            locales[code] = copy.deepcopy(template)
            changed.append(code)
    if changed and not dry_run:
        _dump_yaml(manifest_path, manifest)
    return changed


def scaffold_package(
    project_root: Path,
    package_key: str,
    targets: Tuple[str, ...],
    *,
    dry_run: bool,
) -> Dict[str, Any]:
    rel = PACKAGES[package_key]
    locales_root = project_root / rel
    manifest_path = locales_root / "manifest.yaml"
    source_root = locales_root / SOURCE_LOCALE
    stats: Dict[str, Any] = {
        "package": package_key,
        "files_written": 0,
        "locales": {},
        "manifest_updated": [],
    }
    for code in targets:
        if code in SKIP_LOCALES:
            continue
        target_root = locales_root / code
        count = _copy_tree(source_root, target_root, dry_run=dry_run)
        stats["files_written"] += count
        stats["locales"][code] = count
    stats["manifest_updated"] = _ensure_manifest_locales(
        manifest_path, targets, dry_run=dry_run
    )
    return stats


def main(argv: List[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description="Scaffold locale trees from en-GB")
    parser.add_argument(
        "--project-root",
        type=Path,
        default=Path(__file__).resolve().parents[4],
        help="Repository root",
    )
    parser.add_argument(
        "--package",
        choices=["kanban", "workflow-mgt", "all"],
        default="all",
    )
    parser.add_argument(
        "--locale",
        action="append",
        dest="locales",
        help="Target locale code (repeatable); default all FR-006 non-English",
    )
    parser.add_argument("--dry-run", action="store_true")
    args = parser.parse_args(argv)

    targets = tuple(args.locales) if args.locales else DEFAULT_TARGETS
    packages = list(PACKAGES) if args.package == "all" else [args.package]

    for pkg in packages:
        stats = scaffold_package(
            args.project_root, pkg, targets, dry_run=args.dry_run
        )
        mode = "DRY RUN" if args.dry_run else "OK"
        print(
            f"{mode} {pkg}: {stats['files_written']} files, "
            f"manifest locales: {stats['manifest_updated']}"
        )
    return 0


if __name__ == "__main__":
    sys.exit(main())
