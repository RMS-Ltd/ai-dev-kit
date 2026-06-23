---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T00:10:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 8, Story 3, Task 8: CodeQL `git_tag_handler.py` syntax fix (**BR-094**)

**Task ID:** E08:S03:T08  
**Status:** ✅ COMPLETE  
**Priority:** MEDIUM  
**Created:** 2026-06-05  
**Last updated:** 2026-06-05 (v0.8.3.8+1 — BR-094 fix released)  
**Version Anchor:** ✅ COMPLETE (v0.8.3.8+1)  
**Version:** v0.8.3.8+1  
**Code:** E08S03T08

**Scope:** Fix Python syntax error in RW tag-creation script so CodeQL extraction and `py_compile` succeed.

**Upstream:** [BR-094 — CodeQL parse failure: git_tag_handler indentation](../../../fbu/BR-094-codeql-git-tag-handler-syntax-error.md)

Publication Status: NOT_APPLICABLE

---

## Input

- [BR-094](../../../fbu/BR-094-codeql-git-tag-handler-syntax-error.md)
- [`git_tag_handler.py`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/scripts/git_tag_handler.py)
- [CodeQL configuration status](https://github.com/RMS-Ltd/ai-dev-kit/security/code-scanning/tools/CodeQL/status/configurations/automatic/02af035c656f34be1a763cec498ac15c1e93278238bf93383d8439147ad1aafc)

---

## Deliverable

Fix Python **IndentationError** in `git_tag_handler.py` by indenting the optional `semver_converter` import under `try:` / `except ImportError:`.

---

## Acceptance Criteria

- [x] `python -m py_compile packages/frameworks/workflow-mgt/scripts/git_tag_handler.py` passes locally.
- [ ] CodeQL Python analysis reports no syntax errors for this file (post-push verification).
- [x] **BR-094** released via **RW E08:S03:T08** (v0.8.3.8+1).

---

## References

- [BR-094](../../../fbu/BR-094-codeql-git-tag-handler-syntax-error.md)
- [E08:S03:T04 — CI test workflow (BR-058)](T04-ci-test-workflow-pytest-remediation-br058.md)
