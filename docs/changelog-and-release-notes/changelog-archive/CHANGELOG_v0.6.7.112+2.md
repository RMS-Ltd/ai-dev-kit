# Detailed Changelog — v0.6.7.112+2

**Release Date:** 2026-04-10 10:06:01 UTC  
**Version:** `v0.6.7.112+2`  
**SemVer:** `v0.4.726+2`  
**Task Anchor:** `E6:S07:T112` (`--art` adoption)

---

## Summary

Change implemented: completed install feedback submission path and governance with deterministic payload packaging/validation/submission outcomes, redaction checks, and maintainer triage mapping.

---

## Changed

- Added `ai-dev-kit logs prepare-feedback-payload` to package validated install telemetry into a deterministic feedback payload.
- Added `ai-dev-kit logs validate-feedback-payload` for schema/readiness checks with actionable diagnostics.
- Added `ai-dev-kit logs submit-feedback-payload` for deterministic outcome handling (`accepted`, `needs-redaction`, `needs-more-context`, `rejected`) and local submission receipt generation.
- Added CLI tests for payload prepare/validate/submit happy-path and failure-path behavior.
- Updated user documentation for feedback payload workflow and outcome semantics.

---

## Traceability

- Epic: `6`
- Story: `7`
- Task: `112`
- FR: [FR-079](../../project-management/kanban/fr-br/FR-079-install-feedback-submission-path-and-governance.md)
