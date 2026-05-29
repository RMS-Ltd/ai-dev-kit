---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-08T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Package Version Workflow: Agent Execution Guide

**Version:** 1.0.0
**Last Updated:** 2025-12-08
**Related:** Release Workflow, Agent-Driven Execution Methodology

---

## 📖 Overview

This document provides a **step-by-step agent execution guide** for the Package Version Workflow (PVW). PVW uses **intelligent agent-driven execution** to determine and apply appropriate SemVer bumps to packages based on actual changes.

**Key Principle:** PVW uses intelligent analysis and decision-making, not deterministic scripts. The agent analyzes actual changes, determines appropriate SemVer bumps using criteria as guidance, and documents reasoning clearly.

PVW always treats the **SemVer release version** as the **external-facing version** for packages, while the project-level internal version (`RC.EPIC.STORY.TASK+BUILD`) remains the forensic coordinate used by RW and Kanban.

**This guide shows exactly how an AI agent should analyze, determine, execute, validate, and proceed through each of the 6 PVW steps.**

---

## 🎯 Execution Context

### Workflow Definition

**Workflow:** Package Version Workflow (PVW)
**Type:** `package_version`
**Steps:** 6 steps (all required)
**Trigger:** RW Step 2.5 (after project version bump, before changelog creation)
**Canonical Example:** Yes - this workflow demonstrates agent-driven package versioning

### Agent Execution Pattern

For each step, the agent follows this pattern:
1. **ANALYZE** - Understand step requirements and context
2. **DETERMINE** - Decide what actions to take
3. **EXECUTE** - Perform the actions
4. **VALIDE** - Verify execution succeeded
5. **PROCEED** - Document and move to next step

### 🚨 MANDATORY: Progress Tracking with Cursor TODOs

**REQUIRED:** Agents **MUST** use `todo_write` to create and maintain a TODO list tracking all 6 PVW steps. This is **NOT OPTIONAL** - it is a mandatory requirement for PVW execution.

**Why TODOs are Required:**
- ✅ **User Visibility:** User can see real-time progress through all 6 steps
- ✅ **Agent Organization:** Helps agent stay organized across sequential steps
- ✅ **Error Recovery:** Clear visibility into where execution stopped if interrupted
- ✅ **User Transparency:** User can verify all steps completed successfully
- ✅ **Status Management:** Automatic status updates provide clear execution state
- ✅ **Accountability:** Provides audit trail of workflow execution
- ✅ **Agentic Drift Prevention:** TODOs serve as checkpoints to prevent workflow drift and ensure all steps are completed

**Required Implementation Pattern:**

1. **At Workflow Start (MANDATORY):** Create TODO list with all 6 steps as `pending`
   ```python
   todo_write(merge=False, todos=[
       {'id': 'pvw-step-1', 'status': 'pending', 'content': 'Step 1: Detect Changed Packages - Analyze git diff to identify changed packages'},
       {'id': 'pvw-step-2', 'status': 'pending', 'content': 'Step 2: Analyze Package Changes - Read package files, identify what changed'},
       {'id': 'pvw-step-3', 'status': 'pending', 'content': 'Step 3: Determine Version Bumps - Analyze changes against criteria, determine bump type'},
       {'id': 'pvw-step-4', 'status': 'pending', 'content': 'Step 4: Execute Version Updates - Update README, create changelog, document justification'},
       {'id': 'pvw-step-5', 'status': 'pending', 'content': 'Step 5: Validate Updates - Run validation scripts as tools, verify format/consistency'},
       {'id': 'pvw-step-6', 'status': 'pending', 'content': 'Step 6: Document & Proceed - Document changes, pass to RW Step 3'},
   ])
   ```

2. **Before Each Step (MANDATORY):** Mark step as `in_progress`
   ```python
   todo_write(merge=True, todos=[{'id': 'pvw-step-1', 'status': 'in_progress'}])
   ```

3. **After Each Step (MANDATORY):** Mark step as `completed` and mark next step as `in_progress`
   ```python
   todo_write(merge=True, todos=[
       {'id': 'pvw-step-1', 'status': 'completed'},
       {'id': 'pvw-step-2', 'status': 'in_progress'}
   ])
   ```

4. **On Completion (MANDATORY):** All steps marked as `completed`
   ```python
   todo_write(merge=True, todos=[{'id': 'pvw-step-6', 'status': 'completed'}])
   ```

**Enforcement:**
- ❌ **DO NOT** execute PVW without creating TODO list first
- ❌ **DO NOT** skip TODO updates between steps
- ✅ **MUST** create TODO list before Step 1 execution
- ✅ **MUST** update TODO status before and after each step
- ✅ **MUST** mark all steps as completed on successful completion
- ✅ **MUST** use TODOs as checkpoints to prevent agentic drift

**Note:** The markdown checklist below serves as a reference, but Cursor TODOs are the **REQUIRED** mechanism for real-time progress tracking, user visibility, and drift prevention.

---

## Step 1: Detect Changed Packages

**TODO ID:** `pvw-step-1`

**MANDATORY:** Before starting Step 1, mark TODO as `in_progress`:
```python
todo_write(merge=True, todos=[{'id': 'pvw-step-1', 'status': 'in_progress'}])
```

### ANALYZE

**Purpose:** Identify which packages have changed and need version bumps.

**Agent Actions:**
1. Read PVW workflow definition
2. Understand packages directory structure (`packages/frameworks/`)
3. Analyze git diff to identify changed files
4. Map changed files to packages
5. Determine which packages have significant changes

**Context Gathering:**
- Current git diff (what files changed?)
- Package directory structure (where are packages?)
- Change threshold (what counts as "significant"?)

### DETERMINE

**Agent Decisions:**
1. Which packages have changed?
2. Are changes significant enough to warrant version bump?
3. Should any packages be skipped (e.g., only formatting changes)?

**Decision Logic:**
- Analyze git diff for files in `packages/frameworks/*/`
- Group changes by package
- Evaluate significance:
  - ✅ Significant: New files, removed files, structural changes, policy changes
  - ⚠️ Maybe significant: Content changes, documentation updates
  - ❌ Not significant: Formatting only, whitespace only

### EXECUTE

**Agent Actions:**
1. Run git diff analysis
2. Map changed files to packages
3. Evaluate significance of changes
4. Create list of packages needing version bumps

**Example Output:**
```python
changed_packages = [
    {
        'name': 'workflow mgt',
        'path': 'packages/frameworks/workflow mgt',
        'changes': ['integration/kanban-integration.md'],  # New file
        'significance': 'significant'
    },
    {
        'name': 'kanban',
        'path': 'packages/frameworks/kanban',
        'changes': ['README.md'],  # Content update
        'significance': 'maybe_significant'
    }
]
```

### VALIDATE

**Agent Checks:**
- ✅ Changed packages identified correctly
- ✅ Significance evaluation reasonable
- ✅ No packages missed

### PROCEED

**Agent Actions:**
- Document detected packages
- Pass list to Step 2
- **MANDATORY:** Update TODO status:
  ```python
  todo_write(merge=True, todos=[
      {'id': 'pvw-step-1', 'status': 'completed'},
      {'id': 'pvw-step-2', 'status': 'in_progress'}
  ])
  ```

---

## Step 2: Analyze Package Changes

**TODO ID:** `pvw-step-2`

**MANDATORY:** Before starting Step 2, mark TODO as `in_progress`:
```python
todo_write(merge=True, todos=[{'id': 'pvw-step-2', 'status': 'in_progress'}])
```

### ANALYZE

**Purpose:** Understand what actually changed in each package to inform version bump decision.

**Agent Actions:**
1. For each changed package:
   - Read package README (current version, package type)
   - Read changed files (what was added/removed/modified?)
   - Understand package structure and dependencies
   - Gather context (project version, related changes)

**Context Gathering:**
- Current package version (from README)
- Package type (documentation, scripts, templates, etc.)
- Actual file changes (git diff content)
- Package structure and dependencies

### DETERMINE

**Agent Decisions:**
1. What type of changes occurred?
   - New files added?
   - Files removed?
   - Content modified?
   - Structure changed?
2. What is the impact?
   - Breaking changes?
   - New features?
   - Bug fixes?
   - Clarifications?

**Analysis Pattern:**
```python
for package in changed_packages:
    # Read package files
    readme = read_file(f"{package['path']}/README.md")
    current_version = extract_version(readme)
    
    # Analyze changes
    changes = analyze_git_diff(package['path'])
    change_types = classify_changes(changes)
    
    # Determine impact
    impact = assess_impact(change_types, package['type'])
```

### EXECUTE

**Agent Actions:**
1. Read package files and structure
2. Analyze git diff for each package
3. Classify changes (added/removed/modified)
4. Assess impact (breaking/new feature/bug fix/clarification)
5. Gather data using `get_package_changes.py` script (as tool)

**Example Output:**
```python
package_analysis = {
    'workflow mgt': {
        'current_version': '2.0.0',
        'package_type': 'documentation + scripts',
        'changes': {
            'added': ['integration/kanban-integration.md'],
            'removed': [],
            'modified': []
        },
        'change_types': ['new_feature'],
        'impact': 'new_feature_backward_compatible'
    }
}
```

### VALIDATE

**Agent Checks:**
- ✅ Changes analyzed correctly
- ✅ Impact assessment reasonable
- ✅ Context gathered completely

### PROCEED

**Agent Actions:**
- Document package analysis
- Pass analysis to Step 3
- **MANDATORY:** Update TODO status:
  ```python
  todo_write(merge=True, todos=[
      {'id': 'pvw-step-2', 'status': 'completed'},
      {'id': 'pvw-step-3', 'status': 'in_progress'}
  ])
  ```

---

## Step 3: Determine Version Bumps

**TODO ID:** `pvw-step-3`

**MANDATORY:** Before starting Step 3, mark TODO as `in_progress`:
```python
todo_write(merge=True, todos=[{'id': 'pvw-step-3', 'status': 'in_progress'}])
```

### ANALYZE

**Purpose:** Determine appropriate SemVer bump type (MAJOR/MINOR/PATCH) for each package.

**Agent Actions:**
1. Review version bump criteria (as guidance, not rules)
2. Analyze package changes against criteria
3. Consider package-specific context
4. Evaluate impact and compatibility

**Criteria Reference (Guidance):**
- **MAJOR (X.0.0):** Breaking changes (removing files, changing structure, breaking API)
- **MINOR (x.Y.0):** New features, enhancements, additions (backward compatible)
- **PATCH (x.y.Z):** Bug fixes, corrections, clarifications (no new functionality)

### DETERMINE

**Agent Decisions:**
1. What bump type is appropriate?
   - Analyze changes against criteria
   - Consider context and impact
   - Make intelligent decision (not mechanical)
2. What is the reasoning?
   - Document why this bump type was chosen
   - Reference specific changes
   - Explain impact assessment

**Decision Pattern:**
```python
for package, analysis in package_analysis.items():
    # Analyze against criteria (guidance)
    if has_breaking_changes(analysis):
        bump_type = 'MAJOR'
        reasoning = f"Breaking change: {describe_breaking_change(analysis)}"
    elif has_new_features(analysis):
        bump_type = 'MINOR'
        reasoning = f"New feature: {describe_new_feature(analysis)}"
    elif has_bug_fixes(analysis):
        bump_type = 'PATCH'
        reasoning = f"Bug fix: {describe_bug_fix(analysis)}"
    else:
        # Agent makes intelligent decision based on context
        bump_type = determine_based_on_context(analysis)
        reasoning = f"Context-based decision: {explain_context(analysis)}"
```

### EXECUTE

**Agent Actions:**
1. Analyze each package's changes against criteria
2. Determine bump type (MAJOR/MINOR/PATCH)
3. Calculate new version (e.g., 2.0.0 → 2.1.0 for MINOR)
4. Document reasoning and justification

**Example Output:**
```python
version_bumps = {
    'workflow mgt': {
        'old_version': '2.0.0',
        'new_version': '2.1.0',
        'bump_type': 'MINOR',
        'reasoning': 'Added new integration guide for Kanban package. This is a new feature that is backward compatible.',
        'justification': {
            'changes': ['integration/kanban-integration.md'],
            'impact': 'new_feature_backward_compatible',
            'criteria_match': 'MINOR: New features, enhancements, additions (backward compatible)'
        }
    }
}
```

### VALIDATE

**Agent Checks:**
- ✅ Bump type aligns with changes
- ✅ Reasoning is clear and justified
- ✅ Version increment is valid (not backwards, not skipping)

### PROCEED

**Agent Actions:**
- Document version bump decisions
- Pass decisions to Step 4
- **MANDATORY:** Update TODO status:
  ```python
  todo_write(merge=True, todos=[
      {'id': 'pvw-step-3', 'status': 'completed'},
      {'id': 'pvw-step-4', 'status': 'in_progress'}
  ])
  ```

---

## Step 4: Execute Version Updates

**TODO ID:** `pvw-step-4`

**MANDATORY:** Before starting Step 4, mark TODO as `in_progress`:
```python
todo_write(merge=True, todos=[{'id': 'pvw-step-4', 'status': 'in_progress'}])
```

### ANALYZE

**Purpose:** Update package versions in all locations and create changelog entries.

**Agent Actions:**
1. Understand version update requirements:
   - Update README.md (`**Version:** X.Y.Z`)
   - Update package manifest files (if published)
   - Create/update package changelog
   - Document justification
2. Plan update approach for each package

### DETERMINE

**Agent Decisions:**
1. What files need updating?
   - README.md (always)
   - Package manifest files (if published)
   - Package changelog (create or update)
2. What content needs updating?
   - Version number
   - Last updated date
   - Changelog entry
   - Justification documentation

### EXECUTE

**Agent Actions:**
1. For each package:
   - Update README.md version
   - Update `**Last Updated:**` date
   - Create/update package changelog entry
   - Document justification

**Example: Update README**
```markdown
**Version:** 2.1.0
**Last Updated:** 2025-12-08
```

**Example: Create Changelog Entry**
```markdown
## [2.1.0] - 2025-12-08

**Package Version:** 2.1.0
**Project Version:** 0.3.2.8+1
**Bump Type:** MINOR

### Justification
Added new integration guide for Kanban package. This is a new feature that is backward compatible.

### Added
- `integration/kanban-integration.md` - Integration guide for Kanban package
```

### VALIDATE

**Agent Checks:**
- ✅ Version updated in README
- ✅ Changelog entry created
- ✅ Justification documented
- ✅ All locations updated

### PROCEED

**Agent Actions:**
- Document updates made
- Pass updated versions to Step 5
- **MANDATORY:** Update TODO status:
  ```python
  todo_write(merge=True, todos=[
      {'id': 'pvw-step-4', 'status': 'completed'},
      {'id': 'pvw-step-5', 'status': 'in_progress'}
  ])
  ```

---

## Step 5: Validate Updates

**TODO ID:** `pvw-step-5`

**MANDATORY:** Before starting Step 5, mark TODO as `in_progress`:
```python
todo_write(merge=True, todos=[{'id': 'pvw-step-5', 'status': 'in_progress'}])
```

### ANALYZE

**Purpose:** Validate that version updates are correct using validation scripts as tools.

**Agent Actions:**
1. Understand validation requirements:
   - Format validation (SemVer format)
   - Increment validation (valid progression)
   - Consistency validation (matches across locations)
   - Changelog validation (entry exists and complete)
2. Plan validation approach

### DETERMINE

**Agent Decisions:**
1. Which validations to run?
   - Format validation (always)
   - Increment validation (always)
   - Consistency validation (always)
   - Changelog validation (always)
2. How to handle validation failures?
   - Analyze error
   - Determine fix
   - Re-execute if needed

### EXECUTE

**Agent Actions:**
1. Run validation scripts as tools:
   - `validate_package_version_format.py` - Check SemVer format
   - `validate_package_version_increment.py` - Check increment validity
   - `validate_package_version_consistency.py` - Check consistency
   - Check changelog entry exists and is complete

**Example: Run Validation**
```python
# Run format validation (tool, not determiner)
result = run_script("validate_package_version_format.py", version="2.1.0")
if not result.success:
    # Agent analyzes error and determines fix
    analyze_error(result.error)
    fix_version_format()
    re_validate()
```

### VALIDATE

**Agent Checks:**
- ✅ All validation scripts pass
- ✅ Version format correct
- ✅ Version increment valid
- ✅ Version consistent across locations
- ✅ Changelog entry complete

### PROCEED

**Agent Actions:**
- Document validation results
- Pass validated versions to Step 6
- **MANDATORY:** Update TODO status:
  ```python
  todo_write(merge=True, todos=[
      {'id': 'pvw-step-5', 'status': 'completed'},
      {'id': 'pvw-step-6', 'status': 'in_progress'}
  ])
  ```

---

## Step 6: Document & Proceed

**TODO ID:** `pvw-step-6`

**MANDATORY:** Before starting Step 6, mark TODO as `in_progress`:
```python
todo_write(merge=True, todos=[{'id': 'pvw-step-6', 'status': 'in_progress'}])
```

### ANALYZE

**Purpose:** Document PVW execution and pass package version info to RW Step 3.

**Agent Actions:**
1. Understand documentation requirements:
   - Document all package version changes
   - Document reasoning for each bump
   - Pass package version info to RW Step 3
2. Plan documentation approach

### DETERMINE

**Agent Decisions:**
1. What to document?
   - All package version changes
   - Reasoning for each bump
   - Summary of PVW execution
2. How to pass info to RW?
   - Include package versions in RW Step 3 (changelog)
   - Document in RW execution context

### EXECUTE

**Agent Actions:**
1. Document PVW execution summary:
   ```markdown
   ## Package Version Updates
   
   **Workflow Management:** 2.0.0 → 2.1.0 (MINOR) - Added Kanban integration guide
   **Kanban:** 1.0.0 → 1.0.1 (PATCH) - Fixed broken link in README
   ```
2. Pass package version info to RW Step 3
3. Continue to RW Step 3 (changelog creation)

### VALIDATE

**Agent Checks:**
- ✅ PVW execution documented
- ✅ Package versions passed to RW
- ✅ Ready to continue RW

### PROCEED

**Agent Actions:**
- Complete PVW execution
- Continue to RW Step 3
- **MANDATORY:** Update TODO status:
  ```python
  todo_write(merge=True, todos=[
      {'id': 'pvw-step-6', 'status': 'completed'},
      {'id': 'rw-step-3', 'status': 'in_progress'}  # Continue to RW Step 3
  ])
  ```

---

## Integration with Release Workflow

### PVW as RW Step 2.5

**Execution Flow:**
```
RW Step 1: Branch Safety Check
RW Step 2: Bump Project Version
RW Step 2.5: Package Version Workflow (PVW) ← Executes here
  ├─ Step 1: Detect Changed Packages
  ├─ Step 2: Analyze Package Changes
  ├─ Step 3: Determine Version Bumps
  ├─ Step 4: Execute Version Updates
  ├─ Step 5: Validate Updates
  └─ Step 6: Document & Proceed
RW Step 3: Create Detailed Changelog (includes package versions)
RW Step 4: Update Main Changelog
...
```

### Trigger Pattern

**PVW Triggered By:**
- RW execution (automatic, as Step 2.5)
- Manual trigger: "PVW" command (for testing/debugging)

**PVW Execution Context:**
- Project version already bumped (RW Step 2 complete)
- Git changes available for analysis
- Package changes detected or specified

---

## Key Principles

### Agent-Driven Execution

- ✅ **Intelligent Analysis:** Agent analyzes actual changes, not mechanical rules
- ✅ **Context-Aware:** Agent considers package type, impact, and context
- ✅ **Adaptive:** Agent handles edge cases intelligently
- ✅ **Reasoning:** Agent documents decisions clearly

### Validation Scripts as Tools

- ✅ **Tools, Not Determiners:** Scripts provide checks and data, not decisions
- ✅ **Agent Uses Scripts:** Agent runs scripts to validate, not to decide
- ✅ **Error Analysis:** Agent analyzes validation errors and determines fixes

### Criteria as Guidance

- ✅ **Guidance, Not Rules:** Criteria inform decisions, not dictate them
- ✅ **Intelligent Application:** Agent applies criteria intelligently based on context
- ✅ **Documentation:** Agent documents how criteria were applied

---

## Examples

### Example 1: MINOR Bump (New Feature)

**Scenario:** Added new integration guide to Workflow Management package

**Agent Execution:**
1. **Detect:** New file `integration/kanban-integration.md` added
2. **Analyze:** New feature, backward compatible
3. **Determine:** MINOR bump (2.0.0 → 2.1.0)
4. **Execute:** Update README, create changelog entry
5. **Validate:** Format valid, increment valid, consistency valid
6. **Document:** "Workflow Management: 2.0.0 → 2.1.0 (MINOR) - Added Kanban integration guide"

### Example 2: PATCH Bump (Bug Fix)

**Scenario:** Fixed broken link in Kanban package README

**Agent Execution:**
1. **Detect:** README.md modified
2. **Analyze:** Link fix, no new functionality
3. **Determine:** PATCH bump (1.0.0 → 1.0.1)
4. **Execute:** Update README, create changelog entry
5. **Validate:** Format valid, increment valid, consistency valid
6. **Document:** "Kanban: 1.0.0 → 1.0.1 (PATCH) - Fixed broken link in README"

### Example 3: MAJOR Bump (Breaking Change)

**Scenario:** Removed deprecated template file from Numbering & Versioning package

**Agent Execution:**
1. **Detect:** File `templates/deprecated-template.md` removed
2. **Analyze:** Breaking change, removes feature
3. **Determine:** MAJOR bump (2.0.0 → 3.0.0)
4. **Execute:** Update README, create changelog entry with migration notes
5. **Validate:** Format valid, increment valid, consistency valid
6. **Document:** "Numbering & Versioning: 2.0.0 → 3.0.0 (MAJOR) - Removed deprecated template"

---

## Troubleshooting

### Issue: No Packages Changed

**Agent Response:**
- Skip PVW execution
- Document: "No package changes detected, skipping PVW"
- **MANDATORY:** Mark all PVW steps as `cancelled`:
  ```python
  todo_write(merge=True, todos=[
      {'id': 'pvw-step-1', 'status': 'cancelled'},
      {'id': 'pvw-step-2', 'status': 'cancelled'},
      {'id': 'pvw-step-3', 'status': 'cancelled'},
      {'id': 'pvw-step-4', 'status': 'cancelled'},
      {'id': 'pvw-step-5', 'status': 'cancelled'},
      {'id': 'pvw-step-6', 'status': 'cancelled'},
  ])
  ```
- Continue to RW Step 3

### Issue: Validation Failure

**Agent Response:**
- Analyze validation error
- Determine fix (format, increment, consistency)
- Re-execute update if needed
- Re-validate until all checks pass

### Issue: Ambiguous Bump Type

**Agent Response:**
- Analyze changes more deeply
- Consider context and impact
- Make intelligent decision based on criteria guidance
- Document reasoning clearly
- **MANDATORY:** Continue TODO tracking - do not skip steps

### Issue: Agentic Drift (Agent Loses Track of Steps)

**Prevention:**
- ✅ **MANDATORY:** Create TODO list at workflow start
- ✅ **MANDATORY:** Update TODO status before each step
- ✅ **MANDATORY:** Update TODO status after each step
- ✅ Use TODOs as checkpoints to prevent drift

**Recovery:**
- Check current TODO status to see where execution stopped
- Resume from the last `in_progress` or `pending` step
- Do not skip steps - complete all 6 steps in order

---

**Last Updated:** 2025-12-08
**Document Version:** 1.0.0

