# CHANGELOG v0.6.9.23+3 — Greenfield CI drift + release workflow fix (E06:S09:T23)

**Release Date:** 2026-06-05 12:15:00 UTC  
**Epic:** 6 | **Story:** 9 | **Task:** 23  
**SemVer (task_touch):** v0.4.959+3

---

## Summary

**E06:S09:T23 post-ship (BR-097 / `--art`):** Fix Linux CI drift on `greenfield-install/` epic template path casing; harden `sync_greenfield_install.py --check` with git-index fingerprints on both trees; correct `greenfield-release.yml` tag filter expression so GHCR publish runs on SemVer core tags.

---

## Change implemented

### CI / sync (FR-110)

- Re-index `greenfield-install/packages/frameworks/` to match `packages/frameworks/` `Epic-*` template casing (Linux-safe).
- `scripts/sync_greenfield_install.py` — git-index drift check on dest; README template includes GHCR alternate path.

### Release workflow (ADR-021)

- `.github/workflows/greenfield-release.yml` — replace invalid `=~` job `if` with `matches()` + `startsWith(refs/tags/v)`.

---

## References

- [ADR-021](../../architecture/standards-and-adrs/ADR-021-greenfield-install-ghcr-delivery-channel.md)
- [IPP-E06S09T23](../../implementation-cycles/IPP-E06S09T23-greenfield-install-github-packages-delivery-uxr021.md)
