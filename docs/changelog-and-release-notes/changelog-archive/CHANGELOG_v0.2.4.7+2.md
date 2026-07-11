---
lifecycle: evergreen
ttl_days: null
created_at: 2026-07-11T11:15:54Z
expires_at: null
housekeeping_policy: keep
---

# Release Notes — v0.2.4.7+2

**Release Date:** 2026-07-11 11:15:54 UTC  
**Internal version:** `0.2.4.7+2`  
**SemVer:** `v0.4.1249` (`0.4.1249+2` full)  
**Epic / Story / Task:** E02:S04:T07  
**Branch:** `dev`  
**Flags:** `--art`

---

## Summary

Reopened **E02:S04:T07** after operator review: lifecycle frontmatter mass-apply (historical v0.2.4.7+1) achieved coverage but classification defaults to evergreen, so Doc Housekeeping Workflow never acts. Filed **BR-114**, restored task/story/board wiring for remediation planning (no code implementation this release).

**BUILD note:** `+2` chosen because archive `CHANGELOG_v0.2.4.7+1.md` already exists (immutable); `resolve_rw_build.py --art` incorrectly returned first-build `+1`.

---

## Changed

### Kanban / intake

- Reopened task **E02:S04:T07** with BR-114 acceptance criteria and review evidence
- Story **E02:S04** status → IN PROGRESS (T07 reopen)
- New FBU: [BR-114](../../kanban/fbu/BR-114-doc-lifecycle-housekeeping-evergreen-default-ineffective.md)
- `kboard.md` Should Have row for E02:S04:T07 / BR-114

### Version / release surfaces

- `src/ai_dev_kit/version.py` → `0.2.4.7+2`
- SemVer allocation **v0.4.1249** (task_touch patch 1249)

---

## Notes

- Implementation of BR-114 AC remains gated on IPW/IDW (FR-083). This release is docs/kanban intake + reopen only.
- Related package owner: Epic 10 (`packages/frameworks/doc-lifecycle/`); DHKW scripts from E10:S01:T08 remain unused until operationalized.
