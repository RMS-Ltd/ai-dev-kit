# Changelog v0.2.16.6+20

**Release Date:** 2026-06-23 13:36:44 UTC  
**Epic:** 2 | **Story:** 16 | **Task:** 6  
**SemVer:** v0.4.1212+20

---

## Summary

E02:S16:T06 Wave 12 — Dependabot **#10** `http-proxy-middleware` Host-header routing bypass: npm override pins **2.0.10** (Dependabot security updates failed with `security_update_not_possible`).

---

## Change implemented

### Dependabot alert #10

| Package | Severity | Fix |
| ------- | -------- | --- |
| `http-proxy-middleware` | Medium | `"http-proxy-middleware": "2.0.10"` npm override in `portal/package.json` |

**Root cause:** `webpack-dev-server@5.2.5` (via `@docusaurus/core`) requires `^2.0.9`; vulnerable **2.0.9** installed; earliest fixed **2.0.10**. Dependabot updates [#1431585500](https://github.com/RMS-Ltd/ai-dev-kit/network/updates/1431585500) and [#1431587338](https://github.com/RMS-Ltd/ai-dev-kit/network/updates/1431587338) could not auto-resolve parent constraints.

### Verification (local)

| Check | Result |
| ----- | ------ |
| `npm ls http-proxy-middleware` | **2.0.10** overridden |
| `npm audit` | **0** vulnerabilities |
| `npm run build` (portal) | **SUCCESS** |
| Operator Dependabot dashboard (TC40) | **pending** post-merge |

---

## References

- [Dependabot alert #10](https://github.com/RMS-Ltd/ai-dev-kit/security/dependabot/10)
- [FR-112](../../../kanban/fbu/FR-112-perpetual-github-ci-and-security-health-lanes.md)
