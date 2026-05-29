---
lifecycle: timeboxed
ttl_days: 90
created_at: 2025-12-04T12:01:47Z
expires_at: 2026-03-04T12:01:47Z
housekeeping_policy: archive
---

# T01 Analysis: RW Adoption Friction and Required Configuration

**Story:** E2:S04 – RW Installer & Plug-and-Play Adoption  
**Task:** T01 – Analyze current RW adoption friction and required config  
**Date:** 2025-12-04  
**Status:** ✅ COMPLETE

---

## Executive Summary

This analysis identifies **all manual integration touchpoints** required when adopting the Release Workflow (RW) in a new project, and defines the **minimal configuration key set** needed for a project-level `rw-config.yaml` that will enable plug-and-play RW installation.

**Key Finding:** Currently, RW adoption requires **manual path editing in 5+ distinct locations** across `.cursorrules`, workflow YAML, validation scripts, and documentation. A single `rw-config.yaml` file can eliminate this friction.

---

## 1. RW Integration Touchpoints (Current State)

### 1.1 Version File Path

**Locations requiring manual edits:**

1. **`.cursorrules` RW trigger section (Step 2A, 2E):**
   - Template: `src/{project}/version.py`
   - Example: `src/fynd_deals/version.py`
   - **Manual action:** Replace `{project}` placeholder or example path

2. **`workflows/release-workflow.yaml` (config block):**
   - Current: `version_file: src/confidentia/version.py`
   - **Manual action:** Replace with project-specific path

3. **Validation scripts (`validate_branch_context.py`):**
   - Hardcoded: `version_file = Path("src/fynd_deals/version.py")`
   - **Manual action:** Edit Python script directly

4. **RW execution documentation:**
   - Multiple example references throughout docs
   - **Manual action:** Update examples (optional but recommended)

**Friction level:** 🔴 **HIGH** – 4 distinct locations, including code edits

---

### 1.2 Changelog Paths

**Locations requiring manual edits:**

1. **`.cursorrules` RW trigger section (Steps 3, 4):**
   - Main changelog: `CHANGELOG.md` (usually root, but can vary)
   - Archive directory: `{changelog_archive_path}/CHANGELOG_v{version}.md`
   - Example: `docs/changelog-and-release-notes/changelog-archive/`
   - **Manual action:** Replace template/example paths

2. **`workflows/release-workflow.yaml` (config block):**
   - `changelog_dir: docs/changelog-and-release-notes/changelog-archive`
   - `main_changelog: CHANGELOG.md`
   - **Manual action:** Update both paths

3. **RW execution documentation:**
   - Multiple example references
   - **Manual action:** Update examples (optional)

**Friction level:** 🟡 **MEDIUM** – 2-3 locations, mostly config/template edits

---

### 1.3 Kanban Documentation Paths

**Locations requiring manual edits:**

1. **`.cursorrules` RW trigger section (Step 6):**
   - Story file pattern: `{kanban_path}/epics/Epic-{epic}/Story-{story}-*.md`
   - Epic doc pattern: `{kanban_path}/epics/Epic-{epic}/Epic-{epic}.md`
   - Kanban board: `{kanban_path}/_index.md` or `{kanban_path}/kboard.md`
   - Example: `docs/project-management/kanban/...`
   - **Manual action:** Replace template/example paths

2. **`workflows/release-workflow.yaml` (Step 5 config):**
   - `epic_doc_pattern: docs/project-management/epics/overview/Epic {epic}/Epic-{epic}.md`
   - `kanban_board: docs/project-management/epics/overview/_index.md`
   - **Manual action:** Update paths (if using Kanban integration)

3. **RW execution documentation:**
   - Multiple example references
   - **Manual action:** Update examples (optional)

**Friction level:** 🟡 **MEDIUM** – 2-3 locations, but Kanban integration is optional

---

### 1.4 Validation Script Paths

**Locations requiring manual edits:**

1. **`.cursorrules` RW trigger section (Step 8):**
   - Template: `{scripts_path}/validation/validate_branch_context.py`
   - Template: `{scripts_path}/validation/validate_changelog_format.py`
   - Example: `packages/frameworks/workflow mgt/scripts/validation/...`
   - **Manual action:** Replace template/example paths

2. **`workflows/release-workflow.yaml` (Step 7 config):**
   - `validators: [scripts/validation/validate_branch_context.py, ...]`
   - **Manual action:** Update paths

3. **Validation scripts themselves:**
   - May hardcode version file path (see 1.1)
   - **Manual action:** Edit scripts if they hardcode paths

**Friction level:** 🟡 **MEDIUM** – 2-3 locations, but scripts are usually copied as-is

---

### 1.5 README Path

**Locations requiring manual edits:**

1. **`.cursorrules` RW trigger section (Step 5):**
   - Template: `README.md` (usually root)
   - **Manual action:** Update if README is in non-standard location

2. **`workflows/release-workflow.yaml` (Step 4 config):**
   - `readme_file: README.md`
   - **Manual action:** Update if non-standard

**Friction level:** 🟢 **LOW** – Usually `README.md` at root, rarely needs change

---

### 1.6 Project Name / Module Name

**Locations requiring manual edits:**

1. **`.cursorrules` RW trigger section:**
   - Appears in examples and comments
   - **Manual action:** Replace example project names

2. **Documentation:**
   - Throughout RW execution docs
   - **Manual action:** Update examples (optional)

**Friction level:** 🟢 **LOW** – Mostly cosmetic, but adds cognitive overhead

---

## 2. Project-Specific vs Framework-Internal

### 2.1 Project-Specific (Must be Configurable)

These values **vary per project** and must be provided via config:

- ✅ **Version file path** (`src/{project}/version.py` or equivalent)
- ✅ **Main changelog path** (`CHANGELOG.md` or equivalent)
- ✅ **Changelog archive directory** (`docs/changelog-and-release-notes/changelog-archive/` or equivalent)
- ✅ **Kanban root path** (`docs/project-management/kanban/` or equivalent) – if using Kanban
- ✅ **Validation scripts path** (`scripts/validation/` or equivalent)
- ✅ **README path** (`README.md` or equivalent) – usually root, but configurable
- ✅ **Project name** (for examples/comments) – optional but helpful

### 2.2 Framework-Internal (Should Remain Hard-Coded)

These values are **part of the RW framework** and should not be configurable:

- ❌ **RW step structure** (Steps 1-11, names, order)
- ❌ **Step execution pattern** (ANALYZE → DETERMINE → EXECUTE → VALIDATE → PROCEED)
- ❌ **Version schema** (`RC.EPIC.STORY.TASK+BUILD`) – though projects can swap this
- ❌ **Changelog format** (Keep a Changelog standard)
- ❌ **Git operations** (commit message format, tag format)
- ❌ **Validation logic** (branch context checks, changelog format checks)

---

## 3. Minimal Configuration Key Set

Based on the analysis above, here is the **minimal set of configuration keys** required for `rw-config.yaml`:

### 3.1 Required Keys (All Modes)

```yaml
# Core paths (required for all RW modes)
version_file: src/myproject/version.py          # Path to version file
main_changelog: CHANGELOG.md                    # Path to main changelog
changelog_dir: docs/changelogs                  # Directory for detailed changelog archives
scripts_path: tools/workflow_mgt/scripts        # Path to validation scripts
readme_file: README.md                          # Path to README (usually root)
```

### 3.2 Optional Keys (Mode-Dependent)

```yaml
# Kanban integration (optional - only if using Kanban)
use_kanban: true                                 # Enable Kanban integration
kanban_root: docs/project-management/kanban         # Root path for Kanban docs
epic_doc_pattern: epics/Epic-{epic}/Epic-{epic}.md         # Pattern for epic docs (relative to kanban_root)
story_doc_pattern: epics/Epic-{epic}/Story-{story}-*.md  # Pattern for story docs
kanban_board: _index.md                         # Main Kanban board file (relative to kanban_root)

# Versioning schema (optional - only if not using dev-kit versioning)
versioning_schema: RC.EPIC.STORY.TASK+BUILD     # Default, can be swapped

# Project metadata (optional - for examples/comments)
project_name: myproject                          # Project name for examples
```

### 3.3 Mode Definitions

**Mode A: Simple RW (No Kanban, Any Versioning)**
```yaml
version_file: src/myproject/version.py
main_changelog: CHANGELOG.md
changelog_dir: docs/changelogs
scripts_path: tools/workflow_mgt/scripts
readme_file: README.md
use_kanban: false
```

**Mode B: RW + Dev-Kit Versioning**
```yaml
# Same as Mode A, but version_file must follow RC.EPIC.STORY.TASK+BUILD schema
version_file: src/myproject/version.py
main_changelog: CHANGELOG.md
changelog_dir: docs/changelogs
scripts_path: tools/workflow_mgt/scripts
readme_file: README.md
use_kanban: false
versioning_schema: RC.EPIC.STORY.TASK+BUILD
```

**Mode C: Full Stack (RW + Versioning + Kanban)**
```yaml
version_file: src/myproject/version.py
main_changelog: CHANGELOG.md
changelog_dir: docs/changelog-and-release-notes/changelog-archive
scripts_path: tools/workflow_mgt/scripts
readme_file: README.md
use_kanban: true
kanban_root: docs/project-management/kanban
epic_doc_pattern: epics/Epic-{epic}.md
story_doc_pattern: epics/Epic-{epic}/stories/Story-{story}-*.md
kanban_board: _index.md
versioning_schema: RC.EPIC.STORY.TASK+BUILD
project_name: myproject
```

---

## 4. Decision: Hard-Coded vs Configurable

### 4.1 Must Be Configurable (via rw-config.yaml)

- ✅ Version file path
- ✅ Changelog paths (main + archive directory)
- ✅ Validation scripts path
- ✅ README path
- ✅ Kanban paths (if `use_kanban: true`)
- ✅ Project name (for examples/comments)

### 4.2 Should Remain Hard-Coded (Framework-Internal)

- ❌ RW step structure and order
- ❌ Step execution pattern
- ❌ Validation logic (branch context, changelog format)
- ❌ Git operation formats (commit message, tag format)
- ❌ Changelog format standard (Keep a Changelog)

### 4.3 Can Be Swapped (But Not Required)

- ⚠️ Versioning schema (projects can use their own, but RW assumes `RC.EPIC.STORY.TASK+BUILD` by default)
- ⚠️ Kanban structure (if not using dev-kit Kanban framework)

---

## 5. Adoption Friction Summary

### 5.1 Current Friction Points

| Touchpoint | Locations | Friction Level | Notes |
|------------|-----------|----------------|-------|
| Version file path | 4 | 🔴 HIGH | Includes code edits in validation scripts |
| Changelog paths | 2-3 | 🟡 MEDIUM | Mostly config/template edits |
| Kanban paths | 2-3 | 🟡 MEDIUM | Optional, but adds complexity if used |
| Validation script paths | 2-3 | 🟡 MEDIUM | Scripts usually copied as-is |
| README path | 1-2 | 🟢 LOW | Usually standard location |
| Project name | Multiple | 🟢 LOW | Cosmetic but adds cognitive overhead |

**Total manual edit locations:** **13-17 distinct places** across 5+ files

### 5.2 With rw-config.yaml (Target State)

| Touchpoint | Locations | Friction Level | Notes |
|------------|-----------|----------------|-------|
| All paths | 1 | 🟢 LOW | Single config file, installer generates everything else |

**Total manual edit locations:** **1** (answering installer questions)

---

## 6. Recommendations

### 6.1 Immediate Actions (T02-T03)

1. **Design `rw-config.yaml` schema** (T02):
   - Use the minimal key set defined in Section 3
   - Support all three modes (Simple RW, RW+Versioning, Full Stack)
   - Provide sensible defaults where possible

2. **Implement installer CLI** (T03):
   - Ask 5-7 questions (paths + mode selection)
   - Generate `rw-config.yaml` from answers
   - Auto-generate `.cursorrules` RW section from config
   - Auto-patch `workflows/release-workflow.yaml` config block from config
   - Optionally update validation scripts to read from config

### 6.2 Future Enhancements (Post-T05)

- Auto-detect existing paths (version file, changelog) to reduce questions
- Template repo with RW pre-wired
- CI/CD integration to validate config consistency

---

## 7. Acceptance Criteria Status

- [x] **All path and project-specific touchpoints are identified and listed** ✅
  - Documented in Section 1 (6 categories, 13-17 total locations)

- [x] **Minimal config key set is defined and reviewed (no unnecessary knobs)** ✅
  - Defined in Section 3 (5 required keys, 6 optional keys)
  - Modes defined to show when optional keys are needed

- [x] **Decision recorded on which aspects remain hard-coded vs. configurable** ✅
  - Documented in Section 4 (clear split between project-specific and framework-internal)

---

## 8. References

- **RW Trigger Section:** `packages/frameworks/workflow mgt/cursorrules-rw-trigger-section.md`
- **RW Workflow YAML:** `packages/frameworks/workflow mgt/workflows/release-workflow.yaml`
- **RW Execution Guide:** `packages/frameworks/workflow mgt/docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md`
- **Validation Scripts:** `packages/frameworks/workflow mgt/scripts/validation/`

---

**Next Steps:** Proceed to T02 (Design RW config schema) using this analysis as input.
