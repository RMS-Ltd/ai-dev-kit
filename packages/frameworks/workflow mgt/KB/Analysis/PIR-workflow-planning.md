---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-07T17:40:00Z
expires_at: null
housekeeping_policy: keep
---

# Post-Implementation Review (PIR) Workflow Planning

**Status:** PLANNING  
**Created:** 2025-12-07  
**Purpose:** Plan a comprehensive Post-Implementation Review workflow for both Epic and Story level reviews  
**Related:** Workflow Management Framework (Epic 2)

---

## Executive Summary

This document plans a new **Post-Implementation Review (PIR) workflow** for the Workflow Management Framework. The PIR workflow will enable systematic review of completed Epics and Stories, capturing lessons learned, identifying improvements, and ensuring quality standards are met.

**Key Objectives:**
- Create a reusable PIR workflow that works at both Epic and Story levels
- Integrate with existing Kanban and versioning systems
- Follow the agent-driven execution pattern established by RW
- Provide structured review templates and checklists
- Enable knowledge capture and continuous improvement

---

## 1. Workflow Scope

### 1.1 Epic-Level PIR

**Trigger:** **Auto-triggered** when an Epic is marked as COMPLETE (deterministic checks in RW)  
**Frequency:** **Always** - Every Epic receives a PIR upon completion  
**Purpose:** Comprehensive review of the entire Epic, including:
- All Stories within the Epic
- Overall Epic goals and objectives
- Cross-Story dependencies and coordination
- Epic-level lessons learned
- Resource utilization and timeline analysis
- Quality metrics and standards compliance

**Key Questions:**
- Did the Epic achieve its stated goals?
- Were all Stories completed successfully?
- What went well? What could be improved?
- Are there patterns or anti-patterns to document?
- What knowledge should be captured for future Epics?

### 1.2 Story-Level PIR

**Trigger:** **Auto-triggered** when a Story is marked as COMPLETE, **only for significant Stories**  
**Frequency:** **Selective** - Only significant Stories receive a PIR (significance criteria defined below)  
**Purpose:** Focused review of individual Story, including:
- Story goals and acceptance criteria
- Task completion and quality
- Story-level lessons learned
- Technical decisions and trade-offs
- Documentation completeness
- Integration with other Stories

**Key Questions:**
- Did the Story achieve its goals?
- Were all Tasks completed successfully?
- What technical decisions were made and why?
- What documentation was created/updated?
- Are there follow-up items or dependencies?

### 1.3 Story Significance Criteria

To determine if a Story warrants a PIR, evaluate against these criteria:

**Mandatory PIR (High Significance):**
- Story introduces new architectural patterns or decisions
- Story affects multiple systems or components
- Story includes significant technical debt or refactoring
- Story has high business impact or user visibility
- Story involves complex integration or migration work
- Story duration exceeds threshold (e.g., >2 weeks)
- Story has multiple dependencies or blockers

**Optional PIR (Medium Significance):**
- Story introduces new tools or frameworks
- Story includes documentation or process changes
- Story has moderate complexity or scope
- Story involves cross-team coordination

**No PIR (Low Significance):**
- Simple bug fixes or minor enhancements
- Routine maintenance tasks
- Documentation-only changes
- Small, isolated feature additions

**Configuration:** Projects can customize significance criteria via PIR config file.

---

## 2. Workflow Structure

### 2.1 Workflow Phases

Following the established agent-driven execution pattern, the PIR workflow will have these phases:

#### Phase 1: Preparation
- **Step 1:** **RW Integration Check** - Deterministic check in RW: If Epic/Story marked COMPLETE, trigger PIR
- **Step 2:** Identify Review Scope (Epic or Story)
- **Step 3:** **Evaluate Story Significance** (if Story-level) - Apply significance criteria to determine if PIR needed
- **Step 4:** Gather Review Materials (documents, code, changelogs)
- **Step 5:** Prepare Review Checklist

#### Phase 2: Analysis
- **Step 6:** Review Completed Work Items
- **Step 7:** Analyze Goals vs. Outcomes
- **Step 8:** Review Technical Implementation
- **Step 9:** Assess Documentation Quality

#### Phase 3: Reflection
- **Step 10:** Identify Lessons Learned
- **Step 11:** Document What Went Well
- **Step 12:** Document What Could Be Improved
- **Step 13:** Identify Patterns and Anti-Patterns

#### Phase 4: Documentation
- **Step 14:** Create PIR Report
- **Step 15:** Update Knowledge Base
- **Step 16:** Update Kanban Documentation
- **Step 17:** **Auto-Create Follow-Up Kanban Tasks** (from PIR findings)

#### Phase 5: Integration
- **Step 18:** Link PIR to Work Items (using project version numbers)
- **Step 19:** Update Version History (reference project versions)
- **Step 20:** Archive Review Materials
- **Step 21:** **Optional Approval Gate** (if configured, not default)

### 2.2 Workflow Configuration

**Workflow Type:** `review`  
**Workflow Name:** Post-Implementation Review (PIR)  
**Version:** 1.0.0 (initial planning)

**Configuration Options:**
- `review_level`: `epic` | `story` | `both` (default: `both`)
- `auto_trigger`: `true` | `false` (default: `true` - **auto-trigger on COMPLETE via RW deterministic check**)
- `epic_pir_always`: `true` | `false` (default: `true` - **always PIR Epics**)
- `story_pir_significance_criteria`: Configuration for Story significance evaluation (see Section 1.3 for criteria)
- `reviewer_assignment`: `auto` | `manual` | `both` (default: `both` - **support both solo and team-based development**)
- `require_approval`: `true` | `false` (default: `false` - **support but not default**, configurable per project/organization)
- `create_follow_ups`: `true` | `false` (default: `true` - **auto-create Kanban tasks** from PIR findings)
- `knowledge_base_path`: Path to KB for storing PIR reports (default: `docs/Reviews/PIR`) - **impacts KB package design**
- `template_path`: Path to PIR templates (default: `docs/documentation/Templates`)
- `versioning_strategy`: `project_version` | `separate` | `none` (default: `project_version` - **use project versioning schema, no separate PIR versioning** - PIR reports are project artifacts, not packages)

---

## 3. Integration Points

### 3.1 Kanban Integration

**Value-Add Assessment:** ✅ **Needed** - PIR must integrate with Kanban to:
- Auto-trigger on COMPLETE status (deterministic check in RW)
- Update Epic/Story documents with PIR summaries
- Link PIR reports to work items
- Auto-create follow-up Kanban tasks from PIR findings

**Epic-Level PIR:**
- **Auto-triggered** when Epic status changes to COMPLETE (via RW deterministic check)
- Reviews all Stories in the Epic
- Updates Epic document with PIR summary
- Links PIR report to Epic document
- Creates follow-up Kanban tasks for identified actions

**Story-Level PIR:**
- **Auto-triggered** when Story status changes to COMPLETE (only for significant Stories)
- Evaluates Story significance before triggering
- Reviews all Tasks in the Story
- Updates Story document with PIR summary
- Links PIR report to Story document
- Creates follow-up Kanban tasks for identified actions

### 3.2 Versioning Integration

**Value-Add Assessment:** ✅ **Needed** - PIR must integrate with versioning to:
- Reference version numbers in PIR reports (for traceability)
- Link PIR to specific version releases
- Use project versioning schema (no separate PIR versioning needed)

**Approach:**
- PIR reports reference project version numbers (RC.EPIC.STORY.TASK+BUILD)
- Link PIR to specific version releases for traceability
- Use project versioning for PIR report naming (e.g., `PIR-Epic-2-v0.2.4.9+3.md`)
- **No separate PIR versioning** - PIR reports are artifacts of the project, not packages

### 3.3 Release Workflow Integration

**Value-Add Assessment:** ✅ **Needed** - PIR must integrate with RW to:
- Auto-trigger PIR when Epic/Story marked COMPLETE (deterministic check in RW)
- Ensure PIR runs as part of completion workflow

**Approach:**
- RW Step 14 (or appropriate step) includes deterministic check for COMPLETE status
- If Epic/Story marked COMPLETE, RW triggers PIR workflow
- PIR executes after RW completion (or as separate workflow triggered by RW)
- PIR can optionally review RW execution quality (if value-add)

### 3.4 Knowledge Base Integration

**Value-Add Assessment:** ✅ **Needed** - PIR must integrate with KB to:
- Store PIR reports in structured KB location
- Enable knowledge capture and retrieval
- Support KB package development (impacts KB package thinking)

**Approach:**
- Store PIR reports in KB structure: `docs/Reviews/pir/Epic-{N}/` or `docs/Reviews/pir/Story-{N}/`
- Link PIR reports to work items (bidirectional links)
- Create searchable index of PIR findings (future KB package feature)
- Enable cross-referencing of similar reviews
- **Impact on KB Package:** This integration will inform KB package design for review storage and retrieval

---

## 4. Review Templates

### 4.1 Epic PIR Template

```markdown
# Post-Implementation Review: Epic {N}

**Epic:** {Epic Name}  
**Status:** COMPLETE  
**Review Date:** {Date}  
**Reviewer:** {Name}  
**Version Range:** {Start Version} to {End Version}

## Executive Summary
[One paragraph summary of Epic outcomes]

## Goals Assessment
- [ ] Goal 1: {Status and assessment}
- [ ] Goal 2: {Status and assessment}
- [ ] Goal 3: {Status and assessment}

## Stories Review
[Review each Story in the Epic]

### Story {N}: {Story Name}
- **Status:** COMPLETE
- **Goals Achieved:** {Yes/No/Partial}
- **Quality:** {Assessment}
- **Key Findings:** {Summary}

## Technical Assessment
- **Architecture Decisions:** {Key decisions made}
- **Code Quality:** {Assessment}
- **Documentation:** {Completeness assessment}
- **Testing:** {Coverage and quality}

## Lessons Learned
### What Went Well
- {Item 1}
- {Item 2}

### What Could Be Improved
- {Item 1}
- {Item 2}

### Patterns Identified
- {Pattern 1}
- {Pattern 2}

### Anti-Patterns Identified
- {Anti-Pattern 1}
- {Anti-Pattern 2}

## Follow-Up Actions
- [ ] Action 1: {Description}
- [ ] Action 2: {Description}

## Knowledge Capture
[Key knowledge items to preserve]

## Metrics
- **Duration:** {Start Date} to {End Date}
- **Stories Completed:** {Count}
- **Tasks Completed:** {Count}
- **Versions Released:** {Count}
```

### 4.2 Story PIR Template

```markdown
# Post-Implementation Review: Story {N}

**Story:** {Story Name}  
**Epic:** {Epic Name}  
**Status:** COMPLETE  
**Review Date:** {Date}  
**Reviewer:** {Name}  
**Version:** {Version}

## Executive Summary
[One paragraph summary of Story outcomes]

## Goals Assessment
- [ ] Goal 1: {Status and assessment}
- [ ] Goal 2: {Status and assessment}

## Tasks Review
[Review each Task in the Story]

### Task {N}: {Task Name}
- **Status:** COMPLETE
- **Quality:** {Assessment}
- **Key Findings:** {Summary}

## Technical Assessment
- **Implementation Approach:** {Description}
- **Code Quality:** {Assessment}
- **Documentation:** {Completeness assessment}
- **Testing:** {Coverage and quality}

## Lessons Learned
### What Went Well
- {Item 1}
- {Item 2}

### What Could Be Improved
- {Item 1}
- {Item 2}

## Follow-Up Actions
- [ ] Action 1: {Description}
- [ ] Action 2: {Description}

## Knowledge Capture
[Key knowledge items to preserve]
```

---

## 5. Workflow YAML Structure

### 5.1 Proposed YAML Structure

```yaml
name: Post-Implementation Review (PIR)
version: 1.0.0
type: review
description: Systematic review of completed Epics and Stories with lessons learned capture

config:
  review_level: both  # epic | story | both
  auto_trigger: true
  require_approval: false
  create_follow_ups: true
  knowledge_base_path: docs/Reviews/PIR
  template_path: docs/documentation/Templates

steps:
  - id: step-1
    name: Identify Review Scope
    type: analysis
    handler: pir.identify_scope
    required: true
    dependencies: []
    config:
      review_level: ${config.review_level}
      kanban_path: docs/project-management/kanban

  - id: step-2
    name: Gather Review Materials
    type: analysis
    handler: pir.gather_materials
    required: true
    dependencies:
      - step-1
    config:
      include_code: true
      include_docs: true
      include_changelogs: true

  - id: step-3
    name: Prepare Review Checklist
    type: planning
    handler: pir.prepare_checklist
    required: true
    dependencies:
      - step-2
    config:
      template_path: ${config.template_path}
      checklist_type: epic  # or story

  # ... additional steps following the pattern
```

---

## 6. Implementation Considerations

### 6.1 Agent-Driven Execution

The PIR workflow should follow the same agent-driven execution pattern as RW:
- **ANALYZE** - Understand review scope and requirements
- **DETERMINE** - Decide what to review and how
- **EXECUTE** - Perform the review
- **VALIDATE** - Verify review completeness
- **PROCEED** - Document findings and move forward

### 6.2 Automation Opportunities

**Auto-Trigger (Deterministic in RW):**
- Auto-trigger on COMPLETE status (deterministic check in RW Step 14 or appropriate step)
- Evaluate Story significance automatically (for Story-level PIR)
- Auto-trigger Epic PIR for all completed Epics

**Auto-Processing:**
- Auto-gather review materials from KB structure
- Auto-generate review checklist from templates
- Auto-link PIR reports to work items
- **Auto-create follow-up Kanban tasks** from PIR findings (confirmed requirement)

**Reviewer Assignment:**
- Support both **auto-assign** (for team-based development) and **manual** (for solo development)
- Default to current work item owner/assignee
- Allow override for team review assignments

### 6.3 Manual Review Requirements

Some aspects may require human judgment:
- Quality assessments
- Lessons learned identification
- Pattern recognition
- Follow-up action prioritization
- Story significance evaluation (if criteria are ambiguous)

### 6.4 Approval Process

**Default:** No approval required (PIR reports are finalized automatically)

**Optional Support:** Projects can enable approval workflow:
- Configurable approval gate before finalizing PIR report
- Support for team-based approval processes
- Integration with project-specific approval systems
- **Not default** - only enabled if project configures it

### 6.4 Integration with Existing Tools

- **Kanban:** Read work item status, update documents
- **Versioning:** Reference versions, track completion
- **KB:** Store reports, link to work items
- **Git:** Reference commits, branches, tags

---

## 7. Success Criteria

### 7.1 Workflow Completeness

- [ ] PIR workflow YAML definition created
- [ ] Agent execution guide created
- [ ] Epic-level PIR template created
- [ ] Story-level PIR template created
- [ ] Integration with Kanban verified
- [ ] Integration with versioning verified
- [ ] Knowledge base structure defined
- [ ] Follow-up action creation tested

### 7.2 Documentation Completeness

- [ ] PIR workflow reference guide
- [ ] PIR agent execution guide
- [ ] PIR template usage guide
- [ ] PIR integration guide
- [ ] PIR examples and best practices

### 7.3 Usability

- [ ] Workflow can be triggered easily (PIR command)
- [ ] Templates are clear and comprehensive
- [ ] Reports are well-structured and searchable
- [ ] Follow-up actions are actionable
- [ ] Knowledge capture is effective

---

## 8. Next Steps

### Phase 1: Planning (Current)
- [x] Create planning document
- [ ] Review with stakeholders
- [ ] Refine workflow structure
- [ ] Define detailed step requirements

### Phase 2: Design
- [ ] Create workflow YAML definition
- [ ] Design review templates
- [ ] Design knowledge base structure
- [ ] Design integration points

### Phase 3: Implementation
- [ ] Create agent execution guide
- [ ] Implement workflow steps
- [ ] Create validation scripts
- [ ] Test with sample Epic/Story

### Phase 4: Documentation
- [ ] Create workflow reference
- [ ] Create usage guide
- [ ] Create examples
- [ ] Create best practices guide

### Phase 5: Integration
- [ ] Integrate with Kanban
- [ ] Integrate with versioning
- [ ] Integrate with KB
- [ ] Test end-to-end workflow

---

## 9. Decisions Made (Previously Open Questions)

1. **Trigger Mechanism:** ✅ **Auto-triggered on COMPLETE** with deterministic checks in RW
2. **Review Frequency:** ✅ **Epic always, Story only significant ones** (significance criteria defined in Section 1.3)
3. **Reviewer Assignment:** ✅ **Both auto and manual** (support solo and team-based development)
4. **Follow-Up Actions:** ✅ **Yes, auto-create as Kanban tasks**
5. **Knowledge Base Structure:** ✅ **KB structure** (impacts KB package design)
6. **Versioning:** ✅ **Use project versioning** (no separate PIR versioning - PIR reports are project artifacts, not packages)
7. **Approval Process:** ✅ **Support but not default** (configurable per project/organization)
8. **Integration Depth:** ✅ **Value-add principle** - Evaluate each integration by asking "do we need this" not "how can we justify this"

All decisions have been incorporated into the workflow design above.

---

## 10. References

- Release Workflow (RW) - Reference implementation
- Agent-Driven Workflow Execution - Methodology
- Kanban Framework - Work item structure
- Versioning Framework - Version schema
- Knowledge Base Structure - Documentation organization

---

**Last Updated:** 2025-12-07  
**Status:** PLANNING → DESIGN READY  
**Decisions:** All 8 open questions answered and incorporated into design  
**Next Steps:** Proceed to Phase 2 (Design) - Create workflow YAML definition and templates

