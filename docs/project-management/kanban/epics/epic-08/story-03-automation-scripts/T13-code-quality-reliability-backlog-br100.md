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
**Last updated:** 2026-06-05 (dashboard re-scan — wave-1 verified **133→34** −74%; score still **Needs Improvement**; remainder triage)  
**Version Anchor:** v0.8.3.13+2  
**Version:** v0.8.3.13+2  
**Code:** E08S03T13

**Scope:** Phased burn-down of **133** open GitHub Code Quality **reliability** findings on `main`; wave 1 = empty except, file-not-closed, wrong-arguments, BaseException catches.

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
2. Triage sheet: fix / waive / defer per rule group.
3. Wave 1 fixes with tests where behaviour changes.

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

**Next:** Triage **34** residual findings (likely wave-2 rules: `py/mixed-returns`, `py/multiple-definition`, `py/use-of-exit-or-quit`, deferred `py/call/wrong-arguments`) until score reaches **Fair**+.

---

## Acceptance Criteria

- [x] Baseline manifest captured (rule → count, top files).
- [x] Wave-1 rule groups triaged; true positives fixed (local AST clean).
- [ ] Reliability score improves to **Fair** or better (**Needs Improvement** @ **34** open on re-scan).
- [x] No CI regressions (`pytest tests/` green).
- [ ] **BR-100** released via **RW E08:S03:T13** when complete.

---

## References

- [IPP-E08S03T13](../../../../../implementation-cycles/IPP-E08S03T13-code-quality-reliability-backlog-br100.md)
- [BR-100](../../../fr-br/BR-100-code-quality-reliability-backlog.md)
- [BR-099](../../../fr-br/BR-099-code-quality-maintainability-backlog.md)
- [BR-101](../../../fr-br/BR-101-code-quality-ai-suggestions-backlog.md)
