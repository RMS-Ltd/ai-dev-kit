#!/usr/bin/env python3
"""
RW Step 11 — Tag authority gate (FR-122 F9 / ADR-027).

Ensures release tags are created only via create_rw_tags() / get_rw_tag_info():
  - pre:  before tagging — predict tags, reject occupied/wrong-commit tags
  - post: after tagging — annotated tags on HEAD matching allocator prediction

Usage:
  python validate_rw_tag_authority.py --strict --internal-version 0.2.1.30+4 --mode pre
  python validate_rw_tag_authority.py --strict --internal-version 0.2.1.30+4 --mode post
"""

from __future__ import annotations

import argparse
import re
import subprocess
import sys
from pathlib import Path
from typing import Any, Dict, List, Optional, Sequence, Tuple

_val_dir = Path(__file__).resolve().parent
_scripts_dir = _val_dir.parent
_version_dir = _scripts_dir / "version"
for _p in (_val_dir, _scripts_dir, _version_dir):
    if str(_p) not in sys.path:
        sys.path.insert(0, str(_p))

import semver_converter  # noqa: E402
from rw_config_loader import find_project_root, load_rw_config_or_empty  # noqa: E402

# Lightweight raw tag attempts bypass create_rw_tags (forbidden at Step 11)
_RAW_LIGHTWEIGHT_TAG_RE = re.compile(
    r"\bgit\s+tag\s+(?!-(?:a|m|f)\b)(?!--(?:annotate|message|force)\b)(v[\d.+\-]+)",
    re.IGNORECASE,
)


def _authority_config(config: Dict[str, Any]) -> Dict[str, Any]:
    raw = config.get("rw_tag_authority")
    return raw if isinstance(raw, dict) else {}


def _git_head(root: Path) -> str:
    result = subprocess.run(
        ["git", "rev-parse", "HEAD"],
        cwd=root,
        capture_output=True,
        text=True,
        check=False,
    )
    if result.returncode != 0:
        raise RuntimeError(f"git rev-parse HEAD failed: {result.stderr.strip()}")
    return result.stdout.strip()


def _tag_exists(name: str, root: Path) -> bool:
    result = subprocess.run(
        ["git", "rev-parse", "-q", "--verify", f"refs/tags/{name}"],
        cwd=root,
        capture_output=True,
        text=True,
        check=False,
    )
    return result.returncode == 0


def _tag_object_type(name: str, root: Path) -> Optional[str]:
    result = subprocess.run(
        ["git", "cat-file", "-t", f"refs/tags/{name}"],
        cwd=root,
        capture_output=True,
        text=True,
        check=False,
    )
    if result.returncode != 0:
        return None
    return result.stdout.strip()


def _tag_peeled_commit(name: str, root: Path) -> Optional[str]:
    for ref in (f"refs/tags/{name}^{{}}", f"refs/tags/{name}"):
        result = subprocess.run(
            ["git", "rev-parse", ref],
            cwd=root,
            capture_output=True,
            text=True,
            check=False,
        )
        if result.returncode == 0:
            return result.stdout.strip()
    return None


def _expected_tags(internal_version: str) -> Dict[str, str]:
    return semver_converter.get_rw_tag_info(internal_version, finalize=True)


def _scan_forbidden_raw_tag_commands(commands: Sequence[str]) -> List[str]:
    hits: List[str] = []
    for cmd in commands:
        if _RAW_LIGHTWEIGHT_TAG_RE.search(cmd):
            hits.append(cmd)
    return hits


def validate_rw_tag_authority(
    *,
    project_root: Optional[Path] = None,
    internal_version: Optional[str] = None,
    mode: str = "pre",
    strict: bool = False,
    extra_commands: Optional[Sequence[str]] = None,
) -> Tuple[bool, List[str]]:
    root = project_root or find_project_root()
    config = load_rw_config_or_empty(root)
    auth_cfg = _authority_config(config)

    if auth_cfg.get("enabled") is False:
        return True, ["rw_tag_authority: disabled in rw-config.yaml — skip"]

    lines: List[str] = []
    errors: List[str] = []

    if not internal_version:
        errors.append("rw_tag_authority: --internal-version required")
        return False, errors

    try:
        tag_info = _expected_tags(internal_version)
    except Exception as exc:  # noqa: BLE001
        errors.append(f"rw_tag_authority: get_rw_tag_info failed: {exc}")
        return False, errors

    primary = tag_info["primary_tag"]
    internal_tag = tag_info.get("internal_tag")
    expected = [primary]
    if internal_tag:
        expected.append(internal_tag)

    forbidden = _scan_forbidden_raw_tag_commands(extra_commands or [])
    if forbidden:
        for cmd in forbidden:
            errors.append(f"rw_tag_authority: forbidden raw lightweight git tag: {cmd}")
        return False, errors

    head = _git_head(root)

    if mode == "pre":
        for tag in expected:
            if not _tag_exists(tag, root):
                lines.append(f"rw_tag_authority: {tag} not present (OK — create via create_rw_tags)")
                continue
            commit = _tag_peeled_commit(tag, root)
            if commit != head:
                errors.append(
                    f"rw_tag_authority: {tag} exists on {commit[:8]} != HEAD {head[:8]} "
                    "(tag collision — bump BUILD and re-RW; never git tag -f)"
                )
            else:
                lines.append(f"rw_tag_authority: {tag} on HEAD (idempotent replay OK)")
        if errors:
            return False, errors + lines
        lines.insert(0, f"rw_tag_authority: pre OK primary={primary} internal={internal_tag or '(none)'}")
        return True, lines

    if mode == "post":
        for tag in expected:
            if not _tag_exists(tag, root):
                errors.append(f"rw_tag_authority: missing tag {tag} after Step 11")
                continue
            obj_type = _tag_object_type(tag, root)
            if obj_type != "tag":
                errors.append(
                    f"rw_tag_authority: {tag} is {obj_type!r} — must be annotated tag "
                    "(use create_rw_tags(), not raw git tag)"
                )
            commit = _tag_peeled_commit(tag, root)
            if commit != head:
                errors.append(f"rw_tag_authority: {tag} points to {commit[:8]} != HEAD {head[:8]}")
        if errors:
            return False, errors
        lines.append(f"rw_tag_authority: post OK tags={expected} head={head[:8]}")
        return True, lines

    errors.append(f"rw_tag_authority: unknown mode {mode!r} (use pre or post)")
    return False, errors


def main() -> int:
    parser = argparse.ArgumentParser(description="RW Step 11 tag authority gate (FR-122)")
    parser.add_argument("--strict", action="store_true", help="Non-zero exit on failure")
    parser.add_argument("--internal-version", required=True, help="Internal version being released")
    parser.add_argument(
        "--mode",
        choices=("pre", "post"),
        default="pre",
        help="pre=before create_rw_tags; post=after create_rw_tags",
    )
    args = parser.parse_args()

    ok, lines = validate_rw_tag_authority(
        internal_version=args.internal_version.lstrip("v"),
        mode=args.mode,
        strict=args.strict,
    )
    stream = sys.stdout if ok else sys.stderr
    for line in lines:
        print(line, file=stream)
    if not ok:
        print("FAIL: rw tag authority gate (FR-122 Step 11)", file=sys.stderr)
        return 1 if args.strict else 0
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
