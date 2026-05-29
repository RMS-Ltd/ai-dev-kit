---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-05T12:50:00Z
expires_at: null
housekeeping_policy: keep
---

# Bug Report: validate_version_bump.py Epic/Story Auto-Detection Bug

**Type:** Bug Report (BR)  
**Submitted:** 2025-12-05  
**Submitted By:** AI Agent (Auto)  
**Priority:** HIGH  
**Severity:** MEDIUM  
**Status:** ACCEPTED

---

## Summary

`validate_version_bump.py` validator fails to correctly identify Epic/Story numbers when auto-detecting Story files, matching wrong Epic numbers from file content references instead of using file path or Code field.

---

## Description

**What is the bug?**
The `validate_version_bump.py` validator's `find_story_file()` function uses regex to search for "Epic X" and "Story Y" patterns in file content. When a Story file references other Epics (e.g., "Epic 4 Story 3" in References section), the validator matches the first occurrence, which may be the wrong Epic.

**What should happen vs. what actually happens?**
- **Should:** Validator correctly identifies Epic 3, Story 3 from file path (`Epic-3/stories/Story-003`) or Code field (`E3S03`)
- **Actually:** Validator matches "Epic 4" from References section, fails to find correct Story file

**When does it occur?**
- When running `validate_version_bump.py` without `--story-file` argument
- When Story file contains references to other Epics in content
- During RW Step 9 (Run Validators)

**Who is affected?**
- Release Workflow execution (Step 9 validation fails)
- Automated validation pipelines
- Developers running validators manually

---

## Affected Component

**Primary Component:** Release Workflow Validation Scripts  
**Affected Areas:**
- [x] Backend/API
- [ ] Frontend/UI
- [ ] Database/Schema
- [ ] Integration/External Service
- [ ] Documentation
- [x] Other: Validation scripts

**Root Cause (if known):**
The `find_story_file()` function in `validate_version_bump.py` uses content-based regex matching (`r'Epic\s+(\d+)'`) which finds the first occurrence of "Epic X" in the file. When Story files reference other Epics (common in References sections), it matches the wrong Epic number.

---

## Steps to Reproduce

1. Run `validate_version_bump.py` without `--story-file` argument
2. Validator tries to auto-detect Story file for Epic 3, Story 3
3. Validator searches Story file content for "Epic 3" pattern
4. Finds "Epic 4" first (from References section: "Epic 4 Story 3")
5. Validator fails: "Could not find Story file for Epic 3, Story 3"

**Expected result:**
- Validator should extract Epic/Story from file path (`Epic-3/stories/Story-003`) or Code field (`E3S03`)
- Validator should successfully find and validate Story file

**Actual result:**
- Validator matches wrong Epic number from file content
- Validation fails with "Could not find Story file" error

---

## Environment

**Environment:** Development  
**Version:** v0.3.3.6+1  
**Browser/Platform:** N/A  
**OS:** macOS (darwin 24.6.0)

---

## Impact

**User Impact:**
- [ ] Critical - System unusable
- [ ] High - Major functionality broken
- [x] Medium - Some functionality affected
- [ ] Low - Minor issue, workaround available

**Business Impact:**
- RW Step 9 validation fails, blocking workflow completion
- Workaround exists (use `--story-file` argument), but auto-detection should work

**Workaround:**
- Use `--story-file` argument to explicitly provide Story file path
- Example: `python validate_version_bump.py --story-file "docs/project-management/kanban/epics/Epic-3/stories/Story-003-versioning-integration-with-kanban-and-rw.md" --strict`

---

## Acceptance Criteria (Fix Requirements)

- [ ] Criterion 1: Validator should extract Epic/Story from file path (`Epic-\{N\}/stories/Story-{NNN}`)
- [ ] Criterion 2: Validator should use Code field (`E\{epic\}S\{story\}`) as fallback if path extraction fails
- [ ] Criterion 3: Validator should only use content-based regex as last resort, and prefer path/Code field
- [ ] Criterion 4: Validator should correctly identify Epic 3, Story 3 from `Story-003-versioning-integration-with-kanban-and-rw.md`

**Verification Method:**
- [x] Test suite execution
- [x] Manual testing
- [ ] Both

**Fix Verification Status:**
- [ ] Verified (test suite passed / manual test passed)
- [ ] Attempted Fix (pending verification)

---

## Dependencies

**Blocks:**
- Reliable RW Step 9 validation

**Blocked By:**
- None

**Related Work:**
- Epic 2: Workflow Management Framework
- Story 1: RW Agent Execution and Docs (validation scripts)
- Task: TBD (will be created)

---

## Intake Decision

**Intake Status:** ACCEPTED  
**Intake Date:** 2025-12-05  
**Intake By:** AI Agent (Auto)

**Decision Flow Results:**
- [x] Story Match Found: Epic 2, Story 1 → Task E2:S01:T05

**Assigned To:**
- Epic: Epic 2 - Workflow Management Framework
- Story: Story 1 - RW Agent Execution and Docs
- Task: E2:S01:T05
- Version: `v0.2.1.5+1`

**Implementation Status:** IMPLEMENTED (v0.2.1.5+1)  
**Implementation Date:** 2025-12-05  
**Verification Status:** Verified (manual test passed)

**Kanban Links:**
- Epic: [`Epic-2.md`](../epics/Epic-2/Epic-2.md)
- Story: [`Story-001-rw-agent-execution-and-docs.md`](../epics/Epic-2/Story-001-rw-agent-execution-and-docs.md)
- Task: [To be created]

---

## Fix Attempt History

**Purpose:** This section documents all fix attempts for this bug, ensuring that if a bug isn't squashed, the next build can be informed by previous attempts.

**How to Use:**
- Each release that attempts to fix this bug should add a new entry to this section
- Document what was attempted, what worked, what didn't, and verification status
- This creates a knowledge base for future fix attempts

### Fix Attempts

#### Attempt 1: v0.2.1.5+1 - 2025-12-05

**Fix Description:**
Updated `find_story_file()` function in `validate_version_bump.py` to use a three-tier detection strategy:
1. **Primary:** Extract Epic/Story from file path (`Epic-\{N\}/stories/Story-{NNN}`)
2. **Secondary:** Extract from Code field (`**Code:** E\{epic\}S\{story\}`)
3. **Tertiary:** Content-based regex (only in header section, not References)

**Changes Made:**
- Added `extract_epic_story_from_path()` function to extract Epic/Story from file path
- Added `extract_epic_story_from_code_field()` function to extract from Code field
- Rewrote `find_story_file()` to use path extraction first, then Code field, then content regex
- Made content-based regex more specific (only searches first 50 lines, avoids References section)

**Verification Status:**
- [x] Verified (test suite passed / manual test passed)
- [ ] Attempted Fix (pending verification)
- [ ] Fix Failed (bug still present)

**Verification Method:**
- [x] Test suite execution
- [x] Manual testing
- [ ] Both

**Verification Evidence:**
- Manual test: `python validate_version_bump.py --strict` successfully found Story file for Epic 3, Story 3
- Validator correctly identified `Story-003-versioning-integration-with-kanban-and-rw.md` using path extraction
- Validator passed validation for v0.3.3.6+1

**Result:**
- [x] Bug Fixed
- [ ] Bug Partially Fixed (describe partial fix)
- [ ] Bug Not Fixed (describe why fix didn't work)

**Lessons Learned:**
- File path extraction is most reliable method (doesn't depend on file content)
- Code field (`E\{epic\}S\{story\}`) is reliable fallback (explicit metadata)
- Content-based regex should be last resort and more specific (avoid References sections)

**Next Steps:**
- None - bug is fixed

---

---

## Notes

This bug was discovered during RW execution for v0.3.3.6+1. The validator failed during Step 9, but the workflow proceeded because the version bump logic was correct (manually verified). The auto-detection logic needs to be more robust.

---

## References

- `packages/frameworks/workflow mgt/scripts/validation/validate_version_bump.py`
- `docs/architecture/standards-and-adrs/workflow-flaws-reference-guide.md`
- `packages/frameworks/numbering & versioning/integration/integration-troubleshooting-guide.md` (Issue 7: Story File Not Found)

---

**Template Usage:**
- This BR follows the Bug Report template
- Will be linked to a Task in Epic 2, Story 1
- Fix will be tracked in Fix Attempt History section

---

_This template is part of the Kanban Framework. See `packages/frameworks/kanban/` for complete framework documentation._

