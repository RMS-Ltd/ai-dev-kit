---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:02:07Z
expires_at: null
housekeeping_policy: keep
---

# RW Config Schema Specification

**Version:** 1.0.0  
**Date:** 2025-12-04  
**Story:** E2:S04 – RW Installer & Plug-and-Play Adoption  
**Task:** T02 – Design RW config schema (`rw-config.yaml`) and modes

---

## Overview

The `rw-config.yaml` file provides a **single source of truth** for all project-specific paths and options required by the Release Workflow (RW). This eliminates the need for manual path editing across multiple files (`.cursorrules`, workflow YAML, validation scripts, docs).

**Location:** Project root (same directory as `CHANGELOG.md` and `README.md`)

---

## Schema Definition

### Required Keys (All Modes)

These keys must be present in every `rw-config.yaml`:

| Key | Type | Description | Example |
|-----|------|-------------|---------|
| `version_file` | string | Path to version file (relative to project root) | `src/myproject/version.py` |
| `main_changelog` | string | Path to main changelog file (usually root) | `CHANGELOG.md` |
| `changelog_dir` | string | Directory for detailed changelog archives | `docs/changelogs` |
| `scripts_path` | string | Path to validation scripts directory | `tools/workflow_mgt/scripts` |
| `readme_file` | string | Path to README file (usually root) | `README.md` |

### Optional Keys (Mode-Dependent)

These keys are only required if using specific features:

| Key | Type | Required When | Description | Example |
|-----|------|---------------|-------------|---------|
| `use_kanban` | boolean | Mode C (Full Stack) | Enable Kanban integration | `true` |
| `kanban_root` | string | `use_kanban: true` | Root path for Kanban docs | `docs/project-management/kanban` |
| `epic_doc_pattern` | string | `use_kanban: true` | Pattern for epic docs (relative to `kanban_root`) | `epics/Epic-{epic}/Epic-{epic}.md` |
| `story_doc_pattern` | string | `use_kanban: true` | Pattern for story docs (relative to `kanban_root`) | `epics/Epic-{epic}/Story-{story}-*.md` |
| `kanban_board` | string | `use_kanban: true` | Main Kanban board file (relative to `kanban_root`) | `_index.md` |
| `versioning_schema` | string | Optional | Version schema (default: `RC.EPIC.STORY.TASK+BUILD`) | `RC.EPIC.STORY.TASK+BUILD` |
| `versioning_mode` | string | Optional (recommended) | Versioning model: `dual`, `semver_only`, `kanban_only` | `dual` |
| `semver_mapping_strategy` | string | Optional | SemVer mapping strategy (`task_touch` or `registry`) | `task_touch` |
| `project_name` | string | Optional | Project name (for examples/comments) | `myproject` |

---

## Mode Definitions

### Mode A: Simple RW

**Use Case:** RW-only, no Kanban integration, any versioning scheme

**Required Keys:**
- `version_file`
- `main_changelog`
- `changelog_dir`
- `scripts_path`
- `readme_file`

**Optional Keys:**
- `versioning_schema` (if not using dev-kit schema)
- `project_name` (for examples/comments)

**Example:**
```yaml
version_file: src/myproject/version.py
main_changelog: CHANGELOG.md
changelog_dir: docs/changelogs
scripts_path: tools/workflow_mgt/scripts
readme_file: README.md
use_kanban: false
versioning_mode: dual
semver_mapping_strategy: task_touch
project_name: myproject
```

---

### Mode B: RW + Dev-Kit Versioning

**Use Case:** RW with dev-kit `RC.EPIC.STORY.TASK+BUILD` versioning schema

**Required Keys:**
- Same as Mode A

**Optional Keys:**
- `versioning_schema: RC.EPIC.STORY.TASK+BUILD` (explicit, but default)
- `project_name` (for examples/comments)

**Example:**
```yaml
version_file: src/myproject/version.py
main_changelog: CHANGELOG.md
changelog_dir: docs/changelogs
scripts_path: tools/workflow_mgt/scripts
readme_file: README.md
use_kanban: false
versioning_schema: RC.EPIC.STORY.TASK+BUILD
versioning_mode: dual
semver_mapping_strategy: task_touch
project_name: myproject
```

---

### Mode C: Full Stack (RW + Versioning + Kanban)

**Use Case:** Complete integration with RW, dev-kit versioning, and Kanban

**Required Keys:**
- All Mode A keys
- `use_kanban: true`
- `kanban_root`
- `epic_doc_pattern`
- `story_doc_pattern`
- `kanban_board`

**Optional Keys:**
- `versioning_schema` (defaults to dev-kit schema)
- `project_name` (for examples/comments)

**Example:**
```yaml
version_file: src/myproject/version.py
main_changelog: CHANGELOG.md
changelog_dir: docs/changelog-and-release-notes/changelog-archive
scripts_path: tools/workflow_mgt/scripts
readme_file: README.md
use_kanban: true
kanban_root: docs/project-management/kanban
epic_doc_pattern: epics/Epic-{epic}/Epic-{epic}.md
story_doc_pattern: epics/Epic-{epic}/Story-{story}-*.md
kanban_board: _index.md
versioning_schema: RC.EPIC.STORY.TASK+BUILD
versioning_mode: dual
semver_mapping_strategy: task_touch
project_name: myproject
```

---

## Pattern Variables

The following variables can be used in path patterns:

- `{epic}` - Epic number (e.g., `2`, `11`)
- `{story}` - Story number (e.g., `1`, `03`)
- `{version}` - Full version string (e.g., `0.2.4.1+3`)

**Example patterns:**
- `epics/Epic-{epic}/Epic-{epic}.md` → `epics/Epic-2/Epic-2.md`
- `epics/Epic-{epic}/Story-{story}-*.md` → `epics/Epic-2/Story-001-*.md`
- `CHANGELOG_v{version}.md` → `CHANGELOG_v0.2.4.1+3.md`

---

## Validation Rules

1. **Required keys must be present** (validation fails if missing)
2. **If `use_kanban: true`, all Kanban keys must be present**
3. **Paths must be relative to project root** (no absolute paths)
4. **Pattern variables** (`{epic}`, `{story}`, `{version}`) are only valid in specific fields
5. **`scripts_path` must point to a directory containing validation scripts**
6. **FR-046 policy invariant:** If `versioning_mode: dual`, `semver_mapping_strategy` must be `task_touch`

---

## Usage by RW Components

### `.cursorrules` RW Trigger Section
- Reads `version_file` for Step 2 (Bump Version)
- Reads `changelog_dir` and `main_changelog` for Steps 3-4
- Reads `kanban_root` and patterns for Step 6 (if `use_kanban: true`)
- Reads `scripts_path` for Step 8 (Run Validators)
- Reads `readme_file` for Step 5

### `workflows/release-workflow.yaml`
- Uses `version_file` in config block
- Uses `changelog_dir` and `main_changelog` in config block
- Uses Kanban paths in Step 5 config (if `use_kanban: true`)

### Validation Scripts
- `validate_branch_context.py` reads `version_file` from config
- `validate_changelog_format.py` reads `main_changelog` from config

---

## Migration Path

**From:** Manual path editing in 5+ files  
**To:** Single `rw-config.yaml` file + installer-generated files

**Steps:**
1. Installer asks questions → generates `rw-config.yaml`
2. Installer reads `rw-config.yaml` → generates `.cursorrules` RW section
3. Installer reads `rw-config.yaml` → patches `workflows/release-workflow.yaml`
4. Validation scripts updated to read from `rw-config.yaml` (or installer patches them)

---

## References

- **T01 Analysis:** `packages/frameworks/workflow mgt/docs/Analysis/T01-rw-adoption-friction-analysis.md`
- **Example Configs:** `packages/frameworks/workflow mgt/config/examples/`
