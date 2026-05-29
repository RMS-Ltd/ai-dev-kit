# Changelog v0.5.9.8+1

**Release Date:** 2026-03-30 15:30:00 UTC  
**Epic:** 5 | **Story:** 9 | **Task:** 8  
**Task doc:** [T08-docusaurus-strict-broken-links-post-fr067.md](../../project-management/kanban/epics/Epic-5/Story-009-docusaurus-documentation-portal/T08-docusaurus-strict-broken-links-post-fr067.md)  
**FR:** [FR-067](../../project-management/kanban/fr-br/FR-067-docusaurus-production-build-corpus-triage.md) (follow-up table **FU-1** / **FU-2**)

## Summary

**RW -k:** File and wire **E5:S09:T08** so deferred FR-067 outcomes (**warn → throw** strict links; optional GitHub Release ops pointer) are tracked on **Kanban / FR / maintenance / portal README**, not in chat memory.

## Changes

### Kanban / FR / docs

- New **T08** task doc — purpose, inputs (**FR-058**, **FR-069**), deliverables, acceptance criteria for strict `onBrokenLinks` after corpus repair.
- **FR-067** — **Follow-up work** table (**FU-1**, **FU-2**) with links to T08, FR-058, RW Step 12.5, `create_github_release.py`.
- **Story 009** — checklist entry for **T08**; **T03** — related link to **T08**.
- **`docs/maintenance/docusaurus-corpus-triage-fr-067.md`** — **Deferred outcomes** section.
- **`portal/README.md`** — follow-up bullet → **T08** / **FR-067** / **FR-058**.

## Verification

- **RW -k** validators: `validate_branch_context.py --strict`; `validate_rw_task_complete.py` / `validate_rw_task_intent.py` with `--mode rw-k`.
