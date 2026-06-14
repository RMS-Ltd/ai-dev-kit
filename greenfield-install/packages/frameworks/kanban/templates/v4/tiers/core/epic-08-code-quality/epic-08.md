---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-14T17:14:01Z
expires_at: null
housekeeping_policy: keep
tier: core
display_title: Code Quality
catalog_slug: code-quality
short_tag: CODEQ
concerns:
  - static_analysis
  - linters
  - refactor
excludes:
  - external_vendor_e17
adoption_order: 8
catalog_version: v4
---

# Epic 08: Code Quality

**Status:** TODO
**Priority:** HIGH
**Created:** [YYYY-MM-DD]
**Last updated:** [YYYY-MM-DD] (Kanban v4 template)
**Version Schema:** `0.8.S.T+B`
**Short tag:** `CODEQ`

---

## Story Checklist

- [ ] **E08:S01 – Code Quality Scaffold** - TODO
- [ ] **E08:S02 – Review & Upkeep** - TODO

## Purpose

For **{PROJECT_NAME}**, **E08 CODEQ** (Code Quality) provides the **core**-tier home for static_analysis, linters. Agents must not duplicate this concern in another tier.

## Scope

- static analysis
- linters
- refactor

## Excludes / wrong homes

- external vendor e17

## Overview

This epic structures **{PROJECT_NAME}** work for **Code Quality** (`CODEQ`). Use the story checklist and linked story files for finite delivery; perpetual hygiene stays on **E01:S01** when applicable.

## Stories

### E08:S01 – Code Quality Scaffold

**Brief Summary:** For **{PROJECT_NAME}**, **E08:S01** delivers **Code Quality Scaffold** as part of **E08 CODEQ**. Scope placeholders: {PROJECT_NAME}.

**Story document:** [`stories/story-01-code-quality-scaffold.md`](stories/story-01-code-quality-scaffold.md)

### E08:S02 – Review & Upkeep

**Brief Summary:** For **{PROJECT_NAME}**, **E08:S02** delivers **Review & Upkeep** as part of **E08 CODEQ**. Scope placeholders: {PROJECT_NAME}.

**Story document:** [`stories/story-02-review-and-upkeep.md`](stories/story-02-review-and-upkeep.md)

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
