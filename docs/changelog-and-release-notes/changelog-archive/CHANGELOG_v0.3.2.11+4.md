# Changelog: v0.3.2.11+4

**Release Date:** 2026-01-19 16:50:39 UTC  
**Epic:** 3 (Numbering & Versioning Framework)  
**Story:** 2 (Versioning Cookbook & Examples)  
**Task:** 11 (Implement SemVer Mapping for Release Workflow)  
**Build:** 4

---

## Summary

GitHub release creation functionality added to Release Workflow. RW Step 12.5 now automatically creates or updates GitHub releases using SemVer tags, ensuring external-facing releases display SemVer instead of internal version numbers.

---

## Changes

### New Features

- **GitHub Release Creation Script:** Created `create_github_release.py` script to create/update GitHub releases via API
  - Uses SemVer tag for release name (e.g., `v0.3.19+4`)
  - Includes both SemVer and internal version in release body for traceability
  - Supports creating new releases or updating existing ones

- **RW Step 12.5 Enhancement:** Added new sub-step to Release Workflow for GitHub release management
  - Automatically creates/updates GitHub release after pushing tags
  - Uses SemVer tag (`v{semver}`) for release name
  - Includes Epic/Story/Task information in release body
  - Requires `GITHUB_TOKEN` environment variable (non-blocking if not set)

### Documentation Updates

- **RW Documentation:** Updated `.cursorrules` with Step 12.5 instructions
  - Documents GitHub release creation process
  - Includes example command and parameters
  - Notes token requirements and non-blocking behavior

---

## Technical Details

- **Internal Version:** `0.3.2.11+4`
- **SemVer:** `0.3.19+4` (generated via `semver_converter.py`)
- **Files Created:**
  - `packages/frameworks/workflow mgt/scripts/create_github_release.py`
- **Files Modified:**
  - `.cursorrules` (RW Step 12.5)

---

## Related Work

- **Task:** E3:S02:T11 (Implement SemVer Mapping for Release Workflow)
- **Previous Release:** v0.3.2.11+3 (Documentation update: README SemVer display)

---

## Notes

This release completes the GitHub release automation for SemVer. Future RW executions will automatically create/update GitHub releases with SemVer tags, ensuring external-facing releases display the correct version format.
