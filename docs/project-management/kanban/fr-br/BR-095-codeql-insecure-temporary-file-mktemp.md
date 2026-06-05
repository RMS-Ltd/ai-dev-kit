---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T20:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Bug Report BR-095: CodeQL alert — insecure `tempfile.mktemp` in intake test script

**Bug ID:** BR-095  
**Priority:** MEDIUM  
**Severity:** HIGH — CodeQL **py/insecure-temporary-file** (CWE-377); open security alert on `main`.  
**Status:** RESOLVED  
**Created:** 2026-06-05  
**Last updated:** 2026-06-05 (v0.8.3.9+1 — fix released)  
**Version:** v0.8.3.9+1  
**Implementing Task:** [E08:S03:T09](../epics/epic-08/story-03-automation-scripts/T09-codeql-insecure-temporary-file-mktemp-br095.md) — ✅ COMPLETE (v0.8.3.9+1)  
**Related:** [CodeQL alert #4](https://github.com/RMS-Ltd/ai-dev-kit/security/code-scanning/4) · [BR-094](BR-094-codeql-git-tag-handler-syntax-error.md)

---

## Summary

GitHub CodeQL flags **`tempfile.mktemp`** in `packages/frameworks/workflow-mgt/scripts/test_intake_documentation_update.py` (line 69) as an insecure temporary-file pattern (race between name creation and file open).

---

## Problem Description

### Observed behavior (CodeQL alert #4, 2026-06-04)

```
Call to deprecated function tempfile.mktemp may be insecure.
Rule: py/insecure-temporary-file (severity: error)
Location: packages/frameworks/workflow-mgt/scripts/test_intake_documentation_update.py:69
```

### Root cause

`test_documentation_update()` used `Path(tempfile.mktemp(suffix='.md'))` before `shutil.copy`. `mktemp` returns a unique name without atomically creating the file, enabling a TOCTOU race (CWE-377).

### Impact

- Open **high-severity** CodeQL finding on default branch.
- Security scanning noise blocks clean CodeQL status for the repo.

---

## Acceptance criteria

- [x] Replace `tempfile.mktemp` with `NamedTemporaryFile(delete=False)` (or equivalent secure pattern).
- [x] Ensure temp file cleanup runs on success **and** failure (`finally` block).
- [ ] CodeQL alert #4 closes after fix merges to `main`.
- [x] **BR-095** ↔ **E08:S03:T09** linked; released via RW.

---

## Fix Attempt History

### Attempt 1: v0.8.3.9+1 — 2026-06-05

**Changes:** Replace `mktemp` with `NamedTemporaryFile(suffix='.md', delete=False)`; add `finally` cleanup in `test_documentation_update()`.

**Verification:** [x] No remaining `mktemp` / `tempnam` in repo; [ ] CodeQL post-push pending.

---

## Intake Decision

**Intake Status:** ACCEPTED  
**Intake Date:** 2026-06-05  
**Assigned To:** Epic 8 / Story 3 / **E08:S03:T09**
