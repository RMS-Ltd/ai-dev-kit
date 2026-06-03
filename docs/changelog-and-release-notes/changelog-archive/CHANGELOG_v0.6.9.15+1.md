---
version: 0.6.9.15+1
semver: 0.4.865+1
date: 2026-06-04
epic: 6
story: 9
task: 15
build: 1
type: functional
art: true
---

# CHANGELOG v0.6.9.15+1 — Install/Setup External SemVer Display (FR-108)

**Release Date:** 2026-06-04 12:00:00 UTC  
**Epic:** E06 (ADK Installation and Adopter Integration)  
**Story:** S09 (Installation and adopter integration)  
**Task:** T15 (Install/setup interactive feedback external SemVer — FR-108)  
**Build:** 1  
**Adopt Requested Task:** `--art` (E06:S09:T15)

---

## Summary

Change implemented: all install and setup entry points display the **external SemVer** of AI Dev Kit at session start and on interactive section headers. Install JSON logs and feedback payloads include matching `adk_semver` / `adk_internal_version` fields.

---

## Changes

### Framework — install UX version display

- **`install_ux_version.py`** — shared resolver (`rw-config` → `semver_converter`, `finalize=False`) + banner formatters + unknown fallback
- **`cli/adk_version_display.py`** — CLI bridge to shared module
- **CLI commands** — `install`, `init`, `status`, `logs prepare-feedback-payload`; `main.py --version` no longer hardcoded `0.1.0`
- **Framework installers** — RW, Kanban, greenfield orchestrator, GitHub package install
- **`cli/logging.py`** — `adk_semver` / `adk_internal_version` on JSON install events

### Tests

- **`tests/cli/test_install_ux_version.py`** — resolver, CLI banner, RW/Kanban dry-run, logging fields

### Documentation

- **`INSTALL_IN_YOUR_PROJECT.md`** — install version banner paragraph
- **`adk-feedback-guide.md`** — `context.adk_semver` in feedback payload
- **`IPP-E06S09T15`** — IPW planning package

---

## Acceptance Criteria

- [x] AC1: Session-start SemVer on documented install entry points
- [x] AC2: Automated tests per major entry point
- [x] AC3: RW installer headers include SemVer
- [x] AC4: Kanban installer banners include SemVer
- [x] AC5: Unknown fallback when resolution fails
- [x] AC6: Telemetry/feedback fields align with displayed SemVer

---

## References

- [FR-108](../../project-management/kanban/fr-br/FR-108-install-setup-interactive-feedback-external-semver-version.md)
- [IPP-E06S09T15](../../implementation-cycles/IPP-E06S09T15-install-setup-interactive-feedback-external-semver.md)
