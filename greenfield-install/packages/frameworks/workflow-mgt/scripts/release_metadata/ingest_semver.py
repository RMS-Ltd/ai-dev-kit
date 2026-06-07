"""Ingest semver-registry.yaml into the read model."""

from __future__ import annotations

import re
import sqlite3
from pathlib import Path
from typing import Any, Dict, List, Optional, Tuple

try:
    import yaml
except ImportError:  # pragma: no cover
    yaml = None

from .hashutil import row_hash_payload, sha256_file
from .store import upsert_release, utc_now_iso

RC_KEY = "rc_0"


def semver_core(semver: str) -> str:
    return semver.split("+", 1)[0]


def normalize_internal_version(raw: str) -> str:
    return raw.strip().removeprefix("v")


def parse_internal_version(iv: str) -> Tuple[int, int, int, int, int]:
    iv = normalize_internal_version(iv)
    if "+" not in iv:
        raise ValueError(f"invalid internal version: {iv}")
    main, build_s = iv.split("+", 1)
    parts = main.split(".")
    if len(parts) != 4:
        raise ValueError(f"invalid internal version: {iv}")
    return (int(parts[0]), int(parts[1]), int(parts[2]), int(parts[3]), int(build_s))


def load_registry(path: Path) -> Dict[str, Any]:
    if yaml is None:
        raise RuntimeError("PyYAML required for semver ingest")
    with open(path, encoding="utf-8") as f:
        return yaml.safe_load(f) or {}


def ingest_semver_registry(
    conn: sqlite3.Connection,
    registry_path: Path,
    *,
    rc: int = 0,
) -> Dict[str, int]:
    """Parse and upsert semver tables. Returns stats dict."""
    if not registry_path.exists():
        raise FileNotFoundError(f"semver registry not found: {registry_path}")

    registry = load_registry(registry_path)
    rc_key = f"rc_{rc}"
    rc_scope = registry.get(rc_key) or {}
    ttm = rc_scope.get("task_touch_mode") or {}
    history: List[Dict[str, Any]] = ttm.get("mapping_history") or []

    ingested_at = utc_now_iso()
    source_hash = sha256_file(registry_path)
    stats = {"mappings": 0, "releases": 0}

    conn.execute("DELETE FROM semver_epic_to_minor")
    conn.execute("DELETE FROM semver_story_to_patch")
    for epic, minor in (rc_scope.get("epic_to_minor") or {}).items():
        conn.execute(
            "INSERT INTO semver_epic_to_minor (epic, minor) VALUES (?, ?)",
            (int(epic), int(minor)),
        )

    for key, patch in (rc_scope.get("story_to_patch") or {}).items():
        if isinstance(key, tuple) and len(key) == 2:
            epic, story = int(key[0]), int(key[1])
        else:
            m = re.match(r"\(?\s*(\d+)\s*,\s*(\d+)\s*\)?", str(key))
            if not m:
                continue
            epic, story = int(m.group(1)), int(m.group(2))
        conn.execute(
            "INSERT INTO semver_story_to_patch (epic, story, patch) VALUES (?, ?, ?)",
            (int(epic), int(story), int(patch)),
        )

    conn.execute(
        """
        INSERT INTO semver_state (singleton_id, epic_count, task_touch_counter, source_file_hash, ingested_at)
        VALUES (1, ?, ?, ?, ?)
        ON CONFLICT(singleton_id) DO UPDATE SET
          epic_count = excluded.epic_count,
          task_touch_counter = excluded.task_touch_counter,
          source_file_hash = excluded.source_file_hash,
          ingested_at = excluded.ingested_at
        """,
        (
            int(ttm.get("epic_count", 0)),
            int(ttm.get("task_touch_counter", 0)),
            source_hash,
            ingested_at,
        ),
    )

    for idx, entry in enumerate(history):
        if not isinstance(entry, dict):
            continue
        iv = entry.get("internal_version")
        sv = entry.get("semver")
        if not iv or not sv:
            continue
        iv_norm = normalize_internal_version(str(iv))
        core = semver_core(str(sv))
        patch = int(entry.get("patch", core.split(".")[-1]))
        rc_v, epic, story, task, build = parse_internal_version(iv_norm)

        upsert_release(
            conn,
            iv_norm,
            epic=epic,
            story=story,
            task=task,
            build=build,
            rc=rc_v,
            ingested_at=ingested_at,
        )
        stats["releases"] += 1

        row = {
            "internal_version": iv_norm,
            "semver": str(sv),
            "semver_core": core,
            "patch": patch,
            "rc": entry.get("rc", rc_v),
            "epic": entry.get("epic", epic),
            "story": entry.get("story", story),
            "task": entry.get("task", task),
            "build": entry.get("build", build),
        }
        rh = row_hash_payload(row)
        conn.execute(
            """
            INSERT INTO semver_mapping (
              internal_version, semver, semver_core, patch, rc, epic, story, task, build,
              source_line, row_hash, ingested_at
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            ON CONFLICT(internal_version) DO UPDATE SET
              semver = excluded.semver,
              semver_core = excluded.semver_core,
              patch = excluded.patch,
              rc = excluded.rc,
              epic = excluded.epic,
              story = excluded.story,
              task = excluded.task,
              build = excluded.build,
              source_line = excluded.source_line,
              row_hash = excluded.row_hash,
              ingested_at = excluded.ingested_at
            """,
            (
                iv_norm,
                row["semver"],
                core,
                patch,
                row["rc"],
                row["epic"],
                row["story"],
                row["task"],
                row["build"],
                idx + 1,
                rh,
                ingested_at,
            ),
        )
        stats["mappings"] += 1

    return stats


def yaml_mapping_count(registry_path: Path, rc: int = 0) -> int:
    """Count unique internal_version keys (last history row wins on ingest)."""
    if not registry_path.exists():
        return 0
    registry = load_registry(registry_path)
    ttm = (registry.get(f"rc_{rc}") or {}).get("task_touch_mode") or {}
    seen: set[str] = set()
    for entry in ttm.get("mapping_history") or []:
        if isinstance(entry, dict) and entry.get("internal_version"):
            seen.add(normalize_internal_version(str(entry["internal_version"])))
    return len(seen)


def db_mapping_count(conn: sqlite3.Connection) -> int:
    row = conn.execute("SELECT COUNT(*) AS c FROM semver_mapping").fetchone()
    return int(row["c"]) if row else 0
