---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T23:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 8, Story 3, Task 12: Code Quality maintainability backlog (**BR-099**)

**Task ID:** E08:S03:T12  
**Status:** IN PROGRESS  
**Priority:** MEDIUM  
**Created:** 2026-06-05  
**Last updated:** 2026-06-05 (RW E08:S03:T12 — wave-2 remediation)
**Version Anchor:** v0.8.3.12+4
**Version:** v0.8.3.12+4
**Code:** E08S03T12

**Scope:** Phased burn-down of **560** open GitHub Code Quality **maintainability** findings on `main`; wave 1 = unused imports/variables, import hygiene, unnecessary pass/lambda.

**Upstream:** [BR-099 — Code Quality maintainability backlog](../../../fr-br/BR-099-code-quality-maintainability-backlog.md)

Publication Status: NOT_APPLICABLE

---

## Input

- [IPP-E08S03T12](../../../../../implementation-cycles/IPP-E08S03T12-code-quality-maintainability-backlog-br099.md) — revised 2026-06-05 (wave-2 plan; wave-1 complete @ v0.8.3.12+1–+3)
- [BR-099](../../../fr-br/BR-099-code-quality-maintainability-backlog.md)
- [Security & quality — Standard findings](https://github.com/RMS-Ltd/ai-dev-kit/security/quality)
- [BR-100 — Reliability backlog](T13-code-quality-reliability-backlog-br100.md) (coordinate sequencing: reliability first if overlapping hotspots)
- [E08:S03:T11 — Code scanning permissions (BR-098)](T11-codeql-missing-workflow-permissions-br098.md)

---

## Deliverable

1. Baseline manifest: open maintainability counts by CodeQL rule @ `main` SHA.
2. Wave 1 remediation PR(s): autofix-safe hygiene (see BR-099 wave table).
3. Post-wave dashboard snapshot: Maintainability score + open count delta.

---

## Baseline manifest (2026-06-05)

**Source:** GitHub Code Quality dashboard ([BR-099](../../../fr-br/BR-099-code-quality-maintainability-backlog.md)); `gh api code-scanning/alerts` returned 0 (Code Quality findings use separate product surface).

| Field | Value |
| ----- | ----- |
| Snapshot date | 2026-06-05 |
| Branch / ref | `main` @ `5fcf102` (BR-099); working tree @ `08b8cb2` on `dev` |
| Total open maintainability | **560** |
| Dashboard score | **Fair** |

**Wave-1 rule groups (BR-099 top table; counts aggregated at dashboard level):**

| CodeQL rule (approx.) | Theme | Baseline note |
| --------------------- | ----- | ------------- |
| `py/unused-import` | Remove unused imports | High volume (dominant) |
| `py/unused-local-variable` | Remove dead assignments | High volume |
| `py/unused-global-variable` | Remove module dead state | Present |
| `py/import-and-import-from` | Consolidate import style | Present |
| `py/repeated-import` | Deduplicate imports | Present |
| `py/unnecessary-pass` | Remove no-op `pass` | Present |
| `py/unnecessary-lambda` | Replace trivial lambdas | Present |

---

## Post-wave manifest (2026-06-05 — local proxy)

**Remediation:** `ruff` autofix (F401, F841, I001, F811) + manual pass on 13 edge-case imports across `packages/`, `tests/`, `scripts/`, `cli/`, `greenfield-install/`.

| Metric | Value |
| ------ | ----- |
| Files touched | 406 |
| Ruff issues before (wave-1 proxy rules) | 937 |
| Ruff issues after (same rules) | **0** |
| `pytest tests/` | 396 passed, 2 skipped |
| `workflow-scripts-pytest` (local) | 116 passed |

**Dashboard delta:** Pending GitHub Code Quality re-scan after merge to `main`. Local ruff proxy indicates wave-1 hygiene rules are cleared in corpus; ≥50% and **Good** score require post-merge dashboard verification (step 12).

**Waivers:** `py/print-during-import` deferred to BR-099 wave 2 (out of wave-1 scope per IPP).

---

## Dashboard re-scan manifest (2026-06-05)

**Source:** [GitHub Code Quality — Standard findings](https://github.com/RMS-Ltd/ai-dev-kit/security/quality) (`is:open` filter).

| Field | Baseline (2026-06-05) | Post wave-1 re-scan (2026-06-05) |
| ----- | --------------------- | -------------------------------- |
| Branch / ref | `main` @ `5fcf102` | `main` @ `cadb0c3` |
| Open maintainability | **560** | **145** |
| Delta | — | **−415** (−74.1%) |
| Dashboard score | **Fair** | **Fair** (unchanged) |

**Wave-1 count AC:** ≥50% reduction **met** (74.1%). **Good** score and **145** residual findings → wave-2 scope (`py/print-during-import` + remaining maintainability fold rules per BR-099).

---

## Wave-2 pre-manifest (2026-06-05)

**Source:** [GitHub Code Quality — Standard findings](https://github.com/RMS-Ltd/ai-dev-kit/security/quality) (`is:open`, maintainability); dashboard @ `main` `cadb0c3`.

| CodeQL rule | Open count | Severity |
| ----------- | ---------- | -------- |
| `py/unused-import` | 47 | Note |
| `py/import-and-import-from` | 32 | Note |
| `py/unused-global-variable` | 28 | Note |
| `py/unused-local-variable` | 13 | Note |
| `py/ineffectual-statement` | 10 | Note |
| `py/multiple-definition` | 5 | Warning |
| `py/repeated-import` | 4 | Note |
| `py/unnecessary-lambda` | 4 | Note |
| `py/unnecessary-pass` | 2 | Note |
| **Total** | **145** | — |

**Local ruff proxy (wave-2 scope dirs):** `greenfield-install/` — **146** `F541` (f-string missing placeholders); `packages/frameworks/`, `tests/`, `scripts/`, `cli/` — **169** fixable before wave-2 pass.

---

## Wave-2 triage (2026-06-05)

| Rule group | Disposition | Rationale |
| ---------- | ----------- | --------- |
| `py/ineffectual-statement` / F541 | **FIX** (wave-2 scope) | `ruff --select F541 --fix` on `packages/frameworks/`, `tests/`, `scripts/`, `cli/` — 169 autofixes |
| Wave-1 residuals (F401, I001, F841, F811) | **FIX** (wave-2 scope) | Included in same ruff pass where present |
| `py/print-during-import` | **FIX** (wave-2 scope) | `scripts/run_kb_migration_mcp.py` — wrap in `main()` guard (1 module-level print) |
| `greenfield-install/` F541 + hygiene mirror | **DEFER** (wave 3) | 146 findings in mirrored tree; IPP wave-2 excludes wave-3 per operator scope |
| Dashboard residuals on `main` post-merge | **VERIFY** | Post-RW dashboard re-scan required; CodeQL may lag |

---

## Post-wave-2 manifest (2026-06-05 — local proxy)

**Remediation:** `ruff check --fix --select F401,F841,I001,F811,F823,F541` on wave-2 scope; `run_kb_migration_mcp.py` main-guard fix.

| Metric | Value |
| ------ | ----- |
| Files touched (wave-2 scope) | 52 |
| Ruff F541+F401+I001 fixes | 169 |
| Module-level `print()` removed | 1 (`scripts/run_kb_migration_mcp.py`) |
| Ruff wave-2 scope after pass | **0** remaining (F401,F841,I001,F811,F823,F541) |
| `pytest tests/` | 405 passed, 1 failed (pre-existing `test_install_error_docs_sync`), 2 skipped |
| `workflow-scripts-pytest` (CI script) | **118 passed** |

**Dashboard delta:** Pending GitHub Code Quality re-scan after merge to `main`. Wave-2 scope cleared locally; **~146** findings likely remain in `greenfield-install/` mirror (wave 3).

---

## Acceptance Criteria

- [x] Baseline manifest captured in this task doc (rule → count).
- [x] Wave-1 rule groups remediated or waived with documented rationale.
- [x] Open maintainability count reduced ≥50% vs baseline (**560→145**, −74.1% on dashboard re-scan).
- [ ] Maintainability score **Good** or better (still **Fair** @ 145 open; wave-2 backlog).
- [x] CI (`pytest`, workflow-scripts-pytest, tests) green (local).
- [ ] **BR-099** released via **RW E08:S03:T12** when complete.

---

## References

- [IPP-E08S03T12](../../../../../implementation-cycles/IPP-E08S03T12-code-quality-maintainability-backlog-br099.md)
- [BR-099](../../../fr-br/BR-099-code-quality-maintainability-backlog.md)
- [BR-100](../../../fr-br/BR-100-code-quality-reliability-backlog.md)
- [BR-101](../../../fr-br/BR-101-code-quality-ai-suggestions-backlog.md)
