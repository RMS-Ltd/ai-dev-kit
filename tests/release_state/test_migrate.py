"""Migration concurrency tests (BR-104 / E02:S16:T05)."""

from __future__ import annotations

import concurrent.futures
import sys
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parents[2]
SCRIPTS = REPO_ROOT / "packages/frameworks/workflow-mgt/scripts"
sys.path.insert(0, str(SCRIPTS))

from release_state.allocate import allocate  # noqa: E402
from release_state.db import open_db  # noqa: E402


def test_parallel_open_db_migrations_no_duplicate_column(tmp_path):
    """TC1: concurrent allocate/open_db must not race migrate_to_v2 ALTER TABLE."""
    db_path = tmp_path / "parallel-migrate.db"
    internals = [f"0.2.1.{i}+1" for i in range(1, 16)]

    with concurrent.futures.ThreadPoolExecutor(max_workers=8) as pool:
        list(pool.map(lambda iv: allocate(db_path, iv), internals))

    conn = open_db(db_path)
    try:
        version = conn.execute(
            "SELECT version FROM schema_version WHERE id = 1"
        ).fetchone()
        assert version is not None
        assert int(version["version"]) >= 2
    finally:
        conn.close()
