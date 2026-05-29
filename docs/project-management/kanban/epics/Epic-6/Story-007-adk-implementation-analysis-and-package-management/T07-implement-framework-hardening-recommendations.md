---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-18T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 6, Story 7, Task 7: Implement Framework Hardening Recommendations

**Status:** ✅ COMPLETE  
**Priority:** CRITICAL  
**Last updated:** 2025-12-18 (v0.6.7.7+6 – UKW: Task marked complete, kanban docs synchronized, migrated from v0.6.6.7+6)  
**Started:** 2025-12-18  
**Completed:** 2025-12-18  
**Version:** v0.6.7.7+6

**Progress:** Phase 1 ✅, Phase 2 ✅, Phase 3 ✅ (rw-config.yaml ✅, .cursorrules ✅), Phase 4 ✅, Acceptance criteria ✅ - ALL PHASES COMPLETE  
**Code:** E6S07T07

---

## Task ID

**Format:** `E\{epic\}:S\{story\}:T\{task\}`

**Full Task ID:** `E6:S07:T07`

---

## Scope

Implement the critical and high-priority framework hardening recommendations identified in E6:S07:T01's comprehensive ADK implementation analysis. This task addresses the root causes of Epic mashup (affecting 30% of client projects), framework drift, and source repository gaps that prevent ai-dev-kit from serving as a proper reference implementation.

**Problem Statement:**
- **CRITICAL:** Epic 9 mismatch in ai-dev-kit source ("Book Related Work" vs canonical "User Management and Authentication") is root cause of Epic mashup
- **CRITICAL:** No installer validation to prevent Epic mashup during installation
- **HIGH:** Source repository missing `.cursorrules` and `rw-config.yaml`, preventing it from demonstrating own frameworks
- **HIGH:** Installation instructions unclear, leading to confusion between templates and actual Kanban

**Solution:**
Implement all critical and high-priority hardening actions:
1. Fix Epic 9 mismatch (rename to Epic 24+, update all references)
2. Add installer validation (prevent Epic mashup, validate Epic numbering)
3. Add source repository frameworks (`.cursorrules`, `rw-config.yaml`, canonical version path)
4. Improve installation instructions (clear template vs actual Kanban distinction, Epic mashup prevention)

---

## Input

- `docs/knowledge/analysis/adk-hardening-recommendations.md` - Comprehensive hardening recommendations from T01
- `docs/knowledge/analysis/adk-implementation-analysis-report.md` - Overall analysis findings
- `docs/knowledge/analysis/adk-mashup-issues.md` - Epic mashup issue details and root cause analysis
- `docs/knowledge/analysis/adk-drift-analysis.md` - Framework drift analysis
- `docs/knowledge/analysis/adk-learning-synthesis.md` - What ADK can learn (implement, harden, avoid, do differently)
- Current ai-dev-kit source structure:
  - `docs/project-management/kanban/epics/Epic-24/` - Epic 24 "Book Related Work" (renamed from Epic 9)
  - `src/fynd_deals/version.py` - Legacy version file path (to be migrated)
  - Installer scripts in `packages/frameworks/kanban/scripts/`
  - Installation documentation


---

## Deliverable

**Implementation of Critical and High-Priority Hardening Actions:**

1. **Epic 9 Mismatch Fixed (CRITICAL):**
   - Epic 9 "Book Related Work" renamed to Epic 24+ (project-specific range)
   - All Epic 9 references updated (Epic doc, Stories, Tasks, Kanban board, cross-references)
   - Epic 24+ documented as project-specific range (not canonical)
   - Installation instructions updated to clarify project-specific epics start at Epic 24+

2. **Installer Validation Added (CRITICAL):**
   - Epic numbering validation in installer scripts
   - Epic mashup prevention (detects Epic 9 "Book Related Work" in non-book projects)
   - Canonical vs project-specific epic conflict detection
   - Version file path validation
   - KB structure validation
   - Warnings about copying ai-dev-kit's actual Kanban

3. **Source Repository Frameworks Added (HIGH):**
   - `.cursorrules` file in project root with:
     - Comprehensive 12-step RW trigger section
     - PVW trigger section (optional)
     - Document lifecycle management section
     - Git workflow restrictions section
   - `rw-config.yaml` in project root configured for ai-dev-kit structure
   - Version file migrated to canonical path: `src/ai_dev_kit/version.py`
   - All references to version file updated

4. **Installation Instructions Improved (HIGH):**
   - Clear distinction between canonical templates and ai-dev-kit's actual Kanban
   - Epic mashup prevention documentation
   - Step-by-step installation guide with examples
   - Common mistakes and how to avoid them

---

## Acceptance Criteria

- [x] Epic 9 in ai-dev-kit source renamed to Epic 24+ (or appropriate project-specific number) ✅ COMPLETE (v0.6.7.7+1, migrated from v0.6.6.7+1)
- [x] All Epic 9 references updated (Epic doc, Stories, Tasks, Kanban board, cross-references) ✅ COMPLETE (v0.6.7.7+1, migrated from v0.6.6.7+1)
- [x] No Epic 9 "Book Related Work" references remain in source ✅ COMPLETE (v0.6.7.7+1, migrated from v0.6.6.7+1)
- [x] Epic 24+ documented as project-specific range (not canonical) ✅ COMPLETE (v0.6.7.7+1, migrated from v0.6.6.7+1)
- [x] Installer validates Epic numbering (Epic 1-23 canonical, Epic 24+ project-specific) ✅ COMPLETE (v0.6.7.7+2, migrated from v0.6.6.7+2 - Phase 2)
- [x] Installer prevents Epic mashup (detects and blocks Epic 9 "Book Related Work" in non-book projects) ✅ COMPLETE (v0.6.7.7+2, migrated from v0.6.6.7+2 - Phase 2)
- [x] Installer warns if copying ai-dev-kit's actual Kanban ✅ COMPLETE (v0.6.7.7+2, migrated from v0.6.6.7+2 - Phase 2)
- [x] Installer validates canonical vs project-specific epic conflicts ✅ COMPLETE (v0.6.7.7+2, migrated from v0.6.6.7+2 - Phase 2)
- [x] Installer validates version file path ✅ COMPLETE (v0.6.7.7+2, migrated from v0.6.6.7+2 - Phase 2)
- [x] Installer validates KB structure ✅ COMPLETE (v0.6.7.7+2, migrated from v0.6.6.7+2 - Phase 2)
- [x] `.cursorrules` file exists in project root with comprehensive RW trigger ✅ COMPLETE (v0.6.7.7+4, migrated from v0.6.6.7+4 - Phase 3: .cursorrules created)
- [x] `rw-config.yaml` exists in project root with correct configuration ✅ COMPLETE (v0.6.7.7+1, migrated from v0.6.6.7+1 - Phase 3: rw-config.yaml created)
- [ ] Version file migrated to `src/ai_dev_kit/version.py` (optional - legacy path acceptable)
- [ ] All references to version file updated (optional - only if migration occurs)
- [x] Installation instructions clearly distinguish templates from actual Kanban ✅ COMPLETE (v0.6.7.7+3, migrated from v0.6.6.7+3 - Phase 4)
- [x] Epic mashup prevention documented in installation instructions ✅ COMPLETE (v0.6.7.7+3, migrated from v0.6.6.7+3 - Phase 4)
- [x] Clear installation examples provided (step-by-step guide, example projects) ✅ COMPLETE (v0.6.7.7+3, migrated from v0.6.6.7+3 - Phase 4)
- [x] Common mistakes documented with prevention strategies ✅ COMPLETE (v0.6.7.7+3, migrated from v0.6.6.7+3 - Phase 4)
- [x] Source serves as reference implementation (demonstrates own frameworks) ✅ COMPLETE (v0.6.7.7+4, migrated from v0.6.6.7+4 - Phase 3: .cursorrules created, rw-config.yaml created)

---

## Approach

### Phase 1: Fix Epic 9 Mismatch (CRITICAL)

1. **Determine Target Epic Number:**
   - Review current Epic inventory
   - Select appropriate Epic number in project-specific range (Epic 24+)
   - Ensure no conflicts with existing epics

2. **Rename Epic 9 to Epic 24+:**
   - Rename Epic directory: `Epic-9/` → `Epic-\{N\}/` (where N >= 24)
   - Rename Epic document: `Epic-9.md` → `Epic-\{N\}.md`
   - Update Epic document content (Epic number, title, references)

3. **Update All References:**
   - Story documents: Update all Story references to Epic 9
   - Task documents: Update all Task references to Epic 9
   - Kanban board: Update Epic 9 entry
   - Cross-references in documentation
   - Any other files referencing Epic 9

4. **Document Project-Specific Range:**
   - Update canonical structure documentation
   - Clarify Epic 24+ as project-specific range
   - Update installation instructions

### Phase 2: Add Installer Validation (CRITICAL)

1. **Identify Installer Scripts:**
   - Locate all installer scripts in `packages/frameworks/kanban/scripts/`
   - Identify entry points and validation hooks

2. **Implement Epic Numbering Validation:**
   - Add validation function to check Epic numbering
   - Validate Epic 1-23 are canonical
   - Validate Epic 24+ are project-specific
   - Check for Epic 9 "Book Related Work" in non-book projects

3. **Implement Epic Mashup Prevention:**
   - Detect copying of ai-dev-kit's actual Kanban
   - Warn user about copying actual Kanban
   - Block installation if Epic conflicts detected
   - Provide clear error messages

4. **Add Additional Validations:**
   - Version file path validation
   - KB structure validation
   - Canonical vs project-specific epic conflict detection

### Phase 3: Add Source Repository Frameworks (HIGH)

1. **Create `.cursorrules` File:**
   - Use canonical cursorrules structure from `ultimate-canonical-cursorrules-structure.md`
   - Include comprehensive 12-step RW trigger section
   - Include PVW trigger section (optional)
   - Include document lifecycle management section
   - Include Git workflow restrictions section
   - Serve as reference implementation

2. **Create `rw-config.yaml`:**
   - Use canonical workflow structure from `ultimate-canonical-workflow-structure.md`
   - Configure for ai-dev-kit project structure
   - Use canonical paths
   - Include all required config fields
   - Serve as reference implementation

3. **Migrate Version File Path:**
   - Create `src/ai_dev_kit/` directory if needed
   - Move `src/fynd_deals/version.py` to `src/ai_dev_kit/version.py`
   - Update all references:
     - Workflow scripts
     - Documentation
     - Any other files referencing version file

### Phase 4: Improve Installation Instructions (HIGH)

1. **Update Installation Documentation:**
   - Clearly distinguish canonical templates location
   - Document ai-dev-kit's actual Kanban location
   - Explain difference clearly
   - Warn against copying actual Kanban

2. **Document Epic Mashup Prevention:**
   - Explain Epic mashup issue and root cause
   - Document prevention steps
   - Provide examples of correct installation
   - Provide examples of incorrect installation (what to avoid)

3. **Create Installation Examples:**
   - Step-by-step installation guide
   - Example projects (tiny, small, ambitious)
   - Common mistakes and how to avoid them

---

## Dependencies

**Depends On:**
- E6:S07:T01 - Comprehensive ADK implementation analysis (provides hardening recommendations)

**Blocks:**
- Framework hardening work (this task implements the hardening)
- Continued development in client projects (hardening prevents future issues)
- Package management implementation (T02-T04) - may benefit from hardened framework

**Blocked By:**
- None (can start immediately after T01 completion)

**Parallel Development Candidacy:** Blocked - This task should be completed before other framework work to prevent further issues

---

## Related Work

**Related Tasks:**
- E6:S07:T01 - Comprehensive ADK implementation analysis (provides input: hardening recommendations)
- E6:S07:T02-T05 - Package management and feedback mechanism (may benefit from hardened framework)

**Related Documents:**
- `docs/knowledge/analysis/adk-hardening-recommendations.md` - Comprehensive hardening recommendations
- `docs/knowledge/analysis/adk-implementation-analysis-report.md` - Overall analysis findings
- `docs/knowledge/analysis/adk-mashup-issues.md` - Epic mashup issue details
- `docs/knowledge/analysis/adk-drift-analysis.md` - Framework drift analysis
- `docs/architecture/standards-and-adrs/ultimate-canonical-cursorrules-structure.md` - Cursorrules structure reference
- `docs/architecture/standards-and-adrs/ultimate-canonical-workflow-structure.md` - Workflow structure reference

**Related BR/FR Links:**
- Epic mashup issue (root cause: Epic 9 mismatch)
- Framework hardening (general)

---

## Version Anchor

**Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)` (e.g., `✅ COMPLETE (v0.6.7.7+1)`)

**When Task is Complete:**
- Add forensic marker to Task document
- Add forensic marker to Story checklist
- Update version file with task completion
- Update changelog with task completion

---

## Notes

**Critical Priority:**
This task addresses the root cause of Epic mashup affecting 30% of client projects. The Epic 9 mismatch must be fixed immediately to prevent further issues.

**Implementation Order:**
1. Fix Epic 9 mismatch first (removes root cause)
2. Add installer validation (prevents future issues)
3. Add source frameworks (enables reference implementation)
4. Improve installation instructions (prevents user confusion)

**Testing:**
- Test Epic 9 rename (verify all references updated)
- Test installer validation (verify Epic mashup prevention)
- Test source frameworks (verify `.cursorrules` and `rw-config.yaml` work)
- Test installation instructions (verify clarity and completeness)

---

## Completion Summary

[To be filled when task is complete. What was delivered? Lessons learned? Metrics achieved?]

---

## References

- `docs/knowledge/analysis/adk-hardening-recommendations.md` - Hardening recommendations
- `docs/architecture/standards-and-adrs/ultimate-canonical-cursorrules-structure.md` - Cursorrules structure
- `docs/architecture/standards-and-adrs/ultimate-canonical-workflow-structure.md` - Workflow structure
- `packages/frameworks/kanban/scripts/` - Installer scripts location

---

## Next Actions

- [ ] Review Epic 9 structure and determine target Epic number (Epic 24+)
- [ ] Create migration plan for Epic 9 rename
- [ ] Review installer scripts and identify validation hooks
- [ ] Review canonical cursorrules and workflow structures for reference implementation

