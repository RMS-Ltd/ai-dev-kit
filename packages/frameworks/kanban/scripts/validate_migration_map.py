#!/usr/bin/env python3
"""Validate KMA migration proposal — no dual epic mapping (Issue #51 P2)."""

from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path

# v4 short tags that must not appear twice as primary homes
V4_TAGS = frozenset(
    {
        "REPO", "WORKFLOW", "KANBAN", "ARCH", "DOCS", "CICD", "SEC", "CODEQ",
        "DATA", "API", "UI", "AUTH", "COMPLY", "PERFAN", "VENDOR", "PRODOPS",
        "I18N", "MOBILE", "DOMAIN",
    }
)

ROW_RE = re.compile(r"^\|\s*([^|]+)\|\s*([^|]+)\|")


def _parse_epic_map_table(text: str) -> list[tuple[str, str]]:
    rows: list[tuple[str, str]] = []
    in_table = False
    for line in text.splitlines():
        if "legacy" in line.lower() and "target" in line.lower() and "|" in line:
            in_table = True
            continue
        if in_table and line.strip().startswith("|") and "---" not in line:
            m = ROW_RE.match(line.strip())
            if m:
                legacy, target = m.group(1).strip(), m.group(2).strip()
                if legacy.lower() not in ("legacy", "concern"):
                    rows.append((legacy, target))
        elif in_table and line.strip() == "":
            break
    return rows


def validate_proposal(path: Path) -> list[str]:
    errors: list[str] = []
    if not path.is_file():
        return [f"proposal not found: {path}"]
    text = path.read_text(encoding="utf-8")
    rows = _parse_epic_map_table(text)
    if not rows:
        errors.append("No epic map table found (| Legacy | v4 target |)")
        return errors

    target_homes: dict[str, list[str]] = {}
    for legacy, target in rows:
        tags = re.findall(r"\bE\d{2}(?::S\d{2})?\b|\b[A-Z]{3,8}\b", target)
        home = target.strip()
        if home in target_homes:
            target_homes[home].append(legacy)
        else:
            target_homes[home] = [legacy]

    for home, legacies in target_homes.items():
        if len(legacies) > 1:
            errors.append(f"Dual mapping to {home}: {legacies}")

    # Flag mega-story pattern: single story claiming whole epic concern without E24
    if re.search(r"mega-?story", text, re.I) and not re.search(r"split|decompose", text, re.I):
        errors.append("Mega-story mentioned without split/decompose rationale")

    return errors


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--proposal", required=True, type=Path)
    parser.add_argument("--strict", action="store_true")
    args = parser.parse_args()
    errors = validate_proposal(args.proposal)
    if errors:
        for e in errors:
            print(e, file=sys.stderr)
        return 1
    print("validate_migration_map: OK")
    return 0


if __name__ == "__main__":
    sys.exit(main())
