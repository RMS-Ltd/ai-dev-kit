---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-16T19:00:00Z
expires_at: null
housekeeping_policy: keep
---

# PIR-Versioning Integration Guide

**Version:** 1.0.0
**Last Updated:** 2025-12-16
**Related:** Epic 2, Story 5 - Post-Implementation Review Workflow

---

## 📖 Overview

This guide documents the integration between the Post-Implementation Review (PIR) workflow and the project versioning system. PIR reports use the project versioning schema (RC.EPIC.STORY.TASK+BUILD) for naming, linking, and traceability. **No separate PIR versioning is needed** - PIR reports are project artifacts, not packages.

---

## 🔗 Integration Principles

### 1. Use Project Versioning Schema

**Key Decision:** PIR reports use the project versioning schema (RC.EPIC.STORY.TASK+BUILD), not a separate PIR versioning system.

**Rationale:**
- PIR reports are project artifacts, not packages
- Project versioning provides complete traceability
- Links PIR to specific work items and releases
- Maintains consistency with other project artifacts

### 2. PIR Report Naming Convention

**Epic-Level PIR:**
- Format: `PIR-Epic-{N}-v{version}.md`
- Example: `PIR-Epic-2-v0.2.11.9+3.md`
- Version: Last version in Epic (when Epic marked COMPLETE)

**Story-Level PIR:**
- Format: `PIR-Story-{N}-v{version}.md`
- Example: `PIR-Story-5-v0.2.5.11+1.md`
- Version: Last version in Story (when Story marked COMPLETE)

### 3. Version References in PIR Reports

**Epic-Level PIR:**
- **Version Range:** First version to last version in Epic
- Example: `v0.2.11.1+1` to `v0.2.11.9+3`
- References all Stories and Tasks within Epic

**Story-Level PIR:**
- **Version:** Last version in Story
- Example: `v0.2.5.11+1`
- References all Tasks within Story

---

## 📝 Implementation Pattern

### Step 1: Determine PIR Version

**For Epic-Level:**
```python
# Get Epic version range
epic_first_version = get_first_version_in_epic(epic)
epic_last_version = get_last_version_in_epic(epic)
version_range = f"{epic_first_version} to {epic_last_version}"

# Use last version for PIR report naming
pir_version = epic_last_version
```

**For Story-Level:**
```python
# Get Story last version
story_last_version = get_last_version_in_story(epic, story)
pir_version = story_last_version
```

### Step 2: Generate PIR Report Name

**Epic-Level:**
```python
pir_report_name = f"PIR-Epic-{epic}-v{pir_version}.md"
# Example: PIR-Epic-2-v0.2.11.9+3.md
```

**Story-Level:**
```python
pir_report_name = f"PIR-Story-{story}-v{pir_version}.md"
# Example: PIR-Story-5-v0.2.5.11+1.md
```

### Step 3: Include Version in PIR Report

**Epic-Level PIR Template:**
```markdown
**Epic:** {Epic Name}  
**Status:** COMPLETE  
**Review Date:** {YYYY-MM-DD}  
**Reviewer:** {Name/Username}  
**Version Range:** {First Version} to {Last Version}  
**PIR Version:** 1.0.0
```

**Story-Level PIR Template:**
```markdown
**Story:** {Story Name}  
**Epic:** {Epic Name}  
**Status:** COMPLETE  
**Review Date:** {YYYY-MM-DD}  
**Reviewer:** {Name/Username}  
**Version:** {Version}  
**PIR Version:** 1.0.0
```

### Step 4: Reference Versions in PIR Content

**In Stories Review (Epic-Level):**
```markdown
### Story {N}: {Story Name}
- **Status:** COMPLETE
- **Version:** v0.2.11.{N}.{T}+{B}
- **Goals Achieved:** {Yes/No/Partial}
- **Quality:** {Assessment}
```

**In Tasks Review (Story-Level):**
```markdown
### Task {N}: {Task Name}
- **Status:** COMPLETE
- **Version:** v0.2.5.{N}+{B}
- **Quality:** {Assessment}
```

### Step 5: Link PIR to Work Items Using Versions

**In PIR Report "Related Work" Section:**
```markdown
## Related Work

- **Epic:** [Epic {N} Documentation](../../project-management/kanban/epics/Epic-{N}/Epic-{N}.md) (v{version})
- **Stories:**
  - [Story {N1}](../../project-management/kanban/epics/Epic-{N}/Story-{N1}-*.md) (v{version1})
  - [Story {N2}](../../project-management/kanban/epics/Epic-{N}/Story-{N2}-*.md) (v{version2})
- **Version Range:** {First Version} to {Last Version}
```

---

## 🔧 Version Extraction

### Epic-Level Version Range

**Method:**
1. Read all Story documents in Epic
2. Extract version from each Story document header
3. Determine first and last versions
4. Use last version for PIR report naming

**Example:**
```python
epic_stories = get_stories_in_epic(epic)
versions = [get_story_version(story) for story in epic_stories]
first_version = min(versions)
last_version = max(versions)
version_range = f"{first_version} to {last_version}"
```

### Story-Level Version

**Method:**
1. Read Story document
2. Extract version from Story document header
3. Use this version for PIR report naming

**Example:**
```python
story_doc = read_story_document(epic, story)
story_version = extract_version_from_header(story_doc)
pir_version = story_version
```

---

## 📋 Examples

### Example 1: Epic PIR Versioning

**Epic:** Epic 2 - Workflow Management Framework  
**Stories:** Stories 1-11  
**Version Range:** `v0.2.1.1+1` to `v0.2.11.9+3`  
**PIR Report:** `PIR-Epic-2-v0.2.11.9+3.md`

**PIR Report Header:**
```markdown
**Epic:** Workflow Management Framework  
**Status:** COMPLETE  
**Review Date:** 2025-12-16  
**Reviewer:** AI Agent  
**Version Range:** v0.2.1.1+1 to v0.2.11.9+3  
**PIR Version:** 1.0.0
```

**Stories Review Section:**
```markdown
### Story 1: Release Workflow Agent Execution
- **Status:** COMPLETE
- **Version:** v0.2.1.6+4
- **Goals Achieved:** Yes
- **Quality:** Excellent

### Story 11: Intake Workflow Automation
- **Status:** COMPLETE
- **Version:** v0.2.11.9+3
- **Goals Achieved:** Yes
- **Quality:** Excellent
```

### Example 2: Story PIR Versioning

**Story:** Story 5 - Post-Implementation Review Workflow  
**Epic:** Epic 2  
**Version:** `v0.2.5.11+1`  
**PIR Report:** `PIR-Story-5-v0.2.5.11+1.md`

**PIR Report Header:**
```markdown
**Story:** Post-Implementation Review Workflow  
**Epic:** Workflow Management Framework  
**Status:** COMPLETE  
**Review Date:** 2025-12-16  
**Reviewer:** AI Agent  
**Version:** v0.2.5.11+1  
**PIR Version:** 1.0.0
```

**Tasks Review Section:**
```markdown
### Task 1: Plan PIR workflow structure
- **Status:** COMPLETE
- **Version:** v0.2.5.1+1
- **Quality:** Excellent

### Task 11: Create PIR knowledge base structure
- **Status:** COMPLETE
- **Version:** v0.2.5.11+1
- **Quality:** Excellent
```

---

## ✅ Validation

### Validation Checks

1. **Version Format:**
   - ✅ Version follows RC.EPIC.STORY.TASK+BUILD schema
   - ✅ Version matches Epic/Story version
   - ✅ Version range valid (Epic-level)

2. **PIR Report Naming:**
   - ✅ Report name includes version
   - ✅ Report name follows naming convention
   - ✅ Report name matches version in header

3. **Version References:**
   - ✅ Version included in PIR report header
   - ✅ Versions referenced in Stories/Tasks review
   - ✅ Version range correct (Epic-level)

4. **Traceability:**
   - ✅ PIR linked to Epic/Story using version
   - ✅ Version references enable traceability
   - ✅ Links bidirectional and complete

---

## 🔗 Related Documentation

- [PIR Workflow Agent Execution Guide](pir-workflow-agent-execution.md) - Step 10 and Step 14 documentation
- [PIR Workflow Planning](../../Analysis/PIR-workflow-planning.md) - Versioning integration requirements
- [Versioning Policy](../../../Architecture/standards-and-adrs/versioning-policy.md) - Project versioning schema
- [Versioning Strategy](../../../Architecture/standards-and-adrs/versioning-strategy.md) - Traceability principles

---

## 📌 Key Principles

1. **No Separate PIR Versioning:** PIR reports use project versioning schema
2. **Version-Based Naming:** PIR report names include project version
3. **Version References:** PIR reports reference versions for traceability
4. **Version Range (Epic):** Epic PIRs use version range (first to last)
5. **Single Version (Story):** Story PIRs use single version (last in Story)

---

_This integration guide is part of the Workflow Management Framework. See `packages/frameworks/workflow mgt/` for complete framework documentation._
