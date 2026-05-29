---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-19T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# FR-095: Auto-detect GitHub remote repository in `create_github_release.py`

**Type:** Feature Request (FR)
**ID:** FR-095
**Submitted:** 2026-05-19
**Submitted By:** User
**Priority:** MEDIUM
**Severity:** LOW
**Status:** COMPLETE
**Implementing Task:** E2:S16:T10

---

## Summary

Remove the hardcoded `earlution/ai-dev-kit` repository default from `create_github_release.py` and replace it with dynamic auto-detection from `git remote get-url origin`. This eliminates manual updates when repos are transferred between personal accounts and organisations, or when forks/clones have different remotes.

---

## Problem Statement

`create_github_release.py` has a hardcoded `--repo` default:

```python
parser.add_argument(
    "--repo",
    default="earlution/ai-dev-kit",
    help="Repository name (default: earlution/ai-dev-kit)"
)
```

This breaks when:
- A repo is transferred from a personal account to an organisation (e.g. `earlution/ai-dev-kit` → `RMS-Ltd/ai-dev-kit`)
- A user forks the repo and runs RW from their fork
- The script is used in a different repo within the same project family

The error manifests as a 403 PAT error because the token lacks access to the hardcoded repo name, even though the working directory's remote is correct.

---

## Proposed Solution

1. Add a `get_default_repo()` function that runs `git remote get-url origin`
2. Parse the URL to extract `owner/repo`:
   - `https://github.com/owner/repo.git` → `owner/repo`
   - `git@github.com:owner/repo.git` → `owner/repo`
3. Use this as the `--repo` default
4. Retain `earlution/ai-dev-kit` as a silent fallback if git detection fails

---

## Acceptance Criteria

- [ ] `create_github_release.py` auto-detects the repo from `git remote get-url origin`
- [ ] Both HTTPS and SSH remote URL formats are supported
- [ ] Fallback to `earlution/ai-dev-kit` if detection fails (backward compatibility)
- [ ] `--repo` CLI argument still overrides auto-detection
- [ ] Help text updated to reflect auto-detection behaviour

---

## Related

- E2:S16:T10 — Ad-hoc Repository Infrastructure Maintenance (perpetual)
- FR-062 — GitHub release installation experience
- `packages/frameworks/workflow mgt/scripts/create_github_release.py`
