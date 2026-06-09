---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-09T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 5, Story 8, Task 5: Reverse Notion migration — git-internal maintainer KB (**FR-121**)

**Task ID:** E05:S08:T05  
**Status:** ✅ COMPLETE (v0.5.8.5+2)  
**Priority:** HIGH  
**Created:** 2026-06-09  
**Last updated:** 2026-06-09 (v0.5.8.5+2 — FR-121 wave 1 reverse migration)  
**Version:** v0.5.8.5+2  
**Code:** E05S08T05

Publication Status: NOT_APPLICABLE

---

## Associated FR

- [FR-121 — Git-internal maintainer KB (OSS documentation surfaces)](../../../fr-br/FR-121-git-internal-maintainer-kb-oss-documentation-surfaces.md)

---

## Scope

Wave 1 of FR-121: export Notion maintainer pages and restore **full markdown** at original git paths per [`fr114-notion-migration-manifest.json`](../../../../knowledge/fr114-notion-migration-manifest.json). Remove stub-only indirection (`notion_sot: true`). Produce reverse-migration evidence manifest.

---

## Input

- [IPP-E05S08T05 — Reverse Notion migration (FR-121 wave 1)](../../../../implementation-cycles/IPP-E05S08T05-reverse-notion-migration-git-internal-maintainer-kb-fr121.md)
- [FR-121](../../../fr-br/FR-121-git-internal-maintainer-kb-oss-documentation-surfaces.md)
- [`fr114-notion-migration-manifest.json`](../../../../knowledge/fr114-notion-migration-manifest.json) (218 entries)
- Notion Engineering KB (`rw-config.yaml` → `notion_kb_url`) — export source until decommissioned
- Existing scripts: `scripts/notion_migration_manifest.py`, `scripts/apply_notion_stubs.py` (reference / extend or successor)

---

## Deliverables

1. **Reverse migration manifest** — `source_path`, export timestamp, git restore status, link-repair notes.
2. **Restored markdown** — full text at `docs/knowledge/`, `docs/maintenance/`, `docs/analysis/`, and other manifest paths.
3. **Stub removal** — no `notion_sot: true` SoT stubs for migrated entries.
4. **KB index refresh** — `scripts/kb_index.py` / `KB-INDEX.md` updated.
5. **Link hygiene pass** — fix broken internal links introduced by export (best-effort; document remainder).

---

## Acceptance Criteria

- [x] All manifest entries with `stub_applied: true` restored to full git text or listed in manifest `exclusion_reason`.
- [x] `docs/knowledge/README.md` updated — git SoT stated; Notion demoted to optional archive reference.
- [x] Sample maintainer-tree edit does not trigger Docusaurus build failure (exclude globs unchanged).
- [x] Reverse migration manifest committed under `docs/knowledge/`.

---

## Dependencies

**Depends On:** — (intake complete)

**Blocks:** [E05:S08:T06](T06-adr-026-git-maintainer-authoring-bootstrap-fr121.md) (policy/bootstrap should reflect restored corpus)

---

## References

- [IPP-E05S08T05 — Reverse Notion migration (FR-121 wave 1)](../../../../implementation-cycles/IPP-E05S08T05-reverse-notion-migration-git-internal-maintainer-kb-fr121.md)
- [FR-121](../../../fr-br/FR-121-git-internal-maintainer-kb-oss-documentation-surfaces.md)
- [FR-114](../../../fr-br/FR-114-split-documentation-surfaces-docusaurus-public-notion-maintainer-kb.md)
- [E05:S08:T03](T03-big-bang-notion-migration-maintainer-kb-fr114.md)
- [ADR-024](../../../../architecture/standards-and-adrs/ADR-024-documentation-surfaces-three-surface-model-fr114.md)
