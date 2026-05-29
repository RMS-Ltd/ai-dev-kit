---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-22T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Existing Project Rollout Checklist

**Purpose:** Quick reference checklist for rolling out ai-dev-kit frameworks to existing projects  
**Version:** 1.0.0  
**Last Updated:** 2025-12-22

### Scope (brownfield vs greenfield)

This document targets **existing / brownfield** repositories. For **greenfield / new-template** first run (FR-080), use [`INSTALL_IN_YOUR_PROJECT.md`](https://github.com/earlution/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md), [IPW-E6S09T01](../../implementation-cycles/IPW-E6S09T01-greenfield-installation-fr080.md), and policy [ADR-003](../../architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption.md) vs [FR-081](../../project-management/kanban/fr-br/FR-081-brownfield-modular-adopter-integration.md).

---

## 🎯 Quick Decision Tree

**Which frameworks do you want?**
- **All frameworks** → Follow "Full Stack" path below
- **Just Release Workflow (RW)** → Follow "RW Only" path
- **Just Kanban** → Follow "Kanban Only" path
- **RW + Kanban** → Follow "Full Stack" path (recommended)

---

## 📋 Full Stack Rollout (RW + Kanban + Versioning)

### Step 1: Copy Framework Packages

```bash
# From ai-dev-kit repository, copy frameworks to your project
cd /path/to/your/project

# Copy workflow management framework
cp -r /path/to/ai-dev-kit/packages/frameworks/workflow\ mgt/* ./

# Copy Kanban framework  
cp -r /path/to/ai-dev-kit/packages/frameworks/kanban/* ./
```

### Step 2: Install Release Workflow (RW)

```bash
# Run RW installer (interactive - recommended)
python scripts/install_release_workflow.py --mode c

# OR preview first
python scripts/install_release_workflow.py --mode c --dry-run
```

**What this does:**
- ✅ Generates `rw-config.yaml` with your project paths
- ✅ Updates `.cursorrules` with RW trigger section
- ✅ Patches workflow YAML files

### Step 3: Setup Kanban Board

```bash
# Run Kanban installer (REQUIRED - don't manually copy epics!)
python3 scripts/install_kanban_framework.py --mode fresh

# OR if you have existing Kanban structure:
python3 scripts/install_kanban_framework.py --mode migration
```

**What this does:**
- ✅ Installs canonical epic templates (NOT ai-dev-kit's actual epics)
- ✅ Contextualizes Epic 1 with your project name
- ✅ Only installs canonical core epics (1-8, 10, 18, 22, 23)

### Step 4: Create Version File

```bash
# Create version file at path specified in rw-config.yaml
# Example: src/yourproject/version.py
mkdir -p src/yourproject
cat > src/yourproject/version.py << 'EOF'
VERSION_RC = 0
VERSION_EPIC = 1
VERSION_STORY = 1
VERSION_TASK = 1
VERSION_BUILD = 1
VERSION_STRING = f"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}"
EOF
```

### Step 5: Test Installation

```bash
# Test RW
git checkout -b epic/1-test
# e.g. RW E1S01T01 or RW E1:S01:T01 in Cursor (FR-060 — task id same message as RW)

# Test Kanban installer worked
ls docs/project-management/kanban/epics/
# Should show: Epic-1, Epic-2, Epic-3, Epic-4, Epic-5, Epic-6, Epic-7, Epic-8, Epic-10, Epic-18, Epic-22, Epic-23
```

### Step 6: Review Configuration

```bash
# Review generated config
cat rw-config.yaml

# Verify paths match your project structure
# Update if needed
```

---

## 🚀 RW Only Rollout

### Step 1: Copy Workflow Package

```bash
cp -r /path/to/ai-dev-kit/packages/frameworks/workflow\ mgt/* /path/to/your/project/
```

### Step 2: Run RW Installer

```bash
cd /path/to/your/project
python scripts/install_release_workflow.py --mode a
# Mode A = Simple RW (no Kanban)
```

### Step 3: Create Version File

```bash
# Create at path specified in rw-config.yaml
# See Step 4 above for example
```

### Step 4: Test

```bash
git checkout -b epic/1-test
# e.g. RW E1S01T01 or RW E1:S01:T01 in Cursor
```

---

## 📊 Kanban Only Rollout

### Step 1: Copy Kanban Package

```bash
cp -r /path/to/ai-dev-kit/packages/frameworks/kanban/* /path/to/your/project/
```

### Step 2: Run Kanban Installer

```bash
cd /path/to/your/project
python3 scripts/install_kanban_framework.py --mode fresh
```

### Step 3: Verify

```bash
# Check epics installed
ls docs/project-management/kanban/epics/

# Check Epic 1 is contextualized with your project name
grep "Epic 1:" docs/project-management/kanban/epics/Epic-1/Epic-1.md
```

---

## ⚠️ Critical Warnings

### DO NOT:
- ❌ Manually copy epics from `docs/project-management/kanban/epics/` (these are ai-dev-kit's actual epics, not templates)
- ❌ Skip the installers (they handle configuration automatically)
- ❌ Use ai-dev-kit's actual Kanban board (use canonical templates instead)

### DO:
- ✅ Use the installers (they're the ONLY supported method)
- ✅ Review `rw-config.yaml` after installation
- ✅ Test RW on an epic branch before committing
- ✅ Verify Kanban epics are contextualized with your project name

---

## 📚 Reference Documentation

**Detailed Guides:**
- [Installation Guide](framework-dependency-installation-guide.md) - Complete installation methods
- [Use Cases Guide](framework-dependency-use-cases.md) - All adoption patterns
- [Integration Guide](framework-dependency-integration-guide.md) - Migration from copy-paste
- [Post-Template Setup Guide](framework-dependency-post-template-setup-guide.md) - Customization steps

**Framework READMEs:**
- [Workflow Management README (source)](https://github.com/earlution/ai-dev-kit/blob/main/packages/frameworks/workflow%20mgt/README.md) - RW quickstart and details
- [Kanban README (source)](https://github.com/earlution/ai-dev-kit/blob/main/packages/frameworks/kanban/README.md) - Kanban quickstart and details

**Quick References:**
- RW Installer: `scripts/install_release_workflow.py --help`
- Kanban Installer: `scripts/install_kanban_framework.py --help`
- Config Schema: `packages/frameworks/workflow mgt/config/rw-config-schema.md`

---

## ✅ Post-Rollout Checklist

- [ ] RW installer completed successfully
- [ ] `rw-config.yaml` generated and paths verified
- [ ] `.cursorrules` updated with RW trigger section
- [ ] Kanban installer completed successfully
- [ ] Canonical epics installed (not ai-dev-kit's epics)
- [ ] Epic 1 contextualized with project name
- [ ] Version file created at correct path
- [ ] RW tested on epic branch (e.g. `RW E1S01T01` / `RW E1:S01:T01` in Cursor — FR-060)
- [ ] Kanban board views updated (if needed)
- [ ] All changes committed to Git

---

## 🆘 Troubleshooting

**RW doesn't work:**
- Check `.cursorrules` has RW trigger section
- **FR-060:** Use `RW <task_id>` in one message (e.g. `RW E5S01T01`); bare `RW` aborts by design
- Verify `rw-config.yaml` paths are correct
- Ensure you're on an epic branch (not main)
- Restart Cursor to reload `.cursorrules`

**Kanban epics show "AI Dev Kit":**
- You manually copied instead of using installer
- Remove epics: `rm -rf docs/project-management/kanban/epics/Epic-*`
- Run installer: `python3 scripts/install_kanban_framework.py --mode fresh`

**Version file not found:**
- Check path in `rw-config.yaml`
- Create version file at specified path
- Verify import paths in validation scripts

---

**Ready to roll out?** Start with Step 1 above! 🚀

