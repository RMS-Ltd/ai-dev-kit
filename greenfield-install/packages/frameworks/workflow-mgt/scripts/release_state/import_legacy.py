#!/usr/bin/env python3
"""Import legacy semver-registry.yaml (and optional changelog archive) into SQLite."""

from __future__ import annotations

import argparse
import hashlib
import re
import sys
from pathlib import Path
from typing import Any, Dict, Optional

import yaml

_SCRIPT_DIR = Path(__file__).resolve().parent
_SCRIPTS = _SCRIPT_DIR.parent
if str(_SCRIPTS) not in sys.path:
    sys.path.insert(0, str(_SCRIPTS))

from rw_config_loader import find_project_root  # noqa: E402

from release_state.db import open_db, utc_now_iso  # noqa: E402
from release_state.store import save_registry_to_sqlite  # noqa: E402

_VERSION_FILE_RE = re.compile(r"CHANGELOG_v(?P<ver>[\d.]+(?:\+\d+)?)\.md$", re.I)


def load_yaml_registry(yaml_path: Path) -> Dict[str, Any]:
    with open(yaml_path, encoding="utf-8") as f:
        return yaml.safe_load(f) or {}


def import_changelog_archive(conn, archive_dir: Path) -> int:
    if not archive_dir.is_dir():
        return 0
    count = 0
    now = utc_now_iso()
    for path in sorted(archive_dir.glob("CHANGELOG_v*.md")):
        match = _VERSION_FILE_RE.search(path.name)
        if not match:
            continue
        internal_version = match.group("ver")
        body = path.read_text(encoding="utf-8")
        parts = internal_version.split(".")
        if len(parts) < 4:
            continue
        build_part = parts[3].split("+")
        epic, story, task, _build = int(parts[1]), int(parts[2]), int(build_part[0]), int(build_part[1] if len(build_part) > 1 else 0)
        conn.execute(
            """
            INSERT INTO changelog_entry
              (internal_version, semver_full, release_date, short_date, epic, story, task, summary, detailed_path, body_markdown, created_at)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            ON CONFLICT(internal_version) DO NOTHING
            """,
            (
                internal_version,
                "",
                now,
                now[:10],
                epic,
                story,
                task,
                f"Imported from {path.name}",
                str(path.relative_to(find_project_root(path.parent))),
                body,
                now,
            ),
        )
        count += 1
    conn.commit()
    return count


def import_registry_yaml(yaml_path: Path, db_path: Path, *, changelog_dir: Optional[Path] = None) -> dict:
    registry = load_yaml_registry(yaml_path)
    save_registry_to_sqlite(db_path, registry)
    changelog_count = 0
    if changelog_dir:
        conn = open_db(db_path)
        try:
            changelog_count = import_changelog_archive(conn, changelog_dir)
        finally:
            conn.close()
    yaml_bytes = yaml_path.read_bytes()
    return {
        "yaml_path": str(yaml_path),
        "db_path": str(db_path),
        "yaml_sha256": hashlib.sha256(yaml_bytes).hexdigest(),
        "changelog_entries_imported": changelog_count,
    }


def _dedupe_history(history: list) -> list:
    seen_internal: set[str] = set()
    seen_patch: set[int] = set()
    out = []
    for entry in history:
        if not isinstance(entry, dict):
            continue
        iv = entry.get("internal_version")
        patch = entry.get("patch")
        if iv is None or patch is None:
            continue
        patch_i = int(patch)
        if iv in seen_internal or patch_i in seen_patch:
            continue
        seen_internal.add(iv)
        seen_patch.add(patch_i)
        out.append(entry)
    return out


def _audit(reg: Dict[str, Any]) -> tuple[int, int]:
    counter = 0
    mappings = 0
    for key, scope in reg.items():
        if not key.startswith("rc_"):
            continue
        ttm = scope.get("task_touch_mode") or {}
        counter = max(counter, int(ttm.get("task_touch_counter", 0)))
        mappings += len(_dedupe_history(ttm.get("mapping_history") or []))
    return counter, mappings


def validate_import(yaml_path: Path, db_path: Path) -> tuple[bool, str]:
    from release_state.store import load_registry_from_sqlite

    original = load_yaml_registry(yaml_path)
    loaded = load_registry_from_sqlite(db_path)

    orig_counter, orig_maps = _audit(original)
    load_counter, load_maps = _audit(loaded)
    if orig_counter != load_counter or orig_maps != load_maps:
        return False, f"counter {orig_counter}!={load_counter} or mappings {orig_maps}!={load_maps}"
    return True, f"OK counter={load_counter} mappings={load_maps}"


def main(argv: list[str] | None = None) -> int:
    root = find_project_root(Path.cwd())
    parser = argparse.ArgumentParser(description="Import legacy semver-registry.yaml into SQLite.")
    parser.add_argument("--yaml", type=Path, default=root / "semver-registry.yaml")
    parser.add_argument("--db", type=Path, default=root / ".adk" / "release-state.db")
    parser.add_argument(
        "--changelog-dir",
        type=Path,
        default=root / "docs/changelog-and-release-notes/changelog-archive",
    )
    parser.add_argument("--skip-changelog", action="store_true")
    parser.add_argument("--validate", action="store_true", help="Validate counts after import")
    args = parser.parse_args(argv)

    if not args.yaml.exists():
        print(f"import_legacy: ERROR — YAML not found: {args.yaml}", file=sys.stderr)
        return 1

    payload = import_registry_yaml(
        args.yaml,
        args.db,
        changelog_dir=None if args.skip_changelog else args.changelog_dir,
    )
    print(yaml.dump(payload, default_flow_style=False).strip())

    if args.validate:
        ok, msg = validate_import(args.yaml, args.db)
        print(f"validate_import: {msg}")
        return 0 if ok else 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
