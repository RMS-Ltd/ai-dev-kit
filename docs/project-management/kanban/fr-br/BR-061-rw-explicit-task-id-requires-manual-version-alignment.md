---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-02T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Bug Report BR-061 — RW explicit `E:S:T` still fails Step 1 when `version.py` epic ≠ branch epic

**Status:** COMPLETE  
**Priority:** CRITICAL  
**Severity:** CRITICAL — **resolved:** explicit requested `E:S:T` now supports pre-Step-2 reconciliation without manual `version.py` alignment, while cross-epic and intent guardrails remain blocking.  
**Created:** 2026-04-02  
**Last updated:** 2026-04-10 — **RW E2:S01:T12** **v0.2.1.12+3** (SemVer **v0.4.723+3**): release-anchor refresh and traceability synchronization after explicit-task `--art` run.  
**Version:** v0.2.1.12+3  
**Code:** BR-061  
**Implementing Task:** [E2:S01:T12](../epics/Epic-2/Story-001-rw-agent-execution-and-docs/T12-rw-explicit-task-id-version-alignment-br061.md)

---

## Problem Statement

A user running Release Workflow with an **explicit task identifier** (e.g. `RW E2:S01:T09`) reasonably expects that to be **sufficient intent** to proceed: the workflow should release work for that Epic/Story/Task on the current epic branch.

Instead, **Step 1 (`validate_branch_context.py --strict`)** can fail when `src/fynd_deals/version.py` still reflects a **different epic** (e.g. `0.7.x.x+…` while on `epic/2-…`). The user must **manually edit `version.py`** (or switch branches and reconcile state) before RW can run—extra steps that **duplicate** what Step 2 (version bump) is supposed to do.

This turns a **standardized, agent-driven RW** into **manual prerequisite work**, increasing friction versus doing steps by hand.

---

## Current Fault

- Branch safety validation compares **branch epic** to **`VERSION_EPIC`** in `version.py` **before** RW has applied the user’s explicit `E:S:T` intent to the version file.
- There is **no first-class path** where explicit `RW E2:S01:T09` **authoritatively reconciles** `version.py` to Epic 2 (or prompts for a **single** confirmable auto-fix) **before** Step 1 fails.
- **SemVer monotonicity** is already handled separately (registry / `task_touch`); internal coordinate changes when switching epics are **expected** and should not force users to become “version mechanics” before Step 1.

---

## Expected Behavior

When the user supplies **explicit `E:S:T`** in the RW trigger:

1. **Either** RW **aligns** `version.py` to match **requested** `E:S:T` (and branch epic) as part of the workflow **before** Step 1 validation, with clear logging, **or**
2. Step 1 **does not hard-fail** on epic mismatch in this mode; instead RW performs a **single** safe reconciliation step (with confirmation only when ambiguous).

Non-negotiable: **wrong-branch / cross-epic contamination** protections must remain; the fix should reduce **false friction**, not safety.

---

## Impact

- **Blocked RW runs** despite valid user intent and correct branch choice after switching epic work.
- **Trust erosion** in standardized workflows: if `RW E:S:T` is not “one instruction,” adoption drops.
- **Repeated support burden** (“why did Step 1 fail?”) for a normal epic switch (`0.7…` → `0.2…`).

---

## Reproduction

1. Be on an epic branch (e.g. `epic/2-harden-rw-reliability`).
2. Leave `version.py` at a **different** epic (e.g. `0.7.6.17+1`).
3. Run: `RW E2:S01:T09` (explicit task).
4. Observe **Step 1** failure: version epic does not match branch epic.

---

## Proposed Resolution (direction)

- Extend RW agent execution / ordering so **explicit task id** is treated as **authoritative input** for version coordinate selection **before** strict branch/version consistency checks, **or** introduce a **single** “apply alignment” gate.
- Document the behavior in `release-workflow-agent-execution.md` and `.cursorrules` RW trigger section.
- Add regression coverage for “epic switch + explicit E:S:T” so this does not regress.

---

## Related

- `packages/frameworks/workflow mgt/scripts/validation/validate_branch_context.py`
- RW Step 2 (version bump) ordering vs Step 1
- `docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md` (internal vs SemVer)
- **BR-038** (RW micromanagement / friction umbrella)
- **BR-056** (task intent guardrails — must compose safely with any fix)
