# Changelog v0.8.3.12+12

**Release Date:** 2026-06-07 18:01:03 UTC  
**Epic | Story | Task:** E08:S03:T12 (`RW --art`)  
**SemVer (task_touch):** v0.4.1041+12  

## Summary

**Change implemented:** Post-closure follow-on for **BR-099** / **E08:S03:T12** — local **CQG** 6-hour monitor (`cqg_monitor_cron.sh`) verified operational on operator workstation; local snapshot **87/Fair** @ `42515103` (HEAD skip path confirmed). Wave-6 code shipped @ **v0.8.3.12+10**; dashboard closure @ **+11**.

## Deliverables

- SemVer registry finalized for **v0.8.3.12+12** (task_touch).
- Kanban forensic anchor: task doc version marker + **T16** handoff unchanged.

## Local CQG verification

| Field | Value |
| ----- | ----- |
| Monitor | `packages/frameworks/workflow-mgt/scripts/cqg_monitor_cron.sh` |
| Schedule | `0 */6 * * *` (operator crontab) |
| Last full scan | 2026-06-07 10:47 UTC @ `42515103` |
| Open warnings | **87** (local CQG; **Fair**) |
| Skip guard | HEAD unchanged + **< 12 h** staleness — verified |

## Notes

- No additional code remediation in this BUILD — operator verification + semver registry only.
- GitHub dashboard SoT remains **Good** @ `main` `ed379ab` (sign-off @ **v0.8.3.12+11**).
- Perpetual hygiene: **E08:S03:T16**.

## References

- [T12](../../project-management/kanban/epics/epic-08/story-03-automation-scripts/T12-code-quality-maintainability-backlog-br099.md)
- [BR-099](../../project-management/kanban/fr-br/BR-099-code-quality-maintainability-backlog.md)
- [CQG operator guide](../../packages/frameworks/tooling-automation/docs/code-quality-gate-operator-guide.md)
- [T17 / FR-113](../../project-management/kanban/fr-br/FR-113-local-code-quality-gate-cqg.md)
