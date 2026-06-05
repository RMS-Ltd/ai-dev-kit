---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T20:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 8, Story 3, Task 9: CodeQL insecure temporary file — replace `mktemp` (**BR-095**)

**Task ID:** E08:S03:T09  
**Status:** ✅ COMPLETE  
**Priority:** MEDIUM  
**Created:** 2026-06-05  
**Last updated:** 2026-06-05 (v0.8.3.9+1 — BR-095 fix released)  
**Version Anchor:** ✅ COMPLETE (v0.8.3.9+1)  
**Version:** v0.8.3.9+1  
**Code:** E08S03T09

**Scope:** Resolve CodeQL **py/insecure-temporary-file** alert #4 by replacing deprecated `tempfile.mktemp` in the intake documentation test script.

**Upstream:** [BR-095 — CodeQL insecure temporary file (mktemp)](../../../fr-br/BR-095-codeql-insecure-temporary-file-mktemp.md)

Publication Status: NOT_APPLICABLE

---

## Input

- [BR-095](../../../fr-br/BR-095-codeql-insecure-temporary-file-mktemp.md)
- [CodeQL alert #4](https://github.com/RMS-Ltd/ai-dev-kit/security/code-scanning/4)
- [`test_intake_documentation_update.py`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/scripts/test_intake_documentation_update.py)
- [E08:S03:T08 — CodeQL git_tag_handler syntax (BR-094)](T08-codeql-git-tag-handler-syntax-br094.md)

---

## Deliverable

Replace `tempfile.mktemp` with `NamedTemporaryFile(delete=False)` in `test_documentation_update()`, matching the secure pattern already used in `test_status_field_update()` in the same file. Add `finally` cleanup for the temp copy.

---

## Acceptance Criteria

- [x] No `mktemp` / `tempnam` usage in `test_intake_documentation_update.py` (or repo).
- [x] Temp file removed in `finally` on both success and failure paths.
- [ ] CodeQL alert #4 closed on `main` after merge.
- [x] **BR-095** released via **RW E08:S03:T09** (v0.8.3.9+1).

---

## References

- [BR-095](../../../fr-br/BR-095-codeql-insecure-temporary-file-mktemp.md)
- [BR-094](../../../fr-br/BR-094-codeql-git-tag-handler-syntax-error.md)
