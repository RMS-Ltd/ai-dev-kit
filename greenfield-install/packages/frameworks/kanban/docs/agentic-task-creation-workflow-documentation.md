---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-11T00:15:00Z
expires_at: null
housekeeping_policy: keep
---

# Agentic Task Creation Workflow Documentation

**Epic:** Epic 4 (Kanban Framework)  
**Story:** Story 10 (Agentic Kanban Task Creation from FR/BR)  
**Version:** v0.4.10.7+0

---

## Overview

The Agentic Task Creation Workflow automatically creates Kanban tasks from Feature Requests (FRs) and Bug Reports (BRs) using intelligent analysis, semantic matching, and template-based task creation. The workflow is agentic, providing explanations and reasoning for all decisions made.

---

## Architecture

### Components

1. **FR/BR Content Analyzer** (`fr_br_analyzer.py`)
   - Extracts structured content from FR/BR documents
   - Analyzes requirements, acceptance criteria, dependencies
   - Identifies key concepts and complexity indicators

2. **Epic/Story Mapper** (`epic_story_mapper.py`)
   - Maps FR/BR to canonical epics using semantic matching
   - Finds existing story matches or recommends new stories
   - Supports multi-epic FR/BR mapping

3. **Task Creator** (`task_creator.py`)
   - Creates tasks from templates with contextualization
   - Handles dependencies and acceptance criteria
   - Generates proper task file structure

4. **Agentic Task Workflow** (`agentic_task_workflow.py`)
   - Main workflow orchestrator
   - Integrates all components
   - Provides explanations and reasoning

---

## Usage

### Basic Usage

```python
from agentic_task_workflow import AgenticTaskWorkflow
from pathlib import Path

# Initialize workflow
kanban_path = Path("docs/project-management/kanban")
framework_path = Path("packages/frameworks/kanban")

workflow = AgenticTaskWorkflow(kanban_path, framework_path)

# Process an FR/BR document
fr_br_path = Path("docs/project-management/kanban/fr-br/FR-012-example.md")
result = workflow.process_fr_br(fr_br_path)

# Check results
if result.success:
    print(f"✅ Created {len(result.created_tasks)} task(s)")
    print(f"Explanation: {result.explanation}")
    print(f"Reasoning: {result.reasoning}")
    print(f"Confidence: {result.confidence_scores}")
else:
    print(f"❌ Failed: {result.errors}")
```

### Integration with FR/BR Intake

```python
# Process FR/BR from intake workflow
intake_context = {
    "existing_epics": [...],
    "existing_stories": [...]
}

result = workflow.process_fr_br_from_intake(
    fr_br_path,
    intake_context=intake_context
)
```

### Manual Control

```python
# Process without auto-creating tasks (planning mode)
result = workflow.process_fr_br(
    fr_br_path,
    auto_create=False
)

# Review the plan
print(f"Would create {result.task_structure.num_tasks} task(s)")
print(f"Epic mapping: {result.epic_story_mapping.primary_epic}")
print(f"Reasoning: {result.reasoning}")

# Then create tasks if satisfied
if result.success and input("Create tasks? (y/n): ") == "y":
    result = workflow.process_fr_br(fr_br_path, auto_create=True)
```

---

## Workflow Steps

### Step 1: FR/BR Content Analysis

The workflow analyzes the FR/BR document to extract:
- Title and summary
- Description
- Requirements (functional and non-functional)
- Acceptance criteria
- Affected areas
- Dependencies
- Priority/Severity
- Use cases
- Technical requirements
- Key concepts
- Complexity indicators

**Output:** `FRBRAnalysis` object with structured content

---

### Step 2: Epic/Story Mapping

The workflow maps the FR/BR to appropriate canonical epics and stories:

1. **Canonical Epic Matching**
   - Uses semantic matching to find best canonical epic match
   - Calculates similarity scores
   - Classifies match type (exact, semantic, partial, no match)

2. **Existing Story Search**
   - Searches existing stories in matched epic
   - Uses semantic matching to find story matches
   - Determines if existing story is appropriate

3. **Story Decision**
   - If story match found: Uses existing story
   - If no match: Recommends new story creation

4. **Multi-Epic Handling**
   - Identifies secondary epic matches if FR/BR spans multiple epics
   - Creates tasks across multiple epics/stories as needed

**Output:** `EpicStoryMapping` with mapping details and explanations

---

### Step 3: Task Structure Determination

The workflow determines how many tasks are needed and their structure:

1. **Requirement Analysis**
   - Breaks down requirements into work items
   - Identifies distinct tasks needed

2. **Task Type Classification**
   - Classifies each task (implementation, testing, documentation, etc.)
   - Determines task characteristics

3. **Dependency Analysis**
   - Identifies task dependencies
   - Determines task order/sequence

4. **Complexity Estimation**
   - Estimates task complexity
   - Identifies high-risk tasks

**Output:** `TaskStructure` with task breakdown

---

### Step 4: Task Creation

The workflow creates tasks from templates:

1. **Template Selection**
   - Selects appropriate task templates based on task type
   - Chooses templates from canonical set

2. **Contextualization**
   - Replaces placeholders with FR/BR content
   - Adds project context
   - Sets task metadata

3. **Task File Creation**
   - Creates task Markdown files
   - Sets proper file structure
   - Assigns version numbers

**Output:** List of `CreatedTask` objects

---

### Step 5: Integration

The workflow integrates created tasks into Kanban structure:

1. **Story Update**
   - Adds tasks to Story document
   - Updates Story checklist
   - Updates Story status if needed

2. **FR/BR Linking**
   - Links FR/BR to created tasks
   - Updates FR/BR document with task references

3. **Kanban Board Update**
   - Adds tasks to Kanban board
   - Updates board status

**Output:** Updated Kanban structure

---

## Agentic Intelligence

### Decision Explanations

The workflow provides explanations for all decisions:

- **Analysis Explanation:** Why certain content was extracted and how it was analyzed
- **Mapping Explanation:** Why a specific epic/story was chosen, with confidence scores
- **Task Structure Explanation:** Why certain tasks were created and how they were structured

### Confidence Scores

The workflow provides confidence scores for:
- **Analysis Confidence:** Based on content quality and completeness
- **Mapping Confidence:** Based on semantic similarity scores
- **Task Structure Confidence:** Based on requirement analysis and complexity

### Reasoning

The workflow provides step-by-step reasoning:
- **Analysis Reasoning:** Key concepts identified, complexity indicators found
- **Mapping Reasoning:** Epic match rationale, story match or new story recommendation
- **Task Structure Reasoning:** Task breakdown rationale, dependency analysis

---

## Examples

### Example 1: Simple FR

**Input:** FR-012: Add user authentication

**Workflow:**
1. Analyzes FR content (1 requirement, simple scope)
2. Maps to Epic 9 (User Management) with 85% confidence
3. Determines 1 implementation task needed
4. Creates task E9:S01:T01

**Output:**
- 1 task created
- High confidence (85%)
- Clear mapping explanation

### Example 2: Complex FR

**Input:** FR-013: Implement payment processing with multiple payment methods

**Workflow:**
1. Analyzes FR content (5 requirements, complex scope)
2. Maps to Epic 11 (API & Backend) with 75% confidence
3. Determines 3 tasks needed: implementation, testing, documentation
4. Creates tasks E11:S02:T01, T02, T03

**Output:**
- 3 tasks created with dependencies
- Moderate confidence (75%)
- Detailed task structure explanation

### Example 3: Bug Report

**Input:** BR-007: Critical security vulnerability in authentication

**Workflow:**
1. Analyzes BR content (high severity, security-related)
2. Maps to Epic 15 (Security) with 90% confidence
3. Determines 2 tasks needed: fix + testing
4. Creates tasks E15:S01:T01, T02

**Output:**
- 2 tasks created (fix + testing)
- High confidence (90%)
- Security-focused mapping explanation

---

## Error Handling

### Common Errors

1. **No Epic Match Found**
   - **Error:** `No epic match found - cannot create tasks`
   - **Action:** Review FR/BR content, may need manual epic creation
   - **Explanation:** Provided in workflow result

2. **Template Not Found**
   - **Error:** Template file missing
   - **Action:** Check template path, use fallback template
   - **Explanation:** Warning in workflow result

3. **Task Creation Failure**
   - **Error:** File system or permission issues
   - **Action:** Check permissions, verify paths
   - **Explanation:** Error details in workflow result

### Error Recovery

The workflow provides:
- Detailed error messages
- Warnings for non-critical issues
- Partial results when possible
- Suggestions for resolution

---

## Integration Points

### With FR/BR Intake (E4:S02)

The workflow integrates with the FR/BR intake workflow:
- Processes FR/BR documents created by intake
- Uses intake context (existing epics/stories)
- Updates FR/BR documents with task references

### With Semantic Matching (E4:S08)

The workflow uses semantic matching for:
- Epic matching
- Story matching
- Content analysis

### With Agentic Intelligence (E4:S09)

The workflow leverages agentic intelligence for:
- Decision-making
- Explanation generation
- Context understanding

### With Templates (E4:S06)

The workflow uses canonical templates for:
- Task creation
- Contextualization
- Structure consistency

---

## Testing

### Unit Tests

Test individual components:
- FR/BR analyzer
- Epic/story mapper
- Task creator
- Workflow orchestrator

### Integration Tests

Test full workflow:
- End-to-end FR/BR processing
- Multi-epic FR/BR handling
- Complex requirement breakdown
- Error scenarios

### Validation Tests

Validate outputs:
- Task structure correctness
- Version number assignment
- Link integrity
- Document consistency

---

## Configuration

### Workflow Configuration

Customize workflow behavior:
- Auto-create tasks (default: True)
- Confidence thresholds
- Task type preferences
- Template selection

### Agentic Intelligence Configuration

Configure agentic intelligence:
- LLM provider (if applicable)
- LLM configuration
- Explanation verbosity
- Confidence calculation

---

## Troubleshooting

### Tasks Not Created

1. Check FR/BR document format
2. Verify epic/story mapping succeeded
3. Check file permissions
4. Review error messages

### Incorrect Epic Mapping

1. Review FR/BR content quality
2. Check semantic matching scores
3. Verify canonical epic definitions
4. Consider manual override

### Task Structure Issues

1. Review requirement analysis
2. Check task type classification
3. Verify dependency analysis
4. Adjust task breakdown if needed

---

## References

- **FR-012:** Agentic Kanban Task Creation from FR/BR
- **Epic 4 Story 2:** FR/BR Intake to Tasks
- **Epic 4 Story 6:** Comprehensive Canonical E/S/T Template System
- **Epic 4 Story 8:** Intelligent Epic Matching and Canonical Structure Adoption
- **Epic 4 Story 9:** Bug Fixes and Agentic Intelligence Implementation

---

## Future Enhancements

1. **LLM Integration**
   - Full LLM-based decision-making
   - Advanced context understanding
   - Natural language explanations

2. **Learning from Feedback**
   - Improve mappings based on user feedback
   - Learn from corrections
   - Adapt to project patterns

3. **Bulk Processing**
   - Process multiple FRs/BRs efficiently
   - Batch task creation
   - Optimize workflow execution

4. **Custom Templates**
   - Support for project-specific templates
   - Template customization
   - Template versioning

