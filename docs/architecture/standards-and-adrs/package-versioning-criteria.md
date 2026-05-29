---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-08T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Package Versioning Criteria (Guidance)

**Status:** Active  
**Last Updated:** 2025-12-08  
**Epic:** Epic 3 - Numbering & Versioning Framework  
**Story:** Story 2 - Versioning Cookbook & Examples  
**Related:** Package Version Workflow (PVW), Dual-Versioning Guide

---

## Executive Summary

This document defines **version bump criteria as guidance** for the Package Version Workflow (PVW). These criteria are used by intelligent agents to inform decisions, not as hard rules that must be followed mechanically.

**Key Principle:** Criteria provide guidance for intelligent decision-making. Agents analyze actual changes, consider context and impact, and make informed decisions using these criteria as reference points.

---

## MAJOR Version Bump (X.0.0) - Guidance

### Typical Indicators

**Breaking Structure Changes:**
- Removing or renaming core files/directories
- Changing required file locations or names
- Removing templates or core components
- Changing package directory structure significantly

**Breaking Policy Changes:**
- Changing core policy rules that break existing implementations
- Removing policy options or requirements
- Changing mandatory vs. optional requirements
- Changing integration patterns that break existing setups

**Breaking API Changes (for script packages):**
- Removing command-line arguments or options
- Changing script behavior in incompatible ways
- Removing functions or classes from public API
- Changing return types or signatures

### Agent Analysis Pattern

**Agent Should:**
1. Analyze actual changes: What files changed? What was removed?
2. Consider impact: Will this break existing implementations?
3. Evaluate context: Is this truly breaking, or can it be handled gracefully?

**Example Decision Process:**
```
Change: Removed `EPIC_TEMPLATE.md`
Analysis:
  - File removed: ✅ Breaking change indicator
  - Impact: Consumers may depend on this template
  - Context: No migration path provided
Decision: MAJOR bump (breaking change)
```

### Examples

**✅ MAJOR Bump:**
- Removing `EPIC_TEMPLATE.md` (breaking - consumers depend on it)
- Changing `version_file` location requirement (breaking - breaks existing configs)
- Removing support for old version format (breaking - breaks existing projects)
- Changing required integration pattern (breaking - breaks existing setups)

**❌ NOT MAJOR:**
- Adding new templates (MINOR)
- Adding new optional features (MINOR)
- Clarifying documentation (PATCH)
- Fixing typos (PATCH)

---

## MINOR Version Bump (x.Y.0) - Guidance

### Typical Indicators

**New Features:**
- Adding new templates or guides
- Adding new integration patterns
- Adding new optional features or capabilities
- Adding new examples or use cases

**Enhancements:**
- Expanding existing templates with new sections
- Adding new policy options (non-breaking)
- Adding new configuration options
- Adding new validation rules (non-breaking)

**New Documentation:**
- Adding new guides or tutorials
- Adding new examples or case studies
- Adding new integration documentation
- Adding new troubleshooting guides

### Agent Analysis Pattern

**Agent Should:**
1. Analyze actual changes: What was added? Is it new functionality?
2. Consider compatibility: Is this backward compatible?
3. Evaluate significance: Is this substantial enough for MINOR?

**Example Decision Process:**
```
Change: Added `integration/kanban-integration.md`
Analysis:
  - New file added: ✅ New feature indicator
  - Compatibility: No breaking changes
  - Significance: Substantial new documentation
Decision: MINOR bump (new feature, backward compatible)
```

### Examples

**✅ MINOR Bump:**
- Adding new `MIGRATION_GUIDE.md` (new feature)
- Adding new template variant (new feature)
- Adding new integration pattern (new feature)
- Expanding existing guide with new sections (enhancement)

**❌ NOT MINOR:**
- Fixing broken links (PATCH)
- Correcting typos (PATCH)
- Clarifying ambiguous text (PATCH)
- Removing features (MAJOR)

---

## PATCH Version Bump (x.y.Z) - Guidance

### Typical Indicators

**Bug Fixes:**
- Fixing broken links or references
- Correcting incorrect examples or code snippets
- Fixing formatting or rendering issues
- Fixing validation script bugs

**Corrections:**
- Correcting typos or grammatical errors
- Correcting factual errors
- Correcting version numbers or dates
- Correcting file paths or references

**Clarifications:**
- Clarifying ambiguous language
- Adding missing context or explanations
- Improving readability without changing meaning
- Adding cross-references or links

**Minor Improvements:**
- Improving formatting or structure
- Updating outdated information (non-breaking)
- Improving code examples (non-breaking)
- Minor refactoring of documentation structure

### Agent Analysis Pattern

**Agent Should:**
1. Analyze actual changes: What was fixed? What was corrected?
2. Consider impact: Does this add functionality or just fix issues?
3. Evaluate scope: Is this a minor change or substantial?

**Example Decision Process:**
```
Change: Fixed broken link in README
Analysis:
  - Link fixed: ✅ Bug fix indicator
  - Impact: No new functionality
  - Scope: Minor correction
Decision: PATCH bump (bug fix, no new functionality)
```

### Examples

**✅ PATCH Bump:**
- Fixing broken link to external resource
- Correcting typo in template
- Clarifying ambiguous policy statement
- Fixing code example syntax error

**❌ NOT PATCH:**
- Adding new template (MINOR)
- Removing feature (MAJOR)
- Changing structure (MAJOR)

---

## Version Bump Decision Matrix

| Change Type | MAJOR | MINOR | PATCH |
|------------|-------|-------|-------|
| **Breaking Changes** | ✅ | ❌ | ❌ |
| **New Features** | ❌ | ✅ | ❌ |
| **Enhancements** | ❌ | ✅ | ❌ |
| **Bug Fixes** | ❌ | ❌ | ✅ |
| **Corrections** | ❌ | ❌ | ✅ |
| **Clarifications** | ❌ | ❌ | ✅ |
| **Minor Improvements** | ❌ | ❌ | ✅ |

---

## Agent Decision-Making Process

### Step 1: Analyze Changes

**Agent Actions:**
1. Read package files and structure
2. Analyze git diff for actual changes
3. Classify changes (added/removed/modified)
4. Assess impact (breaking/new feature/bug fix/clarification)

### Step 2: Apply Criteria (Guidance)

**Agent Actions:**
1. Review criteria for each bump type
2. Match changes against criteria patterns
3. Consider context and impact
4. Make intelligent decision (not mechanical)

### Step 3: Document Reasoning

**Agent Actions:**
1. Document bump type chosen
2. Explain why this bump type was chosen
3. Reference specific changes
4. Explain impact assessment

**Example Documentation:**
```markdown
### Justification

**Bump Type:** MINOR

**Reason:** Added new integration guide for Workflow Management package.

**Changes:**
- Added `integration/workflow-management-integration.md`
- Added new integration pattern examples
- Expanded integration documentation section

**Criteria Reference:** Section 3.2 - MINOR Version Bump
- ✅ New feature: New integration guide
- ✅ Enhancement: Expanded documentation

**Impact Assessment:** None - backward compatible addition
```

---

## Key Principles

### Criteria as Guidance

- ✅ **Guidance, Not Rules:** Criteria inform decisions, not dictate them
- ✅ **Intelligent Application:** Agent applies criteria intelligently based on context
- ✅ **Context-Aware:** Agent considers package type, impact, and context
- ✅ **Adaptive:** Agent handles edge cases intelligently

### Agent Decision-Making

- ✅ **Intelligent Analysis:** Agent analyzes actual changes, not mechanical rules
- ✅ **Context-Aware:** Agent considers package type, impact, and context
- ✅ **Reasoning:** Agent documents decisions clearly
- ✅ **Adaptive:** Agent handles edge cases intelligently

### Documentation

- ✅ **Clear Reasoning:** Agent documents why bump type was chosen
- ✅ **Change Reference:** Agent references specific changes
- ✅ **Impact Assessment:** Agent explains impact on consumers
- ✅ **Criteria Application:** Agent documents how criteria were applied

---

## References

- **Package Version Workflow:** `packages/frameworks/workflow mgt/docs/documentation/Developer_Docs/vwmp/package-version-workflow-agent-execution.md`
- **Agent-Driven Execution:** `packages/frameworks/workflow mgt/docs/documentation/Developer_Docs/vwmp/agent-driven-workflow-execution.md`
- **Dual-Versioning Guide:** `docs/architecture/standards-and-adrs/dual-versioning-package-managers.md`

---

**Last Updated:** 2025-12-08  
**Document Version:** 1.0.0

