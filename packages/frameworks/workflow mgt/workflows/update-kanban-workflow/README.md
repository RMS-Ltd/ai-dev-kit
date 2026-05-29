# Update Kanban Workflow

## Overview

The Update Kanban Workflow (UKW) provides systematic kanban board documentation updates with status inference, MoSCOW prioritization, and narrative synthesis. It ensures kanban boards reflect current project state and progress.

## 🎯 Purpose

To maintain accurate, up-to-date kanban board documentation through intelligent status inference, task prioritization, and comprehensive progress tracking.

## 🚨 Prerequisites

### Framework Requirements
- AI Dev Kit workflow management framework installed
- Kanban board structure established
- Task and story documentation available
- Configuration file `.ai-dev-kit.yaml` with UKW settings

### Setup Requirements
- Kanban board file: `docs/project-management/kanban/kboard.md`
- Task documentation in epic/story directories
- Completed tasks tracking: `kanban-completed.md`
- FR/BR/UXR tracking: `fbu-completed.md`

## ⚡ Quick Start

### Basic Usage
```bash
# Execute update kanban workflow
UKW

# Example with specific scope
UKW --scope epic-5

# Example with dry run
UKW --dry-run
```

### Expected Outcome
- Kanban board updated with current task statuses
- MoSCOW priorities updated based on project goals
- Task progress inferred from commits and documentation
- Completed tasks archived and summarized

## ⚙️ Configuration

### YAML Configuration
```yaml
# .ai-dev-kit.yaml
update_kanban:
  enabled: true
  kanban_board: docs/project-management/kanban/kboard.md
  completed_tasks: docs/project-management/kanban/kanban-completed.md
  fr_br_uxr_completed: docs/project-management/kanban/fbu-completed.md
  auto_prioritize: true
  status_inference: true
  narrative_synthesis: true
```

### Configuration Options
| Option | Type | Default | Description |
|--------|------|---------|-------------|
| kanban_board | string | docs/project-management/kanban/kboard.md | Main kanban board file |
| completed_tasks | string | docs/project-management/kanban/kanban-completed.md | Completed tasks file |
| fr_br_uxr_completed | string | docs/project-management/kanban/fbu-completed.md | FR/BR/UXR completed file |
| auto_prioritize | boolean | true | Automatic MoSCOW prioritization |
| status_inference | boolean | true | Intelligent status inference |
| narrative_synthesis | boolean | true | Generate progress narratives |

### Environment Variables
```bash
export UKW_AUTO_PRIORITIZE="true"
export UKW_STATUS_INFERENCE="true"
export UKW_NARRATIVE_SYNTHESIS="true"
export UKW_DRY_RUN="false"
export UKW_SCOPE="all"
```

## 📋 Usage Examples

### Example 1: Full Kanban Update
```bash
# Execute complete UKW workflow
UKW

# Expected output:
# ✓ Task status analysis and inference
# ✓ MoSCOW prioritization update
# ✓ Progress narrative synthesis
# ✓ Kanban board structure update
# ✓ Completed tasks archival
# ✓ FR/BR/UXR status updates
# ✓ Board consistency validation
```

### Example 2: Epic-Specific Update
```bash
# Update specific epic only
UKW --scope epic-5 --verbose

# Configuration:
update_kanban:
  scope:
    - epic-5
    - epic-4
  depth: stories
  include_fr_br_uxr: true

# Expected output:
# ✓ Epic 5 task status analysis
# ✓ Story 5.1 progress inference
# ✓ Task completion detection
# ✓ MoSCOW priority updates for Epic 5
# ✓ Epic 5 narrative synthesis
# ✓ Kanban board Epic 5 section updated
```

### Example 3: Status Inference Focus
```bash
# Execute with enhanced status inference
UKW --status-inference --commit-analysis --evidence-weighting

# Configuration for deep analysis:
update_kanban:
  status_inference:
    enabled: true
    commit_analysis: true
    file_change_analysis: true
    fr_br_uxr_completion: true
    evidence_threshold: 0.7
    confidence_level: high

# Expected output:
# ✓ Git commit analysis for task evidence
# ✓ File change pattern detection
# ✓ FR/BR/UXR completion status tracking
# ✓ Evidence-based status inference
# ✓ Confidence scoring for each task
# ✓ Status updates with evidence citations
```

## 🔧 Advanced Usage

### MoSCOW Prioritization
```yaml
update_kanban:
  prioritization:
    enabled: true
    methodology: moscow
    criteria:
      project_alignment: 0.4
      dependency_weight: 0.3
      effort_estimate: 0.2
      stakeholder_value: 0.1
    auto_classify: true
    manual_override: true
```

### Status Inference Rules
```yaml
update_kanban:
  status_inference:
    rules:
      complete:
        - task_marked_complete
        - fr_br_uxr_completed
        - commits_with_task_id
        - documentation_updates
      in_progress:
        - recent_commits
        - file_changes
        - branch_activity
      blocked:
        - dependency_blocks
        - failed_validations
        - missing_prerequisites
```

### Integration with Other Workflows
- **Release Workflow (RW)**: Kanban updates for release tasks
- **Implementation Cycle Workflow (ICW)**: Task progress tracking during implementation
- **Intake Workflow**: New task creation and board updates

## 🐛 Troubleshooting

### Common Issues

#### Issue: Status Inference Conflicts
**Symptoms:** Conflicting status evidence for tasks
**Causes:** Multiple evidence sources with different conclusions
**Solutions:**
```bash
# Check inference conflicts
UKW --analyze-conflicts --verbose

# Adjust evidence weighting
UKW --evidence-weighting --confidence-threshold 0.8

# Manual status override
UKW --manual-status E5:S01:T56 COMPLETE
```

#### Issue: MoSCOW Prioritization Errors
**Symptoms:** Tasks misclassified or priorities incorrect
**Causes:** Insufficient project context or outdated criteria
**Solutions:**
```bash
# Review prioritization logic
UKW --analyze-priorities --verbose

# Update prioritization criteria
UKW --update-criteria --project-context

# Manual priority adjustment
UKW --manual-priority E5:S01:T56 MUST
```

#### Issue: Board Structure Validation Failures
**Symptoms:** Kanban board structure inconsistencies
**Causes:** Manual edits or template drift
**Solutions:**
```bash
# Validate board structure
UKW --validate-structure --fix-issues

# Reset to template
UKW --reset-structure --preserve-content

# Check specific sections
UKW --validate-sections epic-5 story-5.1
```

### Debug Mode
```bash
# Enable debug output
UKW --debug

# Verbose status analysis
UKW --verbose --status-inference

# Dry run mode
UKW --dry-run --full-analysis
```

### Log Analysis
UKW logs include:
- Status inference decisions and evidence
- MoSCOW prioritization reasoning
- Board structure validation results
- Task completion detection
- Narrative synthesis details

## ❓ FAQ

### Q: How does status inference work?
**A:** UKW uses multiple evidence sources:
```yaml
update_kanban:
  status_inference:
    evidence_sources:
      - git_commits: 0.3
      - file_changes: 0.2
      - fr_br_uxr_status: 0.3
      - task_documentation: 0.2
```

### Q: Can I customize MoSCOW criteria?
**A:** Yes, configure custom prioritization:
```yaml
update_kanban:
  prioritization:
    custom_criteria:
      business_value: 0.4
      technical_risk: 0.2
      user_impact: 0.3
      implementation_cost: 0.1
```

### Q: How do I handle conflicting evidence?
**A:** Use confidence thresholds and manual overrides:
```bash
# Set high confidence threshold
UKW --confidence-threshold 0.8

# Review conflicts manually
UKW --review-conflicts --interactive

# Provide manual evidence
UKW --manual-evidence E5:S01:T56 COMPLETE "Task completed per FR-056"
```

## 🔗 Integration

### Workflow Dependencies
- **Required:** None (standalone workflow)
- **Optional:** Release Workflow (release task updates)
- **Enhanced by:** Implementation Cycle Workflow (progress tracking)

### Data Flow
```
Task Analysis → Status Inference → Prioritization → Board Update → Validation → Documentation
```

### API Integration
```python
# Programmatic UKW execution
from ai_dev_kit.workflows import UpdateKanbanWorkflow

workflow = UpdateKanbanWorkflow()
result = workflow.execute(
    scope="epic-5",
    dry_run=False,
    status_inference=True,
    auto_prioritize=True
)
```

## 📚 Reference

### CLI Commands
```bash
# Main command
UKW [options]

# Subcommands
UKW --scope <epic|story|all>
UKW --status-inference
UKW --auto-prioritize
UKW --dry-run

# Help
UKW --help
```

### Configuration Reference
#### Core Configuration
```yaml
update_kanban:
  enabled: true
  kanban_board: docs/project-management/kanban/kboard.md
  completed_tasks: docs/project-management/kanban/kanban-completed.md
  fr_br_uxr_completed: docs/project-management/kanban/fbu-completed.md
```

#### Advanced Configuration
```yaml
update_kanban:
  auto_prioritize: true
  status_inference: true
  narrative_synthesis: true
  prioritization:
    methodology: moscow
    auto_classify: true
  status_inference:
    commit_analysis: true
    file_change_analysis: true
    evidence_threshold: 0.7
```

### Step-by-Step Execution
1. **Step 1**: Task Discovery
   - Scan epic and story directories
   - Identify all tasks and documentation
   - Load current kanban board state

2. **Step 2**: Evidence Collection
   - Analyze git commits for task evidence
   - Check file changes and modifications
   - Review FR/BR/UXR completion status
   - Examine task documentation updates

3. **Step 3**: Status Inference
   - Apply evidence-based status inference
   - Calculate confidence scores
   - Resolve conflicts and ambiguities
   - Generate status recommendations

4. **Step 4**: MoSCOW Prioritization
   - Analyze project goals and dependencies
   - Apply prioritization criteria
   - Classify tasks into MoSCOW categories
   - Generate priority rankings

5. **Step 5**: Narrative Synthesis
   - Synthesize progress narratives
   - Generate completion summaries
   - Create progress indicators
   - Update project status descriptions

6. **Step 6**: Board Update
   - Update kanban board structure
   - Apply status and priority changes
   - Update task metadata
   - Maintain board consistency

7. **Step 7**: Validation
   - Validate board structure and format
   - Check for consistency and completeness
   - Verify link integrity
   - Ensure template compliance

8. **Step 8**: Documentation Updates
   - Update completed tasks archive
   - Update FR/BR/UXR completed tracking
   - Generate update summaries
   - Create change logs

### Output Formats
- **Kanban Board**: Updated markdown board structure
- **Status Reports**: Task status analysis and evidence
- **Priority Reports**: MoSCOW classification and rankings
- **Narrative Summaries**: Progress synthesis and completion reports

## 🎯 Best Practices

### Do's
- ✅ Run UKW regularly to maintain board accuracy
- ✅ Review status inference decisions for accuracy
- ✅ Customize MoSCOW criteria for project context
- ✅ Validate board updates before committing
- ✅ Maintain consistent documentation structure

### Don'ts
- ❌ Ignore status inference conflicts
- ❌ Override automated updates without review
- ❌ Skip board validation steps
- ❌ Let kanban board become outdated
- ❌ Use generic prioritization without project context

## 🔄 Version Compatibility

| Workflow Version | Framework Version | Notes |
|------------------|-------------------|-------|
| 1.0.0 | v0.4.14.3+ | Initial release with basic updates |
| 1.1.0 | v0.5.0.0+ | Enhanced status inference and MoSCOW |
| 1.2.0 | v0.5.1.0+ | Advanced narrative synthesis and validation |

## 📞 Support

### Getting Help
- **Documentation**: [UKW Guide](../../KB/Documentation/Developer_Docs/vwmp/update-kanban-workflow-agent-execution.md)
- **Community**: [AI Dev Kit Discussions](https://github.com/earlution/ai-dev-kit/discussions)

### Contributing
- **UKW Enhancements**: Submit new inference rules or prioritization methods
- **Bug Reports**: File issues with kanban samples and configuration
- **Feature Requests**: Propose new kanban management capabilities

---

## 📊 Workflow Metadata

- **Type**: update-kanban
- **Abbreviation**: UKW
- **Triggers**: ["UKW"]
- **Steps**: 8
- **Dependencies**: None
- **Configuration**: `.ai-dev-kit.yaml` update_kanban section

**Last Updated**: 2026-03-12  
**Framework Version**: v0.4.14.3+2  
**Maintainer**: AI Dev Kit Team
