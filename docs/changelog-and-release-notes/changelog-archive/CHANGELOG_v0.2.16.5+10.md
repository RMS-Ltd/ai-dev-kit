# CHANGELOG_v0.2.16.5+10

**Release Date:** 2026-06-15 19:07:12 UTC

## Release Summary

`RW E02:S16:T05 --art` — Wave 8 CI hygiene: harden SAA SQLite migration concurrency so parallel `open_db` / `allocate()` no longer flakes under full-suite Step 9.7 (`database is locked` / duplicate-column races). Closes BR-104 TC1 locally.

## Internal and SemVer

- Internal version: `0.2.16.5+10`
- SemVer (`task_touch`): `0.4.1174+10`

## Included Changes

### Attempted fix — release-state migration concurrency (BR-104)

- `release_state/db.py` — per-DB-path `threading.Lock` serializes `init_schema` + `run_migrations` in `open_db()`
- `release_state/migrate.py` — re-check `schema_version` inside `BEGIN IMMEDIATE` before applying `migrate_to_v2`
- `greenfield-install/` mirror sync (FR-110)

### Root cause (identified)

- Wave 4 `BEGIN IMMEDIATE` + duplicate-column guard was insufficient under 8-thread parallel `allocate()` when Step 9.7 runs the full pytest suite (~920 tests)
- Symptom: `test_parallel_open_db_migrations_no_duplicate_column` failed with `sqlite3.OperationalError: database is locked`

## Verification

- Local: `validate_actions_ci_parity.py --strict --all` — 921 tests passed (incl. migration concurrency test)
- Local: full `pytest tests/` — 921 passed
- Post-push: re-check [GitHub Actions](https://github.com/RMS-Ltd/ai-dev-kit/actions) on `dev`

## Kanban

- E02:S16:T05 perpetual CI health lane (FR-112)
- BR-104 TC1 verified locally
