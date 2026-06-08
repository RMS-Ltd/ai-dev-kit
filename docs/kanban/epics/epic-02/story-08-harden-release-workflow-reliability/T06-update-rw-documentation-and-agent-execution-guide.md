---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T04:50:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 2, Story 8, Task 6: Update RW documentation and agent execution guide

**Task ID:** E02:S08:T06  
**Status:** ✅ COMPLETE  
**Priority:** MEDIUM  
**Last updated:** 2026-06-05 (v0.0.0.0+0 – migrated from embedded Story section)  
**Version:** v0.0.0.0+0  
**Code:** E02S08T06

---

## Task ID

**Format:** `E{epic}:S{story}:T{task}`

**Full Task ID:** `E02:S08:T06`

---

## Scope

Document the deterministic/agentic split, hooks, and blocked protocol so agents know exactly where judgement is expected vs forbidden. Update Release Workflow reference documentation and agent execution guide with comprehensive Step 7 details.

---

## Input

- Complete implementation from T01-T05
- Release Workflow documentation
- Agent execution guide

---

## Deliverable

- Updated Release Workflow reference documentation
- Updated agent execution guide with Step 7 details
- Examples and troubleshooting guide
- Updated workflow YAML documentation

---

## Acceptance Criteria

- [x] ✅ Release Workflow reference updated
- [x] ✅ Agent execution guide includes Step 7 details
- [x] ✅ Examples provided
- [x] ✅ Troubleshooting guide included
- [x] ✅ Documentation is clear and complete

**Completion Summary:**

Updated Release Workflow agent execution guide (`packages/frameworks/workflow-mgt/docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md`) with comprehensive Step 7 hardening documentation:

**Step 7 Documentation Updates:**
- **Mandatory & Blocking:** Documented that Step 7 is mandatory (`required: true`, `mandatory: true`) and blocking (`blocking: true`)
- **Framework-Agnostic Script:** Documented use of `packages/frameworks/workflow-mgt/scripts/update_kanban_docs.py`
- **Execution Flow:** Detailed script execution flow (config loading, version extraction, path resolution, updates, validation)
- **Validation Details:** Documented Steps 12-14 validation (internal consistency, policy compliance, version drift detection)
- **Error Handling:** Documented 12 error types and recovery playbooks
- **Override Mechanism:** Documented `--allow-override` flag with warnings
- **Examples:** Provided 3 examples (successful update, validation failure, dry-run mode)

**Key Documentation Sections:**
- **CRITICAL REQUIREMENTS:** Mandatory, blocking, framework-agnostic behavior
- **Agent Execution:** 5-step ANALYZE → DETERMINE → EXECUTE → VALIDATE → PROCEED pattern
- **Framework Script Details:** Script location, features, execution flow
- **Validation Checks:** Steps 12-14 validation details
- **Error Handling:** 12 error types with recovery guidance
- **Examples:** Real-world examples with expected output

**Version History:**
- Updated document version to 1.7.0
- Added changelog entry for Step 7 hardening documentation

**Impact:**
- Agents now have clear guidance on Step 7 execution
- Deterministic vs agentic boundaries clearly documented
- Error handling and recovery procedures documented
- Examples provide concrete reference for agents

---

---

## Version Anchor

**Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)`

---

## Migration Notes

Migrated from embedded Story section via `generate_task_doc.py` (FR-016 Wave 1 tooling).

**Source Story:** `docs/kanban/epics/epic-02/story-08-harden-release-workflow-reliability.md`

