---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-07T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E02:S17:T01 — RW & IPW scenario matrix and run-log schema

**Task ID:** E02:S17:T01  
**Status:** ✅ COMPLETE  
**Priority:** HIGH  
**Estimated Effort:** Medium  
**Created:** 2026-06-07  
**Last updated:** 2026-06-07 (RW **v0.2.17.1+2** — scenario matrix delivered)  
**Version Anchor:** v0.2.17.1+2  
**Code:** E02S17T01

Publication Status: NOT_APPLICABLE

---

## Scope

Define the **canonical scenario catalog** and **run-log schema** for RW and IPW characterization testing. This task produces the structure T02–T06 execute against — no SQLite implementation here.

**In scope:**

- Scenario matrix document with stable scenario IDs (e.g. `RW-S01`, `IPW-P01`)
- Preconditions, trigger strings, flags, expected outcomes, and artifacts to capture per scenario
- Run-log table schema (baseline vs SQLite columns)
- Worktree isolation conventions (one scenario = one git worktree or fresh clone)
- Split: **deterministic script scenarios** vs **agent-driven full RW** scenarios

**Out of scope:**

- Executing baseline runs (T02)
- SQLite design (T03)
- Implementation (T04)

---

## Input

- Conversation spike on `spike/rw-semver-friction` (2026-06-07)
- [E02:S01:T24](../story-01-rw-agent-execution-and-docs/T24-rw-build-increment-enforcement-and-tag-immutability-br097.md) — BUILD/tag friction classes
- [E03:S02:T12](../../epic-03/story-02-versioning-cookbook-and-examples/T12-implement-task-touch-semver-mapping-mode.md) — task_touch collision classes
- `packages/frameworks/workflow-mgt/scripts/version/test_resolve_rw_build.py`
- `packages/frameworks/workflow-mgt/scripts/version/test_finalize_rw_semver_registry.py`
- `tests/test_rw_performance.py`

---

## Deliverable

1. **[`scenario-matrix.md`](scenario-matrix.md)** — 28 named scenarios (classes A–F); execution waves 1–4
2. **[`run-log-schema.md`](run-log-schema.md)** — column schema, artifact manifest, deterministic runner contract
3. **[`baseline-run-log.md`](baseline-run-log.md)** — seeded with RW-G03/G04 from v0.2.17.1+1 release (T02 continues here)
4. Initial seed of ≥15 scenarios (refinable in T06) — **done (28 scenarios)**

---

## Acceptance Criteria

- [ ] AC1: Every scenario has a stable ID, preconditions, trigger, expected pass/fail step, and artifact list
- [ ] AC2: Run-log schema supports side-by-side baseline vs SQLite comparison
- [ ] AC3: Matrix distinguishes deterministic (pytest/worktree) from agent (manual/agent RW) execution
- [ ] AC4: Worktree isolation procedure documented
- [ ] AC5: Story T02–T05 reference scenario IDs from the matrix (no orphan runs)

---

## Dependencies

**Blocks:** T02, T03 (design inputs), T05, T06

**Blocked by:** None
