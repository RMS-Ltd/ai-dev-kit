# Changelog: v0.5.8.2+6

**Release Date:** 2026-02-22 10:30:12 UTC  
**Epic:** 5 (Documentation Management)  
**Story:** 8 (Knowledge Base)  
**Task:** 2 (Notion hub, Knowledge Base container, and KB index)  
**Internal Version:** 0.5.8.2+6  
**Attribution:** E5:S08:T02

---

## Summary

KB migration: stub sweep sessions 2–3, mappings added to kb_stub_sweep.py (Rituals README, Policy README, UXR-003), 29 stubs pushed to Notion. Epic 5 Story 006 chunked; migration log updated.

---

## Added

- **kb_stub_sweep.py mappings** – Rituals README → `docs/project-management/rituals/README.md`, Policy README → `docs/project-management/rituals/policy/README.md`, UXR-003 → `fr-br/UXR-003-intelligent-epic-matching-canonical-adoption-uat.md`
- **Epic 5 Story 006 to LARGE_FILES** – Chunked for MCP push (4 parts)
- **Sweep MCP args** – 22+ sweep JSON files for stub migration (Kanban Board Guide, BR-002, Epic 4 T04, FR-024, Epic 2 T004/T01, Epic 7 Story 002, Epic 24 Story 003, Epic 2 Story 004, Rituals README, FR-026, Kanban Governance Policy, Epic 5, Epic 6 Story 005, FR-035, UXR-003, FR-021, Epic 6 T06, Epic 2 Story 001, etc.)

---

## Changed

- **`docs/knowledge/kb-migration-log.md`** – Stub sweep 2026-02-22 sessions 2–3, chunked Epic 5 Story 006.
- **`scripts/kb_stub_sweep.py`** – Added Rituals README, Policy README, UXR-003 mappings.
- **`scripts/push_notion_large_pages.py`** – Added Epic 5 Story 006 to LARGE_FILES.
- **`docs/knowledge/stubs.json`** – Updated stub search results.

---

## Migration

**Stub sweeps (29+ pages pushed via call_mcp_tool):**
- Sessions 2–3: Kanban Board Guide, Rituals README, Epic 4 T04, FR-024, Epic 2 T004/T01, Epic 7 Story 002, Epic 24 Story 003, Epic 2 Story 004, FR-026, Kanban Governance Policy, Epic 5, Epic 6 Story 005, FR-035, UXR-003, FR-021, Epic 6 T06, Epic 2 Story 001
- Epic 5 Story 006 (4 chunks; part2 selection fix pending)

---

## References

- **Task:** `docs/project-management/kanban/epics/Epic-5/Story-008-knowledge-base/T02-notion-hub-and-kb-index.md`
- **Story:** `docs/project-management/kanban/epics/Epic-5/Story-008-knowledge-base.md`
- **Migration log:** `docs/knowledge/kb-migration-log.md`
