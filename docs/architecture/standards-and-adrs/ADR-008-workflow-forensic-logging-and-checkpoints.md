---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-30T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# ADR-008: Workflow Forensic Logging and Checkpoint Model

**Status:** Accepted  
**Date:** 2026-05-30  
**Deciders:** User (Ruari Mears)  
**Implementing task:** [E02:S08:T08](../../project-management/kanban/epics/Epic-2/Story-008-harden-release-workflow-reliability/T08-enhanced-workflow-forensic-logging-and-rollback-hardening-fr-059.md)  
**Origin FR:** [FR-059](../../project-management/kanban/fr-br/FR-059-enhanced-workflow-logging-system.md)  
**Planning package:** [IPP-E2S08T08](../../implementation-cycles/IPP-E2S08T08-forensic-logging-rollback-fr059.md)

---

## Context

Workflow execution in ai-dev-kit uses:

- **RWJournal** (`docs/journals/`) for Release Workflow step-level recovery ([FR-044](https://github.com/RMS-Ltd/ai-dev-kit) related work on E05:S01:T44 is a separate product slice).
- **WorkflowExecutor** with placeholder checkpoint/rollback methods.
- **RollbackContract** / **RecoveryReport** for conservative operator guidance.

FR-059 requires atomic command decomposition, structured forensic metadata, real checkpoints, and TTL-governed maintenance logs. Multiple architectural options exist (journal-only, executor-only, or layered hybrid).

---

## Decision

Adopt a **layered hybrid**:

1. **`forensic_log.py`** — single subprocess wrapper producing `AtomicCommandRecord` JSON with lifecycle metadata (`ttl_days: 7`, `lifecycle: ephemeral`, `housekeeping_policy: auto-delete`), stdout/stderr caps, and env-key redaction.
2. **Journal schema v1** — `RunEntry.schema_version = 1`; optional `StepEntry.command_records[]` for RW steps; backward compatible load (missing fields default empty).
3. **`checkpoint_store.py`** — manifests under `docs/journals/checkpoints/{checkpoint_id}/manifest.json` capturing git porcelain and timestamp; **no automatic** `git reset --hard` or force-push on rollback.
4. **WorkflowExecutor** — all subprocess entry points use `run_subprocess_logged`; checkpoints call `checkpoint_store.create_checkpoint`.
5. **Housekeeping** — `journal_housekeeping.sweep()` enforces TTL from `rw-config.yaml` (`journal_ttl_days`, `journal_failed_ttl_days`).
6. **Coordination** — FR-044 (RW temporary log file) and E02:S01:T23 (tool-agnostic tracker spec) remain out of scope; this ADR governs framework journal + executor forensic layer only.

---

## Consequences

### Positive

- One canonical forensic record shape for RW and sub-workflows.
- Operators get command timelines in recovery reports.
- Adopters can extend journal dir via `rw-config.yaml`.

### Negative

- Additional disk use until TTL sweep runs.
- Checkpoints record state but do not auto-revert git/kanban — operators follow RollbackContract.

### Compliance

- Forbidden commands in `rollback_contract.FORBIDDEN_COMMANDS` stay non-auto-executable.
- Documentation Agent jurisdiction extended in `AGENTS.md` for `docs/journals/` maintenance logs.

---

## Related

- [FR-058](../../project-management/kanban/fr-br/FR-058-markdown-maintenance-workflow.md) — log formatting consistency context
- [ADR-004](ADR-004-ipp-state-transition-contract.md) — task status transitions on implementation
