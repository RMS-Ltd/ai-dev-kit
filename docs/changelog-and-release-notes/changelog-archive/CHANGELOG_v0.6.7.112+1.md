# Detailed Changelog — v0.6.7.112+1

**Release Date:** 2026-04-10 09:19:04 UTC  
**Version:** `v0.6.7.112+1`  
**SemVer:** `v0.4.725+1`  
**Task Anchor:** `E6:S07:T112` (`--art` adoption)

---

## Summary

Change implemented: initialized T112 execution by moving task state to `IN PROGRESS`, adding a durable IPW planning package, and wiring host-task planning references for implementation readiness.

---

## Changed

- Updated task status for `E6:S07:T112` to `IN PROGRESS`.
- Added planning artifact `IPW-E6S07T112-install-feedback-submission-governance.md` with specification, test design, implementation plan, and T111/T112 boundary contract.
- Wired plan artifact references into `T112` task doc (`Input` + `References`).
- Synced project version, changelogs, README, and kanban traces to the new release anchor.

---

## Traceability

- Epic: `6`
- Story: `7`
- Task: `112`
- FR: [FR-079](../../project-management/kanban/fr-br/FR-079-install-feedback-submission-path-and-governance.md)
