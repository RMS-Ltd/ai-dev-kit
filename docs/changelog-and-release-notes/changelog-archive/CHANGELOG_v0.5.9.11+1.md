# Detailed Changelog — v0.5.9.11+1

**Release Date:** 2026-04-19 18:30:00 UTC
**Internal Version:** v0.5.9.11+1
**SemVer:** v0.4.755+1
**Epic / Story / Task:** E5 / S09 / T11

## Overview

**RW -k** with **`--art`** for **E5:S09:T11**: versioned intake for **BR-068** (Docusaurus strict MDX vs monorepo cross-root Markdown links / `portal` production build). Adds **T11** task doc, bidirectional wiring on **Story 009**, **`fr-br-uxr-board`** row, and establishes the release anchor for portal link-resolution work ahead of **`npm run build`** remediation.

## Changes

- **`BR-068-docusaurus-monorepo-markdown-links-break-strict-production-build.md`**: new bug report (strict links, out-of-`docs/` targets).
- **`T11-docusaurus-monorepo-markdown-link-resolution-br068.md`**: implementing task scope and acceptance alignment with BR-068.
- **`Story-009-docusaurus-documentation-portal.md`**: T11 checklist row; Related BRs table; Last updated note.
- **`fr-br-uxr-board.md`**: BR-068 prioritized row; Last Updated context.

## Verification

- `validate_branch_context.py --strict`
- `validate_rw_task_complete.py --requested E5:S09:T11 --mode rw-k`
- `validate_rw_task_intent.py --requested E5:S09:T11 --mode rw-k --art`
- `validate_version_bump.py --strict --requested E5:S09:T11 --art`
