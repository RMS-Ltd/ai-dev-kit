#!/usr/bin/env python3
"""
RW Step 1f — Git-tag namespace occupancy preview (FR-122 / ADR-027).

Before version bump, predict the next task_touch SemVer core tag and fail if that
tag already exists locally (would cause split-brain or collision at Step 11).

Usage:
  python validate_git_tag_occupancy.py [--strict] [--rc 0]
"""

from __future__ import annotations

import argparse
import re
import subprocess
import sys
from pathlib import Path
from typing import Any, Dict, List, Optional, Tuple

_SCRIPTS_DIR = Path(__file__).resolve().parent.parent
_VERSION_DIR = _SCRIPTS_DIR / "version"
for _p in (_SCRIPTS_DIR, _VERSION_DIR):
    if str(_p) not in sys.path:
        sys.path.insert(0, str(_p))

from rw_config_loader import find_project_root, load_rw_config_or_empty  # noqa: E402

_TAG_RE = re.compile(r"^v(?P<major>\d+)\.(?P<minor>\d+)\.(?P<patch>\d+)$")


def _git_tag_occupancy_config(config: Dict[str, Any]) -> Dict[str, Any]:
    raw = config.get("git_tag_occupancy")
    return raw if isinstance(raw, dict) else {}


def _read_counter_state(db_path: Path, rc: int) -> Tuple[Optional[int], Optional[int]]:
    from release_state.db import open_db

    if not db_path.exists():
        return None, None

    conn = open_db(db_path)
    try:
        row = conn.execute(
            "SELECT epic_count, task_touch_counter FROM task_touch_state WHERE rc = ?",
            (rc,),
        ).fetchone()
        if row is None:
            return None, None
        return int(row["epic_count"]), int(row["task_touch_counter"])
    finally:
        conn.close()


def _list_semver_core_patches(major: int, minor: int, cwd: Path) -> List[int]:
    pattern = f"v{major}.{minor}.*"
    result = subprocess.run(
        ["git", "tag", "-l", pattern],
        cwd=cwd,
        capture_output=True,
        text=True,
        check=False,
    )
    patches: List[int] = []
    for line in (result.stdout or "").splitlines():
        tag = line.strip()
        match = _TAG_RE.match(tag)
        if not match:
            continue
        if int(match.group("major")) != major or int(match.group("minor")) != minor:
            continue
        patches.append(int(match.group("patch")))
    return patches


def _tag_exists(tag: str, cwd: Path) -> bool:
    result = subprocess.run(
        ["git", "rev-parse", "-q", "--verify", f"refs/tags/{tag}"],
        cwd=cwd,
        capture_output=True,
        text=True,
        check=False,
    )
    return result.returncode == 0


def validate_git_tag_occupancy(
    *,
    project_root: Path,
    rc: int = 0,
    strict: bool = False,
) -> Tuple[bool, List[str]]:
    config = load_rw_config_or_empty(project_root)
    occ_cfg = _git_tag_occupancy_config(config)

    if occ_cfg.get("enabled") is False:
        return True, ["git_tag_occupancy: disabled in rw-config.yaml — skip"]

    import semver_converter  # noqa: E402

    strategy = semver_converter.get_semver_mapping_strategy()
    backend = semver_converter.get_release_state_backend()

    if strategy != "task_touch" or backend != "sqlite":
        return True, [
            f"git_tag_occupancy: skip (strategy={strategy!r}, backend={backend!r})"
        ]

    db_path = semver_converter.get_release_state_db_path()
    if not db_path.is_absolute():
        db_path = project_root / db_path

    epic_count, counter = _read_counter_state(db_path, rc)
    if epic_count is None or counter is None:
        msg = f"git_tag_occupancy: missing task_touch_state for rc={rc}"
        return (False, [msg]) if strict else (True, [f"git_tag_occupancy: advisory — {msg}"])

    major = rc
    minor = epic_count
    predicted_patch = counter + 1
    predicted_tag = f"v{major}.{minor}.{predicted_patch}"

    errors: List[str] = []
    git_patches = _list_semver_core_patches(major, minor, project_root)
    git_max = max(git_patches) if git_patches else 0

    if _tag_exists(predicted_tag, project_root):
        errors.append(
            f"git_tag_occupancy: predicted tag {predicted_tag} already exists "
            f"(counter={counter} → patch {predicted_patch}; git_max_patch={git_max})"
        )

    if errors and not strict:
        return True, [f"git_tag_occupancy: advisory — {e}" for e in errors]

    if errors:
        return False, errors

    return True, [
        "git_tag_occupancy: OK",
        f"  predicted_tag={predicted_tag} (not occupied)",
        f"  git_max_patch={git_max} counter={counter}",
    ]


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--strict", action="store_true", help="Non-zero exit on occupancy failure")
    parser.add_argument("--rc", type=int, default=0)
    args = parser.parse_args()

    root = find_project_root(Path.cwd())
    ok, lines = validate_git_tag_occupancy(
        project_root=root, rc=args.rc, strict=args.strict
    )
    for line in lines:
        print(line)
    if ok:
        return 0
    print("FAIL: git tag occupancy preflight (FR-122 Step 1f)", file=sys.stderr)
    return 1


if __name__ == "__main__":
    raise SystemExit(main())
