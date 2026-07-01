#!/usr/bin/env python3
"""
FR-043 / E04:S14:T11 — UKW Step 2.5 gap discovery (deterministic scan).

Part (a): TODO/IN PROGRESS task docs not referenced on kboard.md.
Part (b): Open FR/BR/UXR in fbu/ without a resolvable implementing task link.

Advisory tooling for comprehensive UKW runs; Part (b) filing remains agentic + user-confirmed.
"""

from __future__ import annotations

import argparse
import json
import re
import sys
from dataclasses import asdict, dataclass, field
from pathlib import Path
from typing import Any, Dict, List, Optional, Set, Tuple

_SCRIPTS_DIR = Path(__file__).resolve().parent.parent
if str(_SCRIPTS_DIR) not in sys.path:
    sys.path.insert(0, str(_SCRIPTS_DIR))

from rw_config_loader import load_rw_config  # noqa: E402

EST_RE = re.compile(r"E(\d+):S(\d+):T(\d+)", re.I)
TASK_ID_LINE_RE = re.compile(r"^\*\*Task ID:\*\*\s*(E\d+:S\d+:T\d+)", re.I | re.M)
STATUS_LINE_RE = re.compile(r"^\*\*Status:\*\*\s*(.+)$", re.I | re.M)
FBU_ID_RE = re.compile(r"^(FR|BR|UXR)-(\d+)", re.I)
IMPLEMENTING_TASK_RE = re.compile(
    r"\*\*Implementing Task:\*\*\s*\[.*?\]\((.*?)\)",
    re.I,
)
OPEN_TASK_STATUSES = frozenset({"TODO", "IN PROGRESS", "IN-PROGRESS"})
OPEN_FBU_STATUSES = frozenset(
    {
        "OPEN",
        "PENDING",
        "REOPENED",
        "PROPOSED",
        "IN PROGRESS",
        "IN-PROGRESS",
        "INTAKE",
        "ACCEPTED",
    }
)
TERMINAL_FBU_STATUSES = re.compile(
    r"\b(?:COMPLETE|COMPLETED|IMPLEMENTED|FIXED|RESOLVED|REJECTED|CLOSED|"
    r"VERIFIED(?:_FIXED)?|WON'?T\s+FIX|DEFERRED|SUPERSEDED)\b",
    re.I,
)


@dataclass
class TaskGap:
    task_id: str
    status: str
    path: str
    title: str = ""


@dataclass
class FbuGap:
    fbu_id: str
    status: str
    path: str
    on_board: bool
    has_implementing_task_link: bool
    linked_task_id: Optional[str] = None
    title: str = ""


@dataclass
class StampHomogeneityAdvisory:
    stamp: str
    row_ids: List[str]
    count: int


@dataclass
class GapReport:
    tasks_missing_from_board: List[TaskGap] = field(default_factory=list)
    open_fbu_without_task: List[FbuGap] = field(default_factory=list)
    stamp_homogeneity_advisory: List[StampHomogeneityAdvisory] = field(default_factory=list)
    board_task_count: int = 0
    active_task_doc_count: int = 0
    fbu_open_scanned: int = 0

    def to_dict(self) -> Dict[str, Any]:
        return {
            "board_task_count": self.board_task_count,
            "active_task_doc_count": self.active_task_doc_count,
            "fbu_open_scanned": self.fbu_open_scanned,
            "tasks_missing_from_board": [asdict(t) for t in self.tasks_missing_from_board],
            "open_fbu_without_task": [asdict(f) for f in self.open_fbu_without_task],
            "stamp_homogeneity_advisory": [asdict(s) for s in self.stamp_homogeneity_advisory],
            "summary": {
                "missing_tasks": len(self.tasks_missing_from_board),
                "taskless_fbu": len(self.open_fbu_without_task),
                "homogeneity_clusters": len(self.stamp_homogeneity_advisory),
            },
        }


def kanban_root(project_root: Path, config: Optional[dict]) -> Path:
    if config and config.get("use_kanban") and config.get("kanban_root"):
        kr = Path(config["kanban_root"])
        return project_root / kr if not kr.is_absolute() else kr
    return project_root / "docs/kanban"


def normalize_est(est: str) -> str:
    m = EST_RE.search(est)
    if not m:
        return est.upper()
    return f"E{int(m.group(1))}:S{int(m.group(2))}:T{int(m.group(3))}"


def extract_task_id(path: Path, content: str) -> Optional[str]:
    m = TASK_ID_LINE_RE.search(content)
    if m:
        return normalize_est(m.group(1))
    m = EST_RE.search(path.name)
    if m:
        return normalize_est(m.group(0))
    return None


def extract_title(content: str) -> str:
    for line in content.splitlines():
        if line.startswith("# "):
            return line[2:].strip()
    return ""


def task_doc_status(content: str) -> Optional[str]:
    m = STATUS_LINE_RE.search(content)
    if not m:
        return None
    raw = m.group(1).strip().upper()
    if raw.startswith("TODO"):
        return "TODO"
    if "IN PROGRESS" in raw or "IN-PROGRESS" in raw:
        return "IN PROGRESS"
    return raw


def is_active_task_status(status: Optional[str]) -> bool:
    return status in OPEN_TASK_STATUSES if status else False


def fbu_root_path(project_root: Path, kroot: Path, config: Optional[dict]) -> Path:
    if config:
        configured = config.get("fbu_root") or config.get("fr_br_root")
        if configured:
            candidate = (project_root / configured).resolve()
            if candidate.is_dir():
                return candidate
    for name in ("fbu", "fr-br"):
        candidate = kroot / name
        if candidate.is_dir():
            return candidate
    return kroot / "fbu"


def board_task_ids(board_content: str) -> Set[str]:
    return {normalize_est(m.group(0)) for m in EST_RE.finditer(board_content)}


def iter_task_docs(epics_root: Path) -> List[Tuple[Path, str]]:
    docs: List[Tuple[Path, str]] = []
    for path in sorted(epics_root.rglob("T*.md")):
        if path.name.startswith("Story-"):
            continue
        try:
            content = path.read_text(encoding="utf-8", errors="replace")
        except OSError:
            continue
        docs.append((path, content))
    return docs


def fbu_id_from_path(path: Path) -> Optional[str]:
    m = FBU_ID_RE.match(path.name)
    if not m:
        return None
    return f"{m.group(1).upper()}-{m.group(2)}"


def fbu_status(content: str) -> Optional[str]:
    m = STATUS_LINE_RE.search(content)
    if not m:
        return None
    raw = m.group(1).strip()
    upper = raw.upper()
    if TERMINAL_FBU_STATUSES.search(upper):
        return None
    for token in OPEN_FBU_STATUSES:
        if token in upper:
            return raw.strip()
    return None


def linked_task_from_fbu(content: str, kanban: Path) -> Optional[str]:
    m = IMPLEMENTING_TASK_RE.search(content)
    if not m:
        return None
    rel = m.group(1).split("#")[0]
    task_path = (kanban / rel).resolve()
    if not task_path.is_file():
        # try relative to kanban parent paths
        alt = (kanban.parent / rel).resolve()
        if alt.is_file():
            task_path = alt
        else:
            return None
    try:
        task_content = task_path.read_text(encoding="utf-8", errors="replace")
    except OSError:
        return None
    return extract_task_id(task_path, task_content)


def scan_stamp_homogeneity(
    board_content: str,
    project_root: Path,
    config: Optional[dict],
) -> List[StampHomogeneityAdvisory]:
    """Part (c) — advisory when many rows share one Last modified stamp (FR-144)."""
    kanban_scripts = Path(__file__).resolve().parent
    if str(kanban_scripts) not in sys.path:
        sys.path.insert(0, str(kanban_scripts))
    from stamp_authority import homogeneity_clusters, homogeneity_threshold_from_config  # noqa: E402

    threshold = homogeneity_threshold_from_config(project_root, config)
    clusters = homogeneity_clusters(board_content, threshold=threshold)
    advisories: List[StampHomogeneityAdvisory] = []
    for stamp, row_ids in sorted(clusters.items()):
        advisories.append(
            StampHomogeneityAdvisory(stamp=stamp, row_ids=row_ids, count=len(row_ids))
        )
    return advisories


def scan_gaps(project_root: Path) -> GapReport:
    config = load_rw_config(project_root)
    kroot = kanban_root(project_root, config)
    board_path = kroot / "kboard.md"
    fbu_root = fbu_root_path(project_root, kroot, config)
    epics_root = kroot / "epics"

    board_content = ""
    if board_path.is_file():
        board_content = board_path.read_text(encoding="utf-8", errors="replace")
    on_board = board_task_ids(board_content)

    report = GapReport(board_task_count=len(on_board))
    report.stamp_homogeneity_advisory = scan_stamp_homogeneity(
        board_content, project_root, config
    )

    for path, content in iter_task_docs(epics_root):
        status = task_doc_status(content)
        if not is_active_task_status(status):
            continue
        task_id = extract_task_id(path, content)
        if not task_id:
            continue
        report.active_task_doc_count += 1
        if task_id not in on_board:
            report.tasks_missing_from_board.append(
                TaskGap(
                    task_id=task_id,
                    status=status or "UNKNOWN",
                    path=str(path.relative_to(project_root)),
                    title=extract_title(content),
                )
            )

    if fbu_root.is_dir():
        for path in sorted(fbu_root.glob("*.md")):
            fbu_id = fbu_id_from_path(path)
            if not fbu_id:
                continue
            try:
                content = path.read_text(encoding="utf-8", errors="replace")
            except OSError:
                continue
            status = fbu_status(content)
            if not status:
                continue
            report.fbu_open_scanned += 1
            linked = linked_task_from_fbu(content, kroot)
            on_board_flag = linked in on_board if linked else False
            if linked:
                continue
            report.open_fbu_without_task.append(
                FbuGap(
                    fbu_id=fbu_id,
                    status=status,
                    path=str(path.relative_to(project_root)),
                    on_board=on_board_flag or fbu_id in board_content,
                    has_implementing_task_link=bool(IMPLEMENTING_TASK_RE.search(content)),
                    linked_task_id=linked,
                    title=extract_title(content),
                )
            )

    report.tasks_missing_from_board.sort(
        key=lambda t: (
            int(re.search(r"E(\d+)", t.task_id).group(1)),
            int(re.search(r"S(\d+)", t.task_id).group(1)),
            int(re.search(r"T(\d+)", t.task_id).group(1)),
        )
    )
    report.open_fbu_without_task.sort(key=lambda f: f.fbu_id)
    return report


def format_markdown_table(report: GapReport) -> str:
    lines = [
        "# UKW gap discovery report",
        "",
        f"- Board tasks (unique E:S:T): **{report.board_task_count}**",
        f"- Active task docs (TODO/IN PROGRESS): **{report.active_task_doc_count}**",
        f"- Open FBU scanned: **{report.fbu_open_scanned}**",
        f"- Tasks missing from board: **{len(report.tasks_missing_from_board)}**",
        f"- Open FBU without linked task: **{len(report.open_fbu_without_task)}**",
        f"- Stamp homogeneity clusters (≥threshold): **{len(report.stamp_homogeneity_advisory)}**",
        "",
        "## Part (a) — tasks not on kboard",
        "",
        "| Task | Status | Path |",
        "| ---- | ------ | ---- |",
    ]
    if report.tasks_missing_from_board:
        for t in report.tasks_missing_from_board[:50]:
            lines.append(f"| {t.task_id} | {t.status} | `{t.path}` |")
        if len(report.tasks_missing_from_board) > 50:
            lines.append(f"| … | … | +{len(report.tasks_missing_from_board) - 50} more |")
    else:
        lines.append("| — | — | none |")

    lines.extend(
        [
            "",
            "## Part (b) — open FBU without implementing task",
            "",
            "| Item | Status | On board? | Path |",
            "| ---- | ------ | --------- | ---- |",
        ]
    )
    if report.open_fbu_without_task:
        for f in report.open_fbu_without_task[:50]:
            ob = "yes" if f.on_board else "no"
            lines.append(f"| {f.fbu_id} | {f.status} | {ob} | `{f.path}` |")
        if len(report.open_fbu_without_task) > 50:
            lines.append(f"| … | … | … | +{len(report.open_fbu_without_task) - 50} more |")
    else:
        lines.append("| — | — | none |")

    lines.extend(
        [
            "",
            "## Part (c) — stamp homogeneity advisory (FR-144)",
            "",
            "| Stamp | Rows | Row IDs |",
            "| ----- | ---- | ------- |",
        ]
    )
    if report.stamp_homogeneity_advisory:
        for s in report.stamp_homogeneity_advisory[:20]:
            ids = ", ".join(s.row_ids[:5])
            if len(s.row_ids) > 5:
                ids += f" (+{len(s.row_ids) - 5})"
            lines.append(f"| {s.stamp} | {s.count} | {ids} |")
    else:
        lines.append("| — | — | none |")
    return "\n".join(lines) + "\n"


def main() -> int:
    parser = argparse.ArgumentParser(description="UKW Step 2.5 gap discovery (FR-043)")
    parser.add_argument("--project-root", type=Path, default=Path.cwd())
    parser.add_argument("--json", action="store_true", help="Emit JSON report")
    parser.add_argument(
        "--markdown-out",
        type=Path,
        help="Write markdown table report to path",
    )
    args = parser.parse_args()
    root = args.project_root.resolve()
    report = scan_gaps(root)
    if args.markdown_out:
        args.markdown_out.parent.mkdir(parents=True, exist_ok=True)
        args.markdown_out.write_text(format_markdown_table(report), encoding="utf-8")
    if args.json:
        print(json.dumps(report.to_dict(), indent=2))
    else:
        d = report.to_dict()
        print(
            f"missing_tasks={d['summary']['missing_tasks']} "
            f"taskless_fbu={d['summary']['taskless_fbu']} "
            f"board_tasks={report.board_task_count}"
        )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
