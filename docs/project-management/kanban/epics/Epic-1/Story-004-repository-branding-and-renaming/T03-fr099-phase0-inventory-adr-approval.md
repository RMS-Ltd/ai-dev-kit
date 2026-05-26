---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-26T14:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 1, Story 4, Task 3: FR-099 Phase 0 — Inventory & ADR approval

**Task ID:** E1:S04:T03  
**FR-099 phase:** **0**  
**Status:** COMPLETE  
**Priority:** HIGH  
**Created:** 2026-05-26  
**Last updated:** 2026-05-26 (v0.1.4.3+3 – Kanban documentation setup)  
**Version:** v0.1.4.3+3  
**Code:** E1S04T03

**Upstream:** [FR-099 — Spin off book epic to a private repository](../../../fr-br/FR-099-spin-off-book-epic-to-private-repository.md)  
**Migration ADR:** [ADR-006](../../../../architecture/standards-and-adrs/ADR-006-book-project-private-repository-spin-off.md)

---

## Input

- [FR-099](../../../fr-br/FR-099-spin-off-book-epic-to-private-repository.md)
- [ADR-006](../../../../architecture/standards-and-adrs/ADR-006-book-project-private-repository-spin-off.md)
- Book asset paths listed in FR-099 § Known Asset Inventory

## Deliverable

Validated inventory, signed ADR-006 outline, E1:S04:T02 marked SUPERSEDED (see § Deliverables below).

## Summary

**Phase 0** of [FR-099](../../../fr-br/FR-099-spin-off-book-epic-to-private-repository.md): validated book-asset inventory, maintainer alignment on Option C migration, and [ADR-006](../../../../architecture/standards-and-adrs/ADR-006-book-project-private-repository-spin-off.md) outline. Mark **E1:S04:T02** superseded (no public Head First rename).

---

## Deliverables

1. Validated book asset inventory (paths, sensitivity, private-retain / public-genesis / redact) — see [FR-099 § Known Asset Inventory](../../../fr-br/FR-099-spin-off-book-epic-to-private-repository.md).
2. [ADR-006](../../../../architecture/standards-and-adrs/ADR-006-book-project-private-repository-spin-off.md) accepted as preferred migration outline.
3. **E1:S04:T02** documented as SUPERSEDED in Story 004 and ADR-006.

---

## Acceptance criteria (phase scope)

- [x] **AC1 (partial):** Inventory documented in FR-099 / ADR-006 (executor re-validates before Phase 2 if tree drifted).
- [x] **AC2:** ADR-006 outline accepted; **E1:S04:T02** SUPERSEDED in Story 004.

---

## FR-099 requirement mapping

| Requirement | Status |
|-------------|--------|
| FR-099-F1 | ✅ Inventory (initial matrix in FR-099) |
| FR-099-F2 | ✅ ADR-006 outline approved |
| FR-099-F7 | ✅ E1:S04:T02 superseded |

---

## Version Anchor

**Forensic marker:** `✅ COMPLETE (v0.1.4.3+3)` — Kanban documentation setup (`RW -k`, `--art`).

## Next phase

→ [E1:S04:T04 — Phase 1 privatize + rename](T04-fr099-phase1-privatize-rename-hf-ai-dev-kit.md)

---

## References

- [FR-099](../../../fr-br/FR-099-spin-off-book-epic-to-private-repository.md)
- [Story 004](../Story-004-repository-branding-and-renaming.md)
- [Epic-1.md](../Epic-1.md)
