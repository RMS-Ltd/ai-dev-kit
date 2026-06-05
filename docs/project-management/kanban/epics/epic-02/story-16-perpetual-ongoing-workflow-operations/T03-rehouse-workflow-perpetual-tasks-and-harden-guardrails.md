---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-20T18:20:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 2, Story 16, Task 3: Workflow maintenance (Perpetual)

**Task ID:** E02:S16:T03  
**Status:** IN PROGRESS  
**Priority:** HIGH  
**Estimated Effort:** Large  
**Created:** 2026-04-20  
**Last updated:** 2026-06-03 (RW **v0.2.16.3+6** — BR-059 RESOLVED + corpus scan)  
**Version anchor:** v0.2.16.3+6
**Code:** E02S16T03
**Task Type:** Perpetual Maintenance

**Upstream:** [FR-088 - Dedicated story for perpetual ongoing tasks](../../../fr-br/FR-088-dedicated-story-for-perpetual-ongoing-tasks.md)

---

## Input

- [FR-088](../../../fr-br/FR-088-dedicated-story-for-perpetual-ongoing-tasks.md) requirements.
- Migration inventory and dispositions from [E02:S16:T02](./T02-inventory-and-classify-workflow-perpetual-tasks.md).
- Planning and sequencing from [E02:S16:T01](./T01-establish-canonical-perpetual-ongoing-tasks-story-fr088.md).
- Canonical policy IPP: [`IPP-E02S16T01-canonical-perpetual-ongoing-tasks-story.md`](../../../../implementation-cycles/IPP-E02S16T01-canonical-perpetual-ongoing-tasks-story.md).
- Implementation plan: [`IPP-E2S16T03-rehouse-workflow-perpetual-tasks.md`](../../../../../implementation-cycles/IPP-E2S16T03-rehouse-workflow-perpetual-tasks.md).

---

## Problem statement

Workflow maintenance work that is ad-hoc, cross-cutting, and not directly tied to a concrete delivery task needs a single perpetual anchor; otherwise attribution fragments across multiple narrow tasks and routing becomes ambiguous.

---

## Deliverable

- Canonical perpetual umbrella task for workflow maintenance in Story 016.
- Migration/hardening lane retained in scope (re-housing, reference updates, and guardrails).
- Clear routing language distinguishing general workflow maintenance (`E02:S16:T03`) from kanban-focused maintenance (`E02:S16:T04`).
- Updated links and references across story docs, boards, FR/BR/UXR docs, and governance docs as needed.
- Verification evidence (link checks, board consistency checks, and regression checks).

---

## Acceptance criteria

- [x] **AC1:** `E02:S16:T03` is documented as the canonical perpetual umbrella for ad-hoc workflow maintenance not tied to a concrete delivery task. *(Wave 2/3: T03 documented as canonical perpetual umbrella with `Task Type: Perpetual Maintenance` marker; policy ratified in IPP-E02S16T01 and versioning policy §6.1.1.)*
- [x] **AC2:** Migration/hardening activities remain explicitly in scope for `E02:S16:T03`, without narrowing the task to migration/hardening only. *(Wave 3: guardrails explicitly include migration/hardening in scope; no narrowing occurred; Deliverable section covers re-housing, reference updates, and guardrails.)*
- [x] **AC3:** `E02:S16:T04` is documented as a kanban-focused operational lane under the broader workflow-maintenance model. *(Wave 2: T04 doc updated with cross-links and perpetual marker; T03/T04 boundary documented in both task docs and story-016.)*
- [x] **AC4:** Policy/validator and reference updates preserve deterministic routing and avoid proliferating additional perpetual maintenance tasks without clear ownership boundaries. *(Tranches 3A+3B: ACTIVE_FIX paths migrated per [IPP-E2S16T02 §2.6](../../../../../implementation-cycles/IPP-E2S16T02-perpetual-task-inventory.md); kanban `epic-06/story-007` **35→18** occurrences / **22→14** files; `docs/` **167→153** / **101→94**; retained S07 refs: T107/T111/T112 + story doc + historical anchors.)*
- [x] **AC5:** Validation passes for updated docs and workflow guardrail behavior. *(15/15 tests pass; validator `--strict --requested E02:S16:T03 --art` exits 0 when BUILD incremented; evidence in Verification Evidence below.)*

---

## Verification Evidence

### Wave 2 — Discoverability Uplift (2026-04-27) ✅
- IPP cross-link parity added to T03/T04/T05 task docs.
- `Task Type: Perpetual Maintenance` marker added to all three docs.
- **Evidence:** Inspect T03, T04, T05 docs; all carry `Task Type: Perpetual Maintenance` and link to `IPP-E02S16T01`.

### Wave 3 — Guardrail Enforcement (2026-04-27) ✅
- Placement guardrail: reject perpetual tasks outside `E2:S16` unless override rationale present.
- Numbering guardrail: `T1xx` hard-fails without `Historical Anchor:` marker.
- Marker guardrail: warn when Story 016 lanes lack perpetual marker.
- **Implementation:** `validate_version_bump.py` lines 85–129 (`validate_perpetual_guardrails`).
- **Evidence:** `pytest test_validate_version_bump.py -x` passes (15/15) after fixture fixes.

### Tranche 3 — BR-067 closure + link hygiene (2026-06-03) ✅
- **BR-067:** Status **RESOLVED**; R1–R5 regression PASS (`pytest` 15/15, 2026-06-03).
- **Link hygiene (3A):** 15 files under `docs/project-management/kanban/` — stale `epic-06/story-007/.../T03` → story-016 `T03` (umbrella/RW) or `T04` (UKW lane).
- **3B (2026-06-03):** ACTIVE_FIX migration via `apply_e6s07_path_migration_3b.py`; archive/KB-INDEX deferred per IPP-E2S16T02 §2.6.

### SitRep IPW — T02/T03 posture (2026-06-03) ✅
- **IPP:** [IPP-E2S16T03](../../../../../implementation-cycles/IPP-E2S16T03-rehouse-workflow-perpetual-tasks.md) §7 SitRep + §4.4 Step 5 (3B entry gate).
- **T02:** COMPLETE — [IPP-E2S16T02](../../../../../implementation-cycles/IPP-E2S16T02-perpetual-task-inventory.md) published (`v0.2.16.2+2`).
- **T03:** Tranche 3B ACTIVE_FIX applied; AC4 satisfied.
- **Board:** `kboard.md` BR-067 row synced to **RESOLVED** (Step 7 drift fix).

### BR-059 follow-up — SitRep + closure (2026-06-03) ✅
- **SitRep:** [IPP-E02S16T13](../../../../../implementation-cycles/IPP-E02S16T13-br059-ukw-moscow-full-story-coverage.md) §7 reconciled.
- **Remediation:** **E10:S01:T01–T06** + **E02:S11:T13–T14** on `kboard.md`; `--story E10:S01` **PASS**.
- **Corpus scan:** `--scan-all` → 37 fail / 4 pass ([report](../../../../changelog-and-release-notes/changelog-archive/four-surface-reports/br059-corpus-scan-2026-06-03.json)); backlog out of BR scope.
- **BR-059:** **RESOLVED** on source doc; **fbuboard** rows deferred (FR-097 stamp cluster).

### Tranche 2 — BR-067 Wave A (2026-05-30) ✅
- **Policy table:** BUILD +0/+1/`--doc-policy-zero` rules published in [BR-067](../../../fr-br/BR-067-rw-first-doc-only-release-defaults-to-build-plus-one-not-plus-zero.md).
- **RW docs:** `release-workflow-agent-execution.md` Step 2 (A.1.1) and Step 10 document `RW -d … --doc-policy-zero` path.
- **Adopter SoP:** `implementation-cycle-sop.md` Step 5 cross-links BR-067.
- **Legacy IPW:** `IPW-E6S07T103` host-task and reference links corrected to epic-02/story-016 T03.
- **BR-010 regression checklist:** Added to BR-067 AC4 verification section.

### AC5 — Validator Regression Evidence
- **Command:** `python "packages/frameworks/workflow-mgt/scripts/validation/validate_version_bump.py" --strict --requested E02:S16:T03 --art`
- **Result:** Exit 0, version bump logic validated.
- **Test command:** `pytest "packages/frameworks/workflow-mgt/scripts/validation/test_validate_version_bump.py" -x`
- **Test result:** 15 passed, 0 failed (2026-05-30).

---

## References

- [Canonical policy IPP: `IPP-E02S16T01-canonical-perpetual-ongoing-tasks-story.md`](../../../../implementation-cycles/IPP-E02S16T01-canonical-perpetual-ongoing-tasks-story.md)
- [Implementation plan: `IPP-E2S16T03-rehouse-workflow-perpetual-tasks.md`](../../../../../implementation-cycles/IPP-E2S16T03-rehouse-workflow-perpetual-tasks.md)
- [E02:S16:T01 - Establish canonical perpetual ongoing tasks story (FR-088)](./T01-establish-canonical-perpetual-ongoing-tasks-story-fr088.md)
- [E02:S16:T02 - Inventory and classify workflow-related perpetual tasks](./T02-inventory-and-classify-workflow-perpetual-tasks.md)
- [E02:S16:T04 - Ad-hoc Kanban synchronization and hygiene (Perpetual)](./T04-ad-hoc-kanban-synchronization-and-hygiene-perpetual.md)
- [E02:S16:T05 - Markdown documentation maintenance (Perpetual)](./T05-markdown-documentation-maintenance-perpetual.md)
- [IPP vs ICW artifact packaging (`dev-kit-ipw-ipp-vs-icw-artifacts.md`)](../../../../../architecture/standards-and-adrs/dev-kit-ipw-ipp-vs-icw-artifacts.md)

## Planning artifacts (publication)

- [IPW-E6S07T103-release-workflow-maintenance-perpetual.md](../../../../../implementation-cycles/IPW-E6S07T103-release-workflow-maintenance-perpetual.md)
