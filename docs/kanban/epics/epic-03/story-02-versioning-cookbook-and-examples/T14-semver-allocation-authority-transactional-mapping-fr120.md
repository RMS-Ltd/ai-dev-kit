---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-09T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E03:S02:T14 — SemVer Allocation Authority — Transactional 1:1 Mapping Black Box (FR-120)

**Task ID:** E03:S02:T14  
**Status:** COMPLETE  
**Priority:** HIGH  
**Estimated Effort:** Complex  
**Created:** 2026-06-09  
**Last updated:** 2026-06-09 (v0.3.2.14+2 — allocator repair; legacy re-import)  
**Version Anchor:** v0.3.2.14+2
**Code:** E03S02T14

**Associated FR/BR:** [FR-120](../../../fbu/FR-120-semver-allocation-authority-transactional-mapping-black-box.md) · [FR-045](../../../fbu/FR-045-adr-002-task-touch-derived-mapping.md) · [FR-046](../../../fbu/FR-046-rw-semver-tag-task-touch-mode.md) · [FR-116](../../../fbu/FR-116-semver-registry-structured-store-shared-release-metadata.md) · [BR-061](../../../fbu/BR-061-semver-task-touch-counter-increments-too-often.md) · [BR-073](../../../fbu/BR-073-semver-task-touch-collision-retrospective-fix.md) · [BR-097](../../../fbu/BR-097-rw-agent-reuses-tagged-build-and-force-moves-release-tags.md)

Publication Status: NOT_APPLICABLE

---

## Scope

Design and implement a **SemVer Allocation Authority (SAA)** — black-box `internal → SemVer` with **SQL-backed generation and allocation in one transaction**, database-enforced 1:1 injectivity, replacing YAML/counter/multi-writer fragility while preserving task-touch **semantics** (global monotonic PATCH decoupled from non-monotonic internal `E.S.T`).

**Operator direction (2026-06-09):** SAA is the chosen architecture. SQLite owns counters, sequence advancement, and mapping insert — not just post-hoc uniqueness checks on Python-computed SemVer.

Motivation: repeated collision fixes ([T12](T12-implement-task-touch-semver-mapping-mode.md), [FR-116](T13-semver-registry-structured-store-shared-release-metadata-fr116.md)) treated symptoms; operator diagnosis ([FR-120](../../../fbu/FR-120-semver-allocation-authority-transactional-mapping-black-box.md)) identifies **allocation architecture** as root cause.

---

## Input

- [FR-120](../../../fbu/FR-120-semver-allocation-authority-transactional-mapping-black-box.md) — requirements, alternatives, acceptance criteria
- [ADR-002](../../../../architecture/standards-and-adrs/ADR-002-task-touch-derived-mapping.md) — semantic baseline (PATCH allocator)
- [T12](T12-implement-task-touch-semver-mapping-mode.md) · [T13](T13-semver-registry-structured-store-shared-release-metadata-fr116.md) — prior waves
- [IPP-E03S02T12](../../../../implementation-cycles/IPP-E03S02T12-task-touch-semver-collision-hardening.md) — lessons learned
- `semver-registry.yaml` — migration source
- `packages/frameworks/workflow-mgt/scripts/version/` — current converter/finalize/validators

**IPW planning artifact:** [IPP-E03S02T14-semver-allocation-authority.md](../../../../implementation-cycles/IPP-E03S02T14-semver-allocation-authority.md)

---

## Deliverable

1. **SAA module + CLI** — `allocate` / `lookup` / `audit`; generation inside SQL transaction
2. **SQLite allocator schema** — `semver_policy`, `semver_sequence`, `semver_mapping` + UNIQUE constraints
3. **RW integration** — single choke-point call before SemVer tags/README/changelog
4. **Migration** — import existing `mapping_history` without collision loss
5. **Validators** — Step 9 blocking checks against allocator state
6. **Policy/ADR update** — versioning policy + ADR-002 amendment or successor ADR
7. **Optional YAML export** — generated mirror for git audit (if IPP selects)

---

## Acceptance Criteria

- [x] **AC1:** IPP linked — [IPP-E03S02T14](../../../../implementation-cycles/IPP-E03S02T14-semver-allocation-authority.md)
- [x] **AC2:** `allocate()` idempotent + parallel test (`tests/release_state/test_allocate.py`)
- [x] **AC3:** Internal E.S.T down → semver patch up (test_allocate)
- [x] **AC4:** Import from fixture YAML + audit passes
- [x] **AC5:** SQLite RW path uses `allocate()` only (`finalize_rw_semver_registry.py`)
- [x] **AC6:** greenfield-install synced; see [release-state-sqlite-mode.md](../../../../../packages/frameworks/workflow-mgt/docs/release-state-sqlite-mode.md)
- [x] **AC7:** RW release `v0.3.2.14+1` — [saa-operator-verification-e03s02t14.md](../../../../maintenance/saa-operator-verification-e03s02t14.md) checklist for ongoing soak

---

## Approach (high level — IPW to refine)

1. IPW: choose embedded module vs sidecar CLI; YAML export policy; DB file placement vs FR-116 store
2. Schema + migration from `semver-registry.yaml`
3. Implement `allocate()` — task-touch semantics **generated in SQL** (not Python counter + YAML write)
4. Deprecate `semver_converter.py` production allocation; facade delegates to SAA; remove `finalize=False` tag paths
5. Wire RW Step 2/9/11 to SAA only
6. Tests: injectivity, idempotency, internal-down/monotonic-semver-up, migration fidelity
7. Docs + ADR amendment

---

## References

- [FR-120](../../../fbu/FR-120-semver-allocation-authority-transactional-mapping-black-box.md)
- [ADR-003](../../../../architecture/standards-and-adrs/ADR-003-semver-allocation-authority.md)
- [dev-kit-versioning-policy.md](../../../../governance/standards/dev-kit-versioning-policy.md)
- [Operator verification AC7](../../../../maintenance/saa-operator-verification-e03s02t14.md)
