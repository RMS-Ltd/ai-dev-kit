---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-14T17:14:01Z
expires_at: null
housekeeping_policy: keep
tier: core
display_title: Security
catalog_slug: security
short_tag: SEC
concerns:
  - repo_security_baseline
  - dependency_scan
excludes:
  - product_auth_e14
  - product_compliance_e15
adoption_order: 7
catalog_version: v4
---

# Epic 07: Security

**Status:** TODO
**Priority:** HIGH
**Created:** [YYYY-MM-DD]
**Last updated:** [YYYY-MM-DD] (Kanban v4 template)
**Version Schema:** `0.7.S.T+B`
**Short tag:** `SEC`

---

## Story Checklist

- [ ] **E07:S01 – Security Baseline** - TODO

## Purpose

For **{PROJECT_NAME}**, **E07 SEC** owns the **repository security baseline** — policies and automated hooks on **{REPO_ROOT}** — not product login (**E14 AUTH**) or regulatory compliance (**E15 COMPLY**).

## Scope

- repo security baseline
- dependency scan

## Excludes / wrong homes

- product auth e14
- product compliance e15
- Product authentication → **E14 AUTH**
- UK GDPR / DPIA pack → **E15 COMPLY**
- Prod WAF → **E18 PRODOPS**

## Overview

This epic structures **{PROJECT_NAME}** work for **Security** (`SEC`). Use the story checklist and linked story files for finite delivery; perpetual hygiene stays on **E01:S01** when applicable.

## Stories

### E07:S01 – Security Baseline

**Brief Summary:** For **{PROJECT_NAME}**, **E07:S01** delivers **Security Baseline** as part of **E07 SEC**. Scope placeholders: {PROJECT_NAME}.

**Story document:** [`stories/story-01-security-baseline.md`](stories/story-01-security-baseline.md)

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
