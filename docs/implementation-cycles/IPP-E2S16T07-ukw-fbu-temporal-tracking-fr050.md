---
lifecycle: evergreen
created_at: 2026-05-29T12:00:00Z
housekeeping_policy: keep
---

# E2:S16:T07 — Planning: FR-050 UKW FBU temporal sync (IPP)

**Host Task:** [`T07-ukw-extension-for-fr-br-uxr-temporal-tracking-fr050.md`](../project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T07-ukw-extension-for-fr-br-uxr-temporal-tracking-fr050.md) **(E2:S16:T07)**  
**Planning for:** [FR-050](../project-management/kanban/fr-br/FR-050-ukw-extension-for-fr-br-uxr-temporal-tracking-and-synchronization.md)  
**Status:** Published

## 1. Requirements

| ID | Requirement | Source |
|----|-------------|--------|
| RF1 | UKW YAML + agent doc: explicit FBU board cleanup on `kboard.md` | AC1 |
| RF2 | Append resolved FBUs to `intake-completed.md` with ISO timestamps | AC2 |
| RF3 | "20 most recent" dashboard on `intake-completed.md` | AC3 |
| RF4 | Cross-doc consistency check fbu board ↔ completed ↔ structure | AC4 |
| RF5 | No breaking changes to kanban UKW steps | AC5 |

**In scope:** Workflow YAML, `update-kanban-workflow-agent-execution.md`, `ukw-sync` skill wiring to existing `fr-br-uxr-completed-update` skill.  
**Out of scope:** New Windsurf skills; runtime UKW runner code (agent-driven).

## 4. Implementation plan

| Wave | Deliverable |
|------|-------------|
| 1 | Extend `update-kanban-workflow.yaml` FBU substeps |
| 2 | Agent execution doc + ukw-sync skill FR-097 stamp rules |
| 3 | Optional `validate_ukw_fbu_consistency.py` or doc checklist |
| 4 | `RW E2:S16:T07 --art`; FR-050 IMPLEMENTED |

## 7. Success criteria

- AC1–AC5; `validate_ipw_publication_wiring.py --requested E2:S16:T07` PASS
