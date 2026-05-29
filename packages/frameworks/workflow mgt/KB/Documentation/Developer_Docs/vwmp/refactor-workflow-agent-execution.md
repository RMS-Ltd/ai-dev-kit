---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:02:13Z
expires_at: null
housekeeping_policy: keep
---

# Refactor Workflow: Agent Execution Guide

**Version:** 1.0.0
**Last Updated:** 2025-12-03
**Related:** Release Workflow (canonical example) | Agent-Driven Workflow Execution

---

## 📖 Overview

This document provides a **step-by-step agent execution guide** for the Refactor Workflow. The Refactor Workflow demonstrates how to apply the agent-driven execution pattern to code quality workflows.

**This guide shows exactly how an AI agent should analyze, determine, execute, validate, and proceed through each of the 13 Refactor Workflow steps.**

> **Note on Examples:** This document includes project-agnostic examples. When adopting this workflow in your own project, replace all examples with your project-specific paths, commands, and structures.

---

## 🎯 Execution Context

### Workflow Definition

**Workflow:** Refactor Workflow
**Type:** `refactor`
**Steps:** 13 steps organized into 4 phases:
- **Phase 1: Analysis & Planning (Steps 1-2)**
- **Phase 2: Execution (Steps 3-4)**
- **Phase 3: Validation (Steps 5-7)**
- **Phase 4: Documentation & Git Operations (Steps 8-13)**

**Canonical Example:** No - this is an example workflow based on the Release Workflow pattern

### Agent Execution Pattern

For each step, the agent follows this pattern:
1. **ANALYZE** - Understand step requirements and context
2. **DETERMINE** - Decide what actions to take
3. **EXECUTE** - Perform the actions
4. **VALIDATE** - Verify execution succeeded
5. **PROCEED** - Document and move to next step

### 🚨 MANDATORY: Progress Tracking with Cursor TODOs

**REQUIRED:** Agents **MUST** use `todo_write` to create and maintain a TODO list tracking all 13 Refactor Workflow steps. This is **NOT OPTIONAL** - it is a mandatory requirement for Refactor Workflow execution.

**Required Implementation Pattern:**

1. **At Workflow Start (MANDATORY):** Create TODO list with all 13 steps as `pending`
2. **Before Each Step (MANDATORY):** Mark step as `in_progress`
3. **After Each Step (MANDATORY):** Mark step as `completed` and mark next step as `in_progress`
4. **On Completion (MANDATORY):** All steps marked as `completed`

---

## Step-by-Step Execution Guide

### Step 1: Analyze Current Code Structure

**Purpose:** Understand the current code structure before refactoring

**Agent Actions:**

1. **ANALYZE:**
   - Read workflow parameters (target_module, refactor_type)
   - Identify target files and directories
   - Understand code structure and dependencies
   - Review existing tests and documentation

2. **DETERMINE:**
   - Determine analysis scope
   - Identify key components to analyze
   - Plan analysis approach

3. **EXECUTE:**
   - Analyze code structure
   - Identify dependencies
   - Document current state
   - Create analysis report

4. **VALIDATE:**
   - Verify analysis is complete
   - Check analysis report is accurate
   - Confirm all dependencies identified

5. **PROCEED:**
   - Document analysis results
   - Pass analysis to Step 2
   - Mark Step 1 as complete

**Example Analysis:**
```python
# Agent analyzes target module
target_module = "src/utils/validation.py"
analysis = {
    "files": ["src/utils/validation.py", "src/utils/validators.py"],
    "dependencies": ["src/core/types.py", "src/core/errors.py"],
    "complexity": "medium",
    "test_coverage": "85%",
    "issues": ["long functions", "duplicated logic"]
}
```

---

### Step 2: Plan Refactoring Approach

**Purpose:** Create a detailed plan for the refactoring

**Agent Actions:**

1. **ANALYZE:**
   - Review analysis from Step 1
   - Understand refactoring type and goals
   - Consider constraints (preserve functionality, test coverage)

2. **DETERMINE:**
   - Determine refactoring strategy
   - Plan specific refactoring steps
   - Identify risks and mitigation strategies

3. **EXECUTE:**
   - Create refactoring plan document
   - Define refactoring steps
   - Document expected outcomes
   - Create rollback plan

4. **VALIDATE:**
   - Verify plan is complete
   - Check plan addresses all issues
   - Confirm plan is feasible

5. **PROCEED:**
   - Document refactoring plan
   - Pass plan to Step 3
   - Mark Step 2 as complete

**Example Plan:**
```markdown
# Refactoring Plan

## Target: src/utils/validation.py

## Issues Identified:
- Long functions (>50 lines)
- Duplicated validation logic
- Missing type hints

## Refactoring Steps:
1. Extract validation functions into separate module
2. Add type hints to all functions
3. Consolidate duplicated logic
4. Update tests

## Expected Outcomes:
- Functions <30 lines
- 100% type coverage
- No duplicated logic
- All tests pass
```

---

### Step 3: Create Refactoring Branch

**Purpose:** Create a git branch for the refactoring work

**Agent Actions:**

1. **ANALYZE:**
   - Check current git branch
   - Review branch naming convention
   - Understand branch structure

2. **DETERMINE:**
   - Determine branch name
   - Plan branch creation
   - Check if branch already exists

3. **EXECUTE:**
   - Create refactoring branch
   - Switch to new branch
   - Verify branch creation

4. **VALIDATE:**
   - Verify branch created successfully
   - Check branch name is correct
   - Confirm on correct branch

5. **PROCEED:**
   - Document branch creation
   - Pass branch info to Step 4
   - Mark Step 3 as complete

**Example:**
```bash
# Branch name: refactor/structural-validation-utils
git checkout -b refactor/structural-validation-utils
```

---

### Step 4: Execute Refactoring

**Purpose:** Perform the actual refactoring changes

**Agent Actions:**

1. **ANALYZE:**
   - Review refactoring plan from Step 2
   - Understand current code state
   - Identify specific changes needed

2. **DETERMINE:**
   - Determine execution order
   - Plan incremental changes
   - Identify backup strategy

3. **EXECUTE:**
   - Make refactoring changes
   - Apply refactoring steps incrementally
   - Create backups if needed
   - Update code structure

4. **VALIDATE:**
   - Verify changes are correct
   - Check code compiles/runs
   - Confirm no syntax errors

5. **PROCEED:**
   - Document refactoring changes
   - Pass changes to Step 5
   - Mark Step 4 as complete

**Example Changes:**
```python
# Before: Long function
def validate_user_data(data):
    # 80 lines of validation logic
    ...

# After: Extracted functions
def validate_user_data(data: UserData) -> ValidationResult:
    """Validate user data."""
    return ValidationResult(
        email=validate_email(data.email),
        username=validate_username(data.username),
        password=validate_password(data.password)
    )
```

---

### Step 5: Run Linting

**Purpose:** Ensure code meets style and quality standards

**Agent Actions:**

1. **ANALYZE:**
   - Check linting configuration
   - Understand linting rules
   - Review linting command

2. **DETERMINE:**
   - Determine linting approach
   - Plan auto-fix if needed
   - Identify strict mode requirements

3. **EXECUTE:**
   - Run linting command
   - Review linting results
   - Fix linting issues (if auto-fix enabled)

4. **VALIDATE:**
   - Verify linting passes
   - Check no critical issues
   - Confirm code style compliance

5. **PROCEED:**
   - Document linting results
   - Pass results to Step 6
   - Mark Step 5 as complete

**Example:**
```bash
ruff check src/utils/validation.py
# Output: All checks passed
```

---

### Step 6: Run Type Checking

**Purpose:** Verify type annotations are correct

**Agent Actions:**

1. **ANALYZE:**
   - Check type checking configuration
   - Understand type checking rules
   - Review type checking command

2. **DETERMINE:**
   - Determine type checking approach
   - Plan strict mode if needed
   - Identify type issues

3. **EXECUTE:**
   - Run type checking command
   - Review type checking results
   - Fix type issues if needed

4. **VALIDATE:**
   - Verify type checking passes
   - Check no type errors
   - Confirm type coverage

5. **PROCEED:**
   - Document type checking results
   - Pass results to Step 7
   - Mark Step 6 as complete

**Example:**
```bash
mypy src/utils/validation.py
# Output: Success: no issues found
```

---

### Step 7: Run Test Suite

**Purpose:** Verify refactoring did not break functionality

**Agent Actions:**

1. **ANALYZE:**
   - Check test configuration
   - Understand test requirements
   - Review test command

2. **DETERMINE:**
   - Determine test execution approach
   - Plan coverage requirements
   - Identify test failures

3. **EXECUTE:**
   - Run test suite
   - Review test results
   - Fix test failures if needed

4. **VALIDATE:**
   - Verify all tests pass
   - Check coverage meets threshold
   - Confirm no regressions

5. **PROCEED:**
   - Document test results
   - Pass results to Step 8
   - Mark Step 7 as complete

**Example:**
```bash
pytest src/tests/test_validation.py
# Output: 15 passed, 0 failed, 85% coverage
```

---

### Step 8: Update Documentation

**Purpose:** Update documentation to reflect refactoring changes

**Agent Actions:**

1. **ANALYZE:**
   - Review documentation structure
   - Understand documentation requirements
   - Identify documentation to update

2. **DETERMINE:**
   - Determine documentation updates needed
   - Plan documentation changes
   - Identify documentation files

3. **EXECUTE:**
   - Update README if needed
   - Update API documentation
   - Update code comments
   - Update examples

4. **VALIDATE:**
   - Verify documentation is accurate
   - Check documentation is complete
   - Confirm examples work

5. **PROCEED:**
   - Document documentation updates
   - Pass updates to Step 9
   - Mark Step 8 as complete

---

### Step 9: Stage Changes

**Purpose:** Stage all modified files for commit

**Agent Actions:**

1. **ANALYZE:**
   - Review modified files
   - Understand staging requirements
   - Check file status

2. **DETERMINE:**
   - Determine files to stage
   - Plan staging approach
   - Identify excluded files

3. **EXECUTE:**
   - Stage modified files
   - Verify staging
   - Check staged files

4. **VALIDATE:**
   - Verify files staged correctly
   - Check no unwanted files staged
   - Confirm staging complete

5. **PROCEED:**
   - Document staging results
   - Pass staging to Step 10
   - Mark Step 9 as complete

---

### Step 10: Commit Changes

**Purpose:** Create git commit with refactoring changes

**Agent Actions:**

1. **ANALYZE:**
   - Review staged changes
   - Understand commit message requirements
   - Check commit format

2. **DETERMINE:**
   - Determine commit message
   - Plan commit structure
   - Identify commit details

3. **EXECUTE:**
   - Create git commit
   - Write commit message
   - Verify commit created

4. **VALIDATE:**
   - Verify commit created successfully
   - Check commit message is correct
   - Confirm commit includes all changes

5. **PROCEED:**
   - Document commit details
   - Pass commit to Step 11
   - Mark Step 10 as complete

**Example Commit Message:**
```
Refactor: Restructure validation utilities

- Extract validation functions into separate module
- Add type hints to all functions
- Consolidate duplicated validation logic
- Update tests to match new structure

Target: src/utils/validation.py
Type: Structural refactoring
Tests: All passing (15/15)
Coverage: 85%
```

---

### Step 11: Push Branch

**Purpose:** Push refactoring branch to remote repository

**Agent Actions:**

1. **ANALYZE:**
   - Check remote configuration
   - Understand push requirements
   - Review branch status

2. **DETERMINE:**
   - Determine push approach
   - Plan remote branch creation
   - Identify push options

3. **EXECUTE:**
   - Push branch to remote
   - Verify push success
   - Check remote branch

4. **VALIDATE:**
   - Verify branch pushed successfully
   - Check remote branch exists
   - Confirm push complete

5. **PROCEED:**
   - Document push results
   - Pass push to Step 12
   - Mark Step 11 as complete

---

### Step 12: Post-Refactor Verification

**Purpose:** Verify refactoring achieved its goals

**Agent Actions:**

1. **ANALYZE:**
   - Review refactoring goals
   - Understand verification requirements
   - Check verification criteria

2. **DETERMINE:**
   - Determine verification approach
   - Plan verification checks
   - Identify success criteria

3. **EXECUTE:**
   - Verify functionality preserved
   - Check performance (if applicable)
   - Verify tests pass
   - Review code quality metrics

4. **VALIDATE:**
   - Verify all checks pass
   - Check goals achieved
   - Confirm refactoring successful

5. **PROCEED:**
   - Document verification results
   - Pass verification to Step 13
   - Mark Step 12 as complete

---

### Step 13: Document Refactoring Results

**Purpose:** Document refactoring outcomes and improvements

**Agent Actions:**

1. **ANALYZE:**
   - Review refactoring results
   - Understand documentation requirements
   - Check metrics and improvements

2. **DETERMINE:**
   - Determine documentation structure
   - Plan summary creation
   - Identify improvements to document

3. **EXECUTE:**
   - Create refactoring summary
   - Document improvements
   - Record metrics
   - Update project documentation

4. **VALIDATE:**
   - Verify documentation is complete
   - Check summary is accurate
   - Confirm metrics recorded

5. **PROCEED:**
   - Document completion
   - Mark Step 13 as complete
   - Mark workflow as complete

**Example Summary:**
```markdown
# Refactoring Summary

## Target: src/utils/validation.py

## Improvements:
- Reduced function length: 80 lines → 25 lines average
- Added type hints: 0% → 100% coverage
- Eliminated duplicated logic: 3 instances → 0
- Improved test coverage: 85% → 90%

## Metrics:
- Lines of code: 450 → 380 (-15%)
- Cyclomatic complexity: 12 → 6 (-50%)
- Test execution time: 2.3s → 1.8s (-22%)
```

---

## Workflow Completion

When all 13 steps complete successfully:

1. ✅ All steps marked as `completed` in TODO list
2. ✅ Refactoring branch created and pushed
3. ✅ All validations pass
4. ✅ Documentation updated
5. ✅ Refactoring summary created

**Next Steps:**
- Create pull request (if using PR workflow)
- Request code review
- Merge after approval

---

## References

- **Agent-Driven Execution:** `agent-driven-workflow-execution.md`
- **Release Workflow:** `release-workflow-agent-execution.md` (canonical example)
- **Workflow YAML:** `../../workflows/refactor-workflow.yaml`

---

_This workflow demonstrates how to apply agent-driven execution to code quality workflows._

