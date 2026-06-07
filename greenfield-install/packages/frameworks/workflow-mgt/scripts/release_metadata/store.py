"""SQLite connection and schema initialization."""

from __future__ import annotations

import sqlite3
from contextlib import contextmanager
from datetime import datetime, timezone
from pathlib import Path
from typing import Iterator, Optional


def utc_now_iso() -> str:
    return datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M:%S UTC")


def init_schema(conn: sqlite3.Connection) -> None:
    schema_path = Path(__file__).resolve().parent / "schema.sql"
    conn.executescript(schema_path.read_text(encoding="utf-8"))
    conn.commit()


@contextmanager
def open_store(db_path: Path, *, init: bool = True) -> Iterator[sqlite3.Connection]:
    db_path.parent.mkdir(parents=True, exist_ok=True)
    conn = sqlite3.connect(str(db_path))
    conn.row_factory = sqlite3.Row
    conn.execute("PRAGMA foreign_keys = ON")
    if init:
        init_schema(conn)
    try:
        yield conn
    finally:
        conn.close()


def upsert_release(
    conn: sqlite3.Connection,
    internal_version: str,
    *,
    epic: Optional[int],
    story: Optional[int],
    task: Optional[int],
    build: Optional[int],
    rc: int = 0,
    release_date_utc: Optional[str] = None,
    ingested_at: Optional[str] = None,
) -> None:
    ts = ingested_at or utc_now_iso()
    conn.execute(
        """
        INSERT INTO release (internal_version, epic, story, task, build, rc, release_date_utc, ingested_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        ON CONFLICT(internal_version) DO UPDATE SET
          epic = COALESCE(excluded.epic, release.epic),
          story = COALESCE(excluded.story, release.story),
          task = COALESCE(excluded.task, release.task),
          build = COALESCE(excluded.build, release.build),
          rc = excluded.rc,
          release_date_utc = COALESCE(excluded.release_date_utc, release.release_date_utc),
          ingested_at = excluded.ingested_at
        """,
        (internal_version, epic, story, task, build, rc, release_date_utc, ts),
    )


def log_ingest_run(
    conn: sqlite3.Connection,
    *,
    started_at: str,
    finished_at: str,
    mode: str,
    status: str,
    message: str = "",
) -> None:
    conn.execute(
        """
        INSERT INTO ingest_run_log (started_at, finished_at, mode, status, message)
        VALUES (?, ?, ?, ?, ?)
        """,
        (started_at, finished_at, mode, status, message),
    )


def update_cursor(
    conn: sqlite3.Connection,
    domain: str,
    *,
    manifest_hash: Optional[str] = None,
    git_sha: Optional[str] = None,
    rows_upserted: int = 0,
) -> None:
    conn.execute(
        """
        INSERT INTO ingest_cursor (domain, last_git_sha, last_manifest_hash, last_run_at, rows_upserted)
        VALUES (?, ?, ?, ?, ?)
        ON CONFLICT(domain) DO UPDATE SET
          last_git_sha = COALESCE(excluded.last_git_sha, ingest_cursor.last_git_sha),
          last_manifest_hash = COALESCE(excluded.last_manifest_hash, ingest_cursor.last_manifest_hash),
          last_run_at = excluded.last_run_at,
          rows_upserted = excluded.rows_upserted
        """,
        (domain, git_sha, manifest_hash, utc_now_iso(), rows_upserted),
    )
