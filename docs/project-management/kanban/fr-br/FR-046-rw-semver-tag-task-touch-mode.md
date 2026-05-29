---
lifecycle: evergreen
ttl_days: null
created_at: 2026-02-26T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Feature Request: Dual-Version Mode Requires Task-Touch SemVer in RW

**Type:** Feature Request (FR)  
**Submitted:** 2026-02-26  
**Submitted By:** XOforge (contributing to AI Dev Kit)  
**Priority:** HIGH  
**Status:** IN PROGRESS  
**Implementing Task:** [E5:S01:T46](../epics/Epic-5/Story-001-fr-repo/T46-rw-semver-tag-task-touch-mode.md)  
**GitHub Issue:** [#19](https://github.com/earlution/ai-dev-kit/issues/19)

---

## Summary

When a project adopts **dual-version mode** (internal `RC.EPIC.STORY.TASK+BUILD` plus external SemVer), **Release Workflow (RW) must use ADR-002 task-touch mapping** for SemVer and use SemVer tags (e.g. `v0.1.22`) as the primary Git tags for releases.

---

## Description

### What functionality is desired?

- For projects configured for **dual-versioning**:
  - RW must:
    - Compute SemVer for the current internal version using the **task-touch mapping**.
    - Create a Git tag named `v\{semver\}` where tag format is `vX.Y.Z` (no `+BUILD` in the Git tag name; example: `v0.1.22`).
    - Use that SemVer tag as the primary reference for GitHub releases and package publishing.
- RW should also create an internal traceability tag `v{RC.EPIC.STORY.TASK+BUILD}` on the same commit by default (configurable opt-out only if explicitly disabled).
- RW/validator configuration must reject dual-version mode when `semver_mapping_strategy != task_touch`.

### What problem does this solve?

Without this behaviour:

- Projects using task-touch mapping still get **internal-version tags** by default (e.g. `v0.5.1.44+1`), while:
  - Packages and external docs expect SemVer (e.g. `0.1.22`).
  - RW’s tags and package versions diverge, confusing automation and users.

Using SemVer tags with mandatory task-touch in dual-version mode ensures:

- Git tags and package versions stay aligned.
- The SemVer story is consistent for both humans and tooling.
- SemVer remains monotonic across releases even when internal Kanban numbering is non-monotonic relative to prior commits.

### What is the use case?

- AI Dev Kit and adopters (e.g. XOforge) using ADR-002 to derive SemVer want:
  - Tags like `v0.1.22` to match their package version.
  - Internal versions to remain visible but secondary.

### Who would benefit from this feature?

- Projects publishing packages to registries.
- Any workflow that:
  - Uses RW.
  - Uses dual internal+external versioning.

---

## Requirements

### Functional Requirements

- [ ] **FR-046:R01** – RW and validators detect **dual-version mode** and enforce `semver_mapping_strategy: task_touch` (hard-fail otherwise).
- [ ] **FR-046:R02** – In dual-version mode, RW Step 11:
  - Calls the task-touch SemVer converter (e.g. `get_semver_task_touch(include_build=False)`).
  - Creates a Git tag `v\{semver\}` (e.g. `v0.1.22`) pointing to the release commit.

- [ ] **FR-046:R03** – RW Step 11 creates internal tag `v{RC.EPIC.STORY.TASK+BUILD}` on the same commit for traceability (unless explicitly disabled by config), while SemVer tag remains the **primary external tag**.
- [ ] **FR-046:R04** – `create_github_release.py` (or equivalent tooling) uses the SemVer tag as the primary release name and includes the internal version in the body/metadata.
- [ ] **FR-046:R05** – Documentation (RW execution guide, `.cursorrules` RW trigger section) is updated to reflect dual-mode policy: task-touch is required.

### Non-Functional Requirements

- [ ] **FR-046:NF01** – **Compatibility:** Non-dual modes preserve explicit strategy behaviour (SemVer-only, Kanban-only, or internal-primary paths), but dual mode always requires task-touch.
- [ ] **FR-046:NF02** – **Traceability:** Internal version remains discoverable from the SemVer tag (e.g. included in release notes, optional internal tag).

---

## Scope Analysis

**Problem Domain:** Workflow Management Framework, Release Workflow, Tagging Strategy  
**Affected Areas:**

- [x] Documentation
- [x] Testing
- [x] RW implementation (tag creation, release script integration)
- [ ] Backend/API
- [ ] Frontend/UI
- [ ] Database/Schema
- [ ] Other:

**Estimated Complexity:**

- [ ] Simple (1-3 days)
- [x] Medium (1 week)
- [ ] Complex (2+ weeks)
- [ ] Very Complex (1+ month)

---

## Use Cases

### Primary Use Case

1. Project configures dual-version mode in `rw-config.yaml` (with `semver_mapping_strategy: task_touch`).
2. Release Workflow runs and:
   - Bumps internal version (e.g. `0.5.1.44+1`).
   - Derives SemVer via task-touch mapping (e.g. `0.1.22`).
   - Creates tag `v0.1.22`.
   - Optionally also creates `v0.5.1.44+1` on the same commit.
3. `create_github_release.py` uses `v0.1.22` as the release tag:
   - Release name: `v0.1.22`.
   - Body mentions internal version: `Internal: v0.5.1.44+1`.

### Additional Use Cases

- XOforge publishes a package version `0.1.22` that matches both:
  - `package.json` version.
  - Git tag `v0.1.22`.

---

## Acceptance Criteria

- [ ] **AC1:** In dual-version mode, RW Step 11 creates SemVer tags (`vX.Y.Z`, no `+BUILD` in the tag name) as the primary tag instead of internal version tags.
- [ ] **AC2:** Validation and tag creation are tested for:
  - dual-version mode + `task_touch` (pass),
  - dual-version mode + non-task-touch (deterministic fail),
  - non-dual compatibility paths (unchanged behavior).

- [ ] **AC3:** GitHub releases and package versions align on SemVer in dual-version mode; release title/tag uses SemVer while release body includes internal version for traceability.
- [ ] **AC4:** Documentation clearly explains the change and how to configure it.

---

## Dependencies

**Blocks:**

- Seamless task_touch SemVer experience for RW users.

**Blocked By:**

- FR-045 (ADR-002 Task-Touch Derived Mapping) implementation and availability of `get_semver_task_touch(...)`.

**Related Work:**

- ADR-002: Task-Touch Derived Mapping — Kanban to SemVer (GitHub issue #18).
- Release Workflow execution guide and `.cursorrules` RW trigger section.

---

## Intake Decision

**Intake Status:** PENDING  
**Intake Date:** 2026-02-26  
**Intake By:** [TBD]

**Decision Flow Results:**

- [ ] Story Match Found: [Epic 2, Story Y] → Task [T]
- [ ] New Story Created: [Epic 2, Story Y] → Task 1
- [ ] New Epic Created: [Epic X, Story 1, Task 1]

**Assigned To:**

- Epic: [TBD – likely Workflow Management Framework epic]
- Story: [TBD – RW tagging/CI integration story]
- Task: [TBD]
- Version: `[RC.EPIC.STORY.TASK+BUILD]`

**Kanban Links:**

- Epic: [`docs/project-management/kanban/epics/Epic-5/Epic-5.md`](../epics/Epic-5/Epic-5.md)
- Story: [`docs/project-management/kanban/epics/Epic-5/Story-001-fr-repo.md`](../epics/Epic-5/Story-001-fr-repo.md)
- Task: [`T46 – RW SemVer tag when task_touch`](../epics/Epic-5/Story-001-fr-repo/T46-rw-semver-tag-task-touch-mode.md)

---

## Notes

- This FR assumes ADR-002 (FR-045) is implemented and available. It focuses specifically on **RW behaviour** when that mapping is active.

## Implementation Decisions and Evidence (2026-04-10)

- Canonical tag decision source for RW Step 11 and Step 12.5 is `semver_converter.get_rw_tag_info(...)`.
- `task_touch` primary tag contract is `vX.Y.Z` (SemVer core tag name, no `+BUILD`).
- Internal traceability tag remains supported in `task_touch` mode and is generated on the same commit unless explicitly disabled by config in tag-handler usage.
- `create_github_release.py` now resolves tag behavior from the same canonical decision path used by tagging logic.

## Policy Clarification (2026-04-13)

- FR-046 scope is clarified: for repositories adopting dual internal+external versioning, task-touch is not optional; it is required policy.
- Non-task-touch paths remain compatibility options only for repositories not in dual-version mode.

### Verification Evidence

- `python -m pytest "packages/frameworks/workflow mgt/scripts/version/test_fr046_rw_tagging.py" "packages/frameworks/workflow mgt/scripts/version/test_fr046_comprehensive.py" "packages/frameworks/workflow mgt/scripts/version/test_task_touch_mapping.py" -q` → passed (`22 passed`).
- `python "packages/frameworks/workflow mgt/scripts/validation/validate_semver_tag_alignment.py"` → passed (`SemVer tag alignment OK`).
- `python -m pytest "packages/frameworks/workflow mgt/scripts/validation/test_validate_branch_context.py" -q` → **7 passed** (dual invariant, legacy, `semver_only`, `kanban_only`).

### Latest release anchor

- Released build: **v0.5.1.46+6** (SemVer: **v0.4.735+6**) with deterministic branch-context validation for dual mode + task-touch, installer defaults, docs, examples, and tests.

---

## References

- GitHub Issue [#19](https://github.com/earlution/ai-dev-kit/issues/19).
- RW execution documentation and `.cursorrules` RW trigger section.

---

_This feature request follows the Kanban Framework FR template and is anchored as FR-046 in the FR repository story (E5:S01:T46)._
