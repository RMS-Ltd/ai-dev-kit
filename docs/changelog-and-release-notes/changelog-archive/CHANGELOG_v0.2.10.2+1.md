# Changelog: v0.2.10.2+1

**Release Date:** 2025-12-12  
**Epic:** Epic 2 - Workflow Management  
**Story:** Story 10 - Versioning Policy Hardening — Doc-Init Build (+0) for New E/S/T  
**Task:** Task 2 - Implement Doc-Init Validation (Docs-Only Check)

---

## Summary

Implemented doc-init validation in both version bump and branch context validators. Validators now detect when a version has BUILD=0 (doc-init build) and verify that all changed files are documentation-only. Validators fail with clear error messages if non-documentation files are detected in a `+0` build.

---

## Changes

### Validation Scripts Enhanced

**Files Modified:**
- `packages/frameworks/workflow mgt/scripts/validation/validate_version_bump.py`
- `packages/frameworks/workflow mgt/scripts/validation/validate_branch_context.py`

**New Functions Added:**
1. **`is_documentation_file(file_path: Path) -> bool`**
   - Classifies files as documentation vs code
   - Documentation files include: `.md`, README, CHANGELOG, files in `docs/`, `packages/frameworks/`, `docs/`, `.yaml`, `.txt`
   - Code files include: `.py` (except in docs/docs), `.js`, `.ts`, `.java`, `.go`, `.rs`, and other code extensions

2. **`get_changed_files(project_root: Path = None) -> List[Path]`**
   - Detects all changed files from git (staged + unstaged + untracked)
   - Returns list of Path objects for changed files

3. **`validate_doc_init_build(...)`**
   - Validates that doc-init builds (`+0`) only contain documentation changes
   - Checks if BUILD=0, then verifies all changed files are docs-only
   - Returns validation result with clear error messages if non-doc files detected

**Integration:**
- Doc-init validation integrated into `validate_version_bump()` function
- Doc-init validation integrated into `validate_branch_context()` function
- Validation runs automatically when BUILD=0 is detected
- Clear error messages provided for validation failures

---

## Validation Behavior

**When BUILD=0 (doc-init build):**
- Validators detect doc-init build automatically
- All changed files are checked against documentation file patterns
- Validation fails if any non-documentation files are detected
- Error messages list all non-doc files found

**When BUILD>0 (normal build):**
- Doc-init validation is skipped (normal builds can contain code changes)

---

## Testing

- ✅ Validators tested with current doc-init build (v0.2.10.1+0)
- ✅ Doc-init validation correctly identifies documentation files
- ✅ Doc-init validation correctly rejects code files in `+0` builds
- ✅ Error messages are clear and actionable

---

## Related Work

- **E2:S10:T01:** Update RW Step 2 to Support Doc-Init Path (prerequisite)
- **E2:S10:T03:** Update CHANGELOG Format for Doc Init Entries (next task)
- **FR-016:** Doc-Init Build (+0) for New E/S/T (feature request)

---

## Notes

This implementation enforces the doc-init policy at the validation layer, ensuring that `+0` builds truly contain only documentation changes. This prevents accidental code changes from being included in doc-init builds, maintaining the integrity of the versioning policy.
