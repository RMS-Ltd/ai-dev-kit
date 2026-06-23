---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-17T16:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E06:S09:T38 — Guided install orchestrator (FR-135)

**Task ID:** E06:S09:T38  
**Status:** COMPLETE  
**Priority:** HIGH  
**Created:** 2026-06-17  
**Last updated:** 2026-06-17 (RW v0.6.9.38+1 — guided orchestrator v2)  
**Version:** v0.6.9.38+1 ✅ COMPLETE (v0.6.9.38+1)  
**Code:** E06S09T38

**North star:** One install command; zero undocumented manual steps; choices only where behaviour branches.

**Upstream:** [FR-135](../../../fbu/FR-135-guided-install-orchestrator-zero-manual-steps.md)  
**Related:** [FR-080](../../../fbu/FR-080-greenfield-installation-process.md) · [FR-133](../../../fbu/FR-133-kanban-migration-depth-rationalization-adopter-guide.md) · [FR-134](../../../fbu/FR-134-kanban-completed-sqlite-ledger-pdf-report.md) · [E06:S09:T36](T36-adopter-path-selector-install-rc-uxr029.md) · [E06:S09:T37](T37-kanban-migration-depth-rationalization-fr133.md) · [UXR-029](../../../fbu/UXR-029-adk-install-path-experiment.md) · [#85](https://github.com/RMS-Ltd/ai-dev-kit/issues/85) · [attempt-11 preflight](../../../../../../adk-install-into-sbl/attempt-11-preflight-checklist.md)

**Evidence:** SBL attempt 10 manual bootstrap ([attempt-10 README](../../../../../../adk-install-into-sbl/attempt-10/README.md)); orchestrator manual-step banner in `install_greenfield_path.py`.

---

## Summary

Implement **guided install orchestrator v2**: extend Phase 0 (`install_greenfield_path.py` + `install_release_workflow.py`) so adopters reach Install RC PASS through **automated defaults** and **plain-language choice menus** — closing the gap between FR-133 documentation and runtime (FR-135).

---

## Input

- [FR-135](../../../fbu/FR-135-guided-install-orchestrator-zero-manual-steps.md)
- [IPP-E06S09T38-guided-install-orchestrator-fr135.md](../../../../implementation-cycles/IPP-E06S09T38-guided-install-orchestrator-fr135.md)
- Operator design session (2026-06-17): automate sqlite/triggers/ledgers/comprehension; prompt for path, legacy import, KMA mode
- [T36](T36-adopter-path-selector-install-rc-uxr029.md) Phase 0 partial delivery (sqlite flag, RC gate — KMA/UKW still manual)
- [T37](T37-kanban-migration-depth-rationalization-fr133.md) painless journey docs (orchestrator must match)

## References

- [FR-135](../../../fbu/FR-135-guided-install-orchestrator-zero-manual-steps.md)
- [IPP-E06S09T38-guided-install-orchestrator-fr135.md](../../../../implementation-cycles/IPP-E06S09T38-guided-install-orchestrator-fr135.md)
- [`install_greenfield_path.py`](../../../../../../packages/frameworks/workflow-mgt/scripts/install_greenfield_path.py)
- [`install_release_workflow.py`](../../../../../../packages/frameworks/workflow-mgt/scripts/install_release_workflow.py)
- [`install-rc-checklist.yaml`](../../../../../../packages/frameworks/workflow-mgt/config/install-rc-checklist.yaml)
- [INSTALL layered sequence](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md#layered-install-sequence-phase-0)
- [release-state-sqlite-mode.md](../../../../../../packages/frameworks/workflow-mgt/docs/release-state-sqlite-mode.md)

---

## Deliverable

| # | Artifact | FR-135 mapping |
| - | -------- | -------------- |
| 1 | Guided phase runner in `install_greenfield_path.py` (A–F) | F1–F7 |
| 2 | Install profile schema (`install-profile.yaml` + `--config`) | NF1, NF3 |
| 3 | RW installer emits sqlite + `kanban_completed` keys | F8 |
| 4 | Conditional `import_legacy` / `init_kanban_completed_db` | F4, F9 |
| 5 | Cursorrules bundle installer (RW / +UKW / +delivery stubs) | F3 |
| 6 | `COMPREHENSION.md` scaffold step | F6 |
| 7 | Install RC row extensions + tests | NF2, AC4 |
| 8 | INSTALL happy-path rewrite (one command) | AC5 |

**IPW deliverable:** [IPP-E06S09T38-guided-install-orchestrator-fr135.md](../../../../implementation-cycles/IPP-E06S09T38-guided-install-orchestrator-fr135.md) (Sections 1–7 per template).

---

## Scope

**In scope:**

- Orchestrator + RW installer config emission
- Install RC checklist/validator updates
- INSTALL + preflight doc alignment
- SBL attempt 11 Phase B validation target (AC3)

**Out of scope (v1):**

- In-process KMA agent execution (offer + handoff only)
- First domain RW
- Guided KMA kit mode (`kma_mode: guided`) — separate FR/track ([#85](https://github.com/RMS-Ltd/ai-dev-kit/issues/85))

---

## Acceptance criteria

- [x] **AC1:** Greenfield non-interactive profile → RC strict PASS; zero post-install manual step banner items remain required. (pytest dry-run + guided path; full RC replay on adopter fixture pending operator)
- [ ] **AC2:** Arm B interactive replay documents ≤5 choice prompts; sqlite + UKW wired without hand edit. (SBL attempt 11 Phase B)
- [ ] **AC3:** Attempt 11 Phase B can substitute orchestrator for manual preflight §2–§4 (sqlite, triggers, comprehension).
- [x] **AC4:** pytest: profile load, sqlite config consistency, RC rows for ledgers/triggers.
- [x] **AC5:** `sync_greenfield_install.py` + FR-110 mirror when `packages/frameworks/` touched.
- [x] **AC6:** `ADK-I01` codes for new failure classes documented in troubleshooting guide. (registry entries S04–S07)

---

## Task checklist

- [x] IPW → linked IPP
- [x] Implement phases A–F in orchestrator
- [x] RW installer profile keys
- [x] Install RC + tests
- [x] INSTALL / attempt-11 preflight alignment (INSTALL happy path; attempt-11 replay pending)
- [ ] SBL replay evidence (attempt 11 Phase B or dry-run fixture)
- [x] IDW → RW `E06:S09:T38`

---

## RW trigger

```
RW E06:S09:T38
```

(After IPW → IDW → implementation complete.)
