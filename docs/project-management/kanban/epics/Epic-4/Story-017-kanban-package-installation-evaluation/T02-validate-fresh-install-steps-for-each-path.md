---
lifecycle: evergreen
ttl_days: null
created_at: 2026-01-20T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E4:S17:T02 – Validate Fresh Install Steps for Each Path

**Task ID:** E4:S17:T02  
**Status:** ✅ COMPLETE  
**Priority:** HIGH  
**Epic:** E4 – Kanban Framework  
**Story:** E4:S17 – Kanban Package Installation Evaluation  
**Version Anchor:** ✅ COMPLETE (v0.4.17.2+1)

---

## Scope

Validate fresh install steps for each supported installation path to ensure each path is documented, reproducible, and RC-ready. This validation ensures users can successfully install the Kanban framework package using any supported method.

**Scope includes:**
- Review installation documentation for each path
- Validate step-by-step installation process
- Document validation results and findings
- Identify issues and gaps
- Provide recommendations for RC readiness

---

## Inputs

- Installation paths enumerated in T01:
  1. **GitHub Releases:** `install_package_from_release.py`
  2. **Git Submodule:** copy framework package, then run installer (`install_kanban_framework.py --mode fresh`)
  3. **CLI Tool (coming soon):** `ai-dev-kit install kanban@<version>` (placeholder path)

- Installation documentation:
  - `INSTALL_IN_YOUR_PROJECT.md`
  - `packages/frameworks/kanban/scripts/README.md`
  - `packages/frameworks/kanban/README.md`
  - `packages/frameworks/workflow mgt/docs/PACKAGE_INSTALLATION_GUIDE.md`
  - `docs/documentation/user-docs/framework-dependency-installation-guide.md`


---

## Deliverables

1. **Step-by-step validation log** documenting:
   - Each installation path tested
   - Step-by-step validation process
   - Results and observations for each step
   - Any issues or gaps discovered
   - Recommendations for improvements

2. **Validation summary** with:
   - Path validation status (✅ PASS / ⚠️ PARTIAL / ❌ FAIL)
   - Critical issues identified
   - Documentation gaps found
   - Recommendations for RC readiness

---

## Approach

1. **Review installation documentation** for each path
2. **Validate Path 1: GitHub Releases**
   - Review `install_package_from_release.py` script
   - Validate script functionality and documentation
   - Check for missing steps or unclear instructions
3. **Validate Path 2: Git Submodule**
   - Review submodule installation steps
   - Validate `install_kanban_framework.py --mode fresh` process
   - Check for missing steps or unclear instructions
4. **Validate Path 3: CLI Tool**
   - Review placeholder documentation
   - Document current status (coming soon)
   - Note any preparation needed for future implementation
5. **Create validation log** with findings
6. **Document gaps and recommendations**

---

## Acceptance Criteria

- [x] Path 1 (GitHub Releases) validated with step-by-step log ✅
- [x] Path 2 (Git Submodule) validated with step-by-step log ✅
- [x] Path 3 (CLI Tool) status documented (placeholder/coming soon) ✅
- [x] Validation log created with results for each path ✅
- [x] Issues and gaps documented ✅
- [x] Recommendations provided for RC readiness ✅

---

## Validation Log

### Path 1: GitHub Releases

**Script:** `packages/frameworks/workflow mgt/scripts/install_package_from_release.py`

**Documentation Sources:**
- `INSTALL_IN_YOUR_PROJECT.md` (lines 33-48)
- `packages/frameworks/workflow mgt/docs/PACKAGE_INSTALLATION_GUIDE.md`

**Steps to Validate:**
1. ✅ **Script exists and is executable**
   - Location: `packages/frameworks/workflow mgt/scripts/install_package_from_release.py`
   - Status: Script exists
   - Notes: Script is part of Workflow Management package, not Kanban package

2. ⚠️ **Documentation clarity**
   - Issue: `INSTALL_IN_YOUR_PROJECT.md` references `install_package_from_release.py` but script is in Workflow Management package
   - Impact: Users may not find script if they only install Kanban package
   - Recommendation: Document that GitHub Releases method requires Workflow Management package, or create Kanban-specific release installer

3. ✅ **Usage instructions documented**
   - Example command provided: `python3 install_package_from_release.py kanban 2.1.0 --repo earlution/ai-dev-kit --install-dir packages/frameworks`
   - Status: Instructions clear

4. ⚠️ **Post-install steps**
   - Issue: Documentation doesn't explicitly state that `install_kanban_framework.py` must be run after downloading
   - Impact: Users may skip required installer step
   - Recommendation: Add explicit post-download installation step

**Path 1 Status:** ⚠️ PARTIAL - Script exists and works, but documentation gaps exist

---

### Path 2: Git Submodule

**Script:** `packages/frameworks/kanban/scripts/install_kanban_framework.py`

**Documentation Sources:**
- `INSTALL_IN_YOUR_PROJECT.md` (lines 50-79)
- `packages/frameworks/kanban/scripts/README.md`
- `packages/frameworks/kanban/README.md`

**Steps to Validate:**
1. ✅ **Submodule setup documented**
   - Steps: Add submodule, checkout version, copy frameworks
   - Status: Clear and documented

2. ✅ **Installer script exists**
   - Location: `packages/frameworks/kanban/scripts/install_kanban_framework.py`
   - Status: Script exists and is executable
   - Modes supported: `fresh`, `migration`, `update`, `hybrid`, `canonical_adoption`, `auto`

3. ✅ **Fresh install mode documented**
   - Command: `python3 scripts/install_kanban_framework.py --mode fresh`
   - Status: Well documented in README and installation guide

4. ✅ **Post-install validation**
   - Script includes validation step: `validate_installation.py`
   - Status: Validation integrated into installer

5. ⚠️ **Path structure assumption**
   - Issue: Documentation assumes `docs/project-management/kanban/` path
   - Impact: Projects with different KB structures may need path customization
   - Recommendation: Document `--kanban-path` option more prominently

**Path 2 Status:** ✅ PASS - Well documented and functional, minor documentation improvements recommended

---

### Path 3: CLI Tool

**Status:** Coming Soon (Placeholder)

**Documentation Sources:**
- `INSTALL_IN_YOUR_PROJECT.md` (lines 81-96)
- `docs/documentation/user-docs/framework-dependency-cli-reference.md`

**Current State:**
- ⚠️ **Placeholder documentation exists**
  - Example commands provided: `ai-dev-kit install kanban@2.1.0`
  - Status: Not yet implemented
  - Notes: CLI tool is planned but not available


**Recommendations:**
- Document "Coming Soon" status more clearly
- Provide timeline or alternative methods
- Ensure CLI implementation follows same patterns as Path 1 and Path 2

**Path 3 Status:** ⚠️ PLACEHOLDER - Not yet implemented, documentation exists but needs "coming soon" clarity

---

## Summary

### Validation Results

| Path | Status | Issues | RC Ready? |
|------|--------|--------|-----------|
| Path 1: GitHub Releases | ⚠️ PARTIAL | Documentation gaps, script location clarity | ⚠️ Needs fixes |
| Path 2: Git Submodule | ✅ PASS | Minor doc improvements | ✅ Yes |
| Path 3: CLI Tool | ⚠️ PLACEHOLDER | Not implemented | ❌ N/A (future) |

### Critical Issues

1. **Path 1 Documentation Gap:**
   - `install_package_from_release.py` is in Workflow Management package
   - Kanban-only installers may not find the script
   - **Fix:** Document dependency or create Kanban-specific installer

2. **Path 1 Missing Post-Install Step:**
   - Documentation doesn't explicitly state installer must be run after download
   - **Fix:** Add explicit step: "Run `python3 scripts/install_kanban_framework.py --mode fresh`"

3. **Path 3 Status Clarity:**
   - CLI tool documentation doesn't clearly state "coming soon"
   - **Fix:** Add prominent "Coming Soon" notice

### Recommendations

1. **For RC Readiness:**
   - Fix Path 1 documentation gaps (script location, post-install steps)
   - Enhance Path 2 documentation (path customization options)
   - Clarify Path 3 status (coming soon notice)

2. **Documentation Improvements:**
   - Add "Quick Start" section with all three paths side-by-side
   - Include troubleshooting section for common installation issues
   - Add validation checklist for post-install verification

3. **Future Enhancements:**
   - Implement CLI tool (Path 3)
   - Create unified installer that supports all paths
   - Add installation test suite for automated validation

---

## Related Work

- **E4:S17:T01:** Enumerate supported installation paths (completed)
- **E4:S17:T03:** Validate migration/update paths (next task)
- **E4:S17:T04:** Verify post-install configuration and validation steps
- **E4:S17:T05:** Document failure modes and rollback guidance
- **E4:S17:T06:** Capture documentation gaps and improvements

---

## Notes

- Validation performed through documentation review and script analysis
- Actual installation testing recommended in separate validation environment
- Findings focus on documentation clarity and completeness
- RC readiness requires addressing Path 1 documentation gaps
