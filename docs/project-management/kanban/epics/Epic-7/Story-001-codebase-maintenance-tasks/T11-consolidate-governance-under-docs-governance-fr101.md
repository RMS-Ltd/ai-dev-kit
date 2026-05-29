---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-29T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 7, Story 1, Task 11: Consolidate governance under `docs/governance/` (FR-101)

**Task ID:** E7:S01:T11  
**Status:** IN PROGRESS  
**Priority:** HIGH  
**Last updated:** 2026-05-29 (IPW — IPP filed)  
**Started:** 2026-05-29  
**Completed:** [TBD]  
**Version:** v0.7.1.11+5  
**Code:** E7S01T11

---

## Task ID

**Full Task ID:** `E7:S01:T11`

---

## Scope

Deliver [FR-101](../../../fr-br/FR-101-consolidate-governance-under-docs-governance.md): Phase 0 governance inventory and maintainer sign-off; optional IPW; phased `git mv` into `docs/governance/`; stubs and link sweep; verification per FR-101 AC0–AC4.

**Problem:** Book-active governance policies are scattered across `rituals/policy/` and `architecture/standards-and-adrs/` with no single hub.

**Solution:** Inventory-first rehousing per [GOVERNANCE-REHOUSING-INVENTORY.md](../../../../governance/GOVERNANCE-REHOUSING-INVENTORY.md); execute only after sign-off and IPW when needed.

---

## Input

Publication Status: NOT_APPLICABLE (single consolidated IPP — see [`IPP-E7S01T11-consolidate-governance-under-docs-governance.md`](../../../../implementation-cycles/IPP-E7S01T11-consolidate-governance-under-docs-governance.md))

Publication N/A Reason: FR-042 consolidated IPP packages specification, test design, and implementation plan in one durable artifact under `docs/implementation-cycles/`; no separate ICW trio or Docusaurus publication required (BR-066).

- **[IPP-E7S01T11](../../../../implementation-cycles/IPP-E7S01T11-consolidate-governance-under-docs-governance.md)** — specification, test design, implementation plan (IPW)
- **[FR-101](../../../fr-br/FR-101-consolidate-governance-under-docs-governance.md)** — requirements and acceptance criteria
- **[GOVERNANCE-REHOUSING-INVENTORY.md](../../../../governance/GOVERNANCE-REHOUSING-INVENTORY.md)** — Phase 0 SoT (draft at intake)
- [kanban-governance-policy.md](../../../rituals/policy/kanban-governance-policy.md) (current book path)
- [docs/architecture/README.md](../../../../architecture/README.md)
- [book-repo-adk-removal-inventory.md](../../../../maintenance/fr099-phase4-rewire-and-verify.md) — inventory methodology (FR-099)
- **IPW planning artifact:** [`IPP-E7S01T11-consolidate-governance-under-docs-governance.md`](../../../../implementation-cycles/IPP-E7S01T11-consolidate-governance-under-docs-governance.md) (filed 2026-05-29)

---

## Deliverable

| Phase | Output |
|-------|--------|
| **0 — Inventory** | Completed [GOVERNANCE-REHOUSING-INVENTORY.md](../../../../governance/GOVERNANCE-REHOUSING-INVENTORY.md) with maintainer sign-off |
| **1 — IPW** | Optional `IPP-E7S01T11-*.md` if execution is multi-wave |
| **2 — Execute** | `git mv` per inventory; stubs; sign-off table marked done |
| **3 — Verify** | Legacy path `rg` clean or stub-only; `book-repo-docs-scope.md` updated |

---

## Acceptance Criteria

- [ ] **AC0:** Inventory complete and **maintainer-approved** before any `git mv`.
- [ ] **AC1:** [FR-101](../../../fr-br/FR-101-consolidate-governance-under-docs-governance.md) functional requirements satisfied.
- [x] **AC2:** IPP linked from this task when execution proceeds. *(IPP-E7S01T11 filed — implementation still requires AC0 sign-off.)*
- [ ] **AC3:** `docs/maintenance/book-repo-docs-scope.md` lists `docs/governance/` as **KEEP**.
- [ ] **AC4:** No broken governance links from `fr-br/`, `kanban-board-guide.md`, `.cursorrules`, `.claude/commands/*`.

---

## Approach

1. Finalize Phase 0 inventory (scan repo; classify MOVE / STUB / INDEX / OUT).
2. Obtain maintainer sign-off on inventory table.
3. Run `IPW E7:S01:T11` if multi-phase execution or high link blast radius.
4. Execute moves wave-by-wave; add stubs; sweep links.
5. Update docs scope + run verification commands from FR-101-F6.
6. Close via **RW E7:S01:T11** after user verification.

---

## Dependencies

**Depends On:**

- Maintainer approval of Phase 0 inventory (blocking for Phase 2)

**Coordinates With:**

- [E7:S01:T10](T10-project-root-hygiene-and-legacy-docs-rationalization.md) — root hygiene; avoid conflicting moves

**Blocked By:**

- Explicit implementation authorization after IPW (when IPW required)

**Parallel Development Candidacy:** Safe for Phase 0 inventory work in parallel with other doc tasks; Phase 2 blocked on sign-off.

---

## Cross-Wiring

**Related BR/FR Documents:**

- **[FR-101](../../../fr-br/FR-101-consolidate-governance-under-docs-governance.md)** — **Informs** — Primary requirement source.
- **[FR-039](../../../fr-br/FR-039-ai-dev-kit-project-review-and-legacy-clean-up.md)** — **Coordinates With** — Broader legacy doc review.
- **[UXR-013](../../../fr-br/UXR-013-project-root-hygiene-and-legacy-docs-rationalization.md)** — **Coordinates With** — Root-level discoverability.

**Related Tasks:**

- **[E7:S01:T10](T10-project-root-hygiene-and-legacy-docs-rationalization.md)** — **Coordinates With** — Root vs governance tree boundaries (T10 cross-wires back to this task).

---

## Related Work

- [E7:S01: Codebase Maintenance Tasks](../Story-001-codebase-maintenance-tasks.md)
- [docs/governance/README.md](../../../../governance/README.md)

---

## Version Anchor

*(Set on first RW completing implementation.)*

---

## References

- [IPP-E7S01T11-consolidate-governance-under-docs-governance.md](../../../../implementation-cycles/IPP-E7S01T11-consolidate-governance-under-docs-governance.md)
- [GOVERNANCE-REHOUSING-INVENTORY.md](../../../../governance/GOVERNANCE-REHOUSING-INVENTORY.md)
- [FR-101](../../../fr-br/FR-101-consolidate-governance-under-docs-governance.md)
- `packages/frameworks/kanban/policies/kanban-governance-policy.md`

---

## Next Actions

- [ ] Complete and obtain sign-off on Phase 0 inventory.
- [x] Run `IPW E7:S01:T11` when ready for execution planning.
- [ ] Obtain maintainer sign-off on inventory (AC0) before `git mv`.
- [ ] Do not run `git mv` until AC0 is satisfied.
