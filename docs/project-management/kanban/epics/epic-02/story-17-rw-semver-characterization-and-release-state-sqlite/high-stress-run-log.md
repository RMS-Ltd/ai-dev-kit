# High-Stress Run Log (E02:S17:T06)

**Matrix v2:** [scenario-matrix-v2.md](scenario-matrix-v2.md)  
**Harness:** [`tests/rw_scenarios/test_t06_high_stress.py`](../../../../../../tests/rw_scenarios/test_t06_high_stress.py)

---

## Status

**T06 execution** (2026-06-07) — 7/7 Class G scenarios PASS via pytest (14 tests including registration).

---

## Results

| run_id | scenario_id | backend | layer | outcome | friction_notes |
| ------ | ----------- | ------- | ----- | ------- | -------------- |
| RW-HS01-20260607-1830 | RW-HS01 | sqlite | DET | PASS | 20× finalize; patches 901–920; counter monotonic |
| RW-HS02-20260607-1830 | RW-HS02 | legacy | DET | PASS | `--dpz` + `--art`; BUILD +0 on untagged doc-init (deferred B04) |
| RW-HS03-20260607-1830 | RW-HS03 | legacy | DET | ABORT | `--dpz` rejected when BUILD≥1 (deferred B05) |
| RW-HS04-20260607-1830 | RW-HS04 | legacy | DET | ABORT | `--dpz` blocked when HEAD BUILD tagged |
| RW-HS05-20260607-1830 | RW-HS05 | legacy | DET | PASS | Perpetual BUILD 51 after HEAD 50; BR-075 satisfied (deferred P03) |
| RW-HS06-20260607-1830 | RW-HS06 | sqlite | DET | PASS | Production registry import + 100× lookup <5ms avg |
| RW-HS07-20260607-1830 | RW-HS07 | legacy | DET | PASS* | `git push --tags` **not** blocked — documents Pattern 6 gap |

\*Expected PASS on validator today; friction item for follow-on hardening.

---

## Manual AGT deferred (v1 skips)

| scenario_id | defer_rationale |
| ----------- | --------------- |
| RW-G01 | Missing E:S:T token — agent contract only |
| RW-G02 | TODO task gate — IPW-P04 covers |
| RW-G05 | Wrong epic branch fixture |
| RW-P02 | CMW → RW perpetual chain |
| RW-V02 | 10 local commits + batch push |
