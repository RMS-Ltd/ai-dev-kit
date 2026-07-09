"""CRUD helpers for completed_task rows."""

from __future__ import annotations

import re
import sqlite3
from dataclasses import dataclass
from typing import Iterable, List, Optional, TypedDict

from kanban_completed.db import utc_now_iso

EST_RE = re.compile(r"E(\d+):S(\d+):T(\d+)", re.I)
VERSION_RE = re.compile(r"v(\d+\.\d+\.\d+\.\d+\+\d+)")
COMPLETED_RE = re.compile(r"\*\*Completed:\*\*\s*`([^`]+)`", re.I)
AGENT_RE = re.compile(r"\*\*Agent:\*\*\s*`([^`]+)`", re.I)


class LedgerAccum(TypedDict, total=False):
    epic: int
    story: int
    task: int
    summary: str
    internal_version: str
    completed_at: str
    completing_agent: str


@dataclass
class CompletedTaskRow:
    epic: int
    story: int
    task: int
    internal_version: str
    completed_at: str
    completing_agent: str
    summary: str
    archived_at: str
    kboard_row_snapshot: Optional[str] = None

    @property
    def token(self) -> str:
        return f"E{self.epic:02d}:S{self.story:02d}:T{self.task:02d}"


def upsert_completed_task(conn: sqlite3.Connection, row: CompletedTaskRow) -> None:
    conn.execute(
        """
        INSERT INTO completed_task (
          epic, story, task, internal_version, completed_at,
          completing_agent, summary, archived_at, kboard_row_snapshot
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        ON CONFLICT(epic, story, task) DO UPDATE SET
          internal_version=excluded.internal_version,
          completed_at=excluded.completed_at,
          completing_agent=excluded.completing_agent,
          summary=excluded.summary,
          archived_at=excluded.archived_at,
          kboard_row_snapshot=COALESCE(excluded.kboard_row_snapshot, completed_task.kboard_row_snapshot)
        """,
        (
            row.epic,
            row.story,
            row.task,
            row.internal_version,
            row.completed_at,
            row.completing_agent,
            row.summary,
            row.archived_at,
            row.kboard_row_snapshot,
        ),
    )
    conn.commit()


def list_recent(conn: sqlite3.Connection, limit: int = 20) -> List[CompletedTaskRow]:
    cur = conn.execute(
        """
        SELECT epic, story, task, internal_version, completed_at,
               completing_agent, summary, archived_at, kboard_row_snapshot
        FROM completed_task
        ORDER BY completed_at DESC, epic, story, task
        LIMIT ?
        """,
        (limit,),
    )
    return [_row_from_sql(r) for r in cur.fetchall()]


def list_all(conn: sqlite3.Connection) -> List[CompletedTaskRow]:
    cur = conn.execute(
        """
        SELECT epic, story, task, internal_version, completed_at,
               completing_agent, summary, archived_at, kboard_row_snapshot
        FROM completed_task
        ORDER BY epic, story, task
        """
    )
    return [_row_from_sql(r) for r in cur.fetchall()]


def count_rows(conn: sqlite3.Connection) -> int:
    row = conn.execute("SELECT COUNT(*) AS c FROM completed_task").fetchone()
    return int(row["c"]) if row else 0


def get_completed_task(
    conn: sqlite3.Connection, epic: int, story: int, task: int
) -> Optional[CompletedTaskRow]:
    cur = conn.execute(
        """
        SELECT epic, story, task, internal_version, completed_at,
               completing_agent, summary, archived_at, kboard_row_snapshot
        FROM completed_task
        WHERE epic = ? AND story = ? AND task = ?
        """,
        (epic, story, task),
    )
    row = cur.fetchone()
    return _row_from_sql(row) if row else None


def _row_from_sql(r: sqlite3.Row) -> CompletedTaskRow:
    return CompletedTaskRow(
        epic=int(r["epic"]),
        story=int(r["story"]),
        task=int(r["task"]),
        internal_version=str(r["internal_version"]),
        completed_at=str(r["completed_at"]),
        completing_agent=str(r["completing_agent"] or ""),
        summary=str(r["summary"] or ""),
        archived_at=str(r["archived_at"]),
        kboard_row_snapshot=r["kboard_row_snapshot"],
    )


def parse_markdown_ledger(text: str) -> Iterable[CompletedTaskRow]:
    """Best-effort import from legacy kanban-completed.md."""
    archived_at = utc_now_iso()
    current: LedgerAccum = {}
    for raw in text.splitlines():
        line = raw.strip()
        m = EST_RE.search(line)
        if m and line.startswith("- **["):
            if current.get("epic") is not None:
                yield _entry_from_accum(current, archived_at)
            current = {
                "epic": int(m.group(1)),
                "story": int(m.group(2)),
                "task": int(m.group(3)),
                "summary": _strip_md(line),
            }
            continue
        if not current:
            continue
        vm = VERSION_RE.search(line)
        if vm and "Version" in line:
            current["internal_version"] = vm.group(1)
        cm = COMPLETED_RE.search(line)
        if cm:
            current["completed_at"] = cm.group(1)
        am = AGENT_RE.search(line)
        if am:
            current["completing_agent"] = am.group(1)
        if not current.get("internal_version"):
            vm2 = VERSION_RE.search(line)
            if vm2:
                current["internal_version"] = vm2.group(1)
    if current.get("epic") is not None:
        yield _entry_from_accum(current, archived_at)


def _entry_from_accum(data: LedgerAccum, archived_at: str) -> CompletedTaskRow:
    version = data.get("internal_version") or "v0.0.0.0+0"
    if not version.startswith("v"):
        version = f"v{version}"
    return CompletedTaskRow(
        epic=int(data["epic"]),
        story=int(data["story"]),
        task=int(data["task"]),
        internal_version=version,
        completed_at=data.get("completed_at") or archived_at,
        completing_agent=data.get("completing_agent") or "import",
        summary=data.get("summary") or "",
        archived_at=archived_at,
    )


def _strip_md(line: str) -> str:
    text = re.sub(r"\[([^\]]+)\]\([^)]+\)", r"\1", line)
    text = text.lstrip("- ").strip()
    return text[:500]
