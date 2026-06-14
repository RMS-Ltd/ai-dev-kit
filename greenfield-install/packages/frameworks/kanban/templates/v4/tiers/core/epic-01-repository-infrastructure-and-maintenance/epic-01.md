---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-14T17:14:01Z
expires_at: null
housekeeping_policy: keep
tier: core
display_title: Repository Infrastructure & Maintenance
catalog_slug: repository-infrastructure-and-maintenance
short_tag: REPO
concerns:
  - repo_hygiene
  - versioning_substrate
  - test_harness
excludes:
  - product_delivery_e24
adoption_order: 1
catalog_version: v4
---

# Epic 01: Repository Infrastructure & Maintenance

**Status:** TODO
**Priority:** HIGH
**Created:** [YYYY-MM-DD]
**Last updated:** [YYYY-MM-DD] (Kanban v4 template)
**Version Schema:** `0.1.S.T+B`
**Short tag:** `REPO`

---

## Story Checklist

- [ ] **E01:S01 – Perpetual Operations** - TODO
- [ ] **E01:S02 – Versioning & Release Numbering** - TODO
- [ ] **E01:S03 – Test Harness & Gates** - TODO

## Purpose

For **{PROJECT_NAME}**, **E01 REPO** (Repository Infrastructure & Maintenance) provides the **core**-tier home for repo_hygiene, versioning_substrate. Agents must not duplicate this concern in another tier.

## Scope

- repo hygiene
- versioning substrate
- test harness

## Excludes / wrong homes

- product delivery e24

## Overview

This epic structures **{PROJECT_NAME}** work for **Repository Infrastructure & Maintenance** (`REPO`). Use the story checklist and linked story files for finite delivery; perpetual hygiene stays on **E01:S01** when applicable.

## Stories

### E01:S01 – Perpetual Operations

**Brief Summary:** For **{PROJECT_NAME}**, **E01:S01** delivers **Perpetual Operations** as part of **E01 REPO**. Scope placeholders: {PROJECT_NAME}.

**Story document:** [`stories/story-01-perpetual-operations.md`](stories/story-01-perpetual-operations.md)

### E01:S02 – Versioning & Release Numbering

**Brief Summary:** For **{PROJECT_NAME}**, **E01:S02** delivers **Versioning & Release Numbering** as part of **E01 REPO**. Scope placeholders: {PROJECT_NAME}.

**Story document:** [`stories/story-02-versioning-and-release-numbering.md`](stories/story-02-versioning-and-release-numbering.md)

### E01:S03 – Test Harness & Gates

**Brief Summary:** For **{PROJECT_NAME}**, **E01:S03** delivers **Test Harness & Gates** as part of **E01 REPO**. Scope placeholders: {PROJECT_NAME}.

**Story document:** [`stories/story-03-test-harness-and-gates.md`](stories/story-03-test-harness-and-gates.md)

## Dependencies

**Blocks:**
- *(Epic-level dependencies for {PROJECT_NAME})*

**Blocked By:**
- **E02:S02** Repository Bootstrap (for domain delivery on E24+)

**Coordinates With:**
- Other **core** epics per DUPLICATE_EPIC_POLICY.md

## References

- [DUPLICATE_EPIC_POLICY.md](../../guides/DUPLICATE_EPIC_POLICY.md)
- [TEMPLATE_CONTENT_CONTRACT.md](../../guides/TEMPLATE_CONTENT_CONTRACT.md)
- [13-v4-three-tier-catalogue.md](https://github.com/RMS-Ltd/ai-dev-kit/blob/dev/docs/knowledge/analysis/kanban-v2/13-v4-three-tier-catalogue.md)
