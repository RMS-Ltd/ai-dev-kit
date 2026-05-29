---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-20T22:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E4:S13:T07 — Planning: Kanban and FBU state icons for MoSCOW rows (IPW)

**Host Task:** [T07-kanban-fbu-state-icons-for-moscow-rows-uxr012.md](../project-management/kanban/epics/Epic-4/Story-013-kanban-board-moscow-prioritized-task-view/T07-kanban-fbu-state-icons-for-moscow-rows-uxr012.md) **(E4:S13:T07)**  
**Planning for:** [UXR-012](../project-management/kanban/fr-br/UXR-012-kanban-fbu-state-icons-for-moscow-rows.md)  
**Status:** Approved (implementation executed 2026-05-20)

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | Publish canonical **Set A (emoji) primary → Set B (Unicode) fallback** mapping for MoSCOW task/FBU states | UXR-012 |
| RF2 | `kboard.md` / `fbuboard.md` rows use **emoji only** before the status word; status text retained for grep | UXR-012 |
| RF3 | Backfill corpus MoSCOW rows missing icons | UXR AC3 |
| RF4 | UKW/RW apply mapping deterministically (`state_icons.py` + pipeline step) | UXR AC4 |
| RF5 | Hygiene passes do not mutate icons without substantive status change (pairs with FR-097) | UXR-012, FR-097 |
| RF6 | Normalize status aliases (`PENDING`/`ACTIVE`/`INTAKE`, `IN PROGRESS (PERPETUAL)`, etc.) | UXR-012 inventory |
| RF7 | Wire IPP; satisfy task AC1–AC5 and UXR AC2–AC5 | T07, UXR-012 |
| RF8 | Atomic task doc + kboard row status (FR-077) | FR-077 |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement |
| -- | ----------- |
| RNF1 | Idempotent icon injection (re-run safe) |
| RNF2 | Icon-only edits preserve `| Last modified:` stamps |
| RNF3 | Validator reads `kanban_root` from `rw-config.yaml` |
| RNF4 | Automated tests alongside `test_stamp_authority.py` |

### 1.3 Invariants and boundaries

- **Invariants:** Board row grammar ` - {icon} {STATUS}` after title; FR-097 stamp write boundary unchanged.
- **In scope:** MoSCOW sections on `kboard.md` / `fbuboard.md`; RW Step 9 Gate 9; `update_kanban_docs.py` canonical pipeline.
- **Out of scope:** FR/BR/UXR doc `**Status:**` headers; portal publish; phase-2 type-prefix icons.

---

## 2. Specification

### 2.1 Goal

At-a-glance scanning of MoSCOW workload via canonical **Set A** emoji on every active board row, with **Set B** documented for plain-text exports only—without breaking forensic stamps (FR-097).

### 2.2 Specification mapping

Requirements RF1–RF8 are implemented by `state_icons.py` (parse + inject), `backfill_board_state_icons.py` (corpus migration), `validate_kanban_state_icons.py` + Gate 9 (enforcement), and documentation in `kanban-board-guide.md` / `kanban-governance-policy.md` / UKW/RW execution guides.

### 2.3 Constraints

- First ` - ` segment after the title en-dash that begins with a known status token defines the status boundary (rows may contain additional ` - ` before link tails).
- `validate_board_stamp_diff.py` remains the stamp authority; icon backfill is stamp-neutral.

### 2.4 Status transition intent

- **Implementation start:** `TODO → IN PROGRESS` (task doc + kboard) on first implementation change set.
- **Implementation complete:** `IN PROGRESS → COMPLETE` + `✅ COMPLETE (v{version})` on task + kboard via **RW E4:S13:T07 --art** (dev branch epic alignment).
- **Atomic propagation:** Task doc status and kboard row updated in the same RW / implementation session per FR-077.

---

## 3. Test design

| ID | Check |
| -- | ----- |
| T1 | `normalize_status_token` / `match_canonical_at_start` alias coverage |
| T2 | `primary_icon` / `fallback_icon` per canonical key |
| T3 | `inject_primary_icon_into_moscow_line` inserts icon; idempotent on second pass |
| T4 | COMPLETE rows with existing `✅` unchanged |
| T5 | `validate_kanban_state_icons.validate_board_file` fails open row without icon |
| T6 | Post-backfill: `validate_kanban_state_icons.py --strict` PASS on repo boards |
| T7 | `Last modified` unchanged across backfill (spot-check git diff) |

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY]** Transition E4:S13:T07 `TODO → IN PROGRESS`; kboard row `🔄 IN PROGRESS` | FR-077 |
| 2 | Add `state_icons.py` | Mapping + parse + inject |
| 3 | Add `backfill_board_state_icons.py` + JSON report | Corpus |
| 4 | Add `validate_kanban_state_icons.py` + Gate 9 in `validate_release_readiness.py` | AC5 |
| 5 | Add `test_state_icons.py` | T1–T5 |
| 6 | Extend `ROW_TRANSFORM_CONTRACT_*` with `state_icons` step; final `apply_icons` pass in `update_kanban_board` | RF4 |
| 7 | Update `kanban-board-guide.md`, `kanban-governance-policy.md`, UKW/RW guides, `board-stamp-authority.md`, `.cursorrules`, `ukw.md` | UXR AC2, AC4 |
| 8 | Run live backfill; archive report under `four-surface-reports/` | Evidence |
| **N** | **[MANDATORY]** RW `E4:S13:T07 --art`: version `0.4.13.7+1`, changelog, kanban reconcile, `COMPLETE` + forensic marker | Closure |

### 4.1 Files created

- `packages/frameworks/workflow mgt/scripts/kanban/state_icons.py`
- `packages/frameworks/workflow mgt/scripts/kanban/backfill_board_state_icons.py`
- `packages/frameworks/workflow mgt/scripts/validation/validate_kanban_state_icons.py`
- `packages/frameworks/workflow mgt/scripts/test_state_icons.py`
- `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/state-icons.md`
- `docs/changelog-and-release-notes/changelog-archive/four-surface-reports/uxr012-icon-backfill-applied.json`

### 4.2 Files updated

- `packages/frameworks/workflow mgt/scripts/update_kanban_docs.py`
- `packages/frameworks/workflow mgt/scripts/validate_release_readiness.py`
- `docs/project-management/kanban/kboard.md`, `fbuboard.md`
- Governance and workflow docs (see §5)

---

## 5. Documentation deliverables

| Doc ID | Path | Action |
| ------ | ---- | ------ |
| D1 | This IPP | CREATE |
| D2 | `docs/project-management/kanban/kanban-board-guide.md` | UPDATE — MoSCOW state icons |
| D3 | `packages/frameworks/kanban/policies/kanban-governance-policy.md` | UPDATE — icon + FR-097 pairing |
| D4 | `update-kanban-workflow-agent-execution.md` | UPDATE — Step 6 icon rules |
| D5 | `release-workflow-agent-execution.md` | UPDATE — Gate 9 / Step 10 |
| D6 | `board-stamp-authority.md` | UPDATE — cross-link UXR-012 |
| D7 | `state-icons.md` (vwmp) | CREATE |
| D8 | `UXR-012`, T07, Story-013 | UPDATE — AC closure, links |

---

## 6. Documentation housing

| Artifact | Path | Publication |
| -------- | ---- | ----------- |
| IPP | `docs/implementation-cycles/IPP-E4S13T07-kanban-fbu-state-icons-moscow-rows.md` | PUBLISHED |
| Operator KB | `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/state-icons.md` | PUBLISHED |

---

## 7. Success / verification criteria

- [x] `validate_kanban_state_icons.py --strict` PASS on repo boards (post-backfill).
- [x] `test_state_icons.py` self-test runner OK.
- [x] Gate 9 integrated into `validate_release_readiness.py`.
- [x] Icon backfill report JSON archived.
- [x] UKW/RW guides document Set A on boards + no icon churn on hygiene-only passes.
- [x] UXR / task ACs checked with evidence (this IPP + git diff scope).

---

## References

- [UXR-012](../project-management/kanban/fr-br/UXR-012-kanban-fbu-state-icons-for-moscow-rows.md)
- [FR-097](../project-management/kanban/fr-br/FR-097-board-stamp-authority-and-forensic-timestamp-recovery.md)
- [FR-077](../project-management/kanban/fr-br/FR-077-ipw-built-task-status-transition-and-kboard-sync.md)
- [board-stamp-authority.md](../../packages/frameworks/workflow%20mgt/KB/Documentation/Developer_Docs/vwmp/board-stamp-authority.md)
