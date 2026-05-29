---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-22T14:35:00Z
expires_at: null
housekeeping_policy: keep
---

# Feature Request: ai-dev-kit CLI Tool

**Type:** Feature Request (FR)  
**Submitted:** 2025-12-22  
**Submitted By:** AI Agent (ai-dev-kit)  
**Priority:** HIGH  
**Status:** ACCEPTED  
**GitHub Issue:** [TBD]  
**Version:** v0.6.7.13+1

---

## Summary

Build a unified command-line interface (CLI) tool (`ai-dev-kit`) for managing framework dependencies across projects. The CLI provides a single interface for installing, updating, and managing frameworks regardless of the underlying dependency backend (Git submodules, Git subtrees, npm, pip, etc.).

---

## Description

### What Functionality is Desired?

**CLI Tool Capabilities:**
1. **Framework Installation:** Install frameworks as dependencies with version pinning
2. **Framework Updates:** Update frameworks to latest or specific versions
3. **Update Checking:** Check for available framework updates
4. **Status Management:** Show status of installed frameworks
5. **Framework Listing:** List available frameworks and versions
6. **Framework Removal:** Remove framework dependencies (see FR-008 for uninstall details)
7. **Backend Abstraction:** Support multiple dependency backends (Git submodules, subtrees, npm, pip)
8. **Configuration Management:** Manage `.ai-dev-kit.yaml` configuration file
9. **Migration Support:** Migrate from copy-paste to dependency model

**Core CLI Commands:**
- `ai-dev-kit init` - Initialize ai-dev-kit in project
- `ai-dev-kit install <framework>[@version]` - Install framework as dependency
- `ai-dev-kit update <framework>` - Update framework to latest version
- `ai-dev-kit check` - Check for available framework updates
- `ai-dev-kit status` - Show installed framework versions
- `ai-dev-kit list` - List available frameworks
- `ai-dev-kit remove <framework>` - Remove framework dependency (see FR-008)
- `ai-dev-kit config` - Manage CLI configuration

### What Problem Does This Solve?

**Current Problems:**
- **No Unified Interface:** Users must learn different commands for Git submodules, npm, pip, etc.
- **Manual Management:** Framework updates require manual Git submodule updates or package manager commands
- **Inconsistent Experience:** Different backends have different workflows and commands
- **No Version Tracking:** Difficult to track which framework versions are installed
- **Migration Friction:** Hard to migrate from copy-paste to dependency model
- **Update Discovery:** No easy way to discover available framework updates
- **Configuration Scattered:** Framework configuration spread across multiple files

**Solution:**
- **Unified Interface:** Single CLI tool for all framework operations
- **Automated Updates:** Easy framework updates with version checking
- **Backend Abstraction:** Same commands work regardless of backend
- **Version Management:** Centralized version tracking in `.ai-dev-kit.yaml`
- **Easy Migration:** Automated migration from copy-paste to dependencies
- **Update Discovery:** Built-in update checking and notifications
- **Centralized Configuration:** Single configuration file for all frameworks

### What is the Use Case?

**Use Case A: Greenfield Project Setup**
A new project wants to use ai-dev-kit frameworks. User runs `ai-dev-kit install` commands to set up all frameworks with proper version pinning and configuration.

**Use Case B: Framework Updates**
A project has frameworks installed and wants to update them. User runs `ai-dev-kit check` to see available updates, then `ai-dev-kit update` to apply updates.

**Use Case C: Multi-Backend Support**
A project uses Git submodules but wants to switch to npm packages. CLI tool abstracts the backend, allowing easy migration.

**Use Case D: Version Management**
A project needs to track which framework versions are installed and ensure consistency across team members. CLI tool provides centralized version management.

**Use Case E: Migration from Copy-Paste**
A project currently uses copy-pasted frameworks and wants to migrate to dependency model. CLI tool provides migration utilities.

**Use Case F: Update Discovery**
A project wants to know when framework updates are available. CLI tool checks for updates and reports status.

### Who Would Benefit from This Feature?

**Primary Beneficiaries:**
- Developers setting up new projects with ai-dev-kit frameworks
- Teams managing framework dependencies across multiple projects
- Projects migrating from copy-paste to dependency model
- Users who want automated framework updates
- Projects using multiple dependency backends

**Secondary Beneficiaries:**
- Framework adoption (easier onboarding)
- Framework maintenance (easier updates)
- Framework credibility (professional tooling)
- User experience (unified interface)

---

## Requirements

### Functional Requirements

- [ ] **FR-1:** CLI tool can be installed via pip (`pip install ai-dev-kit`)
- [ ] **FR-2:** CLI tool provides `init` command to initialize project
- [ ] **FR-3:** CLI tool provides `install` command to install frameworks
- [ ] **FR-4:** CLI tool supports version pinning (`@version` syntax)
- [ ] **FR-5:** CLI tool provides `update` command to update frameworks
- [ ] **FR-6:** CLI tool provides `check` command to check for updates
- [ ] **FR-7:** CLI tool provides `status` command to show installed frameworks
- [ ] **FR-8:** CLI tool provides `list` command to list available frameworks
- [ ] **FR-9:** CLI tool supports multiple backends (Git submodule, Git subtree, npm, pip)
- [ ] **FR-10:** CLI tool creates and manages `.ai-dev-kit.yaml` configuration file
- [ ] **FR-11:** CLI tool detects project type and suggests appropriate backend
- [ ] **FR-12:** CLI tool supports `--dry-run` option for previewing changes
- [ ] **FR-13:** CLI tool supports `--backend` option to specify dependency backend
- [ ] **FR-14:** CLI tool supports `--path` option for custom installation paths
- [ ] **FR-15:** CLI tool provides error messages for common errors (framework not found, version not found, backend not available)

### Non-Functional Requirements

- [ ] **NFR-1:** CLI tool must be Python 3.8+ compatible
- [ ] **NFR-2:** CLI tool must support Unix-like systems (Linux, macOS) and Windows (via Git Bash/WSL)
- [ ] **NFR-3:** CLI tool must have clear, helpful error messages
- [ ] **NFR-4:** CLI tool must have comprehensive documentation
- [ ] **NFR-5:** CLI tool must be installable from PyPI
- [ ] **NFR-6:** CLI tool must support installation from source

### Backend Support Requirements

- [ ] **BE-1:** Git Submodule backend must support install, update, check, status operations
- [ ] **BE-2:** Git Subtree backend must support install, update, check, status operations
- [ ] **BE-3:** npm backend must support install, update, check, status operations (when available)
- [ ] **BE-4:** pip backend must support install, update, check, status operations (when available)
- [ ] **BE-5:** Backend abstraction must allow switching between backends

### Configuration Requirements

- [ ] **CFG-1:** CLI tool creates `.ai-dev-kit.yaml` configuration file
- [ ] **CFG-2:** Configuration file tracks framework versions and backends
- [ ] **CFG-3:** Configuration file supports default backend setting
- [ ] **CFG-4:** Configuration file supports per-framework backend override
- [ ] **CFG-5:** CLI tool provides `config` command for managing configuration

---

## Acceptance Criteria

- [ ] **AC-1:** CLI tool can be installed via `pip install ai-dev-kit`
- [ ] **AC-2:** `ai-dev-kit init` command creates `.ai-dev-kit.yaml` configuration file
- [ ] **AC-3:** `ai-dev-kit install <framework>[@version]` installs framework using appropriate backend
- [ ] **AC-4:** `ai-dev-kit update <framework>` updates framework to latest compatible version
- [ ] **AC-5:** `ai-dev-kit check` reports available updates for installed frameworks
- [ ] **AC-6:** `ai-dev-kit status` shows installed framework versions and backends
- [ ] **AC-7:** `ai-dev-kit list` shows available frameworks and versions
- [ ] **AC-8:** CLI tool supports Git submodule backend (install, update, check, status)
- [ ] **AC-9:** CLI tool supports Git subtree backend (install, update, check, status)
- [ ] **AC-10:** CLI tool detects project type and suggests appropriate backend
- [ ] **AC-11:** CLI tool provides clear error messages for common errors
- [ ] **AC-12:** CLI tool documentation is comprehensive and clear
- [ ] **AC-13:** CLI tool supports `--dry-run` option for previewing changes
- [ ] **AC-14:** CLI tool supports `--backend` option to specify dependency backend
- [ ] **AC-15:** CLI tool supports `--path` option for custom installation paths

---

## Implementation Details

### Tool Structure

```
ai-dev-kit/
├── cli/
│   ├── __init__.py
│   ├── main.py                 # CLI entry point
│   ├── commands/
│   │   ├── __init__.py
│   │   ├── install.py
│   │   ├── update.py
│   │   ├── check.py
│   │   ├── status.py
│   │   ├── list.py
│   │   ├── remove.py
│   │   └── config.py
│   ├── backends/
│   │   ├── __init__.py
│   │   ├── base.py             # Base backend interface
│   │   ├── git_submodule.py
│   │   ├── git_subtree.py
│   │   └── package_manager.py
│   ├── config.py               # Configuration management
│   └── utils.py                # Utility functions
├── setup.py
├── README.md
└── requirements.txt
```

### Configuration File Format

```yaml
# .ai-dev-kit.yaml
version: "1.0.0"
default_backend: "git-submodule"
frameworks:
  numbering-versioning:
    version: "2.0.0"
    backend: "git-submodule"
    path: "frameworks/ai-dev-kit/packages/frameworks/numbering & versioning"
    source: "https://github.com/earlution/ai-dev-kit.git"
    tag: "numbering-versioning-v2.0.0"
  workflow-mgt:
    version: "2.0.0"
    backend: "git-submodule"
    path: "frameworks/ai-dev-kit/packages/frameworks/workflow mgt"
    source: "https://github.com/earlution/ai-dev-kit.git"
    tag: "workflow-mgt-v2.0.0"
```

### Example Usage

```bash
# Initialize project
ai-dev-kit init

# Install frameworks
ai-dev-kit install numbering-versioning@2.0.0 workflow-mgt@2.0.0 kanban@1.0.0

# Check for updates
ai-dev-kit check

# Update frameworks
ai-dev-kit update --all

# Show status
ai-dev-kit status

# List available frameworks
ai-dev-kit list --versions
```

---

## Dependencies

**Blocks:**
- Framework dependency management (Phase 2 of framework architecture)
- Automated framework updates
- Migration from copy-paste to dependency model

**Blocked By:**
- E6:S01 (Framework Version Management) - Must establish versioning strategy first
- E6:S02:T01 (Framework Update Procedures) - Must define update procedures first

**Related Work:**
- **E6:S02:T04:** Build framework update CLI tool (implementation task)
- **FR-008:** Package Uninstall Capabilities (complements CLI tool with uninstall command)
- **Architecture Doc:** `docs/architecture/standards-and-adrs/framework-dependency-architecture.md` (Phase 2: CLI Tool)
- **Design Doc:** `docs/architecture/standards-and-adrs/framework-update-cli-design.md` (CLI tool design)

---

## Intake Decision

**Intake Status:** ACCEPTED  
**Intake Date:** 2025-12-22  
**Intake By:** AI Agent (ai-dev-kit)

**Decision Flow Results:**
- Story Match Found: Epic 6, Story 7 (E6:S07) - New Story created for CLI tool

**Assigned To:**
- Epic: Epic 6 (Framework Management and Maintenance)
- Story: Story 7 (ai-dev-kit CLI Tool) - E6:S07
- Tasks: T00 ✅ COMPLETE, T01-T13 ✅ COMPLETE (14 tasks total covering architecture, commands, backends, config, migration, testing, packaging - ALL COMPLETE)
- Version: v0.6.7.13+1 (T13: Testing, validation, and PyPI packaging complete - Story E6:S07 COMPLETE)

**Kanban Links:**
- Epic: [`epics/Epic-6/Epic-6.md`](../epics/Epic-6/Epic-6.md)
- Story: [`Story-007-adk-implementation-analysis-and-package-management.md`](../epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management.md)
- Tasks: E6:S07:T00-T13 (14 tasks covering complete CLI tool implementation)

---

## Notes

**Implementation Status:**
- Design complete (see `framework-update-cli-design.md`)
- Architecture defined (see `framework-dependency-architecture.md` Phase 2)
- Task created: E6:S02:T04
- Implementation pending (blocked by E6:S01 and E6:S02:T01)

**Related Documentation:**
- **CLI Reference:** `docs/documentation/user-docs/framework-dependency-cli-reference.md` - Complete CLI command reference
- **Architecture:** `docs/architecture/standards-and-adrs/framework-dependency-architecture.md` - Framework dependency architecture (Phase 2)
- **Design:** `docs/architecture/standards-and-adrs/framework-update-cli-design.md` - CLI tool design document

**Future Enhancements:**
- Migration tool for copy-paste to dependency conversion
- Update policies (auto, manual, scheduled)
- Dependency resolution
- Conflict resolution for updates
- Rollback to previous versions

---

## References

- **Epic 6:** `docs/project-management/kanban/epics/Epic-6/Epic-6.md`
- **Story 2:** `docs/project-management/kanban/epics/Epic-6/Story-002-framework-update-and-migration.md`
- **Task 4:** E6:S02:T04 (Build framework update CLI tool)
- **Architecture:** `docs/architecture/standards-and-adrs/framework-dependency-architecture.md`
- **Design:** `docs/architecture/standards-and-adrs/framework-update-cli-design.md`
- **CLI Reference:** `docs/documentation/user-docs/framework-dependency-cli-reference.md`
- **FR-008:** `FR-008-package-uninstall-capabilities.md` (complements CLI tool)

---

**Template Usage:**
- This FR follows the Kanban Framework FR template
- Comprehensive feature documentation with requirements and acceptance criteria
- Clear implementation details and usage examples
- Related work referenced

---

_This feature request is part of the Kanban Framework. See `packages/frameworks/kanban/` for complete framework documentation._

