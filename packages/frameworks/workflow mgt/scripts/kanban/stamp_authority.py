#!/usr/bin/env python3
"""
Board Stamp Authority — shared row stamp parsing and evidence resolution.

FR-097 / E2:S15:T08: forensic `Last modified` semantics for kboard.md and fbuboard.md.
"""

from __future__ import annotations

import hashlib
import json
import re
import subprocess
from dataclasses import dataclass, field
from datetime import datetime
from pathlib import Path
from typing import Any, Dict, List, Optional, Tuple

try:
    import yaml
except ImportError:
    yaml = None

TERMINAL_STAMP_RE = re.compile(
    r"\|\sLast modified:\s(\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}\sUTC)\s*$"
)
ANY_STAMP_RE = re.compile(
    r"\|\sLast modified:\s(\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}\sUTC)"
)
ROW_ID_PATTERNS = [
    re.compile(r"-\s+\*\*(E\d+:S\d+:T\d+)\*\*"),
    re.compile(r"-\s+\*\*((?:FR|BR|UXR)-\d+)\*\*"),
    re.compile(r"\[(E\d+:S\d+:T\d+)\]\("),
    re.compile(r"\[((?:FR|BR|UXR)-\d+)\]\("),
]
FRBR_LINK_RE = re.compile(r"\((fr-br/[^)]+\.md)\)")
TASK_LINK_RE = re.compile(r"\((epics/[^)]+\.md)\)")
LAST_UPDATED_RE = re.compile(
    r"\*\*Last\s+[Uu]pdated:\*\*\s*([^\n]+)",
    re.MULTILINE,
)
MOSCOW_HEADER_RE = re.compile(r"^##\s+MoSCOW", re.IGNORECASE)


@dataclass
class BoardRow:
    line: str
    row_id: str
    stamp: Optional[str]
    line_index: int


@dataclass
class StampDelta:
    row_id: str
    before: Optional[str]
    after: Optional[str]
    reason: str = ""


@dataclass
class BackfillRowResult:
    row_id: str
    old_stamp: str
    new_stamp: Optional[str]
    source: str  # doc | git | ambiguous | unchanged
    detail: str = ""


def load_rw_config(project_root: Path) -> Optional[Dict[str, Any]]:
    config_path = project_root / "rw-config.yaml"
    if not config_path.exists() or yaml is None:
        return None
    try:
        with open(config_path, "r", encoding="utf-8") as f:
            return yaml.safe_load(f)
    except Exception:
        return None


def kanban_root_from_config(project_root: Path, config: Optional[Dict[str, Any]]) -> Path:
    if config and config.get("kanban_root"):
        return project_root / config["kanban_root"]
    return project_root / "docs/project-management/kanban"


def active_board_paths(project_root: Path, config: Optional[Dict[str, Any]] = None) -> List[Path]:
    root = kanban_root_from_config(project_root, config)
    return [root / "kboard.md", root / "fbuboard.md"]


def extract_row_id(line: str) -> str:
    for pattern in ROW_ID_PATTERNS:
        match = pattern.search(line)
        if match:
            return match.group(1)
    return "unknown-row"


def extract_terminal_stamp(line: str) -> Optional[str]:
    match = TERMINAL_STAMP_RE.search(line)
    return match.group(1) if match else None


def _in_moscow_section(lines: List[str], index: int) -> bool:
    in_moscow = False
    for i in range(index + 1):
        stripped = lines[i].strip()
        if MOSCOW_HEADER_RE.match(stripped):
            in_moscow = True
        elif in_moscow and stripped.startswith("## ") and not MOSCOW_HEADER_RE.match(stripped):
            in_moscow = False
    return in_moscow


def parse_moscow_rows(board_content: str) -> List[BoardRow]:
    lines = board_content.split("\n")
    rows: List[BoardRow] = []
    for idx, line in enumerate(lines):
        stripped = line.strip()
        if not stripped.startswith("- **"):
            continue
        if not _in_moscow_section(lines, idx):
            continue
        rows.append(
            BoardRow(
                line=line,
                row_id=extract_row_id(line),
                stamp=extract_terminal_stamp(line),
                line_index=idx,
            )
        )
    return rows


def extract_row_stamps(board_content: str) -> Dict[str, str]:
    """Map row_id -> terminal Last modified stamp (last wins on duplicate ids)."""
    result: Dict[str, str] = {}
    for row in parse_moscow_rows(board_content):
        if row.stamp and row.row_id != "unknown-row":
            result[row.row_id] = row.stamp
    return result


def linked_paths_from_line(line: str, kanban_root: Path) -> List[Path]:
    paths: List[Path] = []
    for match in FRBR_LINK_RE.finditer(line):
        paths.append(kanban_root / match.group(1))
    for match in TASK_LINK_RE.finditer(line):
        paths.append(kanban_root / match.group(1))
    return paths


def parse_last_updated_from_doc(doc_path: Path) -> Optional[str]:
    if not doc_path.exists():
        return None
    try:
        content = doc_path.read_text(encoding="utf-8", errors="ignore")
    except OSError:
        return None
    match = LAST_UPDATED_RE.search(content)
    if not match:
        return None
    raw = match.group(1).strip()
    return _normalize_doc_date_to_stamp(raw)


def _normalize_doc_date_to_stamp(raw: str) -> Optional[str]:
    """Best-effort convert task/FR doc Last updated to board stamp format."""
    raw = raw.split("(")[0].strip()
    raw = re.sub(r"\s*—.*$", "", raw).strip()
    for fmt in (
        "%Y-%m-%d %H:%M UTC",
        "%Y-%m-%d %H:%M:%S UTC",
        "%Y-%m-%d",
    ):
        try:
            if fmt == "%Y-%m-%d":
                dt = datetime.strptime(raw[:10], fmt)
            else:
                dt = datetime.strptime(raw[:19].strip(), fmt)
            return dt.strftime("%Y-%m-%d %H:%M UTC")
        except ValueError:
            continue
    iso = re.search(r"(\d{4}-\d{2}-\d{2})", raw)
    if iso:
        return f"{iso.group(1)} 12:00 UTC"
    return None


def git_last_touch_stamp(path: Path, project_root: Path) -> Optional[str]:
    if not path.exists():
        rel = path
        for candidate in (path, project_root / path):
            if candidate.exists():
                path = candidate
                break
    try:
        rel_path = path.relative_to(project_root)
    except ValueError:
        rel_path = path
    try:
        result = subprocess.run(
            [
                "git",
                "log",
                "-1",
                "--format=%ci",
                "--",
                str(rel_path),
            ],
            cwd=project_root,
            capture_output=True,
            text=True,
            timeout=30,
            check=False,
        )
    except (subprocess.SubprocessError, OSError):
        return None
    if result.returncode != 0 or not result.stdout.strip():
        return None
    # git format: 2026-05-20 14:30:45 +0100
    parts = result.stdout.strip().split()
    if len(parts) < 2:
        return None
    try:
        dt = datetime.strptime(f"{parts[0]} {parts[1]}", "%Y-%m-%d %H:%M:%S")
        return dt.strftime("%Y-%m-%d %H:%M UTC")
    except ValueError:
        return None


def doc_content_fingerprint(path: Path) -> Optional[str]:
    if not path.exists():
        return None
    try:
        data = path.read_text(encoding="utf-8", errors="ignore")
    except OSError:
        return None
    return hashlib.sha256(data.encode("utf-8")).hexdigest()


def derive_stamp_for_row(
    line: str,
    kanban_root: Path,
    project_root: Path,
) -> Tuple[Optional[str], str, str]:
    """
    Derive stamp from linked sources. Returns (stamp, source, detail).
    Order: doc Last updated -> git last touch -> ambiguous.
    """
    paths = linked_paths_from_line(line, kanban_root)
    for doc_path in paths:
        stamp = parse_last_updated_from_doc(doc_path)
        if stamp:
            return stamp, "doc", str(doc_path.relative_to(project_root))
    for doc_path in paths:
        stamp = git_last_touch_stamp(doc_path, project_root)
        if stamp:
            return stamp, "git", str(doc_path.relative_to(project_root))
    return None, "ambiguous", "no linked doc date or git history"


def compute_stamp_deltas(
    before_content: str,
    after_content: str,
) -> List[StampDelta]:
    before = extract_row_stamps(before_content)
    after = extract_row_stamps(after_content)
    all_ids = sorted(set(before) | set(after))
    deltas: List[StampDelta] = []
    for row_id in all_ids:
        b = before.get(row_id)
        a = after.get(row_id)
        if b != a:
            deltas.append(StampDelta(row_id=row_id, before=b, after=a))
    return deltas


def manifest_allows_row(row_id: str, manifest: Dict[str, Any]) -> bool:
    entry = manifest.get(row_id) or manifest.get(row_id.upper())
    if not entry:
        return False
    if isinstance(entry, dict):
        return bool(entry.get("allowed", True))
    return bool(entry)


def row_has_linked_source_evidence(
    row_id: str,
    line: str,
    kanban_root: Path,
    project_root: Path,
    before_fingerprints: Dict[str, str],
    after_fingerprints: Dict[str, str],
) -> Tuple[bool, str]:
    """True if any linked path changed between before/after snapshots."""
    for doc_path in linked_paths_from_line(line, kanban_root):
        key = str(doc_path)
        b = before_fingerprints.get(key)
        a = after_fingerprints.get(key)
        if b is not None and a is not None and b != a:
            return True, f"linked doc changed: {doc_path.relative_to(project_root)}"
        if b is None and a is not None:
            return True, f"linked doc appeared: {doc_path.relative_to(project_root)}"
    return False, "no linked source delta detected"


def build_line_fingerprints(
    board_content: str,
    kanban_root: Path,
) -> Dict[str, str]:
    fps: Dict[str, str] = {}
    for row in parse_moscow_rows(board_content):
        for doc_path in linked_paths_from_line(row.line, kanban_root):
            fp = doc_content_fingerprint(doc_path)
            if fp:
                fps[str(doc_path)] = fp
    return fps


def find_row_line(board_content: str, row_id: str) -> Optional[str]:
    for row in parse_moscow_rows(board_content):
        if row.row_id == row_id:
            return row.line
    return None


def homogeneity_clusters(
    board_content: str,
    *,
    threshold: int = 10,
) -> Dict[str, List[str]]:
    """Return stamp values that appear on >= threshold rows -> list of row_ids."""
    by_stamp: Dict[str, List[str]] = {}
    for row in parse_moscow_rows(board_content):
        if not row.stamp or row.row_id == "unknown-row":
            continue
        by_stamp.setdefault(row.stamp, []).append(row.row_id)
    return {
        stamp: ids
        for stamp, ids in by_stamp.items()
        if len(ids) >= threshold
    }


def replace_row_terminal_stamp(line: str, new_stamp: str) -> str:
    if TERMINAL_STAMP_RE.search(line):
        return TERMINAL_STAMP_RE.sub(f"| Last modified: {new_stamp}", line)
    return f"{line.rstrip()} | Last modified: {new_stamp}"


def apply_backfill_to_board(
    board_content: str,
    kanban_root: Path,
    project_root: Path,
    *,
    cluster_stamp: Optional[str] = None,
    homogeneity_threshold: int = 10,
) -> Tuple[str, List[BackfillRowResult]]:
    lines = board_content.split("\n")
    rows = parse_moscow_rows(board_content)
    clusters = homogeneity_clusters(board_content, threshold=homogeneity_threshold)
    target_stamps: Optional[set] = None
    if cluster_stamp:
        target_stamps = {cluster_stamp}
    else:
        target_stamps = set(clusters.keys())

    results: List[BackfillRowResult] = []
    changed_indices: Dict[int, str] = {}

    for row in rows:
        if not row.stamp or row.stamp not in target_stamps:
            continue
        new_stamp, source, detail = derive_stamp_for_row(
            row.line, kanban_root, project_root
        )
        if not new_stamp or new_stamp == row.stamp:
            results.append(
                BackfillRowResult(
                    row_id=row.row_id,
                    old_stamp=row.stamp,
                    new_stamp=row.stamp,
                    source="ambiguous" if not new_stamp else "unchanged",
                    detail=detail,
                )
            )
            continue
        changed_indices[row.line_index] = new_stamp
        results.append(
            BackfillRowResult(
                row_id=row.row_id,
                old_stamp=row.stamp,
                new_stamp=new_stamp,
                source=source,
                detail=detail,
            )
        )

    if not changed_indices:
        return board_content, results

    new_lines = list(lines)
    for idx, new_stamp in changed_indices.items():
        new_lines[idx] = replace_row_terminal_stamp(new_lines[idx], new_stamp)
    return "\n".join(new_lines), results


def load_evidence_manifest(path: Path) -> Dict[str, Any]:
    data = json.loads(path.read_text(encoding="utf-8"))
    if isinstance(data, dict) and "rows" in data:
        return data["rows"]
    return data if isinstance(data, dict) else {}


def validate_stamp_diff(
    before_content: str,
    after_content: str,
    *,
    project_root: Path,
    board_path: Path,
    evidence_manifest: Optional[Dict[str, Any]] = None,
    kanban_root: Optional[Path] = None,
) -> Tuple[bool, List[StampDelta]]:
    """
    Return (passed, denied_deltas). Denied deltas lack evidence for stamp change.
    """
    config = load_rw_config(project_root)
    kroot = kanban_root or kanban_root_from_config(project_root, config)
    manifest = evidence_manifest or {}

    deltas = compute_stamp_deltas(before_content, after_content)
    if not deltas:
        return True, []

    before_fp = build_line_fingerprints(before_content, kroot)
    after_fp = build_line_fingerprints(after_content, kroot)

    denied: List[StampDelta] = []
    for delta in deltas:
        if manifest_allows_row(delta.row_id, manifest):
            continue
        line = find_row_line(after_content, delta.row_id) or find_row_line(
            before_content, delta.row_id
        )
        if not line:
            delta.reason = "row line not found for evidence check"
            denied.append(delta)
            continue
        ok, reason = row_has_linked_source_evidence(
            delta.row_id,
            line,
            kroot,
            project_root,
            before_fp,
            after_fp,
        )
        if ok:
            continue
        # New row with stamp but no before — allow if manifest or first appearance with doc date only
        if delta.before is None and delta.after:
            derived, source, _ = derive_stamp_for_row(line, kroot, project_root)
            if derived == delta.after and source in ("doc", "git"):
                continue
        delta.reason = reason
        denied.append(delta)

    return len(denied) == 0, denied
