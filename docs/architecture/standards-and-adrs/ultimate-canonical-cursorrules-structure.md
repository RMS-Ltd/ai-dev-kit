---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-18T01:45:00Z
expires_at: null
housekeeping_policy: keep
---

# Ultimate Canonical Cursorrules Structure

**Purpose:** Definitive specification for the canonical `.cursorrules` structure  
**Status:** COMPLETE  
**Version:** 1.0.0  
**Part of:** E6:S06:T06 – Cross-project meta-analysis and canonical framework design  
**Supersedes:** All previous cursorrules structure specifications

**Based on:** Comprehensive meta-analysis of 10 projects (9 client implementations + ai-dev-kit source)

---

## Executive Summary

This document **defines the ultimate canonical `.cursorrules` structure** for ADK framework implementations. This is the **definitive specification** that all projects should adopt.

**The Ultimate Canonical Cursorrules Structure:**

```
{project-root}/
├── .cursorrules                    # Cursor rules (canonical)
├── rw-config.yaml                  # Workflow config (canonical)
└── ...
```

**Key Specifications:**
- **File:** `.cursorrules` in project root
- **Organization:** Workflow-first (RW trigger, PVW trigger, lifecycle, git restrictions, project-specific)
- **RW Trigger:** Comprehensive 12-step Release Workflow trigger
- **Configuration:** Config-driven approach (load `rw-config.yaml`)
- **Progress Tracking:** Cursor TODO tracking

---

## 1. File Structure Specification

### 1.1 File Naming

**CANONICAL:** `.cursorrules` (dot-prefixed, lowercase)

**Location:** Project root directory

**Structure:**
```
{project-root}/
├── .cursorrules                    # Cursor rules (canonical)
├── rw-config.yaml                  # Workflow config (canonical)
├── README.md
└── ...
```

---

## 2. Section Organization Specification

### 2.1 Workflow-First Organization

**CANONICAL ORDER:**
1. **RW Trigger Section** (Release Workflow trigger)
2. **PVW Trigger Section** (Package Version Workflow trigger, optional)
3. **Document Lifecycle Management Section** (optional but recommended)
4. **Git Workflow Restrictions Section** (optional but recommended)
5. **Project-Specific Rules Section** (custom rules)

---

## 3. Release Workflow (RW) Trigger Section Specification

### 3.1 Comprehensive 12-Step RW Trigger

**CANONICAL FORMAT:**

```markdown
## Release Workflow (RW) Trigger

When the user types "RW" or "Release Workflow", execute the following 12-step Release Workflow:

### Step 1: Branch Safety Check (MANDATORY BLOCKING)

🚨 **CRITICAL:** This step is MANDATORY and BLOCKING. The workflow MUST abort if this validation fails.

Execute: `python packages/frameworks/workflow mgt/scripts/validation/validate_branch_context.py --strict`

**Validation:**
- Current branch matches expected epic number
- Version matches branch context
- Task document exists (if applicable)

**Failure Handling:**
- Workflow aborts if validation fails
- User must fix branch context before proceeding
- Clear error messages provided

### Step 2: Bump Version

Load config from `rw-config.yaml`:
- `version_file`: Path to version file (e.g., `src/{project}/version.py`)
- Increment `VERSION_BUILD`
- Update version comment

### Step 3: Create Detailed Changelog

Load config from `rw-config.yaml`:
- `changelog_dir`: Path to changelog archive directory
- Generate detailed changelog: `docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.N.NNN.T+B.md`
- Include DO/CHECK/ACT phases
- Document all changes

### Step 4: Update Main Changelog

Load config from `rw-config.yaml`:
- `main_changelog`: Path to main changelog (e.g., `CHANGELOG.md`)
- Add summary entry following Keep a Changelog format
- Link to detailed changelog

### Step 5: Update README

Load config from `rw-config.yaml`:
- `readme_file`: Path to README file (e.g., `README.md`)
- Update version badge: `![Version](https://img.shields.io/badge/version-v0.N.NNN.T%2BB-blue.svg)`

### Step 6: Update BR/FR Docs

If BR/FR documents are linked to this task, update them with fix attempts.

### Step 7: Auto-update Kanban Docs

Load config from `rw-config.yaml`:
- `kanban_root`: Path to Kanban root (e.g., `docs/project-management/kanban`)
- `epic_doc_pattern`: Epic document pattern (e.g., `epics/Epic-{epic}/Epic-{epic}.md`)
- `story_doc_pattern`: Story document pattern (e.g., `epics/Epic-{epic}/Story-{story}-*.md`)
- Update Epic document with version marker
- Update Story document with version marker

### Step 8: Stage Files

Execute: `git add -A`

Stage all modified files:
- Version file
- Changelogs
- README
- Kanban docs

### Step 9: Run Validators

Execute validators:
1. `python packages/frameworks/workflow mgt/scripts/validation/validate_branch_context.py --strict`
2. `python packages/frameworks/workflow mgt/scripts/validation/validate_changelog_format.py`

**Failure Handling:**
- Workflow aborts if validation fails
- User must fix issues before proceeding
- Clear error messages provided

### Step 10: Commit Changes

Execute: `git commit -m "Release v0.N.NNN.T+B: {description}"`

**Commit Message Format:**
- Versioned commit message
- Descriptive summary of changes

### Step 11: Create Git Tag

Execute: `git tag -a "v0.N.NNN.T+B" -m "Release v0.N.NNN.T+B: {description}"`

**Tag Format:**
- Annotated tag with version
- Tag message matches commit message

### Step 12: Push to Remote

Execute: `git push origin {branch} --tags`

**Push Format:**
- Push branch and tags
- Use `--force-with-lease` if amending commits

### Progress Tracking

Use Cursor TODOs to track workflow progress:
- [ ] Step 1: Branch Safety Check - pending
- [ ] Step 2: Bump Version - pending
- [ ] Step 3: Create Detailed Changelog - pending
- ... (update status as steps complete)
```

### 3.2 Config-Driven Approach

**CANONICAL:** Load `rw-config.yaml` for workflow configuration

**Config Loading:**
```markdown
Load config from `rw-config.yaml` in project root:
- `version_file`: Path to version file
- `main_changelog`: Path to main changelog
- `changelog_dir`: Path to changelog archive directory
- `scripts_path`: Path to workflow scripts
- `readme_file`: Path to README file
- `use_kanban`: Whether to update Kanban docs
- `kanban_root`: Path to Kanban root
- `epic_doc_pattern`: Epic document pattern
- `story_doc_pattern`: Story document pattern
```

---

## 4. Package Version Workflow (PVW) Trigger Section Specification

### 4.1 PVW Trigger (Optional)

**CANONICAL FORMAT:**

```markdown
## Package Version Workflow (PVW) Trigger

When the user types "PVW" or "Package Version Workflow", execute the Package Version Workflow:

{PVW workflow steps}
```

---

## 5. Document Lifecycle Management Section Specification

### 5.1 Document Lifecycle Management (Recommended)

**CANONICAL FORMAT:**

```markdown
## Document Lifecycle Management

Documents in `docs/` directory must have lifecycle metadata in frontmatter:

**Required Fields:**
- `lifecycle`: `evergreen` | `timeboxed` | `transient`
- `created_at`: ISO 8601 datetime

**Optional Fields:**
- `ttl_days`: Time to live in days (integer or null)
- `expires_at`: Expiration datetime (ISO 8601 or null)
- `housekeeping_policy`: `keep` | `archive` | `delete`

**Lifecycle Values:**
- `evergreen`: Permanent documentation (no expiration)
- `timeboxed`: Time-limited documentation (expires after `ttl_days`)
- `transient`: Temporary documentation (short-lived)

**Housekeeping Policy:**
- `keep`: Keep document permanently
- `archive`: Archive document when expired
- `delete`: Delete document when expired

**Automated Management:**
- Check document expiration based on `ttl_days` or `expires_at`
- Apply housekeeping policy when document expires
- Archive or delete expired documents based on policy
```

---

## 6. Git Workflow Restrictions Section Specification

### 6.1 Git Workflow Restrictions (Recommended)

**CANONICAL FORMAT:**

```markdown
## Git Workflow Restrictions

**Strict Rules:**
- Commits MUST be made via Release Workflow (RW) only
- Pushes MUST be made via Release Workflow (RW) only
- Branch isolation MUST be enforced
- Pre-commit validation MUST pass

**Prohibited Operations:**
- Manual `git commit` (use RW instead)
- Manual `git push` (use RW instead)
- Commits to wrong branch (validated by branch safety check)
- Pushes without validation (validated by RW)

**Enforcement:**
- Branch safety check validates branch context
- Workflow validators ensure compliance
- Clear error messages for violations
```

---

## 7. Project-Specific Rules Section Specification

### 7.1 Project-Specific Rules

**CANONICAL FORMAT:**

```markdown
## Project-Specific Rules

{Project-specific rules and guidelines}

### Custom Workflows

{Custom workflow definitions}

### Domain-Specific Rules

{Domain-specific rules}
```

---

## 8. Version Schema Definition Specification

### 8.1 Version Schema

**CANONICAL FORMAT:**

```markdown
## Version Schema

**ADK Version Schema:** `RC.EPIC.STORY.TASK+BUILD`

- `RC`: Release Candidate (0 = development, 1+ = release candidate)
- `EPIC`: Epic number (1-23 canonical, 24+ project-specific)
- `STORY`: Story number within epic (3-digit padding)
- `TASK`: Task number within story (2-digit padding)
- `BUILD`: Build number (increments per release within task)

**Examples:**
- `0.6.6.6+1` = Development, Epic 6, Story 6, Task 6, Build 1
- `1.1.1.1+1` = Release Candidate 1, Epic 1, Story 1, Task 1, Build 1
```

---

## 9. Branch Mapping Specification

### 9.1 Branch Mapping Rules

**CANONICAL FORMAT:**

```markdown
## Branch Mapping

**Branch Naming:** `epic/{N}-{description}`

- `{N}`: Epic number (1-23 canonical, 24+ project-specific)
- `{description}`: Epic description (lowercase, hyphenated)

**Examples:**
- `epic/6-framework-management`
- `epic/1-project-core`
- `epic/24-project-specific`

**Validation:**
- Branch name must match epic number in version
- Branch context validation ensures consistency
- Workflow aborts if branch mismatch detected
```

---

## 10. Complete Structure Example

**CANONICAL STRUCTURE:**

```markdown
# {Project Name} Cursor Rules

## Release Workflow (RW) Trigger

{Comprehensive 12-step RW trigger as specified above}

## Package Version Workflow (PVW) Trigger

{PVW trigger - optional}

## Document Lifecycle Management

{Document lifecycle management rules as specified above}

## Git Workflow Restrictions

{Git workflow restriction rules as specified above}

## Version Schema

{Version schema definition as specified above}

## Branch Mapping

{Branch mapping rules as specified above}

## Project-Specific Rules

{Project-specific rules}
```

---

## 11. Validation Rules

### 11.1 File Structure Validation

**Required:**
- `.cursorrules` file exists in project root
- File format is markdown
- Section organization follows canonical format

### 11.2 RW Trigger Validation

**Required:**
- RW trigger section exists
- Comprehensive 12-step RW trigger defined
- Config-driven approach used
- Progress tracking implemented

### 11.3 Configuration Validation

**Required:**
- `rw-config.yaml` exists in project root (if config-driven)
- Config structure is valid
- Required config fields present

---

## 12. Implementation

### 12.1 Installation

**CANONICAL METHOD:** Create `.cursorrules` file following this specification

**Installation Steps:**
1. Create `.cursorrules` file in project root
2. Add comprehensive 12-step RW trigger section
3. Add config-driven approach (load `rw-config.yaml`)
4. Add document lifecycle management section (optional)
5. Add git workflow restrictions section (optional)
6. Add project-specific rules section

### 12.2 Configuration

**CANONICAL METHOD:** Create `rw-config.yaml` in project root

**Configuration Steps:**
1. Create `rw-config.yaml` in project root
2. Configure required fields (version_file, main_changelog, changelog_dir, scripts_path)
3. Configure optional fields (readme_file, use_kanban, kanban_root, etc.)

---

**Last Updated:** 2025-12-18  
**Version:** 1.0.0  
**Status:** COMPLETE
