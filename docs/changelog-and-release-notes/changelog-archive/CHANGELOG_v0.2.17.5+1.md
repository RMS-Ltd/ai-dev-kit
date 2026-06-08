# Changelog v0.2.17.5+1 — T05 parity replay on SQLite

**Release Date:** 2026-06-07 18:27:36 UTC  
**Internal Version:** v0.2.17.5+1  
**SemVer (task_touch):** v0.4.1046+1  
**Epic:** 2 | **Story:** 17 | **Task:** 5

---

## Summary

**Change implemented:** T05 parity replay — legacy vs sqlite side-by-side for all 32 T01 scenario IDs; automated harness; zero unexplained SemVer/BUILD mismatches. **65 pytest pass** (release_state + rw_scenarios).

---

## Added

- `tests/rw_scenarios/parity_harness.py` — dual-backend init/finalize helpers
- `tests/rw_scenarios/test_t05_parity.py` — registry parity (S01, S02, S04, S06, V01) + S05 sqlite behavior
- `parity-run-log.md` — sqlite column for scenario matrix
- `parity-diff-report.md` — explained S05 divergence (import dedupe + DB UNIQUE)

## Changed

- T05 → COMPLETE; version anchor `v0.2.17.5+1`
- `kboard.md` — T06 next active

## Next

- T06 high-stress matrix v2 and friction synthesis report
