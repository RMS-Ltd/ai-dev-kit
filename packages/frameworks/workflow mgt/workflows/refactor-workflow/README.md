# Refactor Workflow

## Overview

The Refactor Workflow provides a systematic approach to code refactoring and improvement tasks with validation, testing, and documentation integration. It ensures safe, well-tested code transformations while maintaining system integrity.

## 🎯 Purpose

To deliver clean, maintainable, and improved code through systematic refactoring with comprehensive testing, validation, and documentation updates.

## 🚨 Prerequisites

### Framework Requirements
- AI Dev Kit workflow management framework installed
- Version control system (Git) with clean working directory
- Testing framework configured for the project
- Code analysis tools available (linting, type checking)

### Setup Requirements
- Project must have test coverage for code being refactored
- Configuration file `.ai-dev-kit.yaml` with refactor settings
- Backup strategy for critical code sections
- Code review process established

## ⚡ Quick Start

### Basic Usage
```bash
# Execute refactor workflow
REFACTOR

# Example with specific target
REFACTOR --target src/core/module.py

# Example with validation mode
REFACTOR --validate-only
```

### Expected Outcome
- Code refactored with improved structure and readability
- Comprehensive test suite validation
- Documentation updates reflecting changes
- Code quality improvements (linting, type checking)

## ⚙️ Configuration

### YAML Configuration
```yaml
# .ai-dev-kit.yaml
refactor:
  enabled: true
  refactor_branch_prefix: refactor/
  test_command: pytest
  lint_command: ruff check
  type_check_command: mypy
  backup_enabled: true
  validation_strict: true
  documentation_update: true
```

### Configuration Options
| Option | Type | Default | Description |
|--------|------|---------|-------------|
| refactor_branch_prefix | string | refactor/ | Branch prefix for refactor tasks |
| test_command | string | pytest | Test execution command |
| lint_command | string | ruff check | Code linting command |
| type_check_command | string | mypy | Type checking command |
| backup_enabled | boolean | true | Enable code backup before refactoring |
| validation_strict | boolean | true | Strict validation mode |

### Environment Variables
```bash
export REFACTOR_BACKUP_ENABLED="true"
export REFACTOR_VALIDATION_STRICT="true"
export REFACTOR_DOCUMENTATION_UPDATE="true"
export REFACTOR_TEST_COVERAGE_THRESHOLD="80"
```

## 📋 Usage Examples

### Example 1: Basic Refactoring
```bash
# Execute complete refactor workflow
REFACTOR

# Expected output:
# ✓ Analysis of code structure and dependencies
# ✓ Backup of original code (if enabled)
# ✓ Systematic refactoring with improvements
# ✓ Comprehensive test validation
# ✓ Code quality checks (linting, type checking)
# ✓ Documentation updates
# ✓ Commit and branch creation
```

### Example 2: Targeted Module Refactoring
```bash
# Refactor specific module
REFACTOR --target src/utils/helpers.py

# Configuration:
refactor:
  target_modules:
    - src/utils/helpers.py
  refactor_patterns:
    - "extract_method"
    - "rename_variable"
    - "simplify_conditional"

# Expected output:
# ✓ Analysis of target module structure
# ✓ Pattern-based refactoring applied
# ✓ Module-specific test validation
# ✓ Updated imports and dependencies
# ✓ Documentation updates for module
```

### Example 3: Safe Refactoring with Validation
```bash
# Execute with enhanced safety checks
REFACTOR --safe-mode --validation-strict

# Configuration for safety:
refactor:
  safe_mode: true
  validation_strict: true
  backup_enabled: true
  test_coverage_threshold: 90
  pre_refactor_validation: true
  post_refactor_validation: true

# Expected output:
# ✓ Comprehensive pre-refactor analysis
# ✓ High-coverage test validation (90%+)
# ✓ Safe refactoring with rollback capability
# ✓ Extensive validation and quality checks
# ✓ Documentation and changelog updates
```

## 🔧 Advanced Usage

### Custom Refactoring Patterns
```yaml
refactor:
  patterns:
    extract_method:
      enabled: true
      min_method_length: 10
      max_complexity: 5
    
    rename_variable:
      enabled: true
      naming_convention: snake_case
      semantic_names: true
    
    simplify_conditional:
      enabled: true
      max_nesting_depth: 3
      early_return: true
```

### Quality Gates
```yaml
refactor:
  quality_gates:
    test_coverage_threshold: 85
    lint_failure_threshold: 0
    type_check_failure_threshold: 0
    complexity_increase_limit: 10
    maintainability_index_min: 70
```

### Integration with Other Workflows
- **Release Workflow (RW)**: Refactoring validation before releases
- **Testing Workflow (TESTING)**: Enhanced test coverage for refactored code
- **Implementation Cycle Workflow (ICW)**: Refactoring during implementation phases

## 🐛 Troubleshooting

### Common Issues

#### Issue: Test Failures After Refactoring
**Symptoms:** Tests fail after code refactoring
**Causes:** Refactoring changed behavior or broke dependencies
**Solutions:**
```bash
# Check test failures
pytest --tb=short

# Run tests in verbose mode
REFACTOR --test-verbose

# Fix test issues first
REFACTOR --fix-tests-first
```

#### Issue: Type Checking Errors
**Symptoms:** Type checking failures after refactoring
**Causes:** Type annotations missing or incorrect
**Solutions:**
```bash
# Check type errors
mypy src/

# Auto-fix type issues
REFACTOR --fix-types

# Update type annotations
REFACTOR --update-types
```

#### Issue: Linting Violations
**Symptoms:** Code linting errors block workflow
**Causes:** Style violations or deprecated syntax
**Solutions:**
```bash
# Auto-fix linting issues
ruff check --fix .

# Check specific rules
ruff check --select=E,W,F

# Exclude problematic files
REFACTOR --lint-exclude "*/legacy/*"
```

### Debug Mode
```bash
# Enable debug output
REFACTOR --debug

# Verbose refactoring process
REFACTOR --verbose

# Dry run mode
REFACTOR --dry-run
```

### Log Analysis
Refactor logs include:
- Code analysis results
- Refactoring patterns applied
- Test validation outcomes
- Quality check results
- Documentation updates

## ❓ FAQ

### Q: How do I customize refactoring patterns?
**A:** Configure custom patterns in the refactor settings:
```yaml
refactor:
  patterns:
    custom_pattern:
      enabled: true
      description: "Custom refactoring logic"
      implementation: "custom_refactor_function"
```

### Q: Can I refactor multiple modules at once?
**A:** Yes, specify multiple targets:
```yaml
refactor:
  target_modules:
    - src/module1.py
    - src/module2.py
    - src/utils/helpers.py
```

### Q: How do I ensure safe refactoring?
**A:** Enable safety features:
```yaml
refactor:
  safe_mode: true
  backup_enabled: true
  validation_strict: true
  pre_refactor_validation: true
```

## 🔗 Integration

### Workflow Dependencies
- **Required:** Testing Workflow (for validation)
- **Optional:** Release Workflow (pre-release refactoring)
- **Enhanced by:** Implementation Cycle Workflow (structured refactoring)

### Data Flow
```
Code Analysis → Refactoring Patterns → Test Validation → Quality Checks → Documentation → Commit
```

### API Integration
```python
# Programmatic refactor workflow execution
from ai_dev_kit.workflows import RefactorWorkflow

workflow = RefactorWorkflow()
result = workflow.execute(
    target_modules=["src/core/module.py"],
    safe_mode=True,
    validation_strict=True
)
```

## 📚 Reference

### CLI Commands
```bash
# Main command
REFACTOR [options]

# Subcommands
REFACTOR --target <module>
REFACTOR --safe-mode
REFACTOR --validate-only
REFACTOR --backup-enabled

# Help
REFACTOR --help
```

### Configuration Reference
#### Core Configuration
```yaml
refactor:
  enabled: true
  refactor_branch_prefix: refactor/
  test_command: pytest
  lint_command: ruff check
  type_check_command: mypy
  backup_enabled: true
  validation_strict: true
```

#### Advanced Configuration
```yaml
refactor:
  target_modules: [src/core/, src/utils/]
  patterns:
    extract_method: true
    rename_variable: true
    simplify_conditional: true
  quality_gates:
    test_coverage_threshold: 85
    lint_failure_threshold: 0
    type_check_failure_threshold: 0
```

### Step-by-Step Execution
1. **Step 1**: Code Analysis
   - Analyze code structure and dependencies
   - Identify refactoring opportunities
   - Assess complexity and maintainability

2. **Step 2**: Backup Creation
   - Create backup of original code
   - Generate refactoring plan
   - Validate preconditions

3. **Step 3**: Refactoring Execution
   - Apply refactoring patterns
   - Update imports and dependencies
   - Maintain code functionality

4. **Step 4**: Test Validation
   - Run comprehensive test suite
   - Validate test coverage
   - Check for regressions

5. **Step 5**: Quality Checks
   - Execute code linting
   - Run type checking
   - Validate quality gates

6. **Step 6**: Documentation Updates
   - Update code documentation
   - Update changelog
   - Update API documentation

7. **Step 7**: Commit and Branch
   - Create refactor branch
   - Commit changes with detailed message
   - Update workflow status

8. **Step 8**: Validation
   - Final validation of changes
   - Generate refactoring report
   - Update metrics and analytics

### Output Formats
- **Refactoring Reports**: Markdown summary, JSON data
- **Test Results**: JUnit XML, console output
- **Quality Metrics**: Coverage reports, complexity analysis

## 🎯 Best Practices

### Do's
- ✅ Maintain comprehensive test coverage
- ✅ Use systematic refactoring patterns
- ✅ Document all changes thoroughly
- ✅ Validate changes at each step
- ✅ Keep refactoring changes small and focused

### Don'ts
- ❌ Refactor without tests
- ❌ Make large, complex changes at once
- ❌ Skip validation steps
- ❌ Ignore code quality standards
- ❌ Refactor critical production code without backup

## 🔄 Version Compatibility

| Workflow Version | Framework Version | Notes |
|------------------|-------------------|-------|
| 1.0.0 | v0.4.14.3+ | Initial release with basic refactoring |
| 1.1.0 | v0.5.0.0+ | Added advanced patterns and safety features |
| 1.2.0 | v0.5.1.0+ | Enhanced integration with testing workflow |

## 📞 Support

### Getting Help
- **Documentation**: [Refactor Workflow Guide](../../KB/Documentation/Developer_Docs/vwmp/refactor-workflow-agent-execution.md)
- **Community**: [AI Dev Kit Discussions](https://github.com/earlution/ai-dev-kit/discussions)

### Contributing
- **Pattern Contributions**: Submit custom refactoring patterns
- **Bug Reports**: File issues with refactor logs and configuration
- **Feature Requests**: Propose new refactoring capabilities

---

## 📊 Workflow Metadata

- **Type**: refactor
- **Abbreviation**: REFACTOR
- **Triggers**: ["REFACTOR"]
- **Steps**: 8
- **Dependencies**: Testing Workflow
- **Configuration**: `.ai-dev-kit.yaml` refactor section

**Last Updated**: 2026-03-12  
**Framework Version**: v0.4.14.3+2  
**Maintainer**: AI Dev Kit Team
