---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-04T21:45:00Z
expires_at: null
housekeeping_policy: keep
---

# Bug Report BR-089: RW Install Mode C — Missing `main_changelog` Scaffold

**Bug ID:** BR-089  
**Priority:** MEDIUM  
**Severity:** MEDIUM (`rw-config` references `CHANGELOG.md` but file absent until first RW)  
**Status:** RESOLVED (fix **v0.9.1.3+2** / `v0.4.885+2`; adopter verified **2026-06-04**)  
**GitHub Issue:** [#19](https://github.com/RMS-Ltd/ai-dev-kit/issues/19)  
**Created:** 2026-06-04  
**Source:** ExpensesTracker setup-spine T03; split from [#17](https://github.com/RMS-Ltd/ai-dev-kit/issues/17)

---

## Summary

`install_release_workflow.py --mode c` wrote `main_changelog: CHANGELOG.md` to `rw-config.yaml` but did not create the file on greenfield repos.

---

## Fix

`ensure_main_changelog_scaffold()` in `install_release_workflow.py` (same release as #19 close). Sign-off contract entry **BR-089**.

---

## Adopter verification

ExpensesTracker @ **`v0.4.885+2`**: re-run `--mode c --config rw-config.yaml` → `CHANGELOG.md` created; **BR-089 READY** in signoff report.
