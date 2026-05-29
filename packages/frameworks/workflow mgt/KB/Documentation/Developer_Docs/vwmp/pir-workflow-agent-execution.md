---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-16T17:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Post-Implementation Review (PIR) Workflow: Agent Execution Guide

**Version:** 1.0.0
**Last Updated:** 2025-12-16
**Related:** Epic 2, Story 5 - Post-Implementation Review Workflow

---

## 📜 Version History

**Current Version:** 1.0.0 (2025-12-16)
- **Initial:** Complete agent execution guide for PIR workflow
- **Steps:** 16 steps organized into 5 phases
- **Related:** E2:S05:T05 - Create PIR agent execution guide

---

## 📖 Overview

This document provides a **step-by-step agent execution guide** for the Post-Implementation Review (PIR) Workflow. The PIR workflow enables systematic review of completed Epics and Stories, capturing lessons learned, identifying improvements, and ensuring quality standards are met.

**This guide shows exactly how an AI agent should analyze, determine, execute, validate, and proceed through each of the 16 PIR workflow steps for both Epic-level and Story-level reviews.**

> **Note:** PIR workflow supports both Epic-level and Story-level reviews. Story-level reviews include an additional significance evaluation step. This guide covers both scenarios.

---

## 🎯 Execution Context

### Workflow Definition

**Workflow:** Post-Implementation Review (PIR)
**Type:** `review`
**Steps:** 16 steps organized into 5 phases
**Review Levels:** Epic-level (always) and Story-level (selective, based on significance)
**Canonical Example:** Yes - this workflow demonstrates the agent-driven execution pattern

### Agent Execution Pattern

For each step, the agent follows this pattern:
1. **ANALYZE** - Understand step requirements and context
2. **DETERMINE** - Decide what actions to take
3. **EXECUTE** - Perform the actions
4. **VALIDATE** - Verify execution succeeded
5. **PROCEED** - Document and move to next step

### 🚨 MANDATORY: Progress Tracking with Cursor TODOs

**REQUIRED:** Agents **MUST** use `todo_write` to create and maintain a TODO list tracking all PIR workflow steps. This is **NOT OPTIONAL** - it is a mandatory requirement for PIR workflow execution.

**Why TODOs are Required:**
- ✅ **User Visibility:** User can see real-time progress through all steps
- ✅ **Agent Organization:** Helps agent stay organized across sequential steps
- ✅ **Error Recovery:** Clear visibility into where execution stopped if interrupted
- ✅ **User Transparency:** User can verify all steps completed successfully
- ✅ **Status Management:** Automatic status updates provide clear execution state
- ✅ **Accountability:** Provides audit trail of workflow execution

**Required Implementation Pattern:**

1. **At Workflow Start (MANDATORY):** Create TODO list with all 16 steps as `pending`
2. **Before Each Step:** Mark step as `in_progress`
3. **After Each Step:** Mark step as `completed` (or `cancelled` if failed)
4. **At Workflow End:** All steps should be `completed` or `cancelled`

---

## 🔄 Workflow Phases

The PIR workflow consists of 5 phases:

1. **Phase 1: Preparation** (Steps 1-4) - Identify scope, gather materials, prepare checklist
2. **Phase 2: Analysis** (Steps 5-8) - Review work items, analyze goals, review technical
3. **Phase 3: Reflection** (Steps 9) - Identify lessons learned, patterns, anti-patterns
4. **Phase 4: Documentation** (Steps 10-13) - Create report, update docs/Kanban, create tasks
5. **Phase 5: Integration** (Steps 14-16) - Link work items, archive materials, optional approval

---

## 📋 Step-by-Step Execution Guide

### Step 1: Identify Review Scope

**Step ID:** `step-1`  
**Type:** `scope_identification`  
**Handler:** `pir.identify_scope`  
**Required:** Yes  
**Mandatory:** Yes  
**Blocking:** Yes  
**Dependencies:** None

#### A. ANALYZE

**A.1. Understand Step Requirements:**
- Determine if review is Epic-level or Story-level
- Read workflow configuration (`review_level`, `epic_pir_always`)
- Check if triggered from RW (Epic/Story COMPLETE status)

**A.2. Gather Context:**
- Read Epic/Story document to identify review target
- Check Epic/Story status (must be COMPLETE)
- Identify Epic number or Story number
- Determine review level (Epic vs Story)

**A.3. Check Prerequisites:**
- Epic/Story document exists
- Epic/Story status is COMPLETE
- Workflow configuration is valid

#### B. DETERMINE

**B.1. Determine Review Level:**
- **Epic-level:** If Epic is COMPLETE and `epic_pir_always: true`
- **Story-level:** If Story is COMPLETE (significance evaluation in Step 2)

**B.2. Determine Actions:**
- Identify Epic number or Story number
- Read Epic/Story document
- Verify COMPLETE status
- Set review scope context

#### C. EXECUTE

**C.1. Read Epic/Story Document:**
```bash
# Epic-level example
Epic document: docs/project-management/kanban/epics/Epic-{N}/Epic-{N}.md

# Story-level example
Story document: docs/project-management/kanban/epics/Epic-{N}/Story-{N}-{name}.md
```

**C.2. Verify Status:**
- Check status field in document
- Verify status is "COMPLETE" or "COMPLETE ✅"
- If not COMPLETE, workflow should not proceed

**C.3. Set Review Scope:**
- Store Epic number or Story number
- Store Epic/Story name
- Store review level (epic/story)
- Store parent Epic (for Story-level)

#### D. VALIDATE

**D.1. Validation Checks:**
- ✅ Epic/Story document exists and is readable
- ✅ Status is COMPLETE
- ✅ Epic/Story number identified
- ✅ Review level determined

**D.2. Error Handling:**
- If Epic/Story not found: **BLOCK** workflow, report error
- If status not COMPLETE: **BLOCK** workflow, report error
- If review level unclear: **BLOCK** workflow, request clarification

#### E. PROCEED

**E.1. Document Step Completion:**
- Review scope identified: Epic {N} or Story {N}
- Review level: epic/story
- Status: COMPLETE verified

**E.2. Move to Next Step:**
- Epic-level: Proceed to Step 2 (Gather Review Materials)
- Story-level: Proceed to Step 2 (Evaluate Story Significance)

---

### Step 2: Evaluate Story Significance (Story-Level Only)

**Step ID:** `step-2`  
**Type:** `significance_evaluation`  
**Handler:** `pir.evaluate_significance`  
**Required:** No (only for Story-level)  
**Enabled:** Yes (conditional on review level)  
**Dependencies:** Step 1

**Note:** This step only executes for Story-level reviews. Epic-level reviews skip to Step 3.

#### A. ANALYZE

**A.1. Understand Step Requirements:**
- Evaluate Story against significance criteria
- Determine if Story warrants PIR
- Apply High/Medium/Low significance classification

**A.2. Gather Context:**
- Read Story document
- Review Story goals, tasks, complexity
- Check significance criteria from workflow config

**A.3. Significance Criteria:**
- **High Significance (Mandatory PIR):**
  - Introduces new architectural patterns
  - Affects multiple systems/components
  - Includes significant technical debt/refactoring
  - High business impact/user visibility
  - Complex integration/migration work
  - Duration > threshold (e.g., >2 weeks)
  - Multiple dependencies/blockers

- **Medium Significance (Optional PIR):**
  - Introduces new tools/frameworks
  - Documentation/process changes
  - Moderate complexity/scope
  - Cross-team coordination

- **Low Significance (No PIR):**
  - Simple bug fixes/minor enhancements
  - Routine maintenance
  - Documentation-only changes
  - Small, isolated features

#### B. DETERMINE

**B.1. Evaluate Against Criteria:**
- Check each High Significance criterion
- Count matches
- Determine significance level

**B.2. Make Decision:**
- **High Significance:** Proceed with PIR
- **Medium Significance:** Optional (check config)
- **Low Significance:** Skip PIR, terminate workflow

#### C. EXECUTE

**C.1. Evaluate Criteria:**
- Read Story document
- Check each significance criterion
- Count matches
- Classify significance level

**C.2. Document Decision:**
- Record significance evaluation
- Document rationale
- Update Story document if needed

#### D. VALIDATE

**D.1. Validation Checks:**
- ✅ Significance criteria evaluated
- ✅ Decision made (Proceed/Skip/Optional)
- ✅ Rationale documented

**D.2. Error Handling:**
- If significance unclear: Use conservative approach (proceed with PIR)
- If criteria evaluation fails: Default to Medium Significance

#### E. PROCEED

**E.1. Document Step Completion:**
- Significance level: High/Medium/Low
- Decision: Proceed/Skip/Optional
- Rationale: {Brief explanation}

**E.2. Move to Next Step:**
- If Proceed: Continue to Step 3 (Gather Review Materials)
- If Skip: Terminate workflow, document skip reason

---

### Step 3: Gather Review Materials

**Step ID:** `step-3`  
**Type:** `material_gathering`  
**Handler:** `pir.gather_materials`  
**Required:** Yes  
**Dependencies:** Step 1 (and Step 2 for Story-level)

#### A. ANALYZE

**A.1. Understand Step Requirements:**
- Collect all materials needed for comprehensive review
- Gather Epic/Story documents, Task documents, changelogs
- Collect related BR/FR documents, code changes, documentation

**A.2. Determine Materials Needed:**

**For Epic-Level:**
- Epic document
- All Story documents within Epic
- All Task documents within Stories
- Changelog entries for Epic version range
- Related BR/FR documents
- Architecture decision records
- Documentation created/updated

**For Story-Level:**
- Story document
- All Task documents within Story
- Changelog entries for Story version
- Related BR/FR documents
- Code changes (if applicable)
- Documentation created/updated
- Test results (if applicable)

#### B. DETERMINE

**B.1. Identify Material Locations:**
- Epic/Story document path
- Task document paths
- Changelog location
- BR/FR document paths
- Documentation paths

**B.2. Determine Collection Strategy:**
- Read all identified documents
- Extract relevant information
- Organize materials by category

#### C. EXECUTE

**C.1. Read Epic/Story Document:**
```bash
# Epic-level
Epic: docs/project-management/kanban/epics/Epic-{N}/Epic-{N}.md

# Story-level
Story: docs/project-management/kanban/epics/Epic-{N}/Story-{N}-{name}.md
```

**C.2. Read Story/Task Documents:**
```bash
# For Epic-level: Read all Stories
Stories: docs/project-management/kanban/epics/Epic-{N}/Story-*.md

# For Story-level: Read all Tasks
Tasks: docs/project-management/kanban/epics/Epic-{N}/Story-{N}-*/Task-*.md
```

**C.3. Read Changelog Entries:**
```bash
# Read changelog entries for version range
CHANGELOG.md (main changelog)
docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v{version}.md
```

**C.4. Read Related Documents:**
- BR/FR documents referenced in Epic/Story
- Architecture decision records
- Documentation created/updated

#### D. VALIDATE

**D.1. Validation Checks:**
- ✅ Epic/Story document read successfully
- ✅ All Story/Task documents found and read
- ✅ Changelog entries found for version range
- ✅ Related documents identified

**D.2. Error Handling:**
- If document missing: Log warning, continue with available materials
- If changelog entry missing: Log warning, continue
- If critical document missing: **BLOCK** workflow, report error

#### E. PROCEED

**E.1. Document Step Completion:**
- Materials gathered: {Count} documents
- Epic/Story document: ✅
- Story/Task documents: ✅ ({Count})
- Changelog entries: ✅ ({Count})
- Related documents: ✅ ({Count})

**E.2. Move to Next Step:**
- Proceed to Step 4 (Prepare Review Checklist)

---

### Step 4: Prepare Review Checklist

**Step ID:** `step-4`  
**Type:** `checklist_preparation`  
**Handler:** `pir.prepare_checklist`  
**Required:** Yes  
**Dependencies:** Step 3

#### A. ANALYZE

**A.1. Understand Step Requirements:**
- Create structured checklist based on PIR template
- Populate checklist with Epic/Story context
- Prepare for review execution

**A.2. Identify Template:**
- Epic-level: `docs/documentation/templates/epic-pir-template.md`
- Story-level: `docs/documentation/templates/story-pir-template.md`

#### B. DETERMINE

**B.1. Determine Checklist Sections:**
- Goals assessment
- Stories/Tasks review
- Technical assessment
- Documentation assessment
- Lessons learned identification
- Patterns and anti-patterns identification
- Follow-up actions identification

**B.2. Populate Context:**
- Epic/Story number and name
- Version range
- Review date
- Reviewer information

#### C. EXECUTE

**C.1. Load Template:**
```bash
# Epic-level
Template: docs/documentation/templates/epic-pir-template.md

# Story-level
Template: docs/documentation/templates/story-pir-template.md
```

**C.2. Populate Template:**
- Replace placeholders with Epic/Story context
- Fill in metadata (Epic/Story name, version, date)
- Initialize checklist sections

**C.3. Create Checklist:**
- Create checklist structure
- Mark all items as pending
- Ready for review execution

#### D. VALIDATE

**D.1. Validation Checks:**
- ✅ Template loaded successfully
- ✅ All placeholders replaced
- ✅ Checklist structure complete
- ✅ All sections initialized

**D.2. Error Handling:**
- If template missing: **BLOCK** workflow, report error
- If template invalid: **BLOCK** workflow, report error

#### E. PROCEED

**E.1. Document Step Completion:**
- Checklist prepared: ✅
- Template: {Template name}
- Sections initialized: {Count}

**E.2. Move to Next Step:**
- Proceed to Step 5 (Review Completed Work Items)

---

### Step 5: Review Completed Work Items

**Step ID:** `step-5`  
**Type:** `work_review`  
**Handler:** `pir.review_work_items`  
**Required:** Yes  
**Dependencies:** Step 4

#### A. ANALYZE

**A.1. Understand Step Requirements:**
- Review all Stories (Epic-level) or Tasks (Story-level)
- Assess completion status and quality
- Document findings for each work item

**A.2. For Epic-Level:**
- Review each Story within Epic
- Assess Story goals, tasks, quality
- Document Story-by-Story findings

**A.3. For Story-Level:**
- Review each Task within Story
- Assess Task completion, deliverables, quality
- Document Task-by-Task findings

#### B. DETERMINE

**B.1. Determine Review Approach:**
- For each Story/Task:
  - Read Story/Task document
  - Assess goal achievement
  - Evaluate quality
  - Identify notable achievements
  - Document issues encountered

**B.2. Quality Assessment Criteria:**
- **Excellent:** All goals achieved, high quality, minimal issues
- **Good:** Most goals achieved, good quality, minor issues
- **Satisfactory:** Goals partially achieved, acceptable quality, some issues
- **Needs Improvement:** Goals not achieved, low quality, significant issues

#### C. EXECUTE

**C.1. For Epic-Level - Review Each Story:**
```markdown
### Story {N}: {Story Name}
- **Status:** COMPLETE
- **Version:** {Version}
- **Goals Achieved:** {Yes/No/Partial}
- **Quality:** {Excellent/Good/Satisfactory/Needs Improvement}
- **Key Findings:** {Summary}
- **Tasks Completed:** {Count} / {Total}
- **Notable Achievements:** {List}
- **Issues Encountered:** {List}
```

**C.2. For Story-Level - Review Each Task:**
```markdown
### Task {N}: {Task Name}
- **Status:** COMPLETE
- **Version:** {Version}
- **Quality:** {Excellent/Good/Satisfactory/Needs Improvement}
- **Key Findings:** {Summary}
- **Deliverables:** {List}
- **Issues Encountered:** {List}
```

**C.3. Document Findings:**
- Update checklist with findings
- Document quality assessments
- Record achievements and issues

#### D. VALIDATE

**D.1. Validation Checks:**
- ✅ All Stories/Tasks reviewed
- ✅ Quality assessments completed
- ✅ Findings documented
- ✅ Checklist updated

**D.2. Error Handling:**
- If Story/Task document missing: Log warning, mark as "Document Missing"
- If quality unclear: Use conservative assessment

#### E. PROCEED

**E.1. Document Step Completion:**
- Stories/Tasks reviewed: {Count}
- Quality assessments: {Count} completed
- Findings documented: ✅

**E.2. Move to Next Step:**
- Proceed to Step 6 (Analyze Goals vs Outcomes)

---

### Step 6: Analyze Goals vs Outcomes

**Step ID:** `step-6`  
**Type:** `goals_analysis`  
**Handler:** `pir.analyze_goals`  
**Required:** Yes  
**Dependencies:** Step 5

#### A. ANALYZE

**A.1. Understand Step Requirements:**
- Compare Epic/Story goals with actual outcomes
- Assess goal achievement status
- Document evidence and metrics

**A.2. Gather Goals:**
- Read Epic/Story goals from document
- Identify acceptance criteria
- Understand intended outcomes

**A.3. Gather Outcomes:**
- Review completed work items
- Assess actual achievements
- Collect evidence and metrics

#### B. DETERMINE

**B.1. Determine Assessment Approach:**
- For each goal:
  - Compare goal with actual outcome
  - Assess achievement status (Achieved/Partially Achieved/Not Achieved)
  - Document evidence
  - Provide assessment rationale

**B.2. Assessment Criteria:**
- **Achieved:** Goal met, acceptance criteria satisfied, evidence supports
- **Partially Achieved:** Some goals met, some criteria satisfied, partial evidence
- **Not Achieved:** Goals not met, criteria not satisfied, insufficient evidence

#### C. EXECUTE

**C.1. Analyze Each Goal:**
```markdown
- [ ] **Goal 1:** {Goal Description}
  - **Status:** {Achieved/Partially Achieved/Not Achieved}
  - **Assessment:** {Detailed assessment}
  - **Evidence:** {Supporting evidence or metrics}
```

**C.2. Document Overall Assessment:**
- Overall Epic/Story goal achievement
- Summary of goal statuses
- Key evidence and metrics

#### D. VALIDATE

**D.1. Validation Checks:**
- ✅ All goals analyzed
- ✅ Status assigned to each goal
- ✅ Evidence documented
- ✅ Overall assessment completed

**D.2. Error Handling:**
- If goal unclear: Mark as "Needs Clarification"
- If evidence insufficient: Mark as "Partial Evidence"

#### E. PROCEED

**E.1. Document Step Completion:**
- Goals analyzed: {Count}
- Assessment completed: ✅
- Evidence documented: ✅

**E.2. Move to Next Step:**
- Proceed to Step 7 (Review Technical Implementation)

---

### Step 7: Review Technical Implementation

**Step ID:** `step-7`  
**Type:** `technical_review`  
**Handler:** `pir.review_technical`  
**Required:** Yes  
**Dependencies:** Step 5

#### A. ANALYZE

**A.1. Understand Step Requirements:**
- Evaluate technical decisions, code quality, architecture
- Assess documentation completeness
- Review testing coverage and quality

**A.2. Technical Assessment Areas:**

**For Epic-Level:**
- Architecture decisions
- Code quality
- Documentation
- Testing

**For Story-Level:**
- Implementation approach
- Code quality
- Documentation
- Testing

#### B. DETERMINE

**B.1. Determine Assessment Approach:**
- Review architecture decisions and rationale
- Assess code quality (overall, review coverage, technical debt)
- Evaluate documentation (completeness, quality, gaps)
- Review testing (coverage, quality, types, results)

#### C. EXECUTE

**C.1. Review Architecture Decisions (Epic-Level):**
```markdown
### Architecture Decisions
- **Decision 1:** {Description}
  - **Rationale:** {Why this decision was made}
  - **Impact:** {Impact on project}
```

**C.2. Review Implementation Approach (Story-Level):**
```markdown
### Implementation Approach
- **Approach:** {Description}
- **Rationale:** {Why this approach was chosen}
- **Alternatives Considered:** {Other approaches}
```

**C.3. Assess Code Quality:**
```markdown
### Code Quality
- **Overall Assessment:** {Excellent/Good/Satisfactory/Needs Improvement}
- **Code Review Coverage:** {Percentage or description}
- **Technical Debt Introduced:** {Description}
- **Code Quality Metrics:** {Any metrics available}
```

**C.4. Assess Documentation:**
```markdown
### Documentation
- **Completeness:** {Excellent/Good/Satisfactory/Needs Improvement}
- **Documentation Created:** {List key documents}
- **Documentation Gaps:** {Any gaps identified}
- **Documentation Quality:** {Assessment}
```

**C.5. Review Testing:**
```markdown
### Testing
- **Test Coverage:** {Percentage or description}
- **Test Quality:** {Excellent/Good/Satisfactory/Needs Improvement}
- **Test Types:** {Unit/Integration/E2E/etc.}
- **Test Results:** {Summary of test outcomes}
```

#### D. VALIDATE

**D.1. Validation Checks:**
- ✅ Technical assessment completed
- ✅ All areas reviewed
- ✅ Assessments documented

**D.2. Error Handling:**
- If technical details unavailable: Mark as "Limited Technical Information"
- If assessment unclear: Use conservative assessment

#### E. PROCEED

**E.1. Document Step Completion:**
- Technical assessment: ✅
- Architecture/Implementation: ✅
- Code quality: ✅
- Documentation: ✅
- Testing: ✅

**E.2. Move to Next Step:**
- Proceed to Step 8 (Assess Documentation Quality)

---

### Step 8: Assess Documentation Quality

**Step ID:** `step-8`  
**Type:** `documentation_assessment`  
**Handler:** `pir.assess_documentation`  
**Required:** Yes  
**Dependencies:** Step 7

#### A. ANALYZE

**A.1. Understand Step Requirements:**
- Assess documentation completeness and quality
- Identify documentation gaps
- Evaluate documentation effectiveness

**A.2. Documentation Areas:**
- Epic/Story documentation
- Task documentation
- Technical documentation
- User documentation
- Process documentation

#### B. DETERMINE

**B.1. Determine Assessment Approach:**
- Review all documentation created/updated
- Assess completeness (all required docs present)
- Evaluate quality (clarity, accuracy, usefulness)
- Identify gaps (missing or incomplete docs)

#### C. EXECUTE

**C.1. Review Documentation:**
- List all documentation created/updated
- Assess each document for completeness
- Evaluate quality
- Identify gaps

**C.2. Document Assessment:**
```markdown
### Documentation Assessment
- **Completeness:** {Excellent/Good/Satisfactory/Needs Improvement}
- **Documentation Created:** {List}
- **Documentation Gaps:** {List}
- **Documentation Quality:** {Assessment}
```

#### D. VALIDATE

**D.1. Validation Checks:**
- ✅ Documentation assessment completed
- ✅ Completeness evaluated
- ✅ Gaps identified

#### E. PROCEED

**E.1. Document Step Completion:**
- Documentation assessment: ✅
- Completeness: ✅
- Gaps identified: ✅

**E.2. Move to Next Step:**
- Proceed to Step 9 (Identify Lessons Learned)

---

### Step 9: Identify Lessons Learned

**Step ID:** `step-9`  
**Type:** `lessons_identification`  
**Handler:** `pir.identify_lessons`  
**Required:** Yes  
**Dependencies:** Step 6, Step 7

#### A. ANALYZE

**A.1. Understand Step Requirements:**
- Identify what went well
- Identify what could be improved
- Identify patterns and anti-patterns
- Capture knowledge for future reference

**A.2. Lessons Learned Categories:**
- What Went Well
- What Could Be Improved
- Patterns Identified
- Anti-Patterns Identified

#### B. DETERMINE

**B.1. Determine Identification Approach:**
- Review all work items and findings
- Identify successful approaches and practices
- Identify areas for improvement
- Recognize recurring patterns
- Identify problematic patterns (anti-patterns)

#### C. EXECUTE

**C.1. Identify What Went Well:**
```markdown
### What Went Well
- {Item 1: Description of what worked well and why}
- {Item 2: Description of what worked well and why}
- {Item 3: Description of what worked well and why}
```

**C.2. Identify Improvements:**
```markdown
### What Could Be Improved
- {Item 1: Description of what could be improved and how}
- {Item 2: Description of what could be improved and how}
- {Item 3: Description of what could be improved and how}
```

**C.3. Identify Patterns:**
```markdown
### Patterns Identified
- **Pattern 1:** {Description}
  - **Context:** {When/where this pattern appears}
  - **Value:** {Why this pattern is valuable}
  - **Recommendation:** {How to leverage this pattern}
```

**C.4. Identify Anti-Patterns:**
```markdown
### Anti-Patterns Identified
- **Anti-Pattern 1:** {Description}
  - **Context:** {When/where this anti-pattern appears}
  - **Impact:** {Negative impact}
  - **Recommendation:** {How to avoid this anti-pattern}
```

#### D. VALIDATE

**D.1. Validation Checks:**
- ✅ Lessons learned identified
- ✅ Patterns documented
- ✅ Anti-patterns documented
- ✅ Recommendations provided

#### E. PROCEED

**E.1. Document Step Completion:**
- Lessons learned: ✅
- Patterns: {Count}
- Anti-patterns: {Count}

**E.2. Move to Next Step:**
- Proceed to Step 10 (Create PIR Report)

---

### Step 10: Create PIR Report

**Step ID:** `step-10`  
**Type:** `report_creation`  
**Handler:** `pir.create_report`  
**Required:** Yes  
**Mandatory:** Yes  
**Dependencies:** Step 9

#### A. ANALYZE

**A.1. Understand Step Requirements:**
- Generate comprehensive PIR report using template
- Populate all sections with review findings
- Save report to KB structure

**A.2. Report Structure:**
- Executive summary
- Goals assessment
- Stories/Tasks review
- Technical assessment
- Lessons learned
- Patterns and anti-patterns
- Follow-up actions
- Knowledge capture
- Metrics

#### B. DETERMINE

**B.1. Determine Report Location:**
- Epic-level: `docs/Reviews/pir/Epic-{N}/PIR-Epic-{N}-v{version}.md`
- Story-level: `docs/Reviews/pir/Story-{N}/PIR-Story-{N}-v{version}.md`

**B.2. Determine PIR Version:**
- **Epic-level:** Use last version in Epic (when Epic marked COMPLETE)
  - Extract version range (first to last version)
  - Use last version for report naming
- **Story-level:** Use last version in Story (when Story marked COMPLETE)
  - Extract version from Story document header
  - Use this version for report naming

**B.3. Determine Report Content:**
- Use template as base
- Populate all sections with findings
- Include version information in header
- Include version references in Stories/Tasks review
- Format according to template

#### C. EXECUTE

**C.1. Load Template:**
- Epic-level: `docs/documentation/templates/epic-pir-template.md`
- Story-level: `docs/documentation/templates/story-pir-template.md`

**C.2. Extract Version Information:**
- **Epic-level:**
  - Read all Story documents in Epic
  - Extract versions from Story headers
  - Determine version range (first to last)
  - Use last version for report naming
- **Story-level:**
  - Read Story document header
  - Extract version from header
  - Use this version for report naming

**C.3. Populate Report:**
- Fill in all template sections
- Include version in header (version range for Epic, single version for Story)
- Include version references in Stories/Tasks review sections
- Include all review findings
- Add metrics and metadata
- Format properly

**C.3. Save Report:**
```bash
# Epic-level
docs/Reviews/pir/Epic-{N}/PIR-Epic-{N}-v{version}.md

# Story-level
docs/Reviews/pir/Story-{N}/PIR-Story-{N}-v{version}.md
```

#### D. VALIDATE

**D.1. Validation Checks:**
- ✅ Report created successfully
- ✅ All sections populated
- ✅ Template structure followed
- ✅ Report saved to correct location

**D.2. Error Handling:**
- If template missing: **BLOCK** workflow, report error
- If save fails: **BLOCK** workflow, report error

#### E. PROCEED

**E.1. Document Step Completion:**
- PIR report created: ✅
- Location: {Path}
- Sections populated: {Count}

**E.2. Move to Next Step:**
- Proceed to Step 11 (Update Knowledge Base)

---

### Step 11: Update Knowledge Base

**Step ID:** `step-11`  
**Type:** `kb_update`  
**Handler:** `pir.update_kb`  
**Required:** Yes  
**Dependencies:** Step 10

#### A. ANALYZE

**A.1. Understand Step Requirements:**
- Store PIR report in KB structure
- Create/update PIR index
- Link PIR to Epic/Story document
- Cross-reference related PIRs

#### B. DETERMINE

**B.1. Determine KB Updates:**
- Ensure directory structure exists
- Update PIR index (if exists)
- Create cross-references
- Link to Epic/Story document

#### C. EXECUTE

**C.1. Ensure Directory Structure:**
```bash
# Epic-level
docs/Reviews/pir/Epic-{N}/

# Story-level
docs/Reviews/pir/Story-{N}/
```

**C.2. Update PIR Index:**
- Add PIR report to index
- Include metadata (Epic/Story, version, date)
- Link to report

**C.3. Create Cross-References:**
- Link to related PIRs
- Link to parent Epic (for Story-level)
- Link to related Stories (for Epic-level)

#### D. VALIDATE

**D.1. Validation Checks:**
- ✅ Directory structure exists
- ✅ PIR report stored
- ✅ Index updated (if applicable)
- ✅ Cross-references created

#### E. PROCEED

**E.1. Document Step Completion:**
- KB updated: ✅
- Report stored: ✅
- Index updated: ✅

**E.2. Move to Next Step:**
- Proceed to Step 12 (Update Kanban Documentation)

---

### Step 12: Update Kanban Documentation

**Step ID:** `step-12`  
**Type:** `kanban_update`  
**Handler:** `pir.update_kanban`  
**Required:** Yes  
**Dependencies:** Step 10

#### A. ANALYZE

**A.1. Understand Step Requirements:**
- Update Epic/Story document with PIR summary
- Link Epic/Story document to PIR report (bidirectional)
- Extract executive summary and key findings from PIR report
- Add PIR status tracking section
- Ensure bidirectional traceability

**A.2. Gather Context:**
- Read PIR report from Step 10
- Read Epic/Story document
- Extract executive summary from PIR report
- Extract key findings from PIR report
- Determine PIR report path and version

**A.3. Integration Requirements:**
- PIR summary section format (see PIR-Kanban Integration Guide)
- Bidirectional linking pattern
- Document structure preservation
- Status tracking

#### B. DETERMINE

**B.1. Determine PIR Summary Content:**
- Extract executive summary from PIR report
- Extract key findings (3-5 most important)
- Determine PIR status (Complete/Pending/Skipped)
- Get PIR date and version

**B.2. Determine Document Updates:**
- Add PIR summary section to Epic/Story document
- Insert after main content, before "Related Work" section
- Add link to PIR report
- Update PIR report with link back to Epic/Story document

**B.3. Determine Link Format:**
- Epic-level: `[PIR-Epic-{N}-v{version}.md](../../Reviews/pir/Epic-{N}/PIR-Epic-{N}-v{version}.md)`
- Story-level: `[PIR-Story-{N}-v{version}.md](../../Reviews/pir/Story-{N}/PIR-Story-{N}-v{version}.md)`

#### C. EXECUTE

**C.1. Read PIR Report:**
```bash
# Epic-level
PIR Report: docs/Reviews/pir/Epic-{N}/PIR-Epic-{N}-v{version}.md

# Story-level
PIR Report: docs/Reviews/pir/Story-{N}/PIR-Story-{N}-v{version}.md
```

**C.2. Extract PIR Summary:**
- Read "Executive Summary" section from PIR report
- Extract first paragraph as summary
- Read "Key Findings" or "Lessons Learned" section
- Select 3-5 most important findings

**C.3. Update Epic/Story Document:**
```markdown
## Post-Implementation Review

**PIR Status:** Complete  
**PIR Date:** {YYYY-MM-DD}  
**PIR Version:** {Version}  
**PIR Report:** [PIR-Epic-{N}-v{version}.md](../../Reviews/pir/Epic-{N}/PIR-Epic-{N}-v{version}.md)

### Summary
{Executive summary paragraph from PIR report}

### Key Findings
- {Key finding 1}
- {Key finding 2}
- {Key finding 3}
```

**C.4. Insert PIR Summary Section:**
- Find insertion point in Epic/Story document
- Insert after main content, before "Related Work" section
- Preserve document structure and formatting
- Ensure proper markdown formatting

**C.5. Update PIR Report with Bidirectional Link:**
- Read PIR report
- Add/update "Related Work" section
- Add link to Epic/Story document:
  - Epic: `[Epic {N} Documentation](../../project-management/kanban/epics/Epic-{N}/Epic-{N}.md)`
  - Story: `[Story {N} Documentation](../../project-management/kanban/epics/Epic-{N}/Story-{N}-{name}.md)`
- Save updated PIR report

#### D. VALIDATE

**D.1. Validation Checks:**
- ✅ Epic/Story document updated with PIR summary
- ✅ PIR summary section properly formatted
- ✅ PIR status, date, version, and report link present
- ✅ Executive summary and key findings included
- ✅ Bidirectional links established (Epic/Story ↔ PIR report)
- ✅ Document structure preserved
- ✅ No duplicate sections

**D.2. Error Handling:**
- If Epic/Story document not found: **BLOCK** workflow, report error
- If PIR report not found: **BLOCK** workflow, report error
- If insertion point unclear: Use end of document, log warning
- If link format invalid: **BLOCK** workflow, report error

#### E. PROCEED

**E.1. Document Step Completion:**
- Kanban documentation updated: ✅
- PIR summary added: ✅
- Executive summary: ✅
- Key findings: {Count}
- Bidirectional links established: ✅

**E.2. Move to Next Step:**
- Proceed to Step 13 (Auto-Create Follow-Up Tasks)

**Integration Notes:**
- See [PIR-Kanban Integration Guide](pir-kanban-integration-guide.md) for detailed patterns
- Follow bidirectional wiring principle for traceability
- Preserve document structure when inserting PIR summary

---

### Step 13: Auto-Create Follow-Up Tasks

**Step ID:** `step-13`  
**Type:** `task_creation`  
**Handler:** `pir.create_follow_ups`  
**Required:** No  
**Enabled:** Yes (configurable)  
**Dependencies:** Step 10

#### A. ANALYZE

**A.1. Understand Step Requirements:**
- Generate Kanban tasks from PIR findings
- Link tasks to PIR report
- Assign priority
- Link to related work

**A.2. Identify Follow-Up Actions:**
- Actions from "Follow-Up Actions" section
- Improvements identified
- Anti-pattern remediation
- Pattern documentation

#### B. DETERMINE

**B.1. Determine Task Creation:**
- For each follow-up action:
  - Create Kanban task
  - Assign priority (High/Medium/Low)
  - Link to PIR report
  - Link to related Epic/Story/Task

#### C. EXECUTE

**C.1. Create Follow-Up Tasks:**
```markdown
- [ ] **Action 1:** {Description}
  - **Priority:** {High/Medium/Low}
  - **Owner:** {Assigned to}
  - **Related Work:** {Link to related Epic/Story/Task}
  - **PIR Reference:** [PIR Report](../../Reviews/pir/...)
```

**C.2. Add Tasks to Kanban:**
- Create task documents
- Add to appropriate Epic/Story
- Link bidirectionally

#### D. VALIDATE

**D.1. Validation Checks:**
- ✅ Follow-up tasks created
- ✅ Priority assigned
- ✅ Links established

#### E. PROCEED

**E.1. Document Step Completion:**
- Follow-up tasks created: {Count}
- Priority assigned: ✅
- Links established: ✅

**E.2. Move to Next Step:**
- Proceed to Step 14 (Link PIR to Work Items)

---

### Step 14: Link PIR to Work Items

**Step ID:** `step-14`  
**Type:** `linking`  
**Handler:** `pir.link_work_items`  
**Required:** Yes  
**Dependencies:** Step 12

#### A. ANALYZE

**A.1. Understand Step Requirements:**
- Establish traceability links using project versioning
- Link PIR to Epic/Story/Tasks
- Reference project versions in PIR report

#### B. DETERMINE

**B.1. Determine Version-Based Linking:**
- Link PIR to Epic using Epic version range
- Link PIR to Stories using Story versions
- Link PIR to Tasks using Task versions
- Reference project versions (RC.EPIC.STORY.TASK+BUILD) in PIR report
- Ensure version references enable traceability

**B.2. Determine Version Extraction:**
- **Epic-level:** Extract version range from all Stories
- **Story-level:** Extract version from Story document header
- Use versions for linking and traceability

#### C. EXECUTE

**C.1. Add Version-Referenced Links to PIR Report:**
```markdown
## Related Work

- **Epic:** [Epic {N} Documentation](../../project-management/kanban/epics/Epic-{N}/Epic-{N}.md) (v{version})
- **Version Range:** {First Version} to {Last Version}
- **Stories:**
  - [Story {N1}](../../project-management/kanban/epics/Epic-{N}/Story-{N1}-*.md) (v{version1})
  - [Story {N2}](../../project-management/kanban/epics/Epic-{N}/Story-{N2}-*.md) (v{version2})
- **Related PIRs:** {Links to related PIR reports with versions}
- **Follow-Up Tasks:** {Links to Kanban tasks created}
```

**C.2. Include Version References:**
- Add version range to Epic PIR header
- Add version to Story PIR header
- Reference versions in Stories/Tasks review sections
- Use versions for traceability links

**C.2. Add Links to Work Items:**
- Epic document → PIR report
- Story documents → PIR report
- Task documents → PIR report (if applicable)

#### D. VALIDATE

**D.1. Validation Checks:**
- ✅ All work items linked using versions
- ✅ Version references established (RC.EPIC.STORY.TASK+BUILD)
- ✅ Version format correct
- ✅ Version range correct (Epic-level)
- ✅ Bidirectional links complete
- ✅ Traceability enabled through version references

#### E. PROCEED

**E.1. Document Step Completion:**
- Work items linked: ✅
- Version references: ✅
- Traceability complete: ✅

**E.2. Move to Next Step:**
- Proceed to Step 15 (Archive Review Materials)

---

### Step 15: Archive Review Materials

**Step ID:** `step-15`  
**Type:** `archiving`  
**Handler:** `pir.archive_materials`  
**Required:** No  
**Dependencies:** Step 14

#### A. ANALYZE

**A.1. Understand Step Requirements:**
- Archive supporting materials for future reference
- Maintain archive structure
- Preserve review context

#### B. DETERMINE

**B.1. Determine Archiving:**
- Archive gathered documents
- Archive review notes
- Archive supporting materials
- Organize in archive structure

#### C. EXECUTE

**C.1. Create Archive Structure:**
```bash
docs/Reviews/pir/Archive/Epic-{N}/v{version}/
docs/Reviews/pir/Archive/Story-{N}/v{version}/
```

**C.2. Archive Materials:**
- Copy gathered documents
- Archive review notes
- Archive supporting materials

#### D. VALIDATE

**D.1. Validation Checks:**
- ✅ Archive structure created
- ✅ Materials archived
- ✅ Archive organized

#### E. PROCEED

**E.1. Document Step Completion:**
- Materials archived: ✅
- Archive structure: ✅

**E.2. Move to Next Step:**
- Proceed to Step 16 (Optional Approval Gate)

---

### Step 16: Optional Approval Gate

**Step ID:** `step-16`  
**Type:** `approval`  
**Handler:** `pir.approval_gate`  
**Required:** No  
**Enabled:** Configurable (default: false)  
**Dependencies:** Step 14

#### A. ANALYZE

**A.1. Understand Step Requirements:**
- Optional approval workflow (if configured)
- Support manual approval process
- Document approval status

**A.2. Check Configuration:**
- If `require_approval: false`: Skip this step
- If `require_approval: true`: Execute approval workflow

#### B. DETERMINE

**B.1. Determine Approval Process:**
- If approval required: Request approval
- If approval not required: Skip step
- Document approval status

#### C. EXECUTE

**C.1. If Approval Required:**
- Request approval from reviewer
- Wait for approval
- Document approval status

**C.2. If Approval Not Required:**
- Skip approval step
- Mark as "Approval Not Required"

#### D. VALIDATE

**D.1. Validation Checks:**
- ✅ Approval status determined
- ✅ Status documented

#### E. PROCEED

**E.1. Document Step Completion:**
- Approval gate: ✅
- Status: {Approved/Not Required/Skipped}

**E.2. Workflow Complete:**
- All steps completed
- PIR workflow finished

---

## 🔄 Workflow Completion

### Completion Checklist

- [ ] All 16 steps completed (or skipped where appropriate)
- [ ] PIR report created and stored
- [ ] Knowledge base updated
- [ ] Kanban documentation updated
- [ ] Follow-up tasks created (if applicable)
- [ ] All work items linked
- [ ] Review materials archived (if applicable)
- [ ] Approval obtained (if required)

### Final Status

**Workflow Status:** COMPLETE  
**PIR Report:** {Path}  
**Review Level:** {Epic/Story}  
**Review Target:** {Epic/Story number and name}  
**Version:** {Version}

---

## 📚 Examples

### Example 1: Epic-Level PIR

**Scenario:** Epic 2 (Workflow Management Framework) marked COMPLETE

**Execution:**
1. Step 1: Identify Epic 2 as review scope
2. Step 2: Skip (Epic-level, no significance evaluation)
3. Step 3: Gather Epic 2 document, all Story documents, changelogs
4. Step 4: Prepare Epic PIR checklist
5. Step 5: Review all Stories in Epic 2
6. Step 6: Analyze Epic 2 goals vs outcomes
7. Step 7: Review technical implementation
8. Step 8: Assess documentation quality
9. Step 9: Identify lessons learned
10. Step 10: Create PIR report (`docs/Reviews/pir/Epic-2/PIR-Epic-2-v0.2.11.9+3.md`)
11. Step 11: Update KB with PIR report
12. Step 12: Update Epic 2 document with PIR summary
13. Step 13: Create follow-up tasks from findings
14. Step 14: Link PIR to Epic 2 and all Stories
15. Step 15: Archive review materials
16. Step 16: Skip approval (not required)

### Example 2: Story-Level PIR (Significant)

**Scenario:** Story 5 (Post-Implementation Review Workflow) marked COMPLETE, evaluated as High Significance

**Execution:**
1. Step 1: Identify Story 5 as review scope
2. Step 2: Evaluate significance → High Significance → Proceed
3. Step 3: Gather Story 5 document, all Task documents, changelogs
4. Step 4: Prepare Story PIR checklist
5. Step 5: Review all Tasks in Story 5
6. Step 6: Analyze Story 5 goals vs outcomes
7. Step 7: Review technical implementation
8. Step 8: Assess documentation quality
9. Step 9: Identify lessons learned
10. Step 10: Create PIR report (`docs/Reviews/pir/Story-5/PIR-Story-5-v0.2.5.11+1.md`)
11. Step 11: Update KB with PIR report
12. Step 12: Update Story 5 document with PIR summary
13. Step 13: Create follow-up tasks from findings
14. Step 14: Link PIR to Story 5 and all Tasks
15. Step 15: Archive review materials
16. Step 16: Skip approval (not required)

### Example 3: Story-Level PIR (Not Significant)

**Scenario:** Story marked COMPLETE, evaluated as Low Significance

**Execution:**
1. Step 1: Identify Story as review scope
2. Step 2: Evaluate significance → Low Significance → Skip PIR
3. Workflow terminates
4. Document skip reason in Story document

---

## 🔗 Integration Points

### Release Workflow (RW) Integration

**Trigger:** RW Step 15 (or appropriate step) checks for Epic/Story COMPLETE status
- Deterministic check: Read Epic/Story status from Kanban document
- Epic-level: Always trigger PIR if COMPLETE
- Story-level: Evaluate significance, trigger if significant
- RW continues after PIR trigger (non-blocking)

### Kanban Integration

**Updates:**
- Epic/Story document updated with PIR summary
- Bidirectional links (Epic/Story ↔ PIR)
- Follow-up tasks created in Kanban
- Status tracking

### Versioning Integration

**Linking:**
- PIR report uses project versioning schema
- Links to Epic/Story version range
- References Task versions
- No separate PIR versioning needed

### Knowledge Base Integration

**Storage:**
- PIR reports stored in `docs/Reviews/pir/`
- Indexed for searchability
- Cross-referenced with related PIRs
- Linked to Epic/Story and Tasks

---

## 🚨 Troubleshooting

### Common Issues

**Issue 1: Epic/Story Not Found**
- **Solution:** Verify Epic/Story document path
- **Check:** Epic/Story number and document location

**Issue 2: Status Not COMPLETE**
- **Solution:** PIR should only run for COMPLETE items
- **Check:** Verify Epic/Story status before triggering

**Issue 3: Template Missing**
- **Solution:** Ensure templates exist in `docs/documentation/templates/`
- **Check:** Template file names and locations

**Issue 4: Significance Evaluation Unclear**
- **Solution:** Use conservative approach (proceed with PIR)
- **Check:** Significance criteria configuration

**Issue 5: KB Directory Missing**
- **Solution:** Create directory structure if needed
- **Check:** `docs/Reviews/pir/` structure

---

## 📖 Related Documentation

- [PIR Workflow Planning](../../Analysis/PIR-workflow-planning.md) - Complete planning document
- [Epic-Level PIR Design](../../Analysis/T02-epic-level-pir-workflow-design.md) - Epic-level design
- [Story-Level PIR Design](../../Analysis/T03-story-level-pir-workflow-design.md) - Story-level design
- [PIR Workflow YAML](../../workflows/pir-workflow.yaml) - Workflow definition
- [PIR Templates](../../../docs/documentation/templates/) - Epic and Story PIR templates
- [PIR-Kanban Integration Guide](pir-kanban-integration-guide.md) - Kanban integration patterns and examples
- [PIR-Versioning Integration Guide](pir-versioning-integration-guide.md) - Versioning integration patterns and examples
- [Release Workflow Agent Execution](release-workflow-agent-execution.md) - RW execution pattern reference

---

_This execution guide is part of the Workflow Management Framework. See `packages/frameworks/workflow mgt/` for complete framework documentation._
