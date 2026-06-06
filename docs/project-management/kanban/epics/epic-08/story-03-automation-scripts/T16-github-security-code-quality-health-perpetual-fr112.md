---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T16:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E08:S03:T16 — GitHub Security & Code Quality Health (Perpetual)

**Task ID:** E08:S03:T16  
**Status:** IN PROGRESS — **DEFERRED** (awaiting **E08:S03:T12** operator sign-off; **T13**/**T14** **COMPLETE**)  
**Priority:** HIGH  
**Estimated Effort:** Medium (ongoing)  
**Created:** 2026-06-05  
**Last updated:** 2026-06-06 (UKW — T13 @ v0.8.3.13+4, T14 @ v0.8.3.14+5; deferral narrowed to T12)  
**Version Anchor:** v0.8.3.16+1  
**Code:** E08S03T16  
**Task Type:** Perpetual Maintenance

**Perpetual Override Rationale:** GitHub Security/Code Quality perpetual lane under Epic 8 Story 3 per FR-112; complements E02:S16 workflow perpetual lanes without conflating CI/security dashboard ownership.

**Upstream:** [FR-112 — Perpetual GitHub CI and security health lanes](../../../fr-br/FR-112-perpetual-github-ci-and-security-health-lanes.md)

Publication Status: NOT_APPLICABLE

---

## Input

- [IPP-E08S03T16](../../../../../implementation-cycles/IPP-E08S03T16-github-security-code-quality-health-perpetual-fr112.md)
- [FR-112](../../../fr-br/FR-112-perpetual-github-ci-and-security-health-lanes.md)
- [E08:S03:T15 — Actions CI (Perpetual)](T15-github-actions-ci-health-perpetual-fr112.md) — merge gate owner
- [IPP-E08S03T12](../../../../../implementation-cycles/IPP-E08S03T12-code-quality-maintainability-backlog-br099.md) · [IPP-E08S03T13](../../../../../implementation-cycles/IPP-E08S03T13-code-quality-reliability-backlog-br100.md) · [IPP-E08S03T14](../../../../../implementation-cycles/IPP-E08S03T14-code-quality-ai-suggestions-backlog-br101.md)

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

**Postpone all T16 waves** (re-scans, remediation RWs, manifest-only releases) until **E08:S03:T12**, **T13**, and **T14** reach operator **sign-off** (COMPLETE + dashboard verification).

**Rationale:** T12–T14 exist to **burn down the finite backlog** (maintainability, reliability, AI suggestions) so residual open counts are **manageable** before T16 assumes perpetual hygiene. T16 Wave 0 baseline + Wave 1 re-scan manifest are **record-only**; no further T16 work until handoff.

| Allowed during deferral | Blocked until T12–T14 sign-off |
| ----------------------- | ------------------------------ |
| Read-only dashboard cross-refs in sibling task docs | `RW E08:S03:T16` (any BUILD) |
| Net-new **HIGH** CodeQL **security** alerts → dedicated BR + task (BR-094 pattern), then return here | Standard-finding / AI remediation waves |
| — | Periodic re-scan manifest updates on T16 |

**Resume trigger:** Operator confirms **T12 + T13 + T14** COMPLETE → T16 Wave 2+ per [IPP §4](../../../../../implementation-cycles/IPP-E08S03T16-github-security-code-quality-health-perpetual-fr112.md).

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

## Coordination matrix (T12–T14 vs T16)

| Task | Surface | Status | T16 may remediate? |
| ---- | ------- | ------ | ------------------ |
| **T12** / BR-099 | Standard — maintainability (**146** / Fair) | IN PROGRESS (wave 2/3) | **No** — defer to T12 IPP |
| **T13** / BR-100 | Standard — reliability (**28** / **Fair**) | IN PROGRESS (wave 3 exit/quit deferred) | **No** — defer to T13 IPP |
| **T14** / BR-101 | AI findings panel (**12** open) | IN PROGRESS — WAITING (FBU) | **No** — defer to T14 IPP |
| **T16** | Code scanning + perpetual dashboard hygiene | IN PROGRESS | **Yes** — after handoff or net-new alerts |
| **T15** | [Actions](https://github.com/RMS-Ltd/ai-dev-kit/actions) CI | IN PROGRESS | **No** — separate lane |

**Handoff trigger:** When T12, T13, T14 reach COMPLETE, residual standard/AI open counts roll into T16 perpetual waves per [IPP-E08S03T16](../../../../../implementation-cycles/IPP-E08S03T16-github-security-code-quality-health-perpetual-fr112.md) §4 Wave 1+.

---

## Acceptance criteria

- [x] **AC1:** Task doc exists with `Task Type: Perpetual Maintenance` and security dashboard URLs as SoT.
- [x] **AC2:** Scope boundary with **E08:S03:T15** and **T12–T14** handoff table documented.
- [x] **AC3:** FR-112 bidirectional link; Story 003 checklist and `kboard.md` O-band wired.
- [x] **AC4:** First attributed RW records baseline open counts on `main` (code scanning + code quality) — **v0.8.3.16+1** @ `777e956`.
- [x] **AC5 (Wave 1 re-scan):** Wave 1 manifest @ `f6aa4dca` recorded with rule breakdown + cross-lane deltas ([IPP §4 Wave 1 re-scan](../../../../../implementation-cycles/IPP-E08S03T16-github-security-code-quality-health-perpetual-fr112.md)).

---

## References

- [IPP-E08S03T16](../../../../../implementation-cycles/IPP-E08S03T16-github-security-code-quality-health-perpetual-fr112.md)
- [FR-112](../../../fr-br/FR-112-perpetual-github-ci-and-security-health-lanes.md)
- [E08:S03:T15 — GitHub Actions CI health (Perpetual)](T15-github-actions-ci-health-perpetual-fr112.md)
- [E08:S03:T12 — BR-099 maintainability backlog](T12-code-quality-maintainability-backlog-br099.md)
- [E08:S03:T13 — BR-100 reliability backlog](T13-code-quality-reliability-backlog-br100.md)
- [E08:S03:T14 — BR-101 AI suggestions backlog](T14-code-quality-ai-suggestions-backlog-br101.md)
- [Code scanning](https://github.com/RMS-Ltd/ai-dev-kit/security/code-scanning)
- [Code Quality](https://github.com/RMS-Ltd/ai-dev-kit/security/quality)
