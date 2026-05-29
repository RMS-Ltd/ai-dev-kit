---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:01:50Z
expires_at: null
housekeeping_policy: keep
---

# E4:S01:T01 – Gap Analysis Report: Dev-Kit Kanban Policies and Templates vs. Framework

**Status:** IN PROGRESS  
**Owner:** RMS  
**Created:** 2025-12-02  
**Last updated:** 2025-12-02 (v0.4.1.1+1 – initial gap analysis document)  
**Version:** v0.4.1.1+1  
**Code:** E4S01T001

---

## Summary of Gap Analysis

This document compares the `ai-dev-kit`'s local Kanban policy (`docs/project-management/rituals/policy/kanban-governance-policy.md`) and templates with the canonical framework policies (`packages/frameworks/kanban/policies/kanban-governance-policy.md` and templates).

---

## 1. Kanban Governance Policy Comparison

### Framework Policy (`packages/frameworks/kanban/policies/kanban-governance-policy.md`)

**Status:** ✅ **COMPREHENSIVE**  
**Last Updated:** 2025-11-26  
**Scope:** Project-agnostic, portable

**Key Sections:**
- ✅ Purpose and portability notes
- ✅ The Harmonious Cycle (Task → Version → RW → Kanban Update)
- ✅ FR/BR → Task → Story → Epic flow (canonical rule)
- ✅ Board Structure (5 columns)
- ✅ Work Items (Epics, Stories, Tasks)
- ✅ Versioning (RC.EPIC.STORY.TASK+BUILD schema)
- ✅ Task-Level Requirements (CRITICAL section)
- ✅ Release Workflow (10-step process)
- ✅ Documentation requirements
- ✅ Rules (traceability, SoT, gate conditions, numbering, WIP)
- ✅ Templates & References
- ✅ Change History
- ✅ Portability Notes

**Missing/Incomplete Sections:**
- ❌ **Atomic RW behaviour** - Not explicitly documented
- ❌ **"ALL sections" update requirement** - Not explicitly documented
- ❌ **Accessibility constraints** - Not explicitly documented
- ❌ **Forensic marker format requirements** - Mentioned but not standardized
- ❌ **Review schedules** - Not documented
- ❌ **Escalation procedures** - Not documented
- ❌ **Consistency requirements** - Mentioned but not detailed

---

### Dev-Kit Policy (`docs/project-management/rituals/policy/kanban-governance-policy.md`)

**Status:** ⚠️ **PARTIAL**  
**Last Updated:** 2025-12-02  
**Scope:** Dev-kit specific

**Key Sections:**
- ✅ Purpose (dev-kit specific)
- ✅ Board Structure (dev-kit specific, simplified)
- ✅ Work Items (Epics, Stories, Tasks - dev-kit specific)
- ✅ Board Usage Rules
- ✅ Relationship to Framework Package
- ✅ Versioning (references dev-kit versioning policy)
- ✅ Next Steps

**Missing Sections:**
- ❌ **The Harmonious Cycle** - Not documented
- ❌ **FR/BR → Task → Story → Epic flow** - Mentioned but not detailed
- ❌ **Task-Level Requirements** - Not documented
- ❌ **Release Workflow** - Not documented
- ❌ **Documentation requirements** - Not documented
- ❌ **Rules** - Simplified, missing traceability, gate conditions, numbering discipline
- ❌ **Templates & References** - Not documented
- ❌ **Atomic RW behaviour** - Not documented
- ❌ **"ALL sections" update requirement** - Not documented
- ❌ **Accessibility constraints** - Not documented
- ❌ **Forensic marker format** - Not standardized
- ❌ **Review schedules** - Not documented
- ❌ **Escalation procedures** - Not documented

**Gap:** Dev-kit policy is a simplified adaptation but missing critical governance principles from the framework.

---

## 2. Epic Template Comparison

### Framework Template (`packages/frameworks/kanban/templates/EPIC_TEMPLATE.md`)

**Status:** ✅ **COMPREHENSIVE**  
**Structure:**
- ✅ Header metadata (Status, Priority, Effort, Created, Last updated, Branch, Version Schema)
- ✅ Story Checklist
- ✅ Overview
- ✅ Goals
- ✅ Stories (detailed sections)
- ✅ Dependencies
- ✅ Risks & Mitigations
- ✅ References
- ✅ Maintenance Cadence

**Missing/Incomplete:**
- ❌ **Explicit "ALL sections" update requirement** - Not documented in template
- ❌ **Forensic marker format** - Not explicitly documented in template
- ❌ **Consistency check reminders** - Not included

---

### Dev-Kit Epic Usage (Example: `docs/project-management/kanban/epics/Epic-3/Epic-3.md`)

**Status:** ✅ **ALIGNED**  
**Structure:**
- ✅ Header metadata (matches template)
- ✅ Story Checklist
- ✅ Overview
- ✅ Goals
- ✅ Stories (detailed sections)
- ✅ Dependencies
- ✅ References

**Missing:**
- ❌ **Risks & Mitigations** - Not consistently used
- ❌ **Maintenance Cadence** - Not used (not a maintenance epic)
- ❌ **Explicit "ALL sections" update requirement** - Not documented

**Gap:** Dev-kit epics follow the template structure but don't consistently include all optional sections.

---

## 3. Story Template Comparison

### Framework Template (`packages/frameworks/kanban/templates/STORY_TEMPLATE.md`)

**Status:** ✅ **COMPREHENSIVE**  
**Structure:**
- ✅ Header metadata (Status, Priority, Last updated, Effort, Started, Completed, Version, Code)
- ✅ Task Checklist (with forensic marker format example)
- ✅ Overview
- ✅ Goals
- ✅ Tasks (detailed sections with Input, Deliverable, Dependencies, Blocker, Parallel Development Candidacy)
- ✅ Acceptance Criteria
- ✅ Dependencies
- ✅ Completion Summary
- ✅ References
- ✅ Next Actions

**Missing/Incomplete:**
- ❌ **Explicit "ALL sections" update requirement** - Not documented in template
- ❌ **Forensic marker format standardization** - Example shown but not enforced
- ❌ **Consistency check reminders** - Not included

---

### Dev-Kit Story Usage (Example: `docs/project-management/kanban/Story-001-dev-kit-alignment-with-versioning-framework.md`)

**Status:** ✅ **ALIGNED**  
**Structure:**
- ✅ Header metadata (matches template)
- ✅ Task Checklist (with forensic markers)
- ✅ Overview
- ✅ Goal
- ✅ Tasks (detailed sections)
- ✅ Acceptance Criteria
- ✅ Dependencies
- ✅ References

**Missing:**
- ❌ **Completion Summary** - Not consistently used
- ❌ **Next Actions** - Not consistently used
- ❌ **Explicit "ALL sections" update requirement** - Not documented

**Gap:** Dev-kit stories follow the template structure but don't consistently include all optional sections.

---

## 4. Critical Gaps Identified

### Gap 1: Atomic RW Behaviour ❌ **CRITICAL**

**Framework Policy:** ❌ **NOT DOCUMENTED**  
**Dev-Kit Policy:** ❌ **NOT DOCUMENTED**  
**Gap:** ⚠️ **MISSING** - Neither policy explicitly documents that RW must complete all steps or stop with explicit BLOCKED message.

**Impact:** High - Without this, agents may partially update Kanban docs, creating inconsistencies.

**Recommendation:** Add section to framework policy documenting:
- RW must complete all 11 steps or stop with explicit BLOCKED state
- No partial updates allowed
- Clear actionable messages required

---

### Gap 2: "ALL Sections" Update Requirement ❌ **CRITICAL**

**Framework Policy:** ❌ **NOT DOCUMENTED**  
**Dev-Kit Policy:** ❌ **NOT DOCUMENTED**  
**Gap:** ⚠️ **MISSING** - Neither policy explicitly documents that Epic docs must update header, Story Checklist, AND detailed story sections.

**Impact:** High - Without this, RW may update only header, leaving checklist and detailed sections out of sync.

**Recommendation:** Add section to framework policy documenting:
- Epic docs must update ALL sections: header, checklist, detailed story sections
- Story docs must update ALL sections: header, task checklist, detailed task sections
- Systematic process for finding and updating all references

---

### Gap 3: Accessibility Constraints ❌ **CRITICAL**

**Framework Policy:** ❌ **NOT DOCUMENTED**  
**Dev-Kit Policy:** ❌ **NOT DOCUMENTED**  
**Gap:** ⚠️ **MISSING** - Neither policy explicitly documents accessibility constraints (no partial updates, no silent failures, clear actionable messages).

**Impact:** High - Without this, RW may fail silently or provide unclear error messages.

**Recommendation:** Add section to framework policy documenting:
- No partial updates allowed
- No silent failures
- Clear actionable messages required
- Explicit BLOCKED state with reason and next steps

---

### Gap 4: Forensic Marker Format Standardization ⚠️ **HIGH PRIORITY**

**Framework Policy:** ⚠️ **PARTIALLY DOCUMENTED** (examples shown but not standardized)  
**Dev-Kit Policy:** ❌ **NOT DOCUMENTED**  
**Gap:** ⚠️ **INCOMPLETE** - Format is shown in examples but not explicitly standardized.

**Current Usage:**
- Templates show: `✅ COMPLETE (vX.Y.Z.T+B)`
- Dev-kit uses: `✅ COMPLETE (v0.3.1.6+1)`

**Impact:** Medium - Without standardization, different projects may use different formats.

**Recommendation:** Add explicit section to framework policy documenting:
- Canonical format: `✅ COMPLETE (vRC.E.S.T+B)`
- Required components: Status icon, status text, version marker
- Version marker format: `vRC.E.S.T+B` (matches version schema)

---

### Gap 5: Consistency Requirements ⚠️ **HIGH PRIORITY**

**Framework Policy:** ⚠️ **MENTIONED** (in Rules section)  
**Dev-Kit Policy:** ❌ **NOT DOCUMENTED**  
**Gap:** ⚠️ **INCOMPLETE** - Mentioned but not detailed.

**Impact:** Medium - Without detailed consistency requirements, Kanban Board ↔ Epic ↔ Story may drift out of sync.

**Recommendation:** Add explicit section to framework policy documenting:
- Kanban Board ↔ Epic ↔ Story must all align
- Version markers must match across all documents
- Status must match across all documents
- Validation requirements for consistency checks

---

### Gap 6: Review Schedules ❌ **MEDIUM PRIORITY**

**Framework Policy:** ❌ **NOT DOCUMENTED**  
**Dev-Kit Policy:** ❌ **NOT DOCUMENTED**  
**Gap:** ⚠️ **MISSING** - No review schedules documented.

**Impact:** Low - Without review schedules, Kanban docs may become stale.

**Recommendation:** Add section to framework policy documenting:
- Weekly reviews (active epics/stories)
- Monthly reviews (all epics/stories)
- Quarterly reviews (epic health, dependencies)
- As-needed reviews (blockers, escalations)

---

### Gap 7: Escalation Procedures ❌ **MEDIUM PRIORITY**

**Framework Policy:** ❌ **NOT DOCUMENTED**  
**Dev-Kit Policy:** ❌ **NOT DOCUMENTED**  
**Gap:** ⚠️ **MISSING** - No escalation procedures documented.

**Impact:** Low - Without escalation procedures, blockers may persist.

**Recommendation:** Add section to framework policy documenting:
- Level 1: Story owner escalation
- Level 2: Epic owner escalation
- Level 3: Project leadership escalation
- Escalation triggers (blockers >X days, dependencies unresolved, etc.)

---

## 5. Template Gaps

### Epic Template Gaps

**Missing:**
- ❌ Explicit "ALL sections" update requirement note
- ❌ Forensic marker format standardization note
- ❌ Consistency check reminders

**Recommendation:** Add notes to template:
- "When updating this Epic doc via RW, ensure ALL sections are updated: header, Story Checklist, and detailed Story sections."
- "Use forensic marker format: `✅ COMPLETE (vRC.E.S.T+B)`"
- "Validate consistency: header, checklist, and detailed sections must all match."

---

### Story Template Gaps

**Missing:**
- ❌ Explicit "ALL sections" update requirement note
- ❌ Forensic marker format standardization note
- ❌ Consistency check reminders

**Recommendation:** Add notes to template:
- "When updating this Story doc via RW, ensure ALL sections are updated: header, Task Checklist, and detailed Task sections."
- "Use forensic marker format: `✅ COMPLETE (vRC.E.S.T+B)`"
- "Validate consistency: header, checklist, and detailed sections must all match."

---

## 6. Dev-Kit Policy Gaps

### Missing Framework Principles

**Dev-Kit Policy Missing:**
- ❌ The Harmonious Cycle
- ❌ FR/BR → Task → Story → Epic flow (detailed)
- ❌ Task-Level Requirements
- ❌ Release Workflow documentation
- ❌ Documentation requirements
- ❌ Rules (traceability, gate conditions, numbering discipline)
- ❌ Templates & References

**Recommendation:** Dev-kit policy should:
- Reference framework policy as SoT
- Document dev-kit-specific adaptations
- Link to framework for detailed explanations

---

## 7. Alignment Strengths

### ✅ What's Aligned

1. **Version Schema:** Both use `RC.EPIC.STORY.TASK+BUILD`
2. **Work Item Structure:** Both use Epic → Story → Task hierarchy
3. **Template Structure:** Dev-kit epics/stories follow framework templates
4. **FR/BR → Task Flow:** Both document that FRs/BRs become Tasks
5. **Board Structure:** Both use consolidated Kanban directory structure

---

## 8. Conclusion and Recommendations

### High Priority Recommendations

1. **Add Atomic RW Behaviour Section** to framework policy:
   - RW must complete all 11 steps or stop with explicit BLOCKED state
   - No partial updates allowed
   - Clear actionable messages required

2. **Add "ALL Sections" Update Requirement** to framework policy:
   - Epic docs must update header, Story Checklist, AND detailed story sections
   - Story docs must update header, Task Checklist, AND detailed task sections
   - Systematic process for finding and updating all references

3. **Add Accessibility Constraints Section** to framework policy:
   - No partial updates allowed
   - No silent failures
   - Clear actionable messages required
   - Explicit BLOCKED state with reason and next steps

4. **Standardize Forensic Marker Format** in framework policy:
   - Canonical format: `✅ COMPLETE (vRC.E.S.T+B)`
   - Required components documented
   - Version marker format matches version schema

5. **Add Consistency Requirements Section** to framework policy:
   - Kanban Board ↔ Epic ↔ Story must all align
   - Version markers must match across all documents
   - Status must match across all documents
   - Validation requirements for consistency checks

### Medium Priority Recommendations

6. **Add Review Schedules Section** to framework policy:
   - Weekly, monthly, quarterly review cadences
   - As-needed review triggers

7. **Add Escalation Procedures Section** to framework policy:
   - Level 1-3 escalation paths
   - Escalation triggers

8. **Enhance Templates** with:
   - "ALL sections" update requirement notes
   - Forensic marker format standardization notes
   - Consistency check reminders

9. **Enhance Dev-Kit Policy** to:
   - Reference framework policy as SoT
   - Document dev-kit-specific adaptations
   - Link to framework for detailed explanations

---

## 9. Next Steps for T002

The next task (E4:S01:T02) should:
1. Review fynd.deals Epic 15 Kanban documentation
2. Extract reusable patterns (especially atomic RW behaviour, "ALL sections" rule, accessibility constraints)
3. Document findings and recommendations
4. Prepare for T003 (Update dev-kit Kanban governance policy as canonical SoT)

---

**Last Updated:** 2025-12-02  
**Next Task:** E4:S01:T02 – Ingest findings from fynd.deals Epic 15 Kanban work

