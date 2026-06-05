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
  - Task: [`T01-add-language-selection-prompt-to-template-setup-github-templ`](story-00-language-selection-at-setup/T01-add-language-selection-prompt-to-template-setup-github-templ.md)
- [ ] **E21:S00:T02 – Add language selection prompt to CLI tool (`ai-dev-kit init`)** - TODO
  - Task: [`T02-add-language-selection-prompt-to-cli-tool-ai-dev-kit-init`](story-00-language-selection-at-setup/T02-add-language-selection-prompt-to-cli-tool-ai-dev-kit-init.md)
- [ ] **E21:S00:T03 – Add language selection prompt to RW Installer (`install_release_workflow.py`)** - TODO
  - Task: [`T03-add-language-selection-prompt-to-rw-installer-install-releas`](story-00-language-selection-at-setup/T03-add-language-selection-prompt-to-rw-installer-install-releas.md)
- [ ] **E21:S00:T04 – Create UK/US English content variants (documentation, templates)** - TODO
  - Task: [`T04-create-ukus-english-content-variants-documentation-templates`](story-00-language-selection-at-setup/T04-create-ukus-english-content-variants-documentation-templates.md)
- [ ] **E21:S00:T05 – Implement configuration persistence (`ai-dev-kit-config.yaml`)** - TODO
  - Task: [`T05-implement-configuration-persistence-ai-dev-kit-configyaml`](story-00-language-selection-at-setup/T05-implement-configuration-persistence-ai-dev-kit-configyaml.md)
- [ ] **E21:S00:T06 – Update content generation to use language preference (RW, templates)** - TODO
  - Task: [`T06-update-content-generation-to-use-language-preference-rw-temp`](story-00-language-selection-at-setup/T06-update-content-generation-to-use-language-preference-rw-temp.md)
- [ ] **E21:S00:T07 – Test UK/US English selection and content generation** - TODO
  - Task: [`T07-test-ukus-english-selection-and-content-generation`](story-00-language-selection-at-setup/T07-test-ukus-english-selection-and-content-generation.md)

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
- `packages/frameworks/workflow-mgt/scripts/install_release_workflow.py` - RW installer
- `packages/frameworks/kanban/templates/COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md` - Epic 21 canonical definition

---

_Last updated: 2025-12-09 (v0.21.0.0+0 – Story created)_

