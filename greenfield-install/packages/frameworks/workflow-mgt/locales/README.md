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
| E21:S02:T03 | Locale detection — **COMPLETE** @ v0.21.2.3+1 |
| E21:S02:T04 | Language switching — **COMPLETE** @ v0.21.2.4+1 |
| E21:S02:T05 | Date/time/number formatting — **COMPLETE** @ v0.21.2.5+1 |
| E21:S02:T06 | `resolve_locale_key()` — **COMPLETE** @ v0.21.2.6+1 |

Key APIs: `resolve_locale_key` in [`localisation_config.py`](../scripts/localisation_config.py).

Planning: [IPP-E21S02T06](../../../../docs/implementation-cycles/IPP-E21S02T06-locale-key-system.md) · [locale-key-conventions](../../../../docs/governance/standards/locale-key-conventions.md)
