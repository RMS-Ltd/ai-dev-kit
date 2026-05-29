---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-22T09:05:00Z
expires_at: null
housekeeping_policy: keep
---

# FR-029 – Procedural Task Template Generation (Hybrid Strategy)

**Type:** Feature Request  
**Status:** Proposed  
**Priority:** HIGH  
**Requested By:** ai-dev-kit maintainers  
**Related Epic(s):** E4 (Kanban Framework), E6 (Framework Management and Maintenance)  
**Related Story(ies):** E4:S15 – Procedural Task Template Generation and Hybrid Strategy  

---

## Summary

Introduce a **hybrid task template system** for the Kanban framework:

- Complete the existing **concrete task templates** for all canonical tasks.
- Implement a **procedural task template generator** that can:
  - Generate templates from the canonical structure document.
  - Be run on client projects for local generation.
  - Be used by maintainers to regenerate templates after structural changes.


This balances high-quality, human-authored templates with low-cost maintenance and distribution.

---

## Background and Motivation

The Kanban framework currently includes:

- `COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md` – canonical Epics/Stories/Tasks definition.
- Concrete epic and story templates under `templates/epics/` and `templates/stories/`.
- A growing set of concrete **task templates** under `templates/tasks/` (E4:S06:T04).

Challenges observed:

1. **Time intensive template creation:**
   - Hundreds of task templates require careful authoring and review.
2. **Maintenance risk:**
   - Structural changes (e.g., adding a required section) require updates across all templates.
   - Risk of divergence between structure doc and templates.
3. **Distribution footprint:**
   - While not huge in absolute terms, distributing fully-expanded templates for every canonical task is unnecessary if we can generate them from a compact structure.

A hybrid approach addresses these issues by:

- Preserving and finishing the high-quality concrete templates.
- Introducing a generator that can:
  - Recreate templates from the canonical structure.
  - Keep templates synchronized with evolving patterns.


---

## Requirements

### Functional Requirements

1. **Concrete Template Completion**
   - All canonical tasks defined in `COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md` must have corresponding task templates under `templates/tasks/`.
   - Templates must follow `TASK_TEMPLATE.md` and established naming/path conventions.

2. **Procedural Task Template Generator**
   - A script/tool in the Kanban framework package that:
     - Parses the canonical E/S/T structure document(s).
     - Uses `TASK_TEMPLATE.md` (or equivalent) as the structural base.
     - Generates per-task markdown files in the correct directory layout.
   - The generator MUST support:
     - Dry-run mode (show what would be created/updated).
     - Overwrite/sync mode (regenerate templates from canonical structure).

3. **Validation Against Concrete Templates**
   - Provide a way to compare generated templates against the current concrete set:
     - Check for missing tasks.
     - Check path/name consistency.
     - Optionally validate structural sections (frontmatter, headings).

4. **Client-Side Usage**
   - Document how clients can:
     - Run the generator in their project after installing the Kanban framework.
     - Customize generation (e.g., subsetting epics/stories/tasks).

5. **Documentation**
   - Update Kanban framework documentation to describe:
     - The hybrid template strategy.
     - How maintainers use the generator.
     - How adopters can generate or consume templates.

### Non-Functional Requirements

1. **Maintainability**
   - The generator should be small, readable, and easy to extend as the canonical structure evolves.

2. **Traceability**
   - Clear mapping from:
     - Canonical structure doc → generator → generated templates.
   - ADR documenting the decision and tradeoffs (see Related Documents).

3. **Safety**

   - Generator must not overwrite user-modified templates without explicit opt-in/flags.
   - Provide warnings and dry-run output by default.

---

## Acceptance Criteria

- [ ] All canonical tasks in the structure document have corresponding templates under `templates/tasks/`.
- [ ] A procedural task template generator exists in the Kanban framework package.
- [ ] The generator can:
  - [ ] Create missing templates.
  - [ ] Regenerate templates from the canonical structure with an explicit flag.
  - [ ] Run in dry-run mode.

- [ ] Generated templates match the concrete “golden” templates for:
  - [ ] Task IDs and file paths.
  - [ ] Core structural sections (frontmatter + main headings).

- [ ] Documentation is updated to:
  - [ ] Explain the hybrid strategy.
  - [ ] Show maintainers how to run/extend the generator.
  - [ ] Show clients how to generate templates in their own projects.


---

## Related Work

- **Story:** `docs/project-management/kanban/epics/Epic-4/Story-015-procedural-task-template-generation-and-hybrid-strategy.md`
- **ADR:** `docs/architecture/standards-and-adrs/task-template-system-hybrid-adr.md`
- **Existing Work:**
  - E4:S06 – Comprehensive Canonical Epics/Stories/Tasks Template System.
  - `COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md` (canonical E/S/T structure).
  - `TASK_TEMPLATE.md` (task-level template structure).


---

## Open Questions

- Should the generator be exposed via a CLI entry point or used as an internal maintenance tool only?
- What level of content richness (acceptance criteria, approach, notes) should be generated vs. left to human authors in adopting projects?
- How should we version and evolve the structure document(s) to avoid breaking client-side generators?


