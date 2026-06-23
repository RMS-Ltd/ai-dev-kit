---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-09T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 5, Story 8, Task 7: Optional Obsidian editor profiles — greenfield install (**FR-121**)

**Task ID:** E05:S08:T07  
**Status:** ✅ COMPLETE (v0.5.8.7+1)  
**Priority:** MEDIUM  
**Created:** 2026-06-09  
**Last updated:** 2026-06-09 (v0.5.8.7+1 — FR-121 wave 3 Obsidian install profiles)  
**Version:** v0.5.8.7+1  
**Code:** E05S08T07

Publication Status: NOT_APPLICABLE

---

## Associated FR

- [FR-121 — Git-internal maintainer KB (OSS documentation surfaces)](../../../fbu/FR-121-git-internal-maintainer-kb-oss-documentation-surfaces.md)

---

## Scope

Wave 3 of FR-121: add **optional** `maintainer_editor_profile` to greenfield / RW install path. Default `none` (git + IDE only). Optional scaffolds: `obsidian-personal` (quick-start doc, gitignore `.obsidian/`) and `obsidian-team` (template `community-plugins.json` + stable config; workspace state gitignored). **Does not** change git SoT.

---

## Input

- [IPP-E05S08T07 — Optional Obsidian editor profiles (greenfield install)](../../../../implementation-cycles/IPP-E05S08T07-optional-obsidian-editor-profiles-greenfield-install-fr121.md)
- [FR-121](../../../fbu/FR-121-git-internal-maintainer-kb-oss-documentation-surfaces.md)
- [E05:S08:T06](T06-adr-026-git-maintainer-authoring-bootstrap-fr121.md) (`rw-config` schema)
- [FR-080](../../../../fbu/FR-080-greenfield-installation-process.md)
- `packages/frameworks/workflow-mgt/scripts/install_greenfield_path.py`
- `packages/frameworks/workflow-mgt/scripts/install_release_workflow.py`

---

## Deliverables

1. **Installer prompt** (interactive + `--non-interactive` default `none`).
2. **Template directory** — e.g. `packages/frameworks/workflow-mgt/templates/obsidian-team/` (minimal stable config).
3. **Maintainer guide** — `docs/maintainer/OBSIDIAN.md` or section in install docs: personal vs team profile, gitignore rules.
4. **`rw-config.yaml` write** — set `maintainer_editor_profile` on install when chosen.
5. **Greenfield sync** — mirror per P-GREENFIELD-SYNC.

---

## Acceptance Criteria

- [x] Default install: no Obsidian files; `maintainer_editor_profile: none`.
- [x] `obsidian-personal`: quick-start only; `.obsidian/` gitignored.
- [x] `obsidian-team`: stable config copied; `workspace.json` / cache gitignored.
- [x] Install docs describe all three options; git remains maintainer KB SoT in every case.

---

## Dependencies

**Depends On:** [E05:S08:T06](T06-adr-026-git-maintainer-authoring-bootstrap-fr121.md) (`documentation_surfaces` / profile schema)

**Blocks:** —

---

## Version Anchor

**Forensic marker:** ✅ COMPLETE (**v0.5.8.7+1** — FR-121 wave 3: Obsidian editor profiles at install)

---

## References

- [IPP-E05S08T07 — Optional Obsidian editor profiles (greenfield install)](../../../../implementation-cycles/IPP-E05S08T07-optional-obsidian-editor-profiles-greenfield-install-fr121.md)
- [FR-121](../../../fbu/FR-121-git-internal-maintainer-kb-oss-documentation-surfaces.md)
- [docs/maintainer/OBSIDIAN.md](../../../../maintainer/OBSIDIAN.md)
- [INSTALL_IN_YOUR_PROJECT.md](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md)
