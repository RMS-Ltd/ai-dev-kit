---
lifecycle: proposed
ttl_days: null
created_at: 2026-06-03T20:15:00Z
expires_at: null
housekeeping_policy: keep
---

# Feature Request: Packaged Workflows Sync With Live Repo Implementation

**Type:** Feature Request (FR)  
**ID:** FR-106  
**Submitted:** 2026-06-03  
**Submitted By:** User (via agent — E02:S13 packaged-workflow drift review)  
**Priority:** HIGH (Should Have — MoSCOW **S**)  
**Status:** IN PROGRESS (fix attempted **v0.2.13.8+2** — pending user verification)  
**Implementing Task:** [E02:S13:T08](../epics/Epic-2/Story-013-workflow-management-package-implementation-review/T08-sync-packaged-workflows-with-live-repo-implementation.md) — ✅ COMPLETE (**v0.2.13.8+2**)  
**IPP:** [IPP-E02S13T08](../../implementation-cycles/IPP-E02S13T08-sync-packaged-workflows-live-spec.md)  
**Kanban init:** v0.2.13.8+1 (RW -k --art, 2026-06-03)

---

## Summary

Reconcile **packaged workflow artefacts** in `packages/frameworks/workflow mgt/` (YAML definitions, `workflow-registry.yaml`, `canonical-rw-steps.yaml`, portable `.cursorrules` excerpts, Claude command files) with the **live agent execution specification** used in ai-dev-kit (root `.cursorrules`, `KB/.../vwmp/*-agent-execution.md`, validators). Adopters copy the package; drift causes incorrect RW/UKW behavior, stale validator lists, and inconsistent step numbering.

---

## Problem Statement

Live workflow behavior evolves in repo-root agent specs and vwmp guides, while packaged YAML and adopter-facing excerpts lag behind.

**Known drift (2026-06-03 audit):**

1. **RW Step 9 validators** — Root `.cursorrules` includes `validate_board_stamp_diff.py`, `validate_kanban_state_icons.py`, `validate_release_readiness.py`, and related FR-097 / FR-092 gates; portable `cursorrules-rw-trigger-section.md`, `.claude/commands/rw.md`, and `release-workflow.yaml` list fewer validators.
2. **`canonical-rw-steps.yaml`** — Last refreshed 2026-03-09; step ordering predates current RW semantics (BR/FR update step, scoped Step 7 kanban, sub-steps 9.5 / 9.6 / 12.5).
3. **Duplicate RW YAML** — `workflows/release-workflow.yaml` (v2.1.0) diverges from registry SoT `workflows/release-workflow/release-workflow.yaml` (v2.3.0); legacy default paths (`confidentia/version.py`, old kanban paths).
4. **`workflow-registry.yaml`** — Step counts disagree with YAML and vwmp guides (e.g. UKW, PKG-VERSION).
5. **Dual-source parity gap** — [E05:S01:T66](../epics/Epic-5/Story-001-fr-repo/T66-cursorrules-vs-packaged-rw-trigger-parity.md) closed RW guardrails (1b/1c/1d) but post-pass FR-097 additions were not ported to the portable excerpt.

**Impact:** Framework adopters who install/copy only the package receive outdated workflow definitions relative to ai-dev-kit maintainers' live spec, undermining RC readiness for the Workflow Management package ([E02:S13](../epics/Epic-2/Story-013-workflow-management-package-implementation-review.md)).

---

## Scope

### In scope

- Extend RW dual-source parity ([`rw-trigger-dual-source-parity.md`](../../../../packages/frameworks/workflow%20mgt/docs/rw-trigger-dual-source-parity.md)) to Step 9 FR-097 / FR-092 validators and `.claude/commands/rw.md`.
- Refresh `canonical-rw-steps.yaml` and align `validate_canonical_steps.py` expectations.
- Consolidate authoritative `release-workflow.yaml`; remove or deprecate stale flat copy; fix validator lists and placeholder paths.
- Correct `workflow-registry.yaml` metadata (minimum: RW, UKW, PKG-VERSION).
- Verify `cursorrules-ukw-trigger-section.md` against root `.cursorrules` UKW block.
- Document sync evidence (validator runs, delta log entry).

### Out of scope

- Full E02:S13:T02–T06 RC review sequence (T08 implements sync; T05 may consume gap notes).
- [FR-050](FR-050-workflows-directory-structure-reorganization.md) directory reorganization (pending intake) unless trivial dedup required for acceptance.
- Runtime validator behavior changes unless required to reflect corrected packaged docs.

---

## Functional Requirements

- [ ] **FR-106:R01** — Portable RW excerpt Step 9 validator list matches root `.cursorrules` (including FR-097 / FR-092 release-readiness validators).
- [ ] **FR-106:R02** — `.claude/commands/rw.md` Step 9 matches the same validator set and `--art` propagation rules.
- [ ] **FR-106:R03** — `canonical-rw-steps.yaml` reflects live RW step order, names, and execution paths.
- [ ] **FR-106:R04** — Single authoritative packaged `release-workflow.yaml` aligned with live RW; no conflicting flat copy without deprecation notice.
- [ ] **FR-106:R05** — `workflow-registry.yaml` step counts and descriptions match updated YAML for RW, UKW, and PKG-VERSION at minimum.
- [ ] **FR-106:R06** — UKW portable excerpt verified aligned with root `.cursorrules` (or documented intentional deltas).
- [ ] **FR-106:R07** — Parity checklist and delta log updated in `rw-trigger-dual-source-parity.md`.

---

## Non-Functional Requirements

- [ ] **FR-106:NF01** — `validate-workflow-docs.py` continues to pass (0 errors) after README touch-ups.
- [ ] **FR-106:NF02** — Sync report captured in task doc or linked note (surfaces touched, before/after summary).
- [ ] **FR-106:NF03** — Ongoing maintenance routed to [E02:S16:T03](../epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md) after delivery.

---

## Acceptance Criteria

- [ ] **AC1:** All FR-106:R01–R07 delivered (mirror [E02:S13:T08](../epics/Epic-2/Story-013-workflow-management-package-implementation-review/T08-sync-packaged-workflows-with-live-repo-implementation.md) AC1–AC7).
- [ ] **AC2:** Bidirectional links: FR-106 ↔ E02:S13:T08; task cites FR-106 as source requirement.
- [ ] **AC3:** `validate_canonical_steps.py` reports zero warnings OR remaining warnings documented as intentional with follow-up ticket.
- [ ] **AC4:** FR-106 status updated to IMPLEMENTED on verified delivery via RW release attributing E02:S13:T08.

---

## Dependencies / Ordering

- **E02:S13:T01** — expectations baseline (complete).
- **FR-056** / **E05:S01:T56** — packaged README standardization (complete); T08 builds on doc quality, not replaces it.
- **E05:S01:T66** — RW dual-source guardrail parity (complete); T08 extends scope to Step 9 and YAML/registry.
- **FR-049** — canonical step list file exists but needs refresh as part of T08.
- **FR-050** — optional follow-on for directory reorg.
- **FR-083 / IPW gate** — implementation requires linked IPP and explicit user authorization before code/doc sync execution.

---

## Related

- [E02:S13:T08](../epics/Epic-2/Story-013-workflow-management-package-implementation-review/T08-sync-packaged-workflows-with-live-repo-implementation.md)
- [Story-013](../epics/Epic-2/Story-013-workflow-management-package-implementation-review.md)
- [FR-056](FR-056-standardize-packaged-workflow-documentation-and-instructions.md)
- [FR-049](FR-049-canonical-rw-step-list-single-source-of-truth.md)
- [FR-050](FR-050-workflows-directory-structure-reorganization.md)
- [E05:S01:T66](../epics/Epic-5/Story-001-fr-repo/T66-cursorrules-vs-packaged-rw-trigger-parity.md)
- [E02:S16:T03](../epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md)
