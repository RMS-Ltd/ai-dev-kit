---
version: 0.6.9.15+2
semver: 0.4.866+2
date: 2026-06-04
epic: 6
story: 9
task: 15
build: 2
type: documentation
---

# CHANGELOG v0.6.9.15+2 — FR-108 → UXR-016 Reclassification (docs-only)

**Release Date:** 2026-06-04 00:00:00 UTC  
**Epic:** E06 (ADK Installation and Adopter Integration)  
**Story:** S09 (Installation and adopter integration)  
**Task:** T15 (Install/setup interactive feedback external SemVer — UXR-016)  
**Build:** 2  
**Mode:** docs-only (`RW -d`)

---

## Summary

Change implemented: retyped install/setup SemVer display requirement from **FR-108** to **UXR-016**, deleted FR-108 to free the id, and rewired kanban, planning, changelog forensics, and traceability comments. No functional install behavior changes.

---

## Changes

### Kanban / FBU

- **Created** `UXR-016-install-setup-interactive-feedback-external-semver-version.md`
- **Deleted** `FR-108-install-setup-interactive-feedback-external-semver-version.md`
- **Renamed** task doc → `T15-install-setup-interactive-feedback-external-semver-uxr016.md`
- Updated Story-009 checklist, `kanban-completed.md`, `fbu-completed.md`, `kboard.md`, `fbuboard.md`

### Planning & release forensics

- Updated `IPP-E06S09T15` upstream links and UXR-016-R* source ids
- Updated four-surface reports for v0.6.9.15+1 with UXR-016 canonical ids
- Added post-release reclassification footnote to archived `CHANGELOG_v0.6.9.15+1.md`

### Traceability (comments only)

- Module/doc comments: FR-108 → UXR-016 in `install_ux_version.py`, installers, tests, install guides

---

## References

- [UXR-016](../../project-management/kanban/fr-br/UXR-016-install-setup-interactive-feedback-external-semver-version.md)
- [T15 task doc](../../project-management/kanban/epics/Epic-6/Story-009-ai-dev-kit-installation-and-adopter-integration/T15-install-setup-interactive-feedback-external-semver-uxr016.md)
- [IPP-E06S09T15](../../implementation-cycles/IPP-E06S09T15-install-setup-interactive-feedback-external-semver.md)
