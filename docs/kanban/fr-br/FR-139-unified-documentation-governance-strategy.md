---
lifecycle: proposed
ttl_days: null
created_at: 2026-06-23T16:00:00Z
expires_at: null
housekeeping_policy: keep
---

# FR-139: Unified documentation governance strategy (policy–SOP–template alignment)

**Type:** Feature Request (FR)  
**ID:** FR-139  
**Submitted:** 2026-06-23  
**Submitted By:** Operator (documentation structure / policy analysis)  
**Priority:** MEDIUM (Could Have — MoSCOW **C**)  
**Status:** ACCEPTED  
**Version:** v0.5.2.7+1  
**Last updated:** 2026-06-23 (v0.5.2.7+1 – RW -k § heading convention scope FR-139-F9/F10)

**Implementing Task:** [E05:S02:T07](../epics/epic-05/story-02-documentation-maintenance-framework/T07-unified-documentation-governance-strategy-fr139.md)

**Related:** [FR-022](FR-022-policy-documents-machine-readable-salience-section.md) · [FR-075](FR-075-icw-durable-planning-artifacts-documentation-system.md) · [FR-096](FR-096-ipw-documentation-phases-update-create-and-housing.md) · [FR-100](FR-100-ipw-adr-necessity-checklist-and-decision-gate.md) · [FR-101](FR-101-consolidate-governance-under-docs-governance.md) · [FR-114](FR-114-split-documentation-surfaces-docusaurus-public-notion-maintainer-kb.md) · [FR-121](FR-121-git-internal-maintainer-kb-oss-documentation-surfaces.md) · [ADR-024](../../architecture/standards-and-adrs/ADR-024-documentation-surfaces-three-surface-model-fr114.md) · [ADR-026](../../architecture/standards-and-adrs/ADR-026-git-internal-maintainer-kb-fr121.md) · [ADR-030](../../architecture/standards-and-adrs/ADR-030-selective-adoption-three-path-model.md) · [documentation-maintenance-policy.md](../../architecture/standards-and-adrs/documentation-maintenance-policy.md) · [DOCUMENTATION_SCHEMA.md](../../governance/standards/DOCUMENTATION_SCHEMA.md)

---

## Summary

Publish a **single documentation governance strategy** under `docs/governance/standards/` that composes existing policies into a coherent operating model: **doc taxonomy** (policy / standard / SOP / template / guide / ADR), **surface map**, **workflow ↔ artifact matrix**, **conflict-resolution ladder**, and **enforcement index** — without duplicating substantive rules already in sibling policies.

---

## Problem Statement

Documentation governance in ai-dev-kit is **distributed but not composed**:

| Layer | Artifact | Gap |
| ----- | -------- | --- |
| Structure | `DOCUMENTATION_SCHEMA.md`, ADR-024/026/030 | No single index tying layout to workflows |
| Maintenance | `documentation-maintenance-policy.md` | Quality/ownership; not linked to templates or SOPs |
| Lifecycle | `doc-lifecycle-policy.md` | Metadata; orthogonal to doc-class taxonomy |
| Planning | `specification-and-planning-artifacts-policy.md` | SoT ladder; not generalized to all workflows |
| Surface authoring | `adopter-public-documentation-authoring.md` | Portal rules only |
| Templates | `packages/frameworks/*/templates/` | No policy-level “when to use which template” |
| SOPs | `vwmp/*-agent-execution.md`, `.claude/commands/*` | Procedural; normative rules live elsewhere |
| Legacy structure | `ultimate-canonical-kb-structure.md` | Older 6-pillar model; potential conflict with current schema |

Operators and agents must **synthesize** these sources ad hoc. Template thinking has matured into a need for an explicit **documentation operating model** aligned with workflow SOPs (IPW, IDW, RW, UKW, KMA, intake).

---

## Requirements

### Functional

- [ ] **FR-139-F1:** Create `docs/governance/standards/documentation-governance-strategy.md` with **policy salience** (FR-022) suitable for agent enforcement hints.
- [ ] **FR-139-F2:** Define **doc taxonomy** with binding vs advisory classes: Policy, Standard, SOP, Template, Guide/Reference, ADR — and placement rules per class.
- [ ] **FR-139-F3:** Publish **workflow ↔ artifact matrix** covering at minimum: IPW/IDW, RW (incl. Step 7), UKW, intake (FR/BR/UXR), KMA, adopter-public authoring — each row: required durable artifacts, template(s), enforcing policy/standard, validators where applicable.
- [ ] **FR-139-F4:** Document **conflict-resolution ladder** (extend pattern from specification-and-planning-artifacts-policy): task doc > linked FR/BR/UXR > IPP/ICW > governance standard > architecture mirror > IDE-local scratch.
- [ ] **FR-139-F5:** **Index, don’t duplicate** — strategy doc links to existing policies; substantive rules remain in authoritative siblings.
- [ ] **FR-139-F6:** Reconcile structure SoT — declare `DOCUMENTATION_SCHEMA.md` + ADRs as layout authority; banner or supersede `ultimate-canonical-kb-structure.md` with explicit pointer to current model.
- [ ] **FR-139-F7:** Update `docs/governance/README.md` hub to list the strategy doc under Standards.
- [ ] **FR-139-F8:** Cross-link from `AGENTS.md` governance/maintainer-kb routing hints (one-line pointer only; no cold-start bloat).
- [ ] **FR-139-F9:** Codify **section-heading convention** — numbered section headings in policy, standard, IPP/ICW, and other governance-class docs use the **§** symbol in the heading text (e.g. `## §1 — Purpose`, `### §2.3 — Acceptance criteria`); prose cross-references use `§N` or `§N–§M` (consistent with existing IPP practice such as §5–§6). **Default:** § in headings for maintainer/workflow SoT surfaces (`docs/governance/**`, `docs/implementation-cycles/**`, `packages/frameworks/**/KB/**`, vwmp SOP guides). **Adopter-public** (`docs/guides/**`, portal allowlist): § allowed when Docusaurus renders correctly; otherwise spell out “Section N” in that surface only (document the exception in the strategy index).
- [ ] **FR-139-F10:** Align `PLAN_DOC_TEMPLATE.md` (and optionally other kanban planning templates) section headings to the § convention where numbered sections are used — without breaking IPW section-ID mapping in `.claude/commands/ipw.md`.

### Non-functional

- [ ] **FR-139-NF1:** Strategy doc stays **index-like** (target ≤ ~200 lines prose; tables encouraged).
- [ ] **FR-139-NF2:** Framework package SoT vs book mirror pattern preserved (ADR-023 style) where doc-lifecycle topics are referenced.
- [ ] **FR-139-NF3:** No new validators required for closure; optional follow-on FR if matrix rows need automated gates.

---

## Acceptance criteria

- [ ] **AC1:** `documentation-governance-strategy.md` exists with policy salience and all FR-139-F2..F4 sections populated, **including § section-heading convention (FR-139-F9)**.
- [ ] **AC2:** Workflow matrix has ≥6 workflow rows with bidirectional links to execution SOPs and templates.
- [ ] **AC3:** `ultimate-canonical-kb-structure.md` carries supersession/mirror banner pointing to `DOCUMENTATION_SCHEMA.md` (or equivalent disposition recorded in strategy doc).
- [ ] **AC4:** `docs/governance/README.md` indexes the strategy; no dangling links from strategy hub.
- [ ] **AC5:** IPW package (`IPP-E05S02T07-*.md`) produced before implementation (`IPW E05:S02:T07`); implementation via `IDW` then `RW`.
- [ ] **AC6:** `PLAN_DOC_TEMPLATE.md` (minimum) uses § in numbered section headings per FR-139-F10, or strategy doc records explicit deferral with rationale.

---

## Scope analysis

**Problem domain:** Documentation governance composition, agent bootstrap, maintainer KB hygiene  
**Affected areas:**

- [x] Documentation (`docs/governance/`, architecture mirrors, optional `AGENTS.md` pointer)
- [ ] Backend/API
- [ ] Framework code (unless follow-on packages strategy into `doc-lifecycle`)

**Estimated complexity:** Medium (3–5 days) — primarily synthesis + link hygiene; low code risk.

**Out of scope:**

- Rewriting `documentation-maintenance-policy.md` or kanban governance bodies
- New Docusaurus allowlist entries (strategy is maintainer/workflow SoT)
- Automated policy-as-code enforcement (OPA/Rego) — future FR

---

## Dependencies

**Blocked by:** None (intake-only)

**Coordinates with:**

- [E07:S01:T13](../epics/epic-07/story-01-codebase-maintenance-tasks/T13-comprehensive-repository-directory-structure-audit-uxr033.md) / [T14](../epics/epic-07/story-01-codebase-maintenance-tasks/T14-comprehensive-repository-file-level-audit-uxr034.md) — directory/file audits may inform matrix rows; strategy can ship first as index
- [FR-125](FR-125-consolidate-e02s16t03-t07-documentation-maintenance-lanes.md) — perpetual doc maintenance lane (E02:S16:T03) for ongoing hygiene after ship

---

## Intake decision

**Intake status:** ACCEPTED  
**Intake date:** 2026-06-23  
**Intake by:** Intake Agent

**Decision flow:**

- [x] Story match: Epic 5, Story 2 (Documentation Maintenance Framework) → Task **E05:S02:T07**

**Assigned to:**

- Epic: E05 — Documentation Management and Maintenance
- Story: E05:S02 — Documentation Maintenance Framework
- Task: E05:S02:T07 — Unified documentation governance strategy (FR-139)

**Kanban links:**

- Epic: [`epic-05.md`](../epics/epic-05/epic-05.md)
- Story: [`story-02-documentation-maintenance-framework.md`](../epics/epic-05/story-02-documentation-maintenance-framework.md)
- Task: [`T07-unified-documentation-governance-strategy-fr139.md`](../epics/epic-05/story-02-documentation-maintenance-framework/T07-unified-documentation-governance-strategy-fr139.md)

---

## References

- Operator analysis (2026-06-23): policy vs SOP vs template layering; five-class taxonomy; workflow matrix pattern
- Operator preference (2026-06-23): **§** in numbered section headings and cross-references (FR-139-F9/F10)
- [policy-salience-schema.md](../../architecture/standards-and-adrs/policy-salience-schema.md)
- [kanban-governance-policy.md](../../governance/kanban/kanban-governance-policy.md) — template + SOP patterns to generalize
