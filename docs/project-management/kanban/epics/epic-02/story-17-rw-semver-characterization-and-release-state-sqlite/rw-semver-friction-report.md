# RW & SemVer Friction Report (E02:S17:T06)

**Story:** E02:S17 — RW SemVer characterization + SQLite release state  
**Evidence:** [baseline-pattern-notes.md](baseline-pattern-notes.md) · [parity-diff-report.md](parity-diff-report.md) · [high-stress-run-log.md](high-stress-run-log.md)  
**Matrix:** [scenario-matrix.md](scenario-matrix.md) · [scenario-matrix-v2.md](scenario-matrix-v2.md)

---

## Executive summary

Twenty-one deterministic scenarios (T02 waves 1–4) plus seven high-stress scenarios (T06 Class G) and full sqlite parity (T05) characterize RW/SemVer behaviour on the `spike/rw-semver-friction` branch. **Nine recurring friction patterns** emerged; each maps to a concrete recommendation. Zero unexplained SemVer/BUILD invariant mismatches across legacy and sqlite backends.

**Top actions for maintainers:**

1. Extend `validate_release_tag_immutability` to forbid `git push … --tags` (Pattern 6 / RW-HS07).
2. Add RW Step 7 stamp-evidence checklist to agent contract (Pattern 4).
3. Default `--art` in RW cheatsheet when filing new story/task on spike/non-epic branches (Pattern 1).

---

## Friction patterns (with recommendations)

### Pattern 1 — Intent gate requires `--art` for cross-story adoption

| Field | Detail |
| ----- | ------ |
| **Evidence** | RW-G03/G04 (T02); live RW v0.2.17.1+2 |
| **Impact** | Step 1d abort until operator adds `--art` |
| **Recommendation** | **Agent contract:** RW cheatsheet default `--art` when version.py E:S:T ≠ requested task on adoption branches |
| **Storage / validator** | Agent contract + docs |

### Pattern 2 — BUILD +1 enforced at resolver; collision at Step 9 if skipped

| Field | Detail |
| ----- | ------ |
| **Evidence** | RW-B01/B02/B03; BR-097 |
| **Impact** | Agent reuse of tagged BUILD wastes Steps 2–8 work |
| **Recommendation** | **Validator:** keep `resolve_rw_build.py` mandatory before version write; block RW if resolver not run |
| **Storage / validator** | Resolver (Step 2) + `validate_tagged_build_collision` (Step 9) |

### Pattern 3 — Registry schema is rc-scoped (`rc_0.task_touch_mode`)

| Field | Detail |
| ----- | ------ |
| **Evidence** | RW-S02 test fixture failure (T02); sqlite import/export (T04) |
| **Impact** | Flat fixtures silently reset counter to 0 |
| **Recommendation** | **Storage:** document rc-scoping in sqlite schema; test fixtures must mirror production nesting |
| **Storage / validator** | Docs + pytest harness |

### Pattern 4 — Stamp evidence manifest required (FR-097)

| Field | Detail |
| ----- | ------ |
| **Evidence** | RW v0.2.17.1+2, v0.2.17.5+1 Step 7 |
| **Impact** | Step 9 `validate_board_stamp_diff` blocks without manifest |
| **Recommendation** | **Agent contract:** RW Step 7 sub-checklist — snapshot kboard, emit `rw-step7-stamp-evidence-*.json` before row edits |
| **Storage / validator** | Agent contract |

### Pattern 5 — COMPLETE tasks must leave active MoSCOW (FR-109)

| Field | Detail |
| ----- | ------ |
| **Evidence** | RW v0.2.17.2+1; T05 ship |
| **Impact** | `validate_active_kanban_board` fails if terminal row kept |
| **Recommendation** | **Agent contract:** ledger `kanban-completed.md` first, prune row, manifest covers removal |
| **Storage / validator** | Agent contract + `validate_active_kanban_board` |

### Pattern 6 — `git push --tags` not blocked by immutability validator

| Field | Detail |
| ----- | ------ |
| **Evidence** | RW-HS07 (T06); Wave 3 design review |
| **Impact** | Operator/agent can bulk-push stale local tags |
| **Recommendation** | **Validator:** extend `validate_release_tag_immutability` forbidden patterns for `\bgit\s+push[^\n]*\s--tags\b` |
| **Proposed follow-on** | FR stub: bulk `--tags` push lint |

### Pattern 7 — IPW gate is dual (IPP file + task status + Step 1c)

| Field | Detail |
| ----- | ------ |
| **Evidence** | IPW-P01–P04 (T02) |
| **Impact** | RW aborts on TODO tasks without linked IPP |
| **Recommendation** | **Agent contract:** IPW before implementation; link IPP from task doc; TODO→IN PROGRESS before RW |
| **Storage / validator** | `validate_rw_task_complete.py` |

### Pattern 8 — Large CHANGELOG triggers non-blocking CMW

| Field | Detail |
| ----- | ------ |
| **Evidence** | RW-V03; production CHANGELOG 1266 lines |
| **Impact** | Step 9.5 easy to skip; repo churn |
| **Recommendation** | **Storage:** sqlite changelog backend metrics; **workflow:** auto-trigger CMW on exit 1 |
| **Proposed follow-on** | CMW automation in RW Step 9.5 enforcement |

### Pattern 9 — Registry YAML parse cost vs sqlite lookup (RW-V04 / HS06)

| Field | Detail |
| ----- | ------ |
| **Evidence** | ~188ms YAML parse vs <1ms sqlite lookup; HS06 100× burst |
| **Impact** | Every legacy finalize touches full-file parse |
| **Recommendation** | **Storage:** flip `release_state_backend: sqlite` after story closure; keep YAML export for audit |
| **Proposed follow-on** | ADR-025 sqlite default cutover decision |

---

## SQLite-specific findings (T05)

| Finding | Legacy | SQLite | Recommendation |
| ------- | ------ | ------ | -------------- |
| PATCH collision | YAML validator catches duplicate rows | Import dedupe + DB UNIQUE | Accept; document in operator runbook |
| Finalize parity | Identical semver/counter | Identical | Ship sqlite backend as optional default |
| Injective audit | File scan | `load_semver_registry()` path | Validators already dual-backend |

---

## High-stress execution summary (T06)

| ID | Result | Notes |
| -- | ------ | ----- |
| RW-HS01 | PASS | 20× finalize burst |
| RW-HS02 | PASS | `--dpz` doc-init |
| RW-HS03/04 | ABORT (expected) | `--dpz` guardrails |
| RW-HS05 | PASS | Perpetual BUILD 51 |
| RW-HS06 | PASS | Production import + lookup perf |
| RW-HS07 | PASS (gap) | `--tags` not forbidden |

---

## Proposed follow-on work (not in T06 scope)

| Priority | Item | Type | Pattern |
| -------- | ---- | ---- | ------- |
| HIGH | Forbid `git push … --tags` in immutability validator | FR | 6 |
| MEDIUM | RW Step 7 stamp manifest template in agent RW guide | Docs | 4 |
| MEDIUM | SQLite default flip + migration runbook | ADR | 9 |
| LOW | `--art` default in workflow-initiation-cheatsheet | Docs | 1 |

---

## Maintainer KB (ADR-024)

This report is suitable for promotion to Notion Engineering KB under **Investigations → RW SemVer characterization**. Git SoT: this file + linked run logs. Notion page: create on operator request per P-NOTION-FIRST.

---

## Story closure readiness

| Criterion | Status |
| --------- | ------ |
| Scenario matrix ≥15 IDs | ✅ 32 + 7 v2 |
| Baseline + parity run logs | ✅ |
| SQLite schema + implementation | ✅ T04 |
| Friction report ≥3 patterns | ✅ 9 patterns |
| High-stress ≥5 executed | ✅ 7 executed |

**Remaining:** Story-level AC (T03 design doc close-out optional); merge spike branch decision; optional sqlite default.
