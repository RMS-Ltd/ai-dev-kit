---
lifecycle: timeboxed
ttl_days: 90
created_at: 2025-12-04T12:01:47Z
expires_at: 2026-03-04T12:01:47Z
housekeeping_policy: archive
---

# RW Config-Driven Philosophy Update

**Date:** 2025-12-04  
**Story:** E2:S04 – RW Installer & Plug-and-Play Adoption  
**Related:** T05 completion follow-up

---

## 📋 Overview

The Release Workflow (RW) documentation has been updated to reflect the **config-driven philosophy** introduced by the RW Installer. RW now uses `rw-config.yaml` as the **single source of truth** for all project-specific paths, while maintaining backward compatibility for projects that haven't run the installer.

---

## 🔄 Changes Made

### 1. Cursorrules RW Trigger Section

**File:** `cursorrules-rw-trigger-section.md`

**Updates:**
- Added **"LOAD CONFIG FIRST (MANDATORY)"** instruction before Step 1
- Added complete config loading pattern with Python code example
- Updated Step 2 (Bump Version) to reference config `version_file`
- Updated Step 2 (Identify Completed Task) to reference config `kanban_root` and `story_doc_pattern`
- Updated Step 3 (Create Detailed Changelog) to reference config `changelog_dir`
- Updated Step 4 (Update Main Changelog) to reference config `main_changelog`
- Updated Step 5 (Update README) to reference config `readme_file`
- Updated Step 6 (Auto-update Kanban Docs) to reference config Kanban paths
- Updated Step 8 (Run Validators) to reference config `scripts_path`

**Philosophy:**
- **Config-driven (preferred):** If `rw-config.yaml` exists, use its values
- **Backward compatible:** If config doesn't exist, use placeholder patterns
- **Consistent:** All steps use the same config values loaded at the start

---

### 2. RW Execution Guide

**File:** `docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md`

**Updates:**
- Added **"Config Loading (Before Step 1)"** section with complete pattern
- Updated Step 1 (Branch Safety Check) to load config and use config paths
- Updated Step 2 (Bump Version) sections A, B, E to reference config paths
- Updated Step 3 (Create Detailed Changelog) to reference config `changelog_dir`
- Updated Step 4 (Update Main Changelog) to reference config `main_changelog`
- Updated Step 5 (Update README) to reference config `readme_file`
- Updated Step 6 (Auto-update Kanban Docs) to reference config Kanban paths
- Updated Step 8 (Run Validators) to reference config `scripts_path`

**Philosophy:**
- Same config-driven approach as cursorrules section
- All steps now reference config values with fallback patterns
- Maintains backward compatibility

---

## 🎯 Philosophy Alignment

### Before (Manual Configuration)
- Hardcoded paths in multiple files
- 13-17 manual edits required
- Inconsistent path references
- High friction for adoption

### After (Config-Driven)
- Single source of truth (`rw-config.yaml`)
- 1 manual step (answering installer questions)
- Consistent path references across all steps
- Low friction for adoption

### Implementation Pattern

```python
# Load config if it exists
config = None
config_path = Path("rw-config.yaml")
if config_path.exists():
    with open(config_path, 'r') as f:
        config = yaml.safe_load(f)

# Use config values or fallback
version_file = config['version_file'] if config and 'version_file' in config else 'src/{project}/version.py'
main_changelog = config['main_changelog'] if config and 'main_changelog' in config else 'CHANGELOG.md'
# ... etc
```

---

## ✅ Benefits

1. **Consistency:** All RW steps use the same paths from a single source
2. **Maintainability:** Update paths in one place (`rw-config.yaml`)
3. **Adoption:** Reduces friction from 13-17 edits to 1 (installer)
4. **Backward Compatible:** Works in projects that haven't run installer
5. **Validation:** Validation scripts already read from config (aligned)

---

## 🔗 Related Documents

- **RW Installer:** `scripts/install_release_workflow.py`
- **Config Schema:** `config/rw-config-schema.md`
- **Cursorrules Section:** `cursorrules-rw-trigger-section.md`
- **Execution Guide:** `docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md`

---

**Last Updated:** 2025-12-04  
**Status:** ✅ Complete - RW documentation now reflects config-driven philosophy

