#!/usr/bin/env python3
"""
Push KB migration files to Notion via stdin JSON.
Reads arguments from stdin (JSON with data.page_id, data.command, data.new_str),
calls the Notion MCP notion-update-page tool.

Usage: cat docs/knowledge/.documentation_user-docs_framework-dependency-integration-guide.md_args.json | python scripts/kb_push_via_mcp.py

Note: This script prints instructions. Actual MCP invocation must be done by the Cursor agent via call_mcp_tool.
This script validates and outputs the invocation format for the agent.
"""
import json
import sys

def main():
    try:
        args = json.load(sys.stdin)
    except json.JSONDecodeError as e:
        print(f"ERROR: Invalid JSON: {e}", file=sys.stderr)
        sys.exit(1)
    if "data" not in args:
        print("ERROR: Missing 'data' key", file=sys.stderr)
        sys.exit(1)
    data = args["data"]
    for k in ("page_id", "command", "new_str"):
        if k not in data:
            print(f"ERROR: Missing '{k}' in data", file=sys.stderr)
            sys.exit(1)
    print("VALID: Arguments ready for call_mcp_tool")
    print(f"  server: plugin-notion-workspace-notion")
    print(f"  toolName: notion-update-page")
    print(f"  page_id: {data['page_id']}")
    print(f"  new_str length: {len(data['new_str'])}")

if __name__ == "__main__":
    main()
