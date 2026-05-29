---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T21:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Release Workflow Flaws Reference Guide

**Status:** ACTIVE REFERENCE  
**Owner:** Engineering  
**Last Updated:** 2025-12-04  
**Related Work:** Epic 3, Story 3 (Versioning Integration with Kanban & RW)

---

## Purpose

This document serves as a **comprehensive reference** for all discovered flaws, anti-patterns, and workflow issues in the Release Workflow (RW). Each flaw is documented with symptoms, root causes, solutions, and pointers to where fixes are implemented.

**Use this document when:**
- A workflow flaw is discovered
- Reviewing workflow procedures
- Onboarding new team members
- Debugging workflow issues
- Strengthening RW procedures

**This document references:**
- Root cause analysis for each flaw
- Step-by-step solutions
- Policy documents
- Fix implementations

---

## Quick Reference: All Known Flaws

| Flaw ID | Step | Symptom | Status | Solution Location |
|---------|------|---------|--------|-------------------|
| [WF-001](#wf-001-story-file-not-updated-first) | Step 7 | Story file lacks forensic markers, Epic matches incomplete state | ✅ FIXED | [Solution](#wf-001-story-file-not-updated-first) |
| [WF-002](#wf-002-version-bump-logic-error) | Step 2 | BUILD incremented instead of TASK for new tasks | ✅ FIXED | [Solution](#wf-002-version-bump-logic-error) |
| [WF-003](#wf-003-br-fr-fix-attempts-not-documented) | N/A (New Step 6) | Fix attempts not documented in BR/FR docs, preventing knowledge transfer between builds | ✅ FIXED | [Solution](#wf-003-br-fr-fix-attempts-not-documented) |
| [WF-004](#wf-004-story-file-missing-during-rw-update) | Step 7 | RW fails when Story file referenced in Epic doesn't exist | 🔧 TO FIX | [Solution](#wf-004-story-file-missing-during-rw-update) |

---

## WF-001: Story File Not Updated First (Step 7) {#wf-001-story-file-not-updated-first}

**Status:** ✅ FIXED  
**Date Discovered:** 2025-12-04  
**Date Fixed:** 2025-12-04  
**Related Work:** Epic 3, Story 3, Task 5

### Quick Reference: The Flaw

**Anti-Pattern:** Story file (authoritative source) wasn't being updated with forensic markers before Epic file was updated to match it.

**Symptom:**
- Story file task checklist lacks forensic markers
- Epic file matches Story file (correct behavior)
- But Epic file also lacks forensic markers (because Story file lacked them)
- Result: Both files in incomplete state

**Example:**
- ❌ **Wrong:** Epic file updated to match Story file, but Story file never updated with `✅ COMPLETE (v0.11.5.2+1)`
- ✅ **Correct:** Story file updated FIRST with forensic markers, then Epic file updated to match

**Impact:** Forensic markers missing from both Story and Epic documents, breaking traceability.

### Root Cause Analysis

**Primary Root Cause:**
- **Location:** RW Step 7 (Auto-update Kanban Docs) instructions
- **Problem:** Step 6 treated Story file as authoritative source but didn't update it
- **Workflow Gap:** One-way sync where Epic matched Story, but Story wasn't updated during RW

**What Happened:**
1. Step 7 read Story file to get "correct state"
2. Step 7 updated Epic file to match Story file
3. But Step 7 never updated Story file with forensic markers
4. Result: Story file (authoritative) lacked markers, Epic matched that incomplete state

**Why It Happened:**
- Step 7 documentation said "read Story file to get correct state" and "update Epic to match Story"
- But it didn't say "update Story file FIRST, then update Epic to match"
- The order of operations wasn't explicit
- Story file was treated as read-only authoritative source, not as something to update

### The Fix

**Solution:** Explicit order requirement in RW Step 7:

1. **FIRST:** Update Story file (`Story-\{N\}-\{Name\}.md`) task checklist with forensic markers
2. **THEN:** Update Epic-\{epic\}.md to match the updated Story file

**Implementation:**
- Updated `release-workflow-agent-execution.md` Step 6 EXECUTE phase
- Updated `cursorrules-rw-trigger-section.md` Step 6 instructions
- Made order explicit: Story file FIRST, then Epic file

**See:**
- `packages/frameworks/workflow mgt/docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md` Step 6
- `packages/frameworks/workflow mgt/cursorrules-rw-trigger-section.md` Step 6

### Prevention

**How to Prevent:**
- Always update Story file FIRST with forensic markers
- Then update Epic file to match the updated Story file
- Follow explicit order: Story → Epic
- Validate both files have forensic markers after update

**Key Principle:**
- Story file is authoritative source, but it must be updated during RW
- Epic file matches Story file, so Story must be updated first

---

## WF-002: Version Bump Logic Error (Step 2) {#wf-002-version-bump-logic-error}

**Status:** ✅ FIXED  
**Date Discovered:** 2025-12-03  
**Date Fixed:** 2025-12-03  
**Related Work:** Epic 2, Story 2 (PDCA Integration)

### Quick Reference: The Flaw

**Anti-Pattern:** BUILD was incremented instead of TASK when completing new tasks.

**Symptom:**
- Version shows wrong TASK component (e.g., `0.1.1.1+2` for Task 2)
- BUILD increments when it should reset (e.g., `0.1.1.1+3` for Task 3)
- Version doesn't match completed task number

**Example:**
- ❌ **Wrong:** T003 completed → `0.11.1.1+2` (BUILD incremented, TASK unchanged)
- ✅ **Correct:** T003 completed → `0.11.1.3+1` (TASK incremented to 3, BUILD reset to 1)

**Impact:** Multiple tasks can be released with TASK=1, only BUILD incremented (1-9), breaking version traceability.

### Root Cause Analysis

**Primary Root Cause:**
- **Location:** RW Step 2 (Bump Version) instructions
- **Problem:** Vague instruction didn't specify how to determine if task is new or same
- **Missing:** No mandatory Story file read, no task number extraction, no validation

**Why It Happened:**
- Instruction said "increment BUILD for same task, or set new TASK+BUILD=1"
- But didn't specify HOW to determine which case
- No source of truth specified (where to find completed task)
- Agent defaulted to "increment BUILD" without checking

### The Fix

**Solution:** Explicit, mandatory step-by-step procedure in RW Step 2:

1. **MUST** read Story file to identify completed task
2. **MUST** extract task number from task identifier
3. **MUST** compare task number to current VERSION_TASK
4. **MUST** validate before and after updating

**See:**
- `packages/frameworks/workflow mgt/docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md` Step 2
- `packages/frameworks/workflow mgt/cursorrules-rw-trigger-section.md` Step 2
- `docs/architecture/standards-and-adrs/versioning-error-reference-guide.md` (detailed analysis)

### Prevention

**How to Prevent:**
- Always read Story file first (source of truth)
- Always extract task number from task identifier
- Always compare completed task vs. current VERSION_TASK
- Always validate before and after updating

---

## How to Use This Document

### When a New Flaw is Discovered

**Step 1: Document the Flaw**
- Add new entry to "Quick Reference: All Known Flaws" table
- Create detailed section following the template:
  - Quick Reference (symptom, example, impact)
  - Root Cause Analysis
  - The Fix (solution, implementation, pointers)
  - Prevention

**Step 2: Implement the Fix**
- Update relevant workflow documentation
- Update `.cursorrules` if needed
- Update agent execution guides if needed

**Step 3: Update This Document**
- Mark flaw as FIXED
- Add date fixed
- Add pointers to fix implementation
- Update prevention section

### When Reviewing Workflow Procedures

**Checklist:**
- [ ] Review all known flaws in this document
- [ ] Verify fixes are still in place
- [ ] Check if any new flaws have emerged
- [ ] Update prevention strategies if needed

### When Onboarding New Team Members

**Process:**
1. Share this document as context
2. Explain each flaw and why it matters
3. Walk through the fixes
4. Show examples of correct vs. incorrect behavior
5. Emphasize prevention strategies

---

## Related Documentation

### Core Workflow Documents
- **[Release Workflow Agent Execution (source)](https://github.com/earlution/ai-dev-kit/blob/main/packages/frameworks/workflow%20mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md)** - Complete step-by-step guide
- **[Cursor Rules RW Trigger Section (source)](https://github.com/earlution/ai-dev-kit/blob/main/packages/frameworks/workflow%20mgt/cursorrules-rw-trigger-section.md)** - RW trigger instructions
- **[Workflow Hardening Guide](workflow-hardening-guide.md)** - Core principles for workflow design

### Versioning Documents
- **[Versioning Error Reference Guide](versioning-error-reference-guide.md)** - Versioning-specific errors (WF-002 detailed here)
- **[Versioning Policy](dev-kit-versioning-policy.md)** - Versioning schema definition

### Integration Documents
- **[Integration Troubleshooting Guide (source)](https://github.com/earlution/ai-dev-kit/blob/main/packages/frameworks/numbering%20%26%20versioning/integration/integration-troubleshooting-guide.md)** - Integration issues and solutions

---

## Key Takeaways

### Common Patterns in Flaws

1. **Missing Explicit Order:** Steps don't specify order of operations
2. **Missing Mandatory Checks:** Steps don't require reading source of truth
3. **Missing Validation:** Steps don't validate before/after state
4. **Vague Instructions:** Steps use ambiguous language instead of explicit procedures

### How Flaws Are Fixed

1. **Make Order Explicit:** Specify FIRST/THEN order of operations
2. **Add Mandatory Checks:** Require reading source of truth
3. **Add Validation:** Require before/after validation
4. **Clarify Instructions:** Replace vague language with explicit step-by-step procedures

### How to Prevent Future Flaws

1. **Follow Explicit Procedures:** Don't skip steps, follow order
2. **Read Source of Truth First:** Always read authoritative sources
3. **Validate Everything:** Check before and after state
4. **Document Decisions:** Show your work, explain choices

---

## WF-003: BR/FR Fix Attempts Not Documented {#wf-003-br-fr-fix-attempts-not-documented}

**Status:** ✅ FIXED  
**Date Discovered:** 2025-12-05  
**Date Fixed:** 2025-12-05  
**Related Work:** Epic 3, Story 3 (Versioning Integration with Kanban & RW)

### Quick Reference: The Flaw

**Anti-Pattern:** Fix attempts for bugs weren't being documented in Bug Report (BR) or Feature Request (FR) documents, preventing knowledge transfer between builds.

**Symptom:**
- Bug fix attempted in release v0.X.Y.Z+N
- Bug still present in subsequent releases
- No record of what was attempted, what worked, what didn't
- Next build starts from scratch without learning from previous attempts
- Result: Repeated fix attempts, wasted effort, no knowledge accumulation

**Example:**
- ❌ **Wrong:** Bug fixed in v0.2.1.1+3, bug still present, no documentation of fix attempt
- ✅ **Correct:** Bug fix attempted in v0.2.1.1+3, documented in BR "Fix Attempt History" section with what was tried, what worked, what didn't, and lessons learned

**Impact:** Knowledge loss between builds, repeated fix attempts, inability to learn from previous attempts.

### Root Cause Analysis

**Primary Root Cause:**
- **Location:** Release Workflow (RW) lacked a step to update BR/FR documents
- **Problem:** RW updated Kanban docs, changelogs, version files, but not BR/FR docs
- **Workflow Gap:** No mechanism to document fix attempts in BR/FR documents during release

**What Happened:**
1. Bug fix attempted in release
2. Changelog updated with fix description
3. Kanban docs updated with version markers
4. But BR/FR document never updated with fix attempt information
5. Result: No record of fix attempt in BR/FR document

**Why It Happened:**
- RW focused on versioning, changelogs, and Kanban updates
- BR/FR documents were treated as intake artifacts, not living documents
- No step existed to update BR/FR docs during release
- Fix attempt information existed in changelog but not in BR/FR document

### The Fix

**Solution:** Added new RW Step 6: "Update BR/FR Docs" before "Auto-update Kanban Docs" (now Step 7).

**Implementation:**
1. **Updated BR Template:**
   - Added "Fix Attempt History" section to `BR_TEMPLATE.md`
   - Template includes fields for:
     - Fix Description
     - Changes Made
     - Verification Status
     - Result (Fixed/Partially Fixed/Not Fixed)
     - Lessons Learned
     - Next Steps

2. **Created RW Step 6:**
   - **Purpose:** Document flaws, attempted fixes, and verification status in BR/FR docs
   - **For Bug Reports:**
     - Search for BR files linked to completed task
     - Add new entry to "Fix Attempt History" section
     - Document flaw description, attempted fix, verification status, lessons learned
   - **For Feature Requests:**
     - Search for FR files linked to completed task
     - Update "Intake Decision" section with implementation status
     - Document implementation details and verification status

3. **Updated RW Documentation:**
   - Updated `release-workflow-agent-execution.md` with new Step 6
   - Updated `cursorrules-rw-trigger-section.md` with new Step 6
   - Renumbered all subsequent steps (Step 7-14)

**Benefits:**
- Knowledge transfer between builds
- Learning from previous fix attempts
- Reduced repeated fix attempts
- Complete fix attempt history in BR documents

**See:**
- **[Release Workflow Agent Execution Guide (source)](https://github.com/earlution/ai-dev-kit/blob/main/packages/frameworks/workflow%20mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md)** - Step 6 for the complete procedure
- **[Cursor Rules RW Trigger Section (source)](https://github.com/earlution/ai-dev-kit/blob/main/packages/frameworks/workflow%20mgt/cursorrules-rw-trigger-section.md)** - Step 6 for the updated agent execution rules
- **[BR Template (source)](https://github.com/earlution/ai-dev-kit/blob/main/packages/frameworks/kanban/templates/BR_TEMPLATE.md)** - "Fix Attempt History" section

---

## WF-004: Story File Missing During RW Update (Step 7) {#wf-004-story-file-missing-during-rw-update}

**Status:** 🔧 TO FIX  
**Date Discovered:** 2025-12-05  
**Date Fixed:** TBD  
**Related Work:** Epic 5, Story 1 (Documentation Maintenance Framework)

### Quick Reference: The Flaw

**Anti-Pattern:** RW Step 7 assumes Story file exists and fails when it doesn't, even if the Story is referenced in the Epic file.

**Symptom:**
- Epic file references Story in Story Checklist (e.g., `Story-004-*.md`)
- Story file doesn't exist in filesystem
- RW Step 7 fails with "Story file not found" error
- RW workflow stops, blocking release
- Result: Release blocked due to missing Story file

**Example:**
- ❌ **Wrong:** Epic-5.md references `Story-004-*.md` in Story Checklist, but file doesn't exist → RW Step 7 fails
- ✅ **Correct:** Epic-5.md references `Story-004-*.md`, file doesn't exist → RW Step 7 checks existence, creates from template, then updates

**Impact:** RW workflow fails when Story files are referenced but not yet created, blocking releases unnecessarily.

### Root Cause Analysis

**Primary Root Cause:**
- **Location:** RW Step 7 (Auto-update Kanban Docs) ANALYZE phase
- **Problem:** Step 7 doesn't check if Story file exists before trying to read/update it
- **Workflow Gap:** No pre-existence check, no template-based creation fallback

**What Happens:**
1. RW Step 7 extracts Story number from version (e.g., Story 4)
2. RW Step 7 tries to find Story file using pattern matching
3. Story file doesn't exist (not yet created)
4. RW Step 7 fails with file not found error
5. RW workflow stops, blocking release

**Why It Happens:**
- Step 7 documentation assumes Story file exists
- No pre-existence check in ANALYZE phase
- No fallback to create from template
- No guidance on handling missing Story files

### The Fix

**Solution:** Add pre-existence check and template-based creation to RW Step 7:

1. **ANALYZE Phase Enhancement:**
   - Check if Story file exists before proceeding
   - If Story file doesn't exist:
     - Check if Story is referenced in Epic file Story Checklist
     - If referenced, create Story file from template
     - Extract Story name from Epic file reference
     - Generate Story file with proper naming and structure
     - Then proceed with normal update flow

2. **Template-Based Creation:**
   - Use Story template: `packages/frameworks/kanban/templates/STORY_TEMPLATE.md`
   - Populate template with:
     - Epic number and Story number from version
     - Story name from Epic file reference
     - Default status (TODO)
     - Default priority (from Epic or MEDIUM)
     - Proper file naming: `Story-\{N\}-\{Name\}.md`
   - Create file in correct location (from config or fallback pattern)

3. **Substep Generation:**
   - Generate substep on-the-fly: "Create Story file from template"
   - Document creation in RW execution log
   - Proceed with normal Story file update flow

**Implementation:**
- Update `release-workflow-agent-execution.md` Step 7 ANALYZE phase
- Add pre-existence check logic
- Add template-based creation procedure
- Update `cursorrules-rw-trigger-section.md` Step 7 instructions
- Document template path and creation procedure

**See:**
- `packages/frameworks/workflow mgt/docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md` Step 7
- `packages/frameworks/workflow mgt/cursorrules-rw-trigger-section.md` Step 7
- `packages/frameworks/kanban/templates/STORY_TEMPLATE.md` (template to use)

### Prevention

**How to Prevent:**
- Always check Story file existence before reading/updating
- If Story referenced in Epic but file missing, create from template
- Use template-based creation to ensure consistency
- Document creation in RW execution log

**Key Principle:**
- RW should be resilient to missing Story files
- If Story is referenced in Epic, it should exist (create if missing)
- Template-based creation ensures consistency and proper structure

---

## Version History

| Date | Version | Changes |
| --- | --- | --- |
| 2025-12-04 | 1.0 | Initial document created with WF-001 (Story file not updated first) and WF-002 (Version bump logic error) |
| 2025-12-05 | 1.1 | Added WF-003 (BR/FR fix attempts not documented) - New RW Step 6 added to document fix attempts |
| 2025-12-05 | 1.2 | Added WF-004 (Story file missing during RW update) - RW Step 7 needs pre-existence check and template-based creation |

---

## Contact and Escalation

**If a new flaw is discovered:**
1. Document it in this guide following the template
2. Implement the fix
3. Update this document with fix details
4. Update related documentation
5. Escalate if fix needs further refinement

**Questions or issues:**
- Review related documentation (see "Related Documentation" section)
- Check workflow execution guides for current procedures
- Verify fixes are still in place

---

_Last updated: 2025-12-05_  
_This document should be updated whenever a new workflow flaw is discovered or fixed._

