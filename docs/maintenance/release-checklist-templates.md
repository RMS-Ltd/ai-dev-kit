# Release Checklist Templates

**Purpose:** Printable pre/post release checklists for systematic release execution  
**Version:** 1.0.0  
**Last Updated:** 2026-03-10  

---

## 🚨 Critical Policy Reminder
**NEVER use manual git commit/push commands!** Always use Release Workflow (RW) automation.

---

## Pre-Release Checklist

### ✅ Branch Safety Validation

- [ ] **Check current branch**
  ```bash
  git branch --show-current
  ```
  Expected: `epic/\{n\}` format

- [ ] **Run branch safety validator**
  ```bash
  python3 "packages/frameworks/workflow mgt/scripts/validation/validate_branch_context.py" --strict
  ```
  Expected: Exit code 0 (PASS)

- [ ] **Verify git status is clean**
  ```bash
  git status --porcelain
  ```
  Expected: No uncommitted changes

### ✅ Configuration Verification

- [ ] **Check rw-config.yaml exists**
  ```bash
  ls -la rw-config.yaml
  ```
  Expected: File exists and readable

- [ ] **Verify SemVer mapping strategy**
  ```bash
  grep "semver_mapping_strategy:" rw-config.yaml
  ```
  Expected: `registry` or `task_touch`

- [ ] **Validate configuration syntax**
  ```bash
  python3 -c "import yaml; yaml.safe_load(open('rw-config.yaml'))"
  ```
  Expected: No syntax errors

### ✅ Dependencies Check

- [ ] **Check Python environment**
  ```bash
  python3 --version
  ```
  Expected: Python 3.8+

- [ ] **Verify validation scripts**
  ```bash
  ls -la "packages/frameworks/workflow mgt/scripts/validation/"
  ```
  Expected: All required scripts present

- [ ] **Test SemVer converter**
  ```bash
  python3 -c "from packages.frameworks.workflow_mgt.scripts.version.semver_converter import convert_version_string; print('SemVer converter OK')"
  ```
  Expected: No import errors

### ✅ Environment Validation

- [ ] **Check git remotes**
  ```bash
  git remote -v
  ```
  Expected: Proper GitHub remote configured

- [ ] **Verify network access**
  ```bash
  ping github.com
  ```
  Expected: Network connectivity available

- [ ] **Check GitHub authentication** (if using gh CLI)
  ```bash
  gh auth status
  ```
  Expected: Authenticated to GitHub

---

## Post-Release Verification Checklist

### ✅ Tag Creation Verification

#### For Registry Mode:
- [ ] **Verify internal version tag exists**
  ```bash
  git tag -l | grep "v0.5.1.48+1"
  ```
  Expected: Tag found

- [ ] **Verify tag points to correct commit**
  ```bash
  git show v0.5.1.48+1 --stat
  ```
  Expected: Tag shows release commit

- [ ] **Verify tag message format**
  ```bash
  git tag -l --format='%(refname:short) - %(subject)' | grep "v0.5.1.48+1"
  ```
  Expected: `v0.5.1.48+1 - Release v0.5.1.48+1: [summary]`

#### For Task-Touch Mode:
- [ ] **Verify SemVer tag exists**
  ```bash
  git tag -l | grep "v0.5.39+1"
  ```
  Expected: Tag found

- [ ] **Verify tag points to correct commit**
  ```bash
  git show v0.5.39+1 --stat
  ```
  Expected: Tag shows release commit

- [ ] **Verify tag message includes internal version**
  ```bash
  git tag -l --format='%(refname:short) - %(subject)' | grep "v0.5.39+1"
  ```
  Expected: `v0.5.39+1 - Release v0.5.39+1 (Internal: v0.5.1.48+1)`

### ✅ GitHub Release Validation

- [ ] **Check GitHub release exists**
  ```bash
  gh release list --limit 5
  ```
  Expected: Release appears in list

- [ ] **Verify GitHub release details**
  ```bash
  gh release view v0.5.39+1  # Task-touch
  # or
  gh release view v0.5.1.48+1  # Registry
  ```
  Expected: Release details correct

- [ ] **Check release assets** (if applicable)
  ```bash
  gh release view v0.5.39+1 --json assets
  ```
  Expected: Assets uploaded correctly

### ✅ Documentation Updates Verification

- [ ] **Verify README version updated**
  ```bash
  grep "Version:" README.md
  grep "v0.5.39+1" README.md  # Task-touch
  # or
  grep "v0.5.1.48+1" README.md  # Registry
  ```
  Expected: Version updated correctly

- [ ] **Check main changelog updated**
  ```bash
  head -10 CHANGELOG.md
  ```
  Expected: New entry at top

- [ ] **Verify detailed changelog created**
  ```bash
  ls -la docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.5.1.48+1.md
  ```
  Expected: File exists with content

### ✅ Kanban Updates Verification (if applicable)

- [ ] **Check Epic document updated**
  ```bash
  grep "v0.5.1.48+1" docs/project-management/kanban/epics/Epic-5/Epic-5.md
  ```
  Expected: Version markers added

- [ ] **Verify Story document updated**
  ```bash
  grep "v0.5.1.48+1" docs/project-management/kanban/epics/Epic-5/Story-001-*.md
  ```
  Expected: Version markers added

- [ ] **Check kanban board updated**
  ```bash
  grep "COMPLETE" docs/project-management/kanban/kboard.md
  ```
  Expected: Task marked complete

---

## Emergency Troubleshooting Checklist

### 🚨 Branch Issues

- [ ] **Switch to correct epic branch**
  ```bash
  git checkout epic/{n}
  ```

- [ ] **Clean up dirty state**
  ```bash
  git add -A
  git commit -m "WIP: Clean up before release"
  ```

- [ ] **Re-run branch validation**
  ```bash
  python3 "packages/frameworks/workflow mgt/scripts/validation/validate_branch_context.py" --strict
  ```

### 🚨 Configuration Issues

- [ ] **Backup current config**
  ```bash
  cp rw-config.yaml rw-config.yaml.backup
  ```

- [ ] **Create default config**
  ```bash
  cat > rw-config.yaml << EOF
  version_file: src/fynd_deals/version.py
  main_changelog: CHANGELOG.md
  changelog_dir: docs/changelog-and-release-notes/changelog-archive
  semver_mapping_strategy: registry
  EOF
  ```

- [ ] **Validate new config**
  ```bash
  python3 -c "import yaml; yaml.safe_load(open('rw-config.yaml'))"
  ```

### 🚨 Tag Conflicts

- [ ] **Check existing tags**
  ```bash
  git tag -l | grep "v0.5.1.48+1"
  ```

- [ ] **Delete conflicting tag**
  ```bash
  git tag -d v0.5.1.48+1
  git push origin :refs/tags/v0.5.1.48+1
  ```

- [ ] **Retry release**
  ```bash
  RW
  ```

### 🚨 Permission Issues

- [ ] **Check GitHub authentication**
  ```bash
  gh auth status
  ```

- [ ] **Set GitHub token**
  ```bash
  export GITHUB_TOKEN=your_token_here
  ```

- [ ] **Test git push**
  ```bash
  git push origin --dry-run
  ```

---

## Mode Switching Checklist

### Switch to Task-Touch Mode

- [ ] **Backup current configuration**
  ```bash
  cp rw-config.yaml rw-config.yaml.backup
  ```

- [ ] **Update SemVer strategy**
  ```bash
  sed -i.bak 's/semver_mapping_strategy: registry/semver_mapping_strategy: task_touch/' rw-config.yaml
  ```

- [ ] **Verify change**
  ```bash
  grep "semver_mapping_strategy:" rw-config.yaml
  ```

- [ ] **Test SemVer conversion**
  ```bash
  python3 -c "
  from packages.frameworks.workflow_mgt.scripts.version.semver_converter import convert_version_string
  print('Test conversion:', convert_version_string('0.5.1.48+1', 'task_touch'))
  "
  ```

### Switch to Registry Mode

- [ ] **Backup current configuration**
  ```bash
  cp rw-config.yaml rw-config.yaml.backup
  ```

- [ ] **Update SemVer strategy**
  ```bash
  sed -i.bak 's/semver_mapping_strategy: task_touch/semver_mapping_strategy: registry/' rw-config.yaml
  ```

- [ ] **Verify change**
  ```bash
  grep "semver_mapping_strategy:" rw-config.yaml
  ```

---

## Final Release Sign-Off

### ✅ Release Completion Confirmation

- [ ] **All pre-release checks passed**
- [ ] **Release Workflow completed successfully**
- [ ] **All post-release verifications passed**
- [ ] **Documentation updated correctly**
- [ ] **No errors or warnings in release logs**

### 📝 Release Notes

- **Release Version:** ____________________
- **Release Mode:** ____________________
- **Release Date:** ____________________
- **Tasks Completed:** ____________________
- **Issues Encountered:** ____________________
- **Special Notes:** ____________________

### ✅ Release Approval

- [ ] **Release verified by:** ____________________
- [ ] **Release approved by:** ____________________
- [ ] **Release sign-off date:** ____________________

---

**Remember:** Always respect the "no manual commit/push" policy - use Release Workflow automation for all git operations!
