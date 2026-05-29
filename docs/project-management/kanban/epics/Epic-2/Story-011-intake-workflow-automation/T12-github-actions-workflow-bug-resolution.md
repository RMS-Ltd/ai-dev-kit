---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-12T11:40:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 2, Story 11, Task 12: GitHub Actions Workflow Bug Resolution

**Task ID:** E2:S11:T12  
**Status:** ✅ COMPLETE (v0.2.11.12+2)  
**Priority:** CRITICAL  
**Last updated:** 2026-03-30  
**Started:** 2026-03-12  
**Completed:** 2026-03-30  
**Version:** v0.2.11.12+2  
**Related BR:** [BR-053](../../../fr-br/BR-053-github-actions-workflow-push-trigger-bug.md)  
**GitHub Issue:** [#21](https://github.com/earlution/ai-dev-kit/issues/21)

---

## Task ID

**Full Task ID:** `E2:S11:T12`

---

## Scope

Resolve the critical GitHub Actions behavior where the FR/BR/UXR intake workflow was **scheduled on push** despite `on: issues:` only, causing "No jobs were run" noise and blocking safe automation.

---

## Input

- [BR-053](../../../fr-br/BR-053-github-actions-workflow-push-trigger-bug.md) and GitHub Issue #21  
- `gh` CLI access to audit `fr-br-intake` workflow runs  
- Maintainer agreement to disable the runnable workflow file until triggers are trustworthy  

---

## Deliverable

- `.github/workflows/fr-br-intake.yml.DISABLED` (renamed from `fr-br-intake.yml`) with header comment  
- BR-053 “Resolution / current status” + updated cross-links (submission guide, audit docs, BR-058, E4:S02)  
- Closed task and board entries with version **v0.2.11.12+2** (build +2: <sup>*</sup> board label + footnote)  

---

## Acceptance Criteria

- [x] **GitHub Bug Fixed**: *Reframed — vendor fix not received; closure is evidence-based per BR-053 “Resolution / current status”.*
- [x] **Workflows Restored**: *Reframed — intake YAML preserved in `.github/workflows/fr-br-intake.yml.DISABLED`; automation intentionally off until triggers are trustworthy.*
- [x] **No Spam Emails**: No registered `fr-br-intake` workflow file → no push-triggered runs from this workflow.
- [x] **Testing Verified**: `gh run list` audit + documented run IDs in BR-053.
- [x] **Documentation Updated**: BR-053, this task, submission guide, dependent doc links.

---

## Verification matrix (2026-03-30)

| Check | Method | Result |
|--------|--------|--------|
| Push triggers still occur with `on: issues` only | `gh run list --workflow fr-br-intake.yml --limit 50` | All sampled runs `event: push` through 2026-03-25 |
| Same YAML on branches | `git show main:...` and `git show origin/epic/6-framework-management:...` | Both `on: issues` only; still push-fired on GitHub |
| Example run | `gh run view 23541602524 --json event` | `"event":"push"` |
| BR-057 | Valid YAML post-retrospective | Does not eliminate incorrect push scheduling |

---

## Re-enable procedure (future)

1. Confirm with `gh run list` after a **test push** that only `workflow_dispatch` or non-intake workflows run (or use a throwaway repo).
2. Rename `fr-br-intake.yml.DISABLED` → `fr-br-intake.yml`.
3. Add defensive `if: github.event_name == 'issues'` on the job before relying on automation.
4. Update GitHub Issue #21 with outcome.

---

## Related Documentation

- **BR-053**: Bug report + resolution section  
- **GitHub Issue #21**: Platform tracking  
- **E2:S11**: Parent Story — Intake Workflow Automation *(T12 is post-story hardening; see Story doc footnote).*  
- **E2**: Parent Epic — Workflow Management Framework  

---

**Last Updated:** 2026-03-30
