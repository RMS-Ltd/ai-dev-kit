---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-03T16:30:00Z
expires_at: null
housekeeping_policy: archive
---

# Changelog v0.8.3.6+2

**Release Date:** 2026-06-03 16:30:00 UTC  
**Epic:** 8 | **Story:** 3 | **Task:** 6  
**SemVer:** v0.4.852+2

## Summary

E08:S03:T06 — Dependabot and dependency security automation (FR-105).

## Change implemented

- Added [`.github/dependabot.yml`](../../../.github/dependabot.yml) for **pip** (repo root) and **npm** (`portal/`), weekly schedule, PR limits, Docusaurus npm group.
- Enabled Dependabot **security updates** on `RMS-Ltd/ai-dev-kit` (API: `automated-security-fixes` → `dependabot_security_updates: enabled`).
- Ran safe `npm audit fix` in `portal/` (33 → 21 vulnerabilities); deferred `npm audit fix --force` (would downgrade Docusaurus 3.9.2).
- Documented triage in [`portal/README.md`](../../../portal/README.md); link from [`docs/guides/README.md`](../../../docs/guides/README.md).
- Added [`tests/test_dependabot_config.py`](../../../tests/test_dependabot_config.py).
- Collateral: fixed `kboard.md` YAML frontmatter; removed broken ICW links in T17 task doc (Docusaurus strict build hygiene).

## Verification

- `pytest tests/test_dependabot_config.py` — pass.
- `npm ci` in `portal/` — pass after lockfile update.
- Full `npm run build` — still blocked by pre-existing strict markdown link failures in `docs/` (CI workflow also failing on `main` before this release).

## Related

- [FR-105](../../project-management/kanban/fr-br/FR-105-dependabot-dependency-security-automation.md)
- [IPP-E08S03T06](../../implementation-cycles/IPP-E08S03T06-dependabot-enablement-fr105.md)
