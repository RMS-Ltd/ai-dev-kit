---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-14T17:14:01Z
expires_at: null
housekeeping_policy: keep
tier: ancillary
display_title: External Vendor Services
catalog_slug: external-vendor-services
short_tag: VENDOR
concerns:
  - external_api
  - webhook
  - payment_provider
excludes:
  - pypi_npm_e08
  - dev_tooling
adoption_order: 7
catalog_version: v4
---

# Epic 17: External Vendor Services

**Status:** TODO
MEDIUM
**Created:** [YYYY-MM-DD]
**Last updated:** [YYYY-MM-DD] (Kanban v4 template)
**Version Schema:** `0.17.S.T+B`
**Short tag:** `VENDOR`

---

## Story Checklist

- [ ] **E17:S01 – Vendor API integration** - TODO
- [ ] **E17:S02 – Webhooks** - TODO
- [ ] **E17:S03 – Payments** - TODO
- [ ] **E17:S04 – External system sync** - TODO

## Purpose

For **{PROJECT_NAME}**, **E17 VENDOR** (External Vendor Services) provides the **ancillary**-tier home for external_api, webhook. Agents must not duplicate this concern in another tier.

## Scope

- external api
- webhook
- payment provider

## Excludes / wrong homes

- pypi npm e08
- dev tooling

## Overview

This epic structures **{PROJECT_NAME}** work for **External Vendor Services** (`VENDOR`). Use the story checklist and linked story files for finite delivery; perpetual hygiene stays on **E01:S01** when applicable.

## Stories

### E17:S01 – Vendor API integration

**Brief Summary:** For **{PROJECT_NAME}**, **E17:S01** delivers **Vendor API integration** as part of **E17 VENDOR**. Scope placeholders: {PROJECT_NAME}.

**Story document:** [`stories/story-01-vendor-api-integration.md`](stories/story-01-vendor-api-integration.md)

### E17:S02 – Webhooks

**Brief Summary:** For **{PROJECT_NAME}**, **E17:S02** delivers **Webhooks** as part of **E17 VENDOR**. Scope placeholders: {PROJECT_NAME}.

**Story document:** [`stories/story-02-webhooks.md`](stories/story-02-webhooks.md)

### E17:S03 – Payments

**Brief Summary:** For **{PROJECT_NAME}**, **E17:S03** delivers **Payments** as part of **E17 VENDOR**. Scope placeholders: {PROJECT_NAME}.

**Story document:** [`stories/story-03-payments.md`](stories/story-03-payments.md)

### E17:S04 – External system sync

**Brief Summary:** For **{PROJECT_NAME}**, **E17:S04** delivers **External system sync** as part of **E17 VENDOR**. Scope placeholders: {PROJECT_NAME}.

**Story document:** [`stories/story-04-external-system-sync.md`](stories/story-04-external-system-sync.md)

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
