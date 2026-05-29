---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:01:50Z
expires_at: null
housekeeping_policy: keep
---

# Story 002 – FR/BR Intake to Tasks

**Status:** COMPLETE ✅  
**Priority:** HIGH  
**Estimated Effort:** [TBD]  
**Created:** 2025-12-02  
**Last updated:** 2025-12-10 (v0.4.2.6+3 – All tasks complete: FR/BR/UXR/UAT intake workflow fully implemented)  
**Version:** v0.4.2.6+3
**Code:** E4S02

---

## Overview

Design and implement a clear, actionable flow for converting incoming Feature Requests (FRs) and Bug Reports (BRs) into Kanban Tasks. This story ensures that all work entering the dev-kit is properly structured, tracked, and aligned with the Kanban → Versioning → Release Workflow system.

---

## Goal

Make it easy and systematic to go from an incoming Feature Request or Bug Report to:
- Task(s) under a Story
- Story under an Epic (creating them when missing)
- Proper versioning alignment (`RC.EPIC.STORY.TASK+BUILD`)

This story operationalizes the FR/BR → Task → Story → Epic rule defined in the Kanban governance policy.

---

## Task Checklist

- [x] **E4:S02:T01 – Analyze current FR/BR intake process and requirements** ✅ COMPLETE
- [x] **E4:S02:T02 – Design FR/BR → Task → Story → Epic decision flow** ✅ COMPLETE
- [x] **E4:S02:T03 – Create FR/BR intake templates and forms** ✅ COMPLETE
- [x] **E4:S02:T04 – Document the intake process with examples** ✅ COMPLETE
- [x] **E4:S02:T05 – Create intake workflow guide for agents/users** ✅ COMPLETE
- [x] **E4:S02:T06 – GitHub submission integration for FR, BR, UXR, and UAT Reports** ✅ COMPLETE (v0.4.2.6+3 – Build 3: UAT Report submission lane added)

---

## Tasks

### E4:S02:T01 – Analyze current FR/BR intake process and requirements ✅ COMPLETE

**Input:** Current Kanban governance policy, existing FR/BR examples (if any)  
**Deliverable:** Analysis report documenting current state and requirements ✅ **DELIVERED**  
**Dependencies:** None  
**Blocker:** None

**Status:** ✅ **COMPLETE** - Comprehensive analysis report created

**Approach:**
1. ✅ Reviewed Kanban governance policy FR/BR rules
2. ✅ Identified current gaps in the intake process
3. ✅ Documented requirements for an effective intake flow
4. ✅ Identified stakeholders and use cases

**Key Findings:**
- ✅ Policy exists: FR/BR → Task → Story → Epic flow is defined
- ❌ Process gap: No systematic intake process or templates exist
- ❌ Documentation gap: No step-by-step guide for converting FRs/BRs to Tasks
- ❌ Tooling gap: No templates or forms for FR/BR intake

**Files Created:**
- ✅ `docs/project-management/kanban/Story-002-fr-br-intake-to-tasks/T01-intake-analysis-report.md` (comprehensive analysis)

**Deliverable:** See [`T01-intake-analysis-report.md`](Story-002-fr-br-intake-to-tasks/T01-intake-analysis-report.md) for complete analysis, requirements, use cases, and recommendations.

---

### E4:S02:T02 – Design FR/BR → Task → Story → Epic decision flow ✅ COMPLETE

**Input:** Analysis report from T001  
**Deliverable:** Decision flow diagram and process documentation ✅ **DELIVERED**  
**Dependencies:** E4:S02:T01  
**Blocker:** None

**Status:** ✅ **COMPLETE** - Comprehensive decision flow design created

**Approach:**
1. ✅ Designed decision tree/flowchart for FR/BR intake
2. ✅ Defined criteria for Story matching (scope, Epic alignment, status)
3. ✅ Defined criteria for Epic matching/creation (domain, status, conceptual fit)
4. ✅ Documented edge cases and exceptions (complex FR, ambiguous scope, duplicates, etc.)

**Key Deliverables:**
- ✅ Text-based decision flow diagram (high-level and detailed)
- ✅ Story matching criteria (primary and secondary)
- ✅ Epic matching criteria (primary and secondary)
- ✅ Epic creation guidelines (broad, abstract, examples)
- ✅ Edge case handling (complex FR, ambiguous scope, BR affecting multiple components, etc.)
- ✅ Versioning integration rules
- ✅ Kanban board integration rules
- ✅ Visual decision flow diagram (text-based flowchart)
- ✅ Decision criteria summary table
- ✅ Worked examples (4 scenarios)

**Files Created:**
- ✅ `docs/project-management/kanban/Story-002-fr-br-intake-to-tasks/T02-decision-flow-design.md` (comprehensive design)

**Deliverable:** See [`T02-decision-flow-design.md`](Story-002-fr-br-intake-to-tasks/T02-decision-flow-design.md) for complete decision flow, criteria, edge cases, and examples.

---

### E4:S02:T03 – Create FR/BR intake templates and forms ✅ COMPLETE

**Input:** Decision flow from T002  
**Deliverable:** Templates and forms for FR/BR intake ✅ **DELIVERED**  
**Dependencies:** E4:S02:T02  
**Blocker:** None

**Status:** ✅ **COMPLETE** - FR and BR templates created

**Approach:**
1. ✅ Created FR template/form (`FR_TEMPLATE.md`)
2. ✅ Created BR template/form (`BR_TEMPLATE.md`)
3. ✅ Aligned templates with Kanban templates (EPIC_TEMPLATE, STORY_TEMPLATE)
4. ✅ Included intake decision tracking section
5. ✅ Added versioning and Kanban integration fields

**Key Features:**

**FR Template:**
- Summary and description sections
- Requirements (functional and non-functional)
- Scope analysis (problem domain, affected areas, complexity)
- Use cases
- Acceptance criteria
- Dependencies and related work
- **Intake Decision section** (tracks FR → Task → Story → Epic conversion)
- Kanban links for traceability

**BR Template:**
- Summary and description sections
- Affected component identification
- Steps to reproduce
- Environment details
- Impact assessment (user and business)
- Workaround documentation
- Acceptance criteria (fix requirements)
- **Fix verification status** (aligned with RW verification requirements)
- **Intake Decision section** (tracks BR → Task → Story → Epic conversion)
- Kanban links for traceability

**Template Alignment:**
- Both templates align with EPIC_TEMPLATE and STORY_TEMPLATE structure
- Include intake decision tracking for FR/BR → Task → Story → Epic flow
- Support versioning integration (`RC.EPIC.STORY.TASK+BUILD`)
- Include Kanban links for traceability
- BR template includes fix verification status (aligned with RW requirements)

**Files Created:**
- ✅ `packages/frameworks/kanban/templates/FR_TEMPLATE.md` (Feature Request template)
- ✅ `packages/frameworks/kanban/templates/BR_TEMPLATE.md` (Bug Report template)

**Deliverable:** FR and BR templates are ready for use. Templates include all necessary fields for intake processing and align with the decision flow design from T002.

---

### E4:S02:T04 – Document the intake process with examples ✅ COMPLETE

**Input:** Templates from T003, decision flow from T002  
**Deliverable:** Complete intake process documentation with worked examples ✅ **DELIVERED**  
**Dependencies:** E4:S02:T03  
**Blocker:** None

**Status:** ✅ **COMPLETE** - Comprehensive intake process guide with 6 worked examples created

**Approach:**
1. ✅ Wrote step-by-step intake process guide
2. ✅ Created worked examples for common scenarios:
   - ✅ FR that fits existing Story (Example 1)
   - ✅ FR that needs new Story (existing Epic) (Example 2)
   - ✅ FR that needs new Epic (Example 3)
   - ✅ BR that fits existing Story (Example 4)
   - ✅ BR that needs new Story (Example 5)
   - ✅ Complex FR requiring multiple Tasks (Example 6)
3. ✅ Documented integration with versioning and RW

**Key Features:**

**Intake Process Guide:**
- Step-by-step process (8 steps)
- High-level flow diagram
- Detailed instructions for each step
- Decision criteria for Story/Epic matching
- Version assignment rules
- Kanban board update procedures
- FR/BR to Task linking procedures

**Worked Examples:**
- **Example 1:** FR matching existing Story (dark mode toggle)
- **Example 2:** FR requiring new Story under existing Epic (user profile picture upload)
- **Example 3:** FR requiring new Epic (real-time collaboration)
- **Example 4:** BR matching existing Story (dark mode persistence bug)
- **Example 5:** BR requiring new Story (profile picture upload bug)
- **Example 6:** Complex FR requiring multiple Tasks (OAuth authentication)

**Integration Documentation:**
- Kanban integration (templates, board updates, status synchronization)
- Versioning integration (schema, assignment, canonical ordering)
- Release Workflow integration (Task completion, changelog updates, fix verification)

**Additional Sections:**
- Troubleshooting guide (common issues and solutions)
- Quick reference (decision flow, version numbers, templates, key documents)
- Next steps after intake completion

**Files Created:**
- ✅ `packages/frameworks/kanban/FR_BR_INTAKE_GUIDE.md` (comprehensive intake process guide with 6 worked examples)

**Deliverable:** Complete intake process documentation with step-by-step instructions and 6 detailed worked examples covering all common scenarios. The guide includes integration points, troubleshooting, and quick reference sections.

---

### E4:S02:T05 – Create intake workflow guide for agents/users ✅ COMPLETE

**Input:** Process documentation from T004  
**Deliverable:** User-friendly guide for AI agents and human users ✅ **DELIVERED**  
**Dependencies:** E4:S02:T04  
**Blocker:** None

**Status:** ✅ **COMPLETE** - Agent-friendly and user-friendly guides created with quick reference

**Approach:**
1. ✅ Created agent-friendly guide (for AI assistants)
2. ✅ Created user-friendly guide (for human users)
3. ✅ Included quick reference/cheat sheet
4. ✅ Added troubleshooting sections

**Key Features:**

**Agent Guide (`FR_BR_INTAKE_AGENT_GUIDE.md`):**
- Structured, executable workflow optimized for programmatic execution
- Quick decision tree for fast reference
- Phase-based execution workflow (4 phases: Document Creation, Story Matching, Task Creation, Epic/Story Creation)
- Explicit step-by-step instructions for each phase
- Validation checklist for post-intake verification
- Error handling guidelines
- Quick reference section

**User Guide (`FR_BR_INTAKE_USER_GUIDE.md`):**
- Conversational, accessible tone for human users
- Clear visual flow diagrams
- Step-by-step instructions with examples
- Common scenarios with real-world examples
- Tips for writing good FRs/BRs
- Troubleshooting section
- Quick reference section

**Quick Reference (`FR_BR_INTAKE_QUICK_REFERENCE.md`):**
- Decision flow diagram
- Version format reference
- Template locations
- File location reference
- Story/Epic match criteria
- Epic creation rule
- Validation checklist
- Guide references

**Key Sections:**

**Agent Guide Sections:**
1. Quick Decision Tree
2. Execution Workflow (4 phases with detailed steps)
3. Validation Checklist
4. Error Handling
5. Quick Reference

**User Guide Sections:**
1. Welcome and Overview
2. Step-by-Step Process
3. Tracking Your Request
4. Common Scenarios (3 examples)
5. Tips for Success
6. Troubleshooting
7. Quick Reference

**Quick Reference Sections:**
1. Decision Flow
2. Version Format
3. Templates
4. File Locations
5. Match Criteria
6. Epic Creation Rule
7. Validation Checklist
8. Guide References

**Files Created:**
- ✅ `packages/frameworks/kanban/FR_BR_INTAKE_AGENT_GUIDE.md` (agent-friendly guide)
- ✅ `packages/frameworks/kanban/FR_BR_INTAKE_USER_GUIDE.md` (user-friendly guide)
- ✅ `packages/frameworks/kanban/FR_BR_INTAKE_QUICK_REFERENCE.md` (quick reference/cheat sheet)

**Deliverable:** Complete set of intake workflow guides tailored for different audiences. Agent guide provides structured, executable workflow for AI assistants. User guide provides conversational, accessible instructions for human users. Quick reference provides at-a-glance information for both audiences.

---

### E4:S02:T06 – GitHub submission integration for FR, BR, and UXR

**Input:**  
- Feature Request FR-004: GitHub submission for FR, BR, and UXR
- Need for external contributors to submit via GitHub
- Need for automated evaluation methods to submit programmatically

**Deliverable:**  
- GitHub Issue templates for BR, FR, and UXR submissions
- GitHub Action or script to convert GitHub Issues to FR/BR/UXR documents
- Automatic creation of Kanban tasks from GitHub submissions
- Bidirectional linking between GitHub Issues and FR/BR documents
- Documentation for external contributors

**Dependencies:** E4:S02:T01-T05 (foundation intake workflow)  
**Blocker:** None

**Problem Statement:**
External contributors, automated evaluation methods, UX researchers, and projects conducting UAT need a way to submit Bug Reports (BR), Feature Requests (FR), User Experience Research reports (UXR), or User Acceptance Testing (UAT) reports via GitHub, rather than requiring manual creation of FR/BR/UXR/FB documents in the repository. This will improve accessibility, enable automation, and streamline the intake process. UAT reports require empirical evidence (test results, not opinions).

**Approach:**
1. **Create GitHub Issue Templates:**
   - Bug Report template (aligned with BR_TEMPLATE.md)
   - Feature Request template (aligned with FR_TEMPLATE.md)
   - UXR template (new template for User Experience Research reports)
   - UAT Report template (FB_TEMPLATE.md - requires empirical evidence)
   - Use GitHub Issue Forms for structured submissions

2. **Implement Conversion Mechanism:**
   - GitHub Action or script to monitor new Issues
   - Parse GitHub Issue content and metadata
   - Convert to FR/BR/UXR/FB document format
   - Create document in appropriate location (`docs/project-management/kanban/fr-br/`)

3. **Integrate with Intake Workflow:**
   - Automatically trigger FR/BR intake process
   - Create Kanban task using existing intake workflow
   - Link GitHub Issue to FR/BR document
   - Update GitHub Issue with Kanban task reference

4. **Add Bidirectional Linking:**
   - Link GitHub Issue in FR/BR document
   - Link FR/BR document in GitHub Issue
   - Sync status updates between GitHub and Kanban

5. **Documentation:**
   - Create guide for external contributors
   - Document GitHub submission process
   - Provide examples and best practices

**Acceptance Criteria:**
- [x] GitHub Issue templates created for BR, FR, UXR, and UAT Reports ✅
- [x] GitHub Action or script converts Issues to FR/BR/UXR/FB documents ✅
- [x] Automatic creation of Kanban tasks from GitHub submissions ✅ (via intake workflow)
- [x] Bidirectional linking between GitHub Issues and FR/BR/UXR/FB documents ✅
- [x] Integration with existing FR/BR intake workflow ✅
- [x] Documentation for external contributors ✅
- [x] Validation and error handling for malformed submissions ✅ (basic validation in workflow)
- [x] Support for GitHub Issue Forms ✅
- [x] UAT Report scope tightened to require empirical evidence ✅ (Build 3)

**Files to Create/Update:**
- `.github/ISSUE_TEMPLATE/bug_report.yml` (GitHub Issue Form)
- `.github/ISSUE_TEMPLATE/feature_request.yml` (GitHub Issue Form)
- `.github/ISSUE_TEMPLATE/ux_research.yml` (GitHub Issue Form)
- `.github/ISSUE_TEMPLATE/feedback.yml` (GitHub Issue Form for UAT Reports)
- `.github/workflows/fr-br-intake.yml.DISABLED` (reference YAML; intake GH Action disabled — BR-053 / E2:S11:T12)
- `packages/frameworks/kanban/templates/UXR_TEMPLATE.md` (UXR template)
- `packages/frameworks/kanban/templates/FB_TEMPLATE.md` (UAT Report template)
- `packages/frameworks/kanban/FR_BR_UXR_FB_GITHUB_SUBMISSION_GUIDE.md` (documentation)

**Related:**
- FR-004: GitHub submission for FR, BR, and UXR
- Epic 4 Story 2: FR/BR Intake to Tasks (foundation workflow)

---

## Acceptance Criteria

- [ ] Clear decision flow exists for FR/BR → Task → Story → Epic
- [ ] Templates exist for FR, BR, Story creation, Epic creation
- [ ] Process is documented with worked examples
- [ ] Guides exist for both agents and users
- [ ] Process integrates with versioning (`RC.EPIC.STORY.TASK+BUILD`)
- [ ] Process integrates with Release Workflow

---

## Dependencies

**Coordinates With:**
- Epic 2: Workflow Management Framework (for RW integration)
- Epic 3: Numbering & Versioning Framework (for versioning alignment)
- Epic 1: AI Dev Kit Core (for core policies)

---

## References

- `packages/frameworks/kanban/policies/kanban-governance-policy.md` (FR/BR rules)
- `docs/project-management/rituals/policy/kanban-governance-policy.md` (dev-kit implementation)
- `packages/frameworks/kanban/templates/EPIC_TEMPLATE.md`
- `packages/frameworks/kanban/templates/STORY_TEMPLATE.md`

---

_Last updated: 2025-12-10 (v0.4.2.6+3 – Task 6 build 3: UAT Report submission lane added, scope tightened to require empirical evidence)_

