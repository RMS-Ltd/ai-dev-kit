---
lifecycle: evergreen
ttl_days: null
created_at: 2026-02-22T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Feature Request: RW Temporary Execution Log for Recovery and Forensics

**Type:** Feature Request (FR)  
**Identifier:** FR-044  
**Submitted:** 2026-02-22  
**Submitted By:** User  
**Priority:** MEDIUM  
**Severity:** MEDIUM  
**Status:** IMPLEMENTED (v0.5.1.44+1 — pending user verification)  

**Implementing Task:** [E05:S01:T44](../epics/epic-05/story-01-fr-repo/T44-rw-temporary-execution-log-for-recovery-and-forensics.md)  
**Planning:** [IPP-E05S01T44](../../../implementation-cycles/IPP-E05S01T44-rw-temporary-execution-log.md)  
**Historical registry:** E05:S01:T44

---

## Summary

Add a **temporary execution log file** to the Release Workflow (RW) that is written during RW execution. The log enables (a) recovery of aborted runs (e.g. IDE crashes, process kills), and (b) forensic analysis of what happened during a run.

---

## Problem Statement

**Context:**
- Some projects (e.g. Starborn Legacy) experience IDE or process crashes more frequently than others
- When RW is aborted mid-run (crash, kill, sandbox failure, etc.), there is no persistent record of what completed
- User must reconstruct state manually: which steps ran, what changed, where to resume

**Current Situation:**
- RW runs as an agent with no durable execution log
- Cursor chat / TODO list may be lost on crash
- No structured artifact to support resume or forensic review

**Impact:**
- Aborted runs leave partial state (e.g. version bumped but not committed)
- Recovery is ad hoc and error-prone
- No forensic trail for debugging workflow failures

---

## Proposed Solution

**RW writes a temporary execution log** during its run:

1. **Log file location:** Configurable (e.g. `{project_root}/.rw-execution.log` or `rw-config.yaml` path); default in project root
2. **Log format:** Structured (e.g. timestamp, step number, step name, status, key outputs)
3. **Log contents:**
   - Each step start/end with status (PASS/FAIL/SKIP)
   - Key decisions (version bump, task attribution, paths used)
   - File changes (version file, changelog paths, etc.)
   - Errors and warnings
4. **Lifecycle:** Log is appended during run; optionally rotated or truncated at start of new run; user may retain for forensics
5. **Recovery use:** On resume or manual recovery, user (or agent) can read log to determine last completed step and current state

**Forensic use:**
- Post-mortem on aborted runs
- Debugging workflow behavior
- Auditing what changed in a run

---

## Acceptance Criteria

- [x] RW creates/opens a log file at start of execution (v0.5.1.44+1)
- [x] Each RW step writes start and completion (or failure) to the log (v0.5.1.44+1)
- [x] Log includes sufficient context for recovery (step number, key outputs, file paths) (v0.5.1.44+1)
- [x] Log path configurable via `rw-config.yaml` (v0.5.1.44+1)
- [x] Documented in RW agent execution guide (v0.5.1.44+1)
- [x] Retention: text log truncate on new RW start; per-run JSON files (v0.5.1.44+1)

---

## Related

- **Task:** [T44-rw-temporary-execution-log-for-recovery-and-forensics.md](../epics/epic-05/story-01-fr-repo/T44-rw-temporary-execution-log-for-recovery-and-forensics.md) (E05:S01:T44)
- **RW Agent Guide:** `packages/frameworks/workflow-mgt/docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md`
- **rw-config.yaml:** Project config for paths and behaviour
