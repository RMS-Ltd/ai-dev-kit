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
**Last updated:** 2025-12-22 (v0.4.15.5+2 – T05 enhanced: Agentic template generator and integration complete)  
**Version:** v0.4.15.5+2  
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

- [x] **E4:S15:T01 – Finalize and validate concrete task template coverage** ✅ COMPLETE (v0.4.15.5+2 – All 378 task templates generated, validated, and sanitized)
- [x] **E4:S15:T02 – Design procedural task template generator** ✅ COMPLETE (v0.4.15.3+1)
- [x] **E4:S15:T03 – Implement generator and validate against concrete templates** ✅ COMPLETE (v0.4.15.3+1)
- [x] **E4:S15:T04 – Integrate generator into Kanban framework package** ✅ COMPLETE (v0.4.15.5+1)
- [x] **E4:S15:T05 – Document hybrid strategy and usage for maintainers and clients** ✅ COMPLETE (v0.4.15.5+2 – Agentic template generator and integration complete)

---

## Tasks

### E4:S15:T01 – Finalize and validate concrete task template coverage

**Status:** TODO  
**Priority:** HIGH  
**Dependencies:** E4:S06:T04 (Create task template files for each typical task)  

**Input:**
- Existing task templates in `packages/frameworks/kanban/templates/tasks/`
- `COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md` (canonical E/S/T structure)
- `TASK_TEMPLATE.md` (task structure template)

**Deliverable:**
- Verified list of canonical tasks with a 1:1 mapping to task template files.
- Documented gaps (if any) and a plan to fill them.

**Acceptance Criteria:**
- [ ] All canonical tasks from the structure document are mapped to template files.
- [ ] Any missing templates are enumerated and linked back to E4:S06:T04 for completion.
- [ ] Naming and path conventions are consistent across the task templates.

---

### E4:S15:T02 – Design procedural task template generator

**Status:** ✅ COMPLETE  
**Priority:** HIGH  
**Dependencies:** E4:S15:T01  
**Version:** v0.4.15.3+1  

**Input:**
- ADR: `task-template-system-hybrid-adr.md`
- FR-029: Procedural task template generation (hybrid strategy)
- `COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md`
- `TASK_TEMPLATE.md`

**Deliverable:**
- Design document or section (may be appended to ADR or a short design note) describing:
  - Input format and parsing strategy for the structure document.
  - Mapping from canonical tasks → output paths and file names.
  - Template placeholders and how they are populated.
  - Safety/overwrite behavior and CLI interface (if any).


**Acceptance Criteria:**
- [x] Generator responsibilities, inputs, and outputs clearly defined. ✅
- [x] Mapping rules from canonical structure → files documented. ✅
- [x] Safety and overwrite behavior specified. ✅

---

### E4:S15:T03 – Implement generator and validate against concrete templates

**Status:** ✅ COMPLETE  
**Priority:** HIGH  
**Dependencies:** E4:S15:T02  
**Version:** v0.4.15.3+1  

**Input:**
- Generator design from T02
- Existing concrete task templates (reference set)

**Deliverable:**
- Implementation of a generator script (e.g., `generate_task_templates.py`) under the Kanban framework package.
- Validation routine that:
  - Compares generator output to existing templates.
  - Reports discrepancies in:
    - Task coverage.
    - File paths.
    - Core structural sections (frontmatter, main headings).


**Acceptance Criteria:**
- [x] Generator can create all canonical task templates in a clean environment. ✅
- [x] Generator output matches the existing concrete templates for:
  - [x] Task coverage. ✅
  - [x] File paths and names. ✅
  - [x] Core structural sections. ✅

- [x] Validation routine exists and can be run as part of maintenance checks. ✅

---

### E4:S15:T04 – Integrate generator into Kanban framework package

**Status:** ✅ COMPLETE  
**Priority:** MEDIUM  
**Dependencies:** E4:S15:T03  
**Version:** v0.4.15.4+1

**Input:**
- Working generator and validation routine

**Deliverable:**
- Generator wired into the Kanban framework in a discoverable way:
  - Script placed under `packages/frameworks/kanban/scripts/` (or equivalent).
  - Optional CLI entry point or documented invocation pattern.

- Basic guidance for maintainers on when/how to run it.

**Acceptance Criteria:**
- [x] Generator script lives in a stable, documented location. ✅
- [x] Maintainers know how to:
  - [x] Run a dry-run. ✅
  - [x] Generate missing templates. ✅
  - [x] Regenerate templates (with explicit overwrite option). ✅

- [x] Validation routine can be included in maintenance or CI checks (optional but preferred). ✅

---

### E4:S15:T05 – Document hybrid strategy and usage

**Status:** ✅ COMPLETE  
**Priority:** MEDIUM  
**Dependencies:** E4:S15:T03, E4:S15:T04  
**Version:** v0.4.15.4+1

**Input:**
- ADR: `task-template-system-hybrid-adr.md`
- FR-029
- Generator implementation and validation behavior

**Deliverable:**
- Updates to Kanban framework documentation (e.g., `packages/frameworks/kanban/README.md` and related docs) to cover:
  - The rationale and behavior of the hybrid task template system.
  - How framework maintainers should use the generator.
  - How adopting projects can:
    - Use pre-generated templates, or
    - Run the generator in their own repo.


**Acceptance Criteria:**
- [x] Documentation clearly explains:
  - [x] What the hybrid strategy is. ✅
  - [x] How to use the generator as a maintainer. ✅
  - [x] How to use or generate templates as a client. ✅

- [x] References to ADR and FR-029 are included for traceability. ✅

---

## Dependencies

**Blocks:**
- Future Kanban framework improvements that assume:
  - Canonical task templates can be regenerated cheaply.
  - Structure changes can be propagated across all tasks with minimal effort.


**Blocked By:**
- E4:S06:T04 – Create task template files for each typical task (for complete reference coverage).

**Related FR/BR:**
- **FR-029:** Procedural Task Template Generation (Hybrid Strategy)

---

## References

- `docs/architecture/standards-and-adrs/task-template-system-hybrid-adr.md`
- `docs/project-management/kanban/fr-br/FR-029-procedural-task-template-generation-hybrid-strategy.md`
- `packages/frameworks/kanban/templates/COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md`
- `packages/frameworks/kanban/templates/TASK_TEMPLATE.md`

---

_Last updated: 2025-12-22 (v0.4.15.0+0 – Story created, ADR and FR linked)_  


