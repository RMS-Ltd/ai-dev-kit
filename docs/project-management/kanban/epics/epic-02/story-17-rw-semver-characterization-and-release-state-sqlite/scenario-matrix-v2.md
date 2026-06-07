# Scenario Matrix v2 — High-Stress Additions (E02:S17:T06)

**Parent:** [scenario-matrix.md](scenario-matrix.md) v1.0  
**Run log:** [high-stress-run-log.md](high-stress-run-log.md)  
**Harness:** [`tests/rw_scenarios/test_t06_high_stress.py`](../../../../../../tests/rw_scenarios/test_t06_high_stress.py)

---

## Class G — High-stress (T06)

| ID | Layer | Summary | Maps to v1 skip | Expected | Harness |
| -- | ----- | ------- | --------------- | -------- | ------- |
| **RW-HS01** | DET | 20× sequential finalize on sqlite backend | V01 extension | PASS; counter +20; injective | `test_RW_HS01_*` |
| **RW-HS02** | DET | `--dpz` doc-init on untagged BUILD 0 | RW-B04 | PASS; BUILD +0 | `test_RW_HS02_*` |
| **RW-HS03** | DET | `--dpz` rejected when VERSION_BUILD ≥ 1 | RW-B05 | ABORT@resolver | `test_RW_HS03_*` |
| **RW-HS04** | DET | `--dpz` blocked when HEAD BUILD tagged | RW-B05 variant | ABORT@resolver | `test_RW_HS04_*` |
| **RW-HS05** | DET | Perpetual high BUILD (51) no false abort | RW-P03 | PASS | `test_RW_HS05_*` |
| **RW-HS06** | DET | Production registry import + 100× lookup burst | RW-V04 extension | PASS; lookup <5ms | `test_RW_HS06_*` |
| **RW-HS07** | DET | `git push --tags` immutability gap | Pattern 6 | PASS (gap documented) | `test_RW_HS07_*` |

---

## Deferred to manual AGT (T06 scope note)

| v1 ID | Reason |
| ----- | ------ |
| RW-G01 | Missing task token — agent contract; no deterministic script |
| RW-G02 | TODO task fixture — covered by IPW-P04 |
| RW-G05 | Wrong epic branch — needs dedicated epic/7 worktree |
| RW-P02 | CMW perpetual chain — requires CMW + RW sequence |
| RW-V02 | Batch operator push — 10 commits + single push (AGT) |

---

## Changelog

| Date | Change |
| ---- | ------ |
| 2026-06-07 | v2.0 — Class G high-stress (7 scenarios); T06 execution |
| 2026-06-07 | v3.0 — Class H nasty (HS08–HS10); see [scenario-matrix-v3.md](scenario-matrix-v3.md) |
