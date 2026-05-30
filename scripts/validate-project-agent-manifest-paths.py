#!/usr/bin/env python3
"""Validate project-agent-manifest.json sourcePath and loadFirst paths exist."""
from __future__ import annotations

import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MANIFEST = ROOT / "docs" / "project-agent-manifest.json"


def main() -> int:
    data = json.loads(MANIFEST.read_text(encoding="utf-8"))
    missing: list[str] = []

    for entry in data.get("protocol", []):
        p = ROOT / entry["sourcePath"]
        if not p.exists():
            missing.append(f"protocol {entry['id']}: {entry['sourcePath']}")

    for route in data.get("taskRouting", []):
        for rel in route.get("loadFirst", []):
            p = ROOT / rel
            if not p.exists():
                missing.append(f"taskRouting {route['intent']}: {rel}")

    for track in data.get("tracks", []):
        p = ROOT / track["entryPath"]
        if not p.exists():
            missing.append(f"track {track['id']}: {track['entryPath']}")

    for item in data.get("canon", []):
        p = ROOT / item["path"]
        if not p.exists():
            missing.append(f"canon {item['id']}: {item['path']}")

    for item in data.get("openWork", []):
        p = ROOT / item["taskDocPath"]
        if not p.exists():
            missing.append(f"openWork {item['taskId']}: {item['taskDocPath']}")

    if missing:
        print("Missing paths:", file=sys.stderr)
        for m in missing:
            print(f"  - {m}", file=sys.stderr)
        return 1

    print("OK: all manifest paths exist")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
