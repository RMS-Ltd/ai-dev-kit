---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:02:07Z
expires_at: null
housekeeping_policy: keep
---

# Debug Round Workflow (DRW) Methodology

**Version:** 1.0.0  
**Last Updated:** 2025-12-04  
**Source:** Adapted from fynd.deals Debug Path Framework

---

## 📋 Overview

The **Debug Round Workflow (DRW)** is a **checklist-driven, multi-phase protocol** for investigating and resolving test failures, regressions, and production bugs. It ensures structured debugging, prevents skipped steps, and preserves knowledge for future reference.

**Key Principles:**
- ✅ Checklist-driven (prevents skipped steps)
- ✅ Round-based iteration (supports complex investigations)
- ✅ Knowledge-preserving (lessons learned extracted)
- ✅ Traceable (full audit trail with timestamps)
- ✅ Objective (assumption validation prevents bias)

---

## 🔄 The 6 Phases

### Phase 1: Testing

**Objective:** Execute tests and document results

**Checklist Items:**
- [ ] 1.1 Execute Tests
- [ ] 1.2 Document Test Results

**Actions:**
1. Run test command from testing scope
2. Capture test output (pass/fail counts, errors, coverage)
3. Document results in `DP-XXX-tests.md` with timestamp
4. Update checklist in `DP-XXX-process.md`

**Output:** Test execution results documented with patterns identified

---

### Phase 2: Analysis

**Objective:** Analyze failures and identify root causes

**Checklist Items:**
- [ ] 2.1 Review Test Results
- [ ] 2.2 Analyze Root Causes

**Actions:**
1. Review test failures and error messages
2. Identify patterns in failures
3. Conduct root cause analysis
4. Document findings in `DP-XXX-analysis.md`
5. Update assumption validation table
6. Update solution space mapping

**Output:** Root causes identified, patterns documented, assumptions validated

---

### Phase 3: Strategy

**Objective:** Update strategy based on analysis

**Checklist Items:**
- [ ] 3.1 Update Strategy
- [ ] 3.2 Validate Strategy

**Actions:**
1. Review previous approaches (divergence check)
2. Update hypothesis based on findings
3. Document strategic changes in `DP-XXX-strategy.md`
4. Validate strategy (risks, prerequisites, expected outcomes)
5. Update validation plan

**Output:** Strategy updated, validated, ready for implementation

---

### Phase 4: Planning

**Objective:** Create implementation plan

**Checklist Items:**
- [ ] 4.1 Create Implementation Plan

**Actions:**
1. Define implementation steps
2. Set success criteria
3. Identify validation checkpoints
4. Document risks and mitigation
5. Update `DP-XXX-process.md` with plan

**Output:** Implementation plan ready for execution

---

### Phase 5: Implementation

**Objective:** Execute changes and verify

**Checklist Items:**
- [ ] 5.1 Execute Implementation
- [ ] 5.2 Verify Implementation

**Actions:**
1. Make code/test changes
2. Document changes in `DP-XXX-process.md`
3. Run validation tests
4. Verify results match success criteria
5. Update solution space mapping (mark attempted solutions)

**Output:** Changes implemented and verified

---

### Phase 6: Verification & Archival

**Objective:** Archive round and extract lessons

**Checklist Items:**
- [ ] 6.1 Archive Round
- [ ] 6.2 Update Strategy
- [ ] 6.3 Start New Debugging Round (if needed)

**Actions:**
1. Validate all tests pass
2. Copy completed checklist to `DP-XXX-history.md`
3. Document round summary (objective, outcome, findings)
4. Extract lessons learned (patterns, anti-patterns)
5. Update strategy with final outcomes
6. If issue resolved: Archive debug path
7. If issue persists: Start new round with divergence check

**Output:** Round archived, lessons extracted, next steps determined

---

## 🔑 Key Patterns

### 1. Context Snapshot

**Pattern:** Maintain immutable problem statement and evolving understanding

```markdown
## Context Snapshot
- **Original Problem Statement**: [NEVER CHANGES ONCE SET]
- **Current Understanding**: [MAY EVOLVE]
- **Key Findings So Far**: [CUMULATIVE]
- **Failed Approaches**: [CUMULATIVE]
```

**Value:** Prevents scope creep, maintains focus, preserves investigation history

---

### 2. Solution Space Mapping

**Pattern:** Track attempted and potential solutions

```markdown
## Solution Space Mapping
### Attempted Solutions
| Approach | Round | Outcome | Why it Failed | Lessons Learned |
### Potential Solutions
| Approach | Status | Prerequisites | Expected Outcome | Risks |
```

**Value:** Prevents repeating failed approaches, documents decision rationale

---

### 3. Assumption Validation

**Pattern:** Explicit tracking of assumptions

```markdown
## Assumption Validation
### Current Assumptions
| Assumption | Evidence | Validation Method | Status |
### Challenged Assumptions
| Assumption | Why We Held It | Why It Was Wrong | Round Discovered |
```

**Value:** Prevents confirmation bias, documents learning, supports objectivity

---

### 4. Divergence Check

**Pattern:** Ensure each round adds value

```markdown
## Current Round Strategy
### Divergence Check
- Previous approaches being repeated? [Yes/No]
- If yes:
  * What's different now: [Changes]
  * New information: [What we know now]
  * Why we expect different results: [Justification]
```

**Value:** Prevents circular debugging, ensures each round adds value

---

### 5. Knowledge Extraction

**Pattern:** Systematic extraction of patterns and lessons

```markdown
## Lessons Learned
- Patterns identified and recorded
- Anti-patterns and warning signs documented
- Lessons learned summarized for onboarding
- Central Patterns & Anti-Patterns resource updated
```

**Value:** Builds institutional memory, supports onboarding, enables pattern recognition

---

## 📝 Round-Based Iteration

### When to Start a New Round

Start a new round if:
- ✅ Issue not resolved after Phase 6
- ✅ New information discovered
- ✅ Strategy needs significant revision
- ✅ Different approach needed

### Round Checklist Management

1. **Create new checklist** in `DP-XXX-process.md` for Round N
2. **Check off items** as completed
3. **At round end:** Copy completed checklist to `DP-XXX-history.md`
4. **Start Round N+1** if issue persists (with divergence check)

---

## ✅ Success Criteria

A debug path is **complete** when:

1. ✅ All tests in scope pass
2. ✅ Root cause identified and resolved
3. ✅ Solution verified and documented
4. ✅ Lessons learned extracted
5. ✅ All rounds archived
6. ✅ Debug path marked as resolved/archived

---

## 🚫 Anti-Patterns to Avoid

1. **Skipping phases** — Complete all phases in order
2. **Repeating failed approaches** — Always do divergence check
3. **Ignoring assumptions** — Validate assumptions explicitly
4. **Skipping checklist** — Checklist is mandatory, not optional
5. **Not archiving rounds** — Archive completed checklists
6. **Not extracting lessons** — Always document patterns and lessons

---

## 📚 Related Documents

- **Templates:** See `templates/` directory for all document templates
- **Integration:** See `integration/` directory for integration guides
- **Package Overview:** See `PACKAGE_OVERVIEW.md` for usage scenarios

---

**Last Updated:** 2025-12-04  
**Version:** 1.0.0

