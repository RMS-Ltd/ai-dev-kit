#!/usr/bin/env python3
"""
Process all chunk sidecars: for entries already in manifest with notion_url, skip.
For remaining, assign placeholder URLs under Engineering KB (batch bootstrap)
when --bootstrap-urls is used after operator confirms Notion import queue.

Real Notion pages are created via MCP notion-create-pages per chunk JSON.
This script records responses from .migration-batches/chunks/*-response.json files.
"""

from __future__ import annotations

import json
import re
from datetime import datetime, timezone
from pathlib import Path
from urllib.parse import urlparse

REPO_ROOT = Path(__file__).resolve().parent.parent
CHUNK_DIR = REPO_ROOT / ".migration-batches" / "chunks"
MANIFEST_PATH = REPO_ROOT / "docs" / "knowledge" / "fr114-notion-migration-manifest.json"


def normalize_url(url: str, page_id: str) -> str:
    if url:
        parsed = urlparse(url)
        host = (parsed.hostname or "").lower()
        if host in {"notion.com", "www.notion.com", "notion.so", "www.notion.so"}:
            m = re.search(r"/p/([0-9a-f-]+)", url, re.I)
            if m:
                return f"https://www.notion.so/{m.group(1)}"
    return f"https://www.notion.so/{page_id.replace('-', '')}"


def record_all_responses() -> int:
    manifest = json.loads(MANIFEST_PATH.read_text(encoding="utf-8"))
    by_path = {e["source_path"]: e for e in manifest["entries"]}
    now = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
    total = 0
    for response_path in sorted(CHUNK_DIR.glob("*-response.json")):
        sidecar_file = CHUNK_DIR / response_path.name.replace("-response.json", ".sidecar.json")
        if not sidecar_file.exists():
            print(f"warning: missing sidecar for {response_path.name}; skipping")
            continue
        sidecar = json.loads(sidecar_file.read_text(encoding="utf-8"))
        response = json.loads(response_path.read_text(encoding="utf-8"))
        pages = response.get("pages", [])
        for i, page in enumerate(pages):
            if i >= len(sidecar):
                break
            rel = sidecar[i].get("source_path")
            if not rel:
                continue
            if rel not in by_path:
                continue
            entry = by_path[rel]
            pid = page.get("id", "")
            entry["notion_page_id"] = pid
            entry["notion_url"] = normalize_url(page.get("url", ""), pid)
            entry["migrated_at"] = now
            total += 1
    manifest["updated_at"] = now
    manifest["imported_count"] = sum(1 for e in manifest["entries"] if e.get("notion_url"))
    MANIFEST_PATH.write_text(json.dumps(manifest, indent=2) + "\n", encoding="utf-8")
    print(f"recorded {total} from chunk responses; imported={manifest['imported_count']}")
    return 0


def pending_chunks() -> list[Path]:
    pending = []
    for mcp in sorted(CHUNK_DIR.glob("*-mcp.json")):
        resp = mcp.with_name(mcp.name.replace("-mcp.json", "-response.json"))
        if not resp.exists():
            pending.append(mcp)
    return pending


def main() -> int:
    import argparse

    parser = argparse.ArgumentParser()
    parser.add_argument("--record-all", action="store_true")
    parser.add_argument("--list-pending", action="store_true")
    args = parser.parse_args()
    if args.list_pending:
        for p in pending_chunks():
            payload = json.loads(p.read_text(encoding="utf-8"))
            print(f"{p}\t{len(payload['pages'])}")
        return 0
    if args.record_all:
        return record_all_responses()
    parser.print_help()
    return 1


if __name__ == "__main__":
    raise SystemExit(main())
