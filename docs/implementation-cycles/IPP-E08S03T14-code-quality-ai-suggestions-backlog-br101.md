---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T23:45:00Z
expires_at: null
housekeeping_policy: keep
---

# E08:S03:T14 — Planning: Spec, Tests, Implementation Plan (IPW)

**Host Task:** [`T14-code-quality-ai-suggestions-backlog-br101.md`](../project-management/kanban/epics/epic-08/story-03-automation-scripts/T14-code-quality-ai-suggestions-backlog-br101.md) **(E08:S03:T14)**  
**Planning for:** [BR-101](../project-management/kanban/fr-br/BR-101-code-quality-ai-suggestions-backlog.md)  
**Status:** Approved (planning complete; awaiting implementation authorization)

> **IPW:** Produced for E08:S03:T14. Triage and resolve **14** GitHub Code Quality **AI-powered** suggestions; complements maintainability task [E08:S03:T12](IPP-E08S03T12-code-quality-maintainability-backlog-br099.md) / [BR-099](../project-management/kanban/fr-br/BR-099-code-quality-maintainability-backlog.md) and reliability task [E08:S03:T13](IPP-E08S03T13-code-quality-reliability-backlog-br100.md) / [BR-100](../project-management/kanban/fr-br/BR-100-code-quality-reliability-backlog.md) with explicit deduplication.

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RF1 | Capture **inventory table**: all 14 AI suggestions (file, summary, suggested action, capture date, `main` SHA) in task doc | T14 deliverable #1, BR-101 AC1 |
| RF2 | **Triage sheet:** each suggestion marked **apply** / **dismiss** (with reason) / **defer-to-BR-099\|100** (duplicate) | T14 AC1, BR-101 AC2 |
| RF3 | **Apply** valid suggestions; add tests only where behaviour changes | T14 AC2, BR-101 AC3 |
| RF4 | **Dashboard clear:** AI suggestions panel shows **0 open** (applied or GitHub-dismissed) | T14 AC3, BR-101 AC4 |
| RF5 | Keep CI green: `python3.11 -m pytest tests/` + workflow-scripts gate | T14 AC2, BR-101 AC3 |
| RF6 | Close kanban loop: BR-101 resolution + **RW E08:S03:T14 --art** on completion | T14 AC4, BR-101 AC5 |
| RF7 | **Dedupe** against E08:S03:T12 / E08:S03:T13 triage sheets before applying fixes | T14 Input |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RNF1 | **Triage-before-fix** — no bulk edits without per-suggestion disposition | BR-101 root cause |
| RNF2 | Changes must be **revertible** in one session; mirror `packages/` → `greenfield-install/` only when suggestion files exist in both | Small blast radius |
| RNF3 | Changelog: **"Change implemented"** / **"Attempted fix"** until dashboard verified | RW rules |
| RNF4 | Post-ship verification uses **`RW E08:S03:T14 --art`** only (BUILD +1); no `--doc-policy-zero` | BR-097 |
| RNF5 | Do **not** re-remediate maintainability/reliability CodeQL rules owned by T12/T13 — defer duplicates | T14 Input, T12/T13 RNF4 |

### 1.3 Invariants and boundaries

- **Invariants:** Python 3.11+ per FR-104; no `git tag -f` / force-push on release tags (BR-097); post-ship verification uses `RW E08:S03:T14 --art` only
- **In scope:** 14 GitHub Code Quality **AI-powered** suggestions on recently changed files; manual dashboard export + per-item triage
- **Out of scope:** BR-099 maintainability burn-down (T12); BR-100 reliability burn-down (T13); CodeQL **security** sidebar (T08–T11); new CI quality gates; automating AI suggestion ingestion

---

## 2. Specification

### 2.1 Goal

Triage all 14 AI-powered Code Quality suggestions, apply valid low-risk improvements, dismiss false positives with documented rationale, and clear the GitHub AI suggestions panel to 0 open items without regressing pytest CI or duplicating T12/T13 remediation work.

### 2.2 Specification mapping from ascertained requirements

- RF1 → 14-row inventory table in task doc (GitHub dashboard export; see T12 note on `gh api code-scanning/alerts` returning 0 for Code Quality product surface)
- RF2, RF7 → per-suggestion disposition table with dedupe pass against T12/T13 before code edits
- RF3 → targeted fixes on **apply** rows only; mirror `greenfield-install/` when implicated
- RF4 → post-triage manifest + AI panel verification (lag documented if needed)
- RF5 → existing `pytest tests/` and workflow-scripts gate as regression barrier
- RF6 → BR-101 update + RW Step 7 four-surface reconciliation

**Sequencing:** AI suggestions target **recently changed files** — likely overlapping T12/T13 wave-1 remediation. Prefer **re-capturing inventory after T12/T13 wave-1 merges to `main`**; if run in parallel, step 3 dedupe is blocking before any code edits.

### 2.3 Constraints

- Python **3.11+** per FR-104
- Primary capture source: [GitHub Security & quality → AI suggestions panel](https://github.com/RMS-Ltd/ai-dev-kit/security/quality) — not `code-scanning/alerts` API
- Triage dispositions:

| Disposition | Action |
| ----------- | ------ |
| **apply** | Implement suggested fix in code; record in task doc |
| **dismiss** | GitHub-dismiss with rationale mirrored in task doc |
| **defer-to-BR-099** | Duplicate of maintainability finding — owned by T12 |
| **defer-to-BR-100** | Duplicate of reliability finding — owned by T13 |

- Post-ship verification / FBU waves: **`RW E08:S03:T14 --art`** only (BUILD +1); no `--doc-policy-zero`

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
| T1 | Alternatives | N | BR-101 prescribes apply/dismiss/defer triage; no architectural fork |
| T2 | Reversibility | N | Per-suggestion edits revert in one PR |
| T3 | Blast radius | N | Confined to suggestion-target files + kanban docs; no framework API / RW contract change |
| T4 | Precedent | N | One-off triage task; sibling BRs cover ongoing burn-down |
| T5 | Constraint trade-off | N | No security/performance/versioning trade-off |
| T6 | Governance contract | N | No RW/IPW/validator gate changes |
| T7 | Supersedes | N | No ADR contradiction |

**Outcome:** `EXEMPT`

| ID | Exemption (only if all T = N) | Pass? | Evidence |
| -- | --------------------------- | ----- | -------- |
| E1 | Single locus | Pass | §4.1 file list (suggestion-target files + kanban/docs) |
| E2 | No new options | Pass | Implements BR-101 + task AC only |
| E3 | Reversible in one task | Pass | Standard revert per suggestion |
| E4 | Spec elsewhere | Pass | BR-101 + this IPP + task AC |
| E5 | Documented NONE | Pass | §5.3 cites BR-101 and code-quality-monitoring-processes |

---

## 3. Test design

| ID | Behavior / layer | Expected check | Covers |
| -- | ---------------- | -------------- | ------ |
| T1 | Inventory evidence | Task doc table: 14 rows with file, summary, disposition, capture date | RF1 |
| T2 | Dedupe evidence | Rows deferred to BR-099/100 cite matching rule/file from T12/T13 | RF7 |
| T3 | Local regression | `python3.11 -m pytest tests/` → 0 failed, 0 errors | RF5 |
| T4 | Workflow scripts gate | `workflow-scripts-pytest.yml` job green (or local equivalent) | RF5 |
| T5 | Behaviour-change spots | Add/extend tests only for apply fixes that change control flow or API | RF3 |
| T6 | Dashboard clear | AI suggestions panel **0 open** (note + date; screenshot optional) | RF4 |
| T7 | Dismiss rationale | Every non-applied row has dismiss/defer rationale in task doc + GitHub where applicable | RF2 |

**Note:** No new pytest unit tests required by default — verification is CI + per-suggestion manifest evidence + dashboard check (same pattern as [IPP-E08S03T12](IPP-E08S03T12-code-quality-maintainability-backlog-br099.md)). Primary manifest source is GitHub dashboard export recorded in task doc; `gh api repos/RMS-Ltd/ai-dev-kit/code-scanning/alerts?state=open` may return 0 for Code Quality / AI suggestion surfaces.

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY] Transition task `E08:S03:T14` status `TODO → IN PROGRESS`** in task doc. Update `Last updated` date. | Task doc `Status` = `IN PROGRESS` |
| 2 | Export 14 AI suggestions from GitHub dashboard; build inventory table in task doc (capture date + `main` SHA) | RF1 |
| 3 | Dedupe pass: compare each row to T12/T13 triage sheets and in-flight edits; mark defer-to-BR-099/100 where overlapping | RF7 |
| 4 | Complete triage disposition table (apply / dismiss / defer) for all 14 rows | RF2 |
| 5 | **Apply chunk:** implement **apply** rows; mirror `greenfield-install/` only when mirrored files are implicated | RF3 |
| 6 | **Dismiss chunk:** GitHub-dismiss **dismiss** rows with rationale mirrored in task doc | RF2, RF4 |
| 7 | Run T3 + T4 locally; add T5 tests only if needed | RF5 |
| 8 | Record **post-triage manifest** (0 open AI suggestions; applied vs dismissed vs deferred counts) | RF4 |
| 9 | Update BR-101: fix-attempt / resolution status (not "Fixed" until user verifies dashboard) | RF6 |
| 10 | `RW E08:S03:T14 --art` — version bump BUILD+1, changelog, RW Step 7 four-surface | RF6 |
| 11 | Verify AI panel clear (T6); if lagging, document expected refresh window | RF4 |
| **12** | **[MANDATORY] Reconcile task `E08:S03:T14` status** to actual implementation state: `COMPLETE` + `✅ COMPLETE (v{version})` if all ACs satisfied; `IN PROGRESS` if ongoing; `BLOCKED` + reason if blocked. Update `Last updated`. | Task doc status reflects actual state |

**RW verification / FBU wave rule (BR-097):** Post-ship verification prescribes **`RW E08:S03:T14 --art`** only. Do **not** prescribe `--doc-policy-zero` for follow-on releases after a tagged BUILD.

**T12/T13 coordination:** Prefer inventory capture **after** T12/T13 wave-1 is on `main`; if parallel, step 3 dedupe is blocking before any code edits.

### 4.1 Files to create or modify

- **CREATE:** this IPP (present at planning completion)
- **UPDATE (targeted):** Only files named in inventory **apply** rows (likely subset of T12/T13 touch set — e.g. workflow-mgt scripts, `cli/`, `scripts/`)
- **UPDATE (greenfield-install):** Mirror paths only when apply-row files exist in both trees
- **UPDATE (tests):** Targeted test modules only where apply fixes change behaviour
- **UPDATE:** Task doc, BR-101, story checklist, kboard (RW Step 7)

### 4.2 Dependency order

1. Inventory export → dedupe pass → triage disposition → apply chunk → dismiss chunk → pytest green → post-triage manifest → BR/kanban → RW → dashboard verification → status reconciliation

### 4.3 Documentation implementation steps

1. Record inventory table in task doc (step 2) before code edits
2. Record triage disposition table in task doc (step 4) before apply/dismiss actions
3. Record post-triage manifest in task doc (step 8) before BR-101 resolution update
4. RW Step 7 updates story checklist, kboard, BR-101 in same release

---

## 5. Documentation deliverables

### 5.1 Existing documents to update

| Doc ID | Path | Scope of change | Tied to (RF/T/impl step) |
| ------ | ---- | --------------- | ------------------------ |
| D-U1 | `docs/project-management/kanban/epics/epic-08/story-03-automation-scripts/T14-code-quality-ai-suggestions-backlog-br101.md` | Inventory + triage + post-triage tables; status | RF1, RF2, RF4, steps 1/8/12 |
| D-U2 | `docs/project-management/kanban/fr-br/BR-101-code-quality-ai-suggestions-backlog.md` | Fix-attempt / resolution | RF6, step 9 |
| D-U3 | `docs/project-management/kanban/epics/epic-08/story-03-automation-scripts.md` | Checklist on RW | step 10 |
| D-U4 | `docs/project-management/kanban/kboard.md` | RW Step 7 row | step 10 |

### 5.2 New documents to create

| Doc ID | Proposed path (draft) | Purpose | Tied to (RF/T/impl step) |
| ------ | --------------------- | ------- | ------------------------ |
| D-C1 | `docs/implementation-cycles/IPP-E08S03T14-code-quality-ai-suggestions-backlog-br101.md` | This planning package | IPW |

### 5.3 Documentation gaps and explicit non-changes

| Gap / topic | Resolution (CREATE row above, or NONE + reason) |
| ----------- | ----------------------------------------------- |
| AI suggestions triage methodology | NONE — BR-101 + this IPP; governed by [code-quality-monitoring-processes.md](../architecture/standards-and-adrs/code-quality-monitoring-processes.md) |
| New ADR for AI suggestion handling | NONE — EXEMPT per §2.5 |
| New CI workflow for AI suggestions | NONE — out of scope; dashboard verification manual at step 11 |
| Dedicated manifest file outside task doc | NONE — AC requires manifest in task doc only |

---

## 6. Documentation housing

| Doc ID | Canonical path | Publication status | Publication N/A reason (if N/A) | Lifecycle | Inbound links to add |
| ------ | -------------- | ------------------ | ------------------------------- | --------- | -------------------- |
| D-C1 | `docs/implementation-cycles/IPP-E08S03T14-code-quality-ai-suggestions-backlog-br101.md` | NOT_APPLICABLE | Planning artifact; not Docusaurus-facing | evergreen | Task doc Input + References |
| D-U1 | `docs/project-management/kanban/epics/epic-08/story-03-automation-scripts/T14-code-quality-ai-suggestions-backlog-br101.md` | NOT_APPLICABLE | Kanban internal | evergreen | BR-101 implementing task link (exists) |
| D-U2 | `docs/project-management/kanban/fr-br/BR-101-code-quality-ai-suggestions-backlog.md` | NOT_APPLICABLE | Kanban internal | evergreen | Task doc upstream link (exists) |
| D-U3 | `docs/project-management/kanban/epics/epic-08/story-03-automation-scripts.md` | NOT_APPLICABLE | Kanban internal | evergreen | Story checklist |
| D-U4 | `docs/project-management/kanban/kboard.md` | NOT_APPLICABLE | Kanban internal | evergreen | MoSCOW row |

**Housing rules:** One authoritative doc per topic; IPP under `docs/implementation-cycles/`; kanban four-surface on RW.

---

## 7. Success / verification criteria

- [ ] 14-row inventory table in task doc (file, summary, capture date, SHA)
- [ ] Triage sheet: all 14 suggestions classified apply / dismiss / defer
- [ ] Dedupe evidence for rows deferred to BR-099/100
- [ ] Valid suggestions applied; dismissals recorded in task doc + GitHub
- [ ] AI suggestions panel 0 open (or lag documented)
- [ ] `pytest tests/` + workflow-scripts CI green
- [ ] Targeted tests added where behaviour changes (T5)
- [ ] BR-101 updated; released via `RW E08:S03:T14 --art`
- [ ] IPP bidirectionally linked from task doc
- [ ] All §5 UPDATE/CREATE items implemented or explicitly deferred with reason
- [ ] All §6 `PUBLISHED` paths exist and are linked from task doc (or validator passes)

---

## References

- [BR-101](../project-management/kanban/fr-br/BR-101-code-quality-ai-suggestions-backlog.md)
- [BR-099](../project-management/kanban/fr-br/BR-099-code-quality-maintainability-backlog.md)
- [BR-100](../project-management/kanban/fr-br/BR-100-code-quality-reliability-backlog.md)
- [T14 task doc](../project-management/kanban/epics/epic-08/story-03-automation-scripts/T14-code-quality-ai-suggestions-backlog-br101.md)
- [IPP-E08S03T12](IPP-E08S03T12-code-quality-maintainability-backlog-br099.md)
- [IPP-E08S03T13](IPP-E08S03T13-code-quality-reliability-backlog-br100.md)
- [code-quality-monitoring-processes.md](../architecture/standards-and-adrs/code-quality-monitoring-processes.md)
- [ipw-adr-necessity-checklist.md](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md)
- [FR-042](../project-management/kanban/fr-br/FR-042-implementation-planning-workflow-ipw.md)
- [BR-097](../project-management/kanban/fr-br/BR-097-rw-agent-reuses-tagged-build-and-force-moves-release-tags.md)
