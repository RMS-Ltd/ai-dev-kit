---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-29T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E5:S01:T46 — Planning: FR-046 Closure Wave (IPW)

**Host Task:** [`T46-rw-semver-tag-task-touch-mode.md`](../project-management/kanban/epics/epic-05/story-01-fr-repo/T46-rw-semver-tag-task-touch-mode.md) **(E5:S01:T46)**  
**Planning for:** [FR-046 — Dual-Version Mode Requires Task-Touch SemVer in RW](../project-management/kanban/fr-br/FR-046-rw-semver-tag-task-touch-mode.md)  
**Related planning:** [IPW-E3S2T12-task-touch-semver-collision-hardening.md](IPW-E3S02T12-task-touch-semver-collision-hardening.md) (converter finalize/idempotency — do not duplicate)  
**Status:** Published

> **IPW closure wave:** Audit shipped FR-046 behaviour (builds +2…+6), close evidenced doc gaps, record live RW smoke, supersede duplicate E2:S13:T07, reconcile kanban four-surface, release via `RW E5:S01:T46`.

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RF1 | Dual mode hard-fails unless `semver_mapping_strategy: task_touch` | FR-046:R01, T46 Contract |
| RF2 | RW Step 11 primary tag `vX.Y.Z` (no `+BUILD`) in task_touch | FR-046:R02, `.cursorrules` Step 11 |
| RF3 | Internal traceability tag `v{internal}` on same commit (default on) | FR-046:R03, `get_rw_tag_info` |
| RF4 | Step 12.5 GitHub release uses SemVer primary + internal in body | FR-046:R04, `create_github_release.py` |
| RF5 | Docs state dual ⇒ task_touch mandatory | FR-046:R05, RW guide, `.cursorrules` |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RNF1 | Non-dual modes unchanged | FR-046:NF01, `test_validate_branch_context.py` |
| RNF2 | Traceability from SemVer tag to internal version | FR-046:NF02, release body + internal tag |

### 1.3 Invariants and boundaries

- **Invariants:** Canonical tag decision path is `get_rw_tag_info(..., finalize=True)` everywhere (Step 11 + Step 12.5).
- **In scope:** Closure audit, gap fixes, live smoke evidence, T07 supersession, FR/T46 COMPLETE reconciliation.
- **Out of scope:** Re-implementing ADR-002 converter (E3:S02:T12 / FR-045); new tagging strategies; package publishing beyond GitHub release alignment.

---

## 2. Specification

### 2.1 Goal

Close FR-046 by proving shipped behaviour satisfies R01–R05 and AC1–AC4, fixing only evidenced gaps, recording user-verified acceptance, and marking E5:S01:T46 COMPLETE.

### 2.2 Specification mapping from ascertained requirements

| RF/RNF | Shipped component | Closure verification |
| ------ | ----------------- | -------------------- |
| RF1 | `validate_dual_mode_task_touch_invariant` in `validate_branch_context.py` | T1 pytest + config audit |
| RF2–RF3 | `semver_converter.get_rw_tag_info`, `git_tag_handler.py` | T2 pytest + live tag smoke |
| RF4 | `create_github_release.py` | T4 pytest |
| RF5 | `.cursorrules`, portable RW excerpt, FR-046 guide, installer examples | T5 grep + guide update |
| RNF1 | Legacy/semver_only/kanban_only tests | T1 |
| RNF2 | Dual tags on same commit + release body | Live smoke c01aa83 |

### 2.3 Constraints

- Changelog language: "Attempted resolution" until user verifies; follow-up may say "Fixed".
- Do not duplicate E3:S02:T12 converter work.
- Legacy ICW trio under `ICW-E5S1T46-*` superseded by this consolidated IPP (FR-042).

### 2.4 Status transition intent (mandatory for IPW-derived implementation tasks)

- **Current task status:** IN PROGRESS (T46 + FR-046; last build v0.5.1.46+6)
- **Transition trigger to IN PROGRESS:** Already satisfied (first implementation landed +2).
- **Transition trigger to COMPLETE:** Closure audit PASS + live dual-config RW smoke + four-surface kanban sync + `RW E5:S01:T46`.
- **Atomic propagation requirement:** Task doc, FR-046, kboard, fbuboard update in same RW Step 7 scope.
- **Owner:** Closure wave implementation (this IPP execution).

### 2.5 ADR necessity decision (mandatory — IPW Phase 5.0)

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | N | Policy fixed by FR-046 / ADR-002 |
| T2 | Reversibility | N | Closure/verification only |
| T3 | Blast radius | N | No new framework contract |
| T4 | Precedent | N | Precedent set at +6 |
| T5 | Constraint trade-off | N | No new trade-off |
| T6 | Governance contract | N | Enforcing existing RW policy |
| T7 | Supersedes | N | Aligns with ADR-002 |

**Outcome:** **EXEMPT** — cite ADR-002 task-touch mapping and FR-046 implementation guide; no new ADR.

| ID | Exemption | Pass? | Evidence |
| -- | --------- | ----- | -------- |
| E1 | Single locus | Y | FR-046 + ADR-002 govern |
| E2 | No new options | Y | Verification only |
| E3 | Reversible in one task | Y | Doc/status rollback possible |
| E4 | Spec elsewhere | Y | ADR-002 + FR-046 guide |
| E5 | Documented NONE | Y | §5.3 records no ADR CREATE |

---

## 3. Test design

| ID | Behavior / layer | Expected check | Result (2026-05-29) |
| -- | ---------------- | -------------- | ------------------- |
| T1 | RF1, RNF1 | `pytest test_validate_branch_context.py -q` | **7 passed** |
| T2 | RF2–RF3 | `pytest test_fr046_rw_tagging.py test_fr046_comprehensive.py test_task_touch_mapping.py -q` | **24 passed** |
| T3 | RF2 alignment | `validate_semver_tag_alignment.py` | **✅ OK** |
| T4 | RF4 | `pytest test_create_github_release_parsing.py -q` | **7 passed** |
| T5 | RF5 doc parity | dual + task_touch in `rw-config.yaml`, installer examples, schema | **PASS** (guide gap fixed in Wave B) |
| T6 | AC1 live | Dual-config RW: SemVer + internal tags same commit | **PASS** — `c01aa83`: `v0.4.822` + `v0.2.16.4+16` |
| T7 | AC3 | GitHub release SemVer tag name + internal in body | **PARTIAL** — unit tests pass; live release skipped (no `GITHUB_TOKEN`) |

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | Confirm E5:S01:T46 **IN PROGRESS**; update `Last updated` | Task doc |
| 2 | Run T1–T5; capture outputs | §7 audit matrix |
| 3 | Build requirement-to-evidence matrix (R01–R05, AC1–AC4) | §7 below |
| 4 | Supersede E2:S13:T07 → E5:S01:T46 | T07 doc |
| 5 | Fix FR-046 guide dual-mandatory wording (Wave B gap) | `FR-046-implementation-guide.md` |
| 6 | Record live smoke (T6/T7) | T46 + FR-046 Verification Evidence |
| 7 | RW Step 7 four-surface sync | Task, FR, kboard, fbuboard |
| **N** | Reconcile E5:S01:T46 → **COMPLETE** + `✅ COMPLETE (v0.5.1.46+7)` | Task doc + FR-046 IMPLEMENTED |

### 4.1 Files to create or modify

- **CREATE:** `docs/implementation-cycles/IPP-E5S1T46-fr046-closure-wave.md`
- **UPDATE:** T46, FR-046, T07, FR-046-implementation-guide.md, kboard.md, kboard.md

### 4.2 Dependency order

1. IPP create → wire T46 → audit → gap fix → supersede T07 → smoke record → RW

### 4.3 Documentation implementation steps

1. Publish IPP and bidirectional T46 links.
2. Update FR-046 guide dual-mandatory policy (remove stale "registry default" for dual repos).
3. Supersede T07 with pointer to T46.

---

## 5. Documentation deliverables

### 5.1 Existing documents to update

| Doc ID | Path | Scope of change | Tied to |
| ------ | ---- | --------------- | ------- |
| D2 | `T46-rw-semver-tag-task-touch-mode.md` | IPP link, audit matrix, COMPLETE | RF*, AC*, Step N |
| D3 | `FR-046-rw-semver-tag-task-touch-mode.md` | Checkbox closure, IMPLEMENTED | R01–R05, AC1–AC4 |
| D4 | `FR-046-implementation-guide.md` | Dual-mandatory policy | RF5 |
| D7 | `T07-rw-semver-tag-when-task-touch-enabled.md` | SUPERSEDED by T46 | Wave A.3 |
| D8 | `kboard.md` | T46/FR-046 row closure | RW Step 7 |

### 5.2 New documents to create

| Doc ID | Path | Purpose | Tied to |
| ------ | ---- | ------- | ------- |
| D1 | `IPP-E5S1T46-fr046-closure-wave.md` | Consolidated closure IPP | IPW output |

### 5.3 Documentation gaps and explicit non-changes

| Gap / topic | Resolution |
| ----------- | ---------- |
| Portable RW excerpt dual⇒task_touch explicit line | NONE — Step 11 already documents task_touch + `get_rw_tag_info`; dual invariant enforced in validator |
| RW execution guide Step 11 | NONE — aligned with root `.cursorrules` |
| New ADR | NONE — EXEMPT per §2.5 |
| Live GitHub release (AC3) | Deferred — no token; covered by T4 unit tests |

---

## 6. Documentation housing

| Doc ID | Canonical path | Publication status | Lifecycle | Inbound links |
| ------ | -------------- | ------------------ | --------- | ------------- |
| D1 | `docs/implementation-cycles/IPP-E5S1T46-fr046-closure-wave.md` | PUBLISHED | evergreen | T46 Input + References |
| D4 | `docs/architecture/standards-and-adrs/FR-046-implementation-guide.md` | PUBLISHED | evergreen | FR-046 References |

---

## 7. Success / verification criteria

### 7.1 Requirement-to-evidence matrix

| Req | Test | Evidence | Status |
| --- | ---- | -------- | ------ |
| R01 | T1 | `validate_branch_context.py:74` `validate_dual_mode_task_touch_invariant`; `test_validate_branch_context.py` dual fail + task_touch pass | **PASS** |
| R02 | T2, T3, T6 | `semver_converter.py:78` `get_rw_tag_info`; live tag `v0.4.822` (no +BUILD); `validate_semver_tag_alignment.py` OK | **PASS** |
| R03 | T2, T6 | `get_rw_tag_info` internal tag; live `v0.2.16.4+16` on commit `c01aa83` same as SemVer tag | **PASS** |
| R04 | T4 | `test_create_github_release_parsing.py` (7 passed); `create_github_release.py` uses `get_rw_tag_info` path | **PASS** |
| R05 | T5 | `rw-config.yaml` dual+task_touch; installer examples; FR-046 guide updated; `.cursorrules` Step 11/12.5 | **PASS** |
| NF01 | T1 | `test_validate_branch_context.py` semver_only/kanban_only/legacy unchanged | **PASS** |
| NF02 | T6, T4 | Dual tags same commit; release parser includes internal version | **PASS** |
| AC1 | T6 | Live RW `c01aa83`: primary `v0.4.822`, internal `v0.2.16.4+16` | **PASS** |
| AC2 | T1, T2 | Dual+non-task_touch fail; dual+task_touch pass; non-dual paths green | **PASS** |
| AC3 | T4, T7 | Unit tests pass; live GH release skipped (no token) | **PASS** (test-backed) |
| AC4 | T5 | FR-046 guide + T46 contract + `.cursorrules` document configuration | **PASS** |

### 7.2 Closure checklist

- [x] Requirement-to-evidence matrix: all FR-046 R01–R05 → PASS with file/test cite
- [x] AC1–AC4 satisfied (AC3 live release deferred; unit tests + tag smoke cover behaviour)
- [x] T1–T5 automated tests green (38 total across suites)
- [x] E2:S13:T07 disposition documented (superseded by E5:S01:T46)
- [x] IPP linked from T46; bidirectional wiring verified
- [x] RW E5:S01:T46 releases closure (BUILD +7) — **released v0.5.1.46+7**

### 7.3 Automated test log (2026-05-29)

```text
pytest test_validate_branch_context.py -q          → 7 passed
pytest test_fr046_*.py test_task_touch_mapping.py -q → 24 passed
pytest test_create_github_release_parsing.py -q  → 7 passed
validate_semver_tag_alignment.py                 → ✅ SemVer tag alignment OK
git rev-parse v0.4.822^{commit} v0.2.16.4+16^{commit} → c01aa83 (same commit)
```

---

## References

- [FR-046](../project-management/kanban/fr-br/FR-046-rw-semver-tag-task-touch-mode.md)
- [T46 host task](../project-management/kanban/epics/epic-05/story-01-fr-repo/T46-rw-semver-tag-task-touch-mode.md)
- [IPW-E3S2T12](IPW-E3S02T12-task-touch-semver-collision-hardening.md)
- [FR-046 implementation guide](../architecture/standards-and-adrs/FR-046-implementation-guide.md)
- [ADR-002 task-touch mapping](../architecture/standards-and-adrs/ADR-002-task-touch-derived-mapping.md) (governing spec)
- Legacy ICW trio `ICW-E5S1T46-*` — superseded by this IPP
