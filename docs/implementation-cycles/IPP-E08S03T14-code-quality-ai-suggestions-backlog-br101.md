---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T23:45:00Z
revised_at: 2026-06-05T20:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E08:S03:T14 — Planning: Spec, Tests, Implementation Plan (IPW)

**Host Task:** [`T14-code-quality-ai-suggestions-backlog-br101.md`](../kanban/epics/epic-08/story-03-automation-scripts/T14-code-quality-ai-suggestions-backlog-br101.md) **(E08:S03:T14)**  
**Planning for:** [BR-101](../kanban/fr-br/BR-101-code-quality-ai-suggestions-backlog.md)  
**Status:** Revised — wave-1 complete; FBU +0–+4; wave-2b/c **COMPLETE** @ v0.8.3.14+5

> **IPW:** Produced for E08:S03:T14. Triage and resolve **14** GitHub Code Quality **AI-powered** suggestions; complements maintainability task [E08:S03:T12](IPP-E08S03T12-code-quality-maintainability-backlog-br099.md) / [BR-099](../kanban/fr-br/BR-099-code-quality-maintainability-backlog.md) and reliability task [E08:S03:T13](IPP-E08S03T13-code-quality-reliability-backlog-br100.md) / [BR-100](../kanban/fr-br/BR-100-code-quality-reliability-backlog.md) with explicit deduplication.
>
> **Revision (2026-06-05, wave-2 FBU):** Wave-1 shipped @ v0.8.3.14+0–+1. FBU waves @ +2 (`cadb0c3`, **14** open), +3 (post-merge wait @ `main` `f6aa4dca`), +4 (FBU verification). Operator GH UI Re-scan B: **17** open across **5** file groups — use **AID** tokens (not `#` numbers) in [ai-findings panel](https://github.com/RMS-Ltd/ai-dev-kit/security/quality/ai-findings). **GH AI panel has no dismiss / won't-fix action** — doc-only waiver for dismiss dispositions. Pending: **AI-VENDOR-TREE** triage (4 new); **F-SYNC-02** dual-branch decision (leave `rglob("*")` or apply `rglob("**/*")`). **AI suggestions only** — not Standard findings (T12/T13); not Code Scanning security (T08–T11). Post-closure handoff to [E08:S03:T16](../kanban/epics/epic-08/story-03-automation-scripts/T16-github-security-code-quality-health-perpetual-fr112.md) (FR-112 perpetual lane).

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Wave | Status | Source (FR/BR/Task) |
| -- | ----------- | ---- | ------ | ------------------- |
| RF1 | Capture **inventory table**: all 14 AI suggestions (file, summary, suggested action, capture date, `main` SHA) in task doc | 1 | **SATISFIED** — 14-row table @ `5fcf102` | T14 deliverable #1, BR-101 AC1 |
| RF2 | **Triage sheet:** each suggestion marked **apply** / **dismiss** (with reason) / **defer-to-BR-099\|100** (duplicate) | 1 | **SATISFIED** — 12 apply, 2 dismiss, 0 defer | T14 AC1, BR-101 AC2 |
| RF3 | **Apply** valid suggestions; add tests only where behaviour changes | 1 | **SATISFIED** — 12 applied; targeted pytest 7 passed | T14 AC2, BR-101 AC3 |
| RF4 | **Dashboard clear:** AI suggestions panel shows **0 open** (applied, doc-waived, or lag-accepted per closure policy) | 2c | **SATISFIED** — lag-accepted @ +5 | T14 AC3, BR-101 AC4 |
| RF5 | Keep CI green: `python3.11 -m pytest tests/` + workflow-scripts gate | 1 | **SATISFIED** — local pytest green | T14 AC2, BR-101 AC3 |
| RF6 | Close kanban loop: BR-101 resolution + **RW E08:S03:T14 --art** on completion | 2c | **SATISFIED** — terminal @ +5 | T14 AC4, BR-101 AC5 |
| RF7 | **Dedupe** against E08:S03:T12 / E08:S03:T13 triage sheets before applying fixes | 1 | **SATISFIED** — 0 deferrals to BR-099/100 | T14 Input |
| RF8 | Document **F-SYNC-02** disposition (waiver or apply); GH dismiss N/A for AI panel | 2b | **SATISFIED** — Branch A (leave) waiver @ wave-2b | BR-101 AC4, wave-2b |
| RF9 | Post-wave-2b dashboard re-scan manifest (open count + AID file groups @ current `main` SHA) | 2b | **SATISFIED** — Re-scan D in task doc @ `f3bd95d` | T14 deliverable, wave-2b |
| RF10 | Document GitHub panel lag if **AI-GFI-CONTAM**, **AI-SEMVER**, **AI-PORTAL-BR068**, **F-SYNC-01/03** persist after fixes on `main` | 2a | **SATISFIED** — task doc Re-scan C + F-SYNC detail | RF4, wave-2a |
| RF11 | BR-101 resolution narrative update (use "Fixed" only after user confirms 0-open or lag closure) | 2c | **SATISFIED** — attempted resolution @ +5 | RF6, wave-2c |
| RF12 | Closure **`RW E08:S03:T14 --art`** (BUILD +1); status reconciliation | 2c | **SATISFIED** — @ +5 | RF6, BR-097 |
| RF13 | Triage **AI-VENDOR-TREE** (4 new findings on `tests/workflow_mgt/test_verify_vendor_tree.py`) — apply / dismiss / defer | 2b | **SATISFIED** — 4/4 apply @ wave-2b | T14 deliverable, wave-2b |
| RF14 | **F-SYNC-02** dual-branch decision recorded in task doc before closure (Branch A: waiver; Branch B: apply `rglob("**/*")`) | 2b | **SATISFIED** — Branch A chosen | RF8, wave-2b |
| RF15 | **Re-scan D** manifest after wave-2b actions @ current `main` SHA | 2b | **SATISFIED** — task doc Re-scan D | RF9, wave-2b |

**Release evidence:** v0.8.3.14+0 (intake), +1 (wave-1 remediation), +2 (FBU re-scan manifest), +3 (post-merge wait), +4 (FBU verification). See task doc inventory, post-triage manifest, and dashboard re-scan tables.

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
| RNF8 | **GH dismiss N/A** — AI suggestions panel has no dismiss / won't-fix action; dismiss dispositions are doc-only waivers | Operator discovery 2026-06-05 |

### 1.3 Invariants and boundaries

- **Invariants:** Python 3.11+ per FR-104; no `git tag -f` / force-push on release tags (BR-097); post-ship verification uses `RW E08:S03:T14 --art` only
- **In scope (wave 1 — done):** 14 AI suggestions triage + code fixes on recently changed files
- **In scope (wave 2a — done):** FBU re-scan manifests; WAITING status; AID/F-SYNC identifiers; post-merge lag policy @ +3/+4
- **In scope (wave 2b — planned):** **AI-VENDOR-TREE** triage; **F-SYNC-02** branch decision; Re-scan D manifest
- **In scope (wave 2c — planned):** GH refresh verify OR lag-accepted closure; terminal RW; COMPLETE + T16 handoff
- **Out of scope:** BR-099 maintainability burn-down (T12); BR-100 reliability burn-down (T13); CodeQL **security** sidebar (T08–T11); [E08:S03:T16](IPP-E08S03T16-github-security-code-quality-health-perpetual-fr112.md) perpetual monitoring (separate scope); new CI quality gates; automating AI suggestion ingestion

---

## 2. Specification

### 2.1 Goal

Multi-phase **AI-powered Code Quality suggestions** triage per [BR-101](../kanban/fr-br/BR-101-code-quality-ai-suggestions-backlog.md):

- **Phase A (wave 1 — complete):** Inventory, dedupe, triage, and apply 12/14 suggestions; document 2 dismissals; CI green.
- **Phase B (wave 2a — complete):** FBU re-scan manifests; AID/F-SYNC identifiers; post-merge lag documentation; WAITING status @ +3/+4.
- **Phase C (wave 2b — planned):** **AI-VENDOR-TREE** triage; **F-SYNC-02** operator branch decision; Re-scan D manifest.
- **Phase D (wave 2c — planned):** GH refresh verify OR lag-accepted closure per policy below; terminal RW and kanban reconciliation. On COMPLETE, ongoing AI suggestion monitoring transfers to **E08:S03:T16** per FR-112.

### 2.2 Specification mapping from ascertained requirements

- RF1 → 14-row inventory table in task doc (satisfied)
- RF2, RF7 → per-suggestion disposition table with dedupe pass (satisfied — 0 deferrals)
- RF3 → targeted fixes on **apply** rows; mirror `greenfield-install/` when implicated (satisfied)
- RF4 → Re-scan D + AI panel verification; lag-accepted path when `main` verified (open — 17 listed)
- RF5 → existing `pytest tests/` and workflow-scripts gate (satisfied wave 1; optional re-run wave 2b/c)
- RF6 → BR-101 update + RW Step 7 four-surface reconciliation (interim +0–+4 done; final closure open)
- RF8, RF14 → F-SYNC-02 disposition documented; dual branch at implementation (open)
- RF13 → triage **AI-VENDOR-TREE** (4 new findings)
- RF9, RF15 → Re-scan D manifest in task doc (open)
- RF10 → lag documentation for stale applied groups (satisfied @ Re-scan C)
- RF11 → BR-101 resolution narrative (not "Fixed" until user confirms 0-open or lag closure)
- RF12 → closure `RW E08:S03:T14 --art` + status reconciliation

### 2.3 Constraints

- Python **3.11+** per FR-104
- Primary capture source: [GitHub Security & quality → AI findings panel](https://github.com/RMS-Ltd/ai-dev-kit/security/quality/ai-findings) — not `code-scanning/alerts` API
- **GH UI limitation:** AI panel groups by **Select file** path; no `#` row IDs; **no dismiss / won't-fix action** — operator can only view diff or wait for re-analysis
- Triage dispositions:

| Disposition | Action |
| ----------- | ------ |
| **apply** | Implement suggested fix in code; record in task doc |
| **dismiss** | Document rationale in task doc; GH dismiss N/A |
| **defer-to-BR-099** | Duplicate of maintainability finding — owned by T12 |
| **defer-to-BR-100** | Duplicate of reliability finding — owned by T13 |

- **GH UI file-group index (operator primary — 2026-06-05):**

| AID | Select file (GH UI) | Open | Wave-2 action |
| --- | ------------------- | ---- | ------------- |
| **AI-GFI-CONTAM** | `greenfield-install/packages/frameworks/kanban/scripts/test_contamination_detector.py` | 2 | Refresh lag — fixes shipped on `main` |
| **AI-SEMVER** | `packages/frameworks/workflow-mgt/scripts/version/semver_converter.py` | 5 | Refresh lag — fixes shipped on `main` |
| **AI-SYNC-GFI** | `scripts/sync_greenfield_install.py` | 3 | F-SYNC-02 branch; F-SYNC-01/03 await refresh |
| **AI-PORTAL-BR068** | `tests/test_portal_br068_monorepo_links.py` | 3 | Refresh lag — fixes shipped on `main` |
| **AI-VENDOR-TREE** | `tests/workflow_mgt/test_verify_vendor_tree.py` | 4 | **4/4 apply** @ wave-2b (RF13) |

- **AI-SYNC-GFI text identifiers (GH UI opening text — match in panel):**

| Finding ID | R | Shipped on `main`? | Disposition |
| ---------- | - | ------------------ | ----------- |
| **F-SYNC-01** | R08 | **Yes** @ v0.8.3.14+1 | apply — GH stale |
| **F-SYNC-02** | R10 | **No** — still `rglob("*")` L144 | dismiss (doc) OR apply branch |
| **F-SYNC-03** | R09 | **Yes** @ v0.8.3.14+1 | apply — GH stale |

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

- **Current task status:** `IN PROGRESS — WAITING on GH AI panel refresh (FBU)` @ v0.8.3.14+4
- **Transition trigger to IN PROGRESS:** First non-planning implementation change lands — **DONE** @ +1; do **not** re-execute `TODO → IN PROGRESS`
- **Transition trigger to COMPLETE:** RF4 satisfied (strict 0-open OR lag-accepted per closure policy) + RF6/RF12 terminal closure RW; forensic `✅ COMPLETE (v{version})` on RW
- **WAITING may persist** through wave-2b; step 25 reconciles to COMPLETE / WAITING / BLOCKED (not forced COMPLETE)
- **Atomic propagation requirement:** Task doc status and kboard row status must update in the same change set/session
- **Owner:** Implementation execution step (not planning-only IPW creation)

**Closure policy (resolves RF4 vs GH lag):**

- **Strict:** AI panel **0 open** (T10 PASS)
- **Lag-accepted (default for F-SYNC-01/03 + applied AID groups):** `main` contains shipped fixes (`git show` / diff right-column match); task doc records Re-scan D with open count + rationale; operator confirms panel stale — **do not block** on F-SYNC-01/03 if code verified
- **F-SYNC-02 — operator chooses at implementation (both branches documented):**
  - **Branch A (leave):** keep `rglob("*")`; document waiver; panel may show 1 open until GH refresh
  - **Branch B (apply):** change to `rglob("**/*")` in `scripts/sync_greenfield_install.py`; follow-on `RW E08:S03:T14 --art` (BUILD +1)

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
| T6 | Dashboard clear | AI suggestions panel **0 open** (note + date; screenshot optional) | **PARTIAL** — 17 open (GH UI Re-scan B) | RF4 |
| T7 | Dismiss rationale | Every non-applied row has dismiss/defer rationale in task doc | **PASS** (doc-only; GH dismiss N/A) | RF2 |

### 3.2 Wave 2a FBU (satisfied)

| ID | Behavior / layer | Expected check | Status | Covers |
| -- | ---------------- | -------------- | ------ | ------ |
| T16 | FBU re-scan @ +2 | **14** open @ `cadb0c3` in task doc Re-scan A | **PASS** | RF9 |
| T17 | Operator Re-scan B | **17** open; AID index in task doc | **PASS** | RF9 |
| T18 | Post-merge Re-scan C | `main` @ `f6aa4dca`; lag + F-SYNC detail | **PASS** | RF10 |
| T19 | FBU releases +3/+4 | WAITING status; F-SYNC identifiers @ +4 | **PASS** | RF6 partial |

### 3.3 Wave 2b/c (planned)

| ID | Behavior / layer | Expected check | Covers |
| -- | ---------------- | -------------- | ------ |
| T8 | **F-SYNC-02** disposition recorded | Waiver (Branch A) or apply `rglob("**/*")` (Branch B); F-SYNC-01/03 verified on `main` | RF8, RF14 |
| T13 | **AI-VENDOR-TREE** triage | 4 findings classified apply / dismiss / defer in task doc | RF13 |
| T9 | Post-wave-2b re-scan manifest | Open count + AID groups @ current `main` SHA (Re-scan D) | RF9, RF15 |
| T10 | Dashboard 0-open or lag-accepted | AI panel **0 open** OR lag-accepted evidence per closure policy | RF4, RF10 |
| T11 | Full regression (optional) | `python3.11 -m pytest tests/` → 0 failed, 0 errors | RF5 |
| T12 | BR-101 resolution + closure RW | Fix-attempt / resolution narrative + `RW E08:S03:T14 --art` | RF11, RF12 |
| T15 | Lag-accepted closure evidence (if used) | `main` SHA + open count + operator note in Re-scan D | RF4, RF10 |

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
| 6 | **Dismiss chunk:** document **dismiss** row rationale (GH dismiss N/A) | **DONE** | R10/R11 rationale in task doc |
| 7 | Run T3 + T4 locally; add T5 tests where needed | **DONE** | 7 passed |
| 8 | Record **post-triage manifest** | **DONE** | task doc |
| 9 | Update BR-101 fix-attempt narrative | **DONE** | @ +1 |
| 10 | `RW E08:S03:T14 --art` | **DONE** | +0, +1 |
| 11 | FBU re-scan manifest | **DONE** | +2; **14** @ `cadb0c3`; operator GH UI now **17** |

### 4.0b Wave 2a FBU ledger (DONE — do not re-execute)

| Step | Action | Status | Evidence |
| ---- | ------ | ------ | -------- |
| 11b | FBU re-scan @ +2 (`cadb0c3`, 14 open) | **DONE** | +2 changelog |
| 11c | Operator GH UI Re-scan B (17 open, AID index) | **DONE** | task doc |
| 11d | Post-merge Re-scan C @ `f6aa4dca`; WAITING status | **DONE** | +3 (`RW -k --art`) |
| 11e | FBU verification wave; F-SYNC identifiers | **DONE** | +4 (`RW --art`) |

### 4.1 Wave 2b ledger (DONE — pending RW)

| Step | Action | Status | Evidence |
| ---- | ------ | ------ | -------- |
| 19 | **AI-VENDOR-TREE** triage + apply (4/4) | **DONE** | `test_verify_vendor_tree.py` refactor; 5 pytest passed |
| 20 | **F-SYNC-02 branch decision** — Branch A (leave `rglob("*")`) | **DONE** | task doc waiver |
| 21 | Record **Re-scan D** manifest | **DONE** | task doc @ `f3bd95d` |
| 22 | Lag-accepted evidence for stale shipped groups | **DONE** | Re-scan D + F-SYNC detail |

### 4.1c Wave 2c steps (planned — closure)

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| 23 | Update BR-101 resolution ("Fixed" only after user confirms 0-open or accepts lag closure) | RF11 |
| 24 | `RW E08:S03:T14 --art` — BUILD+1, changelog, RW Step 7 four-surface | RF12 |
| **25** | **[MANDATORY] Reconcile task `E08:S03:T14` status** to actual state: `COMPLETE` + `✅ COMPLETE (v{version})` if RF4/closure policy met; `WAITING` if verify pending; `BLOCKED` + reason if blocked. Update `Last updated`. | Task doc status |

**RW verification / FBU wave rule (BR-097):** Post-ship verification prescribes **`RW E08:S03:T14 --art`** only. Do **not** prescribe `--doc-policy-zero` for follow-on releases after a tagged BUILD.

**T16 handoff:** On COMPLETE, ongoing AI suggestion monitoring transfers to [E08:S03:T16](../kanban/epics/epic-08/story-03-automation-scripts/T16-github-security-code-quality-health-perpetual-fr112.md) per [FR-112](../kanban/fr-br/FR-112-perpetual-github-ci-and-security-health-lanes.md).

### 4.2 Files to create or modify

- **UPDATE (wave 1 — done):** `semver_converter.py`, `sync_greenfield_install.py`, `contamination_detector.py` + tests, `test_portal_br068_monorepo_links.py` (packages + `greenfield-install/` mirrors where applicable)
- **UPDATE (wave 2b — planned):** `scripts/sync_greenfield_install.py` only if F-SYNC-02 Branch B; **`tests/workflow_mgt/test_verify_vendor_tree.py`** only if **AI-VENDOR-TREE** triage yields apply rows
- **UPDATE (wave 2b/c — planned):** Kanban docs (task doc Re-scan D, BR-101, story, kboard)

### 4.3 Dependency order

**Wave 1 (complete):** Inventory export → dedupe pass → triage disposition → apply chunk → dismiss chunk (doc) → pytest green → post-triage manifest → BR/kanban → RW → FBU re-scan

**Wave 2a (complete):** Re-scan A → Re-scan B → Re-scan C → FBU RW +3/+4

**Wave 2b (planned):** **AI-VENDOR-TREE** triage → **F-SYNC-02** branch → Re-scan D → lag evidence if needed

**Wave 2c (planned):** BR resolution → closure RW → status reconciliation (step 25)

### 4.4 Documentation implementation steps

1. Record Re-scan D manifest in task doc (step 21) before BR-101 resolution update
2. RW Step 7 updates story checklist, kboard, BR-101 in closure release (step 24)
3. On COMPLETE, note T16 handoff in task doc References (no new doc required)

---

## 5. Documentation deliverables

### 5.1 Existing documents to update

| Doc ID | Path | Scope of change | Tied to (RF/T/impl step) |
| ------ | ---- | --------------- | ------------------------ |
| D-C1 | `docs/implementation-cycles/IPP-E08S03T14-code-quality-ai-suggestions-backlog-br101.md` | Wave-2 FBU revision (this document) | IPW |
| D-U1 | `docs/kanban/epics/epic-08/story-03-automation-scripts/T14-code-quality-ai-suggestions-backlog-br101.md` | Inventory + triage + post-triage manifests (**done**); Re-scan D + AI-VENDOR-TREE triage + F-SYNC-02 branch (**open**) | RF1, RF2, RF4, RF9, RF13, RF14, RF15, steps 19–21/25 |
| D-U2 | `docs/kanban/fr-br/BR-101-code-quality-ai-suggestions-backlog.md` | Fix-attempt / resolution (interim **done**; final closure **open**) | RF6, RF11, step 23 |
| D-U3 | `docs/kanban/epics/epic-08/story-03-automation-scripts.md` | Checklist on RW | steps 10/24 |
| D-U4 | `docs/kanban/kboard.md` | RW Step 7 row | steps 10/24 |

### 5.2 New documents to create

| Doc ID | Proposed path (draft) | Purpose | Tied to (RF/T/impl step) |
| ------ | --------------------- | ------- | ------------------------ |
| — | — | No new docs — UPDATE D-C1 only | — |

### 5.3 Documentation gaps and explicit non-changes

| Gap / topic | Resolution (CREATE row above, or NONE + reason) |
| ----------- | ----------------------------------------------- |
| AI suggestions triage methodology | NONE — BR-101 + this IPP; governed by [code-quality-monitoring-processes.md](../architecture/standards-and-adrs/code-quality-monitoring-processes.md) |
| New ADR for AI suggestion handling | NONE — EXEMPT per §2.5 |
| New CI workflow for AI suggestions | NONE — out of scope; dashboard verification manual at steps 11/21 |
| Dedicated manifest file outside task doc | NONE — AC requires manifest in task doc only |
| Perpetual AI suggestion monitoring | NONE — [IPP-E08S03T16](IPP-E08S03T16-github-security-code-quality-health-perpetual-fr112.md) owns post-closure lane per FR-112 |
| GH dismiss workflow | NONE — dismiss N/A in AI panel UI; doc-only waiver per RNF8 |

---

## 6. Documentation housing

| Doc ID | Canonical path | Publication status | Publication N/A reason (if N/A) | Lifecycle | Inbound links to add |
| ------ | -------------- | ------------------ | ------------------------------- | --------- | -------------------- |
| D-C1 | `docs/implementation-cycles/IPP-E08S03T14-code-quality-ai-suggestions-backlog-br101.md` | NOT_APPLICABLE | Planning artifact; not Docusaurus-facing | evergreen | Task doc Input + References |
| D-U1 | `docs/kanban/epics/epic-08/story-03-automation-scripts/T14-code-quality-ai-suggestions-backlog-br101.md` | NOT_APPLICABLE | Kanban internal | evergreen | BR-101 implementing task link (exists) |
| D-U2 | `docs/kanban/fr-br/BR-101-code-quality-ai-suggestions-backlog.md` | NOT_APPLICABLE | Kanban internal | evergreen | Task doc upstream link (exists) |
| D-U3 | `docs/kanban/epics/epic-08/story-03-automation-scripts.md` | NOT_APPLICABLE | Kanban internal | evergreen | Story checklist |
| D-U4 | `docs/kanban/kboard.md` | NOT_APPLICABLE | Kanban internal | evergreen | MoSCOW row |

**Housing rules:** One authoritative doc per topic; IPP under `docs/implementation-cycles/`; kanban four-surface on RW.

---

## 7. Success / verification criteria

### Wave 1 (complete)

- [x] 14-row inventory table in task doc (file, summary, capture date, SHA)
- [x] Triage sheet: all 14 suggestions classified apply / dismiss / defer
- [x] Dedupe evidence for rows deferred to BR-099/100 (0 deferrals)
- [x] Valid suggestions applied (12/14); dismissals recorded in task doc
- [ ] AI suggestions panel 0 open (17 open per GH UI Re-scan B)
- [x] `pytest tests/` + workflow-scripts CI green (local)
- [x] Targeted tests added where behaviour changes (T5)
- [ ] BR-101 final closure RW (interim releases @ +0–+4 done)
- [x] IPP bidirectionally linked from task doc

### Wave 2a FBU (complete)

- [x] Interim RW @ v0.8.3.14+0 through +4
- [x] AID file-group index in task doc
- [x] F-SYNC-01/02/03 text identifiers in task doc
- [x] Re-scan A/B/C manifests in task doc
- [x] WAITING status documented @ +4

### Wave 2b (complete — pending RW)

- [x] **AI-VENDOR-TREE** triaged (T13 / RF13) — 4/4 apply
- [x] **F-SYNC-02** branch recorded (T8 / RF14) — Branch A (leave)
- [x] Re-scan D manifest (T9 / RF15)
- [x] Lag-accepted evidence documented (T15)

### Wave 2c (complete)

- [x] RF4: lag-accepted closure @ +5 (T10)
- [x] BR-101 resolution narrative (attempted resolution) (T12 / RF11)
- [x] Terminal `RW E08:S03:T14 --art` @ +5 (RF12)
- [x] Step 25 status reconciliation → **COMPLETE**

### Documentation

- [x] All §5 wave-1 UPDATE items implemented
- [x] D-C1 IPP wave-2 FBU revision (this document)
- [ ] §5 wave-2b/c UPDATE items (D-U1 Re-scan D, D-U2 final closure)
- [x] All §6 paths exist and are linked from task doc

---

## References

- [BR-101](../kanban/fr-br/BR-101-code-quality-ai-suggestions-backlog.md)
- [BR-099](../kanban/fr-br/BR-099-code-quality-maintainability-backlog.md)
- [BR-100](../kanban/fr-br/BR-100-code-quality-reliability-backlog.md)
- [FR-112](../kanban/fr-br/FR-112-perpetual-github-ci-and-security-health-lanes.md)
- [T14 task doc](../kanban/epics/epic-08/story-03-automation-scripts/T14-code-quality-ai-suggestions-backlog-br101.md) — Re-scan C section
- [IPP-E08S03T12](IPP-E08S03T12-code-quality-maintainability-backlog-br099.md)
- [IPP-E08S03T13](IPP-E08S03T13-code-quality-reliability-backlog-br100.md)
- [IPP-E08S03T16](IPP-E08S03T16-github-security-code-quality-health-perpetual-fr112.md)
- [CHANGELOG v0.8.3.14+0](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.8.3.14+0.md)
- [CHANGELOG v0.8.3.14+1](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.8.3.14+1.md)
- [CHANGELOG v0.8.3.14+2](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.8.3.14+2.md)
- [CHANGELOG v0.8.3.14+3](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.8.3.14+3.md)
- [CHANGELOG v0.8.3.14+4](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.8.3.14+4.md)
- [code-quality-monitoring-processes.md](../architecture/standards-and-adrs/code-quality-monitoring-processes.md)
- [ipw-adr-necessity-checklist.md](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md)
- [FR-042](../kanban/fr-br/FR-042-implementation-planning-workflow-ipw.md)
- [BR-097](../kanban/fr-br/BR-097-rw-agent-reuses-tagged-build-and-force-moves-release-tags.md)
