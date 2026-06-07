# Baseline Run Log (E02:S17:T02)

**Schema:** [run-log-schema.md](run-log-schema.md)  
**Matrix:** [scenario-matrix.md](scenario-matrix.md)  
**Harness:** [`tests/rw_scenarios/test_wave1_baseline.py`](../../../../../../tests/rw_scenarios/test_wave1_baseline.py)

---

## Status

**Wave 1 complete** (2026-06-07) — 8/8 deterministic scenarios PASS via pytest.  
Wave 2–4 pending.

---

## Wave 1 results (legacy backend)

| run_id | scenario_id | backend | layer | outcome | version_before | version_after | semver_after | abort_step | friction_notes |
| ------ | ----------- | ------- | ----- | ------- | -------------- | ------------- | ------------ | ---------- | -------------- |
| RW-G03-legacy-20260607-1717 | RW-G03 | legacy | DET | ABORT | 0.2.16.10+6 | — | — | 1d | Live RW: intent mismatch without `--art` (BR-056) |
| RW-G04-legacy-20260607-1717 | RW-G04 | legacy | DET | PASS | 0.2.16.10+6 | 0.2.17.1+1 | 0.4.1037+1 | — | Live RW: `--art` adoption on spike branch |
| RW-B01-legacy-20260607-1730 | RW-B01 | legacy | DET | PASS | 0.2.17.1+2 | — | — | — | pytest: untagged HEAD → BUILD +1 (`same_task_build_plus_one`) |
| RW-B02-legacy-20260607-1730 | RW-B02 | legacy | DET | PASS | 0.2.17.1+2 | 0.2.17.1+3 | — | — | pytest: tagged HEAD → BUILD +1 not reuse |
| RW-B03-legacy-20260607-1730 | RW-B03 | legacy | DET | ABORT | 0.2.17.1+2 | — | — | 9 | pytest: `validate_tagged_build_collision` blocks BUILD reuse |
| RW-B06-legacy-20260607-1730 | RW-B06 | legacy | DET | PASS | 0.2.16.10+6 | 0.2.17.1+1 | — | — | pytest: `--art` → `art_first_build` |
| RW-S01-legacy-20260607-1730 | RW-S01 | legacy | DET | PASS | counter=10 | counter=11 | PATCH=11 | — | pytest: task_touch finalize increments counter |
| RW-S02-legacy-20260607-1730 | RW-S02 | legacy | DET | PASS | counter=100 | counter=103 | 101/102/103 | — | pytest: 3× finalize → injective PATCH sequence |
| RW-G03-legacy-20260607-1730 | RW-G03 | legacy | DET | ABORT | E02:S16:T10 | — | — | 1d | pytest: `--version-file` fixture mismatch |
| RW-G04-legacy-20260607-1730 | RW-G04 | legacy | DET | PASS | E02:S16:T10 | — | — | — | pytest: `--art` passes intent gate |

---

## Wave 1 pattern notes (→ T06)

See [baseline-pattern-notes.md](baseline-pattern-notes.md).

---

*Append Wave 2+ rows as scenarios execute.*
