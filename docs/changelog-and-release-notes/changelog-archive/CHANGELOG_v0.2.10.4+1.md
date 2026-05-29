# Changelog: v0.2.10.4+1

**Release Date:** 2025-12-12  
**Epic:** Epic 2 - Workflow Management  
**Story:** Story 10 - Versioning Policy Hardening — Doc-Init Build (+0) for New E/S/T  
**Task:** Task 4 - Update Versioning Policy with Doc-Init Logic

---

## Summary

Updated versioning policy documents to include comprehensive doc-init logic. Documented `+0` build number for doc-init builds, explained relationship between doc-init (`+0`) and functional work (`+1`), and updated Task transition rules to include doc-init path. Ensured consistency across all versioning policy documents.

---

## Changes

### Versioning Policy Updates

**Files Updated:**
1. **`packages/frameworks/numbering & versioning/versioning-policy.md`** (Framework)
2. **`docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md`** (Dev-Kit Local)

**BUILD Section Updates:**
- ✅ Documented doc-init build (`+0`) for first-time Task/Story/Epic document creation
  - Purpose: Establishes canonical version anchor before functional work
  - Requirements: Must be docs-only changes (no code changes)
  - Example: `0.2.10.1+0` = Doc-init build for E2:S10:T01 documentation
- ✅ Documented normal builds (`+1` or higher) for functional work
  - Starts at 1 for first functional release (or after doc-init)
  - Increments with each subsequent release (`+2`, `+3`, etc.)
  - Example: `0.2.10.1+1` = First functional build for E2:S10:T01 (after `+0`)
- ✅ Explained relationship: Doc-init (`+0`) → Functional work (`+1`, `+2`, ...)
  - `+0` establishes the version anchor (documentation-only)
  - `+1` is the first functional change for that task
  - `+2`, `+3`, etc. are subsequent functional changes

**Task Transition Rules Updates:**
- ✅ Added doc-init path (`+0`) for first-time Task document creation
  - Create Task document (docs-only, no code changes)
  - Set version to `RC.EPIC.STORY.TASK+0` (doc-init build)
  - Establishes canonical version anchor
  - Subsequent functional work uses `+1`, `+2`, etc.
- ✅ Added normal path (`+1` or higher) for functional work
  - Task document must already exist (created in doc-init or previously)
  - Set version to `RC.EPIC.STORY.TASK+1` (first functional build) or increment BUILD
  - Can include code changes, feature implementations, bug fixes, etc.

**Doc-Init Support Section Updates:**
- ✅ Expanded documentation with:
  - Purpose: Establish canonical version anchor for new E/S/T documentation
  - Build Number: `+0` (doc-init build)
  - Requirements: Docs-only changes (no code changes allowed)
  - Relationship to Functional Work: Doc-init (`+0`) → First functional build (`+1`) → Subsequent builds (`+2`, `+3`, ...)
  - Detection: Release Workflow Step 2 automatically detects doc-init state
  - Validation: Validators enforce docs-only requirement for `+0` builds
  - Related: FR-017 (Versioning Policy Hardening — Doc-Init Build), FR-018 (Abstract Space concept)

---

## Related Work

- **Story:** E2:S10 - Versioning Policy Hardening — Doc-Init Build (+0) for New E/S/T
- **Epic:** Epic 2 - Workflow Management
- **Feature Request:** FR-017 - Versioning Policy Hardening — Doc-Init Build (+0) for New E/S/T
- **Feature Request:** FR-018 - Abstract Space for Zero-Numbered E/S/T Docs
- **Depends On:** E2:S10:T01 (RW Step 2 Doc-Init Support), E2:S10:T02 (Doc-Init Validation), E2:S10:T03 (CHANGELOG Format)
- **Enables:** E2:S10:T05 (Update RW Step 1 Procedure Documentation)

---

## Notes

This update ensures all versioning policy documents consistently document doc-init logic, making it clear when and how to use `+0` builds for documentation-only changes. The policy now provides complete guidance on the relationship between doc-init builds and functional work, ensuring proper versioning practices across all projects using this framework.
