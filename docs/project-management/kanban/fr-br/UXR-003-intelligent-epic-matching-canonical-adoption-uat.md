---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-10T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# User Experience Research: Intelligent Epic Matching and Canonical Structure Adoption

**Type:** User Experience Research (UXR)  
**Submitted:** 2025-12-10  
**Submitted By:** AI Agent (Cursor) acting as user/client for dev-toolkit  
**Priority:** HIGH  
**Status:** ACCEPTED  
**GitHub Issue:** [#8](https://github.com/earlution/ai-dev-kit/issues/8)  
**Repository Task:** [E7:S00:T03](../epics/Epic-7/Story-000-uxr-repo/T03-uxr-003-repository-anchor.md)  
**Implementation (synthesis):** [E7:S05:T03](../epics/Epic-7/Story-005-migration-uxr-research.md) — see Story 5 **T03**

---

## Summary

UAT findings from analyzing the Kanban migration process reveal critical gaps in epic matching intelligence and task migration capabilities. The current process only detects number conflicts, not semantic matches, and lacks intelligent task mapping. This results in sub-optimal organization when users preserve task IDs while adding canonical epics.

---

## Research Objective

**Primary Question:** How should the Kanban framework handle epic conflicts and task migration to enable optimal organizational structure adoption?

**Secondary Questions:**
1. Should the framework detect semantic matches (same purpose, different names) or only number conflicts?
2. How should user tasks be mapped to canonical structure?
3. Should "preserve task IDs" or "adopt canonical structure" be the recommended default?
4. What is the impact of sub-optimal organization (preserving old structure + adding canonical)?

---

## Methodology

**Research Method:** Design Decision Analysis + UAT Scenario Testing  
**Participants:** AI Agent (Cursor) acting as user/client for dev-toolkit project  
**Duration:** Extended analysis session (2025-12-10)  
**Tools/Platforms:** Cursor IDE, Design Decision Analysis, Migration Process Review

**Research Details:**
- **Scenario:** Analyzing migration process for projects with existing Kanban structures
- **Focus:** Epic matching intelligence, task migration, organizational quality
- **Observation:** Current process lacks semantic analysis and intelligent task mapping
- **Documentation:** Comprehensive design decision analysis created

---

## Key Findings

**Finding 1: Current Process Only Detects Number Conflicts**
- **Observation:** Migration process detects epic number conflicts (Epic 1 vs Epic 1) but not semantic matches (same purpose, different names)
- **Impact:** Users miss opportunities to merge semantically matching epics, leading to duplication
- **Evidence:** `packages/frameworks/kanban/scripts/detect_existing_structure.py` only checks epic numbers, not content

**Finding 2: No Intelligent Task Mapping**
- **Observation:** Migration process preserves tasks in original epics or renumbers them, but doesn't map them to appropriate canonical epics/stories
- **Impact:** Tasks may end up in wrong canonical epics, reducing organizational quality
- **Evidence:** `packages/frameworks/kanban/scripts/migrate_structure.py` migrates tasks but doesn't analyze content for best-fit mapping

**Finding 3: Sub-Optimal Organization from Preserving IDs**
- **Observation:** Preserving task IDs while adding canonical epics creates two sets of epics (user epics + canonical epics), causing cognitive drag
- **Impact:** Users experience confusion about which epics to use, unclear boundaries, ongoing maintenance burden
- **Evidence:** Design decision analysis identified organizational debt from sub-optimal structure

**Finding 4: Canonical Structure Incorporates Best Practices**
- **Observation:** Canonical structure has evolved through real-world use in multiple projects (ai-dev-kit, fynd.deals, confidentia, etc.)
- **Impact:** Adopting canonical structure provides proven organizational patterns
- **Evidence:** `packages/frameworks/kanban/templates/COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md` reflects real-world patterns

**Finding 5: AI Agents Can Handle Intelligent Migration**
- **Observation:** AI agents can analyze content, map tasks intelligently, and update references automatically
- **Impact:** Users can adopt canonical structure with minimal manual effort
- **Evidence:** Design decision analysis shows AI-assisted migration is feasible and valuable

**Finding 6: Some Renumbering is Almost Inevitable**
- **Observation:** When epic numbers conflict, some renumbering is necessary regardless of approach
- **Impact:** Better to do renumbering intelligently with AI assistance than preserve sub-optimal structure
- **Evidence:** Design decision analysis shows renumbering is manageable with intelligent migration

---

## User Pain Points

- **Organizational Confusion:** Two sets of epics (user + canonical) create unclear boundaries
- **Cognitive Drag:** Sub-optimal organization requires ongoing mental effort to navigate
- **Missed Opportunities:** Semantic matches not detected, leading to duplicate epics
- **Manual Migration Effort:** No intelligent task mapping, requiring manual placement
- **Reference Management:** Task ID changes require manual reference updating

---

## Recommendations

1. **Implement Semantic Epic Matching (HIGH PRIORITY):** Analyze epic content to detect semantic matches, not just number conflicts
2. **Implement Intelligent Task Mapping (HIGH PRIORITY):** Map user tasks to appropriate canonical epics/stories based on content analysis
3. **Make "Adopt Canonical Structure" the Default (HIGH PRIORITY):** Recommend canonical adoption with AI-assisted migration
4. **Implement Automatic Reference Updating (MEDIUM PRIORITY):** Update task ID references automatically where possible
5. **Implement Dynamic Epic Numbering (MEDIUM PRIORITY):** Install canonical epics at next available number (not hardcoded)
6. **Provide Migration Plans with Recommendations (MEDIUM PRIORITY):** Present clear migration plans with rationale

---

## Affected Areas

**Affected Components:**
- [x] Migration Process
- [x] Epic Analysis
- [x] Task Mapping
- [x] Reference Updating
- [x] User Interface
- [x] Documentation

**Specific Areas:**
- `packages/frameworks/kanban/scripts/detect_existing_structure.py` (needs semantic analysis)
- `packages/frameworks/kanban/scripts/analyze_structure.py` (needs intelligent matching)
- `packages/frameworks/kanban/scripts/migrate_structure.py` (needs intelligent task mapping)
- Migration user interface (needs recommendation presentation)

---

## Intake Decision

**Intake Status:** ACCEPTED  
**Intake Date:** 2025-12-10  
**Intake By:** AI Agent (Cursor)

**Decision Flow Results:**
- [x] Story Match Found: Epic 7, Story 5 → Task 2 (UXR synthesis)
- [ ] New Story Created: [N/A]
- [ ] New Epic Created: [N/A]

**Assigned To:**
- Epic: Epic 7 (UXR - User Experience Research)
- Story: Story 5 (Migration UXR Research)
- Task: Task 2 (UXR-003: Intelligent epic matching UAT synthesis)
- Version: `[TBD]`

**Kanban Links:**
- Epic: [`Epic-7.md`](../epics/Epic-7/Epic-7.md)
- Story: [`Story-005-migration-uxr-research.md`](../epics/Epic-7/Story-005-migration-uxr-research.md)
- Task: [TBD]

---

## References

- **Design Decision:** `docs/project-management/kanban/fr-br/DESIGN_DECISION-task-id-preservation-vs-canonical-epic-structure-REFINED.md`
- **FR-009:** Intelligent Epic Matching and AI-Assisted Canonical Structure Adoption (Issue #7)
- **BR-006:** Missing Migration Support for Pre-Existing Kanban Structures (Issue #2)
- **FR-007:** Migration Utilities and Installation Modes (Issue #3)
- **UXR-001:** Migration User Experience Research (Issue #4)
- **UXR-002:** Comprehensive UAT of Migration Utilities (Issue #6)

---

_This UXR report is part of the Kanban Framework. See `packages/frameworks/kanban/` for complete framework documentation._

