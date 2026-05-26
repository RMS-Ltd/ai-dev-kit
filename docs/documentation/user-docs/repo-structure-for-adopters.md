# Repository Structure for Adopters

**Purpose:** This document explains the ai-dev-kit repository structure from an adopter's perspective, clarifying which parts are frameworks (to copy/adopt), which are dev-kit-specific examples, and which are book/authoring content.

---

## Framework Packages (Canonical - Copy These)

**Location:** `packages/frameworks/`

These are the **canonical framework packages** that adopters should copy or install:

### Numbering & Versioning Framework
- **Path:** `packages/frameworks/numbering & versioning/`
- **Canonical docs:**
  - `versioning-policy.md` - Primary schema definition (RC.EPIC.STORY.TASK+BUILD)
  - `versioning-strategy.md` - Comprehensive strategy (ordering, timestamps, traceability)
  - `README.md` - Package overview
- **What to copy:** Entire package directory

### Workflow Management Framework
- **Path:** `packages/frameworks/workflow mgt/`
- **Canonical docs:**
  - `KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md` - RW agent execution guide
  - `KB/Documentation/Developer_Docs/vwmp/update-kanban-workflow-agent-execution.md` - UKW agent execution guide
  - `KB/Documentation/Developer_Docs/vwmp/package-version-workflow-agent-execution.md` - PVW agent execution guide
  - `scripts/validation/*` - Branch context, changelog, version validators
  - `scripts/version/semver_converter.py` - SemVer mapping logic
  - `scripts/changelog/cmw.py` - Changelog Management Workflow
- **What to copy:** Entire package directory

### Kanban Framework
- **Path:** `packages/frameworks/kanban/`
- **Canonical docs:**
  - `policies/kanban-governance-policy.md` - Framework-level governance
  - `templates/*` - Epic/story/task and board guide templates
- **What to copy:** Entire package directory

---

## Dev-Kit Local Specialisations (Examples - Reference Only)

**Location:** `docs/architecture/standards-and-adrs/`

These are **dev-kit-specific applications** of the frameworks. Adopters should create their own specialisations:

### Versioning Policy
- **Path:** `docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md`
- **Purpose:** Dev-kit's application of the versioning framework (fixes Epic space 1-4+, documents dev-kit-specific SemVer mapping)
- **Framework SoT:** `packages/frameworks/numbering & versioning/versioning-policy.md`
- **For adopters:** Create your own policy that references the framework SoT and documents your project's Epic ranges and adaptations

### Changelog Policies
- **Paths:**
  - `docs/architecture/standards-and-adrs/changelog-management-policy.md`
  - `docs/architecture/standards-and-adrs/changelog-archival-policy.md`
- **Purpose:** Dev-kit's application of CMW patterns (latest-only mode, archival thresholds)
- **Framework SoT:** `packages/frameworks/workflow mgt/workflows/changelog-management-workflow.yaml`
- **For adopters:** Reference these as examples, but create your own policies based on your project's needs

### Kanban Instance
- **Path:** `docs/project-management/kanban/`
- **Purpose:** Dev-kit's actual Kanban board, epics, stories, tasks (an instance of the framework)
- **Framework SoT:** `packages/frameworks/kanban/policies/kanban-governance-policy.md`
- **For adopters:** Use the framework templates to create your own Kanban structure; don't copy dev-kit's actual epics/stories

---

## Book / authoring content (not in this repository)

Manuscript, proposals, and book-project Kanban (formerly Epic 24) live in the **private companion repository** `RMS-Ltd/hf-ai-dev-kit`, not in the public AI Dev Kit tree. See [ADR-006](../../architecture/standards-and-adrs/ADR-006-book-project-private-repository-spin-off.md).

**For adopters:** Ignore book-specific paths if you encounter them in older forks or changelogs; use [`INSTALL_IN_YOUR_PROJECT.md`](https://github.com/earlution/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md) for framework adoption only.

---

## Adoption entry points (greenfield vs brownfield)

Installer-driven **greenfield** setup is documented from repository root **[`INSTALL_IN_YOUR_PROJECT.md`](https://github.com/earlution/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md)** (FR-080). Policy: [ADR-003](../../architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption.md); brownfield modular integration: [FR-081](../../project-management/kanban/fr-br/FR-081-brownfield-modular-adopter-integration.md); planning package: [IPW-E6S09T01](../../implementation-cycles/IPW-E6S09T01-greenfield-installation-fr080.md).

Some paths under `docs/documentation/user-docs/` may include narrative examples; **framework adoption** should treat [`INSTALL_IN_YOUR_PROJECT.md`](https://github.com/earlution/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md) as the canonical first-run pointer unless a guide explicitly scopes brownfield work.

---

## Scripts

### Framework Scripts (Copy These)
- **Location:** `packages/frameworks/workflow mgt/scripts/` and `packages/frameworks/kanban/scripts/`
- **Purpose:** Core workflow validators, converters, changelog management, Kanban installation
- **For adopters:** Copy these scripts when installing frameworks

### Project Utilities (Reference Only)
- **Location:** `scripts/`
- **Purpose:** Dev-kit-specific utilities (framework package build/publish, documentation health monitoring, internal tooling)
- **For adopters:** These are useful examples but not required for framework adoption

---

## Project Root

The project root is kept minimal. Only the following belong there:

- **README.md** – Project overview and quick start
- **CHANGELOG.md** – Main changelog (Keep a Changelog)
- **CONTRIBUTING.md** – Contribution guidelines
- **INSTALL_IN_YOUR_PROJECT.md** – How to install frameworks (adopter-facing)
- **Config files** – e.g. `rw-config.yaml`, `semver-registry.yaml`

**Maintainer runbooks** (build packages, upload to releases, etc.) live in **`docs/maintenance/`**, not in root. See [docs/maintenance/README.md](../../maintenance/README.md).

---

## Configuration Files

### rw-config.yaml
- **Location:** Project root
- **Purpose:** Release Workflow configuration (paths, schema, Kanban integration)
- **For adopters:** Create your own `rw-config.yaml` using the framework's config schema

### semver-registry.yaml
- **Location:** Project root
- **Purpose:** SemVer mapping registry (epic/story → MINOR/PATCH assignments)
- **For adopters:** Create your own registry when adopting the versioning framework

---

## Summary

| Item | Location | Adopter Action |
|------|----------|----------------|
| **Frameworks (SoT)** | `packages/frameworks/*` | Copy entire packages |
| **Dev-kit policies** | `docs/architecture/standards-and-adrs/*` | Reference as examples, create your own |
| **Dev-kit Kanban** | `docs/project-management/kanban/` | Use framework templates, don't copy dev-kit's epics |
| **Framework scripts** | `packages/frameworks/*/scripts/` | Copy when installing frameworks |
| **Project utilities** | `scripts/` | Optional reference only |
| **Book content** | `docs/documentation/`, `docs/knowledge/` | Ignore (book project only) |
| **Maintainer runbooks** | `docs/maintenance/` | Reference only (build/upload; not for adoption) |

---

**Key Principle:** Frameworks (`packages/frameworks/*`) are the **canonical source of truth**. Dev-kit-local docs (`docs/architecture/standards-and-adrs/*`) are **specialisations** that show how to apply the frameworks in a specific project context.
