---
lifecycle: proposed
ttl_days: null
created_at: 2026-06-17T16:00:00Z
expires_at: null
housekeeping_policy: keep
---

# FR-135: Guided install orchestrator — zero undocumented manual steps

**Type:** Feature Request (FR)  
**ID:** FR-135  
**Submitted:** 2026-06-17  
**Submitted By:** Operator (SBL install programme / adopter UX session)  
**Priority:** HIGH (Should Have — MoSCOW **S**)  
**Status:** IN PROGRESS  
**Version anchor:** v0.6.9.38+1 (implementation @ RW 2026-06-17)

**North star:** An adopter runs **one install command** and reaches Install RC PASS with **no hunting** INSTALL appendices, separate sqlite scripts, or cursorrules paste steps — choosing only where the answer changes behaviour.

**Implementing Task:** [E06:S09:T38](../epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T38-guided-install-orchestrator-fr135.md)

**Related:** [FR-080](FR-080-greenfield-installation-process.md) · [FR-133](FR-133-kanban-migration-depth-rationalization-adopter-guide.md) · [FR-134](FR-134-kanban-completed-sqlite-ledger-pdf-report.md) · [UXR-029](UXR-029-adk-install-path-experiment.md) · [E06:S09:T36](../epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T36-adopter-path-selector-install-rc-uxr029.md) · [E06:S09:T37](../epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T37-kanban-migration-depth-rationalization-fr133.md) · [ADR-030](../architecture/standards-and-adrs/ADR-030-selective-adoption-three-path-model.md) · [#85](https://github.com/RMS-Ltd/ai-dev-kit/issues/85) (SBL attempt 11)

**Evidence:** SBL attempt 10 — Install RC PASS required **manual** `release_state_backend: sqlite`, UKW cursorrules paste, `COMPREHENSION.md` copy, and separate sqlite/kanban-completed init ([attempt-10 index](../../../adk-install-into-sbl/attempt-10/README.md)); orchestrator still prints *Post-install manual steps (until fully orchestrated)* ([`install_greenfield_path.py`](../../../packages/frameworks/workflow-mgt/scripts/install_greenfield_path.py)).

---

## Summary

Extend **`install_greenfield_path.py`** (and **`install_release_workflow.py`** config emission) so the **full layered sequence** (Phases 0–6) runs inside one guided flow: safe defaults for greenfield, **plain-language choice menus** for brownfield/Arm B branches, and **no silent destructive actions**.

FR-133 documented the painless **journey**; FR-135 **implements** it in the orchestrator so documentation and runtime match.

---

## Problem Statement

| Pain | Symptom |
| ---- | ------- |
| Undocumented tail | FR-080 AC: no undocumented manual steps — violated post–attempt 10 |
| Config / runtime drift | `--init-sqlite` can create `.adk/release-state.db` while `rw-config` still defaults to `legacy` |
| Trigger wiring gap | RW installer appends RW section only; UKW/IPW require separate template paste (step 3c) |
| Ledger init gap | `kanban_completed` keys and `init_kanban_completed_db.py` not in install path |
| Comprehension gap | `COMPREHENSION.md` manual copy from template |
| KMA handoff | Arm B migration is a separate agent session with no install-time offer/skip |
| Proficiency threshold | Adopter must read maintainer KB to complete a “successful” install |

**UXR-029 H-null confirmed:** path choice matters less than **kit completeness** — this FR closes the completeness gap in code.

---

## Design principles

1. **Default-safe automation** — greenfield empty repo: minimal prompts; log choices in install receipt.
2. **Prompt when branching** — legacy YAML, changelog archive import, KMA run/mode, strangler — explicit opt-in.
3. **Never assume destructive action** — archive, migrate, overwrite `.cursorrules`, import legacy data without confirmation.
4. **One front door** — `install_greenfield_path.py` / future `adk install` owns steps 0–6; INSTALL becomes reference, not a parallel checklist.
5. **CI replay** — `--non-interactive --config install-profile.yaml` records choices (extends BR-106 pattern).

---

## Requirements

### Functional — orchestrator phases

- [ ] **FR-135-F1:** **Phase A — Path menu** when `--adoption-path` omitted: greenfield / Arm A / Arm B / strangler (maps ADR-030); flags override for CI.
- [ ] **FR-135-F2:** **Phase B — Release authority:** recommend SQLite; if `semver-registry.yaml` exists, menu: import / legacy YAML / fresh empty; **always** write matching `release_state_backend` + `release_state_db` into generated `rw-config.yaml`.
- [ ] **FR-135-F3:** **Phase C — Workflow trigger bundle:** RW only | RW+UKW (default when `use_kanban`) | RW+UKW+IPW/IDW stubs; append correct `cursorrules` sections (no manual paste).
- [ ] **FR-135-F4:** **Phase D — SQLite ledgers:** init `release-state.db`; when kanban enabled init `kanban-completed.db` + emit `kanban_completed:` keys; optional import prompts for changelog archive and `kanban-completed.md`.
- [ ] **FR-135-F5:** **Phase E — Arm B KMA offer:** menu blind L1 (default) / skip / guided (only if TSP detected); no auto-run without confirmation.
- [ ] **FR-135-F6:** **Phase F — Install-complete artifacts:** scaffold `COMPREHENSION.md` from template with detected paths; apply adopter `documentation_surfaces` defaults; run Install RC strict; emit FR-079 install receipt JSON with choices + ADK pin.
- [ ] **FR-135-F7:** Remove or replace orchestrator *“Post-install manual steps”* stdout with phase completion summary + single **next step** (first domain RW when RC PASS).

### Functional — RW installer alignment

- [ ] **FR-135-F8:** `install_release_workflow.py` emits `release_state_backend`, `release_state_db`, and `kanban_completed` block per install profile (not maintainer-hand-edit).
- [ ] **FR-135-F9:** `build_init_sqlite_command` respects changelog import choice (do not always pass `--skip-changelog` when user opted in).

### Non-functional

- [ ] **FR-135-NF1:** Greenfield non-interactive path completes with **zero menus** when profile YAML supplied.
- [ ] **FR-135-NF2:** Install RC checklist extended: `kanban-completed.db` when kanban enabled; UKW trigger present when profile = standard/full.
- [ ] **FR-135-NF3:** `ADK-I01.*` error codes for menu abort / invalid profile / RC fail with remediation hints.
- [ ] **FR-135-NF4:** Greenfield-install mirror sync per FR-110 when touching `packages/frameworks/`.

### Explicitly out of scope (v1)

- First domain `RW` execution (post-install).
- Git push / GitHub release.
- Mandatory L2/L3 KMA rationalization (FR-133).
- Full agentic KMA inside deterministic Python (handoff token only for Phase E).

---

## Acceptance criteria

- [ ] **AC1:** Documented greenfield scenario: single command → Install RC strict PASS with **no** steps listed in current orchestrator “manual steps” block.
- [ ] **AC2:** Documented Arm B scenario (SBL-class): one command + confirmed menus → RC PASS; `release_state_backend: sqlite` and UKW trigger present without hand-editing `rw-config` / `.cursorrules`.
- [ ] **AC3:** Attempt 11 Phase B can use orchestrator profile instead of [attempt-11-preflight-checklist](../../../adk-install-into-sbl/attempt-11-preflight-checklist.md) manual carry list for sqlite/triggers/comprehension.
- [ ] **AC4:** `--non-interactive --config` replays all choices; pytest covers profile load + RC row satisfaction.
- [ ] **AC5:** INSTALL “happy path” reduced to one command + link to choice reference appendix.

---

## Related feedback IDs

| ID | Mapping |
|----|---------|
| `FB-ADK-adopter-bootstrap-prerequisites` | Absorbed into FR-135-F1–F7 |
| `FB-ADK-optimal-greenfield-install-sequence` | Orchestrator implements full sequence |
| `FB-ADK-greenfield-sqlite-before-rw` | FR-135-F2/F4 |
| T36 Phase 0 “KMA/UKW manual” | Closed by FR-135-F3/F5 |

---

## Scope analysis

**Problem domain:** Framework installation / adoption UX (Epic 6)  
**Affected areas:**

- [x] `install_greenfield_path.py` · `install_release_workflow.py`
- [x] `install-rc-checklist.yaml` · `validate_install_rc.py`
- [x] `INSTALL_IN_YOUR_PROJECT.md` · adopter preflight guides
- [ ] KMA agent implementation (handoff only)

**Estimated complexity:** Complex (2+ weeks)
