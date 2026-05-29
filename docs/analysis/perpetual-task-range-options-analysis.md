---
lifecycle: evergreen
ttl_days: null
created_at: 2026-01-16T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Analysis: Perpetual Task Range Options

**Date:** 2026-01-16  
**Status:** Analysis  
**Related:** E9:S01:T08 (Repository Story Abstract Space Contradiction)

---

## Overview

This document analyzes different approaches for reserving task number ranges for perpetual tasks (e.g., UKW, CMW) within stories. Each approach has trade-offs in terms of scalability, clarity, migration complexity, and alignment with design principles.

**Design Principle:** Stories with 100+ tasks should be split into epics. This provides a natural upper bound for task numbering.

**Task Number Format:** 2-digit (01-99), providing 99 possible task numbers per story.

---

## Option 1: Low Range (T01-T09)

**Reserved Range:** Tasks 01-09 (9 tasks reserved)

**Allocation:**
- **T01-T09:** Perpetual tasks (reserved)
- **T10-T99:** Regular tasks (90 tasks available)

**Examples:**
- UKW: E6:S06:T08 (perpetual)
- CMW: E6:S06:T12 (regular, but should be T09 or lower)
- FR-001: E5:S01:T10 (first repository task)

**Pros:**
- ✅ **Clear separation:** Low numbers clearly indicate special/perpetual tasks
- ✅ **Easy to remember:** T01-T09 is intuitive
- ✅ **Early allocation:** Perpetual tasks get "first" numbers, emphasizing importance
- ✅ **Migration friendly:** Existing perpetual tasks (T08, T12) can be moved to T01-T09 range
- ✅ **Visual clarity:** Low numbers stand out in task lists
- ✅ **Conventional:** Matches common practice of reserving low numbers for special items

**Cons:**
- ❌ **Limited capacity:** Only 9 perpetual tasks per story (may be insufficient)
- ❌ **Migration complexity:** Existing perpetual tasks need renumbering (T08 → T01-T09)
- ❌ **Potential conflicts:** If story already has T01-T09 used for regular tasks, conflicts arise
- ❌ **Renumbering cascade:** Moving tasks may require updating all references

**Scalability:**
- **Per Story:** 9 perpetual tasks max
- **If Exhausted:** Create new story for additional perpetual tasks, or expand range

**Migration Impact:**
- **Medium:** Existing perpetual tasks (T08, T12) need renumbering
- **Example:** E6:S06:T08 (UKW) → E6:S06:T01 (UKW)
- **Example:** E6:S06:T12 (CMW) → E6:S06:T02 (CMW)

---

## Option 2: High Range (T91-T99)

**Reserved Range:** Tasks 91-99 (9 tasks reserved)

**Allocation:**
- **T01-T90:** Regular tasks (90 tasks available)
- **T91-T99:** Perpetual tasks (reserved)

**Examples:**
- UKW: E6:S06:T91 (perpetual)
- CMW: E6:S06:T92 (perpetual)
- FR-001: E5:S01:T01 (first repository task)

**Pros:**
- ✅ **No early conflicts:** Regular tasks can use T01-T90 without conflicts
- ✅ **Clear separation:** High numbers clearly indicate special/perpetual tasks
- ✅ **Easy to remember:** T91-T99 is intuitive
- ✅ **Migration friendly:** Existing perpetual tasks can be moved to T91-T99
- ✅ **Visual clarity:** High numbers stand out in task lists
- ✅ **Natural boundary:** T99 is the upper limit, making it a natural "special" range

**Cons:**
- ❌ **Limited capacity:** Only 9 perpetual tasks per story (may be insufficient)
- ❌ **Migration complexity:** Existing perpetual tasks need renumbering (T08 → T91-T99)
- ❌ **Potential conflicts:** If story already has T91-T99 used for regular tasks, conflicts arise
- ❌ **Renumbering cascade:** Moving tasks may require updating all references
- ❌ **Less intuitive:** High numbers may be less obvious as "special" than low numbers

**Scalability:**
- **Per Story:** 9 perpetual tasks max
- **If Exhausted:** Create new story for additional perpetual tasks, or expand range

**Migration Impact:**
- **Medium:** Existing perpetual tasks (T08, T12) need renumbering
- **Example:** E6:S06:T08 (UKW) → E6:S06:T91 (UKW)
- **Example:** E6:S06:T12 (CMW) → E6:S06:T92 (CMW)

---

## Option 3: Extended Low Range (T01-T19)

**Reserved Range:** Tasks 01-19 (19 tasks reserved)

**Allocation:**
- **T01-T19:** Perpetual tasks (reserved)
- **T20-T99:** Regular tasks (80 tasks available)

**Examples:**
- UKW: E6:S06:T08 (perpetual, already in range)
- CMW: E6:S06:T12 (perpetual, already in range)
- FR-001: E5:S01:T20 (first repository task)

**Pros:**
- ✅ **Higher capacity:** 19 perpetual tasks per story (more than T01-T09)
- ✅ **Migration friendly:** Existing perpetual tasks (T08, T12) already in range
- ✅ **Clear separation:** Low numbers clearly indicate special/perpetual tasks
- ✅ **Minimal migration:** Existing perpetual tasks may not need renumbering
- ✅ **Visual clarity:** Low numbers stand out in task lists
- ✅ **Room for growth:** 19 tasks provides buffer for future perpetual tasks

**Cons:**
- ❌ **Reduced regular capacity:** Only 80 regular tasks per story (vs. 90)
- ❌ **Potential conflicts:** If story already has T01-T19 used for regular tasks, conflicts arise
- ❌ **Less conventional:** T01-T19 is less standard than T01-T09 or T91-T99
- ❌ **May be excessive:** 19 perpetual tasks per story may be more than needed

**Scalability:**
- **Per Story:** 19 perpetual tasks max
- **If Exhausted:** Create new story for additional perpetual tasks, or expand range

**Migration Impact:**
- **Low:** Existing perpetual tasks (T08, T12) already in range
- **Example:** E6:S06:T08 (UKW) → No change needed
- **Example:** E6:S06:T12 (CMW) → No change needed

---

## Option 4: Extended High Range (T81-T99)

**Reserved Range:** Tasks 81-99 (19 tasks reserved)

**Allocation:**
- **T01-T80:** Regular tasks (80 tasks available)
- **T81-T99:** Perpetual tasks (reserved)

**Examples:**
- UKW: E6:S06:T81 (perpetual)
- CMW: E6:S06:T82 (perpetual)
- FR-001: E5:S01:T01 (first repository task)

**Pros:**
- ✅ **Higher capacity:** 19 perpetual tasks per story (more than T91-T99)
- ✅ **No early conflicts:** Regular tasks can use T01-T80 without conflicts
- ✅ **Clear separation:** High numbers clearly indicate special/perpetual tasks
- ✅ **Natural boundary:** T81-T99 is near upper limit, making it a natural "special" range
- ✅ **Room for growth:** 19 tasks provides buffer for future perpetual tasks

**Cons:**
- ❌ **Reduced regular capacity:** Only 80 regular tasks per story (vs. 90)
- ❌ **Migration complexity:** Existing perpetual tasks need renumbering (T08 → T81-T99)
- ❌ **Potential conflicts:** If story already has T81-T99 used for regular tasks, conflicts arise
- ❌ **Renumbering cascade:** Moving tasks may require updating all references
- ❌ **Less intuitive:** High numbers may be less obvious as "special" than low numbers

**Scalability:**
- **Per Story:** 19 perpetual tasks max
- **If Exhausted:** Create new story for additional perpetual tasks, or expand range

**Migration Impact:**
- **High:** Existing perpetual tasks (T08, T12) need renumbering
- **Example:** E6:S06:T08 (UKW) → E6:S06:T81 (UKW)
- **Example:** E6:S06:T12 (CMW) → E6:S06:T82 (CMW)

---

## Option 5: Three-Digit Range (T101+)

**Reserved Range:** Tasks 101+ (unlimited, but violates 2-digit format)

**Allocation:**
- **T01-T99:** Regular tasks (99 tasks available)
- **T101+:** Perpetual tasks (unlimited, but requires 3-digit format)

**Examples:**
- UKW: E6:S06:T101 (perpetual, 3-digit)
- CMW: E6:S06:T102 (perpetual, 3-digit)
- FR-001: E5:S01:T01 (first repository task)

**Pros:**
- ✅ **Unlimited capacity:** No upper bound for perpetual tasks
- ✅ **No conflicts:** Regular tasks use T01-T99, perpetual tasks use T101+
- ✅ **Clear separation:** 3-digit numbers clearly indicate special/perpetual tasks
- ✅ **No migration needed:** Existing regular tasks unaffected
- ✅ **Future-proof:** Can accommodate unlimited perpetual tasks

**Cons:**
- ❌ **Format violation:** Requires 3-digit task numbers (T101+), breaking 2-digit format
- ❌ **Versioning complexity:** Version format `RC.EPIC.STORY.TASK+BUILD` assumes 2-digit TASK
- ❌ **Policy inconsistency:** Breaks versioning policy (TASK is 2-digit: 01-99)
- ❌ **Migration complexity:** Versioning system needs updates to support 3-digit tasks
- ❌ **Less intuitive:** 3-digit numbers may be confusing
- ❌ **Design principle violation:** If story has 100+ tasks, it should be an epic

**Scalability:**
- **Per Story:** Unlimited perpetual tasks (but violates 100-task principle)
- **If Exhausted:** Not applicable (unlimited)

**Migration Impact:**
- **Very High:** Requires versioning system changes to support 3-digit tasks
- **Example:** E6:S06:T08 (UKW) → E6:S06:T101 (UKW, 3-digit)
- **Example:** Version format change: `0.6.6.101+1` (3-digit TASK)

---

## Option 6: Middle Range (T41-T59)

**Reserved Range:** Tasks 41-59 (19 tasks reserved)

**Allocation:**
- **T01-T40:** Regular tasks (40 tasks available)
- **T41-T59:** Perpetual tasks (reserved)
- **T60-T99:** Regular tasks (40 tasks available)

**Examples:**
- UKW: E6:S06:T41 (perpetual)
- CMW: E6:S06:T42 (perpetual)
- FR-001: E5:S01:T01 (first repository task)

**Pros:**
- ✅ **Higher capacity:** 19 perpetual tasks per story
- ✅ **Balanced allocation:** Regular tasks split between low and high ranges
- ✅ **Clear separation:** Middle range clearly indicates special/perpetual tasks
- ✅ **Room for growth:** 19 tasks provides buffer for future perpetual tasks

**Cons:**
- ❌ **Reduced regular capacity:** Only 80 regular tasks per story (split range)
- ❌ **Less intuitive:** Middle range is less conventional than low or high ranges
- ❌ **Migration complexity:** Existing perpetual tasks need renumbering
- ❌ **Potential conflicts:** If story already has T41-T59 used for regular tasks, conflicts arise
- ❌ **Confusing:** Split regular task range (T01-T40, T60-T99) may be confusing

**Scalability:**
- **Per Story:** 19 perpetual tasks max
- **If Exhausted:** Create new story for additional perpetual tasks, or expand range

**Migration Impact:**
- **High:** Existing perpetual tasks (T08, T12) need renumbering
- **Example:** E6:S06:T08 (UKW) → E6:S06:T41 (UKW)
- **Example:** E6:S06:T12 (CMW) → E6:S06:T42 (CMW)

---

## Comparison Matrix

| Option | Range | Capacity | Regular Tasks | Migration | Format | Intuitive | Recommended |
|--------|-------|----------|---------------|-----------|--------|-----------|-------------|
| **T01-T09** | Low | 9 | 90 | Medium | 2-digit | ✅ High | ⭐⭐⭐ |
| **T91-T99** | High | 9 | 90 | Medium | 2-digit | ✅ High | ⭐⭐⭐ |
| **T01-T19** | Low Extended | 19 | 80 | **Low** | 2-digit | ✅ High | ⭐⭐⭐⭐ |
| **T81-T99** | High Extended | 19 | 80 | High | 2-digit | ✅ Medium | ⭐⭐ |
| **T101+** | Unlimited | Unlimited | 99 | **Very High** | **3-digit** | ❌ Low | ❌ |
| **T41-T59** | Middle | 19 | 80 (split) | High | 2-digit | ❌ Low | ⭐ |

**Legend:**
- ⭐⭐⭐⭐ = Highly Recommended
- ⭐⭐⭐ = Recommended
- ⭐⭐ = Acceptable
- ⭐ = Not Recommended
- ❌ = Not Viable

---

## Recommended Approach: T01-T19 (Extended Low Range)

**Rationale:**

1. **Migration Friendly:** Existing perpetual tasks (T08, T12) already in range - minimal migration needed
2. **Sufficient Capacity:** 19 perpetual tasks per story is likely more than enough (current: 2-3 perpetual tasks)
3. **Clear Separation:** Low numbers clearly indicate special/perpetual tasks
4. **Conventional:** Low numbers for special items is common practice
5. **Format Compliant:** Maintains 2-digit format (T01-T19)
6. **Design Principle Aligned:** 80 regular tasks + 19 perpetual = 99 total (within 100-task limit)
7. **Visual Clarity:** Low numbers stand out in task lists
8. **Future-Proof:** 19 tasks provides buffer for growth

**If Exhausted:**
- Create new story for additional perpetual tasks
- Or expand range to T01-T29 (if needed, but 19 should be sufficient)

**Migration Strategy:**
- Existing perpetual tasks (T08, T12) already in range - no renumbering needed
- Regular tasks using T01-T19 need to be moved to T20+
- Repository tasks start at T20 (E5:S01:T20 = FR-001)

---

## Alternative: T91-T99 (High Range) - If Low Range Conflicts

**Use Case:** If T01-T19 conflicts with existing regular tasks, use T91-T99 instead.

**Rationale:**
- No early conflicts with regular tasks
- Clear separation (high numbers)
- Natural boundary (T99 is upper limit)
- 9 tasks may be sufficient (if fewer perpetual tasks expected)

---

## Implementation Notes

**Policy Definition:**
- Reserved range: T01-T19 for perpetual tasks
- Regular tasks: T20-T99 (80 tasks)
- Perpetual tasks: T01-T19 (19 tasks)
- If story exceeds 100 tasks total, split into epic

**Version Format:**
- Maintains 2-digit format: `RC.EPIC.STORY.TASK+BUILD`
- Example: `0.6.6.8+21` (UKW = E6:S06:T08, perpetual)
- Example: `0.5.1.20+0` (FR-001 = E5:S01:T20, repository)

**Migration:**
- Existing perpetual tasks (T08, T12) remain in range
- Regular tasks in T01-T19 need renumbering to T20+
- Repository tasks start at T20

---

## References

- **E9:S01:T08:** Repository Story Abstract Space Contradiction
- **Analysis Document:** `docs/analysis/repository-story-abstract-space-contradiction-analysis.md`
- **Versioning Policy:** `docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md`
- **Kanban Policy:** `packages/frameworks/kanban/policies/kanban-governance-policy.md`

---

_This analysis is part of Epic 9: Release Candidate Readiness. See `docs/project-management/kanban/epics/Epic-9/Epic-9.md` for epic context._

