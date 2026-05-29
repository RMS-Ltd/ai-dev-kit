---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:02:13Z
expires_at: null
housekeeping_policy: keep
---

# Testing Workflow: Agent Execution Guide

**Version:** 1.0.0
**Last Updated:** 2025-12-03
**Related:** Release Workflow (canonical example) | Agent-Driven Workflow Execution

---

## 📖 Overview

This document provides a **step-by-step agent execution guide** for the Testing Workflow. The Testing Workflow demonstrates how to apply the agent-driven execution pattern to testing workflows.

**This guide shows exactly how an AI agent should analyze, determine, execute, validate, and proceed through each of the 15 Testing Workflow steps.**

> **Note on Examples:** This document includes project-agnostic examples. When adopting this workflow in your own project, replace all examples with your project-specific paths, commands, and structures.

---

## 🎯 Execution Context

### Workflow Definition

**Workflow:** Testing Workflow
**Type:** `testing`
**Steps:** 15 steps organized into 5 phases:
- **Phase 1: Analysis & Planning (Steps 1-2)**
- **Phase 2: Execution (Steps 3-4)**
- **Phase 3: Validation (Steps 5-9)**
- **Phase 4: Documentation & Git Operations (Steps 10-13)**
- **Phase 5: Verification & Results (Steps 14-15)**

**Canonical Example:** No - this is an example workflow based on the Release Workflow pattern

### Agent Execution Pattern

For each step, the agent follows this pattern:
1. **ANALYZE** - Understand step requirements and context
2. **DETERMINE** - Decide what actions to take
3. **EXECUTE** - Perform the actions
4. **VALIDATE** - Verify execution succeeded
5. **PROCEED** - Document and move to next step

### 🚨 MANDATORY: Progress Tracking with Cursor TODOs

**REQUIRED:** Agents **MUST** use `todo_write` to create and maintain a TODO list tracking all 15 Testing Workflow steps. This is **NOT OPTIONAL** - it is a mandatory requirement for Testing Workflow execution.

**Required Implementation Pattern:**

1. **At Workflow Start (MANDATORY):** Create TODO list with all 15 steps as `pending`
2. **Before Each Step (MANDATORY):** Mark step as `in_progress`
3. **After Each Step (MANDATORY):** Mark step as `completed` and mark next step as `in_progress`
4. **On Completion (MANDATORY):** All steps marked as `completed`

---

## Step-by-Step Execution Guide

### Step 1: Analyze Test Requirements

**Purpose:** Understand what tests need to be created or updated

**Agent Actions:**

1. **ANALYZE:**
   - Read workflow parameters (target_component, test_type, test_approach)
   - Identify target files and directories
   - Review existing test structure
   - Understand test requirements and coverage goals
   - Check existing test coverage

2. **DETERMINE:**
   - Determine analysis scope
   - Identify components to test
   - Plan analysis approach
   - Determine test categories needed

3. **EXECUTE:**
   - Analyze target component structure
   - Review existing tests (if any)
   - Identify test gaps
   - Document test requirements
   - Create analysis report

4. **VALIDATE:**
   - Verify analysis is complete
   - Check analysis report is accurate
   - Confirm all components identified
   - Verify test requirements are clear

5. **PROCEED:**
   - Document analysis results
   - Pass analysis to Step 2
   - Mark Step 1 as complete

**Example Analysis:**
```python
# Agent analyzes target component
target_component = "src/utils/validation.py"
analysis = {
    "component": "src/utils/validation.py",
    "functions": ["validate_email", "validate_username", "validate_password"],
    "existing_tests": ["test_validation.py"],
    "test_coverage": "65%",
    "test_gaps": ["edge cases", "error handling", "type validation"],
    "test_type": "unit",
    "test_approach": "tdd"
}
```

---

### Step 2: Plan Test Strategy

**Purpose:** Create a detailed plan for the testing work

**Agent Actions:**

1. **ANALYZE:**
   - Review analysis from Step 1
   - Understand test type and approach
   - Consider coverage goals and constraints
   - Review test framework and conventions

2. **DETERMINE:**
   - Determine test strategy
   - Plan specific test cases
   - Identify test categories
   - Plan test organization

3. **EXECUTE:**
   - Create test plan document
   - Define test cases
   - Document expected outcomes
   - Create test structure plan
   - Define coverage goals

4. **VALIDATE:**
   - Verify plan is complete
   - Check plan addresses all requirements
   - Confirm plan is feasible
   - Verify coverage goals are realistic

5. **PROCEED:**
   - Document test plan
   - Pass plan to Step 3
   - Mark Step 2 as complete

**Example Plan:**
```markdown
# Test Plan

## Target: src/utils/validation.py

## Test Categories:
- Unit tests for each validation function
- Edge case tests
- Error handling tests
- Type validation tests

## Test Cases:
1. validate_email() - valid emails, invalid emails, edge cases
2. validate_username() - valid usernames, invalid usernames, edge cases
3. validate_password() - valid passwords, invalid passwords, strength checks

## Coverage Goal: 85%
## Test Approach: TDD
```

---

### Step 3: Create Testing Branch

**Purpose:** Create a git branch for the testing work

**Agent Actions:**

1. **ANALYZE:**
   - Check current branch
   - Understand branch naming convention
   - Review branch requirements
   - Check for existing branches

2. **DETERMINE:**
   - Determine branch name
   - Plan branch creation
   - Identify base branch

3. **EXECUTE:**
   - Create testing branch
   - Switch to testing branch
   - Verify branch created

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
git checkout -b test/unit-validation
# Branch created: test/unit-validation
```

---

### Step 4: Create or Update Test Files

**Purpose:** Create new test files or update existing ones

**Agent Actions:**

1. **ANALYZE:**
   - Review test plan from Step 2
   - Understand test structure
   - Check existing test files
   - Review test framework conventions

2. **DETERMINE:**
   - Determine test file structure
   - Plan test organization
   - Identify test file locations
   - Plan test naming conventions

3. **EXECUTE:**
   - Create test files
   - Write test cases
   - Follow test framework conventions
   - Organize tests by category
   - Add test documentation

4. **VALIDATE:**
   - Verify test files created
   - Check test syntax is correct
   - Confirm tests follow conventions
   - Verify test organization

5. **PROCEED:**
   - Document test creation
   - Pass test files to Step 5
   - Mark Step 4 as complete

**Example Test File:**
```python
# tests/test_validation.py
import pytest
from src.utils.validation import validate_email, validate_username, validate_password

class TestEmailValidation:
    def test_valid_email(self):
        assert validate_email("user@example.com") == True
    
    def test_invalid_email(self):
        assert validate_email("invalid") == False
    
    def test_edge_case_empty(self):
        assert validate_email("") == False

class TestUsernameValidation:
    def test_valid_username(self):
        assert validate_username("user123") == True
    
    def test_invalid_username_too_short(self):
        assert validate_username("ab") == False
```

---

### Step 5: Run Test Suite

**Purpose:** Execute the test suite to verify tests work

**Agent Actions:**

1. **ANALYZE:**
   - Check test configuration
   - Understand test requirements
   - Review test command
   - Check test framework setup

2. **DETERMINE:**
   - Determine test execution approach
   - Plan test execution order
   - Identify test failures

3. **EXECUTE:**
   - Run test suite
   - Review test results
   - Fix test failures if needed
   - Verify all tests pass

4. **VALIDATE:**
   - Verify all tests pass
   - Check no test failures
   - Confirm test execution successful
   - Verify test output is clear

5. **PROCEED:**
   - Document test results
   - Pass results to Step 6
   - Mark Step 5 as complete

**Example:**
```bash
pytest tests/test_validation.py -v
# Output: 
# tests/test_validation.py::TestEmailValidation::test_valid_email PASSED
# tests/test_validation.py::TestEmailValidation::test_invalid_email PASSED
# tests/test_validation.py::TestUsernameValidation::test_valid_username PASSED
# 15 passed, 0 failed
```

---

### Step 6: Check Test Coverage

**Purpose:** Verify test coverage meets goals

**Agent Actions:**

1. **ANALYZE:**
   - Check coverage configuration
   - Understand coverage requirements
   - Review coverage threshold
   - Check coverage command

2. **DETERMINE:**
   - Determine coverage approach
   - Plan coverage analysis
   - Identify coverage gaps

3. **EXECUTE:**
   - Run coverage command
   - Generate coverage report
   - Review coverage results
   - Identify uncovered code

4. **VALIDATE:**
   - Verify coverage meets threshold
   - Check coverage report is accurate
   - Confirm coverage goals met
   - Verify no critical gaps

5. **PROCEED:**
   - Document coverage results
   - Pass results to Step 7
   - Mark Step 6 as complete

**Example:**
```bash
pytest --cov=src/utils/validation tests/test_validation.py
# Output:
# Coverage: 87%
# Threshold: 80%
# Status: PASSED
```

---

### Step 7: Run Linting on Tests

**Purpose:** Ensure test code meets style standards

**Agent Actions:**

1. **ANALYZE:**
   - Check linting configuration
   - Understand linting rules
   - Review linting command
   - Check test code style

2. **DETERMINE:**
   - Determine linting approach
   - Plan auto-fix if needed
   - Identify linting issues

3. **EXECUTE:**
   - Run linting command on tests
   - Review linting results
   - Fix linting issues (if auto-fix enabled)

4. **VALIDATE:**
   - Verify linting passes
   - Check no critical issues
   - Confirm test code style compliance

5. **PROCEED:**
   - Document linting results
   - Pass results to Step 8
   - Mark Step 7 as complete

**Example:**
```bash
ruff check tests/test_validation.py
# Output: All checks passed
```

---

### Step 8: Run Type Checking on Tests

**Purpose:** Verify test type annotations are correct

**Agent Actions:**

1. **ANALYZE:**
   - Check type checking configuration
   - Understand type checking rules
   - Review type checking command
   - Check test type annotations

2. **DETERMINE:**
   - Determine type checking approach
   - Plan strict mode if needed
   - Identify type issues

3. **EXECUTE:**
   - Run type checking command on tests
   - Review type checking results
   - Fix type issues if needed

4. **VALIDATE:**
   - Verify type checking passes
   - Check no type errors
   - Confirm type coverage

5. **PROCEED:**
   - Document type checking results
   - Pass results to Step 9
   - Mark Step 8 as complete

**Example:**
```bash
mypy tests/test_validation.py
# Output: Success: no issues found
```

---

### Step 9: Validate Test Quality

**Purpose:** Ensure tests are well-written and comprehensive

**Agent Actions:**

1. **ANALYZE:**
   - Review test structure
   - Understand quality requirements
   - Check test organization
   - Review test documentation

2. **DETERMINE:**
   - Determine quality checks needed
   - Plan quality validation
   - Identify quality issues

3. **EXECUTE:**
   - Check test naming conventions
   - Verify test organization
   - Review test documentation
   - Check edge case coverage
   - Validate test independence

4. **VALIDATE:**
   - Verify tests meet quality standards
   - Check test organization is clear
   - Confirm test documentation is complete
   - Verify edge cases are covered

5. **PROCEED:**
   - Document quality validation results
   - Pass results to Step 10
   - Mark Step 9 as complete

**Example Quality Checks:**
- ✅ Test names are descriptive
- ✅ Tests are organized by category
- ✅ Tests have docstrings
- ✅ Edge cases are covered
- ✅ Tests are independent

---

### Step 10: Update Documentation

**Purpose:** Update documentation to reflect test changes

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
   - Update test documentation
   - Update test examples
   - Document test coverage

4. **VALIDATE:**
   - Verify documentation is accurate
   - Check documentation is complete
   - Confirm examples work

5. **PROCEED:**
   - Document documentation updates
   - Pass updates to Step 11
   - Mark Step 10 as complete

---

### Step 11: Stage Changes

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
   - Pass staging to Step 12
   - Mark Step 11 as complete

---

### Step 12: Commit Changes

**Purpose:** Create git commit with test changes

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
   - Pass commit to Step 13
   - Mark Step 12 as complete

**Example Commit Message:**
```
Test: Add unit tests for validation utilities

- Add tests for validate_email()
- Add tests for validate_username()
- Add tests for validate_password()
- Add edge case tests
- Add error handling tests

Target: src/utils/validation.py
Type: Unit tests
Coverage: 87% (goal: 80%)
Tests: All passing (15/15)
```

---

### Step 13: Push Branch

**Purpose:** Push testing branch to remote repository

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
   - Verify push successful
   - Check remote branch

4. **VALIDATE:**
   - Verify push successful
   - Check remote branch exists
   - Confirm branch is up to date

5. **PROCEED:**
   - Document push results
   - Pass push info to Step 14
   - Mark Step 13 as complete

---

### Step 14: Post-Test Verification

**Purpose:** Verify tests work correctly in remote environment

**Agent Actions:**

1. **ANALYZE:**
   - Review test execution
   - Understand verification requirements
   - Check test results

2. **DETERMINE:**
   - Determine verification approach
   - Plan verification checks
   - Identify verification criteria

3. **EXECUTE:**
   - Verify test execution
   - Verify coverage meets goals
   - Verify test quality
   - Review test results

4. **VALIDATE:**
   - Verify all checks pass
   - Check test execution is successful
   - Confirm coverage goals met
   - Verify test quality is acceptable

5. **PROCEED:**
   - Document verification results
   - Pass results to Step 15
   - Mark Step 14 as complete

---

### Step 15: Document Test Results

**Purpose:** Create summary of testing work and results

**Agent Actions:**

1. **ANALYZE:**
   - Review test results
   - Understand documentation requirements
   - Check test metrics

2. **DETERMINE:**
   - Determine documentation content
   - Plan documentation structure
   - Identify metrics to document

3. **EXECUTE:**
   - Create test summary
   - Document coverage results
   - Document test categories
   - Document improvements made
   - Create test results report

4. **VALIDATE:**
   - Verify documentation is complete
   - Check documentation is accurate
   - Confirm metrics are documented

5. **PROCEED:**
   - Document test results
   - Mark Step 15 as complete
   - Workflow complete

**Example Test Results Summary:**
```markdown
# Test Results Summary

## Target Component: src/utils/validation.py

## Test Type: Unit Tests
## Test Approach: TDD

## Results:
- Tests Created: 15
- Tests Passing: 15/15 (100%)
- Coverage: 87% (goal: 80%)
- Quality: All checks passed

## Test Categories:
- Email validation: 5 tests
- Username validation: 5 tests
- Password validation: 5 tests

## Improvements:
- Added edge case coverage
- Added error handling tests
- Improved test organization
```

---

## Workflow Completion

When all 15 steps are complete:
- ✅ All tests created/updated
- ✅ All tests passing
- ✅ Coverage goals met
- ✅ Quality checks passed
- ✅ Documentation updated
- ✅ Changes committed and pushed
- ✅ Results documented

---

## References

- **Agent-Driven Execution:** `packages/frameworks/workflow mgt/docs/documentation/Developer_Docs/vwmp/agent-driven-workflow-execution.md`
- **Release Workflow:** `packages/frameworks/workflow mgt/docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md`
- **Refactor Workflow:** `packages/frameworks/workflow mgt/docs/documentation/Developer_Docs/vwmp/refactor-workflow-agent-execution.md`
- **Migration Workflow:** `packages/frameworks/workflow mgt/docs/documentation/Developer_Docs/vwmp/migration-workflow-agent-execution.md`
- **Workflow YAML:** `packages/frameworks/workflow mgt/workflows/testing-workflow.yaml`

---

_End of Testing Workflow Agent Execution Guide_

