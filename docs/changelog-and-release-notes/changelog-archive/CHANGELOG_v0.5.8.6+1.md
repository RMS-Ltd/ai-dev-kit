# Changelog v0.5.8.6+1

**Release Date:** 2026-06-09 16:31:43 UTC  
**Epic:** 5 | **Story:** 8 | **Task:** 6  
**Internal Version:** 0.5.8.6+1  
**SemVer:** v0.4.11+1

---

## Summary

**E05:S08:T06** — FR-121 wave 2: ADR-026 two-surface model; git-maintainer bootstrap rewire (`P-GIT-MAINTAINER`).

---

## Changes

### Implementation

- **Change implemented:** [ADR-026](../../architecture/standards-and-adrs/ADR-026-git-internal-maintainer-kb-fr121.md) — git maintainer SoT + Docusaurus adopter-public; Obsidian deferred to T07.
- **Change implemented:** `AGENTS.md` — `maintainer-kb` track loads ADR-026 + knowledge README; **P-GIT-MAINTAINER** replaces P-NOTION-FIRST.
- **Change implemented:** `docs/project-agent-manifest.json` — protocol, routing, `C-ADR-026`, `documentationSurfaces.maintainerKbSot: git`.
- **Change implemented:** `rw-config.yaml` — `documentation_surfaces` + `maintainer_editor_profile` schema block.
- **Change implemented:** ADR-024 + FR-114 partial supersession banners (maintainer SoT → FR-121).
- **Change implemented:** `tests/test_agent_bootstrap_fr121_git_maintainer.py`; FR-114 Notion-first tests gated post-ADR-026.

### Documentation

- **Change implemented:** [IPP-E05S08T06](../../implementation-cycles/IPP-E05S08T06-adr-026-git-maintainer-authoring-bootstrap-fr121.md) planning package.

---

## Related

- [FR-121](../../kanban/fr-br/FR-121-git-internal-maintainer-kb-oss-documentation-surfaces.md)
- [T06 task doc](../../kanban/epics/epic-05/story-08-knowledge-base/T06-adr-026-git-maintainer-authoring-bootstrap-fr121.md)
