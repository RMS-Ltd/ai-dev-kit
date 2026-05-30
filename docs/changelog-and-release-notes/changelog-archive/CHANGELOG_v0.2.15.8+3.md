# Detailed Changelog — v0.2.15.8+3

**Release Date:** 2026-05-30 10:47:58 UTC  
**Internal Version:** v0.2.15.8+3  
**SemVer:** v0.4.828+3  
**Epic:** 2 | **Story:** 15 | **Task:** 8

---

## Summary

**E02:S15:T08** (FR-097 follow-on): Board stamp authority hardening — remove homogenization script, pre-commit guard, homogeneity threshold 3, forensic backfill, git-single-commit Gate 8 exemption.

---

## Change implemented

- **Removed** `normalize_board_row_timestamps.py` and workflow YAML references.
- **Added** `validate_board_stamps_precommit.py` + `.pre-commit-config.yaml` + `scripts/git-hooks/pre-commit`.
- **Gate 8 / pre-commit:** homogeneity threshold **3**; `homogeneity_clusters_blocking()` with git-single-commit exempt; UKW hour buckets never exempt.
- **Backfill:** `fr097-backfill-report-2026-05-30*.json`; kboard/fbuboard stamps recovered from 29-May fake buckets.
- **Docs:** kanban-board-guide, UKW execution guide, governance policy, agent rules/skills — no batch UTC / no normalize.

---

## Verification

- `test_stamp_authority.py` — 8 tests PASS  
- `validate_release_readiness.py` Gate 8 PASS (git-exempt clusters)  
- RW gates `--art E02:S15:T08` PASS
