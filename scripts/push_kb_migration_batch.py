#!/usr/bin/env python3
"""Push KB migration MCP args - outputs one JSON file per invocation for agent to call."""
import json
import os
import sys

DIR = os.path.join(os.path.dirname(__file__), "..", "docs", "knowledge", "kb-migration-mcp-args")
SKIP_PREFIX = "stub_"
SERVER = "plugin-notion-workspace-notion"
TOOL = "notion-update-page"

def main():
    files = sorted(f for f in os.listdir(DIR) if f.endswith(".json") and not f.startswith(SKIP_PREFIX))
    pending = []
    for f in files:
        path = os.path.join(DIR, f)
        with open(path, encoding="utf-8") as fp:
            obj = json.load(fp)
        if "data" in obj and "arguments" not in obj:
            args = {"data": obj["data"]}
        else:
            args = obj.get("arguments", obj)
        pending.append({
            "file": f,
            "server": obj.get("server", SERVER),
            "toolName": obj.get("toolName", TOOL),
            "arguments": args
        })
    print(json.dumps(pending, indent=2, ensure_ascii=False))

if __name__ == "__main__":
    main()
