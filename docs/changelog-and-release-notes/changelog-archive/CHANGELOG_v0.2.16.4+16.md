# Detailed Changelog — v0.2.16.4+16

**Release Date:** 2026-05-29 17:26:43 UTC  
**Internal Version:** v0.2.16.4+16  
**SemVer:** v0.4.822+16  
**Epic:** 2 | **Story:** 16 | **Task:** 4 (perpetual UKW / kanban hygiene)

---

## Summary

Kanban init (`RW -k --art`): bidirectional wiring between **kboard.md** and **fbuboard.md** — all active fbuboard rows now include **`E:S:T`** task links from FBU **`Implementing Task:`** fields; M/S/active C bands mirrored on kboard; perpetual rows cross-linked (**BR-067**, **FR-023**, **FR-058**, **FR-043**).

---

## Change implemented

- **fbuboard:** Added missing **`[E:S:T]`** links for 24 previously taskless active rows; documented bidirectional wiring rule; corrected **FR-044** → **E5:S01:T44**, **FR-074** → **E5:S01:T74**, **FR-030** duplicate link.
- **kboard:** Added **BR-039** (Must), **FR-087**, **BR-066**, **UXR-006** (Should), active Could rows (**FR-011**, **BR-058**, **FR-048**, **FR-063**, **FR-072**, **FR-074**); perpetual FBU cross-links on **T03/T04/T05/T14**.
- **FR-044:** **`Implementing Task:`** corrected from **E2:S08:T08** (FR-059) to **E5:S01:T44**.
- **fbu-open-taskless-queue:** Status snapshot updated for wiring pass.

---

## Verification

- Automated gap script: 0 fbuboard rows without **`E:S:T`** link; all M/S fbuboard items present on kboard.
