---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T12:00:00Z
revised_at: 2026-06-06T14:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E08:S03:T12 — Planning: Spec, Tests, Implementation Plan (IPW)

**Host Task:** [`T12-code-quality-maintainability-backlog-br099.md`](../project-management/kanban/epics/epic-08/story-03-automation-scripts/T12-code-quality-maintainability-backlog-br099.md) **(E08:S03:T12)**  
**Planning for:** [BR-099](../project-management/kanban/fr-br/BR-099-code-quality-maintainability-backlog.md)  
**Status:** Revised — wave 5 **DONE** @ v0.8.3.12+7; **closure phase OPEN** (§4.6 steps 50, 28–30, 13); **Good+** hard gate pending

> **IPW:** Produced for E08:S03:T12. Bulk **Code Quality maintainability** burn-down; complements security CodeQL tasks E08:S03:T08–T11 and defers reliability ([BR-100](../project-management/kanban/fr-br/BR-100-code-quality-reliability-backlog.md) / E08:S03:T13).
>
> **Revision (2026-06-05):** Wave-1 shipped @ v0.8.3.12+1–+3. Dashboard re-scan: **560→145** open maintainability (−74.1%) @ `main` `cadb0c3`; score still **Fair**.
>
> **Revision (2026-06-06):** Wave-3 verified @ `bf3c10ed` — `greenfield-install/` wave-3 rule set **0** open (no code edits); pytest **407** / workflow-scripts **119** passed @ v0.8.3.12+5.
>
> **Revision (2026-06-06, wave 4):** [T13 wave-2](IPP-E08S03T13-code-quality-reliability-backlog-br100.md) deferred **16** `py/print-during-import` findings to T12. Wave 4 shipped @ **v0.8.3.12+6** (**14** files); print-at-import is **reliability band** — maintainability count unchanged post-merge.
>
> **Revision (2026-06-06, wave 5):** Closed ruff/CodeQL gap: dead yaml blocks, unused module globals, mirror sync (**88** files); local ruff **0**; pytest **407** / workflow-scripts **119**; shipped @ **v0.8.3.12+7** (`7266c63d`).
>
> **Revision (2026-06-06, closure imp):** Steps 1, 50, 28, 51, 13 executed — **Fair** branch; lag-accepted **146/Fair** @ `main` `56b34f0d`; wave 6 pre-manifest stub; operator UI refresh pending.

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Wave | Status | Source (FR/BR/Task) |
| -- | ----------- | ---- | ------ | ------------------- |
| RF1 | Capture **baseline manifest** (rule → open count, snapshot date, `main` SHA) in task doc | 1 | **SATISFIED** — task doc baseline table @ `5fcf102` | T12 AC1, BR-099 AC1 |
| RF2 | Remediate or **document-waive** all wave-1 rule groups | 1 | **SATISFIED** — ruff proxy 937→0; 13 manual import edge cases | T12 AC2, BR-099 AC2 |
| RF3 | Reduce open maintainability count **≥50%** vs baseline | 1 | **SATISFIED** — dashboard **560→145** (−74.1%) | T12 AC2, BR-099 AC2 |
| RF4 | Maintainability score **Good** or better on dashboard | 1–5 | **OPEN** — still **Fair** @ **146** open post–wave-4 merge (operator confirmed); **Good+ required before COMPLETE** | T12 AC4, BR-099 AC3 |
| RF5 | Keep CI green: `pytest tests/`, `workflow-scripts-pytest`, `tests.yml` | 1–5 | **SATISFIED** — 407 passed / 119 workflow-scripts @ wave 5 | T12 AC5, BR-099 AC4 |
| RF6 | Close kanban loop: BR-099 resolution + **RW E08:S03:T12 --art** on completion | 1–5 | **OPEN** — interim RW @ +1–+6; final closure deferred until RF4 satisfied | T12 AC6, BR-099 AC5 |
| RF7 | Include **`greenfield-install/`** in wave 1 hygiene pass | 1 | **SATISFIED** — Chunk C in wave-1 release | IPW scope decision |
| RF8 | Export **wave-2 manifest**: rule → count for **145** residuals before bulk edits | 2 | **SATISFIED** — task doc wave-2 pre-manifest @ `cadb0c3` | BR-099 wave 2, task doc |
| RF9 | Remediate wave-2 rules: `py/print-during-import` + remaining maintainability **fold** rules | 2 | **SATISFIED** — 169 ruff fixes + 1 print-at-import fix; wave-2 scope proxy **0** | BR-099 wave 2, T12 deliverable |
| RF10 | Post-wave-2 manifest + dashboard delta in task doc | 2 | **SATISFIED** — task doc post-wave-2 manifest @ v0.8.3.12+4 | T12 deliverable #3 |
| RF11 | Export **wave-3 manifest**: rule → count for `greenfield-install/` @ current `main` SHA | 3 | **SATISFIED** — task doc wave-3 pre-manifest @ `bf3c10ed` (0 open) | BR-099 wave 3, task doc |
| RF12 | Remediate wave-3 `greenfield-install/` mirror (~146 F541 + hygiene) | 3 | **SATISFIED** — corpus already clear; 0 ruff fixes applied | BR-099 wave 3, task doc |
| RF13 | Post-wave dashboard re-scan on `main`; record open count + score in task doc | closure | **PARTIAL** — step 28 capture @ `56b34f0d`; lag-accepted **146/Fair**; operator UI refresh pending | T12 AC4, BR-099 AC3 |
| RF14 | Export **wave-4 manifest**: **16** `py/print-during-import` (T13 deferral + dashboard rule breakdown) in task doc | 4 | **SATISFIED** — task doc wave-4 pre-manifest @ `a482cb7b` | BR-099 wave 4, [T13 handoff](IPP-E08S03T13-code-quality-reliability-backlog-br100.md) |
| RF15 | Remediate wave-4 print-at-import (main guard or logging) across full Python corpus | 4 | **SATISFIED** — **14** files; local proxy **0** import-time prints | BR-099 wave 4, T12 deliverable |
| RF16 | Post-wave-4 manifest + expected maintainability delta in task doc | 4 | **SATISFIED** — task doc post-wave-4 manifest | T12 deliverable |
| RF17 | Export **wave-5 manifest**: rule → count @ current `main` SHA (post–wave-4 merge) | 5 | **SATISFIED** — task doc wave-5 pre-manifest @ step 39 | T12 deliverable, BR-099 wave 5 |
| RF18 | Document **ruff/CodeQL proxy gap** analysis (why local **0** ≠ dashboard **146**) | 5 | **SATISFIED** — task doc gap-analysis section @ step 40 | T12 gap-analysis section |
| RF19 | Remediate wave-5 maintainability rules across **full corpus** with **dashboard-aligned verification** (not ruff-only) | 5 | **SATISFIED** — Chunks I–K + mirror sync @ steps 42–45 | BR-099 wave 5 |
| RF20 | Post-wave-5 manifest + open-count delta in task doc | 5 | **SATISFIED** — task doc post-wave-5 manifest @ step 47 | T12 deliverable |
| RF21 | `RW E08:S03:T12 --art` for wave-5 code release | 5 | **SATISFIED** @ v0.8.3.12+7 | RF6 |

**Release evidence:** v0.8.3.12+1 (wave-1 remediation), +2 (kanban re-scan), +3 (IPP link hygiene), +4 (wave-2 remediation), +5 (wave-3 verification), +6 (wave-4 print-at-import), +7 (wave-5 gap closure). See task doc baseline through post-wave-5 tables; post-merge dashboard capture **open** (§4.6 step 28).

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RNF1 | **Autofix-first** for safe hygiene; manual only where autofix risks behavior change; wave-2/3 fold rules require triage-before-bulk-fix | BR-099 remediation theme |
| RNF2 | Changes must be **revertible** per directory chunk (no mixed unrelated edits) | Large blast radius |
| RNF3 | Changelog: **"Change implemented"** / **"Attempted fix"** until dashboard verified | RW rules |
| RNF4 | Coordinate with **E08:S03:T13** — do not fix reliability-rule findings in this task | T12 Input |
| RNF5 | Accept **T13-deferred** `py/print-during-import` findings (**16** — remediated wave 4); do not re-open T13 reliability hunks (`exit/quit`, mixed-returns, wrong-arguments) | [T13 wave-2 triage](../project-management/kanban/epics/epic-08/story-03-automation-scripts/T13-code-quality-reliability-backlog-br100.md) |
| RNF6 | Wave 5 treats **`packages/`** and **`greenfield-install/`** as first-class; run `sync_greenfield_install.py` after packages edits when mirror parity required | [T16 wave-1 re-scan](../project-management/kanban/epics/epic-08/story-03-automation-scripts/T16-github-security-code-quality-health-perpetual-fr112.md) |

### 1.3 Invariants and boundaries

- **Invariants:** Python 3.11+ per FR-104; no `git tag -f` / force-push on release tags (BR-097); post-ship verification uses `RW E08:S03:T12 --art` only
- **In scope (wave 1 — done):** Wave-1 maintainability rules (`py/unused-import`, `py/unused-local-variable`, `py/unused-global-variable`, `py/import-and-import-from`, `py/repeated-import`, `py/unnecessary-pass`, `py/unnecessary-lambda`); full repo Python including `greenfield-install/`; `ruff` dev dependency
- **In scope (wave 2 — done):** `py/print-during-import` (1 fix in wave-2 scope dirs); remaining maintainability **fold** rules in `packages/frameworks/`, `tests/`, `scripts/`, `cli/`
- **In scope (wave 3 — done):** `greenfield-install/` mirror — F541 + hygiene (`F401`, `F841`, `I001`, `F811`, `F823`); verified **0** open @ +5
- **In scope (wave 4 — done):** `py/print-during-import` — **16** findings from T13 deferral; shipped @ v0.8.3.12+6 (**14** files); reliability band — does not reduce maintainability subtotal
- **In scope (wave 5 — done):** **146** maintainability residuals: dead yaml blocks, unused module globals, import hygiene across `packages/`, `tests/`, `scripts/`, `cli/`, `greenfield-install/` mirror sync (**88** files) @ **v0.8.3.12+7**
- **In scope (closure — open):** Post–wave-5 merge dashboard capture; Good+ verification; terminal RW + COMPLETE or wave 6 contingency (§4.7)
- **Out of scope (explicit):** T13 reliability rules (`exit/quit`, mixed-returns, wrong-arguments); 93 out-of-scope ruff findings (E402, F821, …) per wave-3 triage unless surfaced on dashboard; BR-101 AI suggestions (T14); CodeQL **security** sidebar (T08–T11); new CI quality gates / rulesets; `test_install_error_docs_sync` fix (T15); T16 perpetual RW (deferred until T12–T14 sign-off)

---

## 2. Specification

### 2.1 Goal

Three-phase maintainability burn-down per [BR-099](../project-management/kanban/fr-br/BR-099-code-quality-maintainability-backlog.md), extended with waves 4–5 and closure:

- **Phase A (wave 1 — complete):** Autofix-safe hygiene across full Python corpus; ≥50% open-count reduction; CI green.
- **Phase B (wave 2 — complete):** Script/test cleanup (`py/print-during-import` + fold rules) in scope dirs; post-wave-2 manifest and RW release @ v0.8.3.12+4.
- **Phase C (wave 3 — complete):** `greenfield-install/` mirror verification @ v0.8.3.12+5; local proxy **0** open for wave-3 rule set.
- **Phase D (wave 4 — complete):** T13-deferred **16** `py/print-at-import` findings; RW @ v0.8.3.12+6; reliability band only.
- **Phase E (wave 5 — complete):** CodeQL-aligned burn-down of **146** maintainability residuals (ruff/CodeQL gap closure); RW @ **v0.8.3.12+7**.
- **Phase F (closure — open):** Read-only dashboard capture after wave-5 merge; terminal RW + COMPLETE only when **Good+** confirmed; else wave 6 (§4.7).

### 2.2 Specification mapping from ascertained requirements

- RF1 → baseline manifest table in task doc (satisfied)
- RF2, RF7 → directory-chunked `ruff` autofix + manual pass on wave-1 rules (satisfied)
- RF3 → dashboard re-scan **560→145** (satisfied)
- RF4 → post-wave score check; **Good+ required** before COMPLETE — still **Fair** @ **146** post–wave-4 merge; wave 5 + closure re-scan required
- RF5 → `pytest tests/` and workflow-scripts gate (**satisfied** @ wave 5 — 407 / 119)
- RF6 → BR-099 update + RW Step 7 four-surface reconciliation (interim releases @ +1–+7 done; **terminal closure open** until Good+)
- RF8 → wave-2 manifest table in task doc (satisfied)
- RF9 → directory-chunked fixes for print-at-import + fold rules (satisfied @ +4; wave-4 print backlog remains)
- RF10 → post-wave-2 manifest in task doc (satisfied)
- RF11 → wave-3 manifest in task doc (satisfied @ +5)
- RF12 → Chunk F on `greenfield-install/**/*.py` (satisfied — 0 fixes)
- RF13 → post-merge dashboard re-scan; open count + score recorded in T12 task doc (read-only; T16 RW deferred)
- RF14 → wave-4 manifest in task doc (satisfied)
- RF15 → Chunk G/H print-at-import remediation (satisfied @ +6)
- RF16 → post-wave-4 manifest in task doc (satisfied)
- RF17 → wave-5 manifest in task doc @ post–wave-4 merge SHA (**satisfied** — step 39)
- RF18 → ruff/CodeQL gap analysis in task doc (**satisfied** — step 40)
- RF19 → Chunks I–K remediation across full corpus (**satisfied** — steps 42–45)
- RF20 → post-wave-5 manifest in task doc (**satisfied** — step 47)
- RF21 → wave-5 RW release (**satisfied** @ v0.8.3.12+7 — step 49)

### 2.3 Constraints

- Python **3.11+** per FR-104
- Wave-1 rule → tool mapping (complete):

| CodeQL rule | Primary remediation |
| ----------- | ------------------- |
| `py/unused-import` | `ruff check --fix --select F401` |
| `py/unused-local-variable` | `ruff --select F841`; prefix `_` if intentionally unused |
| `py/unused-global-variable` | Remove or use; manual review |
| `py/import-and-import-from`, `py/repeated-import` | `ruff --select I001` / manual import consolidation |
| `py/unnecessary-pass` | Manual removal |
| `py/unnecessary-lambda` | Manual replace with direct reference |

- Wave-2 rule → remediation mapping (complete):

| CodeQL rule | Primary remediation |
| ----------- | ------------------- |
| `py/print-during-import` | Move prints behind `if __name__ == "__main__":` or replace with `logging` |
| `py/ineffectual-statement` / F541 | `ruff --select F541 --fix` |
| Wave-1 residuals in scope dirs | `ruff --select F401,F841,I001,F811,F823` |

- Wave-3 rule → remediation mapping (complete):

| CodeQL rule | Primary remediation |
| ----------- | ------------------- |
| `py/ineffectual-statement` / F541 | `ruff --select F541 --fix` on `greenfield-install/**/*.py` |
| Hygiene residuals | `ruff --select F401,F841,I001,F811,F823` on `greenfield-install/**/*.py` |
| Non-autofix residuals | Per-rule triage: fix / waive with task-doc rationale |

- Wave-4 rule → remediation mapping (complete):

| CodeQL rule | Primary remediation |
| ----------- | ------------------- |
| `py/print-during-import` | Move prints behind `if __name__ == "__main__":` or replace with `logging` (per [maintenance-automation-scripts-and-tools.md](../architecture/standards-and-adrs/maintenance-automation-scripts-and-tools.md) CLI patterns) |

- Wave-5 rule → remediation mapping (complete @ +7):

| CodeQL rule | Pre-wave-5 dashboard | Primary remediation |
| ----------- | -------------------- | ------------------- |
| `py/unused-import` | 46 | Dead yaml blocks; `ruff --select F401` + manual |
| `py/import-and-import-from` | 34 | Import consolidation; `ruff --select I001` |
| `py/unused-global-variable` | 28 | Manual remove dead module constants (Chunk J) |
| `py/unused-local-variable` | 13 | `ruff --select F841` |
| `py/ineffectual-statement` | 10 | Dead try/except blocks; `ruff --select F541` |
| `py/multiple-definition` | 5 | Manual (Chunk K) |
| `py/repeated-import` | 4 | `ruff --select F811` |
| `py/unnecessary-lambda` | 4 | Manual (Chunk K) |
| `py/unnecessary-pass` | 2 | Manual (Chunk K) |
| **Subtotal** | **146** | Chunks I–K + `sync_greenfield_install.py` @ +7 |

- Post-ship verification / FBU waves: **`RW E08:S03:T12 --art`** only (BUILD +1); no `--doc-policy-zero`

### 2.4 Status transition intent (mandatory for IPW-derived implementation tasks)

- **Current task status:** **IN PROGRESS** @ **v0.8.3.12+7** (wave 5 shipped; RF4/RF6/RF13 closure **open**)
- **Transition trigger to IN PROGRESS:** First non-planning implementation change lands — **DONE** (wave-1)
- **Transition trigger to COMPLETE:** RF4 **Good+** evidenced via post–wave-5 merge dashboard capture (step 28) **and** terminal **`RW E08:S03:T12 --art`** (step 29); forensic `✅ COMPLETE (v{version})` on step 13
- **If wave-5 merges but score still Fair:** remain **IN PROGRESS**; document counts; plan wave 6 or waivers — **does not satisfy closure** (operator **Good+** hard gate)
- **T16 deferral:** Dashboard re-scan recorded in T12 task doc only (read-only cross-ref allowed); T16 perpetual RW blocked until T12–T14 sign-off
- **Atomic propagation requirement:** Task doc status and kboard row status must update in the same change set/session
- **Owner:** Implementation execution step (not planning-only IPW creation)

### 2.5 ADR necessity decision (mandatory — IPW Phase 5.0)

Score each trigger **Y** or **N** with one-line evidence. Criteria: [`ipw-adr-necessity-checklist.md`](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md) (FR-100).

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | N | Closure continues prescribed burn-down; wave 6 uses same hygiene patterns |
| T2 | Reversibility | N | Hygiene edits revert in one PR per chunk |
| T3 | Blast radius | N | Confined to Python source hygiene + kanban docs; no framework API change |
| T4 | Precedent | N | BR-099 waves 1–5 + closure §4.6 already define multi-wave burn-down |
| T5 | Constraint trade-off | N | No security/performance/versioning trade-off |
| T6 | Governance contract | N | No RW/IPW/validator gate changes |
| T7 | Supersedes | N | No ADR contradiction |

**Outcome:** `EXEMPT` (closure phase — no new ADR)

| ID | Exemption (only if all T = N) | Pass? | Evidence |
| -- | --------------------------- | ----- | -------- |
| E1 | Single locus | Pass | §4.6 file list (Python globs + kanban/docs) |
| E2 | No new options | Pass | Implements BR-099 + task AC only |
| E3 | Reversible in one task | Pass | Standard revert per chunk |
| E4 | Spec elsewhere | Pass | BR-099 + this IPP + task AC |
| E5 | Documented NONE | Pass | §5.3 cites BR-099 and code-quality-monitoring-processes |

---

## 3. Test design

**Note:** No new pytest unit tests required — verification is CI + dashboard metrics + manifest diff (same pattern as [IPP-E08S03T04](IPP-E08S03T04-ci-test-workflow-pytest-remediation-br058.md)). Pre-existing `test_install_error_docs_sync` failure is **T15** scope — exclude from T12 pass criteria (cite [E08:S03:T15](../project-management/kanban/epics/epic-08/story-03-automation-scripts/T15-github-actions-ci-health-perpetual-fr112.md)).

### 3.1 Wave 1 (satisfied)

| ID | Behavior / layer | Expected check | Status | Covers |
| -- | ---------------- | -------------- | ------ | ------ |
| T1 | Baseline evidence | Task doc table: rule → count, date, SHA | **PASS** | RF1 |
| T2 | Local regression | `python3.11 -m pytest tests/` → 0 failed, 0 errors | **PASS** — 396 passed | RF5 |
| T3 | Workflow scripts gate | `workflow-scripts-pytest.yml` job green (or local equivalent) | **PASS** — 116 passed | RF5 |
| T4 | Spot-check hygiene | Sample fixed files: no removed imports that break re-exports or `TYPE_CHECKING` blocks | **PASS** — 13 manual edge cases | RNF1 |
| T5 | Post-wave metrics | Open count ≤50% of baseline | **PASS** — 560→145 (−74.1%) | RF2, RF3 |
| T6 | Score check | Maintainability **Good**+ or lag note in task doc | **PARTIAL** — still **Fair** @ 145 | RF4 |
| T7 | Waivers | Remaining wave-1 rule groups have documented defer rationale | **PASS** — `py/print-during-import` deferred to wave 2 | RF2 |

### 3.2 Wave 2 (satisfied)

| ID | Behavior / layer | Expected check | Status | Covers |
| -- | ---------------- | -------------- | ------ | ------ |
| T8 | Wave-2 manifest | Rule → count @ current `main` SHA for **145** residuals | **PASS** — task doc wave-2 pre-manifest | RF8 |
| T9 | Print-at-import | No remaining `py/print-during-import` in remediated modules | **PASS** — 1 fix in `run_kb_migration_mcp.py` | RF9 |
| T10 | Fold-rule triage | Triage sheet before bulk fix: fix / waive / defer per rule group | **PASS** — task doc wave-2 triage | RF9, RNF1 |
| T11 | Post-wave-2 metrics | Post-wave-2 manifest + open-count delta in task doc | **PASS** — post-wave-2 manifest @ +4 | RF10 |
| T12 | CI regression | T2 + T3 green after wave-2 edits | **PASS** — 405 passed, 118 workflow-scripts; `test_install_error_docs_sync` excluded (T15) | RF5 |

### 3.3 Wave 3 (satisfied)

| ID | Behavior / layer | Expected check | Status | Covers |
| -- | ---------------- | -------------- | ------ | ------ |
| T13 | Wave-3 manifest | Rule → count @ `bf3c10ed` for `greenfield-install/` residuals | **PASS** — 0 open all rules | RF11 |
| T14 | Greenfield proxy | `ruff` proxy **0** on `greenfield-install/` for wave-3 rule set | **PASS** — 0 fixes applied | RF12 |
| T15 | CI regression | `pytest tests/` + workflow-scripts gate green | **PASS** — 407 / 119 passed | RF5 |

### 3.4 Wave 4 (satisfied)

| ID | Behavior / layer | Expected check | Status | Covers |
| -- | ---------------- | -------------- | ------ | ------ |
| T18 | Wave-4 manifest | Rule → count for **16** `py/print-during-import` (T13 deferral + dashboard) in task doc | **PASS** | RF14 |
| T19 | Print-at-import | No module-level print in remediated modules (spot-check + grep) | **PASS** — local proxy **0** | RF15 |
| T20 | CI regression | `pytest tests/` + workflow-scripts gate green | **PASS** — 407 / 119 passed | RF5 |
| T21 | Post-wave-4 metrics | Post-wave-4 manifest + expected open-count delta in task doc | **PASS** | RF16 |

### 3.5 Wave 5 (complete @ v0.8.3.12+7)

| ID | Behavior / layer | Expected check | Status | Covers |
| -- | ---------------- | -------------- | ------ | ------ |
| T22 | Wave-5 manifest | Rule → count @ current `main` SHA (post–wave-4 merge) in task doc | **PASS** | RF17 |
| T23 | Gap analysis | Ruff count vs expected CodeQL rule count per directory (`packages/` vs `greenfield-install/`) | **PASS** | RF18 |
| T24 | CodeQL-aligned fixes | After Chunks I–K: re-run ruff **and** spot-check dashboard-flagged files | **PASS** | RF19 |
| T25 | CI regression | `pytest tests/` + workflow-scripts gate green | **PASS** — 407 / 119 | RF5 |
| T26 | Post-wave-5 metrics | Post-wave-5 manifest + expected dashboard delta in task doc | **PASS** | RF20 |

### 3.6 Closure (open)

| ID | Behavior / layer | Expected check | Status | Covers |
| -- | ---------------- | -------------- | ------ | ------ |
| T28 | Dashboard capture | Read-only snapshot: open count, score, rule breakdown, `main` SHA in task doc (post–wave-5 merge) | **PARTIAL** — lag-accepted @ `56b34f0d`; UI refresh pending | RF13, RF4 |
| T29 | CI regression | `pytest tests/` + workflow-scripts gate green (re-run before any wave-6 code) | **OPEN** (before wave 6 code) | RF5 |
| T30 | Local proxy | `ruff check --select F401,F841,I001,F811,F541` on `packages/`, `greenfield-install/`, `scripts/` → 0 | **PASS** @ v0.8.3.12+7 (wave-5 tag) | RF5 |
| T31 | Mirror parity | `python3 scripts/sync_greenfield_install.py --check` if wave 6 touches `packages/` | **OPEN** (conditional) | RNF6 |
| T32 | Closure branch | If Good+: task **COMPLETE**; else **IN PROGRESS** + wave-6 plan | **PASS** — **IN PROGRESS** (Fair branch) | RF4, RF6 |
| T16 | Dashboard verify | Post-wave-5 merge re-scan: open count + score **Good+** (alias for T28) | **PARTIAL** | RF4, RF13 |
| T17 | Kanban closure | BR-099 resolution narrative + four-surface terminal RW Step 7 (Good+ path only) | **N/A** — Fair branch | RF6 |

---

## 4. Implementation plan

### 4.0 Wave 1 ledger (DONE — do not re-execute)

| Step | Action | Status | Version / evidence |
| ---- | ------ | ------ | ------------------ |
| **1** | **[MANDATORY] Transition task `E08:S03:T12` status `TODO → IN PROGRESS`** | **DONE** | Task doc IN PROGRESS |
| 2 | Capture baseline manifest in task doc | **DONE** | 560 open @ `5fcf102` |
| 3 | Add `ruff` to `setup.py` `extras_require["dev"]` | **DONE** | v0.8.3.12+1 |
| 4 | **Chunk A:** `ruff check --fix` on `packages/frameworks/**/*.py` | **DONE** | 406 files touched |
| 5 | **Chunk B:** same on `tests/`, `scripts/`, `cli/` | **DONE** | ruff proxy 937→0 |
| 6 | **Chunk C:** same on `greenfield-install/**/*.py` | **DONE** | wave-1 scope |
| 7 | Manual pass: unnecessary-pass/lambda, import edge cases | **DONE** | 13 manual fixes |
| 8 | Run T2 + T3 locally | **DONE** | CI green |
| 9 | Post-wave manifest + open-count delta | **DONE** | task doc post-wave + re-scan tables |
| 10 | Update BR-099 fix-attempt narrative | **DONE** | @ +1, +2 |
| 11 | `RW E08:S03:T12 --art` | **DONE** | +1, +2, +3 |
| 12 | Verify dashboard score (T6) | **PARTIAL** | ≥50% met; Good not met |

### 4.1 Wave 2 ledger (DONE — do not re-execute)

| Step | Action | Status | Version / evidence |
| ---- | ------ | ------ | ------------------ |
| 14 | Export wave-2 manifest; record rule breakdown for **145** in task doc | **DONE** | task doc wave-2 pre-manifest |
| 15 | Triage sheet: each wave-2 rule group → fix / waive / defer | **DONE** | task doc wave-2 triage |
| 16 | **Chunk D:** `py/print-during-import` — `packages/frameworks/`, `tests/`, `scripts/`, `cli/` | **DONE** | 1 module-level print fixed |
| 17 | **Chunk E:** Remaining fold rules from manifest — same directory order | **DONE** | 169 ruff fixes, 52 files |
| 18 | Run T2, T3, T12 locally; fix any regressions | **DONE** | 405 passed, 118 workflow-scripts |
| 19 | Post-wave-2 manifest + dashboard check (T11, T6) | **DONE** | task doc post-wave-2 manifest |
| 20 | Update BR-099 fix-attempt narrative | **DONE** | @ +4 |
| 21 | `RW E08:S03:T12 --art` — BUILD+1, changelog, RW Step 7 four-surface | **DONE** | v0.8.3.12+4 |

### 4.2 Wave 3 ledger (DONE — do not re-execute)

| Step | Action | Status | Version / evidence |
| ---- | ------ | ------ | ------------------ |
| 22 | Export wave-3 manifest; record rule breakdown for `greenfield-install/` in task doc | **DONE** | task doc wave-3 pre-manifest @ `bf3c10ed` |
| 23 | Triage sheet: each wave-3 rule group → fix / waive / defer | **DONE** | task doc wave-3 triage |
| 24 | **Chunk F:** `ruff check --fix --select F541,F401,F841,I001,F811,F823` on `greenfield-install/**/*.py` | **DONE** — 0 fixes (already clear) | RF12 |
| 25 | Manual pass: any non-autofix residuals from manifest | **DONE** — none | RF12 |
| 26 | Run T15 locally (`pytest tests/`, workflow-scripts gate) | **DONE** — 407 / 119 passed | RF5 |
| 27 | Post-wave-3 local proxy manifest in task doc | **DONE** | @ +5 |
| — | `RW E08:S03:T12 --art` — wave-3 verification release | **DONE** | v0.8.3.12+5 |

### 4.3 Wave 4 ledger (DONE — do not re-execute)

| Step | Action | Deliverable | Status |
| ---- | ------ | ----------- | ------ |
| 31 | Export wave-4 manifest from [Code Quality dashboard](https://github.com/RMS-Ltd/ai-dev-kit/security/quality) (`is:open`, maintainability or filter `py/print-during-import`); reconcile with T13 deferral count (**16**) in task doc | RF14 | **DONE** @ 2026-06-06 |
| 32 | Triage sheet: each wave-4 file cluster → fix / waive / defer (waivers must cite rationale) | RF15, RNF1 | **DONE** |
| 33 | **Chunk G:** `py/print-during-import` — `packages/frameworks/`, `tests/`, `scripts/`, `cli/` | RF15 | **DONE** — 7 modules |
| 34 | **Chunk H:** mirror — `greenfield-install/**/*.py` | RF15 | **DONE** — 7 mirrors |
| 35 | Run T20 locally (`pytest tests/`, workflow-scripts gate); fix regressions | RF5 | **DONE** — 407 / 119 passed |
| 36 | Post-wave-4 manifest in task doc | RF16 | **DONE** |
| 37 | Update BR-099 fix-attempt narrative (not "Fixed" until dashboard verified) | RF6 | **DONE** |
| 38 | `RW E08:S03:T12 --art` — BUILD+1, changelog, RW Step 7 four-surface | RF6 | **DONE** @ v0.8.3.12+6 |

### 4.5 Wave 5 ledger (DONE @ v0.8.3.12+7 — do not re-execute)

| Step | Action | Deliverable | Status |
| ---- | ------ | ----------- | ------ |
| 39 | **Read-only dashboard capture** @ current `main` SHA; record open count, score, rule breakdown in task doc | RF17, RF13 (interim) | **DONE** |
| 40 | **Gap analysis:** per rule, run ruff on `packages/` + `greenfield-install/` separately; document mismatches | RF18 | **DONE** |
| 41 | Triage sheet: each wave-5 rule group → fix / waive / defer | RF19, RNF1 | **DONE** |
| 42 | **Chunk I:** hygiene rules — F401,F841,I001,F811,F541 on both trees | RF19 | **DONE** |
| 43 | **Chunk J:** `py/unused-global-variable` — manual dead module constants | RF19 | **DONE** |
| 44 | **Chunk K:** multiple-definition, unnecessary-lambda, unnecessary-pass | RF19 | **DONE** |
| 45 | Run `scripts/sync_greenfield_install.py`; `--check` passes | RF19, RNF6 | **DONE** |
| 46 | Run T25 locally (`pytest tests/`, workflow-scripts gate) | RF5 | **DONE** — 407 / 119 |
| 47 | Post-wave-5 manifest in task doc | RF20 | **DONE** |
| 48 | Update BR-099 fix-attempt narrative | RF6 | **DONE** |
| 49 | `RW E08:S03:T12 --art` — BUILD+7, changelog, RW Step 7 four-surface | RF21 | **DONE** @ v0.8.3.12+7 |

### 4.6 Closure ledger (OPEN — post–wave 5)

| Step | Action | Deliverable | Status |
| ---- | ------ | ----------- | ------ |
| **1** | Confirm task **E08:S03:T12** remains **IN PROGRESS**; update `Last updated` | Task doc | **DONE** |
| **50** | **Precondition:** If v0.8.3.12+7 not on remote/`main`, operator batch-pushes `dev` + tags `v0.8.3.12+7`, `v0.4.1001`; merge to `main` per release policy | Remote scan input | **DONE** — `origin/dev` @ `56b34f0d`; tags on remote |
| **28** | **Read-only dashboard capture** post–wave-5 merge: open count, score, rule breakdown, SHA → **Post-wave-5-merge manifest** in task doc | RF13, RF4 | **DONE** (lag-accepted **146/Fair**; operator UI refresh pending) |
| **51** | Reconcile IPP §1 RF table + closure statuses after step 28 | IPP hygiene | **DONE** |
| **29a** | **If Good+:** Update BR-099 resolution (not "Fixed" until T16 cycle); terminal **`RW E08:S03:T12 --art`**; RW Step 7 four-surface; story checklist ✅ | RF4, RF6 | **N/A** — Fair branch |
| **29b** | **If Good+:** Update T16 deferral — T12 resume trigger met | T16 handoff | **N/A** — Fair branch |
| **30a** | **If still Fair @ material count:** Document residual rule breakdown; execute **§4.7 Wave 6** | RF4 | **IN PROGRESS** — wave-6 pre-manifest + plan |
| **30b** | **If waivers chosen:** Per-rule waiver rationale in task doc + BR-099 | RNF1 | **N/A** |
| **13** | **[MANDATORY] Reconcile status:** **COMPLETE** only if step 29 Good+; else **IN PROGRESS** | Task doc + kboard | **DONE** — **IN PROGRESS** |
| **—** | Interim closure-docs **`RW E08:S03:T12 --art`** @ **v0.8.3.12+8** (BUILD+8; four-surface reconciliation) | RF6 (interim) | **DONE** @ v0.8.3.12+8 |

**RW verification / FBU wave rule (BR-097):** Post-ship verification prescribes **`RW E08:S03:T12 --art`** only. Do **not** prescribe `--doc-policy-zero` for follow-on releases after a tagged BUILD.

**Operator prerequisites (step 50):**

1. Push local release if not remote: `dev` + `refs/tags/v0.8.3.12+7` + `refs/tags/v0.4.1001`
2. Ensure CodeQL scan has run on the commit containing wave-5 changes (typically `main` after merge)
3. Capture dashboard counts for task doc manifest (step 28)

### 4.7 Wave 6 contingency ledger (OPEN — populate only if step 28 fails Good+)

Use dashboard rule breakdown from step 28 (not pre-wave-5 **146** snapshot).

| Step | Action | Deliverable | Status |
| ---- | ------ | ----------- | ------ |
| 52 | Export **wave-6 pre-manifest**: rule → count @ post–wave-5 merge SHA in task doc | RF4 (contingency) | **IN PROGRESS** — stub in task doc; refresh after operator UI |
| 53 | Triage sheet: each wave-6 rule group → fix / waive / defer | RNF1 | **OPEN** |
| 54 | **Chunk L:** CodeQL-only / manual rules — `py/unused-global-variable`, `py/multiple-definition`, `py/unnecessary-lambda`, `py/unnecessary-pass` | RF4 | **OPEN** |
| 55 | **Chunk M:** Residual hygiene + mirror — ruff proxy + `sync_greenfield_install.py` on dashboard-flagged paths | RNF6 | **OPEN** |
| 56 | Run T29–T31 locally; fix regressions | RF5 | **OPEN** |
| 57 | Post-wave-6 manifest in task doc | RF4 | **OPEN** |
| 58 | Update BR-099 fix-attempt narrative | RF6 | **OPEN** |
| 59 | `RW E08:S03:T12 --art` — BUILD+1, changelog, RW Step 7 | RF6 | **OPEN** |
| — | Return to **§4.6 step 28** for post–wave-6 merge re-scan | RF13 | **OPEN** |

**Likely focus if wave 6 required:** CodeQL rules not fully covered by ruff proxy; residual mirror paths in `greenfield-install/`; dashboard-only semantic differences vs local ruff **0**.

### 4.8 Files to create or modify

- **UPDATE (wave 1 — done):** `packages/**/*.py`, `tests/**/*.py`, `scripts/**/*.py`, `cli/**/*.py`, `greenfield-install/**/*.py`; `setup.py` (`ruff` dev dep)
- **UPDATE (wave 2 — done):** `packages/frameworks/**/*.py`, `tests/**/*.py`, `scripts/**/*.py`, `cli/**/*.py`
- **UPDATE (wave 3 — done):** `greenfield-install/**/*.py` (verified 0 fixes @ +5)
- **UPDATE (wave 4 — done):** print-at-import modules across full Python corpus per wave-4 manifest (**14** files @ +6)
- **UPDATE (wave 5 — done):** maintainability gap closure across `packages/`, `tests/`, `scripts/`, `cli/`, `greenfield-install/` (**88** files); RW @ **v0.8.3.12+7**
- **UPDATE (closure — interim @ +8):** Task doc post-merge manifest; BR-099 narrative; IPP §4.6 ledger; story/kboard — **DONE** @ v0.8.3.12+8; terminal closure **open** until Good+
- **UPDATE (wave 6 — conditional):** Same Python globs as wave 5 if step 28 fails Good+

### 4.9 Dependency order

**Wave 1 (complete):** Baseline manifest → tooling (`ruff`) → chunks A → B → C → manual edge cases → pytest green → post-wave manifest → BR/kanban → RW → dashboard verification

**Wave 2 (complete):** Wave-2 manifest → triage → Chunk D → Chunk E → CI → post-wave-2 manifest → BR/kanban → RW @ +4

**Wave 3 (complete):** Wave-3 manifest → triage → Chunk F → manual pass → CI → post-wave-3 manifest → RW @ +5

**Wave 4 (complete):** Wave-4 manifest → triage → Chunk G → Chunk H → CI → post-wave-4 manifest → BR/kanban → RW @ +6

**Wave 5 (complete):** Wave-5 manifest → gap analysis → triage → Chunk I → J → K → mirror sync → CI → post-wave-5 manifest → BR/kanban → RW @ **v0.8.3.12+7**

**Closure (open):** Step 50 push/merge → step 28 dashboard capture → branch Good+ (step 29) or wave 6 (§4.7) → step 13 status reconciliation

**Wave 6 (conditional):** Step 28 Fair → §4.7 steps 52–59 → return to step 28

### 4.10 Documentation implementation steps

1. Record post–wave-5-merge manifest in task doc (step 28) before terminal closure or wave 6
2. If Good+: update BR-099 resolution + T16 handoff before terminal RW (step 29)
3. If Fair: populate wave-6 pre-manifest (step 52) before bulk fixes
4. RW Step 7 updates story checklist, kboard, BR-099 in same release (steps 29 / 59)

---

## 5. Documentation deliverables

### 5.1 Existing documents to update

| Doc ID | Path | Scope of change | Tied to (RF/T/impl step) |
| ------ | ---- | --------------- | ------------------------ |
| D-U1 | `docs/project-management/kanban/epics/epic-08/story-03-automation-scripts/T12-code-quality-maintainability-backlog-br099.md` | Wave 1–5 manifests (**done**); **Post-wave-5-merge manifest** + closure status (**open** — step 28) | RF13, RF4, steps 28/13 |
| D-U2 | `docs/project-management/kanban/fr-br/BR-099-code-quality-maintainability-backlog.md` | Wave-5 fix-attempt (**done** @ +7); resolution or wave-6 narrative (**open**) | RF6, steps 48/29/58 |
| D-U3 | `docs/project-management/kanban/epics/epic-08/story-03-automation-scripts.md` | Checklist on terminal RW (**open** — step 29) | step 29 |
| D-U4 | `docs/project-management/kanban/kboard.md` | RW Step 7 row + stamp evidence on terminal RW | steps 29/59 |
| D-U5 | `setup.py` | `ruff` dev dependency (**done**) | step 3, RNF1 |
| D-U6 | `docs/project-management/kanban/epics/epic-08/story-03-automation-scripts/T16-github-security-code-quality-health-perpetual-fr112.md` | Narrow deferral; T12 handoff (**open** — Good+ path only, step 29b) | T16 resume |
| D-N1 | Wave-6 IPP §4.7 execution | **NONE** until step 28 fails Good+ | step 30a |

### 5.2 New documents to create

| Doc ID | Proposed path (draft) | Purpose | Tied to (RF/T/impl step) |
| ------ | --------------------- | ------- | ------------------------ |
| D-C1 | `docs/implementation-cycles/IPP-E08S03T12-code-quality-maintainability-backlog-br099.md` | This planning package (revised wave 5 + closure) | IPW |

### 5.3 Documentation gaps and explicit non-changes

| Gap / topic | Resolution (CREATE row above, or NONE + reason) |
| ----------- | ----------------------------------------------- |
| Code quality burn-down methodology | NONE — BR-099 wave table is authoritative; governed by [BR-099](../project-management/kanban/fr-br/BR-099-code-quality-maintainability-backlog.md) and [code-quality-monitoring-processes.md](../architecture/standards-and-adrs/code-quality-monitoring-processes.md) |
| New ADR for hygiene approach | NONE — EXEMPT per §2.5 |
| New CI quality gate workflow | NONE — out of scope; dashboard verification manual at steps 12/28 |
| Dedicated baseline manifest file | NONE — AC requires manifest in task doc only |
| T13-deferred print-at-import (**16**) | **DONE** — wave 4 @ +6; reliability band |
| Wave-5 ruff/CodeQL gap | **DONE** @ +7 — see task doc gap analysis |
| Wave-6 contingency | **CONDITIONAL** — §4.7; populate only if step 28 fails Good+ |
| `test_install_error_docs_sync` failure | NONE — T15 scope; excluded from T12 CI pass criteria |

---

## 6. Documentation housing

| Doc ID | Canonical path | Publication status | Publication N/A reason (if N/A) | Lifecycle | Inbound links to add |
| ------ | -------------- | ------------------ | ------------------------------- | --------- | -------------------- |
| D-C1 | `docs/implementation-cycles/IPP-E08S03T12-code-quality-maintainability-backlog-br099.md` | NOT_APPLICABLE | Planning artifact; not Docusaurus-facing | evergreen | Task doc Input + References |
| D-U1 | `docs/project-management/kanban/epics/epic-08/story-03-automation-scripts/T12-code-quality-maintainability-backlog-br099.md` | NOT_APPLICABLE | Kanban internal | evergreen | BR-099 implementing task link (exists) |
| D-U2 | `docs/project-management/kanban/fr-br/BR-099-code-quality-maintainability-backlog.md` | NOT_APPLICABLE | Kanban internal | evergreen | Task doc upstream link (exists) |
| D-U3 | `docs/project-management/kanban/epics/epic-08/story-03-automation-scripts.md` | NOT_APPLICABLE | Kanban internal | evergreen | Story checklist |
| D-U4 | `docs/project-management/kanban/kboard.md` | NOT_APPLICABLE | Kanban internal | evergreen | MoSCOW row |
| D-U5 | `setup.py` | NOT_APPLICABLE | Dev dependency manifest | evergreen | None required |

**Housing rules:** One authoritative doc per topic; IPP under `docs/implementation-cycles/`; kanban four-surface on RW.

---

## 7. Success / verification criteria

### Wave 1 (complete)

- [x] Baseline manifest in task doc (rule → count, SHA, date)
- [x] Wave-1 rules remediated or waived with rationale
- [x] Open count reduced ≥50% (**560→145**, −74.1%)
- [ ] Maintainability score Good+ (still **Fair** @ **146** post–wave-4 merge — wave 5 + closure re-scan pending)
- [x] `pytest tests/` + workflow-scripts CI green
- [ ] BR-099 final closure RW (interim releases @ +1–+6 done)
- [x] IPP bidirectionally linked from task doc

### Wave 2 (complete)

- [x] Wave-2 manifest (145 by rule) in task doc
- [x] Wave-2 triage sheet (fix / waive / defer per rule group)
- [x] `py/print-during-import` remediated (1 fix in wave-2 scope)
- [x] Fold rules remediated (F541 + hygiene in wave-2 scope dirs)
- [x] Post-wave-2 manifest + RW release @ v0.8.3.12+4

### Wave 3 (complete)

- [x] Wave-3 manifest (`greenfield-install/` rule breakdown) in task doc
- [x] Wave-3 triage sheet (fix / waive / defer per rule group)
- [x] `greenfield-install/` remediated or waived (0 fixes — corpus already clear)
- [x] Post-wave-3 manifest in task doc
- [x] RW release @ v0.8.3.12+5

### Wave 4 (complete)

- [x] Wave-4 manifest (**16** `py/print-during-import` from T13 deferral) in task doc
- [x] Wave-4 triage sheet (fix / waive / defer per file cluster)
- [x] Print-at-import remediated across full Python corpus (**14** files)
- [x] Post-wave-4 manifest in task doc
- [x] `RW E08:S03:T12 --art` for wave-4 release (**v0.8.3.12+6**)

### Wave 5 (complete)

- [x] Wave-5 manifest (**146** maintainability @ post–wave-4 merge) in task doc
- [x] Ruff/CodeQL gap analysis documented in task doc
- [x] Wave-5 triage sheet (fix / waive / defer per rule group)
- [x] Chunks I–K remediated across full corpus + mirror sync
- [x] Post-wave-5 manifest in task doc
- [x] `RW E08:S03:T12 --art` for wave-5 release (**v0.8.3.12+7**)

### Closure (open)

- [x] Step 50: v0.8.3.12+7 on remote/`main` (`56b34f0d`)
- [x] Step 28: Post–wave-5-merge manifest in T12 task doc (lag-accepted **146/Fair**; operator UI refresh pending)
- [ ] Step 29: If **Good+** — terminal `RW E08:S03:T12 --art` + BR-099 resolution + T16 handoff (**N/A** — Fair branch)
- [x] Step 13: Status reconciliation — **IN PROGRESS** (Fair @ material count)
- [x] Step 30a: Wave 6 planned — pre-manifest stub + §4.7 ledger active

### Documentation

- [x] All §5 wave-1/2/3/4/5 UPDATE items implemented
- [ ] §5 closure UPDATE items (D-U1 post-merge manifest; D-U2 resolution; D-U6 T16 — **open**)
- [x] All §6 paths exist and are linked from task doc

---

## References

- [BR-099](../project-management/kanban/fr-br/BR-099-code-quality-maintainability-backlog.md)
- [BR-100](../project-management/kanban/fr-br/BR-100-code-quality-reliability-backlog.md)
- [IPP-E08S03T13](IPP-E08S03T13-code-quality-reliability-backlog-br100.md) — T13 wave-2 print-at-import deferral (**16** → T12 wave 4 @ +6)
- [scripts/sync_greenfield_install.py](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/scripts/sync_greenfield_install.py) — mirror sync after wave-5 packages edits
- [T12 task doc](../project-management/kanban/epics/epic-08/story-03-automation-scripts/T12-code-quality-maintainability-backlog-br099.md)
- [E08:S03:T16](../project-management/kanban/epics/epic-08/story-03-automation-scripts/T16-github-security-code-quality-health-perpetual-fr112.md) — T16 deferral; read-only dashboard cross-refs allowed
- [E08:S03:T15](../project-management/kanban/epics/epic-08/story-03-automation-scripts/T15-github-actions-ci-health-perpetual-fr112.md) — `test_install_error_docs_sync` scope
- [IPP-E08S03T04](IPP-E08S03T04-ci-test-workflow-pytest-remediation-br058.md)
- [code-quality-monitoring-processes.md](../architecture/standards-and-adrs/code-quality-monitoring-processes.md)
- [ipw-adr-necessity-checklist.md](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md)
- [FR-042](../project-management/kanban/fr-br/FR-042-implementation-planning-workflow-ipw.md)
- [BR-097](../project-management/kanban/fr-br/BR-097-rw-agent-reuses-tagged-build-and-force-moves-release-tags.md)

---

## Implementation gate (P-IPW-GATE)

**Planning complete (closure phase).** Wave 5 @ **v0.8.3.12+7**; closure steps **1, 50, 28, 51, 13** executed (Fair branch). **Wave 6 code** requires explicit operator authorization after UI refresh:

1. Operator refreshes [Code Quality UI](https://github.com/RMS-Ltd/ai-dev-kit/security/quality) counts → update task doc post-merge + wave-6 pre-manifest
2. **`implement wave 6`** or **`RW E08:S03:T12 --art`** for §4.7 steps 54–59
3. **Good+ path only:** step 29 terminal RW + **COMPLETE**

Do not force **COMPLETE** without **Good+** evidence (step 13).
