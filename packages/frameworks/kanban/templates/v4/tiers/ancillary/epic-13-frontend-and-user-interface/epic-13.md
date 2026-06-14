---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-14T17:14:01Z
expires_at: null
housekeeping_policy: keep
tier: ancillary
display_title: Frontend & User Interface
catalog_slug: frontend-and-user-interface
short_tag: UI
concerns:
  - web_ui
  - components
excludes:
  - native_mobile_e20
adoption_order: 3
catalog_version: v4
---

# Epic 13: Frontend & User Interface

**Status:** TODO
MEDIUM
**Created:** [YYYY-MM-DD]
**Last updated:** [YYYY-MM-DD] (Kanban v4 template)
**Version Schema:** `0.13.S.T+B`
**Short tag:** `UI`

---

## Story Checklist

- [ ] **E13:S01 – UI framework** - TODO
- [ ] **E13:S02 – Core components** - TODO
- [ ] **E13:S03 – Feature UI** - TODO

## Purpose

For **{PROJECT_NAME}**, **E13 UI** (Frontend & User Interface) provides the **ancillary**-tier home for web_ui, components. Agents must not duplicate this concern in another tier.

## Scope

- web ui
- components

## Excludes / wrong homes

- native mobile e20

## Overview

This epic structures **{PROJECT_NAME}** work for **Frontend & User Interface** (`UI`). Use the story checklist and linked story files for finite delivery; perpetual hygiene stays on **E01:S01** when applicable.

## Stories

### E13:S01 – UI framework

**Brief Summary:** For **{PROJECT_NAME}**, **E13:S01** delivers **UI framework** as part of **E13 UI**. Scope placeholders: {PROJECT_NAME}.

**Story document:** [`stories/story-01-ui-framework.md`](stories/story-01-ui-framework.md)

### E13:S02 – Core components

**Brief Summary:** For **{PROJECT_NAME}**, **E13:S02** delivers **Core components** as part of **E13 UI**. Scope placeholders: {PROJECT_NAME}.

**Story document:** [`stories/story-02-core-components.md`](stories/story-02-core-components.md)

### E13:S03 – Feature UI

**Brief Summary:** For **{PROJECT_NAME}**, **E13:S03** delivers **Feature UI** as part of **E13 UI**. Scope placeholders: {PROJECT_NAME}.

**Story document:** [`stories/story-03-feature-ui.md`](stories/story-03-feature-ui.md)

## Dependencies

**Blocks:**
- *(Epic-level dependencies for {PROJECT_NAME})*

**Blocked By:**
- **E02:S02** Repository Bootstrap (for domain delivery on E24+)

**Coordinates With:**
- Other **ancillary** epics per DUPLICATE_EPIC_POLICY.md

## References

- [DUPLICATE_EPIC_POLICY.md](../../guides/DUPLICATE_EPIC_POLICY.md)
- [TEMPLATE_CONTENT_CONTRACT.md](../../guides/TEMPLATE_CONTENT_CONTRACT.md)
- [13-v4-three-tier-catalogue.md](https://github.com/RMS-Ltd/ai-dev-kit/blob/dev/docs/knowledge/analysis/kanban-v2/13-v4-three-tier-catalogue.md)
