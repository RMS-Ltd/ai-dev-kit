---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-30T11:56:00Z
expires_at: null
housekeeping_policy: keep
---

# Release v0.2.11.12+1

**Release Date:** 2026-03-30 11:55:54 UTC  
**Epic:** Epic 2 — Workflow Management Framework  
**Story:** Story 11 — Intake Workflow Automation  
**Task:** Task 12 — GitHub Actions workflow bug resolution (BR-053)  
**Build:** 1

---

## Summary

E2:S11:T12 — **FR/BR intake GitHub Action** removed from active workflows: `fr-br-intake.yml` renamed to **`fr-br-intake.yml.DISABLED`** because GitHub continued to schedule runs on **push** despite **`on: issues`** only (verified via `gh run list`, e.g. run `23541602524`). **BR-053** gains a “Resolution / current status” section; **manual intake** documented in **`FR_BR_UXR_FB_GITHUB_SUBMISSION_GUIDE.md`**. Cross-links: E7:S06:T08 audit table, BR-058 workflow list, E4:S02 intake story, Epic-2 / Story-11 / kanban board / task T12.

---

## Changes

### CI/CD

- Intake workflow file no longer uses a `.yml` extension under `.github/workflows/` (reference copy + header comment only).

### Documentation

- Submission guide, BR-053, T12 task, Story 11, Epic 2, kanban board.

---

## References

- [BR-053](../../../project-management/kanban/fr-br/BR-053-github-actions-workflow-push-trigger-bug.md)
- [T12 task](../../../project-management/kanban/epics/Epic-2/Story-011-intake-workflow-automation/T12-github-actions-workflow-bug-resolution.md)
