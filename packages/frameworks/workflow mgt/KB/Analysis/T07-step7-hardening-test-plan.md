---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-15T00:00:00Z
expires_at: null
housekeeping_policy: keep
related_story: E2:S08
related_fr: FR-015
---

# E2:S08:T07 – Step 7 Hardening Test Plan

**Goal:**
- Validate that all FR-015 acceptance criteria are met
- Test comprehensive scenarios covering canonical, non-canonical, and hard-fail flows
- Validate performance requirements (< 5 seconds for typical projects)
- Validate reliability (deterministic steps achieve close to 100% confidence)

## Test Matrix

### Category 1: Purely Canonical Flows (Should Succeed)

**Test 1.1: Normal Task Completion**
- **Setup:** Canonical Story doc with Task Checklist, Epic doc exists
- **Version:** v0.2.8.7+1 (E2:S8:T7)
- **Expected:** Script updates Story and Epic docs, validation passes, exit code 0
- **Validation:** All version markers correct, status fields updated, no errors

**Test 1.2: Story Completion (All Tasks Complete)**
- **Setup:** Story with all tasks marked complete
- **Version:** v0.2.8.7+1 (E2:S8:T7 - final task)
- **Expected:** Story marked COMPLETE, Completed date added, Epic updated
- **Validation:** Story status = COMPLETE, Completed date present, Epic checklist updated

**Test 1.3: Epic Completion (All Stories Complete)**
- **Setup:** Epic with all stories complete
- **Version:** v0.2.8.7+1 (E2:S8:T7 - final task of final story)
- **Expected:** Epic marked COMPLETE, Completed date added
- **Validation:** Epic status = COMPLETE, Completed date present

**Test 1.4: Config-Driven Path Resolution**
- **Setup:** `rw-config.yaml` exists with `use_kanban: true` and path patterns
- **Version:** v0.2.8.7+1
- **Expected:** Script uses config paths, updates succeed
- **Validation:** Paths resolved from config, updates applied correctly

**Test 1.5: Fallback Path Resolution (No Config)**
- **Setup:** No `rw-config.yaml`, canonical default paths
- **Version:** v0.2.8.7+1
- **Expected:** Script uses canonical defaults, updates succeed
- **Validation:** Paths resolved from defaults, updates applied correctly

### Category 2: Non-Canonical but Recoverable Flows (Agentic Guidance, RW BLOCKED)

**Test 2.1: Missing Required Field (Recoverable)**
- **Setup:** Story doc missing "Version" field in header
- **Version:** v0.2.8.7+1
- **Expected:** Validation fails, error message identifies missing field, recovery guidance provided
- **Validation:** Error type = REQUIRED_FIELD_MISSING, recovery guidance includes steps to fix

**Test 2.2: Version Mismatch (Recoverable)**
- **Setup:** Story doc header has wrong version (manually edited)
- **Version:** v0.2.8.7+1
- **Expected:** Validation fails, error message shows expected vs found, recovery guidance provided
- **Validation:** Error type = VERSION_MISMATCH, recovery guidance includes git restore steps

**Test 2.3: Status Inconsistency (Recoverable)**
- **Setup:** Story marked COMPLETE but missing Completed date
- **Version:** v0.2.8.7+1
- **Expected:** Validation fails, error identifies inconsistency, recovery guidance provided
- **Validation:** Error type = STATUS_INCONSISTENCY, recovery guidance includes adding Completed date

**Test 2.4: Task Checklist Version Mismatch (Recoverable)**
- **Setup:** Task Checklist entry has wrong version marker
- **Version:** v0.2.8.7+1
- **Expected:** Validation fails, error identifies mismatch, recovery guidance provided
- **Validation:** Error type = TASK_CHECKLIST_VERSION_MISMATCH, recovery guidance provided

**Test 2.5: Epic Version Missing (Recoverable)**
- **Setup:** Epic Last updated missing version string
- **Version:** v0.2.8.7+1
- **Expected:** Validation fails, error identifies missing version, recovery guidance provided
- **Validation:** Error type = EPIC_VERSION_MISSING, recovery guidance provided

### Category 3: Hard-Fail Flows (Structural Corruption → RW BLOCKED)

**Test 3.1: Story Doc Missing**
- **Setup:** Story doc does not exist at expected path
- **Version:** v0.2.8.7+1
- **Expected:** Script fails immediately, error type = REQUIRED_DOC_MISSING, RW BLOCKED
- **Validation:** Exit code 1, clear error message, no override available

**Test 3.2: Permission Error**
- **Setup:** Story doc exists but not readable (permission denied)
- **Version:** v0.2.8.7+1
- **Expected:** Script fails, error type = PERMISSION_ERROR, RW BLOCKED
- **Validation:** Exit code 1, clear error message, recovery guidance includes permission fix steps

**Test 3.3: Malformed Story Doc**
- **Setup:** Story doc has corrupted markdown structure (unclosed headers, broken formatting)
- **Version:** v0.2.8.7+1
- **Expected:** Script may fail during parsing or validation, RW BLOCKED
- **Validation:** Exit code 1, error identifies malformed structure, recovery guidance provided

**Test 3.4: Version Format Invalid**
- **Setup:** Story doc header has invalid version format (not vRC.EPIC.STORY.TASK+BUILD)
- **Version:** v0.2.8.7+1
- **Expected:** Validation fails, error type = VERSION_FORMAT_INVALID, RW BLOCKED
- **Validation:** Exit code 1, error identifies format issue, recovery guidance provided

**Test 3.5: Version Component Mismatch**
- **Setup:** Version string components don't match parsed components (script bug scenario)
- **Version:** v0.2.8.7+1
- **Expected:** Validation fails, error type = VERSION_COMPONENT_MISMATCH, RW BLOCKED
- **Validation:** Exit code 1, error identifies mismatch, recovery guidance provided

### Category 4: Edge Cases

**Test 4.1: Dry-Run Mode**
- **Setup:** Run script with `--dry-run` flag
- **Version:** v0.2.8.7+1
- **Expected:** Script shows what would be updated without modifying files
- **Validation:** No files modified, output shows planned changes, exit code 0

**Test 4.2: Override Mechanism (Recoverable Errors Only)**
- **Setup:** Recoverable error present, run with `--allow-override` flag
- **Version:** v0.2.8.7+1
- **Expected:** Script proceeds despite recoverable error, warnings logged
- **Validation:** Exit code 0, warnings present, override logged

**Test 4.3: Override Attempt on Critical Error**
- **Setup:** Critical error (e.g., REQUIRED_DOC_MISSING), run with `--allow-override` flag
- **Version:** v0.2.8.7+1
- **Expected:** Script still fails, override not available for critical errors
- **Validation:** Exit code 1, error message indicates override not available

**Test 4.4: Multiple Errors**
- **Setup:** Story doc has multiple validation errors (version mismatch + missing field)
- **Version:** v0.2.8.7+1
- **Expected:** All errors reported, recovery guidance for each unique error type
- **Validation:** Multiple errors in output, recovery guidance for each type

**Test 4.5: Epic Doc Optional (Missing)**
- **Setup:** Epic doc doesn't exist (optional in some projects)
- **Version:** v0.2.8.7+1
- **Expected:** Script succeeds, warning about missing Epic doc, Story doc updated
- **Validation:** Exit code 0, warning present, Story doc updated correctly

### Category 5: Performance Testing

**Test 5.1: Typical Project Performance**
- **Setup:** Standard project with 1 Epic, 1 Story, 1 Task
- **Version:** v0.2.8.7+1
- **Expected:** Script completes in < 5 seconds
- **Validation:** Execution time < 5 seconds

**Test 5.2: Large Project Performance**
- **Setup:** Large project with multiple Epics, Stories, Tasks
- **Version:** v0.2.8.7+1
- **Expected:** Script completes in reasonable time (< 10 seconds)
- **Validation:** Execution time acceptable, no performance degradation

### Category 6: FR-015 Acceptance Criteria Validation

**Test 6.1: Step 7 Mandatory**
- **Setup:** Run RW, Step 7 cannot be skipped
- **Expected:** Step 7 always runs, cannot be bypassed
- **Validation:** Workflow YAML has `required: true`, `mandatory: true`

**Test 6.2: Step 7 Blocking**
- **Setup:** Step 7 fails, workflow stops
- **Expected:** Workflow BLOCKED at Step 7, no subsequent steps execute
- **Validation:** Workflow YAML has `blocking: true`, workflow stops on failure

**Test 6.3: Framework-Agnostic Script**
- **Setup:** Script works across different projects
- **Expected:** Script uses config + defaults, works in all projects
- **Validation:** Script tested in multiple project structures

**Test 6.4: Comprehensive Validation**
- **Setup:** All validation checks (Steps 12-14) implemented
- **Expected:** Validation covers internal consistency, policy compliance, version drift
- **Validation:** All 10 error types detected, validation comprehensive

**Test 6.5: Error Handling and Recovery**
- **Setup:** All error scenarios have recovery guidance
- **Expected:** 12 recovery playbooks available, guidance actionable
- **Validation:** All error types have recovery playbooks, guidance is clear

## Test Execution Plan

1. **Setup Test Environment:**
   - Create test project structure
   - Set up test Kanban docs
   - Create test version file
   - Create test config files

2. **Execute Test Matrix:**
   - Run all Category 1 tests (canonical flows)
   - Run all Category 2 tests (recoverable flows)
   - Run all Category 3 tests (hard-fail flows)
   - Run all Category 4 tests (edge cases)
   - Run all Category 5 tests (performance)
   - Run all Category 6 tests (FR-015 validation)

3. **Validate Results:**
   - All canonical flows succeed
   - All recoverable flows provide guidance
   - All hard-fail flows block workflow
   - Performance requirements met
   - FR-015 acceptance criteria validated

4. **Document Results:**
   - Test execution report
   - Performance metrics
   - FR-015 validation report
   - Reliability assessment

## Success Criteria

- ✅ All Category 1 tests pass (canonical flows succeed)
- ✅ All Category 2 tests provide recovery guidance (recoverable flows)
- ✅ All Category 3 tests block workflow (hard-fail flows)
- ✅ All Category 4 tests handle edge cases correctly
- ✅ Performance tests meet requirements (< 5 seconds)
- ✅ All FR-015 acceptance criteria validated
- ✅ Reliability validated (deterministic steps achieve close to 100% confidence)
