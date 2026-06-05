# Changelog v0.8.3.11+0

**Release Date:** 2026-06-05 11:46:12 UTC  
**Epic | Story | Task:** E08:S03:T11 (`RW --art --doc-policy-zero`)  
**SemVer (task_touch):** v0.4.968+0 (internal traceability)  

## Summary

Documentation release for **BR-098** — CodeQL **actions/missing-workflow-permissions** alerts #1–#3. Remediation (explicit `permissions` blocks in `tests.yml`, `docusaurus-build.yml`, `workflow-scripts-pytest.yml`) was already on `main`; this RW closes the intake and kanban traceability loop.

## Kanban / intake

- **BR-098** — RESOLVED; bidirectional links to **E08:S03:T11**
- Task doc version anchors at **v0.8.3.11+0**

## Note

BUILD +0 docs-only release via direct version write + `validate_version_bump.py --doc-policy-zero --art` (T07+0 / T12+0 precedent). `--art` adopts E08:S03:T11 while later T12–T14 kanban-init releases remain in history.

## References

- [BR-098](../project-management/kanban/fr-br/BR-098-codeql-missing-workflow-permissions.md)
- [T11](../project-management/kanban/epics/epic-08/story-03-automation-scripts/T11-codeql-missing-workflow-permissions-br098.md)
