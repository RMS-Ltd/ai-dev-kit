---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T23:30:00Z
revised_at: 2026-06-05T24:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E08:S03:T13 — Planning: Spec, Tests, Implementation Plan (IPW)

**Host Task:** [`T13-code-quality-reliability-backlog-br100.md`](../project-management/kanban/epics/epic-08/story-03-automation-scripts/T13-code-quality-reliability-backlog-br100.md) **(E08:S03:T13)**  
**Planning for:** [BR-100](../project-management/kanban/fr-br/BR-100-code-quality-reliability-backlog.md)  
**Status:** Revised — wave-1 complete; wave-2 shipped @ v0.8.3.13+3 (dashboard re-scan pending; task **IN PROGRESS**)

> **IPW:** Produced for E08:S03:T13. Bulk **Code Quality Standard reliability** burn-down; complements maintainability task [E08:S03:T12](IPP-E08S03T12-code-quality-maintainability-backlog-br099.md) / [BR-099](../project-management/kanban/fr-br/BR-099-code-quality-maintainability-backlog.md) and AI suggestions task [E08:S03:T14](IPP-E08S03T14-code-quality-ai-suggestions-backlog-br101.md) / [BR-101](../project-management/kanban/fr-br/BR-101-code-quality-ai-suggestions-backlog.md).
>
> **Revision (2026-06-05):** Wave-1 shipped @ v0.8.3.13+1–+2. Dashboard re-scan: **133→34** open Standard reliability (−74.4%) @ `main` `cadb0c3`; score still **Needs Improvement**. Wave-2 scope (operator): exception-policy + fold rules per [BR-100](../project-management/kanban/fr-br/BR-100-code-quality-reliability-backlog.md) wave 2; wave-3 `py/use-of-exit-or-quit` deferred to future IPP revision on this task if AC4 remains open. **Standard findings only** — not Code Scanning security sidebar; not AI suggestions (T14).

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Wave | Status | Source (FR/BR/Task) |
| -- | ----------- | ---- | ------ | ------------------- |
| RF1 | Capture **baseline manifest** (rule → open count, file hotspots, snapshot date, `main` SHA) in task doc | 1 | **SATISFIED** — task doc baseline table @ `5fcf102` | T13 AC1, BR-100 AC1 |
| RF2 | **Triage sheet:** classify each wave-1 rule group as fix / waive / defer | 1 | **SATISFIED** — task doc wave-1 triage table | T13 deliverable #2, BR-100 AC2 |
| RF3 | Remediate wave-1 true positives; add tests where behaviour changes | 1 | **SATISFIED** — 60 files; local AST clean; pytest **396 passed** | T13 deliverable #3, BR-100 AC3 |
| RF4 | Reliability score **Fair** or better on dashboard (or document GitHub scoring lag) | 1–2 | **OPEN** — still **Needs Improvement** @ **34** open; wave-2 may not alone achieve Fair+ if exit/quit deferred | T13 AC3, BR-100 AC4 |
| RF5 | Keep CI green: `pytest tests/`, `workflow-scripts-pytest`, `tests.yml` | 1–2 | **SATISFIED** (wave-1) — 396 passed | T13 AC4, BR-100 AC3 |
| RF6 | Close kanban loop: BR-100 resolution + **RW E08:S03:T13 --art** on completion | 1–2 | **OPEN** — interim RW @ +0, +1, +2; final closure deferred until RF4 satisfied | T13 AC5, BR-100 AC5 |
| RF7 | Include **`greenfield-install/`** in wave 1 reliability pass | 1 | **SATISFIED** — Chunk C in wave-1 release | Story pattern (mirror T12) |
| RF8 | Export **wave-2 manifest**: rule → count + file hotspots for **34** residuals @ current `main` SHA | 2 | **OPEN** | BR-100 wave 2, task doc |
| RF9 | **Triage sheet** for wave-2 rule groups: fix / waive / defer (waivers need task-doc rationale or CodeQL suppression comment) | 2 | **OPEN** | BR-100 wave 2, T13 deliverable |
| RF10 | Remediate wave-2 true positives; add tests where behaviour changes | 2 | **OPEN** | BR-100 wave 2, T13 deliverable |
| RF11 | Post-wave-2 manifest + dashboard re-scan; document score delta | 2 | **OPEN** | T13 deliverable |
| RF12 | Interim BR-100 narrative + **`RW E08:S03:T13 --art`** (BUILD +1); status stays IN PROGRESS until RF4/RF6 | 2 | **OPEN** | RF6, BR-097 |

**Wave-1 release evidence:** v0.8.3.13+0 (intake), +1 (wave-1 remediation), +2 (dashboard re-scan manifest). See task doc baseline, post-wave local AST, and dashboard re-scan tables.

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RNF1 | **Triage-before-bulk-fix** — document CLI `main` false positives; waivers need task-doc rationale or CodeQL suppression comment | BR-100 root cause |
| RNF2 | Changes must be **revertible** per directory chunk (frameworks → tests/scripts/cli → greenfield-install) | Large blast radius |
| RNF3 | **Coordinate with E08:S03:T12** — do not remediate maintainability-rule findings; reliability-only hunks on shared files | T13 Input, T12 RNF4 |
| RNF4 | Changelog: **"Change implemented"** / **"Attempted fix"** until dashboard verified | RW rules |
| RNF5 | Post-ship verification uses **`RW E08:S03:T13 --art`** only (BUILD +1); no `--doc-policy-zero` | BR-097 |
| RNF6 | **Standard findings only** — [Code Quality dashboard](https://github.com/RMS-Ltd/ai-dev-kit/security/quality); not security sidebar (T08–T11); not AI suggestions (T14) | Operator scope (T12–T14 lane) |

### 1.3 Invariants and boundaries

- **Invariants:** Python 3.11+ per FR-104; no `git tag -f` / force-push on release tags (BR-097); post-ship verification uses `RW E08:S03:T13 --art` only
- **In scope (wave 1 — done):** Wave-1 Standard reliability rules (`py/empty-except`, `py/file-not-closed`); full repo Python including `greenfield-install/`
- **In scope (wave 2 — planned):** Standard reliability rules per BR-100 wave-2 table (`py/catch-base-exception`, `py/mixed-returns`) + fold rules in the **34** residuals (`py/multiple-definition`, deferred `py/call/wrong-arguments`); `packages/frameworks/`, `tests/`, `scripts/`, `cli/`, `greenfield-install/`
- **Out of scope (explicit):** BR-100 **wave 3** (`py/use-of-exit-or-quit` — future IPP revision on E08:S03:T13 if AC4 blocked after wave-2 re-scan); BR-099 maintainability rules (T12); BR-101 AI suggestions (T14); CodeQL **security** sidebar (T08–T11); new CI quality gates / rulesets; T16 perpetual monitoring (separate scope)

---

## 2. Specification

### 2.1 Goal

Two-phase **Standard reliability** burn-down per [BR-100](../project-management/kanban/fr-br/BR-100-code-quality-reliability-backlog.md):

- **Phase A (wave 1 — complete):** Exception-handling and resource-cleanup hygiene across full Python corpus; ≥50% open-count reduction; CI green.
- **Phase B (wave 2 — planned):** Exception-policy and fold-rule remediation on **34** residuals toward **Fair+** score; post-wave-2 manifest and RW release.

**Fair+** score (RF4) may require wave-3 exit/quit remediation or a follow-on IPP revision if **Needs Improvement** persists after wave-2 re-scan.

### 2.2 Specification mapping from ascertained requirements

- RF1 → baseline manifest table in task doc (satisfied)
- RF2 → wave-1 triage disposition table (satisfied)
- RF3, RF7 → directory-chunked fixes on wave-1 rules; 60 files; local AST clean (satisfied)
- RF4 → dashboard re-scan **133→34**; score still **Needs Improvement** — open until Fair+ or documented lag after wave 2
- RF5 → existing `pytest tests/` and workflow-scripts gate (satisfied wave 1; re-run after wave 2)
- RF6 → BR-100 update + RW Step 7 four-surface reconciliation (interim releases done; final closure open)
- RF8 → wave-2 manifest table in task doc before bulk edits
- RF9 → triage sheet per wave-2 rule group before bulk fixes
- RF10 → directory-chunked fixes for wave-2 rules; targeted tests where behaviour changes
- RF11 → post-wave-2 manifest + dashboard delta in task doc
- RF12 → interim BR-100 narrative + `RW E08:S03:T13 --art`

**Scope resolution:** BR-100 remediation-waves table assigns `py/catch-base-exception` and `py/mixed-returns` to wave 2; wave 3 (`py/use-of-exit-or-quit`) is **deferred** from this IPP revision.

### 2.3 Constraints

- Python **3.11+** per FR-104
- Wave-1 rule → remediation mapping (complete):

| CodeQL rule | Primary remediation | Triage notes |
| ----------- | ------------------- | ------------ |
| `py/empty-except` | `del _suppressed_exc` pattern; bare `except:` → typed exceptions | Shipped wave 1 |
| `py/file-not-closed` | Per-write `with open` + `contextlib.suppress(OSError)` | Shipped wave 1 |
| `py/call/wrong-arguments` | Fix arity/types at call site; verify with existing tests | Deferred wave 1; wave-2 triage |
| `py/catch-base-exception` | Narrow to `Exception`; preserve `KeyboardInterrupt`/`SystemExit` | 0 local matches wave 1; wave-2 triage |

- Wave-2 rule → remediation mapping (planned):

| CodeQL rule | Primary remediation |
| ----------- | ------------------- |
| `py/catch-base-exception` | Narrow to `Exception`; preserve `KeyboardInterrupt`/`SystemExit` propagation |
| `py/mixed-returns` | Explicit `return None` or consistent return paths |
| `py/multiple-definition` | Remove shadowing / dead reassignments |
| `py/call/wrong-arguments` | Fix arity/types at call site; verify with existing tests |

- Reference patterns (wave-3 deferred): `sys.exit(main())` in [maintenance-automation-scripts-and-tools.md](../architecture/standards-and-adrs/maintenance-automation-scripts-and-tools.md) for `py/use-of-exit-or-quit` — not in wave-2 scope
- Post-ship verification / FBU waves: **`RW E08:S03:T13 --art`** only (BUILD +1); no `--doc-policy-zero`

### 2.4 Status transition intent (mandatory for IPW-derived implementation tasks)

- **Current task status:** **IN PROGRESS** (since wave-1 Step 1; v0.8.3.13+2)
- **Transition trigger to IN PROGRESS:** First non-planning implementation change lands — **DONE** (wave-1); wave-2 planning confirms IN PROGRESS — do **not** re-execute `TODO → IN PROGRESS`
- **Transition trigger to COMPLETE:** All RF1–RF6, RF8–RF12 evidenced; forensic `✅ COMPLETE (v{version})` on RW; **Fair+** score (RF4) or operator accepts documented lag policy
- **Wave-2 completion alone:** Step 13 reconciles to **IN PROGRESS** if RF4 still open (Needs Improvement @ exit/quit residuals only → note wave-3 IPP follow-on)
- **Atomic propagation requirement:** Task doc status and kboard row status must update in the same change set/session
- **Owner:** Implementation execution step (not planning-only IPW creation)

### 2.5 ADR necessity decision (mandatory — IPW Phase 5.0)

Score each trigger **Y** or **N** with one-line evidence. Criteria: [`ipw-adr-necessity-checklist.md`](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md) (FR-100).

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | N | BR-100 prescribes wave-2 rule groups and fix patterns |
| T2 | Reversibility | N | Reliability edits revert in one PR per chunk |
| T3 | Blast radius | N | Confined to Python reliability hygiene; no framework API / RW contract change |
| T4 | Precedent | N | Existing error-handling doc in maintenance-automation-scripts-and-tools.md |
| T5 | Constraint trade-off | N | No security/performance/versioning trade-off |
| T6 | Governance contract | N | No RW/IPW/validator gate changes |
| T7 | Supersedes | N | No ADR contradiction |

**Outcome:** `EXEMPT`

| ID | Exemption (only if all T = N) | Pass? | Evidence |
| -- | --------------------------- | ----- | -------- |
| E1 | Single locus | Pass | §4.2 file list (Python globs + kanban/docs) |
| E2 | No new options | Pass | Implements BR-100 + task AC only |
| E3 | Reversible in one task | Pass | Standard revert per chunk |
| E4 | Spec elsewhere | Pass | BR-100 + this IPP + task AC |
| E5 | Documented NONE | Pass | §5.3 cites BR-100 and code-quality-monitoring-processes |

---

## 3. Test design

**Note:** Behaviour-changing exception/return fixes may need targeted tests (reuse wave-1 T5 pattern). Primary verification is CI + dashboard metrics + manifest diff.

### 3.1 Wave 1 (satisfied)

| ID | Behavior / layer | Expected check | Status | Covers |
| -- | ---------------- | -------------- | ------ | ------ |
| T1 | Baseline evidence | Task doc table: rule → count, hotspots, date, SHA | **PASS** | RF1 |
| T2 | Triage evidence | Per-rule disposition table (fix / waive / defer) in task doc | **PASS** | RF2 |
| T3 | Local regression | `python3.11 -m pytest tests/` → 0 failed, 0 errors | **PASS** — 396 passed | RF5 |
| T4 | Workflow scripts gate | `workflow-scripts-pytest.yml` job green (or local equivalent) | **PASS** | RF5 |
| T5 | Behaviour-change spots | Add/extend tests for non-trivial exception-path changes | **PASS** — wave-1 surgical fixes | RF3 |
| T6 | Post-wave metrics | Open reliability count delta + score check on dashboard | **PASS** — **133→34** (−74.4%) | RF3 |
| T7 | Waivers | Remaining wave-1 alerts have documented fix/waive/defer rationale | **PASS** — wrong-arguments deferred; catch-base waived locally | RF2 |
| T8 | Score check (wave 1) | Reliability **Fair+** or lag note in task doc | **PARTIAL** — still **Needs Improvement** @ 34 | RF4 |

**Note:** `gh api repos/RMS-Ltd/ai-dev-kit/code-scanning/alerts?state=open` may return 0 for Code Quality product surface (see [T12 baseline note](../project-management/kanban/epics/epic-08/story-03-automation-scripts/T12-code-quality-maintainability-backlog-br099.md)); primary manifest source is GitHub dashboard export recorded in task doc.

### 3.2 Wave 2 (planned)

| ID | Behavior / layer | Expected check | Covers |
| -- | ---------------- | -------------- | ------ |
| T9 | Wave-2 manifest | Rule → count @ current `main` SHA for **34** residuals in task doc | RF8 |
| T10 | Triage sheet | Per-rule disposition before bulk edits | RF9, RNF1 |
| T11 | Local regression | `python3.11 -m pytest tests/` → 0 failed, 0 errors | RF5 |
| T12 | Workflow scripts gate | `workflow-scripts-pytest.yml` job green (or local equivalent) | RF5 |
| T13 | Post-wave-2 metrics | Post-wave-2 manifest + open-count delta + score snapshot in task doc | RF11, RF4 |
| T14 | Waivers | Remaining wave-2 rule groups have documented fix/waive/defer rationale | RF9 |
| T15 | Behaviour-change spots | Targeted tests where exception/return paths change | RF10 |

---

## 4. Implementation plan

### 4.0 Wave 1 ledger (DONE — do not re-execute)

| Step | Action | Status | Version / evidence |
| ---- | ------ | ------ | ------------------ |
| **1** | **[MANDATORY] Transition task `E08:S03:T13` status `TODO → IN PROGRESS`** | **DONE** | Task doc IN PROGRESS |
| 2 | Capture baseline manifest in task doc | **DONE** | 133 open @ `5fcf102` |
| 3 | Build triage sheet for four wave-1 rule groups | **DONE** | task doc wave-1 triage |
| 4 | **Chunk A:** reliability fixes in `packages/frameworks/**/*.py` | **DONE** | v0.8.3.13+1 |
| 5 | **Chunk B:** same in `tests/`, `scripts/`, `cli/` | **DONE** | 60 files total |
| 6 | **Chunk C:** mirror in `greenfield-install/**/*.py` | **DONE** | wave-1 scope |
| 7 | Add targeted tests for behaviour-changing fixes | **DONE** | pytest 396 passed |
| 8 | Run T3 + T4 locally | **DONE** | CI green |
| 9 | Capture post-wave manifest (local AST) | **DONE** | 0 pass-only handlers |
| 10 | Update BR-100 fix-attempt narrative | **DONE** | @ +1 |
| 11 | `RW E08:S03:T13 --art` | **DONE** | +0, +1, +2 |
| 12 | Verify dashboard re-scan (T6) | **DONE** — **133→34**; score still Needs Improvement | partial RF4 |

### 4.1 Wave 2 steps (implemented locally — pending RW + dashboard re-scan)

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| 14 | Export wave-2 manifest from [Code Quality — Standard findings](https://github.com/RMS-Ltd/ai-dev-kit/security/quality) (`is:open`, reliability); record rule breakdown for **34** in task doc | RF8 |
| 15 | Triage sheet: each wave-2 rule group → fix / waive / defer (deferrals must cite rationale) | RF9, RNF1 |
| 16 | **Chunk D:** wave-2 reliability rules — `packages/frameworks/**/*.py` | RF10 |
| 17 | **Chunk E:** same rules — `tests/`, `scripts/`, `cli/` (exclude maintainability-only hunks; T12 coordination) | RF10 |
| 18 | **Chunk F:** mirror — `greenfield-install/**/*.py` | RF10 |
| 19 | Targeted tests for behaviour-changing fixes (T15) | RF10 |
| 20 | Run T11 + T12 locally; fix any regressions | RF5 |
| 21 | Post-wave-2 manifest + dashboard check (T13) | RF11, RF4 |
| 22 | Update BR-100 fix-attempt narrative (not "Fixed" until verified) | RF12 |
| 23 | `RW E08:S03:T13 --art` — BUILD+1, changelog, RW Step 7 four-surface | RF12 |
| **13** | **[MANDATORY] Reconcile task `E08:S03:T13` status** to actual state: **IN PROGRESS** if RF4 open (Fair+ not met or wave-3 exit/quit deferred); **COMPLETE** + `✅ COMPLETE (v{version})` only if RF4+RF6 satisfied; **BLOCKED** + reason if blocked | Task doc status |

**RW verification / FBU wave rule (BR-097):** Post-ship verification prescribes **`RW E08:S03:T13 --art`** only. Do **not** prescribe `--doc-policy-zero` for follow-on releases after a tagged BUILD.

**Multi-RW note:** Intermediate **`RW E08:S03:T13 --art`** between chunks 16–18 is allowed (BUILD +1 each); status stays `IN PROGRESS` until step 13.

**T12 coordination:** Before editing a file already modified by T12 ruff pass, diff and apply only reliability-rule hunks; if conflict-prone, complete T12 chunk first or merge in one session.

### 4.2 Files to create or modify

- **UPDATE (wave 1 — done):** `packages/**/*.py`, `tests/**/*.py`, `scripts/**/*.py`, `cli/**/*.py`, `greenfield-install/**/*.py` (wave-1 reliability findings only)
- **UPDATE (wave 2 — planned):** same globs (wave-2 Standard reliability rules only; exclude maintainability hunks)
- **UPDATE (tests):** Targeted test modules where exception/return paths change
- **UPDATE:** Task doc, BR-100, story checklist, kboard (RW Step 7)

### 4.3 Dependency order

**Wave 1 (complete):** Baseline manifest → triage sheet → directory chunks (A → B → C) → targeted tests → pytest green → post-wave manifest → BR/kanban → RW → dashboard re-scan

**Wave 2 (planned):** Wave-2 manifest → triage → chunks D → E → F → targeted tests → CI → post-wave-2 manifest → BR/kanban → RW → status reconciliation (step 13)

### 4.4 Documentation implementation steps

1. Record wave-2 manifest in task doc (step 14) before code edits
2. Record wave-2 triage sheet in task doc (step 15) before bulk fixes
3. Record post-wave-2 manifest in task doc (step 21) before BR-100 resolution update
4. RW Step 7 updates story checklist, kboard, BR-100 in same release

---

## 5. Documentation deliverables

### 5.1 Existing documents to update

| Doc ID | Path | Scope of change | Tied to (RF/T/impl step) |
| ------ | ---- | --------------- | ------------------------ |
| D-U1 | `docs/project-management/kanban/epics/epic-08/story-03-automation-scripts/T13-code-quality-reliability-backlog-br100.md` | Baseline + wave-1 manifests (**done**); wave-2 triage + post-wave-2 manifests (**open**) | RF1, RF2, RF3, RF8, RF11, steps 1/9/14/15/21/13 |
| D-U2 | `docs/project-management/kanban/fr-br/BR-100-code-quality-reliability-backlog.md` | Fix-attempt / resolution (interim **done**; final closure **open**) | RF6, RF12, steps 10/22 |
| D-U3 | `docs/project-management/kanban/epics/epic-08/story-03-automation-scripts.md` | Checklist on RW | steps 11/23 |
| D-U4 | `docs/project-management/kanban/kboard.md` | RW Step 7 row | steps 11/23 |

### 5.2 New documents to create

| Doc ID | Proposed path (draft) | Purpose | Tied to (RF/T/impl step) |
| ------ | --------------------- | ------- | ------------------------ |
| D-C1 | `docs/implementation-cycles/IPP-E08S03T13-code-quality-reliability-backlog-br100.md` | This planning package (revised wave-2) | IPW |

### 5.3 Documentation gaps and explicit non-changes

| Gap / topic | Resolution (CREATE row above, or NONE + reason) |
| ----------- | ----------------------------------------------- |
| Code quality burn-down methodology | NONE — BR-100 wave table is authoritative; governed by [BR-100](../project-management/kanban/fr-br/BR-100-code-quality-reliability-backlog.md) and [code-quality-monitoring-processes.md](../architecture/standards-and-adrs/code-quality-monitoring-processes.md) |
| New ADR for exception-handling approach | NONE — EXEMPT per §2.5; existing pattern in maintenance-automation-scripts-and-tools.md |
| New CI quality gate workflow | NONE — out of scope; dashboard verification manual at steps 12/21 |
| Dedicated baseline manifest file | NONE — AC requires manifest in task doc only |
| Wave-3 `py/use-of-exit-or-quit` | **DEFER** — future IPP revision on E08:S03:T13 if AC4 blocked after wave-2 re-scan; reference `sys.exit(main())` pattern in maintenance-automation-scripts-and-tools.md |

---

## 6. Documentation housing

| Doc ID | Canonical path | Publication status | Publication N/A reason (if N/A) | Lifecycle | Inbound links to add |
| ------ | -------------- | ------------------ | ------------------------------- | --------- | -------------------- |
| D-C1 | `docs/implementation-cycles/IPP-E08S03T13-code-quality-reliability-backlog-br100.md` | NOT_APPLICABLE | Planning artifact; not Docusaurus-facing | evergreen | Task doc Input + References |
| D-U1 | `docs/project-management/kanban/epics/epic-08/story-03-automation-scripts/T13-code-quality-reliability-backlog-br100.md` | NOT_APPLICABLE | Kanban internal | evergreen | BR-100 implementing task link (exists) |
| D-U2 | `docs/project-management/kanban/fr-br/BR-100-code-quality-reliability-backlog.md` | NOT_APPLICABLE | Kanban internal | evergreen | Task doc upstream link (exists) |
| D-U3 | `docs/project-management/kanban/epics/epic-08/story-03-automation-scripts.md` | NOT_APPLICABLE | Kanban internal | evergreen | Story checklist |
| D-U4 | `docs/project-management/kanban/kboard.md` | NOT_APPLICABLE | Kanban internal | evergreen | MoSCOW row |

**Housing rules:** One authoritative doc per topic; IPP under `docs/implementation-cycles/`; kanban four-surface on RW.

---

## 7. Success / verification criteria

### Wave 1 (complete)

- [x] Baseline manifest in task doc (rule → count, hotspots, SHA, date)
- [x] Triage sheet: wave-1 rule groups classified fix / waive / defer
- [x] Wave-1 true positives remediated or waived with rationale
- [x] Open count reduced ≥50% (**133→34**, −74.4%)
- [ ] Reliability score Fair+ or documented GitHub lag (still **Needs Improvement** @ 34)
- [x] `pytest tests/` + workflow-scripts CI green
- [ ] BR-100 final closure RW (interim releases @ +0–+2 done)
- [x] IPP bidirectionally linked from task doc

### Wave 2 (implemented locally — pending RW + dashboard re-scan)

- [x] Wave-2 manifest (34 by rule) in task doc
- [x] Wave-2 triage sheet (fix / waive / defer per rule group)
- [x] Wave-2 true positives remediated or waived with rationale (**6** fixed; **16** print→T12; **12** exit→wave 3)
- [x] Local post-wave-2 manifest estimate in task doc (**28** expected open)
- [ ] Dashboard re-scan after merge (step 21)
- [x] `RW E08:S03:T13 --art` for wave-2 release (**v0.8.3.13+3**)
- [x] Step 13 status reconciliation to actual state (**IN PROGRESS** — AC4 Fair+ blocked)

### Documentation

- [x] All §5 wave-1 UPDATE items implemented
- [ ] §5 wave-2 UPDATE items (D-U1 wave-2 manifests, D-U2 final closure)
- [x] All §6 paths exist and are linked from task doc

---

## References

- [BR-100](../project-management/kanban/fr-br/BR-100-code-quality-reliability-backlog.md)
- [BR-099](../project-management/kanban/fr-br/BR-099-code-quality-maintainability-backlog.md)
- [BR-101](../project-management/kanban/fr-br/BR-101-code-quality-ai-suggestions-backlog.md)
- [T13 task doc](../project-management/kanban/epics/epic-08/story-03-automation-scripts/T13-code-quality-reliability-backlog-br100.md)
- [IPP-E08S03T12](IPP-E08S03T12-code-quality-maintainability-backlog-br099.md)
- [IPP-E08S03T14](IPP-E08S03T14-code-quality-ai-suggestions-backlog-br101.md)
- [IPP-E08S03T04](IPP-E08S03T04-ci-test-workflow-pytest-remediation-br058.md)
- [maintenance-automation-scripts-and-tools.md](../architecture/standards-and-adrs/maintenance-automation-scripts-and-tools.md)
- [code-quality-monitoring-processes.md](../architecture/standards-and-adrs/code-quality-monitoring-processes.md)
- [ipw-adr-necessity-checklist.md](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md)
- [FR-042](../project-management/kanban/fr-br/FR-042-implementation-planning-workflow-ipw.md)
- [BR-097](../project-management/kanban/fr-br/BR-097-rw-agent-reuses-tagged-build-and-force-moves-release-tags.md)
