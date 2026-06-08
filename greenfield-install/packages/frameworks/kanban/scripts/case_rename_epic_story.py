#!/usr/bin/env python3
"""Force case-only renames Epic->epic, Story->story (macOS-safe)."""
from __future__ import annotations

import sys
from pathlib import Path


def case_rename(src: Path, dst: Path) -> bool:
    if not src.exists():
        return False
    if src.name == dst.name:
        return False
    if dst.exists() and src.resolve() == dst.resolve():
        return False
    tmp = dst.parent / f"{dst.name}.uxr017-tmp"
    if tmp.exists():
        tmp.unlink()
    src.rename(tmp)
    tmp.rename(dst)
    return True


def main() -> None:
    root = Path(sys.argv[1] if len(sys.argv) > 1 else "docs/kanban/epics")
    count = 0
    for path in sorted(root.rglob("*"), key=lambda p: len(p.parts), reverse=True):
        name = path.name
        new_name = None
        if name.startswith("Epic-"):
            new_name = "epic-" + name[5:]
        elif name.startswith("Story-"):
            new_name = "story-" + name[6:]
        if new_name and new_name != name:
            dst = path.parent / new_name
            if case_rename(path, dst):
                count += 1
                print(f"  {path} -> {dst}")
    print(f"Renamed {count} paths")


if __name__ == "__main__":
    main()
