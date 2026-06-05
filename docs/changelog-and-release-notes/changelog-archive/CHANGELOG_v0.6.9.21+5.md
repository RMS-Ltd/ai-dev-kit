# Detailed Changelog — v0.6.9.21+5

**Release Date:** 2026-06-05 10:35:30 UTC
**Internal Version:** v0.6.9.21+5
**SemVer:** v0.4.954+5
**Epic / Story / Task:** E6 / S09 / T21

## Overview

**RW** with **`--art`** for **E6:S09:T21**: **Wave 5 — sync hardening** — `sync_greenfield_install.py` uses **`git ls-files`** for source enumeration (Linux-safe index casing); file-at-a-time copy replaces `copytree`; drift **`--check`** uses git-index fingerprint; lean tree re-synced (1498 files); stray epic-21 task template pruned from `greenfield-install/`.

## Changes

### Attempted resolution

- **`scripts/sync_greenfield_install.py`:** `_git_ls_files`, `_source_relative_paths`, git-index `_tree_fingerprint`, explicit `copy2` per tracked path.
- **`greenfield-install/`:** Re-synced; **`FOOTPRINT.md`** updated (~7.93 MiB); removed erroneous `kanban/templates/tasks/epic-21/.../T07-*.md` from lean tree.
- **`T21` task doc:** Wave 5 progress; Strategy A evidence links for sync/CI paths.
- **`FR-110`:** Link hygiene (ADR-003 depth; INSTALL GitHub `blob` URLs).

## Verification

- `pytest scripts/test_sync_greenfield_install.py` — 5 passed
- `python scripts/sync_greenfield_install.py --check` — in sync
- `validate_branch_context.py --strict --requested E06:S09:T21 --art`
- `validate_rw_task_intent.py --requested E06:S09:T21 --art`
