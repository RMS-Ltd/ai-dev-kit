---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-14T17:14:01Z
expires_at: null
housekeeping_policy: keep
tier: ancillary
display_title: Data Management & Database
catalog_slug: data-management-and-database
short_tag: DATA
concerns:
  - product_data
  - schema
  - migrations
excludes:
  - repo_infra_e01
adoption_order: 1
catalog_version: v4
---

# Epic 11: Data Management & Database

**Status:** TODO
MEDIUM
**Created:** [YYYY-MM-DD]
**Last updated:** [YYYY-MM-DD] (Kanban v4 template)
**Version Schema:** `0.11.S.T+B`
**Short tag:** `DATA`

---

## Story Checklist

- [ ] **E11:S01 – Schema & modelling** - TODO
- [ ] **E11:S02 – Data access layer** - TODO
- [ ] **E11:S03 – Migrations & seeding** - TODO

## Purpose

For **{PROJECT_NAME}**, **E11 DATA** (Data Management & Database) provides the **ancillary**-tier home for product_data, schema. Agents must not duplicate this concern in another tier.

## Scope

- product data
- schema
- migrations

## Excludes / wrong homes

- repo infra e01

## Overview

This epic structures **{PROJECT_NAME}** work for **Data Management & Database** (`DATA`). Use the story checklist and linked story files for finite delivery; perpetual hygiene stays on **E01:S01** when applicable.

## Stories

### E11:S01 – Schema & modelling

**Brief Summary:** For **{PROJECT_NAME}**, **E11:S01** delivers **Schema & modelling** as part of **E11 DATA**. Scope placeholders: {PROJECT_NAME}.

**Story document:** [`stories/story-01-schema-and-modelling.md`](stories/story-01-schema-and-modelling.md)

### E11:S02 – Data access layer

**Brief Summary:** For **{PROJECT_NAME}**, **E11:S02** delivers **Data access layer** as part of **E11 DATA**. Scope placeholders: {PROJECT_NAME}.

**Story document:** [`stories/story-02-data-access-layer.md`](stories/story-02-data-access-layer.md)

### E11:S03 – Migrations & seeding

**Brief Summary:** For **{PROJECT_NAME}**, **E11:S03** delivers **Migrations & seeding** as part of **E11 DATA**. Scope placeholders: {PROJECT_NAME}.

**Story document:** [`stories/story-03-migrations-and-seeding.md`](stories/story-03-migrations-and-seeding.md)

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
