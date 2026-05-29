---
lifecycle: evergreen
created_at: 2025-12-18T00:00:00
housekeeping_policy: keep
---

# UKW Versioning Reasoning Analysis

**Date:** 2025-12-18  
**Issue:** Post-UKW RW version attribution analysis  
**Related:** v0.6.6.7+6 release

---

## The Problem

After running UKW (Update Kanban Workflow), the subsequent RW was attributed to T07 with a BUILD increment (`v0.6.6.7+5` → `v0.6.6.7+6`).

### Flawed Reasoning

**What was done:**
- UKW marked T07 as COMPLETE
- RW was run immediately after UKW
- Version was bumped as: Same task (T07), increment BUILD
- Reasoning: "T07 was just marked complete, so this RW documents that completion"

**Why this reasoning is flawed:**

1. **UKW is a cross-cutting workflow:**
   - Updates ALL kanban documents across the entire hierarchy
   - Can affect multiple tasks, stories, epics simultaneously
   - Not focused on a single task - it's a maintenance/synchronization workflow

2. **Attribution is arbitrary:**
   - UKW could update T07, T02, T05, E4:S10, E6:S04, and multiple BR/FRs in one run
   - Which task should it be attributed to? The "most recently changed"? That's arbitrary.
   - The focus wasn't "completing T07" - the focus was "synchronizing ALL kanban docs"

3. **Build number accumulation:**
   - If UKW runs frequently (e.g., weekly sync), BUILD would accumulate on whatever task happens to be "active"
   - This breaks the semantic meaning of BUILD (multiple releases of the SAME work)
   - UKW releases are NOT multiple releases of the same task - they're different synchronization runs

4. **Traceability broken:**
   - Version `v0.6.6.7+6` suggests "T07, build 6" (six releases of T07 work)
   - But it's actually "UKW synchronization run #1" - completely different semantic meaning

---

## Root Cause Analysis

**Location:** RW Step 2 (Bump Version) - Task identification logic

**Current Logic:**
- Read Story file to identify "completed task"
- Compare to current VERSION_TASK
- If same task → increment BUILD
- If different task → set new TASK, BUILD=1

**The Gap:**
- RW assumes every release is about completing a specific feature task
- RW doesn't account for maintenance/synchronization workflows
- No concept of "perpetual maintenance tasks"

**Why it happened:**
- Agent saw T07 was just marked complete by UKW
- Agent reasoned: "If T07 was just completed, this RW must be about T07"
- But the actual work was UKW synchronization (which incidentally updated T07 status)

---

## Solution: Perpetual UKW Task

### Create E6:S06:T08 - Update Kanban Workflow (Perpetual Task)

**Task Purpose:**
- Perpetual task for UKW releases
- All UKW-triggered RWs should be attributed to this task
- Task never "completes" - it's ongoing maintenance work
- BUILD number accumulates naturally as UKW runs

**Task Structure:**
```
E6:S06:T08 – Update Kanban Workflow (UKW)
Status: IN PROGRESS (perpetual)
Priority: HIGH
Type: Maintenance/Synchronization
Purpose: Periodic kanban documentation synchronization
```

**Version Pattern:**
- First UKW release: `v0.6.6.8+1`
- Subsequent UKW releases: `v0.6.6.8+2`, `v0.6.6.8+3`, etc.
- BUILD number = number of UKW synchronization runs

**Benefits:**
1. **Clear attribution:** All UKW work is clearly identified
2. **Semantic correctness:** BUILD number represents "UKW run #N", not "task completion iteration"
3. **Traceability:** Easy to find all UKW releases in changelog
4. **No arbitrary attribution:** No need to pick which task to attribute to

---

## Build Number Warning Suppression

### Problem

RW or validators might warn about "high build numbers" (e.g., `+50`, `+100`).

**For perpetual tasks like UKW:**
- High build numbers are EXPECTED and VALID
- UKW might run weekly/monthly → BUILD accumulates naturally
- Warning would be noise/false positive

### Solution: Task Metadata

Add metadata to task document to indicate "perpetual task":

```markdown
**Task Type:** perpetual
**Build Warning Suppression:** true
```

Or more explicit:
```markdown
**Perpetual Task:** true
**Explanation:** This task represents ongoing maintenance work (UKW synchronization). High build numbers are expected and valid.
```

**RW Logic:**
- In Step 2, check task document for `perpetual_task: true` or similar
- If perpetual task, suppress build number warnings
- Still validate BUILD >= 0, but don't warn about high values

**Alternative:** Task naming convention
- Name pattern: `* (Perpetual)` or `* (Maintenance)`
- RW recognizes pattern and suppresses warnings

---

## Implementation Plan

### Step 1: Create Perpetual UKW Task

1. Create task document: `E6:S06:T08-update-kanban-workflow-ukw.md`
2. Mark as perpetual/maintenance task
3. Add to Story 6 task checklist

### Step 2: Update RW Logic

1. **Step 2 Enhancement:**
   - When UKW trigger detected, automatically attribute to T08
   - Check task document for `perpetual_task` flag
   - Suppress build number warnings for perpetual tasks

2. **Alternative:** Explicit UKW trigger
   - If user runs "UKW" then "RW", agent knows it's UKW work
   - Automatically use T08 for versioning

### Step 3: Update Documentation

1. Document perpetual task pattern in RW guide
2. Document build warning suppression mechanism
3. Update versioning policy to account for maintenance tasks

### Step 4: Correct Historical Attribution

**Option A:** Leave as-is (historical record)
- v0.6.6.7+6 stands as-is
- Document in changelog that this was UKW work attributed to T07 (incorrectly)
- Future UKW releases use T08

**Option B:** Retag/correct (if possible)
- Amend commit to use T08
- Update version to `v0.6.6.8+1`
- Requires git history rewrite (risky)

**Recommendation:** Option A (leave as-is, document the mistake, move forward correctly)

---

## Related Work

- **Story:** E6:S06 - ADK Implementation Analysis and Package Management
- **Related Tasks:** T07 (Framework Hardening), T08 (UKW - to be created)
- **Workflow:** UKW, RW
- **Documentation:** RW Step 2 version bump logic

---

## Lessons Learned

1. **Not all releases are feature completions:**
   - Maintenance/synchronization workflows need different attribution
   - RW must account for different types of work

2. **Semantic correctness matters:**
   - BUILD number should reflect "iterations of same work"
   - UKW runs are NOT iterations of T07 - they're different work entirely

3. **Agentic intelligence needed:**
   - Agent must understand context (UKW vs. feature completion)
   - Agent must make correct attribution decisions
   - Agent must recognize perpetual tasks

4. **Versioning policy gaps:**
   - Current policy assumes all releases are feature-driven
   - Need to account for maintenance/synchronization workflows
   - Need mechanism for perpetual tasks

---

**Status:** Analysis complete, solution proposed  
**Next Steps:** Create T08 task, update RW logic, document perpetual task pattern

