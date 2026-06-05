"""
TTL housekeeping for workflow journals (FR-059 / ADR-008).
"""

from __future__ import annotations

import json
from dataclasses import dataclass
from datetime import datetime, timedelta, timezone
from pathlib import Path
from typing import List, Optional


@dataclass
class SweepResult:
    removed_files: List[str]
    kept_files: List[str]
    errors: List[str]


def _parse_started_at(path: Path) -> Optional[datetime]:
    try:
        data = json.loads(path.read_text(encoding="utf-8"))
        started = data.get("started_at")
        if not started:
            return None
        return datetime.fromisoformat(started.replace("Z", "+00:00"))
    except (json.JSONDecodeError, OSError, ValueError):
        return None


def sweep(
    journal_dir: Path,
    *,
    ttl_days: int = 7,
    failed_ttl_days: int = 30,
) -> SweepResult:
    """
    Remove rw-*.json journal files older than TTL.

    Failed runs (status failed/aborted) use failed_ttl_days.
    """
    removed: List[str] = []
    kept: List[str] = []
    errors: List[str] = []
    if not journal_dir.exists():
        return SweepResult(removed, kept, errors)

    now = datetime.now(timezone.utc)
    default_cutoff = now - timedelta(days=ttl_days)
    failed_cutoff = now - timedelta(days=failed_ttl_days)

    for path in sorted(journal_dir.glob("rw-*.json")):
        try:
            data = json.loads(path.read_text(encoding="utf-8"))
            status = (data.get("status") or "").lower()
            started = _parse_started_at(path)
            if started is None:
                kept.append(str(path))
                continue
            cutoff = failed_cutoff if status in ("failed", "aborted") else default_cutoff
            if started < cutoff:
                path.unlink()
                removed.append(str(path))
            else:
                kept.append(str(path))
        except OSError as exc:
            errors.append(f"{path}: {exc}")
    return SweepResult(removed, kept, errors)
