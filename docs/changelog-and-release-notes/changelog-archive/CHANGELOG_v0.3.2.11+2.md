---
lifecycle: evergreen
ttl_days: null
created_at: 2026-01-19T15:30:00Z
expires_at: null
housekeeping_policy: keep
---

# Release v0.3.2.11+2

**Release Date:** 2026-01-19 15:30:00 UTC  
**Epic:** Epic 3 - Numbering & Versioning Framework  
**Story:** Story 2 - Versioning Cookbook & Examples  
**Task:** Task 11 - Implement SemVer Mapping for Release Workflow  
**Build:** 2

---

## Summary

Implemented SemVer mapping system for Release Workflow. Created registry-based SemVer conversion using Hybrid Approach, enabling dual tagging (internal + SemVer) in RW Step 11. System converts internal `RC.EPIC.STORY.TASK+BUILD` versions to monotonic SemVer `MAJOR.MINOR.PATCH+BUILD` for GitHub releases.

---

## Changes

### Added
- **SemVer Registry:** `semver-registry.yaml` (project root)
  - Tracks Epic→MINOR and (Epic,Story)→PATCH mappings per RC
  - Built from 490 historical git tags (9 epics, 61 stories in RC=0)
  - YAML structure with per-RC scoping

- **SemVer Converter Script:** `packages/frameworks/workflow mgt/scripts/version/semver_converter.py`
  - Implements Hybrid Approach algorithm
  - Converts internal versions to SemVer using registry
  - Automatically updates registry during conversion
  - Functions: `convert_internal_to_semver()`, `load_semver_registry()`, `save_semver_registry()`

- **Registry Migration Script:** `packages/frameworks/workflow mgt/scripts/version/build_semver_registry.py`
  - One-time script to build initial registry from historical git tags
  - Parses all `v0.*.*.*+*` tags and tracks first appearances
  - Generates `semver-registry.yaml` with Epic→MINOR and Story→PATCH mappings

- **Validation Script:** `packages/frameworks/workflow mgt/scripts/validation/validate_semver_monotonic.py`
  - Validates SemVer increases monotonically across all releases
  - Can be run periodically or in CI/CD
  - Reports violations with tag comparisons

### Changed
- **RW Step 11: Create Git Tag** (`.cursorrules`)
  - Enhanced to create dual tags (internal + SemVer)
  - Generates SemVer using `semver_converter.py`
  - Creates both `v{internal_version}` and `v{semver}` tags
  - Registry automatically updated during conversion

- **RW Step 12: Push to Remote** (`.cursorrules`)
  - Updated to push both tags (internal + SemVer)
  - Both tags reference the same commit

- **Versioning Policy Documents:**
  - `docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md` - Added SemVer mapping section (2.1)
  - `packages/frameworks/numbering & versioning/versioning-policy.md` - Added SemVer mapping section (CRITICAL - portable framework)

---

## Related Work

**Task:** E3:S02:T11 - Implement SemVer Mapping for Release Workflow  
**Previous Release:** v0.3.2.11+1 (Task created: SemVer mapping implementation)  
**Next Release:** TBD

**Related Documents:**
- Proposal: `docs/architecture/standards-and-adrs/semver-mapping-proposal.md`
- Impact Analysis: `docs/architecture/standards-and-adrs/semver-mapping-implementation-impact.md`
- Dual Versioning Guide: `docs/architecture/standards-and-adrs/dual-versioning-package-managers.md`

---

## Technical Details

**Hybrid Approach Algorithm:**
- **MAJOR** = RC (direct mapping: 0 → 0, 1 → 1, etc.)
- **MINOR** = First-seen Epic number (sequential based on first appearance, per RC)
- **PATCH** = First-seen Story number (sequential based on first appearance, per RC)
- **BUILD** = Preserved from internal version

**Example Conversions:**
- Internal: `0.6.7.101+24` → SemVer: `0.6.52+24` (Epic 6 → MINOR=6, Story 7 in Epic 6 → PATCH=52)
- Internal: `0.4.14.2+1` → SemVer: `0.4.34+1` (Epic 4 → MINOR=4, Story 14 in Epic 4 → PATCH=34)
- Internal: `0.9.1.8+10` → SemVer: `0.9.60+10` (Epic 9 → MINOR=9, Story 1 in Epic 9 → PATCH=60)

**Registry Structure:**
```yaml
rc_0:
  epic_to_minor:
    1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9
  story_to_patch:
    (1,1): 1, (1,2): 2, ..., (9,4): 61
```

**Files Created:**
- `semver-registry.yaml` - Registry file (project root)
- `packages/frameworks/workflow mgt/scripts/version/semver_converter.py` - Converter script
- `packages/frameworks/workflow mgt/scripts/version/build_semver_registry.py` - Migration script
- `packages/frameworks/workflow mgt/scripts/validation/validate_semver_monotonic.py` - Validation script

**Files Modified:**
- `.cursorrules` - RW Step 11 & 12 enhanced with dual tagging
- `docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md` - Added SemVer mapping section
- `packages/frameworks/numbering & versioning/versioning-policy.md` - Added SemVer mapping section (CRITICAL)

**Version Changes:**
- `src/fynd_deals/version.py`: `0.3.2.11+1` → `0.3.2.11+2`

---

## Notes

This release implements the SemVer mapping system that was proposed on 2026-01-17 but never implemented. The system:

- **Solves the regression problem:** Internal versions can appear to regress (e.g., `0.6.7.12+3` → `0.4.6.9+1`), but SemVer always increases
- **Preserves semantic meaning:** Same Epic/Story combinations reuse MINOR/PATCH numbers
- **Maintains backward compatibility:** Internal tags remain (dual tagging)
- **Enables GitHub releases:** SemVer tags provide monotonic versioning for external consumers

**Registry Initialization:**
- Built from 490 historical git tags
- Tracks 9 epics and 61 stories in RC=0
- Registry automatically updates during each RW Step 11 execution

**Next RW Execution:**
- Will generate SemVer tag alongside internal tag
- Example: `v0.3.2.11+2` (internal) + `v0.3.19+2` (SemVer)
- Both tags pushed to remote

**Framework Package Updates (CRITICAL):**
- Framework `versioning-policy.md` updated with SemVer mapping section
- Critical because framework is portable package used by other projects
- Framework consumers can now implement SemVer mapping using documented approach

---

_This changelog entry follows the [Keep a Changelog](https://keepachangelog.com/) format and is part of the ai-dev-kit versioning strategy._
