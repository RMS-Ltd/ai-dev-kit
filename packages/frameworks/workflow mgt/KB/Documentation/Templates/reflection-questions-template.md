---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:01:57Z
expires_at: null
housekeeping_policy: keep
---

# Reflection Questions Template

**Purpose:** Template for post-commit reflection (CHECK phase of PDCA)  
**Used In:** Release Workflow Step 12  
**Related:** PDCA Integration, Continuous Improvement

---

## Reflection Questions

### Standard Reflection Questions

```
📝 REFLECTION QUESTIONS

Release: v{version}
Changes: {summary}

1. Did the change work as expected?
   - [ ] Yes
   - [ ] Partially
   - [ ] No
   - [ ] Unknown (needs verification)
   
   Notes: [Document any observations]

2. Did it solve the problem?
   - [ ] Yes
   - [ ] Partially
   - [ ] No
   - [ ] Unknown (needs verification)
   
   Notes: [Document what was solved and what wasn't]

3. Are there any side effects?
   - [ ] None observed
   - [ ] Minor side effects (document below)
   - [ ] Significant side effects (document below)
   - [ ] Unknown (needs observation)
   
   Side Effects: [Document any side effects observed]

4. What did we learn?
   - [Document lessons learned]
   - [Document what worked well]
   - [Document what could be improved]
   - [Document process improvements]

5. What should be adjusted?
   - [Document any adjustments needed]
   - [Document follow-up actions]
   - [Document process improvements]
```

---

## Reflection Documentation Format

### Complete Reflection Example

```markdown
## CHECK Phase (Post-Commit Reflection)

### Reflection Questions

**1. Did the change work as expected?**
- ✅ Yes
- Notes: Change implemented successfully, all tests pass

**2. Did it solve the problem?**
- ✅ Yes
- Notes: Original issue resolved, no regressions observed

**3. Are there any side effects?**
- ✅ None observed
- Notes: No side effects detected during testing

**4. What did we learn?**
- The PDCA approach helps ensure changes are verified
- Explicit verification prevents false "Fixed" claims
- Reflection questions help capture lessons learned

**5. What should be adjusted?**
- None required - change successful
- Process improvement: Continue using PDCA approach
```

### Reflection with Issues Example

```markdown
## CHECK Phase (Post-Commit Reflection)

### Reflection Questions

**1. Did the change work as expected?**
- ⚠️ Partially
- Notes: Core functionality works, but edge case handling needs improvement

**2. Did it solve the problem?**
- ⚠️ Partially
- Notes: Main issue resolved, but related issue discovered

**3. Are there any side effects?**
- ⚠️ Minor side effects
- Notes: Performance slightly degraded in edge cases

**4. What did we learn?**
- Edge case testing needed before commit
- Performance testing should be part of verification
- Need better test coverage for edge cases

**5. What should be adjusted?**
- Create follow-up task for edge case fix
- Add performance testing to verification process
- Improve test coverage
```

---

## Evaluation Criteria

### Success Indicators

- ✅ Change works as expected
- ✅ Problem solved
- ✅ No side effects
- ✅ Verification evidence documented
- ✅ Lessons learned captured

### Warning Indicators

- ⚠️ Change works partially
- ⚠️ Problem partially solved
- ⚠️ Minor side effects
- ⚠️ Verification incomplete

### Failure Indicators

- ❌ Change doesn't work
- ❌ Problem not solved
- ❌ Significant side effects
- ❌ Verification failed

---

## Learning Capture

### What Worked Well

- Document successful approaches
- Document effective patterns
- Document good practices

### What Could Be Improved

- Document areas for improvement
- Document process gaps
- Document tooling needs

### Process Improvements

- Document RW process improvements
- Document workflow enhancements
- Document tooling improvements

---

## Integration with ACT Phase

**If Reflection Shows Success:**
- Standardize successful practices
- Document what worked
- Apply to future releases

**If Reflection Shows Issues:**
- Document what didn't work
- Create follow-up tasks
- Plan adjustments

**If Reflection Shows Learning:**
- Capture lessons learned
- Update documentation
- Share knowledge

---

## Best Practices

1. **Be Honest:** Answer reflection questions honestly
2. **Document Everything:** Capture all observations
3. **Learn Continuously:** Use reflection to improve
4. **Act on Results:** Use reflection to inform ACT phase
5. **Share Knowledge:** Document lessons learned for team

---

## References

- **PDCA Integration Plan:** `docs/architecture/standards-and-adrs/rw-pdca-integration-plan.md`
- **RW Step 12:** `packages/frameworks/workflow mgt/docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md` (Step 12)
- **RW Step 13:** `packages/frameworks/workflow mgt/docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md` (Step 13)

