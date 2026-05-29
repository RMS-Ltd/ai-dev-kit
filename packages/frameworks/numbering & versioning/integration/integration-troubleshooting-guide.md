---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T20:30:00Z
expires_at: null
housekeeping_policy: keep
---

# Integration Troubleshooting Guide: Kanban + Versioning + Release Workflow

**Package:** Numbering & Versioning Package v2.0.0  
**Integrates With:** Kanban System Package v1.0.0, Workflow Management Package v2.0.0  
**Document Type:** Troubleshooting and Debugging Guide  
**Last Updated:** 2025-12-04  
**Target Audience:** External projects adopting all three frameworks

---

## Overview

This document provides **comprehensive troubleshooting guidance** for common integration issues when using Kanban, Versioning, and Release Workflow frameworks together. It includes decision trees, debugging strategies, and solutions for edge cases.

**Related Documentation:**
- **Integration Guide:** `kanban-workflow-integration.md` (comprehensive three-way integration)
- **Patterns & Best Practices:** `integration-patterns-and-best-practices.md` (patterns and anti-patterns)
- **Examples:** `integration-examples-external-projects.md` (step-by-step examples)
- **This Document:** Troubleshooting, debugging, and edge case handling

---

## Quick Reference: Common Issues

| Issue | Symptom | Solution | Section |
|-------|---------|----------|---------|
| Version Bump Logic Error | Wrong TASK component or BUILD increment | Verify RW Step 2 logic, check Story file | [Issue 1](#issue-1-version-bump-logic-error) |
| Changelog Ordering Violation | Entries in wrong order | Use canonical ordering, run validator | [Issue 2](#issue-2-changelog-ordering-violation) |
| Kanban Docs Not Updated | Missing forensic markers | Verify RW Step 6, check ALL sections | [Issue 3](#issue-3-kanban-documentation-not-updated) |
| Out-of-Order Versioning Error | Wrong version for out-of-order task | Use completed task number, BUILD = 1 | [Issue 4](#issue-4-out-of-order-versioning-error) |
| Forensic Marker Inconsistency | Different formats across docs | Use RW automation, validate format | [Issue 5](#issue-5-forensic-marker-inconsistency) |
| Version File Not Found | Validator can't find version file | Check path in rw-config.yaml | [Issue 6](#issue-6-version-file-not-found) |
| Story File Not Found | Validator can't find story file | Check path pattern, verify file exists | [Issue 7](#issue-7-story-file-not-found) |
| Validation Failures | Multiple validators failing | Run validators individually, check logs | [Issue 8](#issue-8-validation-failures) |

---

## Issue 1: Version Bump Logic Error

### Symptoms

- Version shows wrong TASK component (e.g., `0.1.1.1+2` for Task 2)
- BUILD increments when it should reset (e.g., `0.1.1.1+3` for Task 3)
- Version doesn't match completed task number

### Root Causes

1. **RW Step 2 not reading Story file:** Story file not read to identify completed task
2. **Incorrect task comparison:** Completed task not compared to current VERSION_TASK
3. **Wrong logic branch:** Using BUILD increment instead of TASK increment for new tasks
4. **Out-of-order handling error:** Treating out-of-order completion as BUILD increment

### Diagnosis

```bash
# Step 1: Check current version
cat src/myproject/version.py | grep VERSION_TASK

# Step 2: Check Story file for completed task
grep -E "E[0-9]+:S[0-9]+:T[0-9]+.*COMPLETE" docs/kanban/epics/Epic-*/stories/Story-*.md

# Step 3: Compare completed task vs. current VERSION_TASK
# If completed > current: Should be NEW TASK (TASK = completed, BUILD = 1)
# If completed == current: Should be SAME TASK (BUILD = current + 1)
# If completed < current: Should be OUT-OF-ORDER (TASK = completed, BUILD = 1)
```

### Solution

**For New Task:**
```python
# Current: 0.1.1.1+1 (Task 1)
# Completed: Task 2
# Correct: 0.1.1.2+1 (TASK = 2, BUILD = 1)

VERSION_TASK = 2  # Set to completed task
VERSION_BUILD = 1  # Reset to 1
```

**For Same Task:**
```python
# Current: 0.1.1.1+1 (Task 1)
# Completed: Task 1 (same task)
# Correct: 0.1.1.1+2 (TASK = 1, BUILD = 2)

VERSION_TASK = 1  # Keep same
VERSION_BUILD = 2  # Increment
```

**For Out-of-Order:**
```python
# Current: 0.1.1.5+1 (Task 5)
# Completed: Task 2 (out of order)
# Correct: 0.1.1.2+1 (TASK = 2, BUILD = 1)

VERSION_TASK = 2  # Set to completed task
VERSION_BUILD = 1  # Reset to 1 (not Task 5 BUILD increment)
```

### Prevention

- Always read Story file in RW Step 2
- Always compare completed task vs. current VERSION_TASK
- Follow RW Step 2 logic exactly
- Run `validate_version_bump.py` before committing

---

## Issue 2: Changelog Ordering Violation

### Symptoms

- Changelog entries in wrong order (e.g., `0.3.2.4+1` before `0.2.4.9+3`)
- Entries ordered by timestamp instead of version number
- Validator reports ordering violations

### Root Causes

1. **Chronological insertion:** Inserting entries at top (newest first)
2. **Missing canonical ordering:** Not comparing version numbers correctly
3. **Manual insertion:** Manually adding entries without proper ordering

### Diagnosis

```bash
# Check changelog ordering
python packages/frameworks/workflow\ mgt/scripts/validation/validate_changelog_format.py --strict

# Expected output:
# ✅ CHANGELOG.md format validated!
# OR
# ❌ Changelog ordering violation: 0.3.2.4+1 appears before 0.2.4.9+3
```

### Solution

**Manual Fix:**
1. Parse all version numbers: `RC.EPIC.STORY.TASK+BUILD`
2. Sort by version components: RC → EPIC → STORY → TASK → BUILD
3. Reorder entries in CHANGELOG.md
4. Verify with validator

**Automatic Fix (RW Step 4):**
- RW Step 4 should use canonical ordering
- Compare version numbers, not timestamps
- Insert entry at correct position based on version number

**Example Correct Ordering:**
```markdown
## [0.2.4.9+3] - 2025-12-03
Epic 2, Story 4, Task 9, Build 3

## [0.3.2.4+1] - 2025-12-04
Epic 3, Story 2, Task 4, Build 1

## [0.3.2.5+1] - 2025-12-05
Epic 3, Story 2, Task 5, Build 1
```

**Note:** Epic 2 < Epic 3, so `0.2.4.9+3` appears before `0.3.2.4+1`, regardless of timestamp.

### Prevention

- Always use canonical ordering (version number comparison)
- Never insert entries at top (chronological)
- Run `validate_changelog_format.py` before committing
- Use RW Step 4 automatic insertion

---

## Issue 3: Kanban Documentation Not Updated

### Symptoms

- Missing forensic markers in Epic/Story documents
- Inconsistent markers across sections
- Story Checklist updated but detailed sections not updated
- Epic header not updated

### Root Causes

1. **RW Step 6 not executed:** Step 6 skipped or failed
2. **Partial updates:** Only Story Checklist updated, not ALL sections
3. **Wrong source:** Using Epic document instead of Story file as source
4. **Path issues:** Can't find Epic or Story documents

### Diagnosis

```bash
# Step 1: Check Epic document for markers
grep -E "✅ COMPLETE.*v[0-9]" docs/kanban/epics/Epic-*.md

# Step 2: Check Story file for completed tasks
grep -E "E[0-9]+:S[0-9]+:T[0-9]+.*COMPLETE" docs/kanban/epics/Epic-*/stories/Story-*.md

# Step 3: Compare Epic vs. Story (should match)
# Epic header should match Story Checklist
# Story Checklist should match detailed sections
```

### Solution

**Manual Fix:**
1. Read Story file (authoritative source)
2. Update Epic header "Last updated" field
3. Update Story Checklist entry
4. Update detailed story sections (Status, Last updated, task checkboxes)
5. Validate consistency

**Automatic Fix (RW Step 6):**
- RW Step 6 should update ALL sections
- Use Story file as authoritative source
- Follow systematic process: ANALYZE → DETERMINE → EXECUTE → VALIDATE

**Example Correct Update:**
```markdown
# Epic Document
**Last updated:** 2025-12-04 (v0.1.1.1+1 – E1:S1:T01 complete)

## Story Checklist
- [x] **Story 1 – Login System** ✅ COMPLETE (v0.1.1.3+1)

## Story 1 – Login System
**Status:** COMPLETE
**Last updated:** 2025-12-04 (v0.1.1.3+1 – Story 1 complete)
**Task Checklist:**
- [x] **E1:S1:T01** ✅ COMPLETE (v0.1.1.1+1)
- [x] **E1:S1:T02** ✅ COMPLETE (v0.1.1.2+1)
- [x] **E1:S1:T03** ✅ COMPLETE (v0.1.1.3+1)
```

### Prevention

- Always use RW Step 6 automation
- Always update ALL sections (not just checklist)
- Always use Story file as authoritative source
- Validate consistency after updates

---

## Issue 4: Out-of-Order Versioning Error

### Symptoms

- Out-of-order task versioned incorrectly (e.g., `0.1.1.6+2` for Task 5 when Task 6 at `+1`)
- BUILD increment used instead of TASK reset
- Version doesn't reflect completed task

### Root Causes

1. **Wrong logic branch:** Treated as BUILD increment instead of out-of-order
2. **Current VERSION_TASK used:** Used current (higher) task instead of completed task
3. **Missing out-of-order detection:** RW Step 2 doesn't detect out-of-order case

### Diagnosis

```bash
# Check current version
cat src/myproject/version.py | grep VERSION_TASK

# Check completed task from Story file
grep -E "E[0-9]+:S[0-9]+:T[0-9]+.*COMPLETE" docs/kanban/epics/Epic-*/stories/Story-*.md | tail -1

# Compare: If completed < current, should be out-of-order
```

### Solution

**Correct Pattern:**
```python
# Current: 0.1.1.6+1 (Task 6)
# Completed: Task 5 (out of order)
# Correct: 0.1.1.5+1 (TASK = 5, BUILD = 1)

VERSION_TASK = 5  # Set to completed task (not current Task 6)
VERSION_BUILD = 1  # Reset to 1 (not Task 6 BUILD increment)
```

**Incorrect Pattern (WRONG):**
```python
# Current: 0.1.1.6+1 (Task 6)
# Completed: Task 5 (out of order)
# Wrong: 0.1.1.6+2 (TASK = 6, BUILD = 2) ❌

VERSION_TASK = 6  # Wrong: Used current task
VERSION_BUILD = 2  # Wrong: Incremented BUILD
```

### Prevention

- Always use completed task number for version
- Always detect out-of-order case (completed < current)
- Always reset BUILD to 1 for out-of-order tasks
- Understand out-of-order completion is valid

---

## Issue 5: Forensic Marker Inconsistency

### Symptoms

- Different marker formats across documents
- Missing version numbers in markers
- Inconsistent emoji usage
- Markers don't match actual version

### Root Causes

1. **Manual updates:** Markers updated manually without standardization
2. **Missing automation:** RW Step 6 not used
3. **Format drift:** Format changed over time without updating all markers

### Diagnosis

```bash
# Check marker formats
grep -E "✅ COMPLETE.*v[0-9]" docs/kanban/epics/Epic-*.md
grep -E "✅ COMPLETE.*v[0-9]" docs/kanban/epics/Epic-*/stories/Story-*.md

# Expected format: ✅ COMPLETE (v0.1.1.1+1)
# Check for variations:
# - Missing version number
# - Wrong format
# - Inconsistent emoji
```

### Solution

**Standardize Format:**
```markdown
# Correct format
- [x] **E1:S1:T01 – Task Name** ✅ COMPLETE (v0.1.1.1+1)

# Incorrect formats
- [x] **E1:S1:T01** ✅ COMPLETE  # Missing version ❌
- [x] **E1:S1:T01** COMPLETE (v0.1.1.1+1)  # Missing emoji ❌
- [x] **E1:S1:T01** ✅ DONE (v0.1.1.1+1)  # Wrong word ❌
```

**Fix All Markers:**
1. Search for all markers
2. Standardize to: `✅ COMPLETE (v{version})`
3. Update all documents
4. Use RW Step 6 for future updates

### Prevention

- Always use RW Step 6 automation
- Always use standard format: `✅ COMPLETE (v{version})`
- Validate marker format consistency
- Use templates for manual updates

---

## Issue 6: Version File Not Found

### Symptoms

- Validator reports: "Could not find version file"
- RW Step 2 fails to read version
- Path errors in logs

### Root Causes

1. **Wrong path in config:** `rw-config.yaml` has incorrect path
2. **File doesn't exist:** Version file not created
3. **Path not absolute:** Relative path doesn't resolve correctly

### Diagnosis

```bash
# Check rw-config.yaml
cat rw-config.yaml | grep version_file

# Check if file exists
ls -la src/myproject/version.py

# Check default path
ls -la src/*/version.py
```

### Solution

**Fix Config:**
```yaml
# rw-config.yaml
version_file: "src/myproject/version.py"  # Correct path
```

**Create Version File:**
```python
# src/myproject/version.py
VERSION_RC = 0
VERSION_EPIC = 1
VERSION_STORY = 1
VERSION_TASK = 1
VERSION_BUILD = 1

VERSION_STRING = f"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}"
__version__ = VERSION_STRING
```

**Use Absolute Path (if needed):**
```yaml
# rw-config.yaml
version_file: "/absolute/path/to/project/src/myproject/version.py"
```

### Prevention

- Verify version file path in `rw-config.yaml`
- Use consistent path format (relative to project root)
- Create version file during initial setup
- Test version file reading before first RW

---

## Issue 7: Story File Not Found

### Symptoms

- Validator reports: "Could not find Story file for Epic X, Story Y"
- RW Step 2 can't read Story file
- Path pattern doesn't match actual file structure

### Root Causes

1. **Wrong path pattern:** `story_doc_pattern` doesn't match actual structure
2. **File doesn't exist:** Story file not created
3. **Naming mismatch:** File name doesn't match pattern

### Diagnosis

```bash
# Check rw-config.yaml pattern
cat rw-config.yaml | grep story_doc_pattern

# Check actual file structure
find docs/kanban -name "Story-*.md"

# Check pattern match
# Pattern: docs/kanban/epics/Epic-{epic}/stories/Story-{N}-*.md
# Actual: docs/kanban/epics/Epic-1/Story-1-Login-System.md
```

### Solution

**Fix Config Pattern:**
```yaml
# rw-config.yaml
story_doc_pattern: "docs/kanban/epics/Epic-{epic}/Story-{N}-*.md"
```

**Verify File Structure:**
```bash
# Expected structure
docs/kanban/epics/Epic-1/Story-1-Login-System.md
docs/kanban/epics/Epic-1/Story-2-Registration-System.md
```

**Create Story File:**
```bash
# Create Story file if missing
mkdir -p docs/kanban/epics/Epic-1
touch docs/kanban/epics/Epic-1/Story-1-Login-System.md
```

### Prevention

- Verify story file path pattern in `rw-config.yaml`
- Use consistent naming: `Story-{N}-{Name}.md`
- Create Story files during initial setup
- Test Story file reading before first RW

---

## Issue 8: Validation Failures

### Symptoms

- Multiple validators failing
- Unclear error messages
- Don't know which validator failed

### Root Causes

1. **Multiple issues:** Several problems at once
2. **Validator dependencies:** One validator depends on another
3. **Config issues:** Wrong paths or missing files

### Diagnosis

```bash
# Run validators individually
python packages/frameworks/workflow\ mgt/scripts/validation/validate_branch_context.py --strict
python packages/frameworks/workflow\ mgt/scripts/validation/validate_changelog_format.py --strict
python packages/frameworks/workflow\ mgt/scripts/validation/validate_version_bump.py --strict

# Check each validator output
# Fix issues one at a time
```

### Solution

**Run Validators Individually:**
1. Start with `validate_branch_context.py` (checks branch and version)
2. Then `validate_changelog_format.py` (checks changelog format and ordering)
3. Finally `validate_version_bump.py` (checks version bump logic)

**Fix Issues Sequentially:**
1. Fix branch context issues first
2. Fix changelog issues second
3. Fix version bump issues last

**Check Validator Logs:**
```bash
# Validators output detailed error messages
# Read error messages carefully
# Fix root cause, not just symptoms
```

### Prevention

- Run validators individually during development
- Fix issues as they arise
- Don't skip validators
- Understand what each validator checks

---

## Troubleshooting Decision Trees

### Decision Tree 1: Version Bump Issue

```
START: Version doesn't match expected

Is version file readable?
├─ NO → Fix path in rw-config.yaml (Issue 6)
│
└─ YES → Is Story file readable?
    ├─ NO → Fix path pattern in rw-config.yaml (Issue 7)
    │
    └─ YES → What's the completed task?
        ├─ Completed > current → NEW TASK
        │   ├─ Is VERSION_TASK = completed? → NO → Fix: Set TASK = completed, BUILD = 1
        │   └─ Is VERSION_BUILD = 1? → NO → Fix: Set BUILD = 1
        │
        ├─ Completed == current → SAME TASK
        │   ├─ Is VERSION_TASK unchanged? → NO → Fix: Keep TASK same
        │   └─ Is VERSION_BUILD incremented? → NO → Fix: Increment BUILD
        │
        └─ Completed < current → OUT-OF-ORDER
            ├─ Is VERSION_TASK = completed? → NO → Fix: Set TASK = completed, BUILD = 1
            └─ Is VERSION_BUILD = 1? → NO → Fix: Set BUILD = 1

END: Version fixed
```

### Decision Tree 2: Changelog Ordering Issue

```
START: Changelog ordering violation

Run validator:
python validate_changelog_format.py --strict

Does validator report violation?
├─ NO → Changelog is correct
│
└─ YES → What's the violation?
    ├─ Version X appears before Version Y, but X > Y
    │   → Fix: Reorder entries by version number
    │
    ├─ Duplicate version entries
    │   → Fix: Remove duplicate entry
    │
    └─ Missing version format
        → Fix: Ensure all entries follow format: [RC.EPIC.STORY.TASK+BUILD]

Parse all versions:
For each entry, extract: (RC, EPIC, STORY, TASK, BUILD)

Sort by version components:
Compare RC first, then EPIC, then STORY, then TASK, then BUILD

Reorder entries in CHANGELOG.md

Run validator again to verify

END: Changelog fixed
```

### Decision Tree 3: Kanban Update Issue

```
START: Kanban docs not updated

Is RW Step 6 executed?
├─ NO → Execute RW Step 6
│
└─ YES → What's missing?
    ├─ Epic header not updated
    │   → Fix: Update "Last updated" field with version
    │
    ├─ Story Checklist not updated
    │   → Fix: Update Story Checklist entry with forensic marker
    │
    ├─ Detailed sections not updated
    │   → Fix: Update Status, Last updated, task checkboxes
    │
    └─ Inconsistent markers
        → Fix: Standardize all markers to: ✅ COMPLETE (v{version})

Read Story file (authoritative source)

Update ALL sections:
- Epic header
- Story Checklist
- Detailed story sections

Validate consistency:
- Epic header matches Story Checklist
- Story Checklist matches detailed sections
- All task markers match Story file

END: Kanban docs fixed
```

---

## Debugging Strategies

### Strategy 1: Isolate the Problem

**Approach:**
1. Identify which component is failing (Kanban, Versioning, or RW)
2. Test each component independently
3. Narrow down to specific issue

**Example:**
```bash
# Test version file reading
python -c "from src.myproject.version import VERSION_STRING; print(VERSION_STRING)"

# Test Story file reading
cat docs/kanban/epics/Epic-1/Story-1-Login-System.md

# Test RW Step 2 logic manually
# Compare completed task vs. current VERSION_TASK
```

### Strategy 2: Check Dependencies

**Approach:**
1. Verify all prerequisites are met
2. Check file paths and permissions
3. Verify config files are correct

**Checklist:**
- [ ] Version file exists and is readable
- [ ] Story file exists and is readable
- [ ] Epic file exists and is readable
- [ ] rw-config.yaml is correct
- [ ] All paths are correct
- [ ] File permissions allow reading

### Strategy 3: Compare Expected vs. Actual

**Approach:**
1. Determine expected behavior
2. Check actual behavior
3. Identify differences
4. Fix differences

**Example:**
```yaml
expected:
  version: "0.1.1.2+1"
  task: "E1:S1:T02"
  marker: "✅ COMPLETE (v0.1.1.2+1)"

actual:
  version: "0.1.1.1+2"  # Wrong: TASK = 1, BUILD = 2
  task: "E1:S1:T02"
  marker: "✅ COMPLETE (v0.1.1.1+2)"  # Wrong version

difference:
  - VERSION_TASK should be 2, not 1
  - VERSION_BUILD should be 1, not 2
```

### Strategy 4: Use Validators

**Approach:**
1. Run validators to identify issues
2. Fix issues one at a time
3. Re-run validators to verify fixes

**Validators:**
```bash
# Branch context validator
python validate_branch_context.py --strict

# Changelog format validator
python validate_changelog_format.py --strict

# Version bump logic validator
python validate_version_bump.py --strict
```

---

## Edge Cases and Handling

### Edge Case 1: Task Renumbering

**Scenario:** Task numbers renumbered after versions assigned

**Problem:** Versions don't match new task numbers

**Solution:**
- Do NOT change existing version numbers (immutability)
- Update Kanban docs to reflect new task numbers
- Document renumbering and version mapping
- Keep version history intact

**Example:**
```yaml
before_renumbering:
  task: "E1:S1:T03"
  version: "0.1.1.3+1"

after_renumbering:
  task: "E1:S1:T02"  # Renumbered from T03 to T02
  version: "0.1.1.3+1"  # Keep original version

documentation:
  note: "Task renumbered from T03 to T02, version remains 0.1.1.3+1"
```

### Edge Case 2: Story Merged into Another Story

**Scenario:** Story 2 merged into Story 1

**Problem:** Versions from Story 2 need to be handled

**Solution:**
- Keep all versions from both stories
- Document merge in changelog
- Update Epic document to reflect merge
- Maintain version history

### Edge Case 3: Epic Split

**Scenario:** Epic 1 split into Epic 1 and Epic 2

**Problem:** Versions need to be reassigned

**Solution:**
- Create new Epic 2
- Assign new versions for Epic 2 work
- Keep Epic 1 versions unchanged
- Document split in changelog

### Edge Case 4: Version Conflict During Merge

**Scenario:** Two branches have same version number

**Problem:** Git merge conflict in version.py

**Solution:**
- Choose one version number (usually the one merging to main first)
- Update other branch to use next BUILD number
- Document conflict resolution
- Verify changelog ordering

**Example:**
```yaml
branch_a:
  version: "0.1.1.1+1"
  merged_first: true

branch_b:
  version: "0.1.1.1+1"  # Conflict
  solution: "Update to 0.1.1.1+2"
  merged_second: true
```

---

## Integration Validation Approaches

### Approach 1: Pre-Release Validation

**When:** Before triggering RW

**What to Check:**
- [ ] Story file has completed task marked
- [ ] Version file is readable
- [ ] Epic/Story documents exist
- [ ] rw-config.yaml is correct

**Command:**
```bash
# Manual checks
cat src/myproject/version.py
grep -E "E[0-9]+:S[0-9]+:T[0-9]+.*COMPLETE" docs/kanban/epics/Epic-*/stories/Story-*.md
cat rw-config.yaml
```

### Approach 2: Post-Release Validation

**When:** After RW completes

**What to Check:**
- [ ] Version file updated correctly
- [ ] Changelog entry added with correct ordering
- [ ] Kanban docs updated with forensic markers
- [ ] Git tag created
- [ ] All validators pass

**Command:**
```bash
# Run all validators
python validate_branch_context.py --strict
python validate_changelog_format.py --strict
python validate_version_bump.py --strict

# Check Git tag
git tag -l "v*" | tail -1

# Check changelog
grep -A 5 "\[0.1.1.1+1\]" CHANGELOG.md
```

### Approach 3: Continuous Validation

**When:** During development

**What to Check:**
- [ ] Version file format is correct
- [ ] Kanban docs are consistent
- [ ] Changelog ordering is correct
- [ ] Forensic markers are consistent

**Command:**
```bash
# Run validators regularly
# Add to CI/CD pipeline
# Run before each commit
```

---

## Related Documentation

- **Integration Guide:** `kanban-workflow-integration.md`
- **Patterns & Best Practices:** `integration-patterns-and-best-practices.md`
- **Examples:** `integration-examples-external-projects.md`
- **Versioning Cookbook:** `../../docs/architecture/standards-and-adrs/dev-kit-versioning-cookbook.md`
- **Versioning Error Reference:** `../../docs/architecture/standards-and-adrs/versioning-error-reference-guide.md`
- **Workflow Flaws Reference:** `../../docs/architecture/standards-and-adrs/workflow-flaws-reference-guide.md` - Comprehensive reference for all RW flaws

---

**Troubleshooting Guide Complete!** Use this guide to diagnose and fix integration issues! 🔧

