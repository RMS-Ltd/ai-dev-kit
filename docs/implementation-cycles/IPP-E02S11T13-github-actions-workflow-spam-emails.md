---
lifecycle: evergreen
created_at: 2026-06-05T12:00:00Z
housekeeping_policy: keep
---
# E02:S11:T13 — IPW Plan (BR-051)
**Host Task:** [T13](../project-management/kanban/epics/epic-02/story-11-intake-workflow-automation/T13-github-actions-workflow-spam-emails-br051.md)
**Status:** Approved
Root cause: broad issue triggers + job-level `if:` → "No jobs were run" emails (BR-051); BR-053 push-trigger workaround.
Delivery: dispatch-only `fr-br-intake.yml`, archive `.DISABLED*`, CI concurrency blocks.
