# Changelog v0.8.3.7+2

**Release Date:** 2026-06-05 00:09:35 UTC  
**Epic | Story | Task:** E08:S03:T07 (`RW -d --art`)  
**SemVer (task_touch):** v0.4.890+2  

## Summary

**Documentation update:** Post-push CI verification for **BR-092** — record GitHub Actions evidence that `requests` installs from `[dev]` extras and `test_framework_install_slug.py` passes; align task, BR, and IPP acceptance criteria.

## Changes

- **Task doc** — CI verification notes (run [26986650468](https://github.com/RMS-Ltd/ai-dev-kit/actions/runs/26986650468))
- **BR-092** — acceptance criteria aligned to verified import path
- **IPP-E08S03T07** — §7 T3 checked with CI evidence

## Verification

- CI run **26986650468**: `requests` collected from `[dev]`; all `test_framework_install_slug.py` tests **PASSED** (BR-092 scope)
- Two unrelated failures in `test_install_epic_22_23_templates.py` noted as out of scope (separate work)

## References

- [BR-092](../project-management/kanban/fr-br/BR-092-tests-ci-missing-requests-dev-dependency.md)
- [T07](../project-management/kanban/epics/epic-08/story-03-automation-scripts/T07-tests-ci-requests-dependency-br092.md)
- [IPP](../implementation-cycles/IPP-E08S03T07-tests-ci-requests-dependency-br092.md)
