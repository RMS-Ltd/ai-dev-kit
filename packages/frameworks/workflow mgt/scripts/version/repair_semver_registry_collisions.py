#!/usr/bin/env python3
"""
Apply semver-registry collision repair manifest (task_touch mapping_history).

Does not move Git tags. Updates PATCH/semver fields and syncs task_touch_counter.
"""

from __future__ import annotations

import argparse
import copy
import re
import sys
from pathlib import Path
from typing import Any, Dict, List, Set

import yaml

script_dir = Path(__file__).parent
sys.path.insert(0, str(script_dir))

from semver_converter import format_semver, load_semver_registry, save_semver_registry, semver_core  # noqa: E402
from task_touch_registry_audit import audit_registry, format_report, has_collisions  # noqa: E402

INTERNAL_RE = re.compile(r"^(\d+)\.(\d+)\.(\d+)\.(\d+)\+(\d+)$")


def _parse_internal(internal_version: str):
    m = INTERNAL_RE.match(internal_version)
    if not m:
        raise ValueError(f"Invalid internal version: {internal_version}")
    return tuple(int(x) for x in m.groups())


def apply_manifest(
    registry: Dict[str, Any],
    manifest: Dict[str, Any],
    *,
    dry_run: bool = False,
) -> Dict[str, Any]:
    rc = int(manifest.get("rc", 0))
    rc_key = f"rc_{rc}"
    ttm = registry[rc_key]["task_touch_mode"]
    epic_count = int(ttm.get("epic_count", 0))
    history: List[Dict[str, Any]] = list(ttm.get("mapping_history") or [])

    canonical_keep: Set[str] = set(manifest.get("canonical_keep") or [])
    remove_internal: Set[str] = set(manifest.get("remove_internal") or [])
    reassign_internal: List[str] = list(manifest.get("reassign_internal") or [])

    history = [e for e in history if e.get("internal_version") not in remove_internal]

    used_patches = {int(e["patch"]) for e in history if e.get("patch") is not None}
    next_patch = max(used_patches) if used_patches else 0

    changes: List[Dict[str, Any]] = []

    for target_iv in reassign_internal:
        entry = next(
            (e for e in history if e.get("internal_version") == target_iv),
            None,
        )
        if not entry:
            continue
        if target_iv in canonical_keep:
            continue
        old_patch = int(entry["patch"])
        old_semver = entry.get("semver", "")
        next_patch += 1
        rc_i, epic, story, task, build = _parse_internal(target_iv)
        new_semver = format_semver(rc_i, epic_count, next_patch, build)
        entry["patch"] = next_patch
        entry["semver"] = new_semver
        changes.append(
            {
                "internal_version": target_iv,
                "old_patch": old_patch,
                "new_patch": next_patch,
                "old_semver": old_semver,
                "new_semver": new_semver,
            }
        )

    ttm["mapping_history"] = history
    patches = [int(e["patch"]) for e in history if e.get("patch") is not None]
    if patches:
        ttm["task_touch_counter"] = max(patches)

    return {
        "changes": changes,
        "removed": sorted(remove_internal),
        "counter": ttm["task_touch_counter"],
        "report_after": audit_registry(registry, rc=rc) if not dry_run else None,
    }


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--manifest",
        type=Path,
        required=True,
        help="Repair manifest YAML",
    )
    parser.add_argument("--dry-run", action="store_true")
    parser.add_argument("--registry-path", type=Path, help="Write registry (default: project root)")
    args = parser.parse_args()

    with open(args.manifest, encoding="utf-8") as f:
        manifest = yaml.safe_load(f) or {}

    registry = load_semver_registry()
    before = audit_registry(registry, rc=int(manifest.get("rc", 0)))
    print("Before:")
    print(format_report(before))

    result = apply_manifest(registry, manifest, dry_run=args.dry_run)
    print("\nChanges:", result.get("changes"))
    print("Removed:", result.get("removed"))
    print("Counter:", result.get("counter"))

    if args.dry_run:
        reg_copy = copy.deepcopy(registry)
        apply_manifest(reg_copy, manifest, dry_run=False)
        after = audit_registry(reg_copy, rc=int(manifest.get("rc", 0)))
        print("\nAfter (simulated):")
        print(format_report(after))
        return 1 if has_collisions(after) else 0

    save_semver_registry(registry)
    after = audit_registry(registry, rc=int(manifest.get("rc", 0)))
    print("\nAfter:")
    print(format_report(after))
    return 1 if has_collisions(after) else 0


if __name__ == "__main__":
    raise SystemExit(main())
