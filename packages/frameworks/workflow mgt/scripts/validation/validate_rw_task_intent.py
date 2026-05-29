#!/usr/bin/env python3
"""
validate_rw_task_intent.py — BR-056 / E6:S06:T56

Compare user-supplied RW task identifier to current version.py context before Step 2.
Exits 0 if OK to proceed, 1 if mismatch (RW should abort before file edits), 2 if invalid args/parse.

Usage:
  python validate_rw_task_intent.py --requested E7S5T1
  python validate_rw_task_intent.py --requested E7:S06:T02 --version-file src/foo/version.py
  python validate_rw_task_intent.py --requested E6S6T56 --mode rw-k   # kanban init: skip vs version.py
  python validate_rw_task_intent.py --requested E5:S01:T72 --art       # explicit canonical adoption (all RW modes)
  python validate_rw_task_intent.py --requested E7:S05:T01 --confirmed-override  # after explicit user confirm

See: BR-056, .cursorrules RW Task Intent Guard, release-workflow-agent-execution.md
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

# ukw_syntax_parser lives alongside kanban scripts
_SCRIPT_DIR = Path(__file__).resolve().parent
_KANBAN_DIR = _SCRIPT_DIR.parent / "kanban"
if str(_KANBAN_DIR) not in sys.path:
    sys.path.insert(0, str(_KANBAN_DIR))

from ukw_syntax_parser import parse_single_task_id  # noqa: E402


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


def get_version_file_path(config: Optional[Dict]) -> Path:
    if config and "version_file" in config:
        return Path(config["version_file"])
    return Path("src/fynd_deals/version.py")


def get_version_components(version_file: Path) -> Optional[Tuple[int, int, int, int, int]]:
    if not version_file.exists():
        return None
    content = version_file.read_text()
    rc_m = re.search(r"VERSION_RC\s*=\s*(\d+)", content)
    ep_m = re.search(r"VERSION_EPIC\s*=\s*(\d+)", content)
    st_m = re.search(r"VERSION_STORY\s*=\s*(\d+)", content)
    tk_m = re.search(r"VERSION_TASK\s*=\s*(\d+)", content)
    bd_m = re.search(r"VERSION_BUILD\s*=\s*(\d+)", content)
    if not all([rc_m, ep_m, st_m, tk_m, bd_m]):
        return None
    return (
        int(rc_m.group(1)),
        int(ep_m.group(1)),
        int(st_m.group(1)),
        int(tk_m.group(1)),
        int(bd_m.group(1)),
    )


def extract_epic_story_from_path(story_file: Path) -> Optional[Tuple[int, int]]:
    path_str = str(story_file)
    m2 = re.search(r"Epic-(\d+)/Story-(\d+)", path_str)
    if m2:
        return (int(m2.group(1)), int(m2.group(2)))
    m1 = re.search(r"Epic-(\d+)/stories/Story-(\d+)", path_str)
    if m1:
        return (int(m1.group(1)), int(m1.group(2)))
    return None


def extract_epic_story_from_code_field(content: str) -> Optional[Tuple[int, int]]:
    code_match = re.search(r"\*\*Code:\*\*\s*E(\d+)S(\d+)", content, re.IGNORECASE)
    if code_match:
        return (int(code_match.group(1)), int(code_match.group(2)))
    return None


def find_story_file(config: Optional[Dict], epic: int, story: int) -> Optional[Path]:
    project_root = Path.cwd()
    candidate_files: List[Path] = []
    if config and config.get("use_kanban") and "kanban_root" in config:
        kanban_root = Path(config["kanban_root"])
        story_pattern = config.get("story_doc_pattern", "**/Story-*.md")
        candidate_files.extend(project_root.glob(str(kanban_root / story_pattern)))
    for pattern in (
        "docs/project-management/kanban/epics/Epic-*/Story-*.md",
        "docs/project-management/kanban/epics/Epic-*/stories/Story-*.md",
    ):
        candidate_files.extend(project_root.glob(pattern))

    path_matches: List[Path] = []
    for story_file in candidate_files:
        ps = extract_epic_story_from_path(story_file)
        if ps and ps == (epic, story):
            path_matches.append(story_file)
    if len(path_matches) == 1:
        return path_matches[0]
    if len(path_matches) > 1:
        # Epic 5 (and similar): multiple Story-00N-* files under one epic can share path-derived S01;
        # FR Repo story files use *fr-repo* in the filename — prefer that for E/S/T intent checks.
        fr_repo = [p for p in path_matches if "fr-repo" in p.stem.lower()]
        if len(fr_repo) == 1:
            return fr_repo[0]
        if len(fr_repo) > 1:
            return sorted(fr_repo, key=lambda p: p.name)[0]
        return sorted(path_matches, key=lambda p: p.name)[0]
    for story_file in candidate_files:
        try:
            content = story_file.read_text()
            cs = extract_epic_story_from_code_field(content)
            if cs and cs == (epic, story):
                return story_file
        except Exception:
            continue
    for story_file in candidate_files:
        try:
            content = story_file.read_text()
            header = "\n".join(content.split("\n")[:50])
            sm = re.search(r"#\s*Story\s+(\d+)", header, re.IGNORECASE)
            if sm:
                fs = int(sm.group(1))
                ps = extract_epic_story_from_path(story_file)
                if ps and ps[0] == epic and fs == story:
                    return story_file
        except Exception:
            continue
    return None


def collect_completed_task_numbers(story_content: str) -> List[int]:
    # Match ✅ COMPLETE or ✅ COMPLETED (Story docs vary). Allow " - " between title ** and status.
    done = r"(?:-\s*)?✅\s+COMPLETE(?:D)?"
    p1 = re.compile(rf"\[x\]\s+\*\*E\d+:S\d+:T(\d+)[^\*]*\*\*\s+{done}", re.IGNORECASE)
    p2 = re.compile(rf"\[x\]\s+\*\*E\d+:S\d+:T(\d+)\*\*\s+{done}", re.IGNORECASE)
    found: List[int] = []
    for m in p1.finditer(story_content):
        found.append(int(m.group(1)))
    for m in p2.finditer(story_content):
        t = int(m.group(1))
        if t not in found:
            found.append(t)
    return found


def format_est(e: int, s: int, t: int) -> str:
    return f"E{e}:S{s:02d}:T{t}"


def main() -> int:
    parser = argparse.ArgumentParser(description="Validate RW user task id vs version.py (BR-056).")
    parser.add_argument(
        "--requested",
        required=False,
        default=None,
        help="User-supplied task id, e.g. E7S5T1 or E7:S05:T01",
    )
    parser.add_argument(
        "--mode",
        choices=("full", "rw-k"),
        default="full",
        help="rw-k skips comparison vs version.py (kanban-init attribution).",
    )
    parser.add_argument(
        "--confirmed-override",
        action="store_true",
        help="User explicitly confirmed releasing against mismatched context; skip mismatch exit.",
    )
    parser.add_argument(
        "--art",
        action="store_true",
        help="Adopt requested task as canonical release anchor (explicit intent) in any RW mode.",
    )
    parser.add_argument("--version-file", type=Path, default=None, help="Override version file path.")
    args = parser.parse_args()

    if not args.requested or not str(args.requested).strip():
        print("validate_rw_task_intent: SKIP (no --requested task id).")
        return 0

    if args.confirmed_override:
        print("validate_rw_task_intent: OVERRIDE — proceeding per explicit user confirmation.")
        return 0

    parsed = parse_single_task_id(args.requested.strip())
    if parsed is None:
        print(f"❌ validate_rw_task_intent: Could not parse task id: {args.requested!r}")
        return 2

    rq_e, rq_s, rq_t = parsed

    config = load_rw_config()
    vpath = args.version_file or get_version_file_path(config)
    vc = get_version_components(vpath)
    if vc is None:
        print(f"❌ validate_rw_task_intent: Could not read version components from {vpath}")
        return 2

    _rc, ve, vs, vt, _vb = vc
    current_fmt = format_est(ve, vs, vt)
    requested_fmt = format_est(rq_e, rq_s, rq_t)

    if args.art:
        print(
            "validate_rw_task_intent: --art adoption enabled — "
            f"accept requested {requested_fmt} as canonical anchor (version.py currently {current_fmt})."
        )
        return 0

    if args.mode == "rw-k":
        print(
            f"validate_rw_task_intent: mode=rw-k — skip version.py comparison "
            f"(requested {requested_fmt}, version {current_fmt})."
        )
        return 0

    if rq_e != ve:
        print("❌ RW TASK INTENT MISMATCH (epic)")
        print(f"   Requested: {requested_fmt}")
        print(f"   version.py: {current_fmt} ({vpath})")
        print("   If this is intentional, re-run RW after explicit confirmation with --confirmed-override.")
        return 1

    if rq_s != vs:
        print("❌ RW TASK INTENT MISMATCH (story) — high typo risk (BR-056)")
        print(f"   Requested: {requested_fmt}")
        print(f"   version.py: {current_fmt} ({vpath})")
        print("   Reply confirming the intended task, then run RW with --confirmed-override on validate_rw_task_intent.")
        return 1

    if rq_t == vt:
        print(f"validate_rw_task_intent: OK — requested matches version.py ({current_fmt}).")
        return 0

    # Same epic/story; task differs — allow if releasing newly completed task (checklist)
    story_path = find_story_file(config, ve, vs)
    if story_path is None or not story_path.exists():
        print("⚠️  Story file not found; cannot verify new-task intent.")
        print(f"   Requested task {rq_t}, version.py task {vt}.")
        print("   Re-run with --confirmed-override if this release is intentional.")
        return 1

    completed = collect_completed_task_numbers(story_path.read_text())
    if not completed:
        print("⚠️  No ✅ COMPLETE rows in Story checklist; cannot verify new-task intent.")
        print(f"   Requested task {rq_t}, version.py task {vt}.")
        print("   Re-run with --confirmed-override if this release is intentional.")
        return 1

    max_done = max(completed)
    if rq_t == max_done:
        print(
            f"validate_rw_task_intent: OK — requested T{rq_t} is highest completed in Story "
            f"(version file still T{vt}; typical new-task bump)."
        )
        return 0

    print("❌ RW TASK INTENT MISMATCH (task)")
    print(f"   Requested: {requested_fmt}")
    print(f"   version.py: {current_fmt}")
    print(f"   Story completed tasks (sample): {sorted(completed)}")
    print("   If intentional, re-run with --confirmed-override after explicit user confirmation.")
    return 1


if __name__ == "__main__":
    sys.exit(main())
