---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-06T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 5, Story 8, Task 4: Agent Notion-first authoring and bootstrap routing (**FR-114**)

**Task ID:** E05:S08:T04  
**Status:** ✅ COMPLETE (v0.5.8.4+2)  
**Priority:** HIGH  
**Created:** 2026-06-06  
**Last updated:** 2026-06-07 (RW — FR-114 F4/F5 Notion-first bootstrap shipped)  
**Version:** v0.5.8.4+2  
**Code:** E05S08T04

Publication Status: NOT_APPLICABLE

---

## Associated FR

- [FR-114 — Split documentation surfaces (Docusaurus public + Notion maintainer KB)](../../../fr-br/FR-114-split-documentation-surfaces-docusaurus-public-notion-maintainer-kb.md)

---

## Input

- [IPP-E05S08T04 — Agent Notion-first authoring and bootstrap routing (FR-114)](../../../../implementation-cycles/IPP-E05S08T04-agent-notion-first-authoring-and-bootstrap-routing-fr114.md)
- [FR-114](../../../fr-br/FR-114-split-documentation-surfaces-docusaurus-public-notion-maintainer-kb.md) agent authoring decision (Notion-first via MCP)
- [`AGENTS.md`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/AGENTS.md) · [`docs/project-agent-manifest.json`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/project-agent-manifest.json)
- [ADR-012](../../../../architecture/standards-and-adrs/ADR-012-agent-bootstrap-and-task-routing.md)
- `rw-config.yaml` → `notion_hub_url`, `notion_kb_url` (`rmearssolutions@gmail.com` workspace; URLs refreshed by T03 clean-slate bootstrap)

---

## Scope

Wire agent bootstrap and maintainer documentation policy so **new maintainer/dev docs default to Notion** (MCP). Git stubs only when workflows, validators, or adopter-public promotion require repo paths. Publish **ADR** for three-surface SoT rules.

---

## Deliverables

1. **ADR** — Documentation surfaces: Docusaurus (adopter-public) / Notion (maintainer KB) / git (workflow SoT).
2. **`AGENTS.md`** — New routing track or rules for `notion_kb_url`; when to create git stubs.
3. **`project-agent-manifest.json`** — Mirror routing + `notion_kb_url` in `taskRouting` or config section.
4. **Stub template** — Canonical markdown stub format (`SoT: Notion — [link]`).
5. **Update** `ultimate-canonical-kb-structure.md` — Logical pillars ≠ single publish tree.

---

## Acceptance Criteria

- [x] ADR published under `docs/architecture/standards-and-adrs/`. ✅ v0.5.8.4+2
- [x] `AGENTS.md` states Notion-first for maintainer documentation. ✅ v0.5.8.4+2
- [x] Manifest synced with `AGENTS.md` routing table. ✅ v0.5.8.4+2
- [x] Stub template documented in ADR or `docs/knowledge/README.md`. ✅ v0.5.8.4+2
- [x] RC ≥ 1 significant release notes policy cross-linked (implementation scaffold in T15). ✅ v0.5.8.4+2

---

## References

- [IPP-E05S08T04](../../../../implementation-cycles/IPP-E05S08T04-agent-notion-first-authoring-and-bootstrap-routing-fr114.md)
- [ADR-024](../../../../architecture/standards-and-adrs/ADR-024-documentation-surfaces-three-surface-model-fr114.md)
- [FR-114](../../../fr-br/FR-114-split-documentation-surfaces-docusaurus-public-notion-maintainer-kb.md)
- [E05:S08:T03](T03-big-bang-notion-migration-maintainer-kb-fr114.md)
- [E05:S09:T15](../story-09-docusaurus-documentation-portal/T15-docusaurus-adopter-public-publish-allowlist-fr114.md)
- [FR-103](../../../../fr-br/FR-103-agent-bootstrap-and-task-routing.md)
