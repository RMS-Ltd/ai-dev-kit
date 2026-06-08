---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-07T14:00:00Z
expires_at: null
housekeeping_policy: keep
---

# i18n framework evaluation matrix (E21:S02:T01)

**Host task:** [E21:S02:T01](../../project-management/kanban/epics/epic-21/story-02-internationalisation-infrastructure/T01-choose-i18n-frameworklibrary.md)  
**Decision:** [ADR-024](ADR-024-i18n-framework-strategy.md) — **C1 Hybrid extension of Phase 1 incumbent**  
**Planning package:** [IPP-E21S02T01](../../implementation-cycles/IPP-E21S02T01-choose-i18n-framework.md)

---

## Context

Epic 21 Phase 1 (E21:S01, FR-006 MVP) shipped a **custom manifest + whole-file locale** model:

- `packages/frameworks/workflow-mgt/scripts/localisation_config.py`
- `packages/frameworks/kanban/locales/` and `workflow-mgt/locales/` with `manifest.yaml`
- Project config: `ai-dev-kit-config.yaml` (`localisation.language`, `localisation.variant`)
- Test marker `fr006` across six test modules

Phase 2 (E21:S02+) must add multi-language support, translation keys, detection, switching, formatting, and fallback — without breaking Phase 1 adopters.

---

## Candidates

| ID | Approach | Summary |
| -- | -------- | ------- |
| **C1** | **Hybrid extension (incumbent + key catalogs)** | Keep manifest + whole-file markdown templates; add `locales/{lang}/keys/*.yaml` for short strings; evolve `localisation_config.py`; adopt **Babel selectively** for locale formatting (S02:T05) |
| **C2** | **GNU gettext** (.pot/.po) + stdlib `gettext` | Industry-standard message catalogs; CAT-tool friendly for UI strings |
| **C3** | **Babel-centric** | Babel as primary stack for formatting + YAML/JSON message stores |
| **C4** | **JS i18next (portal-only)** | JavaScript/React i18n for Docusaurus portal; not a Python installer primary |

---

## Evaluation criteria

Scores: **1** (poor fit) → **5** (excellent fit). Higher is better.

| Criterion | Weight | Rationale |
| --------- | ------ | --------- |
| Markdown/template corpus fit | 1.5 | ai-dev-kit content is predominantly markdown templates and guides |
| Python CLI/installer fit | 1.5 | Installers and validators are Python; vendored to adopters |
| Multi-language + RTL extensibility | 1.0 | FR-006 Phase 2 locales include CJK and Arabic |
| Translator workflow (CAT, PR diffs) | 1.0 | Community translators need reviewable artifacts |
| Dependency weight / vendoring | 1.0 | Framework copies into adopter repos |
| Backward compat with S01 APIs | 1.5 | `fr006` suite and existing manifests must not break |
| S02:T02–T07 implementability | 1.0 | Decision must unblock concrete downstream tasks |
| Agent automation ergonomics | 0.5 | Agentic workflows generate and edit locale content |

---

## Scoring matrix

| Criterion (weight) | C1 Hybrid | C2 gettext | C3 Babel-centric | C4 i18next |
| ---------------- | --------- | ---------- | ---------------- | ---------- |
| Markdown/template corpus (1.5) | **5** | 2 | 3 | 2 |
| Python CLI/installer (1.5) | **5** | 4 | 4 | 1 |
| Multi-language + RTL (1.0) | 4 | 4 | 4 | 3 |
| Translator workflow (1.0) | 4 | **5** | 3 | 4 |
| Dependency weight (1.0) | **5** | **5** | 3 | 2 |
| S01 backward compat (1.5) | **5** | 2 | 4 | 1 |
| S02:T02–T07 implementability (1.0) | **5** | 3 | 4 | 2 |
| Agent ergonomics (0.5) | **5** | 3 | 3 | 2 |
| **Weighted total** | **47.5** | 30.5 | 33.5 | 18.5 |

### Per-candidate notes

**C1 — Hybrid extension (selected)**

- Extends proven Phase 1 layout; no mass migration of eight intake templates to `.po`.
- YAML key catalogs satisfy FR-006 “translation key system” without new primary dependency.
- Babel deferred to S02:T05 only (formatting boundary), keeping translation store lightweight.
- `resolve_locale_asset` and manifest schema evolve incrementally (manifest v2 in T02).

**C2 — GNU gettext**

- Strong for short UI strings and CAT tools; **poor fit** for multi-KB markdown template corpora.
- Would require splitting or duplicating template content into `.po` entries or parallel file trees.
- Breaks S01 mental model; high migration cost for marginal gain on markdown-heavy content.

**C3 — Babel-centric**

- Excellent for date/number/currency (S02:T05) but **over-scoped** as primary translation store.
- Adds dependency across all adopters; better as adjunct under C1.

**C4 — i18next**

- Appropriate **only** for `portal/` (future task); cannot serve Python installers or vendored scripts.
- Rejected as primary framework; documented as optional portal adjunct in ADR-024.

---

## Decision summary

| Rank | Candidate | Weighted score | Outcome |
| ---- | --------- | -------------- | ------- |
| 1 | **C1 Hybrid** | **47.5** | **Selected** — see ADR-024 |
| 2 | C3 Babel-centric | 33.5 | Partially adopted (formatting only, S02:T05) |
| 3 | C2 gettext | 30.5 | Rejected as primary; optional future adjunct for isolated UI bundles |
| 4 | C4 i18next | 18.5 | Rejected as primary; portal-only follow-on |

**Operator confirmation:** Plan approved with C1 as provisional recommendation; ADR-024 records acceptance.

---

## FR-006 Phase 2 traceability

| FR-006 requirement | C1 coverage |
| ------------------ | ----------- |
| Multi-language locales (`es`, `fr`, `de`, CJK, RTL, …) | New locale dirs under `{package}/locales/{lang}/`; manifest v2 |
| Translation key system | `locales/{lang}/keys/*.yaml` + `resolve_locale_key()` (S02:T06) |
| Translation workflow | Whole-file markdown PRs + YAML key PRs; completeness tracking in S03 |
| Fallback to English | Extend `_language_fallback_chain` (S02:T07) |
| Locale formatting | Babel in S02:T05 (adjunct, not translation store) |
| Performance &lt;100ms | In-process YAML/manifest cache in `localisation_config.py` (S02:T06) |

---

## References

- [ADR-024](ADR-024-i18n-framework-strategy.md)
- [IPP-E21S02T01](../../implementation-cycles/IPP-E21S02T01-choose-i18n-framework.md)
- [FR-006](../../project-management/kanban/fr-br/FR-006-localization-language-selection-uk-us-english.md)
- [localisation_config.py](../../../packages/frameworks/workflow-mgt/scripts/localisation_config.py)
