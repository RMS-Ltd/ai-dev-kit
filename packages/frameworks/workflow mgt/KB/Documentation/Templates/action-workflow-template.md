---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:01:57Z
expires_at: null
housekeeping_policy: keep
---

# Action Workflow Template

**Purpose:** Template for acting on verification results (ACT phase of PDCA)  
**Used In:** Release Workflow Step 13  
**Related:** PDCA Integration, Fix Verification, Continuous Improvement

---

## Action Workflow Overview

Step 13 (ACT phase) acts on verification results from Step 12 (CHECK phase). The action taken depends on the verification status:

- **Verified:** Update changelog, standardize practices
- **Failed:** Document failure, create follow-up
- **Deferred:** Document plan, schedule verification
- **Process Improvement:** Document improvements, update docs

---

## Verified Fix Actions

### When Verification Succeeds

**Action:** Update changelog to reflect verified fix

**Process:**

1. **Update Detailed Changelog:**
   - Move entry from "Attempted Fixes" to "Fixed" section
   - Add verification evidence
   - Add verification timestamp
   - Update verification status

2. **Update Main Changelog:**
   - Move entry from "Attempted Fixes" to "Fixed" subsection
   - Include verification evidence link
   - Update summary

3. **Standardize Practices:**
   - Document what worked
   - Identify successful patterns
   - Apply to future releases

**Changelog Update Format:**

**Before (Attempted Fix):**
```markdown
### Attempted Fixes (Pending Verification)
- Attempted fix for issue description
  - **Verification Status:** Attempted Fix (Pending Verification)
  - **Verification Method:** [To be determined]
  - **Next Steps:** Run test suite / Perform manual testing
```

**After (Fixed):**
```markdown
### Fixed
- Fixed issue description
  - **Verification Status:** Verified ✅
  - **Verification Method:** Test Suite Execution
  - **Verification Date:** 2025-12-03 15:30:00 UTC
  - **Verification Evidence:** [Link to test results]
  - **Verification Result:** All tests pass (15/15)
```

**Option A: Create New Release (Recommended)**
- Increment BUILD number: `v0.2.2.1+1` → `v0.2.2.2+1`
- Create new changelog entry
- Full traceability maintained
- Clear verification timeline

**Option B: Update Existing Release**
- Update existing changelog file
- Requires manual file edit
- Less traceable (no new version)

---

## Failed Fix Actions

### When Verification Fails

**Action:** Document failure and create follow-up

**Process:**

1. **Document Failure:**
   - Add "Failed Fixes" section to changelog
   - Document what didn't work
   - Document root causes
   - Document what was learned

2. **Create Follow-Up Task:**
   - Create new task in Kanban
   - Link to original task
   - Document what needs to be fixed
   - Plan next iteration

3. **Plan Next Iteration:**
   - Identify what to change
   - Plan verification approach
   - Schedule follow-up work

**Changelog Update Format:**

```markdown
### Failed Fixes
- Attempted fix for issue description (verification failed)
  - **Verification Status:** Failed ❌
  - **Verification Method:** Test Suite Execution
  - **Verification Date:** 2025-12-03 15:30:00 UTC
  - **Verification Result:** Tests fail (5/15)
  - **Root Causes:** [Document root causes]
  - **What Didn't Work:** [Document what didn't work]
  - **Lessons Learned:** [Document lessons learned]
  - **Follow-Up Task:** E2:S02:T07 – Fix verification issue
```

**Follow-Up Task Creation:**

```markdown
# Task 007 – Fix Verification Issue

**Task:** E2:S02:T07  
**Status:** TODO  
**Priority:** HIGH  
**Created:** 2025-12-03  
**Story:** Story 002 – PDCA Integration into Release Workflow  
**Related:** E2:S02:T02 (failed verification)

## Overview

Fix verification issue identified in T002. Original fix did not work as expected.

## Root Causes

- [Document root causes from Step 13 analysis]

## What Needs to be Fixed

- [Document what needs to be fixed]

## Approach

- [Document approach for next iteration]
```

---

## Deferred Verification Actions

### When Verification is Deferred

**Action:** Document verification plan and schedule

**Process:**

1. **Document Verification Plan:**
   - Add "Deferred Verification" section to changelog
   - Document why verification is deferred
   - Document verification plan
   - Schedule verification

2. **Create Reminder Task:**
   - Create reminder task in Kanban
   - Schedule verification date
   - Document verification steps
   - Set up notification/reminder

3. **Document Next Steps:**
   - What needs to happen before verification
   - When verification will occur
   - Who will perform verification
   - How verification will be documented

**Changelog Update Format:**

```markdown
### Deferred Verification
- Attempted fix for issue description (verification deferred)
  - **Verification Status:** Deferred ⏸️
  - **Reason:** Requires production deployment
  - **Verification Plan:** Verify after next deployment
  - **Scheduled Date:** 2025-12-05
  - **Next Steps:** 
    1. Deploy to production
    2. Run verification tests
    3. Document results
  - **Reminder Task:** E2:S02:T08 – Verify fix after deployment
```

**Reminder Task Creation:**

```markdown
# Task 008 – Verify Fix After Deployment

**Task:** E2:S02:T08  
**Status:** TODO  
**Priority:** MEDIUM  
**Created:** 2025-12-03  
**Scheduled:** 2025-12-05  
**Story:** Story 002 – PDCA Integration into Release Workflow  
**Related:** E2:S02:T02 (deferred verification)

## Overview

Verify fix from T002 after production deployment.

## Verification Steps

1. Deploy to production
2. Run verification tests
3. Document results
4. Update changelog based on results

## Verification Plan

- [Document verification plan]
```

---

## Process Improvement Actions

### When Process Improvements Identified

**Action:** Document improvements and update documentation

**Process:**

1. **Document Lessons Learned:**
   - What worked well
   - What could be improved
   - Process improvements identified
   - Tooling improvements needed

2. **Update Documentation:**
   - Update RW execution guide
   - Update templates
   - Update examples
   - Update best practices

3. **Create Process Improvement Task:**
   - Create task for process improvement
   - Document improvement plan
   - Schedule implementation

**Process Improvement Documentation Format:**

```markdown
## ACT Phase (Process Improvement)

### Lessons Learned

**What Worked Well:**
- PDCA approach ensures verification
- Reflection questions capture learning
- Templates provide consistency

**What Could Be Improved:**
- Need better integration with CI/CD
- Verification could be more automated
- Reflection could be more structured

### Process Improvements

**Identified Improvements:**
1. Add CI/CD integration for verification
2. Automate verification status updates
3. Enhance reflection questions template

**Implementation Plan:**
- Create task for CI/CD integration
- Update verification workflow
- Enhance templates

**Process Improvement Task:** E2:S02:T09 – Integrate CI/CD for verification
```

---

## Integration with Changelog

### Changelog Sections

**Fixed Section:**
- Only verified fixes
- Includes verification evidence
- Includes verification timestamp

**Attempted Fixes Section:**
- Unverified fixes
- Includes verification plan
- Includes next steps

**Failed Fixes Section:**
- Failed verification attempts
- Includes root causes
- Includes lessons learned
- Includes follow-up tasks

**Deferred Verification Section:**
- Deferred verification
- Includes verification plan
- Includes scheduled date
- Includes reminder tasks

---

## Best Practices

1. **Always Act:** Don't leave verification results unaddressed
2. **Document Everything:** Document all actions taken
3. **Create Follow-Ups:** Don't lose track of deferred/failed fixes
4. **Improve Continuously:** Use process improvements to enhance RW
5. **Maintain Traceability:** Keep full traceability of verification → action

---

## References

- **PDCA Integration Plan:** `docs/architecture/standards-and-adrs/rw-pdca-integration-plan.md`
- **RW Step 12:** `packages/frameworks/workflow mgt/docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md` (Step 12)
- **RW Step 13:** `packages/frameworks/workflow mgt/docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md` (Step 13)
- **Verification Template:** `packages/frameworks/workflow mgt/docs/documentation/templates/verification-workflow-template.md`

