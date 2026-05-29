---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-09T15:35:00Z
expires_at: null
housekeeping_policy: keep
---

# Bug Report BR-038 – Release Workflow Micromanagement and Tool Discovery Issues

**Code:** BR-038  
**Status:** IN PROGRESS  
**Priority:** HIGH  
**Created:** 2026-03-09  
**Last Updated:** 2026-04-20 — Relevance review: legacy friction mostly resolved; recovery/logging scope expanded and re-housed to follow-on task

**Implementing Task:** [E6:S06:T63](../epics/Epic-6/Story-006-feature-requests/T63-rw-recovery-journal-and-rollback-contract-br038.md)

**Note:** **Cascade / whitelist** productivity blockers that worsen RW friction are tracked under **[BR-039](BR-039-cascade-whitelist-security-prompt-usability-blocker.md)** / **[E6:S06:T57](../epics/Epic-6/Story-006-feature-requests/T57-br039-cascade-whitelist-security-prompt-blocker.md)** (vendor-side).

---

## Problem Statement

The Release Workflow (RW) suffers from significant micromanagement issues and tool discovery problems that create excessive friction for users. The automation adds more work than it saves, requiring users to manually debug scripts, hunt for tools, and implement workarounds for basic release operations.

## Relevance Review (2026-04-20)

This BR is now split into:

- **Resolved historical scope:** Micromanagement/tool discovery friction that has been substantially hardened in prior RW work.
- **Active scope:** Deterministic recovery when RW fails mid-run, with explicit run logging and rollback/compensation support.

### Requirement Reconciliation

- [x] **R1:** Improve tool discovery and operator guidance for RW execution.
- [x] **R2:** Reduce step-by-step micromanagement in standard RW execution path.
- [x] **R3:** Improve error clarity and manual fallback guidance.
- [x] **R4:** Persist per-run RW execution journal (step state, commands, exit codes, touched files, timestamps). — Implemented in `packages/frameworks/workflow mgt/scripts/journal/` via [E6:S06:T63 IPW plan](../../implementation-cycles/IPP-E6S06T63-rw-recovery-journal.md).
- [x] **R5:** Add deterministic recovery artifact/output when RW fails (what changed, what is safe to retry, what must be manually repaired). — Recovery report (Markdown + JSON) emitted by `RecoveryReport` class.
- [x] **R6:** Provide rollback/compensation mechanism contract (minimum: documented, reproducible manual rollback; target: assisted rollback mode). — Documented in `docs/journals/ROLLBACK_CONTRACT.md` and enforced by `RollbackContract` class.

### Active Workstream

Active implementation for unresolved recovery scope is tracked under:

- [E6:S06:T63](../epics/Epic-6/Story-006-feature-requests/T63-rw-recovery-journal-and-rollback-contract-br038.md)

## Current Issues

### 1. Excessive Manual Intervention Required

- **Script Debugging Burden:** Users must manually debug `update_kanban_docs.py` when it fails
- **Version File Confusion:** Scripts look for version files in wrong locations
- **Pattern Matching Failures:** Story document discovery fails without clear error messages
- **Multiple Manual Workarounds:** Users forced to implement manual RW steps when automation fails

### 2. Tool Discovery and Fragmentation Problems

- **No Clear Entry Point:** Cannot find main `release-workflow.sh` script
- **Competing Workflow Systems:** Multiple workflow execution approaches with different interfaces
- **Scattered Tool Locations:** Scripts distributed across multiple directories without clear organization
- **Inconsistent Invocation Patterns:** Different scripts require different command patterns and parameters

### 3. Poor Error Recovery and Messaging

- **Unclear Error Messages:** Scripts fail with cryptic messages like "Story doc not found" without guidance
- **No Graceful Degradation:** No fallback procedures when automated components fail
- **Brittle Automation:** Scripts fail on minor configuration differences
- **Required Deep System Knowledge:** Users need extensive knowledge to resolve basic issues

### 4. Over-Engineering and Complexity

- **Complex Configuration:** Multiple config files and pattern matching systems
- **Excessive Abstraction:** Over-engineered solutions for simple release tasks
- **Unnecessary Dependencies:** Scripts depend on complex systems for basic operations
- **Maintenance Overhead:** Complex systems require constant maintenance and debugging

## Evidence and Examples

### Video Evidence: Release Workflow Execution (2026-03-09)

**Video File:** `Screen Recording 2026-03-09 at 15.20.31.mov` (project root)

This video captures a typical Release Workflow execution and demonstrates the following critical issues:

#### Manual Intervention Required

- **Script Debugging Burden:** User had to manually debug `update_kanban_docs.py` when it failed
- **Version File Confusion:** Script looked for `src/confidentia/version.py` but actual file was `src/fynd_deals/version.py`
- **Pattern Matching Failures:** Story document discovery failed despite correct file existence
- **Multiple Manual Workarounds:** User forced to implement manual RW steps when automation failed

#### Tool Discovery Problems

- **No Clear Entry Point:** Could not find main `release-workflow.sh` script
- **Fragmented Workflow Systems:** Multiple workflow execution approaches with different interfaces
- **Scattered Tool Locations:** Scripts distributed across multiple directories without clear organization
- **Inconsistent Invocation Patterns:** Different scripts require different command patterns and parameters

#### Excessive Time and Effort

- **Tool Hunting:** Significant time spent searching for correct workflow scripts
- **Debugging Overhead:** Multiple attempts to resolve script failures
- **Manual Implementation:** User had to manually execute basic release steps (version bump, changelog, commit, tag, push)
- **Knowledge Barrier:** Required deep system knowledge to resolve basic issues

### Recent RW Execution (E6:S06:T01+1)

The video shows the actual execution of the Release Workflow for the FR/BR/UXR board implementation, which required:

1. **Tool Discovery Issues:** Had to hunt through multiple directories to find workflow scripts
2. **Script Failures:** `update_kanban_docs.py` failed due to pattern matching issues
3. **Manual Workarounds:** Forced to manually execute RW steps (version bump, changelog, commit, tag, push)
4. **Excessive Time:** Significantly more time spent debugging automation than doing actual release tasks

### Specific Technical Issues

- **Version Path Confusion:** Script looked for `src/confidentia/version.py` but actual file was `src/fynd_deals/version.py`
- **Pattern Matching:** Story document discovery failed despite correct file existence
- **Config Interpretation:** Multiple config systems with conflicting requirements
- **Error Recovery:** No clear guidance when scripts failed

## Impact Assessment

### User Experience Impact

- **High Friction:** Release workflow becomes stressful and time-consuming
- **Reduced Productivity:** Users spend more time fighting tools than doing productive work
- **Knowledge Barrier:** New users cannot effectively use release workflow
- **Frustration:** Creates negative user experience and discourages releases

### Project Impact

- **Release Inhibition:** Complex workflow may discourage regular releases
- **Quality Issues:** Manual workarounds increase risk of human error
- **Maintenance Burden:** Complex systems require ongoing maintenance
- **Adoption Barrier:** New contributors struggle with release process

## Root Cause Analysis

### Primary Causes

1. **Fragmented Architecture:** Multiple competing workflow systems without clear integration
2. **Poor Error Handling:** Scripts not designed with failure scenarios in mind
3. **Over-Engineering:** Complex solutions for relatively simple problems
4. **Inconsistent Design:** Different tools follow different patterns and conventions

### Contributing Factors

- **Lack of User Testing:** Workflow not tested with actual user scenarios
- **Documentation Gaps:** Clear troubleshooting guides missing
- **No Graceful Degradation:** No fallback procedures for common failure modes
- **Complex Configuration:** Too many configuration options and dependencies

## Proposed Solution

### Phase 1: Immediate Fixes (High Priority)

1. **Simplify RW Entry Point**
   - Create single, reliable `release-workflow.sh` script in project root
   - Provide clear usage instructions and error messages
   - Implement graceful fallback to manual steps when automation fails

2. **Improve Error Recovery**
   - Add clear error messages with actionable guidance
   - Implement retry mechanisms for common failure scenarios
   - Provide manual step instructions when automation fails

3. **Standardize Tool Location**

   - Consolidate workflow scripts to single, predictable location
   - Create clear naming conventions and directory structure
   - Update all documentation to reflect standard locations

### Phase 2: Medium-term Improvements (Medium Priority)

1. **Unified Workflow Interface**
   - Standardize command patterns across all workflow scripts
   - Implement consistent parameter handling and help systems
   - Create unified configuration approach

2. **Self-Healing Automation**
   - Implement adaptive pattern matching for file discovery
   - Add automatic path resolution for common configuration issues
   - Create validation and repair procedures for common problems

### Phase 3: Long-term Architecture (Low Priority)

1. **Simplified Architecture**
   - Reduce complexity in workflow automation
   - Focus on essential release tasks rather than comprehensive automation
   - Implement modular design with clear separation of concerns

2. **Better Documentation**
   - Create comprehensive troubleshooting guides
   - Add common failure scenarios and solutions
   - Provide clear upgrade and migration paths

## Success Criteria

### Functional Requirements

- ✅ **Single Entry Point:** One clear way to start the release workflow
- ✅ **Graceful Failure:** Clear guidance when automation fails
- ✅ **Manual Fallback:** Ability to complete releases manually when needed
- ✅ **Clear Error Messages:** Actionable error messages with specific guidance

### Quality Requirements

- ✅ **Reduced Friction:** Release workflow should be faster than manual process
- ✅ **Predictable Behavior:** Consistent behavior across different environments
- ✅ **Easy Recovery:** Simple procedures for common failure scenarios
- ✅ **Good Documentation:** Clear instructions and troubleshooting guides

## Implementation Plan

### Phase 1: Immediate Relief (1-2 days)
- Create simplified `release-workflow.sh` script
- Add better error messages to existing scripts
- Document common failure scenarios and solutions
- Test with actual release scenarios

### Phase 2: System Improvements (1 week)
- Refactor existing scripts for better error handling
- Implement unified configuration approach
- Add self-healing capabilities for common issues
- Update all documentation

### Phase 3: Architecture Review (2 weeks)
- Evaluate overall workflow architecture
- Simplify complex components
- Implement long-term maintainability improvements
- Create comprehensive testing procedures

## Risk Assessment

### Low Risk
- **Single Entry Point:** Clear improvement with minimal disruption
- **Better Error Messages:** No functional changes, just improved communication
- **Documentation Updates:** No code changes required

### Medium Risk
- **Script Refactoring:** May introduce new issues during refactoring
- **Configuration Changes:** May affect existing workflows
- **Architecture Changes:** Requires careful testing and validation

### Mitigation Strategies
- **Incremental Deployment:** Roll out changes gradually
- **Backward Compatibility:** Maintain existing interfaces during transition
- **Comprehensive Testing:** Test all scenarios before deployment
- **Rollback Plan:** Ability to quickly revert changes if needed

## Dependencies

### Required Dependencies
- Existing workflow scripts and configuration files
- Current version management system
- Git repository structure and conventions

### Optional Dependencies
- User feedback on specific pain points
- Testing with different release scenarios
- Integration with existing CI/CD systems

## Timeline

### Phase 1: Immediate Fixes (Days 1-2)
- Create simplified release script
- Improve error messages
- Document common issues

### Phase 2: System Improvements (Days 3-7)
- Refactor existing scripts
- Implement unified interface
- Add self-healing capabilities

### Phase 3: Architecture Review (Days 8-14)
- Evaluate overall architecture
- Implement long-term improvements
- Create comprehensive testing

## Related Items

### Related Bug Reports
- **BR-037:** Kanban Install Consumer Board Contamination (workflow integration issues)
- **BR-036:** RW Step 7 Board Update Bugs (release workflow automation issues)

### Related Feature Requests
- **FR-041:** Perpetual Task for Release Workflow Maintenance (ongoing maintenance needs)
- **FR-040:** RW Update Kanban Board on Task Completion (automation improvements)

### Related Tasks
- **E2:S16:T03:** Release Workflow Maintenance (perpetual task for RW improvements)
- **E6:S07:T104:** Release Automation Audit (comprehensive audit of release systems)

---

**Severity:** HIGH - This issue significantly impacts user experience and release efficiency  
**Urgency:** HIGH - Immediate fixes needed to reduce user friction  
**Complexity:** MEDIUM - Requires careful refactoring but achievable with incremental approach  

*This BR addresses the fundamental usability issues in the Release Workflow that are creating excessive friction and reducing productivity for all users.*
