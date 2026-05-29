---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-22T09:05:00Z
expires_at: null
housekeeping_policy: keep
---

# ADR: Hybrid Task Template System (Concrete Templates + Procedural Generation)

## Status

- **Status:** Proposed
- **Date:** 2025-12-22

## Context

The ai-dev-kit Kanban framework provides a **canonical Epics/Stories/Tasks (E/S/T) structure** via:

- `packages/frameworks/kanban/templates/COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md`
- Concrete epic and story templates under `packages/frameworks/kanban/templates/epics/` and `.../stories/`

For tasks, the current approach (E4:S06:T04 – Create task template files for each typical task) has:

- **~196 concrete task templates** created out of ~300+ expected
- **Disk footprint:** 
  - `packages/frameworks/kanban/templates/tasks`: ~796KB uncompressed
  - Compressed (tar.gz): ~96KB
- **Time investment so far:** on the order of **dozens of hours** to author high-quality, contextual templates
- **Remaining work:** ~100+ templates to reach full coverage

Benefits of concrete task templates:

- Rich, human-authored guidance (scope, inputs, deliverables, acceptance criteria, approach)
- Consistent structure based on `TASK_TEMPLATE.md`
- Immediate usability for adopting projects (copy/contextualize)

Concerns:

1. **Time cost:** Manual authoring of hundreds of templates is expensive (already high sunk cost, more work remaining).
2. **Maintenance cost:** 
   - Structural changes (e.g., adding a required section) would require editing every template.
   - Content changes (e.g., standardizing acceptance criteria patterns) are tedious to roll out.
3. **Distribution footprint:** While current disk usage is modest, distributing fully expanded templates to all consumers is unnecessary if they can be generated.

We also have a **single canonical structure document** (`COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md`) that already encodes:

- All canonical epics and stories
- All typical tasks (IDs and short descriptions)

This suggests a strong opportunity for **procedural generation** of task templates at client side, using the structure document plus a small amount of generation logic.

## Decision

We will adopt a **hybrid task template system**:

1. **Complete the existing concrete task templates** to a high-quality, stable standard.
   - Finish E4:S06:T04 so that all canonical tasks have first-class, human-authored templates.
   - Treat this concrete set as the **reference implementation and validation corpus**.

2. **Introduce a procedural task template generator** for future evolution and distribution.
   - Implement a generator that:
     - Reads `COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md` (and any successor structure docs).
     - Uses `TASK_TEMPLATE.md` as the structural template.
     - Emits per-task `.md` files following the canonical paths under `templates/tasks/Epic-\{n\}/Story-{m}/T{xx}-*.md`.
   - Make the generator suitable for:
     - **Client-side generation** in adopting projects.
     - **Framework maintenance** (regenerating the reference templates if/when structure changes).

3. **Use the concrete templates as the “golden set” for validation and feedback.**
   - Procedurally generated templates will be **diffed and validated** against the existing concrete templates for:
     - Structural correctness (sections, headings, frontmatter)
     - Placeholder usage
     - Consistency of task IDs and naming
   - Feedback from using the concrete templates in real work (FR/BRs, PIRs, UKW) will be folded into:
     - The canonical structure document
     - The generator’s patterns and defaults

4. **Long-term source of truth:**
   - **Canonical structure and semantics** live in the structure document(s) and generator code.
   - The concrete templates remain:
     - The **shipping reference set** for the Kanban framework package.
     - A regression/validation corpus for the generator.

## Rationale

### Why not fully manual?

- Manual approach:
  - Pros: 
    - Maximum human nuance and curation per template.
    - No tooling needed.
  - Cons:
    - High up-front time cost (~60+ hours total for 300+ templates).
    - High maintenance cost for cross-cutting changes.
    - Hard to keep all templates in sync with evolving canonical patterns.

Given the size and complexity of the canonical E/S/T set, **manual-only** is not sustainable for long-term evolution.

### Why not fully procedural from day one?

- Procedural-only approach:
  - Pros:
    - Very small footprint (structure + generator).
    - Cheap to regenerate after changes.
  - Cons:
    - Harder to guarantee high-quality, nuanced content without a strong reference set.
    - Easy to end up with generic, low-value templates if not carefully curated.

We already have **significant investment in high-quality concrete templates**. Using them purely as generated output would throw away the value of that work.

### Why hybrid?

The hybrid strategy provides:

- **Short term:**
  - A complete, high-quality template set for all canonical tasks.
  - Immediate value for adopters.
- **Medium/long term:**
  - A generator that:
    - Encodes patterns learned from the concrete templates.
    - Can regenerate or extend the set cheaply.
  - A single, canonical structure document as the semantic SoT.

This balances:

- **Quality:** Preserve and leverage human-authored templates.
- **Flexibility:** Regenerate and evolve cheaply.
- **Traceability:** Clear mapping from structure → generator → templates.

## Consequences

### Positive

- **Reduced maintenance cost:**
  - Structural changes can be implemented in the structure doc and generator, then regenerated across all tasks.
  - Cross-cutting improvements (e.g., updated acceptance-criteria patterns) can be propagated automatically.

- **Smaller distribution footprint (for clients):**
  - Clients can choose:
    - Use the pre-generated templates (as today), or
    - Run the generator on their side from a small structure + script.

- **Better alignment with canonical structure:**
  - The generator enforces consistency between the structure document and the template files.

- **Feedback loop:**
  - Real-world usage feedback on concrete templates directly informs improvements in:
    - Structure document
    - Generator heuristics

### Negative / Risks

- **Generator correctness risk:**
  - Bugs in the generator could create malformed or inconsistent templates.
  - Mitigation: validate against the existing concrete “golden” templates; add tests.

- **Dual maintenance during transition:**
  - For some period, we will maintain:
    - Concrete templates.
    - Generator code.
    - Structure document.
  - Mitigation: define a clear ownership and migration plan; once the generator is validated, treat generated output as canonical for new changes.

- **Complexity overhead:**
  - Adds a tool and some cognitive load for contributors.
  - Mitigation: keep the generator small, well-documented, and close to the templates.

## Implementation Sketch

### Scope

This ADR is implemented via:

- **New Feature Request:** Procedural task template generation for the Kanban framework (FR-029).
- **New Kanban Story:** Under Epic 4 (Kanban Framework), covering:
  - Generator implementation.
  - Validation against existing concrete templates.
  - Integration into the Kanban framework docs and distribution story.

### Key Work Items

1. **Complete remaining concrete templates (E4:S06:T04).**
   - Finish ~100+ missing task templates using `TASK_TEMPLATE.md` and the structure doc.
   - Ensure consistent naming and folder structure.

2. **Design and implement the generator.**
   - Likely location: `packages/frameworks/kanban/scripts/generate_task_templates.py` (or similar).
   - Inputs:
     - `COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md`
     - `TASK_TEMPLATE.md`
   - Outputs:
     - Task template files under `templates/tasks/Epic-\{n\}/Story-{m}/T{xx}-*.md`.

3. **Validation and tests.**
   - Diff generated templates against existing concrete templates (by path and structure).
   - Add basic tests to:
     - Ensure all canonical tasks from the structure doc have a generated template.
     - Ensure task IDs, titles, and file paths are consistent.

4. **Documentation.**
   - Update Kanban framework README and relevant docs to:
     - Explain the hybrid strategy.
     - Show how to run the generator (for framework maintainers and clients).
     - Clarify canonical SoT (structure + generator) vs reference templates.

## Alternatives Considered

1. **Keep only concrete templates (no generator).**
   - Rejected due to long-term maintenance and evolution cost.

2. **Procedural-only templates (remove concrete templates).**
   - Rejected for now; we want to preserve and learn from high-quality human-authored content.

3. **On-demand generation only in clients (no reference templates in repo).**
   - Rejected for now; the ai-dev-kit repo should keep a canonical reference implementation that tools and docs can point to.


