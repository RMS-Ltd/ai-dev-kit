#!/usr/bin/env python3
"""
KMA structural scorer (M08) — deterministic rubric scoring vs Target Structure Pack.

Reads TSP markdown + candidate kanban_root; emits stable JSON and optional markdown report.
Score-only mode performs no file writes.

Part of FR-136 / E06:S09:T39.
"""

from __future__ import annotations

import argparse
import json
import re
import sys
from dataclasses import dataclass, field
from pathlib import Path
from typing import Any, Dict, List, Optional, Set, Tuple

import yaml

# E:S:T tokens in TSP rows and candidate corpus
_EST_TOKEN_RE = re.compile(
    r"\bE(\d{1,2})[:\-]S(\d{1,3})[:\-]T(\d{1,3})\b", re.IGNORECASE
)
# TSP task row: **E01:S01:T01** — *Title*
_TSP_TASK_ROW_RE = re.compile(
    r"\*\*E(\d{1,2})[:\-]S(\d{1,3})[:\-]T(\d{1,3})\*\*"
    r"(?:\s*[—\-]\s*\*([^*]+)\*)?",
    re.IGNORECASE,
)
# Story file basename pattern (reserved for future story-file scoring)
# Epic directory pattern
_EPIC_DIR_RE = re.compile(r"^epic-(\d{1,3})$", re.IGNORECASE)
_UNRESOLVED_TITLE_MARKERS = (
    "unresolved",
    "tbd",
    "todo",
    "placeholder",
    "(none)",
)


def normalize_est(epic: int, story: int, task: int) -> str:
    """Canonical E:S:T token (unpadded epic/story, zero-padded task when <10)."""
    t = f"T{task:02d}" if task < 101 else f"T{task:03d}"
    return f"E{epic}:S{story}:{t}"


def parse_est_token(raw: str) -> Optional[str]:
    m = _EST_TOKEN_RE.search(raw)
    if not m:
        return None
    return normalize_est(int(m.group(1)), int(m.group(2)), int(m.group(3)))


@dataclass
class TspInventory:
    tasks: Set[str] = field(default_factory=set)
    titles: Dict[str, str] = field(default_factory=dict)
    epic_story_counts: Dict[int, int] = field(default_factory=dict)
    epic_task_counts: Dict[int, int] = field(default_factory=dict)

    def add_task(self, token: str, title: Optional[str] = None) -> None:
        if token in self.tasks:
            if title and self._is_named(title):
                existing = self.titles.get(token, "")
                if not self._is_named(existing):
                    self.titles[token] = title
            return
        self.tasks.add(token)
        epic = int(token.split(":")[0][1:])
        story = int(token.split(":")[1][1:])
        self.epic_task_counts[epic] = self.epic_task_counts.get(epic, 0) + 1
        # story uniqueness per epic for band parity
        story_key = f"{epic}:{story}"
        if not hasattr(self, "_stories_seen"):
            self._stories_seen: Set[str] = set()  # type: ignore[attr-defined]
        if story_key not in self._stories_seen:
            self._stories_seen.add(story_key)  # type: ignore[attr-defined]
            self.epic_story_counts[epic] = self.epic_story_counts.get(epic, 0) + 1
        if title:
            self.titles[token] = title

    @staticmethod
    def _is_named(title: str) -> bool:
        t = title.strip().lower()
        if not t:
            return False
        return not any(m in t for m in _UNRESOLVED_TITLE_MARKERS)


def parse_tsp_markdown(path: Path) -> TspInventory:
    """Parse TARGET-EST-TREE.md for unique E:S:T tokens and titles."""
    inv = TspInventory()
    inv._stories_seen = set()  # type: ignore[attr-defined]
    text = path.read_text(encoding="utf-8", errors="replace")
    for line in text.splitlines():
        row_m = _TSP_TASK_ROW_RE.search(line)
        if row_m:
            token = normalize_est(
                int(row_m.group(1)), int(row_m.group(2)), int(row_m.group(3))
            )
            title = row_m.group(4)
            inv.add_task(token, title)
            continue
        for m in _EST_TOKEN_RE.finditer(line):
            token = normalize_est(int(m.group(1)), int(m.group(2)), int(m.group(3)))
            inv.add_task(token)
    return inv


@dataclass
class CandidateInventory:
    tasks: Set[str] = field(default_factory=set)
    titles: Dict[str, str] = field(default_factory=dict)
    epic_story_counts: Dict[int, int] = field(default_factory=dict)
    epic_task_counts: Dict[int, int] = field(default_factory=dict)
    epic_dirs: Set[int] = field(default_factory=set)
    story_collisions: List[Dict[str, Any]] = field(default_factory=list)
    orphan_epic_dirs: List[str] = field(default_factory=list)
    undeclared_epic_dirs: List[str] = field(default_factory=list)

    def add_task(self, token: str, title: Optional[str] = None) -> None:
        if token in self.tasks:
            return
        self.tasks.add(token)
        epic = int(token.split(":")[0][1:])
        story = int(token.split(":")[1][1:])
        self.epic_task_counts[epic] = self.epic_task_counts.get(epic, 0) + 1
        story_key = f"{epic}:{story}"
        if not hasattr(self, "_stories_seen"):
            self._stories_seen: Set[str] = set()  # type: ignore[attr-defined]
        if story_key not in self._stories_seen:
            self._stories_seen.add(story_key)  # type: ignore[attr-defined]
            self.epic_story_counts[epic] = self.epic_story_counts.get(epic, 0) + 1
        if title:
            self.titles[token] = title


def scan_candidate_kanban(
    kanban_root: Path, tsp_epics: Set[int], reserved_orphans: Optional[Set[int]] = None
) -> CandidateInventory:
    """Scan candidate kanban tree for tasks, folders, and collisions."""
    inv = CandidateInventory()
    inv._stories_seen = set()  # type: ignore[attr-defined]
    reserved_orphans = reserved_orphans or set()
    kanban_root = kanban_root.resolve()
    epics_dir = kanban_root / "epics"
    if not epics_dir.is_dir():
        return inv

    for epic_path in sorted(epics_dir.iterdir()):
        if not epic_path.is_dir():
            continue
        epic_m = _EPIC_DIR_RE.match(epic_path.name)
        if not epic_m:
            continue
        epic_num = int(epic_m.group(1))
        inv.epic_dirs.add(epic_num)

        # Story basename collision scan (M02 / UXR-017)
        basenames: Dict[str, List[str]] = {}
        for story_path in epic_path.rglob("story-*.md"):
            if not story_path.is_file():
                continue
            base = story_path.name.lower()
            basenames.setdefault(base, []).append(str(story_path.relative_to(kanban_root)))
        for base, paths in basenames.items():
            if len(paths) > 1:
                inv.story_collisions.append({"basename": base, "paths": paths, "epic": epic_num})

        # Harvest E:S:T from markdown under epic
        for md_path in epic_path.rglob("*.md"):
            if not md_path.is_file():
                continue
            try:
                text = md_path.read_text(encoding="utf-8", errors="replace")
            except OSError:
                continue
            for m in _EST_TOKEN_RE.finditer(text):
                token = normalize_est(int(m.group(1)), int(m.group(2)), int(m.group(3)))
                inv.add_task(token)

    # Orphan / undeclared epic dirs
    for epic_num in inv.epic_dirs:
        if epic_num not in tsp_epics:
            inv.undeclared_epic_dirs.append(f"epic-{epic_num:02d}")
    for orphan in reserved_orphans:
        orphan_path = epics_dir / f"epic-{orphan:02d}"
        if orphan_path.is_dir() and orphan not in tsp_epics:
            inv.orphan_epic_dirs.append(str(orphan_path.relative_to(kanban_root)))

    return inv


def load_rubric(path: Path) -> Dict[str, Any]:
    with path.open(encoding="utf-8") as f:
        return yaml.safe_load(f)


def _dim_result(score: float, weight: float, detail: str) -> Dict[str, Any]:
    return {"score": round(score, 4), "weight": weight, "detail": detail}


def score_dimensions(
    tsp: TspInventory,
    candidate: CandidateInventory,
    rubric: Dict[str, Any],
) -> Tuple[Dict[str, Dict[str, Any]], float]:
    dims_cfg = rubric.get("dimensions", {})
    dimensions: Dict[str, Dict[str, Any]] = {}

    # 1. unique_task_coverage
    tsp_set = tsp.tasks
    out_set = candidate.tasks
    intersection = tsp_set & out_set
    coverage = len(intersection) / len(tsp_set) if tsp_set else 1.0
    w = dims_cfg.get("unique_task_coverage", {}).get("weight", 0.25)
    dimensions["unique_task_coverage"] = _dim_result(
        coverage,
        w,
        f"{len(intersection)}/{len(tsp_set)} TSP tasks present in candidate",
    )

    # 2. epic_band_parity
    tsp_epics = set(tsp.epic_task_counts) | set(tsp.epic_story_counts)
    errors: List[float] = []
    for epic in tsp_epics:
        tsp_st = max(tsp.epic_story_counts.get(epic, 0), 1)
        tsp_tk = max(tsp.epic_task_counts.get(epic, 0), 1)
        out_st = candidate.epic_story_counts.get(epic, 0)
        out_tk = candidate.epic_task_counts.get(epic, 0)
        errors.append(abs(out_st - tsp_st) / tsp_st)
        errors.append(abs(out_tk - tsp_tk) / tsp_tk)
    band_score = max(0.0, 1.0 - (sum(errors) / len(errors) if errors else 0.0))
    w = dims_cfg.get("epic_band_parity", {}).get("weight", 0.20)
    dimensions["epic_band_parity"] = _dim_result(
        band_score, w, f"mean relative error across {len(tsp_epics)} epics"
    )

    # 3. title_coverage
    matched = intersection
    named = sum(
        1
        for t in matched
        if TspInventory._is_named(candidate.titles.get(t, tsp.titles.get(t, "")))
    )
    title_score = named / len(matched) if matched else 1.0
    w = dims_cfg.get("title_coverage", {}).get("weight", 0.15)
    dimensions["title_coverage"] = _dim_result(
        title_score, w, f"{named}/{len(matched)} matched tasks have named titles"
    )

    # 4. story_filename_collision
    collisions = len(candidate.story_collisions)
    coll_score = 1.0 if collisions == 0 else max(0.0, 1.0 - collisions / 10.0)
    w = dims_cfg.get("story_filename_collision", {}).get("weight", 0.15)
    dimensions["story_filename_collision"] = _dim_result(
        coll_score, w, f"{collisions} basename collision(s) detected"
    )

    # 5. folder_alignment
    tsp_epic_set = set(tsp.epic_task_counts) | set(tsp.epic_story_counts)
    aligned = sum(1 for e in tsp_epic_set if e in candidate.epic_dirs)
    folder_score = aligned / len(tsp_epic_set) if tsp_epic_set else 1.0
    w = dims_cfg.get("folder_alignment", {}).get("weight", 0.15)
    dimensions["folder_alignment"] = _dim_result(
        folder_score, w, f"{aligned}/{len(tsp_epic_set)} TSP epics have epic-NN folders"
    )

    # 6. orphan_and_reserved
    orphans = len(candidate.orphan_epic_dirs) + len(candidate.undeclared_epic_dirs)
    folder_count = max(len(candidate.epic_dirs), 1)
    orphan_score = max(0.0, 1.0 - orphans / folder_count)
    w = dims_cfg.get("orphan_and_reserved", {}).get("weight", 0.10)
    dimensions["orphan_and_reserved"] = _dim_result(
        orphan_score, w, f"{orphans} orphan/undeclared epic folder(s)"
    )

    weighted = sum(d["score"] * d["weight"] for d in dimensions.values())
    return dimensions, round(weighted, 4)


def build_score_report(
    tsp_path: Path,
    kanban_root: Path,
    rubric_path: Path,
    mode: str = "score_only",
    project: Optional[str] = None,
    self_test: bool = False,
) -> Dict[str, Any]:
    rubric = load_rubric(rubric_path)
    tsp = parse_tsp_markdown(tsp_path)
    tsp_epics = set(tsp.epic_task_counts) | set(tsp.epic_story_counts)
    reserved: Set[int] = set()
    for entry in rubric.get("dimensions", {}).get("orphan_and_reserved", {}).get(
        "known_orphans_attempt_11", []
    ) or []:
        m = re.search(r"epic-(\d+)", str(entry))
        if m:
            reserved.add(int(m.group(1)))
    if self_test:
        candidate = CandidateInventory()
        candidate._stories_seen = set(tsp._stories_seen)  # type: ignore[attr-defined]
        candidate.tasks = set(tsp.tasks)
        candidate.titles = dict(tsp.titles)
        candidate.epic_story_counts = dict(tsp.epic_story_counts)
        candidate.epic_task_counts = dict(tsp.epic_task_counts)
        candidate.epic_dirs = tsp_epics
    else:
        candidate = scan_candidate_kanban(kanban_root, tsp_epics, reserved)
    dimensions, weighted = score_dimensions(tsp, candidate, rubric)
    thresholds = rubric.get("thresholds", {})
    pass_threshold = thresholds.get("guided_pass", 0.85)
    return {
        "version": rubric.get("version", 1),
        "project": project or rubric.get("project", "unknown"),
        "mode": mode,
        "tsp_path": str(tsp_path),
        "kanban_root": str(kanban_root),
        "unique_tsp_tasks": len(tsp.tasks),
        "unique_candidate_tasks": len(candidate.tasks),
        "weighted_total": weighted,
        "dimensions": dimensions,
        "pass_threshold": pass_threshold,
        "passed": weighted >= pass_threshold,
        "collisions": candidate.story_collisions,
    }


def render_markdown_report(report: Dict[str, Any]) -> str:
    lines = [
        "# KMA Structural Score Report",
        "",
        f"**Project:** {report['project']}",
        f"**Mode:** {report['mode']}",
        f"**Weighted total:** {report['weighted_total']:.4f} "
        f"(threshold {report['pass_threshold']}) — "
        f"{'PASS' if report['passed'] else 'REVIEW'}",
        "",
        "## Dimensions",
        "",
        "| Dimension | Score | Weight | Detail |",
        "| --------- | ----- | ------ | ------ |",
    ]
    for name, dim in report["dimensions"].items():
        lines.append(
            f"| {name} | {dim['score']:.4f} | {dim['weight']} | {dim['detail']} |"
        )
    lines.extend(
        [
            "",
            f"**TSP unique tasks:** {report['unique_tsp_tasks']}",
            f"**Candidate unique tasks:** {report['unique_candidate_tasks']}",
        ]
    )
    if report.get("collisions"):
        lines.extend(["", "## Story basename collisions", ""])
        for c in report["collisions"]:
            lines.append(f"- `{c['basename']}` in epic {c['epic']}: {c['paths']}")
    return "\n".join(lines) + "\n"


def main() -> int:
    parser = argparse.ArgumentParser(description="KMA structural scorer (M08)")
    parser.add_argument("--tsp", type=Path, required=True, help="TARGET-EST-TREE.md path")
    parser.add_argument(
        "--kanban-root", type=Path, required=True, help="Candidate kanban root"
    )
    parser.add_argument(
        "--rubric",
        type=Path,
        default=None,
        help="SCORING-RUBRIC.yaml (default: sibling of TSP or reference template)",
    )
    parser.add_argument(
        "--mode",
        choices=["score_only", "guided", "blind"],
        default="score_only",
        help="Scoring mode label for report",
    )
    parser.add_argument("--json", type=Path, default=None, help="Write JSON report to path")
    parser.add_argument(
        "--markdown", type=Path, default=None, help="Write markdown report to path"
    )
    parser.add_argument("--stdout-json", action="store_true", help="Print JSON to stdout")
    parser.add_argument(
        "--self-test",
        action="store_true",
        help="Score TSP against itself (CI self-test; ignores kanban tree)",
    )
    args = parser.parse_args()

    if not args.tsp.is_file():
        print(f"ERROR: TSP not found: {args.tsp}", file=sys.stderr)
        return 2
    if not args.kanban_root.is_dir():
        print(f"ERROR: kanban root not found: {args.kanban_root}", file=sys.stderr)
        return 2

    rubric_path = args.rubric
    if rubric_path is None:
        sibling = args.tsp.parent / "SCORING-RUBRIC.yaml"
        if sibling.is_file():
            rubric_path = sibling
        else:
            rubric_path = (
                Path(__file__).resolve().parents[1]
                / "reference/templates/SCORING-RUBRIC.template.yaml"
            )
    if not rubric_path.is_file():
        print(f"ERROR: rubric not found: {rubric_path}", file=sys.stderr)
        return 2

    report = build_score_report(
        args.tsp, args.kanban_root, rubric_path, args.mode, self_test=args.self_test
    )
    payload = json.dumps(report, indent=2, sort_keys=True)

    if args.json:
        args.json.write_text(payload + "\n", encoding="utf-8")
    if args.markdown:
        args.markdown.write_text(render_markdown_report(report), encoding="utf-8")
    if args.stdout_json or (not args.json and not args.markdown):
        print(payload)
    return 0


if __name__ == "__main__":
    sys.exit(main())
