#!/usr/bin/env python3
"""
Timestamp index builder for KMA / UKW carry-forward (FR-144 / E06:S09:T45).

Read-only harvest of forensic timestamps from a legacy kanban corpus.
"""

from __future__ import annotations

import json
import re
from dataclasses import dataclass, field
from pathlib import Path
from typing import Any, Dict, Optional

_EST_RE = re.compile(r"\bE(\d{1,2})[:\-]S(\d{1,3})[:\-]T(\d{1,2})\b", re.I)
_LAST_UPDATED_RE = re.compile(
    r"\*\*Last\s+[Uu]pdated:\*\*\s*([^\n]+)", re.MULTILINE
)
_INLINE_DATE_RE = re.compile(
    r"\*\*(\d{4}-\d{2}-\d{2})(?:\s+\d{2}:\d{2})?\*\*"
)
_BOARD_STAMP_RE = re.compile(
    r"\|\s*Last modified:\s*(\d{4}-\d{2}-\d{2}\s+\d{2}:\d{2}\s+UTC)\s*$"
)


def normalize_est(epic: int, story: int, task: int) -> str:
    return f"E{epic}:S{story}:T{task:02d}" if task < 100 else f"E{epic}:S{story}:T{task}"


def parse_est(raw: str) -> Optional[str]:
    m = _EST_RE.search(raw)
    if not m:
        return None
    return normalize_est(int(m.group(1)), int(m.group(2)), int(m.group(3)))


def _normalize_stamp(raw: str) -> Optional[str]:
    text = raw.strip()
    if not text:
        return None
    m = re.match(r"^(\d{4}-\d{2}-\d{2})$", text)
    if m:
        return f"{m.group(1)} 00:00 UTC"
    m = re.match(r"^(\d{4}-\d{2}-\d{2})\s+(\d{2}:\d{2})\s+UTC$", text)
    if m:
        return f"{m.group(1)} {m.group(2)} UTC"
    m = re.match(r"^(\d{4}-\d{2}-\d{2})[T ](\d{2}):(\d{2})", text)
    if m:
        return f"{m.group(1)} {m.group(2)}:{m.group(3)} UTC"
    return None


@dataclass
class TimestampIndex:
    legacy_root: str
    entries: Dict[str, Dict[str, str]] = field(default_factory=dict)
    sources_scanned: int = 0

    def to_dict(self) -> Dict[str, Any]:
        return {
            "version": 1,
            "legacy_root": self.legacy_root,
            "entry_count": len(self.entries),
            "sources_scanned": self.sources_scanned,
            "entries": self.entries,
        }

    def is_non_empty(self) -> bool:
        return bool(self.entries)


def _source_priority(source: str) -> str:
    order = {
        "legacy_board_inline": "1",
        "story_last_updated": "2",
        "task_last_updated": "3",
        "inline_forensic": "4",
        "semantic_lineage": "5",
    }
    return order.get(source, "9")


def _record(index: TimestampIndex, task_id: str, stamp: str, source: str, path: str) -> None:
    if not stamp:
        return
    existing = index.entries.get(task_id)
    if existing and existing.get("priority", "9") <= _source_priority(source):
        return
    index.entries[task_id] = {
        "stamp": stamp,
        "source": source,
        "path": path,
        "priority": _source_priority(source),
    }


def load_semantic_lineage(path: Optional[Path]) -> Dict[str, str]:
    """Map bootstrap E:S:T → legacy E:S:T token."""
    if not path or not path.is_file():
        return {}
    try:
        import yaml

        data = yaml.safe_load(path.read_text(encoding="utf-8")) or {}
    except Exception:
        return {}
    mappings = data.get("mappings") or data.get("bootstrap_to_legacy") or data
    result: Dict[str, str] = {}
    if isinstance(mappings, dict):
        for bootstrap, legacy in mappings.items():
            b = parse_est(str(bootstrap))
            leg = parse_est(str(legacy))
            if b and leg:
                result[b] = leg
    return result


def build_timestamp_index(
    legacy_root: Path,
    *,
    lineage_path: Optional[Path] = None,
) -> TimestampIndex:
    legacy_root = legacy_root.resolve()
    index = TimestampIndex(legacy_root=str(legacy_root))
    if not legacy_root.is_dir():
        return index

    lineage = load_semantic_lineage(lineage_path)

    for path in sorted(legacy_root.rglob("*.md")):
        if not path.is_file():
            continue
        index.sources_scanned += 1
        try:
            text = path.read_text(encoding="utf-8", errors="replace")
        except OSError:
            continue
        rel = str(path.relative_to(legacy_root))

        if path.name.lower() in ("kboard.md", "kanban-board.md"):
            for line in text.splitlines():
                if not line.strip().startswith("-"):
                    continue
                est = parse_est(line)
                if not est:
                    continue
                for dm in _INLINE_DATE_RE.finditer(line):
                    stamp = _normalize_stamp(dm.group(1))
                    if stamp:
                        _record(index, est, stamp, "legacy_board_inline", rel)
                sm = _BOARD_STAMP_RE.search(line)
                if sm and est:
                    _record(index, est, sm.group(1), "legacy_board_inline", rel)

        for m in _LAST_UPDATED_RE.finditer(text):
            stamp = _normalize_stamp(m.group(1))
            if not stamp:
                continue
            task_id = None
            for tm in _EST_RE.finditer(text):
                task_id = parse_est(tm.group(0))
                break
            if not task_id:
                task_id = parse_est(path.name)
            if task_id:
                source = (
                    "story_last_updated"
                    if "story" in path.name.lower()
                    else "task_last_updated"
                )
                _record(index, task_id, stamp, source, rel)

        for line in text.splitlines():
            est = parse_est(line)
            if not est:
                continue
            for dm in _INLINE_DATE_RE.finditer(line):
                stamp = _normalize_stamp(dm.group(1))
                if stamp:
                    _record(index, est, stamp, "inline_forensic", rel)

    for bootstrap, legacy in lineage.items():
        leg_entry = index.entries.get(legacy)
        if leg_entry:
            _record(
                index,
                bootstrap,
                leg_entry["stamp"],
                "semantic_lineage",
                str(lineage_path or "SEMANTIC-LINEAGE-BOOTSTRAP.yaml"),
            )

    for entry in index.entries.values():
        entry.pop("priority", None)
    return index


def write_timestamp_index(index: TimestampIndex, out_path: Path) -> None:
    out_path.parent.mkdir(parents=True, exist_ok=True)
    out_path.write_text(
        json.dumps(index.to_dict(), indent=2, sort_keys=True) + "\n",
        encoding="utf-8",
    )


def lookup_stamp(index: Dict[str, Any], task_id: str) -> Optional[str]:
    entries = index.get("entries") or {}
    normalized = parse_est(task_id) or task_id
    row = entries.get(normalized) or entries.get(task_id) or entries.get(task_id.upper())
    if not row:
        return None
    return row.get("stamp")
