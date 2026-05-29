---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:01:50Z
expires_at: null
housekeeping_policy: keep
---

# Core Versioning Scenarios

**Task:** E3:S02:T01 – Define core versioning scenarios for the cookbook  
**Date:** 2025-12-03  
**Status:** ✅ COMPLETE  
**Version:** v0.3.2.1+1

---

## Executive Summary

This document defines the **core versioning scenarios** that will be covered in the versioning cookbook. Each scenario describes the context, expected version behaviour, and interactions with Kanban and Release Workflow (RW).

**Scenarios Identified:**
1. **New Epic** – Starting a new epic from scratch
2. **New Story Under Existing Epic** – Adding a story to an existing epic
3. **New Task Under Existing Story** – Adding a task to an existing story
4. **Bugfix/Hotfix on Existing Task** – Fixing issues in completed or in-progress tasks
5. **Parallel Epics and Stories** – Working on multiple epics/stories simultaneously
6. **Task Transitions** – Moving from one task to another within a story
7. **Story Completion** – Completing all tasks in a story
8. **Epic Completion** – Completing all stories in an epic

---

## 1. New Epic

### Context

Starting a completely new epic that has no prior work in the repository.

**Example:** Creating Epic 5 for "Documentation Framework" when Epics 1-4 already exist.

### Expected Version Behaviour

**Initial Version:**
- `RC`: `0` (development)
- `EPIC`: New epic number (e.g., `5`)
- `STORY`: `1` (first story in epic)
- `TASK`: `1` (first task in first story)
- `BUILD`: `1` (first build)

**Version Example:** `0.5.1.1+1`

**Version File Update:**
```python
VERSION_RC = 0
VERSION_EPIC = 5      # New epic number
VERSION_STORY = 1      # First story
VERSION_TASK = 1       # First task
VERSION_BUILD = 1      # First build
```

### Kanban/RW Interactions

**Kanban:**
- Create new Epic document (`Epic-5.md`)
- Create first Story document (`Story-001-*.md`)
- Create first Task in story checklist
- Update Kanban board to include new epic

**RW:**
- RW detects new epic (EPIC component changed)
- Creates new changelog entry with epic context
- Updates Kanban Epic document with version marker
- Updates Kanban Story document with version marker

**Branch Strategy:**
- Create branch: `epic/5-{epic-title}`
- All work for Epic 5 happens on this branch

---

## 2. New Story Under Existing Epic

### Context

Adding a new story to an existing epic that already has one or more stories.

**Example:** Adding Story 2 to Epic 3 when Story 1 already exists and may be complete.

### Expected Version Behaviour

**Initial Version:**
- `RC`: `0` (development, unless epic is in RC phase)
- `EPIC`: Existing epic number (unchanged)
- `STORY`: Next story number (e.g., if Story 1 exists, Story 2)
- `TASK`: `1` (first task in new story)
- `BUILD`: `1` (first build)

**Version Example:** `0.3.2.1+1` (Epic 3, Story 2, Task 1, Build 1)

**Previous Version Context:**
- If last work was `0.3.1.6+3` (Epic 3, Story 1, Task 6, Build 3)
- New story starts at `0.3.2.1+1` (STORY increments, TASK resets to 1, BUILD resets to 1)

**Version File Update:**
```python
VERSION_RC = 0
VERSION_EPIC = 3      # Existing epic (unchanged)
VERSION_STORY = 2     # New story number
VERSION_TASK = 1      # First task in new story
VERSION_BUILD = 1     # First build
```

### Kanban/RW Interactions

**Kanban:**
- Create new Story document (`Story-002-*.md`) under existing epic
- Create first Task in story checklist
- Update Epic document to include new story
- Update Kanban board

**RW:**
- RW detects story progression (STORY component changed)
- Creates changelog entry with story context
- Updates Epic document with story reference
- Updates Story document with version marker

**Branch Strategy:**
- Continue on epic branch: `epic/3-{epic-title}`
- Story work happens sequentially or in parallel (see Scenario 5)

---

## 3. New Task Under Existing Story

### Context

Adding a new task to an existing story that already has one or more tasks.

**Example:** Adding Task 2 to Story 1 when Task 1 is complete.

### Expected Version Behaviour

**Initial Version:**
- `RC`: `0` (development, unless story/epic is in RC phase)
- `EPIC`: Existing epic number (unchanged)
- `STORY`: Existing story number (unchanged)
- `TASK`: Next task number (e.g., if Task 1 exists, Task 2)
- `BUILD`: `1` (resets to 1 for new task)

**Version Example:** `0.3.1.2+1` (Epic 3, Story 1, Task 2, Build 1)

**Previous Version Context:**
- If last work was `0.3.1.1+5` (Epic 3, Story 1, Task 1, Build 5)
- New task starts at `0.3.1.2+1` (TASK increments, BUILD resets to 1)

**Version File Update:**
```python
VERSION_RC = 0
VERSION_EPIC = 3      # Existing epic (unchanged)
VERSION_STORY = 1     # Existing story (unchanged)
VERSION_TASK = 2      # New task number
VERSION_BUILD = 1     # Reset to 1 for new task
```

### Kanban/RW Interactions

**Kanban:**
- Add new Task to story checklist
- Update Story document with new task
- Task may be created from FR/BR intake (see Epic 4 Story 2)

**RW:**
- **CRITICAL:** RW Step 2 detects task transition when `VERSION_TASK` in `version.py` differs from active Task in Story document
- RW automatically updates `VERSION_TASK` to new task number
- RW resets `VERSION_BUILD` to 1
- Creates changelog entry with task context
- Updates Story document with task completion marker

**Branch Strategy:**
- Continue on epic branch: `epic/3-{epic-title}`
- Task work happens sequentially within story

---

## 4. Bugfix/Hotfix on Existing Task

### Context

Fixing a bug or issue in a task that is either:
- **In Progress:** Task is currently being worked on
- **Completed:** Task was marked complete but bug discovered later

**Example:** Fixing a bug discovered in Task 3 after it was completed and released as `v0.3.1.3+1`.

### Expected Version Behaviour

**For In-Progress Task:**
- `RC`: `0` (development)
- `EPIC`: Existing epic number (unchanged)
- `STORY`: Existing story number (unchanged)
- `TASK`: Existing task number (unchanged)
- `BUILD`: Increment from previous build

**Version Example:** `0.3.1.3+2` (Epic 3, Story 1, Task 3, Build 2)

**For Completed Task (Hotfix):**
- Same version components as original task
- `BUILD`: Increment from last build of that task

**Version Example:** If Task 3 was completed at `0.3.1.3+1`, hotfix is `0.3.1.3+2`

**Version File Update:**
```python
VERSION_RC = 0
VERSION_EPIC = 3      # Existing epic (unchanged)
VERSION_STORY = 1     # Existing story (unchanged)
VERSION_TASK = 3      # Existing task (unchanged)
VERSION_BUILD = 2     # Increment from previous build
```

### Kanban/RW Interactions

**Kanban:**
- If task is in progress: No Kanban changes needed
- If task is completed: Reopen task or create new "Bugfix" task under same story
- Update Story document with bugfix context

**RW:**
- **CRITICAL:** RW Step 3 requires fix verification before marking as "Fixed"
- Unverified fixes must be logged as "Attempted fix" in changelog
- Only verified fixes can be marked as "Fixed"
- RW creates changelog entry with fix context
- Updates Story document with fix verification status

**Verification Requirements:**
- Fix must be verified through testing (test suite or manual test)
- Verification method must be documented
- Changelog format distinguishes "Fixed" vs "Attempted fix"

**Branch Strategy:**
- Continue on epic branch: `epic/3-{epic-title}`
- Hotfixes may use dedicated hotfix branch if needed

---

## 5. Parallel Epics and Stories

### Context

Working on multiple epics or stories simultaneously, where work happens in parallel branches and may be merged out of chronological order.

**Example:** 
- Epic 3 work happening on `epic/3-*` branch
- Epic 4 work happening on `epic/4-*` branch
- Both branches merged to `main` at different times

### Expected Version Behaviour

**Each Epic Maintains Independent Version Stream:**
- Epic 3: `0.3.S.T+B` (e.g., `0.3.1.1+1`, `0.3.1.2+1`, `0.3.2.1+1`)
- Epic 4: `0.4.S.T+B` (e.g., `0.4.1.1+1`, `0.4.2.1+1`, `0.4.2.2+1`)

**Version Ordering:**
- Versions are ordered **canonically by version number**, not by commit timestamp
- `0.3.1.2+1` comes before `0.4.1.1+1` in changelog, regardless of when they were committed
- `0.4.2.1+1` comes after `0.3.1.2+1` but before `0.4.2.2+1`

**Version File Update:**
- Each epic branch maintains its own version context
- When switching between epics, `version.py` reflects the active epic's context

### Kanban/RW Interactions

**Kanban:**
- Each epic has its own Epic document and stories
- Kanban board shows all epics in parallel
- Stories within epics can progress independently

**RW:**
- RW validates version matches branch context (Epic 3 work on `epic/3-*` branch)
- RW creates changelog entries ordered by version number (canonical ordering)
- RW updates appropriate Epic/Story documents based on version components
- No conflicts between parallel epic versions

**Branch Strategy:**
- Each epic uses its own branch: `epic/\{N\}-{epic-title}`
- Branches merge to `main` independently
- Version ordering in changelog is independent of merge order

---

## 6. Task Transitions

### Context

Moving from one task to another within the same story, where the previous task is complete and a new task is starting.

**Example:** Completing Task 1 (`0.3.1.1+3`) and starting Task 2 (`0.3.1.2+1`).

### Expected Version Behaviour

**Transition Rules:**
- `EPIC`: Unchanged
- `STORY`: Unchanged
- `TASK`: Increment to next task number
- `BUILD`: Reset to 1

**Version Example:**
- Previous: `0.3.1.1+3` (Epic 3, Story 1, Task 1, Build 3)
- Next: `0.3.1.2+1` (Epic 3, Story 1, Task 2, Build 1)

**Version File Update:**
```python
VERSION_RC = 0
VERSION_EPIC = 3      # Unchanged
VERSION_STORY = 1     # Unchanged
VERSION_TASK = 2      # Increment to next task
VERSION_BUILD = 1     # Reset to 1
```

### Kanban/RW Interactions

**Kanban:**
- Mark previous task as complete in Story checklist
- Add new task to Story checklist
- Update Story document with task completion marker

**RW:**
- **CRITICAL:** RW Step 2 detects task transition automatically
- RW compares `VERSION_TASK` in `version.py` with active Task in Story document
- If mismatch detected, RW updates `VERSION_TASK` to new task number
- RW resets `VERSION_BUILD` to 1
- RW creates changelog entry for task transition
- RW updates Story document with both task completion and new task start markers

**Common Mistakes to Avoid:**
- ❌ Forgetting to update `VERSION_TASK` when moving to new task
- ❌ Forgetting to reset `VERSION_BUILD` to 1
- ❌ Manually updating `VERSION_TASK` without RW detection (RW should handle this)

---

## 7. Story Completion

### Context

Completing all tasks in a story, marking the story as complete.

**Example:** Completing Story 1 in Epic 3 after Tasks 1-5 are all complete.

### Expected Version Behaviour

**Final Task in Story:**
- Complete last task (e.g., `0.3.1.5+2`)
- Story marked as COMPLETE

**Next Story (if exists):**
- Start Story 2: `0.3.2.1+1` (STORY increments, TASK resets to 1, BUILD resets to 1)

**Version File Update:**
- When starting next story:
```python
VERSION_RC = 0
VERSION_EPIC = 3      # Unchanged
VERSION_STORY = 2     # Increment to next story
VERSION_TASK = 1      # Reset to 1 (first task)
VERSION_BUILD = 1     # Reset to 1
```

### Kanban/RW Interactions

**Kanban:**
- Mark all tasks as complete in Story checklist
- Mark Story as COMPLETE in Story document
- Update Epic document to mark story as complete
- Update Kanban board

**RW:**
- RW creates final changelog entry for last task
- RW updates Story document with COMPLETE status
- RW updates Epic document with story completion marker
- When starting next story, RW handles story transition (see Scenario 2)

**Forensic Markers:**
- Story completion marked with: `✅ COMPLETE (v0.3.1.5+2)`
- Epic document updated with story completion reference

---

## 8. Epic Completion

### Context

Completing all stories in an epic, marking the epic as complete.

**Example:** Completing Epic 3 after Stories 1-3 are all complete.

### Expected Version Behaviour

**Final Story in Epic:**
- Complete last story (e.g., Story 3, Task 5: `0.3.3.5+1`)
- Epic marked as COMPLETE

**Next Epic (if exists):**
- Start Epic 5: `0.5.1.1+1` (EPIC increments, STORY resets to 1, TASK resets to 1, BUILD resets to 1)

**Version File Update:**
- When starting next epic:
```python
VERSION_RC = 0
VERSION_EPIC = 5      # Increment to next epic
VERSION_STORY = 1     # Reset to 1 (first story)
VERSION_TASK = 1      # Reset to 1 (first task)
VERSION_BUILD = 1     # Reset to 1
```

### Kanban/RW Interactions

**Kanban:**
- Mark all stories as complete in Epic document
- Mark Epic as COMPLETE
- Update Kanban board to show epic completion

**RW:**
- RW creates final changelog entry for last task of last story
- RW updates Epic document with COMPLETE status
- RW updates Kanban board
- When starting next epic, RW handles epic transition (see Scenario 1)

**Forensic Markers:**
- Epic completion marked with: `✅ COMPLETE (v0.3.3.5+1)`
- Kanban board updated with epic completion status

---

## 9. Scenario Summary Table

| Scenario | EPIC | STORY | TASK | BUILD | Example Version |
|----------|------|-------|------|-------|-----------------|
| **New Epic** | New | 1 | 1 | 1 | `0.5.1.1+1` |
| **New Story** | Same | Increment | 1 | 1 | `0.3.2.1+1` |
| **New Task** | Same | Same | Increment | 1 | `0.3.1.2+1` |
| **Bugfix (In-Progress)** | Same | Same | Same | Increment | `0.3.1.3+2` |
| **Bugfix (Completed)** | Same | Same | Same | Increment | `0.3.1.3+2` |
| **Task Transition** | Same | Same | Increment | 1 | `0.3.1.2+1` |
| **Story Completion** | Same | Increment (next) | 1 | 1 | `0.3.2.1+1` |
| **Epic Completion** | Increment (next) | 1 | 1 | 1 | `0.5.1.1+1` |

---

## 10. Validation Against Policies

### Framework Policy Alignment

✅ **All scenarios align with `packages/frameworks/numbering & versioning/versioning-policy.md`:**
- RC.EPIC.STORY.TASK+BUILD schema followed
- BUILD increments within task
- TASK/STORY/EPIC progression rules followed
- Parallel development supported

### Dev-Kit Policy Alignment

✅ **All scenarios align with `docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md`:**
- Dev-kit epic ranges (1-4+) respected
- Task-driven versioning enforced
- Kanban → Version mapping followed
- RW integration requirements met

### Integration Alignment

✅ **All scenarios align with integration docs:**
- Kanban → Versioning integration (Epic 4 Story 3)
- Versioning → RW integration (Epic 4 Story 3)
- RW → Kanban integration (Epic 4 Story 3)

---

## 11. Next Steps

These scenarios will be used in **T002** to create worked examples in the versioning cookbook:

1. **T002:** Create versioning cookbook document with worked examples for each scenario
2. **T003:** Add cross-framework examples (Kanban + Versioning + RW)
3. **T004:** Document edge cases and anti-patterns
4. **T005:** Create quick reference summary

---

## 12. References

- `packages/frameworks/numbering & versioning/versioning-policy.md` – Framework versioning policy
- `packages/frameworks/numbering & versioning/versioning-strategy.md` – Versioning strategy
- `docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md` – Dev-kit versioning policy
- `docs/architecture/standards-and-adrs/dev-kit-kanban-versioning-rw-integration.md` – Integration guide
- `docs/project-management/kanban/Story-003-kanban-versioning-rw-integration.md` – Integration validation

---

_End of Core Versioning Scenarios Document_

