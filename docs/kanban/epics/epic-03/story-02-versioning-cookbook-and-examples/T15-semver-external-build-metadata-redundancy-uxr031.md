---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-16T12:56:00Z
expires_at: null
housekeeping_policy: keep
---

# E03:S02:T15 — SemVer external `+BUILD` redundancy evaluation & policy decision (UXR-031)

**Task ID:** E03:S02:T15  
**Status:** INTAKE  
**Priority:** MEDIUM  
**Estimated Effort:** Low–Medium (policy + docs; possible follow-on code)  
**Created:** 2026-06-16  
**Last updated:** 2026-06-16 (v0.2.16.2+12 – Kanban documentation setup; UXR-031 intake)
**Version:** v0.2.16.2+12  
**Code:** E03S02T15

---

**Associated UXR:** [UXR-031](../../../fr-br/UXR-031-semver-plusbuild-redundancy-in-task-touch.md)  
**Related:** [FR-045](../../../fr-br/FR-045-adr-002-task-touch-derived-mapping.md) · [BR-061](../../../fr-br/BR-061-semver-task-touch-counter-increments-too-often.md)

---

## Scope

Validate and decide the outward UX policy for SemVer strings produced in `task_touch` mode:

- Confirm what the external consumers should interpret as the “version progression signal”.
- Decide whether external SemVer should:
  - (Option A) show SemVer core only (`MAJOR.MINOR.PATCH`) and keep internal `BUILD` in a trace channel, or
  - (Option B) keep showing `+BUILD` externally but document it as trace-only metadata (not the monotonic ordering signal).

This task does not change internal allocation invariants by itself; it creates the policy + deliverable plan for any later implementation.

---

## Input

- [UXR-031](../../../fr-br/UXR-031-semver-plusbuild-redundancy-in-task-touch.md)
- `rw-config.yaml` (`semver_mapping_strategy: task_touch`)
- `packages/frameworks/workflow-mgt/scripts/version/semver_converter.py`
  - `convert_internal_to_semver_task_touch(...)` (PATCH allocator vs preserved internal BUILD)
  - `semver_tag = semver_full.split('+')[0]` (primary Git tag core only)
- `docs/governance/standards/dev-kit-versioning-policy.md` (internal vs external dual-version model)
- `README.md` outward version line (currently includes `+BUILD`)

---

## Deliverable

1. **Policy decision memo** (stored in this story) stating the chosen outward SemVer representation.
2. **Docs impact checklist** listing the exact surfaces to update (README, versioning policy guidance, changelog/Release summary conventions).
3. **Follow-on implementation plan** (if Option A is chosen and requires code/template changes):
   - what must change in RW/README/changelog emission
   - what must remain stable for injectivity + validator compatibility

---

## Acceptance Criteria

- [ ] UXR-031 ↔ E03:S02:T15 bidirectional wiring is present (UXR references this task; task references UXR-031).
- [ ] A single, explicit outward SemVer UX decision is documented:
  - either Option A or Option B
- [ ] The decision includes a clear statement of what external consumers should use for ordering/precedence.
- [ ] The decision provides a concrete list of files/sections for follow-on delivery (even if implementation is deferred).

---

## Approach

1. Summarize the current `task_touch` behavior from `semver_converter.py`:
   - what controls monotonic SemVer progression (SemVer core)
   - what `+BUILD` represents (internal BUILD mirror)
2. Evaluate whether `+BUILD` changes any precedence/ordering semantics in our ecosystem (Git tags vs README display).
3. Choose the least confusing outward representation and update guidance accordingly.
4. If Option A is selected, produce a follow-on plan scoped to “display/presentation”, preserving internal traceability and allocation invariants.

---

## Dependencies

- UXR-031 evidence + maintainer interpretation.
- Current SemVer emission behavior in RW Step 10/11 commit subject + README/changelog update surfaces.

