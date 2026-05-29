---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-17T23:15:00Z
expires_at: null
housekeeping_policy: keep
---

# Feature Request: Update Kanban Workflow (UKW)

**Type:** Feature Request (FR)  
**Submitted:** 2025-12-17  
**Submitted By:** User  
**Priority:** HIGH  
**Status:** ACCEPTED

---

## Summary

Create a new workflow (UKW) triggered by "UKW" command that comprehensively updates all kanban documentation to reflect current project state, preventing status drift between kanban docs and actual work.

---

## Description

**Problem:**
While the Release Workflow (RW) handles kanban document updates as part of the release process, status drift is inevitable when considering:
- Other documents linked to the kanban ecosystem (FR/BR/UXRs, commits, file changes)
- Manual work that doesn't go through RW
- Recent activity that may indicate task/story completion without triggering releases
- Bulk status changes across multiple documents

**Solution:**
Create a standalone "Update Kanban Workflow" (UKW) that comprehensively synchronizes all kanban documentation using a bottom-up approach:
1. Tasks (consider recent commits, recent BR/FR/UXRs)
2. Stories (synthesize task data into succinct tactical overviews, update task checklists)
3. Epics (same as stories, but with strategic scope, update story checklists)
4. Kanban Board (MoSCOW priority list updated LAST)

**Use Case:**
- After wrapping up sprints/cycles without full RW execution
- Periodically to ensure kanban docs reflect reality
- After manual work that didn't go through RW
- Before important planning sessions
- After bulk status changes across kanban docs

**Who Benefits:**
- Project managers needing accurate kanban status
- Teams planning based on kanban board
- Agents needing current project state
- Anyone relying on kanban documentation accuracy

---

## Requirements

### Functional Requirements
- [x] Workflow triggered by "UKW" or "ukw" command (case-insensitive)
- [x] Bottom-up approach: Update Tasks → Stories → Epics → Board
- [x] Analyze recent activity (commits, FR/BR/UXRs, file changes)
- [x] Update task documents based on evidence (commits, FR/BR status, file changes)
- [x] Update story documents by synthesizing task data (tactical overviews, task checklists)
- [x] Update epic documents by synthesizing story data (strategic overviews, story checklists)
- [x] Update kanban board MoSCOW priority list LAST
- [x] Validate consistency across all kanban documents
- [x] Stage files for commit
- [x] Document changes summary

### Non-Functional Requirements
- [x] Config-driven (uses rw-config.yaml if available)
- [x] Evidence-based updates (only update if evidence exists)
- [x] Preserves existing forensic markers
- [x] Synthesizes data (tactical/strategic views, not duplication)
- [x] Chronological ordering within MoSCOW sections

---

## Scope Analysis

**Problem Domain:** Kanban Documentation Synchronization, Workflow Automation  
**Affected Areas:**
- [x] Workflow Management Framework
- [x] Kanban Framework
- [x] Documentation

**Estimated Complexity:**
- [x] Complex (2+ weeks) - Workflow definition, execution guide, cursor rules, documentation

---

## Use Cases

**Primary Use Case:**
User wraps up a sprint/cycle and needs all kanban documentation synchronized to reflect actual project state. Types "UKW", workflow analyzes recent activity, updates all kanban docs bottom-up, and presents summary.

**Additional Use Cases:**
- Periodic sync: User runs UKW weekly/monthly to ensure kanban docs stay current
- Post-manual-work: User completes work manually without RW, runs UKW to update docs
- Pre-planning: Before planning session, user runs UKW to ensure kanban board is accurate
- Status drift correction: User notices kanban docs out of sync, runs UKW to fix

---

## Acceptance Criteria

- [x] Workflow can be triggered by "UKW" command
- [x] Workflow follows bottom-up approach (Tasks → Stories → Epics → Board)
- [x] Workflow analyzes recent commits (configurable window, default 7 days)
- [x] Workflow analyzes recent FR/BR/UXRs
- [x] Workflow updates task documents based on evidence
- [x] Workflow updates story documents with task synthesis
- [x] Workflow updates epic documents with story synthesis
- [x] Workflow updates kanban board MoSCOW list LAST
- [x] Workflow validates consistency across all documents
- [x] Workflow stages files and creates summary
- [x] Workflow documented with execution guide
- [x] Cursor rules section created for UKW trigger
- [x] Workflow YAML definition created

---

## Dependencies

**Blocks:**
- None identified

**Blocked By:**
- None

**Related Work:**
- **RW (Release Workflow):** Updates kanban docs as part of release process
- **E4:S13:** Kanban Board Enhancement - MoSCOW Prioritized Task View (enabled MoSCOW structure)
- **E2:S09:** Kanban Granularity & Discrete Task Docs (RW Integration)
- **E4:S11:** Kanban Granularity & Discrete Task Docs (Kanban Framework)

---

## Intake Decision

**Intake Status:** ACCEPTED  
**Intake Date:** 2025-12-17  
**Intake By:** User

**Decision Flow Results:**
- [x] New Story Created: Epic 2 (Workflow Management Framework), Story 14 → Task 1

**Assigned To:**
- Epic: Epic 2 - Workflow Management Framework
- Story: E2:S14 - Update Kanban Workflow (UKW)
- Task: E2:S14:T01 - Implement Update Kanban Workflow (UKW)
- Version: `0.2.14.1+0`

**Kanban Links:**
- Epic: [`docs/project-management/kanban/epics/Epic-2/Epic-2.md`](../epics/Epic-2/Epic-2.md)
- Story: [`Story-014-workflow-management-package-installation-evaluation.md`](../epics/Epic-2/Story-014-workflow-management-package-installation-evaluation.md) *(historical FR target name differed; live story file is this path)*
- Task: [Link to Task in Story document]

---

## Implementation Details

**Workflow Structure:**
- 8 steps following bottom-up approach
- Config-driven using rw-config.yaml
- Agent-driven execution pattern (like RW)

**Key Files Created:**
- `packages/frameworks/workflow mgt/workflows/update-kanban-workflow.yaml`
- `packages/frameworks/workflow mgt/cursorrules-ukw-trigger-section.md`
- `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/update-kanban-workflow-agent-execution.md`

**Workflow Steps:**
1. Analyze Recent Activity (commits, FR/BR/UXRs, file changes)
2. Update Task Documents (evidence-based status updates)
3. Update Story Documents (task synthesis, tactical overviews)
4. Update Epic Documents (story synthesis, strategic overviews)
5. Update Kanban Board (MoSCOW list LAST)
6. Validate Consistency (cross-check all documents)
7. Stage Files (git stage all kanban files)
8. Document Changes (create summary)

**Key Principles:**
- Bottom-up: Tasks → Stories → Epics → Board
- MoSCOW list updated LAST
- Evidence-based updates only
- Synthesize, don't duplicate
- Preserve forensic markers

---

## Notes

- UKW complements RW: RW handles kanban updates during releases, UKW handles comprehensive sync
- UKW is designed to be run periodically or after bulk changes
- UKW follows same agent-driven execution pattern as RW for consistency
- Bottom-up approach ensures status flows correctly up the hierarchy
- MoSCOW list updated last ensures it reflects final state after all other updates

---

## References

- **Workflow Definition:** `packages/frameworks/workflow mgt/workflows/update-kanban-workflow.yaml`
- **Cursor Rules:** `packages/frameworks/workflow mgt/cursorrules-ukw-trigger-section.md`
- **Execution Guide:** `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/update-kanban-workflow-agent-execution.md`
- **Related:** Release Workflow (RW) - `packages/frameworks/workflow mgt/cursorrules-rw-trigger-section.md`
- **Kanban Governance:** `packages/frameworks/kanban/policies/kanban-governance-policy.md`

---

_This FR was created and implemented on 2025-12-17. The UKW workflow is now available for use._

