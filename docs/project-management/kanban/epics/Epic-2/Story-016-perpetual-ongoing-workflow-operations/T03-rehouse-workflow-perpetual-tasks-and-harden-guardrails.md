---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-20T18:20:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 2, Story 16, Task 3: Workflow maintenance (Perpetual)

**Task ID:** E2:S16:T03  
**Status:** IN PROGRESS  
**Priority:** HIGH  
**Estimated Effort:** Large  
**Created:** 2026-04-20  
**Last updated:** 2026-05-20 (RW v0.2.16.3+6: IPP vs ICW governance — `dev-kit-ipw-ipp-vs-icw-artifacts`, AGENTS / policy / FR-042 §8 / `.cursorrules` / framework ipw AGENTS)  
**Code:** E2S16T03
**Task Type:** Perpetual Maintenance

**Upstream:** [FR-088 - Dedicated story for perpetual ongoing tasks](../../../fr-br/FR-088-dedicated-story-for-perpetual-ongoing-tasks.md)

---

## Input

- [FR-088](../../../fr-br/FR-088-dedicated-story-for-perpetual-ongoing-tasks.md) requirements.
- Migration inventory and dispositions from [E2:S16:T02](./T02-inventory-and-classify-workflow-perpetual-tasks.md).
- Planning and sequencing from [E2:S16:T01](./T01-establish-canonical-perpetual-ongoing-tasks-story-fr088.md).
- Canonical policy IPP: [`IPP-E2S16T01-canonical-perpetual-ongoing-tasks-story.md`](../../../../implementation-cycles/IPP-E2S16T01-canonical-perpetual-ongoing-tasks-story.md).
- Implementation plan: [`IPP-E2S16T03-rehouse-workflow-perpetual-tasks.md`](../../../../implementation-cycles/IPP-E2S16T03-rehouse-workflow-perpetual-tasks.md).

---

## Problem statement

Workflow maintenance work that is ad-hoc, cross-cutting, and not directly tied to a concrete delivery task needs a single perpetual anchor; otherwise attribution fragments across multiple narrow tasks and routing becomes ambiguous.

---

## Deliverable

- Canonical perpetual umbrella task for workflow maintenance in Story 016.
- Migration/hardening lane retained in scope (re-housing, reference updates, and guardrails).
- Clear routing language distinguishing general workflow maintenance (`E2:S16:T03`) from kanban-focused maintenance (`E2:S16:T04`).
- Updated links and references across story docs, boards, FR/BR/UXR docs, and governance docs as needed.
- Verification evidence (link checks, board consistency checks, and regression checks).

---

## Acceptance criteria

- [x] **AC1:** `E2:S16:T03` is documented as the canonical perpetual umbrella for ad-hoc workflow maintenance not tied to a concrete delivery task. *(Wave 2/3: T03 documented as canonical perpetual umbrella with `Task Type: Perpetual Maintenance` marker; policy ratified in IPP-E2S16T01 and versioning policy §6.1.1.)*
- [x] **AC2:** Migration/hardening activities remain explicitly in scope for `E2:S16:T03`, without narrowing the task to migration/hardening only. *(Wave 3: guardrails explicitly include migration/hardening in scope; no narrowing occurred; Deliverable section covers re-housing, reference updates, and guardrails.)*
- [x] **AC3:** `E2:S16:T04` is documented as a kanban-focused operational lane under the broader workflow-maintenance model. *(Wave 2: T04 doc updated with cross-links and perpetual marker; T03/T04 boundary documented in both task docs and Story-016.)*
- [~] **AC4: PARTIAL** — Policy/validator and reference updates preserve deterministic routing and avoid proliferating additional perpetual maintenance tasks without clear ownership boundaries. *(Wave 3: guardrail implementation and versioning policy updates are COMPLETE. Exhaustive reference migration across all docs/boards is BLOCKED on T02 completion; inventory/disposition not yet available. See T02 dependency.)*
- [x] **AC5:** Validation passes for updated docs and workflow guardrail behavior. *(14/14 tests pass after fixture fixes; validator `--strict --requested E2:S16:T03 --art` exits 0; evidence recorded in Verification Evidence section below.)*

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
- **Evidence:** `pytest test_validate_version_bump.py -x` passes (14/14) after fixture fixes.

### AC5 — Validator Regression Evidence
- **Command:** `python "packages/frameworks/workflow mgt/scripts/validation/validate_version_bump.py" --strict --requested E2:S16:T03 --art`
- **Result:** Exit 0, version bump logic validated.
- **Test command:** `pytest "packages/frameworks/workflow mgt/scripts/validation/test_validate_version_bump.py" -x`
- **Test result:** 14 passed, 0 failed.

---

## References

- [Canonical policy IPP: `IPP-E2S16T01-canonical-perpetual-ongoing-tasks-story.md`](../../../../implementation-cycles/IPP-E2S16T01-canonical-perpetual-ongoing-tasks-story.md)
- [Implementation plan: `IPP-E2S16T03-rehouse-workflow-perpetual-tasks.md`](../../../../implementation-cycles/IPP-E2S16T03-rehouse-workflow-perpetual-tasks.md)
- [E2:S16:T01 - Establish canonical perpetual ongoing tasks story (FR-088)](./T01-establish-canonical-perpetual-ongoing-tasks-story-fr088.md)
- [E2:S16:T02 - Inventory and classify workflow-related perpetual tasks](./T02-inventory-and-classify-workflow-perpetual-tasks.md)
- [E2:S16:T04 - Ad-hoc Kanban synchronization and hygiene (Perpetual)](./T04-ad-hoc-kanban-synchronization-and-hygiene-perpetual.md)
- [E2:S16:T05 - Markdown documentation maintenance (Perpetual)](./T05-markdown-documentation-maintenance-perpetual.md)
- [IPP vs ICW artifact packaging (`dev-kit-ipw-ipp-vs-icw-artifacts.md`)](../../../../../architecture/standards-and-adrs/dev-kit-ipw-ipp-vs-icw-artifacts.md)
