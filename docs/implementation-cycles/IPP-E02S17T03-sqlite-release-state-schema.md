---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-07T17:50:00Z
expires_at: null
housekeeping_policy: keep
---

# E02:S17:T03 — Planning: SQLite release-state schema and migration (IPW)

**Host Task:** [`T03-sqlite-release-state-schema-and-migration-design.md`](../project-management/kanban/epics/epic-02/story-17-rw-semver-characterization-and-release-state-sqlite/T03-sqlite-release-state-schema-and-migration-design.md) **(E02:S17:T03)**  
**Planning for:** [E02:S17](../project-management/kanban/epics/epic-02/story-17-rw-semver-characterization-and-release-state-sqlite.md) · [FR-045](../project-management/kanban/fr-br/FR-045-adr-002-task-touch-derived-mapping.md) · [FR-046](../project-management/kanban/fr-br/FR-046-rw-semver-tag-task-touch-mode.md)  
**Status:** Approved (design phase)  
**Functional release target:** T04 implementation via `RW E02:S17:T04 --art` after T03 design AC closure

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | SQLite schema holds all `semver-registry.yaml` fields: `rc_0.epic_to_minor`, `story_to_patch`, `task_touch_mode` (counter + mapping_history) | T03 scope, Pattern 3 |
| RF2 | Changelog entries (main + archive) stored with immutable release timestamp, internal version, SemVer, E:S:T, summary | T03 scope, RW Steps 3–4 |
| RF3 | `finalize_rw_semver_registry` semantics preserved: counter increment + mapping row at tag boundary only | `finalize_rw_semver_registry.py`, RW-S04 |
| RF4 | Import from production YAML + changelog archive tree (idempotent) | T03 AC2 |
| RF5 | Export reproduces validator-green legacy YAML/MD (round-trip) | T03 AC3 |
| RF6 | `rw-config.yaml` key `release_state_backend: legacy\|sqlite` + `release_state_db` path | T03 scope |
| RF7 | Existing validators run unchanged against exported legacy files OR gain `--backend sqlite` read path | T03 AC1 |
| RF8 | Query patterns for RW Steps 2–11: read-heavy; single-writer finalize at Step 2.5 | T03 scope |
| RF9 | IPP linked from T03 before T04 starts | T03 AC4, IPW-P01 |

### 1.2 Non-functional requirements

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RNF1 | Registry lookup ≤5ms p95 (baseline YAML ~188ms per Wave 4 RW-V04) | baseline-pattern-notes Pattern 9 |
| RNF2 | Migration idempotent; safe to re-run on partial failure | T03 scope |
| RNF3 | WAL mode SQLite; single DB file per repo (`.adk/release-state.db` default) | portability |
| RNF4 | No drop of legacy files until T05 parity passes | T03 out-of-scope |
| RNF5 | rc-scoped rows (support future `rc_1+`) without schema migration | Pattern 3 |

### 1.3 Invariants and boundaries

- **Invariants:** FR-045 injective PATCH mapping; BR-097 BUILD+1; tag finalize boundary (RW-S04)
- **In scope:** Schema design, migration manifest, import/export contract, config hook, T04 implementation plan
- **Out of scope:** T04 code, T05 parity replay, dropping legacy files, CMW SQLite backend (future)

---

## 2. Specification

### 2.1 Goal

Replace monolithic YAML/MD release-state reads with an indexed SQLite backend while preserving all validator-visible semantics and enabling T05 side-by-side parity replay.

### 2.2 Specification mapping

| RF | Design artifact |
| -- | --------------- |
| RF1–RF3, RF7–RF8 | [`sqlite-schema-design.md`](../project-management/kanban/epics/epic-02/story-17-rw-semver-characterization-and-release-state-sqlite/sqlite-schema-design.md) |
| RF4–RF5, RNF2 | [`migration-manifest.md`](../project-management/kanban/epics/epic-02/story-17-rw-semver-characterization-and-release-state-sqlite/migration-manifest.md) |
| RF6 | `rw-config.yaml` keys documented in schema design §6 |

### 2.3 Constraints

- Must not break `semver_mapping_strategy: task_touch` adopters on legacy path during transition
- Export must preserve `rc_0` nesting exactly (Pattern 3)
- Finalize remains atomic: BEGIN → counter+mapping INSERT → COMMIT before changelog SemVer write

### 2.4 Status transition intent

- **Current task status:** IN PROGRESS (IPP + design docs filed)
- **Transition to COMPLETE:** AC1–AC3 satisfied with import/export proof scripts green on production copy
- **T04 gate:** IPP linked ✅; T03 COMPLETE recommended before T04 RW `--art`

### 2.5 ADR necessity decision

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | Y | SQLite vs JSON file vs embedded LMDB — multiple viable backends |
| T2 | Reversibility | Y | Export round-trip required; legacy path retained |
| T3 | Blast radius | Y | Touches RW Steps 2–11, all semver validators |
| T4 | Precedent | N | No existing ADR for release-state storage |
| T5 | Constraint trade-off | Y | Performance vs portability vs git-diffability |
| T6 | Governance contract | Y | FR-045/FR-046 invariants |
| T7 | Supersedes | N | Extends, does not supersede ADR-002 |

**Outcome:** **REQUIRED** — create **ADR-025** (SQLite release-state backend) during T04 Step 3; T03 cites draft in schema design.

**Exemption:** Not applicable (T1/T2/T3/T5/T6 = Y).

---

## 3. Test design

| ID | Requirement | Test method | Expected |
| -- | ----------- | ----------- | -------- |
| T1 | RF1 schema | SQL DDL review + pragma table_info | All YAML fields mappable |
| T2 | RF3 finalize | `test_finalize_rw_semver_registry.py` extended with `--backend sqlite` fixture | Same counter/mapping as legacy |
| T3 | RF4 import | `test_release_state_import.py` on copy of production registry | Row counts match; counter=1042 |
| T4 | RF5 export | `test_release_state_export_roundtrip.py` | `yaml.safe_load(export) == original` (semantic) |
| T5 | RF7 validators | Run full Step 9 suite on exported files post-import | All green |
| T6 | RNF1 perf | Extend RW-V04 benchmark: SQLite lookup vs YAML load | SQLite p95 <5ms |
| T7 | RNF2 idempotency | Import twice; diff DB hash | Identical state |
| T8 | RF6 config | `rw-config.yaml` with `release_state_backend: sqlite` | Scripts resolve DB path |
| T9 | FR-045 | `validate_semver_registry_injective.py` on SQLite-backed export | PASS |

**T05 parity:** Replay scenario matrix IDs with `backend=sqlite` column in run log (T05 scope).

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY]** Transition T03 `TODO → IN PROGRESS`; link IPP from task doc | Task doc, story checklist |
| 2 | Finalize schema design + migration manifest (this IPW wave) | `sqlite-schema-design.md`, `migration-manifest.md` |
| 3 | Draft ADR-025 SQLite release-state backend | `docs/architecture/standards-and-adrs/ADR-025-sqlite-release-state-backend.md` |
| 4 | Add `rw-config.yaml` keys (documented; values default `legacy`) | `rw-config.yaml` comment block or schema doc |
| 5 | Implement `release_state/` module: schema DDL, connection, migrations | `packages/frameworks/workflow-mgt/scripts/release_state/` |
| 6 | Implement `import_legacy_release_state.py` per migration manifest | import script + tests T3,T7 |
| 7 | Implement `export_legacy_release_state.py` round-trip | export script + tests T4,T5 |
| 8 | Wire `load_semver_registry()` / `finalize_rw_semver_registry.py` dual-backend | semver_converter.py, finalize script |
| 9 | Extend RW-V04 benchmark; add SQLite path to `tests/rw_scenarios/` | perf test T6 |
| 10 | T03 design AC closure: import/export proof on production copy | T03 → COMPLETE |
| 11 | **`RW E02:S17:T04 --art`** — T04 implementation release | v0.2.17.4+1 |
| **12** | **[MANDATORY]** Reconcile T04 status per implementation evidence | Task doc, kboard |

**RW verification rule (BR-097):** Post-ship T05 parity waves use `RW E02:S17:T05 --art` only.

### 4.1 Files to create or modify

| Path | Action |
| ---- | ------ |
| `docs/.../sqlite-schema-design.md` | CREATE (T03) |
| `docs/.../migration-manifest.md` | CREATE (T03) |
| `docs/implementation-cycles/IPP-E02S17T03-sqlite-release-state-schema.md` | CREATE |
| `packages/frameworks/workflow-mgt/scripts/release_state/schema.sql` | CREATE (T04) |
| `packages/frameworks/workflow-mgt/scripts/release_state/db.py` | CREATE (T04) |
| `packages/frameworks/workflow-mgt/scripts/release_state/import_legacy.py` | CREATE (T04) |
| `packages/frameworks/workflow-mgt/scripts/release_state/export_legacy.py` | CREATE (T04) |
| `packages/frameworks/workflow-mgt/scripts/version/semver_converter.py` | MODIFY (T04) |
| `rw-config.yaml` | MODIFY (T04) |
| `tests/rw_scenarios/test_wave4_baseline.py` | EXTEND SQLite benchmark (T04) |

### 4.2 Dependency order

1. T03 design docs (this IPW) → 2. T04 module + import → 3. export + validator parity → 4. RW dual-backend switch (config-gated) → 5. T05 replay

---

## 5. Documentation deliverables

### 5.1 Existing documents to update

| Doc ID | Path | Scope | Tied to |
| ------ | ---- | ----- | ------- |
| D-U1 | T03 task doc | IPP link, status, design doc links | Step 1 |
| D-U2 | T04 task doc | Block note: requires IPP + T03 COMPLETE | Step 11 |
| D-U3 | `baseline-pattern-notes.md` | Pattern 9 SQLite target | T6 |
| D-U4 | `rw-config.yaml` | `release_state_backend`, `release_state_db` | RF6 |

### 5.2 New documents to create

| Doc ID | Path | Purpose |
| ------ | ---- | ------- |
| D-C1 | `sqlite-schema-design.md` | Tables, indexes, finalize semantics |
| D-C2 | `migration-manifest.md` | Import/export steps + validator checklist |
| D-C3 | `ADR-025-sqlite-release-state-backend.md` | Architecture decision (T04) |
| D-C4 | `IPP-E02S17T03-sqlite-release-state-schema.md` | This document |

### 5.3 Documentation gaps

| Gap | Resolution |
| --- | ---------- |
| Adopter migration guide | NONE until T05 parity; defer to T04 README section |
| Docusaurus public doc | NOT_APPLICABLE — maintainer/internal |

---

## 6. Documentation housing

| Doc ID | Canonical path | Publication | Lifecycle |
| ------ | -------------- | ----------- | --------- |
| D-C1 | `docs/project-management/kanban/epics/epic-02/story-17-.../sqlite-schema-design.md` | NOT_APPLICABLE | evergreen |
| D-C2 | `docs/project-management/kanban/epics/epic-02/story-17-.../migration-manifest.md` | NOT_APPLICABLE | evergreen |
| D-C4 | `docs/implementation-cycles/IPP-E02S17T03-sqlite-release-state-schema.md` | NOT_APPLICABLE | evergreen |

**Inbound links:** T03 task doc §Input, T04 task doc §Dependencies, story S17 checklist.

---

## 7. Success / verification criteria

- [x] IPP Sections 1–7 complete; linked from T03 task doc
- [x] `sqlite-schema-design.md` and `migration-manifest.md` created
- [ ] Import script proven on production registry copy (T04 / T03 AC2)
- [ ] Export round-trip validator-green (T04 / T03 AC3)
- [ ] RW-V04 SQLite benchmark <5ms (T04 / T05)
- [ ] T03 → COMPLETE with forensic marker
- [ ] T04 unblocked for `implement` authorization

---

## References

- [T02 baseline pattern notes](../project-management/kanban/epics/epic-02/story-17-rw-semver-characterization-and-release-state-sqlite/baseline-pattern-notes.md)
- [scenario-matrix.md](../project-management/kanban/epics/epic-02/story-17-rw-semver-characterization-and-release-state-sqlite/scenario-matrix.md) — T05 parity IDs
- [`finalize_rw_semver_registry.py`](../../packages/frameworks/workflow-mgt/scripts/version/finalize_rw_semver_registry.py)
- [`semver_converter.py`](../../packages/frameworks/workflow-mgt/scripts/version/semver_converter.py)
- [FR-045 ADR-002 task-touch mapping](../project-management/kanban/fr-br/FR-045-adr-002-task-touch-derived-mapping.md)
