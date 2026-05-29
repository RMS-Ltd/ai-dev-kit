---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-08T23:58:00Z
expires_at: null
housekeeping_policy: keep
---

# Story 005 – Canonical Epics for Kanban Framework

**Status:** COMPLETE  
**Priority:** HIGH  
**Estimated Effort:** [TBD]  
**Created:** 2025-12-08  
**Last updated:** 2025-12-08 (v0.4.5.1+1 – Task 1 complete: Added canonical epics to kanban framework package - Story COMPLETE)  
**Version:** v0.4.5.1+1  
**Code:** E4S05

---

## Overview

This story adds two canonical epics (FR Implementation and BR Implementation) to the kanban framework package, completing the canonical set of 6 epics. It establishes a standard organizational structure for projects using the Kanban framework, with clear ordering rationale and comprehensive documentation.

---

## Goal

Establish a complete canonical set of epics for the Kanban framework package, providing a standard organizational structure that projects can adopt. The canonical epics represent the core framework structure, with clear ordering rationale and usage guidance.

---

## Task Checklist

- [x] **E4:S05:T01 – Add canonical epics to kanban framework package** ✅ COMPLETE (v0.4.5.1+1)

---

## Tasks

### E4:S05:T01 – Add canonical epics to kanban framework package {#e4s05t01--add-canonical-epics-to-kanban-framework-package}

**Status:** ✅ COMPLETE (v0.4.5.1+1)  

**Input:**  
- Existing canonical epics (Epics 1-4)
- User request to add FR Implementation and BR Implementation
- Need for sensible numerical ordering

**Deliverable:**  
- ✅ **CANONICAL_EPICS.md:** `packages/frameworks/kanban/templates/CANONICAL_EPICS.md`
  - Complete documentation of all 6 canonical epics
  - Epic ordering rationale
  - Usage guidance and extension patterns

- ✅ **Updated Intake Guides:**
  - `FR_BR_INTAKE_GUIDE.md` - Updated epic list from 1-4 to 1-6, updated examples
  - `FR_BR_INTAKE_AGENT_GUIDE.md` - Added canonical epics reference
  - `FR_BR_INTAKE_USER_GUIDE.md` - Updated example to use Epic 7

- ✅ **Updated README:** Added reference to CANONICAL_EPICS.md
- ✅ **Updated Examples:** Changed example epic numbers from Epic 5 to Epic 7

**Key Decisions Made:**
- **Epic Ordering:** Established logical ordering (1-6):
  1. AI Dev Kit Core (foundational)
  2. Workflow Management Framework (operational)
  3. Numbering & Versioning Framework (operational)
  4. Kanban Framework (operational)
  5. FR Implementation (implementation - supports Kanban)
  6. BR Implementation (implementation - supports Kanban)

- **FR before BR:** Epic 5 (FR Implementation) comes before Epic 6 (BR Implementation) because Feature Requests typically precede Bug Reports in the intake flow
- **New Epic Starting Point:** Project-specific epics now start at Epic 7 (canonical epics are 1-6)

**Dependencies:** None  
**Blocker:** None  
**Parallel Development Candidacy:** Safe  

**Approach:**  
1. ✅ Created CANONICAL_EPICS.md with complete documentation
2. ✅ Added Epic 5: FR Implementation and Epic 6: BR Implementation
3. ✅ Documented epic ordering rationale
4. ✅ Updated all intake guides to reflect canonical epics 1-6
5. ✅ Updated examples to use Epic 7 for new project-specific epics
6. ✅ Updated README to reference CANONICAL_EPICS.md

---

## Acceptance Criteria

- [x] CANONICAL_EPICS.md created with all 6 canonical epics documented ✅
- [x] Epic ordering rationale documented ✅
- [x] All intake guides updated to reflect canonical epics 1-6 ✅
- [x] Examples updated to use Epic 7 for new project-specific epics ✅
- [x] README updated with reference to CANONICAL_EPICS.md ✅

---

## References

- `packages/frameworks/kanban/templates/CANONICAL_EPICS.md`
- `packages/frameworks/kanban/FR_BR_INTAKE_GUIDE.md`
- `packages/frameworks/kanban/FR_BR_INTAKE_AGENT_GUIDE.md`
- `packages/frameworks/kanban/FR_BR_INTAKE_USER_GUIDE.md`
- `packages/frameworks/kanban/README.md`

---

_Last updated: 2025-12-08 (v0.4.5.1+1 – Story COMPLETE)_

