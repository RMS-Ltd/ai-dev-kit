---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-09T18:30:00Z
expires_at: null
housekeeping_policy: keep
---

# Story 01 – Language Selection at Setup (UK/US English)

**Status:** COMPLETE  
**Priority:** MEDIUM  
**Estimated Effort:** [TBD]  
**Created:** 2025-12-09  
**Last updated:** 2026-06-07 (v0.21.1.7+1 — T07 FR-006 Phase 1 E2E tests; all tasks complete)  
**Version:** v0.21.1.7+1  
**Code:** E21S01

---

## Overview

Add language selection prompt at the very beginning of all setup processes, starting with **UK English (en-GB, default)** and US English (en-US) variants. Phase 1 host story for FR-006.

---

## Goal

Make language selection the first step in all setup processes, allowing users to choose their preferred English variant (UK or US). This selection persists throughout the setup and project lifecycle, ensuring all generated content uses the selected variant.

---

## Task Checklist

- [x] **E21:S01:T01 – Add language selection prompt to template setup (GitHub template)** - COMPLETE (v0.21.1.1+2)
  - Task: [`T01-add-language-selection-prompt-to-template-setup-github-templ`](story-01-language-selection-at-setup/T01-add-language-selection-prompt-to-template-setup-github-templ.md)
- [x] **E21:S01:T02 – Add language selection prompt to CLI tool (`ai-dev-kit init`)** - COMPLETE (v0.21.1.2+1)
  - Task: [`T02-add-language-selection-prompt-to-cli-tool-ai-dev-kit-init`](story-01-language-selection-at-setup/T02-add-language-selection-prompt-to-cli-tool-ai-dev-kit-init.md)
- [x] **E21:S01:T03 – Add language selection prompt to RW Installer (`install_release_workflow.py`)** - COMPLETE (v0.21.1.3+1)
  - Task: [`T03-add-language-selection-prompt-to-rw-installer-install-releas`](story-01-language-selection-at-setup/T03-add-language-selection-prompt-to-rw-installer-install-releas.md)
- [x] **E21:S01:T04 – Create UK/US English content variants (documentation, templates)** - COMPLETE (v0.21.1.4+1)
  - Task: [`T04-create-ukus-english-content-variants-documentation-templates`](story-01-language-selection-at-setup/T04-create-ukus-english-content-variants-documentation-templates.md)
- [x] **E21:S01:T05 – Implement configuration persistence (`ai-dev-kit-config.yaml`)** - COMPLETE (v0.21.1.5+1)
  - Task: [`T05-implement-configuration-persistence-ai-dev-kit-configyaml`](story-01-language-selection-at-setup/T05-implement-configuration-persistence-ai-dev-kit-configyaml.md)
- [x] **E21:S01:T06 – Update content generation to use language preference (RW, templates)** - COMPLETE (v0.21.1.6+1)
  - Task: [`T06-update-content-generation-to-use-language-preference-rw-temp`](story-01-language-selection-at-setup/T06-update-content-generation-to-use-language-preference-rw-temp.md)
- [x] **E21:S01:T07 – Test UK/US English selection and content generation** - COMPLETE (v0.21.1.7+1)
  - Task: [`T07-test-ukus-english-selection-and-content-generation`](story-01-language-selection-at-setup/T07-test-ukus-english-selection-and-content-generation.md)

---

## Acceptance Criteria

- [x] Language selection prompt appears at start of all setup processes (T01–T03; E6 static contract)
- [x] UK and US English variants available (T04 corpus; automated T1–T7, E4)
- [x] Language preference persists in configuration (T02/T03/T05; E5 schema parity)
- [x] All documentation uses selected variant — **Phase 1 MVP:** setup guides + locale corpus; full doc-tree → E21:S02
- [x] All templates use selected variant — **Phase 1 MVP:** 8 core intake templates (E4); board-install templates deferred
- [x] All generated content uses selected variant — RW scaffolds + intake paths (E1–E3, E8)
- [x] Default to UK English if not specified (en-GB primary; en-US supported)
- [x] Language can be changed later (with content regeneration) — E8 `--force` + re-scaffold

---

## Dependencies

**Blocks:**
- Improved accessibility for UK English speakers
- Cultural preference support
- Foundation for international localisation (Phase 2)

**Blocked By:**
- FR-006: Localisation and Language Selection (accepted)

**Related Work:**
- **FR-006:** Localisation and Language Selection (UK/US English + International)
- **E21:S02:** Internationalisation Infrastructure (Phase 2)

---

## References

- `docs/project-management/kanban/fr-br/FR-006-localization-language-selection-uk-us-english.md` - Feature request
- `docs/documentation/user-docs/framework-dependency-post-template-setup-guide.md` - Setup process
- `packages/frameworks/workflow-mgt/scripts/install_release_workflow.py` - RW installer
- `packages/frameworks/kanban/templates/COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md` - Epic 21 canonical definition

---

_Last updated: 2025-12-09 (v0.21.1.0+0 – Story created)_

