# Detailed Changelog — v0.5.9.11+4

**Release Date:** 2026-04-19 23:45:00 UTC
**Internal Version:** v0.5.9.11+4
**SemVer:** v0.4.757+4
**Epic / Story / Task:** E5 / S09 / T11

## Overview

**RW** with **`--art`** for **E5:S09:T11**: **Wave 3 — Verification** (**IPW** §3): **TD1** production build strict green; **TD2–TD3** spot-check evidence recorded in **T11** Progress and **`docusaurus-corpus-triage-fr-067.md`** (INSTALL / `packages/` Strategy A samples; no strict-hook regression).

## Changes

- **`docs/implementation-cycles/IPW-E5S09T11-docusaurus-monorepo-markdown-links-br068.md`**: Wave 3 steps marked delivered.
- **`docs/project-management/kanban/epics/Epic-5/Story-009-docusaurus-documentation-portal/T11-docusaurus-monorepo-markdown-link-resolution-br068.md`**: Wave 3 Progress + version anchor.
- **`docs/maintenance/docusaurus-corpus-triage-fr-067.md`**: Wave 3 TD2/TD3 evidence subsection.

## Verification

- `cd portal && npm run build` — exit **0**
- `validate_branch_context.py --strict --requested E5:S09:T11 --art`
- `validate_rw_task_complete.py --requested E5:S09:T11`
- `validate_rw_task_intent.py --requested E5:S09:T11 --art`
- `validate_version_bump.py --strict --requested E5:S09:T11 --art`
