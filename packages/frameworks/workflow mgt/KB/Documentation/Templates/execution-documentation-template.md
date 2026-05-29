---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:01:57Z
expires_at: null
housekeeping_policy: keep
---

# Execution Documentation Template

**Purpose:** Template for documenting what was actually done (DO phase of PDCA)  
**Used In:** Release Workflow Step 9 (Commit Changes)  
**Related:** PDCA Integration, Commit Message Guidance

---

## Execution Documentation Overview

The DO phase documents what was actually executed, ensuring alignment with PLAN phase objectives and accurate representation in commit messages.

---

## Execution Documentation Format

```markdown
## DO Phase (Execution)

### What Was Actually Done
- [Action 1]
- [Action 2]
- [Action 3]

### Deviations from PLAN
- [Any deviations from PLAN phase objectives]
- [Reasons for deviations]

### Execution Details
- [Additional execution details]
- [Implementation notes]
```

---

## What Was Actually Done

**Purpose:** Document what was actually executed

**Guidelines:**
- Be specific and accurate
- List actual actions taken
- Match commit message content
- Align with changelog Changes section

**Examples:**

**Feature Release:**
```markdown
### What Was Actually Done
- Added Step 12 to release-workflow.yaml
- Created Step 12 execution guide in release-workflow-agent-execution.md
- Created verification workflow template
- Created reflection questions template
- Updated workflow documentation to reflect 12 steps
```

**Bugfix Release:**
```markdown
### What Was Actually Done
- Updated Step 3 to check verification status before creating changelog
- Added validation to prevent "Fixed" entries without verification
- Updated changelog format to support verification status
- Added examples of verified vs unverified fixes
```

**Documentation Release:**
```markdown
### What Was Actually Done
- Created PLAN phase template
- Updated Step 3 execution guide with PLAN section creation
- Updated changelog examples with PLAN section
- Enhanced changelog format documentation
```

---

## Deviations from PLAN

**Purpose:** Document any deviations from PLAN phase objectives

**Guidelines:**
- Be honest about deviations
- Explain reasons for deviations
- Document impact of deviations
- Note if objectives were partially met

**Examples:**

**No Deviations:**
```markdown
### Deviations from PLAN
- None - All objectives met as planned
```

**Partial Deviation:**
```markdown
### Deviations from PLAN
- Objective: Add Step 12 to RW workflow
  - Status: Completed
  - Deviation: Step 12 is optional (not required) - this was a design decision
  - Impact: None - optional step still enables CHECK phase
```

**Significant Deviation:**
```markdown
### Deviations from PLAN
- Objective: Add automated verification validator
  - Status: Deferred
  - Reason: Requires additional tooling infrastructure
  - Impact: Manual verification required for now
  - Follow-up: Create task for automated validator
```

---

## Execution Details

**Purpose:** Document additional execution details

**Guidelines:**
- Include implementation notes
- Document any challenges encountered
- Note any learnings
- Record execution time/effort if relevant

**Examples:**

**Implementation Notes:**
```markdown
### Execution Details
- Step 12 integrated seamlessly with existing RW steps
- Templates created follow existing template patterns
- Examples validated against actual workflow execution
- Documentation updated consistently across all files
```

**Challenges Encountered:**
```markdown
### Execution Details
- Challenge: Determining optimal placement of PLAN section
  - Solution: Placed after header, before Changes section
  - Rationale: Provides context before listing changes
- Challenge: Backward compatibility concerns
  - Solution: Made PLAN section optional
  - Rationale: Allows gradual adoption
```

---

## Integration with Commit Messages

**Commit Message Alignment:**

**Commit Message:**
```
Release v0.2.2.4+1: Task 4 complete - Enhanced DO Phase

- Enhanced commit message guidance
- Created execution documentation template
- Added language pattern guidelines
- Updated Step 9 execution guide
```

**Execution Documentation:**
```markdown
## DO Phase (Execution)

### What Was Actually Done
- Enhanced commit message guidance in Step 9
- Created execution documentation template
- Added language pattern guidelines (verified vs unverified)
- Updated Step 9 execution guide with DO phase enhancements
- Added examples of good vs bad commit messages

### Deviations from PLAN
- None - All objectives met as planned

### Execution Details
- Commit message guidance now includes verification status alignment
- Language patterns clearly distinguish verified vs unverified fixes
- Execution documentation template provides structure for DO phase
```

---

## Integration with PLAN, CHECK, and ACT Phases

**PLAN → DO → CHECK → ACT Flow:**

1. **PLAN Phase (Step 3):**
   - Objectives: What we plan to do
   - Expected Outcomes: What success looks like
   - Verification Plan: How we'll verify

2. **DO Phase (Step 9):**
   - What Was Actually Done: What we executed
   - Deviations from PLAN: Any changes
   - Execution Details: Implementation notes

3. **CHECK Phase (Step 12):**
   - Verification: Did it work?
   - Evaluation: Objectives met?
   - Reflection: What did we learn?

4. **ACT Phase (Step 13):**
   - Actions Taken: What we did with results
   - Follow-Up: Next steps
   - Process Improvements: What to adjust

**Example Integration:**

```markdown
## PLAN Phase

### Objectives
- Add Step 12 to Release Workflow
- Create verification workflow template

### Expected Outcomes
- Step 12 added and documented
- Template available for use

### Verification Plan
- Review Step 12 execution guide
- Test Step 12 workflow

## DO Phase (Execution)

### What Was Actually Done
- Added Step 12 to release-workflow.yaml
- Created Step 12 execution guide
- Created verification workflow template
- Updated workflow documentation

### Deviations from PLAN
- None - All objectives met as planned

### Execution Details
- Step 12 integrated seamlessly
- Templates follow existing patterns

## CHECK Phase (Post-Commit)

### Verification Status
- Status: Verified ✅
- Method: Documentation Review
- Result: Step 12 complete and documented

### Evaluation
- ✅ Objectives met
- ✅ Expected outcomes achieved

## ACT Phase

### Actions Taken
- ✅ Step 12 standardized in RW
- ✅ Documentation updated

### Process Improvements
- Added explicit verification step to RW
```

---

## Best Practices

1. **Be Accurate:** Document what was actually done, not what was planned
2. **Be Honest:** Document deviations and reasons
3. **Be Specific:** Include implementation details
4. **Align Messages:** Commit message must match execution documentation
5. **Link Phases:** Connect DO phase to PLAN, CHECK, and ACT phases

---

## References

- **PDCA Integration Plan:** `docs/architecture/standards-and-adrs/rw-pdca-integration-plan.md`
- **RW Step 9:** `packages/frameworks/workflow mgt/docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md` (Step 9)
- **Changelog Language Analysis:** `docs/architecture/standards-and-adrs/rw-changelog-commit-language-analysis.md`

