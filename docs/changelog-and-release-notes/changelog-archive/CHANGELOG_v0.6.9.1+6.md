# Detailed Changelog — v0.6.9.1+6

**Release Date:** 2026-04-19 16:19:27 UTC
**Internal Version:** v0.6.9.1+6
**SemVer:** v0.4.752+6
**Epic / Story / Task:** E6 / S09 / T01

## Overview

**RW -d** (documentation-only) release for **E6:S09:T01** covering Wave 3 user-doc alignment **tranche 2**: integration, use-cases, and post-template guides now point to the canonical greenfield-first path (`INSTALL_IN_YOUR_PROJECT.md`, IPW-E6S09T01) and ADR-003 / FR-081 boundaries.

## Changes

- `docs/documentation/user-docs/framework-dependency-integration-guide.md` — scope boundary section (greenfield vs brownfield) with pointers to INSTALL, IPW, ADR-003, FR-081.
- `docs/documentation/user-docs/framework-dependency-use-cases.md` — canonical first-run pointer and brownfield cross-links.
- `docs/documentation/user-docs/framework-dependency-post-template-setup-guide.md` — pair with INSTALL + IPW for greenfield sequence.
- `docs/project-management/kanban/.../T01-greenfield-installation-process-fr080.md` — progress notes for Wave 3 tranche 2.

## Verification

- `validate_branch_context.py --strict --requested E6:S09:T01 --art`
- `validate_rw_task_complete.py --requested E6:S09:T01`
- `validate_rw_task_intent.py --requested E6:S09:T01 --art`
- `validate_version_bump.py --strict --requested E6:S09:T01 --art`
