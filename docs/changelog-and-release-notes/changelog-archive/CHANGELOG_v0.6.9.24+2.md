# CHANGELOG v0.6.9.24+2 — Acquisition-layer ADK error codes (FR-111)

**Release Date:** 2026-06-05 15:30:00 UTC  
**Epic:** 6 | **Story:** 9 | **Task:** 24  
**SemVer (task_touch):** v0.4.973+2

---

## Summary

**E06:S09:T24:** Extend FR-108 install error registry to **1.1.0** with acquisition process **I05** (`verify_vendor_tree.py`) and CLI process **I06**; regenerate troubleshooting appendix with CI drift guard; INSTALL and lean README reporting callouts.

---

## Change implemented

### Registry and emitters (FR-111)

- `install-error-codes.yaml` **1.1.0** — I05 (E01–E06), I06 (E01–E02).
- New `verify_vendor_tree.py` — vendor layout + tarball checksum preflight.
- `install_greenfield_path.py` — `--vendor-root` / vendor preflight before installers.
- `cli/commands/install.py` — `ADK-I06.*` replaces coarse `ADK-I02.E01` for CLI failures.

### Documentation

- Troubleshooting § regenerated with `<!-- ADK-ERROR-CODES:* -->` markers + `test_install_error_docs_sync.py`.
- INSTALL acquisition/brownfield callouts; `greenfield-install/README.md` via sync template.
- ADR-016 process table; FR-108 taxonomy fix; book integration catalog 1.1.0.

### Tests

- `test_verify_vendor_tree.py`, `test_cli_install_error_codes.py`, registry/emitter updates.

---

## References

- [FR-111](../../project-management/kanban/fr-br/FR-111-acquisition-layer-adk-error-codes-and-install-error-doc-hygiene.md)
- [IPP-E06S09T24](../../implementation-cycles/IPP-E06S09T24-acquisition-layer-adk-error-codes-fr111.md)
- [ADR-016](../../architecture/standards-and-adrs/ADR-016-install-setup-error-code-taxonomy.md)
