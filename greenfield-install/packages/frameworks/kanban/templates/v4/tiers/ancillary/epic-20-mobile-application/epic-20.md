---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-14T17:14:01Z
expires_at: null
housekeeping_policy: keep
tier: ancillary
display_title: Mobile Application
catalog_slug: mobile-application
short_tag: MOBILE
concerns:
  - native_mobile
  - app_stores
excludes:
  - web_ui_e13
adoption_order: 10
catalog_version: v4
---

# Epic 20: Mobile Application

**Status:** TODO
MEDIUM
**Created:** [YYYY-MM-DD]
**Last updated:** [YYYY-MM-DD] (Kanban v4 template)
**Version Schema:** `0.20.S.T+B`
**Short tag:** `MOBILE`

---

## Story Checklist

- [ ] **E20:S01 – App foundation** - TODO
- [ ] **E20:S02 – Mobile UI** - TODO
- [ ] **E20:S03 – Store deployment** - TODO

## Purpose

For **{PROJECT_NAME}**, **E20 MOBILE** (Mobile Application) provides the **ancillary**-tier home for native_mobile, app_stores. Agents must not duplicate this concern in another tier.

## Scope

- native mobile
- app stores

## Excludes / wrong homes

- web ui e13

## Overview

This epic structures **{PROJECT_NAME}** work for **Mobile Application** (`MOBILE`). Use the story checklist and linked story files for finite delivery; perpetual hygiene stays on **E01:S01** when applicable.

## Stories

### E20:S01 – App foundation

**Brief Summary:** For **{PROJECT_NAME}**, **E20:S01** delivers **App foundation** as part of **E20 MOBILE**. Scope placeholders: {PROJECT_NAME}.

**Story document:** [`stories/story-01-app-foundation.md`](stories/story-01-app-foundation.md)

### E20:S02 – Mobile UI

**Brief Summary:** For **{PROJECT_NAME}**, **E20:S02** delivers **Mobile UI** as part of **E20 MOBILE**. Scope placeholders: {PROJECT_NAME}.

**Story document:** [`stories/story-02-mobile-ui.md`](stories/story-02-mobile-ui.md)

### E20:S03 – Store deployment

**Brief Summary:** For **{PROJECT_NAME}**, **E20:S03** delivers **Store deployment** as part of **E20 MOBILE**. Scope placeholders: {PROJECT_NAME}.

**Story document:** [`stories/story-03-store-deployment.md`](stories/story-03-store-deployment.md)

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
