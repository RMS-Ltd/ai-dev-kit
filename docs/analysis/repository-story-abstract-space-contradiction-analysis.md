---
lifecycle: evergreen
ttl_days: null
created_at: 2026-01-16T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Analysis: Repository Story Abstract Space Contradiction

**Date:** 2026-01-16  
**Status:** Analysis  
**Related:** E9:S01 (RC Readiness Gap Analysis), FR-018, FR-021

---

## Problem Statement

**Core Contradiction:**
- **S00 is defined as abstract space** (`v0.5.0.0+0`, `v0.6.0.0+0`) - a conceptual anchor for forensic traceability
- **S00 now has concrete tasks** (E5:S00:T31, E5:S00:T34, E6:S00:T33, etc.) - making it a real, concrete story
- **This breaks the abstract space concept** - you cannot have both abstract space AND concrete tasks

**Current State:**
- E5:S00 = FR Repo (PERPETUAL) with tasks T31, T34, etc.
- E6:S00 = BR Repo (PERPETUAL) with tasks T33, etc.
- S00 abstract space: `v0.5.0.0+0`, `v0.6.0.0+0` (STORY=0, TASK=0)
- Tasks use: `v0.5.0.31+0`, `v0.6.0.33+0` (STORY=0, TASK=31, 33, 34)

**The Contradiction:**
- Abstract space format: `0.\{EPIC\}.0.0+0` (STORY=0, TASK=0) - conceptual anchor
- Task versions: `0.\{EPIC\}.0.\{TASK\}+0` (STORY=0, TASK=31+) - concrete work
- S00 is simultaneously abstract space AND a concrete story with tasks

---

## Root Cause Analysis

### Original Design Intent (FR-018, FR-021)

**FR-018 (Abstract Space):**
- Abstract space = `0.\{EPIC\}.\{STORY\}.\{TASK\}+0` for forensic traceability anchor
- S00 abstract space = `0.\{EPIC\}.0.0+0` (STORY=0, TASK=0)
- Purpose: Establish canonical anchor before functional work

**FR-021 (Repository Stories):**
- S00 pattern for FR/BR/UXR repositories
- Perfect 1:1 traceability: FR-001 = E5:S00:T01
- S00 abstract space: `v0.5.0.0+0` for E5:S00
- Tasks get: `v0.5.0.1+0` for FR-001 (E5:S00:T01)

**The Flaw:**
- FR-021 assumed S00 would remain abstract space (`0.5.0.0+0`)
- But tasks are using `0.5.0.31+0` (STORY=0, TASK=31)
- This makes S00 a concrete story, not abstract space
- Abstract space `0.5.0.0+0` cannot coexist with concrete tasks `0.5.0.31+0`

---

## Questions Raised

### 1. Why are there tasks under S00 if it's supposed to be abstract space?

**Answer:** The design flaw is that S00 was intended to be abstract space (`0.5.0.0+0`), but tasks are being created under it (`0.5.0.31+0`), making it concrete. This violates the abstract space principle.

### 2. S00 should have an actual numbered story (S01, S02, etc.) since it's now concrete

**Answer:** Correct. If S00 has concrete tasks, it should be a numbered story (S01, S02, etc.), not S00. S00 should remain abstract space only.

### 3. How to handle perpetual tasks better?

**Answer:** Need to define:
- Reserved range for perpetual tasks (e.g., T01-T10, or T91-T99)
- What happens when range is exhausted
- How perpetual tasks differ from repository tasks

### 4. What's the point of a perpetual story?

**Answer:** Current design has "perpetual stories" (S00) that never complete. But if S00 is abstract space, it shouldn't have tasks. If it has tasks, it should be a numbered story. The concept of "perpetual story" may be unnecessary.

### 5. Do we have a reserved range for perpetual tasks?

**Answer:** Need to check current policy. Likely no explicit reserved range defined.

### 6. What if we need an 11th perpetual task?

**Answer:** Need policy for:
- Reserved range size (e.g., T01-T10 = 10 tasks)
- What happens when range is exhausted (expand range? create new story?)
- Migration strategy

### 7. Rationale: Stories with 100+ tasks should be epics

**Answer:** This is a valid design principle:
- Stories should be manageable (e.g., < 100 tasks)
- If a story grows to 100+ tasks, it should be split into an epic
- This prevents repository stories from becoming unwieldy

---

## Proposed Solutions

### Solution 1: Separate Abstract Space from Repository Story

**Approach:**
- **S00 remains abstract space** (`0.5.0.0+0`) - conceptual anchor only, no tasks
- **S01 becomes FR Repo** (concrete story with tasks)
- **Tasks use:** `0.5.1.31+0` (STORY=1, TASK=31)
- **Abstract space:** `0.5.0.0+0` (Epic 5 abstract space)
- **Repository story:** `0.5.1.0+0` (E5:S01 abstract space)

**Pros:**
- Preserves abstract space concept
- Clear separation: abstract space vs. concrete story
- S00 remains available for other uses

**Cons:**
- Breaks existing traceability (FR-001 = E5:S00:T01 → E5:S01:T01)
- Requires migration of all repository tasks
- Changes version numbers for all FRs/BRs/UXRs

### Solution 2: Remove Abstract Space Concept for S00

**Approach:**
- **S00 is a concrete story** (not abstract space)
- **Tasks use:** `0.5.0.31+0` (STORY=0, TASK=31)
- **No abstract space** for S00 (it's just Story 0)
- **Abstract space only for Epic:** `0.5.0.0+0` (Epic 5 abstract space, not S00)

**Pros:**
- Minimal changes to current implementation
- S00 remains repository story
- No migration needed

**Cons:**
- Loses abstract space concept for S00
- May conflict with FR-018 design intent
- S00 is no longer "special" (just Story 0)

### Solution 3: Reserved Range for Perpetual Tasks

**Approach:**
- **Define reserved range:** T01-T10 for perpetual tasks (or T91-T99)
- **Repository tasks start at T11** (or T01 if using T91-T99)
- **Perpetual tasks:** UKW (E6:S06:T08), CMW (E6:S06:T12), etc.
- **Repository tasks:** FR-001 = E5:S00:T11 (or T01 if using T91-T99)

**Pros:**
- Clear separation of perpetual vs. repository tasks
- Predictable task numbering
- Prevents conflicts

**Cons:**
- Requires renumbering existing tasks
- May not scale if many perpetual tasks needed
- Complex migration

### Solution 4: Hybrid Approach (Recommended)

**Approach:**
1. **S00 remains abstract space** (`0.5.0.0+0`) - Epic-level abstract space only
2. **S01 becomes FR Repo** (concrete story)
3. **Reserved range T01-T10** for perpetual tasks within stories
4. **Repository tasks start at T11** (E5:S01:T11 = FR-001)
5. **Perpetual tasks use reserved range** (E6:S06:T08 = UKW)

**Version Schema:**
- Epic abstract space: `0.5.0.0+0` (Epic 5)
- Story abstract space: `0.5.1.0+0` (E5:S01)
- Repository task: `0.5.1.11+0` (FR-001 = E5:S01:T11)
- Perpetual task: `0.6.6.8+21` (UKW = E6:S06:T08)

**Pros:**
- Preserves abstract space concept
- Clear separation of concerns
- Predictable numbering
- Scalable (T11-T99 for repository tasks = 89 tasks max per story)

**Cons:**
- Requires migration of repository stories (S00 → S01)
- Requires renumbering repository tasks (T01 → T11)
- Changes version numbers for all FRs/BRs/UXRs

---

## Recommended Solution: Hybrid Approach

**Rationale:**
- Preserves abstract space concept (FR-018)
- Maintains repository pattern (FR-021) but as concrete story
- Provides reserved range for perpetual tasks
- Scales to 89 repository tasks per story (T11-T99)
- If story exceeds 100 tasks, split into epic (design principle)

**Migration Path:**
1. Create E5:S01 (FR Repo), E6:S01 (BR Repo), E7:S01 (UXR Repo)
2. Migrate tasks: E5:S00:T31 → E5:S01:T41 (T11 + 30 = T41)
3. Update version numbers in all documents
4. Update traceability: FR-031 = E5:S01:T41
5. Update abstract space: `0.5.0.0+0` (Epic 5 only), `0.5.1.0+0` (E5:S01)
6. Define reserved range policy: T01-T10 for perpetual tasks

---

## Action Items

1. **Create E9 task** for this analysis and solution design
2. **Define reserved range policy** for perpetual tasks (T01-T10 or T91-T99)
3. **Design migration strategy** for repository stories (S00 → S01)
4. **Update versioning policy** to clarify abstract space vs. concrete stories
5. **Update Kanban policy** to remove "perpetual story" concept (use concrete story instead)
6. **Update FR-018/FR-021** documentation to reflect correct design

---

## References

- **FR-018:** Abstract Space for Zero-Numbered E/S/T Docs
- **FR-021:** FR/BR/UXR Repository Stories (S00 Pattern)
- **E9:S01:** RC Readiness Gap Analysis
- **Versioning Policy:** `docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md`
- **Kanban Policy:** `packages/frameworks/kanban/policies/kanban-governance-policy.md`

---

_This analysis is part of Epic 9: Release Candidate Readiness. See `docs/project-management/kanban/epics/Epic-9/Epic-9.md` for epic context._

