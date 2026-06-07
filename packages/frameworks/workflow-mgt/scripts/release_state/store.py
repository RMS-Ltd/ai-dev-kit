"""Load/save semver registry dict to/from SQLite."""

from __future__ import annotations

import re
from pathlib import Path
from typing import Any, Dict, List, Optional, Tuple

from release_state.db import open_db, utc_now_iso

_STORY_KEY_RE = re.compile(r"^\(\s*(\d+)\s*,\s*(\d+)\s*\)$")


def _rc_scope() -> Dict[str, Any]:
    return {
        "epic_to_minor": {},
        "story_to_patch": {},
        "task_touch_mode": {
            "epic_count": 0,
            "task_touch_counter": 0,
            "mapping_history": [],
        },
    }


def _empty_registry() -> Dict[str, Any]:
    return {"rc_0": _rc_scope(), "rc_1": _rc_scope()}


def parse_story_key(key: Any) -> Tuple[int, int]:
    if isinstance(key, tuple) and len(key) == 2:
        return int(key[0]), int(key[1])
    text = str(key).strip()
    match = _STORY_KEY_RE.match(text)
    if match:
        return int(match.group(1)), int(match.group(2))
    raise ValueError(f"Invalid story_to_patch key: {key!r}")


def format_story_key(epic: int, story: int) -> str:
    return f"({epic},{story})"


def load_registry_from_sqlite(db_path: Path) -> Dict[str, Any]:
    if not db_path.exists():
        return _empty_registry()

    conn = open_db(db_path)
    try:
        registry = _empty_registry()
        rc_rows = conn.execute("SELECT rc FROM semver_rc ORDER BY rc").fetchall()
        if not rc_rows:
            return registry

        for rc_row in rc_rows:
            rc = int(rc_row["rc"])
            rc_key = f"rc_{rc}"
            if rc_key not in registry:
                registry[rc_key] = {
                    "epic_to_minor": {},
                    "story_to_patch": {},
                    "task_touch_mode": {
                        "epic_count": 0,
                        "task_touch_counter": 0,
                        "mapping_history": [],
                    },
                }
            scope = registry[rc_key]

            for row in conn.execute(
                "SELECT epic, minor FROM epic_to_minor WHERE rc = ? ORDER BY epic",
                (rc,),
            ):
                scope["epic_to_minor"][int(row["epic"])] = int(row["minor"])

            for row in conn.execute(
                "SELECT epic, story, patch FROM story_to_patch WHERE rc = ? ORDER BY epic, story",
                (rc,),
            ):
                scope["story_to_patch"][format_story_key(int(row["epic"]), int(row["story"]))] = int(
                    row["patch"]
                )

            state = conn.execute(
                "SELECT epic_count, task_touch_counter FROM task_touch_state WHERE rc = ?",
                (rc,),
            ).fetchone()
            if state:
                ttm = scope.setdefault(
                    "task_touch_mode",
                    {"epic_count": 0, "task_touch_counter": 0, "mapping_history": []},
                )
                ttm["epic_count"] = int(state["epic_count"])
                ttm["task_touch_counter"] = int(state["task_touch_counter"])

            history: List[Dict[str, Any]] = []
            for row in conn.execute(
                """
                SELECT internal_version, semver_full, patch, epic, story, task, build
                FROM task_touch_mapping
                WHERE rc = ?
                ORDER BY patch, internal_version
                """,
                (rc,),
            ):
                history.append(
                    {
                        "internal_version": row["internal_version"],
                        "semver": row["semver_full"],
                        "patch": int(row["patch"]),
                        "rc": rc,
                        "epic": int(row["epic"]),
                        "story": int(row["story"]),
                        "task": int(row["task"]),
                        "build": int(row["build"]),
                    }
                )
            if history:
                scope.setdefault(
                    "task_touch_mode",
                    {"epic_count": 0, "task_touch_counter": 0, "mapping_history": []},
                )["mapping_history"] = history

        return registry
    finally:
        conn.close()


def save_registry_to_sqlite(db_path: Path, registry: Dict[str, Any]) -> None:
    conn = open_db(db_path)
    now = utc_now_iso()
    try:
        conn.execute("BEGIN")
        for rc_key, scope in registry.items():
            if not rc_key.startswith("rc_"):
                continue
            rc = int(rc_key.split("_", 1)[1])
            ttm = scope.get("task_touch_mode") or {}
            epic_count = int(ttm.get("epic_count", 0))
            counter = int(ttm.get("task_touch_counter", 0))
            history = ttm.get("mapping_history") or []
            max_patch = max([int(e.get("patch", 0)) for e in history if isinstance(e, dict)] or [0])
            max_patch = max(max_patch, counter)

            conn.execute(
                """
                INSERT INTO semver_rc (rc, epic_count, updated_at)
                VALUES (?, ?, ?)
                ON CONFLICT(rc) DO UPDATE SET epic_count = excluded.epic_count, updated_at = excluded.updated_at
                """,
                (rc, epic_count, now),
            )

            conn.execute("DELETE FROM epic_to_minor WHERE rc = ?", (rc,))
            for epic_raw, minor in (scope.get("epic_to_minor") or {}).items():
                conn.execute(
                    "INSERT INTO epic_to_minor (rc, epic, minor) VALUES (?, ?, ?)",
                    (rc, int(epic_raw), int(minor)),
                )

            conn.execute("DELETE FROM story_to_patch WHERE rc = ?", (rc,))
            for key, patch in (scope.get("story_to_patch") or {}).items():
                epic, story = parse_story_key(key)
                conn.execute(
                    "INSERT INTO story_to_patch (rc, epic, story, patch) VALUES (?, ?, ?, ?)",
                    (rc, epic, story, int(patch)),
                )

            conn.execute(
                """
                INSERT INTO task_touch_state (rc, epic_count, task_touch_counter, max_patch, updated_at)
                VALUES (?, ?, ?, ?, ?)
                ON CONFLICT(rc) DO UPDATE SET
                  epic_count = excluded.epic_count,
                  task_touch_counter = excluded.task_touch_counter,
                  max_patch = excluded.max_patch,
                  updated_at = excluded.updated_at
                """,
                (rc, epic_count, counter, max_patch, now),
            )

            conn.execute("DELETE FROM task_touch_mapping WHERE rc = ?", (rc,))
            seen_internal: set[str] = set()
            seen_patch: set[int] = set()
            for entry in history:
                if not isinstance(entry, dict):
                    continue
                iv = entry["internal_version"]
                patch = int(entry["patch"])
                if iv in seen_internal or patch in seen_patch:
                    continue
                seen_internal.add(iv)
                seen_patch.add(patch)
                conn.execute(
                    """
                    INSERT INTO task_touch_mapping
                      (rc, internal_version, semver_full, patch, epic, story, task, build, finalized_at)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
                    """,
                    (
                        rc,
                        entry["internal_version"],
                        entry.get("semver") or entry.get("semver_full"),
                        int(entry["patch"]),
                        int(entry.get("epic", 0)),
                        int(entry.get("story", 0)),
                        int(entry.get("task", 0)),
                        int(entry.get("build", 0)),
                        now,
                    ),
                )

        conn.commit()
    except Exception:
        conn.rollback()
        raise
    finally:
        conn.close()


def lookup_semver_by_internal(db_path: Path, internal_version: str, rc: int = 0) -> Optional[str]:
    """Indexed lookup for RW-V04 benchmark."""
    if not db_path.exists():
        return None
    conn = open_db(db_path)
    try:
        row = conn.execute(
            "SELECT semver_full FROM task_touch_mapping WHERE rc = ? AND internal_version = ?",
            (rc, internal_version),
        ).fetchone()
        return row["semver_full"] if row else None
    finally:
        conn.close()
