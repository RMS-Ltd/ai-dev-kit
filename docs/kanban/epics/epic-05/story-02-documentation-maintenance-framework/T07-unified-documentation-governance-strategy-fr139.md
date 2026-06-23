---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-23T16:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 5, Story 2, Task 7: Unified documentation governance strategy (FR-139)

**Task ID:** E05:S02:T07  
**Status:** COMPLETE  
**Priority:** MEDIUM  
**Last updated:** 2026-06-23 (v0.5.2.7+2 – IDW/MWF delivery FR-139)  
**Version:** v0.5.2.7+2  
**Version Anchor:** v0.5.2.7+2  
**Code:** E05S02T07

---

## Task ID

**Full Task ID:** `E05:S02:T07`

---

## Scope

Compose distributed documentation policies, standards, templates, and workflow SOPs into a **single governance strategy index** (`documentation-governance-strategy.md`) that answers: what doc classes exist, where they live, which workflows require which artifacts, how conflicts resolve, and **how numbered sections are headed (§ convention)** — **without** rewriting existing policy bodies.

---

## Input

- [FR-139](../../../fbu/FR-139-unified-documentation-governance-strategy.md)
- Existing policies under `docs/governance/standards/` and `docs/architecture/standards-and-adrs/`
- Workflow SOPs: `.claude/commands/`, `packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/`
- Templates: `packages/frameworks/kanban/templates/`, `packages/frameworks/doc-lifecycle/`

- Operator preference: numbered section headings use **§** (e.g. `## §1 — Purpose`); cross-refs `§N` / `§N–§M` — codify in strategy (FR-139-F9); align `PLAN_DOC_TEMPLATE.md` (FR-139-F10)

**IPW planning artifact (required before implementation):** `IPP-E05S02T07-*.md` under `docs/implementation-cycles/` — run `IPW E05:S02:T07` in plan mode.

---

## Deliverable

1. `docs/governance/standards/documentation-governance-strategy.md` (with policy salience; **§ section-heading convention**)
2. Supersession/mirror banner on `ultimate-canonical-kb-structure.md` (or documented disposition in strategy)
3. Hub entry in `docs/governance/README.md`
4. Optional one-line cross-link from `AGENTS.md` maintainer/governance routing
5. `PLAN_DOC_TEMPLATE.md` — §-prefixed numbered section headings (FR-139-F10)

---

## Acceptance Criteria

- [x] **AC1:** Strategy doc published with doc taxonomy, surface map, workflow ↔ artifact matrix (≥6 workflows), conflict ladder, enforcement index, **§ heading convention** (FR-139 AC1).
- [x] **AC2:** Structure SoT reconciliation complete — `DOCUMENTATION_SCHEMA.md` authoritative; legacy 6-pillar doc bannered (FR-139 AC3).
- [x] **AC3:** Governance README indexes strategy; link check passes (FR-139 AC4).
- [x] **AC4:** Linked IPP exists; task doc **Planning artifacts** section updated with IPP path after IPW.
- [x] **AC5:** Shipped via `IDW E05:S02:T07` then `RW E05:S02:T07` (FR-139 AC5).
- [x] **AC6:** `PLAN_DOC_TEMPLATE.md` uses § in numbered section headings (FR-139-F10 / AC6).

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

- **[FR-139: Unified documentation governance strategy](../../../fbu/FR-139-unified-documentation-governance-strategy.md)** — **Relationship Type:** Implements — **Context:** Primary intake driver for this task.

- **[FR-101: Consolidate governance under docs/governance](../../../fbu/FR-101-consolidate-governance-under-docs-governance.md)** — **Relationship Type:** Follows — **Context:** Strategy doc homes under `docs/governance/standards/` per FR-101 topology.

- **[FR-075: ICW durable planning artifacts](../../../fbu/FR-075-icw-durable-planning-artifacts-documentation-system.md)** — **Relationship Type:** Informs — **Context:** Planning-artifacts SoT ladder is a template row in the workflow matrix.

- **[FR-114 / FR-121](../../../fbu/FR-114-split-documentation-surfaces-docusaurus-public-notion-maintainer-kb.md)** — **Relationship Type:** Informs — **Context:** Three-surface model is the surface-map section of the strategy.

---

## Planning artifacts

- **IPP:** [IPP-E05S02T07-unified-documentation-governance-strategy-fr139.md](../../../../implementation-cycles/IPP-E05S02T07-unified-documentation-governance-strategy-fr139.md)

---

## References

- [DOCUMENTATION_SCHEMA.md](../../../../governance/standards/DOCUMENTATION_SCHEMA.md)
- [documentation-maintenance-policy.md](../../../../architecture/standards-and-adrs/documentation-maintenance-policy.md)
- [specification-and-planning-artifacts-policy.md](../../../../governance/standards/specification-and-planning-artifacts-policy.md)
- [adopter-public-documentation-authoring.md](../../../../governance/standards/adopter-public-documentation-authoring.md)
