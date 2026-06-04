---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-04T22:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E03:S02:T12 — Planning: Task-touch SemVer collision remediation (wave 2) (IPW)

**Host Task:** [`T12-implement-task-touch-semver-mapping-mode.md`](../project-management/kanban/epics/epic-03/story-02-versioning-cookbook-and-examples/T12-implement-task-touch-semver-mapping-mode.md) **(E03:S02:T12)**  
**Planning for:** [FR-045](../project-management/kanban/fr-br/FR-045-adr-002-task-touch-derived-mapping.md) · [FR-046](../project-management/kanban/fr-br/FR-046-rw-semver-tag-task-touch-mode.md) · [BR-061](../project-management/kanban/fr-br/BR-061-semver-task-touch-counter-increments-too-often.md)  
**Status:** Approved

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | Injective PATCH: each finalized internal maps to a unique PATCH under `rc_0` | FR-045 NF02, BR-061 |
| RF2 | Injective SemVer core: no two distinct internals share `MAJOR.MINOR.PATCH` | FR-046, FR-045 recurrence |
| RF3 | Finalize-time hard-fail with deterministic diagnostics | BR-061 |
| RF4 | Read-only convert idempotent; mutate only on `finalize=True` | BR-061 |
| RF5 | Registry audit + repair for ai-dev-kit (manifest-driven) | FR-045, T12 AC backfill |
| RF6 | RW boundary: fail before silent SemVer tag collision | FR-046 |
| RF7 | No remote tag rewrite; document tag↔internal mismatches | User decision |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RNF1 | pytest coverage + RW Step 9 validator | Project convention |
| RNF2 | Backward-compatible `mapping_history` shape | semver-registry.yaml |

### 1.3 Invariants and boundaries

- **Invariants:** 1 internal ↔ 1 PATCH ↔ 1 SemVer core (for task_touch primary tags).
- **In scope:** `semver_converter.py`, audit/repair/validate scripts, registry repair, policy/incident docs.
- **Out of scope:** Force-moving published Git tags; new FR-repo intake tasks.

---

## 2. Specification

### 2.1 Goal

Restore trustworthy 1:1 task-touch mapping, block new collisions at finalize, and repair live `semver-registry.yaml` without rewriting remote tags.

### 2.2 Specification mapping

Converter gains PATCH- and core-level injective guards; counter syncs to `max(patch)` after finalize. Audit/repair tooling fixes four known collision groups. Validator blocks RW when registry is non-injective.

### 2.3 Constraints

- Primary RW tag uses SemVer core without `+BUILD`.
- Repair keeps canonical internals per manifest; orphans may be removed when duplicate of canonical row.

### 2.4 Status transition intent

- **Current task status:** IN PROGRESS
- **Transition to COMPLETE:** All RF1–RF7 evidenced; pytest + audit clean.
- **Owner:** Implementation execution / RW E03:S02:T12.

### 2.5 ADR necessity decision

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | N | ADR-002 task-touch already chosen |
| T2 | Reversibility | N | Registry repair via git |
| T3 | Blast radius | Y | All RW SemVer tags — refinement only |
| T4–T7 | N | | |

**Outcome:** **ALREADY_COVERED** — update [dev-kit-versioning-policy.md](../governance/standards/dev-kit-versioning-policy.md) and [semver-tag-collision-incident-2026-03-07.md](../architecture/standards-and-adrs/semver-tag-collision-incident-2026-03-07.md). No new ADR.

---

## 3. Test design

| ID | Behavior / layer | Expected check |
| -- | ---------------- | -------------- |
| T1 | Finalize duplicate PATCH | ValueError |
| T2 | Finalize duplicate core, different BUILD | ValueError |
| T3 | Audit on fixture with collisions | Non-zero report |
| T4 | Repair manifest on temp registry | Zero collisions after |
| T5 | `validate_semver_registry_injective.py` | Exit 0 on repaired repo registry |
| T6 | Read-only / idempotent finalize | Existing tests pass |

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | Confirm E03:S02:T12 IN PROGRESS; wire IPP | Task doc links |
| 2 | Injective guards + counter sync in `semver_converter.py` | Code |
| 3 | `audit_semver_registry_collisions.py` + `repair_semver_registry_collisions.py` | Scripts |
| 4 | Apply repair manifest to `semver-registry.yaml` | Clean registry |
| 5 | `validate_semver_registry_injective.py` + RW doc hook | Validator |
| 6 | pytest extensions | Tests green |
| 7 | Policy, incident, maintenance manifest docs | Docs |
| **N** | Reconcile task/FR/BR status after RW evidence | Kanban |

### 4.1 Files to create or modify

- `packages/frameworks/workflow mgt/scripts/version/semver_converter.py`
- `packages/frameworks/workflow mgt/scripts/version/audit_semver_registry_collisions.py`
- `packages/frameworks/workflow mgt/scripts/version/repair_semver_registry_collisions.py`
- `packages/frameworks/workflow mgt/scripts/version/task_touch_registry_audit.py` (shared lib)
- `packages/frameworks/workflow mgt/scripts/validation/validate_semver_registry_injective.py`
- `packages/frameworks/workflow mgt/scripts/version/test_task_touch_mapping.py`
- `tests/test_semver_registry_injective.py`
- `semver-registry.yaml`
- `docs/maintenance/semver-registry-collision-repair-2026-06-04.md`
- `docs/maintenance/semver-registry-collision-repair-manifest.yaml`

---

## 5. Documentation deliverables

### 5.1 Existing documents to update

| Doc ID | Path | Scope |
| ------ | ---- | ----- |
| D-U1 | T12 task doc | IPP link, AC notes |
| D-U2 | FR-045, FR-046, BR-061 | Fix attempted + manifest link |
| D-U3 | dev-kit-versioning-policy.md | PATCH + core injectivity |
| D-U4 | semver-tag-collision-incident | Wave-2 addendum |
| D-U5 | migrate_to_task_touch.py docstring | Audit/repair pointers |
| D-U6 | release-workflow-agent-execution.md | Step 9 validator |

### 5.2 New documents to create

| Doc ID | Path | Purpose |
| ------ | ---- | ------- |
| D-C1 | docs/maintenance/semver-registry-collision-repair-2026-06-04.md | Repair report |
| D-C2 | docs/maintenance/semver-registry-collision-repair-manifest.yaml | Canonical choices |

---

## 6. Documentation housing

| Doc ID | Canonical path | Publication status | Lifecycle |
| ------ | -------------- | ------------------ | --------- |
| IPP | docs/implementation-cycles/IPP-E03S02T12-*.md | PUBLISHED | evergreen |
| D-C1, D-C2 | docs/maintenance/ | PUBLISHED | evergreen |

---

## 7. Success / verification criteria

- [ ] Audit reports zero PATCH/core collisions on repaired registry
- [ ] `pytest` task-touch + registry injective tests pass
- [ ] `validate_semver_registry_injective.py` exits 0
- [ ] Finalize rejects duplicate PATCH/core in unit tests
- [ ] Maintenance doc records `v0.4.870` tag misalignment (no retag)

---

## References

- [semver_converter.py](../../packages/frameworks/workflow%20mgt/scripts/version/semver_converter.py)
- [IPW ADR checklist](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md)
- [Incident log](../architecture/standards-and-adrs/semver-tag-collision-incident-2026-03-07.md)
