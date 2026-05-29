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

- [x] **E2:S12:T01 – Add Step 17: Housekeeping to Release Workflow** - ✅ COMPLETE (v0.2.12.1+1 – Step 17 added: workflow YAML, documentation, and cursor rules updated)

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

## Tasks

### E2:S12:T01 – Add Step 17: Housekeeping to Release Workflow

**Input:** User request to add housekeeping step to RW  
**Deliverable:** Step 17 added to RW workflow and documentation  
**Dependencies:** None  
**Blocker:** None  
**Parallel Development Candidacy:** Safe (documentation and workflow update)

**Approach:**
1. Add `step-17: Housekeeping` to `release-workflow.yaml`
2. Configure handler: `ide.housekeeping`
3. Set dependencies: `step-16`
4. Configure: `clear_ide_todos: true`, `cleanup_temp_files: false` (future)
5. Update RW agent execution guide with Step 17 documentation
6. Update cursor rules to reference Step 17 as Step 13 (12-step core + housekeeping)
7. Update workflow version: 2.2.0 → 2.3.0
8. Update documentation version: 1.8.0 → 1.9.0

**Status:** ✅ COMPLETE (v0.2.12.1+0 – Step 17 added: workflow YAML, documentation, and cursor rules updated)

**Deliverables:**
- ✅ `packages/frameworks/workflow mgt/workflows/release-workflow.yaml` - Step 17 added
- ✅ `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md` - Step 17 documented
- ✅ `.cursorrules` - Step 13: Housekeeping added

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

- **Related:** E2:S01:T08 - Add Step 9 - IDE problem checking to Release Workflow (similar pattern)
- **Workflow:** `packages/frameworks/workflow mgt/workflows/release-workflow.yaml`
- **Documentation:** `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md`

