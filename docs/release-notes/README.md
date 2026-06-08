---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-07T12:00:00Z
expires_at: null
housekeeping_policy: keep
sidebar_position: 1
---

# Release notes (RC ≥ 1) — alternative location

**Status:** Policy stub only — no curated posts until first RC public milestone.

This folder documents the **alternative** location for significant public release notes under the docs plugin. The **primary scaffold** in use is [`portal/blog/`](https://github.com/RMS-Ltd/ai-dev-kit/tree/main/portal/blog/) with [`RELEASE-NOTES-POLICY.md`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/portal/blog/RELEASE-NOTES-POLICY.md).

## When to use this folder vs blog

| Location | Use when |
| -------- | -------- |
| `portal/blog/` | **Default** — narrative milestone posts alongside existing blog infrastructure |
| `docs/release-notes/` | Sidebar-integrated docs category preferred over blog UX |

## Rules (both locations)

- **RC = 0:** GitHub `CHANGELOG.md` only — nothing published here.
- **RC ≥ 1:** Curated adopter-facing milestone summaries — not raw Keep-a-Changelog dumps.

**Authority:** [FR-114](../kanban/fr-br/FR-114-split-documentation-surfaces-docusaurus-public-notion-maintainer-kb.md) · [ADR-024](../architecture/standards-and-adrs/ADR-024-docusaurus-adopter-public-publish-allowlist-fr114.md) · [E05:S09:T15](../kanban/epics/epic-05/story-09-docusaurus-documentation-portal/T15-docusaurus-adopter-public-publish-allowlist-fr114.md)
