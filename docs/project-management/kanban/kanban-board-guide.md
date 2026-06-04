---
lifecycle: evergreen
ttl_days: null
created_at: 2026-01-20T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# AI Dev Kit – Kanban Board Guide

**Last Updated:** 2026-03-09 (RW: E04:S18:T01+2)  
**Version:** v0.4.18.1+2

> **For structured information only, see:** [`kboard.md`](kboard.md)  
> **For Epic/Story/Task structure, see:** [`kanban-structure.md`](kanban-structure.md)  
> **For completed tasks, see:** [`kanban-completed.md`](kanban-completed.md)  
> **For FR/BR/UXR prioritization, see:** [`fbuboard.md`](fbuboard.md)

---

## Overview

This guide explains how to use and understand the Kanban board. The board tracks framework and infrastructure work on the **AI Dev Kit** reference repository (public genesis tree). Book-project Kanban (formerly Epic 24) lives in the private companion repo — see [ADR-006](../../architecture/standards-and-adrs/ADR-006-book-project-private-repository-spin-off.md).

**Structure:** All Kanban documentation lives under `docs/project-management/kanban/`:

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

## Task-Level Display (Not Story-Level)

**The board MUST show tasks, not stories.** Story-level reporting obfuscates the actual state—you cannot see which tasks are complete vs TODO vs in progress. Each board entry should link to a **Task document**.

**Exception:** Show a story only when its tasks have not yet been filed (e.g. epics with placeholder T01–T07 but no discrete task documents). Once tasks are filed, replace the story entry with the individual task entries.

UKW and RW agents must follow this when updating the board.

### Active board vs completed ledger (lean MoSCOW)

- **`kboard.md` / `fbuboard.md`:** live work only (`TODO` / `IN PROGRESS` / `OPEN` / `PERPETUAL`, plus FBU verification rows where the task is done but the FBU is still OPEN).
- **`kanban-completed.md` / `fbu-completed.md`:** terminal tasks and FBUs — append here **before** removing rows from the active board (`UKW -c` or UKW Step 6.5–6.6).
- **Do not** use the active board as an archive log: no multi-line “archived …” footnotes, no `**date:**` release journals between bullets, no `✅ COMPLETE` rows left in MoSCOW after hygiene.
- **BR-059:** story-checklist gaps do not justify mirroring the entire TODO backlog onto the board; promote or add only in-flight work. See Kanban governance policy § MoSCOW — active board vs completed ledger.

**RW Step 7 vs UKW (FR-038):** During a release, **RW Step 7 — Scoped Kanban Sync (UKW Mode)** updates the board and docs for the **release task** only (scoped). **Standalone UKW** is for **board-wide** MoSCOW and housekeeping. See Kanban governance policy §1.1.

### Status transition ownership (FR-077)

- **Authoritative source:** Task document status is authoritative.
- **Decision/write owner:** Implementation execution owns lifecycle transitions in task docs:
  - `TODO -> IN PROGRESS` at first non-planning implementation change.
  - `IN PROGRESS -> COMPLETE` only after acceptance evidence is recorded.
- **Propagation owner:** RW Step 7 (scoped) or standalone UKW propagates authoritative task-doc status to board rows.
- **Atomicity rule:** Task-doc status update and board-row update must occur in the same change set/session.
- **Safety rule:** Board rows must not be advanced independently of task-doc status.


### Planning artifact publication contract (BR-066)

- IPW/ICW-derived task docs must expose publication state explicitly:
  - `Publication Status: PUBLISHED`, or
  - `Publication Status: NOT_APPLICABLE` with `Publication N/A Reason:`.
- For `PUBLISHED`, link the task planning package artifacts in `docs/implementation-cycles/` from the host task doc (`specification`, `test-design`, `implementation-plan`).
- Validate deterministically before release closure with `validate_ipw_publication_wiring.py --requested E:S:T`.

### MoSCOW row `Last modified` (UTC)

Each line in **MoSCOW Prioritized In-Progress Tasks** (`kboard.md`) and **MoSCOW Prioritized FR/BR/UXR Items** (`fbuboard.md`) must end with a pipe-delimited field:

`| Last modified: YYYY-MM-DD HH:MM UTC`

- **Derivation (required for new stamps):** UTC from linked task/FR/BR/UXR doc `**Last updated:**`, else latest `git` commit on that doc — use `backfill_board_row_stamps.py` or RW Step 7 gated evidence. **Never** batch-assign one session time across rows.
- **STRUCTURE hygiene (UKW prune/sort/wiring):** **Do not** change row `Last modified`. Board header `Last Updated` may change.
- **CONTENT (status/version/substantive row delta):** May update stamp only with linked-source evidence or release-scope manifest (`validate_board_stamp_diff.py`).
- **Forbidden:** `normalize_board_row_timestamps.py` (removed), manual “set all rows to current UTC”, or hour-bucket homogenization (`17:00` / `18:00` / `19:00` on dozens of rows).
- **Same convention** on both boards; wired kboard/fbuboard pairs should match when derived from the same source doc.

---

## MoSCOW Prioritized In-Progress Tasks

The board includes a **MoSCOW Prioritized In-Progress Tasks** section that shows all in-progress tasks (status: IN PROGRESS or TODO) organized by MoSCOW priority and ordered chronologically (most recently updated first).

### MoSCOW Categories

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


### Task Ordering

Tasks within each MoSCOW section are ordered chronologically, with most recently updated tasks at the top.

### Required Row Timestamp

Every active MoSCOW row in `kboard.md` and `fbuboard.md` must end with a terminal pipe-delimited timestamp field:

`| Last modified: YYYY-MM-DD HH:MM UTC`

This is mandatory for human scanability and forensic traceability. RW/UKW must **preserve** existing row stamps on STRUCTURE-only edits. New stamps only via linked-doc derivation or evidenced CONTENT passes — see [board-stamp-authority.md](../../../packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/board-stamp-authority.md).

### MoSCOW state icons (UXR-012 / E04:S13:T07)

Every active MoSCOW bullet on `kboard.md` and `fbuboard.md` must place **exactly one Set A (emoji) icon** immediately before the status token, after the title segment:

```text
- **{E:S:T or FR/BR/UXR-id}** – {title} - {emoji} {STATUS} (notes…) | … | Last modified: … UTC
```

- **Primary (boards):** Use the mapping in [UXR-012](fr-br/UXR-012-kanban-fbu-state-icons-for-moscow-rows.md) (Set A). **Fallback (Set B)** is for plain-text exports only — do not mix Set B into repo board rows by default.

- **Hygiene / UKW bookkeeping:** Do not change icons on STRUCTURE-only passes (same class as FR-097 stamp preservation). Update icons only when the **status word** changes substantively.

- **Automation:** `state_icons.py`, `backfill_board_state_icons.py`, and `validate_kanban_state_icons.py` (Gate 9 in `validate_release_readiness.py`). Operator notes: [`state-icons.md`](../../../packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/state-icons.md).


### E/S/T inline notation (UXR-014 / E04:S19:T09)

**Write-default:** Use two-digit zero-padding for Epic, Story, and Task when the numeric value is `<10`:

- Canonical colon form: `E02:S01:T04` (not `E02:S01:T04`)
- Natural width when `≥10`: `E21:S16:T57`
- Perpetual tasks (`T101+`): three-digit task segment, e.g. `E02:S16:T101`
- Compact triggers (RW/UKW/IPW): `E02S16T04` with the same padding rules

**Read tolerance:** Validators and parsers continue to accept legacy unpadded forms; do not break RW/UKW on historical docs. **New writes** (boards, intake, agents, `update_kanban_docs.py`) MUST emit the padded write-default.

**Formatter:** `packages/frameworks/workflow-mgt/scripts/kanban/est_format.py` — shared canonicalization for scripts and corpus hygiene.

### Task-Level Display (not story-level)

**MoSCOW rows must reference tasks** (`E07:S06:T03`, etc.), not whole stories (`E7:S06`). Story-level lines collapse many tasks into one line and **obfuscate actual state** (e.g. T02 complete while the story still reads TODO). Use [`kanban-structure.md`](kanban-structure.md) for epic/story hierarchy; use [`kboard.md`](kboard.md) for actionable, task-granular work.

---

## How to Add Work

1. **Create Epic** (if needed):
   - Create `epics/Epic-X/` directory
   - Add `epics/Epic-X/Epic-X.md` (Epic overview)
   - Update `kboard.md` and `_index.md`

2. **Create Story**:
   - Add `epics/Epic-X/Story-XXX-short-slug.md`
   - Update Epic doc (`epics/Epic-X/Epic-X.md`) with Story reference
   - Update `kboard.md` and `_index.md`

3. **Create Task**:
   - Add `epics/Epic-X/Story-XXX/T\{task\}-description.md` (separate file format) OR
   - Add delimited section in Story document using Task ID as header
   - Update Story document with Task reference

4. **Track Progress**:
   - Update Task status in Task doc
   - Update Story status in Story doc
   - Update Epic doc with version markers as work completes
   - Update board views as needed

See [`README.md`](README.md) for full structure details and `docs/governance/kanban/kanban-governance-policy.md` for governance.

---

## Formatting Governance (E07:S01:T09 / UXR-005)

The UXR workflow owns all Kanban template/document maintenance. As of **E07:S01:T09 / UXR-005**, every multi-line MoSCOW bullet must have **exactly one blank line** separating it from adjacent entries (single-line bullets stay contiguous). When updating `kanban-board*.md`, `fbuboard.md`, `kanban-structure.md`, `_index.md`, or related templates:

- Insert a blank line between bullets whose description spans more than one visual line.
- Leave single-line bullets directly adjacent to minimize vertical noise.
- If a release reveals formatting drift, escalate through T09 (Kanban Template Governance) before touching other boards.
- RW/UKW/MMW agents should log evidence (MMW log + validator output) showing the rule was checked or restored.

**Validator:** `packages/frameworks/workflow-mgt/scripts/validation/validate_kanban_moscow_spacing.py` (also delegated from `scripts/documentation/validate-documentation-consistency.py` with `--check moscow_spacing`). Release Readiness **Gate 10** (warn, non-blocking).

**Example (before — invalid):**

```markdown
- **E02:S01:T01** – First long MoSCOW row … | [Task](…) | Last modified: …
- **E02:S01:T02** – Second long MoSCOW row … | [Task](…) | Last modified: …
```

**Example (after — valid):**

```markdown
- **E02:S01:T01** – First long MoSCOW row … | [Task](…) | Last modified: …

- **E02:S01:T02** – Second long MoSCOW row … | [Task](…) | Last modified: …
```

---

## Quick Reference

- **Board Quick View:** [`_index.md`](_index.md)
- **Board (MoSCOW Tasks):** [`kboard.md`](kboard.md)
- **Board (Epic Structure):** [`kanban-structure.md`](kanban-structure.md)
- **Board (FR/BR/UXR Prioritization):** [`fbuboard.md`](fbuboard.md)
- **Kanban Policy:** `docs/governance/kanban/kanban-governance-policy.md`
- **Versioning Policy:** `docs/governance/standards/dev-kit-versioning-policy.md`

---

## Board Structure

The board is organized into five separate documents:

1. **MoSCOW Prioritized Tasks** (`kboard.md`) - Shows all active tasks organized by priority (M/S/C/O/W)
2. **Epic/Story/Task Structure** (`kanban-structure.md`) - Shows all epics with their status, priority, stories, and links
3. **FR/BR/UXR Prioritization** (`fbuboard.md`) - Shows all open FRs, BRs, and UXRs organized by priority
4. **FR/BR/UXR Structure** (`fbu-structure.md`) - Shows complete listings of all FRs, BRs, and UXRs by type
5. **Rules and Explanations** (`kanban-board-guide.md`) - This document with how-to content and policies

The board serves as the parent document to Story documents, providing a comprehensive view of all work items in the project.

---

## FR/BR/UXR Prioritization Board

The **FR/BR/UXR Prioritization Board** (`fbuboard.md`) provides centralized visibility and prioritization for all open Feature Requests, Bug Reports, and User Experience Research items.

### Board Sections

- **Critical Priority** - Urgent items requiring immediate attention
- **High Priority** - Important items for near-term work  
- **Medium Priority** - Standard priority items
- **Low Priority** - Nice-to-have items
- **Under Review** - Items being evaluated or worked on
- **Awaiting Information** - Items blocked by missing information

### Usage

- **For Stakeholders** - Review priorities and provide input on FR/BR/UXR documents
- **For Developers** - Pick highest priority items and convert to tasks when appropriate
- **For Product Management** - Adjust priorities and plan based on board content

### Integration

- Links to individual FR/BR/UXR documents in `/fr-br/` directory
- Cross-references to associated Kanban tasks when created
- Completed items move to `fbu-completed.md`

---

## Notes

- The MoSCOW board is optimized for quick scanning - structured information only
- For Epic/Story/Task structure, see kanban-structure.md
- For rules, explanations, and how-to content, see this guide document
- The board is updated by UKW (Update Kanban Workflow) and RW (Release Workflow)
- Board views are synchronized with Epic/Story/Task documents

**Install logs and remediation:** For debugging Kanban installation or migration issues, see per-run logs under `logs/ai-dev-kit/install/` (when install logging is enabled). Logs include phase markers such as `[KANBAN_FRESH_INSTALL]` and validation output. If a consumer project’s board appears to be contaminated with `ai-dev-kit`’s own backlog (e.g. `AI Dev Kit – Kanban Board` title or dev-kit epics like Epic 24), run the Kanban contamination detector and remediation tooling in that project’s repo to identify and archive/delete dev-kit artefacts before continuing.
