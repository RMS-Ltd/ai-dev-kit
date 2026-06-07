---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-07T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Workflow-mgt — UK/US locale scaffolds (FR-006 Phase 1)

Locale fragments for RW installer scaffolds. **Not yet loaded by** `install_release_workflow.py` — E21:S01:T06 will wire `render_changelog_stub` and decline-help strings to this manifest.

## Manifest keys

| Key | Purpose |
| --- | ------- |
| `changelog_stub` | Initial `CHANGELOG.md` body (`{{project_name}}` placeholder) |
| `version_scaffold_decline` | Message when user declines version file scaffold |
| `changelog_scaffold_decline` | Message when user declines changelog scaffold |

See [`manifest.yaml`](manifest.yaml). Kanban templates: `packages/frameworks/kanban/locales/`.
