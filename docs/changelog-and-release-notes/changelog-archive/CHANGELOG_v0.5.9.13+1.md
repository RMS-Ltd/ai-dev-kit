---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T00:30:47Z
expires_at: null
housekeeping_policy: archive
---

# Changelog v0.5.9.13+1

**Release Date:** 2026-06-05 00:30:47 UTC  
**Epic:** 5 | **Story:** 9 | **Task:** 13  
**SemVer:** v0.4.894+1

## Summary

E05:S09:T13 — **BR-090:** Change implemented — added `@docusaurus/faster@3.10.1` and aligned all `@docusaurus/*` portal pins to **3.10.1** so Docusaurus 3.10 builds with `future.v4: true`. Post-merge Actions verification pending.

## Change implemented

- **`portal/package.json`** — `@docusaurus/faster@3.10.1`; `@docusaurus/core`, `@docusaurus/preset-classic`, and type packages bumped to **3.10.1**.
- **`portal/package-lock.json`** — regenerated for consistent `npm ci`.
- **`portal/README.md`** — documents Faster dependency requirement with `future.v4`; updated install/build notes for 3.10.x.
- **Pytest:** `tests/test_portal_br090_faster_alignment.py` (new) — executable BR-090 contract.
- **IPP:** [IPP-E05S09T13](../../implementation-cycles/IPP-E05S09T13-docusaurus-faster-package-alignment.md).
- **BR-090** — deploy AC updated to reference merged `docusaurus-build.yml` deploy job (ADR-017).

## Verification

- `pytest tests/test_portal_br090_faster_alignment.py tests/test_portal_fr069_ci.py` — 13 passed locally.
- Local `npm run build` — passes `@docusaurus/faster` import; full corpus build blocked locally by disk space (ENOSPC); CI verification pending on `main`.

## Related

- [BR-090](../../project-management/kanban/fr-br/BR-090-docusaurus-faster-missing-dependabot-310-lockfile-drift.md)
- [IPP-E05S09T13](../../implementation-cycles/IPP-E05S09T13-docusaurus-faster-package-alignment.md)
