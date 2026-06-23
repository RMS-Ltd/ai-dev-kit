---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T22:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Bug Report BR-098: CodeQL alerts — missing explicit `permissions` in GitHub Actions workflows

**Bug ID:** BR-098  
**Priority:** MEDIUM  
**Severity:** MEDIUM — CodeQL **actions/missing-workflow-permissions** (security severity: medium); three open alerts on `main` (2026-06-04).  
**Status:** RESOLVED  
**Created:** 2026-06-05  
**Last updated:** 2026-06-05 (v0.8.3.11+0 – doc release; remediation on `main`; alerts #1–#3 closed)  
**Version:** v0.8.3.11+0  
**Implementing Task:** [E08:S03:T11](../epics/epic-08/story-03-automation-scripts/T11-codeql-missing-workflow-permissions-br098.md) — ✅ COMPLETE (remediation verified via GitHub API)  
**Related:** [Security & quality](https://github.com/RMS-Ltd/ai-dev-kit/security/quality) · [CodeQL alert #1](https://github.com/RMS-Ltd/ai-dev-kit/security/code-scanning/1) · [#2](https://github.com/RMS-Ltd/ai-dev-kit/security/code-scanning/2) · [#3](https://github.com/RMS-Ltd/ai-dev-kit/security/code-scanning/3) · [BR-094](BR-094-codeql-git-tag-handler-syntax-error.md) · [BR-095](BR-095-codeql-insecure-temporary-file-mktemp.md) · [BR-096](BR-096-codeql-incomplete-url-substring-sanitization.md)

---

## Summary

GitHub CodeQL flagged three CI workflows for **missing explicit `permissions` blocks**, allowing the default broad `GITHUB_TOKEN` scope. Remediation adds least-privilege `permissions: contents: read` at workflow scope (and job scope where deploy requires `pages: write`).

---

## Problem Description

### Observed behavior (CodeQL alerts #1–#3, 2026-06-04)

| Alert | Workflow | Rule | Line |
| ----- | -------- | ---- | ---- |
| #1 | `.github/workflows/tests.yml` | `actions/missing-workflow-permissions` | 13 |
| #2 | `.github/workflows/docusaurus-build.yml` | `actions/missing-workflow-permissions` | 27 |
| #3 | `.github/workflows/workflow-scripts-pytest.yml` | `actions/missing-workflow-permissions` | 19 |

```
Actions job or workflow does not limit the permissions of the GITHUB_TOKEN.
Consider setting an explicit permissions block.
```

### Root cause

Workflows relied on the implicit default `GITHUB_TOKEN` permissions (read/write for `contents`, `packages`, etc.) instead of declaring least-privilege scopes.

### Impact

- Medium-severity CodeQL security findings on the [Security & quality](https://github.com/RMS-Ltd/ai-dev-kit/security/quality) dashboard.
- Broader-than-necessary token scope for read-only test/build jobs.
- Noise alongside BR-094/095/096 remediation work.

---

## Acceptance criteria

- [x] Add explicit `permissions: contents: read` to `tests.yml`, `workflow-scripts-pytest.yml`, and workflow-level `docusaurus-build.yml`.
- [x] Preserve deploy job elevated scopes (`pages: write`, `id-token: write`) only on the deploy job in `docusaurus-build.yml`.
- [x] CodeQL alerts #1, #2, #3 report `state: fixed` on `main`.
- [x] **BR-098** ↔ **E08:S03:T11** linked.

---

## Fix Attempt History

### Attempt 1 — 2026-06-05 (landed on `main` pre-intake)

**Changes:**

- `.github/workflows/tests.yml` — `permissions: contents: read`
- `.github/workflows/workflow-scripts-pytest.yml` — `permissions: contents: read`
- `.github/workflows/docusaurus-build.yml` — workflow `permissions: contents: read`; deploy job retains `pages: write` + `id-token: write`

**Verification:** [x] GitHub API confirms alerts #1–#3 `state: fixed` (fixed_at 2026-06-05T00:06–01:00Z). [x] Latest CodeQL actions analysis on `main` reports `results_count: 0`.

---

## Intake Decision

**Intake Status:** ACCEPTED  
**Intake Date:** 2026-06-05  
**Assigned To:** Epic 8 / Story 3 / **E08:S03:T11**
