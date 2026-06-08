---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-07T20:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Story 08 – Accessibility

**Status:** IN PROGRESS  
**Priority:** MEDIUM  
**Estimated Effort:** [TBD]  
**Created:** 2026-06-07  
**Last updated:** 2026-06-08 (UKW — Layers 2–5 on kboard W-band; Layer 0–1 COMPLETE)  
**Version:** v0.21.8.3+1  
**Code:** E21S08

---

## Overview

Establish accessibility standards compatibility across ADK surfaces so disabled users can use the framework with minimal friction. Delivery is **layered**: each layer ships independently. **Initial scope is Layer 1 (CLI / terminal)**; web docs, markdown corpora, and agent workflows are deferred to later layers.

**Planning:** [IPP-E21S08T01](../../implementation-cycles/IPP-E21S08T01-accessibility-layered-cli-first.md)

---

## Goal

Deliver a layered accessibility programme:

| Layer | Focus | Tasks | Status |
| ----- | ----- | ----- | ------ |
| **0** | Foundations — CLI audit + strategy ADR | T01, T02 | **COMPLETE** |
| **1** | CLI / terminal remediation | T03, T07 (CLI guide slice) | **COMPLETE** (T03 @ v0.21.8.3+1; T07 CLI slice deferred) |
| **2** | Public Docusaurus portal | T04 | Deferred |
| **3** | Markdown / kanban corpora | T05 | Deferred |
| **4** | Agent workflow outputs | T06 | Deferred |
| **5** | Cross-surface CI + full adopter guide | T07 (remainder) | Deferred |

---

## Task Checklist

- [x] **E21:S08:T01 – CLI accessibility baseline audit (Layer 0)** - COMPLETE (v0.21.8.1+1)
  - Task: [`T01-accessibility-baseline-audit-and-standards-mapping`](story-08-accessibility/T01-accessibility-baseline-audit-and-standards-mapping.md)
  - Report: [adk-accessibility-baseline-layer1-cli.md](../../knowledge/analysis/adk-accessibility-baseline-layer1-cli.md)
  - Planning: [IPP-E21S08T01](../../implementation-cycles/IPP-E21S08T01-accessibility-layered-cli-first.md)
  - FR: [FR-115](../../fr-br/FR-115-accessibility-standards-compatibility.md)
- [x] **E21:S08:T02 – Layered accessibility strategy ADR (Layer 0)** - COMPLETE (v0.21.8.2+1 — ADR-025)
  - Task: [`T02-adk-accessibility-strategy-adr`](story-08-accessibility/T02-adk-accessibility-strategy-adr.md)
  - ADR: [ADR-025](../../../architecture/standards-and-adrs/ADR-025-layered-accessibility-strategy.md)
- [x] **E21:S08:T03 – CLI and terminal output accessibility (Layer 1)** - COMPLETE (v0.21.8.3+1)
  - Task: [`T03-cli-and-terminal-output-accessibility`](story-08-accessibility/T03-cli-and-terminal-output-accessibility.md)
  - Planning: [IPP-E21S08T03](../../implementation-cycles/IPP-E21S08T03-cli-terminal-accessibility.md)
  - Conventions: [cli-accessibility-conventions.md](../../../governance/standards/cli-accessibility-conventions.md)
- [ ] **E21:S08:T04 – Docusaurus public docs portal accessibility (Layer 2)** - DEFERRED
  - Task: [`T04-docusaurus-public-docs-portal-accessibility`](story-08-accessibility/T04-docusaurus-public-docs-portal-accessibility.md)
  - Blocked by: Layer 1 COMPLETE
- [ ] **E21:S08:T05 – Markdown and kanban documentation structure (Layer 3)** - DEFERRED
  - Task: [`T05-markdown-and-kanban-documentation-structure`](story-08-accessibility/T05-markdown-and-kanban-documentation-structure.md)
  - Blocked by: Layer 1 COMPLETE
- [ ] **E21:S08:T06 – Agent workflow blocking-state accessibility (Layer 4)** - DEFERRED
  - Task: [`T06-agent-workflow-blocking-state-accessibility`](story-08-accessibility/T06-agent-workflow-blocking-state-accessibility.md)
  - Blocked by: Layer 1 COMPLETE
- [ ] **E21:S08:T07 – Accessibility testing gates and adopter guidelines (Layer 5)** - DEFERRED
  - Task: [`T07-accessibility-testing-gates-and-adopter-guidelines`](story-08-accessibility/T07-accessibility-testing-gates-and-adopter-guidelines.md)
  - Layer 1 slice: CLI adopter notes ship with T03; full cross-surface gates deferred

---

## Acceptance Criteria

### Layer 0–1 (initial scope)

- [x] CLI baseline audit published with severity-ranked gaps (Layers 2–5 catalogue-only) — T01 @ v0.21.8.1+1
- [x] Layered strategy ADR defines Layer 1 exit criteria — T02 @ v0.21.8.2+1 (ADR-025)
- [x] CLI output uses text labels (not emoji/colour-only); honours `NO_COLOR` — T03 @ v0.21.8.3+1
- [x] FR-108 error shape preserved; plain-language recovery paths — T03 @ v0.21.8.3+1
- [x] CLI accessibility conventions doc + tests green — T03 @ v0.21.8.3+1
- [x] CLI adopter notes in user docs — T03 @ v0.21.8.3+1

### Layers 2–5 (deferred — story-level, not initial scope)

- [ ] Public Docusaurus portal meets agreed WCAG level
- [ ] Markdown/kanban conventions documented
- [ ] RW/UKW/IPW blocking states explicit without icon-only status
- [ ] Cross-surface CI gates and full adopter guide

---

## Dependencies

**Blocked By:**

- None for T01 (exploration / audit)

**Coordinates With:**

- **FR-115:** Accessibility Standards Compatibility
- **FR-006:** Localisation (complementary international access)
- **FR-108:** Install error codes (CLI plain language)
- **FR-114 / E05:S09:** Docusaurus public portal
- **E21:S02:** i18n infrastructure (parallel; do not block)

**Blocks:**

- Inclusive ADK adoption for disabled users
- Compliance-ready documentation for regulated adopters

---

## References

- [ADR-025](../../../architecture/standards-and-adrs/ADR-025-layered-accessibility-strategy.md)
- [IPP-E21S08T01](../../implementation-cycles/IPP-E21S08T01-accessibility-layered-cli-first.md)
- [FR-115](../../fr-br/FR-115-accessibility-standards-compatibility.md)
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/)
- [FR-108](../../fr-br/FR-108-install-setup-error-code-registry-and-emission.md)
- [FR-114](../../fr-br/FR-114-split-documentation-surfaces-docusaurus-public-notion-maintainer-kb.md)

---

_Last updated: 2026-06-07 (Layered plan — CLI-first scope)_
