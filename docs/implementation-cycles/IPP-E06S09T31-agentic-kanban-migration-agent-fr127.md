---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-12T10:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E06:S09:T31 — Planning: Agentic kanban migration agent (IPW)

**Host Task:** [`T31-agentic-kanban-migration-agent-fr127.md`](../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T31-agentic-kanban-migration-agent-fr127.md) **(E06:S09:T31)**  
**Planning for:** [FR-127](../kanban/fr-br/FR-127-agentic-kanban-migration-agent-replace-tool-pipeline.md) · triage **F22** · SBL attempt 06  
**Status:** Approved

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RF1 | Agent ingests full legacy kanban corpus (epic docs, story files, inline task tokens, board state) — not directory listing only | FR-127-F1, AC1 |
| RF2 | Agent proposes domain-optimised target structure with explicit keep / drop / merge rationale | FR-127-F2 |
| RF3 | Operator review gate blocks file writes until explicit sign-off; refinements via dialogue | FR-127-F3, AC1 |
| RF4 | Agent executes migration (synthesised epic docs, renamed stories, cross-references) after sign-off | FR-127-F4 |
| RF5 | Agent runs post-migration validation (sign-off validators, reference consistency, legacy preserved) | FR-127-F4 |
| RF6 | Deprecate or gate `detect→analyze→migrate` pipeline and installer migration modes; retain `--mode fresh` as automated path | FR-127-F5, AC3 |
| RF7 | Publish agent workflow spec covering ingest → propose → review → execute → validate | T31 deliverable 1 |
| RF8 | Publish deprecation plan for migration tool modes with INSTALL pointer | T31 deliverable 2 |
| RF9 | Update INSTALL / brownfield documentation with agentic migration profile | T31 deliverable 3, FR-127 AC |
| RF10 | SBL-style corpus used as reference fixture or replay test | AC2, SBL attempt 06 report |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RNF1 | Preserve legacy source tree (dual-tree / archive) per FR-081 brownfield contract | FR-127-NF1, ADR-003 |
| RNF2 | Workflow follows established agent-execution guide pattern (UKW/RW parity) | Framework convention |
| RNF3 | Greenfield mirror synced when `packages/frameworks/**` changes | FR-110, P-GREENFIELD-SYNC |
| RNF4 | Deprecation is gated (stderr + non-zero exit or explicit `--i-know-what-im-doing`) — not silent removal in v1 | Adopter safety |
| RNF5 | Kboard template v2.2.0 already shipped — no duplicate template work | AC4 / UXR-028 / T13 |

### 1.3 Invariants and boundaries

- **Invariants:**
  - Legacy kanban root remains untouched (read-only ingest); target writes go to ADK `kanban_root` (typically `docs/kanban/`).
  - Operator review gate is mandatory before any migration file write (FR-127-F3).
  - `--mode fresh` installer behaviour unchanged except cross-link updates.
  - FR-081 host-project sovereignty: agent proposes domain structure, not mandatory canonical E01–E23 copy.
- **In scope:**
  - KMA (Kanban Migration Agent) workflow spec + slash/plain-text trigger.
  - Deprecation/gating of `detect_existing_structure.py`, `analyze_structure.py`, `migrate_structure.py` migration paths, `semantic_matcher.py`, `migration_plan_presenter.py`, and installer modes `migration`, `hybrid`, `canonical_adoption`, `auto` (when it resolves to migration).
  - INSTALL brownfield section + kanban README/scripts README updates.
  - ADR documenting architectural decision (agentic replaces tool pipeline).
  - SBL minimal fixture + replay tests in ai-dev-kit repo.
  - Optional integration test hook for full SBL corpus when `STARBLORN_LEGACY_ROOT` env set.
- **Out of scope:**
  - Fixing BR-108 zero-padded epic detection in tool pipeline (owned by E06:S09:T32).
  - Automated LLM API wiring inside Python scripts (agent intelligence lives in IDE agent session per UKW pattern).
  - Populated kboard example packaging (UXR-028 stretch on T13).
  - Orchestrator dual-tree ergonomics (F10/F20 on T26).
  - Removing migration script files entirely in this task (gate + deprecate first; removal deferred to post-adoption window).

### 1.4 Phase 1 planning decisions (MWF continuous — no user block)

| Gap | Decision |
| --- | -------- |
| Workflow trigger name | **KMA** (`/kma`, plain-text `KMA`) — Kanban Migration Agent; parallels UKW/RW naming |
| Script removal vs gate | **Gate first** with deprecation banners + exit 2; retain scripts for one release cycle with `DEPRECATED` module docstrings |
| SBL fixture location | `tests/fixtures/sbl-legacy-kanban-minimal/` — 3 epics, 8 stories, non-canonical `E{n}-S{m}.md` naming + inline tasks; full corpus optional via env |
| Target structure model | Agent proposes **canonical shell (E01–E10)** + **domain epics (E21+)** per SBL attempt 06 outcome |
| ADR required | **Yes** — T1/T3/T4/T5 positive; supersedes kanban README migration workflow |

---

## 2. Specification

### 2.1 Goal

Replace the inadequate `detect→analyze→migrate` tool pipeline for brownfield/domain adopters with a documented **Kanban Migration Agent (KMA)** workflow that ingests legacy corpus, proposes a domain-aware target structure, requires operator review before writes, executes synthesis migration, and validates results — while gating legacy migration installer modes and pointing adopters to KMA + retained `--mode fresh`.

**Evidence:** SBL attempt 06 — tool pipeline detected **0/80+** stories; agentic approach migrated **72 stories** into E01–E10 + E21–E28 ([kanban-migration-experiment-report](../../adk-install-into-sbl/attempt-06/feedback-package/kanban-migration-experiment-report.md)).

### 2.2 Specification mapping from ascertained requirements

| RF/RNF | Specification element |
| ------ | ---------------------- |
| RF1 | KMA Step 1 **Ingest** — recursive read of legacy root; parse epic/story/task tokens; load board if present |
| RF2 | KMA Step 2 **Propose** — structured proposal artifact (`migration-proposal.md`) with epic map table, keep/drop/merge, domain rationale |
| RF3 | KMA Step 3 **Review** — **BLOCKING** gate; agent presents proposal; no file writes until operator confirms (or revises) |
| RF4 | KMA Step 4 **Execute** — write target tree under `kanban_root`; synthesise epic overviews; rename stories to v3.2 paths |
| RF5 | KMA Step 5 **Validate** — run `validate_installation.py`, `validate_kanban_v32_fingerprint.py` (if fresh shell present), link spot-checks |
| RF6–RF8 | Deprecation guide + installer gate + README strikethrough of old workflow |
| RF9 | INSTALL brownfield new subsection **Agentic legacy migration (KMA)** |
| RF10 | Fixture + `test_kma_sbl_fixture_replay.py` asserting ingest counts and proposal schema |
| RNF1 | Ingest reads legacy path only; execute writes to separate `kanban_root`; document dual-tree in proposal |

### 2.3 Constraints

- Agent execution guide must live under `packages/frameworks/kanban/` (framework-owned workflow).
- Slash command at `.claude/commands/kma.md` with plain-text `KMA` alias in `CLAUDE.md`.
- Deprecation must not break `--mode fresh` or `--mode update` (path refresh only).
- BR-097: post-ship verification waves prescribe `RW E06:S09:T31 --art` only.
- T32 (BR-108) may land in parallel — KMA does not depend on tool-pipeline fixes.

### 2.4 Status transition intent (mandatory)

- **Current task status:** TODO
- **Transition trigger to IN PROGRESS:** First non-planning implementation change lands (Step 1 of §4).
- **Transition trigger to COMPLETE:** AC1–AC3 satisfied with test/doc evidence; AC4 pre-satisfied.
- **Atomic propagation requirement:** Task doc status and `kboard.md` row update in same RW Step 7 change set.
- **Owner:** IDW implementation execution (not this IPW).

### 2.5 ADR necessity decision (mandatory — IPW Phase 5.0)

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | **Y** | Agentic KMA vs fixing tool pipeline vs hybrid (gate tools + agent) — task selects agentic replacement |
| T2 | Reversibility | **Y** | Deprecating installer migration modes affects all brownfield adopters; script removal is multi-release |
| T3 | Blast radius | **Y** | `packages/frameworks/kanban/`, INSTALL, brownfield profile, adopter integration surface |
| T4 | Precedent | **Y** | Future brownfield kanban migrations will cite this as canonical path |
| T5 | Constraint trade-off | **Y** | Operator review gate vs full automation; domain epics (E21+) vs canonical-only |
| T6 | Governance contract | **N** | Does not change RW/IPW/UKW gates; changes adopter install path only |
| T7 | Supersedes | **Y** | Supersedes kanban README § Migration Support tool-pipeline instructions |

**Outcome:** **REQUIRED**

| ID | Exemption (only if all T = N) | Pass? | Evidence |
| -- | --------------------------- | ----- | -------- |
| E1 | Single locus | — | Not evaluated (REQUIRED) |
| E2 | No new options | — | Not evaluated |
| E3 | Reversible in one task | — | Not evaluated |
| E4 | Spec elsewhere | — | Not evaluated |
| E5 | Documented NONE | — | Not evaluated |

**ADR deliverable:** `docs/architecture/standards-and-adrs/ADR-028-agentic-kanban-migration-brownfield-fr127.md`

---

## 3. Test design

| ID | Behavior / layer | Expected check | RF |
| -- | ---------------- | -------------- | -- |
| T1 | Installer gate — `migration` mode | `install_kanban_framework.py --mode migration` exits non-zero; stderr contains KMA pointer + INSTALL URL | RF6 |
| T2 | Installer gate — `fresh` mode | `--mode fresh` on empty tmpdir still succeeds (regression) | RF6 |
| T3 | SBL minimal fixture ingest | KMA ingest helper (or test harness) reports ≥3 epics, ≥8 stories from `tests/fixtures/sbl-legacy-kanban-minimal/` | RF1, RF10 |
| T4 | Proposal schema | Generated `migration-proposal.md` contains required sections: Epic map, Keep/Drop/Merge, Domain rationale, Operator sign-off block | RF2, RF3 |
| T5 | Review gate enforcement | Agent execution guide documents BLOCKING Step 3; test asserts guide contains "DO NOT" write before sign-off | RF3, AC1 |
| T6 | Deprecation doc linkage | `test_install_brownfield_docs.py` extended: INSTALL contains "Agentic legacy migration" + KMA trigger | RF9 |
| T7 | Dual-tree contract | Deprecation guide states legacy path read-only; fixture test verifies ingest does not modify legacy tree mtime | RNF1 |
| T8 | Optional full SBL replay | `@pytest.mark.integration` — when `SBL_LEGACY_KANBAN_ROOT` points to `starborn_legacy/KB/PM_and_Portfolio`, ingest finds ≥19 epics, ≥80 stories | RF10 |
| T9 | Greenfield sync | `sync_greenfield_install.py --check` passes after framework changes | RNF3 |

**Test files (planned):**

- `tests/kanban/test_kma_migration_deprecation.py` (T1, T2, T6)
- `tests/kanban/test_kma_sbl_fixture_replay.py` (T3, T4, T7, T8)
- `tests/fixtures/sbl-legacy-kanban-minimal/` (anonymized SBL-style corpus)

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY] Transition task `E06:S09:T31` status `TODO → IN PROGRESS`** in task doc. Update `Last updated` date. Link IPP. | Task doc `Status` = `IN PROGRESS` |
| 2 | Author **ADR-028** — agentic KMA replaces tool pipeline; dual-tree; operator gate; `--mode fresh` retained | `docs/architecture/standards-and-adrs/ADR-028-agentic-kanban-migration-brownfield-fr127.md` |
| 3 | Author **KMA agent execution guide** — 5 steps (Ingest → Propose → Review → Execute → Validate); intelligence requirements; proposal template; validation commands | `packages/frameworks/kanban/KB/Documentation/Developer_Docs/kanban-migration-agent-execution.md` |
| 4 | Add **slash command** `.claude/commands/kma.md` + `CLAUDE.md` KMA trigger routing (plain-text `KMA`) | Trigger spec |
| 5 | Add **proposal template** for operator review artifact | `packages/frameworks/kanban/templates/MIGRATION_PROPOSAL_TEMPLATE.md` |
| 6 | Author **deprecation plan** — gated modes, timeline, INSTALL pointer, script status table | `packages/frameworks/kanban/guides/migration-tool-pipeline-deprecation.md` |
| 7 | **Gate installer** — `install_kanban_framework.py`: migration/hybrid/canonical_adoption/auto→migration paths print deprecation + exit 2; link KMA guide | Gated installer |
| 8 | Add **deprecation banners** to `detect_existing_structure.py`, `analyze_structure.py`, `migrate_structure.py`, `semantic_matcher.py`, `migration_plan_presenter.py` module docstrings | Deprecated modules |
| 9 | Build **SBL minimal fixture** — 3 epics, 8 stories, non-canonical naming, inline E:S:T tokens | `tests/fixtures/sbl-legacy-kanban-minimal/` |
| 10 | Implement **tests** T1–T7 (T8 optional integration) | `tests/kanban/test_kma_*.py` |
| 11 | **Update INSTALL** — brownfield section: Agentic legacy migration (KMA); replace migration mode recommendation | `INSTALL_IN_YOUR_PROJECT.md` |
| 12 | **Update kanban README** + `scripts/README.md` — strike tool pipeline; point to KMA | Framework docs |
| 13 | Update **FR-127** status fields + implementing-task evidence links | FR doc |
| 14 | Run **`python scripts/sync_greenfield_install.py`** + commit mirror | `greenfield-install/` parity |
| 15 | **RW `E06:S09:T31 --art`** — version, changelog, kanban Step 7 four-surface sync | Local release |
| 16 | Post-ship verification: re-run pytest suite; confirm AC1–AC3 evidence in task doc | Verification notes |
| **17** | **[MANDATORY] Reconcile task `E06:S09:T31` status** to actual implementation state: if all ACs satisfied → `COMPLETE` + `✅ COMPLETE (v{version})`; else `IN PROGRESS` or `BLOCKED` + reason. Update `Last updated`. Sync `kboard.md` row. | Task doc status reflects actual state |

**RW verification rule (BR-097):** Step 16 uses **`RW E06:S09:T31 --art`** only (BUILD +1). No `--doc-policy-zero`.

### 4.1 Files to create or modify

**Create:**

- `docs/architecture/standards-and-adrs/ADR-028-agentic-kanban-migration-brownfield-fr127.md`
- `packages/frameworks/kanban/KB/Documentation/Developer_Docs/kanban-migration-agent-execution.md`
- `packages/frameworks/kanban/templates/MIGRATION_PROPOSAL_TEMPLATE.md`
- `packages/frameworks/kanban/guides/migration-tool-pipeline-deprecation.md`
- `.claude/commands/kma.md`
- `tests/fixtures/sbl-legacy-kanban-minimal/` (fixture tree)
- `tests/kanban/test_kma_migration_deprecation.py`
- `tests/kanban/test_kma_sbl_fixture_replay.py`

**Modify:**

- `packages/frameworks/kanban/scripts/install_kanban_framework.py`
- `packages/frameworks/kanban/scripts/detect_existing_structure.py`
- `packages/frameworks/kanban/scripts/analyze_structure.py`
- `packages/frameworks/kanban/scripts/migrate_structure.py`
- `packages/frameworks/kanban/scripts/semantic_matcher.py`
- `packages/frameworks/kanban/scripts/migration_plan_presenter.py`
- `packages/frameworks/kanban/README.md`
- `packages/frameworks/kanban/scripts/README.md`
- `INSTALL_IN_YOUR_PROJECT.md`
- `CLAUDE.md`
- `docs/kanban/fr-br/FR-127-agentic-kanban-migration-agent-replace-tool-pipeline.md`
- `docs/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T31-agentic-kanban-migration-agent-fr127.md`
- `docs/kanban/kboard.md` (RW Step 7)
- `greenfield-install/` mirror (sync)

### 4.2 Dependency order

1. ADR-028 (architectural anchor)
2. KMA execution guide + proposal template + kma.md command
3. Deprecation guide
4. Installer gate + script deprecation banners
5. SBL fixture
6. Tests (depend on fixture + gate behaviour)
7. INSTALL + README updates (reference stable guide paths)
8. Greenfield sync
9. RW release

### 4.3 Documentation implementation steps

1. ADR-028 before INSTALL (INSTALL links ADR)
2. KMA execution guide before slash command (command links guide)
3. Deprecation guide before installer gate messages (gate cites guide)
4. INSTALL brownfield update after guides exist
5. FR-127 status update at RW Step 7

---

## 5. Documentation deliverables

### 5.1 Existing documents to update

| Doc ID | Path | Scope of change | Tied to |
| ------ | ---- | --------------- | ------- |
| D-U1 | `INSTALL_IN_YOUR_PROJECT.md` | Add **Agentic legacy migration (KMA)** subsection under brownfield; replace `--mode migration` recommendation with KMA + `--mode fresh` | RF9, Step 11 |
| D-U2 | `packages/frameworks/kanban/README.md` | Replace § Migration Support tool pipeline with KMA pointer | RF7, Step 12 |
| D-U3 | `packages/frameworks/kanban/scripts/README.md` | Mark migration scripts DEPRECATED; KMA pointer | RF8, Step 12 |
| D-U4 | `CLAUDE.md` | Add KMA trigger routing block | Step 4 |
| D-U5 | `docs/kanban/fr-br/FR-127-*.md` | Status → IMPLEMENTED when ACs met; evidence links | Step 13 |
| D-U6 | `docs/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T31-*.md` | Status, AC checkboxes, version marker | Steps 1, 17 |
| D-U7 | `docs/kanban/kboard.md` | T31 row status + IPP link | RW Step 7 |
| D-U8 | `docs/knowledge/analysis/projects/starborn-legacy-install-triage-matrix.md` | F22 delivery note | Step 13 |

### 5.2 New documents to create

| Doc ID | Proposed path | Purpose | Tied to |
| ------ | ------------- | ------- | ------- |
| D-C1 | `docs/architecture/standards-and-adrs/ADR-028-agentic-kanban-migration-brownfield-fr127.md` | Architectural decision: agentic KMA replaces tool pipeline | §2.5, Step 2 |
| D-C2 | `packages/frameworks/kanban/KB/Documentation/Developer_Docs/kanban-migration-agent-execution.md` | KMA workflow spec (5 steps + operator gate) | RF7, Step 3 |
| D-C3 | `packages/frameworks/kanban/guides/migration-tool-pipeline-deprecation.md` | Deprecation plan + timeline + gated modes table | RF8, Step 6 |
| D-C4 | `packages/frameworks/kanban/templates/MIGRATION_PROPOSAL_TEMPLATE.md` | Operator review artifact template | RF2–RF3, Step 5 |
| D-C5 | `.claude/commands/kma.md` | Slash command execution spec | Step 4 |

### 5.3 Documentation gaps and explicit non-changes

| Gap / topic | Resolution |
| ----------- | ---------- |
| Populated kboard example (R6) | **NONE** — optional stretch on E04:S19:T13 per AC4 |
| Portal/Docusaurus page for KMA | **NONE** — developer KB under `packages/frameworks/` is NOT_APPLICABLE for portal (maintainer/framework surface) |
| Removing migration scripts entirely | **NONE this task** — gate + deprecate; removal deferred to post-adoption window in deprecation guide |
| BR-108 tool fix | **NONE** — owned by E06:S09:T32 |
| `docs/documentation/user-docs/` adopter guide | **UPDATE deferred** — INSTALL is brownfield SoT per FR-081; user-docs already link INSTALL scope stubs |

---

## 6. Documentation housing

| Doc ID | Canonical path | Publication status | Publication N/A reason | Lifecycle | Inbound links to add |
| ------ | -------------- | ------------------ | ------------------------ | --------- | -------------------- |
| D-C1 | `docs/architecture/standards-and-adrs/ADR-028-agentic-kanban-migration-brownfield-fr127.md` | NOT_APPLICABLE | Architecture corpus — not Docusaurus adopter-public | evergreen | FR-127, ADR-003, IPP §2.5 |
| D-C2 | `packages/frameworks/kanban/KB/Documentation/Developer_Docs/kanban-migration-agent-execution.md` | NOT_APPLICABLE | Framework developer KB | evergreen | kma.md, kanban README, INSTALL |
| D-C3 | `packages/frameworks/kanban/guides/migration-tool-pipeline-deprecation.md` | NOT_APPLICABLE | Framework adopter guide (vendored) | evergreen | INSTALL, scripts README |
| D-C4 | `packages/frameworks/kanban/templates/MIGRATION_PROPOSAL_TEMPLATE.md` | NOT_APPLICABLE | Framework template | evergreen | KMA guide Step 2 |
| D-C5 | `.claude/commands/kma.md` | NOT_APPLICABLE | Agent command spec | evergreen | CLAUDE.md |
| D-U1 | `INSTALL_IN_YOUR_PROJECT.md` | PUBLISHED | — | evergreen | Brownfield section anchor |
| D-U2 | `packages/frameworks/kanban/README.md` | NOT_APPLICABLE | Framework README (vendored) | evergreen | — |
| D-U3 | `packages/frameworks/kanban/scripts/README.md` | NOT_APPLICABLE | Framework scripts doc | evergreen | — |
| IPP | `docs/implementation-cycles/IPP-E06S09T31-agentic-kanban-migration-agent-fr127.md` | NOT_APPLICABLE | Planning artifact | evergreen | T31 Input/References |

**INSTALL adopter-public note:** D-U1 is repo-root INSTALL (not under `docs/guides/`). No portal pytest required for INSTALL path. If a future `docs/guides/brownfield-kanban-migration.md` is created, apply BR-068 blob URLs + portal pytest.

---

## 7. Success / verification criteria

- [ ] **AC1:** KMA agent execution guide documents 5-step workflow with explicit operator review gate (Step 3 BLOCKING)
- [ ] **AC2:** `tests/fixtures/sbl-legacy-kanban-minimal/` exists; `test_kma_sbl_fixture_replay.py` green; optional SBL integration test documented
- [ ] **AC3:** `install_kanban_framework.py --mode migration` gated; deprecation guide published; INSTALL points to KMA
- [ ] **AC4:** Pre-satisfied (kboard template v2.2.0 via UXR-028/T13) — no action required
- [ ] ADR-028 created and linked from FR-127 + INSTALL
- [ ] `pytest tests/kanban/test_kma_migration_deprecation.py tests/kanban/test_kma_sbl_fixture_replay.py -q` green
- [ ] `pytest tests/test_install_brownfield_docs.py -q` green (extended)
- [ ] All §5 UPDATE/CREATE items implemented or explicitly deferred with reason
- [ ] All §6 paths exist and are linked from task doc
- [ ] **Greenfield:** `python scripts/sync_greenfield_install.py --check` green; mirror committed in same change set
- [ ] **RW:** `RW E06:S09:T31 --art` completes locally; four-surface kanban reconciliation in Step 7

---

## References

- [FR-127](../kanban/fr-br/FR-127-agentic-kanban-migration-agent-replace-tool-pipeline.md)
- [E06:S09:T31 task doc](../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T31-agentic-kanban-migration-agent-fr127.md)
- [E06:S09:T26 program](../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T26-starborn-legacy-adk-install-program.md)
- [FR-081](../kanban/fr-br/FR-081-brownfield-modular-adopter-integration.md) · [ADR-003](ADR-003-greenfield-vs-brownfield-adoption.md)
- [kanban-migration-experiment-report](../../adk-install-into-sbl/attempt-06/feedback-package/kanban-migration-experiment-report.md)
- [adk-install-into-sbl/attempt-06/README.md](../../adk-install-into-sbl/attempt-06/README.md)
- [UKW agent execution guide](../../packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/update-kanban-workflow-agent-execution.md) (pattern reference)
- [ipw-adr-necessity-checklist.md](ipw-adr-necessity-checklist.md)
- [BR-108](../kanban/fr-br/BR-108-detect-existing-structure-zero-padded-epic-names.md) / [E06:S09:T32](IPP-E06S09T32-detect-structure-zero-padded-epic-br108.md) (parallel, out of scope)
