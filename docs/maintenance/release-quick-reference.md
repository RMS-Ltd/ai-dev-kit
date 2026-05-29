# Release Quick Reference

**Purpose:** One-page command summaries for common release scenarios  
**Version:** 1.0.0  
**Last Updated:** 2026-03-10  

---

## 🚨 Critical Reminder
**NEVER use manual git commit/push commands!** Always use Release Workflow (RW) automation.

---

## Registry Mode Quick Reference

### Pre-Release Checklist
```bash
# Check branch
git branch --show-current

# Validate branch safety
python3 "packages/frameworks/workflow mgt/scripts/validation/validate_branch_context.py" --strict

# Check configuration
grep "semver_mapping_strategy:" rw-config.yaml
```

### Execute Release
```bash
# Start Release Workflow
RW
```

### Post-Release Verification
```bash
# Verify tag
git tag -l | grep "v0.5.1.48+1"
git show v0.5.1.48+1 --stat

# Check GitHub release
gh release view v0.5.1.48+1
```

---

## Task-Touch Mode Quick Reference

### Pre-Release Checklist
```bash
# Check branch
git branch --show-current

# Validate branch safety
python3 "packages/frameworks/workflow mgt/scripts/validation/validate_branch_context.py" --strict

# Check configuration
grep "semver_mapping_strategy:" rw-config.yaml
```

### Execute Release
```bash
# Start Release Workflow
RW
```

### Post-Release Verification
```bash
# Verify SemVer tag
git tag -l | grep "v0.5.39+1"
git show v0.5.39+1 --stat

# Check GitHub release
gh release view v0.5.39+1
```

---

## Emergency Commands

### Check Release Status
```bash
git status
git log --oneline -5
git tag -l | tail -5
```

### Debug Mode
```bash
export RW_DEBUG=true
RW
```

### Configuration Check
```bash
python3 -c "import yaml; print('Config OK' if yaml.safe_load(open('rw-config.yaml')) else 'Config ERROR')"
```

---

## Common Troubleshooting

### Branch Issues
```bash
# Switch to correct epic branch
git checkout epic/{n}

# Clean up dirty state
git add -A
git commit -m "WIP: Clean up before release"
```

### Tag Conflicts
```bash
# Delete conflicting tag
git tag -d v0.5.1.48+1
git push origin :refs/tags/v0.5.1.48+1
```

### Permission Issues
```bash
# Check GitHub auth
gh auth status

# Set token
export GITHUB_TOKEN=your_token_here
```

---

## Configuration Switching

### Switch to Task-Touch Mode
```bash
cp rw-config.yaml rw-config.yaml.backup
sed -i.bak 's/semver_mapping_strategy: registry/semver_mapping_strategy: task_touch/' rw-config.yaml
```

### Switch to Registry Mode
```bash
cp rw-config.yaml rw-config.yaml.backup
sed -i.bak 's/semver_mapping_strategy: task_touch/semver_mapping_strategy: registry/' rw-config.yaml
```

---

## Version Formats

### Registry Mode
- **Tag Format:** `v0.5.1.48+1`
- **Schema:** `RC.EPIC.STORY.TASK+BUILD`

### Task-Touch Mode
- **Tag Format:** `v0.5.39+1`
- **Schema:** `MAJOR.MINOR.PATCH+BUILD`

---

**Remember:** Always respect the "no manual commit/push" policy!
