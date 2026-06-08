---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T23:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 8, Story 3, Task 14: Code Quality AI suggestions backlog (**BR-101**)

**Task ID:** E08:S03:T14  
**Status:** ✅ COMPLETE (v0.8.3.14+5)  
**Priority:** LOW  
**Created:** 2026-06-05  
**Last updated:** 2026-06-06 (wave-2c closure — lag-accepted; **v0.8.3.14+5**)  
**Version Anchor:** v0.8.3.14+5  
**Version:** v0.8.3.14+5  
**Code:** E08S03T14

**Scope:** Triage and resolve GitHub Code Quality **AI-powered suggestions** on recently changed files. GH UI groups by **file path** (no `#` numbers) — use **AID** tokens below in [ai-findings](https://github.com/RMS-Ltd/ai-dev-kit/security/quality/ai-findings).

**Upstream:** [BR-101 — Code Quality AI suggestions backlog](../../../fr-br/BR-101-code-quality-ai-suggestions-backlog.md)

Publication Status: NOT_APPLICABLE

---

## Input

- [IPP-E08S03T14](../../../../implementation-cycles/IPP-E08S03T14-code-quality-ai-suggestions-backlog-br101.md)
- [BR-101](../../../fr-br/BR-101-code-quality-ai-suggestions-backlog.md)
- [AI findings panel](https://github.com/RMS-Ltd/ai-dev-kit/security/quality/ai-findings) — canonical UI (not exposed via `code-scanning/alerts` API)
- [E08:S03:T12](T12-code-quality-maintainability-backlog-br099.md) · [E08:S03:T13](T13-code-quality-reliability-backlog-br100.md) (dedupe overlaps)
- [E08:S03:T16 — GitHub Security & Code Quality health (Perpetual)](T16-github-security-code-quality-health-perpetual-fr112.md) — post-backlog handoff (FR-112)

---

## Deliverable

1. Inventory: file-group index (**AID**) + per-suggestion rows (**R** legacy IDs).
2. Applied fixes or GitHub dismissals with rationale.
3. Cleared AI suggestions panel (0 open).

---

## GH UI file-group index (operator primary)

GitHub **ai-findings** panel uses **Select file:** dropdown — no `#` numbers. Use **AID** when triaging or dismissing.

| AID | Select file (GH UI — copy path) | Open | Last push | Wave-1 | Wave-2 operator action |
| --- | ------------------------------- | ---- | --------- | ------ | ---------------------- |
| **AI-GFI-CONTAM** | `greenfield-install/packages/frameworks/kanban/scripts/test_contamination_detector.py` | **2** | 7h ago | apply (R02) | Refresh lag — fixes shipped; dismiss as fixed if stale |
| **AI-SEMVER** | `packages/frameworks/workflow-mgt/scripts/version/semver_converter.py` | **5** | 7h ago | apply (R03–R07) | Refresh lag — fixes shipped; dismiss as fixed if stale |
| **AI-SYNC-GFI** | `scripts/sync_greenfield_install.py` | **3** | 6h ago | 2 shipped + 1 open (R08–R10) | See [AI-SYNC-GFI detail](#ai-sync-gfi-finding-detail-gh-ui-text-identifiers) — **no dismiss control in GH UI** |
| **AI-PORTAL-BR068** | `tests/test_portal_br068_monorepo_links.py` | **3** | 6h ago | apply (R12–R14) | Refresh lag — fixes shipped; dismiss as fixed if stale |
| **AI-VENDOR-TREE** | `tests/workflow_mgt/test_verify_vendor_tree.py` | **4** | 32m ago | **NEW** (post wave-1) | **4/4 apply** @ wave-2b — see [AI-VENDOR-TREE detail](#ai-vendor-tree-finding-detail-gh-ui-text-identifiers) |

**Total open (2026-06-05 GH UI):** **17** across **5** file groups.

**Panel drift vs wave-1 capture @ `5fcf102`:**

- `packages/.../test_contamination_detector.py` (R01) — no longer listed; only **AI-GFI-CONTAM** mirror path remains.
- `src/ai_dev_kit/version.py` (R11 dismiss) — no longer listed (panel cleared or never on `main` visibility).
- **AI-VENDOR-TREE** — 4 new findings (likely from T15 / recent `main` push); wave-2 triage required.

---

## Wave-1 row inventory (capture 2026-06-05, `main` @ `5fcf102`)

Legacy **R** IDs map wave-1 rows to **AID** file groups. Use **AID** for GH UI navigation.

| R | AID | File | AI summary (paraphrased) | Disposition | Notes |
| - | --- | ---- | -------------------------- | ----------- | ----- |
| R01 | *(cleared)* | `packages/frameworks/kanban/scripts/test_contamination_detector.py` | Relative import for `scan_kanban_tree` | **apply** | try/except import fallback; not in current GH panel |
| R02 | AI-GFI-CONTAM | `greenfield-install/packages/frameworks/kanban/scripts/test_contamination_detector.py` | Same as R01 | **apply** | mirror |
| R03 | AI-SEMVER | `packages/frameworks/workflow-mgt/scripts/version/semver_converter.py` | Unused `result` from `subprocess.run` | **apply** | shipped |
| R04 | AI-SEMVER | same | Redundant `epic_key` alias | **apply** | use `epic` directly |
| R05 | AI-SEMVER | same | `semver_to_internal` optional BUILD | **apply** | `0.5.39` → BUILD 0 |
| R06 | AI-SEMVER | same | Reverse dict collision safety | **apply** | `_build_reverse_unique` |
| R07 | AI-SEMVER | same | Regex parse for `(epic,story)` key | **apply** | `re.fullmatch` |
| R08 | AI-SYNC-GFI | `scripts/sync_greenfield_install.py` | Warn on `git ls-files` failure | **apply** | stderr warning |
| R09 | AI-SYNC-GFI | same | Guard `shutil.rmtree` destination | **apply** | `_validate_safe_dest` |
| R10 | AI-SYNC-GFI | same | `rglob('*')` → `rglob('**/*')` | **dismiss** | no meaningful pathlib benefit — doc waiver; see F-SYNC-02 branch in IPP |
| R11 | *(cleared)* | `src/ai_dev_kit/version.py` | Dataclass refactor for version constants | **dismiss** | RW contract; not in current GH panel |
| R12 | AI-PORTAL-BR068 | `tests/test_portal_br068_monorepo_links.py` | `GITHUB_BLOB_PREFIX` use `https://` | **apply** | matches cheatsheet URLs |
| R13 | AI-PORTAL-BR068 | same | Rename `_iter_publish_scope_markdown` | **apply** | → `_get_publish_scope_markdown_files` |
| R14 | AI-PORTAL-BR068 | same | Assertion message include violation count | **apply** | clearer failure output |

**Follow-on (tests green):** `contamination_detector.py` — case-insensitive canonical epic match + `fr-br/` root path (both package trees); exposed by Epic-casing test fix (R01–R02).

**Dedupe:** No overlap with BR-099/100 maintainability/reliability waves on wave-1 rows.

---

## AI-SYNC-GFI finding detail (GH UI text identifiers)

GitHub **does not show dismiss** on AI suggestion findings — only open + diff view. Identify each finding by **opening text** (first sentence in the panel).

| Finding ID | GH UI opening text (match this) | R | Shipped on `main`? | Evidence | Disposition |
| ---------- | --------------------------------- | - | ------------------ | -------- | ----------- |
| **F-SYNC-01** | `_git_ls_files` function silently returns an empty list when `git ls-files` fails` | R08 | **Yes** @ v0.8.3.14+1 | `_git_ls_files` prints stderr warning L128–137 | **apply** — GH stale; diff right-column matches `main` |
| **F-SYNC-02** | `rglob('*')` pattern traverses all files` … `rglob('**/*')` | R10 | **No** — still `rglob("*")` L144 (Branch A waiver) | [blob @ 0ccd79d](https://github.com/RMS-Ltd/ai-dev-kit/blob/0ccd79d08800ca16b40a7eb8ac161e9bc6e13002/scripts/sync_greenfield_install.py) is pre-fix baseline GH uses | **dismiss** (doc) — **Branch A (leave)** @ wave-2b |
| **F-SYNC-03** | `_copy_tree` function unconditionally removes the destination directory` … safety check | R09 | **Yes** @ v0.8.3.14+1 | `_validate_safe_dest` + call L201–217 | **apply** — GH stale; diff right-column matches `main` |

**GH UI limitation (2026-06-05):** AI suggestions panel has **no dismiss / won't-fix action** — operator can only view diff or wait for re-analysis. **F-SYNC-01** and **F-SYNC-03** are already merged; panel still lists them because analysis lags behind `main` (GH may anchor an older commit such as `0ccd79d`).

**Operator playbook — AI-SYNC-GFI:**

1. **F-SYNC-01, F-SYNC-03** — no code action; wait 24–48h for GH refresh, or accept as documented lag (fixes verified on `main` via `git show main:scripts/sync_greenfield_install.py`).
2. **F-SYNC-02** — only genuine open item. Options: (a) **leave** `rglob("*")` per triage rationale; (b) **apply** `rglob("**/*")` in a follow-on commit if clearing the panel matters more than the dismiss rationale.
3. Do **not** block T14 closure on F-SYNC-01/03 if `main` contains the diff right-column code.

**F-SYNC-02 branch decision (wave-2b, 2026-06-05):** **Branch A (leave)** — keep `rglob("*")` per wave-1 triage rationale (no meaningful pathlib benefit). Documented waiver; panel may retain 1 open until GH refresh or lag-accepted closure.

---

## AI-VENDOR-TREE finding detail (GH UI text identifiers)

Four findings on `tests/workflow_mgt/test_verify_vendor_tree.py` (post wave-1; likely from T15 / `main` push). Opening text paraphrased from GH diff view — reconcile with panel if wording differs.

| Finding ID | GH UI opening text (paraphrased) | Disposition | Wave-2b action |
| ---------- | -------------------------------- | ----------- | -------------- |
| **F-VENDOR-01** | `_load_verify_module` is called in every test — use a **pytest fixture** | **apply** | `@pytest.fixture(scope="module")` `verify_mod` |
| **F-VENDOR-02** | Load script via `importlib` without registering **`adk_install_errors`** in `sys.modules` | **apply** | Register `adk_install_errors` before `verify_vendor_tree` exec (matches `test_install_error_docs_sync` pattern) |
| **F-VENDOR-03** | **Assert** statements lack descriptive failure messages | **apply** | Assertion messages on exit code / emitted ADK code |
| **F-VENDOR-04** | Duplicate stub file creation loop in layout test — **extract helper** | **apply** | `_write_stub_scripts(root, rel_paths)` |

**Verification:** `pytest tests/workflow_mgt/test_verify_vendor_tree.py` — 5 passed (2026-06-05, wave-2b).

**Dedupe:** No overlap with BR-099/100 on these rows (test-structure suggestions only).

---

## Post-triage manifest (wave 1)

| Action | Count | Status |
|--------|-------|--------|
| Applied in repo | 12 | done (incl. detector follow-on) |
| Dismiss (rationale documented) | 2 | R10 — GH UI has no dismiss; F-SYNC-02 only open code item; R11 cleared from panel |
| GH stale (shipped, panel open) | 2 | F-SYNC-01, F-SYNC-03 on `main`; await GH re-analysis |
| Deferred to BR-099/100 | 0 | — |
| New file group (post wave-1) | 4 | **AI-VENDOR-TREE** — **4/4 apply** @ wave-2b |
| F-SYNC-02 waiver (Branch A) | 1 | `rglob("*")` unchanged; doc-only |

**Verification:** `pytest packages/frameworks/kanban/scripts/test_contamination_detector.py tests/test_portal_br068_monorepo_links.py` — 7 passed (2026-06-05).

**Release:** `RW E08:S03:T14 --art` when ready (BR-097).

---

## Dashboard re-scan manifest

### Re-scan A — 2026-06-05 @ `cadb0c3` (post v0.8.3.14+1)

| Field | Value |
| ----- | ----- |
| Open AI suggestions | **14** (unchanged) |
| Files in panel | 5 (included `version.py`; no `test_verify_vendor_tree.py`) |

### Re-scan B — 2026-06-05 (operator GH UI, current)

| Field | Value |
| ----- | ----- |
| Open AI suggestions | **17** |
| File groups | **5** — see [GH UI file-group index](#gh-ui-file-group-index-operator-primary) |

**Operator actions (wave 2):**

1. **AI-SYNC-GFI** — **F-SYNC-01/03** already on `main` (GH lag). **F-SYNC-02** (`rglob`) — dismiss not available in GH UI; apply in code only if operator chooses panel clear over triage rationale.
2. **AI-GFI-CONTAM**, **AI-SEMVER**, **AI-PORTAL-BR068** — fixes shipped; wait 24–48h for GH re-analysis (same stale-panel pattern as F-SYNC-01/03).
3. **AI-VENDOR-TREE** — triage 4 new suggestions (apply / dismiss / defer); may require code changes + follow-on RW.

### Re-scan C — 2026-06-05 post-merge to `main` (operator)

**Source:** Operator merged to `main` and pushed; awaiting GH AI panel re-analysis.  
**`main` @ `f6aa4dca`** (local `origin/main` after fetch).

| Field | Value |
| ----- | ----- |
| Merge state | Fixes on `main`; GH panel expected to lag 24–48h |
| **AI-SYNC-GFI** | F-SYNC-01/03 verified on `main`; F-SYNC-02 (`rglob`) only open code item |
| GH dismiss | **Not available** in AI suggestions UI |
| **AI-VENDOR-TREE** | Still **4** open — triage pending |
| RW | **v0.8.3.14+3** documents wait state; **+4** FBU verification |

### Re-scan D — 2026-06-05 wave-2b (implementation)

**Source:** Local implementation after IPP wave-2b/c plan; pre-RW doc+code state.  
**Working tree @ `f3bd95d`** (includes wave-2b test refactor; not yet released).

| Field | Value |
| ----- | ----- |
| **AI-VENDOR-TREE** | **4/4 apply** — pytest fixture, sys.modules preflight, assertion messages, stub helper |
| **F-SYNC-02** | **Branch A (leave)** — `rglob("*")` unchanged @ L144 |
| **F-SYNC-01/03** | Verified on `main`; GH stale (lag-accepted) |
| **AI-GFI-CONTAM**, **AI-SEMVER**, **AI-PORTAL-BR068** | Fixes on `main`; GH stale (lag-accepted) |
| Est. panel open (GH UI) | **~13–17** — 4 vendor fixes may clear after push + re-analysis; stale groups + F-SYNC-02 waiver may persist |
| Closure path | **Lag-accepted** @ **v0.8.3.14+5** — operator closure RW |
| pytest | `tests/workflow_mgt/test_verify_vendor_tree.py` — **5 passed** |

**Lag-accepted evidence (T15):** `git show main:scripts/sync_greenfield_install.py` contains F-SYNC-01 warning + F-SYNC-03 `_validate_safe_dest`; wave-1 apply groups match diff right-column on `main` @ `f6aa4dca`.

---

## Acceptance Criteria

- [x] All 14 suggestions triaged (apply / dismiss / defer-to-BR-099|100).
- [x] Valid suggestions implemented; targeted tests green.
- [x] AI suggestions panel closure — lag-accepted @ **v0.8.3.14+5** (shipped groups verified on `main`; F-SYNC-02 waiver; GH refresh may lag).
- [x] **BR-101** terminal release via **RW E08:S03:T14 --art** (**v0.8.3.14+5**).

---

## References

- [IPP-E08S03T14](../../../../implementation-cycles/IPP-E08S03T14-code-quality-ai-suggestions-backlog-br101.md) — revised 2026-06-05 (wave-2b/c plan; FBU +0–+4; GH no-dismiss; F-SYNC dual branch; lag-accepted closure policy)
- [BR-101](../../../fr-br/BR-101-code-quality-ai-suggestions-backlog.md)
- [BR-099](../../../fr-br/BR-099-code-quality-maintainability-backlog.md)
- [BR-100](../../../fr-br/BR-100-code-quality-reliability-backlog.md)
