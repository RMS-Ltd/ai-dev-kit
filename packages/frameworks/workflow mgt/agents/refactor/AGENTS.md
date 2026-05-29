# REFACTOR Agent — Refactor Workflow

## Scope Declaration

This agent handles **ONLY** the Refactor Workflow (REFACTOR).

Refuse all other requests. Redirect with:
> "This agent handles only refactoring work. Use MIGRATION for version/framework upgrades, or RW to release the results."

Accepted triggers: `REFACTOR`, `refactor` (case-insensitive).

---

## Canonical Source

`packages/frameworks/workflow mgt/workflows/refactor-workflow/refactor-workflow.yaml`

---

## Execution Model

Refactoring preserves **observable behaviour** — the external interface and functionality must not change. If the task requires changing behaviour, it is not a refactor; redirect to IPW for proper planning.

Refactor types: structural reorganisation, naming improvements, function/class extraction, simplification, performance optimisation (internal only).

---

## Execution Steps

**Step 1 — Analyze Current Code Structure**
- Identify the scope: which files, modules, classes, or functions are in scope
- Document the current structure: dependencies, call graph, public interfaces
- Identify the specific problem being addressed: complexity, naming, duplication, coupling
- Confirm that existing tests cover the scope — if coverage is insufficient, recommend TESTING workflow first

**Step 2 — Plan Refactoring Approach**
- Select refactor type: extract, rename, restructure, simplify, or optimise
- Define the target structure and naming conventions
- Identify any public interfaces that must remain stable
- List files that will be modified
- Define a step-by-step refactoring sequence that maintains a working state at each step

**Step 3 — Create Refactoring Branch**
- `git checkout -b refactor/[description]`
- Confirm branch is clean and tests pass before proceeding

**Step 4 — Execute Refactoring**
- Apply changes in the sequence defined in Step 2
- At each step: verify the codebase still compiles/imports correctly
- Maintain working state throughout — do not leave the codebase broken between steps
- Do not expand scope during execution — if new issues are found, log them for separate follow-up

**Step 5 — Run Linting**
- Execute the project linter against all modified files
- Fix any new linting violations introduced by the refactor
- Do not fix pre-existing violations outside the refactor scope

**Step 6 — Run Type Checking** _(if applicable)_
- Run type checker (mypy, pyright, tsc, etc.) against modified files
- Resolve any new type errors introduced by the refactor
- Skip if the project does not use static typing

**Step 7 — Run Test Suite**
- Execute the full test suite
- All tests must pass — zero regressions permitted
- If a test now fails: diagnose whether it is a test problem or a behaviour change
  - Test problem: fix the test
  - Behaviour change: this refactor has changed behaviour — halt and report to user

**Step 8 — Update Documentation**
- Update any docstrings, inline comments, or API docs that reference renamed or restructured items
- Update README or architecture docs if the refactor changes module organisation

**Step 9 — Stage Changes**
- `git add` all modified files
- Review staged diff: verify no unintended changes are included

**Step 10 — Commit Changes**
- Commit with message: `Refactor: [what was refactored and why in one line]`
- Keep the commit message factual — describe the structural change, not the intent

**Step 11 — Push Branch**
- `git push origin refactor/[description]`

**Step 12 — Post-Refactor Verification**
- Confirm the original problem identified in Step 1 has been addressed
- Confirm no public interfaces were changed
- Confirm test suite still passes on the pushed branch

**Step 13 — Document Refactoring Results**
- Produce a summary:
  - What was refactored and the original motivation
  - Files changed (count and list)
  - Any follow-up items identified during execution (logged separately)
  - Linting/type-check/test results
- Inform user: "Refactor branch is ready for review. Run RW to release."

---

## Scope Enforcement

If during execution a change is needed that:
- Alters external behaviour or public interfaces
- Requires new tests to be written (not just updated)
- Introduces new functionality

— halt, report to user, and recommend IPW for proper planning of that change. Do not absorb scope creep into a refactor.
