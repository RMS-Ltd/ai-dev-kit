# Detailed Changelog — v0.5.9.11+6

**Release Date:** 2026-06-05 10:31:19 UTC
**Internal Version:** v0.5.9.11+6
**SemVer:** v0.4.953+6
**Epic / Story / Task:** E5 / S09 / T11

## Overview

**RW** with **`--art`** for **E5:S09:T11**: **Wave 5 — Governance + regression guard** — canonical **IPP-E05S09T11**, repo-wide **`test_portal_br068_monorepo_links.py`** (publish-scope links must resolve inside `docs/`), Strategy A straggler repairs, legacy IPW deprecation stub, triage doc Wave 5 row.

## Changes

### Attempted resolution

- **CREATE** [`docs/implementation-cycles/IPP-E05S09T11-docusaurus-monorepo-markdown-link-resolution-br068.md`](../../implementation-cycles/IPP-E05S09T11-docusaurus-monorepo-markdown-link-resolution-br068.md) — full §1–§7 IPP (retroactive Waves 1–4 + Wave 5).
- **CREATE** [`tests/test_portal_br068_monorepo_links.py`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/tests/test_portal_br068_monorepo_links.py) — T1 resolves `[text](relative)` and fails when target leaves `docs/`; T2 cheatsheet Strategy A smoke.
- **UPDATE** T11 task doc — Wave 5 reopen/close wiring; fix mislinked `IPP-E4S19T03`; bidirectional IPP links.
- **UPDATE** legacy [`IPW-E5S09T11-*`](../../implementation-cycles/IPW-E5S09T11-docusaurus-monorepo-markdown-links-br068.md) — deprecation pointer to canonical IPP.
- **UPDATE** [`docusaurus-corpus-triage-fr-067.md`](../../maintenance/docusaurus-corpus-triage-fr-067.md) — Wave 5 automated guard row.
- **UPDATE** Strategy A link repairs: [`ultimate-canonical-workflow-structure.md`](../../architecture/standards-and-adrs/ultimate-canonical-workflow-structure.md), [`migration-plan-embedded-to-discrete-tasks.md`](../../project-management/kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs/migration-plan-embedded-to-discrete-tasks.md), [`IPP-E02S13T10`](../../implementation-cycles/IPP-E02S13T10-kanban-transform-consolidation-and-config-loader-unification.md).

## Verification

- `pytest tests/test_portal_br068_monorepo_links.py tests/test_portal_br090_faster_alignment.py` — green (T10 skipped)
- `validate_branch_context.py --strict --requested E05:S09:T11 --art`
- `validate_rw_task_complete.py --requested E05:S09:T11`
- `validate_rw_task_intent.py --requested E05:S09:T11 --art`
