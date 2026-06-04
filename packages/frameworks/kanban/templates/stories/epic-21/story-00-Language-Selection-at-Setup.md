---
lifecycle: evergreen
ttl_days: null
created_at: [YYYY-MM-DD]
expires_at: null
housekeeping_policy: keep
---

# Epic 21, Story 0: Language Selection at Setup (MVP - UK/US English)

**Status:** TODO  
**Priority:** HIGH  
**Last updated:** [YYYY-MM-DD] (v0.21.0.0+0 – Template created)  
**Estimated Effort:** [TBD]  
**Started:** [YYYY-MM-DD]  
**Completed:** [YYYY-MM-DD]  
**Version:** v0.21.0.0+0  
**Code:** E21S00

---

## Task Checklist

- [ ] **E21:S00:T01 – Add language selection prompt to template setup (GitHub template)** - TODO
- [ ] **E21:S00:T02 – Add language selection prompt to CLI tool (`ai-dev-kit init`)** - TODO
- [ ] **E21:S00:T03 – Add language selection prompt to RW Installer (`install_release_workflow.py`)** - TODO
- [ ] **E21:S00:T04 – Create UK/US English content variants (documentation, templates)** - TODO
- [ ] **E21:S00:T05 – Implement configuration persistence (`ai-dev-kit-config.yaml`)** - TODO
- [ ] **E21:S00:T06 – Update content generation to use language preference (RW, templates)** - TODO
- [ ] **E21:S00:T07 – Test UK/US English selection and content generation** - TODO

> **Format:** `Exx:Sxx:Txx` (Epic, Story, Task with 2-digit zero padding, e.g., `E21:S00:T01`)  
> **Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)` (e.g., `✅ COMPLETE (v0.21.0.3+1)`)

---

## Overview

Add language selection prompt at the very beginning of setup processes, starting with UK and US English variants for the {PROJECT_NAME} project.

---

## Goals

- Add language selection prompt to template setup (GitHub template)
- Add language selection prompt to CLI tool (`ai-dev-kit init`)
- Add language selection prompt to RW Installer (`install_release_workflow.py`)
- Create UK/US English content variants (documentation, templates)
- Implement configuration persistence (`ai-dev-kit-config.yaml`)
- Update content generation to use language preference (RW, templates)
- Test UK/US English selection and content generation

---

## Tasks

### Task Summaries

- **E21:S00:T01** – Add language selection prompt to template setup (GitHub template) for {PROJECT_NAME}
- **E21:S00:T02** – Add language selection prompt to CLI tool (`ai-dev-kit init`)
- **E21:S00:T03** – Add language selection prompt to RW Installer (`install_release_workflow.py`)
- **E21:S00:T04** – Create UK/US English content variants (documentation, templates)
- **E21:S00:T05** – Implement configuration persistence (`ai-dev-kit-config.yaml`)
- **E21:S00:T06** – Update content generation to use language preference (RW, templates)
- **E21:S00:T07** – Test UK/US English selection and content generation

---

## Acceptance Criteria

- [ ] Language selection prompt added to template setup
- [ ] Language selection prompt added to CLI tool
- [ ] Language selection prompt added to RW Installer
- [ ] UK/US English content variants created
- [ ] Configuration persistence implemented
- [ ] Content generation updated to use language preference
- [ ] UK/US English selection and content generation tested

---

## Dependencies

**Blocks:**
- Story 1: Internationalization Infrastructure (foundation for i18n)

**Blocked By:**
- None

**Coordinates With:**
- Epic 4: Kanban Framework (template setup)
- Epic 2: Workflow Management Framework (RW installer)

---

## Parallel Development Dependencies

- None
- *Parallel Development Candidacy:* Safe (can be done independently)

---

## Contextualization Notes

**Placeholders to Replace:**
- `{PROJECT_NAME}` - Replace with actual project name

**Customization Guidance:**
- Adjust language selection based on project needs
- Modify content variants to match project requirements
- Integrate with project-specific setup tools

---

## Integration Points

- **Epic 4 (Kanban):** Template setup language selection
- **Epic 2 (Workflow Management):** RW installer language selection

---

## References

- Language selection best practices
- Content variant management
- Configuration persistence patterns
