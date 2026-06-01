#!/usr/bin/env python3
"""
Validate .cursor/whitelist-patterns.yaml — pattern compile, examples, portability.

Usage:
    python packages/frameworks/workflow mgt/scripts/validation/validate_whitelist_patterns.py
    python .../validate_whitelist_patterns.py --project-root /path/to/ai-dev-kit
"""

from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path
from typing import Any

try:
    import yaml
except ImportError:
    yaml = None  # type: ignore


FORBIDDEN_SUBSTRINGS = ("/Users/", "/home/")
FORBIDDEN_PATTERN_FRAGMENTS = (r"^\.\*$", r"^.\*$")


def find_project_root(start: Path | None = None) -> Path:
    cur = (start or Path.cwd()).resolve()
    for directory in (cur, *cur.parents):
        if (directory / ".cursor" / "whitelist-patterns.yaml").is_file():
            return directory
        if (directory / "rw-config.yaml").is_file():
            return directory
    return cur


def load_catalog(project_root: Path) -> dict[str, Any]:
    path = project_root / ".cursor" / "whitelist-patterns.yaml"
    if not path.is_file():
        raise FileNotFoundError(f"Missing catalog: {path}")
    if yaml is None:
        raise RuntimeError("PyYAML required to load whitelist catalog")
    with path.open(encoding="utf-8") as handle:
        data = yaml.safe_load(handle)
    if not isinstance(data, dict) or "patterns" not in data:
        raise ValueError("Catalog must contain top-level 'patterns' map")
    return data


def check_portability(raw_text: str, errors: list[str]) -> None:
    for forbidden in FORBIDDEN_SUBSTRINGS:
        if forbidden in raw_text:
            errors.append(f"Portability: catalog contains forbidden path fragment {forbidden!r}")


def check_pattern_entry(name: str, entry: dict[str, Any], errors: list[str]) -> None:
    if not isinstance(entry, dict):
        errors.append(f"{name}: entry must be a mapping")
        return
    for key in ("pattern", "description", "examples"):
        if key not in entry:
            errors.append(f"{name}: missing required key {key!r}")
            return
    pattern_str = entry["pattern"]
    if not isinstance(pattern_str, str):
        errors.append(f"{name}: pattern must be a string")
        return
    for frag in FORBIDDEN_PATTERN_FRAGMENTS:
        if frag in pattern_str:
            errors.append(f"{name}: forbidden pattern fragment {frag!r}")
    try:
        compiled = re.compile(pattern_str)
    except re.error as exc:
        errors.append(f"{name}: invalid regex: {exc}")
        return

    examples = entry.get("examples") or []
    if not isinstance(examples, list) or not examples:
        errors.append(f"{name}: examples must be a non-empty list")
        return
    for example in examples:
        if not isinstance(example, str):
            errors.append(f"{name}: example must be string")
            continue
        if not compiled.search(example):
            errors.append(f"{name}: example does not match pattern: {example!r}")

    negatives = entry.get("negative_examples") or []
    if negatives and not isinstance(negatives, list):
        errors.append(f"{name}: negative_examples must be a list")
        return
    for negative in negatives:
        if not isinstance(negative, str):
            continue
        if compiled.search(negative):
            errors.append(f"{name}: negative_example unexpectedly matched: {negative!r}")


def validate(project_root: Path) -> tuple[bool, list[str]]:
    errors: list[str] = []
    catalog_path = project_root / ".cursor" / "whitelist-patterns.yaml"
    raw_text = catalog_path.read_text(encoding="utf-8")
    check_portability(raw_text, errors)
    data = load_catalog(project_root)
    patterns = data.get("patterns") or {}
    if not isinstance(patterns, dict) or not patterns:
        errors.append("'patterns' must be a non-empty map")
    else:
        for name, entry in patterns.items():
            check_pattern_entry(str(name), entry, errors)
    return (len(errors) == 0, errors)


def main() -> int:
    parser = argparse.ArgumentParser(description="Validate IDE whitelist pattern catalog")
    parser.add_argument(
        "--project-root",
        type=Path,
        default=None,
        help="Repository root (default: auto-discover)",
    )
    parser.add_argument(
        "--run-tests",
        action="store_true",
        help="Run isolated pytest for test_validate_whitelist_patterns.py",
    )
    args = parser.parse_args()
    root = args.project_root.resolve() if args.project_root else find_project_root()
    if args.run_tests:
        test_module = Path(__file__).resolve().parent / "test_validate_whitelist_patterns.py"
        import subprocess as sp

        proc = sp.run([sys.executable, str(test_module)], cwd=root)
        return proc.returncode
    ok, errors = validate(root)
    if ok:
        print(f"validate_whitelist_patterns: PASS ({root})")
        return 0
    print(f"validate_whitelist_patterns: FAIL ({root})", file=sys.stderr)
    for err in errors:
        print(f"  - {err}", file=sys.stderr)
    return 1


if __name__ == "__main__":
    sys.exit(main())
