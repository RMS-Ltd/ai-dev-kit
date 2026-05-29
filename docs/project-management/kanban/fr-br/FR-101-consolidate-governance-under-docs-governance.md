---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-29T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# FR-101: Consolidate governance under `docs/governance/`

**Type:** Feature Request (FR)  
**ID:** FR-101  
**Submitted:** 2026-05-29  
**Submitted By:** Maintainer  
**Priority:** HIGH  
**Severity:** MEDIUM  
**Status:** OPEN (Phase 0 inventory draft — maintainer sign-off pending) — intake **v0.7.1.11+1** (`RW E7:S01:T11`, `--art`)

**Implementing Task:** [E7:S01:T11](../epics/Epic-7/Story-001-codebase-maintenance-tasks/T11-consolidate-governance-under-docs-governance-fr101.md)

**Related:** [FR-039](./FR-039-ai-dev-kit-project-review-and-legacy-clean-up.md), [UXR-013](./UXR-013-project-root-hygiene-and-legacy-docs-rationalization.md), [E7:S01:T10](../epics/Epic-7/Story-001-codebase-maintenance-tasks/T10-project-root-hygiene-and-legacy-docs-rationalization.md), [FR-075](./FR-075-icw-durable-planning-artifacts-documentation-system.md), [ADR-006](../../../architecture/standards-and-adrs/ADR-006-book-project-private-repository-spin-off.md)

---

## Summary

Establish **`docs/governance/`** as the canonical home for **book-active** governance policies (Kanban, versioning, changelog, IPW/IPP packaging) currently scattered across `docs/project-management/rituals/policy/` and `docs/architecture/standards-and-adrs/`. Phase 0 produces a **maintainer-approved inventory**; execution uses **`git mv`**, stubs, and link sweeps—**no moves before sign-off**.

---

## Problem Statement

Governance policies for the maintainer book workspace are split across rituals, architecture, and Kanban trees. Adopters and agents lack a single navigation hub; duplicate or stale paths (`rituals/policy/` vs packaged framework SoT) increase link rot and onboarding friction after [FR-099](./FR-099-spin-off-book-epic-to-private-repository.md) repository separation.

---

## Scope

### In scope

1. **Inventory (Phase 0)** — Every governance-related document in the book repo with disposition: **MOVE**, **STUB**, **INDEX** (cross-link only), or **OUT** (explicitly excluded).
2. **Execution (Phase 2, post-IPW)** — Populate `docs/governance/` by relocating book-active policies; merge `rituals/policy/README.md` into `governance/kanban/README.md`; repository-wide link sweep.
3. **Verification (Phase 3)** — `rg` hygiene for legacy paths; update docs-scope / layout verifiers where applicable.

### Out of scope

- Kanban boards (`kboard.md`, `fbuboard.md`), epic/story/task trees, `fr-br/` intake queue (except promoted principles).
- Maintenance runbooks under `docs/maintenance/` (index-only references).
- `vendor/` and packaged framework **canonical SoT** under `packages/frameworks/` (book copy may stub → framework).

---

## Functional Requirements

- [ ] **FR-101-F1 (Phase 0):** [GOVERNANCE-REHOUSING-INVENTORY.md](../../../governance/GOVERNANCE-REHOUSING-INVENTORY.md) complete with disposition table and **maintainer-approved** sign-off row before any `git mv`.
- [ ] **FR-101-F2 (Phase 1):** Optional [IPP-E7S01T11](../../../implementation-cycles/) when phased moves + validation are needed (IPW before implementation).
- [ ] **FR-101-F3 (Phase 2):** Execute MOVE rows — target layout:
  - `docs/governance/kanban/` — book Kanban governance policy
  - `docs/governance/standards/` — versioning, changelog archival, specification/planning, IPW vs ICW matrix
  - `docs/governance/README.md` — hub + navigation
- [ ] **FR-101-F4 (Phase 2):** INDEX rows remain in place with prominent cross-links from `docs/governance/README.md` (e.g. ADR-006, workflow-flaws / versioning-error reference guides).
- [ ] **FR-101-F5 (Phase 2):** Resolve **BIDIRECTIONAL_WIRING_PRINCIPLE** placement — linked from `fbu-open-taskless-queue.md` and templates; inventory decides **restore**, **move to governance/principles/**, or **repoint** (see inventory §1).
- [ ] **FR-101-F6 (Phase 3):** `rg 'kanban-board-guide|rituals/policy'` on active surfaces returns stub-only or zero false positives; `.cursorrules`, `.claude/commands/*`, `kboard` guide, and top-level `fr-br/` links updated.

---

## Non-Functional Requirements

- [ ] **FR-101-NF1:** Stubs at old paths retain “moved to” banners for ≥ one release cycle (or until layout verifier passes).
- [ ] **FR-101-NF2:** Framework package policies remain authoritative for adopters; book stubs must cite `packages/frameworks/kanban/policies/` where applicable.

---

## Acceptance Criteria (intake / closure)

- [ ] **AC0:** [GOVERNANCE-REHOUSING-INVENTORY.md](../../../governance/GOVERNANCE-REHOUSING-INVENTORY.md) complete and **maintainer-approved** before any `git mv`.
- [ ] **AC1:** FR-101-F1..F6 satisfied (or explicitly deferred in inventory with rationale).
- [ ] **AC2:** IPW package linked from task when execution proceeds (`IPP-E7S01T11-*.md`).
- [ ] **AC3:** `docs/maintenance/book-repo-docs-scope.md` (create or update) lists `docs/governance/` as **KEEP**.
- [ ] **AC4:** No broken governance links from active book surfaces (`fr-br/`, `kanban-board-guide.md`, `.cursorrules`, `.claude/commands/*`).

---

## Rehousing summary (detail in inventory)

| Disposition | Examples |
|-------------|----------|
| **MOVE → `docs/governance/`** | `rituals/policy/kanban-governance-policy.md` → `governance/kanban/`; `dev-kit-versioning-policy.md`, `changelog-archival-policy.md`, `specification-and-planning-artifacts-policy.md`, `dev-kit-ipw-ipp-vs-icw-artifacts.md` → `governance/standards/`; merge `rituals/policy/README.md` → `governance/kanban/README.md` |
| **INDEX (stay, cross-link)** | `ADR-006`, `workflow-flaws-reference-guide.md`, `versioning-error-reference-guide.md` |
| **FIX** | `BIDIRECTIONAL_WIRING_PRINCIPLE.md` — confirm canonical path under `fr-br/` vs governance/principles |
| **OUT** | Boards, epics, `fr-br/` intake (except promoted principles), maintenance runbooks, `vendor/` |

---

## Deliverable phases

| Phase | Output |
|-------|--------|
| **0 — Inventory** | [GOVERNANCE-REHOUSING-INVENTORY.md](../../../governance/GOVERNANCE-REHOUSING-INVENTORY.md) |
| **1 — IPW** | Optional `IPP-E7S01T11-*.md` |
| **2 — Execute** | `git mv` per inventory; stubs; sign-off table completed |
| **3 — Verify** | Link/stub verification; docs scope updated |

---

## References

- [docs/governance/README.md](../../../governance/README.md)
- [GOVERNANCE-REHOUSING-INVENTORY.md](../../../governance/GOVERNANCE-REHOUSING-INVENTORY.md)
- [docs/architecture/README.md](../../../architecture/README.md)
- [packages/frameworks/kanban/policies/kanban-governance-policy.md](../../../../packages/frameworks/kanban/policies/kanban-governance-policy.md) (framework SoT)
- Task: [E7:S01:T11](../epics/Epic-7/Story-001-codebase-maintenance-tasks/T11-consolidate-governance-under-docs-governance-fr101.md)
