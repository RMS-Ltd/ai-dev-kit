---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-14T17:14:01Z
expires_at: null
housekeeping_policy: keep
tier: ancillary
display_title: Compliance & Privacy
catalog_slug: compliance-and-privacy
short_tag: COMPLY
concerns:
  - product_compliance
  - privacy
  - gdpr_class
excludes:
  - repo_security_e07
adoption_order: 5
catalog_version: v4
---

# Epic 15: Compliance & Privacy

**Status:** TODO
MEDIUM
**Created:** [YYYY-MM-DD]
**Last updated:** [YYYY-MM-DD] (Kanban v4 template)
**Version Schema:** `0.15.S.T+B`
**Short tag:** `COMPLY`

---

## Story Checklist

- [ ] **E15:S01 – Governance & records** - TODO
- [ ] **E15:S02 – Product privacy controls** - TODO
- [ ] **E15:S03 – Processor DPAs & evidence** - TODO

## Purpose

For **{PROJECT_NAME}**, **E15 COMPLY** owns **product and process compliance** under **{REGULATORY_REGIME}** — not repo security (**E07 SEC**).

## Scope

- product compliance
- privacy
- gdpr class

## Excludes / wrong homes

- repo security e07

## Overview

This epic structures **{PROJECT_NAME}** work for **Compliance & Privacy** (`COMPLY`). Use the story checklist and linked story files for finite delivery; perpetual hygiene stays on **E01:S01** when applicable.

## Stories

### E15:S01 – Governance & records

**Brief Summary:** For **{PROJECT_NAME}**, **E15:S01** delivers **Governance & records** as part of **E15 COMPLY**. Scope placeholders: {PROJECT_NAME} {REGULATORY_REGIME}.

**Story document:** [`stories/story-01-governance-and-records.md`](stories/story-01-governance-and-records.md)

### E15:S02 – Product privacy controls

**Brief Summary:** When **{PROJECT_NAME}** processes personal data under **{REGULATORY_REGIME}**, this story implements **product-facing privacy controls**: consent capture, subject export/delete paths, and privacy-by-design review gates before release. Repo secret scanning remains **E07 SEC**; processor contracts live in **E15:S03**.

**Story document:** [`stories/story-02-product-privacy-controls.md`](stories/story-02-product-privacy-controls.md)

### E15:S03 – Processor DPAs & evidence

**Brief Summary:** For **{PROJECT_NAME}**, **E15:S03** delivers **Processor DPAs & evidence** as part of **E15 COMPLY**. Scope placeholders: {PROJECT_NAME} {REGULATORY_REGIME}.

**Story document:** [`stories/story-03-processor-dpas-and-evidence.md`](stories/story-03-processor-dpas-and-evidence.md)

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
