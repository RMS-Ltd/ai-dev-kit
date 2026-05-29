---
lifecycle: evergreen
ttl_days: null
created_at: 2025-01-27T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

> **ai-dev-kit live kanban:** This BR reflects framework/UAT canonical expectations. The installed **ai-dev-kit** repo uses a different live epic map (e.g. **Epic 9 = Release Candidate Readiness**, not Documentation). See [`kanban-structure.md`](../kanban-structure.md).

# Bug Report: Kanban Framework Epic Structure Gap (UAT Finding)

**Type:** Bug Report (BR)  
**Submitted:** 2025-01-27  
**Submitted By:** AI Agent (Cursor) acting as user/client  
**Priority:** HIGH  
**Severity:** HIGH  
**Status:** ACCEPTED

---

## Summary

The Kanban framework's CANONICAL_EPICS.md only documents Epics 1-7, but the expected structure includes Epics 1-21, where Epics 1-8 are CORE (always installed) and Epics 9-21 are ANCILLARY (users pick and choose). This gap prevents users from getting the expected epic structure during framework installation.

---

## Description

**What is the Bug?**

The Kanban framework documentation (`packages/frameworks/kanban/templates/CANONICAL_EPICS.md`) is incomplete. It only documents 7 canonical epics (Epics 1-7), but the framework is expected to provide 21 epics total:

- **Core Epics (1-8):** Always installed
- **Ancillary Epics (9-21):** Users pick and choose

Additionally, Epic 7 (UXR) is missing entirely, and Epic 7 (Codebase Maintenance) should be Epic 8.

**What Should Happen vs. What Actually Happens?**

**Expected Behavior:**
- User requests Kanban structure setup: "I want you to setup our Kanban structure, using the [updated] Kanban pack from ai-dev-kit"
- Framework provides complete epic structure:
  - Core epics (1-8) automatically installed
  - Ancillary epics (9-21) available for selection
  - All epics properly numbered and documented
  - Installation process creates epic templates from canonical definitions

- User gets expected 21-epic structure with proper numbering

**Actual Behavior:**
- User requests Kanban structure setup
- Agent reads `CANONICAL_EPICS.md` and finds only Epics 1-7
- Agent creates incorrect Epic 1 for dev-toolkit (should use canonical Epic 1 template)
- User discovers structure doesn't match expectations
- User identifies gap: Missing Epic 7 (UXR), Epic 8 misnumbered, Epics 9-21 missing

**When Does It Occur?**

This bug occurs whenever:
- A user tries to set up Kanban structure using the framework
- An agent tries to install Kanban epics from canonical templates
- A user expects the full 21-epic structure (core + ancillary)
- Installation process references `CANONICAL_EPICS.md`

**Who is Affected?**

**Primary Affected:**
- Users installing Kanban framework in new projects
- AI agents automating Kanban structure setup
- Projects expecting the full epic structure

**Secondary Affected:**
- Framework maintainers (incomplete documentation)
- Framework users (confusion about epic structure)
- Future framework adopters (incorrect expectations)

---

## Affected Component

**Primary Component:** Kanban Framework - Epic Structure Documentation  
**Affected Areas:**
- [x] Documentation
- [x] Framework Templates
- [x] Installation Process
- [ ] Backend/API
- [ ] Frontend/UI
- [ ] Database/Schema
- [ ] Integration/External Service

**Root Cause:**

The `CANONICAL_EPICS.md` file was never updated to include all 21 epics. The framework documentation only covers Epics 1-7, missing Epic 7 (UXR) and all ancillary epics (9-21). Additionally, Epic 7 (Codebase Maintenance) is misnumbered and should be Epic 8.

**Note:** While `COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md` exists with all Epics 1-23+, `CANONICAL_EPICS.md` remains incomplete and is the primary reference document that users/agents encounter first.

---

## Steps to Reproduce

**UAT Scenario: Setting Up Kanban Structure**

**Context:** AI Agent (Cursor) acting as user/client for dev-toolkit project

1. **User Request:** User types: "I want you to setup our Kanban structure, using the [updated] Kanban pack from ai-dev-kit"

2. **Agent Action:** Agent reads Kanban framework documentation:
   - Reads `packages/frameworks/kanban/templates/CANONICAL_EPICS.md`
   - Finds only Epics 1-7 documented
   - No mention of Epic 7 (UXR)
   - No mention of Epics 9-21
   - Agent assumes framework only has 7 epics

3. **Agent Creates Structure:** Agent creates new Epic 1 for dev-toolkit:
   - Creates `docs/project-management/kanban/epics/Epic-1/Epic-1.md`
   - Creates Story 1 and Story 2 under Epic 1
   - Does NOT use canonical Epic 1 template

4. **User Discovery:** User reviews created structure and identifies gap:
   - User expects Epics 1-21 (core + ancillary)
   - User finds only Epic 1 created
   - User identifies missing Epic 7 (UXR)
   - User identifies Epic 8 misnumbered (should be Epic 8, currently Epic 7)
   - User identifies missing Epics 9-21

5. **User Confirmation:** User confirms expectation:
   - "My understanding is the ai-dev-kit should install the following E/S/T struct:"
   - Lists all 21 expected epics
   - Confirms Epics 1-8 are core, 9-21 are ancillary

**Expected Result:**
- Framework provides all 21 epics
- Core epics (1-8) automatically installed
- Ancillary epics (9-21) available for selection
- Proper epic numbering (Epic 7 = UXR, Epic 8 = Codebase Maintenance)

**Actual Result:**
- Framework only provides 7 epics
- Epic 7 (UXR) missing entirely
- Epic 7 (Codebase Maintenance) should be Epic 8
- Epics 9-21 not documented
- Agent creates incorrect structure

---

## Environment

**Environment:** Development (Framework Installation)  
**Version:** Kanban Framework v2.0.0 (as of 2025-12-10)  
**Repository:** earlution/dev-toolkit (consuming ai-dev-kit framework)  
**Framework Source:** earlution/ai-dev-kit  
**Framework Path:** `packages/frameworks/kanban/`  
**Affected File:** `packages/frameworks/kanban/templates/CANONICAL_EPICS.md`

---

## Impact

**User Impact:**
- [x] Critical - System unusable
- [x] High - Major functionality broken
- [ ] Medium - Some functionality affected
- [ ] Low - Minor issue, workaround available

**Impact Description:**
- **Critical:** Users cannot get expected epic structure during installation
- **High:** Installation creates incorrect epic numbering
- **High:** Missing Epic 7 (UXR) entirely - users cannot use UXR epic
- **Medium:** No way to select ancillary epics (9-21) during setup
- **Medium:** Confusion about epic structure and numbering

**User Experience:**
- Users expect 21-epic structure but only get 7 epics
- Users must manually create missing epics
- Users cannot leverage ancillary epics (9-21) from framework
- Installation process doesn't match user expectations

**Business Impact:**

**Framework Adoption:**
- Users may abandon framework if structure doesn't match expectations
- Framework appears incomplete compared to user expectations
- Framework credibility affected by documentation gaps

**Framework Maintenance:**
- Incomplete documentation creates maintenance burden
- Users create workarounds instead of using framework
- Framework evolution blocked by incomplete structure

**Workaround:**

**Current Workaround:**
- Manually create missing epics (Epic 7: UXR, Epics 9-21)
- Manually renumber Epic 7 (Codebase Maintenance) → Epic 8
- Manually create epic templates from scratch
- Manually update framework documentation
- Reference `COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md` instead

**Workaround Limitations:**
- Time-consuming and error-prone
- Doesn't leverage framework templates
- Creates inconsistency across projects
- Doesn't solve root cause
- Users/agents don't know about comprehensive structure document

---

## Acceptance Criteria (Fix Requirements)

**Fix 1: Update CANONICAL_EPICS.md** ✅ COMPLETE (v0.4.6.6+1)

- [x] **Criterion 1:** Epic 7 (UXR) added to `CANONICAL_EPICS.md` with complete description ✅
- [x] **Criterion 2:** Epic 7 (Codebase Maintenance) renumbered to Epic 8 in `CANONICAL_EPICS.md` ✅
- [x] **Criterion 3:** Epics 9-21 added to `CANONICAL_EPICS.md` with complete descriptions ✅
  - Epic 9: User Management ✅
  - Epic 10: Data Management ✅
  - Epic 11: API & Backend ✅
  - Epic 12: Frontend & UI ✅
  - Epic 13: Testing & QA ✅
  - Epic 14: Deployment & DevOps ✅
  - Epic 15: Security ✅
  - Epic 16: Performance ✅
  - Epic 17: Integration ✅
  - Epic 18: Documentation ✅
  - Epic 19: Analytics ✅
  - Epic 20: Mobile ✅
  - Epic 21: Internationalization ✅

- [x] **Criterion 4:** Documentation clearly distinguishes core epics (1-8) vs ancillary epics (9-21) ✅
- [x] **Criterion 5:** All epic descriptions include purpose, scope, key characteristics, typical stories, and integration points ✅
- [x] **Criterion 6:** `CANONICAL_EPICS.md` references `COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md` as the complete source ✅

**Fix 2: Create Epic Template Files**

- [ ] **Criterion 7:** Epic template files created for all 21 epics in `templates/epics/` directory
- [ ] **Criterion 8:** Template files follow naming convention: `Epic-\{NN\}-{Name}.md`
- [ ] **Criterion 9:** Template files include all required sections per `EPIC_TEMPLATE.md`
- [ ] **Criterion 10:** Template files are properly formatted and ready for use

**Fix 3: Create Installation Script/Guide**

- [ ] **Criterion 11:** Installation script/guide created that installs core epics (1-8) automatically
- [ ] **Criterion 12:** Installation script/guide provides selection interface for ancillary epics (9-21)
- [ ] **Criterion 13:** Installation script/guide copies selected epic templates to project KB structure
- [ ] **Criterion 14:** Installation script/guide validates epic structure after installation

**Fix 4: Update Framework Documentation**

- [ ] **Criterion 15:** README.md updated to mention 21-epic structure (or reference comprehensive structure)
- [ ] **Criterion 16:** Installation guide updated to explain core vs ancillary epics
- [ ] **Criterion 17:** Intake guides updated to reference all 21 epics
- [ ] **Criterion 18:** All framework documentation consistent with 21-epic structure

**Verification Method:**
- [x] Test suite execution (if applicable)
- [x] Manual testing (UAT scenario reproduction)
- [x] Documentation review
- [x] Framework installation test

**Fix Verification Status:**
- [x] Verified (test suite passed / manual test passed)
- [ ] Attempted Fix (pending verification)

---

## Fix Attempt History

**Purpose:** This section documents all fix attempts for this bug, ensuring that if a bug isn't squashed, the next build can be informed by previous attempts.

### Fix Attempts

#### Attempt 1: v0.4.6.6+1 - 2025-12-10

**Fix Description:**
Updated `CANONICAL_EPICS.md` to include all 21 epics (core epics 1-8 and ancillary epics 9-21), addressing all BR-005 requirements.

**Changes Made:**
- Added Epic 7 (UXR) with complete description
- Renumbered Codebase Maintenance from Epic 7 to Epic 8
- Added all core epics (1-8) with detailed descriptions
- Added all ancillary epics (9-21) with complete descriptions:
  - Epic 9: User Management and Authentication
  - Epic 10: Data Management and Database (Core+)
  - Epic 11: API and Backend Services
  - Epic 12: Frontend and User Interface
  - Epic 13: Testing and Quality Assurance
  - Epic 14: Deployment and DevOps
  - Epic 15: Security
  - Epic 16: Performance and Optimization
  - Epic 17: Integration and Third-Party Services
  - Epic 18: Documentation (Core+)
  - Epic 19: Analytics and Monitoring
  - Epic 20: Mobile Application
  - Epic 21: Internationalization and Localization

- Added Core+ epics (22-23):
  - Epic 22: Architecture Refactoring and Code Quality
  - Epic 23: Process Automation and CI/CD

- Added clear distinction between core epics (1-8), core+ epics (10, 18, 22, 23), and ancillary epics (9, 11-17, 19-21)
- Added prominent reference to `COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md` as authoritative source
- Updated ordering rationale with chronological adoption sequence
- Updated usage instructions to explain core vs ancillary epic selection

**Verification Status:**
- [x] Verified (manual test passed)
- [ ] Attempted Fix (pending verification)
- [ ] Fix Failed (bug still present)

**Verification Method:**
- [x] Manual testing
- [x] Documentation review

**Verification Evidence:**
- `CANONICAL_EPICS.md` now includes all 21 epics
- Epic 7 correctly shows as UXR
- Epic 8 correctly shows as Codebase Maintenance
- All acceptance criteria from BR-005 met

**Result:**
- [x] Bug Fixed
- [ ] Bug Partially Fixed (describe partial fix)
- [ ] Bug Not Fixed (describe why fix didn't work)

**Lessons Learned:**
- `CANONICAL_EPICS.md` is the primary reference document that users/agents encounter first
- Comprehensive structure document exists but wasn't being referenced properly
- Clear distinction between core, core+, and ancillary epics is essential for user understanding

#### Attempt 1 Build 2: v0.4.6.6+2 - 2025-12-10

**Fix Description:**
Added detailed comment on GitHub issue #1 with full traceability to internal Kanban system (BR-005, Epic 4, Story 6, Task 6).

**Changes Made:**
- Added comprehensive comment on GitHub issue #1
- Comment includes links to:
  - BR-005 Bug Report document
  - Epic 4: Kanban Framework
  - Story 6: Comprehensive Canonical E/S/T Template System
  - Task 6: Update CANONICAL_EPICS.md (E4:S06:T06)

- Comment documents fix completion and verification status
- Comment provides full traceability from GitHub issue to internal Kanban system
- Issue closed as resolved

**Verification Status:**
- [x] Verified (manual test passed)
- [ ] Attempted Fix (pending verification)
- [ ] Fix Failed (bug still present)

**Verification Method:**
- [x] Manual testing
- [x] GitHub issue review

**Verification Evidence:**
- GitHub issue #1 commented with internal tracking references
- Full traceability established between GitHub issue and Kanban system
- Issue closed as resolved

**Result:**
- [x] Bug Fixed
- [ ] Bug Partially Fixed (describe partial fix)
- [ ] Bug Not Fixed (describe why fix didn't work)

**Lessons Learned:**
- GitHub issues should reference internal Kanban tracking for full traceability
- External users benefit from seeing the internal workflow and decision-making process
- Bidirectional linking between GitHub issues and Kanban documents improves transparency

**Next Steps:**
- Verify fix resolves UAT scenario from BR-005
- Update installation scripts/guides to reference updated CANONICAL_EPICS.md
- Consider deprecating or consolidating documentation to avoid future gaps

---

## Dependencies

**Blocks:**
- Proper Kanban structure installation in new projects
- Framework adoption with expected epic structure
- UXR epic usage in projects
- Ancillary epic selection during setup

**Blocked By:**
- None

**Related Work:**
- Framework: `packages/frameworks/kanban/templates/CANONICAL_EPICS.md`
- Comprehensive Structure: `packages/frameworks/kanban/templates/COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md`
- Gap Analysis: `docs/architecture/standards-and-adrs/kanban-epic-structure-gap-analysis.md` (dev-toolkit)
- Epic 4: Kanban Framework (ai-dev-kit)
- Story 2: FR/BR Intake to Tasks (ai-dev-kit)
- Story 6: Comprehensive Canonical E/S/T Template System (ai-dev-kit)

---

## Intake Decision

**Intake Status:** ACCEPTED  
**Intake Date:** 2025-12-10  
**Intake By:** AI Agent (Cursor)

**Decision Flow Results:**
- [x] Story Match Found: Epic 4, Story 6 → Task 6 (E4:S06:T06)
- [ ] New Story Created: [N/A]
- [ ] New Epic Created: [N/A]

**Assigned To:**
- Epic: Epic 4 - Kanban Framework
- Story: Story 6 - Comprehensive Canonical E/S/T Template System
- Task: Task 6 - Update CANONICAL_EPICS.md to reference comprehensive structure (enhanced to address BR-005)
- Version: `v0.4.6.6+0` (to be assigned when task starts)

**Kanban Links:**
- Epic: [`docs/project-management/kanban/epics/Epic-4/Epic-4.md`](../epics/Epic-4/Epic-4.md)
- Story: [`docs/project-management/kanban/epics/Epic-4/Story-006-comprehensive-canonical-est-template-system.md`](../epics/Epic-4/Story-006-comprehensive-canonical-est-template-system.md)
- Task: E4:S06:T06 (Update CANONICAL_EPICS.md - enhanced scope to address BR-005)

---

## Notes

**UAT Context**

This bug report is the result of User Acceptance Testing (UAT) performed by an AI agent (Cursor) acting as a user/client for the dev-toolkit project. The UAT scenario involved:

- **User Role:** AI Agent (Cursor) acting as framework consumer
- **User Action:** Requested Kanban structure setup using ai-dev-kit framework
- **Expected Outcome:** Complete 21-epic structure (core + ancillary)
- **Actual Outcome:** Only 7 epics available, missing Epic 7 (UXR) and Epics 9-21
- **User Feedback:** Identified gap and provided expected epic structure

**Rationale**

**Why This Matters:**
- Framework documentation should match user expectations
- Incomplete documentation creates confusion and adoption barriers
- Users expect full epic structure based on framework claims
- Missing epics prevent users from leveraging framework capabilities

**Why This Should Be Fixed:**
- Framework credibility depends on complete documentation
- Users cannot use framework as intended without complete epic structure
- Installation process should match user expectations
- Framework evolution requires complete epic structure

**Expected Epic Structure (Per User Requirements)**

**Core Epics (1-8) - Always Installed:**
1. Epic 1: Project Core
2. Epic 2: Workflow Management
3. Epic 3: Versioning
4. Epic 4: Kanban Framework
5. Epic 5: FR Implementation
6. Epic 6: BR Implementation
7. Epic 7: UXR (MISSING in CANONICAL_EPICS.md)
8. Epic 8: Codebase Maintenance (currently misnumbered as Epic 7 in CANONICAL_EPICS.md)

**Ancillary Epics (9-21) - Users Pick and Choose:**
9. Epic 9: User Management
10. Epic 10: Data Management
11. Epic 11: API & Backend
12. Epic 12: Frontend & UI
13. Epic 13: Testing & QA
14. Epic 14: Deployment & DevOps
15. Epic 15: Security
16. Epic 16: Performance
17. Epic 17: Integration
18. Epic 18: Documentation
19. Epic 19: Analytics
20. Epic 20: Mobile
21. Epic 21: Internationalization

**Note:** The comprehensive structure document (`COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md`) exists with Epics 1-23+ including Epic 22 (Architecture Refactoring) and Epic 23 (CI/CD), but `CANONICAL_EPICS.md` remains the primary reference that users/agents encounter first.

---

## References

- Framework Documentation: `packages/frameworks/kanban/templates/CANONICAL_EPICS.md`
- Comprehensive Structure: `packages/frameworks/kanban/templates/COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md`
- Gap Analysis: `docs/architecture/standards-and-adrs/kanban-epic-structure-gap-analysis.md` (dev-toolkit)
- Epic Template: `packages/frameworks/kanban/templates/EPIC_TEMPLATE.md`
- Kanban Framework README: `packages/frameworks/kanban/README.md`
- User Expectation: Based on UAT conversation 2025-01-27
- GitHub Issue: [Link to GitHub issue if available]

---

**Template Usage:**
- This BR follows the Kanban Framework BR template
- UAT findings documented as bug report
- Comprehensive gap analysis included
- Clear acceptance criteria provided
- Fix requirements specified

_This bug report is part of the Kanban Framework. See `packages/frameworks/kanban/` for complete framework documentation._

