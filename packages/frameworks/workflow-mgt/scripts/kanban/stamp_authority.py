#!/usr/bin/env python3
"""
Board Stamp Authority — shared row stamp parsing and evidence resolution.

FR-097 / E2:S15:T08: forensic `Last modified` semantics for kboard.md.
ADR-018: `kboard.md` may be a deprecated redirect stub (no active MoSCOW).
"""

from __future__ import annotations

import hashlib
import json
import re
import subprocess
import sys
from dataclasses import dataclass
from datetime import datetime
from pathlib import Path
from typing import Any, Dict, List, Optional, Set, Tuple

# Allow importing shared loader from parent `scripts/` directory.
_SCRIPTS_DIR = Path(__file__).resolve().parent.parent
if str(_SCRIPTS_DIR) not in sys.path:
    sys.path.insert(0, str(_SCRIPTS_DIR))

from rw_config_loader import load_rw_config  # noqa: E402

TERMINAL_STAMP_RE = re.compile(
    r"\|\sLast modified:\s(\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}\sUTC)\s*$"
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


def is_fbuboard_deprecated(board_content: str) -> bool:
    """ADR-018: kboard.md redirect stub — no active MoSCOW maintenance."""
    upper = board_content.upper()
    return "DEPRECATED" in upper and "## MOSCOW" not in board_content


# FR-097: ≥3 MoSCOW rows sharing one stamp = batch homogenization (was 10; too lenient).
DEFAULT_HOMOGENEITY_THRESHOLD = 3


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


def kanban_root_from_config(project_root: Path, config: Optional[Dict[str, Any]]) -> Path:
    if config and config.get("kanban_root"):
        return project_root / config["kanban_root"]
    return project_root / "docs/kanban"


def homogeneity_threshold_from_config(
    project_root: Path,
    config: Optional[Dict[str, Any]] = None,
) -> int:
    """Resolve homogeneity cluster threshold from rw-config.yaml board_stamp section."""
    if config is None:
        config = load_rw_config(project_root)
    if config:
        board_stamp = config.get("board_stamp") or {}
        if isinstance(board_stamp, dict) and board_stamp.get("homogeneity_threshold") is not None:
            return int(board_stamp["homogeneity_threshold"])
    return DEFAULT_HOMOGENEITY_THRESHOLD


def active_board_paths(project_root: Path, config: Optional[Dict[str, Any]] = None) -> List[Path]:
    root = kanban_root_from_config(project_root, config)
    return [root / "kboard.md"]


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


def _git_last_touch(path: Path, project_root: Path) -> Tuple[Optional[str], Optional[str]]:
    """Return (commit_sha, stamp) from last git commit touching path, or (None, None)."""
    if not path.exists():
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
                "--format=%H %ci",
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
        return None, None
    if result.returncode != 0 or not result.stdout.strip():
        return None, None
    parts = result.stdout.strip().split(maxsplit=2)
    if len(parts) < 2:
        return None, None
    commit_sha = parts[0]
    # parts[1] date, parts[2] time (may include timezone token)
    time_part = parts[2].split()[0] if len(parts) > 2 else ""
    if not time_part:
        return commit_sha, None
    try:
        dt = datetime.strptime(f"{parts[1]} {time_part}", "%Y-%m-%d %H:%M:%S")
        return commit_sha, dt.strftime("%Y-%m-%d %H:%M UTC")
    except ValueError:
        return commit_sha, None


def git_last_touch_commit(path: Path, project_root: Path) -> Optional[str]:
    commit, _ = _git_last_touch(path, project_root)
    return commit


def git_last_touch_stamp(path: Path, project_root: Path) -> Optional[str]:
    _, stamp = _git_last_touch(path, project_root)
    return stamp


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
    Order: doc with time -> git last touch -> doc date-only (midnight) -> ambiguous.
    """
    paths = linked_paths_from_line(line, kanban_root)
    date_only_doc: Optional[Tuple[str, Path]] = None
    for doc_path in paths:
        stamp = parse_last_updated_from_doc(doc_path)
        if not stamp:
            continue
        if stamp.endswith(" 00:00 UTC"):
            if date_only_doc is None:
                date_only_doc = (stamp, doc_path)
            continue
        return stamp, "doc", str(doc_path.relative_to(project_root))
    for doc_path in paths:
        stamp = git_last_touch_stamp(doc_path, project_root)
        if stamp:
            return stamp, "git", str(doc_path.relative_to(project_root))
    if date_only_doc:
        stamp, doc_path = date_only_doc
        return stamp, "doc-date-only", str(doc_path.relative_to(project_root))
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
    threshold: int = DEFAULT_HOMOGENEITY_THRESHOLD,
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


# UKW/agent hour-bucket pattern (2026-05-29 disaster); never exempt from Gate 8.
_SYNTHETIC_HOUR_BUCKET_RE = re.compile(
    r"^\d{4}-\d{2}-\d{2} (17|18|19):00 UTC$"
)


def is_presumed_synthetic_batch_stamp(stamp: str) -> bool:
    """True for known agent/UKW hour-bucket homogenization (always block clusters)."""
    return bool(_SYNTHETIC_HOUR_BUCKET_RE.match(stamp.strip()))


def git_derived_stamp_and_commit_for_row(
    line: str,
    kanban_root: Path,
    project_root: Path,
) -> Tuple[Optional[str], Optional[str]]:
    """First resolvable linked path: git (stamp, commit_sha)."""
    for doc_path in linked_paths_from_line(line, kanban_root):
        commit, stamp = _git_last_touch(doc_path, project_root)
        if stamp:
            return stamp, commit
    return None, None


def cluster_is_git_single_commit_exempt(
    board_content: str,
    stamp: str,
    row_ids: List[str],
    kanban_root: Path,
    project_root: Path,
) -> bool:
    """
    Gate 8 exemption: every row in the cluster independently matches `stamp` via
    git last-touch on a linked doc, and all those touches share one commit SHA
    (mass release / single commit touching many linked sources).
    """
    if is_presumed_synthetic_batch_stamp(stamp):
        return False
    commits: Set[str] = set()
    for row_id in row_ids:
        line = find_row_line(board_content, row_id)
        if not line:
            return False
        git_stamp, commit = git_derived_stamp_and_commit_for_row(
            line, kanban_root, project_root
        )
        if git_stamp != stamp or not commit:
            return False
        commits.add(commit)
    return len(commits) == 1


def homogeneity_clusters_blocking(
    board_content: str,
    project_root: Path,
    kanban_root: Path,
    *,
    threshold: int = DEFAULT_HOMOGENEITY_THRESHOLD,
) -> Dict[str, List[str]]:
    """
    Clusters that fail Gate 8 / pre-commit homogeneity check.

    Exempt: git-derived single-commit clusters (legitimate mass doc touch).
    Always block: synthetic UKW hour buckets and non-git-derived clusters.
    """
    raw = homogeneity_clusters(board_content, threshold=threshold)
    blocking: Dict[str, List[str]] = {}
    for stamp, row_ids in raw.items():
        if cluster_is_git_single_commit_exempt(
            board_content, stamp, row_ids, kanban_root, project_root
        ):
            continue
        blocking[stamp] = row_ids
    return blocking


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
    homogeneity_threshold: int = DEFAULT_HOMOGENEITY_THRESHOLD,
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
