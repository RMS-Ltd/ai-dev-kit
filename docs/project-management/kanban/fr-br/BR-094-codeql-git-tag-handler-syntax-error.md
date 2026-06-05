---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T00:10:00Z
expires_at: null
housekeeping_policy: keep
---

# Bug Report BR-094: CodeQL parse failure — `git_tag_handler.py` indentation syntax error

**Bug ID:** BR-094  
**Priority:** MEDIUM  
**Severity:** MEDIUM — CodeQL Python analysis skips `git_tag_handler.py`; RW Step 11 tag-creation helper fails at import.  
**Status:** RESOLVED  
**Created:** 2026-06-05  
**Last updated:** 2026-06-05 (v0.8.3.8+1 — fix released)  
**Version:** v0.8.3.8+1  
**Implementing Task:** [E08:S03:T08](../epics/epic-08/story-03-automation-scripts/T08-codeql-git-tag-handler-syntax-br094.md) — ✅ COMPLETE (v0.8.3.8+1)  
**Related:** [CodeQL configuration status](https://github.com/RMS-Ltd/ai-dev-kit/security/code-scanning/tools/CodeQL/status/configurations/automatic/02af035c656f34be1a763cec498ac15c1e93278238bf93383d8439147ad1aafc) · CodeQL setup run [26986666112](https://github.com/RMS-Ltd/ai-dev-kit/actions/runs/26986666112)

---

## Summary

GitHub CodeQL reports **“Could not process some files due to syntax errors”** for `packages/frameworks/workflow-mgt/scripts/git_tag_handler.py` (line 23): the `from semver_converter import …` line is not indented under `try:`, causing an `IndentationError`.

---

## Problem Description

### Observed behavior (CodeQL, 2026-06-04)

```
Syntax Error (line 23) in …/git_tag_handler.py
Could not process some files due to syntax errors (1 result)
```

Local verification before fix:

```
IndentationError: expected an indented block (git_tag_handler.py, line 24)
```

### Root cause

Optional import guard uses `try:` / `except ImportError:` but the import line was flush with `try:`.

### Impact

- CodeQL cannot analyze `git_tag_handler.py`.
- `python -m py_compile` fails — RW Step 11 tag helper unusable.

---

## Acceptance criteria

- [x] `python -m py_compile packages/frameworks/workflow-mgt/scripts/git_tag_handler.py` passes.
- [ ] CodeQL Python analysis reports no syntax errors for this file (post-push verification).
- [x] **BR-094** ↔ **E08:S03:T08** linked; released via RW.

---

## Fix Attempt History

### Attempt 1: v0.8.3.8+1 — 2026-06-05

**Changes:** Indent `from semver_converter import …` under `try:` in `git_tag_handler.py`.

**Verification:** [x] `py_compile` local pass; [ ] CodeQL post-push pending.

---

## Intake Decision

**Intake Status:** ACCEPTED  
**Intake Date:** 2026-06-05  
**Assigned To:** Epic 8 / Story 3 / **E08:S03:T08**
