# Changelog v0.5.9.10+1

**Release Date:** 2026-04-01 16:25:00 UTC  
**Epic:** 5 | **Story:** 9 | **Task:** 10  
**Task doc:** [T10-docusaurus-strict-broken-anchors-post-t08.md](../../project-management/kanban/epics/Epic-5/Story-009-docusaurus-documentation-portal/T10-docusaurus-strict-broken-anchors-post-t08.md)  
**FR:** [FR-067](../../project-management/kanban/fr-br/FR-067-docusaurus-production-build-corpus-triage.md) — **FU-3**

## Summary

**E5:S09:T10** filed: optional **`onBrokenAnchors: 'throw'`** hardening after **T08**. **FR-067 FU-3**; Story-009 / Epic-5 / triage / portal README / **T08** Related cross-links. Task doc includes canonical **`Full Task ID`** for `validate_version_bump.py`.

## Changes

- New **T10** task document (inventory of known anchor warnings, deliverables, ACs).
- **FR-067** — **FU-3** row.
- **Maintenance triage**, **Story-009**, **Epic-5**, **T08** Related, **portal/README** anchors bullet.

## Verification

- `python packages/frameworks/workflow mgt/scripts/validation/validate_version_bump.py`
- `python packages/frameworks/workflow mgt/scripts/validation/validate_branch_context.py --strict`
