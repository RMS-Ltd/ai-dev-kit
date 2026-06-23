---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-17T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E06:S09:T38 — Planning: Guided install orchestrator (IPW)

**Host Task:** [`T38-guided-install-orchestrator-fr135.md`](../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T38-guided-install-orchestrator-fr135.md) **(E06:S09:T38)**  
**Planning for:** [FR-135](../kanban/fbu/FR-135-guided-install-orchestrator-zero-manual-steps.md) · [E06:S09:T36](../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T36-adopter-path-selector-install-rc-uxr029.md) · [E06:S09:T37](../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T37-kanban-migration-depth-rationalization-fr133.md)  
**Status:** Approved

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | Phase A path menu (greenfield / Arm A / B / strangler) with flag/profile override | FR-135-F1 |
| RF2 | Phase B release authority — SQLite default; import/fresh/legacy menu; emit matching rw-config keys | FR-135-F2, F8 |
| RF3 | Phase C cursorrules bundle — RW / RW+UKW / RW+UKW+delivery stubs | FR-135-F3 |
| RF4 | Phase D SQLite ledgers — release-state.db + kanban-completed.db; optional MD import | FR-135-F4, F9 |
| RF5 | Phase E KMA offer — blind L1 / skip / guided handoff only | FR-135-F5 |
| RF6 | Phase F — COMPREHENSION scaffold, Install RC strict, install receipt JSON | FR-135-F6, F7 |
| RF7 | `install-profile.yaml` + `--config` non-interactive replay (BR-106 pattern) | FR-135-NF1, NF3 |
| RF8 | Install RC rows for kanban-completed.db and UKW trigger | FR-135-NF2 |
| RF9 | INSTALL happy path = one command + profile example | FR-135 AC5 |

### 1.2 Non-functional requirements

| ID | Requirement |
| -- | ----------- |
| RNF1 | Greenfield profile → zero menus when `non_interactive: true` |
| RNF2 | `ADK-I01.S04`–`S07` for new failure classes |
| RNF3 | Greenfield mirror sync (FR-110) when touching `packages/frameworks/` |
| RNF4 | Backward compatible legacy orchestrator path without install profile |

### 1.3 Invariants and boundaries

- **In scope:** `install_greenfield_path.py`, `install_release_workflow.py` config emission, install RC, INSTALL, tests.
- **Out of scope v1:** In-process KMA execution, first domain RW, guided KMA kit mode runtime (FR-136).

### 1.4 ADR necessity decision

**Outcome:** **EXEMPT** — extends FR-080/ADR-030 install path; no new architectural fork (T1–T7 all N; E1–E5 pass).

---

## 2. Specification

### 2.1 Goal

Adopters run **one orchestrator command** with an install profile and reach Install RC PASS without undocumented manual steps (sqlite, UKW triggers, kanban-completed ledger, COMPREHENSION scaffold).

### 2.2 Design

| Component | Behaviour |
| --------- | --------- |
| `install_profile.py` | Load/validate profile; interactive Phase A–E menus; `to_rw_install_dict()` |
| `install_greenfield_path.py` | Detect `schema_version` 1.x on `--config` → guided v2; else legacy path |
| `install_cursorrules_bundle.py` | Append UKW + delivery stub sections post-RW |
| `install_release_workflow.py` | Emit `release_state_*`, `kanban_completed`, `install_trigger_bundle` |
| `install-rc-checklist.yaml` | `sqlite_kanban_completed`, `file_contains` UKW marker |

---

## 3. Test design

| ID | Behavior | Expected |
| -- | -------- | -------- |
| T1 | Load `install-profile.example.yaml` | Valid `InstallProfile`; sqlite + rw_ukw |
| T2 | `to_rw_install_dict` | Emits sqlite + kanban_completed keys |
| T3 | Guided dry-run | Phase summary; no legacy manual-steps banner |
| T4 | Legacy rw-only yaml | `load_config_file` returns `rw_config` kind |
| T5 | RC `sqlite_kanban_completed` | Skip when not configured; fail without db when configured |
| T6 | `generate_rw_config_yaml` | Includes release_state_backend when in config dict |

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY] Transition task `E06:S09:T38` `TODO → IN PROGRESS`** | Task doc |
| 2 | Add `install_profile.py` + example YAML | Profile schema |
| 3 | Guided phases in `install_greenfield_path.py` | Phases A–F |
| 4 | `install_cursorrules_bundle.py` + delivery stub template | Phase C |
| 5 | RW installer `generate_rw_config_yaml` extensions | F8 |
| 6 | Install RC checklist + validator check types | NF2 |
| 7 | ADK-I01.S04–S07 error codes | NF2 |
| 8 | pytest T1–T6 | AC4 |
| 9 | INSTALL happy-path one-command section | AC5 |
| 10 | `sync_greenfield_install.py` | FR-110 |
| 11 | **`RW E06:S09:T38 --art`** | Local release |
| **12** | **[MANDATORY] Reconcile task status** to COMPLETE with evidence | Task doc + kboard |

**RW rule (BR-097):** Step 11 uses **`RW E06:S09:T38 --art`** only.

### 4.1 Files to create or modify

**Create:** `install_profile.py`, `install_cursorrules_bundle.py`, `install-profile.example.yaml`, `cursorrules-delivery-trigger-section.md`, `IPP-E06S09T38-*.md`, `test_install_profile.py`

**Modify:** `install_greenfield_path.py`, `install_release_workflow.py`, `install-rc-checklist.yaml`, `validate_install_rc.py`, `install-error-codes.yaml`, `INSTALL_IN_YOUR_PROJECT.md`, task doc, FR-135, kanban surfaces

---

## 5. Documentation deliverables

| Artifact | Housing |
| -------- | ------- |
| Install profile example | `packages/frameworks/workflow-mgt/config/install-profile.example.yaml` |
| INSTALL happy path | `INSTALL_IN_YOUR_PROJECT.md` |
| IPP | `docs/implementation-cycles/IPP-E06S09T38-guided-install-orchestrator-fr135.md` |

### 5.3 Governing docs (ADR EXEMPT)

FR-135, FR-080, ADR-030 Path model, FR-110 greenfield mirror.

---

## 6. Documentation housing

All adopter-facing install changes under `INSTALL_IN_YOUR_PROJECT.md` and framework `packages/frameworks/workflow-mgt/`.

---

## 7. Success / verification criteria

- [ ] AC1: Greenfield profile dry-run shows guided summary without manual-steps banner
- [ ] AC4: pytest `test_install_profile.py` + extended `test_install_greenfield_path.py` pass
- [ ] AC5: INSTALL documents one-command profile path
- [ ] AC6: ADK-I01.S04–S07 registered
- [ ] Greenfield sync check green

---

**Linked from host task:** E06:S09:T38 Input / References.
