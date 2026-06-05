---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T23:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 8, Story 3, Task 14: Code Quality AI suggestions backlog (**BR-101**)

**Task ID:** E08:S03:T14  
**Status:** WAITING  
**Priority:** LOW  
**Created:** 2026-06-05  
**Last updated:** 2026-06-05 (dashboard re-scan — **14** AI findings still open on [ai-findings](https://github.com/RMS-Ltd/ai-dev-kit/security/quality/ai-findings); dismiss #10–#11 pending; **v0.8.3.14+1**)  
**Version Anchor:** v0.8.3.14+2  
**Version:** v0.8.3.14+2  
**Code:** E08S03T14

**Scope:** Triage and resolve **14** open GitHub Code Quality **AI-powered suggestions** on recently changed files.

**Upstream:** [BR-101 — Code Quality AI suggestions backlog](../../../fr-br/BR-101-code-quality-ai-suggestions-backlog.md)

Publication Status: NOT_APPLICABLE

---

## Input

- [IPP-E08S03T14](../../../../../implementation-cycles/IPP-E08S03T14-code-quality-ai-suggestions-backlog-br101.md)
- [BR-101](../../../fr-br/BR-101-code-quality-ai-suggestions-backlog.md)
- [AI findings panel](https://github.com/RMS-Ltd/ai-dev-kit/security/quality/ai-findings) — canonical UI (not exposed via `code-scanning/alerts` API)
- [E08:S03:T12](T12-code-quality-maintainability-backlog-br099.md) · [E08:S03:T13](T13-code-quality-reliability-backlog-br100.md) (dedupe overlaps)

---

## Deliverable

1. Inventory table: 14 suggestions (file, summary, disposition).
2. Applied fixes or GitHub dismissals with rationale.
3. Cleared AI suggestions panel (0 open).

---

## Inventory (capture 2026-06-05, `main` @ `5fcf102`)

| # | File | AI summary (paraphrased) | Disposition | Notes |
|---|------|--------------------------|-------------|-------|
| 1 | `packages/.../test_contamination_detector.py` | Relative import for `scan_kanban_tree` | **apply** | try/except import fallback |
| 2 | `greenfield-install/.../test_contamination_detector.py` | Same as #1 | **apply** | mirror |
| 3 | `packages/.../semver_converter.py` | Unused `result` from `subprocess.run` | **apply** | already fixed in tree |
| 4 | `packages/.../semver_converter.py` | Redundant `epic_key` alias | **apply** | use `epic` directly |
| 5 | `packages/.../semver_converter.py` | `semver_to_internal` optional BUILD | **apply** | `0.5.39` → BUILD 0 |
| 6 | `packages/.../semver_converter.py` | Reverse dict collision safety | **apply** | `_build_reverse_unique` |
| 7 | `packages/.../semver_converter.py` | Regex parse for `(epic,story)` key | **apply** | `re.fullmatch` |
| 8 | `scripts/sync_greenfield_install.py` | Warn on `git ls-files` failure | **apply** | stderr warning |
| 9 | `scripts/sync_greenfield_install.py` | Guard `shutil.rmtree` destination | **apply** | `_validate_safe_dest` |
| 10 | `scripts/sync_greenfield_install.py` | `rglob('*')` → `rglob('**/*')` | **dismiss** | no meaningful pathlib benefit |
| 11 | `src/ai_dev_kit/version.py` | Dataclass refactor for version constants | **dismiss** | RW/validators require flat `VERSION_*` constants |
| 12 | `tests/test_portal_br068_monorepo_links.py` | `GITHUB_BLOB_PREFIX` use `https://` | **apply** | matches cheatsheet URLs |
| 13 | `tests/test_portal_br068_monorepo_links.py` | Rename `_iter_publish_scope_markdown` | **apply** | → `_get_publish_scope_markdown_files` |
| 14 | `tests/test_portal_br068_monorepo_links.py` | Assertion message include violation count | **apply** | clearer failure output |

**Follow-on (tests green):** `contamination_detector.py` — case-insensitive canonical epic match + `fr-br/` root path (both package trees); exposed by Epic-casing test fix (#1–2).

**Dedupe:** No overlap with BR-099/100 maintainability/reliability waves on these 14 rows.

---

## Post-triage manifest

| Action | Count | Status |
|--------|-------|--------|
| Applied in repo | 12 | done (incl. detector follow-on) |
| Dismiss (rationale documented) | 2 | pending GitHub UI dismiss (#10, #11) after push |
| Deferred to BR-099/100 | 0 | — |

**Verification:** `pytest packages/frameworks/kanban/scripts/test_contamination_detector.py tests/test_portal_br068_monorepo_links.py` — 7 passed (2026-06-05).

**Release:** `RW E08:S03:T14 --art` when ready (BR-097).

---

## Dashboard re-scan manifest (2026-06-05)

**Source:** [GitHub Code Quality — AI findings](https://github.com/RMS-Ltd/ai-dev-kit/security/quality/ai-findings) · `main` @ `cadb0c3`.

| Field | Pre-release (2026-06-05) | Post-merge re-scan (2026-06-05) |
| ----- | ------------------------ | -------------------------------- |
| Open AI suggestions | **14** | **14** (unchanged) |
| Files in panel | 5 (see inventory) | Same 5 files still listed |

**Note:** Code fixes shipped in **v0.8.3.14+1**; GitHub panel has not yet cleared applied items or recorded dismissals for #10 (`rglob`) and #11 (`version.py` dataclass). Operator action: dismiss #10–#11 on [ai-findings](https://github.com/RMS-Ltd/ai-dev-kit/security/quality/ai-findings); re-check panel for 0-open after GitHub refresh.

---

## Acceptance Criteria

- [x] All 14 suggestions triaged (apply / dismiss / defer-to-BR-099|100).
- [x] Valid suggestions implemented; targeted tests green.
- [ ] AI suggestions panel shows 0 open items (verify after merge + GitHub dismiss #10, #11).
- [x] **BR-101** released via **RW E08:S03:T14 --art** (**v0.8.3.14+1**).

---

## References

- [IPP-E08S03T14](../../../../../implementation-cycles/IPP-E08S03T14-code-quality-ai-suggestions-backlog-br101.md)
- [BR-101](../../../fr-br/BR-101-code-quality-ai-suggestions-backlog.md)
- [BR-099](../../../fr-br/BR-099-code-quality-maintainability-backlog.md)
- [BR-100](../../../fr-br/BR-100-code-quality-reliability-backlog.md)
