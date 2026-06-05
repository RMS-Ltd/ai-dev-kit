---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T12:00:00Z
revised_at: 2026-06-05T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E08:S03:T12 — Planning: Spec, Tests, Implementation Plan (IPW)

**Host Task:** [`T12-code-quality-maintainability-backlog-br099.md`](../project-management/kanban/epics/epic-08/story-03-automation-scripts/T12-code-quality-maintainability-backlog-br099.md) **(E08:S03:T12)**  
**Planning for:** [BR-099](../project-management/kanban/fr-br/BR-099-code-quality-maintainability-backlog.md)  
**Status:** Revised — wave-1 complete; wave-2 planned; awaiting wave-2 implementation authorization

> **IPW:** Produced for E08:S03:T12. First bulk **Code Quality maintainability** burn-down; complements security CodeQL tasks E08:S03:T08–T11 and defers reliability ([BR-100](../project-management/kanban/fr-br/BR-100-code-quality-reliability-backlog.md) / E08:S03:T13).
>
> **Revision (2026-06-05):** Wave-1 shipped @ v0.8.3.12+1–+3. Dashboard re-scan: **560→145** open maintainability (−74.1%) @ `main` `cadb0c3`; score still **Fair**. Wave-2 scope (operator): `py/print-during-import` + remaining maintainability fold rules per BR-099 wave 2; wave-3 `greenfield-install/` mirror deferred to follow-on task.

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Wave | Status | Source (FR/BR/Task) |
| -- | ----------- | ---- | ------ | ------------------- |
| RF1 | Capture **baseline manifest** (rule → open count, snapshot date, `main` SHA) in task doc | 1 | **SATISFIED** — task doc baseline table @ `5fcf102` | T12 AC1, BR-099 AC1 |
| RF2 | Remediate or **document-waive** all wave-1 rule groups | 1 | **SATISFIED** — ruff proxy 937→0; 13 manual import edge cases | T12 AC2, BR-099 AC2 |
| RF3 | Reduce open maintainability count **≥50%** vs baseline | 1 | **SATISFIED** — dashboard **560→145** (−74.1%) | T12 AC2, BR-099 AC2 |
| RF4 | Maintainability score **Good** or better on dashboard (or document GitHub scoring lag) | 1–2 | **OPEN** — still **Fair** @ 145 open; wave-2 may not alone achieve Good; wave-3 deferred | T12 AC4, BR-099 AC3 |
| RF5 | Keep CI green: `pytest tests/`, `workflow-scripts-pytest`, `tests.yml` | 1–2 | **SATISFIED** (wave-1) — 396 passed, workflow-scripts 116 passed | T12 AC5, BR-099 AC4 |
| RF6 | Close kanban loop: BR-099 resolution + **RW E08:S03:T12 --art** on completion | 1–2 | **OPEN** — interim RW @ +1, +2, +3; final closure deferred until RF4 satisfied | T12 AC6, BR-099 AC5 |
| RF7 | Include **`greenfield-install/`** in wave 1 hygiene pass | 1 | **SATISFIED** — Chunk C in wave-1 release | IPW scope decision |
| RF8 | Export **wave-2 manifest**: rule → count for **145** residuals before bulk edits | 2 | **OPEN** | BR-099 wave 2, task doc |
| RF9 | Remediate wave-2 rules: `py/print-during-import` + remaining maintainability **fold** rules | 2 | **OPEN** | BR-099 wave 2, T12 deliverable |
| RF10 | Post-wave-2 manifest + dashboard delta in task doc | 2 | **OPEN** | T12 deliverable #3 |

**Wave-1 release evidence:** v0.8.3.12+1 (remediation), +2 (kanban re-scan), +3 (IPP link hygiene). See task doc baseline, post-wave proxy, and dashboard re-scan tables.

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RNF1 | **Autofix-first** for safe hygiene; manual only where autofix risks behavior change; wave-2 fold rules require triage-before-bulk-fix | BR-099 remediation theme |
| RNF2 | Changes must be **revertible** per directory chunk (no mixed unrelated edits) | Large blast radius |
| RNF3 | Changelog: **"Change implemented"** / **"Attempted fix"** until dashboard verified | RW rules |
| RNF4 | Coordinate with **E08:S03:T13** — do not fix reliability-rule findings in this task | T12 Input |

### 1.3 Invariants and boundaries

- **Invariants:** Python 3.11+ per FR-104; no `git tag -f` / force-push on release tags (BR-097); post-ship verification uses `RW E08:S03:T12 --art` only
- **In scope (wave 1 — done):** Wave-1 maintainability rules (`py/unused-import`, `py/unused-local-variable`, `py/unused-global-variable`, `py/import-and-import-from`, `py/repeated-import`, `py/unnecessary-pass`, `py/unnecessary-lambda`); full repo Python including `greenfield-install/`; `ruff` dev dependency
- **In scope (wave 2 — planned):** `py/print-during-import`; remaining maintainability **fold** rules (export rule breakdown from dashboard before fix); `packages/frameworks/`, `tests/`, `scripts/`, `cli/`
- **Out of scope (explicit):** BR-099 **wave 3** (`greenfield-install/` mirror — follow-on task or future IPP revision); BR-100 reliability findings (T13); BR-101 AI suggestions (T14); CodeQL **security** sidebar (T08–T11); new CI quality gates / rulesets

---

## 2. Specification

### 2.1 Goal

Two-phase maintainability burn-down per [BR-099](../project-management/kanban/fr-br/BR-099-code-quality-maintainability-backlog.md):

- **Phase A (wave 1 — complete):** Autofix-safe hygiene across full Python corpus; ≥50% open-count reduction; CI green.
- **Phase B (wave 2 — planned):** Script/test cleanup (`py/print-during-import` + fold rules) toward score improvement; post-wave-2 manifest and RW release.

**Good** score (RF4) may require wave 3 or follow-on work if Fair persists after wave 2.

### 2.2 Specification mapping from ascertained requirements

- RF1 → baseline manifest table in task doc (satisfied)
- RF2, RF7 → directory-chunked `ruff` autofix + manual pass on wave-1 rules (satisfied)
- RF3 → dashboard re-scan **560→145** (satisfied)
- RF4 → post-wave score check; still **Fair** — open until Good+ or documented lag after wave 2
- RF5 → existing `pytest tests/` and workflow-scripts gate (satisfied wave 1; re-run after wave 2)
- RF6 → BR-099 update + RW Step 7 four-surface reconciliation (interim releases done; final closure open)
- RF8 → wave-2 manifest table in task doc before bulk edits
- RF9 → directory-chunked fixes for print-at-import + fold rules; triage sheet required
- RF10 → post-wave-2 manifest + dashboard delta in task doc

**Scope resolution:** BR-099 remediation-waves table assigns `py/print-during-import` and fold rules to wave 2; wave 3 (`greenfield-install/` mirror) is **deferred** from this IPP.

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

- Wave-2 rule → remediation mapping (planned):

| CodeQL rule | Primary remediation |
| ----------- | ------------------- |
| `py/print-during-import` | Move prints behind `if __name__ == "__main__":` or replace with `logging` |
| Fold rules (TBD from manifest) | Per-rule triage: fix / waive with task-doc rationale |

- Post-ship verification / FBU waves: **`RW E08:S03:T12 --art`** only (BUILD +1); no `--doc-policy-zero`

### 2.4 Status transition intent (mandatory for IPW-derived implementation tasks)

- **Current task status:** **IN PROGRESS** (since wave-1 Step 1; v0.8.3.12+3)
- **Transition trigger to IN PROGRESS:** First non-planning implementation change lands — **DONE** (wave-1)
- **Transition trigger to COMPLETE:** All RF1–RF6, RF8–RF10 evidenced; forensic `✅ COMPLETE (v{version})` on RW; **Good**+ score (RF4) or operator accepts documented lag policy
- **Wave-2 completion alone:** Step 13 reconciles to **IN PROGRESS** if RF4 still open (Fair @ residual count)
- **Atomic propagation requirement:** Task doc status and kboard row status must update in the same change set/session
- **Owner:** Implementation execution step (not planning-only IPW creation)

### 2.5 ADR necessity decision (mandatory — IPW Phase 5.0)

Score each trigger **Y** or **N** with one-line evidence. Criteria: [`ipw-adr-necessity-checklist.md`](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md) (FR-100).

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | N | BR-099 prescribes wave-1 hygiene + ruff; wave-2 continues prescribed burn-down |
| T2 | Reversibility | N | Hygiene edits revert in one PR per chunk |
| T3 | Blast radius | N | Confined to Python source hygiene; no framework API / RW contract change |
| T4 | Precedent | N | BR-099 waves already define multi-task burn-down |
| T5 | Constraint trade-off | N | No security/performance/versioning trade-off |
| T6 | Governance contract | N | No RW/IPW/validator gate changes |
| T7 | Supersedes | N | No ADR contradiction |

**Outcome:** `EXEMPT`

| ID | Exemption (only if all T = N) | Pass? | Evidence |
| -- | --------------------------- | ----- | -------- |
| E1 | Single locus | Pass | §4.1 file list (Python globs + kanban/docs) |
| E2 | No new options | Pass | Implements BR-099 + task AC only |
| E3 | Reversible in one task | Pass | Standard revert per chunk |
| E4 | Spec elsewhere | Pass | BR-099 + this IPP + task AC |
| E5 | Documented NONE | Pass | §5.3 cites BR-099 and code-quality-monitoring-processes |

---

## 3. Test design

**Note:** No new pytest unit tests required — verification is CI + dashboard metrics + manifest diff (same pattern as [IPP-E08S03T04](IPP-E08S03T04-ci-test-workflow-pytest-remediation-br058.md)).

### 3.1 Wave 1 (satisfied)

| ID | Behavior / layer | Expected check | Status | Covers |
| -- | ---------------- | -------------- | ------ | ------ |
| T1 | Baseline evidence | Task doc table: rule → count, date, SHA | **PASS** | RF1 |
| T2 | Local regression | `python3.11 -m pytest tests/` → 0 failed, 0 errors | **PASS** — 396 passed | RF5 |
| T3 | Workflow scripts gate | `workflow-scripts-pytest.yml` job green (or local equivalent) | **PASS** — 116 passed | RF5 |
| T4 | Spot-check hygiene | Sample fixed files: no removed imports that break re-exports or `TYPE_CHECKING` blocks | **PASS** — 13 manual edge cases | RNF1 |
| T5 | Post-wave metrics | Open count ≤50% of baseline | **PASS** — 560→145 (−74.1%) | RF2, RF3 |
| T6 | Score check | Maintainability **Good**+ or lag note in task doc | **PARTIAL** — still **Fair** | RF4 |
| T7 | Waivers | Remaining wave-1 rule groups have documented defer rationale | **PASS** — `py/print-during-import` deferred to wave 2 | RF2 |

### 3.2 Wave 2 (planned)

| ID | Behavior / layer | Expected check | Covers |
| -- | ---------------- | -------------- | ------ |
| T8 | Wave-2 manifest | Rule → count @ current `main` SHA for **145** residuals | RF8 |
| T9 | Print-at-import | No remaining `py/print-during-import` in remediated modules (spot-check + dashboard delta) | RF9 |
| T10 | Fold-rule triage | Triage sheet before bulk fix: fix / waive / defer per rule group | RF9, RNF1 |
| T11 | Post-wave-2 metrics | Post-wave-2 manifest + open-count delta in task doc | RF10 |
| T12 | CI regression | T2 + T3 green after wave-2 edits | RF5 |

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

### 4.1 Wave 2 steps (awaiting authorization)

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| 14 | Export wave-2 manifest from [Code Quality dashboard](https://github.com/RMS-Ltd/ai-dev-kit/security/quality) (`is:open`, maintainability); record rule breakdown for **145** in task doc | RF8 |
| 15 | Triage sheet: each wave-2 rule group → fix / waive / defer (deferrals must cite rationale) | RF9, RNF1 |
| 16 | **Chunk D:** `py/print-during-import` — `packages/frameworks/`, `tests/`, `scripts/`, `cli/` (exclude reliability-only files for T13) | RF9 |
| 17 | **Chunk E:** Remaining fold rules from manifest — same directory order | RF9 |
| 18 | Run T2, T3, T12 locally; fix any regressions | RF5 |
| 19 | Post-wave-2 manifest + dashboard check (T11, T6) | RF10, RF4 |
| 20 | Update BR-099 fix-attempt narrative (not "Fixed" until verified) | RF6 |
| 21 | `RW E08:S03:T12 --art` — BUILD+1, changelog, RW Step 7 four-surface | RF6 |
| **13** | **[MANDATORY] Reconcile task `E08:S03:T12` status** to actual state: **IN PROGRESS** if RF4 open; **COMPLETE** + `✅ COMPLETE (v{version})` only if Good+ and RF6 closure evidenced; **BLOCKED** + reason if blocked | Task doc status |

**RW verification / FBU wave rule (BR-097):** Post-ship verification prescribes **`RW E08:S03:T12 --art`** only. Do **not** prescribe `--doc-policy-zero` for follow-on releases after a tagged BUILD.

**Multi-RW note:** Intermediate **`RW E08:S03:T12 --art`** between chunks 16–17 is allowed (BUILD +1 each); status stays `IN PROGRESS` until step 13.

### 4.2 Files to create or modify

- **UPDATE (wave 1 — done):** `packages/**/*.py`, `tests/**/*.py`, `scripts/**/*.py`, `cli/**/*.py`, `greenfield-install/**/*.py`; `setup.py` (`ruff` dev dep)
- **UPDATE (wave 2 — planned):** `packages/frameworks/**/*.py`, `tests/**/*.py`, `scripts/**/*.py`, `cli/**/*.py` (print-at-import + fold rules only; **exclude** wave-3 `greenfield-install/` mirror)
- **UPDATE:** Task doc, BR-099, story checklist, kboard (RW Step 7)

### 4.3 Dependency order

**Wave 1 (complete):** Baseline manifest → tooling (`ruff`) → chunks A → B → C → manual edge cases → pytest green → post-wave manifest → BR/kanban → RW → dashboard verification

**Wave 2 (planned):** Wave-2 manifest → triage → Chunk D (print-at-import) → Chunk E (fold rules) → CI → post-wave-2 manifest → BR/kanban → RW → status reconciliation (step 13)

### 4.4 Documentation implementation steps

1. Record wave-2 manifest in task doc (step 14) before code edits
2. Record post-wave-2 manifest in task doc (step 19) before BR-099 resolution update
3. RW Step 7 updates story checklist, kboard, BR-099 in same release

---

## 5. Documentation deliverables

### 5.1 Existing documents to update

| Doc ID | Path | Scope of change | Tied to (RF/T/impl step) |
| ------ | ---- | --------------- | ------------------------ |
| D-U1 | `docs/project-management/kanban/epics/epic-08/story-03-automation-scripts/T12-code-quality-maintainability-backlog-br099.md` | Baseline + wave-1 manifests (**done**); wave-2 + post-wave-2 manifests (**open**) | RF1, RF3, RF8, RF10, steps 1/9/14/19/13 |
| D-U2 | `docs/project-management/kanban/fr-br/BR-099-code-quality-maintainability-backlog.md` | Fix-attempt / resolution (interim **done**; final closure **open**) | RF6, steps 10/20 |
| D-U3 | `docs/project-management/kanban/epics/epic-08/story-03-automation-scripts.md` | Checklist on RW | steps 11/21 |
| D-U4 | `docs/project-management/kanban/kboard.md` | RW Step 7 row | steps 11/21 |
| D-U5 | `setup.py` | `ruff` dev dependency (**done**) | step 3, RNF1 |

### 5.2 New documents to create

| Doc ID | Proposed path (draft) | Purpose | Tied to (RF/T/impl step) |
| ------ | --------------------- | ------- | ------------------------ |
| D-C1 | `docs/implementation-cycles/IPP-E08S03T12-code-quality-maintainability-backlog-br099.md` | This planning package (revised wave-2) | IPW |

### 5.3 Documentation gaps and explicit non-changes

| Gap / topic | Resolution (CREATE row above, or NONE + reason) |
| ----------- | ----------------------------------------------- |
| Code quality burn-down methodology | NONE — BR-099 wave table is authoritative; governed by [BR-099](../project-management/kanban/fr-br/BR-099-code-quality-maintainability-backlog.md) and [code-quality-monitoring-processes.md](../architecture/standards-and-adrs/code-quality-monitoring-processes.md) |
| New ADR for hygiene approach | NONE — EXEMPT per §2.5 |
| New CI quality gate workflow | NONE — out of scope; dashboard verification manual at steps 12/19 |
| Dedicated baseline manifest file | NONE — AC requires manifest in task doc only |
| Wave-3 `greenfield-install/` mirror | **DEFER** — follow-on task or future IPP revision; out of wave-2 scope per operator decision |

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
- [ ] Maintainability score Good+ or documented lag (still **Fair** @ 145)
- [x] `pytest tests/` + workflow-scripts CI green
- [ ] BR-099 final closure RW (interim releases @ +1–+3 done)
- [x] IPP bidirectionally linked from task doc

### Wave 2 (wave-2 scope complete; dashboard verify pending)

- [x] Wave-2 manifest (145 by rule) in task doc
- [x] Wave-2 triage sheet (fix / waive / defer per rule group)
- [x] `py/print-during-import` remediated or waived (1 fix in wave-2 scope)
- [x] Fold rules remediated or waived (F541 + hygiene in wave-2 scope; greenfield **deferred** wave 3)
- [x] Post-wave-2 manifest + RW release (`RW E08:S03:T12 --art`) (`RW E08:S03:T12 --art`)

### Documentation

- [x] All §5 wave-1 UPDATE items implemented
- [ ] §5 wave-2 UPDATE items (D-U1 wave-2 manifests, D-U2 final closure)
- [x] All §6 paths exist and are linked from task doc

---

## References

- [BR-099](../project-management/kanban/fr-br/BR-099-code-quality-maintainability-backlog.md)
- [BR-100](../project-management/kanban/fr-br/BR-100-code-quality-reliability-backlog.md)
- [T12 task doc](../project-management/kanban/epics/epic-08/story-03-automation-scripts/T12-code-quality-maintainability-backlog-br099.md)
- [IPP-E08S03T04](IPP-E08S03T04-ci-test-workflow-pytest-remediation-br058.md)
- [code-quality-monitoring-processes.md](../architecture/standards-and-adrs/code-quality-monitoring-processes.md)
- [ipw-adr-necessity-checklist.md](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md)
- [FR-042](../project-management/kanban/fr-br/FR-042-implementation-planning-workflow-ipw.md)
- [BR-097](../project-management/kanban/fr-br/BR-097-rw-agent-reuses-tagged-build-and-force-moves-release-tags.md)
