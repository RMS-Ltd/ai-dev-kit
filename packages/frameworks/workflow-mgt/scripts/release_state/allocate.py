"""SemVer Allocation Authority (SAA) — SQL-backed allocate / lookup / audit."""

from __future__ import annotations

import re
import sqlite3
import time
from dataclasses import dataclass
from pathlib import Path
from typing import Any, Dict, List, Optional, Tuple

from release_state.db import open_db, utc_now_iso

_INTERNAL_RE = re.compile(
    r"^(?P<rc>\d+)\.(?P<epic>\d+)\.(?P<story>\d+)\.(?P<task>\d+)\+(?P<build>\d+)$"
)


class SemVerCollisionError(RuntimeError):
    """Raised when UNIQUE constraint would be violated during allocate."""


class PreviewNotAllowed(LookupError):
    """Raised when lookup-only path cannot resolve an unknown internal version."""


@dataclass(frozen=True)
class AllocateResult:
    internal_version: str
    semver_full: str
    semver_core: str
    patch_sequence: int
    allocated: bool
    rc: int
    epic: int
    story: int
    task: int
    build: int


@dataclass(frozen=True)
class ParsedInternal:
    rc: int
    epic: int
    story: int
    task: int
    build: int

    @property
    def internal_version(self) -> str:
        return f"{self.rc}.{self.epic}.{self.story}.{self.task}+{self.build}"


def semver_core(semver_full: str) -> str:
    return semver_full.split("+", 1)[0]


def parse_internal_version(text: str) -> ParsedInternal:
    version = text.lstrip("v").strip()
    match = _INTERNAL_RE.match(version)
    if not match:
        raise ValueError(f"Invalid internal version format: {text!r}")
    return ParsedInternal(
        rc=int(match.group("rc")),
        epic=int(match.group("epic")),
        story=int(match.group("story")),
        task=int(match.group("task")),
        build=int(match.group("build")),
    )


def _row_to_result(row: sqlite3.Row, *, allocated: bool) -> AllocateResult:
    return AllocateResult(
        internal_version=row["internal_version"],
        semver_full=row["semver_full"],
        semver_core=row["semver_core"],
        patch_sequence=int(row["patch"]),
        allocated=allocated,
        rc=int(row["rc"]),
        epic=int(row["epic"]),
        story=int(row["story"]),
        task=int(row["task"]),
        build=int(row["build"]),
    )


def _ensure_rc_state(conn: sqlite3.Connection, rc: int) -> Tuple[int, int]:
    """Return (epic_count, task_touch_counter) for rc; bootstrap rows if missing."""
    now = utc_now_iso()
    conn.execute(
        """
        INSERT INTO semver_rc (rc, epic_count, updated_at)
        VALUES (?, 0, ?)
        ON CONFLICT(rc) DO NOTHING
        """,
        (rc, now),
    )
    conn.execute(
        """
        INSERT INTO task_touch_state (rc, epic_count, task_touch_counter, max_patch, updated_at)
        VALUES (?, 0, 0, 0, ?)
        ON CONFLICT(rc) DO NOTHING
        """,
        (rc, now),
    )
    state = conn.execute(
        "SELECT epic_count, task_touch_counter FROM task_touch_state WHERE rc = ?",
        (rc,),
    ).fetchone()
    assert state is not None
    return int(state["epic_count"]), int(state["task_touch_counter"])


def lookup(db_path: Path, internal_version: str, *, rc: Optional[int] = None) -> Optional[AllocateResult]:
    parsed = parse_internal_version(internal_version)
    rc_val = parsed.rc if rc is None else rc
    if not db_path.exists():
        return None
    conn = open_db(db_path)
    try:
        row = conn.execute(
            """
            SELECT rc, internal_version, semver_full, semver_core, patch,
                   epic, story, task, build
            FROM task_touch_mapping
            WHERE rc = ? AND internal_version = ?
            """,
            (rc_val, parsed.internal_version),
        ).fetchone()
        if row is None:
            return None
        return _row_to_result(row, allocated=False)
    finally:
        conn.close()


def lookup_or_raise(db_path: Path, internal_version: str) -> AllocateResult:
    result = lookup(db_path, internal_version)
    if result is None:
        raise PreviewNotAllowed(
            f"No SemVer mapping for {internal_version!r}; preview requires existing allocation."
        )
    return result


def _allocate_once(db_path: Path, parsed: ParsedInternal, rc_val: int) -> AllocateResult:
    conn = open_db(db_path)
    try:
        conn.execute("BEGIN IMMEDIATE")
        existing = conn.execute(
            """
            SELECT rc, internal_version, semver_full, semver_core, patch,
                   epic, story, task, build
            FROM task_touch_mapping
            WHERE rc = ? AND internal_version = ?
            """,
            (rc_val, parsed.internal_version),
        ).fetchone()
        if existing is not None:
            conn.commit()
            return _row_to_result(existing, allocated=False)

        epic_count, counter = _ensure_rc_state(conn, rc_val)
        next_patch = counter + 1
        major = rc_val
        minor = epic_count
        patch = next_patch
        build = parsed.build
        semver_full = f"{major}.{minor}.{patch}+{build}"
        core = semver_core(semver_full)
        now = utc_now_iso()

        try:
            conn.execute(
                """
                INSERT INTO task_touch_mapping
                  (rc, internal_version, semver_full, semver_core, patch,
                   epic, story, task, build, finalized_at)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                """,
                (
                    rc_val,
                    parsed.internal_version,
                    semver_full,
                    core,
                    patch,
                    parsed.epic,
                    parsed.story,
                    parsed.task,
                    build,
                    now,
                ),
            )
        except sqlite3.IntegrityError as exc:
            conn.rollback()
            raise SemVerCollisionError(
                f"SemVer collision during allocate for {parsed.internal_version}: {exc}"
            ) from exc

        conn.execute(
            """
            UPDATE task_touch_state
            SET task_touch_counter = ?, max_patch = ?, updated_at = ?
            WHERE rc = ?
            """,
            (next_patch, next_patch, now, rc_val),
        )
        conn.commit()

        row = conn.execute(
            """
            SELECT rc, internal_version, semver_full, semver_core, patch,
                   epic, story, task, build
            FROM task_touch_mapping
            WHERE rc = ? AND internal_version = ?
            """,
            (rc_val, parsed.internal_version),
        ).fetchone()
        assert row is not None
        return _row_to_result(row, allocated=True)
    except Exception:
        if conn.in_transaction:
            conn.rollback()
        raise
    finally:
        conn.close()


def allocate(db_path: Path, internal_version: str, *, rc: Optional[int] = None) -> AllocateResult:
    """
    Allocate or return existing SemVer for internal version (single BEGIN IMMEDIATE transaction).
    """
    parsed = parse_internal_version(internal_version)
    rc_val = parsed.rc if rc is None else rc
    last_locked: Optional[sqlite3.OperationalError] = None
    for attempt in range(8):
        try:
            return _allocate_once(db_path, parsed, rc_val)
        except sqlite3.OperationalError as exc:
            if "locked" not in str(exc).lower():
                raise
            last_locked = exc
            time.sleep(0.05 * (attempt + 1))
    assert last_locked is not None
    raise last_locked


def audit(db_path: Path, *, rc: int = 0) -> Dict[str, Any]:
    """Return injectivity audit report for allocator DB."""
    if not db_path.exists():
        return {"ok": True, "rc": rc, "row_count": 0, "collisions": []}

    conn = open_db(db_path)
    try:
        rows = conn.execute(
            """
            SELECT internal_version, semver_full, semver_core, patch
            FROM task_touch_mapping WHERE rc = ?
            ORDER BY patch
            """,
            (rc,),
        ).fetchall()
        collisions: List[Dict[str, Any]] = []
        seen_internal: Dict[str, str] = {}
        seen_patch: Dict[int, str] = {}
        seen_core: Dict[str, str] = {}
        seen_full: Dict[str, str] = {}

        for row in rows:
            iv = row["internal_version"]
            patch = int(row["patch"])
            core = row["semver_core"]
            full = row["semver_full"]

            for kind, key, bucket in (
                ("internal_version", iv, seen_internal),
                ("patch", patch, seen_patch),
                ("semver_core", core, seen_core),
                ("semver_full", full, seen_full),
            ):
                if key in bucket and bucket[key] != iv:
                    collisions.append(
                        {
                            "type": kind,
                            "value": key,
                            "owners": [bucket[key], iv],
                        }
                    )
                else:
                    bucket[key] = iv

        return {
            "ok": len(collisions) == 0,
            "rc": rc,
            "row_count": len(rows),
            "collisions": collisions,
        }
    finally:
        conn.close()
