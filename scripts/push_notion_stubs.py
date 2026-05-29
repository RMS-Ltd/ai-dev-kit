#!/usr/bin/env python3
"""Prepare full content for 10 Notion stub pages. Outputs JSON for call_mcp_tool."""
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DOCS = ROOT / "docs" / "project-management" / "kanban"

PAGES = [
    ("30db6f89-62c1-8121-b69a-f5c137320bc3", DOCS / "epics/Epic-3/Story-004-numbering-versioning-package-implementation-review/T02-component-inventory.md"),
    ("30db6f89-62c1-81fd-b890-fa46a725aece", DOCS / "epics/Epic-4/Story-013-kanban-board-moscow-prioritized-task-view/T01-kanban-board-moscow-prioritized-task-view.md"),
    ("30db6f89-62c1-81bb-8b76-e06622ef5cd8", DOCS / "fr-br/FR-039-ai-dev-kit-project-review-and-legacy-clean-up.md"),
    ("30db6f89-62c1-81f5-9ab9-e53525432f0a", DOCS / "fr-br/BR-010-rw-doc-init-detection-bug-story-task-docs-batch-creation.md"),
    ("30db6f89-62c1-8108-b67e-fb680719c372", DOCS / "epics/Epic-1/Story-005-comprehensive-project-analysis-for-canonical-patterns.md"),
    ("30db6f89-62c1-81ed-b4ae-f6816eba5da8", DOCS / "epics/Epic-3/Story-002-versioning-cookbook-and-examples/T008-package-versioning-agentic-approach.md"),
    ("30db6f89-62c1-8124-9e9d-df77a14d2511", DOCS / "epics/Epic-2/Story-006-package-uninstall-and-recovery.md"),
    ("30db6f89-62c1-8165-a5a4-d63b5203b188", DOCS / "epics/Epic-4/Story-003-kanban-versioning-rw-integration/T004-rw-kanban-validation.md"),
    ("30db6f89-62c1-81ff-a22a-ef93cc788b40", DOCS / "fr-br/FR-005-systematic-canonical-epics-stories-tasks-templates.md"),
    ("30db6f89-62c1-8167-aa31-e48667aee7dc", DOCS / "epics/Epic-1/Story-003-core-kb-structure-for-dev-kit.md"),
]

def strip_frontmatter(text: str) -> str:
    if text.startswith("---"):
        match = re.search(r"^---\n.*?^---\n", text, re.MULTILINE | re.DOTALL)
        if match:
            return text[match.end():].lstrip()
    return text

def main():
    out_dir = ROOT / "scripts" / "notion_push_payloads"
    out_dir.mkdir(exist_ok=True)
    for i, (page_id, path) in enumerate(PAGES):
        if not path.exists():
            print(f"SKIP {path} (not found)", file=__import__("sys").stderr)
            continue
        content = path.read_text(encoding="utf-8")
        body = strip_frontmatter(content)
        payload = {
            "data": {
                "page_id": page_id,
                "command": "replace_content",
                "new_str": body
            }
        }
        out_file = out_dir / f"page_{i:02d}_{page_id[:8]}.json"
        out_file.write_text(json.dumps(payload, ensure_ascii=False, indent=None), encoding="utf-8")
        print(f"Wrote {out_file} ({len(body)} chars)")
    print(f"Done. {len(PAGES)} payloads in {out_dir}")

if __name__ == "__main__":
    main()
