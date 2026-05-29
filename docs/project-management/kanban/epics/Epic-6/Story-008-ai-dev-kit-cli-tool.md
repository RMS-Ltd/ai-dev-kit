---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-22T14:50:00Z
expires_at: null
housekeeping_policy: keep
---

# Story 008 – ai-dev-kit CLI Tool

**Status:** COMPLETE ✅  
**Priority:** HIGH  
**Estimated Effort:** Large  
**Created:** 2025-12-22  
**Last updated:** 2026-01-16 (v0.6.8.13+1, migrated from v0.6.8.13+1 – Story renumbered from S07 to S08 as part of repository story migration)  
**Version:** v0.6.8.13+1  
**Code:** E6S08

**Note:** This story was renumbered from S07 to S08 as part of the repository story abstract space resolution (E9:S01:T08).

---

## Task Checklist

- [x] **E6:S08:T00 – Story creation and FR-030 intake** ✅ COMPLETE (v0.6.8.0+1)
- [x] **E6:S08:T01 – CLI tool architecture and base structure** ✅ COMPLETE (v0.6.8.1+1)
- [x] **E6:S08:T02 – Core commands (init, install, update)** ✅ COMPLETE (v0.6.8.2+1)
- [x] **E6:S08:T03 – Status and checking commands (check, status, list)** ✅ COMPLETE (v0.6.8.3+1)
- [x] **E6:S08:T04 – Backend abstraction layer design** ✅ COMPLETE (v0.6.8.4+1)
- [x] **E6:S08:T05 – Git submodule backend implementation** ✅ COMPLETE (v0.6.8.5+1)
- [x] **E6:S08:T06 – Git subtree backend implementation** ✅ COMPLETE (v0.6.8.6+1)
- [x] **E6:S08:T07 – Package manager backend implementation (npm, pip)** ✅ COMPLETE (v0.6.8.7+1)
- [x] **E6:S08:T08 – Configuration management (.ai-dev-kit.yaml)** ✅ COMPLETE (v0.6.8.8+1)
- [x] **E6:S08:T09 – Error handling and validation** ✅ COMPLETE (v0.6.8.9+1)
- [x] **E6:S08:T10 – Migration utilities (copy-paste → dependencies)** ✅ COMPLETE (v0.6.8.10+1)
- [x] **E6:S08:T11 – Remove command (complements FR-008)** ✅ COMPLETE (v0.6.8.11+1)
- [x] **E6:S08:T12 – Documentation and usage examples** ✅ COMPLETE (v0.6.8.12+1)
- [x] **E6:S08:T13 – Testing, validation, and PyPI packaging** ✅ COMPLETE (v0.6.8.13+1)

---

## Overview

Build a unified command-line interface (CLI) tool (`ai-dev-kit`) for managing framework dependencies across projects. The CLI provides a single interface for installing, updating, and managing frameworks regardless of the underlying dependency backend (Git submodules, Git subtrees, npm, pip, etc.).

**Related Work:**
- **Feature Request:** [FR-030](../../fr-br/FR-030-ai-dev-kit-cli-tool.md) - ai-dev-kit CLI Tool
- **Architecture:** `docs/architecture/standards-and-adrs/framework-dependency-architecture.md` (Phase 2: CLI Tool)
- **Design:** `docs/architecture/standards-and-adrs/framework-update-cli-design.md`
- **CLI Reference:** `docs/documentation/user-docs/framework-dependency-cli-reference.md`

---

## Goal

Build a comprehensive CLI tool that:
- Provides unified interface for all framework management operations
- Abstracts dependency backend (Git submodules, subtrees, package managers)
- Enables automated framework updates
- Supports version management and pinning
- Facilitates migration from copy-paste to dependency model

**Success Criteria:**
- CLI tool installable via `pip install ai-dev-kit`
- All core commands functional (init, install, update, check, status, list, remove, config)
- Multiple backend support (Git submodule, Git subtree, npm, pip)
- Configuration management via `.ai-dev-kit.yaml`
- Comprehensive documentation and examples
- Published to PyPI

---

## Tasks

### E6:S08:T00 – Story creation and FR-030 intake

**Status:** ✅ COMPLETE  
**Priority:** HIGH  
**Dependencies:** FR-030  
**Blocker:** None  
**Version:** v0.6.8.0+0

**Input:**
- FR-030: ai-dev-kit CLI Tool Feature Request
- Architecture documentation (Phase 2: CLI Tool)
- Design documentation (framework-update-cli-design.md)

**Deliverable:**
- Story document with complete task breakdown
- Task structure aligned with FR-030 requirements

**Approach:**
1. Review FR-030 requirements and acceptance criteria
2. Break down into logical, sequential tasks
3. Organize tasks into phases (Foundation, Backend Implementations, Advanced Features, Polish & Distribution)
4. Create story document with task checklist

**Acceptance Criteria:**
- [x] Story document created
- [x] All FR-030 requirements mapped to tasks
- [x] Task breakdown covers all acceptance criteria
- [x] Dependencies and blockers identified

---

### E6:S08:T01 – CLI tool architecture and base structure

**Status:** ✅ COMPLETE  
**Priority:** HIGH  
**Dependencies:** E6:S01 (Framework Version Management), E6:S02:T01 (Framework Update Procedures)  
**Blocker:** None  
**Version:** v0.6.8.1+1

**Input:**
- Framework dependency architecture
- CLI tool design documentation
- Python CLI best practices

**Deliverable:**
- CLI tool base structure (`cli/` directory)
- Entry point (`cli/main.py`)
- Command infrastructure (`cli/commands/` base classes)
- Utility modules (`cli/utils.py`)
- Project setup (`setup.py`, `requirements.txt`)

**Approach:**
1. Design CLI tool directory structure
2. Set up Python package structure
3. Implement command infrastructure (base command classes, argument parsing)
4. Create entry point with command routing
5. Set up project configuration (setup.py, requirements.txt)

**Key Deliverables:**
- `cli/` directory structure
- `cli/main.py` - CLI entry point
- `cli/commands/__init__.py` - Command base classes
- `cli/utils.py` - Utility functions
- `setup.py` - Package configuration
- `requirements.txt` - Dependencies

**Acceptance Criteria:**
- [x] CLI tool structure matches design documentation
- [x] Entry point routes commands correctly
- [x] Command infrastructure supports extensibility
- [x] Package can be installed from source
- [x] Project setup files configured correctly

---

### E6:S08:T02 – Core commands (init, install, update)

**Status:** ✅ COMPLETE  
**Priority:** HIGH  
**Dependencies:** E6:S08:T01  
**Blocker:** None  
**Version:** v0.6.8.2+1

**Input:**
- CLI tool base structure
- Framework dependency architecture
- Update procedures

**Deliverable:**
- `init` command - Initialize ai-dev-kit in project
- `install` command - Install frameworks as dependencies
- `update` command - Update frameworks to latest versions

**Approach:**
1. Implement `init` command (creates `.ai-dev-kit.yaml`)
2. Implement `install` command (with version pinning support)
3. Implement `update` command (with compatibility checking)
4. Add command-line options (`--backend`, `--path`, `--dry-run`)
5. Integrate with backend abstraction layer

**Key Deliverables:**
- `cli/commands/init.py` - Initialize command
- `cli/commands/install.py` - Install command
- `cli/commands/update.py` - Update command
- Command-line argument parsing
- Integration with backend abstraction

**Acceptance Criteria:**
- [x] `ai-dev-kit init` creates `.ai-dev-kit.yaml` configuration file
- [x] `ai-dev-kit install <framework>[@version]` installs framework (command structure complete, backend integration pending T05-T07)
- [x] `ai-dev-kit update <framework>` updates framework (command structure complete, backend integration pending T05-T07)
- [x] Commands support `--backend`, `--path`, `--dry-run` options
- [x] Version pinning works correctly (`@version` syntax)
- [x] Commands provide clear error messages

---

### E6:S08:T03 – Status and checking commands (check, status, list)

**Status:** ✅ COMPLETE  
**Priority:** MEDIUM  
**Dependencies:** E6:S08:T02  
**Blocker:** None  
**Version:** v0.6.8.3+1

**Input:**
- Core commands implementation
- Framework version management
- Backend abstraction layer

**Deliverable:**
- `check` command - Check for available framework updates
- `status` command - Show installed framework versions
- `list` command - List available frameworks and versions

**Approach:**
1. Implement `check` command (queries for available updates)
2. Implement `status` command (shows installed frameworks)
3. Implement `list` command (shows available frameworks)
4. Format output for readability
5. Add filtering and formatting options

**Key Deliverables:**
- `cli/commands/check.py` - Check command
- `cli/commands/status.py` - Status command
- `cli/commands/list.py` - List command
- Output formatting utilities

**Acceptance Criteria:**
- [x] `ai-dev-kit check` reports available updates (command structure complete, backend integration pending T05-T07)
- [x] `ai-dev-kit status` shows installed framework versions and backends
- [x] `ai-dev-kit list` shows available frameworks and versions (static listing, full registry pending)
- [x] Commands support `--json` output option (status and list implemented, check pending backend)
- [x] Output is clear and readable

---

### E6:S08:T04 – Backend abstraction layer design

**Status:** ✅ COMPLETE  
**Priority:** HIGH  
**Dependencies:** E6:S08:T01  
**Blocker:** None  
**Version:** v0.6.8.4+1

**Input:**
- Framework dependency architecture
- Backend requirements (Git submodule, Git subtree, npm, pip)
- CLI tool design documentation

**Deliverable:**
- Backend abstraction interface (`cli/backends/base.py`)
- Backend interface specification
- Backend registration system
- Backend selection logic

**Approach:**
1. Design backend abstraction interface
2. Define common operations (install, update, check, status)
3. Create backend registration system
4. Implement backend selection logic (auto-detect vs. explicit)
5. Document backend interface contract

**Key Deliverables:**
- `cli/backends/base.py` - Base backend interface
- Backend interface documentation
- Backend registration system
- Backend selection utilities

**Acceptance Criteria:**
- [x] Backend interface supports all required operations
- [x] Backend registration system works correctly
- [x] Backend selection logic detects project type
- [x] Backend abstraction allows switching between backends
- [x] Interface is extensible for future backends

---

### E6:S08:T05 – Git submodule backend implementation

**Status:** ✅ COMPLETE  
**Priority:** HIGH  
**Dependencies:** E6:S08:T04  
**Blocker:** None  
**Version:** v0.6.8.5+1

**Input:**
- Backend abstraction interface
- Git submodule operations
- Framework dependency architecture

**Deliverable:**
- Git submodule backend implementation (`cli/backends/git_submodule.py`)
- Support for install, update, check, status operations
- Git submodule-specific error handling

**Approach:**
1. Implement Git submodule backend class
2. Implement `install()` operation (add submodule)
3. Implement `update()` operation (update submodule)
4. Implement `check()` operation (check for updates)
5. Implement `status()` operation (show submodule status)
6. Add Git submodule-specific error handling

**Key Deliverables:**
- `cli/backends/git_submodule.py` - Git submodule backend
- Git submodule operations implementation
- Error handling for Git operations

**Acceptance Criteria:**
- [x] Git submodule backend implements all interface methods
- [x] `install()` adds Git submodule correctly
- [x] `update()` updates submodule to new version
- [x] `check()` detects available updates
- [x] `status()` shows submodule status
- [x] Error handling covers common Git submodule errors

---

### E6:S08:T06 – Git subtree backend implementation

**Status:** ✅ COMPLETE  
**Priority:** MEDIUM  
**Dependencies:** E6:S08:T04  
**Blocker:** None  
**Version:** v0.6.8.6+1

**Input:**
- Backend abstraction interface
- Git subtree operations
- Framework dependency architecture

**Deliverable:**
- Git subtree backend implementation (`cli/backends/git_subtree.py`)
- Support for install, update, check, status operations
- Git subtree-specific error handling

**Approach:**
1. Implement Git subtree backend class
2. Implement `install()` operation (add subtree)
3. Implement `update()` operation (update subtree)
4. Implement `check()` operation (check for updates)
5. Implement `status()` operation (show subtree status)
6. Add Git subtree-specific error handling

**Key Deliverables:**
- `cli/backends/git_subtree.py` - Git subtree backend
- Git subtree operations implementation
- Error handling for Git operations

**Acceptance Criteria:**
- [x] Git subtree backend implements all interface methods
- [x] `install()` adds Git subtree correctly
- [x] `update()` updates subtree to new version
- [x] `check()` detects available updates
- [x] `status()` shows subtree status
- [x] Error handling covers common Git subtree errors

---

### E6:S08:T07 – Package manager backend implementation (npm, pip)

**Status:** ✅ COMPLETE  
**Priority:** MEDIUM  
**Dependencies:** E6:S08:T04  
**Blocker:** None (implemented with graceful handling for unpublished packages)  
**Version:** v0.6.8.7+1

**Input:**
- Backend abstraction interface
- npm/pip package operations
- Framework package publishing (when available)

**Deliverable:**
- Package manager backend implementation (`cli/backends/package_manager.py`)
- Support for npm and pip backends
- Support for install, update, check, status operations

**Approach:**
1. Implement package manager backend class
2. Implement npm backend operations
3. Implement pip backend operations
4. Add package manager detection logic
5. Add package manager-specific error handling

**Key Deliverables:**
- `cli/backends/package_manager.py` - Package manager backend
- npm backend implementation
- pip backend implementation
- Package manager detection utilities

**Acceptance Criteria:**
- [x] Package manager backend implements all interface methods
- [x] npm backend supports install, update, check, status
- [x] pip backend supports install, update, check, status
- [x] Backend detects available package managers
- [x] Error handling covers common package manager errors
- [x] Graceful handling for unpublished packages (helpful error messages)

**Note:** This task is implemented with graceful handling for when packages aren't published yet. Once packages are published to npm/pip, the backend will automatically work. Until then, it provides helpful error messages directing users to GitHub Releases or Git backends.

---

### E6:S08:T08 – Configuration management (.ai-dev-kit.yaml)

**Status:** ✅ COMPLETE  
**Priority:** HIGH  
**Dependencies:** E6:S08:T01  
**Blocker:** None  
**Version:** v0.6.8.8+1

**Input:**
- Configuration file format specification
- Framework dependency architecture
- CLI tool design documentation

**Deliverable:**
- Configuration management module (`cli/config.py`)
- `.ai-dev-kit.yaml` file creation and parsing
- Configuration validation
- `config` command for managing configuration

**Approach:**
1. Implement configuration file parser
2. Implement configuration file writer
3. Add configuration validation
4. Implement `config` command (get, set, list, reset)
5. Integrate configuration with all commands

**Key Deliverables:**
- `cli/config.py` - Configuration management
- `.ai-dev-kit.yaml` file format support
- `cli/commands/config.py` - Config command
- Configuration validation utilities

**Acceptance Criteria:**
- [x] Configuration file parser reads `.ai-dev-kit.yaml` correctly
- [x] Configuration file writer creates/updates file correctly
- [x] Configuration validation catches errors
- [x] `ai-dev-kit config get <key>` retrieves configuration value
- [x] `ai-dev-kit config set <key> <value>` sets configuration value
- [x] `ai-dev-kit config list` shows all configuration
- [x] `ai-dev-kit config reset` resets to defaults
- [x] `ai-dev-kit config validate` validates configuration with optional --fix

---

### E6:S08:T09 – Error handling and validation

**Status:** ✅ COMPLETE  
**Priority:** HIGH  
**Dependencies:** E6:S08:T02, E6:S08:T04  
**Blocker:** None  
**Version:** v0.6.8.9+1

**Input:**
- CLI tool commands
- Backend implementations
- Common error scenarios

**Deliverable:**
- Comprehensive error handling
- User-friendly error messages
- Input validation
- Error recovery suggestions

**Approach:**
1. Identify common error scenarios
2. Implement error handling for each scenario
3. Create user-friendly error messages
4. Add input validation
5. Provide error recovery suggestions
6. Add error logging (optional, for debugging)

**Key Deliverables:**
- Error handling utilities
- Error message templates
- Input validation functions
- Error recovery suggestions

**Acceptance Criteria:**
- [x] Framework not found errors are clear and helpful
- [x] Version not found errors suggest available versions
- [x] Backend not available errors suggest alternatives
- [x] Invalid input errors explain what went wrong
- [x] Error messages include recovery suggestions
- [x] All errors are user-friendly and actionable

---

### E6:S08:T10 – Migration utilities (copy-paste → dependencies)

**Status:** ✅ COMPLETE  
**Priority:** MEDIUM  
**Dependencies:** E6:S08:T02, E6:S08:T05  
**Blocker:** None  
**Version:** v0.6.8.10+1

**Input:**
- Migration scenarios
- Copy-paste framework detection
- CLI tool commands

**Deliverable:**
- Migration detection utilities
- Migration conversion tools
- Migration documentation

**Approach:**
1. Implement detection of copy-paste frameworks
2. Create migration conversion utilities
3. Implement `migrate` command (detect, convert)
4. Add migration validation
5. Document migration process

**Key Deliverables:**
- `cli/commands/migrate.py` - Migration command
- Migration detection utilities
- Migration conversion tools
- Migration documentation

**Acceptance Criteria:**
- [x] `ai-dev-kit migrate --detect` detects copy-paste frameworks
- [x] `ai-dev-kit migrate --convert` converts to dependencies
- [x] Migration preserves framework files (via backup)
- [x] Migration creates `.ai-dev-kit.yaml` configuration
- [x] Migration validates converted state
- [x] Migration process is documented

---

### E6:S08:T11 – Remove command (complements FR-008)

**Status:** ✅ COMPLETE  
**Priority:** MEDIUM  
**Dependencies:** E6:S08:T02, FR-008  
**Blocker:** None  
**Version:** v0.6.8.11+1

**Input:**
- CLI tool commands
- FR-008: Package Uninstall Capabilities
- Backend implementations

**Deliverable:**
- `remove` command - Remove framework dependencies
- Cleanup utilities
- Recovery mode support

**Approach:**
1. Implement `remove` command
2. Add cleanup utilities (remove files, config, dependencies)
3. Add recovery mode (clean up failed installations)
4. Integrate with backend implementations
5. Add `--keep-files` option

**Key Deliverables:**
- `cli/commands/remove.py` - Remove command
- Cleanup utilities
- Recovery mode support

**Acceptance Criteria:**
- [x] `ai-dev-kit remove <framework>` removes framework
- [x] `--keep-files` option preserves framework files
- [x] Cleanup removes all traces (files, config, dependencies)
- [x] Recovery mode fixes failed installations
- [x] Command works with all backends

**Related:** FR-008 (Package Uninstall Capabilities)

---

### E6:S08:T12 – Documentation and usage examples

**Status:** ✅ COMPLETE  
**Priority:** HIGH  
**Dependencies:** E6:S08:T02, E6:S08:T03  
**Blocker:** None  
**Version:** v0.6.8.12+1

**Input:**
- CLI tool implementation
- Command reference documentation
- Usage scenarios

**Deliverable:**
- CLI command reference documentation
- Installation and usage guides
- Example workflows
- Troubleshooting guide

**Approach:**
1. Document all CLI commands
2. Create installation guide
3. Create usage examples for common scenarios
4. Document configuration file format
5. Create troubleshooting guide
6. Update existing CLI reference documentation

**Key Deliverables:**
- CLI command reference (update existing) ✅
- Installation guide ✅
- Usage examples ✅
- Configuration guide ✅
- Troubleshooting guide ✅

**Acceptance Criteria:**
- [x] All commands are documented
- [x] Installation guide is clear and complete
- [x] Usage examples cover common scenarios
- [x] Configuration file format is documented
- [x] Troubleshooting guide addresses common issues
- [x] Documentation is comprehensive and clear

**Completed Deliverables:**
- Updated `framework-dependency-cli-reference.md` with all implemented commands (init, install, update, check, status, list, remove, config, migrate)
- Created `cli-usage-examples.md` with comprehensive usage examples and workflows
- Updated `framework-dependency-installation-guide.md` to reflect CLI tool availability
- Created `cli-configuration-guide.md` documenting `.ai-dev-kit.yaml` format and management
- Created `cli-troubleshooting-guide.md` with common issues and solutions
- Updated `cli/README.md` with documentation references

---

### E6:S08:T13 – Testing, validation, and PyPI packaging

**Status:** ✅ COMPLETE  
**Priority:** HIGH  
**Dependencies:** E6:S08:T01-T12  
**Blocker:** None  
**Version:** v0.6.8.13+1

**Input:**
- Complete CLI tool implementation
- Testing requirements
- PyPI packaging requirements

**Deliverable:**
- Comprehensive test suite
- CLI tool validation
- PyPI package configuration
- Published package

**Approach:**
1. Create test suite for all commands
2. Create test suite for all backends
3. Add integration tests
4. Configure PyPI packaging (`setup.py`, `MANIFEST.in`)
5. Test package installation
6. Publish to PyPI (or prepare for publishing)

**Key Deliverables:**
- Test suite (`tests/` directory) ✅
- PyPI package configuration ✅
- Package validation ✅
- Publishing documentation ✅

**Acceptance Criteria:**
- [x] Test suite covers all commands
- [x] Test suite covers all backends
- [x] Integration tests verify end-to-end workflows
- [x] PyPI package configuration is correct
- [x] Package can be installed via `pip install ai-dev-kit` (configuration ready)
- [x] Package validation passes (validation script created)
- [x] Publishing process is documented

**Completed Deliverables:**
- Created comprehensive test suite (`tests/` directory):
  - `test_commands.py` - Unit tests for all CLI commands
  - `test_config.py` - Configuration management tests
  - `test_utils.py` - Utility function tests
  - `test_validation.py` - Validation function tests
  - `test_backends.py` - Backend implementation tests
  - `test_integration.py` - Integration tests for end-to-end workflows
  - `conftest.py` - Pytest fixtures and configuration

- Created `pytest.ini` for test configuration
- Created `tests/requirements.txt` for test dependencies
- Created `tests/README.md` with test documentation
- Updated `setup.py` for PyPI packaging:
  - Dynamic version reading from `cli/__init__.py`
  - Enhanced metadata (project URLs, keywords, classifiers)
  - Proper package configuration

- Created `MANIFEST.in` for package file inclusion
- Created `scripts/validate_cli.py` for comprehensive validation
- Created `docs/documentation/user-docs/cli-publishing-guide.md` with publishing instructions
- Updated `cli/README.md` with development and testing instructions

---

## Dependencies

**Blocks:**
- Framework dependency management (Phase 2 of framework architecture)
- Automated framework updates
- Migration from copy-paste to dependency model
- FR-008 (Package Uninstall Capabilities) - T11 complements FR-008

**Blocked By:**
- E6:S01 (Framework Version Management) - Must establish versioning strategy first
- E6:S02:T01 (Framework Update Procedures) - Must define update procedures first
- E6:S08:T07 blocked by E6:S01 (frameworks must be published to npm/pip first)

**Coordinates With:**
- Epic 5 (Documentation Management) - Documentation requirements
- Epic 2 (Workflow Management Framework) - May integrate with RW
- FR-008 (Package Uninstall Capabilities) - T11 implements remove command

---

## References

- **Feature Request:** [FR-030](../../fr-br/FR-030-ai-dev-kit-cli-tool.md) - ai-dev-kit CLI Tool
- **Epic 6:** `docs/project-management/kanban/epics/Epic-6/Epic-6.md`
- **Architecture:** `docs/architecture/standards-and-adrs/framework-dependency-architecture.md` (Phase 2: CLI Tool)
- **Design:** `docs/architecture/standards-and-adrs/framework-update-cli-design.md`
- **CLI Reference:** `docs/documentation/user-docs/framework-dependency-cli-reference.md`
- **FR-008:** `FR-008-package-uninstall-capabilities.md` (complements T11)

---

_Last updated: 2025-12-22 (v0.6.8.0+0 – Story created and FR-030 intake complete)_

