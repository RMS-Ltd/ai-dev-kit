---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-18T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# {Project Name} – Kanban Board

**Last Updated:** {YYYY-MM-DD} (UKW: bootstrap)
**Version:** {vX.X.X.X+X}

**Note:** {Epic-level status summary — which epics are COMPLETE, IN PROGRESS, PLANNING.}

**Active board contract:** Sole active MoSCOW board ([ADR-018 lean board](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/architecture/standards-and-adrs/ADR-018-single-kanban-board-consolidation.md)). Rows are live work plus filed Could Have backlog. Terminal rows → [`kanban-completed.md`](kanban-completed.md) / [`intake-completed.md`](intake-completed.md).

> **Structure:** [`kanban-structure.md`](kanban-structure.md) · **Guide:** [`kanban-board-guide.md`](kanban-board-guide.md) · **Completed:** [`kanban-completed.md`](kanban-completed.md) · **FBU inventory:** [`intake-structure.md`](intake-structure.md)

---

## MoSCOW Prioritized In-Progress Tasks

### Must Have (M) - Critical Tasks

- **E{epic}:S{story}:T{task}** – {Description} — {Status} ({Priority}) | [Task](epics/epic-{epic}/story-{story}-{name}/T{task}-{task-name}.md) | [Story](epics/epic-{epic}/story-{story}-{name}.md) | [FR-XXX](fr-br/FR-XXX-*.md) | —No IPP— | Last modified: {YYYY-MM-DD} UTC

### Should Have (S) - Important Tasks

- **E{epic}:S{story}:T{task}** – {Description} — {Status} ({Priority}) | [Task](epics/epic-{epic}/story-{story}-{name}/T{task}-{task-name}.md) | [Story](epics/epic-{epic}/story-{story}-{name}.md) | —No FR— | —No IPP— | Last modified: {YYYY-MM-DD} UTC

### Verification (V) - Task Shipped, FBU Verification Pending

Rows where the **task is terminal** but the **FBU remains open**. Use `⏳ WAITING` per ADR-018 / FR-109.

- **E{epic}:S{story}:T{task}** – {Description} — ⏳ WAITING ({Priority}, task shipped · FBU verification pending) | [Task](epics/epic-{epic}/story-{story}-{name}/T{task}-{task-name}.md) | [Story](epics/epic-{epic}/story-{story}-{name}.md) | [FR-XXX](fr-br/FR-XXX-*.md) | —No IPP— | Last modified: {YYYY-MM-DD} UTC

### Could Have (C) - Nice-to-Have Tasks

- **E{epic}:S{story}:T{task}** – {Description} — {Status} ({Priority}) | [Task](epics/epic-{epic}/story-{story}-{name}/T{task}-{task-name}.md) | [Story](epics/epic-{epic}/story-{story}-{name}.md) | —No FR— | —No IPP— | Last modified: {YYYY-MM-DD} UTC

### Ongoing (O) - Perpetual Tasks

#### Canonical (E01–E10) — ADK framework perpetuals

_Framework perpetual lanes typically under **E02:S16** ([FR-088](fr-br/FR-088-dedicated-story-for-perpetual-ongoing-tasks.md))._

- **E02:S16:T01** – Workflow maintenance — 🔄 PERPETUAL | [Task](epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T01-workflow-maintenance-perpetual.md) | [Story](epics/epic-02/story-16-perpetual-ongoing-workflow-operations.md) | —No IPP— | Last modified: {YYYY-MM-DD} UTC

- **E02:S16:T02** – Ad-hoc Kanban synchronization and hygiene (UKW) — 🔄 PERPETUAL | [Task](epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T02-ad-hoc-kanban-synchronization-and-hygiene-perpetual.md) | [Story](epics/epic-02/story-16-perpetual-ongoing-workflow-operations.md) | —No IPP— | Last modified: {YYYY-MM-DD} UTC

- **E02:S16:T03** – Ad-hoc Documentation Maintenance — 🔄 PERPETUAL | [Task](epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T03-ad-hoc-documentation-maintenance-perpetual.md) | [Story](epics/epic-02/story-16-perpetual-ongoing-workflow-operations.md) | —No IPP— | Last modified: {YYYY-MM-DD} UTC

- **E02:S16:T04** – Ad-hoc Repository Infrastructure Maintenance — 🔄 PERPETUAL | [Task](epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T04-ad-hoc-repository-infrastructure-maintenance-perpetual.md) | [Story](epics/epic-02/story-16-perpetual-ongoing-workflow-operations.md) | —No IPP— | Last modified: {YYYY-MM-DD} UTC

- **E02:S16:T05** – GitHub Actions CI health — 🔄 PERPETUAL | [Task](epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T05-github-actions-ci-health-perpetual.md) | [Story](epics/epic-02/story-16-perpetual-ongoing-workflow-operations.md) | —No IPP— | Last modified: {YYYY-MM-DD} UTC

- **E02:S16:T06** – GitHub Security & Code Quality health — 🔄 PERPETUAL | [Task](epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T06-github-security-code-quality-health-perpetual.md) | [Story](epics/epic-02/story-16-perpetual-ongoing-workflow-operations.md) | —No IPP— | Last modified: {YYYY-MM-DD} UTC

#### Domain (E21+) — project perpetuals

_Add domain-specific perpetual or ongoing rows after migration or when project epics exceed E10._

- **E{epic}:S{story}:T{task}** – {Domain perpetual description} — 🔄 ONGOING | [Task](epics/epic-{epic}/story-{story}-{name}/T{task}-{task-name}.md) | [Story](epics/epic-{epic}/story-{story}-{name}.md) | —No IPP— | Last modified: {YYYY-MM-DD} UTC

### Won't Have (W) - Deferred Tasks

_No tasks currently deferred._

---

**Template Version:** 2.2.0  
**Last Updated:** {YYYY-MM-DD}  
**Based On:** [UXR-028](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/fr-br/UXR-028-kboard-v3dot2-packaged-template-alignment.md) · SBL attempt 06 `kboard-template-v3dot2.md` · ADR-018 lean board · UXR-010 IPP segment
