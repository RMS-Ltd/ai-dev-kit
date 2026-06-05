---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T23:45:00Z
revised_at: 2026-06-05T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E08:S03:T14 — Planning: Spec, Tests, Implementation Plan (IPW)

**Host Task:** [`T14-code-quality-ai-suggestions-backlog-br101.md`](../project-management/kanban/epics/epic-08/story-03-automation-scripts/T14-code-quality-ai-suggestions-backlog-br101.md) **(E08:S03:T14)**  
**Planning for:** [BR-101](../project-management/kanban/fr-br/BR-101-code-quality-ai-suggestions-backlog.md)  
**Status:** Revised — wave-1 complete; FBU documented @ v0.8.3.14+2; wave-2 GitHub dismiss + 0-open verification pending

> **IPW:** Produced for E08:S03:T14. Triage and resolve **14** GitHub Code Quality **AI-powered** suggestions; complements maintainability task [E08:S03:T12](IPP-E08S03T12-code-quality-maintainability-backlog-br099.md) / [BR-099](../project-management/kanban/fr-br/BR-099-code-quality-maintainability-backlog.md) and reliability task [E08:S03:T13](IPP-E08S03T13-code-quality-reliability-backlog-br100.md) / [BR-100](../project-management/kanban/fr-br/BR-100-code-quality-reliability-backlog.md) with explicit deduplication.
>
> **Revision (2026-06-05):** Wave-1 shipped @ v0.8.3.14+0–+1. FBU re-scan @ +2 @ `cadb0c3` (**14** open). Operator GH UI re-scan: **17** open across **5** file groups — use **AID** tokens (not `#` numbers) in [ai-findings panel](https://github.com/RMS-Ltd/ai-dev-kit/security/quality/ai-findings). Pending: dismiss **AI-SYNC-GFI** / R10 (`rglob`); triage **AI-VENDOR-TREE** (4 new). **AI suggestions only** — not Standard findings (T12/T13); not Code Scanning security (T08–T11). Post-closure handoff to [E08:S03:T16](../project-management/kanban/epics/epic-08/story-03-automation-scripts/T16-github-security-code-quality-health-perpetual-fr112.md) (FR-112 perpetual lane).

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Wave | Status | Source (FR/BR/Task) |
| -- | ----------- | ---- | ------ | ------------------- |
| RF1 | Capture **inventory table**: all 14 AI suggestions (file, summary, suggested action, capture date, `main` SHA) in task doc | 1 | **SATISFIED** — 14-row table @ `5fcf102` | T14 deliverable #1, BR-101 AC1 |
| RF2 | **Triage sheet:** each suggestion marked **apply** / **dismiss** (with reason) / **defer-to-BR-099\|100** (duplicate) | 1 | **SATISFIED** — 12 apply, 2 dismiss, 0 defer | T14 AC1, BR-101 AC2 |
| RF3 | **Apply** valid suggestions; add tests only where behaviour changes | 1 | **SATISFIED** — 12 applied; targeted pytest 7 passed | T14 AC2, BR-101 AC3 |
| RF4 | **Dashboard clear:** AI suggestions panel shows **0 open** (applied or GitHub-dismissed) | 2 | **OPEN** — **17** open (GH UI 2026-06-05); was **14** @ `cadb0c3` | T14 AC3, BR-101 AC4 |
| RF5 | Keep CI green: `python3.11 -m pytest tests/` + workflow-scripts gate | 1 | **SATISFIED** — local pytest green | T14 AC2, BR-101 AC3 |
| RF6 | Close kanban loop: BR-101 resolution + **RW E08:S03:T14 --art** on completion | 2 | **PARTIAL** — interim RW @ +0, +1, +2; final closure open | T14 AC4, BR-101 AC5 |
| RF7 | **Dedupe** against E08:S03:T12 / E08:S03:T13 triage sheets before applying fixes | 1 | **SATISFIED** — 0 deferrals to BR-099/100 | T14 Input |
| RF8 | Operator GitHub dismiss for **AI-SYNC-GFI** / R10 (`rglob`) with rationale in task doc | 2 | **OPEN** — doc rationale done; GH UI pending | BR-101 AC4, wave-2 |
| RF9 | Post-dismiss dashboard re-scan manifest (open count + AID file groups @ current `main` SHA) | 2 | **OPEN** | T14 deliverable, wave-2 |
| RF10 | Document GitHub panel lag if **AI-GFI-CONTAM**, **AI-SEMVER**, **AI-PORTAL-BR068** persist after dismiss (expected refresh window) | 2 | **OPEN** | RF4, wave-2 |
| RF13 | Triage **AI-VENDOR-TREE** (4 new findings on `tests/workflow_mgt/test_verify_vendor_tree.py`) — apply / dismiss / defer | 2 | **OPEN** — post wave-1 intake | T14 deliverable, wave-2 |
| RF11 | BR-101 resolution narrative update (use "Fixed" only after user confirms 0-open) | 2 | **OPEN** | RF6, wave-2 |
| RF12 | Closure **`RW E08:S03:T14 --art`** (BUILD +1); status reconciliation | 2 | **OPEN** | RF6, BR-097 |

**Wave-1 release evidence:** v0.8.3.14+0 (intake), +1 (wave-1 remediation), +2 (FBU re-scan manifest). See task doc inventory, post-triage manifest, and dashboard re-scan tables.

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RNF1 | **Triage-before-fix** — no bulk edits without per-suggestion disposition | BR-101 root cause |
| RNF2 | Changes must be **revertible** in one session; mirror `packages/` → `greenfield-install/` only when suggestion files exist in both | Small blast radius |
| RNF3 | Changelog: **"Change implemented"** / **"Attempted fix"** until dashboard verified | RW rules |
| RNF4 | Post-ship verification uses **`RW E08:S03:T14 --art`** only (BUILD +1); no `--doc-policy-zero` | BR-097 |
| RNF5 | Do **not** re-remediate maintainability/reliability CodeQL rules owned by T12/T13 — defer duplicates | T14 Input, T12/T13 RNF4 |
| RNF6 | **AI suggestions only** — [ai-findings panel](https://github.com/RMS-Ltd/ai-dev-kit/security/quality/ai-findings) (UI only); not `code-scanning/alerts` API; not Standard findings (T12/T13) | Operator scope (T12–T14 lane) |
| RNF7 | **GH UI primary key = file path** — panel has no `#` numbers; operator docs use **AID** tokens; legacy **R** row IDs map wave-1 capture only | Task doc GH UI index |

### 1.3 Invariants and boundaries

- **Invariants:** Python 3.11+ per FR-104; no `git tag -f` / force-push on release tags (BR-097); post-ship verification uses `RW E08:S03:T14 --art` only
- **In scope (wave 1 — done):** 14 AI suggestions triage + code fixes on recently changed files
- **In scope (wave 2 — planned):** GitHub dismiss **AI-SYNC-GFI** / R10; triage **AI-VENDOR-TREE**; dashboard 0-open verification; closure RW + kanban reconciliation
- **Out of scope:** BR-099 maintainability burn-down (T12); BR-100 reliability burn-down (T13); CodeQL **security** sidebar (T08–T11); [E08:S03:T16](IPP-E08S03T16-github-security-code-quality-health-perpetual-fr112.md) perpetual monitoring (separate scope); new CI quality gates; automating AI suggestion ingestion

---

## 2. Specification

### 2.1 Goal

Two-phase **AI-powered Code Quality suggestions** triage per [BR-101](../project-management/kanban/fr-br/BR-101-code-quality-ai-suggestions-backlog.md):

- **Phase A (wave 1 — complete):** Inventory, dedupe, triage, and apply 12/14 suggestions; document 2 dismissals; CI green.
- **Phase B (wave 2 — planned):** GitHub dismiss **AI-SYNC-GFI** / R10; triage **AI-VENDOR-TREE**; verify AI panel **0 open**; closure RW and kanban reconciliation. On COMPLETE, ongoing AI suggestion monitoring transfers to **E08:S03:T16** per FR-112.

### 2.2 Specification mapping from ascertained requirements

- RF1 → 14-row inventory table in task doc (satisfied)
- RF2, RF7 → per-suggestion disposition table with dedupe pass (satisfied — 0 deferrals)
- RF3 → targeted fixes on **apply** rows; mirror `greenfield-install/` when implicated (satisfied)
- RF4 → post-dismiss manifest + AI panel verification (open — 14 still listed)
- RF5 → existing `pytest tests/` and workflow-scripts gate (satisfied wave 1; optional re-run wave 2)
- RF6 → BR-101 update + RW Step 7 four-surface reconciliation (interim releases done; final closure open)
- RF8 → GitHub dismiss **AI-SYNC-GFI** / R10 with rationale mirrored in task doc
- RF13 → triage **AI-VENDOR-TREE** (4 new findings)
- RF9 → post-dismiss re-scan manifest in task doc
- RF10 → lag documentation if applied rows persist after dismiss
- RF11 → BR-101 resolution narrative (not "Fixed" until user confirms 0-open)
- RF12 → closure `RW E08:S03:T14 --art` + status reconciliation

### 2.3 Constraints

- Python **3.11+** per FR-104
- Primary capture source: [GitHub Security & quality → AI findings panel](https://github.com/RMS-Ltd/ai-dev-kit/security/quality/ai-findings) — not `code-scanning/alerts` API
- Triage dispositions:

| Disposition | Action |
| ----------- | ------ |
| **apply** | Implement suggested fix in code; record in task doc |
| **dismiss** | GitHub-dismiss with rationale mirrored in task doc |
| **defer-to-BR-099** | Duplicate of maintainability finding — owned by T12 |
| **defer-to-BR-100** | Duplicate of reliability finding — owned by T13 |

- **GH UI file-group index (operator primary — 2026-06-05):**

| AID | Select file (GH UI) | Open | Wave-2 action |
| --- | ------------------- | ---- | ------------- |
| **AI-GFI-CONTAM** | `greenfield-install/packages/frameworks/kanban/scripts/test_contamination_detector.py` | 2 | Refresh lag / dismiss as fixed |
| **AI-SEMVER** | `packages/frameworks/workflow-mgt/scripts/version/semver_converter.py` | 5 | Refresh lag / dismiss as fixed |
| **AI-SYNC-GFI** | `scripts/sync_greenfield_install.py` | 3 | **Dismiss R10** (`rglob`) |
| **AI-PORTAL-BR068** | `tests/test_portal_br068_monorepo_links.py` | 3 | Refresh lag / dismiss as fixed |
| **AI-VENDOR-TREE** | `tests/workflow_mgt/test_verify_vendor_tree.py` | 4 | **Triage pending** (RF13) |

- **Wave-1 row inventory (legacy R IDs @ `5fcf102` — map to AID):**

| R | AID | File | AI summary (paraphrased) | Disposition |
| - | --- | ---- | -------------------------- | ----------- |
| R01 | *(cleared)* | `packages/frameworks/kanban/scripts/test_contamination_detector.py` | Relative import for `scan_kanban_tree` | **apply** |
| R02 | AI-GFI-CONTAM | `greenfield-install/.../test_contamination_detector.py` | Same as R01 | **apply** |
| R03–R07 | AI-SEMVER | `packages/.../semver_converter.py` | Five semver_converter improvements | **apply** |
| R08–R09 | AI-SYNC-GFI | `scripts/sync_greenfield_install.py` | ls-files warn; rmtree guard | **apply** |
| R10 | AI-SYNC-GFI | same | `rglob('*')` → `rglob('**/*')` | **dismiss** |
| R11 | *(cleared)* | `src/ai_dev_kit/version.py` | Dataclass refactor | **dismiss** |
| R12–R14 | AI-PORTAL-BR068 | `tests/test_portal_br068_monorepo_links.py` | https prefix; rename; assertion msg | **apply** |

- Post-ship verification / FBU waves: **`RW E08:S03:T14 --art`** only (BUILD +1); no `--doc-policy-zero`

### 2.4 Status transition intent (mandatory for IPW-derived implementation tasks)

- **Current task status:** **WAITING** (since FBU re-scan @ v0.8.3.14+2)
- **Transition trigger to IN PROGRESS:** First non-planning implementation change lands — **DONE** @ +1; do **not** re-execute `TODO → IN PROGRESS`
- **Transition trigger to COMPLETE:** RF4 satisfied (0 open) + RF6/RF12 closure RW; forensic `✅ COMPLETE (v{version})` on RW
- **WAITING persists** until wave-2 dismiss + verify complete; step 18 reconciles to COMPLETE or WAITING (not forced COMPLETE)
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
| E1 | Single locus | Pass | §4.2 file list (suggestion-target files + kanban/docs) |
| E2 | No new options | Pass | Implements BR-101 + task AC only |
| E3 | Reversible in one task | Pass | Standard revert per suggestion |
| E4 | Spec elsewhere | Pass | BR-101 + this IPP + task AC |
| E5 | Documented NONE | Pass | §5.3 cites BR-101 and code-quality-monitoring-processes |

---

## 3. Test design

**Note:** Primary verification is CI + per-suggestion manifest evidence + dashboard check (same pattern as [IPP-E08S03T12](IPP-E08S03T12-code-quality-maintainability-backlog-br099.md)). `gh api repos/RMS-Ltd/ai-dev-kit/code-scanning/alerts?state=open` may return 0 for Code Quality / AI suggestion surfaces.

### 3.1 Wave 1 (satisfied)

| ID | Behavior / layer | Expected check | Status | Covers |
| -- | ---------------- | -------------- | ------ | ------ |
| T1 | Inventory evidence | Task doc table: 14 rows with file, summary, disposition, capture date | **PASS** | RF1 |
| T2 | Dedupe evidence | Rows deferred to BR-099/100 cite matching rule/file from T12/T13 | **PASS** — 0 deferrals | RF7 |
| T3 | Local regression | `python3.11 -m pytest tests/` → 0 failed, 0 errors | **PASS** — 7 targeted passed | RF5 |
| T4 | Workflow scripts gate | `workflow-scripts-pytest.yml` job green (or local equivalent) | **PASS** (local) | RF5 |
| T5 | Behaviour-change spots | Add/extend tests only for apply fixes that change control flow or API | **PASS** — contamination + portal | RF3 |
| T6 | Dashboard clear | AI suggestions panel **0 open** (note + date; screenshot optional) | **PARTIAL** — 17 open (GH UI) | RF4 |
| T7 | Dismiss rationale | Every non-applied row has dismiss/defer rationale in task doc + GitHub where applicable | **PASS** (doc); **AI-SYNC-GFI** GH dismiss pending | RF2 |

### 3.2 Wave 2 (planned)

| ID | Behavior / layer | Expected check | Covers |
| -- | ---------------- | -------------- | ------ |
| T8 | GitHub dismiss **AI-SYNC-GFI** / R10 recorded | Operator dismiss `rglob` suggestion on ai-findings panel | RF8 |
| T13 | **AI-VENDOR-TREE** triage | 4 findings classified apply / dismiss / defer in task doc | RF13 |
| T9 | Post-dismiss re-scan manifest | Open count + file list @ current `main` SHA in task doc | RF9 |
| T10 | Dashboard 0-open | AI panel **0 open** (or lag documented per RF10) | RF4, RF10 |
| T11 | Full regression (optional) | `python3.11 -m pytest tests/` → 0 failed, 0 errors | RF5 |
| T12 | BR-101 resolution + closure RW | Fix-attempt / resolution narrative + `RW E08:S03:T14 --art` | RF11, RF12 |

---

## 4. Implementation plan

### 4.0 Wave 1 ledger (DONE — do not re-execute)

| Step | Action | Status | Evidence |
| ---- | ------ | ------ | -------- |
| **1** | **[MANDATORY] Transition task `E08:S03:T14` status `TODO → IN PROGRESS`** | **DONE** | @ +1 |
| 2 | Export 14 AI suggestions; build inventory table in task doc | **DONE** | @ `5fcf102` |
| 3 | Dedupe pass against T12/T13 triage sheets | **DONE** | 0 deferrals |
| 4 | Complete triage disposition table (apply / dismiss / defer) | **DONE** | 12 apply, 2 dismiss |
| 5 | **Apply chunk:** implement **apply** rows + detector follow-on | **DONE** | v0.8.3.14+1 |
| 6 | **Dismiss chunk:** GitHub-dismiss **dismiss** rows | **PARTIAL** | R10 rationale in doc; **AI-SYNC-GFI** GH dismiss pending |
| 7 | Run T3 + T4 locally; add T5 tests where needed | **DONE** | 7 passed |
| 8 | Record **post-triage manifest** | **DONE** | task doc |
| 9 | Update BR-101 fix-attempt narrative | **DONE** | @ +1 |
| 10 | `RW E08:S03:T14 --art` | **DONE** | +0, +1 |
| 11 | FBU re-scan manifest | **DONE** | +2; **14** @ `cadb0c3`; operator GH UI now **17** |

### 4.1 Wave 2 steps (planned)

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| 13 | Operator: open **AI-SYNC-GFI** (`scripts/sync_greenfield_install.py`) on [ai-findings](https://github.com/RMS-Ltd/ai-dev-kit/security/quality/ai-findings) → dismiss **R10** (`rglob` — no pathlib benefit) | RF8 |
| 13b | Triage **AI-VENDOR-TREE** (`tests/workflow_mgt/test_verify_vendor_tree.py`, 4 findings) — apply / dismiss / defer; implement if apply | RF13 |
| 14 | Dashboard re-scan; record post-dismiss manifest in task doc (open count, **AID** file groups, SHA) | RF9 |
| 15 | If **AI-GFI-CONTAM**, **AI-SEMVER**, **AI-PORTAL-BR068** still listed: document GitHub refresh lag; re-check after 24–48h or next merge; dismiss as fixed if stale | RF10 |
| 16 | Update BR-101 resolution (not "Fixed" until user confirms 0-open) | RF11 |
| 17 | `RW E08:S03:T14 --art` — BUILD+1, changelog, RW Step 7 four-surface | RF12 |
| **18** | **[MANDATORY] Reconcile task `E08:S03:T14` status** to actual state: `COMPLETE` + `✅ COMPLETE (v{version})` if RF4 satisfied; `WAITING` if dismiss/verify pending; `BLOCKED` + reason if blocked. Update `Last updated`. | Task doc status |

**RW verification / FBU wave rule (BR-097):** Post-ship verification prescribes **`RW E08:S03:T14 --art`** only. Do **not** prescribe `--doc-policy-zero` for follow-on releases after a tagged BUILD.

**T16 handoff:** On COMPLETE, ongoing AI suggestion monitoring transfers to [E08:S03:T16](../project-management/kanban/epics/epic-08/story-03-automation-scripts/T16-github-security-code-quality-health-perpetual-fr112.md) per [FR-112](../project-management/kanban/fr-br/FR-112-perpetual-github-ci-and-security-health-lanes.md).

### 4.2 Files to create or modify

- **UPDATE (wave 1 — done):** `semver_converter.py`, `sync_greenfield_install.py`, `contamination_detector.py` + tests, `test_portal_br068_monorepo_links.py` (packages + `greenfield-install/` mirrors where applicable)
- **UPDATE (wave 2 — planned):** Kanban docs (task doc re-scan manifest, BR-101, story, kboard); **`tests/workflow_mgt/test_verify_vendor_tree.py`** only if **AI-VENDOR-TREE** triage yields apply rows

### 4.3 Dependency order

**Wave 1 (complete):** Inventory export → dedupe pass → triage disposition → apply chunk → dismiss chunk (doc) → pytest green → post-triage manifest → BR/kanban → RW → FBU re-scan

**Wave 2 (planned):** **AI-SYNC-GFI** R10 dismiss → **AI-VENDOR-TREE** triage → post-dismiss re-scan → lag documentation if needed → BR resolution → closure RW → status reconciliation (step 18)

### 4.4 Documentation implementation steps

1. Record post-dismiss re-scan manifest in task doc (step 14) before BR-101 resolution update
2. RW Step 7 updates story checklist, kboard, BR-101 in closure release (step 17)
3. On COMPLETE, note T16 handoff in task doc References (no new doc required)

---

## 5. Documentation deliverables

### 5.1 Existing documents to update

| Doc ID | Path | Scope of change | Tied to (RF/T/impl step) |
| ------ | ---- | --------------- | ------------------------ |
| D-U1 | `docs/project-management/kanban/epics/epic-08/story-03-automation-scripts/T14-code-quality-ai-suggestions-backlog-br101.md` | Inventory + triage + post-triage manifests (**done**); post-dismiss re-scan manifest (**open**) | RF1, RF2, RF4, RF9, steps 1/8/14/18 |
| D-U2 | `docs/project-management/kanban/fr-br/BR-101-code-quality-ai-suggestions-backlog.md` | Fix-attempt / resolution (interim **done**; final closure **open**) | RF6, RF11, steps 9/16 |
| D-U3 | `docs/project-management/kanban/epics/epic-08/story-03-automation-scripts.md` | Checklist on RW | steps 10/17 |
| D-U4 | `docs/project-management/kanban/kboard.md` | RW Step 7 row | steps 10/17 |

### 5.2 New documents to create

| Doc ID | Proposed path (draft) | Purpose | Tied to (RF/T/impl step) |
| ------ | --------------------- | ------- | ------------------------ |
| D-C1 | `docs/implementation-cycles/IPP-E08S03T14-code-quality-ai-suggestions-backlog-br101.md` | This planning package (revised wave-2) | IPW |

### 5.3 Documentation gaps and explicit non-changes

| Gap / topic | Resolution (CREATE row above, or NONE + reason) |
| ----------- | ----------------------------------------------- |
| AI suggestions triage methodology | NONE — BR-101 + this IPP; governed by [code-quality-monitoring-processes.md](../architecture/standards-and-adrs/code-quality-monitoring-processes.md) |
| New ADR for AI suggestion handling | NONE — EXEMPT per §2.5 |
| New CI workflow for AI suggestions | NONE — out of scope; dashboard verification manual at steps 11/14 |
| Dedicated manifest file outside task doc | NONE — AC requires manifest in task doc only |
| Perpetual AI suggestion monitoring | NONE — [IPP-E08S03T16](IPP-E08S03T16-github-security-code-quality-health-perpetual-fr112.md) owns post-closure lane per FR-112 |

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

### Wave 1 (complete)

- [x] 14-row inventory table in task doc (file, summary, capture date, SHA)
- [x] Triage sheet: all 14 suggestions classified apply / dismiss / defer
- [x] Dedupe evidence for rows deferred to BR-099/100 (0 deferrals)
- [x] Valid suggestions applied (12/14); dismissals recorded in task doc
- [ ] AI suggestions panel 0 open (17 open per GH UI 2026-06-05)
- [x] `pytest tests/` + workflow-scripts CI green (local)
- [x] Targeted tests added where behaviour changes (T5)
- [ ] BR-101 final closure RW (interim releases @ +0–+2 done)
- [x] IPP bidirectionally linked from task doc

### Wave 2 (planned)

- [ ] GitHub dismiss **AI-SYNC-GFI** / R10 on ai-findings panel (T8)
- [ ] **AI-VENDOR-TREE** triage complete (T13 / RF13)
- [ ] Post-dismiss re-scan manifest in task doc (T9)
- [ ] AI panel **0 open** or lag documented (T10)
- [ ] BR-101 resolution narrative updated (T12 / RF11)
- [ ] `RW E08:S03:T14 --art` closure release (RF12)
- [ ] Step 18 status reconciliation to actual state (`COMPLETE` or `WAITING`)

### Documentation

- [x] All §5 wave-1 UPDATE items implemented
- [ ] §5 wave-2 UPDATE items (D-U1 post-dismiss manifest, D-U2 final closure)
- [x] All §6 paths exist and are linked from task doc

---

## References

- [BR-101](../project-management/kanban/fr-br/BR-101-code-quality-ai-suggestions-backlog.md)
- [BR-099](../project-management/kanban/fr-br/BR-099-code-quality-maintainability-backlog.md)
- [BR-100](../project-management/kanban/fr-br/BR-100-code-quality-reliability-backlog.md)
- [FR-112](../project-management/kanban/fr-br/FR-112-perpetual-github-ci-and-security-health-lanes.md)
- [T14 task doc](../project-management/kanban/epics/epic-08/story-03-automation-scripts/T14-code-quality-ai-suggestions-backlog-br101.md)
- [IPP-E08S03T12](IPP-E08S03T12-code-quality-maintainability-backlog-br099.md)
- [IPP-E08S03T13](IPP-E08S03T13-code-quality-reliability-backlog-br100.md)
- [IPP-E08S03T16](IPP-E08S03T16-github-security-code-quality-health-perpetual-fr112.md)
- [CHANGELOG v0.8.3.14+1](../changelog-and-release-notes/changelog-archive/CHANGELOG_v0.8.3.14+1.md)
- [CHANGELOG v0.8.3.14+2](../changelog-and-release-notes/changelog-archive/CHANGELOG_v0.8.3.14+2.md)
- [code-quality-monitoring-processes.md](../architecture/standards-and-adrs/code-quality-monitoring-processes.md)
- [ipw-adr-necessity-checklist.md](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md)
- [FR-042](../project-management/kanban/fr-br/FR-042-implementation-planning-workflow-ipw.md)
- [BR-097](../project-management/kanban/fr-br/BR-097-rw-agent-reuses-tagged-build-and-force-moves-release-tags.md)
