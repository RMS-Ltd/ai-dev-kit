# Detailed Changelog — v0.2.8.8+3

**Release Date:** 2026-05-30 12:00:09 UTC  
**Version:** `v0.2.8.8+3`  
**SemVer:** `v0.4.835+3`  
**Task Anchor:** `E2:S08:T08`

---

## Summary

Change implemented: FR-059 closure — IPW Phase 9 reconciliation, schema and perf smoke tests, rollback `command_records` coverage, FR-059/T08 AC evidence, kanban four-surface COMPLETE sync with FR-097 stamp manifest.

---

## Added

- `tests/journal/test_forensic_log_schema.py`, `test_forensic_log_perf.py`
- `docs/changelog-and-release-notes/changelog-archive/four-surface-reports/rw-e2s08t08-fr059-stamp-evidence-manifest.json`

## Changed

- `journal/__init__.py` exports `sweep`, `AtomicCommandRecord`, `run_subprocess_logged`
- `IPP-E2S08T08` §7 complete; FR-059 and T08 COMPLETE with evidence links
- `fbuboard.md` FR-059 row COMPLETE; deduplicated IPP column

---

## Traceability

- Epic: `2`
- Story: `8`
- Task: `8`
