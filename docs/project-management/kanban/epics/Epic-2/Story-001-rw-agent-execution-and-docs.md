---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:01:50Z
expires_at: null
housekeeping_policy: keep
---

# Story 001 – RW Agent Execution & Docs

**Status:** IN PROGRESS
**Priority:** HIGH  
**Estimated Effort:** [TBD]  
**Created:** 2025-12-02  
**Completed:** N/A (story reopened for ongoing RW validation work)
**Last updated:** 2026-05-26 (v0.2.1.22+1 – Kanban documentation setup)
**Version:** v0.2.1.22+1
**Code:** E2S01

---

## Overview

Make RW agent execution documentation fully portable, clearly distinguishing dev-kit behaviour from external examples. This story ensures that the Release Workflow documentation is template-ready and can be easily adopted by other projects.

---

## Goal

Make RW agent execution documentation fully portable, clearly distinguishing dev-kit behaviour from external examples. Ensure that the Release Workflow accurately reflects verification requirements for fixes and other changes.

---

## Task Checklist

- [x] **E2:S01:T01 – Audit `release-workflow-agent-execution.md` for project-specific assumptions** ✅ COMPLETE (v0.2.1.1+3)
- [x] **E2:S01:T02 – Tag Confidentia/fynd.deals examples and add dev-kit examples** ✅ COMPLETE (v0.2.1.1+4)
- [x] **E2:S01:T03 – Align `.cursorrules` RW trigger section with dev-kit policy** ✅ COMPLETE (v0.2.1.1+5)
- [x] **E2:S01:T04 – Update RW changelog step to require verification before marking fixes as "fixed"** ✅ COMPLETE (v0.2.1.1+2)
- [x] **E2:S01:T05 – Harden RW branch safety checks to stop execution on wrong branch** ✅ COMPLETE (v0.2.1.5+1)
- [x] **E2:S01:T06 – Fix changelog validator ordering bug** ✅ COMPLETE (v0.2.1.6+4 – Validator now supports both Keep a Changelog and Canonical formats with auto-detection)
- [x] **E2:S01:T07 – Add support for update/maintenance branch patterns in branch validation** ✅ COMPLETE (v0.2.1.7+1)
- [x] **E2:S01:T08 – Add Step 9 - IDE problem checking to Release Workflow** ✅ COMPLETE (v0.2.1.8+1 – FR-024 implemented: Step 9 added for IDE/linter problem checking)

- [x] **E2:S01:T09 – BR-060: RW allow `IN PROGRESS` task releases (Step 1c)** - ✅ COMPLETE (closeout pass 2026-04-07; forensic **v0.6.6.60+1** / **E6:S06:T60** at release; canonical **E2:S01:T09**) — [Task doc](Story-001-rw-agent-execution-and-docs/T09-rw-allow-in-progress-task-releases-br060.md) | [BR-060](../../fr-br/BR-060-rw-in-progress-task-gate-blocks-build-releases.md)
- [ ] **E2:S01:T10 – UXR-006: Allow `dev` branch as accepted RW validator context (solo workflow)** - TODO — [Task doc](Story-001-rw-agent-execution-and-docs/T10-dev-branch-support-in-rw-validators.md) | [UXR-006](../../fr-br/UXR-006-dev-branch-and-rw-validator-relaxation.md)
- [x] **E2:S01:T11 – BR-062: RW Step 7 must not leave completed tasks on in-progress kboard** - ✅ COMPLETE (v0.2.1.11+2 – scope expanded to full mode + `kanban_init`; active MoSCOW COMPLETE-row pruning + regression tests) — [Task doc](Story-001-rw-agent-execution-and-docs/T11-rw-k-kanban-init-board-hygiene-for-completed-tasks-br062.md) | [BR-062](../../fr-br/BR-062-rw-k-kanban-init-does-not-prune-completed-tasks-from-kboard.md)
- [x] **E2:S01:T12 – BR-061: RW explicit task-id should not require manual pre-alignment of `version.py`** - ✅ COMPLETE (v0.2.1.12+2 – explicit-request reconciliation + guardrail-preserving tests/docs released) — [Task doc](Story-001-rw-agent-execution-and-docs/T12-rw-explicit-task-id-version-alignment-br061.md) | [BR-061](../../fr-br/BR-061-rw-explicit-task-id-requires-manual-version-alignment.md)
- [x] **E2:S01:T13 – BR-063: RW -k must prevent task attribution drift vs version anchor** - ✅ COMPLETE (v0.2.1.13+2 – filing, forensic cleanup, `rw-k` guard + `--art` + tests/docs) — [Task doc](Story-001-rw-agent-execution-and-docs/T13-rw-k-forensic-task-attribution-alignment-br063.md) | [BR-063](../../fr-br/BR-063-rw-k-task-attribution-drift-between-requested-task-and-version-anchor.md)
- [x] **E2:S01:T14 – FR-048: RW Trigger Extensions for Multiple Use Cases (traceability task wiring)** - ✅ COMPLETE (v0.2.1.14+1) — [Task doc](Story-001-rw-agent-execution-and-docs/T14-rw-trigger-extensions-multiple-use-cases-fr048.md) | [FR-048](../../fr-br/FR-048-rw-trigger-extensions-for-multiple-use-cases.md)
- [x] **E2:S01:T15 – FR-049: Canonical RW Step List - Single Source of Truth (traceability task wiring)** - ✅ COMPLETE (v0.2.1.15+1) — [Task doc](Story-001-rw-agent-execution-and-docs/T15-canonical-rw-step-list-single-source-of-truth-fr049.md) | [FR-049](../../fr-br/FR-049-canonical-rw-step-list-single-source-of-truth.md)
- [x] **E2:S01:T16 – BR-064: RW `dev` branch should not enforce epic lock** - ✅ COMPLETE (v0.2.1.16+1) — [Task doc](Story-001-rw-agent-execution-and-docs/T16-rw-dev-branch-neutral-context-no-epic-lock-br064.md) | [BR-064](../../fr-br/BR-064-rw-dev-branch-should-not-enforce-epic-lock.md)
- [x] **E2:S01:T17 – FR-077: IPW-built task status transition and kboard synchronization** - ✅ COMPLETE (v0.2.1.17+3 – ownership matrix aligned across IPW/RW/UKW, deterministic requested-task drift checks, recurrence regression tests) — [Task doc](Story-001-rw-agent-execution-and-docs/T17-ipw-built-task-status-transition-and-kboard-sync-fr077.md) | [FR-077](../../fr-br/FR-077-ipw-built-task-status-transition-and-kboard-sync.md)
- [x] **E2:S01:T18 – RW Step 8 stage-completeness guardrails (BR-070)** - ✅ COMPLETE (v0.2.1.18+1 — post-commit validator, tests, docs) — [Task doc](Story-001-rw-agent-execution-and-docs/T18-rw-step-8-stage-completeness-guardrails-br070.md) | [BR-070](../../fr-br/BR-070-rw-k-stage-files-completeness-gap-allows-partial-kanban-commit.md)
- [x] **E2:S01:T19 – RW trigger routing execution regression (BR-071)** - ✅ COMPLETE (v0.2.1.19+1 — fix: CLAUDE.md + .claude/commands/rw.md; root cause: no Claude Code instruction file; BR-071 RESOLVED) — [Task doc](Story-001-rw-agent-execution-and-docs/T19-rw-trigger-routing-execution-regression-br071.md) | [BR-071](../../fr-br/BR-071-rw-trigger-routing-not-executing-from-chat-session.md)
- [x] **E2:S01:T20 – SemVer task-touch collision retrospective fix (BR-073)** - ✅ COMPLETE (v0.2.1.20+1 — registry patch, BR doc, task doc, kanban updates) — [Task doc](Story-001-rw-agent-execution-and-docs/T20-semver-task-touch-collision-retrospective-fix-br073.md) | [BR-073](../../fr-br/BR-073-semver-task-touch-collision-retrospective-fix.md)
- [x] **E2:S01:T21 – RW release commits test artifacts, deletes prior-build changelog, emits version typo (BR-074)** - ✅ COMPLETE (v0.2.1.21+1 — `.gitignore` exclusions, restored +1 changelog, patched +2 typo, Step 3 immutability guards, archive link validator, dual-source parity updated) — [Task doc](Story-001-rw-agent-execution-and-docs/T21-rw-release-commits-test-artifacts-and-changelog-integrity-failures-br074.md) | [BR-074](../../fr-br/BR-074-rw-release-commits-test-artifacts-and-changelog-integrity-failures.md)
- [ ] **E2:S01:T22 – RW perpetual-task BUILD must persist in `version.py` (BR-075)** - 📋 TODO (LOW — **v0.2.1.22+1** intake; validator + doc ordering for perpetual `RW` / `RW -k`) — [Task doc](Story-001-rw-agent-execution-and-docs/T22-rw-perpetual-task-version-py-build-increment-br075.md) | [BR-075](../../fr-br/BR-075-rw-perpetual-task-build-not-reflected-in-version-py.md)

---

## Tasks

### E2:S01:T01 – Audit `release-workflow-agent-execution.md` for project-specific assumptions ✅ COMPLETE

**Input:** Current `release-workflow-agent-execution.md` file  
**Deliverable:** Audit report identifying project-specific assumptions ✅ **DELIVERED**  
**Dependencies:** None  
**Blocker:** None

**Status:** IN PROGRESS

**Approach:**
1. ✅ Reviewed `packages/frameworks/workflow mgt/docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md`
2. ✅ Identified 15 project-specific assumptions across 4 categories:
   - Hardcoded File Paths (7 instances)
   - Handler Names (2 instances)
   - Project References (3 instances)
   - Version/Branch Examples (3 instances)
3. ✅ Documented findings and recommendations in audit report

**Key Findings:**
- **15 project-specific assumptions** identified
- **7 hardcoded file paths** need template placeholders
- **2 handler names** need abstraction
- **3 project references** need tagging or removal
- **3 version/branch examples** need generic patterns

**Recommendations:**
- Replace hardcoded paths with template placeholders (`{version_file_path}`, `\{kanban_path\}`, etc.)
- Replace handler names with generic or templated versions
- Tag all examples clearly or use generic patterns
- Add configuration section listing all template placeholders

**Files Created:**
- ✅ `docs/project-management/kanban/Story-001-rw-agent-execution-and-docs/T01-audit-report.md` (comprehensive audit report)

**Deliverable:** See [`T01-audit-report.md`](Story-001-rw-agent-execution-and-docs/T01-audit-report.md) for complete audit findings and recommendations.

---

### E2:S01:T02 – Tag Confidentia/fynd.deals examples and add dev-kit examples ✅ COMPLETE

**Input:** Audit report from T001  
**Deliverable:** Updated documentation with clearly tagged examples ✅ **DELIVERED**  
**Dependencies:** E2:S01:T01  
**Blocker:** None

**Status:** IN PROGRESS

**Approach:**
1. ✅ Tagged all Confidentia/fynd.deals examples with `[Example: Confidentia]` or `[Example: Confidentia/fynd.deals]` labels
2. ✅ Added dev-kit-specific examples with `[Example: ai-dev-kit]` labels throughout the document
3. ✅ Added overview note explaining example tagging system
4. ✅ Ensured examples are clearly distinguished in all 11 steps

**Key Changes:**
- **Document Header:** Tagged "Related" field with example labels
- **Step 1 (Branch Safety Check):** Tagged branch examples, added dev-kit branch examples
- **Step 2 (Bump Version):** Tagged version file paths, version numbers, added dev-kit equivalents
- **Step 3 (Create Detailed Changelog):** Tagged version examples, branch examples, file paths, added dev-kit equivalents
- **Step 4 (Update Main Changelog):** Tagged version examples, added dev-kit equivalents
- **Step 5 (Update README):** Tagged version examples, added dev-kit equivalents
- **Step 6 (Auto-update Kanban Docs):** Tagged handler names, Kanban paths, version examples, added dev-kit equivalents
- **Step 8 (Run Validators):** Tagged handler names, script paths, added template placeholder notes
- **Step 9 (Commit Changes):** Tagged version examples, commit messages, added dev-kit equivalents
- **Step 10 (Create Git Tag):** Tagged version examples, tag names/messages, added dev-kit equivalents
- **Step 11 (Push to Remote):** Tagged branch examples, tag examples, added dev-kit equivalents

**Files Updated:**
- ✅ `packages/frameworks/workflow mgt/docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md` (comprehensive tagging and dev-kit examples added)

**Deliverable:** Documentation now clearly distinguishes between Confidentia/fynd.deals examples and dev-kit examples, making it easier for users to understand which examples apply to their project.

---

### E2:S01:T03 – Align `.cursorrules` RW trigger section with dev-kit policy ✅ COMPLETE

**Input:** Updated RW documentation from T002  
**Deliverable:** Updated `.cursorrules` RW trigger section ✅ **DELIVERED**  
**Dependencies:** E2:S01:T02  
**Blocker:** None

**Status:** IN PROGRESS

**Approach:**
1. ✅ Reviewed `packages/frameworks/workflow mgt/cursorrules-rw-trigger-section.md`
2. ✅ Reviewed `docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md`
3. ✅ Added dev-kit-specific examples throughout the section
4. ✅ Enhanced version schema section with new story/epic progression rules
5. ✅ Added dev-kit file path examples
6. ✅ Added dev-kit epic ranges information
7. ✅ Added canonical ordering, forensic traceability, and immutability principles
8. ✅ Added "For ai-dev-kit Usage" section with dev-kit-specific paths
9. ✅ Enhanced changelog format notes with immutability requirements

**Key Changes:**
- **File Paths Section:** Added dev-kit examples for all paths (version file, changelog, Kanban, validators)
- **Version Schema Section:** 
  - Added new story/epic progression rules
  - Added dev-kit epic ranges (Epic 1-4+)
  - Clarified no legacy range in dev-kit

- **Version Calculation Examples:** Added dev-kit-specific examples for all progression scenarios
- **Key Principles:** Added canonical ordering, forensic traceability, and immutability principles
- **Changelog Steps:** Enhanced with immutability notes (detailed changelog timestamps are immutable)
- **Reference Documentation:** Added Kanban governance policy reference
- **Customization Section:** Added "For ai-dev-kit Usage" subsection with dev-kit-specific paths and policy references

**Files Updated:**
- ✅ `packages/frameworks/workflow mgt/cursorrules-rw-trigger-section.md` (aligned with dev-kit policy)

**Deliverable:** Cursorrules RW trigger section now includes dev-kit-specific examples and aligns with dev-kit versioning policy, making it clear how to use the template in the dev-kit repository itself.

---

### E2:S01:T04 – Update RW changelog step to require verification before marking fixes as "fixed"

**Input:** Current RW changelog documentation  
**Deliverable:** Updated RW documentation requiring verification for fixes  
**Dependencies:** None  
**Blocker:** None

**Approach:**
1. Review Step 3 (Create Detailed Changelog) and Step 4 (Update Main Changelog) in `release-workflow-agent-execution.md`
2. Update documentation to specify that fixes cannot be claimed as "Fixed" until verified through testing
3. Add requirement that unverified fixes should be logged as "Attempted fix" until verification
4. Specify verification methods: test suite execution or manual testing
5. Update changelog format guidelines to include verification status
6. Add validation step to ensure fixes are not marked as "Fixed" without verification evidence

**Problem Solved:**
- Prevents claiming fixes are complete before they're actually verified
- Ensures changelogs accurately reflect the state of fixes
- Maintains integrity of release documentation

**Files to Update:**
- `packages/frameworks/workflow mgt/docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md`
- Update Step 3 (Create Detailed Changelog) to include verification requirements
- Update Step 4 (Update Main Changelog) to include verification requirements
- Add validation checks for verification status

**Key Changes:**
- Add verification requirement to changelog creation process
- Specify that fixes must be logged as "Attempted fix" until verified
- Add verification status field to changelog format
- Update agent execution pattern to include verification check
- Add validation step to ensure verification before marking as "Fixed"

**Verification Methods:**
- Test suite execution (automated tests pass)
- Manual testing (documented test results)
- Both methods acceptable, but verification must be documented

**Changelog Format Updates:**
- Add "Verification Status" field: `Verified` / `Attempted Fix (Pending Verification)`
- Update "Fixed" section to only include verified fixes
- Add "Attempted Fixes" section for unverified fixes
- Include verification method and evidence in changelog entry

---

### E2:S01:T05 – Harden RW branch safety checks to stop execution on wrong branch

**Input:** Current RW Step 1 implementation, `validate_branch_context.py` script  
**Deliverable:** Hardened RW with mandatory branch safety enforcement  
**Dependencies:** None  
**Blocker:** None

**Problem Statement:**
The Release Workflow (RW) currently has Step 1: Branch Safety Check documented, but it is not being enforced. The RW continues execution even when on the wrong branch (e.g., on `epic/9` but committing Epic 5 work). This allows cross-epic contamination and violates branch isolation principles. The RW must STOP immediately if branch safety checks fail and provide clear guidance to the user.

**Approach:**
1. **Audit current implementation:**
   - Review Step 1 execution in `release-workflow-agent-execution.md`
   - Review `validate_branch_context.py` script behavior
   - Identify gaps where RW continues despite branch mismatches
   - Document all failure modes where branch safety is bypassed

2. **Design mandatory branch safety enforcement:**
   - Define branch safety check as **MANDATORY BLOCKING STEP**
   - Ensure Step 1 runs BEFORE any file modifications
   - Design clear failure states and error messages
   - Create user guidance for branch mismatch scenarios

3. **Implement branch safety hardening:**
   - Update RW Step 1 to call `validate_branch_context.py` and parse exit code
   - If validator returns non-zero exit code, STOP workflow immediately
   - Mark all remaining steps as `cancelled`
   - Output clear error message with actionable guidance

4. **Update RW documentation:**
   - Update `release-workflow-agent-execution.md` Step 1 to emphasize MANDATORY nature
   - Add explicit "DO NOT PROCEED" language
   - Document exact error message format
   - Add examples of branch mismatch scenarios and resolutions

5. **Update agent guidance:**
   - Update `.cursorrules` RW trigger section to emphasize branch safety
   - Add explicit instruction: "If Step 1 fails, DO NOT proceed to Step 2"
   - Create agent rules that prevent bypassing branch checks
   - Document anti-pattern: "Never skip or ignore branch safety checks"

6. **Create validation integration:**
   - Ensure `validate_branch_context.py` returns proper exit codes
   - Integrate validator into RW Step 1 execution flow
   - Add validation result parsing and error handling
   - Create test scenarios for branch mismatch detection

**Deliverables:**
- Hardened RW Step 1 that stops on branch mismatch
- Updated `release-workflow-agent-execution.md` with mandatory enforcement
- Updated `.cursorrules` RW trigger section with branch safety emphasis
- Integration of `validate_branch_context.py` into RW execution
- Clear error messages and user guidance for branch mismatches
- Agent rules preventing branch safety bypass

**Success Criteria:**
- RW stops immediately if branch safety check fails
- No file modifications occur when on wrong branch
- Clear error messages guide user to correct branch
- All remaining steps marked as `cancelled` on failure
- Agent cannot bypass branch safety checks
- Validator integration is mandatory and non-optional

**Error Message Format:**
```
🚨 RELEASE WORKFLOW BLOCKED

Step 1: Branch Safety Check - FAILED

Reason: Current branch '{branch}' does not align with the work being released.

Details:
- Current branch: {branch}
- Expected branch: epic/{expected_epic}
- Version file shows: {version}
- Detected epic from work: {detected_epic}

Action Required:
1. Switch to the correct branch: git checkout epic/{correct_epic}
2. Verify your changes align with the branch: git status
3. Then run RW again

RW is NOT complete. Workflow stopped at Step 1.
All subsequent steps have been cancelled.
```

**Files to Update:**
- `packages/frameworks/workflow mgt/docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md` (Step 1 hardening)
- `packages/frameworks/workflow mgt/cursorrules-rw-trigger-section.md` (branch safety emphasis)
- Agent execution patterns (mandatory validation)

---

### E2:S01:T06 – Fix changelog validator ordering bug 🔄 REOPENED {#e2s01t06--fix-changelog-validator-ordering-bug--reopened}

**Input:**  
- **Bug Report:** [BR-002: Changelog Validator Ordering Bug](../../fr-br/BR-002-changelog-validator-ordering-bug.md) (REOPENED)
- Current `validate_changelog_format.py` implementation
- Validation errors from CHANGELOG.md restoration (2025-12-16)

**Deliverable:**  
- Fixed `validate_changelog_format.py` that supports both Keep a Changelog format (newest first) and canonical ordering (lowest first)
- Configuration option to select format (via config file or command-line flag)
- Updated documentation explaining both supported formats
- Test cases verifying both formats work correctly

**Dependencies:** None  
**Blocker:** None

**Status:** IN PROGRESS

**Previous Attempt (v0.2.1.6+2):**
- Task was marked complete but bug still present
- Validator still only accepts canonical ordering
- Need to review what was actually implemented and fix properly

**Problem Statement:**
The `validate_changelog_format.py` validator checks for canonical ordering (version numbers ordered from lowest to highest), but Keep a Changelog format requires entries to be ordered from newest to oldest (highest version first). This creates a conflict where correctly formatted changelogs fail validation.

**Current Validation Errors (2025-12-16):**
```
❌ VALIDATION FAILED:
  Changelog ordering violation: 0.4.6.4+1 appears before 0.4.6.3+1, but canonical ordering requires 0.4.6.3+1 before 0.4.6.4+1
  Changelog ordering violation: 0.2.11.9+3 appears before 0.2.11.9+2, but canonical ordering requires 0.2.11.9+2 before 0.2.11.9+3
  [... multiple similar violations for Keep a Changelog format ...]
```

**Approach:**
1. **Review previous implementation:**
   - Review what was actually implemented in v0.2.1.6+2
   - Understand why bug persists despite task being marked complete
   - Document findings

2. **Design format support:**
   - Support both Keep a Changelog format (newest first) and canonical ordering (lowest first)
   - Add configuration option (via `rw-config.yaml` or command-line flag)
   - Default to Keep a Changelog format (industry standard)

3. **Implement fix:**
   - Update `validate_changelog_ordering()` function to detect format
   - Add format detection logic (check if entries are newest-first or lowest-first)
   - Add configuration support for explicit format selection
   - Update error messages to indicate which format is expected

4. **Add tests:**
   - Test cases for Keep a Changelog format (newest first)
   - Test cases for canonical ordering (lowest first)
   - Test cases for format detection
   - Test cases for configuration override

5. **Update documentation:**
   - Document both supported formats
   - Explain how to configure format preference
   - Update RW documentation if needed

**Acceptance Criteria:**
- [ ] Validator supports both Keep a Changelog format (newest first) and canonical ordering (lowest first)
- [ ] Validator can detect format automatically or be configured explicitly
- [ ] Validator provides clear error messages indicating which format is expected
- [ ] Documentation updated to explain both supported formats
- [ ] Default behavior aligns with Keep a Changelog format (industry standard)
- [ ] Test cases verify both formats work correctly
- [ ] Fix verified with actual CHANGELOG.md (Keep a Changelog format)

**Files to Update:**
- `packages/frameworks/workflow mgt/scripts/validation/validate_changelog_format.py` - Add format support
- `packages/frameworks/workflow mgt/config/rw-config-schema.md` - Add format configuration option
- Documentation explaining both formats

**Related:**
- **Bug Report:** [BR-002: Changelog Validator Ordering Bug](../../fr-br/BR-002-changelog-validator-ordering-bug.md) (REOPENED)
- **Documentation:** 
  - [REOPENING_BR_AND_TASKS_GUIDE.md](../../fr-br/REOPENING_BR_AND_TASKS_GUIDE.md) - Guide for reopening BRs/tasks
  - [BIDIRECTIONAL_WIRING_PRINCIPLE.md](../../fr-br/BIDIRECTIONAL_WIRING_PRINCIPLE.md) - Principle for bidirectional linking (this task demonstrates the pattern)

- Previous attempt: E2:S01:T06 (v0.2.1.6+2) - marked complete but bug persists

---

### E2:S01:T07 – Add support for update/maintenance branch patterns in branch validation

**Input:**  
- Bug Report BR-003: RW Branch Validation Missing Support for Update/Maintenance Branches
- Current `validate_branch_context.py` implementation
- User feedback: "update/ai-dev-kit branch pattern is good for framework updates, but RW should know about it"

**Deliverable:**  
- Updated `validate_branch_context.py` with support for `update/*` branch patterns
- Configurable branch mapping via `rw-config.yaml` (optional enhancement)
- Updated RW documentation explaining update branch handling
- No warnings for valid `update/*` branches

**Dependencies:** E2:S01:T05 (branch safety hardening foundation)  
**Blocker:** None

**Problem Statement:**
The `validate_branch_context.py` script only recognizes `main` branch and `epic/\{n\}` pattern branches. When running RW on an `update/ai-dev-kit` branch (or similar update/maintenance branches), the validator issues a warning: "Branch 'update/ai-dev-kit' not in known mapping - cannot validate version". The `update/*` branch pattern is a good practice for incorporating framework updates, and the RW should recognize and support this pattern.

**Approach:**
1. **Extend branch pattern recognition:**
   - Add support for `update/*` branch pattern (e.g., `update/ai-dev-kit`, `update/workflow-mgt`)
   - Consider other maintenance patterns (e.g., `maintenance/*`, `upgrade/*`)
   - Decide on validation behavior: skip validation (like `main`) or provide configurable mapping

2. **Update `parse_branch_epic()` function:**
   - Add pattern matching for `update/*` branches
   - Return appropriate epic context (None for skip, or extract from config)
   - Maintain backward compatibility with existing `epic/\{n\}` pattern

3. **Add configuration support (optional enhancement):**
   - Extend `rw-config.yaml` schema to support custom branch mappings
   - Allow projects to define their own branch patterns
   - Document configuration options

4. **Update validation logic:**
   - Handle `update/*` branches appropriately (skip validation or use config)
   - Remove warning for recognized update branches
   - Maintain clear error messages for truly unknown branches

5. **Update documentation:**
   - Document `update/*` branch pattern usage in RW guide
   - Explain when to use update branches vs epic branches
   - Add examples of update branch usage
   - Update `.cursorrules` if needed

**Acceptance Criteria:**
- [x] `validate_branch_context.py` recognizes `update/*` branch patterns ✅
- [x] No warnings issued for valid `update/*` branches ✅
- [x] Update branches handled appropriately (skip validation similar to `main` branch) ✅
- [ ] Documentation updated to explain update branch handling (pending)
- [x] Backward compatibility maintained with existing `epic/\{n\}` pattern ✅
- [ ] Optional: Configuration support for custom branch patterns (future enhancement)

**Files to Update:**
- `packages/frameworks/workflow mgt/scripts/validation/validate_branch_context.py` - Add update branch support
- `packages/frameworks/workflow mgt/docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md` - Document update branch usage
- `packages/frameworks/workflow mgt/config/rw-config-schema.md` - Add branch mapping configuration (if implementing config support)
- `packages/frameworks/workflow mgt/cursorrules-rw-trigger-section.md` - Update branch mapping section (if needed)

**Related:**
- BR-003: RW Branch Validation Missing Support for Update/Maintenance Branches
- E2:S01:T05: Harden RW branch safety checks (foundation for branch validation)

---

## Acceptance Criteria

- [x] RW documentation is fully portable and template-ready ✅
- [x] Examples are clearly tagged as dev-kit vs external ✅
- [x] Changelog step requires verification before marking fixes as "Fixed" ✅
- [x] Unverified fixes are logged as "Attempted fix" until verified ✅
- [x] Verification methods (test suite, manual testing) are documented ✅
- [x] Validation checks enforce verification requirements ✅

---

## Dependencies

**Coordinates With:**
- Epic 3: Numbering & Versioning Framework (for versioning integration)
- Epic 4: Kanban Framework (for Kanban integration)

---

## References

- `packages/frameworks/workflow mgt/docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md`
- `packages/frameworks/workflow mgt/cursorrules-rw-trigger-section.md`
- `docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md`

---

_Last updated: 2026-04-02 — Story reopened; **E2:S01:T09** [BR-060](Story-001-rw-agent-execution-and-docs/T09-rw-allow-in-progress-task-releases-br060.md). Prior: 2025-12-09 (v0.2.1.7+1 – Task 7 completed)._

