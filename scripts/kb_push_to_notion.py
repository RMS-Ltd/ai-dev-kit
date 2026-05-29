#!/usr/bin/env python3
"""
Push full repo content to Notion pages via MCP-compatible payloads.

Usage:
  python scripts/kb_push_to_notion.py --emit-payloads
    -> Writes docs/knowledge/kb-migration-payloads/*.json (path, page_id, content)
       for agent to read and call notion-update-page MCP

  python scripts/kb_push_to_notion.py --emit-mcp-args
    -> Writes docs/knowledge/kb-migration-mcp-args/*.json
       Each file is MCP-ready: {server, toolName, arguments} for call_mcp_tool.
       Load and pass to call_mcp_tool(server, toolName, arguments) or inspect manually.

  python scripts/kb_push_to_notion.py --list
    -> Prints remaining mappings (path, page_id, size)

Requires: docs/knowledge/kb-migration-map.json
Output dirs: kb-migration-payloads/, kb-migration-mcp-args/ (under docs/knowledge)
"""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parent.parent
MAP_PATH = PROJECT_ROOT / "docs" / "knowledge" / "kb-migration-map.json"
DOCS_ROOT = PROJECT_ROOT / "docs"
PAYLOADS_DIR = PROJECT_ROOT / "docs" / "knowledge" / "kb-migration-payloads"
MCP_ARGS_DIR = PROJECT_ROOT / "docs" / "knowledge" / "kb-migration-mcp-args"

PAGE_ID_PATTERN = re.compile(r"notion\.so/([0-9a-f]{32})")

SKIP_PATHS = frozenset({
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
    "guides/framework-consumption/adk-feedback-guide.md",
    "documentation/ai-dev-kit-vision-and-purpose.md",
    "documentation/engineering-and-platform/open-kb-starter-map.md",
    "documentation/engineering-and-platform/knowledge-service-vision.md",
    "documentation/engineering-and-platform/versioning-task-ordering-anti-pattern.md",
    "analysis/cmw-ordering-flaw-analysis.md",
    "analysis/ukw-versioning-reasoning-analysis.md",
    "analysis/repository-story-abstract-space-contradiction-analysis.md",
    "analysis/task-template-system-analysis.md",
    "for-dummies-author-checklist.md",
    "for-dummies-style-guide.md",
})


def extract_page_id(url: str) -> str | None:
    m = PAGE_ID_PATTERN.search(url)
    return m.group(1) if m else None


def load_map() -> dict:
    data = json.loads(MAP_PATH.read_text(encoding="utf-8"))
    return data.get("mappings", {})


def build_remaining() -> list[tuple[str, str, str]]:
    """Returns list of (path, page_id, content) for remaining mappings."""
    mappings = load_map()
    out = []
    for path_str, url in mappings.items():
        if path_str in SKIP_PATHS:
            continue
        page_id = extract_page_id(url)
        if not page_id:
            continue
        full_path = DOCS_ROOT / path_str
        if not full_path.exists():
            continue
        content = full_path.read_text(encoding="utf-8", errors="replace")
        out.append((path_str, page_id, content))
    return out


def main() -> None:
    if "--list" in sys.argv:
        rows = build_remaining()
        for path_str, page_id, content in rows:
            print(f"{path_str} -> {page_id} ({len(content)} bytes)")
        print(f"\nTotal: {len(rows)} files")
        return

    if "--emit-payloads" in sys.argv:
        PAYLOADS_DIR.mkdir(parents=True, exist_ok=True)
        rows = build_remaining()
        for path_str, page_id, content in rows:
            safe_name = path_str.replace("/", "_").replace(" ", "-")
            out_path = PAYLOADS_DIR / f"{safe_name}.json"
            payload = {
                "path": path_str,
                "page_id": page_id,
                "content": content,
            }
            out_path.write_text(json.dumps(payload, ensure_ascii=False, indent=0), encoding="utf-8")
        print(f"Wrote {len(rows)} payload files to {PAYLOADS_DIR}")
        return

    if "--emit-mcp-args" in sys.argv:
        MCP_ARGS_DIR.mkdir(parents=True, exist_ok=True)
        rows = build_remaining()
        for path_str, page_id, content in rows:
            safe_name = path_str.replace("/", "_").replace(" ", "-")
            out_path = MCP_ARGS_DIR / f"{safe_name}.json"
            mcp_call = {
                "server": "plugin-notion-workspace-notion",
                "toolName": "notion-update-page",
                "arguments": {
                    "data": {
                        "page_id": page_id,
                        "command": "replace_content",
                        "new_str": content,
                        "allow_deleting_content": True,
                    }
                },
            }
            out_path.write_text(
                json.dumps(mcp_call, ensure_ascii=False, indent=2), encoding="utf-8"
            )
        print(f"Wrote {len(rows)} MCP-argument files to {MCP_ARGS_DIR}")
        print("Use: load each JSON and pass to call_mcp_tool(server, toolName, arguments['arguments'])")
        return

    print("Usage: --list | --emit-payloads | --emit-mcp-args", file=sys.stderr)
    sys.exit(1)


if __name__ == "__main__":
    main()
