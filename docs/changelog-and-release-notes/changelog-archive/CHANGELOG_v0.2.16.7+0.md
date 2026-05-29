# Changelog – v0.2.16.7+0

**Release date:** 2026-05-13 00:00:00 UTC  
**Version:** `0.2.16.7+0`  
**SemVer:** `v0.4.773+0`  
**Task anchor:** E2:S16:T07  
**Variant:** `RW -k` (kanban-init / doc-init)  
**Branch:** `dev`

---

## Summary

Kanban-init release for E2:S16:T07. Re-houses `E6:S07:T108` (UKW extension for FR/BR/UXR temporal tracking, FR-050) to its correct semantic home under E2:S16. The Windsurf skill-based implementation approach in T108 is obsolete; FR-050's intent is carried forward as a fresh TODO in the Claude Code context.

---

## Changes

### Re-housing: E6:S07:T108 → E2:S16:T07

- **`E2:S16:T07` task doc** — created; status TODO; Historical Anchor: E6:S07:T108; Windsurf-specific implementation detail stripped; FR-050 intent preserved.
- **`E6:S07:T108` task doc** — status updated to SUPERSEDED; Superseded by: E2:S16:T07.
- **`FR-050`** — Implementing Task rewired from E6:S07:T108 → E2:S16:T07; historical implementing task noted.
- **`E2:S16` story** — T07 checklist entry added.
- **`E6:S07` story** — T110 coordinate reference updated to note T108 SUPERSEDED → E2:S16:T07.
- **`kboard.md`** — E6:S07:T108 row replaced with E2:S16:T07.
- **`fbuboard.md`** — FR-050 row task pointer updated to E2:S16:T07.

### Version Bump

- `version.py`: `0.6.1.38+2` → `0.2.16.7+0` (doc-init for E2:S16:T07)

---

## Related

- [E2:S16:T07](../../../docs/project-management/kanban/epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T07-ukw-extension-for-fr-br-uxr-temporal-tracking-fr050.md)
- [E6:S07:T108](../../../docs/project-management/kanban/epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T108-ukw-extension-for-fr-br-uxr-temporal-tracking-and-synchronization.md) (SUPERSEDED)
- [FR-050](../../../docs/project-management/kanban/fr-br/FR-050-ukw-extension-for-fr-br-uxr-temporal-tracking-and-synchronization.md)
