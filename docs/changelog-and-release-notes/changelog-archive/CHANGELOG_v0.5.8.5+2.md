# Changelog v0.5.8.5+2

**Release Date:** 2026-06-09 13:04:34 UTC  
**Epic:** 5 | **Story:** 8 | **Task:** 5  
**Internal Version:** 0.5.8.5+2  
**SemVer:** v0.4.1101+2

---

## Summary

**E05:S08:T05** — FR-121 wave 1: reverse Notion migration restoring full maintainer KB markdown in git (218 manifest paths).

---

## Changes

### Implementation

- **Change implemented:** `scripts/reverse_notion_migration_fr121.py` restores full text from pre-stub git commit `6b563cdf^` for all 218 `fr114-notion-migration-manifest.json` entries.
- **Change implemented:** `docs/knowledge/fr121-reverse-migration-manifest.json` — reverse migration evidence manifest.
- **Change implemented:** `fr114-notion-migration-manifest.json` — `reverse_migration_complete: true`; all `stub_applied` cleared.
- **Change implemented:** `docs/knowledge/README.md` — git SoT; Notion demoted to optional archive.
- **Change implemented:** KB index regenerated; link hygiene pass (`project-management/kanban` → `kanban` where applicable).
- **Change implemented:** `tests/test_reverse_notion_migration_fr121.py`; FR-114 stub test gated post-reverse.

### Documentation

- **Change implemented:** [IPP-E05S08T05](../../implementation-cycles/IPP-E05S08T05-reverse-notion-migration-git-internal-maintainer-kb-fr121.md) planning package.

---

## Related

- [FR-121](../../kanban/fr-br/FR-121-git-internal-maintainer-kb-oss-documentation-surfaces.md)
- [E05:S08:T05](../../kanban/epics/epic-05/story-08-knowledge-base/T05-reverse-notion-migration-git-internal-maintainer-kb-fr121.md)
- [IPP-E05S08T05](../../implementation-cycles/IPP-E05S08T05-reverse-notion-migration-git-internal-maintainer-kb-fr121.md)
