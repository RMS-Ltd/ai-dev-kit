---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-16T16:30:00Z
expires_at: null
housekeeping_policy: keep
related_story: E2:S05
related_task: E2:S05:T02
---

# E2:S05:T02 – Epic-Level PIR Workflow Design

**Epic:** Epic 2 (Workflow Management Framework)  
**Story:** Story 5 (Post-Implementation Review Workflow)  
**Task:** Task 2 (Design Epic-level PIR workflow)  
**Version:** v0.2.5.2+0

---

## Overview

This document designs the Epic-level Post-Implementation Review (PIR) workflow, providing comprehensive review of completed Epics including all Stories, goals assessment, technical evaluation, lessons learned capture, and knowledge preservation. The design follows established patterns from Release Workflow (RW) and integrates seamlessly with Kanban, versioning, and knowledge base systems.

---

## Design Principles

1. **Comprehensive Coverage:** Review all aspects of Epic completion including Stories, goals, technical decisions, and outcomes
2. **Knowledge Preservation:** Capture lessons learned, patterns, and anti-patterns for future reference
3. **Actionable Outcomes:** Generate follow-up tasks and recommendations from review findings
4. **Integration First:** Seamlessly integrate with Kanban, versioning, RW, and knowledge base
5. **Structured Approach:** Follow consistent phases and steps for reliable, repeatable reviews
6. **Agent-Driven Execution:** Use ANALYZE → DETERMINE → EXECUTE → VALIDATE → PROCEED pattern

---

## Epic-Level Review Scope

### Objectives

**Primary Objectives:**
- Assess Epic goal achievement and overall success
- Review all Stories within the Epic for completeness and quality
- Evaluate cross-Story dependencies and coordination
- Identify Epic-level lessons learned and patterns
- Capture knowledge for future Epics
- Generate actionable follow-up items

**Review Scope Includes:**
- All Stories within the Epic (completed and in-progress)
- Epic goals and acceptance criteria
- Cross-Story dependencies and coordination
- Technical architecture decisions
- Resource utilization and timeline
- Quality metrics and standards compliance
- Documentation completeness
- Integration points with other Epics

---

## Workflow Phases and Steps

### Phase 1: Preparation

#### Step 1: Identify Epic and Gather Context

**Purpose:** Establish Epic identity and gather initial context

**Actions:**
1. Read Epic document to identify Epic number, name, and status
2. Verify Epic status is COMPLETE
3. Gather Epic metadata (creation date, completion date, version range)
4. Identify all Stories within Epic
5. Collect Epic goals and acceptance criteria

**Deliverables:**
- Epic identification (number, name, version range)
- Story list with status
- Epic goals and acceptance criteria

---

#### Step 2: Gather Review Materials

**Purpose:** Collect all materials needed for comprehensive review

**Materials to Gather:**
- Epic document (`docs/project-management/kanban/epics/Epic-{N}/Epic-{N}.md`)
- All Story documents within Epic
- All Task documents within Stories
- Changelog entries for Epic version range
- Related BR/FR documents
- Architecture decision records (if any)
- Documentation created/updated during Epic

**Deliverables:**
- Complete set of Epic-related documents
- Version range documentation
- Related work items list

---

#### Step 3: Prepare Review Checklist

**Purpose:** Create structured checklist based on Epic template

**Checklist Sections:**
- [ ] Epic goals assessment
- [ ] Stories review (all Stories)
- [ ] Technical assessment
- [ ] Documentation assessment
- [ ] Lessons learned identification
- [ ] Patterns and anti-patterns identification
- [ ] Follow-up actions identification

**Deliverables:**
- Completed review checklist
- Review template populated with Epic context

---

### Phase 2: Analysis

#### Step 4: Review Completed Stories

**Purpose:** Assess each Story within Epic for completion and quality

**For Each Story:**
- Review Story goals and acceptance criteria
- Assess goal achievement (Achieved/Partially Achieved/Not Achieved)
- Review Task completion status
- Evaluate Story quality (Excellent/Good/Satisfactory/Needs Improvement)
- Identify notable achievements
- Document issues encountered

**Deliverables:**
- Story-by-Story assessment
- Quality ratings for each Story
- Achievement status for each Story

---

#### Step 5: Analyze Goals vs Outcomes

**Purpose:** Compare Epic goals with actual outcomes

**Analysis Areas:**
- Goal 1: Status and assessment
- Goal 2: Status and assessment
- Goal 3: Status and assessment
- Overall Epic goal achievement
- Evidence and metrics supporting assessment

**Deliverables:**
- Goals assessment with status
- Evidence and metrics
- Overall Epic success assessment

---

#### Step 6: Review Technical Implementation

**Purpose:** Evaluate technical decisions, code quality, and architecture

**Technical Assessment Areas:**

**Architecture Decisions:**
- Key decisions made during Epic
- Rationale for each decision
- Impact on project

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
- Architecture decisions log
- Code quality assessment
- Documentation assessment
- Testing assessment

---

### Phase 3: Reflection

#### Step 7: Identify Lessons Learned

**Purpose:** Capture what went well and what could be improved

**Lessons Learned Categories:**

**What Went Well:**
- Items that worked well and why
- Successful patterns or approaches
- Effective coordination or processes

**What Could Be Improved:**
- Items that could be improved and how
- Process improvements needed
- Coordination improvements

**Deliverables:**
- Lessons learned list (what went well)
- Improvement opportunities list
- Rationale for each item

---

#### Step 8: Identify Patterns and Anti-Patterns

**Purpose:** Document reusable patterns and anti-patterns to avoid

**Pattern Identification:**
- Patterns that emerged during Epic
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

#### Step 9: Create Epic PIR Report

**Purpose:** Generate comprehensive Epic PIR report using template

**Report Structure:**
- Executive summary
- Goals assessment
- Stories review
- Technical assessment
- Lessons learned
- Patterns and anti-patterns
- Follow-up actions
- Knowledge capture
- Metrics

**Report Location:**
- `docs/Reviews/pir/Epic-{N}/PIR-Epic-{N}-v{version}.md`

**Deliverables:**
- Complete Epic PIR report
- Report saved to KB structure

---

#### Step 10: Update Knowledge Base

**Purpose:** Integrate PIR findings into knowledge base

**KB Updates:**
- Store PIR report in KB structure
- Create/update PIR index
- Link PIR to Epic document
- Cross-reference related PIRs

**Deliverables:**
- PIR report stored in KB
- KB index updated
- Cross-references established

---

#### Step 11: Update Kanban Documentation

**Purpose:** Update Epic document with PIR summary and links

**Kanban Updates:**
- Add PIR summary to Epic document
- Link Epic document to PIR report (bidirectional)
- Update Epic status if needed
- Add PIR completion marker

**Deliverables:**
- Epic document updated with PIR summary
- Bidirectional links established
- Status updated

---

#### Step 12: Auto-Create Follow-Up Tasks

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

#### Step 13: Link PIR to Work Items

**Purpose:** Establish traceability links using project versioning

**Linking:**
- Link PIR to Epic (using Epic version range)
- Link PIR to Stories (using Story versions)
- Link PIR to Tasks (using Task versions)
- Reference project versions in PIR report

**Deliverables:**
- All work items linked to PIR
- Version references established
- Traceability complete

---

#### Step 14: Archive Review Materials

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

### Epic Goal Achievement Criteria

**Achieved:**
- All Epic goals met
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

**Epic Quality Assessment:**
- **Excellent:** All Stories complete, high quality, goals achieved, minimal issues
- **Good:** Most Stories complete, good quality, goals mostly achieved, minor issues
- **Satisfactory:** Stories complete, acceptable quality, goals partially achieved, some issues
- **Needs Improvement:** Stories incomplete or low quality, goals not achieved, significant issues

**Metrics to Track:**
- Stories completed: {Count} / {Total}
- Tasks completed: {Count} / {Total}
- Versions released: {Count}
- Duration: {Start Date} to {End Date}
- Time to completion: {Duration}

---

## Epic PIR Checklist

### Preparation
- [ ] Epic identified and context gathered
- [ ] Review materials collected
- [ ] Review checklist prepared

### Analysis
- [ ] All Stories reviewed
- [ ] Goals vs outcomes analyzed
- [ ] Technical implementation reviewed

### Reflection
- [ ] Lessons learned identified
- [ ] Patterns identified
- [ ] Anti-patterns identified

### Documentation
- [ ] Epic PIR report created
- [ ] Knowledge base updated
- [ ] Kanban documentation updated
- [ ] Follow-up tasks created

### Integration
- [ ] PIR linked to work items
- [ ] Review materials archived

---

## Epic PIR Report Structure

The Epic PIR report follows the template structure:

1. **Executive Summary** - One paragraph overview
2. **Goals Assessment** - Goal-by-goal status and assessment
3. **Stories Review** - Review of each Story
4. **Technical Assessment** - Architecture, code quality, documentation, testing
5. **Lessons Learned** - What went well, improvements, patterns, anti-patterns
6. **Follow-Up Actions** - Actionable items from review
7. **Knowledge Capture** - Best practices and lessons for future
8. **Metrics** - Duration, completion counts, versions

---

## Integration Points

### Release Workflow (RW) Integration

**Trigger:** RW Step 15 (or appropriate step) checks for Epic COMPLETE status
- Deterministic check: Read Epic status from Kanban document
- If COMPLETE, trigger Epic PIR workflow
- RW continues after PIR trigger (non-blocking)

### Kanban Integration

**Updates:**
- Epic document updated with PIR summary
- Bidirectional links (Epic ↔ PIR)
- Follow-up tasks created in Kanban
- Status tracking

### Versioning Integration

**Linking:**
- PIR report uses project versioning schema
- Links to Epic version range
- References Story and Task versions
- No separate PIR versioning needed

### Knowledge Base Integration

**Storage:**
- PIR reports stored in `docs/Reviews/pir/Epic-{N}/`
- Indexed for searchability
- Cross-referenced with related PIRs
- Linked to Epic and Stories

---

## Success Criteria

**Epic PIR Workflow is successful when:**
- ✅ Epic PIR report created and stored
- ✅ All Stories reviewed and assessed
- ✅ Goals vs outcomes analyzed
- ✅ Lessons learned captured
- ✅ Patterns and anti-patterns identified
- ✅ Follow-up tasks created
- ✅ Epic document updated with PIR summary
- ✅ All work items linked bidirectionally
- ✅ Knowledge preserved for future reference

---

## Related Documentation

- [PIR Workflow Planning](PIR-workflow-planning.md) - Complete planning document
- [Epic PIR Template](../../../docs/documentation/templates/epic-pir-template.md) - Epic PIR template
- [PIR Workflow YAML](../../workflows/pir-workflow.yaml) - Workflow definition
- [Release Workflow Reference](../Documentation/Developer_Docs/vwmp/release-workflow-reference.md) - RW integration reference

---

_This design document is part of the Workflow Management Framework. See `packages/frameworks/workflow mgt/` for complete framework documentation._
