# Changelog: v0.5.8.2+7

**Release Date:** 2026-02-22 10:52:07 UTC  
**Epic:** 5 (Documentation Management)  
**Story:** 8 (Knowledge Base)  
**Task:** 2 (Notion hub, Knowledge Base container, and KB index)  
**Internal Version:** 0.5.8.2+7  
**Attribution:** E5:S08:T02

---

## Summary

FR-037 implementation: Kanban governance policy updated with task prioritisation, MUST HAVE stack/queue ordering, and universal COMPLETE definition. Added `validate_kanban_governance_policy.py` and unit tests. UKW and RW docs updated.

---

## Added

- **`validate_kanban_governance_policy.py`** – FR-037 validator; asserts R01–R05 content in governance policy
- **`tests/test_validate_kanban_governance_policy.py`** – 14 unit tests for FR-037 validator

---

## Changed

- **`packages/frameworks/kanban/policies/kanban-governance-policy.md`** – Task prioritisation section, MUST HAVE stack (bug-based) / queue (other), scripts/UKW/RW statement, COMPLETE definition, board guide reference
- **`packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/update-kanban-workflow-agent-execution.md`** – Stack/queue for MUST HAVE; reference to governance policy
- **`packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md`** – FR-037 mention; Kanban policy alignment note
- **`docs/project-management/kanban/epics/Epic-5/Story-001-fr-repo/T37-kanban-policy-task-prioritisation-queue-stack.md`** – Specification subsection (R01–R05 mapping)
- **`docs/project-management/kanban/fr-br/FR-037-kanban-policy-task-prioritisation-queue-stack.md`** – R01–R05, NF01–NF03, acceptance criteria marked complete; manual UAT checklist

---

## References

- **Task:** `docs/project-management/kanban/epics/Epic-5/Story-008-knowledge-base/T02-notion-hub-and-kb-index.md`
- **Story:** `docs/project-management/kanban/epics/Epic-5/Story-008-knowledge-base.md`
- **FR-037:** `docs/project-management/kanban/fr-br/FR-037-kanban-policy-task-prioritisation-queue-stack.md`
