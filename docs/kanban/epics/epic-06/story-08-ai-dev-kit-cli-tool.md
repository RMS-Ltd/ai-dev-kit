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

**Note:** This story was renumbered from S07 to S08 as part of the repository story abstract space resolution (E09:S01:T08).

---

## Task Checklist

- [x] **E06:S08:T00 – Story creation and FR-030 intake** ✅ COMPLETE (v0.6.8.0+1)
  - Task: [`T00-story-creation-and-fr-030-intake`](story-08-ai-dev-kit-cli-tool/T00-story-creation-and-fr-030-intake.md)
- [x] **E06:S08:T01 – CLI tool architecture and base structure** ✅ COMPLETE (v0.6.8.1+1)
  - Task: [`T01-cli-tool-architecture-and-base-structure`](story-08-ai-dev-kit-cli-tool/T01-cli-tool-architecture-and-base-structure.md)
- [x] **E06:S08:T02 – Core commands (init, install, update)** ✅ COMPLETE (v0.6.8.2+1)
  - Task: [`T02-core-commands-init-install-update`](story-08-ai-dev-kit-cli-tool/T02-core-commands-init-install-update.md)
- [x] **E06:S08:T03 – Status and checking commands (check, status, list)** ✅ COMPLETE (v0.6.8.3+1)
  - Task: [`T03-status-and-checking-commands-check-status-list`](story-08-ai-dev-kit-cli-tool/T03-status-and-checking-commands-check-status-list.md)
- [x] **E06:S08:T04 – Backend abstraction layer design** ✅ COMPLETE (v0.6.8.4+1)
  - Task: [`T04-backend-abstraction-layer-design`](story-08-ai-dev-kit-cli-tool/T04-backend-abstraction-layer-design.md)
- [x] **E06:S08:T05 – Git submodule backend implementation** ✅ COMPLETE (v0.6.8.5+1)
  - Task: [`T05-git-submodule-backend-implementation`](story-08-ai-dev-kit-cli-tool/T05-git-submodule-backend-implementation.md)
- [x] **E06:S08:T06 – Git subtree backend implementation** ✅ COMPLETE (v0.6.8.6+1)
  - Task: [`T06-git-subtree-backend-implementation`](story-08-ai-dev-kit-cli-tool/T06-git-subtree-backend-implementation.md)
- [x] **E06:S08:T07 – Package manager backend implementation (npm, pip)** ✅ COMPLETE (v0.6.8.7+1)
  - Task: [`T07-package-manager-backend-implementation-npm-pip`](story-08-ai-dev-kit-cli-tool/T07-package-manager-backend-implementation-npm-pip.md)
- [x] **E06:S08:T08 – Configuration management (.ai-dev-kit.yaml)** ✅ COMPLETE (v0.6.8.8+1)
  - Task: [`T08-configuration-management-ai-dev-kityaml`](story-08-ai-dev-kit-cli-tool/T08-configuration-management-ai-dev-kityaml.md)
- [x] **E06:S08:T09 – Error handling and validation** ✅ COMPLETE (v0.6.8.9+1)
  - Task: [`T09-error-handling-and-validation`](story-08-ai-dev-kit-cli-tool/T09-error-handling-and-validation.md)
- [x] **E06:S08:T10 – Migration utilities (copy-paste → dependencies)** ✅ COMPLETE (v0.6.8.10+1)
  - Task: [`T10-migration-utilities-copy-paste-dependencies`](story-08-ai-dev-kit-cli-tool/T10-migration-utilities-copy-paste-dependencies.md)
- [x] **E06:S08:T11 – Remove command (complements FR-008)** ✅ COMPLETE (v0.6.8.11+1)
  - Task: [`T11-remove-command-complements-fr-008`](story-08-ai-dev-kit-cli-tool/T11-remove-command-complements-fr-008.md)
- [x] **E06:S08:T12 – Documentation and usage examples** ✅ COMPLETE (v0.6.8.12+1)
  - Task: [`T12-documentation-and-usage-examples`](story-08-ai-dev-kit-cli-tool/T12-documentation-and-usage-examples.md)
- [x] **E06:S08:T13 – Testing, validation, and PyPI packaging** ✅ COMPLETE (v0.6.8.13+1)
  - Task: [`T13-testing-validation-and-pypi-packaging`](story-08-ai-dev-kit-cli-tool/T13-testing-validation-and-pypi-packaging.md)

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

## Dependencies

**Blocks:**
- Framework dependency management (Phase 2 of framework architecture)
- Automated framework updates
- Migration from copy-paste to dependency model
- FR-008 (Package Uninstall Capabilities) - T11 complements FR-008

**Blocked By:**
- E6:S01 (Framework Version Management) - Must establish versioning strategy first
- E06:S02:T01 (Framework Update Procedures) - Must define update procedures first
- E06:S08:T07 blocked by E6:S01 (frameworks must be published to npm/pip first)

**Coordinates With:**
- Epic 5 (Documentation Management) - Documentation requirements
- Epic 2 (Workflow Management Framework) - May integrate with RW
- FR-008 (Package Uninstall Capabilities) - T11 implements remove command

---

## References

- **Feature Request:** [FR-030](../../fr-br/FR-030-ai-dev-kit-cli-tool.md) - ai-dev-kit CLI Tool
- **Epic 6:** `docs/kanban/epics/epic-06/epic-06.md`
- **Architecture:** `docs/architecture/standards-and-adrs/framework-dependency-architecture.md` (Phase 2: CLI Tool)
- **Design:** `docs/architecture/standards-and-adrs/framework-update-cli-design.md`
- **CLI Reference:** `docs/documentation/user-docs/framework-dependency-cli-reference.md`
- **FR-008:** `FR-008-package-uninstall-capabilities.md` (complements T11)

---

_Last updated: 2025-12-22 (v0.6.8.0+0 – Story created and FR-030 intake complete)_

