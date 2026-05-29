---
lifecycle: evergreen
ttl_days: null
created_at: 2026-01-05T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Maintenance Automation Usage Guide

**Status:** Active  
**Version:** 1.0.0  
**Last Updated:** 2026-01-05  
**Epic:** Epic 7 - Codebase Maintenance and Review  
**Story:** Story 4 - Maintenance Automation and Tooling  
**Task:** E7:S04:T04 - Document automation and tooling usage  
**Related:** Maintenance Automation Requirements, Maintenance Automation Scripts, Maintenance Automation Workflow Integration

---

## Executive Summary

This document provides **comprehensive usage guidance** for maintenance automation scripts and tools in the AI Dev Kit project. It includes usage guides, tutorials, examples, best practices, and troubleshooting information.

**Key Features:**
- **Usage Guides:** Step-by-step guides for each automation script
- **Tutorials:** Tutorials for common automation scenarios
- **Examples:** Real-world usage examples
- **Best Practices:** Best practices for automation usage
- **Troubleshooting:** Troubleshooting guides for common issues

---

## Quick Start

### Installation

**Prerequisites:**
- Python 3.8+
- Git
- Required tools (see tool requirements)

**Setup:**
```bash
# No installation required - scripts are in repository
# Ensure scripts are executable
chmod +x scripts/maintenance/**/*.py
```

### Basic Usage

**Run IDE Issue Detection:**
```bash
python scripts/maintenance/ide_issues/detect_ide_issues.py --source-dir .
```

**Run Quality Checks:**
```bash
python scripts/maintenance/quality/run_quality_checks.py --source-dir .
```

**Scan Dependencies:**
```bash
python scripts/maintenance/dependencies/scan_dependencies.py --requirements requirements.txt
```

---

## Usage Guides

### Guide 1: IDE Issue Detection

**Purpose:** Detect IDE-flagged issues across the codebase

**Basic Usage:**
```bash
python scripts/maintenance/ide_issues/detect_ide_issues.py \
  --source-dir . \
  --output reports/ide_issues.json
```

**Advanced Usage:**
```bash
python scripts/maintenance/ide_issues/detect_ide_issues.py \
  --source-dir . \
  --output reports/ide_issues.json \
  --format json \
  --severity error,warning \
  --exclude-dirs tests,venv \
  --verbose
```

**Options:**
- `--source-dir`: Source directory to scan
- `--output`: Output file path
- `--format`: Output format (json, markdown)
- `--severity`: Severity filter (error, warning, info)
- `--exclude-dirs`: Directories to exclude
- `--verbose`: Verbose output

**Output:**
- JSON report with issue details
- Markdown summary (if format=markdown)

---

### Guide 2: Code Quality Checks

**Purpose:** Run code quality checks and collect metrics

**Basic Usage:**
```bash
python scripts/maintenance/quality/run_quality_checks.py \
  --source-dir . \
  --output reports/quality.json
```

**Advanced Usage:**
```bash
python scripts/maintenance/quality/run_quality_checks.py \
  --source-dir . \
  --output reports/quality.json \
  --thresholds config/quality_thresholds.yaml \
  --tools pylint,flake8,coverage \
  --generate-report
```

**Options:**
- `--source-dir`: Source directory to check
- `--output`: Output file path
- `--thresholds`: Threshold configuration file
- `--tools`: Tools to use (comma-separated)
- `--generate-report`: Generate markdown report

**Output:**
- Quality metrics JSON
- Quality report markdown (if --generate-report)

---

### Guide 3: Dependency Scanning

**Purpose:** Scan for dependency updates and vulnerabilities

**Basic Usage:**
```bash
python scripts/maintenance/dependencies/scan_dependencies.py \
  --requirements requirements.txt \
  --output reports/dependencies.json
```

**Advanced Usage:**
```bash
python scripts/maintenance/dependencies/scan_dependencies.py \
  --requirements requirements.txt \
  --output reports/dependencies.json \
  --check-vulnerabilities \
  --suggest-updates \
  --format detailed
```

**Options:**
- `--requirements`: Requirements file path
- `--output`: Output file path
- `--check-vulnerabilities`: Check for security vulnerabilities
- `--suggest-updates`: Suggest dependency updates
- `--format`: Output format (summary, detailed)

**Output:**
- Dependency report JSON
- Vulnerability report (if --check-vulnerabilities)
- Update recommendations (if --suggest-updates)

---

### Guide 4: Documentation Validation

**Purpose:** Validate documentation format and health

**Basic Usage:**
```bash
python scripts/maintenance/documentation/validate_documentation.py \
  --docs-dir docs/ \
  --output reports/doc_validation.json
```

**Advanced Usage:**
```bash
python scripts/maintenance/documentation/validate_documentation.py \
  --docs-dir docs/ \
  --output reports/doc_validation.json \
  --check-links \
  --check-format \
  --check-currency \
  --generate-report
```

**Options:**
- `--docs-dir`: Documentation directory
- `--output`: Output file path
- `--check-links`: Validate documentation links
- `--check-format`: Validate documentation format
- `--check-currency`: Check documentation currency
- `--generate-report`: Generate markdown report

**Output:**
- Documentation validation JSON
- Validation report markdown (if --generate-report)

---

## Tutorials

### Tutorial 1: Automated Maintenance Workflow

**Scenario:** Set up automated maintenance workflow

**Steps:**
1. **Configure Automation:**
   ```bash
   # Edit rw-config.yaml
   maintenance_automation:
     enabled: true
     ide_issues:
       enabled: true
       create_tasks: true
   ```

2. **Run Automation:**
   ```bash
   # Run IDE issue detection
   python scripts/maintenance/ide_issues/detect_ide_issues.py \
     --source-dir . \
     --output reports/ide_issues.json
   ```

3. **Create Tasks:**
   ```bash
   # Create Kanban tasks from findings
   python scripts/maintenance/ide_issues/prioritize_ide_issues.py \
     --input reports/ide_issues.json \
     --create-tasks
   ```

4. **Review Results:**
   - Check Kanban board for new tasks
   - Review issue reports
   - Prioritize maintenance work

---

### Tutorial 2: Quality Gate Setup

**Scenario:** Set up quality gates in CI/CD

**Steps:**
1. **Create Quality Gate Script:**
   ```python
   # scripts/maintenance/quality/quality_gate.py
   import sys
   from run_quality_checks import run_quality_checks
   
   result = run_quality_checks()
   if not result.passes_gates():
       sys.exit(1)
   ```

2. **Integrate with CI/CD:**
   ```yaml
   # .github/workflows/quality.yml
   - name: Quality Gate
     run: python scripts/maintenance/quality/quality_gate.py
   ```

3. **Configure Thresholds:**
   ```yaml
   # config/quality_thresholds.yaml
   quality_gates:
     coverage: 80
     complexity: 10
     duplication: 3
   ```

---

## Examples

### Example 1: Daily Maintenance Check

**Scenario:** Daily automated maintenance check

**Script:**
```bash
#!/bin/bash
# daily_maintenance.sh

# Run IDE issue detection
python scripts/maintenance/ide_issues/detect_ide_issues.py \
  --source-dir . \
  --output reports/ide_issues_$(date +%Y%m%d).json

# Run quality checks
python scripts/maintenance/quality/run_quality_checks.py \
  --source-dir . \
  --output reports/quality_$(date +%Y%m%d).json

# Scan dependencies
python scripts/maintenance/dependencies/scan_dependencies.py \
  --requirements requirements.txt \
  --check-vulnerabilities \
  --output reports/dependencies_$(date +%Y%m%d).json
```

**Schedule:**
```cron
# Daily at 2:00 AM
0 2 * * * /path/to/daily_maintenance.sh
```

### Example 2: Pre-Commit Automation

**Scenario:** Run automation before commit

**Pre-commit Hook:**
```bash
#!/bin/bash
# .git/hooks/pre-commit

# Run IDE issue detection (errors only)
python scripts/maintenance/ide_issues/detect_ide_issues.py \
  --source-dir . \
  --severity error \
  --output /tmp/ide_issues.json

if [ $? -ne 0 ]; then
    echo "IDE errors detected. Commit blocked."
    exit 1
fi
```

---

## Best Practices

### Automation Usage

**Guidelines:**
- Run automation regularly (daily/weekly)
- Review automation results promptly
- Address high-priority findings quickly
- Track automation effectiveness

### Script Configuration

**Guidelines:**
- Use configuration files for settings
- Document configuration options
- Version control configuration files
- Test configuration changes

### Error Handling

**Guidelines:**
- Handle errors gracefully
- Provide clear error messages
- Log errors for debugging
- Don't fail silently

---

## Troubleshooting

### Issue: Script Fails to Run

**Symptoms:**
- Script exits with error
- Permission denied errors
- Module not found errors

**Solutions:**
- Check script permissions: `chmod +x script.py`
- Check Python version: `python3 --version`
- Install dependencies: `pip install -r requirements.txt`
- Check script path: Use absolute paths if needed

### Issue: Automation Results Incomplete

**Symptoms:**
- Missing issue detection
- Incomplete quality metrics
- Partial dependency scanning

**Solutions:**
- Check source directory path
- Verify tool availability
- Check tool configuration
- Review error logs

### Issue: Integration Failures

**Symptoms:**
- Workflow integration fails
- Kanban updates not working
- CI/CD integration errors

**Solutions:**
- Check integration configuration
- Verify workflow permissions
- Review integration logs
- Test integration separately

---

## References

- **Maintenance Automation Requirements:** `docs/architecture/standards-and-adrs/maintenance-automation-requirements.md`
- **Maintenance Automation Scripts:** `docs/architecture/standards-and-adrs/maintenance-automation-scripts-and-tools.md`
- **Maintenance Automation Workflow Integration:** `docs/architecture/standards-and-adrs/maintenance-automation-workflow-integration.md`
- **Epic 7:** `docs/project-management/kanban/epics/Epic-7/Epic-7.md`
- **Story 4:** `docs/project-management/kanban/epics/Epic-7/Story-004-maintenance-automation-and-tooling.md`

---

_Last updated: 2026-01-05 (v0.7.4.4+0 – Maintenance automation and tooling usage documented)_

