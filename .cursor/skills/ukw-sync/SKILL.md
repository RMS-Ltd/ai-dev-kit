---
name: ukw-sync
description: Update kanban boards with status inference and MoSCOW prioritization
---

## Update Kanban Workflow Execution

### Archive completed (`UKW -c`, FR-102 / ADR-010)

When the user invokes **`UKW -c`** (standalone only):

1. Run Steps 1, 2 (archive scan), 6 (ledger append then MoSCOW removal), 7–9 per agent execution guide — skip 2.5 and 3–5.
2. **kboard:** For each archivable row, use **`kanban_completed_update`** ([skill](../kanban-completed-update/SKILL.md)) with version/timestamp from **task doc** — then remove the row from active MoSCOW.
3. **fbuboard:** For each archivable FBU, use **`fr_br_uxr_completed_update`** ([skill](../fr-br-uxr-completed-update/SKILL.md)) — then remove from active MoSCOW.
4. Helpers: `packages/frameworks/workflow-mgt/scripts/kanban/archive_completed.py` (`scan_kboard_candidates`, `scan_fbuboard_candidates`).
5. Emit `## Archive completed summary` in Step 9 (archived / skipped / already-in-ledger counts).
6. **Do not** batch-rewrite row `Last modified` stamps (FR-097). **Do not** combine `-c` with `-u`, `-p`, `-a`, or `--rp`. **Do not** use `-c` during RW Step 7.

See [ADR-010](../../../docs/architecture/standards-and-adrs/ADR-010-ukw-archive-completed-c-flag.md) and [workflow initiation cheatsheet](../../../docs/guides/workflow-initiation-cheatsheet.md).

### Deep reprioritization (`UKW --rp`, FR-085 / ADR-009)

When the user invokes **`UKW --rp`** (standalone only):

1. Run Steps 1, 2, 6 (deep MoSCOW on `kboard.md` + `kboard.md`), 6.5, 7–9 per agent execution guide — skip 2.5 and 3–5 unless status mismatch blocks reprioritization.
2. Classify each moved row with evidence: **intent**, **dependencies**, **blockers**, or **impact**.
3. Emit `## Reprioritization rationale` in Step 9 summary (one line per moved row; `No priority changes.` if idempotent re-run).
4. **Do not** batch-rewrite row `Last modified` stamps (FR-097). **Do not** use `--rp` during RW Step 7.

See [ADR-009](../../../docs/architecture/standards-and-adrs/ADR-009-ukw-deep-reprioritization-rp-flag.md) and [workflow initiation cheatsheet](../../../docs/guides/workflow-initiation-cheatsheet.md).

### FBU temporal sync scope (FR-050)

Run **FBU substeps** on **comprehensive** (`UKW` no flags) and **bookkeeping** (`UKW -u`) paths only — not on `-p` / `-a` priority-only runs:

1. **fbuboard cleanup** — deterministic active-row reconciliation (Step 7 below).
2. **`intake-completed.md` timestamps** — ISO 8601 completions in the same run via [fr-br-uxr-completed-update](../fr-br-uxr-completed-update/SKILL.md).
3. **20-recent dashboard** — rebuild `## 20 Most Recently Completed FR/BR/UXR Items` (format aligned with `kanban-completed.md`).
4. **Cross-doc consistency** — `kboard.md` ↔ `intake-completed.md` ↔ `intake-structure.md`.

YAML substeps: `step-6-5`, `step-6-6`, `step-6-7` in `packages/frameworks/workflow-mgt/workflows/update-kanban-workflow/update-kanban-workflow.yaml`. Agent guide: Step 6.5–6.7 in `update-kanban-workflow-agent-execution.md`.

### Intelligence Requirements

This workflow requires significant agentic intelligence at every step:

- **Synthesize intelligently:** Transform raw task/story data into coherent narratives
- **Infer status:** Deduce completion state from evidence (commits, FR/BR/UXRs, file changes)
- **Prioritize strategically:** Classify tasks using MoSCOW methodology based on goals and dependencies
- **Understand context:** Grasp relationships, dependencies, and strategic context
- **Write narratives:** Create natural, readable summaries that capture progress
- **Validate consistency:** Detect contradictions and misalignments

### Key Principle

**Bottom-up approach:** Update Tasks → Stories → Epics → Board (in that order)
The MoSCOW priority list is updated LAST.

### Step Sequence

**Step 1: Bookkeeping (Task Status Updates)**
- Analyze all tasks for completion status
- Infer task completion from evidence:
  - Git commits and version changes
  - FR/BR/UXR documents and their status
  - File changes and implementation evidence
  - Acceptance criteria fulfillment
- Update task status (TODO → IN PROGRESS → COMPLETE)
- Write meaningful progress summaries

**Step 2: Story Status Inference**
- Analyze story completion based on task status
- Determine if stories are COMPLETE based on task completion
- Update story status and documentation
- Write coherent story-level summaries
- Ensure consistency between tasks and stories

**Step 3: Epic Status Evaluation**
- Evaluate epic completion based on story status
- Update epic status and documentation
- Write strategic epic-level summaries
- Assess overall project progress

**Step 4: MoSCOW Prioritization**
- Analyze all incomplete tasks/stories/epics
- Apply MoSCOW prioritization based on:
  - Project goals and strategic importance
  - Dependencies and blocking relationships
  - Impact and urgency
  - Resource availability and deadlines
- Update kanban board priority sections
- Ensure consistent prioritization across hierarchy

**Step 5: Board Synchronization**
- Update kboard.md with latest status
- Ensure all sections reflect current reality
- Validate consistency across all documents
- Update board version and metadata
- **IPP segment (UXR-010 / UXR-023):** After MoSCOW edits, ensure every wired row includes `—No IPP—` or `[—IPP—](…)` before `Last modified:` — prefer `update_kanban_docs.py` / `normalize_board_traceability_segments` (or full pipeline via `enforce_terminal_timestamps_on_boards`) over hand-editing IPP tokens

**Step 6: Board Cleanup (lean active board)**
- **Ledger first:** append `kanban-completed.md` / `intake-completed.md` before removing any terminal row from active MoSCOW
- Scan MoSCOW for terminal rows (`COMPLETE`, `RESOLVED`, shipped Won't) and **prune** after ledger update
- **Forbidden:** archive footnote paragraphs on `kboard.md`; `**YYYY-MM-DD:**` journal lines between rows; leaving `✅ COMPLETE` on the active board
- **BR-059 (narrow):** do not auto-add every story-checklist `TODO` during UKW — keep existing **Could Have** backlog; prune terminal rows + journal/footnote bloat only (FR-109)
- Active board = live priorities; backlog remains in story checklists and `fr-br/` until promoted

**Step 7: FR/BR/UXR Board Cleanup (`kboard.md`) — FR-050 / FR-076 / FR-097**
- Analyze FR/BR/UXR completion status from linked `fr-br/*.md` source docs
- Treat fbuboard sync as **required** in comprehensive and bookkeeping paths (not best-effort)
- Apply deterministic active-row reconciliation:
  - Prune active MoSCOW rows when linked source status is terminal (`COMPLETE`, `COMPLETED`, `IMPLEMENTED`, `FIXED`, `RESOLVED`)
  - Keep explicit unresolved-verification exceptions active (status includes `IN PROGRESS`, `UNVERIFIED`, `PENDING VERIFICATION`)
- **FR-097 stamp rules (hygiene-only) — HARD:**
  - **NEVER** hand-edit row `| Last modified: … UTC` in markdown (no batch UTC, no hour buckets).
  - **NEVER** run or recreate `normalize_board_row_timestamps.py` (removed).
  - **Do not** rewrite per-row stamps on structure-only cleanup; board header `Last Updated` only.
  - New/missing stamps: `backfill_board_row_stamps.py` or `update_kanban_docs.py` with `non_substantive` / `gated` evidence only.
  - Snapshot at UKW start; `validate_board_stamp_diff.py` before stage — **abort** on failure.
  - Pre-commit blocks ≥3 rows with identical stamp (`homogeneity_threshold: 3` in `rw-config.yaml`).
- Apply concurrency guard: re-read `kboard.md` before write if changed mid-run; re-apply transforms
- Emit reconciliation summary (audited, removed, kept exceptions, revalidation triggered)

**Step 8: FR/BR/UXR Temporal Tracking (`intake-completed.md`) — FR-050**
- In the **same UKW run** as Step 7, for each FBU removed from active fbuboard sections:
  - Follow [fr-br-uxr-completed-update/SKILL.md](../fr-br-uxr-completed-update/SKILL.md)
  - Append/update entries with ISO 8601 timestamps (`YYYY-MM-DDTHH:MM:SSZ`)
  - Record version and completing agent (`UKW` unless release context applies)
- Rebuild **`## 20 Most Recently Completed FR/BR/UXR Items`** (20 rows max, most recent first; columns match `kanban-completed.md` dashboard)
- Deduplicate dashboard IDs; preserve link integrity to source FR/BR/UXR docs

**Step 9: FR/BR/UXR Cross-Document Consistency — FR-050**
- Update `intake-structure.md` inventory when `fr-br/` changed
- Validate `kboard.md` ↔ `intake-completed.md` ↔ `intake-structure.md`:
  - No terminal FBUs on active board (except documented exceptions)
  - Pruned FBUs present in completed archive with timestamps
  - Structure links and version markers align with source docs
- Fix drift in-session when safe; document checklist results in UKW summary

### Integration Points

- Works with Intake Agent for new task processing
- Coordinates with Documentation Agent for kanban-completed.md updates
- Provides status information to RW Agent
- Uses Documentation Agent for completed task archival
- Coordinates with Documentation Agent for fr_br_uxr_completed_update skill
- Integrates with Intake Agent for FR/BR/UXR processing coordination
- Provides FR/BR/UXR synchronization for complete documentation coverage
