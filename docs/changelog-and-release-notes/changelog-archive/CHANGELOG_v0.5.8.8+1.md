# Changelog v0.5.8.8+1

**Release Date:** 2026-06-25 14:39:19 UTC  
**Epic:** 5 | **Story:** 8 | **Task:** 8  
**SemVer:** v0.4.1235

---

## Summary

E05:S08:T08 — **Change implemented:** FR-141 greenfield default `documentation_surfaces.adopter_public.sot: git` (no phantom `portal/`); semantic `rc-docs-schema` validation; Docusaurus opt-in via `--adopter-public-sot`. SemVer **v0.4.1235**.

---

## Changed

### Installer defaults (FR-141-F1 / S1)

- `install_release_workflow.py` emits git-native adopter docs by default; `allowlist_ref` only when `adopter_public.sot: docusaurus`.
- New CLI flag `--adopter-public-sot {git,docusaurus}`; greenfield orchestrator forwards the flag.

### Install RC validation (FR-141-F2 / S4)

- `validate_install_rc.py` `documentation_surfaces` check validates semantic coherence: git passes without `portal/`; Docusaurus requires `allowlist_ref` and on-disk portal tree.

### Documentation

- `rw-config-schema.md`, `INSTALL_IN_YOUR_PROJECT.md`, `rw-installer-quickstart-guide.md`, ADR-026 FR-141 note.

### Tests

- Extended `test_install_obsidian_editor_profile.py`, `test_validate_install_rc.py`, `test_install_greenfield_path.py` (31 focused tests pass).

### Greenfield mirror

- `greenfield-install/packages/frameworks/workflow-mgt/**` synced via `sync_greenfield_install.py`.

---

## Verification

```bash
pytest tests/test_install_obsidian_editor_profile.py tests/workflow_mgt/test_validate_install_rc.py tests/workflow_mgt/test_install_greenfield_path.py -q
python3 scripts/sync_greenfield_install.py --check
```

---

## Linked work

- [FR-141](docs/kanban/fbu/FR-141-adopter-documentation-profile-greenfield-default.md)
- [IPP-E05S08T08](docs/implementation-cycles/IPP-E05S08T08-adopter-documentation-profile-greenfield-default.md)
