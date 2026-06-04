# Changelog v0.2.16.10+5

**Release Date:** 2026-06-04 22:55:49 UTC

**Epic:** 2 | **Story:** 16 | **Task:** 10 | **Build:** 5

**SemVer:** v0.4.887+5

**Summary:** Portal npm transitive dependency security overrides — `uuid` 11.1.1 and `serialize-javascript` 7.0.5 via `package.json` overrides; `npm audit` clean.

---

## Changed

### `portal/package.json`

- Added npm `overrides` for transitive vulnerabilities:
  - `uuid`: **11.1.1** (was 8.3.2 via `sockjs` / `webpack-dev-server`)
  - `serialize-javascript`: **7.0.5** (was 6.0.2 via webpack plugins)

### `portal/package-lock.json`

- Lockfile refreshed; resolved `node_modules/uuid` and `node_modules/serialize-javascript` to override versions.

---

## Verification

- `npm audit` in `portal/`: **0 vulnerabilities** (down from 33 before overrides).

---

## References

- [E02:S16:T10](../../project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T10-ad-hoc-repository-infrastructure-maintenance-perpetual.md)
- [FR-105](../../project-management/kanban/fr-br/FR-105-dependabot-dependency-security-automation.md) — Dependabot / npm audit context
