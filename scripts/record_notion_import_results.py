#!/usr/bin/env python3
"""Record Notion page URLs into FR-114 migration manifest."""

from __future__ import annotations

import argparse
import json
from datetime import datetime, timezone
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
MANIFEST_PATH = REPO_ROOT / "docs" / "knowledge" / "fr114-notion-migration-manifest.json"


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--mapping",
        required=True,
        help="JSON file: [{source_path, page_id, url}]",
    )
    args = parser.parse_args()

    mapping = json.loads(Path(args.mapping).read_text(encoding="utf-8"))
    manifest = json.loads(MANIFEST_PATH.read_text(encoding="utf-8"))
    by_path = {e["source_path"]: e for e in manifest["entries"]}
    now = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")

    for item in mapping:
        rel = item["source_path"]
        if rel not in by_path:
            print(f"warn: unknown path {rel}")
            continue
        entry = by_path[rel]
        page_id = item["page_id"]
        url = item.get("url") or f"https://www.notion.so/{page_id.replace('-', '')}"
        if "notion.so/" in url and "/p/" in url:
            # app.notion.com/p/ID -> notion.so/ID
            pid = url.split("/p/")[1].split("?")[0].replace("-", "")
            url = f"https://www.notion.so/{pid}"
        entry["notion_page_id"] = page_id
        entry["notion_url"] = url
        entry["migrated_at"] = now

    manifest["updated_at"] = now
    manifest["imported_count"] = sum(1 for e in manifest["entries"] if e.get("notion_url"))
    MANIFEST_PATH.write_text(json.dumps(manifest, indent=2) + "\n", encoding="utf-8")
    print(f"Recorded {len(mapping)} URLs; total imported={manifest['imported_count']}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
