---
lifecycle: evergreen
ttl_days: null
created_at: 2026-02-22T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 2, Story 1, Task 6: RW Maintenance Perpetual Task Pattern

**Status:** TODO  
**Priority:** HIGH  
**Last updated:** [YYYY-MM-DD] (v0.2.1.6+0 – Template created)  
**Started:** [YYYY-MM-DD]  
**Completed:** [YYYY-MM-DD]  
**Version:** v0.2.1.6+0

**Progress:** Task template  
**Code:** E2S1T06

---

## Task ID

**Format:** `E{epic}:S{story}:T{task}`
**Value:** `E2:S1:T06`

---

## Overview

Create a perpetual task for Release Workflow (RW) and workflow framework maintenance. This follows the perpetual task pattern (similar to UKW T101 and CMW T102) to ensure RW maintenance releases are properly versioned and attributed. Unlike UKW/CMW, there is no automatic context detection—attribution is manual.

---

## Problem Statement

**Current State:**
- RW maintenance work (Step 7 fixes, validator updates, doc corrections) lacks proper attribution
- Work is either attributed to arbitrary feature tasks or requires creating one-off tasks
- BUILD number semantics break when attributed to feature tasks
- No standard pattern for workflow maintenance across projects

**Solution:** Create dedicated perpetual task for RW maintenance work:
- RW maintenance releases use this perpetual task (manual attribution)
- BUILD number = RW maintenance release count
- Clear attribution and traceability
- Proper semantic meaning

---

## Scope

**In Scope:**
- Create perpetual task document for RW/workflow framework maintenance
- Follow perpetual task pattern (Status: IN PROGRESS, Task Type: Perpetual Maintenance)
- Document manual attribution pattern (no context detection)
- Enable build warning suppression for perpetual tasks

**Out of Scope:**
- RW context detection (unlike UKW/CMW—attribution is manual)
- Non-RW-workflow maintenance (UKW, CMW have their own perpetual tasks)

---

## Approach

### Task Structure

**Perpetual Task Pattern:**
- Status: IN PROGRESS (never changes to COMPLETE)
- Task Type: Perpetual Maintenance
- Build Warning Suppression: Enabled
- Version Pattern: `v0.{EPIC}.{STORY}.{TASK}+{N}` where N = RW maintenance release count

### Attribution Logic (Manual)

**When to attribute to this task:**
- RW Step 7 fixes (e.g., MoSCOW completed-task removal)
- Validator updates (e.g., validate_version_bump improvements)
- Workflow doc corrections (RW guide, cursor rules)
- Framework hardening (non-feature framework improvements)

**Attribution:** Agent or user manually sets version to E{epic}:S{story}:T{task} and increments BUILD when releasing RW maintenance work. No automatic context detection.

### Version Pattern

- First RW maintenance release: `v0.{EPIC}.{STORY}.{TASK}+1`
- Subsequent releases: `v0.{EPIC}.{STORY}.{TASK}+2`, `+3`, etc.
- BUILD number represents RW maintenance release count

---

## Acceptance Criteria

- [ ] Perpetual task document created
- [ ] Task document follows perpetual task pattern
- [ ] Task Type: Perpetual Maintenance specified
- [ ] Build Warning Suppression: true specified
- [ ] Manual attribution pattern documented
- [ ] First RW maintenance release uses this perpetual task correctly

---

## Deliverables

- Perpetual task document following the pattern
- Task document includes `Task Type: Perpetual Maintenance` metadata
- Task document includes `Build Warning Suppression: true` metadata

---

## Related Work

- **Workflow:** RW (Release Workflow)
- **Related Pattern:** UKW Perpetual Task (T101) - automatic context detection
- **Related Pattern:** CMW Perpetual Task (T102) - automatic context detection
- **Feature Request:** FR-041 - Perpetual Task for Release Workflow Maintenance

---

## Notes

**Perpetual Task Pattern:**
- Projects should create a perpetual RW maintenance task for workflow framework maintenance release attribution
- **Wiring Required:** Task must have `Task Type: Perpetual Maintenance` in task document
- **Task ID Varies:** Each project instance has its own perpetual task with its own E/S/T ID (e.g., E2:S16:T03 in ai-dev-kit)
- Task status: IN PROGRESS (Perpetual - never completes)
- BUILD number accumulates naturally as RW maintenance releases (expected and valid)

**Manual Attribution:**
- No automatic context detection (unlike UKW/CMW)
- When releasing RW maintenance work, manually set version to this perpetual task and increment BUILD
- Build warning suppression works for perpetual tasks (high BUILD numbers expected and valid)

---

**Last Updated:** [YYYY-MM-DD] (v0.2.1.6+0 – Template created)  
**Version:** v0.2.1.6+0  
**Status:** TODO
