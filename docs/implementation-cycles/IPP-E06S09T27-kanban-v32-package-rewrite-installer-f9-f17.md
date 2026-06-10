---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-10T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E06:S09:T27 — Planning: Kanban v3.2 package rewrite for installer (IPW)

**Host Task:** [`T27-kanban-v32-package-rewrite-installer-f9-f17.md`](../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T27-kanban-v32-package-rewrite-installer-f9-f17.md) **(E06:S09:T27)**  
**Planning for:** F9/F17 · [T26 Attempt 05 gate](../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T26-starborn-legacy-adk-install-program.md)  
**Status:** Approved

---

## 1. Requirements

### 1.1 Functional requirements

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | Fresh install uses v3.2 Small-tier epic list E01–E10 | 09-ultimate-canonical v3.2, T27 AC1 |
| RF2 | `templates/epics/` primary resolution ships v3.2 titles (E05 Project Architecture) | F17 root cause, attempt 04 |
| RF3 | E04:S02–S04 stories installed on fresh (FR/BR/UXR intake) | v3.2 P4, T27 AC2 |
| RF4 | Fingerprint validator blocks v1 catalog (`Epic 5: FR Implementation`) | T26 attempt 05 gate #4 |
| RF5 | `greenfield-install/` mirror synced | FR-110, P-GREENFIELD-SYNC |
| RF6 | INSTALL documents v3.2 fresh contract | T27 AC5 |

### 1.2 Non-functional requirements

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RNF1 | Single SoT module for v3.2 epic/story lists | maintainability |
| RNF2 | Backward compatible brownfield migration modes unchanged | FR-081 |
| RNF3 | Tests cover epic list + fingerprint | ICW pattern |

### 1.3 Boundaries

- **In scope:** Epic list, primary `templates/epics/*` v3.2 remap, E04 core stories on fresh, fingerprint validator, sync, INSTALL note
- **Out of scope:** Full Wave 2 nested layout delete; F10/F18–F20; SBL attempt 05 execution

---

## 2. Specification

### 2.1 Goal

Enable `--mode fresh` to install the ratified Kanban v3.2.0 Small-tier catalog so the next SBL install attempt gets Project Architecture at E05 and FR intake at E04:S02 — not the v1 FR epic.

### 2.2 Key design

- **`kanban_v32_catalog.py`:** `V32_FRESH_EPICS`, `V32_FRESH_STORIES`, `assert_v32_fingerprint(kanban_path)`
- **`migrate_structure.py`:** `_install_canonical_epics` uses `V32_FRESH_EPICS`; new `_install_v32_core_stories`
- **`install_canonical_epics_only`:** epics + core stories
- **Templates:** Replace `epic-05-FR-Implementation.md` → `epic-05-Project-Architecture.md` (and E01/E06/E07/E08/E09/E10 primary epics)
- **Validator:** `validate_kanban_v32_fingerprint.py`

### 2.3 ADR necessity

**Outcome:** **EXEMPT** — executes ratified [09-ultimate-canonical v3.2](../knowledge/analysis/kanban-v2/09-ultimate-canonical-kanban-structure-v3.md); no new architectural fork.

---

## 3. Test design

| ID | Layer | Expected check |
| -- | ----- | -------------- |
| T1 | Unit | `V32_FRESH_EPICS` excludes 18, 22, 23; includes 9 |
| T2 | Unit | Fingerprint rejects v1 `Epic 5: FR Implementation` title |
| T3 | Unit | Fingerprint accepts v3.2 E05 + E04:S02 paths |
| T4 | Integration | `install_canonical_epics_only` on tmpdir → fingerprint PASS |

**File:** `tests/kanban/test_kanban_v32_fresh_install.py`

---

## 4. Implementation plan

| Step | Action |
| ---- | ------ |
| **1** | **E06:S09:T27 TODO → IN PROGRESS**; link IPP |
| 2 | Add `kanban_v32_catalog.py` |
| 3 | Update `migrate_structure.py` epic list + story install |
| 4 | Remap `templates/epics/epic-{01,05,06,07,08,09,10}-*.md` to v3.2 |
| 5 | Update `templates/epic-04/epic-04.md` story checklist; add E04:S02–S04 story stubs |
| 6 | Add `validate_kanban_v32_fingerprint.py` |
| 7 | Tests T1–T4 |
| 8 | `sync_greenfield_install.py`; INSTALL note |
| 9 | Update T26 attempt 05 authorization |
| **N** | Reconcile T27 status; RW **E06:S09:T27** |

### 4.1 Files

- `packages/frameworks/kanban/scripts/kanban_v32_catalog.py` (new)
- `packages/frameworks/kanban/scripts/migrate_structure.py`
- `packages/frameworks/kanban/templates/epics/epic-*.md` (v3.2 primary)
- `packages/frameworks/kanban/templates/epic-04/` story stubs
- `packages/frameworks/workflow-mgt/scripts/validation/validate_kanban_v32_fingerprint.py` (new)
- `tests/kanban/test_kanban_v32_fresh_install.py` (new)
- `INSTALL_IN_YOUR_PROJECT.md` (section)

---

## 5. Documentation deliverables

| Doc ID | Path | Change |
| ------ | ---- | ------ |
| D-U1 | `INSTALL_IN_YOUR_PROJECT.md` | v3.2 fresh-install fingerprint note |
| D-U2 | `T26-starborn-legacy-adk-install-program.md` | Link T27; attempt 05 prereq |
| D-U3 | `starborn-legacy-install-triage-matrix.md` | T27 delivery note |

---

## 6. Documentation housing

All under existing paths per specification-and-planning-artifacts-policy.

---

## 7. Success / verification criteria

- [ ] `pytest tests/kanban/test_kanban_v32_fresh_install.py` green
- [ ] `validate_kanban_v32_fingerprint.py --strict` on tmp fresh install green
- [ ] `sync_greenfield_install.py --check` green
- [ ] T27 AC1–AC5 evidenced in task doc
