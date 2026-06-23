---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-10T21:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E06:S09:T28 — Planning: Spec, Tests, Implementation Plan (IPW)

**Host Task:** [`T28-v32-fresh-install-signoff-story-padding-br105.md`](../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T28-v32-fresh-install-signoff-story-padding-br105.md) **(E06:S09:T28)**  
**Planning for:** [BR-105](../kanban/fbu/BR-105-v32-fresh-install-signoff-story-padding-mismatch.md) · triage **F18**  
**Status:** Approved (2026-06-10 — ready for implementation)

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | BR-086 sign-off accepts v3.2 / UXR-014 `story-{story:02d}` pattern when RW mode C persists kanban v3.2 defaults | BR-105, F18 |
| RF2 | BR-086 sign-off accepts capital `T{task` task pattern (already valid for BR-084) in addition to book lowercase `t{task` | BR-105, F18 |
| RF3 | Book ExpensesTracker T03 replay (`story:03d` / `t{task`) still passes BR-086 | BR-105 AC, T16 regression |
| RF4 | Policy choice documented: **contract alignment** (not installer revert to 03d) — v3.2 `kanban_paths.py` SoT uses `:02d` / `T{task` | BR-105 options, UXR-014 |
| RF5 | Triage matrix F18 marked resolved with evidence path after verification | T28 AC |

### 1.2 Non-functional requirements

| ID | Requirement |
| -- | ----------- |
| RNF1 | Book replay (#17 / ExpensesTracker) sign-off behaviour unchanged |
| RNF2 | Greenfield install mirror synced per FR-110 |
| RNF3 | Minimal diff — contract + tests only; no installer behaviour change |

### 1.3 Invariants and boundaries

- **In scope:** `github-issue-install-signoff-contract.yaml`, tests, BR-105 status, triage matrix, INSTALL note.
- **Out of scope:** Changing v3.2 installer defaults back to 03d; reopening BR-086; F19/F21 (BR-106/107).

---

## 2. Specification

### 2.1 Goal

After Kanban **v3.2** fresh install + RW mode C on SBL-style dual-tree profile, `install_github_issue_signoff.py` reports **BR-086 READY** without manual `rw-config.yaml` edits, while book T03 configs (`story:03d` / `t{task`) remain READY.

### 2.2 Design choice

**Contract alignment (authoritative):** Extend BR-086 `rw_config_patterns` checks to mirror BR-083 story padding alternates and BR-084 task-prefix alternates:

- `story_doc_pattern_contains_any`: `story-{story:03d}` **or** `story-{story:02d}`
- `task_doc_pattern_contains_any`: `t{task` **or** `T{task`

### 2.3 ADR necessity decision

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1–T7 | All | N | Implements UXR-014 / kanban v3.2 SoT; no new architectural choice |

**Outcome:** `EXEMPT` — governed by UXR-014, `kanban_paths.py`, ADR-015.

---

## 3. Test design

| ID | Behavior | Expected |
| -- | -------- | -------- |
| T1 | SBL v3.2 rw-config (`story:02d`, `T{task:02d}`) against updated BR-086 spec | `_run_check_rw_config_patterns` passes |
| T2 | Book T03 config (`story:03d`, `t{task`) against updated BR-086 spec | Still passes (regression) |
| T3 | Full `evaluate_all` on v3.2 fixture | `BR-086.ready == True` |
| T4 | Full `evaluate_all` on book T03 fixture | `BR-086.ready == True` (regression) |

---

## 4. Implementation plan

| Step | Action |
| ---- | ------ |
| **1** | Transition task **E06:S09:T28** status **TODO → IN PROGRESS**; update `Last updated`. |
| 2 | Update `github-issue-install-signoff-contract.yaml` BR-086: `_contains_any` for story and task patterns; refresh close_comment. |
| 3 | Add tests in `tests/test_install_release_workflow_rw_config.py` for v3.2 SBL config + contract regression. |
| 4 | `python scripts/sync_greenfield_install.py` — mirror contract to `greenfield-install/`. |
| 5 | Update `INSTALL_IN_YOUR_PROJECT.md` — note BR-086 accepts v3.2 UXR-014 patterns. |
| 6 | Run targeted pytest on signoff tests. |
| **N** | Reconcile task status → **COMPLETE** if AC met; update BR-105; triage matrix F18; RW Step 7; **`RW E06:S09:T28 --art`**. |

---

## 5. Documentation deliverables

| Doc ID | Path | Action | Scope |
| ------ | ---- | ------ | ----- |
| D1 | `docs/implementation-cycles/IPP-E06S09T28-*.md` | CREATE | This plan |
| D2 | `packages/frameworks/workflow-mgt/config/github-issue-install-signoff-contract.yaml` | UPDATE | BR-086 alternates |
| D3 | `greenfield-install/packages/frameworks/workflow-mgt/config/...` | UPDATE | FR-110 mirror |
| D4 | `tests/test_install_release_workflow_rw_config.py` | UPDATE | T1–T4 |
| D5 | `INSTALL_IN_YOUR_PROJECT.md` | UPDATE | Policy note |
| D6 | `docs/kanban/fbu/BR-105-*.md` | UPDATE | Status on fix |
| D7 | `docs/knowledge/analysis/projects/starborn-legacy-install-triage-matrix.md` | UPDATE | F18 resolved |

---

## 6. Documentation housing

| Doc ID | Target | Publication |
| ------ | ------ | ----------- |
| D1 | `docs/implementation-cycles/` | NOT_APPLICABLE |
| D5 | repo-root install doc | PUBLISHED (adopter) |
| D2–D4 | framework paths | NOT_APPLICABLE |

---

## 7. Success / verification criteria

- [ ] v3.2 SBL-style rw-config → BR-086 **READY**
- [ ] Book T03 rw-config → BR-086 **READY** (regression)
- [ ] Pytest signoff tests pass
- [ ] IPP linked from task doc
- [ ] F18 triage disposition updated

---

## References

- [BR-105](../kanban/fbu/BR-105-v32-fresh-install-signoff-story-padding-mismatch.md)
- [BR-086](../kanban/fbu/BR-086-rw-install-lowercase-fresh-kanban-patterns-signoff.md)
- [UXR-014](../kanban/fbu/UXR-014-two-digit-est-identifier-default-formatting.md)
- [IPP-E06S09T16](IPP-E06S09T16-br086-lowercase-fresh-kanban-patterns.md)
- [`kanban_paths.py`](../../packages/frameworks/kanban/scripts/kanban_paths.py)
