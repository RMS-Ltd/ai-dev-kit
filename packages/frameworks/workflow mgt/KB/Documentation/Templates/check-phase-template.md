---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:01:57Z
expires_at: null
housekeeping_policy: keep
---

# CHECK Phase Template

**Purpose:** Template for CHECK phase in Release Workflow (PDCA cycle)  
**Used In:** Release Workflow Step 12 (Post-Commit Verification & Reflection)  
**Related:** PDCA Integration, Verification Workflow, Reflection Questions

---

## CHECK Phase Overview

The CHECK phase evaluates results against objectives defined in the PLAN phase. This includes verifying that changes worked as expected, evaluating against expected outcomes, and documenting verification results.

**CHECK Phase Steps:**
1. Verify changes worked as expected
2. Evaluate against objectives
3. Document verification results
4. Reflect on what worked and what didn't

---

## Verification Workflow Template

### Format

```markdown
## Verification Results

**Verification Date:** {YYYY-MM-DD HH:MM:SS UTC}
**Verification Method:** {Test Suite / Manual Test / Observation / Other}
**Verification Status:** {✅ Verified / ❌ Failed / ⏸️ Deferred}

### Verification Steps

1. **Step 1:** {What was verified}
   - **Result:** {Pass / Fail / Partial}
   - **Evidence:** {Link to test results, screenshots, logs, etc.}

2. **Step 2:** {What was verified}
   - **Result:** {Pass / Fail / Partial}
   - **Evidence:** {Link to test results, screenshots, logs, etc.}

### Verification Summary

**Overall Result:** {✅ Verified / ❌ Failed / ⏸️ Deferred}

**Key Findings:**
- {Finding 1}
- {Finding 2}
- {Finding 3}

**Issues Identified:**
- {Issue 1} (if any)
- {Issue 2} (if any)

**Next Steps:**
- {Next step 1}
- {Next step 2}
```

### Example: Verified Fix

```markdown
## Verification Results

**Verification Date:** 2025-12-03 16:30:00 UTC
**Verification Method:** Test Suite Execution
**Verification Status:** ✅ Verified

### Verification Steps

1. **Step 1:** Run test suite for changelog validation
   - **Result:** Pass (15/15 tests passed)
   - **Evidence:** `test_changelog_validation.py` - All tests green

2. **Step 2:** Manual verification of changelog format
   - **Result:** Pass
   - **Evidence:** Changelog includes PLAN section with objectives, expected outcomes, verification plan

3. **Step 3:** Verify changelog examples updated
   - **Result:** Pass
   - **Evidence:** All changelog examples in archive include PLAN section

### Verification Summary

**Overall Result:** ✅ Verified

**Key Findings:**
- Changelog validation works correctly with PLAN section
- All examples updated successfully
- Backward compatibility maintained (PLAN section optional)

**Issues Identified:**
- None

**Next Steps:**
- Proceed to ACT phase (Step 13)
- Update changelog to mark fixes as "Fixed" (verified)
```

### Example: Failed Fix

```markdown
## Verification Results

**Verification Date:** 2025-12-03 16:30:00 UTC
**Verification Method:** Test Suite Execution
**Verification Status:** ❌ Failed

### Verification Steps

1. **Step 1:** Run test suite for changelog validation
   - **Result:** Fail (5/15 tests failed)
   - **Evidence:** `test_changelog_validation.py` - Tests fail on PLAN section parsing

2. **Step 2:** Manual verification of changelog format
   - **Result:** Partial
   - **Evidence:** Changelog includes PLAN section but format doesn't match expected structure

### Verification Summary

**Overall Result:** ❌ Failed

**Key Findings:**
- PLAN section format doesn't match validator expectations
- Validator needs update to support new PLAN section structure
- Changelog examples need format correction

**Issues Identified:**
- Validator regex pattern doesn't match PLAN section format
- PLAN section structure inconsistent across examples

**Next Steps:**
- Create follow-up task: Fix validator to support PLAN section
- Update changelog examples to match expected format
- Re-run verification after fixes
```

### Example: Deferred Verification

```markdown
## Verification Results

**Verification Date:** 2025-12-03 16:30:00 UTC
**Verification Method:** Manual Test (Deferred)
**Verification Status:** ⏸️ Deferred

### Verification Steps

1. **Step 1:** Manual test of feature in production environment
   - **Result:** Deferred
   - **Evidence:** Production deployment scheduled for 2025-12-04
   - **Reason:** Requires production environment for full verification

### Verification Summary

**Overall Result:** ⏸️ Deferred

**Key Findings:**
- Changes implemented successfully in development
- Verification requires production environment
- Deployment scheduled for next day

**Issues Identified:**
- None (verification deferred, not failed)

**Next Steps:**
- Deploy to production (scheduled: 2025-12-04)
- Verify in production environment
- Update changelog after production verification
```

---

## Reflection Questions Template

### Format

```markdown
## Reflection

### What Worked Well?
- {What worked well 1}
- {What worked well 2}
- {What worked well 3}

### What Didn't Work?
- {What didn't work 1}
- {What didn't work 2}
- {What didn't work 3}

### What Would We Do Differently?
- {Change 1}
- {Change 2}
- {Change 3}

### Lessons Learned
- {Lesson 1}
- {Lesson 2}
- {Lesson 3}

### Process Improvements
- {Improvement 1}
- {Improvement 2}
- {Improvement 3}
```

### Example

```markdown
## Reflection

### What Worked Well?
- PLAN section structure is clear and easy to follow
- Objectives and expected outcomes help focus work
- Verification plan makes verification process explicit

### What Didn't Work?
- Validator didn't initially support PLAN section format
- Some examples had inconsistent PLAN section structure
- Verification workflow needed clarification

### What Would We Do Differently?
- Update validator before adding PLAN section to changelog
- Ensure all examples use consistent PLAN section format
- Add verification workflow examples earlier

### Lessons Learned
- Validators need updates when changelog format changes
- Examples should be updated in parallel with format changes
- Verification workflow benefits from explicit documentation

### Process Improvements
- Add validator update step to PLAN phase
- Create example update checklist
- Document verification workflow before implementation
```

---

## Verification Documentation Template

### Format

```markdown
## Verification Documentation

**Task:** {EXX:SYY:TZZ}
**Release:** v{VERSION}
**Verification Date:** {YYYY-MM-DD HH:MM:SS UTC}
**Verifier:** {Name / Agent}
**Verification Method:** {Test Suite / Manual Test / Observation / Other}

### Objectives Verification

| Objective | Status | Evidence |
|-----------|--------|----------|
| {Objective 1} | ✅ / ❌ / ⏸️ | {Evidence} |
| {Objective 2} | ✅ / ❌ / ⏸️ | {Evidence} |
| {Objective 3} | ✅ / ❌ / ⏸️ | {Evidence} |

### Expected Outcomes Verification

| Outcome | Status | Evidence |
|---------|--------|----------|
| {Outcome 1} | ✅ / ❌ / ⏸️ | {Evidence} |
| {Outcome 2} | ✅ / ❌ / ⏸️ | {Evidence} |
| {Outcome 3} | ✅ / ❌ / ⏸️ | {Evidence} |

### Verification Plan Execution

| Verification Method | Status | Result | Evidence |
|---------------------|--------|--------|----------|
| {Method 1} | ✅ / ❌ / ⏸️ | {Result} | {Evidence} |
| {Method 2} | ✅ / ❌ / ⏸️ | {Result} | {Evidence} |
| {Method 3} | ✅ / ❌ / ⏸️ | {Result} | {Evidence} |

### Overall Verification Result

**Status:** {✅ Verified / ❌ Failed / ⏸️ Deferred}

**Summary:**
{Summary of verification results}

**Next Steps:**
- {Next step 1}
- {Next step 2}
```

---

## Best Practices

1. **Verify Against Objectives:**
   - Check each objective from PLAN phase
   - Document evidence for each objective
   - Be specific about what was verified

2. **Use Multiple Verification Methods:**
   - Test suite (automated)
   - Manual testing (user experience)
   - Observation (behavioral)
   - Code review (quality)

3. **Document Evidence:**
   - Link to test results
   - Include screenshots if applicable
   - Reference logs or output
   - Document manual test steps

4. **Be Honest About Results:**
   - ✅ Verified: Changes worked as expected
   - ❌ Failed: Changes didn't work, need fixes
   - ⏸️ Deferred: Verification postponed (with reason)

5. **Reflect on Process:**
   - What worked well?
   - What didn't work?
   - What would we do differently?
   - What did we learn?

---

## References

- **PDCA Integration Plan:** `docs/architecture/standards-and-adrs/rw-pdca-integration-plan.md`
- **Reflection Questions Template:** `packages/frameworks/workflow mgt/docs/documentation/templates/reflection-questions-template.md`
- **RW Execution Guide:** `packages/frameworks/workflow mgt/docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md`

