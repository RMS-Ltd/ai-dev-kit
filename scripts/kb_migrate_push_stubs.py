#!/usr/bin/env python3
"""
Push full repo content to Notion pages that have "See repo for full content" stubs.

Usage: python scripts/kb_migrate_push_stubs.py

Reads stub page IDs and repo paths from the mappings below, then outputs
MCP-ready JSON. Run this, then use Cursor's call_mcp_tool with each output.

Or: pipe to a tool that invokes MCP (if available).
"""
import json
import sys
from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parent.parent
DOCS_ROOT = PROJECT_ROOT / "docs"

# (Notion page_id, repo path relative to docs/)
STUB_MAPPINGS = [
    ("30db6f8962c1810e8785ded6c5a40395", "architecture/standards-and-adrs/legacy-repo-analysis.md"),
    ("30db6f8962c18159a6bffa60b4936cbd", "project-management/kanban/fr-br/REOPENING_BR_AND_TASKS_GUIDE.md"),
    ("30db6f8962c181649af3f40b31d611f7", "project-management/kanban/epics/Epic-1/Story-002-package-and-repo-architecture.md"),
    ("30db6f8962c181fba452d3525e6f3fe7", "project-management/kanban/epics/Epic-5/Story-000-fr-repo.md"),
    ("30db6f8962c18107ac53e74862ef5bf6", "project-management/kanban/epics/Epic-5/Story-001-fr-repo.md"),
    ("30db6f8962c18116a663d042a095b235", "project-management/kanban/epics/Epic-6/Story-000-br-repo.md"),
    ("30db6f8962c181669641e6b54a78df92", "project-management/kanban/epics/Epic-6/Story-001-br-repo.md"),
    ("30db6f8962c181b5b4aff61abdb979dd", "project-management/kanban/epics/Epic-6/Story-008-ai-dev-kit-cli-tool.md"),
    ("30db6f8962c1816998edf074fee6afb9", "project-management/kanban/epics/Epic-7/Story-000-uxr-repo.md"),
    ("30db6f8962c1815e866be35957833740", "project-management/kanban/epics/Epic-24/Story-001-book-content-development.md"),
]

def main():
    out_dir = PROJECT_ROOT / "docs" / "knowledge" / "kb-migration-mcp-args"
    out_dir.mkdir(parents=True, exist_ok=True)
    for page_id, rel_path in STUB_MAPPINGS:
        full_path = DOCS_ROOT / rel_path
        if not full_path.exists():
            print(f"SKIP (missing): {rel_path}", file=sys.stderr)
            continue
        content = full_path.read_text(encoding="utf-8", errors="replace")
        mcp_args = {
            "server": "plugin-notion-workspace-notion",
            "toolName": "notion-update-page",
            "arguments": {
                "data": {
                    "page_id": page_id,
                    "command": "replace_content",
                    "new_str": content,
                    "allow_deleting_content": True,
                }
            },
        }
        safe_name = rel_path.replace("/", "_").replace(" ", "-")
        out_path = out_dir / f"stub_{safe_name}.json"
        out_path.write_text(json.dumps(mcp_args, ensure_ascii=False, indent=2), encoding="utf-8")
        print(f"Wrote {out_path.name} ({len(content)} chars)")
    print(f"\nDone. Pass each JSON's arguments to call_mcp_tool(server, toolName, arguments).")

if __name__ == "__main__":
    main()
