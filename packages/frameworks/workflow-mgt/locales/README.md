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
    keys/             # cli.yaml, errors.yaml
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

| Key | File |
| --- | ---- |
| `cli` | `keys/cli.yaml` |
| `errors` | `keys/errors.yaml` |

See [`manifest.yaml`](manifest.yaml). Kanban templates: `packages/frameworks/kanban/locales/`.

## Phase 2 roadmap

| Task | Change |
| ---- | ------ |
| E21:S02:T02 | Manifest v2 + keys scaffold — **COMPLETE** @ v0.21.2.2+1 |
| E21:S02:T03 | Locale detection + `resolve_language` precedence — **COMPLETE** @ v0.21.2.3+1 |
| E21:S02:T06 | `resolve_locale_key()` |

Detection APIs live in [`localisation_config.py`](../scripts/localisation_config.py): `detect_system_locale`, `detect_browser_locale`, `detect_env_locale`, `map_to_supported_locale`.

Planning: [IPP-E21S02T02](../../../../docs/implementation-cycles/IPP-E21S02T02-locale-file-structure.md) · [IPP-E21S02T03](../../../../docs/implementation-cycles/IPP-E21S02T03-locale-detection.md) · [locale-detection-conventions](../../../../docs/governance/standards/locale-detection-conventions.md)
