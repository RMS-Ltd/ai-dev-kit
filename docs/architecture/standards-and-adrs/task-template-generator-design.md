---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-22T09:20:00Z
expires_at: null
housekeeping_policy: keep
---

# Task Template Generator Design

**Purpose:** Design document for procedural task template generator  
**Related:** E4:S15:T02 - Design procedural task template generator  
**ADR:** `task-template-system-hybrid-adr.md`  
**FR:** FR-029

---

## Overview

The task template generator reads the canonical E/S/T structure document (`COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md`) and generates task template files that match the structure and quality of manually-created concrete templates.

---

## Input Format

### Source Document: `COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md`

**Structure:**
- Markdown document with hierarchical structure
- Epic sections: heading `### Epic N: …` with a placeholder name (see pattern below)
- Story sections: heading `#### Story N: …` with a placeholder name
- Task lists: `**Typical Tasks:**` followed by `- TNN: …` with task description

```text
### Epic N: {Name}
#### Story N: {Name}
**Typical Tasks:**
- TNN: {Task Description}
```

**Example:**
```markdown
### Epic 1: {PROJECT_NAME} Core

#### Story 1: Project Foundation and Setup
**Purpose:** Establish project foundation, structure, and initial configuration.

**Typical Tasks:**
- T01: Define project structure and directory layout
- T02: Set up version control and repository configuration
- T03: Configure development environment and tooling
```

**Parsing Strategy:**
1. Parse markdown using regex or markdown parser
2. Extract Epic number, name, and description
3. Extract Story number, name, purpose
4. Extract Task number and description from task list
5. Build hierarchical structure: Epic → Story → Task

---

## Output Format

### Generated Task Template Files

**File Path Pattern:**
```
templates/tasks/Epic-{epic}/Story-{story}/T{task:02d}-{kebab-case-description}.md
```

**Example:**
```
templates/tasks/Epic-1/Story-1/T01-Define-Project-Structure-and-Directory-Layout.md
```

**File Structure:**
- Follows `TASK_TEMPLATE.md` structure exactly
- All sections populated with appropriate content
- Placeholders preserved for contextualization (`\{PROJECT_NAME\}`, `\{PROJECT_TYPE\}`, etc.)

---

## Mapping Rules

### Epic/Story/Task → File Path

1. **Epic Number:** Extract from `### Epic N:` → `Epic-\{N\}`
2. **Story Number:** Extract from `#### Story N:` → `Story-\{N\}`
3. **Task Number:** Extract from `- TNN:` → `T` + two-digit task number (e.g. `T01`)
4. **Task Description:** Extract from `- TNN: …` → Convert to kebab-case for filename

**Example:**
- Input: `- T01: Define project structure and directory layout`
- Output: `T01-Define-Project-Structure-and-Directory-Layout.md`

### Task Content Generation

**Template Sections:**

1. **Frontmatter:**
   - `lifecycle: evergreen`
   - `ttl_days: null`
   - `created_at: [YYYY-MM-DD]` (placeholder)
   - `expires_at: null`
   - `housekeeping_policy: keep`

2. **Header:**
   - Title: task title line with epic/story/task numbers and human-readable description (see generator output)
   - Status: `TODO`
   - Priority: `HIGH` (default, can be customized)
   - Version: internal `v0.E.S.T+0` pattern for template creation (zero abstract space)
   - Code: zero-padded `E`/`S`/`T` code field

3. **Task ID Section:**
   - Format: full `E:S:T` IDs with literal epic/story/task numbers
   - Full Task ID: zero-padded numeric epic/story/task in `E..:S..:T..` form

4. **Scope:**
   - Generate from task description
   - Template: prose combining task description, project name placeholder, and story/epic context

5. **Input:**
   - Generate generic inputs based on task type/pattern
   - Include story/epic dependencies
   - Include `\{PROJECT_NAME\}` placeholder

6. **Deliverable:**
   - Generate generic deliverables based on task description
   - Use action verbs from task description

7. **Acceptance Criteria:**
   - Generate 3-5 criteria based on task description
   - Use measurable, testable language

8. **Approach:**
   - Generate 5-7 step approach based on task description
   - Use action verbs and clear steps

9. **Dependencies:**
   - **Depends On:** Previous tasks in same story (e.g. prior `Txx` in checklist)
   - **Blocks:** Next tasks in same story (e.g. subsequent `Txx`)
   - **Parallel Development Candidacy:** Determine based on dependencies

10. **Related Work:**
    - Related Tasks: Other tasks in same story
    - Related Stories: Current story reference

11. **Version Anchor:**
    - Standard forensic marker format
    - Instructions for completion

12. **Notes, Completion Summary, References, Next Actions:**
    - Standard template placeholders

---

## Placeholder Population

### Contextualization Placeholders

**Preserved Placeholders:**
- `\{PROJECT_NAME\}` - Project name (to be replaced during contextualization)
- `\{PROJECT_TYPE\}` - Project type (to be replaced during contextualization)
- `\{DOMAIN\}` - Domain/industry (to be replaced during contextualization)
- `[YYYY-MM-DD]` - Date placeholders (to be replaced when task is created)

**Generated Content:**
- Task descriptions use placeholders where appropriate
- Scope, Input, Deliverable sections reference `\{PROJECT_NAME\}`

---

## Safety and Overwrite Behavior

### File Existence Checks

**Default Behavior (Safe Mode):**
- **Skip existing files:** If template file already exists, skip generation
- **Report skipped files:** Log which files were skipped
- **Generate missing only:** Only generate templates that don't exist

**Overwrite Mode (Explicit):**
- **`--overwrite` flag:** Explicitly allow overwriting existing files
- **`--force` flag:** Overwrite without confirmation (use with caution)
- **Backup option:** `--backup` creates backup before overwriting

### Validation

**Pre-Generation Validation:**
- Verify structure document is parseable
- Verify output directory exists or can be created
- Verify no conflicting files (if overwrite disabled)

**Post-Generation Validation:**
- Verify all generated files are valid markdown
- Verify file structure matches `TASK_TEMPLATE.md`
- Verify placeholders are preserved correctly

---

## CLI Interface

### Command Structure

```bash
python generate_task_templates.py [OPTIONS]
```

### Options

- `--structure-file PATH` - Path to structure document (default: `COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md`)
- `--template-file PATH` - Path to task template structure (default: `TASK_TEMPLATE.md`)
- `--output-dir PATH` - Output directory for generated templates (default: `templates/tasks/`)
- `--epic N` - Generate templates for specific epic only
- `--story N` - Generate templates for specific story only (requires `--epic`)
- `--overwrite` - Allow overwriting existing files
- `--dry-run` - Show what would be generated without creating files
- `--validate` - Validate generated templates against concrete templates
- `--verbose` - Verbose output

### Examples

```bash
# Generate all missing task templates
python generate_task_templates.py

# Generate templates for Epic 1 only
python generate_task_templates.py --epic 1

# Generate templates for Epic 1, Story 1 only
python generate_task_templates.py --epic 1 --story 1

# Dry run (show what would be generated)
python generate_task_templates.py --dry-run

# Overwrite existing templates (with backup)
python generate_task_templates.py --overwrite --backup

# Validate generated templates
python generate_task_templates.py --validate
```

---

## Validation Routine

### Comparison Against Concrete Templates

**Validation Checks:**

1. **Task Coverage:**
   - Verify all tasks from structure document have corresponding template files
   - Report missing templates

2. **File Paths:**
   - Verify file paths match expected pattern
   - Verify directory structure is correct

3. **Core Structural Sections:**
   - Verify frontmatter matches template
   - Verify required sections exist (Scope, Input, Deliverable, Acceptance Criteria, Approach, Dependencies)
   - Verify section order matches template

4. **Content Quality:**
   - Verify placeholders are preserved
   - Verify task descriptions are included
   - Verify dependencies are correctly inferred

**Validation Output:**
- Report discrepancies
- Generate diff for structural differences
- Provide recommendations for fixes

---

## Implementation Considerations

### Parsing Strategy

**Option 1: Regex-Based Parsing**
- Pros: Simple, no dependencies
- Cons: Fragile, may break with format changes

**Option 2: Markdown Parser**
- Pros: Robust, handles edge cases
- Cons: Requires dependency (e.g., `markdown`, `mistune`)

**Recommendation:** Start with regex-based parsing, migrate to markdown parser if needed.

### Content Generation

**Option 1: Template-Based**
- Use Jinja2 or similar templating engine
- Pros: Flexible, easy to modify
- Cons: Requires template files

**Option 2: String Formatting**
- Use Python string formatting
- Pros: No dependencies, simple
- Cons: Less flexible

**Recommendation:** Use template-based approach with Jinja2 for flexibility.

### Task Description Enhancement

**Current State:**
- Structure document has minimal task descriptions (just names)

**Enhancement Options:**
1. **Pattern Matching:** Use task name patterns to infer content
2. **Template Library:** Maintain library of task type templates
3. **AI Enhancement:** Use LLM to generate richer content (future)

**Recommendation:** Start with pattern matching and template library, consider AI enhancement later.

---

## Error Handling

### Parse Errors

- **Invalid Structure:** Report error, skip problematic epic/story/task
- **Missing Sections:** Use defaults or report warning
- **Format Issues:** Report warning, attempt to recover

### Generation Errors

- **File Write Errors:** Report error, continue with other files
- **Directory Creation Errors:** Report error, abort
- **Validation Errors:** Report errors, provide recommendations

### Recovery

- **Partial Generation:** Support resuming from last successful task
- **Backup/Restore:** Support backing up before overwrite
- **Rollback:** Support rolling back to previous state

---

## Future Enhancements

1. **AI-Enhanced Content:** Use LLM to generate richer task descriptions
2. **Custom Templates:** Support project-specific template customizations
3. **Incremental Updates:** Update only changed templates
4. **Diff Generation:** Generate diffs between generated and concrete templates
5. **Quality Metrics:** Measure quality of generated templates vs concrete templates

---

## Acceptance Criteria

- [ ] Generator can parse `COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md`
- [ ] Generator can create all canonical task templates
- [ ] Generated templates match `TASK_TEMPLATE.md` structure
- [ ] Generated templates preserve placeholders
- [ ] Generator supports dry-run mode
- [ ] Generator supports overwrite protection
- [ ] Validation routine can compare generated vs concrete templates
- [ ] CLI interface is intuitive and well-documented

---

## References

- `packages/frameworks/kanban/templates/COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md` - Source structure document
- `packages/frameworks/kanban/templates/TASK_TEMPLATE.md` - Task template structure
- `packages/frameworks/kanban/templates/tasks/` - Concrete task templates (reference set)
- `docs/architecture/standards-and-adrs/task-template-system-hybrid-adr.md` - ADR

---

_Last updated: 2025-12-22 (v0.4.15.0+1 – Generator design document created)_

