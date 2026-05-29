---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-09T18:30:00Z
expires_at: null
housekeeping_policy: keep
---

# Story 000 – Language Selection at Setup (UK/US English)

**Status:** TODO  
**Priority:** MEDIUM  
**Estimated Effort:** [TBD]  
**Created:** 2025-12-09  
**Last updated:** 2025-12-09 (v0.21.0.0+0 – Story created)  
**Version:** v0.21.0.0+0  
**Code:** E21S00

---

## Overview

Add language selection prompt at the very beginning of all setup processes, starting with UK and US English variants. This addresses cultural preferences and makes the framework more accessible to users from different regions.

---

## Goal

Make language selection the first step in all setup processes, allowing users to choose their preferred English variant (UK or US). This selection persists throughout the setup and project lifecycle, ensuring all generated content uses the selected variant.

---

## Task Checklist

- [ ] **E21:S00:T01 – Add language selection prompt to template setup (GitHub template)** - TODO
- [ ] **E21:S00:T02 – Add language selection prompt to CLI tool (`ai-dev-kit init`)** - TODO
- [ ] **E21:S00:T03 – Add language selection prompt to RW Installer (`install_release_workflow.py`)** - TODO
- [ ] **E21:S00:T04 – Create UK/US English content variants (documentation, templates)** - TODO
- [ ] **E21:S00:T05 – Implement configuration persistence (`ai-dev-kit-config.yaml`)** - TODO
- [ ] **E21:S00:T06 – Update content generation to use language preference (RW, templates)** - TODO
- [ ] **E21:S00:T07 – Test UK/US English selection and content generation** - TODO

---

## Tasks

### E21:S00:T01 – Add language selection prompt to template setup (GitHub template)

**Status:** TODO  
**Priority:** MEDIUM  
**Dependencies:** FR-006  
**Blocker:** None

**Input:**
- GitHub template setup process
- FR-006 requirements

**Deliverable:**
- Language selection prompt in GitHub template setup
- Prompt appears as first step after template creation
- Selection stored in project configuration

**Approach:**
1. Create setup script that runs after template creation
2. Add language selection prompt as first step
3. Store selection in `ai-dev-kit-config.yaml`
4. Document setup process

**Acceptance Criteria:**
- [ ] Language selection prompt appears at start of template setup
- [ ] Options: UK English, US English
- [ ] Selection persists in configuration
- [ ] Setup process documented

---

### E21:S00:T02 – Add language selection prompt to CLI tool (`ai-dev-kit init`)

**Status:** TODO  
**Priority:** MEDIUM  
**Dependencies:** E21:S00:T01  
**Blocker:** None

**Input:**
- CLI tool (`ai-dev-kit init`)
- Language selection requirements

**Deliverable:**
- Language selection prompt in CLI tool
- Prompt appears as first step in `ai-dev-kit init`
- Selection stored in project configuration

**Approach:**
1. Add language selection prompt to CLI tool
2. Make it the first prompt in `ai-dev-kit init`
3. Store selection in `ai-dev-kit-config.yaml`
4. Update CLI documentation

**Acceptance Criteria:**
- [ ] Language selection prompt appears first in CLI tool
- [ ] Options: UK English, US English
- [ ] Selection persists in configuration
- [ ] CLI documentation updated

---

### E21:S00:T03 – Add language selection prompt to RW Installer (`install_release_workflow.py`)

**Status:** TODO  
**Priority:** MEDIUM  
**Dependencies:** E21:S00:T01  
**Blocker:** None

**Input:**
- RW Installer (`install_release_workflow.py`)
- Language selection requirements

**Deliverable:**
- Language selection prompt in RW Installer
- Prompt appears as first step in installer
- Selection stored in project configuration

**Approach:**
1. Add language selection prompt to RW Installer
2. Make it the first prompt in installer
3. Store selection in `ai-dev-kit-config.yaml`
4. Update installer documentation

**Acceptance Criteria:**
- [ ] Language selection prompt appears first in RW Installer
- [ ] Options: UK English, US English
- [ ] Selection persists in configuration
- [ ] Installer documentation updated

---

### E21:S00:T04 – Create UK/US English content variants (documentation, templates)

**Status:** TODO  
**Priority:** HIGH  
**Dependencies:** E21:S00:T01-T03  
**Blocker:** None

**Input:**
- Existing US English content
- Language selection requirements

**Deliverable:**
- UK English variants of all documentation
- UK English variants of all templates
- Content structure: `locales/en-GB/` and `locales/en-US/`

**Approach:**
1. Identify all translatable content (documentation, templates)
2. Create UK English variants (spelling, terminology)
3. Organize content in `locales/en-GB/` and `locales/en-US/`
4. Update content generation to use selected variant

**Acceptance Criteria:**
- [ ] UK English variants created for all documentation
- [ ] UK English variants created for all templates
- [ ] Content organized in locale directories
- [ ] Content generation uses selected variant

**Key Differences (UK vs US English):**
- Spelling: colour/color, organise/organize, realise/realize, centre/center
- Terminology: programme/program, licence/license (noun), practise/practice (verb)
- Date format: DD/MM/YYYY vs MM/DD/YYYY (if applicable)

---

### E21:S00:T05 – Implement configuration persistence (`ai-dev-kit-config.yaml`)

**Status:** TODO  
**Priority:** HIGH  
**Dependencies:** E21:S00:T01-T03  
**Blocker:** None

**Input:**
- Language selection from setup processes
- Configuration file structure

**Deliverable:**
- `ai-dev-kit-config.yaml` with language preference
- Configuration reading/writing utilities
- Default to US English if not specified

**Approach:**
1. Define configuration file structure
2. Add `localization` section with `language` and `variant`
3. Create configuration reading/writing utilities
4. Set default to US English

**Acceptance Criteria:**
- [ ] Configuration file structure defined
- [ ] Language preference stored in config
- [ ] Configuration utilities created
- [ ] Default to US English if not specified

**Configuration Structure:**
```yaml
localization:
  language: "en-GB"  # or "en-US"
  variant: "UK"      # or "US"
```

---

### E21:S00:T06 – Update content generation to use language preference (RW, templates)

**Status:** TODO  
**Priority:** HIGH  
**Dependencies:** E21:S00:T04, E21:S00:T05  
**Blocker:** None

**Input:**
- Language preference from configuration
- Content generation processes (RW, templates)

**Deliverable:**
- RW uses language preference for changelog generation
- Templates use language preference for content generation
- All generated content uses selected variant

**Approach:**
1. Update RW to read language preference
2. Update RW to use appropriate locale for changelog generation
3. Update templates to use language preference
4. Update content generation utilities

**Acceptance Criteria:**
- [ ] RW reads language preference from config
- [ ] RW uses selected variant for changelog generation
- [ ] Templates use selected variant
- [ ] All generated content uses selected variant

---

### E21:S00:T07 – Test UK/US English selection and content generation

**Status:** TODO  
**Priority:** MEDIUM  
**Dependencies:** E21:S00:T01-T06  
**Blocker:** None

**Input:**
- Complete language selection implementation
- Content generation with language preference

**Deliverable:**
- Test results for UK/US English selection
- Test results for content generation
- Test documentation

**Approach:**
1. Test language selection in all setup processes
2. Test content generation with UK English
3. Test content generation with US English
4. Verify consistency across all generated content

**Acceptance Criteria:**
- [ ] Language selection works in all setup processes
- [ ] UK English content generation works correctly
- [ ] US English content generation works correctly
- [ ] Content is consistent with selected variant
- [ ] Test documentation created

---

## Acceptance Criteria

- [ ] Language selection prompt appears at start of all setup processes
- [ ] UK and US English variants available
- [ ] Language preference persists in configuration
- [ ] All documentation uses selected variant
- [ ] All templates use selected variant
- [ ] All generated content uses selected variant
- [ ] Default to US English if not specified
- [ ] Language can be changed later (with content regeneration)

---

## Dependencies

**Blocks:**
- Improved accessibility for UK English speakers
- Cultural preference support
- Foundation for international localization (Phase 2)

**Blocked By:**
- FR-006: Localization and Language Selection (accepted)

**Related Work:**
- **FR-006:** Localization and Language Selection (UK/US English + International)
- **E21:S01:** Internationalization Infrastructure (Phase 2)

---

## References

- `docs/project-management/kanban/fr-br/FR-006-localization-language-selection-uk-us-english.md` - Feature request
- `docs/documentation/user-docs/framework-dependency-post-template-setup-guide.md` - Setup process
- `packages/frameworks/workflow mgt/scripts/install_release_workflow.py` - RW installer
- `packages/frameworks/kanban/templates/COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md` - Epic 21 canonical definition

---

_Last updated: 2025-12-09 (v0.21.0.0+0 – Story created)_

