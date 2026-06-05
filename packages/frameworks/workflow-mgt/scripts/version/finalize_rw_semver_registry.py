#!/usr/bin/env python3
"""
RW Step 2.5 (task_touch): finalize semver-registry.yaml for the releasing internal version.

Must run after version.py is updated and before changelog/README SemVer writes.
Idempotent for an already-finalized internal version.

Usage:
  python finalize_rw_semver_registry.py --internal-version 0.2.13.4+1
"""

from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path

_SCRIPT_DIR = Path(__file__).resolve().parent
if str(_SCRIPT_DIR) not in sys.path:
    sys.path.insert(0, str(_SCRIPT_DIR))

from semver_converter import (  # noqa: E402
    convert_version_string,
    get_rw_tag_info,
    get_semver_mapping_strategy,
    load_semver_registry,
    _find_mapping_entry,
    _ensure_task_touch_mode,
)


def finalize_rw_semver_registry(internal_version: str) -> dict:
    strategy = get_semver_mapping_strategy()
    if strategy != "task_touch":
        return {
            "skipped": True,
            "reason": f"semver_mapping_strategy={strategy!r} (not task_touch)",
            "internal_version": internal_version,
        }

    version = internal_version.lstrip("v")
    registry = load_semver_registry()
    rc = int(version.split(".")[0])
    ttm = _ensure_task_touch_mode(registry, rc)
    existing = _find_mapping_entry(ttm, version)
    if existing:
        semver_full = existing["semver"]
        created = False
    else:
        semver_full = convert_version_string(version, strategy="task_touch", finalize=True)
        created = True

    tag_info = get_rw_tag_info(version, finalize=False)
    return {
        "skipped": False,
        "created": created,
        "internal_version": version,
        "semver_full": semver_full,
        "primary_tag": tag_info["primary_tag"],
        "internal_tag": tag_info.get("internal_tag"),
        "strategy": strategy,
        "registry_path": str(Path.cwd() / "semver-registry.yaml"),
    }


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(
        description="Finalize task_touch semver-registry row for RW release (Step 2.5)."
    )
    parser.add_argument(
        "--internal-version",
        required=True,
        help="Internal version without v prefix (e.g. 0.2.13.4+1)",
    )
    args = parser.parse_args(argv)
    payload = finalize_rw_semver_registry(args.internal_version)
    print(json.dumps(payload, indent=2))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
