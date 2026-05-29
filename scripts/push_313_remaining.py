#!/usr/bin/env python3
"""
Push remaining 3.1.3 Implementation pages to Notion via MCP.

Usage: Run this script to print the list of remaining files.
The Cursor agent must call call_mcp_tool(server, toolName, arguments)
for each file with FULL content from the JSON.

Successfully pushed (7/15):
- sweep_knowledge_analysis_adk-implementation-patterns_md.json ✅
- sweep_knowledge_analysis_adk-implementation-analysis-report_md.json ✅ (partial - re-push with full content)
- sweep_knowledge_reviews_pir_README_md.json ✅
- sweep_knowledge_use-cases_templates_DISCOVERED_USE_CASE_TEMPLATE_md.json ✅
- sweep_knowledge_use-cases_discovered_UC-D-003-pattern-discovery-workflow_md.json ✅
- sweep_knowledge_guides_badge-setup-for-private-repos_md.json ✅ (condensed - re-push with full content)
- (pattern variants)

Remaining to push (8):
- sweep_313_execution_plan.json
- sweep_knowledge_analysis_adk-learning-synthesis_md.json
- sweep_knowledge_USE_CASE_METHODOLOGY_md.json
- sweep_knowledge_reviews_pir_Epic-2_PIR-Epic-2-TEST-v0_2_5_10_1_md.json
- sweep_knowledge_analysis_meta-analysis-workflows_md.json
- sweep_knowledge_analysis_outstanding-work-summary_md.json
- sweep_knowledge_analysis_projects_starborn-legacy-adk-analysis_md.json
- sweep_knowledge_analysis_projects_confidentia-adk-analysis_md.json
- sweep_knowledge_analysis_projects_fynd-deals-adk-analysis_md.json
"""
import json
import os

REMAINING = [
    "sweep_313_execution_plan.json",
    "sweep_knowledge_analysis_adk-implementation-analysis-report_md.json",  # re-push full
    "sweep_knowledge_analysis_adk-learning-synthesis_md.json",
    "sweep_knowledge_USE_CASE_METHODOLOGY_md.json",
    "sweep_knowledge_reviews_pir_Epic-2_PIR-Epic-2-TEST-v0_2_5_10_1_md.json",
    "sweep_knowledge_analysis_meta-analysis-workflows_md.json",
    "sweep_knowledge_analysis_outstanding-work-summary_md.json",
    "sweep_knowledge_analysis_projects_starborn-legacy-adk-analysis_md.json",
    "sweep_knowledge_analysis_projects_confidentia-adk-analysis_md.json",
    "sweep_knowledge_analysis_projects_fynd-deals-adk-analysis_md.json",
]
BASE = os.path.join(os.path.dirname(__file__), "..", "docs", "knowledge", "kb-migration-mcp-args")

def main():
    print("Remaining 3.1.3 pages to push:\n")
    for f in REMAINING:
        path = os.path.join(BASE, f)
        if not os.path.exists(path):
            print(f"  SKIP (missing): {f}")
            continue
        with open(path) as fp:
            j = json.load(fp)
        page_id = j["arguments"]["data"]["page_id"]
        length = len(j["arguments"]["data"]["new_str"])
        print(f"  {f}")
        print(f"    page_id: {page_id}")
        print(f"    content length: {length} chars")
        print()
    print("Agent: For each file, call:")
    print('  call_mcp_tool(server="plugin-notion-workspace-notion", toolName="notion-update-page", arguments=j["arguments"])')
    print("  where j = json.load(open(path))")

if __name__ == "__main__":
    main()
