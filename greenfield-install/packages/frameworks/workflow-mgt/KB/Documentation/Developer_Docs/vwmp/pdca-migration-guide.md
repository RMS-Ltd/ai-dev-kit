---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:02:07Z
expires_at: null
housekeeping_policy: keep
---

# PDCA Integration Migration Guide

**Purpose:** Guide for migrating existing projects to PDCA-integrated Release Workflow  
**Version:** 1.0.0  
**Last Updated:** 2025-12-03  
**Related:** PDCA Integration, Release Workflow

---

## Overview

This guide helps you migrate from the 11-step Release Workflow to the 13-step PDCA-integrated Release Workflow. The migration adds Steps 12-13 (CHECK and ACT phases) and enhances Steps 1-11 with PDCA principles.

---

## What Changed

### New Steps

**Step 12: Post-Commit Verification & Reflection (CHECK Phase)**
- Verifies changes worked as expected
- Evaluates against objectives from PLAN phase
- Documents verification results
- Reflects on what worked and what didn't

**Step 13: Act on Verification Results (ACT Phase)**
- Updates changelog based on verification results
- Standardizes successful practices
- Creates follow-up tasks if needed
- Documents lessons learned

### Enhanced Steps

**Step 1: Branch Safety Check**
- Now explicitly documented as first step
- Verifies work aligns with branch context

**Step 3: Create Detailed Changelog**
- Now includes PLAN section (objectives, expected outcomes, verification plan)
- PLAN section is optional for backward compatibility

**Step 9: Commit Changes**
- Now includes language pattern guidance (verified vs unverified)
- Commit message language must match changelog verification status

---

## Migration Steps

### Step 1: Update Workflow YAML

**File:** `workflows/release-workflow.yaml`

**Changes:**
1. Update workflow version: `1.0.0` → `2.0.0`
2. Update description to mention PDCA integration
3. Verify Steps 12-13 are present (they should already be there)
4. Verify Step 12 dependency: `step-11` → `step-10` (if incorrect)

**Example:**
```yaml
name: Release Workflow
version: 2.0.0
type: release
description: Automated release workflow with PDCA integration (version bump, changelog, commit, tag, push, verification, action)

steps:
  # ... existing steps 1-11 ...
  
  - id: step-12
    name: Post-Commit Verification & Reflection
    type: verification_reflection
    handler: release.verification_reflection
    required: false
    enabled: true
    dependencies:
      - step-10  # Fixed: was step-11
    config:
      verification_prompt: true
      reflection_questions: true
      changelog_update: true

  - id: step-13
    name: Act on Verification Results
    type: act_on_results
    handler: release.act_on_results
    required: false
    enabled: true
    dependencies:
      - step-12
    config:
      changelog_update: true
      follow_up_tasks: true
      process_improvement: true
```

### Step 2: Update Documentation

**Files to Update:**
- `README.md` - Update step count (10 → 13)
- `release-workflow-reference.md` - Add Steps 12-13 documentation
- `release-workflow-agent-execution.md` - Add Steps 12-13 execution guide

**Key Changes:**
- Update all references from "10 steps" to "13 steps"
- Add PDCA phase descriptions
- Update dependency graphs
- Add Steps 12-13 documentation

### Step 3: Update Changelog Format (Optional)

**File:** Changelog templates and examples

**Changes:**
- Add PLAN section to changelog format (optional)
- Update examples to show PLAN section
- Document PLAN section structure

**Backward Compatibility:**
- PLAN section is optional
- Existing changelogs without PLAN section are still valid
- New changelogs should include PLAN section

### Step 4: Update Commit Message Guidance

**File:** `release-workflow-agent-execution.md` (Step 9)

**Changes:**
- Add language pattern guidance
- Document verified vs unverified language
- Add examples of good vs bad commit messages

**Language Patterns:**
- **Unverified:** "Attempted fix", "Addressed", "Modified"
- **Verified:** "Fixed", "Resolved", "Corrected"

### Step 5: Add PDCA Templates

**Files to Add:**
- `Templates/plan-phase-template.md` (if not exists)
- `Templates/do-phase-template.md` (if not exists)
- `Templates/check-phase-template.md` (if not exists)
- `Templates/action-workflow-template.md` (if not exists)
- `Templates/pdca-best-practices.md` (if not exists)
- `Templates/pdca-quick-reference.md` (if not exists)

**Location:** `docs/documentation/templates/`

### Step 6: Update Cursor Rules

**File:** `.cursorrules`

**Changes:**
- Update step count references (10 → 13)
- Add Steps 12-13 to RW trigger section
- Update TODO list to include Steps 12-13

**Example:**
```markdown
### 🚀 RELEASE WORKFLOW (RW) TRIGGER

When user types "RW" or "rw" (case-insensitive), execute the 13-step Release Workflow:
1. Branch Safety Check
2. Bump Version
3. Create Detailed Changelog (with PLAN section)
4. Update Main Changelog
5. Update README
6. Auto-update Kanban Docs
7. Stage Files
8. Run Validators
9. Commit Changes
10. Create Git Tag
11. Push to Remote
12. Post-Commit Verification & Reflection (optional but recommended)
13. Act on Verification Results (optional but recommended)
```

---

## Backward Compatibility

### What's Backward Compatible

✅ **Existing Workflows:**
- Steps 12-13 are optional (can be skipped)
- PLAN section in changelog is optional
- Existing changelogs without PLAN section are still valid

✅ **Existing Projects:**
- Can continue using 11-step workflow
- Can gradually adopt Steps 12-13
- Can add PLAN section when ready

### What's Not Backward Compatible

❌ **Step Numbering:**
- Step 10 is now Step 11 (Push to Remote)
- Step 11 is now Step 12 (Verification)
- Step 12 is now Step 13 (Action)

**Impact:** If you have scripts or documentation referencing specific step numbers, update them.

---

## Common Issues and Solutions

### Issue 1: Step 12 Dependency Error

**Problem:** Step 12 references `step-11` which doesn't exist.

**Solution:** Update dependency to `step-10`:
```yaml
dependencies:
  - step-10  # Fixed: was step-11
```

### Issue 2: Step Count Mismatch

**Problem:** Documentation says "10 steps" but workflow has 13 steps.

**Solution:** Update all references:
- Search for "10 steps" → Replace with "13 steps"
- Search for "Step 10" → Replace with "Step 11" (for Push to Remote)
- Add Steps 12-13 documentation

### Issue 3: Missing PLAN Section

**Problem:** Changelog doesn't include PLAN section.

**Solution:** PLAN section is optional. You can:
- Continue without PLAN section (backward compatible)
- Add PLAN section gradually
- Use PLAN section for new releases

### Issue 4: Commit Message Language

**Problem:** Commit message uses "Fixed" before verification.

**Solution:** Use appropriate language:
- **Before verification:** "Attempted fix", "Addressed"
- **After verification:** "Fixed", "Resolved"

---

## Testing the Migration

### Test Checklist

- [ ] Workflow YAML updated to version 2.0.0
- [ ] Steps 12-13 present in workflow YAML
- [ ] Step 12 dependency fixed (step-10, not step-11)
- [ ] Documentation updated (10 → 13 steps)
- [ ] README updated with PDCA information
- [ ] Reference documentation includes Steps 12-13
- [ ] Agent execution guide includes Steps 12-13
- [ ] Cursor rules updated with 13 steps
- [ ] Changelog format supports PLAN section (optional)
- [ ] Commit message guidance updated
- [ ] PDCA templates available
- [ ] Test workflow execution with Steps 12-13 enabled
- [ ] Test workflow execution with Steps 12-13 disabled

### Test Workflow Execution

1. **Test with Steps 12-13 Enabled:**
   - Run RW
   - Verify Steps 12-13 execute
   - Verify verification workflow
   - Verify action workflow

2. **Test with Steps 12-13 Disabled:**
   - Disable Steps 12-13 in workflow YAML
   - Run RW
   - Verify workflow completes with Steps 1-11 only

3. **Test Backward Compatibility:**
   - Use existing changelog format (no PLAN section)
   - Verify workflow still works
   - Verify no errors

---

## Gradual Adoption

You don't need to adopt all PDCA features at once. You can adopt gradually:

### Phase 1: Add Steps 12-13 (Optional)
- Add Steps 12-13 to workflow YAML
- Keep them disabled initially
- Enable when ready

### Phase 2: Add PLAN Section (Optional)
- Start using PLAN section in new changelogs
- Keep existing changelogs as-is
- Gradually migrate

### Phase 3: Full PDCA Integration
- Enable Steps 12-13
- Use PLAN section consistently
- Follow PDCA best practices

---

## References

- **PDCA Integration Plan:** `docs/architecture/standards-and-adrs/rw-pdca-integration-plan.md`
- **PDCA Templates:** `docs/documentation/templates/`
- **PDCA Best Practices:** `docs/documentation/templates/pdca-best-practices.md`
- **PDCA Quick Reference:** `docs/documentation/templates/pdca-quick-reference.md`
- **Release Workflow Reference:** `docs/documentation/Developer_Docs/vwmp/release-workflow-reference.md`
- **Release Workflow Agent Execution:** `docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md`

---

_This migration guide is part of the Release Workflow PDCA Integration. See templates and examples for detailed guidance._

