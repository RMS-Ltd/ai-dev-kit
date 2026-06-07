"""Orchestrate full/incremental ingest of semver + changelog corpora."""

from __future__ import annotations

import sqlite3
from dataclasses import dataclass
from pathlib import Path
from typing import Any, Dict, Optional

from .config import get_store_config
from .ingest_changelog import corpus_manifest_hash, ingest_changelog_corpus
from .ingest_semver import ingest_semver_registry
from .store import log_ingest_run, open_store, update_cursor, utc_now_iso


@dataclass
class IngestResult:
    mode: str
    skipped: bool
    semver_stats: Dict[str, int]
    changelog_stats: Dict[str, int]
    manifest_hash: str
    store_path: Path


def run_ingest(
    *,
    project_root: Optional[Path] = None,
    full: bool = False,
    rw_config: Optional[Dict[str, Any]] = None,
) -> IngestResult:
    cfg = get_store_config(project_root, rw_config)
    if not cfg["ingest_enabled"]:
        raise RuntimeError("ingest disabled in rw-config.yaml")

    manifest = corpus_manifest_hash(
        cfg["changelog_main_path"],
        cfg["changelog_archive_dir"],
        cfg["semver_registry_path"],
    )
    mode = "full" if full else "incremental"
    started = utc_now_iso()

    with open_store(cfg["store_path"]) as conn:
        if not full and cfg["incremental_default"]:
            row = conn.execute(
                "SELECT last_manifest_hash FROM ingest_cursor WHERE domain = ?",
                ("global",),
            ).fetchone()
            if row and row["last_manifest_hash"] == manifest:
                finished = utc_now_iso()
                log_ingest_run(
                    conn,
                    started_at=started,
                    finished_at=finished,
                    mode=mode,
                    status="skipped",
                    message="manifest unchanged",
                )
                conn.commit()
                return IngestResult(
                    mode=mode,
                    skipped=True,
                    semver_stats={},
                    changelog_stats={},
                    manifest_hash=manifest,
                    store_path=cfg["store_path"],
                )

        semver_stats = ingest_semver_registry(conn, cfg["semver_registry_path"])
        changelog_stats = ingest_changelog_corpus(
            conn,
            cfg["changelog_main_path"],
            cfg["changelog_archive_dir"],
        )
        rows = semver_stats.get("mappings", 0) + changelog_stats.get("main", 0) + changelog_stats.get("archive", 0)
        update_cursor(conn, "global", manifest_hash=manifest, rows_upserted=rows)
        finished = utc_now_iso()
        log_ingest_run(
            conn,
            started_at=started,
            finished_at=finished,
            mode=mode,
            status="ok",
            message=f"semver={semver_stats} changelog={changelog_stats}",
        )
        conn.commit()

    return IngestResult(
        mode=mode,
        skipped=False,
        semver_stats=semver_stats,
        changelog_stats=changelog_stats,
        manifest_hash=manifest,
        store_path=cfg["store_path"],
    )
