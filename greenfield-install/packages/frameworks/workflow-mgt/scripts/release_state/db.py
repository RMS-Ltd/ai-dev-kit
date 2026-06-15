"""SQLite connection and schema initialization."""

from __future__ import annotations

import sqlite3
import threading
from pathlib import Path

from release_state.time_util import utc_now_iso

_SCHEMA_PATH = Path(__file__).resolve().parent / "schema.sql"
_DB_INIT_GUARD = threading.Lock()
_DB_INIT_LOCKS: dict[str, threading.Lock] = {}


def _db_init_lock(db_path: Path) -> threading.Lock:
    """One init/migration lock per DB file (parallel allocate stress tests)."""
    key = str(db_path.resolve())
    with _DB_INIT_GUARD:
        lock = _DB_INIT_LOCKS.get(key)
        if lock is None:
            lock = threading.Lock()
            _DB_INIT_LOCKS[key] = lock
        return lock


def connect(db_path: Path) -> sqlite3.Connection:
    db_path.parent.mkdir(parents=True, exist_ok=True)
    conn = sqlite3.connect(str(db_path))
    conn.row_factory = sqlite3.Row
    conn.execute("PRAGMA journal_mode=WAL")
    conn.execute("PRAGMA foreign_keys=ON")
    conn.execute("PRAGMA synchronous=NORMAL")
    conn.execute("PRAGMA busy_timeout=15000")
    return conn


def init_schema(conn: sqlite3.Connection) -> None:
    ddl = _SCHEMA_PATH.read_text(encoding="utf-8")
    conn.executescript(ddl)
    row = conn.execute("SELECT version FROM schema_version WHERE id = 1").fetchone()
    if row is None:
        conn.execute(
            "INSERT INTO schema_version (id, version, applied_at) VALUES (1, 1, ?)",
            (utc_now_iso(),),
        )
    conn.commit()


def open_db(db_path: Path) -> sqlite3.Connection:
    conn = connect(db_path)
    with _db_init_lock(db_path):
        init_schema(conn)
        from release_state.migrate import run_migrations

        run_migrations(conn)
        conn.commit()
    return conn
