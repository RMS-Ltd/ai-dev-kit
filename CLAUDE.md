# ai-dev-kit — Claude Code Project Instructions

**Branch:** `dev` | **Repo:** `earlution/ai-dev-kit`

This project is the AI Dev Kit: a collection of workflow management frameworks, kanban tooling, validation scripts, and release automation for agentic development workflows. Primary working branch is `dev`; releases are cut from `dev` and merged to `main`.

---

## RW Trigger Routing (CRITICAL)

**When the user message begins with `RW ` or `rw ` (case-insensitive), treat it as a Release Workflow trigger command — equivalent to the `/rw` slash command with the remainder of the message as arguments.**

Examples of plain-text triggers that MUST invoke the RW engine:
- `RW E2:S01:T19 --art` → execute full RW for task E2:S01:T19 with `--art` flag
- `RW -d E2:S01:T08` → execute docs-only RW
- `rw E6:S01:T38 --art` → same as above, case-insensitive
- `RW -k E6:S01:T38` → execute kanban-init RW

**DO NOT treat these as conversational text.** Execute the Release Workflow as documented.

**Preferred invocation (more reliable):** Use the `/rw` slash command — e.g. `/rw E2:S01:T19 --art`. The command file at `.claude/commands/rw.md` contains the full execution instructions.

### Blocked session (AC3)

If Bash/tool execution is NOT available in this session, respond with:

> **RW BLOCKED: tool execution is unavailable in this session. Switch to a session with tool access and retry.**

Do not silently no-op.

---

## Release Workflow Overview

The RW is an intelligent agent-driven workflow — not a deterministic script. Full instructions are in:

- `.cursorrules` → section `## 🚀 RELEASE WORKFLOW (RW) TRIGGER` (canonical trigger spec)
- `.claude/commands/rw.md` (Claude Code slash command — self-contained execution guide)
- `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md` (canonical step guide)

**Mandatory gates before any file modifications:**

1. Step 1 — `validate_branch_context.py --strict` (BLOCKING)
2. Step 1b — parse `E…S…T…` task token from trigger message
3. Step 1c — `validate_rw_task_complete.py --requested "<id>"`
4. Step 1d — `validate_rw_task_intent.py --requested "<id>"` (supports `--art`)

Any gate failure = **RW ABORTED** (explicit message, not silent).

---

## UKW Trigger Routing

**When the user message begins with `UKW` or `ukw` (case-insensitive), treat it as an Update Kanban Workflow trigger command — equivalent to the `/ukw` slash command with the remainder of the message as arguments.**

Examples of plain-text triggers that MUST invoke the UKW engine:

- `UKW` → execute comprehensive UKW (all operations)
- `UKW -u` → bookkeeping sub-workflow only
- `UKW -p` → update priorities only
- `UKW -a E2:S01:T19` → assign priorities to target task(s)
- `ukw -u -p` → same as above, case-insensitive

**DO NOT treat these as conversational text.** Execute the Update Kanban Workflow as documented.

**Preferred invocation (more reliable):** Use the `/ukw` slash command — e.g. `/ukw -u`. The command file at `.claude/commands/ukw.md` contains the full execution instructions.

### UKW blocked session (AC3)

If Bash/tool execution is NOT available in this session, respond with:

> **UKW BLOCKED: tool execution is unavailable in this session. Switch to a session with tool access and retry.**

Do not silently no-op.

---

## IPW Trigger Routing

**When the user message begins with `IPW` or `ipw` (case-insensitive), treat it as an Implementation Planning Workflow trigger command — equivalent to the `/ipw` slash command with the remainder of the message as arguments.**

Examples of plain-text triggers that MUST invoke the IPW engine:

- `IPW` → execute IPW, inferring host task from current context
- `IPW E2:S16:T09` → execute IPW for task E2:S16:T09
- `IPW E2:S16:T09 --skip-tests` → execute IPW with skip-tests flag
- `ipw E2:S16:T09` → same as above, case-insensitive

**DO NOT treat these as conversational text.** Execute the Implementation Planning Workflow as documented.

**Preferred invocation (more reliable):** Use the `/ipw` slash command — e.g. `/ipw E2:S16:T09`. The command file at `.claude/commands/ipw.md` contains the full execution instructions.

**CRITICAL:** IPW **MUST** run in plan mode. If not already in plan mode, respond with:

> **IPW BLOCKED: plan mode required. Type `/plan` to enter plan mode, then invoke `/ipw` again from within the plan session.**

### IPW blocked session (AC3)

If Bash/tool execution is NOT available in this session, respond with:

> **IPW BLOCKED: tool execution is unavailable in this session. Switch to a session with tool access and retry.**

Do not silently no-op.

---

## Other Workflow Triggers

- `CMW` — Changelog Management Workflow. Instructions in `.cursorrules`.
- `PVW` — Package Version Workflow. Instructions in `.cursorrules`.

When any of these triggers appear at the start of a user message, treat them as workflow commands and follow the relevant instructions in `.cursorrules`.

---

## Key Conventions

- All commits and tags go through RW — never `git commit` or `git push` directly outside RW.
- Version schema: `RC.EPIC.STORY.TASK+BUILD` (internal); SemVer for external display.
- Config-driven paths: `rw-config.yaml` at project root is the single source of truth for file paths.
- Kanban board: `docs/project-management/kanban/kboard.md`
- Validators: `packages/frameworks/workflow mgt/scripts/validation/`
