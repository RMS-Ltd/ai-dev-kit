---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-07T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E02:S17:T02 — Baseline characterization runs (legacy MD/YAML)

**Task ID:** E02:S17:T02  
**Status:** IN PROGRESS  
**Priority:** HIGH  
**Estimated Effort:** Large  
**Created:** 2026-06-07  
**Last updated:** 2026-06-07 (RW **v0.2.17.2+4** — Wave 4 complete; all baseline waves done)  
**Version Anchor:** v0.2.17.2+4  
**Code:** E02S17T02

Publication Status: NOT_APPLICABLE

---

## Scope

Execute the scenario matrix from **T01** against the **current legacy storage** (`CHANGELOG.md`, changelog archive tree, `semver-registry.yaml`). Record outcomes in the run log before any SQLite work begins.

**In scope:**

- Deterministic scenarios via pytest + isolated worktrees
- Agent-driven scenarios (documented manual/agent RW runs with friction notes)
- Capture validator exit codes, version/registry state, tag state
- First pattern pass: note clusters for T06 refinement

**Out of scope:**

- SQLite backend (T04)
- Parity replay (T05)

---

## Input

- [T01 scenario matrix](T01-rw-ipw-scenario-matrix-and-run-log-schema.md) — scenario IDs and run-log schema
- Legacy storage paths from `rw-config.yaml`

---

## Deliverable

1. **`baseline-run-log.md`** — completed rows for all T01 scenarios (or explicit SKIP with rationale)
2. **`baseline-artifacts/`** — snapshots/diffs keyed by scenario ID (gitignored if large; manifest in run log)
3. **`baseline-pattern-notes.md`** — initial friction clusters for T06

---

## Acceptance Criteria

- [ ] AC1: ≥80% of deterministic scenarios executed with recorded outcomes
- [ ] AC2: ≥5 agent-driven scenarios executed with friction notes
- [ ] AC3: All SemVer/registry collision-class scenarios have baseline evidence
- [ ] AC4: Run log is sufficient for T05 parity comparison (same columns, `legacy` backend filled)

---

## Dependencies

**Blocks:** T05 (needs baseline column)

**Blocked by:** T01 scenario matrix
