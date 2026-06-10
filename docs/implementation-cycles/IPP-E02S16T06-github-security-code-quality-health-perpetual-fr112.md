---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T17:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E02:S16:T06 — Planning: Spec, Tests, Implementation Plan (IPW)

**Host Task:** [`T06-github-security-code-quality-health-perpetual.md`](../kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T06-github-security-code-quality-health-perpetual.md) **(E02:S16:T06)**  
**Planning for:** [FR-112](../kanban/fr-br/FR-112-perpetual-github-ci-and-security-health-lanes.md)  
**Status:** Approved (Wave 3e @ v0.8.3.16+9; **Wave 4 IPW revision** 2026-06-10 — maintainability ~10 @ `38d2454`)

> **IPW:** Perpetual lane for GitHub **code scanning** + **Code Quality dashboard** hygiene. **Does not** own [Actions](https://github.com/RMS-Ltd/ai-dev-kit/actions) CI (→ **E02:S16:T05**).
>
> **Revision (2026-06-08 — Wave 3 IPW):** Post–Wave 2b operator dashboard **3** maintainability + **8** reliability open @ `main` `f7d8b155`. Two-step: **Wave 3a** manifest + TC14 close; **Wave 3b** reliability-first remediation. See **§8 Wave 3**.
>
> **Revision (2026-06-07 — Wave 2+ IPW):** T12/T13/T14 **COMPLETE**; T12 operator **Good** @ `ed379ab`; RF9 deferral **lifted**. Two-step delivery: **Wave 2a** manifest-only RW after T15 on `main`; **Wave 2b** first themed remediation RW. See **§8 Rolling backlog**.
>
> **Revision (2026-06-05 — Wave 1 re-scan):** Operator refresh @ `main` **`f6aa4dca`**. **Maintainability 146 / Fair**; **Reliability 28 / Fair**; **AI panel 12** open.
>

> **Revision (2026-06-10 — Wave 4 IPW):** Operator dashboard **~10** maintainability standard findings @ `main` `38d24549445f4ed77b0d099f1aa3b927d5c61f19`. Two-step: **Wave 4a** manifest + close 3c/3d/3e verifies; **Wave 4b** maintainability autofix. See **§8 Wave 4**.

> **Revision (2026-06-05 — operator deferral):** ~~Postpone T16 until T12–T14 sign-off~~ — **LIFTED** 2026-06-07.

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RF1 | Capture **baseline manifest** on `main`: code-scanning open count + rule breakdown; Code Quality **standard** bands (maintainability / reliability open counts + score); AI panel open count; snapshot SHA + UTC | T16 AC4, FR-112 F2 |
| RF2 | Document **coordination matrix** vs T12/T13/T14: rule-family ownership; T16 must not remediate standard-finding waves while backlogs are IN PROGRESS | T16 handoff table, plan scope |
| RF3 | Define **perpetual wave playbook**: themed hygiene RWs (`RW E02:S16:T06 --art`, BUILD +1); one theme per RW | T16 RW attribution |
| RF4 | **Handoff criteria:** when T12/T13/T14 COMPLETE → T16 becomes default burn-down anchor | T06 task doc |
| RF5 | **Cross-lane gate:** T16 code remediation requires green **Tests** + **workflow-scripts-pytest**; red Actions on `main` escalates to **T15** before merge | FR-112 NF1, T15 baseline |
| RF6 | First version anchor: **`RW E02:S16:T06 --art`** after baseline manifest (AC4) | T16 AC4 |
| RF7 | Novel **HIGH** CodeQL security alerts → dedicated BR + task (BR-094 pattern); return to T16 routine hygiene after | T16 scope boundary |
| RF8 | **Wave 1+ re-scan manifest:** refresh Standard findings rule breakdown + scores @ current `main` SHA; record delta vs prior T16 baseline; cross-lane score milestones (e.g. reliability **Fair**) | Operator refresh 2026-06-05 |
| RF9 | ~~Defer T16 activity until T12–T14 sign-off~~ — **LIFTED** 2026-06-07 | Operator directive 2026-06-05 |
| RF10 | **Wave 2a re-scan** on `main` @ SHA + UTC: code-scanning, standard bands, AI panel, rule breakdown | Wave 2 IPW |
| RF11 | **Delta vs Wave 1** (`f6aa4dca`) and **T12 Good** (`ed379ab`) in T06 task doc | Wave 2 IPW |
| RF12 | **Merge gate:** No T16 **code** on `main` until T15 restores green Tests + Greenfield install | RF5 |
| RF13 | **Wave 2b:** one theme per RW; priority: AI lag → greenfield mirror → autofix rules → reliability regression | Wave 2 IPW |
| RF14 | **CQG** before Wave 2b RW (`validate_code_quality_gate.py`) | FR-113 / T17 |
| RF15 | **greenfield-install** sync after `packages/` edits in Wave 2b | FR-106 |
| RF16 | Net-new **HIGH** CodeQL security → BR + task (BR-094); return to T16 after | T16 scope |
| RF17 | **Wave 3a re-scan** on `main` @ SHA: explicit **3** M + **8** R open counts + rule breakdown + scores | Wave 3 IPW |
| RF18 | **Delta** vs Wave 2a/2b and T12 Good in T06 task doc | Wave 3 IPW |
| RF19 | **Close TC14**; Wave 2b verify note; optional changelog verification addendum | Wave 3 IPW |
| RF20 | **Wave 3b:** reliability-first (8), then maintainability (3); one RW if all code-fixable | Wave 3 IPW |
| RF24 | **Wave 4a manifest** on `main` @ current SHA: **~10** maintainability + rule breakdown; close 3c/3d/3e operator verifies | Wave 4 IPW |
| RF25 | **Delta** vs Wave 3 post-3b (**Excellent** M / **Good** R) in T06 task doc | Wave 4 IPW |
| RF26 | **Wave 4b:** maintainability-only burn-down **~10** open standard findings (autofix-first) | Wave 4 IPW |
| RF27 | Post-wave manifest + operator dashboard verify (TC24) | Wave 4 IPW |
| RF28 | Perpetual RW: **`RW E02:S16:T06 --art`** (BUILD +1 per wave; BR-097) | Wave 4 IPW |
| RF29 | Canonical IPP @ E02 path; kboard + task-doc bidirectional links | Wave 4 IPW |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RNF1 | Dashboard capture via GitHub UI; `gh api code-scanning/alerts` documents **security** sidebar only — Code Quality uses separate product surface (see T12 note) | T12 baseline manifest |
| RNF2 | Changelog: **"Change implemented"** until operator verifies dashboard delta | RW rules |
| RNF3 | Post-ship waves: **`RW E02:S16:T06 --art` only**; no `--doc-policy-zero` (BR-097) | BR-097 |
| RNF4 | Perpetual BUILD increments; high BUILD expected on perpetual lane | dev-kit-versioning-policy |
| RNF5 | Dashboard UI is SoT for open counts; local **ruff** supplementary only | Wave 4 IPW |
| RNF6 | **CQG** before Wave 4b code RW (FR-113 / T17) | Wave 4 IPW |
| RNF7 | **`sync_greenfield_install.py`** after `packages/` edits (FR-106) | Wave 4 IPW |
| RNF8 | Changelog **"Change implemented"** / **"Attempted fix"** until operator verifies | RW rules |
| RNF9 | Do not remediate reliability-band findings in Wave 4b unless merge gate blocked | Wave 4 IPW |

### 1.3 Invariants and boundaries

- **Invariants:** Python 3.11+ (FR-104); no `git tag -f` on release tags (BR-097); three-surface split (Actions / standard findings / perpetual security-quality)
- **In scope (Wave 0):** Baseline manifest + coordination matrix + AC4 RW; read-only Actions cross-lane snapshot
- **In scope (Wave 1 re-scan):** Dashboard manifest refresh @ `f6aa4dca`; coordination matrix delta; read-only cross-lane score notes — **no code remediation**
- **Deferred (2026-06-05):** All Wave 1 RW + Wave 2+ activity until **T12–T14** sign-off — RF9
- **In scope (post-handoff only):** Perpetual themed hygiene after T12–T14 COMPLETE or net-new code-scanning alerts (HIGH → BR-094)
- **Out of scope:** [Actions](https://github.com/RMS-Ltd/ai-dev-kit/actions) workflow fixes → **T15**; BR-099/100/101 standard-finding waves → **T12–T14**; BR-099 wave-3 `greenfield-install/` → **T12**

---

## 2. Specification

### 2.1 Goal

Establish **E02:S16:T06** as the operational perpetual lane for GitHub **code scanning** and **Code Quality dashboard** hygiene: record an evidence-based baseline on `main`, codify handoff from finite T12–T14 backlogs, and prescribe a repeatable wave model—while treating current CI redness as a **T15 merge prerequisite**, not T16 fix scope.

### 2.2 Specification mapping from ascertained requirements

- RF1 → Baseline manifest tables in T06 task doc (code scanning API + dashboard cross-refs for standard/AI bands)
- RF2 → Coordination matrix in T06 task doc; Wave 0 blocks standard-finding code edits
- RF3 → §4 Wave 1+ steps; one theme per `RW E02:S16:T06 --art`
- RF4 → Handoff table copied/enhanced from T06 task doc; T16 burn-down deferred until T12–T14 COMPLETE
- RF5 → Actions cross-lane snapshot; merge gate documented in baseline
- RF6 → Wave 0 step 5 RW release
- RF7 → Escalation path to dedicated BR+task documented in §1.3
- RF8 → Wave 1 re-scan tables in T06 task doc; rule breakdown @ `f6aa4dca`; reliability score **Fair** milestone cited for T13

### 2.3 Constraints

- Primary capture: [code scanning](https://github.com/RMS-Ltd/ai-dev-kit/security/code-scanning), [standard findings](https://github.com/RMS-Ltd/ai-dev-kit/security/quality), [AI findings](https://github.com/RMS-Ltd/ai-dev-kit/security/quality/ai-findings)
- Post-ship verification: **`RW E02:S16:T06 --art`** only (BUILD +1)

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
| E1 | Single locus | Pass | T06 task doc + IPP; kanban four-surface on RW |
| E2 | No new options | Pass | Implements FR-112 F2 + T16 AC4 only |
| E3 | Reversible in one task | Pass | Wave 0 manifest revertible in one commit |
| E4 | Spec elsewhere | Pass | FR-112 + T06 task doc + sibling IPPs |
| E5 | Documented NONE | Pass | §5.3 cites FR-112 and code-quality-monitoring-processes |

---

## 3. Test design

| ID | Behavior / layer | Expected check | Covers | Wave |
| -- | ---------------- | -------------- | ------ | ---- |
| TC1 | Baseline manifest complete | T06 task doc tables: SHA, UTC, code-scanning count, standard/AI cross-refs | RF1 | 0 |
| TC2 | No overlap with T12/T13 | Coordination matrix shows T16 Wave 0 = no standard-finding edits | RF2 | 0 |
| TC3 | AC4 SHA evidence | Manifest `main` SHA matches capture-time `origin/main` | RF1, RF6 | 0 |
| TC4 | Actions cross-lane | T16 doc cites T15 baseline; merge gate stated when CI red | RF5 | 0 |
| TC5 | Local regression | `python3.11 -m pytest tests/` + workflow-scripts gate green | RF5 | 1+ |
| TC6 | Dashboard delta | Post-wave manifest with open-count delta (operator-verified) | RF3, RF8 | 1+ |
| TC7 | Wave 1 re-scan manifest | T06 task doc: SHA `f6aa4dca`, maintainability **146**, reliability **28**, rule table matches GH UI | RF8 | 1 re-scan |
| TC8 | Cross-lane score delta | Reliability **Needs Improvement → Fair** recorded; T13 wave-2 attribution noted | RF8 | 1 re-scan |
| TC9 | Wave 2a manifest | T06 task doc: SHA, UTC, four surfaces populated | RF10 | 2a |
| TC10 | Wave 2a delta | vs Wave 1 + T12 Good documented | RF11 | 2a |
| TC11 | Wave 2b pytest | `pytest tests/` + workflow-scripts CI green | RF5, RF12 | 2b |
| TC12 | Wave 2b CQG | CQG meets `rw_threshold` (advisory warnings OK) | RF14 | 2b |
| TC13 | Wave 2b greenfield | `sync_greenfield_install.py --check` when packages touched | RF15 | 2b |
| TC14 | Wave 2b dashboard | Operator verifies GH UI delta post-merge | RF3 | 2b |
| TC15 | Wave 3a manifest | **3** M + **8** R + rule table @ `main` | RF17 | 3a |
| TC16 | Wave 3a delta + TC14 | vs Wave 2a/2b documented; TC14 closed | RF18, RF19 | 3a |
| TC17 | Wave 3b pytest | `pytest tests/` + workflow-scripts green | RF5 | 3b |
| TC18 | Wave 3b CQG + greenfield | CQG threshold + `--check` in sync | RF14, RF15 | 3b |
| TC19 | Wave 4a manifest | T06 task doc: SHA `38d2454…`, **~10** M + rule table; 3c/3d/3e verify closed | RF24, RF25 | 4a |
| TC20 | Wave 4b pytest | `pytest tests/` + workflow-scripts pytest green | RF26 | 4b |
| TC21 | Wave 4b CQG | `validate_code_quality_gate.py` meets `rw_threshold` | RNF6 | 4b |
| TC22 | Greenfield mirror | `sync_greenfield_install.py --check` after `packages/` edits | RNF7 | 4b |
| TC23 | Actions CI parity | `validate_actions_ci_parity.py --strict` before RW commit | FR-112 | 4b |
| TC24 | Dashboard delta | Operator confirms maintainability **~10 → 0** post-merge | RF27 | 4b |

**Wave 0 verification:** TC1–TC4 only (docs-only; no `--skip-tests` — TC5 deferred to Wave 1+).

**Wave 1 re-scan verification:** TC7–TC8 (docs-only manifest refresh; no `--skip-tests`).

**Wave 2a verification:** TC9–TC10 (docs-only manifest RW).

**Wave 2b verification:** TC11–TC14 (code + operator dashboard).

**Wave 3a verification:** TC15–TC16 (docs-only manifest RW).

**Wave 3b verification:** TC17–TC18 (code + post-merge dashboard).

**Wave 4a verification:** TC19 (docs-only manifest RW).

**Wave 4b verification:** TC20–TC24 (code + operator dashboard).

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY] Confirm task `E02:S16:T06` status `IN PROGRESS`** in task doc. Update `Last updated`. | Task doc status |
| 2 | Record baseline manifest on `main` @ capture SHA (code scanning API + standard/AI cross-refs from T12–T14 dashboards) | RF1 |
| 3 | Add **Actions cross-lane snapshot** (read-only): T15 baseline + latest `main` workflow conclusions | RF5 |
| 4 | Add **coordination matrix** (T12/T13/T14 vs T16) with sibling IPP links | RF2 |
| 5 | Update FR-112 F2 progress when AC4 satisfied | RF6 |
| 6 | `RW E02:S16:T06 --art` — version anchor `v0.8.3.16+1`, changelog, RW Step 7 | RF6 |
| **7** | **[MANDATORY] Reconcile task status:** perpetual lane stays **IN PROGRESS**; mark AC4 `[x]` with version anchor; update `Last updated` | T16 AC4 |

**Wave 1 re-scan (2026-06-05 — manifest refresh only):**

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **8** | **[MANDATORY] Confirm task `E02:S16:T06` status `IN PROGRESS`**. Update `Last updated`. | Task doc |
| 9 | Record **Wave 1 re-scan manifest** @ `main` `f6aa4dca` from [Standard findings](https://github.com/RMS-Ltd/ai-dev-kit/security/quality): scores + rule breakdown + AI panel cross-ref (**12** open) | RF8, TC7 |
| 10 | Update **coordination matrix** delta vs Wave 0 (`777e956`): reliability **34→28**, score **Needs Improvement→Fair**; maintainability **~145→146** | RF8, TC8 |
| 11 | Cross-cite T13 wave-2 outcome (read-only); no T16 code edits | RF2 |
| **12** | **[MANDATORY] Reconcile status:** perpetual lane stays **IN PROGRESS**; update `Last updated` | TC8 |

**Optional Wave 1 RW:** ~~Manifest-only refresh may ship via **`RW E02:S16:T06 --art`** (BUILD +1) when operator batches doc updates~~ — **POSTPONED** per RF9 until T12–T14 sign-off.

**Wave 2+ (gated — resume after T12–T14 operator sign-off):**

| Step | Action |
| ---- | ------ |
| 13 | Re-scan dashboards; pick one theme |
| 14 | Triage: fix / dismiss / defer-to-BR |
| 15 | Implement + TC5; mirror `greenfield-install/` when implicated |
| 16 | `RW E02:S16:T06 --art` per wave |
| 17 | Status reconciliation — remain IN PROGRESS |

**RW verification rule (BR-097):** Post-ship waves prescribe **`RW E02:S16:T06 --art`** only. No `--doc-policy-zero`.

### 4.1 Files to create or modify (Wave 0)

- **CREATE:** this IPP
- **UPDATE:** T06 task doc (baseline, coordination, AC4)
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
| D-U1 | `docs/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T06-github-security-code-quality-health-perpetual.md` | Baseline + coordination + AC4 | steps 2–4, 7 |
| D-U2 | `docs/kanban/fr-br/FR-112-perpetual-github-ci-and-security-health-lanes.md` | F2 progress | step 5 |
| D-U3 | `docs/kanban/epics/epic-08/story-03-automation-scripts.md` | Checklist | step 6 |
| D-U4 | `docs/kanban/kboard.md` | O-band IPP + version stamp | step 6 |
| D-U5 | `docs/kanban/epics/epic-08/epic-08.md` | Story line | step 6 |

### 5.2 New documents to create

| Doc ID | Path | Purpose |
| ------ | ---- | ------- |
| D-C1 | `docs/implementation-cycles/IPP-E02S16T06-github-security-code-quality-health-perpetual-fr112.md` | Canonical IPP (migrated from E08) |

### 5.3 Documentation gaps and explicit non-changes

| Gap / topic | Resolution |
| ----------- | ---------- |
| Perpetual security-quality playbook | NONE — this IPP + T06 task doc |
| New ADR | NONE — EXEMPT §2.5 |
| Actions CI triage | NONE — T15 owns; cross-lane cite only |
| T12–T14 IPP content | NONE — coordination matrix links only |

---

## 6. Documentation housing

| Doc ID | Canonical path | Publication status | Lifecycle | Inbound links |
| ------ | -------------- | ------------------ | --------- | ------------- |
| D-C1 | `docs/implementation-cycles/IPP-E02S16T06-github-security-code-quality-health-perpetual-fr112.md` | NOT_APPLICABLE | evergreen | T16 Input + References; kboard —IPP— |
| D-U1 | T06 task doc path above | NOT_APPLICABLE | evergreen | FR-112 |
| D-U2–D-U5 | Kanban paths above | NOT_APPLICABLE | evergreen | RW Step 7 |

---

## 7. Success / verification criteria

- [x] IPP Sections 1–7 complete with §2.5 ADR EXEMPT
- [x] Baseline manifest on `main` in T06 task doc (TC1–TC3)
- [x] Actions cross-lane snapshot documented (TC4)
- [x] Coordination matrix vs T12–T14 (TC2)
- [x] AC4 `[x]` with `RW E02:S16:T06 --art` version anchor (**v0.8.3.16+1**)
- [x] IPP bidirectionally linked from task doc + kboard
- [x] FR-112 F2 updated when AC4 satisfied
- [x] Task remains IN PROGRESS (perpetual); not marked COMPLETE
- [x] Wave 1 re-scan manifest @ `f6aa4dca` in T06 task doc (TC7–TC8)
- [x] Coordination matrix reflects reliability **Fair** + **28** open (TC8)
- [x] T16 activity **deferred** until T12–T14 sign-off documented (RF9)
- [x] Wave 2a manifest @ post-T15 `main` (TC9–TC10); `RW E02:S16:T06 --art` (**v0.8.3.16+2**)
- [x] Wave 2b themed remediation + CQG/pytest (TC11–TC13); `RW E02:S16:T06 --art` (**v0.8.3.16+3**)
- [x] Operator dashboard verify (TC14) — closed Wave 3a @ **3** M + **8** R
- [x] Wave 3a manifest @ post–Wave 2b `main` (TC15–TC16); shipped **v0.8.3.16+4**
- [x] Wave 3b reliability-first remediation (TC17–TC18); shipped **v0.8.3.16+5** (operator dashboard re-verify pending)
- [ ] Wave 4a manifest @ `main` `38d2454…` with **~10** maintainability (TC19); shipped **v0.8.3.16+10**
- [ ] Waves 3c/3d/3e operator verifies closed in manifest (RF25)
- [ ] Wave 4b maintainability burn-down + pytest/CQG/greenfield (TC20–TC22); shipped **v0.8.3.16+11**
- [ ] Operator dashboard TC24 verify (maintainability **~10 → 0** or documented residual)

---

## 8. Rolling backlog (Wave 2+)

**Resume trigger:** T12/T13/T14 COMPLETE; T12 **Good** @ `ed379ab`; RF9 lifted 2026-06-07.

**Prerequisite:** Merge **T15 Wave 3** (`v0.8.3.15+4`) to `main`; Tests + Greenfield install green on [Actions](https://github.com/RMS-Ltd/ai-dev-kit/actions).

### Wave 2a — Manifest-only (docs RW)

| Step | Action |
| ---- | ------ |
| 1 | Confirm T16 **IN PROGRESS**; update `Last updated` |
| 2 | Capture `main` SHA + UTC |
| 3 | Record manifest from GH UI (code scanning, standard bands + rule breakdown, AI panel) |
| 4 | Update coordination matrix (T15 CI, T12 Good, CQG T17) |
| 5 | `RW E02:S16:T06 --art` — BUILD +1 on perpetual task |
| 6 | Reconcile T16 **IN PROGRESS**; AC Wave 2a |

### Wave 2b — First remediation theme (separate RW)

**Theme priority (pick one after 2a manifest):**

1. AI panel lag refresh (T14 lag-accepted dismissals)
2. `greenfield-install/` mirror residuals
3. Autofix-safe standard rules (`py/unused-import`, etc.)
4. Reliability regression from **Good** only

| Step | Action |
| ---- | ------ |
| 7 | Select theme from 2a manifest |
| 8 | Triage: fix / dismiss / defer-to-BR |
| 9 | Implement; `sync_greenfield_install.py` when implicated |
| 10 | TC11–TC13 locally |
| 11 | `RW E02:S16:T06 --art` |
| 12 | Operator dashboard verify (TC14) |

**RW rule:** **`RW E02:S16:T06 --art` only**; no `--doc-policy-zero` (BR-097).

### Wave 3a — Post–Wave 2b manifest (docs RW)

| Step | Action |
| ---- | ------ |
| 13 | Confirm T16 **IN PROGRESS**; capture `main` @ `f7d8b155` + UTC |
| 14 | Record manifest: **3** maintainability + **8** reliability + rule breakdown from [Code Quality](https://github.com/RMS-Ltd/ai-dev-kit/security/quality) |
| 15 | Close **TC14**; delta vs Wave 2a/2b; Wave 2b verify note |
| 16 | `RW E02:S16:T06 --art` — BUILD +1 |
| 17 | Reconcile T16 **IN PROGRESS**; AC8 Wave 3a |

### Wave 3b — Reliability-first remediation (code RW)

| Step | Action |
| ---- | ------ |
| 18 | Triage 3a rule table |
| 19 | Fix **8** reliability (`py/empty-except`, `py/tarslip` in installer scripts + mirror) |
| 20 | Fix **3** maintainability (`py/ineffectual-statement`, `py/unused-local-variable`) |
| 21 | TC17–TC18; `sync_greenfield_install.py` |
| 22 | `RW E02:S16:T06 --art` |
| 23 | Operator post-merge dashboard verify |

### Wave 3e — Autofix PR pytest triage (2026-06-08)

| Step | Action |
| ---- | ------ |
| 24 | Triage [PR #43](https://github.com/RMS-Ltd/ai-dev-kit/pull/43) (revert bad `VERSION_STRING` autofix) and [PR #44](https://github.com/RMS-Ltd/ai-dev-kit/pull/44) (fix RW-V03 test) |
| 25 | Push fixes to autofix branches; verify pytest CI green |
| 26 | Merge #43 then #44 to `main`; reconcile `dev` |
| 27 | `RW E02:S16:T06 --art` — BUILD +9 |
| 28 | Operator dismiss #43 AI finding in Security UI |

### Wave 4a — Post–Wave 3e manifest (docs RW) — 2026-06-10

| Step | Action |
| ---- | ------ |
| 29 | Confirm T06 **IN PROGRESS**; capture `main` @ `38d24549445f4ed77b0d099f1aa3b927d5c61f19` + UTC |
| 30 | Record manifest: **~10** maintainability + reliability count/score + rule breakdown from [Code Quality](https://github.com/RMS-Ltd/ai-dev-kit/security/quality) |
| 31 | Close pending operator notes for Waves **3c/3d/3e**; delta vs Wave 3 post-3b |
| 32 | `RW E02:S16:T06 --art` — BUILD +10 (docs-only manifest) |
| 33 | Reconcile T06 **IN PROGRESS**; AC13 Wave 4a |

### Wave 4b — Maintainability remediation (code RW)

**Theme:** Autofix-safe maintainability (`py/unused-import`, import hygiene, `py/unused-local-variable`) — E02:S17 `release_metadata/` / `release_state/` landing + validation test residuals.

| Step | Action |
| ---- | ------ |
| 34 | Triage Wave 4a rule table; map rules → ruff remediation per [IPP-E08S03T12](IPP-E08S03T12-code-quality-maintainability-backlog-br099.md) |
| 35 | **Chunk A:** `ruff check --fix --select F401,I001` on implicated `packages/frameworks/` paths |
| 36 | **Chunk B:** Manual `F841` (`localisation_config.py`; prefix `_` or remove) |
| 37 | `python scripts/sync_greenfield_install.py` + `--check` |
| 38 | TC20–TC23 locally |
| 39 | `RW E02:S16:T06 --art` — BUILD +11 |
| 40 | Operator TC24 dashboard verify; post-remediation manifest in task doc |

**RW rule:** **`RW E02:S16:T06 --art` only**; no `--doc-policy-zero` (BR-097).

---

## References

- [FR-112](../kanban/fr-br/FR-112-perpetual-github-ci-and-security-health-lanes.md)
- [T06 task doc](../kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T06-github-security-code-quality-health-perpetual.md)
- [T05 task doc](../kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T05-github-actions-ci-health-perpetual.md)
- [IPP-E08S03T12](IPP-E08S03T12-code-quality-maintainability-backlog-br099.md)
- [IPP-E08S03T13](IPP-E08S03T13-code-quality-reliability-backlog-br100.md)
- [IPP-E08S03T14](IPP-E08S03T14-code-quality-ai-suggestions-backlog-br101.md)
- [code-quality-monitoring-processes.md](../architecture/standards-and-adrs/code-quality-monitoring-processes.md)
- [ipw-adr-necessity-checklist.md](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md)
- [BR-097](../kanban/fr-br/BR-097-rw-agent-reuses-tagged-build-and-force-moves-release-tags.md)
- [dev-kit-versioning-policy.md](../governance/standards/dev-kit-versioning-policy.md)
