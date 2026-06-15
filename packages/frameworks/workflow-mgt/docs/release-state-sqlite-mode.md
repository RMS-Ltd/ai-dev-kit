# Release-state SQLite mode (E02:S17:T04 / T07)

**ai-dev-kit production default** since `v0.2.17.7+1` (E02:S17:T07). Legacy YAML archived at `docs/changelog-and-release-notes/changelog-archive/semver-registry-legacy-final.yaml`.

When `rw-config.yaml` sets `release_state_backend: sqlite`:

## Setup (once per worktree)

**Greenfield (no legacy YAML):**

```bash
python packages/frameworks/workflow-mgt/scripts/release_state/init_release_state_db.py \
  --project-root .
```

**Brownfield import from legacy YAML:**

```bash
python packages/frameworks/workflow-mgt/scripts/release_state/import_legacy.py \
  --validate --skip-changelog
```

**Orchestrator:** `install_greenfield_path.py --init-sqlite` runs the appropriate step automatically.

## RW Steps 2–11 (registry)

| Step | Legacy | SQLite |
| ---- | ------ | ------ |
| 2.5 finalize | writes `semver-registry.yaml` | writes `.adk/release-state.db` only |
| 5 README SemVer | reads registry via converter | same (`load_semver_registry`) |
| 8 stage | `git add semver-registry.yaml` | `git add .adk/release-state.db` |
| 9 injective | reads YAML or DB via converter | reads DB when backend=sqlite |
| 9 contract | staged YAML row | staged DB file |

**Do not** edit `semver-registry.yaml` during sqlite-mode RW. Changelog MD writes unchanged (phase 1).

## Export (rollback / parity)

```bash
python packages/frameworks/workflow-mgt/scripts/release_state/export_legacy.py \
  --yaml-out /tmp/registry-export.yaml
```

## Tests

- `tests/release_state/test_sqlite_mode_rw_ac.py` — AC1/AC2
- `tests/release_state/test_import_export_roundtrip.py` — round-trip
