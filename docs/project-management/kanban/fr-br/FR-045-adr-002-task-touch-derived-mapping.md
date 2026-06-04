---
lifecycle: evergreen
ttl_days: null
created_at: 2026-02-26T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Feature Request: ADR-002 – Task-Touch Derived Mapping (Kanban → SemVer)

**Type:** Feature Request (FR)  
**Status:** REOPENED  
**Priority:** HIGH  
**Created:** 2026-02-26  
**Last updated:** 2026-06-04 (recurrence — internal↔SemVer PATCH/core collisions in `semver-registry.yaml`)  
**Code:** FR-045  
**Implementation Task (delivery):** [E03:S02:T12](../epics/epic-03/story-02-versioning-cookbook-and-examples/T12-implement-task-touch-semver-mapping-mode.md)  
**Historical anchor:** [E05:S01:T45](../epics/epic-05/story-01-fr-repo/T45-adr-002-task-touch-derived-mapping.md) (FR repository registry)  
**Related:** [BR-061](BR-061-semver-task-touch-counter-increments-too-often.md) · [BR-073](BR-073-semver-task-touch-collision-retrospective-fix.md) · [FR-046](FR-046-rw-semver-tag-task-touch-mode.md)  
**GitHub Issue:** [#18](https://github.com/RMS-Ltd/ai-dev-kit/issues/18)

---

## Recurrence (2026-06-04)

**Prior closure:** IMPLEMENTED (converter + tests shipped under **E05:S01:T45** / **E03:S02:T12** hardening).

**Why reopened:** `semver-registry.yaml` `task_touch_mode.mapping_history` again violates the **1:1** invariant (**FR-045:NF02**): multiple distinct internal versions share the same SemVer **PATCH** and **`MAJOR.MINOR.PATCH` core**.

| PATCH | Internal versions | SemVer cores |
|-------|-------------------|--------------|
| **870** | `0.5.9.12+3`, `0.6.9.17+1` | both `0.4.870` |
| **869** | `0.5.1.76+2`, `0.5.9.12+2` | both `0.4.869` |
| **806** | `0.6.9.5+4`, `0.6.9.6+1` | both `0.4.806` |
| **789** | `0.2.16.4+8`, `0.2.16.10+1` | both `0.4.789` |

**Observed symptom:** Git primary tag `v0.4.870` on **`d6053e5`** while latest install release **`0.6.9.17+1`** maps to **`0.4.870+1`** at **`a492597`** — external consumers cannot rely on monotonic unique SemVer per internal release.

**Delivery track:** [E03:S02:T12](../epics/epic-03/story-02-versioning-cookbook-and-examples/T12-implement-task-touch-semver-mapping-mode.md) + [IPP-E03S02T12](../../implementation-cycles/IPP-E03S02T12-task-touch-semver-collision-hardening.md).

**Fix attempted (2026-06-04, E03:S02:T12 wave 2):** PATCH + SemVer-core injective finalize; registry repaired per [semver-registry-collision-repair-2026-06-04.md](../../maintenance/semver-registry-collision-repair-2026-06-04.md). Pending user verification; Git tags not moved.

---

## Summary

Define and implement **ADR-002: Task-Touch Derived Mapping** that derives Semantic Versioning (SemVer) from the internal `RC.EPIC.STORY.TASK+BUILD` version using a **global task-touch counter**, providing a **strictly incrementing, 1:1 traceable SemVer** sequence suitable for package managers.

---

## Description

### What functionality is desired?

A new dual-versioning strategy where:

- **MAJOR** = `RC` (release candidate).
- **MINOR** = number of epics signed off (per RC).
- **PATCH** = **task-touch counter**: increments whenever a task is “touched” by a release (new task or return to an existing task).
- Optional **`+BUILD`** metadata mirrors the internal BUILD component for traceability.

This is the **Task-Touch Derived Mapping** described in ADR-002 and should be available as a first-class mapping mode in the Numbering & Versioning framework and Release Workflow.

### What problem does this solve?

Existing mapping strategies either:

- Produce **non-monotonic** SemVer sequences when work jumps between epics/stories (confusing for npm/PyPI and release ordering), or
- Require **independent SemVer** detached from Kanban, sacrificing direct traceability.

Task-touch mapping delivers:

- Strictly increasing SemVer (`PATCH` always increases).
- A deterministic, 1:1 mapping between internal version and external SemVer.
- A clear mental model: **“each task touch → one PATCH bump”**.

### What is the use case?

- Frameworks and adopter projects (like XOforge) using AI Dev Kit’s dual-versioning want:
  - Kanban-aligned internal versions for forensic traceability.
  - Package-manager-friendly SemVer for public distribution (npm, pub.dev, PyPI, etc.) that **never goes backwards**.
  - Automatic mapping, not manual SemVer decisions per release.


### Who would benefit from this feature?

- AI Dev Kit itself (canonical SemVer story for frameworks).
- Any consumer project that:
  - Uses the `RC.EPIC.STORY.TASK+BUILD` schema internally.
  - Publishes packages to SemVer-enforcing registries.


---

## Requirements

### Functional Requirements

- [x] **FR-045:R01** – Implement a `task_touch` SemVer mapping mode in the Numbering & Versioning framework:
  - MAJOR = RC.
  - MINOR = count of epics signed off (per RC).
  - PATCH = global task-touch counter.
  - Optional `+BUILD` = internal BUILD for the current version.

- [x] **FR-045:R02** – Persist task-touch counter in a canonical location (e.g. version file and/or `semver-registry.yaml`) and ensure it increments exactly once per RW release.
- [x] **FR-045:R03** – Provide a converter function (e.g. `get_semver_task_touch(...)`) that returns SemVer (with or without `+BUILD`) from an internal version string.
- [x] **FR-045:R04** – Document the mapping in dual-versioning docs (Numbering & Versioning framework) and ADR-002.
- [x] **FR-045:R05** – Expose mapping mode via configuration (e.g. `semver_mapping_strategy: task_touch` in `rw-config.yaml`).

### Non-Functional Requirements

- [x] **FR-045:NF01** – **Monotonicity:** SemVer must be strictly incrementing (no backwards PATCH values).
- [x] **FR-045:NF02** – **Traceability:** Mapping must be 1:1 between internal and SemVer values.
- [x] **FR-045:NF03** – **Compatibility:** Mapping must be compatible with SemVer expectations in package managers.

---

## Scope Analysis

**Problem Domain:** Numbering & Versioning Framework, Dual-Versioning for Package Managers  
**Affected Areas:**

- [x] Documentation
- [x] Testing
- [x] Versioning utilities / converters
- [x] Backend/API
- [ ] Frontend/UI
- [ ] Database/Schema
- [x] Other: Configuration and registry management

**Estimated Complexity:**

- [ ] Simple (1-3 days)
- [x] Medium (1 week)
- [ ] Complex (2+ weeks)
- [ ] Very Complex (1+ month)

---

## Use Cases

### Primary Use Case

1. Internal version advances across multiple epics/stories/tasks (e.g. `0.7.3.25+4`, `0.3.2.12+2`, `0.7.3.25+6`).
2. Each Release Workflow run increments the **task-touch counter** and derives SemVer:
   - `0.7.3.25+4` → `0.1.84+4`
   - `0.3.2.12+2` → `0.1.85+2`
   - `0.7.3.25+6` → `0.1.86+2`
3. SemVer sequences are strictly increasing and consistent across all epics/stories.
4. Package managers see a clean SemVer stream, while internal versions still encode Kanban E/S/T/BUILD.

### Additional Use Cases

- XOforge and other adopters configure `semver_mapping_strategy: task_touch` to:
  - Get monotonic SemVer tags.
  - Keep internal versions Kanban-aligned.


---

## Acceptance Criteria

- [x] **AC1:** `task_touch` mapping is implemented and configurable for projects via `rw-config.yaml`.
- [x] **AC2:** Converters (`get_semver_task_touch(...)`) are available and tested, producing strictly increasing SemVer for real-world sequences.
- [x] **AC3:** `semver-registry.yaml` (or equivalent) supports task-touch metadata as needed.
- [x] **AC4:** Dual-versioning documentation is updated with Task-Touch Derived Mapping (ADR-002), including worked examples.
- [x] **AC5:** At least one adopter project (e.g. XOforge) can switch to `task_touch` SemVer mapping without breaking CW/RW or package publishing.

---

## Dependencies

**Blocks:**

- Clean RW support for SemVer tagging in `task_touch` mode (FR-046).
- Package Version Workflow (PVW) alignment when using SemVer derived from task-touch mapping.

**Blocked By:**

- None (this FR defines ADR-002 itself).

**Related Work:**

- ADR-002: Task-Touch Derived Mapping — Kanban to SemVer (GitHub issue #18).
- Dual-versioning docs in the Numbering & Versioning framework.

---

## Intake Decision

**Intake Status:** REOPENED (2026-06-04 — collision recurrence)  
**Intake Date:** 2026-02-26  
**Intake By:** AI Agent (ai-dev-kit)

**Decision Flow Results:**

- [x] Story Match Found: Epic 5, Story 1 → Task 45
- [x] New Story Created: Epic 5, Story 1 → Task 45
- [x] New Epic Created: Epic 5, Story 1, Task 45

**Assigned To:**

- Epic: Epic 5 (Documentation Management and Maintenance)
- Story: Story 1 (FR Repository)
- Task: Task 45 (E05:S01:T45)
- Version: `v0.5.1.45+2` (IMPLEMENTED)

**Kanban Links:**

- Epic: [`docs/project-management/kanban/epics/epic-05/epic-05.md`](../epics/epic-05/epic-05.md)
- Story: [`docs/project-management/kanban/epics/epic-05/story-01-fr-repo.md`](../epics/epic-05/story-01-fr-repo.md)
- Task: [`docs/project-management/kanban/epics/epic-05/story-01-fr-repo/T45-adr-002-task-touch-derived-mapping.md`](../epics/epic-05/story-01-fr-repo/T45-adr-002-task-touch-derived-mapping.md)

---

## Notes

- **REOPENED 2026-06-04:** Collision recurrence in live registry; delivery continues under **E03:S02:T12** (not new intake under closed **E05:S01**).
- ✅ Original implementation remains the canonical ADR-002 anchor (**E05:S01:T45**); reopen scopes **injective mapping enforcement**, registry repair, and RW finalize guards.
- ✅ Implementation is complete in `packages/frameworks/workflow-mgt/scripts/version/semver_converter.py`
- ✅ Configuration available via `semver_mapping_strategy: task_touch` in `rw-config.yaml`
- ✅ Comprehensive test suite in `test_task_touch_mapping.py`
- ✅ Migration utility available in `migrate_to_task_touch.py`
- ✅ ADR-002 fully documented with examples and migration guidance

---

## References

- GitHub Issue [#18](https://github.com/RMS-Ltd/ai-dev-kit/issues/18).
- Dev Kit Versioning Policy and dual-versioning docs (Numbering & Versioning framework).

---

_This feature request follows the Kanban Framework FR template and is anchored as FR-045 in the FR repository story (E05:S01:T45)._

