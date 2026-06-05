# CHANGELOG v0.6.9.23+8 — Install doc SemVer pin alignment (E06:S09:T23)

**Release Date:** 2026-06-05 12:30:00 UTC  
**Epic:** 6 | **Story:** 9 | **Task:** 23  
**SemVer (task_touch):** v0.4.964+8

---

## Summary

**E06:S09:T23 docs-only (RW -d):** Align adopter-facing SemVer pins to **`v0.4.963`** across README, INSTALL, ADR-021, `greenfield-install/README.md`, and sync template (GHCR + submodule checkout examples).

---

## Documentation

- `README.md` — quick-install tag + GHCR alternate
- `INSTALL_IN_YOUR_PROJECT.md` — lean vendor acquire/update examples
- `ADR-021-greenfield-install-ghcr-delivery-channel.md` — tag alignment + extract flow
- `scripts/sync_greenfield_install.py` — README template
- `greenfield-install/README.md` — regenerated via sync
