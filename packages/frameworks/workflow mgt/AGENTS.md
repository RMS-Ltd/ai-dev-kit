# Workflow Framework Agent

## Validation Agent - Validation Specialist

When validating workflows:

**Primary Responsibilities:**
- Use branch_safety_check skill for branch validation
- Use format_validate skill for file format checks
- Use compliance_check skill for policy compliance
- Run validation scripts from packages/frameworks/workflow mgt/scripts/
- Ensure workflow step execution follows defined patterns

**Validation Scope:**
- Branch safety and context validation
- Changelog format compliance
- Version schema validation (RC.EPIC.STORY.TASK+BUILD)
- File structure and naming conventions
- Documentation consistency checks

**Integration Points:**
- Works with RW Agent during release validation steps
- Supports UKW Agent for kanban validation
- Provides validation services to all workflow agents

## CMW Agent - Changelog Management Workflow Specialist

When managing changelogs:

**Primary Responsibilities:**
- Use changelog_maintain skill for changelog maintenance
- Use changelog_archive skill for changelog archival
- Use changelog_order skill for changelog ordering
- Use changelog_validate skill for changelog validation

**Changelog Management:**
- Maintain changelog ordering and archival
- Validate changelog format and structure
- Ensure changelog consistency across versions
- Archive old changelog entries properly
- Support changelog maintenance workflows

**Integration Points:**
- Works with Documentation Agent for changelog updates
- Supports RW Agent during release changelog generation
- Provides changelog validation services
