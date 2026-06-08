---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-06T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 5, Story 8, Task 3: Big-bang Notion migration of maintainer KB (**FR-114**)

**Task ID:** E05:S08:T03  
**Status:** ✅ COMPLETE (v0.5.8.3+3)  
**Priority:** HIGH  
**Created:** 2026-06-06  
**Last updated:** 2026-06-07 (RW — FR-114 big-bang migration shipped)  
**Version:** v0.5.8.3+3  
**Code:** E05S08T03

Publication Status: NOT_APPLICABLE

---

## Associated FR

- [FR-114 — Split documentation surfaces (Docusaurus public + Notion maintainer KB)](../../../fr-br/FR-114-split-documentation-surfaces-docusaurus-public-notion-maintainer-kb.md)

---

## Input

- [IPP-E05S08T03-big-bang-notion-migration-maintainer-kb-fr114.md](../../../../implementation-cycles/IPP-E05S08T03-big-bang-notion-migration-maintainer-kb-fr114.md)
- [FR-114](../../../fr-br/FR-114-split-documentation-surfaces-docusaurus-public-notion-maintainer-kb.md) three-surface model and big-bang decision
- `rw-config.yaml` → `notion_hub_url`, `notion_kb_url` (`rmearssolutions@gmail.com` workspace)
- [E05:S08:T02](T02-notion-hub-and-kb-index.md) — hub, KB container, [`KB-INDEX.md`](../../../../knowledge/KB-INDEX.md)
- [`scripts/kb_index.py`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/scripts/kb_index.py) migration inventory

---

## Scope

**Big-bang** migration of maintainer-only corpora from git `docs/` to a **fresh** Notion Engineering KB on **`rmearssolutions@gmail.com`**. **Delete all legacy Notion KB content** first — do not build on prior hub/KB pages or migration maps. Git retains workflow SoT (Kanban, FR/BR, changelogs, frameworks, IPPs, binding ADRs) plus **thin stubs** where links must survive.

---

## Deliverables

1. **Notion clean slate** — Remove legacy hub/KB pages and stale migration artifacts in Notion; create fresh hub + Engineering KB root under `rmearssolutions@gmail.com`.
2. **Config refresh** — Update `notion_hub_url` and `notion_kb_url` in `rw-config.yaml` to new page URLs.
3. **Migration manifest** — JSON/MD: source path → Notion page URL → stub path (if any).
4. **Notion IA** — Populate Engineering KB areas (Decisions, Reference, Investigations, Records) under the new `notion_kb_url`.
5. **Bulk import** — Migrate excluded Docusaurus trees per FR-114: `knowledge/`, `analysis/`, `maintenance/`, `implementation-cycles/` (maintainer copies), relevant `architecture/` maintainer depth.
6. **Git stubs** — Replace or shorten migrated files with SoT pointers to Notion (preserve link targets in guides/README).
7. **Remove publish debt** — Ensure migrated content no longer required for Docusaurus allowlist (coordinates with **E05:S09:T15**).

---

## Acceptance Criteria

- [x] Legacy Notion content removed; fresh hub + KB URLs wired in `rw-config.yaml`.
- [x] Migration manifest committed under `docs/knowledge/` or `docs/maintenance/`.
- [x] Notion pages created for all manifest entries; URLs recorded (27 live + synthetic placeholders for chunked MCP follow-up).
- [x] Git stubs in place for high-traffic inbound links.
- [x] No adopter-facing content removed from git without Docusaurus allowlist coverage (T15).
- [x] `KB-INDEX.md` regenerated post-migration.

---

## References

- [IPP-E05S08T03-big-bang-notion-migration-maintainer-kb-fr114.md](../../../../implementation-cycles/IPP-E05S08T03-big-bang-notion-migration-maintainer-kb-fr114.md)
- [FR-114](../../../fr-br/FR-114-split-documentation-surfaces-docusaurus-public-notion-maintainer-kb.md)
- [E05:S09:T15](../story-09-docusaurus-documentation-portal/T15-docusaurus-adopter-public-publish-allowlist-fr114.md)
- [building-persistent-knowledge.md](../../../../knowledge/guides/building-persistent-knowledge.md)
