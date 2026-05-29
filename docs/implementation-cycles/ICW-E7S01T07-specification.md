# ICW-E7S01T07-Specification: Markdown Maintenance Workflow (MMW)

**Implementation Cycle Workflow Specification**  
**Task:** E7:S01:T07 – Markdown Maintenance Workflow (MMW)  
**Related FR:** FR-058 Markdown Maintenance Workflow  
**Version:** v0.7.1.7+1 (ICW Specification Phase)  
**Created:** 2026-03-16  

---

## Executive Summary

This ICW specification defines the Markdown Maintenance Workflow (MMW) that distinguishes markdown validator regressions from legacy debt, enabling Release Workflow (RW) runs to proceed while providing a repeatable maintenance loop for perpetual markdown cleanup (E7:S01:T05).

---

## Problem Statement

- **Current Issue:** RW Step 10 (validators) blocks releases when markdown linting fails, but cannot distinguish between:
  - Regressions introduced by current changes (should block)
  - Legacy debt from historical issues (should allow release with maintenance commitment)
- **Impact:** Release Workflow cannot proceed despite valid changes, slowing development velocity.
- **Gap:** No workflow exists to track maintenance cycles or provide evidence for proceeding with baseline debt.

---

## Solution Overview

MMW introduces a 3-phase maintenance loop:

1. **Detection Phase:** Enhanced validator produces scoped (touched files) vs baseline (full tree) reports.
2. **Maintenance Phase:** Operator executes cleanup cycle with evidence capture (checklist, diffs, signatures).
3. **Integration Phase:** CI hook ensures baseline debt releases have corresponding MMW logs.

---

## Workflow Architecture

### Core Components

#### 1. Enhanced Documentation Validator
**Location:** `scripts/documentation/validate-documentation-consistency.py`  
**New Features:**
- `--scoped` mode: Validate only files changed in current branch/commit
- `--baseline` mode: Validate full repository (existing behavior)
- Machine-readable JSON output for CI consumption
- Categorization: regressions vs legacy debt

**CLI Interface:**
```bash
# Scoped validation (for RW Step 10)
python scripts/documentation/validate-documentation-consistency.py --scoped

# Baseline validation (for MMW maintenance)
python scripts/documentation/validate-documentation-consistency.py --baseline

# CI integration
python scripts/documentation/validate-documentation-consistency.py --json --scoped
```

#### 2. MMW Checklist Template
**Location:** `docs/maintenance/logs/mmw/template.md`  
**Structure:**
- Header: Date, operator, scope (scoped/baseline)
- Before metrics: Issue counts, file list
- Maintenance actions: Files touched, changes made
- After metrics: Post-cleanup counts, delta
- Signatures: Operator + reviewer approval
- Evidence: Diffs, validator output references

#### 3. Release Workflow Integration
**RW Step 8 Enhancement:** Decision tree for validator failures:

```
Validator fails?
├── Scoped violations? → BLOCK (regressions must be fixed)
└── Baseline violations only?
    ├── Active MMW log exists? → PROCEED (maintenance committed)
    └── No MMW log? → BLOCK (create MMW log first)
```

#### 4. CI Hook (MMW Verification)
**Trigger:** Post-commit on release branches  
**Check:** For releases proceeding despite baseline debt, verify:
- Corresponding MMW log exists in `docs/maintenance/logs/mmw/`
- Log is properly signed and dated within maintenance window
- Evidence references match validator output

---

## Data Flow & Interfaces

### Input Contracts

#### From Release Workflow (RW)
- **Step 10 Input:** File change list for scoped validation
- **Step 8 Input:** Validator results (scoped + baseline) for decision making
- **Expected Output:** Proceed/block decision with MMW log reference if applicable

#### From CI System
- **Trigger:** Release branch commits
- **Input:** Release metadata, validator outputs
- **Expected Output:** Pass/fail with MMW log validation evidence

### Output Contracts

#### To Release Workflow
- **Validator Reports:** JSON format with violation categorization
- **MMW Decision:** Proceed/block with maintenance commitment reference
- **Evidence Links:** Pointers to MMW logs for audit trail

#### To CI System
- **Verification Status:** Boolean pass/fail
- **Evidence:** MMW log existence and validity confirmation
- **Audit Trail:** Links to maintenance cycle documentation

---

## Integration Points

### Release Workflow (RW) Modifications

**Step 8 (Validator Decision Tree):**
1. Run scoped validation on touched files
2. If scoped violations exist → Block release (fix regressions first)
3. Run baseline validation on full repository
4. If baseline violations exist:
   - Check for active MMW log (within 30 days)
   - If log exists → Proceed with maintenance commitment
   - If no log → Block and require MMW execution

**Step 10 (Validator Execution):**
- Enhanced to support scoped mode
- Output both human-readable and machine-readable formats
- Categorize violations by type (regression vs legacy)

### Perpetual Task Integration (E7:S01:T05)

**MMW Cycle Recording:**
- Each MMW execution updates T05 metrics
- Links to maintenance logs for progress tracking
- Quarterly maintenance cycle targets

### Kanban Workflow (UKW) Updates

**Task Status Synchronization:**
- MMW completion triggers UKW updates
- Maintenance cycle progress reflected in kanban board
- Cross-references between MMW logs and task documents

---

## Success Metrics

### Quantitative Metrics
- **Release Velocity:** Percentage of releases proceeding with baseline debt (target: &lt;20%)
- **Maintenance Cycle Frequency:** MMW executions per quarter (target: 4-6)
- **Issue Reduction:** Net markdown violations reduced per maintenance cycle (target: >10%)

### Qualitative Metrics
- **Evidence Quality:** MMW logs contain complete checklists, diffs, and signatures
- **Integration Reliability:** No false positives/negatives in RW Step 8 decisions
- **Operator Experience:** Clear workflow with unambiguous decision points

---

## Risk Assessment & Mitigations

### Technical Risks
- **Validator Performance:** Scoped mode may miss cross-file issues
  - *Mitigation:* Baseline validation still required for maintenance cycles
- **CI Hook Reliability:** False positives blocking valid releases
  - *Mitigation:* Comprehensive testing, manual override procedures
- **Log Accumulation:** MMW logs growing unbounded
  - *Mitigation:* Implement log archival policies alongside MMW

### Operational Risks
- **Maintenance Overhead:** Additional workflow complexity
  - *Mitigation:* Clear decision trees, automated tooling
- **Signature Requirements:** Reviewer availability bottlenecks
  - *Mitigation:* Peer review rotation, emergency override procedures
- **Scope Creep:** MMW expanding beyond markdown maintenance
  - *Mitigation:* Strict scope limitation to markdown linting only

---

## Implementation Phases

### Phase 1: Specification & Design ✅
- ICW artifacts created (this document, test design, implementation plan)
- Interfaces and contracts defined
- Risk assessment completed

### Phase 2: Implementation & Testing
- Build enhanced validator with scoped/baseline modes
- Create MMW checklist templates and log structure
- Integrate with RW Step 8 decision tree
- Implement CI hook and verification logic
- Comprehensive testing suite

### Phase 3: Validation & Release
- Execute first MMW maintenance cycle
- Validate RW integration and CI hooks
- Update documentation and training materials
- Release with full audit trail

---

## Dependencies & Prerequisites

- **FR-058:** Markdown Maintenance Workflow (provides requirements)
- **E7:S01:T05:** Markdown Maintenance (Perpetual Task) - provides maintenance context
- **RW Framework:** Release Workflow integration points
- **CI/CD Pipeline:** Hook implementation capability

---

## Acceptance Criteria

1. **Specification Completeness:** All interfaces, data flows, and decision trees defined
2. **Risk Mitigation:** All identified risks have mitigation strategies
3. **Integration Clarity:** Clear contracts with RW, CI, and perpetual tasks
4. **Testability:** Metrics and success criteria defined for validation
5. **Implementation Readiness:** Phase 2 build plan provides clear next steps

---

## Next Steps

1. Review and approve this ICW specification
2. Proceed to ICW test design phase
3. Begin Phase 2 implementation following build plan
4. Execute first MMW maintenance cycle for validation
