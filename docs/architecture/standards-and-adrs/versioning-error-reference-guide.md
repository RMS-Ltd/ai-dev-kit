---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:01:47Z
expires_at: null
housekeeping_policy: keep
---

# Versioning Error Reference Guide

**Status:** ACTIVE REFERENCE  
**Owner:** Engineering  
**Last Updated:** 2025-12-03  
**Related Work:** Epic 2, Story 2 (PDCA Integration), inspired by fynd.deals Epic 11, Story 1 error analysis

---

## Purpose

This document serves as a **comprehensive reference** for the versioning error anti-pattern where BUILD is incorrectly incremented instead of TASK when completing new tasks.

**Use this document when:**
- The same error occurs again (BUILD incremented instead of TASK)
- Reviewing versioning procedures
- Onboarding new team members
- Debugging versioning issues
- Strengthening RW Step 2 (Bump Version) procedures

**This document references:**
- Root cause analysis
- Step-by-step procedure
- Policy documents
- Fix implementation

---

## Quick Reference: The Error

### What Happened (Anti-Pattern)

**Error:** BUILD was incremented instead of TASK when completing new tasks.

**Example:**
- ❌ **Wrong:** T003 completed → `0.11.1.1+2` (BUILD incremented, TASK unchanged)
- ✅ **Correct:** T003 completed → `0.11.1.3+1` (TASK incremented to 3, BUILD reset to 1)

**Impact:** Multiple tasks can be released with TASK=1, only BUILD incremented (1-9), breaking version traceability.

### The Fix

**Solution:** Explicit, mandatory step-by-step procedure in RW Step 2 that:

1. **MUST** read Story file to identify completed task
2. **MUST** extract task number from task identifier
3. **MUST** compare task number to current VERSION_TASK
4. **MUST** validate before and after updating

**See:** `packages/frameworks/workflow mgt/docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md` Step 2 for complete procedure.

---

## Root Cause Analysis

### Primary Root Cause

**Location:** RW Step 2 (Bump Version) instructions

**Original Problem (from other project):**
```
1. **Bump Version** - Read version file, determine next version (increment BUILD for same task, or set new TASK+BUILD=1), update file.
```

**Problems:**
1. **No method to determine which case:** "increment BUILD for same task, or set new TASK+BUILD=1" - but HOW do I know which one?
2. **No source of truth:** Doesn't tell WHERE to find which task was completed
3. **No validation:** Doesn't require checking that TASK matches completed work
4. **Assumes knowledge:** Implies agent already knows if it's the same task or new task

### Secondary Root Causes

1. **No mandatory Story file check:**
   - Instruction doesn't require reading Story file
   - Story file is the source of truth for completed tasks
   - Task numbers are clearly visible in Story file: `E\{epic\}:S\{story\}:T\{task\}`

2. **No task number extraction step:**
   - No instruction to extract task number from completed task identifier
   - No instruction to compare task number to current VERSION_TASK

3. **No validation step:**
   - No requirement to validate TASK number matches completed task
   - No requirement to verify before/after updating

4. **Default behavior:**
   - Agent defaulted to "increment BUILD" without checking
   - No explicit check forced agent to verify task context

### Why Previous Fixes Didn't Work

**Previous attempts:**
- Added versioning policy references
- Added examples
- Added warnings

**What was missing:**
- **Explicit, step-by-step procedure** that cannot be skipped
- **Mandatory checks** that force reading Story file
- **Validation steps** that catch errors before updating
- **Clear decision logic** with examples

---

## The Fix: What Was Changed

### 1. Updated RW Step 2 in cursorrules-rw-trigger-section.md

**Changed from:**
```
2. **Bump Version** - Read version file, determine next version using schema calculation:
   - **Same Task:** Increment BUILD (e.g., `0.E.S.T+B` → `0.E.S.T+{B+1}`)
   - **New Task:** Set new TASK and BUILD=1 (e.g., `0.E.S.T+B` → `0.E.S.{T+1}+1`)
```

**Changed to:**
```
2. **Bump Version** - **MANDATORY STEP-BY-STEP PROCESS (DO NOT SKIP ANY STEP):**

   **A. READ CURRENT VERSION:**
   - Read `src/{project}/version.py` to get current `VERSION_EPIC`, `VERSION_STORY`, `VERSION_TASK`, `VERSION_BUILD`
   - Document current version: `RC.EPIC.STORY.TASK+BUILD`

   **B. IDENTIFY COMPLETED TASK (MANDATORY):**
   - Read the Story file: `docs/project-management/kanban/epics/Epic-{epic}/stories/Story-{story}-*.md`
   - Find the MOST RECENTLY COMPLETED task in the Task Checklist (marked `✅ COMPLETE`)
   - Extract the task number from the task identifier: `E{epic}:S{story}:T{task}` (e.g., `E2:S02:T08` → task number is `8`)
   - **CRITICAL:** If no task is marked complete, or you cannot identify which task was just completed, **STOP** and ask the user which task was completed

   **C. DETERMINE VERSION BUMP (MANDATORY LOGIC):**
   - Compare completed task number to current `VERSION_TASK`:
     - **IF completed task number > current VERSION_TASK:** This is a NEW TASK
       - Set `VERSION_TASK` = completed task number
       - Set `VERSION_BUILD` = 1 (reset to 1 for new task)
       - Example: Current `0.2.2.3+5`, completed T008 → New version: `0.2.2.8+1`
     - **IF completed task number == current VERSION_TASK:** This is SAME TASK, new build
       - Keep `VERSION_TASK` unchanged
       - Increment `VERSION_BUILD` by 1
       - Example: Current `0.2.2.3+1`, completed T003 → New version: `0.2.2.3+2`
     - **IF completed task number < current VERSION_TASK:** This is OUT-OF-ORDER TASK COMPLETION
       - **This is VALID** - Tasks can be completed out of sequential order
       - Set `VERSION_TASK` = completed task number (use completed task, not current)
       - Set `VERSION_BUILD` = 1 (reset to 1 for the completed task)
       - Example: Current `0.3.2.6+1`, completed T005 → New version: `0.3.2.5+1`
       - **CRITICAL:** Version reflects completed task, not current VERSION_TASK
       - **CRITICAL:** Changelog entry will appear before higher task numbers (canonical ordering)
       - **See:** Edge Case 10.11 in versioning cookbook for complete documentation

   **D. VALIDATE BEFORE UPDATING:**
   - Verify: New `VERSION_TASK` matches completed task number
   - Verify: If new task, `VERSION_BUILD` = 1; if same task, `VERSION_BUILD` = current + 1
   - Document decision: "Task {completed_task} completed. Current TASK={current_task}, BUILD={current_build}. Decision: {new_task/new_build} → TASK={new_task}, BUILD={new_build}"

   **E. UPDATE VERSION FILE:**
   - Update `VERSION_TASK` and `VERSION_BUILD` in `src/{project}/version.py`
   - Update `VERSION_STRING` to reflect new version
   - Update `VERSION_INFO["description"]` if present

   **F. VALIDATE AFTER UPDATING:**
   - Re-read `version.py` and verify the new version matches your decision
   - Confirm: `VERSION_TASK` = completed task number
   - Confirm: `VERSION_BUILD` = 1 (if new task) or current+1 (if same task)

   Use format: `RC.EPIC.STORY.TASK+BUILD`
```

**Key Changes:**
- ✅ Replaced vague instruction with explicit 6-step procedure (A-F)
- ✅ Added mandatory Story file read (Step B)
- ✅ Added mandatory task number extraction (Step B)
- ✅ Added mandatory comparison logic (Step C)
- ✅ Added validation before updating (Step D)
- ✅ Added validation after updating (Step F)
- ✅ Added error handling for invalid cases

### 2. Updated release-workflow-agent-execution.md Step 2

**Enhanced ANALYZE phase:**
- Made Story file read **MANDATORY** and explicit
- Added task number extraction requirement
- Added comparison requirement

**Enhanced DETERMINE phase:**
- Made task transition detection explicit
- Added clear decision logic with examples
- Added validation requirements

**Enhanced VALIDATE phase:**
- Added mandatory verification that `VERSION_TASK` matches completed task
- Added verification that `VERSION_BUILD` is correct (1 for new task, incremented for same task)

### 3. Updated Key Principles

**Added to cursorrules-rw-trigger-section.md:**
- ✅ **Mandatory Task Identification:** Step 2 MUST read Story file to identify completed task number
- ✅ **Version Validation:** Step 2 MUST validate TASK number matches completed task before and after updating
- ❌ **Never Skip Task Identification:** Always read Story file to find completed task number
- ❌ **Never Assume Same Task:** Always compare completed task number to current VERSION_TASK

---

## How to Use This Document

### If the Error Happens Again

**Step 1: Identify the Error**
- Check if BUILD was incremented instead of TASK
- Verify by comparing version numbers to completed tasks in Story file
- Example: T005 completed but version shows `0.2.2.1+5` instead of `0.2.2.5+1`

**Step 2: Review This Document**
- Read "Root Cause Analysis" section
- Read "The Fix: What Was Changed" section
- Understand why it happened and what was supposed to prevent it

**Step 3: Check Current State**
- Read `cursorrules-rw-trigger-section.md` Step 2 - Is the explicit procedure still there?
- Read `release-workflow-agent-execution.md` Step 2 - Is it still accurate?
- Check if agent followed the procedure (check logs/conversation)

**Step 4: Determine Cause**
- **If procedure is missing:** Restore from this document
- **If procedure exists but wasn't followed:** Review why agent skipped steps
- **If procedure is unclear:** Clarify based on examples in this document

**Step 5: Fix and Document**
- Update `cursorrules-rw-trigger-section.md` if needed
- Update `release-workflow-agent-execution.md` if needed
- Document what went wrong and how it was fixed
- Update this reference guide with new findings

### For Review and Onboarding

**When reviewing versioning procedures:**
1. Read this document to understand the error
2. Read `release-workflow-agent-execution.md` Step 2 to understand the correct procedure
3. Verify `cursorrules-rw-trigger-section.md` Step 2 matches the procedure

**When onboarding new team members:**
1. Share this document as context
2. Explain the error and why it matters
3. Walk through the correct procedure
4. Show examples of correct vs. incorrect versioning

---

## Related Documentation

### Core Policy Documents
- **[Versioning Policy](dev-kit-versioning-policy.md)** - Complete versioning schema definition
- **[Versioning Strategy (source)](https://github.com/earlution/ai-dev-kit/blob/main/packages/frameworks/numbering%20%26%20versioning/versioning-strategy.md)** - Complete strategy with forensic traceability

### Procedure Documents
- **[Release Workflow Agent Execution (source)](https://github.com/earlution/ai-dev-kit/blob/main/packages/frameworks/workflow%20mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md)** - **MANDATORY** step-by-step procedure for RW Step 2
- **[Cursor Rules RW Trigger Section (source)](https://github.com/earlution/ai-dev-kit/blob/main/packages/frameworks/workflow%20mgt/cursorrules-rw-trigger-section.md)** - Updated RW Step 2 with explicit procedure

### Workflow Flaws Documentation
- **[Workflow Flaws Reference Guide](workflow-flaws-reference-guide.md)** - Comprehensive reference for all RW flaws (this error is documented as WF-002)

### Implementation Documents
- **[Version File (source)](https://github.com/earlution/ai-dev-kit/blob/main/src/fynd_deals/version.py)** - Current version implementation

---

## Key Takeaways

### What Went Wrong
1. **Vague instruction** in RW Step 2
2. **No mandatory checks** to read Story file
3. **No validation** that TASK matches completed work
4. **Default behavior** to increment BUILD without checking

### What Was Fixed
1. **Explicit procedure** with 6 mandatory steps (A-F)
2. **Mandatory Story file read** to identify completed task
3. **Mandatory comparison** of task numbers
4. **Validation before and after** updating version file
5. **Error handling** for invalid cases

### How to Prevent
1. **Follow the procedure exactly** - Do not skip any step
2. **Read Story file first** - It's the source of truth
3. **Compare task numbers** - Don't assume same task
4. **Validate everything** - Before and after updating
5. **Document decisions** - Show your work

---

## Version History

| Date | Version | Changes |
| --- | --- | --- |
| 2025-12-03 | 1.0 | Initial document created after reviewing fynd.deals Epic 11, Story 1 error analysis |

---

## Contact and Escalation

**If this error occurs again:**
1. Review this document
2. Check if procedure is still in place
3. Verify agent followed procedure
4. Document what went wrong
5. Update this document with findings
6. Escalate if procedure needs further refinement

**Questions or issues:**
- Review related documentation (see "Related Documentation" section)
- Check `cursorrules-rw-trigger-section.md` for current procedure
- Verify `release-workflow-agent-execution.md` Step 2 is accurate

---

_Last updated: 2025-12-03_  
_This document should be updated whenever the versioning procedure changes or if the error occurs again._

