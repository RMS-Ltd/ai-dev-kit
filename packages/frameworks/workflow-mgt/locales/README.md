---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-07T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Workflow-mgt — UK/US locale scaffolds (FR-006 Phase 1)

Locale fragments for RW installer scaffolds. Loaded by `install_release_workflow.py` via `render_locale_text` (E21:S01:T06): `render_changelog_stub`, `format_version_scaffold_decline_help`, and `format_changelog_scaffold_decline_help` resolve fragments from this manifest using `ai-dev-kit-config.yaml` language preference.

## Manifest keys

| Key | Purpose |
| --- | ------- |
| `changelog_stub` | Initial `CHANGELOG.md` body (`{{project_name}}` placeholder) |
| `version_scaffold_decline` | Message when user declines version file scaffold |
| `changelog_scaffold_decline` | Message when user declines changelog scaffold |

See [`manifest.yaml`](manifest.yaml). Kanban templates: `packages/frameworks/kanban/locales/`.
