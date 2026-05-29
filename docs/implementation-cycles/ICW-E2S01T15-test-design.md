---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-09T12:55:00Z
expires_at: null
housekeeping_policy: keep
---

# ICW-E2S01T15-Test-Design: FR-049 Canonical RW Step SoT

**Task:** E2:S01:T15  
**Related FR:** FR-049  
**Host Task:** [T15-canonical-rw-step-list-single-source-of-truth-fr049.md](../project-management/kanban/epics/Epic-2/Story-001-rw-agent-execution-and-docs/T15-canonical-rw-step-list-single-source-of-truth-fr049.md)  
**Created:** 2026-04-09

---

## Test Strategy

Validate that canonical RW step definitions stay single-source and that all traceability links for `FR-049`/`T15` remain intact.

---

## Coverage Matrix

1. **FR metadata correctness**
   - File: `docs/project-management/kanban/fr-br/FR-049-canonical-rw-step-list-single-source-of-truth.md`
   - Check: `Code` and `Implementing Task` fields point to `E2:S01:T15`.

2. **Task housing correctness**
   - File path and task header align to `E2:S01:T15`.

3. **Story checklist wiring**
   - File: `docs/project-management/kanban/epics/Epic-2/Story-001-rw-agent-execution-and-docs.md`
   - Check: checklist row references `T15` and `FR-049`.

4. **Canonical-step consistency**
   - Verify canonical RW step concept is represented as SoT and consumers do not introduce conflicting step definitions.

5. **Bidirectional links**
   - FR -> Task and Task -> FR links both present.

6. **Release metadata completeness**
   - Task contains `Status`, `Version`, `Version Anchor`.

---

## Failure Modes

- FR points to wrong or missing implementing task.
- Task exists but story checklist row is absent or stale.
- Step-13 wording diverges between canonical source and consumer docs.
- Duplicate hardcoded step lists reappear in maintained docs/scripts.
- Linking becomes one-way after subsequent edits.

---

## Test Execution Order

1. Validate FR/task/story identity and path correctness.
2. Validate bidirectional links.
3. Validate canonical-step and consumer consistency assertions.
4. Validate release-marker fields for traceability.
5. Record evidence in implementation-plan handoff checklist.

---

## Regression Guard Notes

Any future edits to RW step definitions should include a consistency sweep of canonical source + consumer surfaces before release to avoid drift reintroduction.
