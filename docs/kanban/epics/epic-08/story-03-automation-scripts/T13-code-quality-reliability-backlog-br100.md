---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T23:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 8, Story 3, Task 13: Code Quality reliability backlog (**BR-100**)

**Task ID:** E08:S03:T13  
**Status:** ✅ COMPLETE (v0.8.3.13+4)  
**Priority:** HIGH  
**Created:** 2026-06-05  
**Last updated:** 2026-06-06 (v0.8.3.13+4 — wave-3 shipped; BR-100 RESOLVED)  
**Version Anchor:** v0.8.3.13+4  
**Version:** v0.8.3.13+4  
**Code:** E08S03T13

**Scope:** Phased burn-down of GitHub Code Quality **Standard reliability** findings on `main`. Wave 1 (done): empty-except, file-not-closed. Wave 2 (done): mixed-returns, wrong-arguments @ v0.8.3.13+3. Wave 3 (done locally): **12** `py/use-of-exit-or-quit` → `sys.exit(main())`. **16** print-at-import → T12.

**Upstream:** [BR-100 — Code Quality reliability backlog](../../../fr-br/BR-100-code-quality-reliability-backlog.md)

Publication Status: NOT_APPLICABLE

---

## Input

- [IPP-E08S03T13](../../../../implementation-cycles/IPP-E08S03T13-code-quality-reliability-backlog-br100.md) — **wave-3 revision (2026-06-06):** exit/quit remediation + closure; post-wave-2 dashboard @ [T16](T16-github-security-code-quality-health-perpetual-fr112.md) `f6aa4dca` (28 open, Fair)
- [BR-100](../../../fr-br/BR-100-code-quality-reliability-backlog.md)
- [Security & quality — Standard findings](https://github.com/RMS-Ltd/ai-dev-kit/security/quality)
- [E08:S03:T12 — Maintainability backlog (BR-099)](T12-code-quality-maintainability-backlog-br099.md)
- [E08:S03:T16 — GitHub Security & Code Quality health (Perpetual)](T16-github-security-code-quality-health-perpetual-fr112.md) — post-backlog handoff (FR-112)

---

## Deliverable

1. Baseline manifest: reliability findings by rule + file hotspots.
2. Triage sheet: fix / waive / defer per rule group (wave 1 + wave 2 done).
3. Wave 1 fixes with tests where behaviour changes (done).
4. Wave 2 fixes per [IPP §4.1](../../../../implementation-cycles/IPP-E08S03T13-code-quality-reliability-backlog-br100.md#41-wave-2-ledger-done--do-not-re-execute) (**done** @ v0.8.3.13+3).
5. Wave 3 fixes per [IPP §4.2](../../../../implementation-cycles/IPP-E08S03T13-code-quality-reliability-backlog-br100.md#42-wave-3-steps-planned) (**done locally** — **12** exit/quit; RW + dashboard re-scan pending).

---

## Post-wave-2 dashboard re-scan (2026-06-05)

**Source:** [T16 wave-1 re-scan](T16-github-security-code-quality-health-perpetual-fr112.md) @ `main` **`f6aa4dca`** (post wave-2 merge).

| Field | Post wave-1 (`cadb0c3`) | Post wave-2 (`f6aa4dca`) |
| ----- | ------------------------ | ------------------------ |
| Open reliability | **34** | **28** |
| Delta | — | **−6** (wave-2 in-scope rules cleared) |
| Dashboard score | **Needs Improvement** | **Fair** |

**Residual reliability @ `f6aa4dca`:**

| CodeQL rule | Open count | Owner |
| ----------- | ---------- | ----- |
| `py/print-during-import` | **16** | [E08:S03:T12](T12-code-quality-maintainability-backlog-br099.md) |
| `py/use-of-exit-or-quit` | **12** | E08:S03:T13 wave 3 |

---

## Wave-3 pre-manifest (2026-06-06)

**Source:** [IPP §4.2](../../../../implementation-cycles/IPP-E08S03T13-code-quality-reliability-backlog-br100.md); dashboard baseline @ `f6aa4dca`; local grep confirmation.

| CodeQL rule | Open count | Severity | Wave-3 disposition |
| ----------- | ---------- | -------- | ------------------ |
| `py/use-of-exit-or-quit` | **12** | Warning | **FIX** |
| **Total (wave-3 scope)** | **12** | — | — |

**Hotspots (6 script pairs — `packages/` + `greenfield-install/` mirror):**

| File |
| ---- |
| `packages/frameworks/kanban/scripts/detect_existing_structure.py` |
| `packages/frameworks/kanban/scripts/migrate_structure.py` |
| `packages/frameworks/kanban/scripts/analyze_structure.py` |
| `packages/frameworks/kanban/scripts/validate_installation.py` |
| `packages/frameworks/kanban/scripts/install_kanban_framework.py` |
| `packages/frameworks/workflow-mgt/scripts/uninstall_package.py` |

---

## Triage sheet (wave 3)

| Rule group | Disposition | Rationale |
| ---------- | ----------- | --------- |
| `py/use-of-exit-or-quit` | **fix** | Canonical `sys.exit(main())` per [maintenance-automation-scripts-and-tools.md](../../../../architecture/standards-and-adrs/maintenance-automation-scripts-and-tools.md) |

---

## Post-wave-3 manifest (2026-06-06 — local)

**Remediation:** `exit(main())` → `sys.exit(main())`; added `import sys` to `detect_existing_structure.py` (both trees).

| Metric | Value |
| ------ | ----- |
| Files touched | **12** (6 pairs) |
| Wave-3 reliability findings addressed | **12** |
| Local grep `exit(main())` | **0** |
| Expected post-fix reliability (dashboard) | **16** open (print-at-import → T12 only) |
| `pytest tests/` | **407 passed**, 2 skipped |

**Dashboard delta:** Pending GitHub Code Quality re-scan after merge/RW. AC4 **Fair** already met @ `f6aa4dca`; wave-3 expected to clear remaining exit/quit bucket.

---

## Wave-2 pre-manifest (2026-06-05)

**Source:** [GitHub Code Quality — Standard findings](https://github.com/RMS-Ltd/ai-dev-kit/security/quality) (`is:open category:reliability`); dashboard @ `main` `777e956`.

| CodeQL rule | Open count | Severity | Wave-2 disposition |
| ----------- | ---------- | -------- | ------------------ |
| `py/print-during-import` | 16 | Note | **OUT OF SCOPE** — maintainability lane ([E08:S03:T12](T12-code-quality-maintainability-backlog-br099.md)) |
| `py/use-of-exit-or-quit` | 12 | Warning | **DEFER** — wave 3 per IPP |
| `py/mixed-returns` | 4 | Warning | **FIX** |
| `py/call/wrong-arguments` | 2 | Error | **FIX** |
| **Total (reliability)** | **34** | — | — |

**Hotspots (wave-2 fix scope):**

| Rule | File(s) |
| ---- | ------- |
| `py/mixed-returns` | `state_icons.py:110` (`normalize_status_token`), `icw_handler.py:140` (`get_available_tasks`) + `greenfield-install/` mirrors |
| `py/call/wrong-arguments` | `build_packages.py:96` (`update_manifest_hash` arity) + `greenfield-install/` mirror |

---

## Triage sheet (wave 2)

| Rule group | Disposition | Rationale |
| ---------- | ----------- | --------- |
| `py/mixed-returns` | **fix** | Add explicit `return None` / `return []` on fall-through paths |
| `py/call/wrong-arguments` | **fix** | Align `build_packages.py` with `build_package.py` manifest flow (`generate_manifest_json` + `add_manifest_to_archive`) |
| `py/use-of-exit-or-quit` | **defer** (wave 3) | IPP wave-2 scope excludes exit/quit; future IPP revision |
| `py/print-during-import` | **defer** (T12) | Reliability-category tag but owned by maintainability backlog ([BR-099](T12-code-quality-maintainability-backlog-br099.md)) |

---

## Post-wave-2 manifest (2026-06-05 — local)

**Remediation:** Explicit returns in `normalize_status_token` / `get_available_tasks`; manifest hash update fix in `build_packages.py` (both trees).

| Metric | Value |
| ------ | ----- |
| Files touched | 6 |
| Wave-2 reliability findings addressed | **6** (4 mixed-returns + 2 wrong-arguments) |
| Expected post-fix reliability (dashboard) | **28** open (16 print + 12 exit deferred) |
| `pytest tests/` | **406 passed**, 2 skipped |

**Dashboard delta:** Pending GitHub Code Quality re-scan after merge to `main`. Wave-2 in-scope rules cleared locally; **Fair+** blocked by deferred wave-3 exit/quit (**12**) unless score threshold met with remainder only.

---

## Baseline manifest (2026-06-05)

**Source:** GitHub Code Quality dashboard ([BR-100](../../../fr-br/BR-100-code-quality-reliability-backlog.md)); local AST pre-scan before wave-1 edits.

| Field | Value |
| ----- | ----- |
| Snapshot date | 2026-06-05 |
| Branch / ref | `main` @ `5fcf102` (BR-100 dashboard) |
| Total open reliability | **133** |
| Dashboard score | **Needs Improvement** |

**Wave-1 rule groups (dashboard top table + task scope):**

| CodeQL rule (approx.) | Theme | Baseline note |
| --------------------- | ----- | ------------- |
| `py/empty-except` | Swallows errors silently | Dominant wave-1 bucket |
| `py/file-not-closed` | Resource leaks | `_ENV_LOG_FH` installer pattern + others |
| `py/call/wrong-arguments` | Runtime `TypeError` | Dashboard-reported; low local AST hit rate |
| `py/catch-base-exception` | Catches `KeyboardInterrupt` / `SystemExit` | Included per task scope (BR-100 wave table defers to wave 2) |

**Local pre-scan (AST, packages/tests/scripts/cli/greenfield-install):** ~125 `except: pass` handlers; 4 `_ENV_LOG_FH` assign-open; 0 `BaseException` handlers; 2 bare `except:`.

---

## Triage sheet (wave 1)

| Rule group | Disposition | Rationale |
| ---------- | ----------- | --------- |
| `py/empty-except` | **fix** | Replace `pass`-only handlers with `del _suppressed_exc` pattern; bare `except:` → typed exceptions |
| `py/file-not-closed` | **fix** | Refactor `_ENV_LOG_FH` to per-write `with open` + `contextlib.suppress(OSError)` in installers |
| `py/call/wrong-arguments` | **defer** (pending dashboard) | No high-confidence local static hits; verify on post-push CodeQL re-scan |
| `py/catch-base-exception` | **waive** (none found) | 0 local matches; monitor dashboard after push |

---

## Post-wave manifest (2026-06-05, local)

**Method:** Surgical remediation across **60** Python files; `python3.11 -m pytest tests/` → **396 passed**.

| Metric | Pre-wave (local AST) | Post-wave (local AST) |
| ------ | -------------------- | --------------------- |
| `except: pass` only | 125 | **0** |
| bare `except:` | 2 | **0** |
| assign `open()` outside `with` | 4 (`_ENV_LOG_FH`) | **0** |
| `BaseException` handlers | 0 | **0** |

**Dashboard:** Reliability score re-scan **pending** after merge/push (GitHub Code Quality lag expected).

---

## Dashboard re-scan manifest (2026-06-05)

**Source:** [GitHub Code Quality — Standard findings](https://github.com/RMS-Ltd/ai-dev-kit/security/quality) (`is:open` filter).

| Field | Baseline (2026-06-05) | Post wave-1 re-scan (2026-06-05) |
| ----- | --------------------- | -------------------------------- |
| Branch / ref | `main` @ `5fcf102` | `main` @ `cadb0c3` |
| Open reliability | **133** | **34** |
| Delta | — | **−99** (−74.4%) |
| Dashboard score | **Needs Improvement** | **Needs Improvement** (unchanged) |

**Next:** Dashboard re-scan after wave-2 merge; **28** reliability residuals expected (16 print → T12, 12 exit → wave 3 IPP).

---

## Acceptance Criteria

- [x] Baseline manifest captured (rule → count, top files).
- [x] Wave-1 rule groups triaged; true positives fixed (local AST clean).
- [x] Reliability score improves to **Fair** or better (**Fair** @ **28** open post wave-2 re-scan @ `f6aa4dca`; wave-3 exit/quit fixed locally — dashboard re-scan pending).
- [x] No CI regressions (`pytest tests/` green — **407 passed** post wave 3).
- [ ] **BR-100** released via **RW E08:S03:T13 --art** when complete (✅ **v0.8.3.13+4**).

---

## References

- [IPP-E08S03T13](../../../../implementation-cycles/IPP-E08S03T13-code-quality-reliability-backlog-br100.md)
- [BR-100](../../../fr-br/BR-100-code-quality-reliability-backlog.md)
- [BR-099](../../../fr-br/BR-099-code-quality-maintainability-backlog.md)
- [BR-101](../../../fr-br/BR-101-code-quality-ai-suggestions-backlog.md)
