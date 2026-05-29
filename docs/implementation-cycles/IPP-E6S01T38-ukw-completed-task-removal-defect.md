---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-12T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E6:S01:T38 — IPP: UKW Completed Task Removal Defect (BR-072)

**Host Task:** [E6:S01:T38](../docs/project-management/kanban/epics/Epic-6/Story-001-br-repo/T38-ukw-completed-tasks-not-removed-from-kboard-br072.md)  
**Planning for:** [BR-072](../docs/project-management/kanban/fr-br/BR-072-ukw-completed-tasks-not-removed-from-kboard.md)  
**Status:** Published  
**Created:** 2026-05-12  
**Version context:** v0.6.1.38+0

---

## Section 1: Specification

### 1.1 Problem Statement

When UKW runs, completed tasks are not removed from `kboard.md`. The MoSCOW sections accumulate COMPLETE-status entries across multiple UKW runs. A secondary symptom allows the same task to appear in more than one MoSCOW section simultaneously.

Three root causes:

| # | Root Cause | Location |
|---|-----------|----------|
| RC1 | The removal instruction is buried as a sub-bullet within the EXECUTE phase of the MoSCOW classification step — not a standalone action | `cursorrules-ukw-trigger-section.md` Step 6 |
| RC2 | No write path to `kanban-completed.md` exists anywhere in the UKW definition — removed tasks have nowhere to go | All three UKW definition files |
| RC3 | No deduplication guard exists — a task can accumulate in multiple MoSCOW sections across separate UKW runs | All three UKW definition files |

**Known test fixtures currently on board (retained for verification):**
- `E2:S16:T01` — COMPLETE, present in Should Have **and** Ongoing (duplicated)
- `E2:S15:T07` — COMPLETE, present in Should Have

### 1.2 Objectives

| ID | Objective |
|----|-----------|
| O1 | Elevate completed task removal to a discrete, named action that executes **before** MoSCOW classification — not as a subordinate clause within it |
| O2 | Add a write path so every task removed from `kboard.md` is immediately archived to `kanban-completed.md` in the same UKW run |
| O3 | Add a cross-section deduplication guard preventing any task ID from appearing in more than one MoSCOW section at any time |
| O4 | Propagate all definition changes to `agents/ukw/AGENTS.md` so the focused agent reflects the corrected behaviour |

### 1.3 Functional Requirements

| ID | Requirement | Source |
|----|------------|--------|
| FR1 | UKW Step 6 EXECUTE must scan all MoSCOW sections for COMPLETE or DONE tasks before any classification work begins | BR-072 AC2 |
| FR2 | Each completed task found must be removed from all sections it appears in | BR-072 AC2 |
| FR3 | Each removed task must be written to `kanban-completed.md` using the standard entry format (task link, FR/BR ref, description, timestamp, version, agent) | BR-072 AC4 |
| FR4 | After removal, a deduplication pass must verify no task ID appears in more than one MoSCOW section; duplicate retained is the most-recently-updated entry | BR-072 AC3 |
| FR5 | Active (non-complete) tasks must not be affected by the removal or deduplication steps | T38 AC4 |
| FR6 | The bottom-up execution order (Tasks → Stories → Epics → Board) must be preserved | Existing UKW invariant |
| FR7 | All three UKW definition files must be consistent with each other after the change | T38 AC6 |

### 1.4 Non-Functional Requirements

| ID | Requirement |
|----|------------|
| NFR1 | The fix is definition-level only — no code or script changes |
| NFR2 | The change must not add ambiguity to the MoSCOW classification step; classification reasoning must remain agentic |
| NFR3 | `kanban-completed.md` entry format must match existing entries exactly (see Section 3.3) |

### 1.5 Out of Scope

- Direct manual edits to `kboard.md` or `kanban-completed.md` (those are runtime outputs of the fixed UKW)
- Changes to any other workflow definition (RW, CMW, IPW, etc.)
- Automated/scripted tests for workflow agent definitions
- Retroactive audit of historical UKW runs

### 1.6 Acceptance Criteria

Directly from BR-072 and T38:

- [ ] **AC1:** Root cause identified and documented *(done — see Section 1.1)*
- [ ] **AC2:** UKW definition updated so completed task removal is a discrete, unambiguous step
- [ ] **AC3:** Explicit deduplication check added — no task appears in more than one MoSCOW section
- [ ] **AC4:** Completed tasks removed from `kboard.md` are written to `kanban-completed.md` in the same UKW run
- [ ] **AC5:** Known test fixtures (`E2:S16:T01` × 2, `E2:S15:T07`) confirmed removed by the fixed UKW
- [ ] **AC6:** `agents/ukw/AGENTS.md` reflects definition changes
- [ ] **AC7:** BR-072, T38, Story 001 checklist, `kboard.md`, and `fbuboard.md` are bidirectionally wired *(done at intake)*

---

## Section 2: Test Design

### 2.1 Test Approach

Manual execution of UKW after definition changes are applied. Workflow agent definitions have no automated test harness — verification is by direct inspection of `kboard.md` and `kanban-completed.md` output.

### 2.2 Test Scenarios

| ID | Scenario | Pre-condition | Expected Outcome |
|----|----------|--------------|-----------------|
| T1 | Completed task removed from single section | `E2:S15:T07` (COMPLETE) in Should Have | Removed from kboard.md; entry written to kanban-completed.md |
| T2 | Duplicate completed task fully removed | `E2:S16:T01` (COMPLETE) in Should Have AND Ongoing | Both instances removed from kboard.md; single entry in kanban-completed.md |
| T3 | Deduplication guard — active task | A task legitimately in Ongoing that UKW re-classifies as Should Have | Appears in Should Have only; Ongoing entry removed |
| T4 | Active tasks preserved | Board has mix of active and completed tasks | Only completed tasks removed; active tasks remain with correct MoSCOW classification |
| T5 | kanban-completed.md entry format | Any completed task removed | Entry matches standard format: task link, FR/BR ref, description, timestamp, version, Agent: UKW |

### 2.3 Test Fixtures

Pre-existing on `kboard.md` (do not remove before running fixed UKW):

```
Should Have section:
  - E2:S16:T01 — COMPLETE
  - E2:S15:T07 — COMPLETE

Ongoing section:
  - E2:S16:T01 — COMPLETE (duplicate of above)
```

### 2.4 Coverage Map

| AC | Test Scenarios |
|----|---------------|
| AC2 (discrete removal step) | T1, T2 |
| AC3 (deduplication guard) | T2, T3 |
| AC4 (write to kanban-completed.md) | T1, T2, T5 |
| AC5 (known fixtures cleared) | T1, T2 |
| Active task preservation | T4 |

### 2.5 Post-Run Verification Checklist

After running the fixed UKW:
- [ ] `kboard.md` contains zero entries with status COMPLETE or DONE
- [ ] `kboard.md` contains no task ID appearing in more than one MoSCOW section
- [ ] `kanban-completed.md` has new entries for `E2:S16:T01` and `E2:S15:T07`
- [ ] Each new entry in `kanban-completed.md` includes: task link, description, timestamp, version, `Agent: UKW`
- [ ] Active tasks are present and correctly classified

---

## Section 3: Implementation Plan

### 3.1 Files to Modify

| File | Change Type |
|------|-------------|
| `packages/frameworks/workflow mgt/cursorrules-ukw-trigger-section.md` | Restructure Step 6 EXECUTE — split into Part A (removal) and Part B (classification) |
| `packages/frameworks/workflow mgt/workflows/update-kanban-workflow/update-kanban-workflow.yaml` | Add explicit sub-steps for removal, archive write, and deduplication under Step 6 |
| `packages/frameworks/workflow mgt/agents/ukw/AGENTS.md` | Update Step 6 to reflect two-part EXECUTE structure; add archive target and deduplication guard |

### 3.2 Change: cursorrules-ukw-trigger-section.md

**Target:** Step 6 EXECUTE phase.

**Current structure (problematic):**
```
EXECUTE:
  - LAST: Update MoSCOW priority list (🧠 REQUIRES INTELLIGENT PRIORITIZATION):
    - Remove completed tasks from "In Progress" sections    ← buried sub-bullet
    - Classify tasks intelligently: ...
    - Add new in-progress tasks to appropriate MoSCOW sections
    - Order tasks within each section chronologically
```

**Replacement structure:**

```
EXECUTE — Part A: Remove and archive completed tasks (MANDATORY — runs before classification)

  1. Scan every MoSCOW section in kboard.md for tasks whose status is COMPLETE or DONE.
  2. For each completed task found (process all instances across all sections):
     a. Remove its entry line from kboard.md.
     b. Write one archive entry to kanban-completed.md using the standard format (see below).
        Do not write duplicate archive entries if the same task ID appeared in multiple sections.
  3. Deduplication pass: scan all remaining MoSCOW sections for any task ID that still appears
     more than once. For each duplicate set, retain the entry in the highest-priority section
     (Must Have > Should Have > Could Have > Ongoing > Won't Have) and remove the others.

EXECUTE — Part B: Update MoSCOW priority list (🧠 REQUIRES INTELLIGENT PRIORITIZATION)
  - Classify remaining in-progress tasks intelligently: ...
  - Add new in-progress tasks to appropriate MoSCOW sections
  - Order tasks within each section (most recently updated first)
```

**VALIDATE addition:**
```
  - kboard.md contains no COMPLETE or DONE status task entries
  - No task ID appears in more than one MoSCOW section
  - kanban-completed.md has been updated with entries for all removed tasks
```

### 3.3 kanban-completed.md Entry Format

Match exactly to existing entries:

```markdown
- **[E#:S##:T##](epics/Epic-#/Story-###-.../T##-....md)** — [FR/BR-###] [one-line description]; **[FR/BR link](fr-br/...)** IMPLEMENTED.  
  **Completed:** `YYYY-MM-DDTHH:MM:SSZ` | **Version:** `vX.X.X.X+N` | **Agent:** `UKW`
```

The "Last Updated" header of `kanban-completed.md` must also be updated to reflect the UKW run timestamp and the task(s) completed.

### 3.4 Change: update-kanban-workflow.yaml

Under Step 6, add explicit sub-steps:

```yaml
step_6_board_update:
  execute:
    part_a_remove_and_archive:
      description: "Remove completed tasks before classification"
      actions:
        - scan_all_moscow_sections_for_complete_status
        - remove_completed_entries_from_kboard
        - write_archive_entries_to_kanban_completed
        - deduplication_pass_remove_duplicate_task_ids
      write_targets:
        - kboard.md
        - kanban-completed.md
    part_b_classify:
      description: "MoSCOW classification of remaining active tasks"
      requires: part_a_complete
      actions:
        - intelligent_moscow_classification
        - add_new_in_progress_tasks
        - order_within_sections
```

### 3.5 Change: agents/ukw/AGENTS.md

**Target:** Step 6. Replace the current Step 6 body with a two-part structure that matches the cursorrules restructuring:

```
**Step 6 — Update Kanban Board**

Part A — Remove and archive completed tasks (executes before classification):
- Scan all MoSCOW sections for tasks with status COMPLETE or DONE
- For each completed task:
  - Remove its entry from kboard.md (all sections it appears in)
  - Write one archive entry to kanban-completed.md (standard format — see below)
- Deduplication pass: verify no task ID remains in more than one section after removal

Archive entry format (kanban-completed.md):
  **[E#:S#:T##](path)** — [FR/BR ref] [description]; **[FR/BR link]** STATUS.
  **Completed:** `TIMESTAMP` | **Version:** `vX.X.X.X+N` | **Agent:** `UKW`

Update kanban-completed.md "Last Updated" header after writing entries.

Part B — MoSCOW classification (executes after Part A):
- Apply MoSCOW prioritisation across remaining active work items: ...
- [existing classification content unchanged]
```

### 3.6 Sequencing

Apply changes in this order to keep definitions consistent at each step:

1. `cursorrules-ukw-trigger-section.md` — primary definition; drives the other two
2. `update-kanban-workflow.yaml` — mirrors the cursorrules restructuring
3. `agents/ukw/AGENTS.md` — aligns the focused agent with the corrected definition

---

## Section 4: Verification Gates

| Gate | Condition | Pass Criteria |
|------|-----------|--------------|
| G1 | Post-definition review | All three files consistently describe Part A (removal) before Part B (classification) |
| G2 | Post-UKW run | `kboard.md` has zero COMPLETE/DONE entries |
| G3 | Post-UKW run | No task ID duplicated across MoSCOW sections |
| G4 | Post-UKW run | `kanban-completed.md` has new entries for `E2:S16:T01` and `E2:S15:T07` |
| G5 | Post-UKW run | Entry format in kanban-completed.md matches existing entries exactly |
| G6 | Post-RW | Changes committed; `kboard.md` and `kanban-completed.md` clean state persisted |
