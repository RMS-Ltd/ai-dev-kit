---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-13T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E2:S16:T07 – UKW Extension for FR/BR/UXR Temporal Tracking and Synchronization (FR-050)

**Task ID:** E2:S16:T07
**Status:** TODO
**Priority:** LOW
**Estimated Effort:** Medium (3-4 days)
**Created:** 2026-05-13
**Last updated:** 2026-05-13 (re-housed from E6:S07:T108 — Windsurf skill approach obsolete; carrying forward FR-050 intent in Claude Code context)
**Code:** E2S16T07
**Historical Anchor:** E6:S07:T108

**Associated FR:** [FR-050](../../../fr-br/FR-050-ukw-extension-for-fr-br-uxr-temporal-tracking-and-synchronization.md)
**Version Anchor:** v0.2.16.7+0

---

## Input

- [FR-050](../../../fr-br/FR-050-ukw-extension-for-fr-br-uxr-temporal-tracking-and-synchronization.md) — requirements and acceptance criteria.
- UKW workflow definition: `packages/frameworks/workflow mgt/workflows/update-kanban-workflow/`
- UKW agents definition: `packages/frameworks/workflow mgt/agents/ukw/AGENTS.md`
- `kanban-completed.md` — format reference for the temporal dashboard.
- Historical context: [E6:S07:T108](../../Epic-6/Story-007-adk-implementation-analysis-and-package-management/T108-ukw-extension-for-fr-br-uxr-temporal-tracking-and-synchronization.md) (SUPERSEDED)

---

## Problem Statement

The UKW handles kanban board synchronization with temporal tracking and a recent-completions dashboard for `kanban-completed.md`. The FR/BR/UXR documentation ecosystem lacks equivalent temporal tracking — completed FBU items in `fbu-completed.md` have no consistent timestamps, and `fbuboard.md` is not automatically pruned of resolved items when UKW runs.

---

## Deliverable

- UKW updated to write resolved FR/BR/UXR items to `fbu-completed.md` with ISO 8601 timestamps and a recent-completions dashboard (matching the format established in `kanban-completed.md`).
- `fbuboard.md` board cleanup (remove resolved items) made an explicit UKW step, consistent with how `kboard.md` is handled.
- Cross-document consistency validation between `fbuboard.md`, `fbu-completed.md`, and `fbu-structure.md` added to UKW.

---

## Scope

1. Extend the UKW workflow definition (`packages/frameworks/workflow mgt/`) with explicit FR/BR/UXR synchronization steps (temporal tracking, board cleanup, structure update).
2. Add a recent-completions dashboard section to `fbu-completed.md` (20 most recent, sorted by completion time).
3. Ensure consistency with the established `kanban-completed.md` format and UKW patterns.
4. No new agent skills or external tooling — implementation lives in the UKW workflow definition files and agent instructions.

---

## Acceptance Criteria

- [ ] **AC1:** UKW workflow definition includes an explicit step for FR/BR/UXR board cleanup (resolved items removed from `fbuboard.md` active sections).
- [ ] **AC2:** UKW writes completed FBU items to `fbu-completed.md` with ISO 8601 timestamps in the same run.
- [ ] **AC3:** `fbu-completed.md` gains a "20 Most Recently Resolved" dashboard section, format-consistent with `kanban-completed.md`.
- [ ] **AC4:** UKW cross-document consistency check covers `fbuboard.md` ↔ `fbu-completed.md` ↔ `fbu-structure.md`.
- [ ] **AC5:** No breaking changes to existing UKW kanban steps.

---

## References

- [FR-050](../../../fr-br/FR-050-ukw-extension-for-fr-br-uxr-temporal-tracking-and-synchronization.md)
- [Story 016](../Story-016-perpetual-ongoing-workflow-operations.md)
- Historical anchor: [E6:S07:T108](../../Epic-6/Story-007-adk-implementation-analysis-and-package-management/T108-ukw-extension-for-fr-br-uxr-temporal-tracking-and-synchronization.md) (SUPERSEDED)
- UKW workflow definition: `packages/frameworks/workflow mgt/workflows/update-kanban-workflow/`
- UKW agents definition: `packages/frameworks/workflow mgt/agents/ukw/AGENTS.md`
