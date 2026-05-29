# Changelog — v0.2.1.16+1

**Release Date:** 2026-04-09 12:14:10 UTC  
**Version:** `v0.2.1.16+1`  
**Task Anchor:** `E2:S01:T16`  
**SemVer:** `v0.4.705+1`

## Summary

Change implemented: RW branch validation now treats `dev` as a neutral integration branch (no epic lock), removing false Step 1 blockers for valid `--art` release flows.

## Changes Implemented

### Branch Validation Runtime

- Updated `validate_branch_context.py` so `dev` no longer maps to strict epic context.
- Removed the `dev_branch_epic` enforcement path for Step 1 branch/epic matching.
- Kept branch safety checks intact for mapped epic branches and maintenance branch patterns.

### BR and Task Traceability

- Filed [BR-064](../../project-management/kanban/fr-br/BR-064-rw-dev-branch-should-not-enforce-epic-lock.md) for the `dev` epic-lock friction.
- Created and housed implementing task `E2:S01:T16`.
- Wired BR ↔ Task ↔ Story checklist for forensic traceability.

## Validation Notes

- Step 1 strict branch validation now passes on `dev`.
- Reproduction mismatch case no longer blocks RW on `dev` due solely to epic mismatch.
