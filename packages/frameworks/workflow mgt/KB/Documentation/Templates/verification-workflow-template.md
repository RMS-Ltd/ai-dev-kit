---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:01:57Z
expires_at: null
housekeeping_policy: keep
---

# Verification Workflow Template

**Purpose:** Template for post-commit verification process (CHECK phase of PDCA)  
**Used In:** Release Workflow Step 12  
**Related:** PDCA Integration, Fix Verification Requirements

---

## Verification Prompt

```
🔍 POST-COMMIT VERIFICATION (CHECK Phase)

Release: v{version}
Changes: {summary}

Has this change been verified?
- [ ] Verified (with evidence)
- [ ] Unverified (pending verification)
- [ ] Deferred (verification planned)

If verified, provide:
- Verification method: [Test Suite / Manual Testing / Observation]
- Verification evidence: [Link or description]
- Verification date: [YYYY-MM-DD HH:MM:SS UTC]
```

---

## Verification Methods

### 1. Test Suite Execution

**When to Use:**
- Automated tests exist for the change
- Change can be verified through automated testing
- CI/CD pipeline available

**Process:**
1. Run test suite
2. Document test results
3. Capture test output/logs
4. Verify all tests pass

**Evidence Required:**
- Test output/logs
- CI/CD results (if available)
- Test coverage report (if applicable)

**Example:**
```markdown
**Verification Method:** Test Suite Execution
**Verification Date:** 2025-12-03 15:30:00 UTC
**Test Results:** ✅ All tests pass (15/15)
**Evidence:** [Link to CI/CD results or test logs]
```

### 2. Manual Testing

**When to Use:**
- No automated tests available
- Change requires manual verification
- UI/UX changes
- Behavior changes requiring observation

**Process:**
1. Document test steps
2. Execute manual tests
3. Record test results
4. Capture screenshots/logs if applicable

**Evidence Required:**
- Test steps documentation
- Test results
- Screenshots (if applicable)
- Test logs (if applicable)

**Example:**
```markdown
**Verification Method:** Manual Testing
**Verification Date:** 2025-12-03 15:30:00 UTC
**Test Steps:**
1. Navigate to feature X
2. Perform action Y
3. Verify result Z
**Test Results:** ✅ All steps pass
**Evidence:** [Link to test documentation or screenshots]
```

### 3. Observation Period

**When to Use:**
- Behavior changes requiring time to observe
- Performance changes
- System stability changes
- Changes affecting production systems

**Process:**
1. Deploy change
2. Observe system behavior
3. Monitor metrics/logs
4. Document observations

**Evidence Required:**
- Observation period duration
- Metrics/logs
- Observation notes

**Example:**
```markdown
**Verification Method:** Observation Period
**Verification Date:** 2025-12-03 15:30:00 UTC
**Observation Period:** 24 hours
**Observations:** ✅ No issues observed, metrics stable
**Evidence:** [Link to metrics/logs]
```

### 4. Defer Verification

**When to Use:**
- Verification cannot be performed immediately
- Verification requires external resources
- Verification scheduled for later

**Process:**
1. Document why verification is deferred
2. Create verification plan
3. Schedule verification
4. Create reminder task

**Example:**
```markdown
**Verification Status:** Deferred
**Reason:** Requires production deployment
**Verification Plan:** Verify after next deployment (scheduled 2025-12-05)
**Next Steps:** Run verification after deployment
```

---

## Verification Documentation Format

### Verified Fix

```markdown
### Verification Status
- **Status:** Verified ✅
- **Method:** Test Suite Execution
- **Date:** 2025-12-03 15:30:00 UTC
- **Result:** All tests pass (15/15)
- **Evidence:** [Link to test results]
```

### Unverified Fix

```markdown
### Verification Status
- **Status:** Attempted Fix (Pending Verification)
- **Method:** [To be determined]
- **Date:** 2025-12-03 15:11:58 UTC
- **Next Steps:** Run test suite / Perform manual testing
- **Verification Plan:** [Document plan]
```

### Deferred Verification

```markdown
### Verification Status
- **Status:** Deferred
- **Reason:** [Why verification is deferred]
- **Verification Plan:** [Document plan]
- **Scheduled Date:** [YYYY-MM-DD]
- **Next Steps:** [What needs to happen]
```

---

## Integration with Changelog

**Verified Fixes:**
- Move from "Attempted Fixes" to "Fixed" section (in Step 13)
- Include verification evidence
- Update verification status

**Unverified Fixes:**
- Remain in "Attempted Fixes" section
- Include verification plan
- Document next steps

**Deferred Verification:**
- Document in changelog
- Include verification plan
- Schedule follow-up

---

## Best Practices

1. **Verify Early:** Verify changes as soon as possible after commit
2. **Document Evidence:** Always document verification evidence
3. **Be Honest:** Don't claim verification without evidence
4. **Plan Verification:** If deferred, create clear verification plan
5. **Follow Up:** Don't let "Attempted Fixes" remain unverified indefinitely

---

## References

- **PDCA Integration Plan:** `docs/architecture/standards-and-adrs/rw-pdca-integration-plan.md`
- **Fix Verification Requirements:** `packages/frameworks/workflow mgt/docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md` (lines 101-150)
- **RW Step 12:** `packages/frameworks/workflow mgt/docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md` (Step 12)

