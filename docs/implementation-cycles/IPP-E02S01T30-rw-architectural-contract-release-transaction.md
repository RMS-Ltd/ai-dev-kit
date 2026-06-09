---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-09T19:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E02:S01:T30 — Planning: Spec, Tests, Implementation Plan (IPW)

**Host Task:** [`T30-rw-architectural-contract-release-transaction-fr122.md`](../kanban/epics/epic-02/story-01-rw-agent-execution-and-docs/T30-rw-architectural-contract-release-transaction-fr122.md) **(E02:S01:T30)**  
**Planning for:** [FR-122 — Release Workflow Architectural Contract & Release Transaction (meta)](../kanban/fr-br/FR-122-release-workflow-architectural-contract-release-transaction.md)  
**Status:** Published

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RF1 | Single meta-program owner for RW release outcome guarantees (contract + gap program). | FR-122 Summary · T30 Scope |
| RF2 | **Release identity:** Every RW anchored to exactly one `E:S:T` with resolvable task doc and releasable status. | FR-122 F1 · FR-060 |
| RF3 | **Version coherence:** `version.py`, changelogs, README SemVer, allocator mapping, and git tags mutually consistent on success. | FR-122 F2 |
| RF4 | **Release transaction:** RW succeeds only if all blocking gates pass in order; partial publish ABORTED. | FR-122 F3 |
| RF5 | **Kanban atomicity:** Release-scope four-surface reconciliation self-sufficient (no UKW dependency). | FR-122 F4 · FR-092 |
| RF6 | **Forensic traceability:** Immutable changelog timestamp, version↔task↔kanban grid, four-surface report. | FR-122 F5 |
| RF7 | **Publish policy:** Local-complete default; push opt-in; batch-push readiness. | FR-122 F6 · UXR-024 · FR-112 |
| RF8 | **Allocator preflight:** Before version bump, verify SAA DB health (`max_patch` ≥ git-tag floor); abort if truncated. | FR-122 F7 · FR-120 · incident `0.6.9.26+2` |
| RF9 | **Git-tag occupancy:** Proposed SemVer core tag must not exist unless idempotent replay of same internal. | FR-122 F8 |
| RF10 | **Single tag authority:** Step 11 only via `create_rw_tags()` / `get_rw_tag_info(finalize=True)` — never raw `git tag`. | FR-122 F9 · BR-097 |
| RF11 | **Split-brain detection:** Post-mutate validator: README SemVer == allocator mapping == staged export. | FR-122 F10 |
| RF12 | Published RW Architectural Contract (invariants + phase diagram + gate table). | FR-122 AC1 |
| RF13 | Gap matrix (contract clause → implementation → test → status). | FR-122 AC2 |
| RF14 | Wave 1 gates shipped and wired into RW preflight / Step 9 / Step 11 policy. | FR-122 AC3 |
| RF15 | No split-brain release in 10 consecutive RW runs on ai-dev-kit `dev`. | FR-122 AC4 |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RNF1 | **Spec single source:** One RW contract doc + machine-readable step/gate manifest. | FR-122 NF1 |
| RNF2 | **Agent + script split:** Agent orchestrates MUTATE; deterministic scripts own integrity gates. | FR-122 NF2 |
| RNF3 | **Idempotency:** Re-running RW on same BUILD fails loudly (`resolve_rw_build`). | FR-122 NF3 · BR-097 |
| RNF4 | **Adopter portability:** Gates read `rw-config.yaml`; no ai-dev-kit-only hardcoding. | FR-122 NF4 |
| RNF5 | **Observability:** RW emits execution log + release-readiness report + semver finalize JSON. | FR-122 NF5 · FR-044 · FR-092 |
| RNF6 | **Incremental delivery:** Waves 0–5; no full RW rewrite; FR-092 program shape. | FR-122 Summary · T30 |

### 1.3 Invariants and boundaries

**Release invariants (IPP formalizes):**

| ID | Invariant |
| -- | --------- |
| I1 | A successful release is a tuple `(internal_version, semver_full, commit_sha, tags[], four_surface_report)` — any missing field → RW ABORTED |
| I2 | Allocator writes occur only at finalize boundary; preflight is read-only health check |
| I3 | Git tag namespace and SQLite patch namespace share a common floor: `max(git_semver_cores, db_max_patch)` |
| I4 | Staged set ⊇ four-surface touched paths (BR-070 / FR-092) |
| I5 | Agent may improvise kanban narrative; agent may **not** improvise semver, tags, or BUILD resolution |

**In scope:**

- RW architectural contract documentation and gap matrix
- New preflight validators (allocator health, git-tag occupancy preview)
- Release coherence validator (README ↔ DB ↔ `version.py`)
- Policy parity: `.cursorrules`, `.claude/commands/rw.md`, `release-workflow-agent-execution.md`, `canonical-rw-steps.yaml`
- ADR-027 (agent/script boundary for release transaction)
- Optional Wave 5 thin orchestrator shell (PREFLIGHT / VALIDATE / PUBLISH only)

**Out of scope:**

- Replacing intelligent agent RW with deterministic `release_workflow.py` as sole executor
- UKW redesign
- Greenfield installer changes
- Corrective release for `0.6.9.26+2` SemVer surfaces (separate hygiene task)

---

## 2. Specification

### 2.1 Goal

Deliver a **single architectural contract** for RW that defines release invariants and transaction phases, maps every clause to today's implementation state via a gap matrix, and closes the highest-risk gaps (allocator preflight, git-tag occupancy, tag authority, split-brain detection) through incremental waves — preventing recurrence of the `0.6.9.26+2` split-brain SemVer release without rewriting the intelligent agent execution model.

### 2.2 Specification mapping from ascertained requirements

| Phase | RW transaction phase | Requirements owned |
| ----- | -------------------- | ------------------ |
| PREFLIGHT | Steps 1, 1b–1d, **1e**, **1f** (new) | RF2, RF8, RF9 + existing gates |
| PLAN | `resolve_rw_build`, semver preview, four-surface plan | RF3, RNF3 |
| MUTATE | Steps 2–7 (agent-driven) | RF5, RF6, I5 exception for kanban |
| VALIDATE | Step 9 (+ **coherence gate**) | RF4, RF11, RF7, I4 |
| PUBLISH | Steps 10–11 (+ optional 12) | RF10, RF7 |

**Absorbed predecessors (verify, do not re-litigate):**

| Artifact | FR-122 relationship |
| -------- | ------------------- |
| FR-092 / E02:S15:T07 | RF5 — kanban atomicity largely met; contract references, does not reopen |
| FR-120 / E03:S02:T14 | RF8 — SAA generation met; RW health enforcement missing |
| BR-097 / E02:S01:T24 | RF10, RNF3 — BUILD/tag rules met; agent bypass path remains |
| FR-049 | RNF1 partial — `canonical-rw-steps.yaml` exists; drift vs `.cursorrules` |
| `validate_semver_tag_alignment.py` | Push-time alignment only; not pre-bump occupancy (RF9 gap) |

### 2.3 Constraints

- Every implementation wave converges on **`RW E02:S01:T30 --art`** for that wave's slice (BR-097).
- **FORBIDDEN in verification waves:** `--doc-policy-zero` for follow-on releases after a tagged BUILD.
- Recovery after tag collision: bump BUILD (+1), re-RW — never `git tag -f` or force-push release tags.
- Framework changes under `packages/frameworks/workflow-mgt/` require greenfield sync in same change set (FR-110).
- Dual-source parity: `.cursorrules` RW excerpt ↔ `.claude/commands/rw.md` (FR-038 checklist).

### 2.4 Status transition intent (mandatory)

| Field | Value |
| ----- | ----- |
| **Current task status** | TODO |
| **Transition to IN PROGRESS** | First non-planning implementation change (Wave 0 doc commit or Wave 1 code) |
| **Transition to COMPLETE** | FR-122 AC1–AC4 satisfied with evidence (gap matrix green for Wave 1–3; 10-run streak logged) |
| **Atomic propagation** | Task doc status + `kboard.md` row updated in same change set as each wave RW |
| **Owner** | IDW execution (not this IPW) |

### 2.5 ADR necessity decision (IPW Phase 5.0)

Per [ipw-adr-necessity-checklist.md](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md).

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | **Y** | Intelligent-only RW vs thin orchestrator shell vs full deterministic script — program selects hybrid (agent MUTATE + script PREFLIGHT/VALIDATE/PUBLISH) |
| T2 | Reversibility | **Y** | Undo touches `.cursorrules`, all adopters' RW triggers, validator suite, and release gate ordering |
| T3 | Blast radius | **Y** | Framework package + multi-epic RW semantics + adopter `rw-config.yaml` contract |
| T4 | Precedent | **Y** | Future RW gate FRs must cite ADR-027 / contract clause IDs |
| T5 | Constraint trade-off | **Y** | Agent ergonomics vs deterministic integrity surfaces; local-complete vs push gates |
| T6 | Governance contract | **Y** | Changes RW step model, validators, global implementation gates |
| T7 | Supersedes | **N** | Codifies scattered FRs; does not contradict ADR-002/011 |

**Outcome:** **REQUIRED** — create **ADR-027: RW Release Transaction Contract** before Wave 0 closes.

| ID | Exemption | Pass? | Evidence |
| -- | --------- | ----- | -------- |
| E1–E5 | — | — | Not evaluated (T1–T6 positive) |

---

## 3. Test design

| ID | Behavior / layer | Expected check | Requirements |
| -- | ---------------- | -------------- | ------------ |
| T1 | Allocator preflight | Truncated DB (`max_patch < 1000` on ai-dev-kit) → Step 1e **ABORT** (exit ≠ 0) | RF8 |
| T2 | Git-tag floor | Existing `v0.4.11` tag → preview allocates patch ≥ 1096, not 11 | RF9 |
| T3 | Tag authority | `create_rw_tags` collision → `RuntimeError`; RW Step 11 stops | RF10 |
| T4 | Split-brain | README SemVer ≠ DB mapping for staged `version.py` → coherence gate **FAIL** | RF11 |
| T5 | Release tuple | E2E fixture: successful RW yields I1 tuple complete | RF3, RF4 |
| T6 | Agent contract | Simulated RW using raw `git tag` → policy/contract test documents violation | RF10 |
| T7 | Idempotency | `resolve_rw_build` on tagged BUILD → non-zero / abort | RNF3 |
| T8 | Config portability | Validators run with only `rw-config.yaml` paths (no hardcoded `src/fynd_deals`) | RNF4 |
| T9 | Kanban regression | Step 7 four-surface still passes `validate_release_readiness.py` after new gates | RF5 |
| T10 | Streak | 10 consecutive RW on `dev` with coherence gate — zero split-brain | RF15 |

### 3.1 Planned test locations

| Area | Path |
| ---- | ---- |
| Allocator preflight | `packages/frameworks/workflow-mgt/scripts/validation/test_validate_allocator_health.py` |
| Git-tag occupancy | `packages/frameworks/workflow-mgt/scripts/validation/test_validate_git_tag_occupancy.py` |
| Release coherence | `packages/frameworks/workflow-mgt/scripts/validation/test_validate_release_coherence.py` |
| Tag authority regression | Extend `packages/frameworks/workflow-mgt/scripts/version/test_task_touch_mapping.py` |
| RW scenario parity | Extend `tests/rw_scenarios/test_t05_parity.py` for Step 1e/1f |
| Contract doc | Structural review checklist in §7 (no executable test) |

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY] Transition task `E02:S01:T30` status `TODO → IN PROGRESS`** in task doc. Update `Last updated`. Sync `kboard.md` row to IN PROGRESS. | Task doc + board |
| **2** | **Wave 0 — Contract + gap matrix + ADR-027 draft** | See §4.1 Wave 0 |
| **3** | Operator review Wave 0 artifacts (no code) | Sign-off note in task doc or FR-122 |
| **4** | **Wave 1 — Preflight gates** | `validate_allocator_health.py`, `validate_git_tag_occupancy.py`; wire Step 1e/1f in `.cursorrules`, `rw.md`, execution guide, `canonical-rw-steps.yaml` |
| **5** | **`RW E02:S01:T30 --art`** — Wave 1 release | Version marker on task + FR-122 |
| **6** | **Wave 2 — Release coherence gate** | `validate_release_coherence.py`; wire Step 9 blocking |
| **7** | **`RW E02:S01:T30 --art`** — Wave 2 release | Coherence gate live |
| **8** | **Wave 3 — Tag authority hard gate** | Step 11 policy: forbid raw `git tag`; dual-source parity; optional `validate_rw_tag_authority.py` |
| **9** | **`RW E02:S01:T30 --art`** — Wave 3 release | FR-122 AC3 satisfied |
| **10** | **Wave 4 — Machine manifest** | `rw-contract.yaml` gate manifest; collapse step-number drift vs FR-049 |
| **11** | **`RW E02:S01:T30 --art`** — Wave 4 release | RNF1 manifest |
| **12** | **Wave 5 (optional) — Thin orchestrator** | `rw_orchestrator.py` runs PREFLIGHT+VALIDATE+PUBLISH; agent owns MUTATE |
| **13** | **Wave 8 — Sign-off** | 10-run streak evidence; gap matrix all Wave 1–3 clauses GREEN |
| **14** | **`RW E02:S01:T30 --art`** — program sign-off | FR-122 AC4 |
| **15** | **[MANDATORY] Reconcile task `E02:S01:T30` status** to actual state: `COMPLETE` + `✅ COMPLETE (v{version})` if AC1–AC4 evidenced; else `IN PROGRESS` or `BLOCKED` + reason. Update `Last updated` + `kboard.md`. | Task doc status reflects actual state |

### 4.1 Files to create or modify

**Wave 0 (CREATE):**

| File | Purpose |
| ---- | ------- |
| `packages/frameworks/workflow-mgt/docs/rw-architectural-contract.md` | Canonical contract (RF12) |
| `docs/knowledge/analysis/rw-contract-gap-matrix.md` | Gap matrix (RF13) |
| `docs/architecture/standards-and-adrs/ADR-027-rw-release-transaction-contract.md` | ADR (§2.5 REQUIRED) |

**Wave 1 (CREATE + UPDATE):**

| File | Action |
| ---- | ------ |
| `packages/frameworks/workflow-mgt/scripts/validation/validate_allocator_health.py` | CREATE |
| `packages/frameworks/workflow-mgt/scripts/validation/validate_git_tag_occupancy.py` | CREATE |
| `packages/frameworks/workflow-mgt/scripts/validation/test_validate_allocator_health.py` | CREATE |
| `packages/frameworks/workflow-mgt/scripts/validation/test_validate_git_tag_occupancy.py` | CREATE |
| `packages/frameworks/workflow-mgt/canonical-rw-steps.yaml` | UPDATE — step_1e, step_1f |
| `.cursorrules` RW section | UPDATE — Step 1e/1f |
| `.claude/commands/rw.md` | UPDATE — parity |
| `packages/frameworks/workflow-mgt/KB/.../release-workflow-agent-execution.md` | UPDATE |
| `rw-config.yaml` | UPDATE — optional `allocator_health` / `git_tag_occupancy` keys |
| `greenfield-install/...` | SYNC mirror |

**Wave 2 (CREATE + UPDATE):**

| File | Action |
| ---- | ------ |
| `packages/frameworks/workflow-mgt/scripts/validation/validate_release_coherence.py` | CREATE |
| `packages/frameworks/workflow-mgt/scripts/validation/test_validate_release_coherence.py` | CREATE |
| Step 9 validator list in `.cursorrules`, `rw.md`, execution guide | UPDATE |

**Wave 3 (UPDATE):**

| File | Action |
| ---- | ------ |
| `.cursorrules` Step 11 | UPDATE — `create_rw_tags` only |
| `packages/frameworks/workflow-mgt/docs/rw-trigger-dual-source-parity.md` | UPDATE checklist |
| Optional `validate_rw_tag_authority.py` | CREATE — inspects tag creation path |

**Wave 4 (CREATE + UPDATE):**

| File | Action |
| ---- | ------ |
| `packages/frameworks/workflow-mgt/rw-contract.yaml` | CREATE — gate manifest |
| `canonical-rw-steps.yaml` | UPDATE — align IDs to contract |

**Wave 5 (optional CREATE):**

| File | Action |
| ---- | ------ |
| `packages/frameworks/workflow-mgt/scripts/rw_orchestrator.py` | CREATE — thin shell |

**Kanban / FR (each wave):**

| File | Action |
| ---- | ------ |
| `T30-*.md` | UPDATE — wave status, version anchors |
| `FR-122-*.md` | UPDATE — AC checkboxes, status |
| `story-01-rw-agent-execution-and-docs.md` | UPDATE — checklist row status |
| `kboard.md` | UPDATE — row status + version |

### 4.2 Dependency order

1. Wave 0 docs (contract, ADR, gap matrix) — no code dependency
2. Wave 1 preflight scripts — depend on Wave 0 gate IDs
3. Wave 2 coherence — depends on Wave 1 allocator path stable
4. Wave 3 tag authority — depends on Wave 2 catching split-brain before commit
5. Wave 4 manifest — depends on Waves 1–3 gate names stable
6. Wave 5 orchestrator — optional; depends on Wave 4 manifest

### 4.3 Documentation implementation steps

1. Publish ADR-027 before editing `.cursorrules` Step 1e/1f (governance citation chain).
2. Update `docs/maintenance/saa-operator-verification-e03s02t14.md` — cross-link Step 1e validator (ops → automated gate).
3. Update `workflow-flaws-reference-guide.md` — add split-brain class entry referencing FR-122.
4. Update FR-122 gap matrix after each wave RW.

---

## 5. Documentation deliverables

### 5.1 Existing documents to update

| Doc ID | Path | Scope of change | Tied to |
| ------ | ---- | --------------- | ------- |
| D-U1 | `.cursorrules` RW trigger section | Add Step 1e/1f, coherence gate, Step 11 tag authority | Wave 1–3 · RF8–RF11 |
| D-U2 | `.claude/commands/rw.md` | Dual-source parity with D-U1 | Wave 1–3 |
| D-U3 | `packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md` | Phase diagram, gate table, abort protocol | Wave 0–3 |
| D-U4 | `packages/frameworks/workflow-mgt/canonical-rw-steps.yaml` | step_1e, step_1f; Step 9 gate list | Wave 1–4 |
| D-U5 | `docs/kanban/fr-br/FR-122-*.md` | Status, AC progress, IPP link | Each wave |
| D-U6 | `docs/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs/T30-*.md` | Wave status, version anchors, IPP link | Each wave |
| D-U7 | `docs/kanban/kboard.md` | Row status/version | Each wave RW |
| D-U8 | `docs/maintenance/saa-operator-verification-e03s02t14.md` | Link automated Step 1e | Wave 1 |
| D-U9 | `docs/architecture/standards-and-adrs/workflow-flaws-reference-guide.md` | Split-brain failure class | Wave 0 |
| D-U10 | `rw-config.yaml` | Optional gate config keys | Wave 1 |
| D-U11 | `packages/frameworks/workflow-mgt/docs/rw-trigger-dual-source-parity.md` | New gate parity rows | Wave 3 |

### 5.2 New documents to create

| Doc ID | Proposed path | Purpose | Tied to |
| ------ | ------------- | ------- | ------- |
| D-C1 | `packages/frameworks/workflow-mgt/docs/rw-architectural-contract.md` | Canonical RW contract | RF12 · Wave 0 |
| D-C2 | `docs/knowledge/analysis/rw-contract-gap-matrix.md` | Clause → impl → test → status | RF13 · Wave 0+ |
| D-C3 | `docs/architecture/standards-and-adrs/ADR-027-rw-release-transaction-contract.md` | Agent/script boundary ADR | §2.5 · Wave 0 |
| D-C4 | `packages/frameworks/workflow-mgt/rw-contract.yaml` | Machine-readable gate manifest | RNF1 · Wave 4 |

### 5.3 Documentation gaps and explicit non-changes

| Gap / topic | Resolution |
| ----------- | ---------- |
| Adopter-public user guide for RW contract | **NONE** — maintainer/framework KB only; not in FR-114 allowlist |
| UKW execution guide | **NONE** — out of scope per FR-122 |
| `release_workflow.py` deterministic script | **NONE** — explicitly out of scope; document as rejected alternative in ADR-027 |
| Corrective `0.6.9.26+2` changelog/README fix | **NONE** in T30 — separate hygiene; noted in FR-122 Notes |
| Portal / Docusaurus | **NONE** — no §6 paths under `docs/guides/` or `docs/documentation/` |

---

## 6. Documentation housing

| Doc ID | Canonical path | Publication status | Publication N/A reason | Lifecycle | Inbound links to add |
| ------ | -------------- | ------------------ | ---------------------- | --------- | -------------------- |
| IPP | `docs/implementation-cycles/IPP-E02S01T30-rw-architectural-contract-release-transaction.md` | PUBLISHED | — | evergreen | T30 Input, References, FR-122 |
| D-C1 | `packages/frameworks/workflow-mgt/docs/rw-architectural-contract.md` | PUBLISHED | — | evergreen | ADR-027, execution guide, `.cursorrules` |
| D-C2 | `docs/knowledge/analysis/rw-contract-gap-matrix.md` | PUBLISHED | — | evergreen | T30, FR-122, ADR-027 |
| D-C3 | `docs/architecture/standards-and-adrs/ADR-027-rw-release-transaction-contract.md` | PUBLISHED | — | evergreen | IPP §2.5, workflow-flaws guide |
| D-C4 | `packages/frameworks/workflow-mgt/rw-contract.yaml` | PUBLISHED | — | evergreen | canonical-rw-steps.yaml, rw.md |
| D-U1–D-U11 | (see §5.1) | PUBLISHED | — | evergreen | Per wave RW changelog |

**Greenfield:** Any change under `packages/frameworks/workflow-mgt/` → `python scripts/sync_greenfield_install.py --check` + mirror in same change set.

**Portal:** Not applicable — no adopter-public paths in this program.

---

## 7. Success / verification criteria

- [ ] ADR-027 published with agent/script boundary and rejected alternatives documented
- [ ] RW architectural contract doc published with invariants I1–I5 and phase diagram
- [ ] Gap matrix published; Wave 1–3 clauses marked GREEN with test IDs
- [ ] `validate_allocator_health.py` blocks truncated DB (T1)
- [ ] `validate_git_tag_occupancy.py` blocks occupied SemVer core (T2)
- [ ] `validate_release_coherence.py` blocks README/DB/`version.py` mismatch (T4)
- [ ] Step 11 uses `create_rw_tags` only — policy + tests (T3, T6)
- [ ] `pytest` green for new validator tests + `tests/rw_scenarios/`
- [ ] `python scripts/sync_greenfield_install.py --check` green when framework paths touched
- [ ] Dual-source parity checklist pass for `.cursorrules` ↔ `rw.md`
- [ ] 10 consecutive RW on `dev` without split-brain (T10) — evidence in gap matrix or task doc
- [ ] FR-122 AC1–AC5 satisfied; task reconciled COMPLETE with version anchor
- [ ] All §5 UPDATE/CREATE items implemented or explicitly deferred with reason in gap matrix

---

## References

- [FR-122](../kanban/fr-br/FR-122-release-workflow-architectural-contract-release-transaction.md)
- [E02:S01:T30](../kanban/epics/epic-02/story-01-rw-agent-execution-and-docs/T30-rw-architectural-contract-release-transaction-fr122.md)
- [FR-092 meta program](../kanban/fr-br/FR-092-canonical-rw-ukw-kanban-consistency-program.md) · [IPP-E2S15T07](IPP-E2S15T07-canonical-rw-ukw-kanban-consistency-program.md)
- [FR-120](../kanban/fr-br/FR-120-semver-allocation-authority-transactional-mapping-black-box.md) · [SAA operator verification](../maintenance/saa-operator-verification-e03s02t14.md)
- [BR-097](../kanban/fr-br/BR-097-rw-agent-reuses-tagged-build-and-force-moves-release-tags.md) · [IPP-E02S01T24](IPP-E02S01T24-rw-build-increment-tag-immutability.md)
- [ipw-adr-necessity-checklist.md](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md)
- [canonical-rw-steps.yaml](../../packages/frameworks/workflow-mgt/canonical-rw-steps.yaml)
- [semver_converter.py](../../packages/frameworks/workflow-mgt/scripts/version/semver_converter.py) — `create_rw_tags`
- [workflow-flaws-reference-guide.md](../architecture/standards-and-adrs/workflow-flaws-reference-guide.md)
