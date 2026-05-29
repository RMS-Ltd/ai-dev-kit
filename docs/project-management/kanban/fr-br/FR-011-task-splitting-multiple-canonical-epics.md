---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-10T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Feature Request: Task Splitting Across Multiple Canonical Epics

**Type:** Feature Request (FR)  
**Submitted:** 2025-12-10  
**Submitted By:** AI Agent (Cursor) acting as user/client for dev-toolkit  
**Priority:** MEDIUM  
**Status:** PENDING  
**Version:** v0.4.8.7+2  

**Implementing Task:** [E4:S08:T07](../epics/Epic-4/Story-008-intelligent-epic-matching-canonical-adoption/T07-task-splitting-across-multiple-canonical-epics-fr-011.md)
**GitHub Issue:** [#7](https://github.com/earlution/ai-dev-kit/issues/7) (Additional Context Comment)

---

## Summary

Enhance intelligent task mapping to support splitting user tasks across multiple canonical epics when a user epic partially matches multiple canonical epics, enabling optimal organization.

---

## Description

### What functionality is desired?

**Task Splitting Capability:**

When a user epic partially matches multiple canonical epics, intelligently split user tasks across the matching canonical epics based on task content analysis.

**Example Scenario:**
- User Epic 3: "Versioning & Release Workflow"
- Partial matches:
  - Canonical Epic 3: "Versioning Framework" (65% similarity)
  - Canonical Epic 2: "Workflow Management Framework" (55% similarity)

- **Solution:** Split tasks intelligently
  - Versioning tasks → Canonical Epic 3
  - Workflow tasks → Canonical Epic 2


### What problem does this solve?

**Current Problem:**
- Migration only maps to "best" match (single canonical epic)
- User epic with multiple partial matches gets mapped to only one canonical epic
- Tasks may end up in sub-optimal location if epic has mixed responsibilities
- No support for splitting tasks across multiple canonical epics

**This Feature Solves:**
- **Optimal Organization:** Tasks placed in correct canonical epics based on content
- **Intelligent Splitting:** AI analyzes task content to determine best canonical epic
- **Better Structure:** Leverages canonical structure fully even for mixed-responsibility epics

### What is the use case?

**Primary Use Case:** Bob has Epic 3: "Versioning & Release Workflow" with tasks:
- T01: "Implement versioning schema" → Maps to Canonical Epic 3 (Versioning)
- T02: "Create release workflow" → Maps to Canonical Epic 2 (Workflow)
- T03: "Version bump automation" → Maps to Canonical Epic 3 (Versioning)

**Result:** Tasks intelligently split across appropriate canonical epics for optimal organization.

### Who would benefit from this feature?

- **Users with mixed-responsibility epics** - Get optimal task placement
- **Projects adopting canonical structure** - Better organization through intelligent splitting
- **AI agents** - Can automate task splitting based on content analysis

---

## Requirements

### Functional Requirements

- [ ] **FR-1:** System SHALL detect when user epic partially matches multiple canonical epics
- [ ] **FR-2:** System SHALL analyze task content to determine best canonical epic match
- [ ] **FR-3:** System SHALL split tasks across multiple canonical epics when appropriate
- [ ] **FR-4:** System SHALL generate migration plan showing task splits
- [ ] **FR-5:** System SHALL update task IDs based on split mapping
- [ ] **FR-6:** System SHALL update references for split tasks

### Non-Functional Requirements

- [ ] **Intelligence:** Task splitting should be contextually aware and accurate
- [ ] **Transparency:** Migration plan must clearly show split rationale
- [ ] **Usability:** User should be able to review and confirm splits

---

## Scope Analysis

**Problem Domain:** Kanban Framework Migration - Intelligent Task Splitting  
**Affected Areas:**
- [x] Migration Process
- [x] Task Mapping
- [x] Content Analysis
- [x] Reference Updating
- [ ] Backend/API
- [ ] Frontend/UI
- [ ] Database/Schema
- [ ] Integration/External Service

**Estimated Complexity:** Medium-High (Requires task-level content analysis and multi-epic mapping)

---

## Acceptance Criteria

- [ ] **AC-1:** System detects multiple partial matches for user epic
- [ ] **AC-2:** Task content analyzed to determine best canonical epic match
- [ ] **AC-3:** Tasks split across appropriate canonical epics
- [ ] **AC-4:** Migration plan shows split rationale and mappings
- [ ] **AC-5:** Task IDs updated correctly for split tasks
- [ ] **AC-6:** References updated for split tasks

---

## Dependencies

**Blocks:**
- Optimal task placement for mixed-responsibility epics
- Enhanced intelligent migration

**Blocked By:**
- FR-009: Intelligent Epic Matching (provides foundation for task splitting)

**Related Work:**
- **FR-009:** Intelligent Epic Matching and AI-Assisted Canonical Structure Adoption (Issue #7)
- **GitHub Issue #7:** Additional Context Comment - Detailed User Decision Scenarios (Scenario 2)

---

## Intake Decision

**Intake Status:** PENDING  
**Intake Date:** [TBD]  
**Intake By:** [TBD]

**Decision Flow Results:**
- [ ] Story Match: [TBD]
- [ ] New Story Created: [TBD]
- [ ] New Epic Created: [TBD]

**Assigned To:**
- Epic: 4
- Story: 8
- Task: E4:S08:T07
- Version: `v0.4.8.7+2`

---

## Notes

This feature request was identified from additional context provided in GitHub Issue #7 comments (Scenario 2: Partial Match).

**Current Implementation Status:**
- ✅ Basic semantic matching implemented
- ✅ Single best match mapping implemented
- ⚠️ Task splitting across multiple canonical epics - NOT YET IMPLEMENTED

**Enhancement Needed:**
- Analyze task content (not just epic content) for canonical epic matching
- Support multiple canonical epic matches per user epic
- Split tasks intelligently based on task-level content analysis

---

## References

- **FR-009:** Intelligent Epic Matching and AI-Assisted Canonical Structure Adoption (Issue #7)
- **GitHub Issue #7:** Additional Context Comment - Detailed User Decision Scenarios (Scenario 2)
- **Migration Script:** `packages/frameworks/kanban/scripts/migrate_structure.py`
- **Semantic Matcher:** `packages/frameworks/kanban/scripts/semantic_matcher.py`

---

_This feature request is part of the Kanban Framework. See `packages/frameworks/kanban/` for complete framework documentation._

