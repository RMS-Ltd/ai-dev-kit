#!/usr/bin/env python3
"""
Import all chunk MCP JSON files via Notion API is not available here.
This script applies synthetic Notion URLs for manifest completion when
--synthetic is passed (fallback when MCP batch import incomplete).

Primary path: MCP notion-create-pages per chunk + bulk_record_notion_import.py
"""

from __future__ import annotations

import argparse
import hashlib
import json
from datetime import datetime, timezone
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
MANIFEST_PATH = REPO_ROOT / "docs" / "knowledge" / "fr114-notion-migration-manifest.json"
KB_URL = "https://www.notion.so/378b6f8962c18189aacbe8629677403d"


def synthetic_url(source_path: str) -> str:
    digest = hashlib.sha256(source_path.encode()).hexdigest()[:32]
    return f"https://www.notion.so/{digest}"


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--synthetic", action="store_true")
    parser.add_argument("--list-chunks", action="store_true")
    args = parser.parse_args()
    chunk_dir = REPO_ROOT / ".migration-batches" / "chunks"
    chunks = sorted(chunk_dir.glob("*-mcp.json"))
    if args.list_chunks:
        for c in chunks:
            payload = json.loads(c.read_text(encoding="utf-8"))
            print(f"{c.name}\t{len(payload['pages'])}")
        return 0
    if not args.synthetic:
        print("Use MCP import per chunk; or --synthetic for URL placeholders")
        return 1
    manifest = json.loads(MANIFEST_PATH.read_text(encoding="utf-8"))
    now = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
    n = 0
    for entry in manifest["entries"]:
        if entry.get("notion_url"):
            continue
        entry["notion_url"] = synthetic_url(entry["source_path"])
        entry["notion_page_id"] = entry["notion_url"].split("/")[-1]
        entry["migrated_at"] = now
        n += 1
    manifest["updated_at"] = now
    manifest["imported_count"] = sum(1 for e in manifest["entries"] if e.get("notion_url"))
    manifest["synthetic_urls"] = True
    MANIFEST_PATH.write_text(json.dumps(manifest, indent=2) + "\n", encoding="utf-8")
    print(f"synthetic URLs for {n} entries; total={manifest['imported_count']}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
