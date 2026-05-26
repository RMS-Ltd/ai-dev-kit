---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-26T16:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 1, Story 4, Task 6: FR-099 Phase 3 — Public ai-dev-kit rebirth

**Task ID:** E1:S04:T06  
**FR-099 phase:** **3**  
**Status:** TODO  
**Priority:** HIGH  
**Estimated Effort:** Medium  
**Created:** 2026-05-26  
**Last updated:** 2026-05-26 (v0.1.4.6+1 – Kanban documentation setup)
**Code:** E1S04T06

**Upstream:** [FR-099 — Spin off book epic to a private repository](../../../fr-br/FR-099-spin-off-book-epic-to-private-repository.md)  
**Planning package:** [IPP-E1S04-fr099-book-private-public-migration.md](../../../../implementation-cycles/IPP-E1S04-fr099-book-private-public-migration.md) — **§4.4 Phase 3**  
**Depends on:** [E1:S04:T05 — Phase 2 genesis](T05-fr099-phase2-book-extraction-genesis.md) ✅  
**Blocks:** [E1:S04:T07 — Phase 4 rewire](T07-fr099-phase4-rewire-and-verify.md)  
**Migration ADR:** [ADR-006](../../../../architecture/standards-and-adrs/ADR-006-book-project-private-repository-spin-off.md)

---

## Input

- [FR-099](../../../fr-br/FR-099-spin-off-book-epic-to-private-repository.md)
- [E1:S04:T05 — Phase 2 genesis](T05-fr099-phase2-book-extraction-genesis.md) ✅
- [ADR-006](../../../../architecture/standards-and-adrs/ADR-006-book-project-private-repository-spin-off.md) open questions (orphan vs genesis-SHA)

## Deliverable

New public `earlution/ai-dev-kit` repository from verified genesis commit.

## Summary

**Phase 3:** Create **new public** [`earlution/ai-dev-kit`](https://github.com/earlution/ai-dev-kit) from the genesis commit (orphan root or genesis-SHA bootstrap). Public history must **not** include pre-genesis objects with book IP.

---

## Deliverables

1. Public repo created from verified genesis SHA (no `docs/book-proj/`, no `Epic-24/`).
2. Default branch policy documented (framework-only tree).
3. Open questions in ADR-006 resolved for bootstrap shape (orphan vs genesis-SHA branch).

---

## Acceptance criteria (phase scope)

- [ ] **AC4:** New public genesis tree: no `docs/book-proj/`, no `Epic-24/`, no Head First obligation in vision/README.

---

## FR-099 requirement mapping

| Requirement | Status |
|-------------|--------|
| FR-099-F5 | 📋 TODO |

---

## Version Anchor

**Release marker (TODO):** `v0.1.4.6+1` — Kanban documentation setup (`RW -k`, `--art`). **Forensic on COMPLETE:** `✅ COMPLETE (v0.1.4.6+N)`.

## IPW gate

**Planning:** [IPP-E1S04-fr099-book-private-public-migration.md](../../../../implementation-cycles/IPP-E1S04-fr099-book-private-public-migration.md) filed (shared across T03–T07). Phase 3 execution still requires explicit authorization (`implement` or `RW E1:S04:T06`).

---

## Coordination

- [IPP-E6S09T06 §8 Wave E](../../../../implementation-cycles/IPP-E6S09T06-ecc-harness-phases-2-5-fr098.md) — preferred ECC real-world test venue **after** this phase.

---

## References

- [IPP-E1S04-fr099-book-private-public-migration.md](../../../../implementation-cycles/IPP-E1S04-fr099-book-private-public-migration.md)
- [FR-099](../../../fr-br/FR-099-spin-off-book-epic-to-private-repository.md)
- [ADR-006](../../../../architecture/standards-and-adrs/ADR-006-book-project-private-repository-spin-off.md)
