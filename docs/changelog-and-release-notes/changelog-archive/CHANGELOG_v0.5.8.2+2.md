# Changelog: v0.5.8.2+2

**Release Date:** 2026-02-20 14:30:00 UTC  
**Epic:** 5 (Documentation Management)  
**Story:** 8 (Knowledge Base)  
**Task:** 2 (Notion hub, Knowledge Base container, and KB index)  
**Internal Version:** 0.5.8.2+2  
**Attribution:** E5:S08:T02

---

## Summary

KB migration to Notion (Engineering KB 3.1 AI Dev Kit). ~484 docs migrated from `docs/` into Notion under sections 3.1.1–3.1.7. Added `notion_kb_url` to config and migration artifacts (`kb-migration-map.json`, `kb-migration-log.md`).

---

## Added

- **`rw-config.yaml`** – `notion_kb_url` (Engineering KB 3.1 AI Dev Kit URL).
- **`docs/knowledge/kb-migration-map.json`** – Path→URL mappings for Phase 1–2 migration sections.
- **`docs/knowledge/kb-migration-log.md`** – Migration log (phases 0–4, section counts, status).
- **Notion – Engineering KB 3.1 AI Dev Kit** – ~484 pages under 3.1.x: maintenance (3.1.4), analysis (3.1.5), documentation/guides/root (3.1.1), architecture (3.1.2), knowledge (3.1.3), project-management (3.1.7); changelog archive summarized as single page under 3.1.4.

---

## Changed

- None.

---

## References

- **Task:** `docs/project-management/kanban/epics/Epic-5/Story-008-knowledge-base/T02-notion-hub-and-kb-index.md`
- **Story:** `docs/project-management/kanban/epics/Epic-5/Story-008-knowledge-base.md`
- **Migration log:** `docs/knowledge/kb-migration-log.md`
