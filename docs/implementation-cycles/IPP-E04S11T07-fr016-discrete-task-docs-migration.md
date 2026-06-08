---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E04:S11:T07 — Planning: Spec, Tests, Implementation Plan (IPW)

**Host Task:** [`T07-planning-spec-tests-impl.md`](../kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs/T07-planning-spec-tests-impl.md) **(E04:S11:T07)**  
**Planning for:** [FR-016](../kanban/fr-br/FR-016-kanban-granularity-discrete-task-docs.md)  
**Status:** Approved

> **IPW:** Consolidated IPP for FR-016 embedded-to-discrete Task document migration (~784 embedded tasks). Supersedes split planning in task doc §1–§3 and references [ICW-E4S11T07-specification.md](ICW-E4S11T07-specification.md) as retrospective input (folded per [dev-kit-ipw-ipp-vs-icw-artifacts.md](../governance/standards/dev-kit-ipw-ipp-vs-icw-artifacts.md)). Operational migration detail: [migration-plan-embedded-to-discrete-tasks.md](../kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs/migration-plan-embedded-to-discrete-tasks.md).

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | Extract all embedded task sections from Story documents into discrete Task documents | FR-016:R01/R05, T07, migration plan |
| RF2 | Update Story documents to reference discrete Task docs (checklist + links; no embedded bodies) | FR-016:R05, T07 FR-2 |
| RF3 | Generated Task docs follow `TASK_TEMPLATE.md` with required fields (ID, Scope, Input, Deliverable, AC, Status, Version Anchor) | FR-016:R02, T07 FR-4 |
| RF4 | Zero embedded tasks remain after migration (or documented exceptions in migration plan) | T07 FR-5 |
| RF5 | RW Step 1 and validators locate every Task document reliably | FR-016:R03, T07 FR-6 |
| RF6 | Migration preserves content fidelity (no information loss) | T07 FR-8, migration plan §5.1 |
| RF7 | Task file naming: `T{task:02d}-{slug}.md` under Story directory | migration plan §2.3 |
| RF8 | Story checklist format: `- [x] **E{epic}:S{story}:T{task}** – Name` with link to discrete doc | T07 FR-10 |
| RF9 | Phased rollout by Epic with validation gate after each phase | migration plan §2.2, §6 |
| RF10 | Migration tooling: extract, generate, update-story, validate scripts under `workflow-mgt/scripts/kanban/` | T07 §4, migration plan §3 |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RNF1 | **Traceability:** Auditable mapping task → version anchor per migrated doc | FR-016:NF01 |
| RNF2 | **Validation:** Automated post-migration checks (embedded count, broken refs, required fields) | FR-016:NF02 |
| RNF3 | **Governance:** Reduces scope drift; aligns with FR-017 doc-init for new tasks | FR-016:NF03, FR-017 |
| RNF4 | **Idempotency:** Re-running migration on migrated Story is safe (no duplication) | T07 TC12 |
| RNF5 | **Rollback:** Story backups + per-Epic rollback on failure | migration plan §5.2 |
| RNF6 | Changelog language: "change implemented" until user verifies migration completeness | RW policy |

### 1.3 Invariants and boundaries

- **Invariants:** Epic → Story → Task 3-tier structure; existing discrete Task docs (43 examples) remain authoritative where already migrated.
- **In scope:** 784 embedded task references; migration scripts; validation; migration plan TBD fill; pilot + phased Epic rollout.
- **Out of scope:** Creating new tasks; changing task semantics; UKW/RW workflow redesign beyond FR-016 alignment; E2:S09 RW-integration work (separate story).

---

## 2. Specification

### 2.1 Goal

Deliver a validated, phased migration that converts all embedded Kanban tasks in Story documents into discrete Task document files, achieving FR-016 compliance so RW Step 1 and Epic/Story/Task validators can reliably resolve every task anchor across the repository.

### 2.2 Specification mapping from ascertained requirements

RF1–RF3 are satisfied by the hybrid migration pipeline (extract → generate → update-story) using canonical templates. RF4–RF5 are verified by `validate_migration.py` and existing RW validators. RF6–RF8 follow [migration-plan-embedded-to-discrete-tasks.md](../kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs/migration-plan-embedded-to-discrete-tasks.md) naming and checklist patterns. RF9–RF10 define the phased delivery waves in §4.

**Embedded task detection (canonical patterns):**

- Header: `### E{epic}:S{story}:T{task} – Task Name` or `## E{epic}:S{story}:T{task}`
- Variants: `**E{epic}:S{story}:T{task}**`, `T{task} – Name`
- Content boundary: from header until next task header or `## ` section
- Edge cases: nested `####` subsections, incomplete fields (placeholder/TODO), multi-block spans

### 2.3 Constraints

- **Hybrid approach mandatory** (automated extraction + manual review for edge cases) — see migration plan §2.1.
- **Epic-priority rollout:** Pilot (E04:S11 or E06:S07 subset) → Epic 1, 2, 4 → remaining core Epics → ancillary Epics.
- **No mass commit outside RW:** Each Epic wave ships via `RW E04:S11:T07 --art` after validation.
- **BR-097:** Post-ship verification waves use `RW E04:S11:T07 --art` only; never `--doc-policy-zero` after tagged BUILD.

### 2.4 Status transition intent

- **Current task status:** TODO
- **Transition trigger to IN PROGRESS:** First non-planning implementation change (Wave 1 script or catalog analysis lands in repo).
- **Transition trigger to COMPLETE:** All acceptance criteria satisfied with evidence: zero embedded tasks (or documented exceptions), validators pass, migration completion report published.
- **Atomic propagation requirement:** Task doc status and `kboard.md` row update in the same change set/session as status transitions.
- **Owner:** Implementation execution (§4 Step 1 and final reconciliation step).

### 2.5 ADR necessity decision

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | Y | Hybrid vs fully automated vs fully manual — migration plan §2.1 selects hybrid |
| T2 | Reversibility | Y | 784-task migration touches all Story docs; rollback is per-Epic backup restore |
| T3 | Blast radius | Y | All Epics, framework scripts, RW Step 1 task resolution |
| T4 | Precedent | Y | Migration scripts become canonical tooling for adopters |
| T5 | Constraint trade-off | N | Trade-offs documented in existing FR-016 / migration plan |
| T6 | Governance contract | Y | Enables FR-016:R03 RW Step 1 + validator enforcement |
| T7 | Supersedes | N | Implements FR-016; does not contradict existing ADRs |

**Outcome:** **REQUIRED** — UPDATE [migration-plan-embedded-to-discrete-tasks.md](../kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs/migration-plan-embedded-to-discrete-tasks.md) as operational architecture record (fill TBD catalog, link scripts, finalize phased timeline). No separate ADR CREATE — FR-016 + migration plan govern; ADR row is UPDATE not CREATE.

| ID | Exemption (only if all T = N) | Pass? | Evidence |
| -- | --------------------------- | ----- | -------- |
| E1 | Single locus | — | N/A (triggers Y) |
| E2 | No new options | — | N/A |
| E3 | Reversible in one task | — | N/A |
| E4 | Spec elsewhere | — | N/A |
| E5 | Documented NONE | — | N/A |

---

## 3. Test design

| ID | Behavior / layer | Expected check | Maps to |
| -- | ---------------- | -------------- | ------- |
| T1 | `test_extract_embedded_task_simple` | Single `### E04:S11:T01` section → one task dict with correct E/S/T | RF1 |
| T2 | `test_extract_embedded_task_multiple` | Story with 3 tasks → 3 dicts, correct boundaries | RF1 |
| T3 | `test_extract_handles_nested_sections` | `####` subsections captured until next task | RF1 |
| T4 | `test_extract_handles_missing_fields` | Minimal content → placeholders for missing required fields | RF3 |
| T5 | `test_generate_task_doc_required_fields` | Output has Scope, Input, Deliverable, AC, Status | RF3 |
| T6 | `test_generate_task_doc_naming` | File name `T{task:02d}-{slug}.md` | RF7 |
| T7 | `test_story_update_replaces_embedded` | Story has checklist links; no embedded body | RF2 |
| T8 | `test_story_update_preserves_non_task` | Overview and non-task sections unchanged | RF6 |
| T9 | `test_validation_no_embedded_remaining` | Post-migration scan: embedded count = 0 for migrated Story | RF4 |
| T10 | `test_validation_all_refs_valid` | All Task doc links resolve | RF5 |
| T11 | `test_rw_step1_locates_task` | `validate_rw_task_complete.py` finds Task doc for migrated Story | RF5 |
| T12 | `test_migration_idempotent` | Second run on migrated Story produces no duplicates | RNF4 |

**Test location:** `packages/frameworks/workflow-mgt/scripts/kanban/test_migrate_embedded_tasks.py`  
**Fixtures:** Minimal Story docs (1–3 embedded tasks); pilot Stories E04:S11, E06:S07 subset for integration.

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY] Transition E04:S11:T07 `TODO → IN PROGRESS`** in task doc; update `Last updated`; align `kboard.md` row | Task doc + board |
| 2 | **Wave 0 — Catalog:** Run current-state analysis; fill migration plan §1.1 TBD Epic distribution | Analysis report in migration plan |
| 3 | **Wave 1 — Tooling:** Implement `extract_embedded_tasks.py`, `generate_task_doc.py`, `update_story_refs.py`, `validate_migration.py` | Scripts + unit tests T1–T8 |
| 4 | **Wave 2 — Pilot:** Migrate 1–2 Stories (E04:S11 subset, E06:S07 subset); manual review; integration tests T9–T12 | Pilot Task docs + updated Stories |
| 5 | **Wave 3 — Phased rollout:** Epic 1 → Epic 2 → Epic 4 → Epic 3,5,6,7,8,9,10 → Epic 11+; validate after each Epic | Per-Epic migration batches |
| 6 | **Wave 4 — Final validation:** Full-repo `validate_migration.py`; RW Step 1 spot-check; migration completion report | Completion report + metrics |
| 7 | **Wave 5 — Docs:** Update migration plan (TBDs filled); link scripts; update FR-016 implementation notes if needed | **DONE** — [migration-guide.md](../kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs/migration-guide.md); plan v1.1.0 APPROVED |
| 8 | **Closure RW:** `RW E04:S11:T07 --art` after final validation wave | **DONE** — v0.4.11.7+16 |
| **N** | **[MANDATORY] Reconcile E04:S11:T07 status:** if all ACs + §7 satisfied → `COMPLETE` + `✅ COMPLETE (v{version})`; if waves ongoing → `IN PROGRESS`; if blocked → `BLOCKED` + reason. Update `Last updated`. | **DONE** — COMPLETE v0.4.11.7+16 |

**RW verification rule (BR-097):** Each post-ship Epic wave and final closure prescribes **`RW E04:S11:T07 --art`** only.

### 4.1 Files to create or modify

| File | Action | Wave |
| ---- | ------ | ---- |
| `packages/frameworks/workflow-mgt/scripts/kanban/extract_embedded_tasks.py` | CREATE | 1 |
| `packages/frameworks/workflow-mgt/scripts/kanban/generate_task_doc.py` | CREATE | 1 |
| `packages/frameworks/workflow-mgt/scripts/kanban/update_story_refs.py` | CREATE | 1 |
| `packages/frameworks/workflow-mgt/scripts/kanban/validate_migration.py` | CREATE | 1 |
| `packages/frameworks/workflow-mgt/scripts/kanban/test_migrate_embedded_tasks.py` | CREATE | 1 |
| `docs/kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs/migration-plan-embedded-to-discrete-tasks.md` | UPDATE | 0, 5 |
| `docs/kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs/T07-planning-spec-tests-impl.md` | UPDATE | IPW, closure |
| `docs/kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs.md` | UPDATE | per Epic wave |
| `docs/kanban/fr-br/FR-016-kanban-granularity-discrete-task-docs.md` | UPDATE | closure |
| `docs/kanban/kboard.md` | UPDATE | each RW |
| Per-Story `epics/epic-*/story-*/` | UPDATE | Waves 2–3 |
| Per-Task `T{task:02d}-*.md` | CREATE | Waves 2–3 |

### 4.2 Dependency order

```
Wave 0 (catalog) → Wave 1 (tooling + T1–T8)
    → Wave 2 (pilot + T9–T12)
    → Wave 3 (Epic batches, validate each)
    → Wave 4 (full validation)
    → Wave 5 (docs) → Closure RW → Status reconciliation
```

### 4.3 Documentation implementation steps

1. Wire IPP ↔ task doc (IPW closure — this release).
2. Fill migration plan §1.1 Epic distribution (Wave 0).
3. Link script paths in migration plan §3 (Wave 1).
4. Publish migration completion report (Wave 4).
5. FR-016 status sync on task COMPLETE (Wave closure).

---

## 5. Documentation deliverables

### 5.1 Existing documents to update

| Doc ID | Path | Scope of change | Tied to |
| ------ | ---- | --------------- | ------- |
| D-U1 | `migration-plan-embedded-to-discrete-tasks.md` | Fill TBD catalog; APPROVED status; script links; timeline | RF9, §2.5 ADR UPDATE |
| D-U2 | `T07-planning-spec-tests-impl.md` | IPP link; version anchor; status transitions | IPW, Step 1/N |
| D-U3 | `story-11-kanban-granularity-discrete-task-docs.md` | Checklist version markers per wave | RF2 |
| D-U4 | `FR-016-kanban-granularity-discrete-task-docs.md` | IPP link; implementation progress | RF1–RF5 |
| D-U5 | `kboard.md` | E04:S11:T07 row — IPP link, Last modified | FR-092 |
| D-U6 | `fbuboard` (FR-016 row) | IPP link where applicable | FR-092 |
| D-U7 | Per-Story epic docs (Waves 2–3) | Replace embedded → checklist refs | RF1–RF2 |

### 5.2 New documents to create

| Doc ID | Proposed path | Purpose | Tied to |
| ------ | ------------- | ------- | ------- |
| D-C1 | `docs/implementation-cycles/IPP-E04S11T07-fr016-discrete-task-docs-migration.md` | Consolidated IPW package (this file) | IPW |
| D-C2 | `docs/kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs/migration-completion-report.md` | Final metrics and exception log | Wave 4 |
| D-C3 | `T{task:02d}-*.md` (784 files, phased) | Discrete Task documents | RF1–RF3 |

### 5.3 Documentation gaps and explicit non-changes

| Gap / topic | Resolution |
| ----------- | ---------- |
| ICW trio split files | NONE — folded into IPP; ICW spec retained as reference with supersession note in References |
| E2:S09 RW Step 1 validator changes | NONE — out of scope (separate story); this task migrates docs only |
| Docusaurus portal surfacing of IPP | NOT_APPLICABLE — internal planning artifact per BR-066 |
| New standalone ADR | NONE — migration plan UPDATE satisfies §2.5 REQUIRED outcome |

---

## 6. Documentation housing

| Doc ID | Canonical path | Publication status | Publication N/A reason | Lifecycle | Inbound links |
| ------ | -------------- | ------------------ | ---------------------- | --------- | ------------- |
| D-C1 | `docs/implementation-cycles/IPP-E04S11T07-fr016-discrete-task-docs-migration.md` | NOT_APPLICABLE | Internal IPP; task doc is discoverability surface | evergreen | T07 Input, References |
| D-C2 | `.../migration-completion-report.md` | NOT_APPLICABLE | Kanban-internal completion artifact | evergreen | T07, migration plan |
| D-C3 | `epics/epic-{NN}/story-{NN}-*/T{task:02d}-*.md` | PUBLISHED | — | evergreen | Story checklist |
| D-U1 | `.../migration-plan-embedded-to-discrete-tasks.md` | PUBLISHED | — | evergreen | T07, FR-016, IPP §4 |
| D-U2–D-U7 | kanban paths above | PUBLISHED via RW | — | evergreen | kboard, FR-016 |

---

## 7. Success / verification criteria

- [ ] IPP bidirectionally wired to T07 task doc
- [x] Migration plan §1.1 Epic distribution filled (no TBD)
- [x] All 12 test cases pass (`test_migrate_embedded_tasks.py`) — 14/14
- [x] Zero embedded tasks repo-wide (2 grandfathered discovery exceptions)
- [x] `validate_migration.py` exits 0 on full kanban root
- [x] RW Step 1 locates Task documents (10/12 spot-check panel)
- [ ] `validate_rw_task_complete.py` passes for migrated task IDs (closure — releasability on TODO tasks expected)
- [x] Migration completion report published with metrics
- [x] All §5 UPDATE/CREATE items implemented or explicitly deferred (legacy headers, E01:S01)
- [ ] FR-016 acceptance criteria AC1–AC8 satisfied at task COMPLETE

---

## References

- [FR-016](../kanban/fr-br/FR-016-kanban-granularity-discrete-task-docs.md)
- [T07 task doc](../kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs/T07-planning-spec-tests-impl.md)
- [Migration plan](../kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs/migration-plan-embedded-to-discrete-tasks.md)
- [ICW-E4S11T07 specification](ICW-E4S11T07-specification.md) *(retrospective; folded into this IPP)*
- [dev-kit-ipw-ipp-vs-icw-artifacts.md](../governance/standards/dev-kit-ipw-ipp-vs-icw-artifacts.md)
- [TASK_TEMPLATE.md](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/kanban/templates/TASK_TEMPLATE.md)
- [FR-017](../kanban/fr-br/FR-017-versioning-policy-hardening-doc-init-build.md) — doc-init for new Task docs
- [ipw-adr-necessity-checklist.md](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md)
