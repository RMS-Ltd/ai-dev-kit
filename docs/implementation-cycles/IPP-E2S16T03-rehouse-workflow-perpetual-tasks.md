---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-19T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E2:S16:T03 — Planning: Spec, Tests, Implementation Plan (IPW)

**Host Task:** [`T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md`](../../docs/project-management/kanban/epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md) **(E2:S16:T03)**
**Planning for:** FR-088 — Dedicated story for perpetual ongoing tasks
**Status:** Published (Tranches 1–3 delivered `v0.2.16.3+2`; SitRep IPW 2026-06-03 — T02/3B gate documented; fbuboard BR-067 sync in housekeeping)

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | `E2:S16:T03` documented as canonical perpetual umbrella for ad-hoc workflow maintenance (AC1) | T03 task doc |
| RF2 | Migration/hardening activities remain in scope without narrowing (AC2) | T03 task doc |
| RF3 | `E2:S16:T04` documented as kanban-focused lane under T03 umbrella (AC3) | T03 task doc |
| RF4 | Policy/validator updates preserve deterministic routing; no un-owned perpetual proliferation (AC4) | T03 task doc |
| RF5 | Validation passes for updated docs and guardrail behavior (AC5) | T03 task doc |
| RF6 | Placement guardrail: reject perpetual tasks outside `E2:S16` unless `Perpetual Override Rationale:` present | IPP-E2S16T01 §2.6 |
| RF7 | Numbering guardrail: `T1xx` hard-fails without `Historical Anchor:`; active work uses `Txx` | IPP-E2S16T01 §2.6 |
| RF8 | Marker guardrail: warn when Story 016 perpetual lanes lack `Task Type: Perpetual Maintenance` | IPP-E2S16T01 §2.6 |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RNF1 | All `validate_version_bump.py` tests must pass (regression guard) | RW Step 9 |
| RNF2 | Task doc AC closure must reference verification evidence, not just assertion | T03 AC5 |
| RNF3 | Legacy artifact `IPW-E6S07T103` must be deprecated or redirected without breaking links | Archive hygiene |

### 1.3 Invariants and boundaries

- **Invariants:**
  - Perpetual umbrella tasks keep the kanban **`Status:` field** as `IN PROGRESS` (no terminal `COMPLETE` for the task row). Acceptance criteria may be checked with evidence (`[x]` / `[~] PARTIAL`) without changing that perpetual status.
  - BUILD numbers for perpetual tasks = workflow run count (not feature iteration); high BUILD numbers are valid.
  - Legacy `T101`/`T102`/`T103` remain valid historical aliases; active work uses `E2:S16:T03`/`T04`/`T05`.
- **In scope:**
  - Fix 4 failing test fixture bugs in `test_validate_version_bump.py`.
  - Update T03 task doc ACs to reflect Waves 2 & 3 completion.
  - Archive legacy `IPW-E6S07T103` draft with redirect notice.
  - Run validators and record PASS evidence.
- **Out of scope:**
  - Rewriting guardrail implementation logic (already correct; tests only need fixture fixes).
  - Completing T02 (inventory/disposition) — acknowledged dependency, not blocking for T03 AC closure.
  - New feature development outside T03's perpetual maintenance remit.

---

## 2. Specification

### 2.1 Goal

Close the gap between implemented guardrail/discoverability work (Waves 2 & 3) and documented acceptance evidence in T03. Fix test fixture bugs so the perpetual guardrail test suite passes. Archive the outdated legacy IPW draft.

### 2.2 Specification mapping from ascertained requirements

| Requirement | Specification |
|-------------|---------------|
| RF1–RF3 | T03 task doc updated with `✅ COMPLETE` markers and verification evidence for Waves 2 & 3. |
| RF4 | `validate_version_bump.py` perpetual guardrails pass all tests; versioning policy §6.1.1 confirmed current. |
| RF5 | Validator runs captured as evidence in T03 task doc (test output, command, timestamp). |
| RF6–RF8 | Already implemented in `validate_version_bump.py`; specification = test fixtures aligned to implementation. |
| RNF1 | `pytest test_validate_version_bump.py -x` exits 0 after fixture fixes. |
| RNF3 | Legacy draft updated with deprecation banner + redirect to T03; no dangling inbound links remain. |

### 2.3 Constraints

- Do not modify `validate_version_bump.py` implementation — only test fixtures.
- Preserve legacy `T101`/`T102`/`T103` historical alias references; do not delete or rewrite historical docs.
- T02 dependency is acknowledged; T03 ACs can be marked for implemented work while noting T02 blocks exhaustive reference migration verification.

### 2.4 Status transition intent

- **Current task status:** `IN PROGRESS` (perpetual maintenance — stable).
- **Transition trigger to IN PROGRESS:** N/A for first entry; thereafter any new maintenance wave may refresh `Last updated` while **`Status:` remains `IN PROGRESS`**.
- **Acceptance criteria vs task status:** AC1–AC3 and AC5 may be marked satisfied with verification evidence; AC4 may remain `[~] PARTIAL` until [E2:S16:T02](../project-management/kanban/epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T02-inventory-and-classify-workflow-perpetual-tasks.md) completes. None of that implies flipping the host task to terminal `COMPLETE`.
- **Atomic propagation:** Task doc `Last updated` + evidence sections + kboard row + Story-016 checklist stay aligned in the same change set as the underlying work.
- **Owner:** Implementation execution step (RW attribution under T03).

### 2.5 ADR necessity decision (Tranche 3 — IPW Phase 5.0)

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | N | Follow T02 map + IPP-E02S16T01 when 3B runs |
| T2 | Reversibility | N | Doc/link edits revert in one PR |
| T3 | Blast radius | N | Scoped to kanban/governance (3A); 3B bounded by T02 |
| T4 | Precedent | N | Executes FR-088 / IPP-E02S16T01 precedent |
| T5 | Constraint trade-off | N | BR-067 policy already decided in Tranche 2 |
| T6 | Governance contract | N | No RW/IPW gate changes in Tranche 3 |
| T7 | Supersedes | N | Aligns with existing ADRs/policies |

**Outcome:** **EXEMPT** — governing docs: [dev-kit-versioning-policy.md](../architecture/standards-and-adrs/dev-kit-versioning-policy.md) §6.1.1; [IPP-E02S16T01](IPP-E02S16T01-canonical-perpetual-ongoing-tasks-story.md) §2.6 guardrails (E1–E5 pass).

### 1.4 Tranche 3 functional requirements (additive)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF-T3-1 | Close BR-067 after R1–R5 regression evidence | BR-067 |
| RF-T3-2 | AC4 full satisfaction only after T02 reference map (3B) | T03 AC4; T02 |
| RF-T3-3 | Active-surface link hygiene (kanban, open FR/BR) | IPP rolling backlog |
| RF-T3-4 | Host task remains `IN PROGRESS` (perpetual) | IPP-E02S16T01 |

---

## 3. Test design

| ID | Behavior / layer | Expected check |
| -- | ---------------- | -------------- |
| T1 | `test_task_id_extraction_prefers_canonical_section` | Assertion expects `(2, 16, 3)` to match `**Value:** E2:S16:T03` in mock content. |
| T2 | `test_validate_version_bump_passes_for_perpetual_task` (T101) | Mock task file named `T101-*.md` (not `T03-*.md`) under Epic-6/Story-007 so `locate_task_doc` finds it. |
| T3 | `test_validate_version_bump_build_increment_perpetual` | Same as T2 — mock file must match the task number under test. |
| T4 | `test_validate_version_bump_passes_for_t103` (T103) | Mock task file named `T103-*.md` under Epic-6/Story-007 so `locate_task_doc` finds it. |
| T5 | Full test suite regression | `pytest packages/frameworks/workflow\ mgt/scripts/validation/test_validate_version_bump.py -x` exits 0. |
| T6 | Perpetual guardrails live validation | `python validate_version_bump.py --strict --requested E2:S16:T03 --art` exits 0 for T03. |
| T7 | Legacy draft redirect | All inbound links to `IPW-E6S07T103` resolve to T03 or deprecation notice. |

### 3.1 Tranche 3 test design

| ID | Behavior / layer | Expected check |
| -- | ---------------- | -------------- |
| T-T3-1 | Unit | `pytest test_validate_version_bump.py -x` → 0 exit |
| T-T3-2 | Integration | BR-067 R1–R5 matrix documented PASS in BR-067 + T03 |
| T-T3-3 | Integration | Perpetual RW: `validate_version_bump.py --strict --requested E02:S16:T03 --art` after Step 2 bump |
| T-T3-4 | Structural | Active kanban: no stale `Epic-6/Story-007/.../T03` for perpetual routing |
| T-T3-5 | Structural (3B) | T02-gated exhaustive migration — deferred until T02 AC1–AC5 |

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY] Confirm task `E2:S16:T03` status remains `IN PROGRESS`** in task doc. Update `Last updated` date. | Task doc `Status` = `IN PROGRESS` |
| **2** | Fix `test_task_id_extraction_prefers_canonical_section`: update assertion to `(2, 16, 3)` to match mock content `**Value:** E2:S16:T03`. | Test passes |
| **3** | Fix `test_validate_version_bump_passes_for_perpetual_task`: rename mock task file from `T03-*.md` to `T101-*.md` (or create T101 mock). | Test passes |
| **4** | Fix `test_validate_version_bump_build_increment_perpetual`: ensure mock task file matches T101 under test. | Test passes |
| **5** | Fix `test_validate_version_bump_passes_for_t103`: rename/create mock task file to `T103-*.md` under Epic-6/Story-007. | Test passes |
| **6** | Run full test suite: `pytest test_validate_version_bump.py -x`. | 14/14 pass |
| **7** | Update T03 task doc: mark AC1–AC3 as COMPLETE with evidence (Wave 2 & 3); mark AC4 as PARTIAL (guardrails pass, T02 dependency noted for reference migration); mark AC5 with test output + validator command. | ACs reflect actual state |
| **8** | Archive legacy `IPW-E6S07T103`: add deprecation banner at top, update status to `Deprecated`, add redirect link to T03 task doc. | Draft no longer appears active |
| **9** | Run `validate_version_bump.py --strict --requested E2:S16:T03 --art` and capture output in T03 doc as AC5 evidence. | Validator passes |
| **10** | Update Story-016 doc: mark T03 checklist entry with current status and version marker. | Story doc current |
| **11** | Update `kboard.md` T03 row metadata if changed. | Board consistent |
| **12** | **[MANDATORY] Reconcile task `E2:S16:T03` with actual state:** keep **`Status: IN PROGRESS`** (perpetual). Update AC checkboxes and Verification Evidence to match shipped work; if T02 still blocks exhaustive reference migration, keep AC4 `[~] PARTIAL` with explicit T02 pointer. Update `Last updated` and forensic version line. | Task doc reflects actual state without terminal COMPLETE |

### 4.1 Files to create or modify

| File | Action | Owner Step |
|------|--------|-----------|
| `packages/frameworks/workflow mgt/scripts/validation/test_validate_version_bump.py` | Fix 4 test fixture bugs | 2–5 |
| `docs/project-management/kanban/epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md` | Mark ACs, add evidence sections | 7, 9 |
| `docs/implementation-cycles/IPW-E6S07T103-release-workflow-maintenance-perpetual.md` | Add deprecation banner + redirect | 8 |
| `docs/project-management/kanban/epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations.md` | Update T03 checklist entry | 10 |
| `docs/project-management/kanban/kboard.md` | Update T03 row metadata | 11 |

### 4.2 Document Update Details

This section prescribes the exact changes for each document. Implementation must follow these details.

#### Document A: `test_validate_version_bump.py`

**Bug 1 — `test_task_id_extraction_prefers_canonical_section` (line 43):**
- **Current assertion:** `assert epic == 6 and story == 7 and task == 101`
- **Fix:** Change to `assert epic == 2 and story == 16 and task == 3` because the mock content contains `**Value:** E2:S16:T03`, which extracts to `(2, 16, 3)`.
- **Rationale:** The test content was updated from an old `E6:S7:T101` to `E2:S16:T03` but the assertion was not aligned.

**Bug 2 — `test_validate_version_bump_passes_for_perpetual_task` (line 114):**
- **Current mock filename:** `T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md`
- **Fix:** Rename mock task file to `T101-update-kanban-workflow-ukw.md` (or `T101-*.md`).
- **Content update:** Change task doc header to `# Epic 6, Story 7, Task 101: Update Kanban Workflow (UKW)` to match the task number (101) from `version.py`.
- **Rationale:** `locate_task_doc` searches for `T{task}-*.md` where task = 101. A `T03-*.md` file is never discovered.

**Bug 3 — `test_validate_version_bump_build_increment_perpetual` (line 195):**
- **Current mock filename:** `T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md`
- **Fix:** Rename mock task file to `T101-*.md` to match VERSION_TASK = 101.
- **Rationale:** Same discovery mismatch as Bug 2.

**Bug 4 — `test_validate_version_bump_passes_for_t103` (line 264):**
- **Current mock filename:** `T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md`
- **Fix:** Rename mock task file to `T103-release-workflow-rw-maintenance.md` (or `T103-*.md`).
- **Content update:** Change task doc header to `# Epic 6, Story 7, Task 103: Release Workflow (RW) Maintenance` to match task number 103.
- **Rationale:** `locate_task_doc` expects `T103-*.md` for VERSION_TASK = 103.

#### Document B: T03 task doc (`T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md`)

**Update `Last updated` field:**
- Replace: `**Last updated:** 2026-04-27 (Wave 2 discoverability uplift: IPP cross-link parity and perpetual marker alignment)`
- With: `**Last updated:** 2026-05-19 (AC closure: Wave 2/3 verification evidence, test fixture fixes, legacy draft archive)`

**Update `Version` field:**
- Replace: `**Version:** v0.2.16.4+8`
- With: `**Version:** v0.2.16.10+2` (or current version at time of RW)

**Add new section after `## Acceptance Criteria`:**

```markdown
---

## Verification Evidence

### Wave 2 — Discoverability Uplift (2026-04-27) ✅
- IPP cross-link parity added to T03/T04/T05 task docs.
- `Task Type: Perpetual Maintenance` marker added to all three docs.
- **Evidence:** Inspect T03, T04, T05 docs; all carry `Task Type: Perpetual Maintenance` and link to `IPP-E2S16T01`.

### Wave 3 — Guardrail Enforcement (2026-04-27) ✅
- Placement guardrail: reject perpetual tasks outside `E2:S16` unless override rationale present.
- Numbering guardrail: `T1xx` hard-fails without `Historical Anchor:` marker.
- Marker guardrail: warn when Story 016 lanes lack perpetual marker.
- **Implementation:** `validate_version_bump.py` lines 85–129 (`validate_perpetual_guardrails`).
- **Evidence:** `pytest test_validate_version_bump.py -x` passes (14/14) after fixture fixes (see AC5).

### AC5 — Validator Regression Evidence
- **Command:** `python "packages/frameworks/workflow mgt/scripts/validation/validate_version_bump.py" --strict --requested E2:S16:T03 --art`
- **Result:** Exit 0, perpetual guardrails pass.
- **Test command:** `pytest "packages/frameworks/workflow mgt/scripts/validation/test_validate_version_bump.py" -x`
- **Test result:** 14 passed, 0 failed.
```

**Update AC checkboxes:**
- AC1: `- [x] **AC1:**` — append `(Wave 2/3: T03 documented as canonical perpetual umbrella with `Task Type: Perpetual Maintenance` marker)`
- AC2: `- [x] **AC2:**` — append `(Wave 3: guardrails explicitly include migration/hardening in scope; no narrowing occurred)`
- AC3: `- [x] **AC3:**` — append `(Wave 2: T04 doc updated with cross-links and perpetual marker; T03/T04 boundary documented)`
- AC4: `- [ ] **AC4:**` — change to `- [~] **AC4: PARTIAL**` — add note: `Guardrail implementation and policy updates are COMPLETE (Wave 3). Exhaustive reference migration across all docs/boards is BLOCKED on T02 completion (inventory/disposition not yet available).`
- AC5: `- [x] **AC5:**` — append `(14/14 tests pass; validator --strict --art passes for T03; evidence recorded in Verification Evidence section above)`

#### Document C: Legacy IPW draft (`IPW-E6S07T103-release-workflow-maintenance-perpetual.md`)

**Insert deprecation banner at top of file (after frontmatter, before `# E2:S16:T03`):**

```markdown
> **DEPRECATED — This document is a historical artifact.**
> 
> The canonical perpetual task for workflow maintenance is now **E2:S16:T03**.
> All active planning and work for perpetual workflow maintenance should reference:
> - [`T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md`](../../docs/project-management/kanban/epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md)
> - [`IPP-E2S16T01-canonical-perpetual-ongoing-tasks-story.md`](../../docs/implementation-cycles/IPP-E2S16T01-canonical-perpetual-ongoing-tasks-story.md)
>
> This draft is retained for historical traceability only. Do not extend or update.

```

**Update Status field:**
- Replace: `**Status:** Draft`
- With: `**Status:** Deprecated (superseded by E2:S16:T03; canonical policy in IPP-E2S16T01)`

**Update Host Task link:**
- Replace: `[`T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md`](../project-management/kanban/epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md)`
- With: `[`T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md`](../../docs/project-management/kanban/epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md)`
- **Rationale:** Old link points to wrong path (Epic-6/Story-007). Must redirect to actual T03 location.

**Update FR-041 reference:**
- Replace: `FR-041 – Perpetual Task for Release Workflow Maintenance`
- With: `FR-088 – Dedicated story for perpetual ongoing tasks (supersedes FR-041)`

#### Document D: Story-016 doc (`Story-016-perpetual-ongoing-workflow-operations.md`)

**Update T03 checklist entry (line 29):**
- Current: `- [ ] **E2:S16:T03 – Workflow maintenance (Perpetual)** - IN PROGRESS (HIGH, umbrella perpetual anchor for ad-hoc workflow maintenance...)`
- Replace with:
```markdown
- [ ] **E2:S16:T03 – Workflow maintenance (Perpetual)** - IN PROGRESS (HIGH, umbrella perpetual anchor; Wave 2/3 COMPLETE: cross-link parity, perpetual markers, guardrail enforcement in validate_version_bump.py; AC1–AC3 and AC5 satisfied; AC4 PARTIAL pending T02 inventory)
```

**Update `Last updated` field:**
- Replace: `**Last updated:** 2026-05-16 (BR-072 REOPENED...)`
- With: `**Last updated:** 2026-05-19 (T03 AC closure: Wave 2/3 verification evidence and test fixture fixes under v0.2.16.10+2)`

**Update `Version` field:**
- Replace: `**Version:** v0.2.16.4+8`
- With: `**Version:** v0.2.16.10+2`

#### Document E: `kboard.md`

**Update T03 row in Ongoing (Perpetual) section:**
- Current: The T03 row in kboard should reflect that Wave 2/3 are complete.
- Update description text to include: `Wave 2/3 COMPLETE (cross-link parity, perpetual markers, guardrail enforcement); AC1–AC3, AC5 satisfied; AC4 PARTIAL (T02 dependency)`
- Update `Last modified` to 2026-05-19.

**Update board header:**
- Update `**Last Updated:**` to reflect T03 work.
- Update `**Version:**` to current version.

### 4.3 Dependency order

1. Step 2–5 (test fixes) are independent and can be done in any order.
2. Step 6 (full suite run) depends on Steps 2–5.
3. Step 7 (T03 doc AC update) depends on Step 6.
4. Step 8 (legacy draft) is independent.
5. Step 9 (live validator) is independent.
6. Steps 10–11 (Story/kboard) depend on Step 7.
7. Step 12 (status reconciliation) is last.

### 4.4 Tranche 3 implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY]** Confirm `E02:S16:T03` **`IN PROGRESS`**; refresh `Last updated`. | Task doc |
| **2** | Run BR-067 R1–R5 regression; record in BR-067 + T03 Verification Evidence. | Evidence table |
| **3** | Set BR-067 **RESOLVED**; sync kboard/fbuboard rows. | Boards |
| **4** | Fix active kanban/FR/BR stale `Epic-6/Story-007` T03 paths → Story-016 T03/T04. | Link hygiene |
| **5** | **3B (T02-gated):** **Entry gate** — [T02](../project-management/kanban/epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T02-inventory-and-classify-workflow-perpetual-tasks.md) AC1–AC5 complete; required artifact [`IPP-E2S16T02-perpetual-task-inventory.md`](IPP-E2S16T02-perpetual-task-inventory.md) (CREATE on T02 IPW) linked from T01, T02, and T03. Then: apply reference map (active kanban + agreed archive surfaces), document before/after stale `Epic-6/Story-007` path counts, mark T03 AC4 `[x]`, `RW E02:S16:T03 --art`. | Deferred until gate |
| **6** | Update IPP §7 Tranche 3 checkboxes. | IPP current |
| **7** | **`RW E02:S16:T03 --art`** — ship + Step 7 four-surface sync. | Release |
| **8** | **[MANDATORY]** Reconcile T03: **`IN PROGRESS`**; AC4 `[~] PARTIAL` until 3B; evidence current. | Task doc |

---

## 5. Documentation deliverables

### 5.1 Existing documents to update

| Doc ID | Path | Action | Tied to |
| ------ | ---- | ------ | ------- |
| D1 | `docs/implementation-cycles/IPP-E02S16T03-rehouse-workflow-perpetual-tasks.md` | UPDATE | Tranche 3 |
| D2 | T03 task doc | UPDATE | BR-067; 3A hygiene |
| D3 | `fr-br/BR-067-*.md` | UPDATE | RESOLVED |
| D4 | `kboard.md`, `fbuboard.md` | UPDATE | Rows |
| D5 | Story-016 doc | UPDATE | Checklist |
| D6 | Active kanban FR/BR/epic subset | UPDATE | RF-T3-3 |

### 5.2 New documents to create

None.

### 5.3 Documentation gaps and explicit non-changes

| Gap / topic | Resolution |
| ----------- | ---------- |
| Exhaustive `T101+` migration | Deferred — T02 (3B) |
| Changelog archive | NONE — historical |
| New ADR | NONE — §2.5 EXEMPT |

---

## 6. Documentation housing

| Doc ID | Canonical path | Publication status |
| ------ | -------------- | ------------------ |
| D1 | `docs/implementation-cycles/IPP-E02S16T03-rehouse-workflow-perpetual-tasks.md` | PUBLISHED |
| D2–D6 | `docs/project-management/kanban/...` | PUBLISHED |
| Workflow KB | `release-workflow-agent-execution.md` | PUBLISHED (Tranche 2) |
| Portal | — | NOT_APPLICABLE |

---

## 7. Success / verification criteria

### Tranche 1 (verified 2026-05-20)

- [x] `pytest test_validate_version_bump.py -x` exits 0.
- [x] T03 AC1–AC3, AC5 with Wave 2/3 evidence; AC4 PARTIAL (T02).
- [x] Legacy `IPW-E6S07T103` deprecated with T03 redirect.

### Tranche 2 (verified 2026-05-30 — `v0.2.16.3+0`)

- [x] BR-067 policy table + `--doc-policy-zero` docs shipped.

### Tranche 3 (2026-06-03 — v0.2.16.3+2)

- [x] BR-067 R1–R5 regression recorded; BR-067 **RESOLVED**.
- [x] Active kanban stale perpetual links fixed (3A — 15 files).
- [x] T03 Tranche 3 Verification Evidence added.
- [x] AC4 `[~] PARTIAL` until T02 (3B deferred).
- [x] `RW E02:S16:T03 --art` + Step 7 four-surface report.

### Tranche 3B backlog (T02-gated)

**Entry gate: SATISFIED (2026-06-03)** — [`IPP-E2S16T02-perpetual-task-inventory.md`](IPP-E2S16T02-perpetual-task-inventory.md) published; [T02](../project-management/kanban/epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T02-inventory-and-classify-workflow-perpetual-tasks.md) **COMPLETE** with AC1–AC5 evidence.

**3B entry criteria (all mandatory before migration RW):**

1. [x] [`IPP-E2S16T02-perpetual-task-inventory.md`](IPP-E2S16T02-perpetual-task-inventory.md) — inventory §2.4, disposition §2.4, ID map §2.5, reference map §2.6, links from T01/T02.
2. [x] T02 AC1–AC5 checked with evidence (discovery counts, pytest).
3. [ ] T03 AC4 remains `[~] PARTIAL` until **3B execution** completes; T03 **`Status:`** stays **`IN PROGRESS`** (perpetual).

**3B execution (authorized separately):** Apply reference map per IPP-E2S16T02 §2.6; document before/after `Epic-6/Story-007` counts; mark T03 AC4 `[x]`; `RW E02:S16:T03 --art`.

### SitRep — E02:S16:T02 (2026-06-03, post-IPW)

| Dimension | State |
| --------- | ----- |
| Task doc | **COMPLETE**; IPP published |
| IPP | [`IPP-E2S16T02-perpetual-task-inventory.md`](IPP-E2S16T02-perpetual-task-inventory.md) |
| Reference baseline | 167 `Epic-6/Story-007` occurrences / 101 files under `docs/` |
| 3B | **Unblocked** — execution is T03 Tranche 3B, not another T02 IPW |

### SitRep — E02:S16:T03 host (2026-06-03)

| Dimension | State |
| --------- | ----- |
| IPP | This document; Tranches 1–3 shipped (`v0.2.16.3+2`) |
| AC1–AC3, AC5 | Satisfied (T03 verification) |
| AC4 | PARTIAL — 3B **gate open**; migration not yet executed |
| Board drift | BR-067 **RESOLVED** in source; fbuboard row synced in SitRep housekeeping |

### SitRep IPW housekeeping (2026-06-03)

- [x] IPP §7 SitRep + §4.4 Step 5 entry gate documented.
- [x] fbuboard BR-067 row → **RESOLVED** (SitRep housekeeping).
- [x] T03 task doc links corrected to canonical `IPP-E2S16T03` filename.

---

## References

- Host task: [`T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md`](../../docs/project-management/kanban/epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md)
- Canonical policy: [`IPP-E2S16T01-canonical-perpetual-ongoing-tasks-story.md`](../../docs/implementation-cycles/IPP-E2S16T01-canonical-perpetual-ongoing-tasks-story.md)
- T02 (dependency): [`T02-inventory-and-classify-workflow-perpetual-tasks.md`](../../docs/project-management/kanban/epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T02-inventory-and-classify-workflow-perpetual-tasks.md)
- T02 inventory IPP (3B gate — **published**): [`IPP-E2S16T02-perpetual-task-inventory.md`](IPP-E2S16T02-perpetual-task-inventory.md)
- T04 (scope boundary): [`T04-ad-hoc-kanban-synchronization-and-hygiene-perpetual.md`](../../docs/project-management/kanban/epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T04-ad-hoc-kanban-synchronization-and-hygiene-perpetual.md)
- Legacy draft (to archive): [`IPW-E6S07T103-release-workflow-maintenance-perpetual.md`](../../docs/implementation-cycles/IPW-E6S07T103-release-workflow-maintenance-perpetual.md)
- FR-088: [`FR-088-dedicated-story-for-perpetual-ongoing-tasks.md`](../../docs/project-management/kanban/fr-br/FR-088-dedicated-story-for-perpetual-ongoing-tasks.md)
- Guardrail implementation: `packages/frameworks/workflow mgt/scripts/validation/validate_version_bump.py`
- Test file: `packages/frameworks/workflow mgt/scripts/validation/test_validate_version_bump.py`
- Versioning policy §6.1.1: `docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md`
- Artifact packaging (IPP vs ICW trio): [`dev-kit-ipw-ipp-vs-icw-artifacts.md`](../architecture/standards-and-adrs/dev-kit-ipw-ipp-vs-icw-artifacts.md)
