---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-06T13:50:00Z
expires_at: null
housekeeping_policy: keep
---

# Framework Dependency Architecture

**Status:** Proposed  
**Version:** 1.0.0  
**Last Updated:** 2025-12-06  
**Epic:** Epic 6 - Framework Management and Maintenance  
**Story:** Story 1 - Framework Version Management  
**Task:** E6:S01:T04 - Design framework dependency architecture

---

## Executive Summary

This document defines the architecture for transforming AI Dev Kit frameworks from **copy-paste packages** to **reusable, auto-updating dependencies**. The architecture supports multiple dependency management strategies, enabling frameworks to be installed and updated automatically across projects.

**Vision:** When a framework is updated in `ai-dev-kit`, projects using that framework can automatically receive updates through their chosen dependency management mechanism.

---

## Current State

### Copy-Paste Model

**Current Approach:**
- Frameworks are copied manually into projects
- Updates require manual copying of new versions
- No automatic update mechanism
- Version tracking is manual

**Limitations:**
- ❌ No automatic updates when frameworks improve
- ❌ Manual version tracking
- ❌ Difficult to maintain consistency across projects
- ❌ No dependency management

**Example:**
```bash
# Current: Manual copy
cp -r packages/frameworks/numbering\ \&\ versioning /path/to/project/
# Updates require manual re-copying
```

---

## Target State

### Dependency-Based Model

**Target Approach:**
- Frameworks are installed as dependencies
- Updates are automatic or semi-automatic
- Version tracking is automated
- Multiple dependency backends supported

**Benefits:**
- ✅ Automatic updates when frameworks improve
- ✅ Automated version tracking
- ✅ Consistent framework versions across projects
- ✅ Standard dependency management

**Example:**
```bash
# Target: Dependency-based
ai-dev-kit install numbering-versioning@2.0.0
ai-dev-kit update numbering-versioning  # Auto-updates to latest compatible version
```

---

## Architecture Overview

### Hybrid Dependency Strategy

The architecture supports **three dependency management strategies**, allowing projects to choose based on their needs:

1. **Git Submodules** (Phase 1 - Immediate)
   - Built into Git
   - Versioned via Git tags
   - Manual update commands

2. **CLI Tool** (Phase 2 - Short-term)
   - `ai-dev-kit` CLI for framework management
   - Supports multiple backends
   - Automated updates

3. **Package Managers** (Phase 3 - Future)
   - npm/pip/pypi packages
   - Standard dependency management
   - Semantic versioning

---

## Phase 1: Git Submodules (Immediate)

### Architecture

**Strategy:** Use Git submodules to link frameworks as dependencies.

**Structure:**
```
project/
├── .gitmodules
├── frameworks/
│   ├── ai-dev-kit/          # Git submodule
│   │   └── packages/frameworks/
│   │       ├── numbering & versioning/
│   │       ├── workflow mgt/
│   │       └── kanban/
│   └── .git/                   # Submodule metadata
```

### Installation

```bash
# Add framework as submodule
git submodule add https://github.com/earlution/ai-dev-kit.git frameworks/ai-dev-kit
cd frameworks/ai-dev-kit
git checkout v2.0.0  # Pin to specific version
```

### Updates

```bash
# Update to latest version
cd frameworks/ai-dev-kit
git fetch
git checkout v2.1.0  # Update to new version
cd ../..
git add frameworks/ai-dev-kit
git commit -m "Update ai-dev-kit to v2.1.0"
```

### Automated Update Script

```bash
#!/bin/bash
# update-frameworks.sh
cd frameworks/ai-dev-kit
git fetch
LATEST=$(git tag -l "v*" | sort -V | tail -1)
git checkout $LATEST
cd ../..
git add frameworks/ai-dev-kit
git commit -m "Auto-update ai-dev-kit to $LATEST"
```

**Pros:**
- ✅ Built into Git (no external tools)
- ✅ Versioned via Git tags
- ✅ Works with any Git repository
- ✅ No package registry needed

**Cons:**
- ⚠️ Requires Git knowledge
- ⚠️ Manual update commands
- ⚠️ Merge conflicts possible

---

## Phase 2: CLI Tool (Short-term)

### Architecture

**Strategy:** Build `ai-dev-kit` CLI tool that manages frameworks across multiple backends.

**CLI Commands:**
```bash
# Install framework
ai-dev-kit install numbering-versioning@2.0.0

# Update framework
ai-dev-kit update numbering-versioning

# Check for updates
ai-dev-kit check

# Show status
ai-dev-kit status

# List available frameworks
ai-dev-kit list
```

### Implementation

**Tool Structure:**
```
ai-dev-kit/
├── cli/
│   ├── __init__.py
│   ├── commands/
│   │   ├── install.py
│   │   ├── update.py
│   │   ├── check.py
│   │   └── status.py
│   ├── backends/
│   │   ├── git_submodule.py
│   │   ├── git_subtree.py
│   │   └── package_manager.py
│   └── config.py
├── setup.py
└── README.md
```

**Backend Abstraction:**
- CLI tool abstracts dependency backend
- Supports Git submodules, subtrees, and package managers
- Backend chosen based on project configuration

**Configuration:**
```yaml
# .ai-dev-kit.yaml
frameworks:
  numbering-versioning:
    version: "2.0.0"
    backend: "git-submodule"
    path: "frameworks/ai-dev-kit/packages/frameworks/numbering & versioning"
  workflow-mgt:
    version: "2.0.0"
    backend: "git-submodule"
    path: "frameworks/ai-dev-kit/packages/frameworks/workflow mgt"
```

**Pros:**
- ✅ Unified interface for all dependency types
- ✅ Automated updates
- ✅ Version pinning
- ✅ Multiple backend support

**Cons:**
- ⚠️ Requires CLI tool installation
- ⚠️ Additional dependency

---

## Phase 3: Package Managers (Future)

### Architecture

**Strategy:** Publish frameworks as packages to npm/pip/pypi.

**npm Package:**
```json
{
  "name": "@ai-dev-kit/numbering-versioning",
  "version": "2.0.0",
  "description": "Numbering and versioning framework",
  "main": "index.js",
  "files": [
    "README.md",
    "PACKAGE_OVERVIEW.md",
    "IMPLEMENTATION_GUIDE.md",
    "templates/",
    "policies/"
  ]
}
```

**Installation:**
```bash
npm install @ai-dev-kit/numbering-versioning@2.0.0
```

**Updates:**
```bash
npm update @ai-dev-kit/numbering-versioning
```

**Pros:**
- ✅ Standard dependency management
- ✅ Semantic versioning
- ✅ Auto-update via package managers
- ✅ Version pinning in package.json

**Cons:**
- ⚠️ Requires package registry
- ⚠️ Frameworks are mostly docs (not code)
- ⚠️ Need to package appropriately

---

## Framework Versioning Strategy

### Semantic Versioning

Frameworks use **Semantic Versioning (SemVer)** for releases:

- **MAJOR** (2.0.0): Breaking changes, incompatible API changes
- **MINOR** (2.1.0): New features, backward compatible
- **PATCH** (2.1.1): Bug fixes, backward compatible

### Git Tagging

Frameworks are tagged in Git with version numbers:

```bash
# Tag framework release
git tag -a numbering-versioning-v2.0.0 -m "Release numbering-versioning v2.0.0"
git push origin numbering-versioning-v2.0.0

# Tag all frameworks in monorepo
git tag -a ai-dev-kit-v2.0.0 -m "Release ai-dev-kit v2.0.0"
```

### Version File

Each framework includes a version file:

```python
# packages/frameworks/numbering & versioning/VERSION
FRAMEWORK_NAME = "numbering-versioning"
FRAMEWORK_VERSION = "2.0.0"
FRAMEWORK_SEMVER = "2.0.0"
```

---

## Migration Path

### From Copy-Paste to Dependencies

**Step 1: Install as Dependency**
```bash
# Using Git submodule
git submodule add https://github.com/earlution/ai-dev-kit.git frameworks/ai-dev-kit
cd frameworks/ai-dev-kit
git checkout numbering-versioning-v2.0.0
```

**Step 2: Update Project References**
- Update paths in project configs
- Update documentation references
- Test framework integration

**Step 3: Remove Old Copy**
```bash
# Remove old copy-paste version
rm -rf packages/frameworks/numbering\ \&\ versioning
```

**Step 4: Update Workflows**
- Update CI/CD to handle submodules
- Update documentation
- Train team on new dependency model

---

## Compatibility and Backward Compatibility

### Compatibility Policy

- **MAJOR versions:** Breaking changes, require migration
- **MINOR versions:** Backward compatible, safe to update
- **PATCH versions:** Bug fixes, always safe to update

### Migration Guides

Each MAJOR version release includes:
- Migration guide
- Breaking changes documentation
- Automated migration scripts (where possible)

---

## Implementation Roadmap

### Phase 1: Git Submodules (Epic 6, Story 1)
- ✅ Design architecture (this document)
- [ ] Implement Git submodule support
- [ ] Create update scripts
- [ ] Document Git submodule workflow

### Phase 2: CLI Tool (Epic 6, Story 2)
- [ ] Design CLI tool architecture
- [ ] Implement CLI tool
- [ ] Support Git submodule backend
- [ ] Support Git subtree backend
- [ ] Create CLI documentation

### Phase 3: Package Managers (Future)
- [ ] Design package structure
- [ ] Publish to npm/pip
- [ ] Create package documentation
- [ ] Support package manager backend in CLI

---

## References

- **Epic 6:** `docs/project-management/kanban/epics/Epic-6/Epic-6.md`
- **Story 1:** `docs/project-management/kanban/epics/Epic-6/Story-001-framework-version-management.md`
- **Story 2:** `docs/project-management/kanban/epics/Epic-6/Story-002-framework-update-and-migration.md`
- **Git Submodules:** https://git-scm.com/book/en/v2/Git-Tools-Submodules
- **Semantic Versioning:** https://semver.org/

---

## Decision Record

**Decision:** Adopt hybrid dependency architecture supporting Git submodules, CLI tool, and package managers.

**Rationale:**
- Provides flexibility for different project needs
- Enables gradual migration from copy-paste model
- Supports multiple dependency backends
- Allows projects to choose appropriate strategy

**Alternatives Considered:**
- Package managers only: Too restrictive, requires registry
- Git submodules only: Too manual, lacks automation
- CLI tool only: Too complex for simple use cases

**Status:** Approved for implementation in Epic 6.

