---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:01:50Z
expires_at: null
housekeeping_policy: keep
---

# Task 004 – Enhance DO Phase (Improve commit message guidance and execution docs)

**Task:** E2:S02:T04  
**Status:** TODO  
**Priority:** MEDIUM  
**Created:** 2025-12-03  
**Story:** Story 002 – PDCA Integration into Release Workflow

---

## Overview

Enhance the DO phase of the Release Workflow by improving commit message guidance, adding execution documentation, and ensuring commit messages accurately reflect changelog intent and verification status.

---

## Input

- Current Step 9 (Commit Changes) guidance
- Changelog language analysis: `docs/architecture/standards-and-adrs/rw-changelog-commit-language-analysis.md`
- PDCA integration plan: `docs/architecture/standards-and-adrs/rw-pdca-integration-plan.md`

---

## Deliverable

- Enhanced commit message guidance
- Execution documentation template
- Language pattern guidelines (verified vs unverified)
- Examples of good vs bad commit messages
- Updated Step 9 (Commit Changes) guidance
- Commit-changelog alignment validation

---

## Approach

1. **Update Step 9 Guidance:**
   - Enhance `release-workflow-agent-execution.md` Step 9 section
   - Add commit message language guidelines
   - Add connection to changelog verification status

2. **Add Commit Message Language Guidelines:**
   - Define language patterns for verified fixes
   - Define language patterns for unverified fixes
   - Add explicit do's and don'ts
   - Add word lists (what to use/avoid)

3. **Create Execution Documentation Template:**
   - Template for documenting what was actually done
   - Format for execution details
   - Integration with changelog

4. **Add Language Pattern Guidelines:**
   - Verified fixes: "Fixed", "Resolved", "Corrected"
   - Unverified fixes: "Attempted fix", "Addressed", "Modified"
   - Clear examples of each pattern

5. **Add Examples:**
   - Good commit message examples
   - Bad commit message examples
   - Examples showing changelog-commit alignment

6. **Add Validation:**
   - Ensure commit messages match changelog intent
   - Validate language matches verification status
   - Add validator if needed

---

## Acceptance Criteria

- [ ] Commit message guidance enhanced
- [ ] Execution documentation template created
- [ ] Language pattern guidelines added
- [ ] Examples added (good vs bad)
- [ ] Step 9 guidance updated
- [ ] Commit-changelog alignment validated
- [ ] Language matches verification status

---

## Related Tasks

- E2:S02:T01 – Add CHECK Phase (coordinates with verification status)
- E2:S02:T03 – Enhance PLAN Phase (coordinates with changelog intent)
- E2:S02:T05 – Create PDCA templates and examples (includes DO templates)

---

## References

- **Changelog Language Analysis:** `docs/architecture/standards-and-adrs/rw-changelog-commit-language-analysis.md`
- **PDCA Integration Plan:** `docs/architecture/standards-and-adrs/rw-pdca-integration-plan.md`
- **RW Execution Guide:** `packages/frameworks/workflow mgt/docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md`

