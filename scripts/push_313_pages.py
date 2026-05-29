#!/usr/bin/env python3
"""
Push 3.1.3 Implementation pages to Notion.
Loads each JSON from docs/knowledge/kb-migration-mcp-args/ and outputs
MCP call instructions. Actual invocation must be done via call_mcp_tool.
"""
import json
import os

FILES = [
    "sweep_knowledge_analysis_adk-implementation-analysis-report_md.json",
    "sweep_313_execution_plan.json",
    "sweep_knowledge_analysis_adk-learning-synthesis_md.json",
    "sweep_knowledge_analysis_projects_starborn-legacy-adk-analysis_md.json",
    "sweep_knowledge_USE_CASE_METHODOLOGY_md.json",
    "sweep_knowledge_reviews_pir_Epic-2_PIR-Epic-2-TEST-v0_2_5_10_1_md.json",
    "sweep_knowledge_analysis_meta-analysis-workflows_md.json",
    "sweep_knowledge_analysis_outstanding-work-summary_md.json",
    "sweep_knowledge_analysis_projects_confidentia-adk-analysis_md.json",
    "sweep_knowledge_analysis_projects_fynd-deals-adk-analysis_md.json",
]

BASE = "docs/knowledge/kb-migration-mcp-args"
results = []
for f in FILES:
    path = os.path.join(BASE, f)
    try:
        with open(path) as fp:
            j = json.load(fp)
        args = j["arguments"]["data"]
        results.append({"file": f, "ok": True, "page_id": args["page_id"], "len": len(args["new_str"])})
    except Exception as e:
        results.append({"file": f, "ok": False, "error": str(e)})

for r in results:
    if r["ok"]:
        print(f"OK {r['file']} page_id={r['page_id']} len={r['len']}")
    else:
        print(f"FAIL {r['file']} {r['error']}")
