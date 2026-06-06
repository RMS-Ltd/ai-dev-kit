# Release v0.10.1.8+1 — E10:S01:T08 Doc housekeeping workflow and scripts

**Release Date:** 2026-06-06 15:04:48 UTC  
**Epic:** 10 | **Story:** 01 | **Task:** 08  
**SemVer:** v0.4.1016+1  
**Branch:** `epic/10-doc-lifecycle-framework`  
**RW mode:** `--art`

---

## Summary

**Change implemented:** Materialize Document Lifecycle package automation — `doc-housekeeping-workflow.yaml` (DHKW), `validate_lifecycle_metadata.py`, `housekeeping_scanner.py` with reference-aware cleanup, pytest suite (12 tests), package doc tree updates, and FR-110 greenfield-install mirror parity.

Closes **GAP-DOCLIFE-STRUCT-001/002/003**; observability for **GAP-DOCLIFE-BEHV-001**.

---

## Change implemented

### Workflow

- Added `workflows/doc-housekeeping-workflow.yaml` — seven-step Scan→Filter→Analyze→Determine→Execute→Log pipeline

### Scripts

- `scripts/validate_lifecycle_metadata.py` — five-field metadata + cross-field invariants (`--strict`)
- `scripts/housekeeping_scanner.py` — expired-doc scan, reference analysis, dry-run plan, `--execute --confirm` mutations
- `scripts/_frontmatter_utils.py` — shared frontmatter parsing helpers

### Tests

- `tests/test_validate_lifecycle_metadata.py` — T1–T5
- `tests/test_housekeeping_scanner.py` — T6–T11 + workflow YAML structure
- Fixtures under `tests/fixtures/`

### Documentation

- README / PACKAGE_OVERVIEW — package tree without `(future)` labels; quick-start for scripts
- `integration/workflow-mgt-integration.md` — Step 4 implemented

### Mirror (FR-110)

- Synced `greenfield-install/packages/frameworks/doc-lifecycle/` (workflows, scripts, tests)

---

## Verification

- `python -m pytest packages/frameworks/doc-lifecycle/tests/ -v` — 12 passed
- Reference-aware plan: `expired_transient.md` → `archive` (evergreen linker protection)
- `python scripts/sync_greenfield_install.py` + `diff -rq` canonical ↔ mirror — exit 0
- RW gates 1–1d: PASS (`--art` adoption E10:S01:T08)
