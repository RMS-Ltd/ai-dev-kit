# Migration Manifest — Legacy MD/YAML → SQLite (E02:S17:T03)

**Version:** v1.0 (2026-06-07)  
**Schema:** [sqlite-schema-design.md](sqlite-schema-design.md)  
**IPP:** [IPP-E02S17T03-sqlite-release-state-schema.md](../../../../implementation-cycles/IPP-E02S17T03-sqlite-release-state-schema.md)

---

## 1. Preconditions

- [ ] `release_state_db` path writable (default `.adk/release-state.db`)
- [ ] Copy of production `semver-registry.yaml` and `docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v*.md` available
- [ ] Git worktree or branch isolated from live RW (characterization harness pattern)
- [ ] `release_state_backend: legacy` until T05 parity passes

---

## 2. Import sequence (idempotent)

| Step | Script / action | Source | Target table(s) | Idempotency |
| ---- | --------------- | ------ | --------------- | ----------- |
| I1 | `init_release_state_db.py` | `schema.sql` | `schema_version` | Skip if version ≥1 |
| I2 | Parse `rc_0` root | `semver-registry.yaml` | `semver_rc` | UPSERT rc=0 |
| I3 | Import `epic_to_minor` | YAML `rc_0.epic_to_minor` | `epic_to_minor` | DELETE+INSERT rc=0 |
| I4 | Import `story_to_patch` | YAML `rc_0.story_to_patch` | `story_to_patch` | DELETE+INSERT rc=0 |
| I5 | Import task_touch | YAML `rc_0.task_touch_mode` | `task_touch_state`, `task_touch_mapping` | UPSERT state; INSERT OR IGNORE mappings |
| I6 | Scan changelog archive | `CHANGELOG_v*.md` glob | `changelog_entry` | INSERT OR IGNORE by `internal_version` |
| I7 | Record metadata | git HEAD, branch | `release_metadata` | One row per imported release (optional) |
| I8 | Validate counts | — | — | mapping count = len(mapping_history); counter match |

**Validation gate (blocking):**

```bash
python packages/frameworks/workflow-mgt/scripts/release_state/validate_import.py \
  --yaml semver-registry.yaml \
  --db .adk/release-state.db
```

Expected: exit 0; counter=1042; mapping rows=308 (current production audit).

---

## 3. Export sequence (round-trip)

| Step | Script | Target | Validator |
| ---- | ------ | ------ | --------- |
| E1 | `export_legacy_release_state.py --db .adk/release-state.db --yaml-out /tmp/registry-export.yaml` | YAML | Semantic diff vs source |
| E2 | Export changelog archive rows | `CHANGELOG_v*.md` files | `validate_changelog_format.py` |
| E3 | Run full RW Step 9 suite against exported paths | — | All blocking validators green |

**Round-trip test (T04):**

```bash
python -m pytest tests/release_state/test_export_roundtrip.py -v
```

---

## 4. Validator checklist (post-import / post-export)

| Validator | Legacy path | SQLite path | Parity required |
| --------- | ----------- | ----------- | --------------- |
| `validate_semver_registry_injective.py` | YAML | export YAML | ✅ |
| `validate_task_touch_release_contract.py --strict` | staged YAML | export + stage | ✅ |
| `validate_version_bump.py --strict` | version.py + story | unchanged | ✅ |
| `validate_changelog_format.py` | CHANGELOG.md | export MD | ✅ |
| `check_changelog_size.py` | line count | `SELECT COUNT(*) FROM changelog_entry` | advisory |
| RW-V04 benchmark | yaml.safe_load | indexed SELECT | SQLite faster |

---

## 5. Rollback

1. Set `release_state_backend: legacy` in `rw-config.yaml`
2. Delete or rename `.adk/release-state.db`
3. Legacy YAML/MD remain authoritative (never deleted in T03/T04)

---

## 6. T05 parity replay hook

For each scenario ID in [scenario-matrix.md](scenario-matrix.md):

1. Run with `backend=legacy` (baseline column — complete)
2. Reset worktree; import fresh DB; set `backend=sqlite`
3. Replay scenario; compare `internal_version`, SemVer, validator exit codes
4. Append row to `baseline-run-log.md` with `backend=sqlite`

---

## 7. Implementation ownership

| Phase | Task | Owner step |
| ----- | ---- | ---------- |
| Design | This manifest + schema | T03 (this IPW) |
| Import/export scripts | `release_state/` module | T04 |
| Proof on production copy | validate_import + roundtrip tests | T03 AC2/AC3 closure |
| Cutover | Config switch + T05 parity | T05 |
