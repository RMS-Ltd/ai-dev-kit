# Detailed Changelog — v0.7.6.18+1

**Release Date:** 2026-04-13 13:34:26 UTC  
**Version:** `v0.7.6.18+1`  
**SemVer:** `v0.4.733+1`  
**Task Anchor:** `E7:S06:T18`

---

## Summary

Change implemented: hardened interactive installer UX and validation for Kanban path/pattern setup, including placeholder enforcement, match previews, rw-config kanban-root propagation, and clearer run-state messaging.

---

## Changed

- Updated RW installer (`install_release_workflow.py`) to enforce required placeholders (`{epic}`, `{story}`), preview path matches, and emit clearer partial-success signaling.
- Updated Kanban installer (`install_kanban_framework.py`) to honor `rw-config.yaml` `kanban_root` when default CLI path is used and to report canonical final statuses.
- Added focused tests covering placeholder validation, pattern preview behavior, and kanban path resolution from `rw-config.yaml`.
- Updated `UXR-007`, `T18`, and FR-077 context docs with implementation and recurrence evidence.

---

## Traceability

- Epic: `7`
- Story: `6`
- Task: `18`
