# Detailed Changelog — v0.5.9.11+3

**Release Date:** 2026-04-19 22:30:00 UTC
**Internal Version:** v0.5.9.11+3
**SemVer:** v0.4.757+3
**Epic / Story / Task:** E5 / S09 / T11

## Overview

**RW** with **`--art`** for **E5:S09:T11**: **Wave 2** (**BR-068**) — corpus-wide Markdown / MDX fixes so **`cd portal && npm run build`** exits **0** with strict link checks: corrected Kanban/story/task relative depths, **`fr-br`** paths, ICW/IPW references, Epic-6 story task links, ADR-003 **`docs/`** traversal, **`specification-and-planning-artifacts-policy`** MDX `{placeholder}` rendering, and Strategy A GitHub URLs where the docs plugin cannot resolve repo-root paths (`docs/` tree, `.cursorrules`, `user-docs/` directory).

## Changes

- **`docs/`**: Wide link repairs (Epic-2 checklist story filenames, Story-006/007 task paths, **`implementation-cycles`** depths from **`Story-001`** tasks, **`BR-068`/`FR-070`/`FR-042`** targets, **`FR-075`/`FR-080`** architecture paths, **`BR-067`** FR-020 wiring).
- **`docs/architecture/standards-and-adrs/specification-and-planning-artifacts-policy.md`**: Inline-code task id placeholder to avoid MDX **`epic is not defined`** at SSG.
- **`docs/implementation-cycles/IPW-E5S09T11-*.md`**, **`IPW-E6S07T103-*.md`**: Resolve broken-link pass (`docs/` tree URL; **`.cursorrules`** blob; FR references).
- **`scripts/fix_md_external_links_br068.py`**: Automation for repo-root targets (prior run + script retained for hygiene).

## Verification

- `cd portal && npm run build` — exit **0**
- `validate_branch_context.py --strict --requested E5:S09:T11 --art`
- `validate_rw_task_complete.py --requested E5:S09:T11`
- `validate_rw_task_intent.py --requested E5:S09:T11 --art`
- `validate_version_bump.py --strict --requested E5:S09:T11 --art`
