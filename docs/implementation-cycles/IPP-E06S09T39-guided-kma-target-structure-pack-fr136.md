---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-17T20:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E06:S09:T39 — Planning: Guided KMA Target Structure Pack (IPW)

**Host Task:** [`T39-guided-kma-target-structure-pack-fr136.md`](../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T39-guided-kma-target-structure-pack-fr136.md) **(E06:S09:T39)**  
**Planning for:** [FR-136](../kanban/fr-br/FR-136-guided-kma-target-structure-pack.md) · SBL attempt 11 TSP programme · [#85](https://github.com/RMS-Ltd/ai-dev-kit/issues/85)  
**Status:** Draft

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RF1 | Support `kma_mode: blind \| guided \| score` in guardrails, `kma.md`, and KMA execution guide | FR-136-F1, AC1 |
| RF2 | Guided mode accepts `target_est_tree` path plus optional TSP companion files (YAML/MD per contract) | FR-136-F2 |
| RF3 | Guided mode **fails fast** when `target_est_tree` is missing or unreadable | AC1, FB §6 |
| RF4 | Migration proposal reports **deduped unique `E:S:T` count** (not raw source line count) | FR-136-F3, AC4 |
| RF5 | Deterministic story basename **collision detector** (M02 / UXR-017) integrated in propose step | FR-136-F4, AC4 |
| RF6 | Deterministic **dedup inventory** helper for native `E:S:T` identity (M03) | FR-136-F4 |
| RF7 | Deterministic **structural scorer** (M08) implementing [SCORING-RUBRIC.yaml](../../adk-install-into-sbl/kanban-reference/SCORING-RUBRIC.yaml) dimensions with stable JSON output | FR-136-F4/F6, AC2 |
| RF8 | `score` mode: diff candidate tree vs TSP; emit JSON + markdown report; **no file writes** | FR-136-F6 |
| RF9 | Ship framework **TSP reference pack** (generic templates + README) under `packages/frameworks/kanban/reference/`; SBL exemplar remains in `adk-install-into-sbl/kanban-reference/` | FR-136-F5, AC3 |
| RF10 | Guided proposal anchored to TSP epic map; explicit **lazy fan-out policy** (M06) in proposal template | FR-136-F7 |
| RF11 | Optional `build_target_est_tree.py` for TSP regeneration from operator est-tree sources | Task deliverable 3, KMA-METHODS |
| RF12 | pytest: scorer self-test (TSP vs TSP ≥98%) + guided fixture replay (weighted ≥0.85 when criteria met) | FR-136-NF4, AC5 |
| RF13 | Cross-link attempt 11 feedback package; document when to use blind vs guided vs score | AC6, FB |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RNF1 | Agent remains agentic for synthesis (M01 routing judgement, epic overviews); helpers are **advisory/invariant only** | FR-136-NF1, ADR-028 |
| RNF2 | Step 3 sign-off gate **unchanged** — guided mode does not auto-write migration files | FR-136-NF2 |
| RNF3 | Greenfield mirror sync when `packages/frameworks/**` changes | FR-136-NF3, FR-110, P-GREENFIELD-SYNC |
| RNF4 | Scorer JSON output stable for CI (deterministic key ordering, version field) | AC2 |
| RNF5 | Extends blind KMA (FR-127 / T31) without breaking existing fixture replay tests | ADR-028 |

### 1.3 Invariants and boundaries

- **Invariants:**
  - Blind KMA remains default when no TSP supplied (`kma_mode: blind`).
  - Legacy kanban root read-only; dual-tree contract per ADR-028 / FR-081.
  - Operator sign-off before Step 4 writes (all modes).
  - Structural score uses **unique** `E:S:T` set intersection, not ingest line counts.
  - Kit surface name `kma_mode: score` maps to rubric `score_only` scoring mode internally.
- **In scope:**
  - Guardrails, slash command, execution guide, proposal template guided section.
  - Framework reference pack (generic TSP contract templates).
  - `score_kma_structure.py`, optional `build_target_est_tree.py`.
  - Collision detector + dedup inventory helpers (new module or `kma_ingest` extension).
  - pytest scorer + guided fixture under `tests/kanban/`.
  - ADR-028 update (guided mode + TSP contract).
  - FR-136 status/evidence links at RW Step 7.
- **Out of scope:**
  - Orchestrator in-process KMA execution (E06:S09:T38 / FR-135 — handoff/menu only).
  - SBL Phase B install execution (adopter-run).
  - Mandatory full `T*.md` fan-out for all TSP rows (M06 lazy default).
  - Project-specific routing tables baked into kit defaults (adopter supplies TSP).
  - Porting full 377-task SBL TSP into framework package (exemplar stays in `adk-install-into-sbl`).

### 1.4 Phase 1 planning decisions (IPW — consolidated from context)

| Gap | Decision |
| --- | -------- |
| Mode naming | Public: `blind \| guided \| score`; rubric YAML retains `score_only` alias documented in guardrails |
| TSP contract home | Generic templates: `packages/frameworks/kanban/reference/`; worked SBL exemplar: `adk-install-into-sbl/kanban-reference/` |
| Scorer script path | `packages/frameworks/kanban/scripts/score_kma_structure.py` (kit canonical; not `tools/kanban/` adopter path) |
| Collision helper | `packages/frameworks/kanban/scripts/kma_collision_detect.py` — per-epic `story-{nn}-*.md` basename scan |
| Dedup helper | Extend `kma_ingest.py` with `--dedup` / `dedupe_est_tokens()` OR sibling `kma_dedup_inventory.py` — prefer **extend ingest** to avoid helper proliferation |
| Guided fixture size | `tests/fixtures/kma-guided-tsp-minimal/` — 2 epics, ~12 unique `E:S:T`, companion YAML stubs; not full 377-row SBL tree in repo tests |
| SBL ≥0.85 integration test | `@pytest.mark.integration` gated on env `KMA_SBL_TSP_ROOT` pointing to `adk-install-into-sbl/kanban-reference/` when present |
| ADR | **UPDATE** ADR-028 with guided-mode section (extends existing KMA decision; no new ADR number) |

---

## 2. Specification

### 2.1 Goal

Extend the Kanban Migration Agent with **guided** and **score** modes so mature brownfield adopters (and SBL attempt 11 Phase B) can supply a **Target Structure Pack (TSP)** — operator-optimized `E:S:T` inventory plus companion remap/folder maps — and receive **repeatable structural scoring** against that target. Attempt 10 blind KMA scored ~62% weighted vs operator tree; attempt 11 encodes operator decisions as M01–M08 methods and a 377-task TSP freeze. This task ships kit surfaces to consume that contract without ad-hoc migration scripts.

### 2.2 Specification mapping from ascertained requirements

| RF/RNF | Specification element |
| ------ | ---------------------- |
| RF1 | `kma-agent-guardrails.yaml` adds `kma_mode` enum + mode-specific required inputs; `kma.md` and execution guide document mode matrix |
| RF2–RF3 | Guided Step 1 validates TSP paths from guardrails/config; exit non-zero / agent abort if `target_est_tree` missing |
| RF4–RF6 | Propose step calls dedup inventory + collision detector; proposal template **Guided mode** section shows unique task count + collision table |
| RF7–RF8 | `score_kma_structure.py --mode score_only` reads TSP + candidate `kanban_root`; emits `score.json` + `structural-score.md` |
| RF9 | `packages/frameworks/kanban/reference/README.md` documents TSP file contract; `templates/` holds generic stubs |
| RF10 | Proposal template adds fan-out policy checkbox (lazy default) and TSP anchor epic map reference |
| RF11 | `build_target_est_tree.py` — optional maintainer tool; dedupes est-tree MD → `TARGET-EST-TREE.md` format |
| RF12–RF13 | pytest modules; FR/FB cross-links in reference README |
| RNF1–RNF2 | Execution guide Step 2–3 unchanged gate; helpers invoked as advisory CLI only |
| RNF3 | `sync_greenfield_install.py` in impl plan |

**Method application order (guided KMA — from KMA-METHODS):**

```text
1. Ingest legacy (epics, stories, inline E:S:T)
2. M01 — Route concerns (infra split + game remap + UAT → E41) — agent + LEGACY-EPIC-REMAP.yaml
3. M02 — Merge into core shells (collision-safe naming) — collision detector
4. M03 — Dedup tasks by native E:S:T — dedup inventory
5. M04 — Resolve titles — agent + TITLE-RESOLUTION-RULES (adopter TSP)
6. M05 — Assign folders per TARGET-FOLDER-MAP — agent + YAML
7. M06 — Fan-out task files (lazy only) — proposal policy
8. M08 — Score vs TSP — score_kma_structure.py
```

### 2.3 Constraints

- All new scripts live under `packages/frameworks/kanban/scripts/` with module docstrings citing FR-136 / E06:S09:T39.
- Scorer must implement all six rubric dimensions with weights from `SCORING-RUBRIC.yaml` (port generic template into reference pack).
- JSON schema keys: `version`, `project`, `mode`, `weighted_total`, `dimensions` (per-dimension `score`, `weight`, `detail`), `pass_threshold`, `passed`.
- Do not vendor SBL-specific epic remap tables into framework defaults — templates only.
- BR-097: post-ship verification waves prescribe `RW E06:S09:T39 --art` only.
- T38 orchestrator may **read** `kma_mode` from guardrails later; this task documents handoff fields only (no orchestrator code).

### 2.4 Status transition intent (mandatory)

- **Current task status:** TODO
- **Transition trigger to IN PROGRESS:** First non-planning implementation change lands (Step 1 of §4).
- **Transition trigger to COMPLETE:** AC1–AC6 satisfied with pytest/doc evidence; FR-136 AC checkboxes updated at RW Step 7.
- **Atomic propagation requirement:** Task doc status and `kboard.md` row update in same RW Step 7 change set.
- **Owner:** IDW implementation execution (not this IPW).

### 2.5 ADR necessity decision (mandatory — IPW Phase 5.0)

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | **N** | FR-136 / attempt 11 already selected guided+TSP extension over blind-only or full automation |
| T2 | Reversibility | **N** | Additive modes + scripts; revert is single PR without adopter data migration |
| T3 | Blast radius | **N** | Impact confined to `packages/frameworks/kanban/` + docs listed in §4.1; no RW/IPW gate changes |
| T4 | Precedent | **Y** | TSP contract + `kma_mode` become canonical reference for future guided migrations and orchestrator handoff (T38) |
| T5 | Constraint trade-off | **N** | Trade-offs (lazy fan-out, agentic vs deterministic) documented in FR-136 and KMA-METHODS |
| T6 | Governance contract | **N** | Does not alter RW, IPW, UKW, or global implementation gates |
| T7 | Supersedes | **N** | Extends ADR-028 KMA decision; does not contradict blind mode or sign-off gate |

**Outcome:** **REQUIRED** (UPDATE existing ADR)

| ID | Exemption (only if all T = N) | Pass? | Evidence |
| -- | --------------------------- | ----- | -------- |
| E1 | Single locus | — | Not evaluated (REQUIRED) |
| E2 | No new options | — | Not evaluated |
| E3 | Reversible in one task | — | Not evaluated |
| E4 | Spec elsewhere | — | Not evaluated |
| E5 | Documented NONE | — | Not evaluated |

**ADR deliverable:** **UPDATE** `docs/architecture/standards-and-adrs/ADR-028-agentic-kanban-migration-brownfield-fr127.md` — add § Guided mode and Target Structure Pack (TSP); link FR-136 and reference pack path.

---

## 3. Test design

| ID | Behavior / layer | Expected check | RF |
| -- | ---------------- | -------------- | -- |
| T1 | Scorer TSP self-test | `score_kma_structure.py` scoring TSP against itself yields `weighted_total` ≥ **0.98** | RF7, RF12 |
| T2 | Scorer JSON stability | Two consecutive runs on same inputs produce byte-identical JSON (sorted keys) | RNF4 |
| T3 | Rubric dimension coverage | Unit test asserts all six dimensions present with correct weights summing to 1.0 | RF7 |
| T4 | Collision detector — clean tree | Fixture with no duplicate `story-01-*` basenames per epic → collision score dimension = 1.0 | RF5 |
| T5 | Collision detector — collision | Fixture with duplicate basenames → detector reports collisions; dimension penalized | RF5 |
| T6 | Dedup inventory | Ingest fixture with duplicate `E:S:T` tokens → unique count < raw line count; aliases logged | RF6 |
| T7 | Guided mode guardrails | `kma-agent-guardrails.yaml` contains `kma_mode` enum; guided requires `target_est_tree` key | RF1, RF3 |
| T8 | Guided mode fail-fast | Test harness: guided without `target_est_tree` → non-zero exit or documented agent abort string in guide | RF3 |
| T9 | Proposal template guided section | `MIGRATION_PROPOSAL_TEMPLATE.md` contains Guided mode section with unique task count + fan-out policy | RF4, RF10 |
| T10 | Execution guide modes | Guide documents blind / guided / score matrix and scorer invocation | RF1 |
| T11 | Guided fixture replay | `tests/fixtures/kma-guided-tsp-minimal/` + candidate output → weighted score ≥ **0.85** | RF12 |
| T12 | Blind KMA regression | Existing `test_kma_sbl_fixture_replay.py` and `test_kma_agentic_vs_automated.py` remain green | RNF5 |
| T13 | Greenfield sync | `python scripts/sync_greenfield_install.py --check` passes after framework changes | RNF3 |
| T14 | Optional SBL integration | `@pytest.mark.integration` — when `KMA_SBL_TSP_ROOT` set, score SBL exemplar self-test ≥0.98 | RF13 |
| T15 | Reference pack contract | README lists all TSP companion files; template files exist and parse (YAML valid) | RF9 |

**Test files (planned):**

- `tests/kanban/test_score_kma_structure.py` (T1–T3, T11, T14)
- `tests/kanban/test_kma_collision_detect.py` (T4–T5)
- `tests/kanban/test_kma_dedup_inventory.py` (T6)
- `tests/kanban/test_kma_guided_modes.py` (T7–T10)
- `tests/fixtures/kma-guided-tsp-minimal/` (minimal TSP + candidate kanban tree)

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY] Transition task `E06:S09:T39` status `TODO → IN PROGRESS`** in task doc. Update `Last updated` date. Link IPP. | Task doc `Status` = `IN PROGRESS` |
| 2 | **UPDATE ADR-028** — add Guided mode + TSP contract section; link FR-136 and `packages/frameworks/kanban/reference/` | ADR-028 § Guided mode |
| 3 | Create **framework TSP reference pack** — `reference/README.md` + `reference/templates/*` (generic contract); pointer to SBL exemplar in `adk-install-into-sbl/kanban-reference/` | `packages/frameworks/kanban/reference/` |
| 4 | **UPDATE `kma-agent-guardrails.yaml`** — `kma_mode`, guided required inputs (`target_est_tree`, optional companion paths), score-mode invariants | Guardrails v1.1 |
| 5 | Implement **`score_kma_structure.py`** — parse TSP MD + scan candidate `kanban_root`; six rubric dimensions; `--json` / `--markdown` outputs | Scorer CLI |
| 6 | Implement **`kma_collision_detect.py`** (M02) — per-epic story basename collision scan; JSON table for proposal | Collision helper |
| 7 | **Extend `kma_ingest.py`** — deduped unique `E:S:T` inventory (`--dedup`, unique count in JSON report) | M03 helper |
| 8 | Implement **`build_target_est_tree.py`** (optional) — dedupe operator est-tree MD → TSP format; document in reference README | TSP builder |
| 9 | **UPDATE `MIGRATION_PROPOSAL_TEMPLATE.md`** — Guided mode section: TSP paths, unique task count, collision table, lazy fan-out policy, score threshold | Proposal template |
| 10 | **UPDATE `kanban-migration-agent-execution.md`** — mode matrix; guided Step 1 TSP validation; Step 2 helper invocations; Step 5 scorer command | Execution guide v1.1 |
| 11 | **UPDATE `.claude/commands/kma.md`** — document `--mode` / TSP path args; load reference README in guided runs | Slash command |
| 12 | Implement **pytest suite** T1–T15; add `tests/fixtures/kma-guided-tsp-minimal/` | Test modules + fixture |
| 13 | **UPDATE FR-136** status/evidence; cross-link attempt 11 FB from reference README | FR doc |
| 14 | Run **`python scripts/sync_greenfield_install.py`** + commit `greenfield-install/` mirror | FR-110 parity |
| 15 | **RW `E06:S09:T39 --art`** — version, changelog, kanban Step 7 four-surface sync | Local release |
| 16 | Post-ship verification: re-run full kanban pytest lane; record scorer self-test + guided fixture scores in task doc | Verification notes |
| **17** | **[MANDATORY] Reconcile task `E06:S09:T39` status** to actual implementation state: if all ACs satisfied → `COMPLETE` + `✅ COMPLETE (v{version})`; else `IN PROGRESS` or `BLOCKED` + reason. Update `Last updated`. Sync `kboard.md` row. | Task doc status reflects actual state |

**RW verification rule (BR-097):** Step 15 uses **`RW E06:S09:T39 --art`** only (BUILD +1). No `--doc-policy-zero`.

### 4.1 Files to create or modify

**Create:**

- `packages/frameworks/kanban/reference/README.md`
- `packages/frameworks/kanban/reference/templates/TARGET-EST-TREE.template.md`
- `packages/frameworks/kanban/reference/templates/TARGET-EST-ALIASES.template.md`
- `packages/frameworks/kanban/reference/templates/BAND-PARITY.template.md`
- `packages/frameworks/kanban/reference/templates/TITLE-RESOLUTION-RULES.template.md`
- `packages/frameworks/kanban/reference/templates/LEGACY-EPIC-REMAP.template.yaml`
- `packages/frameworks/kanban/reference/templates/TARGET-FOLDER-MAP.template.yaml`
- `packages/frameworks/kanban/reference/templates/SCORING-RUBRIC.template.yaml`
- `packages/frameworks/kanban/scripts/score_kma_structure.py`
- `packages/frameworks/kanban/scripts/kma_collision_detect.py`
- `packages/frameworks/kanban/scripts/build_target_est_tree.py`
- `tests/fixtures/kma-guided-tsp-minimal/` (TSP stub + candidate tree)
- `tests/kanban/test_score_kma_structure.py`
- `tests/kanban/test_kma_collision_detect.py`
- `tests/kanban/test_kma_dedup_inventory.py`
- `tests/kanban/test_kma_guided_modes.py`

**Modify:**

- `docs/architecture/standards-and-adrs/ADR-028-agentic-kanban-migration-brownfield-fr127.md`
- `packages/frameworks/kanban/manifests/kma-agent-guardrails.yaml`
- `packages/frameworks/kanban/scripts/kma_ingest.py`
- `packages/frameworks/kanban/templates/MIGRATION_PROPOSAL_TEMPLATE.md`
- `packages/frameworks/kanban/KB/Documentation/Developer_Docs/kanban-migration-agent-execution.md`
- `.claude/commands/kma.md`
- `packages/frameworks/kanban/README.md` (guided mode pointer)
- `docs/kanban/fr-br/FR-136-guided-kma-target-structure-pack.md`
- `docs/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T39-guided-kma-target-structure-pack-fr136.md`
- `docs/kanban/kboard.md` (RW Step 7)
- `greenfield-install/` mirror (sync)

**Explicitly not modified (out of scope):**

- `packages/frameworks/workflow-mgt/scripts/install_greenfield_path.py` (T38 orchestrator)
- Full SBL TSP copy into framework package

### 4.2 Dependency order

1. ADR-028 update (architectural anchor for guided extension)
2. Reference pack README + templates (contract before scorer)
3. `score_kma_structure.py` (depends on rubric template + TSP parser)
4. Collision + dedup helpers (proposal step dependencies)
5. Guardrails + execution guide + kma.md (document helpers and modes)
6. Proposal template guided section
7. `build_target_est_tree.py` (optional; can land after scorer)
8. pytest fixtures + tests (depend on scripts)
9. Greenfield sync
10. RW release

### 4.3 Documentation implementation steps

1. ADR-028 guided section before guardrails (guardrails cite ADR)
2. Reference pack before scorer (scorer cites rubric path)
3. Scorer + helpers before execution guide Step 5 commands
4. Execution guide before `kma.md` (command links guide)
5. FR-136 status update at RW Step 7

---

## 5. Documentation deliverables

### 5.1 Existing documents to update

| Doc ID | Path | Scope of change | Tied to |
| ------ | ---- | --------------- | ------- |
| D-U1 | `docs/architecture/standards-and-adrs/ADR-028-agentic-kanban-migration-brownfield-fr127.md` | Add § Guided mode + TSP; link FR-136 | §2.5, Step 2 |
| D-U2 | `packages/frameworks/kanban/manifests/kma-agent-guardrails.yaml` | `kma_mode`, guided inputs, score invariants | RF1, Step 4 |
| D-U3 | `packages/frameworks/kanban/KB/Documentation/Developer_Docs/kanban-migration-agent-execution.md` | Mode matrix; guided/score steps; helper CLI | RF1, Step 10 |
| D-U4 | `packages/frameworks/kanban/templates/MIGRATION_PROPOSAL_TEMPLATE.md` | Guided mode section | RF4, RF10, Step 9 |
| D-U5 | `.claude/commands/kma.md` | Mode flags; TSP load order | RF1, Step 11 |
| D-U6 | `packages/frameworks/kanban/scripts/kma_ingest.py` | Dedup inventory flags/output | RF6, Step 7 |
| D-U7 | `packages/frameworks/kanban/README.md` | Pointer to reference pack + guided mode | Step 10 |
| D-U8 | `docs/kanban/fr-br/FR-136-guided-kma-target-structure-pack.md` | Status → IMPLEMENTED when ACs met; evidence links | Step 13 |
| D-U9 | `docs/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T39-*.md` | Status, AC checkboxes, version marker, IPP link | Steps 1, 17 |
| D-U10 | `docs/kanban/kboard.md` | T39 row status + IPP link | RW Step 7 |

### 5.2 New documents to create

| Doc ID | Proposed path | Purpose | Tied to |
| ------ | ------------- | ------- | ------- |
| D-C1 | `packages/frameworks/kanban/reference/README.md` | TSP contract, file table, SBL exemplar pointer | RF9, Step 3 |
| D-C2 | `packages/frameworks/kanban/reference/templates/*.template.{md,yaml}` | Generic TSP companion stubs | RF9, AC3 |
| D-C3 | `packages/frameworks/kanban/scripts/score_kma_structure.py` | M08 structural scorer | RF7, Step 5 |
| D-C4 | `packages/frameworks/kanban/scripts/kma_collision_detect.py` | M02 collision detector | RF5, Step 6 |
| D-C5 | `packages/frameworks/kanban/scripts/build_target_est_tree.py` | Optional TSP builder | RF11, Step 8 |
| IPP | `docs/implementation-cycles/IPP-E06S09T39-guided-kma-target-structure-pack-fr136.md` | This planning package | Phase 7 |

### 5.3 Documentation gaps and explicit non-changes

| Gap / topic | Resolution |
| ----------- | ---------- |
| SBL full companion YAML (LEGACY-EPIC-REMAP, TARGET-FOLDER-MAP) on ADK | **NONE in framework** — partial mirror in `adk-install-into-sbl/kanban-reference/` per README; generic **templates** in framework reference pack |
| Orchestrator `kanban_migration.mode: guided` runtime wiring | **NONE this task** — T38 owns; FR-135-F5 documents menu handoff only |
| Portal/Docusaurus adopter page for guided KMA | **NONE** — framework developer KB + INSTALL brownfield (existing KMA pointer) sufficient |
| New ADR number for guided mode | **NONE** — UPDATE ADR-028 per §2.5 |
| `docs/documentation/user-docs/` guided KMA page | **NONE** — defer; INSTALL + framework guides are brownfield SoT |
| Porting `tools/kanban/*` from SBL prep branch | **CREATE** kit scripts under `packages/frameworks/kanban/scripts/` (reimplement/port logic, not copy adopter path) |

---

## 6. Documentation housing

| Doc ID | Canonical path | Publication status | Publication N/A reason | Lifecycle | Inbound links to add |
| ------ | -------------- | ------------------ | ------------------------ | --------- | -------------------- |
| D-U1 | `docs/architecture/standards-and-adrs/ADR-028-agentic-kanban-migration-brownfield-fr127.md` | NOT_APPLICABLE | Architecture corpus | evergreen | FR-136, IPP §2.5 |
| D-C1 | `packages/frameworks/kanban/reference/README.md` | NOT_APPLICABLE | Framework reference (vendored) | evergreen | kma.md, execution guide, FR-136 |
| D-C2 | `packages/frameworks/kanban/reference/templates/*` | NOT_APPLICABLE | Framework templates | evergreen | reference README |
| D-C3–D-C5 | `packages/frameworks/kanban/scripts/*.py` | NOT_APPLICABLE | Framework scripts | evergreen | execution guide, scripts README |
| D-U2–D-U7 | `packages/frameworks/kanban/**` | NOT_APPLICABLE | Framework package | evergreen | kma.md, FR-136 |
| D-U5 | `.claude/commands/kma.md` | NOT_APPLICABLE | Agent command spec | evergreen | CLAUDE.md (existing KMA block) |
| IPP | `docs/implementation-cycles/IPP-E06S09T39-guided-kma-target-structure-pack-fr136.md` | NOT_APPLICABLE | Planning artifact | evergreen | T39 Input/References |
| SBL exemplar | `adk-install-into-sbl/kanban-reference/` | NOT_APPLICABLE | Maintainer experiment corpus | evergreen | reference README pointer only |

**SBL exemplar note:** Worked 377-task TSP and SBL-specific remap YAML remain under `adk-install-into-sbl/` — not vendored into framework. Framework ships **contract templates** only.

---

## 7. Success / verification criteria

- [ ] **AC1:** `kma.md` + execution guide document blind / guided / score; guided fails fast without `target_est_tree`
- [ ] **AC2:** `score_kma_structure.py` implements all rubric dimensions; stable JSON; TSP self-test ≥98%
- [ ] **AC3:** TSP companion templates exist under `packages/frameworks/kanban/reference/templates/`
- [ ] **AC4:** Proposal template + helpers report deduped unique count; collision detector integrated
- [ ] **AC5:** `pytest tests/kanban/test_score_kma_structure.py tests/kanban/test_kma_guided_modes.py tests/kanban/test_kma_collision_detect.py tests/kanban/test_kma_dedup_inventory.py -q` green; guided fixture ≥0.85
- [ ] **AC6:** Attempt 11 FB cross-linked from reference README; optional SBL integration test documented
- [ ] ADR-028 updated with guided mode section
- [ ] Existing KMA tests (`test_kma_sbl_fixture_replay.py`, `test_kma_agentic_vs_automated.py`) remain green
- [ ] All §5 UPDATE/CREATE items implemented or explicitly deferred with reason
- [ ] All §6 paths exist and are linked from task doc
- [ ] **Greenfield:** `python scripts/sync_greenfield_install.py --check` green; mirror committed in same change set
- [ ] **RW:** `RW E06:S09:T39 --art` completes locally; four-surface kanban reconciliation in Step 7

---

## References

- [FR-136](../kanban/fr-br/FR-136-guided-kma-target-structure-pack.md)
- [E06:S09:T39 task doc](../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T39-guided-kma-target-structure-pack-fr136.md)
- [FR-127](../kanban/fr-br/FR-127-agentic-kanban-migration-agent-replace-tool-pipeline.md) · [ADR-028](../architecture/standards-and-adrs/ADR-028-agentic-kanban-migration-brownfield-fr127.md)
- [IPP-E06S09T31](IPP-E06S09T31-agentic-kanban-migration-agent-fr127.md) (blind KMA prior art)
- [KMA-METHODS](../../adk-install-into-sbl/kanban-reference/KMA-METHODS.md) · [SCORING-RUBRIC.yaml](../../adk-install-into-sbl/kanban-reference/SCORING-RUBRIC.yaml) · [TARGET-EST-TREE.md](../../adk-install-into-sbl/kanban-reference/TARGET-EST-TREE.md)
- [FB-ADK-GUIDED-KMA-TARGET-STRUCTURE-PACK.md](../../adk-install-into-sbl/attempt-11/feedback-package/FB-ADK-GUIDED-KMA-TARGET-STRUCTURE-PACK.md)
- [kanban-migration-agent-execution.md](../../packages/frameworks/kanban/KB/Documentation/Developer_Docs/kanban-migration-agent-execution.md)
- [kma-agent-guardrails.yaml](../../packages/frameworks/kanban/manifests/kma-agent-guardrails.yaml)
- [ipw-adr-necessity-checklist.md](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md)
- [FR-110](../kanban/fr-br/FR-110-lean-adopter-distribution-footprint-and-vendor-bundle.md) (greenfield sync)
