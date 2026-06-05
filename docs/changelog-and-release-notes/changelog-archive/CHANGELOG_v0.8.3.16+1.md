# Changelog v0.8.3.16+1

**Release Date:** 2026-06-05 16:52:08 UTC  
**Epic:** 8 | **Story:** 3 | **Task:** 16 | **Build:** 1  
**SemVer:** v0.4.990+1  
**Summary:** T16 Wave 0 — security/Code Quality perpetual baseline + IPP

---

## Release scope

E08:S03:T16 — **Change implemented:** Wave 0 perpetual baseline manifest on `main` @ `777e956` (code scanning **0** open; standard/AI cross-refs); IPP-E08S03T16 wired; Actions merge gate documented (T15). SemVer **v0.4.990+1**.

---

## Changes

### Planning / governance

- **IPP-E08S03T16** — perpetual security/Code Quality operating model (Sections 1–7; ADR EXEMPT).
- **T16 task doc** — baseline manifest, coordination matrix, Actions cross-lane snapshot.
- **kboard** — T16 O-band `—IPP—` link.

### Baseline snapshot (`main` @ `777e956`)

| Surface | Open |
| ------- | ---- |
| Code scanning | **0** (5 fixed) |
| Standard maintainability | ~**145** (pre–777e956 re-scan) |
| Standard reliability | **34** |
| AI findings | **14** |

**Actions (T15 lane):** Tests / Docusaurus / Greenfield **failure** — merge gate active for T16 code waves.

---

## Verification

- Wave 0 docs-only; CI failures on `main` remain T15 scope.
- Dashboard maintainability delta after `777e956` — operator re-scan pending.

---

## References

- [IPP-E08S03T16](../../implementation-cycles/IPP-E08S03T16-github-security-code-quality-health-perpetual-fr112.md)
- [E08:S03:T16](../../project-management/kanban/epics/epic-08/story-03-automation-scripts/T16-github-security-code-quality-health-perpetual-fr112.md)
- [FR-112](../../project-management/kanban/fr-br/FR-112-perpetual-github-ci-and-security-health-lanes.md)
