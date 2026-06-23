---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-23T14:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E04:S19:T14 — Planning: Spec, Tests, Implementation Plan (IPW)

**Host Task:** [`T14-fr-br-directory-rename-to-fbu-uxr032.md`](../kanban/epics/epic-04/story-19-fr-br-uxr-abstract-governance-and-intake/T14-fr-br-directory-rename-to-fbu-uxr032.md) **(E04:S19:T14)**  
**Planning for:** [UXR-032 — Rename intake directory `fbu/` → `fbu/`](../kanban/fbu/UXR-032-fr-br-directory-rename-to-fbu.md)  
**Status:** Approved

> **IPW (Implementation Planning Workflow):** Produced by IPW for E04:S19:T14. Phased delivery: Wave 1 framework/install/read-compat; Wave 2 ai-dev-kit corpus move + `fbu_root` config + drift guard.

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | Canonical intake path: `{kanban_root}/fbu/` | UXR-032 R1, T14 AC1 |
| RF2 | Canonical rw-config key `fbu_root`; fresh install emits `fbu_root` only | UXR-032 R2, T14 AC2 |
| RF3 | Read-compat: legacy `fbu_root` key and `fbu/` on-disk during transition | UXR-032 Notes, T14 AC5 |
| RF4 | `detect_fbu_root()` prefers `fbu/`; falls back `fbu/` | UXR-032 R4 |
| RF5 | Physical move ~254 intake files; no FR/BR/UXR filename prefix changes | FR-086, T14 AC6 |
| RF6 | Active-doc link sweep `fbu/` → `fbu/` | UXR-032 R3, T14 AC4 |
| RF7 | `packages/frameworks/**` + greenfield mirror synced | T14 AC3, FR-110 |
| RF8 | Adopter migration guide (brownfield; no mandatory symlink) | UXR-032 R5 |
| RF9 | Drift guard on new `docs/kanban/fbu` writes | UXR-032 R6 |
| RF10 | UXR-032 + four-surface RW Step 7 on release | T14 AC7 |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RNF1 | Immutable changelog archive may retain historical `fr-br` strings | UXR-032 Notes |
| RNF2 | Single shared resolver; no hardcoded `docs/kanban/fbu` | T14 scope |
| RNF3 | Idempotent migration helper for brownfield adopters | UXR-017 precedent |
| RNF4 | Coordinate with FR-118 if config phase concurrent | UXR-032 Dependencies |

### 1.3 Invariants and boundaries

- **Invariants:** Individual intake files keep `FR-` / `BR-` / `UXR-` prefixes (FR-086).
- **In scope:** Directory + config key + framework + active corpus links.
- **Out of scope:** `FR_BR_INTAKE_GUIDE.md` filename; portal locale UI; policy salience event ID renames.

---

## 2. Specification

### 2.1 Goal

Align the kanban intake **directory** and **rw-config key** with canonical **FBU** collective terminology (FR-086 / UXR-008), completing the naming normalization deferred from E04:S19:T06, with phased read-compat for adopters.

### 2.2 Specification mapping

RF1–RF4 define path/config contract and detection. RF5–RF7 define corpus and package migration. RF8–RF10 define adopter guidance, guards, and release reconciliation.

### 2.3 Constraints

- Shared FBU constants in `packages/frameworks/kanban/scripts/kanban_paths.py`.
- Wave 1 must not break ai-dev-kit until Wave 2 `git mv`.
- No filesystem symlink stub at `fbu/` — compat in code only.

### 2.4 Status transition intent

- **Current task status:** TODO → IN PROGRESS at implementation Step 1.
- **COMPLETE:** All T14 ACs + Wave 1 and Wave 2 evidence; RW per wave.
- **Atomic propagation:** Task doc + boards + UXR in same RW Step 7 session.

### 2.5 ADR necessity decision

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | Y | `fbu_root` only vs dual-key vs symlink stub |
| T2 | Reversibility | Y | Mass link sweep + adopter rw-config |
| T3 | Blast radius | Y | Framework, install, UKW, intake, KMA, 250+ files |
| T4 | Precedent | Y | Canonical for all ADK adopters |
| T5 | Constraint trade-off | N | Naming consistency |
| T6 | Governance contract | Y | rw-config schema, install mode C, validators |
| T7 | Supersedes | Y | FR-086 examples still cite `fbu/` |

**Outcome:** `REQUIRED` — [ADR-032](../architecture/standards-and-adrs/ADR-032-fbu-intake-directory-convention.md)

| ID | Exemption | Pass? | Evidence |
| -- | --------- | ----- | -------- |
| E1–E5 | — | — | Not applicable (REQUIRED) |

---

## 3. Test design

| ID | Behavior / layer | Expected check | Covers |
| -- | ---------------- | -------------- | ------ |
| T1 | Unit `kanban_paths.py` | `resolve_fbu_root_path` prefers `fbu/`, falls back `fbu/` | RF3, RF4 |
| T2 | `test_install_release_workflow_rw_config.py` | YAML contains `fbu_root:`; detects `fbu/` layout | RF2, RF4 |
| T3 | `test_update_kanban_docs.py` | FBU discovery uses resolver | RNF2 |
| T4 | `test_trigger_system.py` | Trigger globs include `fbu/` paths | RF6 |
| T5 | `validate_fbu_directory.py` | Fails on `fbu/` in active tree post-Wave 2 | RF9 |
| T6 | `rename_fbu_directory.py` fixture | Idempotent rename on temp tree | RNF3 |
| T7 | Manual | Fresh install mode C → `fbu/` + `fbu_root` | RF2, RF7 |

---

## 4. Implementation plan

| Step | Action | Deliverable | Wave |
| ---- | ------ | ----------- | ---- |
| **1** | **[MANDATORY]** `TODO → IN PROGRESS` | Task doc | 1 |
| 2 | ADR-032 + fbu-directory-migration-guide | D-C2, D-C3 | 1 |
| 3 | `kanban_paths.py` FBU constants + resolvers + unit tests | T1 | 1 |
| 4 | `install_release_workflow.py`: `detect_fbu_root`, emit `fbu_root` | RF2, RF4 | 1 |
| 5 | Replace hardcoded paths in workflow scripts + trigger_registry | RNF2 | 1 |
| 6 | Workflow YAML defaults + intake guides + policy | RF6 | 1 |
| 7 | `rename_fbu_directory.py` migration helper | RNF3 | 1 |
| 8 | Wave 1 pytest green | T1–T4 | 1 |
| 9 | **RW Wave 1** `RW E04:S19:T14` | version | 1 |
| 10 | `git mv docs/kanban/fbu` → `fbu` | RF5 | 2 |
| 11 | Active link sweep + `rw-config.yaml` | RF6 | 2 |
| 12 | `sync_greenfield_install.py` | RF7 | 2 |
| 13 | `validate_fbu_directory.py` + RW Step 9 wire | RF9 | 2 |
| 14 | Four-surface Step 7 + UXR-032 reconcile | RF10 | 2 |
| 15 | **RW Wave 2** `RW E04:S19:T14 --art` | BUILD +1 | 2 |
| **16** | **[MANDATORY]** Reconcile COMPLETE + UXR-032 | Closure | 2 |

### 4.1 Files to create or modify

- `packages/frameworks/kanban/scripts/kanban_paths.py`, `test_kanban_paths.py`
- `packages/frameworks/kanban/scripts/rename_fbu_directory.py`
- `packages/frameworks/workflow-mgt/scripts/install_release_workflow.py`
- `packages/frameworks/workflow-mgt/scripts/update_kanban_docs.py`, `trigger_registry.py`, `archive_completed.py`
- `packages/frameworks/workflow-mgt/scripts/validation/validate_fbu_directory.py`
- `docs/architecture/standards-and-adrs/ADR-032-*.md`, `fbu-directory-migration-guide.md`
- `docs/kanban/**` (Wave 2 link sweep + directory move)
- `rw-config.yaml` (Wave 2)

### 4.2 Dependency order

1. ADR + `kanban_paths` before script consumers.
2. Wave 1 framework before corpus `git mv`.
3. Corpus move before strict validator.

---

## 5. Documentation deliverables

### 5.1 Existing documents to update

| Doc ID | Path | Scope | Wave |
| ------ | ---- | ----- | ---- |
| D-U1 | `rw-config-schema.md` | `fbu_root` key | 1 |
| D-U2 | `kanban-governance-policy.md` | Path examples | 1 |
| D-U3 | `FR_BR_INTAKE_GUIDE.md`, `FR_BR_INTAKE_QUICK_REFERENCE.md` | Paths | 1 |
| D-U4 | `intake-structure.md` | Links | 2 |
| D-U5 | `rw-config.yaml` | `fbu_root` | 2 |
| D-U6 | `AGENTS.md`, `CLAUDE.md`, `.cursorrules` | Routing | 2 |
| D-U7 | `INSTALL_IN_YOUR_PROJECT.md` | Install contract | 1–2 |
| D-U8 | UXR-032 + T14 | Status + IPP link | 1–2 |

### 5.2 New documents to create

| Doc ID | Path | Purpose |
| ------ | ---- | ------- |
| D-C1 | This IPP | Planning package |
| D-C2 | ADR-032 | Canonical decision |
| D-C3 | fbu-directory-migration-guide.md | Adopter migration |

### 5.3 Documentation gaps

| Topic | Resolution |
| ----- | ---------- |
| Changelog archive | NONE — immutable (RNF1) |
| Portal/Docusaurus | NONE — no new adopter-public paths |

---

## 6. Documentation housing

| Doc ID | Canonical path | Publication status | Lifecycle |
| ------ | -------------- | ------------------ | --------- |
| D-C1 | `docs/implementation-cycles/IPP-E04S19T14-fr-br-directory-rename-to-fbu.md` | NOT_APPLICABLE | evergreen |
| D-C2 | `docs/architecture/standards-and-adrs/ADR-032-fbu-intake-directory-convention.md` | PUBLISHED | evergreen |
| D-C3 | `docs/architecture/standards-and-adrs/fbu-directory-migration-guide.md` | PUBLISHED | evergreen |
| D-U1–U8 | Per §5.1 | PUBLISHED | evergreen |

---

## 7. Success / verification criteria

- [ ] Wave 1: `detect_fbu_root` + resolver tests pass; install emits `fbu_root` on `fbu/` fixture
- [ ] Wave 1: ADR-032 + migration guide published
- [ ] Wave 2: `docs/kanban/fbu/` exists; `fbu/` absent
- [ ] Wave 2: `rw-config.yaml` has `fbu_root: docs/kanban/fbu`
- [ ] Wave 2: Greenfield mirror synced; validator `--strict` passes
- [ ] UXR-032 COMPLETE; T14 COMPLETE with version anchors

**RW prescription:** Wave 1 `RW E04:S19:T14`; Wave 2 `RW E04:S19:T14 --art` only (no `--dpz`).

---

## References

- [Host task E04:S19:T14](../kanban/epics/epic-04/story-19-fr-br-uxr-abstract-governance-and-intake/T14-fr-br-directory-rename-to-fbu-uxr032.md)
- [UXR-032](../kanban/fbu/UXR-032-fr-br-directory-rename-to-fbu.md)
- [FR-086](../kanban/fbu/FR-086-canonical-supporting-kanban-fbu-doc-naming-and-fbu-collective-terminology.md)
- [IPP-E04S19T11](IPP-E04S19T11-kanban-epic-story-path-lowercase-naming.md) (precedent)
- [ADR-032](../architecture/standards-and-adrs/ADR-032-fbu-intake-directory-convention.md)
