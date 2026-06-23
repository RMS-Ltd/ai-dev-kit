---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-09T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 5, Story 8, Task 6: ADR-026 + git-maintainer authoring bootstrap (**FR-121**)

**Task ID:** E05:S08:T06  
**Status:** ✅ COMPLETE (v0.5.8.6+1)  
**Priority:** HIGH  
**Created:** 2026-06-09  
**Last updated:** 2026-06-09 (v0.5.8.6+1 — ADR-026 + bootstrap rewire)  
**Version:** v0.5.8.6+1  
**Code:** E05S08T06

Publication Status: NOT_APPLICABLE

---

## Associated FR

- [FR-121 — Git-internal maintainer KB (OSS documentation surfaces)](../../../fbu/FR-121-git-internal-maintainer-kb-oss-documentation-surfaces.md)

---

## Scope

Wave 2 of FR-121: publish **ADR-026** (two publish surfaces, git maintainer SoT); rewire agent bootstrap to replace `P-NOTION-FIRST` with **`P-GIT-MAINTAINER`**; document `rw-config.yaml` `documentation_surfaces` schema; annotate ADR-024 partial supersession.

---

## Input

- [IPP-E05S08T06 — ADR-026 + git-maintainer authoring bootstrap (FR-121 wave 2)](../../../../implementation-cycles/IPP-E05S08T06-adr-026-git-maintainer-authoring-bootstrap-fr121.md)
- [FR-121](../../../fbu/FR-121-git-internal-maintainer-kb-oss-documentation-surfaces.md)
- [E05:S08:T05](T05-reverse-notion-migration-git-internal-maintainer-kb-fr121.md) (restored corpus — preferred before bootstrap finalization)
- [`AGENTS.md`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/AGENTS.md)
- [`docs/project-agent-manifest.json`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/project-agent-manifest.json)
- [ADR-024](../../../../architecture/standards-and-adrs/ADR-024-documentation-surfaces-three-surface-model-fr114.md)
- [ADR-012](../../../../architecture/standards-and-adrs/ADR-012-agent-bootstrap-and-task-routing.md)

---

## Deliverables

1. **ADR-026** — Git-internal maintainer KB; Docusaurus adopter-public; Obsidian as optional editor profile only.
2. **`AGENTS.md`** — `maintainer-kb` track loads repo paths; anti-pattern list removes Notion-first; binding rule `P-GIT-MAINTAINER`.
3. **`project-agent-manifest.json`** — sync routing, `documentationSurfaces`, `protocol[]`.
4. **`rw-config.yaml` schema docs** — `documentation_surfaces.maintainer_kb.sot: git`; optional `maintainer_editor_profile`; deprecate `notion_kb_url` as SoT (hub link optional).
5. **ADR-024 banner** — partial supersession pointer to ADR-026.

---

## Acceptance Criteria

- [x] ADR-026 published under `docs/architecture/standards-and-adrs/`.
- [x] No agent cold-start instruction to open Notion for maintainer KB by default.
- [x] Manifest `taskRouting` / `canon[]` includes ADR-026.
- [x] FR-114 and ADR-024 cross-link FR-121 / ADR-026 supersession scope.

---

## Dependencies

**Depends On:** [E05:S08:T05](T05-reverse-notion-migration-git-internal-maintainer-kb-fr121.md) (soft — policy can draft in parallel; reconcile before COMPLETE)

**Blocks:** —

---

## Version Anchor

**Forensic marker:** ✅ COMPLETE (**v0.5.8.6+1** — FR-121 wave 2: ADR-026 + git-maintainer bootstrap)

---

## References

- [IPP-E05S08T06 — ADR-026 + git-maintainer authoring bootstrap (FR-121 wave 2)](../../../../implementation-cycles/IPP-E05S08T06-adr-026-git-maintainer-authoring-bootstrap-fr121.md)
- [FR-121](../../../fbu/FR-121-git-internal-maintainer-kb-oss-documentation-surfaces.md)
- [FR-103](../../../../fbu/FR-103-agent-bootstrap-and-task-routing.md)
- [E05:S08:T04](T04-agent-notion-first-authoring-and-bootstrap-routing-fr114.md)
