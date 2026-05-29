---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:01:57Z
expires_at: null
housekeeping_policy: keep
---

# Commit Message Language Guidelines

**Purpose:** Guidelines for commit message language patterns (DO phase of PDCA)  
**Used In:** Release Workflow Step 9 (Commit Changes)  
**Related:** PDCA Integration, Fix Verification, Changelog Alignment

---

## Language Pattern Overview

Commit messages MUST align with changelog verification status and accurately reflect what was done (DO phase).

---

## Verified Fixes Language

**When to Use:** Only when changelog shows "Fixed" with verification evidence

**Approved Words:**
- "Fixed"
- "Resolved"
- "Corrected"
- "Repaired"
- "Solved"

**Example:**
```
Release v0.2.2.4+1: Fixed changelog verification issue

- Fixed changelog verification to require evidence
- Resolved issue with unverified fixes being marked as "Fixed"
- Corrected validation logic in Step 3
```

**Requirements:**
- ✅ Verification evidence exists in changelog
- ✅ Changelog shows "Fixed" section (not "Attempted Fixes")
- ✅ Verification method documented (test suite, manual testing, etc.)

---

## Unverified Fixes Language

**When to Use:** When changelog shows "Attempted Fix (Pending Verification)"

**Approved Words:**
- "Attempted fix"
- "Addressed"
- "Modified"
- "Updated"
- "Changed"
- "Adjusted"

**Example:**
```
Release v0.2.2.4+1: Attempted fix for changelog verification issue

- Attempted fix for changelog verification requirement
- Addressed issue with unverified fixes
- Modified validation logic in Step 3
- Updated changelog format to support verification status
```

**Requirements:**
- ✅ Changelog shows "Attempted Fixes" section
- ✅ Verification plan documented
- ✅ Next steps documented

**DO NOT:**
- ❌ Use "Fixed" or "Resolved" (too confident)
- ❌ Claim verification without evidence
- ❌ Misrepresent verification status

---

## Documentation/Feature Language

**When to Use:** For documentation, features, tooling, infrastructure changes

**Approved Words:**
- "Added"
- "Created"
- "Updated"
- "Enhanced"
- "Improved"
- "Implemented"
- "Documented"

**Example:**
```
Release v0.2.2.4+1: Enhanced DO Phase in Release Workflow

- Added execution documentation template
- Created commit message language guidelines
- Updated Step 9 execution guide
- Enhanced commit message validation
```

---

## Language Pattern Decision Tree

```
Is this a bug fix?
├─ Yes → Is it verified?
│   ├─ Yes → Use verified language ("Fixed", "Resolved")
│   └─ No → Use unverified language ("Attempted fix", "Addressed")
└─ No → Use feature/documentation language ("Added", "Created", "Updated")
```

---

## Commit Message Format

**Standard Format:**
```
Release v{VERSION}: {Summary}

- {Change 1}
- {Change 2}
- {Change 3}
```

**With Verification Status:**
```
Release v{VERSION}: {Summary}

- {Change 1}
  - Verification Status: {Verified/Attempted Fix}
  - Verification Method: {Test Suite/Manual Testing}
- {Change 2}
```

---

## Examples: Good vs Bad

### ✅ Good Commit Messages

**Verified Fix:**
```
Release v0.2.2.4+1: Fixed changelog verification issue

- Fixed changelog verification to require evidence
- Resolved issue with unverified fixes being marked as "Fixed"
- Verification: Test suite passes (15/15)
```

**Unverified Fix:**
```
Release v0.2.2.4+1: Attempted fix for changelog verification issue

- Attempted fix for changelog verification requirement
- Addressed issue with unverified fixes
- Verification: Pending (test suite scheduled)
```

**Documentation:**
```
Release v0.2.2.4+1: Enhanced DO Phase in Release Workflow

- Added execution documentation template
- Created commit message language guidelines
- Updated Step 9 execution guide
```

### ❌ Bad Commit Messages

**Overly Confident (Unverified Fix):**
```
Release v0.2.2.4+1: Fixed changelog verification issue

- Fixed changelog verification (but no verification evidence)
```

**Misleading Language:**
```
Release v0.2.2.4+1: Resolved changelog issue

- Changed validation logic (but changelog says "Attempted Fix")
```

**Vague Language:**
```
Release v0.2.2.4+1: Updated stuff

- Made changes
- Fixed things
```

---

## Changelog-Commit Alignment

**CRITICAL:** Commit message language MUST match changelog verification status

**Alignment Rules:**

1. **If changelog says "Fixed" (verified):**
   - ✅ Commit message can say "Fixed", "Resolved", "Corrected"
   - ❌ Commit message MUST NOT say "Attempted fix"

2. **If changelog says "Attempted Fix" (unverified):**
   - ✅ Commit message can say "Attempted fix", "Addressed", "Modified"
   - ❌ Commit message MUST NOT say "Fixed", "Resolved"

3. **If changelog has no fixes:**
   - ✅ Commit message uses feature/documentation language
   - ✅ No verification language needed

**Validation:**
- Step 9 validates commit message language matches changelog
- If mismatch detected, workflow should warn or abort
- Agent must correct language before committing

---

## Integration with RW Steps

**Step 3 (Create Detailed Changelog):**
- Creates changelog with verification status
- Determines language pattern for commit message

**Step 9 (Commit Changes):**
- Reads changelog verification status
- Selects appropriate language pattern
- Validates alignment before committing

**Step 12 (CHECK Phase):**
- Verifies changes
- Updates verification status
- May trigger new commit with updated language

**Step 13 (ACT Phase):**
- Acts on verification results
- Updates changelog language if needed
- May create new commit with verified language

---

## Best Practices

1. **Match Status:** Commit message language must match changelog verification status
2. **Be Accurate:** Use language that accurately reflects what was done
3. **Be Specific:** Avoid vague language ("stuff", "things", "changes")
4. **Be Honest:** Don't claim verification without evidence
5. **Be Consistent:** Use consistent language patterns across commits

---

## References

- **PDCA Integration Plan:** `docs/architecture/standards-and-adrs/rw-pdca-integration-plan.md`
- **Changelog Language Analysis:** `docs/architecture/standards-and-adrs/rw-changelog-commit-language-analysis.md`
- **RW Step 9:** `packages/frameworks/workflow mgt/docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md` (Step 9)
- **Execution Template:** `packages/frameworks/workflow mgt/docs/documentation/templates/execution-documentation-template.md`

