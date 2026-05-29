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
**Status:** Published (Tranche 1 delivered per T03 task doc and changelog `v0.2.16.3+5`; rolling maintenance in §6)

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

---

## 5. Success / verification criteria

Tranche 1 outcomes (verified 2026-05-20 against host task doc and [`CHANGELOG_v0.2.16.3+5.md`](../changelog-and-release-notes/changelog-archive/CHANGELOG_v0.2.16.3+5.md)):

- [x] `pytest test_validate_version_bump.py -x` exits 0 (14/14 pass).
- [x] `python validate_version_bump.py --strict --requested E2:S16:T03 --art` exits 0.
- [x] T03 task doc AC1–AC3 marked COMPLETE with Wave 2/3 evidence.
- [x] T03 task doc AC4 reflects PARTIAL with T02 dependency noted (AC4 exhaustive migration remains open until T02 delivers).
- [x] T03 task doc AC5 includes validator command + test output as evidence.
- [x] Legacy `IPW-E6S07T103` carries deprecation banner and T03 redirect ([`IPW-E6S07T103-release-workflow-maintenance-perpetual.md`](./IPW-E6S07T103-release-workflow-maintenance-perpetual.md)).
- [x] Story-016 and kboard T03 rows are consistent with task doc (as of Tranche 1 release).
- [x] No new dangling links introduced (Tranche 1 scope).

---

## 6. Rolling backlog (Tranche 2)

Planning targets for ongoing work under **E2:S16:T03** without rewriting §1–§4 above:

- **AC4 closure path:** When [E2:S16:T02](../project-management/kanban/epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T02-inventory-and-classify-workflow-perpetual-tasks.md) delivers inventory, disposition, `T101+` mapping, and reference map (T02 AC1–AC5), execute exhaustive reference migration and re-verify boards/policies; then tighten AC4 from PARTIAL to satisfied with evidence.
- **BR-067 / RW doc-only BUILD:** Align default RW Step 2 / `validate_version_bump.py` behavior with policy doc-init **+0** on an existing E/S/T when intended; track on [BR-067](../project-management/kanban/fr-br/BR-067-rw-first-doc-only-release-defaults-to-build-plus-one-not-plus-zero.md) and [`fbuboard.md`](../project-management/kanban/fbuboard.md) active row until resolved.
- **Cross-surface hygiene:** Re-run link/board consistency after large kanban or FR/BR moves; prefer scoped RW Step 7 + UKW for drift rather than ad-hoc edits.

---

## References

- Host task: [`T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md`](../../docs/project-management/kanban/epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md)
- Canonical policy: [`IPP-E2S16T01-canonical-perpetual-ongoing-tasks-story.md`](../../docs/implementation-cycles/IPP-E2S16T01-canonical-perpetual-ongoing-tasks-story.md)
- T02 (dependency): [`T02-inventory-and-classify-workflow-perpetual-tasks.md`](../../docs/project-management/kanban/epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T02-inventory-and-classify-workflow-perpetual-tasks.md)
- T04 (scope boundary): [`T04-ad-hoc-kanban-synchronization-and-hygiene-perpetual.md`](../../docs/project-management/kanban/epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T04-ad-hoc-kanban-synchronization-and-hygiene-perpetual.md)
- Legacy draft (to archive): [`IPW-E6S07T103-release-workflow-maintenance-perpetual.md`](../../docs/implementation-cycles/IPW-E6S07T103-release-workflow-maintenance-perpetual.md)
- FR-088: [`FR-088-dedicated-story-for-perpetual-ongoing-tasks.md`](../../docs/project-management/kanban/fr-br/FR-088-dedicated-story-for-perpetual-ongoing-tasks.md)
- Guardrail implementation: `packages/frameworks/workflow mgt/scripts/validation/validate_version_bump.py`
- Test file: `packages/frameworks/workflow mgt/scripts/validation/test_validate_version_bump.py`
- Versioning policy §6.1.1: `docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md`
- Artifact packaging (IPP vs ICW trio): [`dev-kit-ipw-ipp-vs-icw-artifacts.md`](../architecture/standards-and-adrs/dev-kit-ipw-ipp-vs-icw-artifacts.md)
