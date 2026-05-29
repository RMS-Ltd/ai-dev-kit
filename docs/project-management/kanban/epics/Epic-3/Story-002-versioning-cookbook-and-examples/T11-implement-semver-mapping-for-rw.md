---
lifecycle: evergreen
ttl_days: null
created_at: 2026-01-19T15:15:00Z
expires_at: null
housekeeping_policy: keep
---

# T11 – Implement SemVer Mapping for Release Workflow

**Task ID:** E3:S02:T11  
**Status:** COMPLETE  
**Priority:** HIGH  
**Estimated Effort:** Medium  
**Created:** 2026-01-19  
**Last updated:** 2026-01-19 (v0.3.2.11+4 – GitHub release creation with SemVer)  
**Version:** v0.3.2.11+4

---

## Scope

Implement the SemVer mapping system (proposed in `semver-mapping-proposal.md`) to generate external-facing SemVer tags (`MAJOR.MINOR.PATCH+BUILD`) alongside internal Kanban-based version tags (`RC.EPIC.STORY.TASK+BUILD`) in Release Workflow Step 11.

**Problem:** Internal versioning (`RC.EPIC.STORY.TASK+BUILD`) can appear to regress when switching between epics/stories (e.g., `0.6.7.12+3` → `0.4.6.9+1`), which is problematic for GitHub releases and user perception. External SemVer must only increase monotonically.

**Solution:** Implement registry-based SemVer mapping that converts internal versions to monotonic SemVer using the Hybrid Approach (first-seen Epic/Story → sequential MINOR/PATCH assignment).

---

## Inputs

- **Proposal:** `docs/architecture/standards-and-adrs/semver-mapping-proposal.md` (Hybrid Approach recommended)
- **Implementation Impact:** `docs/architecture/standards-and-adrs/semver-mapping-implementation-impact.md`
- **Current RW Step 11:** `.cursorrules` (RW trigger section, Step 11)
- **Version File:** `src/fynd_deals/version.py`
- **Historical Git Tags:** All existing `v0.*.*.*+*` tags for registry initialization

---

## Deliverable

**Core Implementation:**
1. **SemVer Registry File:** `semver-registry.yaml` (project root)
   - Tracks Epic→MINOR and (Epic,Story)→PATCH mappings per RC
   - YAML structure: `rc_0: { epic_to_minor: {...}, story_to_patch: {...} }`

2. **SemVer Converter Script:** `packages/frameworks/workflow mgt/scripts/version/semver_converter.py`
   - Function: `convert_internal_to_semver(rc, epic, story, task, build) -> (major, minor, patch, build)`
   - Function: `load_semver_registry() -> dict`
   - Function: `update_semver_registry(rc, epic, story, minor, patch) -> dict`
   - Function: `save_semver_registry(registry) -> None`
   - Implements Hybrid Approach algorithm

3. **Registry Migration Script:** `packages/frameworks/workflow mgt/scripts/version/build_semver_registry.py`
   - One-time script to build initial registry from existing git tags
   - Parses all `v0.*.*.*+*` tags
   - Generates `semver-registry.yaml` with first-seen mappings

4. **RW Step 11 Enhancement:**
   - Calculate SemVer from internal version using registry
   - Create dual tags:
     - Internal: `v0.6.7.101+24` (backward compatibility)
     - SemVer: `v0.X.X+X` (for GitHub releases)
   - Update registry with new mappings
   - Save registry to version control

5. **Documentation Updates:**
   - Update `.cursorrules` RW Step 11 with SemVer generation instructions
   - Update `packages/frameworks/workflow mgt/cursorrules-rw-trigger-section.md` template
   - Update RW execution guide (if exists)
   - Update `rw-config.yaml` schema to include `semver_registry_file` path

6. **Validation Script:** `packages/frameworks/workflow mgt/scripts/validation/validate_semver_monotonic.py`
   - Verifies SemVer increases across all releases
   - Validates registry consistency
   - Can be run periodically or in CI/CD

---

## Approach

### Phase 1: Core Implementation
1. **Create Registry Structure:**
   - Design `semver-registry.yaml` format (per RC scope)
   - Create empty registry file template

2. **Implement Converter:**
   - Implement Hybrid Approach algorithm:
     - MAJOR = RC (direct mapping)
     - MINOR = First-seen Epic number (sequential, per RC)
     - PATCH = First-seen Story number (sequential, per RC)
     - BUILD = Preserved from internal version
   - Registry lookup/assignment logic
   - Registry update/save functions

3. **Build Migration Script:**
   - Parse all existing git tags
   - Track first appearance of each (RC, Epic) and (RC, Epic, Story)
   - Generate initial registry
   - Validate monotonic increases

### Phase 2: RW Integration
1. **Update RW Step 11:**
   - Load registry before tag creation
   - Convert internal version to SemVer
   - Create dual tags (internal + SemVer)
   - Update registry with new mappings
   - Save registry
   - Update `.cursorrules` instructions

2. **Update RW Step 12:**
   - Push both tags to remote
   - Verify both tags pushed successfully

### Phase 3: Testing & Validation
1. **Test Converter:**
   - Test with sample internal versions
   - Verify registry assignment logic
   - Test RC transitions (registry reset)

2. **Validate Historical Releases:**
   - Run migration script on existing tags
   - Verify SemVer increases monotonically
   - Check for edge cases (Epic switching, out-of-order)

3. **Integration Testing:**
   - Test RW Step 11 with SemVer generation
   - Verify dual tagging works
   - Verify registry persistence

### Phase 4: Documentation
1. **Update Policy Documents:**
   - Update `dev-kit-versioning-policy.md` with SemVer mapping section
   - Update framework `versioning-policy.md` (CRITICAL - framework package)
   - Update framework `versioning-strategy.md` (CRITICAL - framework package)
   - Update framework `IMPLEMENTATION_GUIDE.md` (CRITICAL - framework package)

2. **Update RW Documentation:**
   - Document dual tagging in RW execution guide
   - Update examples to show both tags
   - Document registry management

---

## Acceptance Criteria

- [ ] `semver-registry.yaml` structure created and documented
- [ ] `semver_converter.py` implemented with Hybrid Approach algorithm
- [ ] `build_semver_registry.py` migration script created and tested
- [ ] Initial registry built from historical git tags
- [ ] SemVer increases monotonically across all historical releases (validated)
- [ ] RW Step 11 enhanced to generate SemVer tag alongside internal tag
- [ ] Dual tagging tested and working (internal + SemVer tags created)
- [ ] Registry updates correctly during RW execution
- [ ] Registry persists across releases (version controlled)
- [ ] `.cursorrules` RW Step 11 updated with SemVer generation instructions
- [ ] `rw-config.yaml` schema updated with `semver_registry_file` path
- [ ] Validation script created (`validate_semver_monotonic.py`)
- [ ] Versioning policy documents updated (dev-kit + framework package)
- [ ] Framework package documentation updated (CRITICAL - portable package)
- [ ] RW documentation updated with dual tagging
- [ ] All tests passing
- [ ] Edge cases handled (RC transitions, Epic switching, out-of-order)

---

## Technical Details

### Hybrid Approach Algorithm

**Mapping Formula:**
```
MAJOR = RC                          (direct mapping: 0 → 0, 1 → 1, etc.)
MINOR = First-seen Epic number      (Epic 6 first → MINOR=1, Epic 9 next → MINOR=2)
PATCH = First-seen Story number     (Story 7 in Epic 6 → PATCH=1, Story 8 next → PATCH=2)
BUILD = Internal BUILD number        (preserved from internal version)
```

**Registry Structure:**
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

**Example Conversion:**
- Internal: `0.6.7.101+24`
- Registry lookup: `(0,6)` → MINOR=1, `(0,6,7)` → PATCH=1
- SemVer: `0.1.1+24`

### Edge Cases

1. **RC Transitions:** Registry resets when RC increments (RC=0 → RC=1)
2. **Epic Switching:** Returning to previous Epic reuses MINOR (maintains semantic continuity)
3. **Out-of-Order Releases:** Registry assigns based on first appearance, not internal order
4. **Tag Conflicts:** Check existing tags before creating SemVer tag

---

## Dependencies

- **Proposal Document:** `semver-mapping-proposal.md` (approved)
- **Implementation Impact:** `semver-mapping-implementation-impact.md` (analysis complete)
- **RW Step 11:** Currently working (needs enhancement)
- **Git Tags:** Historical tags needed for registry initialization

---

## Related Work

- **Proposal:** `docs/architecture/standards-and-adrs/semver-mapping-proposal.md`
- **Impact Analysis:** `docs/architecture/standards-and-adrs/semver-mapping-implementation-impact.md`
- **Dual Versioning Guide:** `docs/architecture/standards-and-adrs/dual-versioning-package-managers.md`
- **RW Step 11:** `.cursorrules` (RW trigger section)
- **Versioning Policy:** `docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md`

---

## Notes

**Critical Framework Package Updates:**
The `packages/frameworks/numbering & versioning/` package is a **portable framework** used by other projects. It **must** include SemVer mapping documentation:
- `versioning-policy.md` - Add SemVer mapping section
- `versioning-strategy.md` - Add dual versioning strategy
- `IMPLEMENTATION_GUIDE.md` - Add SemVer mapping implementation steps

**Why Critical:** Framework consumers need this to implement SemVer mapping in their projects.

**Backward Compatibility:**
- Internal tags remain (backward compatible)
- SemVer tags are additive (new functionality)
- No breaking changes to existing workflow

---

**Version Anchor:** v0.3.2.11+0 (Task creation)
