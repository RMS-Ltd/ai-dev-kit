---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-09T15:15:00Z
expires_at: null
housekeeping_policy: keep
---

# AI Dev Kit – FBU Prioritization Board

**Last Updated:** 2026-06-04 (UKW lean-board hygiene)
**Version Context:** v0.2.16.18+1

**Active board contract:** Rows here are **open FBU work only** (OPEN / IN PROGRESS / PROPOSED with active task). **IMPLEMENTED**, **RESOLVED**, **FIXED**, and archive narrative belong in [`fbu-completed.md`](fbu-completed.md). Full corpus and filing rules: [`fbu-structure.md`](fbu-structure.md) · **Guide:** [`kanban-board-guide.md`](kanban-board-guide.md).

> **Tasks:** [`kboard.md`](kboard.md) · **Completed:** [`fbu-completed.md`](fbu-completed.md)

**Bidirectional wiring:** Every row includes **`E#:S#:T#`** from the FBU doc **`Implementing Task:`** field and must match a live row on `kboard.md` for M/S/C/O.

---

## MoSCOW Prioritized FBU Items

### Must Have (M) - Critical Items

- **FR-045** – ADR-002 task-touch mapping — 1:1 internal↔SemVer - 🟢 OPEN (HIGH, fix attempted **v0.3.2.12+4**) | [FR-045](fr-br/FR-045-adr-002-task-touch-derived-mapping.md) | [E03:S02:T12](epics/epic-03/story-02-versioning-cookbook-and-examples/T12-implement-task-touch-semver-mapping-mode.md) | [—IPP—](../../implementation-cycles/IPW-E3S02T12-task-touch-semver-collision-hardening.md) | Last modified: 2026-06-04 12:15 UTC

- **FR-046** – RW SemVer tag when `task_touch` enabled - 🟢 OPEN (HIGH, fix attempted **v0.3.2.12+4**) | [FR-046](fr-br/FR-046-rw-semver-tag-task-touch-mode.md) | [E03:S02:T12](epics/epic-03/story-02-versioning-cookbook-and-examples/T12-implement-task-touch-semver-mapping-mode.md) | [—IPP—](../../implementation-cycles/IPW-E3S02T12-task-touch-semver-collision-hardening.md) | Last modified: 2026-06-04 14:20 UTC

- **BR-061** – Task-touch SemVer PATCH / registry counter - 🟢 OPEN (HIGH, fix attempted **v0.3.2.12+4**) | [BR-061](fr-br/BR-061-semver-task-touch-counter-increments-too-often.md) | [E03:S02:T12](epics/epic-03/story-02-versioning-cookbook-and-examples/T12-implement-task-touch-semver-mapping-mode.md) | [—IPP—](../../implementation-cycles/IPW-E3S02T12-task-touch-semver-collision-hardening.md) | Last modified: 2026-06-04 18:45 UTC

### Should Have (S) - Important Items

- **FR-106** – Packaged workflows sync with live repo implementation - 🟢 OPEN (HIGH, fix attempted **v0.2.13.8+2** — pending verification) | [IPP](../../implementation-cycles/IPP-E02S13T08-sync-packaged-workflows-live-spec.md) | [FR-106](fr-br/FR-106-packaged-workflows-sync-with-live-repo-implementation.md) | [E02:S13:T08](epics/epic-02/story-13-workflow-management-package-implementation-review/T08-sync-packaged-workflows-with-live-repo-implementation.md) | —No IPP— | Last modified: 2026-06-03 20:06 UTC

- **BR-087** – Framework packages install with legacy directory names (spaces, `&`) (see [UXR-016](fr-br/UXR-016-install-setup-interactive-feedback-external-semver-version.md)) - 🟢 OPEN (HIGH, fix attempted **v0.6.9.18+2** — adopter verification pending) | [BR-087](fr-br/BR-087-framework-install-directory-slug-mismatch.md) | [UXR-016](fr-br/UXR-016-install-setup-interactive-feedback-external-semver-version.md) | [E06:S09:T18](epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T18-br087-framework-slug-install-closure.md) | —No IPP— | Last modified: 2026-06-05 14:40 UTC

- **BR-088** – RW Mode C does not create version_file path (no src/) - 🟢 OPEN (MEDIUM, fix attempted **v0.6.9.19+1**, GitHub **#18**) | [IPP-E06S09T19](../../implementation-cycles/IPP-E06S09T19-br088-version-file-scaffold.md) | [BR-088](fr-br/BR-088-rw-install-mode-c-missing-version-file-scaffold.md) | [E06:S09:T19](epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T19-rw-install-version-file-scaffold-br088.md) | —No IPP— | Last modified: 2026-06-05 17:11 UTC

- **BR-086** – RW install lowercase fresh kanban: story 03d blocked, sign-off BR-083 mismatch - 🟢 OPEN (MEDIUM, **v0.6.9.16+1**, GitHub **#17**) | [BR-086](fr-br/BR-086-rw-install-lowercase-fresh-kanban-patterns-signoff.md) | [E06:S09:T16](epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T16-rw-install-lowercase-fresh-kanban-patterns-br086.md) | —No IPP— | Last modified: 2026-06-04 12:56 UTC

- **BR-080** – Kanban fresh mode validation fails without `--force` on empty repo - 🟢 OPEN (HIGH, fix attempted **v0.6.9.9+2** — pending verification **#12**) | [IPP-E06S09T09](../../implementation-cycles/IPP-E06S09T09-br080-fresh-mode-empty-repo-validation.md) | [BR-080](fr-br/BR-080-kanban-fresh-mode-validation-requires-force-on-empty-repo.md) | [E06:S09:T09](epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T09-kanban-fresh-mode-validation-br080.md) | —No IPP— | Last modified: 2026-06-03 17:42 UTC

- **BR-082** – RW install fails without venv PyYAML; no preflight hint - 🟢 OPEN (HIGH, fix attempted **v0.6.9.11+2** — pending verification **#14**) | [IPP-E06S09T11](../../implementation-cycles/IPP-E06S09T11-br082-rw-install-pyyaml-preflight.md) | [BR-082](fr-br/BR-082-rw-install-missing-pyyaml-preflight.md) | [E06:S09:T11](epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T11-rw-install-pyyaml-preflight-br082.md) | —No IPP— | Last modified: 2026-06-03 17:44 UTC

- **BR-078** – Kanban fresh install: structure template not found - 🟢 OPEN (MEDIUM, fix attempted **v0.6.9.7+2** — pending verification **#10**) | [IPP-E06S09T07](../../implementation-cycles/IPP-E06S09T07-br078-kanban-structure-template-missing.md) | [BR-078](fr-br/BR-078-kanban-fresh-install-structure-template-missing.md) | [E06:S09:T07](epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T07-kanban-fresh-install-structure-template-missing-br078.md) | —No IPP— | Last modified: 2026-06-03 17:40 UTC

- **BR-079** – Kanban fresh install: Epic 22/23 placeholders only - 🟢 OPEN (MEDIUM, fix attempted **v0.6.9.8+2** — pending verification **#11**) | [IPP-E06S09T08](../../implementation-cycles/IPP-E06S09T08-br079-epic-22-23-install-templates.md) | [BR-079](fr-br/BR-079-kanban-fresh-install-epic-22-23-placeholder-only.md) | [E06:S09:T08](epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T08-kanban-fresh-install-epic-22-23-templates-br079.md) | —No IPP— | Last modified: 2026-06-03 17:41 UTC

### Could Have (C) - Nice-to-Have Items

- **UXR-017** – Kanban epic/story path lowercase naming (`epic-*` / `story-*`) - 🟢 OPEN (MEDIUM, **v0.4.19.11+1** — kit shipped; Expenses Tracker AC5 open) | [UXR-017](fr-br/UXR-017-kanban-epic-story-path-lowercase-naming.md) | [E04:S19:T11](epics/epic-04/story-19-fr-br-uxr-abstract-governance-and-intake/T11-kanban-epic-story-path-lowercase-naming-uxr017.md) | —No IPP— | Last modified: 2026-06-04 21:00 UTC

- **BR-058** – CI test workflow missing and pytest failures - 🟢 OPEN (LOW) | [BR-058](fr-br/BR-058-ci-test-workflow-missing-and-pytest-failures.md) | [E08:S03:T04](epics/epic-08/story-03-automation-scripts/T04-ci-test-workflow-pytest-remediation-br058.md) | —No IPP— | Last modified: 2026-06-04 12:05 UTC

### Won't Have (W) - Deferred Items

*(Deferred and terminal FBUs: see [`fbu-completed.md`](fbu-completed.md) — not listed on the active board.)*

### Ongoing (O) - Perpetual Items

- **FR-023** – Update Kanban Workflow (UKW) - 📋 TODO (LOW, **E02:S16:T04** on kboard) | [FR-023](fr-br/FR-023-update-kanban-workflow-ukw.md) | [E02:S16:T04](epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T04-ad-hoc-kanban-synchronization-and-hygiene-perpetual.md) | —No IPP— | Last modified: 2026-05-30 00:00 UTC

- **FR-043** – UKW gap discovery (TODO tasks + unfiled FR/BR) - 📋 TODO (HIGH, **E02:S16:T14** on kboard) | [FR-043](fr-br/FR-043-ukw-gap-discovery-todo-tasks-and-unfiled-fr-br.md) | [E02:S16:T14](epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T14-ukw-gap-discovery-unfiled-fr-br-fr043.md) | —No IPP— | Last modified: 2026-05-29 17:18 UTC

- **FR-058** – Markdown maintenance workflow - 💡 PROPOSED (LOW, **E07:S01:T05** on kboard) | [FR-058](fr-br/FR-058-markdown-maintenance-workflow.md) | [E07:S01:T05](epics/epic-07/story-01-codebase-maintenance-tasks/T05-markdown-maintenance-perpetual-task.md) | —No IPP— | Last modified: 2026-03-07 00:00 UTC
