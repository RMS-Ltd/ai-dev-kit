---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-10T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E3:S02:T12 — Planning: Spec, Tests, Implementation Plan (IPW)

**Host Task:** [`T12-implement-task-touch-semver-mapping-mode.md`](../project-management/kanban/epics/Epic-3/Story-002-versioning-cookbook-and-examples/T12-implement-task-touch-semver-mapping-mode.md) **(E3:S02:T12)**  
**Cross-Task Interaction:** [`T46-rw-semver-tag-task-touch-mode.md`](../project-management/kanban/epics/Epic-5/Story-001-fr-repo/T46-rw-semver-tag-task-touch-mode.md) **(E5:S01:T46)**  
**Planning for:** [BR-061](../project-management/kanban/fr-br/BR-061-semver-task-touch-counter-increments-too-often.md), [FR-046](../project-management/kanban/fr-br/FR-046-rw-semver-tag-task-touch-mode.md)  
**Status:** Draft

---

## 1. Specification

### 1.1 Goal

Eliminate high-frequency task-touch SemVer collisions by making conversion idempotent for read-only calls and constraining counter mutation to a single release-finalization pathway, while aligning RW tag behavior and docs via `E5:S01:T46`.

### 1.2 Functional requirements

- **F1:** Introduce a strict separation between SemVer derivation (read-only) and SemVer allocation/finalization (state mutation).
- **F2:** Guarantee that repeated conversion for the same internal version does not increment PATCH repeatedly.
- **F3:** Preserve monotonic, collision-free SemVer generation across real release sequences, including perpetual tasks.
- **F4:** Update RW integration so tag creation and release naming consume finalized SemVer once per release.
- **F5:** Update FR-046/T46 documentation to reflect actual authoritative behavior after T12 fix.
- **F6:** Add explicit guardrails for duplicate finalize attempts in the same release flow.

### 1.3 Non-functional requirements

- **N1:** Backward compatibility for existing registry data and historical tags.
- **N2:** Deterministic behavior under retries and partial RW failures.
- **N3:** Clear diagnostics when a call attempts mutation in a read-only context.
- **N4:** No silent semantic drift between version policy docs and implementation.

### 1.4 Out of scope

- Redesigning the entire RC/EPIC/STORY/TASK schema.
- Rewriting all release tooling from scratch.
- Auto-migrating external repositories that copied legacy converter behavior.

### 1.5 Interaction contract with E5:S01:T46

- `T12` owns converter semantics and collision hardening.
- `T46` remains FR-repo anchor for RW SemVer tag behavior, but must be updated to reference the finalized `T12` behavior and constraints.
- Plan explicitly allows updates to `T46` task text/AC wording so documentation matches implementation reality.

---

## 2. Test design

- **T1 — Read-only idempotency:** Converting the same internal version N times leaves registry/counter unchanged.
- **T2 — Finalize-once semantics:** Finalization increments counter exactly once for a release and returns stable value on repeated finalize attempts.
- **T3 — Collision prevention:** Simulated multi-task/multi-build sequences produce unique SemVer tags.
- **T4 — Retry safety:** Re-running failed RW steps does not burn additional PATCH values.
- **T5 — Legacy compatibility:** Existing registry history still resolves deterministic SemVer for historical versions.
- **T6 — RW integration:** Tag/release steps use the finalized SemVer and avoid "tag already exists" churn.
- **T7 — Doc parity:** FR-046/T46 text and task references reflect post-fix behavior and ownership boundaries.

---

## 3. Implementation plan

1. **Action:** Audit current `semver_converter.py` call graph and identify all mutating read paths.  
   **Deliverable:** Mutation map and single-source finalize strategy.
2. **Action:** Implement API split (`derive` read-only vs `finalize` mutating) and registry lock semantics.  
   **Deliverable:** Converter changes + migration-safe registry updates.
3. **Action:** Update RW call sites to use read-only derivation except at one explicit finalize boundary.  
   **Deliverable:** RW step integration with deterministic finalize timing.
4. **Action:** Add collision/idempotency/retry tests and fixtures against BR-061 scenarios.  
   **Deliverable:** Automated regression suite proving no high-frequency PATCH drift.
5. **Action:** Update T46 and FR-046 documentation to match implemented semantics and ownership split.  
   **Deliverable:** T46 text/AC updates cross-linked to T12 and BR-061.
6. **Action:** Validate end-to-end with dry-run release simulation and tag uniqueness checks.  
   **Deliverable:** Reproducible verification evidence for T12 ACs.

### 3.1 Files to create or modify

- `packages/frameworks/workflow mgt/scripts/version/semver_converter.py`
- `semver-registry.yaml` (schema-safe evolution if required)
- `packages/frameworks/workflow mgt/scripts/validation/validate_version_bump.py` (if finalize boundary checks required)
- `docs/project-management/kanban/epics/Epic-3/Story-002-versioning-cookbook-and-examples/T12-implement-task-touch-semver-mapping-mode.md`
- `docs/project-management/kanban/epics/Epic-5/Story-001-fr-repo/T46-rw-semver-tag-task-touch-mode.md`
- `docs/project-management/kanban/fr-br/FR-046-rw-semver-tag-task-touch-mode.md`
- Versioning/RW docs under `packages/frameworks/workflow mgt/docs/` as needed

### 3.2 Dependency order

1. Converter semantics split.
2. Registry compatibility.
3. RW call-site update.
4. Regression tests.
5. T46/FR-046 doc alignment.
6. End-to-end verification.

---

## 4. Success / verification criteria

- [ ] BR-061 behavior is eliminated: no PATCH inflation from repeated read-only conversions.
- [ ] Task-touch SemVer allocation is deterministic and collision-resistant under retries.
- [ ] RW tag/release behavior consumes finalized SemVer once per release flow.
- [ ] `T46` and `FR-046` accurately describe the implemented behavior and dependencies.
- [ ] Evidence includes focused tests and a replayable dry-run scenario.

---

## References

- [Host Task E3:S02:T12](../project-management/kanban/epics/Epic-3/Story-002-versioning-cookbook-and-examples/T12-implement-task-touch-semver-mapping-mode.md)
- [Cross-task E5:S01:T46](../project-management/kanban/epics/Epic-5/Story-001-fr-repo/T46-rw-semver-tag-task-touch-mode.md)
- [BR-061](../project-management/kanban/fr-br/BR-061-semver-task-touch-counter-increments-too-often.md)
- [FR-046](../project-management/kanban/fr-br/FR-046-rw-semver-tag-task-touch-mode.md)
