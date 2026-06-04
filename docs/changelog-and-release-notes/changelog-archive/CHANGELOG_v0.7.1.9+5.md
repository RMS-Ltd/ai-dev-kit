# Changelog — v0.7.1.9+5

**Release Date:** 2026-06-02 12:08:24 UTC  
**Epic:** 7 | **Story:** 1 | **Task:** 9  
**SemVer:** v0.4.845+5  
**Summary:** UXR-005 MoSCOW spacing validator, corpus pass, RW/UKW Gate 10

---

## Summary

Change implemented: operationalized **UXR-005** — `validate_kanban_moscow_spacing.py`, pytest suite, spacing corpus on `kboard.md` / `fbuboard.md` / guide, policy and RW/UKW hooks (Release Readiness Gate 10 advisory). **IPP-E07S01T09** linked from task doc.

---

## Added

- [`kanban_moscow_spacing.py`](../../packages/frameworks/workflow%20mgt/scripts/kanban/kanban_moscow_spacing.py) — spacing detection and `--fix`
- [`validate_kanban_moscow_spacing.py`](../../packages/frameworks/workflow%20mgt/scripts/validation/validate_kanban_moscow_spacing.py) — CLI validator
- [`IPP-E07S01T09`](../../implementation-cycles/IPP-E07S01T09-kanban-template-governance-uxr005.md) — IPW package
- [`uxr-005-spacing-20260601.md`](../../maintenance/logs/uxr-005-spacing-20260601.md) — evidence log

---

## Changed

- MoSCOW boards/docs — blank lines between multi-line bullets (FR-097-safe spacing pass)
- [`kanban-governance-policy.md`](../../packages/frameworks/kanban/policies/kanban-governance-policy.md) — spacing subsection
- RW/UKW agent guides — validator commands; Gate 10 on release readiness
- **UXR-005**, **E07:S01:T09** — COMPLETE; archived on `kanban-completed.md` / `fbu-completed.md`

---

## RW Step 7 — four-surface reconciliation

| Surface | Action |
| ------- | ------ |
| Task **E07:S01:T09** | Version **v0.7.1.9+5**; ACs checked |
| **UXR-005** | COMPLETE; ACs checked |
| `kboard.md` | T09 row pruned (complete); board metadata |
| `fbuboard.md` | UXR-005 pruned; consolidation note |

---

**Task:** [E07:S01:T09](docs/project-management/kanban/epics/epic-07/story-01-codebase-maintenance-tasks/E07S01T09-kanban-template-governance.md)
