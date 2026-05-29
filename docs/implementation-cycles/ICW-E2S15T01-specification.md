---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-14T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# ICW E2:S15:T01 Specification

## Problem
IPW artifacts can exist durably in-repo but remain undiscoverable from project documentation surfaces unless publication wiring is explicit and validated.

## Objectives
- Define deterministic publication contract ownership/timing.
- Require task-level publication state (`published` or `NOT_APPLICABLE` with reason).
- Ensure host task docs link to planning artifacts under `docs/implementation-cycles/`.

## Requirements
1. Add validator for requested `E:S:T` publication wiring.
2. Add tests for pass/fail and not-applicable paths.
3. Update workflow docs to make publication responsibility explicit.
4. Produce inventory + phased backfill plan for historical gaps.
