---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T01:06:43Z
expires_at: null
housekeeping_policy: archive
---

# Changelog v0.8.3.10+1

**Release Date:** 2026-06-05 01:06:43 UTC  
**Epic:** 8 | **Story:** 3 | **Task:** 10  
**SemVer:** v0.4.897+1

## Summary

E08:S03:T10 — **BR-096:** Replace bare URL substring check with `urlparse` hostname validation in portal identity test (CodeQL alert #5).

## Change implemented

- **`tests/test_portal_fr065_identity.py`:** Extract `url:` field via regex; assert hostname with `urlparse` instead of `"https://rms-ltd.github.io" in config_text`.
- **Intake:** [BR-096](../../project-management/kanban/fr-br/BR-096-codeql-incomplete-url-substring-sanitization.md) + task **E08:S03:T10**.

## Verification

- `pytest tests/test_portal_fr065_identity.py -k "not portal_build"` passes locally.
- CodeQL alert #5 closure — pending post-merge verification on `main`.

## Related

- [BR-096](../../project-management/kanban/fr-br/BR-096-codeql-incomplete-url-substring-sanitization.md)
- [E08:S03:T10](../../project-management/kanban/epics/epic-08/story-03-automation-scripts/T10-codeql-incomplete-url-substring-sanitization-br096.md)
- [CodeQL alert #5](https://github.com/RMS-Ltd/ai-dev-kit/security/code-scanning/5)
