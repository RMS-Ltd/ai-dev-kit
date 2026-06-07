"""Ingest CHANGELOG.md and archive CHANGELOG_v*.md files."""

from __future__ import annotations

import re
import sqlite3
import sys
from pathlib import Path
from typing import Dict, List, Optional, Tuple

_SCRIPTS = Path(__file__).resolve().parent.parent
if str(_SCRIPTS) not in sys.path:
    sys.path.insert(0, str(_SCRIPTS))

from changelog.changelog_utils import ChangelogEntry, extract_changelog_entries  # noqa: E402

from .hashutil import row_hash_payload, sha256_text
from .ingest_semver import normalize_internal_version, parse_internal_version
from .store import upsert_release, utc_now_iso

KEEP_A_CHANGELOG_SECTIONS = {
    "added",
    "changed",
    "deprecated",
    "removed",
    "fixed",
    "security",
    "attempted fixes",
    "attempted fix",
}


def _parse_sections(body: str) -> List[Tuple[str, List[str]]]:
    """Return list of (section_name, bullet_lines)."""
    sections: List[Tuple[str, List[str]]] = []
    current_name: Optional[str] = None
    current_lines: List[str] = []

    for line in body.splitlines():
        if line.startswith("### "):
            if current_name is not None:
                sections.append((current_name, current_lines))
            current_name = line[4:].strip()
            current_lines = []
        elif current_name is not None:
            current_lines.append(line)

    if current_name is not None:
        sections.append((current_name, current_lines))
    return sections


def _extract_summary(body: str) -> str:
    for line in body.splitlines():
        stripped = line.strip()
        if stripped and not stripped.startswith("#") and not stripped.startswith("["):
            return stripped[:500]
    return ""


def _release_date_from_detailed(text: str) -> Optional[str]:
    m = re.search(r"\*\*Release Date:\*\*\s*([^\n]+)", text)
    return m.group(1).strip() if m else None


def _version_from_detailed(text: str, fallback: str) -> str:
    m = re.search(r"\*\*Version:\*\*\s*v?([^\s]+)", text)
    return normalize_internal_version(m.group(1)) if m else fallback


def _version_from_archive_filename(path: Path) -> Optional[str]:
    m = re.match(r"CHANGELOG_v(.+)\.md$", path.name, re.IGNORECASE)
    if not m:
        return None
    return normalize_internal_version(m.group(1).replace("%2B", "+"))


def ingest_changelog_file(
    conn: sqlite3.Connection,
    path: Path,
    *,
    source_label: Optional[str] = None,
) -> int:
    """Ingest one changelog file; returns number of releases upserted."""
    if not path.exists():
        return 0

    text = path.read_text(encoding="utf-8")
    ingested_at = utc_now_iso()
    count = 0

    if path.name.startswith("CHANGELOG_v"):
        iv = _version_from_archive_filename(path)
        if not iv:
            return 0
        release_date = _release_date_from_detailed(text)
        iv = _version_from_detailed(text, iv)
        try:
            rc, epic, story, task, build = parse_internal_version(iv)
        except ValueError:
            return 0

        upsert_release(
            conn,
            iv,
            epic=epic,
            story=story,
            task=task,
            build=build,
            rc=rc,
            release_date_utc=release_date,
            ingested_at=ingested_at,
        )

        summary = ""
        sm = re.search(r"## Summary\s*\n+(.+?)(?=\n## |\Z)", text, re.DOTALL)
        if sm:
            summary = sm.group(1).strip().splitlines()[0][:500]

        row = {
            "internal_version": iv,
            "source_path": str(source_label or path),
            "summary": summary,
            "release_date_utc": release_date,
        }
        rh = row_hash_payload(row)
        conn.execute(
            """
            INSERT INTO changelog_release (internal_version, source_path, summary, release_date_utc, row_hash, ingested_at)
            VALUES (?, ?, ?, ?, ?, ?)
            ON CONFLICT(internal_version) DO UPDATE SET
              source_path = excluded.source_path,
              summary = COALESCE(excluded.summary, changelog_release.summary),
              release_date_utc = COALESCE(excluded.release_date_utc, changelog_release.release_date_utc),
              row_hash = excluded.row_hash,
              ingested_at = excluded.ingested_at
            """,
            (iv, row["source_path"], summary, release_date, rh, ingested_at),
        )
        _replace_sections(conn, iv, _parse_sections(text))
        count += 1
        return count

    entries: List[ChangelogEntry] = extract_changelog_entries(text)
    for entry in entries:
        iv = normalize_internal_version(entry.version_str)
        try:
            rc, epic, story, task, build = parse_internal_version(iv)
        except ValueError:
            continue

        release_date = None
        if entry.date_obj:
            release_date = entry.date_obj.strftime("%Y-%m-%d")

        upsert_release(
            conn,
            iv,
            epic=epic,
            story=story,
            task=task,
            build=build,
            rc=rc,
            release_date_utc=release_date,
            ingested_at=ingested_at,
        )

        summary = _extract_summary(entry.content)
        row = {
            "internal_version": iv,
            "source_path": str(source_label or path),
            "summary": summary,
            "release_date_utc": release_date,
        }
        rh = row_hash_payload(row)
        conn.execute(
            """
            INSERT INTO changelog_release (internal_version, source_path, summary, release_date_utc, row_hash, ingested_at)
            VALUES (?, ?, ?, ?, ?, ?)
            ON CONFLICT(internal_version) DO UPDATE SET
              source_path = excluded.source_path,
              summary = COALESCE(excluded.summary, changelog_release.summary),
              release_date_utc = COALESCE(excluded.release_date_utc, changelog_release.release_date_utc),
              row_hash = excluded.row_hash,
              ingested_at = excluded.ingested_at
            """,
            (iv, row["source_path"], summary, release_date, rh, ingested_at),
        )
        _replace_sections(conn, iv, _parse_sections(entry.content))
        count += 1

    return count


def _replace_sections(
    conn: sqlite3.Connection,
    internal_version: str,
    sections: List[Tuple[str, List[str]]],
) -> None:
    conn.execute(
        "DELETE FROM changelog_item WHERE section_id IN "
        "(SELECT id FROM changelog_section WHERE internal_version = ?)",
        (internal_version,),
    )
    conn.execute("DELETE FROM changelog_section WHERE internal_version = ?", (internal_version,))

    for s_idx, (name, lines) in enumerate(sections):
        conn.execute(
            """
            INSERT INTO changelog_section (internal_version, section_name, sort_order)
            VALUES (?, ?, ?)
            """,
            (internal_version, name, s_idx),
        )
        section_id = conn.execute("SELECT last_insert_rowid()").fetchone()[0]
        item_order = 0
        for line in lines:
            body = line.strip()
            if not body or body == "---":
                continue
            conn.execute(
                """
                INSERT INTO changelog_item (section_id, body_md, sort_order, verification_status, linked_est, linked_fr_br)
                VALUES (?, ?, ?, ?, ?, ?)
                """,
                (section_id, body, item_order, None, None, None),
            )
            item_order += 1


def ingest_changelog_corpus(
    conn: sqlite3.Connection,
    main_path: Path,
    archive_dir: Path,
) -> Dict[str, int]:
    stats = {"main": 0, "archive": 0}
    stats["main"] = ingest_changelog_file(conn, main_path)
    if archive_dir.is_dir():
        for path in sorted(archive_dir.glob("CHANGELOG_v*.md")):
            stats["archive"] += ingest_changelog_file(conn, path)
    return stats


def corpus_manifest_hash(main_path: Path, archive_dir: Path, semver_path: Path) -> str:
    parts: List[str] = []
    if main_path.exists():
        parts.append(sha256_text(main_path.read_text(encoding="utf-8")))
    if semver_path.exists():
        parts.append(sha256_text(semver_path.read_text(encoding="utf-8")))
    if archive_dir.is_dir():
        for p in sorted(archive_dir.glob("CHANGELOG_v*.md")):
            parts.append(sha256_text(p.read_text(encoding="utf-8")))
    return sha256_text("|".join(parts))
