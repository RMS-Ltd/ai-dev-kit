---
lifecycle: evergreen
ttl_days: null
created_at: 2026-01-17T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# SemVer Mapping Proposal: RC.E.S.T+B → MAJOR.MINOR.PATCH+BUILD

**Status:** Proposal  
**Priority:** HIGH  
**Last Updated:** 2026-01-17  
**Related Work:** Release Strategy, Versioning Policy  
**Version:** v1.0.0

---

## Problem Statement

**Internal Versioning:** `RC.EPIC.STORY.TASK+BUILD` (e.g., `0.6.7.12+3`)

This Kanban-based versioning is semantically meaningful internally but has a critical flaw for external releases:
- When switching between epics/stories/tasks, the version can **appear to regress**
- Example: `0.6.7.12+3` → `0.4.6.9+1` looks like a regression (0.6.7 → 0.4.6)
- This is problematic for GitHub releases, package managers, and user perception

**Requirement:**
- Keep internal `RC.E.S.T+B` versioning unchanged
- Generate SemVer `MAJOR.MINOR.PATCH+BUILD` for releases that **only increases**
- Maintain semantic meaning where possible
- Ensure tier resets (PATCH resets on MINOR increment, BUILD resets on PATCH increment)

---

## Proposed Solution: Hierarchical Cumulative Mapping

### Core Algorithm

Use **cumulative counters** that track first appearance of each tier combination, ensuring monotonic increases while preserving tier reset semantics.

### Mapping Formula

```
MAJOR = RC

MINOR = Cumulative count of unique (RC, Epic) combinations seen across all releases
        (resets when RC increments, but cumulative within RC)

PATCH = Cumulative count of unique (RC, Epic, Story) combinations seen across all releases
        (resets when (RC, Epic) changes, but cumulative within same RC+Epic)

BUILD = Original BUILD from internal version
        (preserved for semantic meaning)
```

### Implementation Details

**Step 1: Track First Appearance**

Maintain a registry of first-seen combinations:
- `(RC, Epic)` → assigned sequential MINOR number
- `(RC, Epic, Story)` → assigned sequential PATCH number within MINOR

**Step 2: Calculate SemVer**

For internal version `RC.E.S.T+B`:
1. **MAJOR = RC** (direct mapping)
2. **MINOR = Lookup or assign** `(RC, E)` combination in MINOR registry
3. **PATCH = Lookup or assign** `(RC, E, S)` combination in PATCH registry (within MINOR scope)
4. **BUILD = B** (preserved from internal version)

**Step 3: Registry Management**

The registry persists across releases:
- New `(RC, Epic)` combination → Increment MINOR counter
- New `(RC, Epic, Story)` combination → Increment PATCH counter (within that MINOR)
- Same combinations → Reuse assigned numbers

### Example Progression

**Scenario:** Starting fresh, working through multiple epics/stories

| Internal Version | (RC,Epic) | (RC,Epic,Story) | SemVer | Notes |
|-----------------|-----------|-----------------|--------|-------|
| `0.6.7.12+1` | `(0,6)` → MINOR=1 | `(0,6,7)` → PATCH=1 | `0.1.1+1` | First epic/story |
| `0.6.7.12+2` | `(0,6)` → MINOR=1 | `(0,6,7)` → PATCH=1 | `0.1.1+2` | Same story |
| `0.6.8.5+1` | `(0,6)` → MINOR=1 | `(0,6,8)` → PATCH=2 | `0.1.2+1` | New story |
| `0.4.6.9+1` | `(0,4)` → MINOR=2 | `(0,4,6)` → PATCH=3 | `0.2.3+1` | New epic, appears higher |
| `0.9.1.8+1` | `(0,9)` → MINOR=3 | `(0,9,1)` → PATCH=4 | `0.3.4+1` | New epic |
| `0.6.7.12+3` | `(0,6)` → MINOR=1 | `(0,6,7)` → PATCH=1 | `0.1.1+3` | Back to original, BUILD=3 |

**Key Properties:**
- ✅ SemVer always increases: `0.1.1+1` < `0.1.1+2` < `0.1.2+1` < `0.2.3+1` < `0.3.4+1`
- ✅ Returning to same epic/story uses same MINOR/PATCH (maintains semantic continuity)
- ✅ New epics/stories get new sequential numbers (monotonic)
- ✅ BUILD number preserved for task-level granularity

---

## Alternative Approach: Global Sequence Number

If registry management is too complex, use a simpler **global sequence number**:

```
MAJOR = RC

MINOR = Floor(global_release_sequence / 1000)
        (increments every 1000 releases)

PATCH = (global_release_sequence % 1000) / 10
        (resets every 100 releases within MINOR)

BUILD = global_release_sequence % 10
        (resets every 10 releases within PATCH)
```

**Pros:**
- Simple (no registry needed)
- Guaranteed monotonic

**Cons:**
- Loses all semantic meaning from Epic/Story/Task
- Version numbers grow large quickly
- Less meaningful for developers

---

## ✅ RECOMMENDED: Hybrid Approach (Option 3)

**Simple, intuitive mapping that preserves semantic meaning:**

```
MAJOR = RC                          (direct mapping: 0 → 0, 1 → 1, etc.)

MINOR = First-seen Epic number      (Epic 6 first → MINOR=1, Epic 9 next → MINOR=2)
        (sequential based on first appearance, resets when RC increments)

PATCH = First-seen Story number     (Story 7 in Epic 6 → PATCH=1, Story 8 next → PATCH=2)
        (sequential based on first appearance, resets when RC increments)

BUILD = Internal BUILD number       (preserved from internal version)
```

### How It Works (Simple Version)

Think of it like **first-come, first-served numbering**:

1. **Each RC has its own counter** starting at 1
2. **First Epic you see** in RC=0 → MINOR=1
3. **Next new Epic** → MINOR=2
4. **Return to previous Epic** → Use its original MINOR (reuse, don't reassign)
5. **Same for Stories** → First seen gets next PATCH number
6. **BUILD stays the same** → Just copy it over

**Example (Simple):**
- See Epic 6 first → MINOR=1
- See Epic 9 next → MINOR=2
- Back to Epic 6 → MINOR=1 (reuse original)
- Result: `0.1.*+*` < `0.2.*+*` < `0.1.*+*` BUT SemVer keeps increasing because you've moved to new work

**Registry:**
- Simple lookup: "Have I seen Epic 6 in RC=0 before?" → Yes → MINOR=1
- Simple lookup: "Have I seen Story 7 in Epic 6?" → Yes → PATCH=1

**Benefits:**
- ✅ **Easy to understand** - First appearance = sequential number
- ✅ **SemVer only increases** - New combinations always get higher numbers
- ✅ **Maintains semantic meaning** - Same epic → same MINOR
- ✅ **BUILD preserved** - Task-level granularity maintained
- ✅ **Simple registry** - Only track within RC scope

---

## Implementation (Hybrid Approach)

### Simple Algorithm

```python
# Registry structure (simple dictionaries)
rc_minor_registry = {}  # Maps (RC, Epic) → MINOR number
rc_patch_registry = {}  # Maps (RC, Epic, Story) → PATCH number

def convert_to_semver(rc, epic, story, task, build):
    """Convert internal RC.E.S.T+B to SemVer MAJOR.MINOR.PATCH+BUILD"""
    
    # MAJOR = RC (direct mapping)
    major = rc
    
    # MINOR = First-seen Epic number (sequential)
    key_minor = (rc, epic)
    if key_minor not in rc_minor_registry:
        # New epic - assign next MINOR number
        rc_minor_registry[key_minor] = max(rc_minor_registry.values()) + 1 if rc_minor_registry else 1
    minor = rc_minor_registry[key_minor]
    
    # PATCH = First-seen Story number (sequential within RC)
    key_patch = (rc, epic, story)
    if key_patch not in rc_patch_registry:
        # New story - assign next PATCH number within this RC
        existing_patches = [v for k, v in rc_patch_registry.items() if k[0] == rc]
        rc_patch_registry[key_patch] = max(existing_patches) + 1 if existing_patches else 1
    patch = rc_patch_registry[key_patch]
    
    # BUILD = Preserved from internal version
    build_semver = build
    
    return f"{major}.{minor}.{patch}+{build_semver}"
```

### Visual Example (Step by Step)

**Starting from scratch (RC=0):**

| Internal Version | (RC,Epic) | MINOR | (RC,Epic,Story) | PATCH | SemVer | What Happened |
|-----------------|-----------|-------|-----------------|-------|--------|---------------|
| `0.6.7.12+1` | `(0,6)` | 1 | `(0,6,7)` | 1 | `0.1.1+1` | Epic 6 first → MINOR=1, Story 7 first → PATCH=1 |
| `0.6.7.12+2` | `(0,6)` | 1 | `(0,6,7)` | 1 | `0.1.1+2` | Same epic/story → reuse MINOR=1, PATCH=1 |
| `0.9.1.8+1` | `(0,9)` | 2 | `(0,9,1)` | 2 | `0.2.2+1` | Epic 9 new → MINOR=2, Story 1 new → PATCH=2 |
| `0.4.6.9+1` | `(0,4)` | 3 | `(0,4,6)` | 3 | `0.3.3+1` | Epic 4 new → MINOR=3, Story 6 new → PATCH=3 |
| `0.6.7.12+3` | `(0,6)` | 1 | `(0,6,7)` | 1 | `0.1.1+3` | Back to Epic 6 → reuse MINOR=1, PATCH=1 |

**Key Point:** Even though we return to `0.1.1+*`, the SemVer **increased** because we went through `0.2.2+1` and `0.3.3+1` first. The BUILD number ensures uniqueness: `0.1.1+1` < `0.1.1+2` < `0.2.2+1` < `0.1.1+3`.

## Implementation Considerations

### Registry Storage

**✅ RECOMMENDED: Registry File (`semver-registry.yaml`)**

Simple YAML structure:
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

**Alternative Options:**
- **Git Tags:** Extract from existing tags (rebuild on demand)
- **Changelog:** Parse `CHANGELOG.md` to extract first appearances

### Version Conversion Script

**Function:** `convert_internal_to_semver(internal_version: str) -> str`

**Input:** `"0.6.7.12+3"` (internal RC.E.S.T+B)  
**Output:** `"0.1.1+3"` (SemVer MAJOR.MINOR.PATCH+BUILD)

**Simple Algorithm:**
1. Parse internal version: `(RC=0, E=6, S=7, T=12, B=3)`
2. Load registry for RC=0
3. **MINOR:** Lookup `(0, 6)` in registry → Not found? Assign 1, store it → MINOR=1
4. **PATCH:** Lookup `(0, 6, 7)` in registry → Not found? Assign 1, store it → PATCH=1
5. **BUILD:** Use B=3 directly
6. Return `f"{RC}.{MINOR}.{PATCH}+\{B\}"` = `"0.1.1+3"`
7. Save updated registry to `semver-registry.yaml`

### Integration with Release Workflow

**RW Step 11: Create Git Tag** (enhanced)
- Calculate SemVer from internal version
- Create two tags:
  - Internal: `v0.6.7.12+3` (for internal tracking)
  - SemVer: `v0.1.1+3` (for GitHub releases)
- GitHub Release uses SemVer tag

**GitHub Releases:**
- Primary tag: SemVer (e.g., `v0.1.1+3`)
- Reference internal version in release notes
- Maintain backward compatibility

---

## Comparison of Approaches

| Approach | Complexity | Semantic Meaning | Monotonic | Registry Needed | Ease of Understanding |
|----------|-----------|------------------|-----------|-----------------|----------------------|
| **Hierarchical Cumulative** | High | High (preserves Epic/Story) | ✅ Yes | ✅ Yes | ❌ Complex |
| **Global Sequence** | Low | None | ✅ Yes | ❌ No | ✅ Simple |
| **✅ Hybrid (Recommended)** | Medium-Low | Medium (preserves Epic) | ✅ Yes | ✅ Yes (simplified) | ✅ **Intuitive** |

**✅ RECOMMENDED: Hybrid Approach**

- **Best balance** of simplicity and semantic meaning
- **Intuitive** - First appearance = sequential number (easy to grasp)
- **Maintains Epic-level** semantic continuity
- **Registry scoped** to RC (simpler than full registry)
- **BUILD preserved** for task granularity

---

## Migration Path

### Phase 1: Analysis
1. Parse all existing git tags
2. Build initial registry from historical releases
3. Validate SemVer mapping produces monotonic sequence

### Phase 2: Implementation
1. Create `semver-registry.yaml` structure
2. Implement `convert_internal_to_semver()` function
3. Add registry update logic to RW Step 11
4. Create validation script to verify monotonicity

### Phase 3: Rollout
1. Generate SemVer for all historical releases (for reference)
2. Start dual-tagging: internal + SemVer
3. Update GitHub Release automation to use SemVer
4. Document SemVer in README (keep internal version as primary)

### Phase 4: Verification
1. Verify SemVer increases across all future releases
2. Monitor for edge cases (Epic switching, RC transitions)
3. Update documentation and tooling

---

## Edge Cases

### Epic Ordering
**Issue:** Epics can be worked on out of order (e.g., Epic 9 before Epic 7)  
**Solution:** Registry assigns MINOR based on **first appearance**, not Epic number
- Epic 9 seen first → MINOR=1
- Epic 7 seen later → MINOR=2
- SemVer increases: `0.1.*.*` < `0.2.*.*`

### RC Transitions
**Issue:** When RC=0 → RC=1, registry should reset  
**Solution:** Registry scoped per RC
- RC=0 registry: `{Epic: MINOR}`, `{(Epic,Story): PATCH}`
- RC=1 registry: New registry, starts from MINOR=1, PATCH=1
- SemVer transitions: `0.*.*.*` → `1.1.1+*`

### Returning to Previous Epic/Story
**Issue:** Revisit Epic 6 Story 7 after working on Epic 9  
**Solution:** Reuse registry assignments
- First appearance: `(0,6,7)` → PATCH=1
- Return later: `(0,6,7)` → still PATCH=1
- SemVer: `0.1.1+*` (maintains continuity)

---

## Decisions Made (Hybrid Approach)

1. **✅ Registry Persistence:** File-based (`semver-registry.yaml`)
   - Simple YAML file, easy to read/update
   - Persists across releases
   - Version controlled with codebase

2. **✅ BUILD Number:** Preserve internal BUILD
   - Maintains task-level semantic meaning
   - No need to track separate BUILD sequence

3. **✅ RC Transitions:** MINOR/PATCH reset when RC increments
   - Fresh start for RC=1+ makes sense
   - Each RC has its own registry scope

4. **✅ Git Tags:** Dual tags (internal + SemVer)
   - Internal tag: `v0.6.7.12+3` (for tracking)
   - SemVer tag: `v0.1.1+3` (for GitHub releases)
   - Both tags reference same commit

5. **✅ Documentation:** Internal version primary, SemVer for releases
   - Developers use internal version (semantic meaning)
   - GitHub releases use SemVer (monotonic)
   - Release notes reference both versions

---

## Next Steps

1. **Review this proposal** - Confirm approach and address concerns
2. **Implement proof of concept** - Build `convert_internal_to_semver()` with sample data
3. **Validate against historical releases** - Generate SemVer for all existing tags
4. **Implement registry management** - Add to RW Step 11
5. **Update documentation** - Document dual versioning strategy

---

## References

- **Internal Versioning Policy:** `docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md`
- **SemVer Specification:** https://semver.org/
- **GitHub Releases:** https://docs.github.com/en/repositories/releasing-projects-on-github

---

_This proposal is part of the versioning policy evolution. See related documents for context._

