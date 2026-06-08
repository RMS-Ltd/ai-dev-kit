#!/usr/bin/env python3
"""Read-only cross-repo kanban corpus fingerprint extractor (Kanban v2 analysis)."""

from __future__ import annotations

import argparse
import json
import re
import subprocess
from collections import Counter, defaultdict
from dataclasses import asdict, dataclass, field
from pathlib import Path
from typing import Any, Dict, List, Optional, Set, Tuple

EPIC_DIR_PATTERNS = [
    re.compile(r"epic[-_ ]?(\d+)", re.I),
    re.compile(r"Epic[-_ ]?(\d+)", re.I),
]
STORY_FILE_PATTERNS = [
    re.compile(r"story[-_ ]?(\d+)", re.I),
    re.compile(r"Story[-_ ]?(\d+)", re.I),
    re.compile(r"E(\d+)[-_]S(\d+)", re.I),
]
TASK_FILE_PATTERNS = [
    re.compile(r"/T(\d+)[-_]", re.I),
    re.compile(r"T(\d{2,3})[-_]", re.I),
]
EST_INLINE = re.compile(r"E(\d{1,2}):S(\d{1,2}):T(\d{1,3})", re.I)
PERPETUAL_MARKERS = [
    re.compile(r"perpetual_task\s*:\s*true", re.I),
    re.compile(r"Task Type:\s*Perpetual Maintenance", re.I),
    re.compile(r"PERPETUAL", re.I),
]
FORENSIC_MARKER = re.compile(r"COMPLETE\s*\(v[\d.+]+\)", re.I)
BOARD_NAMES = {"kboard.md", "kanban-board.md", "Kanban Board.md", "fbuboard.md"}


@dataclass
class CorpusFingerprint:
    name: str
    root: str
    epic_count: int = 0
    story_count: int = 0
    task_count: int = 0
    epic_numbers: List[int] = field(default_factory=list)
    story_numbers_by_epic: Dict[str, List[int]] = field(default_factory=dict)
    epic_numbering_style: str = "unknown"
    task_doc_pattern: str = "unknown"
    perpetual_task_locations: List[str] = field(default_factory=list)
    board_files: List[str] = field(default_factory=list)
    path_convention: str = "mixed"
    special_stories: Dict[str, List[int]] = field(default_factory=dict)
    forensic_marker_rate: float = 0.0
    layout_notes: List[str] = field(default_factory=list)
    file_counts: Dict[str, int] = field(default_factory=dict)


def _epic_from_path(path: Path) -> Optional[int]:
    for part in path.parts:
        for pat in EPIC_DIR_PATTERNS:
            m = pat.search(part)
            if m:
                return int(m.group(1))
    return None


def _story_from_name(name: str) -> Optional[int]:
    for pat in STORY_FILE_PATTERNS:
        m = pat.search(name)
        if m:
            return int(m.group(1) if pat.groups == 1 else m.group(2) if m.lastindex and m.lastindex >= 2 else m.group(1))
    return None


def _is_task_file(path: Path) -> bool:
    name = path.name
    if name.startswith("T") and re.match(r"T\d+", name):
        return True
    return any(p.search(str(path)) for p in TASK_FILE_PATTERNS)


def _is_story_file(path: Path) -> bool:
    name = path.name.lower()
    return "story" in name and path.suffix == ".md" and not _is_task_file(path)


def _classify_path_convention(paths: List[Path]) -> str:
    lower = sum(1 for p in paths if "epic-" in str(p).lower())
    capital = sum(1 for p in paths if "Epic-" in str(p) or "Epic " in str(p))
    if lower and capital:
        return "mixed"
    if lower:
        return "lowercase_epic-NN"
    if capital:
        return "Epic-NN_or_Epic_N"
    return "other"


def _read_text(path: Path) -> str:
    try:
        return path.read_text(encoding="utf-8", errors="replace")
    except OSError:
        return ""


def scan_corpus(name: str, root: Path, kanban_roots: Optional[List[Path]] = None) -> CorpusFingerprint:
    fp = CorpusFingerprint(name=name, root=str(root))
    if not root.exists():
        fp.layout_notes.append(f"root missing: {root}")
        return fp

    search_roots = kanban_roots or [root]
    md_files: List[Path] = []
    for sr in search_roots:
        if sr.exists():
            md_files.extend(sr.rglob("*.md"))

    fp.file_counts["markdown_total"] = len(md_files)

    epic_dirs: Set[int] = set()
    story_files: List[Tuple[int, Path]] = []
    task_files: List[Path] = []
    stories_by_epic: Dict[int, Set[int]] = defaultdict(set)

    for path in md_files:
        rel = str(path.relative_to(root)) if path.is_relative_to(root) else str(path)
        if path.name in BOARD_NAMES or "board" in path.name.lower() and path.parent.name.lower() in {
            "kanban",
            "",
        }:
            fp.board_files.append(rel)

        epic = _epic_from_path(path)
        if epic is not None and path.is_dir() is False:
            if "epic" in path.name.lower() and path.suffix == ".md":
                epic_dirs.add(epic)
            elif epic in {int(m.group(1)) for m in EPIC_DIR_PATTERNS[0].finditer(str(path))}:
                epic_dirs.add(epic)

        parent_epic = _epic_from_path(path.parent)
        if _is_story_file(path):
            sn = _story_from_name(path.name)
            if sn is not None and parent_epic is not None:
                story_files.append((parent_epic, path))
                stories_by_epic[parent_epic].add(sn)
            elif sn is not None:
                story_files.append((0, path))

        if _is_task_file(path):
            task_files.append(path)

        text = _read_text(path)
        if any(m.search(text) for m in PERPETUAL_MARKERS):
            for m in EST_INLINE.finditer(text):
                loc = f"E{m.group(1)}:S{m.group(2)}:T{m.group(3)}"
                if loc not in fp.perpetual_task_locations:
                    fp.perpetual_task_locations.append(loc)

    # Epic dirs from directory structure
    for path in md_files:
        for part in path.parts:
            for pat in EPIC_DIR_PATTERNS:
                m = pat.search(part)
                if m:
                    epic_dirs.add(int(m.group(1)))

    fp.epic_count = len(epic_dirs)
    fp.epic_numbers = sorted(epic_dirs)
    fp.story_count = len(story_files)
    fp.task_count = len(task_files)

    for e, nums in stories_by_epic.items():
        fp.story_numbers_by_epic[str(e)] = sorted(nums)
        if 0 in nums:
            fp.special_stories.setdefault("S00", []).append(e)
        if any(n >= 14 for n in nums):
            fp.special_stories.setdefault("S14+", []).append(e)
        if any(n == 16 for n in nums):
            fp.special_stories.setdefault("S16", []).append(e)

    # Numbering style
    if fp.epic_numbers:
        if max(fp.epic_numbers) <= 16 and fp.epic_numbers == list(range(min(fp.epic_numbers), max(fp.epic_numbers) + 1)):
            fp.epic_numbering_style = "sequential_delivery"
        elif fp.epic_numbers[:4] == [1, 2, 3, 4]:
            fp.epic_numbering_style = "framework_first"
        else:
            fp.epic_numbering_style = "project_mixed"

    if task_files and len(task_files) > fp.story_count * 0.5:
        fp.task_doc_pattern = "discrete_files"
    elif task_files:
        fp.task_doc_pattern = "mixed"
    else:
        fp.task_doc_pattern = "embedded_in_story"

    fp.path_convention = _classify_path_convention(md_files[:200])

    # Forensic marker sample (up to 50 story/task docs)
    sample = [p for p in md_files if _is_story_file(p) or _is_task_file(p)][:50]
    if sample:
        hits = sum(1 for p in sample if FORENSIC_MARKER.search(_read_text(p)))
        fp.forensic_marker_rate = round(hits / len(sample), 2)

    fp.board_files = sorted(set(fp.board_files))
    return fp


def extract_starborn_from_git(repo: Path, ref: str = "v0.15.13.7+1") -> CorpusFingerprint:
    fp = CorpusFingerprint(name="starborn_legacy_git", root=str(repo))
    try:
        out = subprocess.run(
            ["git", "-C", str(repo), "ls-tree", "-r", "--name-only", ref],
            capture_output=True,
            text=True,
            check=True,
        )
    except (subprocess.CalledProcessError, FileNotFoundError) as exc:
        fp.layout_notes.append(f"git ls-tree failed: {exc}")
        return fp

    kanban_paths = [
        line
        for line in out.stdout.splitlines()
        if line.endswith(".md")
        and ("kanban" in line.lower() or "epic" in line.lower() or "project-management" in line.lower())
    ]
    fp.file_counts["markdown_kanban_related"] = len(kanban_paths)

    epic_nums: Set[int] = set()
    story_count = 0
    for line in kanban_paths:
        for pat in EPIC_DIR_PATTERNS:
            m = pat.search(line)
            if m:
                epic_nums.add(int(m.group(1)))
        if "story" in line.lower():
            story_count += 1

    fp.epic_count = len(epic_nums)
    fp.epic_numbers = sorted(epic_nums)
    fp.story_count = story_count
    fp.epic_numbering_style = "sequential_delivery"
    fp.task_doc_pattern = "embedded_in_story"
    fp.path_convention = "epics/overview"
    fp.layout_notes.append(f"extracted from git ref {ref} (working tree cleared)")
    fp.perpetual_task_locations = ["E15:S01 (zombie — book case study)"]
    return fp


def packaged_template_audit(templates_root: Path) -> Dict[str, Any]:
    audit: Dict[str, Any] = {"root": str(templates_root)}
    if not templates_root.exists():
        return audit

    layouts = {
        "flat_epics": len(list((templates_root / "epics").glob("*.md"))) if (templates_root / "epics").exists() else 0,
        "flat_stories": len(list((templates_root / "stories").rglob("*.md"))) if (templates_root / "stories").exists() else 0,
        "flat_tasks": len(list((templates_root / "tasks").rglob("*.md"))) if (templates_root / "tasks").exists() else 0,
        "nested_epic_dirs": len([d for d in templates_root.glob("epic-*") if d.is_dir()]),
        "total_md": len(list(templates_root.rglob("*.md"))),
    }
    audit["layouts"] = layouts

    swap_issues = []
    for path in (templates_root / "epics").glob("*.md") if (templates_root / "epics").exists() else []:
        text = _read_text(path)
        header_m = re.search(r"^# Epic (\d+):", text, re.M)
        fname_m = re.search(r"epic-(\d+)|Epic-(\d+)", path.name, re.I)
        if header_m and fname_m:
            header_n = int(header_m.group(1))
            file_n = int(fname_m.group(1) or fname_m.group(2))
            if header_n != file_n:
                swap_issues.append({"file": path.name, "header_epic": header_n, "filename_epic": file_n})
    audit["epic_header_filename_swap"] = swap_issues

    perpetual_files = []
    for path in templates_root.rglob("*.md"):
        if "perpetual" in path.name.lower() or "Perpetual" in _read_text(path):
            perpetual_files.append(str(path.relative_to(templates_root)))
    audit["perpetual_template_files"] = perpetual_files[:20]
    audit["perpetual_template_count"] = len(perpetual_files)

    return audit


def main() -> None:
    parser = argparse.ArgumentParser(description="Kanban corpus fingerprint extractor")
    parser.add_argument("--output", required=True, help="Output JSON path")
    parser.add_argument("--ai-dev-kit", default=".", help="ai-dev-kit repo root")
    args = parser.parse_args()

    adk = Path(args.ai_dev_kit).resolve()
    corpora: List[Any] = []

    corpora.append(
        scan_corpus(
            "packaged_templates",
            adk / "packages/frameworks/kanban/templates",
            [adk / "packages/frameworks/kanban/templates"],
        )
    )
    corpora.append(
        scan_corpus(
            "adk_live",
            adk / "docs/kanban",
            [adk / "docs/kanban/epics", adk / "docs/kanban"],
        )
    )
    corpora.append(
        scan_corpus(
            "confidentia",
            Path("/Users/rms/Documents/projects/confidentia/KB/PM_and_Portfolio/kanban"),
        )
    )
    corpora.append(
        scan_corpus(
            "fynd_deals",
            Path("/Users/rms/Documents/projects/fynd.deals/knowledge/fynd_deals/Kanban"),
        )
    )
    corpora.append(extract_starborn_from_git(Path("/Users/rms/Documents/projects/starborn_legacy")))

    audit = packaged_template_audit(adk / "packages/frameworks/kanban/templates")

    payload = {
        "corpora": [asdict(c) for c in corpora],
        "packaged_template_audit": audit,
    }

    out = Path(args.output)
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(json.dumps(payload, indent=2), encoding="utf-8")
    print(f"Wrote {out}")


if __name__ == "__main__":
    main()
