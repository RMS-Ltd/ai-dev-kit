"""
Shared audit helpers for task_touch semver-registry mapping_history injectivity.
"""

from __future__ import annotations

from collections import defaultdict
from typing import Any, Dict, List


def semver_core(semver: str) -> str:
    """MAJOR.MINOR.PATCH without +BUILD metadata."""
    return semver.split("+", 1)[0]


def audit_task_touch_history(
    task_touch_mode: Dict[str, Any],
) -> Dict[str, Any]:
    """
    Return collision report for mapping_history under rc_* task_touch_mode.

    Keys: patch_collisions, core_collisions, counter, max_patch, entry_count
    """
    history = task_touch_mode.get("mapping_history") or []
    by_patch: Dict[int, List[Dict[str, Any]]] = defaultdict(list)
    by_core: Dict[str, List[Dict[str, Any]]] = defaultdict(list)

    for entry in history:
        if not isinstance(entry, dict):
            continue
        iv = entry.get("internal_version")
        sv = entry.get("semver")
        if not iv or not sv:
            continue
        patch = int(entry.get("patch", semver_core(sv).split(".")[-1]))
        by_patch[patch].append(entry)
        by_core[semver_core(sv)].append(entry)

    patch_collisions = {
        p: [e["internal_version"] for e in entries]
        for p, entries in by_patch.items()
        if len({e["internal_version"] for e in entries}) > 1
    }
    core_collisions = {
        c: [e["internal_version"] for e in entries]
        for c, entries in by_core.items()
        if len({e["internal_version"] for e in entries}) > 1
    }

    patches = [
        int(e.get("patch", semver_core(e["semver"]).split(".")[-1]))
        for e in history
        if isinstance(e, dict) and e.get("semver")
    ]
    max_patch = max(patches) if patches else 0
    counter = int(task_touch_mode.get("task_touch_counter", 0))

    return {
        "patch_collisions": patch_collisions,
        "core_collisions": core_collisions,
        "counter": counter,
        "max_patch": max_patch,
        "entry_count": len(history),
        "counter_behind_max": counter < max_patch,
    }


def audit_registry(registry: Dict[str, Any], rc: int = 0) -> Dict[str, Any]:
    rc_key = f"rc_{rc}"
    rc_scope = registry.get(rc_key) or {}
    ttm = rc_scope.get("task_touch_mode") or {}
    report = audit_task_touch_history(ttm)
    report["rc"] = rc
    return report


def has_collisions(report: Dict[str, Any]) -> bool:
    return bool(report.get("patch_collisions") or report.get("core_collisions"))


def format_report(report: Dict[str, Any]) -> str:
    lines = [
        f"rc_{report.get('rc', 0)} task_touch audit:",
        f"  entries: {report.get('entry_count', 0)}",
        f"  counter: {report.get('counter')} max_patch: {report.get('max_patch')}",
    ]
    if report.get("counter_behind_max"):
        lines.append("  WARNING: task_touch_counter < max(patch) in history")
    for label, key in (("PATCH", "patch_collisions"), ("CORE", "core_collisions")):
        coll = report.get(key) or {}
        if not coll:
            continue
        lines.append(f"  {label} collisions:")
        for k, ivs in sorted(coll.items(), key=lambda x: str(x[0])):
            lines.append(f"    {k}: {ivs}")
    if not has_collisions(report):
        lines.append("  OK: no PATCH or core collisions")
    return "\n".join(lines)
