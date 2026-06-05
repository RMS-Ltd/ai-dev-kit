---
name: adk-release-workflow
description: ADK Release Workflow (RW); versioning, changelogs, Kanban Step 7, git via RW only.
origin: ai-dev-kit
---

# adk-release-workflow

Portable ADK governance skill for optional ECC harness integration ([FR-098](../../../../../docs/project-management/kanban/fr-br/FR-098-ecc-optional-harness-layer-integration.md)). This file summarizes **intent and pointers**; it does **not** replace `.cursorrules` or repository validators.

## Canonical execution guide

Primary reference: [`release-workflow-agent-execution.md`](../../KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md)

## Git / RW boundary (UXR-024)

**Commits and local tags are RW-only.** Default `RW` does **not** push — completes locally (`RW COMPLETE (local)`). Operator **batch-pushes** when ready, or use **`RW … --push`** for Step 12 + 12.5. Do not run `git commit` outside RW. See `.cursorrules` / cheatsheet §2.

## Wiring

- Pack root / bridge `adk_skill_pack_path`: `packages/frameworks/workflow-mgt/skills/`
- Optional bridge template: [`ecc-adk-bridge.yaml.template`](../../config/ecc-adk-bridge.yaml.template)