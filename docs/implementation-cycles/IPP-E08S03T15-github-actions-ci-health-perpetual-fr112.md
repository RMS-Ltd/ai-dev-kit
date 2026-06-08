---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E08:S03:T15 — Planning: Spec, Tests, Implementation Plan (IPW)

**Host Task:** [`T15-github-actions-ci-health-perpetual-fr112.md`](../project-management/kanban/epics/epic-08/story-03-automation-scripts/T15-github-actions-ci-health-perpetual-fr112.md) **(E08:S03:T15)**  
**Planning for:** [FR-112](../project-management/kanban/fr-br/FR-112-perpetual-github-ci-and-security-health-lanes.md)  
**Status:** Approved (Wave 3 implemented @ **v0.8.3.15+4** — Step 9.7 CI parity gate; AC5/AC6 open pending GH verify)

> **Revision (2026-06-08):** Operator directive — RF7–RF9 / RNF5–RNF6: **Failed job usage** (~501 min) KPI, **no-red-ship** on `dev`/`main`, CQG≠CI boundary. See T15 §Operator requirements (OR-T15-*).

> **IPW:** Perpetual lane for [GitHub Actions](https://github.com/RMS-Ltd/ai-dev-kit/actions) workflow health. **Does not** own [code scanning](https://github.com/RMS-Ltd/ai-dev-kit/security/code-scanning) / [Code Quality](https://github.com/RMS-Ltd/ai-dev-kit/security/quality) (→ **E08:S03:T16**) or finite standard-finding burn-down (**E08:S03:T12–T14**).

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RF1 | Standing perpetual lane owns [Actions](https://github.com/RMS-Ltd/ai-dev-kit/actions) red-build triage on `main` / `dev` | T15 scope, FR-112 F1 |
| RF2 | **Wave 2 (immediate):** Restore green **Docusaurus site build** without breaking `test_install_error_docs_sync` | Current red CI on `main` |
| RF3 | Record post-fix workflow baseline in T15 task doc (SHA + UTC + per-workflow conclusion) | T15 AC4 pattern |
| RF4 | Perpetual RW playbook: `RW E08:S03:T15 --art`, BUILD +1, one concern per RW when practical | T15 RW attribution |
| RF5 | Cross-lane handoff: Code scanning / Code Quality → **E08:S03:T16**; Dependabot → **E08:S03:T06** | T15 scope boundary |
| RF6 | Novel single-failure BRs still get dedicated E:S:T when scope exceeds routine hygiene | T15 handoff table |
| RF7 | **Failed job usage** KPI: record [Performance metrics](https://github.com/RMS-Ltd/ai-dev-kit/actions/metrics/performance) (failed minutes + job failure rate) each hygiene pass; burn down toward near-zero on `dev`/`main` | Operator directive 2026-06-08, OR-T15-1 |
| RF8 | **No red ship:** do not merge/push to `dev`/`main` while required Actions workflows fail on GH; post-push verification mandatory | OR-T15-2, OR-T15-4 |
| RF9 | **CQG boundary:** T17 local CodeQL gate does not replace Actions workflow verification (Tests, Docusaurus, Greenfield, etc.) | OR-T15-3, T17 scope |
| RF10 | **RW Step 9.7:** `validate_actions_ci_parity.py --strict` blocking before commit; `--strict --all` before push | OR-T15-7, UXR-024 R7 |
| RF11 | **RW never pushes by default;** local-complete = push-ready via Step 9.7 | OR-T15-6, UXR-024 |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RNF1 | Changelog: **"Change implemented"** until operator verifies Actions green post-merge | RW rules |
| RNF2 | Post-ship waves: **`RW E08:S03:T15 --art` only**; no `--doc-policy-zero` (BR-097) | BR-097 |
| RNF3 | Local repro before RW: `pytest tests/` + `cd portal && npm run build` | T15 hygiene |
| RNF4 | Perpetual BUILD increments; high BUILD expected on perpetual lane | dev-kit-versioning-policy |
| RNF5 | Monthly Performance metrics reset does not close T15; sustained green required workflows is the success criterion | OR-T15-5 |
| RNF6 | ~501 min current-month Failed job usage (2026-06-08) is unacceptable baseline until resolved | Operator directive |

### 1.3 Invariants and boundaries

- **Invariants:** Python 3.11+ (FR-104); no `git tag -f` on release tags (BR-097); Docusaurus corpus uses MDX (`onBrokenMarkdownLinks: 'throw'`)
- **In scope (Wave 2):** MDX-safe ADK appendix markers; troubleshooting guide sync; greenfield mirror; regression test; T15 triage correction
- **In scope (Wave 3+):** Routine Actions hygiene per RF4
- **Out of scope:** Code scanning / Code Quality dashboards → **T16**; BR-099/100/101 waves → **T12–T14**; Dependabot → **T06**

---

## 2. Specification

### 2.1 Goal

Establish **E08:S03:T15** as the operational perpetual lane for GitHub Actions CI health, and close **Wave 2** by resolving the MDX/HTML-comment conflict in the ADK error-code appendix so **Tests**, **Docusaurus site build**, and **Greenfield install** workflows are green on `main`/`dev` while preserving FR-111 drift detection.

### 2.2 Specification mapping from ascertained requirements

- RF1 → T15 task doc scope + perpetual RW attribution
- RF2 → Migrate `<!-- ADK-ERROR-CODES:* -->` to `{/* ADK-ERROR-CODES:* */}` in generator + guide; add MDX safety test
- RF3 → Post-merge Actions baseline table in T15 task doc
- RF4 → §4 Wave 3+ steps; one theme per `RW E08:S03:T15 --art`
- RF5 → Scope boundary table in T15 task doc (unchanged)
- RF6 → Handoff table for discrete BR pattern

### 2.3 Constraints

- Primary SoT: [GitHub Actions](https://github.com/RMS-Ltd/ai-dev-kit/actions)
- Do **not** remove appendix boundary markers — breaks `test_install_error_docs_sync`
- Do **not** exclude troubleshooting guide from Docusaurus — in-corpus anchors required
- Post-ship verification: **`RW E08:S03:T15 --art`** only (BUILD +1)

### 2.4 Status transition intent (mandatory for IPW-derived implementation tasks)

- **Current task status:** IN PROGRESS
- **Transition trigger to IN PROGRESS:** Already satisfied at FR-112 intake; reaffirm at Wave 2 step 1
- **Transition trigger to COMPLETE:** Not applicable for perpetual lane — task remains **IN PROGRESS** after waves
- **Atomic propagation requirement:** Task doc status and kboard row status update in same change set/session
- **Owner:** Implementation execution step

### 2.5 ADR necessity decision (mandatory — IPW Phase 5.0)

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | N | FR-112 prescribes two-lane model; marker syntax is implementation detail |
| T2 | Reversibility | N | Marker swap revertible in one commit |
| T3 | Blast radius | N | Confined to generator, one user doc, greenfield mirror, one test |
| T4 | Precedent | N | Extends FR-111 / IPP-E06S09T24 pattern |
| T5 | Constraint trade-off | N | No security/versioning contract change |
| T6 | Governance contract | N | No RW/IPW validator gate changes |
| T7 | Supersedes | N | No ADR contradiction |

**Outcome:** `EXEMPT`

| ID | Exemption (only if all T = N) | Pass? | Evidence |
| -- | --------------------------- | ----- | -------- |
| E1 | Single locus | Pass | Generator + guide + test |
| E2 | No new options | Pass | MDX JSX comments prescribed by Docusaurus error message |
| E3 | Reversible in one task | Pass | Single RW wave |
| E4 | Spec elsewhere | Pass | FR-111, FR-112, portal MDX triage blog |
| E5 | Documented NONE | Pass | §5.3 |

---

## 3. Test design

| ID | Behavior / layer | Expected check | Covers | Wave |
| -- | ---------------- | -------------- | ------ | ---- |
| TC1 | Generator vs guide body | `extract_marked_section(guide) == render_markdown()` | RF2, FR-111 | 2 |
| TC2 | MDX marker safety | No `<!-- ADK-ERROR-CODES` in troubleshooting guide | RF2 | 2 |
| TC3 | Portal production build | `npm run build` exit 0 | RF2 | 2 |
| TC4 | Greenfield drift | `sync_greenfield_install.py --check` exit 0 | RF2 | 2 |
| TC5 | Full pytest suite | `pytest tests/` green | RF1 | 2 |
| TC6 | Actions baseline | T15 task doc table with post-merge SHA/conclusions | RF3 | 2 post-RW |

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY] Confirm task `E08:S03:T15` status `IN PROGRESS`** in task doc. Update `Last updated`. | Task doc status |
| 2 | Migrate ADK markers to MDX-safe JSX comments in `generate_install_error_docs.py` | RF2 |
| 3 | Update troubleshooting guide marked block (marker lines + synced body) | RF2 |
| 4 | Add `test_adk_markers_are_mdx_safe` in `test_install_error_docs_sync.py` | TC2 |
| 5 | Run `sync_greenfield_install.py` for greenfield mirror | TC4 |
| 6 | Local verify: TC1–TC5 (`pytest` + `portal npm run build`) | RNF3 |
| 7 | Correct T15 triage table (Docusaurus root cause = MDX/HTML marker conflict) | RF3 |
| 8 | `RW E08:S03:T15 --art` — changelog, RW Step 7, commit, tag | RF4 |
| 9 | Operator verifies TC6 on [Actions](https://github.com/RMS-Ltd/ai-dev-kit/actions); update baseline table | RF3 |
| **10** | **[MANDATORY] Reconcile task status:** perpetual lane stays **IN PROGRESS**; document Wave 2 version anchor | T15 perpetual |

**Wave 3+ (routine hygiene):**

| Step | Action |
| ---- | ------ |
| 11 | Filter failing workflows on `main`/`dev` |
| 12 | Triage root cause; one concern per RW when practical |
| 13 | Implement + TC5; mirror greenfield when implicated |
| 14 | `RW E08:S03:T15 --art` per wave |
| 15 | Status reconciliation — remain IN PROGRESS |

**RW verification rule (BR-097):** Post-ship waves prescribe **`RW E08:S03:T15 --art`** only. No `--doc-policy-zero`.

### 4.1 Files to create or modify (Wave 2)

- **CREATE:** this IPP
- **UPDATE:** `packages/frameworks/workflow-mgt/scripts/generate_install_error_docs.py` — marker constants + docstring
- **UPDATE:** `docs/documentation/user-docs/framework-dependency-troubleshooting-guide.md` — marker lines
- **UPDATE:** `tests/workflow_mgt/test_install_error_docs_sync.py` — TC2 test
- **UPDATE:** `greenfield-install/` via sync script
- **UPDATE:** T15 task doc, FR-112, story checklist, kboard (RW Step 7)

### 4.2 Dependency order

1. Generator markers → guide markers → test → greenfield sync → local verify → RW → Actions verify

### 4.3 Documentation implementation steps

1. IPP + task doc wiring before code changes
2. Triage table correction before RW
3. RW Step 7 four-surface sync

---

## 5. Documentation deliverables

### 5.1 Existing documents to update

| Doc ID | Path | Scope of change | Tied to |
| ------ | ---- | --------------- | ------- |
| D-U1 | `docs/project-management/kanban/epics/epic-08/story-03-automation-scripts/T15-github-actions-ci-health-perpetual-fr112.md` | IPP link, corrected triage, post-verify baseline | steps 7, 9 |
| D-U2 | `docs/project-management/kanban/fr-br/FR-112-perpetual-github-ci-and-security-health-lanes.md` | T15 IPP + Wave 2 note | step 8 |
| D-U3 | `docs/project-management/kanban/epics/epic-08/story-03-automation-scripts.md` | Checklist IPP link | step 8 |
| D-U4 | `docs/project-management/kanban/kboard.md` | O-band IPP link + version stamp | step 8 |
| D-U5 | `packages/frameworks/workflow-mgt/scripts/generate_install_error_docs.py` | MDX-safe marker docstring | step 2 |

### 5.2 New documents to create

| Doc ID | Path | Purpose |
| ------ | ---- | ------- |
| D-C1 | `docs/implementation-cycles/IPP-E08S03T15-github-actions-ci-health-perpetual-fr112.md` | This IPP |

### 5.3 Documentation gaps and explicit non-changes

| Gap / topic | Resolution |
| ----------- | ---------- |
| Perpetual Actions CI playbook | NONE — this IPP + T15 task doc |
| New ADR | NONE — EXEMPT §2.5 |
| FR-111 / IPP-E06S09T24 | NONE — MDX constraint noted in generator docstring only |
| Code Quality / security hygiene | NONE — T16 owns |

---

## 6. Documentation housing

| Doc ID | Canonical path | Publication status | Lifecycle | Inbound links |
| ------ | -------------- | ------------------ | --------- | ------------- |
| D-C1 | `docs/implementation-cycles/IPP-E08S03T15-github-actions-ci-health-perpetual-fr112.md` | NOT_APPLICABLE | evergreen | T15 Input + References; kboard |
| D-U1 | T15 task doc path above | NOT_APPLICABLE | evergreen | FR-112 |
| D-U2–D-U4 | Kanban paths above | NOT_APPLICABLE | evergreen | RW Step 7 |
| D-U5 | Generator script path | NOT_APPLICABLE | evergreen | FR-111 |

---

## 7. Success / verification criteria

- [x] IPP Sections 1–7 complete with §2.5 ADR EXEMPT
- [x] MDX-safe markers in generator + guide (TC1–TC2)
- [x] `pytest tests/workflow_mgt/test_install_error_docs_sync.py` green (TC1–TC2)
- [x] `portal npm run build` green (TC3)
- [x] `sync_greenfield_install.py --check` green (TC4)
- [x] T15 triage table corrected for Docusaurus root cause
- [x] `RW E08:S03:T15 --art` version anchor **v0.8.3.15+3** recorded
- [x] IPP bidirectionally linked from task doc + kboard
- [x] Task remains IN PROGRESS (perpetual); not marked COMPLETE
- [ ] Post-push Actions baseline updated (TC6 — operator verify after batch push)

---

## References

- [FR-112](../project-management/kanban/fr-br/FR-112-perpetual-github-ci-and-security-health-lanes.md)
- [T15 task doc](../project-management/kanban/epics/epic-08/story-03-automation-scripts/T15-github-actions-ci-health-perpetual-fr112.md)
- [T16 task doc](../project-management/kanban/epics/epic-08/story-03-automation-scripts/T16-github-security-code-quality-health-perpetual-fr112.md)
- [FR-111](../project-management/kanban/fr-br/FR-111-acquisition-layer-adk-error-codes-and-install-error-doc-hygiene.md)
- [IPP-E06S09T24](IPP-E06S09T24-acquisition-layer-adk-error-codes-fr111.md)
- [Getting Docusaurus working](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/portal/blog/2026-06-05-getting-docusaurus-working/index.md)
- [ipw-adr-necessity-checklist.md](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md)
- [BR-097](../project-management/kanban/fr-br/BR-097-rw-agent-reuses-tagged-build-and-force-moves-release-tags.md)
- [GitHub Actions](https://github.com/RMS-Ltd/ai-dev-kit/actions)
