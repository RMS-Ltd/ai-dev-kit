---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-21T23:45:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 2, Story 1, Task 5: CMW Perpetual Task Pattern

**Status:** TODO  
**Priority:** HIGH  
**Last updated:** [YYYY-MM-DD] (v0.2.1.5+0 – Template created)  
**Started:** [YYYY-MM-DD]  
**Completed:** [YYYY-MM-DD]  
**Version:** v0.2.1.5+0

**Progress:** Task template  
**Code:** E2S1T05

---

## Task ID

**Format:** `E{epic}:S{story}:T{task}`
**Value:** `E2:S1:T05`

---

## Overview

Create a perpetual task for Changelog Management Workflow (CMW) maintenance runs. This follows the perpetual task pattern (similar to UKW perpetual task) to ensure CMW maintenance releases are properly versioned and attributed.

---

## Problem Statement

**Current State:**
- CMW runs periodically to maintain changelog health (archive entries, remove duplicates, fix ordering)
- CMW can be triggered automatically (RW Step 9.5) or manually
- CMW maintenance runs need proper version attribution
- Without a perpetual task, CMW releases would be incorrectly attributed to arbitrary feature tasks
- BUILD number semantics should reflect CMW run count, not feature iteration

**Solution:** Create dedicated perpetual task for CMW maintenance work:
- All CMW-triggered RWs use this perpetual task
- BUILD number = CMW maintenance run count
- Clear attribution and traceability
- Proper semantic meaning

---

## Scope

**In Scope:**
- Create perpetual task document for CMW maintenance
- Follow perpetual task pattern (Status: IN PROGRESS, Task Type: Perpetual Maintenance)
- Document CMW context detection in RW
- Enable build warning suppression for perpetual tasks

**Out of Scope:**
- CMW workflow implementation (handled separately)
- RW logic updates (handled in framework maintenance tasks)
- Non-CMW workflow updates

---

## Approach

### Task Structure

**Perpetual Task Pattern:**
- Status: IN PROGRESS (never changes to COMPLETE)
- Task Type: Perpetual Maintenance
- Build Warning Suppression: Enabled
- Version Pattern: `v0.{EPIC}.{STORY}.{TASK}+{N}` where N = CMW run number

### RW Attribution Logic

**When CMW triggers RW:**
1. Agent detects CMW context (user ran "CMW" then "RW", or RW Step 9.5 triggered CMW)
2. Automatically attributes release to this perpetual task
3. Increments BUILD number (same task, increment BUILD)
4. Suppresses build number warnings (perpetual task flag)

### Version Pattern

- First CMW release: `v0.{EPIC}.{STORY}.{TASK}+1`
- Subsequent CMW releases: `v0.{EPIC}.{STORY}.{TASK}+2`, `+3`, etc.
- BUILD number represents CMW maintenance run count

---

## Acceptance Criteria

- [ ] Perpetual task document created
- [ ] Task document follows perpetual task pattern
- [ ] Task Type: Perpetual Maintenance specified
- [ ] Build Warning Suppression: true specified
- [ ] RW logic updated to detect CMW context (if applicable in project)
- [ ] First CMW-triggered RW uses this perpetual task correctly

---

## Deliverables

- Perpetual task document following the pattern
- Task document includes `Task Type: Perpetual Maintenance` metadata
- Task document includes `Build Warning Suppression: true` metadata

---

## Related Work

- **Workflow:** CMW (Changelog Management Workflow)
- **Workflow:** RW (Release Workflow)
- **Related Pattern:** UKW Perpetual Task Pattern (Epic 4, Story Maintenance, T01)
- **Reference:** `packages/frameworks/workflow mgt/workflows/changelog-management-workflow.yaml`

---

## Notes

**Perpetual Task Pattern:**
- Projects should create a perpetual CMW task for CMW maintenance release attribution
- **Wiring Required:** Task must have `Task Type: Perpetual Maintenance` in task document (RW uses this to wire)
- **Task ID Varies:** Each project instance has its own perpetual task with its own E/S/T ID
- Task status: IN PROGRESS (Perpetual - never completes)
- BUILD number accumulates naturally as CMW runs (expected and valid)

**CMW Context Detection:**
- RW Step 2 detects CMW context (user ran "CMW" then "RW")
- Uses perpetual task ID discovered via `Task Type: Perpetual Maintenance` flag
- Version pattern: `v0.{EPIC}.{STORY}.{PERPETUAL_TASK}+{BUILD}` where BUILD = CMW run count
- Build warning suppression works for perpetual tasks (high BUILD numbers expected and valid)

---

**Last Updated:** [YYYY-MM-DD] (v0.2.1.5+0 – Template created)  
**Version:** v0.2.1.5+0  
**Status:** TODO

