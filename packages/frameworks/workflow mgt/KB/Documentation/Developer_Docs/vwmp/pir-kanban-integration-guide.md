---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-16T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# PIR-Kanban Integration Guide

**Version:** 1.0.0
**Last Updated:** 2025-12-16
**Related:** Epic 2, Story 5 - Post-Implementation Review Workflow

---

## 📖 Overview

This guide documents the integration between the Post-Implementation Review (PIR) workflow and the Kanban system. It covers how PIR reports are linked to Epic/Story documents, how PIR summaries are added to Kanban documents, and how follow-up tasks are created from PIR findings.

---

## 🔗 Integration Points

### 1. PIR Status Tracking

**Purpose:** Track PIR completion status in Kanban documents

**Epic Document:**
```markdown
## Post-Implementation Review

**PIR Status:** Complete  
**PIR Date:** 2025-12-16  
**PIR Version:** v0.2.11.9+3  
**PIR Report:** [PIR-Epic-2-v0.2.11.9+3.md](../../Reviews/pir/Epic-2/PIR-Epic-2-v0.2.11.9+3.md)

### Summary
[One paragraph summary of PIR findings]

### Key Findings
- [Finding 1]
- [Finding 2]
- [Finding 3]
```

**Story Document:**
```markdown
## Post-Implementation Review

**PIR Status:** Complete  
**PIR Date:** 2025-12-16  
**PIR Version:** v0.2.5.11+1  
**PIR Report:** [PIR-Story-5-v0.2.5.11+1.md](../../Reviews/pir/Story-5/PIR-Story-5-v0.2.5.11+1.md)

### Summary
[One paragraph summary of PIR findings]

### Key Findings
- [Finding 1]
- [Finding 2]
```

### 2. Bidirectional Linking

**Epic/Story Document → PIR Report:**
- Epic/Story document contains link to PIR report
- Link format: `[PIR-Epic-{N}-v{version}.md](../../Reviews/pir/Epic-{N}/PIR-Epic-{N}-v{version}.md)`
- Link format: `[PIR-Story-{N}-v{version}.md](../../Reviews/pir/Story-{N}/PIR-Story-{N}-v{version}.md)`

**PIR Report → Epic/Story Document:**
- PIR report contains link back to Epic/Story document
- Link format: `[Epic {N} Documentation](../../project-management/kanban/epics/Epic-{N}/Epic-{N}.md)`
- Link format: `[Story {N} Documentation](../../project-management/kanban/epics/Epic-{N}/Story-{N}-{name}.md)`

### 3. PIR Summary Section

**Location:** Added after main content, before "Related Work" or at end of document

**Structure:**
- PIR Status (Complete/Pending/Skipped)
- PIR Date
- PIR Version (project version)
- PIR Report link
- Executive Summary (one paragraph)
- Key Findings (bullet list)

### 4. Follow-Up Task Creation

**Purpose:** Auto-create Kanban tasks from PIR findings

**Source:** PIR report "Follow-Up Actions" section

**Task Format:**
```markdown
- [ ] **Action 1:** {Description}
  - **Priority:** {High/Medium/Low}
  - **Owner:** {Assigned to}
  - **Related Work:** {Link to related Epic/Story/Task}
  - **PIR Reference:** [PIR Report](../../Reviews/pir/...)
```

**Task Location:**
- Added to appropriate Epic/Story Task Checklist
- Linked bidirectionally to PIR report
- Assigned priority based on PIR assessment

---

## 📝 Implementation Pattern

### Step 1: Read PIR Report

**For Epic-Level:**
```python
pir_report_path = f"docs/Reviews/pir/Epic-{epic}/PIR-Epic-{epic}-v{version}.md"
pir_report = read_file(pir_report_path)
```

**For Story-Level:**
```python
pir_report_path = f"docs/Reviews/pir/Story-{story}/PIR-Story-{story}-v{version}.md"
pir_report = read_file(pir_report_path)
```

### Step 2: Extract PIR Summary

**Extract from PIR Report:**
- Executive Summary section
- Key Findings section
- Follow-Up Actions section

### Step 3: Update Epic/Story Document

**Add PIR Summary Section:**
```python
pir_section = f"""
## Post-Implementation Review

**PIR Status:** Complete  
**PIR Date:** {review_date}  
**PIR Version:** {version}  
**PIR Report:** [PIR-Epic-{epic}-v{version}.md](../../Reviews/pir/Epic-{epic}/PIR-Epic-{epic}-v{version}.md)

### Summary
{executive_summary}

### Key Findings
{key_findings}
"""
```

**Insert into Epic/Story Document:**
- Find insertion point (after main content, before "Related Work")
- Insert PIR summary section
- Preserve document structure

### Step 4: Create Bidirectional Links

**Update Epic/Story Document:**
- Add link to PIR report (already in PIR summary section)

**Update PIR Report:**
- Add "Related Work" section if missing
- Add link to Epic/Story document
- Add links to related Stories/Tasks

### Step 5: Create Follow-Up Tasks

**Extract Follow-Up Actions:**
```python
follow_up_actions = extract_follow_up_actions(pir_report)
```

**For Each Action:**
- Create Kanban task document or add to Task Checklist
- Assign priority (High/Medium/Low)
- Link to PIR report
- Link to related work items

---

## 🔧 Script Implementation

### PIR Kanban Update Script

**Location:** `packages/frameworks/workflow mgt/scripts/update_pir_kanban.py`

**Purpose:** Update Kanban documents with PIR information

**Usage:**
```bash
python packages/frameworks/workflow mgt/scripts/update_pir_kanban.py \
  --epic {epic} \
  --story {story} \
  --version {version} \
  --pir-report {path} \
  [--dry-run]
```

**Functions:**
- `update_epic_with_pir()` - Update Epic document with PIR summary
- `update_story_with_pir()` - Update Story document with PIR summary
- `create_follow_up_tasks()` - Create Kanban tasks from PIR findings
- `link_pir_bidirectionally()` - Establish bidirectional links

---

## 📋 Examples

### Example 1: Epic PIR Integration

**Epic:** Epic 2 - Workflow Management Framework  
**Version:** v0.2.11.9+3  
**PIR Report:** `docs/Reviews/pir/Epic-2/PIR-Epic-2-v0.2.11.9+3.md`

**Epic Document Update:**
```markdown
## Post-Implementation Review

**PIR Status:** Complete  
**PIR Date:** 2025-12-16  
**PIR Version:** v0.2.11.9+3  
**PIR Report:** [PIR-Epic-2-v0.2.11.9+3.md](../../Reviews/pir/Epic-2/PIR-Epic-2-v0.2.11.9+3.md)

### Summary
Epic 2 successfully delivered the Workflow Management Framework with comprehensive workflow definitions, agent execution guides, and integration patterns. All 11 Stories were completed successfully, with high-quality documentation and reusable templates.

### Key Findings
- All Stories completed successfully with high quality
- Comprehensive documentation created (workflow YAML, execution guides, templates)
- Strong integration patterns established (RW, Kanban, Versioning)
- Reusable templates and patterns identified for future Epics
```

### Example 2: Story PIR Integration

**Story:** Story 5 - Post-Implementation Review Workflow  
**Version:** v0.2.5.11+1  
**PIR Report:** `docs/Reviews/pir/Story-5/PIR-Story-5-v0.2.5.11+1.md`

**Story Document Update:**
```markdown
## Post-Implementation Review

**PIR Status:** Complete  
**PIR Date:** 2025-12-16  
**PIR Version:** v0.2.5.11+1  
**PIR Report:** [PIR-Story-5-v0.2.5.11+1.md](../../Reviews/pir/Story-5/PIR-Story-5-v0.2.5.11+1.md)

### Summary
Story 5 successfully delivered the Post-Implementation Review workflow with comprehensive templates, execution guides, and integration with RW and Kanban systems. All 15 tasks were completed successfully.

### Key Findings
- PIR workflow YAML created with 16 steps
- Comprehensive templates for Epic and Story reviews
- Agent execution guide following RW pattern
- Successful integration with RW (Step 15) and Kanban system
```

### Example 3: Follow-Up Task Creation

**PIR Finding:** "Document PIR workflow usage patterns"

**Created Task:**
```markdown
- [ ] **E2:S05:T15 – Create PIR usage guide and examples** - TODO
  - **Priority:** Medium
  - **Owner:** TBD
  - **Related Work:** [Story 5](../../Story-005-post-implementation-review-workflow.md)
  - **PIR Reference:** [PIR-Story-5-v0.2.5.11+1.md](../../Reviews/pir/Story-5/PIR-Story-5-v0.2.5.11+1.md)
```

---

## ✅ Validation

### Validation Checks

1. **PIR Summary Added:**
   - ✅ PIR summary section exists in Epic/Story document
   - ✅ PIR status, date, version, and report link present
   - ✅ Executive summary and key findings included

2. **Bidirectional Links:**
   - ✅ Epic/Story document links to PIR report
   - ✅ PIR report links to Epic/Story document
   - ✅ Links are valid and accessible

3. **Follow-Up Tasks:**
   - ✅ Follow-up tasks created from PIR findings
   - ✅ Tasks linked to PIR report
   - ✅ Priority assigned correctly

4. **Document Structure:**
   - ✅ Epic/Story document structure preserved
   - ✅ PIR summary section properly formatted
   - ✅ No duplicate sections

---

## 🔗 Related Documentation

- [PIR Workflow Agent Execution Guide](pir-workflow-agent-execution.md) - Step 12 documentation
- [PIR Workflow Planning](../../Analysis/PIR-workflow-planning.md) - Integration requirements
- [Kanban Governance Policy](../../../project-management/rituals/policy/kanban-governance-policy.md) - Kanban structure
- [Bidirectional Wiring Principle](../../../project-management/kanban/fr-br/BIDIRECTIONAL_WIRING_PRINCIPLE.md) - Linking patterns

---

_This integration guide is part of the Workflow Management Framework. See `packages/frameworks/workflow mgt/` for complete framework documentation._
