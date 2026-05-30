---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-29T10:51:00Z
expires_at: null
housekeeping_policy: keep
---

# User Experience Research: Project root hygiene and legacy docs rationalization

**Type:** User Experience Research (UXR)  
**Submitted:** 2026-05-29  
**Submitted By:** User  
**Priority:** HIGH  
**Status:** INTAKE  
**Code:** UXR-013

**Implementing Task:** [E07:S01:T10](../epics/Epic-7/Story-001-codebase-maintenance-tasks/T10-project-root-hygiene-and-legacy-docs-rationalization.md)

**Related:** [FR-039](FR-039-ai-dev-kit-project-review-and-legacy-clean-up.md), [UXR-011](UXR-011-kanban-naming-hygiene-and-directory-systematic-cleanup.md)

---

## Summary

Users perceive the repository root as cluttered with old, transitional, or legacy documentation files that reduce discoverability and confidence in canonical entry points.

---

## Research Objective

Determine which root-level artifacts are still canonical and which should be moved, archived, or removed so the project root remains intentionally minimal and easy to navigate.

---

## Methodology

**Research Method:** Repository-structure UX audit and maintainer walkthrough  
**Participants:** 1 active maintainer user report plus repository maintainer review  
**Duration:** Initial intake pass (single session), followed by structured audit task  
**Tools/Platforms:** Local repository tree review, kanban documentation, governance policies

**Research Details:**
- Capture concrete root-level pain points from user language ("cluttered", "old/legacy docs").
- Build an inventory of root files grouped by role: canonical entrypoint, operational config, generated artifact, transitional legacy.
- Validate each candidate against project policies and current workflow ownership.

---

## Key Findings

- Root-level discoverability is degraded when historical or one-off documentation coexists with canonical entry files.
- Users expect the root to be highly curated and minimal, with deeper or historical docs housed under dedicated documentation paths.
- Existing cleanup work covers broad repository hygiene, but root-specific curation criteria need explicit acceptance criteria and execution checklist.

---

## User Pain Points

- Difficulty identifying the current canonical documents at first glance.
- Friction when onboarding contributors who cannot distinguish active vs legacy root files.
- Reduced trust that the repository reflects framework best practices for adopters.

---

## Recommendations

- [ ] Recommendation 1: Define and document a canonical root file policy (what may live at root vs must be housed elsewhere).
- [ ] Recommendation 2: Produce a root-only inventory with keep/move/archive/remove decisions and rationale per file.
- [ ] Recommendation 3: Execute a staged cleanup plan with link integrity verification and no broken references.

**Priority Order:**
1. Define canonical root policy and decision rubric.
2. Complete inventory and classification of current root artifacts.
3. Apply cleanup in scoped batches with validation.

---

## Affected Areas

**Affected Components:**
- [ ] UI Components
- [x] User Flows
- [x] Features
- [x] Documentation
- [x] Other: Repository information architecture and onboarding ergonomics

**Specific Areas:**
- Repository root files and directories
- Root-level documentation and guidance files
- Root entrypoint references from README and docs corpus

---

## Supporting Evidence

**Research Artifacts:**
- User intake statement: "Proj root is cluttered... old and legacy docs there that have no business."
- Prior broad cleanup context in `FR-039`
- Prior structural hygiene context in `UXR-011`

**Quotes or Examples:**
- "Proj root is cluttered."
- "There has to be old and legacy docs there that have no business."

---

## Next Steps

- [x] File UXR intake record with explicit scope and acceptance direction.
- [x] Create linked implementing task in a maintenance story.
- [ ] Run IPW for `E07:S01:T10` before implementation.
- [ ] Proceed with implementation only after explicit user authorization.

---

## Dependencies

**Blocks:**
- Confident "clean reference repository" experience at first contact in root.

**Blocked By:**
- Need implementation planning package (IPW/IPP) before execution edits.

**Related Work:**
- [FR-039](FR-039-ai-dev-kit-project-review-and-legacy-clean-up.md)
- [UXR-011](UXR-011-kanban-naming-hygiene-and-directory-systematic-cleanup.md)
- [E07:S01:T10](../epics/Epic-7/Story-001-codebase-maintenance-tasks/T10-project-root-hygiene-and-legacy-docs-rationalization.md)

---

## Intake Decision

**Intake Status:** INTAKE  
**Intake Date:** 2026-05-29  
**Intake By:** Codex Agent

**Decision Flow Results:**
- [x] Story Match Found: Epic 7, Story 1 -> Task T10
- [ ] New Story Created: [N/A]
- [ ] New Epic Created: [N/A]

**Assigned To:**
- Epic: E7 - Codebase Maintenance and Review
- Story: E7:S01 - Codebase Maintenance Tasks
- Task: E07:S01:T10 - Project root hygiene and legacy docs rationalization
- Version: `0.7.1.10+1` (target at release time)

**Kanban Links:**
- Epic: [`docs/project-management/kanban/epics/Epic-7/Epic-7.md`](../epics/Epic-7/Epic-7.md)
- Story: [`docs/project-management/kanban/epics/Epic-7/Story-001-codebase-maintenance-tasks.md`](../epics/Epic-7/Story-001-codebase-maintenance-tasks.md)
- Task: [`docs/project-management/kanban/epics/Epic-7/Story-001-codebase-maintenance-tasks/T10-project-root-hygiene-and-legacy-docs-rationalization.md`](../epics/Epic-7/Story-001-codebase-maintenance-tasks/T10-project-root-hygiene-and-legacy-docs-rationalization.md)

---

## Notes

Implementation is intentionally gated. This intake captures the user-reported UX issue and wires it to a concrete task without performing repository modifications beyond intake documentation.

---

## References

- [FR-039](FR-039-ai-dev-kit-project-review-and-legacy-clean-up.md)
- [UXR-011](UXR-011-kanban-naming-hygiene-and-directory-systematic-cleanup.md)
