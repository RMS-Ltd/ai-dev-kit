#!/usr/bin/env python3
"""
Block force-moving release tags during RW (BR-097 / E02:S01:T24).

Scans RW journal JSON for forbidden git commands: tag -f, push -f, push origin +v*.
"""

from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path
from typing import Iterable, List, Sequence, Tuple

# Forbidden command patterns (release-tag forensic corruption)
FORBIDDEN_PATTERNS: Sequence[re.Pattern[str]] = (
    re.compile(r"\bgit\s+tag\s+(-f|--force)\b", re.IGNORECASE),
    re.compile(r"\bgit\s+push\b[^\n]*(-f|--force)\b", re.IGNORECASE),
    re.compile(r"\bgit\s+push\s+origin\s+\+v[\d.]", re.IGNORECASE),
)


def iter_journal_commands(journal: dict) -> Iterable[str]:
    for step in journal.get("steps", []) or []:
        for cmd in step.get("commands", []) or []:
            if isinstance(cmd, str):
                yield cmd


def find_forbidden_commands(commands: Iterable[str]) -> List[str]:
    hits: List[str] = []
    for cmd in commands:
        for pattern in FORBIDDEN_PATTERNS:
            if pattern.search(cmd):
                hits.append(cmd)
                break
    return hits


def load_journal(path: Path) -> dict:
    with open(path, encoding="utf-8") as f:
        return json.load(f)


def find_latest_rw_journal(journals_dir: Path) -> Path | None:
    candidates = sorted(journals_dir.glob("rw-*.json"), key=lambda p: p.stat().st_mtime, reverse=True)
    for path in candidates:
        if "recovery" in path.name:
            continue
        return path
    return None


def validate_release_tag_immutability(
    journal_path: Path | None = None,
    journals_dir: Path | None = None,
    extra_commands: Sequence[str] | None = None,
) -> Tuple[bool, List[str]]:
    """
    Return (ok, errors). ok=False when forbidden force-tag commands detected.
    """
    errors: List[str] = []
    commands: List[str] = list(extra_commands or [])

    resolved: Path | None = journal_path
    if resolved is None and journals_dir is not None:
        resolved = find_latest_rw_journal(journals_dir)

    if resolved is not None and resolved.exists():
        try:
            journal = load_journal(resolved)
            commands.extend(iter_journal_commands(journal))
        except (json.JSONDecodeError, OSError) as exc:
            errors.append(f"Could not read RW journal {resolved}: {exc}")
            return False, errors

    forbidden = find_forbidden_commands(commands)
    if forbidden:
        errors.append(
            "❌ RELEASE TAG IMMUTABILITY (BR-097): Forbidden force-tag recovery detected. "
            "Never use `git tag -f`, `git push -f`, or `git push origin +v*` on release tags. "
            "Recovery: bump BUILD (+1) and re-run `RW E:S:T --art`."
        )
        for cmd in forbidden:
            errors.append(f"   Forbidden command: {cmd}")
        return False, errors

    return True, []


def main() -> int:
    parser = argparse.ArgumentParser(description="Validate RW did not force-move release tags")
    parser.add_argument("--journal", help="Path to RW journal JSON for this run")
    parser.add_argument(
        "--journals-dir",
        default="docs/journals",
        help="Directory to scan for latest rw-*.json if --journal omitted",
    )
    parser.add_argument(
        "--command",
        action="append",
        dest="commands",
        default=[],
        help="Additional command string to check (repeatable)",
    )
    parser.add_argument("--strict", action="store_true", help="Exit non-zero on violation")
    args = parser.parse_args()

    journal_path = Path(args.journal) if args.journal else None
    journals_dir = Path(args.journals_dir) if args.journals_dir else None

    ok, errors = validate_release_tag_immutability(
        journal_path=journal_path,
        journals_dir=journals_dir,
        extra_commands=args.commands,
    )
    if ok:
        print("✅ Release tag immutability: no forbidden force-tag commands detected.")
        return 0

    for err in errors:
        print(err, file=sys.stderr)
    return 1 if args.strict else 0


if __name__ == "__main__":
    sys.exit(main())
