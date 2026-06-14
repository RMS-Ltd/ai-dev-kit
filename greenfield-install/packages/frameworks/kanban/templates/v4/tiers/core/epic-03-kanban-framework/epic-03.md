---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-14T17:14:01Z
expires_at: null
housekeeping_policy: keep
tier: core
display_title: Kanban Framework
catalog_slug: kanban-framework
short_tag: KANBAN
concerns:
  - board_governance
  - intake_fr_br_uxr
excludes:
  - standalone_fr_epic
adoption_order: 3
catalog_version: v4
---

# Epic 03: Kanban Framework

**Status:** TODO
**Priority:** HIGH
**Created:** [YYYY-MM-DD]
**Last updated:** [YYYY-MM-DD] (Kanban v4 template)
**Version Schema:** `0.3.S.T+B`
**Short tag:** `KANBAN`

---

## Story Checklist

- [ ] **E03:S01 – Board Setup & Governance** - TODO
- [ ] **E03:S02 – FR Implementation** - TODO
- [ ] **E03:S03 – BR Implementation** - TODO
- [ ] **E03:S04 – UXR Implementation** - TODO

## Purpose

For **{PROJECT_NAME}**, **E03 KANBAN** (Kanban Framework) provides the **core**-tier home for board_governance, intake_fr_br_uxr. Agents must not duplicate this concern in another tier.

## Scope

- board governance
- intake fr br uxr

## Excludes / wrong homes

- standalone fr epic

## Overview

This epic structures **{PROJECT_NAME}** work for **Kanban Framework** (`KANBAN`). Use the story checklist and linked story files for finite delivery; perpetual hygiene stays on **E01:S01** when applicable.

## Stories

### E03:S01 – Board Setup & Governance

**Brief Summary:** For **{PROJECT_NAME}**, **E03:S01** delivers **Board Setup & Governance** as part of **E03 KANBAN**. Scope placeholders: {PROJECT_NAME} {KANBAN_ROOT}.

**Story document:** [`stories/story-01-board-setup-and-governance.md`](stories/story-01-board-setup-and-governance.md)

### E03:S02 – FR Implementation

**Brief Summary:** For **{PROJECT_NAME}**, **E03:S02** delivers **FR Implementation** as part of **E03 KANBAN**. Scope placeholders: {PROJECT_NAME}.

**Story document:** [`stories/story-02-fr-implementation.md`](stories/story-02-fr-implementation.md)

### E03:S03 – BR Implementation

**Brief Summary:** For **{PROJECT_NAME}**, **E03:S03** delivers **BR Implementation** as part of **E03 KANBAN**. Scope placeholders: {PROJECT_NAME}.

**Story document:** [`stories/story-03-br-implementation.md`](stories/story-03-br-implementation.md)

### E03:S04 – UXR Implementation

**Brief Summary:** For **{PROJECT_NAME}**, **E03:S04** delivers **UXR Implementation** as part of **E03 KANBAN**. Scope placeholders: {PROJECT_NAME}.

**Story document:** [`stories/story-04-uxr-implementation.md`](stories/story-04-uxr-implementation.md)

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
