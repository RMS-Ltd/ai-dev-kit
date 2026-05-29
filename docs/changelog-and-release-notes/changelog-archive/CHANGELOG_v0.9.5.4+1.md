---
version: 0.9.5.4+1
semver: 0.4.788+1
date: 2026-05-18
---

# Changelog for v0.9.5.4+1

**Internal Version:** 0.9.5.4+1
**SemVer:** 0.4.788+1
**Release Date:** 2026-05-18
**Task:** E9:S05:T04
**Epic:** 9 — Release Candidate Readiness
**Story:** 5 — Canonical E/S/T Review and Refinement

---

## Summary

UXR-011 filed — Kanban naming hygiene and directory systematic cleanup. Comprehensive audit findings documented; implementing task created under E9:S05:T04 and wired to fbuboard/kboard/Epic-9.

---

## Changes

### Documentation

- Created `UXR-011-kanban-naming-hygiene-and-directory-systematic-cleanup.md` — User Experience Research document with full audit findings:
  - Finding 1: 51 stale Txxx (3-digit) task files mixed among 185 Txx (2-digit) files
  - Finding 2: Duplicate story files under same epic with same story number but different names (Epics 5, 6, 7, 9)
  - Finding 3: Duplicate task files with identical content but different names (Epic-2/Story-002)
  - Finding 4: Orphaned directory `Epic-5/Story-002/` with no matching `.md`
  - Finding 5: Missing zero-padding (`Epic-7/Story-04` instead of `Story-004`)
  - Finding 6: Cross-epic story name collisions (Epic-9 vs Epic-24)

- Created `T04-kanban-naming-hygiene-and-directory-systematic-cleanup-uxr011.md` — Implementing task under E9:S05 with scope, deliverables, acceptance criteria, dependencies, and cross-wiring.

- Updated `Epic-9.md` — Story checklist: E9:S05 now shows T04; last updated refreshed.

- Updated `Story-005-canonical-est-review-and-refinement.md` — Task checklist includes T04 with bidirectional link.

- Updated `fbuboard.md` — UXR-011 added to Should Have (S) section; last updated refreshed.

- Updated `kboard.md` — E9:S05:T04 added to Should Have (S) tasks; last updated refreshed.

---

## Acceptance Criteria Status

- [x] UXR-011 created with full audit findings
- [x] Implementing task E9:S05:T04 created and wired bidirectionally
- [x] Epic-9 story checklist updated
- [x] fbuboard.md updated with UXR-011 row
- [x] kboard.md updated with E9:S05:T04 row
- [ ] Inventory list of all affected files
- [ ] All Txxx files renamed to Txx
- [ ] All duplicate story files reconciled
- [ ] All duplicate task files removed
- [ ] All orphaned directories resolved
- [ ] Governance policy updated

---

## Verification

- `validate_changelog_archive_links.py`: Non-blocking (12 pre-existing dangling links; UXR-011 link resolves)
- Branch context: `dev` — validated

---

_This changelog is part of the AI Dev Kit Release Workflow. See `packages/frameworks/workflow mgt/` for complete framework documentation._
