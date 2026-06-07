---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-07T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Story 017 – RW SemVer Characterization & Release State SQLite

**Status:** IN PROGRESS  
**Priority:** HIGH  
**Estimated Effort:** Large  
**Created:** 2026-06-07  
**Last updated:** 2026-06-07 (RW **v0.2.17.1+1** — E02:S17 filed; T01 scenario matrix next)  
**Version:** v0.2.17.1+1  
**Code:** E2S17

---

## Overview

Characterize Release Workflow (RW) and Implementation Planning Workflow (IPW) friction — especially SemVer/registry collisions and BUILD/tag edge cases — using a **fixed scenario matrix** on the **legacy MD/YAML storage** (`CHANGELOG.md`, changelog archive, `semver-registry.yaml`). Then migrate release-state persistence to **SQLite** and **replay the same scenarios** to prove parity before cutover.

**Investigation branch:** `spike/rw-semver-friction`

---

## Goal

1. Document RW/IPW behaviour under controlled scenarios (not ad-hoc runs).
2. Surface friction patterns (agent decisions, validator timing, collision recovery).
3. Replace monolithic markdown/YAML release state with SQLite without regressing SemVer invariants.
4. Provide a repeatable before/after test harness for future RW changes.

---

## Task Checklist

- [ ] **E02:S17:T01 – RW & IPW scenario matrix and run-log schema** - IN PROGRESS (HIGH) — [Task doc](story-17-rw-semver-characterization-and-release-state-sqlite/T01-rw-ipw-scenario-matrix-and-run-log-schema.md)

- [ ] **E02:S17:T02 – Baseline characterization runs (legacy MD/YAML)** - TODO (HIGH) — [Task doc](story-17-rw-semver-characterization-and-release-state-sqlite/T02-baseline-characterization-runs-legacy-md-yaml.md)

- [ ] **E02:S17:T03 – SQLite release-state schema and migration design** - TODO (HIGH) — [Task doc](story-17-rw-semver-characterization-and-release-state-sqlite/T03-sqlite-release-state-schema-and-migration-design.md)

- [ ] **E02:S17:T04 – Implement SQLite changelog and semver-registry backend** - TODO (CRITICAL) — [Task doc](story-17-rw-semver-characterization-and-release-state-sqlite/T04-implement-sqlite-changelog-semver-registry-backend.md)

- [ ] **E02:S17:T05 – Parity replay: same scenario matrix on SQLite** - TODO (HIGH) — [Task doc](story-17-rw-semver-characterization-and-release-state-sqlite/T05-parity-replay-scenario-matrix-on-sqlite.md)

- [ ] **E02:S17:T06 – High-stress scenarios and RW friction report** - TODO (MEDIUM) — [Task doc](story-17-rw-semver-characterization-and-release-state-sqlite/T06-high-stress-scenarios-and-rw-friction-report.md)

---

## Related work

| Artifact | Relationship |
| -------- | ------------ |
| [E02:S01:T24](story-01-rw-agent-execution-and-docs/T24-rw-build-increment-enforcement-and-tag-immutability-br097.md) | BUILD/tag immutability guards — scenario class |
| [E03:S02:T12](../epic-03/story-02-versioning-cookbook-and-examples/T12-implement-task-touch-semver-mapping-mode.md) | task_touch SemVer mapping — collision class |
| [FR-045](../fr-br/FR-045-adr-002-task-touch-derived-mapping.md) · [FR-046](../fr-br/FR-046-rw-semver-tag-task-touch-mode.md) | SemVer registry invariants |
| [BR-097](../fr-br/BR-097-rw-agent-reuses-tagged-build-and-force-moves-release-tags.md) | Agent friction precedent |
| `tests/test_rw_performance.py` | Existing RW performance harness — extend, do not duplicate |
| `semver-registry.yaml` | Legacy SoT (~2.5k lines) — migration source |

---

## Dependencies

**Coordinates with:**

- Epic 3 (Numbering & Versioning) — SemVer semantics and task_touch counter invariants
- Epic 2 Story 1 — RW agent execution contract

**Blocked by:** T01 scenario matrix (T02–T06 depend on catalog)

---

## Acceptance Criteria (story-level)

- [ ] Scenario matrix defines ≥15 named scenarios across BUILD, SemVer, volume, branch/intent, perpetual, and IPW classes
- [ ] Baseline run log captures pass/fail, validator exit codes, and state diffs for legacy storage
- [ ] SQLite schema supports changelog entries, semver mappings, and task_touch counter with export/import
- [ ] Parity replay: same scenario IDs produce equivalent invariants on SQLite (mapping, tags, validators)
- [ ] Friction report documents ≥3 actionable patterns with proposed scenario refinements

---

## References

- [`rw-config.yaml`](../../../../rw-config.yaml) — `semver_mapping_strategy: task_touch`
- [`packages/frameworks/workflow-mgt/scripts/version/`](../../../../packages/frameworks/workflow-mgt/scripts/version/) — resolver, finalize, converter
- [`docs/maintenance/semver-registry-collision-repair-2026-06-04.md`](../../../../docs/maintenance/semver-registry-collision-repair-2026-06-04.md) — prior collision repair context
