---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T17:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E08:S03:T16 — Planning: Spec, Tests, Implementation Plan (IPW)

**Host Task:** [`T16-github-security-code-quality-health-perpetual-fr112.md`](../project-management/kanban/epics/epic-08/story-03-automation-scripts/T16-github-security-code-quality-health-perpetual-fr112.md) **(E08:S03:T16)**  
**Planning for:** [FR-112](../project-management/kanban/fr-br/FR-112-perpetual-github-ci-and-security-health-lanes.md)  
**Status:** Approved (Wave 0 complete @ v0.8.3.16+1; **Wave 1 re-scan revision** 2026-06-05)

> **IPW:** Perpetual lane for GitHub **code scanning** + **Code Quality dashboard** hygiene. **Does not** own [Actions](https://github.com/RMS-Ltd/ai-dev-kit/actions) CI (→ **E08:S03:T15**) or finite **standard-finding** burn-down while **E08:S03:T12–T14** are IN PROGRESS.
>
> **Revision (2026-06-05 — Wave 1 re-scan):** Operator refresh of [Standard findings](https://github.com/RMS-Ltd/ai-dev-kit/security/quality) @ `main` **`f6aa4dca`**. **Maintainability 146 / Fair**; **Reliability 28 / Fair** (↑ from Needs Improvement after T13 wave-2); **AI panel 12** open. T16 records manifest + coordination delta only — **no standard-finding code edits** while T12–T14 remain IN PROGRESS.

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RF1 | Capture **baseline manifest** on `main`: code-scanning open count + rule breakdown; Code Quality **standard** bands (maintainability / reliability open counts + score); AI panel open count; snapshot SHA + UTC | T16 AC4, FR-112 F2 |
| RF2 | Document **coordination matrix** vs T12/T13/T14: rule-family ownership; T16 must not remediate standard-finding waves while backlogs are IN PROGRESS | T16 handoff table, plan scope |
| RF3 | Define **perpetual wave playbook**: themed hygiene RWs (`RW E08:S03:T16 --art`, BUILD +1); one theme per RW | T16 RW attribution |
| RF4 | **Handoff criteria:** when T12/T13/T14 COMPLETE → T16 becomes default burn-down anchor | T16 task doc |
| RF5 | **Cross-lane gate:** T16 code remediation requires green **Tests** + **workflow-scripts-pytest**; red Actions on `main` escalates to **T15** before merge | FR-112 NF1, T15 baseline |
| RF6 | First version anchor: **`RW E08:S03:T16 --art`** after baseline manifest (AC4) | T16 AC4 |
| RF7 | Novel **HIGH** CodeQL security alerts → dedicated BR + task (BR-094 pattern); return to T16 routine hygiene after | T16 scope boundary |
| RF8 | **Wave 1+ re-scan manifest:** refresh Standard findings rule breakdown + scores @ current `main` SHA; record delta vs prior T16 baseline; cross-lane score milestones (e.g. reliability **Fair**) | Operator refresh 2026-06-05 |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RNF1 | Dashboard capture via GitHub UI; `gh api code-scanning/alerts` documents **security** sidebar only — Code Quality uses separate product surface (see T12 note) | T12 baseline manifest |
| RNF2 | Changelog: **"Change implemented"** until operator verifies dashboard delta | RW rules |
| RNF3 | Post-ship waves: **`RW E08:S03:T16 --art` only**; no `--doc-policy-zero` (BR-097) | BR-097 |
| RNF4 | Perpetual BUILD increments; high BUILD expected on perpetual lane | dev-kit-versioning-policy |

### 1.3 Invariants and boundaries

- **Invariants:** Python 3.11+ (FR-104); no `git tag -f` on release tags (BR-097); three-surface split (Actions / standard findings / perpetual security-quality)
- **In scope (Wave 0):** Baseline manifest + coordination matrix + AC4 RW; read-only Actions cross-lane snapshot
- **In scope (Wave 1 re-scan):** Dashboard manifest refresh @ `f6aa4dca`; coordination matrix delta; read-only cross-lane score notes — **no code remediation**
- **In scope (Wave 1+ remediation):** Perpetual themed hygiene after T12–T14 handoff or net-new code-scanning alerts
- **Out of scope:** [Actions](https://github.com/RMS-Ltd/ai-dev-kit/actions) workflow fixes → **T15**; BR-099/100/101 standard-finding waves → **T12–T14**; BR-099 wave-3 `greenfield-install/` → **T12**

---

## 2. Specification

### 2.1 Goal

Establish **E08:S03:T16** as the operational perpetual lane for GitHub **code scanning** and **Code Quality dashboard** hygiene: record an evidence-based baseline on `main`, codify handoff from finite T12–T14 backlogs, and prescribe a repeatable wave model—while treating current CI redness as a **T15 merge prerequisite**, not T16 fix scope.

### 2.2 Specification mapping from ascertained requirements

- RF1 → Baseline manifest tables in T16 task doc (code scanning API + dashboard cross-refs for standard/AI bands)
- RF2 → Coordination matrix in T16 task doc; Wave 0 blocks standard-finding code edits
- RF3 → §4 Wave 1+ steps; one theme per `RW E08:S03:T16 --art`
- RF4 → Handoff table copied/enhanced from T16 task doc; T16 burn-down deferred until T12–T14 COMPLETE
- RF5 → Actions cross-lane snapshot; merge gate documented in baseline
- RF6 → Wave 0 step 5 RW release
- RF7 → Escalation path to dedicated BR+task documented in §1.3
- RF8 → Wave 1 re-scan tables in T16 task doc; rule breakdown @ `f6aa4dca`; reliability score **Fair** milestone cited for T13

### 2.3 Constraints

- Primary capture: [code scanning](https://github.com/RMS-Ltd/ai-dev-kit/security/code-scanning), [standard findings](https://github.com/RMS-Ltd/ai-dev-kit/security/quality), [AI findings](https://github.com/RMS-Ltd/ai-dev-kit/security/quality/ai-findings)
- Post-ship verification: **`RW E08:S03:T16 --art`** only (BUILD +1)

### 2.4 Status transition intent (mandatory for IPW-derived implementation tasks)

- **Current task status:** IN PROGRESS
- **Transition trigger to IN PROGRESS:** Already satisfied at FR-112 intake; reaffirm at Wave 0 step 1
- **Transition trigger to COMPLETE:** Not applicable for perpetual lane — task remains **IN PROGRESS** after AC4; only individual waves close
- **Atomic propagation requirement:** Task doc status and kboard row status update in same change set/session
- **Owner:** Implementation execution step

### 2.5 ADR necessity decision (mandatory — IPW Phase 5.0)

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | N | FR-112 prescribes two-lane perpetual model; no architectural fork |
| T2 | Reversibility | N | Wave 0 docs-only; code waves revert per standard PR |
| T3 | Blast radius | N | Confined to security-quality surfaces + kanban docs |
| T4 | Precedent | N | Extends BR-094–098 discrete pattern + T12–T14 backlog IPPs |
| T5 | Constraint trade-off | N | No security/performance/versioning contract change |
| T6 | Governance contract | N | No RW/IPW validator gate changes |
| T7 | Supersedes | N | No ADR contradiction |

**Outcome:** `EXEMPT`

| ID | Exemption (only if all T = N) | Pass? | Evidence |
| -- | --------------------------- | ----- | -------- |
| E1 | Single locus | Pass | T16 task doc + IPP; kanban four-surface on RW |
| E2 | No new options | Pass | Implements FR-112 F2 + T16 AC4 only |
| E3 | Reversible in one task | Pass | Wave 0 manifest revertible in one commit |
| E4 | Spec elsewhere | Pass | FR-112 + T16 task doc + sibling IPPs |
| E5 | Documented NONE | Pass | §5.3 cites FR-112 and code-quality-monitoring-processes |

---

## 3. Test design

| ID | Behavior / layer | Expected check | Covers | Wave |
| -- | ---------------- | -------------- | ------ | ---- |
| TC1 | Baseline manifest complete | T16 task doc tables: SHA, UTC, code-scanning count, standard/AI cross-refs | RF1 | 0 |
| TC2 | No overlap with T12/T13 | Coordination matrix shows T16 Wave 0 = no standard-finding edits | RF2 | 0 |
| TC3 | AC4 SHA evidence | Manifest `main` SHA matches capture-time `origin/main` | RF1, RF6 | 0 |
| TC4 | Actions cross-lane | T16 doc cites T15 baseline; merge gate stated when CI red | RF5 | 0 |
| TC5 | Local regression | `python3.11 -m pytest tests/` + workflow-scripts gate green | RF5 | 1+ |
| TC6 | Dashboard delta | Post-wave manifest with open-count delta (operator-verified) | RF3, RF8 | 1+ |
| TC7 | Wave 1 re-scan manifest | T16 task doc: SHA `f6aa4dca`, maintainability **146**, reliability **28**, rule table matches GH UI | RF8 | 1 re-scan |
| TC8 | Cross-lane score delta | Reliability **Needs Improvement → Fair** recorded; T13 wave-2 attribution noted | RF8 | 1 re-scan |

**Wave 0 verification:** TC1–TC4 only (docs-only; no `--skip-tests` — TC5 deferred to Wave 1+).

**Wave 1 re-scan verification:** TC7–TC8 (docs-only manifest refresh; no `--skip-tests`).

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY] Confirm task `E08:S03:T16` status `IN PROGRESS`** in task doc. Update `Last updated`. | Task doc status |
| 2 | Record baseline manifest on `main` @ capture SHA (code scanning API + standard/AI cross-refs from T12–T14 dashboards) | RF1 |
| 3 | Add **Actions cross-lane snapshot** (read-only): T15 baseline + latest `main` workflow conclusions | RF5 |
| 4 | Add **coordination matrix** (T12/T13/T14 vs T16) with sibling IPP links | RF2 |
| 5 | Update FR-112 F2 progress when AC4 satisfied | RF6 |
| 6 | `RW E08:S03:T16 --art` — version anchor `v0.8.3.16+1`, changelog, RW Step 7 | RF6 |
| **7** | **[MANDATORY] Reconcile task status:** perpetual lane stays **IN PROGRESS**; mark AC4 `[x]` with version anchor; update `Last updated` | T16 AC4 |

**Wave 1 re-scan (2026-06-05 — manifest refresh only):**

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **8** | **[MANDATORY] Confirm task `E08:S03:T16` status `IN PROGRESS`**. Update `Last updated`. | Task doc |
| 9 | Record **Wave 1 re-scan manifest** @ `main` `f6aa4dca` from [Standard findings](https://github.com/RMS-Ltd/ai-dev-kit/security/quality): scores + rule breakdown + AI panel cross-ref (**12** open) | RF8, TC7 |
| 10 | Update **coordination matrix** delta vs Wave 0 (`777e956`): reliability **34→28**, score **Needs Improvement→Fair**; maintainability **~145→146** | RF8, TC8 |
| 11 | Cross-cite T13 wave-2 outcome (read-only); no T16 code edits | RF2 |
| **12** | **[MANDATORY] Reconcile status:** perpetual lane stays **IN PROGRESS**; update `Last updated` | TC8 |

**Optional Wave 1 RW:** Manifest-only refresh may ship via **`RW E08:S03:T16 --art`** (BUILD +1) when operator batches doc updates; not required for IPW completion.

**Wave 2+ (after T12–T14 handoff or net-new alerts):**

| Step | Action |
| ---- | ------ |
| 13 | Re-scan dashboards; pick one theme |
| 14 | Triage: fix / dismiss / defer-to-BR |
| 15 | Implement + TC5; mirror `greenfield-install/` when implicated |
| 16 | `RW E08:S03:T16 --art` per wave |
| 17 | Status reconciliation — remain IN PROGRESS |

**RW verification rule (BR-097):** Post-ship waves prescribe **`RW E08:S03:T16 --art`** only. No `--doc-policy-zero`.

### 4.1 Files to create or modify (Wave 0)

- **CREATE:** this IPP
- **UPDATE:** T16 task doc (baseline, coordination, AC4)
- **UPDATE:** FR-112 (F2 checkbox when AC4 done)
- **UPDATE:** story checklist, epic-08, kboard (RW Step 7)

### 4.2 Dependency order

1. Baseline capture → coordination matrix → FR-112 tick → RW → AC4 reconciliation

### 4.3 Documentation implementation steps

1. Baseline tables in T16 before RW
2. IPP link on task doc + kboard before RW
3. RW Step 7 four-surface sync

---

## 5. Documentation deliverables

### 5.1 Existing documents to update

| Doc ID | Path | Scope of change | Tied to |
| ------ | ---- | --------------- | ------- |
| D-U1 | `docs/project-management/kanban/epics/epic-08/story-03-automation-scripts/T16-github-security-code-quality-health-perpetual-fr112.md` | Baseline + coordination + AC4 | steps 2–4, 7 |
| D-U2 | `docs/project-management/kanban/fr-br/FR-112-perpetual-github-ci-and-security-health-lanes.md` | F2 progress | step 5 |
| D-U3 | `docs/project-management/kanban/epics/epic-08/story-03-automation-scripts.md` | Checklist | step 6 |
| D-U4 | `docs/project-management/kanban/kboard.md` | O-band IPP + version stamp | step 6 |
| D-U5 | `docs/project-management/kanban/epics/epic-08/epic-08.md` | Story line | step 6 |

### 5.2 New documents to create

| Doc ID | Path | Purpose |
| ------ | ---- | ------- |
| D-C1 | `docs/implementation-cycles/IPP-E08S03T16-github-security-code-quality-health-perpetual-fr112.md` | This IPP |

### 5.3 Documentation gaps and explicit non-changes

| Gap / topic | Resolution |
| ----------- | ---------- |
| Perpetual security-quality playbook | NONE — this IPP + T16 task doc |
| New ADR | NONE — EXEMPT §2.5 |
| Actions CI triage | NONE — T15 owns; cross-lane cite only |
| T12–T14 IPP content | NONE — coordination matrix links only |

---

## 6. Documentation housing

| Doc ID | Canonical path | Publication status | Lifecycle | Inbound links |
| ------ | -------------- | ------------------ | --------- | ------------- |
| D-C1 | `docs/implementation-cycles/IPP-E08S03T16-github-security-code-quality-health-perpetual-fr112.md` | NOT_APPLICABLE | evergreen | T16 Input + References; kboard —IPP— |
| D-U1 | T16 task doc path above | NOT_APPLICABLE | evergreen | FR-112 |
| D-U2–D-U5 | Kanban paths above | NOT_APPLICABLE | evergreen | RW Step 7 |

---

## 7. Success / verification criteria

- [x] IPP Sections 1–7 complete with §2.5 ADR EXEMPT
- [x] Baseline manifest on `main` in T16 task doc (TC1–TC3)
- [x] Actions cross-lane snapshot documented (TC4)
- [x] Coordination matrix vs T12–T14 (TC2)
- [x] AC4 `[x]` with `RW E08:S03:T16 --art` version anchor (**v0.8.3.16+1**)
- [x] IPP bidirectionally linked from task doc + kboard
- [x] FR-112 F2 updated when AC4 satisfied
- [x] Task remains IN PROGRESS (perpetual); not marked COMPLETE
- [x] Wave 1 re-scan manifest @ `f6aa4dca` in T16 task doc (TC7–TC8)
- [x] Coordination matrix reflects reliability **Fair** + **28** open (TC8)

---

## References

- [FR-112](../project-management/kanban/fr-br/FR-112-perpetual-github-ci-and-security-health-lanes.md)
- [T16 task doc](../project-management/kanban/epics/epic-08/story-03-automation-scripts/T16-github-security-code-quality-health-perpetual-fr112.md)
- [T15 task doc](../project-management/kanban/epics/epic-08/story-03-automation-scripts/T15-github-actions-ci-health-perpetual-fr112.md)
- [IPP-E08S03T12](IPP-E08S03T12-code-quality-maintainability-backlog-br099.md)
- [IPP-E08S03T13](IPP-E08S03T13-code-quality-reliability-backlog-br100.md)
- [IPP-E08S03T14](IPP-E08S03T14-code-quality-ai-suggestions-backlog-br101.md)
- [code-quality-monitoring-processes.md](../architecture/standards-and-adrs/code-quality-monitoring-processes.md)
- [ipw-adr-necessity-checklist.md](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md)
- [BR-097](../project-management/kanban/fr-br/BR-097-rw-agent-reuses-tagged-build-and-force-moves-release-tags.md)
- [dev-kit-versioning-policy.md](../governance/standards/dev-kit-versioning-policy.md)
