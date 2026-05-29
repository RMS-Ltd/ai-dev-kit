# Detailed Changelog — v0.5.1.46+5

**Release Date:** 2026-04-13 16:32:13 UTC  
**Version:** `v0.5.1.46+5`  
**SemVer:** `v0.4.734+5`  
**Task Anchor:** `E5:S01:T46` (`--art` adoption, `RW -k`)

---

## Summary

Change implemented: policy clarification for FR-046/T46 that dual-version mode requires task-touch SemVer mapping in RW.

---

## Changed

- Updated FR-046 language from optional task-touch behavior to mandatory policy in dual-version mode.
- Updated T46 contract wording to require validator hard-fail when dual-mode is combined with non-task-touch mapping.
- Preserved compatibility note for non-dual modes.

---

## Verification

- RW guard checks passed for `RW -k E5:S01:T46 --art`.
- Documentation lint checks for updated FR/T46 files reported no new errors.

---

## Traceability

- Epic: `5`
- Story: `1`
- Task: `46`
- FR: [FR-046](../../project-management/kanban/fr-br/FR-046-rw-semver-tag-task-touch-mode.md)
