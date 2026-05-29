---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:01:47Z
expires_at: null
housekeeping_policy: keep
---

# KB Structure Overview

**Task:** E1:S03:T05 – Create KB structure documentation  
**Date:** 2025-12-03  
**Status:** ✅ COMPLETE  
**Version:** v0.1.3.5+1

---

## Executive Summary

This document provides a **comprehensive overview** of the `ai-dev-kit` Knowledge Base (KB) structure, including directory purposes, navigation patterns, and maintenance procedures. It serves as the **primary reference** for understanding how the KB is organized and how to navigate it effectively.

**Key Points:**
- **3-level default depth** for optimal navigation
- **Self-documenting directory names** for clarity
- **Separation of concerns** across four main sections
- **Scalable pattern** supporting projects from small frameworks to large codebases

---

## 1. KB Structure Overview

### 1.1 Top-Level Structure

```
docs/
├── README.md                          # Root navigation hub
├── Architecture/                      # Technical standards, ADRs
├── changelog-and-release-notes/      # Release documentation
├── project-management/                 # Project management, Kanban
└── Guides/                           # User-facing documentation
```

### 1.2 Section Purposes

| Section | Purpose | Audience | Depth |
|---------|---------|----------|-------|
| `Architecture/` | Technical standards, ADRs, integration docs | Developers, architects | 3 levels |
| `changelog-and-release-notes/` | Release notes, changelogs, version history | All users | 3 levels |
| `project-management/` | Kanban, governance, rituals | PMs, team leads | 3-4 levels |
| `Guides/` | Getting started, framework consumption | End users, adopters | 3 levels |

---

## 2. Directory Purposes

### 2.1 Architecture (`docs/architecture/`)

**Purpose:** Technical reference for developers and architects

**Contents:**
- `standards-and-adrs/` – Architecture Decision Records, technical standards
  - `dev-kit-versioning-policy.md` – Versioning policy
  - `dev-kit-kanban-versioning-rw-integration.md` – Integration guide
  - `kb-structure-overview.md` – This document

**Navigation:**
- Entry point: `docs/architecture/README.md`
- Key documents: `standards-and-adrs/`

**When to Use:**
- Looking for technical standards or ADRs
- Understanding versioning or integration patterns
- Reviewing architectural decisions

---

### 2.2 Changelog and Release Notes (`docs/changelog-and-release-notes/`)

**Purpose:** Release documentation and version history

**Contents:**
- `changelog-archive/` – Detailed per-version changelogs
  - `CHANGELOG_v{VERSION}.md` – Individual release changelogs

**Navigation:**
- Entry point: `docs/changelog-and-release-notes/README.md`
- Archive index: `changelog-archive/README.md`
- Main changelog: `../../CHANGELOG.md` (root level)

**When to Use:**
- Reviewing release history
- Finding detailed changelog for a specific version
- Understanding what changed in a release

---

### 2.3 Project Management (`docs/project-management/`)

**Purpose:** Project management, Kanban, governance

**Contents:**
- `kanban/` – Kanban board, epics, stories
  - `_index.md` – Board view
  - `kboard.md` – Detailed board
  - `epics/` – Epic documentation
- `rituals/` – Governance policies, rituals
  - `policy/` – Policy documents
    - `kanban-governance-policy.md` – Kanban governance

**Navigation:**
- Entry point: `docs/project-management/README.md`
- Kanban board: `kanban/_index.md`
- Epics: `kanban/epics/`

**When to Use:**
- Viewing Kanban board
- Finding epic or story documentation
- Reviewing governance policies

---

### 2.4 Guides (`docs/guides/`)

**Purpose:** User-facing documentation and how-to guides

**Contents:**
- `getting-started/` – Quick start guides, onboarding
- `framework-consumption/` – Guides for adopting frameworks

**Navigation:**
- Entry point: `docs/guides/README.md`
- Getting started: `getting-started/`
- Framework consumption: `framework-consumption/`

**When to Use:**
- New to the dev-kit
- Adopting frameworks in your project
- Looking for how-to guides

---

### 2.5 Maintenance (`docs/maintenance/`)

**Purpose:** Operational runbooks for maintainers (build packages, upload to GitHub Releases). Not for adopters.

**Contents:**
- `README.md` – Index of runbooks
- `BUILD_PACKAGES.md`, `BUILD_AND_UPLOAD.md`, `UPLOAD_PACKAGES.md`, etc.

**When to Use:**
- Building or publishing framework packages
- CI/maintainer workflows

**Convention:** These runbooks live under `docs/maintenance/` so the project root stays minimal (README, CHANGELOG, CONTRIBUTING, INSTALL_IN_YOUR_PROJECT, config files only).

---

## 3. Navigation Patterns

### 3.1 Entry Points

**Primary Entry Point:**
- `docs/README.md` – Root navigation hub with links to all sections

**Section Entry Points:**
- `docs/architecture/README.md` – Architecture overview
- `docs/changelog-and-release-notes/README.md` – Changelog overview
- `docs/project-management/README.md` – Project Management overview
- `docs/guides/README.md` – Guides overview

### 3.2 Navigation Flow

```
docs/README.md
  ├─→ Architecture/README.md → standards-and-adrs/
  ├─→ changelog-and-release-notes/README.md → changelog-archive/
  ├─→ project-management/README.md → kanban/ → epics/
  └─→ Guides/README.md → getting-started/ | framework-consumption/
```

### 3.3 Cross-Referencing

**Internal References:**
- Use relative paths: `[Architecture Policy](../Architecture/standards-and-adrs/dev-kit-versioning-policy.md)`
- Test all links to ensure they work

**External References:**
- Package references: `[Workflow Management](https://github.com/earlution/ai-dev-kit/blob/main/packages/frameworks/workflow%20mgt/README.md)` (repository root; outside `docs/`)
- Root references: `[Main Changelog](https://github.com/earlution/ai-dev-kit/blob/main/CHANGELOG.md)` (repo root; outside `docs/`)

---

## 4. Maintenance Procedures

### 4.1 Adding New Documents

**Process:**
1. Determine document purpose and audience
2. Choose appropriate section (Architecture, Project Management, Changelog, Guides)
3. Place in correct category directory
4. Follow naming conventions (`kebab-case.md`)
5. Update relevant READMEs with links
6. Add cross-references from related documents

**Examples:**
- New ADR → `docs/architecture/standards-and-adrs/adr-XXX-title.md`
- New guide → `docs/guides/getting-started/guide-name.md`
- New epic → `docs/project-management/kanban/epics/epic-\{N\}.md`

### 4.2 Updating Existing Documents

**Process:**
1. Make content changes
2. Update metadata (date, version if applicable)
3. Review and update cross-references
4. Update README descriptions if purpose changes significantly

### 4.3 Moving Documents

**Process:**
1. Move file to new location
2. Find all references (use `grep -r "old/path" .`)
3. Update all cross-references
4. Update READMEs (remove from old, add to new)
5. Test all links

### 4.4 Maintaining READMEs

**Process:**
- Every major directory should have a `README.md`
- READMEs should explain purpose and provide navigation
- Update READMEs when structure changes
- Keep navigation links current

---

## 5. Structure Principles

### 5.1 Depth Management

**Default Rule:** 3 levels maximum (`docs/Section/Category/Item.md`)

**Exception:** 4th level only when clearly justified (e.g., epic-specific assets)

**Anti-Pattern:** Avoid 5+ level depths

### 5.2 Self-Documenting Names

**Directories:** Use descriptive names that indicate purpose
- ✅ `Architecture/standards-and-adrs/`
- ❌ `Arch/SA/`

**Files:** Use `kebab-case` with descriptive names
- ✅ `dev-kit-versioning-policy.md`
- ❌ `version.md`

### 5.3 Separation of Concerns

**Rule:** Each section has a distinct purpose
- Architecture = Technical reference
- Project Management = Project management
- Changelog = Release documentation
- Guides = User-facing docs

**Avoid:** Mixing concerns (e.g., don't put user guides in Architecture)

---

## 6. Scalability

### 6.1 Canonical Pattern

The dev-kit uses a **minimal subset** of the canonical KB pattern (see `T006-scalable-kb-pattern.md`):

**Core Sections (Always Present):**
- Architecture
- Project Management
- Changelog
- Guides

**Optional Sections (For Large Projects):**
- engineering-and-platform
- Operations_and_SRE
- Testing
- Product_and_Experience
- Enablement
- Data_and_Insights

### 6.2 Adoption Guidance

**For Small Projects (like dev-kit):**
- Use core sections only
- Keep structure simple
- Focus on essential documentation

**For Large Projects (100K+ LOC):**
- Adopt canonical pattern
- Add optional sections as needed
- Maintain 3-level default depth
- See `T006-scalable-kb-pattern.md` for full guidance

---

## 7. Related Documents

- `docs/project-management/kanban/epics/Epic-1/Story-003-core-kb-structure-for-dev-kit/T001-kb-structure-analysis.md` – Structure analysis
- `docs/project-management/kanban/epics/Epic-1/Story-003-core-kb-structure-for-dev-kit/T002-kb-structure-principles.md` – Structure principles
- `docs/project-management/kanban/epics/Epic-1/Story-003-core-kb-structure-for-dev-kit/T003-kb-structure-migration-guide.md` – Migration guide
- `docs/project-management/kanban/epics/Epic-1/Story-003-core-kb-structure-for-dev-kit/T006-scalable-kb-pattern.md` – Scalable pattern

---

## 8. Quick Reference

### Where to Find...

**Versioning Policy:** `docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md`  
**Kanban Governance:** `docs/project-management/rituals/policy/kanban-governance-policy.md`  
**Kanban Board:** `docs/project-management/kanban/_index.md`  
**Changelog Archive:** `docs/changelog-and-release-notes/changelog-archive/`  
**Getting Started:** `docs/guides/getting-started/`  
**Framework Consumption:** `docs/guides/framework-consumption/`

---

_End of KB Structure Overview_

