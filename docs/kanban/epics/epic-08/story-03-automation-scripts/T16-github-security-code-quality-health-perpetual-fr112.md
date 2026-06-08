---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T16:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E08:S03:T16 — GitHub Security & Code Quality Health (Perpetual)

**Task ID:** E08:S03:T16  
**Status:** IN PROGRESS — **ACTIVE** (T12/T13/T14 backlog sign-off complete @ **v0.8.3.12+11**; Wave 2+ resumed)  
**Priority:** HIGH  
**Estimated Effort:** Medium (ongoing)  
**Created:** 2026-06-05  
**Last updated:** 2026-06-08 (Wave 3c shipped **v0.8.3.16+6** — final `py/empty-except` stragglers)  
**Version Anchor:** v0.8.3.16+6 (Wave 3c)  
**Code:** E08S03T16  
**Task Type:** Perpetual Maintenance

**Perpetual Override Rationale:** GitHub Security/Code Quality perpetual lane under Epic 8 Story 3 per FR-112; complements E02:S16 workflow perpetual lanes without conflating CI/security dashboard ownership.

**Upstream:** [FR-112 — Perpetual GitHub CI and security health lanes](../../../fr-br/FR-112-perpetual-github-ci-and-security-health-lanes.md)

Publication Status: NOT_APPLICABLE

---

## Input

- [IPP-E08S03T16](../../../../implementation-cycles/IPP-E08S03T16-github-security-code-quality-health-perpetual-fr112.md)
- [FR-112](../../../fr-br/FR-112-perpetual-github-ci-and-security-health-lanes.md)
- [E08:S03:T15 — Actions CI (Perpetual)](T15-github-actions-ci-health-perpetual-fr112.md) — merge gate owner
- [IPP-E08S03T12](../../../../implementation-cycles/IPP-E08S03T12-code-quality-maintainability-backlog-br099.md) · [IPP-E08S03T13](../../../../implementation-cycles/IPP-E08S03T13-code-quality-reliability-backlog-br100.md) · [IPP-E08S03T14](../../../../implementation-cycles/IPP-E08S03T14-code-quality-ai-suggestions-backlog-br101.md)

---

## Scope

Standing perpetual lane for **GitHub Advanced Security** hygiene:

- [Code scanning](https://github.com/RMS-Ltd/ai-dev-kit/security/code-scanning) (CodeQL security alerts)
- [Code Quality](https://github.com/RMS-Ltd/ai-dev-kit/security/quality) (maintainability, reliability, standard findings)
- [AI findings](https://github.com/RMS-Ltd/ai-dev-kit/security/quality/ai-findings) (dismiss / verify / remediate)

**Owns (representative, not exhaustive):**

- Dashboard re-scans and open-count snapshots after merges to `main`
- Routine remediation waves (autofix-safe hygiene, small targeted fixes)
- Alert dismiss / false-positive documentation with evidence
- Score regression triage (Fair → Needs Improvement, etc.)
- Post-backlog ongoing maintenance after finite burn-down tasks complete

**Source of truth:** Security tabs above — record SHA, open counts, and score at start of each hygiene RW.

---

## Activity deferral (operator directive — 2026-06-05)

**~~Postpone all T16 waves~~ — LIFTED 2026-06-07:** **T12**, **T13**, and **T14** operator sign-off complete (**T12** @ **v0.8.3.12+11**). T16 Wave 2+ **resumed**.

**Rationale (historical):** T12–T14 burned down the finite backlog before T16 assumed perpetual hygiene. Deferral ended when T12 dashboard **Good** confirmed @ `main` `ed379ab`.

| Allowed during deferral | Blocked until T12–T14 sign-off |
| ----------------------- | ------------------------------ |
| Read-only dashboard cross-refs in sibling task docs | `RW E08:S03:T16` (any BUILD) |
| Net-new **HIGH** CodeQL **security** alerts → dedicated BR + task (BR-094 pattern), then return here | Standard-finding / AI remediation waves |
| — | Periodic re-scan manifest updates on T16 |

**Resume trigger:** Operator confirms **T12 + T13 + T14** COMPLETE → T16 Wave 2+ per [IPP §4](../../../../implementation-cycles/IPP-E08S03T16-github-security-code-quality-health-perpetual-fr112.md).

---

## What this task does NOT own

- [GitHub Actions](https://github.com/RMS-Ltd/ai-dev-kit/actions) workflow failures (red CI builds) → **E08:S03:T15**
- **Active finite backlogs** while still IN PROGRESS:
  - **E08:S03:T12** (BR-099 maintainability)
  - **E08:S03:T13** (BR-100 reliability)
  - **E08:S03:T14** (BR-101 AI suggestions)
- Dependabot version/security PR policy → **E08:S03:T06**
- Novel **HIGH** severity findings that need focused IPP — file dedicated BR + task (BR-094–098 pattern), then return routine hygiene here

---

## Handoff from backlog tasks (T12–T14)

When **T12**, **T13**, and **T14** reach **COMPLETE** / terminal verification:

- **T16** becomes the **default RW anchor** for new Code Quality waves and re-scans.
- Backlog BRs (BR-099/100/101) may move to **intake-completed**; residual open findings roll into T16 perpetual scope.
- Until backlogs close, coordinate sequencing: backlog tasks own wave plans; T16 documents perpetual contract only.

| Backlog task | BR | Perpetual handoff trigger |
| ------------ | -- | ------------------------- |
| **T12** | BR-099 | Maintainability backlog COMPLETE + dashboard re-scan |
| **T13** | BR-100 | Reliability backlog COMPLETE + score acceptable or accepted residual |
| **T14** | BR-101 | AI findings verified/dismissed per BR-101 AC |

---

## RW attribution

Use **`RW E08:S03:T16`** for recurring security/Code Quality hygiene (BUILD increments on perpetual task). Prefer one wave theme per RW.

**Deferred:** No T16 RW until **T12–T14** sign-off (see [Activity deferral](#activity-deferral-operator-directive--2026-06-05)).

---

## Baseline manifest (2026-06-05 — Wave 0)

**Capture:** `main` @ `777e956` (2026-06-05 17:00 UTC). Code scanning via `gh api code-scanning/alerts`; standard/AI bands cross-referenced from sibling task dashboard manifests @ `cadb0c3` / `777e956` (post–wave-2 merge re-scan pending for maintainability delta).

| Surface | Open count | Score / state | Source |
| ------- | ---------- | ------------- | ------ |
| [Code scanning](https://github.com/RMS-Ltd/ai-dev-kit/security/code-scanning) | **0** | 5 alerts **fixed** (none open) | `gh api` @ capture |
| Standard — maintainability | **~145** (pre–777e956 re-scan) | **Fair** | [T12 dashboard re-scan](T12-code-quality-maintainability-backlog-br099.md) @ `cadb0c3`; wave-2 merged `777e956` — operator re-scan pending |
| Standard — reliability | **34** | **Needs Improvement** | [T13 post-wave](T13-code-quality-reliability-backlog-br100.md) @ `cadb0c3` |
| [AI findings](https://github.com/RMS-Ltd/ai-dev-kit/security/quality/ai-findings) | **14** | Open (dismiss #10–#11 pending) | [T14 task doc](T14-code-quality-ai-suggestions-backlog-br101.md) |

**Code scanning history (all fixed @ capture):**

| Alert # | Rule | State |
| ------- | ---- | ----- |
| 1–3 | `actions/missing-workflow-permissions` | fixed |
| 4 | `py/insecure-temporary-file` | fixed |
| 5 | `py/incomplete-url-substring-sanitization` | fixed |

---

## Actions cross-lane snapshot (read-only — T15 owns remediation)

**Ref:** `main` @ `777e956` ([Actions](https://github.com/RMS-Ltd/ai-dev-kit/actions))

| Workflow | Conclusion |
| -------- | ---------- |
| Tests | **failure** |
| Docusaurus site build | **failure** |
| Greenfield install | **failure** |
| Workflow scripts pytest | success |
| Code Quality: Push on main | success |
| Push on main (CodeQL) | success |

**Merge gate (RF5):** T16 code remediation on `main` is **blocked** until **E08:S03:T15** restores green **Tests** + required workflows. Wave 0 is docs-only — no merge conflict.

---

## Wave 1 re-scan manifest (2026-06-05)

**Capture:** `main` @ **`f6aa4dca`** (2026-06-05; post **E08:S03:T13** wave-2 release). Source: [Standard findings](https://github.com/RMS-Ltd/ai-dev-kit/security/quality) (`is:open`); code scanning via `gh api` (0 open).

| Surface | Open count | Score | Delta vs Wave 0 (`777e956`) |
| ------- | ---------- | ----- | ----------------------------- |
| [Code scanning](https://github.com/RMS-Ltd/ai-dev-kit/security/code-scanning) | **0** | 5 alerts **fixed** | unchanged |
| Standard — maintainability | **146** | **Fair** | ~145 → **146** (+1; `greenfield-install/` mirror residual) |
| Standard — reliability | **28** | **Fair** | **34 → 28** (−6); score **Needs Improvement → Fair** (T13 wave-2) |
| [AI findings](https://github.com/RMS-Ltd/ai-dev-kit/security/quality/ai-findings) | **12** | Open | 14 → **12** (panel refresh; T14 owns) |

**Standard findings rule breakdown @ `f6aa4dca` (11 rules, `is:open`):**

| UI rule label | CodeQL rule (approx.) | Open | Band | Severity |
| ------------- | --------------------- | ---- | ---- | -------- |
| Unused import | `py/unused-import` | **46** | Maintainability | Note |
| Module is imported with 'import' and 'import from' | `py/import-and-import-from` | **34** | Maintainability | Note |
| Unused global variable | `py/unused-global-variable` | **28** | Maintainability | Note |
| Use of a print statement at module level | `py/print-during-import` | **16** | Reliability | Note |
| Unused local variable | `py/unused-local-variable` | **13** | Maintainability | Note |
| Use of exit() or quit() | `py/use-of-exit-or-quit` | **12** | Reliability | Warning |
| Statement has no effect | `py/ineffectual-statement` | **10** | Maintainability | Note |
| Variable defined multiple times | `py/multiple-definition` | **5** | Maintainability | Warning |
| Module is imported more than once | `py/repeated-import` | **4** | Maintainability | Note |
| Unnecessary lambda | `py/unnecessary-lambda` | **4** | Maintainability | Note |
| Unnecessary pass | `py/unnecessary-pass` | **2** | Maintainability | Warning |
| **Subtotal maintainability** | — | **146** | **Fair** | — |
| **Subtotal reliability** | — | **28** | **Fair** | — |

**Cross-lane notes:**

- **T13 wave-2 confirmed:** `py/mixed-returns` (4) + `py/call/wrong-arguments` (2) no longer appear; reliability residual = **16** print-at-import (→ **T12**) + **12** exit/quit (→ T13 wave 3).
- **T12:** maintainability **146** unchanged in score band; wave-2 local fixes not yet fully reflected — **`greenfield-install/`** mirror dominates open count.
- **T14:** AI panel **12** open (down from 14/17); triage remains on T14 IPP.

---

## Wave 2 re-scan manifest (2026-06-08 — Wave 2a)

**Capture:** `main` @ **`4c4e9275`** (2026-06-08 11:30 UTC). **Merge gate RF12:** satisfied — Tests + Greenfield install + Workflow scripts pytest **success** @ `4c4e9275` ([Actions](https://github.com/RMS-Ltd/ai-dev-kit/actions)). Code scanning via `gh api` (0 open). Standard/AI bands: [Code Quality dashboard](https://github.com/RMS-Ltd/ai-dev-kit/security/quality) SoT; supplementary local ruff/CQG proxy on post-merge `dev`.

| Surface | Open count | Score | Delta vs Wave 1 (`f6aa4dca`) | Delta vs T12 Good (`ed379ab`) |
| ------- | ---------- | ----- | ---------------------------- | ----------------------------- |
| [Code scanning](https://github.com/RMS-Ltd/ai-dev-kit/security/code-scanning) | **0** | 5 alerts **fixed** | unchanged | unchanged |
| Standard — maintainability | **Good band** (UI count not re-exported) | **Good** | **Fair → Good** (T12 burn-down) | unchanged score; `4c4e9275` adds E02:S17 `release_state/` surface |
| Standard — reliability | **Good band** (UI count not re-exported) | **Good** | **Fair → Good** (T13 wave-2) | unchanged score |
| [AI findings](https://github.com/RMS-Ltd/ai-dev-kit/security/quality/ai-findings) | **~12–17 lag** (T14 lag-accepted) | Open (stale panel) | 12 → **lag-stable** | T14 COMPLETE @ v0.8.3.14+5 — refresh in Wave 2b theme 1 if needed |

**Local proxy @ post-merge `dev` (supplementary — not dashboard SoT):**

| Proxy | Count | Notes |
| ----- | ----- | ----- |
| `ruff` `F401` (`py/unused-import` class) | **17** autofix-safe | **10** in `packages/` + `greenfield-install/` `release_metadata/` (E02:S17 landing); **7** in `scripts/` + `tests/` |
| CQG monitor | advisory threshold breach | Predominantly maintainability warnings; meets `rw_threshold` (non-strict) |

**Rule breakdown proxy — `release_metadata/` mirror pair (Wave 2b target):**

| CodeQL rule (approx.) | Open (local ruff) | Band | Theme |
| --------------------- | ----------------- | ---- | ----- |
| `py/unused-import` | **10** (5 files × 2 trees) | Maintainability | Wave 2b — autofix-safe |
| `Tuple`, `sqlite3`, `Optional`, `Path` imports | per-file | Maintainability | E02:S17 SQLite ingest landing |

### Wave 2b remediation (2026-06-08)

**Theme:** Autofix-safe `py/unused-import` (priority 3 per IPP §8) — E02:S17 `release_metadata/` landing residuals + mirror pair.

| Action | Result |
| ------ | ------ |
| `ruff --fix F401` | **17** fixes — 10 in `packages/` + `greenfield-install/` `release_metadata/`; 7 in `scripts/` + `tests/` |
| `sync_greenfield_install.py --check` | in sync |
| pytest | `release_metadata` + `tests/release_state/` — **14 passed** |
| CQG | local monitor advisory (non-strict); `F401` proxy **0** post-fix |

**Operator verify (TC14):** **CLOSED** Wave 3a — post–Wave 2b dashboard shows **3** maintainability + **8** reliability @ `main` `f7d8b155` (down from Wave 1 **146**/**28**); Wave 2b unused-import remediation **verified** (residual installer-script findings remain).

---

## Wave 3 re-scan manifest (2026-06-08 — Wave 3a)

**Capture:** `main` @ **`f7d8b155`** (2026-06-08 11:45 UTC). Source: [Code Quality — Standard findings](https://github.com/RMS-Ltd/ai-dev-kit/security/quality) (`is:open`); code scanning `gh api` **0** open.

| Surface | Open count | Score | Delta vs Wave 2b (`v0.8.3.16+3`) | Delta vs Wave 2a (`4c4e9275`) |
| ------- | ---------- | ----- | -------------------------------- | ----------------------------- |
| [Code scanning](https://github.com/RMS-Ltd/ai-dev-kit/security/code-scanning) | **0** | 5 fixed | unchanged | unchanged |
| Standard — maintainability | **3** | **Good** | Wave 2b cleared `py/unused-import`; **3** residuals | score band held |
| Standard — reliability | **8** | **Good** | installer-script residuals under Good band | score band held |
| [AI findings](https://github.com/RMS-Ltd/ai-dev-kit/security/quality/ai-findings) | lag-accepted | — | T14 closure unchanged | — |

**Standard findings rule breakdown @ `f7d8b155` (11 rules, `is:open`):**

| UI rule label | CodeQL rule (approx.) | Open | Band | Wave 3b disposition |
| ------------- | --------------------- | ---- | ---- | ------------------- |
| 'except' clause does nothing | `py/empty-except` | **4** | Reliability | Fix — `install_kanban_framework.py` (×2) + `install_package_from_release.py` (×2 mirror) |
| Archive extraction | `py/tarslip` | **2** | Reliability | Fix — `install_package_from_release.py` `_safe_tar_extract` (×2 mirror) |
| Statement has no effect | `py/ineffectual-statement` | **1** | Maintainability | Fix — `ukw_syntax_parser.py` stray expr (×2 mirror) |
| Unused local variable | `py/unused-local-variable` | **2** | Maintainability | Fix — `import_legacy.py`, `run_notion_mcp_import.py` |
| **Subtotal maintainability** | — | **3** | **Good** | — |
| **Subtotal reliability** | — | **8** | **Good** | — |

**TC14 / Wave 2b verification note:** Operator confirms **17** unused-import fixes reflected; residual **11** standard findings are installer/CQG-targeted (not Wave 2b scope miss).

### Wave 3b remediation (2026-06-08)

**Theme:** Reliability-first burn-down per IPP §8 priority **#4** then maintainability **#3** — **11** targets from Wave 3a rule table.

| Rule | Fix | Files |
| ---- | --- | ----- |
| `py/empty-except` (×4) | `contextlib.suppress` | `install_kanban_framework.py` (×2 mirror) |
| `py/tarslip` (×2) | Per-member `tar.extract` after path validation | `install_package_from_release.py` (×2 mirror) |
| `py/empty-except` ImportError (×2) | `suppress(ImportError)` | `install_package_from_release.py` (×2 mirror) |
| `py/ineffectual-statement` (×1) | Remove stray path expression | `ukw_syntax_parser.py` (×2 mirror) |
| `py/unused-local-variable` (×2) | `_build` prefix; drop unused `batch` load | `import_legacy.py`, `run_notion_mcp_import.py` |

| Verification | Result |
| ------------ | ------ |
| `pytest tests/` | **521 passed**, 2 skipped |
| CQG (`validate_code_quality_gate.py`) | exit **0** (advisory threshold; non-strict) |
| `sync_greenfield_install.py --check` | in sync |
| Operator dashboard (TC18) | **CLOSED** post–3b @ `main` `635ae871` — see Wave 3 post-verify below |

### Wave 3 post–3b operator verify (2026-06-08)

**Capture:** `main` @ **`635ae871`** after Wave 3b merge. Source: [Code Quality](https://github.com/RMS-Ltd/ai-dev-kit/security/quality) / [`py/empty-except`](https://github.com/RMS-Ltd/ai-dev-kit/security/quality/rules/py%2Fempty-except).

| Surface | Open count | Score | Delta vs Wave 3a |
| ------- | ---------- | ----- | ---------------- |
| Standard — maintainability | **0** | **Excellent** | **Good → Excellent**; 3 → 0 |
| Standard — reliability | **2** | **Good** | 8 → 2 (`py/empty-except` stragglers) |
| [Code scanning](https://github.com/RMS-Ltd/ai-dev-kit/security/code-scanning) | **0** | — | unchanged |

**Residual rule:** `py/empty-except` × **2** — `install_kanban_framework.py` logger callback + `install_ux_version.py` `finally` `chdir` (repo grep; not in Wave 3b file list).

### Wave 3c remediation (2026-06-08)

**Theme:** Clear remaining `py/empty-except` per [rule page](https://github.com/RMS-Ltd/ai-dev-kit/security/quality/rules/py%2Fempty-except).

| File | Fix |
| ---- | --- |
| `install_kanban_framework.py` | `suppress(Exception)` on `INSTALL_LOGGER` callback (×2 mirror) |
| `install_ux_version.py` | `suppress(Exception)` on `os.chdir` restore (×2 mirror) |
| `create_github_release.py` | `suppress(Exception)` on `.env.local` parse (×2 mirror) |
| `scripts/notion_migration_manifest.py` | `suppress(FileNotFoundError)` when `rg` missing |

| Verification | Result |
| ------------ | ------ |
| `pytest tests/` | **521 passed** |
| `sync_greenfield_install.py --check` | in sync |
| Operator dashboard | **Pending** post–3c merge |

**Cross-lane notes:**

- **T15:** CI green on `main` @ `4c4e9275` (PR #41 merge path); merge gate **lifted** for T16 code waves.
- **T12/T13:** operator **Good/Good** @ `ed379ab`; finite backlogs **COMPLETE**.
- **T14:** lag-accepted AI groups; panel refresh optional Wave 2b theme 1.
- **T17 (CQG):** local gate run before Wave 2b RW; report cited in changelog.

---

## Coordination matrix (T12–T17 vs T16)

| Task | Surface | Status | T16 may remediate? |
| ---- | ------- | ------ | ------------------ |
| **T12** / BR-099 | Standard — maintainability | **COMPLETE** — **Good** @ `ed379ab` | Residuals → T16 |
| **T13** / BR-100 | Standard — reliability | **COMPLETE** — **Good** @ `ed379ab` | Residuals → T16 |
| **T14** / BR-101 | AI findings panel (lag-accepted) | **COMPLETE** @ v0.8.3.14+5 | T16 theme 1 refresh |
| **T15** / FR-112 | [Actions](https://github.com/RMS-Ltd/ai-dev-kit/actions) CI | **IN PROGRESS** — green @ `4c4e9275` | **No** — separate lane |
| **T16** | Code scanning + perpetual dashboard hygiene | **IN PROGRESS** | **Yes** |
| **T17** / FR-113 | Local CQG complement | IN PROGRESS | Cross-ref only |

**Handoff:** T12–T14 **COMPLETE** → T16 Wave 2+ per [IPP §8](../../../../implementation-cycles/IPP-E08S03T16-github-security-code-quality-health-perpetual-fr112.md).

---

## Acceptance criteria

- [x] **AC1:** Task doc exists with `Task Type: Perpetual Maintenance` and security dashboard URLs as SoT.
- [x] **AC2:** Scope boundary with **E08:S03:T15** and **T12–T14** handoff table documented.
- [x] **AC3:** FR-112 bidirectional link; Story 003 checklist and `kboard.md` O-band wired.
- [x] **AC4:** First attributed RW records baseline open counts on `main` (code scanning + code quality) — **v0.8.3.16+1** @ `777e956`.
- [x] **AC5 (Wave 1 re-scan):** Wave 1 manifest @ `f6aa4dca` recorded with rule breakdown + cross-lane deltas ([IPP §4 Wave 1 re-scan](../../../../implementation-cycles/IPP-E08S03T16-github-security-code-quality-health-perpetual-fr112.md)).
- [x] **AC6 (Wave 2a):** Wave 2 manifest @ `4c4e9275` with delta vs Wave 1 + T12 Good; shipped **v0.8.3.16+2** (docs-only).
- [x] **AC7 (Wave 2b):** First themed remediation RW — **17** `py/unused-import` autofix; pytest green; greenfield `--check` OK; **TC14 closed** Wave 3a.
- [x] **AC8 (Wave 3a):** Wave 3 manifest **3** M + **8** R @ `f7d8b155`; shipped **v0.8.3.16+4** (docs-only).
- [x] **AC9 (Wave 3b):** Reliability-first burn-down of **11** residuals shipped **v0.8.3.16+5**; CQG + pytest green; **TC18 closed** — **Excellent** M / **Good** R, **2** `py/empty-except` @ `635ae871`.
- [x] **AC10 (Wave 3c):** Final `py/empty-except` stragglers shipped **v0.8.3.16+6**; pytest green; operator post-merge verify **pending**.

---

## References

- [IPP-E08S03T16](../../../../implementation-cycles/IPP-E08S03T16-github-security-code-quality-health-perpetual-fr112.md)
- [FR-112](../../../fr-br/FR-112-perpetual-github-ci-and-security-health-lanes.md)
- [E08:S03:T15 — GitHub Actions CI health (Perpetual)](T15-github-actions-ci-health-perpetual-fr112.md)
- [E08:S03:T12 — BR-099 maintainability backlog](T12-code-quality-maintainability-backlog-br099.md)
- [E08:S03:T13 — BR-100 reliability backlog](T13-code-quality-reliability-backlog-br100.md)
- [E08:S03:T14 — BR-101 AI suggestions backlog](T14-code-quality-ai-suggestions-backlog-br101.md)
- [Code scanning](https://github.com/RMS-Ltd/ai-dev-kit/security/code-scanning)
- [Code Quality](https://github.com/RMS-Ltd/ai-dev-kit/security/quality)
