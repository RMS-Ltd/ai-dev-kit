---
name: adk-implementation-planning
description: ADK Implementation Planning Workflow (IPW); IPP/ICW durable artifacts and task linkage.
origin: ai-dev-kit
---

# adk-implementation-planning

Portable ADK governance skill for optional ECC harness integration ([FR-098](../../../../../docs/project-management/kanban/fr-br/FR-098-ecc-optional-harness-layer-integration.md)). This file summarizes **intent and pointers**; it does **not** replace `.cursorrules` or repository validators.

## Canonical execution guide

Primary reference: [`implementation-planning-workflow-agent-execution.md`](../../KB/Documentation/Developer_Docs/vwmp/implementation-planning-workflow-agent-execution.md)

## Git / RW boundary

**Commits and pushes are RW-only.** Do not run `git commit` or `git push` outside the Release Workflow (`RW`). See `.cursorrules` / `CLAUDE.md` for mandatory gates (branch safety, RW task intent/completion validators).

## Wiring

- Pack root / bridge `adk_skill_pack_path`: `packages/frameworks/workflow mgt/skills/`
- Optional bridge template: [`ecc-adk-bridge.yaml.template`](../../config/ecc-adk-bridge.yaml.template)