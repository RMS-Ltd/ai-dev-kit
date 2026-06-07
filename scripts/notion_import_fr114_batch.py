#!/usr/bin/env python3
"""
Prepare Notion import batches from FR-114 manifest.

Outputs JSON lines for agent/MCP notion-create-pages (max 100 pages per batch).
Updates manifest with notion_url / notion_page_id when --record-file is provided.
"""

from __future__ import annotations

import argparse
import json
import re
from datetime import datetime, timezone
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
DOCS = REPO_ROOT / "docs"
MANIFEST_PATH = DOCS / "knowledge" / "fr114-notion-migration-manifest.json"
MAX_CONTENT = 18000


def title_from_path(rel: str) -> str:
    name = Path(rel).stem
    if len(name) > 80:
        name = name[:77] + "..."
    return name.replace("-", " ").title() or "Untitled"


def truncate_content(text: str, limit: int = MAX_CONTENT) -> str:
    if len(text) <= limit:
        return text
    return text[: limit - 80] + "\n\n<!-- truncated for Notion import; full text in git history -->\n"


def strip_frontmatter(text: str) -> str:
    if text.startswith("---"):
        m = re.match(r"^---\s*\n.*?\n---\s*\n?", text, re.DOTALL)
        if m:
            return text[m.end() :]
    return text


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--area", choices=["decisions", "reference", "investigations", "records"])
    parser.add_argument("--limit", type=int, default=20)
    parser.add_argument("--offset", type=int, default=0)
    parser.add_argument("--pending-only", action="store_true", default=True)
    parser.add_argument("--out", type=Path, required=True)
    parser.add_argument(
        "--minimal",
        action="store_true",
        help="Title + git link only (faster Notion import)",
    )
    args = parser.parse_args()

    manifest = json.loads(MANIFEST_PATH.read_text(encoding="utf-8"))
    entries = manifest.get("entries", [])
    if args.area:
        entries = [e for e in entries if e.get("notion_area") == args.area]
    if args.pending_only:
        entries = [e for e in entries if not e.get("notion_url")]

    slice_entries = entries[args.offset : args.offset + args.limit]
    pages = []
    for entry in slice_entries:
        rel = entry["source_path"]
        path = DOCS / rel
        if not path.exists():
            continue
        if args.minimal:
            gh = f"https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/{rel}"
            body = (
                f"**Migrated from git** (FR-114 E05:S08:T03)\n\n"
                f"- Repo path: `docs/{rel}`\n"
                f"- [View on GitHub]({gh})\n"
            )
        else:
            body = strip_frontmatter(path.read_text(encoding="utf-8", errors="replace"))
            body = truncate_content(body)
            body = f"**Git source:** `docs/{rel}`\n\n{body}"
        pages.append(
            {
                "manifest_source_path": rel,
                "parent_page_id": entry["notion_parent_page_id"],
                "properties": {"title": title_from_path(rel)},
                "content": body,
            }
        )

    args.out.parent.mkdir(parents=True, exist_ok=True)
    args.out.write_text(json.dumps({"pages": pages}, indent=2), encoding="utf-8")
    print(f"Wrote {len(pages)} pages to {args.out}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
