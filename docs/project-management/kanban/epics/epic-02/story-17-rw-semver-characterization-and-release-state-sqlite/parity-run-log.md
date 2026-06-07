# Parity Run Log (E02:S17:T05)

**Schema:** [run-log-schema.md](run-log-schema.md)  
**Baseline:** [baseline-run-log.md](baseline-run-log.md)  
**Harness:** [`tests/rw_scenarios/test_t05_parity.py`](../../../../../../tests/rw_scenarios/test_t05_parity.py) · [`parity_harness.py`](../../../../../../tests/rw_scenarios/parity_harness.py)

---

## Status

**T05 implementation** (2026-06-07) — 32/32 scenario IDs attempted on SQLite path (7 SKIP with T02 rationale; 6 registry parity PASS; 19 backend-agnostic match).

**pytest:** 56 passed (`test_t05_parity*.py` + wave 1–4 baseline).

---

## Registry parity (legacy vs sqlite side-by-side)

| run_id | scenario_id | backend | layer | outcome | semver / counter | parity_match | friction_notes |
| ------ | ----------- | ------- | ----- | ------- | ---------------- | ------------ | -------------- |
| RW-S01-sqlite-20260607-1900 | RW-S01 | sqlite | DET | PASS | counter 10→11; PATCH=11 | match | `test_t05_parity.py::test_RW_S01_parity` |
| RW-S02-sqlite-20260607-1900 | RW-S02 | sqlite | DET | PASS | 3× finalize; patches match legacy | match | Same semver sequence as baseline |
| RW-S04-sqlite-20260607-1900 | RW-S04 | sqlite | DET | PASS | finalize=False holds counter | match | Boundary identical to wave2 |
| RW-S06-sqlite-20260607-1900 | RW-S06 | sqlite | DET | PASS | idempotent re-finalize | match | created=True then False |
| RW-V01-sqlite-20260607-1900 | RW-V01 | sqlite | DET | PASS | 10× finalize; counter 710 | match | Full patch list equals legacy |
| RW-S05-sqlite-20260607-1900 | RW-S05 | sqlite | DET | PASS* | import dedupes YAML collision | explained | See [parity-diff-report.md](parity-diff-report.md) §S05 |

---

## Backend-agnostic scenarios (sqlite = legacy outcome class)

These scenarios do not read/write semver registry storage; wave 1–4 pytest harness is backend-independent.

| scenario_id | sqlite attempt | baseline outcome | parity_match | harness |
| ----------- | -------------- | ---------------- | ------------ | ------- |
| RW-B01 | DET pytest | PASS | match | `test_wave1_baseline.py` |
| RW-B02 | DET pytest | PASS | match | `test_wave1_baseline.py` |
| RW-B03 | DET pytest | ABORT@9 | match | `test_wave1_baseline.py` |
| RW-B06 | DET pytest | PASS | match | `test_wave1_baseline.py` |
| RW-B07 | DET pytest | ABORT | match | `test_wave3_baseline.py` |
| RW-B08 | DET pytest | PASS | match | `test_wave3_baseline.py` |
| RW-S03 | DET pytest | PASS | match | `test_wave2_baseline.py` |
| RW-G03 | DET pytest | ABORT@1d | match | `test_wave1_baseline.py` |
| RW-G04 | DET pytest | PASS | match | `test_wave1_baseline.py` |
| RW-G06 | DET pytest | PASS | match | `test_wave3_baseline.py` |
| RW-P01 | DET pytest | PASS | match | `test_wave3_baseline.py` |
| RW-S07 | DET pytest | PASS | match | `test_wave3_baseline.py` |
| RW-V02 | DET partial | PASS | match | `test_wave3_baseline.py` |
| RW-V03 | DET pytest | PASS (advisory) | match | `test_wave4_baseline.py` |
| IPW-P01 | DET pytest | PASS | match | `test_wave4_baseline.py` |
| IPW-P02 | DET pytest | PASS | match | `test_wave4_baseline.py` |
| IPW-P03 | DET pytest | PASS | match | `test_wave4_baseline.py` |
| IPW-P04 | DET pytest | PASS | match | `test_wave4_baseline.py` |

---

## Performance (RW-V04 extension)

| metric | legacy (YAML) | sqlite | notes |
| ------ | ------------- | ------ | ----- |
| registry load / lookup | ~188 ms (5× avg parse) | <1 ms (50× indexed lookup) | `test_wave4_baseline.py`; sqlite import once then `lookup_semver_by_internal` |

---

## Skipped (same as T02 — deferred to T06)

| scenario_id | layer | skip_rationale | parity_match |
| ----------- | ----- | -------------- | ------------ |
| RW-B04 | DET | `--dpz` doc-init; spike uses BUILD+1 only | n/a |
| RW-B05 | DET | `--dpz` rejection when BUILD tagged | n/a |
| RW-G01 | DET | Missing token gate; spec-only | n/a |
| RW-G02 | DET | TODO task gate fixture | n/a |
| RW-G05 | DET | Wrong epic branch fixture | n/a |
| RW-P02 | DET | CMW perpetual chain | n/a |
| RW-P03 | DET | Perpetual high-BUILD suppression | n/a |

---

## AGT scenarios (manual follow-up unchanged)

| scenario_id | sqlite attempt | notes |
| ----------- | -------------- | ----- |
| RW-B07 | DET partial | Full agent recovery → T06 |
| RW-V02 | DET partial | Batch operator push → T06 |
| RW-P01 | DET partial | UKW→RW chain → T06 |
| RW-S07 | DET partial | Live collision recovery → T06 |
| IPW-P01–P03 | DET/AGT | Planning gate; no registry path |
