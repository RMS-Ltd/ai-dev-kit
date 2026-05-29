# Intake Workflow

## Overview

The Intake Workflow provides systematic FR/BR/UXR automation and processing with comprehensive validation, categorization, and kanban integration. It ensures consistent intake processes for all project requests.

## 🎯 Purpose

To deliver efficient, standardized intake processing for Feature Requests (FR), Bug Reports (BR), and User Experience Research (UXR) with automated validation and kanban board integration.

## 🚨 Prerequisites

### Framework Requirements
- AI Dev Kit workflow management framework installed
- Intake templates and forms established
- Kanban board structure configured
- Configuration file `.ai-dev-kit.yaml` with intake settings

### Setup Requirements
- Intake directory: `docs/project-management/kanban/fr-br/`
- Completed tracking: `docs/project-management/kanban/fbu-completed.md`
- Kanban board integration: `docs/project-management/kanban/kboard.md`
- Validation rules and templates configured

## ⚡ Quick Start

### Basic Usage
```bash
# Execute intake workflow
INTAKE

# Example with specific request type
INTAKE --type FR --source email

# Example with validation only
INTAKE --validate-only --dry-run
```

### Expected Outcome
- Incoming requests processed and validated
- Requests categorized and prioritized
- Kanban board updated with new items
- Intake documentation organized and tracked

## ⚙️ Configuration

### YAML Configuration
```yaml
# .ai-dev-kit.yaml
intake:
  enabled: true
  intake_directory: docs/project-management/kanban/fr-br/
  completed_tracking: docs/project-management/kanban/fbu-completed.md
  kanban_integration: true
  auto_categorization: true
  validation_strict: true
  notification_enabled: true
```

### Configuration Options
| Option | Type | Default | Description |
|--------|------|---------|-------------|
| intake_directory | string | docs/project-management/kanban/fr-br/ | Intake requests directory |
| completed_tracking | string | docs/project-management/kanban/fbu-completed.md | Completed requests tracking |
| kanban_integration | boolean | true | Update kanban board automatically |
| auto_categorization | boolean | true | Automatic request categorization |
| validation_strict | boolean | true | Strict validation mode |
| notification_enabled | boolean | true | Enable notifications |

### Environment Variables
```bash
export INTAKE_AUTO_CATEGORIZATION="true"
export INTAKE_VALIDATION_STRICT="true"
export INTAKE_KANBAN_INTEGRATION="true"
export INTAKE_NOTIFICATION_ENABLED="true"
export INTAKE_DRY_RUN="false"
```

## 📋 Usage Examples

### Example 1: Standard Intake Processing
```bash
# Execute complete intake workflow
INTAKE

# Expected output:
# ✓ New intake requests discovered and processed
# ✓ Request validation and format compliance checked
# ✓ Automatic categorization and prioritization applied
# ✓ Kanban board updated with new requests
# ✓ Stakeholder notifications sent
# ✓ Intake tracking and documentation updated
```

### Example 2: Feature Request Intake
```bash
# Process feature requests specifically
INTAKE --type FR --prioritize --validate-strict

# Configuration:
intake:
  type: FR
  validation:
    strict: true
    required_fields:
      - title
      - description
      - acceptance_criteria
      - priority
      - stakeholder
  categorization:
    methodology: moscow
    auto_assign: true
    epic_mapping: true

# Expected output:
# ✓ Feature requests identified and extracted
# ✓ Required fields validation (title, description, criteria, priority, stakeholder)
# ✓ MoSCOW categorization applied
# ✓ Epic assignment and mapping completed
# ✓ Kanban board updated with FR items
# ✓ Stakeholder notifications for new FRs sent
```

### Example 3: Bug Report Intake with Triage
```bash
# Process bug reports with triage
INTAKE --type BR --triage --severity-assessment

# Configuration for bug triage:
intake:
  type: BR
  triage:
    enabled: true
    severity_assessment: true
    impact_analysis: true
    reproduction_steps: true
  categorization:
    bug_type: true
    component_assignment: true
    priority_matrix:
      severity: critical
      impact: high
      frequency: often
      priority: MUST

# Expected output:
# ✓ Bug reports identified and extracted
# ✓ Severity assessment completed (Critical/High/Medium/Low)
# ✓ Impact analysis performed (User/System/Data/None)
# ✓ Reproduction steps validated and enhanced
# ✓ Bug type categorization applied (Functional/Performance/Security/UI)
# ✓ Component assignment and priority matrix applied
# ✓ Kanban board updated with prioritized bug reports
```

## 🔧 Advanced Usage

### Custom Validation Rules
```yaml
intake:
  validation:
    custom_rules:
      FR:
        min_description_length: 50
        required_acceptance_criteria: 3
        stakeholder_approval: true
        business_value_required: true
      BR:
        reproduction_steps_required: true
        environment_details: true
        error_logs_required: false
        severity_level_required: true
      UXR:
        research_objective_required: true
        participant_criteria: true
        methodology_required: true
        timeline_required: true
```

### Advanced Categorization
```yaml
intake:
  categorization:
    methodology: enhanced_moscow
    factors:
      business_value: 0.4
      user_impact: 0.3
      technical_complexity: 0.2
      strategic_alignment: 0.1
    auto_epic_mapping:
      enabled: true
      mapping_rules:
        - pattern: "authentication*"
          epic: "E3:Security"
        - pattern: "performance*"
          epic: "E2:Performance"
        - pattern: "ui*"
          epic: "E1:User Experience"
```

### Integration with Other Workflows
- **Update Kanban Workflow (UKW)**: Board updates and status management
- **Implementation Cycle Workflow (ICW)**: Task creation and assignment
- **Release Workflow (RW)**: Release-related intake processing

## 🐛 Troubleshooting

### Common Issues

#### Issue: Validation Failures
**Symptoms:** Intake requests fail validation checks
**Causes:** Missing required fields or format violations
**Solutions:**
```bash
# Check validation errors
INTAKE --validate-only --verbose

# Auto-fix common issues
INTAKE --auto-fix --validation-lenient

# Manual validation override
INTAKE --manual-validation --request FR-057
```

#### Issue: Categorization Conflicts
**Symptoms:** Requests misclassified or categorization conflicts
**Causes:** Insufficient context or conflicting categorization rules
**Solutions:**
```bash
# Review categorization logic
INTAKE --analyze-categorization --verbose

# Adjust categorization weights
INTAKE --recategorize --manual-override

# Check epic mapping rules
INTAKE --validate-mapping --debug
```

#### Issue: Kanban Integration Failures
**Symptoms:** Kanban board not updated with intake items
**Causes:** Board structure issues or permission problems
**Solutions:**
```bash
# Check kanban board access
INTAKE --check-kanban --test-integration

# Validate board structure
INTAKE --validate-board --fix-structure

# Manual board update
INTAKE --manual-kanban-update --dry-run
```

### Debug Mode
```bash
# Enable debug output
INTAKE --debug

# Verbose processing
INTAKE --verbose --full-analysis

# Dry run mode
INTAKE --dry-run --validate-only
```

### Log Analysis
Intake logs include:
- Request discovery and processing results
- Validation errors and fixes
- Categorization decisions and reasoning
- Kanban board integration status
- Notification delivery results

## ❓ FAQ

### Q: How are requests prioritized?
**A:** Intake uses multi-factor prioritization:
```yaml
intake:
  prioritization:
    factors:
      business_value: 0.4
      user_impact: 0.3
      urgency: 0.2
      effort_estimate: 0.1
    methodology: weighted_score
```

### Q: Can I customize intake templates?
**A:** Yes, configure custom templates:
```yaml
intake:
  templates:
    FR: templates/fr-template.md
    BR: templates/br-template.md
    UXR: templates/uxr-template.md
  custom_fields:
    - business_value
    - stakeholder
    - acceptance_criteria
```

### Q: How does automatic epic assignment work?
**A:** Uses pattern matching and rules:
```yaml
intake:
  epic_assignment:
    enabled: true
    rules:
      - pattern: "security|auth|login"
        epic: "E3:Security"
        confidence: 0.8
      - pattern: "performance|speed|optimization"
        epic: "E2:Performance"
        confidence: 0.9
```

## 🔗 Integration

### Workflow Dependencies
- **Required:** None (standalone workflow)
- **Optional:** Update Kanban Workflow (board integration)
- **Enhanced by:** Implementation Cycle Workflow (task creation)

### Data Flow
```
Request Discovery → Validation → Categorization → Prioritization → Kanban Update → Notification
```

### API Integration
```python
# Programmatic intake execution
from ai_dev_kit.workflows import IntakeWorkflow

workflow = IntakeWorkflow()
result = workflow.execute(
    request_type="FR",
    validation_strict=True,
    kanban_integration=True,
    auto_categorization=True
)
```

## 📚 Reference

### CLI Commands
```bash
# Main command
INTAKE [options]

# Subcommands
INTAKE --type <FR|BR|UXR>
INTAKE --validate-only
INTAKE --triage
INTAKE --dry-run

# Help
INTAKE --help
```

### Configuration Reference
#### Core Configuration
```yaml
intake:
  enabled: true
  intake_directory: docs/project-management/kanban/fr-br/
  completed_tracking: docs/project-management/kanban/fbu-completed.md
  kanban_integration: true
  auto_categorization: true
```

#### Advanced Configuration
```yaml
intake:
  validation_strict: true
  notification_enabled: true
  categorization:
    methodology: moscow
    auto_epic_mapping: true
  validation:
    custom_rules:
      FR:
        min_description_length: 50
        required_acceptance_criteria: 3
      BR:
        reproduction_steps_required: true
        severity_level_required: true
```

### Step-by-Step Execution
1. **Step 1**: Request Discovery
   - Scan intake directory for new requests
   - Identify request types (FR/BR/UXR)
   - Load request metadata and content

2. **Step 2**: Validation
   - Validate required fields presence
   - Check format compliance
   - Apply validation rules
   - Report validation errors

3. **Step 3**: Categorization
   - Apply automatic categorization rules
   - Assign epic and story mappings
   - Calculate priority scores
   - Resolve categorization conflicts

4. **Step 4**: Prioritization
   - Apply MoSCOW methodology
   - Calculate weighted priority scores
   - Consider business value and impact
   - Generate priority rankings

5. **Step 5**: Kanban Integration
   - Update kanban board with new items
   - Apply board structure and formatting
   - Validate board consistency
   - Create board update commits

6. **Step 6**: Notification
   - Generate stakeholder notifications
   - Send intake confirmation messages
   - Update tracking documentation
   - Log notification delivery

7. **Step 7**: Documentation Update
   - Update completed tracking file
   - Archive processed requests
   - Generate intake reports
   - Update intake metrics

### Output Formats
- **Kanban Board**: Updated board structure with new items
- **Validation Reports**: Request validation results and errors
- **Categorization Reports**: Classification decisions and reasoning
- **Intake Summaries**: Processing statistics and metrics

## 🎯 Best Practices

### Do's
- ✅ Use consistent intake templates and forms
- ✅ Validate all requests before processing
- ✅ Apply objective categorization criteria
- ✅ Update kanban board promptly with new items
- ✅ Notify stakeholders of intake status

### Don'ts
- ❌ Skip validation steps for urgent requests
- ❌ Use subjective categorization without criteria
- ❌ Ignore kanban board integration
- ❌ Process requests without proper documentation
- ❌ Override automated processes without review

## 🔄 Version Compatibility

| Workflow Version | Framework Version | Notes |
|------------------|-------------------|-------|
| 1.0.0 | v0.4.14.3+ | Initial release with basic intake |
| 1.1.0 | v0.5.0.0+ | Enhanced validation and categorization |
| 1.2.0 | v0.5.1.0+ | Advanced triage and epic mapping |

## 📞 Support

### Getting Help
- **Documentation**: [Intake Workflow Guide](../../KB/Documentation/Developer_Docs/vwmp/intake-workflow-agent-execution.md)
- **Community**: [AI Dev Kit Discussions](https://github.com/earlution/ai-dev-kit/discussions)

### Contributing
- **Intake Enhancements**: Submit new validation rules or categorization methods
- **Bug Reports**: File issues with intake samples and configuration
- **Feature Requests**: Propose new intake capabilities or integrations

---

## 📊 Workflow Metadata

- **Type**: intake
- **Abbreviation**: INTAKE
- **Triggers**: ["INTAKE"]
- **Steps**: 7
- **Dependencies**: None
- **Configuration**: `.ai-dev-kit.yaml` intake section

**Last Updated**: 2026-03-12  
**Framework Version**: v0.4.14.3+2  
**Maintainer**: AI Dev Kit Team
