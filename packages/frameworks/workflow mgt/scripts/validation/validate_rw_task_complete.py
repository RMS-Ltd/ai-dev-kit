#!/usr/bin/env python3
"""
validate_rw_task_complete.py — FR-060

Given a user-supplied RW task id, locate the task markdown under kanban_root and verify
the task is releasable for RW.

Full mode allows:
- IN PROGRESS (iterative +BUILD releases for active tasks)
- COMPLETE
- perpetual maintenance tasks

Full mode denies TODO or unrecognized status values.

Usage:
  python validate_rw_task_complete.py --requested E7S01T10
  python validate_rw_task_complete.py --requested E7:S01:T10 --mode rw-k

Exit codes:
  0 — OK (or rw-k mode: doc exists only)
  1 — task doc missing or not releasable in full mode
  2 — invalid args or config
"""

from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path
from typing import Dict, List, Optional, Tuple

try:
    import yaml
except ImportError:
    yaml = None

_SCRIPT_DIR = Path(__file__).resolve().parent
_KANBAN_DIR = _SCRIPT_DIR.parent / "kanban"
if str(_KANBAN_DIR) not in sys.path:
    sys.path.insert(0, str(_KANBAN_DIR))

from ukw_syntax_parser import parse_single_task_id  # noqa: E402
from validate_ipw_status_drift import validate_task_doc  # noqa: E402


def load_rw_config(project_root: Path = None) -> Optional[Dict]:
    if project_root is None:
        project_root = Path.cwd()
    config_path = project_root / "rw-config.yaml"
    if not config_path.exists() or yaml is None:
        return None
    try:
        with open(config_path, "r", encoding="utf-8") as f:
            return yaml.safe_load(f)
    except Exception:
        return None


def kanban_epics_glob(project_root: Path, config: Optional[Dict]) -> List[Path]:
    roots: List[Path] = []
    if config and config.get("use_kanban") and config.get("kanban_root"):
        kr = Path(config["kanban_root"])
        roots.append(project_root / kr if not kr.is_absolute() else kr)
    roots.append(project_root / "docs/project-management/kanban")
    seen = set()
    out: List[Path] = []
    for r in roots:
        try:
            rp = r.resolve()
        except Exception:
            rp = r
        if rp in seen or not rp.is_dir():
            continue
        seen.add(rp)
        epics = rp / "epics"
        if epics.is_dir():
            out.append(epics)
    return out


def task_id_header_matches(head: str, epic: int, story: int, task: int) -> bool:
    """Match **Task ID:** E{n}:S{n}:T{n} with flexible numeric padding."""
    for m in re.finditer(r"\*\*Task ID:\*\*\s*E(\d+):S(\d+):T(\d+)\b", head, re.IGNORECASE):
        if int(m.group(1)) == epic and int(m.group(2)) == story and int(m.group(3)) == task:
            return True
    return False


def find_task_markdown(project_root: Path, epic: int, story: int, task: int, config: Optional[Dict]) -> Optional[Path]:
    """Locate a task file whose **Task ID:** matches E:S:T."""
    epics_dirs = kanban_epics_glob(project_root, config)
    if not epics_dirs:
        return None

    for epics in epics_dirs:
        for path in epics.rglob("*.md"):
            if path.name.startswith("_"):
                continue
            try:
                head = path.read_text(encoding="utf-8", errors="replace")[:12000]
            except OSError:
                continue
            if task_id_header_matches(head, epic, story, task):
                return path
    return None


def _is_perpetual_task(content: str) -> bool:
    if re.search(r"^perpetual_task:\s*true\s*$", content[:800], re.MULTILINE | re.IGNORECASE):
        return True
    if re.search(r"\*\*Task Type:\*\*\s*Perpetual Maintenance", content[:6000], re.IGNORECASE):
        return True
    return False


def _status_line(content: str) -> Optional[str]:
    m = re.search(r"^\*\*Status:\*\*\s*(.+)$", content, re.MULTILINE | re.IGNORECASE)
    return m.group(1).strip() if m else None


def task_is_releasable(content: str, path: Path) -> Tuple[bool, str]:
    """
    Full RW: IN PROGRESS, COMPLETE, or perpetual maintenance.
    TODO remains non-releasable in full mode.
    """
    if _is_perpetual_task(content):
        return True, "perpetual maintenance task"

    status = _status_line(content)
    if not status:
        return False, "no **Status:** line found"

    if re.search(r"IN\s+PROGRESS", status, re.IGNORECASE):
        return True, f"IN PROGRESS: {status!r}"

    if re.search(r"\bCOMPLETE\b", status, re.IGNORECASE):
        return True, f"COMPLETE: {status!r}"

    if re.search(r"\bTODO\b", status, re.IGNORECASE):
        drift = validate_task_doc(path)
        if drift:
            return False, (
                "status TODO with implementation evidence detected (FR-077 drift). "
                "Implementation execution must transition task-doc status to "
                "IN PROGRESS/COMPLETE before RW. "
                "RW/UKW then propagates board status in the same session. "
                f"Details: {drift}"
            )
        return False, f"status TODO: {status!r}"

    return False, f"status not releasable: {status!r}"


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Validate RW task doc exists and is releasable (FR-060)."
    )
    parser.add_argument(
        "--requested",
        required=True,
        help="User-supplied task id, e.g. E7S01T10 or E7:S01:T10",
    )
    parser.add_argument(
        "--mode",
        choices=("full", "rw-k"),
        default="full",
        help="rw-k only checks that the task document exists (kanban-init style).",
    )
    parser.add_argument("--project-root", type=Path, default=None, help="Repo root (default: cwd).")
    args = parser.parse_args()

    project_root = (args.project_root or Path.cwd()).resolve()
    config = load_rw_config(project_root)

    parsed = parse_single_task_id(args.requested.strip())
    if parsed is None:
        print(f"❌ validate_rw_task_complete: Could not parse task id: {args.requested!r}")
        return 2

    e, s, t = parsed
    path = find_task_markdown(project_root, e, s, t, config)
    if path is None:
        print(f"❌ validate_rw_task_complete: No task document found for E{e}:S{s}:T{t}")
        print("   Searched under kanban epics/ for matching **Task ID:** line.")
        return 1

    content = path.read_text(encoding="utf-8", errors="replace")

    if args.mode == "rw-k":
        print(f"validate_rw_task_complete: mode=rw-k — task doc found: {path}")
        return 0

    ok, reason = task_is_releasable(content, path)
    if ok:
        print(f"validate_rw_task_complete: OK — {reason}")
        print(f"   File: {path}")
        return 0

    print("❌ validate_rw_task_complete: Task is not releasable under full RW (FR-060:R03)")
    print(f"   File: {path}")
    print(f"   Reason: {reason}")
    return 1


if __name__ == "__main__":
    sys.exit(main())
