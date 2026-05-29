# Detailed Changelog — v0.6.9.1+7

**Release Date:** 2026-04-19 16:45:09 UTC
**Internal Version:** v0.6.9.1+7
**SemVer:** v0.4.753+7
**Epic / Story / Task:** E6 / S09 / T01

## Overview

**RW** with **`--art`** for **E6:S09:T01**: completes **Wave 3** user-documentation distinction sweep—**Scope (greenfield vs brownfield)** blocks across remaining `docs/documentation/user-docs/` guides (FAQ, usage, update, troubleshooting, CLI docs, template enablement, install receipt reference, Apple platform setup, existing-project checklist) plus **`repo-structure-for-adopters.md`** adoption clarification; **`INSTALL_IN_YOUR_PROJECT.md`** notes consistent scope sections. Includes **IPW-E6S09T01** update: **documentation cadence** (parallel docs with implementation after §1.5 lock).

## Changes

- User-docs: scope pointers to `INSTALL_IN_YOUR_PROJECT.md`, IPW-E6S09T01, ADR-003, FR-081 (context-specific wording for brownfield checklist, CLI publishing, Apple platform, etc.).
- `INSTALL_IN_YOUR_PROJECT.md`: note that guides under `user-docs/` carry scope sections where relevant.
- `IPW-E6S09T01-greenfield-installation-fr080.md`: parallel-documentation policy under §3 Implementation plan.
- Task T01 progress updated for Wave 3 completeness sweep.

## Verification

- `validate_branch_context.py --strict --requested E6:S09:T01 --art`
- `validate_rw_task_complete.py --requested E6:S09:T01`
- `validate_rw_task_intent.py --requested E6:S09:T01 --art`
- `validate_version_bump.py --strict --requested E6:S09:T01 --art`
