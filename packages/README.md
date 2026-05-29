---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:01:54Z
expires_at: null
housekeeping_policy: keep
---

# Packages Directory

This directory contains all packages organized by category.

## Structure

- **`frameworks/`** - Complete, reusable development frameworks
  - **`workflow mgt/`** - Workflow Management Framework with comprehensive documentation. If you **vendor only this folder**, start with [RW validators and consumer layout](frameworks/workflow%20mgt/docs/rw-validators-consumer-layout.md) for `rw-config.yaml` and validator paths.
  - **`kanban/`** - Project management and kanban board systems
  - **`doc-lifecycle/`** - Documentation lifecycle management
  - **`debug-path/`** - Debugging and troubleshooting frameworks
  - **`numbering & versioning/`** - Version control and numbering strategies
  - **`tooling & automation/`** - Development tooling and automation frameworks
- **`tools/`** - Development tools and utilities
- **`sops/`** - Standard Operating Procedures and workflows

## Framework README version fields

**Two different version lines:**

- **ai-dev-kit repository** version lives in `src/fynd_deals/version.py` (internal `RC.EPIC.STORY.TASK+BUILD` and related SemVer for releases). It tracks **monorepo** releases, Kanban, and RW forensics for this project.
- **Individual framework** `Version:` in each package `README.md` (e.g. workflow mgt **2.2.x**, numbering **2.0.0**) describes the **portable package** for adopters copying or downloading that framework.

**When to bump a framework README version:** Manually when behavior or **adopter-facing** documentation for **that package** materially changes — for example after a curated merge to `main`, a GitHub Release tarball of that framework, or a breaking doc/path change. You do **not** need to bump a framework README on every monorepo RW unless that release changed the package contents or its documented contract.

**Default:** Maintainer judgment + optional pairing with tagged framework drops; not automated in CI unless you add it later.

## Adding New Packages

1. **Choose the right category:**
   - **Frameworks** - Complete systems with full documentation (e.g., Release Workflow, Versioning Strategy)
   - **Tools** - Utilities and scripts (e.g., code generators, validators)
   - **SOPs** - Process documentation (e.g., code review procedures, deployment workflows)

2. **Create package directory:**

```bash
mkdir -p packages/{category}/your-package-name
```

3. **Follow package structure:**
   - Include `README.md` with overview
   - Include `PACKAGE_OVERVIEW.md` for structure
   - Include `IMPLEMENTATION_GUIDE.md` for step-by-step guide
   - Add version number and update history

2. **Update main README.md** to list your new package

## Package Naming

- Use descriptive, lowercase names
- Use hyphens or spaces for multi-word names
- Be consistent with existing packages

**Examples:**
- `workflow mgt/` (framework) - Complete workflow management system
- `numbering & versioning/` (framework) - Version control strategies
- `code-generator/` (tool) - Code generation utilities
- `deployment-sop/` (SOP) - Deployment procedures

