# Release Workflow

## Overview

The Release Workflow (RW) automates the complete release process for AI Dev Kit projects, including version management, changelog maintenance, kanban reconciliation, commit, tag creation, and optional GitHub release publishing. It ensures consistent, traceable releases with comprehensive validation at every step.

## 🎯 Purpose

To deliver standardized, validated releases with version bumps, changelogs, documentation updates, and git tagging — all through an intelligent agent-driven workflow that enforces branch safety, task document requirements, and quality gates.

## 🚨 Prerequisites

### Framework Requirements
- AI Dev Kit workflow management framework installed
- Git repository with clean working tree
- Task document for the release task (required by FR-060)

### Setup Requirements
- `rw-config.yaml` configured with project paths
- Version file accessible (e.g., `src/{project}/version.py`)
- Changelog directories created
- Validators in `scripts_path` executable

## ⚡ Quick Start

### Basic Usage
```bash
# Full release for task E2:S01:T10
RW E2:S01:T10

# Documentation-only release
RW -d E2:S01:T08

# Kanban-init release
RW -k E6:S01:T38
```

### Expected Outcome
- Version bumped in version file
- Detailed changelog created
- README updated with new version
- Kanban board reconciled
- Git commit and tag created
- Changes pushed to remote

## ⚙️ Configuration

### YAML Configuration (`release-workflow-config.yaml`)
```yaml
workflow:
  name: "Release Workflow"
  abbreviation: "RW"
  version: "1.0.0"
  description: "Complete release process with version management"

defaults:
  version_file: "src/{project}/version.py"
  changelog_dir: "docs/changelog-and-release-notes/changelog-archive"
  main_changelog: "CHANGELOG.md"
  readme_file: "README.md"
  kanban_root: "docs/project-management/kanban"
  scripts_path: "packages/frameworks/workflow mgt/scripts/validation"
```

### Configuration Options
| Option | Type | Default | Description |
|--------|------|---------|-------------|
| version_file | string | src/{project}/version.py | Path to version file |
| changelog_dir | string | docs/changelog-and-release-notes/changelog-archive | Changelog archive directory |
| main_changelog | string | CHANGELOG.md | Main changelog file |
| readme_file | string | README.md | README to update |
| kanban_root | string | docs/project-management/kanban | Kanban documentation root |
| scripts_path | string | packages/frameworks/workflow mgt/scripts/validation | Validation scripts directory |

## 📋 Usage Examples

### Example 1: Standard Release
```bash
# Execute full release workflow
RW E2:S01:T10

# Expected output:
# ✓ Branch safety check passed
# ✓ Version bumped to next build
# ✓ Detailed changelog created
# ✓ README updated
# ✓ Kanban reconciled
# ✓ Git commit and tag created
# ✓ Changes pushed to remote
```

### Example 2: Documentation-Only Release
```bash
# Update docs without git tag/push
RW -d E2:S01:T08

# Expected output:
# ✓ Version bumped
# ✓ Changelog updated
# ✓ README updated
# ✓ Kanban reconciled
# ✓ Commit created (no tag, no push)
```

### Example 3: Adopt Requested Task Release
```bash
# Release with --art flag when task differs from version context
RW E2S6T1 --art

# Expected output:
# ✓ Task intent validated
# ✓ Version adopted to requested task
# ✓ Full release cycle completed
```

## 🔧 Advanced Usage

### Custom Configuration
Modify `release-workflow-config.yaml` to adjust paths for your project structure:

```yaml
defaults:
  version_file: "my_project/version.py"
  scripts_path: "custom/scripts/validation"
```

### Integration with Other Workflows
- **Package Version Workflow (PVW):** Step 2.5 automatically bumps package versions
- **Changelog Management Workflow (CMW):** Step 9.5 archives changelogs when threshold exceeded
- **Post-Implementation Review (PIR):** Step 15 auto-triggers PIR when Epic/Story complete

### Execution Paths
| Mode | Steps | Skips |
|------|-------|-------|
| Full Release (`RW`) | 1–17 | None |
| Docs-Only (`RW -d`) | 1–14 | git_tag, push, pir_trigger, housekeeping |
| Kanban-Init (`RW -k`) | 1–13 | tag, push, release |

## 🐛 Troubleshooting

### Common Issues

#### Issue: Branch Safety Check Fails
**Symptoms:** `validate_branch_context.py --strict` returns non-zero
**Causes:** Not on correct branch, uncommitted changes, or branch context mismatch
**Solutions:**
```bash
# Check current branch
git branch

# Ensure clean working tree
git status

# Run validator manually
python scripts/validation/validate_branch_context.py --strict
```

#### Issue: Task Document Not Found
**Symptoms:** `validate_rw_task_complete.py` cannot find task doc
**Causes:** Task ID not in message, task doc missing, or task status not releasable
**Solutions:**
```bash
# Ensure task ID is in the same message as RW trigger
RW E2:S01:T10

# Verify task doc exists and status is IN PROGRESS or COMPLETE
```

#### Issue: Version Bump Validator Fails
**Symptoms:** `validate_version_bump.py` rejects the version change
**Causes:** Version not bumped correctly, doc-init state not detected, or format issues
**Solutions:**
```bash
# Check current version
cat src/*/version.py

# Run validator manually
python scripts/validation/validate_version_bump.py --requested E2:S01:T10
```

### Debug Mode
```bash
# Enable verbose validator output
python scripts/validation/validate_branch_context.py --strict --verbose

# Run individual steps
python scripts/release/step_1_branch_check.py --requested E2:S01:T10
```

## ❓ FAQ

### Q: Can I skip the branch safety check?
**A:** No. Step 1 is mandatory and blocking. It cannot be bypassed without modifying the workflow configuration.

### Q: What happens if a validator fails?
**A:** The workflow aborts immediately (RW ABORTED) and remaining steps are marked as cancelled. Fix the issue and re-trigger.

### Q: How do I handle doc-init builds (+0)?
**A:** RW auto-detects doc-init state when no functional changes exist. The version becomes `RC.EPIC.STORY.TASK+0`.

## 🔗 Integration

### Workflow Dependencies
- **Required:** Kanban system with task documents (Step 7)
- **Optional:** PVW (Step 2.5), CMW (Step 9.5), PIR (Step 15)
- **Enhanced by:** Testing Workflow (pre-release validation)

### Data Flow
```
Task Document → Version Bump → Changelog → README → Kanban → Commit → Tag → Push → Release
```

## 📚 Reference

### CLI Commands
```bash
# Full release
RW E{epic}:S{story}:T{task}

# Documentation-only
RW -d E{epic}:S{story}:T{task}

# Kanban-init
RW -k E{epic}:S{story}:T{task}

# With --art flag
RW E{epic}S{story}T{task} --art
```

### Step-by-Step Execution
1. **Step 1**: Branch Safety Check — `validate_branch_context.py --strict`
2. **Step 2**: Bump Version — Update version file
3. **Step 2.5**: Package Version Workflow — Bump package versions
4. **Step 3**: Create Detailed Changelog — Archive and create changelog entry
5. **Step 4**: Update Main Changelog — Prepend entry to CHANGELOG.md
6. **Step 5**: Update README — Bump version badge and text
7. **Step 6**: Update BR/FR Docs — Add fix/resolution status
8. **Step 7**: Scoped Kanban Reconciliation — Update task status and board
9. **Step 8**: Stage Files — `git add -A`
10. **Step 9**: Run Validators — Multiple validation scripts
11. **Step 9.5**: CMW — Archive changelog if threshold exceeded
12. **Step 10**: Commit — `git commit`
13. **Step 11**: Create Git Tag — Annotated tags for internal and SemVer
14. **Step 12**: Push to Remote — `git push origin {branch} --tags`
15. **Step 12.5**: GitHub Release — Create release via API
16. **Step 13**: PIR Trigger — Check for post-implementation review
17. **Step 14–16**: Verification, Action, Housekeeping

### Configuration Reference
See `release-workflow-config.yaml` for complete configuration options and step-specific settings.

## 🎯 Best Practices

### Do's
- ✅ Always include the task ID in the same message as the RW trigger
- ✅ Ensure task document status is releasable before triggering
- ✅ Run validators manually if troubleshooting
- ✅ Use `--art` flag when releasing for a task different from current version context

### Don'ts
- ❌ Skip branch safety checks or validators
- ❌ Trigger RW without a valid task document
- ❌ Force-push after RW has created tags
- ❌ Modify version file manually outside RW

## 🔄 Version Compatibility

| Workflow Version | Framework Version | Notes |
|------------------|-------------------|-------|
| 1.0.0 | v0.4.14.3+ | Initial release with 13 steps |
| 1.4.0 | v0.4.14.3+ | Added Step 1: Branch Safety Check |
| 1.8.0 | v0.5.0.0+ | Added Step 15: PIR Trigger |
| 1.9.0 | v0.5.1.0+ | Added Step 17: Housekeeping |
| 1.10.0 | v0.5.1.0+ | Added Step 12.5: GitHub Release |

## 📞 Support

### Getting Help
- **Documentation**: [Release Workflow Agent Execution Guide](../../KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md)
- **Reference**: [Release Workflow Reference](../../KB/Documentation/Developer_Docs/vwmp/release-workflow-reference.md)
- **Community**: [AI Dev Kit Discussions](https://github.com/earlution/ai-dev-kit/discussions)
- **Issues**: [File an issue](https://github.com/earlution/ai-dev-kit/issues)

### Contributing
Follow the AI Dev Kit contributing guidelines for workflow documentation updates.

---

## 📊 Workflow Metadata

- **Type**: release
- **Abbreviation**: RW
- **Triggers**: ["RW", "RW -k", "RW -d"]
- **Steps**: 17
- **Dependencies**: Kanban system, Git repository
- **Configuration**: `release-workflow-config.yaml`

**Last Updated**: 2026-05-15  
**Framework Version**: v0.5.1.35+  
**Maintainer**: AI Dev Kit Team
