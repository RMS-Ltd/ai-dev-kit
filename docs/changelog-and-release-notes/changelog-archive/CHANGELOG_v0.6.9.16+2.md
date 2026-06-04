# Changelog v0.6.9.16+2

**Release Date:** 2026-06-04 19:23:17 UTC  
**Epic | Story | Task:** E06:S09:T16 (`RW --art`)  
**SemVer (task_touch):** v0.4.881+2  

## Summary

Install sign-off contract fix for **BR-086** / GitHub **#17**: accept lowercase `t{task}` in **BR-084** check; **BR-086** epic pattern accepts unpadded or `{epic:02d}` — removes book T03 false **`ERROR [ADK-I04.E01]`** when adopters use correct Step 4.1 YAML.

## Changes

- `github-issue-install-signoff-contract.yaml` — BR-084 `task_doc_pattern_contains_any` (`T{task` / `t{task`); BR-086 `epic_doc_pattern_contains_any`
- Tests — `test_signoff_br084_*`, `test_signoff_br086_*`, `test_book_t03_contract_*`
- Kanban/docs — T16, BR-086, IPP sign-off follow-up notes

## References

- [BR-086](../project-management/kanban/fr-br/BR-086-rw-install-lowercase-fresh-kanban-patterns-signoff.md)
- [T16](../project-management/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T16-rw-install-lowercase-fresh-kanban-patterns-br086.md)
- GitHub [#17](https://github.com/RMS-Ltd/ai-dev-kit/issues/17)
