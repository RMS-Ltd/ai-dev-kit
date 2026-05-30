---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-29T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 2, Story 1, Task 23: Tool-agnostic workflow step tracking + persisted run logs

**Task ID:** E02:S01:T23  
**Status:** TODO  
**Priority:** HIGH  
**Estimated Effort:** Large  
**Created:** 2026-05-29  
**Last updated:** 2026-05-29 (re-housed from `E06:S07:T18` per FR-087 Wave 4 / `E04:S19:T03` investigation report)  
**Code:** E02S01T23

**Historical Anchor:** `E06:S07:T18` (legacy housing under ADK analysis story)

**Task Type:** Hardening / Workflow Governance

Publication Status: NOT_APPLICABLE
Publication N/A Reason: Re-housed RW/UKW governance task; consolidated planning may use IPP when implementation starts.

---

## Input

- Analysis of Cursor TODO dependency in workflow governance documentation
- Identification of Windsurf/Cascade `todo_list` capability as replacement
- Requirement for tool-agnostic workflow step tracking specification
- Need for persisted run log mechanism for workflow resumption
- [E04:S19:T03 investigation report](../../../../implementation-cycles/E04S19T03-e6s07-default-housing-investigation-report.md) §5.2

## Overview

Migrate workflow progress tracking requirements away from Cursor-specific TODO tooling to a tool-agnostic model compatible with Windsurf/Cascade, including a persisted **workflow run log** for resumption across sessions.

## Problem Statement

Current workflow governance documentation (especially RW) mandates Cursor TODO usage (`todo_write`) for step tracking, atomicity, interruption recovery, and post-run housekeeping. This binds frameworks to a specific IDE feature and limits portability.

## Deliverables

- Tool-agnostic documentation updates replacing Cursor-specific TODO requirements with a **Workflow Step Tracker** requirement
- Windsurf/Cascade execution guidance using `todo_list` where applicable
- Persisted workflow run log spec (file-based): workflow name, route/intent, current step, blocking reason, timestamps

## Acceptance Criteria

- [ ] Workflow governance docs no longer require Cursor TODOs specifically
- [ ] Governance docs clearly define required **Workflow Step Tracker** semantics
- [ ] Windsurf/Cascade guidance exists for step tracking via `todo_list`
- [ ] Persisted run log spec exists and is referenced by RW documentation
- [ ] RW “housekeeping” guidance updated for tool-agnostic cleanup (including run log finalization)

## References

- [Superseded source: `E06:S07:T18`](../../Epic-6/Story-007-adk-implementation-analysis-and-package-management/T18-tool-agnostic-workflow-step-tracking-and-runlogs.md)
- [ICW-E06S07T18-specification](../../../../implementation-cycles/ICW-E06S07T18-specification.md) (historical planning under legacy housing)
- [E04:S19:T03 investigation report](../../../../implementation-cycles/E04S19T03-e6s07-default-housing-investigation-report.md)
