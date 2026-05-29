---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-02T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Task E2:S01:T09 – RW allow IN PROGRESS task releases (BR-060)

**Task ID:** E2:S01:T09  
**Status:** COMPLETE (**v0.2.1.9+2** closeout pass; BR-060 implementation forensic **v0.6.6.60+1**; historical id **E6:S06:T60**)

**Migration:** Canonical home **E2:S01:T09** (Epic 2 — workflow / RW validators). Supersedes **[E4:S19:T01 stub](../../Epic-4/Story-019-fr-br-uxr-abstract-governance-and-intake/T01-rw-allow-in-progress-task-releases-br060.md)** and **[E6:S06:T60 stub](../../Epic-6/Story-006-feature-requests/T60-rw-allow-in-progress-task-releases.md)**.

**Priority:** CRITICAL  
**Estimated Effort:** Medium (validator + docs + tests)  
**Created:** 2026-04-02  

**Associated BR:** [BR-060](../../../fr-br/BR-060-rw-in-progress-task-gate-blocks-build-releases.md)

---

## Scope

Fix the Release Workflow gating defect where full RW mode rejects non-perpetual tasks in `IN PROGRESS` state. Support iterative `+BUILD` releases for active tasks while preserving typo/intent safety checks.

**Why E2:S01:** RW Step 1c, `validate_rw_task_complete.py`, and RW trigger docs live under the **Workflow Management** framework; this is **agent execution & validation** work, not Kanban intake governance.

---

## Input

- [BR-060](../../../fr-br/BR-060-rw-in-progress-task-gate-blocks-build-releases.md)
- `packages/frameworks/workflow mgt/scripts/validation/validate_rw_task_complete.py`
- `packages/frameworks/workflow mgt/scripts/validation/validate_rw_task_intent.py`
- `rw-config.yaml`

---

## Deliverable

1. `validate_rw_task_complete.py` full mode permits `IN PROGRESS` tasks as releasable.
2. Existing protections for wrong task intent remain enforced through Step 1d.
3. RW docs explicitly describe status behaviour with `+BUILD` iterative releases.
4. Regression tests cover expected allow/deny matrix.

---

## Acceptance Criteria

- [x] **AC1:** Full RW no longer fails Step 1c solely due to `IN PROGRESS` status for the requested task.
- [x] **AC2:** Full RW still fails on missing task docs and task-id mismatch conditions.
- [x] **AC3:** `TODO` task handling is explicitly defined and tested.
- [x] **AC4:** Documentation updates align validator behaviour with internal versioning policy semantics.

---

## Version Anchor

**Forensic marker (release at implement time):** **v0.6.6.60+1** (SemVer **v0.4.698+1**) — 2026-04-02 — **BR-060** (task id at release: **E6:S06:T60**; canonical kanban task **E2:S01:T09** after **2026-04-02** migration from **E4:S19:T01**).

---

## References

- **BR-060:** [BR-060-rw-in-progress-task-gate-blocks-build-releases.md](../../../fr-br/BR-060-rw-in-progress-task-gate-blocks-build-releases.md)
- **Related:** [BR-056](../../../fr-br/BR-056-rw-ambiguous-task-identifier-typo-risk.md)
