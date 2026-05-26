# Changelog v0.6.9.5+3

**Release Date:** 2026-05-26 13:13:52 UTC  
**Epic | Story | Task:** E6:S09:T05 (`--art`)  
**SemVer (task_touch):** v0.4.802+3  

## Summary

**RW formalization** for E6:S09:T05: Release Workflow attribution for SemVer collision remediation (FR-100 patches **798**/**799** recorded; T05 at **800** on prior build). No functional delta from **v0.6.9.5+2** deliverables.

## Change implemented

### SemVer registry (collision remediation)

- **`semver-registry.yaml`** — monotonic mapping: `0.2.16.12+1`→`0.4.798+1`, `0.2.16.12+2`→`0.4.799+2`, `0.6.9.5+2`→`0.4.800+2`
- Tags **`v0.4.800`**, **`v0.4.800+2`**, **`v0.6.9.5+2`** aligned to skill-pack + registry commit
- This RW build (**+3**) attributes workflow closure under `--art` on `epic/6-e6s09t05-ecc-skill-pack-fr098`

### Versioning outcome

- Internal: `0.6.9.5+3`
- SemVer: **`0.4.802+3`** (PATCH **802** — strictly **>801**; patch **801** reserved for **E4:S19:T04** `v0.4.19.4+4`; MINOR unchanged at `4`)

## References

- [T05 task doc](../../project-management/kanban/epics/Epic-6/Story-009-ai-dev-kit-installation-and-adopter-integration/T05-adk-workflow-skill-pack-ecc-fr098.md)
- [FR-098](../../project-management/kanban/fr-br/FR-098-ecc-optional-harness-layer-integration.md)
