---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-14T17:14:01Z
expires_at: null
housekeeping_policy: keep
tier: core
display_title: Process Automation & CI/CD
catalog_slug: process-automation-and-cicd
short_tag: CICD
concerns:
  - repo_ci
  - pipeline
excludes:
  - prod_ops_e18
adoption_order: 6
catalog_version: v4
---

# Epic 06: Process Automation & CI/CD

**Status:** TODO
**Priority:** HIGH
**Created:** [YYYY-MM-DD]
**Last updated:** [YYYY-MM-DD] (Kanban v4 template)
**Version Schema:** `0.6.S.T+B`
**Short tag:** `CICD`

---

## Story Checklist

- [ ] **E06:S01 – CI/CD Pipeline Scaffold** - TODO

## Purpose

For **{PROJECT_NAME}**, **E06 CICD** (Process Automation & CI/CD) provides the **core**-tier home for repo_ci, pipeline. Agents must not duplicate this concern in another tier.

## Scope

- repo ci
- pipeline

## Excludes / wrong homes

- prod ops e18

## Overview

This epic structures **{PROJECT_NAME}** work for **Process Automation & CI/CD** (`CICD`). Use the story checklist and linked story files for finite delivery; perpetual hygiene stays on **E01:S01** when applicable.

## Stories

### E06:S01 – CI/CD Pipeline Scaffold

**Brief Summary:** For **{PROJECT_NAME}**, **E06:S01** delivers **CI/CD Pipeline Scaffold** as part of **E06 CICD**. Scope placeholders: {PROJECT_NAME} {REPO_ROOT}.

**Story document:** [`stories/story-01-ci-cd-pipeline-scaffold.md`](stories/story-01-ci-cd-pipeline-scaffold.md)

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
