# Changelog v0.7.4.1+2

**Release Date:** 2025-12-07 19:25:00 UTC  
**Epic:** Epic 7 - Examples & Adoption Support  
**Story:** Story 4 - README Template Based on Best-README-Template  
**Task:** E7:S04:T01 - Create README template based on Best-README-Template  
**Version:** 0.7.4.1+2

---

## 📋 Summary

Created FR-003 and reframed Story 4 tasks to shift dependency tracking responsibility from ai-dev-kit to adopting projects, eliminating unnecessary middleman layer.

---

## ✅ Completed Work

### FR-003: Dependency Tracking in Adopting Projects

**Status:** ACCEPTED  
**Created:** 2025-12-07

**Changes Made:**
- Created FR-003 documenting requirement to shift dependency tracking to adopting projects
- Reframed E7:S04:T04, T05, T06 to provide guidance/tooling for adopting projects instead of implementing in ai-dev-kit
- Added new task E7:S04:T07 for comprehensive dependency tracking guide

**Rationale:**
When projects using ai-dev-kit are incepted, responsibility for tracking external dependencies (Best-README-Template, Keep a Changelog, Shields.io) should switch to those adopting projects, eliminating ai-dev-kit as an unnecessary middleman. This aligns with the "copy, don't reference" framework principle and gives projects direct control over dependency updates.

### Story 4 Task Updates

**Reframed Tasks:**
- **E7:S04:T04** – Create dependency tracking guidance for adopting projects (was: Set up dependency tracking for external resources)
- **E7:S04:T05** – Provide example tooling for dependency tracking in adopting projects (was: Implement automated update detection mechanism)
- **E7:S04:T06** – Document PR generation patterns for adopting projects (was: Create PR generation workflow for upstream updates)

**New Task:**
- **E7:S04:T07** – Create comprehensive dependency tracking guide for adopting projects

**Story Goals Updated:**
- Removed: "Set up dependency tracking for Best-README-Template, Keep a Changelog, and Shields.io"
- Removed: "Implement automated update detection and PR generation when upstream projects update"
- Added: "Provide guidance and tooling for adopting projects to track external dependencies directly"
- Added: "Eliminate ai-dev-kit as unnecessary middleman for dependency tracking"

---

## 📚 Documentation

### Added
- **FR-003:** `docs/project-management/kanban/fr-br/FR-003-dependency-tracking-in-adopting-projects.md`
  - Complete feature request documenting dependency tracking approach change
  - Rationale, requirements, acceptance criteria, and intake decision
  - Links to Epic 7, Story 4

### Changed
- **Story 4 Document:** Updated task descriptions and goals to reflect new approach
  - T04, T05, T06 reframed to provide guidance/tooling for adopting projects
  - T07 added for comprehensive guide
  - Story goals updated to reflect dependency tracking shift
  - Notes section updated with new approach

---

## 🔗 Related Work

- **Epic:** Epic 7 - Examples & Adoption Support
- **Story:** Story 4 - README Template Based on Best-README-Template
- **Feature Request:** FR-003 - Dependency Tracking in Adopting Projects
- **Previous Release:** v0.7.4.1+1 (Story 4 created)

---

## 📝 Notes

- This change eliminates ai-dev-kit as a middleman for dependency tracking
- Aligns with framework principle: "Copy, don't reference" - projects own their dependencies
- Reduces maintenance overhead for ai-dev-kit
- Gives adopting projects direct control over when and how to incorporate upstream changes
- All tasks now focus on providing guidance, examples, and tooling rather than implementing tracking in ai-dev-kit

