# Changelog — v0.6.9.36+1

**Release Date:** 2026-06-15 11:22:56 UTC  
**Epic:** 6 | **Story:** 9 | **Task:** 36  
**SemVer:** v0.4.1166+1  
**Task:** E06:S09:T36 — Adopter Path Selector + Install RC (UXR-029)

---

## Summary

Change implemented: Phase 0 kit response to SBL attempt 09 / [#52](https://github.com/RMS-Ltd/ai-dev-kit/issues/52) — Adopter Path Selector artefacts, Install RC checklist validator, documentation schema, sqlite pre-RW init, and greenfield orchestrator adoption-path flags. Prepares SBL attempt 10 and brownfield recon (fynd.deals / Confidentia).

---

## Added

- **`DOCUMENTATION_SCHEMA.md`** — adopter post-install documentation layout (ADR-026/030).
- **`install-rc-checklist.yaml`** + **`validate_install_rc.py`** — install-complete gate distinct from GitHub sign-off contract.
- **`init_release_state_db.py`** — empty `.adk/release-state.db` for greenfield sqlite mode.
- **`ADR-030`** — three-path adoption model (Arm A / Arm B / strangler).
- **`UXR-029`** — install path experiment spec.
- **Maintainer KB** — [greenfield-brownfield selective adoption synthesis](docs/knowledge/articles/greenfield-brownfield-selective-adoption-sbl-attempt-09.md).
- **Preflight guides** — `adk-install-into-sbl/attempt-10/README.md`, `docs/guides/adopter-install-attempt-preflight.md`.

---

## Changed

- **`install_greenfield_path.py`** — `--adoption-path`, `--init-sqlite`, `--run-install-rc`, `--catalog v4`.
- **`INSTALL_IN_YOUR_PROJECT.md`** — Path Selector cross-links to schema, RC checklist, preflight.
- **`release-state-sqlite-mode.md`** — greenfield init + orchestrator cross-links.
- **greenfield-install/** mirror synced.

---

## Related

- [UXR-029](docs/kanban/fr-br/UXR-029-adk-install-path-experiment.md)
- [Issue #52](https://github.com/RMS-Ltd/ai-dev-kit/issues/52)
- Operator follow-on: **AC7** SBL attempt 10 RC PASS
