---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-07T14:00:00Z
expires_at: null
housekeeping_policy: keep
---

# ADR-024: i18n Framework Strategy (Hybrid Locale Extension)

**Status:** Accepted  
**Date:** 2026-06-07  
**Deciders:** User (Ruari Mears) — via approved IPW plan  
**Implementing task:** [E21:S02:T01](../../project-management/kanban/epics/epic-21/story-02-internationalisation-infrastructure/T01-choose-i18n-frameworklibrary.md)  
**Origin FR:** [FR-006 Phase 2](../../project-management/kanban/fr-br/FR-006-localization-language-selection-uk-us-english.md)  
**Evaluation evidence:** [i18n-framework-evaluation-matrix.md](i18n-framework-evaluation-matrix.md)  
**Planning package:** [IPP-E21S02T01](../../implementation-cycles/IPP-E21S02T01-choose-i18n-framework.md)

---

## Context

Epic 21 Phase 1 (E21:S01) delivered UK/US English selection using a **custom locale system**:

- Project config: `ai-dev-kit-config.yaml` with `localisation.language` / `localisation.variant`
- Package locale trees: `packages/frameworks/{kanban,workflow-mgt}/locales/`
- Manifest indirection: `manifest.yaml` maps stable keys → per-locale file paths
- Resolver API: `localisation_config.py` (`resolve_locale_asset`, `render_locale_text`, `resolve_kanban_intake_template`, …)
- Whole-file markdown templates for kanban intake (8 templates × 2 locales)
- Regression bundle: pytest marker `fr006`

Phase 2 (E21:S02) must support **multi-language infrastructure** per FR-006: translation keys, additional locales, detection, switching, formatting, and fallback — while preserving Phase 1 adopters and APIs.

Four candidate strategies were evaluated (C1–C4). See the [evaluation matrix](i18n-framework-evaluation-matrix.md) for scored evidence. **C1 Hybrid extension** ranked first (47.5 weighted score).

---

## Decision

Adopt **C1: Hybrid extension of the Phase 1 incumbent** as the canonical i18n strategy for ai-dev-kit.

### 1. Whole-file locale assets (retain)

- **Keep** `manifest.yaml` + per-locale directories for **markdown templates and long-form content**.
- **Keep** `resolve_locale_asset`, `render_locale_text`, and canonical-template fallback paths.
- **Evolve** manifest to **schema v2** in E21:S02:T02 (add `keys` category, additional locale codes).

### 2. YAML key catalogs (add)

- **Add** namespaced key files: `locales/{lang}/keys/{domain}.yaml` (e.g. `cli.yaml`, `errors.yaml`).
- Key format: `domain.section.key` (flat keys in YAML with namespace prefix).
- **Implement** `resolve_locale_key()` and optional in-process cache in E21:S02:T06.
- Use for: CLI prompts, validator messages, short installer strings — not multi-page markdown.

### 3. Babel for formatting only (adjunct)

- **Adopt Babel** in E21:S02:T05 for date, time, number, and currency formatting.
- **Do not** use Babel as the primary translation message store.
- Babel is the only new **runtime dependency** introduced by this strategy (optional import with stdlib fallback documented in T05).

### 4. Rejected as primary stores

| Approach | Disposition |
| -------- | ----------- |
| GNU gettext (.po/.pot) | Rejected as primary — poor markdown corpus fit; optional future adjunct for isolated UI bundles |
| Babel-centric (messages + formatting) | Rejected as primary — over-scoped dependency; formatting-only adjunct under C1 |
| i18next | Rejected as primary — Python/installer path incompatible; **portal-only** follow-on in a separate epic task if Docusaurus i18n is pursued |

### 5. Backward compatibility (mandatory)

- `read_localisation_config`, `resolve_language`, and existing manifest v1 paths **remain valid** without migration.
- `LOCALE_VARIANTS` continues to support `en-GB` / `en-US`; additional locales extend manifest and `normalize_language` in T02/T06.
- Phase 1 `fr006` test suite must stay green after each S02 task.
- `greenfield-install/` mirrors sync when locale structure changes (from T02 onward).

---

## Consequences

### Positive

- Minimal migration from Phase 1; adopters with en-GB/en-US configs unaffected.
- Markdown templates stay diff-friendly for agents and human translators.
- Clear separation: **files for prose**, **keys for short strings**, **Babel for formatting**.
- Downstream tasks S02:T02–T07 have concrete contracts (see Integration plan below).

### Negative / trade-offs

- Two artifact types (whole files + key YAML) require documentation and completeness tracking (S03).
- YAML keys lack mature CAT-tool ecosystem vs gettext (mitigated by simple file layout and PR-based workflow).
- Babel adds a dependency to vendored framework copies (mitigated: single package, formatting-only scope).

### Integration plan (downstream handoffs)

| Task | Consumes this ADR |
| ---- | ----------------- |
| **E21:S02:T02** | Directory layout `{package}/locales/{lang}/` with `templates/`, `keys/`, `docs/`; manifest v2 schema |
| **E21:S02:T03** | Detection precedence: explicit override → `ai-dev-kit-config.yaml` → env (`ADK_LOCALE`) → system locale → optional `accept_language` (RFC 7231 Accept-Language API for HTTP/portal) → `default_locale`. Browser = `detect_browser_locale()` / `parse_accept_language()` — not a CLI probe. Policy: [locale-detection-conventions.md](../../governance/standards/locale-detection-conventions.md) |
| **E21:S02:T04** | Switching: `switch_locale()`, CLI `adk config locale`, `--locale` on init/installer (alias `--language`), config rewrite, installer re-prompt with `--force`. Policy: [locale-switching-conventions.md](../../governance/standards/locale-switching-conventions.md) |
| **E21:S02:T05** | `locale_formatting.py`: `babel.dates` / `babel.numbers` wrappers; stdlib fallback when Babel absent. Policy: [locale-formatting-conventions.md](../../governance/standards/locale-formatting-conventions.md) |
| **E21:S02:T06** | `resolve_locale_key(project_root, key)` + key naming convention; manifest `keys` category; in-process catalog cache. Policy: [locale-key-conventions.md](../../governance/standards/locale-key-conventions.md) |
| **E21:S02:T07** | Fallback chain: selected locale → `default_locale` → `en-GB` → `en-US` → canonical template. Policy: [locale-fallback-conventions.md](../../governance/standards/locale-fallback-conventions.md) — **COMPLETE** @ v0.21.2.7+1 |
| **E21:S03:T04** | Translation workflow ([translation-workflow-and-review.md](../../governance/standards/translation-workflow-and-review.md)) — **COMPLETE** @ v0.21.3.4+1 |
| **E21:S03:T05** | Management tools (script-first): `validate_locale_translations.py`, `sync_locale_keys.py`; `scaffold_locale_trees.py` (T02). Guide: [translation-management-tools.md](../../documentation/user-docs/translation-management-tools.md) |
| **E21:S03:T06** | Completeness metrics (script-first): `report_locale_completeness.py`; registry scope from [translatable-content-registry.yaml](../../governance/standards/translatable-content-registry.yaml); tier breakdown per [locale-rollout-matrix.md](../../governance/standards/locale-rollout-matrix.md). Guide: [translation-management-tools.md](../../documentation/user-docs/translation-management-tools.md) — **COMPLETE** @ v0.21.3.6+1 |
| **E21:S03:T07** | Phase 3 E2E tests (test-only): `tests/test_fr006_phase3_translation_locale_e2e.py` (P3E1–P3E11); parametrized scaffold-locale setup-path + fallback verification; regression `pytest -m fr006`. Planning: [IPP-E21S03T07](../../implementation-cycles/IPP-E21S03T07-test-translations-locale-support.md) |
| **E21:S04:T03** | RTL registry (`RTL_LOCALES`, `is_rtl_locale`, `text_direction_for_locale`) + CLI/installer direction-aware formatting helpers in `localisation_config.py`; `he` API extension without locale tree. Policy: [locale-rtl-conventions.md](../../governance/standards/locale-rtl-conventions.md). Portal RTL **deferred** (same row as below). Planning: [IPP-E21S04T03](../../implementation-cycles/IPP-E21S04T03-rtl-support-arabic-hebrew.md) |
| **E21:S03+** | Major-language file trees (T02); linguistic delivery S05–S07 |
| **Portal (deferred)** | If Docusaurus i18n is required, evaluate i18next or Docusaurus native i18n in a **separate** task — not part of C1 core; RTL layout for portal follows `is_rtl_locale` when pursued |

### Performance

- Target: translation lookup &lt;100ms (FR-006 NFR).
- Implementation: lazy-load YAML key files; cache parsed manifests and key dicts per process in `localisation_config.py` (S02:T06).

---

## Compliance

- IPW ADR necessity: T1–T5 = Y → REQUIRED per [ipw-adr-necessity-checklist.md](ipw-adr-necessity-checklist.md).
- Future locale work **must cite ADR-024** as the canonical strategy; supersession requires explicit ADR update.

---

## References

- [i18n-framework-evaluation-matrix.md](i18n-framework-evaluation-matrix.md)
- [IPP-E21S02T01](../../implementation-cycles/IPP-E21S02T01-choose-i18n-framework.md)
- [localisation_config.py](../../../packages/frameworks/workflow-mgt/scripts/localisation_config.py)
- [kanban/locales/README.md](../../../packages/frameworks/kanban/locales/README.md)
- [FR-006](../../project-management/kanban/fr-br/FR-006-localization-language-selection-uk-us-english.md)
