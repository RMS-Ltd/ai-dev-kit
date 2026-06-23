---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-07T22:00:00Z
expires_at: null
housekeeping_policy: keep
---

# ADR-025: Layered Accessibility Strategy (CLI-First)

**Status:** Accepted  
**Date:** 2026-06-07  
**Deciders:** User (Ruari Mears)  
**Implementing task:** [E21:S08:T02](../../project-management/kanban/epics/epic-21/story-08-accessibility/T02-adk-accessibility-strategy-adr.md)  
**Origin FR:** [FR-115](../../project-management/kanban/fbu/FR-115-accessibility-standards-compatibility.md)  
**Baseline evidence:** [adk-accessibility-baseline-layer1-cli.md](../../knowledge/analysis/adk-accessibility-baseline-layer1-cli.md)  
**Planning package:** [IPP-E21S08T01](../../implementation-cycles/IPP-E21S08T01-accessibility-layered-cli-first.md)

---

## Context

Epic 21 addresses **international** access (language, locale, culture) via E21:S01–S07. **Disability access (a11y)** is a separate dimension: assistive technology, keyboard-only use, reduced cognitive load, and plain-language recovery.

ADK spans multiple surfaces — CLI (`ai-dev-kit`), installers, Docusaurus public docs, markdown/kanban corpora, and agent-driven workflows. [E21:S08:T01](../../project-management/kanban/epics/epic-21/story-08-accessibility/T01-accessibility-baseline-audit-and-standards-mapping.md) audited the **CLI** and catalogued deferred layers. Primary CLI gaps: emoji-only `print_*` helpers, no `NO_COLOR`, inconsistent stderr routing, ad hoc Unicode in migrate/remove. **FR-108** install errors are already text-first and must be preserved.

Attempting full WCAG 2.2 AA across all surfaces in one release would block i18n delivery and dilute focus. A **layered programme** ships value incrementally with explicit gates.

---

## Decision

Adopt a **six-layer accessibility programme** (Layers 0–5). **Initial execution scope: Layers 0–1 (CLI / terminal only).** Layers 2–5 are filed on the kanban board but **deferred** until Layer 1 COMPLETE.

### Layer model

| Layer | Name | Tasks | Conformance target | Validation |
| ----- | ---- | ----- | ------------------ | ---------- |
| **0** | Foundations | T01, T02 | Programme architecture | Audit report + this ADR |
| **1** | CLI / terminal | T03, T07 (CLI slice) | EN 301 549 Clause 11.8 + WCAG 2.2 analogues for terminal | `pytest` + conventions doc |
| **2** | Public web docs | T04 | WCAG 2.2 Level AA | axe/pa11y + manual keyboard audit |
| **3** | Markdown corpora | T05 | Authoring conventions (semantic structure) | Lint + sample audit |
| **4** | Agent workflows | T06 | Plain-text blocking states | Doc + agent output review |
| **5** | Cross-surface | T07 (remainder) | Programme-wide gates | CI lanes + adopter guide |

### Layer 1 ship gate (mandatory before Layer 2+)

Layer 2+ work **must not** start until all Layer 1 exit criteria below are COMPLETE and released via RW on **E21:S08:T03**.

| # | Criterion | Owner |
| - | --------- | ----- |
| L1-1 | `print_*` emit redundant text labels (`Error:`, `Success:`, `Warning:`, `Info:`) | T03 |
| L1-2 | `NO_COLOR` env suppresses emoji and ANSI | T03 |
| L1-3 | Root `--no-color` flag mirrors `NO_COLOR` | T03 |
| L1-4 | `print_warning` routes to stderr (or documented exception with text label) | T03 |
| L1-5 | Migrate/remove flows use ASCII status markers (`OK`, `FAIL`, `-`) not `✓`/`✗`/`•` | T03 |
| L1-6 | FR-108 `format_banner` unchanged | T03 |
| L1-7 | `tests/test_cli_accessibility.py` green | T03 |
| L1-8 | `docs/governance/standards/cli-accessibility-conventions.md` published | T03 |

### Standards mapping by layer

| Layer | Primary standard | Notes |
| ----- | ---------------- | ----- |
| 1 (CLI) | EN 301 549 Clause 11.8; WCAG 1.4.1 / 4.1.3 by analogy | Terminal is not a web page — do not apply full WCAG AA checklist to CLI |
| 2 (Web) | WCAG 2.2 Level AA | Docusaurus theme + content |
| 3 (Markdown) | WCAG 1.3.1 / 2.4.4 authoring guidance | Kanban emoji status icons addressed in Layer 3 |
| 4 (Agents) | Cognitive + AT readability | Complements existing RW atomicity rules |
| 5 (Programme) | Combined gates | Coordinates FR-112 CI lanes |

### Relationship to existing ADRs

| ADR / FR | Relationship |
| -------- | ------------ |
| [ADR-016](ADR-016-install-setup-error-code-taxonomy.md) / [FR-108](../../project-management/kanban/fbu/FR-108-install-setup-error-code-registry-and-emission.md) | **Preserve** — CLI errors remain registry-driven text banners |
| [ADR-024](ADR-024-i18n-framework-strategy.md) / [FR-006](../../project-management/kanban/fbu/FR-006-localization-language-selection-uk-us-english.md) | **Coordinate** — locale prompts must stay a11y-safe; parallel track |
| [FR-114](../../project-management/kanban/fbu/FR-114-split-documentation-surfaces-docusaurus-public-notion-maintainer-kb.md) | Layer 2 coordinates with E05:S09 |

### Exception process

1. Document exception in task doc with user-visible impact statement.
2. Link exception to WCAG / EN 301 549 clause being deferred.
3. Require compensating measure (e.g. text label when emoji retained).
4. No blanket emoji-only status exceptions in Layer 1.

---

## Consequences

### Positive

- CLI users with screen readers get predictable text-first output in Layer 1.
- i18n (S02) and a11y (S08) proceed in parallel without cross-blocking.
- Clear RW boundaries per layer/task.
- Regulated adopters gain auditable layer conformance matrix.

### Negative / trade-offs

- Full web WCAG AA deferred — public portal gaps remain until Layer 2.
- Kanban board emoji status icons remain until Layer 3.
- Agent workflow emoji in RW output remains until Layer 4.

### Follow-on tasks

| Task | Layer | Trigger after gate |
| ---- | ----- | ------------------ |
| E21:S08:T03 | 1 | Immediately (T02 COMPLETE) |
| E21:S08:T04 | 2 | Layer 1 COMPLETE |
| E21:S08:T05 | 3 | Layer 1 COMPLETE |
| E21:S08:T06 | 4 | Layer 1 COMPLETE |
| E21:S08:T07 | 5 | Layers 2–4 materially addressed |

---

## References

- [adk-accessibility-baseline-layer1-cli.md](../../knowledge/analysis/adk-accessibility-baseline-layer1-cli.md)
- [IPP-E21S08T01](../../implementation-cycles/IPP-E21S08T01-accessibility-layered-cli-first.md)
- [FR-115](../../project-management/kanban/fbu/FR-115-accessibility-standards-compatibility.md)
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/)
- [EN 301 549](https://www.etsi.org/standard/EN-301-549)
- [no-color.org](https://no-color.org/)
