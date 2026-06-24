---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-24T14:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E04:S14:T11 — Planning: UKW Step 2.5 gap discovery (FR-043)

**Host Task:** [`T11-ukw-gap-discovery-unfiled-fr-br-fr043.md`](../kanban/epics/epic-04/story-14-kanban-framework-maintenance/T11-ukw-gap-discovery-unfiled-fr-br-fr043.md) **(E04:S14:T11)**  
**Planning for:** [FR-043 — UKW gap discovery](../kanban/fbu/FR-043-ukw-gap-discovery-todo-tasks-and-unfiled-fr-br.md)  
**Status:** Published (implementation authorized via MWF)

---

## 1. Requirements (Ascertained Baseline)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | UKW Step 2.5 (comprehensive only): surface TODO/IN PROGRESS tasks missing from `kboard.md` | FR-043, AC1 |
| RF2 | Step 2.5 Part (b): present open FR/BR/UXR without linked tasks; agent seeks user intention | FR-043 |
| RF3 | Deterministic gap scanner script for agents and CI advisory use | T11 deliverable |
| RF4 | `update-kanban-workflow.yaml` documents Step 2.5 between activity analysis and task updates | AC1 |
| RF5 | Gap stats documented from at least one script run | AC2 |
| RF6 | `intake-open-taskless-queue.md` references gap scanner for queue maintenance | AC3 |

**Out of scope:** Automatic task filing without user confirmation; full UKW agent run in this delivery (script + docs only).

---

## 2. Specification

### 2.1 Goal

Ship a deterministic `discover_board_gaps.py` helper and wire it into UKW workflow metadata so comprehensive UKW runs can report (a) missing active tasks and (b) open taskless FBUs before MoSCOW updates.

### 2.4 Status transition intent

- **Start:** TODO → IN PROGRESS (Step 1)
- **End:** COMPLETE when AC1–AC3 satisfied + `RW E04:S14:T11 --art`

### 2.5 ADR necessity decision

| ID | Y/N | Evidence |
| -- | --- | -------- |
| T1–T7 | N | Extends documented UKW Step 2.5; no new architectural contract |

**Outcome:** EXEMPT — covered by FR-043 and existing UKW execution guide.

---

## 3. Test design

| ID | Check | Covers |
| -- | ----- | ------ |
| V1 | `discover_board_gaps.py --json` exits 0 on repo | RF3 |
| V2 | Unit tests with fixture kanban tree | RF1, RF2 |
| V3 | YAML contains `step-2-5` with gap handler | RF4 |
| V4 | `ukw.md` Step 2.5 references script | AC1 |
| V5 | Gap stats JSON/markdown artifact in repo | AC2 |

---

## 4. Implementation plan

| Step | Action |
| ---- | ------ |
| **1** | E04:S14:T11 `TODO → IN PROGRESS` |
| 2 | Add `discover_board_gaps.py` + `test_discover_board_gaps.py` |
| 3 | Insert `step-2-5` in `update-kanban-workflow.yaml`; extend `ukw-config.yaml` |
| 4 | Update `ukw.md` Step 2.5 script invocation |
| 5 | Refresh `intake-open-taskless-queue.md` scanner note |
| 6 | Run script; save gap stats under `docs/knowledge/` |
| 7 | `python scripts/sync_greenfield_install.py` |
| 8 | `RW E04:S14:T11 --art` |
| **9** | Reconcile T11 → COMPLETE; sync FR-043, story, epic, kboard |

---

## 5. Documentation deliverables

| Doc ID | Path | Action |
| ------ | ---- | ------ |
| D1 | `packages/frameworks/workflow-mgt/scripts/kanban/discover_board_gaps.py` | CREATE |
| D2 | `packages/frameworks/workflow-mgt/workflows/update-kanban-workflow/update-kanban-workflow.yaml` | UPDATE |
| D3 | `packages/frameworks/workflow-mgt/workflows/update-kanban-workflow/ukw-config.yaml` | UPDATE |
| D4 | `.claude/commands/ukw.md` | UPDATE |
| D5 | `docs/kanban/intake-open-taskless-queue.md` | UPDATE |
| D6 | `docs/knowledge/analysis/ukw-gap-discovery-stats-e04s14t11.md` | CREATE |

---

## 6. Documentation housing

All framework paths mirror via `sync_greenfield_install.py`. Maintainer stats in `docs/knowledge/analysis/` (NOT_APPLICABLE for portal).

---

## 7. Success / verification criteria

- V1–V5 pass
- FR-043 implementation status updated
- Four-surface kanban reconciliation at RW Step 7

---

## References

- [FR-043](../kanban/fbu/FR-043-ukw-gap-discovery-todo-tasks-and-unfiled-fr-br.md)
- [update-kanban-workflow-agent-execution.md](../../packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/update-kanban-workflow-agent-execution.md)
