---
lifecycle: evergreen
ttl_days: null
created_at: 2026-02-26T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 5, Story 1, Task 46: Dual-Version Mode Requires Task-Touch SemVer in RW

**Task ID:** E5:S01:T46  
**Status:** IN PROGRESS  
**Priority:** HIGH  
**Estimated Effort:** Medium  
**Created:** 2026-02-26  
**Last updated:** 2026-04-13 (v0.5.1.46+6 – branch validator enforces dual ⇒ task_touch; installer/examples/tests)  
**Version:** v0.5.1.46+6  
**Code:** E5S01T46

**Repository Pattern:** FR-046 = E5:S01:T46 (first build: v0.5.1.46+1)

---

## Scope

Repository anchor task for **FR-046: Dual-Version Mode Requires Task-Touch SemVer in RW**.

This task:

- Anchors FR-046 in the FR repository story (`E5:S01`).
- Describes the requirement that dual-version repositories must use task-touch SemVer mapping and SemVer primary tags in RW.
- Defers actual implementation to dedicated tasks under the Workflow Management Framework epic/story.
- Accepts cross-task updates from `E3:S02:T12` planning/implementation work when SemVer collision hardening changes the precise RW semantics.

## Cross-task interaction (E3:S02:T12)

- `E3:S02:T12` is authorized to update this task's wording/acceptance criteria so FR-046 documentation stays aligned with implemented task-touch converter behavior and BR-061 fixes.
- Current planning artifact: [IPW-E3S02T12-task-touch-semver-collision-hardening](../../../../../implementation-cycles/IPW-E3S02T12-task-touch-semver-collision-hardening.md)

---

## Input

- **FR-046:** [`FR-046-rw-semver-tag-task-touch-mode.md`](../../../fr-br/FR-046-rw-semver-tag-task-touch-mode.md)
- **FR-045:** ADR-002 Task-Touch Derived Mapping (prerequisite).
- RW execution guide and `.cursorrules` RW trigger section.

---

## Deliverable

1. This task document as the canonical repository anchor for FR-046 (`E5:S01:T46`).
2. FR-046 linked from the FR repository story checklist and from this task.
3. A clear description of the desired RW tagging behaviour when task_touch is enabled, sufficient for implementation tasks.

### Contract (Normative)

- In dual-version mode, RW requires `semver_mapping_strategy: task_touch`.
- In `task_touch` mode, RW Step 11 primary tag is `vX.Y.Z` (SemVer core; no `+BUILD` in tag name).
- In `task_touch` mode, RW creates internal traceability tag `v{RC.EPIC.STORY.TASK+BUILD}` on the same commit by default (configurable opt-out only if explicitly disabled).
- Dual-version mode with non-task-touch strategy must fail validator checks before release mutation.
- In non-dual compatibility modes, RW preserves configured behavior.
- RW Step 12.5 (GitHub release) uses the same primary-tag decision path as Step 11 and includes internal version in release body.

---

## Acceptance Criteria

- [x] Task document exists and is linked from the FR Repo story checklist as **E5:S01:T46**.
- [x] FR-046 includes **Implementing Task:** E5:S01:T46 (bidirectional intake wiring).
- [x] The RW SemVer-tag behaviour is described clearly enough here and in FR-046 to support separate implementation tasks.

---

## Version Anchor

- **First Build:** v0.5.1.46+1 (this release) anchors FR-046 to E5:S01:T46 with documentation-only changes.
- Subsequent functional work for FR-046 should use `BUILD > 1` (e.g. `v0.5.1.46+2`, `+3`, …).

---

## Related Work

- **FR-046:** Release Workflow Uses SemVer Tag When task_touch Enabled.
- **FR-045:** ADR-002 Task-Touch Derived Mapping (Kanban → SemVer).

---

## Implementation Note (2026-04-10)

- Aligned RW tag handling to a single canonical strategy decision path (`get_rw_tag_info`) across tag creation and GitHub release creation.
- Clarified contract: in `task_touch` mode, primary tag is `vX.Y.Z` (no `+BUILD` in tag name), with internal traceability tag support preserved.
- Updated tests to enforce no `+BUILD` in primary `task_touch` tag names and to verify read-only vs finalize behavior boundaries.

## Policy Clarification (2026-04-13)

- FR-046/T46 now explicitly treat task-touch as mandatory for dual internal+external versioning.
- Follow-up implementation should ensure RW config validation fails fast if dual mode is selected with non-task-touch mapping.

## UKW bookkeeping (2026-04-13)

- Main `kboard.md` now lists perpetual **E2:S16:T03** in Ongoing (was missing next to T102/T103).
- `fbuboard.md` version context and **FR-046** active row updated to reflect **v0.5.1.46+6** implementation drop (verification still open on FR/T46).

## Verification Evidence

- `pytest`:
  - `packages/frameworks/workflow mgt/scripts/version/test_fr046_rw_tagging.py`
  - `packages/frameworks/workflow mgt/scripts/version/test_fr046_comprehensive.py`
  - `packages/frameworks/workflow mgt/scripts/version/test_task_touch_mapping.py`
  - Result: `22 passed`.
- `pytest` `packages/frameworks/workflow mgt/scripts/validation/test_validate_branch_context.py` → **7 passed** (FR-046 dual invariant + non-dual modes).
- Validator:
  - `python "packages/frameworks/workflow mgt/scripts/validation/validate_semver_tag_alignment.py"`
  - Result: `✅ SemVer tag alignment OK`.

---

## References

- **FR Repo Story:** [`Story-001-fr-repo.md`](../Story-001-fr-repo.md)
- **FR-046:** [`docs/project-management/kanban/fr-br/FR-046-rw-semver-tag-task-touch-mode.md`](../../../fr-br/FR-046-rw-semver-tag-task-touch-mode.md)
