#!/usr/bin/env python3
"""
Run KB migration: invoke notion-update-page for each JSON in kb-migration-mcp-args.

Loads each JSON and invokes the Notion MCP via subprocess to cursor/agent.
For Cursor agent: Load each JSON, then call call_mcp_tool(server, toolName, arguments).

This script validates and reports - actual MCP calls go through Cursor's call_mcp_tool.
"""
import json
import os
import sys

DIR = os.path.join(os.path.dirname(__file__), "..", "docs", "knowledge", "kb-migration-mcp-args")
files = sorted(f for f in os.listdir(DIR) if f.endswith(".json"))

successes = []
failures = []

for f in files:
    path = os.path.join(DIR, f)
    try:
        with open(path, encoding="utf-8") as fp:
            obj = json.load(fp)
        args = obj["arguments"]
        page_id = args["data"]["page_id"]
        assert obj["server"] == "plugin-notion-workspace-notion"
        assert obj["toolName"] == "notion-update-page"
        assert args["data"].get("command") == "replace_content"
        successes.append((f, page_id))
    except Exception as e:
        failures.append((f, str(e)))

print(f"Validated: {len(successes)} files")
if failures:
    print(f"Failures: {len(failures)}")
    for f, err in failures:
        print(f"  {f}: {err}")
    sys.exit(1)
sys.exit(0)
