---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-11T16:04:00Z
expires_at: null
housekeeping_policy: keep
---

# Bug Report BR-042: UKW Agent Board Cleanup Failure

**Bug ID:** BR-042  
**Task ID:** E6:S06:T42 (NOT created — closed as duplicate)  
**Priority:** HIGH  
**Severity:** MEDIUM  
**Status:** CLOSED — duplicate of [FR-090](FR-090-ukw-canonical-row-transform-engine-and-board-specific-rendering-contracts.md) (superseded by [FR-092](FR-092-canonical-rw-ukw-kanban-consistency-program.md))  
**Created:** 2026-03-11  
**Last updated:** 2026-04-27 (closed as duplicate; active row hygiene consolidated under FR-092 + BR-062 fix)  
**Reporter:** Cascade AI Assistant  

> **Closure note (2026-04-27):** BR-042 (UKW agent does not remove completed tasks from active MoSCOW sections) is fully subsumed by:
>
> 1. **BR-062** (RW Step 7 active kboard MoSCOW cleanup) — `COMPLETE v0.2.1.11+2` — fixed the active-row hygiene defect end-to-end for both `kanban_init` and full RW Step 7 mode.
> 2. **FR-090 / FR-092** — own the canonical row transform pipeline + four-surface reconciliation that prevent recurrence at the architectural level.
>
> No additional implementation work is required. BR-042 is closed as duplicate; the intent is preserved under FR-092 Wave 1 (predecessor evidence) and Wave 4 (corpus sweep) traceability.

---

## Bug Summary

**UKW Agent does not properly clean up completed tasks from MoSCOW sections**, leaving completed tasks listed in active priority sections despite being marked as COMPLETE.

---

## Problem Description

### Observed Behavior
- UKW workflow executes successfully and updates task statuses to COMPLETE
- Task documents are properly updated with COMPLETE status
- Board version and timestamps are updated
- **BUT:** Completed tasks remain in active MoSCOW sections ("Must Have", "Should Have", etc.)

### Expected Behavior
- When tasks are marked COMPLETE, UKW Agent should move them out of active MoSCOW sections
- Completed tasks should either:
  1. Be moved to a "Recently Completed" section, or
  2. Be completely removed from active sections (referenced in kanban-completed.md)

- Active MoSCOW sections should only contain IN PROGRESS or TODO tasks

### Specific Example
**E6:S06:T41** (AGENTS.md and SKILL.md implementation):
- ✅ Status correctly updated to COMPLETE in task document
- ✅ Board version updated to v0.6.6.41+1
- ❌ Task remained listed in "Must Have" section after UKW run
- ✅ Manual intervention required to remove from active section

**E6:S06:T03** (Apple SDK License Blocking Issue):
- ✅ Status correctly updated to COMPLETE in task document
- ❌ Task remained listed in "Must Have" section after UKW run
- ✅ Manual intervention required to remove from active section

**Pattern Evidence:**
- Multiple completed tasks (T41, T03) left in active sections
- UKW updates status but fails board cleanup
- Consistent behavior across different completed tasks
- Manual cleanup required for each completed task

---

## Impact Assessment

### User Experience Impact
- **Clarity Issues:** Active sections cluttered with completed tasks
- **Priority Confusion:** Hard to distinguish actual remaining work from finished work
- **Manual Cleanup Required:** Defeats purpose of autonomous workflow execution

### Workflow Impact
- **Reduced Automation:** Manual intervention needed for proper board maintenance
- **Trust Issues:** Users may question reliability of autonomous workflows
- **Maintenance Overhead:** Additional cleanup steps required

---

## Root Cause Analysis

### UKW Agent Logic Gap
The UKW Agent's board synchronization step is incomplete:

**Current Logic:**
1. ✅ Task status inference and updates
2. ✅ Story status inference and updates  
3. ✅ Epic status evaluation and updates
4. ✅ MoSCOW prioritization analysis
5. ✅ Board version/timestamp updates
6. ❌ **Missing:** Board cleanup - remove completed tasks from active sections

**Missing Logic:**
- No step to filter COMPLETED tasks out of active MoSCOW sections
- No cleanup routine for board organization
- No validation that active sections only contain active work

### Agent Design Issue
The UKW Agent's skill definition focuses on status updates but neglects board hygiene:
- `ukw-sync` skill prioritizes status inference over board cleanup
- Missing `board_cleanup` sub-skill for completed task removal
- No integration with kanban-completed.md for archival

---

## Technical Details

### Files Involved
- **Primary:** `/docs/project-management/kanban/kboard.md`
- **Agent:** `/docs/project-management/kanban/AGENTS.md` (UKW Agent)
- **Skill:** `/.windsurf/skills/ukw-sync/SKILL.md`

### UKW Skill Gap
Current `ukw-sync` skill missing:

```markdown
### Step 6: Board Cleanup (MISSING)
- Remove COMPLETED tasks from active MoSCOW sections
- Archive completed tasks to kanban-completed.md if appropriate
- Validate active sections contain only IN PROGRESS/TODO tasks
- Ensure board organization reflects current work priorities
```

### Data Flow Issue
```
Task Status Update → Story Status Update → Epic Status Update → Board Update
                                                    ↓
                                           Board Cleanup (MISSING)
```

---

## Reproduction Steps

1. Execute UKW workflow: `UKW`
2. Wait for completion
3. Check kboard.md MoSCOW sections
4. **Expected:** Only IN PROGRESS/TODO tasks in active sections
5. **Actual:** COMPLETED tasks still listed in active sections

### Test Case
```bash
# Before UKW
E6:S06:T41 = TODO, listed in "Must Have"

# Execute UKW
UKW

# After UKW  
E6:S06:T41 = COMPLETE (in task doc), but still in "Must Have" section
```

---

## Proposed Solution

### Immediate Fix
1. **Update UKW Skill:** Add Step 6 - Board Cleanup
2. **Enhance Agent Logic:** Include cleanup routine in UKW Agent
3. **Add Validation:** Verify active sections only contain active tasks

### Long-term Enhancement
1. **Board Cleanup Skill:** Create dedicated `board-cleanup` skill
2. **Archival Integration:** Automatic movement to kanban-completed.md
3. **Cleanup Policies:** Configurable rules for completed task handling

### Implementation Priority
- **HIGH:** Fix UKW skill to include board cleanup
- **MEDIUM:** Create dedicated board cleanup skill
- **LOW:** Enhanced archival and reporting features

---

## Related Issues

### Dependencies
- **E6:S06:T41** - AGENTS.md and SKILL.md implementation (completed)
- **UKW Agent** - Needs enhancement for proper board maintenance

### Cross-References
- **BR-038** - Release Workflow micromanagement issues (agent behavior)
- **FR-041** - AGENTS.md and SKILL.md for workflows (enables this fix)

---

## Acceptance Criteria

### Fix Verification
- [ ] UKW workflow removes completed tasks from active MoSCOW sections
- [ ] Board cleanup happens automatically without manual intervention
- [ ] Active sections contain only IN PROGRESS/TODO tasks after UKW
- [ ] Completed tasks properly archived or referenced

### Quality Criteria
- [ ] No regressions in UKW status inference capabilities
- [ ] Board cleanup preserves important task information
- [ ] Cleanup process is reliable and consistent
- [ ] User can trust autonomous board maintenance

---

## Timeline Estimates

### Fix Implementation
- **Analysis:** 0.5 days (understand current UKW logic)
- **Skill Update:** 1 day (add board cleanup step)
- **Testing:** 0.5 days (validate cleanup behavior)
- **Documentation:** 0.5 days (update skill docs)

**Total Estimated Fix Time:** 2.5 days

### Enhancement Phase
- **Dedicated Skill:** 2 days (create board-cleanup skill)
- **Archival Integration:** 1 day (kanban-completed.md integration)
- **Advanced Features:** 2 days (configurable policies)

**Total Enhancement Time:** 5 days

---

## Stakeholder Impact

### Positive Impact
- **Improved Automation:** Complete autonomous board maintenance
- **Better UX:** Clear separation of active vs completed work
- **Reduced Overhead:** No manual cleanup required
- **Increased Trust:** Reliable autonomous workflow execution

### Risk Mitigation
- **Backup Procedures:** Ensure completed tasks are properly archived
- **Rollback Capability:** Ability to restore tasks if needed
- **Validation Checks:** Prevent accidental removal of active tasks

---

## Next Steps

1. **Create Task:** E6:S06:T42 - Fix UKW Agent Board Cleanup Failure
2. **Priority Assignment:** HIGH (impairs autonomous workflow reliability)
3. **Implementation:** Update ukw-sync skill with board cleanup step
4. **Testing:** Validate with completed tasks (E6:S06:T41, E6:S06:T03)
5. **Documentation:** Update UKW Agent and skill documentation

---

**Status:** Ready for task creation and implementation planning
