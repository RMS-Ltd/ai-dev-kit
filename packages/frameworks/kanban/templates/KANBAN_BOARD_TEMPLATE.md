---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-18T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# {Project Name} – Kanban Board

**Last Updated:** {Date}  
**Version:** {Version}

**Note:** {Optional status note about epics or overall project status}

> **For rules, explanations, and how-to content, see:** [`kanban-board-guide.md`](kanban-board-guide.md)

---

## MoSCOW Prioritized In-Progress Tasks

### Must Have (M) - Critical Tasks

- **{E{epic}:S{story}:T{task}}** – {Task description}  
  *Last updated: {Date}* | [Task](epics/epic-{epic}/story-{story}-{name}/T{task}-{task-name}.md) | [Story](epics/epic-{epic}/story-{story}-{name}.md) | —No IPP— | Last modified: {Date} UTC

### Should Have (S) - Important Tasks

- **{E{epic}:S{story}:T{task}}** – {Task description}  
  *Last updated: {Date}* | [Task](epics/epic-{epic}/story-{story}-{name}/T{task}-{task-name}.md) | [Story](epics/epic-{epic}/story-{story}-{name}.md) | —No IPP— | Last modified: {Date} UTC

### Verification (V) - Task Shipped, FBU Open

Rows where the **task is terminal** but the **FBU remains open** (verification pending). Use `⏳ WAITING` status per ADR-018 / FR-109.

- **{E{epic}:S{story}:T{task}}** – {Task description} — ⏳ WAITING (HIGH, task shipped · FBU verification pending) | [Task Doc](…) | [FR-XXX](fr-br/FR-XXX-*.md) | —No IPP— | Last modified: {Date} UTC

### Could Have (C) - Nice-to-Have Tasks

- **{E{epic}:S{story}:T{task}}** – {Task description}  
  *Last updated: {Date}* | [Task](epics/epic-{epic}/story-{story}-{name}/T{task}-{task-name}.md) | [Story](epics/epic-{epic}/story-{story}-{name}.md) | —No IPP— | Last modified: {Date} UTC

### Ongoing (O) - Perpetual Tasks

- **{E{epic}:S{story}:T{task}}** – {Task description} - Perpetual Task - {Status}  
  *Last updated: {Date}* | [Task](epics/epic-{epic}/story-{story}-{name}/T{task}-{task-name}.md) | [Story](epics/epic-{epic}/story-{story}-{name}.md) | —No IPP— | Last modified: {Date} UTC

### Won't Have (W) - Deferred Tasks

---

## Epics

### Epic {X}: {Epic Name}

**Status:** {Status}  
**Priority:** {Priority}  
**Last Updated:** {Version}

**Stories:**
- [x] **E{epic}:S{story} – {Story name}** - {Status} ({version})
  - Story: [`story-{story}-{name}.md`](epics/epic-{epic}/story-{story}-{name}.md)

**Epic Doc:** [`epics/epic-{epic}/epic-{epic}.md`](epics/epic-{epic}/epic-{epic}.md)

---

**Template Version:** 2.1.0  
**Last Updated:** 2026-06-05  
**Based On:** Kanban board info-only split (E04:S18:T01); ADR-018 Verification (V) band (E04:S19:T12 Wave 3)

