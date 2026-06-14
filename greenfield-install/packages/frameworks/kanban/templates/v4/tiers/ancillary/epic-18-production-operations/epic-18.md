---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-14T17:14:01Z
expires_at: null
housekeeping_policy: keep
tier: ancillary
display_title: Production Operations
catalog_slug: production-operations
short_tag: PRODOPS
concerns:
  - deployment_topology
  - prod_observability
  - incidents
excludes:
  - repo_ci_e06
  - local_venv
adoption_order: 8
catalog_version: v4
---

# Epic 18: Production Operations

**Status:** TODO
MEDIUM
**Created:** [YYYY-MM-DD]
**Last updated:** [YYYY-MM-DD] (Kanban v4 template)
**Version Schema:** `0.18.S.T+B`
**Short tag:** `PRODOPS`

---

## Story Checklist

- [ ] **E18:S01 – Deployment topology** - TODO
- [ ] **E18:S02 – Prod observability** - TODO
- [ ] **E18:S03 – Incident runbooks** - TODO

## Purpose

For **{PROJECT_NAME}**, **E18 PRODOPS** (Production Operations) provides the **ancillary**-tier home for deployment_topology, prod_observability. Agents must not duplicate this concern in another tier.

## Scope

- deployment topology
- prod observability
- incidents

## Excludes / wrong homes

- repo ci e06
- local venv

## Overview

This epic structures **{PROJECT_NAME}** work for **Production Operations** (`PRODOPS`). Use the story checklist and linked story files for finite delivery; perpetual hygiene stays on **E01:S01** when applicable.

## Stories

### E18:S01 – Deployment topology

**Brief Summary:** For **{PROJECT_NAME}**, **E18:S01** delivers **Deployment topology** as part of **E18 PRODOPS**. Scope placeholders: {PROJECT_NAME} {HOSTING_PLATFORM}.

**Story document:** [`stories/story-01-deployment-topology.md`](stories/story-01-deployment-topology.md)

### E18:S02 – Prod observability

**Brief Summary:** For **{PROJECT_NAME}**, **E18:S02** delivers **Prod observability** as part of **E18 PRODOPS**. Scope placeholders: {PROJECT_NAME}.

**Story document:** [`stories/story-02-prod-observability.md`](stories/story-02-prod-observability.md)

### E18:S03 – Incident runbooks

**Brief Summary:** For **{PROJECT_NAME}**, **E18:S03** delivers **Incident runbooks** as part of **E18 PRODOPS**. Scope placeholders: {PROJECT_NAME}.

**Story document:** [`stories/story-03-incident-runbooks.md`](stories/story-03-incident-runbooks.md)

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
