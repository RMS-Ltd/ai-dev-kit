# Parity Diff Report (E02:S17:T05)

**Run log:** [parity-run-log.md](parity-run-log.md)  
**Baseline:** [baseline-run-log.md](baseline-run-log.md)

---

## Summary

| Category | Count |
| -------- | ----- |
| Scenario IDs in matrix | 32 |
| Attempted on sqlite path | 32 |
| Registry semver/counter **match** | 5 (S01, S02, S04, S06, V01) |
| Backend-agnostic **match** | 18 |
| **Explained** divergences | 1 (S05) |
| SKIP (T06 deferred) | 7 |
| **Unexplained** mismatches | **0** |

**AC2:** Zero unexplained SemVer mapping or BUILD invariant mismatches.

---

## Explained divergence: RW-S05

| Aspect | Legacy | SQLite |
| ------ | ------ | ------ |
| Collision injection | Duplicate PATCH rows in YAML file | Import dedupes history; 1 row retained |
| Detection | `validate_semver_registry_injective.py` exit ≠ 0 | Validator exit 0 after deduped import |
| Write-time guard | N/A (file can hold invalid state) | `UNIQUE (rc, patch)` on `task_touch_mapping` |

**Rationale:** SQLite prevents invalid PATCH collisions at **import dedupe** and **DB constraint** layers rather than post-hoc YAML audit. Invariant outcome is the same: production registry cannot ship with duplicate PATCH values.

**Tests:** `test_RW_S05_sqlite_import_dedupes_yaml_collision` · `test_RW_S05_sqlite_unique_patch_constraint`

**Accept:** Documented; not a SemVer/BUILD mapping mismatch for valid release paths.

---

## Validators (AC3)

| Validator | sqlite mode | baseline parity |
| --------- | ----------- | --------------- |
| `validate_semver_registry_injective.py` | Uses `load_semver_registry()` → sqlite | PASS on clean registry |
| `validate_task_touch_release_contract.py --strict` | Staged `.adk/release-state.db` | Covered in T04 AC2 tests |
| BUILD / intent / tag validators | No registry backend | Identical to legacy pytest |

---

## Performance (AC4)

Production registry (`semver-registry.yaml` → sqlite import):

- **YAML parse:** ~188 ms average (5× loop, wave 4 baseline)
- **SQLite lookup:** sub-millisecond per `lookup_semver_by_internal` (50× loop)

SQLite wins on read path; import is one-time at migration. Full RW latency dominated by git/validators, not registry I/O.

---

## No action required

All other scenario IDs either match exactly or are backend-agnostic / SKIP with documented T02 rationale.

**Next:** T06 high-stress matrix v2; optional sqlite default flip after story closure.
