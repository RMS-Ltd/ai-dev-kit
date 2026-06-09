---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-09T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 5, Story 8, Task 7: Optional Obsidian editor profiles — greenfield install (**FR-121**)

**Task ID:** E05:S08:T07  
**Status:** 📋 TODO  
**Priority:** MEDIUM  
**Created:** 2026-06-09  
**Last updated:** 2026-06-09 (FR-121 intake)  
**Version:** — (pending RW -k)  
**Code:** E05S08T07

Publication Status: NOT_APPLICABLE

---

## Associated FR

- [FR-121 — Git-internal maintainer KB (OSS documentation surfaces)](../../../fr-br/FR-121-git-internal-maintainer-kb-oss-documentation-surfaces.md)

---

## Scope

Wave 3 of FR-121: add **optional** `maintainer_editor_profile` to greenfield / RW install path. Default `none` (git + IDE only). Optional scaffolds: `obsidian-personal` (quick-start doc, gitignore `.obsidian/`) and `obsidian-team` (template `community-plugins.json` + stable config; workspace state gitignored). **Does not** change git SoT.

---

## Input

- [FR-121](../../../fr-br/FR-121-git-internal-maintainer-kb-oss-documentation-surfaces.md)
- [E05:S08:T06](T06-adr-026-git-maintainer-authoring-bootstrap-fr121.md) (`rw-config` schema)
- [FR-080](../../../../fr-br/FR-080-greenfield-installation-process.md)
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

- [ ] Default install: no Obsidian files; `maintainer_editor_profile: none`.
- [ ] `obsidian-personal`: quick-start only; `.obsidian/` gitignored.
- [ ] `obsidian-team`: stable config copied; `workspace.json` / cache gitignored.
- [ ] Install docs describe all three options; git remains maintainer KB SoT in every case.

---

## Dependencies

**Depends On:** [E05:S08:T06](T06-adr-026-git-maintainer-authoring-bootstrap-fr121.md) (`documentation_surfaces` / profile schema)

**Blocks:** —

---

## References

- [FR-121](../../../fr-br/FR-121-git-internal-maintainer-kb-oss-documentation-surfaces.md)
- [INSTALL_IN_YOUR_PROJECT.md](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md)
