# Update Kanban Workflow (UKW) — Slash Command

**Invocation:** `/ukw [flags]`  
**Arguments:** `$ARGUMENTS` — optional flags (e.g. `-u`, `-p`, `-a E2:S01:T19`, `-u -p`, `-a all`)

**Plain-text alias:** `UKW $ARGUMENTS` is treated identically to this command.

---

## Environment Check (AC3 — MANDATORY FIRST)

Before executing any step, confirm that Bash/tool execution is available in this session.

- If Bash tool calls are NOT available: respond with **`UKW BLOCKED: tool execution is unavailable in this session. Switch to a session with tool access and retry.`** — do not proceed further.
- If Bash tool calls ARE available: proceed to Flag Parsing.

---

## Flag Parsing (MANDATORY — before Step 1)

Parse `$ARGUMENTS` to determine which sub-workflow(s) to run:

| Invocation | Operations |
|---|---|
| `/ukw` (no flags) | **Comprehensive** — bookkeeping + update priorities + assign priorities (all steps including Step 2.5) |
| `/ukw -u` | **Bookkeeping only** — Steps 1–5, 7–9 (skip Step 2.5, skip Step 6 MoSCOW) |
| `/ukw -p` | **Update priorities only** — Step 6 MoSCOW update |
| `/ukw -a <target>` | **Assign priorities only** — Step 6 assign to target(s) |
| `/ukw -u -p` | Bookkeeping + update priorities |
| `/ukw -u -a <target>` | Bookkeeping + assign priorities |
| `/ukw -p -a <target>` | Update priorities + assign priorities |
| `/ukw -u -p -a <target>` | All (equivalent to comprehensive) |

**Task targeting syntax for `-a`:**
- Single task: `E09S01T01`, `e9s1t1`, `E09:S01:T01`
- Multiple tasks: `E09S01T01,E08S02T11`
- Linear range: `E09S01T01-E09S01T06`
- Story: `E09S01`, `e9s1`
- Epic: `E09`, `e9`
- All unprioritized: `all`, `*`

**Load config (MANDATORY before Step 1):** Check for `rw-config.yaml` in the project root. If present and `use_kanban: true`, load it as the single source of truth for all kanban paths. If absent, use the default paths from the `File Paths` section below.

Document execution plan: `"UKW executing with flags: {flags}, operations: {operations}"`

---

## Execution Steps

Create a TODO list for all 9 UKW steps (mark Step 2.5 as skipped unless comprehensive; mark other skipped steps as `cancelled` immediately). Execute **autonomously without stopping for user guidance**. Follow the `ANALYZE → DETERMINE → EXECUTE → VALIDATE → PROCEED` pattern for each step.

**Step Execution Matrix:**

| Step | Comprehensive | `-u` only | `-p` only | `-a` only |
|------|:---:|:---:|:---:|:---:|
| 1 Identify Perpetual Task | ✅ | ✅ | ✅ | ✅ |
| 2 Analyze Recent Activity | ✅ | ✅ | ❌ | ❌ |
| 2.5 Discover Board Gaps | ✅ | ❌ | ❌ | ❌ |
| 3 Update Task Documents | ✅ | ✅ | ❌ | ❌ |
| 4 Update Story Documents | ✅ | ✅ | ❌ | ❌ |
| 5 Update Epic Documents | ✅ | ✅ | ❌ | ❌ |
| 6 Update Kanban Board | ✅ (full) | ✅ (no MoSCOW) | ✅ (MoSCOW only) | ✅ (assign only) |
| 6.5 fbuboard Reconciliation | ✅ | ✅ | ❌ | ❌ |
| 7 Validate Consistency | ✅ | ✅ | ❌ | ❌ |
| 8 Stage Files | ✅ | ✅ | ✅ | ✅ |
| 9 Document Changes | ✅ | ✅ | ✅ | ✅ |

---

### Step 1 — Identify Perpetual UKW Task (Wiring Step)

**Always runs.** Search all task documents for `perpetual_task: true` or `Task Type: Perpetual Maintenance`. Identify the task dedicated to UKW releases (may be named "Update Kanban Workflow (UKW)" or similar). Extract its `E{X}:S{Y}:T{Z}` ID. Store it for RW attribution later.

Document: `"UKW wired to perpetual task E{X}:S{Y}:T{Z}"`

### Step 2 — Analyze Recent Activity

Run `git log --since="7 days ago" --oneline --all`. Parse commit messages for `E{X}:S{Y}:T{Z}` identifiers. Scan `{kanban_root}/fr-br/` for recently modified FR/BR/UXR files. Check `git status` for modified kanban files. Build activity summary mapping commits and FR/BR/UXRs to affected kanban documents.

### Step 2.5 — Discover Board Gaps (Comprehensive only)

**(a) TODO tasks not on board:** Scan all task documents for TODO/IN PROGRESS status. Cross-reference with the board's MoSCOW section. Add missing tasks to the board with an appropriate MoSCOW classification.

**(b) Open FRs/BRs without tasks:** Scan `{kanban_root}/fr-br/` for docs with status `OPEN`, `PENDING`, `REOPENED`, `Proposed`, `IN PROGRESS`, or `INTAKE`. Cross-reference with board and story checklists. Present a formatted table of unlinked items to the user. Seek user intention: leave as is, or file tasks. If filing, create task docs per kanban governance and wire FR/BR ↔ task bidirectionally.

**Pause for user response on Part (b) before proceeding.**

### Step 3 — Update Task Documents

For each task document: read current status, check recent commits and FR/BR/UXR context, assess acceptance criteria. Update status fields, `Last updated` dates, and forensic markers (`✅ COMPLETE (vRC.E.S.T+B)`) where evidence supports. Do not mark complete without evidence.

### Step 4 — Update Story Documents

**🧠 Intelligence required.** For each story document: synthesize task completion data into a coherent tactical overview narrative (not a task list). Infer story status from task completion AND story goal attainment. Update task checklist and sort it numerically:

```bash
python "packages/frameworks/workflow mgt/scripts/kanban/sort_kanban_document_checklists.py" --document-path "{story_path}"
```

### Step 5 — Update Epic Documents

**🧠 Intelligence required.** For each epic document: synthesize story-level data into a coherent strategic overview narrative. Infer epic status from story completion AND epic goal attainment. Update story checklist and sort it numerically:

```bash
python "packages/frameworks/workflow mgt/scripts/kanban/sort_kanban_document_checklists.py" --document-path "{epic_path}"
```

### Step 6 — Update Kanban Board

**🧠 Intelligence required for MoSCOW.** Execution depends on flags:

- **Comprehensive / `-u`:** Update epic status sections, story lists, progress counts, board metadata.
- **Comprehensive / `-p`:** Reassess and rebuild MoSCOW priority list. MUST HAVE ordering: bug-based/breaking tasks at top (stack); all other M tasks at end (queue). S/C/O/W: chronological within section (most recent first).
- **`-a <target>`:** Assign priorities to specified target tasks only.

Sort epics, stories, and tasks numerically before writing:

```bash
python "packages/frameworks/workflow mgt/scripts/kanban/sort_kanban_board.py"
```

MoSCOW list is always updated **last** within this step.

### Step 6.5 — fbuboard Reconciliation and Drift Guard

At UKW start, snapshot boards: `python "packages/frameworks/workflow mgt/scripts/kanban/snapshot_kanban_boards.py"`. Read active MoSCOW sections in `fbuboard.md`. For each row, resolve its linked FR/BR/UXR source document. Prune rows whose linked source status is terminal (`COMPLETE`, `COMPLETED`, `IMPLEMENTED`, `FIXED`, `RESOLVED`) — unless the row explicitly indicates unresolved verification context (`IN PROGRESS`, `UNVERIFIED`, `PENDING VERIFICATION`). **FR-097:** Do **not** unify or rewrite row `Last modified` on hygiene; only update board `Last Updated` metadata. **UXR-012:** Do not change MoSCOW **state icons** on hygiene-only passes; icons follow `state_icons.py` when status text changes. Perform pre-write concurrency revalidation (re-read if file changed mid-run). Before Step 8 stage, run `validate_board_stamp_diff.py` (`--before` snapshot dir, `--after` live board) — **abort UKW** on failure. Optionally run `validate_kanban_state_icons.py --strict` when MoSCOW rows were edited. Report: audited rows, rows removed, exceptions kept, stamp-diff pass/fail, revalidation triggered.

### Step 7 — Validate Consistency

Cross-reference: task status → story task checklist → story status → epic story checklist → epic status → board. Verify version markers consistent across documents. Check all internal links resolve. Document any contradictions found.

### Step 8 — Stage Files

```bash
git add {kanban_root}/**/*.md
```

### Step 9 — Document Changes

Present a summary: tasks updated, stories updated, epics updated, key status changes, MoSCOW changes, fbuboard reconciliation stats. Note: **After UKW, run RW to commit the kanban documentation updates. RW will detect UKW context and auto-attribute to the perpetual UKW task wired in Step 1.**

---

## UKW → RW Integration

After UKW completes, the user typically runs `/rw` (or `RW`) to commit the kanban updates. RW Step 2 detects UKW context and:

1. Uses the perpetual task ID wired in UKW Step 1.
2. Increments BUILD only (does not bump EPIC, STORY, or TASK).
3. Version pattern: `v0.{EPIC}.{STORY}.{PERPETUAL_TASK}+{BUILD}` where BUILD = UKW run count.

High BUILD numbers on perpetual tasks are expected and valid — no warning should be emitted.

---

## Abort / Completion Protocol

- Always end in **`UKW COMPLETE`** or **`UKW ABORTED (Step X: reason)`** — never ambiguous.
- On abort at any step: mark remaining TODOs `cancelled`, output abort reason, stop.
- Never silently stop mid-workflow after modifying files.

---

## File Paths (ai-dev-kit)

Use `rw-config.yaml` values when present. Fallbacks:

- Kanban root: `docs/project-management/kanban/`
- Epic docs: `docs/project-management/kanban/epics/Epic-{E}/Epic-{E}.md`
- Story docs: `docs/project-management/kanban/epics/Epic-{E}/Story-{S}-*.md`
- Task docs: `docs/project-management/kanban/epics/Epic-{E}/Story-{S}/T{T}-*.md`
- Kanban board: `docs/project-management/kanban/kboard.md`
- FR/BR/UXR root: `docs/project-management/kanban/fr-br/`
- fbuboard: `docs/project-management/kanban/fbuboard.md`

---

## Reference Documentation

- Canonical step guide: `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/update-kanban-workflow-agent-execution.md`
- UKW trigger section: `.cursorrules` → `### 🔄 UPDATE KANBAN WORKFLOW (UKW) TRIGGER`
- Kanban governance policy: `packages/frameworks/kanban/policies/kanban-governance-policy.md`
- RW integration: `.claude/commands/rw.md` → Step 2 UKW context detection
