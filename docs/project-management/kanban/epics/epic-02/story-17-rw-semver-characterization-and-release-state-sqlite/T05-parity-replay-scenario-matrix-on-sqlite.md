---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-07T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E02:S17:T05 — Parity replay: same scenario matrix on SQLite

**Task ID:** E02:S17:T05  
**Status:** TODO  
**Priority:** HIGH  
**Estimated Effort:** Large  
**Created:** 2026-06-07  
**Last updated:** 2026-06-07  
**Version Anchor:** v0.2.17.5+0  
**Code:** E02S17T05

Publication Status: NOT_APPLICABLE

---

## Scope

Replay **every T01 scenario ID** with `release_state_backend: sqlite` and compare against **T02 baseline**. Same inputs and invariants — not necessarily same intermediate file paths.

**In scope:**

- Fill `sqlite` column in run log
- Diff: version, SemVer mapping, BUILD, validator exit codes, tag names
- Document any intentional divergences with rationale
- Automated parity runner for deterministic scenarios (extend `tests/test_rw_performance.py` or sibling harness)

**Out of scope:**

- New scenario invention (T06 refines matrix; replay uses T01 IDs only)
- Production cutover / legacy file deletion

---

## Input

- [T01 scenario matrix](T01-rw-ipw-scenario-matrix-and-run-log-schema.md)
- [T02 baseline run log](T02-baseline-characterization-runs-legacy-md-yaml.md)
- T04 SQLite backend

---

## Deliverable

1. **`parity-run-log.md`** — baseline vs SQLite side-by-side
2. **`parity-diff-report.md`** — mismatches, root cause, fix or accept
3. Automated parity test module (deterministic scenarios)

---

## Acceptance Criteria

- [ ] AC1: 100% of T01 scenario IDs attempted on SQLite (SKIP only with documented blocker)
- [ ] AC2: Zero unexplained SemVer mapping or BUILD invariant mismatches
- [ ] AC3: All blocking validators pass in SQLite mode for passing baseline scenarios
- [ ] AC4: Performance note: SQLite query latency vs YAML parse (informational)

---

## Dependencies

**Blocks:** Story closure; legacy deprecation decision

**Blocked by:** T02 baseline, T04 implementation
