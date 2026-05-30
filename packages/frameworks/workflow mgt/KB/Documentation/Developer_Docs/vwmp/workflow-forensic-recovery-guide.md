---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-30T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Workflow Forensic Recovery Guide

**Authority:** [ADR-008](../../../../../../docs/architecture/standards-and-adrs/ADR-008-workflow-forensic-logging-and-checkpoints.md)  
**Implementing task:** E02:S08:T08 (FR-059)

---

## Log locations

| Artifact | Path |
| -------- | ---- |
| RW run journals | `docs/journals/rw-{run_id}-*.json` |
| Checkpoints | `docs/journals/checkpoints/{checkpoint_id}/manifest.json` |
| Rollback hints | `docs/journals/checkpoints/{checkpoint_id}/rollback_hint.json` |

Configure roots via `rw-config.yaml`: `journal_dir`, `journal_ttl_days`, `journal_failed_ttl_days`.

---

## Diagnosing a failed RW run

1. Find the latest journal: `python -m journal.rw_journal` helpers or list `docs/journals/rw-*.json`.
2. Build a recovery report from the failed `RunEntry` using `RecoveryReport.from_run_entry(run)`.
3. Read **Command Timeline (forensic)** for atomic argv/exit/duration.
4. Read **Rollback / Compensation Contract** from `RollbackContract.from_run(run).summary_markdown()`.

Never auto-run commands listed under forbidden actions (`git push --force`, `git reset --hard`, etc.).

---

## Checkpoints and rollback

- `WorkflowExecutor` creates a manifest before critical sub-workflows when `checkpoint=` is passed.
- `rollback_to_checkpoint` writes `rollback_hint.json` only — operators reconcile manually per contract.
- Compare `git_porcelain_at_checkpoint` vs `current_git_porcelain` in the hint file.

---

## Housekeeping

Run TTL sweep (default 7 days; failed runs 30 days):

```bash
python -c "from pathlib import Path; from journal.journal_housekeeping import sweep; print(sweep(Path('docs/journals')))"
```

Documentation Agent owns journal lifecycle per `docs/project-management/kanban/AGENTS.md`.

---

## Related work (out of scope here)

- **FR-044** — RW temporary execution log (E05:S01:T44)
- **E02:S01:T23** — tool-agnostic step tracker governance
