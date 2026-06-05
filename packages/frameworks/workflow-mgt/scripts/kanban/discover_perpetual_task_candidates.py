#!/usr/bin/env python3
"""
Discover workflow-related perpetual task candidates under kanban epics.

Emits JSON: marker hits, keyword hits, and merged candidate list for IPP-E2S16T02.
"""

from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path
from typing import Any, Dict, List, Optional, Set, Tuple

EST_RE = re.compile(r"E(\d+):S(\d+):T(\d+)", re.I)
PERPETUAL_MARKER_RE = re.compile(
    r"Task Type:\s*Perpetual Maintenance|perpetual_task:\s*true",
    re.I,
)
WORKFLOW_KEYWORD_RE = re.compile(
    r"\b(UKW|CMW|RW maintenance|Release Workflow maintenance|kanban hygiene|"
    r"perpetual workflow|Update Kanban Workflow|Changelog Maintenance)\b",
    re.I,
)
TASK_ID_LINE_RE = re.compile(
    r"^\*\*Task ID:\*\*\s*(E\d+:S\d+:T\d+)",
    re.I | re.M,
)


_SCRIPTS_DIR = Path(__file__).resolve().parent.parent
if str(_SCRIPTS_DIR) not in sys.path:
    sys.path.insert(0, str(_SCRIPTS_DIR))

from rw_config_loader import load_rw_config  # noqa: E402


def kanban_epics_root(project_root: Path, config: Optional[dict]) -> Path:
    if config and config.get("kanban_root"):
        return project_root / config["kanban_root"]
    return project_root / "docs/project-management/kanban"


def extract_task_id_from_doc(path: Path, content: str) -> Optional[str]:
    m = TASK_ID_LINE_RE.search(content)
    if m:
        return m.group(1).upper().replace("E", "E", 1)
    m = EST_RE.search(path.name)
    if m:
        e, s, t = int(m.group(1)), int(m.group(2)), int(m.group(3))
        return f"E{e}:S{s}:T{t}"
    return None


def scan_task_docs(epics_root: Path) -> Tuple[List[Dict[str, Any]], List[Dict[str, Any]]]:
    marker_hits: List[Dict[str, Any]] = []
    keyword_hits: List[Dict[str, Any]] = []
    for path in sorted(epics_root.rglob("T*.md")):
        if "Story-" in path.name and path.name.startswith("T"):
            continue
        try:
            content = path.read_text(encoding="utf-8", errors="replace")
        except OSError:
            continue
        rel = str(path.relative_to(epics_root.parent.parent.parent))
        task_id = extract_task_id_from_doc(path, content)
        if PERPETUAL_MARKER_RE.search(content):
            marker_hits.append({"task_id": task_id, "path": rel})
        if WORKFLOW_KEYWORD_RE.search(content) and task_id:
            keyword_hits.append({"task_id": task_id, "path": rel})
    return marker_hits, keyword_hits


def main() -> int:
    parser = argparse.ArgumentParser(description="Discover perpetual task candidates")
    parser.add_argument("--project-root", type=Path, default=Path.cwd())
    parser.add_argument("--json", action="store_true", help="Print JSON to stdout")
    args = parser.parse_args()
    root = args.project_root.resolve()
    config = load_rw_config(root)
    epics_root = kanban_epics_root(root, config)
    marker_hits, keyword_hits = scan_task_docs(epics_root)
    seen: Set[str] = set()
    candidates: List[str] = []
    for hit in marker_hits + keyword_hits:
        tid = hit.get("task_id")
        if tid and tid not in seen:
            seen.add(tid)
            candidates.append(tid)
    out = {
        "epics_root": str(epics_root),
        "marker_count": len(marker_hits),
        "keyword_count": len(keyword_hits),
        "unique_candidates": len(candidates),
        "candidates": sorted(candidates, key=lambda x: (
            int(re.search(r"E(\d+)", x).group(1)),
            int(re.search(r"S(\d+)", x).group(1)),
            int(re.search(r"T(\d+)", x).group(1)),
        )),
        "marker_hits": marker_hits,
        "keyword_hits": keyword_hits,
    }
    if args.json:
        print(json.dumps(out, indent=2))
    else:
        print(f"marker={out['marker_count']} keyword={out['keyword_count']} unique={out['unique_candidates']}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
