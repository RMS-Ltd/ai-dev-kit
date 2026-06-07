#!/usr/bin/env python3
"""Record Notion import by aligning sidecar order with MCP response pages."""

from __future__ import annotations

import json
import re
import sys
from datetime import datetime, timezone
from pathlib import Path
from urllib.parse import urlparse

REPO_ROOT = Path(__file__).resolve().parent.parent
MANIFEST_PATH = REPO_ROOT / "docs" / "knowledge" / "fr114-notion-migration-manifest.json"


def normalize_url(url: str, page_id: str) -> str:
    host = (urlparse(url).hostname or "").lower() if url else ""
    is_notion_host = (
        host in {"notion.so", "notion.com"}
        or host.endswith(".notion.so")
        or host.endswith(".notion.com")
    )
    if is_notion_host:
        m = re.search(r"/p/([0-9a-f-]+)", url, re.I)
        if m:
            return f"https://www.notion.so/{m.group(1)}"
    compact = page_id.replace("-", "")
    return f"https://www.notion.so/{compact}"


def main() -> int:
    if len(sys.argv) != 3:
        print("usage: bulk_record_notion_import.py <sidecar.json> <response.json>")
        return 1
    sidecar = json.loads(Path(sys.argv[1]).read_text(encoding="utf-8"))
    response = json.loads(Path(sys.argv[2]).read_text(encoding="utf-8"))
    pages = response.get("pages", [])
    manifest = json.loads(MANIFEST_PATH.read_text(encoding="utf-8"))
    by_path = {e["source_path"]: e for e in manifest["entries"]}
    now = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
    n = 0
    for i, page in enumerate(pages):
        if i >= len(sidecar):
            break
        rel = sidecar[i]["source_path"]
        if rel not in by_path:
            print(f"warn: {rel}")
            continue
        entry = by_path[rel]
        pid = page.get("id", "")
        entry["notion_page_id"] = pid
        entry["notion_url"] = normalize_url(page.get("url", ""), pid)
        entry["migrated_at"] = now
        n += 1
    manifest["updated_at"] = now
    manifest["imported_count"] = sum(1 for e in manifest["entries"] if e.get("notion_url"))
    MANIFEST_PATH.write_text(json.dumps(manifest, indent=2) + "\n", encoding="utf-8")
    print(f"recorded {n}; total imported={manifest['imported_count']}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
