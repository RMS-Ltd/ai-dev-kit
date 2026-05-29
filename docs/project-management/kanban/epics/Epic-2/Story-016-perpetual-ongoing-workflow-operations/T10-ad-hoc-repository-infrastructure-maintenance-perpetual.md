---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-19T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E2:S16:T10 — Ad-hoc Repository Infrastructure Maintenance (Perpetual)

**Task ID:** E2:S16:T10
**Status:** IN PROGRESS
**Priority:** MEDIUM
**Estimated Effort:** Small
**Created:** 2026-05-19
**Last updated:** 2026-05-19 (v0.2.16.10+2: SemVer registry sync; v0.2.16.10+1: FR-095 auto-detect GitHub remote)
**Version:** v0.2.16.10+2
**Code:** E2S16T10
**Task Type:** Perpetual Maintenance

**Forensic Marker:** v0.2.16.10+1

---

## Scope

Catch-all perpetual lane for ad-hoc repository infrastructure patches that do not warrant a dedicated feature task. Covers minor tooling adjustments, environment wiring, script fallbacks, and other "plumbing" fixes across the repo that improve the developer experience but are not tied to a specific user-facing feature.

---

## Examples (representative, not exhaustive)

- Adding env-var fallbacks to scripts (e.g. `AI_DEV_KIT_PAT` in `create_github_release.py`)
- Updating `.env.local` or `.env.example` templates
- Adjusting script argument parsing or help text
- Minor CI/CD configuration tweaks
- Path or import fixes in workflow scripts
- Adding missing `.gitignore` entries

---

## What this task does NOT own

- Feature-level releases (use the relevant E:S:T)
- Kanban board synchronization (owned by E2:S16:T04)
- Markdown-only documentation updates (owned by E2:S16:T05)
- Workflow engine redesigns (use dedicated FR/BR tasks)
- Package management changes (owned by Epic 6)

---

## Acceptance Criteria

- [ ] Infrastructure patch is scoped to a single concern (one change per RW).
- [ ] Patch is non-breaking (backward compatible).
- [ ] Patch includes a brief justification in the commit message or changelog.
- [ ] No dedicated feature task exists for the same concern (if one does, use that instead).

---

## Related

- [E2:S16:T03 — Rehouse workflow perpetual tasks and harden guardrails](T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md) — umbrella workflow maintenance
- [E2:S16:T04 — Ad-hoc Kanban synchronization and hygiene (Perpetual)](T04-ad-hoc-kanban-synchronization-and-hygiene-perpetual.md) — kanban operational lane
- [E2:S16:T05 — Markdown Documentation Maintenance (Perpetual)](T05-markdown-documentation-maintenance-perpetual.md) — docs-only lane

---
