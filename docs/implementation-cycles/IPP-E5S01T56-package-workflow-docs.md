---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-15T14:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E5:S01:T56 — Planning: Standardize Packaged Workflow Documentation and Instructions

**Host Task:** [`T56-standardize-packaged-workflow-documentation-and-instructions.md`](../docs/project-management/kanban/epics/Epic-5/Story-001-fr-repo/T56-standardize-packaged-workflow-documentation-and-instructions.md) **(E5:S01:T56)**
**Planning for:** [FR-056](../docs/project-management/kanban/fr-br/FR-056-standardize-packaged-workflow-documentation-and-instructions.md)
**Status:** Approved

> **IPW (Implementation Planning Workflow):** Use this template when running **IPW** / **IPW E:S:T**. The **Host Task** link and bidirectional wiring to the task doc **Input** and **References** are **mandatory** before the plan is complete (see project **FR-042** — *Implementation Planning Workflow* in `docs/project-management/kanban/fr-br/`).

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RF1 | All 11 packaged workflows have comprehensive README.md files | FR-056-F1 / AC-1 |
| RF2 | All README files follow the standardized template structure | FR-056-F2 / AC-2 |
| RF3 | All workflows include detailed usage instructions and examples | FR-056-F3 / AC-3 |
| RF4 | All documentation uses consistent formatting and style | FR-056-F4 / AC-4 |
| RF5 | Framework README includes standardized workflow overview with working links | FR-056-F6 / AC-5 |
| RF6 | All cross-references and links are functional | FR-056-NF4 / AC-6 |
| RF7 | Validation script correctly reports section compliance (no false positives) | Derived from audit findings |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RNF1 | All documentation follows consistent markdown formatting | FR-056-NF1 |
| RNF2 | All README files use the same section structure and ordering | FR-056-NF2 |
| RNF3 | All code examples are properly formatted | FR-056-NF3 |
| RNF4 | All documentation is cross-referenced and linked appropriately | FR-056-NF4 |
| RNF5 | All documentation is maintainable and updatable | FR-056-NF5 |

### 1.3 Invariants and boundaries

- **Invariants:**
  - Must not degrade existing README content — fixes should be additive or corrective, not destructive rewrites
  - Must preserve existing agent execution guides under `KB/Documentation/Developer_Docs/vwmp/` — these are separate from per-workflow READMEs
  - Must maintain the 11-workflow count (not 12 as originally claimed in task doc)
- **In scope:**
  - Create `release-workflow/README.md` from canonical template
  - Fix `validate-workflow-docs.py` section-extraction bug (plain-text `## ` headings)
  - Audit all 10 existing READMEs for broken internal links
  - Add missing guide/example files OR remove/fix broken links
  - Update task doc and FR-056 to reflect 11 workflows (not 12)
  - Update framework README if link table has issues
- **Out of scope:**
  - Rewriting existing READMEs from scratch (they are already substantial)
  - Creating external documentation sites or wikis
  - Modifying workflow YAML definitions or behavior
  - Writing new agent execution guides (those exist separately)

---

## 2. Specification

### 2.1 Goal

Deliver a fully validated, consistent set of workflow READMEs across all 11 packaged workflows. Close the only real documentation gap (release-workflow README), eliminate false-positive validation errors by fixing the validator script, and ensure all internal links resolve correctly.

### 2.2 Specification mapping from ascertained requirements

- **RF1 (all READMEs exist)** → Create `packages/frameworks/workflow mgt/workflows/release-workflow/README.md` using the canonical template, populated with release-workflow-specific metadata from `workflow-registry.yaml` and agent execution guides.
- **RF2 (template compliance)** → Run fixed validator on all 11 READMEs; ensure 0 missing-section reports.
- **RF6 (functional links)** → Identify all broken internal links across 10 existing READMEs; either create target files or rewrite links to point to existing resources.
- **RF7 (validator correctness)** → Fix `extract_sections()` regex to strip `## ` prefix from ALL `## ` headings, not just emoji-prefixed ones.

### 2.3 Constraints

- Must reuse the existing `workflow-readme-template.md` — do not create a new template.
- Must preserve existing README content where it is already high-quality (e.g., testing-workflow README is comprehensive).
- Must conform to existing style guide emoji conventions where already used.
- Must not break existing `workflow-registry.yaml` structure.

### 2.4 Status transition intent (mandatory for IPW-derived implementation tasks)

- **Current task status:** COMPLETE
- **Transition trigger to IN PROGRESS:** First file modification (validator fix or release-workflow README creation).
- **Transition trigger to COMPLETE:** Validation script reports 0 errors and 0 warnings; all 11 READMEs exist; task doc and FR-056 updated to reflect 11 workflows.
- **Atomic propagation requirement:** Task doc status and kboard row status must update in the same change set/session.

---

## 3. Test design

This is primarily a documentation task. Tests are structural validation scripts rather than executable unit tests.

| ID | Behavior / layer | Expected check |
| -- | ---------------- | -------------- |
| T1 | Validator correctness | Fixed `validate-workflow-docs.py` run on CMW README reports 0 missing sections (previously falsely flagged `overview`, `configuration`). |
| T2 | Release-workflow README exists | `release-workflow/README.md` exists and validator reports 0 errors for it. |
| T3 | All READMEs pass validation | Full validator run across all 11 workflows reports 0 errors, 0 warnings. |
| T4 | Framework README links | All 11 links in framework README workflow table resolve to existing files. |
| T5 | Registry consistency | `workflow-registry.yaml` lists 11 workflows; each has a `documentation` field or README exists in expected directory. |
| T6 | Link integrity | No broken internal links (`../../../docs/...`, `../../../examples/...`) remain in any workflow README. |

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY] Transition task `E5:S01:T56` status `TODO → IN PROGRESS`** in task document and `kboard.md`. Update `Last updated` date. | Task doc and board `Status` = `IN PROGRESS` |
| **2** | Fix `validate-workflow-docs.py` section-extraction bug. Change `extract_sections()` to strip `## ` prefix from ALL `## ` headings, not just emoji-prefixed ones. | Validator correctly identifies sections in plain-text and emoji headings |
| **3** | Run fixed validator to establish baseline. Record which READMEs have genuine gaps vs. false positives. | Baseline report of real vs. false issues |
| **4** | Create `release-workflow/README.md` using canonical template, populated with RW-specific metadata (triggers: `RW`, `RW -k`, `RW -d`, 17 steps) and references to existing agent execution guides. | New README for release-workflow |
| **5** | Audit and fix broken internal links across all 10 existing READMEs. For links to non-existent `../../../docs/{workflow}-guide.md` and `../../../examples/{workflow}/`, either create minimal stub files OR rewrite links to point to actual existing resources (e.g., agent execution guides under `KB/`). | All internal links resolve |
| **6** | Add any genuinely missing sections to existing READMEs where content is thin (e.g., some may lack Configuration or Integration sections based on validator baseline). | Template compliance improved |
| **7** | Update framework README (`packages/frameworks/workflow mgt/README.md`) if any workflow table links are broken or if text still claims 12 workflows. | Framework README accurate |
| **8** | Update task doc and FR-056: correct "12 workflows" to "11 workflows" everywhere; update current state analysis to reflect existing READMEs. | Documentation reflects reality |
| **9** | Run final validation: fixed validator script + manual link check. Confirm 0 errors, 0 warnings. | Validation passes |
| **N** | **[MANDATORY] Reconcile task `E5:S01:T56` status** to actual implementation state: if all acceptance criteria satisfied with evidence → transition to `COMPLETE` and add forensic marker `✅ COMPLETE (v{version})`; if ongoing → confirm `IN PROGRESS`; if blocked → `BLOCKED` with reason. Update `Last updated`. | Task doc status reflects actual state |

### 4.1 Files to create or modify

- **Create:** `packages/frameworks/workflow mgt/workflows/release-workflow/README.md`
- **Modify:** `packages/frameworks/workflow mgt/scripts/validate-workflow-docs.py` — fix `extract_sections()` regex
- **Modify:** `packages/frameworks/workflow mgt/workflows/*/README.md` (up to 10 files) — fix broken links, add missing sections
- **Modify:** `packages/frameworks/workflow mgt/README.md` — correct workflow count, fix table links if needed
- **Modify:** `docs/project-management/kanban/epics/Epic-5/Story-001-fr-repo/T56-standardize-packaged-workflow-documentation-and-instructions.md` — update scope to reflect 11 workflows and audit-and-fix approach
- **Modify:** `docs/project-management/kanban/fr-br/FR-056-standardize-packaged-workflow-documentation-and-instructions.md` — correct "12 workflows" to "11 workflows"
- **Modify:** `docs/project-management/kanban/kboard.md` — update T56 status

### 4.2 Dependency order

1. Fix validator (Step 2) must happen before audit baseline (Step 3), otherwise false positives obscure real gaps.
2. Baseline (Step 3) must happen before link fixes (Step 5) and section additions (Step 6), to know what's real.
3. Release-workflow README (Step 4) can happen in parallel with Steps 5–6.
4. All README changes (Steps 4–6) must complete before framework README update (Step 7).
5. Documentation updates (Step 8) and final validation (Step 9) happen last.

---

## 5. Success / verification criteria

- [x] `python "packages/frameworks/workflow mgt/scripts/validate-workflow-docs.py"` reports **0 errors, 0 warnings** across all 11 workflows.
- [x] `release-workflow/README.md` exists and passes validation.
- [x] All internal links in all workflow READMEs resolve (no `../../../docs/...` or `../../../examples/...` pointing to non-existent files).
- [x] Framework README correctly states **11 workflows** (not 12) and all table links work.
- [x] FR-056 and task doc updated to reflect 11-workflow reality and audit-and-fix scope.
- [x] `kboard.md` E5:S01:T56 row status is `COMPLETE`.
- [x] Bidirectional links exist: plan doc → task doc, task doc → plan doc.

---

## References

- **Host Task:** `docs/project-management/kanban/epics/Epic-5/Story-001-fr-repo/T56-standardize-packaged-workflow-documentation-and-instructions.md`
- **FR-056:** `docs/project-management/kanban/fr-br/FR-056-standardize-packaged-workflow-documentation-and-instructions.md`
- **Workflow registry:** `packages/frameworks/workflow mgt/workflows/workflow-registry.yaml`
- **Framework README:** `packages/frameworks/workflow mgt/README.md`
- **Canonical template:** `packages/frameworks/workflow mgt/templates/workflow-readme-template.md`
- **Style guide:** `packages/frameworks/workflow mgt/docs/workflow-documentation-style-guide.md`
- **Validator script:** `packages/frameworks/workflow mgt/scripts/validate-workflow-docs.py`
- **Plan doc template:** `packages/frameworks/kanban/templates/PLAN_DOC_TEMPLATE.md`
- **IPW canonical guide:** `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/implementation-planning-workflow-agent-execution.md`
