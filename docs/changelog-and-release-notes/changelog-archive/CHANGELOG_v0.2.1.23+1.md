# Changelog — v0.2.1.23+1

**Release Date:** 2026-05-30 17:02:51 UTC  
**Epic:** 2 | **Story:** 1 | **Task:** 23  
**SemVer:** v0.4.841+1  
**Summary:** Tool-agnostic Workflow Step Tracker (ADR-011) + agent run log v1 schema + governance sweep

---

## Summary

**E02:S01:T23** (`RW --art`): Replace Cursor-only `todo_write` mandates with the **Workflow Step Tracker** contract, publish **spec-only** agent run log v1 (JSON schema + example), and sweep RW/UKW/workflow governance docs with dual-source parity. Distinct from ADR-008 forensic journals.

---

## Added

- [ADR-011](docs/architecture/standards-and-adrs/ADR-011-workflow-step-tracker-and-agent-run-log.md)
- [workflow-step-tracker-contract.md](packages/frameworks/workflow%20mgt/KB/Documentation/Developer_Docs/vwmp/workflow-step-tracker-contract.md)
- [workflow-agent-run-log-v1.schema.json](docs/architecture/standards-and-adrs/schemas/workflow-agent-run-log-v1.schema.json) + example
- [IPP-E2S01T23](docs/implementation-cycles/IPP-E2S01T23-tool-agnostic-workflow-step-tracking-runlogs.md)
- `tests/docs/test_workflow_step_tracker_governance.py` (TC1–TC6)

## Changed

- `.cursorrules`, portable RW/UKW excerpts, 9 workflow agent execution guides
- RW Step 17 housekeeping (agent run log finalization + tool-agnostic tracker cleanup)
- `workflow-hardening-guide.md`, ADR-008 Related, forensic recovery guide boundary notes

---

**Task:** [E02:S01:T23](docs/project-management/kanban/epics/Epic-2/Story-001-rw-agent-execution-and-docs/T23-tool-agnostic-workflow-step-tracking-and-runlogs.md)
