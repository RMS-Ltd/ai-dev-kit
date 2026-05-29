---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:01:57Z
expires_at: null
housekeeping_policy: keep
---

# PDCA Quick Reference

**Purpose:** Quick reference guide for PDCA cycle in Release Workflow  
**Version:** 1.0  
**Last Updated:** 2025-12-03

---

## PDCA Cycle Overview

```
PLAN → DO → CHECK → ACT
  ↑                    ↓
  └────────────────────┘
    (Continuous Loop)
```

---

## PLAN Phase (Steps 1-3)

**Purpose:** Define objectives and plan changes

**Steps:**
1. Branch Safety Check
2. Bump Version
3. Create Detailed Changelog (with PLAN section)

**PLAN Section Structure:**
```markdown
## PLAN Phase

### Objectives
- [Objective 1]
- [Objective 2]

### Expected Outcomes
- [Outcome 1]
- [Outcome 2]

### Verification Plan
- [Verification method 1]
- [Verification method 2]
```

**Key Points:**
- Be specific and measurable
- Link objectives to outcomes
- Create actionable verification plan

---

## DO Phase (Steps 4-11)

**Purpose:** Execute planned changes

**Steps:**
4. Update Main Changelog
5. Update README
6. Auto-update Kanban Docs
7. Stage Files
8. Run Validators
9. Commit Changes
10. Create Git Tag
11. Push to Remote

**Commit Message Language:**
- **Unverified:** "Attempted fix", "Addressed", "Modified"
- **Verified:** "Fixed", "Resolved", "Corrected"
- **Features:** "Added", "Implemented", "Created"

**Key Points:**
- Match language to verification status
- Document what was actually done
- Include verification status in commit message

---

## CHECK Phase (Step 12)

**Purpose:** Evaluate results against objectives

**Steps:**
1. Verify changes worked as expected
2. Evaluate against objectives
3. Document verification results
4. Reflect on what worked and what didn't

**Verification Status:**
- ✅ Verified: Changes worked as expected
- ❌ Failed: Changes didn't work, need fixes
- ⏸️ Deferred: Verification postponed (with reason)

**Key Points:**
- Verify each objective
- Use multiple verification methods
- Document evidence
- Reflect on process

---

## ACT Phase (Step 13)

**Purpose:** Act on verification results

**Actions:**
- Update changelog based on verification
- Standardize successful practices
- Create follow-up tasks if needed
- Document lessons learned

**Action Workflows:**
- **Verified:** Update changelog, standardize practices
- **Failed:** Create follow-up task, document issues
- **Deferred:** Document plan, schedule verification

**Key Points:**
- Always act on verification results
- Don't ignore failures
- Document lessons learned
- Standardize success

---

## Language Patterns

### Verification Status Language

**Before Verification:**
- ✅ "Attempted fix for X"
- ✅ "Addressed issue Y"
- ❌ "Fixed X" (only after verification)

**After Verification:**
- ✅ "Fixed X"
- ✅ "Resolved Y"
- ✅ "Corrected Z"

### Change Type Language

**Features:** Added, Implemented, Created, Enhanced  
**Fixes:** Fixed, Resolved, Corrected, Eliminated  
**Documentation:** Documented, Updated, Created, Enhanced  
**Refactoring:** Refactored, Restructured, Reorganized

---

## Common Pitfalls

1. **Skipping Verification** → Always verify
2. **Claiming "Fixed" Before Verification** → Use "Attempted fix"
3. **Vague Objectives** → Be specific and measurable
4. **Ignoring Failed Verification** → Create follow-up tasks
5. **Skipping Reflection** → Always reflect
6. **Inconsistent Language** → Match commit to changelog

---

## Quick Checklist

**PLAN Phase:**
- [ ] Objectives defined
- [ ] Expected outcomes specified
- [ ] Verification plan created

**DO Phase:**
- [ ] Changes executed
- [ ] Language matches verification status
- [ ] Execution documented

**CHECK Phase:**
- [ ] Changes verified
- [ ] Objectives evaluated
- [ ] Reflection completed

**ACT Phase:**
- [ ] Changelog updated
- [ ] Practices standardized
- [ ] Lessons learned documented

---

## Templates

- **PLAN:** `plan-phase-template.md`
- **DO:** `do-phase-template.md`
- **CHECK:** `check-phase-template.md`
- **ACT:** `action-workflow-template.md`
- **Best Practices:** `pdca-best-practices.md`
- **End-to-End Example:** `pdca-end-to-end-example.md`

---

## References

- **PDCA Integration Plan:** `docs/architecture/standards-and-adrs/rw-pdca-integration-plan.md`
- **RW Execution Guide:** `packages/frameworks/workflow mgt/docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md`

---

_This quick reference is part of the Release Workflow PDCA Integration. See full templates and examples for detailed guidance._

