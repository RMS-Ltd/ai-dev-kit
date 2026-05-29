---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:01:57Z
expires_at: null
housekeeping_policy: keep
---

# PDCA Tutorial: Step-by-Step Guide

**Purpose:** Step-by-step tutorial for implementing PDCA in Release Workflow  
**Audience:** Developers, AI Agents, Project Managers  
**Related:** PDCA Integration, Release Workflow

---

## Introduction

This tutorial walks you through implementing the PDCA (Plan-Do-Check-Act) cycle in your Release Workflow. PDCA provides a structured approach to continuous improvement, ensuring each release builds upon lessons learned.

---

## Prerequisites

- Familiarity with Release Workflow
- Understanding of changelog format
- Basic knowledge of Git operations

---

## Tutorial: Complete PDCA Cycle

### Step 1: PLAN Phase - Define Objectives

**When:** Before starting work on a task

**Action:** Create PLAN section in changelog

**Example:**
```markdown
## PLAN Phase

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

**Tips:**
- Be specific and measurable
- Link objectives to expected outcomes
- Create actionable verification plan

---

### Step 2: DO Phase - Execute Changes

**When:** During work on the task

**Action:** Implement changes, update documentation, commit

**Commit Message Example:**
```
Release v0.2.2.1+1: E2:S02:T01: Added Step 12 (Post-Commit Verification) to Release Workflow

- Added Step 12 to release-workflow.yaml
- Created verification workflow template
- Created reflection questions template
- Updated RW execution guide with Step 12 guidance

Epic: 2 | Story: 2 | Task: 1
```

**Tips:**
- Use appropriate language for verification status
- Document what was actually done
- Match commit message to changelog

---

### Step 3: CHECK Phase - Verify Results

**When:** After commit and push

**Action:** Verify changes worked as expected

**Verification Example:**
```markdown
## Verification Results

**Verification Date:** 2025-12-03 16:30:00 UTC
**Verification Method:** Test Suite Execution
**Verification Status:** ✅ Verified

### Objectives Verification
| Objective | Status | Evidence |
|-----------|--------|----------|
| Add Step 12 to workflow | ✅ | Step 12 added to release-workflow.yaml |
| Create verification template | ✅ | Template created at path/to/template.md |
| Update RW guide | ✅ | RW guide updated with Step 12 section |

### Reflection
**What Worked Well?**
- Template structure is clear
- Examples are helpful

**What Didn't Work?**
- Initial template needed refinement

**Lessons Learned:**
- Templates benefit from clear structure
```

**Tips:**
- Verify each objective
- Use multiple verification methods
- Document evidence
- Reflect on process

---

### Step 4: ACT Phase - Act on Results

**When:** After verification

**Action:** Update changelog, standardize practices, document lessons

**Action Example:**
```markdown
## ACT Phase Results

**Verification Status:** ✅ Verified

**Actions Taken:**
- Updated changelog: "Attempted fix" → "Fixed" (verified)
- Standardized template structure
- Documented lessons learned

**Follow-Up Tasks:**
- None (verification successful)

**Lessons Learned:**
- Template structure should be defined before content creation
- Examples should cover multiple scenarios
```

**Tips:**
- Always act on verification results
- Don't ignore failures
- Document lessons learned
- Standardize success

---

## Common Scenarios

### Scenario 1: Verified Fix

**PLAN:** "Attempted fix for changelog verification issue"  
**DO:** Implement fix, commit with "Attempted fix"  
**CHECK:** Verify fix works (✅ Verified)  
**ACT:** Update changelog to "Fixed", standardize practices

### Scenario 2: Failed Fix

**PLAN:** "Attempted fix for changelog verification issue"  
**DO:** Implement fix, commit with "Attempted fix"  
**CHECK:** Verify fix doesn't work (❌ Failed)  
**ACT:** Create follow-up task, document what didn't work

### Scenario 3: Deferred Verification

**PLAN:** "Add feature X"  
**DO:** Implement feature, commit  
**CHECK:** Verification deferred (⏸️ Deferred - requires production)  
**ACT:** Document verification plan, schedule production verification

---

## Best Practices Summary

1. **PLAN:** Be specific and measurable
2. **DO:** Match language to verification status
3. **CHECK:** Verify against objectives
4. **ACT:** Act on results, don't ignore failures

---

## Next Steps

1. Review templates for each phase
2. Practice with example scenarios
3. Implement PDCA in your next release
4. Learn from each cycle

---

## References

- **Templates:** `packages/frameworks/workflow mgt/docs/documentation/templates/`
- **Best Practices:** `pdca-best-practices.md`
- **End-to-End Example:** `pdca-end-to-end-example.md`
- **Quick Reference:** `pdca-quick-reference.md`

---

_This tutorial is part of the Release Workflow PDCA Integration. See templates and examples for detailed guidance._

