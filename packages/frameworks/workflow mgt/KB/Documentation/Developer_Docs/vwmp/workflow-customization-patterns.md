---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:02:13Z
expires_at: null
housekeeping_policy: keep
---

# Workflow Customization Patterns

**Version:** 1.0.0
**Last Updated:** 2025-12-03
**Related:** Workflow Template Generator | Agent-Driven Workflow Execution

---

## 📖 Overview

This document provides comprehensive guidance on customizing workflows for different projects, use cases, and requirements. It covers common patterns, best practices, and examples for adapting workflows to your specific needs.

**Use this guide when:**
- Adapting workflows to a new project
- Customizing workflows for specific use cases
- Extending workflows with additional steps
- Modifying workflow behavior
- Creating project-specific workflows

---

## 🎯 Customization Principles

### 1. Preserve Agent-Driven Execution Pattern

**CRITICAL:** Always maintain the ANALYZE → DETERMINE → EXECUTE → VALIDATE → PROCEED pattern for each step, even when customizing.

**Why:**
- Ensures intelligent execution
- Maintains consistency across workflows
- Enables agent understanding and adaptation

**How:**
- Keep step structure with these phases
- Document each phase in execution guides
- Maintain validation steps

### 2. Keep Workflows Project-Agnostic

**Principle:** Customize configuration, not structure.

**Why:**
- Enables reuse across projects
- Maintains portability
- Reduces maintenance burden

**How:**
- Use config variables for project-specific paths
- Use parameters for user input
- Avoid hardcoding project-specific values

### 3. Maintain Step Dependencies

**Principle:** Preserve logical step dependencies when customizing.

**Why:**
- Ensures correct execution order
- Prevents errors from missing prerequisites
- Maintains workflow integrity

**How:**
- Review dependencies when adding/removing steps
- Update dependencies when reordering steps
- Validate dependency chains

---

## 🔧 Common Customization Patterns

### Pattern 1: File Path Customization

**Use Case:** Adapt workflows to different project structures

**Example:**
```yaml
# Original (dev-kit)
config:
  version_file: src/fynd_deals/version.py
  changelog_dir: docs/changelog-and-release-notes/changelog-archive

# Customized (your project)
config:
  version_file: src/yourproject/version.py
  changelog_dir: docs/changelogs
```

**Best Practices:**
- Use `${config.variable_name}` syntax in steps
- Document all path customizations
- Keep paths relative to project root when possible

---

### Pattern 2: Command Customization

**Use Case:** Adapt to different tooling (test runners, linters, etc.)

**Example:**
```yaml
# Original (pytest)
config:
  test_command: pytest
  lint_command: ruff check

# Customized (Jest)
config:
  test_command: npm test
  lint_command: npm run lint
```

**Best Practices:**
- Document command requirements
- Support multiple tooling options
- Provide fallback commands

---

### Pattern 3: Step Addition

**Use Case:** Add project-specific steps

**Example:**
```yaml
# Add security scan step
steps:
  - id: step-5
    name: Run Security Scan
    type: validation
    handler: security.scan
    required: false
    enabled: true
    dependencies:
      - step-4
    config:
      scan_command: npm audit
      fail_on_critical: true
```

**Best Practices:**
- Follow existing step structure
- Maintain dependency chains
- Document new steps in execution guide
- Consider making optional steps enabled by default

---

### Pattern 4: Step Removal

**Use Case:** Simplify workflows for specific use cases

**Example:**
```yaml
# Remove git operations for non-git workflows
# Original: 13 steps with git operations
# Customized: 10 steps without git operations
```

**Best Practices:**
- Remove steps that don't apply
- Update dependencies after removal
- Document why steps were removed
- Consider making steps optional instead of removing

---

### Pattern 5: Parameter Customization

**Use Case:** Add project-specific parameters

**Example:**
```yaml
# Add deployment environment parameter
parameters:
  - name: deployment_environment
    type: enum
    required: true
    label: Deployment Environment
    description: Environment to deploy to
    options:
      - value: staging
        label: Staging
      - value: production
        label: Production
```

**Best Practices:**
- Use clear parameter names
- Provide helpful descriptions
- Use enums for constrained choices
- Make optional parameters have defaults

---

### Pattern 6: Config Variable Customization

**Use Case:** Adapt workflow behavior to project needs

**Example:**
```yaml
# Original
config:
  coverage_threshold: 80
  strict_mode: true

# Customized
config:
  coverage_threshold: 90  # Higher threshold
  strict_mode: false      # More lenient
```

**Best Practices:**
- Document config variable purposes
- Provide sensible defaults
- Allow override via parameters
- Validate config values

---

### Pattern 7: Handler Customization

**Use Case:** Use project-specific handlers

**Example:**
```yaml
# Original
handler: refactor.execute

# Customized
handler: myproject.refactor.execute
```

**Best Practices:**
- Maintain handler naming conventions
- Document handler requirements
- Provide fallback handlers
- Test handlers before use

---

### Pattern 8: Branch Naming Customization

**Use Case:** Adapt to different branch naming conventions

**Example:**
```yaml
# Original
config:
  refactor_branch_prefix: refactor/

# Customized
config:
  refactor_branch_prefix: feature/refactor/
```

**Best Practices:**
- Follow project branch conventions
- Document branch naming patterns
- Support multiple branch formats

---

## 📋 Step-by-Step Customization Guide

### Step 1: Identify Customization Needs

**Questions to Ask:**
1. What project-specific paths need updating?
2. What tools/commands are different?
3. What additional steps are needed?
4. What steps can be removed?
5. What parameters are needed?
6. What config values need changing?

**Example:**
```markdown
Customization Needs:
- Update version file path: src/myproject/version.py
- Change test command: npm test (instead of pytest)
- Add security scan step
- Remove git push step (manual review required)
- Add deployment environment parameter
```

---

### Step 2: Use Template Generator

**Generate base workflow:**
```bash
python generate_workflow.py \
  --type refactor \
  --name "My Project Refactor" \
  --output my-refactor-workflow.yaml
```

**Result:** Base workflow with standard structure

---

### Step 3: Customize Configuration

**Edit workflow YAML:**
```yaml
config:
  # Update paths
  version_file: src/myproject/version.py
  changelog_dir: docs/changelogs
  
  # Update commands
  test_command: npm test
  lint_command: npm run lint
  
  # Update branch naming
  refactor_branch_prefix: feature/refactor/
```

---

### Step 4: Customize Steps

**Add custom step:**
```yaml
steps:
  # ... existing steps ...
  - id: step-8
    name: Run Security Scan
    type: validation
    handler: security.scan
    required: false
    enabled: true
    dependencies:
      - step-7
    config:
      scan_command: npm audit
```

**Remove unnecessary step:**
- Delete step from YAML
- Update dependencies in remaining steps

---

### Step 5: Add Parameters

**Add to parameters section:**
```yaml
parameters:
  - name: refactor_scope
    type: enum
    required: true
    label: Refactoring Scope
    description: Scope of refactoring
    options:
      - value: file
        label: Single File
      - value: module
        label: Module
      - value: feature
        label: Feature
```

---

### Step 6: Create Execution Guide

**Follow pattern from existing guides:**
- Document each step
- Include examples
- Document customization points
- Add troubleshooting section

---

### Step 7: Test Customization

**Test workflow:**
1. Run workflow in test project
2. Verify all steps execute correctly
3. Check dependencies are correct
4. Validate config values work
5. Test parameters

---

## 🎨 Customization Examples

### Example 1: JavaScript/TypeScript Project

**Customizations:**
- Test command: `npm test` instead of `pytest`
- Lint command: `npm run lint` instead of `ruff check`
- Type check: `tsc --noEmit` instead of `mypy`

**Workflow Config:**
```yaml
config:
  test_command: npm test
  lint_command: npm run lint
  type_check_command: tsc --noEmit
  coverage_command: npm run test:coverage
```

---

### Example 2: Deployment Workflow

**Customizations:**
- Add deployment steps
- Add rollback capability
- Add health check step

**Additional Steps:**
```yaml
steps:
  - id: step-10
    name: Deploy to Staging
    type: deployment
    handler: deploy.staging
    required: true
    dependencies:
      - step-9
    config:
      deployment_target: staging
      health_check_url: https://staging.example.com/health
      
  - id: step-11
    name: Verify Deployment
    type: verification
    handler: deploy.verify
    required: true
    dependencies:
      - step-10
    config:
      verification_timeout: 300
      
  - id: step-12
    name: Deploy to Production
    type: deployment
    handler: deploy.production
    required: false
    enabled: true
    dependencies:
      - step-11
    config:
      deployment_target: production
      require_approval: true
```

---

### Example 3: Documentation-Only Workflow

**Customizations:**
- Remove git operations
- Focus on documentation steps
- Add review step

**Simplified Steps:**
```yaml
steps:
  - id: step-1
    name: Analyze Documentation Needs
    type: analysis
    handler: docs.analyze
    required: true
    dependencies: []
    
  - id: step-2
    name: Plan Documentation Updates
    type: planning
    handler: docs.plan
    required: true
    dependencies:
      - step-1
      
  - id: step-3
    name: Update Documentation
    type: execution
    handler: docs.update
    required: true
    dependencies:
      - step-2
      
  - id: step-4
    name: Review Documentation
    type: validation
    handler: docs.review
    required: true
    dependencies:
      - step-3
```

---

### Example 4: Multi-Environment Workflow

**Customizations:**
- Add environment parameter
- Add environment-specific config
- Add environment validation

**Parameters:**
```yaml
parameters:
  - name: target_environment
    type: enum
    required: true
    label: Target Environment
    description: Environment to deploy to
    options:
      - value: development
        label: Development
      - value: staging
        label: Staging
      - value: production
        label: Production
```

**Config:**
```yaml
config:
  environments:
    development:
      url: http://localhost:3000
      health_check: http://localhost:3000/health
    staging:
      url: https://staging.example.com
      health_check: https://staging.example.com/health
    production:
      url: https://example.com
      health_check: https://example.com/health
```

---

## ✅ Best Practices

### 1. Start with Template Generator

**Why:**
- Ensures correct structure
- Includes common patterns
- Reduces errors

**How:**
```bash
# Generate base workflow
python generate_workflow.py --type <type> --name "<name>"

# Then customize
```

---

### 2. Document All Customizations

**Why:**
- Helps future maintenance
- Enables team understanding
- Supports troubleshooting

**How:**
- Add comments in YAML
- Document in execution guide
- Create customization notes

---

### 3. Test Incrementally

**Why:**
- Catches errors early
- Isolates issues
- Validates changes

**How:**
- Test after each major change
- Verify dependencies
- Check config values

---

### 4. Maintain Backward Compatibility

**Why:**
- Preserves existing functionality
- Enables gradual migration
- Reduces breaking changes

**How:**
- Add new steps, don't remove old ones initially
- Make new features optional
- Provide migration path

---

### 5. Use Config Variables

**Why:**
- Enables easy customization
- Maintains portability
- Reduces duplication

**How:**
```yaml
config:
  project_name: myproject
  version_file: src/${config.project_name}/version.py
```

---

### 6. Validate Customizations

**Why:**
- Prevents errors
- Ensures correctness
- Maintains quality

**How:**
- Run validators
- Test workflows
- Review dependencies

---

## 🚫 Common Mistakes to Avoid

### ❌ Mistake 1: Hardcoding Project-Specific Values

**Wrong:**
```yaml
config:
  version_file: src/confidentia/version.py  # Hardcoded
```

**Correct:**
```yaml
config:
  version_file: src/${project_name}/version.py  # Configurable
```

---

### ❌ Mistake 2: Breaking Step Dependencies

**Wrong:**
```yaml
steps:
  - id: step-3
    dependencies: [step-5]  # step-5 doesn't exist yet
```

**Correct:**
```yaml
steps:
  - id: step-3
    dependencies: [step-2]  # Valid dependency
```

---

### ❌ Mistake 3: Removing Required Steps

**Wrong:**
```yaml
# Removed validation step, but execution depends on it
steps:
  - id: step-3
    name: Execute
    dependencies: [step-2]  # step-2 was validation, now removed
```

**Correct:**
```yaml
# Keep validation or update dependencies
steps:
  - id: step-2
    name: Validate
    # ... validation step ...
  - id: step-3
    name: Execute
    dependencies: [step-2]
```

---

### ❌ Mistake 4: Ignoring Agent Execution Pattern

**Wrong:**
```yaml
# Step without clear phases
steps:
  - id: step-1
    name: Do Everything
    handler: workflow.do_all
```

**Correct:**
```yaml
# Step with clear phases
steps:
  - id: step-1
    name: Analyze Requirements
    type: analysis
    handler: workflow.analyze
    # Document ANALYZE → DETERMINE → EXECUTE → VALIDATE → PROCEED
```

---

### ❌ Mistake 5: Not Testing Customizations

**Wrong:**
- Customize workflow
- Deploy without testing
- Discover errors in production

**Correct:**
- Customize workflow
- Test in development
- Validate all steps
- Deploy after verification

---

## 🔄 Migration Patterns

### Pattern 1: Migrating from Manual to Automated

**Steps:**
1. Document current manual process
2. Identify automation opportunities
3. Generate base workflow
4. Add automation steps
5. Test incrementally
6. Migrate fully

---

### Pattern 2: Adapting from Another Project

**Steps:**
1. Copy workflow from source project
2. Identify project-specific values
3. Replace with config variables
4. Update file paths
5. Update commands
6. Test and validate

---

### Pattern 3: Extending Existing Workflow

**Steps:**
1. Identify extension points
2. Add new steps
3. Update dependencies
4. Add new parameters if needed
5. Update execution guide
6. Test extension

---

## 📚 Reference Examples

### Example Workflows

- **Release Workflow:** `workflows/release-workflow.yaml`
- **Refactor Workflow:** `workflows/refactor-workflow.yaml`
- **Migration Workflow:** `workflows/migration-workflow.yaml`
- **Testing Workflow:** `workflows/testing-workflow.yaml`

### Example Execution Guides

- **Release Workflow Guide:** `docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md`
- **Refactor Workflow Guide:** `docs/documentation/Developer_Docs/vwmp/refactor-workflow-agent-execution.md`
- **Migration Workflow Guide:** `docs/documentation/Developer_Docs/vwmp/migration-workflow-agent-execution.md`
- **Testing Workflow Guide:** `docs/documentation/Developer_Docs/vwmp/testing-workflow-agent-execution.md`

---

## 🛠️ Tools and Resources

### Template Generator

**Location:** `scripts/generate_workflow.py`

**Usage:**
```bash
python generate_workflow.py --type <type> --name "<name>" [options]
```

**Documentation:** `scripts/README-workflow-generator.md`

**Examples:** `scripts/examples/generate-workflow-examples.md`

---

### Validation Tools

**Branch Context Validator:**
```bash
python scripts/validation/validate_branch_context.py
```

**Changelog Format Validator:**
```bash
python scripts/validation/validate_changelog_format.py
```

---

## 📖 Related Documentation

- **Agent-Driven Execution:** `agent-driven-workflow-execution.md`
- **Workflow Taxonomy:** `docs/project-management/kanban/epics/Epic-2/Story-003-additional-workflows-and-examples/T01-workflow-taxonomy.md`
- **Portable Implementation Guide:** `portable-workflow-implementation-guide.md`
- **Workflow Template Generator:** `scripts/README-workflow-generator.md`

---

## 🎓 Learning Path

### Beginner

1. Read this guide
2. Review example workflows
3. Generate a simple workflow
4. Customize file paths
5. Test workflow

### Intermediate

1. Add custom steps
2. Customize parameters
3. Modify config values
4. Create execution guide
5. Test thoroughly

### Advanced

1. Create complex workflows
2. Integrate multiple tools
3. Add conditional logic
4. Optimize dependencies
5. Document patterns

---

## 💡 Tips and Tricks

### Tip 1: Use Config Inheritance

```yaml
config:
  base_path: src/myproject
  version_file: ${config.base_path}/version.py
  changelog_dir: ${config.base_path}/../docs/changelogs
```

### Tip 2: Make Steps Optional by Default

```yaml
steps:
  - id: step-5
    name: Optional Step
    required: false
    enabled: true  # Enable by default, can disable if needed
```

### Tip 3: Use Parameter Defaults

```yaml
parameters:
  - name: environment
    type: enum
    required: false
    default: staging
    options:
      - value: staging
      - value: production
```

### Tip 4: Document Customization Points

```yaml
# CUSTOMIZATION POINT: Update this path for your project
config:
  version_file: src/myproject/version.py
```

---

## 🔍 Troubleshooting

### Issue: Workflow fails with dependency error

**Solution:**
- Check step IDs match dependencies
- Verify step order
- Review dependency chain

### Issue: Config variables not resolving

**Solution:**
- Use `${config.variable_name}` syntax
- Check variable names match
- Verify config section exists

### Issue: Handler not found

**Solution:**
- Check handler naming
- Verify handler exists
- Update handler path

---

## 📝 Checklist for Customization

- [ ] Identified customization needs
- [ ] Generated base workflow
- [ ] Updated file paths
- [ ] Updated commands
- [ ] Added/removed steps as needed
- [ ] Updated dependencies
- [ ] Added parameters if needed
- [ ] Updated config values
- [ ] Created execution guide
- [ ] Tested workflow
- [ ] Documented customizations
- [ ] Validated workflow structure

---

## 🎯 Summary

**Key Takeaways:**

1. **Preserve patterns:** Maintain agent-driven execution pattern
2. **Use templates:** Start with template generator
3. **Customize config:** Use config variables, not hardcoded values
4. **Document changes:** Document all customizations
5. **Test thoroughly:** Test after each major change
6. **Follow best practices:** Use established patterns

**Next Steps:**

1. Review example workflows
2. Generate a workflow for your project
3. Customize as needed
4. Create execution guide
5. Test and iterate

---

_This guide provides comprehensive patterns for customizing workflows. Use it as a reference when adapting workflows to your specific needs._

