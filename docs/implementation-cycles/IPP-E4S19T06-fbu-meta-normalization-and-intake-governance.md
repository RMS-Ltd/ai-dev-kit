---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-26T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E4:S19:T06 - Planning: Spec, Tests, Implementation Plan (IPP)

**Host Task:** [`T06-fbu-meta-normalization-and-intake-governance-uxr008-fr086-fr073.md`](../project-management/kanban/epics/Epic-4/Story-019-fr-br-uxr-abstract-governance-and-intake/T06-fbu-meta-normalization-and-intake-governance-uxr008-fr086-fr073.md) **(E4:S19:T06)**  
**Planning for:** [UXR-008](../project-management/kanban/fr-br/UXR-008-kboard-fbuboard-default-naming-adoption.md), [FR-086](../project-management/kanban/fr-br/FR-086-canonical-supporting-kanban-fbu-doc-naming-and-fbu-collective-terminology.md), [FR-073](../project-management/kanban/fr-br/FR-073-fr-br-uxr-board-open-taskless-intake-execution-plan.md)  
**Status:** Complete (Waves 1-5 implemented and published through `v0.4.19.6+5`)

---

## 1. Requirements (ascertained baseline)

### 1.1 Functional requirements

| ID | Requirement | Source |
| ---- | ---- | ---- |
| RF1 | Establish one canonical implementing task for UXR-008, FR-086, and FR-073 residual scope. | T06 AC1, T06 AC2 |
| RF2 | Define deterministic supporting-doc filename policy and old->new migration map for remaining in-scope kanban/FBU files. | UXR-008 AC3/AC4, FR-086-F1/F5, T05 AC1/AC2 |
| RF3 | Apply canonical `FBU` collective terminology in scoped docs without changing individual issue identities (`FR-*`, `BR-*`, `UXR-*`). | FR-086-F2/F4, T02 AC2/AC3 |
| RF4 | Preserve compatibility behavior for legacy long-form paths via redirect/alias notes and link rewiring. | UXR-008 AC5, FR-086-NF3, T05 AC5 |
| RF5 | Close FR-073 AC3 by planning a scoped board-statistics/taskless reconciliation pass under T06 ownership. | FR-073 AC3 |
| RF6 | Keep all task/story/board/FBU links bidirectionally wired to T06 and this IPP. | T06 AC7, FR-086 AC5, T05 AC6 |

### 1.2 Non-functional requirements

| ID | Requirement | Source |
| ---- | ---- | ---- |
| RNF1 | Deterministic outputs: repeated runs over unchanged inputs produce identical mapping and wording. | FR-086-NF1, T05 N1 |
| RNF2 | Historical traceability preserved when superseding T02/T05/T73 linkage. | FR-086-NF2 |
| RNF3 | Link integrity maintained for all touched docs. | FR-086 AC4, T05 AC3 |
| RNF4 | Scope remains documentation/governance; no runtime behavior changes in this planning package. | FR-086 scope |

### 1.3 Invariants and boundaries

- **Invariants:**
  - Individual issue filenames stay native (`FR-*`, `BR-*`, `UXR-*`).
  - Canonical board defaults remain `kboard.md` and `fbuboard.md`.
  - Superseded tasks retain history; they are not deleted.
- **In scope:** T06 ownership rewiring, naming policy, terminology contract, compatibility policy, FR-073 AC3 planning closure path.
- **Out of scope:** Executing full filename migration waves and release of downstream implementation changes beyond this planning/package publication.

### 1.4 Inherited planning sets reconciliation

This IPP absorbs and unifies the prior fragmented planning artifacts authored under the superseded tasks. No planning content is lost; each input artifact is mapped to the section of this IPP that now carries it.

| Inherited artifact | Origin task | Disposition under T06 | Mapped sections in this IPP |
| ---- | ---- | ---- | ---- |
| [`IPW-E4S19T02-canonical-supporting-kanban-fbu-doc-naming-and-terminology.md`](IPW-E4S19T02-canonical-supporting-kanban-fbu-doc-naming-and-terminology.md) (legacy `IPW-` prefix) | E4:S19:T02 (SUPERSEDED) | Migrated to canonical [`IPP-E4S19T02-...md`](IPP-E4S19T02-canonical-supporting-kanban-fbu-doc-naming-and-terminology.md); requirements + test ideas absorbed | §1.1 (RF3, RF4), §2.4 compatibility behavior, §2.5 terminology contract, §3 T1/T4 |
| [`IPP-E4S19T05-kanban-fr-br-uxr-filename-normalization.md`](IPP-E4S19T05-kanban-fr-br-uxr-filename-normalization.md) | E4:S19:T05 (SUPERSEDED) | Authoritative source for naming policy and migration mapping | §1.1 (RF2), §2.4 canonical filename mapping table |
| [`ICW-E4S19T05-specification.md`](ICW-E4S19T05-specification.md) | E4:S19:T05 (SUPERSEDED, pre-consolidation ICW set) | Folded into unified IPP per [FR-042](../project-management/kanban/fr-br/FR-042-implementation-planning-workflow-ipw.md) §7 ICW→IPW consolidation | §1, §2 |
| [`ICW-E4S19T05-test-design.md`](ICW-E4S19T05-test-design.md) | E4:S19:T05 (SUPERSEDED) | Consolidated | §3 test design |
| [`ICW-E4S19T05-implementation-plan.md`](ICW-E4S19T05-implementation-plan.md) | E4:S19:T05 (SUPERSEDED) | Consolidated and re-organized into wave plan | §4 implementation plan |
| FR-073 governance prose (Phase B/C closure under [`E5:S01:T73`](../project-management/kanban/epics/Epic-5/Story-001-fr-repo/T73-fr-br-uxr-board-open-taskless-intake-execution-plan.md)) | E5:S01:T73 (COMPLETE — historical anchor) | T73 retained for historical phases; AC3 (UKW/statistics pass) absorbed by T06 | §1.1 (RF5), §4 Wave 4 |

---

## 2. Specification

### 2.1 Goal

Create a single meta-governance planning contract for UXR-008, FR-086, and FR-073 by superseding fragmented task ownership and publishing one canonical IPP artifact that defines naming, terminology, compatibility, and board-governance closure requirements.

### 2.2 Specification mapping from ascertained requirements

- **Ownership consolidation (RF1/RF6):** All three FBU docs and relevant board/story/task surfaces must point to `E4:S19:T06` + `IPP-E4S19T06` as canonical references.
- **Naming policy (RF2):** Produce a canonical mapping table covering remaining legacy surfaces, explicitly including `fr-br-uxr-board.md` and `fr-br-uxr-open-taskless-queue.md` disposition.
- **Terminology contract (RF3):** Enforce collective `FBU` usage in scoped narrative docs while preserving individual FR/BR/UXR identity constraints.
- **Compatibility behavior (RF4):** Define redirect/alias guidance for retained legacy paths and link rewires.
- **FR-073 AC3 closure path (RF5):** Define a scoped UKW/statistics reconciliation activity as a mandatory implementation wave under T06.

### 2.3 Constraints

- Must align with FR-042 IPW/IPP conventions and current canonical `IPP-` artifact naming.
- Must preserve compatibility for existing references that still point to legacy long-form filenames until migration is completed.
- Must avoid timestamp churn or non-substantive `Last modified` rewrites while updating board surfaces.

### 2.4 Canonical filename policy and migration mapping

The canonical short-form pattern (`kboard.md`, `fbuboard.md`, `fbu-completed.md`, `fbu-structure.md`) extends to all remaining supporting docs in `docs/project-management/kanban/`. Individual issue files (`FR-*.md`, `BR-*.md`, `UXR-*.md`) and task files (`Txx-...md`) are out of scope per §1.3 invariants.

| Legacy path | Canonical target | Disposition | Status as of this IPP |
| ---- | ---- | ---- | ---- |
| `docs/project-management/kanban/fr-br-uxr-completed.md` | `docs/project-management/kanban/fbu-completed.md` | Migrated and legacy file removed | DONE in `v0.4.19.5+7` |
| `docs/project-management/kanban/fr-br-uxr-structure.md` | `docs/project-management/kanban/fbu-structure.md` | Migrated; legacy retained as compatibility-alias stub | DONE; alias retained |
| `docs/project-management/kanban/fr-br-uxr-board.md` | `docs/project-management/kanban/fbuboard.md` | Alias-only stub retained for compatibility; canonical board remains `fbuboard.md` | DONE in `E4:S19:T06` Wave 2 |
| `docs/project-management/kanban/fr-br-uxr-open-taskless-queue.md` | `docs/project-management/kanban/fbu-open-taskless-queue.md` | Canonical queue file created and legacy filename converted to alias-only stub | DONE in `E4:S19:T06` Wave 2 |
| `docs/project-management/kanban/fr-br/` directory | `docs/project-management/kanban/fbu/` *(decision pending)* | High-blast-radius rename; deferred pending impact analysis | DEFERRED — explicit retention until separately approved |
| Individual `FR-*.md`/`BR-*.md`/`UXR-*.md` | unchanged | Invariant: identity preserved per FR-086 | INVARIANT |
| Task docs `Txx-*.md` | unchanged | Out of scope per §1.3 | INVARIANT |

**Compatibility behavior:**

- Renamed supporting files leave a legacy-named stub that contains only YAML frontmatter, a `Legacy Alias:` header, and a one-line redirect link to the canonical file (mirrors current `fr-br-uxr-structure.md` style — see [example](../project-management/kanban/fr-br-uxr-structure.md)).
- Legacy `IPW-` prefixed artifacts have a canonical `IPP-`-prefixed copy/rename; legacy file may be retained as a redirect note pending downstream consumer migration.
- Cross-doc references in scoped surfaces are rewired to canonical paths; legacy paths remain resolvable for one release cycle minimum after migration.

### 2.5 Terminology contract

- `FBU` is the collective short-form for "FR/BR/UXR" in narrative prose, headings, and short labels in scoped supporting docs (e.g. `fbuboard.md` header, supporting-doc titles).
- Individual issue identity remains `FR-NNN`, `BR-NNN`, `UXR-NNN` — never `FBU-NNN`.
- Existing identifiers (`fr-br-uxr-board`, `fr-br-uxr-structure`) remain valid in legacy aliases and historical changelog text; they are not retroactively rewritten.

### 2.6 Status transition intent (mandatory)

- **Current task status:** IN PROGRESS
- **Transition trigger to IN PROGRESS:** Already satisfied at task creation (meta task filed as active governance work).
- **Transition trigger to COMPLETE:** Acceptance evidence recorded for all inherited ACs (including FR-073 AC3 closure evidence).
- **Atomic propagation requirement:** Task doc status and board row status must update in the same release/session.
- **Owner:** Implementation/release execution step (not planning-only IPP publication).

---

## 3. Test design

| ID | Behavior / layer | Expected check |
| -- | ---------------- | -------------- |
| T1 | Ownership rewiring | UXR-008, FR-086, FR-073 `Implementing Task` point to `E4:S19:T06`; superseded lineage retained in each doc. |
| T2 | Story/task supersede coherence | Story 019 shows T06 active and T02/T05 superseded; T73 marked historical successor linkage. |
| T3 | Board traceability | `fbuboard.md` rows for UXR-008/FR-086/FR-073 reference `E4:S19:T06` and `IPP-E4S19T06`. |
| T4 | Artifact naming contract | T06, FBU docs, and board use `IPP-` prefix for canonical planning artifact links; legacy `IPW-` references removed or explicitly compatibility-noted. |
| T5 | Legacy path policy coverage | Mapping table includes explicit disposition for `fr-br-uxr-board.md` and `fr-br-uxr-open-taskless-queue.md`. |
| T6 | Link integrity | All touched markdown links resolve (no dead links in touched docs). |
| T7 | FR-073 AC3 planning closure | IPP implementation waves contain explicit scoped UKW/statistics reconciliation step with evidence expectations. |

---

## 4. Implementation plan

The plan is organized as five sequential waves so each can be released atomically. Wave 1 (governance/wiring) is **complete and published as `v0.4.19.6+1`** by the RW that produced this IPP; Waves 2–4 are downstream TDD/RW build work; Wave 5 is the closing reconciliation.

### 4.1 Wave 1 — Governance, supersede, and IPP wiring  (DONE: `v0.4.19.6+1`)

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| 1.1 | File T06 meta task under Story 019 | T06 task doc with merged scope + ACs |
| 1.2 | Mark T02/T05 as `SUPERSEDED` and add successor anchor on T73 | Historical task docs preserved with redirect notes |
| 1.3 | Rewire UXR-008/FR-086/FR-073 `Implementing Task` to T06 with historical lineage preserved | Canonical implementing-task ownership in intake docs |
| 1.4 | Rewire Story 019 / Story 001 checklists and `fbuboard.md` rows | Canonical board/story/task traceability |
| 1.5 | Publish this IPP | Unified planning artifact for merged scope |
| 1.6 | Migrate legacy `IPW-E4S19T02-...md` to canonical `IPP-E4S19T02-...md` | Canonical artifact prefix used consistently; legacy file retained per compatibility policy |

### 4.2 Wave 2 — Canonical filename migration (close §2.4 PARTIAL/TODO rows)

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| 2.1 | Strip embedded legacy body from `fr-br-uxr-board.md`; reduce file to alias-only stub matching `fr-br-uxr-structure.md` shape | `fr-br-uxr-board.md` is alias-only |
| 2.2 | Rename `fr-br-uxr-open-taskless-queue.md` → `fbu-open-taskless-queue.md`; leave legacy filename as alias-only stub; rewire references | Canonical short-form path live; legacy alias retained |
| 2.3 | Rewire any cross-doc references that still point to legacy long-form paths in scope of this wave | Link integrity preserved |

### 4.3 Wave 3 — Terminology contract enforcement

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| 3.1 | Apply collective `FBU` wording in scoped narrative docs (board headers, supporting-doc intros) without renaming individual issues | Updated narrative prose |
| 3.2 | Verify no individual issue identity (`FR-*`/`BR-*`/`UXR-*`) was renamed | Identity guardrail evidence |

### 4.4 Wave 4 — FR-073 AC3 closure (UKW/statistics pass under T06 ownership)

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| 4.1 | Run a scoped UKW (or equivalent statistics pass) covering MoSCOW taskless table + Board Statistics, using **T06** as the active governance reference where doc-only changes need an anchor | DONE 2026-04-26 (scoped pass on `fbu-open-taskless-queue.md` + `fbuboard.md`) |
| 4.2 | Update `fbuboard.md` Board Statistics + MoSCOW taskless table accordingly; record evidence on T06 ACs | DONE 2026-04-26 (board statistics note + queue snapshot reconciliation + T06 AC6 evidence) |
| 4.3 | Flip FR-073 status from `PENDING` to `CLOSED` once AC3 evidence lands | DONE 2026-04-26 (`FR-073` status and AC3 updated) |

### 4.5 Wave 5 — Validation and stabilization

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| 5.1 | Run `validate_plan_wiring.py` across touched docs | Validation log |
| 5.2 | Run `validate_ipw_publication_wiring.py --requested E4:S19:T06` | Publication wiring confirmation |
| 5.3 | Run `update_kanban_docs.py --dry-run --mode full` to confirm no path-resolution regressions | Dry-run diff summary |
| 5.4 | Mark T06 ACs satisfied and flip T06 status to `COMPLETE` via RW once Waves 2–4 land | Closing release |

### 4.6 AC traceability matrix (inherited FBU/task ACs ↔ T06 ACs)

| Inherited AC (source) | Description | Mapped T06 AC | Mapped IPP RF | Resolved by Wave |
| ---- | ---- | ---- | ---- | ---- |
| UXR-008 AC3 | Canonical naming policy declared | T06 AC3 | RF2 | 1 (policy) + 2 (execution) |
| UXR-008 AC4 | Migration mapping published | T06 AC3 | RF2 | 1 (mapping in §2.4) |
| UXR-008 AC5 | Backward-compatibility behavior documented | T06 AC5 | RF4 | 1 (§2.4 compatibility behavior) |
| UXR-008 AC6 | Cross-wiring consistency across task/story/UXR/boards | T06 AC7 | RF6 | 1 |
| FR-086 F1 | Canonical naming map for supporting docs | T06 AC3 | RF2 | 1 (§2.4) |
| FR-086 F2/F4 | `FBU` collective terminology applied/disallowed contexts | T06 AC4 | RF3 | 1 (§2.5) + 3 (enforcement) |
| FR-086 F3 | Individual issue identity preserved | T06 AC4 | RF3 | Invariant per §1.3 |
| FR-086 F5/F6 | Cross-doc link rewiring + traceability | T06 AC7 | RF6 | 1 |
| T05 AC1 | Canonical filename policy | T06 AC3 | RF2 | 1 |
| T05 AC2 | Old→new mapping | T06 AC3 | RF2 | 1 (§2.4 table) |
| T05 AC3 | Markdown link rewiring | T06 AC7 | RF6 | 1 + 2 |
| T05 AC4 | Script/config path updates for renamed files | T06 AC5 | RF4 | 2 + 5 |
| T05 AC5 | Backward-compat migration guidance | T06 AC5 | RF4 | 1 (§2.4) |
| T05 AC6 | Cross-wiring after migration | T06 AC7 | RF6 | 1 + 2 |
| T02 AC1 | Canonical naming map for supporting docs (FBU) | T06 AC3/AC4 | RF2/RF3 | 1 |
| T02 AC2/AC3 | Terminology rules + identity preservation | T06 AC4 | RF3 | 1 (§2.5) + 3 |
| FR-073 AC3 | UKW/statistics pass anchored to canonical task | T06 AC6 | RF5 | 4 |

### 4.7 Files touched by Wave 1 (already published)

- `docs/project-management/kanban/epics/Epic-4/Story-019-fr-br-uxr-abstract-governance-and-intake/T06-fbu-meta-normalization-and-intake-governance-uxr008-fr086-fr073.md` (new)
- `docs/implementation-cycles/IPP-E4S19T06-fbu-meta-normalization-and-intake-governance.md` (new)
- `docs/implementation-cycles/IPP-E4S19T02-canonical-supporting-kanban-fbu-doc-naming-and-terminology.md` (new — canonical-prefix migration of legacy `IPW-E4S19T02-...md`)
- `docs/project-management/kanban/epics/Epic-4/Story-019-fr-br-uxr-abstract-governance-and-intake.md`
- `docs/project-management/kanban/epics/Epic-4/Story-019-fr-br-uxr-abstract-governance-and-intake/T02-canonical-supporting-kanban-fbu-doc-naming-and-fbu-collective-terminology-fr086.md`
- `docs/project-management/kanban/epics/Epic-4/Story-019-fr-br-uxr-abstract-governance-and-intake/T05-kanban-and-fr-br-uxr-filename-normalization-uxr008.md`
- `docs/project-management/kanban/epics/Epic-5/Story-001-fr-repo/T73-fr-br-uxr-board-open-taskless-intake-execution-plan.md`
- `docs/project-management/kanban/epics/Epic-5/Story-001-fr-repo.md`
- `docs/project-management/kanban/fr-br/UXR-008-kboard-fbuboard-default-naming-adoption.md`
- `docs/project-management/kanban/fr-br/FR-086-canonical-supporting-kanban-fbu-doc-naming-and-fbu-collective-terminology.md`
- `docs/project-management/kanban/fr-br/FR-073-fr-br-uxr-board-open-taskless-intake-execution-plan.md`
- `docs/project-management/kanban/fbuboard.md`

---

## 5. Success / verification criteria

Runnable validators (from [`packages/frameworks/workflow mgt/scripts/validation/`](../../packages/frameworks/workflow%20mgt/scripts/validation/)):

- [ ] `python3 "packages/frameworks/workflow mgt/scripts/validation/validate_plan_wiring.py"` — currently blocked by pre-existing unrelated issue (`E5:S01:T75` missing Host Task link); no new T06 wiring regressions observed.
- [x] `python3 "packages/frameworks/workflow mgt/scripts/validation/validate_ipw_publication_wiring.py" --requested E4:S19:T06` — passes (published Wave 1 used `Publication Status: NOT_APPLICABLE` per consolidated IPP model).
- [x] `python3 "packages/frameworks/workflow mgt/scripts/update_kanban_docs.py" --dry-run --mode full` — no path-resolution regressions for renamed files.

Deliverable checks:

- [x] T06 exists and is the canonical implementing task for UXR-008, FR-086, FR-073.
- [x] T02 and T05 are marked superseded; T73 includes successor governance anchor.
- [x] `fbuboard.md` rows for UXR-008/FR-086/FR-073 point to T06 and `IPP-E4S19T06`.
- [x] All touched docs use canonical `IPP-` artifact naming (legacy `IPW-E4S19T02-...md` migrated to canonical `IPP-E4S19T02-...md`).
- [x] `fr-br-uxr-board.md` is reduced to alias-only stub (Wave 2).
- [x] `fr-br-uxr-open-taskless-queue.md` is renamed to `fbu-open-taskless-queue.md` with legacy alias retained (Wave 2).
- [x] FR-073 AC3 closure evidence recorded under T06 (Wave 4).
- [x] T06 status flipped to `COMPLETE` after Waves 2–4 (Wave 5).

---

## References

- [Host task E4:S19:T06](../project-management/kanban/epics/Epic-4/Story-019-fr-br-uxr-abstract-governance-and-intake/T06-fbu-meta-normalization-and-intake-governance-uxr008-fr086-fr073.md)
- [UXR-008](../project-management/kanban/fr-br/UXR-008-kboard-fbuboard-default-naming-adoption.md)
- [FR-086](../project-management/kanban/fr-br/FR-086-canonical-supporting-kanban-fbu-doc-naming-and-fbu-collective-terminology.md)
- [FR-073](../project-management/kanban/fr-br/FR-073-fr-br-uxr-board-open-taskless-intake-execution-plan.md)
- [T02](../project-management/kanban/epics/Epic-4/Story-019-fr-br-uxr-abstract-governance-and-intake/T02-canonical-supporting-kanban-fbu-doc-naming-and-fbu-collective-terminology-fr086.md)
- [T05](../project-management/kanban/epics/Epic-4/Story-019-fr-br-uxr-abstract-governance-and-intake/T05-kanban-and-fr-br-uxr-filename-normalization-uxr008.md)
- [T73](../project-management/kanban/epics/Epic-5/Story-001-fr-repo/T73-fr-br-uxr-board-open-taskless-intake-execution-plan.md)
