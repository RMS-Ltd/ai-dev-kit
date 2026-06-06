---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-06T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 5, Story 9, Task 15: Docusaurus adopter-public publish allowlist (**FR-114**)

**Task ID:** E05:S09:T15  
**Status:** TODO  
**Priority:** HIGH  
**Created:** 2026-06-06  
**Last updated:** 2026-06-06 (v0.5.9.15+1 — RW -k intake)  
**Version:** v0.5.9.15+1  
**Code:** E05S09T15

Publication Status: NOT_APPLICABLE

---

## Associated FR

- [FR-114 — Split documentation surfaces (Docusaurus public + Notion maintainer KB)](../../../fr-br/FR-114-split-documentation-surfaces-docusaurus-public-notion-maintainer-kb.md)

---

## Input

- [FR-114](../../../fr-br/FR-114-split-documentation-surfaces-docusaurus-public-notion-maintainer-kb.md) decision record and allowlist starter
- [`portal/docusaurus.config.js`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/portal/docusaurus.config.js)
- [`portal/sidebars.js`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/portal/sidebars.js)
- [`portal/README.md`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/portal/README.md) — FR-066 publish scope
- [FR-066](../../../fr-br/FR-066-docusaurus-canonical-docs-path-and-publish-scope.md) · [FR-067](../../../fr-br/FR-067-docusaurus-production-build-corpus-triage.md)

---

## Scope

Rescope the Docusaurus portal from “publish nearly all `docs/`” to an explicit **adopter-public allowlist**. Internal standards and CHANGELOG remain on GitHub. Define RC ≥ 1 **significant release notes** location (no raw changelog on portal).

---

## Deliverables

1. **Allowlist** — Final include/exclude paths documented in `portal/README.md` (supersedes FR-066 breadth).
2. **Portal config** — `docusaurus.config.js` `exclude` / plugin scope; `sidebars.js` trimmed to adopter-facing categories only.
3. **CI** — Narrow `.github/workflows/docusaurus-build.yml` path filters so excluded maintainer `docs/` edits do not trigger build (where practical).
4. **RC release notes stub** — Policy + empty `portal/blog/` or `docs/release-notes/` scaffold for post-RC milestones (implementation of content deferred until RC ≥ 1).
5. **Tests** — Update `tests/test_portal_fr066*.py` / navigation tests for new IA.

---

## Acceptance Criteria

- [ ] `npm run build` green on allowlisted corpus only.
- [ ] Sidebar reflects adopter-public categories (guides, adopter documentation, portal index; no Kanban/IPP/knowledge/analysis/maintenance).
- [ ] `portal/README.md` documents allowlist and “internal stds → GitHub blob” linking policy.
- [ ] CI path filters documented; maintainer-only `docs/` edits do not require portal build when excluded.
- [ ] RC ≥ 1 significant release notes policy and scaffold location documented.

---

## References

- [FR-114](../../../fr-br/FR-114-split-documentation-surfaces-docusaurus-public-notion-maintainer-kb.md)
- [E05:S09:T02 — Publish scope (FR-066)](T02-docusaurus-publish-scope-fr-066.md)
- [ultimate-canonical-kb-structure.md](../../../../../architecture/standards-and-adrs/ultimate-canonical-kb-structure.md)
