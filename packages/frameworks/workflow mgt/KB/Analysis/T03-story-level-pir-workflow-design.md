---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-16T16:30:00Z
expires_at: null
housekeeping_policy: keep
related_story: E2:S05
related_task: E2:S05:T03
---

# E2:S05:T03 – Story-Level PIR Workflow Design

**Epic:** Epic 2 (Workflow Management Framework)  
**Story:** Story 5 (Post-Implementation Review Workflow)  
**Task:** Task 3 (Design Story-level PIR workflow)  
**Version:** v0.2.5.3+0

---

## Overview

This document designs the Story-level Post-Implementation Review (PIR) workflow, providing focused review of completed Stories including Tasks, goals assessment, technical evaluation, lessons learned capture, and knowledge preservation. Story-level PIRs are triggered selectively based on significance criteria, ensuring valuable reviews without overhead for routine work.

---

## Design Principles

1. **Significance-Based:** Only significant Stories receive PIR (evaluated against criteria)
2. **Focused Review:** Concentrate on Story-specific goals, Tasks, and outcomes
3. **Knowledge Preservation:** Capture Story-level lessons learned and patterns
4. **Actionable Outcomes:** Generate follow-up tasks from review findings
5. **Integration First:** Seamlessly integrate with Kanban, versioning, RW, and knowledge base
6. **Structured Approach:** Follow consistent phases and steps for reliable reviews
7. **Agent-Driven Execution:** Use ANALYZE → DETERMINE → EXECUTE → VALIDATE → PROCEED pattern

---

## Story-Level Review Scope

### Objectives

**Primary Objectives:**
- Assess Story goal achievement and success
- Review all Tasks within Story for completion and quality
- Evaluate technical decisions and implementation approach
- Identify Story-level lessons learned
- Capture knowledge for future Stories
- Generate actionable follow-up items

**Review Scope Includes:**
- All Tasks within Story (completed and in-progress)
- Story goals and acceptance criteria
- Technical implementation approach
- Code quality and documentation
- Testing coverage and quality
- Integration with other Stories
- Dependencies and blockers

---

## Story Significance Evaluation

### Significance Criteria

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

### Significance Evaluation Process

**Step 1: Evaluate Against Criteria**
- Check each significance criterion
- Count matches (High/Medium/Low)
- Determine significance level

**Step 2: Decision**
- **High Significance:** Proceed with PIR
- **Medium Significance:** Optional PIR (configurable)
- **Low Significance:** Skip PIR

**Step 3: Document Decision**
- Record significance evaluation
- Document rationale
- Update Story document if needed

---

## Workflow Phases and Steps

### Phase 1: Preparation

#### Step 1: Evaluate Story Significance

**Purpose:** Determine if Story warrants PIR based on significance criteria

**Actions:**
1. Read Story document to gather context
2. Evaluate against significance criteria
3. Count matches (High/Medium/Low)
4. Determine significance level
5. Make decision: Proceed/Skip/Optional

**Deliverables:**
- Significance evaluation result
- Rationale for decision
- Decision documented

**Note:** If Story is not significant, workflow terminates here.

---

#### Step 2: Identify Story and Gather Context

**Purpose:** Establish Story identity and gather initial context

**Actions:**
1. Read Story document to identify Story number, name, and status
2. Verify Story status is COMPLETE
3. Gather Story metadata (creation date, completion date, version)
4. Identify all Tasks within Story
5. Collect Story goals and acceptance criteria
6. Identify parent Epic

**Deliverables:**
- Story identification (number, name, version)
- Task list with status
- Story goals and acceptance criteria
- Parent Epic reference

---

#### Step 3: Gather Review Materials

**Purpose:** Collect all materials needed for Story review

**Materials to Gather:**
- Story document (`docs/project-management/kanban/epics/Epic-{N}/Story-{N}-{name}.md`)
- All Task documents within Story
- Changelog entries for Story version
- Related BR/FR documents
- Code changes (if applicable)
- Documentation created/updated during Story
- Test results (if applicable)

**Deliverables:**
- Complete set of Story-related documents
- Version documentation
- Related work items list

---

#### Step 4: Prepare Review Checklist

**Purpose:** Create structured checklist based on Story template

**Checklist Sections:**
- [ ] Story goals assessment
- [ ] Tasks review (all Tasks)
- [ ] Technical assessment
- [ ] Documentation assessment
- [ ] Lessons learned identification
- [ ] Patterns and anti-patterns identification
- [ ] Follow-up actions identification

**Deliverables:**
- Completed review checklist
- Review template populated with Story context

---

### Phase 2: Analysis

#### Step 5: Review Completed Tasks

**Purpose:** Assess each Task within Story for completion and quality

**For Each Task:**
- Review Task goals and deliverables
- Assess completion status
- Evaluate Task quality (Excellent/Good/Satisfactory/Needs Improvement)
- Review deliverables
- Identify notable achievements
- Document issues encountered

**Deliverables:**
- Task-by-Task assessment
- Quality ratings for each Task
- Completion status for each Task

---

#### Step 6: Analyze Goals vs Outcomes

**Purpose:** Compare Story goals with actual outcomes

**Analysis Areas:**
- Goal 1: Status and assessment
- Goal 2: Status and assessment
- Overall Story goal achievement
- Evidence and metrics supporting assessment

**Deliverables:**
- Goals assessment with status
- Evidence and metrics
- Overall Story success assessment

---

#### Step 7: Review Technical Implementation

**Purpose:** Evaluate technical approach, code quality, and implementation

**Technical Assessment Areas:**

**Implementation Approach:**
- Technical approach taken
- Rationale for approach
- Alternatives considered

**Code Quality:**
- Overall assessment
- Code review coverage
- Technical debt introduced
- Code quality metrics

**Documentation:**
- Completeness assessment
- Documentation created
- Documentation gaps
- Documentation quality

**Testing:**
- Test coverage
- Test quality
- Test types used
- Test results

**Deliverables:**
- Technical assessment report
- Implementation approach documented
- Code quality assessment
- Documentation assessment
- Testing assessment

---

### Phase 3: Reflection

#### Step 8: Identify Lessons Learned

**Purpose:** Capture what went well and what could be improved

**Lessons Learned Categories:**

**What Went Well:**
- Items that worked well and why
- Successful patterns or approaches
- Effective processes or tools

**What Could Be Improved:**
- Items that could be improved and how
- Process improvements needed
- Tool or approach improvements

**Deliverables:**
- Lessons learned list (what went well)
- Improvement opportunities list
- Rationale for each item

---

#### Step 9: Identify Patterns and Anti-Patterns

**Purpose:** Document reusable patterns and anti-patterns to avoid

**Pattern Identification:**
- Patterns that emerged during Story
- Context where patterns appear
- Value of each pattern
- Recommendations for leveraging patterns

**Anti-Pattern Identification:**
- Anti-patterns that appeared
- Context where anti-patterns appear
- Negative impact of anti-patterns
- Recommendations for avoiding anti-patterns

**Deliverables:**
- Patterns list with context and value
- Anti-patterns list with context and impact
- Recommendations for each

---

### Phase 4: Documentation

#### Step 10: Create Story PIR Report

**Purpose:** Generate comprehensive Story PIR report using template

**Report Structure:**
- Executive summary
- Goals assessment
- Tasks review
- Technical assessment
- Lessons learned
- Patterns and anti-patterns
- Follow-up actions
- Knowledge capture
- Metrics

**Report Location:**
- `docs/Reviews/pir/Story-{N}/PIR-Story-{N}-v{version}.md`

**Deliverables:**
- Complete Story PIR report
- Report saved to KB structure

---

#### Step 11: Update Knowledge Base

**Purpose:** Integrate PIR findings into knowledge base

**KB Updates:**
- Store PIR report in KB structure
- Create/update PIR index
- Link PIR to Story document
- Cross-reference related PIRs

**Deliverables:**
- PIR report stored in KB
- KB index updated
- Cross-references established

---

#### Step 12: Update Kanban Documentation

**Purpose:** Update Story document with PIR summary and links

**Kanban Updates:**
- Add PIR summary to Story document
- Link Story document to PIR report (bidirectional)
- Update Story status if needed
- Add PIR completion marker

**Deliverables:**
- Story document updated with PIR summary
- Bidirectional links established
- Status updated

---

#### Step 13: Auto-Create Follow-Up Tasks

**Purpose:** Generate Kanban tasks from PIR findings

**Task Creation:**
- Create tasks for identified actions
- Link tasks to PIR report
- Assign priority (High/Medium/Low)
- Link to related Epic/Story/Task

**Deliverables:**
- Follow-up Kanban tasks created
- Tasks linked to PIR and related work
- Priority assigned

---

### Phase 5: Integration

#### Step 14: Link PIR to Work Items

**Purpose:** Establish traceability links using project versioning

**Linking:**
- Link PIR to Story (using Story version)
- Link PIR to Tasks (using Task versions)
- Link PIR to parent Epic
- Reference project versions in PIR report

**Deliverables:**
- All work items linked to PIR
- Version references established
- Traceability complete

---

#### Step 15: Archive Review Materials

**Purpose:** Archive supporting materials for future reference

**Archiving:**
- Archive gathered documents
- Archive review notes
- Archive supporting materials
- Maintain archive structure

**Deliverables:**
- Review materials archived
- Archive structure maintained

---

## Review Criteria and Quality Metrics

### Story Goal Achievement Criteria

**Achieved:**
- All Story goals met
- All acceptance criteria satisfied
- Evidence supports achievement

**Partially Achieved:**
- Some goals met
- Some acceptance criteria satisfied
- Partial evidence

**Not Achieved:**
- Goals not met
- Acceptance criteria not satisfied
- Insufficient evidence

### Quality Metrics

**Story Quality Assessment:**
- **Excellent:** All Tasks complete, high quality, goals achieved, minimal issues
- **Good:** Most Tasks complete, good quality, goals mostly achieved, minor issues
- **Satisfactory:** Tasks complete, acceptable quality, goals partially achieved, some issues
- **Needs Improvement:** Tasks incomplete or low quality, goals not achieved, significant issues

**Metrics to Track:**
- Tasks completed: {Count} / {Total}
- Versions released: {Count}
- Duration: {Start Date} to {End Date}
- Time to completion: {Duration}

---

## Story PIR Checklist

### Preparation
- [ ] Story significance evaluated
- [ ] Story identified and context gathered
- [ ] Review materials collected
- [ ] Review checklist prepared

### Analysis
- [ ] All Tasks reviewed
- [ ] Goals vs outcomes analyzed
- [ ] Technical implementation reviewed

### Reflection
- [ ] Lessons learned identified
- [ ] Patterns identified
- [ ] Anti-patterns identified

### Documentation
- [ ] Story PIR report created
- [ ] Knowledge base updated
- [ ] Kanban documentation updated
- [ ] Follow-up tasks created

### Integration
- [ ] PIR linked to work items
- [ ] Review materials archived

---

## Story PIR Report Structure

The Story PIR report follows the template structure:

1. **Executive Summary** - One paragraph overview
2. **Goals Assessment** - Goal-by-goal status and assessment
3. **Tasks Review** - Review of each Task
4. **Technical Assessment** - Implementation approach, code quality, documentation, testing
5. **Lessons Learned** - What went well, improvements, patterns, anti-patterns
6. **Follow-Up Actions** - Actionable items from review
7. **Knowledge Capture** - Best practices and lessons for future
8. **Metrics** - Duration, completion counts, versions

---

## Integration Points

### Release Workflow (RW) Integration

**Trigger:** RW Step 15 (or appropriate step) checks for Story COMPLETE status
- Deterministic check: Read Story status from Kanban document
- Evaluate Story significance (deterministic criteria check)
- If COMPLETE and significant, trigger Story PIR workflow
- RW continues after PIR trigger (non-blocking)

### Kanban Integration

**Updates:**
- Story document updated with PIR summary
- Bidirectional links (Story ↔ PIR)
- Follow-up tasks created in Kanban
- Status tracking

### Versioning Integration

**Linking:**
- PIR report uses project versioning schema
- Links to Story version
- References Task versions
- No separate PIR versioning needed

### Knowledge Base Integration

**Storage:**
- PIR reports stored in `docs/Reviews/pir/Story-{N}/`
- Indexed for searchability
- Cross-referenced with related PIRs
- Linked to Story and Tasks

---

## Success Criteria

**Story PIR Workflow is successful when:**
- ✅ Story significance evaluated correctly
- ✅ Story PIR report created and stored (if significant)
- ✅ All Tasks reviewed and assessed
- ✅ Goals vs outcomes analyzed
- ✅ Lessons learned captured
- ✅ Patterns and anti-patterns identified
- ✅ Follow-up tasks created
- ✅ Story document updated with PIR summary
- ✅ All work items linked bidirectionally
- ✅ Knowledge preserved for future reference

---

## Related Documentation

- [PIR Workflow Planning](PIR-workflow-planning.md) - Complete planning document
- [Story PIR Template](../../../docs/documentation/templates/story-pir-template.md) - Story PIR template
- [PIR Workflow YAML](../../workflows/pir-workflow.yaml) - Workflow definition
- [Epic-Level PIR Design](T02-epic-level-pir-workflow-design.md) - Epic-level design
- [Release Workflow Reference](../Documentation/Developer_Docs/vwmp/release-workflow-reference.md) - RW integration reference

---

_This design document is part of the Workflow Management Framework. See `packages/frameworks/workflow mgt/` for complete framework documentation._
