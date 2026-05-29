---
lifecycle: evergreen
ttl_days: null
created_at: 2026-02-19T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 5, Story 1, Task 38: RW Step 7 – Scoped Kanban Sync (UKW Mode)

**Task ID:** E5:S01:T38  
**Status:** COMPLETE  
**Priority:** HIGH  
**Estimated Effort:** Medium  
**Created:** 2026-02-19  
**Last updated:** 2026-03-25 (v0.5.1.38+1 – FR-038 documentation alignment: RW Step 7 Scoped UKW, invocation_context, governance)  
**Version:** v0.5.1.38+1  
**Code:** E5S01T38

**Repository Pattern:** FR-038 = E5:S01:T38 (abstract space will be v0.5.1.38+0)

---

## Scope

Repository anchor task for **FR-038: RW Step 7 – Scoped Kanban Sync (UKW Mode)**. This task records the requirement that RW Step 7 should be formally defined and documented as a **scoped UKW invocation** with explicit agentic responsibilities, and that UKW should be aware of whether it is running as part of RW or as a standalone workflow.

**Problem Statement:**

- RW Step 7 currently behaves as a mostly deterministic “Auto-update Kanban Docs” step, even though its responsibilities (board updates, prioritisation, narrative synthesis) inherently require **agentic intelligence**.
- The relationship between RW Step 7 and UKW is implicit rather than explicit: UKW is the general Kanban sync engine, but RW does not clearly state that it is using a **scoped UKW mode**.

**Solution (at this task’s level):**

- Create and link FR-038 describing the desired behaviour and naming.
- Provide a clear repository anchor (this task document) under Epic 5, Story 1 (FR Repo).
- Defer actual implementation changes (RW/UKW/Kanban policy updates) to a future implementation task under the appropriate epic/story (likely Epic 4 or 6).

---

## Input

- **FR-038:** [`FR-038-rw-step-7-scoped-kanban-sync-ukw-mode.md`](../../../fr-br/FR-038-rw-step-7-scoped-kanban-sync-ukw-mode.md)
- **Existing RW/UKW docs:**
  - `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md`
  - `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/update-kanban-workflow-agent-execution.md` (UKW)

- **Kanban Governance:** `packages/frameworks/kanban/policies/kanban-governance-policy.md`

---

## Deliverable

1. **This task document** – Repository anchor for FR-038 (E5:S01:T38).
2. **FR-038** linked to E5:S01:T38 in FR document and Story checklist.
3. Clear description of the desired relationship between RW Step 7 and UKW so that a future implementation task can:
   - Rename/document RW Step 7 as “Scoped Kanban Sync (UKW Mode)”.
   - Add `invocation_context` (e.g. `rw_step_7` vs `standalone`) to UKW docs.
   - Update Kanban governance docs to mention RW-scoped vs standalone Kanban sync.

---

## Acceptance Criteria

- [x] Task document exists and is linked from the FR Repo story checklist.
- [x] FR-038 is created and assigned to E5:S01:T38.
- [x] The desired behaviour for RW Step 7 and its relationship to UKW is described clearly enough to support a separate implementation task; **documentation AC** satisfied in v0.5.1.38+1 (orchestrator/YAML changes remain optional follow-up).

---

## Version Anchor

**Forensic Marker:**  
- Creation and wiring of this repository task and FR occur under **v0.5.1.37+4** (policy alignment and versioning doc updates).  
- **FR-038 documentation delivery:** **v0.5.1.38+1** (E5:S01:T38).

---

## Related Work

- **FR-038:** RW Step 7 – Scoped Kanban Sync (UKW Mode).
- **FR-040:** RW Update Kanban Board on Task Completion.
- **FR-037:** Kanban Policy – Task Prioritisation and Queue/Stack.
- **UKW:** Update Kanban Workflow (standalone Kanban sync).

---

## References

- **FR Repo Story:** [`Story-001-fr-repo.md`](../Story-001-fr-repo.md)
- **FR-038:** [`docs/project-management/kanban/fr-br/FR-038-rw-step-7-scoped-kanban-sync-ukw-mode.md`](../../../fr-br/FR-038-rw-step-7-scoped-kanban-sync-ukw-mode.md)

