# Integration Test Report — E02:S17 RW SemVer Characterization

**Date:** 2026-06-07  
**Branch:** `dev` (post sign-off RW)  
**Records:** [`test-records/`](test-records/)  
**Sign-off:** 2026-06-07 — operator approved integration; spike → dev PR filed

---

## Executive summary

Three pytest waves executed on **`dev`** (local; **not pushed**). **91 tests, 0 failures.**

| Set | Harness | Tests | Fail | Artifacts |
| --- | ------- | ----- | ---- | --------- |
| **A — Legacy baseline** | `test_wave1`–`test_wave4` | 36 | 0 | [wave-legacy-baseline.log](test-records/wave-legacy-baseline.log) |
| **B — SQLite / parity / release_state** | `test_t05_parity*`, `tests/release_state/` | 29 | 0 | [wave-sqlite-parity.log](test-records/wave-sqlite-parity.log) |
| **C — High-stress + nasty (v2/v3)** | `test_t06_high_stress`, `test_t06_nasty` | 26 | 0 | [wave-stress-nasty.log](test-records/wave-stress-nasty.log) |

**Conclusion:** Legacy and SQLite paths are **consistent** on shared invariants (semver/counter/idempotency). One **documented** divergence (RW-S05 collision detection). Three **known gaps** remain (bulk `--tags`, manual AGT scenarios, deferred v1 skips).

---

## Set A vs Set B — comparative analysis

### Shared scenario IDs (legacy executed in A; sqlite parity in B)

| Scenario | Set A (legacy) | Set B (sqlite) | Parity |
| -------- | -------------- | -------------- | ------ |
| RW-S01 | PASS — counter +1 finalize | PASS — legacy vs sqlite semver match | **match** |
| RW-S02 | PASS — 3× injective PATCH | PASS — same patch sequence | **match** |
| RW-S04 | PASS — finalize boundary | PASS — counter held on read-only lookup | **match** |
| RW-S06 | PASS — idempotent finalize | PASS — created True then False | **match** |
| RW-V01 | PASS — 10× finalize | PASS — 10× sqlite finalize | **match** |
| RW-S05 | PASS — YAML injective **ABORT** on duplicate PATCH | PASS — import **dedupes**; UNIQUE constraint | **explained divergence** |

### Set A only (backend-agnostic; no sqlite storage path)

BUILD (B01–B03, B06, B07, B08), gates (G03, G04, G06), IPW (P01–P04), volume (V03), operator (P01, S07), S03 — **36 tests** cover **~25 unique scenario IDs**. These do not require sqlite replay; behaviour is validator/resolver/git scoped.

### Set B only (sqlite infrastructure)

- Import/export roundtrip (production registry)
- AC1: finalize does not mutate legacy YAML when `release_state_backend: sqlite`
- AC2: validators pass after sqlite finalize
- Skipped-baseline **meta-tests** (B04, B05, G01, G02, G05, P02, P03) — document deferral, not executed runs

### Performance (both sets)

| Metric | Set A (RW-V04) | Set B (HS06 / V04 ext) |
| ------ | -------------- | ---------------------- |
| YAML parse (production) | ~188 ms (5× avg) | — |
| SQLite lookup | benchmark in wave4 | <5 ms (100× avg) |
| SQLite import | — | <5 s one-time |

---

## Set C — stress / nasty (extends both sets)

| ID | Outcome class | Notes |
| -- | ------------- | ----- |
| HS01 | PASS | 20× sqlite finalize burst |
| HS02 | PASS | `--dpz` BUILD +0 |
| HS03, HS04 | **Expected ABORT** (pytest PASS) | Resolver blocks bad `--dpz` |
| HS05 | PASS | Perpetual BUILD 51 |
| HS06 | PASS | Production import + lookup perf |
| HS07 | PASS (gap doc) | `git push --tags` **not** blocked |
| HS08 | **Expected ABORT** (pytest PASS) | Force-tag commands blocked |
| HS09 | PASS | 10× per-tag push, never `--tags` |
| HS10 | **Expected ABORT** (pytest PASS) | Duplicate PATCH blocks Step 9 |

Set C closes deferred v1 skips **B04, B05, P03** (via HS02–HS05) and strengthens **B07/S07/V02** (via HS08–HS09).

---

## Cross-set conclusions

1. **Ready for integration sign-off (automated):** 91/91 pytest on `dev`; release validators (injective, task-touch contract, readiness gates) pass.
2. **Legacy ↔ SQLite:** Zero unexplained semver/BUILD mismatches on parity scenarios; S05 divergence is intentional (write-time vs audit-time collision handling).
3. **Friction confirmed by tests:** Pattern 6 (`--tags` bulk push) — HS07 passes immutability today; **follow-on FR recommended**.
4. **Not covered by pytest:** G01, G02, G05, P02, V02 full AGT, live remote tag divergence — remain manual/deferred per [scenario-matrix-v3.md](scenario-matrix-v3.md).
5. **Parallel vs sequential execution:** Waves ran in separate pytest processes; isolated `tmp_path` fixtures — **order/parallelism does not affect result validity** (see discussion in session).

---

## Sign-off checklist (operator)

- [x] Set A legacy baseline — 36/36 PASS
- [x] Set B sqlite parity + release_state — 29/29 PASS
- [x] Set C stress/nasty — 26/26 PASS
- [x] Full `pytest tests/` — 521 passed (prior session)
- [x] Manual AGT spot-check (optional) — deferred; automated 91/91 sufficient for spike integration
- [x] Policy: sqlite default vs legacy — **legacy remains default** (`release_state_backend: legacy`); sqlite opt-in per T04 design
- [x] **Push / PR** — spike → `dev` PR filed; `dev` → `main` follow-on after merge

---

## Subagent execution

Wave runs recorded by parallel shell subagents on 2026-06-07: [legacy baseline](8571163f-c14f-4e7d-b7c6-2f0e7a0946b4), [sqlite parity](1ac9f615-e12a-4443-a494-13646196c6f9), [stress/nasty](4230a06d-2284-4b69-ba9b-f3cd6a99ba92).
