---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:01:57Z
expires_at: null
housekeeping_policy: keep
---

# DO Phase Template

**Purpose:** Template for DO phase in Release Workflow (PDCA cycle)  
**Used In:** Release Workflow Steps 4-11 (Execute Changes)  
**Related:** PDCA Integration, Commit Messages, Execution Documentation

---

## DO Phase Overview

The DO phase encompasses the execution of planned changes. This includes updating documentation, validating changes, committing, tagging, and pushing to remote.

**DO Phase Steps:**
- Step 4: Update Main Changelog
- Step 5: Update README
- Step 6: Auto-update Kanban Docs
- Step 7: Stage Files
- Step 8: Run Validators
- Step 9: Commit Changes
- Step 10: Create Git Tag
- Step 11: Push to Remote

---

## Commit Message Template

### Format

```
Release v{VERSION}: {TASK_ID}: {Brief Description}

{Detailed description of changes}

{Verification status note if applicable}

Epic: {EPIC} | Story: {STORY} | Task: {TASK}
```

### Language Patterns

**For Verified Fixes (after verification):**
- ✅ Use: "Fixed", "Resolved", "Corrected", "Eliminated"
- ✅ Example: "Fixed changelog verification issue in Step 3"

**For Unverified Fixes (before verification):**
- ✅ Use: "Attempted fix", "Addressed", "Modified", "Updated"
- ✅ Example: "Attempted fix for changelog verification issue"

**For Features:**
- ✅ Use: "Added", "Implemented", "Created", "Enhanced"
- ✅ Example: "Added Step 12 (Post-Commit Verification) to Release Workflow"

**For Documentation:**
- ✅ Use: "Documented", "Updated", "Created", "Enhanced"
- ✅ Example: "Updated RW execution guide with Step 12"

### Examples

**Good Commit Message (Verified Fix):**
```
Release v0.2.2.1+1: E2:S02:T01: Fixed changelog verification issue

- Updated Step 3 to require verification before marking fixes as "Fixed"
- Added verification status tracking to changelog format
- Updated changelog examples to show verification workflow

Epic: 2 | Story: 2 | Task: 1
```

**Good Commit Message (Unverified Fix):**
```
Release v0.2.2.1+1: E2:S02:T01: Attempted fix for changelog verification issue

- Updated Step 3 to require verification before marking fixes as "Fixed"
- Added verification status tracking to changelog format
- Verification pending: Manual test required

Epic: 2 | Story: 2 | Task: 1
```

**Good Commit Message (Feature):**
```
Release v0.2.2.1+1: E2:S02:T01: Added Step 12 (Post-Commit Verification) to Release Workflow

- Added Step 12 to release-workflow.yaml
- Created verification workflow template
- Created reflection questions template
- Updated RW execution guide with Step 12 guidance

Epic: 2 | Story: 2 | Task: 1
```

**Bad Commit Message (Too Vague):**
```
Release v0.2.2.1+1: Fixed stuff

Epic: 2 | Story: 2 | Task: 1
```

**Bad Commit Message (Wrong Language for Status):**
```
Release v0.2.2.1+1: Fixed changelog issue

(Should be "Attempted fix" if not yet verified)
```

---

## Execution Documentation Template

### Format

```markdown
## Execution Summary

**What Was Done:**
- [Action 1]
- [Action 2]
- [Action 3]

**How It Was Done:**
- [Method/Approach 1]
- [Method/Approach 2]

**Verification Status:**
- [ ] Verified (test suite passed / manual test successful)
- [ ] Unverified (verification pending)
- [ ] Failed (verification failed, follow-up needed)

**Notes:**
- [Any relevant notes about execution]
```

### Example

```markdown
## Execution Summary

**What Was Done:**
- Updated Step 3 (Create Detailed Changelog) to include PLAN section
- Added objectives, expected outcomes, and verification plan fields
- Updated changelog template with PLAN section structure
- Updated all changelog examples to include PLAN section

**How It Was Done:**
- Modified changelog template to include PLAN section at the beginning
- Added guidance in Step 3 execution documentation
- Updated changelog archive examples to show PLAN section format

**Verification Status:**
- [ ] Verified (test suite passed / manual test successful)
- [x] Unverified (verification pending)
- [ ] Failed (verification failed, follow-up needed)

**Notes:**
- PLAN section is optional for backward compatibility
- Examples show both with and without PLAN section
```

---

## Language Pattern Reference

### Verification Status Language

**Before Verification (Unverified):**
- ✅ "Attempted fix for X"
- ✅ "Addressed issue Y"
- ✅ "Modified Z to address W"
- ❌ "Fixed X" (only use after verification)

**After Verification (Verified):**
- ✅ "Fixed X"
- ✅ "Resolved Y"
- ✅ "Corrected Z"
- ✅ "Eliminated W"

### Change Type Language

**Features:**
- "Added", "Implemented", "Created", "Enhanced", "Introduced"

**Fixes:**
- "Fixed", "Resolved", "Corrected", "Eliminated", "Patched"

**Documentation:**
- "Documented", "Updated", "Created", "Enhanced", "Clarified"

**Refactoring:**
- "Refactored", "Restructured", "Reorganized", "Simplified"

**Performance:**
- "Optimized", "Improved", "Enhanced", "Accelerated"

---

## Commit-Changelog Alignment

**CRITICAL:** Commit message language must match changelog verification status.

**Rules:**
1. If changelog says "Attempted fix", commit message must use "Attempted fix" or "Addressed"
2. If changelog says "Fixed" (verified), commit message can use "Fixed" or "Resolved"
3. Commit message should not claim "Fixed" if changelog says "Attempted fix"
4. After verification (Step 12), changelog can be updated to "Fixed" and commit message can be updated in next release

---

## Best Practices

1. **Be Specific:**
   - ✅ "Fixed changelog verification issue in Step 3"
   - ❌ "Fixed stuff"

2. **Match Verification Status:**
   - ✅ Use "Attempted fix" until verified
   - ✅ Use "Fixed" only after verification

3. **Include Context:**
   - ✅ Include task ID, epic, story, task numbers
   - ✅ Include brief description of what changed

4. **Link to Changelog:**
   - ✅ Commit message should align with changelog intent
   - ✅ Verification status should match between commit and changelog

5. **Document Execution:**
   - ✅ Document what was actually done
   - ✅ Document how it was done
   - ✅ Document verification status

---

## References

- **PDCA Integration Plan:** `docs/architecture/standards-and-adrs/rw-pdca-integration-plan.md`
- **Changelog Language Analysis:** `docs/architecture/standards-and-adrs/rw-changelog-commit-language-analysis.md`
- **RW Execution Guide:** `packages/frameworks/workflow mgt/docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md`

