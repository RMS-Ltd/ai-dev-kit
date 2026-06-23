---
name: adk-version-bump
description: ADK version bump semantics (RC.EPIC.STORY.TASK+BUILD) within RW / governance context.
origin: ai-dev-kit
---

# adk-version-bump

Portable ADK governance skill for optional ECC harness integration ([FR-098](../../../../../docs/kanban/fbu/FR-098-ecc-optional-harness-layer-integration.md)). This file summarizes **intent and pointers**; it does **not** replace `.cursorrules` or repository validators.

## Canonical execution guide

Primary reference: [`release-workflow-agent-execution.md`](../../KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md)

## Git / RW boundary

**Commits and local tags are RW-only (UXR-024).** Default RW does not push; use operator batch push or `RW --push`. Do not run `git commit` outside RW. See `.cursorrules` / cheatsheet §2.

## Wiring

- Pack root / bridge `adk_skill_pack_path`: `packages/frameworks/workflow-mgt/skills/`
- Optional bridge template: [`ecc-adk-bridge.yaml.template`](../../config/ecc-adk-bridge.yaml.template)