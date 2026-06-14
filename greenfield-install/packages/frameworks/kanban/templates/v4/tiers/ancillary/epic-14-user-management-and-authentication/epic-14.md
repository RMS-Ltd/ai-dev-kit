---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-14T17:14:01Z
expires_at: null
housekeeping_policy: keep
tier: ancillary
display_title: User Management & Authentication
catalog_slug: user-management-and-authentication
short_tag: AUTH
concerns:
  - authentication
  - authorization
  - profiles
excludes:
  - repo_security_e07
adoption_order: 4
catalog_version: v4
---

# Epic 14: User Management & Authentication

**Status:** TODO
MEDIUM
**Created:** [YYYY-MM-DD]
**Last updated:** [YYYY-MM-DD] (Kanban v4 template)
**Version Schema:** `0.14.S.T+B`
**Short tag:** `AUTH`

---

## Story Checklist

- [ ] **E14:S01 – Authentication** - TODO
- [ ] **E14:S02 – Authorization** - TODO
- [ ] **E14:S03 – Profiles & sessions** - TODO
- [ ] **E14:S04 – Roles & permissions (RBAC)** - TODO

## Purpose

For **{PROJECT_NAME}**, **E14 AUTH** (User Management & Authentication) provides the **ancillary**-tier home for authentication, authorization. Agents must not duplicate this concern in another tier.

## Scope

- authentication
- authorization
- profiles

## Excludes / wrong homes

- repo security e07

## Overview

This epic structures **{PROJECT_NAME}** work for **User Management & Authentication** (`AUTH`). Use the story checklist and linked story files for finite delivery; perpetual hygiene stays on **E01:S01** when applicable.

## Stories

### E14:S01 – Authentication

**Brief Summary:** For **{PROJECT_NAME}**, **E14:S01** delivers **Authentication** as part of **E14 AUTH**. Scope placeholders: {PROJECT_NAME}.

**Story document:** [`stories/story-01-authentication.md`](stories/story-01-authentication.md)

### E14:S02 – Authorization

**Brief Summary:** For **{PROJECT_NAME}**, **E14:S02** delivers **Authorization** as part of **E14 AUTH**. Scope placeholders: {PROJECT_NAME}.

**Story document:** [`stories/story-02-authorization.md`](stories/story-02-authorization.md)

### E14:S03 – Profiles & sessions

**Brief Summary:** For **{PROJECT_NAME}**, **E14:S03** delivers **Profiles & sessions** as part of **E14 AUTH**. Scope placeholders: {PROJECT_NAME}.

**Story document:** [`stories/story-03-profiles-and-sessions.md`](stories/story-03-profiles-and-sessions.md)

### E14:S04 – Roles & permissions (RBAC)

**Brief Summary:** For **{PROJECT_NAME}**, **E14:S04** delivers **Roles & permissions (RBAC)** as part of **E14 AUTH**. Scope placeholders: {PROJECT_NAME}.

**Story document:** [`stories/story-04-roles-and-permissions-rbac.md`](stories/story-04-roles-and-permissions-rbac.md)

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
