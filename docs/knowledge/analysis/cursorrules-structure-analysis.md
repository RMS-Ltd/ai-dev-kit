---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-17T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Cursorrules Structure Analysis

**Purpose:** Comprehensive `.cursorrules` structure analysis across all projects to inform the "ultimate" canonical cursorrules structure  
**Analysis Date:** 2025-12-17  
**Status:** IN PROGRESS  
**Version:** 1.0.0

---

## Executive Summary

This document provides **detailed `.cursorrules` structure analysis** of cursorrules patterns across all analyzed projects. Without this granular data, we cannot determine the "ultimate" canonical cursorrules structure.

**Key Questions Addressed:**
1. What `.cursorrules` naming conventions exist across projects?
2. How are `.cursorrules` structured (sections, triggers, rules)?
3. What trigger patterns exist (RW, PVW, custom)?
4. What rule patterns emerge (git restrictions, workflow enforcement, documentation)?
5. What is the "ultimate" canonical `.cursorrules` structure based on real-world usage?

---

## 1. Cursorrules File Naming Conventions

### 1.1 File Naming Patterns

**Pattern 1: Standard `.cursorrules` (Universal)**
- **Format:** `.cursorrules` (dot-prefixed, lowercase)
- **Location:** Project root directory
- **Projects Using:** All projects (universal)
- **Frequency:** Universal pattern (9/9 projects)
- **Rationale:** Cursor IDE standard convention

**Pattern 2: Branch-Specific `.cursorrules`**
- **Format:** `.cursorrules` in branch directories
- **Location:** `{branch}/.cursorrules` (e.g., `03/.cursorrules`)
- **Projects Using:** confidentia (multi-branch structure)
- **Frequency:** Multi-branch pattern (1/9 projects)
- **Rationale:** Branch-specific rules

### 1.2 File Naming Summary

| Pattern | Projects Using | Frequency | Recommendation |
|---------|----------------|-----------|----------------|
| `.cursorrules` (root) | All projects | Universal (9/9) | ✅ Standard |
| `.cursorrules` (branch) | confidentia | Low (1/9) | ✅ Acceptable for multi-branch |

**Recommendation:** Use `.cursorrules` in project root as canonical format.

---

## 2. Cursorrules Structure Patterns

### 2.1 Section Organization Patterns

**Pattern 1: Workflow-First Structure**
```markdown
# Cursor Rules: RW Trigger Section

## 🚀 RELEASE WORKFLOW (RW) TRIGGER
[RW trigger section]

## 📦 PACKAGE VERSION WORKFLOW (PVW) TRIGGER
[PVW trigger section]

## 📄 DOCUMENT LIFECYCLE MANAGEMENT
[Document lifecycle section]

## Project-Specific Rules
[Project-specific rules]
```

**Projects Using:** been-there, dev-toolkit, ai-dev-kit
**Frequency:** ADK pattern (3/9 projects)

**Pattern 2: Project Overview First**
```markdown
# Cursor Rules for fynd.deals

## Project Overview
[Project description]

## Version Control and Release Process
[Versioning and RW trigger]

## Code Style and Conventions
[Code style rules]

## Testing
[Testing rules]

## Documentation
[Documentation rules]
```

**Projects Using:** fynd.deals
**Frequency:** Project-first pattern (1/9 projects)

**Pattern 3: Minimal Structure**
```markdown
# Agentic IDE Rules - Cursor Rules

## Release Workflow (RW) Trigger
[RW trigger section]

## Project-Specific Rules
[Project-specific rules]
```

**Projects Using:** agentic-ide-rules
**Frequency:** Minimal pattern (1/9 projects)

**Pattern 4: Comprehensive Structure**
```markdown
# AI Assistant Rules for Confidentia Project

## 🚨 MANDATORY COMMIT CHECKLIST 🚨
[Commit checklist]

## 🚨 CRITICAL: BRANCH ISOLATION RULES 🚨
[Branch isolation rules]

## Version Control and Release Process
[Versioning and RW trigger]

## Development Workflow
[Development rules]

## Documentation
[Documentation rules]
```

**Projects Using:** confidentia (branch 03)
**Frequency:** Comprehensive pattern (1/9 projects)

**Pattern 5: Git Restrictions First**
```markdown
# Cursor Rules for Starborn Legacy

## 🚨 CRITICAL: GIT COMMIT/PUSH RESTRICTIONS - ABSOLUTE PROHIBITION
[Git restrictions]

## 🚀 RELEASE WORKFLOW (RW) TRIGGER
[RW trigger section]
```

**Projects Using:** starborn_legacy
**Frequency:** Restriction-first pattern (1/9 projects)

### 2.2 Section Naming Patterns

**Common Sections:**
- **RW Trigger:** `## 🚀 RELEASE WORKFLOW (RW) TRIGGER` or `## Release Workflow (RW) Trigger`
- **PVW Trigger:** `## 📦 PACKAGE VERSION WORKFLOW (PVW) TRIGGER`
- **Document Lifecycle:** `## 📄 DOCUMENT LIFECYCLE MANAGEMENT`
- **Project Overview:** `## Project Overview` or `# Cursor Rules for \{project\}`
- **Version Control:** `## Version Control and Release Process`
- **Git Workflow:** `## Git Workflow` or `## 🚨 CRITICAL: GIT COMMIT/PUSH RESTRICTIONS`
- **Code Style:** `## Code Style and Conventions`
- **Testing:** `## Testing`
- **Documentation:** `## Documentation`

**Section Organization Summary:**
- **Workflow Sections:** RW Trigger, PVW Trigger (most common)
- **Project Sections:** Project Overview, Project-Specific Rules
- **Process Sections:** Version Control, Git Workflow, Development Workflow
- **Quality Sections:** Code Style, Testing, Documentation

---

## 3. RW Trigger Section Patterns

### 3.1 RW Trigger Definition Patterns

**Pattern 1: Comprehensive RW Trigger (ADK Canonical)**
```markdown
### 🚀 RELEASE WORKFLOW (RW) TRIGGER

**When the user types "RW" or "rw" (case-insensitive), execute the Release Workflow as an intelligent agent:**

1. **DO NOT** run the deterministic script `scripts/release_workflow.py`
2. **DO** execute the Release Workflow using the **intelligent agent-driven execution pattern**
3. **LOAD CONFIG FIRST (MANDATORY):** Before Step 1, load `rw-config.yaml` from project root if it exists.
4. **Follow** the step-by-step guide below
5. **🚨 MANDATORY: Start with Step 1: Branch Safety Check**
6. **Execute all remaining steps** using the ANALYZE → DETERMINE → EXECUTE → VALIDATE → PROCEED pattern
7. **Document** each step's analysis, actions, and results
8. **MUST USE Cursor TODOs:** Create and maintain a TODO list tracking all 14 steps
```

**Projects Using:** been-there, dev-toolkit, ai-dev-kit
**Frequency:** ADK canonical pattern (3/9 projects)

**Pattern 2: Standard RW Trigger**
```markdown
### 🚀 RELEASE WORKFLOW (RW) TRIGGER

**When the user types "RW" or "rw" (case-insensitive), execute the Release Workflow as an intelligent agent:**

1. **DO NOT** run the deterministic script `scripts/release_workflow.py`
2. **DO** execute the Release Workflow using the **intelligent agent-driven execution pattern**
3. **Follow** the step-by-step guide below
4. **Execute all 10 steps** using the ANALYZE → DETERMINE → EXECUTE → VALIDATE → PROCEED pattern
5. **Document** each step's analysis, actions, and results
6. **MUST USE Cursor TODOs:** Create and maintain a TODO list tracking all 10 steps
```

**Projects Using:** fynd.deals
**Frequency:** Standard pattern (1/9 projects)

**Pattern 3: Minimal RW Trigger**
```markdown
## Release Workflow (RW) Trigger

**CRITICAL: ALL sections requirement, atomicity, blocked protocol**

When the user types "RW" (Release Workflow), you MUST execute the complete 13-step Release Workflow process.

### RW Execution Requirements
[Requirements]

### RW Configuration
[Config location]

### RW Steps Overview
[Steps list]
```

**Projects Using:** agentic-ide-rules
**Frequency:** Minimal pattern (1/9 projects)

**Pattern 4: Custom RW Trigger**
```markdown
### 🚀 AI-DRIVEN RELEASE WORKFLOW (RW) - CANONICAL PROCESS

**When the user types `RW`, the AI assistant MUST execute the Release Workflow interactively following these 11 canonical steps in exact order:**

#### The 11 Canonical Steps
[Steps list]
```

**Projects Using:** confidentia (branch 03)
**Frequency:** Custom pattern (1/9 projects)

### 3.2 RW Step Definition Patterns

**Pattern 1: Detailed Step Definitions**
```markdown
**The 14 Steps:**

1. **🚨 MANDATORY BLOCKING: Branch Safety Check** - **CRITICAL:** This step MUST run `validate_branch_context.py --strict` and check exit code. **DO NOT PROCEED** if exit code is non-zero.

2. **Bump Version** - **MANDATORY STEP-BY-STEP PROCESS (DO NOT SKIP ANY STEP):**
   
   **A. READ CURRENT VERSION:**
   - **Load config first:** If `rw-config.yaml` exists, read `version_file` from config.
   - Read the version file to get current `VERSION_EPIC`, `VERSION_STORY`, `VERSION_TASK`, `VERSION_BUILD`
   - Document current version: `RC.EPIC.STORY.TASK+BUILD`
   
   **B. IDENTIFY COMPLETED TASK (MANDATORY):**
   - **Load config first:** If `rw-config.yaml` exists and `use_kanban: true`, read `kanban_root` and `story_doc_pattern` from config.
   - Read the Story file using config values or fallback pattern
   - Find the MOST RECENTLY COMPLETED task in the Task Checklist (marked `✅ COMPLETE`)
   - Extract the task number from the task identifier: `E{epic}:S{story}:T{task}` (e.g., `E2:S02:T08` → task number is `8`)
   - **CRITICAL:** If no task is marked complete, or you cannot identify which task was just completed, **STOP** and ask the user which task was completed
   
   **C. DETERMINE VERSION BUMP (MANDATORY LOGIC):**
   [Detailed logic]
   
   **D. VALIDATE BEFORE UPDATING:**
   [Validation steps]
   
   **E. UPDATE VERSION FILE:**
   [Update steps]
   
   **F. VALIDATE AFTER UPDATING:**
   [Post-update validation]

3. **Create Detailed Changelog** - Create detailed changelog in changelog archive directory.
[Step details]
```

**Projects Using:** been-there, dev-toolkit, ai-dev-kit
**Frequency:** ADK canonical pattern (3/9 projects)

**Pattern 2: Standard Step Definitions**
```markdown
**The 10 Steps:**

1. **Bump Version** - **MANDATORY STEP-BY-STEP PROCESS (DO NOT SKIP ANY STEP):**
   
   **A. READ CURRENT VERSION:**
   - Read `src/fynd_deals/version.py` to get current `VERSION_EPIC`, `VERSION_STORY`, `VERSION_TASK`, `VERSION_BUILD`
   - Document current version: `RC.EPIC.STORY.TASK+BUILD`
   
   **B. IDENTIFY COMPLETED TASK (MANDATORY):**
   - Read the Story file: `knowledge/fynd_deals/Kanban/Epic-{epic}/Story-\{N\}-\{Name\}.md`
   - Find the MOST RECENTLY COMPLETED task in the Task Checklist (marked `✅ COMPLETE`)
   - Extract the task number from the task identifier: `E{epic}:S{story}:T{task}` (e.g., `E11:S01:T010` → task number is `10`)
   - **CRITICAL:** If no task is marked complete, or you cannot identify which task was just completed, **STOP** and ask the user which task was completed
   
   **C. DETERMINE VERSION BUMP (MANDATORY LOGIC):**
   [Logic]
   
   **D. VALIDATE BEFORE UPDATING:**
   [Validation]
   
   **E. UPDATE VERSION FILE:**
   [Update]
   
   **F. VALIDATE AFTER UPDATING:**
   [Post-validation]

2. **Update CHANGELOG** - Add new entry at top.
[Step details]
```

**Projects Using:** fynd.deals
**Frequency:** Standard pattern (1/9 projects)

**Pattern 3: Minimal Step Definitions**
```markdown
### RW Steps Overview

1. Validate branch context (branch/version/epic alignment)
2. Bump version (RC.EPIC.STORY.TASK+BUILD schema)
3. Update changelog
4. Update Kanban documentation (Epic, Story, Task status)
5. Run validation scripts
6. Stage changes
7. Create commit
8. Create tag
9. Push to remote
10. Verify push
11. PDCA verification
12. PDCA action items
13. Summary
```

**Projects Using:** agentic-ide-rules
**Frequency:** Minimal pattern (1/9 projects)

### 3.3 RW Configuration Patterns

**Pattern 1: Config-Driven Approach (Preferred)**
```markdown
**🔧 Config-Driven Approach (Preferred):**

If `rw-config.yaml` exists in project root, **MUST** load it and use its values for all paths:
- `version_file` → Use for version file path
- `main_changelog` → Use for main changelog path
- `changelog_dir` → Use for changelog archive directory
- `scripts_path` → Use for validation scripts path
- `readme_file` → Use for README path
- `kanban_root` → Use for Kanban root (if `use_kanban: true`)
- `epic_doc_pattern` → Use for epic document pattern (if Kanban enabled)
- `story_doc_pattern` → Use for story document pattern (if Kanban enabled)

**Loading Config Pattern:**
```python
# Load rw-config.yaml if it exists
from pathlib import Path
import yaml

config = None
config_path = Path("rw-config.yaml")
if config_path.exists():
    try:
        with open(config_path, 'r', encoding='utf-8') as f:
            config = yaml.safe_load(f)
    except Exception:
        pass  # Fall back to placeholders

# Use config values or fallback to defaults
version_file = config['version_file'] if config and 'version_file' in config else 'src/fynd_deals/version.py'
```

**Projects Using:** been-there, dev-toolkit, ai-dev-kit
**Frequency:** ADK pattern (3/9 projects)

**Pattern 2: Hardcoded Paths**
```markdown
**File Paths:**
- Version file: `src/fynd_deals/version.py`
- Changelog: `CHANGELOG.md`
- Changelog Archive: `docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v{version}.md`
- Kanban Board: `knowledge/fynd_deals/Kanban/Kanban Board.md`
- Epic Docs: `knowledge/fynd_deals/Kanban/Epic-\{epic\}/Epic-\{epic\}.md`
- Story Docs: `knowledge/fynd_deals/Kanban/Epic-\{epic\}/Story-\{N\}-\{Name\}.md`
- Validators: `scripts/validation/validate_branch_context.py`, `scripts/validation/validate_changelog_format.py`
```

**Projects Using:** fynd.deals, starborn_legacy
**Frequency:** Pre-config pattern (2/9 projects)

**Pattern 3: Config File Reference**
```markdown
### RW Configuration

The Release Workflow configuration is located at:
`packages/frameworks/workflow mgt/config/rw-config-agentic-ide-rules.yaml`
```

**Projects Using:** agentic-ide-rules
**Frequency:** Config reference pattern (1/9 projects)

---

## 4. PVW Trigger Section Patterns

### 4.1 PVW Trigger Definition Patterns

**Pattern 1: Comprehensive PVW Trigger**
```markdown
### 📦 PACKAGE VERSION WORKFLOW (PVW) TRIGGER

**When the user types "PVW" or "pvw" (case-insensitive), or when RW Step 2.5 executes, run the Package Version Workflow as an intelligent agent:**

1. **DO NOT** run deterministic scripts to determine bump types
2. **DO** execute PVW using the **intelligent agent-driven execution pattern**
3. **Follow** the agent execution pattern (ANALYZE → DETERMINE → EXECUTE → VALIDATE → PROCEED)
4. **Use** validation scripts as tools, not determiners
5. **Apply** version bump criteria as guidance, not hard rules
6. **Document** reasoning and justification for each bump

**PVW Execution Steps:**
1. **Step 1: Detect Changed Packages** - Analyze git diff to identify changed packages
2. **Step 2: Analyze Package Changes** - Read package files, identify what changed
3. **Step 3: Determine Version Bumps** - Analyze changes against criteria, determine bump type intelligently
4. **Step 4: Execute Version Updates** - Update README, create changelog, document justification
5. **Step 5: Validate Updates** - Run validation scripts as tools, verify format/consistency
6. **Step 6: Document & Proceed** - Document changes, pass to RW Step 3

**🚨 MANDATORY: Progress Tracking with Cursor TODOs**

**REQUIRED:** Agents **MUST** use `todo_write` to create and maintain a TODO list tracking all 6 PVW steps.
```

**Projects Using:** ai-dev-kit
**Frequency:** ADK pattern (1/9 projects)

**Pattern 2: No PVW Trigger**
- **Projects Using:** fynd.deals, been-there, dev-toolkit, agentic-ide-rules, confidentia, starborn_legacy, free-party-promoter, vwmp, qa-kb
- **Frequency:** No PVW pattern (8/9 projects)
- **Rationale:** PVW not implemented or not needed

---

## 5. Document Lifecycle Management Patterns

### 5.1 Document Lifecycle Section Patterns

**Pattern 1: Comprehensive Lifecycle Section**
```markdown
### 📄 DOCUMENT LIFECYCLE MANAGEMENT

**When creating or updating KB documents, agents MUST include lifecycle metadata in front-matter:**

1. **MANDATORY: Set lifecycle metadata for all KB documents:**
   - **Identify document type** from context (task description, file path, content)
   - **Map to lifecycle** using classification rules:
     - **Evergreen:** Standards, ADRs, Kanban Epics/Stories, core how-tos, framework docs
     - **Timeboxed:** Design spikes, refactoring plans, analysis docs (TTL: 90 days, archive)
     - **Transient:** Renumbering plans, implementation sequences (TTL: 14-30 days, delete)
   - **Apply defaults** for `ttl_days` and `housekeeping_policy`
   - **Set `created_at`** to current UTC time (format: `YYYY-MM-DDTHH:MM:SSZ`)
   - **Calculate `expires_at`** from `created_at + ttl_days` (or `null` for evergreen)
   - **Include all metadata** in front-matter

2. **Lifecycle Metadata Schema (Required Fields):**
   ```yaml
   ---
   lifecycle: evergreen | timeboxed | transient
   ttl_days: <integer> | null
   created_at: <ISO 8601 datetime>
   expires_at: <ISO 8601 datetime> | null
   housekeeping_policy: keep | archive | delete
   ---
   ```

3. **Default Classifications:**
   - **Evergreen:** `ttl_days: null`, `expires_at: null`, `housekeeping_policy: keep`
   - **Timeboxed:** `ttl_days: 90`, `housekeeping_policy: archive`
   - **Transient:** `ttl_days: 14` (or 30 for implementation plans), `housekeeping_policy: delete`

4. **RW Integration:**
   - When RW creates changelogs → `evergreen` (historical record)
   - When RW creates analysis docs → `timeboxed` (90 days, archive)
   - When RW creates renumbering plans → `transient` (14 days, delete)

5. **Kanban Integration:**
   - Kanban Epics/Stories → `evergreen` (project management artifacts)
   - Exception: Temporary planning Stories → `timeboxed` (rare)

6. **Protection Rules:**
   - Documents referenced from evergreen docs **MUST NOT** be deleted
   - Documents referenced in changelogs **MUST NOT** be deleted
   - Auto-upgrade to `archive` if references found

**Reference:** See `docs/architecture/standards-and-adrs/doc-lifecycle-configuration.md` for complete configuration and classification rules.
```

**Projects Using:** been-there, dev-toolkit, ai-dev-kit
**Frequency:** ADK pattern (3/9 projects)

**Pattern 2: No Document Lifecycle Section**
- **Projects Using:** fynd.deals, agentic-ide-rules, confidentia, starborn_legacy, free-party-promoter, vwmp, qa-kb
- **Frequency:** No lifecycle pattern (6/9 projects)
- **Rationale:** Document lifecycle management not implemented

---

## 6. Git Workflow Restriction Patterns

### 6.1 Git Restriction Patterns

**Pattern 1: Absolute Prohibition (Strict)**
```markdown
## 🚨 CRITICAL: GIT COMMIT/PUSH RESTRICTIONS - ABSOLUTE PROHIBITION

**NEVER NEVER EVER run `git commit` or `git push` outside of the Release Workflow (RW)!**

**ABSOLUTE PROHIBITION:**
- ❌ **FORBIDDEN:** Running `git commit` outside of RW Step 8
- ❌ **FORBIDDEN:** Running `git push` outside of RW Step 10
- ❌ **FORBIDDEN:** Running `git commit --amend` outside of RW
- ❌ **FORBIDDEN:** Running `git push --force` outside of RW
- ❌ **FORBIDDEN:** Any git operations that modify history outside of RW
- ❌ **FORBIDDEN:** Committing documentation updates, code changes, or any modifications outside of RW
- ❌ **FORBIDDEN:** Pushing changes to remote outside of RW

**ONLY ALLOWED:**
- ✅ **ALLOWED:** `git add` - Staging files is allowed (but commits must wait for RW)
- ✅ **ALLOWED:** `git status` - Checking status is allowed
- ✅ **ALLOWED:** `git diff` - Viewing diffs is allowed
- ✅ **ALLOWED:** `git log` - Viewing history is allowed
- ✅ **ALLOWED:** `git tag -l` - Listing tags is allowed
- ✅ **ALLOWED:** `git commit` - **ONLY** within RW Step 8
- ✅ **ALLOWED:** `git push` - **ONLY** within RW Step 10
- ✅ **ALLOWED:** `git tag` - **ONLY** within RW Step 9
```

**Projects Using:** starborn_legacy
**Frequency:** Strict pattern (1/9 projects)
**Rationale:** Ensures all commits follow versioning schema

**Pattern 2: Branch Isolation Rules**
```markdown
## 🚨 CRITICAL: BRANCH ISOLATION RULES 🚨

### ABSOLUTE PROHIBITIONS - NO EXCEPTIONS
**NEVER DO THESE THINGS - EVEN IF IT SEEMS LOGICAL:**
- ❌ **NEVER run `git checkout`, `git switch`, or any branch-switching command without EXPLICIT user request**
- ❌ **NEVER assume "I should switch to the correct branch" - STAY ON CURRENT BRANCH unless user explicitly asks**
- ❌ **NEVER commit to a branch without verifying it's correct first**
- ❌ **NEVER assume which branch to use - ALWAYS check with `git branch --show-current` FIRST**
- ❌ **NEVER commit Epic 12 work to Epic 18 branch (or vice versa)**
- ❌ **NEVER switch branches "to fix something" - ASK USER FIRST**

### MANDATORY BRANCH CHECK BEFORE ANY GIT OPERATION
**BEFORE running ANY git command that might affect branches:**
1. Run `git branch --show-current` and display result to user
2. Verify branch matches the work being done
3. If branch is wrong, ASK USER which branch to use - DO NOT SWITCH AUTOMATICALLY

### BRANCH MAPPING
- **Epic 12 (Advanced Permissions)**: `epic/12-permissions-v0.4.7` → Version `0.4.7.x`
- **Epic 18 (MCP Integration)**: `epic/18-mcp-integration` → Version `0.4.9.x`
- **Epic 20 (Maintenance)**: `epic/20-maintenance` → Version `0.20.x.x`
```

**Projects Using:** confidentia (branch 03)
**Frequency:** Branch isolation pattern (1/9 projects)
**Rationale:** Prevents cross-epic contamination

**Pattern 3: Standard Git Workflow**
```markdown
### Git Workflow
- Use semantic commit messages
- Follow the Release Workflow for all releases
- Never commit outside of RW (except for staging with `git add`)
```

**Projects Using:** agentic-ide-rules
**Frequency:** Standard pattern (1/9 projects)

**Pattern 4: No Git Restrictions**
- **Projects Using:** fynd.deals, been-there, dev-toolkit, free-party-promoter, vwmp, qa-kb
- **Frequency:** No restrictions pattern (6/9 projects)
- **Rationale:** No explicit git restrictions (rely on RW workflow)

---

## 7. Project-Specific Rule Patterns

### 7.1 Code Style Patterns

**Pattern 1: Comprehensive Code Style**
```markdown
## Code Style and Conventions

- Follow PEP 8 for Python code
- Use type hints where appropriate
- Write clear, descriptive commit messages
- Update documentation when making significant changes
```

**Projects Using:** fynd.deals, agentic-ide-rules
**Frequency:** Standard pattern (2/9 projects)

**Pattern 2: Language-Specific Rules**
```markdown
### Code Quality
- Follow Python best practices
- Use type hints where appropriate
- Write comprehensive docstrings
- Maintain test coverage
```

**Projects Using:** agentic-ide-rules
**Frequency:** Language-specific pattern (1/9 projects)

**Pattern 3: Framework-Specific Rules**
```markdown
## Django-Specific

### Migrations
- **Django migrations** are the single source of truth
- Alembic is deprecated and should not be used
- Run `python manage.py makemigrations --check` before merging

#### CRITICAL: Migration Immutability
**Django migrations are IMMUTABLE once applied:**
- Once a migration runs and is recorded in `django_migrations` table, Django will NEVER re-run it
- **NEVER edit an already-applied migration file** - changes will be silently ignored
```

**Projects Using:** confidentia (branch 03)
**Frequency:** Framework-specific pattern (1/9 projects)

### 7.2 Testing Patterns

**Pattern 1: Standard Testing Rules**
```markdown
## Testing

- Run tests before committing: `pytest`
- Ensure all tests pass before releasing
- Update test coverage as needed
```

**Projects Using:** fynd.deals
**Frequency:** Standard pattern (1/9 projects)

**Pattern 2: Comprehensive Testing Rules**
```markdown
### Testing
- Write tests before implementing features (TDD)
- Run tests before committing
- Maintain 80% code coverage threshold
```

**Projects Using:** confidentia (branch 03)
**Frequency:** Comprehensive pattern (1/9 projects)

### 7.3 Documentation Patterns

**Pattern 1: Standard Documentation Rules**
```markdown
## Documentation

- Keep `CHANGELOG.md` up to date
- Update Kanban board with release notes
- Maintain epic documentation in `knowledge/fynd_deals/Kanban/Epic-\{epic\}/`
```

**Projects Using:** fynd.deals
**Frequency:** Standard pattern (1/9 projects)

**Pattern 2: Comprehensive Documentation Rules**
```markdown
### Documentation

### Standards
- Document not just what changed, but why
- Keep CHANGELOG entries concise but descriptive
- Use emoji prefixes for clarity:
  - 🚀 Features
  - 🐞 Fix
  - 🔧 Infrastructure
  - 🔒 Security
  - 🧹 Cleanup
  - 🔄 Refactor
  - 📚 Documentation
  - 🧰 Tooling

### Core Policy Documents (The System)
[Policy document references]
```

**Projects Using:** confidentia (branch 03)
**Frequency:** Comprehensive pattern (1/9 projects)

**Pattern 3: Template Usage Rules**
```markdown
### 🚨 CRITICAL: Template Usage Rules (Epic 16)

**MANDATORY:** When creating new documentation, **ALWAYS use templates, NEVER copy from existing documents.**

**Template Usage Requirements:**
1. **ALWAYS start from template:**
   - For new Epics: Use `templates/kanban/EPIC_TEMPLATE.md`
   - For new Stories: Use `templates/kanban/STORY_TEMPLATE.md`
   - For other docs: Use appropriate template from `templates/` or `docs/fynd_deals/_design/architecture/templates/`
   - **NEVER copy from existing documents** (e.g., don't copy `Story-08-Route-Validation.md` to create `Story-09-Route-Error-Handling.md`)

2. **Template locations:**
   [Template locations]

3. **Process:**
   [Template usage process]

4. **Anti-patterns (DO NOT):**
   - ❌ Copy from existing documents (causes document drift)
   - ❌ Modify templates in place (templates are canonical)
   - ❌ Skip required template sections
   - ❌ Use old documents as reference (may have outdated patterns)

5. **Verification:**
   [Verification steps]

6. **Validation Reminders:**
   [Validation reminders]
```

**Projects Using:** fynd.deals
**Frequency:** Template enforcement pattern (1/9 projects)

---

## 8. Version Schema Definition Patterns

### 8.1 Version Schema Patterns

**Pattern 1: Comprehensive Version Schema**
```markdown
**Version Schema:**
- Format: `RC.EPIC.STORY.TASK+BUILD` (e.g., `0.\{epic\}.\{story\}.\{task\}+\{build\}`)
- **Schema Calculation:** Epic N, Story S, Task T → Version: `0.N.S.T+1` (first build)
- **Build Increment:** Same Epic/Story/Task → Increment BUILD (e.g., `0.N.S.T+1` → `0.N.S.T+2`)
- **New Task:** Different Task → Reset BUILD to 1 (e.g., `0.N.S.T+5` → `0.N.S.{T+1}+1`)
- **New Story:** Different Story → Reset TASK to 1, BUILD to 1 (e.g., `0.N.S.T+B` → `0.N.{S+1}.1+1`)
- **New Epic:** Different Epic → Reset STORY to 1, TASK to 1, BUILD to 1 (e.g., `0.N.S.T+B` → `0.{N+1}.1.1+1`)
- **Epic Alignment:** Epic number should match current branch (if on `epic/\{n\}`, version should be `0.\{n\}.S.T+B`)
- **Epic Ranges:**
  - [Example: ai-dev-kit] Epic 1-4+ (Epic 1: AI Dev Kit Core, Epic 2: Workflow Management Framework, Epic 3: Numbering & Versioning Framework, Epic 4: Kanban Framework)
  - No legacy range in dev-kit - starts from Epic 1 with full schema
- **Reference:** See `docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md` (or your project's versioning policy) for complete schema definition
```

**Projects Using:** been-there, dev-toolkit, ai-dev-kit
**Frequency:** ADK canonical pattern (3/9 projects)

**Pattern 2: Standard Version Schema**
```markdown
**Version Schema:**
- Format: `RC.EPIC.STORY.TASK+BUILD` (e.g., `0.9.32.1+97`)
- RC = Release Candidate (0 = development)
- EPIC = Epic number (e.g., 9)
- STORY = Story number within epic (e.g., 32)
- TASK = Task number within story (e.g., 1)
- BUILD = Build number (increments per release within task)
```

**Projects Using:** starborn_legacy
**Frequency:** Standard pattern (1/9 projects)

**Pattern 3: Dual Format Support**
```markdown
### Version Schema

The project uses semantic versioning with two supported formats:

**New Format (Recommended):** `RC.EPIC.STORY.TASK+BUILD`
- **RC**: Release candidate (0 = pre-release, 1 = RC1, etc.)
- **EPIC**: Maps to the active epic (MAJOR)
- **STORY**: Story/feature identifier (MINOR)
- **TASK**: Task number within story
- **BUILD**: Build number (increments per release within task)

**Old Format (Grandfathered):** `RC.EPIC.STORY.PATCH`
- **RC**: Release candidate (0 = pre-release, 1 = RC1, etc.)
- **EPIC**: Maps to the active epic (MAJOR)
- **STORY**: Story/feature identifier (MINOR)
- **PATCH**: Bug fixes, documentation, and incremental changes

Examples:
- New: `0.9.21.3+1` → RC0, Epic 9, Story 21, Task 3, Build 1
- Old: `0.9.21.17` → RC0, Epic 9, Story 21, Patch 17 (grandfathered)

**Migration:** Versions before `0.9.21.20` use old format and are grandfathered. New versions should use `TASK+BUILD` format.
```

**Projects Using:** fynd.deals
**Frequency:** Dual format pattern (1/9 projects)

---

## 9. Branch Mapping Patterns

### 9.1 Branch Mapping Definition Patterns

**Pattern 1: Standard Branch Mapping**
```markdown
**Branch Mapping (Customize for Your Project):**
- `main` - **PRODUCTION BRANCH** - Only merge when ready to deploy. Auto-deploys trigger on every push!
- `epic/\{n\}` - **DEVELOPMENT BRANCH** - All epic work should be done here. Should have version `0.\{n\}.S.T+B`
- Other branches - Validate against known patterns

**🚨 CRITICAL: Epic Branch Workflow**
- **ALWAYS work on epic branches** (`epic/\{n\}-\{description\}`, e.g., `epic/1-core`, `epic/3-versioning`, etc.)
- **NEVER commit directly to `main`** during epic development
- **ONLY merge to `main`** when ready to deploy (triggers auto-deployment)
- **Release Workflow (RW)** should be run on epic branch, then merge to main
- This prevents unnecessary deployments during development
```

**Projects Using:** been-there, dev-toolkit, ai-dev-kit, fynd.deals
**Frequency:** Standard pattern (4/9 projects)

**Pattern 2: Detailed Branch Mapping**
```markdown
### BRANCH MAPPING
- **Epic 12 (Advanced Permissions)**: `epic/12-permissions-v0.4.7` → Version `0.4.7.x`
- **Epic 18 (MCP Integration)**: `epic/18-mcp-integration` → Version `0.4.9.x`
- **Epic 20 (Maintenance)**: `epic/20-maintenance` → Version `0.20.x.x`
```

**Projects Using:** confidentia (branch 03)
**Frequency:** Detailed mapping pattern (1/9 projects)

**Pattern 3: No Branch Mapping**
- **Projects Using:** starborn_legacy, free-party-promoter, vwmp, qa-kb
- **Frequency:** No mapping pattern (4/9 projects)
- **Rationale:** No explicit branch mapping (implicit in workflow)

---

## 10. Progress Tracking Patterns

### 10.1 TODO Tracking Patterns

**Pattern 1: Comprehensive TODO Tracking**
```markdown
**🚨 MANDATORY: Progress Tracking with Cursor TODOs**

**REQUIRED:** Agents **MUST** use `todo_write` to create and maintain a TODO list for all 14 Release Workflow steps:

1. **At Workflow Start:** Create TODO list with all 14 steps as `pending`
   ```python
   todo_write(merge=False, todos=[
       {'id': 'rw-step-1', 'status': 'pending', 'content': 'Step 1: Branch Safety Check - MANDATORY: Run validate_branch_context.py --strict, stop if fails'},
       {'id': 'rw-step-2', 'status': 'pending', 'content': 'Step 2: Bump Version - Read Story file, identify completed task number, compare to current VERSION_TASK, determine if new task or same task, update version file, validate'},
       {'id': 'rw-step-3', 'status': 'pending', 'content': 'Step 3: Create Detailed Changelog - Generate CHANGELOG with full timestamp'},
       # ... all steps
   ])
   ```

2. **Before Each Step:** Mark step as `in_progress`
   ```python
   todo_write(merge=True, todos=[{'id': 'rw-step-1', 'status': 'in_progress'}])
   ```

3. **After Each Step:** Mark step as `completed` and mark next step as `in_progress`
   ```python
   todo_write(merge=True, todos=[
       {'id': 'rw-step-1', 'status': 'completed'},
       {'id': 'rw-step-2', 'status': 'in_progress'}
   ])
   ```

4. **On Completion:** All steps marked as `completed`

5. **🚨 CRITICAL: Step 1 Branch Safety Enforcement:**
   - **MANDATORY:** Step 1 MUST run `validate_branch_context.py --strict`
   - **MANDATORY:** If Step 1 fails (non-zero exit code), workflow MUST STOP immediately
   - **MANDATORY:** If Step 1 fails, mark ALL remaining steps as `cancelled`
   - **MANDATORY:** Do not modify any files if Step 1 fails
   - **MANDATORY:** Do not proceed to Step 2 if Step 1 fails
   - **Anti-Pattern:** Never skip, bypass, or ignore Step 1 validation
   - **Anti-Pattern:** Never proceed to Step 2 if validator returns non-zero exit code

6. **Atomicity & Blocking Behaviour (Accessibility-Critical):**
   - When the user types **`RW`**, the agent MUST either:
     - Run **all 14 steps (1–14)** to completion for the target version, OR
     - Stop at a **specific step** and clearly state:
       - The **step number and name** (e.g. "Step 1: Branch Safety Check" or "Step 8: Run Validators")
       - The **reason** it is blocked (e.g. wrong branch, missing tool, sandbox limitation)
       - The **exact action/commands** the user must run to unblock it
       - That **RW is NOT complete** until those actions are taken and the agent resumes
   - The agent MUST NOT:
     - Silently stop mid‑workflow after modifying files
     - Start a new RW while a previous RW's TODO items are still `pending` or `in_progress`
   - If RW is abandoned or cannot be completed, the agent MUST:
     - Mark remaining `rw-step-*` TODOs as `cancelled`
     - Output a short **"RW ABORTED"** summary with current state and next steps
```

**Projects Using:** been-there, dev-toolkit, ai-dev-kit
**Frequency:** ADK canonical pattern (3/9 projects)

**Pattern 2: Standard TODO Tracking**
```markdown
**🚨 MANDATORY: Progress Tracking with Cursor TODOs (State Machine)**

**REQUIRED:** Agents **MUST** use `todo_write` to create and maintain a TODO list for all 10 Release Workflow steps, and MUST treat this TODO list as a **state machine**:

1. **At Workflow Start:** Create TODO list with all 10 steps as `pending` (no other `rw-step-*` items may be `pending` or `in_progress` from a previous RW)
2. **Before Each Step:** Mark exactly one step as `in_progress` (all others must be `pending`/`completed`/`cancelled`)
3. **After Each Step:** Mark the current step as `completed` (only after artifacts are consistent for that step), then mark the next step as `in_progress`
4. **On Completion:** All steps marked as `completed` for the target version. It is forbidden to start a new RW while any `rw-step-*` items are still `pending` or `in_progress` from a previous RW.
```

**Projects Using:** fynd.deals
**Frequency:** State machine pattern (1/9 projects)

**Pattern 3: Minimal TODO Tracking**
```markdown
**MUST USE Cursor TODOs:** Create and maintain a TODO list tracking all 10 workflow steps
```

**Projects Using:** starborn_legacy
**Frequency:** Minimal pattern (1/9 projects)

---

## 11. Customization Patterns

### 11.1 Customization Requirements

**Pattern 1: Explicit Customization Instructions**
```markdown
**⚠️ IMPORTANT: Customization Required**

After copying this section to your `.cursorrules`, you MUST:
1. **Update all file paths** to match your project structure
2. **Update version file location** (currently shows `src/fynd_deals/version.py` as template)
3. **Update Kanban paths** (currently shows `docs/project-management/kanban/...` as templates)
4. **Update validator script paths** (currently shows `packages/frameworks/workflow mgt/scripts/...` as templates)
5. **Reference your project's versioning policy** instead of dev-kit policy
6. **Customize branch naming** if your project uses different conventions (e.g., `feature/epic-\{n\}` instead of `epic/\{n\}`)
7. **Customize epic ranges** if your project uses different epic numbering (e.g., legacy range 1-9, new range 10+)
```

**Projects Using:** been-there, dev-toolkit, ai-dev-kit
**Frequency:** ADK pattern (3/9 projects)

**Pattern 2: No Customization Instructions**
- **Projects Using:** fynd.deals, agentic-ide-rules, confidentia, starborn_legacy
- **Frequency:** No instructions pattern (4/9 projects)
- **Rationale:** Project-specific, no template usage

---

## 12. Recommendations for "Ultimate" Canonical Structure

### 12.1 File Structure

**Recommended: Standard `.cursorrules`**
- **Format:** `.cursorrules` (dot-prefixed, lowercase)
- **Location:** Project root directory
- **Structure:** Markdown format with sections

### 12.2 Section Organization

**Recommended: Workflow-First Structure**
```markdown
# Cursor Rules for {Project Name}

## 🚀 RELEASE WORKFLOW (RW) TRIGGER
[Comprehensive RW trigger section]

## 📦 PACKAGE VERSION WORKFLOW (PVW) TRIGGER
[PVW trigger section - if applicable]

## 📄 DOCUMENT LIFECYCLE MANAGEMENT
[Document lifecycle section - if applicable]

## Project-Specific Rules
[Project-specific rules]
```

### 12.3 RW Trigger Section

**Recommended: Comprehensive RW Trigger**
- **Config-Driven Approach:** Load `rw-config.yaml` if exists
- **Mandatory Branch Safety Check:** Step 1 must run `validate_branch_context.py --strict`
- **Detailed Step Definitions:** Step-by-step process for each step
- **Progress Tracking:** Cursor TODOs for all steps
- **Atomicity:** Complete all steps or explicitly abort

### 12.4 Configuration

**Recommended: Config-Driven Approach**
- **Config File:** `rw-config.yaml` in project root
- **Loading Pattern:** Python code to load config with fallback to defaults
- **Backward Compatibility:** Support projects without config file

### 12.5 Progress Tracking

**Recommended: Comprehensive TODO Tracking**
- **State Machine Pattern:** Only one step `in_progress` at a time
- **Mandatory TODOs:** All steps tracked with Cursor TODOs
- **Atomicity Enforcement:** Cannot start new RW while previous RW TODOs exist

---

## 13. Summary: "Ultimate" Canonical Cursorrules Structure

### 13.1 File Structure
- **Format:** `.cursorrules` (project root)
- **Structure:** Markdown with sections

### 13.2 Section Organization
- **Workflow Sections:** RW Trigger, PVW Trigger (optional), Document Lifecycle (optional)
- **Project Sections:** Project-Specific Rules

### 13.3 RW Trigger Section
- **Config-Driven:** Load `rw-config.yaml` if exists
- **Mandatory Branch Safety:** Step 1 must validate branch context
- **Detailed Steps:** Step-by-step definitions with config support
- **Progress Tracking:** Cursor TODOs for all steps
- **Atomicity:** Complete all steps or abort

### 13.4 Configuration
- **Config File:** `rw-config.yaml` (preferred)
- **Fallback:** Hardcoded paths if config doesn't exist
- **Backward Compatibility:** Support projects without config

### 13.5 Progress Tracking
- **State Machine:** Only one step `in_progress` at a time
- **Mandatory TODOs:** All steps tracked
- **Atomicity:** Cannot start new RW while previous RW TODOs exist

---

**Analysis Completed:** 2025-12-17  
**Next Steps:** Use this analysis to finalize canonical `.cursorrules` structure in ADK frameworks

