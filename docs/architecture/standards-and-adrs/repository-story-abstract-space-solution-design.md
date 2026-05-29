---
lifecycle: evergreen
ttl_days: null
created_at: 2026-01-16T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Solution Design: Repository Story Abstract Space Resolution

**Status:** IMPLEMENTATION READY  
**Priority:** HIGH  
**Last updated:** 2026-01-16  
**Related Work:** E9:S01:T08 (Repository Story Abstract Space Contradiction)  
**Version:** v0.9.1.8+1

---

## Executive Summary

This document provides the **definitive solution design** for resolving the architectural contradiction where S00 (repository stories) is defined as abstract space (`v0.5.0.0+0`) but contains concrete tasks (`v0.5.0.31+0`), breaking the abstract space concept.

**Key Decisions:**
1. **S00 becomes purely abstract** (Epic-level only, no tasks)
2. **S01 becomes repository story** (concrete story for FR/BR/UXR repositories)
3. **T101+ reserved for perpetual tasks** (3-digit range, unlimited capacity, clear differentiation)
4. **Versioning system extended** to support 3-digit task numbers
5. **Epic-level perpetual tasks** follow same pattern (E&lbrace;X&rbrace;:S&lbrace;Y&rbrace;:T101+)

---

## Problem Statement

**Core Contradiction:**
- S00 is defined as abstract space (`v0.5.0.0+0`) - conceptual anchor only
- S00 has concrete tasks (`v0.5.0.31+0`, `v0.5.0.34+0`, `v0.5.0.35+0`) - making it a real story
- This violates abstract space principle - cannot have both abstract space AND concrete tasks

**Current State:**
- E5:S00 = FR Repo with tasks T31, T34, T35
- E6:S00 = BR Repo with tasks T33
- E6:S06 = Story with perpetual tasks T08 (UKW), T12 (CMW)
- S00 abstract space: `v0.5.0.0+0`, `v0.6.0.0+0` (STORY=0, TASK=0)
- Tasks use: `v0.5.0.31+0`, `v0.6.0.33+0` (STORY=0, TASK=31, 33, 34, 35)

---

## Solution Design

### 1. Abstract Space Separation

**S00 Becomes Purely Abstract (Epic-Level Only):**
- S00 = `v0.\{EPIC\}.0.0+0` (Epic-level abstract space)
- **No tasks** in S00 (abstract space cannot contain concrete work)
- Purpose: Forensic traceability anchor for entire Epic
- Only updated if Epic's core definition changes (rarely)

**S01 Becomes Repository Story (Concrete):**
- E5:S01 = FR Repo (concrete story with tasks)
- E6:S01 = BR Repo (concrete story with tasks)
- E7:S01 = UXR Repo (concrete story with tasks)
- S01 abstract space: `v0.\{EPIC\}.1.0+0` (Story-level abstract space)
- Repository tasks: `v0.\{EPIC\}.1.\{TASK\}+0` (concrete work)

**Version Schema:**
- Epic abstract space: `0.5.0.0+0` (Epic 5)
- Story abstract space: `0.5.1.0+0` (E5:S01)
- Repository task: `0.5.1.31+0` (FR-031 = E5:S01:T31)
- Regular task: `0.5.2.5+1` (E5:S02:T05)

---

### 2. Perpetual Task Range: T101+ (3-Digit)

**Decision: T101+ for Perpetual Tasks**

**Rationale:**
1. **Clear Differentiation:** 3-digit task IDs (T101+) immediately distinguish perpetual tasks from regular tasks (T01-T99)
2. **Unlimited Capacity:** No upper bound - can accommodate unlimited perpetual tasks per story
3. **No Conflicts:** Regular tasks use T01-T99, perpetual tasks use T101+ - complete separation
4. **Visual Clarity:** 3-digit numbers stand out in task lists, making perpetual tasks easily identifiable
5. **Future-Proof:** No need to worry about range exhaustion or migration
6. **Clean Design:** No "messy" reserved ranges at bottom (T91-T99) or middle (T41-T59)

**Allocation:**
- **T01-T99:** Regular tasks (99 tasks available)
- **T101+:** Perpetual tasks (unlimited, 3-digit format)

**Examples:**
- UKW: E6:S06:T101 (perpetual, 3-digit)
- CMW: E6:S06:T102 (perpetual, 3-digit)
- FR-001: E5:S01:T01 (first repository task, 2-digit)
- Regular task: E5:S02:T05 (regular task, 2-digit)

**Version Format:**
- Perpetual task: `0.6.6.101+21` (UKW = E6:S06:T101, BUILD=21)
- Regular task: `0.5.1.31+0` (FR-031 = E5:S01:T31, BUILD=0)

---

### 3. Versioning System Extension

**Current Format:** `RC.EPIC.STORY.TASK+BUILD`
- TASK is 2-digit: 01-99
- Example: `0.6.6.8+21`

**Extended Format:** `RC.EPIC.STORY.TASK+BUILD`
- TASK is 2-digit or 3-digit: 01-99 (regular), 101+ (perpetual)
- Example (regular): `0.5.1.31+0`
- Example (perpetual): `0.6.6.101+21`

**Version String Format:**
- Regular: `"0.5.1.31+0"` (TASK=31, 2-digit)
- Perpetual: `"0.6.6.101+21"` (TASK=101, 3-digit)

**Validation:**
- TASK must be >= 1
- TASK &lt;= 99 (regular tasks) OR TASK >= 101 (perpetual tasks)
- TASK 100 is invalid (reserved for future use, if needed)

**Version Comparison:**
- Version ordering remains canonical (by version number, not timestamp)
- 3-digit tasks (T101+) are always > 2-digit tasks (T01-T99)
- Example: `0.6.6.101+1` > `0.6.6.99+1` (T101 > T99)

---

### 4. Epic-Level Perpetual Tasks

**Pattern:** Stories whose primary purpose is to house a perpetual task

**Consideration:** How this pattern applies to epics

**Design Decision:**
- **Epic-level perpetual tasks** follow the same pattern as story-level
- If an Epic's primary purpose is to house a perpetual task, it should be structured accordingly
- Example: Epic 6, Story 6 (E6:S06) houses UKW (T101) and CMW (T102)
- The story itself may have regular tasks (T01-T99) and perpetual tasks (T101+)

**Epic-Level Implications:**
- Epics can have stories that primarily house perpetual tasks
- These stories follow the same T101+ pattern
- Epic abstract space (S00) remains abstract (no tasks)
- Story abstract space (S01+) can have both regular and perpetual tasks

**Example Structure:**
- E6:S06 (ADK Implementation Analysis and Package Management)
  - Regular tasks: T01-T16 (T01-T99 range)
  - Perpetual tasks: T101 (UKW), T102 (CMW) (T101+ range)

---

### 5. Migration Strategy

#### Phase 1: Repository Story Migration (S00 → S01)

**E5:S00 → E5:S01 (FR Repo):**
- Create E5:S01 story document
- Migrate tasks:
  - E5:S00:T31 → E5:S01:T31 (FR-031)
  - E5:S00:T34 → E5:S01:T34 (FR-034)
  - E5:S00:T35 → E5:S01:T35 (FR-035)
- Update versions:
  - `v0.5.0.31+0` → `v0.5.1.31+0`
  - `v0.5.0.34+0` → `v0.5.1.34+0`
  - `v0.5.0.35+0` → `v0.5.1.35+0`
- Update traceability: FR-031 = E5:S01:T31 (was E5:S00:T31)

**E6:S00 → E6:S01 (BR Repo):**
- Create E6:S01 story document
- Migrate tasks:
  - E6:S00:T33 → E6:S01:T33 (BR-033)
- Update versions:
  - `v0.6.0.33+0` → `v0.6.1.33+0`
- Update traceability: BR-033 = E6:S01:T33 (was E6:S00:T33)

**E7:S00 → E7:S01 (UXR Repo):**
- Create E7:S01 story document (if needed)
- No tasks to migrate (if empty)

#### Phase 2: Perpetual Task Migration (T08, T12 → T101, T102)

**E6:S06 Perpetual Tasks:**
- E6:S06:T08 (UKW) → E6:S06:T101 (UKW)
- E6:S06:T12 (CMW) → E6:S06:T102 (CMW)
- Update versions:
  - `v0.6.6.8+21` → `v0.6.6.101+21` (UKW)
  - `v0.6.6.12+2` → `v0.6.6.102+2` (CMW)
- Update task documents, references, and changelogs

#### Phase 3: Abstract Space Updates

**S00 Becomes Epic-Level Only:**
- E5:S00: Remove all task references, keep as abstract space (`v0.5.0.0+0`)
- E6:S00: Remove all task references, keep as abstract space (`v0.6.0.0+0`)
- E7:S00: Keep as abstract space (`v0.7.0.0+0`)

**S01 Gets Story-Level Abstract Space:**
- E5:S01: Abstract space `v0.5.1.0+0` (Story-level)
- E6:S01: Abstract space `v0.6.1.0+0` (Story-level)
- E7:S01: Abstract space `v0.7.1.0+0` (Story-level)

---

### 6. Policy Updates

#### Versioning Policy Updates

**Section: Task Number Format**
- **Current:** TASK is 2-digit (01-99)
- **Updated:** TASK is 2-digit (01-99) for regular tasks, 3-digit (101+) for perpetual tasks
- **Validation:** TASK >= 1, TASK &lt;= 99 (regular) OR TASK >= 101 (perpetual), TASK 100 is invalid

**Section: Abstract Space**
- **Current:** S00 is abstract space with tasks
- **Updated:** S00 is Epic-level abstract space only (no tasks). S01+ can be repository stories (concrete).

**Section: Perpetual Tasks**
- **Current:** Perpetual tasks use 2-digit format (T08, T12)
- **Updated:** Perpetual tasks use 3-digit format (T101+)
- **Rationale:** Clear differentiation, unlimited capacity, no conflicts

#### Kanban Policy Updates

**Section: Repository Stories**
- **Current:** S00 is repository story (perpetual)
- **Updated:** S01 is repository story (concrete, not perpetual). S00 is abstract space only.

**Section: Perpetual Tasks**
- **Current:** No reserved range defined
- **Updated:** T101+ reserved for perpetual tasks (3-digit, unlimited)

#### FR-018/FR-021 Updates

**FR-018 (Abstract Space):**
- Clarify: S00 is Epic-level abstract space only (no tasks)
- S01+ can have abstract space at story level (`v0.X.1.0+0`)

**FR-021 (Repository Stories):**
- Update: Repository stories are S01, not S00
- Traceability: FR-001 = E5:S01:T01 (was E5:S00:T01)
- Version: `v0.5.1.1+0` (was `v0.5.0.1+0`)

---

## Implementation Plan

### Step 1: Update Versioning System
- [ ] Extend version parsing to support 3-digit tasks (T101+)
- [ ] Update version validation to allow T101+
- [ ] Update version comparison to handle 3-digit tasks
- [ ] Test version ordering with 3-digit tasks

### Step 2: Create Repository Stories (S01)
- [ ] Create E5:S01 (FR Repo) story document
- [ ] Create E6:S01 (BR Repo) story document
- [ ] Create E7:S01 (UXR Repo) story document (if needed)
- [ ] Update Epic documents to reference S01 instead of S00

### Step 3: Migrate Repository Tasks (S00 → S01)
- [ ] Migrate E5:S00:T31 → E5:S01:T31 (FR-031)
- [ ] Migrate E5:S00:T34 → E5:S01:T34 (FR-034)
- [ ] Migrate E5:S00:T35 → E5:S01:T35 (FR-035)
- [ ] Migrate E6:S00:T33 → E6:S01:T33 (BR-033)
- [ ] Update all version numbers in task documents
- [ ] Update all FR/BR documents with new task IDs
- [ ] Update changelogs with new version numbers

### Step 4: Migrate Perpetual Tasks (T08, T12 → T101, T102)
- [ ] Rename E6:S06:T08 → E6:S06:T101 (UKW)
- [ ] Rename E6:S06:T12 → E6:S06:T102 (CMW)
- [ ] Update task documents with new IDs
- [ ] Update versions: `v0.6.6.8+21` → `v0.6.6.101+21` (UKW)
- [ ] Update versions: `v0.6.6.12+2` → `v0.6.6.102+2` (CMW)
- [ ] Update all references to T08/T12 → T101/T102
- [ ] Update changelogs with new version numbers

### Step 5: Update Abstract Spaces
- [ ] Update E5:S00 to remove task references (abstract space only)
- [ ] Update E6:S00 to remove task references (abstract space only)
- [ ] Update E7:S00 to abstract space only (if needed)
- [ ] Add S01 abstract space references (`v0.5.1.0+0`, etc.)

### Step 6: Update Policies
- [ ] Update versioning policy (3-digit tasks, abstract space)
- [ ] Update Kanban policy (repository stories, perpetual tasks)
- [ ] Update FR-018 (abstract space clarification)
- [ ] Update FR-021 (repository story pattern)

### Step 7: Update Documentation
- [ ] Update all references to S00 repository pattern → S01
- [ ] Update all references to T08/T12 → T101/T102
- [ ] Update version examples in documentation
- [ ] Update traceability examples

### Step 8: Validation
- [ ] Run versioning validators with 3-digit tasks
- [ ] Verify all migrations completed
- [ ] Verify all references updated
- [ ] Verify abstract spaces correct
- [ ] Verify perpetual tasks in T101+ range

---

## Acceptance Criteria

- [ ] **Criterion 1:** S00 is purely abstract (Epic-level only, no tasks)
- [ ] **Criterion 2:** S01 is repository story (concrete, with tasks)
- [ ] **Criterion 3:** All repository tasks migrated (S00 → S01)
- [ ] **Criterion 4:** All perpetual tasks migrated (T08, T12 → T101, T102)
- [ ] **Criterion 5:** Versioning system supports 3-digit tasks (T101+)
- [ ] **Criterion 6:** All version numbers updated correctly
- [ ] **Criterion 7:** All policies updated (versioning, Kanban, FR docs)
- [ ] **Criterion 8:** All documentation updated
- [ ] **Criterion 9:** All validators pass with 3-digit tasks
- [ ] **Criterion 10:** Epic-level perpetual task pattern documented

---

## Dependencies

**Depends On:**
- Versioning system extension (3-digit task support)
- Understanding of current repository structure
- Policy review and updates

**Blocks:**
- Repository story migration
- Perpetual task policy implementation
- Future repository task creation

**Blocked By:**
- None (ready to implement)

---

## References

- **E9:S01:T08:** Repository Story Abstract Space Contradiction
- **Analysis Document:** `docs/analysis/repository-story-abstract-space-contradiction-analysis.md`
- **Perpetual Task Range Analysis:** `docs/analysis/perpetual-task-range-options-analysis.md`
- **Versioning Policy:** `docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md`
- **Kanban Policy:** `packages/frameworks/kanban/policies/kanban-governance-policy.md`
- **FR-018:** Abstract Space for Zero-Numbered E/S/T Docs
- **FR-021:** FR/BR/UXR Repository Stories (S00 Pattern)

---

_This solution design is part of Epic 9: Release Candidate Readiness, Story 1: RC Readiness Gap Analysis. See [`Story-001-rc-readiness-gap-analysis.md`](../../project-management/kanban/epics/Epic-9/Story-001-rc-readiness-gap-analysis.md) for story context._

