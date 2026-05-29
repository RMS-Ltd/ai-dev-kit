#!/usr/bin/env python3
"""
Push large Notion pages by chunking content into smaller MCP calls.

MCP notion-update-page has effective payload limits (~20KB). This script
splits large content into chunks, generates replace_content + insert_content_after
MCP args, and writes them for the agent to run via call_mcp_tool.

Usage:
  python scripts/push_notion_large_pages.py
    -> Writes docs/knowledge/kb-migration-mcp-args/chunked_*.json
    -> Run each via: call_mcp_tool(server, toolName, arguments)
    -> Run in order (chunk 0 first, then 1, 2, ...)

Requires: JSON files in docs/knowledge/kb-migration-mcp-args/ with full content.
Output: chunked_<base>_part<N>.json for each chunk.
"""
from __future__ import annotations

import json
import re
import sys
from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parent.parent
MCP_ARGS_DIR = PROJECT_ROOT / "docs" / "knowledge" / "kb-migration-mcp-args"
CHUNK_SIZE = 11_500  # Stay under ~12KB for MCP payload limit
SEL_LEN = 150  # Chars for selection_with_ellipsis - longer = more unique

# Large pages that need chunking (page_id from original JSON)
LARGE_FILES = [
    "sweep_knowledge_analysis_projects_confidentia-adk-analysis_md.json",
    "sweep_knowledge_analysis_projects_fynd-deals-adk-analysis_md.json",
    "sweep_knowledge_analysis_projects_starborn-legacy-adk-analysis_md.json",
    "sweep_project-management_kanban_epics_Epic-3_Story-002-versioning-cookbook-and-examples_md.json",
    "sweep_project-management_kanban_epics_Epic-5_Story-002-documentation-maintenance-framework_md.json",
    "sweep_project-management_kanban_epics_Epic-5_Story-006-legacy-repository-incorporation_md.json",
]


def split_at_newlines(s: str, max_chunk: int) -> list[str]:
    """Split string at newline boundaries, each chunk <= max_chunk."""
    chunks = []
    rest = s
    while rest:
        if len(rest) <= max_chunk:
            chunks.append(rest)
            break
        cut = rest[:max_chunk]
        last_nl = cut.rfind("\n")
        if last_nl > max_chunk // 2:
            chunk = cut[: last_nl + 1]
            rest = rest[last_nl + 1 :]
        else:
            chunk = cut
            rest = rest[max_chunk:]
        chunks.append(chunk)
    return chunks


def make_selection_ellipsis(s: str) -> str:
    """Create selection_with_ellipsis: first 120 + last 120 for uniqueness."""
    s = s.strip()
    if len(s) <= 250:
        return s
    return s[:120] + "..." + s[-120:]


def main() -> int:
    MCP_ARGS_DIR.mkdir(parents=True, exist_ok=True)
    created = []

    for filename in LARGE_FILES:
        path = MCP_ARGS_DIR / filename
        if not path.exists():
            print(f"SKIP (missing): {filename}", file=sys.stderr)
            continue

        data = json.loads(path.read_text(encoding="utf-8"))
        args = data.get("arguments", {}).get("data", {})
        page_id = args.get("page_id")
        new_str = args.get("new_str", "")

        if not page_id or not new_str:
            print(f"SKIP (no page_id/new_str): {filename}", file=sys.stderr)
            continue

        if len(new_str) <= CHUNK_SIZE:
            print(f"SKIP (small enough): {filename} ({len(new_str)} chars)", file=sys.stderr)
            continue

        chunks = split_at_newlines(new_str, CHUNK_SIZE)
        base = path.stem.replace(".json", "")

        for i, chunk in enumerate(chunks):
            if i == 0:
                cmd_args = {
                    "page_id": page_id,
                    "command": "replace_content",
                    "new_str": chunk,
                    "allow_deleting_content": True,
                }
            else:
                prev = chunks[i - 1]
                sel = make_selection_ellipsis(prev)
                cmd_args = {
                    "page_id": page_id,
                    "command": "insert_content_after",
                    "selection_with_ellipsis": sel,
                    "new_str": chunk,
                }

            out_name = f"chunked_{base}_part{i}.json"
            out_path = MCP_ARGS_DIR / out_name
            mcp = {
                "server": "plugin-notion-workspace-notion",
                "toolName": "notion-update-page",
                "arguments": {"data": cmd_args},
            }
            out_path.write_text(json.dumps(mcp, ensure_ascii=False, indent=2), encoding="utf-8")
            created.append((out_name, page_id, len(chunk)))
            print(f"Wrote {out_name} ({len(chunk)} chars)")

    if not created:
        print("No chunked files created.")
        return 0

    print(f"\nCreated {len(created)} MCP arg files.")
    print("Run in order via call_mcp_tool(server, toolName, arguments):")
    for name, pid, n in created:
        print(f"  {name}")

    return 0


if __name__ == "__main__":
    sys.exit(main())
