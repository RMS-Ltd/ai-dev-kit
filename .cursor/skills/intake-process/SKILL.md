---
name: intake-process
description: Process FR/BR/UXR intake into tasks (atomic, bidirectional)
---

## Intake workflow execution

### Intelligence requirements

This workflow requires significant agentic intelligence:

- **Analyze comprehensively:** Understand FR/BR/UXR content and requirements  
- **Prioritize strategically:** MoSCOW / impact when updating boards  
- **Place tasks sensibly:** Primary task under the **delivery** story (semantic fit), not only repository story  
- **Wire dependencies:** Bidirectional links report ↔ task before intake ends  
- **Never orphan reports:** See **atomic intake** below  

### Atomic intake (**mandatory**)

**Rule (Kanban governance KG-R2):** Do **not** finish an intake with only a new `fr-br/*.md` file. In the **same working session** and **same logical change set**, you MUST:

1. Create the **FR / BR / UXR** markdown (template-compliant).  
2. Decide **Epic + Story** where the **work actually belongs** (framework → e.g. E6; docs portal → e.g. E5; UXR → epic’s UXR/research story per project).  
3. Create the **task document** under that story (or attach to an existing task if truly duplicate scope—then update the report to cite it).  
4. Set **`Implementing Task:`** (FR) / equivalent on BR/UXR and **link back** from task to the report.  
5. Add the **story checklist** row when the project uses checklists (or record a single-line pointer in the FR-repo story if the canonical task lives elsewhere—still must link).  

Only **after** 1–5 may you treat intake as complete. **RW / RW -k** versions the change; it is not a substitute for steps 2–5.

### Transition guardrail (FR-072 Approach D)

- For this repo's current migration path, **do not** open new intake tasks under dedicated repository stories (`FR Repo`, `BR Repo`, `UXR Repo`) unless explicitly required for historical backfill.
- New intake should create the primary task in the best semantic delivery story and keep repository-story references as historical pointers only.

### Optional convention (not required)

Some projects align numbers (e.g. FR-047 → E5:S01:T47). **KG-R6:** This is **optional**. Prefer **one** primary task in a **sensible** story over forcing id symmetry. Do **not** create a second task solely for symmetry.

### Step sequence (strict order)

1. **Capture report** — New `FR-*.md` / `BR-*.md` / `UXR-*.md` with required fields.  
2. **Decide hierarchy** — Epic/story for **delivery** (use decision flow; existing story first).  
3. **Create or attach task** — New `T*.md` or explicit attachment to existing task with rationale in the report.  
4. **Wire bidirectional links** — Report ↔ task; no broken `../epics/` paths from `fr-br/`.  
5. **Update story checklist** (and epic if required by project).  
6. **Boards** — `fr-br-uxr-board.md` / `kanban-board.md` as applicable (may trail by one RW if policy allows—links in Kanban docs must not trail).  
7. **Release** — User runs **RW** / **RW -k** on the correct epic branch for `version.py` alignment.  

### Integration points

- **Kanban governance:** `packages/frameworks/kanban/policies/kanban-governance-policy.md` (**KG-R2**, **KG-R6**)  
- **Guide:** `packages/frameworks/kanban/FR_BR_INTAKE_GUIDE.md`  
- **UKW** for MoSCOW cleanup after batch intake  
- **kanban-completed** / **fr-br-uxr-completed** when items close—not part of new intake  

### Task structure

**Format:** `E{epic}:S{story}:T{task}`  
**Example:** `E6:S06:T43`  
**Location (ai-dev-kit):** `docs/project-management/kanban/epics/Epic-{epic}/Story-…/T{task}-*.md`  

### Validation rules

- Report has **Implementing Task** (or project-standard field) pointing to a **real** task path  
- Task references the FR/BR/UXR  
- No intake closure with **TODO: create task**  
- Tasks include required sections for `validate_version_bump.py` when RW will run on that task  
