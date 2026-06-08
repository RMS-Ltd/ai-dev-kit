---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T21:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 8, Story 3, Task 10: CodeQL incomplete URL substring sanitization (**BR-096**)

**Task ID:** E08:S03:T10  
**Status:** ✅ COMPLETE  
**Priority:** MEDIUM  
**Created:** 2026-06-05  
**Last updated:** 2026-06-05 (v0.8.3.10+1 — BR-096 fix released)  
**Version Anchor:** ✅ COMPLETE (v0.8.3.10+1)  
**Version:** v0.8.3.10+1  
**Code:** E08S03T10

**Scope:** Resolve CodeQL **py/incomplete-url-substring-sanitization** alert #5 in `tests/test_portal_fr065_identity.py`.

**Upstream:** [BR-096 — CodeQL incomplete URL substring sanitization](../../../fr-br/BR-096-codeql-incomplete-url-substring-sanitization.md)

Publication Status: NOT_APPLICABLE

---

## Input

- [BR-096](../../../fr-br/BR-096-codeql-incomplete-url-substring-sanitization.md)
- [CodeQL alert #5](https://github.com/RMS-Ltd/ai-dev-kit/security/code-scanning/5)
- [`tests/test_portal_fr065_identity.py`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/tests/test_portal_fr065_identity.py)
- [E08:S03:T09 — CodeQL mktemp fix (BR-095)](T09-codeql-insecure-temporary-file-mktemp-br095.md)

---

## Deliverable

In `test_fr065_s3_url_not_example()`:

1. Extract the `url:` field from `docusaurus.config.js` text via regex.
2. Parse with `urlparse` and assert `hostname == "rms-ltd.github.io"`.
3. Retain existing `baseUrl` and example.com negative checks.

---

## Acceptance Criteria

- [x] No bare `"https://rms-ltd.github.io" in config_text` substring check (CodeQL pattern removed).
- [x] Hostname validated via `urlparse` after extracting `url:` field.
- [x] `pytest tests/test_portal_fr065_identity.py -k "not portal_build"` passes.
- [ ] CodeQL alert #5 closed on `main` after merge.
- [x] **BR-096** released via **RW E08:S03:T10** (v0.8.3.10+1).

---

## References

- [BR-096](../../../fr-br/BR-096-codeql-incomplete-url-substring-sanitization.md)
- [BR-095](../../../fr-br/BR-095-codeql-insecure-temporary-file-mktemp.md)
