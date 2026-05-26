---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-26T16:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 1, Story 4, Task 4: FR-099 Phase 1 — Privatize & rename to hf-ai-dev-kit

**Task ID:** E1:S04:T04  
**FR-099 phase:** **1**  
**Status:** COMPLETE  
**Priority:** HIGH  
**Created:** 2026-05-26  
**Last updated:** 2026-05-26  
**Code:** E1S04T04

**Upstream:** [FR-099 — Spin off book epic to a private repository](../../../fr-br/FR-099-spin-off-book-epic-to-private-repository.md)  
**Depends on:** [E1:S04:T03 — Phase 0](T03-fr099-phase0-inventory-adr-approval.md)  
**Migration ADR:** [ADR-006](../../../../architecture/standards-and-adrs/ADR-006-book-project-private-repository-spin-off.md)

---

## Input

- [FR-099](../../../fr-br/FR-099-spin-off-book-epic-to-private-repository.md)
- [E1:S04:T03 — Phase 0](T03-fr099-phase0-inventory-adr-approval.md) ✅
- Maintainer approval of private repo name per ADR-006

## Deliverable

Private GitHub repository `RMS-Ltd/hf-ai-dev-kit` with full history retained.

## Summary

**Phase 1:** GitHub repository **privatized** and **renamed** to [`RMS-Ltd/hf-ai-dev-kit`](https://github.com/RMS-Ltd/hf-ai-dev-kit). Full git history retained (book + frameworks).

---

## Deliverables

- Private repo live at `RMS-Ltd/hf-ai-dev-kit` (2026-05-26).
- Maintainer `origin` hygiene documented in [ADR-006](../../../../architecture/standards-and-adrs/ADR-006-book-project-private-repository-spin-off.md).

---

## Acceptance criteria (phase scope)

- [x] **AC3 (partial):** Private repo retains full pre-cutover history.

---

## FR-099 requirement mapping

| Requirement | Status |
|-------------|--------|
| FR-099-F3 | ✅ Privatize + rename |
| FR-099-NF1 | ✅ Private repo not in public clone defaults |

---

## Version Anchor

**Forensic marker:** `✅ COMPLETE (v0.1.4.4+1)` — Kanban documentation setup (`RW -k`, `--art`).

## Next phase

→ [E1:S04:T05 — Phase 2 book extraction genesis](T05-fr099-phase2-book-extraction-genesis.md)

---

## References

- [FR-099](../../../fr-br/FR-099-spin-off-book-epic-to-private-repository.md)
- [ADR-006](../../../../architecture/standards-and-adrs/ADR-006-book-project-private-repository-spin-off.md)
