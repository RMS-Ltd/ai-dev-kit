---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-09T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# FR-078: Comprehensive install event-contract logging quality

**Type:** Feature Request (FR)  
**ID:** FR-078  
**Submitted:** 2026-04-09  
**Submitted By:** User  
**Priority:** CRITICAL  
**Severity:** HIGH  
**Status:** COMPLETE

**Implementing Task:** [E6:S07:T111](../epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T111-comprehensive-install-event-contract-logging-and-feedback-quality.md)

---

## Summary

Expand install logging from high-level operational traces to a strict event contract that captures each step's intent, action, and result with deterministic correlation IDs, so install behavior is fully reconstructable and reliable for AI Dev Kit quality hardening.

---

## Problem Statement

Current install logging captures useful run-level and phase-level diagnostics, but it does not guarantee full forensic reconstruction of every decision and sub-step action across install execution. This creates quality risk for product hardening because maintainers cannot always derive precise root cause from existing logs.

For shippable quality, the install telemetry model must answer:

1. **Intent:** Why was a step executed (decision context and objective)?
2. **Action:** What exactly was done (inputs, command/operation, target, boundaries)?
3. **Result:** What happened (status, outputs, evidence, warnings/errors, next state)?

---

## Requirements

### Functional Requirements

- [x] **FR-078-F1:** Define and enforce a canonical install event schema (`intent`, `action`, `result`) for all install pipeline events.
- [x] **FR-078-F2:** Require deterministic per-step correlation metadata (`install_run_id`, `step_id`, parent/child relation, timestamp, actor/component).
- [x] **FR-078-F3:** Capture all major and sub-steps in CLI and framework-specific installers under one linked run graph (or explicitly linked child logs with guaranteed join keys).
- [x] **FR-078-F4:** Record explicit decision points and branches (selected mode/backend/path, fallback/retry behavior, skip reasons, guard checks).
- [x] **FR-078-F5:** Persist per-step result payloads including status, duration, exit code, validation outcomes, and normalized error categories.
- [x] **FR-078-F6:** Produce a deterministic local install run artifact optimized for forensic analysis, with enough detail for maintainers to reproduce and triage.

### Non-Functional Requirements

- [x] **FR-078-NF1:** Maintain strong redaction and secret-safety guarantees for logs and local artifacts.
- [x] **FR-078-NF2:** Keep logging overhead acceptable for normal installs with bounded storage and rotation behavior.
- [x] **FR-078-NF3:** Preserve backward compatibility for existing text logs while adding a strict machine-readable event stream (JSONL/event objects).
- [x] **FR-078-NF4:** Ensure partial-failure resilience: incomplete installs still emit complete event history up to the failure boundary.

---

## Acceptance Criteria

- [x] Running `ai-dev-kit install` emits event entries where every step can be reconstructed as `intent -> action -> result`.
- [x] A validator (or tests) fails when required event fields are missing for any emitted step.
- [x] Install traces across CLI + framework installers can be joined deterministically into one run timeline.
- [x] Generated local run artifacts include enough normalized detail for maintainers' triage and reproduction workflows.
- [x] Redaction tests confirm no secrets are emitted in event payloads.

---

## Scope Analysis

**Problem Domain:** Installation telemetry, quality feedback, forensic traceability  
**Affected Areas:**

- [ ] CLI / backend install pipeline
- [ ] Framework-specific installers
- [ ] Logging artifact docs and user guidance
- [ ] Validation/test harnesses

**Estimated Complexity:**

- [ ] Simple (1-3 days)
- [ ] Medium (1 week)
- [x] Complex (2+ weeks)
- [ ] Very Complex (1+ month)

---

## Release / verification traceability

- **v0.6.7.111+1** (SemVer **v0.4.721+1**, E6:S07:T111, RW with `--art`): Change implemented for strict install JSON event contract, CLI instrumentation, `ai-dev-kit logs validate-install-log`, user docs, and tests.
- **2026-04-10 verification:** `tests/cli/test_install_logging.py` + `tests/cli/test_logs_command.py` passed (11/11), including strict contract validation and redaction-focused checks.
- **v0.6.7.111+2** (SemVer **v0.4.722+2**, E6:S07:T111, RW with `--art`): Verification closure release documenting FR/T111 completion and board synchronization.

---

## Related

- [FR-047](./FR-047-install-logging-for-framework-dependencies.md) - Baseline install logging capability
- [FR-059](./FR-059-enhanced-workflow-logging-system.md) - Workflow-level forensic logging patterns
- [FR-079](./FR-079-install-feedback-submission-path-and-governance.md) - Submission-path responsibility split from FR-078
