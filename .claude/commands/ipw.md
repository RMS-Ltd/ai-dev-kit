# Implementation Planning Workflow (IPW) — Slash Command

**Invocation:** `/ipw [E{epic}:S{story}:T{task}] [--skip-tests]`  
**Arguments:** `$ARGUMENTS`  
**Plain-text alias:** `IPW $ARGUMENTS` is treated identically to this command.

---

## Plan Mode Check (MANDATORY FIRST)

IPW is a **planning-only** workflow. It **MUST** run in plan mode.

Check whether plan mode is active in this session (a plan mode system-reminder will be present in your context):

- If plan mode is **NOT** active: respond with **`IPW BLOCKED: plan mode required. Type /plan to enter plan mode, then invoke /ipw again from within the plan session.`** — do not proceed further.
- If plan mode **IS** active: proceed to Environment Check.

---

## Environment Check (AC3)

Confirm Bash/tool execution is available in this session.

- If Bash tool calls are **NOT** available: respond with **`IPW BLOCKED: tool execution is unavailable in this session. Switch to a session with tool access and retry.`** — do not proceed further.
- If Bash tool calls **ARE** available: proceed to Argument Parsing.

---

## Argument Parsing

Parse `$ARGUMENTS` to determine:

1. **Task token:** Extract `E…S…T…` identifier (e.g. `E2:S16:T09`, `E2S16T09`). Flexible parsing — colons and zero-padding optional. If not provided, infer from current context (most recently discussed task, open task doc, etc.).
2. **`--skip-tests` flag:** Present or absent. Valid for doc/config-only tasks where test design is not applicable. If present, explicit justification is mandatory in Phase 3.

If no task token found and cannot be inferred from context → respond with **`IPW ABORTED: no host task identified. Re-invoke with an explicit E:S:T token, e.g. /ipw E2:S16:T09.`** Do not proceed.

---

## Phase Execution

Create a TODO list for all phases (Phase 0 through Phase 9) before starting. Mark each phase complete before advancing to the next. **Phase gates are mandatory — never skip or compress phases silently.**

Execute the `ANALYZE → DETERMINE → EXECUTE → VALIDATE → PROCEED` pattern for each phase.

---

### Phase 0 — Identify Host Task

Resolve the E:S:T token to a task document. Confirm the task doc exists at its canonical kanban path.

**Gate to proceed:** Task document found and E:S:T token confirmed. Task status is `TODO` or `IN PROGRESS`.

If task doc not found → **IPW ABORTED (Phase 0: task document not found for `<token>`)**.

---

### Phase 1 — Ascertain Requirements

Consolidate all requirements for the host task:

- Functional requirements from the task doc, linked FR/BR/UXR documents, and stated acceptance criteria.
- Non-functional requirements (performance, security, consistency constraints).
- Invariants, in-scope boundaries, and out-of-scope exclusions.

Resolve any gaps or ambiguities with the user **before proceeding to Phase 2**.

**Gate to proceed:** All requirements consolidated; all gaps resolved; user has confirmed no open questions remain.

---

### Phase 2 — Define Specification

Encode the ascertained requirements baseline as a formal specification:

- **Goal:** One paragraph — what outcome this plan enables.
- **Functional requirements:** Numbered list from Phase 1.
- **Non-functional requirements:** Numbered list from Phase 1.
- **Out of scope:** Explicit exclusions.
- **Constraints:** Any invariants or hard limits.

**Gate to proceed:** User confirms scope before Phase 3 begins. Do not proceed if scope is contested.

---

### Phase 3 — Design Tests

Map test cases to specification coverage. Each test case must reference the requirement(s) it exercises.

If `--skip-tests` was provided: document **explicit justification** in this phase (e.g. "doc/config-only task — no executable code; verification is structural inspection of document content"). Justification is mandatory and must appear in the plan doc. A bare `--skip-tests` flag without justification is not accepted.

**Gate to proceed:** Test cases mapped and requirements coverage confirmed — OR `--skip-tests` justification documented.

---

### Phase 4 — Plan Implementation

Define ordered implementation steps, files to create or modify, and dependency sequencing.

**MANDATORY:** The implementation plan MUST include these two prescribed steps regardless of task type:

**Step 1 (always first):**
> Transition task `E{epic}:S{story}:T{task}` status from `TODO` to `IN PROGRESS` in task document. Update `Last updated` date.

**Final step (always last):**
> Reconcile task `E{epic}:S{story}:T{task}` status with actual implementation state: if all acceptance criteria are satisfied with evidence → transition to `COMPLETE` and add forensic marker `✅ COMPLETE (v{version})`; if implementation is ongoing → confirm status remains `IN PROGRESS`; if blocked → transition to `BLOCKED` with documented reason. Update `Last updated` date.

These steps are executor-prescribed — IPW does not execute them. The plan mandates them; implementation execution follows the plan.

**Gate to proceed:** Implementation steps defined; Step 1 (`TODO → IN PROGRESS`) is the first item; status reconciliation is the final item.

---

### Phase 5.0 — ADR Necessity Decision

After Phase 4 and **before** Phase 5 documentation inventory, score the [IPW ADR necessity checklist](docs/architecture/standards-and-adrs/ipw-adr-necessity-checklist.md) (FR-100).

**EXECUTE:**
- Score **T1–T7** (Y/N) with one-line evidence per trigger.
- If **any Y** → outcome **REQUIRED**; plan §5 ADR `CREATE` or `UPDATE` (path under `docs/architecture/standards-and-adrs/`).
- If **all N** → score **E1–E5**; all pass → outcome **EXEMPT** with §5.3 governing-doc citation; any fail → **REQUIRED** or resolve scope before proceeding.
- Persist the matrix in Phase 7 IPP **§2.5 ADR necessity decision**.

**Gate to proceed:** Outcome recorded (`REQUIRED`, `EXEMPT`, or `ALREADY_COVERED` with ADR link); if REQUIRED, ADR deliverable row is identified for Phase 5 §5 table.

---

### Phase 5 — Documentation Update and Creation

After Phase 5.0 and implementation planning (Phase 4), inventory **all documentation** affected by this task. Do not limit the scan to code paths — include governance, workflow, user, and architecture docs.

**ANALYZE (mandatory sources):**
- Host task doc, linked FR/BR/UXR, and acceptance criteria.
- Phase 1–4 outputs (requirements, spec, tests, impl plan file list).
- Repository search for existing docs that reference the same feature, workflow, API, or policy (grep paths, filenames, cross-links).

**DETERMINE — classify every identified document:**

| Action | Meaning |
| ------ | ------- |
| **UPDATE** | Existing file must change (content, cross-links, status, examples). |
| **CREATE** | No suitable doc exists; a new file is required. |
| **NONE** | Reviewed and confirmed no change needed (record why). |

**EXECUTE — produce a documentation deliverables table** (persisted in Phase 7 §5):

| Doc ID | Path (existing or proposed) | Action | Scope of change | Tied to (RF/T/step) |
| ------ | --------------------------- | ------ | --------------- | ------------------- |
| D1 | … | UPDATE \| CREATE \| NONE | … | … |

**Gap analysis (mandatory):** List documentation **gaps** — topics the task must explain but that have no adequate home yet. Each gap becomes a **CREATE** row or an explicit **NONE** with justification (e.g. covered by task doc only).

**Gate to proceed:** Deliverables table complete; every gap either has a CREATE/UPDATE row or documented NONE; user confirms no missing doc classes (user docs, KB/workflow guides, ADRs/policies, README, kanban/FR/BR) before Phase 6.

---

### Phase 6 — House Documentation

Map each Phase 5 deliverable to a **canonical location** in the project documentation system. Planning-only IPW does not require writing those files now — it **must** fix paths, filenames, and publication intent so implementation can file them without guesswork.

**Housing ladder (highest-specificity wins):**

| Document class | Canonical location |
| -------------- | ------------------ |
| Planning package (this IPW) | `docs/implementation-cycles/IPP-E{E}S{S}T{T}-{slug}.md` |
| Kanban task / story / epic | `docs/project-management/kanban/...` |
| FR / BR / UXR | `docs/project-management/kanban/fr-br/` |
| Architecture / ADR / policy | `docs/architecture/standards-and-adrs/` |
| Workflow / developer KB | `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/` |
| Framework package docs | Under relevant `packages/frameworks/{name}/` |
| User-facing docs | `docs/documentation/user-docs/` |
| Docusaurus-published | `portal/` navigation + source under `docs/` (see BR-066) |

**Per deliverable, record in Phase 7 §6:**
- **Target path** (full repo-relative path).
- **Publication status:** `PUBLISHED` | `NOT_APPLICABLE` (with **Publication N/A Reason** when N/A).
- **Lifecycle** (`evergreen` / `timeboxed` / `transient`) when creating new docs.
- **Inbound links:** task doc, FR/BR, IPP section, or parent README to add during implementation.

**Gate to proceed:** Every CREATE/UPDATE row from Phase 5 has a target path and publication status; no deliverable left with a TBD path; housing conflicts resolved (one authoritative doc per topic).

---

### Phase 7 — Create Plan Doc

Write the plan document using `PLAN_DOC_TEMPLATE.md` as the template. Set the **Host Task** header with a link to the task doc.

Canonical location: `docs/implementation-cycles/IPP-E{E}S{S}T{T}-{slug}.md`

All required sections must be present:
- Section 1: Requirements (Ascertained Baseline)
- Section 2: Specification (including 2.4 Status Transition Intent and 2.5 ADR Necessity Decision)
- Section 3: Test Design (or `--skip-tests` justification)
- Section 4: Implementation Plan (with mandatory Step 1 and final reconciliation step)
- Section 5: Documentation Deliverables (from Phase 5)
- Section 6: Documentation Housing (from Phase 6)
- Section 7: Success / Verification Criteria
- References

**Gate to proceed:** Plan doc created and all required sections present with content.

---

### Phase 8 — Wire to Host Task

Atomic with Phase 7. Update the host task document:

- Add the plan doc link under **Input**.
- Add the plan doc link under **References**.
- When any deliverable is `PUBLISHED`, ensure **Documentation Publication** (or equivalent) on the task doc reflects `Publication Status` and links per BR-066.

**Gate to proceed:** Bidirectional links confirmed — plan doc links to task, task doc links to plan doc.

---

### Phase 9 — Validate

Confirm all of the following before declaring IPW complete:

- [ ] Bidirectional links work (plan → task, task → plan; links resolve to actual files).
- [ ] All required sections present in plan doc (§1–§7).
- [ ] Phase 4 output contains Step 1 (`TODO → IN PROGRESS`) as the first prescribed item.
- [ ] Phase 4 output contains status reconciliation as the final prescribed item (not a forced `→ COMPLETE`).
- [ ] If `--skip-tests` used: justification text present in Phase 3 section of plan doc.
- [ ] §5 lists every doc UPDATE/CREATE/NONE from Phase 5; gaps are closed or justified.
- [ ] §6 assigns a canonical path and publication status to every non-NONE deliverable.
- [ ] §2.5 present: T1–T7 scored; outcome (`REQUIRED` \| `EXEMPT` \| `ALREADY_COVERED`) recorded.
- [ ] If any T1–T7 is Y: §5 includes ADR `CREATE` or `UPDATE` row.
- [ ] If EXEMPT: all E1–E5 pass and §5.3 cites governing doc per checklist policy.

**Gate (completion):** All validation checks pass.

---

## Abort / Completion Protocol

- Always end in **`IPW COMPLETE`** or **`IPW ABORTED (Phase X: reason)`** — never ambiguous.
- On abort at any phase: mark remaining phase TODOs as `cancelled`, output the abort reason, stop.
- Never silently stop mid-workflow after beginning phase execution.
- Never skip phase gates to save time — a plan with skipped gates is invalid.

---

## File Paths (ai-dev-kit)

Use `rw-config.yaml` values when present. Fallbacks:

- Plan doc location: `docs/implementation-cycles/`
- Plan doc template: `packages/frameworks/kanban/templates/PLAN_DOC_TEMPLATE.md`
- Kanban root: `docs/project-management/kanban/`
- FR/BR/UXR root: `docs/project-management/kanban/fr-br/`

---

## Reference Documentation

- IPW canonical step guide: `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/implementation-planning-workflow-agent-execution.md`
- Plan doc template: `packages/frameworks/kanban/templates/PLAN_DOC_TEMPLATE.md`
- FR-042 (canonical IPW definition): `docs/project-management/kanban/fr-br/FR-042-implementation-planning-workflow-ipw.md`
- FR-094 (this command's origin): `docs/project-management/kanban/fr-br/FR-094-ipw-slash-command-and-task-state-transition-mandate.md`
- FR-077 (status transition ownership): `docs/project-management/kanban/fr-br/FR-077-ipw-built-task-status-transition-and-kboard-sync.md`
- BR-066 (Docusaurus / publication housing): `docs/project-management/kanban/fr-br/BR-066-ipw-missing-docusaurus-filing-for-planning-artifacts.md`
- Specification and planning artifacts policy: `docs/architecture/standards-and-adrs/specification-and-planning-artifacts-policy.md`
- IPW ADR necessity checklist (FR-100): `docs/architecture/standards-and-adrs/ipw-adr-necessity-checklist.md`
