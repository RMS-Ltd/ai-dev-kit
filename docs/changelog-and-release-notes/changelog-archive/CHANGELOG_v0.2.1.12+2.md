# Detailed Changelog — v0.2.1.12+2

**Release Date:** 2026-04-09 15:24:35 UTC  
**Version:** `v0.2.1.12+2`  
**SemVer:** `v0.4.720+2`  
**Task Anchor:** `E2:S01:T12`

---

## Summary

Change implemented: completed BR-061 by enabling explicit-task pre-Step-2 reconciliation in Step 1 while preserving cross-epic and intent guard blocking behavior.

---

## Changed

- Updated `validate_branch_context.py` to allow explicit requested-task reconciliation when branch context is valid and `version.py` is stale.
- Added guard to block cross-epic requested-task mismatch against active epic branch.
- Added `test_validate_branch_context.py` coverage for stale-version pass and cross-epic block scenarios.
- Updated `test_validate_rw_task_intent.py` expectations to current `rw-k` and `--art` intent-guard semantics.
- Updated RW Step 1 documentation in `release-workflow-agent-execution.md` to pass `--requested`/`--art` context into branch validation.
- Synced BR-061/T12 story and board traceability status to COMPLETE.

---

## Traceability

- Epic: `2`
- Story: `1`
- Task: `12`
