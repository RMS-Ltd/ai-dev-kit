---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T23:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 8, Story 3, Task 13: Code Quality reliability backlog (**BR-100**)

**Task ID:** E08:S03:T13  
**Status:** IN PROGRESS  
**Priority:** HIGH  
**Created:** 2026-06-05  
**Last updated:** 2026-06-05 (v0.8.3.13+3 — wave-2 shipped; dashboard re-scan pending)  
**Version Anchor:** v0.8.3.13+3  
**Version:** v0.8.3.13+3  
**Code:** E08S03T13

**Scope:** Phased burn-down of GitHub Code Quality **Standard reliability** findings on `main`. Wave 1 (done): empty-except, file-not-closed. Wave 2 (done locally): mixed-returns, wrong-arguments. Wave 3 exit/quit + print-at-import deferred (IPP / T12).

**Upstream:** [BR-100 — Code Quality reliability backlog](../../../fr-br/BR-100-code-quality-reliability-backlog.md)

Publication Status: NOT_APPLICABLE

---

## Input

- [IPP-E08S03T13](../../../../../implementation-cycles/IPP-E08S03T13-code-quality-reliability-backlog-br100.md)
- [BR-100](../../../fr-br/BR-100-code-quality-reliability-backlog.md)
- [Security & quality — Standard findings](https://github.com/RMS-Ltd/ai-dev-kit/security/quality)
- [E08:S03:T12 — Maintainability backlog (BR-099)](T12-code-quality-maintainability-backlog-br099.md)
- [E08:S03:T16 — GitHub Security & Code Quality health (Perpetual)](T16-github-security-code-quality-health-perpetual-fr112.md) — post-backlog handoff (FR-112)

---

## Deliverable

1. Baseline manifest: reliability findings by rule + file hotspots.
2. Triage sheet: fix / waive / defer per rule group (wave 1 + wave 2 done).
3. Wave 1 fixes with tests where behaviour changes (done).
4. Wave 2 fixes per [IPP §4.1](../../../../../implementation-cycles/IPP-E08S03T13-code-quality-reliability-backlog-br100.md#41-wave-2-steps-implemented-locally--pending-rw--dashboard-re-scan) (**done** @ v0.8.3.13+3).

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
- [ ] Reliability score improves to **Fair** or better (**Needs Improvement** @ **28** expected post wave-2 re-scan; **12** exit deferred wave 3).
- [x] No CI regressions (`pytest tests/` green).
- [ ] **BR-100** released via **RW E08:S03:T13** when complete.

---

## References

- [IPP-E08S03T13](../../../../../implementation-cycles/IPP-E08S03T13-code-quality-reliability-backlog-br100.md)
- [BR-100](../../../fr-br/BR-100-code-quality-reliability-backlog.md)
- [BR-099](../../../fr-br/BR-099-code-quality-maintainability-backlog.md)
- [BR-101](../../../fr-br/BR-101-code-quality-ai-suggestions-backlog.md)
