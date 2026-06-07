# Baseline Run Log (E02:S17:T02)

**Schema:** [run-log-schema.md](run-log-schema.md)  
**Matrix:** [scenario-matrix.md](scenario-matrix.md)  
**Harness:** [`tests/rw_scenarios/test_wave1_baseline.py`](../../../../../../tests/rw_scenarios/test_wave1_baseline.py)

---

## Status

**Wave 1 complete** (2026-06-07) — 8/8 deterministic scenarios PASS via pytest.  
**Wave 2 complete** (2026-06-07) — 5/5 scenarios PASS via `test_wave2_baseline.py`.  
**Wave 3 complete** (2026-06-07) — 8/8 pytest checks PASS via `test_wave3_baseline.py` (6 scenario IDs + 2 guard tests).  
**Wave 4 complete** (2026-06-07) — 6/6 pytest checks PASS via `test_wave4_baseline.py`.

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

## Wave 2 results (legacy backend)

| run_id | scenario_id | backend | layer | outcome | friction_notes |
| ------ | ----------- | ------- | ----- | ------- | -------------- |
| RW-S03-legacy-20260607-1735 | RW-S03 | legacy | DET | PASS | `--art` T01→T02: BUILD 1, internal `0.2.17.2+1` |
| RW-S04-legacy-20260607-1735 | RW-S04 | legacy | DET | PASS | finalize=False holds counter; finalize=True +1 |
| RW-S05-legacy-20260607-1735 | RW-S05 | legacy | DET | ABORT | Injected PATCH collision; validator exit ≠ 0 |
| RW-S06-legacy-20260607-1735 | RW-S06 | legacy | DET | PASS | finalize creates mapping; idempotent re-finalize |
| RW-V01-legacy-20260607-1735 | RW-V01 | legacy | DET | PASS | 10× finalize → patches 701–710, counter 710 |

---

## Wave 3 results (legacy backend)

| run_id | scenario_id | backend | layer | outcome | friction_notes |
| ------ | ----------- | ------- | ----- | ------- | -------------- |
| RW-B07-legacy-20260607-1740 | RW-B07 | legacy | DET | ABORT | `git tag -f` detected by immutability validator |
| RW-B08-legacy-20260607-1740 | RW-B08 | legacy | DET | PASS | `release_tag_names` → scoped tags; dry-run no bulk `--tags` |
| RW-V02-legacy-20260607-1740 | RW-V02 | legacy | DET/PARTIAL | PASS | Dry-run per-tag push; full batch push remains AGT/manual |
| RW-P01-legacy-20260607-1740 | RW-P01 | legacy | DET/PARTIAL | PASS | `--perpetual-same-task` BUILD+1 on E02:S16:T04; UKW chain AGT |
| RW-G06-legacy-20260607-1740 | RW-G06 | legacy | DET | PASS | Mismatch fails; `--confirmed-override` passes |
| RW-S07-legacy-20260607-1740 | RW-S07 | legacy | DET/PARTIAL | PASS | Recovery text forbids force-push; journal scan catches `-f` |

---

## Wave 4 results (legacy backend)

| run_id | scenario_id | backend | layer | outcome | friction_notes |
| ------ | ----------- | ------- | ----- | ------- | -------------- |
| IPW-P01-legacy-20260607-1745 | IPW-P01 | legacy | DET | PASS | No `IPP-E02S17T03*.md` on disk; T03 blocked until IPW |
| IPW-P02-legacy-20260607-1745 | IPW-P02 | legacy | DET | PASS | T04 TODO + no IPP; implementation gate closed |
| IPW-P03-legacy-20260607-1745 | IPW-P03 | legacy | DET | PASS | `PLAN_DOC_TEMPLATE.md` mandates TODO→IN PROGRESS + reconciliation |
| IPW-P04-legacy-20260607-1745 | IPW-P04 | legacy | DET | ABORT | `validate_rw_task_complete` rejects T04 (TODO) |
| RW-V03-legacy-20260607-1745 | RW-V03 | legacy | DET | PASS | `check_changelog_size.py` exit 1 — threshold exceeded (CMW advisory) |
| RW-V04-legacy-20260607-1745 | RW-V04 | legacy | DET | PASS | Registry YAML load ~188ms (5× avg); baseline for SQLite comparison |

---

## Wave 1 pattern notes (→ T06)

See [baseline-pattern-notes.md](baseline-pattern-notes.md).

---

*Append Wave 2+ rows as scenarios execute.*
