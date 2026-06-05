---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T23:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Bug Report BR-100: GitHub Code Quality — reliability findings backlog (34 open)

**Bug ID:** BR-100  
**Priority:** HIGH  
**Severity:** HIGH — Code Quality **Reliability** score **Needs Improvement**; **34** open standard findings on `main` (2026-06-05 re-scan; was **133** @ `5fcf102`).  
**Status:** IN PROGRESS  
**Created:** 2026-06-05  
**Last updated:** 2026-06-05 (v0.8.3.13+3 — wave-2 remediation shipped; **6** findings fixed; **28** expected open post-re-scan)  
**Version:** v0.8.3.13+3  
**Implementing Task:** [E08:S03:T13](../epics/epic-08/story-03-automation-scripts/T13-code-quality-reliability-backlog-br100.md)  
**Related:** [Security & quality — Standard findings](https://github.com/RMS-Ltd/ai-dev-kit/security/quality) · [BR-099](BR-099-code-quality-maintainability-backlog.md) · [BR-101](BR-101-code-quality-ai-suggestions-backlog.md)

---

## Summary

GitHub **Code Quality** reported **133 open reliability findings** on `main` (`5fcf102`), with Reliability rated **Needs Improvement**. Wave-1 remediation (**v0.8.3.13+1**) reduced open count to **34** on re-scan (`cadb0c3`, −74.4%); score remains **Needs Improvement**. Residual findings likely include wave-2/3 rules deferred from wave 1.

---

## Problem Description

### Observed behavior (GitHub Code Quality dashboard, 2026-06-05)

- **Location:** [Security & quality → Code quality → Standard findings](https://github.com/RMS-Ltd/ai-dev-kit/security/quality)
- **Filter:** `is:open`
- **Reliability:** **Needs Improvement** — **133 findings**
- **Scan ref:** `main` @ `5fcf102`

### Top rule groups (reliability wave 1)

| Rule (display name) | CodeQL id (approx.) | Risk |
| ------------------- | ------------------- | ---- |
| Empty except | `py/empty-except` | Swallows errors silently |
| File is not always closed | `py/file-not-closed` | Resource leaks |
| Use of `exit()` or `quit()` | `py/use-of-exit-or-quit` | Abrupt termination in library code |
| Wrong number of arguments in a call | `py/call/wrong-arguments` | Runtime `TypeError` |
| Except block handles `BaseException` | `py/catch-base-exception` | Catches `KeyboardInterrupt` / `SystemExit` |
| Explicit returns mixed with implicit returns | `py/mixed-returns` | Inconsistent `None` returns |
| Variable defined multiple times | `py/multiple-definition` | Shadowing / dead code paths |

*(Additional reliability rules may appear below the dashboard fold.)*

### Root cause

- Exception and resource-handling patterns in workflow scripts and tests not audited against CodeQL reliability queries.
- Buildless CodeQL analysis flags conservative false positives in CLI `main` blocks — triage required before bulk autofix.

### Impact

- Reliability score **Needs Improvement** — highest-visibility quality deficit on dashboard.
- Latent runtime failures in automation scripts (RW/UKW validators, installers).
- Blocks credible **Good** overall Code Quality posture until burn-down progresses.

---

## Fix attempt (2026-06-05)

**Change implemented:** Wave-1 surgical remediation per [IPP-E08S03T13](../../../implementation-cycles/IPP-E08S03T13-code-quality-reliability-backlog-br100.md) — empty-except (`pass` handlers → `del _suppressed_exc`), file-not-closed (`_ENV_LOG_FH` → per-write `with open` + `suppress`), bare `except:` → typed exceptions. **60** Python files; `pytest tests/` **396 passed**.

**Verification:** Local AST scan post-wave: **0** pass-only handlers, **0** bare except, **0** assign-open leaks.

**Dashboard re-scan (2026-06-05):** [Standard findings](https://github.com/RMS-Ltd/ai-dev-kit/security/quality) — **34** open reliability @ `main` `cadb0c3` (was **133**); score **Needs Improvement** (unchanged). Wave-2 triage on **34** residuals required for **Fair**+.

**Wave-2 attempt (2026-06-05):** Per [IPP-E08S03T13 §4.1](../../../implementation-cycles/IPP-E08S03T13-code-quality-reliability-backlog-br100.md) — fixed **6** in-scope findings (`py/mixed-returns` ×4, `py/call/wrong-arguments` ×2) across 6 files; **28** deferred (16 `py/print-during-import` → T12, 12 `py/use-of-exit-or-quit` → wave 3). `pytest tests/` **406 passed**. Dashboard re-scan pending post-merge.

---

## Acceptance criteria

- [x] **AC1 — Baseline manifest:** Export open reliability finding counts by rule + file hotspots; attach to task doc with `main` SHA.
- [x] **AC2 — Triage:** Classify each wave-1 rule group as **fix**, **false-positive waive** (with comment), or **defer** (with rationale).
- [x] **AC3 — Wave 1 fixes:** Remediate all confirmed true positives in wave-1 rule groups; no new reliability regressions in CI.
- [ ] **AC4 — Score improvement:** Reliability improves from **Needs Improvement** to **Fair** or better (or documented GitHub scoring lag).
- [ ] **AC5 — Kanban wiring:** **BR-100** ↔ **E08:S03:T13** linked; released via RW when wave completes.

---

## Remediation waves (prescribed)

| Wave | Scope | Notes |
| ---- | ----- | ----- |
| **1** | True-positive bugs | empty except, file-not-closed, wrong-arguments |
| **2** | Exception policy | BaseException catches, mixed returns — align with project exception guidelines |
| **3** | CLI patterns | `exit()`/`quit()` in scripts — convert to `sys.exit(main())` pattern or document CLI-only waiver |

---

## Intake Decision

**Intake Status:** ACCEPTED  
**Intake Date:** 2026-06-05  
**Assigned To:** Epic 8 / Story 3 / **E08:S03:T13**
