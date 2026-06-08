---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T23:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 8, Story 3, Task 12: Code Quality maintainability backlog (**BR-099**)

**Task ID:** E08:S03:T12  
**Status:** COMPLETE  
**Priority:** MEDIUM  
**Created:** 2026-06-05  
**Last updated:** 2026-06-07 (RW — **re-closed** @ **v0.8.3.12+13**; prior sign-off +11; local CQG +12)
**Version Anchor:** v0.8.3.12+13
**Code:** E08S03T12

**Scope:** Phased burn-down of GitHub Code Quality **maintainability** findings on `main`. **COMPLETE** — **re-closed** @ **v0.8.3.12+13** (terminal forensic anchor); operator dashboard **Good** @ `main` `ed379ab` (+11); handoff **T16** perpetual.

**Upstream:** [BR-099 — Code Quality maintainability backlog](../../../fr-br/BR-099-code-quality-maintainability-backlog.md)

Publication Status: NOT_APPLICABLE

---

## Input

- [IPP-E08S03T12](../../../../implementation-cycles/IPP-E08S03T12-code-quality-maintainability-backlog-br099.md) — wave 6 (**§4.7** steps 52–59); closure @ +8; CQG verification ([operator guide](../../../../../../packages/frameworks/tooling-automation/docs/code-quality-gate-operator-guide.md))
- [BR-099](../../../fr-br/BR-099-code-quality-maintainability-backlog.md)
- [Security & quality — Standard findings](https://github.com/RMS-Ltd/ai-dev-kit/security/quality)
- [BR-100 — Reliability backlog](T13-code-quality-reliability-backlog-br100.md) (coordinate sequencing: reliability first if overlapping hotspots)
- [E08:S03:T11 — Code scanning permissions (BR-098)](T11-codeql-missing-workflow-permissions-br098.md)
- [E08:S03:T16 — GitHub Security & Code Quality health (Perpetual)](T16-github-security-code-quality-health-perpetual-fr112.md) — post-backlog handoff (FR-112)

---

## Deliverable

1. Baseline manifest: open maintainability counts by CodeQL rule @ `main` SHA.
2. Wave 1 remediation PR(s): autofix-safe hygiene (see BR-099 wave table).
3. Post-wave dashboard snapshot: Maintainability score + open count delta.
4. Wave 4: T13-deferred `py/print-during-import` remediation per [IPP §4.3](../../../../implementation-cycles/IPP-E08S03T12-code-quality-maintainability-backlog-br099.md#43-wave-4-ledger-done--do-not-re-execute) (**done** @ v0.8.3.12+6).
5. Wave 5: CodeQL-aligned maintainability burn-down — **shipped** @ **v0.8.3.12+7**.
6. Closure: post–wave-5 merge capture @ step 28 — **103/Fair** @ `d5c4bca5` (**done** @ IPW).
7. Wave 6: CodeQL-aligned burn-down per [IPP §4.7](../../../../implementation-cycles/IPP-E08S03T12-code-quality-maintainability-backlog-br099.md#47-wave-6-ledger-planned--path-b-do-not-re-execute-waves-15) — **code shipped** @ **v0.8.3.12+10**; local CQG monitor verified @ **v0.8.3.12+12** (**87/Fair** @ `42515103`).

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

## Wave-3 pre-manifest (2026-06-06)

**Source:** Local `ruff` proxy on `greenfield-install/**/*.py` @ `bf3c10ed` (dev); [IPP §4.2 step 22](../../../../implementation-cycles/IPP-E08S03T12-code-quality-maintainability-backlog-br099.md).

| Ruff rule (wave-3 proxy) | CodeQL theme (approx.) | Open count |
| ------------------------ | ---------------------- | ---------- |
| F541 | `py/ineffectual-statement` | **0** |
| F401 | `py/unused-import` | **0** |
| F841 | `py/unused-local-variable` | **0** |
| I001 | `py/import-and-import-from` | **0** |
| F811 | `py/repeated-import` | **0** |
| F823 | (local undefined export) | **0** |
| **Total (wave-3 rule set)** | — | **0** |

**Note:** Wave-2 pre-manifest projected **146** F541 in `greenfield-install/` @ `cadb0c3`; current working tree already **0** for wave-3 rules (wave-1 Chunk C hygiene + corpus sync). No additional Python edits required for Chunk F.

---

## Wave-3 triage (2026-06-06)

| Rule group | Disposition | Rationale |
| ---------- | ----------- | --------- |
| F541 / `py/ineffectual-statement` | **FIX** (verify) | Pre-manifest **0** — no autofix needed |
| F401, I001, F841, F811, F823 | **FIX** (verify) | Pre-manifest **0** — wave-1 Chunk C + mirror sync |
| Out-of-scope ruff (E402, F821, …) | **NONE** | Not in BR-099 wave-3 rule set; **93** findings remain — separate backlog |
| Dashboard **Good+** gate | **VERIFY** | T16 pending post-merge re-scan on `main` |

---

## Post-wave-3 manifest (2026-06-06 — local proxy)

**Remediation:** `ruff check --fix --select F541,F401,F841,I001,F811,F823` on `greenfield-install/**/*.py` — **0 fixes** (corpus already clear).

| Metric | Value |
| ------ | ----- |
| Files touched (wave-3) | **0** (no diff required) |
| Ruff wave-3 rule set after pass | **0** remaining |
| `pytest tests/` | **407 passed**, 2 skipped |
| `workflow-scripts-pytest` (local) | **119 passed** |

**Dashboard delta:** Pending GitHub Code Quality re-scan after merge to `main`. Task remains **IN PROGRESS** until dashboard **Good+** per operator closure policy (read-only capture in this doc; T16 perpetual deferred).

---

## Wave-4 pre-manifest (2026-06-06)

**Source:** Local AST scan @ `a482cb7b` (dev); reconciled with [T16 Wave 1 re-scan](T16-github-security-code-quality-health-perpetual-fr112.md) (**16** `py/print-during-import` @ `f6aa4dca`) and [T13 wave-2 deferral](T13-code-quality-reliability-backlog-br100.md).

| CodeQL rule | Open count (dashboard) | Local sites (packages/) | Severity | Wave-4 disposition |
| ----------- | ---------------------- | ----------------------- | -------- | ------------------ |
| `py/print-during-import` | **16** | **9** print statements in **7** modules | Note | **FIX** — replace import-time `print` with `logging.warning` |

**Hotspots (packages/frameworks/workflow-mgt/scripts/ — mirrored in `greenfield-install/`):**

| File | Lines | Context |
| ---- | ----- | ------- |
| `git_tag_handler.py` | 27 | `semver_converter` ImportError handler |
| `intake_decision_flow.py` | 32–33 | E4:S10 ImportError handler |
| `intake_dependency_wiring.py` | 29 | path setup ImportError handler |
| `intake_documentation_update.py` | 31 | `intake_decision_flow` ImportError handler |
| `intake_task_creation.py` | 32–33 | E4:S10 ImportError handler |
| `intake_version_assignment.py` | 31 | `intake_decision_flow` ImportError handler |
| `intake_workflow_trigger_handler.py` | 33 | intake bundle ImportError handler |

**Note:** Dashboard **16** vs local **9** — CodeQL counts reliability-band alerts; mirror tree adds **9** more identical sites (**18** total); dashboard may dedupe paths.

---

## Wave-4 triage (2026-06-06)

| Rule group | Disposition | Rationale |
| ---------- | ----------- | --------- |
| `py/print-during-import` (import Error handlers) | **fix** | Replace module-level `print` with `logging.getLogger(__name__).warning(...)` — preserves diagnostics without import-time side effects |
| CLI `print` inside `if __name__ == "__main__"` | **NONE** | Out of scope — does not execute on import |

---

## Post-wave-4 manifest (2026-06-06 — local)

**Remediation:** Import-time `print` → `logging.warning` in 7 workflow intake modules (+ `git_tag_handler`); mirrored under `greenfield-install/`.

| Metric | Value |
| ------ | ----- |
| Files touched | **14** (7 × 2 trees) |
| Print-at-import sites addressed | **18** (9 packages + 9 mirror) |
| Local import-time `print` proxy after fix | **0** |
| Expected dashboard delta | **16** `py/print-during-import` cleared post-merge (re-scan pending) |
| `pytest tests/` | **407 passed**, 2 skipped |
| `workflow-scripts-pytest` (local) | **119 passed** |

**Dashboard delta:** Post–wave-4 merge re-scan: maintainability **146** / **Fair** unchanged (print-at-import is reliability band). Wave 5 targets maintainability subtotal per [IPP §4.5](../../../../implementation-cycles/IPP-E08S03T12-code-quality-maintainability-backlog-br099.md).

---

## Wave-5 pre-manifest (2026-06-06 — dashboard capture @ step 39)

**Source:** [GitHub Code Quality — Standard findings](https://github.com/RMS-Ltd/ai-dev-kit/security/quality) (`is:open`, maintainability); cross-ref [T16 Wave 1 re-scan @ `f6aa4dca`](T16-github-security-code-quality-health-perpetual-fr112.md).

| Field | Value |
| ----- | ----- |
| Snapshot date | 2026-06-06 (operator confirmed post–wave-4 merge) |
| Branch / ref | `dev` @ `86972930` (pre–wave-5 RW; dashboard still reflects pre-merge `main`) |
| Open maintainability | **146** |
| Dashboard score | **Fair** |
| Delta vs wave-1 re-scan (145) | **+1** (mirror residual; see gap analysis) |

**Rule breakdown (maintainability subtotal; from T16 @ `f6aa4dca` — confirmed @ step 39):**

| CodeQL rule | Open count | Severity | Wave-5 chunk |
| ----------- | ---------- | -------- | ------------ |
| `py/unused-import` | 46 | Note | Chunk I |
| `py/import-and-import-from` | 34 | Note | Chunk I |
| `py/unused-global-variable` | 28 | Note | Chunk J |
| `py/unused-local-variable` | 13 | Note | Chunk I |
| `py/ineffectual-statement` | 10 | Note | Chunk I |
| `py/multiple-definition` | 5 | Warning | Chunk K |
| `py/repeated-import` | 4 | Note | Chunk I |
| `py/unnecessary-lambda` | 4 | Note | Chunk K |
| `py/unnecessary-pass` | 2 | Warning | Chunk K |
| **Total** | **146** | — | — |

**Note:** Wave 4 cleared **16** `py/print-during-import` (reliability band); does not reduce maintainability subtotal.

---

## Wave-5 ruff/CodeQL gap analysis (2026-06-06 — step 40)

**Finding:** Local ruff proxy (`F401`, `F841`, `I001`, `F811`, `F541`) was already **0** on `packages/` and `greenfield-install/` before wave-5 edits, yet dashboard reported **146** maintainability findings. Root causes:

1. **`greenfield-install/` mirror** — CodeQL scans mirrored framework tree separately (~2× path count for shared modules).
2. **Dead `try: import yaml except: yaml = None` blocks** — ~22 unique files × 2 trees after `rw_config_loader` refactor (CodeQL `py/unused-import` / `py/ineffectual-statement`).
3. **Dead module-level constants** — `py/unused-global-variable` (**28** dashboard) not covered by ruff autofix alone.
4. **Wave 4 scope** — cleared reliability-band print-at-import only; did not reduce maintainability subtotal.

| Directory | Ruff F401 | Ruff I001 | Ruff F841 | Ruff F541 | Ruff F811 | Notes |
| --------- | --------- | --------- | --------- | --------- | --------- | ----- |
| `packages/` (+ tests/scripts/cli) | **0** | **0** | **0** | **0** | **0** | pre-edit baseline |
| `greenfield-install/` | **0** | **0** | **0** | **0** | **0** | pre-edit baseline |
| Dashboard (CodeQL) | 46 | 34 | 13 | 10 | 4 | maintainability band (+ globals/lambda/pass) |

**Post wave-5 local proxy:** ruff **0** on `packages/`, `greenfield-install/`, `scripts/`; mirror synced (**1499** files); `--check` passes.

---

## Wave-5 triage (2026-06-06 — step 41)

| Rule group | Disposition | Rationale |
| ---------- | ----------- | --------- |
| Hygiene (Chunk I: F401, I001, F841, F541, F811) | **FIX** (**DONE**) | Removed dead yaml blocks; import consolidation; ruff `--fix` on `setup.py` |
| `py/unused-global-variable` (Chunk J) | **FIX** (**DONE**) | Removed dead module constants (`OLD/NEW_VERSION_PATTERN`, `GATE_FUNCS`, `CONFIG_SCHEMA`, `DOC_TYPE_MAPPING`, etc.) |
| Manual rules (Chunk K) | **FIX** (**DONE**) | Covered by hygiene + global cleanup; no separate lambda/pass hunks required locally |
| Mirror sync | **FIX** (**DONE**) | `scripts/sync_greenfield_install.py` after packages edits |

---

## Post-wave-5 manifest (2026-06-06 — step 47)

| Metric | Value |
| ------ | ----- |
| Files touched | **88** (`git diff --stat` @ `86972930`) |
| Local ruff proxy after wave 5 | **0** (`F401,F841,I001,F811,F541` on packages + greenfield-install + scripts) |
| Expected dashboard delta | Material reduction of mirror-duplicated unused-import / unused-global / ineffectual-statement findings; **Good+ not verified** until post-merge re-scan |
| `pytest tests/` | **407 passed**, 2 skipped |
| `workflow-scripts-pytest` (local) | **119 passed** (unchanged vs wave 4) |
| Mirror sync | **1499** framework files; `--check` OK |

**Remediation summary:** ~22 dead yaml try/except blocks (packages + mirror); dead module globals in validators/scripts; import consolidation (`sort_kanban_board.py`, test modules); `kanban_paths.py` pattern tuples retained (required by `install_release_workflow.py`).

**Dashboard delta:** Pending post–wave-5 merge re-scan ([IPP §4.6 step 28](../../../../implementation-cycles/IPP-E08S03T12-code-quality-maintainability-backlog-br099.md#46-closure-ledger-open--post-wave-5)). Task remains **IN PROGRESS** until **Good+**. Released @ **v0.8.3.12+7**.

---

## Post-wave-5-merge manifest (2026-06-06 — IPP step 28; refreshed)

**Source:** [GitHub Code Quality — Standard findings](https://github.com/RMS-Ltd/ai-dev-kit/security/quality) (operator UI refresh 2026-06-06); cross-validated by local CQG (`security-and-quality` @ `d5c4bca5`).

| Field | Value |
| ----- | ----- |
| Snapshot date | 2026-06-06 15:55 UTC |
| Branch / ref | `main` @ `d5c4bca5` (includes wave-5 + post-wave merges) |
| Open maintainability | **103** (CQG maintainability band; operator UI refresh confirmed) |
| Dashboard score | **Fair** (**Good+ not evidenced**) |
| Delta vs lag-accepted pre-wave-5 (146) | **−43** (−29.5%) |
| Delta vs wave-1 re-scan (145) | **−42** (−29.0%) |

**Step 50 (remote precondition):** **SATISFIED** — wave-5 tag `v0.8.3.12+7` in `main` ancestry.

**Rule breakdown (maintainability subtotal — CQG @ `d5c4bca5`):**

| CodeQL rule | Open count | Wave-6 chunk |
| ----------- | ---------- | -------------- |
| `py/import-and-import-from` | 37 | Chunk M |
| `py/unused-import` | 19 | Chunk M |
| `py/unused-local-variable` | 13 | Chunk M |
| `py/ineffectual-statement` | 10 | Chunk M |
| `py/unnecessary-delete` | 5 | Chunk L |
| `py/multiple-definition` | 5 | Chunk L |
| `py/repeated-import` | 4 | Chunk M |
| `py/unused-global-variable` | 4 | Chunk L |
| `py/unnecessary-lambda` | 4 | Chunk L |
| `py/unnecessary-pass` | 2 | Chunk L |
| **Total** | **103** | — |

**Local verification @ `d5c4bca5`:** CQG maintainability **Fair**; ruff proxy (`F401,F841,I001,F811,F541`) **0** on packages + greenfield-install + scripts (wave-5 regression guard).

**Closure branch (step 28):** **Fair @ material count** — **Path B** → [IPP §4.7 wave 6](../../../../implementation-cycles/IPP-E08S03T12-code-quality-maintainability-backlog-br099.md#47-wave-6-ledger-planned--path-b-do-not-re-execute-waves-15). Task remains **IN PROGRESS** (step 13). **Do not COMPLETE** until **Good+**.

---

## Wave-6 pre-manifest (2026-06-06 — IPP step 52)

**Trigger:** Step 28 **Fair** branch — authoritative counts from operator UI + CQG @ `d5c4bca5`.

| Field | Value |
| ----- | ----- |
| Snapshot date | 2026-06-06 15:55 UTC |
| Branch / ref | `main` @ `d5c4bca5` |
| Open maintainability | **103** |
| Dashboard score | **Fair** |
| CQG report | `.cqg/reports/summary-2026-06-06_155513_UTC.json` |

**Rule breakdown:** Same as post-merge manifest above (step 28 authoritative baseline for wave 6).

---

## Wave-6 triage (2026-06-06 — IPP step 53)

| Rule group | Disposition | Rationale |
| ---------- | ----------- | --------- |
| Chunk L (`py/unused-global-variable`, `py/multiple-definition`, `py/unnecessary-lambda`, `py/unnecessary-pass`, `py/unnecessary-delete`) | **FIX** | Manual CodeQL rules; paths from CQG SARIF |
| Chunk M (import hygiene, unused local, ineffectual, repeated-import) | **FIX** | Dashboard/CQG-flagged paths; mirror sync after `packages/` edits |
| Mirror sync | **FIX** | `scripts/sync_greenfield_install.py` after Chunk L/M on `packages/` |
| Reliability findings in CQG output | **DEFER** | Out of T12 scope (T13); do not fix in wave 6 |

**Verification:** Run `run_cqg.py` before RW (T34); maintainability count must trend below **103**. **Result @ +10:** **87** (local CQG; −16).

---

## Post-wave-6 manifest (2026-06-07 — IPP step 57)

| Field | Value |
| ----- | ----- |
| Snapshot date | 2026-06-07 10:45 UTC |
| Branch / ref | `dev` (pre-RW local) |
| Open maintainability | **87** |
| Dashboard score | **Fair** (local CQG) |
| Delta vs step-28 baseline | **−16** (103 → 87) |
| RW | **v0.8.3.12+10** |

**Disposition:** Operator sign-off @ **v0.8.3.12+11** — dashboard **Good** Maintainability + Reliability @ `main` `ed379ab` (2026-06-07).

---

## Closure manifest (operator sign-off — 2026-06-07)

| Field | Value |
| ----- | ----- |
| Dashboard | [Security & quality — Standard findings](https://github.com/RMS-Ltd/ai-dev-kit/security/quality) |
| Ref | `main` @ `ed379abb` |
| Maintainability score | **Good** |
| Reliability score | **Good** |
| RW | **v0.8.3.12+13** (re-close; +11 dashboard Good; +12 local CQG) |
| Handoff | **E08:S03:T16** perpetual (deferral lifted) |

---

## Acceptance Criteria

- [x] Baseline manifest captured in this task doc (rule → count).
- [x] Wave-1 rule groups remediated or waived with documented rationale.
- [x] Open maintainability count reduced ≥50% vs baseline (**560→145**, −74.1% on dashboard re-scan).
- [x] Maintainability score **Good** or better (operator verified @ `main` `ed379ab`, 2026-06-07).
- [x] CI (`pytest`, workflow-scripts-pytest, tests) green (local — 407 / 119 passed @ 2026-06-06).
- [x] **BR-099** terminal closure via **RW E08:S03:T12 --art** @ **v0.8.3.12+11**; **re-closed** @ **v0.8.3.12+13**.

---

## References

- [IPP-E08S03T12](../../../../implementation-cycles/IPP-E08S03T12-code-quality-maintainability-backlog-br099.md) — wave 6 @ [§4.7](../../../../implementation-cycles/IPP-E08S03T12-code-quality-maintainability-backlog-br099.md#47-wave-6-ledger-planned--path-b-do-not-re-execute-waves-15); closure @ +8
- [BR-099](../../../fr-br/BR-099-code-quality-maintainability-backlog.md)
- [BR-100](../../../fr-br/BR-100-code-quality-reliability-backlog.md) — wave-2 deferred **16** print-at-import → T12 wave 4 ([T13 task](T13-code-quality-reliability-backlog-br100.md))
- [BR-101](../../../fr-br/BR-101-code-quality-ai-suggestions-backlog.md)
- [T16 Wave 1 re-scan](T16-github-security-code-quality-health-perpetual-fr112.md) — rule breakdown cross-ref @ `f6aa4dca`
- [scripts/sync_greenfield_install.py](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/scripts/sync_greenfield_install.py) — mirror sync (IPP step 45)
