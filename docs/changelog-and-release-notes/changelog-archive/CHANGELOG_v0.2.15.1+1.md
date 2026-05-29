# Detailed Changelog — v0.2.15.1+1

**Release Date:** 2026-04-14 16:04:14 UTC
**Internal Version:** v0.2.15.1+1
**SemVer:** v0.4.739+1
**Epic / Story / Task:** E2 / S15 / T01

## Overview

Implemented BR-066 hardening for IPW publication wiring: deterministic validator/test coverage, explicit publication contract across workflow docs, and backfill inventory with initial remediation wiring.

## Attempted Fixes

- Added `validate_ipw_publication_wiring.py` to enforce that requested task docs either:
  - link spec/test/implementation-plan artifacts under `docs/implementation-cycles/`, or
  - explicitly declare `Publication Status: NOT_APPLICABLE` with reason.
- Added regression tests for wired, missing-link, and not-applicable scenarios.
- Added/updated documentation contract language in IPW/RW/Kanban guides and implementation-cycles README.
- Wired planning artifacts for `E2:S15:T01` and backfilled `E2:S01:T17` publication links.
- Produced `IPW-PUBLICATION-BACKFILL-INVENTORY.md` with phased remediation plan.

## Verification

- `pytest "packages/frameworks/workflow mgt/scripts/validation/test_validate_ipw_publication_wiring.py"`
- `python "packages/frameworks/workflow mgt/scripts/validation/validate_ipw_publication_wiring.py" --requested E2:S15:T01`
- `python "packages/frameworks/workflow mgt/scripts/validation/validate_ipw_publication_wiring.py" --requested E2:S01:T17`
