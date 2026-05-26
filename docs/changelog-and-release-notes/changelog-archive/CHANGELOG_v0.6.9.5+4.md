# Changelog v0.6.9.5+4

**Release Date:** 2026-05-26 14:36:31 UTC  
**Epic | Story | Task:** E6:S09:T05 (`--art`)  
**SemVer (task_touch):** v0.4.806+4  

## Summary

**Consolidate FR-098 Phase 1 onto `dev`:** Cherry-pick from `main` the ADK ECC skill pack (`adk-*` skills), `validate_adk_ecc_skill_pack.py` + pytest, IPP, archived changelogs **v0.6.9.5+2/+3**, and aligned Kanban/FR docs so `dev` matches shipped Phase 1 deliverables.

## Change implemented

### Skill pack (from `main`)

- Five ECC-format skills under `packages/frameworks/workflow mgt/skills/` (`adk-release-workflow`, `adk-kanban-sync`, `adk-implementation-planning`, `adk-intake-fr-br-uxr`, `adk-version-bump`) + `skills/README.md`
- **`validate_adk_ecc_skill_pack.py`** and **`test_validate_adk_ecc_skill_pack.py`** — PASS on `dev`

### Planning and traceability

- **`IPP-E6S09T05-adk-ecc-workflow-skill-pack-fr098.md`** restored on `dev`; T05 task doc and boards link `—IPP—`
- Archived **`CHANGELOG_v0.6.9.5+2.md`**, **`CHANGELOG_v0.6.9.5+3.md`** (history from `main`)

### Kanban / FR

- **FR-098** — Phase 1 shipped note; phases 2–5 remain open; **Must Have** priority on `fbuboard.md`
- **kboard** — E6:S09:T05 row: Phase 1 shipped wording; IPP link; phases 2–5 tracking

## References

- [T05 task doc](../../project-management/kanban/epics/Epic-6/Story-009-ai-dev-kit-installation-and-adopter-integration/T05-adk-workflow-skill-pack-ecc-fr098.md)
- [FR-098](../../project-management/kanban/fr-br/FR-098-ecc-optional-harness-layer-integration.md)
- [IPP-E6S09T05](../../implementation-cycles/IPP-E6S09T05-adk-ecc-workflow-skill-pack-fr098.md)
