#!/usr/bin/env python3
"""
Push all KB migration MCP args to Notion.

Reads each JSON from docs/knowledge/kb-migration-mcp-args/ and outputs
instructions for the Cursor agent to call call_mcp_tool with each.

Usage: Run this script. Agent should call call_mcp_tool for each output file.
"""
import json
import sys
from pathlib import Path

MCP_DIR = Path(__file__).resolve().parent.parent / "docs" / "knowledge" / "kb-migration-mcp-args"

def main():
    files = sorted(MCP_DIR.glob("*.json"))
    pushed = []
    for f in files:
        try:
            obj = json.loads(f.read_text(encoding="utf-8"))
            args = obj["arguments"]
            page_id = args["data"]["page_id"]
            pushed.append((f.name, page_id))
        except Exception as e:
            print(f"SKIP {f.name}: {e}", file=sys.stderr)
    print(f"Total: {len(pushed)} files ready to push")
    for name, pid in pushed:
        print(f"  {name} -> {pid}")

if __name__ == "__main__":
    main()
