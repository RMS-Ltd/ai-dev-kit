---
lifecycle: evergreen
ttl_days: null
created_at: 2026-02-20T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 5, Story 8, Task 2: Notion Hub, Knowledge Base Container, and KB Index

**Task ID:** E5:S08:T02  
**Status:** ✅ COMPLETE (v0.5.8.2+8)  
**Priority:** HIGH  
**Estimated Effort:** Medium  
**Created:** 2026-02-20  
**Last updated:** 2026-02-22  
**Version:** v0.5.8.2+8  
**Code:** E5S08T02

---

## Input

- Notion workspace (RMS Teamspace); Cursor Notion plugin/MCP
- Repo: `rw-config.yaml`, `.cursorrules`, `docs/` tree, `scripts/`
- KB structure docs: `docs/architecture/standards-and-adrs/kb-structure-overview.md`, `ultimate-canonical-kb-structure.md`

---

## Scope

Establish the AI Dev Kit project hub and Knowledge Base container in Notion (RMS Teamspace), wire the repo to the hub via config, and index the entire project KB so the structure and content are known for optimization and migration.

---

## Deliverables

1. **Notion – AI Dev Kit hub page** (in RMS Teamspace)
   - Purpose statement (single entry point for project context)
   - Repo and docs links (GitHub, README, CHANGELOG, install guide, vision)
   - Knowledge Base section linking to the container page
   - Quick links section for future Notion pages

2. **Project config – hub URL**
   - `rw-config.yaml`: `notion_hub_url` pointing to the hub page
   - `.cursorrules`: File Paths bullet for Notion project hub (via `notion_hub_url`)

3. **Notion – Knowledge Base container page** (child of hub)
   - Purpose: decisions, patterns, reference docs, captured context
   - Areas: Decisions, Patterns & practices, Reference, How-tos (placeholders for child pages/databases)
   - Linked from hub

4. **KB index (repo)**
   - `scripts/kb_index.py`: script to walk `docs/`, collect paths, sizes, word counts, frontmatter; emit Markdown and optional JSON
   - `docs/knowledge/KB-INDEX.md`: human-readable index (section summary, optimization signals, full inventory; changelog archive summarized)
   - `docs/knowledge/KB-INDEX.json`: machine-readable index for migration tooling

5. **Story rename**
   - E5:S08 renamed from "Persistent Knowledge Base Investigation" to "Knowledge Base"
   - Story file: `Story-008-knowledge-base.md`; Epic-5 checklist and Story 8 section updated

---

## Acceptance Criteria

- [x] AI Dev Kit hub page exists in Notion (RMS Teamspace) with purpose, repo links, and Knowledge Base link
- [x] `rw-config.yaml` contains `notion_hub_url`
- [x] `.cursorrules` File Paths references Notion hub via config
- [x] Knowledge Base container page exists under the hub with purpose and area placeholders
- [x] `scripts/kb_index.py` runs and generates KB-INDEX.md (and optional KB-INDEX.json)
- [x] KB-INDEX.md includes section summary, optimization signals (e.g. missing frontmatter, expired), and full inventory (archive summarized)
- [x] E5:S08 story title and file name updated to "Knowledge Base"; Epic-5 updated

---

## References

- Notion hub (RMS Teamspace): URL in `rw-config.yaml` → `notion_hub_url`
- KB structure: [kb-structure-overview.md](../../../../../architecture/standards-and-adrs/kb-structure-overview.md), [ultimate-canonical-kb-structure.md](../../../../../architecture/standards-and-adrs/ultimate-canonical-kb-structure.md)
- Doc lifecycle: [doc-lifecycle-policy.md](../../../../../architecture/standards-and-adrs/doc-lifecycle-policy.md)
