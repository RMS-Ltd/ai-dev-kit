---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-14T17:14:01Z
expires_at: null
housekeeping_policy: keep
tier: core
display_title: Documentation
catalog_slug: documentation
short_tag: DOCS
concerns:
  - doc_scaffold
  - maintainer_kb
excludes:
  - duplicate_documentation_ancillary
adoption_order: 5
catalog_version: v4
---

# Epic 05: Documentation

**Status:** TODO
**Priority:** HIGH
**Created:** [YYYY-MM-DD]
**Last updated:** [YYYY-MM-DD] (Kanban v4 template)
**Version Schema:** `0.5.S.T+B`
**Short tag:** `DOCS`

---

## Story Checklist

- [ ] **E05:S01 – Documentation Scaffold** - TODO
- [ ] **E05:S02 – Maintainer Knowledge Base** - TODO

## Purpose

For **{PROJECT_NAME}**, **E05 DOCS** (Documentation) provides the **core**-tier home for doc_scaffold, maintainer_kb. Agents must not duplicate this concern in another tier.

## Scope

- doc scaffold
- maintainer kb

## Excludes / wrong homes

- duplicate documentation ancillary

## Overview

This epic structures **{PROJECT_NAME}** work for **Documentation** (`DOCS`). Use the story checklist and linked story files for finite delivery; perpetual hygiene stays on **E01:S01** when applicable.

## Stories

### E05:S01 – Documentation Scaffold

**Brief Summary:** For **{PROJECT_NAME}**, **E05:S01** delivers **Documentation Scaffold** as part of **E05 DOCS**. Scope placeholders: {PROJECT_NAME}.

**Story document:** [`stories/story-01-documentation-scaffold.md`](stories/story-01-documentation-scaffold.md)

### E05:S02 – Maintainer Knowledge Base

**Brief Summary:** For **{PROJECT_NAME}**, **E05:S02** delivers **Maintainer Knowledge Base** as part of **E05 DOCS**. Scope placeholders: {PROJECT_NAME} {REPO_ROOT}.

**Story document:** [`stories/story-02-maintainer-knowledge-base.md`](stories/story-02-maintainer-knowledge-base.md)

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
