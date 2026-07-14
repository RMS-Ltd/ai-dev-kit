# Changelog — v0.2.16.3+9

**Release Date:** 2026-07-14 13:12:24 UTC  
**Epic:** 2 | **Story:** 16 | **Task:** 3  
**SemVer:** v0.4.1252

## Summary

E02:S16:T03 — **Change implemented:** Tighten adopter install docs so Quick Start pins, SemVer-ordering tip, and INSTALL examples match current release identity (`v0.4.1251` → wave target SemVer **v0.4.1252**); drop stale embedded greenfield SHA table in favor of the release `.sha256` sidecar. Docs-only (`RW -d --art`).

## Changes

### Updated

- `README.md` — SemVer tip `0.4.1198` → current core; install / GHCR / tarball pins aligned; authenticity via release sidecar (no stale hash table); version banner for this release
- `INSTALL_IN_YOUR_PROJECT.md` — lean-vendor / GHCR / FR-129 / Method 2 examples pinned to current SemVer core; SHA guidance matches sidecar pattern
- `greenfield-install/README.md` — pin examples aligned with this release SemVer core (template parity)

### Touched surfaces (AC4)

| Surface | Why |
| --- | --- |
| Root README | Outdated pin (~188 SemVer behind) and ADR-031 tip example |
| INSTALL guide | Same pin/SHA drift as README Quick Start |
| greenfield-install README | Keep lean-tree template pin in parity with root adopter docs |
