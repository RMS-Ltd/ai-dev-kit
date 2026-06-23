---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-09T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E03:S02:T14 — Planning: SemVer Allocation Authority (SAA) (IPW)

**Host Task:** [`T14-semver-allocation-authority-transactional-mapping-fr120.md`](../kanban/epics/epic-03/story-02-versioning-cookbook-and-examples/T14-semver-allocation-authority-transactional-mapping-fr120.md) **(E03:S02:T14)**  
**Planning for:** [FR-120](../kanban/fbu/FR-120-semver-allocation-authority-transactional-mapping-black-box.md)  
**Status:** Implementation complete (AC7 operator verification + RW pending)

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | Black-box API: `allocate`, `lookup`, `audit` | FR-120-F1 |
| RF2 | Generation inside single SQL transaction; UNIQUE on internal, semver_core, semver_full, patch | FR-120-F2, F2b |
| RF3 | RW sole production allocator; fail closed | FR-120-F3, NF4 |
| RF4 | Idempotent allocate | FR-120-F4 |
| RF5 | Migrate existing DB + legacy YAML | FR-120-F5 |
| RF6 | No production finalize=False PATCH assignment | FR-120-F6 |
| RF7 | Step 9 validators read allocator state | FR-120-F7 |
| RF8 | Export semver-registry YAML on every RW | Operator 2026-06-09 |

### 1.2 Non-functional requirements

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RNF1 | Allocate &lt; 50 ms p95 | FR-120-NF1 |
| RNF2 | greenfield-install parity | FR-120-NF2 |
| RNF3 | Single-writer (RW) documented | FR-120-NF3 |
| RNF4 | Task-touch semantics preserved | ADR-002 |

### 1.3 Invariants and boundaries

- **Invariants:** 1 internal ↔ 1 PATCH ↔ 1 SemVer core; internal E.S.T may decrease; SemVer core increases on new allocations.
- **In scope:** `release_state/allocate.py`, schema v2, RW integration, validators, ADR-003, export-on-RW.
- **Out of scope:** Remote allocator; FR-115 write-path; merging FR-116 ingest DB.

---

## 2. Specification

### 2.1 Goal

Deliver SAA as embedded `release_state/` module; `.adk/release-state.db` is authoritative generation + persistence. RW calls `allocate()` once per release.

### 2.2 ADR necessity decision

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | Y | SAA vs Python/YAML allocation |
| T2 | Reversibility | Y | legacy backend + export rollback |
| T3 | Blast radius | Y | RW Steps 2.5, 5, 8, 9, 11 |
| T4 | Precedent | Y | Supersedes partial ADR-002 impl |
| T5 | Constraint trade-off | Y | DB SoT vs YAML export |
| T6 | Governance contract | Y | Versioning policy §2.1 |
| T7 | Supersedes | Y | E02:S17 storage-only incomplete |

**Outcome:** REQUIRED — CREATE ADR-003; UPDATE ADR-002.

### 2.3 Status transition intent

- **Current:** IN PROGRESS (implementation)
- **Complete when:** AC1–AC7 evidenced; operator verification AC7
- **RW closure:** `RW E03:S02:T14 --art` only

---

## 3. Test design

| ID | Behavior | Maps to |
| -- | -------- | ------- |
| T1 | Idempotent allocate | RF4 |
| T2 | New allocation inserts row | RF2 |
| T3 | Internal E.S.T down, semver core up | AC2 |
| T4 | UNIQUE collision rejected | RF2 |
| T5 | Parallel allocate | AC3 |
| T6 | finalize=False / lookup-only guard | RF6 |
| T7 | Migration import | RF5 |
| T8 | RW integration | RF3 |
| T9 | Export on RW | RF8 |
| T10 | Performance p95 | RNF1 |

---

## 4. Implementation plan

1. Transition T14 TODO → IN PROGRESS; link IPP.
2. Schema v2 + `migrate.py`; apply on `open_db()`.
3. Implement `allocate.py` + `audit()` + unit tests.
4. Refactor `semver_converter.py` + `finalize_rw_semver_registry.py`; export YAML every RW.
5. Update validators; ADR-003; policy + KB docs; greenfield sync.
6. Integration tests; operator verification checklist.
7. Reconcile T14 status with actual implementation state.

**RW prescription:** Post-ship verification waves use `RW E03:S02:T14 --art` only (BUILD +1).

---

## 5. Documentation deliverables

| ID | Path | Action |
| -- | ---- | ------ |
| D1 | `docs/implementation-cycles/IPP-E03S02T14-semver-allocation-authority.md` | CREATE |
| D2 | `docs/architecture/standards-and-adrs/ADR-003-semver-allocation-authority.md` | CREATE |
| D3 | ADR-002 | UPDATE |
| D4 | `docs/governance/standards/dev-kit-versioning-policy.md` | UPDATE |
| D5 | `packages/frameworks/workflow-mgt/docs/release-state-sqlite-mode.md` | UPDATE |
| D6 | release-workflow-agent-execution.md | UPDATE |

---

## 6. Documentation housing

IPP and ADR under `docs/`; framework docs under `packages/frameworks/workflow-mgt/`. No portal changes.

---

## 7. Success / verification criteria

- [ ] `pytest tests/release_state/` passes
- [ ] allocate idempotent + injective under parallel test
- [ ] RW sqlite integration test passes
- [ ] Export-on-RW matches DB
- [ ] ADR-003 created; ADR-002 updated
- [ ] Operator sign-off (AC7)

---

## References

- [FR-120](../kanban/fbu/FR-120-semver-allocation-authority-transactional-mapping-black-box.md)
- [IPP-E03S02T12](IPP-E03S02T12-task-touch-semver-collision-hardening.md)
- E02:S17 SQLite release-state ([sqlite-schema-design.md](../kanban/epics/epic-02/story-17-rw-semver-characterization-and-release-state-sqlite/sqlite-schema-design.md))
