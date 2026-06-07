# Changelog v0.5.8.4+2 — E05:S08:T04 FR-114 Notion-first bootstrap routing

**Release Date:** 2026-06-07 10:46:29 UTC  
**Internal Version:** v0.5.8.4+2  
**SemVer:** v0.4.1034+2  
**Epic:** 5 | **Story:** 8 | **Task:** 4

---

## Summary

**FR-114 F4/F5** — Agent Notion-first authoring and bootstrap routing: binding **ADR-024** (three-surface model), **`maintainer-kb`** cold-start track, **P-NOTION-FIRST** protocol, manifest `documentationSurfaces`, stub template canon, pytest contract.

---

## Added

- [ADR-024](../../architecture/standards-and-adrs/ADR-024-documentation-surfaces-three-surface-model-fr114.md) — documentation surfaces (Docusaurus / Notion / git)
- [IPP-E05S08T04](../../implementation-cycles/IPP-E05S08T04-agent-notion-first-authoring-and-bootstrap-routing-fr114.md)
- `tests/test_agent_bootstrap_fr114_notion_routing.py` — bootstrap routing contract tests
- `maintainer-kb` track in `AGENTS.md` and `project-agent-manifest.json`
- `P-NOTION-FIRST` binding rule; manifest `documentationSurfaces` section

## Changed

- `AGENTS.md` — Notion-first anti-patterns; `maintainer-kb` routing row
- `docs/project-agent-manifest.schema.json` — optional `documentationSurfaces`
- `docs/knowledge/README.md` — stub format points to ADR-024
- `ultimate-canonical-kb-structure.md` git stub — ADR-024 cross-link + pillars doctrine pointer

## References

- [FR-114](../../project-management/kanban/fr-br/FR-114-split-documentation-surfaces-docusaurus-public-notion-maintainer-kb.md)
- [E05:S08:T03](../../project-management/kanban/epics/epic-05/story-08-knowledge-base/T03-big-bang-notion-migration-maintainer-kb-fr114.md)
- [E05:S09:T15](../../project-management/kanban/epics/epic-05/story-09-docusaurus-documentation-portal/T15-docusaurus-adopter-public-publish-allowlist-fr114.md)
