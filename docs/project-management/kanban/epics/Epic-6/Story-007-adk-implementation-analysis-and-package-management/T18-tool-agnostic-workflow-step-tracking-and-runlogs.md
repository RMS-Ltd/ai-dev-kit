---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-07T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 6, Story 7, Task 18: Tool-Agnostic Workflow Step Tracking + Persisted Run Logs (Cursor TODO Migration)

**Status:** TODO  
**Priority:** HIGH  
**Last updated:** 2026-03-07  
**Started:** 2026-03-07  
**Completed:** N/A  

**Task Type:** Hardening / Workflow Governance  
**Build Warning Suppression:** false  
**Code:** E6S07T18

---

## Task ID

**Format:** `E\{epic\}:S\{story\}:T\{task\}`  
**Value:** `E6:S07:T18`

---

## Input

- Analysis of Cursor TODO dependency in workflow governance documentation
- Identification of Windsurf/Cascade `todo_list` capability as replacement
- Requirement for tool-agnostic workflow step tracking specification
- Need for persisted run log mechanism for workflow resumption

---

## Overview

Migrate workflow progress tracking requirements away from Cursor-specific TODO tooling to a tool-agnostic model compatible with Windsurf/Cascade.

This includes:

- Defining a canonical, tool-agnostic concept of a **Workflow Step Tracker** (RW/UKW/CMW/PVW)
- Adding a persisted **workflow run log** mechanism so workflows can be resumed reliably across sessions and tooling

---

## Problem Statement

Current workflow governance documentation (especially RW) mandates Cursor TODO usage (`todo_write`) for step tracking, atomicity, interruption recovery, and post-run housekeeping.

This is brittle:
- It binds the frameworks to a specific IDE feature
- It does not translate cleanly to Windsurf/Cascade execution
- It limits the portability of the workflows to other tooling environments

---

## Deliverables

- Tool-agnostic documentation updates replacing Cursor-specific TODO requirements with a **Workflow Step Tracker** requirement
- Windsurf/Cascade execution guidance using the `todo_list` capability as the default implementation
- A persisted workflow run log spec (file-based) that records:

  - workflow name
  - route/intent (e.g., doc-init +0 vs normal task delivery)
  - current step + completion state
  - blocking reason + remediation instructions
  - timestamps


---

## Approach

1. Identify all documents that mandate Cursor TODOs (RW/UKW/CMW/PVW and meta workflow docs)
2. Replace Cursor-specific language with tool-agnostic requirements and accepted implementations
3. Define a canonical persisted run log location + schema
4. Ensure RW runbook references the new tracker + run log expectations

---

## Acceptance Criteria

- [ ] Workflow governance docs no longer require Cursor TODOs specifically
- [ ] Governance docs clearly define the required **Workflow Step Tracker** semantics
- [ ] Windsurf/Cascade guidance exists for step tracking via `todo_list`
- [ ] Persisted run log spec exists and is referenced by RW documentation
- [ ] RW “housekeeping” guidance is updated to reflect tool-agnostic cleanup (including run log finalization)
