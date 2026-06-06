# Release v0.10.1.10+1 — E10:S01:T10 DocumentLifecycleValidator fix

**Release Date:** 2026-06-06 15:01:59 UTC  
**Epic:** 10 | **Story:** 01 | **Task:** 10  
**SemVer:** v0.4.1015+1  
**Branch:** `epic/10-doc-lifecycle-framework`  
**RW mode:** `--art`

---

## Summary

**Change implemented:** Fix cross-package `DocumentLifecycleValidator` — PyYAML import with graceful fallback, five-field metadata enforcement per `doc-lifecycle-metadata-spec.md`, expanded pytest suite (TC1–TC8), greenfield-install mirror parity, and framework README ownership boundary vs T08.

Closes **GAP-DOCLIFE-TEST-001** (T06 remediation R3).

---

## Change implemented

### Validator (`document_lifecycle_validator.py`)

- Added `import yaml` with `ImportError` fallback (`YAML_AVAILABLE` flag) — no `NameError` at runtime
- Expanded `required_fields` to five spec fields: `lifecycle`, `ttl_days`, `created_at`, `expires_at`, `housekeeping_policy`
- Added `_is_valid_iso_datetime()` helper for YAML-parsed datetime objects and ISO strings

### Tests

- Rewrote `test_document_lifecycle_validator.py` with parametric missing-field tests, enum/type failures, no-frontmatter pass, malformed frontmatter fail, and NameError regression (13 tests, all green)

### Documentation

- Updated `validators/framework/README.md` §DocumentLifecycleValidator with five-field table and T08 boundary
- T05 gap log: GAP-DOCLIFE-TEST-001 tracking → remediated via IPP-E10S01T10

### Mirror (FR-110)

- Synced `greenfield-install/packages/frameworks/tooling-automation/validators/` validator + tests

---

## Verification

- `pytest packages/frameworks/tooling-automation/validators/tests/test_document_lifecycle_validator.py -v` — 13 passed
- RW gates 1–1d: PASS (`--art` adoption E10:S01:T10)
- Validator smoke on story folder: completes scan without crash
