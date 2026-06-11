# Changelog — v0.6.9.33+1

**Release Date:** 2026-06-11 11:16:18 UTC  
**Epic:** 6 | **Story:** 9 | **Task:** 33  
**SemVer:** v0.4.1145+1  
**Task:** E06:S09:T33 — ADK package update mechanism (FR-129)

---

## Summary

Change implemented: productized **in-place ADK vendor update** v1 — manifest helpers, `update_adk_packages.py` (check / update / init-manifest), host scaffold drift report, post-update `verify_vendor_tree`, INSTALL documentation, and pytest coverage.

---

## Changed

### Framework scripts

- **`adk_manifest.py`** — load/save `.ai-dev-kit.yaml` v1.1 vendor block (channel, pinned version, packages).
- **`update_adk_packages.py`** — git vendor checkout and copy-sync channels; `--dry-run`; scaffold review report; install receipt on update.
- **`test_update_adk_packages.py`** — copy-sync bump, check mode, dry-run, verify_vendor_tree integration.

### Documentation

- **`INSTALL_IN_YOUR_PROJECT.md`** — FR-129 update command examples (git + copy-sync); legacy manual path retained.
- **Greenfield mirror** synced via `sync_greenfield_install.py`.

### Kanban

- **E06:S09:T33** — v1 delivery; IPP linked; AC2–AC6 evidenced; AC1 SBL fixture replay pending operator verification.

---

## Related

- [FR-129](../kanban/fr-br/FR-129-adk-package-update-mechanism.md)
- [IPP-E06S09T33](../implementation-cycles/IPP-E06S09T33-adk-package-update-mechanism-fr129.md)
