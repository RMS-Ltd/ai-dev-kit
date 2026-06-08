#!/usr/bin/env python3
"""Shared frontmatter parsing utilities for doc-lifecycle scripts."""

from __future__ import annotations

from dataclasses import dataclass
from datetime import datetime, timedelta, timezone
from pathlib import Path
from typing import Any, Dict, Iterator, Optional, Tuple

try:
    import yaml

    YAML_AVAILABLE = True
except ImportError:
    yaml = None  # type: ignore[assignment]
    YAML_AVAILABLE = False

LIFECYCLE_VALUES = frozenset({"evergreen", "timeboxed", "transient"})
POLICY_VALUES = frozenset({"keep", "archive", "delete"})
REQUIRED_FIELDS = (
    "lifecycle",
    "ttl_days",
    "created_at",
    "expires_at",
    "housekeeping_policy",
)


@dataclass
class ParsedDocument:
    path: Path
    relative_path: str
    metadata: Dict[str, Any]
    body: str


def parse_iso_datetime(value: Any) -> Optional[datetime]:
    if isinstance(value, datetime):
        if value.tzinfo is None:
            return value.replace(tzinfo=timezone.utc)
        return value.astimezone(timezone.utc)
    if isinstance(value, str):
        try:
            parsed = datetime.fromisoformat(value.replace("Z", "+00:00"))
        except ValueError:
            return None
        if parsed.tzinfo is None:
            return parsed.replace(tzinfo=timezone.utc)
        return parsed.astimezone(timezone.utc)
    return None


def is_valid_iso_datetime(value: Any) -> bool:
    return parse_iso_datetime(value) is not None


def split_frontmatter(content: str) -> Tuple[Optional[str], str]:
    if not content.startswith("---"):
        return None, content
    end = content.find("---", 3)
    if end == -1:
        return None, content
    return content[3:end].strip(), content[end + 3 :].lstrip("\n")


def load_frontmatter(content: str) -> Tuple[Optional[Dict[str, Any]], Optional[str]]:
    if not YAML_AVAILABLE:
        return None, "PyYAML is not installed"
    frontmatter_text, _body = split_frontmatter(content)
    if frontmatter_text is None:
        return None, "No frontmatter block"
    try:
        metadata = yaml.safe_load(frontmatter_text)
    except Exception as exc:  # noqa: BLE001 - surface parse errors to callers
        return None, f"Failed to parse frontmatter YAML: {exc}"
    if not isinstance(metadata, dict):
        return None, "Frontmatter must be a mapping"
    return metadata, None


def iter_markdown_documents(root: Path) -> Iterator[Path]:
    for path in sorted(root.rglob("*.md")):
        if path.is_file():
            yield path


def load_document(path: Path, root: Path) -> ParsedDocument:
    content = path.read_text(encoding="utf-8")
    metadata, error = load_frontmatter(content)
    if error or metadata is None:
        metadata = {}
    _frontmatter, body = split_frontmatter(content)
    if body == content and _frontmatter is None:
        body = content
    return ParsedDocument(
        path=path,
        relative_path=str(path.relative_to(root)),
        metadata=metadata,
        body=body if _frontmatter is not None else content,
    )


def expected_expires_at(created_at: datetime, ttl_days: int) -> datetime:
    return created_at + timedelta(days=ttl_days)


def expires_at_within_tolerance(
    created_at: datetime, ttl_days: int, expires_at: datetime, tolerance_days: int = 1
) -> bool:
    expected = expected_expires_at(created_at, ttl_days)
    delta = abs((expires_at - expected).total_seconds())
    return delta <= tolerance_days * 86400
