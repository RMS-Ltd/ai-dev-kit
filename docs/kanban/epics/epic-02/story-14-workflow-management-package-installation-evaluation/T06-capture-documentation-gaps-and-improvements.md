---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T04:50:03Z
expires_at: null
housekeeping_policy: keep
---

# Epic 2, Story 14, Task 6: Capture documentation gaps and improvements

**Task ID:** E02:S14:T06  
**Status:** IN PROGRESS  
**Priority:** HIGH  
**Last updated:** 2026-06-05 (v0.2.14.6+1 — INSTALL_IN_YOUR_PROJECT wave 1)  
**Version:** v0.2.14.6+1  
**Code:** E02S14T06

---

## Task ID

**Format:** `E{epic}:S{story}:T{task}`

**Full Task ID:** `E02:S14:T06`

---

## Scope

**In scope (wave 1 — adopter SoT):**

- Refresh [`INSTALL_IN_YOUR_PROJECT.md`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md) per T01 matrix known gaps affecting the install entry point
- Update resolution status in [`installation-paths-matrix.md`](installation-paths-matrix.md) §Known gaps

**Out of scope (follow-on waves):**

- `rw-installer-quickstart-guide.md` (GAP-QS-001)
- `PACKAGE_INSTALLATION_GUIDE.md` workflow-mgt focus (GAP-DOC-001)
- Package README manual install steps (GAP-MANUAL-001)
- Cross-doc Python version alignment (GAP-PY-001) in user-docs
- Slug drift in user-docs / quickstart (GAP-SLUG-001)

---

## Input

- [installation-paths-matrix.md](installation-paths-matrix.md) §Known gaps (T01 handoff)
- [T01 task doc](T01-enumerate-supported-installation-paths-for-workflow-manageme.md)
- Findings from T02–T05 (as available)

---

## Deliverable

1. Refreshed [`INSTALL_IN_YOUR_PROJECT.md`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md)
2. Updated gap resolution table in [`installation-paths-matrix.md`](installation-paths-matrix.md)

---

## Wave 1 — INSTALL_IN_YOUR_PROJECT.md changes (v0.2.14.6+1)

| Gap ID | Resolution in INSTALL doc |
| ------ | ------------------------- |
| GAP-CLI-001 | Method 3 → "Available from source"; aligned with user-docs |
| GAP-ACQ-CFG-001 | Two-phase callout; Methods 1 & 3 require `install_release_workflow.py` after acquisition |
| GAP-QS-001 | Greenfield kanban tree uses UXR-017 lowercase paths; ADR-018 sole `kboard.md` |
| — | Framework versions 2.3.0 / 2.2.0; FR-062/078/079/108 marked Available; verification paths fixed |

---

## Remaining gaps (wave 2+)

| Gap ID | Target doc | Owner |
| ------ | ---------- | ----- |
| GAP-PY-001 | user-docs install guide vs README-rw-installer | T06 wave 2 |
| GAP-SLUG-001 | user-docs, quickstart examples | T06 wave 2 |
| GAP-QS-001 | `rw-installer-quickstart-guide.md` | T06 wave 2 |
| GAP-DOC-001 | `PACKAGE_INSTALLATION_GUIDE.md` | T06 wave 2 |
| GAP-MANUAL-001 | package README § Manual Installation | T06 wave 2 |

---

## Acceptance Criteria

- [x] `INSTALL_IN_YOUR_PROJECT.md` refreshed (CLI, versions, deferrals, two-phase, ADR-018 tree, verification)
- [x] `installation-paths-matrix.md` gap table updated with wave 1 resolutions
- [x] Remaining gaps documented with follow-on wave targets
- [ ] All T01 known gaps closed across repo (deferred to wave 2+)

---

## Version Anchor

**Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)`

---

## Migration Notes

Migrated from embedded Story section via `generate_task_doc.py` (FR-016 Wave 1 tooling).

**Source Story:** [`story-14-workflow-management-package-installation-evaluation.md`](../story-14-workflow-management-package-installation-evaluation.md)

---

## References

- [installation-paths-matrix.md](installation-paths-matrix.md)
- [T01 task doc](T01-enumerate-supported-installation-paths-for-workflow-manageme.md)
- [INSTALL_IN_YOUR_PROJECT.md](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md)
