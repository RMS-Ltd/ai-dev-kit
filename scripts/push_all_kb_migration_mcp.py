#!/usr/bin/env python3
"""
Push all 26 KB migration files to Notion via Cursor's call_mcp_tool.

This script loads each JSON and outputs the exact arguments for the agent
to pass to call_mcp_tool. The agent MUST call call_mcp_tool for each file.

Usage:
  1. Run: python scripts/push_all_kb_migration_mcp.py
  2. Agent iterates the output and calls call_mcp_tool(server, toolName, arguments)
     for each file with FULL content (do not truncate new_str).

Excludes: stub_* and _push_* files.
"""
import json
import os
from pathlib import Path

MCP_DIR = Path(__file__).resolve().parent.parent / "docs" / "knowledge" / "kb-migration-mcp-args"
SERVER = "plugin-notion-workspace-notion"
TOOL = "notion-update-page"

FILES = [
    "analysis_package-management-implementation-plan.md.json",
    "analysis_package-management-investigation-report.md.json",
    "analysis_package-management-prioritization-review.md.json",
    "analysis_perpetual-task-range-options-analysis.md.json",
    "analysis_phase3-package-distribution-plan.md.json",
    "documentation_engineering-and-platform_canonical-epic-pattern-analysis.md.json",
    "documentation_engineering-and-platform_comprehensive-canonical-est-structure-design.md.json",
    "documentation_templates_epic-pir-template.md.json",
    "documentation_templates_story-pir-template.md.json",
    "documentation_user-docs_EXISTING_PROJECT_ROLLOUT_CHECKLIST.md.json",
    "documentation_user-docs_cli-configuration-guide.md.json",
    "documentation_user-docs_cli-publishing-guide.md.json",
    "documentation_user-docs_cli-troubleshooting-guide.md.json",
    "documentation_user-docs_cli-usage-examples.md.json",
    "documentation_user-docs_framework-dependency-cli-reference.md.json",
    "documentation_user-docs_framework-dependency-faq.md.json",
    "documentation_user-docs_framework-dependency-installation-guide.md.json",
    "documentation_user-docs_framework-dependency-integration-guide.md.json",
    "documentation_user-docs_framework-dependency-post-template-setup-guide.md.json",
    "documentation_user-docs_framework-dependency-template-enablement-instructions.md.json",
    "documentation_user-docs_framework-dependency-troubleshooting-guide.md.json",
    "documentation_user-docs_framework-dependency-update-guide.md.json",
    "documentation_user-docs_framework-dependency-usage-guide.md.json",
    "documentation_user-docs_framework-dependency-use-cases.md.json",
    "documentation_user-docs_repo-structure-for-adopters.md.json",
    "vibe-coding-for-dummies-outline-and-sample.md.json",
]

def main():
    results = []
    for f in FILES:
        path = MCP_DIR / f
        if not path.exists():
            print(f"SKIP (missing): {f}")
            continue
        try:
            with open(path, encoding="utf-8") as fp:
                obj = json.load(fp)
            args = obj["arguments"]
            page_id = args["data"]["page_id"]
            results.append({"file": f, "page_id": page_id, "arguments": args})
        except Exception as e:
            print(f"ERROR {f}: {e}")

    # Output as JSON array for agent to process
    print(json.dumps(results, ensure_ascii=False, indent=2))

if __name__ == "__main__":
    main()
