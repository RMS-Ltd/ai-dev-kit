---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E08:S03:T12 — Planning: Spec, Tests, Implementation Plan (IPW)

**Host Task:** [`T12-code-quality-maintainability-backlog-br099.md`](../project-management/kanban/epics/epic-08/story-03-automation-scripts/T12-code-quality-maintainability-backlog-br099.md) **(E08:S03:T12)**  
**Planning for:** [BR-099](../project-management/kanban/fr-br/BR-099-code-quality-maintainability-backlog.md)  
**Status:** Approved (planning complete; awaiting implementation authorization)

> **IPW:** Produced for E08:S03:T12. First bulk **Code Quality maintainability** burn-down; complements security CodeQL tasks E08:S03:T08–T11 and defers reliability ([BR-100](BR-100-code-quality-reliability-backlog.md) / E08:S03:T13).

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RF1 | Capture **baseline manifest** (rule → open count, snapshot date, `main` SHA) in task doc | T12 AC1, BR-099 AC1 |
| RF2 | Remediate or **document-waive** all wave-1 rule groups | T12 AC2, BR-099 AC2 |
| RF3 | Reduce open maintainability count **≥50%** vs baseline (280+ closed) | T12 AC2, BR-099 AC2 |
| RF4 | Maintainability score **Good** or better on dashboard (or document GitHub scoring lag) | T12 AC4, BR-099 AC3 |
| RF5 | Keep CI green: `pytest tests/`, `workflow-scripts-pytest`, `tests.yml` | T12 AC5, BR-099 AC4 |
| RF6 | Close kanban loop: BR-099 resolution + **RW E08:S03:T12** on completion | T12 AC6, BR-099 AC5 |
| RF7 | Include **`greenfield-install/`** in wave 1 hygiene pass | IPW scope decision |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RNF1 | **Autofix-first** for safe hygiene; manual only where autofix risks behavior change | BR-099 remediation theme |
| RNF2 | Changes must be **revertible** per directory chunk (no mixed unrelated edits) | Large blast radius |
| RNF3 | Changelog: **"Change implemented"** / **"Attempted fix"** until dashboard verified | RW rules |
| RNF4 | Coordinate with **E08:S03:T13** — do not fix reliability-rule findings in this task | T12 Input |

### 1.3 Invariants and boundaries

- **Invariants:** Python 3.11+ per FR-104; no `git tag -f` / force-push on release tags (BR-097); post-ship verification uses `RW E08:S03:T12 --art` only
- **In scope:** Wave-1 maintainability rules (`py/unused-import`, `py/unused-local-variable`, `py/unused-global-variable`, `py/import-and-import-from`, `py/repeated-import`, `py/unnecessary-pass`, `py/unnecessary-lambda`); full repo Python including `greenfield-install/`; `ruff` dev dependency if needed
- **Out of scope:** BR-100 reliability findings; BR-101 AI suggestions; `py/print-during-import` (BR-099 wave 2); CodeQL **security** sidebar (T08–T11); new CI quality gates / rulesets

---

## 2. Specification

### 2.1 Goal

Burn down ≥50% of open GitHub Code Quality **maintainability** findings via wave-1 hygiene remediation across the full Python corpus (including `greenfield-install/`), restoring dashboard score toward **Good**, without regressing existing pytest CI.

### 2.2 Specification mapping from ascertained requirements

- RF1 → baseline manifest table in task doc (GitHub dashboard or `gh api` alert aggregate)
- RF2, RF7 → directory-chunked `ruff` autofix + manual pass on wave-1 rules
- RF3, RF4 → post-wave manifest + dashboard score check (lag documented if needed)
- RF5 → existing `pytest tests/` and workflow-scripts gate as regression barrier
- RF6 → BR-099 update + RW Step 7 four-surface reconciliation

**Scope resolution:** BR-099 top-rule table lists `py/print-during-import`; remediation-waves table assigns it to wave 2. This IPP follows the task doc — wave 1 excludes print-at-import.

### 2.3 Constraints

- Python **3.11+** per FR-104
- Wave-1 rule → tool mapping:

| CodeQL rule | Primary remediation |
| ----------- | ------------------- |
| `py/unused-import` | `ruff check --fix --select F401` |
| `py/unused-local-variable` | `ruff --select F841`; prefix `_` if intentionally unused |
| `py/unused-global-variable` | Remove or use; manual review |
| `py/import-and-import-from`, `py/repeated-import` | `ruff --select I001` / manual import consolidation |
| `py/unnecessary-pass` | Manual removal |
| `py/unnecessary-lambda` | Manual replace with direct reference |

- Post-ship verification / FBU waves: **`RW E08:S03:T12 --art`** only (BUILD +1); no `--doc-policy-zero`

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
| T1 | Alternatives | N | BR-099 prescribes wave-1 hygiene + ruff; mirror inclusion confirmed at IPW |
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

| ID | Behavior / layer | Expected check | Covers |
| -- | ---------------- | -------------- | ------ |
| T1 | Baseline evidence | Task doc table: rule → count, date, SHA | RF1 |
| T2 | Local regression | `python3.11 -m pytest tests/` → 0 failed, 0 errors | RF5 |
| T3 | Workflow scripts gate | `workflow-scripts-pytest.yml` job green (or local equivalent) | RF5 |
| T4 | Spot-check hygiene | Sample fixed files: no removed imports that break re-exports or `TYPE_CHECKING` blocks | RNF1 |
| T5 | Post-wave metrics | Open count ≤50% of baseline (dashboard or `gh api` alert aggregate) | RF2, RF3 |
| T6 | Score check | Maintainability **Good**+ or lag note in task doc | RF4 |
| T7 | Waivers | Any remaining wave-1 rule groups have documented false-positive / defer rationale | RF2 |

**Note:** No new pytest unit tests required — verification is CI + dashboard metrics + manifest diff (same pattern as [IPP-E08S03T04](IPP-E08S03T04-ci-test-workflow-pytest-remediation-br058.md)).

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY] Transition task `E08:S03:T12` status `TODO → IN PROGRESS`** in task doc. Update `Last updated` date. | Task doc `Status` = `IN PROGRESS` |
| 2 | Capture baseline manifest via GitHub dashboard export or `gh api repos/RMS-Ltd/ai-dev-kit/code-scanning/alerts?state=open` (filter maintainability / wave-1 rules); record in task doc | RF1 |
| 3 | Add `ruff` to `setup.py` `extras_require["dev"]`; optional minimal `ruff.toml` if needed | RNF1 |
| 4 | **Chunk A:** `ruff check --fix` on `packages/frameworks/**/*.py` for F401/F841/import rules | RF2 |
| 5 | **Chunk B:** same on `tests/`, `scripts/`, `cli/` | RF2 |
| 6 | **Chunk C:** same on `greenfield-install/**/*.py` | RF7 |
| 7 | Manual pass: `unnecessary-pass`, `unnecessary-lambda`, import-style edge cases; skip reliability-rule files flagged for T13 | RF2, RNF4 |
| 8 | Run T2 + T3 locally; fix any regressions | RF5 |
| 9 | Capture **post-wave manifest** + open-count delta in task doc | RF3 |
| 10 | Update BR-099: fix-attempt / resolution status (not "Fixed" until user verifies dashboard) | RF6 |
| 11 | `RW E08:S03:T12 --art` — version bump BUILD+1, changelog, RW Step 7 four-surface | RF6 |
| 12 | Verify dashboard score (T6); if lagging, document expected refresh window | RF4 |
| **13** | **[MANDATORY] Reconcile task `E08:S03:T12` status** to actual implementation state: `COMPLETE` + `✅ COMPLETE (v{version})` if all ACs satisfied; `IN PROGRESS` if ongoing; `BLOCKED` + reason if blocked. Update `Last updated`. | Task doc status reflects actual state |

**RW verification / FBU wave rule (BR-097):** Post-ship verification prescribes **`RW E08:S03:T12 --art`** only. Do **not** prescribe `--doc-policy-zero` for follow-on releases after a tagged BUILD.

**Multi-RW note:** If steps 4–7 exceed one session, intermediate **`RW E08:S03:T12 --art`** between chunks is allowed (BUILD +1 each); status stays `IN PROGRESS` until step 13.

### 4.1 Files to create or modify

- **CREATE:** this IPP (already present at planning completion)
- **UPDATE (bulk):** `packages/**/*.py`, `tests/**/*.py`, `scripts/**/*.py`, `cli/**/*.py`, `greenfield-install/**/*.py` (wave-1 findings only)
- **UPDATE:** `setup.py` (add `ruff` dev dep); optional `ruff.toml`
- **UPDATE:** Task doc, BR-099, story checklist, kboard (RW Step 7)

### 4.2 Dependency order

1. Baseline manifest → tooling (`ruff`) → directory chunks (A → B → C) → manual edge cases → pytest green → post-wave manifest → BR/kanban → RW → dashboard verification → status reconciliation

### 4.3 Documentation implementation steps

1. Record baseline manifest in task doc (step 2) before code edits
2. Record post-wave manifest in task doc (step 9) before BR-099 resolution update
3. RW Step 7 updates story checklist, kboard, BR-099 in same release

---

## 5. Documentation deliverables

### 5.1 Existing documents to update

| Doc ID | Path | Scope of change | Tied to (RF/T/impl step) |
| ------ | ---- | --------------- | ------------------------ |
| D-U1 | `docs/project-management/kanban/epics/epic-08/story-03-automation-scripts/T12-code-quality-maintainability-backlog-br099.md` | Baseline + post-wave manifests; status | RF1, RF3, steps 1/9/13 |
| D-U2 | `docs/project-management/kanban/fr-br/BR-099-code-quality-maintainability-backlog.md` | Fix-attempt / resolution | RF6, step 10 |
| D-U3 | `docs/project-management/kanban/epics/epic-08/story-03-automation-scripts.md` | Checklist on RW | step 11 |
| D-U4 | `docs/project-management/kanban/kboard.md` | RW Step 7 row | step 11 |
| D-U5 | `setup.py` | `ruff` dev dependency | step 3, RNF1 |

### 5.2 New documents to create

| Doc ID | Proposed path (draft) | Purpose | Tied to (RF/T/impl step) |
| ------ | --------------------- | ------- | ------------------------ |
| D-C1 | `docs/implementation-cycles/IPP-E08S03T12-code-quality-maintainability-backlog-br099.md` | This planning package | IPW |

### 5.3 Documentation gaps and explicit non-changes

| Gap / topic | Resolution (CREATE row above, or NONE + reason) |
| ----------- | ----------------------------------------------- |
| Code quality burn-down methodology | NONE — BR-099 wave table is authoritative; governed by [BR-099](../project-management/kanban/fr-br/BR-099-code-quality-maintainability-backlog.md) and [code-quality-monitoring-processes.md](../architecture/standards-and-adrs/code-quality-monitoring-processes.md) |
| New ADR for hygiene approach | NONE — EXEMPT per §2.5 |
| New CI quality gate workflow | NONE — out of scope; dashboard verification manual at step 12 |
| Dedicated baseline manifest file | NONE — AC requires manifest in task doc only |

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

- [ ] Baseline manifest in task doc (rule → count, SHA, date)
- [ ] Wave-1 rules remediated or waived with rationale
- [ ] Open count reduced ≥50% (≤280 remaining vs 560 baseline)
- [ ] Maintainability score Good+ or documented lag
- [ ] `pytest tests/` + workflow-scripts CI green
- [ ] BR-099 updated; released via `RW E08:S03:T12 --art`
- [ ] IPP bidirectionally linked from task doc
- [ ] All §5 UPDATE/CREATE items implemented or explicitly deferred with reason
- [ ] All §6 `PUBLISHED` paths exist and are linked from task doc (or validator passes)

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
