# Changelog v0.2.3.9+3

**Release Date:** 2026-06-10 12:56:42 UTC
**Epic:** Epic 2 — Workflow Management Framework
**Story:** Story 3 — Additional Workflows & Examples
**Task:** Task 9 — Meta-workflow orchestration (MWF)
**Type:** Feature / documentation

## Summary

E02:S03:T09 — **Change implemented:** FR-124 meta-workflow orchestration (**MWF**): `mwf.md`, KB guide, workflow package, registry composite recipes, agent routing, cheatsheet §4c. SemVer **v0.4.1121+3**.

## Changes

### Added

- `.claude/commands/mwf.md`
- `packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/meta-workflow-agent-execution.md`
- `packages/frameworks/workflow-mgt/workflows/meta-workflow/` (mwf-workflow.yaml, mwf-config.yaml, README.md)

### Updated

- `workflow-registry.yaml` — meta-workflow entry + `composite_workflows.mwf.delivery`
- `CLAUDE.md`, `.cursorrules`, `AGENTS.md`, `project-agent-manifest.json` — MWF routing
- `docs/guides/workflow-initiation-cheatsheet.md` — §4c MWF + §7 sequences
- `greenfield-install` framework mirror (FR-110)
