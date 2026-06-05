---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T00:10:09Z
expires_at: null
housekeeping_policy: archive
---

# Changelog v0.8.3.8+1

**Release Date:** 2026-06-05 00:10:09 UTC  
**Epic:** 8 | **Story:** 3 | **Task:** 8  
**SemVer:** v0.4.891+1

## Summary

E08:S03:T08 — **BR-094:** Fix CodeQL Python parse failure in `git_tag_handler.py` (indentation under `try:` import guard).

## Change implemented

- **`git_tag_handler.py`:** Indent optional `semver_converter` import under `try:` / `except ImportError:`.
- **Intake:** [BR-094](../../project-management/kanban/fr-br/BR-094-codeql-git-tag-handler-syntax-error.md) + task **E08:S03:T08**.

## Verification

- `python -m py_compile packages/frameworks/workflow-mgt/scripts/git_tag_handler.py` — pass.
- CodeQL syntax-error diagnostic — pending post-push verification.

## Related

- [BR-094](../../project-management/kanban/fr-br/BR-094-codeql-git-tag-handler-syntax-error.md)
- [E08:S03:T08](../../project-management/kanban/epics/epic-08/story-03-automation-scripts/T08-codeql-git-tag-handler-syntax-br094.md)
