---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:01:50Z
expires_at: null
housekeeping_policy: keep
---

# KB Structure Migration Guide

**Task:** E1:S03:T03 – Create KB structure migration guide  
**Date:** 2025-12-02  
**Status:** ✅ COMPLETE  
**Version:** v0.1.3.3+1

---

## 1. Overview

This guide describes the **phased migration plan** for evolving the `ai-dev-kit` KB structure from its current state to the target structure defined in the KB structure analysis and principles documents. It also provides guidance for **other projects** adopting the canonical KB pattern documented in T006.

**For dev-kit:** Migration is performed in **four phases** (Phase 1 implemented).

**For other projects:** See Section 5 for guidance on adopting the canonical KB pattern.

Migration phases:

1. **Phase 1: Add Navigation (Low Risk)** ✅ IMPLEMENTED
2. **Phase 2: Create Guides Structure (Low Risk)**
3. **Phase 3: Enhance Governance Structure (Low Risk)**
4. **Phase 4: Update Cross-References (Medium Risk)**

---

## 2. Phases and Steps

### 2.1 Phase 1: Add Navigation (Low Risk)

**Objective:** Provide clear navigation and entry points into the KB without moving existing content.

**Steps:**
1. Create `docs/README.md` with overview and navigation
2. Create section-level READMEs:
   - `docs/architecture/README.md`
   - `docs/changelog-and-release-notes/README.md`
   - `docs/project-management/README.md`
3. Create `docs/changelog-and-release-notes/changelog-archive/README.md` with index and navigation
4. Create `docs/project-management/rituals/README.md` and `docs/project-management/rituals/policy/README.md` for governance navigation

**Status:** ✅ **IMPLEMENTED (v0.1.3.3+1)**

**Risk:** Low – Only adds files, no file moves

---

### 2.2 Phase 2: Create Guides Structure (Low Risk)

**Objective:** Introduce a dedicated structure for user-facing guides.

**Steps:**
1. Create `docs/guides/` directory
2. Create `docs/guides/README.md` with overview
3. Create `docs/guides/getting-started/` and `docs/guides/framework-consumption/` directories
4. Create placeholder `README.md` files in guide directories

**Status:** ⏳ **Planned** (not yet implemented)

**Risk:** Low – Adds new structure only

---

### 2.3 Phase 3: Enhance Governance Structure (Low Risk)

**Objective:** Improve discoverability and organization of governance policies.

**Steps:**
1. Ensure `docs/project-management/rituals/README.md` and `docs/project-management/rituals/policy/README.md` are up to date
2. Add policy overview and navigation
3. Document policy organization principles

**Status:** ⏳ **Partially implemented** (initial READMEs created in Phase 1)

**Risk:** Low – Primarily documentation updates

---

### 2.4 Phase 4: Update Cross-References (Medium Risk)

**Objective:** Update all cross-references to use the new navigation structure.

**Steps:**
1. Update all documentation to reference new READMEs (Architecture, Project Management, Changelog)
2. Update package READMEs to link to KB structure (e.g., `packages/frameworks/*/README.md`)
3. Update framework documentation to reference KB guides
4. Validate all links (manual and/or scripted checks)

**Status:** ⏳ **Planned** (not yet implemented)

**Risk:** Medium – Requires careful cross-reference updates

---

## 3. Execution Order

1. **Phase 1** (Navigation) – Already implemented in v0.1.3.3+1
2. **Phase 2** (Guides Structure) – Next logical step
3. **Phase 3** (Governance Enhancements) – After basic guides structure
4. **Phase 4** (Cross-References) – Last, once structure is stable

---

## 4. Rollback Procedures

**Navigation Files:**
- To roll back Phase 1, delete the following files:
  - `docs/README.md`
  - `docs/architecture/README.md`
  - `docs/changelog-and-release-notes/README.md`
  - `docs/changelog-and-release-notes/changelog-archive/README.md`
  - `docs/project-management/README.md`
  - `docs/project-management/rituals/README.md`
  - `docs/project-management/rituals/policy/README.md`


**Future Phases:**
- For Phases 2–4, rollback procedures will include:
  - Removing or reverting created directories
  - Reverting cross-reference changes
  - Restoring previous documentation versions from git history


---

## 5. Verification Checklist

After each phase, verify:

- [ ] All new READMEs exist and render correctly
- [ ] Navigation links work
- [ ] No broken links introduced
- [ ] Documentation structure matches principles in T002

---

## 6. Related Documents

- `T01-kb-structure-analysis.md` – Current and target structure analysis
- `T02-kb-structure-principles.md` – Principles and conventions
- `T03-canonical-kb-structure-research.md` – Research on canonical KB patterns
- `T06-scalable-kb-pattern.md` – Canonical scalable KB pattern for large codebases

---

## 7. Migration for Other Projects (Canonical Pattern Adoption)

For projects adopting the canonical KB pattern (see T006), use this migration approach:

### 7.1 Step 1: Map Current Structure

1. List all current KB top-level directories
2. Map each to canonical section (see T006 Section 3.2)
3. Identify consolidations needed (e.g., merge duplicate sections)

### 7.2 Step 2: Plan Migration

1. Identify which canonical sections you need (core + optional)
2. Plan file movements to target locations
3. Update cross-references
4. Validate structure (3-level default depth)

### 7.3 Step 3: Execute Migration

1. Create canonical section directories
2. Move files to target locations
3. Update all cross-references
4. Create READMEs for navigation
5. Validate links and structure

### 7.4 Step 4: Document Decisions

1. Document which canonical sections you're using
2. Document any deviations (with rationale)
3. Update `docs/README.md` with structure overview

---

_End of Migration Guide_

