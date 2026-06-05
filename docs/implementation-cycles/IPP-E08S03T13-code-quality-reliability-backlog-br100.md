---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T23:30:00Z
expires_at: null
housekeeping_policy: keep
---

# E08:S03:T13 — Planning: Spec, Tests, Implementation Plan (IPW)

**Host Task:** [`T13-code-quality-reliability-backlog-br100.md`](../project-management/kanban/epics/epic-08/story-03-automation-scripts/T13-code-quality-reliability-backlog-br100.md) **(E08:S03:T13)**  
**Planning for:** [BR-100](../project-management/kanban/fr-br/BR-100-code-quality-reliability-backlog.md)  
**Status:** Approved (planning complete; awaiting implementation authorization)

> **IPW:** Produced for E08:S03:T13. First bulk **Code Quality reliability** burn-down; complements maintainability task [E08:S03:T12](IPP-E08S03T12-code-quality-maintainability-backlog-br099.md) / [BR-099](../project-management/kanban/fr-br/BR-099-code-quality-maintainability-backlog.md) and defers wave 2/3 reliability rules to future work.

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RF1 | Capture **baseline manifest** (rule → open count, file hotspots, snapshot date, `main` SHA) in task doc | T13 AC1, BR-100 AC1 |
| RF2 | **Triage sheet:** classify each wave-1 rule group as fix / waive / defer | T13 deliverable #2, BR-100 AC2 |
| RF3 | Remediate wave-1 true positives; add tests where behaviour changes | T13 deliverable #3, BR-100 AC3 |
| RF4 | Reliability score **Fair** or better on dashboard (or document GitHub scoring lag) | T13 AC3, BR-100 AC4 |
| RF5 | Keep CI green: `pytest tests/`, `workflow-scripts-pytest`, `tests.yml` | T13 AC4, BR-100 AC3 |
| RF6 | Close kanban loop: BR-100 resolution + **RW E08:S03:T13 --art** on completion | T13 AC5, BR-100 AC5 |
| RF7 | Include **`greenfield-install/`** in wave 1 reliability pass | Story pattern (mirror T12) |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RNF1 | **Triage-before-bulk-fix** — document CLI `main` false positives; waivers need task-doc rationale or CodeQL suppression comment | BR-100 root cause |
| RNF2 | Changes must be **revertible** per directory chunk (frameworks → tests/scripts/cli → greenfield-install) | Large blast radius |
| RNF3 | **Coordinate with E08:S03:T12** — do not remediate maintainability-rule findings; reliability-only hunks on shared files | T13 Input, T12 RNF4 |
| RNF4 | Changelog: **"Change implemented"** / **"Attempted fix"** until dashboard verified | RW rules |
| RNF5 | Post-ship verification uses **`RW E08:S03:T13 --art`** only (BUILD +1); no `--doc-policy-zero` | BR-097 |

### 1.3 Invariants and boundaries

- **Invariants:** Python 3.11+ per FR-104; no `git tag -f` / force-push on release tags (BR-097); post-ship verification uses `RW E08:S03:T13 --art` only
- **In scope:** Wave-1 reliability rules (`py/empty-except`, `py/file-not-closed`, `py/call/wrong-arguments`, `py/catch-base-exception`); full repo Python including `greenfield-install/`
- **Out of scope:** BR-099 maintainability rules (T12); BR-101 AI suggestions (T14); BR-100 wave 2/3 rules (`py/mixed-returns`, `py/multiple-definition`, `py/use-of-exit-or-quit`); CodeQL **security** sidebar (T08–T11); new CI quality gates / rulesets

---

## 2. Specification

### 2.1 Goal

Burn down open GitHub Code Quality **reliability** findings via wave-1 remediation (exception handling, resource cleanup, call-site correctness) across the full Python corpus (including `greenfield-install/`), restoring dashboard Reliability to **Fair** or better without regressing existing pytest CI.

### 2.2 Specification mapping from ascertained requirements

- RF1 → baseline manifest table in task doc (GitHub dashboard export; see T12 note on `gh api code-scanning/alerts` returning 0 for Code Quality product surface)
- RF2 → triage disposition table per wave-1 rule group before bulk edits
- RF3, RF7 → directory-chunked manual fixes on wave-1 rules; targeted tests for behaviour-changing fixes
- RF4 → post-wave manifest + dashboard Reliability score check (lag documented if needed)
- RF5 → existing `pytest tests/` and workflow-scripts gate as regression barrier
- RF6 → BR-100 update + RW Step 7 four-surface reconciliation

**Scope resolution:** BR-100 remediation-waves table assigns `py/catch-base-exception` to wave 2; the **task doc Scope line** explicitly includes BaseException in wave 1. This IPP follows the **task doc** — wave 1 includes all four rule groups. Wave 2/3 rules (`py/mixed-returns`, `py/multiple-definition`, `py/use-of-exit-or-quit`) remain out of scope for this task.

### 2.3 Constraints

- Python **3.11+** per FR-104
- Wave-1 rule → remediation mapping:

| CodeQL rule | Primary remediation | Triage notes |
| ----------- | ------------------- | ------------ |
| `py/empty-except` | Log + re-raise, catch specific exception, or documented intentional swallow | Tests if control flow changes |
| `py/file-not-closed` | `with open(...)` or `try/finally` close | High priority — resource leaks |
| `py/call/wrong-arguments` | Fix arity/types at call site; verify with existing tests | True bugs — always fix |
| `py/catch-base-exception` | Narrow to `Exception`; preserve `KeyboardInterrupt`/`SystemExit` propagation | Align with [maintenance-automation-scripts-and-tools.md](../architecture/standards-and-adrs/maintenance-automation-scripts-and-tools.md) error-handling example |

- Post-ship verification / FBU waves: **`RW E08:S03:T13 --art`** only (BUILD +1); no `--doc-policy-zero`

### 2.4 Status transition intent (mandatory for IPW-derived implementation tasks)

- **Current task status:** TODO
- **Transition trigger to IN PROGRESS:** First non-planning implementation change lands (mandatory Step 1)
- **Transition trigger to COMPLETE:** All RF1–RF6 evidenced; forensic `✅ COMPLETE (v{version})` on RW
- **Atomic propagation requirement:** Task doc status and kboard row status must update in the same change set/session
- **Owner:** Implementation execution step (not planning-only IPW creation)

### 2.5 ADR necessity decision (mandatory — IPW Phase 5.0)

Score each trigger **Y** or **N** with one-line evidence. Criteria: [`ipw-adr-necessity-checklist.md`](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md) (FR-100).

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | N | BR-100 prescribes wave-1 rule groups and fix patterns |
| T2 | Reversibility | N | Reliability edits revert in one PR per chunk |
| T3 | Blast radius | N | Confined to Python reliability hygiene; no framework API / RW contract change |
| T4 | Precedent | N | Existing error-handling doc in maintenance-automation-scripts-and-tools.md |
| T5 | Constraint trade-off | N | No security/performance/versioning trade-off |
| T6 | Governance contract | N | No RW/IPW/validator gate changes |
| T7 | Supersedes | N | No ADR contradiction |

**Outcome:** `EXEMPT`

| ID | Exemption (only if all T = N) | Pass? | Evidence |
| -- | --------------------------- | ----- | -------- |
| E1 | Single locus | Pass | §4.1 file list (Python globs + kanban/docs) |
| E2 | No new options | Pass | Implements BR-100 + task AC only |
| E3 | Reversible in one task | Pass | Standard revert per chunk |
| E4 | Spec elsewhere | Pass | BR-100 + this IPP + task AC |
| E5 | Documented NONE | Pass | §5.3 cites BR-100 and code-quality-monitoring-processes |

---

## 3. Test design

| ID | Behavior / layer | Expected check | Covers |
| -- | ---------------- | -------------- | ------ |
| T1 | Baseline evidence | Task doc table: rule → count, hotspots, date, SHA | RF1 |
| T2 | Triage evidence | Per-rule disposition table (fix / waive / defer) in task doc | RF2 |
| T3 | Local regression | `python3.11 -m pytest tests/` → 0 failed, 0 errors | RF5 |
| T4 | Workflow scripts gate | `workflow-scripts-pytest.yml` job green (or local equivalent) | RF5 |
| T5 | Behaviour-change spots | Add/extend tests for wrong-arguments fixes and non-trivial exception-path changes | RF3 |
| T6 | Post-wave metrics | Open reliability count delta + score check on dashboard | RF3, RF4 |
| T7 | Waivers | Remaining wave-1 alerts have documented fix/waive/defer rationale | RF2 |

**Note:** `gh api repos/RMS-Ltd/ai-dev-kit/code-scanning/alerts?state=open` may return 0 for Code Quality product surface (see [T12 baseline note](../project-management/kanban/epics/epic-08/story-03-automation-scripts/T12-code-quality-maintainability-backlog-br099.md)); primary manifest source is GitHub dashboard export recorded in task doc.

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY] Transition task `E08:S03:T13` status `TODO → IN PROGRESS`** in task doc. Update `Last updated` date. | Task doc `Status` = `IN PROGRESS` |
| 2 | Capture baseline manifest via GitHub dashboard (133 total reliability; per-rule counts + top files); record `main` SHA in task doc | RF1 |
| 3 | Build triage sheet (fix / waive / defer) for four wave-1 rule groups; flag CLI-entry false positives | RF2 |
| 4 | **Chunk A:** reliability fixes in `packages/frameworks/**/*.py` | RF3 |
| 5 | **Chunk B:** same in `tests/`, `scripts/`, `cli/` | RF3 |
| 6 | **Chunk C:** mirror in `greenfield-install/**/*.py` | RF7 |
| 7 | Add targeted tests for behaviour-changing fixes (T5) | RF3 |
| 8 | Run T3 + T4 locally; fix any regressions | RF5 |
| 9 | Capture **post-wave manifest** + Reliability score snapshot in task doc | RF3, RF4 |
| 10 | Update BR-100: fix-attempt / resolution status (not "Fixed" until user verifies dashboard) | RF6 |
| 11 | `RW E08:S03:T13 --art` — version bump BUILD+1, changelog, RW Step 7 four-surface | RF6 |
| 12 | Verify dashboard Reliability **Fair+** (T6); if lagging, document expected refresh window | RF4 |
| **13** | **[MANDATORY] Reconcile task `E08:S03:T13` status** to actual implementation state: `COMPLETE` + `✅ COMPLETE (v{version})` if all ACs satisfied; `IN PROGRESS` if ongoing; `BLOCKED` + reason if blocked. Update `Last updated`. | Task doc status reflects actual state |

**RW verification / FBU wave rule (BR-097):** Post-ship verification prescribes **`RW E08:S03:T13 --art`** only. Do **not** prescribe `--doc-policy-zero` for follow-on releases after a tagged BUILD.

**Multi-RW note:** If steps 4–7 exceed one session, intermediate **`RW E08:S03:T13 --art`** between chunks is allowed (BUILD +1 each); status stays `IN PROGRESS` until step 13.

**T12 coordination:** Before editing a file already modified by T12 ruff pass, diff and apply only reliability-rule hunks; if conflict-prone, complete T12 chunk first or merge in one session.

### 4.1 Files to create or modify

- **CREATE:** this IPP (present at planning completion)
- **UPDATE (bulk):** `packages/**/*.py`, `tests/**/*.py`, `scripts/**/*.py`, `cli/**/*.py`, `greenfield-install/**/*.py` (wave-1 reliability findings only)
- **UPDATE (tests):** Targeted test modules where call arity or exception paths change
- **UPDATE:** Task doc, BR-100, story checklist, kboard (RW Step 7)

### 4.2 Dependency order

1. Baseline manifest → triage sheet → directory chunks (A → B → C) → targeted tests → pytest green → post-wave manifest → BR/kanban → RW → dashboard verification → status reconciliation

### 4.3 Documentation implementation steps

1. Record baseline manifest in task doc (step 2) before code edits
2. Record triage sheet in task doc (step 3) before bulk fixes
3. Record post-wave manifest in task doc (step 9) before BR-100 resolution update
4. RW Step 7 updates story checklist, kboard, BR-100 in same release

---

## 5. Documentation deliverables

### 5.1 Existing documents to update

| Doc ID | Path | Scope of change | Tied to (RF/T/impl step) |
| ------ | ---- | --------------- | ------------------------ |
| D-U1 | `docs/project-management/kanban/epics/epic-08/story-03-automation-scripts/T13-code-quality-reliability-backlog-br100.md` | Baseline + triage + post-wave manifests; status | RF1, RF2, RF3, steps 1/9/13 |
| D-U2 | `docs/project-management/kanban/fr-br/BR-100-code-quality-reliability-backlog.md` | Fix-attempt / resolution | RF6, step 10 |
| D-U3 | `docs/project-management/kanban/epics/epic-08/story-03-automation-scripts.md` | Checklist on RW | step 11 |
| D-U4 | `docs/project-management/kanban/kboard.md` | RW Step 7 row | step 11 |

### 5.2 New documents to create

| Doc ID | Proposed path (draft) | Purpose | Tied to (RF/T/impl step) |
| ------ | --------------------- | ------- | ------------------------ |
| D-C1 | `docs/implementation-cycles/IPP-E08S03T13-code-quality-reliability-backlog-br100.md` | This planning package | IPW |

### 5.3 Documentation gaps and explicit non-changes

| Gap / topic | Resolution (CREATE row above, or NONE + reason) |
| ----------- | ----------------------------------------------- |
| Code quality burn-down methodology | NONE — BR-100 wave table is authoritative; governed by [BR-100](../project-management/kanban/fr-br/BR-100-code-quality-reliability-backlog.md) and [code-quality-monitoring-processes.md](../architecture/standards-and-adrs/code-quality-monitoring-processes.md) |
| New ADR for exception-handling approach | NONE — EXEMPT per §2.5; existing pattern in maintenance-automation-scripts-and-tools.md |
| New CI quality gate workflow | NONE — out of scope; dashboard verification manual at step 12 |
| Dedicated baseline manifest file | NONE — AC requires manifest in task doc only |

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

- [ ] Baseline manifest in task doc (rule → count, hotspots, SHA, date)
- [ ] Triage sheet: wave-1 rule groups classified fix / waive / defer
- [ ] Wave-1 true positives remediated or waived with rationale
- [ ] Reliability score Fair+ or documented GitHub lag
- [ ] `pytest tests/` + workflow-scripts CI green
- [ ] Targeted tests added where behaviour changes (T5)
- [ ] BR-100 updated; released via `RW E08:S03:T13 --art`
- [ ] IPP bidirectionally linked from task doc
- [ ] All §5 UPDATE/CREATE items implemented or explicitly deferred with reason
- [ ] All §6 `PUBLISHED` paths exist and are linked from task doc (or validator passes)

---

## References

- [BR-100](../project-management/kanban/fr-br/BR-100-code-quality-reliability-backlog.md)
- [BR-099](../project-management/kanban/fr-br/BR-099-code-quality-maintainability-backlog.md)
- [T13 task doc](../project-management/kanban/epics/epic-08/story-03-automation-scripts/T13-code-quality-reliability-backlog-br100.md)
- [IPP-E08S03T12](IPP-E08S03T12-code-quality-maintainability-backlog-br099.md)
- [IPP-E08S03T04](IPP-E08S03T04-ci-test-workflow-pytest-remediation-br058.md)
- [maintenance-automation-scripts-and-tools.md](../architecture/standards-and-adrs/maintenance-automation-scripts-and-tools.md)
- [code-quality-monitoring-processes.md](../architecture/standards-and-adrs/code-quality-monitoring-processes.md)
- [ipw-adr-necessity-checklist.md](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md)
- [FR-042](../project-management/kanban/fr-br/FR-042-implementation-planning-workflow-ipw.md)
- [BR-097](../project-management/kanban/fr-br/BR-097-rw-agent-reuses-tagged-build-and-force-moves-release-tags.md)
