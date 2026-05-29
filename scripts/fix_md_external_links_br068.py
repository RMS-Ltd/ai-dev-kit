#!/usr/bin/env python3
"""
Wave 2 (BR-068): rewrite Markdown link targets that leave docs/ to canonical GitHub blob URLs.

Does not rewrite http(s) links or same-page fragments (#... only).
"""

from __future__ import annotations

import re
import sys
from pathlib import Path
from urllib.parse import quote, unquote


REPO_MAIN = "https://github.com/earlution/ai-dev-kit/blob/main"

# Markdown link [text](target) — capture target excluding optional title
LINK_TARGET = re.compile(r"\]\(([^)]+)\)")


def encode_repo_path(rel: str) -> str:
    """Encode path from repo root for GitHub URLs (preserve slashes, encode spaces etc.)."""
    parts = rel.split("/")
    return "/".join(quote(unquote(p), safe="") for p in parts)


def rewrite_target(target: str) -> str | None:
    if target.startswith("http://") or target.startswith("https://"):
        return None
    if target.startswith("mailto:") or target.startswith("#"):
        return None
    base, sep, frag = target.partition("#")
    frag_suffix = f"#{frag}" if sep else ""

    # Strip ./ prefix
    base = base.lstrip("./")

    # Leading ../ only: strip and treat remainder as path from repo root once empty?
    while base.startswith("../"):
        base = base[3:]

    if not base:
        return None

    if base == "INSTALL_IN_YOUR_PROJECT.md" or base.endswith("/INSTALL_IN_YOUR_PROJECT.md"):
        return f"{REPO_MAIN}/INSTALL_IN_YOUR_PROJECT.md{frag_suffix}"

    if base.startswith("packages/"):
        return f"{REPO_MAIN}/{encode_repo_path(base)}{frag_suffix}"

    if base.startswith("portal/"):
        return f"{REPO_MAIN}/{encode_repo_path(base)}{frag_suffix}"

    if base.startswith(".cursor/"):
        return f"{REPO_MAIN}/{encode_repo_path(base)}{frag_suffix}"

    return None


def process_file(path: Path) -> bool:
    text = path.read_text(encoding="utf-8")
    changed = False

    def repl(m: re.Match) -> str:
        nonlocal changed
        inner = m.group(1)
        # Skip mailto and pure fragments (usually not in parens alone)
        new_t = rewrite_target(inner)
        if new_t is None:
            return m.group(0)
        changed = True
        return f"]({new_t})"

    # Match ](target) where target may include #fragment
    new_text = re.sub(r"\]\(([^)]+)\)", repl, text)
    if changed:
        path.write_text(new_text, encoding="utf-8")
    return changed


def main() -> int:
    root = Path(__file__).resolve().parents[1] / "docs"
    n = 0
    for md in sorted(root.rglob("*.md")):
        if "changelog-archive" in str(md):
            continue  # historical frozen files; skip to reduce noise (optional)
        try:
            if process_file(md):
                n += 1
                print(md.relative_to(root.parent))
        except OSError as e:
            print(f"SKIP {md}: {e}", file=sys.stderr)
    print(f"Updated {n} files.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
