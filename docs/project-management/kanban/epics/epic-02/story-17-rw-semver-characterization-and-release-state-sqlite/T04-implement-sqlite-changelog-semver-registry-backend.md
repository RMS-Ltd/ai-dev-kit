---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-07T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E02:S17:T04 — Implement SQLite changelog and semver-registry backend

**Task ID:** E02:S17:T04  
**Status:** TODO  
**Priority:** CRITICAL  
**Estimated Effort:** Large  
**Created:** 2026-06-07  
**Last updated:** 2026-06-07  
**Version Anchor:** v0.2.17.4+0  
**Code:** E02S17T04

Publication Status: NOT_APPLICABLE

---

## Scope

Implement the SQLite release-state backend per **T03** IPP. Wire RW pipeline scripts to read/write SQLite while preserving validator contracts.

**In scope:**

- SQLite module + migration CLI
- Adapter layer for: changelog create/read, semver registry finalize/lookup, task_touch counter
- Update: `finalize_rw_semver_registry.py`, changelog scripts, relevant validators
- Feature flag or `rw-config.yaml` switch (`release_state_backend: sqlite` | `legacy`)
- Unit tests + import from production corpus

**Out of scope:**

- Full scenario parity proof (T05)
- Removing legacy MD/YAML files (until parity passes)
- Docusaurus/public changelog rendering changes (unless required by RW)

---

## Input

- [IPP-E02S17T03](../../../../implementation-cycles/IPP-E02S17T03-sqlite-release-state-schema.md) (from T03)
- [T03 schema design](T03-sqlite-release-state-schema-and-migration-design.md)

---

## Deliverable

1. SQLite backend in `packages/frameworks/workflow-mgt/` (exact paths per IPP)
2. Migration CLI: import legacy → SQLite
3. Export CLI: SQLite → legacy (round-trip)
4. pytest coverage for CRUD + finalize boundary
5. RW agent guide delta (config switch, new paths)

---

## Acceptance Criteria

- [ ] AC1: `release_state_backend: sqlite` runs RW Steps 2–11 on isolated worktree without legacy file writes
- [ ] AC2: Existing validator suite passes in SQLite mode
- [ ] AC3: Import + export round-trip is idempotent on test corpus
- [ ] AC4: No regression in legacy mode when flag unset

---

## Dependencies

**Blocks:** T05

**Blocked by:** T03 IPP + explicit implementation authorization
