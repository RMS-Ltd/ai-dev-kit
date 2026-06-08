---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T22:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 8, Story 3, Task 11: CodeQL missing workflow permissions (**BR-098**)

**Task ID:** E08:S03:T11  
**Status:** ✅ COMPLETE  
**Priority:** MEDIUM  
**Created:** 2026-06-05  
**Last updated:** 2026-06-05 (v0.8.3.11+0 – BR-098 doc release; remediation verified on `main`)  
**Version Anchor:** v0.8.3.11+0  
**Version:** v0.8.3.11+0  
**Code:** E08S03T11

**Scope:** Resolve CodeQL **actions/missing-workflow-permissions** alerts #1–#3 by adding explicit least-privilege `permissions` blocks to affected workflows.

**Upstream:** [BR-098 — CodeQL missing workflow permissions](../../../fr-br/BR-098-codeql-missing-workflow-permissions.md)

Publication Status: NOT_APPLICABLE

---

## Input

- [BR-098](../../../fr-br/BR-098-codeql-missing-workflow-permissions.md)
- [CodeQL alert #1](https://github.com/RMS-Ltd/ai-dev-kit/security/code-scanning/1) — `tests.yml`
- [CodeQL alert #2](https://github.com/RMS-Ltd/ai-dev-kit/security/code-scanning/2) — `docusaurus-build.yml`
- [CodeQL alert #3](https://github.com/RMS-Ltd/ai-dev-kit/security/code-scanning/3) — `workflow-scripts-pytest.yml`
- [Security & quality dashboard](https://github.com/RMS-Ltd/ai-dev-kit/security/quality)
- [E08:S03:T10 — BR-096 URL substring fix](T10-codeql-incomplete-url-substring-sanitization-br096.md)

---

## Deliverable

1. Add `permissions: contents: read` at workflow scope for read-only CI workflows.
2. Keep deploy-only elevated permissions scoped to the deploy job in `docusaurus-build.yml`.
3. Verify CodeQL alerts #1–#3 close on `main`.

---

## Acceptance Criteria

- [x] `tests.yml` declares `permissions: contents: read`.
- [x] `workflow-scripts-pytest.yml` declares `permissions: contents: read`.
- [x] `docusaurus-build.yml` declares workflow-level `contents: read`; deploy job retains `pages: write` + `id-token: write`.
- [x] CodeQL alerts #1, #2, #3 report `state: fixed`.
- [x] **BR-098** ↔ **E08:S03:T11** bidirectional links present.

---

## References

- [BR-098](../../../fr-br/BR-098-codeql-missing-workflow-permissions.md)
- [BR-094](../../../fr-br/BR-094-codeql-git-tag-handler-syntax-error.md)
- [BR-095](../../../fr-br/BR-095-codeql-insecure-temporary-file-mktemp.md)
- [BR-096](../../../fr-br/BR-096-codeql-incomplete-url-substring-sanitization.md)
