#!/usr/bin/env python3
"""
KB Stub Sweep: Find stub pages, map to repo files, emit MCP args for push.

Usage:
  # 1. Agent runs Notion search for "See repo for full content", saves results to JSON
  # 2. Run this script:
  python scripts/kb_stub_sweep.py stubs.json
  # 3. Script writes MCP args to docs/knowledge/kb-migration-mcp-args/sweep_*.json
  # 4. Agent loads each JSON and calls call_mcp_tool(server, toolName, arguments)
  # 5. Repeat 1-4 until search returns 0 stubs

Input JSON format (from notion-search results):
  [{"id": "uuid", "title": "Page Title"}, ...]

Output: MCP-ready JSON files in docs/knowledge/kb-migration-mcp-args/sweep_*.json
"""
from __future__ import annotations

import json
import re
import sys
from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parent.parent
DOCS_ROOT = PROJECT_ROOT / "docs"
OUT_DIR = PROJECT_ROOT / "docs" / "knowledge" / "kb-migration-mcp-args"
PM_ROOT = DOCS_ROOT / "project-management" / "kanban"
ARCH_ROOT = DOCS_ROOT / "architecture"


def slugify(s: str) -> str:
    """Convert title to filename slug (lowercase, hyphens)."""
    s = re.sub(r"[^\w\s-]", "", s.lower())
    return re.sub(r"[-\s]+", "-", s).strip("-")


def find_repo_path(title: str) -> Path | None:
    """Map Notion page title to repo markdown path. Returns None if not found."""
    title_norm = title.strip()

    # FR-XXX or BR-XXX
    fr_match = re.match(r"^(FR|BR)-(\d+)\s+(.+)$", title_norm, re.I)
    if fr_match:
        prefix, num, rest = fr_match.groups()
        num = num.zfill(3)
        slug = slugify(rest)
        pattern = f"{prefix}-{num}-{slug}.md"
        candidates = list(PM_ROOT.glob(f"fr-br/{prefix}-{num}-*.md"))
        if candidates:
            return candidates[0]
        # Try without slug
        for p in PM_ROOT.glob(f"fr-br/{prefix}-{num}-*.md"):
            return p
        return None

    # Epic N
    epic_match = re.match(r"^Epic\s+(\d+)$", title_norm, re.I)
    if epic_match:
        n = epic_match.group(1)
        p = PM_ROOT / f"epics/Epic-{n}/Epic-{n}.md"
        if p.exists():
            return p
        return None

    # Epic N Story M Title
    story_match = re.match(r"^Epic\s+(\d+)\s+Story\s+(\d+)\s+(.+)$", title_norm, re.I)
    if story_match:
        n, m, rest = story_match.groups()
        m = m.zfill(3)
        slug = slugify(rest)
        base = PM_ROOT / f"epics/Epic-{n}"
        for p in base.glob(f"Story-{m}-*.md"):
            return p
        for p in base.glob(f"Story-00{m}-*.md"):
            return p
        return None

    # Epic N T0XX or TXXX Title
    task_match = re.match(r"^Epic\s+(\d+)\s+T(\d+)\s+(.+)$", title_norm, re.I)
    if task_match:
        n, t, rest = task_match.groups()
        t_pad = t.zfill(3) if len(t) <= 2 else t
        base = PM_ROOT / f"epics/Epic-{n}"
        for story_dir in base.iterdir():
            if story_dir.is_dir():
                for p in story_dir.glob(f"T{t_pad}-*.md"):
                    return p
                for p in story_dir.glob(f"T{t}-*.md"):
                    return p
                for p in story_dir.glob(f"T0{t}-*.md"):
                    return p
        return None

    # Epic N Task M or Epic N Story M Task K
    task2_match = re.match(r"^Epic\s+(\d+)\s+(?:Story\s+\d+\s+)?Task\s+(\d+)\s*(.+)?$", title_norm, re.I)
    if task2_match:
        n, t, rest = task2_match.groups()
        t_pad = t.zfill(3)
        base = PM_ROOT / f"epics/Epic-{n}"
        for story_dir in base.iterdir():
            if story_dir.is_dir():
                for p in story_dir.glob(f"T{t_pad}-*.md"):
                    return p
                for p in story_dir.glob(f"T{t}-*.md"):
                    return p
        return None

    # Story N Title (standalone)
    story_standalone = re.match(r"^Story\s+(\d+)\s+(.+)$", title_norm, re.I)
    if story_standalone:
        m, rest = story_standalone.groups()
        m = m.zfill(3)
        slug = slugify(rest)
        for epic_dir in PM_ROOT.glob("epics/Epic-*"):
            for p in epic_dir.glob(f"Story-{m}-*.md"):
                return p
            for p in epic_dir.glob(f"Story-00{m}-*.md"):
                return p
        return None

    # T00X Title (standalone)
    t_standalone = re.match(r"^T(\d+)\s+(.+)$", title_norm, re.I)
    if t_standalone:
        t, rest = t_standalone.groups()
        t_pad = t.zfill(3) if len(t) <= 2 else t
        for epic_dir in PM_ROOT.glob("epics/Epic-*"):
            for story_dir in epic_dir.iterdir():
                if story_dir.is_dir():
                    for p in story_dir.glob(f"T{t_pad}-*.md"):
                        return p
                    for p in story_dir.glob(f"T{t}-*.md"):
                        return p
        return None

    # Knowledge (3.1.3): explicit title -> path map for common patterns
    KNOWLEDGE_ROOT = DOCS_ROOT / "knowledge"
    knowledge_map = {
        "adk implementation patterns": KNOWLEDGE_ROOT / "analysis/adk-implementation-patterns.md",
        "adk implementation analysis report": KNOWLEDGE_ROOT / "analysis/adk-implementation-analysis-report.md",
        "adk implementation analysis execution plan": KNOWLEDGE_ROOT / "analysis/adk-implementation-analysis-report.md",  # or pre-analysis
        "pir readme": KNOWLEDGE_ROOT / "reviews/pir/README.md",
        "adk learning synthesis": KNOWLEDGE_ROOT / "analysis/adk-learning-synthesis.md",
        "discovered use case template": KNOWLEDGE_ROOT / "use-cases/templates/DISCOVERED_USE_CASE_TEMPLATE.md",
        "starborn legacy adk analysis": KNOWLEDGE_ROOT / "analysis/projects/starborn-legacy-adk-analysis.md",
        "uc-d-003 pattern discovery workflow": KNOWLEDGE_ROOT / "use-cases/discovered/UC-D-003-pattern-discovery-workflow.md",
        "badge setup for private repos": KNOWLEDGE_ROOT / "guides/badge-setup-for-private-repos.md",
        "use case methodology": KNOWLEDGE_ROOT / "USE_CASE_METHODOLOGY.md",
        "pir epic 2 test v0.2.5.10+1": KNOWLEDGE_ROOT / "reviews/pir/Epic-2/PIR-Epic-2-TEST-v0.2.5.10+1.md",
        "meta-analysis workflows": KNOWLEDGE_ROOT / "analysis/meta-analysis-workflows.md",
        "outstanding work summary": KNOWLEDGE_ROOT / "analysis/outstanding-work-summary.md",
        "confidentia adk analysis": KNOWLEDGE_ROOT / "analysis/projects/confidentia-adk-analysis.md",
        "fynd deals adk analysis": KNOWLEDGE_ROOT / "analysis/projects/fynd-deals-adk-analysis.md",
        "rituals readme": DOCS_ROOT / "project-management/rituals/README.md",
        "policy readme": DOCS_ROOT / "project-management/rituals/policy/README.md",
        "uxr-003 intelligent epic matching uat": PM_ROOT / "fr-br/UXR-003-intelligent-epic-matching-canonical-adoption-uat.md",
    }
    key = title_norm.lower().strip()
    if key in knowledge_map:
        p = knowledge_map[key]
        if p.exists():
            return p

    # Architecture / general: title as filename slug
    slug = slugify(title_norm)
    if slug:
        for p in (KNOWLEDGE_ROOT.rglob("*.md") if KNOWLEDGE_ROOT.exists() else []):
            if p.stem.lower().replace("_", "-") == slug:
                return p
        for p in ARCH_ROOT.rglob("*.md"):
            if p.stem.lower().replace("_", "-") == slug:
                return p
        for p in DOCS_ROOT.rglob("*.md"):
            if p.stem.lower().replace("_", "-") == slug:
                return p

    return None


def main() -> int:
    if len(sys.argv) < 2:
        print("Usage: python kb_stub_sweep.py <stubs.json>", file=sys.stderr)
        print("  stubs.json: [{\"id\": \"...\", \"title\": \"...\"}, ...]", file=sys.stderr)
        return 1

    in_path = Path(sys.argv[1])
    if not in_path.exists():
        print(f"File not found: {in_path}", file=sys.stderr)
        return 1

    data = json.loads(in_path.read_text(encoding="utf-8"))
    if isinstance(data, dict) and "results" in data:
        items = data["results"]
    elif isinstance(data, list):
        items = data
    else:
        print("Expected list or {results: [...]}", file=sys.stderr)
        return 1

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    pushed = 0
    skipped = 0
    for item in items:
        page_id = item.get("id") or item.get("page_id")
        title = item.get("title") or item.get("name") or ""
        if not page_id or not title:
            continue

        # Normalize page_id (strip dashes for consistency)
        page_id_clean = page_id.replace("-", "")

        path = find_repo_path(title)
        if not path or not path.exists():
            print(f"SKIP (no match): {title}", file=sys.stderr)
            skipped += 1
            continue

        content = path.read_text(encoding="utf-8", errors="replace")
        rel = path.relative_to(DOCS_ROOT)
        safe_name = re.sub(r"[^\w\-]", "_", str(rel)).replace("__", "_")
        out_path = OUT_DIR / f"sweep_{safe_name}.json"

        mcp_args = {
            "server": "plugin-notion-workspace-notion",
            "toolName": "notion-update-page",
            "arguments": {
                "data": {
                    "page_id": page_id_clean,
                    "command": "replace_content",
                    "new_str": content,
                    "allow_deleting_content": True,
                }
            },
        }
        out_path.write_text(
            json.dumps(mcp_args, ensure_ascii=False, indent=2), encoding="utf-8"
        )
        print(f"OK: {title} -> {rel} ({len(content)} chars) -> {out_path.name}")
        pushed += 1

    print(f"\nWrote {pushed} MCP arg files. Skipped {skipped}.")
    print("Next: call_mcp_tool for each sweep_*.json in docs/knowledge/kb-migration-mcp-args/")
    return 0


if __name__ == "__main__":
    sys.exit(main())
