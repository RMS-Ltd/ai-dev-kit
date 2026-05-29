---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:02:07Z
expires_at: null
housekeeping_policy: keep
---

# RW Installer Quickstart Guide

**Version:** 1.0.0  
**Date:** 2025-12-04  
**Story:** E2:S04 – RW Installer & Plug-and-Play Adoption  
**Task:** T04 – Create quickstart docs and template usage examples

---

## 📋 Overview

This guide provides **copy-paste ready examples** for adopting the Release Workflow (RW) using the RW Installer CLI. Choose the path that matches your project:

- **Greenfield:** Starting a new project with RW pre-wired
- **Brownfield:** Adding RW to an existing project

Both paths use the same installer, but the setup differs slightly.

---

## 🆕 Greenfield: New Project with RW Pre-Wired

**Use Case:** Starting a new project and want RW from day one.

### Step 1: Copy Workflow Package

```bash
# Clone or copy the workflow mgt package to your project
cp -r /path/to/ai-dev-kit/packages/frameworks/workflow\ mgt/* /path/to/your/project/
```

### Step 2: Run Installer

```bash
cd /path/to/your/project
python scripts/install_release_workflow.py --mode c
```

**What happens:**
- Installer prompts for project-specific paths
- Generates `rw-config.yaml` with your answers
- Updates `.cursorrules` with RW trigger section
- Patches `workflows/release-workflow.yaml`

### Step 3: Review Generated Config

```bash
cat rw-config.yaml
```

**Expected output:**
```yaml
version_file: src/myproject/version.py
main_changelog: CHANGELOG.md
changelog_dir: docs/changelogs
scripts_path: tools/workflow_mgt/scripts
readme_file: README.md
use_kanban: true
kanban_root: docs/project-management/kanban
epic_doc_pattern: epics/Epic-{epic}.md
story_doc_pattern: epics/Epic-{epic}/Story-{story}-*.md
kanban_board: _index.md
versioning_schema: RC.EPIC.STORY.TASK+BUILD
project_name: myproject
```

### Step 4: Create Version File

```bash
# Create version file at the path specified in rw-config.yaml
mkdir -p src/myproject
cat > src/myproject/version.py << 'EOF'
VERSION_RC = 0
VERSION_EPIC = 1
VERSION_STORY = 1
VERSION_TASK = 1
VERSION_BUILD = 1
VERSION_STRING = f"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}"
EOF
```

### Step 5: Test RW

```bash
# Create an epic branch
git checkout -b epic/1-first-epic

# e.g. RW E1S01T01 or RW E1:S01:T01 in AI assistant (FR-060; task id same message)
# The workflow should execute per your .cursorrules
```

**Expected outcome:**
- Version bumped to `0.1.1.2+1` (or next build)
- Changelog created
- Files committed and tagged
- Ready to push

---

## 🔧 Brownfield: Adding RW to Existing Project

**Use Case:** You have an existing project and want to add RW.

### Step 1: Copy Workflow Package

```bash
# Copy only the installer and templates
cp -r /path/to/ai-dev-kit/packages/frameworks/workflow\ mgt/scripts /path/to/your/project/tools/workflow_mgt/
cp -r /path/to/ai-dev-kit/packages/frameworks/workflow\ mgt/workflows /path/to/your/project/
cp -r /path/to/ai-dev-kit/packages/frameworks/workflow\ mgt/config /path/to/your/project/tools/workflow_mgt/
```

### Step 2: Identify Your Project Structure

**Before running installer, identify:**
- Where is your version file? (e.g., `src/myapp/version.py`, `lib/version.py`)
- Where is your CHANGELOG.md? (usually root)
- Where do you want changelog archives? (e.g., `docs/changelogs`, `CHANGELOG_ARCHIVE/`)
- Do you have Kanban docs? (if yes, where?)

### Step 3: Run Installer (Interactive)

```bash
cd /path/to/your/project
python tools/workflow_mgt/scripts/install_release_workflow.py
```

**Example interaction:**
```
📋 RW Configuration Setup
============================================================
Project name [myapp]: myapp
Path to version file (relative to project root) [src/myapp/version.py]: lib/version.py
Path to main CHANGELOG.md [CHANGELOG.md]: CHANGELOG.md
Directory for detailed changelog archives [docs/changelogs]: CHANGELOG_ARCHIVE/
Path to validation scripts directory [tools/workflow_mgt/scripts]: tools/workflow_mgt/scripts
Path to README.md [README.md]: README.md

📦 Installation Mode:
  A) Simple RW (no Kanban, any versioning)
  B) RW + Dev-Kit Versioning
  C) Full Stack (RW + Versioning + Kanban)
Select mode [B]: C

📊 Kanban Integration:
Kanban root directory [docs/project-management/kanban]: docs/kanban
Epic document pattern (use {epic} placeholder) [epics/Epic-{epic}/Epic-{epic}.md]: epics/Epic-{epic}/Epic-{epic}.md
Story document pattern (use {epic} and {story} placeholders) [epics/Epic-{epic}/Story-{story}-*.md]: epics/Epic-{epic}/Story-{story}-*.md
Main Kanban board file [_index.md]: kanban.md
```

### Step 4: Review Generated Files

```bash
# Check generated config
cat rw-config.yaml

# Check updated .cursorrules (if it existed)
grep -A 5 "RELEASE WORKFLOW" .cursorrules

# Check patched workflow
cat workflows/release-workflow.yaml | grep -A 3 "config:"
```

### Step 5: Verify Paths Match Your Project

**Critical checks:**
- [ ] Version file path in `rw-config.yaml` matches your actual file
- [ ] Changelog paths match your structure
- [ ] Scripts path exists (or create it)
- [ ] Kanban paths match (if using Kanban)

### Step 6: Copy Validation Scripts (if needed)

```bash
# If scripts_path doesn't exist, create it
mkdir -p tools/workflow_mgt/scripts/validation

# Copy validation scripts
cp /path/to/ai-dev-kit/packages/frameworks/workflow\ mgt/scripts/validation/*.py tools/workflow_mgt/scripts/validation/
```

### Step 7: Test RW

```bash
# Ensure you're on an epic branch (not main)
git checkout -b epic/1-test-rw

# e.g. RW E1S01T01 or RW E1:S01:T01 in your AI assistant (FR-060)
# Verify all steps execute correctly
```

---

## 🎯 Mode Selection Guide

### Mode A: Simple RW
**Choose if:**
- You want RW-only (no Kanban integration)
- You use a different versioning scheme
- You want minimal configuration

**Example:**
```bash
python install_release_workflow.py --mode a
```

### Mode B: RW + Dev-Kit Versioning
**Choose if:**
- You want RW with `RC.EPIC.STORY.TASK+BUILD` versioning
- You don't use Kanban
- You want standard dev-kit versioning

**Example:**
```bash
python install_release_workflow.py --mode b
```

### Mode C: Full Stack
**Choose if:**
- You want complete integration (RW + Versioning + Kanban)
- You have Kanban documentation
- You want automated Kanban updates

**Example:**
```bash
python install_release_workflow.py --mode c
```

---

## 📝 Worked Examples

### Example 1: Greenfield Python Project

**Project:** `my-python-app`  
**Structure:** Standard Python package with `src/` layout

```bash
# 1. Create project
mkdir my-python-app && cd my-python-app
git init

# 2. Copy workflow package
cp -r /path/to/ai-dev-kit/packages/frameworks/workflow\ mgt/* .

# 3. Run installer (Full Stack)
python scripts/install_release_workflow.py --mode c

# 4. Answer prompts:
# Project name: my-python-app
# Version file: src/my_python_app/version.py
# Changelog: CHANGELOG.md
# Changelog dir: docs/changelogs
# Scripts: scripts/validation
# README: README.md
# Kanban root: docs/kanban

# 5. Create version file
mkdir -p src/my_python_app
cat > src/my_python_app/version.py << 'EOF'
VERSION_RC = 0
VERSION_EPIC = 1
VERSION_STORY = 1
VERSION_TASK = 1
VERSION_BUILD = 1
VERSION_STRING = f"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}"
EOF

# 6. Create initial Kanban structure (if Mode C)
mkdir -p docs/kanban/epics/Epic-1

# 7. Test RW
git checkout -b epic/1-setup
# e.g. RW E1S01T01 or RW E1:S01:T01 in Cursor (FR-060)
```

**Result:** RW fully configured and ready to use.

---

### Example 2: Brownfield Node.js Project

**Project:** `existing-node-app`  
**Structure:** Existing project with `lib/` and `package.json`

```bash
# 1. Navigate to existing project
cd existing-node-app

# 2. Copy only necessary files
mkdir -p tools/workflow_mgt
cp -r /path/to/ai-dev-kit/packages/frameworks/workflow\ mgt/scripts tools/workflow_mgt/
cp -r /path/to/ai-dev-kit/packages/frameworks/workflow\ mgt/workflows .
cp -r /path/to/ai-dev-kit/packages/frameworks/workflow\ mgt/config tools/workflow_mgt/

# 3. Run installer (Mode B - no Kanban)
python tools/workflow_mgt/scripts/install_release_workflow.py --mode b

# 4. Answer prompts based on your structure:
# Project name: existing-node-app
# Version file: lib/version.js  # Your existing version file
# Changelog: CHANGELOG.md
# Changelog dir: docs/changelogs
# Scripts: tools/workflow_mgt/scripts
# README: README.md

# 5. Verify generated rw-config.yaml matches your structure
cat rw-config.yaml

# 6. Copy validation scripts
cp -r /path/to/ai-dev-kit/packages/frameworks/workflow\ mgt/scripts/validation tools/workflow_mgt/scripts/

# 7. Test RW
git checkout -b epic/1-add-rw
# e.g. RW E1S01T01 or RW E1:S01:T01 in Cursor (FR-060)
```

**Result:** RW added to existing project with minimal disruption.

---

## 🔍 Troubleshooting

### Issue: "PyYAML is required"

**Solution:**
```bash
pip install pyyaml
```

### Issue: "Template not found"

**Cause:** Installer can't find `cursorrules-rw-trigger-section.md`

**Solution:**
```bash
# Ensure you copied the full workflow mgt package
# Or specify the correct path to templates
```

### Issue: ".cursorrules already contains RW trigger section"

**Cause:** RW trigger section already exists

**Solution:**
- Installer skips updating `.cursorrules` if section exists
- Manually review and update paths if needed
- Or remove old section and re-run installer

### Issue: "Workflow file not found"

**Cause:** `workflows/release-workflow.yaml` doesn't exist

**Solution:**
```bash
# Copy workflow file
cp /path/to/ai-dev-kit/packages/frameworks/workflow\ mgt/workflows/release-workflow.yaml workflows/
# Re-run installer
```

### Issue: Validation scripts fail

**Cause:** Scripts can't find version file or changelog

**Solution:**
1. Check `rw-config.yaml` paths are correct
2. Ensure files exist at specified paths
3. Run validators manually to see exact error:
   ```bash
   python tools/workflow_mgt/scripts/validation/validate_branch_context.py
   ```

### Issue: RW doesn't trigger

**Cause:** `.cursorrules` RW trigger section not properly added

**Solution:**
1. Check `.cursorrules` contains "RELEASE WORKFLOW (RW) TRIGGER" section
2. Verify paths in section match `rw-config.yaml`
3. Restart Cursor/AI assistant to reload `.cursorrules`

---

## ✅ Verification Checklist

After installation, verify:

- [ ] `rw-config.yaml` exists and paths are correct
- [ ] `.cursorrules` contains RW trigger section
- [ ] `workflows/release-workflow.yaml` exists and uses config values
- [ ] Validation scripts exist in `scripts_path`
- [ ] Version file exists at `version_file` path
- [ ] CHANGELOG.md exists (or will be created by RW)
- [ ] Kanban paths exist (if Mode C)
- [ ] RW triggers when typing "RW" in AI assistant
- [ ] All 11 RW steps execute successfully

---

## 📚 Next Steps

1. **Read RW Execution Guide:** `docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md`
2. **Review Config Schema:** `config/rw-config-schema.md`
3. **Test on Feature Branch:** Always test RW on a feature/epic branch first
4. **Set Up Pre-commit Hooks:** Add validators to pre-commit hooks (optional)

---

## 🔗 Related Documentation

- **Installer CLI:** `scripts/README-rw-installer.md`
- **Config Schema:** `config/rw-config-schema.md`
- **Example Configs:** `config/examples/`
- **RW Execution Guide:** `docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md`
- **Portable Implementation Guide:** `docs/documentation/Developer_Docs/vwmp/portable-workflow-implementation-guide.md`

---

**Last Updated:** 2025-12-04  
**Version:** 1.0.0

