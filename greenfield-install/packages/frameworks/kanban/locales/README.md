---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-07T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Kanban framework — UK/US locale content (FR-006 Phase 1)

Phase 1 MVP locale corpus for **en-GB** (default) and **en-US**. Selection is stored in project-root `ai-dev-kit-config.yaml` (see T01–T03).

## Layout (manifest v2 — E21:S02:T02)

```text
locales/
  manifest.yaml       # v2: supported_locales + stable keys → paths per locale
  en-GB/
    templates/        # Whole-file markdown intake templates
    docs/
    keys/             # YAML key catalogs (cli.yaml, errors.yaml)
  en-US/
    templates/
    docs/
    keys/
```

**Conventions:** [locale-file-structure-conventions.md](../../../../docs/governance/standards/locale-file-structure-conventions.md)

Canonical templates under `packages/frameworks/kanban/templates/` remain the **compatibility fallback**. Intake tooling resolves locale paths via `resolve_kanban_intake_template(project_root, key)` (E21:S01:T06).

## Manifest keys (Phase 1 seed)

| Key | File |
| --- | ---- |
| `fr` | `FR_TEMPLATE.md` |
| `br` | `BR_TEMPLATE.md` |
| `uxr` | `UXR_TEMPLATE.md` |
| `fb` | `FB_TEMPLATE.md` |
| `task` | `TASK_TEMPLATE.md` |
| `story` | `STORY_TEMPLATE.md` |
| `epic` | `EPIC_TEMPLATE.md` |
| `plan_doc` | `PLAN_DOC_TEMPLATE.md` |

## Read API (E21:S01:T05)

Implemented in [`localisation_config.py`](../../workflow-mgt/scripts/localisation_config.py):

- `read_localisation_config(project_root)` — defaults to en-GB when missing
- `resolve_language(project_root, override=..., accept_language=...)` — ADR-024 precedence (E21:S02:T03)
- `detect_system_locale()` / `detect_browser_locale()` / `detect_env_locale()` — detection helpers
- `map_to_supported_locale(tag)` / `parse_locale_tag(raw)` — tag normalization
- `load_locale_manifest(manifest_path)`
- `resolve_locale_asset(locales_root, category=..., key=..., fallback_path=...)`
- `render_locale_text(...)` — load fragment + `{{placeholder}}` substitution
- `resolve_kanban_intake_template(project_root, template_key)` — intake template path
- `kanban_locales_root()` / `workflow_locales_root()`

## Handoffs

| Task | Responsibility |
| ---- | -------------- |
| E21:S01:T05 | Read/resolve API — **COMPLETE** @ v0.21.1.5+1 |
| E21:S01:T06 | Wire kanban/RW installers to manifest — **COMPLETE** @ v0.21.1.6+1 |
| E21:S01:T07 | End-to-end locale selection tests — **COMPLETE** @ v0.21.1.7+1 |

RW installer scaffolds live in `packages/frameworks/workflow-mgt/locales/`.

## Phase 2 roadmap (FR-006 international)

**Strategy:** [ADR-024](../../../../docs/architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md) — **C1 hybrid** (manifest + whole-file markdown retained; YAML key catalogs added in S02:T06; manifest v2 in S02:T02).

| Task | Change to this tree |
| ---- | ------------------- |
| E21:S02:T01 | Decision only — **IPW complete** |
| E21:S02:T02 | Manifest v2 + `keys/` scaffold (en-GB/en-US) — **COMPLETE** @ v0.21.2.2+1 |
| E21:S02:T03 | Locale detection + `resolve_language` precedence — **COMPLETE** @ v0.21.2.3+1 |
| E21:S02:T04 | Language switching (`switch_locale`, `adk config locale`) — **COMPLETE** @ v0.21.2.4+1 |
| E21:S02:T06 | `resolve_locale_key()` — **COMPLETE** @ v0.21.2.6+1 |
| E21:S02:T07 | Extended fallback chain — **COMPLETE** @ v0.21.2.7+1 |

Key APIs: `resolve_locale_key(..., package="kanban")` — [locale-key-conventions](../../../../docs/governance/standards/locale-key-conventions.md).

Planning: [IPP-E21S02T06](../../../../docs/implementation-cycles/IPP-E21S02T06-locale-key-system.md) · [IPP-E21S02T07](../../../../docs/implementation-cycles/IPP-E21S02T07-locale-fallback-chain.md) · [locale-fallback-conventions](../../../../docs/governance/standards/locale-fallback-conventions.md)

## Test matrix (FR-006 Phase 1)

| Layer | Module | IDs |
| ----- | ------ | --- |
| Corpus | `tests/test_locale_content_manifest.py` | T1–T7 |
| Structure v2 | `tests/test_locale_structure_v2.py` | V1–V8 |
| Detection | `tests/test_locale_detection.py` | T1–T12 |
| Switching | `tests/test_locale_switching.py` | S1–S7 |
| Read/resolve | `tests/test_localisation_config_read_resolve.py` | T1–T10 |
| RW selection | `tests/test_install_release_workflow_localisation.py` | T1–T9 |
| CLI init | `tests/test_commands.py` (`TestInitCommand`) | T1–T8 |
| Content wiring | `tests/test_content_generation_locale_wiring.py` | T1–T10 |
| E2E | `tests/test_fr006_phase1_e2e_localisation.py` | E1–E8 |

**Regression bundle:**

```bash
pytest -m fr006 tests/test_fr006_phase1_e2e_localisation.py \
  tests/test_install_release_workflow_localisation.py \
  tests/test_localisation_config_read_resolve.py \
  tests/test_content_generation_locale_wiring.py \
  tests/test_locale_content_manifest.py
```

Plus `tests/test_commands.py` init localisation tests (see `TestInitCommand`).

## Phase 3 (translation pipeline)

| Task | Change |
| ---- | ------ |
| E21:S03:T01 | Translatable content inventory — [translatable-content-inventory.md](../../../../docs/governance/standards/translatable-content-inventory.md) |
| E21:S03:T02 | Major-language scaffold trees — [locale-rollout-matrix.md](../../../../docs/governance/standards/locale-rollout-matrix.md) |
| E21:S03:T03 | Translation lookup/rendering wired — [IPP-E21S03T03](../../../../docs/implementation-cycles/IPP-E21S03T03-translation-lookup-rendering.md) |
| E21:S03:T04 | Translation workflow and review — [translation-workflow-and-review.md](../../../../docs/governance/standards/translation-workflow-and-review.md) |
| E21:S03:T05 | Management tools — [translation-management-tools.md](../../../../docs/documentation/user-docs/translation-management-tools.md) |

**Management scripts:** `validate_locale_translations.py`, `sync_locale_keys.py`, `scaffold_locale_trees.py`, `report_locale_completeness.py` under `packages/frameworks/workflow-mgt/scripts/`.

## Contributing translations

See [contributing-translations.md](../../../../docs/documentation/user-docs/contributing-translations.md) and the canonical [translation-workflow-and-review.md](../../../../docs/governance/standards/translation-workflow-and-review.md) policy.

## References

- [translation-workflow-and-review.md](../../../../docs/governance/standards/translation-workflow-and-review.md)
- [translatable-content-inventory.md](../../../../docs/governance/standards/translatable-content-inventory.md)
- [FR-006](../../../../docs/project-management/kanban/fr-br/FR-006-localization-language-selection-uk-us-english.md)
- [ADR-024](../../../../docs/architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md)
- [IPP-E21S02T01](../../../../docs/implementation-cycles/IPP-E21S02T01-choose-i18n-framework.md)
- [IPP-E21S01T04](../../../../docs/implementation-cycles/IPP-E21S01T04-ukus-content-variants-mvp.md)
