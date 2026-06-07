---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-07T20:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Feature Request: Accessibility Standards Compatibility (Inclusive ADK)

**Type:** Feature Request (FR)  
**Submitted:** 2026-06-07  
**Submitted By:** User  
**Priority:** MEDIUM  
**Status:** IN PROGRESS

**Implementing Epic:** [Epic 21 – Internationalisation and Localisation](../epics/epic-21/Epic-21.md)

**Implementing Story:** [E21:S08 – Accessibility](../epics/epic-21/story-08-accessibility.md)

**Implementing tasks:** [E21:S08:T01](../epics/epic-21/story-08-accessibility/T01-accessibility-baseline-audit-and-standards-mapping.md) **v0.21.8.1+1** COMPLETE (CLI baseline audit) · E21:S08:T02–T07 TODO / DEFERRED

**Planning:** [IPP-E21S08T01](../../implementation-cycles/IPP-E21S08T01-accessibility-layered-cli-first.md) — **layered delivery; initial scope = Layer 1 (CLI)**

---

## Summary

Make AI Dev Kit compatible with recognised accessibility standards so disabled users can install, configure, learn, and operate ADK workflows with minimal friction.

---

## Description

### Problem Statement

Epic 21 improves **international** access (language, locale, culture). A separate dimension is **disability access**: users who rely on assistive technology, keyboard-only interaction, high-contrast or reduced-motion preferences, plain-language error recovery, or cognitive-load-friendly workflow states.

Today ADK spans multiple surfaces — CLI (`ai-dev-kit`), installers, Docusaurus public docs, markdown/kanban corpora, and agent-driven workflows (RW/UKW/IPW) — without a unified accessibility baseline, conformance target, or validation gates.

### Use Case

1. A screen-reader user runs `ai-dev-kit init` and receives structured, unambiguous prompts and error text (not colour-only or icon-only signals).
2. A keyboard-only user navigates the public documentation portal without mouse traps or inaccessible controls.
3. A user with cognitive fatigue triggers RW; the workflow reports a **clear blocking step**, required operator action, and completion state (aligned with existing workflow atomicity rules).
4. An adopter team audits their ADK-derived project against documented a11y guidelines and CI checks.

### Who Would Benefit

- Disabled developers and operators using ADK directly
- Teams with accessibility compliance obligations (WCAG, EN 301 549, Section 508)
- Adopters who inherit ADK CLI, docs, and workflow patterns
- Maintainers who need auditable standards instead of ad hoc fixes

---

## Requirements

### Functional Requirements

- [ ] **Baseline audit** — Inventory ADK surfaces and map gaps to WCAG 2.2 (and applicable EN 301 549 / Section 508 where relevant)
- [ ] **Accessibility strategy ADR** — Target conformance level per surface; validation approach; exceptions process
- [ ] **CLI / terminal** — Plain-language errors ([FR-108](FR-108-install-setup-error-code-registry-and-emission.md) alignment); no information conveyed by colour alone; predictable prompt order
- [ ] **Documentation portal** — Docusaurus public site meets agreed WCAG level (keyboard, contrast, semantics, focus)
- [ ] **Markdown / kanban corpora** — Semantic heading hierarchy, descriptive link text, diagram alt text conventions
- [ ] **Agent workflows** — Blocking/failure states readable without visual status icons; step progress explicit
- [ ] **Testing & guidelines** — Automated checks where feasible; manual checklist; adopter-facing accessibility guide

### Non-Functional Requirements

- [ ] Progress without blocking Epic 21 i18n delivery (parallel story E21:S08)
- [ ] Changes backward-compatible for existing adopters unless major version policy applies
- [ ] Validation integrated into existing CI lanes where practical ([FR-112](FR-112-perpetual-github-ci-and-security-health-lanes.md))

---

## Scope Analysis

**Problem Domain:** Inclusive design and accessibility conformance across ADK delivery surfaces.

**Affected Areas:**

- [x] CLI / terminal (`ai-dev-kit`, installers)
- [x] Frontend/UI (Docusaurus public docs — [FR-114](FR-114-split-documentation-surfaces-docusaurus-public-notion-maintainer-kb.md))
- [x] Documentation (markdown, kanban, user guides)
- [x] Agent workflows (RW, UKW, IPW blocking semantics)
- [x] Testing / CI gates
- [ ] Database/Schema

**Out of scope (initial story):**

- Full localisation of assistive-technology-specific content (coordinates with E21:S02–S07, not duplicate)
- Third-party IDE accessibility (Cursor/VS Code product surface)
- Legal certification or third-party audit procurement

---

## Dependencies

**Coordinates With:**

- [FR-006](FR-006-localization-language-selection-uk-us-english.md) — international access (complementary)
- [FR-108](FR-108-install-setup-error-code-registry-and-emission.md) — structured install errors
- [FR-114](FR-114-split-documentation-surfaces-docusaurus-public-notion-maintainer-kb.md) — public docs surface
- [E05:S09](epics/epic-05/story-09-docusaurus-documentation-portal.md) — Docusaurus portal delivery

**Blocked By:**

- None for T01 audit (exploration)

---

## Acceptance Criteria (Story Level)

- [ ] Accessibility baseline report published with severity-ranked gaps
- [ ] ADR defines conformance targets and validation per surface
- [ ] At least one surface improved with tests proving the pattern
- [ ] Adopter accessibility guidelines linked from user docs

---

## Delivery layers (CLI-first)

| Layer | Scope | Tasks | Status |
| ----- | ----- | ----- | ------ |
| 0 | CLI audit + strategy ADR | T01, T02 | Active |
| 1 | CLI remediation | T03 | Active (after Layer 0) |
| 2 | Docusaurus portal | T04 | Deferred |
| 3 | Markdown / kanban | T05 | Deferred |
| 4 | Agent workflows | T06 | Deferred |
| 5 | Cross-surface CI + guide | T07 | Deferred |

## Notes

- Distinct from Epic 21 "international accessibility" wording in early epic docs — this FR addresses **disability access (a11y)** explicitly.
- **Initial scope restricted to CLI** (Layers 0–1). Layers 2–5 filed but deferred until Layer 1 COMPLETE.
- Planning: [IPP-E21S08T01](../../implementation-cycles/IPP-E21S08T01-accessibility-layered-cli-first.md)
