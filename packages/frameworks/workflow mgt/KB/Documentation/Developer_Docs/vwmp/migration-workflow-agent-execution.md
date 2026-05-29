---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:02:13Z
expires_at: null
housekeeping_policy: keep
---

# Migration Workflow: Agent Execution Guide

**Version:** 1.0.0
**Last Updated:** 2025-12-03
**Related:** Release Workflow (canonical example) | Refactor Workflow | Agent-Driven Workflow Execution

---

## 📖 Overview

This document provides a **step-by-step agent execution guide** for the Migration Workflow. The Migration Workflow demonstrates how to apply the agent-driven execution pattern to migration workflows (code, database, dependency, infrastructure).

**This guide shows exactly how an AI agent should analyze, determine, execute, validate, and proceed through each of the 13 Migration Workflow steps.**

> **Note on Examples:** This document includes project-agnostic examples. When adopting this workflow in your own project, replace all examples with your project-specific paths, commands, and structures.

---

## 🎯 Execution Context

### Workflow Definition

**Workflow:** Migration Workflow
**Type:** `migration`
**Steps:** 13 steps organized into 5 phases:
- **Phase 1: Analysis & Planning (Steps 1-2)**
- **Phase 2: Preparation (Steps 3-4)**
- **Phase 3: Execution (Step 5)**
- **Phase 4: Validation (Steps 6-8)**
- **Phase 5: Documentation & Git Operations (Steps 9-13)**

**Canonical Example:** No - this is an example workflow based on the Release Workflow pattern

### Agent Execution Pattern

For each step, the agent follows this pattern:
1. **ANALYZE** - Understand step requirements and context
2. **DETERMINE** - Decide what actions to take
3. **EXECUTE** - Perform the actions
4. **VALIDATE** - Verify execution succeeded
5. **PROCEED** - Document and move to next step

### 🚨 MANDATORY: Progress Tracking with Cursor TODOs

**REQUIRED:** Agents **MUST** use `todo_write` to create and maintain a TODO list tracking all 13 Migration Workflow steps. This is **NOT OPTIONAL** - it is a mandatory requirement for Migration Workflow execution.

**Required Implementation Pattern:**

1. **At Workflow Start (MANDATORY):** Create TODO list with all 13 steps as `pending`
2. **Before Each Step (MANDATORY):** Mark step as `in_progress`
3. **After Each Step (MANDATORY):** Mark step as `completed` and mark next step as `in_progress`
4. **On Completion (MANDATORY):** All steps marked as `completed`

---

## Step-by-Step Execution Guide

### Step 1: Analyze Source and Target States

**Purpose:** Understand the current state and target state before migration

**Agent Actions:**

1. **ANALYZE:**
   - Read workflow parameters (migration_type, target_component)
   - Identify source files/components
   - Identify target files/components
   - Understand dependencies and relationships

2. **DETERMINE:**
   - Determine analysis scope
   - Plan analysis approach
   - Identify key differences

3. **EXECUTE:**
   - Analyze source state
   - Analyze target state
   - Document differences
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
# Agent analyzes migration from FastAPI to Django
source_state = {
    "framework": "FastAPI",
    "files": ["src/api/routes.py", "src/api/models.py"],
    "dependencies": ["fastapi", "uvicorn", "pydantic"]
}

target_state = {
    "framework": "Django",
    "files": ["src/api/views.py", "src/api/models.py"],
    "dependencies": ["django", "djangorestframework"]
}

differences = {
    "routing": "FastAPI decorators → Django URL patterns",
    "models": "Pydantic models → Django models",
    "serialization": "Pydantic serializers → DRF serializers"
}
```

---

### Step 2: Plan Migration Strategy

**Purpose:** Create a detailed plan for the migration

**Agent Actions:**

1. **ANALYZE:**
   - Review analysis from Step 1
   - Understand migration type and goals
   - Consider constraints (backup, rollback, incremental)

2. **DETERMINE:**
   - Determine migration strategy
   - Plan specific migration steps
   - Identify risks and mitigation strategies
   - Plan rollback procedure

3. **EXECUTE:**
   - Create migration plan document
   - Define migration steps
   - Document expected outcomes
   - Create rollback plan

4. **VALIDATE:**
   - Verify plan is complete
   - Check plan addresses all differences
   - Confirm plan is feasible
   - Verify rollback plan is viable

5. **PROCEED:**
   - Document migration plan
   - Pass plan to Step 3
   - Mark Step 2 as complete

**Example Plan:**
```markdown
# Migration Plan

## Target: FastAPI → Django Migration

## Migration Steps:
1. Create Django project structure
2. Migrate models (Pydantic → Django)
3. Migrate routes (FastAPI decorators → Django URLs)
4. Migrate serialization (Pydantic → DRF)
5. Update dependencies
6. Update tests

## Rollback Plan:
1. Restore from backup
2. Revert git changes
3. Restore dependencies
4. Verify original functionality

## Expected Outcomes:
- All functionality preserved
- All tests pass
- Performance maintained
- Documentation updated
```

---

### Step 3: Create Backup

**Purpose:** Create backup before migration

**Agent Actions:**

1. **ANALYZE:**
   - Check backup configuration
   - Understand backup requirements
   - Review backup location

2. **DETERMINE:**
   - Determine backup approach
   - Plan backup structure
   - Identify files to backup

3. **EXECUTE:**
   - Create backup directory
   - Copy files to backup
   - Create backup manifest
   - Verify backup integrity

4. **VALIDATE:**
   - Verify backup created successfully
   - Check backup is complete
   - Confirm backup is accessible

5. **PROCEED:**
   - Document backup location
   - Pass backup info to Step 4
   - Mark Step 3 as complete

**Example:**
```bash
# Backup location: backups/2025-12-03-17-00-00/
# Backup includes:
# - Source code
# - Configuration files
# - Database schema (if applicable)
# - Dependencies list
```

---

### Step 4: Create Migration Branch

**Purpose:** Create a git branch for the migration work

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
   - Create migration branch
   - Switch to new branch
   - Verify branch creation

4. **VALIDATE:**
   - Verify branch created successfully
   - Check branch name is correct
   - Confirm on correct branch

5. **PROCEED:**
   - Document branch creation
   - Pass branch info to Step 5
   - Mark Step 4 as complete

**Example:**
```bash
# Branch name: migration/code-fastapi-to-django
git checkout -b migration/code-fastapi-to-django
```

---

### Step 5: Execute Migration Steps

**Purpose:** Perform the actual migration changes

**Agent Actions:**

1. **ANALYZE:**
   - Review migration plan from Step 2
   - Understand current state
   - Identify specific changes needed

2. **DETERMINE:**
   - Determine execution order
   - Plan incremental changes
   - Identify dependencies

3. **EXECUTE:**
   - Execute migration steps incrementally
   - Apply migration changes
   - Update code structure
   - Update dependencies

4. **VALIDATE:**
   - Verify changes are correct
   - Check code compiles/runs
   - Confirm no syntax errors

5. **PROCEED:**
   - Document migration changes
   - Pass changes to Step 6
   - Mark Step 5 as complete

**Example Changes:**
```python
# Before: FastAPI route
@app.get("/users/{user_id}")
async def get_user(user_id: int):
    return {"user_id": user_id}

# After: Django view
class UserDetailView(APIView):
    def get(self, request, user_id):
        return Response({"user_id": user_id})
```

---

### Step 6: Validate Migration

**Purpose:** Verify migration was performed correctly

**Agent Actions:**

1. **ANALYZE:**
   - Check validation configuration
   - Understand validation requirements
   - Review validation command

2. **DETERMINE:**
   - Determine validation approach
   - Plan validation checks
   - Identify validation criteria

3. **EXECUTE:**
   - Run validation command
   - Check migration completeness
   - Verify all components migrated
   - Review validation results

4. **VALIDATE:**
   - Verify validation passes
   - Check migration is complete
   - Confirm no missing components

5. **PROCEED:**
   - Document validation results
   - Pass results to Step 7
   - Mark Step 6 as complete

**Example:**
```bash
# Validation checks:
# - All routes migrated
# - All models migrated
# - All serializers migrated
# - Dependencies updated
# Validation: PASSED
```

---

### Step 7: Run Test Suite

**Purpose:** Verify migration did not break functionality

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
   - Update tests for new framework

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
pytest src/tests/
# Output: 45 passed, 0 failed, 88% coverage
```

---

### Step 8: Verify Functionality

**Purpose:** Verify core functionality works after migration

**Agent Actions:**

1. **ANALYZE:**
   - Review core features
   - Understand verification requirements
   - Check verification criteria

2. **DETERMINE:**
   - Determine verification approach
   - Plan verification checks
   - Identify success criteria

3. **EXECUTE:**
   - Verify core features work
   - Check integration points
   - Verify performance (if applicable)
   - Test critical paths

4. **VALIDATE:**
   - Verify all checks pass
   - Check functionality preserved
   - Confirm migration successful

5. **PROCEED:**
   - Document verification results
   - Pass results to Step 9
   - Mark Step 8 as complete

---

### Step 9: Update Documentation

**Purpose:** Update documentation to reflect migration changes

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
   - Update migration guide
   - Update code comments

4. **VALIDATE:**
   - Verify documentation is accurate
   - Check documentation is complete
   - Confirm examples work

5. **PROCEED:**
   - Document documentation updates
   - Pass updates to Step 10
   - Mark Step 9 as complete

---

### Step 10: Stage Changes

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
   - Pass staging to Step 11
   - Mark Step 10 as complete

---

### Step 11: Commit Changes

**Purpose:** Create git commit with migration changes

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
   - Pass commit to Step 12
   - Mark Step 11 as complete

**Example Commit Message:**
```
Migration: FastAPI to Django framework migration

- Migrated routes from FastAPI decorators to Django URL patterns
- Migrated models from Pydantic to Django models
- Migrated serialization from Pydantic to DRF serializers
- Updated dependencies (FastAPI → Django)
- Updated tests to match new framework
- All tests passing (45/45)
- Coverage: 88%

Migration Type: Code
Target: API layer
Backup: backups/2025-12-03-17-00-00/
```

---

### Step 12: Push Branch

**Purpose:** Push migration branch to remote repository

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
   - Pass push to Step 13
   - Mark Step 12 as complete

---

### Step 13: Document Migration Results

**Purpose:** Document migration outcomes and improvements

**Agent Actions:**

1. **ANALYZE:**
   - Review migration results
   - Understand documentation requirements
   - Check metrics and improvements

2. **DETERMINE:**
   - Determine documentation structure
   - Plan summary creation
   - Identify improvements to document

3. **EXECUTE:**
   - Create migration summary
   - Document improvements
   - Record metrics
   - Document rollback procedure
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
# Migration Summary

## Target: FastAPI → Django Framework Migration

## Migration Steps Completed:
- ✅ Project structure created
- ✅ Models migrated (Pydantic → Django)
- ✅ Routes migrated (FastAPI → Django URLs)
- ✅ Serialization migrated (Pydantic → DRF)
- ✅ Dependencies updated
- ✅ Tests updated and passing

## Improvements:
- Framework: FastAPI → Django
- Test coverage: 85% → 88% (+3%)
- Performance: Maintained
- Functionality: 100% preserved

## Metrics:
- Files migrated: 12
- Lines of code: 1,200 → 1,150 (-4%)
- Test execution time: 3.2s → 2.9s (-9%)
- Dependencies: 8 → 6 (-25%)

## Rollback Procedure:
1. Restore from backup: backups/2025-12-03-17-00-00/
2. Revert git changes: git reset --hard HEAD~1
3. Restore dependencies: pip install -r requirements.old.txt
4. Verify functionality: Run test suite
```

---

## Workflow Completion

When all 13 steps complete successfully:

1. ✅ All steps marked as `completed` in TODO list
2. ✅ Migration branch created and pushed
3. ✅ All validations pass
4. ✅ Documentation updated
5. ✅ Migration summary created
6. ✅ Rollback procedure documented

**Next Steps:**
- Create pull request (if using PR workflow)
- Request code review
- Merge after approval
- Monitor for issues

---

## References

- **Agent-Driven Execution:** `agent-driven-workflow-execution.md`
- **Release Workflow:** `release-workflow-agent-execution.md` (canonical example)
- **Refactor Workflow:** `refactor-workflow-agent-execution.md`
- **Workflow YAML:** `../../workflows/migration-workflow.yaml`

---

_This workflow demonstrates how to apply agent-driven execution to migration workflows with backup and rollback support._

