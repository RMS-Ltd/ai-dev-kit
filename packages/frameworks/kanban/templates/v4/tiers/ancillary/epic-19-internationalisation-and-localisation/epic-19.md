---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-14T17:14:01Z
expires_at: null
housekeeping_policy: keep
tier: ancillary
display_title: Internationalisation & Localisation
catalog_slug: internationalisation-and-localisation
short_tag: I18N
concerns:
  - i18n
  - translation
  - locale
excludes:
  []
adoption_order: 9
catalog_version: v4
---

# Epic 19: Internationalisation & Localisation

**Status:** TODO
MEDIUM
**Created:** [YYYY-MM-DD]
**Last updated:** [YYYY-MM-DD] (Kanban v4 template)
**Version Schema:** `0.19.S.T+B`
**Short tag:** `I18N`

---

## Story Checklist

- [ ] **E19:S01 – i18n infrastructure** - TODO
- [ ] **E19:S02 – Translation** - TODO
- [ ] **E19:S03 – Cultural adaptation** - TODO

## Purpose

For **{PROJECT_NAME}**, **E19 I18N** (Internationalisation & Localisation) provides the **ancillary**-tier home for i18n, translation. Agents must not duplicate this concern in another tier.

## Scope

- i18n
- translation
- locale

## Excludes / wrong homes

- *(none — reserved slot)*

## Overview

This epic structures **{PROJECT_NAME}** work for **Internationalisation & Localisation** (`I18N`). Use the story checklist and linked story files for finite delivery; perpetual hygiene stays on **E01:S01** when applicable.

## Stories

### E19:S01 – i18n infrastructure

**Brief Summary:** For **{PROJECT_NAME}**, **E19:S01** delivers **i18n infrastructure** as part of **E19 I18N**. Scope placeholders: {PROJECT_NAME} {PRIMARY_LOCALE}.

**Story document:** [`stories/story-01-i18n-infrastructure.md`](stories/story-01-i18n-infrastructure.md)

### E19:S02 – Translation

**Brief Summary:** For **{PROJECT_NAME}**, **E19:S02** delivers **Translation** as part of **E19 I18N**. Scope placeholders: {PRIMARY_LOCALE}.

**Story document:** [`stories/story-02-translation.md`](stories/story-02-translation.md)

### E19:S03 – Cultural adaptation

**Brief Summary:** For **{PROJECT_NAME}**, **E19:S03** delivers **Cultural adaptation** as part of **E19 I18N**. Scope placeholders: {PROJECT_NAME}.

**Story document:** [`stories/story-03-cultural-adaptation.md`](stories/story-03-cultural-adaptation.md)

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
