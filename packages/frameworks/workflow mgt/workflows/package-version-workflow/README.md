# Package Version Workflow

## Overview

The Package Version Workflow provides systematic package version management and updates with dependency analysis, compatibility checking, and automated version bumping. It ensures consistent version management across all project packages.

## 🎯 Purpose

To deliver reliable package version management through automated version bumping, dependency analysis, and compatibility validation while maintaining semantic versioning principles.

## 🚨 Prerequisites

### Framework Requirements
- AI Dev Kit workflow management framework installed
- Package management system configured (npm, pip, etc.)
- Version schema compliance (RC.EPIC.STORY.TASK+BUILD)
- Configuration file `.ai-dev-kit.yaml` with version settings

### Setup Requirements
- Package files identified and tracked
- Version dependencies mapped
- Build and release processes established
- Version validation rules configured

## ⚡ Quick Start

### Basic Usage
```bash
# Execute package version workflow
PKG-VERSION

# Example with specific package
PKG-VERSION --package @ai-dev-kit/core

# Example with version bump
PKG-VERSION --bump patch --validate
```

### Expected Outcome
- Package versions analyzed and updated
- Dependencies validated for compatibility
- Version schema compliance enforced
- Build and release processes triggered

## ⚙️ Configuration

### YAML Configuration
```yaml
# .ai-dev-kit.yaml
package_version:
  enabled: true
  version_schema: RC.EPIC.STORY.TASK+BUILD
  auto_bump: true
  dependency_check: true
  compatibility_validation: true
  build_trigger: true
  release_integration: true
```

### Configuration Options
| Option | Type | Default | Description |
|--------|------|---------|-------------|
| version_schema | string | RC.EPIC.STORY.TASK+BUILD | Version schema format |
| auto_bump | boolean | true | Automatic version bumping |
| dependency_check | boolean | true | Check dependency compatibility |
| compatibility_validation | boolean | true | Validate version compatibility |
| build_trigger | boolean | true | Trigger build process |
| release_integration | boolean | true | Integrate with release workflow |

### Environment Variables
```bash
export PKG_VERSION_AUTO_BUMP="true"
export PKG_VERSION_DEPENDENCY_CHECK="true"
export PKG_VERSION_COMPATIBILITY_VALIDATION="true"
export PKG_VERSION_BUILD_TRIGGER="true"
export PKG_VERSION_DRY_RUN="false"
```

## 📋 Usage Examples

### Example 1: Standard Package Version Update
```bash
# Execute complete PKG-VERSION workflow
PKG-VERSION

# Expected output:
# ✓ Package inventory and version analysis
# ✓ Current version compliance validation
# ✓ Dependency compatibility checking
# ✓ Automatic version bump calculation
# ✓ Package files updated with new version
# ✓ Build process triggered
# ✓ Release workflow integration initiated
```

### Example 2: Specific Package Version Bump
```bash
# Update specific package with patch bump
PKG-VERSION --package @ai-dev-kit/core --bump patch --validate

# Configuration:
package_version:
  target_package: @ai-dev-kit/core
  bump_type: patch
  validation:
    strict: true
    schema_compliance: true
    dependency_compatibility: true
  build:
    trigger: true
    test_suite: true
    publish_dry_run: false

# Expected output:
# ✓ Package @ai-dev-kit/core identified (current: v0.4.14.3+2)
# ✓ Patch bump calculated (new: v0.4.14.3+3)
# ✓ Version schema compliance validated
# ✓ Dependencies checked for compatibility
# ✓ package.json updated with new version
# ✓ Build process initiated and validated
# ✓ Test suite execution completed successfully
```

### Example 3: Multi-Package Version Synchronization
```bash
# Synchronize versions across multiple packages
PKG-VERSION --sync --scope monorepo --validate-dependencies

# Configuration for monorepo synchronization:
package_version:
  scope: monorepo
  sync_strategy: lockstep
  packages:
    - @ai-dev-kit/core
    - @ai-dev-kit/workflows
    - @ai-dev-kit/utils
  validation:
    cross_package_compatibility: true
    api_compatibility: true
    breaking_change_detection: true
  build:
    parallel: true
    test_matrix: comprehensive

# Expected output:
# ✓ Monorepo package inventory completed (3 packages)
# ✓ Current version analysis: v0.4.14.3+2 across all packages
# ✓ Lockstep synchronization applied
# ✓ Cross-package compatibility validated
# ✓ API compatibility checks passed
# ✓ Breaking change detection completed (none found)
# ✓ All packages updated to v0.4.14.3+3
# ✓ Parallel build and test execution completed
# ✓ Integration validation successful
```

## 🔧 Advanced Usage

### Custom Version Bump Rules
```yaml
package_version:
  bump_rules:
    custom:
      - pattern: "feat:*"
        bump: minor
        conditions:
          - breaking_change: false
      - pattern: "fix:*"
        bump: patch
        conditions:
          - api_change: false
      - pattern: "perf:*"
        bump: minor
        conditions:
          - performance_improvement: true
```

### Dependency Management
```yaml
package_version:
  dependency_management:
    enabled: true
    update_strategy: conservative
    compatibility_check:
      major: false
      minor: true
      patch: true
    lockfile_update: true
    security_audit: true
```

### Integration with Other Workflows
- **Release Workflow (RW)**: Package publishing and distribution
- **Testing Workflow (TESTING)**: Package testing and validation
- **Implementation Cycle Workflow (ICW)**: Version bumping during implementation

## 🐛 Troubleshooting

### Common Issues

#### Issue: Version Schema Validation Failures
**Symptoms:** Version format doesn't match RC.EPIC.STORY.TASK+BUILD schema
**Causes:** Manual version edits or incorrect bump calculation
**Solutions:**
```bash
# Check current version format
PKG-VERSION --check-version --package @ai-dev-kit/core

# Reset to schema compliance
PKG-VERSION --reset-schema --package @ai-dev-kit/core

# Manual version specification
PKG-VERSION --manual-version v0.4.14.3+3 --validate
```

#### Issue: Dependency Compatibility Conflicts
**Symptoms:** Package dependencies incompatible with new version
**Causes:** Version range constraints or breaking changes
**Solutions:**
```bash
# Check dependency compatibility
PKG-VERSION --check-deps --package @ai-dev-kit/core

# Update dependency ranges
PKG-VERSION --update-deps --strategy conservative

# Force compatibility override
PKG-VERSION --force-compat --package @ai-dev-kit/core
```

#### Issue: Build Process Failures
**Symptoms:** Build fails after version update
**Causes:** Version-specific code or configuration issues
**Solutions:**
```bash
# Check build status
PKG-VERSION --check-build --package @ai-dev-kit/core

# Run build in debug mode
PKG-VERSION --build-debug --package @ai-dev-kit/core

# Skip build for troubleshooting
PKG-VERSION --skip-build --package @ai-dev-kit/core
```

### Debug Mode
```bash
# Enable debug output
PKG-VERSION --debug

# Verbose version analysis
PKG-VERSION --verbose --full-analysis

# Dry run mode
PKG-VERSION --dry-run --no-changes
```

### Log Analysis
PKG-VERSION logs include:
- Package inventory and version analysis
- Version bump calculations and decisions
- Dependency compatibility checks
- Build process results and errors
- Release integration status

## ❓ FAQ

### Q: How are version bumps calculated?
**A:** PKG-VERSION uses semantic versioning with custom rules:
```yaml
package_version:
  bump_calculation:
    methodology: semantic_with_custom
    factors:
      - commit_messages: 0.4
      - breaking_changes: 0.3
      - api_changes: 0.2
      - dependency_updates: 0.1
```

### Q: Can I customize version bump rules?
**A:** Yes, configure custom bump patterns:
```yaml
package_version:
  custom_bump_rules:
    - pattern: "feat:!*"
      bump: minor
      conditions:
        - breaking_change: false
    - pattern: "fix:!*"
      bump: patch
      auto_apply: true
```

### Q: How does monorepo synchronization work?
**A:** Uses lockstep versioning with compatibility checks:
```bash
# Synchronize monorepo packages
PKG-VERSION --sync --scope monorepo

# Validate cross-package compatibility
PKG-VERSION --validate-compat --cross-package
```

## 🔗 Integration

### Workflow Dependencies
- **Required:** Testing Workflow (build validation)
- **Optional:** Release Workflow (package publishing)
- **Enhanced by:** Implementation Cycle Workflow (version management)

### Data Flow
```
Package Analysis → Version Calculation → Dependency Check → Version Update → Build → Release Integration
```

### API Integration
```python
# Programmatic PKG-VERSION execution
from ai_dev_kit.workflows import PackageVersionWorkflow

workflow = PackageVersionWorkflow()
result = workflow.execute(
    package="@ai-dev-kit/core",
    bump_type="patch",
    validate_dependencies=True,
    trigger_build=True
)
```

## 📚 Reference

### CLI Commands
```bash
# Main command
PKG-VERSION [options]

# Subcommands
PKG-VERSION --package <package_name>
PKG-VERSION --bump <major|minor|patch>
PKG-VERSION --sync
PKG-VERSION --dry-run

# Help
PKG-VERSION --help
```

### Configuration Reference
#### Core Configuration
```yaml
package_version:
  enabled: true
  version_schema: RC.EPIC.STORY.TASK+BUILD
  auto_bump: true
  dependency_check: true
  compatibility_validation: true
```

#### Advanced Configuration
```yaml
package_version:
  build_trigger: true
  release_integration: true
  bump_rules:
    custom:
      - pattern: "feat:*"
        bump: minor
      - pattern: "fix:*"
        bump: patch
  dependency_management:
    update_strategy: conservative
    security_audit: true
```

### Step-by-Step Execution
1. **Step 1**: Package Discovery
   - Scan project for package files
   - Identify package management systems
   - Load current version information

2. **Step 2**: Version Analysis
   - Analyze current version compliance
   - Check version schema adherence
   - Identify version bump requirements

3. **Step 3**: Dependency Analysis
   - Map package dependencies
   - Check compatibility constraints
   - Validate dependency ranges

4. **Step 4**: Version Calculation
   - Calculate appropriate version bump
   - Apply custom bump rules
   - Validate new version format

5. **Step 5**: Version Update
   - Update package files with new version
   - Update related configuration files
   - Validate version consistency

6. **Step 6**: Build Process
   - Trigger build process
   - Run test suites
   - Validate build artifacts

7. **Step 7**: Release Integration
   - Integrate with release workflow
   - Prepare publishing configuration
   - Validate release readiness

8. **Step 8**: Documentation Update
   - Update version documentation
   - Generate change logs
   - Archive version information

### Output Formats
- **Package Files**: Updated package.json, setup.py, etc.
- **Build Artifacts**: Validated build outputs
- **Version Reports**: Version analysis and change summaries
- **Release Notes**: Automated change documentation

## 🎯 Best Practices

### Do's
- ✅ Follow semantic versioning principles
- ✅ Validate all version changes with testing
- ✅ Maintain dependency compatibility
- ✅ Document version changes and breaking changes
- ✅ Use automated version bumping when possible

### Don'ts
- ❌ Manually edit versions without validation
- ❌ Skip dependency compatibility checks
- ❌ Ignore breaking change detection
- ❌ Release packages without build validation
- ❌ Use inconsistent version formats

## 🔄 Version Compatibility

| Workflow Version | Framework Version | Notes |
|------------------|-------------------|-------|
| 1.0.0 | v0.4.14.3+ | Initial release with basic versioning |
| 1.1.0 | v0.5.0.0+ | Enhanced dependency management and sync |
| 1.2.0 | v0.5.1.0+ | Advanced monorepo support and validation |

## 📞 Support

### Getting Help
- **Documentation**: [PKG-VERSION Guide](../../KB/Documentation/Developer_Docs/vwmp/package-version-workflow-agent-execution.md)
- **Community**: [AI Dev Kit Discussions](https://github.com/earlution/ai-dev-kit/discussions)

### Contributing
- **PKG-VERSION Enhancements**: Submit new bump rules or validation methods
- **Bug Reports**: File issues with package samples and configuration
- **Feature Requests**: Propose new version management capabilities

---

## 📊 Workflow Metadata

- **Type**: package-version
- **Abbreviation**: PKG-VERSION
- **Triggers**: ["PKG-VERSION"]
- **Steps**: 8
- **Dependencies**: Testing Workflow
- **Configuration**: `.ai-dev-kit.yaml` package_version section

**Last Updated**: 2026-03-12  
**Framework Version**: v0.4.14.3+2  
**Maintainer**: AI Dev Kit Team
