# Baseline Run Log (E02:S17:T02)

**Schema:** [run-log-schema.md](run-log-schema.md)  
**Matrix:** [scenario-matrix.md](scenario-matrix.md)

---

## Status

Not started — T02 execution pending.

## Seed rows (from T01 release characterization)

| run_id | scenario_id | backend | layer | outcome | version_before | version_after | semver_after | abort_step | friction_notes |
| ------ | ----------- | ------- | ----- | ------- | -------------- | ------------- | ------------ | ---------- | -------------- |
| RW-G03-legacy-20260607-1717 | RW-G03 | legacy | DET | ABORT | 0.2.16.10+6 | — | — | 1d | Intent mismatch without `--art`; BR-056 guard worked |
| RW-G04-legacy-20260607-1717 | RW-G04 | legacy | DET | PASS | 0.2.16.10+6 | 0.2.17.1+1 | 0.4.1037+1 | — | `--art` adoption for E02:S17:T01 story filing on spike branch |

---

*Append rows as Wave 1–4 scenarios execute.*
