#!/usr/bin/env python3
"""
RW Step 1e — SemVer allocator (SAA) health preflight (FR-122 / ADR-027).

Blocking when release_state_backend=sqlite and task_touch mode: verifies DB is not
truncated relative to project policy (max_patch floor, counter vs max_patch, injectivity).

Usage:
  python validate_allocator_health.py [--strict] [--rc 0]
"""

from __future__ import annotations

import argparse
import sys
from pathlib import Path
from typing import Any, Dict, List, Optional, Tuple

_SCRIPTS_DIR = Path(__file__).resolve().parent.parent
_VERSION_DIR = _SCRIPTS_DIR / "version"
for _p in (_SCRIPTS_DIR, _VERSION_DIR):
    if str(_p) not in sys.path:
        sys.path.insert(0, str(_p))

from rw_config_loader import find_project_root, load_rw_config_or_empty  # noqa: E402


def _allocator_health_config(config: Dict[str, Any]) -> Dict[str, Any]:
    raw = config.get("allocator_health")
    return raw if isinstance(raw, dict) else {}


def _read_state(db_path: Path, rc: int) -> Tuple[Optional[int], Optional[int], Optional[int], int]:
    from release_state.db import open_db

    if not db_path.exists():
        return None, None, None, 0

    conn = open_db(db_path)
    try:
        row = conn.execute(
            "SELECT epic_count, task_touch_counter, max_patch FROM task_touch_state WHERE rc = ?",
            (rc,),
        ).fetchone()
        count_row = conn.execute(
            "SELECT COUNT(*) AS c FROM task_touch_mapping WHERE rc = ?",
            (rc,),
        ).fetchone()
        mapping_count = int(count_row["c"]) if count_row else 0
        if row is None:
            return None, None, None, mapping_count
        return (
            int(row["epic_count"]),
            int(row["task_touch_counter"]),
            int(row["max_patch"]),
            mapping_count,
        )
    finally:
        conn.close()


def validate_allocator_health(
    *,
    project_root: Path,
    rc: int = 0,
    strict: bool = False,
) -> Tuple[bool, List[str]]:
    config = load_rw_config_or_empty(project_root)
    health_cfg = _allocator_health_config(config)

    if health_cfg.get("enabled") is False:
        return True, ["allocator_health: disabled in rw-config.yaml — skip"]

    import semver_converter  # noqa: E402

    strategy = semver_converter.get_semver_mapping_strategy()
    backend = semver_converter.get_release_state_backend()

    if strategy != "task_touch" or backend != "sqlite":
        return True, [
            f"allocator_health: skip (strategy={strategy!r}, backend={backend!r})"
        ]

    db_path = semver_converter.get_release_state_db_path()
    if not db_path.is_absolute():
        db_path = project_root / db_path

    epic_count, counter, max_patch, mapping_count = _read_state(db_path, rc)
    errors: List[str] = []

    if epic_count is None or counter is None or max_patch is None:
        errors.append(f"allocator_health: missing task_touch_state for rc={rc} ({db_path})")
        return False, errors

    min_patch_floor = health_cfg.get("min_patch_floor")
    if min_patch_floor is not None:
        try:
            floor = int(min_patch_floor)
        except (TypeError, ValueError):
            floor = None
        if floor is not None and max_patch < floor:
            errors.append(
                f"allocator_health: max_patch={max_patch} < min_patch_floor={floor} "
                f"(truncated DB — run import_legacy.py before RW)"
            )

    min_mapping_count = health_cfg.get("min_mapping_count")
    if min_mapping_count is not None:
        try:
            min_maps = int(min_mapping_count)
        except (TypeError, ValueError):
            min_maps = None
        if min_maps is not None and mapping_count < min_maps:
            errors.append(
                f"allocator_health: mapping_count={mapping_count} < min_mapping_count={min_maps}"
            )

    if counter < max_patch:
        errors.append(
            f"allocator_health: task_touch_counter={counter} < max_patch={max_patch} "
            "(counter behind max_patch — truncation or desync)"
        )

    from release_state.allocate import audit

    report = audit(db_path, rc=rc)
    if not report.get("ok", True):
        errors.append(
            f"allocator_health: SAA injectivity audit failed ({len(report.get('collisions', []))} collisions)"
        )

    if errors and not strict:
        return True, [f"allocator_health: advisory — {e}" for e in errors]

    if errors:
        return False, errors

    return True, [
        "allocator_health: OK",
        f"  rc={rc} epic_count={epic_count} counter={counter} max_patch={max_patch} mappings={mapping_count}",
    ]


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--strict", action="store_true", help="Non-zero exit on health failure")
    parser.add_argument("--rc", type=int, default=0)
    args = parser.parse_args()

    root = find_project_root(Path.cwd())
    ok, lines = validate_allocator_health(
        project_root=root, rc=args.rc, strict=args.strict
    )
    for line in lines:
        print(line)
    if ok:
        return 0
    print("FAIL: allocator health preflight (FR-122 Step 1e)", file=sys.stderr)
    return 1


if __name__ == "__main__":
    raise SystemExit(main())
