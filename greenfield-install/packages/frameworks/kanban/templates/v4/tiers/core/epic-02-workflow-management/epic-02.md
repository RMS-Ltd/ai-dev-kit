---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-14T17:14:01Z
expires_at: null
housekeeping_policy: keep
tier: core
display_title: Workflow Management
catalog_slug: workflow-management
short_tag: WORKFLOW
concerns:
  - workflow_dev
  - bootstrap_gate
excludes:
  - product_features_e24
adoption_order: 2
catalog_version: v4
---

# Epic 02: Workflow Management

**Status:** TODO
**Priority:** HIGH
**Created:** [YYYY-MM-DD]
**Last updated:** [YYYY-MM-DD] (Kanban v4 template)
**Version Schema:** `0.2.S.T+B`
**Short tag:** `WORKFLOW`

---

## Story Checklist

- [ ] **E02:S01 – Workflow Definitions & Patterns** - TODO
- [ ] **E02:S02 – Repository Bootstrap** - TODO

## Purpose

For **{PROJECT_NAME}**, **E02 WORKFLOW** (Workflow Management) provides the **core**-tier home for workflow_dev, bootstrap_gate. Agents must not duplicate this concern in another tier.

## Scope

- workflow dev
- bootstrap gate

## Excludes / wrong homes

- product features e24

## Overview

This epic structures **{PROJECT_NAME}** work for **Workflow Management** (`WORKFLOW`). Use the story checklist and linked story files for finite delivery; perpetual hygiene stays on **E01:S01** when applicable.

## Stories

### E02:S01 – Workflow Definitions & Patterns

**Brief Summary:** For **{PROJECT_NAME}**, **E02:S01** delivers **Workflow Definitions & Patterns** as part of **E02 WORKFLOW**. Scope placeholders: {PROJECT_NAME}.

**Story document:** [`stories/story-01-workflow-definitions-and-patterns.md`](stories/story-01-workflow-definitions-and-patterns.md)

### E02:S02 – Repository Bootstrap

**Brief Summary:** For **{PROJECT_NAME}**, **E02:S02** delivers **Repository Bootstrap** as part of **E02 WORKFLOW**. Scope placeholders: {PROJECT_NAME} {REPO_ROOT}.

**Story document:** [`stories/story-02-repository-bootstrap.md`](stories/story-02-repository-bootstrap.md)

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
