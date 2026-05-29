---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-11T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Feature Request: Version Validator Abstract Space Awareness

**Type:** Feature Request (FR)  
**Submitted:** 2025-12-11  
**Submitted By:** User  
**Priority:** HIGH  
**Status:** ACCEPTED  

---

## Summary

Update the version number validator in the Release Workflow to be aware of abstract spaces (`+0` builds) and the conditions under which they're valid. The validator must understand that `+0` is valid if and only if an E/S/T doc is being committed for the first time (doc-init build).

---

## Description

### What is the Feature?

An enhancement to `validate_version_bump.py` that:
- Recognizes `+0` as a valid BUILD number for abstract spaces
- Validates that `+0` is only used when an E/S/T doc is being committed for the first time
- Checks that `+0` commits are docs-only (no code changes)
- Provides clear error messages when `+0` is used incorrectly
- Validates that functional changes require `+1` or higher

### What Should Happen vs. What Currently Happens?

**Expected Behavior:**
- Validator accepts `+0` when:
  - An E/S/T doc (Epic/Story/Task) is being committed for the first time
  - The commit is docs-only (no code changes)
  - The version matches the E/S/T being created (e.g., `0.2.11.0+0` for E2:S11:T00)

- Validator rejects `+0` when:
  - Non-doc changes are present in the commit
  - The E/S/T doc already exists (not first-time commit)
  - Functional changes are included

- Validator enforces `+1` or higher for functional changes
- Clear error messages explain why `+0` is invalid if used incorrectly

**Current Behavior:**
- Validator expects BUILD >= 1 for all version bumps
- Validator fails when encountering `+0` builds (as seen in RW for E2:S11:T00)
- No awareness of abstract space concept or doc-init builds
- No validation of docs-only requirement for `+0` builds
- No detection of first-time E/S/T doc commits

### When Does It Occur?

This feature is needed:
- **Every time RW runs with a `+0` build** - Validator must recognize abstract space
- **When validating doc-init builds** - Must check docs-only requirement
- **When validating functional changes** - Must enforce `+1` or higher

### Who is Affected?

**Primary Affected:**
- Release Workflow (RW Step 8 - version validation)
- Developers creating new E/S/T docs (doc-init builds)
- Framework maintainers (validator reliability)

**Secondary Affected:**
- Versioning policy enforcement
- Forensic traceability (abstract space validation)

---

## Problem / Anti-Pattern

- Version validator fails on valid `+0` abstract space builds
- No validation that `+0` is only used for first-time E/S/T doc commits
- No enforcement of docs-only requirement for `+0` builds
- Validator doesn't understand abstract space concept from FR-017/FR-018
- Manual workaround needed (acknowledge validator error and proceed)

---

## Requirements

### Functional Requirements

- [ ] **FR-020:R01** - Validator recognizes `+0` as valid BUILD for abstract spaces
- [ ] **FR-020:R02** - Validator checks that `+0` is only used for first-time E/S/T doc commits
- [ ] **FR-020:R03** - Validator validates that `+0` commits are docs-only (no code changes)
- [ ] **FR-020:R04** - Validator enforces `+1` or higher for functional changes
- [ ] **FR-020:R05** - Validator provides clear error messages for invalid `+0` usage
- [ ] **FR-020:R06** - Validator detects E/S/T doc creation (new file detection)
- [ ] **FR-020:R07** - Validator checks git diff for docs-only requirement
- [ ] **FR-020:R08** - Validator integrates with RW Step 1 doc-init detection

### Non-Functional Requirements

- [ ] **FR-020:NF01** - **Reliability:** Validator must correctly identify abstract space conditions
- [ ] **FR-020:NF02** - **Usability:** Clear error messages explain validation failures
- [ ] **FR-020:NF03** - **Integration:** Works seamlessly with existing RW validation flow

---

## Scope Analysis

**Problem Domain:** Version Validation, Release Workflow, Abstract Spaces  
**Affected Areas:**
- [x] Backend/API (validator script)
- [ ] Frontend/UI
- [ ] Database/Schema
- [x] Documentation (validator behavior, error messages)
- [x] Testing (validator test cases)
- [x] Other: RW Step 1 integration, git diff analysis

**Estimated Complexity:**
- [ ] Simple (1-3 days)
- [x] Medium (1 week)
- [ ] Complex (2+ weeks)
- [ ] Very Complex (1+ month)

---

## Use Cases

**Primary Use Case:**
1. Developer creates new Story doc: `Epic-2/Story-011-intake-workflow-automation.md`
2. Developer runs RW for E2:S11:T00 (Story Creation)
3. RW Step 2 bumps version to `0.2.11.0+0` (abstract space)
4. RW Step 8 runs validator: `validate_version_bump.py`
5. Validator detects:
   - BUILD = 0 (abstract space)
   - New Story doc being committed (first-time)
   - Commit is docs-only (no code changes)
6. Validator accepts `+0` as valid ✅
7. RW proceeds successfully

**Additional Use Cases:**
- Validator rejects `+0` if code changes are present
- Validator rejects `+0` if E/S/T doc already exists
- Validator enforces `+1` for functional changes after doc-init

---

## Acceptance Criteria

- [ ] **AC1:** Validator recognizes `+0` as valid BUILD for abstract spaces
- [ ] **AC2:** Validator checks that `+0` is only used for first-time E/S/T doc commits
- [ ] **AC3:** Validator validates that `+0` commits are docs-only (no code changes)
- [ ] **AC4:** Validator enforces `+1` or higher for functional changes
- [ ] **AC5:** Validator provides clear error messages for invalid `+0` usage
- [ ] **AC6:** Validator detects E/S/T doc creation (new file detection)
- [ ] **AC7:** Validator checks git diff for docs-only requirement
- [ ] **AC8:** Validator integrates with RW Step 1 doc-init detection
- [ ] **AC9:** Validator test cases cover all abstract space scenarios
- [ ] **AC10:** Documentation updated with abstract space validation logic

---

## Dependencies

**Blocks:**
- Proper validation of abstract space builds
- Enforcement of docs-only requirement for `+0` builds
- Clear error messages for invalid abstract space usage

**Blocked By:**
- **FR-016:** Kanban Granularity & Discrete Task Docs (blocks E4:S11 and E2:S09, which are prerequisites)
- **E4:S11:** Kanban-specific work (policy, templates) - must complete before E2:S09
- **E2:S09:** RW integration work (Task doc presence) - must complete before E2:S10:T01
- **E2:S10:T01:** RW Step 1 Doc-Init Path - must complete before E2:S10:T02
- **E2:S10:T02:** Doc-Init Validation (Docs-Only Check) - must complete before E2:S10:T06
- **FR-017:** Versioning Policy Hardening — Doc-Init Build (+0) (abstract space concept)
- **FR-018:** Abstract Space for Zero-Numbered E/S/T Docs (abstract space definition)

**Dependency Chain:**
FR-016 → E4:S11 → E2:S09 → E2:S10:T01 → E2:S10:T02 → E2:S10:T06 (this task)

**Related Work:**
- **FR-016:** Kanban Granularity & Discrete Task Docs (3-Tier Structure) (blocks E4:S11 and E2:S09)
- **FR-017:** Versioning Policy Hardening — Doc-Init Build (+0) (defines abstract space concept)
- **FR-018:** Abstract Space for Zero-Numbered E/S/T Docs (defines abstract space policy)
- **E2:S10:** Doc-Init Build (+0) for New E/S/T (implementation of abstract spaces)
- **E2:S10:T01:** RW Step 1 Doc-Init Path (prerequisite for T02)
- **E2:S10:T02:** Implement Doc-Init Validation (Docs-Only Check) (prerequisite for T06)
- **E2:S10:T06:** Update Version Validator for Abstract Space Awareness (this task)
- **E2:S09:** Kanban Granularity & Discrete Task Docs (RW Integration) (prerequisite for T01)
- **E4:S11:** Kanban Granularity & Discrete Task Docs (Kanban Framework) (prerequisite for E2:S09)

---

## Intake Decision

**Intake Status:** ACCEPTED  
**Intake Date:** 2025-12-11  
**Intake By:** AI Agent (Auto)

**Decision Flow Results:**
- [x] New Task Created: Epic 2, Story 10, Task 06 (Validator enhancement)

**Assigned To:**
- Epic: Epic 2 (Workflow Management Framework)
- Story: Story 10 (Doc-Init Build (+0) for New E/S/T)
- Task: T06 (Update Version Validator for Abstract Space Awareness)
- Version: `v0.2.10.6+0` (Task creation - abstract space)

**Kanban Links:**
- Epic: [`docs/project-management/kanban/epics/Epic-2/Epic-2.md`](../epics/Epic-2/Epic-2.md)
- Story: [`docs/project-management/kanban/epics/Epic-2/Story-010-doc-init-build-zero-for-new-est.md`](../epics/Epic-2/Story-010-doc-init-build-zero-for-new-est.md)
- Task: See Story 10 task checklist (T06)

---

## Rationale

**Why This Matters:**
- **Validation:** Ensures abstract space builds are used correctly
- **Enforcement:** Prevents misuse of `+0` builds (functional changes on `+0`)
- **Reliability:** Validator must understand abstract space concept to avoid false failures
- **Traceability:** Proper validation ensures forensic traceability integrity

**Why This Should Be Implemented:**
- Current validator fails on valid `+0` abstract space builds (as seen in E2:S11:T00 RW)
- No enforcement of docs-only requirement for `+0` builds
- No detection of first-time E/S/T doc commits
- Manual workaround needed (acknowledge validator error and proceed)

---

## Implementation Notes

**Key Considerations:**
1. Validator must detect:
   - New E/S/T doc files (first-time commit)
   - Docs-only commits (no code changes in git diff)
   - Correct version matching (e.g., `0.2.11.0+0` for E2:S11:T00)
2. Integration points:
   - RW Step 1 doc-init detection (if available)
   - Git diff analysis for docs-only check
   - Story file parsing for E/S/T identification
3. Error messages should explain:
   - Why `+0` is invalid (if used incorrectly)
   - What conditions make `+0` valid
   - How to fix invalid usage

**Implementation Approach:**
1. Update `validate_version_bump.py` to accept `+0` as valid BUILD
2. Add detection logic for first-time E/S/T doc commits
3. Add git diff analysis for docs-only requirement
4. Add validation logic for abstract space conditions
5. Update error messages to explain abstract space requirements
6. Add test cases for abstract space scenarios
7. Update documentation

**Note:** This implementation will require multiple RWs with BUILD bumps for each E/S/T file being updated during the work. Each file update (validator script, test files, documentation) should be committed with its own BUILD increment.

---

## References

- **FR-017:** `docs/project-management/kanban/fr-br/FR-017-versioning-policy-hardening-doc-init-build.md`
- **FR-018:** `docs/project-management/kanban/fr-br/FR-018-abstract-space-zero-numbered-est-docs.md`
- **E2:S10:** `docs/project-management/kanban/epics/Epic-2/Story-010-doc-init-build-zero-for-new-est.md`
- **Validator Script:** `packages/frameworks/workflow mgt/scripts/validation/validate_version_bump.py`
- **Versioning Policy:** `docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md`

---

**Template Usage:**
This FR follows the Kanban Framework FR template.  
This feature request is part of the Workflow Management Framework. See `packages/frameworks/workflow mgt/` for complete framework documentation.

