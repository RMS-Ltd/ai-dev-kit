#!/usr/bin/env python3
"""Validate IPW publication wiring for a requested E:S:T task.

Checks that planning artifacts are durable + discoverable via project docs tree
and linked from the host task doc, or that the task explicitly declares
NOT_APPLICABLE publication status with a reason.
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

TASK_ID_RE = re.compile(r"\*\*Task ID:\*\*\s*E(\d+):S(\d+):T(\d+)\b", re.IGNORECASE)
MD_LINK_RE = re.compile(r"\[[^\]]+\]\(([^)]+)\)")
NOT_APPLICABLE_RE = re.compile(r"Publication Status:\s*NOT[_ -]?APPLICABLE", re.IGNORECASE)
NA_REASON_RE = re.compile(r"Publication N/A Reason:\s*.+", re.IGNORECASE)


def load_rw_config(project_root: Path) -> Optional[Dict]:
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
    out: List[Path] = []
    seen = set()
    for r in roots:
        rp = r.resolve()
        if rp in seen or not rp.is_dir():
            continue
        seen.add(rp)
        epics = rp / "epics"
        if epics.is_dir():
            out.append(epics)
    return out


def task_id_header_matches(head: str, epic: int, story: int, task: int) -> bool:
    for m in TASK_ID_RE.finditer(head):
        if int(m.group(1)) == epic and int(m.group(2)) == story and int(m.group(3)) == task:
            return True
    return False


def find_task_markdown(project_root: Path, epic: int, story: int, task: int, config: Optional[Dict]) -> Optional[Path]:
    for epics in kanban_epics_glob(project_root, config):
        for path in epics.rglob("*.md"):
            if path.name.startswith("_"):
                continue
            head = path.read_text(encoding="utf-8", errors="replace")[:14000]
            if task_id_header_matches(head, epic, story, task):
                return path
    return None


def expected_artifact_basenames(epic: int, story: int, task: int) -> Dict[str, List[str]]:
    patterns = {
        f"E{epic}S{story}T{task}",
        f"E{epic:02d}S{story}T{task}",
        f"E{epic}S{story:02d}T{task}",
        f"E{epic}S{story}T{task:02d}",
        f"E{epic:02d}S{story:02d}T{task:02d}",
        f"E{epic}S{story:02d}T{task:02d}",
        f"E{epic:02d}S{story:02d}T{task}",
    }
    return {
        "specification": [n for p in patterns for n in (f"ICW-{p}-specification.md", f"IPW-{p}-specification.md")],
        "test-design": [n for p in patterns for n in (f"ICW-{p}-test-design.md", f"IPW-{p}-test-design.md")],
        "implementation-plan": [n for p in patterns for n in (f"ICW-{p}-implementation-plan.md", f"IPW-{p}-implementation-plan.md")],
    }


def extract_task_links(content: str) -> List[str]:
    return [m.group(1).strip() for m in MD_LINK_RE.finditer(content)]


def normalize_to_project_path(task_doc: Path, link_target: str, project_root: Path) -> Optional[Path]:
    if link_target.startswith("http://") or link_target.startswith("https://"):
        return None
    p = (task_doc.parent / link_target).resolve()
    try:
        p.relative_to(project_root)
    except Exception:
        return None
    return p


def validate_publication(project_root: Path, task_doc: Path, epic: int, story: int, task: int) -> Tuple[bool, List[str]]:
    errors: List[str] = []
    content = task_doc.read_text(encoding="utf-8", errors="replace")

    if NOT_APPLICABLE_RE.search(content):
        if not NA_REASON_RE.search(content):
            errors.append("Publication Status is NOT_APPLICABLE but missing 'Publication N/A Reason:'")
            return False, errors
        return True, []

    links = extract_task_links(content)
    resolved = []
    for lt in links:
        p = normalize_to_project_path(task_doc, lt, project_root)
        if p is not None:
            resolved.append((lt, p))

    expected = expected_artifact_basenames(epic, story, task)
    found_by_kind = {k: None for k in expected}

    for _lt, p in resolved:
        if "docs/implementation-cycles" not in str(p).replace('\\', '/'):
            continue
        for kind, names in expected.items():
            if p.name in names:
                found_by_kind[kind] = p

    for kind, p in found_by_kind.items():
        if p is None:
            errors.append(
                f"Missing task-doc link to {kind} artifact for E{epic}:S{story}:T{task} under docs/implementation-cycles"
            )
            continue
        if not p.exists():
            errors.append(f"Linked {kind} artifact does not exist: {p}")

    return len(errors) == 0, errors


def main() -> int:
    parser = argparse.ArgumentParser(description="Validate IPW publication wiring for requested E:S:T")
    parser.add_argument("--requested", required=True, help="Task id, e.g. E2:S15:T01 or E2S15T01")
    parser.add_argument("--project-root", type=Path, default=None, help="Repo root (default: cwd)")
    args = parser.parse_args()

    project_root = (args.project_root or Path.cwd()).resolve()
    config = load_rw_config(project_root)

    parsed = parse_single_task_id(args.requested.strip())
    if parsed is None:
        print(f"ERROR: could not parse task id: {args.requested!r}")
        return 2
    e, s, t = parsed

    task_doc = find_task_markdown(project_root, e, s, t, config)
    if task_doc is None:
        print(f"ERROR: task document not found for E{e}:S{s}:T{t}")
        return 1

    ok, errors = validate_publication(project_root, task_doc, e, s, t)
    if ok:
        print(f"PASS: publication wiring OK for E{e}:S{s}:T{t}")
        print(f"  Task doc: {task_doc}")
        return 0

    print(f"FAIL: publication wiring invalid for E{e}:S{s}:T{t}")
    for err in errors:
        print(f" - {err}")
    print("Remediation: add links in task doc to specification/test-design/implementation-plan in docs/implementation-cycles, or set Publication Status: NOT_APPLICABLE with Publication N/A Reason.")
    return 1


if __name__ == "__main__":
    raise SystemExit(main())
