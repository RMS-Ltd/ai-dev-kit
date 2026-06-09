# Changelog v0.5.8.7+1

**Release Date:** 2026-06-09 17:00:47 UTC  
**Epic:** 5 | **Story:** 8 | **Task:** 7  
**Internal Version:** 0.5.8.7+1  
**SemVer:** v0.4.1102+1

---

## Summary

**E05:S08:T07** — FR-121 wave 3: optional Obsidian maintainer editor profiles at greenfield / RW install.

---

## Changes

### Implementation

- **Change implemented:** RW installer — `maintainer_editor_profile` prompt (`none` default), `--maintainer-editor-profile` CLI, non-interactive defaults.
- **Change implemented:** `generate_rw_config_yaml()` emits `documentation_surfaces` + profile on new installs.
- **Change implemented:** `obsidian-personal` / `obsidian-team` scaffolds + idempotent `.gitignore` merge.
- **Change implemented:** Greenfield orchestrator forwards `--maintainer-editor-profile`.
- **Change implemented:** Templates under `packages/frameworks/workflow-mgt/templates/obsidian-*`; greenfield mirror synced.
- **Change implemented:** `tests/test_install_obsidian_editor_profile.py`; installer locale keys synced.

### Documentation

- **Change implemented:** [`docs/maintainer/OBSIDIAN.md`](../../maintainer/OBSIDIAN.md) maintainer guide.
- **Change implemented:** `INSTALL_IN_YOUR_PROJECT.md`, `rw-config-schema.md`, ADR-026 §5 (T07 deferral removed).
- **Change implemented:** [IPP-E05S08T07](../../implementation-cycles/IPP-E05S08T07-optional-obsidian-editor-profiles-greenfield-install-fr121.md).

---

## Related

- [FR-121](../../kanban/fr-br/FR-121-git-internal-maintainer-kb-oss-documentation-surfaces.md)
- [T07 task doc](../../kanban/epics/epic-05/story-08-knowledge-base/T07-optional-obsidian-editor-profiles-greenfield-install-fr121.md)
