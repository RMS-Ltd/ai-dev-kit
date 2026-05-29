---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-20T17:45:00Z
expires_at: null
housekeeping_policy: keep
---

# FR-088: Dedicated story for perpetual ongoing tasks

**Type:** Feature Request (FR)  
**ID:** FR-088  
**Submitted:** 2026-04-20  
**Submitted By:** User request  
**Priority:** HIGH  
**Severity:** HIGH  
**Status:** CLOSED

**Implementing Task:** [E2:S16:T01](../epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T01-establish-canonical-perpetual-ongoing-tasks-story-fr088.md)  
**IPP:** [`IPP-E2S16T01-canonical-perpetual-ongoing-tasks-story.md`](../../../implementation-cycles/IPP-E2S16T01-canonical-perpetual-ongoing-tasks-story.md)

---

## Summary

Create a dedicated Epic 2 story that is the canonical home for perpetual ongoing workflow tasks, so those tasks no longer default to unrelated stories and semantic ownership remains clear.

---

## Problem Statement

Perpetual tasks have been spread or repeatedly routed into stories that are not purpose-built for ongoing operational ownership, especially under overloaded paths. This creates semantic drift, governance confusion, and weakens long-term traceability.

---

## Requirements

### Functional Requirements

- [x] **FR-088-F1:** Create a dedicated Epic 2 story for perpetual ongoing workflow operations.
- [x] **FR-088-F2:** Define explicit scope boundaries and inclusion criteria for perpetual tasks.
- [x] **FR-088-F3:** Define migration policy for existing perpetual tasks currently housed elsewhere.
- [x] **FR-088-F4:** Wire story/task/FR/boards for deterministic discoverability.
- [x] **FR-088-F5:** Define guardrails to prevent new perpetual tasks being filed outside the dedicated story without explicit override rationale.

### Non-Functional Requirements

- [x] **FR-088-NF1:** Preserve historical traceability for existing task IDs and release history.
- [x] **FR-088-NF2:** Keep transition steps deterministic and reversible where practical.
- [x] **FR-088-NF3:** Keep governance language unambiguous and operationally testable.

---

## Acceptance Criteria

- [x] New Epic 2 story for perpetual ongoing tasks exists and is cross-linked.
- [x] Scope and out-of-scope rules are documented in the story/task.
- [x] Migration strategy for current perpetual tasks is defined.
- [x] `kboard` and `fbuboard` include the new task/FR linkage.
- [x] Follow-on implementation work can run against a single canonical task anchor.

---

## Related

- [FR-087](./FR-087-e6s07-default-housing-root-cause-and-closure-decision.md)
- [FR-041](./FR-041-perpetual-task-for-release-workflow-maintenance.md)
