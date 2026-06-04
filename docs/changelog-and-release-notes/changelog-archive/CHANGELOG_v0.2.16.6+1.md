---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-30T12:54:46Z
expires_at: null
housekeeping_policy: keep
---

# Changelog v0.2.16.6+1

**Release Date:** 2026-05-30 12:54:46 UTC  
**Epic:** 2 | **Story:** 16 | **Task:** 6  
**Internal version:** `0.2.16.6+1`  
**SemVer:** `v0.4.836+1` (task-touch)

---

## Summary

E02:S16:T06 (FR-085) — Change implemented: optional standalone UKW `--rp` (RePrioritise) deep reprioritization contract across ADR-009, agent SoT, workflow cheatsheet, IPP, and packaged UKW guidance.

---

## Added

- [ADR-009](../../../architecture/standards-and-adrs/ADR-009-ukw-deep-reprioritization-rp-flag.md) — standalone `UKW --rp` vs `-p`, `rw_step_7` exclusion, idempotency, rationale contract
- [IPP-E02S16T06](../../../implementation-cycles/IPP-E02S16T06-ukw-rp-flag-fr085.md) — IPW planning package

## Changed

- `.cursorrules` UKW trigger — `--rp` flag parsing and step matrix
- `packages/frameworks/workflow mgt/cursorrules-ukw-trigger-section.md` — adopter excerpt parity
- `.claude/commands/ukw.md` — flag table and `--rp` step matrix
- `update-kanban-workflow-agent-execution.md` — FR-085 / ADR-009 section
- `update-kanban-workflow.yaml` — `invocation_flags.deep_reprioritization`
- `.cursor/skills/ukw-sync/SKILL.md` — `--rp` execution guidance
- [workflow-initiation-cheatsheet.md](../../../guides/workflow-initiation-cheatsheet.md) — `UKW --rp` row, disambiguation, sequence

## Kanban

- FR-085 → IMPLEMENTED; E02:S16:T06 → COMPLETE at this release
- Four-surface reconciliation (task, FR, kboard, fbuboard)

---

## References

- [FR-085](../../project-management/kanban/fr-br/FR-085-ukw-optional-reprioritization-rp-flag.md)
- [T06 task doc](../../project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T06-ukw-optional-reprioritization-rp-flag-fr085.md)
