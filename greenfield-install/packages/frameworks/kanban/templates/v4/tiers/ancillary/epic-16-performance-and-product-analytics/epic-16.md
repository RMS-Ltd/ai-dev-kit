---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-14T17:14:01Z
expires_at: null
housekeeping_policy: keep
tier: ancillary
display_title: Performance & Product Analytics
catalog_slug: performance-and-product-analytics
short_tag: PERFAN
concerns:
  - performance_engineering
  - product_analytics
excludes:
  - prod_sre_e18
adoption_order: 6
catalog_version: v4
---

# Epic 16: Performance & Product Analytics

**Status:** TODO
MEDIUM
**Created:** [YYYY-MM-DD]
**Last updated:** [YYYY-MM-DD] (Kanban v4 template)
**Version Schema:** `0.16.S.T+B`
**Short tag:** `PERFAN`

---

## Story Checklist

- [ ] **E16:S01 – Performance engineering** - TODO
- [ ] **E16:S02 – Product analytics & telemetry** - TODO

## Purpose

For **{PROJECT_NAME}**, **E16 PERFAN** (Performance & Product Analytics) provides the **ancillary**-tier home for performance_engineering, product_analytics. Agents must not duplicate this concern in another tier.

## Scope

- performance engineering
- product analytics

## Excludes / wrong homes

- prod sre e18

## Overview

This epic structures **{PROJECT_NAME}** work for **Performance & Product Analytics** (`PERFAN`). Use the story checklist and linked story files for finite delivery; perpetual hygiene stays on **E01:S01** when applicable.

## Stories

### E16:S01 – Performance engineering

**Brief Summary:** For **{PROJECT_NAME}**, **E16:S01** delivers **Performance engineering** as part of **E16 PERFAN**. Scope placeholders: {PROJECT_NAME}.

**Story document:** [`stories/story-01-performance-engineering.md`](stories/story-01-performance-engineering.md)

### E16:S02 – Product analytics & telemetry

**Brief Summary:** For **{PROJECT_NAME}**, **E16:S02** delivers **Product analytics & telemetry** as part of **E16 PERFAN**. Scope placeholders: {PROJECT_NAME}.

**Story document:** [`stories/story-02-product-analytics-and-telemetry.md`](stories/story-02-product-analytics-and-telemetry.md)

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
