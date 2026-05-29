# Maintainer Runbooks

Operational guides for building and publishing framework packages. **Not for adopters** — these are for ai-dev-kit maintainers and CI.

All commands assume you are in the **project root**.

## Guides

| Document | Purpose |
|----------|---------|
| [Release Runbook](release-runbook.md) | **NEW** Comprehensive release procedures with exact commands for both registry and task-touch SemVer modes |
| [BUILD_AND_UPLOAD.md](BUILD_AND_UPLOAD.md) | End-to-end: build → tag → upload to GitHub Releases |
| [BUILD_PACKAGES.md](BUILD_PACKAGES.md) | Build quick start and individual package commands |
| [BUILD_PACKAGES_COMMANDS.md](BUILD_PACKAGES_COMMANDS.md) | Copy-paste command reference |
| [UPLOAD_PACKAGES.md](UPLOAD_PACKAGES.md) | Upload to GitHub Releases (prereqs, scripts, troubleshooting) |

## Release Automation Resources

| Document | Purpose |
|----------|---------|
| [Release Quick Reference](release-quick-reference.md) | One-page command summaries for common release scenarios |
| [Release Checklist Templates](release-checklist-templates.md) | Printable pre/post release checklists |
| [Release Configuration Examples](release-configuration-examples.md) | Sample rw-config.yaml files for different scenarios |
| [Release Integration Guides](release-integration-guides.md) | GitHub Actions and CI/CD pipeline integration examples |

## See also

- [Phase 3 package distribution plan](../analysis/phase3-package-distribution-plan.md)
- Framework scripts: `packages/frameworks/workflow mgt/scripts/` (build_package.py, upload_all_packages.py, etc.)
- Release Workflow documentation: `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/`

## 🚨 Critical Policy

**NEVER use manual git commit/push commands!** Always use Release Workflow (RW) automation for all release operations.

- **Policy:** "No manual commit/push" - use RW automation
- **Command:** `RW` (triggers full 17-step release workflow)
- **Documentation:** See [Release Runbook](release-runbook.md) for complete procedures
