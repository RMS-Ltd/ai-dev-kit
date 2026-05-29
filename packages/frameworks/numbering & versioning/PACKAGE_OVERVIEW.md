---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:02:07Z
expires_at: null
housekeeping_policy: keep
---

# Numbering & Versioning Policy Package

**Version:** 2.0.0  
**Last Updated:** 2025-12-02  
**Source:** fynd.deals (Epic 15, Story 1)  
**Purpose:** Portable policy package for implementing numbering and versioning strategies

---

## Package Contents

This directory contains a complete, portable set of policies for implementing numbering and versioning strategies in software projects.

### Core Documents

1. **`README.md`** - Overview and quick reference
2. **`IMPLEMENTATION_GUIDE.md`** - Step-by-step implementation guide for other projects
3. **`PACKAGE_OVERVIEW.md`** - This file - package structure and usage

### Versioning Policies

4. **`versioning-policy.md`** - Semantic versioning schema (`RC.EPIC.STORY.TASK+BUILD`) with Epic renumbering strategy
5. **`versioning-strategy.md`** - Complete versioning strategy with forensic traceability

### Numbering Policies

6. **`learning-outcome-numbering-policy.md`** - Domain-specific numbering schema (adaptable)
7. **`set2-numbering-schema.md`** - Reference to migrated schema (informational)

### Governance

8. **`kanban-governance-policy.md`** - Kanban governance with versioning integration

### Templates

9. **`EPIC_TEMPLATE.md`** - Template for epic documents with versioning fields
10. **`STORY_TEMPLATE.md`** - Template for story documents with versioning fields

---

## 🧩 Modularity & Dependencies

This package is designed to be **fully modular**. You can:

- Use **only this package** in your project, without copying any other part of `ai-dev-kit`
- Combine it with other packages (for example, the **Workflow Management** package) when you want automation built on top of these policies

**Package dependencies:**

- **Standalone:** ✅ Yes — this package can be used on its own as a pure policy + templates module
- **Hard runtime dependencies:** ✅ None — it does not require the workflow package or any scripts to be useful
- **Soft / optional companions:**
  - `packages/frameworks/workflow mgt/` — uses this schema in an automated Release Workflow

You can:

- Adopt the **schema and policy documents only**, and ignore any references to workflows, or
- Start from this package as **conceptual reference** and derive your own policies, keeping your runtime stack completely separate

The goal is **maximum flexibility**: treat this as a self-contained module that can be dropped into any project and adapted as needed.

---

## Quick Start

1. **Read:** `README.md` for overview
2. **Review:** `versioning-policy.md` and `versioning-strategy.md` for core concepts
3. **Implement:** Follow `IMPLEMENTATION_GUIDE.md` step-by-step
4. **Customize:** Adapt paths, terminology, and structure for your project

---

## Key Features

### Versioning Schema
- **Format:** `RC.EPIC.STORY.TASK+BUILD`
- **Parallel Development:** Each epic/workstream maintains its own version stream
- **Forensic Traceability:** Complete accountability through version ↔ work items ↔ changelogs
- **Immutability:** Historical metadata preserved as-is
- **Epic Renumbering:** Clean separation between legacy (Epic 1-9) and new (Epic 10+) formats

### Numbering Systems
- **Work Items:** `E{epic}S{story}T{task}` format
- **Domain Objects:** Hierarchical numbering schemas (adaptable)
- **Uniqueness:** IDs never reused, immutable once assigned

### Integration
- **Release Workflow:** 10-step automated workflow (see workflow mgt package)
- **Validation:** Branch context and changelog format validators
- **CI/CD:** Ready for pipeline integration
- **Epic Branch Workflow:** Always work on epic branches, never directly on `main`

---

## Customization Notes

All documents contain:
- ✅ **Portable Package Header** - Identifies document as part of portable package
- ✅ **Customization Notes** - Guidance on adapting for other projects
- ✅ **Relative References** - Cross-references use relative paths within package
- ✅ **Example Paths** - Project-specific paths marked as examples

**What to Customize:**
- File paths (version file, changelog directories)
- Project names and terminology
- Work item structure (if different from Epic/Story/Task)
- CI/CD integration points
- Validation script locations
- Epic ranges (if different from 1-9 legacy, 10+ new)

---

## Document Relationships

```
README.md (entry point)
    ├── versioning-policy.md (schema definition)
    │   └── versioning-strategy.md (complete strategy)
    ├── kanban-governance-policy.md (work item structure)
    │   └── versioning-policy.md
    ├── learning-outcome-numbering-policy.md (domain numbering)
    └── IMPLEMENTATION_GUIDE.md (step-by-step guide)
        └── References all above documents
```

---

## Usage Scenarios

### Scenario 1: New Project
1. Copy entire package to your project
2. Follow `IMPLEMENTATION_GUIDE.md`
3. Customize all paths and terminology
4. Create validation scripts
5. Integrate with your release workflow

### Scenario 2: Existing Project
1. Review current versioning approach
2. Map existing structure to new schema
3. Plan migration strategy (see implementation guide)
4. Gradually adopt new system
5. Grandfather existing versions
6. Consider epic renumbering strategy if needed

### Scenario 3: Reference Only
1. Use as reference for best practices
2. Extract concepts relevant to your project
3. Adapt schema to your needs
4. Create your own policy documents

---

## Maintenance

**When updating these documents:**
- Maintain portable package headers
- Keep customization notes current
- Update cross-references if structure changes
- Preserve relative path references
- Document any breaking changes

---

## Support

For questions or issues:
1. Review `IMPLEMENTATION_GUIDE.md` for detailed instructions
2. Check individual policy documents for specific guidance
3. Refer to `README.md` for quick reference

---

**Package Version:** 2.0.0  
**Last Updated:** 2025-12-02  
**Source Project:** fynd.deals (Epic 15, Story 1)  
**License:** See source project license
