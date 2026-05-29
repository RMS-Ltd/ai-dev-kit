# Detailed Changelog — v0.6.9.1+4

**Release Date:** 2026-04-19 15:59:01 UTC
**Internal Version:** v0.6.9.1+4
**SemVer:** v0.4.750+4
**Epic / Story / Task:** E6 / S09 / T01

## Overview

Full **RW** release for **E6:S09:T01** delivering Wave 2 orchestration artifacts: a greenfield install orchestrator script with default RW-first path, explicit override checkpoint, and updated installer documentation.

## Changes

- Added `packages/frameworks/workflow mgt/scripts/install_greenfield_path.py`:
  - thin wrapper around existing installers (no duplicated install logic)
  - default `rw-first` ordering with interactive checkpoint and override to `kanban-first`
  - `--non-interactive`, `--dry-run`, `--rw-mode`, `--kanban-mode`
- Updated `INSTALL_IN_YOUR_PROJECT.md` with Wave 2 hybrid orchestration usage and manual fallback commands.
- Updated `T01-greenfield-installation-process-fr080.md` progress traceability for Wave 2.

## Verification

- `python "packages/frameworks/workflow mgt/scripts/install_greenfield_path.py" --help`
- `validate_branch_context.py --strict --requested E6:S09:T01 --art`
- `validate_rw_task_complete.py --requested E6:S09:T01`
- `validate_rw_task_intent.py --requested E6:S09:T01 --art`
- `validate_version_bump.py --strict --requested E6:S09:T01 --art`
