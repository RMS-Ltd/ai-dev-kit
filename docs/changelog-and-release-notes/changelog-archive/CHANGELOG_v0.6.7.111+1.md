# Detailed Changelog — v0.6.7.111+1

**Release Date:** 2026-04-09 16:53:24 UTC  
**Version:** `v0.6.7.111+1`  
**SemVer:** `v0.4.721+1`  
**Task Anchor:** `E6:S07:T111` (--art adoption from E2:S01:T12 context)

---

## Summary

Change implemented: strict install telemetry event contract (`intent` / `action` / `result`), CLI install instrumentation, `ai-dev-kit logs validate-install-log`, user docs, and tests for FR-078 / E6:S07:T111. **FR-078 acceptance criteria remain pending post-release verification.**

---

## Changed

- `cli/logging.py` — install JSON event contract shape, validation, redaction-aware event emission helpers.
- `cli/commands/install.py` — structured install events and correlation metadata across the install pipeline.
- `cli/commands/logs.py` — `validate-install-log` for local install JSONL artifacts.
- `docs/documentation/user-docs/` — install logging and receipt references updated for the contract.
- `tests/cli/test_install_logging.py`, `tests/cli/test_logs_command.py` — coverage for contract and log validation.

---

## Traceability

- Epic: `6`
- Story: `7`
- Task: `111`
- FR: [FR-078](../../project-management/kanban/fr-br/FR-078-comprehensive-install-event-contract-logging-and-feedback-quality.md)
