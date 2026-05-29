---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-30T12:56:00Z
expires_at: null
housekeeping_policy: keep
---

# Release v0.5.1.69+1

**Release Date:** 2026-03-30 12:55:43 UTC  
**Epic:** Epic 5 — Documentation Management  
**Story:** Story 1 — FR Repo (perpetual)  
**Task:** Task 69 — FR-064 retire `shields` branch / private-repo badges  
**Build:** 1

---

## Summary

E5:S01:T69 — **FR-064:** Removed [`.github/workflows/update-badges.yml`](../../../.github/workflows/update-badges.yml) (BYOB; same-repo **`shields`** / `shields.json` pattern). Root [README](../../../README.md) documents **static** Shields.io-only policy. [Badge guide](../../../docs/knowledge/guides/badge-setup-for-private-repos.md) callout for monorepo vs adopter BYOB. **BR-058** opening updated (dead `workflow_run` moot). Kanban + FR boards + completed lists. **Remote:** `git push origin --delete shields` after this release lands on `main`.

---

## Changes

### CI/CD

- Deleted `update-badges.yml` (no replacement).

### Documentation

- README HTML comment; FR-064 **COMPLETE**; T69 inventory + evidence; Epic-5 / Story-001 / boards; `fr-br-uxr-completed`; `kanban-completed`.

### Repository hygiene

- Orphan **`shields`** branch removed from **origin** (maintainer step post-push).

---

## References

- [FR-064](../../../docs/project-management/kanban/fr-br/FR-064-shields-branch-private-repo-badges.md)
- [T69](../../../docs/project-management/kanban/epics/Epic-5/Story-001-fr-repo/T69-shields-branch-private-repo-fr-064.md)
