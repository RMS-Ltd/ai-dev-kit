"""Shared time helpers for release-state SQLite (breaks db ↔ migrate import cycle)."""

from __future__ import annotations

from datetime import datetime, timezone


def utc_now_iso() -> str:
    return datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
