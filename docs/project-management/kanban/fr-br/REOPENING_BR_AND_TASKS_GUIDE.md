---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-16T13:45:00Z
expires_at: null
housekeeping_policy: keep
---

# Guide: Re-opening Bug Reports and Tasks

**Purpose:** This guide documents the process for re-opening Bug Reports (BRs) and Tasks when bugs persist despite previous fix attempts. This approach minimizes administrative overhead and keeps the knowledge base clean.

**Audience:** Project maintainers, developers, and agents handling bug fixes

---

## Overview

When a bug persists despite a previous fix attempt, **re-open the existing BR and task** rather than creating new ones. This approach:
- ✅ Reduces noise in the knowledge base
- ✅ Maintains continuity of bug history
- ✅ Keeps administrative overhead minimal
- ✅ Preserves context and lessons learned
- ✅ Avoids duplicate BR/task proliferation

---

## When to Re-open vs. Create New

### Re-open Existing BR/Task When:
- Bug persists despite previous fix attempt
- Previous fix was incomplete or incorrect
- Bug was marked "Fixed" but verification shows it's still present
- Same root cause, same component, same issue

### Create New BR/Task When:
- Different root cause
- Different component affected
- Different manifestation of bug
- Related but distinct issue

---

## Process: Re-opening a Bug Report

### Step 1: Update BR Status

Change the BR status from `ACCEPTED` or `FIXED` to `REOPENED`:

```markdown
**Status:** REOPENED
```

### Step 2: Add Re-opening Context

Add a new section or update existing sections with:
- Date of re-opening
- Why it was re-opened (bug still present)
- Current validation evidence
- Reference to previous fix attempt

**Example:**
```markdown
**REOPENED (2025-12-16):** Bug confirmed still present despite E2:S01:T06 being marked complete. 
Task needs to be re-opened and properly fixed.

**Current Validation Errors (2025-12-16):**
```
❌ VALIDATION FAILED:
  Changelog ordering violation: 0.4.6.4+1 appears before 0.4.6.3+1...
```
```

### Step 3: Update Fix Attempt History

Add a new entry to the "Fix Attempt History" section documenting:
- Previous attempt (version, date)
- Why it didn't work
- Lessons learned
- What needs to be done differently

**Example:**
```markdown
#### Attempt 2: E2:S01:T06 (v0.2.1.6+2) - 2025-12-09 → REOPENED 2025-12-16

**Fix Description:**
Previous attempt marked complete but bug persists.

**Result:**
- [x] Bug Not Fixed (task marked complete but bug still present)

**Lessons Learned:**
- Task was marked complete but bug persists
- Need to verify fix actually works before marking complete
- Need to test against actual Keep a Changelog format

**Next Steps:**
- Review what was actually implemented
- Implement proper fix
- Verify fix works before marking complete
```

### Step 4: Update Affected Projects/Examples

Add current examples showing the bug is still present:

```markdown
**Affected Projects:**
- `been-there` (identified the issue)
- `ai-dev-kit` (bug confirmed still present 2025-12-16)
- Any project using Keep a Changelog format...
```

---

## Process: Re-opening a Task

### Step 1: Update Task Status in Story Checklist

Change task status from `✅ COMPLETE` to `🔄 REOPENED`:

```markdown
- [ ] **E2:S01:T06 – Fix changelog validator ordering bug** 🔄 REOPENED (v0.2.1.6+2 → v0.2.1.8+1 – Bug persists, re-opening with new context)
```

### Step 2: Update Task Section

Add reopening context to the task section:

```markdown
**Status:** 🔄 **REOPENED** (2025-12-16) - Previous attempt (v0.2.1.6+2) marked complete but bug persists

**Previous Attempt (v0.2.1.6+2):**
- Task was marked complete but bug still present
- Validator still only accepts canonical ordering
- Need to review what was actually implemented and fix properly
```

### Step 3: Update Version

Increment the task version to reflect reopening:

- Previous: `v0.2.1.6+2` (last complete attempt)
- New: `v0.2.1.8+1` (reopened with new context)

Update version file:
```python
VERSION_TASK = 8      # Task number (Task 8: Re-open T06 - Fix changelog validator ordering bug properly)
VERSION_BUILD = 1     # Build number (E2:S01:T08 - Task 6 reopened: Changelog validator ordering bug persists)
```

### Step 4: Add Current Evidence

Document current validation errors or evidence showing bug persists:

```markdown
**Current Validation Errors (2025-12-16):**
```
❌ VALIDATION FAILED:
  Changelog ordering violation: 0.4.6.4+1 appears before 0.4.6.3+1...
```
```

---

## Version Numbering for Re-opened Tasks

When re-opening a task:
- **Keep the same Task number** (don't create T08 if T06 exists)
- **Increment to next available Task number** only if creating a new task
- **Use new BUILD number** to track the reopening

**Example:**
- Original: `E2:S01:T06` (v0.2.1.6+2) - marked complete
- Reopened: `E2:S01:T06` → becomes `E2:S01:T08` (v0.2.1.8+1) - reopened

**OR** (if keeping same task number):
- Original: `E2:S01:T06` (v0.2.1.6+2) - marked complete  
- Reopened: `E2:S01:T06` (v0.2.1.6+3) - reopened

**Decision:** Use next available task number to clearly distinguish reopening, but document the relationship.

---

## Documentation Updates

### Update Story Document

- Update task checklist with reopening status
- Update "Last updated" field
- Add reopening context to task section

### Update Epic Document

- Update story status if needed
- Update "Last updated" field
- Note task reopening in story checklist

### Update Version File

- Update version to reflect new task/build
- Add comment explaining reopening

---

## Best Practices

1. **Always document why:** Explain why the bug persists despite previous fix
2. **Reference previous attempts:** Link to previous fix attempts in BR
3. **Add current evidence:** Include validation errors, test results, etc.
4. **Update all related docs:** BR, Task, Story, Epic, Version file
5. **Preserve history:** Don't delete previous attempts, add to history
6. **Verify before closing:** Ensure fix actually works before marking complete again

---

## Anti-Patterns to Avoid

❌ **Don't create duplicate BRs** for the same bug  
❌ **Don't delete previous fix attempts** - preserve history  
❌ **Don't skip verification** - verify fix works before marking complete  
❌ **Don't ignore lessons learned** - document what went wrong  
❌ **Don't create new task numbers** unnecessarily - reuse when appropriate

---

## Example: BR-002 Re-opening

See [`BR-002-changelog-validator-ordering-bug.md`](BR-002-changelog-validator-ordering-bug.md) for a complete example of:
- Status change to REOPENED
- Updated context and evidence
- Fix attempt history with reopening
- Updated affected projects
- **Bidirectional linking:** BR links to Task, Task links back to BR

---

## Example: Task Re-opening

See [`docs/project-management/kanban/epics/Epic-2/Story-001-rw-agent-execution-and-docs.md`](../epics/Epic-2/Story-001-rw-agent-execution-and-docs.md) Task T06 for an example of:
- Task checklist update with reopening status
- Task section with reopening context
- Previous attempt documentation
- Current validation errors
- **Bidirectional linking:** Task links to BR, BR links back to Task

---

## Related Documentation

- [BIDIRECTIONAL_WIRING_PRINCIPLE.md](BIDIRECTIONAL_WIRING_PRINCIPLE.md) - Principle for bidirectional linking between BR/FR, Tasks, and documentation
- [USE_CASE_METHODOLOGY.md](../../../knowledge/USE_CASE_METHODOLOGY.md) - Use case methodology (includes discovered use cases)
- [UC-D-001: Re-opening BRs/Tasks](../../../knowledge/use-cases/discovered/UC-D-001-reopening-br-tasks.md) - Discovered use case for this pattern
- `BR_TEMPLATE.md` - Bug Report template
- `docs/project-management/kanban/fr-br/BR-002-changelog-validator-ordering-bug.md` - Example reopened BR
- `docs/project-management/kanban/epics/Epic-2/Story-001-rw-agent-execution-and-docs.md` - Example reopened task

---

**Template Usage:**
- This guide is part of the Kanban Framework
- Use this process when bugs persist despite fix attempts
- Keep the knowledge base clean and maintainable

---

_This guide is part of the Kanban Framework. See `packages/frameworks/kanban/` for complete framework documentation._
