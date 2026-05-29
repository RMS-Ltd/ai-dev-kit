#!/usr/bin/env python3
"""
Prepare KB migration batch manifest.

Loads docs/knowledge/kb-migration-map.json and produces a JSON manifest for each
mapping: {path, page_id, content_preview, content_length}. Does NOT call Notion API.
An agent will use this manifest + Notion MCP to push full content.
"""

import json
import re
import sys
from pathlib import Path
from typing import Optional

# Project root (script lives in scripts/)
PROJECT_ROOT = Path(__file__).resolve().parent.parent
MIGRATION_MAP_PATH = PROJECT_ROOT / "docs" / "knowledge" / "kb-migration-map.json"
DOCS_ROOT = PROJECT_ROOT / "docs"

# Notion page ID: 32 hex chars after notion.so/
PAGE_ID_PATTERN = re.compile(r"notion\.so/([0-9a-f]{32})")

def extract_page_id(notion_url: str) -> Optional[str]:
    """Extract 32-char hex page_id from Notion URL."""
    m = PAGE_ID_PATTERN.search(notion_url)
    return m.group(1) if m else None

def load_migration_map() -> dict:
    """Load and return kb-migration-map.json."""
    if not MIGRATION_MAP_PATH.exists():
        print("Error: migration map not found:", MIGRATION_MAP_PATH, file=sys.stderr)
        sys.exit(1)
    with open(MIGRATION_MAP_PATH, encoding="utf-8") as f:
        return json.load(f)

def build_manifest(mappings: dict) -> list:
    """Build manifest from mappings; skip missing files, log warnings."""
    manifest = []
    for path_str, notion_url in mappings.items():
        full_path = DOCS_ROOT / path_str
        if not full_path.exists():
            print("Warning: skipping missing file:", full_path, file=sys.stderr)
            continue
        page_id = extract_page_id(notion_url)
        if not page_id:
            print("Warning: could not extract page_id from URL:", notion_url, file=sys.stderr)
            continue
        try:
            content = full_path.read_text(encoding="utf-8", errors="replace")
        except OSError as e:
            print("Warning: could not read", full_path, ":", e, file=sys.stderr)
            continue
        content_length = len(content)
        content_preview = content[:200] if content else ""
        manifest.append({
            "path": path_str,
            "page_id": page_id,
            "content_preview": content_preview,
            "content_length": content_length,
        })
    return manifest

def build_payloads(
    mappings: dict,
    skip_paths: set[str] | None = None,
) -> list[dict]:
    """Build list of {path, page_id, content} for MCP notion-update-page calls."""
    skip = skip_paths or set()
    payloads = []
    for path_str, notion_url in mappings.items():
        if path_str in skip:
            continue
        full_path = DOCS_ROOT / path_str
        if not full_path.exists():
            continue
        page_id = extract_page_id(notion_url)
        if not page_id:
            continue
        try:
            content = full_path.read_text(encoding="utf-8", errors="replace")
        except OSError:
            continue
        payloads.append({
            "path": path_str,
            "page_id": page_id,
            "content": content,
        })
    return payloads


def main() -> None:
    emit = "--emit-payloads" in sys.argv
    skip_paths = {
        "maintenance/README.md",
        "maintenance/BUILD_AND_UPLOAD.md",
        "maintenance/BUILD_PACKAGES.md",
        "maintenance/BUILD_PACKAGES_COMMANDS.md",
        "maintenance/UPLOAD_PACKAGES.md",
        "changelog-and-release-notes/README.md",
        "changelog-and-release-notes/semver-tag-v0.5.39+2-correction.md",
        "guides/README.md",
        "guides/getting-started/README.md",
        "guides/framework-consumption/README.md",
        "documentation/ai-dev-kit-vision-and-purpose.md",
        "documentation/engineering-and-platform/open-kb-starter-map.md",
        "documentation/engineering-and-platform/knowledge-service-vision.md",
        "documentation/engineering-and-platform/versioning-task-ordering-anti-pattern.md",
    }
    data = load_migration_map()
    mappings = data.get("mappings", {})
    if emit:
        payloads = build_payloads(mappings, skip_paths)
        for p in payloads:
            print(json.dumps({"path": p["path"], "page_id": p["page_id"], "content_len": len(p["content"])}))
    else:
        manifest = build_manifest(mappings)
        print(json.dumps(manifest, indent=2, ensure_ascii=False))


if __name__ == "__main__":
    main()
