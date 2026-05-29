# Testing Workflow

## Overview

The Testing Workflow provides a systematic approach to creating, updating, and validating tests with comprehensive coverage analysis and quality assurance integration. It ensures robust testing practices across all development workflows.

## 🎯 Purpose

To deliver high-quality, well-tested code through systematic test creation, coverage analysis, and quality assurance integration with linting and type checking.

## 🚨 Prerequisites

### Framework Requirements
- AI Dev Kit workflow management framework installed
- Python development environment with testing tools
- Code coverage tools configured (pytest-cov)
- Linting and type checking tools available (ruff, mypy)

### Setup Requirements
- Project must have test directory structure
- Configuration file `.ai-dev-kit.yaml` with testing settings
- Source code organized for testability

## ⚡ Quick Start

### Basic Usage
```bash
# Execute testing workflow
TESTING

# Example with coverage reporting
TESTING --coverage

# Example with specific test targets
TESTING --path tests/unit
```

### Expected Outcome
- Comprehensive test suite created or updated
- Coverage report generated with threshold validation
- Code quality checks (linting, type checking) executed
- Test results and coverage metrics reported

## ⚙️ Configuration

### YAML Configuration
```yaml
# .ai-dev-kit.yaml
testing:
  enabled: true
  test_command: pytest
  coverage_command: pytest --cov
  coverage_threshold: 80
  lint_command: ruff check
  type_check_command: mypy
  test_paths:
    - tests/
    - unit/
    - integration/
  exclude_patterns:
    - "*/tests/*"
    - "*/migrations/*"
```

### Configuration Options
| Option | Type | Default | Description |
|--------|------|---------|-------------|
| test_command | string | pytest | Test execution command |
| coverage_command | string | pytest --cov | Coverage analysis command |
| coverage_threshold | number | 80 | Minimum coverage percentage |
| lint_command | string | ruff check | Code linting command |
| type_check_command | string | mypy | Type checking command |

### Environment Variables
```bash
export TESTING_COVERAGE_THRESHOLD="85"
export TESTING_TEST_PATHS="tests/unit,integration"
export TESTING_ENABLE_LINTING="true"
export TESTING_ENABLE_TYPE_CHECK="true"
```

## 📋 Usage Examples

### Example 1: Basic Testing Workflow
```bash
# Execute complete testing workflow
TESTING

# Expected output:
# ✓ Test discovery and execution
# ✓ Coverage analysis (target: 80%)
# ✓ Code linting with ruff
# ✓ Type checking with mypy
# ✓ Test report generation
```

### Example 2: High Coverage Requirements
```bash
# Execute with 90% coverage threshold
TESTING --coverage-threshold 90

# Configuration:
testing:
  coverage_threshold: 90
  coverage_command: pytest --cov --cov-report=html

# Expected output:
# ✓ Comprehensive test suite
# ✓ Coverage analysis (target: 90%)
# ✓ HTML coverage report generated
# ✓ Quality gates validation
```

### Example 3: Integration with CI/CD
```bash
# CI/CD pipeline integration
TESTING --ci-mode --junit-xml

# Configuration for CI:
testing:
  ci_mode: true
  junit_xml: true
  coverage_format: xml
  fail_on_low_coverage: true

# Expected output:
# ✓ JUnit XML report for CI systems
# ✓ Coverage XML report for badge generation
# ✓ Exit codes for CI pipeline integration
# ✓ Quality gate validation
```

## 🔧 Advanced Usage

### Custom Test Discovery
```yaml
testing:
  test_patterns:
    - "test_*.py"
    - "*_test.py"
  test_paths:
    - tests/
    - integration/
    - e2e/
  exclude_patterns:
    - "*/fixtures/*"
    - "*/conftest.py"
```

### Coverage Configuration
```yaml
testing:
  coverage:
    source:
      - src/
      - lib/
    omit:
      - "*/tests/*"
      - "*/migrations/*"
      - "*/venv/*"
    report_formats:
      - html
      - xml
      - term
```

### Quality Gates
```yaml
testing:
  quality_gates:
    coverage_threshold: 85
    lint_failure_threshold: 0
    type_check_failure_threshold: 0
    fail_fast: false
```

### Integration with Other Workflows
- **Release Workflow (RW)**: Testing validation before releases
- **Refactor Workflow (REFACTOR)**: Test coverage for refactored code
- **Implementation Cycle Workflow (ICW)**: Test-driven development support

## 🐛 Troubleshooting

### Common Issues

#### Issue: Coverage Below Threshold
**Symptoms:** Workflow fails with coverage percentage below threshold
**Causes:** Insufficient test coverage or misconfigured coverage paths
**Solutions:**
```bash
# Check coverage report
pytest --cov --cov-report=term-missing

# Add missing tests
TESTING --generate-missing-tests

# Adjust threshold temporarily
TESTING --coverage-threshold 70
```

#### Issue: Import Errors in Tests
**Symptoms:** Tests fail with module import errors
**Causes:** Python path issues or missing dependencies
**Solutions:**
```bash
# Check Python path
python -c "import sys; print(sys.path)"

# Install missing dependencies
pip install -e .

# Update test configuration
TESTING --fix-imports
```

#### Issue: Linting Failures
**Symptoms:** Code linting errors block workflow
**Causes:** Code style violations or deprecated syntax
**Solutions:**
```bash
# Auto-fix linting issues
ruff check --fix .

# Check specific linting rules
ruff check --select=E,W,F

# Exclude problematic files
TESTING --lint-exclude "*/legacy/*"
```

### Debug Mode
```bash
# Enable debug output
TESTING --debug

# Verbose test execution
TESTING --verbose

# Dry run mode
TESTING --dry-run
```

### Log Analysis
Test logs include:
- Test discovery results
- Coverage analysis details
- Linting violation reports
- Type checking error details
- Quality gate validation results

## ❓ FAQ

### Q: How do I add custom test commands?
**A:** Configure custom test commands in the `test_command` setting:
```yaml
testing:
  test_command: pytest -v --tb=short
  custom_commands:
    integration: pytest integration/
    performance: pytest performance/ --benchmark
```

### Q: Can I exclude specific files from coverage?
**A:** Yes, use the coverage omit configuration:
```yaml
testing:
  coverage:
    omit:
      - "*/tests/*"
      - "*/migrations/*"
      - "*/__pycache__/*"
```

### Q: How do I integrate with existing test suites?
**A:** Configure test paths and patterns to match your existing structure:
```yaml
testing:
  test_paths:
    - tests/
    - spec/
  test_patterns:
    - "test_*.py"
    - "*_spec.py"
```

## 🔗 Integration

### Workflow Dependencies
- **Required:** None (standalone workflow)
- **Optional:** Release Workflow (pre-release validation)
- **Enhanced by:** Implementation Cycle Workflow (test-driven development)

### Data Flow
```
Source Code → Test Discovery → Test Execution → Coverage Analysis → Quality Checks → Reports
```

### API Integration
```python
# Programmatic testing workflow execution
from ai_dev_kit.workflows import TestingWorkflow

workflow = TestingWorkflow()
result = workflow.execute(
    coverage_threshold=85,
    test_paths=["tests/unit"],
    enable_linting=True
)
```

## 📚 Reference

### CLI Commands
```bash
# Main command
TESTING [options]

# Subcommands
TESTING --coverage-threshold 85
TESTING --test-path tests/unit
TESTING --enable-linting
TESTING --type-check-only

# Help
TESTING --help
```

### Configuration Reference
#### Core Configuration
```yaml
testing:
  enabled: true
  test_command: pytest
  coverage_command: pytest --cov
  coverage_threshold: 80
  lint_command: ruff check
  type_check_command: mypy
```

#### Advanced Configuration
```yaml
testing:
  test_paths: [tests/, unit/, integration/]
  exclude_patterns: ["*/tests/*", "*/migrations/*"]
  coverage:
    source: [src/, lib/]
    omit: [*/tests/*]
    report_formats: [html, xml, term]
  quality_gates:
    coverage_threshold: 85
    lint_failure_threshold: 0
    type_check_failure_threshold: 0
```

### Step-by-Step Execution
1. **Step 1**: Test Discovery
   - Scan configured test paths
   - Apply test patterns and exclusions
   - Generate test inventory

2. **Step 2**: Test Execution
   - Execute test suite with configured command
   - Capture test results and output
   - Generate test execution report

3. **Step 3**: Coverage Analysis
   - Run coverage analysis on source code
   - Compare against threshold requirements
   - Generate coverage reports

4. **Step 4**: Quality Checks
   - Execute code linting
   - Run type checking
   - Validate quality gates

5. **Step 5**: Report Generation
   - Compile comprehensive test report
   - Generate coverage reports
   - Create quality metrics summary

### Output Formats
- **Test Reports**: JUnit XML, HTML, console output
- **Coverage Reports**: HTML, XML, terminal, JSON
- **Quality Metrics**: Markdown summary, JSON data

## 🎯 Best Practices

### Do's
- ✅ Write comprehensive unit tests for all public functions
- ✅ Maintain high code coverage (80%+ recommended)
- ✅ Use descriptive test names and documentation
- ✅ Include integration tests for critical workflows
- ✅ Regularly review and update test suites

### Don'ts
- ❌ Skip testing for "simple" code
- ❌ Ignore coverage warnings without justification
- ❌ Write tests that depend on external systems
- ❌ Use production data in tests
- ❌ Commit code with failing tests

## 🔄 Version Compatibility

| Workflow Version | Framework Version | Notes |
|------------------|-------------------|-------|
| 1.0.0 | v0.4.14.3+ | Initial release with pytest integration |
| 1.1.0 | v0.5.0.0+ | Added coverage HTML reports |
| 1.2.0 | v0.5.1.0+ | Enhanced quality gates and CI integration |

## 📞 Support

### Getting Help
- **Documentation**: [Testing Workflow Guide](../../KB/Documentation/Developer_Docs/vwmp/testing-workflow-agent-execution.md)
- **Community**: [AI Dev Kit Discussions](https://github.com/earlution/ai-dev-kit/discussions)

### Contributing
- **Test Contributions**: Follow the test contribution guidelines
- **Bug Reports**: File issues with test logs and configuration
- **Feature Requests**: Submit enhancement proposals with use cases

---

## 📊 Workflow Metadata

- **Type**: testing
- **Abbreviation**: TESTING
- **Triggers**: ["TESTING"]
- **Steps**: 5
- **Dependencies**: None
- **Configuration**: `.ai-dev-kit.yaml` testing section

**Last Updated**: 2026-03-12  
**Framework Version**: v0.4.14.3+2  
**Maintainer**: AI Dev Kit Team
