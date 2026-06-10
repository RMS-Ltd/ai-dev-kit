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


def migrate_to_v2(conn: sqlite3.Connection) -> None:
    """Add semver_core column and UNIQUE constraints on semver_core / semver_full."""
    cols = {
        row["name"]
        for row in conn.execute("PRAGMA table_info(task_touch_mapping)").fetchall()
    }
    if "semver_core" not in cols:
        conn.execute(
            "ALTER TABLE task_touch_mapping ADD COLUMN semver_core TEXT"
        )
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
    version = current_schema_version(conn)
    if version < 2:
        migrate_to_v2(conn)
