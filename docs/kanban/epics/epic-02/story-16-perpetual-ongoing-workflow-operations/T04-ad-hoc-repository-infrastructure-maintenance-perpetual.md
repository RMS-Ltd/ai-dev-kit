---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-19T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E02:S16:T04 — Ad-hoc Repository Infrastructure Maintenance (Perpetual)

**Task ID:** E02:S16:T04
**Historical Anchor:** E02:S16:T10
**Status:** IN PROGRESS
**Priority:** MEDIUM
**Estimated Effort:** Small
**Created:** 2026-05-19
**Last updated:** 2026-06-08 (RW **v0.2.16.10+7** — FR-118 shell retirement)
**Version:** v0.2.16.10+7
**Code:** E02S16T04
**Task Type:** Perpetual Maintenance

**Forensic Marker:** v0.2.16.10+7

**Version Anchor:** v0.2.16.10+7 (perpetual — FR-118 `project-management/` shell retirement)

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
- Regenerating [`repository-path-manifest.json`](../../../../maintenance/repository-path-manifest.json) after structural directory changes (FR-140 / E07:S01:T15)

---

## What this task does NOT own

- Feature-level releases (use the relevant E:S:T)
- Kanban board synchronization (owned by E02:S16:T02)
- Markdown lint / link hygiene (owned by E02:S16:T03)
- Ad-hoc documentation maintenance (owned by E02:S16:T03)
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

- [E02:S16:T01 — Workflow maintenance (Perpetual)](T01-workflow-maintenance-perpetual.md) — umbrella workflow maintenance
- [E02:S16:T02 — Ad-hoc Kanban synchronization and hygiene (Perpetual)](T02-ad-hoc-kanban-synchronization-and-hygiene-perpetual.md) — kanban operational lane
- [E02:S16:T03 — Ad-hoc Documentation Maintenance (Perpetual)](T03-ad-hoc-documentation-maintenance-perpetual.md) — documentation lane (format + content)

---
