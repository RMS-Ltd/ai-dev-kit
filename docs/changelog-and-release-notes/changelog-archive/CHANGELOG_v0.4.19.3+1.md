# Changelog v0.4.19.3+1

**Release Date:** 2026-04-27 10:10:00 UTC  
**Internal Version:** 0.4.19.3+1  
**Epic / Story / Task:** E4 | S19 | T03

## Summary

`RW -d E4:S19:T03 --art` publishes the canonical IPP for `E6:S07` default-housing drift investigation and completes deterministic publication wiring across the host task, FR-087, Story 019, and both boards.

## Changes

- Published `IPP-E4S19T03-e6s07-default-housing-drift-investigation.md` with requirements/spec/test/implementation-plan/success-criteria/reference sections
- Wired `E4:S19:T03` host task with canonical IPP links and validator-friendly `Publication Status: NOT_APPLICABLE` block
- Added FR-087 IPP backlink and Story 019 checklist discoverability link for T03
- Replaced `—No IPP—` token with IPP links on `kboard.md` (E4:S19:T03 row) and `fbuboard.md` (FR-087 row)
- Recorded validator outcomes in IPP §5 (`validate_ipw_publication_wiring.py` PASS; `validate_plan_wiring.py` only pre-existing E5:S01:T75 issue)
- Bumped internal version to `0.4.19.3+1`

## References

- IPP: `docs/implementation-cycles/IPP-E4S19T03-e6s07-default-housing-drift-investigation.md`
- Host task: `docs/project-management/kanban/epics/Epic-4/Story-019-fr-br-uxr-abstract-governance-and-intake/T03-e6s07-default-housing-drift-investigation-and-closure-decision-fr087.md`
- Source FR: `docs/project-management/kanban/fr-br/FR-087-e6s07-default-housing-root-cause-and-closure-decision.md`
- Story: `docs/project-management/kanban/epics/Epic-4/Story-019-fr-br-uxr-abstract-governance-and-intake.md`
- Boards: `docs/project-management/kanban/kboard.md`, `docs/project-management/kanban/fbuboard.md`
