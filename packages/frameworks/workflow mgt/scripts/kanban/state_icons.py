#!/usr/bin/env python3
"""
MoSCOW row state icons (UXR-012 / E4:S13:T07).

Boards (kboard.md, fbuboard.md): Set A (emoji) only before the status token.
Plain-text / degraded contexts: Set B (Unicode) documented as fallback — not
mixed into repo board rows by default.

Pairs with FR-097: icon-only mutations must not change | Last modified stamps.
"""

from __future__ import annotations

import re
from typing import Dict, List, Optional, Tuple

# Import shared MoSCOW detection from stamp_authority (same package).
try:
    from stamp_authority import MOSCOW_HEADER_RE
except ImportError:  # pragma: no cover - direct script run
    MOSCOW_HEADER_RE = re.compile(r"^##\s+MoSCOW", re.IGNORECASE)

# Canonical state key -> (primary emoji, fallback unicode)
STATE_ICON_MAP: Dict[str, Tuple[str, str]] = {
    "COMPLETE": ("✅", "✓"),
    "CLOSED": ("✅", "✓"),
    "RESOLVED": ("✅", "✓"),
    "IMPLEMENTED": ("✅", "✓"),
    "FIXED": ("🔧", "⚒"),
    "IN_PROGRESS": ("🔄", "◐"),
    "TODO": ("📋", "○"),
    "PROPOSED": ("💡", "◇"),
    "OPEN": ("🟢", "●"),
    "REOPENED": ("🔁", "↻"),
    "BLOCKED": ("🚫", "⊘"),
    "SUPERSEDED": ("⏭️", "≫"),
    "ACCEPTED": ("📥", "⊕"),
    "PERPETUAL": ("🔄", "◐"),
}

# Longest-first status tokens after the " - " separator (ASCII hyphen + space).
_STATUS_TOKEN_ORDER: Tuple[str, ...] = (
    "IN PROGRESS (PERPETUAL)",
    "IN PROGRESS",
    "SUPERSEDED",
    "IMPLEMENTED",
    "REOPENED",
    "PROPOSED",
    "ACCEPTED",
    "✅ COMPLETE",
    "COMPLETE",
    "RESOLVED",
    "PERPETUAL",
    "BLOCKED",
    "CLOSED",
    "FIXED",
    "TODO",
    "OPEN",
    "PENDING",
    "ACTIVE",
)

_TOKEN_TO_CANONICAL: Dict[str, str] = {
    "IN PROGRESS (PERPETUAL)": "IN_PROGRESS",
    "IN PROGRESS": "IN_PROGRESS",
    "TODO": "TODO",
    "PROPOSED": "PROPOSED",
    "OPEN": "OPEN",
    "REOPENED": "REOPENED",
    "BLOCKED": "BLOCKED",
    "SUPERSEDED": "SUPERSEDED",
    "ACCEPTED": "ACCEPTED",
    "PERPETUAL": "PERPETUAL",
    "✅ COMPLETE": "COMPLETE",
    "COMPLETE": "COMPLETE",
    "CLOSED": "CLOSED",
    "RESOLVED": "RESOLVED",
    "IMPLEMENTED": "IMPLEMENTED",
    "FIXED": "FIXED",
    "PENDING": "OPEN",
    "ACTIVE": "IN_PROGRESS",
}

# Any leading icon chars (primary + fallback) we strip before re-injecting.
_ALL_ICON_CHARS = frozenset(
    "".join(p for pair in STATE_ICON_MAP.values() for p in pair)
)


def _collapse_ws(s: str) -> str:
    return re.sub(r"\s+", " ", s.strip())


def normalize_status_token(raw: str) -> Optional[str]:
    """
    Map a matched status prefix (e.g. 'IN PROGRESS', 'PENDING') to canonical key.
    """
    s = raw.strip().upper()
    alias = {
        "PENDING": "OPEN",
        "INTAKE": "OPEN",
    }
    if s in alias:
        s = alias[s]
    for token, canon in _TOKEN_TO_CANONICAL.items():
        if s == token.upper():
            return canon
    if s.startswith("IN PROGRESS"):
        return "IN_PROGRESS"
    if s.startswith("COMPLETE") or s.startswith("✅"):
        return "COMPLETE"
    if s.startswith("RESOLVED"):
        return "RESOLVED"
    if s.startswith("IMPLEMENTED"):
        return "IMPLEMENTED"
    if s.startswith("FIXED"):
        return "FIXED"
    if s.startswith("TODO"):
        return "TODO"
    if s.startswith("OPEN"):
        return "OPEN"
    if s.startswith("PROPOSED"):
        return "PROPOSED"
    if s.startswith("REOPENED"):
        return "REOPENED"
    if s.startswith("BLOCKED"):
        return "BLOCKED"
    if s.startswith("SUPERSEDED"):
        return "SUPERSEDED"
    if s.startswith("ACCEPTED"):
        return "ACCEPTED"
    if s.startswith("PERPETUAL"):
        return "PERPETUAL"
    if s.startswith("PENDING"):
        return "OPEN"
    if s.startswith("ACTIVE"):
        return "IN_PROGRESS"


def match_canonical_at_start(rest_stripped: str) -> Optional[str]:
    """Longest token match at start of string (after optional leading icons)."""
    s = _strip_known_icons(rest_stripped)
    for token in _STATUS_TOKEN_ORDER:
        if s.upper().startswith(token.upper()) and (
            len(s) == len(token) or not s[len(token)].isalnum()
        ):
            return _TOKEN_TO_CANONICAL.get(token)
    return normalize_status_token(s.split()[0] if s.split() else s)


def primary_icon(canonical: str) -> str:
    return STATE_ICON_MAP[canonical][0]


def fallback_icon(canonical: str) -> str:
    return STATE_ICON_MAP[canonical][1]


def _strip_known_icons(prefix: str) -> str:
    """Remove leading icon run (primary/fallback) from status segment prefix."""
    p = prefix.lstrip()
    while p and p[0] in _ALL_ICON_CHARS:
        p = p[1:].lstrip()
    return p


def _status_starts_here(candidate: str) -> bool:
    """True if candidate (after optional icons) begins with a known status token."""
    stripped = _strip_known_icons(candidate)
    for token in _STATUS_TOKEN_ORDER:
        if stripped.upper().startswith(token.upper()) and (
            len(stripped) == len(token) or not stripped[len(token)].isalnum()
        ):
            return True
    return stripped.upper().startswith("IN PROGRESS")


def _find_status_split(pre_pipe: str) -> Optional[Tuple[str, str]]:
    """
    Return (description_after_en_dash, status_segment_including_leading_icons).

    Some rows include extra `` - `` segments before links (e.g. ``- TODO (...) - [Task Document]``).
    We scan left-to-right for the first `` - `` that is immediately followed by a known status.
    """
    if " – " not in pre_pipe:
        return None
    _, after_en = pre_pipe.split(" – ", 1)
    search_from = 0
    while True:
        idx = after_en.find(" - ", search_from)
        if idx < 0:
            return None
        stat_rest = after_en[idx + 3 :]
        if _status_starts_here(stat_rest):
            desc = after_en[:idx]
            return (desc, stat_rest)
        search_from = idx + 1


def parse_row_status_segment(line: str) -> Optional[Tuple[str, str]]:
    """
    Parse a MoSCOW bullet line into (prefix_through_desc_hyphen, status_rest).

    prefix ends with ' - ' (ASCII hyphen); status_rest is remainder of row
    before first ' | ' (pipe starting link section / Last modified).
    """
    stripped = line.strip()
    if not stripped.startswith("- **"):
        return None
    if " – " not in stripped:
        return None
    pre_pipe = stripped.split(" | ", 1)[0]
    split = _find_status_split(pre_pipe)
    if not split:
        return None
    desc, stat_rest = split
    head, _tail = pre_pipe.split(" – ", 1)
    prefix_through_desc = f"{head} – {desc} - "
    return (prefix_through_desc, stat_rest)


def inject_primary_icon_into_moscow_line(line: str, *, force: bool = False) -> Tuple[str, bool]:
    """
    Ensure exactly one primary (Set A) icon immediately before the status token.

    Returns (new_line, changed).
    Idempotent: if correct primary icon already present, no-op.
    Does not alter | Last modified: ... or any pipe tail.
    """
    lead = re.match(r"^(\s*)", line)
    lead_ws = lead.group(1) if lead else ""

    if not line.strip().startswith("- **"):
        return line, False
    parsed = parse_row_status_segment(line)
    if not parsed:
        return line, False
    prefix, status_rest = parsed
    canon = match_canonical_at_start(status_rest)
    if not canon:
        return line, False

    want = primary_icon(canon)
    sr = _strip_known_icons(status_rest).strip()
    new_mid = f"{want} {sr}"
    if _collapse_ws(status_rest) == _collapse_ws(new_mid):
        return line, False

    if " | " in line:
        tail = line.split(" | ", 1)[1]
        new_line = f"{lead_ws}{prefix}{new_mid} | {tail}"
    else:
        new_line = f"{lead_ws}{prefix}{new_mid}"

    if line.endswith("\n") and not new_line.endswith("\n"):
        new_line += "\n"
    changed = new_line.rstrip("\n") != line.rstrip("\n")
    if not force and not changed:
        return line, False
    return new_line, changed


def apply_icons_to_moscow_board_content(content: str) -> Tuple[str, int]:
    """Process full board file: inject icons on MoSCOW bullet rows only."""
    lines = content.split("\n")
    in_moscow = False
    changed = 0
    out: List[str] = []
    for line in lines:
        stripped = line.strip()
        if stripped.startswith("## MoSCOW"):
            in_moscow = True
        elif in_moscow and stripped.startswith("## ") and not MOSCOW_HEADER_RE.match(stripped):
            in_moscow = False
        if in_moscow and stripped.startswith("- **"):
            new_line, did = inject_primary_icon_into_moscow_line(line)
            if did:
                changed += 1
            out.append(new_line)
        else:
            out.append(line)
    return "\n".join(out), changed


def row_has_primary_icon(line: str) -> bool:
    parsed = parse_row_status_segment(line)
    if not parsed:
        return True
    _prefix, status_rest = parsed
    canon = match_canonical_at_start(status_rest)
    if not canon:
        return False
    want = primary_icon(canon)
    sr = _strip_known_icons(status_rest).strip()
    new_mid = f"{want} {sr}"
    return _collapse_ws(status_rest) == _collapse_ws(new_mid)


def rewrite_todo_or_in_progress_to_complete_in_line(line: str) -> str:
    """
    RW helper: replace ` - {optional Set A icons}TODO|IN PROGRESS ` with ` - ✅ COMPLETE `.

    Used when marking a MoSCOW task row COMPLETE after UXR-012 iconization.
    """
    primaries = sorted({p for p, _ in STATE_ICON_MAP.values()})
    alt = "|".join(re.escape(p) for p in primaries)
    return re.sub(
        rf"(\s-\s)(?:(?:{alt})\s*)*(TODO|IN PROGRESS)(\s)",
        r"\1✅ COMPLETE\3",
        line,
        count=1,
        flags=re.IGNORECASE,
    )
