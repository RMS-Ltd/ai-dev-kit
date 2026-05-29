---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-18T19:45:00Z
expires_at: null
housekeeping_policy: keep
---

# Feature Request: IDE/Linter Check Before Commit in Release Workflow

**Type:** Feature Request (FR)  
**Submitted:** 2025-12-18  
**Submitted By:** User  
**Priority:** HIGH  
**Status:** PENDING

**Implementing Task:** [E2:S01:T08](../epics/Epic-2/Story-001-rw-agent-execution-and-docs.md)

---

## Summary

Add a step to the Release Workflow (RW) that checks for IDE-flagged problems (linter errors, warnings, info messages) before committing changes. The step should prioritize issues as: Errors (blocking), Warnings (should be addressed), and Info messages (informational), ensuring code quality is validated before changes are committed to the repository.

---

## Description

### What is the Feature?

A new validation step in the Release Workflow that:
- Checks for IDE-flagged problems (linter errors, warnings, info messages) on staged files
- Prioritizes issues: Errors → Warnings → Info
- Blocks commit if errors are found
- Flags warnings for attention (optionally blocks if configured)
- Displays info messages for awareness
- Integrates with IDE diagnostics and project-specific linter tools
- Is configurable per project (which linters to run, strict mode, auto-fix options)

### What Should Happen vs. What Currently Happens?

**Expected Behavior:**
- After Step 9 (Run Validators - workflow-specific checks), a new step checks IDE/linter diagnostics
- Errors block commit (step fails, workflow stops)
- Warnings are flagged for attention (optionally block if configured)
- Info messages are displayed for awareness (commit allowed)
- Step uses IDE diagnostics API (e.g., `read_lints` in Cursor) or project-specific linter tools
- Step is configurable (strict mode, auto-fix, which linters to run)

**Current Behavior:**
- Step 9 only runs workflow-specific validators (branch context, changelog format, version bump)
- No check for general code quality issues (linter errors, warnings, type errors)
- Code quality issues can be committed without detection
- Developers must manually run linters before executing RW

### When Does It Occur?

This feature would be used:
- **Every time RW executes** - Code quality should always be validated before commit
- After Step 8 (Stage Files) and Step 9 (Run Validators)
- Before Step 10 (Commit Changes)
- When code changes are staged for commit

### Who Benefits?

**Primary Beneficiaries:**
- Developers using Release Workflow (catch issues early)
- Code quality and maintainability (prevent issues from being committed)
- CI/CD pipelines (reduce failed builds due to linter errors)
- Code review process (fewer issues found in review)

**Secondary Beneficiaries:**
- Framework users (consistent code quality standards)
- Project maintainers (reduced technical debt)
- Teams (faster feedback loop)

---

## Use Cases

1. **Error Detection:**
   - Developer makes code changes that introduce syntax errors or type errors
   - RW executes Step 9.5 (IDE/Linter Check)
   - Errors detected, commit blocked
   - Developer fixes errors, re-runs RW
   - Errors resolved, commit proceeds

2. **Warning Flagging:**
   - Developer makes code changes that introduce style violations or warnings
   - RW executes Step 9.5 (IDE/Linter Check)
   - Warnings detected
   - If `warn_on_warnings: true`, commit blocked until warnings addressed
   - If `warn_on_warnings: false`, warnings displayed, commit allowed with warning message

3. **Info Messages:**
   - Developer makes code changes
   - RW executes Step 9.5 (IDE/Linter Check)
   - Info messages detected (suggestions, best practices)
   - Info messages displayed for awareness
   - Commit proceeds (info messages don't block)

4. **Auto-fix:**
   - Developer makes code changes with auto-fixable issues
   - RW executes Step 9.5 (IDE/Linter Check) with `auto_fix: true`
   - Auto-fixable issues automatically corrected
   - Remaining issues (if any) displayed
   - Commit proceeds after auto-fix

---

## Requirements

### Functional Requirements

- [ ] **FR-024:R01** - New step (Step 9.5) added between Step 9 and Step 10: "Check IDE/Linter Diagnostics"
- [ ] **FR-024:R02** - Step checks for IDE-flagged problems on staged files
- [ ] **FR-024:R03** - Errors block commit (step fails, workflow stops)
- [ ] **FR-024:R04** - Warnings are flagged for attention (displayed, optionally block if configured)
- [ ] **FR-024:R05** - Info messages are displayed for awareness (commit allowed)
- [ ] **FR-024:R06** - Prioritization: Errors → Warnings → Info (process in priority order)
- [ ] **FR-024:R07** - Integration with IDE diagnostics API (e.g., `read_lints` tool in Cursor)
- [ ] **FR-024:R08** - Integration with project-specific linter tools (configurable)
- [ ] **FR-024:R09** - Configuration options:
  - Which linters to run (per project type: Python, TypeScript, etc.)
  - Strict mode (block on errors)
  - Warn on warnings (optionally block on warnings)
  - Show info messages (display for awareness)
  - Auto-fix options (attempt auto-fix for fixable issues)

- [ ] **FR-024:R10** - Works across different project types (Python, TypeScript, JavaScript, etc.)
- [ ] **FR-024:R11** - Uses project-specific linting configuration
- [ ] **FR-024:R12** - Only checks staged files (performance optimization)
- [ ] **FR-024:R13** - Clear error/warning/info messages displayed to user
- [ ] **FR-024:R14** - Step is required (mandatory) for errors, configurable for warnings/info

### Non-Functional Requirements

- [ ] **FR-024:NF01** - **Performance:** Linter check should complete in < 30 seconds for typical projects
- [ ] **FR-024:NF02** - **Reliability:** Step should reliably detect IDE-flagged problems
- [ ] **FR-024:NF03** - **Usability:** Clear messages guide developers on what to fix
- [ ] **FR-024:NF04** - **Compatibility:** Works with different IDEs and linter tools
- [ ] **FR-024:NF05** - **Configurability:** Flexible configuration per project needs
- [ ] **FR-024:NF06** - **Maintainability:** Framework-agnostic implementation

---

## Scope Analysis

**Problem Domain:** Code Quality Assurance, Release Workflow Validation  
**Affected Areas:**
- [x] Workflow Management Framework
- [x] Release Workflow (RW)
- [x] Validation Framework
- [x] Documentation

**Estimated Complexity:**
- Medium (1-2 weeks) - New workflow step, IDE integration, configuration system, documentation

**Dependencies:**
- IDE diagnostics API access (e.g., `read_lints` tool)
- Project-specific linter tools (varies by project)
- Configuration system for linter settings

---

## Implementation Approach

### Option 1: New Step (Step 9.5) - Recommended

**Advantages:**
- Clear separation of concerns (workflow-specific vs. code quality validators)
- Easier to configure and disable independently
- Better aligns with user's request for a distinct step
- Maintains existing Step 9 validators

**Implementation:**
- Add new step between Step 9 and Step 10
- Step ID: `step-9.5`
- Step Name: "Check IDE/Linter Diagnostics"
- Step Type: `validation` or `ide_linter_check`
- Handler: `validation.check_ide_linter` or `release.ide_linter_check`
- Dependencies: Step 9 (Run Validators)
- Required: Yes (for errors), Configurable (for warnings/info)

**Configuration Example:**
```yaml
- id: step-9.5
  name: Check IDE/Linter Diagnostics
  type: ide_linter_check
  handler: validation.check_ide_linter
  required: true
  dependencies:
    - step-9
  config:
    linter_tools:
      python: [pylint, flake8, mypy]
      typescript: [eslint, tsc]
      javascript: [eslint]
    strict_mode: true  # Block on errors
    warn_on_warnings: false  # Don't block on warnings, but flag them
    show_info: true  # Display info messages
    auto_fix: false  # Don't auto-fix (manual review preferred)
    check_staged_only: true  # Only check staged files (performance)

```

### Option 2: Enhanced Step 9

**Advantages:**
- Fewer steps in workflow
- Consolidated validation step

**Disadvantages:**
- Less clear separation of concerns
- Harder to disable code quality checks independently
- Mixing workflow-specific and code quality validators

**Recommendation:** Option 1 (New Step 9.5)

---

## Priority Handling

The step should process issues in priority order:

1. **Errors (Highest Priority):**
   - Always block commit (step fails)
   - Display all errors to user
   - Provide guidance on how to fix
   - Workflow stops, commit not executed

2. **Warnings (Medium Priority):**
   - Display all warnings to user
   - If `warn_on_warnings: true`, block commit until warnings addressed
   - If `warn_on_warnings: false`, display warnings and allow commit with warning message
   - Provide guidance on how to address warnings

3. **Info Messages (Lowest Priority):**
   - Display all info messages to user
   - Always allow commit (info messages don't block)
   - Provide suggestions for improvement

---

## Configuration

**Configuration Options:**

```yaml
config:
  # Linter tools per language/project type
  linter_tools:
    python: [pylint, flake8, mypy]
    typescript: [eslint, tsc]
    javascript: [eslint]
    default: []  # Use IDE diagnostics only
  
  # Error handling
  strict_mode: true  # Block commit on errors
  
  # Warning handling
  warn_on_warnings: false  # Block commit on warnings (if true)
  show_warnings: true  # Display warnings (always true if warn_on_warnings is true)
  
  # Info handling
  show_info: true  # Display info messages
  
  # Auto-fix
  auto_fix: false  # Attempt auto-fix for fixable issues
  auto_fix_confirmation: true  # Require confirmation before auto-fix
  
  # Performance
  check_staged_only: true  # Only check staged files
  parallel_execution: true  # Run linters in parallel (if multiple)
  
  # IDE Integration
  use_ide_diagnostics: true  # Use IDE diagnostics API (read_lints)
  fallback_to_tools: true  # Fallback to linter tools if IDE diagnostics unavailable
```

---

## Acceptance Criteria

- [ ] Step 9.5 (or enhanced Step 9) checks for IDE-flagged problems before commit
- [ ] Errors block commit (step fails, workflow stops)
- [ ] Warnings are flagged (optionally block if configured)
- [ ] Info messages are displayed (commit allowed)
- [ ] Prioritization works correctly (Errors → Warnings → Info)
- [ ] Integration with IDE diagnostics API works
- [ ] Integration with project-specific linter tools works
- [ ] Configuration system supports all required options
- [ ] Step works across different project types
- [ ] Only staged files are checked (performance optimization)
- [ ] Clear error/warning/info messages displayed
- [ ] Documentation updated (workflow YAML, agent execution guide, reference docs)
- [ ] Agent execution guide includes new step instructions
- [ ] Configuration examples provided

**Verification Method:**
- [ ] Test suite execution
- [ ] Manual testing
- [ ] Both

**Verification Status:**
- [ ] Verified (test suite passed / manual test passed)
- [ ] Attempted Implementation (pending verification)
- [ ] Implementation Failed

---

## Dependencies

**Blocks:**
- Code quality assurance in Release Workflow
- Preventing linter errors from being committed
- Consistent code quality standards across releases

**Blocked By:**
- None

**Related Work:**
- **Epic 2:** Workflow Management Framework
- **Story:** TBD (to be assigned during intake)
- **Related BRs:** None
- **Related FRs:** None currently

---

## Intake Decision

**Intake Status:** PENDING  
**Intake Date:** TBD  
**Intake By:** TBD

**Decision Flow Results:**
- [ ] Story Match Found: [To be determined]
- [ ] New Story Required: [To be determined]

**Assigned To:**
- Epic: TBD
- Story: TBD
- Task: TBD
- Version: TBD

**Implementation Status:** NOT STARTED  
**Implementation Date:** TBD  
**Verification Status:** PENDING

**Kanban Links:**
- Epic: TBD
- Story: TBD
- Task: TBD

---

## Notes

- **Design Consideration:** Should this be mandatory for all projects or optional?
  - **Recommendation:** Mandatory for errors (always check), configurable for warnings/info (project-specific)
  

- **Linter Tool Integration:** How to handle different project types and linting tools?
  - **Recommendation:** Use IDE diagnostics API (e.g., `read_lints` in Cursor) as primary method (universal access), fallback to project-specific tools if IDE diagnostics unavailable
  

- **Performance:** Running linters can be slow. How to optimize?
  - **Recommendation:** 
    - Only check staged files (not entire codebase)
    - Use caching when possible
    - Parallel execution for multiple linters
    - Timeout mechanism (fail gracefully if too slow)
  

- **Auto-fix:** Should the step attempt to auto-fix issues?
  - **Recommendation:** Optional auto-fix (configurable), with confirmation before applying. Default: `auto_fix: false` (manual review preferred)
  

- **IDE Integration:** How to ensure compatibility across different IDEs?
  - **Recommendation:** Primary: IDE diagnostics API (e.g., `read_lints` tool). Fallback: Invoke project-specific linter tools directly. This ensures compatibility while maintaining performance.


**User Request:**
> "in our packaged RW, is there a step, before commit, where we check for and address any IDE-flagged problems? If not we need one. We should prioritise; Errors, Warnings, then finally, Infos. File a BR, if we don't have this setup already."

**Note:** Initially filed as BR-011, corrected to FR-024 (this is a feature enhancement, not a bug).

---

## References

- `packages/frameworks/workflow mgt/workflows/release-workflow.yaml` - Current workflow definition
- `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md` - RW agent execution guide
- `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-reference.md` - RW reference documentation
- `packages/frameworks/workflow mgt/scripts/validation/` - Validation scripts directory

---

**Template Usage:**
- This FR follows the Kanban Framework FR template
- Intake decision to be completed
- Implementation approach documented
- Configuration examples provided

---

_This template is part of the Kanban Framework. See `packages/frameworks/kanban/` for complete framework documentation._

