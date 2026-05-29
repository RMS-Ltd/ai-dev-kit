# Changelog: v0.3.2.11+3

**Release Date:** 2026-01-19 20:45:00 UTC  
**Epic:** 3 (Numbering & Versioning Framework)  
**Story:** 2 (Versioning Cookbook & Examples)  
**Task:** 11 (Implement SemVer Mapping for Release Workflow)  
**Build:** 3

---

## Summary

Documentation update for SemVer mapping implementation: Updated versioning policy documents and Release Workflow Step 5 to ensure README displays SemVer (outward-facing version) instead of internal version.

---

## Changes

### Documentation Updates

- **Versioning Policy (dev-kit):** Added "README Version Display" section documenting that README displays SemVer for external consumers
- **Versioning Policy (framework):** Added "README Version Display" section to portable framework package
- **Release Workflow Step 5:** Enhanced to generate SemVer and update README with outward-facing version
- **README.md:** Updated to display SemVer `v0.3.19+3` instead of internal version `v0.3.2.11+3`

### Rationale

External users and package managers expect monotonically increasing SemVer versions. The internal `RC.EPIC.STORY.TASK+BUILD` format is for internal development traceability only. README is outward-facing, so it displays SemVer.

---

## Technical Details

- **Internal Version:** `0.3.2.11+3`
- **SemVer:** `0.3.19+3` (generated via `semver_converter.py`)
- **Files Modified:**
  - `docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md`
  - `packages/frameworks/numbering & versioning/versioning-policy.md`
  - `.cursorrules` (RW Step 5)
  - `README.md`

---

## Related Work

- **Task:** E3:S02:T11 (Implement SemVer Mapping for Release Workflow)
- **Previous Release:** v0.3.2.11+2 (SemVer mapping implementation complete)

---

## Notes

This release completes the documentation for SemVer display in README. Future RW executions will automatically generate SemVer and update README with the outward-facing version.
