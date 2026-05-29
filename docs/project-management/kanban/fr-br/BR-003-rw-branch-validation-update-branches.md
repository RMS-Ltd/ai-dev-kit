---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-09T01:45:00Z
expires_at: null
housekeeping_policy: keep
---

# Bug Report: RW Branch Validation Missing Support for Update/Maintenance Branches

**Type:** Bug Report (BR)  
**Submitted:** 2025-12-09  
**Submitted By:** User  
**Priority:** MEDIUM  
**Severity:** MEDIUM  
**Status:** ACCEPTED

---

## Summary

The Release Workflow (RW) branch validation script (`validate_branch_context.py`) does not recognize `update/*` branch patterns (e.g., `update/ai-dev-kit`), causing warnings when running RW on branches used for framework updates. The validator should support update/maintenance branch patterns to properly validate version context.

---

## Description

**What is the bug?**
The `validate_branch_context.py` script only recognizes `main` branch and `epic/\{n\}` pattern branches. When running RW on an `update/ai-dev-kit` branch (or similar update/maintenance branches), the validator issues a warning: "Branch 'update/ai-dev-kit' not in known mapping - cannot validate version".

**What should happen vs. what actually happens?**
- **Expected:** The validator should recognize `update/*` branch patterns and either:
  - Skip version validation (similar to `main` branch behavior), OR
  - Extract version context from the branch name or configuration, OR
  - Provide a configurable mapping for update branches

- **Actual:** The validator issues a warning and cannot validate version context for update branches, even though these branches are valid for framework update work.

**When does it occur?**
This occurs whenever RW Step 1 (Branch Safety Check) runs on a branch that matches the `update/*` pattern (e.g., `update/ai-dev-kit`, `update/workflow-mgt`, etc.).

**Who is affected?**
- Projects using ai-dev-kit frameworks that create `update/*` branches for framework updates
- Users running RW on update/maintenance branches
- Projects that follow the pattern of using `update/*` branches for incorporating framework updates

---

## Affected Component

**Primary Component:** Release Workflow (RW) - Branch Validation  
**Affected Areas:**
- [ ] Backend/API
- [ ] Frontend/UI
- [ ] Database/Schema
- [ ] Integration/External Service
- [x] Documentation
- [x] Other: Workflow validation scripts

**Root Cause (if known):**
The `parse_branch_epic()` function in `validate_branch_context.py` only matches `epic/\{n\}` patterns. The validation logic at line 242-243 only handles `main` branch as a special case, and all other non-`epic/*` branches trigger the warning.

---

## Steps to Reproduce

1. Create or checkout a branch named `update/ai-dev-kit` (or any `update/*` pattern)
2. Run Release Workflow (RW) or execute Step 1 manually:
   ```bash
   python packages/frameworks/workflow\ mgt/scripts/validation/validate_branch_context.py --strict
   ```
3. Observe the warning:
   ```
   ⚠️  WARNINGS:
     - Branch 'update/ai-dev-kit' not in known mapping - cannot validate version
   ```

**Expected result:**
- No warning, or
- Warning with clear guidance on how update branches should be handled

**Actual result:**
- Warning is issued, but validation still passes (non-blocking)
- No clear guidance on whether update branches are valid or how they should be configured

---

## Environment

**Environment:** Development  
**Version:** v0.2.1.6+2 (ai-dev-kit), latest (been-there project)  
**Browser/Platform:** N/A (CLI tool)  
**OS:** macOS (darwin 24.6.0)

**Context:**
- This was discovered when updating the `been-there` project to the latest ai-dev-kit release
- The `update/ai-dev-kit` branch pattern is a good practice for incorporating framework updates
- The RW should recognize and support this pattern

---

## Impact

**User Impact:**
- [ ] Critical - System unusable
- [ ] High - Major functionality broken
- [x] Medium - Some functionality affected (validation warning, but workflow continues)
- [ ] Low - Minor issue, workaround available

**Business Impact:**
- Creates confusion about whether update branches are valid
- May discourage use of `update/*` branch pattern for framework updates
- Reduces confidence in RW validation when working on update branches

**Workaround:**
- Ignore the warning (validation still passes)
- Use `main` branch for framework updates (not recommended)
- Use `epic/\{n\}` pattern with a dummy epic number (not recommended)

---

## Acceptance Criteria (Fix Requirements)

- [x] `validate_branch_context.py` recognizes `update/*` branch patterns
- [x] Update branches are handled appropriately (skip validation similar to `main` branch)
- [ ] Documentation updated to explain update branch handling (pending)
- [x] No warnings issued for valid `update/*` branches
- [x] Support for other maintenance branch patterns (e.g., `maintenance/*`, `upgrade/*`) considered and implemented

**Verification Method:**
- [x] Test suite execution
- [x] Manual testing
- [ ] Both

**Fix Verification Status:**
- [x] Verified (test suite passed / manual test passed)
- [ ] Attempted Fix (pending verification)

---

## Fix Attempt History

**Purpose:** This section documents all fix attempts for this bug, ensuring that if a bug isn't squashed, the next build can be informed by previous attempts.

### Fix Attempts

#### Attempt 1: v0.2.1.7+1 - 2025-12-09

**Fix Description:**
Added support for `update/*`, `maintenance/*`, and `upgrade/*` branch patterns in `validate_branch_context.py`. Implemented `is_maintenance_branch()` function to detect maintenance branch patterns and updated validation logic to skip epic/version enforcement for these branches (similar to `main` branch behavior).

**Changes Made:**
- Added `is_maintenance_branch()` function with regex pattern matching for `update/*`, `maintenance/*`, and `upgrade/*` patterns
- Updated `validate_branch_context()` to detect and handle maintenance branches
- Maintenance branches now skip epic/version validation (no warnings, no enforcement)
- Added informational message when maintenance branch is detected: "Detected maintenance/update branch pattern; skipping epic/version enforcement."
- Updated condition to exclude maintenance branches from "Branch not in known mapping" warnings

**Verification Status:**
- [x] Verified (test suite passed / manual test passed)
- [ ] Attempted Fix (pending verification)
- [ ] Fix Failed (bug still present)

**Verification Method:**
- [x] Test suite execution
- [x] Manual testing
- [ ] Both

**Verification Evidence:**
- Code changes implemented and tested
- Maintenance branch patterns (`update/*`, `maintenance/*`, `upgrade/*`) now recognized
- No warnings issued for maintenance branches
- Validation logic correctly skips epic/version enforcement for maintenance branches

**Result:**
- [x] Bug Fixed
- [ ] Bug Partially Fixed (describe partial fix)
- [ ] Bug Not Fixed (describe why fix didn't work)

**Lessons Learned:**
- Maintenance/update branches are a valid pattern for framework updates
- Similar to `main` branch, these branches should skip epic/version enforcement
- Regex pattern matching is effective for detecting branch patterns

**Next Steps:**
- Test with actual `update/ai-dev-kit` branch in been-there project
- Consider adding configuration support for custom branch patterns (future enhancement)

---

## Dependencies

**Blocks:**
- None

**Blocked By:**
- None

**Related Work:**
- **Epic 2 Story 1:** RW Agent Execution & Docs (RW validation improvements)
- **BR-002:** Changelog validator ordering bug (related validation issue)

---

## Intake Decision

**Intake Status:** ACCEPTED  
**Intake Date:** 2025-12-09  
**Intake By:** AI Assistant

**Decision Flow Results:**
- [x] Story Match Found: Epic 2, Story 1 → Task 7 (new task)

**Assigned To:**
- Epic: Epic 2 - Workflow Management Framework
- Story: Story 1 - RW Agent Execution & Docs
- Task: E2:S01:T07 - Add support for update/maintenance branch patterns in branch validation
- Version: `0.2.1.7+1`

**Kanban Links:**
- Epic: [`docs/project-management/kanban/epics/Epic-2/Epic-2.md`](../epics/Epic-2/Epic-2.md)
- Story: [`docs/project-management/kanban/epics/Epic-2/Story-001-rw-agent-execution-and-docs.md`](../epics/Epic-2/Story-001-rw-agent-execution-and-docs.md)
- Task: E2:S01:T07 (to be added to Story 1)

---

## Notes

**User Feedback:**
> "I think incorporating branches is a good way to impl ai-dev-kit updates. However, the RW (from us) really should know about the update/ai-dev-kit branch."

**Design Considerations:**
1. **Option 1:** Treat `update/*` branches like `main` (skip version validation)
2. **Option 2:** Add configurable branch mapping in `rw-config.yaml`
3. **Option 3:** Support multiple branch patterns (e.g., `update/*`, `maintenance/*`, `upgrade/*`)
4. **Option 4:** Extract version context from branch name or allow explicit configuration

**Recommended Approach:**
- Support `update/*` pattern branches
- Allow configuration via `rw-config.yaml` for custom branch patterns
- Document update branch usage in RW documentation
- Consider supporting other common maintenance branch patterns

---

## References

- `packages/frameworks/workflow mgt/scripts/validation/validate_branch_context.py` - Branch validation script
- `packages/frameworks/workflow mgt/docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md` - RW agent execution guide
- `packages/frameworks/workflow mgt/config/rw-config-schema.md` - RW configuration schema (may need extension)

---

**Template Usage:**
- This BR follows the Kanban Framework BR template
- Intake decision links to Epic 2, Story 1, Task 7
- Fix will be tracked through the RW workflow

---

_This template is part of the Kanban Framework. See `packages/frameworks/kanban/` for complete framework documentation._


