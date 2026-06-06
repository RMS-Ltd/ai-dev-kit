---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T12:00:00Z
revised_at: 2026-06-06T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E08:S03:T12 — Planning: Spec, Tests, Implementation Plan (IPW)

**Host Task:** [`T12-code-quality-maintainability-backlog-br099.md`](../project-management/kanban/epics/epic-08/story-03-automation-scripts/T12-code-quality-maintainability-backlog-br099.md) **(E08:S03:T12)**  
**Planning for:** [BR-099](../project-management/kanban/fr-br/BR-099-code-quality-maintainability-backlog.md)  
**Status:** Approved — wave 1–3 local proxy complete; T16 **Good+** gate + terminal RW pending

> **IPW:** Produced for E08:S03:T12. Bulk **Code Quality maintainability** burn-down; complements security CodeQL tasks E08:S03:T08–T11 and defers reliability ([BR-100](../project-management/kanban/fr-br/BR-100-code-quality-reliability-backlog.md) / E08:S03:T13).
>
> **Revision (2026-06-05):** Wave-1 shipped @ v0.8.3.12+1–+3. Dashboard re-scan: **560→145** open maintainability (−74.1%) @ `main` `cadb0c3`; score still **Fair**.
>
> **Revision (2026-06-06):** Wave-3 verified @ `bf3c10ed` — `greenfield-install/` wave-3 rule set **0** open (no code edits); pytest **407** / workflow-scripts **119** passed. Dashboard **Good+** re-scan (T16) and terminal RW remain open.

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Wave | Status | Source (FR/BR/Task) |
| -- | ----------- | ---- | ------ | ------------------- |
| RF1 | Capture **baseline manifest** (rule → open count, snapshot date, `main` SHA) in task doc | 1 | **SATISFIED** — task doc baseline table @ `5fcf102` | T12 AC1, BR-099 AC1 |
| RF2 | Remediate or **document-waive** all wave-1 rule groups | 1 | **SATISFIED** — ruff proxy 937→0; 13 manual import edge cases | T12 AC2, BR-099 AC2 |
| RF3 | Reduce open maintainability count **≥50%** vs baseline | 1 | **SATISFIED** — dashboard **560→145** (−74.1%) | T12 AC2, BR-099 AC2 |
| RF4 | Maintainability score **Good** or better on dashboard | 1–3 | **OPEN** — still **Fair** @ 145 open (pre wave-3 re-scan); **Good+ required before COMPLETE** (operator) | T12 AC4, BR-099 AC3 |
| RF5 | Keep CI green: `pytest tests/`, `workflow-scripts-pytest`, `tests.yml` | 1–3 | **SATISFIED** (wave-1–2) — 405 passed / 118 workflow-scripts; exclude pre-existing `test_install_error_docs_sync` (T15 scope) | T12 AC5, BR-099 AC4 |
| RF6 | Close kanban loop: BR-099 resolution + **RW E08:S03:T12 --art** on completion | 1–3 | **OPEN** — interim RW @ +1–+4; final closure deferred until RF4 satisfied | T12 AC6, BR-099 AC5 |
| RF7 | Include **`greenfield-install/`** in wave 1 hygiene pass | 1 | **SATISFIED** — Chunk C in wave-1 release | IPW scope decision |
| RF8 | Export **wave-2 manifest**: rule → count for **145** residuals before bulk edits | 2 | **SATISFIED** — task doc wave-2 pre-manifest @ `cadb0c3` | BR-099 wave 2, task doc |
| RF9 | Remediate wave-2 rules: `py/print-during-import` + remaining maintainability **fold** rules | 2 | **SATISFIED** — 169 ruff fixes + 1 print-at-import fix; wave-2 scope proxy **0** | BR-099 wave 2, T12 deliverable |
| RF10 | Post-wave-2 manifest + dashboard delta in task doc | 2 | **SATISFIED** — task doc post-wave-2 manifest @ v0.8.3.12+4 | T12 deliverable #3 |
| RF11 | Export **wave-3 manifest**: rule → count for `greenfield-install/` @ current `main` SHA | 3 | **SATISFIED** — task doc wave-3 pre-manifest @ `bf3c10ed` (0 open) | BR-099 wave 3, task doc |
| RF12 | Remediate wave-3 `greenfield-install/` mirror (~146 F541 + hygiene) | 3 | **SATISFIED** — corpus already clear; 0 ruff fixes applied | BR-099 wave 3, task doc |
| RF13 | Post-wave-3 dashboard re-scan on `main`; record open count + score | 3 | **OPEN** — merge + T16 pending | T12 AC4, BR-099 AC3 |

**Release evidence:** v0.8.3.12+1 (wave-1 remediation), +2 (kanban re-scan), +3 (IPP link hygiene), +4 (wave-2 remediation). See task doc baseline, post-wave, dashboard re-scan, and post-wave-2 tables.

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RNF1 | **Autofix-first** for safe hygiene; manual only where autofix risks behavior change; wave-2/3 fold rules require triage-before-bulk-fix | BR-099 remediation theme |
| RNF2 | Changes must be **revertible** per directory chunk (no mixed unrelated edits) | Large blast radius |
| RNF3 | Changelog: **"Change implemented"** / **"Attempted fix"** until dashboard verified | RW rules |
| RNF4 | Coordinate with **E08:S03:T13** — do not fix reliability-rule findings in this task | T12 Input |

### 1.3 Invariants and boundaries

- **Invariants:** Python 3.11+ per FR-104; no `git tag -f` / force-push on release tags (BR-097); post-ship verification uses `RW E08:S03:T12 --art` only
- **In scope (wave 1 — done):** Wave-1 maintainability rules (`py/unused-import`, `py/unused-local-variable`, `py/unused-global-variable`, `py/import-and-import-from`, `py/repeated-import`, `py/unnecessary-pass`, `py/unnecessary-lambda`); full repo Python including `greenfield-install/`; `ruff` dev dependency
- **In scope (wave 2 — done):** `py/print-during-import`; remaining maintainability **fold** rules in `packages/frameworks/`, `tests/`, `scripts/`, `cli/`
- **In scope (wave 3 — planned):** `greenfield-install/` mirror — F541 + hygiene (`F401`, `F841`, `I001`, `F811`, `F823`); ~146 findings measured locally
- **Out of scope (explicit):** BR-100 reliability findings (T13); BR-101 AI suggestions (T14); CodeQL **security** sidebar (T08–T11); new CI quality gates / rulesets; `test_install_error_docs_sync` fix (T15)

---

## 2. Specification

### 2.1 Goal

Three-phase maintainability burn-down per [BR-099](../project-management/kanban/fr-br/BR-099-code-quality-maintainability-backlog.md):

- **Phase A (wave 1 — complete):** Autofix-safe hygiene across full Python corpus; ≥50% open-count reduction; CI green.
- **Phase B (wave 2 — complete):** Script/test cleanup (`py/print-during-import` + fold rules) in scope dirs; post-wave-2 manifest and RW release @ v0.8.3.12+4.
- **Phase C (wave 3 — planned):** `greenfield-install/` mirror remediation; post-merge dashboard re-scan until **Good+** before terminal RW and task/BR closure.

### 2.2 Specification mapping from ascertained requirements

- RF1 → baseline manifest table in task doc (satisfied)
- RF2, RF7 → directory-chunked `ruff` autofix + manual pass on wave-1 rules (satisfied)
- RF3 → dashboard re-scan **560→145** (satisfied)
- RF4 → post-wave score check; **Good+ required** before COMPLETE — interim **Fair** documented; wave-3 + re-scan required
- RF5 → `pytest tests/` and workflow-scripts gate (satisfied wave 1–2; re-run after wave 3)
- RF6 → BR-099 update + RW Step 7 four-surface reconciliation (interim releases @ +1–+4 done; final closure open)
- RF8 → wave-2 manifest table in task doc (satisfied)
- RF9 → directory-chunked fixes for print-at-import + fold rules (satisfied @ +4)
- RF10 → post-wave-2 manifest in task doc (satisfied)
- RF11 → wave-3 manifest in task doc before bulk edits
- RF12 → Chunk F on `greenfield-install/**/*.py`
- RF13 → post-wave-3 dashboard re-scan; open count + score recorded

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

- Wave-3 rule → remediation mapping (planned):

| CodeQL rule | Primary remediation |
| ----------- | ------------------- |
| `py/ineffectual-statement` / F541 | `ruff --select F541 --fix` on `greenfield-install/**/*.py` |
| Hygiene residuals | `ruff --select F401,F841,I001,F811,F823` on `greenfield-install/**/*.py` |
| Non-autofix residuals | Per-rule triage: fix / waive with task-doc rationale |

- Post-ship verification / FBU waves: **`RW E08:S03:T12 --art`** only (BUILD +1); no `--doc-policy-zero`

### 2.4 Status transition intent (mandatory for IPW-derived implementation tasks)

- **Current task status:** **IN PROGRESS** @ v0.8.3.12+4 (wave-2 complete; RF4 open)
- **Transition trigger to IN PROGRESS:** First non-planning implementation change lands — **DONE** (wave-1)
- **Transition trigger to COMPLETE:** RF11–RF13 satisfied **and** dashboard **Good+** (operator policy); forensic `✅ COMPLETE (v{version})` on terminal RW; all RF1–RF6 evidenced
- **If wave-3 merges but score still Fair:** remain **IN PROGRESS**; document counts as interim narrative — **does not satisfy closure**
- **Atomic propagation requirement:** Task doc status and kboard row status must update in the same change set/session
- **Owner:** Implementation execution step (not planning-only IPW creation)

### 2.5 ADR necessity decision (mandatory — IPW Phase 5.0)

Score each trigger **Y** or **N** with one-line evidence. Criteria: [`ipw-adr-necessity-checklist.md`](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md) (FR-100).

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | N | BR-099 prescribes wave-1 hygiene + ruff; waves 2–3 continue prescribed burn-down |
| T2 | Reversibility | N | Hygiene edits revert in one PR per chunk |
| T3 | Blast radius | N | Confined to Python source hygiene; no framework API / RW contract change |
| T4 | Precedent | N | BR-099 waves already define multi-task burn-down |
| T5 | Constraint trade-off | N | No security/performance/versioning trade-off |
| T6 | Governance contract | N | No RW/IPW/validator gate changes |
| T7 | Supersedes | N | No ADR contradiction |

**Outcome:** `EXEMPT`

| ID | Exemption (only if all T = N) | Pass? | Evidence |
| -- | --------------------------- | ----- | -------- |
| E1 | Single locus | Pass | §4.2 file list (Python globs + kanban/docs) |
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

### 3.3 Wave 3 (local proxy satisfied; dashboard pending)

| ID | Behavior / layer | Expected check | Status | Covers |
| -- | ---------------- | -------------- | ------ | ------ |
| T13 | Wave-3 manifest | Rule → count @ `bf3c10ed` for `greenfield-install/` residuals | **PASS** — 0 open all rules | RF11 |
| T14 | Greenfield proxy | `ruff` proxy **0** on `greenfield-install/` for wave-3 rule set | **PASS** — 0 fixes applied | RF12 |
| T15 | CI regression | `pytest tests/` + workflow-scripts gate green | **PASS** — 407 / 119 passed | RF5 |
| T16 | Dashboard verify | Post-wave-3 re-scan: open count delta + score **Good+** | **OPEN** | RF4, RF13 |
| T17 | Kanban closure | BR-099 resolution narrative + four-surface RW Step 7 | **OPEN** | RF6 |

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

### 4.2 Wave 3 steps (implementation in progress — local proxy complete)

| Step | Action | Deliverable | Status |
| ---- | ------ | ----------- | ------ |
| 22 | Export wave-3 manifest from [Code Quality dashboard](https://github.com/RMS-Ltd/ai-dev-kit/security/quality) or local ruff scan; record rule breakdown for `greenfield-install/` in task doc | RF11 | **DONE** @ 2026-06-06 |
| 23 | Triage sheet: each wave-3 rule group → fix / waive / defer (waivers must cite rationale) | RF12, RNF1 | **DONE** |
| 24 | **Chunk F:** `ruff check --fix --select F541,F401,F841,I001,F811,F823` on `greenfield-install/**/*.py` | RF12 | **DONE** — 0 fixes (already clear) |
| 25 | Manual pass: any non-autofix residuals from manifest | RF12 | **DONE** — none |
| 26 | Run T15 locally (`pytest tests/`, workflow-scripts gate) | RF5 | **DONE** — 407 / 119 passed |
| 27 | Post-wave-3 local proxy manifest in task doc | RF12 | **DONE** |
| 28 | Merge to `main`; wait for / capture GitHub Code Quality re-scan (T16) | RF13 | **OPEN** |
| 29 | If score **Good+** → update BR-099 resolution (not "Fixed" until T16 confirms); `RW E08:S03:T12 --art` | RF6 | **OPEN** |
| 30 | If score still **Fair** after wave-3 merge → **stop at IN PROGRESS**; document counts; do **not** force COMPLETE | RF4 | **OPEN** |
| **13** | **[MANDATORY] Reconcile task `E08:S03:T12` status** to actual state: **COMPLETE** + `✅ COMPLETE (v{version})` only if T16 **Good+**; else **IN PROGRESS**; **BLOCKED** + reason if blocked | Task doc status | **IN PROGRESS** (T16 pending) |

**RW verification / FBU wave rule (BR-097):** Post-ship verification prescribes **`RW E08:S03:T12 --art`** only. Do **not** prescribe `--doc-policy-zero` for follow-on releases after a tagged BUILD.

**Multi-RW note:** Intermediate **`RW E08:S03:T12 --art`** between steps 24–25 is allowed (BUILD +1 each); status stays `IN PROGRESS` until step 13 with T16 **Good+**.

### 4.3 Files to create or modify

- **UPDATE (wave 1 — done):** `packages/**/*.py`, `tests/**/*.py`, `scripts/**/*.py`, `cli/**/*.py`, `greenfield-install/**/*.py`; `setup.py` (`ruff` dev dep)
- **UPDATE (wave 2 — done):** `packages/frameworks/**/*.py`, `tests/**/*.py`, `scripts/**/*.py`, `cli/**/*.py`
- **UPDATE (wave 3 — planned):** `greenfield-install/**/*.py`
- **UPDATE:** Task doc, BR-099, story checklist, kboard (RW Step 7)

### 4.4 Dependency order

**Wave 1 (complete):** Baseline manifest → tooling (`ruff`) → chunks A → B → C → manual edge cases → pytest green → post-wave manifest → BR/kanban → RW → dashboard verification

**Wave 2 (complete):** Wave-2 manifest → triage → Chunk D → Chunk E → CI → post-wave-2 manifest → BR/kanban → RW @ +4

**Wave 3 (planned):** Wave-3 manifest → triage → Chunk F → manual pass → CI → post-wave-3 manifest → merge → dashboard re-scan (T16) → terminal RW → status reconciliation (step 13)

### 4.5 Documentation implementation steps

1. Record wave-3 manifest in task doc (step 22) before code edits
2. Record post-wave-3 manifest in task doc (step 27) before BR-099 resolution update
3. RW Step 7 updates story checklist, kboard, BR-099 in same release (step 29)

---

## 5. Documentation deliverables

### 5.1 Existing documents to update

| Doc ID | Path | Scope of change | Tied to (RF/T/impl step) |
| ------ | ---- | --------------- | ------------------------ |
| D-U1 | `docs/project-management/kanban/epics/epic-08/story-03-automation-scripts/T12-code-quality-maintainability-backlog-br099.md` | Baseline + wave-1/2 manifests (**done**); wave-3 pre/post manifests (**open**) | RF1, RF3, RF8, RF10, RF11, RF13, steps 1/9/14/19/22/27/13 |
| D-U2 | `docs/project-management/kanban/fr-br/BR-099-code-quality-maintainability-backlog.md` | Fix-attempt / resolution (interim **done** @ +4; final closure **open** until Good+) | RF6, steps 10/20/29 |
| D-U3 | `docs/project-management/kanban/epics/epic-08/story-03-automation-scripts.md` | Checklist on terminal RW | steps 11/21/29 |
| D-U4 | `docs/project-management/kanban/kboard.md` | RW Step 7 row | steps 11/21/29 |
| D-U5 | `setup.py` | `ruff` dev dependency (**done**) | step 3, RNF1 |

### 5.2 New documents to create

| Doc ID | Proposed path (draft) | Purpose | Tied to (RF/T/impl step) |
| ------ | --------------------- | ------- | ------------------------ |
| D-C1 | `docs/implementation-cycles/IPP-E08S03T12-code-quality-maintainability-backlog-br099.md` | This planning package (revised wave 3 + Good+ gate) | IPW |

### 5.3 Documentation gaps and explicit non-changes

| Gap / topic | Resolution (CREATE row above, or NONE + reason) |
| ----------- | ----------------------------------------------- |
| Code quality burn-down methodology | NONE — BR-099 wave table is authoritative; governed by [BR-099](../project-management/kanban/fr-br/BR-099-code-quality-maintainability-backlog.md) and [code-quality-monitoring-processes.md](../architecture/standards-and-adrs/code-quality-monitoring-processes.md) |
| New ADR for hygiene approach | NONE — EXEMPT per §2.5 |
| New CI quality gate workflow | NONE — out of scope; dashboard verification manual at steps 12/28 |
| Dedicated baseline manifest file | NONE — AC requires manifest in task doc only |
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
- [ ] Maintainability score Good+ (still **Fair** @ 145 — deferred to wave 3 + re-scan)
- [x] `pytest tests/` + workflow-scripts CI green
- [ ] BR-099 final closure RW (interim releases @ +1–+4 done)
- [x] IPP bidirectionally linked from task doc

### Wave 2 (complete)

- [x] Wave-2 manifest (145 by rule) in task doc
- [x] Wave-2 triage sheet (fix / waive / defer per rule group)
- [x] `py/print-during-import` remediated (1 fix in wave-2 scope)
- [x] Fold rules remediated (F541 + hygiene in wave-2 scope dirs)
- [x] Post-wave-2 manifest + RW release @ v0.8.3.12+4

### Wave 3 (local proxy complete; dashboard verify pending)

- [x] Wave-3 manifest (`greenfield-install/` rule breakdown) in task doc
- [x] Wave-3 triage sheet (fix / waive / defer per rule group)
- [x] `greenfield-install/` remediated or waived (0 fixes — corpus already clear)
- [x] Post-wave-3 manifest in task doc
- [ ] Dashboard re-scan shows **Good+** (T16 — hard gate)
- [ ] Terminal `RW E08:S03:T12 --art` + step 13 COMPLETE reconciliation

### Documentation

- [x] All §5 wave-1/2 UPDATE items implemented
- [ ] §5 wave-3 UPDATE items (D-U1 wave-3 manifests **done**; D-U2 final closure **open** until T16 Good+)
- [x] All §6 paths exist and are linked from task doc

---

## References

- [BR-099](../project-management/kanban/fr-br/BR-099-code-quality-maintainability-backlog.md)
- [BR-100](../project-management/kanban/fr-br/BR-100-code-quality-reliability-backlog.md)
- [T12 task doc](../project-management/kanban/epics/epic-08/story-03-automation-scripts/T12-code-quality-maintainability-backlog-br099.md)
- [E08:S03:T15](../project-management/kanban/epics/epic-08/story-03-automation-scripts/T15-github-actions-ci-health-perpetual-fr112.md) — `test_install_error_docs_sync` scope
- [IPP-E08S03T04](IPP-E08S03T04-ci-test-workflow-pytest-remediation-br058.md)
- [code-quality-monitoring-processes.md](../architecture/standards-and-adrs/code-quality-monitoring-processes.md)
- [ipw-adr-necessity-checklist.md](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md)
- [FR-042](../project-management/kanban/fr-br/FR-042-implementation-planning-workflow-ipw.md)
- [BR-097](../project-management/kanban/fr-br/BR-097-rw-agent-reuses-tagged-build-and-force-moves-release-tags.md)
