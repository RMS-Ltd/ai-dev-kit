---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T23:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Bug Report BR-101: GitHub Code Quality — AI suggestions backlog (14 open)

**Bug ID:** BR-101  
**Priority:** LOW  
**Severity:** LOW — **17** open AI-powered Code Quality suggestions across **5** file groups (2026-06-05 GH UI).  
**Status:** RESOLVED (lag-accepted closure — dashboard refresh may lag)  
**Created:** 2026-06-05  
**Last updated:** 2026-06-06 (terminal closure **v0.8.3.14+5**)  
**Version:** v0.8.3.14+5  
**Implementing Task:** [E08:S03:T14](../epics/epic-08/story-03-automation-scripts/T14-code-quality-ai-suggestions-backlog-br101.md)  
**Related:** [Security & quality — Standard findings](https://github.com/RMS-Ltd/ai-dev-kit/security/quality) (AI suggestions panel) · [BR-099](BR-099-code-quality-maintainability-backlog.md) · [BR-100](BR-100-code-quality-reliability-backlog.md)

---

## Summary

GitHub **Code Quality** surfaces **AI-powered suggestions** grouped by **file path** on recently changed files (GH UI shows no `#` row numbers). These supplement deterministic CodeQL standard findings and should be triaged, applied, or dismissed with rationale. Operator index: task doc **AID** tokens (**AI-GFI-CONTAM**, **AI-SEMVER**, **AI-SYNC-GFI**, **AI-PORTAL-BR068**, **AI-VENDOR-TREE**).

---

## Problem Description

### Observed behavior (GitHub Code Quality dashboard, 2026-06-05)

- **Location:** [Security & quality → AI findings](https://github.com/RMS-Ltd/ai-dev-kit/security/quality/ai-findings) — **Suggestions powered by AI** panel (UI only; not in `code-scanning/alerts` API)
- **Count:** **17 findings** (2026-06-05 GH UI; was **14** @ `cadb0c3` re-scan)
- **Scope:** Recently pushed files on default branch (LLM-assisted analysis beyond CodeQL rule suite)

### Root cause

- AI suggestions are generated automatically on recent merges; no triage workflow existed before this intake.
- Suggestions may overlap with [BR-099](BR-099-code-quality-maintainability-backlog.md) / [BR-100](BR-100-code-quality-reliability-backlog.md) or propose net-new improvements.

### Impact

- Low immediate risk (14 items vs 693 standard findings).
- Unresolved suggestions accumulate and appear on dashboard **Take action** callouts.
- Missed easy wins if suggestions are valid and low-effort.

---

## Acceptance criteria

- [ ] **AC1 — Inventory:** List all 14 AI suggestions (file, summary, suggested action) in task doc with capture date.
- [ ] **AC2 — Triage:** Each suggestion marked **apply**, **dismiss** (with reason), or **merge into BR-099/100** (duplicate).
- [ ] **AC3 — Apply valid fixes:** Implemented suggestions merged; CI green.
- [ ] **AC4 — Dashboard clear:** AI suggestions panel shows 0 open items (or only explicitly waived with GitHub dismiss).
- [ ] **AC5 — Kanban wiring:** **BR-101** ↔ **E08:S03:T14** linked; released via RW when complete.

---

## Attempted Fixes

**2026-06-05 — E08:S03:T14 (unreleased):**

- Inventoried 14 AI findings from [ai-findings panel](https://github.com/RMS-Ltd/ai-dev-kit/security/quality/ai-findings).
- Applied 12 code/doc fixes (semver_converter, sync_greenfield_install, contamination tests/detector, portal link tests); dismissed 2 (version.py dataclass — RW contract; sync `rglob` — no benefit).
- Targeted pytest: 7 passed.
- **Released:** **v0.8.3.14+1** via **`RW E08:S03:T14 --art`**.
- **Pending (superseded):** GH AI panel has **no dismiss** control — doc waiver only.

**Dashboard re-scan B (2026-06-05, operator GH UI):** [AI findings](https://github.com/RMS-Ltd/ai-dev-kit/security/quality/ai-findings) — **17** open across 5 file groups. **AI-VENDOR-TREE** (`tests/workflow_mgt/test_verify_vendor_tree.py`, 4) is new post wave-1. `version.py` (R11) no longer listed.

**Post-merge (2026-06-05):** Operator merged to `main` @ `f6aa4dca` and pushed. **F-SYNC-01/03** fixes verified on `main`; GH AI panel has **no dismiss** control — refresh lag expected. **Released:** **v0.8.3.14+3** via **`RW E08:S03:T14 -k --art`**; **v0.8.3.14+4** FBU verification via **`RW E08:S03:T14 --art`**.

**Wave-2b (2026-06-05, unreleased):**

- **AI-VENDOR-TREE:** 4/4 **apply** — pytest module fixture, `sys.modules` preflight for `adk_install_errors`, assertion messages, `_write_stub_scripts` helper in `tests/workflow_mgt/test_verify_vendor_tree.py`.
- **F-SYNC-02:** **Branch A (leave)** — `rglob("*")` unchanged; doc waiver per wave-1 triage.
- **Re-scan D** in task doc @ working tree `f3bd95d`; lag-accepted path documented for stale shipped groups.
- **Released:** **v0.8.3.14+5** via **`RW E08:S03:T14 --art`** — lag-accepted closure; **E08:S03:T14** **COMPLETE**. Ongoing AI monitoring → **E08:S03:T16** (FR-112) after T12 sign-off.

## Resolution

**Attempted resolution (2026-06-06):** Wave-1 **12/14** apply + wave-2b **AI-VENDOR-TREE** 4/4 apply + **F-SYNC-02** doc waiver. GH AI panel has no dismiss control; stale rows for shipped fixes accepted per task-doc lag policy. Operator may re-verify 0-open after GH re-analysis; use **T16** perpetual lane for drift.

---

## Intake Decision

**Intake Status:** ACCEPTED  
**Intake Date:** 2026-06-05  
**Assigned To:** Epic 8 / Story 3 / **E08:S03:T14**
