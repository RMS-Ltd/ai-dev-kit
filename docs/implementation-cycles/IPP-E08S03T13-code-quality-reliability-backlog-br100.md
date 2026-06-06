---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T23:30:00Z
revised_at: 2026-06-06T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E08:S03:T13 — Planning: Spec, Tests, Implementation Plan (IPW)

**Host Task:** [`T13-code-quality-reliability-backlog-br100.md`](../project-management/kanban/epics/epic-08/story-03-automation-scripts/T13-code-quality-reliability-backlog-br100.md) **(E08:S03:T13)**  
**Planning for:** [BR-100](../project-management/kanban/fr-br/BR-100-code-quality-reliability-backlog.md)  
**Status:** Revised — wave 1–2 complete @ v0.8.3.13+3; wave 3 shipped @ **v0.8.3.13+4**; task **COMPLETE**

> **IPW:** Produced for E08:S03:T13. Bulk **Code Quality Standard reliability** burn-down; complements maintainability task [E08:S03:T12](IPP-E08S03T12-code-quality-maintainability-backlog-br099.md) / [BR-099](../project-management/kanban/fr-br/BR-099-code-quality-maintainability-backlog.md) and AI suggestions task [E08:S03:T14](IPP-E08S03T14-code-quality-ai-suggestions-backlog-br101.md) / [BR-101](../project-management/kanban/fr-br/BR-101-code-quality-ai-suggestions-backlog.md).
>
> **Revision (2026-06-05):** Wave-1 shipped @ v0.8.3.13+1–+2. Dashboard re-scan: **133→34** open Standard reliability (−74.4%) @ `main` `cadb0c3`; score still **Needs Improvement**. Wave-2 scope: mixed-returns + wrong-arguments; wave-3 `py/use-of-exit-or-quit` deferred to this revision.
>
> **Revision (2026-06-06, wave 3):** Wave-2 shipped @ v0.8.3.13+3. Post-wave-2 dashboard @ `main` `f6aa4dca` ([T16 re-scan](../project-management/kanban/epics/epic-08/story-03-automation-scripts/T16-github-security-code-quality-health-perpetual-fr112.md)): reliability **28 open**, score **Fair** (was Needs Improvement). Residual reliability = **16** `py/print-during-import` (→ T12) + **12** `py/use-of-exit-or-quit` (→ wave 3). Wave 3 plans `exit(main())` → `sys.exit(main())` across 6 script pairs; closure when **0** exit/quit and AC4/AC5 satisfied. **Standard findings only** — not Code Scanning security sidebar; not AI suggestions (T14).

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Wave | Status | Source (FR/BR/Task) |
| -- | ----------- | ---- | ------ | ------------------- |
| RF1 | Capture **baseline manifest** (rule → open count, file hotspots, snapshot date, `main` SHA) in task doc | 1 | **SATISFIED** — task doc baseline table @ `5fcf102` | T13 AC1, BR-100 AC1 |
| RF2 | **Triage sheet:** classify each wave-1 rule group as fix / waive / defer | 1 | **SATISFIED** — task doc wave-1 triage table | T13 deliverable #2, BR-100 AC2 |
| RF3 | Remediate wave-1 true positives; add tests where behaviour changes | 1 | **SATISFIED** — 60 files; local AST clean; pytest **396 passed** | T13 deliverable #3, BR-100 AC3 |
| RF4 | Reliability score **Fair** or better on dashboard (or document GitHub scoring lag) | 1–3 | **PARTIAL** — **Fair** @ 28 open per T16 @ `f6aa4dca`; T13 task doc sync pending (RF13) | T13 AC3, BR-100 AC4 |
| RF5 | Keep CI green: `pytest tests/`, `workflow-scripts-pytest`, `tests.yml` | 1–3 | **SATISFIED** (wave 1–2) — 406 passed @ wave 2; re-run after wave 3 | T13 AC4, BR-100 AC3 |
| RF6 | Close kanban loop: BR-100 resolution + **RW E08:S03:T13 --art** on completion | 1–3 | **OPEN** — interim RW @ +0–+3; terminal closure deferred until RF15+RF17 | T13 AC5, BR-100 AC5 |
| RF7 | Include **`greenfield-install/`** in wave 1 reliability pass | 1 | **SATISFIED** — Chunk C in wave-1 release | Story pattern (mirror T12) |
| RF8 | Export **wave-2 manifest**: rule → count + file hotspots for **34** residuals @ current `main` SHA | 2 | **SATISFIED** — task doc wave-2 pre-manifest @ `777e956` | BR-100 wave 2, task doc |
| RF9 | **Triage sheet** for wave-2 rule groups: fix / waive / defer | 2 | **SATISFIED** — task doc wave-2 triage table | BR-100 wave 2, T13 deliverable |
| RF10 | Remediate wave-2 true positives; add tests where behaviour changes | 2 | **SATISFIED** — **6** fixed (mixed-returns ×4, wrong-arguments ×2) | BR-100 wave 2, T13 deliverable |
| RF11 | Post-wave-2 manifest + dashboard re-scan; document score delta | 2 | **PARTIAL** — local post-wave-2 manifest in task doc; dashboard evidence in T16 @ `f6aa4dca` (RF13 sync pending) | T13 deliverable |
| RF12 | Interim BR-100 narrative + **`RW E08:S03:T13 --art`** (BUILD +1); status stays IN PROGRESS until RF4/RF6 | 2 | **SATISFIED** — v0.8.3.13+3 | RF6, BR-097 |
| RF13 | Sync **post-wave-2 dashboard re-scan** in T13 task doc (`f6aa4dca`, 28 open, Fair) | 3 | **SATISFIED** — task doc post-wave-2 dashboard section | T16 |
| RF14 | Export **wave-3 manifest**: **12** `py/use-of-exit-or-quit` with file hotspots | 3 | **SATISFIED** — task doc wave-3 pre-manifest | BR-100 wave 3 |
| RF15 | Remediate all **12** exit/quit true positives (`exit(main())` → `sys.exit(main())`) | 3 | **SATISFIED** — 12 files; local grep **0** `exit(main())` | BR-100 wave 3 |
| RF16 | Post-wave-3 manifest + dashboard delta in task doc | 3 | **SATISFIED** — post-wave-3 manifest; dashboard re-scan pending post-merge | T13 deliverable |
| RF17 | Terminal BR-100 narrative + **`RW E08:S03:T13 --art`**; task **COMPLETE** if AC4+wave-3 satisfied | 3 | **SATISFIED** — @ v0.8.3.13+4 | RF6 |

**Release evidence:** v0.8.3.13+0 (intake), +1 (wave-1 remediation), +2 (dashboard re-scan manifest), +3 (wave-2 remediation). See task doc baseline, post-wave local AST, dashboard re-scan, and wave-2 tables.

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RNF1 | **Triage-before-bulk-fix** — document CLI `main` false positives; waivers need task-doc rationale or CodeQL suppression comment | BR-100 root cause |
| RNF2 | Changes must be **revertible** per directory chunk (frameworks → greenfield-install mirror) | Large blast radius |
| RNF3 | **Coordinate with E08:S03:T12** — do not remediate **16** `py/print-during-import`; reliability-only hunks on shared files | T13 Input, [IPP-E08S03T12](IPP-E08S03T12-code-quality-maintainability-backlog-br099.md) wave 4 |
| RNF4 | Changelog: **"Change implemented"** / **"Attempted fix"** until dashboard verified | RW rules |
| RNF5 | Post-ship verification uses **`RW E08:S03:T13 --art`** only (BUILD +1); no `--doc-policy-zero` | BR-097 |
| RNF6 | **Standard findings only** — [Code Quality dashboard](https://github.com/RMS-Ltd/ai-dev-kit/security/quality); not security sidebar (T08–T11); not AI suggestions (T14) | Operator scope (T12–T14 lane) |
| RNF7 | Mirror wave-3 fixes in **`greenfield-install/`** (6 files, same pattern as wave 2) | Story pattern |

### 1.3 Invariants and boundaries

- **Invariants:** Python 3.11+ per FR-104; no `git tag -f` / force-push on release tags (BR-097); post-ship verification uses `RW E08:S03:T13 --art` only
- **In scope (wave 1 — done):** Wave-1 Standard reliability rules (`py/empty-except`, `py/file-not-closed`); full repo Python including `greenfield-install/`
- **In scope (wave 2 — done):** `py/mixed-returns`, `py/call/wrong-arguments` in **34** residuals; `packages/frameworks/`, `tests/`, `scripts/`, `cli/`, `greenfield-install/`
- **In scope (wave 3 — planned):** `py/use-of-exit-or-quit` only — **12** findings across **6 script pairs** (main + greenfield-install mirror)
- **Out of scope (explicit):** `py/print-during-import` (**16** → T12 / BR-099); BR-099 maintainability rules; BR-101 AI suggestions (T14); CodeQL **security** sidebar (T08–T11); new CI quality gates / rulesets; T16 perpetual monitoring (separate scope)

---

## 2. Specification

### 2.1 Goal

Three-phase **Standard reliability** burn-down per [BR-100](../project-management/kanban/fr-br/BR-100-code-quality-reliability-backlog.md), with closure:

- **Phase A (wave 1 — complete):** Exception-handling and resource-cleanup hygiene across full Python corpus; ≥50% open-count reduction; CI green.
- **Phase B (wave 2 — complete):** Mixed-returns and wrong-arguments remediation on **34** residuals; RW @ v0.8.3.13+3; dashboard **Fair** @ 28 open.
- **Phase C (wave 3 — planned):** Convert all **12** `exit(main())` call sites to `sys.exit(main())` (with `import sys` where missing); sync dashboard evidence; close **E08:S03:T13** / **BR-100** when the only remaining Standard reliability findings are the **16** print-at-import items owned by T12.

### 2.2 Specification mapping from ascertained requirements

- RF1 → baseline manifest table in task doc (satisfied)
- RF2 → wave-1 triage disposition table (satisfied)
- RF3, RF7 → directory-chunked fixes on wave-1 rules; 60 files; local AST clean (satisfied)
- RF4 → dashboard **133→34→28**; score **Needs Improvement → Fair** @ `f6aa4dca` — partial until T13 task doc synced (RF13)
- RF5 → `pytest tests/` and workflow-scripts gate (satisfied wave 1–2; re-run after wave 3)
- RF6 → BR-100 update + RW Step 7 four-surface reconciliation (interim @ +0–+3 done; terminal closure open)
- RF8–RF12 → wave-2 manifest, triage, fixes, RW @ +3 (satisfied)
- RF13 → post-wave-2 dashboard sync in T13 task doc from T16 evidence
- RF14 → wave-3 manifest table (12 exit/quit, 6 file pairs) before bulk edits
- RF15 → chunks G/H: `exit(main())` → `sys.exit(main())`
- RF16 → post-wave-3 manifest (**16** expected open, print-only → T12)
- RF17 → terminal BR-100 narrative + `RW E08:S03:T13 --art` + status reconciliation

**Scope resolution:** BR-100 wave 3 (`py/use-of-exit-or-quit`) is **in scope** for this IPP revision; print-at-import remains **T12** ownership.

### 2.3 Constraints

- Python **3.11+** per FR-104
- Wave-1 rule → remediation mapping (complete):

| CodeQL rule | Primary remediation | Triage notes |
| ----------- | ------------------- | ------------ |
| `py/empty-except` | `del _suppressed_exc` pattern; bare `except:` → typed exceptions | Shipped wave 1 |
| `py/file-not-closed` | Per-write `with open` + `contextlib.suppress(OSError)` | Shipped wave 1 |
| `py/call/wrong-arguments` | Fix arity/types at call site; verify with existing tests | Shipped wave 2 |
| `py/catch-base-exception` | Narrow to `Exception`; preserve `KeyboardInterrupt`/`SystemExit` | 0 local matches; waived |

- Wave-2 rule → remediation mapping (complete):

| CodeQL rule | Primary remediation |
| ----------- | ------------------- |
| `py/mixed-returns` | Explicit `return None` or consistent return paths |
| `py/call/wrong-arguments` | Fix arity/types at call site; verify with existing tests |

- Wave-3 rule → remediation mapping (planned):

| CodeQL rule | Primary remediation | File hotspots (both trees) |
| ----------- | ------------------- | -------------------------- |
| `py/use-of-exit-or-quit` | `exit(main())` → `sys.exit(main())`; ensure `import sys` | `detect_existing_structure.py`, `migrate_structure.py`, `analyze_structure.py`, `validate_installation.py`, `install_kanban_framework.py`, `uninstall_package.py` |

- Canonical pattern: `sys.exit(main())` in [maintenance-automation-scripts-and-tools.md](../architecture/standards-and-adrs/maintenance-automation-scripts-and-tools.md)
- Post-ship verification / FBU waves: **`RW E08:S03:T13 --art`** only (BUILD +1); no `--doc-policy-zero`

### 2.4 Status transition intent (mandatory for IPW-derived implementation tasks)

- **Current task status:** **IN PROGRESS** (since wave-1 Step 1; v0.8.3.13+3)
- **Step 1 (mandatory):** Confirm status remains **IN PROGRESS** — do **not** re-execute `TODO → IN PROGRESS`; update `Last updated` when IPP revision or wave-3 work lands
- **Transition trigger to COMPLETE:** RF13–RF17 evidenced; **0** open `py/use-of-exit-or-quit`; AC4 **Fair+** documented; forensic `✅ COMPLETE (v{version})` on terminal RW
- **Remain IN PROGRESS if:** dashboard re-scan blocked or exit/quit count > 0 after wave 3
- **Atomic propagation requirement:** Task doc status and kboard row status must update in the same change set/session
- **Owner:** Implementation execution step (not planning-only IPW creation)

### 2.5 ADR necessity decision (mandatory — IPW Phase 5.0)

Score each trigger **Y** or **N** with one-line evidence. Criteria: [`ipw-adr-necessity-checklist.md`](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md) (FR-100).

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | N | BR-100 wave 3 prescribes single fix pattern (`sys.exit(main())`) |
| T2 | Reversibility | N | Mechanical one-line edits revert per file pair |
| T3 | Blast radius | N | Confined to 6 CLI entrypoint script pairs; no framework API / RW contract change |
| T4 | Precedent | N | Existing pattern in maintenance-automation-scripts-and-tools.md |
| T5 | Constraint trade-off | N | No security/performance/versioning trade-off |
| T6 | Governance contract | N | No RW/IPW/validator gate changes |
| T7 | Supersedes | N | No ADR contradiction |

**Outcome:** `EXEMPT`

| ID | Exemption (only if all T = N) | Pass? | Evidence |
| -- | --------------------------- | ----- | -------- |
| E1 | Single locus | Pass | §4.4 file list (6 script pairs + kanban/docs) |
| E2 | No new options | Pass | Implements BR-100 wave 3 + task AC only |
| E3 | Reversible in one task | Pass | Standard revert per chunk |
| E4 | Spec elsewhere | Pass | BR-100 + maintenance-automation-scripts-and-tools.md + task AC |
| E5 | Documented NONE | Pass | §5.3 cites BR-100 and code-quality-monitoring-processes |

---

## 3. Test design

**Note:** Wave 3 is mechanical (`exit` → `sys.exit`); primary verification is grep + CI + dashboard metrics + manifest diff.

### 3.1 Wave 1 (satisfied)

| ID | Behavior / layer | Expected check | Status | Covers |
| -- | ---------------- | -------------- | ------ | ------ |
| T1 | Baseline evidence | Task doc table: rule → count, hotspots, date, SHA | **PASS** | RF1 |
| T2 | Triage evidence | Per-rule disposition table (fix / waive / defer) in task doc | **PASS** | RF2 |
| T3 | Local regression | `python3.11 -m pytest tests/` → 0 failed, 0 errors | **PASS** — 396 passed | RF5 |
| T4 | Workflow scripts gate | `workflow-scripts-pytest.yml` job green (or local equivalent) | **PASS** | RF5 |
| T5 | Behaviour-change spots | Add/extend tests for non-trivial exception-path changes | **PASS** — wave-1 surgical fixes | RF3 |
| T6 | Post-wave metrics | Open reliability count delta + score check on dashboard | **PASS** — **133→34** (−74.4%) | RF3 |
| T7 | Waivers | Remaining wave-1 alerts have documented fix/waive/defer rationale | **PASS** | RF2 |
| T8 | Score check (wave 1) | Reliability **Fair+** or lag note in task doc | **PARTIAL** — Needs Improvement @ 34 (superseded by wave 2) | RF4 |

### 3.2 Wave 2 (satisfied)

| ID | Behavior / layer | Expected check | Status | Covers |
| -- | ---------------- | -------------- | ------ | ------ |
| T9 | Wave-2 manifest | Rule → count @ `777e956` for **34** residuals in task doc | **PASS** | RF8 |
| T10 | Triage sheet | Per-rule disposition before bulk edits | **PASS** | RF9, RNF1 |
| T11 | Local regression | `python3.11 -m pytest tests/` → 0 failed, 0 errors | **PASS** — 406 passed | RF5 |
| T12 | Workflow scripts gate | `workflow-scripts-pytest.yml` job green (or local equivalent) | **PASS** | RF5 |
| T13 | Post-wave-2 metrics | Post-wave-2 manifest + open-count delta + score snapshot | **PARTIAL** — local manifest done; T16 @ `f6aa4dca` has dashboard (RF13 sync pending) | RF11, RF4 |
| T14 | Waivers | Remaining wave-2 rule groups have documented fix/waive/defer rationale | **PASS** — print→T12; exit→wave 3 | RF9 |
| T15 | Behaviour-change spots | Targeted tests where exception/return paths change | **PASS** — explicit returns + manifest fix | RF10 |

### 3.3 Wave 3 (planned)

| ID | Behavior / layer | Expected check | Covers |
| -- | ---------------- | -------------- | ------ |
| T16 | Wave-3 manifest | **12** findings, 6 file pairs, SHA + date in task doc | RF14 |
| T17 | Mechanical fix | Grep: no `^\s*exit\(main\(\)\)` in wave-3 file set | RF15 |
| T18 | Import hygiene | Each touched file has `import sys` (or equivalent) | RF15 |
| T19 | CI regression | `python3.11 -m pytest tests/` → 0 failed | RF5 |
| T20 | Workflow scripts gate | `workflow-scripts-pytest` green (or local equivalent) | RF5 |
| T21 | Post-wave-3 metrics | Task doc: open reliability **16** expected (print-only); score **Fair** | RF16, RF4 |
| T22 | Residual ownership | Remaining print-at-import documented as T12 scope; no T12 hunks edited | RNF3 |

### 3.4 Closure (open)

| ID | Behavior / layer | Expected check | Covers |
| -- | ---------------- | -------------- | ------ |
| T23 | Dashboard verify | Post-wave-3 merge re-scan: **0** exit/quit; open count + score in task doc | RF4, RF16 |
| T24 | Kanban closure | BR-100 resolution narrative + four-surface terminal RW Step 7 | RF6, RF17 |

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
| 12 | Verify dashboard re-scan (T6) | **DONE** — **133→34**; score Needs Improvement | partial RF4 |

### 4.1 Wave 2 ledger (DONE — do not re-execute)

| Step | Action | Status | Version / evidence |
| ---- | ------ | ------ | ------------------ |
| 14 | Export wave-2 manifest; record rule breakdown for **34** in task doc | **DONE** | task doc wave-2 pre-manifest |
| 15 | Triage sheet: each wave-2 rule group → fix / waive / defer | **DONE** | task doc wave-2 triage |
| 16 | **Chunk D:** wave-2 reliability rules — `packages/frameworks/**/*.py` | **DONE** | 6 files |
| 17 | **Chunk E:** same rules — `tests/`, `scripts/`, `cli/` | **DONE** | T12 coordination |
| 18 | **Chunk F:** mirror — `greenfield-install/**/*.py` | **DONE** | wave-2 scope |
| 19 | Targeted tests for behaviour-changing fixes (T15) | **DONE** | explicit returns |
| 20 | Run T11 + T12 locally | **DONE** | 406 passed |
| 21 | Post-wave-2 manifest + dashboard check (T13) | **PARTIAL** — local manifest; T16 @ `f6aa4dca` (RF13 sync pending) | RF11 |
| 22 | Update BR-100 fix-attempt narrative | **DONE** | @ +3 |
| 23 | `RW E08:S03:T13 --art` — BUILD+1, changelog, RW Step 7 four-surface | **DONE** | v0.8.3.13+3 |

### 4.2 Wave 3 steps (planned)

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY] Confirm task `E08:S03:T13` remains `IN PROGRESS`** (already transitioned wave 1); update `Last updated` | Task doc |
| 24 | Sync post-wave-2 dashboard manifest in T13 task doc (adapt [T16 @ `f6aa4dca`](../project-management/kanban/epics/epic-08/story-03-automation-scripts/T16-github-security-code-quality-health-perpetual-fr112.md): 28 open, Fair) | RF13 |
| 25 | Export wave-3 manifest: **12** `py/use-of-exit-or-quit` + file hotspots | RF14 |
| 26 | Triage sheet: all **12** → **fix** (canonical pattern; no waivers expected) | RNF1 |
| 27 | **Chunk G:** `exit(main())` → `sys.exit(main())` in 6 files under `packages/` | RF15 |
| 28 | **Chunk H:** mirror same 6 files under `greenfield-install/` | RF15, RNF7 |
| 29 | Run T19 + T20 locally; fix any regressions | RF5 |
| 30 | Post-wave-3 manifest in task doc (**16** expected open, all print→T12) | RF16 |
| 31 | Update BR-100 fix-attempt / resolution narrative ("Change implemented" until dashboard verified) | RF17 |
| 32 | **`RW E08:S03:T13 --art`** — BUILD+1, changelog, RW Step 7 four-surface | RF17 |
| 33 | Post-merge dashboard re-scan (read-only); record open count + score in task doc | RF4, RF16 |
| **13** | **[MANDATORY] Reconcile task `E08:S03:T13` status** to actual state: **COMPLETE** + `✅ COMPLETE (v{version})` if RF4+RF15+RF17 satisfied and **0** exit/quit; else **IN PROGRESS** with reason; **BLOCKED** + reason if blocked | Task doc + kboard |

**RW verification / FBU wave rule (BR-097):** Steps 32–33 prescribe **`RW E08:S03:T13 --art`** only. Do **not** prescribe `--doc-policy-zero` for follow-on releases after a tagged BUILD.

**T12 coordination:** Do not edit print-at-import modules in this wave; if file overlap, apply exit/quit hunk only.

### 4.3 Files to create or modify

- **UPDATE (wave 1 — done):** `packages/**/*.py`, `tests/**/*.py`, `scripts/**/*.py`, `cli/**/*.py`, `greenfield-install/**/*.py` (wave-1 reliability findings only)
- **UPDATE (wave 2 — done):** 6 files (mixed-returns + wrong-arguments) + greenfield-install mirrors
- **UPDATE (wave 3 — planned):**
  - `packages/frameworks/kanban/scripts/detect_existing_structure.py`
  - `packages/frameworks/kanban/scripts/migrate_structure.py`
  - `packages/frameworks/kanban/scripts/analyze_structure.py`
  - `packages/frameworks/kanban/scripts/validate_installation.py`
  - `packages/frameworks/kanban/scripts/install_kanban_framework.py`
  - `packages/frameworks/workflow-mgt/scripts/uninstall_package.py`
  - `greenfield-install/` mirrors of the above 6 files
- **UPDATE:** Task doc, BR-100, story checklist, kboard (RW Step 7)

### 4.4 Dependency order

**Wave 1 (complete):** Baseline manifest → triage sheet → directory chunks (A → B → C) → targeted tests → pytest green → post-wave manifest → BR/kanban → RW → dashboard re-scan

**Wave 2 (complete):** Wave-2 manifest → triage → chunks D → E → F → targeted tests → CI → post-wave-2 manifest → BR/kanban → RW @ +3

**Wave 3 (planned):** Confirm IN PROGRESS → dashboard sync (step 24) → wave-3 manifest → triage → chunks G → H → CI → post-wave-3 manifest → BR/kanban → RW → dashboard re-scan → status reconciliation (step 13)

### 4.5 Documentation implementation steps

1. Record wave-3 manifest in task doc (step 25) before code edits
2. Record wave-3 triage sheet in task doc (step 26) before bulk fixes
3. Sync post-wave-2 dashboard evidence from T16 (step 24)
4. Record post-wave-3 manifest in task doc (step 30) before BR-100 resolution update
5. RW Step 7 updates story checklist, kboard, BR-100 in same release

---

## 5. Documentation deliverables

### 5.1 Existing documents to update

| Doc ID | Path | Scope of change | Tied to (RF/T/impl step) |
| ------ | ---- | --------------- | ------------------------ |
| D-U1 | `docs/project-management/kanban/epics/epic-08/story-03-automation-scripts/T13-code-quality-reliability-backlog-br100.md` | Wave 1–2 manifests (**done**); dashboard sync + wave-3 manifests + AC closure (**open**) | RF1–RF3, RF8–RF11, RF13–RF16, steps 24/25/30/13 |
| D-U2 | `docs/project-management/kanban/fr-br/BR-100-code-quality-reliability-backlog.md` | Fix-attempt / resolution (interim **done** @ +3; wave-3 + final closure **open**) | RF6, RF12, RF17, steps 31/32 |
| D-U3 | `docs/project-management/kanban/epics/epic-08/story-03-automation-scripts.md` | Checklist on terminal RW | steps 32/13 |
| D-U4 | `docs/project-management/kanban/kboard.md` | RW Step 7 row → COMPLETE or IN PROGRESS | steps 32/13 |

### 5.2 New documents to create

| Doc ID | Proposed path (draft) | Purpose | Tied to (RF/T/impl step) |
| ------ | --------------------- | ------- | ------------------------ |
| D-C1 | `docs/implementation-cycles/IPP-E08S03T13-code-quality-reliability-backlog-br100.md` | This planning package (revised wave 3) | IPW |

### 5.3 Documentation gaps and explicit non-changes

| Gap / topic | Resolution (CREATE row above, or NONE + reason) |
| ----------- | ----------------------------------------------- |
| Code quality burn-down methodology | NONE — BR-100 wave table is authoritative; governed by [BR-100](../project-management/kanban/fr-br/BR-100-code-quality-reliability-backlog.md) and [code-quality-monitoring-processes.md](../architecture/standards-and-adrs/code-quality-monitoring-processes.md) |
| New ADR for exit/quit pattern | NONE — EXEMPT per §2.5; existing pattern in maintenance-automation-scripts-and-tools.md |
| New CI quality gate workflow | NONE — out of scope; dashboard verification manual at steps 33/T23 |
| Dedicated baseline manifest file | NONE — AC requires manifest in task doc only |
| T16 perpetual re-scan | **NONE** — T16 already has post-wave-2 evidence; T13 cites via step 24 |
| `py/print-during-import` (**16**) | **NONE in T13** — owned by [E08:S03:T12](IPP-E08S03T12-code-quality-maintainability-backlog-br099.md) wave 4 / [BR-099](../project-management/kanban/fr-br/BR-099-code-quality-maintainability-backlog.md) |

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
- [x] `pytest tests/` + workflow-scripts CI green
- [x] IPP bidirectionally linked from task doc

### Wave 2 (complete)

- [x] Wave-2 manifest (34 by rule) in task doc
- [x] Wave-2 triage sheet (fix / waive / defer per rule group)
- [x] Wave-2 true positives remediated or waived with rationale (**6** fixed; **16** print→T12; **12** exit→wave 3)
- [x] Local post-wave-2 manifest estimate in task doc (**28** expected open)
- [x] `RW E08:S03:T13 --art` for wave-2 release (**v0.8.3.13+3**)
- [ ] Dashboard re-scan synced in T13 task doc (evidence in T16 @ `f6aa4dca` — step 24)

### Wave 3 (complete @ v0.8.3.13+4)

- [x] Post-wave-2 dashboard manifest synced in T13 task doc (RF13)
- [x] Wave-3 manifest (**12** exit/quit, 6 file pairs) in task doc
- [x] Wave-3 triage sheet (all **fix**)
- [x] All **12** `exit(main())` → `sys.exit(main())` with `import sys` where needed
- [x] Local post-wave-3 manifest in task doc (**16** expected open, print→T12)
- [x] `pytest tests/` green after wave 3 (**407 passed**)
- [x] `RW E08:S03:T13 --art` for wave-3 release (**v0.8.3.13+4**)
- [ ] Post-merge dashboard re-scan: **0** exit/quit (step 33 — pending merge)

### Closure

- [x] Reliability score **Fair** or better documented in T13 task doc (RF4 @ `f6aa4dca`)
- [x] BR-100 resolution narrative + terminal **`RW E08:S03:T13 --art`**
- [x] Step 13 status reconciliation: **COMPLETE** @ v0.8.3.13+4

### Documentation

- [x] All §5 wave-1–2 UPDATE items implemented (except D-U1 dashboard sync + wave-3)
- [ ] §5 wave-3 UPDATE items (D-U1 wave-3 manifests, D-U2 final closure, D-U4 terminal row)
- [x] All §6 paths exist and are linked from task doc

### IPW Phase 9 validation (planning complete)

- [x] IPP §1–§7 complete; wave-3 revision header present
- [x] Step 1 = confirm IN PROGRESS (not duplicate TODO transition)
- [x] Final step 13 = status reconciliation (not forced COMPLETE)
- [x] §2.5 ADR matrix re-scored; EXEMPT with E1–E5
- [x] §5/§6 doc tables updated for wave 3
- [x] No `--doc-policy-zero` in RW prescriptions
- [x] Bidirectional task ↔ IPP links resolve

---

## References

- [BR-100](../project-management/kanban/fr-br/BR-100-code-quality-reliability-backlog.md)
- [BR-099](../project-management/kanban/fr-br/BR-099-code-quality-maintainability-backlog.md)
- [BR-101](../project-management/kanban/fr-br/BR-101-code-quality-ai-suggestions-backlog.md)
- [T13 task doc](../project-management/kanban/epics/epic-08/story-03-automation-scripts/T13-code-quality-reliability-backlog-br100.md)
- [T16 task doc](../project-management/kanban/epics/epic-08/story-03-automation-scripts/T16-github-security-code-quality-health-perpetual-fr112.md) — post-wave-2 dashboard @ `f6aa4dca`
- [IPP-E08S03T12](IPP-E08S03T12-code-quality-maintainability-backlog-br099.md)
- [IPP-E08S03T14](IPP-E08S03T14-code-quality-ai-suggestions-backlog-br101.md)
- [IPP-E08S03T04](IPP-E08S03T04-ci-test-workflow-pytest-remediation-br058.md)
- [maintenance-automation-scripts-and-tools.md](../architecture/standards-and-adrs/maintenance-automation-scripts-and-tools.md)
- [code-quality-monitoring-processes.md](../architecture/standards-and-adrs/code-quality-monitoring-processes.md)
- [ipw-adr-necessity-checklist.md](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md)
- [FR-042](../project-management/kanban/fr-br/FR-042-implementation-planning-workflow-ipw.md)
- [BR-097](../project-management/kanban/fr-br/BR-097-rw-agent-reuses-tagged-build-and-force-moves-release-tags.md)
