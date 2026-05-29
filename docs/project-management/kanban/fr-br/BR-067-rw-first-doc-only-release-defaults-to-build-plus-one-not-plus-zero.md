---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-19T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Bug Report BR-067: RW first doc-only release defaults to BUILD+1 instead of BUILD+0 (doc-init policy)

**Status:** OPEN  
**Priority:** HIGH  
**Severity:** HIGH — breaks canonical **doc-init (+0)** semantics for task/story/intake drops; produces incorrect forensic/version signal for documentation-first work.  
**Created:** 2026-04-19  
**Last updated:** 2026-04-19  
**Version:** v0.6.7.103+0 (mitigation shipped 2026-04-19)  
**Code:** BR-067  

**Implementing Task:** [E2:S16:T03](../epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md)

---

## Problem Statement

Canonical dev-kit versioning policy treats **BUILD `+0`** as valid for **first-time Epic/Story/Task documentation** (“doc-init”, abstract-space / documentation-only introduction). In practice, **Release Workflow** and **`validate_version_bump.py`** steer agents and automation toward **`+1`** for “normal” new-task releases—even when the release payload is **documentation and Kanban intake only** (no functional code change).

**Observed example (2026-04-19):** Three consecutive **`RW -d … --art`** releases for **E6:S09:T01**, **T02**, **T03** were versioned **`0.6.9.{1,2,3}+1`** (BUILD **1** each) instead of using **`+0`** for doc-init-eligible commits where policy would treat the drop as documentation-first establishment of the task anchor.

This is an **architectural / policy enforcement gap**, not merely a one-off typo: contributors cannot rely on **`+0`** without fighting defaults.

---

## Expected Behavior

- When a release is **documentation-only** for a given **E:S:T** and qualifies under **doc-init / first artifact** rules (see policy references), **`VERSION_BUILD` should be `0`** on that release boundary unless a deliberate policy exception is documented.
- **`validate_version_bump.py`** and RW Step 2 guidance should **agree** with [`dev-kit-versioning-policy.md`](../../../architecture/standards-and-adrs/dev-kit-versioning-policy.md) and task template semantics for **`+0`**.
- Agents executing RW should receive a **clear, deterministic signal** (validator or RW branch) when **`+0`** applies vs **`+1`**, without manual version file surgery.

---

## Observed Behavior

- RW / agent path applied **`BUILD = 1`** for doc-heavy “intake” releases on new **Story 009** tasks.
- **`validate_version_bump.py`** “normal new task → BUILD = 1” logic dominates unless doc-init detection fires; mixed **`docs/`** trees may not match **`detect_first_time_est_doc`** heuristics.
- Resulting versions overstate “functional build” semantics for pure documentation intake.

---

## Scope / Affected Areas

- [`packages/frameworks/workflow mgt/scripts/validation/validate_version_bump.py`](https://github.com/earlution/ai-dev-kit/blob/main/packages/frameworks/workflow%20mgt/scripts/validation/validate_version_bump.py) — doc-init detection; “same task BUILD increment” messaging vs **`+0`** eligibility.
- RW Step 2 agent execution docs: [`release-workflow-agent-execution.md`](https://github.com/earlution/ai-dev-kit/blob/main/packages/frameworks/workflow%20mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md).
- [`src/fynd_deals/version.py`](../../../../src/fynd_deals/version.py) comments (**BUILD = 0** doc-init convention).
- **Contrast (avoid conflicting “fix”):** [BR-010](./BR-010-rw-doc-init-detection-bug-story-task-docs-batch-creation.md) addressed the **opposite** failure mode (incorrect **`+0`** when **`+1`** was required). BR-067 must be resolved **without regressing BR-010**.

---

## Acceptance Criteria

- [ ] Policy-aligned rule set: **when `+0` is mandatory, optional, or forbidden** for RW doc-only drops (linked to versioning policy).
- [x] **`validate_version_bump.py`** — **`--doc-policy-zero`** (with **`--requested`**, **`--art`**, docs-only) + unit tests; full “when +0” policy table still **TODO** (see first criterion).
- [ ] RW agent docs describe **how to run a doc-init release** vs **functional +1** release (including **`RW -d`**).
- [ ] No regression against BR-010 scenarios (batch story/task creation).

---

## Related

- [BR-010](./BR-010-rw-doc-init-detection-bug-story-task-docs-batch-creation.md) — inverse bug (`+0` when **`+1`** needed).
- [FR-020](./FR-020-version-validator-abstract-space-awareness.md) — validator abstract-space / **`+0`** awareness.
- [ADR-003](../../../architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption.md) — delivered under **E6:S09** (example where **`+0`** semantics were expected by policy).
- [`dev-kit-versioning-policy.md`](../../../architecture/standards-and-adrs/dev-kit-versioning-policy.md) — canonical **BUILD** semantics.

---

## Intake Decision

**Intake Status:** ACCEPTED (filed from maintainer review)  
**Intake Date:** 2026-04-19  
