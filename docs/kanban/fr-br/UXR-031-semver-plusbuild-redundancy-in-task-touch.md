---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-16T12:56:00Z
expires_at: null
housekeeping_policy: keep
---

# User Experience Research: SemVer `+BUILD` appears redundant in `task_touch` external display

**Type:** User Experience Research (UXR)  
**ID:** UXR-031  
**Submitted:** 2026-06-16  
**Submitted By:** User  
**Priority:** MEDIUM (Could Have — MoSCOW **C**)  
**Status:** INTAKE  
**Implementing Task:** [E03:S02:T15](../epics/epic-03/story-02-versioning-cookbook-and-examples/T15-semver-external-build-metadata-redundancy-uxr031.md)

**Related:** [FR-045](FR-045-adr-002-task-touch-derived-mapping.md) · [BR-061](BR-061-semver-task-touch-counter-increments-too-often.md) · [docs/governance/standards/dev-kit-versioning-policy.md](../../governance/standards/dev-kit-versioning-policy.md)

---

## Summary

In `task_touch` mode (`rw-config.yaml`), the external SemVer string includes `+BUILD` metadata. Maintainers may interpret that `+BUILD` meaningfully changes SemVer progression, when the external uniqueness/ordering is actually driven by the mapping’s `PATCH` allocation (task-touch counter).

This UXR validates whether `+BUILD` is redundant for outward SemVer UX, and recommends a clearer policy for what we display to external consumers.

---

## Research Objective

Determine whether external SemVer should include `+BUILD` in `task_touch` mode, or whether `+BUILD` should be treated as trace-only metadata (internal forensic signal) rather than a component of the user-facing version stream.

---

## Methodology

**Research method:** Code + documentation inspection by maintainer

**Evidence reviewed:**

- `rw-config.yaml` → `semver_mapping_strategy: task_touch`
- `packages/frameworks/workflow-mgt/scripts/version/semver_converter.py`
  - `convert_internal_to_semver_task_touch(...)`: external SemVer uses a global PATCH allocator, and preserves internal `build` into `+BUILD`
  - Git tag derivation: `semver_tag = semver_full.split('+')[0]` (core only) for tag naming
- Current README outward version line:
  - `README.md` shows `v{semver}` including `+BUILD`

---

## Key Findings

1. **Uniqueness/monotonicity comes from SemVer core (`MAJOR.MINOR.PATCH`).**
   In `task_touch` mapping, `PATCH` is assigned from the global `task_touch_counter` and is the monotonic stream intended for package managers.

2. **`+BUILD` is preserved from internal `VERSION_BUILD` for traceability only.**
   In `convert_internal_to_semver_task_touch`, `build_semver` is set from the internal `build` argument and is appended as SemVer build metadata.

3. **Primary Git tags already drop `+BUILD` (core only).**
   Tag naming uses `semver_tag = semver_full.split('+')[0]`, implying `+BUILD` is not part of the primary external tag namespace.

4. **Therefore, for outward consumer UX, `+BUILD` is at least partially redundant.**
   Even if it’s trace-useful, most “what changed / which release is newer” mental models should map to SemVer core, not `+BUILD` metadata.

---

## User Pain Points

- External consumers and maintainers may assume `+BUILD` is part of the meaningful SemVer progression (or precedence), when the system’s designed monotonic stream is the SemVer core.
- Maintainers must mentally separate:
  - “which release is newer?” (core stream, driven by PATCH allocator)
  - “which internal build instance?” (internal BUILD mirrored into `+BUILD`)

---

## Recommendations

1. **Clarify outward SemVer semantics.** Document explicitly that in `task_touch` mode, `+BUILD` is primarily trace/forensic metadata and does not represent the monotonic release progression signal.
2. **Optionally simplify outward display.** Consider showing external SemVer as core only (`vX.Y.Z`) in README/GitHub release display, while keeping the internal version (including `+BUILD`) in:
   - commit body / internal tag
   - changelog trace section
   - optional parentheses near the outward version
3. **Preserve current injectivity guarantees.** Do not alter internal allocation invariants; only adjust display/presentation policy unless a subsequent delivery task explicitly chooses otherwise.

**Priority order:** R2 → R1 → R3

---

## Acceptance Criteria (delivery task)

- [ ] T15 converts this UXR into a concrete policy decision:
  - “keep `+BUILD` externally” vs “show core only externally”
- [ ] The policy decision updates the relevant outward-facing docs (at minimum: README + versioning policy guidance), keeping internal forensic trace intact.
- [ ] UXR-031 ↔ E03:S02:T15 bidirectional links are wired (task references this UXR and this UXR references the task).

---

## Intake Decision

**Intake Status:** INTAKE  
**Intake Date:** 2026-06-16  
**Intake By:** User  

**Decision Flow Results:**
- [x] Story Match Found: Epic 3 Story 2 → Task E03:S02:T15

**Assigned To:**
- Epic: E03 — Numbering & Versioning Framework
- Story: E03:S02 — Versioning Cookbook & Examples
- Task: E03:S02:T15 — SemVer external +BUILD redundancy evaluation (UXR-031)

**Version:** `v0.0.0.0+0`

**Kanban Links:**
- Epic: `docs/kanban/epics/epic-03/Epic-03.md`
- Story: `docs/kanban/epics/epic-03/story-02-versioning-cookbook-and-examples.md`
- Task: `docs/kanban/epics/epic-03/story-02-versioning-cookbook-and-examples/T15-semver-external-build-metadata-redundancy-uxr031.md`

---

## References

- `packages/frameworks/workflow-mgt/scripts/version/semver_converter.py` (task_touch mapping + tag core derivation)
- `rw-config.yaml` (`semver_mapping_strategy: task_touch`)
- `docs/governance/standards/dev-kit-versioning-policy.md` (SemVer mapping model)
- `README.md` outward SemVer display

