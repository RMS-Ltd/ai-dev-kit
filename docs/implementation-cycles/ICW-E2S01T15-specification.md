---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-09T12:55:00Z
expires_at: null
housekeeping_policy: keep
---

# ICW-E2S01T15-Specification: FR-049 Canonical RW Step SoT Hardening

**Task:** E2:S01:T15  
**Related FR:** FR-049  
**Host Task:** [T15-canonical-rw-step-list-single-source-of-truth-fr049.md](../project-management/kanban/epics/Epic-2/Story-001-rw-agent-execution-and-docs/T15-canonical-rw-step-list-single-source-of-truth-fr049.md)  
**Created:** 2026-04-09

---

## Executive Summary

This specification defines the durable planning baseline for `E2:S01:T15` so canonical RW step definitions remain single-source, non-duplicated, and anti-drift across workflow runtime and documentation surfaces.

---

## Problem Statement

RW step metadata can drift when duplicated across multiple files (`workflow_orchestrator`, rules, readme, references). Even after implementation, maintenance edits can reintroduce divergence unless invariants are explicitly specified and tested.

---

## Scope

In scope:

- Canonical RW step source-of-truth invariants for `FR-049`/`T15`.
- Planning artifacts needed for Implementation Cycle Step 3a/3b.
- Traceability checks tying FR/task/story and canonical-step consumers.

Out of scope:

- New trigger types beyond established RW/RW -k/RW -d behavior.
- Non-RW workflow redesign.

---

## Functional Invariants (Specification)

1. Canonical-definition invariant:
   - RW step metadata is authored in one canonical source.
2. Consumer-consistency invariant:
   - Runtime and documentation consumers reference canonical definitions without conflicting hardcoded step lists.
3. Step-13 clarity invariant:
   - Step 13 semantics retain explicit housekeeping wording in all relevant references.
4. Traceability invariant:
   - FR, task, and story checklist links remain bidirectional and resolvable.
5. Release-marker invariant:
   - Task and FR fields (`Status`, `Version`, `Version Anchor`) remain coherent after release updates.

---

## Acceptance Assertions

- `FR-049` points to `E2:S01:T15` as implementing task.
- `T15` is housed in Story 001 and references `FR-049`.
- Story checklist row for `T15` exists with FR linkage.
- Canonical RW step intent is documented as SoT and anti-drift oriented.

---

## Governance Alignment

- **KG-R2 (atomic intake/wiring):** Preserved via explicit FR/task/story cross-link contract.
- **KG-R6 (semantic hosting):** `T15` remains under RW Story 001, aligned to domain responsibility.

---

## Maintenance Notes

For future change sets touching canonical RW steps, update the canonical source first, then verify consumer consistency and traceability fields in the same cycle to prevent split-brain step definitions.
