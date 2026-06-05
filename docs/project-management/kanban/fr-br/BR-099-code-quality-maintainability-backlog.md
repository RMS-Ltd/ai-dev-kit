---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T23:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Bug Report BR-099: GitHub Code Quality — maintainability findings backlog (560 open)

**Bug ID:** BR-099  
**Priority:** MEDIUM  
**Severity:** MEDIUM — Code Quality **Maintainability** score **Fair**; **560** open standard findings on `main` (2026-06-05).  
**Status:** IN PROGRESS  
**Created:** 2026-06-05  
**Last updated:** 2026-06-05 (v0.8.3.12+1 — wave-1 attempted fix released; dashboard re-scan pending)  
**Version:** v0.8.3.12+1  
**Implementing Task:** [E08:S03:T12](../epics/epic-08/story-03-automation-scripts/T12-code-quality-maintainability-backlog-br099.md)  
**Related:** [Security & quality — Standard findings](https://github.com/RMS-Ltd/ai-dev-kit/security/quality) · [BR-100](BR-100-code-quality-reliability-backlog.md) · [BR-101](BR-101-code-quality-ai-suggestions-backlog.md) · [BR-094](BR-094-codeql-git-tag-handler-syntax-error.md)–[BR-098](BR-098-codeql-missing-workflow-permissions.md) (code-scanning security; separate sidebar)

---

## Summary

GitHub **Code Quality** full-repo CodeQL scan reports **560 open maintainability findings** on `main` (`5fcf102`), depressing the Maintainability score to **Fair**. This umbrella BR tracks phased remediation; wave 1 targets high-volume, low-risk hygiene rules.

---

## Problem Description

### Observed behavior (GitHub Code Quality dashboard, 2026-06-05)

- **Location:** [Security & quality → Code quality → Standard findings](https://github.com/RMS-Ltd/ai-dev-kit/security/quality)
- **Filter:** `is:open`
- **Maintainability:** **Fair** — **560 findings**
- **Scan ref:** `main` @ `5fcf102`

### Top rule groups (maintainability wave 1)

| Rule (display name) | CodeQL id (approx.) | Remediation theme |
| ------------------- | ------------------- | ----------------- |
| Unused import | `py/unused-import` | Remove or use imports; run `ruff` / autofix where safe |
| Unused local variable | `py/unused-local-variable` | Remove dead assignments; prefix `_` if intentional |
| Unused global variable | `py/unused-global-variable` | Remove module-level dead state |
| Module imported with `import` and `import from` | `py/import-and-import-from` | Consolidate import style per module |
| Module imported more than once | `py/repeated-import` | Deduplicate imports |
| Unnecessary pass | `py/unnecessary-pass` | Remove no-op `pass` |
| Unnecessary lambda | `py/unnecessary-lambda` | Replace trivial lambdas with direct references |
| Print at module level | `py/print-during-import` | Move to `main` guard or logging |

*(Additional maintainability rules exist below the dashboard fold; wave 2+ after wave 1 burn-down.)*

### Root cause

- Large Python corpus (`packages/`, `tests/`, `greenfield-install/` mirror) scanned buildlessly by CodeQL quality suite.
- No prior systematic Code Quality burn-down after GitHub Code Quality enablement (2026-06-04).
- Hygiene drift accumulates in scripts, tests, and vendored install trees.

### Impact

- Maintainability score stuck at **Fair** on the public Security & quality dashboard.
- Noise obscures higher-signal reliability findings ([BR-100](BR-100-code-quality-reliability-backlog.md)).
- Future PR quality gates (rulesets) risk blocking merges if thresholds tighten.

---

## Attempted fix (2026-06-05)

**Change implemented:** Wave-1 hygiene burn-down via `ruff` autofix (F401, F841, I001, F811) across `packages/`, `tests/`, `scripts/`, `cli/`, and `greenfield-install/` (406 files). Manual cleanup on 13 edge-case unused imports. Added `ruff>=0.8.0` to `setup.py` dev extras.

**Local verification:** `pytest tests/` — 396 passed; workflow-scripts gate — 116 passed; ruff wave-1 proxy rules — 0 remaining (937 → 0).

**Not yet verified:** GitHub Code Quality dashboard open-count delta and Maintainability score after merge to `main` (Code Quality API separate from `code-scanning/alerts`).

---

## Acceptance criteria

- [x] **AC1 — Baseline manifest:** Snapshot in [E08:S03:T12 task doc](../epics/epic-08/story-03-automation-scripts/T12-code-quality-maintainability-backlog-br099.md) (560 open @ `5fcf102`).
- [x] **AC2 — Wave 1 burn-down (partial):** Wave-1 rule groups remediated locally; ≥50% dashboard reduction **pending** post-merge re-scan.
- [ ] **AC3 — Score improvement:** Maintainability score **Good**+ pending dashboard re-scan (or lag documentation).
- [x] **AC4 — No regressions:** `pytest` + workflow-scripts gate green locally.
- [ ] **AC5 — Kanban wiring:** Linked; release via **RW E08:S03:T12** when dashboard ACs confirmed.

---

## Remediation waves (prescribed)

| Wave | Scope | Target rules |
| ---- | ----- | ------------ |
| **1** | Autofix-safe hygiene | unused import/variable, unnecessary pass/lambda, import duplication |
| **2** | Script/test cleanup | print-at-module-level, remaining maintainability fold rules |
| **3** | `greenfield-install/` mirror | Align mirrored tree or exclude from quality scope per policy |

---

## Intake Decision

**Intake Status:** ACCEPTED  
**Intake Date:** 2026-06-05  
**Assigned To:** Epic 8 / Story 3 / **E08:S03:T12**
