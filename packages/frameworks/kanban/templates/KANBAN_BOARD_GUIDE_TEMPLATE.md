---
lifecycle: evergreen
ttl_days: null
created_at: 2026-01-20T00:00:00Z
expires_at: null
housekeeping_policy: keep
# Discovery: template sections for prioritisation and MUST HAVE ordering (FR-037)
template_sections:
  - id: task-prioritisation-and-must-have-ordering
    title: Task Prioritisation and MUST HAVE Ordering
    description: How to prioritise tasks and order MUST HAVE (queue vs stack for bug-based vs other work).
  - id: definition-of-complete
    title: Definition of COMPLETE
    description: When a task is considered COMPLETE (implemented and signed off).
---

# {Project Name} – Kanban Board Guide

**Last Updated:** {Date}  
**Version:** {Version}

> **For structured information only, see:** [`kboard.md`](kboard.md)  
> **For Epic/Story/Task structure, see:** [`kanban-structure.md`](kanban-structure.md)

---

## Overview

This guide explains how to use and understand the Kanban board. The board tracks all work on the {project name} repository.

**Structure:** All Kanban documentation lives under `{kanban_path}/`:

- Epic overviews: `epics/Epic-X/Epic-X.md`
- Story documents: `epics/Epic-X/Story-XXX-*.md`
- Board views: `_index.md` (quick view), `kboard.md` (tasks), `kanban-structure.md` (epics), and this file (guide)

---

## Parent-Child Relationship

This Kanban board serves as the **parent document** to Story documents, similar to how Story documents are parents of Task documents:

- **Board → Story:** This board links to and tracks all Story documents
- **Story → Task:** Story documents link to and track all Task documents
- This creates a clear hierarchy: Board (parent) → Story (child) → Task (grandchild)

---

## MoSCOW Prioritized In-Progress Tasks

The board includes a **MoSCOW Prioritized In-Progress Tasks** section that shows all in-progress tasks (status: IN PROGRESS or TODO) organized by MoSCOW priority and ordered chronologically (most recently updated first).

**MoSCOW Categories:**

- **M (Must Have):** Critical tasks that must be completed
  - Highest priority items requiring immediate attention
  - Tasks that block other work or are on critical path

- **S (Should Have):** Important tasks that should be completed
  - High-value items that contribute significantly to goals
  - Tasks that are important but not blocking

- **C (Could Have):** Nice-to-have tasks that could be completed
  - Lower priority items that add value but are not essential
  - Tasks that can be deferred if needed

- **O (Ongoing):** Perpetual maintenance tasks that never complete
  - Perpetual tasks that are tracked but don't block other work
  - Tasks that require continuous attention (e.g., workflow maintenance, changelog management)
  - These tasks are visible but don't interfere with prioritization of completable work

- **W (Won't Have):** Tasks deferred or not being done at this time
  - Tasks explicitly marked as deferred
  - Tasks not being actively worked on

**Task Ordering:**
Tasks within each MoSCOW section are ordered chronologically, with most recently updated tasks at the top.

---

## Task Prioritisation and MUST HAVE Ordering

**Initial prioritisation:** Every new task must be placed in one MoSCOW category (M, S, C, O, or W). No task is added directly to COMPLETE. Projects may define their own criteria for M vs S vs C (e.g. critical path = M, high value = S, nice-to-have = C); the framework does not prescribe domain-specific rules.

**MUST HAVE ordering:** Within the MUST HAVE (M) section, use two ordering behaviours:

- **Stack (for bug-based or breaking work):** Treat M as a stack. Add new items to the **top** of the MUST HAVE list. Work **top-first** so the most recently added urgent item is done first. Use this for tasks that fix critical bugs or address breaking issues.
- **Queue (for all other MUST HAVE work):** Treat M as a queue. Add new items to the **end** of the MUST HAVE list. Work **front-first** so the first item in the list is done first. Use this for planned feature work and non-urgent M tasks.

**Rule:** For each new MUST HAVE task, classify it as either *bug-based/breaking* (stack) or *other* (queue) and add it to the top or end of the M section accordingly. Scripts and processes that update the board (e.g. UKW, RW) should respect this rule when inserting or ordering tasks, or document that ordering is manual or agent-defined.

---

## Definition of COMPLETE

**COMPLETE** means the task is **fully implemented** (work done, code or docs delivered, released in a version) **and** **signed off** (validated, accepted by the responsible party). A task moves from a MoSCOW column into COMPLETE only when both conditions are met. Do not mark a task COMPLETE solely because a version exists or the story file says so—only when implementation is done and signed off. This definition applies to the board, this guide, governance policy, story and task docs, and any script or process that sets task status.

---

## How to Add Work

1. **Create Epic** (if needed):
   - Create `epics/Epic-X/` directory
   - Add `epics/Epic-X/Epic-X.md` (Epic overview)
   - Update `kboard.md`, `kanban-structure.md`, and `_index.md`

2. **Create Story**:
   - Add `epics/Epic-X/Story-XXX-short-slug.md`
   - Update Epic doc (`epics/Epic-X/Epic-X.md`) with Story reference
   - Update `kboard.md`, `kanban-structure.md`, and `_index.md`

3. **Create Task**:
   - Add `epics/Epic-X/Story-XXX/T{task}-description.md` (separate file format) OR
   - Add delimited section in Story document using Task ID as header
   - Update Story document with Task reference

4. **Track Progress**:
   - Update Task status in Task doc
   - Update Story status in Story doc
   - Update Epic doc with version markers as work completes
   - Update board views as needed

See [`README.md`](README.md) for full structure details and `{local_policy_path}` for governance.

---

## Quick Reference

- **Board Quick View:** [`_index.md`](_index.md)
- **Board (MoSCOW Tasks):** [`kboard.md`](kboard.md)
- **Board (Epic Structure):** [`kanban-structure.md`](kanban-structure.md)
- **Kanban Governance Policy:** `packages/frameworks/kanban/policies/kanban-governance-policy.md` - Framework-level policy documentation
- **Local Kanban Policy:** `{local_policy_path}` - Project-specific implementation details

---

## Board Structure

The board is organized into three separate documents:

1. **MoSCOW Prioritized Tasks** (`kboard.md`) - Shows all active tasks organized by priority (M/S/C/O/W)
2. **Epic/Story/Task Structure** (`kanban-structure.md`) - Shows all epics with their status, priority, stories, and links
3. **Rules and Explanations** (`kanban-board-guide.md`) - This document with how-to content and policies

The board serves as the parent document to Story documents, providing a comprehensive view of all work items in the project.

---

## Usage Instructions

### MoSCOW Priority Guidelines

**Determining Priority:**

 
- **M (Must Have):** Critical tasks that block other work or are essential for the next release
- **S (Should Have):** Important tasks that are not blocking but have significant impact
- **C (Could Have):** Nice-to-have tasks that add value but are not essential
- **O (Ongoing):** Perpetual tasks that never complete (maintenance, monitoring, etc.)
- **W (Won't Have):** Tasks explicitly deferred or not being done at this time

 
**Default Priority:**
- If priority is not explicitly specified, default to "Should Have (S)"
- Priority can be updated as work progresses

### Chronological Ordering

**Ordering Within Priority:**

 
- Tasks within each MoSCOW section are ordered chronologically
- Most recently updated tasks appear at the top
- This ensures visibility of recent activity
- Use version numbers or timestamps for ordering consistency

 
**How to Update Order:**
- When a task is updated, its `Last updated` field should be updated
- The board should be re-sorted to place the most recently updated tasks at the top of each section

### Task Entry Format

Each task entry in the MoSCOW sections should include:
- **Task ID:** `E{epic}:S{story}:T{task}` format (e.g., `E4:S13:T02`)
- **Task Description:** Brief description of the task
- **Last Updated:** Date when task was last updated
- **Links:** Links to Task document and parent Story document

**Format:**
```markdown
- **E{epic}:S{story}:T{task}** – {Task description}  
  *Last updated: {Date}* | [Task Doc](epics/Epic-{epic}/Story-{story}-{name}/T{task}-{task-name}.md) | [Story](epics/Epic-{epic}/Story-{story}-{name}.md)
```

### Story Checklist Format

The Story Checklist section should list all stories in a compact format (one line per story):

**Format:**
```markdown
- [x] **E{epic}:S{story} – {Story name}** - {Status} ({version} – {Status note})
  - Story: [`Story-{story}-{name}.md`](epics/Epic-{epic}/Story-{story}-{name}.md)
  - Tasks: {Task summary}
```

**Forensic Markers:**
- Completed stories should include version markers (e.g., `✅ COMPLETE (v0.4.13.1+1)`)
- In-progress stories should include current status and version

### Parent-Child Relationship

**Hierarchy:**

- **Board → Story:** The board links to and tracks all Story documents
- **Story → Task:** Story documents link to and track all Task documents
- This creates a clear hierarchy: Board (parent) → Story (child) → Task (grandchild)

**Maintaining Links:**

- Ensure all Story links in the board are valid
- Ensure all Task links in Stories are valid
- Update links when documents are moved or renamed

---

## Notes

- The MoSCOW board is optimized for quick scanning - structured information only
- For Epic/Story/Task structure, see kanban-structure.md
- For rules, explanations, and how-to content, see this guide document
- The board is updated by UKW (Update Kanban Workflow) and RW (Release Workflow) if integrated
- Board views are synchronized with Epic/Story/Task documents

---

**Template Version:** 2.0.0  
**Last Updated:** 2026-01-20  
**Based On:** Kanban board info-only split (E4:S18:T01)
