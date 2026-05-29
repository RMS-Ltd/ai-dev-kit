#!/usr/bin/env python3
"""
Invoke KB migration MCP calls via Cursor agent.

This script loads each JSON from docs/knowledge/kb-migration-mcp-args/
and prints the call_mcp_tool invocation in a format the Cursor agent
can execute.

Usage: Run this script, then copy-paste or have the agent execute
the printed call_mcp_tool invocations for each file.

Alternatively: The agent should load each JSON, extract server, toolName,
arguments, and call call_mcp_tool(server, toolName, arguments) directly.
"""
import json
import os
import sys

BASE = "docs/knowledge/kb-migration-mcp-args"
DONE = {
    "documentation_user-docs_repo-structure-for-adopters.md",
    "vibe-coding-for-dummies-outline-and-sample.md",
    "documentation_user-docs_framework-dependency-integration-guide.md",
    "documentation_templates_story-pir-template.md",
    "documentation_templates_epic-pir-template.md",
    "documentation_user-docs_cli-publishing-guide.md",
    "documentation_user-docs_EXISTING_PROJECT_ROLLOUT_CHECKLIST.md",
    "documentation_user-docs_framework-dependency-template-enablement-instructions.md",
    "documentation_user-docs_cli-usage-examples.md",
    "documentation_engineering-and-platform_comprehensive-canonical-est-structure-design.md",
    "documentation_user-docs_cli-configuration-guide.md",
    "documentation_user-docs_cli-troubleshooting-guide.md",
    "analysis_phase3-package-distribution-plan.md",
    "documentation_engineering-and-platform_canonical-epic-pattern-analysis.md",
    # Session 2025-02-20: pushed to Notion
    "documentation_user-docs_framework-dependency-faq.md",
    "documentation_user-docs_framework-dependency-troubleshooting-guide.md",
    "analysis_perpetual-task-range-options-analysis.md",
    "analysis_package-management-implementation-plan.md",
}

def main():
    results = []
    for f in sorted(os.listdir(BASE)):
        if not f.endswith(".json"):
            continue
        name = f.replace(".json", "")
        if name in DONE:
            continue
        path = os.path.join(BASE, f)
        try:
            with open(path) as fp:
                obj = json.load(fp)
            results.append((name, obj))
        except Exception as e:
            print(f"# ERROR {name}: {e}", file=sys.stderr)
    # Output JSON array of pending invocations for agent to process
    out = [{"name": n, "server": o["server"], "toolName": o["toolName"], "arguments": o["arguments"]} for n, o in results]
    print(json.dumps(out, indent=2, ensure_ascii=False))

if __name__ == "__main__":
    main()
