"""Migration concurrency tests (BR-104 / E02:S16:T05)."""

from __future__ import annotations

import concurrent.futures
import sqlite3
import sys
import time
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parents[2]
SCRIPTS = REPO_ROOT / "packages/frameworks/workflow-mgt/scripts"
sys.path.insert(0, str(SCRIPTS))

from release_state.allocate import allocate  # noqa: E402
from release_state.db import open_db  # noqa: E402


def _open_with_retry(db_path: Path, *, attempts: int = 12) -> None:
    for attempt in range(attempts):
        try:
            conn = open_db(db_path)
            conn.close()
            return
        except sqlite3.OperationalError as exc:
            msg = str(exc).lower()
            if "duplicate column" in msg:
                raise
            if "locked" not in msg:
                raise
            time.sleep(0.02 * (attempt + 1))
    raise AssertionError("open_db remained locked after retries")


def test_parallel_open_db_migrations_no_duplicate_column(tmp_path):
    """TC1: concurrent open_db/allocate must not race migrate_to_v2 ALTER TABLE."""
    db_path = tmp_path / "parallel-migrate.db"
    internals = [f"0.2.1.{i}+1" for i in range(1, 16)]

    def _alloc(iv: str):
        _open_with_retry(db_path)
        return allocate(db_path, iv)

    with concurrent.futures.ThreadPoolExecutor(max_workers=8) as pool:
        list(pool.map(_alloc, internals))

    conn = open_db(db_path)
    version = conn.execute(
        "SELECT version FROM schema_version WHERE id = 1"
    ).fetchone()
    conn.close()
    assert version is not None
    assert int(version["version"]) >= 2
