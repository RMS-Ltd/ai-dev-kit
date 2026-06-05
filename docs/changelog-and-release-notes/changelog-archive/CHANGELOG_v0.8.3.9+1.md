---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T01:03:42Z
expires_at: null
housekeeping_policy: archive
---

# Changelog v0.8.3.9+1

**Release Date:** 2026-06-05 01:03:42 UTC  
**Epic:** 8 | **Story:** 3 | **Task:** 9  
**SemVer:** v0.4.896+1

## Summary

E08:S03:T09 — **BR-095:** Replace insecure `tempfile.mktemp` with `NamedTemporaryFile` in intake documentation test script (CodeQL alert #4).

## Change implemented

- **`test_intake_documentation_update.py`:** Use `NamedTemporaryFile(delete=False)` instead of `mktemp`; add `finally` cleanup for temp copy.
- **Intake:** [BR-095](../../project-management/kanban/fr-br/BR-095-codeql-insecure-temporary-file-mktemp.md) + task **E08:S03:T09**.

## Verification

- No remaining `mktemp` / `tempnam` in repository.
- CodeQL alert #4 closure — pending post-merge verification on `main`.

## Related

- [BR-095](../../project-management/kanban/fr-br/BR-095-codeql-insecure-temporary-file-mktemp.md)
- [E08:S03:T09](../../project-management/kanban/epics/epic-08/story-03-automation-scripts/T09-codeql-insecure-temporary-file-mktemp-br095.md)
- [CodeQL alert #4](https://github.com/RMS-Ltd/ai-dev-kit/security/code-scanning/4)
