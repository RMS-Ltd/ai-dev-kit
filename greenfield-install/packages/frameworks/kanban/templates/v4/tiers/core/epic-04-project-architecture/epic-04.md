---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-14T17:14:01Z
expires_at: null
housekeeping_policy: keep
tier: core
display_title: Project Architecture
catalog_slug: project-architecture
short_tag: ARCH
concerns:
  - adr
  - system_design
excludes:
  - code_refactors_e08
adoption_order: 4
catalog_version: v4
---

# Epic 04: Project Architecture

**Status:** TODO
**Priority:** HIGH
**Created:** [YYYY-MM-DD]
**Last updated:** [YYYY-MM-DD] (Kanban v4 template)
**Version Schema:** `0.4.S.T+B`
**Short tag:** `ARCH`

---

## Story Checklist

- [ ] **E04:S01 – ADR Scaffold & Architecture Layout** - TODO

## Purpose

For **{PROJECT_NAME}**, **E04 ARCH** (Project Architecture) provides the **core**-tier home for adr, system_design. Agents must not duplicate this concern in another tier.

## Scope

- adr
- system design

## Excludes / wrong homes

- code refactors e08

## Overview

This epic structures **{PROJECT_NAME}** work for **Project Architecture** (`ARCH`). Use the story checklist and linked story files for finite delivery; perpetual hygiene stays on **E01:S01** when applicable.

## Stories

### E04:S01 – ADR Scaffold & Architecture Layout

**Brief Summary:** For **{PROJECT_NAME}**, **E04:S01** delivers **ADR Scaffold & Architecture Layout** as part of **E04 ARCH**. Scope placeholders: {PROJECT_NAME}.

**Story document:** [`stories/story-01-adr-scaffold-and-architecture-layout.md`](stories/story-01-adr-scaffold-and-architecture-layout.md)

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
