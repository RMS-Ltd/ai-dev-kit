---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-11T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Feature Request: FR/BR/UXR Repository Stories (S00 Pattern)

**Type:** Feature Request (FR)  
**Submitted:** 2025-12-11  
**Submitted By:** User  
**Priority:** HIGH  
**Status:** ACCEPTED  

> **Supersession note (2026-04):** This FR remains the historical baseline that introduced dedicated FR/BR/UXR repository stories. For **new intake behavior**, see **FR-072** (Approach D phased migration) and **FR-074** (semantic placement KG-R6). Repository-story anchors remain valid for historical traceability.

**Implementing Task:** [E5:S01:T21](../epics/Epic-5/Story-001-fr-repo/T21-fr-br-uxr-repository-stories.md)

---

## Summary

Establish a formal repository pattern for Feature Requests (FRs), Bug Reports (BRs), and User Experience Research (UXR) reports by creating Story 1 (S01) in Epics 5, 6, and 7. Each FR/BR/UXR becomes a task in its respective repository story, creating perfect 1:1 traceability (FR-001 = E5:S01:T01, BR-001 = E6:S01:T01, UXR-001 = E7:S01:T01).

**Note:** S00 is Epic-level abstract space only (no tasks). Repository stories migrated from S00 to S01 as part of repository story abstract space resolution (E9:S01:T08).

---

## Description

### What is the Feature?

A formal repository pattern that:

1. **Creates Repository Stories (S01):**
   - Epic 5, Story 1: "FR Repo" - canonical home for all Feature Requests
   - Epic 6, Story 1: "BR Repo" - canonical home for all Bug Reports
   - Epic 7, Story 1: "UXR Repo" - canonical home for all User Experience Research reports

2. **Establishes 1:1 Traceability:**
   - FR-001 → E5:S01:T01 (story-level abstract space: v0.5.1.1+0)
   - BR-001 → E6:S01:T01 (story-level abstract space: v0.6.1.1+0)
   - UXR-001 → E7:S01:T01 (story-level abstract space: v0.7.1.1+0)
   - Bidirectional: E5:S01:T01 → FR-001

3. **Formalizes Intake Workflow:**
   - Every FR/BR/UXR gets committed to its repository story (S01:Txx)
   - Intake workflow still analyzes content and assigns implementation work to appropriate epics/stories
   - Traceability bridge links repository anchor → implementation work

4. **Defines PERPETUAL State:**
   - Repository stories (E5:S01, E6:S01, E7:S01) are PERPETUAL (never complete)
   - Excluded from completion analytics
   - Omitted from epic checklist displays in board views (UX optimization)

**Note:** S00 is Epic-level abstract space only (no tasks). Repository stories migrated from S00 to S01 as part of repository story abstract space resolution (E9:S01:T08).

### What Should Happen vs. What Currently Happens?

**Expected Behavior:**
- New FR-001 filed → Automatically assigned to E5:S01:T01
- FR-001 committed → Story-level abstract space v0.5.1.1+0 established
- Intake workflow analyzes FR-001 content → Assigns implementation to E12:S03:T05 (Frontend)
- Traceability bridge: E5:S01:T01 → E12:S03:T05
- Board views omit E5:S01, E6:S01, E7:S01 from epic checklists (reduce clutter)
- Repository stories tracked internally but not displayed in board summaries

**Current Behavior:**
- FRs are filed and stored in `fr-br/FR-001.md`
- Intake workflow assigns FRs to appropriate epics/stories based on content
- No formal repository anchor for FRs/BRs/UXRs
- No 1:1 mapping between FR number and Kanban task
- Traceability relies on cross-references and intake decisions

### When Does It Occur?

This feature is needed:
- **Every time an FR/BR/UXR is filed** - Should get repository anchor (S01:Txx)
- **During intake workflow** - Repository anchor established before implementation assignment
- **When viewing Kanban board** - Repository stories omitted from display (UX)

### Who is Affected?

**Primary Affected:**
- Intake workflow (must assign FR/BR/UXR to S01:Txx)
- Kanban board views (must omit S01 stories from displays)
- Developers filing FRs/BRs/UXRs (automatic assignment to repository)

**Secondary Affected:**
- Release Workflow (versioning for repository tasks)
- Kanban policy (PERPETUAL state definition)
- Board display logic (omission rules)

---

## Problem / Anti-Pattern

- No formal repository pattern for FRs/BRs/UXRs
- No 1:1 traceability between FR number and Kanban task
- FRs exist in `fr-br/` directory but lack canonical Kanban anchor
- Intake workflow assigns FRs to implementation epics but no repository anchor
- Traceability relies on cross-references rather than formal structure

---

## Requirements

### Functional Requirements

- [x] **FR-021:R01** - Create Epic 5, Story 1: "FR Repo" (PERPETUAL) - ✅ COMPLETE (E9:S01:T08)
- [x] **FR-021:R02** - Create Epic 6, Story 1: "BR Repo" (PERPETUAL) - ✅ COMPLETE (E9:S01:T08)
- [ ] **FR-021:R03** - Create Epic 7, Story 1: "UXR Repo" (PERPETUAL)
- [x] **FR-021:R04** - Policy: Every FR gets E5:S01:Txx assignment (FR-001 = T01) - ✅ COMPLETE (E9:S01:T08)
- [x] **FR-021:R05** - Policy: Every BR gets E6:S01:Txx assignment (BR-001 = T01) - ✅ COMPLETE (E9:S01:T08)
- [ ] **FR-021:R06** - Policy: Every UXR gets E7:S01:Txx assignment (UXR-001 = T01)
- [x] **FR-021:R07** - Intake workflow assigns FR/BR/UXR to S01:Txx before implementation assignment - ✅ COMPLETE (E9:S01:T08)
- [x] **FR-021:R08** - Repository stories marked as PERPETUAL state - ✅ COMPLETE (E9:S01:T08)
- [x] **FR-021:R09** - Repository stories excluded from completion analytics - ✅ COMPLETE (E9:S01:T08)
- [x] **FR-021:R10** - Repository stories omitted from epic checklist displays in board views - ✅ COMPLETE (E9:S01:T08)
- [x] **FR-021:R11** - Repository stories still tracked internally in Epic documents - ✅ COMPLETE (E9:S01:T08)

### Non-Functional Requirements

- [x] **FR-021:NF01** - **Traceability:** Perfect 1:1 mapping FR-001 = E5:S01:T01 - ✅ COMPLETE (E9:S01:T08)
- [x] **FR-021:NF02** - **UX:** Board views remain uncluttered (S01 stories omitted) - ✅ COMPLETE (E9:S01:T08)
- [ ] **FR-021:NF03** - **Consistency:** Same pattern for FR, BR, UXR

---

## Scope Analysis

**Problem Domain:** Kanban Structure, Intake Workflow, Traceability  
**Affected Areas:**
- [x] Backend/API (intake workflow logic)
- [ ] Frontend/UI
- [ ] Database/Schema
- [x] Documentation (Kanban policy, board display rules)
- [x] Testing (intake workflow, board display)
- [x] Other: Kanban framework templates, Epic 5/6/7 structure

**Estimated Complexity:**
- [ ] Simple (1-3 days)
- [x] Medium (1 week)
- [ ] Complex (2+ weeks)
- [ ] Very Complex (1+ month)

---

## Use Cases

**Primary Use Case:**
1. Developer files FR-001 via GitHub issue
2. Intake workflow runs:
   - Assigns FR-001 to E5:S01:T01 (repository anchor)
   - Analyzes FR-001 content
   - Assigns implementation to E12:S03:T05 (Frontend)
   - Creates traceability bridge: E5:S01:T01 → E12:S03:T05
3. FR-001 committed → Story-level abstract space v0.5.1.1+0 established
4. Board view shows Epic 5 with S02-S08 (S01 omitted for UX)
5. Internal Epic 5 document shows S01 in Story Checklist (tracked internally)

**Additional Use Cases:**
- Meta-grouping: E5:S02 "Authentication Features" references E5:S01:T05, T12, T23 (task numbers only)
- Traceability lookup: Find FR-001 → Go to E5:S01:T01
- Version lookup: v0.5.1.1+0 → E5:S01:T01 → FR-001

---

## Acceptance Criteria

- [x] **AC1:** Epic 5, Story 1 "FR Repo" created (PERPETUAL) - ✅ COMPLETE (E9:S01:T08)
- [x] **AC2:** Epic 6, Story 1 "BR Repo" created (PERPETUAL) - ✅ COMPLETE (E9:S01:T08)
- [ ] **AC3:** Epic 7, Story 1 "UXR Repo" created (PERPETUAL)
- [x] **AC4:** Policy: FR-001 = E5:S01:T01, BR-001 = E6:S01:T01, UXR-001 = E7:S01:T01 - ✅ COMPLETE (E9:S01:T08)
- [x] **AC5:** Intake workflow assigns FR/BR/UXR to S01:Txx before implementation assignment - ✅ COMPLETE (E9:S01:T08)
- [x] **AC6:** Repository stories marked PERPETUAL in Kanban policy - ✅ COMPLETE (E9:S01:T08)
- [x] **AC7:** Repository stories excluded from completion analytics - ✅ COMPLETE (E9:S01:T08)
- [x] **AC8:** Repository stories omitted from epic checklist displays in board views - ✅ COMPLETE (E9:S01:T08)
- [x] **AC9:** Repository stories still tracked internally in Epic documents - ✅ COMPLETE (E9:S01:T08)
- [x] **AC10:** Meta-grouping supports task number references (E5:S01:T05, T12, T23) - ✅ COMPLETE (E9:S01:T08)

---

## Design Decisions

### Story 1 (S01) Repository Pattern

**Decision:** Use Story 1 (S01) as repository story, not Story 0.

**Rationale:**
- S00 is Epic-level abstract space only (v0.5.0.0+0) - maintains abstract space concept
- S01 repository story (v0.5.1.0+0) provides clear separation between abstract space and concrete repository
- Keeps current meaningful stories (S02-S08) intact (renumbered from S01-S07)
- S01 is semantically distinct from S02+ (repository vs. work units)
- Aligns with abstract space concept (FR-018) and repository story resolution (E9:S01:T08)

### PERPETUAL State

**Decision:** Repository stories are PERPETUAL (never complete).

**Rationale:**
- Repository stories are containers, not work units
- They grow indefinitely (FR-001 through FR-999+)
- Completion is not meaningful for repositories
- Excluded from completion analytics

### Board Display Omission

**Decision:** Omit E5:S01, E6:S01, E7:S01 from epic checklist displays in board views.

**Rationale:**
- Reduces board clutter (100+ tasks in S01)
- Repository stories are infrastructure, not work items
- Still tracked internally in Epic documents
- Policy documents omission rules

### Meta-Grouping

**Decision:** Meta-grouping uses task numbers only (E5:S01:T05, T12, T23), not FR numbers.

**Rationale:**
- Task numbers are canonical (E5:S00:T05)
- FR numbers add noise and admin overhead
- Risk of incorrect filing if FR numbers required
- Implementation-focused grouping
- FR traceability available via task if needed

---

## Dependencies

**Blocks:**
- Perfect traceability for FRs/BRs/UXRs
- Formal repository pattern
- Strengthened intake workflow

**Blocked By:**
- None (can be implemented independently)

**Related Work:**
- **FR-018:** Abstract Space for Zero-Numbered E/S/T Docs (S00 Epic-level abstract space concept)
- **E9:S01:T08:** Repository Story Abstract Space Contradiction (migration from S00 to S01)
- **E2:S11:** Intake Workflow Automation (intake workflow integration)
- **E4:S02:** FR/BR Intake to Tasks (intake foundation)
- **E5:S02-S08:** Current FR Implementation stories (preserved, renumbered from S01-S07)

---

## Intake Decision

**Intake Status:** ACCEPTED  
**Intake Date:** 2025-12-11  
**Intake By:** AI Agent (Auto)

**Decision Flow Results:**
- [x] New Story Created: Epic 4, Story 12 → Task 00 (Story creation)

**Assigned To:**
- Epic: Epic 4 (Kanban Framework)
- Story: Story 12 (FR/BR/UXR Repository Stories)
- Task: T00-T10 (Story creation and implementation tasks)
- Version: `v0.4.12.0+0` (Story creation)

**Kanban Links:**
- Epic: [`docs/project-management/kanban/epics/Epic-4/Epic-4.md`](../epics/Epic-4/Epic-4.md)
- Story: [`docs/project-management/kanban/epics/Epic-4/Story-012-fr-br-uxr-repository-stories.md`](../epics/Epic-4/Story-012-fr-br-uxr-repository-stories.md)
- Task: See Story 12 task checklist

---

## Rationale

**Why This Matters:**
- **Traceability:** Perfect 1:1 mapping FR-001 = E5:S01:T01
- **Formalization:** Establishes repository pattern as defined structure
- **Intake Workflow:** Strengthens intake by formalizing repository anchor
- **Design Philosophy:** S01 repository story pattern with S00 as Epic-level abstract space

**Why This Should Be Implemented:**
- Current system lacks formal repository pattern
- No 1:1 traceability between FR number and Kanban task
- Intake workflow assigns FRs but doesn't create repository anchor
- Traceability relies on cross-references rather than formal structure

---

## Implementation Notes

**Key Considerations:**
1. **S00 Epic-Level Abstract Space:**
   - E5:S00 abstract space: v0.5.0.0+0 (Epic-level only, no tasks)
   - E6:S00 abstract space: v0.6.0.0+0 (Epic-level only, no tasks)
   - E7:S00 abstract space: v0.7.0.0+0 (Epic-level only, no tasks)

2. **S01 Repository Story:**
   - E5:S01 repository story: v0.5.1.0+0 (Story-level abstract space, contains tasks)
   - E6:S01 repository story: v0.6.1.0+0 (Story-level abstract space, contains tasks)
   - E7:S01 repository story: v0.7.1.0+0 (Story-level abstract space, contains tasks)
   - FR-001 gets v0.5.1.1+0 (first task in repository)

3. **Intake Workflow Integration:**
   - Step 1: Assign FR/BR/UXR to S01:Txx (repository anchor)
   - Step 2: Analyze content for implementation assignment
   - Step 3: Assign implementation work to appropriate epic/story
   - Step 4: Create traceability bridge (S01:Txx → implementation)

4. **Board Display Logic:**
   - Epic checklist displays: Omit S01 stories
   - Epic document Story Checklist: Include S01 (tracked internally)
   - Policy documents: Define omission rules

4. **Meta-Grouping:**
   - E5:S02 "Authentication Features" → References: E5:S01:T05, T12, T23
   - No FR numbers in grouping (task numbers only)
   - FR traceability via task if needed

**Implementation Approach:**
1. Create E5:S01, E6:S01, E7:S01 repository story documents
2. Update Epic 5, 6, 7 documents with S01 in Story Checklist
3. Update Kanban policy with PERPETUAL state definition
4. Update board display logic to omit S01 stories
5. Update intake workflow to assign FR/BR/UXR to S01:Txx
6. Update versioning policy with S01 repository story pattern
7. **Migration Note:** Repository stories migrated from S00 to S01 as part of E9:S01:T08 (Repository Story Abstract Space Contradiction resolution)
7. Document meta-grouping pattern

---

## References

- **FR-018:** `docs/project-management/kanban/fr-br/FR-018-abstract-space-zero-numbered-est-docs.md`
- **E2:S11:** `docs/project-management/kanban/epics/Epic-2/Story-011-intake-workflow-automation.md`
- **E4:S02:** `docs/project-management/kanban/epics/Epic-4/Story-002-fr-br-intake-to-tasks.md`
- **Epic 5 Template:** `packages/frameworks/kanban/templates/epics/Epic-5-FR-Implementation.md`
- **Epic 6 Template:** `packages/frameworks/kanban/templates/epics/Epic-6-BR-Implementation.md`
- **Epic 7 Template:** `packages/frameworks/kanban/templates/epics/Epic-7-UXR.md`
- **Kanban Policy:** `docs/project-management/rituals/policy/kanban-governance-policy.md`

---

**Template Usage:**
This FR follows the Kanban Framework FR template.  
This feature request is part of the Kanban Framework. See `packages/frameworks/kanban/` for complete framework documentation.

