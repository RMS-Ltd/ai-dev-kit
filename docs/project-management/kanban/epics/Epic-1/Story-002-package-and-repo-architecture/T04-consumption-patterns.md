---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:01:50Z
expires_at: null
housekeeping_policy: keep
---

# Consumption Patterns for Framework Packages

**Task:** E1:S02:T04 – Document consumption patterns for each framework  
**Date:** 2025-12-02  
**Status:** ✅ COMPLETE

---

## Executive Summary

This document provides **detailed consumption patterns** for each framework package in `ai-dev-kit`. It includes step-by-step guides for standalone usage, combined usage, and incremental adoption, with practical examples for each scenario.

**Key Patterns:**
- **Standalone Usage:** Use one package independently
- **Combined Usage:** Use multiple packages together
- **Incremental Adoption:** Start with one package, add more over time

---

## 1. Decision Tree: Which Packages Do I Need?

### 1.1 Quick Decision Guide

```
Do you need versioning/version management?
├─ YES → Consider Numbering & Versioning package
│
Do you need automated release workflows?
├─ YES → Consider Workflow Management package
│   └─ (Optionally integrates with Numbering & Versioning)
│
Do you need work item tracking (Epic/Story/Task)?
├─ YES → Consider Kanban package
│   └─ (Optionally integrates with both other packages)
│
Do you need all three?
└─ YES → Use all packages for complete integrated system
```

### 1.2 Package Selection Matrix

| Need | Recommended Package(s) | Standalone? | Integration Benefits |
|------|------------------------|-------------|---------------------|
| Versioning policy only | Numbering & Versioning | ✅ Yes | None needed |
| Release workflow only | Workflow Management | ✅ Yes | Optional: Numbering & Versioning |
| Kanban board only | Kanban | ✅ Yes | Optional: Both other packages |
| Versioning + Workflow | Numbering & Versioning + Workflow Management | ✅ Yes | RW uses version schema |
| Versioning + Kanban | Numbering & Versioning + Kanban | ✅ Yes | Kanban uses version markers |
| Workflow + Kanban | Workflow Management + Kanban | ✅ Yes | RW updates Kanban docs |
| Complete system | All three packages | ✅ Yes | Full three-way integration |

---

## 2. Standalone Usage Patterns

### 2.1 Workflow Management Package (Standalone)

**Use Case:** You need automated release workflows but don't need Kanban or a separate versioning policy.

**Step-by-Step Guide:**

1. **Copy Package Files:**
   ```bash
   # Copy Workflow Management package
   cp -r ai-dev-kit/packages/frameworks/workflow\ mgt/* /path/to/your/project/
   ```

2. **Update File Paths:**
   - Search and replace `src/fynd_deals/version.py` → `src/yourproject/version.py`
   - Search and replace `CHANGELOG_ARCHIVE/` → Your changelog archive path
   - Search and replace `docs/documentation/` → Your documentation path

3. **Customize Version Schema (if needed):**
   - Update `docs/architecture/standards-and-adrs/versioning-policy.md`
   - Update validation scripts if schema differs

4. **Add RW Trigger to `.cursorrules`:**
   - Copy `cursorrules-rw-trigger-section.md` content
   - Paste into your `.cursorrules` file
   - Update all file paths

5. **Test the Workflow:**
   - Create a version file: `src/yourproject/version.py`
   - Create an epic branch: `git checkout -b epic/1-first-epic`
   - Send e.g. `RW E1S01T01` or `RW E1:S01:T01` in your AI assistant (**FR-060**)
   - Verify the workflow steps execute per your configuration

**What You Get:**
- ✅ Automated 11-step Release Workflow
- ✅ Version bumping and changelog generation
- ✅ Git operations (commit, tag, push)
- ✅ Validation scripts
- ✅ Included versioning policy (can swap if needed)

**What You Don't Need:**
- ❌ Kanban package (not required)
- ❌ Numbering & Versioning package (included versioning policy is sufficient)

**Example Project Structure:**
```
your-project/
├── src/
│   └── yourproject/
│       └── version.py          # Version file
├── docs/
│   └── Documentation/
│       └── Developer_Docs/
│           └── vwmp/
│               └── release-workflow-agent-execution.md
├── workflows/
│   └── release-workflow.yaml
├── scripts/
│   └── validation/
│       ├── validate_branch_context.py
│       └── validate_changelog_format.py
├── CHANGELOG.md
├── CHANGELOG_ARCHIVE/
└── .cursorrules                 # With RW trigger section
```

---

### 2.2 Numbering & Versioning Package (Standalone)

**Use Case:** You need a versioning policy and strategy but don't need workflows or Kanban.

**Step-by-Step Guide:**

1. **Copy Package Files:**
   ```bash
   # Copy Numbering & Versioning package
   cp -r ai-dev-kit/packages/frameworks/numbering\ \&\ versioning/* /path/to/your/project/docs/versioning/
   ```

2. **Customize Policy Documents:**
   - Review `versioning-policy.md` and adapt to your project
   - Review `versioning-strategy.md` and adapt to your project
   - Update examples to match your project structure

3. **Create Version File:**
   - Create `src/yourproject/version.py` following the schema
   - Use `RC.EPIC.STORY.TASK+BUILD` format (or customize)

4. **Implement Versioning:**
   - Follow `IMPLEMENTATION_GUIDE.md`
   - Set up version file location
   - Create CHANGELOG structure
   - Define your epic/story/task numbering

5. **Use Templates (if needed):**
   - Use `EPIC_TEMPLATE.md` for epic documents
   - Use `STORY_TEMPLATE.md` for story documents

**What You Get:**
- ✅ Complete versioning policy and strategy
- ✅ Implementation guide
- ✅ Templates for Epic and Story documents
- ✅ Versioning best practices

**What You Don't Need:**
- ❌ Workflow Management package (not required)
- ❌ Kanban package (not required)

**Example Project Structure:**
```
your-project/
├── src/
│   └── yourproject/
│       └── version.py          # Version file
├── docs/
│   └── versioning/
│       ├── versioning-policy.md
│       ├── versioning-strategy.md
│       ├── IMPLEMENTATION_GUIDE.md
│       ├── EPIC_TEMPLATE.md
│       └── STORY_TEMPLATE.md
└── CHANGELOG.md
```

---

### 2.3 Kanban Package (Standalone)

**Use Case:** You need work item tracking (Epic/Story/Task) but don't need workflows or versioning integration.

**Step-by-Step Guide:**

1. **Copy Package Files:**
   ```bash
   # Copy Kanban package
   cp -r ai-dev-kit/packages/frameworks/kanban/* /path/to/your/project/docs/kanban/
   ```

2. **Set Up Kanban Structure:**
   - Create `docs/project-management/kanban/` directory
   - Create `_index.md` (Kanban board)
   - Create `epics/` directory structure

3. **Customize Templates:**
   - Review `templates/EPIC_TEMPLATE.md`
   - Review `templates/STORY_TEMPLATE.md`
   - Review `templates/FR_TEMPLATE.md` and `BR_TEMPLATE.md`
   - Adapt to your project structure

4. **Set Up Governance:**
   - Review `policies/kanban-governance-policy.md`
   - Adapt to your project needs
   - Create local policy if needed

5. **Start Using Kanban:**
   - Create your first Epic using the template
   - Create Stories under the Epic
   - Create Tasks under Stories
   - Track work items

**What You Get:**
- ✅ Complete Kanban governance policy
- ✅ Epic/Story/Task templates
- ✅ FR/BR intake templates and guides
- ✅ Kanban best practices

**What You Don't Need:**
- ❌ Workflow Management package (not required, update Kanban manually)
- ❌ Numbering & Versioning package (not required, skip version markers)

**Example Project Structure:**
```
your-project/
├── docs/
│   └── project-management/
│       └── kanban/
│           ├── _index.md
│           ├── epics/
│           │   └── Epic-1.md
│           │       └── stories/
│           │           └── Story-001.md
│           └── README.md
└── docs/
    └── kanban/
        ├── policies/
        │   └── kanban-governance-policy.md
        ├── templates/
        │   ├── EPIC_TEMPLATE.md
        │   ├── STORY_TEMPLATE.md
        │   ├── FR_TEMPLATE.md
        │   └── BR_TEMPLATE.md
        └── FR_BR_INTAKE_GUIDE.md
```

---

## 3. Combined Usage Patterns

### 3.1 Workflow Management + Numbering & Versioning

**Use Case:** You need automated release workflows with a consistent versioning policy.

**Step-by-Step Guide:**

1. **Copy Both Packages:**
   ```bash
   # Copy Workflow Management
   cp -r ai-dev-kit/packages/frameworks/workflow\ mgt/* /path/to/your/project/
   
   # Copy Numbering & Versioning
   cp -r ai-dev-kit/packages/frameworks/numbering\ \&\ versioning/* /path/to/your/project/docs/versioning/
   ```

2. **Use Numbering & Versioning as Canonical:**
   - Use `numbering & versioning/versioning-policy.md` as the authoritative versioning policy
   - Remove or archive Workflow Management's included versioning policy
   - Update Workflow Management docs to reference Numbering & Versioning policy

3. **Configure Integration:**
   - Ensure both packages use the same version schema
   - Update Workflow Management validation scripts to match Numbering & Versioning schema
   - Update RW trigger section to reference Numbering & Versioning policy

4. **Test Integration:**
   - Verify RW reads version from `version.py`
   - Verify RW validates version format using Numbering & Versioning schema
   - Verify RW generates changelogs using Numbering & Versioning format

**Integration Benefits:**
- ✅ Consistent versioning policy across projects
- ✅ Shared versioning strategy
- ✅ Easier maintenance (single source of truth)
- ✅ RW automatically uses Numbering & Versioning schema

**Example Configuration:**
```python
# src/yourproject/version.py
# Uses schema from docs/versioning/versioning-policy.md

VERSION_RC = 0
VERSION_EPIC = 1
VERSION_STORY = 1
VERSION_TASK = 1
VERSION_BUILD = 1
VERSION_STRING = f"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}"
```

---

### 3.2 Kanban + Numbering & Versioning

**Use Case:** You need work item tracking with version-based traceability.

**Step-by-Step Guide:**

1. **Copy Both Packages:**
   ```bash
   # Copy Kanban
   cp -r ai-dev-kit/packages/frameworks/kanban/* /path/to/your/project/docs/kanban/
   
   # Copy Numbering & Versioning
   cp -r ai-dev-kit/packages/frameworks/numbering\ \&\ versioning/* /path/to/your/project/docs/versioning/
   ```

2. **Configure Version Markers:**
   - Review `kanban/integration/numbering-versioning-integration.md`
   - Set up version markers in Kanban docs (e.g., `✅ COMPLETE (v0.1.2.1+1)`)
   - Ensure Kanban uses same version schema as Numbering & Versioning

3. **Update Kanban Templates:**
   - Add version marker fields to Epic template
   - Add version marker fields to Story template
   - Add version marker fields to Task checklists

4. **Use Version Markers:**
   - When completing tasks, add version markers
   - When completing stories, add version markers
   - Link Kanban work items to version numbers

**Integration Benefits:**
- ✅ Forensic traceability (work items → versions)
- ✅ Version-based ordering
- ✅ Clear version history per work item

**Example Kanban Entry:**
```markdown
## Tasks

- [x] **T001 – Create feature** ✅ COMPLETE (v0.1.2.1+1)
- [x] **T002 – Test feature** ✅ COMPLETE (v0.1.2.2+1)
- [ ] **T003 – Document feature** - TODO
```

---

### 3.3 Kanban + Workflow Management

**Use Case:** You need work item tracking with automated updates via Release Workflow.

**Step-by-Step Guide:**

1. **Copy Both Packages:**
   ```bash
   # Copy Kanban
   cp -r ai-dev-kit/packages/frameworks/kanban/* /path/to/your/project/docs/kanban/
   
   # Copy Workflow Management
   cp -r ai-dev-kit/packages/frameworks/workflow\ mgt/* /path/to/your/project/
   ```

2. **Configure RW → Kanban Integration:**
   - Review `kanban/integration/workflow-management-integration.md`
   - Update RW Step 6 to update Kanban docs
   - Configure Kanban doc paths in RW trigger section

3. **Set Up Kanban Structure:**
   - Create Kanban board structure
   - Create Epic/Story documents
   - Ensure RW can find and update Kanban docs

4. **Test Integration:**
   - Run RW on a task
   - Verify RW updates Kanban docs automatically
   - Verify version markers are added correctly

**Integration Benefits:**
- ✅ Automatic Kanban updates via RW
- ✅ Consistent version markers
- ✅ Reduced manual work
- ✅ Always up-to-date Kanban docs

**Example RW Step 6 Update:**
```markdown
## Tasks

- [x] **T001 – Create feature** ✅ COMPLETE (v0.1.2.1+1)
- [x] **T002 – Test feature** ✅ COMPLETE (v0.1.2.2+1)  # ← Auto-updated by RW
```

---

### 3.4 All Three Packages (Complete Integration)

**Use Case:** You need a complete integrated system with end-to-end traceability.

**Step-by-Step Guide:**

1. **Copy All Packages:**
   ```bash
   # Copy all three packages
   cp -r ai-dev-kit/packages/frameworks/workflow\ mgt/* /path/to/your/project/
   cp -r ai-dev-kit/packages/frameworks/numbering\ \&\ versioning/* /path/to/your/project/docs/versioning/
   cp -r ai-dev-kit/packages/frameworks/kanban/* /path/to/your/project/docs/kanban/
   ```

2. **Configure Three-Way Integration:**
   - Use Numbering & Versioning as canonical versioning policy
   - Configure RW to use Numbering & Versioning schema
   - Configure RW to update Kanban docs
   - Configure Kanban to use version markers

3. **Set Up Complete System:**
   - Create version file using Numbering & Versioning schema
   - Create Kanban board structure
   - Add RW trigger to `.cursorrules`
   - Review integration guides for all three packages

4. **Test Complete Integration:**
   - Create a task in Kanban
   - Work on the task
   - Run RW
   - Verify:
     - Version bumped correctly
     - Changelog generated
     - Kanban docs updated with version marker
     - All three systems stay in sync

**Integration Benefits:**
- ✅ Complete end-to-end traceability
- ✅ Automated workflows
- ✅ Consistent versioning
- ✅ Always synchronized systems

**Example Complete Flow:**
1. **Create Task in Kanban:** `E1:S01:T01 – Implement feature`
2. **Work on Task:** Make code changes
3. **Run RW:** e.g. `RW E1S01T01` or `RW E1:S01:T01` in AI assistant (**FR-060**)
4. **RW Executes:**
   - Bumps version: `0.1.1.1+1` → `0.1.1.1+2`
   - Generates changelog
   - Updates Kanban: `✅ COMPLETE (v0.1.1.1+2)`
   - Commits and tags
5. **Result:** Task complete, versioned, and traceable

---

## 4. Incremental Adoption Patterns

### 4.1 Pattern: Start with Versioning, Add Workflow

**Phase 1: Numbering & Versioning Only**
- Copy Numbering & Versioning package
- Set up versioning policy
- Create version file
- Start versioning releases manually

**Phase 2: Add Workflow Management**
- Copy Workflow Management package
- Configure RW to use Numbering & Versioning schema
- Replace manual versioning with automated RW
- Keep using Numbering & Versioning as canonical policy

**Benefits:**
- Learn versioning first
- Add automation when ready
- Smooth transition

---

### 4.2 Pattern: Start with Workflow, Add Versioning

**Phase 1: Workflow Management Only**
- Copy Workflow Management package
- Use included versioning policy
- Set up RW trigger
- Start using automated workflows

**Phase 2: Add Numbering & Versioning**
- Copy Numbering & Versioning package
- Replace Workflow Management's versioning policy with Numbering & Versioning
- Update RW to reference Numbering & Versioning policy
- Use Numbering & Versioning as canonical

**Benefits:**
- Get automation quickly
- Add better versioning policy later
- Easy to swap policies

---

### 4.3 Pattern: Start with Kanban, Add Integration

**Phase 1: Kanban Only**
- Copy Kanban package
- Set up Kanban board
- Track work items manually
- Skip version markers

**Phase 2: Add Versioning Integration**
- Copy Numbering & Versioning package
- Add version markers to Kanban docs
- Link work items to versions

**Phase 3: Add Workflow Integration**
- Copy Workflow Management package
- Configure RW to update Kanban docs
- Automate Kanban updates

**Benefits:**
- Start simple with Kanban
- Add versioning when needed
- Add automation when ready
- Gradual complexity increase

---

### 4.4 Pattern: Complete System from Start

**All Packages at Once:**
- Copy all three packages
- Set up complete integration
- Use all features from day one

**Benefits:**
- Full feature set immediately
- Best practices from start
- No migration needed

**Considerations:**
- Higher initial complexity
- More to learn at once
- More customization needed

---

## 5. Customization Examples

### 5.1 Custom Version Schema

**Scenario:** You want to use a different version schema (e.g., `MAJOR.MINOR.PATCH`).

**Steps:**
1. Copy Workflow Management package
2. Update `versioning-policy.md` with your schema
3. Update validation scripts to parse your schema
4. Update RW Step 1 to handle your schema
5. Update `.cursorrules` version schema section

**Example:**
```python
# src/yourproject/version.py
VERSION_MAJOR = 1
VERSION_MINOR = 2
VERSION_PATCH = 3
VERSION_STRING = f"{VERSION_MAJOR}.{VERSION_MINOR}.{VERSION_PATCH}"
```

---

### 5.2 Custom Branch Naming

**Scenario:** You use `feature/epic-\{n\}` instead of `epic/\{n\}`.

**Steps:**
1. Copy Workflow Management package
2. Update `validate_branch_context.py`:
   ```python
   def parse_branch_epic(branch: str) -> Optional[int]:
       match = re.match(r"^feature/epic-(\d+)", branch)
       if match:
           return int(match.group(1))
       return None
   ```
3. Update `.cursorrules` branch mapping section
4. Update documentation examples

---

### 5.3 Custom Kanban Structure

**Scenario:** You want a different Kanban directory structure.

**Steps:**
1. Copy Kanban package
2. Adapt directory structure to your needs
3. Update all path references in Kanban docs
4. Update RW Step 6 to use your structure
5. Update templates to match your structure

**Example:**
```
your-project/
└── docs/
    └── project-management/
        └── kanban/
            ├── board.md
            └── epics/
```

---

## 6. Migration Patterns

### 6.1 Migrating from Manual Versioning to RW

**Before:** Manual versioning, manual changelogs, manual Git operations

**After:** Automated RW with versioning and changelog generation

**Migration Steps:**
1. Copy Workflow Management package
2. Create version file matching current version
3. Convert existing changelog to new format
4. Set up RW trigger
5. Test RW on a feature branch
6. Gradually adopt RW for all releases

---

### 6.2 Migrating from Simple Kanban to Integrated Kanban

**Before:** Simple Kanban board, no versioning, manual updates

**After:** Integrated Kanban with version markers and automated updates

**Migration Steps:**
1. Copy Numbering & Versioning package
2. Copy Workflow Management package
3. Add version markers to existing Kanban docs
4. Configure RW to update Kanban docs
5. Test integration
6. Gradually adopt integrated system

---

## 7. Best Practices

### 7.1 Package Selection

1. **Start Small:** Begin with one package, add more as needed
2. **Understand Dependencies:** Read dependency documentation before adopting
3. **Test Integrations:** Verify integrations work before relying on them
4. **Customize Carefully:** Understand impact of breaking dependencies

### 7.2 Implementation

1. **Follow Guides:** Use provided implementation guides
2. **Update Paths:** Always update file paths to match your project
3. **Test Thoroughly:** Test workflows before using in production
4. **Document Customizations:** Keep track of what you change

### 7.3 Maintenance

1. **Preserve Core Methodology:** Don't break core functionality when customizing
2. **Update Documentation:** Keep customization notes current
3. **Test After Updates:** Verify packages still work after updates
4. **Share Improvements:** Contribute improvements back (if appropriate)

---

## 8. Troubleshooting

### 8.1 RW Not Updating Kanban

**Problem:** RW runs but doesn't update Kanban docs.

**Solutions:**
- Check Kanban doc paths in RW trigger section
- Verify Kanban structure matches expected format
- Check RW Step 6 configuration
- Review `kanban/integration/workflow-management-integration.md`

### 8.2 Version Schema Mismatch

**Problem:** RW and Numbering & Versioning use different schemas.

**Solutions:**
- Use Numbering & Versioning as canonical
- Update RW to reference Numbering & Versioning schema
- Ensure both packages use same schema
- Update validation scripts

### 8.3 Kanban Version Markers Not Working

**Problem:** Version markers not appearing in Kanban docs.

**Solutions:**
- Check Kanban template format
- Verify RW Step 6 updates Kanban docs
- Review version marker format: `✅ COMPLETE (v{version})`
- Check Kanban doc structure

---

## 9. Summary

### 9.1 Standalone Usage

- **Workflow Management:** Automated release workflows
- **Numbering & Versioning:** Versioning policy and strategy
- **Kanban:** Work item tracking

### 9.2 Combined Usage

- **Workflow + Versioning:** Automated workflows with consistent versioning
- **Kanban + Versioning:** Work tracking with version markers
- **Kanban + Workflow:** Work tracking with automated updates
- **All Three:** Complete integrated system

### 9.3 Incremental Adoption

- Start with one package
- Add more packages over time
- Gradual complexity increase
- Smooth migration path

---

## 10. Next Steps

This consumption patterns document provides the foundation for:
- **Task 5:** Update package READMEs with modularity information (implementation)

---

_Document completed: 2025-12-02_  
_Task: E1:S02:T004_  
_Next: E1:S02:T05 – Update package READMEs with modularity information_

