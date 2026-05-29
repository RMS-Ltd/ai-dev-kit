---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T20:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Integration Examples for External Projects: Kanban + Versioning + Release Workflow

**Package:** Numbering & Versioning Package v2.0.0  
**Integrates With:** Kanban System Package v1.0.0, Workflow Management Package v2.0.0  
**Document Type:** Integration Examples and Walkthroughs  
**Last Updated:** 2025-12-04  
**Target Audience:** External projects adopting all three frameworks

---

## Overview

This document provides **step-by-step integration examples** for external projects adopting Kanban, Versioning, and Release Workflow frameworks. Each example includes complete configurations, file structures, and copy-paste ready code.

**Related Documentation:**
- **Integration Guide:** `kanban-workflow-integration.md` (comprehensive three-way integration)
- **Patterns & Best Practices:** `integration-patterns-and-best-practices.md` (patterns and decision trees)
- **This Document:** Step-by-step examples with configurations

---

## Example 1: Greenfield Project Integration

### Scenario

**Project:** New web application project  
**Starting State:** No Kanban, no versioning, no workflow automation  
**Goal:** Full three-way integration from scratch

### Step 1: Install Framework Packages

**Current Approach (Copy-Paste):**
```bash
# Copy framework packages to your project
cp -r /path/to/frameworks/kanban ./frameworks/kanban
cp -r /path/to/frameworks/numbering\ \&\ versioning ./frameworks/numbering-versioning
cp -r /path/to/frameworks/workflow\ mgt ./frameworks/workflow-mgt
```

**Future Approach (Dependencies - Epic 6):**
```bash
# Using Git submodules (Phase 1)
git submodule add https://github.com/earlution/ai-dev-kit.git frameworks/ai-dev-kit
cd frameworks/ai-dev-kit
git checkout v2.0.0

# Or using CLI tool (Phase 2)
ai-dev-kit install kanban@1.0.0
ai-dev-kit install numbering-versioning@2.0.0
ai-dev-kit install workflow-mgt@2.0.0
```

See [Framework Dependency Architecture](../../../../docs/architecture/standards-and-adrs/framework-dependency-architecture.md) for details.

### Step 2: Create Project Structure

```bash
# Create directory structure
mkdir -p docs/kanban/epics
mkdir -p src/myproject
```

### Step 3: Configure Version File

**File:** `src/myproject/version.py`

```python
"""
My Project Version File

This file defines the version using the RC.EPIC.STORY.TASK+BUILD schema.
"""

VERSION_RC = 0        # Release candidate (0 = development, 1+ = release candidate)
VERSION_EPIC = 1      # Epic number (Epic 1: Initial Development)
VERSION_STORY = 1     # Story number (Story 1: User Authentication)
VERSION_TASK = 1      # Task number (Task 1: Login UI)
VERSION_BUILD = 1     # Build number (increments per release within task)

# Composite version string
VERSION_STRING = f"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}"

# Export for use in application
__version__ = VERSION_STRING
```

### Step 4: Create First Epic

**File:** `docs/kanban/epics/Epic-1/Epic-1.md`

```markdown
---
lifecycle: evergreen
created_at: 2025-12-04
---

# Epic 1 – User Authentication

**Status:** IN PROGRESS
**Priority:** HIGH
**Created:** 2025-12-04
**Last updated:** 2025-12-04 (v0.1.1.1+1 – Epic 1 created)
**Version:** v0.1.1.1+1
**Code:** E1

---

## Story Checklist

- [ ] **Story 1 – Login System** - TODO
- [ ] **Story 2 – Registration System** - TODO
- [ ] **Story 3 – Password Reset** - TODO

---

## Story 1 – Login System

**Status:** TODO
**Priority:** HIGH
**Created:** 2025-12-04
**Last updated:** 2025-12-04
**Version:** v0.1.1.1+1

### Task Checklist

- [ ] **E1:S1:T01 – Create login UI** - TODO
- [ ] **E1:S1:T02 – Implement authentication logic** - TODO
- [ ] **E1:S1:T03 – Add session management** - TODO
```

### Step 5: Create Story Document

**File:** `docs/kanban/epics/Epic-1/Story-1-Login-System.md`

```markdown
---
lifecycle: evergreen
created_at: 2025-12-04
---

# Story 1 – Login System

**Status:** TODO
**Priority:** HIGH
**Created:** 2025-12-04
**Last updated:** 2025-12-04
**Version:** v0.1.1.1+1
**Code:** E1S1

---

## Task Checklist

- [ ] **E1:S1:T01 – Create login UI** - TODO
- [ ] **E1:S1:T02 – Implement authentication logic** - TODO
- [ ] **E1:S1:T03 – Add session management** - TODO

---

## Task 1 – Create login UI

**Status:** TODO
**Priority:** HIGH
**Created:** 2025-12-04
**Last updated:** 2025-12-04

### Description

Create the login user interface with email and password fields.

### Acceptance Criteria

- [ ] Login form with email and password fields
- [ ] Submit button
- [ ] Error message display
- [ ] Responsive design
```

### Step 6: Configure RW Trigger

**File:** `.cursorrules` (add to existing file)

```markdown
## Release Workflow (RW) Trigger

When user types 'RW' or 'rw', execute the Release Workflow:

1. **Branch Safety Check:** Verify on correct branch
2. **Bump Version:** Read Story file, determine version bump
3. **Create Detailed Changelog:** Generate changelog archive
4. **Update Main Changelog:** Insert entry with canonical ordering
5. **Update README:** Update version badge
6. **Auto-update Kanban Docs:** Update Epic and Story documents
7. **Stage Files:** Git add all changes
8. **Run Validators:** Validate branch, changelog, version bump
9. **Commit Changes:** Commit with versioned message
10. **Create Git Tag:** Tag with version
11. **Push to Remote:** Push branch and tags

### Configuration

```yaml
kanban_root: "docs/kanban"
epic_doc_pattern: "docs/kanban/epics/Epic-{epic}/Epic-{epic}.md"
story_doc_pattern: "docs/kanban/epics/Epic-{epic}/Story-{N}-*.md"
version_file: "src/myproject/version.py"
changelog_root: "docs/changelog"
```

### RW Step 2: Version Bump Logic

Read Story file to identify completed task:
- If completed task > current VERSION_TASK: NEW TASK → TASK = completed, BUILD = 1
- If completed task == current VERSION_TASK: SAME TASK → BUILD = current + 1
- If completed task < current VERSION_TASK: OUT-OF-ORDER → TASK = completed, BUILD = 1

### RW Step 6: Kanban Update

Update ALL sections in Epic document:
- Epic header "Last updated" field
- Story Checklist entry
- Detailed story sections (Status, Last updated, task checkboxes)

Use Story file as authoritative source of truth.
```

### Step 7: Create RW Config (Optional)

**File:** `rw-config.yaml`

```yaml
# Release Workflow Configuration

# Version file location
version_file: "src/myproject/version.py"

# Kanban structure
kanban_root: "docs/kanban"
epic_doc_pattern: "docs/kanban/epics/Epic-{epic}/Epic-{epic}.md"
story_doc_pattern: "docs/kanban/epics/Epic-{epic}/Story-{N}-*.md"

# Changelog structure
changelog_root: "docs/changelog"
changelog_archive_pattern: "docs/changelog/CHANGELOG_v{version}.md"
main_changelog: "CHANGELOG.md"

# Scripts path
scripts_path: "frameworks/workflow-mgt/scripts/validation"

# README location
readme_file: "README.md"
```

### Step 8: Test Integration

```bash
# 1. Complete Task 1 work (code changes)
# ... make code changes ...

# 2. Update Story file to mark Task 1 complete
# Edit: docs/kanban/epics/Epic-1/Story-1-Login-System.md
# Change: "- [ ] **E1:S1:T01**" to "- [x] **E1:S1:T01** ✅ COMPLETE"

# 3. Trigger Release Workflow
# Type 'RW' in AI assistant

# Expected results:
# - version.py: 0.1.1.1+1
# - Epic-1.md: Updated with forensic marker
# - Story-1-Login-System.md: Task 1 marked complete
# - CHANGELOG.md: Entry for v0.1.1.1+1
# - Git tag: v0.1.1.1+1
```

---

## Example 2: Existing Project Integration

### Scenario

**Project:** Existing Python web application  
**Starting State:** Has versioning (semantic versioning), no Kanban, no workflow automation  
**Goal:** Integrate Kanban and RW, migrate to RC.EPIC.STORY.TASK+BUILD schema

### Step 1: Migrate Version Schema

**Before:** `src/myproject/__init__.py`

```python
__version__ = "1.2.3"
```

**After:** `src/myproject/version.py`

```python
"""
Migrated to RC.EPIC.STORY.TASK+BUILD schema

Previous version: 1.2.3
New version: 0.1.1.1+1 (Epic 1, Story 1, Task 1, Build 1)
"""

VERSION_RC = 0
VERSION_EPIC = 1      # Map to existing feature set
VERSION_STORY = 1     # Map to current sprint
VERSION_TASK = 1      # Map to current task
VERSION_BUILD = 1     # Start fresh

VERSION_STRING = f"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}"
__version__ = VERSION_STRING
```

### Step 2: Create Kanban Structure

```bash
# Create Kanban directory structure
mkdir -p docs/kanban/epics/Epic-1

# Map existing work to Epic 1
# Create Epic document for current feature set
```

**File:** `docs/kanban/epics/Epic-1/Epic-1.md`

```markdown
---
lifecycle: evergreen
created_at: 2025-12-04
---

# Epic 1 – Current Feature Set

**Status:** IN PROGRESS
**Priority:** HIGH
**Created:** 2025-12-04
**Last updated:** 2025-12-04 (v0.1.1.1+1 – Epic 1 created)
**Version:** v0.1.1.1+1
**Code:** E1

---

## Story Checklist

- [ ] **Story 1 – Current Sprint Work** - IN PROGRESS

---

## Story 1 – Current Sprint Work

**Status:** IN PROGRESS
**Priority:** HIGH
**Created:** 2025-12-04
**Last updated:** 2025-12-04
**Version:** v0.1.1.1+1

### Task Checklist

- [ ] **E1:S1:T01 – Current task** - IN PROGRESS
```

### Step 3: Update Application Code

**File:** `src/myproject/__init__.py`

```python
# Update to use new version file
from .version import __version__

__all__ = ['__version__']
```

### Step 4: Configure RW

Follow Example 1, Step 6 (Configure RW Trigger) and Step 7 (Create RW Config).

---

## Example 3: Multi-Epic Parallel Development

### Scenario

**Project:** Large application with multiple feature teams  
**Starting State:** Full integration already set up  
**Goal:** Demonstrate parallel epic development

### Epic Structure

```yaml
epic_1:
  name: "User Management"
  version_range: "0.1.x.x+x"
  current_version: "0.1.5.3+1"
  team: "Team Alpha"

epic_2:
  name: "Payment Processing"
  version_range: "0.2.x.x+x"
  current_version: "0.2.3.2+1"
  team: "Team Beta"

epic_3:
  name: "Analytics Dashboard"
  version_range: "0.3.x.x+x"
  current_version: "0.3.1.1+1"
  team: "Team Gamma"
```

### Version File

**File:** `src/myproject/version.py`

```python
"""
Multi-Epic Version File

Each epic has its own version stream:
- Epic 1: 0.1.x.x+x (User Management)
- Epic 2: 0.2.x.x+x (Payment Processing)
- Epic 3: 0.3.x.x+x (Analytics Dashboard)

Current active epic: Epic 1
"""

# Active epic (changes based on current work)
VERSION_RC = 0
VERSION_EPIC = 1      # Currently working on Epic 1
VERSION_STORY = 5     # Story 5
VERSION_TASK = 3      # Task 3
VERSION_BUILD = 1     # Build 1

VERSION_STRING = f"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}"
__version__ = VERSION_STRING
```

### Changelog Ordering

**File:** `CHANGELOG.md`

```markdown
# Changelog

## [0.1.5.3+1] - 2025-12-04
Epic 1, Story 5, Task 3

## [0.2.3.2+1] - 2025-12-03
Epic 2, Story 3, Task 2

## [0.3.1.1+1] - 2025-12-02
Epic 3, Story 1, Task 1

## [0.1.5.2+1] - 2025-12-01
Epic 1, Story 5, Task 2
```

**Note:** Changelog ordered by version number (canonical ordering), not by timestamp.

---

## Example 4: Out-of-Order Task Completion

### Scenario

**Project:** Team working on Story 1 with 5 tasks  
**Situation:** Tasks completed out of sequential order

### Initial State

**Version:** `0.1.1.1+1` (Task 1 complete)  
**Story:** Story 1 with 5 tasks

### Task Completion Sequence

```yaml
sequence:
  step_1:
    completed: "Task 1"
    version: "0.1.1.1+1"
    timestamp: "2025-12-04 10:00:00"
  
  step_2:
    completed: "Task 3"
    version: "0.1.1.3+1"
    timestamp: "2025-12-04 11:00:00"
    note: "Skipped Task 2, completed Task 3"
  
  step_3:
    completed: "Task 5"
    version: "0.1.1.5+1"
    timestamp: "2025-12-04 12:00:00"
    note: "Skipped Tasks 2 and 4, completed Task 5"
  
  step_4:
    completed: "Task 2"
    version: "0.1.1.2+1"
    timestamp: "2025-12-04 13:00:00"
    note: "Out-of-order: Task 2 completed after Task 5"
    versioning: "TASK = 2, BUILD = 1 (not Task 5 BUILD increment)"
  
  step_5:
    completed: "Task 4"
    version: "0.1.1.4+1"
    timestamp: "2025-12-04 14:00:00"
    note: "Out-of-order: Task 4 completed after Task 5"
    versioning: "TASK = 4, BUILD = 1 (not Task 5 BUILD increment)"
```

### Changelog Ordering

**File:** `CHANGELOG.md`

```markdown
# Changelog

## [0.1.1.1+1] - 2025-12-04
Epic 1, Story 1, Task 1

## [0.1.1.2+1] - 2025-12-04
Epic 1, Story 1, Task 2 (completed after Task 5)

## [0.1.1.3+1] - 2025-12-04
Epic 1, Story 1, Task 3

## [0.1.1.4+1] - 2025-12-04
Epic 1, Story 1, Task 4 (completed after Task 5)

## [0.1.1.5+1] - 2025-12-04
Epic 1, Story 1, Task 5
```

**Note:** Changelog ordered by version number (Task 1 < Task 2 < Task 3 < Task 4 < Task 5), not by completion timestamp.

### RW Step 2 Logic for Out-of-Order

```python
# When completing Task 2 (after Task 5 already at 0.1.1.5+1):

current_version = "0.1.1.5+1"  # Current VERSION_TASK = 5
completed_task = 2             # Task 2 being completed

# RW Step 2 logic:
if completed_task < current_VERSION_TASK:
    # OUT-OF-ORDER COMPLETION
    VERSION_TASK = completed_task  # Set to 2, not 5
    VERSION_BUILD = 1              # Reset to 1, not increment
    new_version = "0.1.1.2+1"      # Correct version
```

---

## Example 5: Same Task, Multiple Releases

### Scenario

**Project:** Task 1 requires multiple iterations (bugfixes, refinements)

### Release Sequence

```yaml
task_1_releases:
  release_1:
    version: "0.1.1.1+1"
    reason: "Initial task completion"
    timestamp: "2025-12-04 10:00:00"
  
  release_2:
    version: "0.1.1.1+2"
    reason: "Bugfix: Login form validation"
    timestamp: "2025-12-04 14:00:00"
    note: "Same task → BUILD increment"
  
  release_3:
    version: "0.1.1.1+3"
    reason: "Refinement: Improved error messages"
    timestamp: "2025-12-04 16:00:00"
    note: "Same task → BUILD increment"
```

### Version File Progression

**Release 1:**
```python
VERSION_TASK = 1
VERSION_BUILD = 1
VERSION_STRING = "0.1.1.1+1"
```

**Release 2:**
```python
VERSION_TASK = 1  # Same task
VERSION_BUILD = 2  # BUILD increment
VERSION_STRING = "0.1.1.1+2"
```

**Release 3:**
```python
VERSION_TASK = 1  # Same task
VERSION_BUILD = 3  # BUILD increment
VERSION_STRING = "0.1.1.1+3"
```

### Kanban Updates

**Story File:** `docs/kanban/epics/Epic-1/Story-1-Login-System.md`

```markdown
## Task Checklist

- [x] **E1:S1:T01 – Create login UI** ✅ COMPLETE (v0.1.1.1+3)
- [ ] **E1:S1:T02 – Implement authentication logic** - TODO
```

**Note:** Forensic marker updated to latest version (`v0.1.1.1+3`), not initial version.

---

## Example 6: Complete Story Completion

### Scenario

**Project:** All tasks in Story 1 completed

### Task Completion Sequence

```yaml
story_1_tasks:
  task_1:
    version: "0.1.1.1+1"
    status: "✅ COMPLETE"
  
  task_2:
    version: "0.1.1.2+1"
    status: "✅ COMPLETE"
  
  task_3:
    version: "0.1.1.3+1"
    status: "✅ COMPLETE"
    note: "Final task → Story complete"
```

### Epic Document Update

**File:** `docs/kanban/epics/Epic-1/Epic-1.md`

```markdown
## Story Checklist

- [x] **Story 1 – Login System** ✅ COMPLETE (v0.1.1.3+1)
- [ ] **Story 2 – Registration System** - TODO

---

## Story 1 – Login System

**Status:** COMPLETE
**Priority:** HIGH
**Created:** 2025-12-04
**Last updated:** 2025-12-04 (v0.1.1.3+1 – Story 1 complete)
**Version:** v0.1.1.3+1

### Task Checklist

- [x] **E1:S1:T01 – Create login UI** ✅ COMPLETE (v0.1.1.1+1)
- [x] **E1:S1:T02 – Implement authentication logic** ✅ COMPLETE (v0.1.1.2+1)
- [x] **E1:S1:T03 – Add session management** ✅ COMPLETE (v0.1.1.3+1)
```

**Note:** Story marked complete with final task version (`v0.1.1.3+1`).

---

## Example 7: Integration Testing

### Test Scenario 1: Version Bump Logic

**Test:** Verify RW Step 2 correctly handles new task

```python
# Test setup
current_version = "0.1.1.1+1"  # Task 1, Build 1
completed_task = 2              # Task 2 completed

# Expected result
expected_version = "0.1.1.2+1"  # Task 2, Build 1

# Validation
assert VERSION_TASK == 2
assert VERSION_BUILD == 1
assert VERSION_STRING == "0.1.1.2+1"
```

### Test Scenario 2: Same Task Build Increment

**Test:** Verify RW Step 2 correctly increments BUILD for same task

```python
# Test setup
current_version = "0.1.1.1+1"  # Task 1, Build 1
completed_task = 1              # Task 1 (same task)

# Expected result
expected_version = "0.1.1.1+2"  # Task 1, Build 2

# Validation
assert VERSION_TASK == 1
assert VERSION_BUILD == 2
assert VERSION_STRING == "0.1.1.1+2"
```

### Test Scenario 3: Out-of-Order Completion

**Test:** Verify RW Step 2 correctly handles out-of-order completion

```python
# Test setup
current_version = "0.1.1.5+1"  # Task 5, Build 1
completed_task = 2              # Task 2 completed (out of order)

# Expected result
expected_version = "0.1.1.2+1"  # Task 2, Build 1 (not Task 5 BUILD increment)

# Validation
assert VERSION_TASK == 2
assert VERSION_BUILD == 1
assert VERSION_STRING == "0.1.1.2+1"
```

### Test Scenario 4: Changelog Canonical Ordering

**Test:** Verify changelog entries ordered by version number

```python
# Test setup
entries = [
    "0.1.1.5+1",  # Task 5
    "0.1.1.2+1",  # Task 2 (completed after Task 5)
    "0.1.1.3+1",  # Task 3
]

# Expected ordering (canonical)
expected_order = [
    "0.1.1.2+1",  # Task 2 < Task 3 < Task 5
    "0.1.1.3+1",
    "0.1.1.5+1",
]

# Validation
sorted_entries = sorted(entries, key=lambda v: tuple(map(int, v.replace('+', '.').split('.'))))
assert sorted_entries == expected_order
```

### Test Scenario 5: Kanban Update Consistency

**Test:** Verify ALL sections updated in Epic document

```python
# Test setup
epic_file = "docs/kanban/epics/Epic-1/Epic-1.md"
story_file = "docs/kanban/epics/Epic-1/Story-1-Login-System.md"
completed_task = "E1:S1:T01"

# Expected updates
expected_updates = [
    "Epic header 'Last updated' field",
    "Story Checklist entry",
    "Detailed story section 'Status'",
    "Detailed story section 'Last updated'",
    "Task checkbox with forensic marker",
]

# Validation
epic_content = read_file(epic_file)
assert "v0.1.1.1+1" in epic_content  # Version in header
assert "✅ COMPLETE (v0.1.1.1+1)" in epic_content  # Marker in checklist
assert "Story 1" in epic_content  # Story section updated
```

---

## Copy-Paste Ready Configurations

### Minimal RW Config

**File:** `rw-config.yaml`

```yaml
version_file: "src/myproject/version.py"
kanban_root: "docs/kanban"
epic_doc_pattern: "docs/kanban/epics/Epic-{epic}/Epic-{epic}.md"
story_doc_pattern: "docs/kanban/epics/Epic-{epic}/Story-{N}-*.md"
changelog_root: "docs/changelog"
main_changelog: "CHANGELOG.md"
readme_file: "README.md"
```

### Standard Version File Template

**File:** `src/myproject/version.py`

```python
"""
Project Version File

Schema: RC.EPIC.STORY.TASK+BUILD
"""

VERSION_RC = 0
VERSION_EPIC = 1
VERSION_STORY = 1
VERSION_TASK = 1
VERSION_BUILD = 1

VERSION_STRING = f"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}"
__version__ = VERSION_STRING
```

### Epic Document Template

**File:** `docs/kanban/epics/Epic-{N}.md`

```markdown
---
lifecycle: evergreen
created_at: {date}
---

# Epic {N} – {Name}

**Status:** TODO
**Priority:** {PRIORITY}
**Created:** {date}
**Last updated:** {date} (v{version} – {description})
**Version:** v{version}
**Code:** E{N}

---

## Story Checklist

- [ ] **Story 1 – {Name}** - TODO

---

## Story 1 – {Name}

**Status:** TODO
**Priority:** {PRIORITY}
**Created:** {date}
**Last updated:** {date}
**Version:** v{version}

### Task Checklist

- [ ] **E{N}:S1:T01 – {Name}** - TODO
```

### Story Document Template

**File:** `docs/kanban/epics/Epic-{N}/stories/Story-{M}-{Name}.md`

```markdown
---
lifecycle: evergreen
created_at: {date}
---

# Story {M} – {Name}

**Status:** TODO
**Priority:** {PRIORITY}
**Created:** {date}
**Last updated:** {date}
**Version:** v{version}
**Code:** E{N}S{M}

---

## Task Checklist

- [ ] **E{N}:S{M}:T01 – {Name}** - TODO

---

## Task 1 – {Name}

**Status:** TODO
**Priority:** {PRIORITY}
**Created:** {date}
**Last updated:** {date}

### Description

{Description}

### Acceptance Criteria

- [ ] {Criterion 1}
- [ ] {Criterion 2}
```

---

## Integration Checklist

### Initial Setup

- [ ] Install all three framework packages
- [ ] Create project directory structure
- [ ] Configure version file with `RC.EPIC.STORY.TASK+BUILD` schema
- [ ] Create first Epic document
- [ ] Create first Story document
- [ ] Configure RW trigger in `.cursorrules`
- [ ] Create `rw-config.yaml` (optional)
- [ ] Test version file reading

### First Release

- [ ] Complete Task 1 work (code changes)
- [ ] Update Story file: Mark Task 1 complete
- [ ] Trigger RW: Type 'RW' in AI assistant
- [ ] Verify version bump: `0.1.1.1+1`
- [ ] Verify Epic document updated
- [ ] Verify Story document updated
- [ ] Verify changelog entry created
- [ ] Verify Git tag created

### Ongoing Integration

- [ ] Always read Story file before version bump
- [ ] Always update ALL Kanban sections
- [ ] Always use canonical ordering for changelog
- [ ] Always run validators before committing
- [ ] Always validate consistency after updates

---

## Related Documentation

- **Integration Guide:** `kanban-workflow-integration.md`
- **Patterns & Best Practices:** `integration-patterns-and-best-practices.md`
- **Troubleshooting Guide:** `integration-troubleshooting-guide.md`
- **Kanban Framework:** `../kanban/README.md`
- **Versioning Framework:** `../../README.md`
- **Workflow Framework:** `../workflow mgt/README.md`
- **Workflow Flaws Reference:** `../../docs/architecture/standards-and-adrs/workflow-flaws-reference-guide.md` - Comprehensive reference for all discovered RW flaws

---

**Integration Examples Complete!** Use these examples to integrate all three frameworks in your project! 🚀

