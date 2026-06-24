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
| [REPOSITORY-DIRECTORY-AUDIT.md](REPOSITORY-DIRECTORY-AUDIT.md) | Whole-repo directory valuation matrix + wave plan (UXR-033 / E07:S01:T13) |
| [REPOSITORY-FILE-AUDIT.md](REPOSITORY-FILE-AUDIT.md) | Per-file valuation matrix within T13-scoped directories (UXR-034 / E07:S01:T14) |
| [REPOSITORY-FILE-AUDIT.csv](REPOSITORY-FILE-AUDIT.csv) | CSV export of file audit matrix (filter/sort in spreadsheet) |
| [repository-path-manifest.json](repository-path-manifest.json) | Machine-generated directory manifest for agents/CI (FR-140) |
| [repository-ia-mover-wave-checklist.md](repository-ia-mover-wave-checklist.md) | Pre-mover checklist (cartography sign-off + scoped IPW/IDW) |

## Release Automation Resources

| Document | Purpose |
|----------|---------|
| [Release Quick Reference](release-quick-reference.md) | One-page command summaries for common release scenarios |
| [Release Checklist Templates](release-checklist-templates.md) | Printable pre/post release checklists |
| [Release Configuration Examples](release-configuration-examples.md) | Sample rw-config.yaml files for different scenarios |
| [Release Integration Guides](release-integration-guides.md) | GitHub Actions and CI/CD pipeline integration examples |

## See also

- [UXR-033](../kanban/fbu/UXR-033-comprehensive-repository-directory-structure-audit.md)
- [REPOSITORY-DIRECTORY-AUDIT.md](REPOSITORY-DIRECTORY-AUDIT.md) — **primary investigation deliverable (E07:S01:T13)**
- [REPOSITORY-FILE-AUDIT.md](REPOSITORY-FILE-AUDIT.md) — **paired file-level investigation deliverable (E07:S01:T14)**
- Framework scripts: `packages/frameworks/workflow-mgt/scripts/` (build_package.py, upload_all_packages.py, etc.)
- Release Workflow documentation: `packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/`

## 🚨 Critical Policy

**NEVER use manual git commit/push commands!** Always use Release Workflow (RW) automation for all release operations.

- **Policy:** "No manual commit/push" - use RW automation
- **Command:** `RW` (triggers full 17-step release workflow)
- **Documentation:** See [Release Runbook](release-runbook.md) for complete procedures
