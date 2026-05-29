---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-16T14:20:00Z
expires_at: null
housekeeping_policy: keep
---

# Task E7:S01:T09 – Kanban Template Governance & UXR Ownership

**Task ID:** E7:S01:T09  
**Status:** TODO  
**Priority:** HIGH  
**Version Marker:** v0.7.1.9+3 (UXR-005 **Implementing Task** header wiring)  
**Related UXR:** [UXR-005 – Kanban Board Formatting & Governance](../../../fr-br/UXR-005-kanban-board-formatting-and-governance.md)  
**UXR registry (E7:S00):** [E7:S00:T05](../Story-000-uxr-repo/T05-uxr-005-repository-anchor.md)  
**Story:** [E7:S01 – Codebase Maintenance Tasks](../Story-001-codebase-maintenance-tasks.md)

---

## Objective

Operationalize UXR-005 by codifying and enforcing the “one blank line between multi-line MoSCOW entries” rule across all Kanban documents, and by making the UXR workflow the canonical owner of Kanban template/document maintenance. Provide the assets Release Workflow (RW) needs to anchor future runs on this task.

---

## Scope

1. **Documentation Updates**
   - Update `kanban-board-guide.md`, `kanban-structure.md`, `_index.md`, and related templates to document the spacing rule with before/after examples.
   - Ensure each file explicitly states that UXR owns Kanban template/document updates (aligning with README change).
2. **Validator Enhancements**
   - Extend `scripts/documentation/validate-documentation-consistency.py` (or create a companion check) to detect multi-line bullets lacking the required blank line.
   - Add TODO flag if automation can’t ship in this cycle; document mitigation steps in the task doc.
3. **Kanban Board & FR/BR/UXR Integration**
   - Ensure Kanban board entries reference this task wherever UXR-005 is mentioned so RW can point to E7:S01:T09 when executing.
   - Provide guidance for UKW/MMW agents on how to escalate formatting issues to UXR-owned templates.
4. **Evidence Package for RW**
   - Capture before/after diffs, validator output, and log entries proving the rule enforcement.
   - Document a repeatable runbook snippet inside this task for future RW anchoring.

---

## Input

- **[UXR-005](../../../fr-br/UXR-005-kanban-board-formatting-and-governance.md)** — Kanban board formatting & governance findings and acceptance criteria.
- **Registry:** [E7:S00:T05](../Story-000-uxr-repo/T05-uxr-005-repository-anchor.md); kanban boards, `kanban-board-guide.md`, validators under `scripts/documentation/`.

---

## Deliverable

- Updated Kanban documentation and templates reflecting spacing rule + ownership statement.
- Validator enhancement or documented backlog item referencing this task if deferred.
- RW-ready log/checklist stored under `docs/maintenance/logs/mmw/` (or similar) describing the enforcement pass.
- Task doc updated with completion marker and evidence links once work is done.

---

## Acceptance Criteria

- [ ] All Kanban/FR-BR-UXR board files with multi-line MoSCOW entries show exactly one blank line between tasks (verified via validator/logs).
- [ ] Kanban guide/templates describe the rule with examples and cite UXR ownership.
- [ ] Release Workflow instructions include reference to E7:S01:T09 as the anchor for spacing enforcement.
- [ ] Validator or lint instructions exist to prevent regression (either implemented or documented as follow-up work with clear TODO reference).
- [ ] Evidence bundle (diff summaries + log) attached/linked in this task file for future audits.

---

## Dependencies

- **E7:S00:T05** — UXR-005 kanban registry task (traceability anchor).
- UXR-005 findings and recommendations.
- Documentation validator infrastructure.
- Coordination with Documentation Agent for template updates.

---

## Notes

- Treat this as a fast-follow to the already completed formatting sweep so the rule becomes durable, automated, and RW-trackable.
- Future RW cycles should update this task’s version marker whenever spacing enforcement work occurs.

---

## Kanban documentation setup (RW -k)

**v0.7.1.9+1 (2026-03-31):** Registry wiring for **UXR-005** via **E7:S00:T05**; **Task ID** header for RW validators; **`validate_rw_task_complete.py`** restored on **epic/7-documentation-maintenance**. Implementation scope (spacing rule, validators, ACs) remains **TODO**.

**v0.7.1.9+2 (2026-03-31):** **`validate_branch_context.py`** `locate_task_doc_for_version` — same discovery patterns as **`validate_version_bump`** (no false “task doc not found” for **E07S01T09** layout).
