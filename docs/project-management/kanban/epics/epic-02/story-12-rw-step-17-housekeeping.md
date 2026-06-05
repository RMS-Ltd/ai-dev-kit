---
lifecycle: evergreen
ttl_days: null
created_at: 2026-01-05T20:30:00Z
expires_at: null
housekeeping_policy: keep
---

# Story 012 – RW Step 17: Housekeeping

**Status:** COMPLETE ✅  
**Priority:** MEDIUM  
**Last updated:** 2026-01-05 (v0.2.12.1+1 – All tasks complete: Step 17 added to RW)  
**Estimated Effort:** Small  
**Started:** 2026-01-05  
**Completed:** 2026-01-05  
**Version:** v0.2.12.1+1  
**Code:** E2S12

---

## Task Checklist

- [x] **E02:S12:T01 – Add Step 17: Housekeeping to Release Workflow** - ✅ COMPLETE (v0.2.12.1+1 – Step 17 added: workflow YAML, documentation, and cursor rules updated)
  - Task: [`T01-add-step-17-housekeeping-to-release-workflow`](story-12-rw-step-17-housekeeping/T01-add-step-17-housekeeping-to-release-workflow.md)

> **Format:** `E2:S12:Txx` (Epic 2, Story 12, Task with 2-digit zero padding)  
> **Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)` (e.g., `✅ COMPLETE (v0.2.12.1+1)`)

---

## Overview

Add Step 17: Housekeeping to the Release Workflow. This step runs at the end of RW to clean up IDE state and temporary artifacts, currently focusing on clearing the IDE todo list.

---

## Goals

- [ ] Add Step 17: Housekeeping to Release Workflow YAML
- [ ] Update RW documentation with Step 17 execution guide
- [ ] Update cursor rules to reference Step 17
- [ ] Ensure housekeeping step clears IDE todo list at end of workflow

---

## Acceptance Criteria

- [x] Step 17 added to Release Workflow YAML
- [x] Step 17 documented in RW agent execution guide
- [x] Step 17 referenced in cursor rules
- [x] Workflow version updated to 2.3.0
- [x] Documentation version updated to 1.9.0
- [x] Housekeeping step clears IDE todo list

---

## Dependencies

**Blocks:**
- Clean IDE state after RW completion

**Blocked By:**
- None

---

## References

- **Related:** E02:S01:T08 - Add Step 9 - IDE problem checking to Release Workflow (similar pattern)
- **Workflow:** `packages/frameworks/workflow-mgt/workflows/release-workflow.yaml`
- **Documentation:** `packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md`

