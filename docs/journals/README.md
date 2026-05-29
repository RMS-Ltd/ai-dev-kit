# RW Journals

This directory contains per-run journals, recovery reports, and rollback artifacts produced by the Release Workflow (RW).

## Directory Layout

```
docs/journals/
├── README.md                          (this file)
├── JOURNAL_SCHEMA.md                  (JSON schema reference)
├── RECOVERY_PROCEDURE.md              (operator rerun guide)
├── ROLLBACK_CONTRACT.md               (automatic vs manual rollback)
└── rw-{run_id}-{timestamp}.json      (per-run journal)
├── rw-{run_id}-{timestamp}-recovery.md   (human-readable recovery report)
└── rw-{run_id}-{timestamp}-recovery.json (machine-readable recovery report)
```

## Quick Start for Operators

1. **A run failed.** Locate the latest recovery report:
   ```bash
   python -m "packages/frameworks/workflow mgt/scripts/journal" list
   ```
2. **Read the recovery report** to see which step failed and what artifacts were touched.
3. **Follow `RECOVERY_PROCEDURE.md`** for deterministic rerun guidance.
4. **Review `ROLLBACK_CONTRACT.md`** before attempting any automatic revert steps.

## Journal File Format

Each `.json` journal is a single immutable record of one RW execution. It contains:

- `run_id`: UUIDv4 identifying this run.
- `started_at`: ISO-8601 timestamp when the run began.
- `ended_at`: ISO-8601 timestamp when the run finished (or null if aborted).
- `status`: `"success"`, `"failed"`, or `"aborted"`.
- `task_id`: The E:S:T token that triggered this run (e.g. `E6:S06:T63`).
- `steps`: Ordered list of step records, each with `name`, `status`, `exit_code`, `commands`, `touched_files`, and `timestamp`.

See `JOURNAL_SCHEMA.md` for the full schema definition and versioning policy.

## Safety Notes

- Journal files are **append-only during a run** and **immutable after**.
- Recovery reports **never contain secrets** (tokens, credentials).
- Rollback guidance **never recommends force-push or destructive remote history changes**.
- If `docs/journals/` is unwritable, the RW continues with a warning; recovery artifacts must then be reconstructed from agent session logs.

## Committing Journals

- **Do not commit runtime `rw-*` artifacts to version control.** The operator docs (`README.md`, `JOURNAL_SCHEMA.md`, `RECOVERY_PROCEDURE.md`, `ROLLBACK_CONTRACT.md`) are the only files in this directory that belong in version control.
- `.gitignore` exclusions are in place at the repository root for `docs/journals/rw-*.json`, `docs/journals/rw-*-recovery.json`, and `docs/journals/rw-*-recovery.md`.
- If you run tests or manual simulations that write to this directory, verify no `rw-*` files are staged before committing.

## Housekeeping

- Old journal files are not automatically purged. Add a CI job or cron rule if retention limits are needed.
