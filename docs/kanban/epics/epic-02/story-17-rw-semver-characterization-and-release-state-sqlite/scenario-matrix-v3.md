# Scenario Matrix v3 — Nasty / AGT-adjacent (E02:S17 post-closure)

**Parent:** [scenario-matrix-v2.md](scenario-matrix-v2.md) · [scenario-matrix.md](scenario-matrix.md)  
**Friction:** [rw-semver-friction-report.md](rw-semver-friction-report.md)  
**Harness:** [`tests/rw_scenarios/test_t06_nasty_scenarios.py`](../../../../../../tests/rw_scenarios/test_t06_nasty_scenarios.py)

---

## Class H — Nasty scenarios (pattern-informed)

Designed from high-friction / collision patterns (BR-097, Pattern 2/6, S05/S07, V02).

| ID | Layer | Summary | Pattern | Expected | Harness |
| -- | ----- | ------- | ------- | -------- | ------- |
| **RW-HS08** | DET/AGT | Tag collision → wrong recovery (`tag -f`, `push -f`) blocked; recovery text prescribes BUILD+1 re-RW | 2, 6, BR-097, B07/S07 | ABORT@validator / recovery text | `TestNastyTagCollisionRecovery` |
| **RW-HS09** | DET/AGT | 10× local release dry-run push — per-tag refs only, never `--tags` | 6, V02 | PASS ×10; no bulk `--tags` | `TestNastyBatchPush` |
| **RW-HS10** | DET | Injected duplicate PATCH in registry — Step 9 injective gate blocks before tag | S05, S07, Pattern 2 | ABORT@9 | `TestNastyRegistryCollisionGate` |

---

## Relationship to v2

| v2 ID | v3 extension |
| ----- | ------------ |
| RW-HS07 | HS08 adds **prescribed recovery** vs **forbidden commands** matrix |
| RW-V02 (deferred AGT) | HS09 automates 10× dry-run batch push contract |
| RW-S05 (legacy YAML) | HS10 asserts Step 9 blocks tag path on collision |

---

## Still manual AGT (future v4)

| Scenario | Why manual |
| -------- | ---------- |
| Full agent RW after remote tag divergence | Requires live remote + agent session |
| CMW → RW perpetual chain | P02 multi-workflow |
| Wrong epic branch live RW | G05 dedicated worktree |

---

## Changelog

| Date | Change |
| ---- | ------ |
| 2026-06-07 | v3.0 — HS08–HS10 nasty scenarios (pattern-informed) |
