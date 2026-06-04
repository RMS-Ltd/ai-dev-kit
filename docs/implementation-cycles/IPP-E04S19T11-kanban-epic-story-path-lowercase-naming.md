---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-04T14:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E04:S19:T11 — Planning: Spec, Tests, Implementation Plan (IPW)

**Host Task:** [`T11-kanban-epic-story-path-lowercase-naming-uxr017.md`](../project-management/kanban/epics/epic-04/story-19-fr-br-uxr-abstract-governance-and-intake/T11-kanban-epic-story-path-lowercase-naming-uxr017.md) **(E04:S19:T11)**  
**Planning for:** [UXR-017 — Kanban epic/story path lowercase naming](../project-management/kanban/fr-br/UXR-017-kanban-epic-story-path-lowercase-naming.md)  
**Status:** Approved

> **IPW (Implementation Planning Workflow):** Produced by IPW for E04:S19:T11. Phased delivery: Wave 1 framework/install/tolerance; Wave 2 ai-dev-kit corpus + `rw-config.yaml`.

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | Write-default: `epic-{nn}/`, `story-{nn}-{slug}/`, `T{nn}-*.md` (2-digit ≤99; 3-digit >99) | UXR-017, T11 AC1 |
| RF2 | Fresh install + `canonical_adoption` emit lowercase paths | UXR-017 AC2 |
| RF3 | RW install defaults + `detect_kanban_doc_patterns()` prefer lowercase; score legacy + new | UXR-017 AC3, BR-083 |
| RF4 | Governance + `rw-config-schema` document write-default and read-tolerance | UXR-017 AC1–AC3 |
| RF5 | `validate_kanban_naming`: warn (Wave 1), error in corpus (Wave 2) on `Epic-`/`Story-` segments | UXR-017 R5 |
| RF6 | Wave 2: ai-dev-kit kanban tree renamed; `rw-config.yaml` lowercase patterns | UXR-017 AC4 |
| RF7 | Expenses Tracker replay checklist documented | UXR-017 AC5 |
| RF8 | UXR-017 COMPLETE when AC1–AC6 satisfied | UXR-017 |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RNF1 | Read-tolerance for legacy `Epic-`/`Story-` until adopters migrate | UXR-017 |
| RNF2 | Two-step `git mv` on case-insensitive filesystems | UXR-017 Finding 3 |
| RNF3 | Idempotent migration helper | Task scope |
| RNF4 | H1/title prose unchanged; `Txx-` task files unchanged | UXR-017 Notes |

### 1.3 Invariants and boundaries

- **Invariants:** 3-digit story padding; `Txx`/`Txxx` task naming per UXR-011.
- **In scope:** Path segments and filenames only; framework pack + ai-dev-kit + install/RW tooling.
- **Out of scope:** Epic/Story words in document titles; Expenses Tracker code changes in external repo (checklist only).

---

## 2. Specification

### 2.1 Goal

Adopt lowercase `epic-*` and `story-*` as the canonical filesystem convention for kanban epic/story directories and documents, with framework installers emitting the new layout, dual-case resolution during transition, and a phased migration of the ai-dev-kit reference corpus.

### 2.2 Specification mapping

RF1–RF4 define path contract and documentation. RF2–RF3 define emission and detection. RF5–RF6 define validation and corpus migration. RF7–RF8 close the UXR loop.

### 2.3 Constraints

- Shared constants in `packages/frameworks/kanban/scripts/kanban_paths.py` (single source of truth).
- Wave 1 must not break existing ai-dev-kit tree until Wave 2.

### 2.4 Status transition intent

- **Current task status:** TODO → IN PROGRESS at implementation Step 1.
- **COMPLETE:** All ACs + Wave 1 and Wave 2 evidence; `RW` per wave.
- **Atomic propagation:** Task doc + boards + UXR in same RW Step 7 session.

### 2.5 ADR necessity decision

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | Y | Phased vs big-bang; dual-case tolerance |
| T2 | Reversibility | Y | Mass rename + adopter rw-config |
| T3 | Blast radius | Y | Kanban + workflow mgt + adopters |
| T4 | Precedent | Y | Canonical path for all ADK projects |
| T5 | Constraint trade-off | N | UX consistency only |
| T6 | Governance contract | Y | rw-config, validators, install |
| T7 | Supersedes | Y | Policy examples use `Epic-`/`Story-` today |

**Outcome:** `REQUIRED` — [ADR-015](../architecture/standards-and-adrs/ADR-015-kanban-epic-story-path-lowercase-convention.md)

| ID | Exemption | Pass? | Evidence |
| -- | --------- | ----- | -------- |
| E1–E5 | — | — | Not applicable (REQUIRED) |

---

## 3. Test design

| ID | Behavior / layer | Expected check | Covers |
| -- | ---------------- | -------------- | ------ |
| T1 | Unit `kanban_paths.py` | Pattern strings use `epic-`/`story-` | RF1 |
| T2 | `test_install_release_workflow_patterns.py` | Lowercase detection wins when present | RF3 |
| T3 | `validate_kanban_naming` | Reports capitalised epic/story segments | RF5 |
| T4 | `migrate_structure` fixture | Fresh output dirs `epic-N` | RF2 |
| T5 | `update_kanban_docs` / validators | Resolve lowercase + legacy paths | RNF1 |
| T6 | Manual | Expenses Tracker post-install path checklist | RF7 |

---

## 4. Implementation plan

| Step | Action | Deliverable | Wave |
| ---- | ------ | ----------- | ---- |
| **1** | **[MANDATORY]** `TODO → IN PROGRESS` | Task doc | 1 |
| 2 | ADR-015 + epic-story-path-migration-guide | D2, D3 | 1 |
| 3 | `kanban_paths.py` + unit tests | T1 | 1 |
| 4 | Framework template tree rename + link fix | W1.3 | 1 |
| 5 | Kanban scripts: migrate, task_creator, validate_installation, detect | RF2 | 1 |
| 6 | `install_release_workflow.py` + pattern tests | RF3 | 1 |
| 7 | Dual-case in update_kanban_docs + validators | RNF1 | 1 |
| 8 | `validate_kanban_naming` warnings | RF5 | 1 |
| 9 | Policy + rw-config-schema + install KB | RF4 | 1 |
| 10 | **RW Wave 1** `RW E04:S19:T11` | v0.4.19.11+1 | 1 |
| 11 | `rename_kanban_epic_story_paths.py` + corpus mv | RF6 | 2 |
| 12 | Repo link sweep + `rw-config.yaml` | RF6 | 2 |
| 13 | Validator strict mode for ai-dev-kit epics root | RF5 | 2 |
| 14 | Expenses Tracker checklist in task doc | RF7 | 2 |
| 15 | **RW Wave 2** (same task, BUILD +1) | v0.4.19.11+2 | 2 |
| **16** | **[MANDATORY]** Reconcile COMPLETE + UXR-017 | Closure | 2 |

### 4.1 Files to create or modify

- `packages/frameworks/kanban/scripts/kanban_paths.py`, `test_kanban_paths.py`
- `packages/frameworks/kanban/scripts/migrate_structure.py`, `task_creator.py`, `validate_installation.py`, `detect_existing_structure.py`
- `packages/frameworks/kanban/scripts/rename_kanban_epic_story_paths.py`
- `packages/frameworks/workflow-mgt/scripts/install_release_workflow.py`, `update_kanban_docs.py`
- `packages/frameworks/workflow-mgt/scripts/validation/validate_kanban_naming.py`
- `packages/frameworks/kanban/templates/**` (epic/story renames)
- `docs/architecture/standards-and-adrs/ADR-015-*.md`, `epic-story-path-migration-guide.md`
- `docs/project-management/kanban/**` (Wave 2)
- `rw-config.yaml` (Wave 2)

### 4.2 Dependency order

1. ADR + `kanban_paths` before script consumers.
2. Framework emit paths before corpus rename.
3. Corpus rename before strict validator.

---

## 5. Documentation deliverables

### 5.1 Existing documents to update

| Doc ID | Path | Scope | Wave |
| ------ | ---- | ----- | ---- |
| D-U1 | `kanban-governance-policy.md` | File naming + paths | 1 |
| D-U2 | `rw-config-schema.md` + examples | Defaults | 1 |
| D-U3 | `rw-installer-quickstart-guide.md` | Post-kanban patterns | 1 |
| D-U4 | `rw-config.yaml` | Lowercase patterns | 2 |
| D-U5 | UXR-017 + T11 | Status + IPP link | 1–2 |
| D-U6 | `packages/frameworks/kanban/README.md` | Path examples | 1 |

### 5.2 New documents to create

| Doc ID | Path | Purpose |
| ------ | ---- | ------- |
| D-C1 | This IPP | Planning package |
| D-C2 | ADR-015 | Canonical decision |
| D-C3 | epic-story-path-migration-guide.md | Adopter migration |

### 5.3 Documentation gaps

| Topic | Resolution |
| ----- | ---------- |
| Expenses Tracker repo | NONE — checklist in T11 only |
| Portal/Docusaurus | NONE — path examples in framework docs |

---

## 6. Documentation housing

| Doc ID | Canonical path | Publication status | Lifecycle |
| ------ | -------------- | ------------------ | --------- |
| D-C1 | `docs/implementation-cycles/IPP-E04S19T11-kanban-epic-story-path-lowercase-naming.md` | NOT_APPLICABLE | evergreen |
| D-C2 | `docs/architecture/standards-and-adrs/ADR-015-kanban-epic-story-path-lowercase-convention.md` | PUBLISHED | evergreen |
| D-C3 | `docs/architecture/standards-and-adrs/epic-story-path-migration-guide.md` | PUBLISHED | evergreen |
| D-U1–U6 | Per §5.1 | PUBLISHED | evergreen |

---

## 7. Success / verification criteria

- [ ] Wave 1: Fresh install fixture uses `epic-*`/`story-*`; install pattern tests pass.
- [ ] Wave 1: ADR-015 + migration guide published; governance updated.
- [ ] Wave 2: `validate_kanban_naming.py` exit 0 on ai-dev-kit `kanban/epics/`.
- [ ] Wave 2: `rw-config.yaml` lowercase patterns; kboard links resolve.
- [ ] Expenses Tracker checklist recorded in T11.
- [ ] UXR-017 COMPLETE; T11 COMPLETE with version anchors.

---

## References

- [Host task E04:S19:T11](../project-management/kanban/epics/epic-04/story-19-fr-br-uxr-abstract-governance-and-intake/T11-kanban-epic-story-path-lowercase-naming-uxr017.md)
- [UXR-017](../project-management/kanban/fr-br/UXR-017-kanban-epic-story-path-lowercase-naming.md)
- [ADR-015](../architecture/standards-and-adrs/ADR-015-kanban-epic-story-path-lowercase-convention.md)
- [epic-story-path-migration-guide.md](../architecture/standards-and-adrs/epic-story-path-migration-guide.md)
- [UXR-011](../project-management/kanban/fr-br/UXR-011-kanban-naming-hygiene-and-directory-systematic-cleanup.md)
- [BR-083](../project-management/kanban/fr-br/BR-083-rw-install-default-patterns-mismatch-fresh-kanban-layout.md)
