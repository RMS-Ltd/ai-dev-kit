# Changelog Archive Entry v0.2.16.10+0

## Internal Version
**v0.2.16.10+0**

## Release Date
2026-05-19 00:00:00 UTC

## Summary
Inaugural release of E2:S16:T10 — Ad-hoc Repository Infrastructure Maintenance perpetual task. Adds `AI_DEV_KIT_PAT` env-var fallback to `create_github_release.py`, creates the T10 perpetual task document, and wires it into Story 016 and `kboard.md`.

## Epic / Story / Task
- **Epic:** E2 — Workflow Management Frameworks
- **Story:** S16 — Perpetual Ongoing Workflow Operations
- **Task:** T10 — Ad-hoc Repository Infrastructure Maintenance (perpetual)

## Changes

### Repository Infrastructure
- **`packages/frameworks/workflow mgt/scripts/create_github_release.py`:** Added `AI_DEV_KIT_PAT` as a fallback env-var for GitHub token lookup (line 385). Priority order: `--token` flag → `GITHUB_TOKEN` → `AI_DEV_KIT_PAT`. Error message updated to reference both variable names. This resolves the confusion between the GitHub Actions built-in `GITHUB_TOKEN` and a user-generated PAT stored as `AI_DEV_KIT_PAT`.

### New Perpetual Task
- **E2:S16:T10 task doc created:** `T10-ad-hoc-repository-infrastructure-maintenance-perpetual.md` — Defines scope for ad-hoc repo tooling, env wiring, script fallbacks, and other infrastructure patches not warranting a dedicated feature task. Excludes kanban sync (T04), markdown docs (T05), and feature-level releases.

### Kanban Wiring
- **E2:S16 story doc:** Task checklist updated with T10 entry.
- **kboard.md:** T10 added to Ongoing (Perpetual) section with cross-links to story and task documents.

### Version Bump
- `src/ai_dev_kit/version.py`: 0.2.16.4+9 → **0.2.16.10+0** (--art adoption from T04 to T10; BUILD reset to 0).

## Touched Surfaces + Why
| Surface | Why touched |
|---------|-------------|
| `create_github_release.py` | Add `AI_DEV_KIT_PAT` fallback for user-generated PATs |
| `E2:S16:T10.md` | New perpetual task doc |
| `E2:S16.md` | Story checklist updated with T10 |
| `kboard.md` | T10 wired into Ongoing (Perpetual) |
| `version.py` | --art adoption to T10; BUILD reset |

## Related
- E2:S16:T03 — Workflow maintenance (umbrella perpetual)
- E2:S16:T04 — Ad-hoc Kanban synchronization and hygiene
- E2:S16:T05 — Markdown Documentation Maintenance

---
*This changelog entry is immutable. Do not modify after creation.*
