# Release Runbook

**Version:** 1.0.0  
**Last Updated:** 2026-03-10  
**Purpose:** Comprehensive guide for executing releases with exact commands and procedures  
**Scope:** ai-dev-kit project releases supporting both registry and task-touch SemVer modes  

---

## 🚨 Critical Policy: "No Manual Commit/Push"

**MANDATORY:** This runbook respects the "no manual commit/push" policy. All git operations must use the Release Workflow (RW) automation rather than manual git commands.

**Policy Requirements:**
- ❌ **NEVER** use manual `git commit` commands
- ❌ **NEVER** use manual `git push` commands  
- ✅ **ALWAYS** use Release Workflow (RW) automation
- ✅ **ALWAYS** follow the documented command sequences

---

## 📋 Pre-Release Checklist

### Step 1: Branch Safety Validation
**Purpose:** Ensure you're on the correct branch before starting release

```bash
# Check current branch
git branch --show-current

# Verify branch alignment (should be epic/{n} format)
git status

# Run branch safety validator (MANDATORY)
python3 "packages/frameworks/workflow mgt/scripts/validation/validate_branch_context.py" --strict
```

**Expected Output:**
```
✅ Branch context validation PASSED
Current branch: epic/{n}
Epic alignment: CORRECT
```

**Validation:**
- Exit code must be 0 (PASS)
- If non-zero, **STOP** and fix branch issues before proceeding

---

### Step 2: Configuration Verification
**Purpose:** Verify rw-config.yaml and SemVer strategy

```bash
# Check if rw-config.yaml exists
ls -la rw-config.yaml

# Verify SemVer mapping strategy
grep "semver_mapping_strategy:" rw-config.yaml
```

**Expected Outputs:**

**Registry Mode:**
```yaml
semver_mapping_strategy: registry
```

**Task-Touch Mode:**
```yaml
semver_mapping_strategy: task_touch
```

**Validation:**
- Config file must exist and be readable
- SemVer strategy must be explicitly set
- If missing, create config with appropriate strategy

---

### Step 3: Dependencies Check
**Purpose:** Verify required tools and permissions

```bash
# Check Python environment
python3 --version

# Check validation scripts
ls -la "packages/frameworks/workflow mgt/scripts/validation/"

# Test SemVer converter
python3 -c "from packages.frameworks.workflow_mgt.scripts.version.semver_converter import convert_version_string; print('SemVer converter OK')"
```

**Expected Output:**
```
Python 3.x.x
SemVer converter OK
```

**Validation:**
- Python 3.8+ must be available
- Validation scripts must be present
- SemVer converter must be importable

---

### Step 4: Environment Validation
**Purpose:** Verify release prerequisites

```bash
# Check git remotes
git remote -v

# Verify git status (should be clean)
git status --porcelain

# Check for uncommitted changes
git diff --stat
```

**Expected Output:**
```
origin  https://github.com/earlution/ai-dev-kit.git (fetch)
origin  https://github.com/earlution/ai-dev-kit.git (push)
```

**Validation:**
- Git remote must be properly configured
- Working directory must be clean (no uncommitted changes)
- Network access must be available for git operations

---

## � UCW – Update Changelog Workflow (Manual Stewardship)

**Scope:** UCW keeps `CHANGELOG.md` limited to the most recent 20 releases via a manual, checklist-driven process documented in `docs/implementation-cycles/ICW-E7S01T06-specification.md`.

### When to Run UCW
- After RW Step 3 (Detailed Changelog) and before Step 8 (Validators).
- Whenever changelog edits risk exceeding retention or violating ordering.

### UCW Checklist (Manual)
1. **Prepare:** Copy current `CHANGELOG.md`, archive files, and UCW checklist template (`docs/maintenance/logs/ucw/UCW-<date>.md`).
2. **Review:** Verify ordering, duplicates, date format, and identify entries beyond the retention threshold (default 20).
3. **Trim & Archive:** Manually edit `CHANGELOG.md`, keeping top 20 entries. Move older entries to archive files with backlinks, capturing diffs/screenshots.
4. **Validate:** Run read-only validators (ordering checker, markdownlint) and capture outputs.
5. **Record:** Complete UCW checklist (operator, reviewer, versions moved), store under `docs/maintenance/logs/ucw/`, and reference it in the RW log.

### CI Hook (`ucw-verification`)
- Read-only job that checks for:
  - Latest UCW checklist file matching the run date.
  - Evidence attachments (diff hash, validator output).
  - Confirmation that `CHANGELOG.md` lists ≤ 20 entries.
- Fails RW Step 8 if evidence is missing. Hook **never** edits changelog files.

### References
- Spec/Test/Plan: `docs/implementation-cycles/ICW-E7S01T06-*.md`
- Task: `docs/project-management/kanban/epics/Epic-7/Story-001-codebase-maintenance-tasks/T06-update-changelog-workflow.md`
- FR: `docs/project-management/kanban/fr-br/FR-057-update-changelog-workflow.md`

---

## �🚀 Release Execution Commands

### Registry Mode Commands

#### Step 1: Start Release Workflow
```bash
# Trigger Release Workflow (RW)
RW
```

**Expected Output:**
```
🚀 Release Workflow (RW) triggered
📋 Starting 17-step release process
✅ Step 1: Branch Safety Check - MANDATORY
```

#### Step 2: Monitor Progress
The Release Workflow will automatically execute all 17 steps:

1. ✅ Branch Safety Check
2. ✅ Bump Version  
3. ✅ Create Detailed Changelog
4. ✅ Update Main Changelog
5. ✅ Update README
6. ✅ Update BR/FR Docs
7. ✅ Auto-update Kanban Docs
8. ✅ Stage Files
9. ✅ IDE Problem Check
10. ✅ Run Validators
11. ✅ Commit Changes
12. ✅ Create Git Tag (v&lbrace;internal_version&rbrace;)
13. ✅ Push to Remote
14. ✅ Post-Commit Verification
15. ✅ Act on Results
16. ✅ Check for PIR Trigger
17. ✅ Housekeeping

**Expected Final Tag:** `v0.5.1.48+1` (internal version format)

---

### Task-Touch Mode Commands

#### Step 1: Start Release Workflow
```bash
# Trigger Release Workflow (RW)
RW
```

**Expected Output:**
```
🚀 Release Workflow (RW) triggered
📋 Starting 17-step release process
🔍 SemVer strategy: task_touch detected
✅ Step 1: Branch Safety Check - MANDATORY
```

#### Step 2: Monitor Progress
The Release Workflow will automatically execute all 17 steps with task-touch SemVer tagging:

1. ✅ Branch Safety Check
2. ✅ Bump Version
3. ✅ Create Detailed Changelog  
4. ✅ Update Main Changelog
5. ✅ Update README
6. ✅ Update BR/FR Docs
7. ✅ Auto-update Kanban Docs
8. ✅ Stage Files
9. ✅ IDE Problem Check
10. ✅ Run Validators
11. ✅ Commit Changes
12. ✅ Create Git Tag (v&lbrace;semver_version&rbrace; + optional internal tag)
13. ✅ Push to Remote
14. ✅ Post-Commit Verification
15. ✅ Act on Results
16. ✅ Check for PIR Trigger
17. ✅ Housekeeping

**Expected Final Tags:**
- **Primary:** `v0.5.39+1` (SemVer format)
- **Optional Internal:** `v0.5.1.48+1` (if create_internal_tag enabled)

---

## 🏷️ Tagging Strategy Guide

### Registry Mode Configuration

#### Setup
```yaml
# rw-config.yaml
semver_mapping_strategy: registry
version_file: src/fynd_deals/version.py
main_changelog: CHANGELOG.md
changelog_dir: docs/changelog-and-release-notes/changelog-archive
```

#### Tag Creation Process
```bash
# Registry mode creates internal version tags
# Format: v{RC.EPIC.STORY.TASK+BUILD}
# Example: v0.5.1.48+1
```

#### Verification
```bash
# Verify tag creation
git tag -l | grep "v0.5.1.48+1"

# Show tag details
git show v0.5.1.48+1
```

**Expected Output:**
```
tag v0.5.1.48+1
Release v0.5.1.48+1: Release summary

Epic: 5 | Story: 1 | Task: 48
```

---

### Task-Touch Mode Configuration

#### Setup
```yaml
# rw-config.yaml
semver_mapping_strategy: task_touch
version_file: src/fynd_deals/version.py
main_changelog: CHANGELOG.md
changelog_dir: docs/changelog-and-release-notes/changelog-archive
```

#### Tag Creation Process
```bash
# Task-touch mode creates SemVer tags
# Format: v{MAJOR.MINOR.PATCH+BUILD}
# Example: v0.5.39+1
```

#### Verification
```bash
# Verify SemVer tag creation
git tag -l | grep "v0.5.39+1"

# Show tag details
git show v0.5.39+1
```

**Expected Output:**
```
tag v0.5.39+1
Release v0.5.39+1 (Internal: v0.5.1.48+1)

Epic: 5 | Story: 1 | Task: 48
```

---

### Configuration Switching Procedures

#### Switch from Registry to Task-Touch
```bash
# 1. Backup current config
cp rw-config.yaml rw-config.yaml.backup

# 2. Update strategy
sed -i.bak 's/semver_mapping_strategy: registry/semver_mapping_strategy: task_touch/' rw-config.yaml

# 3. Verify change
grep "semver_mapping_strategy:" rw-config.yaml

# 4. Test SemVer conversion
python3 -c "
from packages.frameworks.workflow_mgt.scripts.version.semver_converter import convert_version_string
print('Test conversion:', convert_version_string('0.5.1.48+1', 'task_touch'))
"
```

#### Switch from Task-Touch to Registry
```bash
# 1. Backup current config
cp rw-config.yaml rw-config.yaml.backup

# 2. Update strategy
sed -i.bak 's/semver_mapping_strategy: task_touch/semver_mapping_strategy: registry/' rw-config.yaml

# 3. Verify change
grep "semver_mapping_strategy:" rw-config.yaml
```

---

## ✅ Post-Release Verification

### Step 1: Tag Creation Verification

#### Registry Mode Verification
```bash
# Verify tag exists
git tag -l | grep "v0.5.1.48+1"

# Verify tag points to correct commit
git log --oneline -1
git show v0.5.1.48+1 --stat

# Verify tag message
git tag -l --format='%(refname:short) - %(subject)' | grep "v0.5.1.48+1"
```

**Expected Output:**
```
v0.5.1.48+1 - Release v0.5.1.48+1: Release summary
```

#### Task-Touch Mode Verification
```bash
# Verify SemVer tag exists
git tag -l | grep "v0.5.39+1"

# Verify tag points to correct commit
git log --oneline -1
git show v0.5.39+1 --stat

# Verify tag message includes internal version
git tag -l --format='%(refname:short) - %(subject)' | grep "v0.5.39+1"
```

**Expected Output:**
```
v0.5.39+1 - Release v0.5.39+1 (Internal: v0.5.1.48+1)
```

---

### Step 2: GitHub Release Validation

#### Check GitHub Release
```bash
# List GitHub releases (requires gh CLI)
gh release list --limit 5

# Check specific release details
gh release view v0.5.39+1  # Task-touch mode
# or
gh release view v0.5.1.48+1  # Registry mode
```

**Expected Output:**
```
v0.5.39+1
Release v0.5.39+1 (Internal: v0.5.1.48+1)
Published: 2026-03-10T12:00:00Z
```

---

### Step 3: Package Publishing Confirmation

#### Check Package Publishing (if applicable)
```bash
# Check if packages were built and uploaded
ls -la packages/frameworks/dist/packages/

# Verify GitHub release assets
gh release view v0.5.39+1 --json assets
```

---

### Step 4: Documentation Updates Verification

#### Verify README Update
```bash
# Check version in README
grep "Version:" README.md
grep "v0.5.39+1" README.md  # Task-touch mode
# or
grep "v0.5.1.48+1" README.md  # Registry mode
```

#### Verify Changelog Update
```bash
# Check main changelog
head -10 CHANGELOG.md

# Check detailed changelog
ls -la docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.5.1.48+1.md
```

---

## 🔧 Troubleshooting Guide

### Common Issues and Solutions

#### Issue 1: Branch Safety Validation Failure
**Error:** `Branch context validation FAILED`

**Causes:**
- Wrong branch (not epic/\{n\})
- Branch doesn't match version
- Git state is dirty

**Solutions:**
```bash
# Check current branch
git branch --show-current

# Switch to correct epic branch
git checkout epic/{n}

# Clean up dirty state
git add -A
git commit -m "WIP: Clean up before release"

# Re-run validation
python3 "packages/frameworks/workflow mgt/scripts/validation/validate_branch_context.py" --strict
```

---

#### Issue 2: SemVer Strategy Not Detected
**Error:** `SemVer strategy not found in configuration`

**Causes:**
- Missing rw-config.yaml
- Invalid semver_mapping_strategy value
- Configuration file syntax error

**Solutions:**
```bash
# Check if config exists
ls -la rw-config.yaml

# Create config if missing
cat > rw-config.yaml << EOF
version_file: src/fynd_deals/version.py
main_changelog: CHANGELOG.md
changelog_dir: docs/changelog-and-release-notes/changelog-archive
semver_mapping_strategy: registry  # or task_touch
EOF

# Validate config syntax
python3 -c "import yaml; yaml.safe_load(open('rw-config.yaml'))"
```

---

#### Issue 3: Tag Collision
**Error:** `Tag already exists`

**Causes:**
- Tag already created for this version
- Previous release attempt failed

**Solutions:**
```bash
# Check existing tags
git tag -l | grep "v0.5.1.48+1"

# Delete conflicting tag (if necessary)
git tag -d v0.5.1.48+1
git push origin :refs/tags/v0.5.1.48+1

# Increment version and retry
# (This should be handled automatically by RW)
```

---

#### Issue 4: Permission Problems
**Error:** `Permission denied` or `Authentication failed`

**Causes:**
- Missing GitHub token
- Insufficient repository permissions
- Network connectivity issues

**Solutions:**
```bash
# Check GitHub authentication
gh auth status

# Set up GitHub token (if needed)
export GITHUB_TOKEN=your_token_here

# Test git push permissions
git push origin --dry-run
```

---

#### Issue 5: Network/CI Issues
**Error:** `Network access denied` or `Connection failed`

**Causes:**
- Firewall blocking git operations
- GitHub API rate limiting
- Network connectivity problems

**Solutions:**
```bash
# Test network connectivity
ping github.com

# Check git remote configuration
git remote -v

# Try manual push (for debugging)
git push origin --dry-run

# Use SSH instead of HTTPS (if needed)
git remote set-url origin git@github.com:earlution/ai-dev-kit.git
```

---

### Advanced Troubleshooting

#### Debug Mode Release
```bash
# Enable verbose logging
export RW_DEBUG=true

# Run release with debug output
RW
```

#### Manual Rollback
```bash
# Reset to previous commit (emergency only)
git reset --hard HEAD~1

# Delete problematic tag
git tag -d v0.5.1.48+1
git push origin :refs/tags/v0.5.1.48+1

# Restore from backup
git reflog
git reset --hard HEAD@{1}
```

---

## 📋 Quick Reference Cards

### Registry Mode Quick Reference

```bash
# 1. Pre-Release Checks
git branch --show-current
python3 "packages/frameworks/workflow mgt/scripts/validation/validate_branch_context.py" --strict
grep "semver_mapping_strategy:" rw-config.yaml

# 2. Execute Release
RW

# 3. Verify
git tag -l | grep "v0.5.1.48+1"
git show v0.5.1.48+1 --stat
```

---

### Task-Touch Mode Quick Reference

```bash
# 1. Pre-Release Checks  
git branch --show-current
python3 "packages/frameworks/workflow mgt/scripts/validation/validate_branch_context.py" --strict
grep "semver_mapping_strategy:" rw-config.yaml

# 2. Execute Release
RW

# 3. Verify
git tag -l | grep "v0.5.39+1"
git show v0.5.39+1 --stat
```

---

### Emergency Commands

```bash
# Check release status
git status
git log --oneline -5

# Verify tags
git tag -l | tail -5

# Check remotes
git remote -v

# Validate configuration
python3 -c "import yaml; print('Config OK' if yaml.safe_load(open('rw-config.yaml')) else 'Config ERROR')"
```

---

## 📝 Appendix

### Configuration Examples

#### Registry Mode Configuration
```yaml
# rw-config.yaml
version_file: src/fynd_deals/version.py
main_changelog: CHANGELOG.md
changelog_dir: docs/changelog-and-release-notes/changelog-archive
scripts_path: packages/frameworks/workflow mgt/scripts
readme_file: README.md
semver_mapping_strategy: registry
use_kanban: true
kanban_root: docs/project-management/kanban
```

#### Task-Touch Mode Configuration
```yaml
# rw-config.yaml
version_file: src/fynd_deals/version.py
main_changelog: CHANGELOG.md
changelog_dir: docs/changelog-and-release-notes/changelog-archive
scripts_path: packages/frameworks/workflow mgt/scripts
readme_file: README.md
semver_mapping_strategy: task_touch
use_kanban: true
kanban_root: docs/project-management/kanban
```

---

### Integration Examples

#### GitHub Actions Integration
```yaml
# .github/workflows/release.yml
name: Release
on:
  workflow_dispatch:
    inputs:
      mode:
        description: 'Release mode'
        required: true
        default: 'registry'
        type: choice
        options:
        - registry
        - task_touch

jobs:
  release:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Configure SemVer Strategy
        run: |
          sed -i "s/semver_mapping_strategy: .*/semver_mapping_strategy: ${{ github.event.inputs.mode }}/" rw-config.yaml
      - name: Execute Release
        run: |
          echo "RW" | python3 -c "
import sys
sys.path.insert(0, 'packages/frameworks/workflow mgt/scripts')
from workflow_orchestrator import WorkflowOrchestrator
wo = WorkflowOrchestrator()
wo.execute_workflow('release-workflow.yaml')
"
```

---

### Version Schema Reference

#### Internal Version Format
```
RC.EPIC.STORY.TASK+BUILD
Example: 0.5.1.48+1
- RC: Release Candidate (0 = development)
- EPIC: Epic number (5)
- STORY: Story number (1)  
- TASK: Task number (48)
- BUILD: Build number (1)
```

#### SemVer Format (Task-Touch Mode)
```
MAJOR.MINOR.PATCH+BUILD
Example: 0.5.39+1
- MAJOR: RC (0 = development)
- MINOR: Epic number (5)
- PATCH: Task-touch counter (39)
- BUILD: Build number (1)
```

---

## 📞 Support and Escalation

### Getting Help
1. **Check this runbook first** - most issues are covered here
2. **Review release logs** - check RW output for specific error messages
3. **Consult team** - escalate to release team if issues persist

### Documentation Updates
- **Runbook updates** should be made when procedures change
- **New troubleshooting steps** should be added when issues are discovered
- **Configuration examples** should be updated when new options are added

---

**Runbook Version:** 1.0.0  
**Last Updated:** 2026-03-10  
**Next Review:** 2026-04-10  

**Remember:** Always respect the "no manual commit/push" policy - use Release Workflow automation for all git operations!
