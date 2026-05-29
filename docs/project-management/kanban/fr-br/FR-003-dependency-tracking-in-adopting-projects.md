---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-07T19:20:00Z
expires_at: null
housekeeping_policy: keep
---

# Feature Request: Dependency Tracking in Adopting Projects

**Type:** Feature Request (FR)  
**Submitted:** 2025-12-07  
**Submitted By:** RMS  
**Priority:** MEDIUM  
**Status:** INTAKE

---

## Summary

When projects using ai-dev-kit are incepted, responsibility for tracking external dependencies (Best-README-Template, Keep a Changelog, Shields.io) should switch to those adopting projects, eliminating ai-dev-kit as an unnecessary middleman.

---

## Description

Currently, Story 4 (E7:S04) includes tasks for setting up dependency tracking for external resources (Best-README-Template, Keep a Changelog, Shields.io) within ai-dev-kit itself. However, this creates an unnecessary middleman layer.

**Problem:**
- ai-dev-kit would need to track updates to external resources
- Adopting projects would then need to track updates from ai-dev-kit
- This adds an extra layer of indirection and maintenance overhead
- Each adopting project should directly track the resources they use

**Solution:**
- Remove dependency tracking responsibility from ai-dev-kit
- Provide guidance and tooling for adopting projects to track dependencies directly
- ai-dev-kit provides the template and initial setup, but tracking becomes the adopting project's responsibility
- This aligns with the "copy, don't reference" principle from the versioning framework

**Use Case:**
- Project adopts ai-dev-kit and uses the README template
- Project directly tracks Best-README-Template, Keep a Changelog, and Shields.io for updates
- No need to wait for ai-dev-kit to update and propagate changes
- Project has direct control over when and how to incorporate upstream changes

---

## Requirements

### Functional Requirements
- [ ] Remove dependency tracking tasks from ai-dev-kit (E7:S04:T04, T05, T06)
- [ ] Create guidance documentation for adopting projects on how to track external dependencies
- [ ] Provide example tooling/scripts for dependency tracking in adopting projects
- [ ] Update Story 4 scope to focus on template creation and customization guidance only

### Non-Functional Requirements
- [ ] Documentation should be clear and actionable
- [ ] Tooling should be simple and maintainable
- [ ] Approach should align with framework principles (copy, don't reference)

---

## Scope Analysis

**Problem Domain:** Framework Adoption & Dependency Management  
**Affected Areas:**
- [x] Documentation
- [x] Framework Templates
- [x] Adoption Guides
- [ ] Backend/API
- [ ] Frontend/UI
- [ ] Database/Schema
- [ ] Testing

**Estimated Complexity:**
- [x] Simple (1-3 days)
- [ ] Medium (1 week)
- [ ] Complex (2+ weeks)
- [ ] Very Complex (1+ month)

---

## Use Cases

**Primary Use Case:**
A project adopts ai-dev-kit and uses the README template. The project directly tracks Best-README-Template, Keep a Changelog, and Shields.io for updates, incorporating changes when appropriate without waiting for ai-dev-kit updates.

**Additional Use Cases:**
- Project wants to customize dependency tracking approach for their specific needs
- Project wants to track additional dependencies beyond the standard three
- Project wants to automate dependency update notifications

---

## Acceptance Criteria

- [ ] E7:S04:T04, T05, T06 removed or reframed as guidance for adopting projects
- [ ] Documentation created explaining how adopting projects should track external dependencies
- [ ] Example tooling/scripts provided for dependency tracking
- [ ] Story 4 scope updated to reflect new approach
- [ ] Clear separation: ai-dev-kit provides template, adopting projects track dependencies

---

## Dependencies

**Blocks:**
- None

**Blocked By:**
- None

**Related Work:**
- **Epic 7:** Examples & Adoption Support
- **Story 4:** README Template Based on Best-README-Template (E7:S04)
- **Tasks:** E7:S04:T04, T05, T06 (to be reframed or removed)

---

## Intake Decision

**Intake Status:** ACCEPTED  
**Intake Date:** 2025-12-07  
**Intake By:** RMS

**Decision Flow Results:**
- [x] Story Match Found: Epic 7, Story 4 → New Tasks

**Assigned To:**
- Epic: Epic 7 - Examples & Adoption Support
- Story: Story 4 - README Template Based on Best-README-Template
- Task: E7:S04:T07 (Create dependency tracking guidance for adopting projects)
- Version: `v0.7.4.1+2`

**Kanban Links:**
- Epic: [`docs/project-management/kanban/epics/Epic-7/Epic-7.md`](../epics/Epic-7/Epic-7.md)
- Story: [`docs/project-management/kanban/epics/Epic-7/Story-04-readme-template-based-on-best-readme-template.md`](../epics/Epic-7/Story-04-readme-template-based-on-best-readme-template.md)

---

## Notes

This FR reframes the approach from Story 4. Instead of ai-dev-kit tracking external dependencies and propagating updates, adopting projects should track dependencies directly. This:

1. **Eliminates unnecessary middleman:** No need for ai-dev-kit to track and propagate updates
2. **Aligns with framework principles:** "Copy, don't reference" - projects own their dependencies
3. **Reduces maintenance overhead:** ai-dev-kit focuses on template quality, not dependency tracking
4. **Gives projects control:** Projects decide when and how to incorporate upstream changes
5. **Simplifies adoption:** Clearer separation of concerns

**Tasks to Update:**
- **E7:S04:T04** - Reframe: Remove from ai-dev-kit, create guidance for adopting projects
- **E7:S04:T05** - Reframe: Remove from ai-dev-kit, provide example tooling for adopting projects
- **E7:S04:T06** - Reframe: Remove from ai-dev-kit, document PR generation patterns for adopting projects
- **E7:S04:T07** - New: Create comprehensive dependency tracking guide for adopting projects

---

## References

- [Best-README-Template](https://github.com/othneildrew/Best-README-Template)
- [Keep a Changelog](https://keepachangelog.com/)
- [Shields.io](https://shields.io/)
- Story 4: [`docs/project-management/kanban/epics/Epic-7/Story-04-readme-template-based-on-best-readme-template.md`](../epics/Epic-7/Story-04-readme-template-based-on-best-readme-template.md)

---

**Template Usage:**
- This FR follows the Kanban Framework FR template
- Intake decision links to Epic 7, Story 4
- Tasks will be created in Story 4 to address this FR

---

_This template is part of the Kanban Framework. See `packages/frameworks/kanban/` for complete framework documentation._

