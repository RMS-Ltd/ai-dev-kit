# Detailed Changelog — v0.5.9.11+2

**Release Date:** 2026-04-19 19:00:00 UTC
**Internal Version:** v0.5.9.11+2
**SemVer:** v0.4.756+2
**Epic / Story / Task:** E5 / S09 / T11

## Overview

**RW** with **`--art`** for **E5:S09:T11**: **Wave 1 (policy lock)** for **BR-068** — locked **Strategy A** (GitHub `blob` URLs + optional `docs/` stubs; rejects blanket B/C) in **[IPW-E5S09T11](../../implementation-cycles/IPW-E5S09T11-docusaurus-monorepo-markdown-links-br068.md)** §1.5; contributor rules in **`portal/README.md`** (BR-068 monorepo links section); triage **[docusaurus-corpus-triage-fr-067.md](../../maintenance/docusaurus-corpus-triage-fr-067.md)** failure-class row; **T11** Progress update. Corpus normalization (**Wave 2**) remains pending.

## Changes

- **`docs/implementation-cycles/IPW-E5S09T11-docusaurus-monorepo-markdown-links-br068.md`**: Wave 1 decisions + Wave 1 table marked delivered.
- **`portal/README.md`**: BR-068 / E5:S09:T11 — links outside `docs/` plugin (GitHub URLs, `%20`, stubs).
- **`docs/maintenance/docusaurus-corpus-triage-fr-067.md`**: New failure class for out-of-plugin relative links.
- **`T11-docusaurus-monorepo-markdown-link-resolution-br068.md`**: Progress + Last updated.

## Verification

- `validate_branch_context.py --strict`
- `validate_rw_task_complete.py --requested E5:S09:T11`
- `validate_rw_task_intent.py --requested E5:S09:T11 --art`
- `validate_version_bump.py --strict --requested E5:S09:T11 --art`
