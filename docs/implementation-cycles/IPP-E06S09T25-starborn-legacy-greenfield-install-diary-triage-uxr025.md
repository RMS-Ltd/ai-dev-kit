---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-09T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E06:S09:T25 — Planning: Spec, Tests, Implementation Plan (IPW)

**Host Task:** [`T25-starborn-legacy-greenfield-install-diary-triage-uxr025.md`](../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T25-starborn-legacy-greenfield-install-diary-triage-uxr025.md) **(E06:S09:T25)**  
**Planning for:** [UXR-025](../kanban/fbu/UXR-025-starborn-legacy-greenfield-install-diary.md) · [Diary](../knowledge/analysis/projects/starborn-legacy-greenfield-install-diary.md)  
**Status:** Approved

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | Publish triage matrix for F1–F8 (fix / doc / defer / adopter decision) | T25 AC1, UXR-025 AC1 |
| RF2 | Orchestrator `--non-interactive` must not block on RW prompts | UXR-025 F4, T25 |
| RF3 | Orchestrator `--config` forwarded to `install_release_workflow.py` | Diary Phase 5 workaround |
| RF4 | Vendor-only layout: resolve installer paths under `vendor_root/packages/` without manual `packages` symlink | UXR-025 F5 |
| RF5 | Docs: clean-tree preflight; tarball when disk-constrained | F1, F2 |
| RF6 | Docs: lean RW partial (no local `workflows/`) | F6 |
| RF7 | Docs: SBL scope closure — legacy E/S/T retained (FR-081 deferral) | F8, AC5 |
| RF8 | Advance UXR-025 toward RESOLVED when AC1–AC3 satisfied | UXR-025 |

### 1.2 Non-functional requirements

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RNF1 | Preserve `ADK-I01.S01` / `ADK-I01.S02` on subprocess failure | FR-108 |
| RNF2 | Greenfield mirror sync after `packages/frameworks/` changes | FR-110 |
| RNF3 | Backward compatible when `project_root/packages/frameworks` exists | T25 |
| RNF4 | No false claim SBL adopted ADK template kanban | T25 AC5 |

### 1.3 Invariants and boundaries

- **In scope:** Triage matrix, orchestrator fix, tests, install docs, greenfield README sync
- **Out of scope:** SBL app restore, brownfield kanban migration, FR-079 feedback template (defer)

---

## 2. Specification

### 2.1 Goal

Make lean-vendor greenfield (`--vendor-root` + `--non-interactive`) work without Starborn workarounds while publishing maintainer triage of the install diary.

### 2.2 Orchestrator design

- `resolve_frameworks_base(project_root, vendor_root)` — project `packages/frameworks` wins; else vendor tree
- Absolute subprocess paths under resolved base
- `--config` and `--non-interactive` forwarded to RW installer

### 2.3 Constraints

- Extends FR-080 orchestrator; no new delivery channel

### 2.4 Status transition intent

- **Step 1:** TODO → IN PROGRESS on first implementation change
- **Final:** COMPLETE when T25 AC1–AC5 evidenced via RW

### 2.5 ADR necessity decision

| ID | Y/N | Evidence |
| -- | --- | -------- |
| T1–T6 | N | Single-script fix under FR-080 |
| T7 | Y | Extends existing greenfield contract |

**Outcome:** **EXEMPT** — no new ADR; cite [FR-080](../kanban/fbu/FR-080-greenfield-installation-process.md).

---

## 3. Test design

| ID | Layer | Requirement | Expected check |
| -- | ----- | ----------- | -------------- |
| T1 | Unit | RF4 | `resolve_frameworks_base` vendor vs project precedence |
| T2 | Unit | RF2, RF3 | RW argv includes `--non-interactive`, `--config` when set |
| T3 | Integration | RF2, RF4, RF5 | `--dry-run` prints vendor-absolute RW path |
| T4 | Regression | RNF1 | `test_adk_install_errors.py` green |
| T5 | Regression | RNF2 | `sync_greenfield_install.py --check` green |

**File:** `tests/workflow_mgt/test_install_greenfield_path.py`

---

## 4. Implementation plan

| Step | Action |
| ---- | ------ |
| **1** | **E06:S09:T25 TODO → IN PROGRESS**; link IPP |
| 2 | Triage matrix artifact |
| 3 | Refactor `install_greenfield_path.py` |
| 4 | Add tests |
| 5 | INSTALL + greenfield README updates |
| 6 | `sync_greenfield_install.py` |
| 7 | Kanban / UXR sync |
| 8 | **RW E06:S09:T25 --art** (BUILD +1; no `--dpz`) |
| **N** | Status reconcile → COMPLETE when ACs evidenced |

**RW rule (BR-097):** Post-ship → `RW E06:S09:T25 --art` only.

### 4.1 Files

- **Modify:** `packages/frameworks/workflow-mgt/scripts/install_greenfield_path.py`, `INSTALL_IN_YOUR_PROJECT.md`, `greenfield-install/README.md`
- **Create:** `tests/workflow_mgt/test_install_greenfield_path.py`, `docs/knowledge/analysis/projects/starborn-legacy-install-triage-matrix.md`
- **Sync:** `greenfield-install/packages/frameworks/workflow-mgt/scripts/install_greenfield_path.py`

---

## 5. Documentation deliverables

| Doc ID | Path | Action |
| ------ | ---- | ------ |
| D-C1 | `docs/implementation-cycles/IPP-E06S09T25-*.md` | CREATE |
| D-C2 | `docs/knowledge/analysis/projects/starborn-legacy-install-triage-matrix.md` | CREATE |
| D-U1 | `INSTALL_IN_YOUR_PROJECT.md` | UPDATE |
| D-U2 | `greenfield-install/README.md` | UPDATE |
| D-U3 | T25, UXR-025 | UPDATE |

---

## 6. Documentation housing

| Doc ID | Path | Publication | Lifecycle |
| ------ | ---- | ----------- | --------- |
| D-C1 | `docs/implementation-cycles/` | PUBLISHED (portal autogen) | evergreen |
| D-C2 | `docs/knowledge/analysis/projects/` | NOT_APPLICABLE (maintainer analysis) | evergreen |
| D-U1 | `INSTALL_IN_YOUR_PROJECT.md` | NOT_APPLICABLE (repo root) | evergreen |
| D-U2 | `greenfield-install/README.md` | NOT_APPLICABLE (vendor tree) | evergreen |

---

## 7. Success / verification criteria

- [x] Triage matrix committed and linked from UXR-025
- [x] F4/F5 fixed with tests green
- [x] Install docs updated (tarball, vendor-root, lean RW partial, FR-081 note)
- [x] `sync_greenfield_install.py --check` pass
- [x] RW E06:S09:T25 --art complete (v0.6.9.25+2)
- [x] T25 AC1–AC5 satisfied; UXR-025 RESOLVED

---

## References

- [UXR-025](../kanban/fbu/UXR-025-starborn-legacy-greenfield-install-diary.md)
- [Diary](../knowledge/analysis/projects/starborn-legacy-greenfield-install-diary.md)
- [FR-080](../kanban/fbu/FR-080-greenfield-installation-process.md)
- [FR-081](../kanban/fbu/FR-081-brownfield-modular-adopter-integration.md)
- [E06:S09:T01](../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T01-greenfield-installation-process-fr080.md)
