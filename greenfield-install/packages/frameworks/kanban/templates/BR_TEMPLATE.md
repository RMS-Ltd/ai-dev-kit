---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:01:57Z
expires_at: null
housekeeping_policy: keep
---

# Bug Report: [Title]

**Type:** Bug Report (BR)  
**Submitted:** [YYYY-MM-DD]  
**Submitted By:** [Name/Username]  
**Priority:** [CRITICAL/HIGH/MEDIUM/LOW]  
**Severity:** [CRITICAL/HIGH/MEDIUM/LOW]  
**Status:** [PENDING/INTAKE/ACCEPTED/REJECTED/DEFERRED]

---

## Summary

[One sentence description of the bug.]

---

## Description

[Detailed description of the bug. Include:]
- What is the bug?
- What should happen vs. what actually happens?
- When does it occur?
- Who is affected?

---

## Affected Component

**Primary Component:** [e.g., User Authentication, Payment Processing, UI Component]  
**Affected Areas:**
- [ ] Backend/API
- [ ] Frontend/UI
- [ ] Database/Schema
- [ ] Integration/External Service
- [ ] Documentation
- [ ] Other: [specify]

**Root Cause (if known):**
[Description of the root cause, if identified]

---

## Steps to Reproduce

1. Step 1
2. Step 2
3. Step 3
4. [Expected result]
5. [Actual result]

---

## Environment

**Environment:** [Production/Staging/Development]  
**Version:** [Version number or commit hash]  
**Browser/Platform:** [If applicable]  
**OS:** [If applicable]

---

## Impact

**User Impact:**
- [ ] Critical - System unusable
- [ ] High - Major functionality broken
- [ ] Medium - Some functionality affected
- [ ] Low - Minor issue, workaround available

**Business Impact:**
[Description of business impact, if applicable]

**Workaround:**
[If a workaround exists, describe it here]

---

## Acceptance Criteria (Fix Requirements)

- [ ] Criterion 1: [Specific, testable criterion for fix]
- [ ] Criterion 2: [Specific, testable criterion for fix]
- [ ] Criterion 3: [Specific, testable criterion for fix]

**Verification Method:**
- [ ] Test suite execution
- [ ] Manual testing
- [ ] Both

**Fix Verification Status:**
- [ ] Verified (test suite passed / manual test passed)
- [ ] Attempted Fix (pending verification)

---

## Fix Attempt History

**Purpose:** This section documents all fix attempts for this bug, ensuring that if a bug isn't squashed, the next build can be informed by previous attempts.

**How to Use:**
- Each release that attempts to fix this bug should add a new entry to this section
- Document what was attempted, what worked, what didn't, and verification status
- This creates a knowledge base for future fix attempts

### Fix Attempts

#### Attempt 1: [Version] - [Date]

**Fix Description:**
[Describe what was attempted to fix this bug]

**Changes Made:**
- [List specific changes, files modified, code changes, etc.]

**Verification Status:**
- [ ] Verified (test suite passed / manual test passed)
- [ ] Attempted Fix (pending verification)
- [ ] Fix Failed (bug still present)

**Verification Method:**
- [ ] Test suite execution
- [ ] Manual testing
- [ ] Both

**Verification Evidence:**
[Link to test results, CI/CD output, or documentation]

**Result:**
- [ ] Bug Fixed
- [ ] Bug Partially Fixed (describe partial fix)
- [ ] Bug Not Fixed (describe why fix didn't work)

**Lessons Learned:**
[What was learned from this attempt? What should be tried differently next time?]

**Next Steps:**
[What should be attempted in the next fix attempt?]

---

## Dependencies

**Blocks:**
- [What this BR blocks]

**Blocked By:**
- [What blocks this BR]

**Related Work:**
- [Related BRs, Stories, Tasks, or Epics]

---

## Intake Decision

**Intake Status:** [PENDING/INTAKE/ACCEPTED/REJECTED/DEFERRED]  
**Intake Date:** [YYYY-MM-DD]  
**Intake By:** [Name/Username]

**Decision Flow Results:**
- [ ] Story Match Found: [Epic X, Story Y] → Task [T]
- [ ] New Story Created: [Epic X, Story Y] → Task 1
- [ ] New Epic Created: [Epic X, Story 1, Task 1]

**Assigned To:**
- Epic: [Epic number and name]
- Story: [Story number and name]
- Task: [Task number and name]
- Version: `[RC.EPIC.STORY.TASK+BUILD]`

**Kanban Links:**
- Epic: [`docs/project-management/kanban/epics/Epic-X/Epic-X.md`](path/to/Epic-X.md)
- Story: [`docs/project-management/kanban/epics/Epic-X/Story-XXX-*.md`](path/to/Story.md)
- Task: [Link to Task in Story document]

---

## Notes

[Additional notes, context, or considerations]

---

## References

- [Related documentation, specs, diagrams, external resources]
- [Related bug reports or issues]

---

**Template Usage:**
- Copy this template when creating a new Bug Report
- Fill in all relevant sections
- Use the "Intake Decision" section to track the FR/BR → Task → Story → Epic conversion
- Link to the created Task/Story/Epic for traceability
- **CRITICAL:** Fixes must be verified through testing before being marked as "Fixed" in changelogs

---

_This template is part of the Kanban Framework. See `packages/frameworks/kanban/` for complete framework documentation._

