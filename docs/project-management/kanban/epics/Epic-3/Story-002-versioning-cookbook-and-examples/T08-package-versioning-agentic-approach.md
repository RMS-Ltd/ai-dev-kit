# Package Versioning: Agentic Approach (Revised)

**Task:** E3:S02:T08 – Audit dual-versioning application across packages and propose strategy  
**Date:** 2025-12-08  
**Status:** PROPOSAL  
**Related:** T08-dual-versioning-package-audit-report.md, T08-package-versioning-guardrails-discussion.md

---

## Executive Summary

This document revises the package versioning approach to use **intelligent agentic execution** (following the Release Workflow pattern) rather than deterministic scripts. The Package Version Workflow (PVW) will be **triggered by RW** and use intelligent analysis to determine appropriate version bumps.

**Key Principles:**
- ✅ **Agent-Driven:** Intelligent analysis and decision-making, not deterministic scripts
- ✅ **RW-Triggered:** PVW executes as part of RW workflow
- ✅ **Context-Aware:** Analyzes actual changes to determine bump type
- ✅ **Validation as Tools:** Scripts provide checks, agent makes decisions
- ✅ **Criteria as Guidance:** Clear criteria inform decisions, not hard rules

---

## 1. Workflow Name & Integration

### 1.1 Proposed Name

**Package Version Workflow (PVW)**

**Rationale:**
- Follows RW naming pattern (Release Workflow → RW)
- Clear and descriptive
- Easy to reference ("PVW" trigger)

### 1.2 Integration with Release Workflow

**Trigger Point:** PVW executes as part of RW, specifically:

**Option A: RW Step Integration (Recommended)**
- Add PVW as a step within RW (e.g., Step 2.5: Package Version Bump)
- Executes after project version bump (Step 2)
- Before changelog creation (Step 3)

**Option B: Post-RW Hook**
- PVW executes after RW completes successfully
- Separate workflow triggered by RW completion
- Allows independent execution if needed

**Recommendation:** Option A - Integrated as RW step

**RW Integration Pattern:**
```yaml
# In release-workflow.yaml
steps:
  - id: step-2
    name: Bump Project Version
    # ... existing step 2 ...
  
  - id: step-2.5
    name: Package Version Workflow (PVW)
    type: package_version
    handler: package.version_bump
    required: false  # Optional - only if packages changed
    enabled: true
    dependencies:
      - step-2
    config:
      packages_dir: packages/frameworks
      validation_scripts: scripts/validation/package
```

---

## 2. Agentic Execution Pattern

### 2.1 Core Principle

**PVW uses intelligent agentic execution, not deterministic scripts.**

**Agent-Driven Pattern:**
- Agent analyzes changes to each package
- Agent determines appropriate bump type based on actual changes
- Agent makes intelligent decisions using criteria as guidance
- Agent validates decisions using scripts as tools
- Agent documents reasoning and justification

**NOT Deterministic:**
- ❌ Scripts that automatically determine bump type
- ❌ Hard rules that don't account for context
- ❌ Blind execution without analysis

### 2.2 Agent Execution Cycle

For each package, the agent follows this pattern:

```
1. ANALYZE
   ├─ Read package files and structure
   ├─ Identify what changed (files, content, structure)
   ├─ Understand package type (documentation, scripts, templates)
   ├─ Review current package version
   └─ Gather context (project version, related changes)

2. DETERMINE
   ├─ Analyze changes against bump criteria
   ├─ Consider package-specific context
   ├─ Determine appropriate bump type (MAJOR/MINOR/PATCH)
   ├─ Document reasoning and justification
   └─ Plan version update approach

3. EXECUTE
   ├─ Update package version in README
   ├─ Update package manifest files (if published)
   ├─ Create/update package changelog entry
   ├─ Document justification
   └─ Update package metadata

4. VALIDATE
   ├─ Run validation scripts as tools (not determiners)
   ├─ Verify version format is correct
   ├─ Check version consistency across locations
   ├─ Validate changelog entry exists
   └─ Confirm justification aligns with changes

5. PROCEED
   ├─ Document what was done
   ├─ Pass package version info to next RW steps
   └─ Move to next package or next RW step
```

### 2.3 Example: Agent Analysis for Package Version Bump

**Scenario:** Workflow Management package - Added new integration guide

**Agent Analysis:**

1. **ANALYZE:**
   - Read `packages/frameworks/workflow mgt/README.md` → Current version: 2.0.0
   - Identify changes: Added `integration/kanban-integration.md`
   - Understand package type: Documentation + Scripts
   - Review project version: 0.3.2.8+1 (Epic 3, Story 2, Task 8)

2. **DETERMINE:**
   - Analyze changes:
     - ✅ New file added: `integration/kanban-integration.md`
     - ✅ New feature: Integration guide
     - ✅ Backward compatible: No breaking changes
     - ✅ No structure changes: Package structure unchanged
   - Apply criteria (Section 3):
     - MINOR criteria: "New features, enhancements, additions (backward compatible)"
     - ✅ Matches: New integration guide is a new feature
     - ✅ Backward compatible: No breaking changes
   - Decision: **MINOR bump** (2.0.0 → 2.1.0)
   - Reasoning: "Added new integration guide - new feature, backward compatible"

3. **EXECUTE:**
   - Update README: `**Version:** 2.1.0`
   - Update `**Last Updated:** 2025-12-08`
   - Create changelog entry:
     ```markdown
     ## [2.1.0] - 2025-12-08
     
     **Package Version:** 2.1.0
     **Project Version:** 0.3.2.8+1
     **Bump Type:** MINOR
     
     ### Justification
     Added new integration guide for Kanban package. This is a new feature that is backward compatible.
     
     ### Added
     - `integration/kanban-integration.md` - Integration guide for Kanban package
     ```

4. **VALIDATE:**
   - Run `validate_package_version.py` → ✅ Format valid (2.1.0)
   - Run `validate_version_increment.py` → ✅ Increment valid (2.0.0 → 2.1.0)
   - Check changelog entry → ✅ Exists and complete
   - Verify justification → ✅ Aligns with changes

5. **PROCEED:**
   - Document: "Workflow Management package bumped to 2.1.0 (MINOR) - new integration guide"
   - Pass to RW Step 3: Include package version in changelog
   - Move to next package or continue RW

---

## 3. Version Bump Criteria (Guidance, Not Rules)

### 3.1 Criteria as Guidance

**Key Principle:** Criteria provide guidance for intelligent decision-making, not hard rules.

**Agent Uses Criteria To:**
- Understand what typically constitutes MAJOR/MINOR/PATCH
- Analyze changes against common patterns
- Make informed decisions based on context
- Document reasoning clearly

**Agent Does NOT:**
- Blindly follow criteria without considering context
- Apply criteria mechanically without analysis
- Ignore edge cases or special circumstances

### 3.2 MAJOR Version Bump (X.0.0) - Guidance

**Typical Indicators:**
- Breaking structure changes (removing/renaming core files)
- Breaking policy changes (changing mandatory requirements)
- Breaking API changes (removing/renaming public interfaces)
- Removing features or capabilities

**Agent Analysis:**
- Analyze actual changes: What files changed? What was removed?
- Consider impact: Will this break existing implementations?
- Evaluate context: Is this truly breaking, or can it be handled gracefully?

**Example Decision Process:**
```
Change: Removed `EPIC_TEMPLATE.md`
Analysis:
  - File removed: ✅ Breaking change indicator
  - Impact: Consumers may depend on this template
  - Context: No migration path provided
Decision: MAJOR bump (breaking change)
```

### 3.3 MINOR Version Bump (x.Y.0) - Guidance

**Typical Indicators:**
- New features or additions
- New templates or guides
- New integration patterns
- Enhancements to existing features

**Agent Analysis:**
- Analyze actual changes: What was added? Is it new functionality?
- Consider compatibility: Is this backward compatible?
- Evaluate significance: Is this substantial enough for MINOR?

**Example Decision Process:**
```
Change: Added `integration/kanban-integration.md`
Analysis:
  - New file added: ✅ New feature indicator
  - Compatibility: No breaking changes
  - Significance: Substantial new documentation
Decision: MINOR bump (new feature, backward compatible)
```

### 3.4 PATCH Version Bump (x.y.Z) - Guidance

**Typical Indicators:**
- Bug fixes or corrections
- Clarifications or improvements
- Minor formatting or structure improvements
- Fixing broken links or references

**Agent Analysis:**
- Analyze actual changes: What was fixed? What was corrected?
- Consider impact: Does this add functionality or just fix issues?
- Evaluate scope: Is this a minor change or substantial?

**Example Decision Process:**
```
Change: Fixed broken link in README
Analysis:
  - Link fixed: ✅ Bug fix indicator
  - Impact: No new functionality
  - Scope: Minor correction
Decision: PATCH bump (bug fix, no new functionality)
```

---

## 4. Validation Scripts as Tools

### 4.1 Script Purpose

**Validation scripts are tools for the agent, not determiners of decisions.**

**Scripts Provide:**
- ✅ Format validation (SemVer format check)
- ✅ Increment validation (version progression check)
- ✅ Consistency checks (version location consistency)
- ✅ Data for agent analysis

**Scripts Do NOT:**
- ❌ Determine bump type automatically
- ❌ Make decisions about what version to use
- ❌ Replace agent analysis and reasoning

### 4.2 Script Usage Pattern

**Agent Uses Scripts To:**
1. **Validate Format:** After determining bump type, verify version format is correct
2. **Check Consistency:** Verify version matches across all locations
3. **Validate Increment:** Confirm version increment is valid (not backwards, not skipping)
4. **Gather Data:** Get current versions, check for existing changelogs, etc.

**Example:**
```python
# Agent determines: MINOR bump (2.0.0 → 2.1.0)
# Agent executes: Update README, create changelog
# Agent validates: Run scripts as tools

# Run validation script (tool, not determiner)
result = run_script("validate_package_version.py", version="2.1.0")
if not result.success:
    # Agent analyzes error and determines fix
    # Script provides data, agent makes decision
```

### 4.3 Proposed Validation Scripts

**Script 1: `validate_package_version_format.py`**
- **Purpose:** Validate SemVer format
- **Input:** Version string
- **Output:** Valid/invalid + error details
- **Agent Use:** Verify format after determining version

**Script 2: `validate_package_version_increment.py`**
- **Purpose:** Validate version increment is valid
- **Input:** Old version, new version
- **Output:** Valid/invalid + error details
- **Agent Use:** Verify increment after determining bump

**Script 3: `validate_package_version_consistency.py`**
- **Purpose:** Check version consistency across locations
- **Input:** Package path
- **Output:** Consistent/inconsistent + mismatches
- **Agent Use:** Verify consistency after updating version

**Script 4: `get_package_changes.py`**
- **Purpose:** Analyze what changed in package
- **Input:** Package path, git diff
- **Output:** List of changes (files, types, impact)
- **Agent Use:** Gather data for analysis (not determine bump type)

---

## 5. PVW Workflow Definition

### 5.1 Workflow Structure

**PVW as RW Step:**

```yaml
# In release-workflow.yaml
steps:
  - id: step-2.5
    name: Package Version Workflow (PVW)
    type: package_version
    handler: package.version_bump
    required: false
    enabled: true
    dependencies:
      - step-2
    config:
      packages_dir: packages/frameworks
      auto_detect_changes: true
      validation_scripts: scripts/validation/package
```

### 5.2 PVW Execution Steps

**Step 1: Detect Changed Packages**
- Agent analyzes git diff to identify changed packages
- Agent determines which packages need version bumps
- Agent skips packages with no significant changes

**Step 2: Analyze Package Changes**
- For each changed package:
  - Agent reads package files and structure
  - Agent identifies what changed (files, content, structure)
  - Agent understands package type and context
  - Agent gathers data using scripts as tools


**Step 3: Determine Version Bumps**
- For each changed package:
  - Agent analyzes changes against criteria (guidance)
  - Agent determines appropriate bump type (MAJOR/MINOR/PATCH)
  - Agent documents reasoning and justification
  - Agent plans version update approach


**Step 4: Execute Version Updates**
- For each package:
  - Agent updates version in README
  - Agent updates package manifest files (if published)
  - Agent creates/updates package changelog entry
  - Agent documents justification


**Step 5: Validate Updates**
- For each package:
  - Agent runs validation scripts as tools
  - Agent verifies version format is correct
  - Agent checks version consistency
  - Agent validates changelog entry


**Step 6: Document & Proceed**
- Agent documents all package version changes
- Agent passes package version info to next RW steps
- Agent continues to RW Step 3 (changelog creation)

---

## 6. Integration with Release Workflow

### 6.1 RW Step Integration

**PVW as RW Step 2.5:**

```
RW Step 1: Branch Safety Check
RW Step 2: Bump Project Version
RW Step 2.5: Package Version Workflow (PVW) ← NEW
  ├─ Detect changed packages
  ├─ Analyze changes
  ├─ Determine version bumps
  ├─ Execute updates
  ├─ Validate updates
  └─ Document changes
RW Step 3: Create Detailed Changelog (includes package versions)
RW Step 4: Update Main Changelog
...
```

### 6.2 Trigger Pattern

**PVW Triggered By:**
- RW execution (automatic, if packages changed)
- Manual trigger: "PVW" command (for testing/debugging)

**PVW Execution Context:**
- Project version already bumped (RW Step 2 complete)
- Git changes staged or committed
- Package changes detected or specified

### 6.3 Cursor Rules Integration

**Add to `.cursorrules`:**

```markdown
### 📦 PACKAGE VERSION WORKFLOW (PVW) TRIGGER

**When the user types "PVW" or "pvw" (case-insensitive), or when RW Step 2.5 executes:**

1. **DO NOT** run deterministic scripts to determine bump types
2. **DO** execute PVW using intelligent agent-driven execution
3. **Follow** the agent execution pattern (ANALYZE → DETERMINE → EXECUTE → VALIDATE → PROCEED)
4. **Use** validation scripts as tools, not determiners
5. **Apply** version bump criteria as guidance, not hard rules
6. **Document** reasoning and justification for each bump
```

---

## 7. Benefits of Agentic Approach

### 7.1 Intelligence Over Determinism

**Agentic Benefits:**
- ✅ **Context-Aware:** Understands actual changes and impact
- ✅ **Adaptive:** Handles edge cases and special circumstances
- ✅ **Reasoning:** Can explain decisions and justify choices
- ✅ **Learning:** Can improve decisions based on feedback

**Deterministic Limitations:**
- ❌ **Rigid:** Can't handle edge cases well
- ❌ **Blind:** Doesn't understand context or impact
- ❌ **Brittle:** Breaks when encountering unexpected situations
- ❌ **Opaque:** Can't explain why decisions were made

### 7.2 Proven Success Pattern

**RW Success:**
- ✅ Orders of magnitude better than deterministic approach
- ✅ Handles edge cases intelligently
- ✅ Adapts to project-specific context
- ✅ Provides clear reasoning and documentation

**PVW Following Same Pattern:**
- ✅ Uses proven agentic execution methodology
- ✅ Leverages intelligent analysis and decision-making
- ✅ Provides validation scripts as tools
- ✅ Documents reasoning clearly

---

## 8. Implementation Plan

### 8.1 Phase 1: Define PVW Workflow

**Deliverables:**
- ✅ PVW workflow definition (YAML)
- ✅ Agent execution guide (similar to RW guide)
- ✅ Version bump criteria (as guidance)
- ✅ Cursor rules section

**Timeline:** 1 week

### 8.2 Phase 2: Create Validation Scripts (Tools)

**Deliverables:**
- `validate_package_version_format.py` - Format validation
- `validate_package_version_increment.py` - Increment validation
- `validate_package_version_consistency.py` - Consistency validation
- `get_package_changes.py` - Change analysis (data gathering)

**Timeline:** 1-2 weeks

### 8.3 Phase 3: Integrate with RW

**Deliverables:**
- Add PVW as RW Step 2.5
- Update RW workflow definition
- Update RW agent execution guide
- Test integration

**Timeline:** 1 week

### 8.4 Phase 4: Document & Test

**Deliverables:**
- PVW agent execution guide
- Examples and case studies
- Testing and validation
- Documentation updates

**Timeline:** 1 week

---

## 9. Open Questions

### 9.1 PVW Execution Frequency

**Question:** Should PVW run for every RW, or only when packages change?

**Options:**
- **A:** Always run (detect changes, skip if none)
- **B:** Only run when packages explicitly changed
- **C:** Configurable per project

**Recommendation:** Option A - Always run, skip if no changes detected

### 9.2 Package Change Detection

**Question:** How should PVW detect package changes?

**Options:**
- **A:** Git diff analysis (automatic)
- **B:** Manual specification (user specifies packages)
- **C:** Both (auto-detect with manual override)

**Recommendation:** Option C - Auto-detect with manual override capability

### 9.3 Version Bump Authority

**Question:** Can agent make version bump decisions autonomously, or require approval?

**Options:**
- **A:** Agent makes decisions autonomously (with validation)
- **B:** Agent proposes, requires approval for MAJOR
- **C:** Agent proposes, requires approval for all bumps

**Recommendation:** Option A - Agent makes decisions autonomously, with clear documentation and validation

---

## 10. Next Steps

### 10.1 Immediate Actions

1. **Review & Approve Approach:**
   - Review agentic execution pattern
   - Approve PVW workflow structure
   - Finalize integration with RW

2. **Create PVW Workflow Definition:**
   - Define workflow YAML structure
   - Create agent execution guide
   - Document version bump criteria as guidance

3. **Create Validation Scripts (Tools):**
   - Implement format validation script
   - Implement increment validation script
   - Implement consistency validation script
   - Implement change analysis script

### 10.2 Future Enhancements

1. **RW Integration:**
   - Add PVW as RW Step 2.5
   - Update RW workflow definition
   - Test end-to-end integration

2. **Documentation:**
   - PVW agent execution guide
   - Examples and case studies
   - Integration documentation

---

## 11. References

- **Release Workflow:** `packages/frameworks/workflow mgt/docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md`
- **Agent-Driven Execution:** `packages/frameworks/workflow mgt/docs/documentation/Developer_Docs/vwmp/agent-driven-workflow-execution.md`
- **Audit Report:** `T08-dual-versioning-package-audit-report.md`
- **Guardrails Discussion:** `T08-package-versioning-guardrails-discussion.md`

---

**Status:** PROPOSAL  
**Next Review:** After discussion and approval of agentic approach

