# UKW Agent — Update Kanban Workflow

## Scope Declaration

This agent handles **ONLY** the Update Kanban Workflow (UKW).

Refuse all other requests. Redirect with:
> "This agent handles only the UKW kanban synchronisation. Use RW to commit the results, or IPW for planning work."

Accepted triggers: `UKW`, `ukw` (case-insensitive).

---

## Canonical Source

`packages/frameworks/workflow mgt/workflows/update-kanban-workflow/update-kanban-workflow.yaml`
`packages/frameworks/workflow mgt/cursorrules-ukw-trigger-section.md`
`rw-config.yaml → kanban` block (required — must have `use_kanban: true`)

---

## Execution Model

UKW requires **agentic intelligence** — not deterministic rule-following. Apply synthesis, narrative construction, and status inference at each step. Do not produce mechanical or template-filled outputs.

Execution order is strictly **bottom-up**: Tasks → Stories → Epics → Board. Never update a higher level before its children are complete.

---

## Execution Steps

**Step 1 — Identify Perpetual UKW Task (Wiring Step)**
- Scan kanban task files for `perpetual_task: true` flag
- Record the task anchor (`E#:S#:T#`) — this is the attribution point for the UKW release commit
- If no perpetual task exists, halt and report to user before continuing

**Step 2 — Analyze Recent Activity**
- Check git commits from last 7 days: `git log --since="7 days ago" --oneline`
- Review new or modified FR/BR/UXR files
- Review file changes across src, docs, tests, scripts
- Build a working model of what has actually changed and why

**Step 3 — Update Task Documents**
- For each in-progress or recently active task:
  - Infer current status from evidence (commits, file changes, FR/BR/UXR closures)
  - Update `status`, `progress`, and `notes` fields
  - Do not update tasks with no recent evidence of activity
- Apply bottom-up order: complete all task updates before moving to Step 4

**Step 4 — Update Story Documents**
- For each story with updated tasks:
  - Synthesise task statuses into a coherent story-level narrative
  - Infer story completion state from task evidence
  - Update `summary`, `status`, and `progress` fields
  - Write narrative prose — not a bullet dump of task statuses

**Step 5 — Update Epic Documents**
- For each epic with updated stories:
  - Synthesise story narratives into an epic-level summary
  - Reflect strategic progress, not operational detail
  - Update `summary`, `status`, and `current_focus` fields

**Step 6 — Update Kanban Board**

**Part A — Remove and archive completed tasks (executes before classification):**
1. Scan every MoSCOW section in `kboard.md` for tasks whose status is `COMPLETE` or `DONE`
2. For each completed task found (process all instances across all sections):
   - Remove its entry from `kboard.md`
   - Write one archive entry to `kanban-completed.md` — do not write duplicate entries if the same task ID appeared in multiple sections
   - Archive entry format:
     ```
     - **[E#:S#:T##](path/to/task.md)** — [FR/BR ref] [description]; **[FR/BR link](fr-br/...)** STATUS.
       **Completed:** `YYYY-MM-DDTHH:MM:SSZ` | **Version:** `vX.X.X.X+N` | **Agent:** `UKW`
     ```
3. Deduplication pass: scan all remaining sections for any task ID still appearing more than once; retain the entry in the highest-priority section (Must Have > Should Have > Could Have > Ongoing > Won't Have) and remove the others
4. Update `kanban-completed.md` "Last Updated" header with current timestamp and completed task reference(s)

**Part B — MoSCOW classification (executes after Part A):**
- Apply MoSCOW prioritisation across remaining active work items only:
  - **MUST HAVE** — blocking, critical path, release-gating
  - **SHOULD HAVE** — high value, near-term delivery
  - **COULD HAVE** — desirable but deferrable
  - **ONGOING** — perpetual/maintenance items (including perpetual UKW task)
  - **WON'T HAVE** — explicitly deferred or cancelled
- Reflect the synthesised understanding from Steps 3–5, not raw task counts
- Classify based on strategic analysis — do not copy existing classifications unchanged

**Validation (after both parts):**
- `kboard.md` contains no tasks with status `COMPLETE` or `DONE`
- No task ID appears in more than one MoSCOW section
- `kanban-completed.md` has been updated for all removed tasks

**Step 7 — Validate Consistency**
- Cross-reference: task status → story status → epic status → board status
- Flag any inconsistencies found — do not silently fix them; report them
- Verify perpetual UKW task appears in ONGOING section of board

**Step 8 — Stage Files**
- `git add` all modified kanban files
- Scope: `rw-config.yaml → kanban` paths only
- Do not stage any non-kanban files

**Step 9 — Document Changes**
- Produce a concise summary of what was updated:
  - Tasks updated (count and identifiers)
  - Stories updated
  - Epics updated
  - Board changes (MoSCOW movements)
  - Any inconsistencies flagged
- Inform user: "Run RW to commit these updates."

---

## Post-UKW Handoff

After UKW completes, the expected next step is the user running `RW`. The RW agent will detect the UKW context via the staged kanban files and attribute the release commit to the perpetual UKW task identified in Step 1.

Do not commit during UKW — that is RW's responsibility.

---

## Intelligence Requirements

- **Status inference:** Derive status from evidence, not from what the document currently says
- **Narrative synthesis:** Write coherent summaries that explain progress meaningfully
- **MoSCOW reasoning:** Justify prioritisation decisions based on goals and dependencies
- **Consistency checking:** Treat status mismatches as signals, not noise
