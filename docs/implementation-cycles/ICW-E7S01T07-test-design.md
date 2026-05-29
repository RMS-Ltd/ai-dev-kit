# ICW-E7S01T07-Test-Design: Markdown Maintenance Workflow (MMW)

**Implementation Cycle Workflow Test Design**  
**Task:** E7:S01:T07 – Markdown Maintenance Workflow (MMW)  
**Related FR:** FR-058 Markdown Maintenance Workflow  
**Version:** v0.7.1.7+2 (ICW Test Design Phase)  
**Created:** 2026-03-16  

---

## Executive Summary

Comprehensive test design for the Markdown Maintenance Workflow (MMW) covering validator enhancements, RW integration, maintenance cycles, and CI hook functionality. Tests ensure MMW reliably distinguishes regressions from legacy debt while maintaining release velocity.

---

## Test Strategy Overview

### Testing Objectives
- **Validator Reliability:** Scoped/baseline modes produce accurate, categorized violation reports
- **RW Integration:** Step 8 decision tree correctly blocks/proceeds based on violation types and MMW logs
- **Maintenance Cycles:** Complete MMW execution captures evidence and updates metrics
- **CI Safety:** Hook prevents releases without proper maintenance commitments
- **Regression Prevention:** Future changes don't break MMW functionality

### Test Categories
1. **Unit Tests:** Individual component validation
2. **Integration Tests:** Component interaction verification
3. **End-to-End Tests:** Complete workflow execution
4. **Performance Tests:** Scalability and efficiency checks
5. **Security Tests:** Safe operation and data integrity

---

## Unit Test Specifications

### Validator Enhancement Tests

#### Test Case: VT-001 Scoped Validation Mode
**Objective:** Verify scoped mode validates only touched files  
**Setup:** Create test repo with known violations in touched/untouched files  
**Steps:**
1. Stage changes to files with violations
2. Run `validate-documentation-consistency.py --scoped`
3. Verify only touched files reported
4. Verify violations categorized as "regression"
**Expected Result:** Untouched file violations not reported  
**Pass Criteria:** 100% accuracy in file scope detection

#### Test Case: VT-002 Baseline Validation Mode
**Objective:** Verify baseline mode validates full repository  
**Setup:** Same test repo with mixed violations  
**Steps:**
1. Run `validate-documentation-consistency.py --baseline`
2. Verify all files with violations reported
3. Verify violations categorized by type (regression vs legacy)
**Expected Result:** Complete repository scan  
**Pass Criteria:** No false negatives in full scan

#### Test Case: VT-003 JSON Output Format
**Objective:** Verify machine-readable output for CI consumption  
**Setup:** Violations in test files  
**Steps:**
1. Run validator with `--json` flag
2. Parse output as JSON
3. Verify schema compliance (violations array, categorization)
**Expected Result:** Valid JSON matching defined schema  
**Pass Criteria:** CI systems can reliably parse output

#### Test Case: VT-004 Violation Categorization
**Objective:** Correctly distinguish regression vs legacy violations  
**Setup:** Git history with pre-existing violations  
**Steps:**
1. Create new violations in touched files
2. Run scoped validation
3. Verify touched file violations marked "regression"
4. Run baseline validation
5. Verify all violations properly categorized
**Expected Result:** Accurate categorization for decision making  
**Pass Criteria:** 100% correct categorization

---

## Integration Test Specifications

### Release Workflow Integration Tests

#### Test Case: RW-IT-001 Step 8 Decision Tree - Scoped Violations
**Objective:** RW blocks on scoped (regression) violations  
**Setup:** RW simulation with touched file violations  
**Steps:**
1. Simulate RW Step 10 with scoped violations present
2. Execute Step 8 decision logic
3. Verify release blocked
4. Verify appropriate error message
**Expected Result:** Release does not proceed  
**Pass Criteria:** No false passes on regressions

#### Test Case: RW-IT-002 Step 8 Decision Tree - Baseline Only
**Objective:** RW proceeds with active MMW log  
**Setup:** Baseline violations only, valid MMW log exists  
**Steps:**
1. Simulate baseline violations without scoped issues
2. Place valid MMW log in expected location
3. Execute Step 8 decision logic
4. Verify release proceeds
5. Verify MMW log reference captured
**Expected Result:** Release proceeds with maintenance commitment  
**Pass Criteria:** Correct proceed decision with log linkage

#### Test Case: RW-IT-003 Step 8 Decision Tree - No MMW Log
**Objective:** RW blocks without MMW log for baseline violations  
**Setup:** Baseline violations only, no MMW log  
**Steps:**
1. Simulate baseline violations
2. Ensure no MMW log exists
3. Execute Step 8 decision logic
4. Verify release blocked
5. Verify MMW creation required message
**Expected Result:** Release blocked until MMW executed  
**Pass Criteria:** No false passes without maintenance commitment

---

## End-to-End Test Specifications

### Complete MMW Cycle Tests

#### Test Case: E2E-001 Full Maintenance Cycle Execution
**Objective:** Complete MMW workflow from detection to completion  
**Setup:** Test repository with baseline violations  
**Steps:**
1. Run baseline validation to establish before metrics
2. Execute MMW checklist creation
3. Perform maintenance actions (fix violations)
4. Update checklist with after metrics and signatures
5. Run validation to confirm fixes
6. Verify T05 metrics updated
**Expected Result:** Complete audit trail with measurable improvement  
**Pass Criteria:** All checklist sections completed, metrics accurate

#### Test Case: E2E-002 MMW Log Validation
**Objective:** Verify MMW logs meet evidence requirements  
**Setup:** Completed MMW cycle  
**Steps:**
1. Parse MMW log file
2. Verify required sections present (header, metrics, actions, signatures)
3. Validate evidence references (diffs, validator outputs)
4. Check signature completeness
**Expected Result:** Log meets all evidence standards  
**Pass Criteria:** No missing required elements

#### Test Case: E2E-003 CI Hook Verification
**Objective:** CI hook correctly validates MMW log presence  
**Setup:** Release simulation with baseline debt  
**Steps:**
1. Simulate release commit with baseline violations
2. Trigger CI hook
3. Verify MMW log existence check
4. Verify log validity assessment
5. Confirm pass/fail decision
**Expected Result:** Accurate validation of maintenance commitments  
**Pass Criteria:** No false positives/negatives in CI decisions

---

## Performance & Scalability Tests

#### Test Case: PERF-001 Large Repository Validation
**Objective:** Validator performance with 1000+ files  
**Setup:** Generated test repository with violations distributed across files  
**Steps:**
1. Run baseline validation
2. Measure execution time
3. Verify accuracy of violation detection
**Expected Result:** Completes within 5 minutes  
**Pass Criteria:** &lt;5min execution, 100% accuracy

#### Test Case: PERF-002 Scoped Mode Efficiency
**Objective:** Scoped validation faster than baseline for limited changes  
**Setup:** Large repository with small change set  
**Steps:**
1. Time baseline validation
2. Time scoped validation on same change set
3. Compare execution times
**Expected Result:** Scoped mode significantly faster  
**Pass Criteria:** >50% time reduction for small change sets

---

## Edge Case & Error Handling Tests

#### Test Case: EDGE-001 Empty Change Set
**Objective:** Scoped validation handles no changes gracefully  
**Setup:** Clean working directory  
**Steps:**
1. Run scoped validation
2. Verify no violations reported
3. Verify appropriate success message
**Expected Result:** Clean execution without errors  
**Pass Criteria:** No false positives on clean state

#### Test Case: EDGE-002 Invalid MMW Log Format
**Objective:** CI hook rejects malformed MMW logs  
**Setup:** Corrupted MMW log file  
**Steps:**
1. Trigger CI hook with invalid log
2. Verify hook failure
3. Verify appropriate error message
**Expected Result:** Release blocked on invalid evidence  
**Pass Criteria:** Robust validation of log format

#### Test Case: EDGE-003 Concurrent MMW Executions
**Objective:** Handle multiple operators attempting MMW simultaneously  
**Setup:** Multiple CI environments  
**Steps:**
1. Simulate concurrent MMW executions
2. Verify log file locking/atomicity
3. Verify no data corruption
**Expected Result:** Safe concurrent operation  
**Pass Criteria:** No race conditions or conflicts

#### Test Case: EDGE-004 Validator Crash Recovery
**Objective:** System handles validator failures gracefully  
**Setup:** Force validator error condition  
**Steps:**
1. Trigger validator failure
2. Verify error handling
3. Verify appropriate fallback behavior
4. Verify RW can continue with manual intervention if needed
**Expected Result:** Graceful degradation without system crashes  
**Pass Criteria:** Clear error messages and recovery procedures

---

## Test Automation Strategy

### Test Framework
- **Unit Tests:** pytest framework with coverage reporting
- **Integration Tests:** Custom test harness simulating RW flow
- **E2E Tests:** Shell scripts automating complete workflow execution
- **CI Tests:** GitHub Actions workflows validating hook behavior

### Test Data Management
- **Test Repositories:** Script-generated repos with known violation patterns
- **MMW Logs:** Template-based generation for various scenarios
- **Git History:** Pre-built histories with staged violations

### Continuous Integration
- **Pre-commit:** Unit and integration tests
- **PR Validation:** Full E2E test suite
- **Release Validation:** Performance and edge case tests

---

## Success Criteria

### Coverage Metrics
- **Code Coverage:** >90% for validator enhancements
- **Test Case Execution:** 100% pass rate for all defined test cases
- **Scenario Coverage:** All major workflows and edge cases tested

### Quality Metrics
- **Defect Detection:** Tests identify >95% of potential issues
- **Execution Time:** Full test suite completes within 15 minutes
- **Maintenance:** Tests remain valid through MMW lifecycle

### Validation Gates
- **Phase 2 Entry:** All unit tests passing
- **Phase 3 Entry:** All integration and E2E tests passing
- **Release Gate:** Performance tests meeting targets

---

## Risk Mitigation

### Test-Related Risks
- **Incomplete Coverage:** Missing edge cases cause production issues
  - *Mitigation:* Peer review of test design, exploratory testing
- **Test Data Staleness:** Generated test data doesn't reflect real scenarios
  - *Mitigation:* Regular test data refresh from production repositories
- **Performance Regression:** Tests pass but production performance degrades
  - *Mitigation:* Performance baselines with automated alerting

### Implementation Risks
- **Test/Production Divergence:** Tests pass but real RW integration fails
  - *Mitigation:* Staging environment testing before production deployment
- **CI Hook Interference:** Hook blocks legitimate releases
  - *Mitigation:* Gradual rollout with manual override capabilities

---

## Test Execution Plan

### Phase Alignment
- **Phase 1 (Spec):** Test design completion and review
- **Phase 2 (Build):** Unit test implementation and execution
- **Phase 3 (Validate):** Integration and E2E test execution
- **Post-Release:** Regression test maintenance

### Resource Requirements
- **Test Environments:** Isolated repositories for each test category
- **CI Resources:** Sufficient capacity for parallel test execution
- **Review Cycles:** Dedicated time for test design and result analysis

---

## Next Steps

1. Review and approve this test design
2. Proceed to implementation plan phase
3. Begin Phase 2 development with test-driven approach
4. Establish test automation pipeline

---

## References

- **FR-058:** Markdown Maintenance Workflow requirements
- **ICW-E7S01T07-Specification:** Detailed workflow specification
- **E7:S01:T05:** Perpetual markdown maintenance task context
- **RW Framework:** Release workflow integration requirements
