#!/usr/bin/env python3
"""
Validate document lifecycle metadata (five required fields + cross-field invariants).

Usage:
    python scripts/validate_lifecycle_metadata.py --path <docs_root> [--strict] [--file <single.md>]
"""

from __future__ import annotations

import argparse
import sys
from pathlib import Path
from typing import Any, Dict, List, Tuple

SCRIPT_DIR = Path(__file__).resolve().parent
if str(SCRIPT_DIR) not in sys.path:
    sys.path.insert(0, str(SCRIPT_DIR))

from _frontmatter_utils import (  # noqa: E402
    LIFECYCLE_VALUES,
    POLICY_VALUES,
    REQUIRED_FIELDS,
    YAML_AVAILABLE,
    expires_at_within_tolerance,
    is_valid_iso_datetime,
    iter_markdown_documents,
    load_frontmatter,
    parse_iso_datetime,
)


def validate_metadata(
    metadata: Dict[str, Any], *, strict: bool
) -> Tuple[List[str], List[str]]:
    errors: List[str] = []
    warnings: List[str] = []

    for field in REQUIRED_FIELDS:
        if field not in metadata:
            errors.append(f"missing required field: {field}")

    lifecycle = metadata.get("lifecycle")
    if lifecycle is not None and lifecycle not in LIFECYCLE_VALUES:
        errors.append(
            f"invalid lifecycle: {lifecycle} (expected one of: {', '.join(sorted(LIFECYCLE_VALUES))})"
        )

    ttl_days = metadata.get("ttl_days")
    if "ttl_days" in metadata:
        if ttl_days is None:
            pass
        elif not isinstance(ttl_days, int) or ttl_days < 1 or ttl_days > 3650:
            errors.append(
                f"invalid ttl_days: {ttl_days!r} (expected integer 1-3650 or null)"
            )

    created_at_raw = metadata.get("created_at")
    created_at = parse_iso_datetime(created_at_raw)
    if "created_at" in metadata and not is_valid_iso_datetime(created_at_raw):
        errors.append(
            f"invalid created_at: {created_at_raw!r} (expected ISO 8601 UTC, e.g. 2026-06-06T12:00:00Z)"
        )

    expires_at_raw = metadata.get("expires_at")
    expires_at = parse_iso_datetime(expires_at_raw)
    if "expires_at" in metadata and expires_at_raw is not None and expires_at is None:
        errors.append(
            f"invalid expires_at: {expires_at_raw!r} (expected ISO 8601 UTC or null)"
        )

    policy = metadata.get("housekeeping_policy")
    if policy is not None and policy not in POLICY_VALUES:
        errors.append(
            f"invalid housekeeping_policy: {policy} (expected one of: {', '.join(sorted(POLICY_VALUES))})"
        )

    if lifecycle == "evergreen":
        if ttl_days is not None:
            errors.append("evergreen documents must have ttl_days: null")
        if expires_at_raw is not None:
            errors.append("evergreen documents must have expires_at: null")
        if policy is not None and policy != "keep":
            errors.append("evergreen documents must have housekeeping_policy: keep")
    elif lifecycle == "timeboxed" and strict and policy is not None and policy != "archive":
        warnings.append("timeboxed documents should use housekeeping_policy: archive")
    elif lifecycle == "transient" and strict and policy is not None and policy != "delete":
        warnings.append("transient documents should use housekeeping_policy: delete")

    if ttl_days is None:
        if expires_at_raw is not None:
            errors.append("expires_at must be null when ttl_days is null")
    elif isinstance(ttl_days, int) and created_at is not None:
        if expires_at is None:
            errors.append("expires_at required when ttl_days is set")
        elif not expires_at_within_tolerance(created_at, ttl_days, expires_at):
            errors.append(
                "expires_at does not match created_at + ttl_days (±1 day tolerance)"
            )

    return errors, warnings


def validate_file(path: Path, *, strict: bool) -> Tuple[bool, List[str]]:
    content = path.read_text(encoding="utf-8")
    metadata, parse_error = load_frontmatter(content)
    if parse_error:
        return False, [parse_error]
    if metadata is None:
        return False, ["No frontmatter block"]
    errors, warnings = validate_metadata(metadata, strict=strict)
    messages = errors + ([f"WARN: {w}" for w in warnings] if strict else [])
    return len(errors) == 0, messages


def main(argv: List[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description="Validate document lifecycle metadata")
    parser.add_argument("--path", required=True, help="Docs root directory")
    parser.add_argument("--strict", action="store_true", help="Fail on validation errors")
    parser.add_argument("--file", help="Validate a single markdown file")
    args = parser.parse_args(argv)

    if not YAML_AVAILABLE:
        print("ERROR: PyYAML is required", file=sys.stderr)
        return 2

    target = Path(args.path)
    if args.file:
        files = [Path(args.file)]
    else:
        if not target.is_dir():
            print(f"ERROR: docs root not found: {target}", file=sys.stderr)
            return 2
        files = list(iter_markdown_documents(target))

    pass_count = 0
    fail_count = 0
    skip_count = 0

    for file_path in files:
        content = file_path.read_text(encoding="utf-8")
        metadata, parse_error = load_frontmatter(content)
        if parse_error == "No frontmatter block":
            skip_count += 1
            continue
        if parse_error or metadata is None:
            fail_count += 1
            print(f"FAIL {file_path}: {parse_error}")
            continue

        errors, warnings = validate_metadata(metadata, strict=args.strict)
        if errors or (args.strict and warnings):
            fail_count += 1
            print(f"FAIL {file_path}")
            for message in errors + warnings:
                print(f"  - {message}")
        else:
            pass_count += 1
            print(f"PASS {file_path}")

    print(
        f"Summary: pass={pass_count} fail={fail_count} skipped(no frontmatter)={skip_count}"
    )
    if fail_count and args.strict:
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
