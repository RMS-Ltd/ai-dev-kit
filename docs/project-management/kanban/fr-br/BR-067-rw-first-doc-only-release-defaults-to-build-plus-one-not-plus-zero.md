---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-19T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Bug Report BR-067: RW first doc-only release defaults to BUILD+1 instead of BUILD+0 (doc-init policy)

**Status:** RESOLVED (Tranche 3 verification 2026-06-03 — R1–R5 regression PASS; policy + `--doc-policy-zero` shipped Tranche 2)
**Priority:** HIGH  
**Severity:** HIGH — breaks canonical **doc-init (+0)** semantics for task/story/intake drops; produces incorrect forensic/version signal for documentation-first work.  
**Created:** 2026-04-19  
**Last updated:** 2026-06-03 (IPP E02:S16:T03 Tranche 3 — BR-010 R1–R5 regression re-run; pytest 15/15 PASS)  
**Version:** v0.2.16.3+0 (policy/docs Tranche 2); closure evidence under Tranche 3 RW
**Code:** BR-067  

**Implementing Task:** [E02:S16:T03](../epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md)

---

## Problem Statement

Canonical dev-kit versioning policy treats **BUILD `+0`** as valid for **first-time Epic/Story/Task documentation** (“doc-init”, abstract-space / documentation-only introduction). In practice, **Release Workflow** and **`validate_version_bump.py`** steer agents and automation toward **`+1`** for “normal” new-task releases—even when the release payload is **documentation and Kanban intake only** (no functional code change).

**Observed example (2026-04-19):** Three consecutive **`RW -d … --art`** releases for **E06:S09:T01**, **T02**, **T03** were versioned **`0.6.9.{1,2,3}+1`** (BUILD **1** each) instead of using **`+0`** for doc-init-eligible commits where policy would treat the drop as documentation-first establishment of the task anchor.

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

- [`packages/frameworks/workflow mgt/scripts/validation/validate_version_bump.py`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow%20mgt/scripts/validation/validate_version_bump.py) — doc-init detection; “same task BUILD increment” messaging vs **`+0`** eligibility.
- RW Step 2 agent execution docs: [`release-workflow-agent-execution.md`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow%20mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md).
- [`src/fynd_deals/version.py`](../../../../src/fynd_deals/version.py) comments (**BUILD = 0** doc-init convention).
- **Contrast (avoid conflicting “fix”):** [BR-010](./BR-010-rw-doc-init-detection-bug-story-task-docs-batch-creation.md) addressed the **opposite** failure mode (incorrect **`+0`** when **`+1`** was required). BR-067 must be resolved **without regressing BR-010**.

---

## BUILD +0 / +1 policy table (BR-067 AC1)

| Scenario | Task doc exists? | Change set | Default BUILD | Explicit override | Validator flags |
| -------- | ---------------- | ---------- | ------------- | ----------------- | --------------- |
| **First-time E/S/T doc** (abstract space / intake) | No (created in this commit) | Docs-only | **+0** | — | Auto doc-init detection |
| **First functional work** on new task | Yes (from prior +0) | Any functional change | **+1** | — | Normal new-task path |
| **Same-task docs-only** on existing E/S/T | Yes | Docs-only only | **+1** (default RW Step 2) | **`--doc-policy-zero`** with **`--requested` + `--art`** → **+0** | `validate_version_bump.py --strict --requested E:S:T --art --doc-policy-zero` |
| **Same-task functional** release | Yes | Code or mixed | **BUILD + 1** | — | Perpetual: must exceed HEAD BUILD ([BR-075](./BR-075-rw-perpetual-task-build-not-reflected-in-version-py.md)) |
| **Batch story + task creation** (BR-010 class) | Task doc created same commit as story | Mixed docs | **+1** (not +0) | — | Doc-init blocked when task doc already exists in tree |

**RW invocation patterns:**

- **Doc-init (+0, new task):** `RW -d E02:S16:Txx --art` when task doc is first created and change set is docs-only.
- **Doc-only on existing anchor (+0):** `RW -d E02:S16:Txx --art --doc-policy-zero` — Step 2 sets BUILD=0; Step 10 passes `--doc-policy-zero` to `validate_version_bump.py`.
- **Functional (+1+):** `RW E02:S16:Txx` (or `--art` when adopting anchor) — normal BUILD increment.

See [workflow-initiation-cheatsheet.md](../../../guides/workflow-initiation-cheatsheet.md) §2 and [release-workflow-agent-execution.md](../../../packages/frameworks/workflow%20mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md) Step 2 / Step 10.

---

## Acceptance Criteria

- [x] Policy-aligned rule set: **when `+0` is mandatory, optional, or forbidden** for RW doc-only drops (table above; linked to versioning policy).
- [x] **`validate_version_bump.py`** — **`--doc-policy-zero`** (with **`--requested`**, **`--art`**, docs-only) + unit tests.
- [x] RW agent docs describe **how to run a doc-init release** vs **functional +1** release (including **`RW -d`** and **`--doc-policy-zero`**).
- [x] No regression against BR-010 scenarios (batch story/task creation) — see regression checklist below.

---

## BR-010 regression checklist (BR-067 AC4)

Re-verify after any change to doc-init detection or `--doc-policy-zero`:

| # | Scenario | Expected BUILD | Must not |
| - | -------- | -------------- | -------- |
| R1 | Story file + separate task file created in same commit; first functional RW | **+1** | Emit +0 |
| R2 | Task doc exists from prior release; docs-only follow-up without `--doc-policy-zero` | **+1** (increment) | Silently accept +0 |
| R3 | Task doc exists; docs-only with `RW -d … --art --doc-policy-zero` | **+0** | Require +1 |
| R4 | New task doc only (no prior version); docs-only intake | **+0** | Require +1 |
| R5 | Perpetual same-task release (E2:S16:T03/T04) | **BUILD > HEAD** | Unchanged BUILD ([BR-075](./BR-075-rw-perpetual-task-build-not-reflected-in-version-py.md)) |

**Test command:** `pytest "packages/frameworks/workflow mgt/scripts/validation/test_validate_version_bump.py" -x`

### Tranche 3 regression run (2026-06-03)

| # | Result | Evidence |
| - | ------ | -------- |
| R1 | PASS | `test_validate_version_bump` suite — batch story/task doc-init blocked (+1 path) |
| R2 | PASS | Same-task docs-only without `--doc-policy-zero` requires increment |
| R3 | PASS | `test_validate_version_bump_doc_policy_zero_allows_existing_t103_build_zero` |
| R4 | PASS | First-time doc-init detection tests in suite |
| R5 | PASS | `validate_perpetual_build_increment` / perpetual BUILD > HEAD paths in suite |

**Command:** `pytest "packages/frameworks/workflow mgt/scripts/validation/test_validate_version_bump.py" -x` → **15 passed**, 0 failed (2026-06-03).

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
