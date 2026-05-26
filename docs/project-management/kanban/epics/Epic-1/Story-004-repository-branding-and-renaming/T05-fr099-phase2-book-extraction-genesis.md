---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-26T16:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 1, Story 4, Task 5: FR-099 Phase 2 — Book extraction genesis commit

**Task ID:** E1:S04:T05  
**FR-099 phase:** **2**  
**Status:** COMPLETE  
**Priority:** HIGH  
**Created:** 2026-05-26  
**Last updated:** 2026-05-26 (v0.1.4.5+1 – Kanban documentation setup)
**Version:** v0.1.4.5+1
**Code:** E1S04T05

**Upstream:** [FR-099 — Spin off book epic to a private repository](../../../fr-br/FR-099-spin-off-book-epic-to-private-repository.md)  
**Planning package:** [IPP-E1S04-fr099-book-private-public-migration.md](../../../../implementation-cycles/IPP-E1S04-fr099-book-private-public-migration.md) — **§4.3 Phase 2**  
**Depends on:** [E1:S04:T04 — Phase 1](T04-fr099-phase1-privatize-rename-hf-ai-dev-kit.md)  
**Migration ADR:** [ADR-006](../../../../architecture/standards-and-adrs/ADR-006-book-project-private-repository-spin-off.md)

---

## Input

- [FR-099](../../../fr-br/FR-099-spin-off-book-epic-to-private-repository.md)
- [E1:S04:T04 — Phase 1](T04-fr099-phase1-privatize-rename-hf-ai-dev-kit.md) ✅
- Private `hf-ai-dev-kit` `dev` branch

## Deliverable

Book extraction genesis commit on private repo (book-free public-bound tree).

## Summary

**Phase 2:** Land **book extraction genesis commit** on private `hf-ai-dev-kit` — public-bound tree book-free per Option B rule. Shipped **v0.1.4.3+1** (release attributed to umbrella **E1:S04:T03** before 2026-05-26 phase split).

---

## Deliverables (shipped)

- Deleted `docs/book-proj/` (8 manuscript files)
- Deleted `docs/project-management/kanban/epics/Epic-24/`
- Removed E24 rows from `kboard.md`; Epic 24 from `_index.md`, `kanban-structure.md`
- Replaced Head First book section in `ai-dev-kit-vision-and-purpose.md` with public/private scope stub
- Updated `kanban-board-guide.md`, `repo-structure-for-adopters.md`
- Archived E24 entries in `kanban-completed.md` (pointer to private repo)
- Trimmed `KB-INDEX.md` Epic-24 entries
- Branch `book/epic-24` at pre-extraction tip for ongoing private book work

**Not in this pass:** changelog archive book excerpts policy; bulk `earlution/` URL rewire (Phase 4).

---

## Acceptance criteria (phase scope)

- [x] **AC4 (partial):** Genesis tree on `dev` has no `docs/book-proj/`, no `Epic-24/`
- [x] **AC5:** No active E24 rows on public `kboard.md`

---

## FR-099 requirement mapping

| Requirement | Status |
|-------------|--------|
| FR-099-F4 | ✅ Book extraction genesis committed |

---

## Version Anchor

**Forensic markers:** `✅ COMPLETE (v0.1.4.3+1)` — genesis RW (umbrella T03); `v0.1.4.5+1` — Kanban documentation setup (`RW -k`, `--art`).

## Next phase

→ [E1:S04:T06 — Phase 3 public rebirth](T06-fr099-phase3-public-ai-dev-kit-rebirth.md)

---

## References

- [IPP-E1S04-fr099-book-private-public-migration.md](../../../../implementation-cycles/IPP-E1S04-fr099-book-private-public-migration.md)
- [Detailed changelog](../../../../changelog-and-release-notes/changelog-archive/CHANGELOG_v0.1.4.3+1.md)
- [FR-099](../../../fr-br/FR-099-spin-off-book-epic-to-private-repository.md)
