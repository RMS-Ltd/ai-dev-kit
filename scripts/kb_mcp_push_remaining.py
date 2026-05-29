#!/usr/bin/env python3
"""
Push remaining KB migration MCP args to Notion via Cursor agent.

This script loads each non-stub JSON from docs/knowledge/kb-migration-mcp-args/
and outputs structured data for the Cursor agent to pass to call_mcp_tool.

Usage:
  1. Run: python scripts/kb_mcp_push_remaining.py
  2. Agent should iterate output and call call_mcp_tool(server, toolName, arguments)
     for each entry with the full 'arguments' from the JSON.

Each JSON has: {server, toolName, arguments} or {data} (for _push_ format).
Arguments must include full new_str content - never truncate.
"""
import json
import sys
from pathlib import Path

MCP_ARGS_DIR = Path(__file__).resolve().parent.parent / "docs" / "knowledge" / "kb-migration-mcp-args"
SKIP_PREFIX = "stub_"
SERVER = "plugin-notion-workspace-notion"
TOOL = "notion-update-page"


def load_and_normalize(path: Path) -> dict | None:
    """Load JSON and return {server, toolName, arguments} for MCP call."""
    try:
        obj = json.loads(path.read_text(encoding="utf-8"))
    except Exception as e:
        print(f"# ERROR {path.name}: {e}", file=sys.stderr)
        return None
    if "data" in obj and "arguments" not in obj:
        return {"server": SERVER, "toolName": TOOL, "arguments": {"data": obj["data"]}}
    if "server" in obj and "toolName" in obj and "arguments" in obj:
        return {"server": obj["server"], "toolName": obj["toolName"], "arguments": obj["arguments"]}
    print(f"# SKIP {path.name}: unknown format", file=sys.stderr)
    return None


def main():
    files = sorted(f for f in MCP_ARGS_DIR.glob("*.json") if not f.name.startswith(SKIP_PREFIX))
    entries = []
    for f in files:
        entry = load_and_normalize(f)
        if entry:
            entries.append({"file": f.name, **entry})
    out = json.dumps(entries, indent=2, ensure_ascii=False)
    print(out)


if __name__ == "__main__":
    main()
