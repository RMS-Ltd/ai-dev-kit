---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-01T16:00:00Z
expires_at: null
housekeeping_policy: keep
policy_salience:
  policy_id: specification-and-planning-artifacts-policy
  type: standard
  domain:
    primary: documentation
    secondary: ["planning", "icw", "kanban"]
  audience: ["agents", "developers", "story-owners"]
  applies_to:
    activities:
      - "icw"
      - "task-planning"
      - "cursor-planning"
---

# Specification and planning artifacts policy

**Purpose:** Avoid treating **IDE-local plan directories** as the system of record. Make **specifications and test/planning intent** discoverable in **repository** documentation with a clear hierarchy and promotion workflow.

**Problem:** Cursor (and similar) may store plans under a **single user-local folder** (e.g. `~/.cursor/plans/`). That is **not** in git, **not** indexed with the repo, and **does not scale** for architecture visibility or audit.

---

## 1. Source-of-truth ladder (highest wins on conflict)

| Priority | Artifact | Role |
|----------|----------|------|
| 1 | **Kanban task document** (`docs/project-management/kanban/.../T*.md` or embedded task section) | **Authoritative** for task scope, acceptance criteria, deliverables, status, and **version anchor** when complete. |
| 2 | **Linked FR / BR / UXR** | Authoritative for *intake intent*, acceptance at feature level, and explicit follow-up rows (e.g. FU-1..n). |
| 3 | **Planning package under `docs/implementation-cycles/`** | Durable **specification**, **test design**, and **implementation plan** intent. Acceptable forms: (a) **ICW trio** — `ICW-E{epic}S{story}T{task}-{specification,test-design,implementation-plan}.md`; or (b) **IPP (consolidated IPW)** — single `IPP-E{epic}S{story}T{task}-*.md` whose numbered sections map to those three concerns (per `.claude/commands/ipw.md`). Must be **linked from the task**. See [dev-kit-ipw-ipp-vs-icw-artifacts.md](dev-kit-ipw-ipp-vs-icw-artifacts.md). |
| 4 | **Architecture / ADR / policy docs** | Cross-cutting rules and decisions (not a substitute for task-level acceptance). |
| 5 | **Automated tests** | **Executable** spec: failing/passing behavior. Names and docstrings **should** reference task or FR where practical. |

**Rule:** If a Cursor plan and a task doc disagree, **update the task doc** (and FR if needed), then adjust code/tests. The plan is **not** the owner of truth.

---

## 2. Artifact classes

### Durable (repository)

- Must live under **`docs/`** (or other committed paths defined by project policy).
- **ICW** canonical output directory is **`docs/implementation-cycles/`** (see `packages/frameworks/workflow mgt/workflows/implementation-cycle-workflow/icw-workflow.yaml` → `output_dir`).
- **IPW / IPP (consolidated):** A single markdown file `IPP-E{epic}S{story}T{task}-{slug}.md` in the same directory is **equivalent** to the ICW trio when it contains the required sections (requirements/spec, test design, implementation plan, **documentation deliverables**, **documentation housing**, success criteria) per `packages/frameworks/kanban/templates/PLAN_DOC_TEMPLATE.md` and is bidirectionally wired to the host task. IPW **Phase 5–6** (`.claude/commands/ipw.md`) produce §5–§6 before the IPP is written. See [dev-kit-ipw-ipp-vs-icw-artifacts.md](dev-kit-ipw-ipp-vs-icw-artifacts.md).
- Naming **convention** for **ICW** split packages (recommended when using three files):

  `ICW-E{epic}S{story}T{task}-specification.md`  
  `ICW-E{epic}S{story}T{task}-test-design.md`  
  `ICW-E{epic}S{story}T{task}-implementation-plan.md`

  Multi-task batches may use a **range suffix** already in use in this repo (e.g. `ICW-E7S06-T10-T16-*`) when one planning package intentionally covers several tasks.

### Transient (IDE-only)

- Files created only in **`~/.cursor/plans/`** (or other editor-local stores).
- **Use for:** scratchpad, intermediate brainstorming, UI-generated plans.
- **Do not use for:** the only copy of acceptance criteria, test design, or implementation steps **after** work is funded by a task.

---

## 3. Workflow: planning → implementation handoff

1. **Ensure a task exists** (Kanban governance: substantive work is task-driven). Note the task id placeholder `E{epic}:S{story}:T{task}` in the plan title or body.
2. **Draft in Cursor Plan (optional):** acceptable for speed.
3. **Promote before or as implementation starts:**
   - Copy **executable spec** statements (IDs, acceptance bullets) into the **task doc** sections *Scope*, *Acceptance Criteria*, *Deliverable* as appropriate; and/or
   - Create or update the **ICW trio** **or** a single **IPP** file under **`docs/implementation-cycles/`** using the conventions above.
4. **Link bidirectionally:**
   - In the **task doc**, add a **Planning artifacts** (or **References**) subsection listing paths to the ICW files, **IPP** file, or other `docs/` plans.
   - In each **ICW** file (or the **IPP** header), put the **task id** and link to the task markdown at the top.
5. **Discard or ignore** the IDE-only plan for governance after promotion (do not cite it as SoT in FR/task text).

**Agents:** When the user says “implement the plan,” **read the task doc and linked `docs/` files first**; treat `~/.cursor/plans/` as optional context if the user attaches it.

---

## 4. Discovery and inventory (what we’ve got)

- **Do not** rely on listing a monolithic local plans directory.
- **Do** discover specs by:
  - Opening the **task** from the Story checklist / FR **Implementing Task** link.
  - Listing or searching **`docs/implementation-cycles/ICW-*.md`** or **`IPP-*.md`** (by task id in the filename).
  - Reading **FR-067-style** triage tables and **maintenance** notes where applicable.

**Optional hygiene (UKW / maintainers):** If a story marks ICW/IPW as required and tasks lack **Planning artifacts** links while `docs/implementation-cycles/` contains matching `ICW-*` or `IPP-*` files, add the links (same session as other kanban updates; release via **RW** per project rules).

---

## 5. Non-goals

- This policy does **not** require every small fix to have a full ICW trio **or** a full IPP; minimum is **task doc + tests** where that is the team norm.
- Replacing Cursor Plans UI is **not** required; controlling **where truth lives** is.

---

## 6. References

- **IPP vs ICW packaging (ai-dev-kit):** [dev-kit-ipw-ipp-vs-icw-artifacts.md](dev-kit-ipw-ipp-vs-icw-artifacts.md)
- **Intake / traceability:** [FR-075](../../project-management/kanban/fr-br/FR-075-icw-durable-planning-artifacts-documentation-system.md); implementing task [E5:S01:T75](../../project-management/kanban/epics/Epic-5/Story-001-fr-repo/T75-icw-durable-planning-artifacts-documentation-system.md)
- Kanban task template: `packages/frameworks/kanban/templates/TASK_TEMPLATE.md`
- ICW workflow config: `packages/frameworks/workflow mgt/workflows/implementation-cycle-workflow/icw-workflow.yaml`
- ICW responsibilities (durable artifacts): `packages/frameworks/workflow mgt/workflows/implementation-cycle-workflow/README.md` (section **Durable planning artifacts**)
- Implementation cycles folder guide: [`docs/implementation-cycles/README.md`](../../implementation-cycles/README.md)
- Kanban governance: `packages/frameworks/kanban/policies/kanban-governance-policy.md` (task-driven work)
