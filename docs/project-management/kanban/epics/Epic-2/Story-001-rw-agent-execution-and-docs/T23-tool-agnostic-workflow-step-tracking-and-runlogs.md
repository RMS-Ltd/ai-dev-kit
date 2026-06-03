---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-30T17:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 2, Story 1, Task 23: Tool-agnostic workflow step tracking + persisted run logs

**Task ID:** E02:S01:T23  
**Status:** COMPLETE  
**Priority:** HIGH  
**Estimated Effort:** Large  
**Created:** 2026-05-29  
**Last updated:** 2026-05-30 (v0.2.1.23+1 — RW: ADR-011 Workflow Step Tracker + governance sweep)
**Version Anchor:** v0.2.1.23+1  
**Code:** E02S01T23

**Historical Anchor:** `E06:S07:T18` (legacy housing under ADK analysis story)

**Task Type:** Hardening / Workflow Governance

Publication Status: NOT_APPLICABLE  
Publication N/A Reason: Re-housed RW/UKW governance task; IPP documents planning and implementation.

---

## Input

- Analysis of Cursor TODO dependency in workflow governance documentation
- Identification of Windsurf/Cascade `todo_list` capability as replacement
- Requirement for tool-agnostic workflow step tracking specification
- Need for persisted run log mechanism for workflow resumption
- [E04:S19:T03 investigation report](../../../../implementation-cycles/E04S19T03-e6s07-default-housing-investigation-report.md) §5.2
- [IPP-E2S01T23-tool-agnostic-workflow-step-tracking-runlogs.md](../../../../../implementation-cycles/IPP-E2S01T23-tool-agnostic-workflow-step-tracking-runlogs.md)

## Overview

Migrate workflow progress tracking requirements away from Cursor-specific TODO tooling to a tool-agnostic model compatible with Windsurf/Cascade, including a persisted **workflow run log** for resumption across sessions.

## Problem Statement

Current workflow governance documentation (especially RW) mandated Cursor TODO usage (`todo_write`) for step tracking, atomicity, interruption recovery, and post-run housekeeping. This bound frameworks to a specific IDE feature and limited portability.

## Deliverables

- Tool-agnostic documentation updates replacing Cursor-specific TODO requirements with a **Workflow Step Tracker** requirement
- Windsurf/Cascade execution guidance using `todo_list` where applicable
- Persisted workflow run log spec (file-based): workflow name, route/intent, current step, blocking reason, timestamps

## Acceptance criteria

- [x] **AC1:** Workflow governance docs no longer require Cursor TODOs specifically
- [x] **AC2:** Governance docs clearly define required **Workflow Step Tracker** semantics
- [x] **AC3:** Windsurf/Cascade guidance exists for step tracking via `todo_list`
- [x] **AC4:** Persisted run log spec exists and is referenced by RW documentation
- [x] **AC5:** RW “housekeeping” guidance updated for tool-agnostic cleanup (including run log finalization)

## References

- [IPP-E2S01T23-tool-agnostic-workflow-step-tracking-runlogs.md](../../../../../implementation-cycles/IPP-E2S01T23-tool-agnostic-workflow-step-tracking-runlogs.md)
- [ADR-011-workflow-step-tracker-and-agent-run-log.md](../../../../architecture/standards-and-adrs/ADR-011-workflow-step-tracker-and-agent-run-log.md)
- [workflow-step-tracker-contract.md](../../../../../packages/frameworks/workflow%20mgt/KB/Documentation/Developer_Docs/vwmp/workflow-step-tracker-contract.md)
- [workflow-agent-run-log-v1.schema.json](../../../../architecture/standards-and-adrs/schemas/workflow-agent-run-log-v1.schema.json)
- [Superseded source: `E06:S07:T18`](../../Epic-6/Story-007-adk-implementation-analysis-and-package-management/T18-tool-agnostic-workflow-step-tracking-and-runlogs.md)
- [E04:S19:T03 investigation report](../../../../implementation-cycles/E04S19T03-e6s07-default-housing-investigation-report.md)
