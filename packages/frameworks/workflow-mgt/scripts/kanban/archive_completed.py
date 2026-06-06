#!/usr/bin/env python3
"""
UKW -c archive-completed helpers (FR-102 / ADR-010).

Row discovery and doc-status gates for agent-driven archival.
Does not write boards or ledgers — agents use kanban_completed_update /
fr_br_uxr_completed_update skills after evaluating candidates.
"""

from __future__ import annotations

import re
from pathlib import Path
from typing import List, Optional, Tuple

ROW_TASK_PATTERNS = [
    re.compile(r"-\s+\*\*(E\d+:S\d+:T\d+)\*\*"),
    re.compile(r"\[(E\d+:S\d+:T\d+)\]\("),
]
ROW_FBU_PATTERNS = [
    re.compile(r"-\s+\*\*((?:FR|BR|UXR)-\d+)\*\*"),
    re.compile(r"\[((?:FR|BR|UXR)-\d+)\]\("),
]
TASK_LINK_RE = re.compile(r"\((epics/[^)]+\.md)\)")
FRBR_LINK_RE = re.compile(r"\((fr-br/[^)]+\.md)\)")
KEEP_ON_BOARD_MARKERS = (
    "keep on board",
    "remain on board",
    "do not archive",
    "unresolved verification",
    "pending verification",
)


class ArchiveCandidate:
    def __init__(
        self,
        row_id: str,
        line: str,
        section: str,
        skip_reason: str = "",
        archivable: bool = True,
    ):
        self.row_id = row_id
        self.line = line
        self.section = section
        self.skip_reason = skip_reason
        self.archivable = archivable


def _active_section(line: str, current: Optional[str]) -> Optional[str]:
    stripped = line.strip()
    if stripped.startswith("### Must Have"):
        return "must"
    if stripped.startswith("### Should Have"):
        return "should"
    if stripped.startswith("### Could Have"):
        return "could"
    if stripped.startswith("### Ongoing"):
        return "ongoing"
    if stripped.startswith("### Won't Have"):
        return "wont"
    return current


def extract_row_id(line: str, patterns: List[re.Pattern]) -> str:
    for pat in patterns:
        m = pat.search(line)
        if m:
            return m.group(1)
    return ""


def parse_task_doc_fields(path: Path) -> Tuple[str, str, bool]:
    """Return (status, version_anchor, is_perpetual)."""
    if not path.exists():
        return "", "", False
    try:
        text = path.read_text(encoding="utf-8", errors="replace")
    except OSError:
        return "", "", False
    status_m = re.search(r"\*\*Status:\*\*\s*(.+?)(?:\n|$)", text, re.I)
    version_m = re.search(r"\*\*Version Anchor:\*\*\s*(.+?)(?:\n|$)", text, re.I)
    status = status_m.group(1).strip() if status_m else ""
    version = version_m.group(1).strip() if version_m else ""
    perpetual = bool(
        re.search(r"perpetual_task:\s*true", text, re.I)
        or re.search(r"Task Type:\s*Perpetual Maintenance", text, re.I)
        or re.search(r"PERPETUAL", status, re.I)
    )
    return status, version, perpetual


def parse_fbu_doc_fields(path: Path) -> Tuple[str, str]:
    if not path.exists():
        return "", ""
    try:
        text = path.read_text(encoding="utf-8", errors="replace")
    except OSError:
        return "", ""
    status_m = re.search(r"\*\*Status:\*\*\s*(.+?)(?:\n|$)", text, re.I)
    version_m = re.search(r"\*\*Version:\*\*\s*(.+?)(?:\n|$)", text, re.I)
    status = status_m.group(1).strip() if status_m else ""
    version = version_m.group(1).strip() if version_m else ""
    return status, version


def is_terminal_task_status(status_text: str) -> bool:
    if not status_text:
        return False
    upper = status_text.upper()
    if "IN PROGRESS" in upper and "COMPLETE" not in upper:
        return False
    return bool(
        re.search(r"\bCOMPLETE(?:D)?\b|\bIMPLEMENTED\b|\bFIXED\b|\bRESOLVED\b", upper)
    )


def is_terminal_fbu_status(status_text: str) -> bool:
    if not status_text:
        return False
    upper = status_text.upper()
    has_terminal = bool(
        re.search(r"\bCOMPLETE(?:D)?\b|\bIMPLEMENTED\b|\bFIXED\b|\bRESOLVED\b", upper)
    )
    if not has_terminal:
        return False
    unresolved = [
        "UNVERIFIED",
        "PENDING VERIFICATION",
        "VERIFICATION PENDING",
        "IN PROGRESS",
        "OPEN",
        "REOPENED",
        "TODO",
    ]
    return not any(m in upper for m in unresolved)


def has_keep_on_board_banner(text: str) -> bool:
    lower = text.lower()
    return any(m in lower for m in KEEP_ON_BOARD_MARKERS)


def resolve_task_doc_from_line(line: str, kanban_root: Path) -> Optional[Path]:
    m = TASK_LINK_RE.search(line)
    if not m:
        return None
    return (kanban_root / m.group(1)).resolve()


def resolve_fbu_doc_from_line(line: str, kanban_root: Path) -> Optional[Path]:
    m = FRBR_LINK_RE.search(line)
    if not m:
        return None
    return (kanban_root / m.group(1)).resolve()


def scan_kboard_candidates(board_content: str, kanban_root: Path) -> List[ArchiveCandidate]:
    lines = board_content.split("\n")
    section: Optional[str] = None
    out: List[ArchiveCandidate] = []
    for line in lines:
        section = _active_section(line, section)
        if section in (None, "wont") or not line.strip().startswith("- **"):
            continue
        row_id = extract_row_id(line, ROW_TASK_PATTERNS)
        if not row_id:
            continue
        cand = ArchiveCandidate(row_id=row_id, line=line, section=section or "")
        doc = resolve_task_doc_from_line(line, kanban_root)
        if doc is None:
            cand.archivable = False
            cand.skip_reason = "no linked task doc"
        else:
            status, _, perpetual = parse_task_doc_fields(doc)
            if perpetual:
                cand.archivable = False
                cand.skip_reason = "perpetual task"
            elif has_keep_on_board_banner(doc.read_text(encoding="utf-8", errors="replace")):
                cand.archivable = False
                cand.skip_reason = "keep-on-board banner"
            elif not is_terminal_task_status(status):
                cand.archivable = False
                cand.skip_reason = f"task status not terminal: {status[:40]}"
        out.append(cand)
    return out


def scan_fbuboard_candidates(board_content: str, kanban_root: Path) -> List[ArchiveCandidate]:
    lines = board_content.split("\n")
    section: Optional[str] = None
    out: List[ArchiveCandidate] = []
    for line in lines:
        section = _active_section(line, section)
        if section in (None, "wont") or not line.strip().startswith("- **"):
            continue
        row_id = extract_row_id(line, ROW_FBU_PATTERNS)
        if not row_id:
            continue
        cand = ArchiveCandidate(row_id=row_id, line=line, section=section or "")
        doc = resolve_fbu_doc_from_line(line, kanban_root)
        if doc is None:
            cand.archivable = False
            cand.skip_reason = "no linked FBU doc"
        else:
            text = doc.read_text(encoding="utf-8", errors="replace")
            status, _ = parse_fbu_doc_fields(doc)
            if has_keep_on_board_banner(text):
                cand.archivable = False
                cand.skip_reason = "keep-on-board banner"
            elif not is_terminal_fbu_status(status):
                cand.archivable = False
                cand.skip_reason = f"fbu status not terminal: {status[:40]}"
        out.append(cand)
    return out


def ledger_contains_id(ledger_content: str, row_id: str) -> bool:
    return row_id in ledger_content


def count_would_prune_active_complete(board_content: str) -> int:
    """Dry-run count using row-text COMPLETE heuristic (legacy cleanup)."""
    lines = board_content.split("\n")
    section: Optional[str] = None
    removed = 0
    for line in lines:
        section = _active_section(line, section)
        if section in ("must", "should", "could", "ongoing") and line.strip().startswith("- **"):
            if re.search(r"\b✅\s*COMPLETE\b|\bCOMPLETE\s*✅\b|\bCOMPLETE\b", line, re.I):
                removed += 1
    return removed
