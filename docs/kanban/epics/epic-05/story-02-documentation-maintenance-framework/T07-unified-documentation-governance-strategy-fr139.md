---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-23T16:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 5, Story 2, Task 7: Unified documentation governance strategy (FR-139)

**Task ID:** E05:S02:T07  
**Status:** TODO  
**Priority:** MEDIUM  
**Last updated:** 2026-06-23 (v0.5.2.7+0 – RW -k kanban documentation setup)  
**Version:** v0.5.2.7+0  
**Code:** E05S02T07

---

## Task ID

**Full Task ID:** `E05:S02:T07`

---

## Scope

Compose distributed documentation policies, standards, templates, and workflow SOPs into a **single governance strategy index** (`documentation-governance-strategy.md`) that answers: what doc classes exist, where they live, which workflows require which artifacts, and how conflicts resolve — **without** rewriting existing policy bodies.

---

## Input

- [FR-139](../../../fr-br/FR-139-unified-documentation-governance-strategy.md)
- Existing policies under `docs/governance/standards/` and `docs/architecture/standards-and-adrs/`
- Workflow SOPs: `.claude/commands/`, `packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/`
- Templates: `packages/frameworks/kanban/templates/`, `packages/frameworks/doc-lifecycle/`

**IPW planning artifact (required before implementation):** `IPP-E05S02T07-*.md` under `docs/implementation-cycles/` — run `IPW E05:S02:T07` in plan mode.

---

## Deliverable

1. `docs/governance/standards/documentation-governance-strategy.md` (with policy salience)
2. Supersession/mirror banner on `ultimate-canonical-kb-structure.md` (or documented disposition in strategy)
3. Hub entry in `docs/governance/README.md`
4. Optional one-line cross-link from `AGENTS.md` maintainer/governance routing

---

## Acceptance Criteria

- [ ] **AC1:** Strategy doc published with doc taxonomy, surface map, workflow ↔ artifact matrix (≥6 workflows), conflict ladder, enforcement index (FR-139 AC1–AC2).
- [ ] **AC2:** Structure SoT reconciliation complete — `DOCUMENTATION_SCHEMA.md` authoritative; legacy 6-pillar doc bannered (FR-139 AC3).
- [ ] **AC3:** Governance README indexes strategy; link check passes (FR-139 AC4).
- [ ] **AC4:** Linked IPP exists; task doc **Planning artifacts** section updated with IPP path after IPW.
- [ ] **AC5:** Shipped via `IDW E05:S02:T07` then `RW E05:S02:T07` (FR-139 AC5).

---

## Approach

1. Run **IPW E05:S02:T07** — inventory existing policies; draft matrix rows; confirm disposition for `ultimate-canonical-kb-structure.md`.
2. **IDW** — author strategy doc (index style); apply banners; update governance README + optional AGENTS pointer.
3. **RW** — version, kanban Step 7, commit/tag (local-complete default).

---

## Dependencies

**Depends on:** None for IPW/intake

**Coordinates with:**

- **E07:S01:T13** — directory structure audit may refine matrix paths later (**Informs**)
- **E07:S01:T14** — file-level audit (**Informs**)

**Blocked by:** IPW gate (P-IPW-GATE) until IPP linked and `IDW` authorized

---

## Cross-Wiring

**Related FR/BR documents:**

- **[FR-139: Unified documentation governance strategy](../../../fr-br/FR-139-unified-documentation-governance-strategy.md)** — **Relationship Type:** Implements — **Context:** Primary intake driver for this task.

- **[FR-101: Consolidate governance under docs/governance](../../../fr-br/FR-101-consolidate-governance-under-docs-governance.md)** — **Relationship Type:** Follows — **Context:** Strategy doc homes under `docs/governance/standards/` per FR-101 topology.

- **[FR-075: ICW durable planning artifacts](../../../fr-br/FR-075-icw-durable-planning-artifacts-documentation-system.md)** — **Relationship Type:** Informs — **Context:** Planning-artifacts SoT ladder is a template row in the workflow matrix.

- **[FR-114 / FR-121](../../../fr-br/FR-114-split-documentation-surfaces-docusaurus-public-notion-maintainer-kb.md)** — **Relationship Type:** Informs — **Context:** Three-surface model is the surface-map section of the strategy.

---

## Planning artifacts

- **IPP:** —No IPP— (run `IPW E05:S02:T07`)

---

## References

- [DOCUMENTATION_SCHEMA.md](../../../../governance/standards/DOCUMENTATION_SCHEMA.md)
- [documentation-maintenance-policy.md](../../../../architecture/standards-and-adrs/documentation-maintenance-policy.md)
- [specification-and-planning-artifacts-policy.md](../../../../governance/standards/specification-and-planning-artifacts-policy.md)
- [adopter-public-documentation-authoring.md](../../../../governance/standards/adopter-public-documentation-authoring.md)
