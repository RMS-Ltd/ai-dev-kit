---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-22T09:05:00Z
expires_at: null
housekeeping_policy: keep
---

# Story 015 – Procedural Task Template Generation and Hybrid Strategy

**Status:** IN PROGRESS  
**Priority:** HIGH  
**Estimated Effort:** Medium-Large  
**Created:** 2025-12-22  
**Last updated:** 2026-06-05 (v0.4.15.5+1 – T05 hybrid guide, path fix, installer)  
**Version:** v0.4.15.5+1  
**Code:** E4S15

---

## Overview

This story implements the **hybrid task template system** for the Kanban framework:

- Preserve and complete the existing **concrete task templates** for all canonical tasks.
- Introduce a **procedural task template generator** that can:
  - Generate templates from the canonical E/S/T structure document(s).
  - Be used by framework maintainers for regeneration after structural changes.
  - Be run by adopting projects for client-side template generation.


The goal is to balance high-quality, human-authored templates with low-friction maintenance and distribution.

---

## Goal

Deliver a robust, documented hybrid template system where:

- All canonical tasks have high-quality concrete templates.
- A generator can recreate those templates from the canonical structure.
- Future changes to the structure or template format can be rolled out with minimal manual work.

---

## Task Checklist

- [x] **E04:S15:T01 – Finalize and validate concrete task template coverage** ✅ COMPLETE (v0.4.15.5+2 – All 378 task templates generated, validated, and sanitized)
  - Task: [`T01-finalize-and-validate-concrete-task-template-coverage`](story-15-procedural-task-template-generation-and-hybrid-strategy/T01-finalize-and-validate-concrete-task-template-coverage.md)
- [x] **E04:S15:T02 – Design procedural task template generator** ✅ COMPLETE (v0.4.15.3+1)
  - Task: [`T02-design-procedural-task-template-generator`](story-15-procedural-task-template-generation-and-hybrid-strategy/T02-design-procedural-task-template-generator.md)
- [x] **E04:S15:T03 – Implement generator and validate against concrete templates** ✅ COMPLETE (v0.4.15.3+1)
  - Task: [`T03-implement-generator-and-validate-against-concrete-templates`](story-15-procedural-task-template-generation-and-hybrid-strategy/T03-implement-generator-and-validate-against-concrete-templates.md)
- [x] **E04:S15:T04 – Integrate generator into Kanban framework package** ✅ COMPLETE (v0.4.15.5+1)
  - Task: [`T04-integrate-generator-into-kanban-framework-package`](story-15-procedural-task-template-generation-and-hybrid-strategy/T04-integrate-generator-into-kanban-framework-package.md)
- [x] **E04:S15:T05** ✅ COMPLETE (v0.4.15.5+1 – [T05](story-15-procedural-task-template-generation-and-hybrid-strategy/T05-hybrid-strategy-maintainer-client-docs-fr029.md), [IPP](../../../implementation-cycles/IPP-E04S15T05-hybrid-strategy-docs-and-generator-integration.md))
  - Task: [`T05-hybrid-strategy-maintainer-client-docs-fr029`](story-15-procedural-task-template-generation-and-hybrid-strategy/T05-hybrid-strategy-maintainer-client-docs-fr029.md)

---

## Dependencies

**Blocks:**
- Future Kanban framework improvements that assume:
  - Canonical task templates can be regenerated cheaply.
  - Structure changes can be propagated across all tasks with minimal effort.


**Blocked By:**
- E04:S06:T04 – Create task template files for each typical task (for complete reference coverage).

**Related FR/BR:**
- **FR-029:** Procedural Task Template Generation (Hybrid Strategy)

---

## References

- `docs/architecture/standards-and-adrs/task-template-system-hybrid-adr.md`
- `docs/kanban/fr-br/FR-029-procedural-task-template-generation-hybrid-strategy.md`
- `packages/frameworks/kanban/templates/COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md`
- `packages/frameworks/kanban/templates/TASK_TEMPLATE.md`

---

_Last updated: 2025-12-22 (v0.4.15.0+0 – Story created, ADR and FR linked)_  


