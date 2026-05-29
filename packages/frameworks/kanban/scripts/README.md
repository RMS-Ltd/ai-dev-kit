# Kanban Migration Utilities

This directory contains utilities for detecting, analyzing, and migrating existing Kanban structures to the canonical ai-dev-kit Kanban framework format.

## Scripts

### `semantic_matcher.py`

Semantic matching utility for epic and task matching. Calculates similarity scores between user epics and canonical epics based on content analysis.

**Usage:**
```python
from semantic_matcher import SemanticMatcher, load_canonical_epic_definitions

matcher = SemanticMatcher()
canonical_epics = load_canonical_epic_definitions(framework_path)
similarity = matcher.calculate_similarity(text1, text2)
```

**Features:**
- Tokenizes and analyzes epic content (title, description, purpose, scope)
- Calculates weighted similarity scores (0-100%)
- Classifies matches (exact, semantic, partial, no match)
- Finds best canonical epic match for user epics

### `reference_updater.py`

Reference updater for task ID references. Updates `E{epic}:S{story}:T{task}` references in changelogs, documentation, and story files.

**Usage:**
```python
from reference_updater import ReferenceUpdater

updater = ReferenceUpdater(task_mappings)
result = updater.update_references(project_root)
```

**Features:**
- Automatically updates task ID references in markdown files
- Tracks updated files and un-updatable references
- Generates migration report with reference update summary

### `agentic_mapper.py`

Agentic intelligence module for intelligent task mapping. Analyzes task content and maps tasks to appropriate canonical stories based on content understanding.

**Usage:**
```python
from agentic_mapper import AgenticTaskMapper

mapper = AgenticTaskMapper(analysis_report, kanban_path)
mappings = mapper.map_tasks_to_canonical_stories()
explanations = mapper.generate_explanations()
```

**Features:**
- Enhanced content analysis (beyond simple word matching)
- Intelligent task-to-story mapping
- Provides explanations for mapping decisions
- Extensible framework for LLM integration (future enhancement)
- Confidence scores for mappings

**Current Implementation:**
- Enhanced keyword extraction and similarity calculation
- Content-aware task mapping
- Explanation generation

**Future Enhancement:**
- Full LLM-based agentic intelligence
- Context-aware decision making
- Advanced content understanding

### `install_kanban_framework.py`

Main installation script with interactive mode selection. Integrates detection, analysis, and migration utilities.

**Usage:**
```bash
python3 install_kanban_framework.py [--mode MODE] [--kanban-path PATH] [--dry-run] [--force]
```

**Arguments:**
- `--mode MODE` - Installation mode: fresh, migration, update, hybrid, canonical_adoption, auto (default: auto)
- `--kanban-path PATH` - Path to Kanban directory (default: `docs/project-management/kanban`)
- `--dry-run` - Preview changes without modifying files
- `--force` - Skip confirmation prompts
- `--skip-detection` - Skip detection step (use existing detection_report.json)
- `--skip-analysis` - Skip analysis step (use existing analysis_report.json)

**Example:**
```bash
# Interactive installation (recommended)
python3 install_kanban_framework.py

# Migration install with existing structure
python3 install_kanban_framework.py --mode migration

# Dry run to preview changes
python3 install_kanban_framework.py --mode migration --dry-run
```

**Workflow:**
1. Detects existing Kanban structure (if not fresh mode)
2. Analyzes structure with semantic matching and generates migration plan
3. Presents migration plan with semantic matches and recommendations
4. Prompts for installation mode selection (or uses recommended mode)
5. Migrates structure based on selected mode (with intelligent task mapping in canonical_adoption mode)
6. Updates task ID references automatically
7. Validates migration

### `detect_existing_structure.py`

Scans a project directory to detect existing Kanban (Epic/Story/Task) structures and generates a detection report.

**Usage:**
```bash
python3 detect_existing_structure.py [--kanban-path PATH] [--output OUTPUT_FILE] [--verbose]
```

**Arguments:**
- `--kanban-path PATH` - Path to Kanban directory (default: `docs/project-management/kanban`)
- `--output OUTPUT_FILE` - Output file for detection report (default: `detection_report.json`)
- `--verbose` - Enable verbose output

**Example:**
```bash
python3 detect_existing_structure.py \
  --kanban-path docs/project-management/kanban \
  --output detection_report.json \
  --verbose
```

**Output:**
- JSON report containing detected epics, stories, tasks, and conflicts
- Summary printed to stdout

### `migrate_structure.py`

Migrates existing Kanban structures to canonical format, preserving all work items and forensic markers. Supports intelligent task mapping and automatic reference updating.

**Usage:**
```bash
python3 migrate_structure.py [--analysis-report REPORT] [--mode MODE] [--dry-run] [--backup-dir DIR]
```

**Arguments:**
- `--analysis-report REPORT` - Path to analysis report JSON (default: `analysis_report.json`)
- `--mode MODE` - Installation mode: fresh, migration, update, hybrid, canonical_adoption, auto (default: auto-detect)
- `--dry-run` - Preview changes without modifying files
- `--backup-dir DIR` - Directory for backups (default: auto-generated)
- `--kanban-path PATH` - Path to Kanban directory (default: `docs/project-management/kanban`)
- `--force` - Skip confirmation prompts

**Example:**
```bash
python3 migrate_structure.py \
  --analysis-report analysis_report.json \
  --mode hybrid \
  --dry-run
```

**Output:**
- Creates backup of existing structure
- Migrates epics/stories/tasks to canonical format (with intelligent mapping in canonical_adoption mode)
- Automatically updates task ID references in changelogs, docs, and story files
- Validates migrated structure
- Generates migration report with reference update summary

### `analyze_structure.py`

Analyzes detected Kanban structures and maps them to canonical E/S/T format, identifying conflicts, performing semantic matching, and generating migration plans.

**Usage:**
```bash
python3 analyze_structure.py [--detection-report REPORT] [--output OUTPUT_FILE] [--verbose]
```

**Arguments:**
- `--detection-report REPORT` - Path to detection report JSON (default: `detection_report.json`)
- `--output OUTPUT_FILE` - Output file for analysis report (default: `analysis_report.json`)
- `--verbose` - Enable verbose output

**Example:**
```bash
python3 analyze_structure.py \
  --detection-report detection_report.json \
  --output analysis_report.json \
  --verbose
```

**Output:**
- JSON report containing epic/story/task mappings, conflicts, gaps, semantic matches, and migration plan
- Summary printed to stdout including recommended installation mode, semantic matches, and complexity assessment
- Semantic matching analysis showing similarity scores between user epics and canonical epics

### `generate_task_templates.py`

Procedural task template generator for creating task templates from the canonical E/S/T structure document. Part of the hybrid template system that combines high-quality concrete templates with procedural generation capabilities.

**Usage:**
```bash
python3 generate_task_templates.py [OPTIONS]
```

**Arguments:**
- `--structure-file PATH` - Path to structure document (default: `templates/COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md`)
- `--template-file PATH` - Path to task template structure (default: `templates/TASK_TEMPLATE.md`)
- `--output-dir PATH` - Output directory for generated templates (default: `templates/tasks/`)
- `--epic N` - Generate templates for specific epic only
- `--story N` - Generate templates for specific story only (requires `--epic`)
- `--overwrite` - Allow overwriting existing files
- `--dry-run` - Show what would be generated without creating files
- `--validate` - Validate generated templates against concrete templates
- `--verbose` - Verbose output

**Examples:**
```bash
# Generate all missing task templates
python3 generate_task_templates.py

# Generate templates for Epic 1 only
python3 generate_task_templates.py --epic 1

# Generate templates for Epic 1, Story 1 only
python3 generate_task_templates.py --epic 1 --story 1

# Dry run (show what would be generated)
python3 generate_task_templates.py --dry-run

# Overwrite existing templates
python3 generate_task_templates.py --overwrite

# Validate generated templates
python3 generate_task_templates.py --validate
```

**Features:**
- Parses canonical structure document to extract Epic/Story/Task hierarchy
- Generates task template files matching `TASK_TEMPLATE.md` structure
- Populates template sections (Scope, Input, Deliverable, Acceptance Criteria, Approach, Dependencies)
- Preserves contextualization placeholders (`{PROJECT_NAME}`, `{PROJECT_TYPE}`, etc.)
- Default behavior skips existing files (requires `--overwrite` to regenerate)
- Validation routine compares generated templates against concrete templates

**When to Use:**
- **Framework Maintainers:** Regenerate templates after structural changes to `COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md`
- **Adopting Projects:** Generate missing task templates or regenerate after structure updates
- **Maintenance:** Validate that generated templates match concrete templates

**Related:**
- ADR: `docs/architecture/standards-and-adrs/task-template-system-hybrid-adr.md`
- Design: `docs/architecture/standards-and-adrs/task-template-generator-design.md`
- FR-029: Procedural Task Template Generation (Hybrid Strategy)
- E4:S15: Procedural Task Template Generation and Hybrid Strategy

### `agentic_template_generator.py`

Agentic template generator using AI/LLM to generate rich, contextual templates for Epics, Stories, and Tasks. Enhances the procedural generator with intelligent content generation.

**Usage:**
```bash
python3 agentic_template_generator.py --type epic --epic 1 --provider openai
python3 agentic_template_generator.py --type story --epic 1 --story 1 --provider openai
python3 agentic_template_generator.py --type task --epic 1 --story 1 --task 1 --provider openai
python3 agentic_template_generator.py --type all --provider openai --dry-run
```

**Arguments:**
- `--type TYPE` - Template type: epic, story, task, or all (required)
- `--epic N` - Epic number (required for epic/story/task)
- `--story N` - Story number (required for story/task)
- `--task N` - Task number (required for task)
- `--provider PROVIDER` - LLM provider: openai, anthropic, local, none (default: none)
- `--model MODEL` - LLM model name (default: gpt-4)
- `--api-key KEY` - API key (or set OPENAI_API_KEY/ANTHROPIC_API_KEY env var)
- `--structure-file PATH` - Path to structure document
- `--template-dir PATH` - Directory containing template files
- `--output-dir PATH` - Output directory for generated templates
- `--overwrite` - Allow overwriting existing files
- `--dry-run` - Show what would be generated without creating files
- `--verbose` - Verbose output

**Examples:**
```bash
# Generate Epic template with OpenAI
python3 agentic_template_generator.py --type epic --epic 1 --provider openai

# Generate Story template with Anthropic
python3 agentic_template_generator.py --type story --epic 1 --story 1 --provider anthropic

# Generate Task template (procedural fallback if no LLM)
python3 agentic_template_generator.py --type task --epic 1 --story 1 --task 1

# Generate all templates (dry run)
python3 agentic_template_generator.py --type all --provider openai --dry-run --verbose
```

**Features:**
- **AI-Powered Generation:** Uses LLM to generate rich, contextual content
- **Procedural Fallback:** Falls back to procedural generation if LLM unavailable
- **Multi-Provider Support:** Supports OpenAI, Anthropic, or local models
- **Template Types:** Generates Epic, Story, and Task templates
- **Batch Generation:** Can generate all templates at once
- **Context-Aware:** Uses Epic/Story/Task context for better content

**LLM Providers:**
- **OpenAI:** Requires `openai` package and `OPENAI_API_KEY` env var
- **Anthropic:** Requires `anthropic` package and `ANTHROPIC_API_KEY` env var
- **Local:** Placeholder for local model integration (future)
- **None:** Uses procedural fallback (no LLM required)

**When to Use:**
- **With LLM:** Generate high-quality, contextual templates with rich content
- **Without LLM:** Falls back to procedural generation (same as `generate_task_templates.py`)
- **Batch Generation:** Generate all templates at once for a complete template set
- **Quality Enhancement:** Use AI to enhance procedural templates with richer content

**Related:**
- `generate_task_templates.py` - Procedural template generator (no LLM)
- ADR: `docs/architecture/standards-and-adrs/task-template-system-hybrid-adr.md`
- E4:S15: Procedural Task Template Generation and Hybrid Strategy

## Workflow

### Recommended: Use Installation Script

The easiest way is to use the integrated installation script:

```bash
python3 install_kanban_framework.py
```

This will:
1. Detect existing structure
2. Analyze and generate migration plan
3. Prompt for installation mode
4. Migrate structure

### Manual Workflow

If you prefer to run utilities individually:

1. **Detect existing structure:**
   ```bash
   python3 detect_existing_structure.py --kanban-path docs/project-management/kanban --output detection_report.json
   ```

2. **Analyze structure and generate migration plan:**
   ```bash
   python3 analyze_structure.py --detection-report detection_report.json --output analysis_report.json
   ```

3. **Review reports:**
   - Check `detection_report.json` for detected structures
   - Check `analysis_report.json` for conflicts, gaps, semantic matches, and migration plan
   - Review recommended installation mode (fresh, migration, update, hybrid, canonical_adoption)
   - Review semantic matches to see which user epics match canonical epics

4. **Proceed with migration:**
   ```bash
   python3 migrate_structure.py --analysis-report analysis_report.json --mode migration
   ```

## Report Formats

### Detection Report

```json
{
  "status": "detected",
  "detection_date": "2025-12-10T...",
  "kanban_path": "docs/project-management/kanban",
  "epics": [...],
  "stories": [...],
  "tasks": [...],
  "conflicts": [...],
  "summary": {
    "epic_count": 10,
    "story_count": 46,
    "task_count": 335,
    "conflict_count": 1
  }
}
```

### Analysis Report

```json
{
  "status": "analyzed",
  "analysis_date": "2025-12-10T...",
  "epic_mappings": [...],
  "story_mappings": [...],
  "task_mappings": [...],
  "conflicts": [...],
  "gaps": [...],
  "migration_plan": {
    "recommended_mode": "hybrid",
    "steps": [...],
    "estimated_complexity": "high"
  },
  "summary": {...}
}
```

## Installation Modes

The analysis utility recommends one of five installation modes:

- **fresh** - No existing structure, clean install
- **migration** - Existing structure detected, migrate to canonical format
- **update** - Existing framework installation, update to new version
- **hybrid** - Preserve project epics, install framework epics (recommended when conflicts detected)
- **canonical_adoption** - Adopt canonical structure with intelligent task mapping (RECOMMENDED when semantic matches found)

### Canonical Adoption Mode

The **canonical_adoption** mode is recommended when semantic analysis detects matches between your epics and canonical epics. This mode:

- Intelligently maps your tasks to appropriate canonical epics/stories using agentic intelligence
- Adopts the proven canonical structure evolved through real-world use
- Automatically updates task ID references in changelogs, docs, and story files
- Provides optimal organizational structure while preserving all your work
- Generates explanations for all mapping decisions

**When to use:**
- Semantic analysis finds matches between your epics and canonical epics (no threshold required)
- You want optimal organization leveraging proven best practices
- You're willing to adopt canonical structure with intelligent migration

**Agentic Intelligence:**
- Uses enhanced content analysis to understand task meaning
- Maps tasks to appropriate canonical stories (not just epic renumbering)
- Provides reasoning and confidence scores for each mapping
- Framework ready for LLM integration (future enhancement)

## Semantic Matching

The analysis utility now includes semantic matching capabilities:

- **Semantic Analysis:** Analyzes epic content (title, description, purpose, scope) to detect semantic matches
- **Similarity Scores:** Calculates similarity scores (0-100%) between user epics and canonical epics
- **Match Classification:**
  - **Exact Match (90-100%):** Same purpose, different names - strongly recommend adopting canonical
  - **Semantic Match (70-89%):** Similar purpose - recommend adopting canonical or merging
  - **Partial Match (40-69%):** Overlapping responsibilities - review for potential merge
  - **No Match (<40%):** Different purposes - keep as project-specific epic

**Example:**
```
Epic 1: "Tool Management" → Canonical Epic 8: "Codebase Maintenance" (75% similarity)
  Recommendation: Adopt Canonical Epic 8
```

## Reference Updating

The migration utility automatically updates task ID references:

- **Changelogs:** Updates `E{epic}:S{story}:T{task}` references
- **Documentation:** Updates references in README, docs, and other markdown files
- **Story Files:** Updates task references within story documents
- **Migration Report:** Shows all updated references and identifies un-updatable references

## Related Documentation

- BR-006: Missing Migration Support for Pre-Existing Kanban Structures
- FR-007: Migration Utilities and Installation Modes
- FR-009: Intelligent Epic Matching and AI-Assisted Canonical Structure Adoption
- UXR-001: Migration User Experience Research
- UXR-002: Comprehensive UAT of Migration Utilities
- UXR-003: Intelligent Epic Matching and Canonical Adoption UAT
- Epic 4, Story 7: Migration Support and Installation Modes
- Epic 4, Story 8: Intelligent Epic Matching and Canonical Structure Adoption

## Related Documentation

- BR-006: Missing Migration Support for Pre-Existing Kanban Structures
- FR-007: Migration Utilities and Installation Modes
- UXR-001: Migration User Experience Research
- Epic 4, Story 7: Migration Support and Installation Modes

## Requirements

- Python 3.6+
- Standard library only (no external dependencies)

