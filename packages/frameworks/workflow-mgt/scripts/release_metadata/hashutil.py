"""Deterministic content hashing for idempotent ingest."""

from __future__ import annotations

import hashlib
import json
from typing import Any


def sha256_text(text: str) -> str:
    return hashlib.sha256(text.encode("utf-8")).hexdigest()


def sha256_file(path) -> str:
    return sha256_text(path.read_text(encoding="utf-8"))


def row_hash_payload(payload: Any) -> str:
    """Stable hash for structured row dicts."""
    normalized = json.dumps(payload, sort_keys=True, separators=(",", ":"), default=str)
    return sha256_text(normalized)
