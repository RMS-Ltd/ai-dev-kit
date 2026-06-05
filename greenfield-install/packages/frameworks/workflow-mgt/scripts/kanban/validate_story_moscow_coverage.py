#!/usr/bin/env python3
"""
BR-059 / E02:S16:T13 — Compare story checklist open tasks vs kboard MoSCOW rows.

Advisory validator: exit 0 when every open checklist task for a story appears on
kboard.md in M/S/C/O/W (W = explicit deferral). Exit 1 when gaps remain.
"""

from __future__ import annotations

import argparse
import re
import sys
from dataclasses import dataclass
from pathlib import Path
from typing import List, Optional, Set, Tuple

try:
    import yaml
except ImportError:
    yaml = None

# Allow importing shared loader from parent `scripts/` directory.
_SCRIPTS_DIR = Path(__file__).resolve().parent.parent
if str(_SCRIPTS_DIR) not in sys.path:
    sys.path.insert(0, str(_SCRIPTS_DIR))

from rw_config_loader import load_rw_config  # noqa: E402

CHECKLIST_TASK_RE = re.compile(
    r"^\s*-\s+\[[ xX]\]\s+\*\*(E\d+:S\d+:T\d+)",
    re.IGNORECASE,
)
BOARD_TASK_RE = re.compile(r"\*\*(E\d+:S\d+:T\d+)\*\*")
COMPLETE_MARKERS = re.compile(
    r"\bCOMPLETE(?:D)?\b|✅\s*COMPLETE",
    re.IGNORECASE,
)
SECTION_MARKERS = {
    "must": re.compile(r"^###\s+Must Have", re.I),
    "should": re.compile(r"^###\s+Should Have", re.I),
    "could": re.compile(r"^###\s+Could Have", re.I),
    "ongoing": re.compile(r"^###\s+Ongoing", re.I),
    "wont": re.compile(r"^###\s+Won't Have", re.I),
}


@dataclass
class CoverageReport:
    story_id: str
    story_path: Path
    open_tasks: List[str]
    board_tasks: List[str]
    missing: List[str]

    @property
    def ok(self) -> bool:
        return not self.missing


def kanban_root(project_root: Path, config: Optional[dict]) -> Path:
    if config and config.get("use_kanban") and config.get("kanban_root"):
        kr = Path(config["kanban_root"])
        return project_root / kr if not kr.is_absolute() else kr
    return project_root / "docs/project-management/kanban"


def parse_story_id(token: str) -> Optional[Tuple[int, int]]:
    m = re.match(r"^E(\d+):S(\d+)$", token.strip(), re.I)
    if not m:
        return None
    return int(m.group(1)), int(m.group(2))


def normalize_est(est: str) -> str:
    m = re.match(r"E(\d+):S(\d+):T(\d+)", est, re.I)
    if not m:
        return est.upper()
    return f"E{int(m.group(1))}:S{int(m.group(2))}:T{int(m.group(3))}"


def checklist_line_open(line: str) -> bool:
    if COMPLETE_MARKERS.search(line):
        return False
    if re.search(r"\bTODO\b|\bIN PROGRESS\b|\bOPEN\b|\bPENDING\b", line, re.I):
        return True
    if re.match(r"^\s*-\s+\[\s\]", line):
        return True
    return False


def est_belongs_to_story(est: str, epic: int, story: int) -> bool:
    m = re.match(r"E(\d+):S(\d+):T(\d+)", est, re.I)
    if not m:
        return False
    return int(m.group(1)) == epic and int(m.group(2)) == story


def extract_open_tasks_from_story(content: str, epic: int, story: int) -> List[str]:
    open_tasks: List[str] = []
    for line in content.splitlines():
        m = CHECKLIST_TASK_RE.match(line)
        if not m:
            continue
        est = normalize_est(m.group(1))
        if not est_belongs_to_story(est, epic, story):
            continue
        if checklist_line_open(line):
            open_tasks.append(est)
    return open_tasks


def _active_section(line: str, current: Optional[str]) -> Optional[str]:
    stripped = line.strip()
    for name, pat in SECTION_MARKERS.items():
        if pat.match(stripped):
            return name
    return current


def extract_board_tasks_for_story(
    board_content: str, epic: int, story: int
) -> List[str]:
    found: Set[str] = set()
    section: Optional[str] = None
    for line in board_content.splitlines():
        section = _active_section(line, section)
        if section not in ("must", "should", "could", "ongoing", "wont"):
            continue
        if not line.strip().startswith("- **"):
            continue
        for m in BOARD_TASK_RE.finditer(line):
            est = normalize_est(m.group(1))
            if est_belongs_to_story(est, epic, story):
                found.add(est)
    return sorted(found, key=lambda x: (int(re.search(r"T(\d+)", x).group(1)) if re.search(r"T(\d+)", x) else 0))


def find_story_doc(kroot: Path, epic: int, story: int) -> Optional[Path]:
    epic_dir = kroot / "epics" / f"Epic-{epic}"
    if not epic_dir.is_dir():
        return None
    candidates = list(epic_dir.glob(f"Story-{story:03d}-*.md"))
    candidates += list(epic_dir.glob(f"Story-{story}-*.md"))
    if not candidates:
        candidates = list(epic_dir.glob("Story-*.md"))
        candidates = [p for p in candidates if f"Story-{story}" in p.name or f"Story-{story:03d}" in p.name]
    return candidates[0] if candidates else None


def compute_coverage(
    story_content: str,
    board_content: str,
    epic: int,
    story: int,
    story_path: Path,
) -> CoverageReport:
    open_tasks = extract_open_tasks_from_story(story_content, epic, story)
    board_tasks = extract_board_tasks_for_story(board_content, epic, story)
    board_set = {normalize_est(t) for t in board_tasks}
    missing = [t for t in open_tasks if normalize_est(t) not in board_set]
    return CoverageReport(
        story_id=f"E{epic}:S{story}",
        story_path=story_path,
        open_tasks=open_tasks,
        board_tasks=board_tasks,
        missing=missing,
    )


def scan_all_stories(
    kroot: Path, kboard_path: Path
) -> Tuple[List[CoverageReport], List[CoverageReport], List[str]]:
    """Return (failures, passes, skipped) for every story doc under epics."""
    failures: List[CoverageReport] = []
    passes: List[CoverageReport] = []
    skipped: List[str] = []
    board_content = kboard_path.read_text(encoding="utf-8", errors="replace")
    for story_path in sorted((kroot / "epics").glob("Epic-*/Story-*.md")):
        head = story_path.read_text(encoding="utf-8", errors="replace")[:12000]
        em = re.search(r"\*\*Code:\*\*\s*E(\d+)S(\d+)", head, re.I)
        if not em:
            skipped.append(story_path.name)
            continue
        epic, story = int(em.group(1)), int(em.group(2))
        report = compute_coverage(
            story_path.read_text(encoding="utf-8", errors="replace"),
            board_content,
            epic,
            story,
            story_path,
        )
        if not report.open_tasks:
            skipped.append(report.story_id)
            continue
        if report.ok:
            passes.append(report)
        else:
            failures.append(report)
    return failures, passes, skipped


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Validate story checklist open tasks appear on kboard MoSCOW (BR-059)"
    )
    parser.add_argument(
        "--scan-all",
        action="store_true",
        help="Scan all story docs; print summary (exit 1 if any story fails)",
    )
    parser.add_argument(
        "--report-json",
        type=Path,
        help="With --scan-all, write JSON report to this path",
    )
    parser.add_argument(
        "--story",
        help="Story id e.g. E10:S01",
    )
    parser.add_argument(
        "--story-doc",
        type=Path,
        help="Path to story markdown (overrides --story discovery)",
    )
    parser.add_argument(
        "--kboard",
        type=Path,
        help="Path to kboard.md (default: kanban_root/kboard.md)",
    )
    parser.add_argument("--project-root", type=Path, default=None)
    args = parser.parse_args()

    project_root = (args.project_root or Path.cwd()).resolve()
    config = load_rw_config(project_root)
    kroot = kanban_root(project_root, config)
    kboard_path = args.kboard or (kroot / "kboard.md")

    if args.scan_all:
        if not kboard_path.exists():
            print(f"ERROR: kboard missing: {kboard_path}")
            return 2
        failures, passes, skipped = scan_all_stories(kroot, kboard_path)
        print(f"SCAN: {len(passes)} pass, {len(failures)} fail, {len(skipped)} skipped (0 open)")
        for r in failures:
            print(f"  FAIL {r.story_id}: {len(r.missing)} missing / {len(r.open_tasks)} open")
        for r in passes:
            print(f"  PASS {r.story_id}: {len(r.open_tasks)} open")
        if args.report_json:
            import json

            payload = {
                "pass": [{"story": r.story_id, "open": len(r.open_tasks)} for r in passes],
                "fail": [
                    {
                        "story": r.story_id,
                        "open": len(r.open_tasks),
                        "missing": r.missing,
                    }
                    for r in failures
                ],
                "skipped": skipped,
            }
            args.report_json.parent.mkdir(parents=True, exist_ok=True)
            args.report_json.write_text(
                json.dumps(payload, indent=2), encoding="utf-8"
            )
            print(f"Wrote {args.report_json}")
        return 1 if failures else 0

    if args.story_doc:
        story_path = args.story_doc.resolve()
        m = re.search(r"Epic-(\d+)", str(story_path))
        epic = int(m.group(1)) if m else 0
        sm = re.search(r"Story-(\d+)", story_path.name)
        story = int(sm.group(1)) if sm else 0
        if not epic or not story:
            head = story_path.read_text(encoding="utf-8", errors="replace")[:8000]
            em = re.search(r"\*\*Code:\*\*\s*E(\d+)S(\d+)", head, re.I)
            if em:
                epic, story = int(em.group(1)), int(em.group(2))
    elif args.story:
        parsed = parse_story_id(args.story)
        if not parsed:
            print(f"ERROR: invalid --story {args.story!r}")
            return 2
        epic, story = parsed
        story_path = find_story_doc(kroot, epic, story)
        if story_path is None:
            print(f"ERROR: story doc not found for E{epic}:S{story}")
            return 2
    else:
        print("ERROR: provide --story E#:S# or --story-doc path")
        return 2

    if not story_path.exists():
        print(f"ERROR: story doc missing: {story_path}")
        return 2
    if not kboard_path.exists():
        print(f"ERROR: kboard missing: {kboard_path}")
        return 2

    report = compute_coverage(
        story_path.read_text(encoding="utf-8", errors="replace"),
        kboard_path.read_text(encoding="utf-8", errors="replace"),
        epic,
        story,
        story_path,
    )

    print(f"Story: {report.story_id}")
    print(f"  Story doc: {report.story_path}")
    print(f"  Open checklist tasks: {len(report.open_tasks)}")
    for t in report.open_tasks:
        print(f"    - {t}")
    print(f"  On kboard (M/S/C/O/W): {len(report.board_tasks)}")
    for t in report.board_tasks:
        print(f"    - {t}")
    if report.ok:
        print("PASS: all open checklist tasks have kboard rows")
        return 0
    print(f"FAIL: {len(report.missing)} open task(s) missing from kboard")
    for t in report.missing:
        print(f"  - {t}")
    return 1


if __name__ == "__main__":
    raise SystemExit(main())
