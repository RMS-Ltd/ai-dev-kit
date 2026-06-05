---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:01:57Z
expires_at: null
housekeeping_policy: keep
---

# DP-XXX: [Title/Component/Feature] — Debug Path

## Metadata
- **Date Created**: YYYY-MM-DD
- **Last Updated**: YYYY-MM-DD
- **Issue/Ticket**: [Link to issue/ticket if applicable]
- **Related PRs**: [Links to related pull requests]
- **Status**: [Not Started/In Progress/Blocked/Review/Resolved/Archived]
- **Priority**: [Critical/High/Medium/Low]
- **Impact**: [Core/API/UI/Data/Security/Performance/Documentation]
- **Round**: [Current Round Number]

---

## Context Snapshot

### Original Problem Statement
**[NEVER CHANGES ONCE SET]**

- **Expected Behavior:** [What should happen]
- **Actual Behavior:** [What is actually happening]
- **Impact:** [Who/what is affected and how]

### Current Understanding
**[MAY EVOLVE]**

- **What we know:** [Facts established]
- **What we suspect:** [Current theories]
- **What we don't know:** [Open questions]

### Key Findings So Far
**[CUMULATIVE]**

- Finding 1: [Evidence/Source]
- Finding 2: [Evidence/Source]
- [Additional findings...]

### Failed Approaches
**[CUMULATIVE]**

- Approach 1: [Why it failed]
- Approach 2: [Why it failed]
- [Additional failed approaches...]

---

## Environment

- **System:** [OS/Platform details]
- **Dependencies:** [Relevant package versions]
- **State:** [System state/configuration]
- **Tools:** [Testing/debugging tools used]

---

## Testing Scope

**Purpose:** [Clear statement of what this debug path is testing]

### Primary Test Files
```
[List the specific test files that must pass for this debug path to be considered complete.
Example:
tests/path/to/specific_test.py
tests/another/test_file.py]
```

### Source Files in Scope
```
[List all source files that may need modification to fix the issue.
Include related files like models, utilities, etc.
Example:
src/path/to/source.py
src/path/to/related/file.py]
```

### Test Command
```
[The exact command to run ONLY the tests in scope.
Example:
python -m pytest tests/path/to/specific_test.py tests/another/test_file.py -v
# OR
npm test -- tests/specific.test.js
# OR
flutter test test/specific_test.dart]
```

### Success Criteria
1. [Component 1]:
   - [Specific test criteria 1]
   - [Specific test criteria 2]
   - [Specific test criteria 3]
2. [Component 2]:
   - [Specific test criteria 1]
   - [Specific test criteria 2]
   - [Specific test criteria 3]
[Additional components as needed]

---

## Solution Space Mapping

### Attempted Solutions
| Approach | Round | Outcome | Why it Failed | Lessons Learned |
|----------|-------|---------|---------------|-----------------|
| [Solution 1] | [#] | Failed | [Reason] | [Lesson] |
| [Solution 2] | [#] | Failed | [Reason] | [Lesson] |

### Potential Solutions
| Approach | Status | Prerequisites | Expected Outcome | Risks |
|----------|--------|---------------|------------------|-------|
| [Solution 1] | Not Started | [Prereqs] | [Expected] | [Risks] |
| [Solution 2] | Not Started | [Prereqs] | [Expected] | [Risks] |

---

## Assumption Validation

### Current Assumptions
| Assumption | Evidence | Validation Method | Status |
|------------|----------|-------------------|--------|
| [Assumption 1] | [Evidence] | [Method] | [Valid/Invalid/Untested] |
| [Assumption 2] | [Evidence] | [Method] | [Valid/Invalid/Untested] |

### Challenged Assumptions
| Assumption | Why We Held It | Why It Was Wrong | Round Discovered |
|------------|---------------|-------------------|------------------|
| [Assumption 1] | [Reason] | [Evidence] | [Round #] |

---

## Current Round Strategy

### Divergence Check
- Previous approaches being repeated? [Yes/No]
- If yes:
  * What's different now: [Changes]
  * New information: [What we know now]
  * Why we expect different results: [Justification]

### Strategic Direction
- **Hypothesis:** [Current working theory]
- **Validation Plan:** [How we'll test it]
- **Success Criteria:** [Measurable outcomes]
- **Fallback Plan:** [What if we're wrong]

---

## Round Execution

### Phase 1: Testing
- [ ] Execute test suite
- [ ] Document results in tests.md
- [ ] Analyze patterns
- [ ] Update assumptions based on results

### Phase 2: Analysis
- [ ] Review test results
- [ ] Document patterns
- [ ] Update solution space mapping
- [ ] Validate current hypothesis

### Phase 3: Strategy
- [ ] Review previous approaches
- [ ] Validate divergence
- [ ] Document strategic changes
- [ ] Update validation plan

### Phase 4: Planning
- [ ] Create implementation plan
- [ ] Define success criteria
- [ ] Set validation checkpoints
- [ ] Document risks and mitigation

### Phase 5: Implementation
- [ ] Execute changes
- [ ] Run validation tests
- [ ] Document results
- [ ] Update solution space

### Phase 6: Verification
- [ ] Validate results
- [ ] Update documentation
- [ ] Plan next round if needed
- [ ] Archive round data

---

## Next Steps
1. [Immediate next action]
2. [Following action]
3. [Future considerations]

---

## Round Summary
- **Objective:** [Round goal]
- **Outcome:** [What happened]
- **Findings:** [What we learned]
- **Next Round:** [Focus for next round or resolution]

---

## References
- Analysis Document: `DP-XXX-analysis.md`
- Process Document: `DP-XXX-process.md`
- Tests Document: `DP-XXX-tests.md`
- Strategy Document: `DP-XXX-strategy.md`
- History Document: `DP-XXX-history.md`
- Index Document: `DP-XXX-index.md`

---

> **Note:** This debug path uses a checklist-driven workflow. For each round, maintain the canonical checklist in the process file and archive the completed checklist in the history file. See `DRW-METHODOLOGY.md` for details.

