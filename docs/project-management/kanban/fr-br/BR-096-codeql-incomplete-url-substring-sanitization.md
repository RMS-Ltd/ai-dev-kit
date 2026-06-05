---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T21:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Bug Report BR-096: CodeQL alert — incomplete URL substring sanitization in portal identity test

**Bug ID:** BR-096  
**Priority:** MEDIUM  
**Severity:** HIGH — CodeQL **py/incomplete-url-substring-sanitization** (CWE-020); open security alert on `main`.  
**Status:** RESOLVED  
**Created:** 2026-06-05  
**Last updated:** 2026-06-05 (v0.8.3.10+1 — fix released)  
**Version:** v0.8.3.10+1  
**Implementing Task:** [E08:S03:T10](../epics/epic-08/story-03-automation-scripts/T10-codeql-incomplete-url-substring-sanitization-br096.md) — ✅ COMPLETE (v0.8.3.10+1)  
**Related:** [CodeQL alert #5](https://github.com/RMS-Ltd/ai-dev-kit/security/code-scanning/5) · [BR-095](./BR-095-codeql-insecure-temporary-file-mktemp.md) · [FR-065](./FR-065-docusaurus-site-identity.md)

---

## Summary

GitHub CodeQL flags a **bare URL substring check** in `tests/test_portal_fr065_identity.py` (line 67) as incomplete URL sanitization — checking `"https://rms-ltd.github.io" in config_text` is bypassable if used for security decisions.

---

## Problem Description

### Observed behavior (CodeQL alert #5, 2026-06-04)

```
The string https://rms-ltd.github.io may be at an arbitrary position in the sanitized URL.
Rule: py/incomplete-url-substring-sanitization (severity: warning, security severity: high)
Location: tests/test_portal_fr065_identity.py:67
```

### Root cause

`test_fr065_s3_url_not_example()` used `"https://rms-ltd.github.io" in config_text` to assert the Docusaurus production URL. CodeQL treats substring checks on URL strings as unsafe (CWE-020) even in test code.

### Impact

- Open **high security-severity** CodeQL finding on default branch.
- Blocks clean CodeQL status alongside BR-094/095 remediation work.

---

## Acceptance criteria

- [x] Replace bare URL substring check with parsed hostname validation (`urlparse` + regex extract of `url:` field).
- [x] `test_fr065_s3_url_not_example` passes locally.
- [ ] CodeQL alert #5 closes after fix merges to `main`.
- [x] **BR-096** ↔ **E08:S03:T10** linked; released via RW.

---

## Fix Attempt History

### Attempt 1: v0.8.3.10+1 — 2026-06-05

**Changes:** Extract `url:` field via regex; validate hostname with `urlparse` instead of bare substring `in` check.

**Verification:** [x] Portal identity tests pass; [ ] CodeQL post-push pending.

---

## Intake Decision

**Intake Status:** ACCEPTED  
**Intake Date:** 2026-06-05  
**Assigned To:** Epic 8 / Story 3 / **E08:S03:T10**
