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

This checklist supports **existing / brownfield** repositories. **Canonical brownfield SoT:** [`INSTALL_IN_YOUR_PROJECT.md — Brownfield adoption`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md#brownfield-adoption-existing-repositories) (FR-081 / [IPP-E6S09T02](../../implementation-cycles/IPP-E6S09T02-brownfield-modular-adopter-integration-fr081.md)). For **greenfield**, use [Greenfield Install Specification](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md#greenfield-install-specification-wave-1-lock) and [IPW-E6S09T01](../../implementation-cycles/IPW-E6S09T01-greenfield-installation-fr080.md). Policy: [ADR-003](../../architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption.md).

---

## 🎯 Quick Decision Tree

Align with the [per-surface adoption matrix](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md#per-surface-adoption-matrix) in INSTALL.

**Which frameworks do you want?**
- **RW only (no in-repo Kanban yet)** → [RW-only minimum path](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md#rw-only-minimum-path-brownfield) in INSTALL; use `use_kanban: false`
- **RW + Kanban** → Run RW installer first, then Kanban with `--mode migration` (not `fresh` on brownfield repos)
- **Full stack** → RW + Kanban + versioning policy (see INSTALL full-stack row)
- **Just Kanban** → Rare on brownfield; prefer migration modes; see [Adding Kanban later](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md#adding-kanban-later)

---

## 📋 Full Stack Rollout (RW + Kanban + Versioning)

### Step 1: Acquire framework packages

Prefer **Git submodule** or release assets from [`RMS-Ltd/ai-dev-kit`](https://github.com/RMS-Ltd/ai-dev-kit)—see [INSTALL package methods](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md#package-installation-methods-greenfield-and-brownfield). Raw `cp -r` is acceptable only as a staging step; **always run installers** (Step 2+) so `rw-config.yaml` and paths match your host tree.

```bash
cd /path/to/your/project
git submodule add https://github.com/RMS-Ltd/ai-dev-kit.git .ai-dev-kit
# Copy only the frameworks you need, e.g. workflow mgt for RW-only:
cp -r .ai-dev-kit/packages/frameworks/workflow\ mgt/* ./tools/workflow_mgt/
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
- [Workflow Management README (source)](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow%20mgt/README.md) - RW quickstart and details
- [Kanban README (source)](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/kanban/README.md) - Kanban quickstart and details

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

