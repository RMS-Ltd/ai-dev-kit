# Changelog v0.6.1.1+2

**Release Date:** 2025-12-06 14:15:00 UTC  
**Epic:** Epic 6 - Framework Management and Maintenance  
**Story:** Story 1 - Framework Version Management  
**Task:** Task 1 - Define framework versioning strategy  
**Build:** 2

---

## Summary

Designed framework dependency architecture and updated all documentation to reflect the vision of transforming frameworks from copy-paste packages to reusable, auto-updating dependencies. Added new tasks to Epic 6 stories for dependency architecture implementation.

---

## Changes

### 📋 Framework Dependency Architecture

**New Architecture Document:**
- Created `docs/architecture/standards-and-adrs/framework-dependency-architecture.md`
- Defines hybrid dependency strategy (Git submodules, CLI tool, package managers)
- Documents three-phase implementation roadmap
- Includes migration path from copy-paste to dependencies

**Key Features:**
- **Phase 1:** Git submodules (immediate) - Versioned via Git tags
- **Phase 2:** CLI tool (short-term) - Unified interface for all backends
- **Phase 3:** Package managers (future) - npm/pip packages

### 🛠️ CLI Tool Design

**New CLI Design Document:**
- Created `docs/architecture/standards-and-adrs/framework-update-cli-design.md`
- Designs `ai-dev-kit` CLI tool for framework management
- Defines commands: `install`, `update`, `check`, `status`, `list`, `remove`
- Documents backend abstraction (Git submodules, package managers)

### 📚 Epic 6 Story Updates

**Story 1 - Framework Version Management:**
- Added E6:S01:T04 - Design framework dependency architecture
- Added E6:S01:T05 - Create framework version tagging strategy

**Story 2 - Framework Update and Migration:**
- Added E6:S02:T04 - Build framework update CLI tool
- Added E6:S02:T05 - Create auto-update mechanisms

**Epic 6 Overview:**
- Updated vision statement to reflect dependency architecture goal
- Added dependency architecture tasks to story checklists

### 📖 Documentation Updates

**Main README:**
- Updated design philosophy to mention dependency-based approach
- Added vision statement about auto-updating dependencies
- Updated installation section to reference dependency architecture

**Framework READMEs:**
- Updated `packages/frameworks/numbering & versioning/README.md`
- Updated `packages/frameworks/workflow mgt/README.md`
- Updated `packages/frameworks/kanban/README.md`
- All now include dependency architecture notice

**Integration Guides:**
- Updated `packages/frameworks/numbering & versioning/integration/integration-examples-external-projects.md`
- Added examples for both copy-paste and dependency-based installation

---

## Files Modified

- `src/fynd_deals/version.py` (version bumped to v0.6.1.1+2)
- `README.md` (updated with dependency architecture vision)
- `docs/project-management/kanban/epics/Epic-6/Epic-6.md` (updated vision and tasks)
- `docs/project-management/kanban/epics/Epic-6/Story-001-framework-version-management.md` (added tasks)
- `docs/project-management/kanban/epics/Epic-6/Story-002-framework-update-and-migration.md` (added tasks)
- `packages/frameworks/numbering & versioning/README.md` (added dependency notice)
- `packages/frameworks/workflow mgt/README.md` (added dependency notice)
- `packages/frameworks/kanban/README.md` (added dependency notice)
- `packages/frameworks/numbering & versioning/integration/integration-examples-external-projects.md` (updated examples)

## Files Created

- `docs/architecture/standards-and-adrs/framework-dependency-architecture.md` (new architecture document)
- `docs/architecture/standards-and-adrs/framework-update-cli-design.md` (new CLI design document)

---

## Related Work

- **E6:S01:T01** - Define framework versioning strategy (in progress)
- **E6:S01:T04** - Design framework dependency architecture (completed)
- **E6:S02:T04** - Build framework update CLI tool (design completed)

---

## Notes

This release establishes the architectural foundation for transforming frameworks into reusable, auto-updating dependencies. The hybrid approach (Git submodules → CLI tool → package managers) provides flexibility while enabling automatic updates when frameworks are improved.

The next steps are to implement Phase 1 (Git submodules) and begin Phase 2 (CLI tool) development.

