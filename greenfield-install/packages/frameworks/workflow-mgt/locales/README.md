---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-07T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Workflow-mgt — locale scaffolds and keys (FR-006)

Locale fragments for RW installer scaffolds and short CLI strings. Loaded by `install_release_workflow.py` via `render_locale_text` (E21:S01:T06). Key catalogs (E21:S02:T02) are resolved by `resolve_locale_key` in **E21:S02:T06**.

## Layout (manifest v2)

```text
locales/
  manifest.yaml       # v2: supported_locales + scaffolds + keys
  en-GB/
    scaffolds/
    keys/             # cli.yaml, errors.yaml, installer.yaml
  en-US/
    scaffolds/
    keys/
```

**Conventions:** [locale-file-structure-conventions.md](../../../../docs/governance/standards/locale-file-structure-conventions.md)

## Manifest keys (scaffolds)

| Key | Purpose |
| --- | ------- |
| `changelog_stub` | Initial `CHANGELOG.md` body (`{{project_name}}` placeholder) |
| `version_scaffold_decline` | Message when user declines version file scaffold |
| `changelog_scaffold_decline` | Message when user declines changelog scaffold |

## Manifest keys (keys category)

| Key | File | Keys (en-GB) |
| --- | ---- | ------------ |
| `cli` | `keys/cli.yaml` | 25 |
| `errors` | `keys/errors.yaml` | 6 |
| `installer` | `keys/installer.yaml` | 93 |

See [`manifest.yaml`](manifest.yaml). Kanban templates: `packages/frameworks/kanban/locales/`.

**Content inventory (E21:S03:T01):** [translatable-content-inventory.md](../../../../docs/governance/standards/translatable-content-inventory.md)  
**Rollout matrix (E21:S03:T02):** [locale-rollout-matrix.md](../../../../docs/governance/standards/locale-rollout-matrix.md)  
**Management tools (E21:S03:T05):** [translation-management-tools.md](../../../../docs/documentation/user-docs/translation-management-tools.md)

| Script | Role |
| ------ | ---- |
| [`validate_locale_translations.py`](../scripts/validate_locale_translations.py) | Structural validation |
| [`sync_locale_keys.py`](../scripts/sync_locale_keys.py) | Incremental key sync from en-GB |
| [`scaffold_locale_trees.py`](../scripts/scaffold_locale_trees.py) | Full tree bootstrap (T02) |
| [`report_locale_completeness.py`](../scripts/report_locale_completeness.py) | Completeness metrics and alerts (T06) |

## Phase 2 roadmap

| Task | Change |
| ---- | ------ |
| E21:S02:T02 | Manifest v2 + keys scaffold — **COMPLETE** @ v0.21.2.2+1 |
| E21:S02:T03 | Locale detection + `resolve_language` precedence — **COMPLETE** @ v0.21.2.3+1 |
| E21:S02:T04 | Language switching — **COMPLETE** @ v0.21.2.4+1 |
| E21:S02:T05 | Date/time/number formatting (`locale_formatting.py`) — **COMPLETE** @ v0.21.2.5+1 |
| E21:S02:T06 | `resolve_locale_key()` — **COMPLETE** @ v0.21.2.6+1 |
| E21:S02:T07 | Extended fallback chain (`language_fallback_chain`) — **COMPLETE** @ v0.21.2.7+1 |
| E21:S03:T01 | Extract installer/CLI keys + inventory — **COMPLETE** @ v0.21.3.1+1 |
| E21:S03:T02 | Scaffold 9 major-language locale trees — **COMPLETE** @ v0.21.3.2+1 |
| E21:S03:T03 | Call-site wiring (`locale_message`) — installer + CLI — **COMPLETE** @ v0.21.3.3+1 |
| E21:S03:T04 | Translation workflow — [translation-workflow-and-review.md](../../../../docs/governance/standards/translation-workflow-and-review.md) — **COMPLETE** @ v0.21.3.4+1 |
| E21:S03:T05 | Management tools — [translation-management-tools.md](../../../../docs/documentation/user-docs/translation-management-tools.md) — **COMPLETE** @ v0.21.3.5+1 |
| E21:S03:T06 | Completeness reporting — `report_locale_completeness.py` — **COMPLETE** @ v0.21.3.6+1 |
| E21:S03:T07 | Phase 3 E2E tests — [IPP-E21S03T07](../../../../docs/implementation-cycles/IPP-E21S03T07-test-translations-locale-support.md) |

Call-site helper: `locale_message(project_root, key, substitutions)` in [`localisation_config.py`](../scripts/localisation_config.py) (E21:S03:T03). Consumed by `install_release_workflow.py` and `cli/commands/init.py`.

**Tests:** `tests/test_translation_lookup_rendering.py` (L1–L7); `tests/test_fr006_phase3_translation_locale_e2e.py` (P3E1–P3E11, marker `fr006`). Full bundle: `pytest -m fr006`.

Detection APIs live in [`localisation_config.py`](../scripts/localisation_config.py): `detect_system_locale`, `detect_browser_locale`, `detect_env_locale`, `map_to_supported_locale`.

Formatting APIs: [`locale_formatting.py`](../scripts/locale_formatting.py) — `format_date`, `format_number`, `format_currency`, `format_for_project` (E21:S02:T05).

Key APIs: `resolve_locale_key(project_root, key)` in [`localisation_config.py`](../scripts/localisation_config.py) (E21:S02:T06).

Fallback: `language_fallback_chain(locales_root, preferred)` — selected → `default_locale` → `en-GB` → `en-US` (E21:S02:T07).

Planning: [IPP-E21S02T06](../../../../docs/implementation-cycles/IPP-E21S02T06-locale-key-system.md) · [IPP-E21S02T07](../../../../docs/implementation-cycles/IPP-E21S02T07-locale-fallback-chain.md) · [IPP-E21S03T03](../../../../docs/implementation-cycles/IPP-E21S03T03-translation-lookup-rendering.md) · [IPP-E21S03T04](../../../../docs/implementation-cycles/IPP-E21S03T04-translation-workflow-review.md) · [locale-key-conventions](../../../../docs/governance/standards/locale-key-conventions.md) · [locale-fallback-conventions](../../../../docs/governance/standards/locale-fallback-conventions.md)

## Contributing translations

See [contributing-translations.md](../../../../docs/documentation/user-docs/contributing-translations.md) and the canonical [translation-workflow-and-review.md](../../../../docs/governance/standards/translation-workflow-and-review.md) policy.
