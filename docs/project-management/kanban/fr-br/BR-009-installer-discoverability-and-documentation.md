---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-11T02:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Bug Report: Kanban Framework Installation Copies ai-dev-kit's Actual Kanban Instead of Canonical Template

**Type:** Bug Report (BR)  
**Submitted:** 2025-12-11  
**Submitted By:** earlution (agentic-ide-rules project)  
**Priority:** HIGH  
**Severity:** HIGH  
**Status:** RESOLVED ✅ (v0.4.6.9+2 via E4:S06:T09)  
**GitHub Issue:** #14

---

## Summary

When installing the Kanban framework from ai-dev-kit, the installation process copied ai-dev-kit's **actual Kanban board** (with their project-specific epics like "AI Dev Kit Core", "Workflow Management Framework", etc.) instead of installing the **canonical Kanban template** that should be customized for the consuming project.

---

## Description

### What is the Bug?

The interactive installation process (`install_kanban_framework.py`) exists but is not discoverable or documented as the primary installation method. Users manually copy files and receive ai-dev-kit's actual Kanban structure instead of canonical templates.

**Root Issues:**
1. **Installer Not Discoverable:** The interactive installer exists but isn't prominently featured in installation instructions
2. **Documentation Gap:** README doesn't clearly distinguish between:
   - Canonical epic templates (for reference)
   - ai-dev-kit's actual Kanban (example only, not for copying)
3. **Manual Copying Problem:** Users manually copy `docs/project-management/kanban/epics/*` and get ai-dev-kit's project-specific content
4. **No Warning:** No warning when users manually copy instead of using installer

### What Should Happen vs. What Actually Happens?

**Expected Behavior:**
- Interactive installer (`install_kanban_framework.py`) is the **primary/only** installation method
- README clearly emphasizes using the installer
- Installer:
  1. Detects existing Kanban structures
  2. Analyzes and generates migration plan
  3. Prompts for installation mode selection (Fresh, Migration, Update, Hybrid)
  4. **Installs canonical core epics** (templates, not ai-dev-kit's actual epics)
  5. Customizes the Kanban structure for the consuming project's needs

- Installation results in:
  - Canonical epic templates (Epic-1-Project-Core.md, etc.) available for reference
  - **Empty epic directories** ready for the project to create their own epics
  - Project-specific customization based on interactive prompts


**Actual Behavior:**
- Users manually copy files: `cp -r packages/frameworks/ai-dev-kit/docs/project-management/kanban/epics/* docs/project-management/kanban/epics/`
- Receive direct copy of ai-dev-kit's actual Kanban board
- Get ai-dev-kit's project-specific epics (Epic-1: AI Dev Kit Core, Epic-2: Workflow Management Framework, etc.)
- Get ai-dev-kit's actual stories and tasks with their specific content
- No interactive installation process executed
- No customization for consuming project

### When Does It Occur?

- When installing Kanban framework via Git submodule
- When manually copying Kanban structure files
- When installer is not discovered or used
- During initial project setup from ai-dev-kit template

### Who is Affected?

**Primary Affected:**
- Projects installing Kanban framework (e.g., agentic-ide-rules)
- Users expecting canonical templates, not ai-dev-kit's actual Kanban
- Framework adopters who don't discover the installer

**Secondary Affected:**
- Framework maintainers (support burden)
- Documentation consumers (confusion about installation method)

---

## Installation Method Used

**Method:** Git submodule + manual file copy
```bash
git submodule add https://github.com/earlution/ai-dev-kit.git packages/frameworks/ai-dev-kit
cp -r packages/frameworks/ai-dev-kit/docs/project-management/kanban/epics/* docs/project-management/kanban/epics/
```

**Discovery Process Issues:**
- Installation documentation wasn't clear that:
  1. There's an interactive installer that should be used
  2. The canonical templates are different from ai-dev-kit's actual Kanban
  3. The installer should customize epics for the consuming project

- **Multiple attempts** needed to understand:
  - First attempt: Only copied templates, not understanding canonical epics should be installed
  - Second attempt: Copied ai-dev-kit's actual epics, not realizing these were project-specific
  - Only after explicit clarification understood the distinction

- Even then ended up with ai-dev-kit's actual epics rather than properly customized installation

---

## Affected Component

**Primary Component:** Kanban Framework - Installation Process & Documentation  
**Affected Areas:**
- [x] Installation Process
- [x] Documentation
- [ ] Backend/API
- [ ] Frontend/UI
- [ ] Database/Schema
- [ ] Integration/External Service

**Root Cause:**
- Installer exists but isn't discoverable
- Documentation doesn't emphasize installer as primary method
- No clear distinction between canonical templates and ai-dev-kit's actual Kanban
- No warning when users manually copy files

---

## Steps to Reproduce

1. Install ai-dev-kit as Git submodule
2. Look for installation instructions in README
3. Find instructions mention installer but don't emphasize it
4. Manually copy Kanban structure: `cp -r packages/frameworks/ai-dev-kit/docs/project-management/kanban/epics/* docs/project-management/kanban/epics/`
5. **Result:** Receive ai-dev-kit's actual Kanban with project-specific epics
6. **Expected:** Should have been directed to use installer, which would provide canonical templates

---

## Environment

**Environment:** Development  
**Version:** Kanban Framework v2.1.0 (latest as of 2025-12-11)  
**Project:** agentic-ide-rules  
**Installation method:** Git submodule  
**Python version:** 3.x

---

## Impact

**User Impact:**
- **High:** Projects get ai-dev-kit's project-specific content instead of clean, customizable template
- **High:** Multiple back-and-forth interactions needed to understand what should be installed
- **Medium:** Projects must manually clean up ai-dev-kit-specific content
- **Medium:** Confusion about what "canonical" means vs. "ai-dev-kit's actual Kanban"

**Business Impact:**
- Framework adoption friction
- Support burden from confused users
- Framework credibility affected by unclear installation process

**Workaround:**
- Manually clean up ai-dev-kit-specific content
- Use installer after manual copy (defeats purpose)
- Understand distinction through trial and error

---

## Acceptance Criteria (Fix Requirements)

- [ ] **Criterion 1:** README clearly emphasizes `install_kanban_framework.py` as the **primary/only** installation method
- [ ] **Criterion 2:** README clearly distinguishes between:
  - Canonical epic templates (for reference)
  - ai-dev-kit's actual Kanban (example only, not for copying)

- [ ] **Criterion 3:** Installer is prominently featured in installation instructions (not buried)
- [ ] **Criterion 4:** Installer defaults to installing canonical templates, not copying ai-dev-kit's actual board
- [ ] **Criterion 5:** Warning added if someone tries to manually copy epics (direct them to installer)
- [ ] **Criterion 6:** Installation documentation includes clear examples of what users should expect

**Verification Method:**
- Manual testing (new user installation scenario)
- Documentation review
- User feedback

---

## Related Work

**Related BRs:**
- **BR-004:** Kanban Installation Includes Project-Specific Epics from Template - **BLOCKS THIS BR** (must fix epic contamination first - installer must use canonical templates, not ai-dev-kit's actual epics)
- **BR-007:** Multiple Bugs in Kanban Package Installation Process (installer bugs)

**Related FRs:**
- **FR-005:** Systematic Canonical Epics/Stories/Tasks Template System (addresses template system)

**Related Stories:**
- **E4:S06:** Comprehensive Canonical E/S/T Template System (IN PROGRESS)
- **E4:S07:** Migration Support and Installation Modes (COMPLETE - installer exists)

---

## Suggested Fix

1. **Make installer primary/only method** - Update documentation to make `install_kanban_framework.py` the recommended installation path
2. **Clarify in README** - Distinguish between:
   - Canonical epic templates (for reference)
   - ai-dev-kit's actual Kanban (example only, not for copying)
3. **Improve discoverability** - Installer script should be prominently featured in installation instructions
4. **Default behavior** - Installer should default to installing canonical templates, not copying ai-dev-kit's actual board
5. **Add warning** - If someone tries to manually copy epics, add a warning that they should use the installer instead

---

## Dependencies

**Blocks:**
- Proper Kanban framework installation
- Framework adoption with clean templates
- User understanding of canonical vs. project-specific content

**Blocked By:**
- **BR-004:** Kanban Installation Includes Project-Specific Epics from Template (must be fixed first - installer must use canonical templates, not ai-dev-kit's actual epics)

**Related Work:**
- **BR-004:** Kanban Installation Includes Project-Specific Epics from Template
- **E4:S06:** Comprehensive Canonical E/S/T Template System
- **E4:S07:** Migration Support and Installation Modes

---

## Intake Decision

**Intake Status:** ACCEPTED  
**Intake Date:** 2025-12-11  
**Intake By:** AI Agent (ai-dev-kit)

**Decision Flow Results:**
- Story Match Found: Epic 4, Story 6, Task 9

**Assigned To:**
- Epic: Epic 4 (Kanban Framework)
- Story: Story 6 (Comprehensive Canonical E/S/T Template System)
- Task: Task 9 (BR-009: Improve installer discoverability and documentation)
- Version: v0.4.6.10+2 (T09 COMPLETE)

**Kanban Links:**
- Epic: [TBD]
- Story: [TBD]
- Task: [TBD]

---

## Notes

**Resolution:** Fixed in `v0.4.6.10+2` by making the installer the primary/only installation method, clearly distinguishing canonical templates vs. ai-dev-kit's actual Kanban, adding warnings against manual copying, providing expected installation outputs, and adding troubleshooting steps. Implemented in E4:S06:T09 with README and post-template setup guide updates.

This bug report documents installation discoverability and documentation issues. The interactive installer exists (E4:S07) but isn't being used because it's not discoverable. This is related to BR-004 but focuses on installer discoverability rather than epic contamination per se.

**User Experience:**
- Real-world installation scenario
- Multiple attempts to understand what should be installed
- Confusion about canonical vs. project-specific content

---

## References

- **GitHub Issue:** #14
- **BR-004:** `docs/project-management/kanban/fr-br/BR-004-kanban-installation-includes-project-specific-epics.md`
- **Framework README:** `packages/frameworks/kanban/README.md`
- **Installation Script:** `packages/frameworks/kanban/scripts/install_kanban_framework.py`
- **E4:S07:** Migration Support and Installation Modes

---

**Template Usage:**
- This BR follows the Kanban Framework BR template
- Comprehensive bug documentation with reproduction steps
- Clear acceptance criteria provided
- Related work referenced

---

_This bug report is part of the Kanban Framework. See `packages/frameworks/kanban/` for complete framework documentation._

