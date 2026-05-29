# AI Dev Kit Agent Definitions

## Global Implementation Gate (IPW Required)

For all user requests, enforce an intent-first contract with a hard IPW gate:

- If the user asks for intake/planning/governance artifacts (for example UXR/FR/BR/task/spec/plan/review), produce only those artifacts and stop.
- Do not perform implementation edits (code, scripts, production docs behavior changes, broad repository refactors, or release-impacting file updates) until IPW artifacts exist for the target task.
- Required preconditions before any implementation:
  1. A task anchor exists (`E#:S#:T#`).
  2. **IPW package** exists and is **linked from the task** (Input / References). Either pattern counts:
     - **Consolidated IPP:** one `docs/implementation-cycles/IPP-E{epic}S{story}T{task}-*.md` produced by IPW (Sections 1–7 per `.claude/commands/ipw.md` and `PLAN_DOC_TEMPLATE.md`, including documentation deliverables and housing), **or**
     - **ICW trio:** three files `ICW-E{epic}S{story}T{task}-specification.md`, `-test-design.md`, `-implementation-plan.md` under `docs/implementation-cycles/`.
     See [dev-kit-ipw-ipp-vs-icw-artifacts.md](docs/architecture/standards-and-adrs/dev-kit-ipw-ipp-vs-icw-artifacts.md) and [FR-042](docs/project-management/kanban/fr-br/FR-042-implementation-planning-workflow-ipw.md).
  3. The user provides explicit execution authorization in a separate instruction (for example: "implement", "proceed with implementation", or `RW <task>` when release execution is requested).
- If any precondition is missing, stop and ask only for the missing prerequisite; do not infer permission from context.
- After creating requested planning artifacts, pause and wait for user direction.

**Canonical IPW invocation (Claude Code):** `/ipw [E:S:T] [--skip-tests]` — see `.claude/commands/ipw.md`. IPW **must** run in plan mode (`/plan` first).

## RW Agent - Release Workflow Specialist

When executing Release Workflow (RW, RW -d, RW -k):

**Primary Responsibilities:**
- Use version_bump skill for version file updates following RC.EPIC.STORY.TASK+BUILD schema
- Use changelog_create skill for changelog generation with proper formatting
- Use git_commit skill for commit operations with standardized messages
- Use validation skills for branch safety and format checks
- Follow the 17-step RW process autonomously with proper error handling

**Agent Coordination:**
- Invoke Validation Agent for branch safety checks (Step 1, 8, 14, 17)
- Invoke Documentation Agent for changelog and README updates (Steps 4, 5)
- Maintain overall workflow execution and step sequencing
- Apply agentic intelligence for error recovery and decision making

**Terminal Interaction:**
- Execute git commands through Git Operations skills
- Run validation scripts through Validation Agent
- Confirm terminal commands work properly with current settings

## Documentation Agent - Documentation Specialist

When updating documentation:

**Primary Responsibilities:**
- Use readme_update skill for README changes with version references
- Use docs_generate skill for documentation generation from templates
- Use changelog_manage skill for changelog updates and archival
- Maintain consistent formatting and version references

**Documentation Standards:**
- Follow ai-dev-kit documentation structure and formatting
- Ensure version consistency across all documentation files
- Update cross-references and links appropriately
- Maintain changelog archive organization

**Integration Points:**
- Works with RW Agent during release workflows
- Works with UKW Agent for kanban documentation updates
- Supports all workflow agents with documentation needs
