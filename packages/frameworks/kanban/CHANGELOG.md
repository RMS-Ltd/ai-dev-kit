# Changelog

All notable changes to the Kanban System Implementation Package will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.2.0] - 2026-04-13

**Package Version:** 2.2.0
**Project Version:** 0.7.6.18+1
**Bump Type:** MINOR

### Added
- **Kanban installer root propagation support:**
  - `install_kanban_framework.py` now resolves `kanban_root` from `rw-config.yaml` when default CLI path is used.
  - Enables cross-installer path consistency in real consumer installations.

### Changed
- **Installation run-state messaging:**
  - Installer now emits clearer final status outcomes (`SUCCESS`, `PARTIAL`, `CANCELLED`) aligned to validation outcomes.

### Documentation
- Updated package metadata and changelog tracking to reflect latest installer hardening work used in consumer install flows.

**Criteria Reference:** MINOR Version Bump
- ✅ New installer capability for configuration-aware path resolution
- ✅ Backward compatible with explicit `--kanban-path` overrides

---

## [2.1.0] - 2025-12-10

**Package Version:** 2.1.0
**Project Version:** 0.4.8.6+1
**Bump Type:** MINOR

### Added
- **Intelligent Epic Matching and Canonical Structure Adoption (E4:S08):**
  - `packages/frameworks/kanban/scripts/semantic_matcher.py` - Semantic analysis engine for epic content matching
    - Jaccard similarity calculation for epic content (title, description, purpose, scope)
    - Match classification (exact match ≥90%, semantic match ≥70%, partial match ≥40%, no match <40%)
    - Best match detection with similarity scores and rationale
  - `packages/frameworks/kanban/scripts/reference_updater.py` - Automatic task ID reference updating
    - Scans changelogs, documentation, and story files for task ID references
    - Updates references based on migration mappings
    - Reports updated files and un-updatable references
  - **Enhanced `analyze_structure.py`:**
    - Integrated semantic matching for epic analysis
    - Semantic match detection with scores and match types
    - Migration plan recommendations based on semantic matches
    - Recommends `canonical_adoption` mode when strong semantic matches found
  - **Enhanced `migrate_structure.py`:**
    - New `canonical_adoption` mode for intelligent canonical structure adoption
    - Intelligent task mapping to canonical epics/stories based on semantic matches
    - Automatic reference updating after migration
    - Dynamic epic numbering (installs canonical epics at next available number)
  - **Enhanced `install_kanban_framework.py`:**
    - Added `canonical_adoption` to installation mode choices
    - Interactive migration plan presentation before execution
    - Semantic match display with scores and rationale
    - User confirmation prompt with detailed migration preview
  - **Updated `scripts/README.md`:**
    - Documentation for semantic matching capabilities
    - `canonical_adoption` mode usage guide
    - Semantic matching examples and match classification guide
    - Reference updating capabilities documentation

### Changed
- Migration process now supports intelligent semantic matching (not just number conflicts)
- Default recommendation changed to `canonical_adoption` when strong semantic matches detected
- Migration plan presentation enhanced with semantic match details

### Documentation
- Updated `scripts/README.md` with comprehensive semantic matching documentation
- Added examples of semantic matching and intelligent migration workflow
- Documented reference updating capabilities and limitations

**Criteria Reference:** MINOR Version Bump
- ✅ New feature: Semantic epic matching with similarity scoring
- ✅ New feature: Intelligent task mapping to canonical structure
- ✅ New feature: Automatic reference updating
- ✅ New feature: Canonical adoption mode with interactive plan presentation
- ✅ Enhancement: Migration process intelligence significantly improved
- ✅ Backward compatible: Existing migration modes still supported

---

## [2.0.0] - 2025-12-10

**Package Version:** 2.0.0
**Project Version:** 0.4.6.0+4
**Bump Type:** MAJOR

### Added
- **Comprehensive Canonical E/S/T Structure:** Complete, production-ready template system for canonical epics, stories, and tasks
  - `packages/frameworks/kanban/templates/COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md` - Complete canonical structure (Epics 1-23+)
  - Epic 7: UXR (User Experience Research) added as canonical epic
  - ~50+ stories and ~300+ tasks defined
  - Scalability guidance (tiny → ambitious projects)
  - Contextualization system with placeholders
  - Chronological ordering finalized (Core: 1→2→3→4→5→6→7→8→10→18→22→23, Ancillary: 9→11→12→13→14→15→16→17→19→20→21→24*)
- **Design Documentation:** Comprehensive canonical structure design document
  - `docs/documentation/engineering-and-platform/comprehensive-canonical-est-structure-design.md`
  - Rationale for Epic 7 (UXR) as canonical
  - Epic ordering rationale and chronological adoption sequence
  - Implementation requirements

### Changed
- Epic 7 changed from "Codebase Maintenance" to "UXR (User Experience Research)"
- Codebase Maintenance moved to Epic 8 (project-specific canonical pattern)
- All project-specific epics renumbered (8→9, 9→10, etc.)
- Epic ordering finalized chronologically following SOP-driven development flow
- Epic 7 naming standardized to "UXR (User Experience Research)" for consistency

### Documentation
- Updated README to reference `COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md` in templates section
- Updated `CANONICAL_EPICS.md` with Epic 7 as UXR and reference to comprehensive structure
- Updated all Epic 7 references throughout package documentation

**Criteria Reference:** MAJOR Version Bump
- ✅ Major new capability: Complete, production-ready canonical E/S/T template system
- ✅ Architectural addition: Comprehensive structure fundamentally expands package scope
- ✅ Production-ready: Complete template system ready for RC/production use
- ✅ Significant enhancement: Epic 7 as UXR with standardized naming and chronological ordering
- ✅ Documentation: Complete template system documentation
- ⚠️ Note: While backward compatible, this represents a major capability expansion

---

## [1.3.0] - 2025-12-09

**Package Version:** 1.3.0
**Project Version:** 0.4.2.6+1
**Bump Type:** MINOR

### Added
- **GitHub Issue Templates:** Bug Report, Feature Request, and UXR templates for GitHub Issues
  - `.github/ISSUE_TEMPLATE/bug_report.yml` - Structured bug report form
  - `.github/ISSUE_TEMPLATE/feature_request.yml` - Structured feature request form
  - `.github/ISSUE_TEMPLATE/ux_research.yml` - Structured UX research form
- **GitHub Action:** Automatic conversion from GitHub Issues to FR/BR/UXR documents
  - `.github/workflows/fr-br-intake.yml` - Converts Issues to Kanban documents
  - Automatic document creation and linking
  - Bidirectional linking between GitHub Issues and Kanban documents
- **UXR Template:** User Experience Research template
  - `packages/frameworks/kanban/templates/UXR_TEMPLATE.md` - Complete UXR template
- **GitHub Submission Guide:** Comprehensive guide for external contributors
  - `packages/frameworks/kanban/FR_BR_UXR_GITHUB_SUBMISSION_GUIDE.md` - Complete submission guide

### Changed
- Updated README to include new templates and guides

**Criteria Reference:** MINOR Version Bump
- ✅ New feature: GitHub Issue integration for FR/BR/UXR submissions
- ✅ New feature: UXR template and support
- ✅ Enhancement: External contributor accessibility
- ✅ Backward compatible: No breaking changes

---

## [1.2.0] - 2025-12-09

### Added
- **Epic 7: Codebase Maintenance and Review** - New canonical epic for codebase maintenance and review work
  - Story 1: Codebase Maintenance Tasks with perpetual task for IDE-flagged issues
  - Example Epic 7 document demonstrating structure and content
  - Integration with Epic 4 (Kanban Framework) and Epic 6 (BR Implementation)

### Changed
- Updated canonical epic count from 1-6 to 1-7
- Updated intake guides to reference Epic 7 (new project-specific epics now start at Epic 8)
- Updated README to include Epic 7 in canonical epic definitions

### Documentation
- Added Epic 7 example document: `examples/Epic-7-Codebase-Maintenance-Example.md`
- Updated `CANONICAL_EPICS.md` with Epic 7 definition and ordering rationale
- Updated all intake guides (`FR_BR_INTAKE_GUIDE.md`, `FR_BR_INTAKE_AGENT_GUIDE.md`, `FR_BR_INTAKE_USER_GUIDE.md`)

## [1.1.0] - 2025-12-09

### Added
- Canonical Epics 5 and 6 (FR Implementation, BR Implementation)
- Example Epic 5 and Epic 6 documents
- Canonical stories template for FR/BR Implementation epics

### Changed
- Updated canonical epic count from 1-4 to 1-6
- Updated intake guides to reference new canonical epics

## [1.0.0] - 2025-12-04

### Added
- Initial release of Kanban System Implementation Package
- Complete Kanban governance policy
- Epic and Story templates
- FR/BR intake processes
- Canonical Epics 1-4 (Core, Workflow, Versioning, Kanban)

