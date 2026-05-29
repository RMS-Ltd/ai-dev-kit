---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-09T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# ICW-E4S08T07-Specification: FR-011 Multi-Epic Task Splitting

**Task:** E4:S08:T07  
**Related FR:** FR-011  
**Host Task:** [T07-task-splitting-across-multiple-canonical-epics-fr-011.md](../project-management/kanban/epics/Epic-4/Story-008-intelligent-epic-matching-canonical-adoption/T07-task-splitting-across-multiple-canonical-epics-fr-011.md)  
**Created:** 2026-04-09

---

## Executive Summary

Define the planning baseline for implementing multi-epic task splitting when one source epic partially matches multiple canonical epics. The implementation must preserve explainability and deterministic reference updates.

---

## Problem Statement

Current migration logic favors a single best epic match, which can misplace tasks for mixed-responsibility epics. FR-011 requires task-level assignment across multiple canonical epics with clear rationale and consistent identifier updates.

---

## Scope

In scope:

- Detect multi-epic partial-match scenarios from epic-level semantic analysis.
- Perform task-level assignment to canonical epic/story targets.
- Produce migration/split plans with human-readable rationale.
- Remap task identifiers and update references deterministically.

Out of scope:

- Frontend/UI workflows for split-plan review.
- Non-migration product features unrelated to canonical adoption.
- Full runtime implementation details beyond planning and test definition.

---

## Functional Invariants

1. **Multi-match detection invariant**  
   When multiple canonical epics meet split-eligibility thresholds, the system classifies the source epic as split-candidate.

2. **Task assignment invariant**  
   Every source task receives exactly one canonical assignment decision for a given split-plan run.

3. **Explainability invariant**  
   Each assignment includes explicit rationale (signals, confidence, and tie-break outcomes).

4. **Deterministic remap invariant**  
   Given identical input and configuration, output task IDs and reference rewrites are stable and repeatable.

5. **Reference integrity invariant**  
   After remap, no stale references to pre-split task IDs remain in declared migration targets.

---

## FR-011 Requirement Mapping

- **FR-1 / AC-1:** Multi-epic partial-match detection rules and thresholds documented.
- **FR-2 / AC-2:** Task-content analysis strategy documented for per-task epic assignment.
- **FR-3 / AC-3:** Split assignment behavior specified for multi-epic outcomes.
- **FR-4 / AC-4:** Migration plan output contract includes split mappings and rationale.
- **FR-5 / AC-5:** Task ID remap contract specified with deterministic tie-breaking.
- **FR-6 / AC-6:** Reference update scope and verification contract defined.

---

## Non-Functional Constraints

- **Transparency:** Split decisions must be auditable by operators.
- **Usability:** Plan output must support human confirmation workflows.
- **Reliability:** Deterministic mode must avoid non-reproducible assignment drift.

---

## Edge Cases and Boundaries

- Multiple equally strong canonical matches for the same task.
- Missing canonical stories under a selected target epic.
- Conflicting ID spaces during remap.
- Legacy references in markdown/prose that are not machine-structured.

Boundary policy:

- Use explicit deterministic tie-breakers.
- Emit unresolved-reference reports instead of silent mutation for ambiguous prose.

---

## Acceptance Assertions

- Planning artifacts define testable checks for all FR-011 requirements and ACs.
- Split-plan output schema and remap rules are specified before coding.
- Host task and FR remain bidirectionally linked to all planning artifacts.
