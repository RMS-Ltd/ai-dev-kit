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

import semver_converter  # noqa: E402


def finalize_rw_semver_registry(internal_version: str) -> dict:
    strategy = semver_converter.get_semver_mapping_strategy()
    if strategy != "task_touch":
        return {
            "skipped": True,
            "reason": f"semver_mapping_strategy={strategy!r} (not task_touch)",
            "internal_version": internal_version,
        }

    version = internal_version.lstrip("v")

    if semver_converter.get_release_state_backend() == "sqlite":
        from release_state.allocate import allocate
        from release_state.export_legacy import export_registry_yaml

        db_path = semver_converter.get_release_state_db_path()
        result = allocate(db_path, version)
        semver_full = result.semver_full
        semver_core = result.semver_core
        created = result.allocated
        registry_path = str(db_path)
        export_yaml_path = None
        config = semver_converter.load_rw_config()
        export_rel = config.get("release_state_export_yaml")
        if export_rel:
            export_yaml_path = semver_converter._rw_config_root() / str(export_rel)
            export_registry_yaml(db_path, export_yaml_path)
        tag_info = semver_converter.get_rw_tag_info(version, finalize=False)
        payload = {
            "skipped": False,
            "created": created,
            "internal_version": version,
            "semver_full": semver_full,
            "semver_core": semver_core,
            "semver_display": tag_info.get("semver_display") or semver_core,
            "primary_tag": tag_info["primary_tag"],
            "internal_tag": tag_info.get("internal_tag"),
            "strategy": strategy,
            "registry_path": registry_path,
            "patch_sequence": result.patch_sequence,
        }
        if export_yaml_path is not None:
            payload["export_yaml"] = str(export_yaml_path)
        return payload

    registry = semver_converter.load_semver_registry()
    rc = int(version.split(".")[0])
    ttm = semver_converter._ensure_task_touch_mode(registry, rc)
    existing = semver_converter._find_mapping_entry(ttm, version)
    if existing:
        semver_full = existing["semver"]
        created = False
    else:
        semver_full = semver_converter.convert_version_string(
            version, strategy="task_touch", finalize=True
        )
        created = True

    tag_info = semver_converter.get_rw_tag_info(version, finalize=False)
    semver_core = semver_converter.semver_core_from_full(semver_full)
    registry_path = str(Path.cwd() / "semver-registry.yaml")
    return {
        "skipped": False,
        "created": created,
        "internal_version": version,
        "semver_full": semver_full,
        "semver_core": semver_core,
        "semver_display": tag_info.get("semver_display") or semver_core,
        "primary_tag": tag_info["primary_tag"],
        "internal_tag": tag_info.get("internal_tag"),
        "strategy": strategy,
        "registry_path": registry_path,
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
