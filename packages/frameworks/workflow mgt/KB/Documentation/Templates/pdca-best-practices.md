---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:01:57Z
expires_at: null
housekeeping_policy: keep
---

# PDCA Best Practices Guide

**Purpose:** Best practices, common pitfalls, and tips for effective PDCA implementation  
**Related:** PDCA Integration, Release Workflow, Continuous Improvement

---

## Best Practices

### 1. PLAN Phase: Be Specific and Measurable

**✅ DO:**
- Define clear, specific objectives
- Make objectives measurable when possible
- Include expected outcomes that define success
- Create a verification plan that's actionable
- Link objectives to expected outcomes

**❌ DON'T:**
- Use vague objectives like "Improve X"
- Skip expected outcomes
- Create verification plans that are too broad
- Forget to link objectives to outcomes

**Example - Good:**
```markdown
### Objectives
- Add Step 12 (Post-Commit Verification) to Release Workflow
- Create verification workflow template
- Integrate CHECK phase into RW execution guide

### Expected Outcomes
- Step 12 added to release-workflow.yaml
- Verification workflow template created
- RW execution guide updated with Step 12 guidance

### Verification Plan
- Run test suite to verify workflow YAML syntax
- Manual review of RW execution guide
- Verify templates are project-agnostic
```

**Example - Bad:**
```markdown
### Objectives
- Improve workflow
- Make it better
- Add verification

### Expected Outcomes
- It works

### Verification Plan
- Test it
```

### 2. DO Phase: Match Language to Verification Status

**✅ DO:**
- Use "Attempted fix" for unverified fixes
- Use "Fixed" only after verification
- Match commit message language to changelog
- Document what was actually done
- Include verification status in commit message

**❌ DON'T:**
- Claim "Fixed" before verification
- Use inconsistent language between commit and changelog
- Skip execution documentation
- Forget to update verification status

**Example - Good:**
```markdown
Release v0.2.2.1+1: E2:S02:T01: Attempted fix for changelog verification issue

- Updated Step 3 to require verification before marking fixes as "Fixed"
- Verification pending: Manual test required

Epic: 2 | Story: 2 | Task: 1
```

**Example - Bad:**
```markdown
Release v0.2.2.1+1: E2:S02:T01: Fixed changelog verification issue

(Should be "Attempted fix" if not yet verified)
```

### 3. CHECK Phase: Verify Against Objectives

**✅ DO:**
- Verify each objective from PLAN phase
- Use multiple verification methods when possible
- Document evidence for verification
- Be honest about results (verified/failed/deferred)
- Reflect on what worked and what didn't

**❌ DON'T:**
- Skip verification
- Verify only some objectives
- Claim verification without evidence
- Ignore failed verification
- Skip reflection

**Example - Good:**
```markdown
## Verification Results

**Verification Status:** ✅ Verified

### Objectives Verification
| Objective | Status | Evidence |
|-----------|--------|----------|
| Add Step 12 to workflow | ✅ | Step 12 added to release-workflow.yaml |
| Create verification template | ✅ | Template created at path/to/template.md |
| Update RW guide | ✅ | RW guide updated with Step 12 section |
```

**Example - Bad:**
```markdown
## Verification Results

**Verification Status:** ✅ Verified

(No evidence, no details, no reflection)
```

### 4. ACT Phase: Act on Results

**✅ DO:**
- Update changelog based on verification results
- Create follow-up tasks for failed verification
- Document lessons learned
- Standardize successful practices
- Update process documentation

**❌ DON'T:**
- Ignore failed verification
- Skip changelog updates
- Forget to create follow-up tasks
- Skip process improvement documentation
- Leave "Attempted fixes" unverified indefinitely

**Example - Good:**
```markdown
## ACT Phase Results

**Verification Status:** ✅ Verified

**Actions Taken:**
- Updated changelog: "Attempted fix" → "Fixed"
- Updated commit message in next release
- Documented successful verification workflow
- No follow-up tasks needed

**Lessons Learned:**
- Verification workflow template is clear and effective
- Multiple verification methods provide confidence
```

**Example - Bad:**
```markdown
## ACT Phase Results

**Verification Status:** ✅ Verified

(No actions taken, no lessons learned, no process improvement)
```

---

## Common Pitfalls and How to Avoid Them

### Pitfall 1: Skipping Verification

**Problem:** Changes are committed but never verified, leaving "Attempted fixes" unverified indefinitely.

**Solution:**
- Always include verification in CHECK phase
- Set reminders for deferred verification
- Create follow-up tasks for verification
- Make verification a required step

### Pitfall 2: Claiming "Fixed" Before Verification

**Problem:** Changelog or commit message claims "Fixed" before verification is complete.

**Solution:**
- Use "Attempted fix" until verified
- Only use "Fixed" after verification
- Update changelog after verification (ACT phase)
- Validate language matches verification status

### Pitfall 3: Vague Objectives

**Problem:** Objectives are too vague to verify, making CHECK phase ineffective.

**Solution:**
- Be specific in PLAN phase
- Make objectives measurable
- Include expected outcomes
- Create actionable verification plans

### Pitfall 4: Ignoring Failed Verification

**Problem:** Verification fails but no action is taken, leaving issues unresolved.

**Solution:**
- Always create follow-up tasks for failed verification
- Document what didn't work
- Plan fixes in next iteration
- Don't ignore failures

### Pitfall 5: Skipping Reflection

**Problem:** No reflection on what worked and what didn't, missing learning opportunities.

**Solution:**
- Always include reflection in CHECK phase
- Document lessons learned
- Use reflection to improve process
- Share learnings with team

### Pitfall 6: Inconsistent Language

**Problem:** Commit message and changelog use different language, causing confusion.

**Solution:**
- Match commit message language to changelog
- Use consistent terminology
- Update both after verification
- Validate consistency

---

## Tips for Effective PDCA Implementation

### 1. Start Small

- Begin with one phase at a time
- Don't try to implement all phases at once
- Build up PDCA practices gradually
- Learn from each iteration

### 2. Document Everything

- Document objectives clearly
- Document what was done
- Document verification results
- Document lessons learned

### 3. Use Templates

- Use PLAN phase template for planning
- Use DO phase template for execution
- Use CHECK phase template for verification
- Use ACT phase template for action

### 4. Verify Early and Often

- Verify as soon as possible after changes
- Don't defer verification unnecessarily
- Use multiple verification methods
- Document verification evidence

### 5. Learn from Each Cycle

- Reflect on what worked
- Reflect on what didn't work
- Document lessons learned
- Apply learnings to next cycle

### 6. Make It Iterative

- Each ACT phase leads to next PLAN phase
- Build on previous cycles
- Continuous improvement mindset
- Don't stop after one cycle

### 7. Be Honest About Results

- Don't claim success if verification failed
- Don't skip verification
- Document failures honestly
- Learn from failures

### 8. Standardize Success

- Document successful practices
- Create templates from successful examples
- Share successful patterns
- Reuse what works

---

## PDCA Cycle Flow

```
PLAN → DO → CHECK → ACT
  ↑                    ↓
  └────────────────────┘
    (Continuous Loop)
```

**Key Points:**
- Each phase builds on previous phases
- ACT phase leads back to PLAN phase
- Continuous improvement cycle
- Learning accumulates over cycles

---

## Integration with Release Workflow

**PLAN Phase (Steps 1-3):**
- Step 1: Branch Safety Check
- Step 2: Bump Version
- Step 3: Create Detailed Changelog (with PLAN section)

**DO Phase (Steps 4-11):**
- Steps 4-6: Update documentation
- Steps 7-8: Validate and prepare
- Steps 9-11: Commit, tag, push

**CHECK Phase (Step 12):**
- Step 12: Post-Commit Verification & Reflection

**ACT Phase (Step 13):**
- Step 13: Act on Verification Results

---

## References

- **PDCA Integration Plan:** `docs/architecture/standards-and-adrs/rw-pdca-integration-plan.md`
- **PLAN Phase Template:** `packages/frameworks/workflow mgt/docs/documentation/templates/plan-phase-template.md`
- **DO Phase Template:** `packages/frameworks/workflow mgt/docs/documentation/templates/do-phase-template.md`
- **CHECK Phase Template:** `packages/frameworks/workflow mgt/docs/documentation/templates/check-phase-template.md`
- **ACT Phase Template:** `packages/frameworks/workflow mgt/docs/documentation/templates/action-workflow-template.md`

