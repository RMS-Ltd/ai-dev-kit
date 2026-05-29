---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:01:47Z
expires_at: null
housekeeping_policy: keep
---

# Versioning Cookbook

**Task:** E3:S02:T02 – Create versioning cookbook document with worked examples  
**Date:** 2025-12-03  
**Status:** ✅ COMPLETE  
**Version:** v0.3.2.3+1

**Based on Framework:** This cookbook is a dev-kit specialisation providing worked examples for the versioning schema defined in the Numbering & Versioning framework. For the canonical schema definition and strategy, see:
- `packages/frameworks/numbering & versioning/versioning-policy.md` (primary SoT)
- `packages/frameworks/numbering & versioning/versioning-strategy.md` (comprehensive strategy)

---

## Executive Summary

This cookbook provides **practical, worked examples** for using the `RC.EPIC.STORY.TASK+BUILD` versioning schema. Each example shows:

- **Before/after version** transitions
- **Kanban context** (Epic/Story/Task)
- **RW perspective** (how Release Workflow interprets and handles the version)
- **Real dev-kit examples** where available

**Target Audience:**
- Developers adopting the versioning framework
- AI agents executing Release Workflow
- Project maintainers managing version progression

**Safe to Copy:** All examples are **project-agnostic** and safe to copy into other projects.

---

### How to Read Versions in This Cookbook

The examples focus on the **internal version** (`RC.EPIC.STORY.TASK+BUILD`) because it drives Kanban, RW, and traceability. When presenting versions:

- For **external audiences** (README, GitHub releases, package managers), prefer the **SemVer release version first**, optionally followed by the internal version, for example:  
  - `v0.3.19+2 (internal: v0.6.7.101+2)`.
- For **internal reasoning** (Kanban docs, workflow behaviour, forensic questions), use the internal version directly.

Where helpful, you can imagine each worked example also having a matching SemVer tag derived via the mapping in the framework and dev-kit policies, and optionally including metadata like `+rc.<RC>.e<EPIC>.s<STORY>.t<TASK>.b<BUILD>` when you need machine-parseable coordinates.

## Table of Contents

- **[Quick Reference](versioning-quick-reference.md)** - 1-2 page summary for quick lookup ⚡

1. [New Epic](#1-new-epic)
2. [New Story Under Existing Epic](#2-new-story-under-existing-epic)
3. [New Task Under Existing Story](#3-new-task-under-existing-story)
4. [Bugfix/Hotfix on Existing Task](#4-bugfixhotfix-on-existing-task)
5. [Parallel Epics and Stories](#5-parallel-epics-and-stories)
6. [Task Transitions](#6-task-transitions)
7. [Story Completion](#7-story-completion)
8. [Epic Completion](#8-epic-completion)
9. [Cross-Framework Examples](#9-cross-framework-examples)
   - [Example 1: FR → Task → Version → RW → Kanban Update](#example-1-fr--task--version--rw--kanban-update)
   - [Example 2: Bugfix with Verification Requirement](#example-2-bugfix-with-verification-requirement)
   - [Example 3: Parallel Epic/Story Work](#example-3-parallel-epicstory-work)
10. [Edge Cases and Anti-Patterns](#10-edge-cases-and-anti-patterns)
   - [10.1 Anti-Pattern: BUILD Incremented Instead of TASK](#101-anti-pattern-build-incremented-instead-of-task)
   - [10.2 Edge Case: Task Renumbering](#102-edge-case-task-renumbering)
   - [10.3 Edge Case: Story Re-Parenting Between Epics](#103-edge-case-story-re-parenting-between-epics)
   - [10.4 Edge Case: Version Conflicts When Branches Diverge](#104-edge-case-version-conflicts-when-branches-diverge)
   - [10.5 Edge Case: Incorrect TASK Mapping in Version File](#105-edge-case-incorrect-task-mapping-in-version-file)
   - [10.6 Anti-Pattern: Using Standalone Task References](#106-anti-pattern-using-standalone-task-references)
   - [10.7 Edge Case: BUILD Number Overflow](#107-edge-case-build-number-overflow)
   - [10.8 Edge Case: Missing Version in Changelog](#108-edge-case-missing-version-in-changelog)
   - [10.9 Anti-Pattern: Version Number in Commit Message Doesn't Match Tag](#109-anti-pattern-version-number-in-commit-message-doesnt-match-tag)
   - [10.10 Edge Case: Parallel Epic Development Version Ordering](#1010-edge-case-parallel-epic-development-version-ordering)

---

## 1. New Epic

### Scenario

Starting a completely new epic that has no prior work in the repository.

**Example:** Creating Epic 5 for "Documentation Framework" when Epics 1-4 already exist.

### Worked Example

**Before:**
- Last version: `0.4.3.7+1` (Epic 4, Story 3, Task 7, Build 1)
- No Epic 5 exists yet

**After:**
- New version: `0.5.1.1+1` (Epic 5, Story 1, Task 1, Build 1)

### Version File Update

**Before (`version.py`):**
```python
VERSION_RC = 0
VERSION_EPIC = 4      # Previous epic
VERSION_STORY = 3
VERSION_TASK = 7
VERSION_BUILD = 1
```

**After (`version.py`):**
```python
VERSION_RC = 0
VERSION_EPIC = 5      # NEW: Increment to new epic
VERSION_STORY = 1      # NEW: Reset to first story
VERSION_TASK = 1       # NEW: Reset to first task
VERSION_BUILD = 1      # NEW: Reset to first build
```

### Kanban Context

**Epic Document:** `docs/project-management/kanban/epics/Epic-5/Epic-5.md`
```markdown
# Epic 5: Documentation Framework

**Status:** IN PROGRESS
**Version Schema:** `0.5.S.T+B`

## Story Checklist
- [ ] **E5:S01 – Framework Documentation Structure** - TODO
```

**Story Document:** `docs/project-management/kanban/epics/Epic-5/Story-001-*.md`
```markdown
# Story 001 – Framework Documentation Structure

**Status:** IN PROGRESS
**Epic:** Epic 5
**Story:** Story 1

## Task Checklist
- [ ] **E5:S01:T01 – Define documentation structure** - TODO
```

### RW Perspective

**RW Step 1: Branch Safety Check**
- Validates branch: `epic/5-documentation-framework`
- Validates version matches: `0.5.1.1+1` matches Epic 5

**RW Step 2: Bump Version**
- Detects new epic (EPIC changed from 4 to 5)
- Confirms STORY=1, TASK=1, BUILD=1 (all reset)

**RW Step 3: Create Detailed Changelog**
- Creates: `CHANGELOG_v0.5.1.1+1.md`
- Includes Epic 5 context

**RW Step 6: Auto-update Kanban Docs**
- Updates Epic-5.md with version marker
- Updates Story-001-*.md with version marker

### Real Dev-Kit Example

**Epic 1 Start:**
- First version: `0.1.1.1+1` (Epic 1, Story 1, Task 1)
- See: `docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.1.1.1+1.md`

---

## 2. New Story Under Existing Epic

### Scenario

Adding a new story to an existing epic that already has one or more stories.

**Example:** Adding Story 2 to Epic 3 when Story 1 already exists and is complete.

### Worked Example

**Before:**
- Last version: `0.3.1.6+1` (Epic 3, Story 1, Task 6, Build 1)
- Story 1 is COMPLETE

**After:**
- New version: `0.3.2.1+1` (Epic 3, Story 2, Task 1, Build 1)

### Version File Update

**Before (`version.py`):**
```python
VERSION_RC = 0
VERSION_EPIC = 3
VERSION_STORY = 1      # Previous story
VERSION_TASK = 6
VERSION_BUILD = 1
```

**After (`version.py`):**
```python
VERSION_RC = 0
VERSION_EPIC = 3       # Unchanged
VERSION_STORY = 2      # NEW: Increment to next story
VERSION_TASK = 1       # NEW: Reset to first task
VERSION_BUILD = 1      # NEW: Reset to first build
```

### Kanban Context

**Epic Document:** `docs/project-management/kanban/epics/Epic-3/Epic-3.md`
```markdown
## Story Checklist
- [x] **E3:S01 – Dev Kit Alignment with Versioning Framework** - COMPLETE ✅ (v0.3.1.6+1)
- [ ] **E3:S02 – Versioning Cookbook & Examples** - IN PROGRESS
```

**Story Document:** `docs/project-management/kanban/epics/Epic-3/Story-002-*.md`
```markdown
# Story 002 – Versioning Cookbook & Examples

**Status:** COMPLETE ✅
**Epic:** Epic 3
**Story:** Story 2

## Task Checklist
- [x] **E3:S02:T01 – Define core versioning scenarios** - COMPLETE ✅ (v0.3.2.1+1)
```

### RW Perspective

**RW Step 1: Branch Safety Check**
- Validates branch: `epic/3-numbering-and-versioning-framework`
- Validates version matches: `0.3.2.1+1` matches Epic 3

**RW Step 2: Bump Version**
- Detects story progression (STORY changed from 1 to 2)
- Confirms TASK=1, BUILD=1 (both reset)

**RW Step 3: Create Detailed Changelog**
- Creates: `CHANGELOG_v0.3.2.1+1.md`
- Includes Epic 3, Story 2 context

**RW Step 6: Auto-update Kanban Docs**
- Updates Epic-3.md with Story 2 reference
- Updates Story-002-*.md with version marker

### Real Dev-Kit Example

**Epic 1 Story Progression:**
- Story 1: `0.1.1.1+1` → `0.1.1.1+2`
- Story 2: `0.1.2.1+1` → `0.1.2.5+1`
- Story 3: `0.1.3.1+1` → `0.1.3.6+1`
- See: `docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.1.2.1+1.md`

---

## 3. New Task Under Existing Story

### Scenario

Adding a new task to an existing story that already has one or more tasks.

**Example:** Completing Task 1 (`0.3.1.1+3`) and starting Task 2 (`0.3.1.2+1`).

### Worked Example

**Before:**
- Last version: `0.3.1.1+3` (Epic 3, Story 1, Task 1, Build 3)
- Task 1 is COMPLETE

**After:**
- New version: `0.3.1.2+1` (Epic 3, Story 1, Task 2, Build 1)

### Version File Update

**Before (`version.py`):**
```python
VERSION_RC = 0
VERSION_EPIC = 3
VERSION_STORY = 1
VERSION_TASK = 1       # Previous task
VERSION_BUILD = 3      # Previous build
```

**After (`version.py`):**
```python
VERSION_RC = 0
VERSION_EPIC = 3       # Unchanged
VERSION_STORY = 1      # Unchanged
VERSION_TASK = 2       # NEW: Increment to next task
VERSION_BUILD = 1      # NEW: Reset to 1 for new task
```

### Kanban Context

**Story Document:** `docs/project-management/kanban/epics/Epic-3/Story-001-*.md`
```markdown
## Task Checklist
- [x] **E3:S01:T01 – Review dev-kit versioning policy vs framework policy** ✅ COMPLETE (v0.3.1.1+2)
- [x] **E3:S01:T02 – Ingest versioning findings from fynd.deals Epic 15 work** ✅ COMPLETE (v0.3.1.2+1)
```

### RW Perspective

**RW Step 1: Branch Safety Check**
- Validates branch: `epic/3-numbering-and-versioning-framework`
- Validates version matches: `0.3.1.2+1` matches Epic 3, Story 1

**RW Step 2: Bump Version**
- **CRITICAL:** Detects task transition
- Compares `VERSION_TASK` in `version.py` (currently 1) with active Task in Story document (Task 2)
- **Automatically updates** `VERSION_TASK` to 2
- **Automatically resets** `VERSION_BUILD` to 1
- This is the **automatic task transition handling**

**RW Step 3: Create Detailed Changelog**
- Creates: `CHANGELOG_v0.3.1.2+1.md`
- Includes Epic 3, Story 1, Task 2 context

**RW Step 6: Auto-update Kanban Docs**
- Updates Story document with Task 1 completion marker: `✅ COMPLETE (v0.3.1.1+3)`
- Updates Story document with Task 2 start marker

### Real Dev-Kit Example

**Epic 1 Story 2 Task Progression:**
- Task 1: `0.1.2.1+1`
- Task 2: `0.1.2.2+1`
- Task 3: `0.1.2.3+1`
- Task 4: `0.1.2.4+1`
- Task 5: `0.1.2.5+1`
- See: `docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.1.2.2+1.md`

---

## 4. Bugfix/Hotfix on Existing Task

### Scenario

Fixing a bug or issue in a task that is either in progress or completed.

**Example:** Fixing a bug discovered in Task 3 after it was completed and released as `v0.3.1.3+1`.

### Worked Example: In-Progress Task Bugfix

**Before:**
- Current version: `0.3.1.3+1` (Epic 3, Story 1, Task 3, Build 1)
- Bug discovered while Task 3 is still in progress

**After:**
- Fixed version: `0.3.1.3+2` (Epic 3, Story 1, Task 3, Build 2)

### Version File Update

**Before (`version.py`):**
```python
VERSION_RC = 0
VERSION_EPIC = 3
VERSION_STORY = 1
VERSION_TASK = 3
VERSION_BUILD = 1      # Previous build
```

**After (`version.py`):**
```python
VERSION_RC = 0
VERSION_EPIC = 3       # Unchanged
VERSION_STORY = 1      # Unchanged
VERSION_TASK = 3       # Unchanged (same task)
VERSION_BUILD = 2      # Increment build number
```

### Worked Example: Completed Task Hotfix

**Before:**
- Completed version: `0.3.1.3+1` (Epic 3, Story 1, Task 3, Build 1)
- Task 3 marked COMPLETE
- Bug discovered later

**After:**
- Hotfix version: `0.3.1.3+2` (Epic 3, Story 1, Task 3, Build 2)

**Version File Update:** Same as in-progress bugfix (BUILD increments)

### Kanban Context

**Story Document:**
```markdown
## Task Checklist
- [x] **E3:S01:T03 – Update dev-kit versioning policy as canonical SoT** ✅ COMPLETE (v0.3.1.3+1)
  - Bugfix: Fixed policy reference issue ✅ COMPLETE (v0.3.1.3+2)
```

### RW Perspective

**RW Step 1: Branch Safety Check**
- Validates branch: `epic/3-numbering-and-versioning-framework`
- Validates version matches: `0.3.1.3+2` matches Epic 3, Story 1, Task 3

**RW Step 2: Bump Version**
- Detects same task (TASK unchanged)
- Increments BUILD from 1 to 2

**RW Step 3: Create Detailed Changelog**
- **CRITICAL:** RW Step 3 requires fix verification
- If fix is **verified** (tested):
  ```markdown
  ### Fixed
  - Fixed policy reference issue in versioning policy
  ```
- If fix is **unverified** (not yet tested):
  ```markdown
  ### Attempted Fixes
  - Attempted fix: Policy reference issue (verification pending)
  ```
- RW **stops** if unverified fixes are marked as "Fixed"

**RW Step 6: Auto-update Kanban Docs**
- Updates Story document with bugfix marker
- Includes verification status

### Real Dev-Kit Example

**Epic 4 Story 3 Task 2 Bugfix:**
- Original: `0.4.3.2+1` (Task 2 complete)
- Bugfix: `0.4.3.2+2` (Critical issue resolution)
- See: `docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.4.3.2+2.md`

---

## 5. Parallel Epics and Stories

### Scenario

Working on multiple epics or stories simultaneously, where work happens in parallel branches and may be merged out of chronological order.

**Example:** 
- Epic 3 work on `epic/3-*` branch
- Epic 4 work on `epic/4-*` branch
- Both branches merged to `main` at different times

### Worked Example

**Epic 3 Branch:**
- Work: `0.3.1.1+1`, `0.3.1.2+1`, `0.3.2.1+1`
- Merged to `main` on 2025-12-03

**Epic 4 Branch:**
- Work: `0.4.1.1+1`, `0.4.2.1+1`, `0.4.3.1+1`
- Merged to `main` on 2025-12-02 (earlier than Epic 3)

### Version File Update

**On Epic 3 Branch (`epic/3-*`):**
```python
VERSION_RC = 0
VERSION_EPIC = 3       # Epic 3 context
VERSION_STORY = 2
VERSION_TASK = 1
VERSION_BUILD = 1
```

**On Epic 4 Branch (`epic/4-*`):**
```python
VERSION_RC = 0
VERSION_EPIC = 4       # Epic 4 context
VERSION_STORY = 3
VERSION_TASK = 1
VERSION_BUILD = 1
```

### Kanban Context

**Kanban Board:** Shows both epics in parallel
```markdown
### Epic 3: Numbering & Versioning Framework
**Status:** IN PROGRESS
- Story 1: COMPLETE ✅
- Story 2: IN PROGRESS

### Epic 4: Kanban Framework
**Status:** COMPLETE ✅
- Story 1: COMPLETE ✅
- Story 2: COMPLETE ✅
- Story 3: COMPLETE ✅
```

### RW Perspective

**RW Step 1: Branch Safety Check**
- Epic 3 branch: Validates `0.3.2.1+1` matches `epic/3-*` branch
- Epic 4 branch: Validates `0.4.3.1+1` matches `epic/4-*` branch
- **No conflicts** between parallel epic versions

**RW Step 3: Create Detailed Changelog**
- Each epic creates its own changelog entries
- Changelogs ordered **canonically by version number**, not by commit time

**Changelog Ordering (Canonical):**
```markdown
## [0.3.1.1+1] - 03-12-25    # Epic 3, Story 1, Task 1
## [0.3.1.2+1] - 03-12-25    # Epic 3, Story 1, Task 2
## [0.4.1.1+1] - 02-12-25    # Epic 4, Story 1, Task 1 (merged earlier, but ordered correctly)
## [0.4.2.1+1] - 02-12-25    # Epic 4, Story 2, Task 1
## [0.4.3.1+1] - 02-12-25    # Epic 4, Story 3, Task 1
## [0.3.2.1+1] - 03-12-25    # Epic 3, Story 2, Task 1 (merged later, but ordered correctly)
```

**Key Point:** Version numbers determine order, not timestamps.

### Real Dev-Kit Example

**Parallel Epic Development:**
- Epic 1: `0.1.1.1+1` → `0.1.3.6+1` (completed)
- Epic 2: `0.2.1.1+2` → `0.2.1.1+5` (completed)
- Epic 3: `0.3.1.1+1` → `0.3.2.1+1` (in progress)
- Epic 4: `0.4.1.1+1` → `0.4.3.7+1` (completed)
- See: `CHANGELOG.md` for canonical ordering

---

## 6. Task Transitions

### Scenario

Moving from one task to another within the same story, where the previous task is complete and a new task is starting.

**Example:** Completing Task 1 (`0.3.1.1+3`) and starting Task 2 (`0.3.1.2+1`).

### Worked Example

**Before:**
- Last version: `0.3.1.1+3` (Epic 3, Story 1, Task 1, Build 3)
- Task 1 marked COMPLETE

**After:**
- New version: `0.3.1.2+1` (Epic 3, Story 1, Task 2, Build 1)

### Version File Update

**Before (`version.py`):**
```python
VERSION_RC = 0
VERSION_EPIC = 3
VERSION_STORY = 1
VERSION_TASK = 1       # Previous task
VERSION_BUILD = 3      # Previous build
```

**After (`version.py`):**
```python
VERSION_RC = 0
VERSION_EPIC = 3       # Unchanged
VERSION_STORY = 1      # Unchanged
VERSION_TASK = 2       # Increment to next task
VERSION_BUILD = 1      # Reset to 1 for new task
```

### Kanban Context

**Story Document:**
```markdown
## Task Checklist
- [x] **E3:S01:T01 – Review dev-kit versioning policy vs framework policy** ✅ COMPLETE (v0.3.1.1+2)
- [ ] **E3:S01:T02 – Ingest versioning findings from fynd.deals Epic 15 work** - TODO
```

### RW Perspective

**RW Step 1: Branch Safety Check**
- Validates branch: `epic/3-numbering-and-versioning-framework`
- **CRITICAL:** Validates `VERSION_TASK` in `version.py` matches active Task in Story document
- If mismatch detected: RW stops with clear error message

**RW Step 2: Bump Version**
- **CRITICAL:** RW Step 2 detects task transition automatically
- Compares `VERSION_TASK` in `version.py` (currently 1) with active Task in Story document (Task 2)
- **Automatically updates** `VERSION_TASK` to 2
- **Automatically resets** `VERSION_BUILD` to 1
- This ensures correct version progression

**RW Step 3: Create Detailed Changelog**
- Creates: `CHANGELOG_v0.3.1.2+1.md`
- Includes Task 1 completion context
- Includes Task 2 start context

**RW Step 6: Auto-update Kanban Docs**
- Updates Story document with Task 1 completion marker: `✅ COMPLETE (v0.3.1.1+3)`
- Updates Story document with Task 2 start marker

### Common Mistakes to Avoid

❌ **Manually updating `VERSION_TASK` without RW detection**
- Let RW handle task transitions automatically

❌ **Forgetting to reset `VERSION_BUILD` to 1**
- RW automatically resets BUILD when TASK changes

❌ **Starting new task with same BUILD number**
- BUILD must reset to 1 for new task

### Real Dev-Kit Example

**Epic 1 Story 3 Task Transitions:**
- Task 1: `0.1.3.1+1`
- Task 2: `0.1.3.2+1`
- Task 3: `0.1.3.3+1`
- Task 4: `0.1.3.4+1`
- Task 5: `0.1.3.5+1`
- Task 6: `0.1.3.6+1`
- See: `docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.1.3.2+1.md`

---

## 7. Story Completion

### Scenario

Completing all tasks in a story, marking the story as complete.

**Example:** Completing Story 1 in Epic 3 after Tasks 1-6 are all complete.

### Worked Example

**Before:**
- Last version: `0.3.1.6+1` (Epic 3, Story 1, Task 6, Build 1)
- All tasks in Story 1 are COMPLETE

**After:**
- Story 1 marked COMPLETE
- Next story (if exists): `0.3.2.1+1` (Epic 3, Story 2, Task 1, Build 1)

### Version File Update

**For Story Completion:**
- No version change needed (last task version remains: `0.3.1.6+1`)

**For Next Story:**
```python
VERSION_RC = 0
VERSION_EPIC = 3       # Unchanged
VERSION_STORY = 2      # Increment to next story
VERSION_TASK = 1       # Reset to first task
VERSION_BUILD = 1      # Reset to first build
```

### Kanban Context

**Epic Document:** `docs/project-management/kanban/epics/Epic-3/Epic-3.md`
```markdown
## Story Checklist
- [x] **E3:S01 – Dev Kit Alignment with Versioning Framework** - COMPLETE ✅ (v0.3.1.6+1)
- [x] **E3:S02 – Versioning Cookbook & Examples** - COMPLETE ✅ (v0.3.2.5+3)
```

**Story Document:** `docs/project-management/kanban/epics/Epic-3/Story-001-*.md`
```markdown
**Status:** COMPLETE ✅
**Completed:** 2025-12-02 (v0.3.1.6+1)

## Task Checklist
- [x] **E3:S01:T01** ✅ COMPLETE (v0.3.1.1+2)
- [x] **E3:S01:T02** ✅ COMPLETE (v0.3.1.2+1)
- [x] **E3:S01:T03** ✅ COMPLETE (v0.3.1.3+1)
- [x] **E3:S01:T04** ✅ COMPLETE (v0.3.1.4+1)
- [x] **E3:S01:T05** ✅ COMPLETE (v0.3.1.5+1)
- [x] **E3:S01:T06** ✅ COMPLETE (v0.3.1.6+1)
```

### RW Perspective

**RW Step 6: Auto-update Kanban Docs**
- Updates Story document with COMPLETE status
- Updates Epic document with story completion marker: `✅ COMPLETE (v0.3.1.6+1)`
- Updates Kanban board

**When Starting Next Story:**
- RW handles story transition (see Scenario 2)
- Version updates to `0.3.2.1+1`

### Real Dev-Kit Example

**Epic 1 Story Completion:**
- Story 1: Completed at `v0.1.1.1+2`
- Story 2: Completed at `v0.1.2.5+1`
- Story 3: Completed at `v0.1.3.6+1`
- See: `docs/project-management/kanban/epics/Epic-1/Epic-1.md`

---

## 8. Epic Completion

### Scenario

Completing all stories in an epic, marking the epic as complete.

**Example:** Completing Epic 4 after Stories 1-3 are all complete.

### Worked Example

**Before:**
- Last version: `0.4.3.7+1` (Epic 4, Story 3, Task 7, Build 1)
- All stories in Epic 4 are COMPLETE

**After:**
- Epic 4 marked COMPLETE
- Next epic (if exists): `0.5.1.1+1` (Epic 5, Story 1, Task 1, Build 1)

### Version File Update

**For Epic Completion:**
- No version change needed (last story version remains: `0.4.3.7+1`)

**For Next Epic:**
```python
VERSION_RC = 0
VERSION_EPIC = 5      # Increment to next epic
VERSION_STORY = 1     # Reset to first story
VERSION_TASK = 1      # Reset to first task
VERSION_BUILD = 1     # Reset to first build
```

### Kanban Context

**Epic Document:** `docs/project-management/kanban/epics/Epic-4/Epic-4.md`
```markdown
**Status:** COMPLETE ✅
**Completed:** 2025-12-02 (v0.4.3.7+1)

## Story Checklist
- [x] **E4:S01 – Dev Kit Kanban Implementation** - COMPLETE ✅ (v0.4.1.1+6)
- [x] **E4:S02 – FR/BR Intake to Tasks** - COMPLETE ✅ (v0.4.2.5+1)
- [x] **E4:S03 – Kanban + Versioning + RW Integration** - COMPLETE ✅ (v0.4.3.7+1)
```

**Kanban Board:**
```markdown
### Epic 4: Kanban Framework
**Status:** COMPLETE ✅
**Last Updated:** v0.4.3.7+1
```

### RW Perspective

**RW Step 6: Auto-update Kanban Docs**
- Updates Epic document with COMPLETE status
- Updates Kanban board with epic completion marker
- All stories remain marked COMPLETE

**When Starting Next Epic:**
- RW handles epic transition (see Scenario 1)
- Version updates to `0.5.1.1+1`

### Real Dev-Kit Example

**Epic 4 Completion:**
- Epic 4: Completed at `v0.4.3.7+1`
- All 3 stories completed
- See: `docs/project-management/kanban/epics/Epic-4/Epic-4.md`

---

## 9. Cross-Framework Examples

This section demonstrates **end-to-end flows** that tie together Kanban, Versioning, and Release Workflow. These examples show how the three frameworks work together in practice.

---

### Example 1: FR → Task → Version → RW → Kanban Update

**Scenario:** A Feature Request arrives and flows through the complete system from intake to release.

#### Step 1: Receive Feature Request

**FR Document:** `docs/project-management/kanban/fr-br/FR-001-add-validation-script.md`
```markdown
# Feature Request: Add Kanban Consistency Validation Script

**Summary:** Add validation script to check Kanban document consistency
**Priority:** HIGH
**Scope:** Epic 4 (Kanban Framework)
**Status:** Received
```

#### Step 2: Intake Decision (FR → Task)

**Process:**
1. Search Epic 4 stories for matching scope
2. Found: Story 3 (Kanban + Versioning + RW Integration) - matches scope
3. Decision: Create Task under Story 3

**Task Created:**
- Task: E4:S03:T08 – Add Kanban consistency validation script
- Added to `Story-003-kanban-versioning-rw-integration.md`
- Task status: TODO

#### Step 3: Assign Version Number

**Current Version:** `0.4.3.5+1` (Task 5)
**New Task:** Task 8

**Version File Update (`version.py`):**
```python
VERSION_RC = 0
VERSION_EPIC = 4       # Unchanged (Epic 4)
VERSION_STORY = 3      # Unchanged (Story 3)
VERSION_TASK = 8      # NEW: Task 8
VERSION_BUILD = 1     # Reset to 1 for new Task
```

**Expected Version:** `0.4.3.8+1`

#### Step 4: Complete Work

**Work Completed:**
- Created validation script: `scripts/validation/validate_kanban_consistency.py`
- Tested script
- Work ready for release

#### Step 5: Trigger Release Workflow

**Developer types:** `RW`

**RW Step 1: Branch Safety Check**
- ✅ Branch: `epic/4-kanban-framework`
- ✅ Version `0.4.3.8+1` matches Epic 4
- ✅ `VERSION_TASK` (8) matches active Task in Story document

**RW Step 2: Bump Version**
- ✅ Detects task transition (Task 5 → Task 8)
- ✅ Confirms `VERSION_TASK` updated to 8
- ✅ Confirms `VERSION_BUILD` reset to 1
- ✅ Version: `0.4.3.8+1`

**RW Step 3: Create Detailed Changelog**
- ✅ Creates: `docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.4.3.8+1.md`
- ✅ Includes Epic 4, Story 3, Task 8 context
- ✅ Includes full timestamp: `2025-12-02 18:00:00 UTC`

**RW Step 4: Update Main Changelog**
- ✅ Adds entry: `## [0.4.3.8+1] - 02-12-25`
- ✅ Includes summary and link to detailed changelog

**RW Step 5: Update README**
- ✅ Updates version badge (if applicable)
- ✅ Updates latest release callout

**RW Step 6: Auto-update Kanban Docs**
- ✅ Updates `Epic-4.md`:
  - `**Last updated:** 2025-12-02 (v0.4.3.8+1 – Task 8 complete: Add Kanban consistency validation script)`
  - Story Checklist: `- [x] **E4:S03 – ...** - COMPLETE ✅ (v0.4.3.7+1)`
- ✅ Updates `Story-003-kanban-versioning-rw-integration.md`:
  - `**Last updated:** 2025-12-02 (v0.4.3.8+1)`
  - `**Version:** v0.4.3.8+1`
  - Task Checklist: `- [x] **E4:S03:T08 – Add Kanban consistency validation script** ✅ COMPLETE (v0.4.3.8+1)`
  - Task section: `**Status:** ✅ **COMPLETE** (v0.4.3.8+1)`

**RW Steps 7-11: Git Operations**
- ✅ Stage files
- ✅ Run validators
- ✅ Commit: `Release v0.4.3.8+1: Task 8 complete - Add Kanban consistency validation script`
- ✅ Tag: `v0.4.3.8+1`
- ✅ Push to remote

#### Result

**Complete Traceability:**
- FR → Task (E4:S03:T08)
- Task → Version (`0.4.3.8+1`)
- Version → Changelog (`CHANGELOG_v0.4.3.8+1.md`)
- Version → Kanban markers (`✅ COMPLETE (v0.4.3.8+1)`)
- Version → Git tag (`v0.4.3.8+1`)

**All Systems Updated:**
- ✅ Kanban: Task marked complete with forensic marker
- ✅ Versioning: Version file updated, changelog created
- ✅ RW: All 11 steps executed successfully
- ✅ Git: Committed and tagged

---

### Example 2: Bugfix with Verification Requirement

**Scenario:** A bug is discovered in a completed task, requiring fix verification before marking as "Fixed".

#### Step 1: Discover Bug

**Bug Context:**
- Task: E4:S03:T02 – Validate Kanban → Versioning integration
- Completed version: `v0.4.3.2+1`
- Bug: `VERSION_TASK` not correctly updated during task transitions

#### Step 2: Create Bugfix Task

**Task Created:**
- Task: E4:S03:T02 (bugfix) – Fix Task → version TASK component mapping
- Same task number (bugfix on existing task)
- Version: `0.4.3.2+2` (BUILD increments)

#### Step 3: Implement Fix

**Fix Implemented:**
- Updated RW Step 2 to detect task transitions
- Updated RW Step 2 to automatically update `VERSION_TASK`
- Updated RW Step 2 to reset `VERSION_BUILD` to 1
- **Fix NOT yet verified** (no tests run yet)

#### Step 4: Trigger Release Workflow

**Developer types:** `RW`

**RW Step 1: Branch Safety Check**
- ✅ Branch: `epic/4-kanban-framework`
- ✅ Version `0.4.3.2+2` matches Epic 4, Story 3, Task 2

**RW Step 2: Bump Version**
- ✅ Same task (TASK=2 unchanged)
- ✅ Increments BUILD: `0.4.3.2+1` → `0.4.3.2+2`

**RW Step 3: Create Detailed Changelog**
- ✅ Creates: `CHANGELOG_v0.4.3.2+2.md`
- ✅ **CRITICAL:** RW Step 3 checks fix verification status
- ✅ Fix is **unverified** (no tests run)
- ✅ Changelog format:
  ```markdown
  ### Attempted Fixes
  - Attempted fix: Task → version TASK component mapping (verification pending)
  ```
- ✅ RW **does not** mark as "Fixed" (verification required)

**RW Step 4: Update Main Changelog**
- ✅ Adds entry with "Attempted Fixes" section
- ✅ Does not add to "Fixed" section

**RW Step 6: Auto-update Kanban Docs**
- ✅ Updates Story document with bugfix context
- ✅ Includes verification status: "verification pending"

#### Step 5: Verify Fix

**Verification Process:**
- Run test suite: ✅ PASS
- Manual verification: ✅ PASS
- Fix verified

#### Step 6: Update Changelog (Post-Verification)

**Option A: Create New Release**
- New version: `0.4.3.2+3`
- Changelog: `### Fixed` section with verified fix

**Option B: Update Existing Release**
- Update `CHANGELOG_v0.4.3.2+2.md`:
  - Move from "Attempted Fixes" to "Fixed"
  - Add verification timestamp
  - Note: This requires manual update (RW doesn't retroactively update)

#### Result

**Verification Workflow:**
- ✅ Unverified fixes logged as "Attempted Fixes"
- ✅ Verified fixes logged as "Fixed"
- ✅ Clear distinction between attempted and verified fixes
- ✅ Prevents false "Fixed" claims

**Real Dev-Kit Example:**
- See: `docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.4.3.2+2.md`
- Bugfix: Task → version TASK component mapping
- Verification: Root cause analysis and documentation updates completed

---

### Example 3: Parallel Epic/Story Work

**Scenario:** Working on multiple epics simultaneously, with work merged out of chronological order.

#### Context

**Epic 3 Branch (`epic/3-*`):**
- Work: `0.3.1.1+1`, `0.3.1.2+1`, `0.3.2.1+1`
- Merged to `main` on 2025-12-03

**Epic 4 Branch (`epic/4-*`):**
- Work: `0.4.1.1+1`, `0.4.2.1+1`, `0.4.3.1+1`
- Merged to `main` on 2025-12-02 (earlier than Epic 3)

#### Kanban State

**Epic 3:**
- Story 1: IN PROGRESS (Tasks 1-2 complete)
- Story 2: IN PROGRESS (Task 1 complete)

**Epic 4:**
- Story 1: COMPLETE ✅
- Story 2: COMPLETE ✅
- Story 3: IN PROGRESS (Task 1 complete)

#### Version File States

**On Epic 3 Branch:**
```python
VERSION_RC = 0
VERSION_EPIC = 3
VERSION_STORY = 2
VERSION_TASK = 1
VERSION_BUILD = 1
```

**On Epic 4 Branch:**
```python
VERSION_RC = 0
VERSION_EPIC = 4
VERSION_STORY = 3
VERSION_TASK = 1
VERSION_BUILD = 1
```

#### RW Execution (Parallel)

**Epic 3 RW (on `epic/3-*` branch):**
- ✅ Step 1: Validates branch `epic/3-*` matches version `0.3.2.1+1`
- ✅ Step 2: Bumps version (if needed)
- ✅ Step 3: Creates `CHANGELOG_v0.3.2.1+1.md`
- ✅ Step 6: Updates Epic-3.md and Story-002-*.md

**Epic 4 RW (on `epic/4-*` branch):**
- ✅ Step 1: Validates branch `epic/4-*` matches version `0.4.3.1+1`
- ✅ Step 2: Bumps version (if needed)
- ✅ Step 3: Creates `CHANGELOG_v0.4.3.1+1.md`
- ✅ Step 6: Updates Epic-4.md and Story-003-*.md

**No Conflicts:** Each epic maintains independent version stream

#### Changelog Ordering (Canonical)

**Main Changelog (`CHANGELOG.md`):**
```markdown
## [0.3.1.1+1] - 03-12-25    # Epic 3, Story 1, Task 1
## [0.3.1.2+1] - 03-12-25    # Epic 3, Story 1, Task 2
## [0.4.1.1+1] - 02-12-25    # Epic 4, Story 1, Task 1 (merged earlier, but ordered correctly)
## [0.4.2.1+1] - 02-12-25    # Epic 4, Story 2, Task 1
## [0.4.3.1+1] - 02-12-25    # Epic 4, Story 3, Task 1
## [0.3.2.1+1] - 03-12-25    # Epic 3, Story 2, Task 1 (merged later, but ordered correctly)
```

**Key Point:** Versions ordered **canonically by version number**, not by commit timestamp.

#### Result

**Parallel Development Supported:**
- ✅ Each epic maintains independent version stream
- ✅ No version conflicts between epics
- ✅ Changelog ordering is canonical (by version number)
- ✅ Git history reflects actual commit order
- ✅ Kanban board shows all epics in parallel

**Real Dev-Kit Example:**
- Epic 1: `0.1.1.1+1` → `0.1.3.6+1` (completed)
- Epic 2: `0.2.1.1+2` → `0.2.1.1+5` (completed)
- Epic 3: `0.3.1.1+1` → `0.3.2.2+1` (in progress)
- Epic 4: `0.4.1.1+1` → `0.4.3.7+1` (completed)
- See: `CHANGELOG.md` for canonical ordering

---

## 10. Edge Cases and Anti-Patterns

This section documents known edge cases, common mistakes, and anti-patterns when using the `RC.EPIC.STORY.TASK+BUILD` versioning schema. Each entry includes symptoms, root causes, corrective patterns, and preventive guidance.

### 10.1 Anti-Pattern: BUILD Incremented Instead of TASK

**Symptom:** When completing a new Task, BUILD is incremented instead of TASK, resulting in multiple Tasks sharing the same TASK number.

**Example:**
- ❌ **Wrong:** E2:S01:T02 completed → `0.2.1.1+2` (BUILD incremented, TASK unchanged)
- ✅ **Correct:** E2:S01:T02 completed → `0.2.1.2+1` (TASK incremented to 2, BUILD reset to 1)

**Root Cause:**
- RW Step 2 doesn't explicitly detect Task transitions
- No mandatory check to read Story file and identify completed Task number
- Default behavior increments BUILD without checking if Task changed
- No validation that `VERSION_TASK` matches completed Task

**Corrective Pattern:**
1. Read Story file to identify completed Task number
2. Extract Task number from task identifier (`E\{epic\}:S\{story\}:T\{task\}`)
3. Compare completed Task number to current `VERSION_TASK`
4. If Task number > current `VERSION_TASK`: Update `VERSION_TASK` and reset `VERSION_BUILD` to 1
5. If Task number == current `VERSION_TASK`: Increment `VERSION_BUILD` only
6. Validate before and after updating

**Preventive Guidance:**
- ✅ **MANDATORY:** RW Step 2 MUST read Story file to identify completed Task
- ✅ **MANDATORY:** RW Step 2 MUST compare Task numbers before updating
- ✅ **MANDATORY:** RW Step 2 MUST validate `VERSION_TASK` matches completed Task
- ❌ **NEVER:** Skip Task identification step
- ❌ **NEVER:** Assume same Task without checking

**Reference:** `docs/architecture/standards-and-adrs/versioning-error-reference-guide.md`

---

### 10.2 Edge Case: Task Renumbering

**Symptom:** Tasks are renumbered after work has been completed and released, creating version conflicts.

**Example:**
- Original: E3:S02:T01, T02, T03 released as `0.3.2.1+1`, `0.3.2.2+1`, `0.3.2.3+1`
- Renumbered: T02 becomes T01, T03 becomes T02
- Problem: New T01 conflicts with old T01 version

**Root Cause:**
- Story structure reorganized after work completed
- Tasks merged or split
- Manual renumbering without version migration

**Corrective Pattern:**
1. **Option A: Keep Original Versions (Recommended)**
   - Don't renumber completed Tasks
   - Create new Tasks with new numbers
   - Document mapping: "Original T02 is now T05"

2. **Option B: Version Migration (Complex)**
   - Create migration document mapping old → new versions
   - Update all references (changelogs, commits, tags)
   - Update Kanban docs with version mappings
   - **Warning:** This is complex and error-prone

**Preventive Guidance:**
- ✅ **BEST PRACTICE:** Finalize Task numbering before starting work
- ✅ **BEST PRACTICE:** If renumbering needed, do it before first release
- ✅ **BEST PRACTICE:** Document any renumbering in Story notes
- ❌ **AVOID:** Renumbering Tasks after releases
- ❌ **AVOID:** Merging/splitting Tasks after work started

---

### 10.3 Edge Case: Story Re-Parenting Between Epics

**Symptom:** A Story is moved from one Epic to another after work has been completed, creating version conflicts.

**Example:**
- Original: Story 5 in Epic 3, released as `0.3.5.1+1`
- Re-parented: Story 5 moved to Epic 4, becomes Story 1 in Epic 4
- Problem: Version `0.3.5.1+1` exists but Story is now in Epic 4

**Root Cause:**
- Epic structure reorganized
- Story scope changed
- Manual re-parenting without version migration

**Corrective Pattern:**
1. **Option A: Keep Original Versions (Recommended)**
   - Don't re-parent Stories after releases
   - Create new Story in target Epic
   - Document mapping: "Original E3:S05 is now E4:S01"

2. **Option B: Version Migration (Complex)**
   - Create migration document mapping old → new versions
   - Update all references (changelogs, commits, tags)
   - Update Kanban docs with version mappings
   - **Warning:** This is complex and error-prone

**Preventive Guidance:**
- ✅ **BEST PRACTICE:** Finalize Epic/Story structure before starting work
- ✅ **BEST PRACTICE:** If re-parenting needed, do it before first release
- ✅ **BEST PRACTICE:** Document any re-parenting in Epic notes
- ❌ **AVOID:** Re-parenting Stories after releases
- ❌ **AVOID:** Moving Stories between Epics after work started

---

### 10.4 Edge Case: Version Conflicts When Branches Diverge

**Symptom:** Parallel development on different branches results in same version number being used for different work.

**Example:**
- Branch A: Epic 3, Story 2, Task 1 → `0.3.2.1+1`
- Branch B: Epic 3, Story 2, Task 1 → `0.3.2.1+1` (conflict!)
- Problem: Both branches use same version number

**Root Cause:**
- Parallel work on same Epic/Story/Task
- No coordination between branches
- Version assigned before branch merge

**Corrective Pattern:**
1. **Option A: Sequential Task Numbers (Recommended)**
   - Coordinate Task numbering across branches
   - Use different Task numbers for parallel work
   - Example: Branch A uses T01, Branch B uses T02

2. **Option B: Merge Before Release**
   - Merge branches before releasing
   - Assign versions after merge
   - Resolve conflicts before version assignment

3. **Option C: Branch-Specific Versions (Not Recommended)**
   - Use branch identifier in version (e.g., `0.3.2.1+1-branch-a`)
   - **Warning:** This breaks version schema and traceability

**Preventive Guidance:**
- ✅ **BEST PRACTICE:** Coordinate Task numbering before starting parallel work
- ✅ **BEST PRACTICE:** Use different Task numbers for parallel work on same Story
- ✅ **BEST PRACTICE:** Merge branches before releasing
- ❌ **AVOID:** Parallel work on same Task number
- ❌ **AVOID:** Assigning versions before branch merge

---

### 10.5 Edge Case: Incorrect TASK Mapping in Version File

**Symptom:** `VERSION_TASK` in `version.py` doesn't match the active Task number from Kanban.

**Example:**
- Kanban: Active Task is E2:S04:T09
- Version File: `VERSION_TASK = 1`
- Problem: Version file shows wrong Task number

**Root Cause:**
- `VERSION_TASK` not updated when starting new Task
- Manual update forgotten
- No validation to catch mismatch

**Corrective Pattern:**
1. Read Story file to identify active Task number
2. Compare active Task number to `VERSION_TASK` in `version.py`
3. If mismatch: Update `VERSION_TASK` to match active Task
4. Update `VERSION_BUILD` to 1 (new Task)
5. Validate: Re-read `version.py` to confirm update

**Preventive Guidance:**
- ✅ **MANDATORY:** RW Step 1 MUST validate `VERSION_TASK` matches active Task
- ✅ **MANDATORY:** RW Step 2 MUST update `VERSION_TASK` when Task transition detected
- ✅ **BEST PRACTICE:** Update `version.py` when creating new Task (intake process)
- ❌ **NEVER:** Skip Task/version validation
- ❌ **NEVER:** Assume `VERSION_TASK` is correct without checking

**Reference:** `docs/project-management/kanban/epics/Epic-4/Story-003-kanban-versioning-rw-integration/T002-root-cause-analysis.md`

---

### 10.6 Anti-Pattern: Using Standalone Task References

**Symptom:** Task references use standalone format (`T01`, `T001`) instead of full format (`E1:S01:T01`).

**Example:**
- ❌ **Wrong:** "Completed T01" or "Task T001"
- ✅ **Correct:** "Completed E1:S01:T01" or "Task E1:S01:T01"

**Root Cause:**
- Legacy format from 3-digit task numbering
- Templates not updated
- Documentation examples use old format

**Corrective Pattern:**
1. Always use full `Exx:Sxx:Txx` format
2. Update all references in documentation
3. Update templates to use full format
4. Update examples to show full format

**Preventive Guidance:**
- ✅ **MANDATORY:** Always use full `Exx:Sxx:Txx` format
- ✅ **MANDATORY:** Templates must use full format
- ✅ **BEST PRACTICE:** Examples must show full format
- ❌ **NEVER:** Use standalone `T01` or `T001` format
- ❌ **NEVER:** Assume context from surrounding text

**Reference:** `docs/architecture/standards-and-adrs/task-naming-migration-guide.md`

---

### 10.7 Edge Case: BUILD Number Overflow

**Symptom:** BUILD number exceeds reasonable range (e.g., `0.2.4.9+99`) due to many releases within same Task.

**Example:**
- Task E2:S04:T09 has 99 builds: `0.2.4.9+1` through `0.2.4.9+99`
- Next build would be `0.2.4.9+100` (still valid but unusual)

**Root Cause:**
- Many bugfixes/iterations within same Task
- Task scope too large
- No Task completion criteria

**Corrective Pattern:**
1. **Option A: Split Task (Recommended)**
   - Break large Task into smaller Tasks
   - Create new Task for remaining work
   - Example: T09 → T09 (completed), T10 (new work)

2. **Option B: Complete Task and Create New**
   - Mark current Task as complete
   - Create new Task for additional work
   - Example: T09 complete, T10 for follow-up work

**Preventive Guidance:**
- ✅ **BEST PRACTICE:** Keep Tasks small (1-3 days of work)
- ✅ **BEST PRACTICE:** Complete Tasks frequently
- ✅ **BEST PRACTICE:** Split large Tasks before starting
- ❌ **AVOID:** Tasks with 10+ builds
- ❌ **AVOID:** Keeping Tasks open indefinitely

---

### 10.8 Edge Case: Missing Version in Changelog

**Symptom:** Changelog entry created but version number missing or incorrect.

**Example:**
- Changelog shows: "## [Unreleased] - Task completed"
- Missing: Version number `0.2.4.9+3`

**Root Cause:**
- Manual changelog update forgotten
- RW Step 3/4 not executed
- Version number not extracted from `version.py`

**Corrective Pattern:**
1. Read `version.py` to get current version
2. Update changelog with correct version number
3. Verify version format: `RC.EPIC.STORY.TASK+BUILD`
4. Validate changelog format matches policy

**Preventive Guidance:**
- ✅ **MANDATORY:** RW Step 3 MUST create changelog with version number
- ✅ **MANDATORY:** RW Step 4 MUST update main changelog with version number
- ✅ **BEST PRACTICE:** Always read `version.py` for version number
- ❌ **NEVER:** Manually write version numbers without reading `version.py`
- ❌ **NEVER:** Skip changelog updates

---

### 10.9 Anti-Pattern: Version Number in Commit Message Doesn't Match Tag

**Symptom:** Commit message shows different version than Git tag.

**Example:**
- Commit: "Release v0.2.4.9+2: ..."
- Tag: `v0.2.4.9+3`
- Problem: Mismatch between commit message and tag

**Root Cause:**
- Version bumped after commit
- Tag created with different version
- Manual tag creation error

**Corrective Pattern:**
1. Read `version.py` to get current version
2. Use same version in commit message and tag
3. Verify: Commit message version == Tag version == `version.py` version
4. If mismatch: Create new commit or update tag

**Preventive Guidance:**
- ✅ **MANDATORY:** RW Step 9 MUST use version from `version.py` in commit message
- ✅ **MANDATORY:** RW Step 10 MUST use same version for tag
- ✅ **BEST PRACTICE:** Always read `version.py` for version number
- ❌ **NEVER:** Use different versions in commit and tag
- ❌ **NEVER:** Manually create tags without reading `version.py`

---

### 10.10 Edge Case: Parallel Epic Development Version Ordering

**Symptom:** Changelog entries appear out of chronological order due to parallel epic development.

**Example:**
- Epic 3: `0.3.1.1+1` (released 2025-12-03)
- Epic 4: `0.4.1.1+1` (released 2025-12-02, merged earlier)
- Changelog shows Epic 4 before Epic 3 (canonical ordering)

**Root Cause:**
- Parallel epic development
- Different merge times
- Canonical ordering by version number, not timestamp

**Corrective Pattern:**
1. **This is Expected Behavior (Not an Error)**
   - Changelog uses canonical ordering (by version number)
   - Git history shows chronological order
   - Both are correct for different purposes

2. **If Chronological Order Needed:**
   - Use Git log: `git log --oneline --date-order`
   - Use detailed changelog archive (includes timestamps)
   - Don't change main changelog ordering

**Preventive Guidance:**
- ✅ **UNDERSTAND:** Changelog uses canonical ordering (by version number)
- ✅ **UNDERSTAND:** Git history shows chronological order
- ✅ **BEST PRACTICE:** Use detailed changelog archive for timestamps
- ❌ **DON'T:** Change main changelog to chronological order
- ❌ **DON'T:** Expect changelog to match Git commit order

---

### 10.11 Edge Case: Out-of-Order Task Completion

**Symptom:** A task with a lower number is completed after a task with a higher number has already been released.

**Example:**
- Task 6 completed first: `0.3.2.6+1` (released 2025-12-04)
- Task 5 completed later: Should be `0.3.2.5+1` (not `0.3.2.6+2`)
- Version file shows `VERSION_TASK = 6` when Task 5 is completed

**Root Cause:**
- Tasks completed out of sequential order
- RW Step 2 logic treats "completed task < current VERSION_TASK" as an ERROR
- Agent incorrectly treats this as BUILD increment instead of new task

**Corrective Pattern:**
1. **Use Task Number from Completed Task**
   - Version should reflect the completed task, not the current VERSION_TASK
   - If Task 5 is completed, use `0.3.2.5+1` regardless of current VERSION_TASK
   - Update `VERSION_TASK = 5`, `VERSION_BUILD = 1`

2. **Changelog Ordering**
   - Insert `0.3.2.5+1` before `0.3.2.6+1` in changelog (canonical ordering)
   - Changelog uses version number ordering, not completion time

3. **Version File Update**
   - Update `VERSION_TASK` to match completed task number
   - Reset `VERSION_BUILD` to 1 for the completed task
   - Version file should reflect the most recently completed task

**Preventive Guidance:**
- ✅ **UNDERSTAND:** Version reflects completed task, not "current" task in version file
- ✅ **UNDERSTAND:** Tasks can be completed out of order
- ✅ **MANDATORY:** Always use completed task number for version, regardless of current VERSION_TASK
- ✅ **MANDATORY:** Changelog entries ordered by version number (Task 5 before Task 6)
- ❌ **DON'T:** Treat out-of-order completion as BUILD increment
- ❌ **DON'T:** Use current VERSION_TASK when it's higher than completed task

**Real Dev-Kit Example:**
- Task 6 completed: `0.3.2.6+1` (E3:S02:T06 - Changelog ordering process hardened)
- Task 5 completed later: `0.3.2.5+1` (E3:S02:T05 - Quick reference summary)
- Changelog order: `0.3.2.5+1` before `0.3.2.6+1` (canonical ordering)

---

## Quick Reference: Version Component Rules

| Component | When It Changes | When It Resets | Example |
|-----------|----------------|----------------|---------|
| **RC** | Entering RC phase | N/A | `0` → `1` |
| **EPIC** | Starting new epic | Never | `3` → `4` |
| **STORY** | Starting new story | When EPIC changes | `1` → `2` |
| **TASK** | Starting new task | When STORY changes | `1` → `2` |
| **BUILD** | Every release | When TASK changes | `1` → `2` → `3` |

---

## Quick Reference: Version Progression Patterns

| Scenario | EPIC | STORY | TASK | BUILD | Example |
|----------|------|-------|------|-------|---------|
| **New Epic** | Increment | 1 | 1 | 1 | `0.5.1.1+1` |
| **New Story** | Same | Increment | 1 | 1 | `0.3.2.1+1` |
| **New Task** | Same | Same | Increment | 1 | `0.3.1.2+1` |
| **Bugfix** | Same | Same | Same | Increment | `0.3.1.3+2` |
| **Task Transition** | Same | Same | Increment | 1 | `0.3.1.2+1` |

---

## References

- **Scenario Definitions:** `docs/project-management/kanban/epics/Epic-3/Story-002-versioning-cookbook-and-examples/T001-core-versioning-scenarios.md`
- **Versioning Policy:** `docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md`
- **Framework Policy:** `packages/frameworks/numbering & versioning/versioning-policy.md`
- **Integration Guide:** `docs/architecture/standards-and-adrs/dev-kit-kanban-versioning-rw-integration.md`
- **Integration Examples:** `docs/project-management/kanban/epics/Epic-4/Story-003-kanban-versioning-rw-integration/T006-integration-examples.md`
- **RW Execution Guide:** `packages/frameworks/workflow mgt/docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md`

---

## Copying This Cookbook

**Safe to Copy:** This cookbook is **project-agnostic** and safe to copy into other projects.

**Customization:**
- Replace dev-kit examples with your project's examples
- Update file paths to match your project structure
- Adjust epic ranges if your project uses different ranges

**Maintain Links:** Keep references to framework policies and guides.

---

_End of Versioning Cookbook_

