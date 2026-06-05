# Changelog v0.2.13.9+1

**Release Date:** 2026-06-05 18:30:00 UTC  
**Epic:** 2 | **Story:** 13 | **Task:** 9  
**SemVer:** v0.4.943+1

---

## Summary

E02:S13:T09 — **FR-050 workflows directory reorganization:** deprecated six remaining flat `workflows/*.yaml` duplicates as redirect stubs (T08 pattern); nested subdirectories are registry SoT; intake drift merged into nested YAML; registry v1.2.0; KB/README/MIGRATION_GUIDE path sweep.

---

## Changed

### Workflow package (`packages/frameworks/workflow-mgt/`)

- Flat stubs for intake, PVW, PIR, migration, testing, refactor workflows (RW stub retained from T08)
- `workflow-registry.yaml` v1.2.0 with deprecation notes
- Nested README SoT callouts for six workflows
- Adopter-facing KB guides, package README, installer messages → nested paths
- `MIGRATION_GUIDE.md` flat-stub deprecation policy (E02:S13:T09)

### Governance / planning

- IPP: `docs/implementation-cycles/IPP-E02S13T09-fr050-workflows-directory-reorganization.md`
- `ultimate-canonical-workflow-structure.md` — FR-050 nested layout supersession note
- FR-050 status → IMPLEMENTED

---

## Verification

- TD1 registry ↔ filesystem: PASS
- TD2 flat stub redirect contract: PASS (7 stubs)
- TD5 `validate-workflow-docs.py`: exit 0

---

## References

- [FR-050](../../project-management/kanban/fr-br/FR-050-workflows-directory-structure-reorganization.md)
- [IPP-E02S13T09](../../implementation-cycles/IPP-E02S13T09-fr050-workflows-directory-reorganization.md)
- GAP-WFMGT-STRUCT-001
