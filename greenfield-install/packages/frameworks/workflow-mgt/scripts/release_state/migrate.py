"""Schema migrations for release-state SQLite (SAA / E03:S02:T14)."""

from __future__ import annotations

import sqlite3

from release_state.time_util import utc_now_iso

SCHEMA_VERSION = 2


def current_schema_version(conn: sqlite3.Connection) -> int:
    row = conn.execute("SELECT version FROM schema_version WHERE id = 1").fetchone()
    if row is None:
        return 0
    return int(row["version"])


def _semver_core_column_exists(conn: sqlite3.Connection) -> bool:
    cols = {
        row["name"]
        for row in conn.execute("PRAGMA table_info(task_touch_mapping)").fetchall()
    }
    return "semver_core" in cols


def migrate_to_v2(conn: sqlite3.Connection) -> None:
    """Add semver_core column and UNIQUE constraints on semver_core / semver_full."""
    if not _semver_core_column_exists(conn):
        try:
            conn.execute(
                "ALTER TABLE task_touch_mapping ADD COLUMN semver_core TEXT"
            )
        except sqlite3.OperationalError as exc:
            if "duplicate column" not in str(exc).lower():
                raise
        conn.execute(
            """
            UPDATE task_touch_mapping
            SET semver_core = CASE
              WHEN instr(semver_full, '+') > 0
              THEN substr(semver_full, 1, instr(semver_full, '+') - 1)
              ELSE semver_full
            END
            WHERE semver_core IS NULL
            """
        )

    conn.execute(
        """
        CREATE UNIQUE INDEX IF NOT EXISTS uq_ttm_rc_semver_core
        ON task_touch_mapping(rc, semver_core)
        """
    )
    conn.execute(
        """
        CREATE UNIQUE INDEX IF NOT EXISTS uq_ttm_rc_semver_full
        ON task_touch_mapping(rc, semver_full)
        """
    )
    conn.execute(
        """
        CREATE INDEX IF NOT EXISTS idx_ttm_semver_core
        ON task_touch_mapping(rc, semver_core)
        """
    )

    conn.execute(
        """
        UPDATE schema_version
        SET version = ?, applied_at = ?
        WHERE id = 1
        """,
        (2, utc_now_iso()),
    )


def run_migrations(conn: sqlite3.Connection) -> None:
    """Apply pending migrations under an exclusive transaction (parallel-safe)."""
    if current_schema_version(conn) >= SCHEMA_VERSION:
        return
    conn.execute("BEGIN IMMEDIATE")
    try:
        if current_schema_version(conn) >= SCHEMA_VERSION:
            conn.execute("COMMIT")
            return
        if current_schema_version(conn) < 2:
            migrate_to_v2(conn)
        conn.execute("COMMIT")
    except Exception:
        conn.execute("ROLLBACK")
        raise
