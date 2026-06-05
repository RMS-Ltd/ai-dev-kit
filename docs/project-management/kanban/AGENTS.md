# Kanban Workflow Agents

**Cold-start bootstrap (all agents):** repo-root [`AGENTS.md`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/AGENTS.md) and [`docs/project-agent-manifest.json`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/project-agent-manifest.json). This file holds **domain role** detail for kanban, intake, and documentation coordination.

---

## RW Agent — Release Workflow Specialist

When executing Release Workflow (RW, RW -d, RW -k):

**Primary responsibilities:** version bump (`RC.EPIC.STORY.TASK+BUILD`), changelog, scoped kanban Step 7 (four surfaces), commit + local tag via RW — **no push by default** ([UXR-024](fr-br/UXR-024-rw-local-release-default-no-push-batch-operator-push.md)); operator batch-pushes or `RW --push`.

**Skills:** `.cursor/skills/version-bump`, `changelog_create`, `readme_update`, validation scripts under `packages/frameworks/workflow-mgt/scripts/validation/`.

**Coordination:** Validation Agent (branch safety); Documentation Agent (changelog, README, completed ledgers).

**Canonical execution:** `.cursorrules` RW section · `.claude/commands/rw.md` · [release-workflow-agent-execution.md](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md)

**Human quick reference:** [workflow-initiation-cheatsheet.md](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/guides/workflow-initiation-cheatsheet.md)

---

## UKW Agent - Update Kanban Workflow Specialist

When working with kanban boards:

**Primary Responsibilities:**
- Use kanban_sync skill for board synchronization
- Use status_inference skill for intelligent status deduction
- Use moscow_prioritize skill for MoSCOW prioritization
- Use narrative_synthesis skill for coherent progress summaries
- Use board_cleanup skill for autonomous board maintenance

**Intelligence Requirements:**
- Follow bottom-up approach: Tasks → Stories → Epics → Board
- Apply agentic intelligence for synthesis and prioritization
- Transform raw task/story data into coherent narratives
- Infer completion state from evidence (commits, FR/BR/UXRs, file changes)
- Classify tasks using MoSCOW methodology based on goals and dependencies

**Key Principle:**
- Bottom-up approach - Update Tasks → Stories → Epics → Board (in that order)
- The MoSCOW priority list is updated LAST

## Intake Agent - FR/BR/UXR Intake Specialist

When processing intake:

**Primary Responsibilities:**
- Use intake_process skill for intake processing
- Use fr_analysis skill for feature request analysis
- Use br_triage skill for bug report triage
- Use task_creation skill for task generation
- Use dependency_wiring skill for dependency management

**Intelligence Requirements:**
- Follow top-down approach: Epic → Story → Task → Intake
- Apply agentic intelligence for analysis and prioritization
- Analyze multiple data points and create coherent summaries
- Determine MoSCOW priorities based on project goals and impact
- Understand relationships between work items and strategic context

**Integration Points:**
- Works with UKW Agent for task status updates
- Works with Documentation Agent for task documentation
- Supports kanban board maintenance and organization

---

## Documentation Agent - Documentation Specialist

When working with documentation:

**Primary Responsibilities:**
- Use readme_update skill for README changes with version references
- Use docs_generate skill for documentation generation from templates
- Use changelog_manage skill for changelog updates and archival
- Use kanban_completed_update skill for kanban-completed.md maintenance
- Use fr_br_uxr_completed_update skill for intake-completed.md maintenance
- Ultimate responsibility for kanban-completed.md and intake-completed.md integrity and updates

**Intelligence Requirements:**
- Follow documentation-first approach for all project changes
- Apply agentic intelligence for consistency and formatting
- Maintain cross-references and link integrity across documentation
- Ensure version consistency across all documentation files
- Coordinate with other agents for documentation updates

**Key Principle:**
- Single source of truth - Documentation Agent owns document integrity
- Standard interface for other agents needing documentation updates
- Validation and consistency checking for all documentation changes

**Ultimate Responsibility:**
- **kanban-completed.md:** Final authority over structure, format, and updates
- **intake-completed.md:** Final authority over structure, format, and updates
- **docs/journals/:** Workflow forensic run logs and checkpoint manifests (FR-059 / ADR-008); TTL housekeeping per `journal_ttl_days` in `rw-config.yaml`
- **Agent Coordination:** Primary interface for all agents updating completed tasks and FR/BR/UXR items
- **Validation:** Ensures consistent timestamp format and recent tasks tracking for both kanban and FR/BR/UXR

---

**Agent Coordination Patterns:**

### Standard Update Interface for kanban-completed.md
```
Documentation Agent.update_kanban_completed({
  task_id: "E5:S01:T48",
  status: "COMPLETE",
  version: "v0.5.1.48+1", 
  timestamp: "2026-03-11T16:20:00Z",
  completing_agent: "RW Agent"
})
```

### Standard Update Interface for intake-completed.md
```
Documentation Agent.fr_br_uxr_completed_update({
  fr_br_uxr_id: "FR-048",
  type: "FR",
  status: "COMPLETE", 
  version: "v0.5.1.48+1",
  timestamp: "2026-03-11T16:20:00Z",
  completing_agent: "Intake Agent"
})
```

### Invoking Agents (Examples)
- **RW Agent:** When tasks complete during release workflow
- **UKW Agent:** When board cleanup archives completed tasks  
- **Intake Agent:** When new tasks are created and completed
- **Any Workflow Agent:** When task completion occurs

### Coordination Protocol
1. **Primary Responsibility:** Documentation Agent has final authority
2. **Standard Interface:** All agents use documented update patterns
3. **Validation:** Built-in consistency checks and error handling
4. **Audit Trail:** Complete temporal tracking of all updates
