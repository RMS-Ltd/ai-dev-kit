#!/usr/bin/env python3
"""
Blocking RW Step 9 gate (task_touch): semver-registry must be finalized for the
releasing internal version before tags are created or pushed.

Prevents changelog/README SemVer drift without a registry mapping_history row
(T04-class incidents).

Usage:
  python validate_task_touch_release_contract.py [--internal-version VER] [--strict]
"""

from __future__ import annotations

import argparse
import re
import subprocess
import sys
from pathlib import Path
from typing import Any, Dict, List, Optional, Tuple

_validation_dir = Path(__file__).resolve().parent
_version_dir = _validation_dir.parent / "version"
if str(_version_dir) not in sys.path:
    sys.path.insert(0, str(_version_dir))

from semver_converter import (  # noqa: E402
    _find_mapping_entry,
    _ensure_task_touch_mode,
    convert_version_string,
    get_rw_tag_info,
    get_semver_mapping_strategy,
    load_semver_registry,
    semver_core,
)

try:
    import yaml
except ImportError:
    yaml = None

_SCRIPTS_DIR = Path(__file__).resolve().parent.parent
if str(_SCRIPTS_DIR) not in sys.path:
    sys.path.insert(0, str(_SCRIPTS_DIR))

from rw_config_loader import load_rw_config_or_empty  # noqa: E402


def _project_root(start: Path) -> Path:
    current = start.resolve()
    for parent in [current, *current.parents]:
        if (parent / "rw-config.yaml").exists():
            return parent
    return current


def _load_internal_version(root: Path, config: Dict[str, Any]) -> Optional[str]:
    rel = config.get("version_file", "src/fynd_deals/version.py")
    version_file = root / rel
    if not version_file.exists():
        return None
    content = version_file.read_text(encoding="utf-8")
    m = re.search(
        r"VERSION_RC\s*=\s*(\d+).*?VERSION_EPIC\s*=\s*(\d+).*?"
        r"VERSION_STORY\s*=\s*(\d+).*?VERSION_TASK\s*=\s*(\d+).*?"
        r"VERSION_BUILD\s*=\s*(\d+)",
        content,
        re.DOTALL,
    )
    if m:
        return f"{m.group(1)}.{m.group(2)}.{m.group(3)}.{m.group(4)}+{m.group(5)}"
    m2 = re.search(r'VERSION_STRING\s*=\s*["\']([^"\']+)["\']', content)
    return m2.group(1) if m2 else None


def _git_show_staged_registry(root: Path) -> Optional[str]:
    result = subprocess.run(
        ["git", "show", ":semver-registry.yaml"],
        capture_output=True,
        text=True,
        cwd=root,
    )
    if result.returncode != 0:
        return None
    return result.stdout


def _entry_in_yaml_text(yaml_text: str, internal_version: str) -> bool:
    return f"internal_version: {internal_version}" in yaml_text


def validate_task_touch_release_contract(
    *,
    project_root: Optional[Path] = None,
    internal_version: Optional[str] = None,
    strict: bool = True,
    check_staged_registry: bool = True,
) -> Tuple[bool, List[str]]:
    root = project_root or _project_root(Path.cwd())
    if get_semver_mapping_strategy() != "task_touch":
        return True, []

    config = load_rw_config_or_empty(root)
    internal = (internal_version or _load_internal_version(root, config) or "").lstrip("v")
    if not internal:
        return False, ["Could not determine internal version from version file."]

    errors: List[str] = []
    registry = load_semver_registry()
    rc = int(internal.split(".")[0])
    ttm = _ensure_task_touch_mode(registry, rc)
    entry = _find_mapping_entry(ttm, internal)
    if not entry:
        errors.append(
            f"semver-registry missing finalized mapping_history row for {internal}. "
            "Run finalize_rw_semver_registry.py before changelog/tag steps."
        )
    else:
        registry_semver = entry.get("semver")
        try:
            predicted = convert_version_string(internal, strategy="task_touch", finalize=False)
        except Exception as exc:
            errors.append(f"SemVer prediction failed for {internal}: {exc}")
            predicted = None
        if predicted and registry_semver != predicted:
            errors.append(
                f"Registry semver {registry_semver!r} != predicted {predicted!r} for {internal}."
            )
        tag_info = get_rw_tag_info(internal, finalize=False)
        primary = tag_info.get("primary_tag", "")
        if registry_semver and primary != f"v{semver_core(registry_semver)}":
            errors.append(
                f"Primary tag {primary!r} does not match registry semver core "
                f"{semver_core(registry_semver)!r}."
            )

    if check_staged_registry and strict:
        staged = _git_show_staged_registry(root)
        if staged is None:
            errors.append(
                "semver-registry.yaml is not staged — finalize row must be committed with the release."
            )
        elif not _entry_in_yaml_text(staged, internal):
            errors.append(
                f"Staged semver-registry.yaml lacks internal_version: {internal} "
                "(finalize before git add)."
            )

    return len(errors) == 0, errors


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Validate task_touch registry finalize contract for RW (blocking)."
    )
    parser.add_argument("--internal-version", help="Override internal version (no v prefix)")
    parser.add_argument("--strict", action="store_true", default=True)
    parser.add_argument(
        "--no-check-staged",
        action="store_true",
        help="Skip staged semver-registry.yaml check",
    )
    args = parser.parse_args()
    ok, errors = validate_task_touch_release_contract(
        internal_version=args.internal_version,
        strict=args.strict,
        check_staged_registry=not args.no_check_staged,
    )
    if ok:
        print("validate_task_touch_release_contract: OK")
        return 0
    for err in errors:
        print(f"validate_task_touch_release_contract: BLOCKED — {err}", file=sys.stderr)
    return 1


if __name__ == "__main__":
    raise SystemExit(main())
