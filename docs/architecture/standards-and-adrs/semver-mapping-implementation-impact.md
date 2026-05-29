---
lifecycle: evergreen
ttl_days: null
created_at: 2026-01-17T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# SemVer Mapping Implementation Impact Analysis

**Status:** Analysis  
**Priority:** HIGH  
**Last Updated:** 2026-01-17  
**Related Work:** SemVer Mapping Proposal, Versioning Policy Updates  
**Version:** v1.0.0

---

## Executive Summary

This document identifies all components affected by implementing the SemVer mapping from internal `RC.E.S.T+B` versioning to external `MAJOR.MINOR.PATCH+BUILD` SemVer for GitHub releases.

**Scope:** Complete impact analysis of dual versioning implementation (internal + SemVer).

---

## 1. Core Versioning Policy Documents

### 1.1 Primary Policy Documents

**Files to Update:**
- `docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md`
  - **Impact:** Add SemVer mapping section
  - **Changes:** Document dual versioning strategy (internal + SemVer)
  - **Priority:** HIGH

- `packages/frameworks/numbering & versioning/versioning-policy.md` ⚠️ **FRAMEWORK PACKAGE**
  - **Impact:** Framework policy update - **Critical for framework consumers**
  - **Changes:** Add SemVer mapping section with hybrid approach algorithm
  - **Changes:** Document registry-based mapping strategy
  - **Changes:** Add examples of internal → SemVer conversion
  - **Priority:** **HIGH** (framework is portable package, must include new strategy)

- `packages/frameworks/workflow mgt/KB/Architecture/Standards_and_ADRs/versioning-policy.md`
  - **Impact:** Framework reference update
  - **Changes:** Add SemVer mapping documentation
  - **Priority:** MEDIUM

### 1.2 Supporting Documentation

**Files to Update:**
- `docs/architecture/standards-and-adrs/versioning-quick-reference.md`
  - **Impact:** Quick reference needs SemVer mapping
  - **Changes:** Add SemVer conversion examples
  - **Priority:** MEDIUM

- `docs/architecture/standards-and-adrs/versioning-strategy.md`
  - **Impact:** Strategy document needs dual versioning
  - **Changes:** Document SemVer for releases, internal for development
  - **Priority:** MEDIUM

- `packages/frameworks/numbering & versioning/versioning-strategy.md` ⚠️ **FRAMEWORK PACKAGE**
  - **Impact:** Framework strategy update - **Critical for framework consumers**
  - **Changes:** Add SemVer mapping strategy section
  - **Changes:** Document dual versioning approach (internal for dev, SemVer for releases)
  - **Changes:** Explain registry management and migration path
  - **Priority:** **HIGH** (framework is portable package, must include new strategy)

- `packages/frameworks/numbering & versioning/IMPLEMENTATION_GUIDE.md` ⚠️ **FRAMEWORK PACKAGE**
  - **Impact:** Implementation guide needs SemVer mapping section
  - **Changes:** Add step-by-step SemVer mapping implementation
  - **Changes:** Document registry setup and migration
  - **Changes:** Update dual-versioning guidance with hybrid approach
  - **Priority:** **HIGH** (primary implementation guide for framework consumers)

- `packages/frameworks/numbering & versioning/README.md` ⚠️ **FRAMEWORK PACKAGE**
  - **Impact:** Framework overview needs SemVer mapping mention
  - **Changes:** Add SemVer mapping to feature list
  - **Changes:** Update dual-versioning references
  - **Priority:** MEDIUM

- `packages/frameworks/numbering & versioning/PACKAGE_OVERVIEW.md` ⚠️ **FRAMEWORK PACKAGE**
  - **Impact:** Package overview may need SemVer mapping feature
  - **Changes:** Add SemVer mapping to key features list
  - **Priority:** LOW

---

## 1.5 ⚠️ CRITICAL: Versioning Framework Package Updates

**Why Critical:** The `packages/frameworks/numbering & versioning/` package is a **portable framework** that other projects copy and use. It **must** include the SemVer mapping strategy so framework consumers can implement dual versioning.

### Framework Package Files

**Priority: HIGH (Framework is portable package)**

**Files in `packages/frameworks/numbering & versioning/`:**

1. **`versioning-policy.md`** ⚠️ **CRITICAL**
   - **Current:** Defines `RC.EPIC.STORY.TASK+BUILD` schema only
   - **Needed:** Add SemVer mapping section with hybrid approach
   - **Content:**
     - SemVer mapping algorithm (hybrid approach)
     - Registry-based mapping strategy
     - MAJOR.MINOR.PATCH+BUILD format explanation
     - Examples: `0.6.7.12+3` → `0.1.1+3`
     - Registry structure (`semver-registry.yaml`)
   - **Impact:** Framework consumers need this to implement SemVer mapping

2. **`versioning-strategy.md`** ⚠️ **CRITICAL**
   - **Current:** Documents canonical ordering, forensic traceability
   - **Needed:** Add dual versioning strategy section
   - **Content:**
     - Internal version (for development) vs SemVer (for releases)
     - When to use which version
     - Registry management and migration
     - RC transitions and edge cases
   - **Impact:** Framework consumers need dual versioning strategy guidance

3. **`IMPLEMENTATION_GUIDE.md`** ⚠️ **CRITICAL**
   - **Current:** Step-by-step guide for implementing versioning
   - **Needed:** Add SemVer mapping implementation section
   - **Content:**
     - Step-by-step SemVer mapping setup
     - Registry initialization from git tags
     - Conversion function implementation
     - Integration with Release Workflow
     - Testing and validation
   - **Impact:** Primary implementation guide for framework consumers

4. **`README.md`** (MEDIUM Priority)
   - **Current:** Overview of versioning policies
   - **Needed:** Add SemVer mapping to features list
   - **Content:** Brief mention of dual versioning capability
   - **Impact:** Framework consumers see SemVer mapping as feature

5. **`PACKAGE_OVERVIEW.md`** (LOW Priority)
   - **Current:** Package structure and usage
   - **Needed:** Add SemVer mapping to key features
   - **Content:** SemVer mapping in features list
   - **Impact:** Documentation completeness

### Framework Package Dependencies

**Registry Files:**
- Framework should include `semver-registry.yaml` template/example
- Framework should document registry structure
- Framework should provide migration script template (optional)

**Conversion Utilities:**
- Framework could include `semver_converter.py` utility (optional)
- Or framework documents conversion algorithm only (preferred - more flexible)

**Why Framework Updates Are Critical:**
- Projects **copy** the framework package, not reference it
- Framework is the **canonical SoT** for versioning strategy
- New projects adopting framework need SemVer mapping from day 1
- Existing projects upgrading framework need migration guidance

---

## 2. Release Workflow (RW) Components

### 2.1 RW Step 11: Create Git Tag ⚠️ CRITICAL

**Current Behavior:**
- Creates single tag: `v0.6.7.12+3` (internal version)

**Required Changes:**
- **Generate SemVer** from internal version using registry
- **Create dual tags:**
  - Internal: `v0.6.7.12+3` (backward compatibility)
  - SemVer: `v0.1.1+3` (for GitHub releases)
- **Update registry** (`semver-registry.yaml`) with new mappings
- **Save registry** to version control

**Files to Update:**
- `.cursorrules` (RW Step 11 instructions)
- `packages/frameworks/workflow mgt/cursorrules-rw-trigger-section.md`
- RW execution guide (if exists)

**New Files Needed:**
- `packages/frameworks/workflow mgt/scripts/version/semver_converter.py` (or similar)
  - Function: `convert_internal_to_semver(rc, epic, story, task, build) -> (major, minor, patch, build)`
  - Function: `load_semver_registry() -> dict`
  - Function: `update_semver_registry(rc, epic, story, minor, patch) -> dict`
  - Function: `save_semver_registry(registry) -> None`

### 2.2 RW Step 12: Push to Remote

**Current Behavior:**
- Pushes branch and tags to remote

**Required Changes:**
- **Push both tags:** Internal + SemVer
- **Verify both tags** pushed successfully
- **Update documentation** to reflect dual tagging

**Files to Update:**
- `.cursorrules` (RW Step 12 instructions)
- RW execution guide (if exists)

### 2.3 RW Documentation

**Files to Update:**
- Any RW execution guide documentation
- RW installer documentation
- RW examples and templates

---

## 3. Registry Management

### 3.1 Registry File

**New File Needed:**
- `semver-registry.yaml` (project root)
  - **Structure:** YAML file tracking Epic→MINOR and (Epic,Story)→PATCH mappings
  - **Location:** Project root (version controlled)
  - **Format:**
    ```yaml
    rc_0:
      epic_to_minor:
        6: 1    # Epic 6 → MINOR 1 (first appearance)
        9: 2    # Epic 9 → MINOR 2 (second appearance)
        4: 3    # Epic 4 → MINOR 3 (third appearance)
      story_to_patch:
        (6, 7): 1    # Epic 6, Story 7 → PATCH 1
        (9, 1): 2    # Epic 9, Story 1 → PATCH 2
        (4, 6): 3    # Epic 4, Story 6 → PATCH 3

    rc_1:
      epic_to_minor: {}    # Empty until RC=1 releases start
      story_to_patch: {}
    ```

**Registry Management:**
- **Initialization:** Build from existing git tags (Phase 1)
- **Update:** During RW Step 11 (after tag creation)
- **Validation:** Verify monotonic increases across all releases
- **Backup:** Version controlled, can be rebuilt from git tags

### 3.2 Registry Utilities

**New Script Needed:**
- `packages/frameworks/workflow mgt/scripts/version/build_semver_registry.py`
  - **Purpose:** Build initial registry from existing git tags
  - **Input:** All git tags matching `v0.*.*.*+*`
  - **Output:** `semver-registry.yaml`
  - **Usage:** One-time migration script

---

## 4. Validation Scripts

### 4.1 Version Bump Validation

**Files to Update:**
- `packages/frameworks/workflow mgt/scripts/validation/validate_version_bump.py`
  - **Impact:** May need updates for SemVer awareness
  - **Changes:** Verify SemVer increases (optional validation)
  - **Priority:** LOW (internal version validation is primary)

### 4.2 SemVer Validation (New)

**New Script Needed:**
- `packages/frameworks/workflow mgt/scripts/validation/validate_semver_monotonic.py`
  - **Purpose:** Verify SemVer increases across all releases
  - **Input:** All git tags (both internal and SemVer)
  - **Output:** Validation report
  - **Usage:** Periodic validation, CI/CD integration

---

## 5. GitHub Releases

### 5.1 GitHub Release Automation

**Current Behavior:**
- Uses internal version tag: `v0.6.7.12+3`

**Required Changes:**
- **Use SemVer tag:** `v0.1.1+3` (primary tag for release)
- **Reference internal version** in release notes
- **Maintain backward compatibility** (keep internal tags)

**Files to Update:**
- GitHub Actions workflows (if any)
- Release automation scripts (if any)
- Release documentation

### 5.2 Release Notes

**Current Behavior:**
- Release notes reference internal version

**Required Changes:**
- **Primary version:** SemVer (e.g., `v0.1.1+3`)
- **Reference internal version:** In release notes body
- **Format:** "Release v0.1.1+3 (internal: v0.6.7.12+3)"

---

## 6. Documentation Updates

### 6.1 README and Project Documentation

**Files to Update:**
- `README.md`
  - **Impact:** Version display may show both versions
  - **Changes:** Document dual versioning, show both versions
  - **Example:** `**Version:** v0.9.1.8+5 (SemVer: v0.1.1+3)`

- Project documentation references to versions
- Framework installation guides
- Versioning cookbooks and examples

### 6.2 Changelog

**Current Behavior:**
- Changelog uses internal version: `## [0.6.7.12+3]`

**Required Changes:**
- **Keep internal version** as primary (for developers)
- **Optionally reference SemVer** in entry header
- **Format:** `## [0.6.7.12+3] (SemVer: 0.1.1+3)`

**Files to Update:**
- `CHANGELOG.md` format (if changes needed)
- Changelog generation templates
- Changelog validation scripts

---

## 7. Configuration Files

### 7.1 rw-config.yaml

**Current Behavior:**
- Contains `version_file` path

**Required Changes:**
- **Add registry path:** `semver_registry_file: semver-registry.yaml`
- **Optional:** `semver_enabled: true`

**Files to Update:**
- `packages/frameworks/workflow mgt/config/rw-config-schema.md`
- `rw-config.yaml` template/examples
- RW installer script

---

## 8. Cursor Rules

### 8.1 RW Trigger Section

**Files to Update:**
- `.cursorrules`
  - **Impact:** RW Step 11 needs SemVer generation instructions
  - **Changes:** Add SemVer conversion logic to Step 11
  - **Priority:** HIGH

- `packages/frameworks/workflow mgt/cursorrules-rw-trigger-section.md`
  - **Impact:** Template for other projects
  - **Changes:** Add SemVer conversion to Step 11 template
  - **Priority:** HIGH

---

## 9. Version Utilities and Helpers

### 9.1 Version Parsing Utilities

**Files to Review:**
- Any version parsing utilities
- Version comparison functions
- Version validation helpers

**Potential Impact:**
- May need SemVer-aware parsing
- Version comparison needs to handle both formats
- Validation needs to accept both formats

### 9.2 Version Display Helpers

**Potential New Utilities:**
- `format_version_for_display()` - Shows both versions
- `get_semver_from_internal()` - Conversion helper
- `get_internal_from_semver()` - Reverse lookup (if needed)

---

## 10. Integration Points

### 10.1 Package Version Workflow (PVW)

**Current Behavior:**
- PVW uses project version for context

**Required Changes:**
- **May need SemVer awareness** for package versioning
- **Reference SemVer** in package changelog entries
- **Document dual versioning** in package releases

**Files to Review:**
- `packages/frameworks/workflow mgt/workflows/package-version-workflow.yaml`
- PVW documentation
- Package versioning criteria

### 10.2 Changelog Management Workflow (CMW)

**Current Behavior:**
- CMW validates changelog ordering by internal version

**Required Changes:**
- **No changes needed** (internal version remains canonical for ordering)
- CMW continues to use internal version for validation
- SemVer is for external display only

**Files to Review:**
- CMW scripts and documentation
- Changelog validation scripts

---

## 11. Testing and Validation

### 11.1 Test Coverage

**New Tests Needed:**
- SemVer conversion function tests
- Registry management tests
- Dual tagging tests
- Monotonic increase validation tests

**Files to Create:**
- `packages/frameworks/workflow mgt/scripts/version/tests/test_semver_converter.py`
- `packages/frameworks/workflow mgt/scripts/version/tests/test_registry_management.py`

### 11.2 Integration Tests

**New Tests Needed:**
- End-to-end RW with SemVer generation
- Registry persistence across releases
- Backward compatibility tests (internal tags)

---

## 12. Migration and Rollout

### 12.1 Historical Release Analysis

**Action Required:**
- Parse all existing git tags
- Build initial `semver-registry.yaml` from historical releases
- Generate SemVer for all historical releases (for reference)

**New Script Needed:**
- `packages/frameworks/workflow mgt/scripts/version/migrate_historical_releases.py`
  - **Purpose:** One-time migration script
  - **Input:** All existing git tags
  - **Output:** `semver-registry.yaml` + migration report

### 12.2 Gradual Rollout

**Phase 1: Preparation**
- Build registry from existing tags
- Implement conversion function
- Test with sample data

**Phase 2: Dual Tagging (Backward Compatible)**
- Start creating both tags (internal + SemVer)
- Keep internal tags as primary
- Verify SemVer increases correctly

**Phase 3: GitHub Releases**
- Update GitHub Release automation to use SemVer
- Update release documentation
- Monitor for issues

**Phase 4: Full Adoption**
- Document dual versioning strategy
- Update all documentation
- Make SemVer primary for releases (internal for development)

---

## 13. Documentation References

### 13.1 User-Facing Documentation

**Files to Update:**
- Installation guides
- Getting started guides
- Versioning cookbooks
- Framework documentation

**Changes:**
- Explain dual versioning concept
- Show both versions where relevant
- Clarify which version to use when

### 13.2 Developer Documentation

**Files to Update:**
- Versioning policy documents
- RW execution guides
- Versioning examples
- Framework templates

**Changes:**
- Document SemVer generation process
- Explain registry management
- Provide conversion examples

---

## 14. Edge Cases and Special Scenarios

### 14.1 RC Transitions

**Impact:**
- When RC=0 → RC=1, registry resets
- SemVer transitions: `0.*.*.*` → `1.1.1+*`
- Need to handle registry reset in code

**Files to Update:**
- SemVer converter function
- Registry management utilities

### 14.2 Epic Switching

**Impact:**
- Switching between epics uses existing registry
- Returning to previous epic reuses MINOR/PATCH
- SemVer still increases (due to BUILD or new combinations)

**Files to Review:**
- SemVer converter logic
- Registry lookup/assignment

### 14.3 Out-of-Order Releases

**Impact:**
- Internal versions can be out of order
- SemVer must remain monotonic
- Registry assigns based on first appearance, not internal order

**Files to Review:**
- SemVer converter logic
- Validation scripts

---

## 15. Priority Classification

### 🔴 CRITICAL (Must Update for Basic Functionality)

1. **RW Step 11: Create Git Tag** - Generate SemVer tag
2. **SemVer Converter Function** - Core conversion logic
3. **Registry File Creation** - `semver-registry.yaml`
4. **Registry Management Utilities** - Load/update/save registry
5. **`.cursorrules` RW Step 11** - Instructions for SemVer generation
6. **Versioning Framework Package** - `packages/frameworks/numbering & versioning/`
   - `versioning-policy.md` - Add SemVer mapping section
   - `versioning-strategy.md` - Add dual versioning strategy
   - `IMPLEMENTATION_GUIDE.md` - Add SemVer mapping implementation steps
   - **Critical because:** Framework is portable package used by other projects

### 🟡 HIGH (Important for Complete Implementation)

7. **Versioning Policy Documents** - Document dual versioning
8. **RW Step 12: Push to Remote** - Push both tags
9. **GitHub Release Automation** - Use SemVer tags
10. **README.md** - Show both versions
11. **Migration Script** - Build registry from historical tags
12. **Configuration Files** - `rw-config.yaml` schema (add registry path)

### 🟢 MEDIUM (Documentation and Polish)

11. **Supporting Documentation** - Versioning guides, cookbooks
12. **Validation Scripts** - SemVer monotonic validation
13. **Test Coverage** - SemVer converter tests
14. **Configuration Files** - `rw-config.yaml` schema

### 🔵 LOW (Nice to Have)

15. **Version Display Helpers** - Formatting utilities
16. **Integration Tests** - End-to-end testing
17. **Reverse Lookup** - SemVer → Internal (if needed)
18. **Analytics/Monitoring** - Version tracking (if any)

---

## 16. Implementation Checklist

### Phase 1: Core Implementation ✅
- [ ] Create `semver-registry.yaml` structure
- [ ] Implement `convert_internal_to_semver()` function
- [ ] Implement registry load/update/save utilities
- [ ] Update RW Step 11 to generate SemVer tag
- [ ] Update `.cursorrules` RW Step 11 instructions

### Phase 2: Registry Migration ✅
- [ ] Build migration script for historical releases
- [ ] Generate initial `semver-registry.yaml` from git tags
- [ ] Validate SemVer increases across all historical releases
- [ ] Create backup/restore utilities for registry

### Phase 3: Documentation ✅
- [ ] Update versioning policy documents
- [ ] Document dual versioning strategy
- [ ] Update RW execution guides
- [ ] Update README and user documentation

### Phase 4: Testing and Validation ✅
- [ ] Create test coverage for SemVer converter
- [ ] Create validation script for monotonic increases
- [ ] Integration tests for dual tagging
- [ ] Test RC transitions

### Phase 5: Rollout ✅
- [ ] Test dual tagging in development
- [ ] Update GitHub Release automation
- [ ] Monitor first few releases with SemVer
- [ ] Document lessons learned

---

## 17. Risk Assessment

### High Risk Areas

1. **Registry Corruption** - Registry file could get out of sync
   - **Mitigation:** Version controlled, can rebuild from git tags
   - **Mitigation:** Validation scripts catch inconsistencies

2. **Tag Conflicts** - SemVer tag might conflict with existing tag
   - **Mitigation:** Check existing tags before creating SemVer tag
   - **Mitigation:** Use different tag format/prefix if needed

3. **Version Regression** - SemVer might not increase if logic flawed
   - **Mitigation:** Validation script verifies monotonic increases
   - **Mitigation:** Test thoroughly with historical releases

### Medium Risk Areas

4. **Documentation Inconsistency** - Docs might reference wrong version
   - **Mitigation:** Clear documentation about which version to use
   - **Mitigation:** Update all version references systematically

5. **Backward Compatibility** - Breaking changes for existing tooling
   - **Mitigation:** Keep internal tags (dual tagging)
   - **Mitigation:** Gradual rollout with monitoring

---

## 18. Dependencies and Prerequisites

### Required Dependencies

- **Python YAML library** - For registry file parsing
- **Git tag parsing** - For migration script
- **Version parsing utilities** - For internal version parsing

### Prerequisites

- **Existing git tags** - For registry initialization
- **Version file** - Current `src/fynd_deals/version.py`
- **RW workflow** - Currently working Release Workflow

---

## 19. Next Steps

1. **Review this impact analysis** - Confirm completeness
2. **Prioritize components** - Focus on CRITICAL items first
3. **Create implementation plan** - Detailed task breakdown
4. **Start with core implementation** - SemVer converter + RW Step 11
5. **Test with sample data** - Validate before full rollout

---

## References

- **SemVer Mapping Proposal:** `docs/architecture/standards-and-adrs/semver-mapping-proposal.md`
- **Versioning Policy:** `docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md`
- **Release Workflow:** `.cursorrules` (RW trigger section)

---

_This impact analysis is part of the SemVer mapping implementation. See proposal document for context._

