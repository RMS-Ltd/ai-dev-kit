---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:01:47Z
expires_at: null
housekeeping_policy: keep
---

# Workflow Hardening Guide for Agent‑Driven Release Processes

**Audience:**  
- Projects using AI/agent assistance for release workflows and documentation updates.  
- Intended to be **project‑agnostic**, so you can copy this into any repo (e.g. `ai-dev-kit`, application repos) and customize file paths and step names.

**Goals:**  
- Make release workflows **atomic, predictable, and low‑friction**.  
- Minimize user intervention ("proceed", manual nudging).  
- Reduce wasted compute and cognitive overhead from tool churn and partial updates.

---

## 1. Problem Pattern

When agents run multi‑step workflows (e.g. a 10‑step Release Workflow – "RW"), common failure modes are:

- **Mid‑workflow pauses:**  
  The agent stops after partial work and waits for more user input, leaving the system in a half‑updated state.

- **Tool churn:**  
  The agent uses too many tools (some irrelevant), repeatedly reads/writes the same files, or experiments during RW instead of executing a crisp plan.

- **Inconsistent state:**  
  Version file, changelog, Kanban/epic/story docs, and git history don’t all line up with the same release.

- **Unclear blocked state:**  
  The user can’t easily tell if RW is complete, partially done, or abandoned without reading a long trace of actions.

Result: **wasted time, wasted compute, and reduced trust** in the automation.

This guide encodes patterns and safeguards to avoid that.

---

## 2. Core Principles

### 2.1 Atomicity

- **One RW invocation = one atomic attempt.**  
  For a given release version, the agent must:
  - Either **complete all steps** (e.g. Steps 1–10), or  
  - Stop once in a clear **"RW BLOCKED at Step X"** state.

- **No soft pauses.**  
  The user should not have to repeatedly type "proceed" to finish a single RW for one version.

### 2.2 Minimal, Predictable Tool Use

- Prefer a **small, stable set of tools** for RW:
  - File operations: `read_file`, `apply_patch`, `write`.  
  - Git / commands: `run_terminal_cmd`.  
  - Progress tracking: `todo_write` (or equivalent).

- Avoid during RW:
  - Irrelevant language‑server tools.  
  - Notebook editors for plain text files.  
  - Placeholder or experimental commands.

### 2.3 Single Source of Truth per Step

For each RW step, define **one authoritative artifact**, and normalize all related files to that source:

- **Version bump:** version file/package metadata.  
- **Changelog:** top entry in the changelog + matching archive file.  
- **Kanban/epic/story docs:** authoritative story file; epic and board must match it.  
- **Git state:** `git status` is authoritative for what’s staged/committed.

---

## 3. Generic Release Workflow Template

This template assumes a 10‑step RW. Adjust step names/paths for your project.

1. **Bump Version**  
   - Read version file and story/task docs.  
   - Identify the completed task number.  
   - Decide if this is a new task or a new build for the same task.  
   - Update version components and version string accordingly.

2. **Update Changelog**  
   - Add a new entry at the top of the main changelog for the new version.  
   - Optionally create a per‑version archive changelog file.

3. **Update Kanban Board**  
   - Update epic/story status, version, and task counts on the main board.

4. **Update Epic Docs**  
   - Update epic‑level doc (e.g. `Epic-\{N\}.md`) so header, story checklist, and detailed story sections all match the story file.

5. **Update README / Other Surface Docs (Optional)**  
   - Update any version badges or references if used.

6. **Stage Files**  
   - `git add -A` (or a curated subset).

7. **Run Validators**  
   - Branch context check (e.g. correct branch for epic).  
   - Changelog format validator.  
   - Optional: Kanban/epic consistency validator.

8. **Commit Changes**  
   - `git commit -m "Release {version}"`.

9. **Create Git Tag**  
   - Annotated tag `v{version}` with message `Release {version}`.

10. **Push to Remote**  
    - Push branch and tags to remote (or provide commands if sandboxed).

---

## 4. Execution Pattern for Agents

For each RW invocation:

### 4.1 Pre‑Flight

Before making changes:

1. **Confirm target:**  
   - Epic / story / task identifiers.  
   - Which task has just been completed.

2. **Lock plan:**  
   - Decide: "I will attempt Steps 1–10 in this invocation."  
   - If some step cannot be performed (e.g. network push), note up front where the workflow will legitimately stop.

3. **Initialize RW TODOs:**  
   - Create or reset a 10‑item todo list:  
     - `rw-step-1` … `rw-step-10` with `pending` status.

### 4.2 Step Discipline (ANALYZE → DETERMINE → EXECUTE → VALIDATE → PROCEED)

For each step:

- **ANALYZE:**  
  Read only the necessary files (version, story, changelog, etc.).

- **DETERMINE:**  
  Decide exactly what needs to change to satisfy the step.

- **EXECUTE:**  
  Apply the minimum required edits using `apply_patch`/`write` and `run_terminal_cmd`.

- **VALIDATE:**  
  Re‑read or check status (e.g. re‑read file, `git status`) to confirm the step succeeded.

- **PROCEED:**  
  Update the corresponding `rw-step-*` todo item and move on.

Crucially:

- Do **not** exit a step because of minor tooling friction (e.g. patch context mismatch) if you can fix it autonomously by re‑reading and adjusting.  
- Only escalate to the user when **blocked by missing information or environment limitations**.

### 4.3 TODO List as a State Machine (Critical)

The RW TODO list (**rw-step-1 … rw-step-10**) **must be treated as a state machine**, not a loose checklist:

- **Single active RW:**  
  - At most **one RW todo set** may be active at any time for a given project/branch.  
  - Starting a new RW requires that all previous RW steps are `completed` or explicitly `cancelled`.

- **Monotonic progression:**  
  - Step states may only move forward in this order:  
    `pending → in_progress → completed` (or `pending → cancelled` / `in_progress → cancelled`).  
  - Never revert a step from `completed` back to `in_progress`/`pending`.

- **One step “in_progress” at a time:**  
  - At any moment, **at most one** `rw-step-*` should be `in_progress`.  
  - Before starting the next step, mark the current one `completed` (or `blocked`/`cancelled` if you use those states).

- **State = reality:**  
  - A step may only be marked `completed` when all of its required artifacts are consistent (e.g., version + changelog + docs for that step).  
  - If reality and TODO state ever diverge, **fix the artifacts first**, then update the TODO to match.

- **RW BLOCKED handling:**  
  - If RW must stop, mark the **current step** as `blocked` (or leave as `in_progress` and clearly report it), and mark all later steps as `pending` or `cancelled`.  
  - Do **not** start a new RW until the blocked state is resolved or explicitly abandoned.

These rules ensure the TODO list can be read as a reliable, linear history of the workflow, and that agents (and humans) can safely resume, audit, or replicate RW behavior across projects.

---

## 5. Blocked State Contract

### 5.1 When to Declare “RW BLOCKED”

Declare a **blocked** state only when:

- You need **information the user must supply** (e.g. which task was actually completed, story file missing or ambiguous).  
- **Policy prohibits** continuing (e.g. on the wrong branch, policy forbids RW on `main`).  
- **Infrastructure limitations** prevent proceeding (e.g. no network access to push).

In that case, respond clearly with:

- **Step number & name:**  
  > "RW BLOCKED at Step 10: Push to Remote."

- **Reason:**  
  > "Cannot reach remote Git host from this environment."

- **Required user actions/commands:**  
  > "Please run:  
  > `git push origin epic/11-architecture-refactoring`  
  > `git push origin v0.11.3.2+1`"

- **Status reminder:**  
  > "RW is otherwise complete; this final push must be done manually."

### 5.2 When *Not* to Stop

Do **not** pause RW for:

- Patch context mismatches you can fix by re‑reading the file and adjusting the patch.  
- Transient tooling errors where a retry with corrected context is viable.  
- Internal experiments (avoid these entirely during RW).

---

## 6. Tooling Rules (Implementation‑Level)

### 6.1 Recommended Tools for RW

Adapt the names to your environment, but conceptually:

- **File inspection:**  
  - `read_file` for any file (version, docs, changelog).

- **File modification:**  
  - `apply_patch` for structured diffs.  
  - `write` for creating new files or entire replacements.

- **Shell / Git / Validators:**  
  - `run_terminal_cmd` for:  
    - `git status`, `git diff`.  
    - `git add`, `git commit`, `git tag`, `git push`.  
    - Project validators (branch context, changelog format, tests).

- **Progress tracking:**  
  - `todo_write` (or equivalent) for the 10 RW steps.

### 6.2 Tools to Avoid During RW

- Language‑server or platform‑specific tools unrelated to the project’s primary stack.  
- Notebook editing tools for regular source/markdown files.  
- Arbitrary placeholder commands or “scratch” tooling from inside the RW session.

Keep RW tooling **boring and predictable**.

---

## 7. Consistency Checks

### 7.1 Pre‑Commit Check

Before `git commit`:

1. **Version alignment:**  
   - Version file reports the intended version (e.g. `0.11.3.2+1`).

2. **Changelog alignment:**  
   - Top changelog entry is for that version.  
   - Matching archive file exists (`CHANGELOG_v{version}.md` or equivalent).

3. **Kanban alignment:**  
   - Epic’s line on the Kanban board references the correct version and status.  
   - Story line shows correct progress (e.g. "2/10 tasks complete").

4. **Epic/story docs alignment:**  
   - Epic doc story section matches the story doc (status, version, tasks).  
   - Story doc includes correct forensic markers/version references.

5. **Git cleanliness:**  
   - `git status --short` shows exactly the expected files staged.

### 7.2 Post‑RW Check

After commit/tag (and push if possible):

- Briefly summarize:
  - Version released.  
  - Task(s) completed.  
  - Key files updated (by category: code, version, changelog, docs).  
  - Any manual steps remaining (e.g. if push was blocked).

---

## 8. How to Integrate This into a New Project

To use this guide in another repo (e.g. `ai-dev-kit` or any application):

1. **Copy this file** into the new project (e.g. `docs/WORKFLOW-HARDENING-GUIDE.md`).
2. **Define project‑specific artifacts**:
   - Version file(s) (e.g. `version.py`, `package.json`, `pyproject.toml`, etc.).  
   - Changelog path.  
   - Kanban/epic/story documentation structure (markdown, Jira, etc.).  
   - Validators and scripts.
3. **Instantiate the 10 RW steps** for that project:
   - Keep the semantics (version → changelog → docs → validation → git), but adapt names and file paths.
4. **Enforce the atomic RW contract** in your agent configuration:
   - On `RW` command, the agent must:  
     - Initialize the 10‑step todo set.  
     - Attempt all steps sequentially in one invocation.  
     - Only stop early in a clearly reported “BLOCKED” state.
5. **Optionally add automated tests** or CI checks to:
   - Verify that version/changelog/docs stay in sync.  
   - Fail a pipeline if they diverge.

---

## 9. Summary

The key to robust, agent‑driven workflows is not more complexity, but **disciplined simplicity**:

- **Atomic** RW per release.  
- **Minimal** and **predictable** tools.  
- **Clear single sources of truth** per step.  
- **Honest blocked states** with explicit user actions when necessary.

By following this guide, you can reuse the same hardened RW pattern across multiple projects (both documentation‑heavy frameworks like `ai-dev-kit` and application repos), while avoiding the time and resource waste that comes from repeated partial workflows and tool thrashing.

