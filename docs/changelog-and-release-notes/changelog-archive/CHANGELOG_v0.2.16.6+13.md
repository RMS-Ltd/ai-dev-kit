# Changelog v0.2.16.6+13

**Release Date:** 2026-06-16 00:25:00 UTC  
**Epic:** 2 | **Story:** 16 | **Task:** 6  
**SemVer:** v0.4.1182+13

---

## Summary

E02:S16:T06 Wave 8 — Dependabot cross-lane hygiene: pin transitive `ws` to **7.5.11** (CVE-2026-48779) under `webpack-bundle-analyzer`; retain `js-yaml@4.2.0` override. Docusaurus build verified locally.

---

## Change implemented

### Portal / Dependabot ([alerts dashboard](https://github.com/RMS-Ltd/ai-dev-kit/security/dependabot))

| Alert | Package | Severity | Remediation |
| ----- | ------- | -------- | ----------- |
| #7 | `ws` | High | `"webpack-bundle-analyzer": { "ws": "7.5.11" }` in [`portal/package.json`](../../../portal/package.json) overrides |
| #8 | `js-yaml` | Medium | Top-level `"js-yaml": "4.2.0"` override retained (patched ≥4.2.0); operator re-verify after merge |

- Refreshed [`portal/package-lock.json`](../../../portal/package-lock.json) — `ws@7.5.11` under `webpack-bundle-analyzer`; `webpack-dev-server` retains `ws@8.21.0` (outside CVE range).
- `npm run build` — **SUCCESS** (Docusaurus production build).

**Scope note:** Dependabot enablement policy remains **E08:S03:T06** (FR-105); this wave addresses open alerts as FR-112 security hygiene.

---

## Related

- [E02:S16:T06 — GitHub Security & Code Quality health (Perpetual)](../../../kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T06-github-security-code-quality-health-perpetual.md)
- [E08:S03:T06 — Dependabot enablement (FR-105)](../../../kanban/epics/epic-08/story-03-automation-scripts/T06-dependabot-enablement-fr105.md)
- [FR-112 — Perpetual GitHub CI and security health lanes](../../../kanban/fr-br/FR-112-perpetual-github-ci-and-security-health-lanes.md)
