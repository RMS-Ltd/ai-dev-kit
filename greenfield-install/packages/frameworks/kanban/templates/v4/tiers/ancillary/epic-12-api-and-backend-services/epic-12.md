---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-14T17:14:01Z
expires_at: null
housekeeping_policy: keep
tier: ancillary
display_title: API & Backend Services
catalog_slug: api-and-backend-services
short_tag: API
concerns:
  - api_design
  - service_impl
excludes:
  []
adoption_order: 2
catalog_version: v4
---

# Epic 12: API & Backend Services

**Status:** TODO
MEDIUM
**Created:** [YYYY-MM-DD]
**Last updated:** [YYYY-MM-DD] (Kanban v4 template)
**Version Schema:** `0.12.S.T+B`
**Short tag:** `API`

---

## Story Checklist

- [ ] **E12:S01 – API design** - TODO
- [ ] **E12:S02 – Service implementation** - TODO
- [ ] **E12:S03 – API docs & contracts** - TODO

## Purpose

For **{PROJECT_NAME}**, **E12 API** (API & Backend Services) provides the **ancillary**-tier home for api_design, service_impl. Agents must not duplicate this concern in another tier.

## Scope

- api design
- service impl

## Excludes / wrong homes

- *(none — reserved slot)*

## Overview

This epic structures **{PROJECT_NAME}** work for **API & Backend Services** (`API`). Use the story checklist and linked story files for finite delivery; perpetual hygiene stays on **E01:S01** when applicable.

## Stories

### E12:S01 – API design

**Brief Summary:** For **{PROJECT_NAME}**, **E12:S01** delivers **API design** as part of **E12 API**. Scope placeholders: {PROJECT_NAME}.

**Story document:** [`stories/story-01-api-design.md`](stories/story-01-api-design.md)

### E12:S02 – Service implementation

**Brief Summary:** For **{PROJECT_NAME}**, **E12:S02** delivers **Service implementation** as part of **E12 API**. Scope placeholders: {PROJECT_NAME}.

**Story document:** [`stories/story-02-service-implementation.md`](stories/story-02-service-implementation.md)

### E12:S03 – API docs & contracts

**Brief Summary:** For **{PROJECT_NAME}**, **E12:S03** delivers **API docs & contracts** as part of **E12 API**. Scope placeholders: {PROJECT_NAME}.

**Story document:** [`stories/story-03-api-docs-and-contracts.md`](stories/story-03-api-docs-and-contracts.md)

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
