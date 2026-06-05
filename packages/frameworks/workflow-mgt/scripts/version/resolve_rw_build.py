#!/usr/bin/env python3
"""
Resolve next VERSION_BUILD for RW Step 2 (BR-097 / E02:S01:T24).

Run before writing version.py. Outputs JSON on success; exits non-zero on blocked BUILD choice.
"""

from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path
from typing import Any, Dict, List, Optional, Tuple

try:
    import yaml
except ImportError:
    yaml = None

# Reuse validation helpers (same package layout as validate_version_bump.py)
_validation_dir = Path(__file__).resolve().parent.parent / "validation"
if str(_validation_dir) not in sys.path:
    sys.path.insert(0, str(_validation_dir))

from validate_version_bump import (  # noqa: E402
    get_version_build_from_git_ref,
    get_version_components,
    git_ref_exists,
    internal_version_tag_name,
    parse_requested_est,
)


def load_rw_config(project_root: Path) -> Dict[str, Any]:
    config_path = project_root / "rw-config.yaml"
    if not config_path.exists() or yaml is None:
        return {}
    try:
        with open(config_path, encoding="utf-8") as f:
            data = yaml.safe_load(f)
        return data if isinstance(data, dict) else {}
    except Exception:
        return {}


def version_file_path(project_root: Path, config: Dict[str, Any]) -> Path:
    rel = config.get("version_file", "src/fynd_deals/version.py")
    return project_root / rel


def head_est_from_git(version_file: Path) -> Optional[Tuple[int, int, int, int, int]]:
    """Return (rc, epic, story, task, build) from HEAD:version_file, or None."""
    rel = version_file
    try:
        rel = version_file.relative_to(Path.cwd())
    except ValueError:
        pass
    ref = f"HEAD:{rel}"
    import subprocess

    result = subprocess.run(
        ["git", "show", ref],
        capture_output=True,
        text=True,
        cwd=Path.cwd(),
    )
    if result.returncode != 0:
        return None
    content = result.stdout
    rc_m = re.search(r"VERSION_RC\s*=\s*(\d+)", content)
    epic_m = re.search(r"VERSION_EPIC\s*=\s*(\d+)", content)
    story_m = re.search(r"VERSION_STORY\s*=\s*(\d+)", content)
    task_m = re.search(r"VERSION_TASK\s*=\s*(\d+)", content)
    build_m = re.search(r"VERSION_BUILD\s*=\s*(\d+)", content)
    if not all([rc_m, epic_m, story_m, task_m, build_m]):
        return None
    return (
        int(rc_m.group(1)),
        int(epic_m.group(1)),
        int(story_m.group(1)),
        int(task_m.group(1)),
        int(build_m.group(1)),
    )


def resolve_rw_build(
    version_file: Path,
    requested: str,
    art: bool = False,
    doc_policy_zero: bool = False,
    perpetual_same_task: bool = False,
) -> Tuple[bool, Dict[str, Any], List[str]]:
    """
    Determine next BUILD for RW Step 2.

    Returns (ok, payload, errors).
    payload keys: rc, epic, story, task, next_build, internal_version, reason
    """
    errors: List[str] = []
    components = get_version_components(version_file)
    if not components:
        return False, {}, [f"Could not read version components from {version_file}"]

    rc, file_epic, file_story, file_task, file_build = components
    requested_est = parse_requested_est(requested)
    if requested_est is None:
        return False, {}, [f"Invalid --requested token: {requested!r}"]

    req_epic, req_story, req_task = requested_est

    if doc_policy_zero and not art:
        errors.append("--doc-policy-zero requires --art with --requested.")
    if doc_policy_zero and file_build >= 1:
        errors.append(
            "--doc-policy-zero is only valid for BUILD=0 (doc-init). "
            f"Current VERSION_BUILD={file_build}. Same-task follow-on requires BUILD +1 "
            f"(normal `RW E{req_epic}:S{req_story}:T{req_task} --art`). See BR-097."
        )

    head_est = head_est_from_git(version_file)
    head_build = get_version_build_from_git_ref(version_file, "HEAD")
    if head_est is not None:
        head_rc, head_epic, head_story, head_task, head_build_est = head_est
        if head_build is None:
            head_build = head_build_est
    if head_build is None:
        head_build = file_build

    # Adoption anchor for same-task comparison
    anchor_epic, anchor_story, anchor_task = (
        (req_epic, req_story, req_task) if art else (file_epic, file_story, file_task)
    )

    same_task = (
        anchor_epic == (head_est[1] if head_est else file_epic)
        and anchor_story == (head_est[2] if head_est else file_story)
        and anchor_task == (head_est[3] if head_est else file_task)
    )

    if perpetual_same_task or (same_task and not doc_policy_zero):
        next_build = head_build + 1
        reason = "same_task_build_plus_one"
    elif same_task and doc_policy_zero:
        tag = internal_version_tag_name(rc, anchor_epic, anchor_story, anchor_task, head_build)
        if git_ref_exists(tag):
            errors.append(
                f"Tagged BUILD reuse blocked: git tag {tag} exists. "
                f"Use `RW E{anchor_epic}:S{anchor_story}:T{anchor_task} --art` for BUILD +1. "
                "See BR-097 / BR-067."
            )
            return False, {}, errors
        next_build = head_build
        reason = "doc_policy_zero_untagged"
    elif req_task > (head_est[3] if head_est else file_task):
        next_build = 1
        reason = "new_task"
    elif req_task < (head_est[3] if head_est else file_task):
        next_build = 1
        reason = "out_of_order_task"
    else:
        next_build = head_build + 1
        reason = "default_increment"

    payload = {
        "rc": rc,
        "epic": anchor_epic if art else file_epic,
        "story": anchor_story if art else file_story,
        "task": anchor_task if art else file_task,
        "next_build": next_build,
        "head_build": head_build,
        "internal_version": (
            f"{rc}.{anchor_epic if art else file_epic}."
            f"{anchor_story if art else file_story}."
            f"{anchor_task if art else file_task}+{next_build}"
        ),
        "reason": reason,
        "doc_policy_zero": doc_policy_zero,
        "art": art,
        "requested": requested,
    }
    return len(errors) == 0, payload, errors


def main() -> int:
    parser = argparse.ArgumentParser(description="Resolve RW Step 2 BUILD (BR-097)")
    parser.add_argument("--requested", required=True, help="E:S:T token from RW trigger")
    parser.add_argument("--art", action="store_true", help="Adopt requested E:S:T anchor")
    parser.add_argument(
        "--doc-policy-zero",
        action="store_true",
        dest="doc_policy_zero",
        help="Only when user typed --doc-policy-zero in RW trigger",
    )
    parser.add_argument(
        "--perpetual-same-task",
        action="store_true",
        help="UKW/CMW perpetual attribution: force BUILD+1 on same task",
    )
    parser.add_argument("--project-root", default=".", help="Repository root")
    args = parser.parse_args()

    project_root = Path(args.project_root).resolve()
    config = load_rw_config(project_root)
    vfile = version_file_path(project_root, config)

    ok, payload, errors = resolve_rw_build(
        vfile,
        args.requested,
        art=args.art,
        doc_policy_zero=args.doc_policy_zero,
        perpetual_same_task=args.perpetual_same_task,
    )
    if errors:
        for err in errors:
            print(err, file=sys.stderr)
    if not ok:
        return 1

    print(json.dumps(payload, indent=2))
    return 0


if __name__ == "__main__":
    sys.exit(main())
