---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-10T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Bug Report BR-104: CodeQL/CQG green does not imply Actions CI green

**Type:** Bug Report (BR)  
**ID:** BR-104  
**Submitted:** 2026-06-10  
**Priority:** HIGH  
**Severity:** HIGH — red **Tests** on `main` while CodeQL workflows report success  
**Status:** IN PROGRESS (TC1 shipped **v0.2.16.5+10**; TC7 operator Actions verify pending)  
**Implementing Task:** [E02:S16:T05](../epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T05-github-actions-ci-health-perpetual.md)

---

## Summary

Operators and automation can treat **green CodeQL / Code Quality** GitHub workflows (or a passing local CQG at IDW Phase 6b) as evidence that a release is ship-ready. **Tests**, **Docusaurus**, and **Greenfield install** are separate workflows with separate pass/fail semantics. On `main` @ `1bce576`, CodeQL succeeded while **Tests** failed (`sqlite3.OperationalError: duplicate column name: semver_core` under parallel `open_db`).

---

## Observed behavior

| Workflow @ `1bce576` | Conclusion |
| -------------------- | ---------- |
| Push on main (CodeQL) | success |
| Code Quality: Push on main | success |
| Tests | **failure** |
| Docusaurus / Greenfield / workflow-scripts-pytest | success |

[Actions run 27290068587](https://github.com/RMS-Ltd/ai-dev-kit/actions/runs/27290068587)

---

## Root causes

1. **Semantic:** CQG (CodeQL security+quality) ≠ Actions CI (build/test workflows) — intentional split per FR-112 NF1 / ADR-022, but under-documented at gate exit points.
2. **Step 9.7 loophole:** `validate_actions_ci_parity.py --strict` returned exit 0 when no path patterns matched (kanban/docs-only RW).
3. **No remote check:** No validator blocked push while GitHub Actions reported red on target branch.
4. **Flaky migration:** `migrate_to_v2` TOCTOU under parallel `open_db` in `test_parallel_distinct_internals_no_duplicate_patch`.

---

## Expected behavior

- CQG exit banner states CQG is **not** the CI ship gate.
- RW Step 9.7 `--strict` fails when zero checks would run (unless explicit `--allow-path-skip` for `RW -d`).
- Pre-push / batch-push runbook runs `validate_github_actions_remote.py --strict`.
- `migrate_to_v2` is idempotent under concurrent connections.

---

## Acceptance criteria

- [x] TC1: Parallel migration test stable under full Step 9.7 suite (**v0.2.16.5+10** — per-DB init lock + in-transaction version re-check)
- [ ] TC2–TC4: Parity validator strict/skip behavior
- [ ] TC6: Remote validator blocks when Tests red on branch HEAD
- [ ] TC7: Required workflows green on `main`/`dev` post-fix
- [ ] BR linked from T05, FR-112, IPP-E02S16T05

---

## Related

- [IPP-E02S16T05](../../implementation-cycles/IPP-E02S16T05-github-actions-ci-health-perpetual-fr112.md)
- [FR-112](FR-112-perpetual-github-ci-and-security-health-lanes.md)
- [UXR-024](UXR-024-rw-local-release-default-no-push-batch-operator-push.md) AC6
