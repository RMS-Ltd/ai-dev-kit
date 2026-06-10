---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-09T18:30:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 21: Internationalisation and Localisation

**Status:** IN PROGRESS  
**Priority:** MEDIUM  
**Estimated Effort:** [TBD]  
**Created:** 2025-12-09  
**Last updated:** 2026-06-10 (v0.21.4.2+1 – Kanban documentation setup)
**Version:** v0.21.9.3+1  
**Branch:** `epic/21-internationalisation-localisation`  
**Version Schema:** `0.21.S.T+B`  
**Production URL:** [N/A for this repo]

---

## Story Checklist

- [x] **E21:S01 – Language Selection at Setup (UK/US English)** - COMPLETE (v0.21.1.7+1 — T01–T07 COMPLETE; FR-006 Phase 1)
  - Story: [`story-01-language-selection-at-setup.md`](story-01-language-selection-at-setup.md)
  - Tasks: T01–T07 COMPLETE

- [x] **E21:S02 – Internationalisation Infrastructure** - COMPLETE (v0.21.2.7+1 — T01–T07; ADR-024 + locale conventions)
  - Story: [`story-02-internationalisation-infrastructure.md`](story-02-internationalisation-infrastructure.md)
  - Tasks: T01–T07 COMPLETE

- [x] **E21:S03 – Translation and Localisation** - COMPLETE (v0.21.3.7+1 — T01–T07 COMPLETE)
  - Story: [`story-03-translation-and-localisation.md`](story-03-translation-and-localisation.md)
  - Tasks: T01–T07 COMPLETE

- [ ] **E21:S04 – Cultural Adaptation** - IN PROGRESS (v0.21.4.1+1 — T01 COMPLETE)
  - Story: [`story-04-cultural-adaptation.md`](story-04-cultural-adaptation.md)
  - Tasks: T01 ✅; T02–T07 TODO

- [ ] **E21:S05 – European Languages Localization** - IN PROGRESS (v0.21.5.1+1 — T01 COMPLETE)
  - Story: [`story-05-european-languages-localization.md`](story-05-european-languages-localization.md)
  - Tasks: T01 ✅; T02–T04 TODO

- [ ] **E21:S06 – CJK Languages Localization** - IN PROGRESS (v0.21.6.1+1 — T01 COMPLETE)
  - Story: [`story-06-cjk-languages-localization.md`](story-06-cjk-languages-localization.md)
  - Tasks: T01 ✅; T02–T03 TODO

- [ ] **E21:S07 – RTL and Extended Locales** - TODO (v0.21.7.0+0)
  - Story: [`story-07-rtl-and-extended-locales.md`](story-07-rtl-and-extended-locales.md)
  - Tasks: T01-T02 TODO

- [ ] **E21:S08 – Accessibility** - IN PROGRESS (v0.21.8.3+1 — Layer 0–1 COMPLETE)
  - Story: [`story-08-accessibility.md`](story-08-accessibility.md)
  - Tasks: T01–T03 COMPLETE; T04–T07 DEFERRED (Layers 2–5)

- [ ] **E21:S09 – Epic Housekeeping** - IN PROGRESS (v0.21.9.3+1 — T01–T03 COMPLETE)
  - Story: [`story-09-epic-housekeeping.md`](story-09-epic-housekeeping.md)
  - Tasks: T01 COMPLETE @ v0.21.9.1+1; T02 COMPLETE @ v0.21.9.2+2; T03 COMPLETE @ v0.21.9.3+1


---

## Overview

Epic 21 owns the **Internationalisation and Localisation** framework for ai-dev-kit, making the framework accessible to users worldwide. This epic addresses:

- Language selection at setup (UK/US English + international)
- Translation infrastructure and management
- Cultural adaptation and locale-specific formatting
- RTL (Right-to-Left) support for Arabic/Hebrew
- Accessibility standards compatibility for disabled users (E21:S08 / FR-115)

It ensures that:
- Users can select their preferred English variant (UK/US) at setup
- Framework content can be localized to multiple languages
- Cultural preferences are respected (date/time/number formatting)
- Framework is accessible to international developers
- Disabled users can operate ADK surfaces with minimal friction (a11y)

**Strategic snapshot (2026-06-08):** S01–S03 **COMPLETE** (FR-006 Phase 1–3 translation pipeline through E2E verification @ v0.21.3.7+1). S08 Layer 0–1 shipped @ v0.21.8.3+1. **Next stream:** S04 cultural adaptation (T01 on board). S05–S07 linguistic delivery backlog; S08 Layers 2–5 DEFERRED.

---

## Goals

1. **Language Selection at Setup**  
   - Add UK/US English selection prompt at start of all setup processes
   - Create UK/US English content variants
   - Persist language preference in configuration

2. **Internationalisation Infrastructure**  
   - Set up i18n framework and translation file structure
   - Implement locale detection and language switching
   - Configure locale-specific formatting

3. **Translation and Localisation**  
   - Translate framework content to major languages
   - Implement translation workflow and management
   - Track translation completeness

4. **Cultural Adaptation**  
   - Adapt content for different cultures
   - Implement RTL support for Arabic/Hebrew
   - Configure locale-specific formatting

---

## Stories

### Story 1: Language Selection at Setup (UK/US English)

**Status:** COMPLETE  
**Priority:** MEDIUM  
**Last updated:** 2026-06-10 (v0.21.4.2+1 – Kanban documentation setup)

**Goal:**  
Add language selection prompt at the very beginning of all setup processes, starting with UK and US English variants.

**Tasks:** T01–T07 COMPLETE — see [`story-01-language-selection-at-setup.md`](story-01-language-selection-at-setup.md)

---

### Story 2: Internationalisation Infrastructure

**Status:** COMPLETE  
**Priority:** MEDIUM  
**Last updated:** 2026-06-10 (v0.21.4.2+1 – Kanban documentation setup)

**Goal:**  
Set up i18n infrastructure and framework for broader language support beyond UK/US English.

**Tasks:** T01–T07 COMPLETE — see [`story-02-internationalisation-infrastructure.md`](story-02-internationalisation-infrastructure.md)

---

### Story 8: Accessibility

**Status:** IN PROGRESS (Layer 0–1 COMPLETE)  
**Priority:** MEDIUM  
**Last updated:** 2026-06-10 (v0.21.4.2+1 – Kanban documentation setup)

**Goal:**  
Layered accessibility programme per ADR-025; CLI-first delivery (Layers 0–1 complete; Layers 2–5 deferred).

**Tasks:** T01–T03 COMPLETE; T04–T07 DEFERRED — see [`story-08-accessibility.md`](story-08-accessibility.md) · [FR-115](../../fr-br/FR-115-accessibility-standards-compatibility.md)

---

### Story 3: Translation and Localisation

**Status:** COMPLETE  
**Priority:** LOW  
**Last updated:** 2026-06-10 (v0.21.4.2+1 – Kanban documentation setup)

**Goal:**  
Translate framework content to major languages; establish workflow, management tools, completeness tracking, and E2E verification.

**Tasks:** T01–T07 COMPLETE — see [`story-03-translation-and-localisation.md`](story-03-translation-and-localisation.md)

> Full story: [`story-03-translation-and-localisation.md`](story-03-translation-and-localisation.md)

---

### Story 4: Cultural Adaptation

**Status:** TODO  
**Priority:** LOW  
**Estimated Effort:** [TBD]  
**Last updated:** 2026-06-10 (v0.21.4.2+1 – Kanban documentation setup)

**Goal:**  
Adapt content and features for different cultures and regions.

**Tasks:**
- [ ] E21:S04:T01 – Research cultural requirements for target locales
- [ ] E21:S04:T02 – Adapt UI/UX for different cultures (examples, imagery)
- [ ] E21:S04:T03 – Implement RTL support (Right-to-Left) for Arabic/Hebrew
- [ ] E21:S04:T04 – Adapt content and examples for cultural context
- [ ] E21:S04:T05 – Configure locale-specific formatting (dates, times, numbers, currency)
- [ ] E21:S04:T06 – Test cultural adaptations
- [ ] E21:S04:T07 – Document cultural considerations and guidelines

> Full story: [`story-04-cultural-adaptation.md`](story-04-cultural-adaptation.md)

---

## Kanban-init intake (`RW -k`)

Run **on branch** `epic/21-internationalisation-localisation` — one task per release. Each command adopts the task as version anchor (`--art`) with doc-init BUILD +0 (`--dpz`; [BR-067](../../fr-br/BR-067-rw-first-doc-only-release-defaults-to-build-plus-one-not-plus-zero.md)).

### E21:S01 — Language selection at setup

| Task | Trigger | Version anchor |
| ---- | ------- | -------------- |
| T01 | `RW -k E21:S01:T01 --art --dpz` | `v0.21.1.1+0` |
| T02 | `RW -k E21:S01:T02 --art --dpz` | `v0.21.1.2+0` |
| T03 | `RW -k E21:S01:T03 --art --dpz` | `v0.21.1.3+0` |
| T04 | `RW -k E21:S01:T04 --art --dpz` | `v0.21.1.4+0` |
| T05 | `RW -k E21:S01:T05 --art --dpz` | `v0.21.1.5+0` |
| T06 | `RW -k E21:S01:T06 --art --dpz` | `v0.21.1.6+0` |
| T07 | `RW -k E21:S01:T07 --art --dpz` | `v0.21.1.7+0` |

### E21:S02 — Internationalisation infrastructure

| Task | Trigger | Version anchor |
| ---- | ------- | -------------- |
| T01 | `RW -k E21:S02:T01 --art --dpz` | `v0.21.2.1+0` |
| T02 | `RW -k E21:S02:T02 --art --dpz` | `v0.21.2.2+0` |
| T03 | `RW -k E21:S02:T03 --art --dpz` | `v0.21.2.3+0` |
| T04 | `RW -k E21:S02:T04 --art --dpz` | `v0.21.2.4+0` |
| T05 | `RW -k E21:S02:T05 --art --dpz` | `v0.21.2.5+0` |
| T06 | `RW -k E21:S02:T06 --art --dpz` | `v0.21.2.6+0` |
| T07 | `RW -k E21:S02:T07 --art --dpz` | `v0.21.2.7+0` |

### E21:S03 — Translation and localisation

| Task | Trigger | Version anchor |
| ---- | ------- | -------------- |
| T01 | `RW -k E21:S03:T01 --art --dpz` | `v0.21.3.1+0` |
| T02 | `RW -k E21:S03:T02 --art --dpz` | `v0.21.3.2+0` |
| T03 | `RW -k E21:S03:T03 --art --dpz` | `v0.21.3.3+0` |
| T04 | `RW -k E21:S03:T04 --art --dpz` | `v0.21.3.4+0` |
| T05 | `RW -k E21:S03:T05 --art --dpz` | `v0.21.3.5+0` |
| T06 | `RW -k E21:S03:T06 --art --dpz` | `v0.21.3.6+0` |
| T07 | `RW -k E21:S03:T07 --art --dpz` | `v0.21.3.7+0` |

### E21:S04 — Cultural adaptation

| Task | Trigger | Version anchor |
| ---- | ------- | -------------- |
| T01 | `RW -k E21:S04:T01 --art --dpz` | `v0.21.4.1+0` |
| T02 | `RW -k E21:S04:T02 --art --dpz` | `v0.21.4.2+0` |
| T03 | `RW -k E21:S04:T03 --art --dpz` | `v0.21.4.3+0` |
| T04 | `RW -k E21:S04:T04 --art --dpz` | `v0.21.4.4+0` |
| T05 | `RW -k E21:S04:T05 --art --dpz` | `v0.21.4.5+0` |
| T06 | `RW -k E21:S04:T06 --art --dpz` | `v0.21.4.6+0` |
| T07 | `RW -k E21:S04:T07 --art --dpz` | `v0.21.4.7+0` |

### E21:S05 — European languages localization

| Task | Trigger | Version anchor |
| ---- | ------- | -------------- |
| T01 | `RW -k E21:S05:T01 --art --dpz` | `v0.21.5.1+0` |
| T02 | `RW -k E21:S05:T02 --art --dpz` | `v0.21.5.2+0` |
| T03 | `RW -k E21:S05:T03 --art --dpz` | `v0.21.5.3+0` |
| T04 | `RW -k E21:S05:T04 --art --dpz` | `v0.21.5.4+0` |

### E21:S06 — CJK languages localization

| Task | Trigger | Version anchor |
| ---- | ------- | -------------- |
| T01 | `RW -k E21:S06:T01 --art --dpz` | `v0.21.6.1+0` |
| T02 | `RW -k E21:S06:T02 --art --dpz` | `v0.21.6.2+0` |
| T03 | `RW -k E21:S06:T03 --art --dpz` | `v0.21.6.3+0` |

### E21:S07 — RTL and extended locales

| Task | Trigger | Version anchor |
| ---- | ------- | -------------- |
| T01 | `RW -k E21:S07:T01 --art --dpz` | `v0.21.7.1+0` |
| T02 | `RW -k E21:S07:T02 --art --dpz` | `v0.21.7.2+0` |

### E21:S08 — Accessibility

| Task | Trigger | Version anchor |
| ---- | ------- | -------------- |
| T01 | `RW -k E21:S08:T01 --art --dpz` | `v0.21.8.1+0` |
| T02 | `RW -k E21:S08:T02 --art --dpz` | `v0.21.8.2+0` |
| T03 | `RW -k E21:S08:T03 --art --dpz` | `v0.21.8.3+0` |
| T04 | `RW -k E21:S08:T04 --art --dpz` | `v0.21.8.4+0` |
| T05 | `RW -k E21:S08:T05 --art --dpz` | `v0.21.8.5+0` |
| T06 | `RW -k E21:S08:T06 --art --dpz` | `v0.21.8.6+0` |
| T07 | `RW -k E21:S08:T07 --art --dpz` | `v0.21.8.7+0` |

Per-task triggers are also recorded in each task doc under **Kanban-init intake**.

---

## Dependencies

**Blocks:**
- Improved accessibility for international users (i18n)
- Improved accessibility for disabled users (a11y — E21:S08)
- Cultural preference support (UK/US English)
- Broader framework adoption

**Blocked By:**
- FR-006: Localisation and Language Selection (accepted, this epic implements it)

**Coordinates With:**
- Epic 1: AI Dev Kit Core (setup processes)
- Epic 2: Workflow Management Framework (RW installer)
- Epic 4: Kanban Framework (templates and documentation)

---

## References

- `packages/frameworks/kanban/templates/COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md` - Epic 21 canonical definition
- `docs/kanban/fr-br/FR-006-localization-language-selection-uk-us-english.md` - Feature request
- `docs/kanban/fr-br/FR-115-accessibility-standards-compatibility.md` - Accessibility (a11y)
- `docs/documentation/user-docs/framework-dependency-post-template-setup-guide.md` - Setup process
- `packages/frameworks/workflow-mgt/scripts/install_release_workflow.py` - RW installer

---

