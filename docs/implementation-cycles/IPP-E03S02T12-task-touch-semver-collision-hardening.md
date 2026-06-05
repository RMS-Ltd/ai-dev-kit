---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-04T22:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E03:S02:T12 — Planning: Task-touch SemVer collision remediation (IPW)

**Host Task:** [`T12-implement-task-touch-semver-mapping-mode.md`](../project-management/kanban/epics/epic-03/story-02-versioning-cookbook-and-examples/T12-implement-task-touch-semver-mapping-mode.md) **(E03:S02:T12)**  
**Planning for:** [FR-045](../project-management/kanban/fr-br/FR-045-adr-002-task-touch-derived-mapping.md) · [FR-046](../project-management/kanban/fr-br/FR-046-rw-semver-tag-task-touch-mode.md) · [BR-061](../project-management/kanban/fr-br/BR-061-semver-task-touch-counter-increments-too-often.md)  
**Status:** COMPLETE (wave 3 closed **v0.3.2.12+5** — 2026-06-05)

> **IPW revision:** Follow-on wave per rolling-backlog pattern. Task **COMPLETE**; linked FBUs **REOPENED** pending user verification. Implementation gated on explicit authorization per FR-083.

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source | Wave |
| -- | ----------- | ------ | ---- |
| RF1 | Injective PATCH: each finalized internal maps to a unique PATCH under `rc_0` | FR-045 NF02, BR-061 | 2 ✅ |
| RF2 | Injective SemVer core: no two distinct internals share `MAJOR.MINOR.PATCH` | FR-046, FR-045 recurrence | 2 ✅ |
| RF3 | Finalize-time hard-fail with deterministic diagnostics | BR-061 | 2 ✅ |
| RF4 | Read-only convert idempotent; mutate only on `finalize=True` | BR-061 | 2 ✅ |
| RF5 | Registry audit + repair for ai-dev-kit (manifest-driven) | FR-045, T12 AC backfill | 2 ✅ |
| RF6 | RW boundary: fail before silent SemVer tag collision | FR-046 | 2 ✅ |
| RF7 | No remote tag rewrite; document tag↔internal mismatches | User decision | 2 ✅ |
| RF8 | **User verification gate:** Maintainer confirms injective registry + converter behaviour on live `dev` history before FBU closure | FR-045/046 recurrence | 3 |
| RF9 | **Evidence pack:** Document verification commands, outputs, residual tag/registry mismatches | Repair doc RF7 | 3 |
| RF10 | **FBU closure:** On verified pass → terminal FR-045/FR-046 (and BR-061 if applicable); prune V-band row; ledger `intake-completed.md` | ADR-018 V-band, KG-R2 | 3 |
| RF11 | **Conditional follow-on:** If verification fails or new collision post-repair → scoped implementation (converter, RW Step 11/12.5, registry repair) | User wave3_plus | 3b |
| RF12 | **Tag-alignment decision (optional):** If misalignment unacceptable, documented remediation (manifest addendum / advisory) — **no force-moving remote tags** unless separately authorized | FR-045 RF7 | 3b |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source | Wave |
| -- | ----------- | ------ | ---- |
| RNF1 | pytest coverage + RW Step 9 validator | Project convention | 2 ✅ / 3 |
| RNF2 | Backward-compatible `mapping_history` shape | semver-registry.yaml | 2 ✅ |

### 1.3 Invariants and boundaries

- **Invariants:** 1 internal ↔ 1 PATCH ↔ 1 SemVer core (for task_touch primary tags).
- **In scope (wave 2 — shipped):** `semver_converter.py`, audit/repair/validate scripts, registry repair, policy/incident docs.
- **In scope (wave 3):** Verification evidence, FBU/kboard reconciliation, optional docs-only RW closure.
- **In scope (wave 3b — conditional):** Converter/RW boundary patches, registry re-repair, advisory tag-alignment doc.
- **Out of scope:** Force-moving published Git tags; new FR-repo intake tasks under E05:S01.

---

## 2. Specification

### 2.1 Goal

**Wave 2 (shipped):** Restore trustworthy 1:1 task-touch mapping, block new collisions at finalize, and repair live `semver-registry.yaml` without rewriting remote tags. Released through **v0.3.2.12+4**.

**Wave 3 (pending):** Verify wave-2 remediation on live history; obtain user sign-off; close **REOPENED** FBUs and V-band row when evidence satisfies RF8–RF10.

**Wave 3b (conditional):** If V1–V5 fail or new collisions appear, implement scoped fixes per RF11–RF12 before FBU closure.

### 2.2 Specification mapping

**Wave 2:** Converter gains PATCH- and core-level injective guards; counter syncs to `max(patch)` after finalize. Audit/repair tooling fixed four known collision groups. `validate_semver_registry_injective.py` blocks RW when registry is non-injective.

**Wave 3:** Manual/automated verification matrix (V1–V5) produces evidence pack. No code changes required on pass path.

**Wave 3b:** Re-audit registry; patch finalize/RW boundary if gap found; extend repair manifest; optional advisory for `v0.4.870` tag misalignment (documented in [repair doc](../maintenance/semver-registry-collision-repair-2026-06-04.md)).

### 2.3 Constraints

- Primary RW tag uses SemVer core without `+BUILD`.
- Repair keeps canonical internals per manifest; orphans may be removed when duplicate of canonical row.
- Changelog language: use **Attempted fix** / **Change implemented** until user verifies; **Fixed** only after confirmation.

### 2.4 Status transition intent

- **Current task status:** **COMPLETE** (`v0.3.2.12+4`).
- **Wave 3 Step 1:** Confirm task remains **COMPLETE**; update IPP §8 and task doc `Last updated` (planning-only — no status downgrade).
- **Wave 3b trigger:** If RF11 implementation lands → task may return to **IN PROGRESS** for that scoped sub-wave only (not full reopen).
- **FBU status:** FR-045 / FR-046 / BR-061 remain **REOPENED** until RF8 evidence + user sign-off → terminal (IMPLEMENTED/FIXED/RESOLVED per doc type).
- **V-band row (kboard):** Prune only in same session as FBU closure (FR-077 atomicity).
- **Transition owner:** Implementation execution / RW Step 7 on closure build.

### 2.5 ADR necessity decision

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | N | ADR-002 task-touch already chosen |
| T2 | Reversibility | N | Registry repair via git |
| T3 | Blast radius | Y | All RW SemVer tags — wave 2 refinement only (shipped) |
| T4 | Precedent | N | Incident + policy docs exist |
| T5 | Constraint trade-off | N | No new trade-off in wave 3 |
| T6 | Governance contract | N | RW validators already codified |
| T7 | Supersedes | N | No supersession |

**Outcome:** **ALREADY_COVERED** — [dev-kit-versioning-policy.md](../governance/standards/dev-kit-versioning-policy.md) and [semver-tag-collision-incident-2026-03-07.md](../architecture/standards-and-adrs/semver-tag-collision-incident-2026-03-07.md). Re-score only if wave 3b introduces tag-rewrite policy (RF12 separate authorization).

---

## 3. Test design

### 3.1 Wave 2 (shipped — satisfied)

| ID | Behavior / layer | Expected check | Evidence |
| -- | ---------------- | -------------- | -------- |
| T1 | Finalize duplicate PATCH | ValueError | `test_task_touch_mapping.py` |
| T2 | Finalize duplicate core, different BUILD | ValueError | `test_task_touch_mapping.py` |
| T3 | Audit on fixture with collisions | Non-zero report | `audit_semver_registry_collisions.py` |
| T4 | Repair manifest on temp registry | Zero collisions after | `repair_semver_registry_collisions.py` |
| T5 | `validate_semver_registry_injective.py` | Exit 0 on repaired registry | `tests/test_semver_registry_injective.py` |
| T6 | Read-only / idempotent finalize | Tests pass | `test_task_touch_mapping.py` |

### 3.2 Wave 3 — verification matrix

| ID | Behavior | Check | Command / artefact |
| -- | -------- | ----- | ------------------ |
| V1 | Live registry injective | Exit 0 | `python packages/frameworks/workflow-mgt/scripts/validation/validate_semver_registry_injective.py` |
| V2 | Collision audit clean | Exit 0 | `python packages/frameworks/workflow-mgt/scripts/version/audit_semver_registry_collisions.py` |
| V3 | Read-only convert does not bump counter | Counter unchanged after read-only `semver_converter` call for fixed internal version | Manual or scripted compare of `task_touch_counter` in `semver-registry.yaml` |
| V4 | RW tag boundary hard-fail | Step 11 rejects conflicting primary tag lineage | Unit tests in `test_task_touch_mapping.py` + documented `v0.4.870` residual |
| V5 | Regression suite | All green | `pytest packages/frameworks/workflow-mgt/scripts/version/test_task_touch_mapping.py tests/test_semver_registry_injective.py` |

---

## 4. Implementation plan

### 4.0 Wave ledger

| Wave | Status | Release anchor | Scope |
| ---- | ------ | -------------- | ----- |
| 1 | Shipped | `v0.3.2.12+2` … `+3` | BR-061 read-only/finalize split; collision guards |
| 2 | Shipped | `v0.3.2.12+4` | Registry repair; injective validator; maintenance manifest |
| 3 | **COMPLETE** | **v0.3.2.12+5** | V1–V5 + FBU closure via RW --art |
| 3b | Conditional | TBD | RF11 fixes only if V1–V5 fail |

### 4.1 Wave 2 steps (complete)

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| 1 | Task IN PROGRESS → COMPLETE after wave 2 RW | Task doc `v0.3.2.12+4` |
| 2 | Injective guards + counter sync in `semver_converter.py` | Code |
| 3 | `audit_semver_registry_collisions.py` + `repair_semver_registry_collisions.py` | Scripts |
| 4 | Apply repair manifest to `semver-registry.yaml` | Clean registry (counter **873** post-repair; live **903** as of 2026-06-05) |
| 5 | `validate_semver_registry_injective.py` + RW Step 9 hook | Validator |
| 6 | pytest extensions | Tests green |
| 7 | Policy, incident, maintenance manifest docs | Docs |

### 4.2 Wave 3 steps (verification path)

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY]** Confirm E03:S02:T12 **COMPLETE**; add IPP §8 wave-3 header; update task doc `Last updated` | Task doc + IPP |
| 2 | Run V1–V5; capture outputs | D-C3 `docs/maintenance/semver-verification-evidence-E03S02T12-wave3.md` (CREATE) or task verification section |
| 3 | User sign-off on FR-045/046 recurrence resolution | Recorded in evidence doc |
| 4 | Update FR-045, FR-046, BR-061 with verification notes (not "Fixed" until user confirms) | FBU docs |
| 5 | RW Step 7: prune V-band row; append `intake-completed.md` on FBU closure | Kanban four-surface |
| 6 | Optional `RW -d E03:S02:T12` or BUILD+1 closure release | Version/changelog |
| **N** | **[MANDATORY]** Reconcile statuses: task **COMPLETE** (or **IN PROGRESS** only if wave 3b code lands); FBUs terminal if verified; V-band pruned | Kanban |

### 4.3 Wave 3b steps (conditional — V1–V5 fail only)

1. Re-audit `semver-registry.yaml` for new collision groups since 2026-06-04 repair.
2. Patch `semver_converter.py` and/or RW Step 11–12.5 if boundary gap found.
3. Extend [repair manifest](../maintenance/semver-registry-collision-repair-manifest.yaml); re-run repair + injective validator.
4. Update [repair doc](../maintenance/semver-registry-collision-repair-2026-06-04.md) with wave 3b addendum.
5. Optional tag-alignment advisory (RF12) — still no remote retag unless separately authorized.
6. Re-run V1–V5; return to wave 3 closure steps.

### 4.4 Files (wave 2 — shipped)

- `packages/frameworks/workflow-mgt/scripts/version/semver_converter.py`
- `packages/frameworks/workflow-mgt/scripts/version/audit_semver_registry_collisions.py`
- `packages/frameworks/workflow-mgt/scripts/version/repair_semver_registry_collisions.py`
- `packages/frameworks/workflow-mgt/scripts/version/task_touch_registry_audit.py`
- `packages/frameworks/workflow-mgt/scripts/validation/validate_semver_registry_injective.py`
- `packages/frameworks/workflow-mgt/scripts/version/test_task_touch_mapping.py`
- `tests/test_semver_registry_injective.py`
- `semver-registry.yaml`
- `docs/maintenance/semver-registry-collision-repair-2026-06-04.md`
- `docs/maintenance/semver-registry-collision-repair-manifest.yaml`

### 4.5 Files (wave 3 — on execution)

- `docs/maintenance/semver-verification-evidence-E03S02T12-wave3.md` (CREATE on verification run)
- T12 task doc, FR-045, FR-046, BR-061, `kboard.md`, `intake-completed.md`

### 4.6 Dependency order (wave 3)

1. V1–V5 evidence before FBU status change.
2. FBU doc updates before V-band prune.
3. RW only after kanban reconciliation evidence.

---

## 5. Documentation deliverables

### 5.1 Existing documents to update

| Doc ID | Path | Action | Scope | Wave |
| ------ | ---- | ------ | ----- | ---- |
| D-U1 | [IPP-E03S02T12](IPP-E03S02T12-task-touch-semver-collision-hardening.md) | UPDATE | Wave ledger, §7–§8 | 3 ✅ (this revision) |
| D-U2 | T12 task doc | DONE | Wave 3 pointer, verification section | 3 ✅ |
| D-U3 | FR-045, FR-046, BR-061 | DONE | Verification outcome / fix attempted | 3 ✅ |
| D-U4 | [semver-registry-collision-repair-2026-06-04.md](../maintenance/semver-registry-collision-repair-2026-06-04.md) | DONE | Wave 3 verification addendum | 3 ✅ |
| D-U5 | [release-workflow-agent-execution.md](../../packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md) | NONE | Unless wave 3b changes Step 11 | — |
| D-U6 | T12 task doc (wave 2) | DONE | IPP link, AC notes | 2 ✅ |
| D-U7 | dev-kit-versioning-policy.md | DONE | PATCH + core injectivity | 2 ✅ |
| D-U8 | semver-tag-collision-incident | DONE | Wave-2 addendum | 2 ✅ |

### 5.2 New documents to create

| Doc ID | Path | Action | Purpose | Wave |
| ------ | ---- | ------ | ------- | ---- |
| D-C1 | docs/maintenance/semver-registry-collision-repair-2026-06-04.md | DONE | Repair report | 2 ✅ |
| D-C2 | docs/maintenance/semver-registry-collision-repair-manifest.yaml | DONE | Canonical choices | 2 ✅ |
| D-C3 | docs/maintenance/semver-verification-evidence-E03S02T12-wave3.md | DONE | Evidence pack for user sign-off | 3 ✅ |

### 5.3 Documentation gaps and explicit non-changes

| Gap / topic | Resolution |
| ----------- | ---------- |
| Tag misalignment (`v0.4.870` vs `0.6.9.17+1`) | Documented in repair doc RF7; advisory-only unless user authorizes separate retag task |
| New ADR for wave 3 | NONE — ALREADY_COVERED per §2.5 |
| Docusaurus portal | NONE — maintenance docs not in portal nav unless later BR-066 filing task |

---

## 6. Documentation housing

| Doc ID | Canonical path | Publication status | Lifecycle | Inbound links |
| ------ | -------------- | ------------------ | --------- | ------------- |
| IPP | docs/implementation-cycles/IPP-E03S02T12-task-touch-semver-collision-hardening.md | PUBLISHED | evergreen | T12 Input, References |
| D-C1, D-C2 | docs/maintenance/ | PUBLISHED | evergreen | IPP §4, FR-045/046 |
| D-C3 | docs/maintenance/semver-verification-evidence-E03S02T12-wave3.md | PUBLISHED | evergreen | T12 verification section, IPP §8 |

---

## 7. Success / verification criteria

### 7.1 Wave 2 (shipped)

- [x] Audit reports zero PATCH/core collisions on repaired registry (`audit_semver_registry_collisions.py` exit 0 post-repair)
- [x] `pytest` task-touch + registry injective tests pass
- [x] `validate_semver_registry_injective.py` exits 0 (confirmed at RW **v0.4.19.12+5** — counter **903**)
- [x] Finalize rejects duplicate PATCH/core in unit tests
- [x] Maintenance doc records `v0.4.870` tag misalignment (no retag)

### 7.2 Wave 3 (complete)

- [x] V1–V5 verification completed with captured outputs — [D-C3 evidence](../maintenance/semver-verification-evidence-E03S02T12-wave3.md) (2026-06-05, `dev` @ `70b7242`)
- [x] User sign-off recorded for FR-045/046 recurrence resolution (`RW E03:S02:T12 --art`)
- [x] FR-045, FR-046, BR-061 terminal; verification notes in source docs
- [x] V-band row pruned; `intake-completed.md` ledger entries on FBU closure (**v0.3.2.12+5**)
- [x] All §5 wave-3 UPDATE/CREATE items implemented

---

## 8. Rolling backlog / wave ledger

### 8.1 Shipped waves

| Build | SemVer (approx) | Summary |
| ----- | --------------- | ------- |
| `v0.3.2.12+2` | — | BR-061 read-only/finalize split |
| `v0.3.2.12+3` | `v0.4.733+3` | Injective finalize; RW Step 11 hard-fail |
| `v0.3.2.12+4` | — | Registry repair manifest; injective validator |

### 8.2 Wave 3 verification checklist

Run from repo root on `dev`:

```bash
python packages/frameworks/workflow-mgt/scripts/validation/validate_semver_registry_injective.py
python packages/frameworks/workflow-mgt/scripts/version/audit_semver_registry_collisions.py
pytest packages/frameworks/workflow-mgt/scripts/version/test_task_touch_mapping.py tests/test_semver_registry_injective.py -q
```

Record stdout, exit codes, and `task_touch_counter` value in D-C3. Obtain user confirmation before marking FBUs terminal.

### 8.3 Wave 3b triggers

Activate wave 3b if any of:

- V1 or V2 exits non-zero on current `dev` HEAD
- V5 pytest failures
- New collision group discovered in `mapping_history` after 2026-06-04 repair
- RW Step 11 allows silent tag collision on live boundary test

### 8.4 Open decision: tag alignment

| Option | Action |
| ------ | ------ |
| **Accept documented misalignment** | Keep `v0.4.870` on historical commit; canonical mapping in registry is SoT |
| **Advisory remediation** | Extend repair doc + evidence pack; no `git push --force` tags |
| **Separate authorized task** | Only if user explicitly requests remote tag moves |

---

## References

- [semver_converter.py](../../packages/frameworks/workflow-mgt/scripts/version/semver_converter.py)
- [IPW ADR checklist](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md)
- [Incident log](../architecture/standards-and-adrs/semver-tag-collision-incident-2026-03-07.md)
- [Repair report](../maintenance/semver-registry-collision-repair-2026-06-04.md)
- [FR-077 — IPW status transition and kboard sync](../project-management/kanban/fr-br/FR-077-ipw-built-task-status-transition-and-kboard-sync.md)
- [ADR-018 — V-band verification rows](../architecture/standards-and-adrs/ADR-018-single-kanban-board-consolidation.md)
