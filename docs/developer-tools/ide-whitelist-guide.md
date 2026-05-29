# IDE Command Whitelist Guide

## Overview

This guide explains how to use the pattern-based whitelist configuration to reduce approval friction when running commands in the IDE.

## Problem Solved

**Before**: Every slight variation of a command required manual approval

- `python "packages/frameworks/workflow mgt/scripts/validation/validate_branch_context.py" --strict`
- `python "packages/frameworks/workflow mgt/scripts/validation/validate_changelog_format.py"`
- `git commit -m "Message 1"`
- `git commit -m "Message 2"`

**After**: Pattern-based approval handles variations automatically

- Pattern: `^python "packages/frameworks/workflow mgt/scripts/validation/validate_[a-z_]+\.py"(\s+--\w+)?$`
- All validation script variations approved automatically

## Configuration Files

### Primary Configuration

- **File**: `.cursor/whitelist-patterns.yaml`
- **Purpose**: Defines pattern-based whitelist entries
- **Format**: YAML with regex patterns and examples

### Task Documentation

- **File**: `docs/project-management/kanban/epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T107-ide-command-whitelist-optimization.md`
- **Purpose**: Task tracking and implementation details

## Pattern Categories

### 1. Python Scripts

```yaml
python_validation_scripts:
  pattern: '^python "packages/frameworks/workflow mgt/scripts/validation/validate_[a-z_]+\.py"(\s+--\w+)?(\s+--strict)?$'
```

**Covers**:

- All validation scripts in the framework package
- Optional flags like `--strict`
- Different validation script names

**Examples**:

- ✅ `python "packages/frameworks/workflow mgt/scripts/validation/validate_branch_context.py" --strict`
- ✅ `python "packages/frameworks/workflow mgt/scripts/validation/validate_changelog_format.py"`
- ❌ `python "other/script.py"` (different path)

### 2. Git Operations

```yaml
git_basic_operations:
  pattern: '^git (add|status|commit|push|tag|checkout|branch|log|diff|restore|show|reset|merge|pull|fetch)(\s+-[a-zA-Z])?(\s+.*)?$'
```

**Covers**:

- All standard git commands
- Optional flags and parameters
- Any commit message or branch name

**Examples**:

- ✅ `git add -A`
- ✅ `git commit -m "Any message"`
- ✅ `git push origin any-branch`
- ❌ `git-custom-command` (not in allowed commands)

### 3. File Operations

```yaml
file_edit_operations:
  pattern: '^(edit|multi_edit|edit_notebook|write_to_file)(\s+.*)?$'
```

**Covers**:

- All file editing operations
- Any file path
- Any content

**Examples**:

- ✅ `edit --file_path any/path/file.md --old_string "old" --new_string "new"`
- ✅ `write_to_file --target_file new/file.md --code_content "content"`
- ❌ `custom-edit-command` (not in allowed operations)

## Security Contexts

### High Security (Manual Approval Required)

- Git operations (can change repository state)
- File editing operations (can modify files)
- Terminal commands (can execute arbitrary commands)

### Medium Security (Configurable Approval)

- Python scripts (can execute code)
- File searches (can read sensitive data)
- Directory operations (can explore file system)

### Low Security (Auto-Approve Recommended)

- Memory operations (internal data management)
- Todo operations (task management)

## Adding New Patterns

### 1. Identify Common Command Variations

```bash
# Collect examples of commands that need approval
python "packages/frameworks/workflow mgt/scripts/validation/validate_branch_context.py" --strict
python "packages/frameworks/workflow mgt/scripts/validation/validate_changelog_format.py"
python "packages/frameworks/workflow mgt/scripts/validation/validate_version_bump.py" --verbose
```

### 2. Create Regex Pattern

```regex
^python "packages/frameworks/workflow mgt/scripts/validation/validate_[a-z_]+\.py"(\s+--\w+)?(\s+--strict)?$
```

### 3. Add to Configuration

```yaml
new_pattern_name:
  pattern: '^python "packages/frameworks/workflow mgt/scripts/validation/validate_[a-z_]+\.py"(\s+--\w+)?(\s+--strict)?$'
  description: "Description of what this pattern covers"
  examples:
    - 'Example command 1'
    - 'Example command 2'
```

### 4. Test Pattern

- Test against known good commands
- Test against potentially dangerous commands
- Verify pattern isn't too broad or too narrow

## Troubleshooting

### Pattern Not Matching
1. **Check regex syntax**: Use online regex testers
2. **Verify escaping**: Special characters may need escaping
3. **Test with examples**: Ensure pattern matches expected commands

### Pattern Too Broad

1. **Add anchors**: Use `^` and `$` to match start/end
2. **Be more specific**: Include more path or parameter details
3. **Use character classes**: `[a-zA-Z0-9_-]` instead of `.`

### Pattern Too Narrow

1. **Remove restrictions**: Loosen parameter requirements
2. **Add alternatives**: Use `|` for multiple options
3. **Use quantifiers**: `*`, `+`, `?` for optional parts

## Maintenance

### Monthly Review

- Check pattern usage logs
- Identify new command patterns
- Remove unused patterns
- Update examples

### Performance Monitoring

- Monitor pattern matching performance
- Identify slow regex patterns
- Optimize frequently used patterns

### Team Updates

- Share new patterns with team
- Document pattern changes
- Train team members on usage

## Best Practices

### 1. Start Specific, Broaden Gradually

```yaml
# Too broad (security risk)
dangerous_pattern: '^.*$'

# Better (specific and safe)
safe_pattern: '^python "packages/frameworks/workflow mgt/scripts/validation/[a-z_]+\.py".*$'
```

### 2. Use Descriptive Names

```yaml
# Bad
pattern1: '.*'

# Good
python_validation_scripts: '^python "packages/frameworks/workflow mgt/scripts/validation/.*\.py".*$'
```

### 3. Provide Examples

```yaml
good_pattern:
  pattern: '^git commit.*$'
  description: "Git commit operations"
  examples:
    - 'git commit -m "Feature: Add new feature"'
    - 'git commit -m "Fix: Resolve issue #123"'
```

### 4. Document Security Implications

```yaml
high_risk_pattern:
  pattern: '^rm.*$'
  description: "File deletion operations (HIGH RISK)"
  security_context: "high_security"
  warning: "This pattern allows file deletion. Use with caution."
```

## Implementation Status

- [x] Configuration file created
- [x] Core patterns implemented
- [x] Documentation created
- [ ] IDE integration testing
- [ ] Team training completed
- [ ] Performance monitoring setup

## Support

For questions or issues with the whitelist configuration:

1. Check this documentation
2. Review the task document: T107
3. Test patterns with regex testers
4. Consult with team members

---

**Last Updated**: 2026-03-07  
**Version**: 1.0  
**Maintainer**: Development Team
