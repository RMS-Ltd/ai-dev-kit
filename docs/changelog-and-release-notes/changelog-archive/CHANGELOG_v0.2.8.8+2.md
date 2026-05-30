# Detailed Changelog — v0.2.8.8+2

**Release Date:** 2026-05-30 11:16:31 UTC  
**Version:** `v0.2.8.8+2`  
**SemVer:** `v0.4.831+2`  
**Task Anchor:** `E2:S08:T08`

---

## Summary

Change implemented: FR-059 layered forensic logging (`forensic_log`, journal schema v1, checkpoint manifests, TTL housekeeping), WorkflowExecutor integration, operator recovery guide, ADR-008, and consolidated IPP; pytest coverage for journal and executor paths.

---

## Added

- `packages/frameworks/workflow mgt/scripts/journal/forensic_log.py`, `checkpoint_store.py`, `journal_housekeeping.py`
- `docs/implementation-cycles/IPP-E2S08T08-forensic-logging-rollback-fr059.md`
- `docs/architecture/standards-and-adrs/ADR-008-workflow-forensic-logging-and-checkpoints.md`
- `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/workflow-forensic-recovery-guide.md`
- Tests: `tests/journal/test_forensic_log.py`, `test_checkpoint_store.py`, `test_journal_schema_and_recovery.py`, `tests/workflow/test_workflow_executor_forensic.py`

## Changed

- `rw_journal.py` — `schema_version`, `command_records` on steps
- `workflow_executor.py` — atomic subprocess logging and real checkpoints
- `recovery_report.py`, `rollback_contract.py` — command timeline surfaces
- `rw-config.yaml` — `journal_dir`, TTL keys
- Kanban: T08 IN PROGRESS, FR-059 IN PROGRESS, fbuboard IPP link

---

## Traceability

- Epic: `2`
- Story: `8`
- Task: `8`
