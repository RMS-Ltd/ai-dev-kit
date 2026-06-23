#!/usr/bin/env python3
"""
Rename kanban intake directory fbu/ → fbu/ (UXR-032 / ADR-032).

Dry-run by default; pass --apply to execute git mv and optional link rewrite.
"""

from __future__ import annotations

import argparse
import re
import subprocess
import sys
from pathlib import Path

SCRIPT_DIR = Path(__file__).resolve().parent
if str(SCRIPT_DIR) not in sys.path:
    sys.path.insert(0, str(SCRIPT_DIR))

import kanban_paths as kp  # noqa: E402

LINK_RE = re.compile(r"(?<![\w-])fbu/")


def main() -> int:
    parser = argparse.ArgumentParser(description="Rename fr-br intake dir to fbu/")
    parser.add_argument("--project-root", type=Path, default=Path.cwd())
    parser.add_argument("--kanban-root", default="docs/kanban")
    parser.add_argument("--apply", action="store_true", help="Execute rename (git mv)")
    parser.add_argument(
        "--rewrite-links",
        action="store_true",
        help="Rewrite fbu/ → fbu/ in markdown under project root (use with --apply)",
    )
    args = parser.parse_args()

    root = args.project_root.resolve()
    kn = args.kanban_root.strip("/")
    legacy = root / kn / kp.LEGACY_FR_BR_SUBDIR
    target = root / kn / kp.DEFAULT_FBU_SUBDIR

    if target.is_dir():
        print(f"OK: target already exists: {target}")
        return 0
    if not legacy.is_dir():
        print(f"SKIP: legacy directory missing: {legacy}", file=sys.stderr)
        return 1

    print(f"{'APPLY' if args.apply else 'DRY-RUN'}: git mv {legacy} → {target}")
    if not args.apply:
        return 0

    subprocess.run(["git", "mv", str(legacy), str(target)], check=True, cwd=root)

    if args.rewrite_links:
        skip_parts = ("changelog-and-release-notes", ".rw-step7-snapshots")
        for path in root.rglob("*"):
            if not path.is_file() or path.suffix not in {".md", ".yaml", ".py"}:
                continue
            if any(part in path.parts for part in skip_parts):
                continue
            text = path.read_text(encoding="utf-8", errors="replace")
            if "fbu/" not in text and "fbu_root" not in text:
                continue
            new_text = text.replace("fbu_root", "fbu_root")
            new_text = LINK_RE.sub("fbu/", new_text)
            new_text = new_text.replace(f"{kn}/fr-br", f"{kn}/fbu")
            new_text = new_text.replace("docs/kanban/fbu", "docs/kanban/fbu")
            if new_text != text:
                path.write_text(new_text, encoding="utf-8")
                print(f"  updated links: {path.relative_to(root)}")

    print("Done.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
