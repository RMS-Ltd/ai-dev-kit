---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-16T22:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Post-Implementation Review (PIR) Workflow Reference

**Version:** 1.0.0
**Last Updated:** 2025-12-16
**Related:** Epic 2, Story 5 - Post-Implementation Review Workflow

---

## 📜 Version History

**Current Version:** 1.0.0 (2025-12-16)

### Version 1.0.0 (2025-12-16) - Initial Release
- **Initial:** 16-step Post-Implementation Review workflow
- **Steps:** Complete workflow from scope identification through report creation, KB updates, Kanban integration, and linking
- **Features:** Epic-level and Story-level reviews, significance evaluation, integration with RW/Kanban/versioning
- **Related:** E2:S05 - Post-Implementation Review Workflow

**Policy References:**
- **[Kanban Governance Policy](../../project-management/rituals/policy/kanban-governance-policy.md)** - Work item structure and task-level versioning requirements
- **[Versioning Strategy](../../Architecture/standards-and-adrs/versioning-strategy.md)** - Forensic traceability and canonical ordering principles
- **[Versioning Policy (Schema)](../../Architecture/standards-and-adrs/versioning-policy.md)** - Version schema definition (RC.EPIC.STORY.TASK+BUILD)
- **[Bidirectional Wiring Principle](../../project-management/kanban/fr-br/BIDIRECTIONAL_WIRING_PRINCIPLE.md)** - Linking patterns for traceability

---

## 📖 Overview

This document provides a comprehensive reference for the **Post-Implementation Review (PIR) Workflow**, a systematic review process for completed Epics and Stories that captures lessons learned, identifies improvements, and ensures quality standards are met.

The PIR workflow enables **continuous improvement** through structured reflection, **knowledge capture** through comprehensive documentation, and **traceability** through integration with RW, Kanban, and versioning systems.

**⭐ Canonical Example:** The PIR workflow follows the same agent-driven execution pattern as the Release Workflow. See [PIR Workflow Agent Execution Guide](pir-workflow-agent-execution.md) for detailed step-by-step agent execution patterns.

**🔄 Auto-Trigger:** PIR workflow is automatically triggered by RW Step 15 when Epic/Story is marked COMPLETE. See [Release Workflow Reference](release-workflow-reference.md) for RW integration details.

### How This Workflow Implements Policy Requirements

**From [Kanban Governance Policy](../../project-management/rituals/policy/kanban-governance-policy.md):**
- ✅ **Work item traceability:** Step 14 links PIR to Epic/Story/Tasks using version references
- ✅ **Documentation sync:** Step 12 updates Kanban documentation with PIR summaries
- ✅ **Task creation:** Step 13 auto-creates follow-up Kanban tasks from PIR findings

**From [Versioning Strategy](../../Architecture/standards-and-adrs/versioning-strategy.md):**
- ✅ **Version references:** Steps 10, 14 use project versioning schema (RC.EPIC.STORY.TASK+BUILD)
- ✅ **Forensic traceability:** PIR reports reference versions for complete traceability
- ✅ **Canonical ordering:** PIR reports use version-based naming for ordering

**From [Versioning Policy (Schema)](../../Architecture/standards-and-adrs/versioning-policy.md):**
- ✅ **Schema usage:** PIR reports use project versioning schema (no separate PIR versioning)
- ✅ **Version range (Epic):** Epic-level PIRs reference version range (first to last)
- ✅ **Single version (Story):** Story-level PIRs reference single version (last in Story)

**From [Bidirectional Wiring Principle](../../project-management/kanban/fr-br/BIDIRECTIONAL_WIRING_PRINCIPLE.md):**
- ✅ **Bidirectional links:** Step 12, 14 establish bidirectional links (Epic/Story ↔ PIR report)
- ✅ **Traceability:** Complete traceability through version references and links

---

## 📋 Workflow Structure

The PIR workflow consists of **16 steps** organized into 5 phases. The workflow supports both Epic-level and Story-level reviews, with Story-level reviews including an additional significance evaluation step:

### Phase 1: Preparation

**Purpose:** Identify review scope, gather materials, prepare checklist

- **Step 1:** Identify Review Scope
  - Determines if review is Epic-level or Story-level
  - Reads Epic/Story document to identify review target
  - Verifies COMPLETE status
  - **Required:** Yes, **Mandatory:** Yes, **Blocking:** Yes

- **Step 2:** Evaluate Story Significance (Story-level only)
  - Evaluates Story against significance criteria
  - Determines if Story warrants PIR (High/Medium/Low)
  - Makes decision: Proceed/Skip/Optional
  - **Required:** No (only for Story-level), **Enabled:** Yes (conditional)

- **Step 3:** Gather Review Materials
  - Collects Epic/Story documents, Task documents, changelogs
  - Gathers related BR/FR documents, code changes, documentation
  - **Required:** Yes

- **Step 4:** Prepare Review Checklist
  - Creates structured checklist based on PIR template
  - Populates checklist with Epic/Story context
  - **Required:** Yes

### Phase 2: Analysis

**Purpose:** Review work items, analyze goals, review technical implementation

- **Step 5:** Review Completed Work Items
  - Reviews all Stories (Epic-level) or Tasks (Story-level)
  - Assesses completion status and quality
  - Documents findings for each work item
  - **Required:** Yes

- **Step 6:** Analyze Goals vs Outcomes
  - Compares Epic/Story goals with actual outcomes
  - Assesses goal achievement status
  - Documents evidence and metrics
  - **Required:** Yes

- **Step 7:** Review Technical Implementation
  - Evaluates technical decisions, code quality, architecture
  - Assesses documentation completeness
  - Reviews testing coverage and quality
  - **Required:** Yes

- **Step 8:** Assess Documentation Quality
  - Assesses documentation completeness and quality
  - Identifies documentation gaps
  - Evaluates documentation effectiveness
  - **Required:** Yes

### Phase 3: Reflection

**Purpose:** Identify lessons learned, patterns, anti-patterns

- **Step 9:** Identify Lessons Learned
  - Identifies what went well
  - Identifies what could be improved
  - Identifies patterns and anti-patterns
  - Captures knowledge for future reference
  - **Required:** Yes

### Phase 4: Documentation

**Purpose:** Create report, update docs/Kanban, create tasks

- **Step 10:** Create PIR Report
  - Generates comprehensive PIR report using template
  - Populates all sections with review findings
  - Saves report to KB structure
  - **Required:** Yes, **Mandatory:** Yes

- **Step 11:** Update Knowledge Base
  - Stores PIR report in KB structure
  - Creates/updates PIR index
  - Links PIR to Epic/Story document
  - Cross-references related PIRs
  - **Required:** Yes

- **Step 12:** Update Kanban Documentation
  - Updates Epic/Story document with PIR summary
  - Links Epic/Story document to PIR report (bidirectional)
  - Updates status if needed
  - Adds PIR completion marker
  - **Required:** Yes

- **Step 13:** Auto-Create Follow-Up Tasks
  - Generates Kanban tasks from PIR findings
  - Links tasks to PIR report
  - Assigns priority
  - Links to related work
  - **Required:** No, **Enabled:** Yes (configurable)

### Phase 5: Integration

**Purpose:** Link work items, archive materials, optional approval

- **Step 14:** Link PIR to Work Items
  - Establishes traceability links using project versioning
  - Links PIR to Epic/Story/Tasks
  - References project versions in PIR report
  - **Required:** Yes

- **Step 15:** Archive Review Materials
  - Archives supporting materials for future reference
  - Maintains archive structure
  - Preserves review context
  - **Required:** No

- **Step 16:** Optional Approval Gate
  - Optional approval workflow (if configured)
  - Supports manual approval process
  - Documents approval status
  - **Required:** No, **Enabled:** Configurable (default: false)

---

## ⚙️ Configuration

### Workflow Configuration

The PIR workflow supports the following configuration options:

```yaml
config:
  review_level: both  # epic | story | both
  auto_trigger: true
  epic_pir_always: true
  story_pir_significance_criteria:
    - has_multiple_tasks: true
    - has_cross_story_dependencies: true
    - introduces_new_patterns: true
    - has_significant_technical_debt: true
  reviewer_assignment: both  # auto | manual | both
  require_approval: false
  create_follow_ups: true
  knowledge_base_path: docs/Reviews/PIR
  template_path: docs/documentation/Templates
```

### Configuration Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `review_level` | `epic \| story \| both` | `both` | Review levels supported |
| `auto_trigger` | `boolean` | `true` | Auto-trigger from RW Step 15 |
| `epic_pir_always` | `boolean` | `true` | Always trigger PIR for completed Epics |
| `story_pir_significance_criteria` | `array` | `[...]` | Criteria for Story significance evaluation |
| `reviewer_assignment` | `auto \| manual \| both` | `both` | Reviewer assignment method |
| `require_approval` | `boolean` | `false` | Require approval before completion |
| `create_follow_ups` | `boolean` | `true` | Auto-create follow-up tasks |
| `knowledge_base_path` | `string` | `docs/Reviews/PIR` | Path to KB for PIR reports |
| `template_path` | `string` | `docs/documentation/Templates` | Path to PIR templates |

---

## 🔄 Workflow Steps

### Step 1: Identify Review Scope

**Handler:** `pir.identify_scope`  
**Type:** `scope_identification`  
**Required:** ✅ Yes  
**Mandatory:** ✅ Yes  
**Blocking:** ✅ Yes  
**Dependencies:** None

#### Purpose

Determines if review is Epic-level or Story-level, reads Epic/Story document, and verifies COMPLETE status.

#### Execution Flow

1. Read workflow configuration (`review_level`, `epic_pir_always`)
2. Check if triggered from RW (Epic/Story COMPLETE status)
3. Determine review level (Epic vs Story)
4. Read Epic/Story document to identify review target
5. Verify COMPLETE status

#### Configuration Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `review_level` | `epic \| story \| both` | ❌ No | `${config.review_level}` | Review level from config |
| `epic_pir_always` | `boolean` | ❌ No | `${config.epic_pir_always}` | Always trigger Epic PIR |

#### Step Outputs

```json
{
  "review_level": "epic",
  "epic": 2,
  "story": null,
  "status": "COMPLETE",
  "version": "v0.2.11.9+3"
}
```

#### Error Handling

- **Epic/Story not found:** **BLOCK** workflow, report error
- **Status not COMPLETE:** **BLOCK** workflow, report error
- **Review level unclear:** **BLOCK** workflow, request clarification

---

### Step 2: Evaluate Story Significance

**Handler:** `pir.evaluate_significance`  
**Type:** `significance_evaluation`  
**Required:** ❌ No (only for Story-level)  
**Enabled:** ✅ Yes (conditional on review level)  
**Dependencies:** Step 1

#### Purpose

Evaluates Story against significance criteria to determine if Story warrants PIR. Only executes for Story-level reviews.

#### Execution Flow

1. Read Story document to gather context
2. Evaluate against significance criteria
3. Count matches (High/Medium/Low)
4. Determine significance level
5. Make decision: Proceed/Skip/Optional

#### Significance Criteria

**High Significance (Mandatory PIR):**
- Introduces new architectural patterns
- Affects multiple systems/components
- Includes significant technical debt/refactoring
- High business impact/user visibility
- Complex integration/migration work
- Duration > threshold (e.g., >2 weeks)
- Multiple dependencies/blockers

**Medium Significance (Optional PIR):**
- Introduces new tools/frameworks
- Documentation/process changes
- Moderate complexity/scope
- Cross-team coordination

**Low Significance (No PIR):**
- Simple bug fixes/minor enhancements
- Routine maintenance
- Documentation-only changes
- Small, isolated features

#### Configuration Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `significance_criteria` | `array` | ❌ No | `${config.story_pir_significance_criteria}` | Significance criteria from config |
| `review_level` | `story` | ❌ No | `story` | Review level (must be story) |

#### Step Outputs

```json
{
  "significance": "High",
  "decision": "Proceed",
  "rationale": "Introduces new patterns, multiple tasks"
}
```

#### Error Handling

- **Significance unclear:** Use conservative approach (proceed with PIR)
- **Criteria evaluation fails:** Default to Medium Significance

---

### Step 3: Gather Review Materials

**Handler:** `pir.gather_materials`  
**Type:** `material_gathering`  
**Required:** ✅ Yes  
**Dependencies:** Step 1 (and Step 2 for Story-level)

#### Purpose

Collects all materials needed for comprehensive review, including Epic/Story documents, Task documents, changelogs, and related documents.

#### Execution Flow

1. Read Epic/Story document
2. Read all Story/Task documents within Epic/Story
3. Read changelog entries for version range
4. Collect related BR/FR documents
5. Gather code changes (if applicable)
6. Collect documentation created/updated

#### Configuration Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `include_documents` | `boolean` | ❌ No | `true` | Include document files |
| `include_code` | `boolean` | ❌ No | `true` | Include code changes |
| `include_changelogs` | `boolean` | ❌ No | `true` | Include changelog entries |

#### Step Outputs

```json
{
  "materials_gathered": {
    "epic_story_doc": true,
    "work_items": 5,
    "changelog_entries": 12,
    "related_documents": 3
  }
}
```

---

### Step 4: Prepare Review Checklist

**Handler:** `pir.prepare_checklist`  
**Type:** `checklist_preparation`  
**Required:** ✅ Yes  
**Dependencies:** Step 3

#### Purpose

Creates structured checklist based on PIR template and populates checklist with Epic/Story context.

#### Execution Flow

1. Load PIR template (Epic or Story)
2. Populate template with Epic/Story context
3. Initialize checklist sections
4. Mark all items as pending

#### Configuration Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `template_path` | `string` | ❌ No | `${config.template_path}` | Path to templates |

#### Step Outputs

```json
{
  "checklist_prepared": true,
  "template": "epic-pir-template.md",
  "sections_initialized": 8
}
```

---

### Step 5: Review Completed Work Items

**Handler:** `pir.review_work_items`  
**Type:** `work_review`  
**Required:** ✅ Yes  
**Dependencies:** Step 4

#### Purpose

Reviews all Stories (Epic-level) or Tasks (Story-level), assesses completion status and quality, and documents findings.

#### Execution Flow

1. For each Story/Task:
   - Read Story/Task document
   - Assess goal achievement
   - Evaluate quality
   - Identify notable achievements
   - Document issues encountered

#### Configuration Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `review_stories` | `boolean` | ❌ No | `true` | Review Stories (Epic-level) |
| `review_tasks` | `boolean` | ❌ No | `true` | Review Tasks (Story-level) |

#### Step Outputs

```json
{
  "work_items_reviewed": 5,
  "quality_assessments": {
    "excellent": 3,
    "good": 2,
    "satisfactory": 0,
    "needs_improvement": 0
  }
}
```

---

### Step 6: Analyze Goals vs Outcomes

**Handler:** `pir.analyze_goals`  
**Type:** `goals_analysis`  
**Required:** ✅ Yes  
**Dependencies:** Step 5

#### Purpose

Compares Epic/Story goals with actual outcomes, assesses goal achievement status, and documents evidence and metrics.

#### Execution Flow

1. Read Epic/Story goals from document
2. Review completed work items
3. Compare goals with actual outcomes
4. Assess achievement status (Achieved/Partially Achieved/Not Achieved)
5. Document evidence and metrics

#### Configuration Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `compare_goals` | `boolean` | ❌ No | `true` | Compare goals with outcomes |
| `assess_achievement` | `boolean` | ❌ No | `true` | Assess goal achievement |

#### Step Outputs

```json
{
  "goals_analyzed": 3,
  "achievement_status": {
    "achieved": 2,
    "partially_achieved": 1,
    "not_achieved": 0
  }
}
```

---

### Step 7: Review Technical Implementation

**Handler:** `pir.review_technical`  
**Type:** `technical_review`  
**Required:** ✅ Yes  
**Dependencies:** Step 5

#### Purpose

Evaluates technical decisions, code quality, architecture, documentation completeness, and testing coverage.

#### Execution Flow

1. Review architecture decisions (Epic-level) or implementation approach (Story-level)
2. Assess code quality (overall, review coverage, technical debt)
3. Evaluate documentation (completeness, quality, gaps)
4. Review testing (coverage, quality, types, results)

#### Configuration Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `assess_code_quality` | `boolean` | ❌ No | `true` | Assess code quality |
| `review_architecture` | `boolean` | ❌ No | `true` | Review architecture (Epic-level) |
| `check_documentation` | `boolean` | ❌ No | `true` | Check documentation |
| `review_testing` | `boolean` | ❌ No | `true` | Review testing |

#### Step Outputs

```json
{
  "technical_assessment": {
    "code_quality": "Excellent",
    "documentation": "Excellent",
    "testing": "Good"
  }
}
```

---

### Step 8: Assess Documentation Quality

**Handler:** `pir.assess_documentation`  
**Type:** `documentation_assessment`  
**Required:** ✅ Yes  
**Dependencies:** Step 7

#### Purpose

Assesses documentation completeness and quality, identifies documentation gaps, and evaluates documentation effectiveness.

#### Execution Flow

1. Review all documentation created/updated
2. Assess completeness (all required docs present)
3. Evaluate quality (clarity, accuracy, usefulness)
4. Identify gaps (missing or incomplete docs)

#### Configuration Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `check_completeness` | `boolean` | ❌ No | `true` | Check documentation completeness |
| `assess_quality` | `boolean` | ❌ No | `true` | Assess documentation quality |
| `identify_gaps` | `boolean` | ❌ No | `true` | Identify documentation gaps |

#### Step Outputs

```json
{
  "documentation_assessment": {
    "completeness": "Excellent",
    "quality": "Excellent",
    "gaps": []
  }
}
```

---

### Step 9: Identify Lessons Learned

**Handler:** `pir.identify_lessons`  
**Type:** `lessons_identification`  
**Required:** ✅ Yes  
**Dependencies:** Step 6, Step 7

#### Purpose

Identifies what went well, what could be improved, patterns, and anti-patterns, capturing knowledge for future reference.

#### Execution Flow

1. Review all work items and findings
2. Identify successful approaches and practices
3. Identify areas for improvement
4. Recognize recurring patterns
5. Identify problematic patterns (anti-patterns)

#### Configuration Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `capture_what_went_well` | `boolean` | ❌ No | `true` | Capture what went well |
| `capture_improvements` | `boolean` | ❌ No | `true` | Capture improvements |
| `identify_patterns` | `boolean` | ❌ No | `true` | Identify patterns |
| `identify_anti_patterns` | `boolean` | ❌ No | `true` | Identify anti-patterns |

#### Step Outputs

```json
{
  "lessons_learned": {
    "what_went_well": 4,
    "improvements": 2,
    "patterns": 3,
    "anti_patterns": 1
  }
}
```

---

### Step 10: Create PIR Report

**Handler:** `pir.create_report`  
**Type:** `report_creation`  
**Required:** ✅ Yes  
**Mandatory:** ✅ Yes  
**Dependencies:** Step 9

#### Purpose

Generates comprehensive PIR report using template, populates all sections with review findings, and saves report to KB structure.

#### Execution Flow

1. Load PIR template (Epic or Story)
2. Extract version information (version range for Epic, single version for Story)
3. Populate template with all review findings
4. Include version in header
5. Include version references in Stories/Tasks review sections
6. Save report to KB structure

#### Configuration Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `template_path` | `string` | ❌ No | `${config.template_path}` | Path to templates |
| `output_path` | `string` | ❌ No | `${config.knowledge_base_path}` | Path to KB for reports |
| `use_project_versioning` | `boolean` | ❌ No | `true` | Use project versioning schema |

#### Report Naming Convention

- **Epic-level:** `PIR-Epic-{N}-v{version}.md`
- **Story-level:** `PIR-Story-{N}-v{version}.md`

#### Step Outputs

```json
{
  "pir_report_created": true,
  "report_path": "docs/Reviews/pir/Epic-2/PIR-Epic-2-v0.2.11.9+3.md",
  "version": "v0.2.11.9+3"
}
```

#### Error Handling

- **Template missing:** **BLOCK** workflow, report error
- **Save fails:** **BLOCK** workflow, report error

---

### Step 11: Update Knowledge Base

**Handler:** `pir.update_kb`  
**Type:** `kb_update`  
**Required:** ✅ Yes  
**Dependencies:** Step 10

#### Purpose

Stores PIR report in KB structure, creates/updates PIR index, links PIR to Epic/Story document, and cross-references related PIRs.

#### Execution Flow

1. Ensure directory structure exists
2. Store PIR report in KB structure
3. Update PIR index (if exists)
4. Create cross-references
5. Link to Epic/Story document

#### Configuration Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `kb_path` | `string` | ❌ No | `${config.knowledge_base_path}` | Path to KB |
| `create_index` | `boolean` | ❌ No | `true` | Create/update PIR index |

#### Step Outputs

```json
{
  "kb_updated": true,
  "report_stored": true,
  "index_updated": true
}
```

---

### Step 12: Update Kanban Documentation

**Handler:** `pir.update_kanban`  
**Type:** `kanban_update`  
**Required:** ✅ Yes  
**Dependencies:** Step 10

#### Purpose

Updates Epic/Story document with PIR summary, links Epic/Story document to PIR report (bidirectional), updates status if needed, and adds PIR completion marker.

#### Execution Flow

1. Read PIR report to extract executive summary and key findings
2. Read Epic/Story document
3. Insert PIR summary section (after main content, before "Related Work")
4. Add link to PIR report
5. Update PIR report with link back to Epic/Story document

#### Configuration Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `update_epic_doc` | `boolean` | ❌ No | `true` | Update Epic document |
| `update_story_doc` | `boolean` | ❌ No | `true` | Update Story document |
| `add_pir_summary` | `boolean` | ❌ No | `true` | Add PIR summary section |
| `link_bidirectionally` | `boolean` | ❌ No | `true` | Establish bidirectional links |

#### PIR Summary Section Format

```markdown
## Post-Implementation Review

**PIR Status:** Complete  
**PIR Date:** {YYYY-MM-DD}  
**PIR Version:** {Version}  
**PIR Report:** [PIR-Epic-{N}-v{version}.md](../../Reviews/pir/Epic-{N}/PIR-Epic-{N}-v{version}.md)

### Summary
{Executive summary paragraph from PIR report}

### Key Findings
- {Key finding 1}
- {Key finding 2}
- {Key finding 3}
```

#### Step Outputs

```json
{
  "kanban_updated": true,
  "pir_summary_added": true,
  "bidirectional_links_established": true
}
```

#### Error Handling

- **Epic/Story document not found:** **BLOCK** workflow, report error
- **PIR report not found:** **BLOCK** workflow, report error
- **Insertion point unclear:** Use end of document, log warning

---

### Step 13: Auto-Create Follow-Up Tasks

**Handler:** `pir.create_follow_ups`  
**Type:** `task_creation`  
**Required:** ❌ No  
**Enabled:** ✅ Yes (configurable)  
**Dependencies:** Step 10

#### Purpose

Generates Kanban tasks from PIR findings, links tasks to PIR report, assigns priority, and links to related work.

#### Execution Flow

1. Extract follow-up actions from PIR report
2. For each action:
   - Create Kanban task
   - Assign priority (High/Medium/Low)
   - Link to PIR report
   - Link to related Epic/Story/Task

#### Configuration Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `create_kanban_tasks` | `boolean` | ❌ No | `true` | Create Kanban tasks |
| `link_to_pir` | `boolean` | ❌ No | `true` | Link tasks to PIR report |
| `prioritize_actions` | `boolean` | ❌ No | `true` | Assign priority to tasks |

#### Step Outputs

```json
{
  "follow_up_tasks_created": 3,
  "tasks": [
    {
      "description": "Action 1",
      "priority": "High",
      "linked_to_pir": true
    }
  ]
}
```

---

### Step 14: Link PIR to Work Items

**Handler:** `pir.link_work_items`  
**Type:** `linking`  
**Required:** ✅ Yes  
**Dependencies:** Step 12

#### Purpose

Establishes traceability links using project versioning, links PIR to Epic/Story/Tasks, and references project versions in PIR report.

#### Execution Flow

1. Extract version information (version range for Epic, single version for Story)
2. Add version-referenced links to PIR report
3. Add links to Epic/Story document in PIR report
4. Ensure bidirectional links complete

#### Configuration Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `use_project_versioning` | `boolean` | ❌ No | `true` | Use project versioning schema |
| `link_to_epic` | `boolean` | ❌ No | `true` | Link to Epic |
| `link_to_story` | `boolean` | ❌ No | `true` | Link to Story |
| `link_to_tasks` | `boolean` | ❌ No | `true` | Link to Tasks |

#### Step Outputs

```json
{
  "work_items_linked": true,
  "version_references_established": true,
  "traceability_complete": true
}
```

---

### Step 15: Archive Review Materials

**Handler:** `pir.archive_materials`  
**Type:** `archiving`  
**Required:** ❌ No  
**Dependencies:** Step 14

#### Purpose

Archives supporting materials for future reference, maintains archive structure, and preserves review context.

#### Execution Flow

1. Create archive structure
2. Copy gathered documents
3. Archive review notes
4. Archive supporting materials

#### Configuration Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `archive_path` | `string` | ❌ No | `${config.knowledge_base_path}/Archive` | Path to archive |

#### Step Outputs

```json
{
  "materials_archived": true,
  "archive_structure_created": true
}
```

---

### Step 16: Optional Approval Gate

**Handler:** `pir.approval_gate`  
**Type:** `approval`  
**Required:** ❌ No  
**Enabled:** ✅ Configurable (default: false)  
**Dependencies:** Step 14

#### Purpose

Optional approval workflow (if configured), supports manual approval process, and documents approval status.

#### Execution Flow

1. Check if approval required (config)
2. If approval required: Request approval from reviewer
3. Wait for approval
4. Document approval status

#### Configuration Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `require_approval` | `boolean` | ❌ No | `${config.require_approval}` | Require approval |
| `approval_workflow` | `string` | ❌ No | `manual` | Approval workflow type |

#### Step Outputs

```json
{
  "approval_status": "approved",
  "approval_date": "2025-12-16",
  "approver": "Reviewer Name"
}
```

---

## 🔄 Execution Flow

### Dependency Graph

```
Step 1 (Identify Review Scope)
  ├─→ Step 2 (Evaluate Story Significance) [Story-level only]
  │     └─→ Step 3 (Gather Review Materials)
  └─→ Step 3 (Gather Review Materials) [Epic-level]
        └─→ Step 4 (Prepare Review Checklist)
              └─→ Step 5 (Review Completed Work Items)
                    ├─→ Step 6 (Analyze Goals vs Outcomes)
                    └─→ Step 7 (Review Technical Implementation)
                          └─→ Step 8 (Assess Documentation Quality)
                    └─→ Step 9 (Identify Lessons Learned) ← depends on 6, 7
                          └─→ Step 10 (Create PIR Report)
                                ├─→ Step 11 (Update Knowledge Base)
                                ├─→ Step 12 (Update Kanban Documentation)
                                └─→ Step 13 (Auto-Create Follow-Up Tasks)
                          └─→ Step 12 (Update Kanban Documentation)
                                └─→ Step 14 (Link PIR to Work Items)
                                      ├─→ Step 15 (Archive Review Materials)
                                      └─→ Step 16 (Optional Approval Gate)
```

### Execution Phases

**Phase 1: Preparation** (Steps 1-4)
- Step 1 runs first (identifies scope)
- Step 2 runs conditionally (Story-level only)
- Step 3 runs after Step 1 (and Step 2 for Story-level)
- Step 4 runs after Step 3

**Phase 2: Analysis** (Steps 5-8)
- Step 5 runs after Step 4
- Steps 6, 7 run in parallel after Step 5
- Step 8 runs after Step 7

**Phase 3: Reflection** (Step 9)
- Step 9 runs after Steps 6, 7

**Phase 4: Documentation** (Steps 10-13)
- Step 10 runs after Step 9
- Steps 11, 12, 13 run in parallel after Step 10

**Phase 5: Integration** (Steps 14-16)
- Step 14 runs after Step 12
- Steps 15, 16 run in parallel after Step 14 (both optional)

---

## 🔗 Integration Points

### Release Workflow (RW) Integration

**Trigger:** RW Step 15 (Check for PIR Trigger)
- Deterministic check: Read Epic/Story status from Kanban document
- Epic-level: Always trigger PIR if COMPLETE
- Story-level: Evaluate significance, trigger if significant
- RW continues after PIR trigger (non-blocking)

**See:** [Release Workflow Reference](release-workflow-reference.md) - Step 15 documentation

### Kanban Integration

**Updates:**
- Epic/Story document updated with PIR summary (Step 12)
- Bidirectional links (Epic/Story ↔ PIR)
- Follow-up tasks created in Kanban (Step 13)
- Status tracking

**See:** [PIR-Kanban Integration Guide](pir-kanban-integration-guide.md)

### Versioning Integration

**Linking:**
- PIR report uses project versioning schema (Steps 10, 14)
- Links to Epic/Story version range
- References Task versions
- No separate PIR versioning needed

**See:** [PIR-Versioning Integration Guide](pir-versioning-integration-guide.md)

### Knowledge Base Integration

**Storage:**
- PIR reports stored in `docs/Reviews/pir/` (Step 11)
- Indexed for searchability
- Cross-referenced with related PIRs
- Linked to Epic/Story and Tasks

---

## 📚 Examples

### Example 1: Epic-Level PIR

**Scenario:** Epic 2 (Workflow Management Framework) marked COMPLETE

**Execution:**
1. Step 1: Identify Epic 2 as review scope
2. Step 2: Skip (Epic-level, no significance evaluation)
3. Step 3: Gather Epic 2 document, all Story documents, changelogs
4. Step 4: Prepare Epic PIR checklist
5. Step 5: Review all Stories in Epic 2
6. Step 6: Analyze Epic 2 goals vs outcomes
7. Step 7: Review technical implementation
8. Step 8: Assess documentation quality
9. Step 9: Identify lessons learned
10. Step 10: Create PIR report (`docs/Reviews/pir/Epic-2/PIR-Epic-2-v0.2.11.9+3.md`)
11. Step 11: Update KB with PIR report
12. Step 12: Update Epic 2 document with PIR summary
13. Step 13: Create follow-up tasks from findings
14. Step 14: Link PIR to Epic 2 and all Stories
15. Step 15: Archive review materials
16. Step 16: Skip approval (not required)

**Result:** ✅ Epic PIR completed successfully

### Example 2: Story-Level PIR (Significant)

**Scenario:** Story 5 (Post-Implementation Review Workflow) marked COMPLETE, evaluated as High Significance

**Execution:**
1. Step 1: Identify Story 5 as review scope
2. Step 2: Evaluate significance → High Significance → Proceed
3. Step 3: Gather Story 5 document, all Task documents, changelogs
4. Step 4: Prepare Story PIR checklist
5. Step 5: Review all Tasks in Story 5
6. Step 6: Analyze Story 5 goals vs outcomes
7. Step 7: Review technical implementation
8. Step 8: Assess documentation quality
9. Step 9: Identify lessons learned
10. Step 10: Create PIR report (`docs/Reviews/pir/Story-5/PIR-Story-5-v0.2.5.11+1.md`)
11. Step 11: Update KB with PIR report
12. Step 12: Update Story 5 document with PIR summary
13. Step 13: Create follow-up tasks from findings
14. Step 14: Link PIR to Story 5 and all Tasks
15. Step 15: Archive review materials
16. Step 16: Skip approval (not required)

**Result:** ✅ Story PIR completed successfully

### Example 3: Story-Level PIR (Not Significant)

**Scenario:** Story marked COMPLETE, evaluated as Low Significance

**Execution:**
1. Step 1: Identify Story as review scope
2. Step 2: Evaluate significance → Low Significance → Skip PIR
3. Workflow terminates
4. Document skip reason in Story document

**Result:** ✅ PIR skipped (not significant)

---

## 🚨 Troubleshooting

### Common Issues

**Issue 1: Epic/Story Not Found**
- **Solution:** Verify Epic/Story document path
- **Check:** Epic/Story number and document location

**Issue 2: Status Not COMPLETE**
- **Solution:** PIR should only run for COMPLETE items
- **Check:** Verify Epic/Story status before triggering

**Issue 3: Template Missing**
- **Solution:** Ensure templates exist in `docs/documentation/templates/`
- **Check:** Template file names and locations

**Issue 4: Significance Evaluation Unclear**
- **Solution:** Use conservative approach (proceed with PIR)
- **Check:** Significance criteria configuration

**Issue 5: KB Directory Missing**
- **Solution:** Create directory structure if needed
- **Check:** `docs/Reviews/pir/` structure

**Issue 6: Version Extraction Fails**
- **Solution:** Verify Epic/Story document has version in header
- **Check:** Version format matches RC.EPIC.STORY.TASK+BUILD schema

---

## 📖 Related Documentation

- [PIR Workflow Planning](../../Analysis/PIR-workflow-planning.md) - Complete planning document
- [Epic-Level PIR Design](../../Analysis/T02-epic-level-pir-workflow-design.md) - Epic-level design
- [Story-Level PIR Design](../../Analysis/T03-story-level-pir-workflow-design.md) - Story-level design
- [PIR Workflow YAML](../../workflows/pir-workflow.yaml) - Workflow definition
- [PIR Workflow Agent Execution Guide](pir-workflow-agent-execution.md) - Step-by-step execution guide
- [PIR-Kanban Integration Guide](pir-kanban-integration-guide.md) - Kanban integration patterns
- [PIR-Versioning Integration Guide](pir-versioning-integration-guide.md) - Versioning integration patterns
- [PIR Templates](../../../docs/documentation/templates/) - Epic and Story PIR templates
- [Release Workflow Reference](release-workflow-reference.md) - RW reference (for integration context)

---

_This reference guide is part of the Workflow Management Framework. See `packages/frameworks/workflow mgt/` for complete framework documentation._
