---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-14T17:14:01Z
expires_at: null
housekeeping_policy: keep
tier: domain
display_title: {DOMAIN_NAME} Delivery
catalog_slug: {domain-slug}-delivery
short_tag: DOMAIN
concerns:
  - product_delivery
excludes:
  - core_scaffold
  - ancillary_capability
catalog_version: v4
---

# Epic 24: {DOMAIN_NAME} Delivery

**Status:** TODO
MEDIUM
**Created:** [YYYY-MM-DD]
**Last updated:** [YYYY-MM-DD] (Kanban v4 template)
**Version Schema:** `0.24.S.T+B`
**Short tag:** `DOMAIN`

---

## Story Checklist

- [ ] **E24:S01 – First delivery tranche** - TODO

## Purpose

For **{PROJECT_NAME}**, **E24 DOMAIN** ({DOMAIN_NAME} Delivery) provides the **domain**-tier home for product_delivery. Agents must not duplicate this concern in another tier.

## Scope

- product delivery

## Excludes / wrong homes

- core scaffold
- ancillary capability

## Overview

This epic structures **{PROJECT_NAME}** work for **{DOMAIN_NAME} Delivery** (`DOMAIN`). Use the story checklist and linked story files for finite delivery; perpetual hygiene stays on **E01:S01** when applicable.

## Stories

### E24:S01 – First delivery tranche

**Brief Summary:** For **{PROJECT_NAME}**, **E24:S01** delivers **First delivery tranche** as part of **E24 DOMAIN**. Scope placeholders: {PROJECT_NAME} {DOMAIN_NAME}.

**Story document:** [`stories/story-01-first-delivery-tranche.md`](stories/story-01-first-delivery-tranche.md)

## Dependencies

**Blocks:**
- *(Epic-level dependencies for {PROJECT_NAME})*

**Blocked By:**
- **E02:S02** Repository Bootstrap (for domain delivery on E24+)

**Coordinates With:**
- Other **domain** epics per DUPLICATE_EPIC_POLICY.md

## References

- [DUPLICATE_EPIC_POLICY.md](../../guides/DUPLICATE_EPIC_POLICY.md)
- [TEMPLATE_CONTENT_CONTRACT.md](../../guides/TEMPLATE_CONTENT_CONTRACT.md)
- [13-v4-three-tier-catalogue.md](https://github.com/RMS-Ltd/ai-dev-kit/blob/dev/docs/knowledge/analysis/kanban-v2/13-v4-three-tier-catalogue.md)
